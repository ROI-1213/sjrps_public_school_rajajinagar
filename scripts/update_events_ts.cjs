const fs = require('fs');

const eventData = [
  {
    id: "investiture-ceremony-2026",
    title: "Investiture Ceremony 2026–27",
    category: "Campus Life",
    date: "July 2026",
    academicYear: "2026–27",
    summary: "Formal leadership induction, badge pinning, and oath-taking ceremony for the newly elected Student Council at SJR Public School.",
    description: "SJR Public School proudly conducted the Investiture Ceremony 2026–27, celebrating leadership, responsibility, and excellence. The ceremony featured the traditional lighting of the lamp, an energetic welcome dance, badge pinning of the newly elected Student Council, and the solemn oath-taking ceremony. Students who secured Centum in the Academic Year 2025–26 were felicitated with special honours and gifts from their subject teachers. A proud highlight of the event was the presentation of a Telescope, sponsored by our Hon. Chairman Sir, to the Best Student of the Year. Congratulations to all our young leaders and achievers as they embark on an inspiring journey to Lead, Serve, and Inspire.",
    featuredImage: "/images/Events/Investiture ceremony/WhatsApp Image 2026-10-05 at 2.08.27 PM (1).jpeg",
    folder: "Investiture ceremony"
  },
  {
    id: "school-election-democracy",
    title: "Student Council Election",
    category: "Academic",
    date: "June 2026",
    academicYear: "2026–27",
    summary: "Experiential democratic ballot voting giving students first-hand exposure to fair elections, leadership, and civic responsibility.",
    description: "SJR Public School successfully conducted the Student Council Election, providing students with a valuable opportunity to experience the democratic process first-hand. The election was organized in a fair, transparent, and systematic manner, encouraging students to exercise their right to vote responsibly. Through this process, students learned the importance of leadership, accountability, decision-making, and active participation in a democratic society. The enthusiasm shown by both the candidates and voters reflected the spirit of teamwork, responsibility, and healthy competition. The election served as an excellent platform for nurturing future leaders and fostering civic awareness among students. \"Leadership begins with responsibility, and democracy begins with participation.\"",
    featuredImage: "/images/Events/School Election/WhatsApp Image 2026-10-05 at 2.08.28 PM (1).jpeg",
    folder: "School Election"
  },
  {
    id: "krishna-janmashtami-celebration",
    title: "Krishna Janmashtami Festivities",
    category: "Celebration",
    date: "August 2026",
    academicYear: "2026–27",
    summary: "Joyous cultural celebrations featuring nursery learners in vibrant traditional attire as little Krishnas and Radhas.",
    description: "Dressed in vibrant, traditional attire as little Krishnas and Radhas, our nursery students lit up the celebration with their lively smiles and playful energy. Their colorful participation brought an infectious charm to the campus, setting a joyful and auspicious tone for the entire school community with devotional songs, dance, and cultural harmony.",
    featuredImage: "/images/Events/Krishna Janmastmi/WhatsApp Image 2026-10-01 at 13.37.09 (1).jpeg",
    folder: "Krishna Janmastmi"
  },
  {
    id: "ganesha-pooja-celebration",
    title: "Ganesha Pooja Festivities",
    category: "Celebration",
    date: "September 2026",
    academicYear: "2026–27",
    summary: "Auspicious celebration bringing students and faculty together for traditional prayers, hymns, and eco-friendly festivities.",
    description: "The school celebrated Ganesh Puja with great devotion and enthusiasm across all classes, bringing students and staff together in a vibrant spiritual atmosphere. The event featured traditional prayers, devotional hymns, and cultural performances, concluding with the distribution of prasad and heartfelt blessings for wisdom, learning, and auspicious new beginnings.",
    featuredImage: "/images/Events/Ganesha Pooja/WhatsApp Image 2026-10-01 at 13.37.00.jpeg",
    folder: "Ganesha Pooja"
  },
  {
    id: "onam-celebration",
    title: "Onam Festival & Pookkalam",
    category: "Cultural",
    date: "September 2026",
    academicYear: "2026–27",
    summary: "Festive celebration celebrating cultural heritage with students and staff crafting elaborate floral rangolis (Pookkalam).",
    description: "The school campus came alive with festive spirit as students and teachers joined hands to celebrate Onam with great enthusiasm. Together, they showcased their creativity and teamwork by crafting vibrant floral rangolis (Pookkalam), filling the atmosphere with joy, unity, and traditional charm.",
    featuredImage: "/images/Events/Onam/WhatsApp Image 2026-10-01 at 14.35.15.jpeg",
    folder: "Onam"
  },
  {
    id: "rangoli-art-competition",
    title: "Inter-House Rangoli Competition",
    category: "Cultural",
    date: "October 2026",
    academicYear: "2026–27",
    summary: "Creative display of intricate geometric patterns, vibrant colors, and artistic talent by students of classes 6 to 10.",
    description: "Students from classes 6 to 10 enthusiastically showcased their artistic talents in a vibrant rangoli competition filled with rich colors and intricate patterns. The event fostered teamwork and cultural celebration, turning the school corridors into stunning visual displays.",
    featuredImage: "/images/Events/Rangoli/WhatsApp Image 2026-10-01 at 13.37.18 (2).jpeg",
    folder: "Rangoli"
  },
  {
    id: "fruits-identification-day",
    title: "Pre-Primary Fruit Identification Activity",
    category: "Academic",
    date: "July 2026",
    academicYear: "2026–27",
    summary: "Sensorial vocabulary-building and nutrition activity where nursery learners identified and explored healthy fruits.",
    description: "Our nursery learners enthusiastically participated in a fruit identification competition, naming various colorful fruits to build their vocabulary and healthy eating habits. The interactive event was a delightful sensory experience that kept the young children engaged and eager to learn.",
    featuredImage: "/images/Events/Fruits Identification/WhatsApp Image 2026-10-01 at 15.00.25 (1).jpeg",
    folder: "Fruits Identification"
  },
  {
    id: "annual-sports-meet-2026",
    title: "Annual Sports Meet & Athletic Championship",
    category: "Sports",
    date: "January 2026",
    academicYear: "2025–26",
    summary: "Showcase of athletic excellence, track events, team spirit, and sportsmanship across primary and secondary wings.",
    description: "The Annual Sports Meet at SJRPS-Rajajinagar showcased remarkable athleticism, teamwork, and sportsmanship. Students from primary and secondary wings enthusiastically participated in track events, relay races, marching drills, and athletic displays under the guidance of our physical education department.",
    featuredImage: "/images/Events/Annual Sports Meet/FB_IMG_1791268754974.jpg",
    folder: "Annual Sports Meet"
  }
];

const inventory = JSON.parse(fs.readFileSync('scripts/event_inventory_data.json', 'utf8'));

let tsContent = `export interface SchoolEvent {
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
`;

for (const ev of eventData) {
  const inv = inventory.find(i => i.folder === ev.folder);
  const gallery = inv ? inv.images.map(img => img.webPath) : [];
  
  tsContent += `  {
    id: ${JSON.stringify(ev.id)},
    title: ${JSON.stringify(ev.title)},
    category: ${JSON.stringify(ev.category)},
    date: ${JSON.stringify(ev.date)},
    academicYear: ${JSON.stringify(ev.academicYear)},
    description: ${JSON.stringify(ev.description)},
    summary: ${JSON.stringify(ev.summary)},
    featuredImage: ${JSON.stringify(ev.featuredImage)},
    galleryImages: ${JSON.stringify(gallery, null, 6).replace(/\n/g, '\n    ')}
  },\n`;
}

tsContent += `];\n`;

fs.writeFileSync('src/data/events.ts', tsContent, 'utf8');
console.log('src/data/events.ts successfully updated!');
