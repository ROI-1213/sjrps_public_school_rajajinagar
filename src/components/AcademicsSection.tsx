import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const AcademicsSection = () => {
  const stages = [
    {
      title: "Pre-Primary",
      image: "/images/Homepage Photos/pre-primary-stage.jpg",
      description: "Nursery, LKG & UKG — play-based learning nurturing curiosity, joy, and foundational motor skills.",
      path: "/academics/pre-primary",
    },
    {
      title: "Primary Level",
      image: "/images/Homepage Photos/primary-level-stage.jpg",
      description: "Grades 1 to 5 — building strong literacy, numeracy, scientific inquiry, and core concepts.",
      path: "/academics/primary-level",
    },
    {
      title: "Secondary Stage",
      image: "/images/Homepage Photos/secondary-stage.jpg",
      description: "Grades 6 to 10 — preparing students for CBSE board exams, higher study, and leadership.",
      path: "/academics/secondary-stage",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indian-green">Academics</span>
          <h2 className="text-3xl md:text-4xl font-bold text-school-brown mt-2 mb-3 leading-tight">
            Our Academic <span className="text-indian-green">Stages</span>
          </h2>
          <p className="text-base text-muted-foreground">
            Structured learning pathways aligned with CBSE & NCERT, designed for every stage of a child's growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stages.map((stage) => (
            <Card
              key={stage.title}
              className="overflow-hidden rounded-2xl border-0 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-2 flex flex-col h-full bg-white"
            >
              <div className="h-64 sm:h-72 w-full overflow-hidden shrink-0 relative bg-muted">
                <img
                  src={stage.image}
                  alt={stage.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                  }}
                />
              </div>
              <CardContent className="p-6 sm:p-7 flex flex-col flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-school-brown mb-2.5 tracking-tight">
                  {stage.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-2 min-h-[3rem] mb-6 flex-1">
                  {stage.description}
                </p>
                <div className="mt-auto pt-2">
                  <Button
                    asChild
                    className="w-full h-11 bg-indian-green hover:bg-indian-green/90 text-white font-semibold text-sm sm:text-base rounded-xl shadow-sm hover:shadow-md transition-all"
                  >
                    <Link to={stage.path}>
                      View Details
                      <ChevronRight className="ml-1.5 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;
