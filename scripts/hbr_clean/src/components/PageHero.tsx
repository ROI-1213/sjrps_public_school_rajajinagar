import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  label: string;
  path?: string;
}

interface PageHeroProps {
  title: string;
  breadcrumbs?: Crumb[];
}

const PageHero = ({ title, breadcrumbs = [] }: PageHeroProps) => {
  const crumbs: Crumb[] = [{ label: "Home", path: "/" }, ...breadcrumbs];
  return (
    <section className="w-full">
      {/* Breadcrumb strip — pale peach */}
      <div style={{ backgroundColor: "#F7D8A4" }}>
        <div className="container mx-auto px-4 py-1.5 sm:py-2">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center flex-wrap gap-y-1 text-xs sm:text-sm text-logo-navy/80"
          >
            {crumbs.map((c, i) => {
              const isLast = i === crumbs.length - 1;
              return (
                <span key={`${c.label}-${i}`} className="inline-flex items-center">
                  {c.path && !isLast ? (
                    <Link
                      to={c.path}
                      className="hover:text-logo-navy transition-colors"
                    >
                      {c.label}
                    </Link>
                  ) : (
                    <span className={isLast ? "text-logo-navy font-medium" : ""}>
                      {c.label}
                    </span>
                  )}
                  {!isLast && (
                    <ChevronRight className="h-3.5 w-3.5 mx-1.5 opacity-60" />
                  )}
                </span>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Green hero band */}
      <div className="bg-indian-green">
        <div className="container mx-auto px-4 py-12 sm:py-16 text-center">
          <h1
            className="text-white font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {title}
          </h1>
          <div className="mx-auto mt-4 h-[3px] w-16 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default PageHero;
