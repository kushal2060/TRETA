import { nav, site } from "@/content/site";
import { Logo } from "./Logo";

const socials = [
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Instagram", href: "#" },
];

export function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">{site.description}</p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-16 gap-y-3 text-sm">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-ink-soft hover:text-ink">
              {item.label}
            </a>
          ))}
          {socials.map((s) => (
            <a key={s.label} href={s.href} className="text-ink-soft hover:text-ink">
              {s.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-soft sm:flex-row sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p>Made with care (and too much tea) in {site.location}.</p>
      </div>
    </footer>
  );
}
