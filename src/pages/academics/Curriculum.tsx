import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  BookOpen,
  Landmark,
  Sparkles,
  FlaskConical,
  Layers,
  Heart,
  Globe2,
  ClipboardCheck,
  Users,
  Cpu,
  BookMarked,
  Calculator,
  Atom,
  Palette,
  Activity,
  Leaf,
  Briefcase,
  Target,
  Lightbulb,
  Compass,
  ListChecks,
  Clock,
  CheckCircle2,
} from "lucide-react";

const ncertFocus = [
  { icon: FlaskConical, title: "Experiential Learning" },
  { icon: Layers, title: "Cross-Curricular Integration" },
  { icon: Landmark, title: "Cultural Rootedness" },
  { icon: Heart, title: "Value-Based Education" },
  { icon: BookOpen, title: "Indian Knowledge Systems (IKS)" },
  { icon: ClipboardCheck, title: "Holistic Assessment" },
  { icon: Users, title: "Inclusive Education" },
  { icon: Cpu, title: "Educational Technology" },
];

const ncertSubjects = [
  { icon: BookMarked, title: "Languages" },
  { icon: Calculator, title: "Mathematics" },
  { icon: Atom, title: "Science" },
  { icon: Globe2, title: "Social Science" },
  { icon: Briefcase, title: "Vocational Education" },
  { icon: Palette, title: "Arts Education" },
  { icon: Activity, title: "Physical Education & Well-being" },
  { icon: Leaf, title: "Environmental Education" },
];

const ncfElements = [
  { icon: Target, title: "Curricular Goals", desc: "Clear, stage-wise goals that guide learning outcomes." },
  { icon: Sparkles, title: "Competencies", desc: "Skills and abilities students develop across stages." },
  { icon: Lightbulb, title: "Learning Activities & Outcomes", desc: "Engaging activities mapped to measurable outcomes." },
  { icon: Compass, title: "Pedagogical Approaches", desc: "Learner-centric, inquiry-driven teaching methods." },
  { icon: Clock, title: "Indicative Time Allocation", desc: "Balanced time across subjects and experiences." },
  { icon: ListChecks, title: "Assessment Orientation", desc: "Holistic, competency-based, ongoing assessment." },
];

