
import TopStrip from "./TopStrip";
import LogoSection from "./LogoSection";
import Header from "./Header";
import Footer from "./Footer";
import FloatingContactButtons from "./FloatingContactButtons";
import ScrollToTopButton from "./ScrollToTopButton";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background w-full overflow-x-hidden flex flex-col">
      <TopStrip />
      <LogoSection />
      <Header />
      
      {/* Main Content */}
      <main className="flex-1 w-full overflow-x-hidden">{children}</main>
      
      <Footer />
      <FloatingContactButtons />
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;
