type SiteFooterProps = {
  onNavigate: () => void;
};

const footerLinks = [
  { href: "#services", label: "Services" },
  { href: "#presence", label: "Our presence" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteFooter({ onNavigate }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="page-wrap">
        <div className="site-footer__main">
          <a className="brand brand--footer" href="#home" onClick={onNavigate}>
            <span className="brand__symbol" aria-hidden="true">
              <svg viewBox="0 0 34 34" fill="none">
                <path d="M4 10.5h17.5a8.5 8.5 0 1 1 0 17H13" />
                <path d="M4 17h17.5a2 2 0 1 1 0 4H13" />
                <path d="M4 23.5h6" />
              </svg>
            </span>
            <span className="brand__word">track<span>flow</span></span>
          </a>
          <p className="site-footer__tagline">
            Logistics for the journey
            <br />
            behind every order.
          </p>
          <nav className="footer-nav" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a href={link.href} key={link.href} onClick={onNavigate}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} TrackFlow</span>
          <span>Founded in Los Angeles in 2009</span>
          <a href="#home" onClick={onNavigate}>
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
