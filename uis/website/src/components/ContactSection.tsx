type ContactIconProps = {
  kind: "location" | "mail" | "phone";
};

function ContactIcon({ kind }: ContactIconProps) {
  return (
    <svg
      aria-hidden="true"
      className="contact-panel__icon-art"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {kind === "location" && <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>}
      {kind === "mail" && <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>}
      {kind === "phone" && <path d="M6.6 3.5 9 3l2 4.2-1.8 1.5a14.5 14.5 0 0 0 6.1 6.1l1.5-1.8 4.2 2-.5 2.4a2 2 0 0 1-2.2 1.6A16.5 16.5 0 0 1 5 5.7a2 2 0 0 1 1.6-2.2Z" />}
    </svg>
  );
}

function ContactGlobe() {
  return (
    <svg
      aria-hidden="true"
      className="contact-globe"
      viewBox="0 0 1440 360"
      preserveAspectRatio="xMidYMax slice"
    >
      <defs>
        <pattern id="contact-globe-dots" width="12" height="12" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.15" fill="#1D67F2" />
        </pattern>
        <clipPath id="contact-globe-clip">
          <ellipse cx="720" cy="390" rx="780" ry="350" />
        </clipPath>
      </defs>
      <ellipse cx="720" cy="390" rx="780" ry="350" fill="url(#contact-globe-dots)" />
      <g clipPath="url(#contact-globe-clip)" fill="none" stroke="#1D67F2" strokeWidth="1.2">
        <ellipse cx="720" cy="390" rx="530" ry="350" />
        <ellipse cx="720" cy="390" rx="270" ry="350" />
        <path d="M0 214c355 186 1085 186 1440 0" />
        <path d="M0 340c360 102 1080 102 1440 0" />
      </g>
    </svg>
  );
}

export function ContactSection() {
  return (
    <section
      className="contact-section scroll-mt-24"
      id="contact"
      aria-labelledby="contact-title"
    >
      <ContactGlobe />
      <div className="contact-container">
        <div className="contact-layout">
          <div className="contact-copy">
            <p className="contact-eyebrow"><span aria-hidden="true" />LET'S CONNECT</p>
            <h2 className="contact-title" id="contact-title">
              Let's move your business <span>forward.</span>
            </h2>
            <p className="contact-description">
              From warehousing to last-mile delivery and reverse logistics, tell us what your e-commerce business needs.
            </p>
            <a className="contact-cta" href="/application.html">
              Request information <span aria-hidden="true">→</span>
            </a>
            <p className="contact-note">A dedicated application page handles your request.</p>
          </div>

          <aside className="contact-panel" aria-labelledby="contact-panel-title">
            <h3 id="contact-panel-title">Our locations</h3>
            <div className="contact-panel__item">
              <span className="contact-panel__icon"><ContactIcon kind="location" /></span>
              <div className="contact-panel__copy">
                <strong>United States</strong>
                <span>Los Angeles</span>
                <small>Warehouse operations</small>
              </div>
            </div>
            <div className="contact-panel__divider" />
            <div className="contact-panel__item">
              <span className="contact-panel__icon"><ContactIcon kind="location" /></span>
              <div className="contact-panel__copy">
                <strong>Spain</strong>
                <span>Zaragoza</span>
                <small>Warehouse operations</small>
              </div>
            </div>
            <div className="contact-panel__divider" />
            <div className="contact-panel__item contact-panel__item--commercial">
              <span className="contact-panel__icon"><ContactIcon kind="mail" /></span>
              <div className="contact-panel__copy">
                <strong>Commercial inquiries</strong>
                <a href="mailto:comercial@trackflow.com">comercial@trackflow.com</a>
                <a href="tel:+12135550147"><ContactIcon kind="phone" />Los Angeles: +1 213 555 0147</a>
                <a href="tel:+34976123456"><ContactIcon kind="phone" />Zaragoza: +34 976 123 456</a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}