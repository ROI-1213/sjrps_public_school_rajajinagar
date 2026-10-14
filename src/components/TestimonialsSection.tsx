import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useMemo, useState } from "react";
import { getPublicContent, type AdminContentItem } from "@/lib/api";
import { mergeTestimonialItems } from "@/lib/testimonialContent";

const TestimonialsSection = () => {
  const [adminTestimonials, setAdminTestimonials] = useState<AdminContentItem[]>([]);

  useEffect(() => {
    getPublicContent("testimonial")
      .then((result) => setAdminTestimonials(result.items))
      .catch(() => setAdminTestimonials([]));
  }, []);

  const testimonials = useMemo(() => mergeTestimonialItems(adminTestimonials), [adminTestimonials]);

  return (
    <section className="py-8 lg:py-10 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indian-green">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-school-brown mt-2 leading-tight">
            What Parents <span className="text-indian-green">Say</span>
          </h2>
        </div>

        <Carousel
          className="w-full mx-auto"
          plugins={[Autoplay({ delay: 4500 })]}
          opts={{ align: "start", loop: true }}
        >
          <CarouselContent className="-ml-4 items-stretch">
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="pl-4 md:basis-1/2 h-auto">
                <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 border-t-4 border-indian-green flex flex-col">
                  <CardContent className="p-7 flex flex-col flex-1">
                    <Quote className="h-8 w-8 text-indian-green mb-3" />
                    <p className="text-elegant-light leading-relaxed italic text-[15px] mb-6 flex-1 overflow-hidden [display:-webkit-box] [-webkit-line-clamp:5] [-webkit-box-orient:vertical]">
                      "{t.quote}"
                    </p>
                    <div className="mt-auto pt-4 border-t flex items-center gap-4">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="h-14 w-14 rounded-full object-cover ring-2 ring-indian-green/30 flex-shrink-0"
                      />
                      <div>
                        <h4 className="font-bold text-school-brown leading-tight">{t.name}</h4>
                        <p className="text-elegant-light text-sm font-normal mt-1">{t.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex bg-indian-green hover:bg-indian-green/90 text-white border-0 -left-4 sm:-left-12" />
          <CarouselNext className="hidden sm:flex bg-indian-green hover:bg-indian-green/90 text-white border-0 -right-4 sm:-right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
