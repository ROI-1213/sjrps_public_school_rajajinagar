import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft, X } from "lucide-react";
import { schoolConfig } from "@/schoolConfig";

const images = [
  { url: "/images/Photos/Assembly/DSC00056.JPG", caption: "Morning Assembly & Campus Gathering" },
  { url: "/images/Photos/Library/DSC01566.JPG", caption: "Reference & Reading in Campus Library" },
  { url: "/images/Photos/Music/DSC00997.JPG", caption: "Music & Instrumental Keyboard Training" },
  { url: "/images/Photos/Cubs and Bul Bul/DSC00576.JPG", caption: "Cubs & Bulbul Scouts Discipline" },
  { url: "/images/Photos/Kids Play Area And Activity/DSC00642.JPG", caption: "Junior Expressions & Stage Performance" },
  { url: "/images/Photos/Taekwondo/DSC00704.JPG", caption: "Taekwondo & Self-Defence Training" },
  { url: "/images/Photos/Sports/DSC01303.JPG", caption: "Chess & Strategic Mind Sports" },
  { url: "/images/Events/School Election/WhatsApp Image 2026-10-05 at 2.08.28 PM (1).jpeg", caption: "Student Council Democratic Elections" },
];

const GallerySection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    []
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % images.length)),
    []
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, prev, next]);

  return (
    <section className="py-14 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indian-green">Gallery</span>
          <h2 className="text-3xl md:text-4xl font-bold text-school-brown mt-2 mb-3 leading-tight">
            Moments at <span className="text-indian-green">{schoolConfig.shortName}</span>
          </h2>
          <p className="text-base text-muted-foreground">A glimpse into the vibrant campus life and milestones at Rajajinagar.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {images.map((item, i) => (
            <button
              key={i}
              onClick={() => setOpenIndex(i)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.url}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                }}
              />
              <div className="absolute inset-0 bg-indian-green/0 group-hover:bg-indian-green/30 transition-colors duration-300 flex items-end p-3">
                <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity drop-shadow">
                  {item.caption}
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild className="bg-indian-green hover:bg-indian-green/90 text-white px-8">
            <Link to="/gallery/photos">
              View More Photos
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={close}
        >
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-4 right-4 bg-indian-green hover:bg-indian-green/90 text-white w-10 h-10 rounded-full flex items-center justify-center"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-indian-green hover:bg-indian-green/90 text-white w-10 h-10 rounded-full flex items-center justify-center"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <img
            src={images[openIndex].url}
            alt={images[openIndex].caption}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 text-center text-white text-sm bg-black/60 px-4 py-1.5 rounded-full">
            {images[openIndex].caption} ({openIndex + 1} / {images.length})
          </p>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-indian-green hover:bg-indian-green/90 text-white w-10 h-10 rounded-full flex items-center justify-center"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
