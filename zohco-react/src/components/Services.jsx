import { motion } from "framer-motion";
import { reveal } from "../lib";

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <motion.div className="services-left" {...reveal()}>
          <span className="services-badge">• SUSTAINABLE SERVICES</span>
          <h1>Sustainable design for forward thinking creators.</h1>
          <a href="#contact" className="btn-dark-oval">Book An Intro Call</a>
        </motion.div>

        <motion.div className="services-right" {...reveal(0.1)}>
          <div className="showcase-card">
            <div className="card-image-wrapper">
              <img src="/images/statistics-wind-turbine.webp" alt="Wind turbine spinning against a bright blue sky" loading="lazy" />
            </div>
            <div className="card-body-text">
              <h2>Wind Design</h2>
              <p>
                We Create Beautiful, High-Impact Visuals That Prioritize Environmental Responsibility While Ensuring Your Brand Stands Out In An Increasingly Crowded And Competitive Digital Marketplace.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
