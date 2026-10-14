
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, AlertCircle, Download, Bell } from "lucide-react";
import admissionsBanner from "@/assets/admissions-banner.jpg";

const ImportantDates = () => {
  const admissionTimeline = [
    { 
      event: "Admission Opens", 
      date: "January 15, 2025",
      status: "upcoming",
      description: "Online and offline application forms become available"
    },
    { 
      event: "Application Deadline", 
      date: "March 10, 2025",
      status: "deadline",
      description: "Last date to submit completed application forms"
    },
    { 
      event: "Assessment/Interaction Rounds", 
      date: "March 15-25, 2025",
      status: "upcoming",
      description: "Student interaction sessions and aptitude assessments"
    },
    { 
      event: "Admission Confirmation", 
      date: "March 30, 2025",
      status: "upcoming",
      description: "Final admission list announcement and fee payment"
    },
    { 
      event: "First Day of School", 
      date: "June 3, 2025",
      status: "academic",
      description: "Academic session begins for all grades"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'deadline': return 'bg-red-100 border-red-300 text-red-700';
      case 'upcoming': return 'bg-blue-100 border-blue-300 text-blue-700';
      case 'academic': return 'bg-green-100 border-green-300 text-green-700';
      default: return 'bg-gray-100 border-gray-300 text-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'deadline': return AlertCircle;
      case 'upcoming': return Clock;
      case 'academic': return Calendar;
      default: return Calendar;
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <PageBanner
          title="Important Dates"
          subtitle="Stay updated with the academic calendar and admission milestones for the 2024-25 academic year"
          backgroundImage={admissionsBanner}
        />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-school-brown mb-4">Admission Timeline 2024-25</h2>
              <p className="text-elegant-light max-w-2xl mx-auto">
                Mark your calendar with these important dates. Late admissions may be considered based on seat availability.
              </p>
            </div>

            {/* Timeline Layout */}
            <div className="max-w-4xl mx-auto">
              {admissionTimeline.map((item, index) => (
                <div key={item.event} className="relative">
                  {/* Timeline line */}
                  {index < admissionTimeline.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-24 bg-school-gold/30"></div>
                  )}
                  
                  <div className="flex items-start space-x-6 mb-8">
                    {/* Timeline dot with icon */}
                    <div className="flex-shrink-0">
                      <div className="bg-school-gold w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                        {(() => {
                          const IconComponent = getStatusIcon(item.status);
                          return <IconComponent className="h-8 w-8 text-white" />;
                        })()}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <Card className="flex-1 hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div className="mb-4 md:mb-0">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-xl font-bold text-school-brown">{item.event}</h3>
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(item.status)}`}>
                                {item.status.toUpperCase()}
                              </span>
                            </div>
                            <p className="text-elegant-light mb-2">{item.description}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-school-gold">{item.date}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-xl transition-all duration-300 hover-scale">
                <CardContent className="p-6">
                  <Download className="h-12 w-12 text-school-gold mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-school-brown mb-3">Download Calendar</h3>
                  <p className="text-elegant-light mb-4">Get the complete academic calendar on your device</p>
                  <Button variant="outline" className="border-school-gold text-school-brown hover:bg-school-gold hover:text-white">
                    Download .ics File
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 hover-scale">
                <CardContent className="p-6">
                  <Bell className="h-12 w-12 text-school-gold mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-school-brown mb-3">Set Reminders</h3>
                  <p className="text-elegant-light mb-4">Never miss an important deadline</p>
                  <Button variant="outline" className="border-school-gold text-school-brown hover:bg-school-gold hover:text-white">
                    Add to Google Calendar
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 hover-scale">
                <CardContent className="p-6">
                  <AlertCircle className="h-12 w-12 text-school-gold mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-school-brown mb-3">Stay Updated</h3>
                  <p className="text-elegant-light mb-4">Get notifications for any date changes</p>
                  <Button className="bg-school-gold hover:bg-school-brown text-white">
                    Subscribe to Updates
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-school-brown mb-6 text-center">Important Notes</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-school-brown mb-2">Late Admissions</h4>
                    <p className="text-elegant-light text-sm">
                      Late admissions may be considered based on seat availability. Additional documentation may be required.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-school-brown mb-2">Document Verification</h4>
                    <p className="text-elegant-light text-sm">
                      All original documents must be presented during the admission confirmation process.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-school-brown mb-2">Fee Payment</h4>
                    <p className="text-elegant-light text-sm">
                      First-term fees must be paid within 7 days of admission confirmation to secure the seat.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-school-brown mb-2">Contact Support</h4>
                    <p className="text-elegant-light text-sm">
                      For any queries regarding dates or admission process, contact our admissions office.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ImportantDates;
