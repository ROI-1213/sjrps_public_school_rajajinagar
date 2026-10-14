import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  BookOpen, Palette, Music, Users, Crown, Heart, Trophy, Sparkles,
  ShieldCheck, Lightbulb, MessageCircle, Handshake,
} from "lucide-react";
const activitiesImg = "/images/Photos/Kids Play Area And Activity/DSC00642.JPG";
const galleryImages = [
  { src: "/images/Photos/Music/DSC00997.JPG", label: "Music & Performing Arts" },
  { src: "/images/Photos/Art and Craft/DSC00861.JPG", label: "Art & Craft Workshop" },
  { src: "/images/Photos/Sports/DSC01303.JPG", label: "Chess & Mind Sports" },
  { src: "/images/Photos/Kids Play Area And Activity/DSC00651.JPG", label: "Play Area & Active Learning" },
  { src: "/images/Photos/Robotics/DSC01674.JPG", label: "Robotics & STEM Activities" },
  { src: "/images/Photos/Sports/DSC01389.JPG", label: "Athletics & Physical Fitness" },
];

const activities = [
  { icon: BookOpen, title: "Literary Activities", desc: "Debates, elocution, essay writing, and storytelling that sharpen language, reasoning, and expression." },
  { icon: Sparkles, title: "Cultural Activities", desc: "Festivals, theatrical performances, and heritage programs that celebrate India's rich diversity." },
  { icon: Palette, title: "Art & Craft", desc: "Painting, sculpture, origami, and handcrafts that nurture imagination and fine motor skills." },
  { icon: Music, title: "Music & Dance", desc: "Classical, folk, and contemporary forms taught by trained mentors throughout the year." },
  { icon: Users, title: "Club Activities", desc: "Eco Club, Science Club, Literary Club, and Reader's Circle — student-led initiatives for every interest." },
  { icon: Crown, title: "Leadership Programs", desc: "Student council, house captaincy, and prefect roles that build accountability and decision-making." },
  { icon: Heart, title: "Community Service", desc: "Outreach drives, cleanliness campaigns, and visits to old-age homes nurture social empathy." },
  { icon: Trophy, title: "Sports & Recreation", desc: "Athletics, team sports, yoga, and recreational games that build strength, stamina, and sportsmanship." },
];

const benefits = [
  { icon: ShieldCheck, title: "Confidence Building", desc: "Stage exposure and team participation foster self-assurance." },
  { icon: Handshake, title: "Teamwork", desc: "Group projects and ensembles teach cooperation and respect." },
  { icon: Crown, title: "Leadership", desc: "Real responsibility cultivates initiative and integrity." },
  { icon: MessageCircle, title: "Communication Skills", desc: "Public speaking and dialogue refine clarity and articulation." },
  { icon: Lightbulb, title: "Creativity", desc: "Open-ended expression unlocks original thinking and design." },
  { icon: Heart, title: "Social Responsibility", desc: "Service learning instils empathy and civic values." },
];

const Activities = () => (
  <Layout>
    <PageHero title="Student Activities" breadcrumbs={[{ label: "Life @ SJRPS-Rajajinagar" }, { label: "Activities" }]} />

    {/* Section 1: Introduction */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-stretch">
        <motion.img
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          src={activitiesImg} alt="Students engaged in activities"
          className="rounded-2xl shadow-2xl w-full h-full min-h-[420px] object-cover"
        />
        <motion.div
          initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="h-full flex flex-col justify-start"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Beyond the Classroom</h2>
          <div className="h-1 w-16 bg-indian-green rounded-full mb-6" />
          <p className="text-base text-foreground/80 leading-relaxed mb-4">
            At SJRPS-Rajajinagar, education extends far beyond textbooks. Our co-curricular and extracurricular programme
            is a structured journey that allows every child to discover their interests, talents, and voice — and
            grow into a confident, well-rounded individual.
          </p>
          <p className="text-base text-foreground/80 leading-relaxed mb-4">
            Students engage in a rich spectrum of activities including <strong>Music</strong>, <strong>Dance</strong>,
            <strong> Art &amp; Craft</strong>, <strong>Sports &amp; Games</strong>, <strong>Robotics</strong>,
            <strong> Yoga</strong>, <strong>Public Speaking &amp; Debate</strong>, <strong>Science Exhibitions</strong>,
            <strong> Cultural Programmes</strong>, <strong>Leadership Activities</strong>, <strong>Clubs and
            Competitions</strong>, and <strong>Community Service</strong> — each mentored by trained faculty and
            tied to a clear developmental outcome.
          </p>
          <p className="text-base text-foreground/80 leading-relaxed mb-4">
            Music, dance, and the visual arts awaken creativity and self-expression, while sports, yoga, and games
            build strength, discipline, and sportsmanship. Robotics and science exhibitions foster curiosity and
            problem-solving, and debate and public speaking sharpen communication and critical thinking.
          </p>
          <p className="text-base text-foreground/80 leading-relaxed">
            Through leadership roles, student-led clubs, cultural celebrations, and community service, learners
            develop confidence, empathy, teamwork, and social responsibility — nurturing the holistic personality
            that defines a true SJRPS-Rajajinagar student.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Section 2: Activities */}
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Student Activities at SJRPS-Rajajinagar</h2>
          <div className="mx-auto mt-3 h-1 w-20 bg-indian-green rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((a, i) => (
            <motion.div key={a.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <Card className="h-full hover:shadow-xl transition-shadow border-t-4 border-indian-green">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-indian-green flex items-center justify-center mb-4">
                    <a.icon className="h-7 w-7" color="#ffffff" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{a.title}</h3>
                  <p className="text-sm text-foreground/75 leading-relaxed">{a.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Section 3: Benefits */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Benefits of Student Participation</h2>
          <div className="mx-auto mt-3 h-1 w-20 bg-indian-green rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <Card key={b.title} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-indian-green/10 flex items-center justify-center shrink-0">
                  <b.icon className="h-6 w-6 text-indian-green" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{b.title}</h3>
                  <p className="text-sm text-foreground/75">{b.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Section 4: Gallery */}
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Activities Gallery</h2>
          <div className="mx-auto mt-3 h-1 w-20 bg-indian-green rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, i) => (
            <div key={i} className="group overflow-hidden rounded-xl shadow-md border border-indian-green/15 bg-white">
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-[260px] object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="p-3 text-center bg-white border-t border-border/50">
                <span className="text-sm font-semibold text-foreground/85">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Section 5: Holistic Development */}
    <section className="py-16 bg-indian-green">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <Sparkles className="h-10 w-10 mx-auto mb-4" color="#ffffff" />
        <h2 className="text-3xl lg:text-4xl font-bold !text-white mb-4">Holistic Student Development</h2>
        <p className="!text-white/95 text-lg leading-relaxed mb-4">
          Co-curricular engagement at SJRPS-Rajajinagar is not an add-on — it is the second curriculum. It strengthens the
          academic learner, refines the social being, and awakens the artist, athlete, and leader within every
          student.
        </p>
        <p className="!text-white/90 leading-relaxed">
          Through carefully sequenced experiences across literature, arts, sports, service, and leadership, our
          students graduate as confident, compassionate, and capable young adults — ready for higher education
          and life beyond school.
        </p>
      </div>
    </section>
  </Layout>
);

export default Activities;
