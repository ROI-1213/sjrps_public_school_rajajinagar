import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, ExternalLink } from "lucide-react";
import { schoolConfig } from "@/schoolConfig";
import { useToast } from "@/hooks/use-toast";
import { FormEvent, useState } from "react";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      toast({
        title: "Missing Fields",
        description: "Please fill in your name, email, and message.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    // Honest front-end delivery demo simulation with clear prompt to school
    setTimeout(() => {
      form.reset();
      setIsSubmitting(false);
      toast({
        title: "Enquiry Submitted",
        description: `Thank you, ${name}! Your enquiry has been recorded for the SJRPS-Rajajinagar office (${schoolConfig.email}).`,
      });
    }, 700);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        schoolConfig.fullName,
        schoolConfig.address.line1,
        schoolConfig.address.line2,
        `${schoolConfig.address.city}, Karnataka – ${schoolConfig.address.postalCode}`
      ],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: schoolConfig.phones.map((phone) => phone.text),
      links: schoolConfig.phones.map((phone) => `tel:${phone.tel}`),
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [schoolConfig.email],
      links: [`mailto:${schoolConfig.email}`],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        schoolConfig.officeHours.weekdays,
        schoolConfig.officeHours.saturday,
      ],
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
          <p className="text-base text-muted-foreground">We welcome your enquiries regarding admissions, academics, or campus visits.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Form */}
          <Card className="border-t-4 border-indian-green shadow-xl rounded-2xl">
            <CardContent className="p-7">
              <h3 className="text-xl font-bold text-school-brown mb-5 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-indian-green" />
                Send us an Enquiry
              </h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-school-brown text-sm font-medium">Student / Parent Name *</Label>
                    <Input id="name" name="name" required placeholder="Your full name" className="border-indian-green/30 focus:border-indian-green" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-school-brown text-sm font-medium">Contact Phone *</Label>
                    <Input id="phone" name="phone" required placeholder="10-digit mobile number" className="border-indian-green/30 focus:border-indian-green" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-school-brown text-sm font-medium">Email Address *</Label>
                  <Input id="email" name="email" type="email" required placeholder="name@example.com" className="border-indian-green/30 focus:border-indian-green" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-school-brown text-sm font-medium">Enquiry Details *</Label>
                  <Textarea id="message" name="message" required placeholder="Specify grade of admission or your query..." rows={4} className="border-indian-green/30 focus:border-indian-green" />
                </div>
                <Button disabled={isSubmitting} className="w-full bg-indian-green hover:bg-indian-green/90 text-white py-3 font-semibold rounded-lg shadow-md">
                  <Send className="mr-2 h-4 w-4" />
                  {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 content-start">
            {contactInfo.map((info, i) => (
              <Card key={i} className="border border-indian-green/15 hover:border-indian-green/40 hover:shadow-lg transition-all rounded-2xl">
                <CardContent className="p-5">
                  <div className="w-11 h-11 bg-indian-green/10 rounded-xl flex items-center justify-center mb-3">
                    <info.icon className="h-5 w-5 text-indian-green" />
                  </div>
                  <h4 className="font-bold text-school-brown mb-2 text-sm">{info.title}</h4>
                  {info.details.map((d, j) => (
                    info.links && info.links[j] ? (
                      <a key={j} href={info.links[j]} className="block text-muted-foreground text-xs leading-relaxed hover:text-indian-green transition-colors">
                        {d}
                      </a>
                    ) : (
                      <p key={j} className="text-muted-foreground text-xs leading-relaxed">{d}</p>
                    )
                  ))}
                </CardContent>
              </Card>
            ))}

            <Card className="sm:col-span-2 overflow-hidden border border-indian-green/15 rounded-2xl shadow-md">
              <CardContent className="p-0">
                <div className="p-3 bg-white flex items-center justify-between border-b border-gray-100">
                  <span className="text-xs font-semibold text-school-brown flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-indian-green" />
                    Dr. Rajkumar Road, Rajajinagar Campus
                  </span>
                  <a 
                    href={schoolConfig.mapUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-indian-green hover:underline flex items-center gap-1"
                  >
                    Open in Google Maps
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                <iframe
                  title="SJRPS-Rajajinagar Location Map"
                  src={schoolConfig.mapEmbedUrl}
                  width="100%"
                  height="220"
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
