import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { facilitiesData } from "@/data/infrastructure";

const FacilitiesSection = () => {
  return (
    <section className="py-14 bg-gradient-to-br from-indian-green/5 via-white to-indian-green/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indian-green">Infrastructure</span>
          <h2 className="text-3xl md:text-4xl font-bold text-school-brown mt-2 mb-3 leading-tight">
            World-Class <span className="text-indian-green">Facilities</span>
          </h2>
          <p className="text-base text-muted-foreground">
            Modern, student-centric campus infrastructure at SJRPS-Rajajinagar designed for holistic learning.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {facilitiesData.map((f) => {
            const Icon = f.iconComponent;
            return (
              <Card
                key={f.id}
                className="group flex flex-col overflow-hidden border border-indian-green/15 hover:border-indian-green/50 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 bg-white rounded-2xl"
              >
                <div className="relative h-56 sm:h-60 overflow-hidden bg-slate-100">
                  <img
                    src={f.coverImage}
                    alt={f.coverImageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-3.5 right-3.5 bg-indian-green w-11 h-11 rounded-full flex items-center justify-center shadow-lg z-10 ring-2 ring-white/80">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-school-brown mb-2 group-hover:text-indian-green transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-5 flex-1">
                    {f.description}
                  </p>
                  <Button
                    asChild
                    className="bg-indian-green hover:bg-indian-green/90 text-white w-full font-semibold py-2.5 rounded-xl shadow-xs"
                  >
                    <Link to={f.route}>
                      Explore Facility
                      <ChevronRight className="ml-1.5 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Button asChild className="bg-school-brown hover:bg-school-brown/90 text-white px-8">
            <Link to="/campus/facilities">
              View All Campus Infrastructure
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
