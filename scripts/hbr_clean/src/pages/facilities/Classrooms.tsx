import FacilityPage from "@/components/FacilityPage";
import { Maximize2, Armchair, Wind, Sun, Users, Heart, Brain, Smile, HandHeart, Lightbulb } from "lucide-react";
import modernClassroom from "@/assets/facilities/crp1.jpg";
import mcr1 from "@/assets/facilities/mcr1.jpg";
import classroomTech from "@/assets/facilities/crp2.jpg";
import collaborativeLearning from "@/assets/facilities/crp3.jpg";
import indianStudentsClassroom from "@/assets/facilities/crp4.jpg";

const Classrooms = () => (
  <FacilityPage
    title="Modern Classrooms"
    breadcrumbLabel="Modern Classrooms"
    introHeading="Spacious, Student-Friendly Learning Spaces"
    introImage={modernClassroom}
    introImageAlt="Modern, well-lit classroom at SJRPS-HBR"
    introParagraphs={[
      "Our classrooms are thoughtfully designed as vibrant centres of learning — spacious, well-ventilated, and filled with natural light. Every detail, from furniture height to wall colour, supports focus, comfort and curiosity.",
      "Interactive teaching tools, ergonomic seating and child-friendly layouts encourage open discussion, collaborative learning and active participation, helping each child engage with lessons in a meaningful way.",
      "From the youngest learners to senior students, every classroom is a safe, inspiring space where ideas are shared, questions are welcomed, and confidence is nurtured every day.",
    ]}
    features={[
      { icon: Maximize2, title: "Spacious Learning Environment", description: "Generously sized rooms that allow free movement, group activities and individual focus." },
      { icon: Armchair, title: "Ergonomic Furniture", description: "Age-appropriate desks and chairs designed for comfort, posture and long study hours." },
      { icon: Wind, title: "Excellent Ventilation", description: "Cross-ventilation and ceiling fans keep classrooms fresh, healthy and energising." },
      { icon: Sun, title: "Bright Learning Spaces", description: "Plenty of natural light combined with optimal artificial lighting for clear visibility." },
      { icon: Lightbulb, title: "Interactive Learning Environment", description: "Smart boards, projectors and learning aids that bring lessons to life." },
      { icon: Users, title: "Student-Centric Design", description: "Layouts that support collaboration, peer learning and personalised teacher attention." },
    ]}
    benefits={[
      { icon: Brain, title: "Better Concentration", description: "Calm, organised spaces help students stay focused throughout the day." },
      { icon: HandHeart, title: "Improved Participation", description: "Open layouts encourage every child to contribute confidently." },
      { icon: Smile, title: "Comfortable Learning", description: "Ergonomic, well-lit rooms make long study hours enjoyable." },
      { icon: Heart, title: "Collaborative Learning", description: "Group-friendly seating fosters teamwork and shared discovery." },
    ]}
    gallery={[
      { src: mcr1, alt: "Teacher using digital classroom display" },
      { src: classroomTech, alt: "Classroom with smart teaching technology" },
      { src: collaborativeLearning, alt: "Students collaborating in class" },
      { src: indianStudentsClassroom, alt: "Engaged students during a lesson" },
    ]}
    whyItMattersBody="A classroom is far more than four walls — it is the daily environment that shapes how a child learns, feels and grows. Our purpose-built classrooms reduce distractions, encourage healthy posture and create the conditions for deep, joyful learning."
    whyItMattersPoints={[
      "Supports emotional well-being and focus",
      "Encourages collaboration over competition",
      "Builds confidence through participation",
      "Creates lasting memories of joyful learning",
    ]}
    closingMessage="Our classrooms are thoughtfully designed to create an environment where curiosity thrives, creativity flourishes, and learning becomes an inspiring journey."
  />
);

export default Classrooms;
