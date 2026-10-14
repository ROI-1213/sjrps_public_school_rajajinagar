/**
 * SJR Public School, Rajajinagar — Complete Authentic School Photo Gallery Dataset
 * Total Images: 174 photographs
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
  { id: "all", label: "All Photos" },
  { id: "events", label: "Events" },
  { id: "campus", label: "Campus & Facilities" },
  { id: "classroom", label: "Classrooms" },
  { id: "labs", label: "Labs & STEM" },
  { id: "sports", label: "Sports & Activities" },
  { id: "cultural", label: "Cultural & Arts" },
  { id: "heritage", label: "Our Heritage" },
];

export const allSchoolPhotos: GalleryPhotoItem[] = [
  {
    "id": "event-annual-sports-meet-1",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Annual Sports Meet & Athletics — Photo 1",
    "eventTitle": "Annual Sports Meet & Athletics",
    "src": "/images/Events/Annual Sports Meet/FB_IMG_1791268718738.jpg",
    "originalFilename": "FB_IMG_1791268718738.jpg"
  },
  {
    "id": "event-annual-sports-meet-2",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Annual Sports Meet & Athletics — Photo 2",
    "eventTitle": "Annual Sports Meet & Athletics",
    "src": "/images/Events/Annual Sports Meet/FB_IMG_1791268740390.jpg",
    "originalFilename": "FB_IMG_1791268740390.jpg"
  },
  {
    "id": "event-annual-sports-meet-3",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Annual Sports Meet & Athletics — Photo 3",
    "eventTitle": "Annual Sports Meet & Athletics",
    "src": "/images/Events/Annual Sports Meet/FB_IMG_1791268754974.jpg",
    "originalFilename": "FB_IMG_1791268754974.jpg"
  },
  {
    "id": "event-annual-sports-meet-4",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Annual Sports Meet & Athletics — Photo 4",
    "eventTitle": "Annual Sports Meet & Athletics",
    "src": "/images/Events/Annual Sports Meet/FB_IMG_1791268784022.jpg",
    "originalFilename": "FB_IMG_1791268784022.jpg"
  },
  {
    "id": "event-annual-sports-meet-5",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Annual Sports Meet & Athletics — Photo 5",
    "eventTitle": "Annual Sports Meet & Athletics",
    "src": "/images/Events/Annual Sports Meet/FB_IMG_1791268787161.jpg",
    "originalFilename": "FB_IMG_1791268787161.jpg"
  },
  {
    "id": "event-annual-sports-meet-6",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Annual Sports Meet & Athletics — Photo 6",
    "eventTitle": "Annual Sports Meet & Athletics",
    "src": "/images/Events/Annual Sports Meet/FB_IMG_1791268823146.jpg",
    "originalFilename": "FB_IMG_1791268823146.jpg"
  },
  {
    "id": "event-annual-sports-meet-7",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Annual Sports Meet & Athletics — Photo 7",
    "eventTitle": "Annual Sports Meet & Athletics",
    "src": "/images/Events/Annual Sports Meet/FB_IMG_1791268830104.jpg",
    "originalFilename": "FB_IMG_1791268830104.jpg"
  },
  {
    "id": "event-annual-sports-meet-8",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Annual Sports Meet & Athletics — Photo 8",
    "eventTitle": "Annual Sports Meet & Athletics",
    "src": "/images/Events/Annual Sports Meet/FB_IMG_1791268836023.jpg",
    "originalFilename": "FB_IMG_1791268836023.jpg"
  },
  {
    "id": "event-annual-sports-meet-9",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Annual Sports Meet & Athletics — Photo 9",
    "eventTitle": "Annual Sports Meet & Athletics",
    "src": "/images/Events/Annual Sports Meet/FB_IMG_1791268847668.jpg",
    "originalFilename": "FB_IMG_1791268847668.jpg"
  },
  {
    "id": "event-annual-sports-meet-10",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Annual Sports Meet & Athletics — Photo 10",
    "eventTitle": "Annual Sports Meet & Athletics",
    "src": "/images/Events/Annual Sports Meet/FB_IMG_1791268853665.jpg",
    "originalFilename": "FB_IMG_1791268853665.jpg"
  },
  {
    "id": "event-annual-sports-meet-11",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Annual Sports Meet & Athletics — Photo 11",
    "eventTitle": "Annual Sports Meet & Athletics",
    "src": "/images/Events/Annual Sports Meet/FB_IMG_1791268862963.jpg",
    "originalFilename": "FB_IMG_1791268862963.jpg"
  },
  {
    "id": "event-annual-sports-meet-12",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Annual Sports Meet & Athletics — Photo 12",
    "eventTitle": "Annual Sports Meet & Athletics",
    "src": "/images/Events/Annual Sports Meet/FB_IMG_1791268867696.jpg",
    "originalFilename": "FB_IMG_1791268867696.jpg"
  },
  {
    "id": "event-fruits-identification-1",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Pre-Primary Fruit Identification Activity — Photo 1",
    "eventTitle": "Pre-Primary Fruit Identification Activity",
    "src": "/images/Events/Fruits Identification/WhatsApp Image 2026-10-01 at 15.00.25 (1).jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 15.00.25 (1).jpeg"
  },
  {
    "id": "event-fruits-identification-2",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Pre-Primary Fruit Identification Activity — Photo 2",
    "eventTitle": "Pre-Primary Fruit Identification Activity",
    "src": "/images/Events/Fruits Identification/WhatsApp Image 2026-10-01 at 15.00.25.jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 15.00.25.jpeg"
  },
  {
    "id": "event-fruits-identification-3",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Pre-Primary Fruit Identification Activity — Photo 3",
    "eventTitle": "Pre-Primary Fruit Identification Activity",
    "src": "/images/Events/Fruits Identification/WhatsApp Image 2026-10-01 at 15.00.28 (1).jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 15.00.28 (1).jpeg"
  },
  {
    "id": "event-fruits-identification-4",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Pre-Primary Fruit Identification Activity — Photo 4",
    "eventTitle": "Pre-Primary Fruit Identification Activity",
    "src": "/images/Events/Fruits Identification/WhatsApp Image 2026-10-01 at 15.00.28 (2).jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 15.00.28 (2).jpeg"
  },
  {
    "id": "event-fruits-identification-5",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Pre-Primary Fruit Identification Activity — Photo 5",
    "eventTitle": "Pre-Primary Fruit Identification Activity",
    "src": "/images/Events/Fruits Identification/WhatsApp Image 2026-10-01 at 15.00.28.jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 15.00.28.jpeg"
  },
  {
    "id": "event-fruits-identification-6",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Pre-Primary Fruit Identification Activity — Photo 6",
    "eventTitle": "Pre-Primary Fruit Identification Activity",
    "src": "/images/Events/Fruits Identification/WhatsApp Image 2026-10-01 at 15.02.31 (1).jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 15.02.31 (1).jpeg"
  },
  {
    "id": "event-fruits-identification-7",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Pre-Primary Fruit Identification Activity — Photo 7",
    "eventTitle": "Pre-Primary Fruit Identification Activity",
    "src": "/images/Events/Fruits Identification/WhatsApp Image 2026-10-01 at 15.02.31 (2).jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 15.02.31 (2).jpeg"
  },
  {
    "id": "event-fruits-identification-8",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Pre-Primary Fruit Identification Activity — Photo 8",
    "eventTitle": "Pre-Primary Fruit Identification Activity",
    "src": "/images/Events/Fruits Identification/WhatsApp Image 2026-10-01 at 15.02.31.jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 15.02.31.jpeg"
  },
  {
    "id": "event-fruits-identification-9",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Pre-Primary Fruit Identification Activity — Photo 9",
    "eventTitle": "Pre-Primary Fruit Identification Activity",
    "src": "/images/Events/Fruits Identification/WhatsApp Image 2026-10-01 at 15.02.32.jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 15.02.32.jpeg"
  },
  {
    "id": "event-ganesha-pooja-1",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Ganesha Pooja Festivities — Photo 1",
    "eventTitle": "Ganesha Pooja Festivities",
    "src": "/images/Events/Ganesha Pooja/WhatsApp Image 2026-10-01 at 13.36.37.jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 13.36.37.jpeg"
  },
  {
    "id": "event-ganesha-pooja-2",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Ganesha Pooja Festivities — Photo 2",
    "eventTitle": "Ganesha Pooja Festivities",
    "src": "/images/Events/Ganesha Pooja/WhatsApp Image 2026-10-01 at 13.36.42.jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 13.36.42.jpeg"
  },
  {
    "id": "event-ganesha-pooja-3",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Ganesha Pooja Festivities — Photo 3",
    "eventTitle": "Ganesha Pooja Festivities",
    "src": "/images/Events/Ganesha Pooja/WhatsApp Image 2026-10-01 at 13.36.44.jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 13.36.44.jpeg"
  },
  {
    "id": "event-ganesha-pooja-4",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Ganesha Pooja Festivities — Photo 4",
    "eventTitle": "Ganesha Pooja Festivities",
    "src": "/images/Events/Ganesha Pooja/WhatsApp Image 2026-10-01 at 13.36.54.jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 13.36.54.jpeg"
  },
  {
    "id": "event-ganesha-pooja-5",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Ganesha Pooja Festivities — Photo 5",
    "eventTitle": "Ganesha Pooja Festivities",
    "src": "/images/Events/Ganesha Pooja/WhatsApp Image 2026-10-01 at 13.36.57.jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 13.36.57.jpeg"
  },
  {
    "id": "event-ganesha-pooja-6",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Ganesha Pooja Festivities — Photo 6",
    "eventTitle": "Ganesha Pooja Festivities",
    "src": "/images/Events/Ganesha Pooja/WhatsApp Image 2026-10-01 at 13.37.00.jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 13.37.00.jpeg"
  },
  {
    "id": "event-ganesha-pooja-7",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Ganesha Pooja Festivities — Photo 7",
    "eventTitle": "Ganesha Pooja Festivities",
    "src": "/images/Events/Ganesha Pooja/WhatsApp Image 2026-10-01 at 13.37.02.jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 13.37.02.jpeg"
  },
  {
    "id": "event-investiture-ceremony-1",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Investiture Ceremony 2026–27 — Photo 1",
    "eventTitle": "Investiture Ceremony 2026–27",
    "src": "/images/Events/Investiture ceremony/WhatsApp Image 2026-10-05 at 2.08.27 PM (1).jpeg",
    "originalFilename": "WhatsApp Image 2026-10-05 at 2.08.27 PM (1).jpeg"
  },
  {
    "id": "event-investiture-ceremony-2",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Investiture Ceremony 2026–27 — Photo 2",
    "eventTitle": "Investiture Ceremony 2026–27",
    "src": "/images/Events/Investiture ceremony/WhatsApp Image 2026-10-05 at 2.08.27 PM.jpeg",
    "originalFilename": "WhatsApp Image 2026-10-05 at 2.08.27 PM.jpeg"
  },
  {
    "id": "event-investiture-ceremony-3",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Investiture Ceremony 2026–27 — Photo 3",
    "eventTitle": "Investiture Ceremony 2026–27",
    "src": "/images/Events/Investiture ceremony/WhatsApp Image 2026-10-05 at 2.08.28 PM.jpeg",
    "originalFilename": "WhatsApp Image 2026-10-05 at 2.08.28 PM.jpeg"
  },
  {
    "id": "event-krishna-janmastmi-1",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Krishna Janmashtami Celebration — Photo 1",
    "eventTitle": "Krishna Janmashtami Celebration",
    "src": "/images/Events/Krishna Janmastmi/WhatsApp Image 2026-10-01 at 13.37.09 (1).jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 13.37.09 (1).jpeg"
  },
  {
    "id": "event-krishna-janmastmi-2",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Krishna Janmashtami Celebration — Photo 2",
    "eventTitle": "Krishna Janmashtami Celebration",
    "src": "/images/Events/Krishna Janmastmi/WhatsApp Image 2026-10-01 at 13.37.09.jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 13.37.09.jpeg"
  },
  {
    "id": "event-krishna-janmastmi-3",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Krishna Janmashtami Celebration — Photo 3",
    "eventTitle": "Krishna Janmashtami Celebration",
    "src": "/images/Events/Krishna Janmastmi/WhatsApp Image 2026-10-01 at 14.20.20.jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 14.20.20.jpeg"
  },
  {
    "id": "event-krishna-janmastmi-4",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Krishna Janmashtami Celebration — Photo 4",
    "eventTitle": "Krishna Janmashtami Celebration",
    "src": "/images/Events/Krishna Janmastmi/WhatsApp Image 2026-10-01 at 14.20.28.jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 14.20.28.jpeg"
  },
  {
    "id": "event-krishna-janmastmi-5",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Krishna Janmashtami Celebration — Photo 5",
    "eventTitle": "Krishna Janmashtami Celebration",
    "src": "/images/Events/Krishna Janmastmi/WhatsApp Image 2026-10-01 at 14.20.34 (1).jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 14.20.34 (1).jpeg"
  },
  {
    "id": "event-krishna-janmastmi-6",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Krishna Janmashtami Celebration — Photo 6",
    "eventTitle": "Krishna Janmashtami Celebration",
    "src": "/images/Events/Krishna Janmastmi/WhatsApp Image 2026-10-01 at 14.20.34.jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 14.20.34.jpeg"
  },
  {
    "id": "event-krishna-janmastmi-7",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Krishna Janmashtami Celebration — Photo 7",
    "eventTitle": "Krishna Janmashtami Celebration",
    "src": "/images/Events/Krishna Janmastmi/WhatsApp Image 2026-10-01 at 14.20.36 (1).jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 14.20.36 (1).jpeg"
  },
  {
    "id": "event-krishna-janmastmi-8",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Krishna Janmashtami Celebration — Photo 8",
    "eventTitle": "Krishna Janmashtami Celebration",
    "src": "/images/Events/Krishna Janmastmi/WhatsApp Image 2026-10-01 at 14.20.36 (2).jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 14.20.36 (2).jpeg"
  },
  {
    "id": "event-krishna-janmastmi-9",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Krishna Janmashtami Celebration — Photo 9",
    "eventTitle": "Krishna Janmashtami Celebration",
    "src": "/images/Events/Krishna Janmastmi/WhatsApp Image 2026-10-01 at 14.20.37 (1).jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 14.20.37 (1).jpeg"
  },
  {
    "id": "event-krishna-janmastmi-10",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Krishna Janmashtami Celebration — Photo 10",
    "eventTitle": "Krishna Janmashtami Celebration",
    "src": "/images/Events/Krishna Janmastmi/WhatsApp Image 2026-10-01 at 14.20.44 (1).jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 14.20.44 (1).jpeg"
  },
  {
    "id": "event-krishna-janmastmi-11",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Krishna Janmashtami Celebration — Photo 11",
    "eventTitle": "Krishna Janmashtami Celebration",
    "src": "/images/Events/Krishna Janmastmi/WhatsApp Image 2026-10-01 at 14.20.44.jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 14.20.44.jpeg"
  },
  {
    "id": "event-krishna-janmastmi-12",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Krishna Janmashtami Celebration — Photo 12",
    "eventTitle": "Krishna Janmashtami Celebration",
    "src": "/images/Events/Krishna Janmastmi/WhatsApp Image 2026-10-01 at 14.20.45.jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 14.20.45.jpeg"
  },
  {
    "id": "event-krishna-janmastmi-13",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Krishna Janmashtami Celebration — Photo 13",
    "eventTitle": "Krishna Janmashtami Celebration",
    "src": "/images/Events/Krishna Janmastmi/WhatsApp Image 2026-10-01 at 14.20.47.jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 14.20.47.jpeg"
  },
  {
    "id": "event-krishna-janmastmi-14",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Krishna Janmashtami Celebration — Photo 14",
    "eventTitle": "Krishna Janmashtami Celebration",
    "src": "/images/Events/Krishna Janmastmi/WhatsApp Image 2026-10-01 at 14.20.48 (1).jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 14.20.48 (1).jpeg"
  },
  {
    "id": "event-krishna-janmastmi-15",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Krishna Janmashtami Celebration — Photo 15",
    "eventTitle": "Krishna Janmashtami Celebration",
    "src": "/images/Events/Krishna Janmastmi/WhatsApp Image 2026-10-01 at 14.20.50 (1).jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 14.20.50 (1).jpeg"
  },
  {
    "id": "event-krishna-janmastmi-16",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Krishna Janmashtami Celebration — Photo 16",
    "eventTitle": "Krishna Janmashtami Celebration",
    "src": "/images/Events/Krishna Janmastmi/WhatsApp Image 2026-10-01 at 14.20.51 (1).jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 14.20.51 (1).jpeg"
  },
  {
    "id": "event-krishna-janmastmi-17",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Krishna Janmashtami Celebration — Photo 17",
    "eventTitle": "Krishna Janmashtami Celebration",
    "src": "/images/Events/Krishna Janmastmi/WhatsApp Image 2026-10-01 at 14.20.51.jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 14.20.51.jpeg"
  },
  {
    "id": "event-krishna-janmastmi-18",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Krishna Janmashtami Celebration — Photo 18",
    "eventTitle": "Krishna Janmashtami Celebration",
    "src": "/images/Events/Krishna Janmastmi/WhatsApp Image 2026-10-01 at 14.20.52.jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 14.20.52.jpeg"
  },
  {
    "id": "event-onam-1",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Onam Festival & Pookkalam — Photo 1",
    "eventTitle": "Onam Festival & Pookkalam",
    "src": "/images/Events/Onam/WhatsApp Image 2026-10-01 at 13.49.43.jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 13.49.43.jpeg"
  },
  {
    "id": "event-onam-2",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Onam Festival & Pookkalam — Photo 2",
    "eventTitle": "Onam Festival & Pookkalam",
    "src": "/images/Events/Onam/WhatsApp Image 2026-10-01 at 14.35.15.jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 14.35.15.jpeg"
  },
  {
    "id": "event-onam-3",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Onam Festival & Pookkalam — Photo 3",
    "eventTitle": "Onam Festival & Pookkalam",
    "src": "/images/Events/Onam/WhatsApp Image 2026-10-01 at 14.35.20.jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 14.35.20.jpeg"
  },
  {
    "id": "event-onam-4",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Onam Festival & Pookkalam — Photo 4",
    "eventTitle": "Onam Festival & Pookkalam",
    "src": "/images/Events/Onam/WhatsApp Image 2026-10-01 at 14.35.23 (1).jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 14.35.23 (1).jpeg"
  },
  {
    "id": "event-onam-5",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Onam Festival & Pookkalam — Photo 5",
    "eventTitle": "Onam Festival & Pookkalam",
    "src": "/images/Events/Onam/WhatsApp Image 2026-10-01 at 14.35.25 (1).jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 14.35.25 (1).jpeg"
  },
  {
    "id": "event-onam-6",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Onam Festival & Pookkalam — Photo 6",
    "eventTitle": "Onam Festival & Pookkalam",
    "src": "/images/Events/Onam/WhatsApp Image 2026-10-01 at 14.35.26 (2).jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 14.35.26 (2).jpeg"
  },
  {
    "id": "event-onam-7",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Onam Festival & Pookkalam — Photo 7",
    "eventTitle": "Onam Festival & Pookkalam",
    "src": "/images/Events/Onam/WhatsApp Image 2026-10-01 at 14.35.27 (1).jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 14.35.27 (1).jpeg"
  },
  {
    "id": "event-onam-8",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Onam Festival & Pookkalam — Photo 8",
    "eventTitle": "Onam Festival & Pookkalam",
    "src": "/images/Events/Onam/WhatsApp Image 2026-10-01 at 14.35.27.jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 14.35.27.jpeg"
  },
  {
    "id": "event-onam-9",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Onam Festival & Pookkalam — Photo 9",
    "eventTitle": "Onam Festival & Pookkalam",
    "src": "/images/Events/Onam/WhatsApp Image 2026-10-01 at 14.35.28 (1).jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 14.35.28 (1).jpeg"
  },
  {
    "id": "event-rangoli-1",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Inter-House Rangoli Competition — Photo 1",
    "eventTitle": "Inter-House Rangoli Competition",
    "src": "/images/Events/Rangoli/WhatsApp Image 2026-10-01 at 13.37.10.jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 13.37.10.jpeg"
  },
  {
    "id": "event-rangoli-2",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Inter-House Rangoli Competition — Photo 2",
    "eventTitle": "Inter-House Rangoli Competition",
    "src": "/images/Events/Rangoli/WhatsApp Image 2026-10-01 at 13.37.14.jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 13.37.14.jpeg"
  },
  {
    "id": "event-rangoli-3",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Inter-House Rangoli Competition — Photo 3",
    "eventTitle": "Inter-House Rangoli Competition",
    "src": "/images/Events/Rangoli/WhatsApp Image 2026-10-01 at 13.37.16.jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 13.37.16.jpeg"
  },
  {
    "id": "event-rangoli-4",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Inter-House Rangoli Competition — Photo 4",
    "eventTitle": "Inter-House Rangoli Competition",
    "src": "/images/Events/Rangoli/WhatsApp Image 2026-10-01 at 13.37.18 (1).jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 13.37.18 (1).jpeg"
  },
  {
    "id": "event-rangoli-5",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Inter-House Rangoli Competition — Photo 5",
    "eventTitle": "Inter-House Rangoli Competition",
    "src": "/images/Events/Rangoli/WhatsApp Image 2026-10-01 at 13.37.18 (2).jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 13.37.18 (2).jpeg"
  },
  {
    "id": "event-rangoli-6",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Inter-House Rangoli Competition — Photo 6",
    "eventTitle": "Inter-House Rangoli Competition",
    "src": "/images/Events/Rangoli/WhatsApp Image 2026-10-01 at 13.37.18.jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 13.37.18.jpeg"
  },
  {
    "id": "event-rangoli-7",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Inter-House Rangoli Competition — Photo 7",
    "eventTitle": "Inter-House Rangoli Competition",
    "src": "/images/Events/Rangoli/WhatsApp Image 2026-10-01 at 13.37.19.jpeg",
    "originalFilename": "WhatsApp Image 2026-10-01 at 13.37.19.jpeg"
  },
  {
    "id": "event-school-election-1",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Student Council Election — Photo 1",
    "eventTitle": "Student Council Election",
    "src": "/images/Events/School Election/WhatsApp Image 2026-10-05 at 2.08.28 PM (1).jpeg",
    "originalFilename": "WhatsApp Image 2026-10-05 at 2.08.28 PM (1).jpeg"
  },
  {
    "id": "event-school-election-2",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Student Council Election — Photo 2",
    "eventTitle": "Student Council Election",
    "src": "/images/Events/School Election/WhatsApp Image 2026-10-05 at 2.08.28 PM (2).jpeg",
    "originalFilename": "WhatsApp Image 2026-10-05 at 2.08.28 PM (2).jpeg"
  },
  {
    "id": "event-school-election-3",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Student Council Election — Photo 3",
    "eventTitle": "Student Council Election",
    "src": "/images/Events/School Election/WhatsApp Image 2026-10-05 at 2.08.28 PM (3).jpeg",
    "originalFilename": "WhatsApp Image 2026-10-05 at 2.08.28 PM (3).jpeg"
  },
  {
    "id": "event-school-election-4",
    "category": "events",
    "categoryLabel": "Events",
    "title": "Student Council Election — Photo 4",
    "eventTitle": "Student Council Election",
    "src": "/images/Events/School Election/WhatsApp Image 2026-10-05 at 2.08.29 PM.jpeg",
    "originalFilename": "WhatsApp Image 2026-10-05 at 2.08.29 PM.jpeg"
  },
  {
    "id": "facility-art-and-craft-1",
    "category": "cultural",
    "categoryLabel": "Cultural & Arts",
    "title": "Creative Art & Craft Session — Photo 1",
    "eventTitle": "Creative Art & Craft Session",
    "src": "/images/Photos/Art and Craft/DSC00861.JPG",
    "originalFilename": "DSC00861.JPG"
  },
  {
    "id": "facility-art-and-craft-2",
    "category": "cultural",
    "categoryLabel": "Cultural & Arts",
    "title": "Creative Art & Craft Session — Photo 2",
    "eventTitle": "Creative Art & Craft Session",
    "src": "/images/Photos/Art and Craft/DSC00877.JPG",
    "originalFilename": "DSC00877.JPG"
  },
  {
    "id": "facility-art-and-craft-3",
    "category": "cultural",
    "categoryLabel": "Cultural & Arts",
    "title": "Creative Art & Craft Session — Photo 3",
    "eventTitle": "Creative Art & Craft Session",
    "src": "/images/Photos/Art and Craft/DSC00878.JPG",
    "originalFilename": "DSC00878.JPG"
  },
  {
    "id": "facility-assembly-1",
    "category": "cultural",
    "categoryLabel": "Cultural & Arts",
    "title": "Morning School Assembly — Photo 1",
    "eventTitle": "Morning School Assembly",
    "src": "/images/Photos/Assembly/DSC00055.JPG",
    "originalFilename": "DSC00055.JPG"
  },
  {
    "id": "facility-assembly-2",
    "category": "cultural",
    "categoryLabel": "Cultural & Arts",
    "title": "Morning School Assembly — Photo 2",
    "eventTitle": "Morning School Assembly",
    "src": "/images/Photos/Assembly/DSC00056.JPG",
    "originalFilename": "DSC00056.JPG"
  },
  {
    "id": "facility-assembly-3",
    "category": "cultural",
    "categoryLabel": "Cultural & Arts",
    "title": "Morning School Assembly — Photo 3",
    "eventTitle": "Morning School Assembly",
    "src": "/images/Photos/Assembly/DSC00126.JPG",
    "originalFilename": "DSC00126.JPG"
  },
  {
    "id": "facility-assembly-4",
    "category": "cultural",
    "categoryLabel": "Cultural & Arts",
    "title": "Morning School Assembly — Photo 4",
    "eventTitle": "Morning School Assembly",
    "src": "/images/Photos/Assembly/DSC00162.JPG",
    "originalFilename": "DSC00162.JPG"
  },
  {
    "id": "facility-assembly-5",
    "category": "cultural",
    "categoryLabel": "Cultural & Arts",
    "title": "Morning School Assembly — Photo 5",
    "eventTitle": "Morning School Assembly",
    "src": "/images/Photos/Assembly/DSC00174.JPG",
    "originalFilename": "DSC00174.JPG"
  },
  {
    "id": "facility-assembly-6",
    "category": "cultural",
    "categoryLabel": "Cultural & Arts",
    "title": "Morning School Assembly — Photo 6",
    "eventTitle": "Morning School Assembly",
    "src": "/images/Photos/Assembly/DSC00224.JPG",
    "originalFilename": "DSC00224.JPG"
  },
  {
    "id": "facility-assembly-7",
    "category": "cultural",
    "categoryLabel": "Cultural & Arts",
    "title": "Morning School Assembly — Photo 7",
    "eventTitle": "Morning School Assembly",
    "src": "/images/Photos/Assembly/DSC00246.JPG",
    "originalFilename": "DSC00246.JPG"
  },
  {
    "id": "facility-assembly-8",
    "category": "cultural",
    "categoryLabel": "Cultural & Arts",
    "title": "Morning School Assembly — Photo 8",
    "eventTitle": "Morning School Assembly",
    "src": "/images/Photos/Assembly/DSC00256.JPG",
    "originalFilename": "DSC00256.JPG"
  },
  {
    "id": "facility-assembly-9",
    "category": "cultural",
    "categoryLabel": "Cultural & Arts",
    "title": "Morning School Assembly — Photo 9",
    "eventTitle": "Morning School Assembly",
    "src": "/images/Photos/Assembly/DSC00268.JPG",
    "originalFilename": "DSC00268.JPG"
  },
  {
    "id": "facility-assembly-10",
    "category": "cultural",
    "categoryLabel": "Cultural & Arts",
    "title": "Morning School Assembly — Photo 10",
    "eventTitle": "Morning School Assembly",
    "src": "/images/Photos/Assembly/DSC00301.JPG",
    "originalFilename": "DSC00301.JPG"
  },
  {
    "id": "facility-assembly-11",
    "category": "cultural",
    "categoryLabel": "Cultural & Arts",
    "title": "Morning School Assembly — Photo 11",
    "eventTitle": "Morning School Assembly",
    "src": "/images/Photos/Assembly/DSC00309.JPG",
    "originalFilename": "DSC00309.JPG"
  },
  {
    "id": "facility-assembly-12",
    "category": "cultural",
    "categoryLabel": "Cultural & Arts",
    "title": "Morning School Assembly — Photo 12",
    "eventTitle": "Morning School Assembly",
    "src": "/images/Photos/Assembly/DSC00311.JPG",
    "originalFilename": "DSC00311.JPG"
  },
  {
    "id": "facility-auditorium-1",
    "category": "campus",
    "categoryLabel": "Campus & Facilities",
    "title": "Modern Multi-Purpose Auditorium — Photo 1",
    "eventTitle": "Modern Multi-Purpose Auditorium",
    "src": "/images/Photos/Auditorium/DSC01238.JPG",
    "originalFilename": "DSC01238.JPG"
  },
  {
    "id": "facility-auditorium-2",
    "category": "campus",
    "categoryLabel": "Campus & Facilities",
    "title": "Modern Multi-Purpose Auditorium — Photo 2",
    "eventTitle": "Modern Multi-Purpose Auditorium",
    "src": "/images/Photos/Auditorium/DSC01249.JPG",
    "originalFilename": "DSC01249.JPG"
  },
  {
    "id": "facility-classroom-1",
    "category": "classroom",
    "categoryLabel": "Classrooms",
    "title": "Interactive Learning Classroom — Photo 1",
    "eventTitle": "Interactive Learning Classroom",
    "src": "/images/Photos/classroom/DSC00683.JPG",
    "originalFilename": "DSC00683.JPG"
  },
  {
    "id": "facility-classroom-2",
    "category": "classroom",
    "categoryLabel": "Classrooms",
    "title": "Interactive Learning Classroom — Photo 2",
    "eventTitle": "Interactive Learning Classroom",
    "src": "/images/Photos/classroom/DSC00689.JPG",
    "originalFilename": "DSC00689.JPG"
  },
  {
    "id": "facility-classroom-3",
    "category": "classroom",
    "categoryLabel": "Classrooms",
    "title": "Interactive Learning Classroom — Photo 3",
    "eventTitle": "Interactive Learning Classroom",
    "src": "/images/Photos/classroom/DSC00825.JPG",
    "originalFilename": "DSC00825.JPG"
  },
  {
    "id": "facility-classroom-4",
    "category": "classroom",
    "categoryLabel": "Classrooms",
    "title": "Interactive Learning Classroom — Photo 4",
    "eventTitle": "Interactive Learning Classroom",
    "src": "/images/Photos/classroom/DSC00828.JPG",
    "originalFilename": "DSC00828.JPG"
  },
  {
    "id": "facility-classroom-5",
    "category": "classroom",
    "categoryLabel": "Classrooms",
    "title": "Interactive Learning Classroom — Photo 5",
    "eventTitle": "Interactive Learning Classroom",
    "src": "/images/Photos/classroom/DSC00830.JPG",
    "originalFilename": "DSC00830.JPG"
  },
  {
    "id": "facility-computer-lab-1",
    "category": "labs",
    "categoryLabel": "Labs & STEM",
    "title": "Advanced Computer Laboratory — Photo 1",
    "eventTitle": "Advanced Computer Laboratory",
    "src": "/images/Photos/Computer lab/DSC00838.JPG",
    "originalFilename": "DSC00838.JPG"
  },
  {
    "id": "facility-computer-lab-2",
    "category": "labs",
    "categoryLabel": "Labs & STEM",
    "title": "Advanced Computer Laboratory — Photo 2",
    "eventTitle": "Advanced Computer Laboratory",
    "src": "/images/Photos/Computer lab/DSC00841.JPG",
    "originalFilename": "DSC00841.JPG"
  },
  {
    "id": "facility-computer-lab-3",
    "category": "labs",
    "categoryLabel": "Labs & STEM",
    "title": "Advanced Computer Laboratory — Photo 3",
    "eventTitle": "Advanced Computer Laboratory",
    "src": "/images/Photos/Computer lab/DSC00845.JPG",
    "originalFilename": "DSC00845.JPG"
  },
  {
    "id": "facility-computer-lab-4",
    "category": "labs",
    "categoryLabel": "Labs & STEM",
    "title": "Advanced Computer Laboratory — Photo 4",
    "eventTitle": "Advanced Computer Laboratory",
    "src": "/images/Photos/Computer lab/DSC00854.JPG",
    "originalFilename": "DSC00854.JPG"
  },
  {
    "id": "facility-computer-lab-5",
    "category": "labs",
    "categoryLabel": "Labs & STEM",
    "title": "Advanced Computer Laboratory — Photo 5",
    "eventTitle": "Advanced Computer Laboratory",
    "src": "/images/Photos/Computer lab/DSC00858.JPG",
    "originalFilename": "DSC00858.JPG"
  },
  {
    "id": "facility-computer-lab-6",
    "category": "labs",
    "categoryLabel": "Labs & STEM",
    "title": "Advanced Computer Laboratory — Photo 6",
    "eventTitle": "Advanced Computer Laboratory",
    "src": "/images/Photos/Computer lab/VIrtual Reality Kit1.jpg",
    "originalFilename": "VIrtual Reality Kit1.jpg"
  },
  {
    "id": "facility-computer-lab-7",
    "category": "labs",
    "categoryLabel": "Labs & STEM",
    "title": "Advanced Computer Laboratory — Photo 7",
    "eventTitle": "Advanced Computer Laboratory",
    "src": "/images/Photos/Computer lab/Virtual Reality Kit2.jpg",
    "originalFilename": "Virtual Reality Kit2.jpg"
  },
  {
    "id": "facility-cubs-and-bul-bul-1",
    "category": "sports",
    "categoryLabel": "Sports & Activities",
    "title": "Cubs & Bulbul Scouts Activity — Photo 1",
    "eventTitle": "Cubs & Bulbul Scouts Activity",
    "src": "/images/Photos/Cubs and Bul Bul/DSC00479.JPG",
    "originalFilename": "DSC00479.JPG"
  },
  {
    "id": "facility-cubs-and-bul-bul-2",
    "category": "sports",
    "categoryLabel": "Sports & Activities",
    "title": "Cubs & Bulbul Scouts Activity — Photo 2",
    "eventTitle": "Cubs & Bulbul Scouts Activity",
    "src": "/images/Photos/Cubs and Bul Bul/DSC00501.JPG",
    "originalFilename": "DSC00501.JPG"
  },
  {
    "id": "facility-cubs-and-bul-bul-3",
    "category": "sports",
    "categoryLabel": "Sports & Activities",
    "title": "Cubs & Bulbul Scouts Activity — Photo 3",
    "eventTitle": "Cubs & Bulbul Scouts Activity",
    "src": "/images/Photos/Cubs and Bul Bul/DSC00549.JPG",
    "originalFilename": "DSC00549.JPG"
  },
  {
    "id": "facility-cubs-and-bul-bul-4",
    "category": "sports",
    "categoryLabel": "Sports & Activities",
    "title": "Cubs & Bulbul Scouts Activity — Photo 4",
    "eventTitle": "Cubs & Bulbul Scouts Activity",
    "src": "/images/Photos/Cubs and Bul Bul/DSC00576.JPG",
    "originalFilename": "DSC00576.JPG"
  },
  {
    "id": "facility-cubs-and-bul-bul-5",
    "category": "sports",
    "categoryLabel": "Sports & Activities",
    "title": "Cubs & Bulbul Scouts Activity — Photo 5",
    "eventTitle": "Cubs & Bulbul Scouts Activity",
    "src": "/images/Photos/Cubs and Bul Bul/DSC00579.JPG",
    "originalFilename": "DSC00579.JPG"
  },
  {
    "id": "facility-kids-play-area-and-activity-1",
    "category": "sports",
    "categoryLabel": "Sports & Activities",
    "title": "Kids Play Area & Activity Zone — Photo 1",
    "eventTitle": "Kids Play Area & Activity Zone",
    "src": "/images/Photos/Kids Play Area And Activity/A7400871.JPG",
    "originalFilename": "A7400871.JPG"
  },
  {
    "id": "facility-kids-play-area-and-activity-2",
    "category": "sports",
    "categoryLabel": "Sports & Activities",
    "title": "Kids Play Area & Activity Zone — Photo 2",
    "eventTitle": "Kids Play Area & Activity Zone",
    "src": "/images/Photos/Kids Play Area And Activity/DSC00584.JPG",
    "originalFilename": "DSC00584.JPG"
  },
  {
    "id": "facility-kids-play-area-and-activity-3",
    "category": "sports",
    "categoryLabel": "Sports & Activities",
    "title": "Kids Play Area & Activity Zone — Photo 3",
    "eventTitle": "Kids Play Area & Activity Zone",
    "src": "/images/Photos/Kids Play Area And Activity/DSC00642.JPG",
    "originalFilename": "DSC00642.JPG"
  },
  {
    "id": "facility-kids-play-area-and-activity-4",
    "category": "sports",
    "categoryLabel": "Sports & Activities",
    "title": "Kids Play Area & Activity Zone — Photo 4",
    "eventTitle": "Kids Play Area & Activity Zone",
    "src": "/images/Photos/Kids Play Area And Activity/DSC00644.JPG",
    "originalFilename": "DSC00644.JPG"
  },
  {
    "id": "facility-kids-play-area-and-activity-5",
    "category": "sports",
    "categoryLabel": "Sports & Activities",
    "title": "Kids Play Area & Activity Zone — Photo 5",
    "eventTitle": "Kids Play Area & Activity Zone",
    "src": "/images/Photos/Kids Play Area And Activity/DSC00649.JPG",
    "originalFilename": "DSC00649.JPG"
  },
  {
    "id": "facility-kids-play-area-and-activity-6",
    "category": "sports",
    "categoryLabel": "Sports & Activities",
    "title": "Kids Play Area & Activity Zone — Photo 6",
    "eventTitle": "Kids Play Area & Activity Zone",
    "src": "/images/Photos/Kids Play Area And Activity/DSC00651.JPG",
    "originalFilename": "DSC00651.JPG"
  },
  {
    "id": "facility-kids-play-area-and-activity-7",
    "category": "sports",
    "categoryLabel": "Sports & Activities",
    "title": "Kids Play Area & Activity Zone — Photo 7",
    "eventTitle": "Kids Play Area & Activity Zone",
    "src": "/images/Photos/Kids Play Area And Activity/DSC00662.JPG",
    "originalFilename": "DSC00662.JPG"
  },
  {
    "id": "facility-kids-play-area-and-activity-8",
    "category": "sports",
    "categoryLabel": "Sports & Activities",
    "title": "Kids Play Area & Activity Zone — Photo 8",
    "eventTitle": "Kids Play Area & Activity Zone",
    "src": "/images/Photos/Kids Play Area And Activity/DSC00671.JPG",
    "originalFilename": "DSC00671.JPG"
  },
  {
    "id": "facility-kids-play-area-and-activity-9",
    "category": "sports",
    "categoryLabel": "Sports & Activities",
    "title": "Kids Play Area & Activity Zone — Photo 9",
    "eventTitle": "Kids Play Area & Activity Zone",
    "src": "/images/Photos/Kids Play Area And Activity/DSC00701.JPG",
    "originalFilename": "DSC00701.JPG"
  },
  {
    "id": "facility-kids-play-area-and-activity-10",
    "category": "sports",
    "categoryLabel": "Sports & Activities",
    "title": "Kids Play Area & Activity Zone — Photo 10",
    "eventTitle": "Kids Play Area & Activity Zone",
    "src": "/images/Photos/Kids Play Area And Activity/DSC00702.JPG",
    "originalFilename": "DSC00702.JPG"
  },
  {
    "id": "facility-kids-play-area-and-activity-11",
    "category": "sports",
    "categoryLabel": "Sports & Activities",
    "title": "Kids Play Area & Activity Zone — Photo 11",
    "eventTitle": "Kids Play Area & Activity Zone",
    "src": "/images/Photos/Kids Play Area And Activity/DSC01447.JPG",
    "originalFilename": "DSC01447.JPG"
  },
  {
    "id": "facility-kids-play-area-and-activity-12",
    "category": "sports",
    "categoryLabel": "Sports & Activities",
    "title": "Kids Play Area & Activity Zone — Photo 12",
    "eventTitle": "Kids Play Area & Activity Zone",
    "src": "/images/Photos/Kids Play Area And Activity/DSC01496.JPG",
    "originalFilename": "DSC01496.JPG"
  },
  {
    "id": "facility-kids-play-area-and-activity-13",
    "category": "sports",
    "categoryLabel": "Sports & Activities",
    "title": "Kids Play Area & Activity Zone — Photo 13",
    "eventTitle": "Kids Play Area & Activity Zone",
    "src": "/images/Photos/Kids Play Area And Activity/DSC01514.JPG",
    "originalFilename": "DSC01514.JPG"
  },
  {
    "id": "facility-library-1",
    "category": "campus",
    "categoryLabel": "Campus & Facilities",
    "title": "School Knowledge Resource Library — Photo 1",
    "eventTitle": "School Knowledge Resource Library",
    "src": "/images/Photos/Library/DSC01550.JPG",
    "originalFilename": "DSC01550.JPG"
  },
  {
    "id": "facility-library-2",
    "category": "campus",
    "categoryLabel": "Campus & Facilities",
    "title": "School Knowledge Resource Library — Photo 2",
    "eventTitle": "School Knowledge Resource Library",
    "src": "/images/Photos/Library/DSC01557.JPG",
    "originalFilename": "DSC01557.JPG"
  },
  {
    "id": "facility-library-3",
    "category": "campus",
    "categoryLabel": "Campus & Facilities",
    "title": "School Knowledge Resource Library — Photo 3",
    "eventTitle": "School Knowledge Resource Library",
    "src": "/images/Photos/Library/DSC01566.JPG",
    "originalFilename": "DSC01566.JPG"
  },
  {
    "id": "facility-library-4",
    "category": "campus",
    "categoryLabel": "Campus & Facilities",
    "title": "School Knowledge Resource Library — Photo 4",
    "eventTitle": "School Knowledge Resource Library",
    "src": "/images/Photos/Library/DSC01567.JPG",
    "originalFilename": "DSC01567.JPG"
  },
  {
    "id": "facility-library-5",
    "category": "campus",
    "categoryLabel": "Campus & Facilities",
    "title": "School Knowledge Resource Library — Photo 5",
    "eventTitle": "School Knowledge Resource Library",
    "src": "/images/Photos/Library/DSC01575.JPG",
    "originalFilename": "DSC01575.JPG"
  },
  {
    "id": "facility-mpt-and-playground-1",
    "category": "sports",
    "categoryLabel": "Sports & Activities",
    "title": "Mass Physical Training & Playground — Photo 1",
    "eventTitle": "Mass Physical Training & Playground",
    "src": "/images/Photos/MPT And playground/DSC00740.JPG",
    "originalFilename": "DSC00740.JPG"
  },
  {
    "id": "facility-music-1",
    "category": "cultural",
    "categoryLabel": "Cultural & Arts",
    "title": "Music & Performing Arts Studio — Photo 1",
    "eventTitle": "Music & Performing Arts Studio",
    "src": "/images/Photos/Music/DSC00976.JPG",
    "originalFilename": "DSC00976.JPG"
  },
  {
    "id": "facility-music-2",
    "category": "cultural",
    "categoryLabel": "Cultural & Arts",
    "title": "Music & Performing Arts Studio — Photo 2",
    "eventTitle": "Music & Performing Arts Studio",
    "src": "/images/Photos/Music/DSC00997.JPG",
    "originalFilename": "DSC00997.JPG"
  },
  {
    "id": "facility-ramp-1",
    "category": "campus",
    "categoryLabel": "Campus & Facilities",
    "title": "Accessible Campus Ramp Infrastructure — Photo 1",
    "eventTitle": "Accessible Campus Ramp Infrastructure",
    "src": "/images/Photos/Ramp/DSC00211.JPG",
    "originalFilename": "DSC00211.JPG"
  },
  {
    "id": "facility-ramp-2",
    "category": "campus",
    "categoryLabel": "Campus & Facilities",
    "title": "Accessible Campus Ramp Infrastructure — Photo 2",
    "eventTitle": "Accessible Campus Ramp Infrastructure",
    "src": "/images/Photos/Ramp/DSC00213.JPG",
    "originalFilename": "DSC00213.JPG"
  },
  {
    "id": "facility-ro-plant-1",
    "category": "campus",
    "categoryLabel": "Campus & Facilities",
    "title": "Pure Drinking Water RO Plant — Photo 1",
    "eventTitle": "Pure Drinking Water RO Plant",
    "src": "/images/Photos/RO Plant/DSC01055.JPG",
    "originalFilename": "DSC01055.JPG"
  },
  {
    "id": "facility-ro-plant-2",
    "category": "campus",
    "categoryLabel": "Campus & Facilities",
    "title": "Pure Drinking Water RO Plant — Photo 2",
    "eventTitle": "Pure Drinking Water RO Plant",
    "src": "/images/Photos/RO Plant/DSC01056.JPG",
    "originalFilename": "DSC01056.JPG"
  },
  {
    "id": "facility-robotics-1",
    "category": "labs",
    "categoryLabel": "Labs & STEM",
    "title": "STEM Robotics Innovation Lab — Photo 1",
    "eventTitle": "STEM Robotics Innovation Lab",
    "src": "/images/Photos/Robotics/DSC01539.JPG",
    "originalFilename": "DSC01539.JPG"
  },
  {
    "id": "facility-robotics-2",
    "category": "labs",
    "categoryLabel": "Labs & STEM",
    "title": "STEM Robotics Innovation Lab — Photo 2",
    "eventTitle": "STEM Robotics Innovation Lab",
    "src": "/images/Photos/Robotics/DSC01547.JPG",
    "originalFilename": "DSC01547.JPG"
  },
  {
    "id": "facility-robotics-3",
    "category": "labs",
    "categoryLabel": "Labs & STEM",
    "title": "STEM Robotics Innovation Lab — Photo 3",
    "eventTitle": "STEM Robotics Innovation Lab",
    "src": "/images/Photos/Robotics/DSC01661.JPG",
    "originalFilename": "DSC01661.JPG"
  },
  {
    "id": "facility-robotics-4",
    "category": "labs",
    "categoryLabel": "Labs & STEM",
    "title": "STEM Robotics Innovation Lab — Photo 4",
    "eventTitle": "STEM Robotics Innovation Lab",
    "src": "/images/Photos/Robotics/DSC01674.JPG",
    "originalFilename": "DSC01674.JPG"
  },
  {
    "id": "facility-robotics-5",
    "category": "labs",
    "categoryLabel": "Labs & STEM",
    "title": "STEM Robotics Innovation Lab — Photo 5",
    "eventTitle": "STEM Robotics Innovation Lab",
    "src": "/images/Photos/Robotics/DSC01698.JPG",
    "originalFilename": "DSC01698.JPG"
  },
  {
    "id": "facility-school-building-1",
    "category": "campus",
    "categoryLabel": "Campus & Facilities",
    "title": "Rajajinagar Campus Building & Entrance — Photo 1",
    "eventTitle": "Rajajinagar Campus Building & Entrance",
    "src": "/images/Photos/School Building/A7400869.JPG",
    "originalFilename": "A7400869.JPG"
  },
  {
    "id": "facility-school-building-2",
    "category": "campus",
    "categoryLabel": "Campus & Facilities",
    "title": "Rajajinagar Campus Building & Entrance — Photo 2",
    "eventTitle": "Rajajinagar Campus Building & Entrance",
    "src": "/images/Photos/School Building/A7400873 (1).JPG",
    "originalFilename": "A7400873 (1).JPG"
  },
  {
    "id": "facility-school-building-3",
    "category": "campus",
    "categoryLabel": "Campus & Facilities",
    "title": "Rajajinagar Campus Building & Entrance — Photo 3",
    "eventTitle": "Rajajinagar Campus Building & Entrance",
    "src": "/images/Photos/School Building/A7400876.JPG",
    "originalFilename": "A7400876.JPG"
  },
  {
    "id": "facility-school-building-4",
    "category": "campus",
    "categoryLabel": "Campus & Facilities",
    "title": "Rajajinagar Campus Building & Entrance — Photo 4",
    "eventTitle": "Rajajinagar Campus Building & Entrance",
    "src": "/images/Photos/School Building/A7400878.JPG",
    "originalFilename": "A7400878.JPG"
  },
  {
    "id": "facility-school-building-5",
    "category": "campus",
    "categoryLabel": "Campus & Facilities",
    "title": "Rajajinagar Campus Building & Entrance — Photo 5",
    "eventTitle": "Rajajinagar Campus Building & Entrance",
    "src": "/images/Photos/School Building/DSC01515.JPG",
    "originalFilename": "DSC01515.JPG"
  },
  {
    "id": "facility-school-building-6",
    "category": "campus",
    "categoryLabel": "Campus & Facilities",
    "title": "Rajajinagar Campus Building & Entrance — Photo 6",
    "eventTitle": "Rajajinagar Campus Building & Entrance",
    "src": "/images/Photos/School Building/DSC01522.JPG",
    "originalFilename": "DSC01522.JPG"
  },
  {
    "id": "facility-school-building-7",
    "category": "campus",
    "categoryLabel": "Campus & Facilities",
    "title": "Rajajinagar Campus Building & Entrance — Photo 7",
    "eventTitle": "Rajajinagar Campus Building & Entrance",
    "src": "/images/Photos/School Building/School Building1.jpg",
    "originalFilename": "School Building1.jpg"
  },
  {
    "id": "facility-school-building-8",
    "category": "campus",
    "categoryLabel": "Campus & Facilities",
    "title": "Rajajinagar Campus Building & Entrance — Photo 8",
    "eventTitle": "Rajajinagar Campus Building & Entrance",
    "src": "/images/Photos/School Building/school-building-main-gate.jpg",
    "originalFilename": "school-building-main-gate.jpg"
  },
  {
    "id": "facility-science-lab-1",
    "category": "labs",
    "categoryLabel": "Labs & STEM",
    "title": "Composite Science Laboratory — Photo 1",
    "eventTitle": "Composite Science Laboratory",
    "src": "/images/Photos/Science Lab/DSC00853.JPG",
    "originalFilename": "DSC00853.JPG"
  },
  {
    "id": "facility-science-lab-2",
    "category": "labs",
    "categoryLabel": "Labs & STEM",
    "title": "Composite Science Laboratory — Photo 2",
    "eventTitle": "Composite Science Laboratory",
    "src": "/images/Photos/Science Lab/DSC00884.JPG",
    "originalFilename": "DSC00884.JPG"
  },
  {
    "id": "facility-science-lab-3",
    "category": "labs",
    "categoryLabel": "Labs & STEM",
    "title": "Composite Science Laboratory — Photo 3",
    "eventTitle": "Composite Science Laboratory",
    "src": "/images/Photos/Science Lab/DSC00908.JPG",
    "originalFilename": "DSC00908.JPG"
  },
  {
    "id": "facility-science-lab-4",
    "category": "labs",
    "categoryLabel": "Labs & STEM",
    "title": "Composite Science Laboratory — Photo 4",
    "eventTitle": "Composite Science Laboratory",
    "src": "/images/Photos/Science Lab/DSC00928.JPG",
    "originalFilename": "DSC00928.JPG"
  },
  {
    "id": "facility-science-lab-5",
    "category": "labs",
    "categoryLabel": "Labs & STEM",
    "title": "Composite Science Laboratory — Photo 5",
    "eventTitle": "Composite Science Laboratory",
    "src": "/images/Photos/Science Lab/DSC00953.JPG",
    "originalFilename": "DSC00953.JPG"
  },
  {
    "id": "facility-science-lab-6",
    "category": "labs",
    "categoryLabel": "Labs & STEM",
    "title": "Composite Science Laboratory — Photo 6",
    "eventTitle": "Composite Science Laboratory",
    "src": "/images/Photos/Science Lab/DSC01011.JPG",
    "originalFilename": "DSC01011.JPG"
  },
  {
    "id": "facility-science-lab-7",
    "category": "labs",
    "categoryLabel": "Labs & STEM",
    "title": "Composite Science Laboratory — Photo 7",
    "eventTitle": "Composite Science Laboratory",
    "src": "/images/Photos/Science Lab/DSC01017.JPG",
    "originalFilename": "DSC01017.JPG"
  },
  {
    "id": "facility-science-lab-8",
    "category": "labs",
    "categoryLabel": "Labs & STEM",
    "title": "Composite Science Laboratory — Photo 8",
    "eventTitle": "Composite Science Laboratory",
    "src": "/images/Photos/Science Lab/DSC01030.JPG",
    "originalFilename": "DSC01030.JPG"
  },
  {
    "id": "facility-science-lab-9",
    "category": "labs",
    "categoryLabel": "Labs & STEM",
    "title": "Composite Science Laboratory — Photo 9",
    "eventTitle": "Composite Science Laboratory",
    "src": "/images/Photos/Science Lab/DSC01046.JPG",
    "originalFilename": "DSC01046.JPG"
  },
  {
    "id": "facility-sports-1",
    "category": "sports",
    "categoryLabel": "Sports & Activities",
    "title": "Sports Athletics & Games — Photo 1",
    "eventTitle": "Sports Athletics & Games",
    "src": "/images/Photos/Sports/A7400879.JPG",
    "originalFilename": "A7400879.JPG"
  },
  {
    "id": "facility-sports-2",
    "category": "sports",
    "categoryLabel": "Sports & Activities",
    "title": "Sports Athletics & Games — Photo 2",
    "eventTitle": "Sports Athletics & Games",
    "src": "/images/Photos/Sports/DSC01269.JPG",
    "originalFilename": "DSC01269.JPG"
  },
  {
    "id": "facility-sports-3",
    "category": "sports",
    "categoryLabel": "Sports & Activities",
    "title": "Sports Athletics & Games — Photo 3",
    "eventTitle": "Sports Athletics & Games",
    "src": "/images/Photos/Sports/DSC01276.JPG",
    "originalFilename": "DSC01276.JPG"
  },
  {
    "id": "facility-sports-4",
    "category": "sports",
    "categoryLabel": "Sports & Activities",
    "title": "Sports Athletics & Games — Photo 4",
    "eventTitle": "Sports Athletics & Games",
    "src": "/images/Photos/Sports/DSC01303.JPG",
    "originalFilename": "DSC01303.JPG"
  },
  {
    "id": "facility-sports-5",
    "category": "sports",
    "categoryLabel": "Sports & Activities",
    "title": "Sports Athletics & Games — Photo 5",
    "eventTitle": "Sports Athletics & Games",
    "src": "/images/Photos/Sports/DSC01309.JPG",
    "originalFilename": "DSC01309.JPG"
  },
  {
    "id": "facility-sports-6",
    "category": "sports",
    "categoryLabel": "Sports & Activities",
    "title": "Sports Athletics & Games — Photo 6",
    "eventTitle": "Sports Athletics & Games",
    "src": "/images/Photos/Sports/DSC01346.JPG",
    "originalFilename": "DSC01346.JPG"
  },
  {
    "id": "facility-sports-7",
    "category": "sports",
    "categoryLabel": "Sports & Activities",
    "title": "Sports Athletics & Games — Photo 7",
    "eventTitle": "Sports Athletics & Games",
    "src": "/images/Photos/Sports/DSC01356.JPG",
    "originalFilename": "DSC01356.JPG"
  },
  {
    "id": "facility-sports-8",
    "category": "sports",
    "categoryLabel": "Sports & Activities",
    "title": "Sports Athletics & Games — Photo 8",
    "eventTitle": "Sports Athletics & Games",
    "src": "/images/Photos/Sports/DSC01389.JPG",
    "originalFilename": "DSC01389.JPG"
  },
  {
    "id": "facility-taekwondo-1",
    "category": "sports",
    "categoryLabel": "Sports & Activities",
    "title": "Taekwondo Self-Defense Martial Arts — Photo 1",
    "eventTitle": "Taekwondo Self-Defense Martial Arts",
    "src": "/images/Photos/Taekwondo/DSC00704.JPG",
    "originalFilename": "DSC00704.JPG"
  },
  {
    "id": "facility-yoga-1",
    "category": "cultural",
    "categoryLabel": "Cultural & Arts",
    "title": "Yoga & Mindfulness Session — Photo 1",
    "eventTitle": "Yoga & Mindfulness Session",
    "src": "/images/Photos/Yoga/DSC00904(1).JPG",
    "originalFilename": "DSC00904(1).JPG"
  },
  {
    "id": "facility-yoga-2",
    "category": "cultural",
    "categoryLabel": "Cultural & Arts",
    "title": "Yoga & Mindfulness Session — Photo 2",
    "eventTitle": "Yoga & Mindfulness Session",
    "src": "/images/Photos/Yoga/DSC00904.JPG",
    "originalFilename": "DSC00904.JPG"
  },
  {
    "id": "facility-yoga-3",
    "category": "cultural",
    "categoryLabel": "Cultural & Arts",
    "title": "Yoga & Mindfulness Session — Photo 3",
    "eventTitle": "Yoga & Mindfulness Session",
    "src": "/images/Photos/Yoga/Y2.JPG",
    "originalFilename": "Y2.JPG"
  },
  {
    "id": "facility-yoga-4",
    "category": "cultural",
    "categoryLabel": "Cultural & Arts",
    "title": "Yoga & Mindfulness Session — Photo 4",
    "eventTitle": "Yoga & Mindfulness Session",
    "src": "/images/Photos/Yoga/Y3.JPG",
    "originalFilename": "Y3.JPG"
  },
  {
    "id": "facility-yoga-5",
    "category": "cultural",
    "categoryLabel": "Cultural & Arts",
    "title": "Yoga & Mindfulness Session — Photo 5",
    "eventTitle": "Yoga & Mindfulness Session",
    "src": "/images/Photos/Yoga/Y4.JPG",
    "originalFilename": "Y4.JPG"
  },
  {
    "id": "facility-yoga-6",
    "category": "cultural",
    "categoryLabel": "Cultural & Arts",
    "title": "Yoga & Mindfulness Session — Photo 6",
    "eventTitle": "Yoga & Mindfulness Session",
    "src": "/images/Photos/Yoga/Y5.JPG",
    "originalFilename": "Y5.JPG"
  },
  {
    "id": "facility-yoga-7",
    "category": "cultural",
    "categoryLabel": "Cultural & Arts",
    "title": "Yoga & Mindfulness Session — Photo 7",
    "eventTitle": "Yoga & Mindfulness Session",
    "src": "/images/Photos/Yoga/Y6.JPG",
    "originalFilename": "Y6.JPG"
  },
  {
    "id": "facility-yoga-8",
    "category": "cultural",
    "categoryLabel": "Cultural & Arts",
    "title": "Yoga & Mindfulness Session — Photo 8",
    "eventTitle": "Yoga & Mindfulness Session",
    "src": "/images/Photos/Yoga/Yoga.JPG",
    "originalFilename": "Yoga.JPG"
  },
  {
    "id": "heritage-1",
    "category": "heritage",
    "categoryLabel": "Our Heritage",
    "title": "Archival Heritage — Historic Photo 1",
    "eventTitle": "Archival Heritage",
    "src": "/images/Old photos/Old photos.1.jpg",
    "originalFilename": "Old photos.1.jpg"
  },
  {
    "id": "heritage-2",
    "category": "heritage",
    "categoryLabel": "Our Heritage",
    "title": "Archival Heritage — Historic Photo 2",
    "eventTitle": "Archival Heritage",
    "src": "/images/Old photos/Old photos.2.jpg",
    "originalFilename": "Old photos.2.jpg"
  },
  {
    "id": "heritage-3",
    "category": "heritage",
    "categoryLabel": "Our Heritage",
    "title": "Archival Heritage — Historic Photo 3",
    "eventTitle": "Archival Heritage",
    "src": "/images/Old photos/Old photos.3.jpg",
    "originalFilename": "Old photos.3.jpg"
  },
  {
    "id": "heritage-4",
    "category": "heritage",
    "categoryLabel": "Our Heritage",
    "title": "Archival Heritage — Historic Photo 4",
    "eventTitle": "Archival Heritage",
    "src": "/images/Old photos/Old photos.4.jpg",
    "originalFilename": "Old photos.4.jpg"
  },
  {
    "id": "heritage-5",
    "category": "heritage",
    "categoryLabel": "Our Heritage",
    "title": "Archival Heritage — Historic Photo 5",
    "eventTitle": "Archival Heritage",
    "src": "/images/Old photos/Old photos.5.jpg",
    "originalFilename": "Old photos.5.jpg"
  },
  {
    "id": "heritage-6",
    "category": "heritage",
    "categoryLabel": "Our Heritage",
    "title": "Archival Heritage — Historic Photo 6",
    "eventTitle": "Archival Heritage",
    "src": "/images/Old photos/Old photos.6.jpg",
    "originalFilename": "Old photos.6.jpg"
  },
  {
    "id": "heritage-7",
    "category": "heritage",
    "categoryLabel": "Our Heritage",
    "title": "Archival Heritage — Historic Photo 7",
    "eventTitle": "Archival Heritage",
    "src": "/images/Old photos/Old photos.7.jpg",
    "originalFilename": "Old photos.7.jpg"
  }
];
