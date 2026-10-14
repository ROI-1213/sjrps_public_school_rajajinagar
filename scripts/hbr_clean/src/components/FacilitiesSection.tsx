import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Library, FlaskConical, Theater, Monitor, MonitorPlay, Heart, Cpu, ChevronRight } from "lucide-react";

import classroomImg from "@/assets/class-room.jpg";
import libraryImg from "@/assets/library.jpg";
import labImg from "@/assets/lab.jpg";
import auditoriumImg from "@/assets/auditorium.jpg";
import computerImg from "@/assets/computer-lab.jpg";
import smartClassImg from "@/assets/smart-class.jpg";
import yogaImg from "@/assets/yoga.jpg";
import roboticsImg from "@/assets/robotics.jpg";

const facilities = [
  { title: "Classroom", description: "Spacious, well-lit classrooms designed for engaging and interactive learning experiences.", image: classroomImg, icon: BookOpen, link: "/facilities/classroom" },
  { title: "Library", description: "A vast collection of books and digital resources to nurture curiosity and study.", image: libraryImg, icon: Library, link: "/facilities/library" },
  { title: "Laboratories", description: "Modern physics, chemistry and biology labs for hands-on scientific exploration.", image: labImg, icon: FlaskConical, link: "/facilities/laboratories" },
  { title: "Auditorium", description: "A state-of-the-art auditorium for events, performances and gatherings.", image: auditoriumImg, icon: Theater, link: "/facilities/auditorium" },
  { title: "Computer Lab", description: "Advanced computer lab with high-speed internet and latest software for digital learning.", image: computerImg, icon: Monitor, link: "/facilities/computer-lab" },
  { title: "Smart Class", description: "Tech-enabled smart classrooms with interactive boards for immersive teaching.", image: smartClassImg, icon: MonitorPlay, link: "/facilities/smart-class" },
  { title: "Yoga", description: "A dedicated yoga hall promoting mindfulness, fitness and overall wellbeing.", image: yogaImg, icon: Heart, link: "/facilities/yoga-hall" },
  { title: "Robotics", description: "A futuristic robotics lab encouraging innovation, coding and problem-solving.", image: roboticsImg, icon: Cpu, link: "/facilities/robotics-lab" },
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
          <p className="text-base text-elegant-light">
            Modern infrastructure designed to enhance every learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {facilities.map((f, i) => {
            const Icon = f.icon;
            return (
              <Card
                key={i}
                className="group flex flex-col overflow-hidden border border-indian-green/15 hover:border-indian-green/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={f.image}
                    alt={f.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 bg-indian-green w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                </div>
                <CardContent className="p-4 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-school-brown mb-1.5 group-hover:text-indian-green transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-elegant-light text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                    {f.description}
                  </p>
                  <Button
                    asChild
                    size="sm"
                    className="bg-indian-green hover:bg-indian-green/90 text-white w-full"
                  >
                    <Link to={f.link}>
                      Learn More
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
