import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Sparkles, ArrowRight, type LucideIcon } from "lucide-react";

export interface FacilityFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FacilityPageProps {
  title: string;
  breadcrumbLabel: string;
  introHeading: string;
  introParagraphs: string[];
  introImage: string;
  introImageAlt: string;
  features: FacilityFeature[];
  featuresHeading?: string;
  benefits: FacilityFeature[];
  benefitsHeading?: string;
  gallery: { src: string; alt: string }[];
  whyItMattersHeading?: string;
  whyItMattersBody: string;
  whyItMattersPoints?: string[];
  closingMessage: string;
  ctaText?: string;
  ctaHref?: string;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const FacilityPage = ({
  title,
  breadcrumbLabel,
  introHeading,
  introParagraphs,
  introImage,
  introImageAlt,
  features,
  featuresHeading = "Key Features",
  benefits,
  benefitsHeading = "Benefits for Students",
  gallery,
  whyItMattersHeading = "Why It Matters",
  whyItMattersBody,
  whyItMattersPoints,
  closingMessage,
  ctaText = "Explore Admissions",
  ctaHref = "/admissions/admissions-process",
}: FacilityPageProps) => {
  return (
    <Layout>
      <PageHero
        title={title}
        breadcrumbs={[
          { label: "Facilities" },
          { label: breadcrumbLabel },
        ]}
      />

      {/* Introduction */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-indian-green/20 to-indian-green/10 rounded-3xl blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={introImage}
                  alt={introImageAlt}
                  className="w-full h-80 lg:h-[480px] object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-indian-green mb-3">
                Our Facility
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-school-brown mb-4 leading-tight">
                {introHeading}
              </h2>
              <div className="h-1 w-16 bg-indian-green rounded-full mb-6" />
              <div className="space-y-4 text-elegant-light text-base lg:text-lg leading-relaxed">
                {introParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-indian-green mb-3">
              What We Offer
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-school-brown mb-4">
              {featuresHeading}
            </h2>
            <div className="h-1 w-16 bg-indian-green rounded-full mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ delay: i * 0.05 }}
              >
                <Card className="group h-full border border-border/60 hover:border-indian-green/60 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform bg-indian-green">
                      <f.icon size={28} strokeWidth={2.25} color="#ffffff" />
                    </div>
                    <h3 className="text-lg font-bold text-school-brown mb-2">{f.title}</h3>
                    <p className="text-elegant-light text-sm leading-relaxed">{f.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-indian-green mb-3">
              Student Outcomes
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-school-brown mb-4">
              {benefitsHeading}
            </h2>
            <div className="h-1 w-16 bg-indian-green rounded-full mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ delay: i * 0.05 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-b from-indian-green/5 to-transparent hover:from-indian-green/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 bg-indian-green/10">
                  <b.icon size={24} strokeWidth={2.25} className="text-indian-green" />
                </div>
                <h3 className="text-base font-bold text-school-brown mb-1">{b.title}</h3>
                <p className="text-elegant-light text-sm leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      {gallery.length > 0 && (
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-indian-green mb-3">
                Gallery
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-school-brown mb-4">
                A Glimpse Inside
              </h2>
              <div className="h-1 w-16 bg-indian-green rounded-full mx-auto" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {gallery.slice(0, 3).map((g, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="overflow-hidden rounded-xl shadow-lg bg-card"
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className="w-full h-[280px] object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why It Matters */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="border-0 shadow-xl overflow-hidden bg-indian-green">
              <CardContent className="p-8 lg:p-12 !text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles size={24} color="#ffffff" />
                  <span className="text-xs font-semibold tracking-[0.25em] uppercase text-white">
                    Holistic Impact
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-5 text-white">{whyItMattersHeading}</h2>
                <p className="text-white text-base lg:text-lg leading-relaxed mb-6">
                  {whyItMattersBody}
                </p>
                {whyItMattersPoints && whyItMattersPoints.length > 0 && (
                  <ul className="grid sm:grid-cols-2 gap-3 mt-6">
                    {whyItMattersPoints.map((pt, i) => (
                      <li key={i} className="flex items-start gap-3 text-white">
                        <span className="mt-1 inline-block w-2 h-2 rounded-full bg-white shrink-0" />
                        <span className="text-sm lg:text-base">{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-indian-green/10 via-background to-indian-green/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl lg:text-2xl font-semibold text-school-brown leading-relaxed italic mb-8">
              "{closingMessage}"
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-indian-green hover:bg-indian-green/90 text-white">
                <Link to={ctaHref}>
                  {ctaText} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Visit Our Campus</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FacilityPage;
