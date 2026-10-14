export interface SchoolEvent {
  id: string;
  title: string;
  category: "Sports" | "Cultural" | "Academic" | "Celebration" | "Campus Life";
  date: string;
  academicYear: string;
  description: string;
  summary: string;
  featuredImage: string;
  galleryImages: string[];
}

export const schoolEvents: SchoolEvent[] = [
  {
    id: "annual-sports-meet-2026",
    title: "Annual Sports Meet 2026",
    category: "Sports",
    date: "January 2026",
    academicYear: "2025–26",
    description: "The Annual Sports Meet at SJRPS-Rajajinagar showcased remarkable athleticism, teamwork, and sportsmanship. Students from primary and secondary wings enthusiastically participated in track events, relay races, marching drills, and athletic displays under the guidance of our physical education department.",
    summary: "Celebration of athletic excellence, team spirit, and competitive sports at SJRPS Rajajinagar.",
    featuredImage: "/images/Events/Annual Sports Meet/1.jpg",
    galleryImages: [
      "/images/Events/Annual Sports Meet/1.jpg",
      "/images/Events/Annual Sports Meet/2.jpg",
      "/images/Events/Annual Sports Meet/3.jpg",
      "/images/Events/Annual Sports Meet/4.jpg",
      "/images/Events/Annual Sports Meet/5.jpg",
      "/images/Events/Annual Sports Meet/6.jpg",
    ]
  },
  {
    id: "investiture-ceremony-2026",
    title: "Student Council Investiture Ceremony",
    category: "Campus Life",
    date: "July 2026",
    academicYear: "2026–27",
    description: "The Investiture Ceremony marks the formal induction of student council leaders who pledge to serve the school community with dedication, responsibility, and integrity. Badges and sashes were conferred by the Principal.",
    summary: "Formal leadership conferral and oath-taking ceremony for the newly elected student council.",
    featuredImage: "/images/Events/Investiture ceremony/1.jpg",
    galleryImages: [
      "/images/Events/Investiture ceremony/1.jpg",
      "/images/Events/Investiture ceremony/2.jpg",
      "/images/Events/Investiture ceremony/3.jpg",
      "/images/Events/Investiture ceremony/4.jpg",
    ]
  },
  {
    id: "krishna-janmashtami-celebration",
    title: "Krishna Janmashtami Festivities",
    category: "Celebration",
    date: "August 2026",
    academicYear: "2026–27",
    description: "A joyous celebration featuring cultural dance performances, devotional music, and traditional attire displays by students across pre-primary and primary sections, celebrating our rich Indian heritage and shared cultural values.",
    summary: "Vibrant cultural celebration with music, dance, and colorful festive enactments by students.",
    featuredImage: "/images/Events/Krishna Janmastmi/1.jpg",
    galleryImages: [
      "/images/Events/Krishna Janmastmi/1.jpg",
      "/images/Events/Krishna Janmastmi/2.jpg",
      "/images/Events/Krishna Janmastmi/3.jpg",
      "/images/Events/Krishna Janmastmi/4.jpg",
      "/images/Events/Krishna Janmastmi/5.jpg",
      "/images/Events/Krishna Janmastmi/6.jpg",
    ]
  },
  {
    id: "ganesha-pooja-celebration",
    title: "Ganesha Festival & Cultural Observance",
    category: "Celebration",
    date: "September 2026",
    academicYear: "2026–27",
    description: "Students and faculty joined together for the eco-friendly Ganesha festival prayer, emphasizing environmental awareness, traditional rituals, community harmony, and cultural appreciation.",
    summary: "Traditional floral reverence, bhajans, and eco-conscious cultural assembly.",
    featuredImage: "/images/Events/Ganesha Pooja/1.jpg",
    galleryImages: [
      "/images/Events/Ganesha Pooja/1.jpg",
      "/images/Events/Ganesha Pooja/2.jpg",
      "/images/Events/Ganesha Pooja/3.jpg",
      "/images/Events/Ganesha Pooja/4.jpg",
    ]
  },
  {
    id: "onam-celebration",
    title: "Onam Harvest Festival",
    category: "Cultural",
    date: "September 2026",
    academicYear: "2026–27",
    description: "The vibrant colors of Onam came alive with intricate Pookkalam flower rangoli designs created by teachers and students, celebrating national diversity and cultural unity.",
    summary: "Intricate floral rangoli and festive cultural assembly honoring Onam.",
    featuredImage: "/images/Events/Onam/1.jpg",
    galleryImages: [
      "/images/Events/Onam/1.jpg",
      "/images/Events/Onam/2.jpg",
      "/images/Events/Onam/3.jpg",
      "/images/Events/Onam/4.jpg",
    ]
  },
  {
    id: "school-election-democracy",
    title: "Democratic Student Council Election",
    category: "Academic",
    date: "June 2026",
    academicYear: "2026–27",
    description: "Experiential civic learning through secret-ballot elections for Head Boy, Head Girl, and House Captains, instilling democratic values and leadership accountability.",
    summary: "Experiential ballot voting exercise teaching democratic participation.",
    featuredImage: "/images/Events/School Election/1.jpg",
    galleryImages: [
      "/images/Events/School Election/1.jpg",
      "/images/Events/School Election/2.jpg",
      "/images/Events/School Election/3.jpg",
    ]
  },
  {
    id: "fruits-identification-day",
    title: "Pre-Primary Fruits & Nutrition Day",
    category: "Academic",
    date: "July 2026",
    academicYear: "2026–27",
    description: "An engaging experiential learning session for kindergarten and pre-primary learners to identify fruits, learn nutritional benefits, and develop healthy lifestyle habits.",
    summary: "Hands-on sensorial activity for early years nutrition education.",
    featuredImage: "/images/Events/Fruits Identification/1.jpg",
    galleryImages: [
      "/images/Events/Fruits Identification/1.jpg",
      "/images/Events/Fruits Identification/2.jpg",
      "/images/Events/Fruits Identification/3.jpg",
    ]
  },
  {
    id: "rangoli-art-competition",
    title: "Traditional Rangoli & Art Exhibition",
    category: "Cultural",
    date: "October 2026",
    academicYear: "2026–27",
    description: "Showcasing student creativity, mathematical symmetry, and traditional Indian artistic patterns through an energetic campus-wide inter-house competition.",
    summary: "Inter-house art competition celebrating traditional patterns and creative expression.",
    featuredImage: "/images/Events/Rangoli/1.jpg",
    galleryImages: [
      "/images/Events/Rangoli/1.jpg",
      "/images/Events/Rangoli/2.jpg",
      "/images/Events/Rangoli/3.jpg",
    ]
  }
];
