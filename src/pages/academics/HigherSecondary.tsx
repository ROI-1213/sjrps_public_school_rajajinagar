
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FlaskConical, Calculator, BookOpen, TrendingUp, Users, GraduationCap } from "lucide-react";
import classroomTech from "@/assets/classroom-tech.jpg";

const HigherSecondary = () => {
  const streams = [
    {
      id: "science",
      title: "Science Stream",
      icon: FlaskConical,
      subjects: ["Physics", "Chemistry", "Biology", "Mathematics"],
      description: "Comprehensive science education preparing students for medical and engineering entrance exams.",
      careers: ["Doctor", "Engineer", "Researcher", "Biotechnologist", "Pharmacist"],
      color: "bg-blue-500"
    },
    {
      id: "commerce",
      title: "Commerce Stream", 
      icon: TrendingUp,
      subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics/Statistics"],
      description: "Business and finance focused curriculum for future entrepreneurs and commerce professionals.",
      careers: ["CA/CS", "Business Analyst", "Entrepreneur", "Banker", "Financial Advisor"],
      color: "bg-green-500"
    },
    {
      id: "humanities",
      title: "Humanities Stream",
      icon: BookOpen,
      subjects: ["History", "Geography", "Political Science", "Psychology", "Sociology"],
      description: "Liberal arts education fostering critical thinking and understanding of human society.",
      careers: ["Civil Servant", "Journalist", "Lawyer", "Psychologist", "Social Worker"],
      color: "bg-purple-500"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <PageBanner
          title="Higher Secondary"
          subtitle="Grades 11-12: Specialized streams for higher education preparation and career development"
          backgroundImage={classroomTech}
        />

        {/* Introduction */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold text-school-brown mb-6">Academic Specialization</h2>
              <p className="text-lg text-elegant-light leading-relaxed mb-8">
                Our Higher Secondary program (Grades 11–12) provides students with academic specialization while preparing them 
                for national-level entrance exams and future careers. Experienced faculty, advanced labs, and individualized 
                mentoring ensure that every learner receives the support needed to succeed in both academics and life.
              </p>
              <div className="bg-gradient-to-r from-school-brown to-school-gold text-white p-6 rounded-lg">
                <p className="text-lg font-semibold">
                  🎯 Career Counselling & University Prep Support included in all streams
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Streams Tabs */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="science" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="science" className="text-base">📘 Science</TabsTrigger>
                <TabsTrigger value="commerce" className="text-base">📊 Commerce</TabsTrigger>
                <TabsTrigger value="humanities" className="text-base">📜 Humanities</TabsTrigger>
              </TabsList>
              
              {streams.map((stream) => (
                <TabsContent key={stream.id} value={stream.id} className="mt-8">
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="grid lg:grid-cols-2 gap-0">
                        <div className="p-8 bg-white">
                          <div className="flex items-center mb-6">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${stream.color} mr-4`}>
                              <stream.icon className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold text-school-brown">{stream.title}</h3>
                          </div>
                          <p className="text-lg text-elegant-light mb-6 leading-relaxed">
                            {stream.description}
                          </p>
                          <div className="mb-6">
                            <h4 className="text-xl font-bold text-school-brown mb-3">Core Subjects:</h4>
                            <div className="grid grid-cols-2 gap-2">
                              {stream.subjects.map((subject, index) => (
                                <div key={index} className="bg-gray-100 px-3 py-2 rounded-lg text-sm font-medium text-school-brown">
                                  {subject}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className={`p-8 ${stream.color} text-white`}>
                          <h4 className="text-2xl font-bold mb-4">Career Opportunities</h4>
                          <div className="space-y-3">
                            {stream.careers.map((career, index) => (
                              <div key={index} className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <span className="text-lg">{career}</span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-8 p-4 bg-white/20 rounded-lg">
                            <p className="text-sm">
                              <strong>Special Focus:</strong> Entrance exam preparation, practical training, 
                              and industry exposure to ensure career readiness.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Support Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-school-brown text-center mb-12">Student Support Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-xl transition-all duration-300 hover-scale">
                <CardContent className="p-6">
                  <div className="bg-school-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-school-brown mb-3">Mentorship Program</h3>
                  <p className="text-elegant-light">
                    Dedicated faculty mentors guide students through academic challenges and career planning decisions.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-xl transition-all duration-300 hover-scale">
                <CardContent className="p-6">
                  <div className="bg-school-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-school-brown mb-3">Entrance Exam Prep</h3>
                  <p className="text-elegant-light">
                    Specialized coaching for JEE, NEET, CET, and other competitive entrance examinations.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-xl transition-all duration-300 hover-scale">
                <CardContent className="p-6">
                  <div className="bg-school-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-school-brown mb-3">University Guidance</h3>
                  <p className="text-elegant-light">
                    Comprehensive counseling for college applications, scholarship opportunities, and career pathways.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-school-brown mb-6">Advanced Facilities</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-school-gold rounded-full"></div>
                    <p className="text-lg text-elegant-light">Well-equipped laboratories for practical learning</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-school-gold rounded-full"></div>
                    <p className="text-lg text-elegant-light">Digital classrooms with smart boards and projectors</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-school-gold rounded-full"></div>
                    <p className="text-lg text-elegant-light">Comprehensive library with reference materials</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-school-gold rounded-full"></div>
                    <p className="text-lg text-elegant-light">Computer labs with internet connectivity</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-school-gold rounded-full"></div>
                    <p className="text-lg text-elegant-light">Dedicated spaces for group study and discussions</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-school-brown mb-4">Academic Excellence</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-elegant-light">Board Exam Pass Rate</span>
                    <span className="font-bold text-school-gold text-xl">98%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-elegant-light">Entrance Exam Success</span>
                    <span className="font-bold text-school-gold text-xl">85%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-elegant-light">University Placements</span>
                    <span className="font-bold text-school-gold text-xl">92%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HigherSecondary;
