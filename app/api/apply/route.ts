import { NextResponse } from "next/server";

/**
 * Default landing target for the application form.
 *
 * Right now this just validates and logs the submission so the form works out
 * of the box. To pipe leads into a CRM/GHL, either:
 *   - set NEXT_PUBLIC_GHL_FORM_WEBHOOK so the form POSTs to GHL directly, or
 *   - forward `data` to your provider from inside this handler.
 */
export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data?.name || !data?.email) {
      return NextResponse.json(
        { ok: false, error: "Name and email are required." },
        { status: 400 },
      );
    }

    // TODO: forward to GHL / email / database here.
    console.log("New coaching application:", data);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }
}
