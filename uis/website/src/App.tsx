import { useState } from "react";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { SectionHeading } from "./components/SectionHeading";
import { ServiceCard } from "./components/ServiceCard";

const services = [
  {
    number: "01",
    title: "Warehousing",
    description:
      "Inventory storage supporting ecommerce operations across Los Angeles and Zaragoza.",
    icon: "warehouse" as const,
  },
  {
    number: "02",
    title: "Order fulfillment",
    description:
      "A hands-on process for receiving orders, picking products, and preparing packages.",
    icon: "package" as const,
  },
  {
    number: "03",
    title: "Last-mile coordination",
    description:
      "Shipping coordination with carriers to move ecommerce orders toward their destinations.",
    icon: "route" as const,
  },
  {
    number: "04",
    title: "Returns management",
    description:
      "Reverse logistics support for products making their way back from the customer.",
    icon: "return" as const,
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader menuOpen={menuOpen} onMenuToggle={setMenuOpen} />
      <main id="main-content">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero__grid page-wrap">
            <div className="hero__copy">
              <p className="eyebrow">
                <span className="eyebrow__rule" aria-hidden="true" />
                Logistics for ecommerce
              </p>
              <h1 id="hero-title">
                The journey behind
                <br />
                <span>every order.</span>
              </h1>
              <p className="hero__description">
                Warehousing, order fulfillment, shipping coordination, and
                returns for ecommerce brands operating across the United States
                and Spain.
              </p>
              <div className="hero__actions">
                <a className="button button--light" href="#services">
                  Explore our services
                  <span aria-hidden="true">↘</span>
                </a>
                <a className="text-link text-link--light" href="#about">
                  Get to know TrackFlow
                </a>
              </div>
              <p className="hero__note">
                A logistics partner for the work behind ecommerce.
              </p>
            </div>
            <div
              className="network-card"
              role="img"
              aria-label="Illustration connecting TrackFlow's locations in Los Angeles and Zaragoza"
            >
              <div className="network-card__top">
                <span className="network-card__label">OUR FOOTPRINT</span>
                <span className="network-card__ornament" aria-hidden="true">
                  ↗
                </span>
              </div>
              <svg
                className="network-card__map"
                viewBox="0 0 520 330"
                fill="none"
                aria-hidden="true"
              >
                <path
                  className="map-continent"
                  d="m78 104 29-31 38-11 22 13 11 28-16 18-24 4-10 23-27 7-18 32-21-12 5-28-15-16 9-27 17 0Zm178-3 22-21 30 8 10 18-13 18-25 4-24-13v-14Zm68-38 31-19 44 8 21 22-12 18-34-3-22 12-24-9-4-29Zm10 68 29-16 43 13 19 26-17 23-29 2-15-18-24 3-17-17 11-16Zm76 54 18-6 16 10-5 17-21 3-11-11 3-13ZM151 175l18 7 12 21-11 28-19 24-14-9 4-29-12-18 22-24Zm56 37 31-11 38 18 17 35-17 29-44-3-18-25-24-12 17-31Zm-99-93 23-11 13 15-13 19-20-5-3-18Z"
                />
                <path className="map-route" d="M126 151 Q258 53 385 133" />
                <circle className="map-hub map-hub--west" cx="126" cy="151" r="7" />
                <circle className="map-hub map-hub--east" cx="385" cy="133" r="7" />
                <circle className="map-hub__ring" cx="126" cy="151" r="14" />
                <circle className="map-hub__ring" cx="385" cy="133" r="14" />
              </svg>
              <div className="network-card__cities">
                <div>
                  <span className="city-label">UNITED STATES</span>
                  <strong>Los Angeles</strong>
                </div>
                <span className="network-card__connector" aria-hidden="true" />
                <div className="network-card__city--right">
                  <span className="city-label">SPAIN</span>
                  <strong>Zaragoza</strong>
                </div>
              </div>
              <p className="network-card__caption">
                Two markets. One logistics story.
              </p>
            </div>
            <a className="hero__scroll" href="#services">
              <span aria-hidden="true">↓</span> Discover TrackFlow
            </a>
          </div>
        </section>

        <section className="intro section-pad" aria-label="Our approach">
          <div className="page-wrap intro__inner">
            <span className="intro__index">BUILT AROUND THE ORDER</span>
            <p>
              From the warehouse shelf to the customer’s door—and back again.
              TrackFlow supports the essential logistics work behind ecommerce.
            </p>
            <span className="intro__mark" aria-hidden="true">
              TF.
            </span>
          </div>
        </section>

        <section
          className="services section-pad"
          id="services"
          aria-labelledby="services-title"
        >
          <div className="page-wrap">
            <SectionHeading
              eyebrow="What we do"
              title="Logistics, connected to the way business moves."
              description="Practical services for the operational journey of an ecommerce order."
              id="services-title"
            />
            <div className="service-grid">
              {services.map((service) => (
                <ServiceCard key={service.number} {...service} />
              ))}
            </div>
          </div>
        </section>

        <section
          className="presence section-pad"
          id="presence"
          aria-labelledby="presence-title"
        >
          <div className="page-wrap presence__layout">
            <div className="presence__copy">
              <SectionHeading
                eyebrow="Where we operate"
                title="Across the Atlantic. Rooted in two cities."
                description="TrackFlow operates in the United States and Spain, with warehouse locations in Los Angeles and Zaragoza."
                id="presence-title"
              />
              <p className="presence__detail">
                Teams work across both countries to support a business that
                connects ecommerce operations with customers in different
                markets.
              </p>
              <a className="text-link" href="#about">
                More about TrackFlow <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="location-list">
              <article className="location">
                <span className="location__number">01</span>
                <div className="location__body">
                  <span className="city-label">UNITED STATES</span>
                  <h3>Los Angeles</h3>
                  <p>Warehouse location</p>
                </div>
                <span className="location__arrow" aria-hidden="true">↗</span>
              </article>
              <article className="location">
                <span className="location__number">02</span>
                <div className="location__body">
                  <span className="city-label">SPAIN</span>
                  <h3>Zaragoza</h3>
                  <p>Warehouse location</p>
                </div>
                <span className="location__arrow" aria-hidden="true">↗</span>
              </article>
              <p className="location-list__note">
                The locations shown reflect TrackFlow’s documented operating
                footprint.
              </p>
            </div>
          </div>
        </section>

        <section
          className="about section-pad"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="page-wrap about__layout">
            <div className="about__stamp" aria-hidden="true">
              <span>TRACKFLOW</span>
              <strong>2009</strong>
              <span>LOS ANGELES · USA</span>
              <span className="about__stamp-line" />
              <span>LOGISTICS FOR ECOMMERCE</span>
            </div>
            <div className="about__copy">
              <SectionHeading
                eyebrow="About TrackFlow"
                title="Making the movement of commerce our business."
                description="Founded in Los Angeles in 2009, TrackFlow is a logistics and warehousing company focused on serving ecommerce brands."
                id="about-title"
              />
              <p>
                The work spans storing inventory, preparing and packing orders,
                coordinating shipments, and managing returns—supporting the
                journey from order to delivery or return.
              </p>
              <a className="text-link" href="#contact">
                Talk with TrackFlow <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        <section
          className="contact section-pad"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="page-wrap contact__inner">
            <p className="eyebrow eyebrow--light">
              <span className="eyebrow__rule" aria-hidden="true" />
              Start a conversation
            </p>
            <h2 id="contact-title">Good logistics starts with a conversation.</h2>
            <p>
              Interested in learning more about TrackFlow? A verified public
              contact channel is not available on this website yet.
            </p>
            <span className="contact__note">
              No contact form or message submission is configured.
            </span>
          </div>
          <span className="contact__decoration" aria-hidden="true">TF.</span>
        </section>
      </main>
      <SiteFooter onNavigate={() => setMenuOpen(false)} />
    </>
  );
}

export default App;
