
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Target, Zap, Users, Medal, Star, Clock, Calendar } from "lucide-react";
import sportsComplex from "@/assets/sports-complex.jpg";
import playgroundActivities from "@/assets/playground-activities.jpg";
import indianStudentsSports from "@/assets/indian-students-sports.jpg";
import clubsActivities from "@/assets/clubs-activities.jpg";

const Sports = () => {
  const sports = [
    { 
      name: "Cricket", 
      icon: Target, 
      description: "Full-size cricket ground with professional coaching and inter-school tournaments",
      image: sportsComplex,
      facilities: ["Professional Ground", "Expert Coaching", "Equipment Provided"]
    },
    { 
      name: "Basketball", 
      icon: Trophy, 
      description: "Indoor basketball court with regular practice sessions and competitive leagues",
      image: playgroundActivities,
      facilities: ["Indoor Court", "Team Training", "Inter-school Matches"]
    },
    { 
      name: "Football", 
      icon: Zap, 
      description: "Full-size football field for training, matches, and building teamwork skills",
      image: indianStudentsSports,
      facilities: ["Full-size Field", "Weekly Training", "Team Jerseys"]
    },
    { 
      name: "Indoor Games", 
      icon: Users, 
      description: "Chess, Table Tennis, Carrom, and other indoor activities for strategic thinking",
      image: clubsActivities,
      facilities: ["Multiple Games", "All Weather", "Strategy Development"]
    }
  ];

  const stats = [
    { number: "20+", label: "Trophies Won", icon: Trophy },
    { number: "10+", label: "Sports Offered", icon: Medal },
    { number: "300+", label: "Active Athletes", icon: Users },
    { number: "5", label: "PE Instructors", icon: Star }
  ];

  const testimonials = [
    {
      name: "Arjun Kumar",
      class: "Grade 9",
      quote: "Sports at SJRPS-Rajajinagar taught me discipline and teamwork. I'm now captain of our cricket team!",
      sport: "Cricket"
    },
    {
      name: "Priya Sharma",
      class: "Grade 10",
      quote: "The basketball court is amazing! Our coach helps us improve every day.",
      sport: "Basketball"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-school text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">Sports & Recreation</h1>
            <p className="text-xl text-amber-200 max-w-3xl mx-auto">
              At SJRPS-Rajajinagar, we believe that physical education is key to a student's overall development. 
              Our Sports & Recreation program builds confidence, teamwork, and discipline while promoting a healthy lifestyle.
            </p>
          </div>
        </section>

        {/* Animated Stats Section */}
        <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
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

        {/* Sports Facilities Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-school-brown text-center mb-12">Sports Facilities</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {sports.map((sport, index) => (
                <Card key={sport.name} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover-scale">
                  <div className="relative overflow-hidden">
                    <img 
                      src={sport.image} 
                      alt={sport.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute top-4 right-4 bg-school-gold p-2 rounded-full">
                      <sport.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-school-brown mb-3">{sport.name}</h3>
                    <p className="text-elegant-light mb-4">{sport.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {sport.facilities.map((facility, i) => (
                        <span key={i} className="bg-amber-100 text-school-brown px-3 py-1 rounded-full text-sm font-medium">
                          {facility}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-school-brown text-center mb-12">Student Voices</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={testimonial.name} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-school-gold w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        <Trophy className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-school-brown">{testimonial.name}</h4>
                        <p className="text-sm text-elegant-light">{testimonial.class} • {testimonial.sport}</p>
                      </div>
                    </div>
                    <p className="text-elegant italic">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-school-brown text-center mb-12">Upcoming Sports Events</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-xl transition-all duration-300 hover-scale">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-12 w-12 text-school-gold mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-school-brown mb-2">Annual Sports Meet</h3>
                  <p className="text-elegant-light mb-2">February 15-16, 2025</p>
                  <p className="text-sm text-elegant">Two days of competitive sports and celebration</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-all duration-300 hover-scale">
                <CardContent className="p-6 text-center">
                  <Trophy className="h-12 w-12 text-school-gold mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-school-brown mb-2">Inter-School Cricket</h3>
                  <p className="text-elegant-light mb-2">March 5, 2025</p>
                  <p className="text-sm text-elegant">Championship match against neighboring schools</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-all duration-300 hover-scale">
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 text-school-gold mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-school-brown mb-2">Weekly PE Hours</h3>
                  <p className="text-elegant-light mb-2">Every Monday & Thursday</p>
                  <p className="text-sm text-elegant">Regular physical education for all students</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Sports;
