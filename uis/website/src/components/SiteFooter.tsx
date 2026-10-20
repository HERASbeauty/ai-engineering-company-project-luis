type SiteFooterProps = {
  onNavigate: () => void;
};

const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#coverage", label: "Coverage" },
  { href: "#contact", label: "Contact" },
];

export function SiteFooter({ onNavigate }: SiteFooterProps) {
  return (
    <footer className="bg-[#071522] text-slate-200">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col gap-8 border-b border-white/15 pb-8 md:flex-row md:items-center md:justify-between">
          <a className="inline-flex min-h-11 items-center gap-2 rounded-sm text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300" href="#home" onClick={onNavigate}>
            <span className="font-display text-xl font-bold">TrackFlow</span>
          </a>
          <nav aria-label="Footer navigation">
            <ul className="m-0 flex list-none flex-wrap gap-x-5 gap-y-2 p-0">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a className="inline-flex min-h-11 items-center text-sm text-slate-300 underline decoration-transparent underline-offset-4 hover:text-white hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300" href={link.href} onClick={onNavigate}>
                  {link.label}
                </a>
              </li>
            ))}
            </ul>
          </nav>
          <a className="inline-flex min-h-11 items-center text-sm font-semibold text-sky-300 underline decoration-transparent underline-offset-4 hover:text-white hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300" href="https://linkedin.com/company/trackflow" target="_blank" rel="noreferrer" aria-label="TrackFlow on LinkedIn (opens in a new tab)">
            LinkedIn <span className="ml-2" aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="pt-6 text-xs leading-6 text-slate-400">© 2025 TrackFlow. All rights reserved.</p>
      </div>
    </footer>
  );
}
