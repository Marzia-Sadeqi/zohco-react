
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BackgroundVideo from "./BackgroundVideo";
import { reviewAvatars, solutionsAccordion } from "../data/content";

export default function Solutions() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="split-screen-container">
      <div className="media-column">
        <BackgroundVideo
          src="/designing-solutions-business-video.webm"
          type="video/webm"
        />
      </div>

      <div className="content-column">
        <div className="header-group">
          <span className="badge">• CRAFTED FOR BUSINESSES</span>
          <h1>Designing solutions for the Eco future.</h1>
          <p className="header-intro">
            By combining biological insights with advanced technology, we
            craft solutions that are sustainable, adaptable, and human-centered.
          </p>
        </div>

        <div className="accordion-group">
          {solutionsAccordion.map((item, i) => {
            const open = openIndex === i;

            return (
              <div
                key={item.title}
                className={`accordion-item ${open ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  className="accordion-summary"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? -1 : i)}
                >
                  {item.title}
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      className="accordion-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.35,
                        ease: [0.2, 0.7, 0.2, 1],
                      }}
                      style={{ overflow: "hidden" }}
                    >
                      <p>{item.text}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="reviews-widget">
          <div className="avatar-stack">
            {reviewAvatars.map((src) => (
              <img key={src} src={src} alt="" />
            ))}
            <div className="avatar-plus">+</div>
          </div>

          <span className="reviews-text">70K+ Positive Reviews</span>
        </div>
      </div>
    </div>
  );
}
