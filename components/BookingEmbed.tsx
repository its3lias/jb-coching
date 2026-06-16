/**
 * BookingEmbed
 * ------------
 * Drop your GoHighLevel (GHL) calendar embed in here.
 *
 * In GHL: Calendars → your calendar → "..." → Embed code. You'll get a
 * snippet like:
 *
 *   <iframe src="https://api.leadconnectorhq.com/widget/booking/XXXXXXXX"
 *           style="width:100%;border:none;overflow:hidden" scrolling="no"></iframe>
 *   <script src="https://link.msgsndr.com/js/form_embed.js"></script>
 *
 * 1. Paste your booking URL into GHL_CALENDAR_URL below.
 * 2. The <Script> tag loads GHL's resizer so the iframe auto-sizes.
 *
 * Until a real URL is set, a clearly-marked placeholder is rendered.
 */
import Script from "next/script";

// 👉 Replace this with your GHL calendar booking URL.
const GHL_CALENDAR_URL = "";

export default function BookingEmbed() {
  if (!GHL_CALENDAR_URL) {
    return (
      <div className="flex min-h-[520px] w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/15 bg-surface/60 p-10 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-sm font-semibold text-accent">
          GHL calendar goes here
        </span>
        <h3 className="text-xl font-bold text-white">
          Booking embed placeholder
        </h3>
        <p className="mt-3 max-w-md text-sm text-white/60">
          Open{" "}
          <code className="rounded bg-black/40 px-1.5 py-0.5 text-accent">
            components/BookingEmbed.tsx
          </code>{" "}
          and paste your GoHighLevel calendar URL into{" "}
          <code className="rounded bg-black/40 px-1.5 py-0.5 text-accent">
            GHL_CALENDAR_URL
          </code>
          . The calendar will render right here.
        </p>
      </div>
    );
  }

  return (
    <>
      <iframe
        src={GHL_CALENDAR_URL}
        title="Book a call with Jordan"
        className="h-[720px] w-full rounded-2xl border border-white/10 bg-white"
        scrolling="no"
      />
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="lazyOnload"
      />
    </>
  );
}
