import { MotionConfig } from "framer-motion";
import Hero from "./components/Hero";
import LogoTicker from "./components/LogoTicker";
import Values from "./components/Values";
import Solutions from "./components/Solutions";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import AboutMore from "./components/AboutMore";
import Showcase from "./components/Showcase";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Adventure from "./components/Adventure";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Hero />
      <main>
        <LogoTicker />
        <Values />
        <Solutions />
        <Services />
        <Gallery />
        <AboutMore />
        <Showcase />
        <Stats />
        <Testimonials />
        <Adventure />
        <Blog />
      </main>
      <Footer />
    </MotionConfig>
  );
}
