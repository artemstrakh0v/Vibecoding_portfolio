import type { Metadata } from "next";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { allProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects by Artem Strakhov — placeholder page description.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
      <section>
        <p className="text-sm uppercase tracking-widest text-black/50">Work</p>
        <h1 className="font-headline mt-6 max-w-3xl text-5xl uppercase leading-tight tracking-wide md:text-7xl lg:text-8xl">
          Projects
        </h1>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-black/70 md:text-xl">
          Placeholder intro — a short line about the kind of work showcased here.
        </p>
      </section>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 md:mt-24">
        {allProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <Link
        href="/#newsletter"
        className="mt-20 inline-block border border-black px-8 py-4 text-base font-medium text-black transition-colors hover:border-accent hover:text-accent md:mt-28"
      >
        Subscribe to the newsletter
      </Link>
    </div>
  );
}
