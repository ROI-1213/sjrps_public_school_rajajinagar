import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface TimelineSectionProps {
  title: string;
  items: TimelineItem[];
  className?: string;
}

const TimelineSection = ({ title, items, className = "" }: TimelineSectionProps) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(items.length).fill(false));
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1 && entry.isIntersecting) {
            setVisibleItems(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="section-heading">
          <span className="icon">📚</span>
          <h2 className="title">{title}</h2>
          <div className="underline"></div>
        </div>
        
        <div className="max-w-4xl mx-auto mt-12">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>
            
            {items.map((item, index) => (
              <div
                key={index}
                ref={(el) => itemRefs.current[index] = el}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-accent rounded-full border-4 border-background shadow-lg flex items-center justify-center z-10">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <Card className={`transition-all duration-700 transform ${
                    visibleItems[index] 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  } hover:shadow-xl hover:scale-105`}>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        {item.icon && (
                          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center mr-3">
                            {item.icon}
                          </div>
                        )}
                        <span className="text-2xl font-bold text-accent">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;