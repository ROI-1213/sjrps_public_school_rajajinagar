
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Palette, Camera, Mic, FlaskConical, BookOpen, Leaf, Users } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import clubsActivities from "@/assets/clubs-activities.jpg";

const Clubs = () => {
  const clubs = [
    { 
      name: "Science Club", 
      icon: FlaskConical, 
      description: "Explore the wonders of science through experiments, projects, and scientific inquiry",
      motto: "Discover, Experiment, Innovate",
      activities: ["Weekly Experiments", "Science Fair", "Lab Tours"],
      meetingDay: "Wednesdays",
      color: "bg-blue-50"
    },
    { 
      name: "Literary Club", 
      icon: BookOpen, 
      description: "Develop writing skills, poetry, and literary appreciation through creative expression",
      motto: "Words Have Power",
      activities: ["Creative Writing", "Poetry Sessions", "Book Reviews"],
      meetingDay: "Tuesdays",
      color: "bg-purple-50"
    },
    { 
      name: "Eco Warriors", 
      icon: Leaf, 
      description: "Environmental consciousness and sustainability through green initiatives and awareness",
      motto: "Save Today, Secure Tomorrow",
      activities: ["Tree Plantation", "Recycling Drives", "Green Campaigns"],
      meetingDay: "Fridays",
      color: "bg-green-50"
    },
    { 
      name: "Music & Dance", 
      icon: Music, 
      description: "Express creativity through various musical instruments and dance forms",
      motto: "Rhythm of Life",
      activities: ["Instrument Training", "Dance Practice", "Cultural Shows"],
      meetingDay: "Thursdays",
      color: "bg-pink-50"
    },
    { 
      name: "Art & Craft", 
      icon: Palette, 
      description: "Visual arts, handicrafts, and creative projects to unleash artistic potential",
      motto: "Create, Inspire, Express",
      activities: ["Painting Workshops", "Craft Projects", "Art Exhibitions"],
      meetingDay: "Mondays",
      color: "bg-orange-50"
    },
    { 
      name: "Drama & Theatre", 
      icon: Mic, 
      description: "Theatre performances, public speaking, and dramatic arts development",
      motto: "All the World's a Stage",
      activities: ["Script Reading", "Performance Practice", "Stage Shows"],
      meetingDay: "Saturdays",
      color: "bg-red-50"
    },
    { 
      name: "Photography Club", 
      icon: Camera, 
      description: "Capture moments, learn photography techniques, and document school events",
      motto: "Frame the Moment",
      activities: ["Photo Walks", "Editing Sessions", "Exhibition Prep"],
      meetingDay: "Wednesdays",
      color: "bg-yellow-50"
    },
    { 
      name: "Debate Forum", 
      icon: Users, 
      description: "Public speaking, debates, and developing communication and critical thinking skills",
      motto: "Speak with Confidence",
      activities: ["Weekly Debates", "Speech Practice", "Inter-school Competitions"],
      meetingDay: "Fridays",
      color: "bg-indigo-50"
    }
  ];

  const upcomingEvents = [
    { event: "Science Exhibition", date: "Jan 25", club: "Science Club" },
    { event: "Annual Drama Show", date: "Feb 10", club: "Drama Club" },
    { event: "Art Gallery Opening", date: "Feb 20", club: "Art Club" },
    { event: "Inter-school Debate", date: "Mar 5", club: "Debate Forum" }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <PageBanner
          title="Clubs & Activities"
          subtitle="Co-curricular activities that empower students to explore interests and develop leadership skills"
          backgroundImage={clubsActivities}
        />

        {/* Clubs Grid with Hover Effects */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-school-brown text-center mb-12">Active Student Clubs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clubs.map((club, index) => (
                <Card key={club.name} className={`${club.color} group hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in overflow-hidden`}>
                  <CardContent className="p-6 relative">
                    <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <club.icon className="h-16 w-16 text-school-brown" />
                    </div>
                    <div className="bg-school-gold w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <club.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-school-brown mb-3">{club.name}</h3>
                    <p className="text-elegant-light mb-4 leading-relaxed">{club.description}</p>
                    
                    {/* Club Motto - Reveals on Hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4">
                      <p className="text-school-gold font-semibold italic">"{club.motto}"</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-school-brown mb-2">Activities:</h4>
                        <div className="flex flex-wrap gap-1">
                          {club.activities.map((activity, i) => (
                            <span key={i} className="bg-white/70 text-school-brown px-2 py-1 rounded text-xs font-medium">
                              {activity}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-elegant-light">Meets: {club.meetingDay}</span>
                        <Button size="sm" className="bg-school-brown hover:bg-school-gold text-white">
                          Join Club
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events Calendar */}
        <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-school-brown text-center mb-12">Upcoming Club Events</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {upcomingEvents.map((event, index) => (
                <Card key={event.event} className="hover:shadow-xl transition-all duration-300 hover-scale">
                  <CardContent className="p-6 text-center">
                    <div className="bg-school-gold text-white rounded-lg p-3 mb-4 inline-block">
                      <div className="text-sm font-medium">{event.date.split(' ')[0]}</div>
                      <div className="text-xs">{event.date.split(' ')[1] || '2025'}</div>
                    </div>
                    <h3 className="font-bold text-school-brown mb-2">{event.event}</h3>
                    <p className="text-sm text-elegant-light">{event.club}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Join a Club CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <Card className="bg-gradient-to-r from-school-brown to-school-gold text-white max-w-4xl mx-auto">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-6">Ready to Discover Your Passion?</h2>
                <p className="text-xl mb-8 opacity-90">
                  Join one of our exciting clubs and connect with like-minded students who share your interests!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-school-brown hover:bg-amber-50">
                    Download Club Registration Form
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-school-brown">
                    Contact Club Coordinator
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

export default Clubs;
