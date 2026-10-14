import { schoolEvents, type SchoolEvent } from "@/data/events";
import type { AdminContentItem, AdminContentPayload } from "@/lib/api";

export type NewsDisplayItem = {
  key: string;
  source: "database" | "frontend";
  adminItem?: AdminContentItem;
  slug: string;
  title: string;
  date: string;
  dateValue: string;
  summary: string;
  body: string[];
  image: string;
  gallery: string[];
  href: string;
  isVisible: boolean;
  updatedAt?: string;
};

export const formatNewsDate = (value?: string | null) =>
  value ? new Intl.DateTimeFormat("en-IN", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(value)) : "";

export const createNewsSlug = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const getAdminNewsSlug = (item: AdminContentItem) => {
  const fieldSlug = typeof item.fields?.slug === "string" ? item.fields.slug : "";
  return fieldSlug || createNewsSlug(item.title) || item.id;
};

const adminNewsToDisplay = (item: AdminContentItem): NewsDisplayItem => {
  const slug = getAdminNewsSlug(item);
  const gallery = [item.image_url, ...((item.fields?.gallery as string[] | undefined) || [])]
    .filter(Boolean)
    .map(String);

  return {
    key: `database-${item.id}`,
    source: "database",
    adminItem: item,
    slug,
    title: item.title,
    date: formatNewsDate(item.published_at),
    dateValue: item.published_at || item.created_at,
    summary: item.subtitle || item.body || "",
    body: (item.body || item.subtitle || "").split(/\n+/).map((part) => part.trim()).filter(Boolean),
    image: item.image_url || "/placeholder.svg",
    gallery: gallery.length ? gallery : ["/placeholder.svg"],
    href: `/news/${slug || item.id}`,
    isVisible: item.is_visible,
    updatedAt: item.updated_at,
  };
};

const schoolEventToDisplay = (item: SchoolEvent): NewsDisplayItem => ({
  key: `frontend-${item.id}`,
  source: "frontend",
  slug: item.id,
  title: item.title,
  date: item.date,
  dateValue: item.academicYear,
  summary: item.summary,
  body: [item.description],
  image: item.featuredImage,
  gallery: item.galleryImages,
  href: `/news/${item.id}`,
  isVisible: true,
});

export const mergeNewsItems = (adminNews: AdminContentItem[] = []) => {
  const bySlug = new Map<string, NewsDisplayItem>();

  schoolEvents.forEach((item) => bySlug.set(item.id, schoolEventToDisplay(item)));
  adminNews.forEach((item) => {
    const displayItem = adminNewsToDisplay(item);
    bySlug.set(displayItem.slug || item.id, displayItem);
  });

  return Array.from(bySlug.values());
};

export const findNewsItem = (adminNews: AdminContentItem[], slug?: string) => {
  if (!slug) return undefined;
  const adminItem = adminNews.find((item) => item.id === slug || getAdminNewsSlug(item) === slug);
  if (adminItem) return adminNewsToDisplay(adminItem);
  const frontendItem = schoolEvents.find((item) => item.id === slug);
  return frontendItem ? schoolEventToDisplay(frontendItem) : undefined;
};

export const newsDisplayToPayload = (item: NewsDisplayItem): AdminContentPayload => ({
  title: item.title,
  subtitle: item.summary,
  body: item.body.join("\n\n"),
  image_url: item.image,
  is_visible: item.isVisible,
  fields: {
    slug: item.slug,
    gallery: item.gallery,
  },
});
