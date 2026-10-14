import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileText,
  ClipboardList,
  GraduationCap,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  BookOpen,
  Clock,
  PencilRuler,
  ListChecks,
  FolderKanban,
  FlaskConical,
  Trophy,
  CalendarDays,
  Award,
} from "lucide-react";

const sections = [
  { icon: FileText, title: "Examination System", desc: "A balanced framework of formative and summative assessments designed to evaluate understanding and progress." },
  { icon: ClipboardList, title: "Internal Assessment", desc: "Continuous evaluation through periodic tests, multiple assessments, subject enrichment, and portfolio." },
  { icon: GraduationCap, title: "Board Examination Guidelines", desc: "Comprehensive preparation aligned with CBSE board patterns, marking schemes, and best practices." },
  { icon: ShieldCheck, title: "Student Responsibilities", desc: "Maintaining academic honesty, punctuality, and proper conduct during all examination activities." },
  { icon: AlertTriangle, title: "Examination Day Instructions", desc: "Strict adherence to reporting time, hall ticket, stationery, and exam hall etiquette." },
];

const rules = [
  { icon: Clock, title: "Reach 30 Minutes Early", desc: "All students must report to the examination hall at least 30 minutes before the scheduled time." },
  { icon: FileText, title: "Carry Hall Ticket", desc: "Hall ticket and school ID are mandatory for entry into any examination room." },
  { icon: PencilRuler, title: "Approved Stationery Only", desc: "Use only the prescribed stationery. Calculators or devices need explicit approval." },
  { icon: ShieldCheck, title: "Zero Tolerance for Malpractice", desc: "Any form of unfair means will lead to immediate disciplinary action." },
  { icon: BookOpen, title: "Read Question Paper Carefully", desc: "Use the first 10 minutes to read instructions and plan your answers." },
  { icon: CheckCircle2, title: "Maintain Silence", desc: "Strict silence is to be maintained inside the exam hall at all times." },
];

const internalAssessment = [
  {
    icon: ListChecks,
    tag: "PT",
    title: "Periodic Tests",
    desc: "Three Periodic Tests are conducted through the year.",
    highlight: "Best 2 of 3 considered",
  },
  {
    icon: ClipboardList,
    tag: "MA",
    title: "Multiple Assessments",
    desc: "Quizzes, assignments, oral assessments, presentations, and classroom activities.",
    highlight: "Best 4 considered",
  },
  {
    icon: FlaskConical,
    tag: "SE",
    title: "Subject Enrichment",
    desc: "Projects, practical work, subject-based activities, and experiential learning tasks.",
    highlight: "Best 2 considered",
  },
  {
    icon: FolderKanban,
    tag: "PF",
    title: "Portfolio",
    desc: "Notebook maintenance, assignments, class participation, and overall learning progress.",
    highlight: "Continuous evaluation",
  },
];

const writtenExams = [
  { icon: CalendarDays, title: "Mid-Term Examination", desc: "Comprehensive assessment covering the first half of the academic year." },
  { icon: Trophy, title: "Annual Examination", desc: "Final summative assessment covering the full year's syllabus." },
  { icon: Award, title: "Pre-Board Examination", desc: "Board-pattern preparatory examination for Classes X & XII." },
];

const ExaminationGuidelines = () => {
  return (
    <Layout>
      <PageHero
        title="Examination Guidelines"
        breadcrumbs={[
          { label: "Academics", path: "/academics" },
          { label: "Examination Guidelines" },
        ]}
      />

      {/* Fair, Transparent, and Rigorous — Redesigned */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Fair, Transparent, and Rigorous</h2>
            <div className="mx-auto h-1 w-20 bg-indian-green rounded-full mb-6" />
            <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              The school follows the assessment framework prescribed by the{" "}
              <span className="font-semibold text-indian-green">Central Board of Secondary Education (CBSE)</span>{" "}
              to ensure continuous, comprehensive, and competency-based evaluation throughout the academic year.
            </p>
          </div>

          {/* Two pillars */}
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            <Card className="border-l-4 border-l-indian-green hover:shadow-lg transition-all">
              <CardContent className="p-6 flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-indian-green/10 flex items-center justify-center flex-shrink-0">
                  <ClipboardList className="h-6 w-6 text-indian-green" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-2">Internal Assessment</h3>
                  <p className="text-sm text-foreground/75 leading-relaxed">
                    Continuous evaluation across periodic tests, multiple assessments, subject enrichment, and portfolio.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-indian-green hover:shadow-lg transition-all">
              <CardContent className="p-6 flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-indian-green/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-indian-green" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-2">Written Examinations</h3>
                  <p className="text-sm text-foreground/75 leading-relaxed">
                    Summative examinations assessing conceptual understanding, application, and analytical skills.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Internal Assessment Components */}
          <h3 className="text-2xl md:text-3xl font-bold text-black text-center mb-3">Internal Assessment</h3>
          <p className="text-center text-foreground/70 mb-10">Four components combine to form a holistic view of the learner.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {internalAssessment.map((it, i) => (
              <Card key={i} className="border-indian-green/20 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col">
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-indian-green/10 flex items-center justify-center">
                      <it.icon className="h-6 w-6 text-indian-green" />
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-indian-green text-white">
                      {it.tag}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-black mb-2">{it.title}</h4>
                  <p className="text-sm text-foreground/75 leading-relaxed flex-1">{it.desc}</p>
                  <div className="mt-4 text-xs font-semibold text-indian-green bg-indian-green/5 border border-indian-green/20 rounded-md px-3 py-2 text-center">
                    {it.highlight}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Written Examinations Timeline */}
          <h3 className="text-2xl md:text-3xl font-bold text-black text-center mb-3">Written Examinations</h3>
          <p className="text-center text-foreground/70 mb-10">A staged rhythm of assessments across the academic year.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {writtenExams.map((w, i) => (
              <Card key={i} className="border-indian-green/20 hover:shadow-lg transition-all relative">
                <CardContent className="p-6 text-center">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-indian-green text-white text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-indian-green flex items-center justify-center mx-auto mb-4 mt-3">
                    <w.icon className="h-7 w-7 text-white" />
                  </div>
                  <h4 className="text-base font-bold text-black mb-2">{w.title}</h4>
                  <p className="text-sm text-foreground/75 leading-relaxed">{w.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-3">Examination Framework</h2>
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

      {/* Important rules */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-3">Important Examination Rules</h2>
          <div className="mx-auto h-1 w-20 bg-indian-green rounded-full mb-12" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Highlight box */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-indian-green/20 bg-indian-green/5">
            <CardContent className="p-10 text-center">
              <AlertTriangle className="h-12 w-12 text-indian-green mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">Academic Integrity Matters</h2>
              <p className="text-foreground/80">
                Honesty in examinations builds trust and character. Students found indulging in any form of
                malpractice will face strict disciplinary consequences as per school policy.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default ExaminationGuidelines;
