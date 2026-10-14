import { Button } from "@/components/ui/button";
import { ChevronRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import principal from "@/assets/principal.jpg";

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
          <div className="relative rounded-2xl overflow-hidden shadow-2xl min-h-[420px]">
            <img src={principal} alt="Principal — Mrs Jyothi Shashidhar" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-xl font-bold">Mrs Jyothi Shashidhar</p>
              <p className="text-sm opacity-90">Principal — SJR Public School, HBR Layout</p>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center bg-gradient-to-br from-indian-green/5 to-tricolor-orange/5 p-8 rounded-2xl border border-indian-green/10">
            <Quote className="h-10 w-10 text-indian-green mb-4" />
            <p className="text-lg italic text-school-brown leading-relaxed mb-4">
              "SJR PUBLIC SCHOOL believes in DUTY, DISCIPLINE & DEDICATION."
            </p>
            <div className="space-y-3 text-elegant-light leading-relaxed text-[15px]">
              <p>
                At our school, we believe that education is not just about academic excellence, but about nurturing
                responsible, confident, and compassionate individuals. We strive to create a safe, inclusive, and
                stimulating environment where every child feels valued and motivated to learn.
              </p>
              <p>
                Our dedicated team of teachers works tirelessly to provide quality education through innovative
                teaching methods, continuous assessment, and individual attention that fosters curiosity, self-awareness,
                and a balanced lifestyle, preparing students not just for examinations but for life itself.
              </p>
              <p>
                We encourage students to explore their talents through co-curricular and extracurricular activities,
                fostering creativity, leadership, teamwork, and resilience. Our partnership with parents plays a vital
                role in shaping the holistic development of every child.
              </p>
            </div>
            <div className="pt-6">
              <Button asChild className="bg-indian-green hover:bg-indian-green/90 text-white px-6">
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
