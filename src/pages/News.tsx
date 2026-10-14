import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AdminContentItem, getPublicContent } from "@/lib/api";
import { mergeNewsItems } from "@/lib/newsContent";
import { Calendar } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const News = () => {
  const [adminNews, setAdminNews] = useState<AdminContentItem[] | null>(null);

  useEffect(() => {
    getPublicContent("news").then((result) => setAdminNews(result.items)).catch(() => setAdminNews(null));
  }, []);

  const items = useMemo(() => mergeNewsItems(adminNews || []), [adminNews]);

  return (
    <Layout>
      <PageHero title="Latest News & Updates" breadcrumbs={[{ label: "News" }]} />

      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: "#111" }}>
            Stay Informed with SJRPS-Rajajinagar
          </h2>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: "#333" }}>
            Stay informed with the latest happenings, achievements, announcements, and important
            updates from SJRPS-Rajajinagar. Explore news that highlights academic excellence, student
            accomplishments, campus activities, and institutional milestones.
          </p>
        </div>
      </section>

      <section className="pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((n) => (
              <Card
                key={n.key}
                className="group flex flex-col overflow-hidden rounded-2xl border-0 bg-white transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.15)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)")
                }
              >
                <div className="overflow-hidden">
                  <img
                    src={n.image}
                    alt={n.title}
                    loading="lazy"
                    className="w-full h-[260px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="flex flex-col flex-1 p-6">
                  <h3 className="text-lg font-bold mb-1 line-clamp-2" style={{ color: "#111" }}>
                    {n.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-3 text-sm" style={{ color: "#444" }}>
                    <Calendar className="h-4 w-4 text-indian-green" />
                    <span>{n.date}</span>
                  </div>
                  <p
                    className="text-sm leading-relaxed mb-6 line-clamp-2 min-h-[2.75rem]"
                    style={{ color: "#333" }}
                  >
                    {n.summary}
                  </p>
                  <div className="mt-auto">
                    <Button asChild className="w-full bg-indian-green hover:bg-indian-green/90 text-white rounded-lg">
                      <Link to={n.href}>View Details</Link>
                    </Button>
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

export default News;
