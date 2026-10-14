import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, ChevronRight, Newspaper } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { AdminContentItem, getPublicContent } from "@/lib/api";
import { mergeNewsItems } from "@/lib/newsContent";
import { mergeEventItems } from "@/lib/eventContent";

const NewsEventsHomeSection = () => {
  const [newsItems, setNewsItems] = useState<AdminContentItem[] | null>(null);
  const [eventItems, setEventItems] = useState<AdminContentItem[] | null>(null);

  useEffect(() => {
    getPublicContent("news", 2).then((result) => setNewsItems(result.items)).catch(() => setNewsItems(null));
    getPublicContent("event", 2).then((result) => setEventItems(result.items)).catch(() => setEventItems(null));
  }, []);

  const latestNews = useMemo(() => mergeNewsItems(newsItems || []).slice(0, 2), [newsItems]);

  const events = useMemo(() => mergeEventItems(eventItems || []), [eventItems]);

  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indian-green">Stay Updated</span>
          <h2 className="text-3xl md:text-4xl font-bold text-school-brown mt-2 leading-tight">
            News & Upcoming <span className="text-indian-green">Events</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto lg:items-stretch">
          {/* Left – News */}
          <div className="lg:col-span-7 flex flex-col lg:h-[520px]">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-indian-green w-10 h-10 rounded-full flex items-center justify-center">
                <Newspaper className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-school-brown">Latest News</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {latestNews.map((item) => (
                <Link key={item.key} to={item.href} className="block h-full">
                  <Card className="overflow-hidden border border-indian-green/15 hover:shadow-lg transition-shadow flex flex-col h-full">
                    <div className="h-44 overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <CardContent className="p-4 flex flex-col flex-1">
                      <span className="text-[11px] text-indian-green border border-indian-green/30 px-2 py-0.5 rounded self-start mb-2">
                        {item.date}
                      </span>
                      <h4 className="font-semibold text-school-brown text-[15px] leading-snug mb-1.5 line-clamp-2">{item.title}</h4>
                      <p className="text-elegant-light text-sm leading-relaxed line-clamp-3">{item.summary}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <Button asChild className="bg-indian-green hover:bg-indian-green/90 text-white">
                <Link to="/news">
                  View All
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right – Events ticker */}
          <div className="lg:col-span-5 flex flex-col lg:h-[520px]">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-indian-green w-10 h-10 rounded-full flex items-center justify-center">
                <Calendar className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-school-brown">Upcoming Events</h3>
            </div>

            <div className="relative flex-1 min-h-[360px] overflow-hidden rounded-2xl border border-indian-green/15 bg-gradient-to-b from-indian-green/5 to-white">
              <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

              <div className="animate-ticker-up flex flex-col gap-3 p-4">
                {[...events, ...events].map((e, i) => (
                  <div
                    key={i}
                    className="bg-white border-l-4 border-indian-green rounded-lg p-4 shadow-sm"
                  >
                    <div className="font-semibold text-school-brown text-[15px] leading-snug">{e.title}</div>
                    <div className="text-xs text-indian-green mt-1 flex items-center gap-1.5">
                      <Calendar className="h-3 w-3" /> {e.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEventsHomeSection;
