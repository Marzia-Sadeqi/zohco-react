import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "./icons";
import useMediaQuery from "../hooks/useMediaQuery";
import { testimonials } from "../data/content";

const Star = () => <span>&#9733;</span>;

export default function Testimonials() {
  const isDesktop = useMediaQuery("(min-width: 1025px)"); // desktop shows 2 cards, smaller screens show 1
  const [index, setIndex] = useState(0);

  const maxIndex = isDesktop ? testimonials.length - 2 : testimonials.length - 1;

  // Go back to the first card whenever the screen size changes between layouts.
  useEffect(() => setIndex(0), [isDesktop]);

  const next = () => setIndex((i) => (i < maxIndex ? i + 1 : 0)); // loops around
  const prev = () => setIndex((i) => (i > 0 ? i - 1 : maxIndex));

  // One step = one card + the gap (desktop: 50% + 1rem of the track width), or 100% on smaller screens.
  const step = isDesktop ? `calc(${index} * (50% + 1rem))` : `calc(${index} * 100%)`;

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <span className="testimonials-badge">&bull; TESTIMONIALS</span>
          <h2 className="testimonials-title">Happy clients observation</h2>
        </div>

        <div className="testimonials-slider-window">
          <div className="testimonials-track" style={{ transform: `translateX(calc(-1 * ${step}))` }}>
            {testimonials.map((t) => (
              <article className="testimonial-card" key={t.name}>
                <div className={`testimonial-avatar-wrapper ${t.dark ? "avatar-bg-dark" : ""}`}>
                  <img src={t.image} alt={`Portrait of ${t.name}`} className="avatar-img" loading="lazy" />
                </div>
                <div className="testimonial-content">
                  <div className="star-rating-row" aria-label="5 out of 5 stars">
                    <Star /><Star /><Star /><Star /><Star />
                  </div>
                  <p className="quote-text">{t.quote}</p>
                  <div className="client-meta">
                    <h4 className="client-name">{t.name}</h4>
                    <span className="client-location">{t.location}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="carousel-arrow-controls-row">
          <button type="button" className={`control-arrow-pill ${index > 0 ? "active-accent" : ""}`} onClick={prev} aria-label="Go to previous testimonial">
            <ArrowLeft />
          </button>
          <button type="button" className={`control-arrow-pill ${index < maxIndex ? "active-accent" : ""}`} onClick={next} aria-label="Go to next testimonial">
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
