import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, ChevronRight, Newspaper } from "lucide-react";
import { schoolEvents } from "@/data/events";

const NewsEventsHomeSection = () => {
  const latestEvents = schoolEvents.slice(0, 2);
  const tickerEvents = schoolEvents;

  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indian-green">Stay Updated</span>
          <h2 className="text-3xl md:text-4xl font-bold text-school-brown mt-2 leading-tight">
            News & Campus <span className="text-indian-green">Events</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-2">Latest highlights, celebrations and co-curricular milestones at SJRPS-Rajajinagar.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto lg:items-stretch">
          {/* Left – Featured Events */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-indian-green w-10 h-10 rounded-full flex items-center justify-center">
                <Newspaper className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-school-brown">Latest News & Highlights</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              {latestEvents.map((item) => (
                <Link key={item.id} to={`/news/${item.id}`} className="block h-full group">
                  <Card className="overflow-hidden border border-indian-green/15 hover:shadow-xl transition-all duration-300 flex flex-col h-full rounded-2xl group-hover:-translate-y-1">
                    <div className="h-44 overflow-hidden bg-muted">
                      <img 
                        src={item.featuredImage} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                        }}
                      />
                    </div>
                    <CardContent className="p-4 flex flex-col flex-1">
                      <span className="text-[11px] font-semibold text-indian-green bg-indian-green/10 px-2.5 py-0.5 rounded-full self-start mb-2">
                        {item.date}
                      </span>
                      <h4 className="font-bold text-school-brown text-[15px] leading-snug mb-1.5 line-clamp-2 group-hover:text-indian-green transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3">
                        {item.summary}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="mt-5">
              <Button asChild className="bg-indian-green hover:bg-indian-green/90 text-white">
                <Link to="/news">
                  View All News & Events
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right – Events ticker */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-indian-green w-10 h-10 rounded-full flex items-center justify-center">
                <Calendar className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-school-brown">Campus Calendar & Updates</h3>
            </div>

            <div className="relative flex-1 min-h-[380px] overflow-hidden rounded-2xl border border-indian-green/15 bg-gradient-to-b from-indian-green/5 to-white">
              <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

              <div className="animate-ticker-up flex flex-col gap-3 p-4">
                {[...tickerEvents, ...tickerEvents].map((e, i) => (
                  <Link
                    key={`${e.id}-${i}`}
                    to={`/news/${e.id}`}
                    className="bg-white border-l-4 border-indian-green rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow block"
                  >
                    <div className="font-semibold text-school-brown text-sm leading-snug">{e.title}</div>
                    <div className="text-xs text-indian-green mt-1 flex items-center gap-1.5 font-medium">
                      <Calendar className="h-3.5 w-3.5" /> {e.date} • {e.category}
                    </div>
                  </Link>
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
