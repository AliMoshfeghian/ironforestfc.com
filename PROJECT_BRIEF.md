# Iron Forest FC — Project Brief

Single-page marketing/teaser site for Iron Forest FC (Huntsville, TX soccer club). Next.js 16 App Router, React 19, plain JavaScript, CSS Modules. Targeting Summer 2027 inaugural season; positioning is "targeted entry into USL League Two."

## Hosting & identity

- **Domain**: ironforestfc.com (apex 307-redirects to `www.ironforestfc.com` — handled by Vercel, no action needed)
- **Vercel project**: lives on Leu's Vercel team (the friend's account, not Lee's `brightolive` team). Auto-deploys from the GitHub repo on push to `main`.
- **GitHub repo**: `AliMoshfeghian/ironforestfc.com` (Lee's personal GitHub). Git remote uses SSH host alias `github.com-personal` so pushes are routed via the personal SSH key.
- **CLI gotcha**: `gh` and `vercel` CLIs default to Lee's work accounts. For env vars / project settings on Leu's Vercel, use the dashboard or switch CLI accounts first.

## Form submission flow (the main backend piece)

Three tabs on the landing page (`src/components/Forms.js`) — **fans / players / sponsors** — all POST JSON to `src/app/api/submit/route.js`, which:

1. Validates per-type required fields
2. Forwards the payload + shared secret to a Google Apps Script webhook (`SHEETS_WEBHOOK_URL`)
3. Always returns success to the user; logs the full submission to Vercel logs if the webhook fails so leads are recoverable

The Apps Script (bound to a Google Sheet in the admin@ironforestfc.com account) does three things on each request:

1. Appends a row to the matching tab (`Fans` / `Players` / `Sponsors`) — auto-creates the tab + header row if missing
2. Sends a notification email to `admin@ironforestfc.com` (Reply-To = submitter's email, so you can reply directly)
3. Sends a per-type auto-reply to the submitter, from admin@ironforestfc.com

Script lives in the Apps Script project bound to the sheet — **not in this repo**. Redeploy it via Apps Script editor → Deploy → Manage deployments → New version after any edit.

## Required env vars

Set in Vercel (Production, Preview, Development) and mirrored locally in `.env.local` (gitignored):

- `SHEETS_WEBHOOK_URL` — Apps Script web-app `/exec` URL
- `SHEETS_WEBHOOK_SECRET` — long random string; must match the `SHARED_SECRET` Script Property in the Apps Script project. Single-quote in `.env.local` because the value contains `$` characters that dotenv-expand otherwise tries to interpolate.

The Apps Script also needs two Script Properties set (Project Settings ⚙ → Script Properties):

- `SHARED_SECRET` — same value as `SHEETS_WEBHOOK_SECRET` above
- `ADMIN_EMAIL` — `admin@ironforestfc.com`

## OUTSTANDING — Apps Script deployment access

The webhook is currently deployed but **not publicly callable**. Direct `curl` to the `/exec` URL returns Google's "You need access" HTML page instead of executing the script, so Vercel's POSTs are silently rejected before the script runs — no row in the sheet, no emails, but the user-facing form still shows success (by design).

**Fix**:

1. Apps Script editor → **Deploy** → **Manage deployments**
2. Pencil (edit) on the active deployment
3. **Who has access**: set to **Anyone** (the literal "Anyone" option, *not* "Anyone with Google account")
4. **Version**: select **New version** (required for the access change to take effect)
5. Deploy. The `/exec` URL stays the same — no Vercel change needed.

**Verify** with:

```bash
# Both values are in .env.local (gitignored). Sub them in or `source .env.local` first.
curl -s -L -X POST "$SHEETS_WEBHOOK_URL" \
  -H "Content-Type: application/json" \
  -d "{\"type\":\"fans\",\"name\":\"Test\",\"email\":\"test@example.com\",\"secret\":\"$SHEETS_WEBHOOK_SECRET\",\"timestamp\":\"2026-05-24T00:00:00Z\",\"id\":\"test_direct\"}"
```

Expect `{"success":true}` plus a row in the Fans tab and emails firing. If still HTML, the access setting didn't apply.

After the access fix, also verify the **From** address on the auto-reply to confirm the script is owned by admin@ironforestfc.com itself (if not, either rebuild the script under that account, or add admin@ as a "Send mail as" alias and pass `from:` in the GmailApp options).

## Out of scope / not built

- No tests (`npm run lint` is the only check)
- No analytics integration
- No real CMS — copy is hand-edited in `src/app/page.js`

## Useful commands

```bash
npm run dev     # local dev server on http://localhost:3000
npm run build   # production build
npm run lint    # eslint flat config

# Test prod API directly:
curl -s -X POST https://www.ironforestfc.com/api/submit \
  -H "Content-Type: application/json" \
  -d '{"type":"fans","name":"Test","email":"test@example.com"}'
```
