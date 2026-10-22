import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import sspImg from "@/assets/ssp.jpg";
import {
  BookOpen,
  Calculator,
  FlaskConical,
  Globe,
  Laptop,
  BookMarked,
  ScrollText,
  Brain,
  Wrench,
  Lightbulb,
  Sparkles,
  Palette,
  Dumbbell,
  Heart,
  Award,
  CheckCircle2,
  Target,
  Search,
  type LucideIcon,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const focusOverall = [
  { title: "Analytical Thinking", icon: Brain, desc: "Application-based learning that builds reasoning and depth." },
  { title: "Skill Development", icon: Wrench, desc: "Experiential learning that turns knowledge into ability." },
  { title: "Problem Solving", icon: Lightbulb, desc: "Developing structured approaches to real-world challenges." },
];

interface StageCardItem {
  title: string;
  desc: string;
  icon: LucideIcon;
}

const classGroups: {
  label: string;
  focus: StageCardItem[];
  subjects: { title: string; icon: LucideIcon }[];
  board: string;
}[] = [
  {
    label: "Classes VI – VIII",
    focus: [
      {
        title: "Analytical Thinking",
        desc: "Analytical thinking and application-based learning that fosters depth, inquiry, and critical reasoning.",
        icon: Brain,
      },
      {
        title: "Skill Development",
        desc: "Skill development and hands-on experiential learning that bridges classroom knowledge with practical ability.",
        icon: Wrench,
      },
      {
        title: "Problem Solving",
        desc: "Development of structured problem-solving skills to analyze and address real-world challenges.",
        icon: Lightbulb,
      },
    ],
    subjects: [
      { title: "I Language- English", icon: BookOpen },
      { title: "II Language- Kannada", icon: BookMarked },
      { title: "III Language - Hindi", icon: ScrollText },
      { title: "Mathematics", icon: Calculator },
      { title: "Science", icon: FlaskConical },
      { title: "Social Science", icon: Globe },
      { title: "Computer Education", icon: Laptop },
    ],
    board: "",
  },
  {
    label: "Classes IX",
    focus: [
      {
        title: "Analytical Thinking",
        desc: "Analytical thinking and application-based learning that fosters depth, inquiry, and critical reasoning.",
        icon: Brain,
      },
      {
        title: "Skill Development",
        desc: "Skill development and hands-on experiential learning that bridges classroom knowledge with practical ability.",
        icon: Wrench,
      },
      {
        title: "Critical Thinking",
        desc: "Emphasis on critical thinking, independent inquiry, and logical reasoning across disciplines.",
        icon: Target,
      },
      {
        title: "Investigatory Projects",
        desc: "Investigatory projects based on real-life scenarios that develop investigative and research skills.",
        icon: Search,
      },
      {
        title: "Scientific Temperament",
        desc: "Developing scientific temperament through structured laboratory activities and hands-on experiments.",
        icon: FlaskConical,
      },
    ],
    subjects: [
      { title: "I Language- English", icon: BookOpen },
      { title: "II Language- Kannada / Hindi", icon: BookMarked },
      { title: "Mathematics", icon: Calculator },
      { title: "Mathematics Advanced", icon: Calculator },
      { title: "Science (Physics, Chemistry & Biology)", icon: FlaskConical },
      { title: "Science Advanced", icon: FlaskConical },
      { title: "Social Science", icon: Globe },
      { title: "Information Technology", icon: Laptop },
    ],
    board: "",
  },
  {
    label: "Classes X",
    focus: [
      {
        title: "Analytical Thinking",
        desc: "Analytical thinking and application-based learning that fosters depth, inquiry, and critical reasoning.",
        icon: Brain,
      },
      {
        title: "Skill Development",
        desc: "Skill development and hands-on experiential learning that bridges classroom knowledge with practical ability.",
        icon: Wrench,
      },
      {
        title: "Critical Thinking",
        desc: "Emphasis on critical thinking, independent inquiry, and logical reasoning across disciplines.",
        icon: Target,
      },
      {
        title: "Investigatory Projects",
        desc: "Investigatory projects based on real-life scenarios that develop investigative and research skills.",
        icon: Search,
      },
      {
        title: "Scientific Temperament",
        desc: "Developing scientific temperament through structured laboratory activities and hands-on experiments.",
        icon: FlaskConical,
      },
    ],
    subjects: [
      { title: "I Language- English", icon: BookOpen },
      { title: "II Language- Kannada / Hindi", icon: BookMarked },
      { title: "Mathematics", icon: Calculator },
      { title: "Science (Physics, Chemistry & Biology)", icon: FlaskConical },
      { title: "Social Science", icon: Globe },
      { title: "Information Technology", icon: Laptop },
    ],
    board: "Conducted by CBSE at the end of Class X.",
  },
];

const coScholastic = [
  { title: "Art Education", icon: Palette },
  { title: "Physical Education", icon: Dumbbell },
  { title: "Life Skills", icon: Heart },
  { title: "Value Education", icon: Sparkles },
];

const SecondaryStage = () => {
  return (
    <Layout>
      <PageHero
        title="Secondary Stage"
        breadcrumbs={[
          { label: "Academics", path: "/academics" },
          { label: "Secondary Stage", path: "/academics/secondary-stage" },
        ]}
      />

      {/* Subtitle band */}
      <div className="bg-indian-green/5 border-b border-indian-green/10">
        <div className="container mx-auto px-4 py-4 text-center">
          <p className="text-indian-green font-semibold tracking-wide">Grades: 6 to 10</p>
        </div>
      </div>

      {/* Section 1 — Introduction */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 lg:items-stretch">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 h-full"
            >
              <img
                src="/images/Homepage Photos/secondary-stage.jpg"
                alt="Secondary Stage learning at SJRPS-Rajajinagar"
                className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = sspImg;
                }}
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="flex flex-col justify-center h-full"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indian-green mb-3">
                Introduction
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold leading-tight mb-6"
                style={{ fontFamily: "Poppins, sans-serif", color: "#000000" }}
              >
                Secondary Stage
              </h2>
              <p className="text-base lg:text-lg leading-relaxed mb-4" style={{ color: "#333333" }}>
                The Secondary Stage (Grades 6–10) is a defining phase where academic depth, board
                examination preparation and career awareness converge. Learners move from
                foundational understanding into analytical, application-based study.
              </p>
              <p className="text-base lg:text-lg leading-relaxed mb-4" style={{ color: "#333333" }}>
                Our programme emphasises problem solving, experiential learning and skill
                development — preparing every student for the CBSE Board Examination and for
                confident senior secondary study.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 — Focus */}
      <section className="py-16 bg-indian-green/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ fontFamily: "Poppins, sans-serif", color: "#000000" }}
            >
              Focus
            </h2>
            <div className="mx-auto h-[3px] w-16 bg-indian-green rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusOverall.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
              >
                <Card className="rounded-2xl border border-indian-green/20 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all h-full bg-white">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indian-green flex items-center justify-center shrink-0 shadow">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1" style={{ color: "#000000" }}>
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#333333" }}>
                        {item.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Academic Structure by Class Group */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ fontFamily: "Poppins, sans-serif", color: "#000000" }}
            >
              Academic Structure
            </h2>
            <div className="mx-auto h-[3px] w-16 bg-indian-green rounded-full" />
          </div>

          <div className="space-y-16">
            {classGroups.map((group) => (
              <div key={group.label}>
                <h3
                  className="text-2xl md:text-3xl font-bold text-center mb-8"
                  style={{ fontFamily: "Poppins, sans-serif", color: "#000000" }}
                >
                  {group.label}
                </h3>

                {/* Focus section */}
                {group.focus.length > 0 && (
                  <div className="mb-12">
                    <div className="text-center mb-6">
                      <h4 className="text-xl md:text-2xl font-bold text-school-brown mb-2">
                        Focus
                      </h4>
                      <div className="mx-auto h-[2.5px] w-12 bg-indian-green rounded-full" />
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {group.focus.map((item, i) => (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
                          className="rounded-2xl p-6 bg-white border border-indian-green/20 border-l-4 border-l-indian-green shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
                        >
                          <div className="flex items-center gap-3 mb-2.5">
                            <div className="w-10 h-10 rounded-lg bg-indian-green/10 flex items-center justify-center shrink-0">
                              <item.icon className="h-5 w-5 text-indian-green" />
                            </div>
                            <h5 className="font-bold text-school-brown text-base sm:text-lg leading-snug">
                              {item.title}
                            </h5>
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {item.desc}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Core Subjects */}
                <div className="mb-12">
                  <div className="text-center mb-6">
                    <h4 className="text-xl md:text-2xl font-bold text-school-brown mb-2">
                      Core Subjects
                    </h4>
                    <div className="mx-auto h-[2.5px] w-12 bg-indian-green rounded-full" />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                    {group.subjects.map((s, i) => (
                      <motion.div
                        key={s.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
                        className="rounded-2xl p-6 text-center border border-indian-green/20 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
                      >
                        <div className="mx-auto w-14 h-14 rounded-full bg-indian-green/10 border border-indian-green/30 flex items-center justify-center mb-3">
                          <s.icon className="h-6 w-6 text-indian-green" />
                        </div>
                        <h5 className="font-semibold text-sm" style={{ color: "#000000" }}>
                          {s.title}
                        </h5>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Board */}
                {group.board && (
                  <div className="max-w-2xl mx-auto mt-6">
                    <div className="rounded-2xl p-6 bg-white border border-indian-green/20 border-l-4 border-l-indian-green shadow-sm hover:shadow-lg transition-all flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-indian-green/10 flex items-center justify-center shrink-0">
                        <Award className="h-5 w-5 text-indian-green" />
                      </div>
                      <div>
                        <h5 className="font-bold text-school-brown text-base sm:text-lg mb-1">
                          Board Examination
                        </h5>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {group.board}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Co-Scholastic */}
      <section className="py-16 bg-indian-green/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-3">
            <h2
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ fontFamily: "Poppins, sans-serif", color: "#000000" }}
            >
              Co-Scholastic Areas
            </h2>
            <div className="mx-auto h-[3px] w-16 bg-indian-green rounded-full mb-3" />
            <p className="text-sm font-semibold text-indian-green tracking-wide mb-10">
              Applicable for Classes VI – X
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coScholastic.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
                className="rounded-2xl p-6 text-center bg-indian-green text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="mx-auto w-14 h-14 rounded-full bg-white/15 border border-white/30 flex items-center justify-center mb-3">
                  <h.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-white">{h.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-indian-green text-white">
        <div className="container mx-auto px-4 text-center">
          <Sparkles className="h-10 w-10 mx-auto mb-4 text-golden-yellow" />
          <h2
            className="text-2xl md:text-3xl font-bold mb-3"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Begin Your Child's Journey at SJRPS-Rajajinagar
          </h2>
          <p className="text-white/85 max-w-2xl mx-auto mb-6">
            Join a school where every learner is nurtured with care and inspired to excel.
          </p>
          <Link
            to="/admissions/admissions-process"
            className="inline-block bg-white text-indian-green font-semibold px-7 py-3 rounded-full shadow hover:bg-golden-yellow hover:text-white transition-colors"
          >
            Apply for Admission
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default SecondaryStage;
