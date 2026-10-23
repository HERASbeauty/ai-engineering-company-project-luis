import { useEffect, useState, type ReactNode } from "react";
import { CoverageSection } from "./components/CoverageSection";
import { ContactSection } from "./components/ContactSection";
import { ServiceCard } from "./components/ServiceCard";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { RouteMap, WarehouseBackdrop } from "./components/HeroVisual";

const services = [
  {
    title: "Warehousing",
    description: "Storage, picking, and packing for e-commerce brands.",
    icon: "warehouse" as const,
    image: {
      src: "/images/trackflow-service-warehousing.webp",
      alt: "Warehouse worker checking packages beside stocked shelving",
    },
  },
  {
    title: "Last-mile Delivery",
    description: "Delivery from the warehouse to the end customer.",
    icon: "delivery" as const,
    image: {
      src: "/images/trackflow-service-last-mile.webp",
      alt: "Courier carrying a parcel beside a loaded delivery van",
    },
  },
  {
    title: "Reverse Logistics",
    description: "Returns handling, inspection, and product reconditioning.",
    icon: "returns" as const,
    image: {
      src: "/images/trackflow-service-reverse-logistics.webp",
      alt: "Worker inspecting a returned package at a returns station",
    },
  },
];

const benefits = [
  {
    number: "01",
    title: "Binational operations",
    description: "Infrastructure in the United States and Spain.",
    icon: "network",
    image: "/images/trackflow-why-binational.webp",
  },
  {
    number: "02",
    title: "Approx. 130 professionals",
    description: "A dedicated team supporting logistics operations.",
    icon: "people",
    image: "/images/trackflow-why-team.webp",
  },
  {
    number: "03",
    title: "E-commerce specialization",
    description: "Fashion, electronics and cosmetics.",
    icon: "commerce",
    image: "/images/trackflow-why-ecommerce.webp",
  },
  {
    number: "04",
    title: "End-to-end services",
    description: "Warehousing, last-mile delivery and reverse logistics.",
    icon: "truck",
    image: "/images/trackflow-why-end-to-end.webp",
  },
];

type BenefitIconName = "network" | "people" | "commerce" | "truck";

