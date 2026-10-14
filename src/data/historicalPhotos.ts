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
    alt: "Archival 1988 School Day and Open Air Theatre inauguration invitation of SJR Nursery and Primary School",
    caption: "1988 School Day & Open Air Theatre Inauguration",
    originalFilename: "Old photos.3.jpg",
    width: 733,
    height: 491,
    orientation: "landscape",
    isFeatured: true,
  },
];
