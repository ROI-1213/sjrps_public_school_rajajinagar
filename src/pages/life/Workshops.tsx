import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { motion } from "framer-motion";
import {
  GraduationCap, Briefcase, FlaskConical, Bot, UserCheck, Crown, Lightbulb, BookOpen,
  Download, Sparkles, Brain, Rocket,
} from "lucide-react";

const categories = [
  { icon: GraduationCap, title: "Academic Workshops", desc: "Subject-deep workshops in mathematics, sciences, languages, and humanities led by visiting experts." },
  { icon: Briefcase, title: "Career Guidance Programs", desc: "Stream selection, university planning, and career counselling sessions for senior students." },
  { icon: FlaskConical, title: "STEM Workshops", desc: "Hands-on experimentation and project work that brings Science, Technology, Engineering, and Math to life." },
  { icon: Bot, title: "Robotics Exposure", desc: "Beginner to advanced robotics modules covering design, coding, and live build challenges." },
  { icon: UserCheck, title: "Personality Development", desc: "Public speaking, etiquette, grooming, and confidence-building sessions for holistic growth." },
  { icon: Crown, title: "Leadership Training", desc: "Workshops for student leaders covering decision-making, ethics, and team management." },
  { icon: Lightbulb, title: "Life Skills Programs", desc: "Financial literacy, digital safety, emotional wellbeing, and everyday-living skills." },
  { icon: BookOpen, title: "Teacher Development", desc: "In-service training for faculty on pedagogy, technology, assessment, and child psychology." },
];

const benefits = [
  { icon: Brain, title: "Deepen Understanding", desc: "Workshops complement classroom learning with focused, practical exposure." },
  { icon: Rocket, title: "Future-Ready Skills", desc: "Students gain skills the modern world demands — beyond textbooks." },
  { icon: Sparkles, title: "Discover Passions", desc: "Short, intensive formats help students identify interests and career paths." },
];

const workshops = [
  { id: 1, name: "Career Guidance Workshop" },
  { id: 2, name: "STEM Learning Workshop" },
  { id: 3, name: "Leadership Development Program" },
  { id: 4, name: "Life Skills Workshop" },
  { id: 5, name: "Personality Development Workshop" },
];

const workshopImages = [
  { src: "/images/Photos/Robotics/DSC01674.JPG", label: "Robotics Design & Assembly Workshop" },
  { src: "/images/Photos/Science Lab/DSC01030.JPG", label: "Hands-on Science Lab Experimentation" },
  { src: "/images/Photos/Robotics/DSC01539.JPG", label: "STEM Robotics Coding & Automation" },
  { src: "/images/Photos/Science Lab/DSC00853.JPG", label: "Biology & Chemical Sciences Workshop" },
  { src: "/images/Photos/Computer lab/DSC00845.JPG", label: "Digital Technology & Computer Lab" },
  { src: "/images/Photos/Science Lab/DSC00953.JPG", label: "Applied Science & Inquiry Session" },
];

const Workshops = () => (
  <Layout>
    <PageHero title="Workshops & Enrichment Programs" breadcrumbs={[{ label: "Life @ SJRPS-Rajajinagar" }, { label: "Workshops" }]} />

    {/* Section 1: Introduction */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Learning that Goes Beyond Lessons</h2>
        <div className="mx-auto h-1 w-20 bg-indian-green rounded-full mb-6" />
        <p className="text-base text-foreground/80 leading-relaxed">
          SJRPS-Rajajinagar regularly hosts workshops and enrichment programs that broaden student horizons, build real-world
          skills, and connect classroom learning with the wider world. From STEM and robotics to leadership and
          life skills, our enrichment calendar is curated for every age group.
        </p>
      </div>
    </section>

    {/* Section 2: Benefits */}
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Benefits of Workshops</h2>
          <div className="mx-auto mt-3 h-1 w-20 bg-indian-green rounded-full" />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <Card key={b.title} className="hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-indian-green flex items-center justify-center mb-4 mx-auto">
                  <b.icon className="h-7 w-7" color="#ffffff" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-foreground/75 leading-relaxed">{b.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Section 3: Categories */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Workshop Categories</h2>
          <div className="mx-auto mt-3 h-1 w-20 bg-indian-green rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <Card className="h-full hover:shadow-xl transition-shadow border-t-4 border-indian-green">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-indian-green flex items-center justify-center mb-4">
                    <c.icon className="h-7 w-7" color="#ffffff" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
                  <p className="text-sm text-foreground/75 leading-relaxed">{c.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    {/* Section 4: Workshops Gallery */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Workshops &amp; Practical Learning in Action</h2>
          <div className="mx-auto mt-3 h-1 w-20 bg-indian-green rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workshopImages.map((item, i) => (
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

    {/* Section 5: Workshop Information Table */}
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Workshop Information</h2>
          <div className="mx-auto mt-3 h-1 w-20 bg-indian-green rounded-full" />
          <p className="mt-4 text-foreground/75">Download workshop briefs and reports below.</p>
        </div>
        <Card className="shadow-lg overflow-hidden">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-indian-green hover:bg-indian-green">
                  <TableHead className="!text-white font-semibold w-20">Sl No</TableHead>
                  <TableHead className="!text-white font-semibold">Workshop Details</TableHead>
                  <TableHead className="!text-white font-semibold text-right">File Download</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {workshops.map((w) => (
                  <TableRow key={w.id}>
                    <TableCell className="font-semibold text-foreground">{w.id}</TableCell>
                    <TableCell className="text-foreground">{w.name}</TableCell>
                    <TableCell className="text-right">
                      <Button size="sm" className="bg-indian-green hover:bg-indian-green/90 text-white">
                        <Download className="h-4 w-4 mr-2" /> Download
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  </Layout>
);

export default Workshops;
