import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ShieldCheck, Target, Flame, Award, Users, Crown, Heart, Sparkles,
  Dumbbell, Brain, Handshake, Trophy, Zap, Compass,
} from "lucide-react";
const taekwondoImg = "/images/Photos/Taekwondo/IMG-20261030-WA0004.jpg";

const taekwondoGallery = [
  { src: "/images/Photos/Taekwondo/IMG-20261030-WA0004.jpg", alt: "Taekwondo students in training session" },
  { src: "/images/Photos/Taekwondo/IMG-20261030-WA0011.jpg", alt: "Taekwondo practice and demonstration" },
  { src: "/images/Photos/Taekwondo/IMG-20261030-WA0014.jpg", alt: "Taekwondo high-kick technique" },
  { src: "/images/Photos/Taekwondo/IMG-20261030-WA0017.jpg", alt: "Taekwondo defensive sparring stance" },
  { src: "/images/Photos/Taekwondo/IMG-20261030-WA0019.jpg", alt: "Taekwondo student focus and discipline" },
  { src: "/images/Photos/Taekwondo/IMG-20261030-WA0022.jpg", alt: "Martial arts stance and poise" },
  { src: "/images/Photos/Taekwondo/IMG-20261030-WA0025.jpg", alt: "Taekwondo kick precision training" },
  { src: "/images/Photos/Taekwondo/IMG-20261030-WA0026.jpg", alt: "Taekwondo student action move" },
  { src: "/images/Photos/Taekwondo/DSC00704.JPG", alt: "Taekwondo outdoor assembly group" },
];

const whyItems = [
  { icon: Award, title: "Certified Coaching", desc: "Trained and certified instructors guide students through authentic Taekwondo techniques and forms." },
  { icon: Users, title: "Age-Appropriate Training", desc: "Structured programmes tailored to different age groups ensure safe and effective learning." },
  { icon: Dumbbell, title: "Physical Fitness", desc: "Kicks, stances, and drills build strength, flexibility, stamina, and overall body coordination." },
  { icon: ShieldCheck, title: "Self-Defence Techniques", desc: "Practical self-defence skills that empower students to stay safe and confident in any situation." },
  { icon: Sparkles, title: "Confidence Building", desc: "Belt progression and consistent practice nurture inner strength and self-belief." },
  { icon: Crown, title: "Discipline & Respect", desc: "The dojang code teaches courtesy, integrity, perseverance, self-control, and indomitable spirit." },
  { icon: Zap, title: "Improved Coordination", desc: "Precise footwork and balance training refine motor skills, agility, and reflexes." },
  { icon: Heart, title: "Healthy Lifestyle", desc: "Regular training instils habits of fitness, mindfulness, and balanced living." },
];

const development = [
  { icon: Dumbbell, title: "Physical Development", desc: "Strength, stamina, flexibility, and cardiovascular fitness through structured practice." },
  { icon: Brain, title: "Mental Well-being", desc: "Focused breathing and meditation techniques reduce stress and sharpen concentration." },
  { icon: Flame, title: "Emotional Resilience", desc: "Overcoming challenges on the mat builds patience, grit, and self-regulation." },
  { icon: Handshake, title: "Team Spirit", desc: "Partner drills and group forms foster cooperation, trust, and mutual respect." },
  { icon: Target, title: "Goal Setting", desc: "The belt system teaches students to set, pursue, and achieve progressive goals." },
  { icon: Compass, title: "Character Building", desc: "The five tenets of Taekwondo shape ethical, responsible, and principled individuals." },
  { icon: Crown, title: "Leadership Skills", desc: "Senior belts mentor juniors, developing responsibility and leadership from an early age." },
];

const programme = [
  { icon: Users, title: "Regular Practice Sessions", desc: "Weekly training in stances, blocks, kicks, punches, and poomsae (forms)." },
  { icon: Award, title: "Belt Examinations", desc: "Periodic grading tests where students progress from white belt through to black belt." },
  { icon: Target, title: "Skill Development", desc: "Focused sessions on sparring, breaking techniques, and self-defence drills." },
  { icon: Dumbbell, title: "Fitness Drills", desc: "Warm-ups, stretching, strength training, and conditioning for peak performance." },
  { icon: Sparkles, title: "Demonstrations", desc: "Live performances during school assemblies and cultural events to showcase skills." },
  { icon: Trophy, title: "School Events", desc: "Participation in Annual Day, Sports Day, and inter-house Taekwondo showcases." },
  { icon: Flame, title: "Competitions", desc: "Opportunities to represent the school at district, state, and national-level tournaments." },
];

