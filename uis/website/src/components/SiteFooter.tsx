import "./SiteFooter.css";

type SiteFooterProps = {
  onNavigate: () => void;
};

const footerLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#coverage", label: "Coverage" },
  { href: "/#contact", label: "Contact" },
];

const footerServices = [
  "Warehousing",
  "Last-mile delivery",
  "Reverse logistics",
  "E-commerce specialization",
];

export function SiteFooter({ onNavigate }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="site-footer__container">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <a href="/#home" onClick={onNavigate} aria-label="TrackFlow home">
            <img
              className="site-footer__logo"
              src="/trackflow-logo-dark.svg"
              alt="TrackFlow"
              width="410"
              height="100"
            />
            </a>
            <p>Two markets. One connected logistics operation.</p>
          </div>

          <nav className="site-footer__group" aria-label="Quick links">
            <h2>Quick links</h2>
            <ul>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={onNavigate}>
                  {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__group">
            <h2>Services</h2>
            <ul>
              {footerServices.map((service) => (
                <li key={service}><a href="/#services" onClick={onNavigate}>{service}</a></li>
              ))}
            </ul>
          </div>

          <div className="site-footer__group">
            <h2>Markets</h2>
            <ul><li>United States</li><li>Spain</li></ul>
          </div>

          <div className="site-footer__group site-footer__social">
            <h2>Follow us</h2>
            <a href="https://linkedin.com/company/trackflow" target="_blank" rel="noreferrer" aria-label="TrackFlow on LinkedIn (opens in a new tab)">
              <span aria-hidden="true">in</span> LinkedIn
            </a>
          </div>
        </div>

        <div className="site-footer__legal">
          <p>© {new Date().getFullYear()} TrackFlow. All rights reserved.</p>
          <a href="/privacy.html">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
