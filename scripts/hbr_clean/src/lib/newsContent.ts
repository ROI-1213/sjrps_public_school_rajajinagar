import { newsEvents, sortedNewsEvents, type NewsEvent } from "@/data/newsEvents";
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

const frontendNewsToDisplay = (item: NewsEvent): NewsDisplayItem => ({
  key: `frontend-${item.slug}`,
  source: "frontend",
  slug: item.slug,
  title: item.title,
  date: item.date,
  dateValue: item.sortDate,
  summary: item.summary,
  body: item.body,
  image: item.image,
  gallery: item.gallery.map((image) => image.src),
  href: `/news/${item.slug}`,
  isVisible: true,
});

export const mergeNewsItems = (adminNews: AdminContentItem[] = []) => {
  const bySlug = new Map<string, NewsDisplayItem>();

  sortedNewsEvents.forEach((item) => bySlug.set(item.slug, frontendNewsToDisplay(item)));
  adminNews.forEach((item) => {
    const displayItem = adminNewsToDisplay(item);
    bySlug.set(displayItem.slug || item.id, displayItem);
  });

  return Array.from(bySlug.values()).sort(
    (a, b) => new Date(b.dateValue).getTime() - new Date(a.dateValue).getTime()
  );
};

export const findNewsItem = (adminNews: AdminContentItem[], slug?: string) => {
  if (!slug) return undefined;
  const adminItem = adminNews.find((item) => item.id === slug || getAdminNewsSlug(item) === slug);
  if (adminItem) return adminNewsToDisplay(adminItem);
  const frontendItem = newsEvents.find((item) => item.slug === slug);
  return frontendItem ? frontendNewsToDisplay(frontendItem) : undefined;
};

export const newsDisplayToPayload = (item: NewsDisplayItem): AdminContentPayload => ({
  title: item.title,
  subtitle: item.summary,
  body: item.body.join("\n\n"),
  image_url: item.image === "/placeholder.svg" ? "" : item.image,
  category: item.adminItem?.category || "",
  published_at: item.adminItem?.published_at || item.dateValue,
  is_visible: item.isVisible,
  display_order: item.adminItem?.display_order || 0,
  fields: {
    ...(item.adminItem?.fields || {}),
    slug: item.slug,
    gallery: item.gallery.filter((src) => src && src !== item.image && src !== "/placeholder.svg"),
  },
});
