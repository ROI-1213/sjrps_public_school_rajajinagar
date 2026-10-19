import { Phone } from "lucide-react";
import { SCHOOL_LANDLINES } from "@/lib/siteInfo";

const FloatingContactButtons = () => {
  const primaryPhone = SCHOOL_LANDLINES[0];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href={`tel:${primaryPhone.tel}`}
        aria-label={`Call us at ${primaryPhone.text}`}
        className="bg-indian-green hover:bg-indian-green/90 rounded-full w-[41px] h-[41px] flex items-center justify-center transition-transform hover:scale-110"
        style={{ boxShadow: "0 6px 18px rgba(0,0,0,0.15)" }}
      >
        <Phone className="h-[18px] w-[18px] text-white" />
      </a>
    </div>
  );
};

export default FloatingContactButtons;
