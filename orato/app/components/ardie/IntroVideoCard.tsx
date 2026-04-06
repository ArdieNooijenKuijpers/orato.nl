"use client";

import { useEffect, useRef, useState } from "react";

type IntroVideoCardProps = {
  src: string;
  title: string;
  description: string;
};

const IntroVideoCard = ({
  src,
  title,
  description,
}: IntroVideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlayback = async () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (video.paused) {
      await video.play();
      return;
    }

    video.pause();
  };

  return (
    <div className="mt-5 overflow-hidden rounded-[2rem] border border-orato-dark/10 bg-white/85 shadow-sm backdrop-blur">
      <div className="border-b border-orato-dark/8 px-5 py-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orato-dark/55">
              {title}
            </p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-orato-dark/75">
              {description}
            </p>
          </div>

          <button
            type="button"
            onClick={() => void togglePlayback()}
            aria-label={isPlaying ? "Pauzeer introvideo" : "Speel introvideo af"}
            className="hidden h-14 w-14 flex-none cursor-small items-center justify-center rounded-full border border-orato-dark/10 bg-orato-dark text-white transition hover:bg-orato-orange sm:inline-flex"
          >
            <span className="text-lg leading-none">{isPlaying ? "❚❚" : "▶"}</span>
          </button>
        </div>
      </div>

      <div className="p-3 md:p-4">
        <div className="overflow-hidden rounded-[1.5rem] bg-orato-dark shadow-[0_25px_80px_-40px_rgba(20,20,20,0.65)] ring-1 ring-black/5">
          <video
            ref={videoRef}
            src={src}
            controls
            preload="metadata"
            playsInline
            className="aspect-video w-full cursor-big cursor-invert bg-orato-dark object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default IntroVideoCard;
