import FacilityPage from "@/components/FacilityPage";
import { Tv, PlayCircle, Layers, Presentation, Sparkles, Wand2, Eye, Users, Brain, GraduationCap } from "lucide-react";
import { schoolConfig } from "@/schoolConfig";
import { getFacilityById } from "@/data/infrastructure";

const smartData = getFacilityById("smart-class");

const SmartClass = () => (
  <FacilityPage
    title="Smart Classrooms"
    breadcrumbLabel="Smart Class"
    introHeading="Technology-Integrated Learning That Inspires"
    introImage={smartData?.coverImage || "/images/Photos/classroom/DSC00825.JPG"}
    introImageAlt={`Smart classroom at ${schoolConfig.name}`}
    introParagraphs={[
      "Our Smart Classrooms blend traditional pedagogical warmth with modern multimedia, making every lesson more engaging, visual and easy to understand.",
      "Interactive digital panels, curated educational content and multimedia teaching tools help teachers explain complex concepts through diagrams, animations, and simulations.",
      "Students don't just listen — they see, interact and explore, leading to better understanding and stronger retention across every subject.",
    ]}
    features={[
      { icon: Tv, title: "Interactive Flat Panels", description: "High-definition touch panels that bring lessons and animations to life." },
      { icon: PlayCircle, title: "Digital Content Library", description: "Curriculum-aligned NCERT videos, simulations and interactive learning modules." },
      { icon: Layers, title: "Multimedia Learning", description: "Rich audio-visual material across sciences, mathematics, languages, and social studies." },
      { icon: Presentation, title: "Visual Presentations", description: "Structured visual delivery for abstract topics and scientific processes." },
      { icon: Wand2, title: "Smart Teaching Tools", description: "Formative quizzes, concept maps and digital exercises for deeper engagement." },
      { icon: Sparkles, title: "Concept Visualization", description: "Abstract concepts made visual, simple, intuitive and memorable." },
    ]}
    benefits={[
      { icon: Eye, title: "Improved Engagement", description: "Visual lessons hold attention and spark curiosity." },
      { icon: Brain, title: "Better Understanding", description: "Multi-sensory learning strengthens conceptual mastery." },
      { icon: Users, title: "Interactive Participation", description: "Encourages active discussion from every learner." },
      { icon: GraduationCap, title: "Enhanced Retention", description: "Students remember what they see, hear and interact with." },
    ]}
    gallery={smartData?.galleryImages || [
      { src: "/images/Photos/classroom/DSC00828.JPG", alt: "Smart panel interactive classroom view" },
      { src: "/images/Photos/classroom/DSC00830.JPG", alt: "Multimedia audio-visual teaching display" },
      { src: "/images/Photos/Computer lab/VIrtual Reality Kit1.jpg", alt: "Virtual Reality interactive learning tools" },
      { src: "/images/Photos/Computer lab/Virtual Reality Kit2.jpg", alt: "Next-gen immersive learning equipment" },
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
