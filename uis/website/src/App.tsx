import { useState } from "react";
import { SectionHeading } from "./components/SectionHeading";
import { ServiceCard } from "./components/ServiceCard";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

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
          className="relative isolate overflow-hidden bg-linear-to-br from-brand-950 via-brand-900 to-[#173a56] text-white"
          id="home"
          aria-labelledby="hero-title"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-35" aria-hidden="true">
            <svg className="h-full w-full" viewBox="0 0 1440 720" fill="none">
              <defs>
                <pattern id="hero-grid" width="56" height="56" patternUnits="userSpaceOnUse">
                  <path d="M56 0H0V56" stroke="white" strokeOpacity=".08" />
                </pattern>
              </defs>
              <rect width="1440" height="720" fill="url(#hero-grid)" />
              <path d="M805 588C951 468 1044 451 1194 344S1348 190 1478 116" stroke="#63B6FF" strokeOpacity=".38" strokeWidth="2" strokeDasharray="8 12" />
              <circle cx="805" cy="588" r="5" fill="#8DCEFF" />
              <circle cx="1194" cy="344" r="5" fill="#8DCEFF" />
            </svg>
          </div>
          <div className="mx-auto grid min-h-[560px] max-w-7xl grid-cols-1 items-center gap-12 px-5 py-14 sm:px-8 md:py-16 lg:grid-cols-[1.12fr_0.88fr] lg:gap-8 lg:px-12 xl:px-16">
            <div className="max-w-2xl">
              <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase text-sky-300">
                <span className="h-px w-8 bg-sky-300" aria-hidden="true" />
                United States · Spain
              </p>
              <h1 className="font-display text-[2.5rem] font-semibold leading-[1.04] text-white sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem]" id="hero-title">
                <span className="block">Logistics that scales</span>
                {" "}
                <span className="block text-sky-300">
                  with your <span className="whitespace-nowrap">e-commerce</span>
                </span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
                Warehouse management, last-mile deliveries, and reverse logistics in the United States and Spain. Over 15 years helping fashion, electronics, and cosmetics brands grow without worrying about operations.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a className="inline-flex min-h-13 items-center justify-center gap-5 rounded-md bg-sky-300 px-6 py-3 font-bold text-brand-950 transition-colors hover:bg-sky-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none" href="/application.html">
                  Request information <span aria-hidden="true">↗</span>
                </a>
                <a className="inline-flex min-h-12 items-center justify-center rounded-md px-4 py-3 font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" href="#services">
                  Explore services
                </a>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
              <div className="rounded-lg border border-white/15 bg-white/[0.06] p-4 shadow-2xl shadow-black/20 backdrop-blur sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase text-sky-300">One operation across two countries</p>
                    <p className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">Built around your business</p>
                  </div>
                  <span className="rounded-md border border-white/20 px-3 py-2 text-xs font-semibold text-slate-200">US ↔ ES</span>
                </div>
                <svg className="mt-5 block h-auto w-full" viewBox="0 0 520 300" fill="none" role="img" aria-labelledby="coverage-graphic-title">
                  <title id="coverage-graphic-title">TrackFlow locations connected between Los Angeles and Zaragoza</title>
                  <path d="M80 166C163 65 344 64 438 139" stroke="#75BEFF" strokeWidth="2" strokeDasharray="7 9" />
                  <circle cx="80" cy="166" r="19" fill="#3186C8" fillOpacity=".24" />
                  <circle cx="80" cy="166" r="7" fill="#A8DBFF" />
                  <circle cx="438" cy="139" r="19" fill="#3186C8" fillOpacity=".24" />
                  <circle cx="438" cy="139" r="7" fill="#A8DBFF" />
                  <rect x="52" y="78" width="124" height="54" rx="5" fill="#10283B" stroke="white" strokeOpacity=".2" />
                  <text x="66" y="99" fill="#9DB4C7" fontFamily="sans-serif" fontSize="10" letterSpacing="1.5">UNITED STATES</text>
                  <text x="66" y="119" fill="white" fontFamily="sans-serif" fontSize="15" fontWeight="600">Los Angeles</text>
                  <rect x="344" y="57" width="123" height="54" rx="5" fill="#10283B" stroke="white" strokeOpacity=".2" />
                  <text x="358" y="78" fill="#9DB4C7" fontFamily="sans-serif" fontSize="10" letterSpacing="1.5">SPAIN</text>
                  <text x="358" y="98" fill="white" fontFamily="sans-serif" fontSize="15" fontWeight="600">Zaragoza</text>
                  <path d="M51 222h458M51 238h320" stroke="white" strokeOpacity=".12" />
                  <text x="52" y="267" fill="#B8C9D8" fontFamily="sans-serif" fontSize="13">Warehousing</text>
                  <text x="202" y="267" fill="#B8C9D8" fontFamily="sans-serif" fontSize="13">Last mile</text>
                  <text x="335" y="267" fill="#B8C9D8" fontFamily="sans-serif" fontSize="13">Returns</text>
                </svg>
              </div>
              <p className="mt-4 text-right text-xs text-slate-300">Los Angeles · Zaragoza</p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 h-1 w-full bg-linear-to-r from-sky-400 via-blue-500 to-transparent" aria-hidden="true" />
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
