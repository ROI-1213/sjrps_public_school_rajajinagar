import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
  GraduationCap,
  Layers,
  PenLine,
  School,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

const academicStages = [
  {
    title: "Pre-Primary",
    grades: "Nursery, LKG & UKG",
    description: "Play-based, activity-oriented learning that nurtures early literacy, numeracy, motor skills and confidence.",
    link: "/academics/pre-primary",
    icon: Baby,
  },
  {
    title: "Primary Level",
    grades: "Classes I to V",
    description: "Concept-based learning with strong foundations in language, mathematics, EVS, science, social science and computer education.",
    link: "/academics/primary-level",
    icon: BookOpen,
  },
  {
    title: "Secondary Stage",
    grades: "Classes VI to X",
    description: "Analytical, application-based study with skill development, laboratory learning and CBSE board preparation.",
    link: "/academics/secondary-stage",
    icon: School,
  },
  {
    title: "Senior Secondary Stage",
    grades: "Classes XI & XII",
    description: "Stream-focused learning, research exposure and career-oriented preparation for higher education pathways.",
    link: "/academics/senior-secondary-stage",
    icon: GraduationCap,
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
    description: "Board results, Olympiads, MANAK Awards, arts, sports and inter-school distinctions earned by our students.",
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
  "CBSE curriculum with stage-wise academic progression",
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
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-5" style={{ fontFamily: "Poppins, sans-serif" }}>
                A Complete Learning Journey from Early Years to Senior Secondary
              </h2>
              <p className="text-base lg:text-lg text-foreground/80 leading-relaxed mb-4">
                Academics at SJRPS-HBR are designed as a continuous journey: joyful foundations in the early years,
                strong concept development in primary classes, deeper analytical learning in secondary school, and
                focused preparation in senior secondary.
              </p>
              <p className="text-base lg:text-lg text-foreground/80 leading-relaxed">
                The programme brings together CBSE-aligned curriculum, experiential learning, regular assessment,
                co-scholastic development and a disciplined school culture that helps every learner grow with confidence.
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
                  <h3 className="text-xl font-bold">Academic Strengths</h3>
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

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
              Academic Stages
            </h2>
            <div className="mx-auto h-[3px] w-16 bg-indian-green rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {academicStages.map((stage, index) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="h-full border-indian-green/20 hover:border-indian-green hover:shadow-xl hover:-translate-y-1 transition-all">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="h-14 w-14 rounded-2xl bg-indian-green flex items-center justify-center mb-5">
                      <stage.icon className="h-7 w-7 text-white" />
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
              <p className="text-foreground/75 leading-relaxed mb-6">
                The academic programme is supported by clear curriculum planning, a well-structured yearly calendar,
                and a culture that recognises sustained student achievement across disciplines.
              </p>
              <div className="rounded-2xl border border-indian-green/20 bg-indian-green/5 p-6">
                <div className="flex items-center gap-3">
                  <Target className="h-8 w-8 text-indian-green" />
                  <div>
                    <h3 className="font-bold text-black">Learning with Purpose</h3>
                    <p className="text-sm text-foreground/70">
                      Every section links to detailed information already available on the website.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {academicSystems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={index === 2 ? "sm:col-span-2" : ""}
                >
                  <Link to={item.link} className="group block h-full">
                    <Card className="h-full border-indian-green/20 hover:shadow-lg transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="h-12 w-12 rounded-xl bg-indian-green/10 border border-indian-green/25 flex items-center justify-center shrink-0 group-hover:bg-indian-green transition-colors">
                            <item.icon className="h-6 w-6 text-indian-green group-hover:text-white transition-colors" />
                          </div>
                          <div>
                            <h3 className="font-bold text-black mb-2 group-hover:text-indian-green transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-sm text-foreground/75 leading-relaxed">{item.description}</p>
                          </div>
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
              Academic Policies
            </h2>
            <div className="mx-auto h-[3px] w-16 bg-indian-green rounded-full mb-4" />
            <p className="text-foreground/75">
              Clear expectations help students remain regular, responsible and prepared for every assessment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
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
            Learn how to apply, review eligibility criteria, and understand the next steps for joining SJRPS-HBR.
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
