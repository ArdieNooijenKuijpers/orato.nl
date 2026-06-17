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
vi.mock("../../components/motion/CoachingConversationIllustration", () => ({
  default: () => <div data-testid="coaching-conversation-illustration" />,
}));
vi.mock("../../components/ardie/QuoteBadge", () => ({
  default: ({ quoteId }: { quoteId?: string }) => <blockquote data-testid={quoteId ?? "quote-badge"} />,
}));
vi.mock("../../components/Navigation/Footer", () => ({ default: () => <footer data-testid="footer" /> }));

import CoachingPage, { metadata } from "./page";

describe("coaching route smoke", () => {
  it("renders the coaching page shell, core sections, and contact paths", () => {
    render(<CoachingPage />);

    expect(screen.getByRole("heading", { name: "Betekenisvolle gesprekken met impact." })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Vrijblijvend kennismaken" })).toHaveAttribute("href", "/Contact");
    expect(screen.getAllByRole("link", { name: "Meer over Ardie" })[0]).toHaveAttribute("href", "/Info/Ardie");
    expect(screen.getByText("Therapeutische Coaching")).toBeInTheDocument();
    expect(screen.getByText("Executive Coaching")).toBeInTheDocument();
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
      title: "Orato - Coaching",
      description: expect.stringContaining("Betekenisvolle gesprekken"),
    });
  });
});
