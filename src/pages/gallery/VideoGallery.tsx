import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Sparkles, Video as VideoIcon, Images } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import { getPublicContent } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export type Video = {
  id: string;
  title: string;
  description: string;
  category: string;
  date?: string;
  videoUrl?: string;
  thumbnail?: string;
};

export const videos: Video[] = [];

function getYoutubeId(value: unknown) {
  const text = typeof value === "string" ? value.trim() : "";
  if (!text) return "";
  const watchMatch = text.match(/[?&]v=([^&]+)/);
  const shortMatch = text.match(/youtu\.be\/([^?&]+)/);
  const embedMatch = text.match(/youtube\.com\/embed\/([^?&]+)/);
  return watchMatch?.[1] || shortMatch?.[1] || embedMatch?.[1] || "";
}

const VideoGallery = () => {
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

  return (
    <Layout>
      <PageHero
        title="Video Gallery"
        breadcrumbs={[{ label: "Gallery" }, { label: "Videos" }]}
      />

      {featuredVideo ? (
        <section className="py-12 lg:py-16 bg-gradient-to-b from-slate-50 to-white">
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
      ) : (
        <section className="py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4 max-w-xl text-center">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-indian-green/10 flex items-center justify-center text-indian-green">
              <VideoIcon className="h-8 w-8" />
            </div>
            <h2
              className="text-2xl sm:text-3xl font-bold text-school-brown mb-3"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Video Gallery Coming Soon
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8">
              Campus tour videos, student achievements, and cultural celebration films will be published here soon.
            </p>
            <Button asChild className="bg-indian-green hover:bg-indian-green/90 text-white font-medium px-6 py-2.5 rounded-full shadow-md">
              <Link to="/gallery/photos" className="inline-flex items-center gap-2">
                <Images className="h-4 w-4" />
                Explore Photo Gallery
              </Link>
            </Button>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default VideoGallery;
