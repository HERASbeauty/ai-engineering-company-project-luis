import { useEffect, useState } from "react";

const US_TO_SPAIN_ROUTE = "M 128 156 C 184 66 253 72 320 147";
const RETURN_ROUTE = "M 128 156 C 187 238 263 226 320 147";

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
        viewBox="0 0 620 360"
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
          <pattern
            id="hero-map-dots"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.45" fill="#62E3DF" fillOpacity=".8" />
          </pattern>
          <linearGradient id="hero-route-gradient" x1="128" y1="156" x2="320" y2="147">
            <stop stopColor="#1D67F2" />
            <stop offset="1" stopColor="#62E3DF" />
          </linearGradient>
          <filter id="hero-route-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          className="hero-map-continent"
          fill="url(#hero-map-dots)"
          d="M34 84 22 75 17 62 25 51 38 51 48 59 62 53 69 45 81 49 91 43 108 49 120 45 138 53 153 54 165 61 180 65 192 72 208 77 221 88 231 96 224 107 214 114 208 124 196 127 191 138 180 141 175 153 166 157 161 168 151 171 144 163 138 151 129 146 118 140 109 130 96 130 87 121 75 119 69 110 56 106 49 96 38 94Z"
        />
        <path
          className="hero-map-continent"
          fill="url(#hero-map-dots)"
          d="M32 82 19 81 12 74 18 66 31 68 39 74Z"
        />
        <path
          className="hero-map-continent"
          fill="url(#hero-map-dots)"
          d="m177 57 16-9 20 6 5 14-13 15-16-5-10-10z"
        />
        <path
          className="hero-map-continent"
          fill="url(#hero-map-dots)"
          d="m154 163 13 8 6 11 8 11 9 6-5 6-10-6-8-10-8-9z"
        />
        <path
          className="hero-map-continent"
          fill="url(#hero-map-dots)"
          d="m185 201 19 5 14 13 8 16-3 14 10 10-8 18-7 15-7 19-12 19-7-15 3-19-11-16 3-16-9-14 4-16-8-14z"
        />
        <path
          className="hero-map-continent"
          fill="url(#hero-map-dots)"
          d="M300 120 307 111 317 109 322 101 333 102 340 107 350 104 358 111 369 110 380 117 386 125 377 131 366 129 359 137 348 139 341 147 330 145 324 139 315 140 309 134 300 132Z"
        />
        <path
          className="hero-map-continent"
          fill="url(#hero-map-dots)"
          d="M310 136 325 138 333 145 329 154 317 157 306 152 301 144Z"
        />
        <path
          className="hero-map-continent"
          fill="url(#hero-map-dots)"
          d="M346 103 348 91 356 78 364 81 363 94 369 104 364 111 356 106Z"
        />
        <path
          className="hero-map-continent"
          fill="url(#hero-map-dots)"
          d="M294 111 299 106 302 112 299 120 294 117Z"
        />
        <path
          className="hero-map-continent"
          fill="url(#hero-map-dots)"
          d="m365 85 24-11 25 4 19-7 26 7 19-5 22 10 20-1 21 11 6 17-13 9-18-4-13 12-18-3-12 14-20-7-13 13-19-5-13-12-20 6-11-16-18-2-9-13-15-3z"
        />
        <path
          className="hero-map-continent"
          fill="url(#hero-map-dots)"
          d="m420 139 14 13 4 18-9 18-8-17-6-16z"
        />
        <path
          className="hero-map-continent"
          fill="url(#hero-map-dots)"
          d="m497 221 18-6 18 5 14 10-6 14-15 6-14-6-11-7z"
        />
        <path
          className="hero-map-route hero-map-route--primary"
          d={US_TO_SPAIN_ROUTE}
          stroke="url(#hero-route-gradient)"
          strokeWidth="2.2"
          strokeOpacity=".92"
        />
        <path
          className="hero-map-route hero-map-route--secondary"
          d={RETURN_ROUTE}
          stroke="#1D67F2"
          strokeWidth="1.4"
          strokeOpacity=".66"
          strokeDasharray="2 8"
        />

        <circle className="hero-node-pulse" cx="128" cy="156" r="13" />
        <circle cx="128" cy="156" r="6" fill="#62E3DF" fillOpacity=".2" />
        <circle cx="128" cy="156" r="3.2" fill="#F3F6F8" />
        <circle className="hero-node-pulse hero-node-pulse--delayed" cx="320" cy="147" r="13" />
        <circle cx="320" cy="147" r="6" fill="#62E3DF" fillOpacity=".2" />
        <circle cx="320" cy="147" r="3.2" fill="#F3F6F8" />

        <g className="hero-map-label">
          <rect className="hero-map-label-background" x="17" y="28" width="164" height="44" rx="7" />
          <svg
            aria-hidden="true"
            x="29"
            y="43"
            width="22"
            height="11.58"
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
          <text className="hero-map-city" x="54" y="64">Los Angeles</text>
        </g>
        <g className="hero-map-label">
          <rect className="hero-map-label-background" x="411" y="39" width="154" height="44" rx="7" />
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
          <text className="hero-map-city" x="448" y="75">Zaragoza</text>
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
