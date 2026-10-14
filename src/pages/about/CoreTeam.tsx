import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap, Award } from "lucide-react";

interface CoreLeader {
  name: string;
  designation: string;
  wing: string;
  qualification: string;
  image: string;
}

const coreTeam: CoreLeader[] = [
  {
    name: "Mrs. Poornima N Kagali",
    designation: "Principal",
    wing: "Institutional Leadership",
    qualification: "Principal, SJR Public School, Rajajinagar",
    image: "/images/Core Team/1. Mrs. Poornima N Kagali - Principal.jpg",
  },
  {
    name: "Mrs. Nityashree L N",
    designation: "Secondary Coordinator",
    wing: "Secondary & High School Wing",
    qualification: "Academic Administration & CBSE Coordination",
    image: "/images/Core Team/2. Mrs. Nityashree L N, Secondary Coordinator.jpg",
  },
  {
    name: "Mrs. Savitha Devappa",
    designation: "High School Coordinator",
    wing: "Secondary Stage Oversight",
    qualification: "Senior Faculty & Secondary Stage Lead",
    image: "/images/Core Team/3. Mrs. Savitha Devappa, Primary Coordinator.jpg",
  },
  {
    name: "Mrs. Mamata V Purohit",
    designation: "Primary Coordinator",
    wing: "Primary Academic Wing",
    qualification: "Primary Curriculum Lead & Student Mentorship",
    image: "/images/Core Team/4. Mrs. Mamata V Purohit, Primary Coordinator.jpg",
  },
  {
    name: "Mrs. Tejeshwari J",
    designation: "Primary Coordinator",
    wing: "Primary Academic Wing",
    qualification: "Foundational Pedagogy & Activities Coordinator",
    image: "/images/Core Team/5. Mrs. Tejeshwari J, Primary Coodinator.jpg",
  },
];

const CoreTeam = () => {
  return (
    <Layout>
      <PageHero
        title="Core Team"
        breadcrumbs={[{ label: "About", path: "/about/overview" }, { label: "Core Team" }]}
      />

      <section className="py-16 bg-slate-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indian-green mb-3">
              Leadership
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-logo-navy mb-5"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Our Academic & Administrative Leadership
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our leadership team brings together decades of educational experience, pedagogical vision, and student-centered commitment at SJR Public School, Rajajinagar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {coreTeam.map((t) => (
              <Card
                key={t.name}
                className="rounded-2xl border-none shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col h-full bg-white"
              >
                <div className="aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                    }}
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-1 text-center">
                  <h3 className="text-xl font-bold text-logo-navy leading-tight">{t.name}</h3>
                  <p className="text-sm font-semibold text-indian-green mt-1">{t.designation}</p>

                  <div className="mt-4 pt-4 border-t space-y-2 text-xs text-foreground/80 text-left">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-indian-green flex-shrink-0" />
                      <span>{t.wing}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-indian-green flex-shrink-0" />
                      <span>{t.qualification}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CoreTeam;
