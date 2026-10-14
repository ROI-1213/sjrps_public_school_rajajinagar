import type { AdminContentItem, AdminContentPayload } from "@/lib/api";

import sangeetha from "@/assets/Sangeetha.jpg";
import deepa from "@/assets/Deepa.jpg";
import ameena from "@/assets/AMEENA.jpg";
import arvind from "@/assets/ARVIND.jpg";
import ira from "@/assets/Ira.jpg";

export type TestimonialDisplayItem = {
  key: string;
  source: "database" | "frontend";
  adminItem?: AdminContentItem;
  name: string;
  role: string;
  category: string;
  quote: string;
  image: string;
  isVisible: boolean;
  displayOrder: number;
};

const frontendTestimonials: TestimonialDisplayItem[] = [
  {
    key: "frontend-sangeetha-ganesh",
    source: "frontend",
    name: "Sangeetha Ganesh",
    role: "Parent of Grade 7 Student - Darshith",
    category: "Parent",
    image: sangeetha,
    quote: "SJR Public School provides quality education with supportive teachers and a safe, value-based environment. My son has grown academically and developed leadership skills during his time here.",
    isVisible: true,
    displayOrder: 1,
  },
  {
    key: "frontend-deepa-chandramouli",
    source: "frontend",
    name: "Mrs Deepa Chandramouli",
    role: "Parent of Grade 7 Student - Vaidoorya Kashyap",
    category: "Parent",
    image: deepa,
    quote: "Truly appreciate the importance given to co-curricular activities at SJR Public School, Rajajinagar. The school provides many opportunities for children to explore their talents beyond academics. These activities have helped my daughter become more confident, active, and happy. I am grateful to the school for supporting the overall development of the students.",
    isVisible: true,
    displayOrder: 2,
  },
  {
    key: "frontend-ameena-bano",
    source: "frontend",
    name: "Ameena Bano",
    role: "Parent of Grade 7 Student - Ayesha",
    category: "Parent",
    image: ameena,
    quote: "We are very happy to see the improvement in Ayesha's academic performance and overall personality development. The teachers are incredibly supportive and dedicated. Choosing this school was the best decision for our child.",
    isVisible: true,
    displayOrder: 3,
  },
  {
    key: "frontend-arvind-miriyala",
    source: "frontend",
    name: "Arvind Miriyala",
    role: "Parent of Grade 7 Student - Ujwal Miriyala",
    category: "Parent",
    image: arvind,
    quote: "SJR Public School provides an environment that promotes overall development through activities such as debate competitions, science exhibitions, Vedic Maths, Scouts & Guides, and Taekwondo. Combined with inspiring teachers, the school continues to provide an excellent platform for my children to learn, grow, and excel.",
    isVisible: true,
    displayOrder: 4,
  },
  {
    key: "frontend-shruti-manisha",
    source: "frontend",
    name: "Shruti Manisha",
    role: "Parent of Grade 7 - Ira Sreenith",
    category: "Parent",
    image: ira,
    quote: "We are extremely happy with our experience at SJR Public School, Rajajinagar. Our ward studies in Class 7, and the school provides a nurturing, disciplined, and inspiring learning environment. The Principal's dynamic leadership and commitment to excellence are clearly reflected in the school's strong values and academic standards. A special thanks to all the teachers, their engaging teaching methods, clarity of concepts, and encouragement make learning enjoyable and effective. The school beautifully balances academics, discipline, and overall personality development. We truly appreciate the passion and dedication of the Principal and all the teachers in shaping confident and responsible students.",
    isVisible: true,
    displayOrder: 5,
  },
];

const databaseTestimonialToDisplay = (item: AdminContentItem): TestimonialDisplayItem => ({
  key: `database-${item.id}`,
  source: "database",
  adminItem: item,
  name: item.title,
  role: item.subtitle || "",
  category: item.category || "Parent",
  quote: item.body || "",
  image: item.image_url || "/placeholder.svg",
  isVisible: item.is_visible,
  displayOrder: item.display_order || 0,
});

export const mergeTestimonialItems = (adminTestimonials: AdminContentItem[] = []) => {
  const byName = new Map<string, TestimonialDisplayItem>();
  frontendTestimonials.forEach((item) => byName.set(item.name.toLowerCase(), item));
  adminTestimonials.forEach((item) => {
    const displayItem = databaseTestimonialToDisplay(item);
    byName.set(displayItem.name.toLowerCase(), displayItem);
  });
  return Array.from(byName.values()).sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
};

export const testimonialDisplayToPayload = (item: TestimonialDisplayItem): AdminContentPayload => ({
  title: item.name,
  subtitle: item.role,
  body: item.quote,
  image_url: item.image === "/placeholder.svg" ? "" : item.image,
  category: item.category,
  published_at: "",
  is_visible: item.isVisible,
  display_order: item.displayOrder,
  fields: item.adminItem?.fields || {},
});
