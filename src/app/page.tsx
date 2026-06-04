import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { featuredProjects } from "@/lib/projects";

const container = "mx-auto max-w-6xl px-6 md:px-10";
const sectionY = "py-20 md:py-28";

export default function HomePage() {
  return (
    <>
      {/* Hero — title + photo on black */}
      <div className="bg-black text-white">
        <section className={`${container} pb-14 pt-10 md:pb-20 md:pt-14`}>
          <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-12 lg:gap-20">
            <div className="min-w-0 md:order-1">
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                Portfolio
              </p>
              <h1 className="font-headline mt-4 text-[clamp(2.75rem,11vw,5.5rem)] uppercase leading-[0.95] tracking-wide lg:text-8xl">
                Artem
                <br />
                Strakhov
              </h1>
            </div>

            <figure className="relative mx-auto aspect-[4/5] w-full max-w-[260px] md:order-2 md:mx-0 md:max-w-none md:justify-self-end">
              <Image
                src="/portfolio_photo.png"
                alt="Artem Strakhov"
                fill
                priority
                sizes="(max-width: 768px) 260px, 320px"
                className="object-cover object-center"
              />
            </figure>
          </div>
        </section>
      </div>

      {/* Hero — intro + CTAs on white */}
      <section className="border-b border-black/10 bg-white">
        <div className={`${container} py-14 md:py-20`}>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <p className="max-w-2xl text-lg leading-relaxed text-black/70 md:text-xl">
              Placeholder headline — a bold one-liner about who you are and what
              you do.
            </p>
            <div className="flex shrink-0 flex-wrap gap-3 sm:gap-4">
              <Link
                href="/about"
                className="bg-accent px-7 py-3.5 text-base font-medium text-white transition-opacity hover:opacity-90 md:px-8 md:py-4"
              >
                About me
              </Link>
              <Link
                href="/projects"
                className="border border-black px-7 py-3.5 text-base font-medium text-black transition-colors hover:border-accent hover:text-accent md:px-8 md:py-4"
              >
                View projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="border-b border-black/10 bg-black/[0.02]">
        <div className={`${container} ${sectionY}`}>
          <p className="max-w-3xl text-2xl leading-snug text-black md:text-3xl lg:text-4xl lg:leading-snug">
            Placeholder positioning statement — a short paragraph that explains
            your focus, perspective, and what visitors should know about you.
          </p>
        </div>
      </section>

      {/* Featured projects */}
      <section className={`${container} ${sectionY}`}>
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
      <section id="newsletter" className="border-t border-black/10">
        <div className={`${container} ${sectionY}`}>
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
