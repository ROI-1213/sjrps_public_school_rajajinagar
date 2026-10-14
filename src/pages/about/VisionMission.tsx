import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Target, Heart, Star, Users, BookOpen, Globe, Shield } from "lucide-react";
import { aboutContent } from "@/content/about";

const values = [
  { icon: Heart, title: "Integrity", desc: "Honesty, moral courage, and ethical character in every action." },
  { icon: Star, title: "Excellence", desc: "Highest academic standards and personal commitment across every discipline." },
  { icon: Users, title: "Compassion", desc: "Empathy, mutual respect, and dedicated service to the community." },
  { icon: BookOpen, title: "Curiosity", desc: "A lifelong love for learning, critical inquiry, and discovery." },
  { icon: Globe, title: "Global Mindset", desc: "Future-ready perspectives anchored in rich Indian values." },
  { icon: Shield, title: "Discipline", desc: "Self-governance, focus, responsibility, and civic integrity." },
];

const VisionMission = () => {
  return (
    <Layout>
      <PageHero
        title="Vision & Mission"
        breadcrumbs={[{ label: "About", path: "/about/overview" }, { label: "Vision & Mission" }]}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
            {/* Vision */}
            <Card className="rounded-2xl border-none shadow-md hover:shadow-xl transition-all overflow-hidden h-full flex flex-col bg-white">
              <div className="h-1.5 bg-indian-green" />
              <CardContent className="p-8 md:p-10 flex-1 flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-indian-green/10 flex items-center justify-center mb-5">
                  <Eye className="h-8 w-8 text-indian-green" />
                </div>
                <h2 className="text-3xl font-bold text-logo-navy mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Our Vision
                </h2>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  "{aboutContent.visionMission.vision}"
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="rounded-2xl border-none shadow-md hover:shadow-xl transition-all overflow-hidden h-full flex flex-col bg-white">
              <div className="h-1.5 bg-saffron-orange" />
              <CardContent className="p-8 md:p-10 flex-1 flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-saffron-orange/10 flex items-center justify-center mb-5">
                  <Target className="h-8 w-8 text-saffron-orange" />
                </div>
                <h2 className="text-3xl font-bold text-logo-navy mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Our Mission
                </h2>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  "{aboutContent.visionMission.mission}"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/40 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indian-green mb-3">What We Stand For</p>
            <h2 className="text-3xl md:text-4xl font-bold text-logo-navy" style={{ fontFamily: "Poppins, sans-serif" }}>
              Our Core Values
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">
              The ethical compass that guides every student, teacher, and community member at SJRPS-Rajajinagar.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {values.map((v) => (
              <Card key={v.title} className="rounded-2xl border-none shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 bg-white">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-indian-green/10 flex items-center justify-center mb-4">
                    <v.icon className="h-6 w-6 text-indian-green" />
                  </div>
                  <h3 className="text-lg font-bold text-logo-navy mb-1.5">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VisionMission;
