export const ENQUIRY_STATUSES = [
  "Not Contacted",
  "Called",
  "Interested",
  "Not Interested",
  "Follow Up",
  "Admitted",
] as const;

export type EnquiryStatus = (typeof ENQUIRY_STATUSES)[number];
export type EnquirySource = "home" | "contact";

export type EnquiryListItem = {
  id: string;
  source: EnquirySource;
  name: string;
  contact: string;
  email: string;
  status: EnquiryStatus;
  first_contacted_at: string | null;
  next_follow_up_at: string | null;
  last_follow_up_at: string | null;
  created_at: string;
  updated_at: string;
};

export type EnquiryDetails = EnquiryListItem & {
  submitted_data: Record<string, unknown>;
};

export type FollowUp = {
  id: string;
  enquiry_id: string;
  status: EnquiryStatus;
  remarks: string;
  next_follow_up_date: string | null;
  next_follow_up_at: string | null;
  created_at: string;
};

const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/$/, "");
const useApiAuth = import.meta.env.VITE_USE_API_AUTH === "true";
const staticAdminEmail = (import.meta.env.VITE_ADMIN_EMAIL || "admin@sjrpshbr.sjres.edu.in").trim().toLowerCase();
const staticAdminPasswordHash =
  import.meta.env.VITE_ADMIN_PASSWORD_SHA256 ||
  "ecccf750d214241b33c4656db36e1476a8a56c6e4478d33645dc57190b871e04";
const adminSessionKey = "sjr_admin_user";
const staticDataKey = "sjr_admin_static_data";

