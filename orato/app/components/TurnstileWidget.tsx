"use client";

import Script from "next/script";
import { useEffect, useId, useRef, useState } from "react";

type TurnstileWidgetProps = {
  onVerify: (token: string) => void;
  onExpire?: () => void;
  resetKey?: number;
};

type TurnstileApi = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      theme: "light";
      size: "flexible";
      language: "nl";
      callback: (token: string) => void;
      "expired-callback": () => void;
      "error-callback": () => void;
    },
  ) => string;
  reset: (widgetId: string) => void;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const DEVELOPMENT_SITE_KEY = "1x00000000000000000000AA";

const TurnstileWidget = ({
  onVerify,
  onExpire,
  resetKey = 0,
}: TurnstileWidgetProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string>();
  const reactId = useId();
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const siteKey =
    process.env.NODE_ENV !== "production"
      ? DEVELOPMENT_SITE_KEY
      : process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

  useEffect(() => {
    if (
      !scriptLoaded ||
      !siteKey ||
      !containerRef.current ||
      !window.turnstile ||
      widgetIdRef.current
    ) {
      return;
    }

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      theme: "light",
      size: "flexible",
      language: "nl",
      callback: onVerify,
      "expired-callback": () => {
        onVerify("");
        onExpire?.();
      },
      "error-callback": () => onVerify(""),
    });

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = undefined;
      }
    };
  }, [onExpire, onVerify, scriptLoaded, siteKey]);

  useEffect(() => {
    if (resetKey > 0 && widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
      onVerify("");
    }
  }, [onVerify, resetKey]);

  if (!siteKey) {
    return (
      <p className="text-sm font-medium text-orato-red" role="alert">
        CAPTCHA is nog niet geconfigureerd.
      </p>
    );
  }

  return (
    <>
      <Script
        id={`turnstile-script-${reactId.replace(/:/g, "")}`}
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
      />
      <div
        ref={containerRef}
        className="min-h-[65px] w-full overflow-hidden"
        aria-label="Beveiligingscontrole"
      />
    </>
  );
};

export default TurnstileWidget;
