import FacilityPage from "@/components/FacilityPage";
import { Monitor, Wifi, Code2, BookOpen, Cpu, Keyboard, Rocket, Lightbulb, Brain, GraduationCap } from "lucide-react";
import { schoolConfig } from "@/schoolConfig";
import { getFacilityById } from "@/data/infrastructure";

const compData = getFacilityById("computer-lab");

const ComputerLab = () => (
  <FacilityPage
    title="Advanced Computer Laboratory"
    breadcrumbLabel="Computer Lab"
    introHeading="Preparing Students for the Digital World"
    introImage={compData?.coverImage || "/images/Photos/Computer lab/DSC00838.JPG"}
    introImageAlt={`Modern computer laboratory at ${schoolConfig.name}`}
    introParagraphs={[
      "Our Computer Laboratory is a future-ready learning space where students gain hands-on exposure to technology, coding and digital tools that define today's world.",
      "Equipped with modern systems, high-speed broadband and dedicated workstations, the lab supports everything from basic computer literacy to introductory programming and project-based learning.",
      "Under expert guidance, students explore software, develop logical thinking and grow into confident, responsible users of technology.",
    ]}
    features={[
      { icon: Monitor, title: "Modern Computing Terminals", description: "Updated systems with curriculum-aligned software for smooth, interactive learning." },
      { icon: Wifi, title: "High-Speed Internet", description: "Fast, firewall-filtered connectivity for safe browsing and academic research." },
      { icon: Keyboard, title: "1:1 Workstations", description: "Dedicated individual terminals so every child gets real hands-on practice." },
      { icon: Code2, title: "Coding Exposure", description: "Introduction to algorithmic logic, Scratch, Python basics, and problem solving." },
      { icon: BookOpen, title: "Digital Literacy", description: "Structured CBSE-aligned curriculum covering office suites, presentations, and cyber safety." },
      { icon: Cpu, title: "Project-Based Learning", description: "Practical assignments that turn conceptual lessons into working digital projects." },
    ]}
    benefits={[
      { icon: Brain, title: "Technology Skills", description: "Confident, competent use of essential digital tools." },
      { icon: Rocket, title: "Future Readiness", description: "Strong foundation for higher studies and modern careers." },
      { icon: Lightbulb, title: "Innovation Mindset", description: "Encourages analytical problem-solving through technology." },
      { icon: GraduationCap, title: "Digital Competency", description: "Responsible, ethical use of computers and the internet." },
    ]}
    gallery={compData?.galleryImages || [
      { src: "/images/Photos/Computer lab/DSC00841.JPG", alt: "Individual computer terminals for students" },
      { src: "/images/Photos/Computer lab/DSC00845.JPG", alt: "IT curriculum and programming workstation setup" },
      { src: "/images/Photos/Computer lab/DSC00854.JPG", alt: "Digital literacy and educational software room" },
      { src: "/images/Photos/Computer lab/DSC00858.JPG", alt: "Modern high-speed networked student systems" },
    ]}
    whyItMattersBody="In a world powered by software and data, digital fluency is no longer optional. Our computer lab equips every student with the skills, confidence and ethical awareness needed to thrive in the digital age."
    whyItMattersPoints={[
      "Builds essential 21st-century skills",
      "Encourages logical, computational thinking",
      "Promotes safe and responsible technology use",
      "Prepares students for higher studies in tech",
    ]}
    closingMessage="When students master technology with purpose, they don't just use the digital world — they help shape it."
  />
);

export default ComputerLab;
