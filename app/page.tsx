import BookingEmbed from "@/components/BookingEmbed";
import ApplicationForm from "@/components/ApplicationForm";

const steps = [
  {
    title: "Book your call",
    body: "Grab a time on the calendar below. Calls run 20 to 30 minutes with no pressure and no pitch fest.",
  },
  {
    title: "Tell us about you",
    body: "Fill out the short application so Jordan walks in already knowing your goals and schedule.",
  },
  {
    title: "Get your 90 day plan",
    body: "Leave with a clear path to drop 15 lbs around your real life, whether we work together or not.",
  },
];

const deliverables = [
  {
    title: "JB Coaching software",
    body: "Your whole plan in one dashboard with training, nutrition, and progress in your pocket.",
  },
  {
    title: "Custom training & meal plan",
    body: "Built around your schedule and the food you actually like. No 5am gym marathons, no rabbit food diets.",
  },
  {
    title: "Weekly guidance & check ins",
    body: "Jordan reviews your week and adjusts the plan so you keep losing, even on the busy weeks.",
  },
  {
    title: "Macro tracker & workout creator",
    body: "Know exactly what to eat and what to do each day. Zero guessing, zero groggy mornings.",
  },
  {
    title: "1:1 messaging in the dashboard",
    body: "Stuck or slipping? Message Jordan directly and get back on track fast.",
  },
  {
    title: "Community & leaderboard",
    body: "Compete and stay accountable alongside other busy guys chasing the same goal.",
  },
];

const pains = [
  "You were in shape once, then work and life took over.",
  "You start strong, then it’s always “next week” again.",
  "One clean week, then back to takeout and junk by Friday.",
  "You’re tired, groggy, and not confident in your own clothes.",
];

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* ---------------------------------------------------------------- HERO */}
      <section className="glow relative overflow-hidden px-6 pb-16 pt-20 sm:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
            <span className="h-2 w-2 rounded-full bg-accent" />
            JB Coaching with Jordan
          </span>

          <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Lose <span className="text-accent">15 lbs in 90 days</span> without
            living in the gym
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/65 sm:text-xl">
            For busy men who work 60 hour weeks: drop the weight without
            sacrificing your career, your family time, or eating a strict diet.
            And if you don&apos;t? Jordan keeps coaching you{" "}
            <span className="font-semibold text-white">for free</span> until you
            do.
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
            <span>★★★★★ Built for 60 hour work weeks</span>
            <span className="hidden sm:inline">•</span>
            <span>No strict diets</span>
            <span className="hidden sm:inline">•</span>
            <span>15 lbs or I work for free</span>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- PAINS */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-surface/60 p-7 sm:p-10">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
            If this sounds like you, you&apos;re in the right place
          </h2>
          <ul className="mx-auto mt-6 grid max-w-2xl gap-3 sm:grid-cols-2">
            {pains.map((p) => (
              <li key={p} className="flex items-start gap-3 text-white/70">
                <span className="mt-1 text-accent">✓</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-7 max-w-2xl text-center text-white/60">
            You don&apos;t need more willpower. You need a plan built around the
            life you actually have. That&apos;s exactly what Jordan does.
          </p>
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
              Step 1: Book your call
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
              Step 2: Apply for coaching
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/60">
              Takes 2 minutes. The more Jordan knows before the call, the more
              value you&apos;ll get out of it.
            </p>
          </div>
          <ApplicationForm />
        </div>
      </section>

      {/* --------------------------------------------------------- WHAT YOU GET */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              What&apos;s inside the program
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/60">
              Everything you need to lose 15 lbs in 90 days, built for a busy
              schedule.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((d) => (
              <div
                key={d.title}
                className="rounded-2xl border border-white/10 bg-surface/60 p-6"
              >
                <h3 className="text-lg font-bold text-white">{d.title}</h3>
                <p className="mt-2 text-sm text-white/60">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- GUARANTEE */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-3xl rounded-2xl border border-accent/30 bg-accent/10 p-8 text-center sm:p-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 text-sm font-semibold text-accent">
            The guarantee
          </span>
          <h2 className="mt-5 text-2xl font-extrabold text-white sm:text-3xl">
            Lose 15 lbs in 90 days or Jordan coaches you free until you do
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/65">
            Show up and do the work and the result is guaranteed. To qualify,
            you simply:
          </p>
          <ul className="mx-auto mt-5 grid max-w-md gap-2 text-left text-sm text-white/75">
            <li className="flex items-start gap-2">
              <span className="text-accent">✓</span> Submit 90% of your weekly
              check ins
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent">✓</span> Stay consistent and log 90%
              of your diet & workouts
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent">✓</span> Attend all of your 1:1
              sessions
            </li>
          </ul>
          <a
            href="#book"
            className="mt-8 inline-block rounded-xl bg-accent px-7 py-4 text-base font-bold text-ink transition hover:bg-accent-dim"
          >
            Book your free call →
          </a>
        </div>
      </section>

      {/* ----------------------------------------------------------------- FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-white/40">
        <p>
          © {new Date().getFullYear()} JB Coaching with Jordan. All rights
          reserved.
        </p>
      </footer>
    </main>
  );
}
