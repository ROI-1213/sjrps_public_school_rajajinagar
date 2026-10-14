import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, ChevronRight, Newspaper } from "lucide-react";
import { schoolEvents } from "@/data/events";

const NewsEventsHomeSection = () => {
  // Display exactly 2 featured events with images
  const latestEvents = schoolEvents.slice(0, 2);
  const tickerEvents = schoolEvents;

  return (
    <section className="py-8 lg:py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indian-green">Stay Updated</span>
          <h2 className="text-3xl md:text-4xl font-bold text-school-brown mt-1.5 leading-tight">
            News & Campus <span className="text-indian-green">Events</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-1.5">Latest highlights, celebrations and co-curricular milestones at SJRPS-Rajajinagar.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full mx-auto lg:items-stretch">
          {/* Left – Featured Events */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-indian-green w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                <Newspaper className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-school-brown">Latest News & Highlights</h3>
                <p className="text-xs text-muted-foreground">Featured campus stories and milestones</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {latestEvents.map((item) => (
                <Link key={item.id} to={`/news/${item.id}`} className="block h-full group">
                  <Card className="overflow-hidden border border-indian-green/20 hover:border-indian-green/40 hover:shadow-lg transition-all duration-300 flex flex-col h-full rounded-2xl group-hover:-translate-y-1 bg-white">
                    <div className="h-36 sm:h-38 overflow-hidden bg-muted relative">
                      <img 
                        src={item.featuredImage} 
                        alt={item.title} 
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                        }}
                      />
                    </div>
                    <CardContent className="p-4 flex flex-col flex-1">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center text-[11px] font-semibold px-2 py-0.5 rounded-md bg-indian-green/10 text-indian-green border border-indian-green/15">
                          {item.category}
                        </span>
                        <span className="text-[11px] text-muted-foreground flex items-center gap-1 font-medium">
                          <Calendar className="h-3 w-3 text-indian-green shrink-0" />
                          {item.date}
                        </span>
                      </div>
                      <h4 className="font-bold text-school-brown text-sm sm:text-[15px] leading-snug mb-1.5 line-clamp-2 group-hover:text-indian-green transition-colors">
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
          </div>

          {/* Right – Events ticker (strictly matches height of 4 cards beside it) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-indian-green w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                <Calendar className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-school-brown">Campus Calendar & Updates</h3>
                <p className="text-xs text-muted-foreground">Rolling campus schedule & circulars</p>
              </div>
            </div>

            <div className="relative flex-1 min-h-[380px] lg:min-h-0">
              <div className="absolute inset-0 overflow-hidden rounded-2xl border border-indian-green/15 bg-gradient-to-b from-indian-green/5 to-white shadow-xs">
                <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

                <div className="animate-ticker-up hover:[animation-play-state:paused] flex flex-col gap-2.5 p-3.5">
                  {[...tickerEvents, ...tickerEvents, ...tickerEvents].map((e, i) => (
                    <Link
                      key={`${e.id}-${i}`}
                      to={`/news/${e.id}`}
                      className="bg-white border-l-4 border-indian-green rounded-xl p-3 shadow-xs hover:shadow-md transition-all block group shrink-0"
                    >
                      <div className="font-semibold text-school-brown text-xs sm:text-sm leading-snug group-hover:text-indian-green transition-colors">{e.title}</div>
                      <div className="text-[11px] text-indian-green mt-1 flex items-center gap-1.5 font-medium">
                        <Calendar className="h-3 w-3" /> {e.date} • {e.category}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Centered Action Button */}
        <div className="text-center mt-8">
          <Button asChild className="bg-indian-green hover:bg-indian-green/90 text-white font-semibold px-6 shadow-sm hover:shadow-md transition-all">
            <Link to="/news">
              View All News & Events
              <ChevronRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsEventsHomeSection;
