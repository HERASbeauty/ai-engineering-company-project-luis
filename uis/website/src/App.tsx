import { useState } from "react";
import { SectionHeading } from "./components/SectionHeading";
import { ServiceCard } from "./components/ServiceCard";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { RouteMap, WarehouseBackdrop } from "./components/HeroVisual";

const services = [
  {
    number: "01",
    title: "Warehouse Management",
    description: "Storage, picking, and packing for e-commerce operations.",
    benefits: [
      "Storage, picking and packing",
      "Real-time inventory",
      "We operate warehouses in Los Angeles and Zaragoza",
    ],
    icon: "warehouse" as const,
  },
  {
    number: "02",
    title: "Last-Mile Deliveries",
    description: "Shipment coordination across our network in both countries.",
    benefits: [
      "Certified carrier network in both countries",
      "Unified shipment tracking",
      "Incident and returns management",
    ],
    icon: "route" as const,
  },
  {
    number: "03",
    title: "Reverse Logistics",
    description: "Returns handling from inspection through reconditioning.",
    benefits: [
      "Complete returns management",
      "Inspection and reconditioning",
      "Integration with your sales platform",
    ],
    icon: "return" as const,
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
          className="scroll-mt-24 bg-white py-20 sm:py-24"
          id="services"
          aria-labelledby="services-title"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 xl:px-16">
            <SectionHeading
              eyebrow="What we do"
              title="Logistics, handled from start to return."
              description="Three connected service areas for the operational journey of e-commerce."
              id="services-title"
            />
            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.number} {...service} />
              ))}
            </div>
          </div>
        </section>

        <section
          className="scroll-mt-24 bg-[#f2f6fa] py-20 sm:py-24"
          id="coverage"
          aria-labelledby="coverage-title"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 xl:px-16">
            <SectionHeading
              eyebrow="Where we operate"
              title="Coverage on both sides of the Atlantic."
              description="Warehouses in Los Angeles and Zaragoza support operations across the United States and Spain."
              id="coverage-title"
            />
            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
              {coverage.map((region) => (
                <article className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8" key={region.code}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase text-signal-500">{region.label}</p>
                      <h3 className="mt-2 font-display text-3xl font-semibold text-brand-950">{region.country}</h3>
                    </div>
                    <span className="grid size-12 shrink-0 place-items-center rounded-md bg-brand-950 text-sm font-bold text-white">{region.code}</span>
                  </div>
                  <div className="mt-8 border-t border-slate-200 pt-5">
                    <p className="text-sm font-semibold text-brand-950">{region.warehouse}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{region.reach}</p>
                  </div>
                  <div className="mt-6">
                    <p className="text-xs font-bold uppercase text-slate-500">Carriers</p>
                    <ul className="mt-3 mb-0 flex list-none flex-wrap gap-2 p-0" aria-label={`${region.country} carriers`}>
                      {region.carriers.map((carrier) => (
                        <li className="rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-brand-900" key={carrier}>{carrier}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

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
