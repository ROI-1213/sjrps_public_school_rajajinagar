import { Button } from "@/components/ui/button";
import { ChevronRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { schoolConfig } from "@/schoolConfig";

const PrincipalMessageSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indian-green">Leadership</span>
          <h2 className="text-3xl md:text-4xl font-bold text-school-brown mt-2 leading-tight">
            Principal's <span className="text-indian-green">Message</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {/* Portrait & Profile Card */}
          <div className="lg:col-span-5 flex flex-col rounded-2xl overflow-hidden shadow-lg border border-indian-green/15 bg-white">
            <div className="relative flex-1 bg-slate-100 w-full overflow-hidden min-h-[300px] flex items-center justify-center">
              <img 
                src={schoolConfig.principal.photo} 
                alt={`${schoolConfig.principal.name} — ${schoolConfig.principal.role}`} 
                className="w-full h-full object-cover object-top" 
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                }}
              />
            </div>
            <div className="p-4 text-center bg-gradient-to-b from-white to-slate-50 border-t border-slate-100 shrink-0">
              <h3 className="text-lg sm:text-xl font-bold text-school-brown">{schoolConfig.principal.name}</h3>
              <p className="text-xs sm:text-sm font-semibold text-indian-green mt-0.5">{schoolConfig.principal.role}</p>
              <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5">M.Sc., B.Ed., PGDLET · 24 Years of Experience</p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-gradient-to-br from-indian-green/5 via-slate-50/50 to-tricolor-orange/5 p-6 sm:p-7 rounded-2xl border border-indian-green/15 shadow-sm">
            <div className="space-y-4">
              <div>
                <Quote className="h-7 w-7 text-indian-green/80 mb-2" />
                <p className="text-base sm:text-lg md:text-xl font-serif italic text-school-brown leading-snug">
                  "{schoolConfig.principal.quote}"
                </p>
              </div>

              <div className="space-y-3 text-muted-foreground leading-relaxed text-sm">
                <div className="p-3.5 rounded-xl bg-white/80 border border-indian-green/10 shadow-2xs">
                  <p className="font-semibold text-indian-green text-xs uppercase tracking-wider mb-1">Our Vision</p>
                  <p className="text-slate-700 leading-normal">{schoolConfig.principal.vision}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/80 border border-indian-green/10 shadow-2xs">
                  <p className="font-semibold text-indian-green text-xs uppercase tracking-wider mb-1">Our Mission</p>
                  <p className="text-slate-700 leading-normal">{schoolConfig.principal.mission}</p>
                </div>
                <p className="font-semibold text-school-brown italic pt-1 text-xs sm:text-sm border-t border-indian-green/15 text-center sm:text-left">
                  "{schoolConfig.principal.tagline}"
                </p>
              </div>
            </div>

            <div className="pt-4 mt-2">
              <Button asChild className="bg-indian-green hover:bg-indian-green/90 text-white px-6 shadow-sm">
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
