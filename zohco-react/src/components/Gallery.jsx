import { motion } from "framer-motion";
import { galleryCards } from "../data/content";
import { reveal } from "../lib";

export default function Gallery() {
  return (
    <div className="gallery-grid-container">
      {galleryCards.map((c, i) => (
        <motion.div className="gallery-card" key={c.title} {...reveal(i * 0.1)}>
          <div className="gallery-image-box">
            <img src={c.image} alt={c.alt} loading="lazy" />
          </div>
          <div className="gallery-card-body">
            <h2>{c.title}</h2>
            <p>{c.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
