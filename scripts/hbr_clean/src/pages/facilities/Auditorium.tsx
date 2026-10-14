import FacilityPage from "@/components/FacilityPage";
import { Users, Volume2, Lightbulb, Calendar, Mic2, Theater, Crown, Sparkles, Award, MessageCircle } from "lucide-react";
import auditorium from "@/assets/facilities/audi1.jpg";
import auditoriumGalleryOne from "@/assets/facilities/audi3.jpg";
import auditoriumGalleryTwo from "@/assets/facilities/audi4.jpg";
import auditoriumGalleryThree from "@/assets/facilities/audi5.jpg";

const Auditorium = () => (
  <FacilityPage
    title="State-of-the-Art Auditorium"
    breadcrumbLabel="Auditorium"
    introHeading="The Cultural Heart of Our Campus"
    introImage={auditorium}
    introImageAlt="SJRPS-HBR auditorium"
    introParagraphs={[
      "Our spacious, modern auditorium is where the school comes alive — hosting cultural celebrations, academic seminars, talent shows, assemblies and student performances throughout the year.",
      "Equipped with professional sound, lighting and stage facilities, the auditorium provides the perfect setting for students to step into the spotlight and shine.",
      "Whether it's a graduation ceremony, an annual day, a guest lecture or a dramatic performance, every event here becomes a memorable milestone in our students' school journey.",
    ]}
    features={[
      { icon: Users, title: "Large Seating Capacity", description: "Spacious, comfortable seating to host the entire school community." },
      { icon: Volume2, title: "Audio-Visual Systems", description: "Professional sound, microphones and projection for clear delivery." },
      { icon: Theater, title: "Stage Facilities", description: "Wide stage, backstage rooms and curtains for professional performances." },
      { icon: Lightbulb, title: "Stage Lighting", description: "Dynamic lighting setup to enhance every event and performance." },
      { icon: Calendar, title: "Event Hosting Capabilities", description: "Versatile space for cultural, academic and ceremonial events." },
      { icon: Mic2, title: "Public Speaking Platform", description: "Dedicated podium and AV support for debates and speeches." },
    ]}
    benefits={[
      { icon: Crown, title: "Confidence Building", description: "Performing on stage helps students conquer stage fright." },
      { icon: Sparkles, title: "Talent Development", description: "A platform to discover and showcase artistic abilities." },
      { icon: Award, title: "Leadership Opportunities", description: "Anchoring, organising and leading school events." },
      { icon: MessageCircle, title: "Public Speaking Skills", description: "Practice expressing ideas clearly before large audiences." },
    ]}
    gallery={[
      { src: auditoriumGalleryOne, alt: "Auditorium view" },
      { src: auditoriumGalleryTwo, alt: "Auditorium event" },
      { src: auditoriumGalleryThree, alt: "Auditorium performance" },
    ]}
    whyItMattersBody="A school auditorium is where shy children find their voice and natural performers find their stage. Every annual day rehearsal, every elocution and every cultural evening here builds confidence, teamwork and a lifelong appreciation for the arts."
    whyItMattersPoints={[
      "Nurtures performing-arts talent",
      "Develops public-speaking confidence",
      "Strengthens teamwork and coordination",
      "Creates lasting school memories",
    ]}
    closingMessage="Every spotlight on our stage is a chance for a student to discover a new strength — and a new version of themselves."
  />
);

export default Auditorium;
