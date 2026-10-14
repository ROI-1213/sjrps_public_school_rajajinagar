import.meta.env = {"BASE_URL": "/", "DEV": true, "MODE": "development", "PROD": false, "SSR": false};export const ENQUIRY_STATUSES = [
    "Not Contacted",
    "Called",
    "Interested",
    "Not Interested",
    "Follow Up",
    "Admitted"
];
const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/$/, "");
const useApiAuth = import.meta.env.VITE_USE_API_AUTH === "true";
const staticAdminEmail = (import.meta.env.VITE_ADMIN_EMAIL || "admin@sjrpshbr.sjres.edu.in").trim().toLowerCase();
const staticAdminPasswordHash = import.meta.env.VITE_ADMIN_PASSWORD_SHA256 || "ecccf750d214241b33c4656db36e1476a8a56c6e4478d33645dc57190b871e04";
const adminSessionKey = "sjr_admin_user";
const staticDataKey = "sjr_admin_static_data";
function apiUrl(path) {
    return `${apiBaseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
async function sha256(value) {
    const bytes = new TextEncoder().encode(value);
    const hashBuffer = await crypto.subtle.digest("SHA-256", bytes);
    return Array.from(new Uint8Array(hashBuffer)).map((byte)=>byte.toString(16).padStart(2, "0")).join("");
}
function readStoredAdmin() {
    const stored = window.sessionStorage.getItem(adminSessionKey) || window.localStorage.getItem(adminSessionKey);
    if (!stored) return null;
    try {
        const user = JSON.parse(stored);
        return typeof user.email === "string" ? user : null;
    } catch  {
        window.sessionStorage.removeItem(adminSessionKey);
        window.localStorage.removeItem(adminSessionKey);
        return null;
    }
}
function storeAdmin(user) {
    window.sessionStorage.setItem(adminSessionKey, JSON.stringify(user));
}
function clearStoredAdmin() {
    window.sessionStorage.removeItem(adminSessionKey);
    window.localStorage.removeItem(adminSessionKey);
}
const emptyStaticData = ()=>({
        enquiries: [],
        followUps: [],
        content: {
            news: [],
            event: [],
            gallery: [],
            video: [],
            testimonial: [],
            teacher: []
        }
    });
function createId() {
    return crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
function readStaticData() {
    const empty = emptyStaticData();
    const stored = window.localStorage.getItem(staticDataKey);
    if (!stored) return empty;
    try {
        const parsed = JSON.parse(stored);
        return {
            enquiries: Array.isArray(parsed.enquiries) ? parsed.enquiries : [],
            followUps: Array.isArray(parsed.followUps) ? parsed.followUps : [],
            content: {
                news: Array.isArray(parsed.content?.news) ? parsed.content.news : [],
                event: Array.isArray(parsed.content?.event) ? parsed.content.event : [],
                gallery: Array.isArray(parsed.content?.gallery) ? parsed.content.gallery : [],
                video: Array.isArray(parsed.content?.video) ? parsed.content.video : [],
                testimonial: Array.isArray(parsed.content?.testimonial) ? parsed.content.testimonial : [],
                teacher: Array.isArray(parsed.content?.teacher) ? parsed.content.teacher : []
            }
        };
    } catch  {
        window.localStorage.removeItem(staticDataKey);
        return empty;
    }
}
function writeStaticData(data) {
    window.localStorage.setItem(staticDataKey, JSON.stringify(data));
}
function requireStaticAdmin() {
    if (!readStoredAdmin()) throw new Error("Admin login required.");
}
function visibleContent(items, limit) {
    return items.filter((item)=>item.is_visible).sort((a, b)=>{
        if (a.type === "news" || a.type === "event") {
            return new Date(b.published_at || b.created_at).getTime() - new Date(a.published_at || a.created_at).getTime();
        }
        return (a.display_order || 0) - (b.display_order || 0) || new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    }).slice(0, limit);
}
function emptyStats() {
    const data = readStaticData();
    const contentCounts = Object.entries(data.content).map(([type, items])=>({
            type: type,
            total: items.length,
            visible: items.filter((item)=>item.is_visible).length
        }));
    return {
        summary: {
            total: data.enquiries.length,
            new: data.enquiries.filter((item)=>item.status === "Not Contacted").length,
            contacted: data.enquiries.filter((item)=>item.status === "Called").length,
            follow_up: data.enquiries.filter((item)=>item.status === "Follow Up").length,
            interested: data.enquiries.filter((item)=>item.status === "Interested").length,
            converted: data.enquiries.filter((item)=>item.status === "Admitted").length,
            closed: data.enquiries.filter((item)=>item.status === "Not Interested").length
        },
        byStatus: ENQUIRY_STATUSES.map((status)=>({
                status,
                count: data.enquiries.filter((item)=>item.status === status).length
            })),
        bySource: [
            "home",
            "contact"
        ].map((source)=>({
                source,
                count: data.enquiries.filter((item)=>item.source === source).length
            })),
        recent: data.enquiries.slice().sort((a, b)=>new Date(b.created_at).getTime() - new Date(a.created_at).getTime()).slice(0, 6),
        followUps: data.followUps.slice().sort((a, b)=>new Date(b.created_at).getTime() - new Date(a.created_at).getTime()).slice(0, 6).map((followUp)=>{
            const enquiry = data.enquiries.find((item)=>item.id === followUp.enquiry_id);
            return {
                ...followUp,
                name: enquiry?.name || "",
                source: enquiry?.source || "home"
            };
        }),
        contentCounts
    };
}
function normalizeContentItem(type, payload, existing) {
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
        updated_at: now
    };
}
async function request(url, init) {
    const response = await fetch(apiUrl(url), {
        credentials: "include",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            ...init?.headers || {}
        },
        ...init
    });
    if (!response.ok) {
        const contentType = response.headers.get("content-type") || "";
        const body = contentType.includes("application/json") ? await response.json().catch(()=>({})) : {};
        throw new Error(body.error || `Request failed with status ${response.status}.`);
    }
    if (response.status === 204) {
        return undefined;
    }
    return response.json();
}
export function loginAdmin(email, password) {
    if (!useApiAuth) {
        return sha256(password).then((passwordHash)=>{
            const normalizedEmail = email.trim().toLowerCase();
            if (normalizedEmail !== staticAdminEmail || passwordHash !== staticAdminPasswordHash) {
                throw new Error("Invalid admin credentials.");
            }
            const user = {
                email: staticAdminEmail
            };
            storeAdmin(user);
            return {
                user
            };
        });
    }
    return request("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
            email,
            password
        })
    });
}
export function getCurrentAdmin() {
    const storedAdmin = readStoredAdmin();
    if (storedAdmin) return Promise.resolve({
        user: storedAdmin
    });
    if (!useApiAuth) return Promise.reject(new Error("Admin login required."));
    return request("/api/auth/me");
}
export function logoutAdmin() {
    clearStoredAdmin();
    if (!useApiAuth) return Promise.resolve();
    return request("/api/auth/logout", {
        method: "POST"
    });
}
export function submitEnquiry(source, fields) {
    if (!useApiAuth) {
        const now = new Date().toISOString();
        const enquiry = {
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
            updated_at: now
        };
        const data = readStaticData();
        data.enquiries.unshift(enquiry);
        writeStaticData(data);
        return Promise.resolve({
            enquiry
        });
    }
    return request("/api/enquiries", {
        method: "POST",
        body: JSON.stringify({
            source,
            fields
        })
    });
}
export function getStats() {
    if (!useApiAuth) {
        requireStaticAdmin();
        return Promise.resolve(emptyStats());
    }
    return request("/api/admin/stats");
}
export function getEnquiries(params) {
    if (!useApiAuth) {
        requireStaticAdmin();
        const data = readStaticData();
        const source = params.get("source");
        const status = params.get("status");
        const search = (params.get("search") || "").toLowerCase();
        const sort = params.get("sort") || "latest";
        const page = Math.max(1, Number(params.get("page") || 1));
        const pageSize = Math.min(100, Math.max(5, Number(params.get("pageSize") || 10)));
        const filtered = data.enquiries.filter((item)=>!source || source === "all" || item.source === source).filter((item)=>!status || status === "all" || item.status === status).filter((item)=>!search || [
                item.name,
                item.contact,
                item.email
            ].join(" ").toLowerCase().includes(search)).sort((a, b)=>{
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
            pages: Math.max(1, Math.ceil(filtered.length / pageSize))
        });
    }
    return request(`/api/admin/enquiries?${params.toString()}`);
}
export function getEnquiry(id) {
    if (!useApiAuth) {
        requireStaticAdmin();
        const data = readStaticData();
        const enquiry = data.enquiries.find((item)=>item.id === id);
        if (!enquiry) return Promise.reject(new Error("Enquiry not found."));
        return Promise.resolve({
            enquiry,
            followUps: data.followUps.filter((item)=>item.enquiry_id === id).sort((a, b)=>new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
        });
    }
    return request(`/api/admin/enquiries/${id}`);
}
export function updateEnquiryStatus(id, status) {
    if (!useApiAuth) {
        requireStaticAdmin();
        const data = readStaticData();
        const enquiry = data.enquiries.find((item)=>item.id === id);
        if (!enquiry) return Promise.reject(new Error("Enquiry not found."));
        enquiry.status = status;
        enquiry.updated_at = new Date().toISOString();
        if (status !== "Not Contacted" && !enquiry.first_contacted_at) enquiry.first_contacted_at = enquiry.updated_at;
        writeStaticData(data);
        return Promise.resolve({
            enquiry
        });
    }
    return request(`/api/admin/enquiries/${id}/status`, {
        method: "PATCH",
        body: JSON.stringify({
            status
        })
    });
}
export function addFollowUp(id, payload) {
    if (!useApiAuth) {
        requireStaticAdmin();
        const data = readStaticData();
        const enquiry = data.enquiries.find((item)=>item.id === id);
        if (!enquiry) return Promise.reject(new Error("Enquiry not found."));
        const now = new Date().toISOString();
        const followUp = {
            id: createId(),
            enquiry_id: id,
            status: payload.status,
            remarks: payload.remarks || "Follow-up updated.",
            next_follow_up_date: payload.nextFollowUpAt ? payload.nextFollowUpAt.slice(0, 10) : null,
            next_follow_up_at: payload.nextFollowUpAt || null,
            created_at: now
        };
        enquiry.status = payload.status;
        enquiry.first_contacted_at = payload.firstContactedAt || enquiry.first_contacted_at || now;
        enquiry.next_follow_up_at = payload.nextFollowUpAt || null;
        enquiry.last_follow_up_at = now;
        enquiry.updated_at = now;
        data.followUps.push(followUp);
        writeStaticData(data);
        return Promise.resolve({
            enquiry,
            followUp
        });
    }
    return request(`/api/admin/enquiries/${id}/follow-ups`, {
        method: "POST",
        body: JSON.stringify(payload)
    });
}
export function deleteEnquiry(id) {
    if (!useApiAuth) {
        requireStaticAdmin();
        const data = readStaticData();
        data.enquiries = data.enquiries.filter((item)=>item.id !== id);
        data.followUps = data.followUps.filter((item)=>item.enquiry_id !== id);
        writeStaticData(data);
        return Promise.resolve();
    }
    return request(`/api/admin/enquiries/${id}`, {
        method: "DELETE"
    });
}
export function getContent(type) {
    if (!useApiAuth) {
        requireStaticAdmin();
        return Promise.resolve({
            items: readStaticData().content[type]
        });
    }
    return request(`/api/admin/content/${type}`);
}
export function getPublicContent(type, limit = 100) {
    if (!useApiAuth) {
        return Promise.resolve({
            items: visibleContent(readStaticData().content[type], limit)
        });
    }
    return request(`/api/content/${type}?limit=${limit}`);
}
export function createContent(type, payload) {
    if (!useApiAuth) {
        requireStaticAdmin();
        const data = readStaticData();
        const item = normalizeContentItem(type, payload);
        data.content[type] = [
            item,
            ...data.content[type]
        ];
        writeStaticData(data);
        return Promise.resolve({
            item
        });
    }
    return request(`/api/admin/content/${type}`, {
        method: "POST",
        body: JSON.stringify(payload)
    });
}
export function updateContent(type, id, payload) {
    if (!useApiAuth) {
        requireStaticAdmin();
        const data = readStaticData();
        const existing = data.content[type].find((item)=>item.id === id);
        if (!existing) return Promise.reject(new Error("Content item not found."));
        const item = normalizeContentItem(type, payload, existing);
        data.content[type] = data.content[type].map((candidate)=>candidate.id === id ? item : candidate);
        writeStaticData(data);
        return Promise.resolve({
            item
        });
    }
    return request(`/api/admin/content/${type}/${id}`, {
        method: "PATCH",
        body: JSON.stringify(payload)
    });
}
export function deleteContent(type, id) {
    if (!useApiAuth) {
        requireStaticAdmin();
        const data = readStaticData();
        data.content[type] = data.content[type].filter((item)=>item.id !== id);
        writeStaticData(data);
        return Promise.resolve();
    }
    return request(`/api/admin/content/${type}/${id}`, {
        method: "DELETE"
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgRU5RVUlSWV9TVEFUVVNFUyA9IFtcbiAgXCJOb3QgQ29udGFjdGVkXCIsXG4gIFwiQ2FsbGVkXCIsXG4gIFwiSW50ZXJlc3RlZFwiLFxuICBcIk5vdCBJbnRlcmVzdGVkXCIsXG4gIFwiRm9sbG93IFVwXCIsXG4gIFwiQWRtaXR0ZWRcIixcbl0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIEVucXVpcnlTdGF0dXMgPSAodHlwZW9mIEVOUVVJUllfU1RBVFVTRVMpW251bWJlcl07XG5leHBvcnQgdHlwZSBFbnF1aXJ5U291cmNlID0gXCJob21lXCIgfCBcImNvbnRhY3RcIjtcblxuZXhwb3J0IHR5cGUgRW5xdWlyeUxpc3RJdGVtID0ge1xuICBpZDogc3RyaW5nO1xuICBzb3VyY2U6IEVucXVpcnlTb3VyY2U7XG4gIG5hbWU6IHN0cmluZztcbiAgY29udGFjdDogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xuICBzdGF0dXM6IEVucXVpcnlTdGF0dXM7XG4gIGZpcnN0X2NvbnRhY3RlZF9hdDogc3RyaW5nIHwgbnVsbDtcbiAgbmV4dF9mb2xsb3dfdXBfYXQ6IHN0cmluZyB8IG51bGw7XG4gIGxhc3RfZm9sbG93X3VwX2F0OiBzdHJpbmcgfCBudWxsO1xuICBjcmVhdGVkX2F0OiBzdHJpbmc7XG4gIHVwZGF0ZWRfYXQ6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIEVucXVpcnlEZXRhaWxzID0gRW5xdWlyeUxpc3RJdGVtICYge1xuICBzdWJtaXR0ZWRfZGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG59O1xuXG5leHBvcnQgdHlwZSBGb2xsb3dVcCA9IHtcbiAgaWQ6IHN0cmluZztcbiAgZW5xdWlyeV9pZDogc3RyaW5nO1xuICBzdGF0dXM6IEVucXVpcnlTdGF0dXM7XG4gIHJlbWFya3M6IHN0cmluZztcbiAgbmV4dF9mb2xsb3dfdXBfZGF0ZTogc3RyaW5nIHwgbnVsbDtcbiAgbmV4dF9mb2xsb3dfdXBfYXQ6IHN0cmluZyB8IG51bGw7XG4gIGNyZWF0ZWRfYXQ6IHN0cmluZztcbn07XG5cbmNvbnN0IGFwaUJhc2VVcmwgPSAoaW1wb3J0Lm1ldGEuZW52LlZJVEVfQVBJX0JBU0VfVVJMIHx8IFwiXCIpLnJlcGxhY2UoL1xcLyQvLCBcIlwiKTtcbmNvbnN0IHVzZUFwaUF1dGggPSBpbXBvcnQubWV0YS5lbnYuVklURV9VU0VfQVBJX0FVVEggPT09IFwidHJ1ZVwiO1xuY29uc3Qgc3RhdGljQWRtaW5FbWFpbCA9IChpbXBvcnQubWV0YS5lbnYuVklURV9BRE1JTl9FTUFJTCB8fCBcImFkbWluQHNqcnBzaGJyLnNqcmVzLmVkdS5pblwiKS50cmltKCkudG9Mb3dlckNhc2UoKTtcbmNvbnN0IHN0YXRpY0FkbWluUGFzc3dvcmRIYXNoID1cbiAgaW1wb3J0Lm1ldGEuZW52LlZJVEVfQURNSU5fUEFTU1dPUkRfU0hBMjU2IHx8XG4gIFwiZWNjY2Y3NTBkMjE0MjQxYjMzYzQ2NTZkYjM2ZTE0NzZhOGE1NmM2ZTQ0NzhkMzM2NDVkYzU3MTkwYjg3MWUwNFwiO1xuY29uc3QgYWRtaW5TZXNzaW9uS2V5ID0gXCJzanJfYWRtaW5fdXNlclwiO1xuY29uc3Qgc3RhdGljRGF0YUtleSA9IFwic2pyX2FkbWluX3N0YXRpY19kYXRhXCI7XG5cbmZ1bmN0aW9uIGFwaVVybChwYXRoOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGAke2FwaUJhc2VVcmx9JHtwYXRoLnN0YXJ0c1dpdGgoXCIvXCIpID8gcGF0aCA6IGAvJHtwYXRofWB9YDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2hhMjU2KHZhbHVlOiBzdHJpbmcpIHtcbiAgY29uc3QgYnl0ZXMgPSBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUodmFsdWUpO1xuICBjb25zdCBoYXNoQnVmZmVyID0gYXdhaXQgY3J5cHRvLnN1YnRsZS5kaWdlc3QoXCJTSEEtMjU2XCIsIGJ5dGVzKTtcbiAgcmV0dXJuIEFycmF5LmZyb20obmV3IFVpbnQ4QXJyYXkoaGFzaEJ1ZmZlcikpXG4gICAgLm1hcCgoYnl0ZSkgPT4gYnl0ZS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgXCIwXCIpKVxuICAgIC5qb2luKFwiXCIpO1xufVxuXG5mdW5jdGlvbiByZWFkU3RvcmVkQWRtaW4oKTogQWRtaW5Vc2VyIHwgbnVsbCB7XG4gIGNvbnN0IHN0b3JlZCA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGFkbWluU2Vzc2lvbktleSkgfHwgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGFkbWluU2Vzc2lvbktleSk7XG4gIGlmICghc3RvcmVkKSByZXR1cm4gbnVsbDtcblxuICB0cnkge1xuICAgIGNvbnN0IHVzZXIgPSBKU09OLnBhcnNlKHN0b3JlZCkgYXMgQWRtaW5Vc2VyO1xuICAgIHJldHVybiB0eXBlb2YgdXNlci5lbWFpbCA9PT0gXCJzdHJpbmdcIiA/IHVzZXIgOiBudWxsO1xuICB9IGNhdGNoIHtcbiAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShhZG1pblNlc3Npb25LZXkpO1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShhZG1pblNlc3Npb25LZXkpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0b3JlQWRtaW4odXNlcjogQWRtaW5Vc2VyKSB7XG4gIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGFkbWluU2Vzc2lvbktleSwgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xufVxuXG5mdW5jdGlvbiBjbGVhclN0b3JlZEFkbWluKCkge1xuICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShhZG1pblNlc3Npb25LZXkpO1xuICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYWRtaW5TZXNzaW9uS2V5KTtcbn1cblxudHlwZSBTdGF0aWNEYXRhID0ge1xuICBlbnF1aXJpZXM6IEVucXVpcnlEZXRhaWxzW107XG4gIGZvbGxvd1VwczogRm9sbG93VXBbXTtcbiAgY29udGVudDogUmVjb3JkPEFkbWluQ29udGVudFR5cGUsIEFkbWluQ29udGVudEl0ZW1bXT47XG59O1xuXG5jb25zdCBlbXB0eVN0YXRpY0RhdGEgPSAoKTogU3RhdGljRGF0YSA9PiAoe1xuICBlbnF1aXJpZXM6IFtdLFxuICBmb2xsb3dVcHM6IFtdLFxuICBjb250ZW50OiB7XG4gICAgbmV3czogW10sXG4gICAgZXZlbnQ6IFtdLFxuICAgIGdhbGxlcnk6IFtdLFxuICAgIHZpZGVvOiBbXSxcbiAgICB0ZXN0aW1vbmlhbDogW10sXG4gICAgdGVhY2hlcjogW10sXG4gIH0sXG59KTtcblxuZnVuY3Rpb24gY3JlYXRlSWQoKSB7XG4gIHJldHVybiBjcnlwdG8ucmFuZG9tVVVJRD8uKCkgfHwgYCR7RGF0ZS5ub3coKX0tJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zbGljZSgyKX1gO1xufVxuXG5mdW5jdGlvbiByZWFkU3RhdGljRGF0YSgpOiBTdGF0aWNEYXRhIHtcbiAgY29uc3QgZW1wdHkgPSBlbXB0eVN0YXRpY0RhdGEoKTtcbiAgY29uc3Qgc3RvcmVkID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0YXRpY0RhdGFLZXkpO1xuICBpZiAoIXN0b3JlZCkgcmV0dXJuIGVtcHR5O1xuXG4gIHRyeSB7XG4gICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShzdG9yZWQpIGFzIFBhcnRpYWw8U3RhdGljRGF0YT47XG4gICAgcmV0dXJuIHtcbiAgICAgIGVucXVpcmllczogQXJyYXkuaXNBcnJheShwYXJzZWQuZW5xdWlyaWVzKSA/IHBhcnNlZC5lbnF1aXJpZXMgOiBbXSxcbiAgICAgIGZvbGxvd1VwczogQXJyYXkuaXNBcnJheShwYXJzZWQuZm9sbG93VXBzKSA/IHBhcnNlZC5mb2xsb3dVcHMgOiBbXSxcbiAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgbmV3czogQXJyYXkuaXNBcnJheShwYXJzZWQuY29udGVudD8ubmV3cykgPyBwYXJzZWQuY29udGVudC5uZXdzIDogW10sXG4gICAgICAgIGV2ZW50OiBBcnJheS5pc0FycmF5KHBhcnNlZC5jb250ZW50Py5ldmVudCkgPyBwYXJzZWQuY29udGVudC5ldmVudCA6IFtdLFxuICAgICAgICBnYWxsZXJ5OiBBcnJheS5pc0FycmF5KHBhcnNlZC5jb250ZW50Py5nYWxsZXJ5KSA/IHBhcnNlZC5jb250ZW50LmdhbGxlcnkgOiBbXSxcbiAgICAgICAgdmlkZW86IEFycmF5LmlzQXJyYXkocGFyc2VkLmNvbnRlbnQ/LnZpZGVvKSA/IHBhcnNlZC5jb250ZW50LnZpZGVvIDogW10sXG4gICAgICAgIHRlc3RpbW9uaWFsOiBBcnJheS5pc0FycmF5KHBhcnNlZC5jb250ZW50Py50ZXN0aW1vbmlhbCkgPyBwYXJzZWQuY29udGVudC50ZXN0aW1vbmlhbCA6IFtdLFxuICAgICAgICB0ZWFjaGVyOiBBcnJheS5pc0FycmF5KHBhcnNlZC5jb250ZW50Py50ZWFjaGVyKSA/IHBhcnNlZC5jb250ZW50LnRlYWNoZXIgOiBbXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSBjYXRjaCB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHN0YXRpY0RhdGFLZXkpO1xuICAgIHJldHVybiBlbXB0eTtcbiAgfVxufVxuXG5mdW5jdGlvbiB3cml0ZVN0YXRpY0RhdGEoZGF0YTogU3RhdGljRGF0YSkge1xuICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RhdGljRGF0YUtleSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xufVxuXG5mdW5jdGlvbiByZXF1aXJlU3RhdGljQWRtaW4oKSB7XG4gIGlmICghcmVhZFN0b3JlZEFkbWluKCkpIHRocm93IG5ldyBFcnJvcihcIkFkbWluIGxvZ2luIHJlcXVpcmVkLlwiKTtcbn1cblxuZnVuY3Rpb24gdmlzaWJsZUNvbnRlbnQoaXRlbXM6IEFkbWluQ29udGVudEl0ZW1bXSwgbGltaXQ6IG51bWJlcikge1xuICByZXR1cm4gaXRlbXNcbiAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlzX3Zpc2libGUpXG4gICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGlmIChhLnR5cGUgPT09IFwibmV3c1wiIHx8IGEudHlwZSA9PT0gXCJldmVudFwiKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShiLnB1Ymxpc2hlZF9hdCB8fCBiLmNyZWF0ZWRfYXQpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGEucHVibGlzaGVkX2F0IHx8IGEuY3JlYXRlZF9hdCkuZ2V0VGltZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChhLmRpc3BsYXlfb3JkZXIgfHwgMCkgLSAoYi5kaXNwbGF5X29yZGVyIHx8IDApIHx8IG5ldyBEYXRlKGIuY3JlYXRlZF9hdCkuZ2V0VGltZSgpIC0gbmV3IERhdGUoYS5jcmVhdGVkX2F0KS5nZXRUaW1lKCk7XG4gICAgfSlcbiAgICAuc2xpY2UoMCwgbGltaXQpO1xufVxuXG5mdW5jdGlvbiBlbXB0eVN0YXRzKCkge1xuICBjb25zdCBkYXRhID0gcmVhZFN0YXRpY0RhdGEoKTtcbiAgY29uc3QgY29udGVudENvdW50cyA9IE9iamVjdC5lbnRyaWVzKGRhdGEuY29udGVudCkubWFwKChbdHlwZSwgaXRlbXNdKSA9PiAoe1xuICAgIHR5cGU6IHR5cGUgYXMgQWRtaW5Db250ZW50VHlwZSxcbiAgICB0b3RhbDogaXRlbXMubGVuZ3RoLFxuICAgIHZpc2libGU6IGl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pc192aXNpYmxlKS5sZW5ndGgsXG4gIH0pKTtcblxuICByZXR1cm4ge1xuICAgIHN1bW1hcnk6IHtcbiAgICAgIHRvdGFsOiBkYXRhLmVucXVpcmllcy5sZW5ndGgsXG4gICAgICBuZXc6IGRhdGEuZW5xdWlyaWVzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5zdGF0dXMgPT09IFwiTm90IENvbnRhY3RlZFwiKS5sZW5ndGgsXG4gICAgICBjb250YWN0ZWQ6IGRhdGEuZW5xdWlyaWVzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5zdGF0dXMgPT09IFwiQ2FsbGVkXCIpLmxlbmd0aCxcbiAgICAgIGZvbGxvd191cDogZGF0YS5lbnF1aXJpZXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnN0YXR1cyA9PT0gXCJGb2xsb3cgVXBcIikubGVuZ3RoLFxuICAgICAgaW50ZXJlc3RlZDogZGF0YS5lbnF1aXJpZXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnN0YXR1cyA9PT0gXCJJbnRlcmVzdGVkXCIpLmxlbmd0aCxcbiAgICAgIGNvbnZlcnRlZDogZGF0YS5lbnF1aXJpZXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnN0YXR1cyA9PT0gXCJBZG1pdHRlZFwiKS5sZW5ndGgsXG4gICAgICBjbG9zZWQ6IGRhdGEuZW5xdWlyaWVzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5zdGF0dXMgPT09IFwiTm90IEludGVyZXN0ZWRcIikubGVuZ3RoLFxuICAgIH0sXG4gICAgYnlTdGF0dXM6IEVOUVVJUllfU1RBVFVTRVMubWFwKChzdGF0dXMpID0+ICh7IHN0YXR1cywgY291bnQ6IGRhdGEuZW5xdWlyaWVzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5zdGF0dXMgPT09IHN0YXR1cykubGVuZ3RoIH0pKSxcbiAgICBieVNvdXJjZTogKFtcImhvbWVcIiwgXCJjb250YWN0XCJdIGFzIEVucXVpcnlTb3VyY2VbXSkubWFwKChzb3VyY2UpID0+ICh7IHNvdXJjZSwgY291bnQ6IGRhdGEuZW5xdWlyaWVzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5zb3VyY2UgPT09IHNvdXJjZSkubGVuZ3RoIH0pKSxcbiAgICByZWNlbnQ6IGRhdGEuZW5xdWlyaWVzLnNsaWNlKCkuc29ydCgoYSwgYikgPT4gbmV3IERhdGUoYi5jcmVhdGVkX2F0KS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShhLmNyZWF0ZWRfYXQpLmdldFRpbWUoKSkuc2xpY2UoMCwgNiksXG4gICAgZm9sbG93VXBzOiBkYXRhLmZvbGxvd1Vwc1xuICAgICAgLnNsaWNlKClcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBuZXcgRGF0ZShiLmNyZWF0ZWRfYXQpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGEuY3JlYXRlZF9hdCkuZ2V0VGltZSgpKVxuICAgICAgLnNsaWNlKDAsIDYpXG4gICAgICAubWFwKChmb2xsb3dVcCkgPT4ge1xuICAgICAgICBjb25zdCBlbnF1aXJ5ID0gZGF0YS5lbnF1aXJpZXMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gZm9sbG93VXAuZW5xdWlyeV9pZCk7XG4gICAgICAgIHJldHVybiB7IC4uLmZvbGxvd1VwLCBuYW1lOiBlbnF1aXJ5Py5uYW1lIHx8IFwiXCIsIHNvdXJjZTogZW5xdWlyeT8uc291cmNlIHx8IFwiaG9tZVwiIH07XG4gICAgICB9KSxcbiAgICBjb250ZW50Q291bnRzLFxuICB9O1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVDb250ZW50SXRlbSh0eXBlOiBBZG1pbkNvbnRlbnRUeXBlLCBwYXlsb2FkOiBBZG1pbkNvbnRlbnRQYXlsb2FkLCBleGlzdGluZz86IEFkbWluQ29udGVudEl0ZW0pOiBBZG1pbkNvbnRlbnRJdGVtIHtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICByZXR1cm4ge1xuICAgIGlkOiBleGlzdGluZz8uaWQgfHwgY3JlYXRlSWQoKSxcbiAgICB0eXBlLFxuICAgIHRpdGxlOiBwYXlsb2FkLnRpdGxlIHx8IGV4aXN0aW5nPy50aXRsZSB8fCBcIlwiLFxuICAgIHN1YnRpdGxlOiBwYXlsb2FkLnN1YnRpdGxlID8/IGV4aXN0aW5nPy5zdWJ0aXRsZSA/PyBcIlwiLFxuICAgIGJvZHk6IHBheWxvYWQuYm9keSA/PyBleGlzdGluZz8uYm9keSA/PyBcIlwiLFxuICAgIGltYWdlX3VybDogcGF5bG9hZC5pbWFnZV91cmwgPz8gZXhpc3Rpbmc/LmltYWdlX3VybCA/PyBcIlwiLFxuICAgIGNhdGVnb3J5OiBwYXlsb2FkLmNhdGVnb3J5ID8/IGV4aXN0aW5nPy5jYXRlZ29yeSA/PyBcIlwiLFxuICAgIHB1Ymxpc2hlZF9hdDogcGF5bG9hZC5wdWJsaXNoZWRfYXQgfHwgZXhpc3Rpbmc/LnB1Ymxpc2hlZF9hdCB8fCBudWxsLFxuICAgIGlzX3Zpc2libGU6IHBheWxvYWQuaXNfdmlzaWJsZSA/PyBleGlzdGluZz8uaXNfdmlzaWJsZSA/PyB0cnVlLFxuICAgIGRpc3BsYXlfb3JkZXI6IHBheWxvYWQuZGlzcGxheV9vcmRlciA/PyBleGlzdGluZz8uZGlzcGxheV9vcmRlciA/PyAwLFxuICAgIGZpZWxkczogcGF5bG9hZC5maWVsZHMgPz8gZXhpc3Rpbmc/LmZpZWxkcyA/PyB7fSxcbiAgICBjcmVhdGVkX2F0OiBleGlzdGluZz8uY3JlYXRlZF9hdCB8fCBub3csXG4gICAgdXBkYXRlZF9hdDogbm93LFxuICB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiByZXF1ZXN0PFQ+KHVybDogc3RyaW5nLCBpbml0PzogUmVxdWVzdEluaXQpOiBQcm9taXNlPFQ+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlVcmwodXJsKSwge1xuICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAuLi4oaW5pdD8uaGVhZGVycyB8fCB7fSksXG4gICAgfSxcbiAgICAuLi5pbml0LFxuICB9KTtcblxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgY29uc3QgY29udGVudFR5cGUgPSByZXNwb25zZS5oZWFkZXJzLmdldChcImNvbnRlbnQtdHlwZVwiKSB8fCBcIlwiO1xuICAgIGNvbnN0IGJvZHkgPSBjb250ZW50VHlwZS5pbmNsdWRlcyhcImFwcGxpY2F0aW9uL2pzb25cIikgPyBhd2FpdCByZXNwb25zZS5qc29uKCkuY2F0Y2goKCkgPT4gKHt9KSkgOiB7fTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYm9keS5lcnJvciB8fCBgUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgJHtyZXNwb25zZS5zdGF0dXN9LmApO1xuICB9XG5cbiAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA0KSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZCBhcyBUO1xuICB9XG5cbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn1cblxuZXhwb3J0IHR5cGUgQWRtaW5Vc2VyID0ge1xuICBlbWFpbDogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgQWRtaW5Db250ZW50VHlwZSA9IFwibmV3c1wiIHwgXCJldmVudFwiIHwgXCJnYWxsZXJ5XCIgfCBcInZpZGVvXCIgfCBcInRlc3RpbW9uaWFsXCIgfCBcInRlYWNoZXJcIjtcblxuZXhwb3J0IHR5cGUgQWRtaW5Db250ZW50SXRlbSA9IHtcbiAgaWQ6IHN0cmluZztcbiAgdHlwZTogQWRtaW5Db250ZW50VHlwZTtcbiAgdGl0bGU6IHN0cmluZztcbiAgc3VidGl0bGU6IHN0cmluZztcbiAgYm9keTogc3RyaW5nO1xuICBpbWFnZV91cmw6IHN0cmluZztcbiAgY2F0ZWdvcnk6IHN0cmluZztcbiAgcHVibGlzaGVkX2F0OiBzdHJpbmcgfCBudWxsO1xuICBpc192aXNpYmxlOiBib29sZWFuO1xuICBkaXNwbGF5X29yZGVyOiBudW1iZXI7XG4gIGZpZWxkczogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIGNyZWF0ZWRfYXQ6IHN0cmluZztcbiAgdXBkYXRlZF9hdDogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgQWRtaW5Db250ZW50UGF5bG9hZCA9IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgc3VidGl0bGU/OiBzdHJpbmc7XG4gIGJvZHk/OiBzdHJpbmc7XG4gIGltYWdlX3VybD86IHN0cmluZztcbiAgY2F0ZWdvcnk/OiBzdHJpbmc7XG4gIHB1Ymxpc2hlZF9hdD86IHN0cmluZztcbiAgaXNfdmlzaWJsZT86IGJvb2xlYW47XG4gIGRpc3BsYXlfb3JkZXI/OiBudW1iZXI7XG4gIGZpZWxkcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luQWRtaW4oZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuICBpZiAoIXVzZUFwaUF1dGgpIHtcbiAgICByZXR1cm4gc2hhMjU2KHBhc3N3b3JkKS50aGVuKChwYXNzd29yZEhhc2gpID0+IHtcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRFbWFpbCA9IGVtYWlsLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKG5vcm1hbGl6ZWRFbWFpbCAhPT0gc3RhdGljQWRtaW5FbWFpbCB8fCBwYXNzd29yZEhhc2ggIT09IHN0YXRpY0FkbWluUGFzc3dvcmRIYXNoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYWRtaW4gY3JlZGVudGlhbHMuXCIpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB1c2VyID0geyBlbWFpbDogc3RhdGljQWRtaW5FbWFpbCB9O1xuICAgICAgc3RvcmVBZG1pbih1c2VyKTtcbiAgICAgIHJldHVybiB7IHVzZXIgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiByZXF1ZXN0PHsgdXNlcjogQWRtaW5Vc2VyIH0+KFwiL2FwaS9hdXRoL2xvZ2luXCIsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIHBhc3N3b3JkIH0pLFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRBZG1pbigpIHtcbiAgY29uc3Qgc3RvcmVkQWRtaW4gPSByZWFkU3RvcmVkQWRtaW4oKTtcbiAgaWYgKHN0b3JlZEFkbWluKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsgdXNlcjogc3RvcmVkQWRtaW4gfSk7XG4gIGlmICghdXNlQXBpQXV0aCkgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkFkbWluIGxvZ2luIHJlcXVpcmVkLlwiKSk7XG5cbiAgcmV0dXJuIHJlcXVlc3Q8eyB1c2VyOiBBZG1pblVzZXIgfT4oXCIvYXBpL2F1dGgvbWVcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dvdXRBZG1pbigpIHtcbiAgY2xlYXJTdG9yZWRBZG1pbigpO1xuICBpZiAoIXVzZUFwaUF1dGgpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblxuICByZXR1cm4gcmVxdWVzdDx2b2lkPihcIi9hcGkvYXV0aC9sb2dvdXRcIiwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VibWl0RW5xdWlyeShzb3VyY2U6IEVucXVpcnlTb3VyY2UsIGZpZWxkczogUmVjb3JkPHN0cmluZywgc3RyaW5nPikge1xuICBpZiAoIXVzZUFwaUF1dGgpIHtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgY29uc3QgZW5xdWlyeTogRW5xdWlyeURldGFpbHMgPSB7XG4gICAgICBpZDogY3JlYXRlSWQoKSxcbiAgICAgIHNvdXJjZSxcbiAgICAgIG5hbWU6IGZpZWxkcy5uYW1lIHx8IFwiXCIsXG4gICAgICBjb250YWN0OiBmaWVsZHMuY29udGFjdCB8fCBmaWVsZHMucGhvbmUgfHwgZmllbGRzLm1vYmlsZSB8fCBmaWVsZHMubW9iaWxlTnVtYmVyIHx8IFwiXCIsXG4gICAgICBlbWFpbDogZmllbGRzLmVtYWlsIHx8IFwiXCIsXG4gICAgICBzdGF0dXM6IFwiTm90IENvbnRhY3RlZFwiLFxuICAgICAgZmlyc3RfY29udGFjdGVkX2F0OiBudWxsLFxuICAgICAgbmV4dF9mb2xsb3dfdXBfYXQ6IG51bGwsXG4gICAgICBsYXN0X2ZvbGxvd191cF9hdDogbnVsbCxcbiAgICAgIHN1Ym1pdHRlZF9kYXRhOiBmaWVsZHMsXG4gICAgICBjcmVhdGVkX2F0OiBub3csXG4gICAgICB1cGRhdGVkX2F0OiBub3csXG4gICAgfTtcbiAgICBjb25zdCBkYXRhID0gcmVhZFN0YXRpY0RhdGEoKTtcbiAgICBkYXRhLmVucXVpcmllcy51bnNoaWZ0KGVucXVpcnkpO1xuICAgIHdyaXRlU3RhdGljRGF0YShkYXRhKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsgZW5xdWlyeSB9KTtcbiAgfVxuXG4gIHJldHVybiByZXF1ZXN0PHsgZW5xdWlyeTogRW5xdWlyeURldGFpbHMgfT4oXCIvYXBpL2VucXVpcmllc1wiLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHNvdXJjZSwgZmllbGRzIH0pLFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRzKCkge1xuICBpZiAoIXVzZUFwaUF1dGgpIHtcbiAgICByZXF1aXJlU3RhdGljQWRtaW4oKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVtcHR5U3RhdHMoKSk7XG4gIH1cblxuICByZXR1cm4gcmVxdWVzdDx7XG4gICAgc3VtbWFyeTogUmVjb3JkPHN0cmluZywgbnVtYmVyPjtcbiAgICBieVN0YXR1czogeyBzdGF0dXM6IEVucXVpcnlTdGF0dXM7IGNvdW50OiBudW1iZXIgfVtdO1xuICAgIGJ5U291cmNlOiB7IHNvdXJjZTogRW5xdWlyeVNvdXJjZTsgY291bnQ6IG51bWJlciB9W107XG4gICAgcmVjZW50OiBFbnF1aXJ5TGlzdEl0ZW1bXTtcbiAgICBmb2xsb3dVcHM6IChGb2xsb3dVcCAmIHsgbmFtZTogc3RyaW5nOyBzb3VyY2U6IEVucXVpcnlTb3VyY2UgfSlbXTtcbiAgICBjb250ZW50Q291bnRzOiB7IHR5cGU6IEFkbWluQ29udGVudFR5cGU7IHRvdGFsOiBudW1iZXI7IHZpc2libGU6IG51bWJlciB9W107XG4gIH0+KFwiL2FwaS9hZG1pbi9zdGF0c1wiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVucXVpcmllcyhwYXJhbXM6IFVSTFNlYXJjaFBhcmFtcykge1xuICBpZiAoIXVzZUFwaUF1dGgpIHtcbiAgICByZXF1aXJlU3RhdGljQWRtaW4oKTtcbiAgICBjb25zdCBkYXRhID0gcmVhZFN0YXRpY0RhdGEoKTtcbiAgICBjb25zdCBzb3VyY2UgPSBwYXJhbXMuZ2V0KFwic291cmNlXCIpIGFzIEVucXVpcnlTb3VyY2UgfCBcImFsbFwiIHwgbnVsbDtcbiAgICBjb25zdCBzdGF0dXMgPSBwYXJhbXMuZ2V0KFwic3RhdHVzXCIpIGFzIEVucXVpcnlTdGF0dXMgfCBcImFsbFwiIHwgbnVsbDtcbiAgICBjb25zdCBzZWFyY2ggPSAocGFyYW1zLmdldChcInNlYXJjaFwiKSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IHNvcnQgPSBwYXJhbXMuZ2V0KFwic29ydFwiKSB8fCBcImxhdGVzdFwiO1xuICAgIGNvbnN0IHBhZ2UgPSBNYXRoLm1heCgxLCBOdW1iZXIocGFyYW1zLmdldChcInBhZ2VcIikgfHwgMSkpO1xuICAgIGNvbnN0IHBhZ2VTaXplID0gTWF0aC5taW4oMTAwLCBNYXRoLm1heCg1LCBOdW1iZXIocGFyYW1zLmdldChcInBhZ2VTaXplXCIpIHx8IDEwKSkpO1xuICAgIGNvbnN0IGZpbHRlcmVkID0gZGF0YS5lbnF1aXJpZXNcbiAgICAgIC5maWx0ZXIoKGl0ZW0pID0+ICFzb3VyY2UgfHwgc291cmNlID09PSBcImFsbFwiIHx8IGl0ZW0uc291cmNlID09PSBzb3VyY2UpXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiAhc3RhdHVzIHx8IHN0YXR1cyA9PT0gXCJhbGxcIiB8fCBpdGVtLnN0YXR1cyA9PT0gc3RhdHVzKVxuICAgICAgLmZpbHRlcigoaXRlbSkgPT4gIXNlYXJjaCB8fCBbaXRlbS5uYW1lLCBpdGVtLmNvbnRhY3QsIGl0ZW0uZW1haWxdLmpvaW4oXCIgXCIpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoKSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGlmIChzb3J0ID09PSBcIm9sZGVzdFwiKSByZXR1cm4gbmV3IERhdGUoYS5jcmVhdGVkX2F0KS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShiLmNyZWF0ZWRfYXQpLmdldFRpbWUoKTtcbiAgICAgICAgaWYgKHNvcnQgPT09IFwibmFtZVwiKSByZXR1cm4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKTtcbiAgICAgICAgaWYgKHNvcnQgPT09IFwic3RhdHVzXCIpIHJldHVybiBhLnN0YXR1cy5sb2NhbGVDb21wYXJlKGIuc3RhdHVzKSB8fCBuZXcgRGF0ZShiLmNyZWF0ZWRfYXQpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGEuY3JlYXRlZF9hdCkuZ2V0VGltZSgpO1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoYi5jcmVhdGVkX2F0KS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShhLmNyZWF0ZWRfYXQpLmdldFRpbWUoKTtcbiAgICAgIH0pO1xuICAgIGNvbnN0IG9mZnNldCA9IChwYWdlIC0gMSkgKiBwYWdlU2l6ZTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgIGVucXVpcmllczogZmlsdGVyZWQuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBwYWdlU2l6ZSksXG4gICAgICB0b3RhbDogZmlsdGVyZWQubGVuZ3RoLFxuICAgICAgcGFnZSxcbiAgICAgIHBhZ2VTaXplLFxuICAgICAgcGFnZXM6IE1hdGgubWF4KDEsIE1hdGguY2VpbChmaWx0ZXJlZC5sZW5ndGggLyBwYWdlU2l6ZSkpLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHJlcXVlc3Q8e1xuICAgIGVucXVpcmllczogRW5xdWlyeUxpc3RJdGVtW107XG4gICAgdG90YWw6IG51bWJlcjtcbiAgICBwYWdlOiBudW1iZXI7XG4gICAgcGFnZVNpemU6IG51bWJlcjtcbiAgICBwYWdlczogbnVtYmVyO1xuICB9PihgL2FwaS9hZG1pbi9lbnF1aXJpZXM/JHtwYXJhbXMudG9TdHJpbmcoKX1gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVucXVpcnkoaWQ6IHN0cmluZykge1xuICBpZiAoIXVzZUFwaUF1dGgpIHtcbiAgICByZXF1aXJlU3RhdGljQWRtaW4oKTtcbiAgICBjb25zdCBkYXRhID0gcmVhZFN0YXRpY0RhdGEoKTtcbiAgICBjb25zdCBlbnF1aXJ5ID0gZGF0YS5lbnF1aXJpZXMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaWQpO1xuICAgIGlmICghZW5xdWlyeSkgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkVucXVpcnkgbm90IGZvdW5kLlwiKSk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBlbnF1aXJ5LFxuICAgICAgZm9sbG93VXBzOiBkYXRhLmZvbGxvd1Vwcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uZW5xdWlyeV9pZCA9PT0gaWQpLnNvcnQoKGEsIGIpID0+IG5ldyBEYXRlKGEuY3JlYXRlZF9hdCkuZ2V0VGltZSgpIC0gbmV3IERhdGUoYi5jcmVhdGVkX2F0KS5nZXRUaW1lKCkpLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHJlcXVlc3Q8eyBlbnF1aXJ5OiBFbnF1aXJ5RGV0YWlsczsgZm9sbG93VXBzOiBGb2xsb3dVcFtdIH0+KGAvYXBpL2FkbWluL2VucXVpcmllcy8ke2lkfWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRW5xdWlyeVN0YXR1cyhpZDogc3RyaW5nLCBzdGF0dXM6IEVucXVpcnlTdGF0dXMpIHtcbiAgaWYgKCF1c2VBcGlBdXRoKSB7XG4gICAgcmVxdWlyZVN0YXRpY0FkbWluKCk7XG4gICAgY29uc3QgZGF0YSA9IHJlYWRTdGF0aWNEYXRhKCk7XG4gICAgY29uc3QgZW5xdWlyeSA9IGRhdGEuZW5xdWlyaWVzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGlkKTtcbiAgICBpZiAoIWVucXVpcnkpIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJFbnF1aXJ5IG5vdCBmb3VuZC5cIikpO1xuICAgIGVucXVpcnkuc3RhdHVzID0gc3RhdHVzO1xuICAgIGVucXVpcnkudXBkYXRlZF9hdCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICBpZiAoc3RhdHVzICE9PSBcIk5vdCBDb250YWN0ZWRcIiAmJiAhZW5xdWlyeS5maXJzdF9jb250YWN0ZWRfYXQpIGVucXVpcnkuZmlyc3RfY29udGFjdGVkX2F0ID0gZW5xdWlyeS51cGRhdGVkX2F0O1xuICAgIHdyaXRlU3RhdGljRGF0YShkYXRhKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsgZW5xdWlyeSB9KTtcbiAgfVxuXG4gIHJldHVybiByZXF1ZXN0PHsgZW5xdWlyeTogRW5xdWlyeURldGFpbHMgfT4oYC9hcGkvYWRtaW4vZW5xdWlyaWVzLyR7aWR9L3N0YXR1c2AsIHtcbiAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHN0YXR1cyB9KSxcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRGb2xsb3dVcChpZDogc3RyaW5nLCBwYXlsb2FkOiB7IHN0YXR1czogRW5xdWlyeVN0YXR1czsgcmVtYXJrczogc3RyaW5nOyBmaXJzdENvbnRhY3RlZEF0OiBzdHJpbmc7IG5leHRGb2xsb3dVcEF0OiBzdHJpbmcgfSkge1xuICBpZiAoIXVzZUFwaUF1dGgpIHtcbiAgICByZXF1aXJlU3RhdGljQWRtaW4oKTtcbiAgICBjb25zdCBkYXRhID0gcmVhZFN0YXRpY0RhdGEoKTtcbiAgICBjb25zdCBlbnF1aXJ5ID0gZGF0YS5lbnF1aXJpZXMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaWQpO1xuICAgIGlmICghZW5xdWlyeSkgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkVucXVpcnkgbm90IGZvdW5kLlwiKSk7XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgIGNvbnN0IGZvbGxvd1VwOiBGb2xsb3dVcCA9IHtcbiAgICAgIGlkOiBjcmVhdGVJZCgpLFxuICAgICAgZW5xdWlyeV9pZDogaWQsXG4gICAgICBzdGF0dXM6IHBheWxvYWQuc3RhdHVzLFxuICAgICAgcmVtYXJrczogcGF5bG9hZC5yZW1hcmtzIHx8IFwiRm9sbG93LXVwIHVwZGF0ZWQuXCIsXG4gICAgICBuZXh0X2ZvbGxvd191cF9kYXRlOiBwYXlsb2FkLm5leHRGb2xsb3dVcEF0ID8gcGF5bG9hZC5uZXh0Rm9sbG93VXBBdC5zbGljZSgwLCAxMCkgOiBudWxsLFxuICAgICAgbmV4dF9mb2xsb3dfdXBfYXQ6IHBheWxvYWQubmV4dEZvbGxvd1VwQXQgfHwgbnVsbCxcbiAgICAgIGNyZWF0ZWRfYXQ6IG5vdyxcbiAgICB9O1xuICAgIGVucXVpcnkuc3RhdHVzID0gcGF5bG9hZC5zdGF0dXM7XG4gICAgZW5xdWlyeS5maXJzdF9jb250YWN0ZWRfYXQgPSBwYXlsb2FkLmZpcnN0Q29udGFjdGVkQXQgfHwgZW5xdWlyeS5maXJzdF9jb250YWN0ZWRfYXQgfHwgbm93O1xuICAgIGVucXVpcnkubmV4dF9mb2xsb3dfdXBfYXQgPSBwYXlsb2FkLm5leHRGb2xsb3dVcEF0IHx8IG51bGw7XG4gICAgZW5xdWlyeS5sYXN0X2ZvbGxvd191cF9hdCA9IG5vdztcbiAgICBlbnF1aXJ5LnVwZGF0ZWRfYXQgPSBub3c7XG4gICAgZGF0YS5mb2xsb3dVcHMucHVzaChmb2xsb3dVcCk7XG4gICAgd3JpdGVTdGF0aWNEYXRhKGRhdGEpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoeyBlbnF1aXJ5LCBmb2xsb3dVcCB9KTtcbiAgfVxuXG4gIHJldHVybiByZXF1ZXN0PHsgZW5xdWlyeTogRW5xdWlyeURldGFpbHM7IGZvbGxvd1VwOiBGb2xsb3dVcCB9PihgL2FwaS9hZG1pbi9lbnF1aXJpZXMvJHtpZH0vZm9sbG93LXVwc2AsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpLFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUVucXVpcnkoaWQ6IHN0cmluZykge1xuICBpZiAoIXVzZUFwaUF1dGgpIHtcbiAgICByZXF1aXJlU3RhdGljQWRtaW4oKTtcbiAgICBjb25zdCBkYXRhID0gcmVhZFN0YXRpY0RhdGEoKTtcbiAgICBkYXRhLmVucXVpcmllcyA9IGRhdGEuZW5xdWlyaWVzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gaWQpO1xuICAgIGRhdGEuZm9sbG93VXBzID0gZGF0YS5mb2xsb3dVcHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmVucXVpcnlfaWQgIT09IGlkKTtcbiAgICB3cml0ZVN0YXRpY0RhdGEoZGF0YSk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgcmV0dXJuIHJlcXVlc3Q8dm9pZD4oYC9hcGkvYWRtaW4vZW5xdWlyaWVzLyR7aWR9YCwge1xuICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250ZW50KHR5cGU6IEFkbWluQ29udGVudFR5cGUpIHtcbiAgaWYgKCF1c2VBcGlBdXRoKSB7XG4gICAgcmVxdWlyZVN0YXRpY0FkbWluKCk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7IGl0ZW1zOiByZWFkU3RhdGljRGF0YSgpLmNvbnRlbnRbdHlwZV0gfSk7XG4gIH1cblxuICByZXR1cm4gcmVxdWVzdDx7IGl0ZW1zOiBBZG1pbkNvbnRlbnRJdGVtW10gfT4oYC9hcGkvYWRtaW4vY29udGVudC8ke3R5cGV9YCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQdWJsaWNDb250ZW50KHR5cGU6IEFkbWluQ29udGVudFR5cGUsIGxpbWl0ID0gMTAwKSB7XG4gIGlmICghdXNlQXBpQXV0aCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoeyBpdGVtczogdmlzaWJsZUNvbnRlbnQocmVhZFN0YXRpY0RhdGEoKS5jb250ZW50W3R5cGVdLCBsaW1pdCkgfSk7XG4gIH1cblxuICByZXR1cm4gcmVxdWVzdDx7IGl0ZW1zOiBBZG1pbkNvbnRlbnRJdGVtW10gfT4oYC9hcGkvY29udGVudC8ke3R5cGV9P2xpbWl0PSR7bGltaXR9YCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb250ZW50KHR5cGU6IEFkbWluQ29udGVudFR5cGUsIHBheWxvYWQ6IEFkbWluQ29udGVudFBheWxvYWQpIHtcbiAgaWYgKCF1c2VBcGlBdXRoKSB7XG4gICAgcmVxdWlyZVN0YXRpY0FkbWluKCk7XG4gICAgY29uc3QgZGF0YSA9IHJlYWRTdGF0aWNEYXRhKCk7XG4gICAgY29uc3QgaXRlbSA9IG5vcm1hbGl6ZUNvbnRlbnRJdGVtKHR5cGUsIHBheWxvYWQpO1xuICAgIGRhdGEuY29udGVudFt0eXBlXSA9IFtpdGVtLCAuLi5kYXRhLmNvbnRlbnRbdHlwZV1dO1xuICAgIHdyaXRlU3RhdGljRGF0YShkYXRhKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsgaXRlbSB9KTtcbiAgfVxuXG4gIHJldHVybiByZXF1ZXN0PHsgaXRlbTogQWRtaW5Db250ZW50SXRlbSB9PihgL2FwaS9hZG1pbi9jb250ZW50LyR7dHlwZX1gLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKSxcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDb250ZW50KHR5cGU6IEFkbWluQ29udGVudFR5cGUsIGlkOiBzdHJpbmcsIHBheWxvYWQ6IEFkbWluQ29udGVudFBheWxvYWQpIHtcbiAgaWYgKCF1c2VBcGlBdXRoKSB7XG4gICAgcmVxdWlyZVN0YXRpY0FkbWluKCk7XG4gICAgY29uc3QgZGF0YSA9IHJlYWRTdGF0aWNEYXRhKCk7XG4gICAgY29uc3QgZXhpc3RpbmcgPSBkYXRhLmNvbnRlbnRbdHlwZV0uZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaWQpO1xuICAgIGlmICghZXhpc3RpbmcpIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJDb250ZW50IGl0ZW0gbm90IGZvdW5kLlwiKSk7XG4gICAgY29uc3QgaXRlbSA9IG5vcm1hbGl6ZUNvbnRlbnRJdGVtKHR5cGUsIHBheWxvYWQsIGV4aXN0aW5nKTtcbiAgICBkYXRhLmNvbnRlbnRbdHlwZV0gPSBkYXRhLmNvbnRlbnRbdHlwZV0ubWFwKChjYW5kaWRhdGUpID0+IChjYW5kaWRhdGUuaWQgPT09IGlkID8gaXRlbSA6IGNhbmRpZGF0ZSkpO1xuICAgIHdyaXRlU3RhdGljRGF0YShkYXRhKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsgaXRlbSB9KTtcbiAgfVxuXG4gIHJldHVybiByZXF1ZXN0PHsgaXRlbTogQWRtaW5Db250ZW50SXRlbSB9PihgL2FwaS9hZG1pbi9jb250ZW50LyR7dHlwZX0vJHtpZH1gLCB7XG4gICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCksXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQ29udGVudCh0eXBlOiBBZG1pbkNvbnRlbnRUeXBlLCBpZDogc3RyaW5nKSB7XG4gIGlmICghdXNlQXBpQXV0aCkge1xuICAgIHJlcXVpcmVTdGF0aWNBZG1pbigpO1xuICAgIGNvbnN0IGRhdGEgPSByZWFkU3RhdGljRGF0YSgpO1xuICAgIGRhdGEuY29udGVudFt0eXBlXSA9IGRhdGEuY29udGVudFt0eXBlXS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGlkKTtcbiAgICB3cml0ZVN0YXRpY0RhdGEoZGF0YSk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgcmV0dXJuIHJlcXVlc3Q8dm9pZD4oYC9hcGkvYWRtaW4vY29udGVudC8ke3R5cGV9LyR7aWR9YCwge1xuICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiRU5RVUlSWV9TVEFUVVNFUyIsImFwaUJhc2VVcmwiLCJlbnYiLCJWSVRFX0FQSV9CQVNFX1VSTCIsInJlcGxhY2UiLCJ1c2VBcGlBdXRoIiwiVklURV9VU0VfQVBJX0FVVEgiLCJzdGF0aWNBZG1pbkVtYWlsIiwiVklURV9BRE1JTl9FTUFJTCIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsInN0YXRpY0FkbWluUGFzc3dvcmRIYXNoIiwiVklURV9BRE1JTl9QQVNTV09SRF9TSEEyNTYiLCJhZG1pblNlc3Npb25LZXkiLCJzdGF0aWNEYXRhS2V5IiwiYXBpVXJsIiwicGF0aCIsInN0YXJ0c1dpdGgiLCJzaGEyNTYiLCJ2YWx1ZSIsImJ5dGVzIiwiVGV4dEVuY29kZXIiLCJlbmNvZGUiLCJoYXNoQnVmZmVyIiwiY3J5cHRvIiwic3VidGxlIiwiZGlnZXN0IiwiQXJyYXkiLCJmcm9tIiwiVWludDhBcnJheSIsIm1hcCIsImJ5dGUiLCJ0b1N0cmluZyIsInBhZFN0YXJ0Iiwiam9pbiIsInJlYWRTdG9yZWRBZG1pbiIsInN0b3JlZCIsIndpbmRvdyIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImxvY2FsU3RvcmFnZSIsInVzZXIiLCJKU09OIiwicGFyc2UiLCJlbWFpbCIsInJlbW92ZUl0ZW0iLCJzdG9yZUFkbWluIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImNsZWFyU3RvcmVkQWRtaW4iLCJlbXB0eVN0YXRpY0RhdGEiLCJlbnF1aXJpZXMiLCJmb2xsb3dVcHMiLCJjb250ZW50IiwibmV3cyIsImV2ZW50IiwiZ2FsbGVyeSIsInZpZGVvIiwidGVzdGltb25pYWwiLCJ0ZWFjaGVyIiwiY3JlYXRlSWQiLCJyYW5kb21VVUlEIiwiRGF0ZSIsIm5vdyIsIk1hdGgiLCJyYW5kb20iLCJzbGljZSIsInJlYWRTdGF0aWNEYXRhIiwiZW1wdHkiLCJwYXJzZWQiLCJpc0FycmF5Iiwid3JpdGVTdGF0aWNEYXRhIiwiZGF0YSIsInJlcXVpcmVTdGF0aWNBZG1pbiIsIkVycm9yIiwidmlzaWJsZUNvbnRlbnQiLCJpdGVtcyIsImxpbWl0IiwiZmlsdGVyIiwiaXRlbSIsImlzX3Zpc2libGUiLCJzb3J0IiwiYSIsImIiLCJ0eXBlIiwicHVibGlzaGVkX2F0IiwiY3JlYXRlZF9hdCIsImdldFRpbWUiLCJkaXNwbGF5X29yZGVyIiwiZW1wdHlTdGF0cyIsImNvbnRlbnRDb3VudHMiLCJPYmplY3QiLCJlbnRyaWVzIiwidG90YWwiLCJsZW5ndGgiLCJ2aXNpYmxlIiwic3VtbWFyeSIsIm5ldyIsInN0YXR1cyIsImNvbnRhY3RlZCIsImZvbGxvd191cCIsImludGVyZXN0ZWQiLCJjb252ZXJ0ZWQiLCJjbG9zZWQiLCJieVN0YXR1cyIsImNvdW50IiwiYnlTb3VyY2UiLCJzb3VyY2UiLCJyZWNlbnQiLCJmb2xsb3dVcCIsImVucXVpcnkiLCJmaW5kIiwiaWQiLCJlbnF1aXJ5X2lkIiwibmFtZSIsIm5vcm1hbGl6ZUNvbnRlbnRJdGVtIiwicGF5bG9hZCIsImV4aXN0aW5nIiwidG9JU09TdHJpbmciLCJ0aXRsZSIsInN1YnRpdGxlIiwiYm9keSIsImltYWdlX3VybCIsImNhdGVnb3J5IiwiZmllbGRzIiwidXBkYXRlZF9hdCIsInJlcXVlc3QiLCJ1cmwiLCJpbml0IiwicmVzcG9uc2UiLCJmZXRjaCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsIkFjY2VwdCIsIm9rIiwiY29udGVudFR5cGUiLCJnZXQiLCJpbmNsdWRlcyIsImpzb24iLCJjYXRjaCIsImVycm9yIiwidW5kZWZpbmVkIiwibG9naW5BZG1pbiIsInBhc3N3b3JkIiwidGhlbiIsInBhc3N3b3JkSGFzaCIsIm5vcm1hbGl6ZWRFbWFpbCIsIm1ldGhvZCIsImdldEN1cnJlbnRBZG1pbiIsInN0b3JlZEFkbWluIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJsb2dvdXRBZG1pbiIsInN1Ym1pdEVucXVpcnkiLCJjb250YWN0IiwicGhvbmUiLCJtb2JpbGUiLCJtb2JpbGVOdW1iZXIiLCJmaXJzdF9jb250YWN0ZWRfYXQiLCJuZXh0X2ZvbGxvd191cF9hdCIsImxhc3RfZm9sbG93X3VwX2F0Iiwic3VibWl0dGVkX2RhdGEiLCJ1bnNoaWZ0IiwiZ2V0U3RhdHMiLCJnZXRFbnF1aXJpZXMiLCJwYXJhbXMiLCJzZWFyY2giLCJwYWdlIiwibWF4IiwiTnVtYmVyIiwicGFnZVNpemUiLCJtaW4iLCJmaWx0ZXJlZCIsImxvY2FsZUNvbXBhcmUiLCJvZmZzZXQiLCJwYWdlcyIsImNlaWwiLCJnZXRFbnF1aXJ5IiwidXBkYXRlRW5xdWlyeVN0YXR1cyIsImFkZEZvbGxvd1VwIiwicmVtYXJrcyIsIm5leHRfZm9sbG93X3VwX2RhdGUiLCJuZXh0Rm9sbG93VXBBdCIsImZpcnN0Q29udGFjdGVkQXQiLCJwdXNoIiwiZGVsZXRlRW5xdWlyeSIsImdldENvbnRlbnQiLCJnZXRQdWJsaWNDb250ZW50IiwiY3JlYXRlQ29udGVudCIsInVwZGF0ZUNvbnRlbnQiLCJjYW5kaWRhdGUiLCJkZWxldGVDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQU1BLG1CQUFtQjtJQUM5QjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDRCxDQUFVO0FBaUNYLE1BQU1DLGFBQWEsQUFBQyxDQUFBLFlBQVlDLEdBQUcsQ0FBQ0MsaUJBQWlCLElBQUksRUFBQyxFQUFHQyxPQUFPLENBQUMsT0FBTztBQUM1RSxNQUFNQyxhQUFhLFlBQVlILEdBQUcsQ0FBQ0ksaUJBQWlCLEtBQUs7QUFDekQsTUFBTUMsbUJBQW1CLEFBQUMsQ0FBQSxZQUFZTCxHQUFHLENBQUNNLGdCQUFnQixJQUFJLDZCQUE0QixFQUFHQyxJQUFJLEdBQUdDLFdBQVc7QUFDL0csTUFBTUMsMEJBQ0osWUFBWVQsR0FBRyxDQUFDVSwwQkFBMEIsSUFDMUM7QUFDRixNQUFNQyxrQkFBa0I7QUFDeEIsTUFBTUMsZ0JBQWdCO0FBRXRCLFNBQVNDLE9BQU9DLElBQVk7SUFDMUIsT0FBTyxHQUFHZixhQUFhZSxLQUFLQyxVQUFVLENBQUMsT0FBT0QsT0FBTyxDQUFDLENBQUMsRUFBRUEsTUFBTSxFQUFFO0FBQ25FO0FBRUEsZUFBZUUsT0FBT0MsS0FBYTtJQUNqQyxNQUFNQyxRQUFRLElBQUlDLGNBQWNDLE1BQU0sQ0FBQ0g7SUFDdkMsTUFBTUksYUFBYSxNQUFNQyxPQUFPQyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxXQUFXTjtJQUN6RCxPQUFPTyxNQUFNQyxJQUFJLENBQUMsSUFBSUMsV0FBV04sYUFDOUJPLEdBQUcsQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQyxRQUFRLENBQUMsSUFBSUMsUUFBUSxDQUFDLEdBQUcsTUFD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