function apiUrl(path: string) {
  return `${apiBaseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

async function sha256(value: string) {
  const bytes = new TextEncoder().encode(value);
  const hashBuffer = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function readStoredAdmin(): AdminUser | null {
  const stored = window.sessionStorage.getItem(adminSessionKey) || window.localStorage.getItem(adminSessionKey);
  if (!stored) return null;

  try {
    const user = JSON.parse(stored) as AdminUser;
    return typeof user.email === "string" ? user : null;
  } catch {
    window.sessionStorage.removeItem(adminSessionKey);
    window.localStorage.removeItem(adminSessionKey);
    return null;
  }
}

function storeAdmin(user: AdminUser) {
  window.sessionStorage.setItem(adminSessionKey, JSON.stringify(user));
}

function clearStoredAdmin() {
  window.sessionStorage.removeItem(adminSessionKey);
  window.localStorage.removeItem(adminSessionKey);
}

type StaticData = {
  enquiries: EnquiryDetails[];
  followUps: FollowUp[];
  content: Record<AdminContentType, AdminContentItem[]>;
};

const emptyStaticData = (): StaticData => ({
  enquiries: [],
  followUps: [],
  content: {
    news: [],
    event: [],
    gallery: [],
    video: [],
    testimonial: [],
    teacher: [],
  },
});

function createId() {
  return crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function readStaticData(): StaticData {
  const empty = emptyStaticData();
  const stored = window.localStorage.getItem(staticDataKey);
  if (!stored) return empty;

  try {
    const parsed = JSON.parse(stored) as Partial<StaticData>;
    return {
      enquiries: Array.isArray(parsed.enquiries) ? parsed.enquiries : [],
      followUps: Array.isArray(parsed.followUps) ? parsed.followUps : [],
      content: {
        news: Array.isArray(parsed.content?.news) ? parsed.content.news : [],
        event: Array.isArray(parsed.content?.event) ? parsed.content.event : [],
        gallery: Array.isArray(parsed.content?.gallery) ? parsed.content.gallery : [],
        video: Array.isArray(parsed.content?.video) ? parsed.content.video : [],
        testimonial: Array.isArray(parsed.content?.testimonial) ? parsed.content.testimonial : [],
        teacher: Array.isArray(parsed.content?.teacher) ? parsed.content.teacher : [],
      },
    };
  } catch {
    window.localStorage.removeItem(staticDataKey);
    return empty;
  }
}

function writeStaticData(data: StaticData) {
  window.localStorage.setItem(staticDataKey, JSON.stringify(data));
}

function requireStaticAdmin() {
  if (!readStoredAdmin()) throw new Error("Admin login required.");
}

function visibleContent(items: AdminContentItem[], limit: number) {
  return items
    .filter((item) => item.is_visible)
    .sort((a, b) => {
      if (a.type === "news" || a.type === "event") {
        return new Date(b.published_at || b.created_at).getTime() - new Date(a.published_at || a.created_at).getTime();
      }
      return (a.display_order || 0) - (b.display_order || 0) || new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    })
    .slice(0, limit);
}

function emptyStats() {
  const data = readStaticData();
  const contentCounts = Object.entries(data.content).map(([type, items]) => ({
    type: type as AdminContentType,
    total: items.length,
    visible: items.filter((item) => item.is_visible).length,
  }));

  return {
    summary: {
      total: data.enquiries.length,
      new: data.enquiries.filter((item) => item.status === "Not Contacted").length,
      contacted: data.enquiries.filter((item) => item.status === "Called").length,
      follow_up: data.enquiries.filter((item) => item.status === "Follow Up").length,
      interested: data.enquiries.filter((item) => item.status === "Interested").length,
      converted: data.enquiries.filter((item) => item.status === "Admitted").length,
      closed: data.enquiries.filter((item) => item.status === "Not Interested").length,
    },
    byStatus: ENQUIRY_STATUSES.map((status) => ({ status, count: data.enquiries.filter((item) => item.status === status).length })),
    bySource: (["home", "contact"] as EnquirySource[]).map((source) => ({ source, count: data.enquiries.filter((item) => item.source === source).length })),
    recent: data.enquiries.slice().sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()).slice(0, 6),
    followUps: data.followUps
      .slice()
      .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
      .slice(0, 6)
      .map((followUp) => {
        const enquiry = data.enquiries.find((item) => item.id === followUp.enquiry_id);
        return { ...followUp, name: enquiry?.name || "", source: enquiry?.source || "home" };
      }),
    contentCounts,
  };
}

function normalizeContentItem(type: AdminContentType, payload: AdminContentPayload, existing?: AdminContentItem): AdminContentItem {
  const now = new Date().toISOString();
  return {
    id: existing?.id || createId(),
    type,
    title: payload.title || existing?.title || "",
    subtitle: payload.subtitle ?? existing?.subtitle ?? "",
    body: payload.body ?? existing?.body ?? "",
    image_url: payload.image_url ?? existing?.image_url ?? "",
    category: payload.category ?? existing?.category ?? "",
    published_at: payload.published_at || existing?.published_at || null,
    is_visible: payload.is_visible ?? existing?.is_visible ?? true,
    display_order: payload.display_order ?? existing?.display_order ?? 0,
    fields: payload.fields ?? existing?.fields ?? {},
    created_at: existing?.created_at || now,
    updated_at: now,
  };
}

async function request<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(apiUrl(url), {
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
    ...init,
  });

  if (!response.ok) {
    const contentType = response.headers.get("content-type") || "";
    const body = contentType.includes("application/json") ? await response.json().catch(() => ({})) : {};
    throw new Error(body.error || `Request failed with status ${response.status}.`);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json();
}

export type AdminUser = {
  email: string;
};

export type AdminContentType = "news" | "event" | "gallery" | "video" | "testimonial" | "teacher";

export type AdminContentItem = {
  id: string;
  type: AdminContentType;
  title: string;
  subtitle: string;
  body: string;
  image_url: string;
  category: string;
  published_at: string | null;
  is_visible: boolean;
  display_order: number;
  fields: Record<string, unknown>;
  created_at: string;
  updated_at: string;
};

export type AdminContentPayload = {
  title: string;
  subtitle?: string;
  body?: string;
  image_url?: string;
  category?: string;
  published_at?: string;
  is_visible?: boolean;
  display_order?: number;
  fields?: Record<string, unknown>;
};

export function loginAdmin(email: string, password: string) {
  if (!useApiAuth) {
    return sha256(password).then((passwordHash) => {
      const normalizedEmail = email.trim().toLowerCase();
      if (normalizedEmail !== staticAdminEmail || passwordHash !== staticAdminPasswordHash) {
        throw new Error("Invalid admin credentials.");
      }

      const user = { email: staticAdminEmail };
      storeAdmin(user);
      return { user };
    });
  }

  return request<{ user: AdminUser }>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

export function getCurrentAdmin() {
  const storedAdmin = readStoredAdmin();
  if (storedAdmin) return Promise.resolve({ user: storedAdmin });
  if (!useApiAuth) return Promise.reject(new Error("Admin login required."));

  return request<{ user: AdminUser }>("/api/auth/me");
}

export function logoutAdmin() {
  clearStoredAdmin();
  if (!useApiAuth) return Promise.resolve();

  return request<void>("/api/auth/logout", {
    method: "POST",
  });
}

export function submitEnquiry(source: EnquirySource, fields: Record<string, string>) {
  if (!useApiAuth) {
    const now = new Date().toISOString();
    const enquiry: EnquiryDetails = {
      id: createId(),
      source,
      name: fields.name || "",
      contact: fields.contact || fields.phone || fields.mobile || fields.mobileNumber || "",
      email: fields.email || "",
      status: "Not Contacted",
      first_contacted_at: null,
      next_follow_up_at: null,
      last_follow_up_at: null,
      submitted_data: fields,
      created_at: now,
      updated_at: now,
    };
    const data = readStaticData();
    data.enquiries.unshift(enquiry);
    writeStaticData(data);
    return Promise.resolve({ enquiry });
  }

  return request<{ enquiry: EnquiryDetails }>("/api/enquiries", {
    method: "POST",
    body: JSON.stringify({ source, fields }),
  });
}

export function getStats() {
  if (!useApiAuth) {
    requireStaticAdmin();
    return Promise.resolve(emptyStats());
  }

  return request<{
    summary: Record<string, number>;
    byStatus: { status: EnquiryStatus; count: number }[];
    bySource: { source: EnquirySource; count: number }[];
    recent: EnquiryListItem[];
    followUps: (FollowUp & { name: string; source: EnquirySource })[];
    contentCounts: { type: AdminContentType; total: number; visible: number }[];
  }>("/api/admin/stats");
}

export function getEnquiries(params: URLSearchParams) {
  if (!useApiAuth) {
    requireStaticAdmin();
    const data = readStaticData();
    const source = params.get("source") as EnquirySource | "all" | null;
    const status = params.get("status") as EnquiryStatus | "all" | null;
    const search = (params.get("search") || "").toLowerCase();
    const sort = params.get("sort") || "latest";
    const page = Math.max(1, Number(params.get("page") || 1));
    const pageSize = Math.min(100, Math.max(5, Number(params.get("pageSize") || 10)));
    const filtered = data.enquiries
      .filter((item) => !source || source === "all" || item.source === source)
      .filter((item) => !status || status === "all" || item.status === status)
      .filter((item) => !search || [item.name, item.contact, item.email].join(" ").toLowerCase().includes(search))
      .sort((a, b) => {
        if (sort === "oldest") return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
        if (sort === "name") return a.name.localeCompare(b.name);
        if (sort === "status") return a.status.localeCompare(b.status) || new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      });
    const offset = (page - 1) * pageSize;
    return Promise.resolve({
      enquiries: filtered.slice(offset, offset + pageSize),
      total: filtered.length,
      page,
      pageSize,
      pages: Math.max(1, Math.ceil(filtered.length / pageSize)),
    });
  }

  return request<{
    enquiries: EnquiryListItem[];
    total: number;
    page: number;
    pageSize: number;
    pages: number;
  }>(`/api/admin/enquiries?${params.toString()}`);
}

export function getEnquiry(id: string) {
  if (!useApiAuth) {
    requireStaticAdmin();
    const data = readStaticData();
    const enquiry = data.enquiries.find((item) => item.id === id);
    if (!enquiry) return Promise.reject(new Error("Enquiry not found."));
    return Promise.resolve({
      enquiry,
      followUps: data.followUps.filter((item) => item.enquiry_id === id).sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()),
    });
  }

  return request<{ enquiry: EnquiryDetails; followUps: FollowUp[] }>(`/api/admin/enquiries/${id}`);
}

export function updateEnquiryStatus(id: string, status: EnquiryStatus) {
  if (!useApiAuth) {
    requireStaticAdmin();
    const data = readStaticData();
    const enquiry = data.enquiries.find((item) => item.id === id);
    if (!enquiry) return Promise.reject(new Error("Enquiry not found."));
    enquiry.status = status;
    enquiry.updated_at = new Date().toISOString();
    if (status !== "Not Contacted" && !enquiry.first_contacted_at) enquiry.first_contacted_at = enquiry.updated_at;
    writeStaticData(data);
    return Promise.resolve({ enquiry });
  }

  return request<{ enquiry: EnquiryDetails }>(`/api/admin/enquiries/${id}/status`, {
    method: "PATCH",
    body: JSON.stringify({ status }),
  });
}

export function addFollowUp(id: string, payload: { status: EnquiryStatus; remarks: string; firstContactedAt: string; nextFollowUpAt: string }) {
  if (!useApiAuth) {
    requireStaticAdmin();
    const data = readStaticData();
    const enquiry = data.enquiries.find((item) => item.id === id);
    if (!enquiry) return Promise.reject(new Error("Enquiry not found."));
    const now = new Date().toISOString();
    const followUp: FollowUp = {
      id: createId(),
      enquiry_id: id,
      status: payload.status,
      remarks: payload.remarks || "Follow-up updated.",
      next_follow_up_date: payload.nextFollowUpAt ? payload.nextFollowUpAt.slice(0, 10) : null,
      next_follow_up_at: payload.nextFollowUpAt || null,
      created_at: now,
    };
    enquiry.status = payload.status;
    enquiry.first_contacted_at = payload.firstContactedAt || enquiry.first_contacted_at || now;
    enquiry.next_follow_up_at = payload.nextFollowUpAt || null;
    enquiry.last_follow_up_at = now;
    enquiry.updated_at = now;
    data.followUps.push(followUp);
    writeStaticData(data);
    return Promise.resolve({ enquiry, followUp });
  }

  return request<{ enquiry: EnquiryDetails; followUp: FollowUp }>(`/api/admin/enquiries/${id}/follow-ups`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function deleteEnquiry(id: string) {
  if (!useApiAuth) {
    requireStaticAdmin();
    const data = readStaticData();
    data.enquiries = data.enquiries.filter((item) => item.id !== id);
    data.followUps = data.followUps.filter((item) => item.enquiry_id !== id);
    writeStaticData(data);
    return Promise.resolve();
  }

  return request<void>(`/api/admin/enquiries/${id}`, {
    method: "DELETE",
  });
}

export function getContent(type: AdminContentType) {
  if (!useApiAuth) {
    requireStaticAdmin();
    return Promise.resolve({ items: readStaticData().content[type] });
  }

  return request<{ items: AdminContentItem[] }>(`/api/admin/content/${type}`);
}

export function getPublicContent(type: AdminContentType, limit = 100) {
  if (!useApiAuth) {
    return Promise.resolve({ items: visibleContent(readStaticData().content[type], limit) });
  }

  return request<{ items: AdminContentItem[] }>(`/api/content/${type}?limit=${limit}`);
}

export function createContent(type: AdminContentType, payload: AdminContentPayload) {
  if (!useApiAuth) {
    requireStaticAdmin();
    const data = readStaticData();
    const item = normalizeContentItem(type, payload);
    data.content[type] = [item, ...data.content[type]];
    writeStaticData(data);
    return Promise.resolve({ item });
  }

  return request<{ item: AdminContentItem }>(`/api/admin/content/${type}`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function updateContent(type: AdminContentType, id: string, payload: AdminContentPayload) {
  if (!useApiAuth) {
    requireStaticAdmin();
    const data = readStaticData();
    const existing = data.content[type].find((item) => item.id === id);
    if (!existing) return Promise.reject(new Error("Content item not found."));
    const item = normalizeContentItem(type, payload, existing);
    data.content[type] = data.content[type].map((candidate) => (candidate.id === id ? item : candidate));
    writeStaticData(data);
    return Promise.resolve({ item });
  }

  return request<{ item: AdminContentItem }>(`/api/admin/content/${type}/${id}`, {
    method: "PATCH",
    body: JSON.stringify(payload),
  });
}

export function deleteContent(type: AdminContentType, id: string) {
  if (!useApiAuth) {
    requireStaticAdmin();
    const data = readStaticData();
    data.content[type] = data.content[type].filter((item) => item.id !== id);
    writeStaticData(data);
    return Promise.resolve();
  }

  return request<void>(`/api/admin/content/${type}/${id}`, {
    method: "DELETE",
  });
}
