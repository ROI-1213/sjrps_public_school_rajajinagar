import g1Logo from "@/assets/g1.png";
import g2Logo from "@/assets/g2.png";
import sjreLogo from "@/assets/sjre.png";
import { AFFILIATION, AFFILIATION_LEVEL, SCHOOL_NAME, SCHOOL_NAME_KANNADA } from "@/lib/siteInfo";

const LogoSection = () => {
  return (
    <div className="bg-white py-2 lg:py-3 px-3 sm:px-4 border-b border-gray-100">
      <div className="container mx-auto">
        {/* Desktop / Large */}
        <div className="hidden lg:flex items-center justify-between gap-3 xl:gap-4 2xl:gap-6">
          <img
            src={g1Logo}
            alt="Society Logo"
            className="h-12 w-12 xl:h-16 xl:w-16 2xl:h-20 2xl:w-20 object-contain shrink-0"
          />

          <div className="min-w-0 flex-1 basis-0 text-center px-1">
            <h1
              className="max-w-full whitespace-nowrap break-normal text-[13px] xl:text-base 2xl:text-xl font-bold text-logo-navy leading-tight"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {SCHOOL_NAME}
            </h1>
            <p className="text-[11px] xl:text-xs text-logo-maroon font-medium mt-0.5 leading-tight">
              {AFFILIATION}
            </p>
            <p className="text-[11px] xl:text-xs text-logo-maroon font-medium leading-tight">
              {AFFILIATION_LEVEL}
            </p>
          </div>

          <img
            src={sjreLogo}
            alt="SJRPS-Rajajinagar Main Logo"
            className="h-12 w-12 xl:h-16 xl:w-16 2xl:h-20 2xl:w-20 object-contain shrink-0"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
            }}
          />

          <div className="min-w-0 flex-1 basis-0 text-center px-1">
            <h1
              className="max-w-full whitespace-nowrap break-normal text-[13px] xl:text-base 2xl:text-xl font-bold text-logo-navy leading-tight"
              style={{ fontFamily: "Noto Sans Kannada, sans-serif" }}
            >
              {SCHOOL_NAME_KANNADA}
            </h1>
            <p className="text-[11px] xl:text-xs text-logo-maroon font-medium mt-0.5 leading-tight">
              {AFFILIATION}
            </p>
            <p className="text-[11px] xl:text-xs text-logo-maroon font-medium leading-tight">
              {AFFILIATION_LEVEL}
            </p>
          </div>

          <img
            src={g2Logo}
            alt="School Crest"
            className="h-12 w-12 xl:h-16 xl:w-16 2xl:h-20 2xl:w-20 object-contain shrink-0"
          />
        </div>

        {/* Tablet (md to lg): logos above school name */}
        <div className="hidden md:block lg:hidden text-center">
          <div className="flex justify-center items-center gap-6 mb-1">
            <img src={g1Logo} alt="Society Logo" className="h-12 w-12 object-contain" />
            <img
              src={sjreLogo}
              alt="SJRPS-Rajajinagar Main Logo"
              className="h-12 w-12 object-contain"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
              }}
            />
            <img src={g2Logo} alt="School Crest" className="h-12 w-12 object-contain" />
          </div>
          <h1
            className="whitespace-nowrap break-normal text-lg md:text-xl font-bold text-logo-navy leading-none"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {SCHOOL_NAME}
          </h1>
          <p className="text-xs text-logo-maroon font-medium mt-0.5 leading-tight">
            {AFFILIATION}
          </p>
          <p className="text-xs text-logo-maroon font-medium leading-tight">
            {AFFILIATION_LEVEL}
          </p>
        </div>

        {/* Mobile (< md): compact short name */}
        <div className="md:hidden text-center">
          <div className="flex justify-center items-center gap-3 mb-1">
            <img src={g1Logo} alt="Society Logo" className="h-10 w-10 object-contain" />
            <img
              src={sjreLogo}
              alt="SJRPS-Rajajinagar Main Logo"
              className="h-10 w-10 object-contain"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
              }}
            />
            <img src={g2Logo} alt="School Crest" className="h-10 w-10 object-contain" />
          </div>
          <h1
            className="text-base sm:text-lg font-bold text-logo-navy leading-snug px-1"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {SCHOOL_NAME}
          </h1>
          <p className="text-[10px] sm:text-[11px] text-logo-maroon font-normal mt-1 leading-snug px-2 break-words">
            {AFFILIATION}
          </p>
          <p className="text-[10px] sm:text-[11px] text-logo-maroon font-normal leading-snug px-2">
            {AFFILIATION_LEVEL}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
