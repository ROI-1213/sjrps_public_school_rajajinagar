import FacilityPage from "@/components/FacilityPage";
import { Flower2, Wind, Brain, HeartPulse, Sparkles, Sun, Smile, Focus, Activity, Leaf } from "lucide-react";
import { schoolConfig } from "@/schoolConfig";
import { getFacilityById } from "@/data/infrastructure";

const yogaData = getFacilityById("yoga");

const YogaHall = () => (
  <FacilityPage
    title="Yoga & Wellness"
    breadcrumbLabel="Yoga Hall"
    introHeading="Nurturing Body, Mind & Spirit"
    introImage={yogaData?.coverImage || "/images/Photos/Yoga/Yoga.JPG"}
    introImageAlt={`Students practising yoga at ${schoolConfig.name}`}
    introParagraphs={[
      "Our Yoga & Wellness Hall is a calm, dedicated space where students learn the ancient art of yoga in a modern, structured way. Daily practice helps children develop flexibility, balance and inner stillness.",
      "Guided by trained instructors, students explore asanas, pranayama and meditation — building habits that support physical health, emotional balance and academic focus.",
      "Wellness sessions, mindfulness practices and breathing techniques are woven into school life, helping every child face challenges with calm, confidence and clarity.",
    ]}
    features={[
      { icon: Flower2, title: "Structured Yoga Sessions", description: "Regular asana practice for flexibility, posture, strength and discipline." },
      { icon: Wind, title: "Pranayama Techniques", description: "Breathing exercises that calm the mind and enhance mental concentration." },
      { icon: Brain, title: "Mindfulness & Meditation", description: "Guided sessions to build emotional resilience and reduce examination stress." },
      { icon: HeartPulse, title: "Holistic Wellness", description: "Sessions on physical health, positive habits and emotional well-being." },
      { icon: Sun, title: "Surya Namaskar", description: "Energising sun salutations as part of weekly physical education routines." },
      { icon: Sparkles, title: "Serene Environment", description: "A clean, peaceful hall dedicated to wellness and self-reflection." },
    ]}
    benefits={[
      { icon: Focus, title: "Improved Concentration", description: "Sharper focus across all academic subjects and examinations." },
      { icon: Smile, title: "Emotional Balance", description: "Better self-regulation and healthy stress management." },
      { icon: Activity, title: "Physical Flexibility", description: "Correct spinal posture, joint flexibility and overall vitality." },
      { icon: Leaf, title: "Stress Management", description: "Effective breathing techniques to handle peer and academic pressures." },
    ]}
    gallery={yogaData?.galleryImages || [
      { src: "/images/Photos/Yoga/Y2.JPG", alt: "Students practicing yoga asanas" },
      { src: "/images/Photos/Yoga/Y3.JPG", alt: "Guided pranayama and breathing exercises" },
      { src: "/images/Photos/Yoga/Y4.JPG", alt: "Group yoga sessions for focus and posture" },
      { src: "/images/Photos/Yoga/Y5.JPG", alt: "Mindfulness and wellness practice" },
    ]}
    whyItMattersBody="In a fast-paced world, children too need tools to slow down, breathe and reconnect. Yoga teaches our students that true success comes from a calm mind and a strong, balanced self — gifts they will carry for the rest of their lives."
    whyItMattersPoints={[
      "Reduces anxiety and academic stress",
      "Improves sleep, posture and energy",
      "Cultivates patience and mindfulness",
      "Builds inner strength and confidence",
    ]}
    closingMessage="Yoga nurtures harmony between the body, mind, and spirit, empowering students to achieve balance and excellence."
  />
);

export default YogaHall;
