/**
 * SJR Public School, Rajajinagar — Historical Photograph Archives
 * Source folder: public/images/Old photos/
 * 
 * Traceable repository of verified archival photographs depicting the early
 * campus, foundation ceremonies, faculty gatherings, and institutional milestones.
 */

export interface HistoricalPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  originalFilename: string;
  width: number;
  height: number;
  orientation: "landscape" | "portrait";
  isFeatured?: boolean;
}

export const historicalPhotos: HistoricalPhoto[] = [
  {
    id: "hist-photo-1",
    src: "/images/Old photos/Old photos.1.jpg",
    alt: "Archival school assembly and campus grounds of SJR Public School, Rajajinagar",
    caption: "Archival School Assembly & Early Campus Gathering",
    originalFilename: "Old photos.1.jpg",
    width: 524,
    height: 359,
    orientation: "landscape",
    isFeatured: true,
  },
  {
    id: "hist-photo-2",
    src: "/images/Old photos/Old photos.2.jpg",
    alt: "Historical school gathering and faculty assembly at SJRPS-Rajajinagar",
    caption: "Historical Faculty Assembly & Campus Gathering",
    originalFilename: "Old photos.2.jpg",
    width: 527,
    height: 386,
    orientation: "landscape",
    isFeatured: true,
  },
  {
    id: "hist-photo-3",
    src: "/images/Old photos/Old photos.3.jpg",
    alt: "Archival school photograph from the Rajajinagar campus archives",
    caption: "Memories from Our School Archives",
    originalFilename: "Old photos.3.jpg",
    width: 491,
    height: 733,
    orientation: "portrait",
  },
  {
    id: "hist-photo-4",
    src: "/images/Old photos/Old photos.4.jpg",
    alt: "Commemoration of institutional milestone at SJR Public School",
    caption: "Institutional Milestone Commemoration",
    originalFilename: "Old photos.4.jpg",
    width: 645,
    height: 936,
    orientation: "portrait",
  },
  {
    id: "hist-photo-5",
    src: "/images/Old photos/Old photos.5.jpg",
    alt: "Archival photograph of early students and school life",
    caption: "A Glimpse into Our Early School Life",
    originalFilename: "Old photos.5.jpg",
    width: 624,
    height: 926,
    orientation: "portrait",
  },
  {
    id: "hist-photo-6",
    src: "/images/Old photos/Old photos.6.jpg",
    alt: "Campus blessing and foundation ceremony at SJRPS-Rajajinagar",
    caption: "Campus Blessing & Foundation Ceremony",
    originalFilename: "Old photos.6.jpg",
    width: 603,
    height: 916,
    orientation: "portrait",
  },
  {
    id: "hist-photo-7",
    src: "/images/Old photos/Old photos.7.jpg",
    alt: "Archival school photograph preserved from early years",
    caption: "Cherished Memories from Our Campus Archives",
    originalFilename: "Old photos.7.jpg",
    width: 603,
    height: 957,
    orientation: "portrait",
  },
];
