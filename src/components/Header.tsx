"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className={
        isHome
          ? "border-b border-white/10 bg-black text-white"
          : "border-b border-black/10 bg-white text-black"
      }
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-6 md:px-10 md:py-8">
        <Link
          href="/"
          className={`font-headline text-xl uppercase tracking-wide transition-colors hover:text-accent md:text-2xl ${
            isHome ? "text-white" : "text-black"
          }`}
        >
          Artem Strakhov
        </Link>

        <nav aria-label="Main navigation" className="flex items-center gap-6 md:gap-10">
          <ul className="flex items-center gap-5 md:gap-8">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`text-sm transition-colors md:text-base ${
                      isActive
                        ? "text-accent"
                        : isHome
                          ? "text-white/80 hover:text-accent"
                          : "text-black hover:text-accent"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/#newsletter"
            className="hidden bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:inline-block md:text-base"
          >
            Newsletter
          </Link>
        </nav>
      </div>
    </header>
  );
}
