import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  BadgeCheck,
  MapPin,
  Phone,
  Mail,
  Users,
  ClipboardList,
  GraduationCap,
  Building,
  Eye,
  ShieldCheck,
} from "lucide-react";
import { schoolConfig } from "@/schoolConfig";
import { mandatoryDocuments } from "@/data/disclosures";

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

      {/* Mandatory Documents Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3">
              Mandatory Documents
            </h2>
            <div className="mx-auto h-1 w-16 bg-[#1b6e42] rounded-full mb-10" />
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#1b6e42] text-white">
                    <th scope="col" className="py-3 sm:py-4 px-3 sm:px-6 font-semibold text-xs sm:text-base w-14 sm:w-24 text-left">
                      <div className="leading-tight">Sl</div>
                      <div className="leading-tight">No</div>
                    </th>
                    <th scope="col" className="py-3 sm:py-4 px-3 sm:px-6 font-semibold text-xs sm:text-base text-left">
                      Document Name
                    </th>
                    <th scope="col" className="py-3 sm:py-4 px-3 sm:px-6 font-semibold text-xs sm:text-base text-right pr-4 sm:pr-10">
                      View
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {mandatoryDocuments.map((doc, index) => (
                    <tr
                      key={doc.id}
                      className="hover:bg-slate-50/80 transition-colors"
                    >
                      <td className="py-3 sm:py-4 px-3 sm:px-6 font-bold text-gray-900 text-xs sm:text-base whitespace-nowrap">
                        {index + 1}
                      </td>
                      <td className="py-3 sm:py-4 px-3 sm:px-6 text-gray-800 font-medium text-xs sm:text-base">
                        {doc.title}
                      </td>
                      <td className="py-3 sm:py-4 px-3 sm:px-6 text-right pr-3 sm:pr-8 whitespace-nowrap">
                        <a
                          href={doc.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-1.5 rounded-lg bg-[#1b6e42] hover:bg-[#155a36] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs"
                        >
                          <Eye className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                          <span>View</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MandatoryDisclosure;
