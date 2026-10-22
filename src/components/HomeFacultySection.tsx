import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, GraduationCap, Clock, ChevronRight } from "lucide-react";
import { staffMembers } from "@/data/staff";

const HomeFacultySection = () => {
  // Display the top 4 official faculty leaders starting with Principal
  const featured = staffMembers.slice(0, 4);

  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indian-green">Faculty</span>
          <h2 className="text-3xl md:text-4xl font-bold text-school-brown mt-2 mb-3 leading-tight">
            Meet Our <span className="text-indian-green">Faculty</span>
          </h2>
          <p className="text-base text-muted-foreground">
            A dedicated team of 50+ educators and 60+ staff members at SJRPS-Rajajinagar committed to nurturing every child's potential.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mx-auto">
          {featured.map((t) => (
            <Card
              key={t.id}
              className="rounded-2xl border-none shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col h-full bg-white group"
            >
              <div className="aspect-[3/4] overflow-hidden bg-slate-100 relative">
                <img 
                  src={t.photo || "/placeholder.svg"} 
                  alt={`${t.name} - ${t.designation}`}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500" 
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                  }}
                />
              </div>
              <CardContent className="p-5 flex flex-col flex-1 text-left justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-logo-navy leading-tight line-clamp-2">
                    {t.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-indian-green mt-1">
                    {t.designation}
                  </p>

                  <div className="mt-4 pt-3 border-t border-gray-100 space-y-2 text-xs text-foreground/80">
                    {t.subject && (
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-3.5 w-3.5 text-indian-green flex-shrink-0" />
                        <span className="font-medium text-foreground line-clamp-1">{t.subject}</span>
                      </div>
                    )}

                    {t.qualification && (
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-3.5 w-3.5 text-indian-green flex-shrink-0" />
                        <span className="font-medium text-foreground line-clamp-1">{t.qualification}</span>
                      </div>
                    )}

                    {t.experience && (
                      <div className="flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5 text-indian-green flex-shrink-0" />
                        <span className="font-medium text-foreground">{t.experience}</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild className="bg-indian-green hover:bg-indian-green/90 text-white px-8 font-semibold rounded-xl">
            <Link to="/about/teachers">
              View All
              <ChevronRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeFacultySection;
