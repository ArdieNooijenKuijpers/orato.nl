import { websiteInhoud } from "../content/websiteInhoud";

// De data worden centraal beheerd in app/content/websiteInhoud.ts.
export const inschrijfDataOptions = websiteInhoud.presenteren.speakingCircle.data;

const dutchMonthIndexes: Record<string, number> = {
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

export const parseInschrijfDate = (value: string) => {
  const match = value.match(/\b(\d{1,2})\s+([a-z]+)\s+(\d{4})\b/i);

  if (!match) {
    return null;
  }

  const [, dayValue, monthValue, yearValue] = match;
  const monthIndex = dutchMonthIndexes[monthValue.toLowerCase()];

  if (monthIndex === undefined) {
    return null;
  }

  return new Date(Number(yearValue), monthIndex, Number(dayValue));
};

export const isInschrijfDateInPast = (value: string, now = new Date()) => {
  const date = parseInschrijfDate(value);

  if (!date) {
    return false;
  }

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  return date < today;
};
