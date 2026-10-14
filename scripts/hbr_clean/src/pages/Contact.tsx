import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone } from "lucide-react";
import { SCHOOL_EMAILS, SCHOOL_LANDLINES } from "@/lib/siteInfo";
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
        title: "Unable to send message",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const infoItems = [
    {
      icon: MapPin,
      title: "Address",
      lines: [
        "No. 3, 5th Cross, 7th Main Road,",
        "1st Stage, 3rd Block,",
        "Kalyan Nagar,",
        "Bengaluru, Karnataka – 560043",
      ],
    },
    {
      icon: Mail,
      title: "Email",
      lines: SCHOOL_EMAILS.map((email) => ({ text: email, href: `mailto:${email}` })),
    },
    {
      icon: Phone,
      title: "Landline",
      lines: SCHOOL_LANDLINES.map((l) => ({ text: l.text, href: `tel:${l.tel}` })),
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
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-6 sm:p-8 flex flex-col">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">
                Get In Touch
              </h2>
              <p className="text-[#333] text-sm sm:text-base leading-relaxed mb-6">
                We welcome your enquiries and look forward to assisting you. Feel free to contact us for admissions, academics, facilities, or any other information regarding SJRPS-HBR.
              </p>

              <div className="space-y-4 flex-1">
                {infoItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-xl border border-indian-green/15 bg-indian-green/[0.03] hover:bg-indian-green/[0.06] transition-colors"
                  >
                    <div className="w-11 h-11 rounded-full bg-indian-green flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-black mb-1">{item.title}</h3>
                      {item.lines.map((l, idx) =>
                        typeof l === "string" ? (
                          <p key={idx} className="text-[#333] text-sm leading-relaxed">
                            {l}
                          </p>
                        ) : (
                          <a
                            key={idx}
                            href={l.href}
                            className="block text-[#333] text-sm leading-relaxed hover:text-indian-green break-words"
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

            {/* RIGHT - 60% */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-black">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      className="h-11 border-indian-green/40 focus-visible:ring-indian-green focus-visible:border-indian-green"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-black">Email ID</Label>
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
                    <Label htmlFor="mobile" className="text-black">Mobile Number</Label>
                    <Input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      placeholder="10-digit mobile"
                      className="h-11 border-indian-green/40 focus-visible:ring-indian-green focus-visible:border-indian-green"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-black">Purpose</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Purpose"
                      className="h-11 border-indian-green/40 focus-visible:ring-indian-green focus-visible:border-indian-green"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-black">Message</Label>
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
                  className="w-full h-12 rounded-lg bg-indian-green hover:bg-indian-green/90 focus-visible:ring-indian-green text-white text-base font-semibold"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
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
              Visit our campus and experience a vibrant learning environment designed to nurture academic excellence and holistic development.
            </p>
          </div>
          <div
            className="overflow-hidden bg-white"
            style={{ borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}
          >
            <iframe
              title="SJRPS-HBR Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1116172168886!2d77.6273901!3d13.028563499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1716fedc9cf9%3A0x4c89a89cb646ea8a!2sSjr%20Public%20School%2C%203rd%20Block%2C%20HBR%20Layout%2C%20Bengaluru%2C%20Karnataka%20560043!5e0!3m2!1sen!2sin!4v1780932637526!5m2!1sen!2sin"
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
