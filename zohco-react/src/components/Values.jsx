import { motion } from "framer-motion";
import { reveal } from "../lib";

export default function Values() {
  return (
    <section className="values-section">
      <p className="middle">• OUR VALUES</p>
      <motion.h2 className="harmony" {...reveal()}>
        For those who build in <br />
        harmony with the planet.
      </motion.h2>

      <div className="cards-container">
        <motion.div className="card card-light" {...reveal(0)}>
          <span className="card-tagline">HUMAN-CENTERED</span>
          <h2>Biology is the heart of groundbreaking innovation.</h2>
          <p>
            From eco communities to reforestation projects, our impact speaks for itself. We partner worldwide to develop and scale various sustainable initiatives.
          </p>
          <div className="card-pills">
            <span className="pill">Eco Development</span>
            <span className="pill">Nature Technology</span>
          </div>
        </motion.div>

        <motion.div className="card card-image" {...reveal(0.1)}>
          <img src="/images/hero-green-grass.webp" alt="Human touches green grass" loading="lazy" />
        </motion.div>

        <motion.div className="card card-dark" {...reveal(0.2)}>
          <span className="card-tagline">TECHNOLOGY-CENTERED</span>
          <h2>Sustainable solutions inspired by the natural world.</h2>
          <p>
            From eco communities to reforestation projects, our impact speaks for itself. We work with partners worldwide to implement sustainable initiatives.
          </p>
          <div className="card-pills">
            <span className="pill">Circular Economy</span>
            <span className="pill">Renewable Energy</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
