import StagePage from "@/components/StagePage";
import plpImg from "@/assets/plp.jpg";
import {
  BookOpen,
  Calculator,
  FlaskConical,
  Globe,
  Laptop,
  Brain,
  Sparkles,
  Lightbulb,
  Search,
  Users,
  Activity,
  Hand,
  Monitor,
  Target,
  Crown,
  Star,
  Leaf,
  Languages,
} from "lucide-react";

const PrimaryLevel = () => (
  <StagePage
    title="Primary Level"
    subtitle="Grades: 1 to 5"
    breadcrumbLabel="Primary Level"
    breadcrumbPath="/academics/primary-level"
    image="/images/Homepage Photos/primary-level-stage.jpg"
    intro={[
      "The Primary Level (Grades 1–5) is where joyful early learning meets structured academic study. Children transition gracefully into formal subjects while curiosity and creativity remain at the heart of every classroom.",
      "Our learners build strong foundations in literacy and numeracy, explore the world around them, and develop the confidence to ask questions, share ideas and think for themselves.",
      "Through inquiry, activity and dialogue, students strengthen reading, writing, reasoning and observation — preparing them for the years of learning ahead.",
    ]}
    overviewLabel="Focus"
    overview={[
      {
        title: "Concept-Based Learning",
        icon: Brain,
        desc: "Deep understanding of ideas, not just memorisation of facts.",
      },
      {
        title: "Foundational Literacy & Numeracy",
        icon: BookOpen,
        desc: "Strong reading, writing and number skills from the very first years.",
      },
      {
        title: "Curiosity & Creativity",
        icon: Sparkles,
        desc: "A joyful spirit of wonder that inspires original thinking.",
      },
    ]}
    subjects={[]}
    subjectGroups={[
      {
        label: "Classes I – II",
        items: [
          { title: "English", icon: BookOpen },
          { title: "Mathematics", icon: Calculator },
          { title: "Environmental Studies (EVS)", icon: Leaf },
          { title: "II Language ( Kannada/Hindi)", icon: Languages },
          { title: "Computer Education", icon: Laptop },
        ],
      },
      {
        label: "Classes III – V",
        items: [
          { title: "English", icon: BookOpen },
          { title: "Mathematics", icon: Calculator },
          { title: "Science", icon: FlaskConical },
          { title: "Social Science", icon: Globe },
          { title: "II Language ( Kannada/Hindi)", icon: Languages },
          { title: "Computer Education", icon: Laptop },
        ],
      },
    ]}
    features={[
      { title: "Inquiry-Based Learning", icon: Search, desc: "Lessons that begin with questions and lead to discovery." },
      { title: "Activity-Based Learning", icon: Hand, desc: "Concepts taught through experiences, models and tasks." },
      { title: "Collaborative Learning", icon: Users, desc: "Group projects that build teamwork and communication." },
      { title: "Digital Learning Integration", icon: Monitor, desc: "Smart classes and digital resources woven into every subject." },
      { title: "Practical Understanding", icon: FlaskConical, desc: "Real-world examples and experiments to deepen learning." },
      { title: "Student Participation", icon: Activity, desc: "Active classrooms where every voice is heard." },
    ]}
    highlights={[
      { title: "Confidence Building", icon: Star },
      { title: "Leadership Development", icon: Crown },
      { title: "Problem Solving Skills", icon: Target },
      { title: "Creative Thinking", icon: Sparkles },
    ]}
    coScholastic={{
      label: "Classes III – V",
      items: ["Art Education", "Physical Education", "Life Skills", "Value Education"],
    }}
  />
);

export default PrimaryLevel;
