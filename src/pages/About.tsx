import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Award, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { schoolConfig } from "@/schoolConfig";

const About = () => {
  const sections = [
    {
      title: `About ${schoolConfig.shortName}`,
      description: "Discover our founding heritage, leadership ethos, and value-based educational philosophy",
      link: "/about/overview",
      icon: BookOpen,
      color: "bg-blue-50"
    },
    {
      title: "Vision & Mission",
      description: "Our guiding principles, institutional purpose, and commitment to holistic excellence",
      link: "/about/vision-mission",
      icon: Award,
      color: "bg-amber-50"
    },
    {
      title: "Principal's Message",
      description: `A warm message from ${schoolConfig.leadership.principal.name}, ${schoolConfig.leadership.principal.designation}`,
      link: "/about/principal-message",
      icon: Users,
      color: "bg-green-50"
    },
    {
      title: "Core Team & Faculty",
      description: "Meet our dedicated academic coordinators, senior leadership, and 50+ qualified educators",
      link: "/about/core-team",
      icon: Shield,
      color: "bg-purple-50"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <PageBanner
          title="About Our School"
          subtitle={`Discover the story, values, and vision that drive ${schoolConfig.name}`}
          backgroundImage="/images/Banner/banner-school-building.jpg"
        />

        {/* About Sections */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {sections.map((section) => (
                <Card key={section.title} className={`${section.color} hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in`}>
                  <CardContent className="p-8 text-center">
                    <div className="bg-school-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                      <section.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-school-brown mb-4">{section.title}</h3>
                    <p className="text-elegant-light mb-6 leading-relaxed">{section.description}</p>
                    <Link to={section.link}>
                      <Button className="bg-school-brown hover:bg-school-gold text-white font-semibold">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Overview */}
        <section className="py-16 bg-gradient-to-b from-amber-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-school-brown mb-8">Why Choose {schoolConfig.shortName}?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-school-gold mb-2">45+</div>
                  <p className="text-elegant">Years of Heritage (Estd. 1981)</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-school-gold mb-2">1000+</div>
                  <p className="text-elegant">Enrolled Students</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-school-gold mb-2">100%</div>
                  <p className="text-elegant">CBSE Board Results</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
