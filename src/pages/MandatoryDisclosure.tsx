import { useState } from "react";
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
  FileText,
  ExternalLink,
  X,
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
  const [previewPdf, setPreviewPdf] = useState<{ title: string; url: string } | null>(null);

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
            <div className="mx-auto h-1 w-16 bg-[#1b6e42] rounded-full mb-4" />
            <p className="text-sm text-muted-foreground">Click on any document or the View button to open the official PDF certificate in a new tab.</p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[560px]">
                <thead className="mandatory-table-header" style={{ backgroundColor: "#176B3F", color: "#ffffff" }}>
                  <tr className="mandatory-table-header" style={{ backgroundColor: "#176B3F", color: "#ffffff" }}>
                    <th
                      scope="col"
                      className="py-4 px-6 font-bold text-sm sm:text-base w-20 sm:w-24 text-left"
                      style={{ backgroundColor: "#176B3F", color: "#ffffff" }}
                    >
                      <div className="leading-tight">Sl</div>
                      <div className="leading-tight">No</div>
                    </th>
                    <th
                      scope="col"
                      className="py-4 px-6 font-bold text-sm sm:text-base text-left"
                      style={{ backgroundColor: "#176B3F", color: "#ffffff" }}
                    >
                      Document Name
                    </th>
                    <th
                      scope="col"
                      className="py-4 px-6 font-bold text-sm sm:text-base text-right pr-8 sm:pr-12"
                      style={{ backgroundColor: "#176B3F", color: "#ffffff" }}
                    >
                      View
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200/80 bg-white">
                  {mandatoryDocuments.map((doc, index) => (
                    <tr
                      key={doc.id}
                      className="hover:bg-emerald-50/50 transition-colors"
                    >
                      <td className="py-4 px-6 font-medium text-gray-900 text-sm sm:text-base whitespace-nowrap">
                        {index + 1}
                      </td>
                      <td className="py-4 px-6 text-gray-800 font-medium text-sm sm:text-base">
                        <a
                          href={doc.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-left text-gray-800 hover:text-[#176B3F] hover:underline transition-colors cursor-pointer"
                        >
                          {doc.title}
                        </a>
                      </td>
                      <td className="py-4 px-6 text-right pr-6 sm:pr-8 whitespace-nowrap">
                        <a
                          href={doc.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mandatory-view-btn"
                          style={{ backgroundColor: "#176B3F", color: "#ffffff" }}
                          title={`View ${doc.title} in new tab`}
                        >
                          <Eye className="h-4 w-4 shrink-0" color="#ffffff" style={{ color: "#ffffff" }} />
                          <span style={{ color: "#ffffff" }}>View</span>
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

      {/* PDF Preview Modal */}
      {previewPdf && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          onClick={() => setPreviewPdf(null)}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-5xl w-full h-[88vh] flex flex-col animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#1b6e42] text-white px-5 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2.5 min-w-0">
                <FileText className="h-5 w-5 text-white shrink-0" />
                <h3 className="font-bold text-sm sm:text-base truncate">
                  {previewPdf.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={previewPdf.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>Open in New Tab</span>
                </a>
                <button
                  type="button"
                  onClick={() => setPreviewPdf(null)}
                  className="rounded-lg p-1.5 text-white/80 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
                  aria-label="Close preview"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* PDF Embedded Viewer */}
            <div className="flex-1 bg-slate-100 relative">
              <iframe
                src={`${previewPdf.url}#view=FitH`}
                className="w-full h-full border-0"
                title={previewPdf.title}
              />
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default MandatoryDisclosure;
