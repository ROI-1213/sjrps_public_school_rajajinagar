
import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, CreditCard, Award, Calendar, Sparkles, QrCode, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import indianSchoolEntrance from "@/assets/indian-school-entrance.jpg";

const ENQUIRY_FORM_URL =
  "https://corp47.myclassboard.com/OnlineEnquiryForm_New/B4E0210F-C2B5-4212-8B95-F4699561D8EA";

const Admissions = () => {
  const sections = [
    {
      title: "Admission Enquiry",
      description: "Scan QR code or fill out the official online admission enquiry form",
      link: "/admissions/enquiry",
      icon: QrCode,
      color: "bg-amber-50/70 border-2 border-amber-200"
    },
    {
      title: "Application Process",
      description: "Step-by-step guide to applying for admission",
      link: "/admissions/admissions-process",
      icon: FileText,
      color: "bg-blue-50"
    },
    {
      title: "Fee Structure",
      description: "Transparent fee structure and payment options",
      link: "/admissions/fees-structure",
      icon: CreditCard,
      color: "bg-green-50"
    },
    {
      title: "Scholarships",
      description: "Merit and need-based scholarship opportunities",
      link: "/admissions/scholarship",
      icon: Award,
      color: "bg-purple-50"
    },
    {
      title: "Important Dates",
      description: "Key dates and deadlines for admissions",
      link: "/admissions/dates",
      icon: Calendar,
      color: "bg-amber-50"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <PageBanner
          title="Admissions"
          subtitle="Join our community of learners and achieve academic excellence"
          backgroundImage={indianSchoolEntrance}
        />

        {/* Featured Online Admission Enquiry Banner */}
        <section className="pt-12 pb-4">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="rounded-2xl border-2 border-indian-green/30 bg-gradient-to-br from-indian-green/10 via-white to-golden-yellow/10 p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center gap-6 justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-indian-green text-white flex items-center justify-center shrink-0 shadow-lg">
                  <QrCode className="h-8 w-8" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-indian-green">
                    Admissions Open 2026–27
                  </span>
                  <h3
                    className="text-2xl sm:text-3xl font-bold text-logo-navy mt-0.5"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Online Admission Enquiry
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 max-w-xl">
                    Scan the QR code flyer or fill the online enquiry form to connect directly with the SJRPS-Rajajinagar admissions office.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 w-full md:w-auto shrink-0 justify-end">
                <Button asChild size="lg" className="bg-indian-green hover:bg-indian-green/90 text-white font-semibold">
                  <a href={ENQUIRY_FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <span>Fill Enquiry Form</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-indian-green/30 text-indian-green hover:bg-indian-green/5">
                  <Link to="/admissions/enquiry" className="inline-flex items-center gap-2">
                    <span>View QR Flyer</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections.map((section, index) => (
                <Card key={section.title} className={`${section.color} hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in`}>
                  <CardContent className="p-8 text-center">
                    <div className="bg-school-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <section.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-school-brown mb-4">{section.title}</h3>
                    <p className="text-elegant-light mb-6 leading-relaxed">{section.description}</p>
                    <Link to={section.link}>
                      <Button className="bg-school-brown hover:bg-school-gold text-white">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Lifelong Partnership Commitment Button */}
        <section className="pb-16 pt-2 bg-background">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="inline-flex items-center justify-center gap-3 px-6 py-4 sm:px-10 sm:py-5 rounded-full bg-indian-green text-white shadow-xl hover:shadow-2xl transition-all duration-300 max-w-3xl text-center border-2 border-saffron-orange/40 hover:scale-[1.01] select-none">
              <Sparkles className="h-5 w-5 text-golden-yellow shrink-0 hidden sm:block" />
              <p className="text-xs sm:text-sm md:text-base font-semibold leading-relaxed tracking-wide">
                "Admissions at SJRPS-Rajajinagar are not just about enrolment — they are the beginning of a lifelong partnership in your child's growth and success."
              </p>
              <Sparkles className="h-5 w-5 text-golden-yellow shrink-0 hidden sm:block" />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Admissions;
