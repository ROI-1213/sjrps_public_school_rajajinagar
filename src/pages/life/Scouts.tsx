import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import scoutsGuides1 from "@/assets/life/scouts-guides/scouts-guides-1.jpg";
import scoutsGuides2 from "@/assets/life/scouts-guides/scouts-guides-2.jpg";
import scoutsGuides3 from "@/assets/life/scouts-guides/scouts-guides-3.jpg";
import scoutsGuides4 from "@/assets/life/scouts-guides/scouts-guides-4.jpg";
import scoutsGuides5 from "@/assets/life/scouts-guides/scouts-guides-5.jpg";
import scoutsGuides6 from "@/assets/life/scouts-guides/scouts-guides-6.jpg";
import {
  TreePine,
  Compass,
  Users,
  Heart,
  Mountain,
  Award,
  Leaf,
  HandHeart,
  Star,
  ShieldCheck,
  Target,
  CheckCircle2,
  BookOpen,
  Sparkles,
} from "lucide-react";

const values = [
  { icon: HandHeart, title: "Service", text: "Helping others selflessly at all times." },
  { icon: Star, title: "Leadership", text: "Leading with confidence and integrity." },
  { icon: ShieldCheck, title: "Self-Reliance", text: "Becoming independent and resourceful." },
  { icon: Users, title: "Community", text: "Working together for a common good." },
  { icon: Leaf, title: "Environment", text: "Caring for nature and natural resources." },
  { icon: BookOpen, title: "Character", text: "Building honesty, courage and kindness." },
];

const skills = [
  "First Aid & Emergency Response",
  "Map Reading & Navigation",
  "Knot Tying & Pioneering",
  "Cooking & Camp Craft",
  "Survival & Outdoor Skills",
  "Public Speaking & Etiquette",
];

const activities = [
  { step: "01", title: "Troop Meetings", text: "Weekly gatherings for skill drills, songs and games." },
  { step: "02", title: "Service Projects", text: "Community outreach, clean-up drives and awareness campaigns." },
  { step: "03", title: "Outdoor Camps", text: "Trekking, hiking and overnight camps in nature." },
  { step: "04", title: "Jamborees", text: "District, state and national level scouting events." },
  { step: "05", title: "Badge Programme", text: "Progressive certification and proficiency badges." },
];

const stats = [
  { value: "300+", label: "Active Scouts & Guides" },
  { value: "60+", label: "Service Projects" },
  { value: "20+", label: "Camps Organised" },
  { value: "12+", label: "State Awards" },
];

const reasons = [
  "Develop self-confidence and resilience",
  "Learn life skills that schools rarely teach",
  "Make lifelong friends and memories",
  "Earn recognised proficiency badges",
  "Contribute meaningfully to society",
  "Connect deeply with nature and culture",
];

const galleryImages = [
  { src: scoutsGuides1, alt: "Scouts and Guides students receiving certificates" },
  { src: scoutsGuides2, alt: "Scouts and Guides World Environment Day rally" },
  { src: scoutsGuides3, alt: "Scouts and Guides community awareness activity" },
  { src: scoutsGuides4, alt: "Scouts and Guides student achievement ceremony" },
  { src: scoutsGuides5, alt: "Scouts and Guides Foundation Day cycle rally" },
  { src: scoutsGuides6, alt: "Scouts and Guides students at award ceremony" },
];

