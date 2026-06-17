import { describe, expect, it, vi } from "vitest";
import { GET } from "./route";

describe("factuur reminder agenda route", () => {
  it("returns an ICS file for one week before the selected training date", async () => {
    const response = GET(
      new Request(
        "https://orato.nl/agenda/factuur-reminder?datum=Vrijdag%2026%20juni%202026%20%7C%209.30%20-%2017.30%20u",
      ),
    );
    const ics = await response.text();

    expect(response.status).toBe(200);
    expect(response.headers.get("Content-Type")).toBe("text/calendar; charset=utf-8");
    expect(response.headers.get("Content-Disposition")).toContain("orato-factuur-reminder-20260619.ics");
    expect(ics).toContain("BEGIN:VCALENDAR");
    expect(ics).toContain("DTSTART;VALUE=DATE:20260619");
    expect(ics).toContain("DTEND;VALUE=DATE:20260620");
    expect(ics).toContain("SUMMARY:Factuur sturen voor Orato inschrijving");
  });

  it("rejects missing or unknown dates without creating an ICS file", async () => {
    const missingDateResponse = GET(new Request("https://orato.nl/agenda/factuur-reminder"));
    const unknownMonthResponse = GET(
      new Request("https://orato.nl/agenda/factuur-reminder?datum=2%20foo%202027"),
    );

    await expect(missingDateResponse.text()).resolves.toBe("Ongeldige datum");
    await expect(unknownMonthResponse.text()).resolves.toBe("Ongeldige datum");
    expect(missingDateResponse.status).toBe(400);
    expect(unknownMonthResponse.status).toBe(400);
  });

  it("escapes ICS description values and ends the file with CRLF", async () => {
    vi.setSystemTime(new Date("2026-06-08T12:13:14.000Z"));

    const response = GET(
      new Request(
        "https://orato.nl/agenda/factuur-reminder?datum=Vrijdag%2026%20juni%202026%20%7C%20regel%201%2C%20semi%3B%20slash%5C%0Aregel%202",
      ),
    );
    const ics = await response.text();

    expect(ics).toContain("METHOD:PUBLISH");
    expect(ics).toContain("UID:factuur-reminder-20260619@orato.nl");
    expect(ics).toContain("DTSTAMP:20260608T121314Z");
    expect(ics).toContain(
      "DESCRIPTION:Stuur de factuur voor de inschrijving op Vrijdag 26 juni 2026 | regel 1\\, semi\\; slash\\\\\\nregel 2.",
    );
    expect(ics.endsWith("\r\n")).toBe(true);
  });

  it("handles the December to January reminder boundary", async () => {
    const response = GET(
      new Request("https://orato.nl/agenda/factuur-reminder?datum=2%20januari%202027"),
    );
    const ics = await response.text();

    expect(response.status).toBe(200);
    expect(response.headers.get("Content-Disposition")).toContain("orato-factuur-reminder-20261226.ics");
    expect(ics).toContain("DTSTART;VALUE=DATE:20261226");
    expect(ics).toContain("DTEND;VALUE=DATE:20261227");
  });
});
