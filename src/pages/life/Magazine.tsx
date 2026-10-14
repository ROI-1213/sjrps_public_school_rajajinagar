import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Book, Download, FileText, Camera, Award, Users, Pen } from "lucide-react";
import { Button } from "@/components/ui/button";
import schoolMagazineBanner from "@/assets/school-magazine-banner.jpg";

const Magazine = () => {
  const sections = [
    {
      icon: Pen,
      title: "Student Articles & Poetry",
      description: "Creative writings and thoughts from our talented students"
    },
    {
      icon: Camera,
      title: "Art & Photography Showcase",
      description: "Visual expressions and artistic creations"
    },
    {
      icon: Award,
      title: "Academic Highlights & Awards",
      description: "Celebrating our students' achievements and recognitions"
    },
    {
      icon: Users,
      title: "Messages from Leadership",
      description: "Inspirational words from our management and faculty"
    },
    {
      icon: FileText,
      title: "Annual Reports of Activities",
      description: "Comprehensive overview of school events and programs"
    }
  ];

  const editions = [
    { year: "2023-24", cover: "photo-1481627834876-b7833e8f5570", theme: "Innovation & Growth" },
    { year: "2022-23", cover: "photo-1507003211169-0a1dd7228f2d", theme: "Unity in Diversity" },
    { year: "2021-22", cover: "photo-1519389950473-47ba0277781c", theme: "Resilience & Hope" },
  ];

  return (
    <Layout>
      <PageBanner
        title='SJRPS-Rajajinagar Magazine – Expressions'
        subtitle='"Expressions", our annual magazine, is a vibrant collection of student creativity and school achievements that showcases the diverse talents of our community'
        backgroundImage={schoolMagazineBanner}
      />
      <div className="min-h-screen bg-background">

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Introduction */}
              <Card className="mb-8 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Book className="h-8 w-8 text-school-gold" />
                    <h2 className="text-2xl font-bold text-school-brown">About Expressions</h2>
                  </div>
                  <p className="text-lg text-elegant-light leading-relaxed mb-6">
                    Our annual magazine serves as a platform for students to express their creativity, 
                    share their thoughts, and celebrate the collective achievements of our school community. 
                    Each edition reflects the spirit, growth, and aspirations of SJRPS-Rajajinagar.
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <Button className="bg-school-gold hover:bg-school-gold/90 text-white">
                      <Download className="h-4 w-4 mr-2" />
                      Download Latest Edition
                    </Button>
                    <span className="text-elegant-light">🌟 Download the latest edition [PDF]</span>
                  </div>
                </CardContent>
              </Card>

              {/* Magazine Sections */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-school-brown text-center mb-8">Magazine Sections</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sections.map((section, index) => (
                    <Card key={section.title} className="hover:shadow-lg transition-all duration-300 group">
                      <CardContent className="p-6 text-center">
                        <div className="bg-school-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <section.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-school-brown mb-2">{section.title}</h3>
                        <p className="text-elegant-light">{section.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Previous Editions */}
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-school-brown text-center mb-8">Previous Editions</h2>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {editions.map((edition, index) => (
                      <Card key={edition.year} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                        <div className="relative">
                          <img 
                            src={`https://images.unsplash.com/${edition.cover}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`}
                            alt={`Magazine ${edition.year}`}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                          <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="text-lg font-bold">{edition.year}</h3>
                            <p className="text-sm opacity-90">{edition.theme}</p>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <Button variant="outline" className="w-full group-hover:bg-school-gold group-hover:text-white group-hover:border-school-gold transition-colors duration-300">
                            <Download className="h-4 w-4 mr-2" />
                            Download PDF
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="text-center mt-8">
                    <p className="text-elegant-light mb-4">
                      Want to contribute to our next edition?
                    </p>
                    <Button variant="outline" className="border-school-gold text-school-brown hover:bg-school-gold hover:text-white">
                      Submit Your Work
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Magazine;