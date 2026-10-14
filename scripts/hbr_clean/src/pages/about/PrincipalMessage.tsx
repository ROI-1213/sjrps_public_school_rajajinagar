import MessagePage from "@/components/MessagePage";
import principalImg from "@/assets/principal-page.jpg";

const PrincipalMessage = () => (
  <MessagePage
    title="Principal's Message"
    breadcrumbLabel="Principal's Message"
    breadcrumbPath="/about/principal-message"
    name="Mrs Jyothi Shashidhar"
    designation="Principal"
    imageUrl={principalImg}
    qualifications="M.Sc., M.Ed. · 21.8 Years of Experience"
    paragraphs={[
      "At our school, we believe that education is not just about academic excellence, but about nurturing responsible, confident, and compassionate individuals. We strive to create a safe, inclusive, and stimulating environment where every child feels valued and motivated to learn.",
      "Our dedicated team of teachers works tirelessly to provide quality education through innovative teaching methods, continuous assessment, and individual attention that fosters curiosity, self-awareness, and a balanced lifestyle, preparing students not just for examinations but for life itself.",
      "We encourage students to explore their talents through co-curricular and extracurricular activities, fostering creativity, leadership, teamwork, and resilience. Our partnership with parents plays a vital role in shaping the holistic development of every child.",
    ]}
  />
);

export default PrincipalMessage;
