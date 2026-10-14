import MessagePage from "@/components/MessagePage";
import cpImg from "@/assets/leadership/cp.jpg";

const ChiefPatronMessage = () => (
  <MessagePage
    title="Chief Patron's Message"
    breadcrumbLabel="Chief Patron's Message"
    breadcrumbPath="/about/chief-patron-message"
    name="Poojya Sri Rambhapuri Jagadgurugalu"
    designation="Permanent Chief Patron"
    imageUrl={cpImg}
    hideProfileCard
    paragraphs={[
      "Blessings and Greetings,",
      "It brings me immense spiritual satisfaction to see the continued growth and service of Sri Jagadguru Renukacharya Education Society, which has been a guiding light in the field of education since 1945.",
      "Rooted in values and guided by dharma, the Society has consistently nurtured generations of students with a strong foundation of knowledge, discipline, and character. With the blessings of Sri Jagadguru Renukacharya, it has carried forward a legacy of meaningful and value-based education.",
      "It is heartening to note that SJR continues to evolve with time by embracing modern education, innovation, and AI-powered learning, while staying true to its rich heritage.",
      "I pray that the students, faculty, and management continue to be guided by wisdom and righteousness in all their endeavours.",
    ]}
    signature={
      <div className="space-y-1">
        <p className="text-foreground/80">With blessings,</p>
        <div className="font-bold text-logo-navy mt-2 space-y-1">
          <p>Poojya Sri Rambhapuri Jagadgurugalu</p>
          <p>Srimad Rambhapuri Veerasimhasanaadeeshwara</p>
          <p>
            Sri Sri Sri 1008 Jagadguru Prasanna Renuka Veera Someshwara
            Rajadeshikendra Shivacharya Mahaswamigalu, Balehonnuru,
          </p>
          <p>Chikkamagaluru District-577112</p>
        </div>
        <p className="text-sm text-indian-green">Permanent Chief Patron</p>
      </div>
    }
  />
);

export default ChiefPatronMessage;
