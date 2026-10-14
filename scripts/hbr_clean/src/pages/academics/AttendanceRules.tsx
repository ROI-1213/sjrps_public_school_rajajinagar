import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  CalendarCheck,
  HeartPulse,
  FileCheck,
  ClipboardList,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

const sections = [
  { icon: ClipboardList, title: "Importance of Attendance", desc: "Regular attendance is foundational to academic growth, discipline, and meaningful classroom participation." },
  { icon: CalendarCheck, title: "Minimum Attendance Requirement", desc: "Students must maintain at least 75% attendance to be eligible for promotion to the next academic year." },
  { icon: FileCheck, title: "Leave Procedures", desc: "All planned leaves require prior written intimation from parents through the school diary or official email." },
  { icon: HeartPulse, title: "Medical Leave Guidelines", desc: "Medical leaves beyond 2 days must be supported with a valid medical certificate from a registered practitioner." },
  { icon: AlertTriangle, title: "Examination Attendance Rules", desc: "100% attendance is mandatory during examinations except in cases of certified medical emergencies." },
];

const rules = [
  { icon: Clock, title: "Punctuality", desc: "Students must arrive 10 minutes before the first bell every school day." },
  { icon: CalendarCheck, title: "85% Minimum", desc: "Maintain at least 85% annual attendance to qualify for promotion." },
  { icon: FileCheck, title: "Written Intimation", desc: "Absences must be communicated via the school diary or official email." },
  { icon: HeartPulse, title: "Medical Certificate", desc: "Required for any health-related absence exceeding 2 working days." },
];

const AttendanceRules = () => {
  return (
    <Layout>
      <PageHero
        title="Attendance Rules & Regulations"
        breadcrumbs={[
          { label: "Academics", path: "/academics" },
          { label: "Attendance Rules" },
        ]}
      />

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Discipline Through Consistency</h2>
          <div className="mx-auto h-1 w-20 bg-indian-green rounded-full mb-6" />
          <p className="text-lg text-foreground/80 leading-relaxed">
            Punctual, regular attendance is essential for academic success and personal development. Our
            attendance policy ensures consistency, accountability, and a strong learning rhythm for every
            student.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-3">Policy Highlights</h2>
          <div className="mx-auto h-1 w-20 bg-indian-green rounded-full mb-12" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((it, i) => (
              <Card key={i} className="border-l-4 border-l-indian-green hover:shadow-lg transition-all">
                <CardContent className="p-6 flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indian-green/10 flex items-center justify-center flex-shrink-0">
                    <it.icon className="h-6 w-6 text-indian-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">{it.title}</h3>
                    <p className="text-sm text-foreground/75 leading-relaxed">{it.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rule cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-3">Key Rules at a Glance</h2>
          <div className="mx-auto h-1 w-20 bg-indian-green rounded-full mb-12" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rules.map((r, i) => (
              <Card key={i} className="border-indian-green/20 hover:shadow-lg hover:-translate-y-1 transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-indian-green flex items-center justify-center mx-auto mb-4">
                    <r.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-black mb-2">{r.title}</h3>
                  <p className="text-sm text-foreground/75 leading-relaxed">{r.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important notes */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-indian-green/20 bg-indian-green/5">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-black mb-6 text-center">Important Notes</h2>
              <ul className="space-y-3">
                {[
                  "Attendance is calculated from the date of joining.",
                  "Declared holidays and vacations are not included in the calculation.",
                  "Parents are notified when attendance falls below 90%.",
                  "Repeated late arrivals will be treated as half-day absences.",
                ].map((n, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-indian-green flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/85">{n}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default AttendanceRules;
