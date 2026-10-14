import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, ChevronLeft, ChevronRight, ZoomIn, ArrowRight, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { historicalPhotos, HistoricalPhoto } from "@/data/historicalPhotos";

interface HistoricalGallerySectionProps {
  limit?: number;
  showViewAllButton?: boolean;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const HistoricalGallerySection: React.FC<HistoricalGallerySectionProps> = ({
  limit,
  showViewAllButton = true,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const displayPhotos = limit && !isExpanded ? historicalPhotos.slice(0, limit) : historicalPhotos;

  const handleClose = useCallback(() => setSelectedIndex(null), []);
  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + historicalPhotos.length) % historicalPhotos.length));
  }, []);
  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % historicalPhotos.length));
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      else if (e.key === "ArrowLeft") handlePrev();
      else if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedIndex, handleClose, handlePrev, handleNext]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedIndex]);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-amber-50/20 to-white border-t border-slate-100 relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-indian-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-saffron-orange/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-indian-green/10 text-indian-green px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            <History className="h-3.5 w-3.5" />
            OUR HERITAGE
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-school-brown leading-tight mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Glimpses of Our <span className="text-indian-green">Glorious Past</span>
          </h2>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
            A visual journey through the cherished memories, milestones and enduring legacy of SJR Public School, Rajajinagar.
          </p>
          <div className="mx-auto h-1 w-20 bg-indian-green rounded-full mb-6" />
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed italic border-l-2 md:border-l-0 md:border-y border-indian-green/20 py-3 px-4 bg-white/60 rounded-xl shadow-xs">
            “Every photograph tells a story of our school's journey, its people, traditions and cherished memories. These archival images celebrate the foundations of the institution and the generations who have been part of its growth.”
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {displayPhotos.map((photo, index) => {
            const isLandscape = photo.orientation === "landscape";
            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className={isLandscape && index === 0 ? "sm:col-span-2 lg:col-span-2" : ""}
              >
                <Card
                  onClick={() => setSelectedIndex(index)}
                  className="group cursor-pointer overflow-hidden rounded-2xl bg-white border border-slate-200/90 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-indian-green/30"
                  style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}
                >
                  <div
                    className={`relative overflow-hidden bg-slate-100 flex items-center justify-center ${
                      isLandscape && index === 0 ? "aspect-[16/10]" : "aspect-[4/3]"
                    }`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                      }}
                    />
                    <div className="absolute inset-0 bg-school-brown/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/95 text-school-brown rounded-full p-2.5 shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300 flex items-center gap-1.5 text-xs font-semibold px-3.5">
                        <ZoomIn className="h-4 w-4 text-indian-green" />
                        <span>Enlarge</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-white border-t border-slate-100">
                    <p className="text-xs uppercase tracking-wider text-indian-green font-semibold mb-1">
                      Archival Photograph
                    </p>
                    <h3 className="text-sm font-semibold text-school-brown line-clamp-1 leading-snug">
                      {photo.caption}
                    </h3>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        {showViewAllButton && limit && historicalPhotos.length > limit && (
          <div className="mt-12 text-center">
            <Button
              asChild
              className="bg-indian-green hover:bg-indian-green/90 text-white font-semibold px-8 py-3 h-12 rounded-xl shadow-md hover:shadow-lg transition-all group"
            >
              <Link to="/about/our-heritage">
                View All Historical Photos
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
            onClick={handleClose}
          >
            {/* Top Bar */}
            <div
              className="flex items-center justify-between text-white max-w-6xl mx-auto w-full z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white/10 backdrop-blur px-3 py-1.5 rounded-full text-xs font-medium tracking-wide">
                Photo {selectedIndex + 1} of {historicalPhotos.length}
              </div>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close photo preview"
                className="rounded-full bg-white/10 hover:bg-white/20 p-2 text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Main Image Container */}
            <div
              className="relative flex-1 flex items-center justify-center max-w-6xl mx-auto w-full my-3 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous photo"
                className="absolute left-2 sm:left-4 z-20 rounded-full bg-black/50 hover:bg-indian-green text-white p-2.5 sm:p-3 transition-colors shadow-xl"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="max-h-[75vh] max-w-full flex flex-col items-center justify-center p-2"
              >
                <img
                  src={historicalPhotos[selectedIndex].src}
                  alt={historicalPhotos[selectedIndex].alt}
                  className="max-h-[70vh] max-w-full object-contain rounded-lg shadow-2xl"
                />
                <p className="mt-3 text-center text-xs sm:text-sm text-slate-200 max-w-2xl px-4">
                  {historicalPhotos[selectedIndex].caption}
                </p>
              </motion.div>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next photo"
                className="absolute right-2 sm:right-4 z-20 rounded-full bg-black/50 hover:bg-indian-green text-white p-2.5 sm:p-3 transition-colors shadow-xl"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Bottom Indicator */}
            <div
              className="text-center text-xs text-white/60 pb-2 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              Press <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-white/80">Esc</kbd> to close, or use <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-white/80">←</kbd> <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-white/80">→</kbd> to navigate
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HistoricalGallerySection;
