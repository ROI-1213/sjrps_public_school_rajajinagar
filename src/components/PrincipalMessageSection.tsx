import { Button } from "@/components/ui/button";
import { ChevronRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { schoolConfig } from "@/schoolConfig";

const PrincipalMessageSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indian-green mb-2">
            LEADERSHIP
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-school-brown tracking-tight">
            Principal's <span className="text-indian-green">Message</span>
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {/* Portrait Card with Name Overlay in marked section */}
          <div className="lg:col-span-5 relative flex flex-col justify-end rounded-2xl overflow-hidden shadow-lg border border-indian-green/15 min-h-[380px] sm:min-h-[440px] bg-slate-100">
            <img 
              src={schoolConfig.principal.photo} 
              alt={`${schoolConfig.principal.name} — ${schoolConfig.principal.role}`} 
              className="absolute inset-0 w-full h-full object-cover object-top" 
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
              }}
            />
            {/* Gradient overlay for crystal-clear readability */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(to bottom, transparent 45%, rgba(0, 0, 0, 0.25) 65%, rgba(0, 0, 0, 0.88) 100%)"
              }}
            />
            {/* Name and Designation Overlay in marked section */}
            <div className="relative z-10 p-5 sm:p-6 text-white pointer-events-none">
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight drop-shadow-sm">
                {schoolConfig.principal.name}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-white/95 mt-1 drop-shadow-sm">
                {schoolConfig.principal.role}
              </p>
              <p className="text-[11px] sm:text-xs text-white/80 mt-0.5">
                M.Sc., B.Ed., PGDLET · 24 Years of Experience
              </p>
            </div>
          </div>

          {/* Content — button positioned up directly under text with no blank space */}
          <div className="lg:col-span-7 flex flex-col justify-center bg-gradient-to-br from-indian-green/5 via-slate-50/50 to-tricolor-orange/5 p-6 sm:p-8 rounded-2xl border border-indian-green/15 shadow-sm">
            <Quote className="h-8 w-8 text-indian-green mb-3 shrink-0" />
            <p className="text-base sm:text-lg md:text-xl font-serif italic text-school-brown leading-snug mb-5">
              "{schoolConfig.principal.quote}"
            </p>

            <div className="space-y-3.5 text-muted-foreground leading-relaxed text-sm">
              <div>
                <p className="font-bold text-indian-green text-xs uppercase tracking-wider mb-1">
                  Our Vision
                </p>
                <p className="text-slate-700 leading-normal">
                  {schoolConfig.principal.vision}
                </p>
              </div>

              <div>
                <p className="font-bold text-indian-green text-xs uppercase tracking-wider mb-1">
                  Our Mission
                </p>
                <p className="text-slate-700 leading-normal">
                  {schoolConfig.principal.mission}
                </p>
              </div>

              <p className="font-semibold text-school-brown italic pt-2.5 border-t border-indian-green/20 text-xs sm:text-sm">
                "{schoolConfig.principal.tagline}"
              </p>
            </div>

            {/* Read Full Message button placed directly below the tagline without empty space */}
            <div className="pt-5">
              <Button asChild className="bg-indian-green hover:bg-indian-green/90 text-white rounded-lg px-6 py-2.5 font-medium shadow-sm">
                <Link to="/about/principal-message">
                  Read Full Message
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessageSection;
