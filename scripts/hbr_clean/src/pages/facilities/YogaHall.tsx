import FacilityPage from "@/components/FacilityPage";
import { Flower2, Wind, Brain, HeartPulse, Sparkles, Sun, Smile, Focus, Activity, Leaf } from "lucide-react";
import yga1 from "@/assets/facilities/yga1.jpg";
import yga2 from "@/assets/facilities/yga2.jpg";
import yga3 from "@/assets/facilities/yga3.jpg";
import yga4 from "@/assets/facilities/yga4.jpg";

const YogaHall = () => (
  <FacilityPage
    title="Yoga & Wellness"
    breadcrumbLabel="Yoga Hall"
    introHeading="Nurturing Body, Mind & Spirit"
    introImage={yga1}
    introImageAlt="Students practising yoga at SJRPS-HBR"
    introParagraphs={[
      "Our Yoga & Wellness Hall is a calm, dedicated space where students learn the ancient art of yoga in a modern, structured way. Daily practice helps children develop flexibility, balance and inner stillness.",
      "Guided by trained instructors, students explore asanas, pranayama and meditation — building habits that support physical health, emotional balance and academic focus.",
      "Wellness sessions, mindfulness practices and breathing techniques are woven into school life, helping every child face challenges with calm, confidence and clarity.",
    ]}
    features={[
      { icon: Flower2, title: "Daily Yoga Sessions", description: "Regular asana practice for flexibility, strength and discipline." },
      { icon: Wind, title: "Breathing Techniques", description: "Pranayama practices that calm the mind and boost concentration." },
      { icon: Brain, title: "Meditation Practices", description: "Guided mindfulness to build focus and emotional balance." },
      { icon: HeartPulse, title: "Wellness Programs", description: "Holistic sessions on health, nutrition and well-being." },
      { icon: Sun, title: "Surya Namaskar", description: "Energising sun salutations as part of daily routines." },
      { icon: Sparkles, title: "Calm Sacred Space", description: "A clean, serene hall dedicated entirely to wellness practice." },
    ]}
    benefits={[
      { icon: Focus, title: "Improved Concentration", description: "Sharper focus across all academic subjects." },
      { icon: Smile, title: "Emotional Balance", description: "Better self-regulation and stress management." },
      { icon: Activity, title: "Physical Flexibility", description: "Stronger posture, balance and overall fitness." },
      { icon: Leaf, title: "Stress Management", description: "Healthy techniques to handle pressure and anxiety." },
    ]}
    gallery={[
      { src: yga2, alt: "Yoga session" },
      { src: yga3, alt: "Yoga practice" },
      { src: yga4, alt: "Wellness hall" },
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
