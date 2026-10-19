import { Button } from "@/components/ui/button";
import { ChevronRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { schoolConfig } from "@/schoolConfig";

const PrincipalMessageSection = () => {
  return (
    <section className="py-16 bg-white">
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
          <div className="relative rounded-2xl overflow-hidden shadow-md bg-slate-100 flex flex-col justify-end min-h-[420px] lg:min-h-[460px]">
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
            </div>
          </div>

          {/* Right Column: Clean message card matching reference */}
          <div className="rounded-2xl border border-gray-200/80 bg-[#fbfbfa] p-8 sm:p-10 flex flex-col justify-between shadow-xs">
            <div>
              <Quote className="h-10 w-10 text-indian-green mb-4" />
              <p className="text-lg sm:text-xl font-serif italic text-school-brown/95 leading-relaxed mb-6">
                "{schoolConfig.principal.quote}"
              </p>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
                <p>
                  At SJR Public School, Rajajinagar, we provide an atmosphere for multifaceted development where children are encouraged to channelize their potential in the pursuit of excellence.
                </p>
                <p>
                  Together, through collaborative effort, we nurture future-ready leaders — thinkers, doers and compassionate citizens, ensuring every child matters and every future matters.
                </p>
              </div>
            </div>

            <div className="pt-8">
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
