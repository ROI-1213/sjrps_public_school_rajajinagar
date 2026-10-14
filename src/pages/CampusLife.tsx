
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Users, BookOpen, Building } from "lucide-react";
import { Link } from "react-router-dom";
import playgroundActivities from "@/assets/playground-activities.jpg";

const CampusLife = () => {
  const sections = [
    {
      title: "Sports & Recreation",
      description: "Wide range of sports and recreational activities",
      link: "/campus/sports",
      icon: Trophy,
      color: "bg-blue-50"
    },
    {
      title: "Clubs & Activities",
      description: "Student clubs and extracurricular activities",
      link: "/campus/clubs",
      icon: Users,
      color: "bg-green-50"
    },
    {
      title: "Library",
      description: "Modern library with extensive resources",
      link: "/campus/library",
      icon: BookOpen,
      color: "bg-purple-50"
    },
    {
      title: "Facilities",
      description: "State-of-the-art campus facilities",
      link: "/campus/facilities",
      icon: Building,
      color: "bg-amber-50"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <PageBanner
          title="Campus Life"
          subtitle="Vibrant campus life with diverse opportunities for growth"
          backgroundImage={playgroundActivities}
        />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {sections.map((section, index) => (
                <Card key={section.title} className={`${section.color} hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in`}>
                  <CardContent className="p-8 text-center">
                    <div className="bg-school-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <section.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-school-brown mb-4">{section.title}</h3>
                    <p className="text-elegant-light mb-6 leading-relaxed">{section.description}</p>
                    <Link to={section.link}>
                      <Button className="bg-school-brown hover:bg-school-gold text-white">
                        Explore
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CampusLife;