const ScoutsGuides = () => (
  <Layout>
    <PageHero
      title="Scouts & Guides"
      breadcrumbs={[
        { label: "Life @ SJRPS-Rajajinagar", path: "/life/activities" },
        { label: "Scouts & Guides" },
      ]}
    />

    {/* Introduction */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indian-green mb-3">
            Bharat Scouts & Guides
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-logo-navy" style={{ fontFamily: "Poppins, sans-serif" }}>
            Introduction to Scouts & Guides
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            The Scouts & Guides movement at SJRPS-Rajajinagar inspires students to live by the
            promise of service, self-discipline and citizenship. Through outdoor learning,
            community engagement and progressive challenges, young minds discover their
            potential and grow into responsible, kind and courageous individuals.
          </p>
        </div>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="py-12 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card className="rounded-2xl border-l-4 border-l-indian-green shadow-md">
            <CardContent className="p-8">
              <Sparkles className="h-9 w-9 text-indian-green mb-3" />
              <h3 className="text-xl font-bold text-logo-navy mb-2">Our Vision</h3>
              <p className="text-muted-foreground">
                To create a better world where people are self-fulfilled and play a constructive
                role in society — guided by the values of trust, service and respect.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-l-4 border-l-indian-green shadow-md">
            <CardContent className="p-8">
              <Target className="h-9 w-9 text-indian-green mb-3" />
              <h3 className="text-xl font-bold text-logo-navy mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                To contribute to the education of young people through a value system based on the
                Scout/Guide Promise and Law, building a better community and a better nation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-logo-navy" style={{ fontFamily: "Poppins, sans-serif" }}>
            Values & Principles
          </h2>
          <div className="mx-auto mt-3 h-[3px] w-16 bg-indian-green rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => (
            <Card
              key={v.title}
              className="rounded-2xl border border-indian-green/15 shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="bg-indian-green w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <v.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-logo-navy mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Skill Development & Community Service */}
    <section className="py-14 bg-muted/40">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indian-green mb-3">
            Skill Development
          </p>
          <h2 className="text-3xl font-bold text-logo-navy mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
            Practical Skills for Life
          </h2>
          <p className="text-muted-foreground mb-6">
            Scouting builds capable, confident young people through hands-on activities that
            teach skills they carry for life.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {skills.map((s) => (
              <li key={s} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-indian-green flex-shrink-0 mt-0.5" />
                <span className="text-foreground/85 text-sm">{s}</span>
              </li>
            ))}
          </ul>
        </div>
        <Card className="rounded-2xl border-2 border-indian-green/20">
          <CardContent className="p-8">
            <HandHeart className="h-10 w-10 text-indian-green mb-3" />
            <h3 className="text-2xl font-bold text-logo-navy mb-3">Community Service Programs</h3>
            <p className="text-muted-foreground mb-4">
              Our Scouts & Guides actively serve the community — organising health awareness
              drives, supporting local NGOs, planting trees, and standing alongside neighbours in
              times of need.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Swachh Bharat", "Tree Plantation", "Old Age Home Visits", "Health Camps", "Disaster Relief"].map((t) => (
                <span
                  key={t}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full bg-indian-green/10 text-indian-green border border-indian-green/30"
                >
                  {t}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>

    {/* Outdoor Learning */}
    <section className="py-14 bg-indian-green text-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
        <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/15">
          <Mountain className="h-10 w-10 text-golden-yellow mb-3" />
          <h3 className="text-2xl font-bold mb-2">Outdoor Learning & Camps</h3>
          <p className="text-white/85 leading-relaxed">
            Nature treks, overnight camps and pioneering challenges — outdoor experiences that
            sharpen instincts, build endurance and foster a deep love for the wild.
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/15">
          <Compass className="h-10 w-10 text-golden-yellow mb-3" />
          <h3 className="text-2xl font-bold mb-2">Leadership Training</h3>
          <p className="text-white/85 leading-relaxed">
            Patrol systems, troop responsibilities and progressive challenges develop natural
            leaders — empathetic, decisive and ready to take initiative.
          </p>
        </div>
      </div>
    </section>

    {/* Activity Timeline */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-logo-navy" style={{ fontFamily: "Poppins, sans-serif" }}>
            Our Activity Journey
          </h2>
          <div className="mx-auto mt-3 h-[3px] w-16 bg-indian-green rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {activities.map((a) => (
            <Card
              key={a.step}
              className="rounded-2xl border border-indian-green/20 hover:border-indian-green hover:-translate-y-1 transition-all duration-300"
            >
              <CardContent className="p-5 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-indian-green text-white flex items-center justify-center font-bold">
                  {a.step}
                </div>
                <h4 className="font-bold text-logo-navy text-sm mb-1">{a.title}</h4>
                <p className="text-xs text-muted-foreground">{a.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Student Achievements */}
    <section className="py-14 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-logo-navy" style={{ fontFamily: "Poppins, sans-serif" }}>
            Student Achievements
          </h2>
          <div className="mx-auto mt-3 h-[3px] w-16 bg-indian-green rounded-full" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <Card
              key={s.label}
              className="rounded-2xl text-center border-2 border-indian-green/20 hover:border-indian-green transition-colors hover:-translate-y-1 duration-300"
            >
              <CardContent className="p-8">
                <Award className="h-8 w-8 text-indian-green mx-auto mb-3" />
                <div className="text-4xl font-bold text-indian-green">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-2 uppercase tracking-wide">
                  {s.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Gallery */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="group overflow-hidden rounded-2xl border border-indian-green/15 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="aspect-[16/10] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Join */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-logo-navy" style={{ fontFamily: "Poppins, sans-serif" }}>
              Why Join Scouts & Guides?
            </h2>
            <div className="mx-auto mt-3 h-[3px] w-16 bg-indian-green rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((r) => (
              <Card
                key={r}
                className="rounded-xl border-l-4 border-l-indian-green hover:shadow-md transition-shadow"
              >
                <CardContent className="p-5 flex items-start gap-3">
                  <TreePine className="h-5 w-5 text-indian-green flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/85">{r}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-indian-green">
      <div className="container mx-auto px-4 text-center text-white max-w-3xl">
        <Heart className="h-12 w-12 mx-auto text-golden-yellow mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
          Be Prepared. Do a Good Turn Daily.
        </h2>
        <p className="text-white/85 mb-8">
          Join the Scouts & Guides at SJRPS-Rajajinagar and discover the joy of service, adventure
          and lifelong friendships.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" className="bg-golden-yellow text-logo-navy hover:bg-golden-yellow/90 font-semibold">
            <Link to="/contact">Join the Movement</Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default ScoutsGuides;
