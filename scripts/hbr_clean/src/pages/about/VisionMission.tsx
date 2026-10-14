import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Target, Heart, Star, Users, BookOpen, Globe, Shield } from "lucide-react";

const values = [
  { icon: Heart, title: "Integrity", desc: "Honesty and moral courage in every action." },
  { icon: Star, title: "Excellence", desc: "High standards in academics and character." },
  { icon: Users, title: "Compassion", desc: "Empathy and service to community." },
  { icon: BookOpen, title: "Curiosity", desc: "A lifelong love for learning and discovery." },
  { icon: Globe, title: "Global Mindset", desc: "Ready for an interconnected world." },
  { icon: Shield, title: "Discipline", desc: "Focus, responsibility, and respect." },
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
            <Card className="rounded-2xl border-none shadow-md hover:shadow-xl transition-all overflow-hidden h-full flex flex-col">
              <div className="h-1.5 bg-indian-green" />
              <CardContent className="p-8 md:p-10 flex-1 flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-indian-green/10 flex items-center justify-center mb-5">
                  <Eye className="h-8 w-8 text-indian-green" />
                </div>
                <h2 className="text-3xl font-bold text-logo-navy mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Our Vision
                </h2>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  To be a role model for all schools in India and globally. To democratize quality
                  education and build a learning environment that nurtures socially responsible,
                  well-balanced global citizens.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-none shadow-md hover:shadow-xl transition-all overflow-hidden h-full flex flex-col">
              <div className="h-1.5 bg-saffron-orange" />
              <CardContent className="p-8 md:p-10 flex-1 flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-saffron-orange/10 flex items-center justify-center mb-5">
                  <Target className="h-8 w-8 text-saffron-orange" />
                </div>
                <h2 className="text-3xl font-bold text-logo-navy mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Our Mission
                </h2>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  To provide quality education at all levels and empower students to communicate
                  confidently in every sphere of life. Encourage students' spirit of enquiry,
                  scientific temper, creativity, and health awareness. Train students to be
                  eco-friendly and self-reliant with a commitment to community development. Above
                  all, foster self-discipline, integrity, and responsibility.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indian-green mb-3">What we stand for</p>
            <h2 className="text-3xl md:text-4xl font-bold text-logo-navy" style={{ fontFamily: "Poppins, sans-serif" }}>
              Our Core Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {values.map((v) => (
              <Card key={v.title} className="rounded-2xl border-none shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
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
