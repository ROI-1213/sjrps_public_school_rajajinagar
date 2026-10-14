import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { historicalPhotos } from "@/data/historicalPhotos";

interface HistoricalGallerySectionProps {
  limit?: number;
  showViewAllButton?: boolean;
}

export const HistoricalGallerySection: React.FC<HistoricalGallerySectionProps> = ({
  limit,
  showViewAllButton = true,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const displayPhotos = limit ? historicalPhotos.slice(0, limit) : historicalPhotos;

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
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Glimpses of Our Glorious Past
          </h2>
          <div className="mx-auto h-1 w-20 bg-indian-green rounded-full mb-4" />
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            A visual journey through the cherished memories, milestones and enduring legacy of SJR Public School, Rajajinagar.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setSelectedIndex(index)}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-slate-100 border border-gray-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 aspect-[4/3]"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                }}
              />
            </div>
          ))}
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
