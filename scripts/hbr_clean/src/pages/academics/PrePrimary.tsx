import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Sparkles,
  BookOpen,
  Calculator,
  Leaf,
  Palette,
  Smile,
  Users,
  Heart,
  Target,
} from "lucide-react";
import ppp from "@/assets/ppp.jpg";

const focusItems = [
  { title: "Play-Based & Activity-Oriented Learning", icon: Sparkles, desc: "Joyful, hands-on experiences that make every concept memorable." },
  { title: "Motor, Communication & Social Skills", icon: Users, desc: "Building movement, expression and friendly interaction from the earliest years." },
  { title: "Emotional & Cognitive Growth", icon: Heart, desc: "Nurturing feelings, curiosity and confident thinking." },
];

const keyAreas = [
  { title: "Literacy Development", icon: BookOpen, desc: "Rhymes, storytelling and phonics readiness." },
  { title: "Numeracy Skills", icon: Calculator, desc: "Counting, patterns and early number sense through play." },
  { title: "Environmental Awareness", icon: Leaf, desc: "Exploring the world around them with wonder." },
  { title: "Art, Craft, Music & Movement", icon: Palette, desc: "Creative expression through colour, sound and rhythm." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const PrePrimary = () => (
  <Layout>
    <PageHero
      title="Pre-Primary"
      breadcrumbs={[
        { label: "Academics", path: "/academics" },
        { label: "Pre-Primary", path: "/academics/pre-primary" },
      ]}
    />

    <div className="bg-indian-green/5 border-b border-indian-green/10">
      <div className="container mx-auto px-4 py-4 text-center">
        <p className="text-indian-green font-semibold tracking-wide">
          Classes: Nursery, LKG & UKG
        </p>
      </div>
    </div>

    {/* Intro */}
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
              src={ppp}
              alt="Pre-Primary learning at SJRPS-HBR"
              width={1024}
              height={1024}
              loading="lazy"
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
              Pre-Primary
            </h2>
            <p className="text-base lg:text-lg leading-relaxed mb-4" style={{ color: "#333333" }}>
              The Pre-Primary years at SJRPS-HBR (Nursery, LKG & UKG) are where every child's
              learning journey begins — a warm, secure space designed around curiosity, play
              and early discovery.
            </p>
            <p className="text-base lg:text-lg leading-relaxed mb-4" style={{ color: "#333333" }}>
              Our activity-based programme nurtures foundational literacy and numeracy while
              encouraging motor development, communication, social habits and creative
              expression.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Focus */}
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
          {focusItems.map((item) => (
            <Card
              key={item.title}
              className="rounded-2xl border border-indian-green/20 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all h-full bg-white"
            >
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
          ))}
        </div>
      </div>
    </section>

    {/* Key Areas */}
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ fontFamily: "Poppins, sans-serif", color: "#000000" }}
          >
            Key Areas
          </h2>
          <div className="mx-auto h-[3px] w-16 bg-indian-green rounded-full" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {keyAreas.map((k) => (
            <div
              key={k.title}
              className="rounded-2xl p-6 text-center border border-indian-green/20 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="mx-auto w-14 h-14 rounded-full bg-indian-green/10 border border-indian-green/30 flex items-center justify-center mb-3">
                <k.icon className="h-6 w-6 text-indian-green" />
              </div>
              <h3 className="font-semibold mb-1" style={{ color: "#000000" }}>
                {k.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#333333" }}>
                {k.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Objective */}
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mx-auto w-14 h-14 rounded-full bg-indian-green flex items-center justify-center mb-4">
            <Target className="h-6 w-6 text-white" />
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Poppins, sans-serif", color: "#000000" }}
          >
            Objective
          </h2>
          <div className="mx-auto h-[3px] w-16 bg-indian-green rounded-full mb-6" />
          <p className="text-lg leading-relaxed" style={{ color: "#333333" }}>
            Build a strong foundation through joyful, engaging, and confident learning
            experiences that foster curiosity, creativity, and holistic development.
          </p>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-14 bg-indian-green text-white">
      <div className="container mx-auto px-4 text-center">
        <Smile className="h-10 w-10 mx-auto mb-4 text-golden-yellow" />
        <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
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

export default PrePrimary;
