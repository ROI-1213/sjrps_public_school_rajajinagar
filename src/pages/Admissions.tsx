
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, CreditCard, Award, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import indianSchoolEntrance from "@/assets/indian-school-entrance.jpg";

const Admissions = () => {
  const sections = [
    {
      title: "Application Process",
      description: "Step-by-step guide to applying for admission",
      link: "/admissions/admissions-process",
      icon: FileText,
      color: "bg-blue-50"
    },
    {
      title: "Fee Structure",
      description: "Transparent fee structure and payment options",
      link: "/admissions/fees-structure",
      icon: CreditCard,
      color: "bg-green-50"
    },
    {
      title: "Scholarships",
      description: "Merit and need-based scholarship opportunities",
      link: "/admissions/scholarship",
      icon: Award,
      color: "bg-purple-50"
    },
    {
      title: "Important Dates",
      description: "Key dates and deadlines for admissions",
      link: "/admissions/dates",
      icon: Calendar,
      color: "bg-amber-50"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <PageBanner
          title="Admissions"
          subtitle="Join our community of learners and achieve academic excellence"
          backgroundImage={indianSchoolEntrance}
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
                        Learn More
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

export default Admissions;
