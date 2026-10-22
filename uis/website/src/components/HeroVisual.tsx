import { useEffect, useState } from "react";

const US_TO_SPAIN_ROUTE = "M 609.39 275.96 C 735 94 936 96 1064.5 279.2";
const RETURN_ROUTE = "M 609.39 275.96 C 735 460 936 460 1064.5 279.2";

export function WarehouseBackdrop() {
  return <div className="hero-backdrop" aria-hidden="true" />;
}

export function RouteMap() {
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(preference.matches);
    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  return (
    <div className="hero-map-overlay">
      <svg
        className="hero-route-map"
        viewBox="400 0 1640 754"
        fill="none"
        role="img"
        aria-labelledby="hero-map-title hero-map-description"
      >
        <title id="hero-map-title">
          Illustrative map connecting the United States and Spain
        </title>
        <desc id="hero-map-description">
          Dotted world map marking the United States and Spain with illustrative
          routes. This is not live shipment tracking.
        </desc>
        <defs>
          <linearGradient id="hero-route-gradient" x1="609.39" y1="275.96" x2="1064.5" y2="279.2">
            <stop stopColor="#1D67F2" />
            <stop offset="1" stopColor="#62E3DF" />
          </linearGradient>
          <filter id="hero-map-isolate-dots" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                .34 1.14 .12 0 -.192"
            />
          </filter>
          <filter id="hero-route-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <image
          href="/images/trackflow-coverage-map-v2.png"
          x="0"
          y="0"
          width="2084"
          height="754"
          filter="url(#hero-map-isolate-dots)"
        />
        <path
          className="hero-map-route hero-map-route--primary"
          d={US_TO_SPAIN_ROUTE}
          stroke="url(#hero-route-gradient)"
          strokeWidth="6"
          strokeOpacity=".92"
        />
        <path
          className="hero-map-route hero-map-route--secondary"
          d={RETURN_ROUTE}
          stroke="#1D67F2"
          strokeWidth="4"
          strokeOpacity=".66"
          strokeDasharray="2 8"
        />

        <path className="hero-map-label-connector" d="M 632 224 L 598 258" />
        <path className="hero-map-label-connector" d="M 1083 245 L 1077 260" />

        <circle className="hero-node-pulse" cx="609.39" cy="275.96" r="22" />
        <circle cx="609.39" cy="275.96" r="18" fill="#62E3DF" fillOpacity=".2" />
        <circle cx="609.39" cy="275.96" r="10" fill="#F3F6F8" />
        <circle className="hero-node-pulse hero-node-pulse--delayed" cx="1064.5" cy="279.2" r="22" />
        <circle cx="1064.5" cy="279.2" r="18" fill="#62E3DF" fillOpacity=".2" />
        <circle cx="1064.5" cy="279.2" r="10" fill="#F3F6F8" />

        <g className="hero-map-label" transform="translate(356 106) scale(1.4)">
          <rect className="hero-map-label-background" x="17" y="28" width="180" height="56" rx="7" />
          <svg
            aria-hidden="true"
            x="29"
            y="43"
            width="30"
            height="15.8"
            viewBox="0 0 38 20"
            fill="none"
            stroke="none"
            opacity="1"
            filter="none"
            focusable="false"
          >
            <defs>
              <pattern
                id="hero-us-star-grid"
                width="3.04"
                height="1.08"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="m1.52 0 .34.38.48.03-.36.27.13.37-.59-.22-.59.22.13-.37-.36-.27.48-.03z"
                  fill="#FFFFFF"
                />
              </pattern>
            </defs>
            <rect width="38" height="20" fill="#FFFFFF" />
            <path
              d="M0 0h38v1.54H0zM0 3.08h38v1.54H0zM0 6.15h38v1.54H0zM0 9.23h38v1.54H0zM0 12.31h38v1.54H0zM0 15.38h38v1.54H0zM0 18.46h38V20H0z"
              fill="#B22234"
            />
            <rect width="15.2" height="10.77" fill="#3C3B6E" />
            <rect width="15.2" height="10.77" fill="url(#hero-us-star-grid)" />
          </svg>
          <text className="hero-map-country" x="54" y="51">UNITED STATES</text>
          <text className="hero-map-city" x="54" y="77">Los Angeles</text>
        </g>
        <g className="hero-map-label" transform="translate(508 109) scale(1.4)">
          <rect className="hero-map-label-background" x="411" y="39" width="154" height="58" rx="7" />
          <svg
            aria-hidden="true"
            x="421"
            y="52"
            width="24"
            height="16"
            viewBox="0 0 45 30"
            fill="none"
            stroke="none"
            opacity="1"
            filter="none"
            focusable="false"
          >
            <rect width="45" height="30" fill="#AA151B" />
            <rect y="7.5" width="45" height="15" fill="#F1BF00" />
            <g transform="translate(7.5 4.5)">
              <path
                d="M.7 7h1.6v14H.7zm15.1 0h1.6v14h-1.6z"
                fill="#D6AE39"
                stroke="#7F1D1D"
                strokeWidth=".4"
              />
              <path
                d="m.3 10 2 1.4m13.1-1.4 2 1.4M.3 13.4l2-1.4m13.1 1.4 2-1.4"
                fill="none"
                stroke="#AA151B"
                strokeWidth="1"
              />
              <path
                d="M1 5.2 2.2 1.4h11.6L15 5.2l-1.3 1.1v10.8c0 3.4-2.9 6.2-5.7 7.7-2.8-1.5-5.7-4.3-5.7-7.7V6.3z"
                fill="#A4161A"
                stroke="#E1B43A"
                strokeWidth=".8"
              />
              <path d="M3 7h4v4H3z" fill="#D7A52B" />
              <path d="M8 7h4v4H8z" fill="#F0E7D5" />
              <path d="M3.7 8h.6v.7h-.6zm2 1.7h.6v.7h-.6z" fill="#5B3215" />
              <path d="m9 8 .7-.7.6.9-.3.9.8.4-.4.7-1.1-.5-.8.6-.6-.6.8-.8z" fill="#8C3275" />
              <path d="M3 12h9v4H3z" fill="#C32932" />
              <path d="M4 12v4m2-4v4m2-4v4m2-4v4" stroke="#F3C446" strokeWidth=".7" />
              <ellipse cx="7.5" cy="11.6" rx="1.25" ry="1.6" fill="#275A8C" stroke="#F3C446" strokeWidth=".55" />
              <path d="M6.5 19.3 7.5 18l1 1.3-.6 1.4h-.8z" fill="#3E7A3B" />
              <path
                d="M5.5 4.5 7.5 3l2 1.5v1h-4z"
                fill="#E1B43A"
                stroke="#7F1D1D"
                strokeWidth=".45"
              />
              <path
                d="M5 2.7 5.8 1l1.1 1.2L8 0l1.1 2.2L10.2 1l.8 1.7-.7.5H5.7z"
                fill="#E1B43A"
                stroke="#7F1D1D"
                strokeWidth=".45"
              />
            </g>
          </svg>
          <text className="hero-map-country" x="448" y="62">SPAIN</text>
          <text className="hero-map-city" x="448" y="86">Zaragoza</text>
        </g>

        {!reducedMotion && (
          <>
            <circle r="4.1" fill="#62E3DF" filter="url(#hero-route-glow)">
              <animateMotion
                dur="7s"
                path={US_TO_SPAIN_ROUTE}
                repeatCount="indefinite"
              />
            </circle>
            <circle r="3.2" fill="#62E3DF" filter="url(#hero-route-glow)">
              <animateMotion
                begin="-3.5s"
                dur="7s"
                path={US_TO_SPAIN_ROUTE}
                repeatCount="indefinite"
              />
            </circle>
            <circle r="3.2" fill="#62E3DF" filter="url(#hero-route-glow)">
              <animateMotion
                begin="-3.75s"
                dur="7.5s"
                path={RETURN_ROUTE}
                repeatCount="indefinite"
              />
            </circle>
          </>
        )}
      </svg>
      <p className="hero-map-caption">
        Illustrative route graphic · not live tracking
      </p>
    </div>
  );
}
