const fs = require('fs');
const path = require('path');

const eventsBase = path.resolve('public/images/Events');
const photosBase = path.resolve('public/images/Photos');
const oldBase = path.resolve('public/images/Old photos');

const galleryItems = [];

// Helper to sanitize title
function formatTitle(name) {
  return name.replace(/\.[^/.]+$/, "")
             .replace(/WhatsApp Image 2026-10-01 at /g, "")
             .replace(/WhatsApp Image 2026-10-05 at /g, "")
             .replace(/FB_IMG_/g, "Sports Moment ")
             .replace(/\(\d+\)/g, "")
             .trim();
}

// 1. Events (69 images)
const eventFriendlyNames = {
  "Annual Sports Meet": "Annual Sports Meet & Athletics",
  "Fruits Identification": "Pre-Primary Fruit Identification Activity",
  "Ganesha Pooja": "Ganesha Pooja Festivities",
  "Investiture ceremony": "Investiture Ceremony 2026–27",
  "Krishna Janmastmi": "Krishna Janmashtami Celebration",
  "Onam": "Onam Festival & Pookkalam",
  "Rangoli": "Inter-House Rangoli Competition",
  "School Election": "Student Council Election"
};

if (fs.existsSync(eventsBase)) {
  for (const eventFolder of fs.readdirSync(eventsBase)) {
    const dir = path.join(eventsBase, eventFolder);
    if (!fs.statSync(dir).isDirectory()) continue;
    const files = fs.readdirSync(dir).filter(f => /\.(jpg|jpeg|png)$/i.test(f));
    const friendly = eventFriendlyNames[eventFolder] || eventFolder;
    
    files.forEach((file, idx) => {
      galleryItems.push({
        id: `event-${eventFolder.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${idx + 1}`,
        category: "events",
        categoryLabel: "Events",
        title: `${friendly} — Photo ${idx + 1}`,
        eventTitle: friendly,
        src: `/images/Events/${eventFolder}/${file}`,
        originalFilename: file,
      });
    });
  }
}

// 2. Photos/ (98 images) — EXCLUDING Staff photo & Core Team
const folderMappings = {
  "Art and Craft": { cat: "cultural", label: "Cultural & Arts", title: "Creative Art & Craft Session" },
  "Assembly": { cat: "cultural", label: "Cultural & Arts", title: "Morning School Assembly" },
  "Auditorium": { cat: "campus", label: "Campus & Facilities", title: "Modern Multi-Purpose Auditorium" },
  "classroom": { cat: "classroom", label: "Classrooms", title: "Interactive Learning Classroom" },
  "Computer lab": { cat: "labs", label: "Labs & STEM", title: "Advanced Computer Laboratory" },
  "Cubs and Bul Bul": { cat: "sports", label: "Sports & Activities", title: "Cubs & Bulbul Scouts Activity" },
  "Kids Play Area And Activity": { cat: "sports", label: "Sports & Activities", title: "Kids Play Area & Activity Zone" },
  "Library": { cat: "campus", label: "Campus & Facilities", title: "School Knowledge Resource Library" },
  "MPT And playground": { cat: "sports", label: "Sports & Activities", title: "Mass Physical Training & Playground" },
  "Music": { cat: "cultural", label: "Cultural & Arts", title: "Music & Performing Arts Studio" },
  "Ramp": { cat: "campus", label: "Campus & Facilities", title: "Accessible Campus Ramp Infrastructure" },
  "RO Plant": { cat: "campus", label: "Campus & Facilities", title: "Pure Drinking Water RO Plant" },
  "Robotics": { cat: "labs", label: "Labs & STEM", title: "STEM Robotics Innovation Lab" },
  "School Building": { cat: "campus", label: "Campus & Facilities", title: "Rajajinagar Campus Building & Entrance" },
  "Science Lab": { cat: "labs", label: "Labs & STEM", title: "Composite Science Laboratory" },
  "Sports": { cat: "sports", label: "Sports & Activities", title: "Sports Athletics & Games" },
  "Taekwondo": { cat: "sports", label: "Sports & Activities", title: "Taekwondo Self-Defense Martial Arts" },
  "Yoga": { cat: "cultural", label: "Cultural & Arts", title: "Yoga & Mindfulness Session" }
};

if (fs.existsSync(photosBase)) {
  for (const folder of fs.readdirSync(photosBase)) {
    if (['Staff photo', 'Core Team'].includes(folder)) continue;
    const dir = path.join(photosBase, folder);
    if (!fs.statSync(dir).isDirectory()) continue;
    const mapping = folderMappings[folder] || { cat: "campus", label: "Campus", title: folder };
    
    const files = fs.readdirSync(dir).filter(f => /\.(jpg|jpeg|png)$/i.test(f));
    files.forEach((file, idx) => {
      galleryItems.push({
        id: `facility-${folder.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${idx + 1}`,
        category: mapping.cat,
        categoryLabel: mapping.label,
        title: `${mapping.title} — Photo ${idx + 1}`,
        eventTitle: mapping.title,
        src: `/images/Photos/${folder}/${file}`,
        originalFilename: file,
      });
    });
  }
}

// 3. Old photos/ (7 images)
if (fs.existsSync(oldBase)) {
  const files = fs.readdirSync(oldBase).filter(f => /\.(jpg|jpeg|png)$/i.test(f));
  files.forEach((file, idx) => {
    galleryItems.push({
      id: `heritage-${idx + 1}`,
      category: "heritage",
      categoryLabel: "Our Heritage",
      title: `Archival Heritage — Historic Photo ${idx + 1}`,
      eventTitle: "Archival Heritage",
      src: `/images/Old photos/${file}`,
      originalFilename: file,
    });
  });
}

console.log('Total items in galleryPhotos:', galleryItems.length);

const tsContent = `/**
 * SJR Public School, Rajajinagar — Complete Authentic School Photo Gallery Dataset
 * Total Images: ${galleryItems.length} photographs
 * Excludes: Staff photo & Core Team (per official branch instructions)
 */

export interface GalleryPhotoItem {
  id: string;
  category: "events" | "classroom" | "labs" | "sports" | "cultural" | "campus" | "heritage";
  categoryLabel: string;
  title: string;
  eventTitle: string;
  src: string;
  originalFilename: string;
}

export const galleryFilterTabs = [
  { id: "all", label: "All Photos (${galleryItems.length})" },
  { id: "events", label: "Events (69)" },
  { id: "campus", label: "Campus & Facilities (19)" },
  { id: "classroom", label: "Classrooms (5)" },
  { id: "labs", label: "Labs & STEM (21)" },
  { id: "sports", label: "Sports & Activities (28)" },
  { id: "cultural", label: "Cultural & Arts (25)" },
  { id: "heritage", label: "Our Heritage (7)" },
];

export const allSchoolPhotos: GalleryPhotoItem[] = ${JSON.stringify(galleryItems, null, 2)};
`;

fs.writeFileSync('src/data/galleryPhotos.ts', tsContent, 'utf8');
console.log('src/data/galleryPhotos.ts written successfully!');
