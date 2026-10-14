import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import {
  ClipboardCheck,
  BookOpen,
  Palette,
  TrendingUp,
  Award,
  Target,
  CheckCircle2,
  BarChart3,
  FileText,
  Wrench,
  GraduationCap,
  Users,
} from "lucide-react";

const sections = [
  { icon: ClipboardCheck, title: "Assessment Structure", desc: "A balanced mix of scholastic and co-scholastic evaluations conducted throughout the year." },
  { icon: BookOpen, title: "Scholastic Evaluation", desc: "Subject-wise assessments including periodic tests, mid-term, and annual examinations." },
  { icon: Palette, title: "Co-Scholastic Evaluation", desc: "Evaluation of life skills, attitudes, work habits, and participation in co-curricular activities." },
  { icon: Award, title: "Promotion Requirements", desc: "Minimum passing marks in scholastic subjects along with satisfactory co-scholastic performance." },
  { icon: TrendingUp, title: "Academic Progress Monitoring", desc: "Regular feedback through report cards, parent-teacher meetings, and individual mentoring." },
];

const steps = [
  { icon: ClipboardCheck, title: "Continuous Assessment", desc: "Ongoing evaluation through assignments, class tests, and projects across all subjects." },
  { icon: BookOpen, title: "Mid-Term Examination", desc: "Comprehensive subject-wise mid-term examinations conducted in the second term." },
  { icon: BarChart3, title: "Annual Examination", desc: "Final summative assessment covering the entire academic year's syllabus." },
  { icon: Target, title: "Result Compilation", desc: "Marks from all components are consolidated for the final promotion decision." },
  { icon: Award, title: "Promotion Decision", desc: "Promotion granted based on cumulative scholastic and co-scholastic performance." },
];

const requirements = [
  "Minimum 33% aggregate in scholastic subjects.",
  "At least 75% attendance through the academic year.",
  "Satisfactory grade in co-scholastic areas.",
  "Adherence to school discipline and conduct policies.",
];

const markSplit = [
  {
    icon: BookOpen,
    title: "Scholastic Subjects",
    ia: "20 Marks",
    written: "80 Marks",
    note: "Standard subjects",
  },
  {
    icon: Wrench,
    title: "Skill Subjects",
    ia: "50 Marks",
    written: "50 Marks",
    note: "Practical-oriented",
  },
];

const expectations = [
  { icon: GraduationCap, title: "CBSE Standards", desc: "Meet the minimum academic standards prescribed by CBSE." },
  { icon: ClipboardCheck, title: "Complete All Components", desc: "Finish assignments, projects, portfolios, and subject enrichment activities." },
  { icon: TrendingUp, title: "Consistent Progress", desc: "Maintain satisfactory academic progress across the year." },
  { icon: Users, title: "Active Participation", desc: "Regular participation in classroom learning and assessments." },
  { icon: BarChart3, title: "Class XI → XII", desc: "Promotion based on Annual Examination performance." },
  { icon: Award, title: "Classes X & XII", desc: "Students appear for the CBSE Board Examinations." },
];

const PromotionCriteria = () => {
  return (
    <Layout>
      <PageHero
        title="Promotion Criteria"
        breadcrumbs={[
          { label: "Academics", path: "/academics" },
          { label: "Promotion Criteria" },
        ]}
      />

      {/* Clear Standards for Progress — Redesigned */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Clear Standards for Progress</h2>
            <div className="mx-auto h-1 w-20 bg-indian-green rounded-full mb-6" />
            <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Promotion to the next class is based on the student's overall academic performance during the year,
              combining Internal Assessment and Written Examination in a balanced framework aligned with CBSE.
            </p>
          </div>

          {/* Mark distribution */}
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {markSplit.map((m, i) => (
              <Card key={i} className="border-indian-green/20 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-indian-green/10 flex items-center justify-center">
                      <m.icon className="h-6 w-6 text-indian-green" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-black">{m.title}</h3>
                      <p className="text-xs text-foreground/60">{m.note}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg bg-indian-green/5 border border-indian-green/20 p-4 text-center">
                      <p className="text-xs uppercase tracking-wide text-foreground/60 mb-1">Internal Assessment</p>
                      <p className="text-2xl font-bold text-indian-green">{m.ia}</p>
                    </div>
                    <div className="rounded-lg bg-indian-green text-white p-4 text-center">
                      <p className="text-xs uppercase tracking-wide opacity-80 mb-1">Written Exam</p>
                      <p className="text-2xl font-bold">{m.written}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Expectations */}
          <h3 className="text-2xl md:text-3xl font-bold text-black text-center mb-3">Student Expectations</h3>
          <p className="text-center text-foreground/70 mb-10">What every learner is required to demonstrate.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expectations.map((e, i) => (
              <Card key={i} className="border-l-4 border-l-indian-green hover:shadow-lg transition-all">
                <CardContent className="p-6 flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indian-green/10 flex items-center justify-center flex-shrink-0">
                    <e.icon className="h-6 w-6 text-indian-green" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-black mb-1.5">{e.title}</h4>
                    <p className="text-sm text-foreground/75 leading-relaxed">{e.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-3">Evaluation Framework</h2>
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

      {/* Promotion process flow */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-3">Promotion Process Flow</h2>
          <div className="mx-auto h-1 w-20 bg-indian-green rounded-full mb-12" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <Card key={i} className="border-indian-green/20 hover:shadow-lg transition-all relative">
                <CardContent className="p-6 text-center">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-indian-green text-white text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-indian-green/10 flex items-center justify-center mx-auto mb-4 mt-3">
                    <s.icon className="h-7 w-7 text-indian-green" />
                  </div>
                  <h3 className="text-base font-bold text-black mb-2">{s.title}</h3>
                  <p className="text-sm text-foreground/75 leading-relaxed">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-indian-green/20 bg-indian-green/5">
            <CardContent className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center">Promotion Requirements</h2>
              <ul className="space-y-3">
                {requirements.map((r, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-indian-green flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/85">{r}</span>
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

export default PromotionCriteria;
