import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/font/google", () => ({
  Noto_Serif_Display: () => ({ className: "mock-noto-serif-display" }),
  Tangerine: () => ({ className: "mock-tangerine" }),
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
vi.mock("../../components/motion/InteractiveGlowPanel", () => ({
  default: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={className}>{children}</div>
  ),
}));
vi.mock("../../components/ardie/QuoteBadge", () => ({
  default: ({ quoteId }: { quoteId?: string }) => <blockquote data-testid={quoteId ?? "quote-badge"} />,
}));
vi.mock("../../components/Navigation/Footer", () => ({ default: () => <footer data-testid="footer" /> }));

import SupervisiePage, { metadata } from "./page";

describe("supervisie route smoke", () => {
  it("renders the supervisie page shell, professional sections, and contact paths", () => {
    render(<SupervisiePage />);

    expect(screen.getByRole("heading", { name: "Een ontmoeting tussen twee professionals." })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Kennismakingsgesprek" })).toHaveAttribute("href", "/Contact");
    expect(screen.getAllByRole("link", { name: "Meer over Ardie" })[0]).toHaveAttribute("href", "/Info/Ardie");
    expect(screen.getByText(/ESIA Supervisor en Coachopleider/)).toBeInTheDocument();
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
      title: "Orato - Supervisie",
      description: expect.stringContaining("Supervisie"),
    });
  });
});
