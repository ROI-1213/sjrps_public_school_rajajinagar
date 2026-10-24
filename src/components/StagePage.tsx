import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { LucideIcon, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export interface StageItem {
  title: string;
  icon: LucideIcon;
  desc?: string;
}

export interface StagePageProps {
  title: string;
  subtitle: string;
  breadcrumbLabel: string;
  breadcrumbPath: string;
  image: string;
  intro: string[];
  overview: StageItem[];
  overviewLabel?: string;
  subjects: StageItem[];
  subjectGroups?: { label: string; items: StageItem[] }[];
  features: StageItem[];
  highlights: StageItem[];
  coScholastic?: { label: string; items: string[] };
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const StagePage = ({
  title,
  subtitle,
  breadcrumbLabel,
  breadcrumbPath,
  image,
  intro,
  overview,
  overviewLabel = "Stage Overview",
  subjects,
  subjectGroups,
  features,
  highlights,
  coScholastic,
}: StagePageProps) => {
  return (
    <Layout>
      <PageHero
        title={title}
        breadcrumbs={[
          { label: "Academics", path: "/academics" },
          { label: breadcrumbLabel, path: breadcrumbPath },
        ]}
      />

      {/* Subtitle band */}
      <div className="bg-indian-green/5 border-b border-indian-green/10">
        <div className="container mx-auto px-4 py-4 text-center">
          <p className="text-indian-green font-semibold tracking-wide">{subtitle}</p>
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
                src={image}
                alt={`${title} learning at SJRPS-Rajajinagar`}
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
                {title}
              </h2>
              {intro.map((p, i) => (
                <p
                  key={i}
                  className="text-base lg:text-lg leading-relaxed mb-4"
                  style={{ color: "#333333" }}
                >
                  {p}
                </p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 — Stage Overview / Key Factors */}
      <section className="py-16 bg-indian-green/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ fontFamily: "Poppins, sans-serif", color: "#000000" }}
            >
              {overviewLabel}
            </h2>
            <div className="mx-auto h-[3px] w-16 bg-indian-green rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {overview.map((item, i) => (
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
                      {item.desc && (
                        <p className="text-sm leading-relaxed" style={{ color: "#333333" }}>
                          {item.desc}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Core Subjects */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ fontFamily: "Poppins, sans-serif", color: "#000000" }}
            >
              Core Subjects
            </h2>
            <div className="mx-auto h-[3px] w-16 bg-indian-green rounded-full" />
          </div>
          {subjectGroups && subjectGroups.length > 0 ? (
            <div className="space-y-12">
              {subjectGroups.map((group) => (
                <div key={group.label}>
                  <h3
                    className="text-xl md:text-2xl font-bold text-center mb-6"
                    style={{ fontFamily: "Poppins, sans-serif", color: "#000000" }}
                  >
                    {group.label}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                    {group.items.map((s, i) => (
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
                        <h3 className="font-semibold" style={{ color: "#000000" }}>
                          {s.title}
                        </h3>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {subjects.map((s, i) => (
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
                  <h3 className="font-semibold" style={{ color: "#000000" }}>
                    {s.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Section 4 — Core Features */}
      <section className="py-16 bg-indian-green/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ fontFamily: "Poppins, sans-serif", color: "#000000" }}
            >
              Core Features
            </h2>
            <div className="mx-auto h-[3px] w-16 bg-indian-green rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
                className="rounded-2xl p-6 bg-white border-l-4 border-indian-green shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-indian-green/10 flex items-center justify-center">
                    <f.icon className="h-5 w-5 text-indian-green" />
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: "#000000" }}>
                    {f.title}
                  </h3>
                </div>
                {f.desc && (
                  <p className="text-sm leading-relaxed pl-1" style={{ color: "#333333" }}>
                    {f.desc}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Section 4b — Co-Scholastic Areas */}
      {coScholastic && (
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indian-green mb-3">
                {coScholastic.label}
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold mb-3"
                style={{ fontFamily: "Poppins, sans-serif", color: "#000000" }}
              >
                Co-Scholastic Areas
              </h2>
              <div className="mx-auto h-[3px] w-16 bg-indian-green rounded-full" />
            </div>
            <div className="max-w-2xl mx-auto mt-8">
              <ul className="grid sm:grid-cols-2 gap-4">
                {coScholastic.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-white border border-indian-green/20 shadow-sm px-5 py-4"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-indian-green shrink-0" />
                    <span className="font-medium" style={{ color: "#000000" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Section 5 — Additional Key Highlights */}
      <section className="py-16 lg:py-20">

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ fontFamily: "Poppins, sans-serif", color: "#000000" }}
            >
              Additional Key Highlights
            </h2>
            <div className="mx-auto h-[3px] w-16 bg-indian-green rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
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

export default StagePage;
