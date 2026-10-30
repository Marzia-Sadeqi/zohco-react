import { motion } from "framer-motion";
import Counter from "./Counter";
import { reveal } from "../lib";

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-intro-col">
          <span className="stats-badge">&bull; OUR STATISTIC</span>
          <h2 className="stats-heading">
            This template provides the ideal foundation for businesses focused on sustainability.
          </h2>
          <a href="#contact" className="stats-cta-btn">Discover More</a>
        </div>

        <div className="stats-bento-grid">
          <motion.div className="bento-card bento-img-card tall-card-1" {...reveal(0)}>
            <img src="/images/statistics-wind-turbine.webp" alt="Wind turbine structure against sky" className="bento-media" loading="lazy" />
          </motion.div>

          <motion.div className="bento-card bento-text-card light-gray-card" {...reveal(0.05)}>
            <div className="stat-number"><Counter to={1500} suffix="+" /></div>
            <p className="stat-passage">Eco And Sustainable Projects Successfully Supported.</p>
            <span className="corner-accent-dot" />
          </motion.div>

          <motion.div className="bento-card bento-img-card standard-img-card" {...reveal(0.1)}>
            <img src="/images/statistics-boats-water.jpg" alt="Aerial view of water bodies and boats" className="bento-media" loading="lazy" />
          </motion.div>

          <motion.div className="bento-card bento-text-card light-green-card" {...reveal(0.15)}>
            <div className="stat-number color-dark-green"><Counter to={97} suffix="%" /></div>
            <p className="stat-passage color-dark-green">Customer Satisfaction And Growth Rate. - Optimized Value!</p>
            <span className="corner-accent-dot" />
          </motion.div>

          <motion.div className="bento-card bento-img-card tall-card-2" {...reveal(0.1)}>
            <img src="/images/statistics-mountain-road.jpg" alt="Truck driving on open highway towards snow mountain peak" className="bento-media" loading="lazy" />
          </motion.div>

          <motion.div className="bento-card bento-img-card standard-img-card" {...reveal(0.15)}>
            <img src="/images/statistics-watering-plants.webp" alt="Sprinkler system watering agricultural garden crops" className="bento-media" loading="lazy" />
          </motion.div>

          <motion.div className="bento-card bento-text-card wide-stat-card light-gray-card" {...reveal(0.2)}>
            <div className="stat-number"><Counter to={4000} suffix="+" /></div>
            <p className="stat-passage">Eco And Sustainable Projects Successfully Supported. &mdash; Building A Greener Future</p>
            <svg className="bento-curve-svg" viewBox="0 0 200 100" fill="none" aria-hidden="true">
              <path d="M0,100 C80,100 150,70 200,0" stroke="rgba(5, 46, 36, 0.06)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
