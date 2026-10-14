
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Trophy, Heart, Download, Star, Quote } from "lucide-react";
import indianStudentsAchievements from "@/assets/indian-students-achievements.jpg";

const Scholarship = () => {
  const scholarships = [
    { 
      title: "Merit-Based Scholarship", 
      icon: Award, 
      description: "For students scoring above 90%", 
      percentage: "Up to 50%",
      details: "Recognize academic excellence and encourage continued high performance in studies.",
      criteria: ["Minimum 90% in previous grade", "Consistent academic performance", "Good conduct certificate"]
    },
    { 
      title: "Need-Based Scholarship", 
      icon: Heart, 
      description: "For financially underprivileged students", 
      percentage: "Up to 75%",
      details: "Support deserving students who face financial challenges in pursuing quality education.",
      criteria: ["Family income certificate", "Academic merit (min 70%)", "Recommendation letter"]
    },
    { 
      title: "Talent Scholarships", 
      icon: Trophy, 
      description: "For excellence in arts, sports, and public speaking", 
      percentage: "Up to 40%",
      details: "Celebrate and nurture special talents in various co-curricular activities.",
      criteria: ["Portfolio/demonstration required", "Previous achievements", "Talent assessment test"]
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      grade: "Class 10",
      type: "Merit Scholar",
      quote: "The scholarship program has given me the confidence to dream big and work harder for my goals."
    },
    {
      name: "Arjun Kumar",
      grade: "Class 12",
      type: "Sports Scholar",
      quote: "SJRPS-HBR recognized my cricket talent and supported my journey. Now I'm playing at state level!"
    }
  ];

  const applicationSteps = [
    "Indicate scholarship interest in the admission form",
    "Submit supporting documents as per scholarship type",
    "Appear for scholarship interview or assessment test",
    "Await selection committee decision"
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <PageBanner
          title="Scholarship Programs"
          subtitle="At SJRPS-HBR, we recognize merit and support potential. Our scholarship programs aim to encourage academic excellence, leadership, and inclusivity."
          backgroundImage={indianStudentsAchievements}
        />

        {/* Scholarship Types */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-school-brown text-center mb-12">Types of Scholarships Offered</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {scholarships.map((scholarship, index) => (
                <div key={scholarship.title} className="group perspective-1000">
                  <div className="relative h-80 w-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                    {/* Front of card */}
                    <Card className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-white to-amber-50 hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                        <div className="bg-school-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                          <scholarship.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-school-brown mb-3">{scholarship.title}</h3>
                        <p className="text-elegant-light mb-4">{scholarship.description}</p>
                        <p className="text-school-gold font-bold text-2xl">{scholarship.percentage}</p>
                        <p className="text-sm text-school-light-brown mt-2">Hover to learn more</p>
                      </CardContent>
                    </Card>
                    
                    {/* Back of card */}
                    <Card className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-school-brown text-white">
                      <CardContent className="p-6 h-full flex flex-col justify-center">
                        <h3 className="text-lg font-bold mb-3 text-amber-200">{scholarship.title}</h3>
                        <p className="text-sm mb-4">{scholarship.details}</p>
                        <div className="text-sm">
                          <p className="font-semibold mb-2 text-amber-200">Eligibility:</p>
                          <ul className="space-y-1">
                            {scholarship.criteria.map((criterion, idx) => (
                              <li key={idx} className="text-xs">• {criterion}</li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Apply */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-school-brown mb-6">How to Apply</h2>
                <div className="space-y-4">
                  {applicationSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-school-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-elegant-light">{step}</p>
                    </div>
                  ))}
                </div>
                <Button className="mt-6 bg-school-gold hover:bg-school-brown text-white">
                  <Download className="h-4 w-4 mr-2" />
                  Download Scholarship Application Form
                </Button>
              </div>
              
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-school-brown mb-4">Important Deadlines</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-elegant-light">Application Opens:</span>
                      <span className="font-semibold text-elegant">January 15, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-elegant-light">Submission Deadline:</span>
                      <span className="font-semibold text-elegant">March 1, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-elegant-light">Assessment Period:</span>
                      <span className="font-semibold text-elegant">March 5-15, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-elegant-light">Results Announced:</span>
                      <span className="font-semibold text-school-gold">March 20, 2025</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-school-brown text-center mb-12">Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={testimonial.name} className="bg-gradient-to-br from-amber-50 to-orange-50 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-school-gold mb-4" />
                    <p className="text-elegant-light italic mb-4">"{testimonial.quote}"</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-school-brown">{testimonial.name}</p>
                        <p className="text-sm text-school-light-brown">{testimonial.grade}</p>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-school-gold mr-1" />
                        <span className="text-sm text-school-gold font-semibold">{testimonial.type}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Scholarship;
