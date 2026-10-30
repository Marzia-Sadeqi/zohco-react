import { useState } from "react";
import { ArrowUpRight, StackLogo } from "./icons";
import { footerColumns, socials } from "../data/content";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    setSubscribed(true);
  };

  return (
    <footer className="site-footer">
      <div className="footer-container footer-top">
        <div className="footer-column newsletter-col">
          <h4 className="column-title">NEWSLETTER</h4>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input type="email" placeholder="Enter your email..." required aria-label="Email address" />
            <button type="submit" aria-label="Subscribe">
              <ArrowUpRight />
            </button>
          </form>
          <p className="newsletter-text">{subscribed ? "Thank you for subscribing!" : "Stay tuned and subscribe to our newsletter."}</p>
        </div>

        {footerColumns.map((col) => (
          <div className="footer-column" key={col.title}>
            <h4 className="column-title">{col.title}</h4>
            <ul className="footer-links">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#top">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-container footer-middle">
        <div className="contact-item">
          <span className="contact-label">EMAIL US</span>
          <a href="mailto:info.zohco@gmail.com" className="contact-value">info.zohco@gmail.com</a>
        </div>
        <div className="contact-item">
          <span className="contact-label">LOCATION</span>
          <a
            href="https://www.google.com/maps/search/?api=1&query=174%20Street%20Charleston%20New%20York"
            target="_blank"
            rel="noreferrer"
            className="contact-value"
          >
            174 Street Charleston, New York
          </a>
        </div>
        <div className="contact-item">
          <span className="contact-label">CALL US NOW</span>
          <a href="tel:+8808999388750" className="contact-value">(+880) 89993 88750</a>
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-bottom-panel">
          <div className="panel-left">
            <div className="footer-logo">
              <StackLogo />
              <span className="logo-text">Zohco</span>
            </div>
            <div className="social-links">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="social-btn">{s.label}</a>
              ))}
            </div>
          </div>
          <div className="panel-right">
            <p className="copyright">© 2026 Copyright - Zohco | Designed by “Flowzai” | Powered by Framer</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
