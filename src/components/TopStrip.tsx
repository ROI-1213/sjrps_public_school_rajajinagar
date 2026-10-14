import { Mail, Phone, Users, UserCog } from "lucide-react";
import { SCHOOL_EMAILS, SCHOOL_LANDLINES } from "@/lib/siteInfo";

const TopStrip = () => {
  return (
    <div className="bg-saffron-orange text-white text-[11px] sm:text-xs font-medium">
      <div className="container mx-auto px-2 sm:px-4 py-1.5 flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-x-3 gap-y-1">
        {/* Left: Contact */}
        <div className="flex items-center justify-center gap-x-2 sm:gap-x-4">
          <a
            href={`mailto:${SCHOOL_EMAILS[0]}`}
            className="inline-flex items-center gap-1 sm:gap-1.5 hover:text-logo-navy transition-colors duration-200"
          >
            <Mail className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
            <span className="truncate max-w-[220px] sm:max-w-none">{SCHOOL_EMAILS[0]}</span>
          </a>
          <span className="hidden sm:inline opacity-50">|</span>
          {SCHOOL_LANDLINES.map((phone) => (
            <a
              key={phone.tel}
              href={`tel:${phone.tel}`}
              className="hidden sm:inline-flex items-center gap-1.5 hover:text-logo-navy transition-colors duration-200"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>{phone.text}</span>
            </a>
          ))}
        </div>

        {/* Right: Portals */}
        <div className="flex items-center gap-x-3 sm:gap-x-4">
          <a
            href="https://sjres.myclassboard.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 sm:gap-1.5 hover:text-logo-navy transition-colors duration-200"
          >
            <Users className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
            <span>Parent Portal</span>
          </a>
          <span className="opacity-50">|</span>
          <a
            href="https://sjres.myclassboard.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 sm:gap-1.5 hover:text-logo-navy transition-colors duration-200"
          >
            <UserCog className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
            <span>Staff Portal</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopStrip;
