import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Flag, Landmark, Sparkles, BookOpen, Users, Baby, GraduationCap, Heart, ShieldCheck, Globe2 } from "lucide-react";

const festivals = [
  { icon: Flag, name: "Independence Day", date: "15th August", desc: "Flag hoisting, patriotic songs, march-past, and student speeches honour the freedom fighters who shaped modern India.", significance: "Reminds students of the value of liberty and the responsibility of citizenship." },
  { icon: Landmark, name: "Republic Day", date: "26th January", desc: "Cultural programmes, parade, and reading of the Preamble celebrate the Indian Constitution.", significance: "Instils respect for democracy, rights, and constitutional values." },
  { icon: Sparkles, name: "Gandhi Jayanti", date: "2nd October", desc: "Prayer meetings, bhajans, and pledges of non-violence commemorate the Father of the Nation.", significance: "Encourages truth, ahimsa, and selfless service in daily life." },
  { icon: BookOpen, name: "Constitution Day", date: "26th November", desc: "Workshops on fundamental rights and duties along with quizzes and discussions on the Indian Constitution.", significance: "Builds awareness of constitutional rights and civic responsibilities." },
  { icon: Users, name: "National Youth Day", date: "12th January", desc: "Marked on Swami Vivekananda's birth anniversary with lectures, yoga, and motivational sessions.", significance: "Inspires students with the ideals of self-belief, courage, and service." },
  { icon: Baby, name: "Children's Day", date: "14th November", desc: "Games, cultural shows, and special meals on Pandit Nehru's birthday — a day dedicated entirely to children.", significance: "Celebrates childhood and reaffirms our commitment to nurturing young minds." },
  { icon: GraduationCap, name: "Teachers' Day", date: "5th September", desc: "Student-led tributes, performances, and gratitude messages honour Dr. S. Radhakrishnan and all educators.", significance: "Strengthens the bond between teachers and students and recognises the role of educators in nation-building." },
];

const sections = [
  { icon: Heart, title: "Importance of National Festivals", desc: "National festivals at SJRPS-Rajajinagar are immersive learning experiences that connect history, civic values, and contemporary identity. They give students a sense of belonging to a larger national story." },
  { icon: ShieldCheck, title: "Patriotism & Citizenship", desc: "Every observance is designed to instil pride in the tricolour, respect for the Constitution, and a clear understanding of the rights and duties of an Indian citizen." },
  { icon: Globe2, title: "Cultural Heritage", desc: "Through music, dance, drama, and storytelling, students explore India's freedom struggle, leaders, and the cultural fabric that unites a billion people." },
  { icon: Users, title: "Student Participation", desc: "From organising committees to compering, performing, and speaking, students lead every national event — turning each celebration into a personal act of citizenship." },
];

const NationalFestivals = () => (
  <Layout>
    <PageHero title="National Festivals" breadcrumbs={[{ label: "Life @ SJRPS-Rajajinagar" }, { label: "National Festivals" }]} />

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Celebrating the Spirit of India</h2>
        <div className="mx-auto h-1 w-20 bg-indian-green rounded-full mb-6" />
        <p className="text-base text-foreground/80 leading-relaxed">
          At SJRPS-Rajajinagar, national festivals are observed with reverence, joy, and meaningful student involvement. Each
          celebration becomes a classroom of patriotism, history, and civic pride — connecting our students to the
          values and visionaries that shaped modern India.
        </p>
      </div>
    </section>

    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">National Festivals We Celebrate</h2>
          <div className="mx-auto mt-3 h-1 w-20 bg-indian-green rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {festivals.map((f, i) => (
            <motion.div key={f.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <Card className="h-full hover:shadow-xl transition-shadow border-t-4 border-indian-green">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-indian-green flex items-center justify-center mb-4">
                    <f.icon className="h-7 w-7" color="#ffffff" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{f.name}</h3>
                  <p className="text-sm text-indian-green font-semibold mb-3">{f.date}</p>
                  <p className="text-sm text-foreground/75 leading-relaxed mb-3">{f.desc}</p>
                  <div className="pt-3 border-t border-border">
                    <p className="text-xs uppercase tracking-wide text-indian-green font-semibold mb-1">Educational Significance</p>
                    <p className="text-sm text-foreground/75">{f.significance}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((s) => (
            <Card key={s.title} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-indian-green flex items-center justify-center shrink-0">
                  <s.icon className="h-6 w-6" color="#ffffff" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-foreground/75 leading-relaxed">{s.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default NationalFestivals;
