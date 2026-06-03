import type { Metadata } from "next";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "About",
  description: "About Artem Strakhov — placeholder page description.",
};

const careerItems = [
  {
    period: "20XX — Present",
    title: "Role Title",
    description: "Placeholder description of a current or recent role.",
  },
  {
    period: "20XX — 20XX",
    title: "Role Title",
    description: "Placeholder description of a previous role or chapter.",
  },
  {
    period: "20XX — 20XX",
    title: "Role Title",
    description: "Placeholder description of an earlier chapter.",
  },
];

const achievements = [
  "Placeholder achievement or milestone one.",
  "Placeholder achievement or milestone two.",
  "Placeholder achievement or milestone three.",
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
      {/* Intro */}
      <section>
        <p className="text-sm uppercase tracking-widest text-black/50">About</p>
        <h1 className="font-headline mt-6 max-w-3xl text-5xl uppercase leading-tight tracking-wide md:text-7xl lg:text-8xl">
          The story so far
        </h1>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-black/70 md:text-xl">
          Placeholder introduction — a few sentences about who Artem is, what he
          cares about, and why this page exists.
        </p>
      </section>

      {/* Biography */}
      <section className="mt-24 md:mt-32">
        <h2 className="font-headline text-3xl uppercase tracking-wide md:text-4xl">
          Biography
        </h2>
        <div className="mt-8 max-w-2xl space-y-6 text-base leading-relaxed text-black/70 md:text-lg">
          <p>
            Placeholder paragraph one — background, origins, or how you got
            started. Keep it readable and scannable.
          </p>
          <p>
            Placeholder paragraph two — what you work on today and what drives
            your curiosity.
          </p>
        </div>
      </section>

      {/* Career */}
      <section className="mt-24 md:mt-32">
        <h2 className="font-headline text-3xl uppercase tracking-wide md:text-4xl">
          Career
        </h2>
        <ul className="mt-10 space-y-12">
          {careerItems.map((item) => (
            <li
              key={item.period + item.title}
              className="grid gap-2 border-t border-black/10 pt-10 md:grid-cols-[140px_1fr] md:gap-12"
            >
              <span className="text-sm uppercase tracking-widest text-black/50">
                {item.period}
              </span>
              <div>
                <h3 className="font-headline text-xl uppercase tracking-wide md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-black/70">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Achievements */}
      <section className="mt-24 md:mt-32">
        <h2 className="font-headline text-3xl uppercase tracking-wide md:text-4xl">
          Highlights
        </h2>
        <ul className="mt-8 max-w-2xl space-y-4">
          {achievements.map((item) => (
            <li
              key={item}
              className="flex gap-4 text-base leading-relaxed text-black/70 md:text-lg"
            >
              <span className="text-accent" aria-hidden="true">
                —
              </span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Philosophy */}
      <section className="mt-24 md:mt-32">
        <h2 className="font-headline text-3xl uppercase tracking-wide md:text-4xl">
          Philosophy
        </h2>
        <blockquote className="mt-8 max-w-2xl border-l-4 border-accent pl-6 text-xl leading-relaxed text-black md:text-2xl">
          Placeholder personal philosophy — a single memorable line or short
          belief that defines how you work and think.
        </blockquote>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-black/70 md:text-lg">
          Placeholder supporting text — expand briefly on values, approach, or
          what collaborators can expect.
        </p>
      </section>

      {/* Newsletter CTA */}
      <section className="mt-24 border-t border-black/10 pt-24 md:mt-32 md:pt-32">
        <h2 className="font-headline text-3xl uppercase tracking-wide md:text-4xl">
          Stay in touch
        </h2>
        <p className="mt-4 max-w-xl text-base text-black/60 md:text-lg">
          Placeholder — invite visitors to subscribe to the weekly newsletter.
        </p>
        <div className="mt-8 max-w-lg">
          <NewsletterForm />
        </div>
        <Link
          href="/"
          className="mt-12 inline-block text-sm text-black/50 transition-colors hover:text-accent"
        >
          ← Back to home
        </Link>
      </section>
    </div>
  );
}
