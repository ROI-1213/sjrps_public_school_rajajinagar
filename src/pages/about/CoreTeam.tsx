import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap, Award, Clock, ShieldCheck } from "lucide-react";

interface CoreLeader {
  slNo: number;
  name: string;
  designation: string;
  wing: string;
  subject: string;
  qualification: string;
  experience: string;
  image: string;
}

const coreTeam: CoreLeader[] = [
  {
    slNo: 1,
    name: "Mrs. Poornima N Kagali",
    designation: "Principal",
    wing: "Institutional Leadership",
    subject: "Science",
    qualification: "M.Sc., B.Ed., PGDLET",
    experience: "24 years",
    image: "/images/Core Team/1. Mrs. Poornima N Kagali - Principal.jpg",
  },
  {
    slNo: 2,
    name: "Mrs. Nityashree L N",
    designation: "Secondary Co-ordinator",
    wing: "Secondary & High School Wing",
    subject: "TGT Chemistry",
    qualification: "M.Sc., B.Ed",
    experience: "5 years",
    image: "/images/Core Team/2. Mrs. Nityashree L N, Secondary Coordinator.jpg",
  },
  {
    slNo: 3,
    name: "Mrs. Savitha Devappa",
    designation: "High school Co-ordinator",
    wing: "High School Wing",
    subject: "TGT Kannada",
    qualification: "M.A, B.Ed",
    experience: "24 years",
    image: "/images/Core Team/3. Mrs. Savitha Devappa, Primary Coordinator.jpg",
  },
  {
    slNo: 18,
    name: "Mrs. Mamata V Purohith",
    designation: "Primary Co-ordinator",
    wing: "Primary Academic Wing",
    subject: "TGT Hindi",
    qualification: "M.A., B.Ed.",
    experience: "5 years",
    image: "/images/Core Team/4. Mrs. Mamata V Purohit, Primary Coordinator.jpg",
  },
  {
    slNo: 17,
    name: "Mrs. Tejeshwari J.",
    designation: "Primary Co-ordinator",
    wing: "Primary Academic Wing",
    subject: "PRT Computer Science",
    qualification: "M.C.A.",
    experience: "7 years",
    image: "/images/Core Team/5. Mrs. Tejeshwari J, Primary Coodinator.jpg",
  },
  {
    slNo: 45,
    name: "Mrs. Bindhu R",
    designation: "Pre-Primary Co-ordinator",
    wing: "Pre-Primary Wing",
    subject: "NTT UKG",
    qualification: "SSLC DNTT",
    experience: "24 years",
    image: "/images/Core Team/6. Mrs. Bindhu R, Pre Parimary Coordinator.jpg",
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indian-green/10 text-indian-green text-xs font-semibold uppercase tracking-wider mb-3">
              <ShieldCheck className="h-4 w-4" />
              Academic Leadership
            </div>
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
                <div className="aspect-[3/4] overflow-hidden bg-muted relative">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs font-mono px-2.5 py-0.5 rounded-full font-semibold">
                    #{String(t.slNo).padStart(2, "0")}
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col flex-1 text-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-logo-navy leading-tight">{t.name}</h3>
                    <p className="text-sm font-semibold text-indian-green mt-1">{t.designation}</p>

                    <div className="mt-4 pt-4 border-t space-y-2 text-xs text-foreground/80 text-left">
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-indian-green flex-shrink-0" />
                        <span className="font-medium text-foreground">{t.wing}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-indian-green flex-shrink-0" />
                        <span>Subject: {t.subject}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4 text-indian-green flex-shrink-0" />
                        <span>{t.qualification}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-indian-green flex-shrink-0" />
                        <span>Experience: {t.experience}</span>
                      </div>
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
