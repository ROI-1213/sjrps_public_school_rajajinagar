import { Button } from "@/components/ui/button";
import { ChevronRight, GraduationCap, Award, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { schoolConfig } from "@/schoolConfig";

const AboutOurSchoolSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-emerald-50/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-indian-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-saffron-orange/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border-2 border-indian-green/30" />
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border-2 border-saffron-orange/30" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img
                  src={schoolConfig.assetPaths.schoolBuilding}
                  alt={`${schoolConfig.fullName} Campus`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-school-brown/80 via-school-brown/10 to-transparent" />

                <div className="absolute top-5 right-5 bg-white/95 backdrop-blur px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                  <Award className="h-4 w-4 text-saffron-orange" />
                  <span className="text-xs font-bold text-school-brown">CBSE Affiliated</span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-indian-green/10 flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-indian-green" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">Established 1981</p>
                      <p className="text-lg font-bold text-school-brown leading-none">A Legacy of Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-indian-green/10 px-4 py-1.5 rounded-full">
              <Sparkles className="h-4 w-4 text-indian-green" />
              <span className="text-indian-green font-semibold text-xs uppercase tracking-wider">
                About Our School
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-school-brown leading-tight">
              Where Tradition Meets{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-indian-green">Tomorrow</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-saffron-orange/25 -z-0" />
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px] lg:text-base">
              <p>
                {schoolConfig.fullName} ({schoolConfig.shortName}) is more than a school — it is a community of educators, parents and students united by a shared belief that great education shapes great human beings.
              </p>
              <p>
                Founded on the timeless ideals of the SJR Education Society, our school blends a rich heritage of value-based learning with a modern, future-ready curriculum. From the early years through senior school, every learner is nurtured with care, challenged with rigor, and inspired to discover their unique purpose.
              </p>
              <p className="font-semibold text-school-brown text-base lg:text-lg border-l-4 border-saffron-orange pl-4 italic">
                “Empowering Young Minds, Inspiring Future Leaders, and Building a Legacy of Excellence Through Quality Education.”
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: "1000+", label: "Students" },
                { value: "50+", label: "Faculty" },
                { value: "100%", label: "Results" },
              ].map((s) => (
                <div key={s.label} className="text-center p-3 rounded-xl bg-white shadow-sm border border-indian-green/10">
                  <div className="text-2xl lg:text-3xl font-bold text-indian-green">{s.value}</div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button
                asChild
                className="bg-indian-green hover:bg-indian-green/90 text-white px-8 py-3 h-12 rounded-lg font-semibold shadow-lg group"
              >
                <Link to="/about/overview">
                  Learn More About {schoolConfig.shortName}
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOurSchoolSection;
