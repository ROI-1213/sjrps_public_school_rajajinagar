import FacilityPage from "@/components/FacilityPage";
import { FlaskConical, Atom, Microscope, ShieldCheck, Beaker, TestTubes, Brain, Search, Lightbulb, GraduationCap } from "lucide-react";
import { schoolConfig } from "@/schoolConfig";
import { getFacilityById } from "@/data/infrastructure";

const labData = getFacilityById("laboratories");

const Laboratories = () => (
  <FacilityPage
    title="Science Laboratories"
    breadcrumbLabel="Laboratories"
    introHeading="Where Theory Meets Hands-On Discovery"
    introImage={labData?.coverImage || "/images/Photos/Science Lab/DSC00853.JPG"}
    introImageAlt={`Science laboratory at ${schoolConfig.name}`}
    introParagraphs={[
      "Our Physics, Chemistry and Biology laboratories are designed to transform textbook concepts into real, observable experiences. Students don't just read about science — they perform it.",
      "Each lab is fully equipped with modern apparatus, safety gear and well-organised workstations, allowing students to conduct experiments under expert supervision in a secure environment.",
      "From simple demonstrations to CBSE secondary practicals, our composite and subject labs cultivate a true scientific temperament — encouraging students to question, observe, hypothesise and discover.",
    ]}
    features={[
      { icon: Atom, title: "Physics Laboratory", description: "Apparatus for mechanics, optics, electricity, magnetism, and practical experiments." },
      { icon: FlaskConical, title: "Chemistry Laboratory", description: "Glassware, reagents and burners for safe, precise chemical investigations." },
      { icon: Microscope, title: "Biology Laboratory", description: "High-magnification microscopes, botanical specimens, and anatomical models." },
      { icon: Beaker, title: "CBSE Aligned Equipment", description: "Standard instruments matching the CBSE secondary practical syllabus." },
      { icon: TestTubes, title: "Practical Demonstrations", description: "Teacher-led demos connecting theoretical concepts with real-world observation." },
      { icon: ShieldCheck, title: "Safety Standards", description: "Strict lab safety protocols, eye-wash stations, and experienced lab supervision." },
    ]}
    benefits={[
      { icon: Brain, title: "Scientific Thinking", description: "Builds curiosity, logical reasoning and a hypothesis-driven mindset." },
      { icon: Search, title: "Analytical Skills", description: "Sharpens observation, measurement and data-interpretation abilities." },
      { icon: Lightbulb, title: "Research Mindset", description: "Encourages students to investigate, innovate and explore deeper." },
      { icon: GraduationCap, title: "Practical Knowledge", description: "Strengthens concept retention through real, hands-on experience." },
    ]}
    gallery={labData?.galleryImages || [
      { src: "/images/Photos/Science Lab/DSC00884.JPG", alt: "Chemistry and physics lab demonstration tables" },
      { src: "/images/Photos/Science Lab/DSC00908.JPG", alt: "Composite science lab workstations and apparatus" },
      { src: "/images/Photos/Science Lab/DSC00928.JPG", alt: "Supervised science practical setup" },
      { src: "/images/Photos/Science Lab/DSC00953.JPG", alt: "Microscopes and biology study equipment" },
    ]}
    whyItMattersBody="Science is best understood when it is experienced. Our laboratories give students the rare privilege of testing what they learn, discovering laws of nature first-hand and developing the disciplined curiosity that defines true scientists, engineers and innovators."
    whyItMattersPoints={[
      "Connects theory with real-world application",
      "Builds confidence in handling instruments",
      "Encourages teamwork and shared discovery",
      "Prepares students for higher studies in STEM",
    ]}
    closingMessage="In our laboratories, every experiment is a step toward understanding the world — and every student is a young scientist in the making."
  />
);

export default Laboratories;
