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

vi.mock("./InschrijfForm", () => ({ default: () => <section data-testid="inschrijf-form" /> }));
vi.mock("../components/Navigation/Footer", () => ({ default: () => <footer data-testid="footer" /> }));

import InschrijfPage from "./page";

describe("registration route smoke", () => {
  it("renders the registration route shell and key practical details", () => {
    render(<InschrijfPage />);

    expect(
      screen.getByRole("heading", { name: "Authentiek presenteren met Relational Presence" }),
    ).toBeInTheDocument();
    expect(screen.getByTestId("inschrijf-form")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Praktisch" })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "ardie@orato.info" })[0]).toHaveAttribute(
      "href",
      "mailto:ardie@orato.info",
    );
    expect(screen.getByRole("link", { name: "+31 6 5108 8688" })).toHaveAttribute("href", "tel:+31651088688");
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
