import FacilityPage from "@/components/FacilityPage";
import { Monitor, Wifi, Code2, BookOpen, Cpu, Keyboard, Rocket, Lightbulb, Brain, GraduationCap } from "lucide-react";
import computerLabModern from "@/assets/facilities/cl1.jpg";
import computerLabStudents from "@/assets/facilities/cl2.jpg";
import computerLab3 from "@/assets/facilities/cl3.jpg";
import computerLab4 from "@/assets/facilities/cl4.jpg";

const ComputerLab = () => (
  <FacilityPage
    title="Advanced Computer Laboratory"
    breadcrumbLabel="Computer Lab"
    introHeading="Preparing Students for the Digital World"
    introImage={computerLabModern}
    introImageAlt="Modern computer laboratory at SJRPS-HBR"
    introParagraphs={[
      "Our Computer Laboratory is a future-ready learning space where students gain hands-on exposure to technology, coding and digital tools that define today's world.",
      "Equipped with modern systems, high-speed internet and dedicated workstations, the lab supports everything from basic computer literacy to introductory programming and project-based learning.",
      "Under expert guidance, students explore software, develop logical thinking and grow into confident, responsible users of technology.",
    ]}
    features={[
      { icon: Monitor, title: "Modern Computers", description: "Updated systems with the latest software for smooth, reliable learning." },
      { icon: Wifi, title: "High-Speed Internet", description: "Fast, filtered connectivity for safe browsing and online research." },
      { icon: Keyboard, title: "Practical Training", description: "Individual workstations so every child gets real hands-on practice." },
      { icon: Code2, title: "Coding Exposure", description: "Introduction to programming, logic-building and beginner-friendly languages." },
      { icon: BookOpen, title: "Digital Literacy", description: "Structured curriculum covering productivity tools and online safety." },
      { icon: Cpu, title: "Project-Based Learning", description: "Real assignments that turn knowledge into working digital outputs." },
    ]}
    benefits={[
      { icon: Brain, title: "Technology Skills", description: "Confident, competent use of essential digital tools." },
      { icon: Rocket, title: "Future Readiness", description: "Strong foundation for higher studies and modern careers." },
      { icon: Lightbulb, title: "Innovation Mindset", description: "Encourages problem-solving through technology." },
      { icon: GraduationCap, title: "Digital Competency", description: "Responsible, ethical use of computers and the internet." },
    ]}
    gallery={[
      { src: computerLabStudents, alt: "Computer lab session" },
      { src: computerLab3, alt: "Students working on computers" },
      { src: computerLab4, alt: "Computer lab workstations" },
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
