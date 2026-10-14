import type { AdminContentItem, AdminContentPayload } from "@/lib/api";
import { formatNewsDate } from "@/lib/newsContent";

export type EventDisplayItem = {
  key: string;
  source: "database" | "homepage";
  adminItem?: AdminContentItem;
  title: string;
  date: string;
  dateValue: string;
  isVisible: boolean;
  displayOrder: number;
};

const homepageEvents: EventDisplayItem[] = [
  { key: "homepage-parent-teacher-meeting", source: "homepage", title: "Parent-Teacher Meeting", date: "April 20, 2026", dateValue: "2026-04-20", isVisible: true, displayOrder: 1 },
  { key: "homepage-inter-house-quiz-competition", source: "homepage", title: "Inter-House Quiz Competition", date: "April 25, 2026", dateValue: "2026-04-25", isVisible: true, displayOrder: 2 },
  { key: "homepage-yoga-meditation-workshop", source: "homepage", title: "Yoga & Meditation Workshop", date: "May 5, 2026", dateValue: "2026-05-05", isVisible: true, displayOrder: 3 },
  { key: "homepage-annual-day-celebrations", source: "homepage", title: "Annual Day Celebrations", date: "May 15, 2026", dateValue: "2026-05-15", isVisible: true, displayOrder: 4 },
  { key: "homepage-science-olympiad-finals", source: "homepage", title: "Science Olympiad Finals", date: "May 22, 2026", dateValue: "2026-05-22", isVisible: true, displayOrder: 5 },
  { key: "homepage-summer-reading-program", source: "homepage", title: "Summer Reading Program", date: "June 1, 2026", dateValue: "2026-06-01", isVisible: true, displayOrder: 6 },
  { key: "homepage-new-academic-session-begins", source: "homepage", title: "New Academic Session Begins", date: "June 10, 2026", dateValue: "2026-06-10", isVisible: true, displayOrder: 7 },
  { key: "homepage-investiture-ceremony", source: "homepage", title: "Investiture Ceremony", date: "June 18, 2026", dateValue: "2026-06-18", isVisible: true, displayOrder: 8 },
];

const monthNumbers: Record<string, string> = {
  jan: "01",
  january: "01",
  feb: "02",
  february: "02",
  mar: "03",
  march: "03",
  apr: "04",
  april: "04",
  may: "05",
  jun: "06",
  june: "06",
  jul: "07",
  july: "07",
  aug: "08",
  august: "08",
  sep: "09",
  sept: "09",
  september: "09",
  oct: "10",
  october: "10",
  nov: "11",
  november: "11",
  dec: "12",
  december: "12",
};

export const eventDateLabelToISO = (label: string) => {
  const clean = label.trim().replace(/[–—]/g, "-").replace(/,/g, "");
  const rangeMatch = clean.match(/(?:\d{1,2}\s*-\s*)?(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})/);
  if (rangeMatch) {
    const [, day, month, year] = rangeMatch;
    const monthNumber = monthNumbers[month.toLowerCase()];
    if (monthNumber) return `${year}-${monthNumber}-${day.padStart(2, "0")}`;
  }

  const parsed = new Date(clean);
  if (!Number.isNaN(parsed.getTime())) return parsed.toISOString().slice(0, 10);
  return "";
};

const databaseEventToDisplay = (item: AdminContentItem): EventDisplayItem => ({
  key: `database-${item.id}`,
  source: "database",
  adminItem: item,
  title: item.title,
  date: typeof item.fields?.dateLabel === "string" && item.fields.dateLabel ? item.fields.dateLabel : formatNewsDate(item.published_at),
  dateValue: item.published_at || item.created_at,
  isVisible: item.is_visible,
  displayOrder: item.display_order || 0,
});

export const mergeEventItems = (adminEvents: AdminContentItem[] = []) => {
  const byTitle = new Map<string, EventDisplayItem>();
  homepageEvents.forEach((item) => byTitle.set(item.title.toLowerCase(), item));
  adminEvents.forEach((item) => {
    const displayItem = databaseEventToDisplay(item);
    byTitle.set(displayItem.title.toLowerCase(), displayItem);
  });
  return Array.from(byTitle.values()).sort(
    (a, b) => new Date(b.dateValue).getTime() - new Date(a.dateValue).getTime()
  );
};

export const eventDisplayToPayload = (item: EventDisplayItem): AdminContentPayload => ({
  title: item.title,
  subtitle: "",
  body: "",
  image_url: "",
  category: "",
  published_at: item.dateValue,
  is_visible: item.isVisible,
  display_order: item.displayOrder,
  fields: {
    ...(item.adminItem?.fields || {}),
    dateLabel: item.date,
  },
});
