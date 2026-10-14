import FacilityPage from "@/components/FacilityPage";
import { Trophy, Dribbble, Activity, Medal, Users, Heart, ShieldCheck, Crown } from "lucide-react";
import { schoolConfig } from "@/schoolConfig";

const SportsRoom = () => (
  <FacilityPage
    title="Sports & Physical Education"
    breadcrumbLabel="Sports"
    introHeading="Holistic Development Through Sports & Physical Fitness"
    introImage="/images/Events/Annual Sports Meet/1.jpg"
    introImageAlt={`${schoolConfig.shortName} sports facility`}
    introParagraphs={[
      "Sports are at the heart of our school's commitment to holistic education. Our sports grounds, dedicated indoor play arena and trained coaches give every child the opportunity to play, compete and develop lifelong fitness.",
      "From track athletics to inter-house tournaments, our students experience the full joy of physical activity — building stamina, endurance and sportsmanship.",
      "Beyond the game, physical education at SJRPS-Rajajinagar instills discipline, teamwork, resilience and leadership that shapes character for life.",
    ]}
    features={[
      { icon: ShieldCheck, title: "Taekwondo & Martial Arts", description: "Structured martial arts training building focus, self-defence, agility and mental discipline." },
      { icon: Trophy, title: "Athletics & Track Events", description: "Running tracks, sprint drills, relay races, and annual athletic meets." },
      { icon: Dribbble, title: "Cricket & Outdoor Games", description: "Team training sessions and friendly inter-house matches." },
      { icon: Activity, title: "Kho Kho & Kabaddi", description: "Traditional high-energy Indian sports that build speed, teamwork, and tactical agility." },
      { icon: Medal, title: "Volleyball & Throwball", description: "Coached team sports cultivating coordination and cooperative spirit." },
      { icon: Users, title: "Indoor Games", description: "Table tennis, chess, and carrom for cognitive agility and fine motor skills." },
    ]}
    benefits={[
      { icon: Heart, title: "Physical Fitness", description: "Active routines that build stamina, cardiovascular health, and strength." },
      { icon: Users, title: "Teamwork", description: "Learning to collaborate, communicate and achieve goals together." },
      { icon: Crown, title: "Leadership", description: "House captains, squad leaders, and tournament roles develop responsibility." },
      { icon: ShieldCheck, title: "Discipline", description: "Regular routines, coach guidance, and respect for game rules." },
    ]}
    gallery={[
      { src: "/images/Events/Annual Sports Meet/1.jpg", alt: "Annual sports meet march past" },
      { src: "/images/Events/Annual Sports Meet/2.jpg", alt: "Students participating in track events" },
      { src: "/images/Events/Annual Sports Meet/3.jpg", alt: "Sports victory ceremony" },
    ]}
    whyItMattersBody="A child who plays is a child who learns. Sports build the body, sharpen the mind and strengthen the spirit — teaching young people how to win with grace, lose with dignity and rise stronger from every challenge."
    whyItMattersPoints={[
      "Builds physical health and stamina",
      "Develops sportsmanship and fair play",
      "Teaches time management and discipline",
      "Creates healthy lifelong habits",
    ]}
    closingMessage="On our playgrounds, every child learns that winning is sweet, but playing with heart, discipline and dignity is the true prize."
  />
);

export default SportsRoom;
