import FacilityPage from "@/components/FacilityPage";
import { FlaskConical, Atom, Microscope, ShieldCheck, Beaker, TestTubes, Brain, Search, Lightbulb, GraduationCap } from "lucide-react";
import scienceLab from "@/assets/facilities/labp1.jpg";
import scienceLabEquipment from "@/assets/facilities/labp2.jpg";
import studentsScienceLab from "@/assets/facilities/labp3.jpg";
import labExtra from "@/assets/facilities/labp4.jpg";

const Laboratories = () => (
  <FacilityPage
    title="Science Laboratories"
    breadcrumbLabel="Laboratories"
    introHeading="Where Theory Meets Hands-On Discovery"
    introImage={scienceLab}
    introImageAlt="Science laboratory at SJRPS-HBR"
    introParagraphs={[
      "Our Physics, Chemistry and Biology laboratories are designed to transform textbook concepts into real, observable experiences. Students don't just read about science — they perform it.",
      "Each lab is fully equipped with modern apparatus, safety gear and well-organised workstations, allowing students to conduct experiments under expert supervision in a secure environment.",
      "From simple demonstrations to advanced practicals, our labs cultivate a true scientific temperament — encouraging students to question, observe, hypothesise and discover.",
    ]}
    features={[
      { icon: Atom, title: "Physics Laboratory", description: "Apparatus for mechanics, optics, electricity and modern physics experiments." },
      { icon: FlaskConical, title: "Chemistry Laboratory", description: "Fume hoods, reagents and equipment for safe, precise chemical practicals." },
      { icon: Microscope, title: "Biology Laboratory", description: "Microscopes, specimens and models for life-science exploration." },
      { icon: Beaker, title: "Modern Equipment", description: "Up-to-date instruments aligned with the CBSE practical syllabus." },
      { icon: TestTubes, title: "Practical Demonstrations", description: "Teacher-led demos that connect concepts with real-world observation." },
      { icon: ShieldCheck, title: "Safety Standards", description: "Strict safety protocols, first-aid stations and trained lab assistants." },
    ]}
    benefits={[
      { icon: Brain, title: "Scientific Thinking", description: "Builds curiosity, logical reasoning and a hypothesis-driven mindset." },
      { icon: Search, title: "Analytical Skills", description: "Sharpens observation, measurement and data-interpretation abilities." },
      { icon: Lightbulb, title: "Research Mindset", description: "Encourages students to investigate, innovate and explore deeper." },
      { icon: GraduationCap, title: "Practical Knowledge", description: "Strengthens concept retention through real, hands-on experience." },
    ]}
    gallery={[
      { src: scienceLabEquipment, alt: "Lab equipment and instruments" },
      { src: studentsScienceLab, alt: "Students performing experiments" },
      { src: labExtra, alt: "Science laboratory activity" },
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
