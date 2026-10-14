import MessagePage from "@/components/MessagePage";
import { schoolConfig } from "@/schoolConfig";

const PrincipalMessage = () => (
  <MessagePage
    title="Principal's Message"
    breadcrumbLabel="Principal's Message"
    breadcrumbPath="/about/principal-message"
    name={schoolConfig.principal.name}
    designation={schoolConfig.principal.role}
    imageUrl={schoolConfig.principal.photo}
    qualifications="Principal · SJR Public School, Rajajinagar"
    paragraphs={[
      `"${schoolConfig.principal.quote}"`,
      `Vision: ${schoolConfig.principal.vision}`,
      `Mission: ${schoolConfig.principal.mission}`,
      `"${schoolConfig.principal.tagline}"`,
    ]}
  />
);

export default PrincipalMessage;
