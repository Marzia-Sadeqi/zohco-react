
import { useEffect, useRef } from "react";

export default function BackgroundVideo({ src, type, className }) {
  const ref = useRef(null);

  const videoSrc = src
    ? `${import.meta.env.BASE_URL}${src.replace(/^\/+/, "")}`
    : "";

  useEffect(() => {
    const video = ref.current;

    if (!video) return;

    video.muted = true;

    video.play().catch((error) => {
      console.warn("Video autoplay failed:", error);
    });
  }, [videoSrc]);

  return (
    <video
      ref={ref}
      className={className}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
    >
      <source src={videoSrc} type={type} />
    </video>
  );
}
