import {
  BookOpen,
  Library,
  FlaskConical,
  Theater,
  Monitor,
  MonitorPlay,
  Heart,
  Cpu,
  Trophy,
  type LucideIcon,
} from "lucide-react";

export interface InfrastructureFacility {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconComponent: LucideIcon;
  coverImage: string;
  coverImageAlt: string;
  galleryImages: { src: string; alt: string }[];
  route: string;
  features?: string[];
}

export const facilitiesData: InfrastructureFacility[] = [
  {
    id: "classrooms",
    title: "Classrooms",
    description: "Spacious, well-lit, ergonomically planned classrooms designed for engaging, interactive learning.",
    icon: "book-open",
    iconComponent: BookOpen,
    coverImage: "/images/Photos/classroom/DSC00683.JPG",
    coverImageAlt: "Spacious learning classroom at SJR Public School Rajajinagar",
    galleryImages: [
      { src: "/images/Photos/classroom/DSC00689.JPG", alt: "Active learning session in classroom" },
      { src: "/images/Photos/classroom/DSC00825.JPG", alt: "Interactive smart panel teaching environment" },
      { src: "/images/Photos/classroom/DSC00828.JPG", alt: "Ergonomic seating and classroom desks" },
      { src: "/images/Photos/classroom/DSC00830.JPG", alt: "Well-ventilated student learning hall" },
    ],
    route: "/facilities/classrooms",
  },
  {
    id: "library",
    title: "Library",
    description: "Extensive collection of NCERT curriculum reference books, literary fiction, periodicals, and children's literature.",
    icon: "library",
    iconComponent: Library,
    coverImage: "/images/Photos/Library/DSC01550.JPG",
    coverImageAlt: "Knowledge Resource Centre and Library at SJR Public School Rajajinagar",
    galleryImages: [
      { src: "/images/Photos/Library/DSC01557.JPG", alt: "Organized library bookshelves and reference section" },
      { src: "/images/Photos/Library/DSC01566.JPG", alt: "Quiet reading area for students" },
      { src: "/images/Photos/Library/DSC01567.JPG", alt: "Extensive book stacks and curriculum reference materials" },
      { src: "/images/Photos/Library/DSC01575.JPG", alt: "Student research and reading section" },
    ],
    route: "/facilities/library",
  },
  {
    id: "laboratories",
    title: "Science Laboratories",
    description: "Modern composite physics, chemistry and biology laboratory apparatus for safe, supervised experimentation.",
    icon: "flask-conical",
    iconComponent: FlaskConical,
    coverImage: "/images/Photos/Science Lab/DSC00853.JPG",
    coverImageAlt: "Science Laboratory at SJR Public School Rajajinagar",
    galleryImages: [
      { src: "/images/Photos/Science Lab/DSC00884.JPG", alt: "Chemistry and physics lab demonstration tables" },
      { src: "/images/Photos/Science Lab/DSC00908.JPG", alt: "Composite science lab workstations and apparatus" },
      { src: "/images/Photos/Science Lab/DSC00928.JPG", alt: "Supervised science practical setup" },
      { src: "/images/Photos/Science Lab/DSC00953.JPG", alt: "Microscopes and biology study equipment" },
      { src: "/images/Photos/Science Lab/DSC01011.JPG", alt: "Laboratory chemical storage and safety equipment" },
      { src: "/images/Photos/Science Lab/DSC01017.JPG", alt: "Hands-on science experimental equipment" },
      { src: "/images/Photos/Science Lab/DSC01030.JPG", alt: "Secondary stage practical experiments area" },
      { src: "/images/Photos/Science Lab/DSC01046.JPG", alt: "Science lab storage and specimen area" },
    ],
    route: "/facilities/laboratories",
  },
  {
    id: "auditorium",
    title: "Auditorium",
    description: "Spacious multipurpose campus auditorium for morning assemblies, theatrical performances, and celebrations.",
    icon: "theater",
    iconComponent: Theater,
    coverImage: "/images/Photos/Auditorium/DSC01238.JPG",
    coverImageAlt: "Campus Multipurpose Auditorium at SJR Public School Rajajinagar",
    galleryImages: [
      { src: "/images/Photos/Auditorium/DSC01249.JPG", alt: "Auditorium stage and seating arrangement" },
    ],
    route: "/facilities/auditorium",
  },
  {
    id: "computer-lab",
    title: "Computer Laboratory",
    description: "Dedicated computer workstations with high-speed internet and educational software for digital literacy.",
    icon: "monitor",
    iconComponent: Monitor,
    coverImage: "/images/Photos/Computer lab/DSC00838.JPG",
    coverImageAlt: "Computer Laboratory at SJR Public School Rajajinagar",
    galleryImages: [
      { src: "/images/Photos/Computer lab/DSC00841.JPG", alt: "Individual computer terminals for students" },
      { src: "/images/Photos/Computer lab/DSC00845.JPG", alt: "IT curriculum and programming workstation setup" },
      { src: "/images/Photos/Computer lab/DSC00854.JPG", alt: "Digital literacy and educational software room" },
      { src: "/images/Photos/Computer lab/DSC00858.JPG", alt: "Modern high-speed networked student systems" },
      { src: "/images/Photos/Computer lab/VIrtual Reality Kit1.jpg", alt: "Virtual Reality immersive learning kit" },
      { src: "/images/Photos/Computer lab/Virtual Reality Kit2.jpg", alt: "Hands-on virtual reality headsets in lab" },
    ],
    route: "/facilities/computer-lab",
  },
  {
    id: "smart-class",
    title: "Smart Classes & AI Panels",
    description: "Interactive AI-enabled flat panel display boards facilitating multimedia animations and conceptual clarity.",
    icon: "monitor-play",
    iconComponent: MonitorPlay,
    coverImage: "/images/Photos/classroom/DSC00825.JPG",
    coverImageAlt: "Interactive Smart Class Board at SJR Public School Rajajinagar",
    galleryImages: [
      { src: "/images/Photos/classroom/DSC00828.JPG", alt: "Smart panel interactive classroom view" },
      { src: "/images/Photos/classroom/DSC00830.JPG", alt: "Multimedia audio-visual teaching display" },
      { src: "/images/Photos/Computer lab/VIrtual Reality Kit1.jpg", alt: "Virtual Reality interactive learning tools" },
      { src: "/images/Photos/Computer lab/Virtual Reality Kit2.jpg", alt: "Next-gen immersive learning equipment" },
    ],
    route: "/facilities/smart-class",
  },
  {
    id: "sports",
    title: "Sports & Playgrounds",
    description: "Track and field grounds, volleyball and throwball courts, plus indoor arena for table tennis and chess.",
    icon: "trophy",
    iconComponent: Trophy,
    coverImage: "/images/Photos/Sports/DSC01269.JPG",
    coverImageAlt: "Sports and Athletics Facilities at SJR Public School Rajajinagar",
    galleryImages: [
      { src: "/images/Photos/Sports/DSC01276.JPG", alt: "Indoor sports arena and games area" },
      { src: "/images/Photos/Sports/DSC01303.JPG", alt: "Table tennis and physical training hall" },
      { src: "/images/Photos/Sports/DSC01309.JPG", alt: "Sports equipment and fitness arena" },
      { src: "/images/Photos/Sports/DSC01346.JPG", alt: "Volleyball and team sports equipment" },
      { src: "/images/Photos/Sports/DSC01356.JPG", alt: "Indoor sports competition arena" },
      { src: "/images/Photos/Sports/DSC01389.JPG", alt: "Physical education coaching space" },
      { src: "/images/Photos/Sports/A7400879.JPG", alt: "Outdoor sports activity zone" },
      { src: "/images/Photos/MPT And playground/DSC00740.JPG", alt: "School playground and assembly grounds" },
    ],
    route: "/facilities/sports-room",
  },
  {
    id: "yoga",
    title: "Yoga & Wellness Hall",
    description: "A tranquil dedicated hall where students practice guided pranayama and asanas for posture and focus.",
    icon: "heart",
    iconComponent: Heart,
    coverImage: "/images/Photos/Yoga/Yoga.JPG",
    coverImageAlt: "Yoga & Wellness Hall at SJR Public School Rajajinagar",
    galleryImages: [
      { src: "/images/Photos/Yoga/Y2.JPG", alt: "Students practicing yoga asanas" },
      { src: "/images/Photos/Yoga/Y3.JPG", alt: "Guided pranayama and breathing exercises" },
      { src: "/images/Photos/Yoga/Y4.JPG", alt: "Group yoga sessions for focus and posture" },
      { src: "/images/Photos/Yoga/Y5.JPG", alt: "Mindfulness and wellness practice" },
      { src: "/images/Photos/Yoga/Y6.JPG", alt: "Tranquil wellness hall session" },
      { src: "/images/Photos/Yoga/DSC00904.JPG", alt: "School yoga instruction and demonstration" },
    ],
    route: "/facilities/yoga-hall",
  },
  {
    id: "robotics",
    title: "Robotics Classes",
    description: "Modern STEM innovation lab fostering algorithmic problem solving, coding, and hands-on robotics kits.",
    icon: "cpu",
    iconComponent: Cpu,
    coverImage: "/images/Photos/Robotics/DSC01539.JPG",
    coverImageAlt: "Robotics and STEM Innovation Lab at SJR Public School Rajajinagar",
    galleryImages: [
      { src: "/images/Photos/Robotics/DSC01547.JPG", alt: "Hands-on robotics kit assembly" },
      { src: "/images/Photos/Robotics/DSC01661.JPG", alt: "Students programming educational robotics" },
      { src: "/images/Photos/Robotics/DSC01674.JPG", alt: "STEM innovation lab projects and sensors" },
      { src: "/images/Photos/Robotics/DSC01698.JPG", alt: "Robotics coding and practical testing" },
    ],
    route: "/facilities/robotics-lab",
  },
];

export const getFacilityById = (id: string): InfrastructureFacility | undefined => {
  return facilitiesData.find((f) => f.id === id);
};

export default facilitiesData;
