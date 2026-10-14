import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Building, BookOpen, Monitor, Mic2, Activity, Coffee, Shield, Camera } from "lucide-react";
import schoolInfrastructureBanner from "@/assets/school-infrastructure-banner.jpg";

const Infrastructure = () => {
  const facilities = [
    {
      icon: Monitor,
      title: "Smart Classrooms",
      description: "Modern technology-enabled learning spaces with interactive boards"
    },
    {
      icon: BookOpen,
      title: "Library & Labs",
      description: "5000+ books collection with fully equipped science laboratories"
    },
    {
      icon: Monitor,
      title: "Computer & Robotics Lab",
      description: "State-of-the-art technology center for digital learning"
    },
    {
      icon: Mic2,
      title: "Auditorium",
      description: "Spacious venue for events, performances, and gatherings"
    },
    {
      icon: Activity,
      title: "Sports & Yoga Facilities",
      description: "Dedicated spaces for physical education and wellness"
    },
    {
      icon: Coffee,
      title: "Cafeteria",
      description: "Hygienic dining area serving nutritious meals"
    },
    {
      icon: Shield,
      title: "Safety & Security",
      description: "CCTV surveillance and safe, hygienic restrooms"
    },
    {
      icon: Camera,
      title: "Modern Amenities",
      description: "Wi-Fi enabled campus with contemporary facilities"
    }
  ];

  return (
    <Layout>
      <PageBanner
        title="Our Infrastructure"
        subtitle="SJRPS-Rajajinagar offers a thoughtfully designed campus to support holistic development, blending modernity with traditional values in a secure and vibrant learning environment"
        backgroundImage={schoolInfrastructureBanner}
      />
      <div className="min-h-screen bg-background">

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Overview */}
              <Card className="mb-8 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Building className="h-8 w-8 text-school-gold" />
                    <h2 className="text-2xl font-bold text-school-brown">Campus Overview</h2>
                  </div>
                  <p className="text-lg text-elegant-light leading-relaxed mb-6">
                    Our campus represents the perfect blend of modern educational infrastructure and 
                    traditional values. Every facility has been designed with student safety, comfort, 
                    and academic excellence in mind, creating an environment where learning thrives.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-school-gold/10 to-tricolor-orange/10 p-6 rounded-lg border-l-4 border-school-gold">
                      <h3 className="text-xl font-bold text-school-brown mb-3">Modern Facilities</h3>
                      <ul className="space-y-2 text-elegant-light">
                        <li>• Smart classrooms with interactive technology</li>
                        <li>• Well-equipped science and computer laboratories</li>
                        <li>• Comprehensive library with digital resources</li>
                        <li>• State-of-the-art auditorium and sports facilities</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-r from-tricolor-green/10 to-school-gold/10 p-6 rounded-lg border-l-4 border-tricolor-green">
                      <h3 className="text-xl font-bold text-school-brown mb-3">Safety & Comfort</h3>
                      <ul className="space-y-2 text-elegant-light">
                        <li>• CCTV surveillance throughout the campus</li>
                        <li>• Safe and hygienic restroom facilities</li>
                        <li>• Nutritious cafeteria with quality meals</li>
                        <li>• Well-ventilated and naturally lit spaces</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Infrastructure Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {facilities.map((facility, index) => (
                  <Card key={facility.title} className="hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-6 text-center">
                      <div className="bg-school-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <facility.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-school-brown mb-2">{facility.title}</h3>
                      <p className="text-elegant-light text-sm">{facility.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Campus Highlights */}
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-lg overflow-hidden">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      alt="Modern Classroom"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">Learning Spaces</h3>
                      <p className="text-sm opacity-90">Modern, well-equipped classrooms</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-elegant-light">
                      Our classrooms feature smart boards, comfortable seating, and optimal lighting 
                      to create the perfect learning environment for students of all ages.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg overflow-hidden">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      alt="Library"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">Knowledge Hub</h3>
                      <p className="text-sm opacity-90">Comprehensive library facilities</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-elegant-light">
                      Our library houses over 5000 books across multiple languages and subjects, 
                      providing students with extensive resources for research and reading.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Campus Values */}
              <Card className="mt-8 shadow-lg bg-gradient-to-r from-school-gold/5 to-tricolor-orange/5">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl font-bold text-school-brown mb-4">Our Campus Philosophy</h2>
                  <p className="text-lg text-elegant-light max-w-3xl mx-auto">
                    The campus environment blends modernity with traditional values, offering a secure 
                    and vibrant learning space where students can grow academically, socially, and spiritually. 
                    Every corner of our infrastructure is designed to inspire learning and foster character development.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Infrastructure;