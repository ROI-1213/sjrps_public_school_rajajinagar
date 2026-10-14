
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, X } from "lucide-react";
import { useState } from "react";
import indianFacultyGroup from "@/assets/indian-faculty-group.jpg";
import facultyPriyaSharma from "@/assets/faculty-priya-sharma.jpg";
import facultyRajeshKumar from "@/assets/faculty-rajesh-kumar.jpg";
import facultySunitaReddy from "@/assets/faculty-sunita-reddy.jpg";
import facultyArjunPatel from "@/assets/faculty-arjun-patel.jpg";
import facultyKavyaNair from "@/assets/faculty-kavya-nair.jpg";
import facultySureshGupta from "@/assets/faculty-suresh-gupta.jpg";

const Faculty = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const faculty = [
    {
      id: "priya-sharma",
      name: "Dr. Priya Sharma",
      subject: "English Literature",
      designation: "Department Head - Languages",
      qualification: "Ph.D. English",
      experience: "15 years",
      image: facultyPriyaSharma,
      description: "Passionate educator with expertise in contemporary literature and creative writing."
    },
    {
      id: "rajesh-kumar",
      name: "Prof. Rajesh Kumar",
      subject: "Mathematics",
      designation: "Senior Faculty - Mathematics",
      qualification: "M.Sc. Mathematics",
      experience: "20 years",
      image: facultyRajeshKumar,
      description: "Expert in advanced mathematics with a focus on problem-solving methodologies."
    },
    {
      id: "anita-reddy",
      name: "Dr. Anita Reddy",
      subject: "Physics",
      designation: "Department Head - Sciences",
      qualification: "Ph.D. Physics",
      experience: "12 years",
      image: facultySunitaReddy,
      description: "Research-focused physicist specializing in quantum mechanics and laboratory innovation."
    },
    {
      id: "suresh-menon",
      name: "Prof. Suresh Menon",
      subject: "Chemistry",
      designation: "Senior Faculty - Chemistry",
      qualification: "M.Sc. Chemistry",
      experience: "18 years",
      image: facultyArjunPatel,
      description: "Experienced chemistry educator with expertise in organic and analytical chemistry."
    },
    {
      id: "meera-krishna",
      name: "Ms. Meera Krishna",
      subject: "Social Studies",
      designation: "Faculty - Social Sciences",
      qualification: "M.A. History",
      experience: "10 years",
      image: facultyKavyaNair,
      description: "Dynamic educator passionate about making history and geography engaging for students."
    },
    {
      id: "amit-shah",
      name: "Mr. Amit Shah",
      subject: "Computer Science",
      designation: "Faculty - Technology",
      qualification: "B.Tech Computer Science",
      experience: "8 years",
      image: facultySureshGupta,
      description: "Tech enthusiast focusing on programming fundamentals and digital literacy."
    }
  ];

  const handleCardClick = (facultyId: string) => {
    if (expandedCard === facultyId) {
      setExpandedCard(null);
    } else {
      setExpandedCard(facultyId);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <PageBanner
          title="Our Faculty"
          subtitle="Meet our dedicated educators committed to nurturing young minds"
          backgroundImage={indianFacultyGroup}
        />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {faculty.map((member) => (
                <div key={member.id} className="relative">
                  <Card 
                    className={`cursor-pointer transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-fade-in ${
                      expandedCard === member.id ? 'ring-2 ring-school-gold shadow-2xl' : ''
                    }`}
                    onClick={() => handleCardClick(member.id)}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-school-light-brown/20">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-school-brown mb-2">{member.name}</h3>
                      <p className="text-school-gold font-semibold mb-2">{member.subject}</p>
                      <div className="flex items-center justify-center mb-2">
                        <GraduationCap className="h-4 w-4 text-elegant-light mr-1" />
                        <p className="text-elegant-light text-sm">{member.qualification}</p>
                      </div>
                      <p className="text-elegant-light text-sm">{member.experience}</p>
                      
                      {/* Click indicator */}
                      <div className="mt-4 text-xs text-school-gold/70 font-medium">
                        Click to {expandedCard === member.id ? 'collapse' : 'view details'}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Expanded Details Panel */}
                  <div 
                    className={`absolute top-full left-0 right-0 z-10 mt-2 transition-all duration-500 ease-out transform ${
                      expandedCard === member.id 
                        ? 'opacity-100 translate-y-0 visible' 
                        : 'opacity-0 -translate-y-4 invisible'
                    }`}
                  >
                    <Card className="bg-gradient-to-br from-white to-amber-50 border-school-gold/30 shadow-xl">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="text-lg font-bold text-school-brown mb-1">
                              {member.name}
                            </h4>
                            <p className="text-school-gold font-semibold text-sm">
                              {member.designation}
                            </p>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedCard(null);
                            }}
                            className="text-school-brown/60 hover:text-school-brown transition-colors p-1"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-center text-sm text-elegant-light">
                            <span className="font-medium mr-2">Subject:</span>
                            <span>{member.subject}</span>
                          </div>
                          <div className="flex items-center text-sm text-elegant-light">
                            <span className="font-medium mr-2">Experience:</span>
                            <span>{member.experience}</span>
                          </div>
                          <div className="flex items-center text-sm text-elegant-light">
                            <span className="font-medium mr-2">Qualification:</span>
                            <span>{member.qualification}</span>
                          </div>
                          <p className="text-sm text-elegant-light mt-3 italic">
                            "{member.description}"
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Faculty;
