import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import {
  ShieldCheck,
  Users,
  Smartphone,
  Building2,
  Heart,
  Sparkles,
  Check,
  X,
} from "lucide-react";

const sections = [
  { icon: Heart, title: "Expected Behaviour", desc: "Students are expected to act with honesty, kindness, and integrity in every interaction within and beyond the campus." },
  { icon: ShieldCheck, title: "Discipline Standards", desc: "Punctuality, neat uniform, and adherence to school rules form the foundation of our discipline framework." },
  { icon: Users, title: "Respect & Responsibility", desc: "Respect for teachers, peers, support staff, and visitors is non-negotiable. Bullying or harassment is not tolerated." },
  { icon: Smartphone, title: "Digital Conduct", desc: "Use of personal devices is restricted. Online behaviour must reflect the same values as in-person conduct." },
  { icon: Building2, title: "School Property Care", desc: "Students must care for school property, classrooms, labs, and shared spaces with a sense of ownership." },
];

const dos = [
  "Greet teachers, peers, and support staff politely.",
  "Arrive on time in clean, prescribed uniform.",
  "Keep classrooms, labs, and washrooms clean.",
  "Listen attentively and participate respectfully in class.",
  "Report bullying or unsafe behaviour to a teacher.",
];

const donts = [
  "Use mobile phones or smart devices without permission.",
  "Engage in bullying, teasing, or any form of harassment.",
  "Damage school property or peers' belongings.",
  "Bring prohibited items or junk food into the campus.",
  "Skip classes, assemblies, or assigned activities.",
];

const CodeOfConduct = () => {
  return (
    <Layout>
      <PageHero
        title="Student Code of Conduct"
        breadcrumbs={[
          { label: "Academics", path: "/academics" },
          { label: "Code of Conduct" },
        ]}
      />

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Values That Shape Every Student</h2>
          <div className="mx-auto h-1 w-20 bg-indian-green rounded-full mb-6" />
          <p className="text-lg text-foreground/80 leading-relaxed">
            The Code of Conduct guides every student to behave with respect, responsibility, and integrity. It
            creates a safe, focused, and nurturing environment where learning and character development thrive
            together.
          </p>
        </div>
      </section>

      {/* Section cards */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-3">Conduct Principles</h2>
          <div className="mx-auto h-1 w-20 bg-indian-green rounded-full mb-12" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Do's & Don'ts */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-3">Do's & Don'ts</h2>
          <div className="mx-auto h-1 w-20 bg-indian-green rounded-full mb-12" />
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-indian-green/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-indian-green flex items-center justify-center">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black">Do's</h3>
                </div>
                <ul className="space-y-3">
                  {dos.map((d, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-indian-green flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/85">{d}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-destructive/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-destructive flex items-center justify-center">
                    <X className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black">Don'ts</h3>
                </div>
                <ul className="space-y-3">
                  {donts.map((d, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/85">{d}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-indian-green/20 bg-indian-green/5">
            <CardContent className="p-10 text-center">
              <Sparkles className="h-14 w-14 text-indian-green mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">Our Core Values</h2>
              <p className="text-foreground/80 text-lg">Respect • Responsibility • Empathy • Integrity</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default CodeOfConduct;
