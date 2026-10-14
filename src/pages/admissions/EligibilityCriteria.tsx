import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { schoolConfig } from "@/schoolConfig";
import { admissionsContent } from "@/content/admissions";
import {
  Baby,
  GraduationCap,
  BookOpen,
  Repeat,
  FileCheck2,
  Globe2,
  ClipboardCheck,
  Sparkles,
} from "lucide-react";

const sections = [
  {
    icon: Baby,
    title: "Age Eligibility Guidelines",
    desc: "Age criteria are aligned with CBSE norms and Karnataka state educational guidelines. Parents are requested to refer to the grade-wise age chart before applying.",
  },
  {
    icon: GraduationCap,
    title: "Grade-wise Admission Criteria",
    desc: `Admissions are offered from Pre KG through Class 10. Eligibility for each grade is determined by age, prior schooling, and an age-appropriate assessment.`,
  },
  {
    icon: BookOpen,
    title: "Academic Requirements",
    desc: "Applicants are expected to demonstrate basic academic readiness for the grade applied to. Performance in the previous class is considered for higher grades.",
  },
  {
    icon: Repeat,
    title: "Transfer Admission Requirements",
    desc: "Students transferring from other schools must submit a valid Transfer Certificate (TC) counter-signed by competent authorities and previous academic reports for evaluation.",
  },
  {
    icon: FileCheck2,
    title: "Documentation Requirements",
    desc: "All originals must be produced at the time of admission, along with self-attested copies. Incomplete documentation may delay the admission process.",
  },
  {
    icon: Globe2,
    title: "Outstation Student Guidelines",
    desc: "Students relocating from other states must submit equivalence and migration/TC documents as per CBSE norms.",
  },
  {
    icon: ClipboardCheck,
    title: "Admission Assessment Process",
    desc: "A friendly interaction or a written assessment, appropriate to the applicant's grade, is conducted to understand the child's learning readiness.",
  },
];

const EligibilityCriteria = () => {
  return (
    <Layout>
      <PageHero
        title="Eligibility Criteria"
        breadcrumbs={[
          { label: "Admissions", path: "/admissions/admission-process" },
          { label: "Eligibility Criteria" },
        ]}
      />

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indian-green mb-3">
            Who Can Apply
          </p>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-logo-navy mb-5"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Eligibility & Admission Guidelines
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {schoolConfig.shortName} follows a transparent, age-appropriate, and merit-based eligibility framework
            aligned with CBSE standards for Pre-KG to Class 10.
          </p>
        </div>
      </section>

      {/* Age Guidelines Grid */}
      <section className="pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm border border-indian-green/10 p-6 md:p-8">
            <h2 className="text-xl font-bold text-logo-navy mb-4">
              Age Guidelines for Admission (as of June 1st)
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {admissionsContent.eligibility.ageGuidelines.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-muted/40 border border-gray-100 flex flex-col justify-center">
                  <span className="text-sm font-bold text-logo-navy">{item.grade}</span>
                  <span className="text-xs text-indian-green font-semibold mt-1">{item.minAge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-indian-green/10"
              >
                <div className="w-12 h-12 rounded-xl bg-indian-green flex items-center justify-center mb-4 shadow">
                  <s.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-logo-navy mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="relative bg-indian-green text-white rounded-2xl px-8 py-10 lg:px-14 lg:py-12 shadow-xl text-center overflow-hidden">
            <Sparkles className="absolute -top-2 -left-2 h-24 w-24 text-white/10" />
            <p className="relative text-lg lg:text-xl leading-relaxed italic font-medium">
              "{schoolConfig.shortName} welcomes students who demonstrate a willingness to learn, participate actively,
              and uphold the values and standards of the institution."
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EligibilityCriteria;
