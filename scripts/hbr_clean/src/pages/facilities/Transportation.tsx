import FacilityPage from "@/components/FacilityPage";
import { MapPin, UserCheck, Users, Route, ShieldCheck, Bus, Heart, Clock, Smile, Activity } from "lucide-react";
import transport from "@/assets/facilities/trans1.jpg";
import transportStudents from "@/assets/facilities/trans2.jpg";
import transport3 from "@/assets/facilities/trans3.jpg";
import transport4 from "@/assets/facilities/trans4.jpg";

const Transportation = () => (
  <FacilityPage
    title="Safe & Reliable Transportation"
    breadcrumbLabel="Transportation"
    introHeading="A Daily Journey of Safety, Punctuality & Care"
    introImage={transport}
    introImageAlt="SJRPS-HBR school transportation"
    introParagraphs={[
      "Our school transportation is built around a single promise — every child travels safely, comfortably and on time, every single day. From the first pick-up to the last drop, parents can trust that their children are in caring hands.",
      "All our vehicles are GPS-enabled, regularly maintained and operated by experienced drivers and trained lady attendants who treat each child with warmth and responsibility.",
      "With well-planned routes covering key residential areas, our transport service makes daily commuting stress-free for both students and parents.",
    ]}
    features={[
      { icon: MapPin, title: "GPS-Enabled Transport", description: "Real-time tracking on every bus for complete visibility and safety." },
      { icon: UserCheck, title: "Experienced Drivers", description: "Trained, licensed drivers with strong safety records and discipline." },
      { icon: Users, title: "Trained Attendants", description: "Caring lady attendants accompany students on every route." },
      { icon: Route, title: "Wide Route Coverage", description: "Convenient pick-up points across major residential areas." },
      { icon: ShieldCheck, title: "Safety Compliance", description: "Adherence to all transport, RTO and school safety regulations." },
      { icon: Bus, title: "Well-Maintained Fleet", description: "Regular servicing, fitness checks and on-board first-aid kits." },
    ]}
    benefits={[
      { icon: Heart, title: "Safe Travel", description: "Multiple safety measures ensure peace of mind for parents." },
      { icon: Smile, title: "Reduced Commuting Stress", description: "Children arrive fresh, calm and ready to learn." },
      { icon: Clock, title: "Timely Arrival", description: "Disciplined routes and schedules support punctuality." },
      { icon: Activity, title: "Independence", description: "Children learn responsibility and routine through daily commute." },
    ]}
    gallery={[
      { src: transportStudents, alt: "Students boarding the school bus" },
      { src: transport3, alt: "School bus in service" },
      { src: transport4, alt: "Safe school transport" },
    ]}
    whyItMattersBody="The journey to and from school is part of a child's education in itself. Safe, punctual and caring transport not only saves precious parent hours but also gives children a daily lesson in routine, responsibility and trust."
    whyItMattersPoints={[
      "Peace of mind for working parents",
      "Punctual start to every school day",
      "Trusted adults supervising the journey",
      "Comfortable, well-maintained vehicles",
    ]}
    closingMessage="Every journey with us is a promise — that your child is safe, comfortable and cared for, from the moment they board until they are safely home."
  />
);

export default Transportation;
