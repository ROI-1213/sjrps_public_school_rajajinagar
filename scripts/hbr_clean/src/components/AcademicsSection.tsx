import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import foundation from "@/assets/Foundation-Stage.jpg";
import preparatory from "@/assets/Preparatory-Stage.jpg";
import secondary from "@/assets/Secondary-Stage.jpg";
import snrSecondary from "@/assets/snr-secondary-stage.jpg";

const AcademicsSection = () => {
  const stages = [
    {
      title: "Pre-Primary",
      image: foundation,
      description: "Nursery, LKG & UKG — play-based learning that nurtures curiosity and core skills.",
      path: "/academics/pre-primary",
    },
    {
      title: "Primary Level",
      image: preparatory,
      description: "Grades 1 to 5 — building strong literacy, numeracy and conceptual foundations.",
      path: "/academics/primary-level",
    },
    {
      title: "Secondary Stage",
      image: secondary,
      description: "Grades 6 to 10 — preparing students for board exams and future readiness.",
      path: "/academics/secondary-stage",
    },
    {
      title: "Senior Secondary Stage",
      image: snrSecondary,
      description: "Classes XI–XII — advanced streams preparing students for higher education.",
      path: "/academics/senior-secondary-stage",
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
          <p className="text-base text-elegant-light">
            Structured learning pathways aligned with NEP, designed for every stage of a child's growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((stage) => (
            <Card
              key={stage.title}
              className="overflow-hidden rounded-2xl border-0 shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={stage.image}
                  alt={stage.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-school-brown mb-2">{stage.title}</h3>
                <p className="text-sm text-elegant-light leading-relaxed line-clamp-2 mb-5 flex-1">
                  {stage.description}
                </p>
                <Button
                  asChild
                  className="w-full bg-indian-green hover:bg-indian-green/90 text-white"
                >
                  <Link to={stage.path}>
                    View Details
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;
