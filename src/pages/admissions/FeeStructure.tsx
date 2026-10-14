import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { admissionsContent } from "@/content/admissions";
import { schoolConfig } from "@/schoolConfig";
import { CreditCard, FileText, Info, AlertCircle, Download, ExternalLink, ShieldCheck } from "lucide-react";

const FeeStructure = () => {
  const { feeStructure } = admissionsContent;

  return (
    <Layout>
      <PageHero
        title="Fees Structure"
        breadcrumbs={[
          { label: "Admissions", path: "/admissions/admission-process" },
          { label: "Fees Structure" },
        ]}
      />

      {/* Header Overview */}
      <section className="py-14 lg:py-18">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indian-green mb-3">
            Transparent Pricing
          </p>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-logo-navy mb-5"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Fee Structure ({feeStructure.academicYear})
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {feeStructure.intro}
          </p>
        </div>
      </section>

      {/* Official AY 2026-27 Document Banner */}
      <section className="pb-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-gradient-to-r from-indian-green/10 via-amber-50 to-saffron-orange/10 border border-indian-green/20 rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-indian-green text-white flex items-center justify-center shrink-0 shadow-md">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <span className="inline-block bg-indian-green/10 text-indian-green text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-1">
                  Latest Approved Schedule
                </span>
                <h3 className="text-xl font-bold text-logo-navy">
                  Fee Structure AY 2026–27 (Mandatory Disclosure)
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Official notification approved under CBSE Mandatory Disclosure norms for {schoolConfig.name}.
                </p>
              </div>
            </div>
            <a
              href={feeStructure.mandatoryPdfLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indian-green text-white font-semibold hover:bg-forest-green shadow-md hover:shadow-lg transition-all shrink-0"
            >
              <Download className="h-4 w-4" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </section>

      {/* Table 1: New Admission Fees */}
      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-saffron-orange">
                Category 1
              </span>
              <h2
                className="text-2xl md:text-3xl font-bold text-logo-navy"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                New Admission Fees ({feeStructure.academicYear})
              </h2>
            </div>
            <p className="text-xs text-muted-foreground">
              Applicable to students seeking first-time admission to {schoolConfig.shortName}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-indian-green/10 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-indian-green text-white">
                <tr>
                  <th className="px-6 py-4 text-xs md:text-sm font-semibold uppercase tracking-wider w-20">
                    Sl. No.
                  </th>
                  <th className="px-6 py-4 text-xs md:text-sm font-semibold uppercase tracking-wider">
                    Grade / Standard
                  </th>
                  <th className="px-6 py-4 text-xs md:text-sm font-semibold uppercase tracking-wider text-right">
                    Annual Fee (₹)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {feeStructure.newAdmissionFees.map((row, i) => (
                  <tr
                    key={row.slNo}
                    className={`transition-colors hover:bg-emerald-50/50 ${
                      i % 2 === 0 ? "bg-white" : "bg-[hsl(38_70%_98%)]"
                    }`}
                  >
                    <td className="px-6 py-4 text-sm font-semibold text-muted-foreground">
                      {row.slNo}
                    </td>
                    <td className="px-6 py-4 font-semibold text-logo-navy">
                      {row.grade}
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-indian-green text-lg">
                      ₹{row.fee.toLocaleString("en-IN")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Table 2: Re-Admission Fees */}
      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-indian-green">
                Category 2
              </span>
              <h2
                className="text-2xl md:text-3xl font-bold text-logo-navy"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Re-Admission Fees ({feeStructure.academicYear})
              </h2>
            </div>
            <p className="text-xs text-muted-foreground">
              Applicable to continuing students progressing to the next grade
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-indian-green/10 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-logo-navy text-white">
                <tr>
                  <th className="px-6 py-4 text-xs md:text-sm font-semibold uppercase tracking-wider w-20">
                    Sl. No.
                  </th>
                  <th className="px-6 py-4 text-xs md:text-sm font-semibold uppercase tracking-wider">
                    Grade Progression
                  </th>
                  <th className="px-6 py-4 text-xs md:text-sm font-semibold uppercase tracking-wider text-right">
                    Annual Fee (₹)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {feeStructure.reAdmissionFees.map((row, i) => (
                  <tr
                    key={row.slNo}
                    className={`transition-colors hover:bg-emerald-50/50 ${
                      row.flag ? "bg-amber-50/60" : i % 2 === 0 ? "bg-white" : "bg-[hsl(38_70%_98%)]"
                    }`}
                  >
                    <td className="px-6 py-4 text-sm font-semibold text-muted-foreground">
                      {row.slNo}
                    </td>
                    <td className="px-6 py-4 font-semibold text-logo-navy">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <span>{row.transition}</span>
                        {row.flag && (
                          <span
                            className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300"
                            title={row.flagNote}
                          >
                            <AlertCircle className="w-3 h-3 text-amber-700" />
                            [NEEDS_APPROVAL: Source doc text preserved]
                          </span>
                        )}
                      </div>
                      {row.flagNote && (
                        <p className="text-xs text-amber-800 mt-1 italic font-normal">
                          {row.flagNote}
                        </p>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-indian-green text-lg">
                      ₹{row.fee.toLocaleString("en-IN")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Guidelines & Notes */}
      <section className="pb-16 bg-[hsl(38_70%_96%)] py-16">
        <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-7 shadow-sm border border-indian-green/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-indian-green flex items-center justify-center">
                <CreditCard className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-logo-navy">Payment Guidelines</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <FileText className="h-4 w-4 text-saffron-orange mt-1 shrink-0" />
                <span>Fees to be paid within the prescribed schedule at the start of each term.</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <FileText className="h-4 w-4 text-saffron-orange mt-1 shrink-0" />
                <span>Payment modes include demand draft, NEFT/RTGS bank transfer, and designated counter payment.</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <FileText className="h-4 w-4 text-saffron-orange mt-1 shrink-0" />
                <span>Official receipts are generated immediately upon realization of funds.</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <FileText className="h-4 w-4 text-saffron-orange mt-1 shrink-0" />
                <span>Fee structure is subject to revision periodically by the SJR Education Society management.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-7 shadow-sm border border-indian-green/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-saffron-orange flex items-center justify-center">
                <Info className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-logo-navy">Important Notes</h3>
            </div>
            <ul className="space-y-3">
              {feeStructure.notes.map((n, idx) => (
                <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
                  <AlertCircle className="h-4 w-4 text-indian-green mt-1 shrink-0" />
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FeeStructure;
