export interface GalleryItem {
  id: string;
  title: string;
  category: "Campus" | "Academics" | "Infrastructure" | "Celebrations" | "Sports" | "Arts & Culture";
  imageUrl: string;
  caption: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "campus-building-1",
    title: "Rajajinagar School Building & Gateway",
    category: "Campus",
    imageUrl: "/images/Photos/School Building/School Building1.jpg",
    caption: "Main entrance and academic block of SJR Public School, Rajajinagar."
  },
  {
    id: "campus-building-2",
    title: "Campus Facade & Courtyard",
    category: "Campus",
    imageUrl: "/images/Photos/School Building/School Building2.jpg",
    caption: "Spacious multi-storey campus designed for holistic student learning."
  },
  {
    id: "campus-building-3",
    title: "School Architecture",
    category: "Campus",
    imageUrl: "/images/Photos/School Building/School Building3.jpg",
    caption: "Safe, secure institutional premises in the heart of Rajajinagar."
  },
  {
    id: "classroom-learning-1",
    title: "Smart Classroom Interaction",
    category: "Academics",
    imageUrl: "/images/Photos/classroom/1.jpg",
    caption: "Interactive smartboard-equipped classrooms fostering participatory learning."
  },
  {
    id: "classroom-learning-2",
    title: "Primary Classroom Session",
    category: "Academics",
    imageUrl: "/images/Photos/classroom/2.jpg",
    caption: "Engaged learners collaborating with dedicated subject educators."
  },
  {
    id: "science-lab-1",
    title: "Composite Science Laboratory",
    category: "Infrastructure",
    imageUrl: "/images/Photos/Science Lab/1.jpg",
    caption: "Hands-on physics, chemistry, and biology experimentation setup."
  },
  {
    id: "science-lab-2",
    title: "Scientific Exploration",
    category: "Infrastructure",
    imageUrl: "/images/Photos/Science Lab/2.jpg",
    caption: "Students conducting supervised experiments following NCERT curriculum."
  },
  {
    id: "computer-lab-1",
    title: "Advanced Computer Laboratory",
    category: "Infrastructure",
    imageUrl: "/images/Photos/Computer lab/1.jpg",
    caption: "Modern computing systems enabling digital literacy, coding, and ICT skills."
  },
  {
    id: "robotics-lab-1",
    title: "Robotics & Innovation Lab",
    category: "Infrastructure",
    imageUrl: "/images/Photos/Robotics/1.jpg",
    caption: "STEM-based robotics kits teaching logical reasoning and modern mechanics."
  },
  {
    id: "library-reading-1",
    title: "Campus Knowledge Resource Center",
    category: "Infrastructure",
    imageUrl: "/images/Photos/Library/1.jpg",
    caption: "Extensive collection of books, periodicals, reference volumes, and fiction."
  },
  {
    id: "sports-activities-1",
    title: "Athletics & Physical Fitness",
    category: "Sports",
    imageUrl: "/images/Photos/Sports/1.jpg",
    caption: "Encouraging sportsmanship, endurance, and physical health."
  },
  {
    id: "yoga-sessions-1",
    title: "Holistic Yoga & Mindfulness",
    category: "Sports",
    imageUrl: "/images/Photos/Yoga/1.jpg",
    caption: "Guided asanas and meditation developing student concentration and posture."
  },
  {
    id: "taekwondo-training-1",
    title: "Taekwondo & Self-Defense",
    category: "Sports",
    imageUrl: "/images/Photos/Taekwondo/1.jpg",
    caption: "Martial arts training fostering discipline, agility, and defensive confidence."
  },
  {
    id: "celebration-janmashtami-1",
    title: "Janmashtami Cultural Celebrations",
    category: "Celebrations",
    imageUrl: "/images/Events/Krishna Janmastmi/1.jpg",
    caption: "Vibrant traditional enactments and joyful cultural festivities."
  },
  {
    id: "celebration-ganesha-1",
    title: "Eco-Friendly Ganesha Pooja",
    category: "Celebrations",
    imageUrl: "/images/Events/Ganesha Pooja/1.jpg",
    caption: "Community prayer and environmental awareness observance."
  },
  {
    id: "celebration-onam-1",
    title: "Pookkalam Floral Art",
    category: "Arts & Culture",
    imageUrl: "/images/Events/Onam/1.jpg",
    caption: "Traditional floral rangoli celebrating diversity and teamwork."
  },
  {
    id: "arts-crafts-1",
    title: "Creative Arts & Handiwork",
    category: "Arts & Culture",
    imageUrl: "/images/Photos/Art and Craft/1.jpg",
    caption: "Nurturing imaginative visual arts, pottery, and creative expression."
  },
  {
    id: "cubs-bulbul-1",
    title: "Cubs & Bulbul Scouts Wing",
    category: "Campus",
    imageUrl: "/images/Photos/Cubs and Bul Bul/1.jpg",
    caption: "Character-building scouting drills cultivating citizenship and service."
  }
];
