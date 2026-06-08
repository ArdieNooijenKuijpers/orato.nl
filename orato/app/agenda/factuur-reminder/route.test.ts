import { describe, expect, it } from "vitest";
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
});