function BenefitIcon({ name }: { name: BenefitIconName }) {
  const paths: Record<BenefitIconName, ReactNode> = {
    network: <><circle cx="6" cy="7" r="2.25" /><circle cx="18" cy="17" r="2.25" /><circle cx="18" cy="6" r="1.5" /><path d="m8 8.2 7.9 7.1M8.2 6.8l8.3-.6M6.8 9.2l-.3 8.5 9.2-.5" /></>,
    people: <><circle cx="9" cy="8" r="3" /><path d="M3.5 19v-1.2a5.5 5.5 0 0 1 11 0V19zM16 5.4a3 3 0 0 1 0 5.8m1.2 2.1a4.7 4.7 0 0 1 3.3 4.5V19h-3" /></>,
    commerce: <><path d="M3 4h2l2.2 10.1a2 2 0 0 0 2 1.6h8.1a2 2 0 0 0 1.9-1.5L21 8H6" /><circle cx="10" cy="19" r="1.2" /><circle cx="17" cy="19" r="1.2" /></>,
    truck: <><path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z" /><circle cx="7.5" cy="18" r="2" /><circle cx="17.5" cy="18" r="2" /></>,
  };

  return (
    <svg aria-hidden="true" className="why-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}

const coverage = [
  {
    label: "North America",
    country: "United States",
    code: "US",
    warehouse: "Warehouse in Los Angeles",
    reach: "National coverage",
    carriers: ["UPS", "FedEx", "DHL"],
  },
  {
    label: "Europe",
    country: "Spain",
    code: "ES",
    warehouse: "Warehouse in Zaragoza",
    reach: "Peninsular and island coverage",
    carriers: ["MRW", "SEUR", "DHL"],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const targetId = window.location.hash.slice(1);
    if (!targetId) return;

    document.getElementById(targetId)?.scrollIntoView();
  }, []);

  return (
    <>
      <a
        className="absolute left-4 top-4 z-50 -translate-y-20 rounded-md bg-white px-4 py-3 font-semibold text-brand-950 shadow-lg transition-transform focus:translate-y-0 focus:outline-2 focus:outline-offset-2 focus:outline-signal-500 motion-reduce:transition-none"
        href="#main-content"
      >
        Skip to content
      </a>
      <SiteHeader menuOpen={menuOpen} onMenuToggle={setMenuOpen} />
      <main id="main-content">
        <section
          className="hero-section"
          id="home"
          aria-labelledby="hero-title"
        >
          <WarehouseBackdrop />
          <div className="hero-scrim" aria-hidden="true" />
          <div className="hero-layout">
            <div className="hero-copy">
              <p className="hero-eyebrow hero-reveal hero-reveal--first">
                Logistics in motion
              </p>
              <h1
                aria-label="Logistics that scales with your e-commerce"
                className="hero-title hero-reveal hero-reveal--second"
                id="hero-title"
              >
                <span>Logistics that</span>
                <span>
                  <span className="hero-title-accent">scales</span> with your
                </span>
                <span>e-commerce</span>
              </h1>
              <p className="hero-subtitle hero-reveal hero-reveal--third">
                <span className="hidden sm:inline">
                  Warehouse management, last-mile deliveries, and reverse logistics in the United States and Spain. Over 15 years helping fashion, electronics, and cosmetics brands grow without worrying about operations.
                </span>
                <span className="sm:hidden">
                  Warehousing, last-mile delivery, and reverse logistics across the US and Spain.
                </span>
              </p>
              <div className="hero-actions hero-reveal hero-reveal--fourth">
                <a className="hero-primary-cta" href="/application.html">
                  Request information <span aria-hidden="true">→</span>
                </a>
                <a className="hero-secondary-cta" href="#services">
                  Explore services
                  <svg
                    aria-hidden="true"
                    className="size-4"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="m5 7.5 5 5 5-5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.7"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <RouteMap />
            <ul className="hero-service-strip" aria-label="TrackFlow services">
              <li className="hero-service-item">
                <svg
                  aria-hidden="true"
                  className="hero-service-icon"
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                >
                  <path d="m16 3 11 6.2v13.6L16 29 5 22.8V9.2L16 3Z" />
                  <path d="m5.5 9.5 10.5 6 10.5-6M16 15.5V29" />
                </svg>
                <div className="hero-service-copy">
                  <span className="hero-service-title">Warehousing</span>
                  <p className="hero-service-description">
                    Flexible storage for growing brands
                  </p>
                </div>
              </li>
              <li className="hero-service-item">
                <svg
                  aria-hidden="true"
                  className="hero-service-icon"
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                >
                  <path d="M3.5 7h16v15h-16zM19.5 12h5.2l4.3 5v5h-9.5z" />
                  <circle cx="9" cy="23" r="2.5" />
                  <circle cx="24.5" cy="23" r="2.5" />
                </svg>
                <div className="hero-service-copy">
                  <span className="hero-service-title">Last-mile delivery</span>
                  <p className="hero-service-description">
                    Reliable delivery to your customers
                  </p>
                </div>
              </li>
              <li className="hero-service-item">
                <svg
                  aria-hidden="true"
                  className="hero-service-icon"
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                >
                  <path d="M26 11a11 11 0 0 0-18.8-4L5 9.5M5 9.5V4.7m0 4.8h4.8" />
                  <path d="M6 21a11 11 0 0 0 18.8 4L27 22.5m0 0v4.8m0-4.8h-4.8" />
                </svg>
                <div className="hero-service-copy">
                  <span className="hero-service-title">Reverse logistics</span>
                  <p className="hero-service-description">
                    Simpler returns, stronger customer loyalty
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="hero-bottom-rule" aria-hidden="true" />
        </section>

        <section
          className="services-section scroll-mt-24"
          id="services"
          aria-labelledby="services-title"
          aria-describedby="services-description"
        >
          <div className="services-container">
            <div className="services-intro">
              <div>
                <p className="services-eyebrow">Our services</p>
                <h2 className="services-title" id="services-title">
                  End-to-end logistics for e-commerce brands.
                </h2>
              </div>
              <p className="services-intro-description" id="services-description">
                Warehousing, last-mile delivery, and reverse logistics for
                e-commerce brands in the United States and Spain.
              </p>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>

        <CoverageSection regions={coverage} />

        <section className="why-section" aria-labelledby="why-title">
          <div className="why-container">
            <div className="why-intro">
              <div className="why-copy">
                <p className="why-eyebrow">Why TrackFlow</p>
                <h2 className="why-title" id="why-title">
                  Built for the way <span>commerce</span> moves.
                </h2>
                <p className="why-subtitle">Two markets. One connected logistics operation.</p>
              </div>
            </div>
            <div className="why-grid">
              {benefits.map((benefit, index) => (
                <article className={`why-card why-card--${index + 1}`} key={benefit.number}>
                  <img className="why-card-image" src={benefit.image} alt="" loading="lazy" decoding="async" />
                  <div className="why-card-content">
                    <div className="why-card-topline">
                      <span className="why-card-icon-wrap"><BenefitIcon name={benefit.icon as BenefitIconName} /></span>
                      <span className="why-card-number">{benefit.number}</span>
                    </div>
                    <div className="why-card-copy">
                      <h3>{benefit.title}</h3>
                      <p>{benefit.description}</p>
                    </div>
                    {index === 0 && (
                      <div className="why-markets" aria-label="United States and Spain">
                        <span aria-hidden="true">🇺🇸</span><span>United States</span>
                        <span className="why-markets-divider" aria-hidden="true" />
                        <span aria-hidden="true">🇪🇸</span><span>Spain</span>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <SiteFooter onNavigate={() => setMenuOpen(false)} />
    </>
  );
}

export default App;
