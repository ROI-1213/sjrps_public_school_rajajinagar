import Layout from "@/components/Layout";
import AnimatedBanner from "@/components/AnimatedBanner";
import MarqueeStrip from "@/components/MarqueeStrip";
import AboutOurSchoolSection from "@/components/AboutOurSchoolSection";
import AcademicExcellenceSection from "@/components/AcademicExcellenceSection";
import AcademicsSection from "@/components/AcademicsSection";
import PrincipalMessageSection from "@/components/PrincipalMessageSection";
import FacilitiesSection from "@/components/FacilitiesSection";

import GallerySection from "@/components/GallerySection";
import HomeFacultySection from "@/components/HomeFacultySection";
import NewsEventsHomeSection from "@/components/NewsEventsHomeSection";
import ContactSection from "@/components/ContactSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <AnimatedBanner />
        <MarqueeStrip />
        <AboutOurSchoolSection />
        <AcademicExcellenceSection />
        <AcademicsSection />
        <PrincipalMessageSection />
        <FacilitiesSection />
        
        <GallerySection />
        <HomeFacultySection />
        <NewsEventsHomeSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
    </Layout>
  );
};

export default Index;
