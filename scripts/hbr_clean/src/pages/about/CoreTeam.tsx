import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap, Clock } from "lucide-react";

import principal from "@/assets/principal.jpg";
import lilyRoy from "@/assets/Lily-Roy.jpg";
import nirmalaNelson from "@/assets/Nirmala-Nelson.jpg";
import sriVidhya from "@/assets/Sri-Vidhya.jpg";
import pallaviMN from "@/assets/Pallavi-MN.jpg";
import mariaMagdalin from "@/assets/Maria-Magdalin.jpg";

const CoreTeam = () => {
  const coreTeam = [
    {
      name: "Mrs Jyothi Shashidhar",
      designation: "Principal",
      subject: "Science (Physics)",
      qualification: "M.Sc., M.Ed.",
      experience: "21.8 Yrs",
      image: principal,
    },
    {
      name: "Mrs Lily Roy",
      designation: "Senior Secondary Coordinator",
      subject: "Science",
      qualification: "M.Sc., B.Ed.",
      experience: "22.6 Yrs",
      image: lilyRoy,
    },
    {
      name: "Mrs Nirmala Nelson",
      designation: "Secondary Coordinator",
      subject: "English",
      qualification: "NTT, B.A., B.Ed.",
      experience: "16.1 Yrs",
      image: nirmalaNelson,
    },
    {
      name: "Mrs D. Sri Vidhya",
      designation: "Primary Coordinator",
      subject: "EVS",
      qualification: "B.A., B.Ed., NTT",
      experience: "15.1 Yrs",
      image: sriVidhya,
    },
    {
      name: "Mrs Pallavi M. N.",
      designation: "Primary Coordinator",
      subject: "Social Science",
      qualification: "B.Com., M.Com., B.Ed.",
      experience: "12.1 Yrs",
      image: pallaviMN,
    },
    {
      name: "Mrs Maria Magdalin D",
      designation: "Pre-Primary Coordinator",
      subject: "All Subjects",
      qualification: "B.A., M.A., NTT",
      experience: "27.4 Yrs",
      image: mariaMagdalin,
    },
  ];

  return (
    <Layout>
      <PageHero
        title="Core Team"
        breadcrumbs={[{ label: "About", path: "/about/overview" }, { label: "Core Team" }]}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indian-green mb-3">
              Leadership
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-logo-navy mb-5"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Our Academic & Administrative Leadership
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our core team is a blend of experienced educators, visionary thinkers, and compassionate
              leaders who work tirelessly to ensure that every aspect of school life contributes to
              student success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreTeam.map((t) => (
              <Card
                key={t.name}
                className="rounded-2xl border-none shadow-[0_8px_25px_rgba(0,0,0,0.10)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col h-full"
              >
                <div className="aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-5 flex flex-col flex-1 text-center">
                  <h3 className="text-lg font-bold text-logo-navy leading-tight">{t.name}</h3>
                  <p className="text-sm font-semibold text-indian-green mt-1">{t.designation}</p>
                  <div className="mt-4 pt-4 border-t space-y-2 text-sm text-foreground/80 text-left">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-indian-green flex-shrink-0" />
                      <span>{t.subject}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-indian-green flex-shrink-0" />
                      <span>{t.qualification}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-indian-green flex-shrink-0" />
                      <span>{t.experience}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CoreTeam;
