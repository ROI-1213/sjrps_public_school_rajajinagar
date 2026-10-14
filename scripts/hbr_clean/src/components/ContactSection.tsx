import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from "lucide-react";
import { SCHOOL_EMAILS, SCHOOL_LANDLINES } from "@/lib/siteInfo";
import { submitEnquiry } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import { FormEvent, useState } from "react";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const fields = {
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
    };

    setIsSubmitting(true);
    try {
      await submitEnquiry("home", fields);
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

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["SJR Public School, HBR Layout", "Kalyan Nagar", "Bengaluru – 560043"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: SCHOOL_LANDLINES.map((phone) => phone.text),
    },
    {
      icon: Mail,
      title: "Email Us",
      details: SCHOOL_EMAILS,
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon – Fri: 8:30 AM – 4:00 PM", "Saturday: 8:30 AM – 1:00 PM"],
    },
  ];

  return (
    <section className="py-14 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indian-green">Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold text-school-brown mt-2 mb-2 leading-tight">
            Get in <span className="text-indian-green">Touch</span>
          </h2>
          <p className="text-base text-elegant-light">We're here to help. Reach out with any questions or feedback.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Form */}
          <Card className="border-t-4 border-indian-green shadow-xl">
            <CardContent className="p-7">
              <h3 className="text-xl font-bold text-school-brown mb-5 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-indian-green" />
                Send us a Message
              </h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-school-brown text-sm font-medium">Name *</Label>
                    <Input id="name" name="name" required placeholder="Your full name" className="border-indian-green/30 focus:border-indian-green" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-school-brown text-sm font-medium">Phone</Label>
                    <Input id="phone" name="phone" placeholder="Your phone number" className="border-indian-green/30 focus:border-indian-green" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-school-brown text-sm font-medium">Email *</Label>
                  <Input id="email" name="email" type="email" required placeholder="you@example.com" className="border-indian-green/30 focus:border-indian-green" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-school-brown text-sm font-medium">Message *</Label>
                  <Textarea id="message" name="message" required placeholder="How can we help you?" rows={4} className="border-indian-green/30 focus:border-indian-green" />
                </div>
                <Button disabled={isSubmitting} className="w-full bg-indian-green hover:bg-indian-green/90 text-white py-3 font-semibold">
                  <Send className="mr-2 h-4 w-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 content-start">
            {contactInfo.map((info, i) => (
              <Card key={i} className="border border-indian-green/15 hover:border-indian-green/40 hover:shadow-lg transition-all">
                <CardContent className="p-5">
                  <div className="w-11 h-11 bg-indian-green/10 rounded-xl flex items-center justify-center mb-3">
                    <info.icon className="h-5 w-5 text-indian-green" />
                  </div>
                  <h4 className="font-bold text-school-brown mb-2 text-sm">{info.title}</h4>
                  {info.details.map((d, j) => (
                    <p key={j} className="text-elegant-light text-xs leading-relaxed">{d}</p>
                  ))}
                </CardContent>
              </Card>
            ))}
            <Card className="sm:col-span-2 overflow-hidden border border-indian-green/15">
              <CardContent className="p-0">
                <iframe
                  title="SJRPS-HBR Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1116172168886!2d77.6273901!3d13.028563499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1716fedc9cf9%3A0x4c89a89cb646ea8a!2sSjr%20Public%20School%2C%203rd%20Block%2C%20HBR%20Layout%2C%20Bengaluru%2C%20Karnataka%20560043!5e0!3m2!1sen!2sin!4v1780932637526!5m2!1sen!2sin"
                  width="100%"
                  height="240"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
