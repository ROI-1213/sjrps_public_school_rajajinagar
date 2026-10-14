import FacilityPage from "@/components/FacilityPage";
import { Bot, Cpu, Code2, Cog, Puzzle, Wrench, Rocket, Brain, Lightbulb, GraduationCap } from "lucide-react";
import { schoolConfig } from "@/schoolConfig";
import { getFacilityById } from "@/data/infrastructure";

const roboticsData = getFacilityById("robotics");

const RoboticsLab = () => (
  <FacilityPage
    title="Robotics & Innovation Lab"
    breadcrumbLabel="Robotics Lab"
    introHeading="Where Young Innovators Build the Future"
    introImage={roboticsData?.coverImage || "/images/Photos/Robotics/DSC01539.JPG"}
    introImageAlt={`Students working in the robotics lab at ${schoolConfig.name}`}
    introParagraphs={[
      "Our Robotics & Innovation Lab is a creative maker-space where curiosity meets practical engineering. Here, students design, build and program robotic kits — turning theoretical ideas into working machines.",
      "Integrating STEM, coding and design thinking, the lab introduces children to sensors, motors, microcontrollers and algorithmic logic.",
      "Through guided projects and hands-on tinkering, students develop critical thinking, problem-solving and the confidence to innovate — essential skills for the modern world.",
    ]}
    features={[
      { icon: Bot, title: "Robotics Projects", description: "Hands-on building of robots from educational kits and programmable components." },
      { icon: Cpu, title: "Integrated STEM Learning", description: "Science, technology, engineering and math woven into every challenge." },
      { icon: Code2, title: "Visual & Text Coding", description: "Block-based and introductory text programming to control robotic actions." },
      { icon: Cog, title: "Sensors & Automation", description: "Introduction to ultrasonic sensors, infrared detectors, and motor actuators." },
      { icon: Puzzle, title: "Problem-Solving Challenges", description: "Team competitions that encourage creative thinking and rapid prototyping." },
      { icon: Wrench, title: "Maker-Space Tinkering", description: "A culture of experimentation, testing, iteration, and learning by doing." },
    ]}
    benefits={[
      { icon: Lightbulb, title: "Innovation Mindset", description: "Encourages original thinking and creative problem-solving." },
      { icon: Brain, title: "Critical Thinking", description: "Builds logical, structured approaches to complex engineering tasks." },
      { icon: GraduationCap, title: "Early STEM Grounding", description: "Practical appreciation for mechanical and electronic fundamentals." },
      { icon: Rocket, title: "Future Tech Readiness", description: "Prepares students for future pursuits in computing and automation." },
    ]}
    gallery={roboticsData?.galleryImages || [
      { src: "/images/Photos/Robotics/DSC01547.JPG", alt: "Hands-on robotics kit assembly" },
      { src: "/images/Photos/Robotics/DSC01661.JPG", alt: "Students programming educational robotics" },
      { src: "/images/Photos/Robotics/DSC01674.JPG", alt: "STEM innovation lab projects and sensors" },
      { src: "/images/Photos/Robotics/DSC01698.JPG", alt: "Robotics coding and practical testing" },
    ]}
    whyItMattersBody="Tomorrow's world will be shaped by those who can think, code and create. Our Robotics Lab gives students an early advantage — turning them from consumers of technology into confident creators and innovators."
    whyItMattersPoints={[
      "Builds 21st-century STEM skills",
      "Encourages collaborative problem-solving",
      "Fosters creativity and innovation",
      "Prepares students for emerging careers",
    ]}
    closingMessage="Our Robotics Lab empowers students to become creators, innovators, and problem-solvers prepared for tomorrow's world."
  />
);

export default RoboticsLab;
