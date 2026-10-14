import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, GraduationCap, Clock, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { getPublicContent, type AdminContentItem } from "@/lib/api";
import { teachers as frontendTeachers, type Teacher } from "@/pages/about/Teachers";

const defaultFeaturedNames = new Set(["Mr Prakash H S", "Mrs Lily Roy", "Mrs Mini Jomy", "Mrs Menaka B"].map((name) => name.toLowerCase()));

const adminTeacherToDisplay = (item: AdminContentItem): Teacher => ({
  name: item.title,
  designation: item.subtitle || "",
  subject: item.category || String(item.fields?.subject || ""),
  qualification: item.body || String(item.fields?.qualification || ""),
  experience: String(item.fields?.experience || ""),
  image: item.image_url || "/placeholder.svg",
  isFeatured: item.fields?.featured === true,
  source: "database",
  adminId: item.id,
  isVisible: item.is_visible,
  displayOrder: item.display_order,
});

const HomeFacultySection = () => {
  const [adminTeachers, setAdminTeachers] = useState<AdminContentItem[]>([]);

  useEffect(() => {
    getPublicContent("teacher", 300)
      .then((result) => setAdminTeachers(result.items))
      .catch(() => setAdminTeachers([]));
  }, []);

  const teachers = useMemo(() => {
    const byName = new Map<string, Teacher>();
    frontendTeachers.forEach((teacher, index) => byName.set(teacher.name.toLowerCase(), {
      ...teacher,
      isFeatured: defaultFeaturedNames.has(teacher.name.toLowerCase()),
      displayOrder: index + 1,
      source: "frontend",
    }));
    adminTeachers.forEach((item) => {
      const teacher = adminTeacherToDisplay(item);
      byName.set(teacher.name.toLowerCase(), teacher);
    });
    const allTeachers = Array.from(byName.values()).sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
    const featuredTeachers = allTeachers.filter((teacher) => teacher.isFeatured);
    return featuredTeachers.length ? featuredTeachers : allTeachers.filter((teacher) => defaultFeaturedNames.has(teacher.name.toLowerCase()));
  }, [adminTeachers]);

  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indian-green">Faculty</span>
          <h2 className="text-3xl md:text-4xl font-bold text-school-brown mt-2 mb-3 leading-tight">
            Meet Our <span className="text-indian-green">Faculty</span>
          </h2>
          <p className="text-base text-elegant-light">A team of educators committed to nurturing every child's potential.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.map((t) => (
            <Card
              key={t.name}
              className="rounded-2xl border-none shadow-[0_8px_25px_rgba(0,0,0,0.10)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col h-full"
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img src={t.image} alt={t.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <CardContent className="p-5 flex flex-col flex-1 text-center">
                <h3 className="text-lg font-bold text-logo-navy leading-tight">{t.name}</h3>
                <p className="text-sm font-bold text-indian-green mt-1">{t.designation}</p>
                <div className="mt-4 pt-4 border-t space-y-2 text-sm text-foreground/80 text-left">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-indian-green flex-shrink-0" />
                  <span>{t.subject}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-indian-green flex-shrink-0" />
                    <span>{t.qualification}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-indian-green flex-shrink-0" />
                    <span>{t.experience}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild className="bg-indian-green hover:bg-indian-green/90 text-white px-8">
            <Link to="/about/teachers">
              View All
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeFacultySection;
