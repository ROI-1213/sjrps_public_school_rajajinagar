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
      description: "Grades 1 to 5 — building strong literacy, numeracy, scientific inquiry, and conceptual foundations.",
      path: "/academics/primary-level",
    },
    {
      title: "Secondary Stage",
      image: "/images/Homepage Photos/secondary-stage.jpg",
      description: "Grades 6 to 10 — preparing students for CBSE board exams, scientific inquiry, and future leadership.",
      path: "/academics/secondary-stage",
    },
  ];

  return (
    <section className="py-14 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indian-green">Academics</span>
          <h2 className="text-3xl md:text-4xl font-bold text-school-brown mt-2 mb-3 leading-tight">
            Our Academic <span className="text-indian-green">Stages</span>
          </h2>
          <p className="text-base text-muted-foreground">
            Structured learning pathways aligned with CBSE & NCERT, designed for every stage of a child's growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stages.map((stage) => (
            <Card
              key={stage.title}
              className="overflow-hidden rounded-2xl border-0 shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={stage.image}
                  alt={stage.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                  }}
                />
              </div>
              <CardContent className="p-5 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-school-brown mb-2">{stage.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 h-[2.75rem] min-h-[2.75rem] max-h-[2.75rem] overflow-hidden mb-5">
                  {stage.description}
                </p>
                <div className="mt-auto">
                  <Button
                    asChild
                    className="w-full bg-indian-green hover:bg-indian-green/90 text-white font-medium"
                  >
                    <Link to={stage.path}>
                      View Details
                      <ChevronRight className="ml-1 h-4 w-4" />
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
