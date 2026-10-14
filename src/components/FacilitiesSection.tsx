import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Library, FlaskConical, Theater, Monitor, MonitorPlay, Heart, Cpu, Trophy, ChevronRight } from "lucide-react";

const facilities = [
  { 
    title: "Classrooms", 
    description: "Spacious, well-lit, ergonomically planned classrooms designed for engaging, interactive learning.", 
    image: "/images/Photos/classroom/1.jpg", 
    icon: BookOpen, 
    link: "/facilities/classroom" 
  },
  { 
    title: "Library", 
    description: "Extensive collection of NCERT curriculum reference books, literary fiction, periodicals, and children's literature.", 
    image: "/images/Photos/Library/1.jpg", 
    icon: Library, 
    link: "/facilities/library" 
  },
  { 
    title: "Science Laboratories", 
    description: "Modern composite physics, chemistry and biology laboratory apparatus for safe, supervised experimentation.", 
    image: "/images/Photos/Science Lab/1.jpg", 
    icon: FlaskConical, 
    link: "/facilities/laboratories" 
  },
  { 
    title: "Auditorium", 
    description: "Spacious multipurpose campus auditorium for morning assemblies, theatrical performances, and celebrations.", 
    image: "/images/Photos/Auditorium/1.jpg", 
    icon: Theater, 
    link: "/facilities/auditorium" 
  },
  { 
    title: "Computer Laboratory", 
    description: "Dedicated computer workstations with high-speed internet and educational software for digital literacy.", 
    image: "/images/Photos/Computer lab/1.jpg", 
    icon: Monitor, 
    link: "/facilities/computer-lab" 
  },
  { 
    title: "Smart Classes & AI Panels", 
    description: "Interactive AI-enabled flat panel display boards facilitating multimedia animations and conceptual clarity.", 
    image: "/images/Photos/classroom/3.jpg", 
    icon: MonitorPlay, 
    link: "/facilities/smart-class" 
  },
  { 
    title: "Sports & Playgrounds", 
    description: "Track and field grounds, volleyball and throwball courts, plus indoor arena for table tennis and chess.", 
    image: "/images/Photos/Sports/1.jpg", 
    icon: Trophy, 
    link: "/facilities/sports" 
  },
  { 
    title: "Yoga & Wellness Hall", 
    description: "A tranquil dedicated hall where students practice guided pranayama and asanas for posture and focus.", 
    image: "/images/Photos/Yoga/1.jpg", 
    icon: Heart, 
    link: "/facilities/yoga" 
  },
  { 
    title: "Robotics Classes", 
    description: "Modern STEM innovation lab fostering algorithmic problem solving, coding, and hands-on robotics kits.", 
    image: "/images/Photos/Robotics/1.jpg", 
    icon: Cpu, 
    link: "/facilities/robotics" 
  },
];

const FacilitiesSection = () => {
  return (
    <section className="py-14 bg-gradient-to-br from-indian-green/5 via-white to-indian-green/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indian-green">Infrastructure</span>
          <h2 className="text-3xl md:text-4xl font-bold text-school-brown mt-2 mb-3 leading-tight">
            World-Class <span className="text-indian-green">Facilities</span>
          </h2>
          <p className="text-base text-muted-foreground">
            Modern, student-centric campus infrastructure at SJRPS-Rajajinagar designed for holistic learning.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {facilities.map((f, i) => {
            const Icon = f.icon;
            return (
              <Card
                key={i}
                className="group flex flex-col overflow-hidden border border-indian-green/15 hover:border-indian-green/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white rounded-2xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={f.image}
                    alt={f.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 bg-indian-green w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                </div>
                <CardContent className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-school-brown mb-1.5 group-hover:text-indian-green transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                    {f.description}
                  </p>
                  <Button
                    asChild
                    size="sm"
                    className="bg-indian-green hover:bg-indian-green/90 text-white w-full"
                  >
                    <Link to={f.link}>
                      Explore Facility
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
