import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Quote, MessageCircle } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { getPublicContent, type AdminContentItem } from "@/lib/api";
import { mergeTestimonialItems, type TestimonialDisplayItem } from "@/lib/testimonialContent";

const TestimonialCard = ({ t, i }: { t: TestimonialDisplayItem; i: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: i * 0.08 }}
    className="h-full"
  >
    <Card className="group h-full bg-white rounded-2xl border border-border/60 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      <div className="h-1.5 w-full bg-gradient-to-r from-indian-green via-saffron-orange to-indian-green" />
      <CardContent className="p-7 md:p-8 h-full flex flex-col">
        <div className="w-11 h-11 rounded-xl bg-indian-green/10 flex items-center justify-center mb-5 group-hover:bg-indian-green transition-colors">
          <Quote className="h-5 w-5 text-indian-green group-hover:text-white transition-colors" />
        </div>
        <div className="text-foreground/80 leading-relaxed italic text-[15px] flex-1">
          <p>"{t.quote}"</p>
        </div>
        <div className="mt-6 pt-5 border-t border-border/70 flex items-center gap-4">
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indian-green to-saffron-orange p-[2px]">
              <div className="w-full h-full rounded-full bg-white" />
            </div>
            <img
              src={t.image}
              alt={t.name}
              className="relative h-14 w-14 rounded-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <h4 className="font-bold text-school-brown leading-tight truncate">{t.name}</h4>
            <p className="text-sm text-indian-green font-medium mt-0.5">{t.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const Testimonials = () => {
  const [adminTestimonials, setAdminTestimonials] = useState<AdminContentItem[]>([]);
  useEffect(() => {
    getPublicContent("testimonial")
      .then((result) => setAdminTestimonials(result.items))
      .catch(() => setAdminTestimonials([]));
  }, []);
  const testimonials = useMemo(() => mergeTestimonialItems(adminTestimonials), [adminTestimonials]);

  return (
    <Layout>
      <PageHero
        title="What Our Parents Say"
        breadcrumbs={[{ label: "Life @ SJRPS-HBR" }, { label: "Testimonials" }]}
      />

    {/* Intro */}
    <section className="py-16 bg-gradient-to-b from-white to-muted/30">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <div className="w-16 h-16 rounded-2xl bg-indian-green flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indian-green/20">
          <MessageCircle className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-school-brown mb-4">
          Voices of <span className="text-indian-green">Trust</span> & <span className="text-saffron-orange">Appreciation</span>
        </h2>
        <div className="mx-auto h-1 w-20 bg-indian-green rounded-full mb-6" />
        <p className="text-base md:text-lg text-foreground/75 leading-relaxed">
          The trust and appreciation of our parents inspire us to continually provide quality education,
          holistic development, and a nurturing environment for every child. Their experiences reflect
          our commitment to academic excellence, values, and overall student growth.
        </p>
      </div>
    </section>

    {/* Testimonials Grid */}
    <section className="pb-20 bg-gradient-to-b from-muted/30 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} i={i} />
          ))}
        </div>
      </div>
    </section>
    </Layout>
  );
};

export default Testimonials;
