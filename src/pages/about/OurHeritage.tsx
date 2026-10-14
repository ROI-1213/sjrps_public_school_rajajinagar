import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import HistoricalGallerySection from "@/components/HistoricalGallerySection";
import { schoolConfig } from "@/schoolConfig";
import { Landmark, Calendar, Award } from "lucide-react";

const OurHeritage = () => {
  return (
    <Layout>
      <PageHero
        title="Our Heritage & Archival Gallery"
        breadcrumbs={[
          { label: "About", path: "/about/overview" },
          { label: "Our Heritage" },
        ]}
      />

      {/* Historical Milestones Banner */}
      <section className="bg-slate-50 border-b border-slate-200 py-10">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="w-12 h-12 mx-auto rounded-xl bg-indian-green/10 flex items-center justify-center text-indian-green mb-3">
                <Landmark className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-school-brown text-lg">Collegiate Heritage</h3>
              <p className="text-xs text-muted-foreground mt-1">SJR Education Society founded in 1945</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="w-12 h-12 mx-auto rounded-xl bg-saffron-orange/10 flex items-center justify-center text-saffron-orange mb-3">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-school-brown text-lg">School Established</h3>
              <p className="text-xs text-muted-foreground mt-1">Rajajinagar campus began school classes in May 1981</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="w-12 h-12 mx-auto rounded-xl bg-indian-green/10 flex items-center justify-center text-indian-green mb-3">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-school-brown text-lg">CBSE Affiliation</h3>
              <p className="text-xs text-muted-foreground mt-1">Affiliation No. 831136 | School Code 46766</p>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Historical Gallery */}
      <HistoricalGallerySection showViewAllButton={false} />
    </Layout>
  );
};

export default OurHeritage;
