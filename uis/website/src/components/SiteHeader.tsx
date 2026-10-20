import { useEffect } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#coverage", label: "Coverage" },
  { href: "#contact", label: "Contact" },
];

type SiteHeaderProps = {
  menuOpen: boolean;
  onMenuToggle: (isOpen: boolean) => void;
};

export function SiteHeader({ menuOpen, onMenuToggle }: SiteHeaderProps) {
  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") onMenuToggle(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [onMenuToggle]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12 xl:px-16">
        <a
          className="inline-flex min-h-11 items-center gap-2 rounded-sm text-brand-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal-500"
          href="#home"
          aria-label="TrackFlow home"
          onClick={() => onMenuToggle(false)}
        >
          <svg className="size-9 text-signal-500" viewBox="0 0 36 36" fill="none" aria-hidden="true">
              <path d="M4 10h18a8 8 0 1 1 0 16h-8M4 17h18a2 2 0 1 1 0 4h-8M4 24h6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          <span className="font-display text-xl font-bold tracking-normal">TrackFlow</span>
        </a>

        <button
          className="grid size-11 shrink-0 place-items-center rounded-md border border-slate-300 text-brand-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500 md:hidden"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => onMenuToggle(!menuOpen)}
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span className={`h-0.5 w-full rounded bg-current transition-transform motion-reduce:transition-none ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-full rounded bg-current transition-opacity motion-reduce:transition-none ${menuOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`h-0.5 w-full rounded bg-current transition-transform motion-reduce:transition-none ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>

        <nav
          className={`${menuOpen ? "absolute inset-x-0 top-full flex flex-col border-b border-slate-200 bg-white px-5 pb-4 shadow-lg sm:px-8" : "hidden"} md:static md:flex md:flex-row md:items-center md:gap-2 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <a
              className="flex min-h-12 items-center rounded-md px-4 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-brand-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal-500 motion-reduce:transition-none md:min-h-11"
              href={link.href}
              key={link.href}
              onClick={() => onMenuToggle(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
