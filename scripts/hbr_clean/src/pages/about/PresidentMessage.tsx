import MessagePage from "@/components/MessagePage";
import presidentImg from "@/assets/leadership/treasurer.jpg";

const PresidentMessage = () => (
  <MessagePage
    title="President's Message"
    breadcrumbLabel="President's Message"
    breadcrumbPath="/about/presidents-message"
    name="Sri S.R.Veerabhadraiah"
    designation="President"
    qualifications="SJR Education Society"
    imageUrl={presidentImg}
    hideProfileCard
    paragraphs={[
      "Greetings from Sri Jagadguru Renukacharya Education Society,",
      "It gives me immense pleasure to present the enduring legacy of Sri Jagadguru Renukacharya Education Society—an institution built on vision, strengthened by values, and guided by tradition.",
      "From a modest beginning in 1945 to becoming a trusted name in education today, the Society has continuously expanded its reach and impact. The blessings of Sri Rambhapuri Peeta have played a vital role in this journey of growth and service.",
      "As we commemorate eight decades of excellence, we are also embracing the future with AI-powered classrooms and forward-looking educational practices that prepare students for a dynamic world.",
      "We remain steadfast in our commitment to providing quality, value-based education that empowers generations.",
    ]}
    signature={
      <div className="space-y-1">
        <p className="text-foreground/80">Warm regards,</p>
        <p className="font-bold text-logo-navy mt-2">Sri S.R.Veerabhadraiah</p>
        <p className="text-sm text-indian-green">President</p>
        <p className="text-sm text-muted-foreground">SJR Education Society</p>
      </div>
    }
  />
);

export default PresidentMessage;
