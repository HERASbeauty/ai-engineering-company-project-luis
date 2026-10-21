import { SectionHeading } from "./SectionHeading";

type CoverageRegion = {
  label: string;
  country: string;
  code: string;
  warehouse: string;
  reach: string;
  carriers: string[];
};

type CoverageSectionProps = {
  regions: CoverageRegion[];
};

function UnitedStatesFlag() {
  return (
    <svg aria-hidden="true" className="coverage-flag" viewBox="0 0 38 20">
      <rect width="38" height="20" fill="#fff" />
      <path
        d="M0 0h38v1.54H0zM0 3.08h38v1.54H0zM0 6.15h38v1.54H0zM0 9.23h38v1.54H0zM0 12.31h38v1.54H0zM0 15.38h38v1.54H0zM0 18.46h38V20H0z"
        fill="#b22234"
      />
      <rect width="15.2" height="10.77" fill="#3c3b6e" />
      {Array.from({ length: 9 }, (_, row) =>
        Array.from({ length: row % 2 === 0 ? 6 : 5 }, (_, column) => (
          <circle
            key={`${row}-${column}`}
            cx={(row % 2 === 0 ? 1.25 : 2.5) + column * 2.5}
            cy={1.1 + row * 1.1}
            r="0.35"
            fill="#fff"
          />
        )),
      )}
    </svg>
  );
}

function SpainFlag() {
  return (
    <svg aria-hidden="true" className="coverage-flag" viewBox="0 0 45 30">
      <rect width="45" height="30" fill="#aa151b" />
      <rect y="7.5" width="45" height="15" fill="#f1bf00" />
      <path
        d="M17.5 11h8v6.2c0 2.1-1.7 3.8-4 5-2.3-1.2-4-2.9-4-5V11Z"
        fill="#aa151b"
        stroke="#7f1d1d"
        strokeWidth="0.6"
      />
      <path d="M18.5 12h2.4v2.2h-2.4zm3.2 0h2.5v2.2h-2.5z" fill="#f3e4bd" />
      <path d="M18.5 15h5.7v1.8h-5.7z" fill="#c32932" />
      <path d="M19 9.8h5.2v1h-5.2zm-.4-1.3 1.1-1 1.2 1 1.2-1 1.5 1v1.3h-5z" fill="#d6ae39" />
    </svg>
  );
}

function CoverageMapOverlay() {
  return (
    <svg
      aria-hidden="true"
      className="coverage-map-overlay"
      viewBox="0 0 2084 754"
      focusable="false"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <filter id="coverage-route-blur" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
        <path
          id="coverage-atlantic-route"
          d="M 609.39 275.96 C 735 94, 936 96, 1064.50 279.20"
        />
      </defs>

      <use
        className="coverage-route-glow"
        href="#coverage-atlantic-route"
        filter="url(#coverage-route-blur)"
      />
      <use className="coverage-route-line" href="#coverage-atlantic-route" />

      <g className="coverage-location coverage-location-los-angeles">
        <circle className="coverage-location-halo" cx="609.39" cy="275.96" r="15" />
        <circle className="coverage-location-core" cx="609.39" cy="275.96" r="8.5" />
        <text x="631" y="256">Los Angeles</text>
      </g>
      <g className="coverage-location coverage-location-zaragoza">
        <circle className="coverage-arrival-pulse" cx="1064.5" cy="279.2" r="9" />
        <circle className="coverage-location-halo" cx="1064.5" cy="279.2" r="15" />
        <circle className="coverage-location-core" cx="1064.5" cy="279.2" r="8.5" />
        <text x="1086" y="260">Zaragoza</text>
      </g>

      <circle className="coverage-route-particle" r="5">
        <animateMotion dur="7.5s" repeatCount="indefinite">
          <mpath href="#coverage-atlantic-route" />
        </animateMotion>
      </circle>
    </svg>
  );
}

function CoverageMap() {
  return (
    <div aria-hidden="true" className="coverage-map-stage">
      <img
        alt=""
        className="coverage-map-art"
        decoding="async"
        height="754"
        src="/images/trackflow-coverage-map-v2-pinpoint.png"
        width="2084"
      />
      <div className="coverage-map-shading" />
      <CoverageMapOverlay />
    </div>
  );
}

export function CoverageSection({ regions }: CoverageSectionProps) {
  return (
    <section
      className="coverage-section scroll-mt-24"
      id="coverage"
      aria-labelledby="coverage-title"
    >
      <div className="coverage-container">
        <div className="coverage-layout">
          <div className="coverage-intro">
            <SectionHeading
              eyebrow="Our coverage"
              title="Coverage on both sides of the Atlantic."
              description="Warehouses in Los Angeles and Zaragoza support operations across the United States and Spain."
              id="coverage-title"
              light
            />
          </div>
          <CoverageMap />
          <div className="coverage-region-grid">
            {regions.map((region) => (
              <article className="coverage-region-card" key={region.code}>
                <div className="coverage-region-heading">
                  <div>
                    <p className="coverage-region-label">{region.label}</p>
                    <h3 className="coverage-region-title">{region.country}</h3>
                  </div>
                  {region.code === "US" ? <UnitedStatesFlag /> : <SpainFlag />}
                </div>
                <div className="coverage-region-details">
                  <div>
                    <p className="coverage-detail-label">Warehouse</p>
                    <p className="coverage-detail-value">{region.warehouse}</p>
                  </div>
                  <div>
                    <p className="coverage-detail-label">Coverage</p>
                    <p className="coverage-detail-value">{region.reach}</p>
                  </div>
                  <div className="coverage-carriers">
                    <p className="coverage-detail-label">Carriers</p>
                    <ul aria-label={`${region.country} carriers`}>
                      {region.carriers.map((carrier) => (
                        <li key={carrier}>{carrier}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="coverage-map-disclaimer">
            Illustrative network visualization · not live shipment tracking
          </p>
        </div>
      </div>
    </section>
  );
}