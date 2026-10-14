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
  { icon: FileBadge, title: "Birth Certificate", detail: "Government-issued birth certificate copy" },
  { icon: IdCard, title: "Aadhaar Copy", detail: "Student and parent identity copy" },
  { icon: Camera, title: "Passport Size Photographs", detail: "Recent colored passport photographs" },
  { icon: BookOpen, title: "Previous Academic Records", detail: "Report cards/progress records from previous school" },
  { icon: FileText, title: "Transfer Certificate", detail: "TC counter-signed by competent authority (if applicable)" },
];

const whyChooseIcons = [GraduationCap, Sparkles, Users, Heart, Building2];

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
            Admission Journey (7 Simple Steps)
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
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indian-green mb-3">
              Checklist
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-logo-navy"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Required Documents
            </h2>
            <p className="text-muted-foreground mt-3 text-sm md:text-base">
              Please keep the following documents ready for verification during the admissions process.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {documents.map((d) => (
              <Card key={d.title} className="rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow bg-slate-50/50">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indian-green/10 flex items-center justify-center text-indian-green shrink-0">
                    <d.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-logo-navy text-base mb-1">{d.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{d.detail}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose SJRPS-Rajajinagar */}
      <section className="py-16 bg-muted/30 border-t">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indian-green mb-3">
              Why SJRPS-Rajajinagar
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-logo-navy"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {admissionsContent.whyChooseUs.heading}
            </h2>
            <p className="text-muted-foreground mt-3 text-base">
              "{admissionsContent.whyChooseUs.tagline}"
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {admissionsContent.whyChooseUs.pillars.map((item, i) => {
              const Icon = whyChooseIcons[i] || Sparkles;
              return (
                <Card key={item.title} className="rounded-2xl border-none shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-saffron-orange/10 flex items-center justify-center text-saffron-orange mb-4 mx-auto">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-logo-navy text-sm mb-2">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lifelong Partnership Commitment Button */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center justify-center gap-3 px-6 py-4 sm:px-10 sm:py-5 rounded-full bg-indian-green text-white shadow-xl hover:shadow-2xl transition-all duration-300 max-w-3xl text-center border-2 border-saffron-orange/40 hover:scale-[1.01] select-none">
            <Sparkles className="h-5 w-5 text-golden-yellow shrink-0 hidden sm:block" />
            <p className="text-xs sm:text-sm md:text-base font-semibold leading-relaxed tracking-wide">
              "Admissions at SJRPS-Rajajinagar are not just about enrolment — they are the beginning of a lifelong partnership in your child's growth and success."
            </p>
            <Sparkles className="h-5 w-5 text-golden-yellow shrink-0 hidden sm:block" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ApplicationProcess;
