import { useEffect } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#presence", label: "Our presence" },
  { href: "#about", label: "About" },
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
    <header className="site-header">
      <div className="page-wrap site-header__inner">
        <a
          className="brand"
          href="#home"
          aria-label="TrackFlow home"
          onClick={() => onMenuToggle(false)}
        >
          <span className="brand__symbol" aria-hidden="true">
            <svg viewBox="0 0 34 34" fill="none">
              <path d="M4 10.5h17.5a8.5 8.5 0 1 1 0 17H13" />
              <path d="M4 17h17.5a2 2 0 1 1 0 4H13" />
              <path d="M4 23.5h6" />
            </svg>
          </span>
          <span className="brand__word">track<span>flow</span></span>
        </a>

        <button
          className={`menu-toggle${menuOpen ? " menu-toggle--open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => onMenuToggle(!menuOpen)}
        >
          <span />
          <span />
        </button>

        <nav
          className={`primary-nav${menuOpen ? " primary-nav--open" : ""}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <a
              href={link.href}
              key={link.href}
              onClick={() => onMenuToggle(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            className="nav-contact"
            href="#contact"
            onClick={() => onMenuToggle(false)}
          >
            Contact <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
