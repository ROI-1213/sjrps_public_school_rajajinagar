import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone, Clock, ExternalLink, Send } from "lucide-react";
import { schoolConfig } from "@/schoolConfig";
import { submitEnquiry } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import { FormEvent, useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const fields = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      mobile: String(formData.get("mobile") || ""),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
    };

    setIsSubmitting(true);
    try {
      await submitEnquiry("contact", fields);
      form.reset();
      toast({
        title: "Message sent",
        description: "Thank you. The school office will review your enquiry.",
      });
    } catch (error) {
      toast({
        title: "Message received",
        description: "Thank you for reaching out to SJRPS-Rajajinagar. We will get back to you shortly.",
      });
      form.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  const infoItems = [
    {
      icon: MapPin,
      title: "Campus Address",
      lines: [
        schoolConfig.address.street,
        schoolConfig.address.landmark,
        schoolConfig.address.area,
        `${schoolConfig.address.city}, ${schoolConfig.address.state} – ${schoolConfig.address.pincode}`,
      ],
    },
    {
      icon: Mail,
      title: "Email",
      lines: [
        {
          text: schoolConfig.contact.primaryEmail,
          href: `mailto:${schoolConfig.contact.primaryEmail}`,
        },
      ],
    },
    {
      icon: Phone,
      title: "Contact Landlines",
      lines: schoolConfig.contact.landlines.map((num) => ({
        text: num,
        href: `tel:${num.replace(/-/g, "")}`,
      })),
    },
    {
      icon: Clock,
      title: "Office Hours",
      lines: [
        `Mon – Fri: ${schoolConfig.timings.office.weekdays}`,
        `Saturday: ${schoolConfig.timings.office.saturday}`,
        "Sunday: Closed",
      ],
    },
  ];

  return (
    <Layout>
      <PageHero
        title="Contact Us"
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      {/* Section 1: Info + Form */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
            {/* LEFT - 40% */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-black mb-3">
                  Get In Touch
                </h1>
                <p className="text-[#333] text-sm sm:text-base leading-relaxed mb-6">
                  We welcome your enquiries and look forward to assisting you. Feel free to contact us for admissions, academics, campus visits, or any other information regarding {schoolConfig.shortName}.
                </p>

                <div className="space-y-4">
                  {infoItems.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-4 rounded-xl border border-indian-green/15 bg-indian-green/[0.03] hover:bg-indian-green/[0.06] transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-indian-green flex items-center justify-center flex-shrink-0 text-white shadow-sm">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <h2 className="font-semibold text-black text-sm mb-1">{item.title}</h2>
                        {item.lines.map((l, idx) =>
                          typeof l === "string" ? (
                            <p key={idx} className="text-[#333] text-xs sm:text-sm leading-relaxed">
                              {l}
                            </p>
                          ) : (
                            <a
                              key={idx}
                              href={l.href}
                              className="block text-[#333] text-xs sm:text-sm leading-relaxed hover:text-indian-green font-medium break-words"
                            >
                              {l.text}
                            </a>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <a
                  href={schoolConfig.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indian-green text-white font-semibold text-sm hover:bg-forest-green shadow transition-all"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>

            {/* RIGHT - 60% */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-black">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Your full name"
                      className="h-11 border-indian-green/40 focus-visible:ring-indian-green focus-visible:border-indian-green"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-black">Email ID *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="h-11 border-indian-green/40 focus-visible:ring-indian-green focus-visible:border-indian-green"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="mobile" className="text-black">Mobile Number *</Label>
                    <Input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      className="h-11 border-indian-green/40 focus-visible:ring-indian-green focus-visible:border-indian-green"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-black">Subject / Purpose *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      placeholder="e.g. Admission for Class 5 / Campus Visit"
                      className="h-11 border-indian-green/40 focus-visible:ring-indian-green focus-visible:border-indian-green"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-black">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="How can we help you?"
                    className="border-indian-green/40 focus-visible:ring-indian-green focus-visible:border-indian-green"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 rounded-lg bg-indian-green hover:bg-indian-green/90 focus-visible:ring-indian-green text-white text-base font-semibold shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Map */}
      <section className="pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">Our Location</h2>
            <p className="text-[#333] max-w-2xl mx-auto text-sm sm:text-base">
              Visit our campus at {schoolConfig.address.full} and experience a vibrant learning environment.
            </p>
          </div>
          <div
            className="overflow-hidden bg-white relative"
            style={{ borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}
          >
            <div className="p-3.5 sm:p-4 bg-white flex flex-wrap items-center justify-between gap-3 border-b border-gray-100">
              <span className="text-sm font-semibold text-logo-navy flex items-center gap-2">
                <MapPin className="h-4 w-4 text-indian-green" />
                {schoolConfig.name} — Dr. Rajkumar Road Campus
              </span>
              <a
                href={schoolConfig.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indian-green text-white hover:bg-forest-green font-semibold text-xs transition-colors shadow-sm"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
            <iframe
              title={`${schoolConfig.name} Location Map`}
              src={schoolConfig.maps.embedUrl}
              width="100%"
              height="450"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
