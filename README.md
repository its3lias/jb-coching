# Jordan Coaching — Precall Page

A single-page "precall" / booking landing page for Jordan's fitness coaching,
built with Next.js (App Router), TypeScript, and Tailwind CSS.

The page has three sections, in order:

1. **Hero** — headline + subheadline + CTAs (modeled after a precall/VSL page).
2. **Step 1 — Book your call** — a placeholder for a **GoHighLevel (GHL)** calendar embed.
3. **Step 2 — Apply for coaching** — a qualifying application form.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Wiring up the GHL calendar

Open `components/BookingEmbed.tsx` and set `GHL_CALENDAR_URL` to your
GoHighLevel calendar booking URL (Calendars → your calendar → **Embed code**).
Once set, the calendar renders in place of the placeholder and GHL's resizer
script is loaded automatically.

## Where do applications go?

By default the form (`components/ApplicationForm.tsx`) POSTs to the Next.js API
route at `app/api/apply/route.ts`, which validates and logs the submission.

To send leads elsewhere, either:

- Set `NEXT_PUBLIC_GHL_FORM_WEBHOOK` to a GHL inbound webhook / form URL so the
  form POSTs there directly, **or**
- Forward the payload to your CRM / email / database inside `app/api/apply/route.ts`.

## Customizing

- **Copy / headlines:** `app/page.tsx`
- **Form fields & qualifying questions:** `components/ApplicationForm.tsx`
- **Colors / fonts:** `tailwind.config.ts` (accent color is `#c8ff00`)
