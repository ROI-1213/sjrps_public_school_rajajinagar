import { Button } from "@/components/ui/button";
import { ChevronRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { schoolConfig } from "@/schoolConfig";

const PrincipalMessageSection = () => {
  return (
    <section className="py-12 md:py-14 bg-white">
      <div className="max-w-[1152px] mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center mb-9 sm:mb-10">
          <p className="text-[12px] font-bold uppercase tracking-[3px] text-[#14784F] mb-2">
            LEADERSHIP
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#65483D] tracking-tight leading-tight">
            Principal's <span className="text-[#14784F]">Message</span>
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Left Column — Principal Photo Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-sm h-[380px] sm:h-[424px] bg-slate-100">
            <img
              src={schoolConfig.principal.photo}
              alt={`${schoolConfig.principal.name} — ${schoolConfig.principal.role}`}
              className="w-full h-full object-cover object-[center_35%]"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
              }}
            />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 48%, rgba(0, 0, 0, 0.12) 68%, rgba(0, 0, 0, 0.78) 100%)",
              }}
            />
            {/* Photo text overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-7 z-10 pointer-events-none">
              <h3 className="text-xl sm:text-[21px] font-bold text-white leading-tight">
                {schoolConfig.principal.name}
              </h3>
              <p className="text-sm text-white/90 font-medium mt-1">
                Principal — SJR Public School, Rajajinagar
              </p>
            </div>
          </div>

          {/* Right Column — Message Card */}
          <div className="rounded-2xl border border-[#DFE6E1] bg-[#FAF9F7] p-7 sm:p-8 flex flex-col justify-between h-auto lg:h-[424px] shadow-xs">
            <div>
              <Quote className="h-10 w-10 text-[#14784F] mb-3 stroke-[1.5]" />
              <p className="text-[17px] sm:text-[18px] font-serif italic text-[#65483D] leading-snug sm:leading-relaxed mb-4">
                "Education is not just about preparing children for examinations; it is about preparing a child for life."
              </p>
              <div className="space-y-3 text-[#65483D]/85 leading-relaxed text-[14px] sm:text-[15px]">
                <p>
                  At SJR Public School, Rajajinagar, we provide an atmosphere for multifaceted development where children are encouraged to channelize their potential in the pursuit of excellence.
                </p>
                <p>
                  Together, through collaborative effort, we nurture future-ready leaders — thinkers, doers and compassionate citizens.
                </p>
              </div>
            </div>

            {/* View Details Button */}
            <div className="pt-4 mt-auto">
              <Button
                asChild
                className="bg-[#14784F] hover:bg-[#0f5c3c] text-white rounded-[6px] px-6 h-[42px] text-sm font-semibold shadow-xs transition-colors"
              >
                <Link to="/about/principal-message" className="inline-flex items-center gap-1.5">
                  View Details
                  <ChevronRight className="h-4 w-4" />
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
