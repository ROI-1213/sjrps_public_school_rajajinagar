import { useEffect, useState } from "react";

interface PageBannerProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  overlay?: boolean;
}

const PageBanner = ({ title, subtitle, backgroundImage, overlay = true }: PageBannerProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-96 overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed transition-transform duration-300"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />
      
      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      )}
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            {title}
          </h1>
          <p className="text-xl lg:text-2xl text-amber-200 max-w-3xl mx-auto animate-slide-in-right">
            {subtitle}
          </p>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background/90 to-transparent" />
    </section>
  );
};

export default PageBanner;