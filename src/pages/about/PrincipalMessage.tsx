import MessagePage from "@/components/MessagePage";
import { schoolConfig } from "@/schoolConfig";

const PrincipalMessage = () => (
  <MessagePage
    title="Principal's Message"
    breadcrumbLabel="Principal's Message"
    breadcrumbPath="/about/principal-message"
    name={schoolConfig.principal.name}
    designation="Principal"
    imageUrl="/images/Principal/principal-poornima-desk.jpg"
    imageClassName="w-full h-full object-cover object-top"
    imageAspectRatio="bg-muted aspect-[3/4] w-full overflow-hidden"
    qualifications="M.Sc., B.Ed., PGDLET · 24 Years of Experience"
    compactImage={true}
    paragraphs={[
      "At SJR Public School, Rajajinagar, we believe that education is not just about academic excellence, but about nurturing responsible, confident, and compassionate individuals. We strive to create a safe, inclusive, and stimulating environment where every child feels valued and motivated to learn.",
      "Our dedicated team of teachers works tirelessly to provide quality education through innovative teaching methods, continuous assessment, and individual attention that fosters curiosity, self-awareness, and a balanced lifestyle, preparing students not just for examinations but for life itself.",
      "We encourage students to explore their talents through co-curricular and extracurricular activities, fostering creativity, leadership, teamwork, and resilience. Our partnership with parents plays a vital role in shaping the holistic development of every child.",
    ]}
  />
);

export default PrincipalMessage;
