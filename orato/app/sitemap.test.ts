import { describe, expect, it, vi } from "vitest";
import sitemap from "./sitemap";

describe("sitemap", () => {
  it("lists every public route with stable absolute URLs", () => {
    vi.setSystemTime(new Date("2026-01-02T03:04:05.000Z"));

    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);

    expect(urls).toEqual([
      "https://orato.nl/",
      "https://orato.nl/Contact",
      "https://orato.nl/Info/Ardie",
      "https://orato.nl/Info/PrivacyVerklaring",
      "https://orato.nl/Info/AlgemeneVoorwaarden",
      "https://orato.nl/Onderwerpen/Coaching",
      "https://orato.nl/Onderwerpen/Supervisie",
      "https://orato.nl/Onderwerpen/Presenteren",
      "https://orato.nl/inschrijfformulier",
    ]);
    expect(entries).toContainEqual(
      expect.objectContaining({
        url: "https://orato.nl/",
        changeFrequency: "weekly",
        priority: 1,
        lastModified: new Date("2026-01-02T03:04:05.000Z"),
      }),
    );
  });
});
