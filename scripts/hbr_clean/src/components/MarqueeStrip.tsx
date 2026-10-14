const MarqueeStrip = () => {
  const items = [
    "SJR Public School, HBR Layout",
    "Admissions Open for 2026–27 (Limited Seats)",
  ];

  // Repeat items for seamless scroll
  const loop = [...items, ...items, ...items, ...items];

  return (
    <div className="bg-indian-green text-white border-y border-white/10 overflow-hidden">
      <div className="relative flex overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee py-2.5 will-change-transform">
          {loop.map((text, i) => (
            <span key={i} className="mx-8 inline-flex items-center text-sm sm:text-base font-medium">
              <span className="text-tricolor-orange mr-3">★★★</span>
              {text}
            </span>
          ))}
        </div>
        <div className="flex whitespace-nowrap animate-marquee py-2.5 will-change-transform" aria-hidden="true">
          {loop.map((text, i) => (
            <span key={`b-${i}`} className="mx-8 inline-flex items-center text-sm sm:text-base font-medium">
              <span className="text-tricolor-orange mr-3">★★★</span>
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeStrip;
