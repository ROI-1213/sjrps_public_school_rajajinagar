import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ClipboardList,
  FileText,
  ShieldCheck,
  UserCheck,
  CheckCircle2,
  CreditCard,
  GraduationCap,
  FileSignature,
  IdCard,
  Camera,
  BookOpen,
  FileBadge,
  Award,
  Users,
  Sparkles,
  Building2,
  Heart,
} from "lucide-react";
import { admissionsContent } from "@/content/admissions";
import { schoolConfig } from "@/schoolConfig";

const stepIcons = [
  ClipboardList,
  UserCheck,
  CheckCircle2,
  ShieldCheck,
  FileSignature,
  CreditCard,
  GraduationCap,
];

const documents = [
  { icon: FileBadge, title: "Birth Certificate" },
  { icon: IdCard, title: "Aadhaar Copy" },
  { icon: Camera, title: "Passport Size Photographs" },
  { icon: BookOpen, title: "Previous Academic Records" },
  { icon: FileText, title: "Transfer Certificate (if applicable)" },
];

const whyChoose = [
  { icon: GraduationCap, title: "Academic Excellence", desc: "CBSE-aligned rigour with strong fundamentals and consistent results." },
  { icon: Sparkles, title: "Holistic Development", desc: "Academics, sports, arts, and life skills woven into every day." },
  { icon: Users, title: "Experienced Faculty", desc: "Mentors who know every child by name and guide with care." },
  { icon: Heart, title: "Value-Based Education", desc: "Character, integrity, and empathy at the core of learning." },
  { icon: Building2, title: "Modern Learning Environment", desc: "Smart classrooms, labs, library, and a safe, vibrant campus." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ApplicationProcess = () => {
  return (
    <Layout>
      <PageHero
        title="Admissions Process"
        breadcrumbs={[
          { label: "Admissions", path: "/admissions" },
          { label: "Admissions Process" },
        ]}
      />

      {/* Intro */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indian-green mb-3">
            Begin Your Journey
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-logo-navy mb-5"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            A Simple, Transparent Admission Process
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At {schoolConfig.fullName}, we welcome families into a nurturing community where every child is encouraged
            to grow with confidence, curiosity, and character. Our admissions process is designed to be
            clear, supportive, and centered on the holistic growth of your child.
          </p>
        </div>
      </section>

      {/* 7-Step Journey Timeline */}
      <section className="py-16 bg-muted/40 border-y">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2
            className="text-3xl md:text-4xl font-bold text-logo-navy text-center mb-12"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Admission Journey
          </h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-indian-green/20 md:-translate-x-1/2" />
            <div className="space-y-10">
              {admissionsContent.processSteps.map((s, i) => {
                const Icon = stepIcons[i] || ClipboardList;
                return (
                  <div
                    key={s.step}
                    className={`relative md:grid md:grid-cols-2 md:gap-8 ${
                      i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                    }`}
                  >
                    <div
                      className={`pl-12 md:pl-0 ${
                        i % 2 === 0 ? "md:text-right md:pr-10" : "md:pl-10"
                      }`}
                    >
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-saffron-orange text-white rounded-full text-xs font-bold mb-2 shadow-sm">
                        Step {s.step}
                      </div>
                      <h3
                        className="text-xl font-bold text-logo-navy flex items-center md:inline-flex gap-2"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        {s.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                    <div className="absolute left-2.5 md:left-1/2 top-1.5 w-6 h-6 bg-indian-green rounded-full border-4 border-white shadow flex items-center justify-center -translate-x-1/2 text-white">
                      <Icon className="h-3 w-3" />
                    </div>
                    <div className="hidden md:block" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 lg:py-20 bg-[hsl(38_70%_96%)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indian-green mb-3">
              Checklist
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-logo-navy mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Required Documents
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Please keep clear copies of the following documents ready at the time of application.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {documents.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              >
                <Card className="rounded-2xl border-none shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 bg-white h-full">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indian-green flex items-center justify-center shrink-0 shadow-md">
                      <d.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-base font-semibold text-logo-navy">{d.title}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose SJRPS-Rajajinagar */}
      <section className="py-16 lg:py-20 bg-indian-green/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indian-green mb-3">
              Why SJRPS-Rajajinagar
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-logo-navy mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Why Choose SJRPS-Rajajinagar?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((w, i) => (
              <motion.div
                key={w.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: (i % 3) * 0.08 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-indian-green/10"
              >
                <div className="w-12 h-12 rounded-xl bg-indian-green flex items-center justify-center mb-4 shadow">
                  <w.icon className="h-6 w-6 text-white" />
                </div>
                <h3
                  className="text-lg font-bold text-logo-navy mb-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {w.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-14">
            <div className="relative bg-indian-green text-white rounded-2xl px-8 py-10 lg:px-14 lg:py-12 shadow-xl text-center">
              <Award className="h-10 w-10 text-golden-yellow mx-auto mb-4" />
              <p className="text-lg lg:text-xl leading-relaxed italic font-medium">
                "Admissions at SJRPS-Rajajinagar are not just about enrolment — they are the beginning of a
                lifelong partnership in your child's growth and success."
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ApplicationProcess;