const Taekwondo = () => (
  <Layout>
    <PageHero title="Taekwondo" breadcrumbs={[{ label: "Life @ SJRPS-Rajajinagar" }, { label: "Taekwondo" }]} />

    {/* Section 1: Introduction */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-stretch">
        <motion.img
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          src={taekwondoImg} alt="Students practising Taekwondo"
          className="rounded-2xl shadow-2xl w-full h-full min-h-[420px] object-cover"
        />
        <motion.div
          initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="h-full flex flex-col justify-start"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Building Confidence, Discipline &amp; Strength Through Taekwondo
          </h2>
          <div className="h-1 w-16 bg-indian-green rounded-full mb-6" />
          <p className="text-base text-foreground/80 leading-relaxed mb-4">
            At SJRPS-Rajajinagar, Taekwondo is an integral part of our holistic education programme — a
            Korean martial art that blends physical training with the timeless values of courtesy,
            integrity, perseverance, self-control, and indomitable spirit.
          </p>
          <p className="text-base text-foreground/80 leading-relaxed mb-4">
            Through regular practice, students develop <strong>physical fitness</strong>,
            <strong> flexibility</strong>, <strong>balance</strong>, and <strong>coordination</strong>,
            while cultivating <strong>self-discipline</strong>, <strong>self-confidence</strong>,
            <strong> mental focus</strong>, and <strong>emotional resilience</strong> — all guided
            by certified instructors in a safe, encouraging environment.
          </p>
          <p className="text-base text-foreground/80 leading-relaxed mb-4">
            Students learn practical <strong>self-defence skills</strong> alongside the values of
            respect, sportsmanship, and teamwork. Partner drills, group forms, and mentoring roles
            for senior belts foster <strong>leadership</strong>, <strong>responsibility</strong>,
            and a strong sense of community — qualities that extend far beyond the dojang.
          </p>
          <p className="text-base text-foreground/80 leading-relaxed mb-4">
            Our programme offers meaningful opportunities to participate in <strong>belt grading
            examinations</strong>, school <strong>demonstrations</strong>, <strong>inter-school
            competitions</strong>, and district, state, and national-level <strong>martial arts
            events</strong> — helping students set goals, measure progress, and celebrate
            achievement.
          </p>
          <p className="text-base text-foreground/80 leading-relaxed">
            Every kick, stance, and form is more than technique; it is a lesson in patience,
            respect, and self-mastery — encouraging students to adopt a healthy, active lifestyle
            and shaping them into confident, disciplined, and well-rounded young individuals ready
            to face life's challenges with courage and grace.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Section 2: Why Taekwondo */}
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Why Taekwondo?</h2>
          <div className="mx-auto mt-3 h-1 w-20 bg-indian-green rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyItems.map((a, i) => (
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

    {/* Section 3: Student Development */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Student Development</h2>
          <div className="mx-auto mt-3 h-1 w-20 bg-indian-green rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {development.map((b) => (
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

    {/* Section 4: Training Programme */}
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Training Programme</h2>
          <div className="mx-auto mt-3 h-1 w-20 bg-indian-green rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programme.map((a, i) => (
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

    {/* Section 5: Gallery */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Taekwondo Gallery</h2>
          <div className="mx-auto mt-3 h-1 w-20 bg-indian-green rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {taekwondoGallery.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              className="group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-[280px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Section 6: Holistic Development */}
    <section className="py-16 bg-indian-green">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <Sparkles className="h-10 w-10 mx-auto mb-4" color="#ffffff" />
        <h2 className="text-3xl lg:text-4xl font-bold !text-white mb-4">A Path to Holistic Growth</h2>
        <p className="!text-white/95 text-lg leading-relaxed mb-4">
          Taekwondo at SJRPS-Rajajinagar is more than a martial art — it is a journey of self-discovery
          that strengthens the body, sharpens the mind, and nurtures the spirit.
        </p>
        <p className="!text-white/90 leading-relaxed">
          Through disciplined training, respectful conduct, and consistent progress, our students
          embody the true essence of a martial artist — strong, humble, focused, and prepared to
          lead with courage and compassion.
        </p>
      </div>
    </section>
  </Layout>
);

export default Taekwondo;
