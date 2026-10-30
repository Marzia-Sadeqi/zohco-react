import { useEffect, useRef } from "react";

/** A muted, looping, autoplaying video. (React needs the ref trick to make autoplay reliable.) */
export default function BackgroundVideo({ src, type, className }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <video ref={ref} className={className} autoPlay loop muted playsInline preload="auto">
      <source src={src} type={type} />
    </video>
  );
}
