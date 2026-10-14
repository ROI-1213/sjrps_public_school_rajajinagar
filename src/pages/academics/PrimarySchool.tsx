
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Palette, Calculator, Globe, Users, Heart, Music, Trophy } from "lucide-react";
import indianStudentsClassroom from "@/assets/indian-students-classroom.jpg";

const PrimarySchool = () => {
  const subjects = [
    { name: "English", icon: BookOpen, color: "bg-blue-100 text-blue-600", description: "Language & Literature" },
    { name: "Mathematics", icon: Calculator, color: "bg-green-100 text-green-600", description: "Numbers & Logic" },
    { name: "Science", icon: Globe, color: "bg-purple-100 text-purple-600", description: "Discovery & Exploration" },
    { name: "Arts & Crafts", icon: Palette, color: "bg-orange-100 text-orange-600", description: "Creativity & Expression" }
  ];

  const features = [
    { 
      title: "Activity-Based Learning", 
      icon: Users, 
      description: "Hands-on experiences that make learning fun and memorable through interactive activities and group work."
    },
    { 
      title: "Language Labs & Story Sessions", 
      icon: BookOpen, 
      description: "Interactive language development through storytelling, phonics, and communication skills building."
    },
    { 
      title: "Daily Reading Routines", 
      icon: Heart, 
      description: "Structured reading programs that foster a love for books and improve comprehension skills."
    },
    { 
      title: "Music & Arts Integration", 
      icon: Music, 
      description: "Creative expression through music, dance, and visual arts as part of the daily curriculum."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <PageBanner
          title="Primary School"
          subtitle="Grades 1-5: Building strong foundations for lifelong learning through joyful discovery"
          backgroundImage={indianStudentsClassroom}
        />

        {/* Introduction Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="animate-fade-in">
                <h2 className="text-4xl font-bold text-school-brown mb-6">Nurturing Young Minds</h2>
                <p className="text-lg text-elegant-light leading-relaxed mb-6">
                  The Primary School program at SJRPS-Rajajinagar (Grades 1–5) is designed to ignite curiosity and build strong academic foundations. 
                  Our focus is on joyful learning through stories, play, discovery, and creativity.
                </p>
                <p className="text-lg text-elegant-light leading-relaxed mb-6">
                  Students learn key concepts in languages, mathematics, science, and social studies while also participating in arts, music, 
                  and physical education. Emphasis is placed on communication, ethics, and emotional intelligence.
                </p>
                <div className="bg-gradient-to-r from-school-gold to-amber-400 text-white p-6 rounded-lg">
                  <p className="font-semibold text-lg">
                    "Every child is a unique flower that makes the garden of childhood beautiful."
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                    <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <p className="font-semibold text-school-brown">Story Time</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                    <Calculator className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <p className="font-semibold text-school-brown">Fun Math</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                    <Globe className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <p className="font-semibold text-school-brown">Science Lab</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                    <Palette className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <p className="font-semibold text-school-brown">Art Corner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subjects Section */}
        <section className="py-16 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-school-brown text-center mb-12">Core Subjects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {subjects.map((subject, index) => (
                <Card key={subject.name} className="text-center hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${subject.color}`}>
                      <subject.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-school-brown mb-2">{subject.name}</h3>
                    <p className="text-elegant-light text-sm">{subject.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-school-brown text-center mb-12">Core Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={feature.title} className="hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="bg-school-gold w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-school-brown mb-2">{feature.title}</h3>
                      <p className="text-elegant-light leading-relaxed">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Approach */}
        <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-school-brown mb-8">Our Learning Approach</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold text-school-brown mb-3">Play-Based Learning</h3>
                  <p className="text-elegant-light">Learning through games, activities, and exploration that make education enjoyable.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl mb-4">🤝</div>
                  <h3 className="text-xl font-bold text-school-brown mb-3">Collaborative Environment</h3>
                  <p className="text-elegant-light">Working together in groups to develop social skills and teamwork abilities.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl mb-4">📚</div>
                  <h3 className="text-xl font-bold text-school-brown mb-3">Continuous Assessment</h3>
                  <p className="text-elegant-light">Regular feedback and evaluation to track progress and support individual growth.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PrimarySchool;
