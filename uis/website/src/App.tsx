import { useState } from "react";
import { SectionHeading } from "./components/SectionHeading";
import { CoverageSection } from "./components/CoverageSection";
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
    title: "Binational operation",
    description:
      "The only operator with own infrastructure in the United States and Spain.",
  },
  {
    number: "02",
    title: "+130 professionals",
    description: "Dedicated to your logistics.",
  },
  {
    number: "03",
    title: "Own technology",
    description: "For total visibility of your inventory.",
  },
  {
    number: "04",
    title: "E-commerce specialization",
    description: "Fashion, electronics, and cosmetics.",
  },
];

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

        <section className="bg-brand-950 py-20 text-white sm:py-24" aria-labelledby="why-title">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 xl:px-16">
            <SectionHeading
              eyebrow="Why TrackFlow"
              title="An operation built for e-commerce."
              description="A binational team, infrastructure, and technology focused on your logistics."
              id="why-title"
              light
            />
            <div className="mt-12 grid grid-cols-1 gap-x-8 md:grid-cols-2 xl:grid-cols-4">
              {benefits.map((benefit) => (
                <article className="border-t border-white/20 py-6 sm:py-7" key={benefit.number}>
                  <span className="font-display text-sm font-semibold text-sky-300">{benefit.number}</span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-white">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="scroll-mt-24 bg-white py-20 sm:py-24"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 sm:px-8 md:grid-cols-[1fr_auto] md:items-center lg:px-12 xl:px-16">
            <div>
              <p className="text-xs font-bold uppercase text-signal-500">Contact</p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight text-brand-950 sm:text-5xl" id="contact-title">
                Let’s talk about your operation.
              </h2>
              <a className="mt-6 inline-flex min-h-11 items-center rounded-sm text-base font-semibold text-brand-800 underline decoration-signal-500 underline-offset-4 hover:text-signal-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal-500" href="mailto:comercial@trackflow.com">
                comercial@trackflow.com
              </a>
              <div className="mt-7 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                <a className="inline-flex min-h-11 items-center gap-3 text-sm text-slate-600 hover:text-brand-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal-500" href="tel:+12135550147">
                  <span className="text-xs font-bold uppercase text-slate-500">Los Angeles</span>
                  <span className="font-semibold text-brand-950">+1 213 555 0147</span>
                </a>
                <a className="inline-flex min-h-11 items-center gap-3 text-sm text-slate-600 hover:text-brand-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal-500" href="tel:+34976123456">
                  <span className="text-xs font-bold uppercase text-slate-500">Zaragoza</span>
                  <span className="font-semibold text-brand-950">+34 976 123 456</span>
                </a>
              </div>
            </div>
            <a className="inline-flex min-h-14 items-center justify-center gap-6 rounded-md bg-signal-500 px-6 py-4 font-bold text-white transition-colors hover:bg-brand-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-950 motion-reduce:transition-none" href="/application.html">
              Request information <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
      <SiteFooter onNavigate={() => setMenuOpen(false)} />
    </>
  );
}

export default App;
