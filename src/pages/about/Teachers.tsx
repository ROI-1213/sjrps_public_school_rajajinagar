import { useState, useMemo } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap, Clock, Search, Info } from "lucide-react";
import { staffMembers, type StaffMember, type StaffCategory, STAFF_CATEGORIES } from "@/data/staff";

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
      className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
      onError={() => setHasError(true)}
    />
  );
};

const Teachers = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: staffMembers.length };
    staffMembers.forEach((s) => {
      counts[s.category] = (counts[s.category] || 0) + 1;
    });
    return counts;
  }, []);

  const categories = useMemo(() => {
    return ["All", ...STAFF_CATEGORIES];
  }, []);

  const filteredStaff = useMemo(() => {
    return staffMembers.filter((staff) => {
      const matchesCategory =
        selectedCategory === "All" || staff.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        staff.name.toLowerCase().includes(query) ||
        staff.designation.toLowerCase().includes(query) ||
        staff.subject.toLowerCase().includes(query) ||
        staff.qualification.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <Layout>
      <PageHero
        title="Our Teachers & Staff Directory"
        breadcrumbs={[{ label: "About", path: "/about/overview" }, { label: "Our Teachers" }]}
      />

      <section className="py-16 bg-slate-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-logo-navy" style={{ fontFamily: "Poppins, sans-serif" }}>
              Meet Our Educators & Dedicated Staff
            </h2>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 max-w-3xl mx-auto bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
              <div className="text-center p-2 border-r border-gray-100 last:border-0">
                <p className="text-2xl font-extrabold text-indian-green">62</p>
                <p className="text-xs text-muted-foreground uppercase font-medium">Total Staff</p>
              </div>
              <div className="text-center p-2 border-r border-gray-100 last:border-0">
                <p className="text-2xl font-extrabold text-logo-navy">52</p>
                <p className="text-xs text-muted-foreground uppercase font-medium">Teaching Faculty</p>
              </div>
              <div className="text-center p-2 border-r border-gray-100 last:border-0">
                <p className="text-2xl font-extrabold text-school-gold">5</p>
                <p className="text-xs text-muted-foreground uppercase font-medium">Administration</p>
              </div>
              <div className="text-center p-2">
                <p className="text-2xl font-extrabold text-school-brown">4</p>
                <p className="text-xs text-muted-foreground uppercase font-medium">Support Staff</p>
              </div>
            </div>

            {/* Search Input */}
            <div className="relative max-w-md mx-auto mt-8">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search staff by name, subject, or qualification..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-indian-green focus:border-transparent bg-white shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {categories.map((cat) => {
                const count = categoryCounts[cat] || 0;
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                      isSelected
                        ? "bg-indian-green text-white shadow-md scale-105"
                        : "bg-white text-school-brown hover:bg-indian-green/10 border border-gray-200"
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        isSelected ? "bg-white/20 text-white" : "bg-gray-100 text-muted-foreground"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Counter */}
          <div className="flex justify-between items-center mb-6 max-w-7xl mx-auto px-2">
            <p className="text-xs sm:text-sm text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredStaff.length}</span> staff members
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
          </div>

          {/* Staff Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mx-auto">
            {filteredStaff.map((staff) => (
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
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex justify-between items-start pointer-events-none">
                    <span className="bg-black/60 backdrop-blur-md text-white text-[11px] font-mono px-2 py-0.5 rounded-full font-semibold">
                      #{staff.slNo.padStart(2, "0")}
                    </span>

                    {staff.note && (
                      <span className="bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                        Superannuation
                      </span>
                    )}
                  </div>

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

          {filteredStaff.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl max-w-lg mx-auto shadow-sm p-8">
              <Info className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
              <h3 className="text-lg font-bold text-foreground">No staff members found</h3>
              <p className="text-sm text-muted-foreground mt-1">
                No records matched your search query "{searchQuery}". Try searching for another name, subject, or resetting the filter.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-2 bg-indian-green text-white rounded-full text-xs font-semibold hover:bg-indian-green/90 transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Teachers;
