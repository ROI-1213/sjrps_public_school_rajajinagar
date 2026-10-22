import { useState } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap, Clock } from "lucide-react";
import { staffMembers, type StaffMember } from "@/data/staff";

// Backwards compatibility export if other components import Teacher interface
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
  designation: s.designation,
  subject: s.subject,
  qualification: s.qualification || "Educational Faculty",
  experience: s.experience || "Dedicated Educator",
  image: s.photo || "/placeholder.svg",
  section: s.category,
}));

const StaffPhoto = ({ src, alt, name }: { src: string | null; alt: string; name: string }) => {
  const [hasError, setHasError] = useState(false);

  // If no photo or error, render institutional placeholder avatar with initials
  if (!src || hasError) {
    const initials = name
      .replace(/^(Mrs\.|Mr\.|Ms\.)\s*/i, "")
      .trim()
      .split(/\s+/)
      .map((part) => part[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();

    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-school-green-dark/10 via-school-green/20 to-school-gold/20 p-4 text-center">
        <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center text-indian-green font-bold text-2xl border-2 border-indian-green/20 mb-2">
          {initials || "SJR"}
        </div>
        <span className="text-xs font-semibold text-logo-navy/70 uppercase tracking-wider">
          SJRPS Staff
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
      onError={() => setHasError(true)}
    />
  );
};

const Teachers = () => {
  return (
    <Layout>
      <PageHero
        title="Our Teachers"
        breadcrumbs={[{ label: "About", path: "/about/overview" }, { label: "Our Teachers" }]}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indian-green mb-3">Faculty</p>
            <h2 className="text-3xl md:text-4xl font-bold text-logo-navy" style={{ fontFamily: "Poppins, sans-serif" }}>
              Meet Our Teachers
            </h2>
            <p className="text-muted-foreground mt-3">
              A dedicated team of educators committed to nurturing every child's potential.
            </p>
          </div>

          {/* Staff Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mx-auto">
            {staffMembers.map((staff) => (
              <Card
                key={staff.id}
                className="rounded-2xl border-none shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col h-full bg-white group"
              >
                {/* Photo container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
                  <StaffPhoto
                    src={staff.photo}
                    alt={`${staff.name} - ${staff.designation}`}
                    name={staff.name}
                  />

                  {/* Top Badges */}
                  {staff.note && (
                    <div className="absolute top-2.5 right-2.5 flex justify-end items-start pointer-events-none">
                      <span className="bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                        Superannuation
                      </span>
                    </div>
                  )}

                  {/* Category Pill at bottom of image */}
                  <div className="absolute bottom-2.5 left-2.5 pointer-events-none">
                    <span className="bg-white/90 backdrop-blur-md text-logo-navy text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-sm border border-white/40">
                      {staff.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-5 flex flex-col flex-1 text-left justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-logo-navy leading-tight line-clamp-2">
                      {staff.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-indian-green mt-1">
                      {staff.designation}
                    </p>

                    <div className="mt-4 pt-3 border-t border-gray-100 space-y-2 text-xs text-foreground/80">
                      {/* Subject or Area of Responsibility */}
                      {staff.subject && (
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-3.5 w-3.5 text-indian-green flex-shrink-0" />
                          <span className="font-medium text-foreground line-clamp-1">{staff.subject}</span>
                        </div>
                      )}

                      {/* Qualification */}
                      {staff.qualification && (
                        <div className="flex items-center gap-2">
                          <GraduationCap className="h-3.5 w-3.5 text-indian-green flex-shrink-0" />
                          <span className="font-medium text-foreground line-clamp-1">{staff.qualification}</span>
                        </div>
                      )}

                      {/* Experience */}
                      {staff.experience && (
                        <div className="flex items-center gap-2">
                          <Clock className="h-3.5 w-3.5 text-indian-green flex-shrink-0" />
                          <span className="font-medium text-foreground">{staff.experience}</span>
                        </div>
                      )}
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

export default Teachers;
