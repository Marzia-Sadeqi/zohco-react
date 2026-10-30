import { logos } from "../data/content";

/** Endless scrolling row of client logos. The list is repeated twice so the loop has no gap. */
export default function LogoTicker() {
  const items = [...logos, ...logos];
  return (
    <div className="logo-ticker" aria-label="Trusted by">
      <div className="ticker-track">
        {items.map((name, i) => (
          <div className="logo-item" key={`${name}-${i}`} aria-hidden={i >= logos.length}>
            <img src="/images/logo.png" alt={name} />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
