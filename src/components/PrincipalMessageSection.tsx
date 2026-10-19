import { Button } from "@/components/ui/button";
import { ChevronRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { schoolConfig } from "@/schoolConfig";

const PrincipalMessageSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indian-green">Leadership</span>
          <h2 className="text-3xl md:text-4xl font-bold text-school-brown mt-2 leading-tight">
            Principal's <span className="text-indian-green">Message</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 max-w-6xl mx-auto items-stretch">
          {/* Portrait & Profile Card */}
          <div className="lg:col-span-2 flex flex-col rounded-2xl overflow-hidden shadow-xl border border-indian-green/15 bg-white">
            <div className="relative flex-1 bg-slate-100 w-full overflow-hidden min-h-[380px] sm:min-h-[440px] flex items-center justify-center">
              <img 
                src={schoolConfig.principal.photo} 
                alt={`${schoolConfig.principal.name} — ${schoolConfig.principal.role}`} 
                className="w-full h-full object-cover object-top" 
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                }}
              />
            </div>
            <div className="p-5 text-center bg-gradient-to-b from-white to-muted/30 border-t border-slate-100">
              <h3 className="text-xl sm:text-2xl font-bold text-school-brown">{schoolConfig.principal.name}</h3>
              <p className="text-sm font-semibold text-indian-green mt-1">{schoolConfig.principal.role}</p>
              <p className="text-xs text-muted-foreground mt-1">M.Sc., B.Ed., PGDLET · 24 Years of Experience</p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3 flex flex-col justify-between bg-gradient-to-br from-indian-green/5 to-tricolor-orange/5 p-6 sm:p-8 lg:p-10 rounded-2xl border border-indian-green/10 shadow-sm">
            <div>
              <Quote className="h-10 w-10 text-indian-green mb-4" />
              <p className="text-xl sm:text-2xl font-serif italic text-school-brown leading-snug mb-6">
                "{schoolConfig.principal.quote}"
              </p>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
                <div>
                  <p className="font-semibold text-indian-green text-sm uppercase tracking-wider mb-1">Our Vision</p>
                  <p>{schoolConfig.principal.vision}</p>
                </div>
                <div>
                  <p className="font-semibold text-indian-green text-sm uppercase tracking-wider mb-1">Our Mission</p>
                  <p>{schoolConfig.principal.mission}</p>
                </div>
                <p className="font-semibold text-school-brown italic pt-2 border-t border-indian-green/20">
                  "{schoolConfig.principal.tagline}"
                </p>
              </div>
            </div>
            <div className="pt-6">
              <Button asChild className="bg-indian-green hover:bg-indian-green/90 text-white px-6">
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
