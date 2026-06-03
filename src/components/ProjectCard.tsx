import Link from "next/link";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col border border-black/10">
      <div
        className="aspect-[4/3] bg-black/5 transition-colors group-hover:bg-black/[0.08]"
        aria-hidden="true"
      />

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <span className="text-xs uppercase tracking-widest text-black/50">
          {project.category}
        </span>
        <h3 className="font-headline mt-3 text-2xl uppercase tracking-wide md:text-3xl">
          {project.title}
        </h3>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-black/70 md:text-base">
          {project.description}
        </p>
        <Link
          href="/projects"
          className="mt-6 inline-block text-sm font-medium text-black transition-colors hover:text-accent md:text-base"
        >
          View project →
        </Link>
      </div>
    </article>
  );
}
