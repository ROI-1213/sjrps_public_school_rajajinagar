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
  Building2,
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
  Award,
  Quote,
} from "lucide-react";
import overviewImage from "@/assets/Overview.jpg";
import bhoomiPoojaImage from "@/assets/about-history/Bhoomi-Pooja.jpg";
import openingCeremonyImage from "@/assets/about-history/Opening-ceremony.jpg";
import thenCampusImage from "@/assets/about-history/then.jpg";

const milestones = [
  { year: "2004", title: "Founded", desc: "SJR Public School, HBR Layout established." },
  { year: "2017", title: "Smart Classes", desc: "Introduced smart classrooms across the campus." },
  { year: "2022", title: "AI-Enabled LMS", desc: "Adopted Embibe AI-enabled Learning Management System." },
  { year: "2023", title: "New Programs", desc: "Introduced Robotics, Abacus, Vedic Maths & Taekwondo." },
  { year: "2024", title: "Senior Secondary", desc: "Upgraded to Senior Secondary (Grades XI & XII)." },
  { year: "2024", title: "AI Flat Panel Boards", desc: "Introduced AI-enabled flat panel boards for smart classrooms." },
];

const whyChoose = [
  { icon: BookOpen, title: "Smart Classrooms", desc: "Interactive digital learning environments with modern technology and multimedia resources." },
  { icon: Users, title: "Dedicated Faculty", desc: "Experienced educators committed to student success, personal growth, and academic excellence." },
  { icon: Heart, title: "Value Education", desc: "Character building through comprehensive moral and ethical education programs." },
  { icon: ShieldCheck, title: "Safe Campus", desc: "24/7 security, CCTV monitoring, and trained staff ensuring complete student safety." },
  { icon: Target, title: "Holistic Development", desc: "Balanced focus on academics, sports, arts, and personality development." },
  { icon: Trophy, title: "Proven Track Record", desc: "Consistent academic excellence with 95% success rate and numerous awards." },
  { icon: GraduationCap, title: "Academic Excellence", desc: "Rigorous CBSE curriculum delivered with clarity, depth, and personalized attention." },
  { icon: UserCheck, title: "Student-Centric Learning", desc: "Personalized pathways that recognize each learner's strengths, pace, and aspirations." },
  { icon: Medal, title: "Sports & Co-Curricular", desc: "A vibrant calendar of sports, clubs, arts, and competitions that build all-round confidence." },
  { icon: Rocket, title: "Future-Ready Learning", desc: "Robotics, coding, AI, and 21st-century skills woven into everyday classrooms." },
  { icon: Handshake, title: "Parent Engagement", desc: "Open communication, regular updates, and a true partnership between home and school." },
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

const historyImages = [
  { src: bhoomiPoojaImage, alt: "Bhoomi Puja ceremony at SJRPS-HBR campus" },
  { src: openingCeremonyImage, alt: "Opening ceremony of SJR Public School building" },
  { src: thenCampusImage, alt: "SJRPS-HBR campus during its early years" },
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
                  src={overviewImage}
                  alt="SJRPS-HBR campus"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute -bottom-1 -right-1 bg-saffron-orange text-white px-5 py-3 rounded-tl-2xl shadow-xl">
                  <div className="text-3xl font-extrabold leading-none">22+</div>
                  <div className="text-xs uppercase tracking-wider">Years of Legacy</div>
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
                About Our School
              </p>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-logo-navy leading-tight mb-6"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Where Tradition Meets Tomorrow
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-5">
                SJR Public School, HBR Layout (SJRPS-HBR) is more than a school — it is a
                community of educators, parents, and students united by a shared belief that great
                education shapes great human beings.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-5">
                Founded on the timeless ideals of the SJR Education Society, our
                school blends a rich heritage of value-based learning with a modern, future-ready
                curriculum. From the early years through senior school, every learner is nurtured with
                care, challenged with rigor, and inspired to discover their unique purpose.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                We are proud of our consistent academic results, our dedicated faculty, our vibrant
                co-curricular programs, and a safe, modern campus that supports holistic growth — academic,
                physical, emotional, and ethical.
              </p>

              <div className="grid grid-cols-3 gap-3 mb-8">
                {[
                  { value: "1200+", label: "Students" },
                  { value: "80+", label: "Faculty" },
                  { value: "100%", label: "Results" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl bg-indian-green/5 border border-indian-green/10 px-4 py-3 text-center"
                  >
                    <div className="text-2xl font-bold text-indian-green">{s.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-saffron-orange/10 to-transparent border-l-4 border-saffron-orange rounded-r-xl p-5">
                <p className="text-logo-navy font-semibold italic leading-relaxed">
                  "Empowering Young Minds, Inspiring Future Leaders, and Building a Legacy of Excellence
                  Through Quality Education."
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
              School History
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-logo-navy leading-tight mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              The Beginning of Our HBR Campus
            </h2>
            <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                The construction of the present campus began with a Bhoomi Puja ceremony,
                performed in the divine presence and blessings of Jagadguru Mahaswamiji, along
                with trustees and members of the education society. The sacred ritual marked the
                spiritual foundation of the institution and the beginning of a new educational
                endeavour.
              </p>
              <p>
                HBR Campus was formally inaugurated on 6 November 2004, marking the start of its
                academic journey. Since its inception, the institution has been committed to
                providing quality education through the CBSE curriculum, with a strong focus on
                experiential and activity-based learning.
              </p>
              <p>
                With dedicated teachers and a supportive learning environment, the school has
                consistently achieved 100% results in board examinations, reflecting its
                commitment to academic excellence and holistic student development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mt-10">
              {historyImages.map((image) => (
                <div
                  key={image.alt}
                  className="group overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

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
              {milestones.map((m, i) => (
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
                    <div className="text-saffron-orange font-bold text-sm">{m.year}</div>
                    <h3 className="text-xl font-bold text-logo-navy mt-1">{m.title}</h3>
                    <p className="text-muted-foreground mt-1">{m.desc}</p>
                  </div>
                  <div className="hidden md:block" />
                  <span className="absolute left-4 md:left-1/2 top-1.5 w-3 h-3 rounded-full bg-indian-green ring-4 ring-indian-green/20 md:-translate-x-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SJRPS-HBR */}
      <section className="py-16 lg:py-20 bg-[hsl(38_70%_96%)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indian-green mb-3">
              Why Us
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-logo-navy mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Why Choose SJRPS-HBR?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Discover what makes SJRPS-HBR the preferred choice for thousands of families seeking quality
              education with strong moral foundations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              >
                <Card className="rounded-2xl border-none shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 bg-[hsl(40_80%_97%)] h-full">
                  <CardContent className="p-7 text-center">
                    <div className="mx-auto w-16 h-16 rounded-full bg-indian-green flex items-center justify-center mb-5 shadow-md">
                      <item.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[hsl(25_55%_25%)] mb-3">{item.title}</h3>
                    <p className="text-[hsl(25_30%_35%)] text-sm leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Educational Philosophy */}
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
              journey at SJRPS-HBR.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {philosophy.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-indian-green/10"
              >
                <div className="w-12 h-12 rounded-xl bg-indian-green flex items-center justify-center mb-4 shadow">
                  <p.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-logo-navy mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
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
                <span>SJRPS-HBR Philosophy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission CTA strip */}
      <section className="py-14 bg-indian-green text-white">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
          {[
            { icon: Sparkles, title: "Holistic Learning", desc: "Academics, arts, sports and life-skills woven together." },
            { icon: Building2, title: "Modern Campus", desc: "Smart classrooms, labs, library and safe transport." },
            { icon: Users, title: "Caring Faculty", desc: "Experienced mentors who know every child by name." },
          ].map((c) => (
            <div
              key={c.title}
              className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/15"
            >
              <c.icon className="h-8 w-8 text-golden-yellow mb-3" />
              <h3 className="text-xl font-bold mb-2">{c.title}</h3>
              <p className="text-white/85 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Overview;
