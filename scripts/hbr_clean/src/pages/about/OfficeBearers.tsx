import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import vp1Img from "@/assets/leadership/vp1.jpg";
import vp2Img from "@/assets/leadership/vp2.jpg";
import maheshHiremathImg from "@/assets/leadership/Mahesh-Hiremath.jpg";
import secretaryImg from "@/assets/leadership/secretary.jpg";
import treasurerImg from "@/assets/leadership/treasurer.jpg";

const bearers = [
  { name: "Sri S.R.Veerabhadraiah", role: "President", image: treasurerImg },
  { name: "Sri S.V. Rajendra Prasad", role: "Vice-President", image: vp2Img },
  { name: "Sri Mahesh M.Hiremath", role: "Vice-President", image: maheshHiremathImg },
  { name: "Sri Prabhudev Kalmath", role: "Secretary", image: secretaryImg },
  { name: "Sri M.Kotreshappa", role: "Treasurer", image: vp1Img },
];

const OfficeBearers = () => (
  <Layout>
    <PageHero
      title="Office Bearers"
      breadcrumbs={[{ label: "About", path: "/about/overview" }, { label: "Office Bearers" }]}
    />
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indian-green mb-3">
            Leadership
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-logo-navy mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Our Office Bearers
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our Office Bearers are dedicated leaders committed to guiding the institution with vision,
            integrity, and excellence, ensuring continued growth and academic success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 max-w-7xl mx-auto">
          {bearers.map((b) => (
            <Card
              key={b.name}
              className="rounded-2xl border-none shadow-[0_8px_25px_rgba(0,0,0,0.10)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.18)] transition-all hover:-translate-y-1 overflow-hidden flex flex-col"
            >
              <div className="aspect-[3/4] w-full overflow-hidden bg-muted">
                <img
                  src={b.image}
                  alt={b.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                  }}
                />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="text-[15px] lg:text-sm xl:text-[15px] font-bold text-logo-navy whitespace-nowrap overflow-hidden text-ellipsis">
                  {b.name}
                </h3>
                <p className="text-indian-green font-semibold text-xs mt-1">{b.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default OfficeBearers;
