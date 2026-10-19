import { Button } from "@/components/ui/button";
import { ChevronRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { schoolConfig } from "@/schoolConfig";

const PrincipalMessageSection = () => {
  return (
    <section className="py-14 sm:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indian-green mb-2">
            LEADERSHIP
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-school-brown tracking-tight">
            Principal's <span className="text-indian-green">Message</span>
          </h2>
        </div>

        {/* 2-Column Grid matching reference */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Left Column: Edge-to-edge photo card with name & designation overlay */}
          <div className="relative rounded-2xl overflow-hidden shadow-md bg-slate-100 flex flex-col justify-end min-h-[420px]">
            <img 
              src={schoolConfig.principal.photo} 
              alt={`${schoolConfig.principal.name} — ${schoolConfig.principal.role}`} 
              className="absolute inset-0 w-full h-full object-cover object-top" 
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
              }}
            />
            <div className="relative z-10 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-6 sm:p-7 pt-24">
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                {schoolConfig.principal.name}
              </h3>
              <p className="text-sm text-white/90 font-medium mt-1">
                Principal — SJR Public School, Rajajinagar
              </p>
              <p className="text-xs text-white/75 mt-0.5">
                M.Sc., B.Ed., PGDLET · 24 Years of Experience
              </p>
            </div>
          </div>

          {/* Right Column: Clean message card without any blank space */}
          <div className="rounded-2xl border border-gray-200/80 bg-[#fbfbfa] p-6 sm:p-8 lg:p-9 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <Quote className="h-9 w-9 text-indian-green mb-2" />
              <p className="text-lg sm:text-xl font-serif italic text-school-brown/95 leading-snug">
                "{schoolConfig.principal.quote}"
              </p>

              <div className="space-y-3.5 text-muted-foreground leading-relaxed text-sm sm:text-[15px]">
                <p>
                  At SJR Public School, Rajajinagar, we believe that education is not merely about academic excellence, but about nurturing responsible, confident, and compassionate individuals prepared for life.
                </p>
                <div>
                  <span className="font-semibold text-indian-green text-xs uppercase tracking-wider block mb-1">
                    Our Vision
                  </span>
                  <p className="text-slate-700 text-sm">
                    {schoolConfig.principal.vision}
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-indian-green text-xs uppercase tracking-wider block mb-1">
                    Our Mission
                  </span>
                  <p className="text-slate-700 text-sm">
                    {schoolConfig.principal.mission}
                  </p>
                </div>
                <p className="font-semibold text-school-brown italic pt-2 border-t border-indian-green/20 text-sm">
                  "{schoolConfig.principal.tagline}"
                </p>
              </div>
            </div>

            <div className="pt-6">
              <Button asChild className="bg-indian-green hover:bg-indian-green/90 text-white rounded-lg px-6 py-2.5 font-medium shadow-xs">
                <Link to="/about/principal-message">
                  View Details
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
