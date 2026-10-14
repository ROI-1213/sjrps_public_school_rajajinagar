import MessagePage from "@/components/MessagePage";
import secretaryImg from "@/assets/leadership/secretary.jpg";

const SecretaryMessage = () => (
  <MessagePage
    title="Secretary's Message"
    breadcrumbLabel="Secretary's Message"
    breadcrumbPath="/about/secretary-message"
    name="Sri Prabhudev Kalmath"
    designation="Secretary"
    qualifications="SJR Education Society"
    imageUrl={secretaryImg}
    hideProfileCard
    paragraphs={[
      "Greetings from Sri Jagadguru Renukacharya Education Society,",
      "It is a matter of great pride to reflect on the remarkable journey of Sri Jagadguru Renukacharya Education Society, which began in 1945 with a vision to provide quality education and continues to illuminate lives even today.",
      "As we celebrate 80 Years of Legacy, we are equally focused on the future. With the integration of AI-powered classrooms, modern infrastructure, and progressive learning systems, we are committed to delivering education that is both relevant and transformative.",
      "As we move forward, we remain committed to fostering excellence, innovation, and holistic development in every learner.",
    ]}
    signature={
      <div className="space-y-1">
        <p className="text-foreground/80">Warm Regards,</p>
        <p className="font-bold text-logo-navy mt-2">Sri Prabhudev Kalmath</p>
        <p className="text-sm text-indian-green">Secretary</p>
        <p className="text-sm text-muted-foreground">SJR Education Society</p>
      </div>
    }
  />
);

export default SecretaryMessage;
