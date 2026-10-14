import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Building2,
  BadgeCheck,
  MapPin,
  Phone,
  Mail,
  Globe,
  Users,
  ClipboardList,
  GraduationCap,
  Building,
  Eye,
  ShieldCheck,
} from "lucide-react";
import { AFFILIATION, SCHOOL_EMAILS, SCHOOL_LANDLINES, WEBSITE_URL } from "@/lib/siteInfo";

const schoolInfo: Array<{
  icon: typeof Building2;
  label: string;
  value: string | { text: string; href: string }[];
  href?: string;
  external?: boolean;
}> = [
  { icon: Building2, label: "School Name", value: "SJR Public School, HBR Layout" },
  { icon: BadgeCheck, label: "Affiliation Details", value: AFFILIATION },
  {
    icon: MapPin,
    label: "School Address",
    value: "3rd Block, HBR Layout, Bengaluru, Karnataka – 560043",
  },
  {
    icon: Phone,
    label: "Contact Information",
    value: `Landline: ${SCHOOL_LANDLINES.map((l) => l.text).join(" | ")}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: SCHOOL_EMAILS.map((email) => ({ text: email, href: `mailto:${email}` })),
  },
  {
    icon: Globe,
    label: "Website",
    value: WEBSITE_URL.replace(/^https?:\/\//, ""),
    href: WEBSITE_URL,
    external: true,
  },
];

const institutionalInfo = [
  { icon: Users, title: "Management Details", desc: "Governed by the SJR Education Society, committed to value-based education and academic excellence since inception." },
  { icon: ClipboardList, title: "School Committee", desc: "An active School Management Committee comprising educators, parents, and community members ensuring transparent governance." },
  { icon: GraduationCap, title: "Academic Information", desc: "Comprehensive CBSE curriculum delivered across Primary, Secondary, and Higher Secondary levels with qualified faculty." },
  { icon: Building, title: "Infrastructure Information", desc: "Modern campus with smart classrooms, laboratories, library, sports facilities, auditorium, and safe transport services." },
];

const documents = [
  { name: "Affiliation Certificate", file: "/Affiliation-Certificate.pdf" },
  { name: "Society Registration Copy", file: "/Society-Registration-Copy.pdf" },
  { name: "No Objection Certificate", file: "/NOC.pdf" },
  { name: "RTE Recognition Certificate", file: "/RTE.pdf" },
  { name: "Building Safety Certificate", file: "/bsc.pdf" },
  { name: "Fire Safety Certificate", file: "/FSC.pdf" },
  { name: "Self Certification", file: "/sc.pdf" },
  { name: "Water Sanitation Certificate", file: "/wsc.pdf" },
  { name: "Water Testing Report", file: "/wtr.pdf" },
  { name: "Annual Calendar 2026-27", file: "/Annual-Calendar-2026-27.pdf" },
  { name: "Class X CBSE Results Last 3 Years", file: "/Class-10-CBSE-result-last-3-years.pdf" },
  { name: "Fee Structure AY 2026-27", file: "/Fee-Structure-2026-27.pdf" },
  { name: "Parent Teachers Committee 2026-27", file: "/Parents-teachers-Comittee.pdf" },
];

const MandatoryDisclosure = () => {
  return (
    <Layout>
      <PageHero
        title="Mandatory Disclosure"
        breadcrumbs={[{ label: "Mandatory Disclosure" }]}
      />

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Transparency & Compliance</h2>
          <div className="mx-auto h-1 w-20 bg-indian-green rounded-full mb-6" />
          <p className="text-lg text-foreground/80 leading-relaxed">
            In accordance with regulatory norms and our commitment to institutional governance, we publish all
            mandatory information about the school, its management, infrastructure, and academic framework for
            public access. This page reflects our dedication to openness, accountability, and trust.
          </p>
        </div>
      </section>

      {/* School Information */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-3">School Information</h2>
          <div className="mx-auto h-1 w-20 bg-indian-green rounded-full mb-12" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {schoolInfo.map((it, i) => (
              <Card key={i} className="border-indian-green/20 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indian-green flex items-center justify-center flex-shrink-0">
                      <it.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-indian-green uppercase tracking-wide mb-1">{it.label}</p>
                      {Array.isArray(it.value) ? (
                        it.value.map((v, idx) => (
                          <a
                            key={idx}
                            href={v.href}
                            className="block text-foreground/80 hover:text-indian-green underline-offset-2 hover:underline break-words"
                          >
                            {v.text}
                          </a>
                        ))
                      ) : it.href ? (
                        <a
                          href={it.href}
                          {...(it.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="text-foreground/80 hover:text-indian-green underline-offset-2 hover:underline break-words"
                        >
                          {it.value}
                        </a>
                      ) : (
                        <p className="text-foreground/80 break-words">{it.value}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-3">Institutional Information</h2>
          <div className="mx-auto h-1 w-20 bg-indian-green rounded-full mb-12" />
          <div className="grid md:grid-cols-2 gap-6">
            {institutionalInfo.map((it, i) => (
              <Card key={i} className="border-l-4 border-l-indian-green hover:shadow-lg transition-all">
                <CardContent className="p-6 flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indian-green/10 flex items-center justify-center flex-shrink-0">
                    <it.icon className="h-6 w-6 text-indian-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">{it.title}</h3>
                    <p className="text-foreground/75 leading-relaxed">{it.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mandatory Documents */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-3">Mandatory Documents</h2>
          <div className="mx-auto h-1 w-20 bg-indian-green rounded-full mb-12" />
          <Card className="overflow-hidden border-indian-green/20">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-indian-green text-white">
                  <tr>
                    <th className="px-6 py-4 font-semibold w-20">Sl No</th>
                    <th className="px-6 py-4 font-semibold">Document Name</th>
                    <th className="px-6 py-4 font-semibold text-right">View</th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((doc, i) => (
                    <tr key={i} className="border-t border-indian-green/10 hover:bg-indian-green/5 transition-colors">
                      <td className="px-6 py-4 font-medium text-black">{i + 1}</td>
                      <td className="px-6 py-4 text-foreground/85">{doc.name}</td>
                      <td className="px-6 py-4 text-right">
                        <Button
                          asChild
                          size="sm"
                          className="bg-indian-green hover:bg-indian-green/90 text-white"
                        >
                          <a href={doc.file} target="_blank" rel="noopener noreferrer">
                            <Eye className="h-4 w-4 mr-2" /> View
                          </a>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-indian-green/20 bg-indian-green/5">
            <CardContent className="p-10 text-center">
              <div className="w-16 h-16 rounded-2xl bg-indian-green flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-black mb-4">Commitment to Transparency</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                We uphold the highest standards of compliance and accountability. All institutional information,
                academic data, and governance practices are documented and made accessible to stakeholders. Our
                continued commitment is to operate with integrity, fairness, and openness in every aspect of
                school administration.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default MandatoryDisclosure;
