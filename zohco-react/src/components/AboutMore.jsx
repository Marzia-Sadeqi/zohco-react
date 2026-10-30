import { motion } from "framer-motion";
import Counter from "./Counter";
import { reveal } from "../lib";

export default function AboutMore() {
  return (
    <section className="about-more-section" id="about">
      <div className="about-more-container">
        <div className="column-left">
          <span className="about-badge">• ABOUT MORE</span>
          <div className="stats-block">
            <h3>
              $100M+ Investment Has
              <br />
              Been Collected From All Over The World.
            </h3>
            <div className="counter-display">
              <Counter to={4560} suffix="M+" duration={2.4} />
            </div>
          </div>
        </div>

        <div className="column-right">
          <motion.div className="content-intro-block" {...reveal()}>
            <p className="main-description">
              By integrating ecological principles with cutting-edge digital design, this template provides the perfect foundation for businesses committed to sustainability and meaningful impact.
            </p>
            <a href="#contact" className="btn-discover">Discover More</a>
          </motion.div>

          <div className="images-grid">
            <motion.div className="grid-img-wrapper" {...reveal(0.05)}>
              <img src="/images/statistics-women-wind-fan.jpg" alt="Woman assembling mini desktop wind turbine mechanism" loading="lazy" />
            </motion.div>
            <motion.div className="grid-img-wrapper" {...reveal(0.15)}>
              <img src="/images/statistics-water-droplet.webp" alt="Clear pristine stream water splashing macro view" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
