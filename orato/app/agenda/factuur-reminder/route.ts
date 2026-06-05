const dutchMonths: Record<string, number> = {
  januari: 0,
  februari: 1,
  maart: 2,
  april: 3,
  mei: 4,
  juni: 5,
  juli: 6,
  augustus: 7,
  september: 8,
  oktober: 9,
  november: 10,
  december: 11,
};

const parseTrainingDate = (value: string) => {
  const match = value.match(/\b(\d{1,2})\s+([a-z]+)\s+(\d{4})\b/i);

  if (!match) {
    return null;
  }

  const [, day, monthName, year] = match;
  const month = dutchMonths[monthName.toLowerCase()];

  if (month === undefined) {
    return null;
  }

  return new Date(Date.UTC(Number(year), month, Number(day)));
};

const addUtcDays = (date: Date, days: number) =>
  new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + days));

const formatCalendarDate = (date: Date) =>
  `${date.getUTCFullYear()}${String(date.getUTCMonth() + 1).padStart(2, "0")}${String(date.getUTCDate()).padStart(2, "0")}`;

const escapeIcsValue = (value: string) =>
  value.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\r?\n/g, "\\n");

export const GET = (request: Request) => {
  const url = new URL(request.url);
  const trainingDateValue = url.searchParams.get("datum") ?? "";
  const trainingDate = parseTrainingDate(trainingDateValue);

  if (!trainingDate) {
    return new Response("Ongeldige datum", { status: 400 });
  }

  const reminderDate = addUtcDays(trainingDate, -7);
  const reminderEndDate = addUtcDays(reminderDate, 1);
  const now = new Date();
  const timestamp = `${formatCalendarDate(now)}T${String(now.getUTCHours()).padStart(2, "0")}${String(now.getUTCMinutes()).padStart(2, "0")}${String(now.getUTCSeconds()).padStart(2, "0")}Z`;
  const eventDate = formatCalendarDate(reminderDate);
  const eventEndDate = formatCalendarDate(reminderEndDate);
  const summary = "Factuur sturen voor Orato inschrijving";
  const description = `Stuur de factuur voor de inschrijving op ${trainingDateValue}.`;
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Orato//Factuur Reminder//NL",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:factuur-reminder-${eventDate}@orato.nl`,
    `DTSTAMP:${timestamp}`,
    `DTSTART;VALUE=DATE:${eventDate}`,
    `DTEND;VALUE=DATE:${eventEndDate}`,
    `SUMMARY:${escapeIcsValue(summary)}`,
    `DESCRIPTION:${escapeIcsValue(description)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  return new Response(`${ics}\r\n`, {
    headers: {
      "Content-Disposition": `attachment; filename="orato-factuur-reminder-${eventDate}.ics"`,
      "Content-Type": "text/calendar; charset=utf-8",
    },
  });
};
