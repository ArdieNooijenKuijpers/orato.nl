import { cookies } from "next/headers";
import LandingIntroClient from "./LandingIntroClient";

const INTRO_COOKIE_NAME = "orato_home_intro_session_v1";

export default function LandingIntro() {
  const hasSeenIntro = cookies().get(INTRO_COOKIE_NAME)?.value === "1";

  if (hasSeenIntro) {
    return null;
  }

  return <LandingIntroClient />;
}