const Curriculum = () => {
  return (
    <Layout>
      <PageHero
        title="Curriculum Framework"
        breadcrumbs={[
          { label: "Academics", path: "/academics" },
          { label: "Curriculum" },
        ]}
      />

      {/* Intro */}
      <section className="relative py-16 bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
          backgroundImage: "radial-gradient(hsl(var(--indian-green)) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }} />
        <div className="container mx-auto px-4 max-w-5xl relative">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indian-green/10 mb-5">
              <GraduationCap className="h-8 w-8 text-indian-green" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              A Future-Ready, Competency-Based Curriculum
            </h2>
            <div className="mx-auto h-1 w-20 bg-indian-green rounded-full mb-6" />
            <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Our academic framework blends the rigour of <strong>CBSE</strong>, the depth of
              <strong> NCERT</strong>, and the vision of the <strong>NCF-SE 2023</strong> — nurturing
              curious, confident, and capable learners ready for higher education and life beyond.
            </p>
          </div>
        </div>
      </section>

      {/* CBSE */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <Card className="overflow-hidden border-0 shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-3xl">
            <div className="grid md:grid-cols-[280px,1fr]">
              <div className="bg-gradient-to-br from-indian-green to-indian-green/80 p-8 flex flex-col justify-center items-center text-center text-white">
                <div className="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center mb-4">
                  <Landmark className="h-10 w-10" />
                </div>
                <h3 className="text-3xl font-bold mb-2">CBSE</h3>
                <p className="text-white/85 text-sm">Central Board of Secondary Education</p>
              </div>
              <CardContent className="p-8 md:p-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-indian-green/10 text-indian-green hover:bg-indian-green/20 border-0">
                    Affiliated — CBSE Sr. Sec., New Delhi
                  </Badge>
                  <Badge className="bg-saffron-orange/15 text-saffron-orange hover:bg-saffron-orange/25 border-0">
                    Affiliation No.: 830123
                  </Badge>
                </div>
                <h4 className="text-2xl font-bold text-black mb-3">National School Education Board</h4>
                <p className="text-foreground/75 leading-relaxed">
                  CBSE is India's national school education board responsible for school affiliations,
                  defining curriculum based on NCERT guidelines, and conducting Class X and Class XII
                  Board Examinations. The curriculum is designed to develop <strong>conceptual
                  understanding</strong>, <strong>critical thinking</strong>, <strong>problem-solving
                  abilities</strong>, and overall competencies through a <strong>competency-based
                  learning approach</strong>.
                </p>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* NCERT */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-indian-green/10 mb-4">
              <BookOpen className="h-7 w-7 text-indian-green" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">NCERT</h2>
            <div className="mx-auto h-1 w-20 bg-indian-green rounded-full mb-4" />
            <p className="text-foreground/75 max-w-3xl mx-auto leading-relaxed">
              The curriculum follows the latest NCERT framework with a strong emphasis on
              <strong> competency-based education</strong> and <strong> experiential learning</strong>.
            </p>
          </div>

          <h3 className="text-xl font-bold text-black text-center mb-6">Key Focus Areas</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {ncertFocus.map((it, i) => (
              <Card key={i} className="border-indian-green/15 hover:shadow-lg hover:-translate-y-1 transition-all bg-background">
                <CardContent className="p-5 text-center">
                  <div className="w-12 h-12 rounded-xl bg-indian-green/10 flex items-center justify-center mx-auto mb-3">
                    <it.icon className="h-6 w-6 text-indian-green" />
                  </div>
                  <p className="text-sm font-semibold text-black leading-snug">{it.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="rounded-2xl bg-background border border-indian-green/15 p-6 md:p-8 mb-8 text-center">
            <p className="text-foreground/80 leading-relaxed">
              To promote <strong>multidisciplinary learning</strong> and the <strong>holistic
              development</strong> of every student, equal importance is given to all subject areas:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {ncertSubjects.map((it, i) => (
              <div
                key={i}
                className="group flex items-center gap-3 rounded-xl bg-background border border-border p-4 hover:border-indian-green/40 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-saffron-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-saffron-orange/20 transition-colors">
                  <it.icon className="h-5 w-5 text-saffron-orange" />
                </div>
                <span className="text-sm font-medium text-black">{it.title}</span>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-indian-green/10 via-indian-green/5 to-transparent border-l-4 border-indian-green p-6">
            <p className="text-foreground/80 leading-relaxed">
              The curriculum encourages <strong>conceptual understanding</strong>, <strong>real-life
              application of knowledge</strong>, <strong>creativity</strong>, <strong>collaboration</strong>,
              and <strong>lifelong learning</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* NCF-SE 2023 */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-indian-green/10 mb-4">
              <Compass className="h-7 w-7 text-indian-green" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
              National Curriculum Framework
            </h2>
            <p className="text-indian-green font-semibold mb-3">NCF-SE 2023</p>
            <div className="mx-auto h-1 w-20 bg-indian-green rounded-full mb-4" />
            <p className="text-foreground/75 max-w-3xl mx-auto leading-relaxed">
              Our academic curriculum is aligned with the <strong>National Curriculum Framework for
              School Education (NCF-SE 2023)</strong>, ensuring <strong>competency-based</strong>,
              <strong> learner-centric</strong>, and <strong>future-ready</strong> education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {ncfElements.map((it, i) => (
              <Card
                key={i}
                className="group relative overflow-hidden border-0 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1 rounded-2xl"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indian-green to-saffron-orange" />
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indian-green/10 flex items-center justify-center flex-shrink-0 group-hover:bg-indian-green group-hover:text-white transition-colors">
                      <it.icon className="h-6 w-6 text-indian-green group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-black mb-2">{it.title}</h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">{it.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="rounded-2xl bg-indian-green text-white p-6 md:p-8 flex items-start gap-4">
            <CheckCircle2 className="h-7 w-7 flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              These components ensure that learning remains <strong>engaging</strong>,
              <strong> outcome-based</strong>, <strong>inclusive</strong>, and <strong>relevant</strong>
              &nbsp;to the evolving educational landscape.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Curriculum;
