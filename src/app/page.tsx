import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { featuredProjects } from "@/lib/projects";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:px-10 md:pt-32 md:pb-36">
        <p className="text-sm uppercase tracking-widest text-black/50">
          Portfolio
        </p>
        <h1 className="font-headline mt-6 max-w-4xl text-6xl uppercase leading-[0.95] tracking-wide md:text-8xl lg:text-9xl">
          Artem
          <br />
          Strakhov
        </h1>
        <p className="mt-10 max-w-xl text-lg leading-relaxed text-black/70 md:text-xl">
          Placeholder headline — a bold one-liner about who you are and what you
          do.
        </p>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/about"
            className="bg-accent px-8 py-4 text-base font-medium text-white transition-opacity hover:opacity-90"
          >
            About me
          </Link>
          <Link
            href="/projects"
            className="border border-black px-8 py-4 text-base font-medium text-black transition-colors hover:border-accent hover:text-accent"
          >
            View projects
          </Link>
        </div>
      </section>

      {/* Positioning */}
      <section className="border-t border-black/10 bg-black/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
          <p className="max-w-3xl text-2xl leading-snug text-black md:text-3xl lg:text-4xl lg:leading-snug">
            Placeholder positioning statement — a short paragraph that explains
            your focus, perspective, and what visitors should know about you.
          </p>
        </div>
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <SectionHeading
          title="Selected Work"
          subtitle="Placeholder subtitle — a brief intro to featured projects."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <Link
          href="/projects"
          className="mt-12 inline-block text-base font-medium text-black transition-colors hover:text-accent"
        >
          See all projects →
        </Link>
      </section>

      {/* Newsletter */}
      <section
        id="newsletter"
        className="border-t border-black/10"
      >
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
          <SectionHeading
            title="Newsletter"
            subtitle="Placeholder — describe your weekly newsletter and why people should subscribe."
          />
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
