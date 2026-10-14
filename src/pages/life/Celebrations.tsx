import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Star, Baby, GraduationCap, Award, Crown, Music, Trophy, Calendar, Sparkles, Users, Heart } from "lucide-react";
const celebrationGallery = [
  { src: "/images/Events/Onam/WhatsApp Image 2026-10-01 at 14.35.20.jpeg", title: "Onam Floral Pookalam Celebration" },
  { src: "/images/Events/Krishna Janmastmi/WhatsApp Image 2026-10-01 at 14.20.28.jpeg", title: "Krishna Janmashtami Festivities" },
  { src: "/images/Events/Ganesha Pooja/WhatsApp Image 2026-10-01 at 13.36.42.jpeg", title: "Ganesha Chaturthi Pooja & Rituals" },
  { src: "/images/Events/Rangoli/WhatsApp Image 2026-10-01 at 13.37.14.jpeg", title: "Traditional Rangoli Competition" },
  { src: "/images/Events/Annual Sports Meet/FB_IMG_1791268754974.jpg", title: "Annual Sports Meet Parade" },
  { src: "/images/Events/Onam/WhatsApp Image 2026-10-01 at 14.35.15.jpeg", title: "Festive Cultural Showcase" },
];

const events = [
  { icon: Star, title: "Annual Day", desc: "The grand showcase of the school year with cultural performances, awards, and student achievements." },
  { icon: Baby, title: "Children's Day", desc: "A day dedicated to our students with fun games, special treats, and teacher-led entertainment." },
  { icon: GraduationCap, title: "Teachers' Day", desc: "Students honour their mentors with performances, gifts, and heartfelt gratitude." },
  { icon: Award, title: "Graduation Ceremony", desc: "A formal send-off for our outgoing batch celebrating their journey and accomplishments." },
  { icon: Crown, title: "Investiture Ceremony", desc: "Student leaders take oath and receive the badges of office in a dignified, traditional ceremony." },
  { icon: Music, title: "Cultural Programs", desc: "Music, dance, drama, and folk performances that celebrate India's rich cultural heritage." },
  { icon: Trophy, title: "Achievement Celebrations", desc: "Recognising academic, sports, and co-curricular toppers and house champions." },
  { icon: Calendar, title: "School Events", desc: "Sports Day, Science Exhibition, Literary Fest, and seasonal celebrations throughout the year." },
];

const why = [
  { icon: Sparkles, title: "Why Celebrations Matter", desc: "Celebrations create memories, mark milestones, and turn the school into a vibrant community rather than just a place of study." },
  { icon: Heart, title: "Building School Spirit", desc: "Houses, classes, and clubs come together for shared events, strengthening identity and lifelong friendships." },
  { icon: Users, title: "Student Engagement", desc: "From planning and decorating to compering and performing, students take ownership of every celebration." },
];

const Celebrations = () => (
  <Layout>
    <PageHero title="Celebrations at SJRPS-Rajajinagar" breadcrumbs={[{ label: "Life @ SJRPS-Rajajinagar" }, { label: "Celebrations" }]} />

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Where Every Milestone is a Memory</h2>
        <div className="mx-auto h-1 w-20 bg-indian-green rounded-full mb-6" />
        <p className="text-base text-foreground/80 leading-relaxed">
          School life at SJRPS-Rajajinagar is filled with colour, music, and shared joy. Our celebrations are carefully
          planned events that honour students, teachers, traditions, and accomplishments — building a sense of
          belonging that students remember long after they graduate.
        </p>
      </div>
    </section>

    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Key Celebrations</h2>
          <div className="mx-auto mt-3 h-1 w-20 bg-indian-green rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((e, i) => (
            <motion.div key={e.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <Card className="h-full hover:shadow-xl transition-shadow border-t-4 border-indian-green">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-indian-green flex items-center justify-center mb-4">
                    <e.icon className="h-7 w-7" color="#ffffff" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{e.title}</h3>
                  <p className="text-sm text-foreground/75 leading-relaxed">{e.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {why.map((w) => (
            <Card key={w.title} className="hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-indian-green flex items-center justify-center mb-4 mx-auto">
                  <w.icon className="h-7 w-7" color="#ffffff" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{w.title}</h3>
                <p className="text-sm text-foreground/75 leading-relaxed">{w.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Celebrations Gallery</h2>
          <div className="mx-auto mt-3 h-1 w-20 bg-indian-green rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {celebrationGallery.map((item, i) => (
            <div key={i} className="group overflow-hidden rounded-xl shadow-md border border-indian-green/15 bg-white">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-[260px] object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="p-3 text-center bg-white border-t border-border/50">
                <span className="text-sm font-semibold text-foreground/85">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Celebrations;
