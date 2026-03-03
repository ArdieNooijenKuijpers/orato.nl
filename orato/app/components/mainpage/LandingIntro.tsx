import { existsSync } from "node:fs";
import { join } from "node:path";
import { cookies } from "next/headers";
import { preload } from "react-dom";
import LandingIntroClient from "./LandingIntroClient";

const INTRO_COOKIE_NAME = "orato_home_intro_session_v1";
const INTRO_VIDEO_WEBM = "/Homepage/LandingAnimation/landing-intro.webm";
const INTRO_VIDEO_MP4 = "/Homepage/LandingAnimation/landing-intro.mp4";
const INTRO_VIDEO_LEGACY_MP4 =
  "/Homepage/LandingAnimation/Video%20ardie%20DEF%20zonder%20fade%20PLAATSEN%20Start%20HOMEPAGE.mp4";

const videoSourceCandidates = [
  { src: INTRO_VIDEO_WEBM, type: "video/webm" as const },
  { src: INTRO_VIDEO_MP4, type: "video/mp4" as const },
  { src: INTRO_VIDEO_LEGACY_MP4, type: "video/mp4" as const },
];

const publicFileExists = (publicPath: string) =>
  existsSync(
    join(process.cwd(), "public", decodeURIComponent(publicPath.replace(/^\//, ""))),
  );

export default function LandingIntro() {
  const hasSeenIntro = cookies().get(INTRO_COOKIE_NAME)?.value === "1";

  if (hasSeenIntro) {
    return null;
  }

  const sources = videoSourceCandidates.filter((source) => publicFileExists(source.src));

  for (const source of sources) {
    preload(source.src, { as: "video", type: source.type });
  }

  return <LandingIntroClient sources={sources} />;
}
