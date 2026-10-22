import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Quote } from "lucide-react";
import { schoolConfig } from "@/schoolConfig";

const PrincipalMessage = () => {
  return (
    <Layout>
      <PageHero
        title="Principal's Message"
        breadcrumbs={[
          { label: "About", path: "/about/overview" },
          { label: "Principal's Message", path: "/about/principal-message" },
        ]}
      />

      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10 max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indian-green mb-2">
              LEADERSHIP
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-school-brown tracking-tight">
              Principal's <span className="text-indian-green">Message</span>
            </h2>
          </div>

          {/* 2-Column Grid Uniform Layout matching Image 1 */}
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
            {/* Left Column: Portrait Card with Name Overlay */}
            <div className="lg:col-span-5 relative flex flex-col justify-end rounded-2xl overflow-hidden shadow-lg border border-indian-green/15 min-h-[420px] bg-slate-100">
              <img 
                src={schoolConfig.principal.photo} 
                alt={`${schoolConfig.principal.name} — ${schoolConfig.principal.role}`} 
                className="absolute inset-0 w-full h-full object-cover object-top" 
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                }}
              />
              {/* Gradient overlay for crystal-clear readability */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(to bottom, transparent 45%, rgba(0, 0, 0, 0.25) 65%, rgba(0, 0, 0, 0.88) 100%)"
                }}
              />
              {/* Name and Designation Overlay in bottom-left */}
              <div className="relative z-10 p-5 sm:p-6 text-white pointer-events-none">
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight drop-shadow-sm">
                  {schoolConfig.principal.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-white/95 mt-1 drop-shadow-sm">
                  {schoolConfig.principal.role}
                </p>
                <p className="text-[11px] sm:text-xs text-white/80 mt-0.5">
                  M.Sc., B.Ed., PGDLET · 24 Years of Experience
                </p>
              </div>
            </div>

            {/* Right Column: Message Card with Marked Content */}
            <div className="lg:col-span-7 flex flex-col justify-between bg-gradient-to-br from-indian-green/5 via-slate-50/50 to-tricolor-orange/5 p-6 sm:p-8 rounded-2xl border border-indian-green/15 shadow-sm">
              <div>
                <Quote className="h-8 w-8 text-indian-green mb-3 shrink-0" />
                <p className="text-base sm:text-lg md:text-xl font-serif italic text-school-brown leading-snug mb-5">
                  "{schoolConfig.principal.quote}"
                </p>

                <div className="space-y-3.5 text-slate-700 leading-relaxed text-sm sm:text-[15px]">
                  <p>
                    At SJR Public School, Rajajinagar, we believe that education is not just about academic excellence, but about nurturing responsible, confident, and compassionate individuals. We strive to create a safe, inclusive, and stimulating environment where every child feels valued and motivated to learn.
                  </p>
                  <p>
                    Our dedicated team of teachers works tirelessly to provide quality education through innovative teaching methods, continuous assessment, and individual attention that fosters curiosity, self-awareness, and a balanced lifestyle, preparing students not just for examinations but for life itself.
                  </p>
                  <p>
                    We encourage students to explore their talents through co-curricular and extracurricular activities, fostering creativity, leadership, teamwork, and resilience. Our partnership with parents plays a vital role in shaping the holistic development of every child.
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-indian-green/20">
                <p className="font-semibold text-school-brown italic text-xs sm:text-sm">
                  "{schoolConfig.principal.tagline}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrincipalMessage;
