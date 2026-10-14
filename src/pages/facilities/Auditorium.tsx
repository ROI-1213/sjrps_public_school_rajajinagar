import FacilityPage from "@/components/FacilityPage";
import { Users, Volume2, Lightbulb, Calendar, Mic2, Theater, Crown, Sparkles, Award, MessageCircle } from "lucide-react";
import { schoolConfig } from "@/schoolConfig";

const Auditorium = () => (
  <FacilityPage
    title="State-of-the-Art Auditorium"
    breadcrumbLabel="Auditorium"
    introHeading="The Cultural Heart of Our Campus"
    introImage="/images/School Building/2.jpg"
    introImageAlt={`${schoolConfig.shortName} auditorium and event hall`}
    introParagraphs={[
      "Our spacious, modern auditorium is where the school comes alive — hosting cultural celebrations, academic seminars, talent shows, assemblies and student performances throughout the year.",
      "Equipped with professional sound, lighting and stage facilities, the auditorium provides the perfect setting for students to step into the spotlight and shine.",
      "Whether it's an investiture ceremony, national festival, guest lecture or cultural performance, every event here becomes a memorable milestone in our students' school journey.",
    ]}
    features={[
      { icon: Users, title: "Large Seating Capacity", description: "Spacious, comfortable seating to host school community assemblies and events." },
      { icon: Volume2, title: "Audio-Visual Systems", description: "Professional acoustic sound, wireless microphones and projection for clear delivery." },
      { icon: Theater, title: "Elevated Stage Facilities", description: "Wide wooden stage, backstage access and curtains for drama and musical performances." },
      { icon: Lightbulb, title: "Stage Lighting", description: "Dynamic lighting setup to illuminate performances, dances, and ceremonies." },
      { icon: Calendar, title: "Multipurpose Hosting", description: "Versatile space for cultural competitions, debates, and annual assemblies." },
      { icon: Mic2, title: "Public Speaking Platform", description: "Dedicated podium and AV support encouraging elocution and leadership." },
    ]}
    benefits={[
      { icon: Crown, title: "Confidence Building", description: "Performing on stage helps students conquer stage fright." },
      { icon: Sparkles, title: "Talent Development", description: "A platform to discover and showcase artistic and musical abilities." },
      { icon: Award, title: "Leadership Opportunities", description: "Anchoring, organizing and leading school events." },
      { icon: MessageCircle, title: "Public Speaking Skills", description: "Practice expressing ideas clearly before large audiences." },
    ]}
    gallery={[
      { src: "/images/Events/Investiture ceremony/1.jpg", alt: "Investiture ceremony on auditorium stage" },
      { src: "/images/Events/Krishna Janmastmi/1.jpg", alt: "Cultural celebration on stage" },
      { src: "/images/Events/Ganesha Pooja/1.jpg", alt: "School event gathering" },
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
