import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Users,
  Trophy,
  BookOpen,
  Sparkles,
  Heart,
  ShieldCheck,
  Target,
  UserCheck,
  Medal,
  Rocket,
  Handshake,
  Lightbulb,
  Brain,
  Globe2,
  Crown,
  Quote,
  Award,
} from "lucide-react";
import { aboutContent } from "@/content/about";
import { schoolConfig } from "@/schoolConfig";
import HistoricalGallerySection from "@/components/HistoricalGallerySection";

const whyChoose = [
  { icon: BookOpen, title: "Smart Classrooms", desc: "Interactive digital learning environments with modern technology and multimedia resources." },
  { icon: Users, title: "Dedicated Faculty", desc: "Experienced educators committed to student success, personal growth, and academic excellence." },
  { icon: Heart, title: "Value Education", desc: "Character building through comprehensive moral and ethical education programs." },
  { icon: ShieldCheck, title: "Safe Campus", desc: "Comprehensive CCTV surveillance, secure entry, and trained staff ensuring complete student safety." },
  { icon: Target, title: "Holistic Development", desc: "Balanced focus on academics, sports, cultural arts, and leadership skills." },
  { icon: Trophy, title: "Proven Track Record", desc: "Consistent 100% CBSE board examination results with distinctions and academic milestones." },
];

const philosophy = [
  { icon: UserCheck, title: "Child-Centric Learning", desc: "Every classroom is designed around the curiosity, pace, and potential of each learner." },
  { icon: GraduationCap, title: "Academic Excellence", desc: "Rigorous standards, strong fundamentals, and a deep love for lifelong learning." },
  { icon: Heart, title: "Character Development", desc: "Values, empathy, and integrity built into everyday school life." },
  { icon: Lightbulb, title: "Innovation & Creativity", desc: "Project-based learning, design thinking, and freedom to explore new ideas." },
  { icon: Crown, title: "Leadership Skills", desc: "Opportunities to lead, collaborate, and take responsibility from an early age." },
  { icon: Brain, title: "Critical Thinking", desc: "Questioning, reasoning, and problem-solving across every subject." },
  { icon: Globe2, title: "Social Responsibility", desc: "A strong sense of community, citizenship, and care for the world around us." },
  { icon: Sparkles, title: "Lifelong Learning", desc: "Curiosity nurtured today becomes the wisdom of tomorrow." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Overview = () => {
  return (
    <Layout>
      <PageHero
        title="Overview"
        breadcrumbs={[{ label: "About", path: "/about/overview" }, { label: "Overview" }]}
      />

      {/* About Our School — Two Column */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="lg:col-span-5"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <img
                  src={aboutContent.overview.buildingImage}
                  alt={`${schoolConfig.fullName} Campus`}
                  className="w-full aspect-[4/5] object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                  }}
                />
                <div className="absolute -bottom-1 -right-1 bg-saffron-orange text-white px-5 py-3 rounded-tl-2xl shadow-xl">
                  <div className="text-3xl font-extrabold leading-none">{schoolConfig.stats.trustYears}</div>
                  <div className="text-xs uppercase tracking-wider font-semibold">Years of Trust</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="lg:col-span-7"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indian-green mb-3">
                {aboutContent.overview.eyebrow}
              </p>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-logo-navy leading-tight mb-6"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {aboutContent.overview.heading}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-base mb-8">
                {aboutContent.overview.narrative.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3 mb-8">
                {aboutContent.overview.stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl bg-indian-green/5 border border-indian-green/10 px-4 py-3 text-center"
                  >
                    <div className="text-2xl font-bold text-indian-green">{s.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5 font-semibold">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-saffron-orange/10 to-transparent border-l-4 border-saffron-orange rounded-r-xl p-5">
                <p className="text-logo-navy font-semibold italic leading-relaxed">
                  "{aboutContent.overview.quote}"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* School History */}
      <section className="py-16 lg:py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="max-w-6xl mx-auto"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indian-green mb-3">
              Campus Heritage & History
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-logo-navy leading-tight mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {aboutContent.history.title}
            </h2>
            <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              {aboutContent.history.narrative.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Historical Gallery — 3 Authentic Campus Moments */}
      <HistoricalGallerySection limit={3} />

      {/* Our Journey Timeline */}
      <section className="py-16 bg-muted/40 border-y">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2
            className="text-3xl md:text-4xl font-bold text-indian-green text-center mb-12"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-indian-green/20 md:-translate-x-1/2" />
            <div className="space-y-10">
              {aboutContent.timeline.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative md:grid md:grid-cols-2 md:gap-8 ${
                    i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                >
                  <div
                    className={`pl-12 md:pl-0 ${
                      i % 2 === 0 ? "md:text-right md:pr-10" : "md:pl-10"
                    }`}
                  >
                    <div className="inline-block px-3.5 py-1 bg-saffron-orange text-white rounded-full text-xs font-bold mb-2 shadow-sm">
                      {m.year}
                    </div>
                    <h3
                      className="text-xl font-bold text-logo-navy"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {m.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{m.description}</p>
                  </div>
                  <div className="absolute left-2.5 md:left-1/2 top-1.5 w-3.5 h-3.5 bg-indian-green rounded-full border-4 border-white shadow -translate-x-1/2" />
                  <div className="hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SJRPS — Exact Reference Design */}
      <section className="py-20 lg:py-24 bg-[#FAF7F2] border-t border-[#EDE8E1]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#1b7340] mb-3">
              WHY US
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-[42px] font-bold text-logo-navy leading-tight mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Why Choose SJRPS-Rajajinagar?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Discover what makes SJRPS-Rajajinagar the preferred choice for thousands of families seeking quality education with strong moral foundations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl p-8 sm:p-9 text-center shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 border border-[#EDE8E1] flex flex-col items-center justify-start group"
              >
                <div className="w-16 h-16 rounded-full bg-indian-green text-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300">
                  <item.icon className="h-7 w-7 text-white stroke-[2.2]" />
                </div>
                <h3
                  className="text-xl font-bold text-school-brown mb-3 leading-snug"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-[14.5px] leading-relaxed max-w-xs">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Philosophy */}
      <section className="py-16 lg:py-20 bg-indian-green/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indian-green mb-3">
              Our Approach
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-logo-navy mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Our Educational Philosophy
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Eight guiding principles that shape every classroom, every conversation, and every child's
              journey at SJRPS-Rajajinagar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {philosophy.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-indian-green/10"
              >
                <div className="w-12 h-12 rounded-xl bg-indian-green flex items-center justify-center mb-4 shadow">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3
                  className="text-lg font-bold text-logo-navy mb-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-indian-green text-white rounded-2xl px-8 py-10 lg:px-14 lg:py-12 shadow-xl overflow-hidden">
              <Quote className="absolute -top-2 -left-2 h-24 w-24 text-white/10" />
              <p className="relative text-lg lg:text-xl leading-relaxed text-center italic font-medium">
                "We believe education is not merely the acquisition of knowledge, but the development of
                character, confidence, creativity, and compassion that prepares students for life."
              </p>
              <div className="relative mt-6 flex items-center justify-center gap-2 text-golden-yellow text-sm font-semibold tracking-wider uppercase">
                <Award className="h-4 w-4" />
                <span>SJRPS-Rajajinagar Philosophy</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Overview;
