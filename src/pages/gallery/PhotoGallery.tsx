import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { getPublicContent } from "@/lib/api";
import labs1 from "@/assets/gallery/labs1.jpg";
import labs2 from "@/assets/gallery/labs2.jpg";
import labs3 from "@/assets/gallery/labs3.jpg";
import labs4 from "@/assets/gallery/labs4.jpg";
import sports1 from "@/assets/gallery/sports1.jpg";
import sports2 from "@/assets/gallery/sports2.jpg";
import sports3 from "@/assets/gallery/sports3.jpg";
import sports4 from "@/assets/gallery/sports4.jpg";
import classroom1 from "@/assets/gallery/classroom1.jpg";
import classroom2 from "@/assets/gallery/classroom2.jpg";
import classroom3 from "@/assets/gallery/classroom3.jpg";
import classroom4 from "@/assets/gallery/classroom4.jpg";
import music1 from "@/assets/gallery/music1.jpg";
import music2 from "@/assets/gallery/music2.jpg";
import music3 from "@/assets/gallery/music3.jpg";
import music4 from "@/assets/gallery/music4.jpg";
import yoga1 from "@/assets/gallery/yoga1.jpg";
import yoga2 from "@/assets/gallery/yoga2.jpg";
import yoga3 from "@/assets/gallery/yoga3.jpg";
import yoga4 from "@/assets/gallery/yoga4.jpg";

export type Photo = {
  src: string;
  title: string;
  category: string;
  description?: string;
  date?: string;
  eventTitle?: string;
};

export const photos: Photo[] = [
  // Events
  { category: "events", title: "Investiture Ceremony 2026–27", src: "/images/Events/Investiture ceremony/WhatsApp Image 2026-10-05 at 2.08.27 PM (1).jpeg" },
  { category: "events", title: "Student Council Election", src: "/images/Events/School Election/WhatsApp Image 2026-10-05 at 2.08.28 PM (1).jpeg" },
  { category: "events", title: "Krishna Janmashtami Festivities", src: "/images/Events/Krishna Janmastmi/WhatsApp Image 2026-10-01 at 13.37.09 (1).jpeg" },
  { category: "events", title: "Ganesha Pooja Festivities", src: "/images/Events/Ganesha Pooja/WhatsApp Image 2026-10-01 at 13.37.00.jpeg" },
  { category: "events", title: "Onam Festival & Pookkalam", src: "/images/Events/Onam/WhatsApp Image 2026-10-01 at 14.35.15.jpeg" },
  { category: "events", title: "Inter-House Rangoli Competition", src: "/images/Events/Rangoli/WhatsApp Image 2026-10-01 at 13.37.18 (2).jpeg" },
  { category: "events", title: "Pre-Primary Fruit Identification", src: "/images/Events/Fruits Identification/WhatsApp Image 2026-10-01 at 15.00.25 (1).jpeg" },
  { category: "events", title: "Annual Sports Meet Athletics", src: "/images/Events/Annual Sports Meet/FB_IMG_1791268754974.jpg" },
  // Labs
  { category: "labs", title: "Labs Photo 1", src: labs1 },
  { category: "labs", title: "Labs Photo 2", src: labs2 },
  { category: "labs", title: "Labs Photo 3", src: labs3 },
  { category: "labs", title: "Labs Photo 4", src: labs4 },
  // Sports
  { category: "sports", title: "Sports Photo 1", src: sports1 },
  { category: "sports", title: "Sports Photo 2", src: sports2 },
  { category: "sports", title: "Sports Photo 3", src: sports3 },
  { category: "sports", title: "Sports Photo 4", src: sports4 },
  // Classroom
  { category: "classroom", title: "Classroom Photo 1", src: classroom1 },
  { category: "classroom", title: "Classroom Photo 2", src: classroom2 },
  { category: "classroom", title: "Classroom Photo 3", src: classroom3 },
  { category: "classroom", title: "Classroom Photo 4", src: classroom4 },
  // Music
  { category: "music", title: "Music Photo 1", src: music1 },
  { category: "music", title: "Music Photo 2", src: music2 },
  { category: "music", title: "Music Photo 3", src: music3 },
  { category: "music", title: "Music Photo 4", src: music4 },
  // Yoga
  { category: "yoga", title: "Yoga Photo 1", src: yoga1 },
  { category: "yoga", title: "Yoga Photo 2", src: yoga2 },
  { category: "yoga", title: "Yoga Photo 3", src: yoga3 },
  { category: "yoga", title: "Yoga Photo 4", src: yoga4 },
];

