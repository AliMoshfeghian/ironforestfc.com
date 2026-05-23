import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { type, email, name, age, position, experience, company, contactName, phone, interest, message } = body;

    if (!type) {
      return NextResponse.json({ success: false, message: "Submission type is required" }, { status: 400 });
    }
    if (!email || !email.includes("@")) {
      return NextResponse.json({ success: false, message: "Valid email address is required" }, { status: 400 });
    }

    const submission = {
      id: `${type}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString(),
      type,
      email,
    };

    if (type === "fans") {
      if (!name) return NextResponse.json({ success: false, message: "Name is required" }, { status: 400 });
      submission.name = name;
    } else if (type === "players") {
      if (!name || !age || !experience) {
        return NextResponse.json({ success: false, message: "Name, Age, and Experience are required" }, { status: 400 });
      }
      submission.name = name;
      submission.age = parseInt(age);
      submission.position = position || "Midfielder";
      submission.experience = experience;
    } else if (type === "sponsors") {
      if (!company || !contactName || !message) {
        return NextResponse.json({ success: false, message: "Company, Contact Person, and Message are required" }, { status: 400 });
      }
      submission.company = company;
      submission.contactName = contactName;
      submission.phone = phone || "";
      submission.interest = interest || "Other";
      submission.message = message;
    } else {
      return NextResponse.json({ success: false, message: "Invalid submission type" }, { status: 400 });
    }

    const webhookUrl = process.env.SHEETS_WEBHOOK_URL;
    const webhookSecret = process.env.SHEETS_WEBHOOK_SECRET;

    if (!webhookUrl || !webhookSecret) {
      // Always log the full payload so a missing env var doesn't silently drop leads.
      console.error("[Form Submission] SHEETS_WEBHOOK_URL or SHEETS_WEBHOOK_SECRET missing. Submission:", submission);
    } else {
      try {
        const res = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...submission, secret: webhookSecret }),
          redirect: "follow",
        });
        const result = await res.json().catch(() => ({ success: false, message: "Non-JSON response" }));
        if (!result.success) {
          console.error("[Form Submission] Webhook rejected submission:", result, submission);
        }
      } catch (webhookError) {
        // Don't fail the user-facing request — log so the lead is recoverable from Vercel logs.
        console.error("[Form Submission] Webhook call failed:", webhookError.message, submission);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Submission received successfully. Welcome to the Forest!",
    });
  } catch (error) {
    console.error("[Form Submission Error]", error);
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
