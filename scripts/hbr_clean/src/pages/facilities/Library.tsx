import FacilityPage from "@/components/FacilityPage";
import { BookOpen, BookMarked, Newspaper, Armchair, Search, Monitor, BookHeart, Compass, GraduationCap, Trophy } from "lucide-react";
import library from "@/assets/facilities/libp1.jpg";
import libraryReading from "@/assets/facilities/libp2.jpg";
import libraryBooks from "@/assets/facilities/libp3.jpg";
import libraryStudents from "@/assets/facilities/libp4.jpg";

const Library = () => (
  <FacilityPage
    title="Knowledge Resource Centre"
    breadcrumbLabel="Library"
    introHeading="A Gateway to Knowledge, Imagination & Discovery"
    introImage={library}
    introImageAlt="SJRPS-HBR Knowledge Resource Centre"
    introParagraphs={[
      "Our Knowledge Resource Centre is the intellectual heart of the school — a calm, welcoming space where every student can travel through pages, explore new ideas and discover the joy of independent learning.",
      "With an extensive collection of books, reference titles, periodicals and digital resources, the library nurtures reading as a lifelong habit and supports academic research across every subject and grade.",
      "Quiet reading zones, group study corners and dedicated children's sections ensure that every learner — from young readers to senior researchers — finds the perfect place to read, reflect and grow.",
    ]}
    features={[
      { icon: BookOpen, title: "Extensive Book Collection", description: "Thousands of titles in English, Kannada and Hindi spanning fiction and non-fiction." },
      { icon: BookMarked, title: "Reference Materials", description: "Encyclopaedias, dictionaries and subject guides for deeper academic exploration." },
      { icon: Newspaper, title: "Newspapers & Periodicals", description: "Leading national dailies and educational magazines for current affairs." },
      { icon: Armchair, title: "Reading Zones", description: "Quiet, well-lit corners designed for focused, comfortable reading." },
      { icon: Search, title: "Research Resources", description: "Curated material to support school projects, assignments and competitions." },
      { icon: Monitor, title: "Digital Learning Support", description: "E-resources and internet access for modern, research-based learning." },
    ]}
    benefits={[
      { icon: BookHeart, title: "Reading Habits", description: "Daily exposure builds a lifelong love of books and stories." },
      { icon: Compass, title: "Independent Learning", description: "Students learn to explore, question and find answers on their own." },
      { icon: Search, title: "Research Skills", description: "Hands-on practice in gathering, evaluating and citing information." },
      { icon: GraduationCap, title: "Academic Excellence", description: "Stronger vocabulary, comprehension and subject mastery." },
    ]}
    gallery={[
      { src: library, alt: "School library interior" },
      { src: libraryReading, alt: "Students reading in the library" },
      { src: libraryBooks, alt: "Curated book collection" },
      { src: libraryStudents, alt: "Students exploring books" },
    ]}
    whyItMattersBody="Libraries shape thinkers. By placing students at the centre of a rich, well-curated collection, our library transforms reading from a school task into a personal adventure — fuelling curiosity, building empathy and laying the foundation for lifelong intellectual growth."
    whyItMattersPoints={[
      "Develops critical thinking and creativity",
      "Expands vocabulary and language fluency",
      "Strengthens focus and patience",
      "Inspires a lifelong love of learning",
    ]}
    closingMessage="A well-stocked library is not merely a collection of books; it is a foundation for intellectual growth and lifelong learning."
  />
);

export default Library;
