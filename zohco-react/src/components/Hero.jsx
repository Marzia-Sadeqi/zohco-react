import { useState } from "react";
import BackgroundVideo from "./BackgroundVideo";
import { MenuIcon } from "./icons";
import { navLinks } from "../data/content";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="hero-section" id="top">
      <BackgroundVideo className="herovidoe" src="/videos/hero-eco-animation-background-video.mp4" type="video/mp4" />
      <div className="videooverlay" />

      <nav className="site-nav" aria-label="Main">
        <a href="#top" className="nav-logo" aria-label="Zohco home">
          <img src="/images/logo.png" alt="Zohco" />
        </a>
        <ul>
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btndark">
          <b>Contact</b>
        </a>

        <button className="nav-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <MenuIcon open={menuOpen} />
        </button>

        {menuOpen && (
          <div className="nav-mobile-panel">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btndark" onClick={() => setMenuOpen(false)}>
              <b>Contact</b>
            </a>
          </div>
        )}
      </nav>

      <div className="herobody">
        <h1>
          Eco-friendly living
          <br />
          start from here.
        </h1>

        <div className="hero-bottom">
          <div className="herofooter">
            <img className="spinning-image" src="/images/hero-snowflake.png" alt="" />
            <p>Driving sustainability through innovation, eco-friendly tech, and a strong commitment to our planet.</p>
          </div>
          <a href="#contact" className="btndark2">
            <b>Get A Quote</b>
          </a>
        </div>
      </div>
    </section>
  );
}
