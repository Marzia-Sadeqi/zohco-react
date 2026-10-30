import { adventureImages } from "../data/content";

export default function Adventure() {
  return (
    <section className="adventure-section" id="contact">
      <div className="adventure-container">
        {adventureImages.map((img) => (
          <div key={img.className} className={`floating-media ${img.className}`}>
            <img src={img.src} alt={img.alt} loading="lazy" />
          </div>
        ))}

        <div className="adventure-content-block">
          <h2 className="adventure-main-title">
            Your adventure
            <br />
            awaits &mdash; start eco
            <br />
            exploring now.
          </h2>
          <p className="adventure-subtext">
            Blending ecological insights with advanced digital design, we offer perfect foundation for businesses committed to sustainability.
          </p>
          <div className="adventure-btn-group">
            <a href="#contact" className="adv-btn btn-mint-green">Book An Intro Call</a>
            <a href="#about" className="adv-btn btn-white-glass">Explore More</a>
          </div>
        </div>
      </div>
    </section>
  );
}
