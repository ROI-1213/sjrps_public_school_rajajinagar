import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import snrSecondary from "@/assets/snr-secondary-stage.jpg";
import {
  Compass,
  GraduationCap,
  Briefcase,
  ClipboardList,
  FlaskConical,
  Building2,
  Target,
  Rocket,
  Sparkles,
  BookOpen,
  Trophy,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const focusItems = [
  { title: "Stream Specialisation", icon: Compass, desc: "Deep focus in the chosen academic stream." },
  { title: "Career-Oriented Preparation", icon: Briefcase, desc: "Academic learning aligned with future career pathways." },
  { title: "Research-Based Learning", icon: FlaskConical, desc: "Practical exposure through research and hands-on application." },
];

const assessment = ["Theory Examinations", "Practical Examinations", "Project Work", "Viva Voce"];

type Stream = {
  name: string;
  color: string;
  abbreviations: { code: string; label: string }[];
  combinations: string[];
};

const classXI: Stream[] = [
  {
    name: "Science Stream",
    color: "from-indian-green/10 to-indian-green/5",
    abbreviations: [
      { code: "P", label: "Physics" },
      { code: "C", label: "Chemistry" },
      { code: "M", label: "Mathematics" },
      { code: "B", label: "Biology" },
      { code: "CS", label: "Computer Science" },
      { code: "Psy", label: "Psychology" },
      { code: "PE", label: "Physical Education" },
    ],
    combinations: ["PCMB", "PCMCS", "PCBPsy", "PCMPE"],
  },
  {
    name: "Commerce Stream",
    color: "from-amber-500/10 to-amber-500/5",
    abbreviations: [
      { code: "A", label: "Accountancy" },
      { code: "B", label: "Business Studies" },
      { code: "E", label: "Economics" },
      { code: "CS", label: "Computer Science" },
      { code: "Psy", label: "Psychology" },
      { code: "PE", label: "Physical Education" },
    ],
    combinations: ["EBACS", "EBAPE", "EBAPsy"],
  },
];

const classXII: Stream[] = [
  {
    name: "Science Stream",
    color: "from-indian-green/10 to-indian-green/5",
    abbreviations: [
      { code: "P", label: "Physics" },
      { code: "C", label: "Chemistry" },
      { code: "M", label: "Mathematics" },
      { code: "B", label: "Biology" },
      { code: "CS", label: "Computer Science" },
      { code: "Psy", label: "Psychology" },
    ],
    combinations: ["PCMB", "PCMCS", "PCBPsy", "PCMPsy"],
  },
  {
    name: "Commerce Stream",
    color: "from-amber-500/10 to-amber-500/5",
    abbreviations: [
      { code: "A", label: "Accountancy" },
      { code: "B", label: "Business Studies" },
      { code: "E", label: "Economics" },
      { code: "CS", label: "Computer Science" },
      { code: "Psy", label: "Psychology" },
    ],
    combinations: ["EBACS", "EBAAM", "EBAPsy"],
  },
];

const integratedPoints = [
  "Curriculum thoroughly mapped with the CBSE Board syllabus.",
  "Excellent faculty with extensive experience in training students for competitive examinations.",
  "Stress management through Yoga, Physical Education, Art, Music, and Counselling Sessions to ensure holistic development.",
];

const SectionHeading = ({ eyebrow, title }: { eyebrow?: string; title: string }) => (
  <div className="max-w-3xl mx-auto text-center mb-12">
    {eyebrow && (
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indian-green mb-3">
        {eyebrow}
      </p>
    )}
    <h2
      className="text-3xl md:text-4xl font-bold mb-3"
      style={{ fontFamily: "Poppins, sans-serif", color: "#000000" }}
    >
      {title}
    </h2>
    <div className="mx-auto h-[3px] w-16 bg-indian-green rounded-full" />
  </div>
);

const StreamBlock = ({ stream }: { stream: Stream }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`rounded-2xl border border-indian-green/20 bg-gradient-to-br ${stream.color} shadow-sm p-6 md:p-8 h-full flex flex-col`}
  >
    <h4
      className="text-xl md:text-2xl font-bold mb-5"
      style={{ fontFamily: "Poppins, sans-serif", color: "#000000" }}
    >
      {stream.name}
    </h4>
    <div className="mb-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indian-green mb-3">
        Subject Abbreviations
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {stream.abbreviations.map((a) => (
          <div
            key={a.code}
            className="flex items-baseline gap-2 rounded-lg bg-white/80 border border-indian-green/15 px-3 py-2"
          >
            <span className="font-bold text-indian-green">{a.code}</span>
            <span className="text-sm" style={{ color: "#333333" }}>
              – {a.label}
            </span>
          </div>
        ))}
      </div>
    </div>
    <div className="mt-auto">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indian-green mb-3">
        Combinations Offered
      </p>
      <div className="flex flex-wrap gap-2">
        {stream.combinations.map((c, i) => (
          <span
            key={c}
            className="inline-flex items-center gap-2 rounded-full bg-indian-green text-white font-semibold px-4 py-2 shadow-sm"
          >
            <span className="text-white/70 text-sm">{i + 1}.</span>
            {c}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const ClassBlock = ({ title, streams }: { title: string; streams: Stream[] }) => (
  <div>
    <h3
      className="text-2xl md:text-3xl font-bold text-center mb-8"
      style={{ fontFamily: "Poppins, sans-serif", color: "#000000" }}
    >
      {title}
    </h3>
    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
      {streams.map((s) => (
        <StreamBlock key={s.name} stream={s} />
      ))}
    </div>
  </div>
);

const SeniorSecondaryStage = () => (
  <Layout>
    <PageHero
      title="Senior Secondary Stage"
      breadcrumbs={[
        { label: "Academics", path: "/academics" },
        { label: "Senior Secondary Stage", path: "/academics/senior-secondary-stage" },
      ]}
    />

    {/* Subtitle band */}
    <div className="bg-indian-green/5 border-b border-indian-green/10">
      <div className="container mx-auto px-4 py-4 text-center">
        <p className="text-indian-green font-semibold tracking-wide">Level: Classes XI – XII</p>
      </div>
    </div>

    {/* Introduction */}
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
              src={snrSecondary}
              alt="Senior Secondary students at SJRPS-HBR"
              className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto"
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
              Senior Secondary Stage
            </h2>
            <p className="text-base lg:text-lg leading-relaxed mb-4" style={{ color: "#333333" }}>
              The Senior Secondary Stage (Classes XI–XII) prepares students for higher education and future careers through specialised academic streams and holistic development.
            </p>
            <p className="text-base lg:text-lg leading-relaxed mb-4" style={{ color: "#333333" }}>
              Our programme combines strong subject specialisation with career counselling, entrance-exam preparation and skill building — helping every student make confident, informed choices.
            </p>
            <p className="text-base lg:text-lg leading-relaxed mb-4" style={{ color: "#333333" }}>
              Teachers act as mentors, guiding learners to think independently, research deeply and develop the leadership qualities they will carry into university and the workplace.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Focus */}
    <section className="py-16 bg-indian-green/5">
      <div className="container mx-auto px-4">
        <SectionHeading title="Focus" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusItems.map((item, i) => (
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

    {/* Courses Offered */}
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="Academic Year 2026–27" title="Courses Offered" />
        <div className="space-y-14">
          <ClassBlock title="Class XI" streams={classXI} />
          <ClassBlock title="Class XII" streams={classXII} />
        </div>
      </div>
    </section>

    {/* Assessment */}
    <section className="py-16 bg-indian-green/5">
      <div className="container mx-auto px-4">
        <SectionHeading title="Assessment" />
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
          {assessment.map((a) => (
            <div
              key={a}
              className="flex items-center gap-3 rounded-xl bg-white border border-indian-green/20 shadow-sm px-5 py-4"
            >
              <ClipboardList className="h-5 w-5 text-indian-green shrink-0" />
              <span className="font-medium" style={{ color: "#000000" }}>
                {a}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Objective */}
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Objective" />
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border-l-4 border-indian-green bg-white shadow-sm p-6 md:p-8 flex gap-4">
            <Target className="h-8 w-8 text-indian-green shrink-0" />
            <p className="text-base lg:text-lg leading-relaxed" style={{ color: "#333333" }}>
              Prepare students for higher education, competitive examinations, and successful professional careers through a balanced academic and practical learning approach.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Integrated Courses */}
    <section className="py-16 bg-indian-green/5">
      <div className="container mx-auto px-4">
        <SectionHeading title="Integrated Courses" />
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-white border border-indian-green/20 shadow-sm p-6 md:p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-indian-green flex items-center justify-center shadow">
                <Rocket className="h-7 w-7 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indian-green mb-1">
                  Competitive Edge
                </p>
                <h3
                  className="text-2xl font-bold"
                  style={{ fontFamily: "Poppins, sans-serif", color: "#000000" }}
                >
                  JEE &amp; NEET
                </h3>
              </div>
            </div>
            <ul className="space-y-3">
              {integratedPoints.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-indian-green shrink-0" />
                  <span className="text-base leading-relaxed" style={{ color: "#333333" }}>
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
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
          Begin Your Child's Journey at SJRPS-HBR
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

export default SeniorSecondaryStage;
