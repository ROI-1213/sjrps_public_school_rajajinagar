import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, BookOpen, Heart, GraduationCap, Target, Star, Shield, Crown, Building } from "lucide-react";
import boardMeeting from "@/assets/board-meeting.jpg";

const BoardMembers = () => {
  const boardMembers = [
    {
      name: "Dr. S. Vishwanathan",
      position: "Chairperson",
      background: "Former Vice-Chancellor, Karnataka University",
      expertise: "Educational Administration & Policy",
      tenure: "2018 - Present",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Mrs. Kamala Devi",
      position: "Vice Chairperson",
      background: "Retired Principal, Government College",
      expertise: "Academic Excellence & Quality Assurance",
      tenure: "2019 - Present",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Mr. Vishwanath Reddy",
      position: "Secretary",
      background: "Educational Trust Management",
      expertise: "Strategic Planning & Development",
      tenure: "2015 - Present",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "CA Rajesh Gupta",
      position: "Treasurer",
      background: "Chartered Accountant & Financial Advisor",
      expertise: "Financial Management & Audit",
      tenure: "2017 - Present",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Dr. Priya Menon",
      position: "Academic Advisory Member",
      background: "Professor of Education, Bengaluru University",
      expertise: "Curriculum Development & Research",
      tenure: "2020 - Present",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Mr. Sunil Krishna",
      position: "Community Representative",
      background: "Social Worker & Education Advocate",
      expertise: "Community Engagement & Outreach",
      tenure: "2019 - Present",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  const responsibilities = [
    {
      icon: Target,
      title: "Strategic Direction",
      description: "Setting long-term vision and mission for the institution's growth and development"
    },
    {
      icon: Shield,
      title: "Policy Governance",
      description: "Establishing policies that ensure quality education and institutional integrity"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Monitoring academic standards and ensuring continuous improvement in all areas"
    },
    {
      icon: Building,
      title: "Infrastructure Development",
      description: "Overseeing campus development and facility enhancement projects"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <PageBanner
          title="Board of Members"
          subtitle="Distinguished leaders who shape the strategic direction and uphold our mission"
          backgroundImage={boardMeeting}
        />

        {/* Board Introduction */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-school-brown mb-6">Governance & Leadership</h2>
              <p className="text-lg text-elegant leading-relaxed">
                The SJRPS-HBR Board consists of respected educationists and community leaders who shape the strategic 
                direction and uphold the mission of our institution. Their wisdom and oversight ensure our school 
                continuously grows with purpose and integrity, maintaining the highest standards of educational 
                excellence while staying true to our core values.
              </p>
            </div>
          </div>
        </section>

        {/* Board Members Grid */}
        <section className="py-16 bg-gradient-to-b from-amber-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardMembers.map((member, index) => (
                <Card key={member.name} className="hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in bg-white group">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-sm font-medium">{member.expertise}</p>
                      </div>
                      {/* Position Badge */}
                      <div className="absolute top-4 right-4 bg-school-gold text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {member.position}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-school-brown mb-2">{member.name}</h3>
                      <p className="text-school-gold font-semibold mb-2">{member.position}</p>
                      <p className="text-elegant-light text-sm mb-3 leading-relaxed">{member.background}</p>
                      
                      {/* Details */}
                      <div className="space-y-2 text-sm">
                        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-3 rounded-lg border-l-4 border-school-gold">
                          <div className="flex items-center gap-2 mb-1">
                            <Target className="h-4 w-4 text-school-gold" />
                            <span className="font-medium text-school-brown">Expertise</span>
                          </div>
                          <p className="text-xs text-elegant-light">{member.expertise}</p>
                        </div>
                        <div className="flex items-center gap-2 text-elegant-light">
                          <Crown className="h-4 w-4 text-school-gold" />
                          <span className="text-xs">Tenure: {member.tenure}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Board Responsibilities */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-school-brown mb-8">Board Responsibilities</h2>
              <p className="text-lg text-elegant mb-12 max-w-3xl mx-auto">
                Our Board of Members shoulders the responsibility of guiding the institution towards 
                excellence while ensuring transparency, accountability, and adherence to our educational mission.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {responsibilities.map((responsibility, index) => (
                  <Card key={responsibility.title} className="hover:shadow-xl transition-all duration-300 hover-scale">
                    <CardContent className="p-6 text-center">
                      <responsibility.icon className="h-12 w-12 text-school-gold mx-auto mb-4" />
                      <h3 className="text-lg font-bold text-school-brown mb-3">{responsibility.title}</h3>
                      <p className="text-elegant-light text-sm leading-relaxed">{responsibility.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-school-brown to-school-gold text-white p-8 rounded-lg">
                <blockquote className="text-xl italic mb-4">
                  "Good governance is the cornerstone of educational excellence. Our Board is committed to 
                  providing the strategic direction and oversight necessary for institutional growth and integrity."
                </blockquote>
                <cite className="text-amber-200">- SJRPS-HBR Board Philosophy</cite>
              </div>
            </div>
          </div>
        </section>

        {/* Board Achievements */}
        <section className="py-16 bg-gradient-to-b from-amber-50 to-orange-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-school-brown text-center mb-8">Governance Achievements</h2>
            <p className="text-lg text-elegant text-center mb-12 max-w-3xl mx-auto">
              Under the guidance of our distinguished Board, SJRPS-HBR has achieved numerous milestones 
              in educational excellence and institutional development.
            </p>
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <GraduationCap className="h-16 w-16 text-school-gold mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-school-brown mb-2">NAAC Grade 'A'</h3>
                <p className="text-elegant-light">Achieved under board's strategic guidance</p>
              </div>
              <div className="text-center">
                <Building className="h-16 w-16 text-school-gold mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-school-brown mb-2">Infrastructure</h3>
                <p className="text-elegant-light">Modern facilities and campus expansion</p>
              </div>
              <div className="text-center">
                <Award className="h-16 w-16 text-school-gold mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-school-brown mb-2">Quality Programs</h3>
                <p className="text-elegant-light">Innovative educational initiatives launched</p>
              </div>
              <div className="text-center">
                <Users className="h-16 w-16 text-school-gold mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-school-brown mb-2">Community Impact</h3>
                <p className="text-elegant-light">Strong community engagement programs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Board Vision */}
        <section className="py-16 bg-gradient-to-r from-school-brown to-school-gold text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <Crown className="h-16 w-16 mx-auto mb-6 text-amber-200" />
              <h2 className="text-3xl font-bold mb-6">Our Commitment to Excellence</h2>
              <p className="text-xl text-amber-200 mb-8 max-w-2xl mx-auto">
                The Board remains steadfast in its commitment to providing visionary leadership, 
                ensuring transparency, and maintaining the highest standards of educational excellence.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Shield className="h-12 w-12 mx-auto mb-4 text-amber-200" />
                  <h3 className="text-xl font-bold mb-2">Transparency</h3>
                  <p className="text-amber-200">Open governance and accountability</p>
                </div>
                <div className="text-center">
                  <Target className="h-12 w-12 mx-auto mb-4 text-amber-200" />
                  <h3 className="text-xl font-bold mb-2">Vision</h3>
                  <p className="text-amber-200">Strategic direction and planning</p>
                </div>
                <div className="text-center">
                  <Heart className="h-12 w-12 mx-auto mb-4 text-amber-200" />
                  <h3 className="text-xl font-bold mb-2">Integrity</h3>
                  <p className="text-amber-200">Ethical leadership and values</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BoardMembers;