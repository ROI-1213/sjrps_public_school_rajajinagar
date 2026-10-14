import FacilityPage from "@/components/FacilityPage";
import { Bot, Cpu, Code2, Cog, Puzzle, Wrench, Rocket, Brain, Lightbulb, GraduationCap } from "lucide-react";
import robo1 from "@/assets/facilities/robo1.jpg";
import robo2 from "@/assets/facilities/robo2.jpg";
import robo3 from "@/assets/facilities/robo3.jpg";
import robo4 from "@/assets/facilities/robo4.jpg";

const RoboticsLab = () => (
  <FacilityPage
    title="Robotics & Innovation Lab"
    breadcrumbLabel="Robotics Lab"
    introHeading="Where Young Innovators Build the Future"
    introImage={robo1}
    introImageAlt="Students working in the robotics lab"
    introParagraphs={[
      "Our Robotics & Innovation Lab is a creative playground where curiosity meets engineering. Here, students design, build and program robots — turning ideas into working machines.",
      "Integrating STEM, coding and design thinking, the lab introduces children to sensors, motors, microcontrollers and the logic that powers modern automation.",
      "Through guided projects and friendly challenges, students develop critical thinking, problem-solving and the confidence to invent — skills that define the leaders of tomorrow.",
    ]}
    features={[
      { icon: Bot, title: "Robotics Projects", description: "Hands-on building of robots from kits and custom components." },
      { icon: Cpu, title: "STEM Learning", description: "Science, technology, engineering and math woven into every project." },
      { icon: Code2, title: "Coding Integration", description: "Block-based and text-based programming to control robots." },
      { icon: Cog, title: "Automation Concepts", description: "Introduction to sensors, actuators and intelligent systems." },
      { icon: Puzzle, title: "Problem-Solving Activities", description: "Challenges that push students to think creatively and analytically." },
      { icon: Wrench, title: "Hands-On Tinkering", description: "A maker-space culture that values experimentation and learning by doing." },
    ]}
    benefits={[
      { icon: Lightbulb, title: "Innovation Mindset", description: "Encourages original thinking and creative problem-solving." },
      { icon: Brain, title: "Critical Thinking", description: "Builds logical, structured approaches to challenges." },
      { icon: GraduationCap, title: "Engineering Exposure", description: "Early grounding in design and engineering principles." },
      { icon: Rocket, title: "Future Technology Readiness", description: "Prepares students for AI, robotics and automation careers." },
    ]}
    gallery={[
      { src: robo2, alt: "Robotics lab" },
      { src: robo3, alt: "Students building robots" },
      { src: robo4, alt: "Robotics innovation" },
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
