import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import {
  addFollowUp,
  AdminContentItem,
  AdminContentPayload,
  AdminContentType,
  AdminUser,
  createContent,
  deleteContent,
  deleteEnquiry,
  ENQUIRY_STATUSES,
  EnquiryDetails,
  EnquiryListItem,
  EnquirySource,
  EnquiryStatus,
  FollowUp,
  getContent,
  getCurrentAdmin,
  getEnquiries,
  getEnquiry,
  getStats,
  loginAdmin,
  logoutAdmin,
  updateContent,
} from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { createNewsSlug, mergeNewsItems, newsDisplayToPayload, type NewsDisplayItem } from "@/lib/newsContent";
import { eventDateLabelToISO, eventDisplayToPayload, mergeEventItems, type EventDisplayItem } from "@/lib/eventContent";
import { mergeTestimonialItems, testimonialDisplayToPayload, type TestimonialDisplayItem } from "@/lib/testimonialContent";
import { teachers as frontendTeachers, type Teacher } from "@/pages/about/Teachers";
import { photos as frontendGalleryPhotos } from "@/pages/gallery/PhotoGallery";
import { videos as frontendGalleryVideos } from "@/pages/gallery/VideoGallery";
import sjreLogo from "@/assets/sjre.png";
import {
  ArrowDown,
  ArrowUp,
  ArrowRight,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  DoorOpen,
  FilePlus,
  GripVertical,
  Eye,
  GalleryHorizontal,
  GraduationCap,
  Home,
  Image,
  Images,
  Inbox,
  LayoutDashboard,
  Lock,
  Mail,
  Menu,
  MessageSquareQuote,
  Newspaper,
  PanelLeft,
  Phone,
  Search,
  Save,
  Trash2,
  Upload,
  UserRound,
  Users,
  Video,
  X,
  type LucideIcon,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

type Stats = Awaited<ReturnType<typeof getStats>>;
type Section =
  | "dashboard"
  | "home-enquiries"
  | "contact-enquiries"
  | "news-add"
  | "news-edit"
  | "news-list"
  | "event-add"
  | "event-edit"
  | "event-list"
  | "gallery-images"
  | "gallery-videos"
  | "testimonial-add"
  | "teacher-add"
  | "teacher-list";
type NavGroupId = "enquiries" | "news" | "events" | "gallery" | "testimonials" | "teachers";

const sourceLabels: Record<EnquirySource, string> = { home: "Home", contact: "Contact" };
const contentLabels: Record<AdminContentType, string> = {
  news: "News & Events",
  event: "Upcoming Events",
  gallery: "Gallery",
  video: "Video Gallery",
  testimonial: "Testimonials",
  teacher: "Teachers",
};

const statusStyles: Record<EnquiryStatus, string> = {
  "Not Contacted": "bg-orange-50 text-orange-700 border-orange-200",
  Called: "bg-cyan-50 text-cyan-700 border-cyan-200",
  Interested: "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Not Interested": "bg-rose-50 text-rose-700 border-rose-200",
  "Follow Up": "bg-amber-50 text-amber-700 border-amber-200",
  Admitted: "bg-green-50 text-green-700 border-green-200",
};

const emptyPayload: AdminContentPayload = {
  title: "",
  subtitle: "",
  body: "",
  image_url: "",
  category: "",
  published_at: "",
  is_visible: true,
  display_order: 0,
  fields: {},
};

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("en-IN", { day: "2-digit", month: "2-digit", year: "numeric", timeZone: "Asia/Kolkata" }).format(new Date(value));

const formatTime = (value: string) =>
  new Intl.DateTimeFormat("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true, timeZone: "Asia/Kolkata" }).format(new Date(value));

const formatDateTime = (value: string) => `${formatDate(value)} ${formatTime(value)}`;

const toDateInputValue = (value?: string | null) => (value ? new Date(value).toISOString().slice(0, 10) : "");

const toDateTimeLocalValue = (value?: string | null) => (value ? new Date(value).toISOString().slice(0, 16) : "");

const prettyField = (key: string) =>
  key.replace(/([A-Z])/g, " $1").replace(/[_-]/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

const sectionFromAdminPath = (pathname: string): Section => {
  if (pathname.startsWith("/admin/enquiries/home")) return "home-enquiries";
  if (pathname.startsWith("/admin/enquiries/contact")) return "contact-enquiries";
  if (pathname.startsWith("/admin/news/add")) return "news-add";
  if (pathname.startsWith("/admin/news/edit")) return "news-edit";
  if (pathname.startsWith("/admin/news")) return "news-list";
  if (pathname.startsWith("/admin/events/add")) return "event-add";
  if (pathname.startsWith("/admin/events/edit")) return "event-edit";
  if (pathname.startsWith("/admin/events")) return "event-list";
  if (pathname.startsWith("/admin/gallery/add-videos") || pathname.startsWith("/admin/gallery/videos")) return "gallery-videos";
  if (pathname.startsWith("/admin/gallery/add-images") || pathname.startsWith("/admin/gallery/photos")) return "gallery-images";
  if (pathname.startsWith("/admin/testimonials/add")) return "testimonial-add";
  if (pathname.startsWith("/admin/teachers/add")) return "teacher-add";
  if (pathname.startsWith("/admin/teachers")) return "teacher-list";
  return "dashboard";
};

const adminPathForSection = (section: Section) => {
  if (section === "home-enquiries") return "/admin/enquiries/home";
  if (section === "contact-enquiries") return "/admin/enquiries/contact";
  if (section === "news-add") return "/admin/news/add";
  if (section === "news-edit") return "/admin/news/edit";
  if (section === "news-list") return "/admin/news";
  if (section === "event-add") return "/admin/events/add";
  if (section === "event-edit") return "/admin/events/edit";
  if (section === "event-list") return "/admin/events";
  if (section === "gallery-images") return "/admin/gallery/add-images";
  if (section === "gallery-videos") return "/admin/gallery/add-videos";
  if (section === "testimonial-add") return "/admin/testimonials/add";
  if (section === "teacher-add") return "/admin/teachers/add";
  if (section === "teacher-list") return "/admin/teachers";
  return "/admin";
};

const groupForSection = (section: Section): NavGroupId | null => {
  if (section === "home-enquiries" || section === "contact-enquiries") return "enquiries";
  if (section === "news-add" || section === "news-edit" || section === "news-list") return "news";
  if (section === "event-add" || section === "event-edit" || section === "event-list") return "events";
  if (section === "gallery-images" || section === "gallery-videos") return "gallery";
  if (section === "testimonial-add") return "testimonials";
  if (section === "teacher-add" || section === "teacher-list") return "teachers";
  return null;
};

function AdminLogin({ onLogin }: { onLogin: (user: AdminUser) => void }) {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const result = await loginAdmin(email, password);
      onLogin(result.user);
      toast({ title: "Welcome back", description: "You are now signed in to the admin panel." });
    } catch (error) {
      toast({
        title: "Login failed",
        description: error instanceof Error ? error.message : "Please check the admin credentials.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f6f1] text-[#3b241d]">
      <div className="grid min-h-screen lg:grid-cols-[1fr_540px]">
        <div className="hidden bg-[#137a49] p-12 text-white lg:flex lg:flex-col lg:justify-between">
          <div className="flex items-center gap-4">
            <img src={sjreLogo} alt="SJRPS-HBR" className="h-16 w-16 rounded-full bg-white p-1" />
            <div>
              <h1 className="text-3xl font-bold">SJRPS-HBR Admin</h1>
              <p className="text-white/80">Content and enquiry management</p>
            </div>
          </div>
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Secure dashboard</p>
            <h2 className="text-5xl font-bold leading-tight">Manage school content with confidence.</h2>
          </div>
        </div>
        <div className="flex items-center justify-center px-6 py-12">
          <form action="" onSubmit={submit} className="w-full max-w-md rounded-lg border border-[#e5ded4] bg-white p-8 shadow-sm">
            <div className="mb-8 flex items-center gap-3">
              <img src={sjreLogo} alt="SJRPS-HBR" className="h-14 w-14 rounded-full border border-[#e5ded4] object-contain p-1" />
              <div>
                <h2 className="text-2xl font-bold">Admin Login</h2>
                <p className="text-sm text-[#6e4a3b]">SJR Public School - HBR Layout</p>
              </div>
            </div>
            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="admin-email">Username / Email</Label>
                <Input id="admin-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="admin-password">Password</Label>
                <Input id="admin-password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
              </div>
              <Button type="submit" disabled={isSubmitting} className="h-12 w-full bg-[#137a49] text-white hover:bg-[#0f663d]">
                <Lock className="mr-2 h-4 w-4" />
                {isSubmitting ? "Signing in..." : "Sign in"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const titleForSection = (section: Section) =>
  ({
    dashboard: "Dashboard",
    "home-enquiries": "Home Enquiries",
    "contact-enquiries": "Contact Enquiries",
    "news-add": "Add News",
    "news-edit": "Edit News",
    "news-list": "News Details",
    "event-add": "Add Event",
    "event-edit": "Edit Event",
    "event-list": "View Events",
    "gallery-images": "Add Images",
    "gallery-videos": "Add Videos",
    "testimonial-add": "Add Testimonials",
    "teacher-add": "Add New Teacher",
    "teacher-list": "View Teachers",
  }[section]);

function NavButton({ active, icon: Icon, label, onClick, nested = false }: { active: boolean; icon: LucideIcon; label: string; onClick: () => void; nested?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left leading-tight transition-colors ${
        active ? "bg-[#dfe8df] font-semibold text-[#137a49] shadow-[inset_3px_0_0_#137a49]" : "text-[#3b241d] hover:bg-white/70"
      } ${nested ? "text-[13px]" : "text-[14px]"}`}
    >
      <Icon className={nested ? "h-3.5 w-3.5" : "h-4 w-4"} />
      {label}
    </button>
  );
}

function NavGroup({
  id,
  icon: Icon,
  label,
  active,
  open,
  onToggle,
  children,
}: {
  id: NavGroupId;
  icon: LucideIcon;
  label: string;
  active: boolean;
  open: boolean;
  onToggle: (id: NavGroupId) => void;
  children: React.ReactNode;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={() => onToggle(id)}
        className={`flex w-full items-center justify-between rounded-md px-2.5 py-2 text-[14px] leading-tight transition-colors ${
          active ? "bg-[#dfe8df] font-semibold text-[#137a49]" : "text-[#3b241d] hover:bg-white/70"
        }`}
      >
        <span className="flex items-center gap-2.5">
          <Icon className="h-4 w-4" />
          {label}
        </span>
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`grid transition-[grid-template-rows,opacity] duration-200 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <div className="ml-5 border-l border-[#d9d0c6] pl-2.5 pt-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardHome({ onNavigate }: { onNavigate: (section: Section) => void }) {
  const [stats, setStats] = useState<Stats | null>(null);
  const [dashboardCounts, setDashboardCounts] = useState({
    newsTotal: 0,
    newsVisible: 0,
    galleryPhotos: 0,
    galleryVideos: 0,
    testimonials: 0,
    events: 0,
    teachers: 0,
  });

  useEffect(() => {
    Promise.all([
      getStats(),
      getContent("news"),
      getContent("event"),
      getContent("gallery"),
      getContent("video"),
      getContent("testimonial"),
      getContent("teacher"),
    ])
      .then(([result, newsResult, eventResult, galleryResult, videoResult, testimonialResult, teacherResult]) => {
        setStats(result);
        const newsItems = mergeNewsItems(newsResult.items);
        setDashboardCounts({
          newsTotal: newsItems.length,
          newsVisible: newsItems.filter((item) => item.isVisible).length,
          galleryPhotos: galleryResult.items.length || frontendGalleryPhotos.length,
          galleryVideos: videoResult.items.length || frontendGalleryVideos.length,
          testimonials: mergeTestimonialItems(testimonialResult.items).length,
          events: mergeEventItems(eventResult.items).length,
          teachers: mergeTeacherItems(teacherResult.items).length,
        });
      })
      .catch(() => undefined);
  }, []);

  const cards = [
    { label: "Total News", value: dashboardCounts.newsTotal, detail: "articles in the system", icon: Newspaper, tone: "green" },
    { label: "Published News", value: dashboardCounts.newsVisible, detail: "visible on the website", icon: Newspaper, tone: "gold" },
    { label: "Unpublished News", value: Math.max(0, dashboardCounts.newsTotal - dashboardCounts.newsVisible), detail: "drafts, hidden from site", icon: CalendarDays, tone: "brown" },
    { label: "Gallery Photos", value: dashboardCounts.galleryPhotos, detail: "across all categories", icon: Image, tone: "orange" },
    { label: "Video Gallery", value: dashboardCounts.galleryVideos, detail: "videos available", icon: Video, tone: "navy" },
    { label: "Testimonials", value: dashboardCounts.testimonials, detail: "on the website", icon: MessageSquareQuote, tone: "green" },
    { label: "Home Enquiries", value: stats?.bySource.find((s) => s.source === "home")?.count || 0, detail: "from homepage form", icon: Home, tone: "green" },
    { label: "Contact Enquiries", value: stats?.bySource.find((s) => s.source === "contact")?.count || 0, detail: "from contact page", icon: Mail, tone: "orange" },
    { label: "Events", value: dashboardCounts.events, detail: "upcoming homepage items", icon: CalendarDays, tone: "green" },
    { label: "Teachers", value: dashboardCounts.teachers, detail: "faculty profiles managed", icon: GraduationCap, tone: "brown" },
  ];

  return (
    <div>
      <h1 className="text-[26px] font-bold text-[#4a2b22]">Dashboard</h1>
      <p className="mt-1 text-[15px] text-[#6e4a3b]">Overview of your website content and enquiries.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {cards.map((card) => (
          <div key={card.label} className="rounded-lg border border-[#e5ded4] bg-white p-5 shadow-sm">
            <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${toneClass(card.tone)}`}>
              <card.icon className="h-5 w-5" />
            </div>
            <p className="text-[26px] font-bold leading-none">{card.value}</p>
            <p className="mt-2 text-[15px] font-bold">{card.label}</p>
            <p className="text-sm text-[#6e4a3b]">{card.detail}</p>
          </div>
        ))}
      </div>
      <div className="mt-7 rounded-lg border border-[#e5ded4] bg-white p-5">
        <h2 className="mb-5 text-lg font-bold text-[#4a2b22]">Quick actions</h2>
        <div className="grid gap-3 lg:grid-cols-2">
          {[
            { label: "Add a news article", section: "news-add" as Section },
            { label: "Upload gallery images", section: "gallery-images" as Section },
            { label: "Add a video", section: "gallery-videos" as Section },
            { label: "Add a testimonial", section: "testimonial-add" as Section },
          ].map((action) => (
            <button key={action.label} onClick={() => onNavigate(action.section)} className="flex items-center justify-between rounded-lg border border-[#e5ded4] px-4 py-3 text-left text-[15px] hover:bg-[#f8f6f1]">
              {action.label}
              <ArrowRight className="h-5 w-5 text-[#6e4a3b]" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function toneClass(tone: string) {
  return {
    green: "bg-[#e7f1eb] text-[#137a49]",
    gold: "bg-[#f6f0df] text-[#bd8708]",
    brown: "bg-[#eeeae7] text-[#6e4a3b]",
    orange: "bg-[#fff0e4] text-[#ff6b22]",
    navy: "bg-[#e6ebf3] text-[#0d2764]",
  }[tone];
}

function EnquiryManager({ source }: { source: EnquirySource }) {
  const { toast } = useToast();
  const [enquiries, setEnquiries] = useState<EnquiryListItem[]>([]);
  const [selected, setSelected] = useState<EnquiryDetails | null>(null);
  const [followUps, setFollowUps] = useState<FollowUp[]>([]);
  const [status, setStatus] = useState<"all" | EnquiryStatus>("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [setupNotice, setSetupNotice] = useState("");
  const [followUpStatus, setFollowUpStatus] = useState<EnquiryStatus>("Called");
  const [remarks, setRemarks] = useState("");
  const [firstContactedAt, setFirstContactedAt] = useState("");
  const [nextFollowUpAt, setNextFollowUpAt] = useState("");

  const query = useMemo(() => {
    const params = new URLSearchParams({ source, status, sort, page: String(page), pageSize: "10" });
    if (search) params.set("search", search);
    return params;
  }, [page, search, sort, source, status]);

  const load = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await getEnquiries(query);
      setEnquiries(result.enquiries);
      setPages(result.pages);
      setTotal(result.total);
      setSetupNotice("");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Check API/database configuration.";
      if (message.toLowerCase().includes("database is not configured")) {
        setEnquiries([]);
        setPages(1);
        setTotal(0);
        setSetupNotice("Database credentials are not configured yet. Add the PostgreSQL password to the server .env file to load live enquiries.");
      } else {
        toast({ title: "Unable to load enquiries", description: message, variant: "destructive" });
      }
    } finally {
      setIsLoading(false);
    }
  }, [query, toast]);

  useEffect(() => { load(); }, [load]);

  const openEnquiry = async (id: string) => {
    try {
      const detail = await getEnquiry(id);
      setSelected(detail.enquiry);
      setFollowUps([...detail.followUps].sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()));
      setFollowUpStatus(detail.enquiry.status);
      setRemarks("");
      setFirstContactedAt(toDateInputValue(detail.enquiry.first_contacted_at));
      setNextFollowUpAt(toDateTimeLocalValue(detail.enquiry.next_follow_up_at));
    } catch (error) {
      toast({ title: "Unable to open enquiry", description: error instanceof Error ? error.message : "Please try again.", variant: "destructive" });
    }
  };

  const saveFollowUp = async () => {
    if (!selected) return;
    try {
      await addFollowUp(selected.id, { status: followUpStatus, remarks, firstContactedAt, nextFollowUpAt });
      const detail = await getEnquiry(selected.id);
      setSelected(detail.enquiry);
      setFollowUps([...detail.followUps].sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()));
      setRemarks("");
      setFirstContactedAt(toDateInputValue(detail.enquiry.first_contacted_at));
      setNextFollowUpAt(toDateTimeLocalValue(detail.enquiry.next_follow_up_at));
      await load();
      toast({ title: "Follow-up saved" });
    } catch (error) {
      toast({ title: "Unable to save follow-up", description: error instanceof Error ? error.message : "Please try again.", variant: "destructive" });
    }
  };

  const remove = async (enquiry: EnquiryListItem | EnquiryDetails) => {
    if (!window.confirm("Are you sure you want to delete this enquiry? This action cannot be undone.")) return;
    await deleteEnquiry(enquiry.id);
    setSelected(null);
    await load();
    toast({ title: "Enquiry deleted" });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#4a2b22]">{sourceLabels[source]} Enquiries</h1>
      <p className="mt-2 text-[#6e4a3b]">{total} records from the {sourceLabels[source].toLowerCase()} form.</p>
      {setupNotice && (
        <div className="mt-5 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          {setupNotice}
        </div>
      )}
      <div className="mt-6 rounded-lg border border-[#e5ded4] bg-white">
        <div className="grid gap-3 border-b border-[#e5ded4] p-5 md:grid-cols-3">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-[#6e4a3b]" />
            <Input value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} placeholder="Search name, contact, email" className="pl-9" />
          </div>
          <Select value={status} onValueChange={(value) => { setStatus(value as "all" | EnquiryStatus); setPage(1); }}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All statuses</SelectItem>
              {ENQUIRY_STATUSES.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">Latest enquiry</SelectItem>
              <SelectItem value="oldest">Oldest enquiry</SelectItem>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="status">Status</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead><TableHead>Name</TableHead><TableHead>Contact</TableHead><TableHead>Email</TableHead><TableHead>Status</TableHead><TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? <TableRow><TableCell colSpan={6} className="py-10 text-center">Loading...</TableCell></TableRow> : enquiries.length === 0 ? <TableRow><TableCell colSpan={6} className="py-10 text-center">No enquiries found.</TableCell></TableRow> : enquiries.map((enquiry) => (
              <TableRow key={enquiry.id}>
                <TableCell><div>{formatDate(enquiry.created_at)}</div><div className="text-xs text-[#6e4a3b]">{formatTime(enquiry.created_at)}</div></TableCell>
                <TableCell className="font-medium">{enquiry.name}</TableCell>
                <TableCell>{enquiry.contact || "-"}</TableCell>
                <TableCell>{enquiry.email}</TableCell>
                <TableCell><Badge variant="outline" className={statusStyles[enquiry.status]}>{enquiry.status}</Badge></TableCell>
                <TableCell><div className="flex justify-end gap-2"><Button variant="outline" size="sm" onClick={() => openEnquiry(enquiry.id)}><Eye className="mr-1 h-4 w-4" />View</Button><Button variant="destructive" size="sm" onClick={() => remove(enquiry)}><Trash2 className="mr-1 h-4 w-4" />Delete</Button></div></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex items-center justify-between border-t border-[#e5ded4] p-4">
          <span className="text-sm text-[#6e4a3b]">Page {page} of {pages}</span>
          <div className="flex gap-2">
            <Button variant="outline" disabled={page <= 1} onClick={() => setPage(page - 1)}><ChevronLeft className="h-4 w-4" /></Button>
            <Button variant="outline" disabled={page >= pages} onClick={() => setPage(page + 1)}><ChevronRight className="h-4 w-4" /></Button>
          </div>
        </div>
      </div>
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-h-[92vh] max-w-2xl overflow-y-auto">
          <DialogHeader><DialogTitle className="text-2xl">Enquiry Details</DialogTitle></DialogHeader>
          {selected && (
            <div className="space-y-6">
              <section>
                <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-[#6e4a3b]">Original Enquiry</h4>
                <div className="rounded-2xl border border-[#e5ded4] p-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-sm text-[#6e4a3b]">Name</p>
                      <p className="text-lg font-semibold">{selected.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#6e4a3b]">Status</p>
                      <Badge variant="outline" className={statusStyles[selected.status]}>{selected.status}</Badge>
                    </div>
                    <div>
                      <p className="text-sm text-[#6e4a3b]">Contact</p>
                      <p className="text-lg font-semibold">{selected.contact || "-"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#6e4a3b]">Email</p>
                      <p className="break-words text-lg font-semibold">{selected.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#6e4a3b]">Date</p>
                      <p className="font-semibold">{formatDate(selected.created_at)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#6e4a3b]">Time</p>
                      <p className="font-semibold">{formatTime(selected.created_at)}</p>
                    </div>
                  </div>
                  {Object.entries(selected.submitted_data || {}).filter(([key]) => !["name", "contact", "phone", "mobile", "mobileNumber", "email"].includes(key)).map(([key, value]) => (
                    <div key={key} className="mt-4">
                      <p className="text-sm text-[#6e4a3b]">{prettyField(key)}</p>
                      <p className="whitespace-pre-wrap break-words text-lg">{String(value || "-")}</p>
                    </div>
                  ))}
                  <Button variant="outline" className="mt-5"><MessageSquareQuote className="mr-2 h-4 w-4" />Draft Reply</Button>
                </div>
              </section>

              <section>
                <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-[#6e4a3b]">Follow-Up Management</h4>
                <div className="rounded-2xl border border-[#e5ded4] p-4">
                  <div className="space-y-4">
                    <div>
                      <Label>Status</Label>
                      <Select value={followUpStatus} onValueChange={(value) => setFollowUpStatus(value as EnquiryStatus)}>
                        <SelectTrigger className="mt-2"><SelectValue /></SelectTrigger>
                        <SelectContent>{ENQUIRY_STATUSES.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label>Date of First Contact</Label>
                        <Input className="mt-2" type="date" value={firstContactedAt} onChange={(e) => setFirstContactedAt(e.target.value)} />
                      </div>
                      <div>
                        <Label>Next Follow-Up</Label>
                        <Input className="mt-2" type="datetime-local" value={nextFollowUpAt} onChange={(e) => setNextFollowUpAt(e.target.value)} />
                      </div>
                    </div>
                    <div>
                      <Label>Note</Label>
                      <Textarea
                        className="mt-2 min-h-28"
                        value={remarks}
                        onChange={(e) => setRemarks(e.target.value)}
                        placeholder="Conversation details, requirements, next steps..."
                      />
                    </div>
                    <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                      <Button variant="outline" onClick={() => selected && openEnquiry(selected.id)}>Cancel</Button>
                      <Button onClick={saveFollowUp} className="bg-[#137a49] hover:bg-[#0f663d]">Save Follow-Up</Button>
                    </div>
                  </div>
                </div>
              </section>

              <section className="rounded-2xl border border-[#e5ded4]">
                <h4 className="border-b border-[#e5ded4] px-4 py-3 font-semibold">Follow-Up History</h4>
                {followUps.length === 0 ? <p className="p-4 text-sm text-[#6e4a3b]">No follow-up activity recorded.</p> : followUps.map((followUp) => (
                    <div key={followUp.id} className="border-b border-[#e5ded4] p-4 last:border-b-0">
                      <div className="flex items-center justify-between gap-3"><Badge variant="outline" className={statusStyles[followUp.status]}>{followUp.status}</Badge><span className="text-xs">{formatDateTime(followUp.created_at)}</span></div>
                      <p className="mt-2 text-sm">{followUp.remarks}</p>
                      <p className="mt-1 text-xs text-[#6e4a3b]">Next follow-up: {followUp.next_follow_up_at ? formatDateTime(followUp.next_follow_up_at) : followUp.next_follow_up_date ? formatDate(followUp.next_follow_up_date) : "-"}</p>
                    </div>
                ))}
              </section>
              <Button variant="destructive" className="w-full" onClick={() => remove(selected)}>Delete Enquiry</Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function ContentManager({ type, autoOpenKey }: { type: AdminContentType; autoOpenKey?: string }) {
  const { toast } = useToast();
  const [items, setItems] = useState<AdminContentItem[]>([]);
  const [editing, setEditing] = useState<AdminContentItem | null>(null);
  const [form, setForm] = useState<AdminContentPayload>(emptyPayload);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const load = useCallback(async () => {
    try {
      const result = await getContent(type);
      setItems(result.items);
    } catch (error) {
      toast({ title: `Unable to load ${contentLabels[type]}`, description: error instanceof Error ? error.message : "Check API/database configuration.", variant: "destructive" });
    }
  }, [toast, type]);

  useEffect(() => { load(); }, [load]);
  useEffect(() => {
    if (autoOpenKey) {
      setEditing(null);
      setForm({ ...emptyPayload, display_order: type === "teacher" ? items.length + 1 : 0 });
      setOpen(true);
    }
  }, [autoOpenKey, items.length, type]);

  const visibleItems = items.filter((item) => [item.title, item.subtitle, item.category].join(" ").toLowerCase().includes(search.toLowerCase()));

  const startAdd = () => {
    setEditing(null);
    setForm({ ...emptyPayload, display_order: type === "teacher" ? items.length + 1 : 0 });
    setOpen(true);
  };

  const startEdit = (item: AdminContentItem) => {
    setEditing(item);
    setForm({
      title: item.title,
      subtitle: item.subtitle || "",
      body: item.body || "",
      image_url: item.image_url || "",
      category: item.category || "",
      published_at: item.published_at || "",
      is_visible: item.is_visible,
      display_order: item.display_order || 0,
      fields: item.fields || {},
    });
    setOpen(true);
  };

  const save = async () => {
    try {
      if (editing) await updateContent(type, editing.id, form);
      else await createContent(type, form);
      setOpen(false);
      await load();
      toast({ title: `${contentLabels[type]} saved` });
    } catch (error) {
      toast({ title: "Unable to save", description: error instanceof Error ? error.message : "Please try again.", variant: "destructive" });
    }
  };

  const remove = async (item: AdminContentItem) => {
    if (!window.confirm("Are you sure you want to delete this item? This action cannot be undone.")) return;
    await deleteContent(type, item.id);
    await load();
    toast({ title: "Item deleted" });
  };

  const toPayload = (item: AdminContentItem, displayOrder = item.display_order): AdminContentPayload => ({
    title: item.title,
    subtitle: item.subtitle || "",
    body: item.body || "",
    image_url: item.image_url || "",
    category: item.category || "",
    published_at: item.published_at || "",
    is_visible: item.is_visible,
    display_order: displayOrder,
    fields: item.fields || {},
  });

  const moveTeacher = async (item: AdminContentItem, direction: -1 | 1) => {
    const index = visibleItems.findIndex((candidate) => candidate.id === item.id);
    const swap = visibleItems[index + direction];
    if (!swap) return;
    try {
      await Promise.all([
        updateContent(type, item.id, toPayload(item, index + direction + 1)),
        updateContent(type, swap.id, toPayload(swap, index + 1)),
      ]);
      await load();
      toast({ title: "Teacher order updated" });
    } catch (error) {
      toast({ title: "Unable to reorder teachers", description: error instanceof Error ? error.message : "Please try again.", variant: "destructive" });
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-[26px] font-bold text-[#4a2b22]">{contentLabels[type]}</h1>
          <p className="mt-1 text-sm text-[#6e4a3b]">Add, edit, publish, hide, and delete website content.</p>
        </div>
        <Button onClick={startAdd} className="bg-[#137a49] hover:bg-[#0f663d]">Add {type === "teacher" ? "teacher" : type === "testimonial" ? "testimonial" : "item"}</Button>
      </div>
      <div className="mt-6 rounded-lg border border-[#e5ded4] bg-white">
        <div className="border-b border-[#e5ded4] p-5">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-[#6e4a3b]" />
            <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={`Search ${contentLabels[type].toLowerCase()}`} className="pl-9" />
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow><TableHead>Title / Name</TableHead><TableHead>Category</TableHead><TableHead>Date</TableHead><TableHead>Visible</TableHead><TableHead>Order</TableHead><TableHead className="text-right">Action</TableHead></TableRow>
          </TableHeader>
          <TableBody>
            {visibleItems.length === 0 ? <TableRow><TableCell colSpan={6} className="py-10 text-center">No records yet.</TableCell></TableRow> : visibleItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell><p className="font-medium">{item.title}</p><p className="text-sm text-[#6e4a3b]">{item.subtitle}</p></TableCell>
                <TableCell>{item.category || "-"}</TableCell>
                <TableCell>{item.published_at ? formatDate(item.published_at) : "-"}</TableCell>
                <TableCell><Badge variant="outline" className={item.is_visible ? "border-green-200 bg-green-50 text-green-700" : "border-slate-200 bg-slate-100 text-slate-600"}>{item.is_visible ? "Visible" : "Hidden"}</Badge></TableCell>
                <TableCell>{item.display_order}</TableCell>
                <TableCell>
                  <div className="flex justify-end gap-2">
                    {type === "teacher" && (
                      <>
                        <Button variant="outline" size="sm" onClick={() => moveTeacher(item, -1)}>Up</Button>
                        <Button variant="outline" size="sm" onClick={() => moveTeacher(item, 1)}>Down</Button>
                      </>
                    )}
                    <Button variant="outline" size="sm" onClick={() => startEdit(item)}>Edit</Button>
                    <Button variant="destructive" size="sm" onClick={() => remove(item)}>Delete</Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[92vh] max-w-3xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editing ? "Edit" : "Add"} {contentLabels[type]}</DialogTitle>
            <DialogDescription>Use image URLs or uploaded-media URLs from your production media storage.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2 md:col-span-2"><Label>{type === "teacher" ? "Name" : "Title"}</Label><Input value={form.title || ""} onChange={(e) => setForm({ ...form, title: e.target.value })} /></div>
            <div className="space-y-2"><Label>{type === "teacher" ? "Designation" : "Subtitle"}</Label><Input value={form.subtitle || ""} onChange={(e) => setForm({ ...form, subtitle: e.target.value })} /></div>
            <div className="space-y-2"><Label>{type === "teacher" ? "Department / Subject" : "Category"}</Label><Input value={form.category || ""} onChange={(e) => setForm({ ...form, category: e.target.value })} /></div>
            <div className="space-y-2"><Label>Image URL</Label><Input value={form.image_url || ""} onChange={(e) => setForm({ ...form, image_url: e.target.value })} /></div>
            <div className="space-y-2"><Label>{type === "news" ? "Publication Date" : "Date"}</Label><Input type="date" value={form.published_at || ""} onChange={(e) => setForm({ ...form, published_at: e.target.value })} /></div>
            <div className="space-y-2"><Label>Display Order</Label><Input type="number" value={form.display_order || 0} onChange={(e) => setForm({ ...form, display_order: Number(e.target.value) })} /></div>
            <div className="flex items-center gap-3 pt-7"><Switch checked={form.is_visible !== false} onCheckedChange={(checked) => setForm({ ...form, is_visible: checked })} /><Label>Visible on website</Label></div>
            <div className="space-y-2 md:col-span-2"><Label>{type === "testimonial" ? "Feedback / Testimonial" : type === "teacher" ? "Qualification / Bio" : "Description / Body"}</Label><Textarea rows={6} value={form.body || ""} onChange={(e) => setForm({ ...form, body: e.target.value })} /></div>
          </div>
          <div className="flex justify-end gap-3"><Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button><Button className="bg-[#137a49] hover:bg-[#0f663d]" onClick={save}>Save</Button></div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function NewsDetailsManager({ onAdd, onEdit }: { onAdd: () => void; onEdit: (item: NewsDisplayItem) => void }) {
  const { toast } = useToast();
  const [adminItems, setAdminItems] = useState<AdminContentItem[]>([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const load = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await getContent("news");
      setAdminItems(result.items);
    } catch (error) {
      toast({ title: "Unable to load news", description: error instanceof Error ? error.message : "Check API/database configuration.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  }, [toast]);

  useEffect(() => { load(); }, [load]);

  const items = useMemo(() => {
    const query = search.trim().toLowerCase();
    return mergeNewsItems(adminItems).filter((item) =>
      [item.title, item.summary, item.date, item.slug].join(" ").toLowerCase().includes(query)
    );
  }, [adminItems, search]);

  const remove = async (item: NewsDisplayItem) => {
    if (!item.adminItem) return;
    if (!window.confirm("Are you sure you want to delete this News item?")) return;
    try {
      await deleteContent("news", item.adminItem.id);
      await load();
      toast({ title: "News item deleted" });
    } catch (error) {
      toast({ title: "Unable to delete news", description: error instanceof Error ? error.message : "Please try again.", variant: "destructive" });
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-[26px] font-bold text-[#4a2b22]">News Details</h1>
          <p className="mt-1 text-sm text-[#6e4a3b]">
            Showing all news currently used by the frontend, sorted latest to oldest.
          </p>
        </div>
        <Button onClick={onAdd} className="bg-[#137a49] hover:bg-[#0f663d]">
          <FilePlus className="mr-2 h-4 w-4" />
          Add News
        </Button>
      </div>

      <div className="mt-6 rounded-lg border border-[#e5ded4] bg-white">
        <div className="border-b border-[#e5ded4] p-5">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-[#6e4a3b]" />
            <Input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search news title, date, or slug" className="pl-9" />
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>News</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow><TableCell colSpan={5} className="py-10 text-center">Loading news...</TableCell></TableRow>
            ) : items.length === 0 ? (
              <TableRow><TableCell colSpan={5} className="py-10 text-center">No news found.</TableCell></TableRow>
            ) : items.map((item) => (
              <TableRow key={item.key}>
                <TableCell>
                  <div className="flex max-w-2xl gap-4">
                    <img src={item.image} alt="" className="h-20 w-28 rounded-md object-cover" />
                    <div>
                      <p className="font-semibold text-[#3b241d]">{item.title}</p>
                      <p className="mt-1 line-clamp-2 text-sm text-[#6e4a3b]">{item.summary}</p>
                      <p className="mt-1 text-xs text-[#9a7a69]">/{item.slug}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{item.date || "-"}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={item.source === "database" ? "border-green-200 bg-green-50 text-green-700" : "border-amber-200 bg-amber-50 text-amber-800"}>
                    {item.source === "database" ? "Database" : "Frontend"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={item.isVisible ? "border-green-200 bg-green-50 text-green-700" : "border-slate-200 bg-slate-100 text-slate-600"}>
                    {item.isVisible ? "Published" : "Draft"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm" onClick={() => onEdit(item)}>Edit</Button>
                    <Button variant="destructive" size="sm" disabled={!item.adminItem} title={!item.adminItem ? "Frontend source records are preserved; edit to create a managed database version." : undefined} onClick={() => remove(item)}>
                      <Trash2 className="mr-1 h-4 w-4" />
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

function NewsFormPage({ editing, onCancel, onSaved }: { editing: NewsDisplayItem | null; onCancel: () => void; onSaved: () => void }) {
  const { toast } = useToast();
  const initialPayload = useMemo(() => editing ? newsDisplayToPayload(editing) : { ...emptyPayload, fields: { slug: "" } }, [editing]);
  const [form, setForm] = useState<AdminContentPayload>(initialPayload);
  const [slug, setSlug] = useState(() => typeof initialPayload.fields?.slug === "string" ? initialPayload.fields.slug : "");
  const [galleryImages, setGalleryImages] = useState<string[]>(() => ((initialPayload.fields?.gallery as string[] | undefined) || []).filter(Boolean));
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setForm(initialPayload);
    setSlug(typeof initialPayload.fields?.slug === "string" ? initialPayload.fields.slug : "");
    setGalleryImages(((initialPayload.fields?.gallery as string[] | undefined) || []).filter(Boolean));
  }, [initialPayload]);

  const updateTitle = (value: string) => {
    const previousAutoSlug = createNewsSlug(form.title || "");
    setForm((current) => ({ ...current, title: value }));
    if (!editing && (!slug || slug === previousAutoSlug)) setSlug(createNewsSlug(value));
  };

  const chooseNewsImage = async (files: FileList | null) => {
    const file = Array.from(files || []).find((candidate) => candidate.type.startsWith("image/"));
    if (!file) return;
    try {
      const [image] = await readImageFiles([file]);
      setForm((current) => ({ ...current, image_url: image.src }));
    } catch (error) {
      toast({ title: "Unable to process image", description: error instanceof Error ? error.message : "Please try a different image file.", variant: "destructive" });
    }
  };

  const chooseAdditionalImages = async (files: FileList | null) => {
    const imageFiles = Array.from(files || []).filter((candidate) => candidate.type.startsWith("image/"));
    if (!imageFiles.length) return;
    try {
      const images = await readImageFiles(imageFiles);
      setGalleryImages((current) => [...current, ...images.map((image) => image.src)]);
    } catch (error) {
      toast({ title: "Unable to process images", description: error instanceof Error ? error.message : "Please try different image files.", variant: "destructive" });
    }
  };

  const replaceAdditionalImage = async (index: number, files: FileList | null) => {
    const file = Array.from(files || []).find((candidate) => candidate.type.startsWith("image/"));
    if (!file) return;
    try {
      const [image] = await readImageFiles([file]);
      setGalleryImages((current) => current.map((item, itemIndex) => itemIndex === index ? image.src : item));
    } catch (error) {
      toast({ title: "Unable to process image", description: error instanceof Error ? error.message : "Please try a different image file.", variant: "destructive" });
    }
  };

  const removeAdditionalImage = (index: number) => {
    setGalleryImages((current) => current.filter((_, itemIndex) => itemIndex !== index));
  };

  const moveAdditionalImage = (index: number, direction: -1 | 1) => {
    setGalleryImages((current) => {
      const nextIndex = index + direction;
      if (nextIndex < 0 || nextIndex >= current.length) return current;
      const next = [...current];
      [next[index], next[nextIndex]] = [next[nextIndex], next[index]];
      return next;
    });
  };

  const save = async (publish: boolean) => {
    const cleanSlug = createNewsSlug(slug || form.title || "");
    const gallery = galleryImages.filter(Boolean);
    if (!form.title?.trim() || !cleanSlug || !form.published_at || !form.body?.trim()) {
      toast({ title: "Complete required fields", description: "Title, URL slug, date, and content are required.", variant: "destructive" });
      return;
    }

    const payload: AdminContentPayload = {
      ...form,
      title: form.title.trim(),
      subtitle: form.subtitle?.trim() || "",
      body: form.body.trim(),
      image_url: form.image_url?.trim() || "",
      category: form.category?.trim() || "",
      is_visible: publish,
      fields: {
        ...(form.fields || {}),
        slug: cleanSlug,
        gallery,
      },
    };

    setIsSaving(true);
    try {
      if (editing?.adminItem) await updateContent("news", editing.adminItem.id, payload);
      else await createContent("news", payload);
      toast({ title: publish ? "News published" : "News saved as draft" });
      onSaved();
    } catch (error) {
      toast({ title: "Unable to save news", description: error instanceof Error ? error.message : "Please try again.", variant: "destructive" });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-[26px] font-bold text-[#4a2b22]">{editing ? "Edit News" : "Add News"}</h1>
        <p className="mt-1 text-sm text-[#6e4a3b]">
          {editing ? "Update the selected news item without changing unrelated records." : "Create a new news article or announcement for the website."}
        </p>
      </div>

      <div className="max-w-5xl rounded-2xl border border-[#e5ded4] bg-white p-6 shadow-sm">
        <h2 className="text-base font-bold text-[#22130f]">Article details</h2>
        <div className="mt-7 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="news-title">Title <span className="text-red-600">*</span></Label>
              <Input id="news-title" value={form.title || ""} onChange={(event) => updateTitle(event.target.value)} placeholder="Annual Sports Day 2026" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="news-slug">URL Slug <span className="text-red-600">*</span></Label>
              <Input id="news-slug" value={slug} onChange={(event) => setSlug(createNewsSlug(event.target.value))} placeholder="annual-sports-day-2026" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="news-date">Date <span className="text-red-600">*</span></Label>
              <Input id="news-date" type="date" value={form.published_at || ""} onChange={(event) => setForm({ ...form, published_at: event.target.value })} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="news-summary">Short Summary</Label>
                <span className="text-xs text-[#6e4a3b]">{(form.subtitle || "").length}/150</span>
              </div>
              <Textarea id="news-summary" maxLength={150} rows={3} value={form.subtitle || ""} onChange={(event) => setForm({ ...form, subtitle: event.target.value })} placeholder="A concise 1-2 line summary shown on the News Card" />
              <p className="text-xs text-[#6e4a3b]">Keep it short. This appears on the News Card.</p>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="news-image">Featured Image</Label>
            <div className="rounded-lg border border-dashed border-[#dccfc1] p-4">
              {form.image_url ? (
                <img src={form.image_url} alt="" className="mb-4 h-44 w-full rounded-md object-cover" />
              ) : (
                <div className="flex h-40 flex-col items-center justify-center rounded-md bg-[#faf9f6] text-center text-sm text-[#6e4a3b]">
                  <Image className="mb-3 h-8 w-8" />
                  Upload an image used by the news card and detail gallery
                </div>
              )}
              <div className="mt-4 flex flex-wrap gap-3">
                <label className="inline-flex cursor-pointer items-center rounded-md border border-[#d8cec3] px-4 py-2 text-sm font-medium hover:bg-[#faf9f6]">
                  <Upload className="mr-2 h-4 w-4" />
                  {form.image_url ? "Replace image" : "Upload image"}
                  <input className="sr-only" type="file" accept="image/*" onChange={(event) => chooseNewsImage(event.target.files)} />
                </label>
                {form.image_url && (
                  <Button type="button" variant="outline" onClick={() => setForm({ ...form, image_url: "" })}>
                    <Trash2 className="mr-2 h-4 w-4" />Remove
                  </Button>
                )}
              </div>
              <Input id="news-image" className="mt-4" value={form.image_url || ""} onChange={(event) => setForm({ ...form, image_url: event.target.value })} placeholder="Uploaded image data or existing image URL" />
            </div>
          </div>
        </div>

        <div className="mt-7 space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="news-body">Content <span className="text-red-600">*</span></Label>
            <Badge variant="outline" className="border-[#e5ded4] bg-[#faf9f6] text-[#6e4a3b]">Paragraphs supported</Badge>
          </div>
          <div className="overflow-hidden rounded-md border border-[#d8cec3]">
            <div className="flex h-11 items-center gap-1 border-b border-[#d8cec3] bg-[#faf9f6] px-3 text-sm text-[#3b241d]">
              <span className="rounded px-2 py-1 font-semibold">Normal</span>
              <span className="rounded px-2 py-1 font-bold">B</span>
              <span className="rounded px-2 py-1 italic">I</span>
              <span className="rounded px-2 py-1 underline">U</span>
            </div>
            <Textarea id="news-body" rows={8} value={form.body || ""} onChange={(event) => setForm({ ...form, body: event.target.value })} placeholder="Write the full article here..." className="min-h-52 rounded-none border-0 focus-visible:ring-0" />
          </div>
        </div>

        <div className="mt-7 space-y-4">
          <div>
            <h3 className="font-bold text-[#22130f]">Additional Images (News Details page gallery)</h3>
            <p className="mt-1 text-sm text-[#6e4a3b]">These appear only inside the News Details page gallery and do not replace the featured image.</p>
          </div>
          <label className="flex min-h-36 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-[#dccfc1] bg-[#fffdf9] px-4 py-8 text-center text-[#6e4a3b] hover:bg-[#faf9f6]">
            <Upload className="mb-3 h-8 w-8" />
            <span className="font-semibold">Click to select additional images</span>
            <span className="mt-1 text-xs">Multiple images allowed. Images are automatically optimized below 150 KB each.</span>
            <input className="sr-only" type="file" accept="image/*" multiple onChange={(event) => chooseAdditionalImages(event.target.files)} />
          </label>
          {galleryImages.length > 0 && (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {galleryImages.map((image, index) => (
                <div key={`${image.slice(0, 40)}-${index}`} className="overflow-hidden rounded-lg border border-[#e5ded4] bg-white">
                  <img src={image} alt={`Additional gallery ${index + 1}`} className="aspect-[4/3] w-full object-cover" />
                  <div className="space-y-3 p-3">
                    <div className="flex items-center justify-between text-xs font-semibold text-[#6e4a3b]">
                      <span>Image {index + 1}</span>
                      <span>{index + 1} / {galleryImages.length}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Button type="button" variant="outline" size="sm" disabled={index === 0} onClick={() => moveAdditionalImage(index, -1)} aria-label={`Move image ${index + 1} left`}><ArrowUp className="h-4 w-4" /></Button>
                      <Button type="button" variant="outline" size="sm" disabled={index === galleryImages.length - 1} onClick={() => moveAdditionalImage(index, 1)} aria-label={`Move image ${index + 1} right`}><ArrowDown className="h-4 w-4" /></Button>
                    </div>
                    <div className="flex gap-2">
                      <label className="inline-flex flex-1 cursor-pointer items-center justify-center rounded-md border border-[#d8cec3] px-3 py-2 text-sm font-medium hover:bg-[#faf9f6]">
                        Replace
                        <input className="sr-only" type="file" accept="image/*" onChange={(event) => replaceAdditionalImage(index, event.target.files)} />
                      </label>
                      <Button type="button" variant="outline" size="sm" className="text-red-600" onClick={() => removeAdditionalImage(index)}><Trash2 className="h-4 w-4" /></Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-7 flex flex-col-reverse gap-3 border-t border-[#e5ded4] pt-5 sm:flex-row sm:justify-end">
          <Button variant="outline" onClick={onCancel} disabled={isSaving}>Cancel</Button>
          <Button variant="outline" onClick={() => save(false)} disabled={isSaving}>Save as Draft</Button>
          <Button className="bg-[#137a49] hover:bg-[#0f663d]" onClick={() => save(true)} disabled={isSaving}>Publish</Button>
        </div>
      </div>
    </div>
  );
}

function EventDetailsManager({ onAdd, onEdit }: { onAdd: () => void; onEdit: (item: EventDisplayItem) => void }) {
  const { toast } = useToast();
  const [adminItems, setAdminItems] = useState<AdminContentItem[]>([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const load = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await getContent("event");
      setAdminItems(result.items);
    } catch (error) {
      toast({ title: "Unable to load events", description: error instanceof Error ? error.message : "Check API/database configuration.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  }, [toast]);

  useEffect(() => { load(); }, [load]);

  const items = useMemo(() => {
    const query = search.trim().toLowerCase();
    return mergeEventItems(adminItems).filter((item) =>
      [item.title, item.date].join(" ").toLowerCase().includes(query)
    );
  }, [adminItems, search]);

  const remove = async (item: EventDisplayItem) => {
    if (!item.adminItem) return;
    if (!window.confirm("Are you sure you want to delete this Event item?")) return;
    try {
      await deleteContent("event", item.adminItem.id);
      await load();
      toast({ title: "Event deleted" });
    } catch (error) {
      toast({ title: "Unable to delete event", description: error instanceof Error ? error.message : "Please try again.", variant: "destructive" });
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-[26px] font-bold text-[#4a2b22]">View Events</h1>
          <p className="mt-1 text-sm text-[#6e4a3b]">
            Showing homepage upcoming events and database events, sorted latest to oldest.
          </p>
        </div>
        <Button onClick={onAdd} className="bg-[#137a49] hover:bg-[#0f663d]">
          <FilePlus className="mr-2 h-4 w-4" />
          Add Event
        </Button>
      </div>

      <div className="mt-6 rounded-lg border border-[#e5ded4] bg-white">
        <div className="border-b border-[#e5ded4] p-5">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-[#6e4a3b]" />
            <Input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search event title or date" className="pl-9" />
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Event Title</TableHead>
              <TableHead>Date / Range</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Order</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow><TableCell colSpan={6} className="py-10 text-center">Loading events...</TableCell></TableRow>
            ) : items.length === 0 ? (
              <TableRow><TableCell colSpan={6} className="py-10 text-center">No events found.</TableCell></TableRow>
            ) : items.map((item) => (
              <TableRow key={item.key}>
                <TableCell className="font-semibold text-[#3b241d]">{item.title}</TableCell>
                <TableCell>{item.date || "-"}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={item.source === "database" ? "border-green-200 bg-green-50 text-green-700" : "border-amber-200 bg-amber-50 text-amber-800"}>
                    {item.source === "database" ? "Database" : "Homepage"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={item.isVisible ? "border-green-200 bg-green-50 text-green-700" : "border-slate-200 bg-slate-100 text-slate-600"}>
                    {item.isVisible ? "Published" : "Draft"}
                  </Badge>
                </TableCell>
                <TableCell>{item.displayOrder || "Auto"}</TableCell>
                <TableCell>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm" onClick={() => onEdit(item)}>Edit</Button>
                    <Button variant="destructive" size="sm" disabled={!item.adminItem} title={!item.adminItem ? "Homepage source events are preserved; edit to create a managed database version." : undefined} onClick={() => remove(item)}>
                      <Trash2 className="mr-1 h-4 w-4" />
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

function EventFormPage({ editing, onCancel, onSaved }: { editing: EventDisplayItem | null; onCancel: () => void; onSaved: () => void }) {
  const { toast } = useToast();
  const initialPayload = useMemo(() => editing ? eventDisplayToPayload(editing) : { ...emptyPayload, is_visible: true, fields: { dateLabel: "" } }, [editing]);
  const [form, setForm] = useState<AdminContentPayload>(initialPayload);
  const [dateLabel, setDateLabel] = useState(() => typeof initialPayload.fields?.dateLabel === "string" ? initialPayload.fields.dateLabel : "");
  const [status, setStatus] = useState(initialPayload.is_visible === false ? "draft" : "published");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setForm(initialPayload);
    setDateLabel(typeof initialPayload.fields?.dateLabel === "string" ? initialPayload.fields.dateLabel : "");
    setStatus(initialPayload.is_visible === false ? "draft" : "published");
  }, [initialPayload]);

  const save = async () => {
    const sortDate = eventDateLabelToISO(dateLabel);
    if (!form.title?.trim() || !dateLabel.trim() || !sortDate) {
      toast({ title: "Complete required fields", description: "Event title and a valid event date/date range are required.", variant: "destructive" });
      return;
    }

    const payload: AdminContentPayload = {
      ...form,
      title: form.title.trim(),
      subtitle: "",
      body: "",
      image_url: "",
      category: "",
      published_at: sortDate,
      is_visible: status === "published",
      display_order: Number(form.display_order || 0),
      fields: {
        ...(form.fields || {}),
        dateLabel: dateLabel.trim(),
      },
    };

    setIsSaving(true);
    try {
      if (editing?.adminItem) await updateContent("event", editing.adminItem.id, payload);
      else await createContent("event", payload);
      toast({ title: "Event saved" });
      onSaved();
    } catch (error) {
      toast({ title: "Unable to save event", description: error instanceof Error ? error.message : "Please try again.", variant: "destructive" });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-[26px] font-bold text-[#4a2b22]">{editing ? "Edit Event" : "Add Event"}</h1>
        <p className="mt-1 text-sm text-[#6e4a3b]">
          {editing ? "Update the selected homepage upcoming event." : "Add a homepage upcoming event and choose whether it appears immediately."}
        </p>
      </div>

      <div className="rounded-2xl border border-[#e5ded4] bg-white p-6 shadow-sm">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="event-title">Event Title</Label>
            <Input id="event-title" value={form.title || ""} onChange={(event) => setForm({ ...form, title: event.target.value })} placeholder="Parent Teacher Meeting" />
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="event-date">Event Date / Date Range</Label>
              <div className="relative">
                <CalendarDays className="absolute left-3 top-3 h-4 w-4 text-[#6e4a3b]" />
                <Input id="event-date" value={dateLabel} onChange={(event) => setDateLabel(event.target.value)} placeholder="17-22 Aug 2026" className="pl-9" />
              </div>
              <p className="text-xs text-[#6e4a3b]">Use a single date or range, for example 8 Aug 2026.</p>
            </div>
            <div className="space-y-2">
              <Label>Event Status</Label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="max-w-xl space-y-2">
            <Label htmlFor="event-order">Display Order</Label>
            <Input id="event-order" type="number" min="0" value={form.display_order || ""} onChange={(event) => setForm({ ...form, display_order: Number(event.target.value || 0) })} placeholder="Auto" />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <Button variant="outline" onClick={onCancel} disabled={isSaving}>Cancel</Button>
            <Button className="bg-[#137a49] hover:bg-[#0f663d]" onClick={save} disabled={isSaving}>
              <CalendarDays className="mr-2 h-4 w-4" />
              Save / Publish
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const categoryLabel = (value: string) =>
  value.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

const getYoutubeIdFromUrl = (value: string) => {
  const text = value.trim();
  const watchMatch = text.match(/[?&]v=([^&]+)/);
  const shortMatch = text.match(/youtu\.be\/([^?&]+)/);
  const embedMatch = text.match(/youtube\.com\/embed\/([^?&]+)/);
  return watchMatch?.[1] || shortMatch?.[1] || embedMatch?.[1] || text;
};

const MAX_ADMIN_IMAGE_BYTES = 150 * 1024;
const ADMIN_IMAGE_STORAGE_TYPE = "image/webp";

const dataUrlBytes = (value: string) => {
  const base64 = value.split(",")[1] || "";
  return Math.ceil((base64.length * 3) / 4);
};

const loadImageForCompression = (file: File) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file);
    const image = new window.Image();
    image.onload = () => {
      URL.revokeObjectURL(objectUrl);
      resolve(image);
    };
    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("Unable to load image."));
    };
    image.src = objectUrl;
  });

const canvasToDataUrl = (canvas: HTMLCanvasElement, quality: number) => canvas.toDataURL(ADMIN_IMAGE_STORAGE_TYPE, quality);

const compressImageFile = async (file: File): Promise<{ name: string; src: string }> => {
  const image = await loadImageForCompression(file);
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Image compression is not supported in this browser.");

  let maxDimension = 1600;
  const minDimension = 360;
  let best = "";

  while (maxDimension >= minDimension) {
    const scale = Math.min(1, maxDimension / Math.max(image.naturalWidth, image.naturalHeight));
    canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
    canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);

    for (const quality of [0.9, 0.82, 0.74, 0.66, 0.58, 0.5, 0.42, 0.34]) {
      const candidate = canvasToDataUrl(canvas, quality);
      if (!best || dataUrlBytes(candidate) < dataUrlBytes(best)) best = candidate;
      if (dataUrlBytes(candidate) < MAX_ADMIN_IMAGE_BYTES) return { name: file.name, src: candidate };
    }

    maxDimension = Math.floor(maxDimension * 0.82);
  }

  if (best && dataUrlBytes(best) < MAX_ADMIN_IMAGE_BYTES) return { name: file.name, src: best };
  throw new Error("Unable to compress image below 150 KB. Please try another image.");
};

const readImageFiles = (files: File[]) => Promise.all(files.map(compressImageFile));

function GalleryImagePage() {
  const { toast } = useToast();
  const [items, setItems] = useState<AdminContentItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [pendingImages, setPendingImages] = useState<{ name: string; src: string }[]>([]);
  const [isSaving, setIsSaving] = useState(false);

  const load = useCallback(async () => {
    try {
      const result = await getContent("gallery");
      setItems(result.items);
      setSelectedCategory((current) => current || result.items[0]?.category || "");
    } catch (error) {
      toast({ title: "Unable to load gallery images", description: error instanceof Error ? error.message : "Check API/database configuration.", variant: "destructive" });
    }
  }, [toast]);

  useEffect(() => { load(); }, [load]);

  const categories = useMemo(() => {
    const grouped = new Map<string, number>();
    items.forEach((item) => {
      const category = item.category || "gallery";
      grouped.set(category, (grouped.get(category) || 0) + 1);
    });
    return Array.from(grouped.entries()).map(([id, count]) => ({ id, label: `${categoryLabel(id)} (${count})` }));
  }, [items]);

  useEffect(() => {
    if (!selectedCategory && categories[0]) setSelectedCategory(categories[0].id);
  }, [categories, selectedCategory]);

  const categoryImages = items.filter((item) => (item.category || "gallery") === selectedCategory);

  const chooseFiles = async (files: FileList | null) => {
    const imageFiles = Array.from(files || []).filter((file) => file.type.startsWith("image/"));
    if (!imageFiles.length) return;
    try {
      const images = await readImageFiles(imageFiles);
      setPendingImages((current) => [...current, ...images]);
    } catch (error) {
      toast({ title: "Unable to process image", description: error instanceof Error ? error.message : "Please try a different image file.", variant: "destructive" });
    }
  };

  const save = async () => {
    if (!selectedCategory) {
      toast({ title: "Choose a category", description: "Select an existing gallery category before saving.", variant: "destructive" });
      return;
    }
    if (!pendingImages.length) {
      toast({ title: "Select images", description: "Choose one or more image files to add.", variant: "destructive" });
      return;
    }

    setIsSaving(true);
    try {
      const start = categoryImages.length;
      await Promise.all(pendingImages.map((image, index) => createContent("gallery", {
        title: image.name.replace(/\.[^.]+$/, "") || `${categoryLabel(selectedCategory)} ${start + index + 1}`,
        subtitle: categoryLabel(selectedCategory),
        body: "",
        image_url: image.src,
        category: selectedCategory,
        is_visible: true,
        display_order: start + index + 1,
        fields: { originalFileName: image.name },
      })));
      setPendingImages([]);
      await load();
      toast({ title: "Gallery images saved" });
    } catch (error) {
      toast({ title: "Unable to save images", description: error instanceof Error ? error.message : "Please try again.", variant: "destructive" });
    } finally {
      setIsSaving(false);
    }
  };

  const remove = async (item: AdminContentItem) => {
    if (!window.confirm("Are you sure you want to delete this gallery image?")) return;
    try {
      await deleteContent("gallery", item.id);
      await load();
      toast({ title: "Gallery image deleted" });
    } catch (error) {
      toast({ title: "Unable to delete image", description: error instanceof Error ? error.message : "Please try again.", variant: "destructive" });
    }
  };

  return (
    <div>
      <div className="mb-7">
        <h1 className="text-[26px] font-bold text-[#4a2b22]">Add Images</h1>
        <p className="mt-1 text-sm text-[#6e4a3b]">Upload photos to a gallery category / album.</p>
      </div>

      <div className="max-w-6xl space-y-7">
        <div className="rounded-2xl border border-[#e5ded4] bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold">1. Choose a category</h2>
          <div className="mt-7 max-w-3xl space-y-2">
            <Label>Gallery category / album</Label>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
              <SelectContent>{categories.map((category) => <SelectItem key={category.id} value={category.id}>{category.label}</SelectItem>)}</SelectContent>
            </Select>
          </div>
        </div>

        <div className="rounded-2xl border border-[#e5ded4] bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold">2. Upload images</h2>
          <label className="mt-7 flex min-h-44 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-[#dccfc1] text-center text-[#6e4a3b] transition-colors hover:bg-[#faf9f6]">
            <Upload className="mb-3 h-9 w-9" />
            <span className="font-medium">Click to select images (multiple allowed)</span>
            <span className="text-sm">JPEG, PNG, WEBP, or GIF</span>
            <input className="sr-only" type="file" accept="image/*" multiple onChange={(event) => chooseFiles(event.target.files)} />
          </label>
          {pendingImages.length > 0 && (
            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {pendingImages.map((image, index) => (
                <div key={`${image.name}-${index}`} className="overflow-hidden rounded-lg border border-[#e5ded4]">
                  <img src={image.src} alt="" className="h-28 w-full object-cover" />
                  <p className="truncate p-2 text-xs text-[#6e4a3b]">{image.name}</p>
                </div>
              ))}
            </div>
          )}
          <div className="mt-5 flex justify-end">
            <Button onClick={save} disabled={isSaving || !pendingImages.length} className="bg-[#137a49] hover:bg-[#0f663d]">Save Images</Button>
          </div>
        </div>

        <div className="rounded-2xl border border-[#e5ded4] bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold">Images in this category</h2>
          <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
            {categoryImages.map((item) => (
              <div key={item.id} className="group relative">
                <img src={item.image_url || "/placeholder.svg"} alt="" className="aspect-square w-full rounded-md object-cover" />
                <p className="mt-2 truncate text-sm text-[#6e4a3b]">{item.title}</p>
                <button type="button" onClick={() => remove(item)} className="absolute right-2 top-2 rounded-full bg-white/90 p-1.5 text-red-600 opacity-0 shadow-sm transition-opacity group-hover:opacity-100" aria-label="Delete image">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
            {categoryImages.length === 0 && <p className="col-span-full text-sm text-[#6e4a3b]">No images in this category.</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

function GalleryVideoPage() {
  const { toast } = useToast();
  const [galleryItems, setGalleryItems] = useState<AdminContentItem[]>([]);
  const [videos, setVideos] = useState<AdminContentItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [title, setTitle] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const load = useCallback(async () => {
    try {
      const [galleryResult, videoResult] = await Promise.all([getContent("gallery"), getContent("video")]);
      setGalleryItems(galleryResult.items);
      setVideos(videoResult.items);
      setSelectedCategory((current) => current || galleryResult.items[0]?.category || "");
    } catch (error) {
      toast({ title: "Unable to load gallery videos", description: error instanceof Error ? error.message : "Check API/database configuration.", variant: "destructive" });
    }
  }, [toast]);

  useEffect(() => { load(); }, [load]);

  const categories = useMemo(() => {
    const grouped = new Map<string, number>();
    galleryItems.forEach((item) => {
      const category = item.category || "gallery";
      grouped.set(category, (grouped.get(category) || 0) + 1);
    });
    return Array.from(grouped.entries()).map(([id, count]) => ({ id, label: `${categoryLabel(id)} (${count})` }));
  }, [galleryItems]);

  useEffect(() => {
    if (!selectedCategory && categories[0]) setSelectedCategory(categories[0].id);
  }, [categories, selectedCategory]);

  const save = async () => {
    const youtubeId = getYoutubeIdFromUrl(videoUrl);
    if (!selectedCategory) {
      toast({ title: "Choose a category", description: "Select an existing gallery category before saving.", variant: "destructive" });
      return;
    }
    if (!youtubeId) {
      toast({ title: "Add a YouTube URL", description: "Paste a valid YouTube video URL or ID.", variant: "destructive" });
      return;
    }

    setIsSaving(true);
    try {
      await createContent("video", {
        title: title.trim() || "Untitled video",
        subtitle: categoryLabel(selectedCategory),
        body: "",
        image_url: videoUrl.trim(),
        category: selectedCategory,
        is_visible: true,
        display_order: videos.length + 1,
        fields: { youtubeId },
      });
      setVideoUrl("");
      setTitle("");
      await load();
      toast({ title: "Video added" });
    } catch (error) {
      toast({ title: "Unable to save video", description: error instanceof Error ? error.message : "Please try again.", variant: "destructive" });
    } finally {
      setIsSaving(false);
    }
  };

  const remove = async (item: AdminContentItem) => {
    if (!window.confirm("Are you sure you want to delete this gallery video?")) return;
    try {
      await deleteContent("video", item.id);
      await load();
      toast({ title: "Video deleted" });
    } catch (error) {
      toast({ title: "Unable to delete video", description: error instanceof Error ? error.message : "Please try again.", variant: "destructive" });
    }
  };

  return (
    <div>
      <div className="mb-7">
        <h1 className="text-[26px] font-bold text-[#4a2b22]">Add Videos</h1>
        <p className="mt-1 text-sm text-[#6e4a3b]">Add videos to the Video Gallery by URL. No file upload needed.</p>
      </div>

      <div className="max-w-5xl space-y-7">
        <div className="rounded-2xl border border-[#e5ded4] bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold">1. Choose a video category</h2>
          <div className="mt-7 max-w-3xl space-y-2">
            <Label>Video category</Label>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
              <SelectContent>{categories.map((category) => <SelectItem key={category.id} value={category.id}>{category.label}</SelectItem>)}</SelectContent>
            </Select>
          </div>
        </div>

        <div className="rounded-2xl border border-[#e5ded4] bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold">2. Add a video</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="video-url">YouTube Video URL</Label>
              <Input id="video-url" value={videoUrl} onChange={(event) => setVideoUrl(event.target.value)} placeholder="https://www.youtube.com/watch?v=..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="video-title">Title (optional)</Label>
              <Input id="video-title" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Annual Day Highlights" />
            </div>
          </div>
          <p className="mt-3 text-xs text-[#6e4a3b]">The thumbnail is fetched automatically from YouTube, matching the frontend video gallery.</p>
          <Button onClick={save} disabled={isSaving} className="mt-5 bg-[#137a49] hover:bg-[#0f663d]">Add Video</Button>
        </div>

        <div className="rounded-2xl border border-[#e5ded4] bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold">Videos in this category</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {videos.filter((item) => (item.category || selectedCategory) === selectedCategory || (!item.category && selectedCategory)).map((item) => {
              const youtubeId = getYoutubeIdFromUrl(String(item.fields?.youtubeId || item.image_url || item.title));
              return (
                <div key={item.id} className="overflow-hidden rounded-lg border border-[#e5ded4]">
                  <img src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`} alt="" className="h-36 w-full object-cover" />
                  <div className="space-y-3 p-4">
                    <p className="line-clamp-2 font-semibold">{item.title || "Untitled video"}</p>
                    <Badge variant="outline" className={item.is_visible ? "border-green-200 bg-green-50 text-green-700" : "border-slate-200 bg-slate-100 text-slate-600"}>{item.is_visible ? "Published" : "Draft"}</Badge>
                    <Button variant="outline" className="w-full" onClick={() => remove(item)}><Trash2 className="mr-2 h-4 w-4" />Delete</Button>
                  </div>
                </div>
              );
            })}
            {videos.length === 0 && <p className="text-sm text-[#6e4a3b]">No videos found.</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialsPage() {
  const { toast } = useToast();
  const [adminItems, setAdminItems] = useState<AdminContentItem[]>([]);
  const [editing, setEditing] = useState<TestimonialDisplayItem | null>(null);
  const [form, setForm] = useState<AdminContentPayload>({ ...emptyPayload, category: "Parent" });
  const [isSaving, setIsSaving] = useState(false);

  const load = useCallback(async () => {
    try {
      const result = await getContent("testimonial");
      setAdminItems(result.items);
    } catch (error) {
      toast({ title: "Unable to load testimonials", description: error instanceof Error ? error.message : "Check API/database configuration.", variant: "destructive" });
    }
  }, [toast]);

  useEffect(() => { load(); }, [load]);

  const testimonials = useMemo(() => mergeTestimonialItems(adminItems), [adminItems]);

  const resetForm = () => {
    setEditing(null);
    setForm({ ...emptyPayload, category: "Parent", display_order: testimonials.length + 1 });
  };

  useEffect(() => {
    if (!editing && !form.display_order) setForm((current) => ({ ...current, display_order: testimonials.length + 1 }));
  }, [editing, form.display_order, testimonials.length]);

  const startEdit = (item: TestimonialDisplayItem) => {
    setEditing(item);
    setForm(testimonialDisplayToPayload(item));
  };

  const choosePhoto = async (files: FileList | null) => {
    const file = Array.from(files || []).find((candidate) => candidate.type.startsWith("image/"));
    if (!file) return;
    try {
      const [image] = await readImageFiles([file]);
      setForm((current) => ({ ...current, image_url: image.src }));
    } catch (error) {
      toast({ title: "Unable to process photo", description: error instanceof Error ? error.message : "Please try a different image file.", variant: "destructive" });
    }
  };

  const save = async (publish: boolean) => {
    if (!form.title?.trim() || !form.body?.trim()) {
      toast({ title: "Complete required fields", description: "Person name and testimonial content are required.", variant: "destructive" });
      return;
    }

    const payload: AdminContentPayload = {
      ...form,
      title: form.title.trim(),
      subtitle: form.subtitle?.trim() || "",
      body: form.body.trim(),
      image_url: form.image_url || "",
      category: form.category || "Parent",
      is_visible: publish,
      display_order: Number(form.display_order || testimonials.length + 1),
      fields: form.fields || {},
    };

    setIsSaving(true);
    try {
      if (editing?.adminItem) await updateContent("testimonial", editing.adminItem.id, payload);
      else await createContent("testimonial", payload);
      await load();
      resetForm();
      toast({ title: publish ? "Testimonial published" : "Testimonial saved as draft" });
    } catch (error) {
      toast({ title: "Unable to save testimonial", description: error instanceof Error ? error.message : "Please try again.", variant: "destructive" });
    } finally {
      setIsSaving(false);
    }
  };

  const remove = async (item: TestimonialDisplayItem) => {
    if (!item.adminItem) return;
    if (!window.confirm("Are you sure you want to delete this testimonial?")) return;
    try {
      await deleteContent("testimonial", item.adminItem.id);
      await load();
      if (editing?.adminItem?.id === item.adminItem.id) resetForm();
      toast({ title: "Testimonial deleted" });
    } catch (error) {
      toast({ title: "Unable to delete testimonial", description: error instanceof Error ? error.message : "Please try again.", variant: "destructive" });
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-[26px] font-bold text-[#4a2b22]">Testimonials</h1>
        <p className="mt-1 text-sm text-[#6e4a3b]">Add parent/student testimonials shown on the website.</p>
      </div>

      <div className="grid max-w-6xl gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-[#e5ded4] bg-white p-6 shadow-sm">
          <h2 className="font-bold">Add a testimonial</h2>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-[#e5ded4] bg-[#f1eee9]">
              {form.image_url ? <img src={form.image_url} alt="" className="h-full w-full object-cover" /> : <UserRound className="h-7 w-7 text-[#6e4a3b]" />}
            </div>
            <label className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-[#137a49]">
              <Upload className="h-4 w-4" />
              Upload photo (optional)
              <input className="sr-only" type="file" accept="image/*" onChange={(event) => choosePhoto(event.target.files)} />
            </label>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>Person Name <span className="text-red-600">*</span></Label>
              <Input value={form.title || ""} onChange={(event) => setForm({ ...form, title: event.target.value })} placeholder="Priya Sharma" />
            </div>
            <div className="space-y-2">
              <Label>Designation / Class / Role</Label>
              <Input value={form.subtitle || ""} onChange={(event) => setForm({ ...form, subtitle: event.target.value })} placeholder="Ananya Sharma - Class 8" />
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <Label>Category</Label>
            <Select value={form.category || "Parent"} onValueChange={(value) => setForm({ ...form, category: value })}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Parent">Parent</SelectItem>
                <SelectItem value="Student">Student</SelectItem>
                <SelectItem value="Alumni">Alumni</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mt-4 space-y-2">
            <Label>Testimonial Content <span className="text-red-600">*</span></Label>
            <Textarea rows={5} value={form.body || ""} onChange={(event) => setForm({ ...form, body: event.target.value })} placeholder="Share what they said about SJRKPS..." />
          </div>

          <div className="mt-5 flex justify-end gap-3 border-t border-[#e5ded4] pt-4">
            {editing && <Button variant="outline" onClick={resetForm}>Cancel Edit</Button>}
            <Button variant="outline" disabled={isSaving} onClick={() => save(false)}>Save as Draft</Button>
            <Button className="bg-[#137a49] hover:bg-[#0f663d]" disabled={isSaving} onClick={() => save(true)}>Publish</Button>
          </div>
        </div>

        <div className="rounded-2xl border border-[#e5ded4] bg-white p-6 shadow-sm">
          <h2 className="font-bold">Live preview</h2>
          <div className="mt-6 rounded-xl border border-[#e5ded4] p-6">
            <MessageSquareQuote className="h-8 w-8 text-[#8bbfa8]" />
            <p className="mt-3 min-h-20 text-sm italic text-[#6e4a3b]">{form.body || "Testimonial content will appear here..."}</p>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-[#f1eee9]">
                {form.image_url ? <img src={form.image_url} alt="" className="h-full w-full object-cover" /> : <UserRound className="h-5 w-5 text-[#6e4a3b]" />}
              </div>
              <div>
                <p className="font-bold">{form.title || "Person Name"}</p>
                <p className="text-xs text-[#6e4a3b]">{form.subtitle || "Designation / Class"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-7 max-w-6xl rounded-2xl border border-[#e5ded4] bg-white p-6 shadow-sm">
        <h2 className="font-bold">All testimonials ({testimonials.length})</h2>
        <div className="mt-5 overflow-x-auto rounded-xl border border-[#e5ded4]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Photo</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Quote</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {testimonials.map((item) => (
                <TableRow key={item.key}>
                  <TableCell><img src={item.image} alt="" className="h-9 w-9 rounded-full object-cover" /></TableCell>
                  <TableCell className="font-semibold">{item.name}</TableCell>
                  <TableCell>{item.role}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell className="max-w-xs truncate">{item.quote}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={item.isVisible ? "border-green-200 bg-green-50 text-green-700" : "border-slate-200 bg-slate-100 text-slate-600"}>{item.isVisible ? "Published" : "Draft"}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm" onClick={() => startEdit(item)}>Edit</Button>
                      <Button variant="destructive" size="sm" disabled={!item.adminItem} title={!item.adminItem ? "Frontend source testimonials are preserved; edit to create a managed database version." : undefined} onClick={() => remove(item)}><Trash2 className="h-4 w-4" /></Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

const defaultFeaturedTeacherNames = new Set(["Mr Prakash H S", "Mrs Lily Roy", "Mrs Mini Jomy", "Mrs Menaka B"].map((name) => name.toLowerCase()));

const adminTeacherToDisplay = (item: AdminContentItem): Teacher => ({
  name: item.title,
  designation: item.subtitle || "",
  subject: item.category || String(item.fields?.subject || ""),
  qualification: item.body || String(item.fields?.qualification || ""),
  experience: String(item.fields?.experience || ""),
  image: item.image_url || "/placeholder.svg",
  isFeatured: item.fields?.featured === true,
  source: "database",
  adminId: item.id,
  isVisible: item.is_visible,
  displayOrder: item.display_order,
});

const mergeTeacherItems = (adminItems: AdminContentItem[]) => {
  const byName = new Map<string, Teacher>();
  frontendTeachers.forEach((teacher, index) => byName.set(teacher.name.toLowerCase(), {
    ...teacher,
    source: "frontend",
    isVisible: true,
    isFeatured: defaultFeaturedTeacherNames.has(teacher.name.toLowerCase()),
    displayOrder: index + 1,
  }));
  adminItems.forEach((item) => {
    const teacher = adminTeacherToDisplay(item);
    byName.set(teacher.name.toLowerCase(), teacher);
  });
  return Array.from(byName.values()).sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
};

const teacherToPayload = (teacher: Teacher, displayOrder = teacher.displayOrder || 0): AdminContentPayload => ({
  title: teacher.name,
  subtitle: teacher.designation,
  body: teacher.qualification,
  image_url: teacher.image,
  category: teacher.subject,
  is_visible: teacher.isVisible !== false,
  display_order: displayOrder,
  fields: {
    subject: teacher.subject,
    qualification: teacher.qualification,
    experience: teacher.experience,
    featured: teacher.isFeatured === true,
  },
});

const teacherOrderKey = (items: Teacher[]) => items.map((item) => item.name).join("|");

function TeachersViewPage({ onAdd, onEdit, onDirtyChange }: { onAdd: () => void; onEdit: (teacher: Teacher) => void; onDirtyChange: (dirty: boolean) => void }) {
  const { toast } = useToast();
  const [adminItems, setAdminItems] = useState<AdminContentItem[]>([]);
  const [search, setSearch] = useState("");
  const [isSavingOrder, setIsSavingOrder] = useState(false);
  const [draggingTeacher, setDraggingTeacher] = useState<string | null>(null);
  const [orderedTeachers, setOrderedTeachers] = useState<Teacher[]>([]);

  const load = useCallback(async () => {
    try {
      const result = await getContent("teacher");
      setAdminItems(result.items);
    } catch (error) {
      toast({ title: "Unable to load teachers", description: error instanceof Error ? error.message : "Check API/database configuration.", variant: "destructive" });
    }
  }, [toast]);

  useEffect(() => { load(); }, [load]);

  const teachers = useMemo(() => mergeTeacherItems(adminItems), [adminItems]);
  const savedOrderKey = useMemo(() => teacherOrderKey(teachers), [teachers]);
  const currentOrderKey = useMemo(() => teacherOrderKey(orderedTeachers), [orderedTeachers]);
  const hasUnsavedOrder = orderedTeachers.length > 0 && currentOrderKey !== savedOrderKey;
  const displayTeachers = orderedTeachers.length ? orderedTeachers : teachers;
  const visibleTeachers = displayTeachers.filter((teacher) =>
    [teacher.name, teacher.designation, teacher.subject].join(" ").toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (!hasUnsavedOrder) setOrderedTeachers(teachers);
  }, [hasUnsavedOrder, teachers]);

  useEffect(() => {
    onDirtyChange(hasUnsavedOrder);
    return () => onDirtyChange(false);
  }, [hasUnsavedOrder, onDirtyChange]);

  useEffect(() => {
    const warnBeforeUnload = (event: BeforeUnloadEvent) => {
      if (!hasUnsavedOrder) return;
      event.preventDefault();
      event.returnValue = "";
    };
    window.addEventListener("beforeunload", warnBeforeUnload);
    return () => window.removeEventListener("beforeunload", warnBeforeUnload);
  }, [hasUnsavedOrder]);

  const persistTeacher = async (teacher: Teacher, displayOrder = teacher.displayOrder || 0) => {
    const payload = teacherToPayload(teacher, displayOrder);
    if (teacher.adminId) await updateContent("teacher", teacher.adminId, payload);
    else await createContent("teacher", payload);
  };

  const moveTeacher = (teacher: Teacher, direction: -1 | 1) => {
    const currentIndex = displayTeachers.findIndex((item) => item.name === teacher.name);
    const swap = displayTeachers[currentIndex + direction];
    if (!swap) return;
    const nextOrder = [...displayTeachers];
    nextOrder[currentIndex] = swap;
    nextOrder[currentIndex + direction] = teacher;
    setOrderedTeachers(nextOrder);
  };

  const reorderTeachers = (fromName: string | null, toName: string) => {
    if (!fromName || fromName === toName) return;
    const fromIndex = displayTeachers.findIndex((item) => item.name === fromName);
    const toIndex = displayTeachers.findIndex((item) => item.name === toName);
    if (fromIndex < 0 || toIndex < 0) return;
    const reordered = [...displayTeachers];
    const [moved] = reordered.splice(fromIndex, 1);
    reordered.splice(toIndex, 0, moved);
    setOrderedTeachers(reordered);
    setDraggingTeacher(null);
  };

  const saveOrder = async () => {
    if (!hasUnsavedOrder) return;
    setIsSavingOrder(true);
    try {
      await Promise.all(orderedTeachers.map((item, index) => persistTeacher(item, index + 1)));
      await load();
      setOrderedTeachers(orderedTeachers.map((item, index) => ({ ...item, displayOrder: index + 1 })));
      toast({ title: "Teacher order saved", description: "The frontend teacher order will now use the saved order." });
    } catch (error) {
      toast({ title: "Unable to update order", description: error instanceof Error ? error.message : "Please try again.", variant: "destructive" });
    } finally {
      setIsSavingOrder(false);
    }
  };

  const resetOrder = () => {
    setOrderedTeachers(teachers);
    setDraggingTeacher(null);
  };

  const toggleFeatured = async (teacher: Teacher) => {
    try {
      await persistTeacher({ ...teacher, isFeatured: !teacher.isFeatured });
      await load();
      toast({ title: teacher.isFeatured ? "Removed from homepage" : "Featured on homepage" });
    } catch (error) {
      toast({ title: "Unable to update featured status", description: error instanceof Error ? error.message : "Please try again.", variant: "destructive" });
    }
  };

  const remove = async (teacher: Teacher) => {
    if (!teacher.adminId) return;
    if (!window.confirm("Are you sure you want to delete this teacher?")) return;
    try {
      await deleteContent("teacher", teacher.adminId);
      await load();
      toast({ title: "Teacher deleted" });
    } catch (error) {
      toast({ title: "Unable to delete teacher", description: error instanceof Error ? error.message : "Please try again.", variant: "destructive" });
    }
  };

  return (
    <div>
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-[26px] font-bold text-[#4a2b22]">Teachers</h1>
          <p className="mt-1 text-sm text-[#6e4a3b]">{teachers.length} faculty members - drag rows or use arrow controls to reorder how they appear on the website.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {hasUnsavedOrder && (
            <>
              <Badge variant="outline" className="border-amber-300 bg-amber-50 px-3 py-1 text-amber-800">Unsaved order</Badge>
              <Button onClick={resetOrder} variant="outline" disabled={isSavingOrder}>Reset Changes</Button>
              <Button onClick={saveOrder} disabled={isSavingOrder} className="bg-[#137a49] hover:bg-[#0f663d]"><Save className="mr-2 h-4 w-4" />Save Changes</Button>
            </>
          )}
          <Button onClick={onAdd} variant="outline"><FilePlus className="mr-2 h-4 w-4" />Add New</Button>
        </div>
      </div>
      <div className="relative max-w-5xl">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-[#6e4a3b]" />
        <Input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search by name, designation, or subject..." className="pl-9" />
      </div>

      <div className="mt-5 max-w-5xl rounded-2xl border border-[#e5ded4] bg-white shadow-sm">
        <div className="border-b border-[#e5ded4] p-5">
          <h2 className="font-bold">Faculty Order</h2>
        </div>
        <div>
          {visibleTeachers.map((teacher, index) => (
            <div
              key={teacher.name}
              draggable={!isSavingOrder}
              onDragStart={() => setDraggingTeacher(teacher.name)}
              onDragOver={(event) => event.preventDefault()}
              onDrop={() => reorderTeachers(draggingTeacher, teacher.name)}
              onDragEnd={() => setDraggingTeacher(null)}
              className="grid grid-cols-[20px_36px_34px_44px_1fr_auto] items-center gap-3 border-b border-[#e5ded4] px-5 py-4 last:border-b-0"
            >
              <GripVertical className="h-4 w-4 cursor-grab text-[#8a6a5b]" />
              <div className="flex flex-col gap-1">
                <Button variant="outline" size="icon" disabled={isSavingOrder || index === 0} onClick={() => moveTeacher(teacher, -1)} className="h-7 w-7" aria-label={`Move ${teacher.name} up`} title="Move up"><ArrowUp className="h-3.5 w-3.5" /></Button>
                <Button variant="outline" size="icon" disabled={isSavingOrder || index === visibleTeachers.length - 1} onClick={() => moveTeacher(teacher, 1)} className="h-7 w-7" aria-label={`Move ${teacher.name} down`} title="Move down"><ArrowDown className="h-3.5 w-3.5" /></Button>
              </div>
              <span className="text-sm text-[#6e4a3b]">{displayTeachers.findIndex((item) => item.name === teacher.name) + 1}</span>
              <img src={teacher.image} alt="" className="h-11 w-11 rounded-md object-cover" />
              <div>
                <p className="font-bold">{teacher.name}</p>
                <p className="text-xs text-[#6e4a3b]">{teacher.designation} - {teacher.subject}</p>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" onClick={() => toggleFeatured(teacher)} className={teacher.isFeatured ? "border-amber-300 text-amber-700" : ""}>{teacher.isFeatured ? "Featured" : "Feature"}</Button>
                <Badge variant="outline" className={teacher.isVisible !== false ? "border-green-200 bg-green-50 text-green-700" : "border-slate-200 bg-slate-100 text-slate-600"}>{teacher.isVisible !== false ? "Published" : "Draft"}</Badge>
                <Button variant="ghost" size="sm" onClick={() => onEdit(teacher)}>Edit</Button>
                <Button variant="ghost" size="sm" disabled={!teacher.adminId} title={!teacher.adminId ? "Frontend source teachers are preserved; edit to create a managed database version." : undefined} onClick={() => remove(teacher)} className="text-red-600"><Trash2 className="h-4 w-4" /></Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TeacherFormPage({ editing, onCancel, onSaved }: { editing: Teacher | null; onCancel: () => void; onSaved: () => void }) {
  const { toast } = useToast();
  const [form, setForm] = useState<Teacher>(() => editing || {
    name: "",
    designation: "",
    subject: "",
    qualification: "",
    experience: "",
    image: "/placeholder.svg",
    isFeatured: false,
    isVisible: true,
    displayOrder: frontendTeachers.length + 1,
  });
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setForm(editing || {
      name: "",
      designation: "",
      subject: "",
      qualification: "",
      experience: "",
      image: "/placeholder.svg",
      isFeatured: false,
      isVisible: true,
      displayOrder: frontendTeachers.length + 1,
    });
  }, [editing]);

  const choosePhoto = async (files: FileList | null) => {
    const file = Array.from(files || []).find((candidate) => candidate.type.startsWith("image/"));
    if (!file) return;
    try {
      const [image] = await readImageFiles([file]);
      setForm((current) => ({ ...current, image: image.src }));
    } catch (error) {
      toast({ title: "Unable to process photo", description: error instanceof Error ? error.message : "Please try a different image file.", variant: "destructive" });
    }
  };

  const save = async () => {
    if (!form.name.trim() || !form.designation.trim()) {
      toast({ title: "Complete required fields", description: "Name and designation are required.", variant: "destructive" });
      return;
    }
    setIsSaving(true);
    try {
      const payload = teacherToPayload({ ...form, isVisible: form.isVisible !== false }, form.displayOrder || 0);
      if (form.adminId) await updateContent("teacher", form.adminId, payload);
      else await createContent("teacher", payload);
      toast({ title: editing ? "Teacher updated" : "Teacher added" });
      onSaved();
    } catch (error) {
      toast({ title: "Unable to save teacher", description: error instanceof Error ? error.message : "Please try again.", variant: "destructive" });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div>
      <div className="mb-7">
        <h1 className="text-[30px] font-bold text-[#4a2b22]">{editing ? "Edit Teacher" : "Add New Teacher"}</h1>
        <p className="mt-1 text-[#6e4a3b]">{editing ? "Update this teacher or staff member." : "Add a new teacher or staff member to the About / Teachers page."}</p>
      </div>
      <div className="max-w-6xl rounded-2xl border border-[#e5ded4] bg-white p-8 shadow-sm">
        <h2 className="text-lg font-bold">Teacher details</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-[250px_1fr]">
          <div>
            <Label>Photo</Label>
            <label className="mt-3 flex h-72 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-lg border border-dashed border-[#dccfc1] text-center text-[#6e4a3b] hover:bg-[#faf9f6]">
              {form.image && form.image !== "/placeholder.svg" ? <img src={form.image} alt="" className="h-full w-full object-cover" /> : <><UserRound className="mb-3 h-9 w-9" /><span>Click to upload photo</span></>}
              <input className="sr-only" type="file" accept="image/*" onChange={(event) => choosePhoto(event.target.files)} />
            </label>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2"><Label>Name <span className="text-red-600">*</span></Label><Input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Ms. Jane Doe" /></div>
            <div className="space-y-2"><Label>Designation <span className="text-red-600">*</span></Label><Input value={form.designation} onChange={(event) => setForm({ ...form, designation: event.target.value })} placeholder="Teacher, HOD, Co-Ordinator..." /></div>
            <div className="space-y-2"><Label>Subject / Department</Label><Input value={form.subject} onChange={(event) => setForm({ ...form, subject: event.target.value })} placeholder="Mathematics" /></div>
            <div className="space-y-2"><Label>Experience</Label><Input value={form.experience} onChange={(event) => setForm({ ...form, experience: event.target.value })} placeholder="e.g. 12 Yrs" /></div>
            <div className="space-y-2 sm:col-span-2"><Label>Qualification</Label><Input value={form.qualification} onChange={(event) => setForm({ ...form, qualification: event.target.value })} placeholder="M.Sc., B.Ed." /></div>
            <div className="space-y-2"><Label>Display Order / Position</Label><Input type="number" min="1" value={form.displayOrder || ""} onChange={(event) => setForm({ ...form, displayOrder: Number(event.target.value || 0) })} placeholder="Auto" /></div>
            <div className="flex flex-wrap items-center gap-8 sm:col-span-2">
              <label className="flex items-center gap-3"><Switch checked={form.isFeatured === true} onCheckedChange={(checked) => setForm({ ...form, isFeatured: checked })} />Featured on homepage</label>
              <label className="flex items-center gap-3"><Switch checked={form.isVisible !== false} onCheckedChange={(checked) => setForm({ ...form, isVisible: checked })} />Published</label>
            </div>
          </div>
        </div>
        <div className="mt-7 flex justify-end gap-3 border-t border-[#e5ded4] pt-4">
          <Button variant="outline" onClick={onCancel}>Cancel</Button>
          <Button className="bg-[#137a49] hover:bg-[#0f663d]" disabled={isSaving} onClick={save}>{editing ? "Save Teacher" : "Add Teacher"}</Button>
        </div>
      </div>
    </div>
  );
}

const AdminDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState<AdminUser | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [section, setSection] = useState<Section>(() => sectionFromAdminPath(location.pathname));
  const [editingNews, setEditingNews] = useState<NewsDisplayItem | null>(null);
  const [editingEvent, setEditingEvent] = useState<EventDisplayItem | null>(null);
  const [editingTeacher, setEditingTeacher] = useState<Teacher | null>(null);
  const [teacherOrderDirty, setTeacherOrderDirty] = useState(false);
  const [openGroup, setOpenGroup] = useState<NavGroupId | null>(() => groupForSection(sectionFromAdminPath(location.pathname)));
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    getCurrentAdmin()
      .then((result) => setUser(result.user))
      .catch(() => undefined)
      .finally(() => setAuthChecked(true));
  }, []);

  useEffect(() => {
    const nextSection = sectionFromAdminPath(location.pathname);
    setSection(nextSection);
    setOpenGroup(groupForSection(nextSection));
    if (nextSection !== "news-edit") setEditingNews(null);
    if (nextSection !== "event-edit") setEditingEvent(null);
    if (nextSection !== "teacher-add") setEditingTeacher(null);
  }, [location.pathname]);

  const logout = async () => {
    await logoutAdmin().catch(() => undefined);
    setUser(null);
    setSection("dashboard");
  };

  if (!authChecked) return <div className="min-h-screen bg-[#f8f6f1] p-10 text-[#3b241d]">Checking admin session...</div>;
  if (!user) return <AdminLogin onLogin={setUser} />;

  const go = (next: Section) => {
    if (teacherOrderDirty && section === "teacher-list" && next !== "teacher-list" && !window.confirm("You have unsaved changes. Are you sure you want to leave without saving?")) return;
    if (next !== "news-edit") setEditingNews(null);
    if (next !== "event-edit") setEditingEvent(null);
    if (next !== "teacher-add") setEditingTeacher(null);
    setSection(next);
    setMobileOpen(false);
    navigate(adminPathForSection(next));
  };
  const editNews = (item: NewsDisplayItem) => {
    setEditingNews(item);
    setSection("news-edit");
    setMobileOpen(false);
    navigate("/admin/news/edit");
  };
  const editEvent = (item: EventDisplayItem) => {
    setEditingEvent(item);
    setSection("event-edit");
    setMobileOpen(false);
    navigate("/admin/events/edit");
  };
  const editTeacher = (teacher: Teacher) => {
    if (teacherOrderDirty && !window.confirm("You have unsaved changes. Are you sure you want to leave without saving?")) return;
    setEditingTeacher(teacher);
    setSection("teacher-add");
    setMobileOpen(false);
    navigate("/admin/teachers/add");
  };
  const toggleGroup = (group: NavGroupId) => setOpenGroup((current) => current === group ? null : group);
  const isActive = (...sections: Section[]) => sections.includes(section);

  return (
    <div className="h-screen overflow-hidden bg-[#faf9f6] text-[#22130f]">
      <div className="flex h-full min-h-0">
        <aside className={`fixed inset-y-0 left-0 z-50 flex w-60 flex-col border-r border-[#e8e0d7] bg-[#f1eee9] transition-transform lg:static lg:translate-x-0 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="flex h-14 shrink-0 items-center gap-2.5 border-b border-[#e8e0d7] bg-white px-3">
            <img src={sjreLogo} alt="SJRPS-HBR" className="h-9 w-9 rounded-full border border-[#e5ded4] object-contain p-1" />
            <div className="min-w-0">
              <h1 className="truncate text-[15px] font-bold text-[#3b241d]">SJRHBR Admin</h1>
              <p className="text-xs text-[#6e4a3b]">Content Manager</p>
            </div>
            <button className="ml-auto lg:hidden" onClick={() => setMobileOpen(false)} aria-label="Close menu"><X className="h-5 w-5" /></button>
          </div>
          <nav className="min-h-0 flex-1 space-y-0.5 overflow-hidden px-2 py-3">
            <NavButton active={section === "dashboard"} icon={LayoutDashboard} label="Dashboard" onClick={() => go("dashboard")} />
            <NavGroup id="enquiries" icon={Inbox} label="Enquiries" active={isActive("home-enquiries", "contact-enquiries")} open={openGroup === "enquiries"} onToggle={toggleGroup}>
              <NavButton nested active={section === "home-enquiries"} icon={Home} label="Home" onClick={() => go("home-enquiries")} />
              <NavButton nested active={section === "contact-enquiries"} icon={Mail} label="Contact" onClick={() => go("contact-enquiries")} />
            </NavGroup>
            <NavGroup id="news" icon={Newspaper} label="News" active={isActive("news-add", "news-edit", "news-list")} open={openGroup === "news"} onToggle={toggleGroup}>
              <NavButton nested active={isActive("news-list", "news-edit")} icon={Newspaper} label="News Details" onClick={() => go("news-list")} />
              <NavButton nested active={section === "news-add"} icon={FilePlus} label="Add News" onClick={() => go("news-add")} />
            </NavGroup>
            <NavGroup id="events" icon={CalendarDays} label="Upcoming Events" active={isActive("event-add", "event-edit", "event-list")} open={openGroup === "events"} onToggle={toggleGroup}>
              <NavButton nested active={isActive("event-list", "event-edit")} icon={CalendarDays} label="View Details" onClick={() => go("event-list")} />
              <NavButton nested active={section === "event-add"} icon={FilePlus} label="Add Event" onClick={() => go("event-add")} />
            </NavGroup>
            <NavGroup id="gallery" icon={GalleryHorizontal} label="Gallery" active={isActive("gallery-images", "gallery-videos")} open={openGroup === "gallery"} onToggle={toggleGroup}>
              <NavButton nested active={section === "gallery-images"} icon={Images} label="Add Images" onClick={() => go("gallery-images")} />
              <NavButton nested active={section === "gallery-videos"} icon={Video} label="Add Videos" onClick={() => go("gallery-videos")} />
            </NavGroup>
            <NavGroup id="testimonials" icon={MessageSquareQuote} label="Testimonials" active={isActive("testimonial-add")} open={openGroup === "testimonials"} onToggle={toggleGroup}>
              <NavButton nested active={section === "testimonial-add"} icon={FilePlus} label="Add Testimonials" onClick={() => go("testimonial-add")} />
            </NavGroup>
            <NavGroup id="teachers" icon={Users} label="Teachers" active={isActive("teacher-add", "teacher-list")} open={openGroup === "teachers"} onToggle={toggleGroup}>
              <NavButton nested active={section === "teacher-list"} icon={Users} label="View" onClick={() => go("teacher-list")} />
              <NavButton nested active={section === "teacher-add"} icon={FilePlus} label="Add New" onClick={() => go("teacher-add")} />
            </NavGroup>
          </nav>
          <div className="shrink-0 border-t border-[#e8e0d7] bg-[#f1eee9] p-2.5">
            <div className="flex items-center gap-2.5 rounded-lg border border-[#e8e0d7] bg-white p-2.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#137a49] text-white"><UserRound className="h-4 w-4" /></div>
              <div className="min-w-0 flex-1"><p className="text-sm font-semibold">Site Admin</p><p className="truncate text-xs text-[#6e4a3b]">{user.email}</p></div>
              <button onClick={logout} aria-label="Logout"><DoorOpen className="h-4 w-4 text-[#3b241d]" /></button>
            </div>
          </div>
        </aside>
        <main className="flex min-h-0 min-w-0 flex-1 flex-col">
          <header className="flex h-14 shrink-0 items-center gap-4 bg-[#137a49] px-5 text-white lg:px-8">
            <button className="lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Open menu"><Menu className="h-6 w-6" /></button>
            <PanelLeft className="hidden h-5 w-5 lg:block" />
            <div className="hidden h-7 w-px bg-white/25 lg:block" />
            <h2 className="text-lg font-bold">{titleForSection(section)}</h2>
          </header>
          <div className="min-h-0 flex-1 overflow-y-auto px-5 py-6 lg:px-7 xl:px-8">
            {section === "dashboard" && <DashboardHome onNavigate={go} />}
            {section === "home-enquiries" && <EnquiryManager source="home" />}
            {section === "contact-enquiries" && <EnquiryManager source="contact" />}
            {section === "news-list" && <NewsDetailsManager onAdd={() => go("news-add")} onEdit={editNews} />}
            {section === "news-add" && <NewsFormPage editing={null} onCancel={() => go("news-list")} onSaved={() => go("news-list")} />}
            {section === "news-edit" && <NewsFormPage editing={editingNews} onCancel={() => go("news-list")} onSaved={() => go("news-list")} />}
            {section === "event-list" && <EventDetailsManager onAdd={() => go("event-add")} onEdit={editEvent} />}
            {section === "event-add" && <EventFormPage editing={null} onCancel={() => go("event-list")} onSaved={() => go("event-list")} />}
            {section === "event-edit" && <EventFormPage editing={editingEvent} onCancel={() => go("event-list")} onSaved={() => go("event-list")} />}
            {section === "gallery-images" && <GalleryImagePage />}
            {section === "gallery-videos" && <GalleryVideoPage />}
            {section === "testimonial-add" && <TestimonialsPage />}
            {section === "teacher-list" && <TeachersViewPage onAdd={() => go("teacher-add")} onEdit={editTeacher} onDirtyChange={setTeacherOrderDirty} />}
            {section === "teacher-add" && <TeacherFormPage editing={editingTeacher} onCancel={() => go("teacher-list")} onSaved={() => go("teacher-list")} />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
