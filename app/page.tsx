import BookingEmbed from "@/components/BookingEmbed";
import ApplicationForm from "@/components/ApplicationForm";

const steps = [
  {
    title: "Pick a time",
    body: "Grab the spot on the calendar that works for you. Calls run 20–30 minutes.",
  },
  {
    title: "Tell us about you",
    body: "Fill out the short application so Jordan walks in already knowing your goals.",
  },
  {
    title: "Get your game plan",
    body: "Leave the call with clear next steps — whether we work together or not.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* ---------------------------------------------------------------- HERO */}
      <section className="glow relative overflow-hidden px-6 pb-16 pt-20 sm:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Coaching with Jordan
          </span>

          <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Build the body you&apos;ve been{" "}
            <span className="text-accent">chasing for years</span> — without
            guessing
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/65 sm:text-xl">
            Book a free strategy call with Jordan to get a personalized training
            and nutrition plan built around your goals, your schedule, and your
            life. No fluff — just a clear path to results.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#book"
              className="w-full rounded-xl bg-accent px-7 py-4 text-base font-bold text-ink transition hover:bg-accent-dim sm:w-auto"
            >
              Book your free call →
            </a>
            <a
              href="#apply"
              className="w-full rounded-xl border border-white/15 px-7 py-4 text-base font-semibold text-white transition hover:border-white/40 sm:w-auto"
            >
              Apply now
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/45">
            <span>★★★★★ 200+ clients coached</span>
            <span className="hidden sm:inline">•</span>
            <span>100% personalized plans</span>
            <span className="hidden sm:inline">•</span>
            <span>No long-term lock-in</span>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- HOW IT WORKS */}
      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="rounded-2xl border border-white/10 bg-surface/60 p-6"
            >
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-sm font-bold text-accent">
                {i + 1}
              </div>
              <h3 className="text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-white/60">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- BOOKING */}
      <section id="book" className="scroll-mt-20 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Step 1 — Book your call
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/60">
              Choose a time below. You&apos;ll get an instant confirmation and a
              reminder before we talk.
            </p>
          </div>
          <BookingEmbed />
        </div>
      </section>

      {/* ------------------------------------------------------------ APPLICATION */}
      <section id="apply" className="scroll-mt-20 px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Step 2 — Apply for coaching
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/60">
              Takes 2 minutes. The more Jordan knows before the call, the more
              value you&apos;ll get out of it.
            </p>
          </div>
          <ApplicationForm />
        </div>
      </section>

      {/* ----------------------------------------------------------------- FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-white/40">
        <p>© {new Date().getFullYear()} Coaching with Jordan. All rights reserved.</p>
      </footer>
    </main>
  );
}
