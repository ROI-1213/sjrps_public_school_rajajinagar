import { Button } from "@/components/ui/button";
import { ChevronRight, GraduationCap, BookOpen, Users, Trophy, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { schoolConfig } from "@/schoolConfig";

const AnimatedBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      tag: "Welcome to SJR",
      title: "Excellence in Education",
      subtitle: "Shaping Tomorrow's Leaders Today",
      description: "Where tradition meets innovation in a vibrant, value-driven CBSE learning environment.",
      image: "/images/Photos/School Building/School Building1.jpg",
    },
    {
      tag: "A Legacy Since 1981",
      title: "A Legacy of Learning",
      subtitle: "Building Character & Confidence",
      description: "Committed to academic brilliance, ethical integrity, and lifelong learning for every child.",
      image: "/images/Photos/classroom/1.jpg",
    },
    {
      tag: "Future-Ready Campus",
      title: "Modern Learning",
      subtitle: "State-of-the-Art Facilities",
      description: "Equipped with AI flat panels, robotics laboratories, and digital infrastructure for progressive education.",
      image: "/images/Photos/Library/1.jpg",
    },
    {
      tag: "Beyond The Classroom",
      title: "Holistic Development",
      subtitle: "Beyond Academics, Building Citizens",
      description: "Sports, taekwondo, yoga, arts, and values come together for complete, well-rounded development.",
      image: "/images/Photos/Science Lab/1.jpg",
    },
  ];

  const stats = [
    { icon: GraduationCap, label: "Students", value: "1000+" },
    { icon: BookOpen, label: "Curriculum", value: "CBSE Syllabus" },
    { icon: Users, label: "Faculty", value: "50+" },
    { icon: Trophy, label: "Alumni", value: "600+" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((p) => (p + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full overflow-hidden min-h-[640px] sm:min-h-[700px] lg:min-h-0 lg:aspect-[1920/880] lg:max-h-[90vh]">
      {/* Slides with Ken Burns zoom */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover ${
                index === currentSlide ? "scale-110" : "scale-100"
              } transition-transform duration-[7000ms] ease-out`}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
              }}
            />
            {/* Layered overlays for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-school-brown/90 via-school-brown/65 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/30" />
            {/* Subtle pattern */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
                backgroundSize: "26px 26px",
              }}
            />
          </div>
        ))}
      </div>

      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-saffron-orange/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-1/4 w-[480px] h-[480px] rounded-full bg-indian-green/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center py-16 lg:py-0">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left: copy in glass panel */}
            <div className="lg:col-span-7 text-white">
              <div
                key={currentSlide}
                className="animate-fade-in space-y-6"
              >
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/25 shadow-lg">
                  <Sparkles className="h-3.5 w-3.5 text-saffron-orange" />
                  <span className="font-sans font-semibold text-[11px] sm:text-xs tracking-[0.2em] uppercase">
                    {slides[currentSlide].tag}
                  </span>
                </div>

                <div className="space-y-3">
                  <p className="font-sans text-saffron-orange font-semibold text-sm sm:text-base tracking-widest uppercase">
                    SJR Public School • Rajajinagar
                  </p>
                  <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight drop-shadow-2xl">
                    <span className="block">{slides[currentSlide].title}</span>
                    <span className="block mt-2 bg-gradient-to-r from-saffron-orange via-golden-yellow to-saffron-orange bg-clip-text text-transparent">
                      {slides[currentSlide].subtitle}
                    </span>
                  </h1>
                </div>

                <p className="font-sans text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl">
                  {slides[currentSlide].description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Button
                    asChild
                    className="group bg-gradient-to-r from-indian-green to-indian-green/85 hover:from-indian-green/90 hover:to-indian-green text-white px-8 h-13 py-3 min-w-[170px] text-base font-semibold shadow-2xl shadow-indian-green/40 hover:shadow-indian-green/60 transition-all hover:-translate-y-0.5"
                  >
                    <Link to="/about/overview">
                      Discover Our School
                      <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="group border-2 border-white/40 bg-white/10 text-white hover:bg-white hover:text-school-brown px-8 h-13 py-3 min-w-[170px] text-base font-semibold backdrop-blur-md transition-all hover:-translate-y-0.5"
                  >
                    <Link to="/admissions/admissions-process">
                      Apply Now
                      <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right: glass stats card */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-saffron-orange/30 via-transparent to-indian-green/30 rounded-3xl blur-xl" />
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-7 shadow-2xl">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="text-white/60 text-[11px] uppercase tracking-[0.2em] font-semibold">
                        At A Glance
                      </p>
                      <p className="text-white font-serif text-xl sm:text-2xl mt-1">
                        Excellence by Numbers
                      </p>
                    </div>
                    <div className="h-10 w-10 rounded-xl bg-saffron-orange/20 border border-saffron-orange/40 flex items-center justify-center">
                      <Sparkles className="h-5 w-5 text-saffron-orange" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {stats.map((stat, i) => (
                      <div
                        key={i}
                        className="group relative bg-white/[0.07] hover:bg-white/[0.14] border border-white/15 hover:border-white/30 rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1"
                      >
                        <stat.icon className="h-6 w-6 text-saffron-orange mb-2.5 group-hover:scale-110 transition-transform" />
                        <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-none tracking-tight">
                          {stat.value}
                        </div>
                        <div className="text-white/70 text-[11px] sm:text-xs tracking-wider mt-1.5 uppercase font-medium">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? "w-10 bg-saffron-orange"
                : "w-4 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default AnimatedBanner;
