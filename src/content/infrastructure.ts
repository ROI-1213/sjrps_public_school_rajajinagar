export interface FacilityDetail {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  galleryImages: string[];
  keyFeatures: string[];
}

export const infrastructureContent: FacilityDetail[] = [
  {
    id: "classroom",
    slug: "classroom",
    title: "Modern Classrooms",
    tagline: "Spacious, well-ventilated, and digitally equipped learning spaces.",
    description: "Our classrooms at SJRPS-Rajajinagar are ergonomically designed with comfortable student furniture, ample natural daylight, cross-ventilation, and digital teaching aids to foster high focus and energetic collaboration.",
    heroImage: "/images/Photos/classroom/1.jpg",
    galleryImages: [
      "/images/Photos/classroom/1.jpg",
      "/images/Photos/classroom/2.jpg",
      "/images/Photos/classroom/3.jpg",
      "/images/Photos/classroom/4.jpg",
      "/images/Photos/classroom/5.jpg",
    ],
    keyFeatures: [
      "Ergonomic age-appropriate student desks and seating",
      "Abundant natural light and cross ventilation",
      "Interactive display boards and multimedia setups",
      "Optimal student-to-teacher space ratio",
      "Dedicated display boards for student art and academic projects"
    ]
  },
  {
    id: "library",
    slug: "library",
    title: "Resource Library",
    tagline: "An enriching haven for reading, research, and quiet discovery.",
    description: "The campus library houses a rich repository of curriculum reference books, literary classics, contemporary fiction, encyclopedias, children's periodicals, and educational magazines nurturing lifelong reading habits.",
    heroImage: "/images/Photos/Library/1.jpg",
    galleryImages: [
      "/images/Photos/Library/1.jpg",
      "/images/Photos/Library/2.jpg",
      "/images/Photos/Library/3.jpg",
      "/images/Photos/Library/4.jpg",
      "/images/Photos/Library/5.jpg",
    ],
    keyFeatures: [
      "Extensive collection of books spanning fiction, science, and history",
      "Quiet dedicated reading zone for students and faculty",
      "Children's illustrated literature and early-reader book corner",
      "Reference section with encyclopedias and NCERT study guides",
      "Weekly scheduled library hours fostering literary passion"
    ]
  },
  {
    id: "laboratories",
    slug: "laboratories",
    title: "Science Laboratories",
    tagline: "Where curiosity transforms into scientific inquiry and practical proof.",
    description: "Our composite science laboratories provide safe, well-equipped workbenches for physics, chemistry, and biology demonstrations. Students conduct experiential experiments under faculty supervision.",
    heroImage: "/images/Photos/Science Lab/1.jpg",
    galleryImages: [
      "/images/Photos/Science Lab/1.jpg",
      "/images/Photos/Science Lab/2.jpg",
      "/images/Photos/Science Lab/3.jpg",
      "/images/Photos/Science Lab/4.jpg",
      "/images/Photos/Science Lab/5.jpg",
    ],
    keyFeatures: [
      "Complete apparatus for CBSE Secondary science experiments",
      "High-precision compound microscopes, optical benches, and glassware",
      "Comprehensive lab safety features including eyewash and fire extinguishers",
      "Dedicated demonstration table for teacher-guided experiments",
      "Focus on empirical learning and scientific method"
    ]
  },
  {
    id: "auditorium",
    slug: "auditorium",
    title: "Campus Auditorium",
    tagline: "A grand venue for theatrical expression, assemblies, and cultural gatherings.",
    description: "Our spacious multipurpose auditorium hosts morning assemblies, annual school festivals, inter-house debates, drama performances, and parent orientations equipped with acoustic sound and lighting systems.",
    heroImage: "/images/Photos/Auditorium/1.jpg",
    galleryImages: [
      "/images/Photos/Auditorium/1.jpg",
      "/images/Photos/Auditorium/2.jpg",
    ],
    keyFeatures: [
      "Generous seating capacity for large school events",
      "Professional audio-visual amplification and microphone setups",
      "Stage lighting and backstage dressing areas for theatrical arts",
      "Acoustic treatment for clear speech and musical resonance",
      "Central venue for ceremonies, guest lectures, and cultural meets"
    ]
  },
  {
    id: "computer-lab",
    slug: "computer-lab",
    title: "Computer Laboratory",
    tagline: "Empowering students with modern computing and algorithmic literacy.",
    description: "Equipped with modern desktop computers, high-speed networking, and educational software, the computer lab ensures every student masters digital applications, logical thinking, and coding fundamentals.",
    heroImage: "/images/Photos/Computer lab/1.jpg",
    galleryImages: [
      "/images/Photos/Computer lab/1.jpg",
      "/images/Photos/Computer lab/2.jpg",
      "/images/Photos/Computer lab/3.jpg",
      "/images/Photos/Computer lab/4.jpg",
      "/images/Photos/Computer lab/5.jpg",
    ],
    keyFeatures: [
      "Individual desktop workstations for every learner during sessions",
      "High-speed filtered broadband internet connection",
      "Operating systems and educational software suites for coding",
      "UPS backup ensuring uninterrupted practical classes",
      "Strict cybersecurity and safe internet browsing protocols"
    ]
  },
  {
    id: "smart-class",
    slug: "smart-class",
    title: "Smart Classes & AI Flat Panels",
    tagline: "Visualizing complex concepts through interactive digital technology.",
    description: "Following our 2024 technology upgrade, classrooms feature AI-enabled interactive flat panel boards allowing teachers to display 3D diagrams, simulations, educational documentaries, and interactive problem sets.",
    heroImage: "/images/Photos/classroom/3.jpg",
    galleryImages: [
      "/images/Photos/classroom/3.jpg",
      "/images/Photos/classroom/4.jpg",
      "/images/Photos/classroom/5.jpg",
    ],
    keyFeatures: [
      "AI-enabled interactive touch flat panels in classrooms",
      "High-definition multimedia animations explaining abstract concepts",
      "Direct integration with curriculum syllabus content",
      "Interactive quizzes and real-time student engagement tools",
      "Multi-sensory learning supporting different learning paces"
    ]
  },
  {
    id: "sports",
    slug: "sports",
    title: "Sports & Playgrounds",
    tagline: "Fostering physical stamina, teamwork, and athletic excellence.",
    description: "Physical education is an essential pillar at SJRPS-Rajajinagar. Students participate in athletic track events, volleyball, basketball, throwball, indoor sports, and motor agility games on our designated campus grounds.",
    heroImage: "/images/Photos/Sports/1.jpg",
    galleryImages: [
      "/images/Photos/Sports/1.jpg",
      "/images/Photos/Sports/2.jpg",
      "/images/Photos/Sports/3.jpg",
      "/images/Photos/Sports/4.jpg",
      "/images/Photos/MPT And playground/1.jpg",
    ],
    keyFeatures: [
      "Campus sports ground for athletics, marching, and team sports",
      "Indoor sports arena for chess, carrom, and table tennis",
      "Dedicated, qualified physical education instructors",
      "Annual Sports Meet promoting house competition and sportsmanship",
      "Specialized training for inter-school sports tournaments"
    ]
  },
  {
    id: "yoga",
    slug: "yoga",
    title: "Yoga & Wellness Hall",
    tagline: "Cultivating mental clarity, flexibility, and inner harmony.",
    description: "Under the guidance of our experienced yoga instructor, students practice pranayama breathing exercises, surya namaskars, and mindful asanas that improve concentration, posture, and emotional resilience.",
    heroImage: "/images/Photos/Yoga/1.jpg",
    galleryImages: [
      "/images/Photos/Yoga/1.jpg",
      "/images/Photos/Yoga/2.jpg",
      "/images/Photos/Yoga/3.jpg",
      "/images/Photos/Yoga/4.jpg",
    ],
    keyFeatures: [
      "Serene, well-ventilated hall designed for meditative calm",
      "Instruction by seasoned yoga instructor (30+ years experience)",
      "Daily breathing and relaxation techniques before study sessions",
      "Celebration of International Yoga Day with mass demonstrations",
      "Holistic focus on mind-body equilibrium and stress relief"
    ]
  },
  {
    id: "robotics",
    slug: "robotics",
    title: "Robotics & Innovation Lab",
    tagline: "Inspiring the next generation of engineers, coders, and makers.",
    description: "Introduced in 2023, our modern robotics curriculum allows students to design mechanical models, assemble robotic kits, program microcontrollers, and develop computational problem-solving abilities.",
    heroImage: "/images/Photos/Robotics/1.jpg",
    galleryImages: [
      "/images/Photos/Robotics/1.jpg",
      "/images/Photos/Robotics/2.jpg",
      "/images/Photos/Robotics/3.jpg",
      "/images/Photos/Robotics/4.jpg",
      "/images/Photos/Robotics/5.jpg",
    ],
    keyFeatures: [
      "Hands-on STEM robotics kits for primary and secondary learners",
      "Modular robotic sensors, gear assemblies, and microcontrollers",
      "Block-based and text-based coding curriculum",
      "Project-based learning solving real-world challenges",
      "Preparation for national robotics and innovation challenges"
    ]
  }
];
