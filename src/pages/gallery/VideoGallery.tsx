import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Play, X, ChevronLeft, ChevronRight, Video as VideoIcon, Film, Sparkles } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import { getPublicContent } from "@/lib/api";

export type Video = {
  id: string;
  title: string;
  description: string;
  category: string;
  date?: string;
  videoUrl?: string;
  thumbnail?: string;
};

export const videos: Video[] = [
  {
    id: "sjrps-rajajinagar-showcase",
    title: "SJR Public School, Rajajinagar — Official Campus Showcase",
    description: "Comprehensive campus video showcasing SJR Public School, Rajajinagar — classroom learning, laboratory experimentation, sports activities, cultural celebrations, and campus life.",
    category: "Campus Tour",
    date: "Academic Year 2026–27",
    videoUrl: "/videos/sjrps-rajajinagar.mp4",
    thumbnail: "/images/Photos/School Building/school-building-main-gate.jpg",
  },
  {
    id: "annual-sports-meet-video",
    title: "Annual Sports Meet & Athletic Championship",
    description: "Athletics, sprint events, drill displays, and sportsmanship celebrations across primary and secondary wings at SJRPS-Rajajinagar.",
    category: "Sports & Athletics",
    date: "January 2026",
    videoUrl: "/videos/sjrps-rajajinagar.mp4",
    thumbnail: "/images/Events/Annual Sports Meet/FB_IMG_1791268754974.jpg",
  },
  {
    id: "investiture-ceremony-video",
    title: "Student Council Investiture Ceremony 2026–27",
    description: "Formal leadership conferral, badge pinning of the student council, and the solemn oath-taking ceremony.",
    category: "Campus Events",
    date: "July 2026",
    videoUrl: "/videos/sjrps-rajajinagar.mp4",
    thumbnail: "/images/Events/Investiture ceremony/WhatsApp Image 2026-10-05 at 2.08.27 PM (1).jpeg",
  },
  {
    id: "krishna-janmashtami-video",
    title: "Krishna Janmashtami & Cultural Festivities",
    description: "Vibrant cultural dances, festive songs, and traditional attire presentations by our pre-primary and primary students.",
    category: "Cultural Celebrations",
    date: "August 2026",
    videoUrl: "/videos/sjrps-rajajinagar.mp4",
    thumbnail: "/images/Events/Krishna Janmastmi/WhatsApp Image 2026-10-01 at 13.37.09 (1).jpeg",
  },
  {
    id: "science-stem-video",
    title: "STEM Innovation & Science Laboratory Session",
    description: "Students engaging in hands-on science experiments, robotics programming, and computer laboratory exploration.",
    category: "Academic & STEM",
    date: "Academic Year 2026–27",
    videoUrl: "/videos/sjrps-rajajinagar.mp4",
    thumbnail: "/images/Photos/Science Lab/1.jpg",
  },
];

function getYoutubeId(value: unknown) {
  const text = typeof value === "string" ? value.trim() : "";
  if (!text) return "";
  const watchMatch = text.match(/[?&]v=([^&]+)/);
  const shortMatch = text.match(/youtu\.be\/([^?&]+)/);
  const embedMatch = text.match(/youtube\.com\/embed\/([^?&]+)/);
  return watchMatch?.[1] || shortMatch?.[1] || embedMatch?.[1] || "";
}

const VideoGallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [adminVideos, setAdminVideos] = useState<Video[] | null>(null);

  useEffect(() => {
    getPublicContent("video")
      .then((result) => {
        if (result && result.items && result.items.length > 0) {
          setAdminVideos(
            result.items.map((item) => {
              const ytId = getYoutubeId(item.fields?.youtubeId || item.image_url || item.title);
              const isDirectVideo = item.image_url && /\.(mp4|webm|mov)$/i.test(item.image_url);
              return {
                id: item.id || ytId || "video",
                title: item.title,
                description: item.body || item.subtitle || "SJR Public School video gallery item.",
                category: item.category || "Video Gallery",
                date: item.published_at || undefined,
                videoUrl: isDirectVideo ? item.image_url : undefined,
                thumbnail: item.image_url || "/images/Photos/School Building/school-building-main-gate.jpg",
              };
            })
          );
        } else {
          setAdminVideos(null);
        }
      })
      .catch(() => setAdminVideos(null));
  }, []);

  const displayVideos = useMemo(() => {
    return adminVideos?.length ? adminVideos : videos;
  }, [adminVideos]);

  const featuredVideo = displayVideos[0];

  const close = () => setLightboxIndex(null);
  const next = () => setLightboxIndex((i) => (i === null ? null : (i + 1) % displayVideos.length));
  const prev = () => setLightboxIndex((i) => (i === null ? null : (i - 1 + displayVideos.length) % displayVideos.length));

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
  }, [lightboxIndex]);

  const currentVideo = lightboxIndex !== null ? displayVideos[lightboxIndex] : null;

  return (
    <Layout>
      <PageHero
        title="Video Gallery"
        breadcrumbs={[{ label: "Gallery" }, { label: "Videos" }]}
      />

      {/* Featured Video Showcase */}
      {featuredVideo && (
        <section className="py-12 lg:py-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/80">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-1.5 bg-indian-green/10 text-indian-green px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="h-3.5 w-3.5" />
                Featured Campus Film
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-school-brown"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {featuredVideo.title}
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-2xl mx-auto">
                {featuredVideo.description}
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video border border-slate-200">
              {featuredVideo.videoUrl ? (
                <video
                  src={featuredVideo.videoUrl}
                  controls
                  preload="metadata"
                  poster={featuredVideo.thumbnail}
                  className="w-full h-full object-contain"
                >
                  Your browser does not support HTML5 video.
                </video>
              ) : (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${featuredVideo.id}?rel=0`}
                  title={featuredVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </section>
      )}

      {/* Video Gallery Grid */}
      <section className="py-16 bg-white min-h-[400px]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center gap-2 mb-8">
            <Film className="h-5 w-5 text-indian-green" />
            <h3 className="text-xl font-bold text-school-brown">All School Videos</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {displayVideos.map((v, index) => {
              const isDirect = Boolean(v.videoUrl);
              const thumbUrl = v.thumbnail || (v.id ? `https://img.youtube.com/vi/${v.id}/hqdefault.jpg` : "/images/Photos/School Building/school-building-main-gate.jpg");

              return (
                <div
                  key={`${v.id}-${index}`}
                  onClick={() => setLightboxIndex(index)}
                  className="group cursor-pointer overflow-hidden rounded-2xl bg-white border border-slate-200/90 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-indian-green/40 flex flex-col"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <img
                      src={thumbUrl}
                      alt={v.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "/images/Photos/School Building/school-building-main-gate.jpg";
                      }}
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                      <div className="rounded-full p-4 bg-indian-green text-white shadow-xl transform group-hover:scale-110 transition-transform">
                        <Play className="h-7 w-7 text-white fill-white translate-x-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-2.5 right-2.5 bg-black/80 backdrop-blur px-2.5 py-1 rounded text-[11px] font-semibold text-white">
                      {isDirect ? "MP4 Video" : "Video"}
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-indian-green">
                        {v.category}
                      </span>
                      <h4 className="text-sm font-bold text-school-brown line-clamp-2 mt-1 leading-snug group-hover:text-indian-green transition-colors">
                        {v.title}
                      </h4>
                      <p className="text-xs text-muted-foreground line-clamp-2 mt-1.5 leading-relaxed">
                        {v.description}
                      </p>
                    </div>
                    {v.date && (
                      <span className="text-[11px] text-muted-foreground mt-3 pt-2 border-t border-slate-100 block">
                        {v.date}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox Video Modal */}
      {lightboxIndex !== null && currentVideo && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 animate-fade-in"
          onClick={close}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between text-white max-w-5xl mx-auto w-full z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-medium">
                Video {lightboxIndex + 1} of {displayVideos.length}
              </span>
              <span className="hidden sm:inline text-xs text-white/80 font-medium truncate max-w-md">
                {currentVideo.title}
              </span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
              className="rounded-full bg-white/10 hover:bg-white/20 p-2 sm:p-2.5 text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Player Container */}
          <div
            className="relative flex-1 flex items-center justify-center max-w-5xl mx-auto w-full my-2 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-2 sm:left-4 z-20 rounded-full bg-black/60 hover:bg-indian-green text-white p-3 transition-colors shadow-2xl cursor-pointer"
              aria-label="Previous video"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="w-full flex flex-col items-center justify-center">
              {currentVideo.videoUrl ? (
                <video
                  key={currentVideo.videoUrl}
                  src={currentVideo.videoUrl}
                  controls
                  autoPlay
                  poster={currentVideo.thumbnail}
                  className="max-h-[75vh] w-full object-contain rounded-xl shadow-2xl bg-black"
                >
                  Your browser does not support HTML5 video.
                </video>
              ) : (
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
                  <iframe
                    key={currentVideo.id}
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=1&rel=0`}
                    title={currentVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
              <h3 className="mt-3 text-sm text-white font-semibold text-center px-4">
                {currentVideo.title}
              </h3>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-2 sm:right-4 z-20 rounded-full bg-black/60 hover:bg-indian-green text-white p-3 transition-colors shadow-2xl cursor-pointer"
              aria-label="Next video"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Footer Keyboard Hint */}
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

export default VideoGallery;
