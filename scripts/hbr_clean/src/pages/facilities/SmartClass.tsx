import FacilityPage from "@/components/FacilityPage";
import { Tv, PlayCircle, Layers, Presentation, Sparkles, Wand2, Eye, Users, Brain, GraduationCap } from "lucide-react";
import smartClassroom from "@/assets/facilities/sc1.jpg";
import smartClassBanner from "@/assets/facilities/sc2.jpg";
import classroomTech from "@/assets/facilities/sc3.jpg";
import smartClass4 from "@/assets/facilities/sc4.jpg";

const SmartClass = () => (
  <FacilityPage
    title="Smart Classrooms"
    breadcrumbLabel="Smart Class"
    introHeading="Technology-Integrated Learning That Inspires"
    introImage={smartClassroom}
    introImageAlt="Smart classroom at SJRPS-HBR"
    introParagraphs={[
      "Our Smart Classrooms blend traditional teaching with modern multimedia, making every lesson more engaging, visual and easy to understand.",
      "Interactive displays, digital content libraries and intelligent teaching tools help teachers explain complex concepts through animations, videos and simulations.",
      "Students don't just listen — they see, interact and explore, leading to better understanding and stronger retention of every subject.",
    ]}
    features={[
      { icon: Tv, title: "Interactive Displays", description: "Touch-enabled smart boards that bring lessons to life." },
      { icon: PlayCircle, title: "Digital Content", description: "Curriculum-aligned videos, animations and interactive modules." },
      { icon: Layers, title: "Multimedia Learning", description: "Rich audio-visual material across every grade and subject." },
      { icon: Presentation, title: "Visual Presentations", description: "Clear, structured visual delivery for complex topics." },
      { icon: Wand2, title: "Smart Teaching Tools", description: "Quizzes, simulations and digital activities for deeper engagement." },
      { icon: Sparkles, title: "Concept Visualization", description: "Abstract concepts made visual, simple and memorable." },
    ]}
    benefits={[
      { icon: Eye, title: "Improved Engagement", description: "Visual lessons hold attention and spark curiosity." },
      { icon: Brain, title: "Better Understanding", description: "Multi-sensory learning strengthens core concepts." },
      { icon: Users, title: "Interactive Participation", description: "Encourages active involvement from every student." },
      { icon: GraduationCap, title: "Enhanced Retention", description: "Students remember what they see, hear and interact with." },
    ]}
    gallery={[
      { src: smartClassBanner, alt: "Smart classroom" },
      { src: classroomTech, alt: "Digital teaching environment" },
      { src: smartClass4, alt: "Interactive learning technology" },
    ]}
    whyItMattersBody="Modern learners are visual, curious and digitally native. Smart classrooms meet them where they are — using engaging media to clarify, captivate and inspire, turning every lesson into a richer learning experience."
    whyItMattersPoints={[
      "Caters to different learning styles",
      "Makes abstract concepts easy to grasp",
      "Saves time for deeper discussion",
      "Boosts long-term concept retention",
    ]}
    closingMessage="When technology meets great teaching, classrooms transform — and so does the way our children learn."
  />
);

export default SmartClass;
