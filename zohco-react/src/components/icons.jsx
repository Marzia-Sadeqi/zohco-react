// Small SVG icons used in the page.
const base = { fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" };
const round = { strokeLinecap: "round", strokeLinejoin: "round" };

export function FeatureIcon({ name }) {
  const paths = {
    globe:
      "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.935-1.462M12 21c-1.921 0-3.702-.605-5.165-1.637m10.1 1.637a8.96 8.96 0 0 1-3.183-5.261m-3.082 5.261a8.96 8.96 0 0 0 3.184-5.261m3.183 5.261a8.949 8.949 0 0 1-4.935-1.462M12 3c1.921 0 3.702.605 5.165 1.637m-10.1-1.637A8.96 8.96 0 0 1 10.248 8.26m3.083-5.26A8.96 8.96 0 0 0 10.25 8.26m-3.183-3.623A8.949 8.949 0 0 1 12 6.075c1.24 0 2.394-.252 3.443-.707m-6.885 0a8.949 8.949 0 0 0 1.692 4.148m0 0a8.955 8.955 0 0 1 3.5 0m-3.5 0a8.963 8.963 0 0 0-2.316 4.962m4.008-4.962a8.964 8.964 0 0 1 2.317 4.962m0 0a8.954 8.954 0 0 1-4.144 0m4.144 0a8.96 8.96 0 0 0 1.692-4.149M12 3a8.949 8.949 0 0 0-4.935 1.462M12 3v18",
    home: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
    pen: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125",
    chart: "M2.25 18L9 11.25l4.306 4.307a.515.515 0 00.743-.006L21.75 3m0 0H16.5m5.25 0v5.25",
  };
  return (
    <svg className="feature-icon" {...base} aria-hidden="true">
      <path {...round} d={paths[name]} />
    </svg>
  );
}

export function ArrowLeft() {
  return (
    <svg {...base} strokeWidth={2.2} className="arrow-svg-icon" aria-hidden="true">
      <path {...round} d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
    </svg>
  );
}

export function ArrowRight() {
  return (
    <svg {...base} strokeWidth={2.2} className="arrow-svg-icon" aria-hidden="true">
      <path {...round} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

export function ArrowUpRight() {
  return (
    <svg {...base} strokeWidth={2} aria-hidden="true">
      <path {...round} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
  );
}

export function MenuIcon({ open }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
    </svg>
  );
}

export function StackLogo() {
  return (
    <svg className="logo-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
