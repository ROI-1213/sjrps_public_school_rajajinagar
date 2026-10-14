import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Gavel,
  CalendarCheck,
  Shirt,
  FileCheck2,
  UserCheck,
  MessageSquare,
  Laptop,
  ShieldCheck,
  HandHeart,
  Bus,
  GraduationCap,
  Share2,
  CalendarClock,
} from "lucide-react";

const codeOfConduct = [
  {
    icon: GraduationCap,
    title: "Respect for Teachers and the School",
    desc: "Any form of criticism of a teacher or the school in the presence of students should be strictly avoided. Such actions may diminish a student's respect for teachers and affect their learning. If parents have any genuine concerns or suggestions, they are encouraged to seek an appointment and discuss the matter directly with the Principal.",
  },
  {
    icon: Share2,
    title: "Responsible Use of Social Media",
    desc: "The use of any social media platform to abuse, harass, or defame schoolmates, classmates, teachers, or the school community is strictly prohibited and will not be tolerated.",
  },
  {
    icon: CalendarClock,
    title: "Meeting Teachers or the Principal",
    desc: "Parents wishing to meet a Teacher, Coordinator, or the Principal are requested to obtain a prior appointment to ensure a convenient and productive discussion.",
  },
];

const policies = [
  {
    icon: Gavel,
    title: "School Discipline Policy",
    desc: "Students are expected to uphold the values, rules, and decorum of the institution at all times. Acts of indiscipline are addressed through a fair, counselling-led process.",
  },
  {
    icon: CalendarCheck,
    title: "Attendance Policy",
    desc: "A minimum attendance of 80% is required across the academic year. Parents must inform the school in advance for planned absences and submit medical certificates when applicable.",
  },
  {
    icon: Shirt,
    title: "Uniform Policy",
    desc: "Students must wear the prescribed school uniform neatly on all working days. Grooming standards, including hair, footwear, and identity cards, must be strictly followed.",
  },
  {
    icon: FileCheck2,
    title: "Examination Policy",
    desc: "Assessments are conducted as per the CBSE framework. Malpractice of any kind is treated as a serious offence and is dealt with as per the examination committee guidelines.",
  },
  {
    icon: UserCheck,
    title: "Student Conduct Guidelines",
    desc: "Respect for teachers, peers, support staff, and school property is non-negotiable. Students are encouraged to demonstrate honesty, responsibility, and empathy in all interactions.",
  },
  {
    icon: MessageSquare,
    title: "Parent Communication Policy",
    desc: "All formal communication is routed through the school diary, official email, and the parent portal. Parents are encouraged to schedule appointments for meeting teachers.",
  },
  {
    icon: Laptop,
    title: "Digital Learning & Technology Usage Policy",
    desc: "Digital devices and online platforms must be used responsibly for academic purposes. Cyber-safety norms and screen-time guidelines are reinforced regularly.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Security Guidelines",
    desc: "The campus is monitored by CCTV with trained security personnel on duty. Visitor entry is regulated, and emergency drills are conducted periodically.",
  },
  {
    icon: HandHeart,
    title: "Anti-Bullying Policy",
    desc: "SJRPS-HBR maintains a strict zero-tolerance stance towards bullying of any form. Reported incidents are investigated promptly, with counselling and corrective measures.",
  },
  {
    icon: Bus,
    title: "Transport & Campus Safety Guidelines",
    desc: "School transport follows defined routes, timings, and safety protocols. Students are expected to follow bus discipline and campus movement guidelines for their safety.",
  },
];

const SchoolPolicies = () => {
  return (
    <Layout>
      <PageHero
        title="School Policies"
        breadcrumbs={[
          { label: "Admissions", path: "/admissions" },
          { label: "School Policies" },
        ]}
      />

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indian-green mb-3">
            Our Framework
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-logo-navy mb-5"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Policies that Build Character & Trust
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our policies are designed to nurture a safe, disciplined, and respectful learning
            environment where every child can thrive academically, socially, and emotionally.
          </p>
        </div>
      </section>

      <section className="pb-12 lg:pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-5">
            {policies.map((p) => (
              <div
                key={p.title}
                className="bg-white border border-indian-green/10 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indian-green flex items-center justify-center shrink-0 shadow">
                    <p.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-logo-navy mb-1.5">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-4 lg:pb-8">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indian-green mb-3">
              Community Guidelines
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-logo-navy mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              School Policies
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Guiding principles that foster mutual respect, responsible conduct, and open
              communication between parents, students, and the school.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {codeOfConduct.map((p, idx) => (
              <div
                key={p.title}
                className="relative bg-white border border-indian-green/10 rounded-2xl p-7 pt-10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="absolute -top-5 left-6 flex items-center gap-2">
                  <div className="w-11 h-11 rounded-xl bg-indian-green text-white font-bold flex items-center justify-center shadow-md text-lg">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-white border border-indian-green/20 flex items-center justify-center shadow-sm">
                    <p.icon className="h-5 w-5 text-indian-green" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-logo-navy mb-2 mt-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 bg-[hsl(38_70%_96%)] py-16 mt-16">

        <div className="container mx-auto px-4 max-w-3xl">
          <h2
            className="text-3xl md:text-4xl font-bold text-logo-navy text-center mb-10"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            <AccordionItem value="q1" className="bg-white rounded-xl border px-5">
              <AccordionTrigger className="text-left text-logo-navy font-semibold">
                Where can I view the complete school handbook?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                The detailed school handbook is shared with parents at the time of admission and is
                also available on request at the school office.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2" className="bg-white rounded-xl border px-5">
              <AccordionTrigger className="text-left text-logo-navy font-semibold">
                How are policy violations addressed?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Each case is handled with care through counselling, parent involvement, and
                disciplinary committee review where required.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3" className="bg-white rounded-xl border px-5">
              <AccordionTrigger className="text-left text-logo-navy font-semibold">
                How can parents report a safety or bullying concern?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Concerns can be raised directly with the class teacher, school counsellor, or the
                principal's office. All reports are treated with confidentiality and urgency.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </Layout>
  );
};

export default SchoolPolicies;
