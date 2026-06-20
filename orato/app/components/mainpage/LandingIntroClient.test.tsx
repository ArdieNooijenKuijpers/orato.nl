import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import LandingIntroClient from "./LandingIntroClient";

const INTRO_STORAGE_KEY = "orato-home-intro-session-v1";
const OUTRO_DURATION_MS = 1500;
const sources = [
  {
    src: "/Homepage/LandingAnimation/landing-intro.webm",
    type: "video/webm" as const,
  },
  {
    src: "/Homepage/LandingAnimation/landing-intro.mp4",
    type: "video/mp4" as const,
  },
];

const getVideo = () => document.querySelector("video") as HTMLVideoElement;

describe("LandingIntroClient", () => {
  beforeEach(() => {
    sessionStorage.clear();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
    sessionStorage.clear();
  });

  it("renders an autoplaying muted inline video with both source formats", () => {
    render(<LandingIntroClient sources={sources} />);

    const video = getVideo();

    expect(video).toBeInTheDocument();
    expect(video.autoplay).toBe(true);
    expect(video.muted).toBe(true);
    expect(video.playsInline).toBe(true);
    expect(video.preload).toBe("auto");
    expect(screen.getByRole("button", { name: "Overslaan" })).toBeInTheDocument();
    expect(video.querySelectorAll("source")).toHaveLength(2);
    expect(video.querySelector('source[type="video/webm"]')).toHaveAttribute(
      "src",
      sources[0].src,
    );
    expect(video.querySelector('source[type="video/mp4"]')).toHaveAttribute(
      "src",
      sources[1].src,
    );
    expect(video.style.maskImage).toContain("orato-bloem-wit.svg");
    expect(video.style.maskSize).toBe("2400vmax");
    expect(video.style.opacity).toBe("1");
  });

  it("runs the flower-mask outro and remembers the skip for the session", () => {
    render(<LandingIntroClient sources={sources} />);

    fireEvent.click(screen.getByRole("button", { name: "Overslaan" }));

    expect(getVideo().style.maskSize).toBe("44vmin");
    expect(getVideo().style.opacity).toBe("0");

    act(() => {
      vi.advanceTimersByTime(OUTRO_DURATION_MS);
    });

    expect(screen.queryByRole("button", { name: "Overslaan" })).not.toBeInTheDocument();
    expect(sessionStorage.getItem(INTRO_STORAGE_KEY)).toBe("1");
  });

  it("starts the outro shortly before playback reaches the end", () => {
    render(<LandingIntroClient sources={sources} />);

    const video = getVideo();
    Object.defineProperty(video, "duration", {
      configurable: true,
      value: 3.2,
    });
    Object.defineProperty(video, "currentTime", {
      configurable: true,
      value: 2.5,
    });

    fireEvent.timeUpdate(video);

    expect(video.style.maskSize).toBe("44vmin");
    expect(video.style.opacity).toBe("0");

    act(() => {
      vi.advanceTimersByTime(OUTRO_DURATION_MS);
    });

    expect(screen.queryByRole("button", { name: "Overslaan" })).not.toBeInTheDocument();
    expect(sessionStorage.getItem(INTRO_STORAGE_KEY)).toBe("1");
  });

  it("completes the outro when the video ends", () => {
    render(<LandingIntroClient sources={sources} />);

    fireEvent.ended(getVideo());

    act(() => {
      vi.advanceTimersByTime(OUTRO_DURATION_MS);
    });

    expect(screen.queryByRole("button", { name: "Overslaan" })).not.toBeInTheDocument();
    expect(sessionStorage.getItem(INTRO_STORAGE_KEY)).toBe("1");
  });

  it("does not show the intro again after it has been seen in the session", () => {
    sessionStorage.setItem(INTRO_STORAGE_KEY, "1");

    render(<LandingIntroClient sources={sources} />);

    expect(screen.queryByRole("button", { name: "Overslaan" })).not.toBeInTheDocument();
    expect(document.querySelector("video")).not.toBeInTheDocument();
  });

  it("renders nothing when no playable video source is available", () => {
    render(<LandingIntroClient sources={[]} />);

    expect(document.querySelector("video")).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Overslaan" })).not.toBeInTheDocument();
  });
});
