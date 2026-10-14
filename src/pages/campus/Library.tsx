
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Wifi, Users, Clock, Search, Star, Globe, Calendar } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import libraryStudentsReading from "@/assets/library-students-reading.jpg";

const Library = () => {
  const features = [
    { 
      title: "Extensive Collection", 
      icon: BookOpen, 
      description: "5,000+ books in English, Kannada, and Hindi covering all subjects and age groups",
      details: "Fiction, Non-fiction, Reference books, and Textbooks"
    },
    { 
      title: "Digital Resources", 
      icon: Wifi, 
      description: "Access to online databases, e-books, and digital journals for research",
      details: "High-speed internet and computer terminals available"
    },
    { 
      title: "Reading Spaces", 
      icon: Users, 
      description: "Dedicated areas for silent reading, group study, and research work",
      details: "Comfortable seating and proper lighting throughout"
    },
    { 
      title: "Extended Hours", 
      icon: Clock, 
      description: "Open from 8:00 AM to 6:00 PM on all school days",
      details: "After-school access for students and staff"
    },
    {
      title: "Search System",
      icon: Search,
      description: "Digital catalog system for easy book discovery and reservation",
      details: "Advanced search by author, subject, or keyword"
    },
    {
      title: "Special Programs",
      icon: Star,
      description: "Author talks, story sessions, and reading challenges throughout the year",
      details: "Monthly book clubs and literary events"
    }
  ];

  const collections = [
    { type: "Fiction", count: "2,000+", icon: BookOpen, color: "bg-blue-50" },
    { type: "Reference", count: "1,500+", icon: Search, color: "bg-green-50" },
    { type: "Digital", count: "500+", icon: Wifi, color: "bg-purple-50" },
    { type: "Magazines", count: "50+", icon: Globe, color: "bg-orange-50" }
  ];

  const currentEvents = [
    {
      title: "Book of the Month",
      subtitle: "The Secret Garden by Frances Hodgson Burnett",
      description: "A timeless tale of friendship, healing, and the magic of nature. Perfect for students of all ages to discover the power of hope and transformation.",
      date: "January 2025"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <PageBanner
          title="Library"
          subtitle="The intellectual heart of our campus - inspiring students to read, research, and grow"
          backgroundImage={libraryStudentsReading}
        />

        {/* Collection Stats */}
        <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              {collections.map((collection, index) => (
                <Card key={collection.type} className={`${collection.color} text-center hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in`}>
                  <CardContent className="p-6">
                    <div className="bg-school-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <collection.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-school-brown mb-2">{collection.count}</div>
                    <p className="text-elegant-light font-medium">{collection.type}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Features - 3 Column Layout */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-school-brown text-center mb-12">Library Features</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={feature.title} className="hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in">
                  <CardContent className="p-6 text-center">
                    <div className="bg-school-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-school-brown mb-4">{feature.title}</h3>
                    <p className="text-elegant-light mb-4 leading-relaxed">{feature.description}</p>
                    <p className="text-sm text-school-light-brown italic">{feature.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Book of the Month Highlight */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            {currentEvents.map((event, index) => (
              <Card key={event.title} className="max-w-4xl mx-auto shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-1 text-center">
                      <div className="bg-school-gold w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                        <BookOpen className="h-12 w-12 text-white" />
                      </div>
                      <div className="bg-school-brown text-white px-4 py-2 rounded-full text-sm font-medium">
                        {event.date}
                      </div>
                    </div>
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-bold text-school-brown mb-2">{event.title}</h3>
                      <h4 className="text-xl text-school-gold mb-4 font-semibold">{event.subtitle}</h4>
                      <p className="text-elegant-light leading-relaxed italic">"{event.description}"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Library Programs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-school-brown text-center mb-12">Special Programs & Events</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition-all duration-300 hover-scale">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-12 w-12 text-school-gold mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-school-brown mb-3">Weekly Reading Hours</h3>
                  <p className="text-elegant-light mb-4">Dedicated library time for each class to develop reading habits</p>
                  <p className="text-sm text-school-light-brown">Every Tuesday & Thursday</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-all duration-300 hover-scale">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-school-gold mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-school-brown mb-3">Author Talk Sessions</h3>
                  <p className="text-elegant-light mb-4">Meet and interact with renowned authors and storytellers</p>
                  <p className="text-sm text-school-light-brown">Monthly Events</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-all duration-300 hover-scale">
                <CardContent className="p-6 text-center">
                  <Star className="h-12 w-12 text-school-gold mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-school-brown mb-3">Reading Challenges</h3>
                  <p className="text-elegant-light mb-4">Exciting competitions to encourage students to read more</p>
                  <p className="text-sm text-school-light-brown">Quarterly Challenges</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Library Rules & Guidelines */}
        <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-school-brown mb-8">Library Guidelines</h2>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <Card className="bg-white shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-school-brown mb-4">Library Hours</h3>
                    <ul className="space-y-2 text-elegant-light">
                      <li>• Monday - Friday: 8:00 AM - 6:00 PM</li>
                      <li>• Saturday: 8:00 AM - 2:00 PM</li>
                      <li>• Closed on Sundays and holidays</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-white shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-school-brown mb-4">Borrowing Policy</h3>
                    <ul className="space-y-2 text-elegant-light">
                      <li>• Students can borrow up to 3 books</li>
                      <li>• Loan period: 2 weeks (renewable)</li>
                      <li>• Reference books for library use only</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-8">
                <Button size="lg" className="bg-school-gold hover:bg-school-brown text-white">
                  Download Library Membership Form
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Library;