const filters = [
  { id: "all", label: "All" },
  { id: "events", label: "Events" },
  { id: "labs", label: "Labs" },
  { id: "sports", label: "Sports" },
  { id: "classroom", label: "Classroom" },
  { id: "music", label: "Music" },
  { id: "yoga", label: "Yoga" },
];

const categoryOrder = filters.filter((f) => f.id !== "all").map((f) => f.id);
const allMixed: Photo[] = (() => {
  const groups = categoryOrder.map((cat) => photos.filter((p) => p.category === cat));
  const maxLen = Math.max(...groups.map((g) => g.length));
  const mixed: Photo[] = [];
  for (let i = 0; i < maxLen; i++) {
    for (const group of groups) {
      if (group[i]) mixed.push(group[i]);
    }
  }
  return mixed;
})();

const PhotoGallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [adminPhotos, setAdminPhotos] = useState<Photo[] | null>(null);

  useEffect(() => {
    getPublicContent("gallery")
      .then((result) => setAdminPhotos(result.items.map((item) => ({
        title: item.title,
        src: item.image_url || "/placeholder.svg",
        category: item.category || "gallery",
        description: item.body || item.subtitle || undefined,
        date: item.published_at || undefined,
        eventTitle: item.subtitle || undefined,
      }))))
      .catch(() => setAdminPhotos(null));
  }, []);

  const hasAdminPhotos = Boolean(adminPhotos?.length);
  const displayPhotos = hasAdminPhotos ? adminPhotos! : photos;
  const displayFilters = useMemo(() => {
    const categories = Array.from(new Set(displayPhotos.map((photo) => photo.category)));
    return [
      { id: "all", label: "All" },
      ...categories.map((category) => ({
        id: category,
        label: displayPhotos.find((photo) => photo.category === category)?.eventTitle || category.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()),
      })),
    ];
  }, [displayPhotos]);

  const mixed = useMemo(() => {
    if (!hasAdminPhotos) return allMixed;
    const categories = displayFilters.filter((f) => f.id !== "all").map((f) => f.id);
    const groups = categories.map((cat) => displayPhotos.filter((p) => p.category === cat));
    const maxLen = Math.max(0, ...groups.map((g) => g.length));
    const items: Photo[] = [];
    for (let i = 0; i < maxLen; i++) {
      for (const group of groups) if (group[i]) items.push(group[i]);
    }
    return items;
  }, [hasAdminPhotos, displayFilters, displayPhotos]);

  const filtered = activeFilter === "all" ? mixed : displayPhotos.filter((p) => p.category === activeFilter);

  const close = useCallback(() => setLightboxIndex(null), []);
  const next = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  }, [filtered.length]);
  const prev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  }, [filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, close, next, prev]);

  return (
    <Layout>
      <PageHero
        title="Photo Gallery"
        breadcrumbs={[{ label: "Gallery" }, { label: "Photos" }]}
      />

      {/* Filters */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {displayFilters.map((f) => {
              const isActive = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`px-6 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-indian-green text-white border-indian-green hover:bg-indian-green hover:text-white"
                      : "bg-white text-indian-green border-indian-green hover:bg-indian-green hover:text-white"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((photo, index) => (
              <button
                key={`${photo.src}-${index}`}
                onClick={() => setLightboxIndex(index)}
                className="group cursor-pointer overflow-hidden rounded-2xl bg-white text-left transition-all duration-300"
                style={{ boxShadow: "0 8px 25px rgba(0,0,0,0.08)" }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.15)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)")}
              >
                <div className="relative overflow-hidden h-[240px]">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/placeholder.svg"; }}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={close}
        >
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="fixed top-4 right-4 z-[110] bg-indian-green text-white rounded-full p-3 hover:opacity-90 transition"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="fixed left-2 sm:left-6 top-1/2 -translate-y-1/2 z-[110] bg-indian-green text-white rounded-full p-3 hover:opacity-90 transition"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="fixed right-2 sm:right-6 top-1/2 -translate-y-1/2 z-[110] bg-indian-green text-white rounded-full p-3 hover:opacity-90 transition"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/placeholder.svg"; }}
            />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default PhotoGallery;
