
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, FlaskConical, Calculator, Users, Target, Award, Lightbulb, Microscope } from "lucide-react";
import collaborativeLearning from "@/assets/collaborative-learning.jpg";

const SecondarySchool = () => {
  const features = [
    { 
      title: "Subject Specialist Teachers", 
      icon: Users, 
      description: "Expert educators with specialized knowledge in their respective subjects, ensuring depth and quality in learning."
    },
    { 
      title: "Advanced Laboratory Access", 
      icon: FlaskConical, 
      description: "Well-equipped science and computer labs that provide hands-on experience and practical learning opportunities."
    },
    { 
      title: "Project-Based Learning", 
      icon: Lightbulb, 
      description: "Collaborative projects that develop critical thinking, research skills, and real-world problem-solving abilities."
    },
    { 
      title: "Olympiad Preparation", 
      icon: Award, 
      description: "Specialized coaching and preparation for national and international academic competitions and olympiads."
    }
  ];

  const subjects = [
    { name: "Mathematics", icon: Calculator, color: "bg-blue-500" },
    { name: "Science", icon: Microscope, color: "bg-green-500" },
    { name: "English", icon: BookOpen, color: "bg-purple-500" },
    { name: "Social Studies", icon: Target, color: "bg-orange-500" }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <PageBanner
          title="Secondary School"
          subtitle="Grades 6-10: Developing critical thinking and academic excellence through specialized learning"
          backgroundImage={collaborativeLearning}
        />

        {/* Introduction Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-4xl font-bold text-school-brown mb-6">Transition to Excellence</h2>
                <p className="text-lg text-elegant-light leading-relaxed mb-6">
                  The Secondary School program (Grades 6–10) transitions learners into analytical thinkers. With subject-specialist 
                  teachers and access to labs, libraries, and co-curriculars, students develop academic depth and confidence.
                </p>
                <p className="text-lg text-elegant-light leading-relaxed mb-6">
                  This stage focuses on deeper knowledge, applied learning, team projects, and preparing students for board-level rigor. 
                  Our comprehensive approach ensures students are well-prepared for higher secondary education and beyond.
                </p>
                <div className="bg-gradient-to-r from-school-brown to-school-gold text-white p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Academic Approach:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Focused curriculum delivery with concept clarity</li>
                    <li>• Science & computer lab integration</li>
                    <li>• Group discussions, debates & Olympiad prep</li>
                    <li>• Holistic assessments and regular feedback</li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {subjects.map((subject, index) => (
                  <Card key={subject.name} className="text-center hover:shadow-lg transition-all duration-300 hover-scale">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${subject.color}`}>
                        <subject.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-bold text-school-brown">{subject.name}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-school-brown text-center mb-12">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={feature.title} className="hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in">
                  <CardContent className="p-6 flex items-start space-x-4">
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

        {/* Learning Environment */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-4xl font-bold text-school-brown mb-6">Learning Environment</h2>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-school-brown mb-3">🔬 Laboratory Learning</h3>
                    <p className="text-elegant-light">
                      State-of-the-art science laboratories equipped with modern instruments and safety equipment. 
                      Students conduct experiments, observe phenomena, and develop scientific thinking through hands-on experience.
                    </p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-school-brown mb-3">💻 Digital Integration</h3>
                    <p className="text-elegant-light">
                      Computer labs with latest technology and software for coding, research, and digital literacy. 
                      Students learn programming basics, digital presentation skills, and online research methods.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-school-brown mb-3">📚 Library Resources</h3>
                    <p className="text-elegant-light">
                      Extensive library collection with books, journals, and digital resources. 
                      Students develop research skills, reading habits, and independent learning capabilities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-b from-school-gold to-amber-400 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Student Achievements</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Award className="h-6 w-6" />
                    <span>National Science Olympiad Winners</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Target className="h-6 w-6" />
                    <span>State-level Math Competition</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <BookOpen className="h-6 w-6" />
                    <span>Inter-school Debate Champions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FlaskConical className="h-6 w-6" />
                    <span>Science Fair Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Assessment & Support */}
        <section className="py-16 bg-gradient-to-r from-amber-50 to-yellow-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-school-brown mb-8">Assessment & Support</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl mb-4">📊</div>
                  <h3 className="text-xl font-bold text-school-brown mb-3">Continuous Assessment</h3>
                  <p className="text-elegant-light">Regular evaluations through assignments, projects, and interactive assessments to track student progress.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl mb-4">👨‍🏫</div>
                  <h3 className="text-xl font-bold text-school-brown mb-3">Mentorship Program</h3>
                  <p className="text-elegant-light">Dedicated mentors guide students through academic challenges and personal development.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold text-school-brown mb-3">Board Exam Preparation</h3>
                  <p className="text-elegant-light">Comprehensive preparation for board examinations with mock tests and revision programs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SecondarySchool;
