
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, FlaskConical, Utensils, Bus, Shield, Heart, Music, Palette, Wifi, Camera, MapPin, Phone } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import smartClassroomTech from "@/assets/smart-classroom-tech.jpg";
import computerLabStudents from "@/assets/computer-lab-students.jpg";
import auditoriumPerformance from "@/assets/auditorium-performance.jpg";
import artMusicStudio from "@/assets/art-music-studio.jpg";
import transportationStudents from "@/assets/transportation-students.jpg";
import indianSchoolCampus from "@/assets/indian-school-campus.jpg";

const Facilities = () => {
  const facilities = [
    { 
      title: "Smart Classrooms", 
      icon: Monitor, 
      description: "Interactive whiteboards, projectors, and modern AV equipment for engaging lessons",
      features: ["Interactive Whiteboards", "High-Speed Internet", "AV Equipment", "Air Conditioning"],
      image: smartClassroomTech,
      color: "bg-blue-50"
    },
    { 
      title: "Science & Computer Labs", 
      icon: FlaskConical, 
      description: "Well-equipped laboratories for hands-on learning in physics, chemistry, biology, and computer science",
      features: ["Latest Equipment", "Safety Protocols", "Individual Workstations", "Expert Supervision"],
      image: computerLabStudents,
      color: "bg-green-50"
    },
    { 
      title: "Multipurpose Auditorium", 
      icon: Music, 
      description: "State-of-the-art auditorium for cultural events, assemblies, and performances",
      features: ["500 Seating Capacity", "Professional Sound System", "Stage Lighting", "AC Facility"],
      image: auditoriumPerformance,
      color: "bg-purple-50"
    },
    { 
      title: "Hygienic Cafeteria", 
      icon: Utensils, 
      description: "Clean, spacious dining area serving nutritious meals and healthy snacks",
      features: ["Nutritious Meals", "Hygienic Preparation", "Spacious Seating", "Affordable Pricing"],
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
      color: "bg-orange-50"
    },
    { 
      title: "Art & Music Rooms", 
      icon: Palette, 
      description: "Dedicated spaces for creative expression through art, craft, and music",
      features: ["Art Supplies", "Musical Instruments", "Natural Lighting", "Display Areas"],
      image: artMusicStudio,
      color: "bg-pink-50"
    },
    { 
      title: "Transportation", 
      icon: Bus, 
      description: "Safe and reliable school bus service covering major areas of Bengaluru",
      features: ["GPS Tracking", "Trained Drivers", "Route Coverage", "Safety Measures"],
      image: transportationStudents,
      color: "bg-yellow-50"
    },
    {
      title: "Security & Safety",
      icon: Shield,
      description: "Comprehensive security system with CCTV surveillance and trained security personnel",
      features: ["24/7 CCTV", "Security Guards", "Visitor Management", "Emergency Protocols"],
      image: indianSchoolCampus,
      color: "bg-red-50"
    },
    {
      title: "Health & Wellness",
      icon: Heart,
      description: "First aid facility and wellness room for student health and medical emergencies",
      features: ["Trained Nurse", "First Aid Supplies", "Emergency Care", "Health Records"],
      image: indianSchoolCampus,
      color: "bg-teal-50"
    }
  ];

  const quickStats = [
    { number: "30+", label: "Smart Classrooms", icon: Monitor },
    { number: "5", label: "Science Labs", icon: FlaskConical },
    { number: "500", label: "Auditorium Seats", icon: Music },
    { number: "15", label: "Bus Routes", icon: Bus }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <PageBanner
          title="Campus Facilities"
          subtitle="Thoughtfully designed campus promoting academic success, creativity, and comfort in a secure environment"
          backgroundImage={indianSchoolCampus}
        />

        {/* Quick Stats */}
        <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              {quickStats.map((stat, index) => (
                <Card key={stat.label} className="text-center hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in">
                  <CardContent className="p-6">
                    <div className="bg-school-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-school-brown mb-2">{stat.number}</div>
                    <p className="text-elegant-light font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities Grid with Images and Hover Effects */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-school-brown text-center mb-12">Our Facilities</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {facilities.map((facility, index) => (
                <Card key={facility.title} className={`${facility.color} group overflow-hidden hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in`}>
                  <div className="md:flex">
                    <div className="md:w-1/3 relative overflow-hidden">
                      <img 
                        src={facility.image} 
                        alt={facility.title}
                        className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                      <div className="absolute top-4 right-4 bg-school-gold p-2 rounded-full">
                        <facility.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-school-brown mb-3">{facility.title}</h3>
                        <p className="text-elegant-light mb-4 leading-relaxed">{facility.description}</p>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-school-brown">Key Features:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {facility.features.map((feature, i) => (
                              <div key={i} className="flex items-center text-sm text-elegant-light">
                                <div className="w-2 h-2 bg-school-gold rounded-full mr-2"></div>
                                {feature}
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

        {/* Virtual Tour CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto shadow-lg">
              <CardContent className="p-8 lg:p-12 text-center">
                <div className="bg-school-gold w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Camera className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-school-brown mb-6">Experience Our Campus</h2>
                <p className="text-xl text-elegant-light mb-8 max-w-2xl mx-auto">
                  Take a virtual tour of our facilities or schedule a visit to see our campus in person. 
                  Discover the spaces where learning comes alive!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-school-gold hover:bg-school-brown text-white">
                    <Camera className="h-5 w-5 mr-2" />
                    Virtual Campus Tour
                  </Button>
                  <Button size="lg" variant="outline" className="border-school-brown text-school-brown hover:bg-school-brown hover:text-white">
                    <Phone className="h-5 w-5 mr-2" />
                    Schedule a Visit
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Safety & Security Highlight */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-school-brown text-center mb-12">Safety & Security</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-red-50 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Shield className="h-8 w-8 text-school-gold mr-3" />
                      <h3 className="text-xl font-bold text-school-brown">Security Measures</h3>
                    </div>
                    <ul className="space-y-2 text-elegant-light">
                      <li>• 24/7 CCTV surveillance throughout campus</li>
                      <li>• Trained security personnel at all entry points</li>
                      <li>• Visitor management and ID verification system</li>
                      <li>• Emergency evacuation procedures and drills</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-teal-50 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Heart className="h-8 w-8 text-school-gold mr-3" />
                      <h3 className="text-xl font-bold text-school-brown">Health & Wellness</h3>
                    </div>
                    <ul className="space-y-2 text-elegant-light">
                      <li>• Qualified nurse available during school hours</li>
                      <li>• Well-equipped first aid stations</li>
                      <li>• Regular health checkups and vaccinations</li>
                      <li>• Mental health and counseling support</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Facilities;
