import { useEffect } from "react";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#coverage", label: "Coverage" },
  { href: "/#contact", label: "Contact" },
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
    <header className="site-header sticky top-0 z-40 border-b border-white/10 bg-[#071422]/95 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12 xl:px-16">
        <a
          className="inline-flex min-h-11 items-center gap-2 rounded-sm text-[#F3F6F8] no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#62E3DF]"
          href="/#home"
          aria-label="TrackFlow home"
          onClick={() => onMenuToggle(false)}
        >
          <img
            className="h-auto w-[172px] max-w-[calc(100vw-8.5rem)] sm:w-[190px]"
            src="/trackflow-logo-dark.svg"
            alt="TrackFlow"
            width="410"
            height="100"
          />
        </a>

        <button
          className="grid size-11 shrink-0 place-items-center rounded-md border border-[#62E3DF]/45 bg-[#10283E] text-[#62E3DF] hover:bg-[#173A56] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#62E3DF] md:hidden"
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
          className={`${menuOpen ? "absolute inset-x-0 top-full flex flex-col border-b border-white/10 bg-[#071422] px-5 pb-4 shadow-lg sm:px-8" : "hidden"} md:static md:flex md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <a
              className="flex min-h-12 items-center rounded-md px-4 text-sm font-semibold text-[#F3F6F8]/85 no-underline transition-colors hover:bg-white/5 hover:text-[#62E3DF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#62E3DF] motion-reduce:transition-none md:min-h-11 md:hover:underline"
              href={link.href}
              key={link.href}
              onClick={() => onMenuToggle(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            className="mt-3 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#1D67F2] px-5 text-sm font-bold text-white no-underline transition-colors hover:bg-[#1758D2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#62E3DF] motion-reduce:transition-none md:ml-2 md:mt-0"
            href="/application.html"
          >
            Request information <span aria-hidden="true">→</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
