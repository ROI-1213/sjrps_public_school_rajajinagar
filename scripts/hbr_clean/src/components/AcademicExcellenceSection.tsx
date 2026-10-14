import { Award, Trophy, Users, BookOpen, Sparkles, Target, Lightbulb, Heart, Star, Shield, Zap, ArrowUpRight } from "lucide-react";

const AcademicExcellenceSection = () => {
  const stats = [
    { icon: Trophy, value: "100%", label: "Board Results" },
    { icon: Users, value: "1400+", label: "Alumni" },
    { icon: BookOpen, value: "80+", label: "Expert Faculty" },
    { icon: Award, value: "22+", label: "Years of Trust" },
  ];

  const pillars = [
    { icon: Target, title: "Leadership", description: "Confident leaders inspiring positive change." },
    { icon: Lightbulb, title: "Innovation", description: "Creative thinking for tomorrow's challenges." },
    { icon: Heart, title: "Integrity", description: "Values-based, ethical character development." },
    { icon: Star, title: "Excellence", description: "Highest standards across every discipline." },
    { icon: Zap, title: "Creativity", description: "Artistic expression and original thinking." },
    { icon: Shield, title: "Character", description: "Strong moral foundation for life." },
  ];

  return (
    <section className="bg-white border-y border-slate-200/70 py-10 lg:py-14">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indian-green/10 border border-indian-green/25 px-3.5 py-1 rounded-full mb-3">
            <Sparkles className="h-3.5 w-3.5 text-indian-green" />
            <span className="text-indian-green font-semibold text-[11px] uppercase tracking-[0.25em]">
              Excellence in Education
            </span>
          </div>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-[1.15] tracking-tight">
            A Tradition of{" "}
            <span className="text-indian-green">Outstanding</span>{" "}
            Results
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mt-3 max-w-2xl mx-auto">
            Empowering students to lead, innovate, and shape a better tomorrow through holistic, value-based education.
          </p>
        </div>

        {/* Stats */}
        <div className="max-w-6xl mx-auto mb-10">
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)]">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-slate-200">
              {stats.map((s, i) => (
                <div key={i} className="group p-4 lg:p-5 hover:bg-slate-50/70 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-xl bg-indian-green flex items-center justify-center shadow-md shrink-0 group-hover:scale-110 transition-transform">
                      <s.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl lg:text-[28px] font-extrabold text-slate-900 tracking-tight leading-none">
                        {s.value}
                      </div>
                      <div className="text-slate-500 text-[11px] uppercase tracking-wider mt-1 font-semibold">
                        {s.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-4 px-1">
            <div>
              <p className="text-indian-green text-[11px] uppercase tracking-[0.25em] font-semibold mb-1">
                Our Foundation
              </p>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900">
                Six Pillars of Excellence
              </h3>
            </div>
            <div className="hidden md:block text-slate-400 text-xs uppercase tracking-widest font-medium">
              Est. 2004
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="group relative bg-white border border-slate-200 hover:border-indian-green/50 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg cursor-default"
              >
                <ArrowUpRight className="absolute top-2.5 right-2.5 h-3.5 w-3.5 text-slate-300 group-hover:text-indian-green transition-colors" />
                <div className="h-10 w-10 rounded-xl bg-indian-green flex items-center justify-center mb-2.5 shadow-md">
                  <p.icon className="h-5 w-5 text-white" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-0.5">
                  {p.title}
                </h4>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicExcellenceSection;
