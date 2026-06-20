import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import TurnstileWidget from "./TurnstileWidget";

vi.mock("next/script", () => ({
  default: ({
    id,
    onLoad,
    src,
    strategy,
  }: {
    id: string;
    onLoad: () => void;
    src: string;
    strategy: string;
  }) => (
    <button
      data-testid="turnstile-script"
      data-strategy={strategy}
      id={id}
      onClick={onLoad}
      type="button"
    >
      {src}
    </button>
  ),
}));

type TurnstileOptions = {
  sitekey: string;
  theme: "light";
  size: "flexible";
  language: "nl";
  callback: (token: string) => void;
  "expired-callback": () => void;
  "error-callback": () => void;
};

const DEVELOPMENT_SITE_KEY = "1x00000000000000000000AA";
const WIDGET_ID = "widget-id";

describe("TurnstileWidget", () => {
  const renderWidget = vi.fn(() => WIDGET_ID);
  const resetWidget = vi.fn();
  const removeWidget = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    window.turnstile = {
      render: renderWidget,
      reset: resetWidget,
      remove: removeWidget,
    };
  });

  afterEach(() => {
    delete window.turnstile;
    vi.unstubAllEnvs();
  });

  const loadScript = () => {
    fireEvent.click(screen.getByTestId("turnstile-script"));
  };

  const getRenderedOptions = () =>
    renderWidget.mock.calls[0][1] as TurnstileOptions;

  it("renders in development after the script loads with the exact site key and options", () => {
    const onVerify = vi.fn();

    render(<TurnstileWidget onVerify={onVerify} />);

    expect(renderWidget).not.toHaveBeenCalled();
    expect(screen.getByTestId("turnstile-script")).toHaveTextContent(
      "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit",
    );
    expect(screen.getByTestId("turnstile-script")).toHaveAttribute(
      "data-strategy",
      "afterInteractive",
    );

    loadScript();

    const container = screen.getByLabelText("Beveiligingscontrole");
    expect(renderWidget).toHaveBeenCalledTimes(1);
    expect(renderWidget).toHaveBeenCalledWith(container, {
      sitekey: DEVELOPMENT_SITE_KEY,
      theme: "light",
      size: "flexible",
      language: "nl",
      callback: onVerify,
      "expired-callback": expect.any(Function),
      "error-callback": expect.any(Function),
    });
  });

  it("forwards a verified token through the callback", () => {
    const onVerify = vi.fn();

    render(<TurnstileWidget onVerify={onVerify} />);
    loadScript();
    getRenderedOptions().callback("verified-token");

    expect(onVerify).toHaveBeenCalledOnce();
    expect(onVerify).toHaveBeenCalledWith("verified-token");
  });

  it("clears the token and invokes onExpire when the challenge expires", () => {
    const onVerify = vi.fn();
    const onExpire = vi.fn();

    render(<TurnstileWidget onExpire={onExpire} onVerify={onVerify} />);
    loadScript();
    getRenderedOptions()["expired-callback"]();

    expect(onVerify).toHaveBeenCalledOnce();
    expect(onVerify).toHaveBeenCalledWith("");
    expect(onExpire).toHaveBeenCalledOnce();
  });

  it("clears the token when Turnstile reports an error", () => {
    const onVerify = vi.fn();

    render(<TurnstileWidget onVerify={onVerify} />);
    loadScript();
    getRenderedOptions()["error-callback"]();

    expect(onVerify).toHaveBeenCalledOnce();
    expect(onVerify).toHaveBeenCalledWith("");
  });

  it("resets the current widget and clears the token when resetKey changes", () => {
    const onVerify = vi.fn();
    const { rerender } = render(
      <TurnstileWidget onVerify={onVerify} resetKey={0} />,
    );
    loadScript();

    rerender(<TurnstileWidget onVerify={onVerify} resetKey={1} />);

    expect(resetWidget).toHaveBeenCalledOnce();
    expect(resetWidget).toHaveBeenCalledWith(WIDGET_ID);
    expect(onVerify).toHaveBeenCalledOnce();
    expect(onVerify).toHaveBeenCalledWith("");
    expect(renderWidget).toHaveBeenCalledOnce();
  });

  it("removes the current widget on unmount", () => {
    const onVerify = vi.fn();
    const { unmount } = render(<TurnstileWidget onVerify={onVerify} />);
    loadScript();

    unmount();

    expect(removeWidget).toHaveBeenCalledOnce();
    expect(removeWidget).toHaveBeenCalledWith(WIDGET_ID);
  });

  it("does not duplicate the widget after repeated script loads or rerenders", () => {
    const onVerify = vi.fn();
    const { rerender } = render(<TurnstileWidget onVerify={onVerify} />);
    const script = screen.getByTestId("turnstile-script");

    fireEvent.click(script);
    fireEvent.click(script);
    rerender(<TurnstileWidget onVerify={onVerify} />);

    expect(renderWidget).toHaveBeenCalledOnce();
    expect(removeWidget).not.toHaveBeenCalled();
  });

  it("shows an alert in production when the site key is missing", () => {
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("NEXT_PUBLIC_TURNSTILE_SITE_KEY", "");

    render(<TurnstileWidget onVerify={vi.fn()} />);

    expect(screen.getByRole("alert")).toHaveTextContent(
      "CAPTCHA is nog niet geconfigureerd.",
    );
    expect(screen.queryByTestId("turnstile-script")).not.toBeInTheDocument();
    expect(renderWidget).not.toHaveBeenCalled();
  });
});
