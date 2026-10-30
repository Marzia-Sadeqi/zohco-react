
import { motion } from "framer-motion";
import BackgroundVideo from "./BackgroundVideo";
import { FeatureIcon } from "./icons";
import { features } from "../data/content";
import { reveal } from "../lib";

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

/** Dark green section: video with a frosted-glass card, then 4 feature cards. */
export default function Showcase() {
  return (
    <section className="showcase-section">
      <div className="showcase-container">
        <span className="showcase-badge">
          &bull; CRAFTED FOR BUSINESSES
        </span>

        <h2 className="showcase-heading">
          Designing solutions
          <br />
          for the Eco future.
        </h2>

        <div className="video-media-frame">
          <BackgroundVideo
            className="media-bg-video"
            src="/designing-solutions-background-video.mp4"
            type="video/mp4"
          />

          <div className="glass-overlay-card">
            <p className="card-passage-text">
              By Choosing This Template, You Elevate Your Brand With A
              Sustainable Design That Highlights Your Eco-Commitment And
              Drives Growth With Positive Impact.
            </p>

            <div className="card-embedded-image-wrapper">
              <img
                src={asset("images/designing-solutions-farm-image.webp")}
                alt="Green field landscape layout"
                className="embedded-passage-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="features-grid-container">
        {features.map((f, i) => (
          <motion.div
            className="feature-card"
            key={f.title}
            {...reveal(i * 0.08)}
          >
            <div className="feature-icon-wrapper">
              <FeatureIcon name={f.icon} />
            </div>

            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-description">{f.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
