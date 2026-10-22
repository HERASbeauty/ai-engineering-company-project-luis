import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import "./styles.css";

function PrivacyInformationPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <SiteHeader menuOpen={menuOpen} onMenuToggle={setMenuOpen} />

      <main
        className="mx-auto max-w-4xl px-5 py-10 sm:px-8 sm:py-16"
        id="main-content"
      >
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-800">
            Portfolio / academy project
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Privacy Information
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-700">
            This TrackFlow website is a portfolio and academy demonstration. It
            is not a live commercial inquiry service, and its application form
            is provided only to demonstrate browser-side validation and a
            simulated confirmation.
          </p>

          <div className="mt-8 space-y-7 text-base leading-7 text-slate-700">
            <section aria-labelledby="form-data-heading">
              <h2 className="text-xl font-bold text-slate-950" id="form-data-heading">
                Demonstration form
              </h2>
              <p className="mt-2">
                Values entered in the form are held temporarily in browser
                memory so the page can validate them and display a simulated
                confirmation. The demonstration does not submit or transmit
                form entries to TrackFlow or another form-processing service,
                and it does not intentionally persist those entries. Please do
                not enter real personal, sensitive, or confidential information.
              </p>
            </section>

            <section aria-labelledby="website-technology-heading">
              <h2 className="text-xl font-bold text-slate-950" id="website-technology-heading">
                Website technology and requests
              </h2>
              <p className="mt-2">
                The website source currently contains no implemented analytics
                or advertising trackers. The homepage loads Google Fonts from
                Google-operated domains. Those requests may provide Google
                with technical request information, such as an IP address.
              </p>
              <p className="mt-3">
                This description of form values is not a statement about
                technical records. A browser, website host, network provider,
                or other infrastructure may create logs or process connection
                data under its own configuration. The operation and retention
                of such records have not been verified for this demonstration.
              </p>
            </section>

            <section aria-labelledby="production-heading">
              <h2 className="text-xl font-bold text-slate-950" id="production-heading">
                Production status
              </h2>
              <p className="mt-2">
                No production data controller identity, retention policy, or
                live inquiry-processing arrangements have been established for
                this demo. Before any real production launch, the responsible
                organization must verify and publish an appropriate legal
                privacy policy and complete a review of the data processing,
                services, and infrastructure actually used.
              </p>
            </section>
          </div>
        </article>
      </main>

      <SiteFooter onNavigate={() => undefined} />
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrivacyInformationPage />
  </StrictMode>,
);