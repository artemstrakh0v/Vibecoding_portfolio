type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16">
      <h2 className="font-headline text-4xl uppercase tracking-wide md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-black/60 md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
