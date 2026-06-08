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

vi.mock("../../components/ardie/IntroVideoCard", () => ({ default: () => <section data-testid="intro-video" /> }));
vi.mock("../../components/ardie/MottoHandwriting", () => ({ default: () => <div data-testid="motto-handwriting" /> }));
vi.mock("../../components/ardie/QuoteBadge", () => ({
  default: ({ quoteId }: { quoteId?: string }) => <blockquote data-testid={quoteId ?? "quote-badge"} />,
}));
vi.mock("../../components/ardie/RedThreadTimeline", () => ({ default: () => <section data-testid="timeline" /> }));
vi.mock("../../components/Navigation/Footer", () => ({ default: () => <footer data-testid="footer" /> }));

import ArdiePage, { metadata } from "./page";

describe("ardie route smoke", () => {
  it("renders the profile shell, role links, credentials, and practical contact paths", () => {
    render(<ArdiePage />);

    expect(screen.getByRole("heading", { name: "Ardie" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Mastercoach" })).toHaveAttribute("href", "/Onderwerpen/Coaching");
    expect(screen.getByRole("link", { name: "Supervisie" })).toHaveAttribute("href", "/Onderwerpen/Supervisie");
    expect(screen.getByRole("link", { name: "Presentatietrainer" })).toHaveAttribute("href", "/Onderwerpen/Presenteren");
    expect(screen.getByText(/Master Certified Coach bij de ICF/)).toBeInTheDocument();
    expect(screen.getByText(/Senior Practitioner bij NOBCO\/EMCC/)).toBeInTheDocument();
    expect(screen.getByTestId("intro-video")).toBeInTheDocument();
    expect(screen.getByTestId("timeline")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Bel +31 6 510 88 6 88" })).toHaveAttribute(
      "href",
      "tel:+31651088688",
    );
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("exposes route metadata for search and sharing", () => {
    expect(metadata).toMatchObject({
      title: "Ardie",
      alternates: { canonical: "/Info/Ardie" },
      openGraph: expect.objectContaining({ url: "/Info/Ardie" }),
    });
  });
});
