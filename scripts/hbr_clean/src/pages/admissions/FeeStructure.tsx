import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { IndianRupee, CreditCard, FileText, Info, AlertCircle } from "lucide-react";

const fees = [
  { grade: "Pre-Primary", amount: "75,000 - 95,000" },
  { grade: "Class 1-5", amount: "1,15,000 - 1,30,000" },
  { grade: "Class 6-10", amount: "1,30,000 - 1,50,000" },
  { grade: "Class 11-12", amount: "1,40,000" },
];

const guidelines = [
  "Fees to be paid within the prescribed timelines.",
  "Payment options available through approved channels.",
  "Receipt generation after successful payment.",
  "School reserves the right to revise fees periodically.",
];

const notes = [
  "Zero Admission Fee for New Admissions!",
  "Fee structure is subject to revision by management.",
  "Parents are advised to retain payment receipts.",
  "Contact the school office for clarification regarding fee-related matters.",
];

const FeeStructure = () => {
  return (
    <Layout>
      <PageHero
        title="Fees Structure"
        breadcrumbs={[
          { label: "Admissions", path: "/admissions" },
          { label: "Fees Structure" },
        ]}
      />

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indian-green mb-3">
            Transparent Pricing
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-logo-navy mb-5"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Fee Structure Overview
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A clear, family-friendly fee structure that reflects our commitment to quality CBSE
            education at SJRPS-HBR.
          </p>
        </div>
      </section>

      {/* Admission Fee Highlight */}
      <section className="pb-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card
            className="rounded-2xl border border-indian-green/10 shadow-xl bg-card"
            style={{ backgroundColor: "hsl(0 0% 100%)" }}
          >
            <CardContent className="p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <IndianRupee className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <div
                    className="text-xs font-semibold uppercase tracking-[0.25em]"
                    style={{ color: "hsl(0 0% 7%)" }}
                  >
                    New Admissions
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: "hsl(0 0% 20%)" }}>
                    Zero Admission Fees
                  </h3>
                </div>
              </div>
              <div
                className="text-4xl lg:text-5xl font-extrabold"
                style={{ color: "hsl(var(--primary))" }}
              >
                Zero
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Annual Fee Table */}
      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3
            className="text-2xl md:text-3xl font-bold text-logo-navy text-center mb-8"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Annual Fee Structure
          </h3>

          {/* Desktop table */}
          <div className="hidden md:block bg-white rounded-2xl shadow-lg border border-indian-green/10 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-indian-green text-white">
                <tr>
                  <th className="px-6 py-4 text-sm uppercase tracking-wider">Class</th>
                  <th className="px-6 py-4 text-sm uppercase tracking-wider text-right">
                    Annual Fee (₹)
                  </th>
                </tr>
              </thead>
              <tbody>
                {fees.map((f, i) => (
                  <tr
                    key={f.grade}
                    className={i % 2 === 0 ? "bg-white" : "bg-[hsl(38_70%_97%)]"}
                  >
                    <td className="px-6 py-4 font-semibold text-logo-navy">{f.grade}</td>
                    <td className="px-6 py-4 text-right font-bold text-indian-green text-lg">
                      ₹{f.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden grid gap-3">
            {fees.map((f) => (
              <div
                key={f.grade}
                className="bg-white rounded-xl border border-indian-green/10 shadow-sm p-4 flex items-center justify-between"
              >
                <span className="font-semibold text-logo-navy">{f.grade}</span>
                <span className="font-bold text-indian-green">₹{f.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="pb-16 bg-[hsl(38_70%_96%)] py-16">
        <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-7 shadow-sm border border-indian-green/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-indian-green flex items-center justify-center">
                <CreditCard className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-logo-navy">Fee Payment Guidelines</h3>
            </div>
            <ul className="space-y-3">
              {guidelines.map((g) => (
                <li key={g} className="flex items-start gap-2 text-muted-foreground">
                  <FileText className="h-4 w-4 text-saffron-orange mt-1 shrink-0" />
                  <span>{g}</span>
                </li>
              ))}
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
              {notes.map((n) => (
                <li key={n} className="flex items-start gap-2 text-muted-foreground">
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
