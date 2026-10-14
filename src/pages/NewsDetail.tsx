import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { AdminContentItem, getPublicContent } from "@/lib/api";
import { findNewsItem } from "@/lib/newsContent";
import { Calendar, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

const NewsDetail = () => {
  const { slug } = useParams();
  const [adminNews, setAdminNews] = useState<AdminContentItem[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  useEffect(() => {
    getPublicContent("news")
      .then((result) => setAdminNews(result.items))
      .catch(() => setAdminNews([]))
      .finally(() => setLoaded(true));
  }, []);

  const event = useMemo(() => {
    const item = findNewsItem(adminNews, slug);
    if (!item) return undefined;
    return {
      title: item.title,
      date: item.date,
      body: item.body,
      gallery: item.gallery.map((src, index) => ({ src, alt: `${item.title} ${index + 1}` })),
    };
  }, [adminNews, slug]);

  if (!event && !loaded) {
    return <Layout><PageHero title="Loading News" breadcrumbs={[{ label: "News", path: "/news" }]} /></Layout>;
  }

  if (!event) {
    return <Navigate to="/news" replace />;
  }

  const selectedImage =
    selectedImageIndex !== null ? event.gallery[selectedImageIndex] : null;
  const hasMultipleImages = event.gallery.length > 1;

  const showPreviousImage = () => {
    if (selectedImageIndex === null || !hasMultipleImages) return;
    setSelectedImageIndex(
      (selectedImageIndex - 1 + event.gallery.length) % event.gallery.length
    );
  };

  const showNextImage = () => {
    if (selectedImageIndex === null || !hasMultipleImages) return;
    setSelectedImageIndex((selectedImageIndex + 1) % event.gallery.length);
  };

  return (
    <Layout>
      <PageHero
        title={event.title}
        breadcrumbs={[
          { label: "News", path: "/news" },
          { label: event.title },
        ]}
      />

      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4">
          <article className="mx-auto w-full max-w-6xl">
            <div className="w-full">
              <div className="inline-flex items-center gap-2 rounded-full bg-indian-green/10 px-4 py-2 text-sm font-semibold text-indian-green mb-5">
                <Calendar className="h-4 w-4" />
                <span>{event.date}</span>
              </div>

              <div className="space-y-4 text-sm sm:text-[15px] leading-6 sm:leading-7" style={{ color: "#333" }}>
                {event.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mb-8 pt-2">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: "#111" }}>
                Event Gallery
              </h2>
              <p className="text-sm sm:text-[15px] leading-6 max-w-3xl" style={{ color: "#333" }}>
                A glimpse of the event moments from SJR Public School, Rajajinagar.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {event.gallery.map((image, index) => (
                <button
                  key={image.alt}
                  type="button"
                  onClick={() => setSelectedImageIndex(index)}
                  className="group aspect-[4/3] overflow-hidden rounded-xl bg-white text-left focus:outline-none focus:ring-2 focus:ring-indian-green focus:ring-offset-4"
                  style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}
                  aria-label={`Open ${image.alt} gallery image`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </button>
              ))}
            </div>

            <div className="mt-12 flex justify-center sm:justify-start">
              <Button asChild className="rounded-lg bg-indian-green px-6 text-white hover:bg-indian-green/90">
                <Link to="/news">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back to News
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${event.title} image preview`}
          onClick={() => setSelectedImageIndex(null)}
        >
          <div className="relative flex h-full w-full max-w-7xl items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setSelectedImageIndex(null)}
              className="absolute right-0 top-0 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/65 text-white shadow-lg transition-colors hover:bg-black focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close image preview"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative flex h-full w-full items-center justify-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[88vh] max-w-full object-contain"
              />

              <button
                type="button"
                onClick={showPreviousImage}
                disabled={!hasMultipleImages}
                className="absolute left-0 sm:left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/65 text-white shadow-lg transition-colors hover:bg-black disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Show previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                type="button"
                onClick={showNextImage}
                disabled={!hasMultipleImages}
                className="absolute right-0 sm:right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/65 text-white shadow-lg transition-colors hover:bg-black disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Show next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default NewsDetail;
