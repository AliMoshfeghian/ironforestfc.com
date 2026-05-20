import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request) {
  try {
    const body = await request.json();
    const { type, email, name, age, position, experience, company, contactName, phone, interest, message } = body;

    // Basic Validation
    if (!type) {
      return NextResponse.json({ success: false, message: "Submission type is required" }, { status: 400 });
    }

    if (!email || !email.includes("@")) {
      return NextResponse.json({ success: false, message: "Valid email address is required" }, { status: 400 });
    }

    // Prepare structured data
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

    // Log the submission to the server console
    console.log(`[Form Submission] Type: ${type.toUpperCase()}`, submission);

    // Save locally (for development/testing on local machine)
    try {
      const submissionsDir = process.cwd();
      const filePath = path.join(submissionsDir, "submissions.json");

      let currentSubmissions = [];
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        currentSubmissions = JSON.parse(fileContent || "[]");
      }

      currentSubmissions.push(submission);
      fs.writeFileSync(filePath, JSON.stringify(currentSubmissions, null, 2), "utf-8");
      console.log(`[Form Submission] Saved locally to ${filePath}`);
    } catch (fsError) {
      // Gracefully handle file system restrictions in serverless environments (like Vercel)
      console.warn(
        "[Form Submission] File system write skipped or failed (expected on serverless environments like Vercel). Submissions will be logged.",
        fsError.message
      );
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
