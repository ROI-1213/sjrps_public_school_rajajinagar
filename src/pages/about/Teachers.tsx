import { useState, useMemo } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap, Clock } from "lucide-react";
import { staffMembers, type StaffMember } from "@/data/staff";

export interface Teacher {
  name: string;
  designation: string;
  subject: string;
  qualification: string;
  experience: string;
  image: string;
  section: string;
}

export const teachers: Teacher[] = staffMembers.map((s) => ({
  name: s.name,
  designation: s.role,
  subject: s.role,
  qualification: s.qualification || "Educational Faculty",
  experience: s.experience || "Dedicated Educator",
  image: s.photo,
  section: s.section,
}));

const TeacherPhoto = ({ src, alt }: { src: string; alt: string }) => {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <img
      src={imgSrc}
      alt={alt}
      className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
      onError={() => setImgSrc("/placeholder.svg")}
    />
  );
};

const Teachers = () => {
  const [selectedSection, setSelectedSection] = useState<string>("All");

  const sections = useMemo(() => {
    const unique = Array.from(new Set(teachers.map((t) => t.section))).filter(Boolean);
    return ["All", ...unique];
  }, []);

  const filteredTeachers = useMemo(() => {
    if (selectedSection === "All") return teachers;
    return teachers.filter((t) => t.section === selectedSection);
  }, [selectedSection]);

  return (
    <Layout>
      <PageHero
        title="Our Teachers & Staff"
        breadcrumbs={[{ label: "About", path: "/about/overview" }, { label: "Our Teachers" }]}
      />

      <section className="py-16 bg-slate-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indian-green mb-3">Faculty & Administration</p>
            <h2 className="text-3xl md:text-4xl font-bold text-logo-navy" style={{ fontFamily: "Poppins, sans-serif" }}>
              Meet Our Educators
            </h2>
            <p className="text-muted-foreground mt-3">
              A dedicated team of 50+ educators and administrative professionals at SJR Public School, Rajajinagar committed to nurturing every child's potential.
            </p>

            {/* Filter pills */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {sections.map((sec) => (
                <button
                  key={sec}
                  onClick={() => setSelectedSection(sec)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                    selectedSection === sec
                      ? "bg-indian-green text-white shadow-md scale-105"
                      : "bg-white text-school-brown hover:bg-indian-green/10 border border-gray-200"
                  }`}
                >
                  {sec}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredTeachers.map((t, i) => (
              <Card
                key={`${t.name}-${i}`}
                className="rounded-2xl border-none shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col h-full bg-white"
              >
                <div className="aspect-[3/4] overflow-hidden bg-muted">
                  <TeacherPhoto src={t.image} alt={t.name} />
                </div>
                <CardContent className="p-5 flex flex-col flex-1 text-center">
                  <h3 className="text-lg font-bold text-logo-navy leading-tight">{t.name}</h3>
                  <p className="text-sm font-semibold text-indian-green mt-1">{t.designation}</p>

                  <div className="mt-4 pt-4 border-t space-y-2 text-sm text-foreground/80 text-left">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-indian-green flex-shrink-0" />
                      <span className="line-clamp-1">{t.subject}</span>
                    </div>
                    {t.qualification && (
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4 text-indian-green flex-shrink-0" />
                        <span className="line-clamp-1">{t.qualification}</span>
                      </div>
                    )}
                    {t.experience && (
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-indian-green flex-shrink-0" />
                        <span>{t.experience}</span>
                      </div>
                    )}
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

export default Teachers;
