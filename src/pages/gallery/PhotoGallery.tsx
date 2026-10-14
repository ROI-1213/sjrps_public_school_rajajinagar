import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { X, ChevronLeft, ChevronRight, ZoomIn, Image as ImageIcon } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { getPublicContent } from "@/lib/api";
import { allSchoolPhotos, galleryFilterTabs, GalleryPhotoItem } from "@/data/galleryPhotos";

export type Photo = {
  src: string;
  title: string;
  category: string;
  description?: string;
  date?: string;
  eventTitle?: string;
};

// Exported for AdminDashboard compatibility
export const photos: Photo[] = allSchoolPhotos.map((p) => ({
  src: p.src,
  title: p.title,
  category: p.category,
  eventTitle: p.eventTitle,
}));

const PhotoGallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [adminPhotos, setAdminPhotos] = useState<Photo[] | null>(null);

  useEffect(() => {
    getPublicContent("gallery")
      .then((result) => {
        if (result && result.items && result.items.length > 0) {
          setAdminPhotos(
            result.items.map((item) => ({
              title: item.title,
              src: item.image_url || "/placeholder.svg",
              category: item.category || "events",
              description: item.body || item.subtitle || undefined,
              date: item.published_at || undefined,
              eventTitle: item.subtitle || undefined,
            }))
          );
        } else {
          setAdminPhotos(null);
        }
      })
      .catch(() => setAdminPhotos(null));
  }, []);

  // Display items: use admin photos if provided, otherwise all 174 authentic school photos
  const displayPhotos = useMemo(() => {
    if (adminPhotos && adminPhotos.length > 0) {
      return adminPhotos;
    }
    return photos;
  }, [adminPhotos]);

  // Filter tabs
  const filters = useMemo(() => {
    if (adminPhotos && adminPhotos.length > 0) {
      const categories = Array.from(new Set(adminPhotos.map((p) => p.category)));
      return [
        { id: "all", label: `All Photos (${adminPhotos.length})` },
        ...categories.map((c) => ({
          id: c,
          label: c.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()),
        })),
      ];
    }
    return galleryFilterTabs;
  }, [adminPhotos]);

  const filtered = useMemo(() => {
    if (activeFilter === "all") return displayPhotos;
    return displayPhotos.filter((p) => p.category === activeFilter);
  }, [activeFilter, displayPhotos]);

  const close = useCallback(() => setLightboxIndex(null), []);
  const next = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  }, [filtered.length]);
  const prev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  }, [filtered.length]);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "unset";
    };
  }, [lightboxIndex, close, next, prev]);

  return (
    <Layout>
      <PageHero
        title="Photo Gallery"
        breadcrumbs={[{ label: "Gallery" }, { label: "Photos" }]}
      />

      {/* Category Filter Pills */}
      <section className="py-8 bg-slate-50/60 border-b border-slate-200/80 sticky top-0 z-20 backdrop-blur-md bg-white/90">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {filters.map((f) => {
              const isActive = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`px-4 sm:px-5 py-2 rounded-full border text-xs sm:text-sm font-semibold transition-all duration-300 shadow-xs cursor-pointer ${
                    isActive
                      ? "bg-indian-green text-white border-indian-green shadow-md scale-105"
                      : "bg-white text-school-brown border-slate-200 hover:border-indian-green hover:text-indian-green hover:bg-indian-green/5"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
          <div className="text-center mt-3 text-xs text-muted-foreground font-medium flex items-center justify-center gap-1.5">
            <ImageIcon className="h-3.5 w-3.5 text-indian-green" />
            <span>
              Displaying <strong>{filtered.length}</strong> authentic school photographs
            </span>
          </div>
        </div>
      </section>

      {/* Photo Gallery Grid */}
      <section className="py-12 lg:py-16 bg-white min-h-[500px]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {filtered.map((photo, index) => (
              <div
                key={`${photo.src}-${index}`}
                onClick={() => setLightboxIndex(index)}
                className="group cursor-pointer overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-indian-green/30 flex flex-col"
              >
                <div className="relative overflow-hidden bg-slate-100 aspect-[4/3]">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                    }}
                  />
                  <div className="absolute inset-0 bg-school-brown/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/95 text-school-brown rounded-full px-3.5 py-1.5 shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300 flex items-center gap-1.5 text-xs font-semibold">
                      <ZoomIn className="h-3.5 w-3.5 text-indian-green" />
                      <span>View</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-white border-t border-slate-100 flex-1 flex flex-col justify-between">
                  {photo.eventTitle && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indian-green line-clamp-1 mb-0.5">
                      {photo.eventTitle}
                    </span>
                  )}
                  <h3 className="text-xs font-medium text-school-brown line-clamp-1">
                    {photo.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6"
          onClick={close}
        >
          {/* Top Header */}
          <div
            className="flex items-center justify-between text-white max-w-6xl mx-auto w-full z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-medium tracking-wide">
                Photo {lightboxIndex + 1} of {filtered.length}
              </span>
              {filtered[lightboxIndex].eventTitle && (
                <span className="hidden sm:inline text-xs text-white/80 font-medium truncate max-w-md">
                  {filtered[lightboxIndex].eventTitle}
                </span>
              )}
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
              className="rounded-full bg-white/10 hover:bg-white/20 p-2 sm:p-2.5 text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>

          {/* Center Image Container */}
          <div
            className="relative flex-1 flex items-center justify-center max-w-6xl mx-auto w-full my-2 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-2 sm:left-4 z-20 rounded-full bg-black/60 hover:bg-indian-green text-white p-2.5 sm:p-3 transition-colors shadow-2xl cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="max-h-[75vh] max-w-full flex flex-col items-center justify-center p-2">
              <img
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].title}
                className="max-h-[72vh] max-w-full object-contain rounded-lg shadow-2xl"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                }}
              />
              <p className="mt-3 text-center text-xs sm:text-sm text-slate-200 max-w-2xl px-4 line-clamp-2">
                {filtered[lightboxIndex].title}
              </p>
            </div>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-2 sm:right-4 z-20 rounded-full bg-black/60 hover:bg-indian-green text-white p-2.5 sm:p-3 transition-colors shadow-2xl cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Bottom Keyboard Hint */}
          <div
            className="text-center text-[11px] text-white/50 pb-1 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            Press <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-white/80">Esc</kbd> to close, or use <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-white/80">←</kbd> <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-white/80">→</kbd> to navigate
          </div>
        </div>
      )}
    </Layout>
  );
};

export default PhotoGallery;
