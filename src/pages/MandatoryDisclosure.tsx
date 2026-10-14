import { useState } from "react";
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
  Download,
  FileText,
  ShieldCheck,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { schoolConfig } from "@/schoolConfig";
import { mandatoryDocuments, MandatoryDocument } from "@/data/disclosures";

const schoolInfo = [
  { icon: Building2, label: "School Name", value: schoolConfig.name },
  {
    icon: BadgeCheck,
    label: "Affiliation Details",
    value: `CBSE Affiliation No. ${schoolConfig.affiliationNo} | School Code: ${schoolConfig.schoolCode} | DISE Code: ${schoolConfig.diseCode}`,
  },
  {
    icon: MapPin,
    label: "School Address",
    value: schoolConfig.address.full,
  },
  {
    icon: Phone,
    label: "Contact Landlines",
    value: schoolConfig.contact.landlines.join(" / "),
  },
  {
    icon: Mail,
    label: "Official Email",
    value: schoolConfig.contact.primaryEmail,
    href: `mailto:${schoolConfig.contact.primaryEmail}`,
  },
  {
    icon: ShieldCheck,
    label: "Affiliation Status",
    value: `${schoolConfig.affiliatedTo} (CBSE New Delhi)`,
  },
];

const institutionalInfo = [
  {
    icon: Users,
    title: "Management Details",
    desc: "Governed by the prestigious Sri Jagadguru Renukacharya Education Society (SJRES), founded in 1945, committed to value-based education and institutional excellence.",
  },
  {
    icon: ClipboardList,
    title: "School Management Committee",
    desc: "An active School Management Committee comprising distinguished educators, parent representatives, and community members ensuring transparent governance.",
  },
  {
    icon: GraduationCap,
    title: "Academic Framework",
    desc: "Comprehensive NCERT / CBSE curriculum delivered across Pre-Primary, Primary, and Secondary levels with qualified and experienced faculty.",
  },
  {
    icon: Building,
    title: "Infrastructure & Safety",
    desc: "Safe, urban campus with smart interactive classrooms, composite science laboratories, computer labs, library, indoor sports, and CCTV surveillance.",
  },
];

const categories = ["All", "Affiliation & Society", "Safety & Infrastructure", "Academic & Compliance"] as const;
type Category = (typeof categories)[number];

const MandatoryDisclosure = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const filteredDocs =
    selectedCategory === "All"
      ? mandatoryDocuments
      : mandatoryDocuments.filter((d) => d.category === selectedCategory);

  return (
    <Layout>
      <PageHero
        title="Mandatory Disclosure"
        breadcrumbs={[{ label: "Mandatory Disclosure" }]}
      />

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indian-green mb-3">
            CBSE Regulatory Compliance
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Transparency & Statutory Compliance
          </h1>
          <div className="mx-auto h-1 w-20 bg-indian-green rounded-full mb-6" />
          <p className="text-lg text-foreground/80 leading-relaxed">
            In accordance with CBSE regulatory directives and circulars, {schoolConfig.name} publishes
            all mandatory documents, statutory certificates, and institutional records for public inspection.
            This repository reflects our unwavering dedication to institutional integrity, child safety, and transparent governance.
          </p>
        </div>
      </section>

      {/* School Information */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-3">
            Institutional Information
          </h2>
          <div className="mx-auto h-1 w-20 bg-indian-green rounded-full mb-12" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {schoolInfo.map((it, i) => (
              <Card key={i} className="border-indian-green/20 hover:shadow-lg transition-all bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indian-green flex items-center justify-center flex-shrink-0 text-white shadow-sm">
                      <it.icon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-indian-green uppercase tracking-wide mb-1">
                        {it.label}
                      </p>
                      {it.href ? (
                        <a
                          href={it.href}
                          className="text-sm font-medium text-foreground hover:text-indian-green underline-offset-2 hover:underline break-words"
                        >
                          {it.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-logo-navy leading-snug break-words">
                          {it.value}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Highlights */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-3">
            Governance & Standards
          </h2>
          <div className="mx-auto h-1 w-20 bg-indian-green rounded-full mb-12" />
          <div className="grid md:grid-cols-2 gap-6">
            {institutionalInfo.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-indian-green/10 shadow-sm flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-saffron-orange/10 text-saffron-orange flex items-center justify-center shrink-0">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-logo-navy mb-1.5">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mandatory Documents Grid */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
              Official Certificates & Disclosures
            </h2>
            <div className="mx-auto h-1 w-20 bg-indian-green rounded-full mb-6" />
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              All documents are certified true copies of valid statutory registrations, safety clearances, and academic records.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all shadow-sm ${
                    selectedCategory === cat
                      ? "bg-indian-green text-white shadow-md"
                      : "bg-white text-logo-navy hover:bg-emerald-50 border border-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocs.map((doc) => (
              <Card
                key={doc.id}
                className="border-indian-green/10 hover:shadow-xl transition-all duration-300 flex flex-col justify-between bg-white overflow-hidden group"
              >
                <CardContent className="p-6 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-saffron-orange bg-saffron-orange/10 px-2.5 py-0.5 rounded-full">
                        {doc.category}
                      </span>
                      <span className="text-xs text-muted-foreground font-mono">
                        {doc.fileSize}
                      </span>
                    </div>

                    <div className="flex items-start gap-3 my-2">
                      <div className="w-10 h-10 rounded-lg bg-indian-green/10 text-indian-green flex items-center justify-center shrink-0 group-hover:bg-indian-green group-hover:text-white transition-colors">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-logo-navy group-hover:text-indian-green transition-colors leading-snug">
                          {doc.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-3">
                          {doc.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 mt-4 flex items-center gap-2">
                    <a
                      href={doc.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-indian-green text-white text-xs font-semibold hover:bg-forest-green shadow-sm transition-all"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      <span>View PDF</span>
                    </a>
                    <a
                      href={doc.pdfUrl}
                      download
                      className="inline-flex items-center justify-center p-2 rounded-lg border border-indian-green/20 text-indian-green hover:bg-indian-green/10 text-xs transition-all"
                      title="Download PDF"
                    >
                      <Download className="h-4 w-4" />
                    </a>
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

export default MandatoryDisclosure;
