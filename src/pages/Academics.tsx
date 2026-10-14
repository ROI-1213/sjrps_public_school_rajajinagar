import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { schoolConfig } from "@/schoolConfig";
import {
  ArrowRight,
  Award,
  Baby,
  BarChart3,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Layers,
  PenLine,
  School,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const academicStages = [
  {
    title: "Pre-Primary",
    grades: "Nursery, LKG & UKG",
    description: "Play-based, activity-oriented learning that nurtures early literacy, numeracy, motor skills and confidence in early learners.",
    link: "/academics/pre-primary",
    icon: Baby,
  },
  {
    title: "Primary Level",
    grades: "Classes I to V",
    description: "Concept-based foundational learning in language, mathematics, EVS, science, social science and computer education.",
    link: "/academics/primary-level",
    icon: BookOpen,
  },
  {
    title: "Secondary Stage",
    grades: "Classes VI to X",
    description: "Analytical, application-based study with experimental laboratory learning, skill subjects, and rigorous CBSE board examination preparation.",
    link: "/academics/secondary-stage",
    icon: School,
  },
];

const academicSystems = [
  {
    title: "Curriculum Framework",
    description: "Stage-wise curricular goals, competencies, learning outcomes and learner-centric pedagogy aligned with CBSE expectations.",
    link: "/academics/curriculum",
    icon: Layers,
  },
  {
    title: "Academic Calendar",
    description: "A structured year of terms, assessments, holidays, co-curricular activities and signature school events.",
    link: "/academics/calendar",
    icon: CalendarDays,
  },
  {
    title: "Academic Achievements",
    description: "100% CBSE board results, science fairs, arts, sports and inter-school distinctions earned by our students.",
    link: "/academics/achievements",
    icon: Award,
  },
];

const policyLinks = [
  {
    title: "Attendance Rules",
    description: "Regularity, punctuality, leave procedure and examination attendance expectations.",
    link: "/academics/attendance-rules",
    icon: Users,
  },
  {
    title: "Code of Conduct",
    description: "Student behaviour, discipline, respect, responsibility and digital conduct standards.",
    link: "/academics/code-of-conduct",
    icon: ShieldCheck,
  },
  {
    title: "Examination Guidelines",
    description: "Assessment framework, internal evaluation, exam-day rules and academic integrity.",
    link: "/academics/examination-guidelines",
    icon: FileText,
  },
  {
    title: "Promotion Criteria",
    description: "Scholastic and co-scholastic evaluation standards for academic progress.",
    link: "/academics/promotion-criteria",
    icon: ClipboardCheck,
  },
];

const highlights = [
  "CBSE curriculum aligned from Pre-Primary through Class 10",
  "Experiential, activity-based and inquiry-led classroom practice",
  "Balanced focus on academics, values, discipline and co-scholastic growth",
  "Assessment systems designed for clarity, consistency and student progress",
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const Academics = () => {
  return (
    <Layout>
      <PageHero title="Academics" breadcrumbs={[{ label: "Academics" }]} />

      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              transition={{ duration: 0.45 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indian-green mb-3">
                Academic Overview
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-black mb-5" style={{ fontFamily: "Poppins, sans-serif" }}>
                A Comprehensive Learning Journey from Early Years to Secondary Level
              </h1>
              <p className="text-base lg:text-lg text-foreground/80 leading-relaxed mb-4">
                Academics at {schoolConfig.shortName} are structured as a continuous, nurturing progression: joyful foundational
                explorations in the pre-primary years, strong conceptual grounding in primary school, and deeper analytical
                and experimental mastery in the secondary stage.
              </p>
              <p className="text-base lg:text-lg text-foreground/80 leading-relaxed">
                Affiliated to CBSE (Secondary Level), our academic programme blends NCERT-aligned rigour with co-curricular
                creativity, building confident learners equipped for scholastic and personal triumphs.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="rounded-2xl bg-indian-green text-white p-7 md:p-8 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-white/15 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-golden-yellow" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Academic Strengths</h2>
                  <p className="text-white/75 text-sm">Structured, student-centred learning</p>
                </div>
              </div>
              <ul className="space-y-4">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/90">
                    <CheckCircle2 className="h-5 w-5 text-golden-yellow shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3 Stages for Rajajinagar */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
              Academic Stages
            </h2>
            <div className="mx-auto h-[3px] w-16 bg-indian-green rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {academicStages.map((stage, index) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="h-full border-indian-green/20 hover:border-indian-green hover:shadow-xl hover:-translate-y-1 transition-all bg-white">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="h-14 w-14 rounded-2xl bg-indian-green flex items-center justify-center mb-5 text-white">
                      <stage.icon className="h-7 w-7" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indian-green mb-2">
                      {stage.grades}
                    </p>
                    <h3 className="text-xl font-bold text-black mb-3">{stage.title}</h3>
                    <p className="text-sm text-foreground/75 leading-relaxed mb-6 flex-1">{stage.description}</p>
                    <Button asChild className="bg-indian-green hover:bg-saffron-orange text-white w-full">
                      <Link to={stage.link}>
                        Explore
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-12 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indian-green mb-3">
                Framework
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                Curriculum, Calendar & Achievements
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Explore the academic blueprint that drives day-to-day excellence at {schoolConfig.shortName}.
              </p>
            </div>
            <div className="space-y-4">
              {academicSystems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                >
                  <Link to={item.link} className="group block">
                    <Card className="border-indian-green/20 hover:border-indian-green hover:shadow-md transition-all">
                      <CardContent className="p-6 flex items-start gap-4">
                        <div className="h-12 w-12 rounded-xl bg-indian-green flex items-center justify-center shrink-0">
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-3 mb-1">
                            <h3 className="text-lg font-bold text-black group-hover:text-indian-green transition-colors">
                              {item.title}
                            </h3>
                            <ArrowRight className="h-4 w-4 text-indian-green opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </div>
                          <p className="text-sm text-foreground/75 leading-relaxed">{item.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
              Academic Policies & Guidelines
            </h2>
            <div className="mx-auto h-[3px] w-16 bg-indian-green rounded-full mb-4" />
            <p className="text-foreground/75">
              Clear rules and procedures that support student accountability and fairness.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {policyLinks.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link to={item.link} className="group block h-full">
                  <Card className="h-full border-l-4 border-l-indian-green hover:shadow-lg transition-all">
                    <CardContent className="p-6 flex gap-4">
                      <div className="h-12 w-12 rounded-xl bg-indian-green flex items-center justify-center shrink-0">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-black mb-2 group-hover:text-indian-green transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-foreground/75 leading-relaxed">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-indian-green text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <BarChart3 className="h-11 w-11 mx-auto mb-4 text-golden-yellow" />
          <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
            Explore the Admission Process
          </h2>
          <p className="text-white/85 mb-7">
            Learn how to apply, review eligibility criteria, and understand the next steps for joining {schoolConfig.shortName}.
          </p>
          <Button asChild size="lg" className="bg-white text-indian-green hover:bg-golden-yellow hover:text-white font-semibold">
            <Link to="/admissions/admissions-process">
              Admission Process
              <PenLine className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Academics;
