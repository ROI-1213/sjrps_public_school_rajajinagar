import FacilityPage from "@/components/FacilityPage";
import { BookOpen, BookMarked, Newspaper, Armchair, Search, Monitor, BookHeart, Compass, GraduationCap } from "lucide-react";
import { schoolConfig } from "@/schoolConfig";

const Library = () => (
  <FacilityPage
    title="Knowledge Resource Centre"
    breadcrumbLabel="Library"
    introHeading="A Gateway to Knowledge, Imagination & Discovery"
    introImage="/images/School Building/2.jpg"
    introImageAlt={`${schoolConfig.shortName} Knowledge Resource Centre`}
    introParagraphs={[
      "Our Knowledge Resource Centre is the intellectual heart of the school — a calm, welcoming space where every student can travel through pages, explore new ideas and discover the joy of independent learning.",
      "With an extensive collection of over 4,500 titles, reference materials, periodicals and educational magazines, the library nurtures reading as a lifelong habit and supports academic exploration across every subject and grade.",
      "Quiet reading zones, study corners and dedicated children's sections ensure that every learner finds the perfect place to read, reflect and grow.",
    ]}
    features={[
      { icon: BookOpen, title: "4,500+ Book Collection", description: "Extensive titles in English, Kannada and Hindi spanning fiction, science, history, and non-fiction." },
      { icon: BookMarked, title: "Reference Materials", description: "Encyclopaedias, dictionaries and subject guides for deeper academic exploration." },
      { icon: Newspaper, title: "Newspapers & Periodicals", description: "Leading national dailies and educational children's magazines for current affairs." },
      { icon: Armchair, title: "Dedicated Reading Zones", description: "Quiet, well-lit spaces designed for focused, comfortable reading." },
      { icon: Search, title: "Curated Study Resources", description: "Specialized material to support school projects, CBSE curriculum, and Olympiads." },
      { icon: Monitor, title: "Digital Cataloguing", description: "Organized inventory system supporting seamless student borrowing and research." },
    ]}
    benefits={[
      { icon: BookHeart, title: "Reading Habits", description: "Daily exposure builds a lifelong love of books and stories." },
      { icon: Compass, title: "Independent Learning", description: "Students learn to explore, question and find answers on their own." },
      { icon: Search, title: "Research Skills", description: "Hands-on practice in gathering, evaluating and synthesizing information." },
      { icon: GraduationCap, title: "Academic Excellence", description: "Stronger vocabulary, comprehension and subject mastery." },
    ]}
    gallery={[
      { src: "/images/School Building/2.jpg", alt: "School library reading area" },
      { src: "/images/Infrastructure/1.jpg", alt: "Students reading in the library" },
      { src: "/images/Infrastructure/2.jpg", alt: "Curated book collection" },
      { src: "/images/School Building/1.jpg", alt: "Resource centre study space" },
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
