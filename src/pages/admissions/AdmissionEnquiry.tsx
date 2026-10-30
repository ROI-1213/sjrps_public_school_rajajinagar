import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ExternalLink,
  QrCode,
  Mail,
  MapPin,
  Phone,
  Clock,
  Sparkles,
  CheckCircle2,
  FileText,
  School,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { schoolConfig } from "@/schoolConfig";

const ENQUIRY_FORM_URL =
  "https://corp47.myclassboard.com/OnlineEnquiryForm_New/B4E0210F-C2B5-4212-8B95-F4699561D8EA";

const AdmissionEnquiry = () => {
  return (
    <Layout>
      <PageHero
        title="Admission Enquiry"
        breadcrumbs={[
          { label: "Admissions", path: "/admissions" },
          { label: "Admission Enquiry" },
        ]}
      />

      {/* Main Feature Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-indian-green mb-3">
              Admissions Open 2026–27
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-logo-navy mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Enquiry for Admissions
            </h2>
            <div className="mx-auto h-1 w-20 bg-indian-green rounded-full mb-5" />
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              We welcome prospective parents and learners to take the first step towards an enriching academic journey at{" "}
              <strong>SJR Public School, Rajajinagar</strong>. Fill out the official online enquiry form below or scan the QR code.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left: Official Flyer */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 flex justify-center"
            >
              <div className="relative group max-w-md w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-border/50 bg-white">
                <img
                  src="/images/admissions/admission-enquiry.jpg"
                  alt="SJR Public School Rajajinagar - Enquiry for Admissions QR Code Flyer"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="p-4 bg-muted/40 text-center border-t border-border/50">
                  <p className="text-xs text-muted-foreground font-medium">
                    Official Admissions Enquiry Flyer &amp; QR Code
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: Actions & Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6"
            >
              {/* Highlight Action Card */}
              <Card className="rounded-2xl border-2 border-indian-green/30 bg-gradient-to-br from-indian-green/5 via-background to-golden-yellow/5 shadow-xl p-6 sm:p-8">
                <CardContent className="p-0 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-indian-green flex items-center justify-center text-white shrink-0 shadow-md">
                      <QrCode className="h-6 w-6" />
                    </div>
                    <div>
                      <h3
                        className="text-xl sm:text-2xl font-bold text-logo-navy"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Online Enquiry Portal
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Direct admission enquiry via ClassBoard
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-foreground/80 leading-relaxed">
                    You can either scan the QR code from the flyer with your smartphone or click the button below to open the official online enquiry form directly.
                  </p>

                  <div className="pt-2">
                    <Button
                      asChild
                      size="lg"
                      className="w-full bg-indian-green hover:bg-indian-green/90 text-white font-semibold py-6 text-base rounded-xl shadow-lg hover:shadow-xl transition-all"
                    >
                      <a
                        href={ENQUIRY_FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2"
                      >
                        <span>Fill Online Enquiry Form</span>
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-foreground/75">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-indian-green shrink-0" />
                      <span>Instant office receipt</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-indian-green shrink-0" />
                      <span>Pre-KG through Class 10</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-indian-green shrink-0" />
                      <span>Counselor callback</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-indian-green shrink-0" />
                      <span>Campus visit scheduling</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="rounded-2xl border border-border/80 bg-white p-6 shadow-sm space-y-4">
                <h4
                  className="font-bold text-logo-navy text-lg flex items-center gap-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  <School className="h-5 w-5 text-indian-green" />
                  <span>Campus Admission Office</span>
                </h4>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-indian-green shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Locate Us:</p>
                      <p className="text-muted-foreground">
                        1050/A, 4th M Block, SSI Area, Rajajinagar, Bengaluru – 560010
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-indian-green shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Branch Email:</p>
                      <a
                        href="mailto:prinicpalsjrphs@gmail.com"
                        className="text-indian-green hover:underline font-medium"
                      >
                        prinicpalsjrphs@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-indian-green shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Phone Helpline:</p>
                      <div className="flex flex-wrap gap-x-4 gap-y-1">
                        <a href="tel:08023388765" className="text-indian-green hover:underline">
                          080-23388765
                        </a>
                        <a href="tel:08023102070" className="text-indian-green hover:underline">
                          080-23102070
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-indian-green shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Office Visiting Hours:</p>
                      <p className="text-muted-foreground">
                        Mon – Fri: 9:00 AM – 4:00 PM | Sat: 9:00 AM – 1:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Next Steps Banner */}
      <section className="py-14 bg-indian-green text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-4">
          <Sparkles className="h-10 w-10 text-golden-yellow mx-auto" />
          <h3
            className="text-2xl md:text-3xl font-bold"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Explore the Complete Admission Process
          </h3>
          <p className="text-white/85 max-w-2xl mx-auto leading-relaxed">
            Understand the step-by-step admission roadmap, required documents, eligibility criteria, and fee structure.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-white text-indian-green hover:bg-golden-yellow hover:text-white font-semibold">
              <Link to="/admissions/admissions-process">
                <span>View Admission Process</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/admissions/fees-structure">
                <span>Fees Structure</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdmissionEnquiry;
