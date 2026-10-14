import FacilityPage from "@/components/FacilityPage";
import { Trophy, Dribbble, Activity, Volleyball, Users, Dumbbell, Heart, ShieldCheck, Crown, Sparkles } from "lucide-react";
import spts1 from "@/assets/facilities/spts1.jpg";
import spts2 from "@/assets/facilities/spts2.jpg";
import spts3 from "@/assets/facilities/spts3.jpg";
import spts4 from "@/assets/facilities/spts4.jpg";

const SportsRoom = () => (
  <FacilityPage
    title="Sports & Physical Education"
    breadcrumbLabel="Sports"
    introHeading="Holistic Development Through Sports"
    introImage={spts1}
    introImageAlt="SJRPS-HBR sports facility"
    introParagraphs={[
      "Sports are at the heart of our school's commitment to holistic education. Our spacious playgrounds, dedicated indoor spaces and trained coaches give every child the opportunity to play, compete and grow.",
      "From early morning athletics to inter-house tournaments, our students experience the full joy of movement — building strength, stamina and lifelong fitness habits.",
      "Beyond the game, sports at SJRPS-HBR teach discipline, teamwork, leadership and the spirit of sportsmanship that shapes character for life.",
    ]}
    features={[
      { icon: ShieldCheck, title: "Kabaddi", description: "Strength, strategy and teamwork through this traditional team sport." },
      { icon: Trophy, title: "Football", description: "Coached training sessions and friendly inter-house matches." },
      { icon: Dribbble, title: "Cricket", description: "Practice nets, pitches and structured cricket coaching." },
      { icon: Activity, title: "Kho Kho", description: "Fast-paced chasing games that build speed, agility and focus." },
      { icon: Volleyball, title: "Volleyball", description: "Outdoor courts that build coordination and team spirit." },
      { icon: Users, title: "Indoor Games", description: "Chess, carrom, table tennis and more for mind and motor skills." },
    ]}
    benefits={[
      { icon: Heart, title: "Physical Fitness", description: "Active routines that build stamina, strength and health." },
      { icon: Users, title: "Teamwork", description: "Learning to play, communicate and win together." },
      { icon: Crown, title: "Leadership", description: "Captaincy and team roles develop responsibility." },
      { icon: ShieldCheck, title: "Discipline", description: "Routine, focus and respect for rules and coaches." },
    ]}
    gallery={[
      { src: spts2, alt: "Sports facilities" },
      { src: spts3, alt: "Students playing sports" },
      { src: spts4, alt: "Sports activities" },
    ]}
    whyItMattersBody="A child who plays is a child who learns. Sports build the body, sharpen the mind and strengthen the spirit — teaching young people how to win with grace, lose with dignity and rise stronger from every challenge."
    whyItMattersPoints={[
      "Promotes lifelong fitness habits",
      "Builds resilience and mental toughness",
      "Develops leadership and teamwork",
      "Channels energy into positive growth",
    ]}
    closingMessage="Sports teach lessons that extend beyond the field, shaping character, resilience, leadership, and lifelong confidence."
  />
);

export default SportsRoom;
