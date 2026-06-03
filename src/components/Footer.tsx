import Link from "next/link";

const socialLinks = [
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Twitter" },
  { href: "#", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-headline text-2xl uppercase tracking-wide md:text-3xl">
              Artem Strakhov
            </p>
            <p className="mt-3 max-w-sm text-sm text-black/60 md:text-base">
              Placeholder tagline — a short personal line goes here.
            </p>
          </div>

          <nav aria-label="Social links">
            <ul className="flex flex-wrap gap-6">
              {socialLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-black transition-colors hover:text-accent md:text-base"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-16 text-sm text-black/40">
          © {new Date().getFullYear()} Artem Strakhov. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
