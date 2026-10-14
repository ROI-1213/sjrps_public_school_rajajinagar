import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Crown } from "lucide-react";

const members = [
  { name: "Sri S.R. Veerabhadraiah", role: "President, SJRES" },
  { name: "Sri S.V. Rajendra Prasad", role: "Vice-president, SJRES" },
  { name: "Sri Mahesh M. Hiremath", role: "Vice-president, SJRES" },
  { name: "Sri Prabhudev Kalmath", role: "Secretary, SJRES" },
  { name: "Sri M. Kotreshappa", role: "Treasurer, SJRES" },
  { name: "Sri B. M. Jagadeeshwar Swamy", role: "Executive Committee Member, SJRES" },
  { name: "Sri Prabhu Annigeri", role: "Executive Committee Member, SJRES" },
  { name: "Sri Umesh Nagathan", role: "Executive Committee Member, SJRES" },
  { name: "Sri U.M. Basavaraj", role: "Executive Committee Member, SJRES" },
  { name: "Sri Kirandev Hiremath", role: "Executive Committee Member, SJRES" },
];

const ECMembers = () => (
  <Layout>
    <PageHero
      title="Executive Committee Members"
      breadcrumbs={[
        { label: "About", path: "/about/overview" },
        { label: "EC Members" },
      ]}
    />

    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2
            className="text-2xl md:text-3xl font-bold text-logo-navy"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            List Of Sri Jagadguru Renukacharya Education Society
            <br />
            Executive Committee Members 2026-2029
          </h2>
        </div>

        {/* Permanent Chief Patron */}
        <Card className="max-w-4xl mx-auto rounded-2xl border-none shadow-md mb-10 overflow-hidden">
          <CardContent className="p-8 text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-golden-yellow/20 flex items-center justify-center mb-5">
              <Crown className="h-8 w-8 text-golden-yellow" />
            </div>
            <h3 className="text-2xl font-bold text-logo-navy mb-3">
              Poojya Sri Rambhapuri Jagadgurugalu
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Srimad Rambhapuri Veerasimhasanaadeeshwara Sri Sri Sri 1008 Jagadguru Prasanna Renuka Dr. Veera
              Someshwara Rajadeshikendra Shivacharya Mahaswamigalu, Rambhapuri Peeta Balehonnuru, Chikkamagaluru
              District-577112
            </p>
            <span className="inline-block mt-5 px-4 py-1.5 rounded-full bg-indian-green/10 text-indian-green text-xs font-bold uppercase tracking-wider">
              Permanent Chief Patron
            </span>
          </CardContent>
        </Card>

        {/* Members grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {members.map((m) => (
            <Card
              key={m.name}
              className="rounded-2xl border border-border/60 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold text-logo-navy leading-tight">{m.name}</h3>
                <p className="text-indian-green font-semibold text-sm mt-2">{m.role}</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Anand Rao Circle, Bengaluru
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default ECMembers;
