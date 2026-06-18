import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/font/google", () => ({
  Noto_Serif_Display: () => ({ className: "mock-noto-serif-display" }),
  Tangerine: () => ({ className: "mock-tangerine" }),
}));

vi.mock("next/image", () => ({
  default: ({ fill, priority, ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean; priority?: boolean }) =>
    React.createElement("img", props),
}));

vi.mock("./contactForm", () => ({ default: () => <section data-testid="contact-form" /> }));
vi.mock("../components/Navigation/Footer", () => ({ default: () => <footer data-testid="footer" /> }));

import ContactPage from "./page";

describe("contact route smoke", () => {
  it("renders the contact route shell and important contact links", () => {
    render(<ContactPage />);

    expect(screen.getByRole("heading", { name: "Contact" })).toBeInTheDocument();
    expect(screen.getByTestId("contact-form")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "+31 40 284 29 01" })).toHaveAttribute("href", "tel:+31402842901");
    expect(screen.getByRole("link", { name: "+31 6 510 88 6 88" })).toHaveAttribute("href", "tel:+31651088688");
    expect(screen.getAllByRole("link", { name: "ardie@orato.info" })[0]).toHaveAttribute(
      "href",
      "mailto:ardie@orato.info",
    );
    expect(screen.getByRole("link", { name: "www.orato.nl" })).toHaveAttribute("href", "/");
    expect(screen.getByTitle("Locatie Orato in Nuenen")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
