import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/font/google", () => ({
  Noto_Serif_Display: () => ({ className: "mock-noto-serif-display" }),
  Tangerine: () => ({ className: "mock-tangerine" }),
}));

vi.mock("next/image", () => ({
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) =>
    React.createElement("img", props),
}));

vi.mock("./components/mainpage/LandingIntro", () => ({ default: () => <div data-testid="landing-intro" /> }));
vi.mock("./components/mainpage/rotatingImageWithDate", () => ({
  default: () => <div data-testid="rotating-image-with-date" />,
}));
vi.mock("./components/mainpage/videoMain", () => ({ default: () => <div data-testid="video-main" /> }));
vi.mock("./components/mainpage/lineAtBottom", () => ({ default: () => <div data-testid="line-at-bottom" /> }));
vi.mock("./components/mainpage/horizontalScrollCarousel", () => ({
  default: () => <div data-testid="carousel" />,
}));
vi.mock("./components/Navigation/navbar", () => ({ default: () => <nav data-testid="navbar" /> }));
vi.mock("./components/mainpage/ParticleRing", () => ({ default: () => <div data-testid="particle-ring" /> }));
vi.mock("./components/mainpage/ParticleRing2", () => ({ default: () => <div data-testid="particle-ring-2" /> }));
vi.mock("./components/mainpage/CompanyCircles", () => ({ default: () => <div data-testid="company-circles" /> }));
vi.mock("./components/Navigation/Footer", () => ({ default: () => <footer data-testid="footer" /> }));

import HomePage from "./page";

const expectLinkHref = (name: string, href: string) => {
  const links = screen.getAllByRole("link", { name });
  expect(links.some((link) => link.getAttribute("href") === href)).toBe(true);
};

describe("home route smoke", () => {
  it("renders the homepage shell and key navigation links", () => {
    render(<HomePage />);

    expect(screen.getByTestId("landing-intro")).toBeInTheDocument();
    expect(screen.getByText("WELKOM BIJ")).toBeInTheDocument();
    expect(screen.getByText("ORATO")).toBeInTheDocument();
    expect(screen.getByText("VOOR JOU")).toBeInTheDocument();
    expectLinkHref("COACHING", "/Onderwerpen/Coaching");
    expectLinkHref("SUPERVISIE", "/Onderwerpen/Supervisie");
    expectLinkHref("PRESENTEREN", "/Onderwerpen/Presenteren");
    expectLinkHref("COMMUNICEREN", "/Contact");
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
