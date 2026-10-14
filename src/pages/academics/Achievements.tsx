import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import {
  Trophy,
  Award,
  Star,
  GraduationCap,
  BookOpenCheck,
  Music,
  Palette,
  Activity,
  Crown,
  Brain,
} from "lucide-react";

const sections = [
  { icon: GraduationCap, title: "Academic Excellence", desc: "Sustained academic distinction across all grades and disciplines." },
  { icon: BookOpenCheck, title: "Board Examination Results", desc: "Consistent top-tier scores in CBSE board examinations year after year." },
  { icon: Brain, title: "Olympiad Achievements", desc: "Strong presence and rankings in national and international Olympiads." },
  { icon: Activity, title: "Sports Achievements", desc: "Champions across district, state, and national level sports competitions." },
  { icon: Music, title: "Cultural Achievements", desc: "Recognised performances in music, dance, drama, and creative arts." },
];

const achievements = [
  { icon: Trophy, title: "100% Board Pass Rate", desc: "Achieved a perfect pass rate in the latest CBSE board examinations." },
  { icon: Crown, title: "Academic Excellence Award", desc: "Recognised for consistent school-wide performance and strong learning outcomes." },
  { icon: Star, title: "MANAK Awards", desc: "Students have achieved MANAK Awards sponsored by the Central Government of India." },
  { icon: Activity, title: "Inter-School Athletics Cup", desc: "Lifted the championship trophy at the district athletics meet." },
  { icon: Music, title: "Inter-School Music Fest", desc: "First place in the inter-school classical music competition." },
  { icon: Palette, title: "Art & Design Award", desc: "Multiple students recognised in the national young artists' showcase." },
];

const Achievements = () => {
  return (
    <Layout>
      <PageHero
        title="Academic Achievements"
        breadcrumbs={[
          { label: "Academics", path: "/academics" },
          { label: "Achievements" },
        ]}
      />

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Celebrating Excellence</h2>
          <div className="mx-auto h-1 w-20 bg-indian-green rounded-full mb-6" />
          <p className="text-lg text-foreground/80 leading-relaxed">
            Our students consistently excel in academics, sports, and the arts. These achievements reflect a
            culture of hard work, curiosity, and holistic development nurtured at every stage of school life.
          </p>
        </div>
      </section>

      {/* Section overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-3">Areas of Distinction</h2>
          <div className="mx-auto h-1 w-20 bg-indian-green rounded-full mb-12" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((it, i) => (
              <Card key={i} className="border-l-4 border-l-indian-green hover:shadow-lg transition-all">
                <CardContent className="p-6 flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indian-green/10 flex items-center justify-center flex-shrink-0">
                    <it.icon className="h-6 w-6 text-indian-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">{it.title}</h3>
                    <p className="text-sm text-foreground/75 leading-relaxed">{it.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-3">Notable Achievements</h2>
          <div className="mx-auto h-1 w-20 bg-indian-green rounded-full mb-12" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((a, i) => (
              <Card key={i} className="border-indian-green/20 hover:shadow-lg hover:-translate-y-1 transition-all group">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-indian-green flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <a.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-black mb-2">{a.title}</h3>
                  <p className="text-sm text-foreground/75 leading-relaxed">{a.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-indian-green/20 bg-indian-green/5">
            <CardContent className="p-10 text-center">
              <Award className="h-14 w-14 text-indian-green mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">A Legacy of Achievement</h2>
              <p className="text-foreground/75 leading-relaxed">
                Every accolade is a milestone in a larger journey — one shaped by dedicated teachers, supportive
                parents, and students determined to reach their fullest potential.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Achievements;
