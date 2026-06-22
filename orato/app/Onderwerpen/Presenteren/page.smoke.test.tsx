import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/font/google", () => ({
  Noto_Serif_Display: () => ({ className: "mock-noto-serif-display" }),
}));

vi.mock("next/image", () => ({
  default: ({ priority, ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { priority?: boolean }) =>
    React.createElement("img", props),
}));

vi.mock("../../components/motion/Reveal", () => ({
  default: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={className}>{children}</div>
  ),
}));
vi.mock("../../components/ardie/QuoteBadge", () => ({
  default: ({ quoteId }: { quoteId?: string }) => <blockquote data-testid={quoteId ?? "quote-badge"} />,
}));
vi.mock("../../inschrijfformulier/InschrijfFormModal", () => ({
  default: ({ triggerLabel, children }: { triggerLabel?: string; children?: React.ReactNode }) => (
    <button type="button">{children ?? triggerLabel ?? "Schrijf je in"}</button>
  ),
}));
vi.mock("./TrackTransitionIndicator", () => ({ default: () => <div data-testid="track-transition-indicator" /> }));
vi.mock("../../components/Navigation/Footer", () => ({ default: () => <footer data-testid="footer" /> }));

import PresenterenPage, { metadata } from "./page";

describe("presenteren route smoke", () => {
  it("renders the presenteren page shell, tracks, downloads, and registration actions", () => {
    render(<PresenterenPage />);

    expect(screen.getByRole("heading", { name: "Presenteren" })).toBeInTheDocument();
    expect(screen.getByTestId("track-transition-indicator")).toBeInTheDocument();
    expect(screen.getAllByRole("heading", { name: "1-op-1 presentatiecoaching" }).length).toBeGreaterThan(0);
    expect(screen.getByRole("link", { name: "Bekijk 1-op-1 presentatiecoaching" })).toHaveAttribute("href", "#coaching");
    expect(screen.getByRole("link", { name: "Bekijk Speaking Circle®" })).toHaveAttribute("href", "#speaking-circle");
    expect(screen.getByRole("link", { name: "Bekijk Workshops" })).toHaveAttribute("href", "#workshops");
    expect(screen.getByRole("link", { name: "Tarief vanaf €185/u" })).toHaveAttribute(
      "href",
      "#presentatiecoaching-investering",
    );
    expect(screen.getByRole("link", { name: "Tarief €250" })).toHaveAttribute("href", "#speaking-circle-investering");
    expect(screen.getByRole("link", { name: "Tarief op aanvraag" })).toHaveAttribute(
      "href",
      "mailto:ardie@orato.info?subject=Aanvraag%20workshop%20presenteren",
    );
    expect(screen.getByRole("link", { name: "Download hier de informatieflyer" })).toHaveAttribute("download");
    expect(screen.getAllByRole("button", { name: /schrijf je in/i }).length).toBeGreaterThan(0);
    expect(screen.getByText("Privacyverklaring")).toHaveAttribute("href", "/Info/PrivacyVerklaring");
    expect(screen.getByText("Algemene voorwaarden")).toHaveAttribute("href", "/Info/AlgemeneVoorwaarden");
    expect(screen.getByRole("link", { name: "Bel +31 6 510 88 6 88" })).toHaveAttribute(
      "href",
      "tel:+31651088688",
    );
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("exposes route metadata for search and sharing", () => {
    expect(metadata).toMatchObject({
      title: "Orato - Presenteren",
      description: expect.stringContaining("Presenteren kun je leren"),
    });
  });
});
