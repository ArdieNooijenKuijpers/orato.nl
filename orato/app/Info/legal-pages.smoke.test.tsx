import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/font/google", () => ({
  Noto_Serif_Display: () => ({ className: "mock-noto-serif-display" }),
}));

vi.mock("../components/Navigation/Footer", () => ({ default: () => <footer data-testid="footer" /> }));

import AlgemeneVoorwaardenPage, { metadata as algemeneMetadata } from "./AlgemeneVoorwaarden/page";
import PrivacyVerklaringPage, { metadata as privacyMetadata } from "./PrivacyVerklaring/page";

describe("legal information routes", () => {
  it("renders the privacy page with download, contact, and authority links", () => {
    render(<PrivacyVerklaringPage />);

    expect(screen.getByRole("heading", { name: "Privacyverklaring" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Download PDF" })).toHaveAttribute(
      "href",
      "/downloads/Privacyverklaring%20ORATO%202025%20.pdf",
    );
    expect(screen.getByRole("link", { name: "Download PDF" })).toHaveAttribute("download");
    expect(screen.getByRole("link", { name: "Contact opnemen" })).toHaveAttribute("href", "/Contact");
    expect(screen.getAllByRole("link", { name: "ardie@orato.info" })[0]).toHaveAttribute(
      "href",
      "mailto:ardie@orato.info",
    );
    expect(screen.getByTestId("footer")).toBeInTheDocument();
    expect(privacyMetadata.title).toBe("Orato - Privacyverklaring");
  });

  it("renders the terms page with download, privacy, and contact links", () => {
    render(<AlgemeneVoorwaardenPage />);

    expect(screen.getByRole("heading", { name: "Algemene voorwaarden" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Download PDF" })).toHaveAttribute(
      "href",
      "/downloads/Algemene%20voorwaarden%20ORATO%202025%20.pdf",
    );
    expect(screen.getByRole("link", { name: "Download PDF" })).toHaveAttribute("download");
    expect(screen.getAllByRole("link", { name: "Privacyverklaring" })[0]).toHaveAttribute(
      "href",
      "/Info/PrivacyVerklaring",
    );
    expect(screen.getByRole("link", { name: "Contact opnemen" })).toHaveAttribute("href", "/Contact");
    expect(screen.getByTestId("footer")).toBeInTheDocument();
    expect(algemeneMetadata.title).toBe("Orato - Algemene Voorwaarden");
  });
});
