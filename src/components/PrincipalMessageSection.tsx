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

        <div className="grid lg:grid-cols-2 gap-10 lg:items-stretch max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl min-h-[300px] sm:min-h-[440px]">
            <img 
              src={schoolConfig.principal.photo} 
              alt={`${schoolConfig.principal.name} — ${schoolConfig.principal.role}`} 
              className="absolute inset-0 w-full h-full object-cover object-top" 
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-2xl font-bold">{schoolConfig.principal.name}</p>
              <p className="text-sm opacity-90 text-golden-yellow font-medium mt-0.5">{schoolConfig.principal.role}</p>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center bg-gradient-to-br from-indian-green/5 to-tricolor-orange/5 p-5 sm:p-8 rounded-2xl border border-indian-green/10">
            <Quote className="h-10 w-10 text-indian-green mb-4" />
            <p className="text-xl font-serif italic text-school-brown leading-snug mb-4">
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
              <p className="font-semibold text-school-brown italic pt-1 border-t border-indian-green/20">
                "{schoolConfig.principal.tagline}"
              </p>
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
