import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, FlaskConical, Utensils, Cpu, Shield, Heart, Music, Palette, Activity, Camera, MapPin, Phone } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import { Link } from "react-router-dom";
import { schoolConfig } from "@/schoolConfig";

const Facilities = () => {
  const facilities = [
    { 
      title: "Smart Classrooms", 
      icon: Monitor, 
      description: "Interactive smart boards, high-definition projectors, and modern multimedia learning tools for engaging digital education.",
      features: ["Interactive Digital Panels", "High-Speed Internet", "Audio-Visual Equipment", "Ergonomic Seating"],
      image: "/images/School Building/1.jpg",
      color: "bg-blue-50"
    },
    { 
      title: "Science & Composite Labs", 
      icon: FlaskConical, 
      description: "Well-equipped laboratories for hands-on experimental learning in Physics, Chemistry, Biology, and foundational science.",
      features: ["Latest Apparatus", "Strict Safety Protocols", "Individual Workstations", "Faculty Supervision"],
      image: "/images/Infrastructure/1.jpg",
      color: "bg-green-50"
    },
    { 
      title: "Computer & IT Lab", 
      icon: Cpu, 
      description: "Modern computer terminal suite with high-speed internet, coding software, and digital literacy tools.",
      features: ["1:1 Student Computer Ratio", "High-Speed Broadband", "Curriculum Coding Software", "Cyber-Safety Filtering"],
      image: "/images/School Building/3.jpg",
      color: "bg-indigo-50"
    },
    { 
      title: "Multipurpose Auditorium", 
      icon: Music, 
      description: "Acoustically treated auditorium and activity hall for cultural performances, school assemblies, and guest seminars.",
      features: ["Spacious Seating", "Professional Sound System", "Stage Lighting", "Ventilated Hall"],
      image: "/images/School Building/2.jpg",
      color: "bg-purple-50"
    },
    { 
      title: "Library & Reading Hall", 
      icon: Palette, 
      description: "Rich collection of over 4,500 titles covering literature, sciences, reference encyclopedias, and children's periodicals.",
      features: ["4500+ Books & Periodicals", "Silent Reading Room", "Digital Cataloguing", "Reference Section"],
      image: "/images/School Building/1.jpg",
      color: "bg-amber-50"
    },
    { 
      title: "Indoor Sports & Taekwondo", 
      icon: Activity, 
      description: "Dedicated sports room and martial arts training area promoting physical endurance, discipline, and agile sportsmanship.",
      features: ["Taekwondo Training", "Table Tennis & Chess", "Carrom & Indoor Games", "Physical Fitness Drills"],
      image: "/images/Events/Annual Sports Meet/1.jpg",
      color: "bg-emerald-50"
    },
    {
      title: "Security & Surveillance",
      icon: Shield,
      description: "Comprehensive campus security system with round-the-clock CCTV surveillance and trained security guards.",
      features: ["24/7 CCTV Monitoring", "Security Guards at Gates", "Strict Visitor Verification", "Fire Safety Compliance"],
      image: "/images/School Building/1.jpg",
      color: "bg-red-50"
    },
    {
      title: "Health & First Aid",
      icon: Heart,
      description: "First aid medical station for prompt attention to student health, wellness, and minor sports care.",
      features: ["First Aid Supplies", "Doctor-on-Call Network", "Periodic Health Checks", "Clean Rest Areas"],
      image: "/images/School Building/2.jpg",
      color: "bg-teal-50"
    }
  ];

  const quickStats = [
    { number: "25+", label: "Modern Classrooms", icon: Monitor },
    { number: "4+", label: "Specialized Labs", icon: FlaskConical },
    { number: "4500+", label: "Library Books", icon: Palette },
    { number: "100%", label: "CCTV Campus Security", icon: Shield }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <PageBanner
          title="Campus Infrastructure"
          subtitle={`Thoughtfully designed learning spaces at ${schoolConfig.name} promoting academic focus, physical vigour, and creativity`}
          backgroundImage="/images/School Building/1.jpg"
        />

        {/* Quick Stats */}
        <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              {quickStats.map((stat) => (
                <Card key={stat.label} className="text-center hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in bg-white border border-indian-green/10">
                  <CardContent className="p-6">
                    <div className="bg-indian-green w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-md">
                      <stat.icon className="h-8 w-8" />
                    </div>
                    <div className="text-3xl font-bold text-logo-navy mb-2">{stat.number}</div>
                    <p className="text-muted-foreground font-medium text-sm">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities Grid with Images and Hover Effects */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-logo-navy text-center mb-12" style={{ fontFamily: "Poppins, sans-serif" }}>
              Our Campus Facilities
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {facilities.map((facility) => (
                <Card key={facility.title} className={`${facility.color} group overflow-hidden hover:shadow-xl transition-all duration-300 border border-black/5`}>
                  <div className="md:flex">
                    <div className="md:w-1/3 relative overflow-hidden h-52 md:h-auto">
                      <img 
                        src={facility.image} 
                        alt={facility.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                      <div className="absolute top-4 right-4 bg-indian-green p-2 rounded-xl text-white shadow">
                        <facility.icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-logo-navy mb-2">{facility.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{facility.description}</p>
                        <div className="space-y-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-indian-green">Key Highlights:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {facility.features.map((feature, i) => (
                              <div key={i} className="flex items-center text-xs text-foreground/80">
                                <div className="w-1.5 h-1.5 bg-saffron-orange rounded-full mr-2 shrink-0"></div>
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule a Visit CTA */}
        <section className="py-16 bg-muted/40">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto shadow-lg bg-white border border-indian-green/20">
              <CardContent className="p-8 lg:p-12 text-center">
                <div className="bg-indian-green w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-md">
                  <MapPin className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold text-logo-navy mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Visit Our Campus
                </h2>
                <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                  Experience our facilities, classrooms, and labs in person. We invite prospective parents to schedule a campus tour during official school visiting hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-indian-green hover:bg-forest-green text-white font-semibold">
                    <Link to="/contact">
                      <Phone className="h-4 w-4 mr-2" />
                      Contact Campus Office
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-indian-green text-indian-green hover:bg-indian-green/10 font-semibold">
                    <a href={schoolConfig.maps.directionsUrl} target="_blank" rel="noopener noreferrer">
                      <MapPin className="h-4 w-4 mr-2" />
                      Get Directions
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Facilities;
