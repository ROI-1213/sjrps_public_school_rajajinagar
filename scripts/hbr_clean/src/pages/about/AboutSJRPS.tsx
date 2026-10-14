
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import TimelineSection from "@/components/TimelineSection";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Heart, Star, Globe, Users, Award, Calendar, Shield, Target, Trophy, Lightbulb, GraduationCap, Building } from "lucide-react";
import aboutBanner from "@/assets/about-banner.jpg";

const AboutSJRPS = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Smart Classrooms",
      description: "Interactive digital learning environments with modern technology and multimedia resources"
    },
    {
      icon: Users,
      title: "Dedicated Faculty",
      description: "Experienced educators committed to student success, personal growth, and academic excellence"
    },
    {
      icon: Heart,
      title: "Value Education",
      description: "Character building through comprehensive moral and ethical education programs"
    },
    {
      icon: Shield,
      title: "Safe Campus",
      description: "24/7 security, CCTV monitoring, and trained staff ensuring complete student safety"
    },
    {
      icon: Target,
      title: "Holistic Development",
      description: "Balanced focus on academics, sports, arts, and personality development"
    },
    {
      icon: Trophy,
      title: "Proven Track Record",
      description: "Consistent academic excellence with 95% success rate and numerous awards"
    }
  ];

  const values = [
    {
      icon: BookOpen,
      title: "Knowledge",
      description: "Fostering a love for learning and intellectual curiosity through innovative teaching methods"
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "Developing empathy and care for others, creating responsible global citizens"
    },
    {
      icon: Star,
      title: "Excellence",
      description: "Striving for the highest standards in academics, character, and all endeavors"
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Preparing students for success in an interconnected, multicultural world"
    }
  ];

  const milestones = [
    { 
      year: "1998", 
      title: "School Foundation", 
      description: "SJR HBR Layout established with 50 students and a vision for excellence",
      icon: <Building className="h-5 w-5 text-white" />
    },
    { 
      year: "2005", 
      title: "NAAC Accreditation", 
      description: "Achieved Grade 'A' recognition for outstanding academic standards",
      icon: <Award className="h-5 w-5 text-white" />
    },
    { 
      year: "2010", 
      title: "Smart Campus Initiative", 
      description: "Digital transformation with smart classrooms and modern technology",
      icon: <Lightbulb className="h-5 w-5 text-white" />
    },
    { 
      year: "2015", 
      title: "1000+ Alumni Milestone", 
      description: "Reached the milestone of 1000 successful graduates making global impact",
      icon: <GraduationCap className="h-5 w-5 text-white" />
    },
    { 
      year: "2020", 
      title: "Digital Education", 
      description: "Seamless transition to online learning during global pandemic",
      icon: <Globe className="h-5 w-5 text-white" />
    },
    { 
      year: "2024", 
      title: "Silver Jubilee", 
      description: "Celebrating 26 years of educational excellence and community impact",
      icon: <Trophy className="h-5 w-5 text-white" />
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Modern Banner with Parallax */}
        <PageBanner
          title="About SJR HBR Layout"
          subtitle="A Legacy of Educational Excellence Since 1998 - Where Values Meet Vision"
          backgroundImage={aboutBanner}
        />

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="animate-fade-in">
                <h2 className="text-4xl font-bold text-school-brown mb-6">Overview</h2>
                <div className="space-y-6 text-elegant leading-relaxed">
                  <p>
                    SJR School is a premier institution rooted in tradition yet 
                    driven by innovation. Established to nurture young minds with strong values and 
                    academic excellence, we provide a holistic learning experience that shapes confident, 
                    compassionate, and future-ready citizens.
                  </p>
                  <p>
                    Our school blends modern pedagogy with cultural richness, offering a vibrant environment 
                    for creativity, leadership, and discipline. We aim not just to teach, but to inspire 
                    every student to reach their fullest potential while staying grounded in ethical values.
                  </p>
                  <p>
                    With state-of-the-art facilities, experienced faculty, and a nurturing environment, 
                    we prepare our students not just for examinations, but for life itself. Our commitment 
                    to excellence is reflected in our continuous growth and the success of our alumni 
                    who are making their mark across the globe.
                  </p>
                  <div className="bg-gradient-to-r from-school-brown/10 to-school-gold/10 p-6 rounded-lg border-l-4 border-school-gold">
                    <blockquote className="text-school-brown font-medium italic">
                      "Where Excellence Meets Innovation - Shaping Tomorrow's Leaders Today"
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="relative animate-slide-in-right">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="School Building"
                  className="rounded-lg shadow-xl w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-medium">Modern facilities designed for 21st-century learning</p>
                </div>
              </div>
            </div>

        {/* Timeline Section for School Milestones */}
        <TimelineSection
          title="Our Legacy & Milestones"
          items={milestones}
          className="bg-gradient-to-b from-background to-secondary/20"
        />

            {/* Why Choose SJRPS-HBR */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-school-brown mb-8 text-center">Why Choose SJRPS-HBR?</h2>
              <p className="text-lg text-elegant text-center mb-12 max-w-3xl mx-auto">
                Discover what makes SJR HBR Layout the preferred choice for thousands of families seeking 
                quality education with strong moral foundations.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <Card key={feature.title} className="text-center hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in bg-gradient-to-br from-amber-50 to-orange-50 group">
                    <CardContent className="p-8">
                      <div className="bg-school-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-school-brown mb-4">{feature.title}</h3>
                      <p className="text-elegant-light leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* School Ethos */}
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-bold text-school-brown mb-8">Our Educational Philosophy</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-elegant leading-relaxed mb-8">
                  At SJR HBR Layout, education transcends textbooks and examinations. We believe in nurturing 
                  the complete individual - intellectually, emotionally, socially, and spiritually. Our 
                  approach combines the wisdom of traditional values with the innovation of modern pedagogy.
                </p>
                <div className="bg-gradient-to-r from-school-brown to-school-gold text-white p-8 rounded-lg mb-8">
                  <blockquote className="text-xl italic mb-4">
                    "Every child is a different kind of flower, and all together, they make this world a beautiful garden."
                  </blockquote>
                  <cite className="text-amber-200">- Our Educational Philosophy</cite>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <Calendar className="h-12 w-12 text-school-gold mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-school-brown mb-2">Daily Implementation</h4>
                    <p className="text-elegant-light">Values integrated into everyday learning experiences</p>
                  </div>
                  <div className="text-center">
                    <Users className="h-12 w-12 text-school-gold mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-school-brown mb-2">Community Focus</h4>
                    <p className="text-elegant-light">Building strong school-family partnerships</p>
                  </div>
                  <div className="text-center">
                    <Target className="h-12 w-12 text-school-gold mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-school-brown mb-2">Future Ready</h4>
                    <p className="text-elegant-light">Preparing students for tomorrow's challenges</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div>
              <h2 className="text-4xl font-bold text-school-brown mb-12 text-center">Our Core Values</h2>
              <p className="text-lg text-elegant text-center mb-12 max-w-3xl mx-auto">
                These fundamental principles guide every decision we make and every program we offer, 
                ensuring that our students develop both academic excellence and strong character.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <Card key={value.title} className="text-center hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in">
                    <CardContent className="p-6">
                      <div className="bg-school-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <value.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-school-brown mb-3">{value.title}</h3>
                      <p className="text-elegant-light">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 bg-gradient-to-b from-amber-50 to-orange-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-school-brown text-center mb-8">Our Achievements</h2>
            <p className="text-lg text-elegant text-center mb-12 max-w-3xl mx-auto">
              Recognition and accolades that reflect our commitment to excellence in education and 
              holistic development of our students.
            </p>
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <Award className="h-16 w-16 text-school-gold mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-school-brown mb-2">NAAC Grade 'A'</h3>
                <p className="text-elegant-light">Nationally accredited for academic excellence</p>
              </div>
              <div className="text-center">
                <Users className="h-16 w-16 text-school-gold mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-school-brown mb-2">1000+ Alumni</h3>
                <p className="text-elegant-light">Successful graduates making global impact</p>
              </div>
              <div className="text-center">
                <Star className="h-16 w-16 text-school-gold mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-school-brown mb-2">25+ Years</h3>
                <p className="text-elegant-light">Silver jubilee of educational excellence</p>
              </div>
              <div className="text-center">
                <Trophy className="h-16 w-16 text-school-gold mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-school-brown mb-2">95% Success</h3>
                <p className="text-elegant-light">Outstanding academic achievement rate</p>
              </div>
            </div>

            {/* Inspirational Quote */}
            <div className="mt-16 max-w-4xl mx-auto text-center">
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-school-gold">
                <blockquote className="text-2xl italic text-school-brown mb-4">
                  "Education rooted in values creates citizens rooted in purpose."
                </blockquote>
                <cite className="text-school-gold font-semibold">- SJRPS-HBR Educational Philosophy</cite>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutSJRPS;
