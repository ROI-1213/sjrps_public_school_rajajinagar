import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { getPublicContent } from "@/lib/api";

export type Video = {
  id: string;
  title: string;
  description: string;
  category: string;
  date?: string;
};

export const videos: Video[] = [
  {
    id: "o_C7emPRYuE",
    title: "SJR Public School Video",
    description: "A school overview video highlighting SJR Public School, HBR Layout.",
    category: "School Overview",
  },
  {
    id: "sk0PKZrHG90",
    title: "Samskruthi - Annual Day 2025-26, Day 02 Part 02",
    description: "Annual Day performance coverage from 5 December 2025 at SJR Public School, HBR Layout.",
    category: "Annual Day",
    date: "05/12/2025",
  },
  {
    id: "XPtrhKrKdkY",
    title: "Samskruthi - Annual Day 2025-26, Day 02 Part 01",
    description: "Cultural performances from the second day of Annual Day celebrations.",
    category: "Annual Day",
    date: "05/12/2025",
  },
  {
    id: "PfeEaFfGRdg",
    title: "Annual Day 2025-26, Day 01 Part 01",
    description: "Highlights from the first day of Annual Day celebrations at SJR Public School, HBR Layout.",
    category: "Annual Day",
    date: "04/12/2025",
  },
  {
    id: "x2SUBVuDnzA",
    title: "International Yoga Day Celebration",
    description: "Students celebrate Yoga Day through asanas, movement, and wellness-focused activities.",
    category: "Yoga Day",
  },
  {
    id: "TmKJMWYXRDw",
    title: "Senior Secondary CBSE Inspection 2024-25",
    description: "A video record of the senior secondary CBSE inspection at SJR Public School, HBR Layout.",
    category: "Campus & Academics",
  },
  {
    id: "jBiwAeJrlJ4",
    title: "Investiture Ceremony 2026-27",
    description: "Student leaders take oath and receive responsibilities for the 2026-27 academic year.",
    category: "Investiture Ceremony",
  },
  {
    id: "86EgaHdBOaQ",
    title: "Bird View of SJR-HBR Campus",
    description: "An aerial view of the SJR Public School HBR campus.",
    category: "Campus Tour",
  },
];

function getYoutubeId(value: unknown) {
  const text = typeof value === "string" ? value.trim() : "";
  if (!text) return "";
  const watchMatch = text.match(/[?&]v=([^&]+)/);
  const shortMatch = text.match(/youtu\.be\/([^?&]+)/);
  const embedMatch = text.match(/youtube\.com\/embed\/([^?&]+)/);
  return watchMatch?.[1] || shortMatch?.[1] || embedMatch?.[1] || text;
}

const VideoGallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [adminVideos, setAdminVideos] = useState<Video[] | null>(null);
  const displayVideos = adminVideos?.length ? adminVideos : videos;

  const close = () => setLightboxIndex(null);
  const next = () => setLightboxIndex((i) => (i === null ? null : (i + 1) % displayVideos.length));
  const prev = () => setLightboxIndex((i) => (i === null ? null : (i - 1 + displayVideos.length) % displayVideos.length));

  useEffect(() => {
    getPublicContent("video")
      .then((result) => setAdminVideos(result.items.map((item) => ({
        id: getYoutubeId(item.fields?.youtubeId || item.image_url || item.title),
        title: item.title,
        description: item.body || item.subtitle || "SJR Public School video gallery item.",
        category: item.category || "Video Gallery",
        date: item.published_at || undefined,
      }))))
      .catch(() => setAdminVideos(null));
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex]);

  return (
    <Layout>
      <PageHero
        title="Video Gallery"
        breadcrumbs={[{ label: "Gallery" }, { label: "Videos" }]}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayVideos.map((v, index) => (
              <button
                key={`${v.id}-${index}`}
                onClick={() => setLightboxIndex(index)}
                className="group cursor-pointer overflow-hidden rounded-2xl bg-white text-left transition-all duration-300"
                style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.15)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)")}
              >
                <div className="relative h-[200px] overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                    alt={v.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-all duration-300">
                    <div
                      className="rounded-full p-5 transform group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: "hsl(var(--indian-green))" }}
                    >
                      <Play className="h-8 w-8 text-white" fill="white" />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-fade-in"
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

          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                key={displayVideos[lightboxIndex].id}
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${displayVideos[lightboxIndex].id}?autoplay=1&rel=0`}
                title={displayVideos[lightboxIndex].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default VideoGallery;
