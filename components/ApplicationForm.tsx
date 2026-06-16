"use client";

import { useState } from "react";

/**
 * ApplicationForm
 * ---------------
 * Qualifying application for Jordan's coaching. By default it submits to the
 * Next.js API route at /api/apply (which just logs the payload). To send leads
 * straight into GoHighLevel instead, set NEXT_PUBLIC_GHL_FORM_WEBHOOK to a GHL
 * inbound webhook / form-submit URL and the form will POST there directly.
 */

const WEBHOOK_URL = process.env.NEXT_PUBLIC_GHL_FORM_WEBHOOK || "/api/apply";

const goals = [
  "Lose 15+ lbs",
  "Lose 30+ lbs",
  "Lose weight & build muscle",
  "Get my energy & confidence back",
  "Get back in shape after years off",
];

const scheduleOptions = [
  "Under 40 hrs/week",
  "40–60 hrs/week",
  "60+ hrs/week",
];

const investmentOptions = [
  "Yes — ready to invest in myself now ($1,500–$2,500)",
  "Maybe — depends on the plan",
  "Just looking for free info right now",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function ApplicationForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-accent/30 bg-accent/10 p-10 text-center">
        <h3 className="text-2xl font-bold text-white">Application received ✅</h3>
        <p className="mt-3 text-white/70">
          Thanks for applying. If you haven&apos;t already, grab a time on the
          calendar above so we can talk through your plan. Talk soon!
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-white/10 bg-surface/60 p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required>
          <input {...inputProps} type="text" name="name" placeholder="Jane Doe" required />
        </Field>
        <Field label="Email" name="email" required>
          <input {...inputProps} type="email" name="email" placeholder="jane@email.com" required />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone / WhatsApp" name="phone" required>
          <input {...inputProps} type="tel" name="phone" placeholder="+1 555 123 4567" required />
        </Field>
        <Field label="Primary goal" name="goal" required>
          <select {...inputProps} name="goal" defaultValue="" required>
            <option value="" disabled>
              Select a goal…
            </option>
            {goals.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="How many hours a week do you typically work?" name="work_hours" required>
        <select {...inputProps} name="work_hours" defaultValue="" required>
          <option value="" disabled>
            Select one…
          </option>
          {scheduleOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Where are you right now? (current weight, goal weight, how you train today)" name="current_situation">
        <textarea
          {...inputProps}
          name="current_situation"
          rows={3}
          placeholder="e.g. 210 lbs, want to get to ~190, busy 9–5, haven't trained consistently in a while…"
        />
      </Field>

      <Field label="What's stopped you from losing the weight before?" name="challenge">
        <textarea
          {...inputProps}
          name="challenge"
          rows={3}
          placeholder="Be honest — work-life balance, consistency, diet, energy… this helps Jordan build the right plan."
        />
      </Field>

      <Field label="Are you ready to invest in coaching to reach this goal?" name="investment" required>
        <select {...inputProps} name="investment" defaultValue="" required>
          <option value="" disabled>
            Select one…
          </option>
          {investmentOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </Field>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-xl bg-accent px-6 py-4 text-base font-bold text-ink transition hover:bg-accent-dim disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting…" : "Submit my application →"}
      </button>

      {status === "error" && (
        <p className="text-center text-sm text-red-400">
          Something went wrong. Please try again or email Jordan directly.
        </p>
      )}

      <p className="text-center text-xs text-white/40">
        Your information is kept private and only used to prepare for your call.
      </p>
    </form>
  );
}

const inputProps = {
  className:
    "w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/30 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30",
};

function Field({
  label,
  name,
  required,
  children,
}: {
  label: string;
  name: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={name} className="block">
      <span className="mb-1.5 block text-sm font-medium text-white/80">
        {label}
        {required && <span className="text-accent"> *</span>}
      </span>
      {children}
    </label>
  );
}
