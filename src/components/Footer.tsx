import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  ChevronRight,
} from "lucide-react";
import footerLogo from "@/assets/footerlogo.png";
import { schoolConfig } from "@/schoolConfig";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about/overview" },
  { label: "Admission Process", to: "/admissions/admissions-process" },
  { label: "Academics", to: "/academics" },
  { label: "Contact", to: "/contact" },
];

const importantLinks = [
  { label: "Mandatory Disclosure", to: "/mandatory-disclosure", external: false },
  {
    label: "Parent Portal",
    to: schoolConfig.portalUrls.parentPortal,
    external: true,
  },
  {
    label: "Staff Portal",
    to: schoolConfig.portalUrls.staffPortal,
    external: true,
  },
  { label: "News & Events", to: "/news", external: false },
  { label: "Gallery", to: "/gallery/photos", external: false },
];

const LinkItem = ({
  label,
  to,
  external = false,
}: {
  label: string;
  to: string;
  external?: boolean;
}) => {
  const cls =
    "group inline-flex items-center gap-2 text-white/80 hover:text-golden-yellow transition-colors duration-200";
  const inner = (
    <>
      <ChevronRight className="h-3.5 w-3.5 opacity-60 transition-transform duration-200 group-hover:translate-x-1 group-hover:opacity-100" />
      <span className="border-b border-transparent group-hover:border-golden-yellow/70 transition-colors">
        {label}
      </span>
    </>
  );
  return external ? (
    <a href={to} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <Link to={to} className={cls}>
      {inner}
    </Link>
  );
};

const Footer = () => {
  return (
    <footer className="relative text-white bg-indian-green">
      {/* Top accent bar */}
      <div className="h-1 bg-saffron-orange" />

      {/* Subtle dot pattern overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative container mx-auto px-4 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src={footerLogo}
                alt="SJRPS-Rajajinagar Logo"
                className="h-20 w-28 object-contain bg-white rounded-lg p-1"
                style={{ boxShadow: "0 0 0 1px #ffffff, 0 10px 15px -3px rgba(0,0,0,0.1)" }}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                }}
              />
              <div>
                <h3
                  className="font-bold text-lg leading-tight"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {schoolConfig.shortName}
                </h3>
                <p className="text-xs text-white/70">Rajajinagar, Bengaluru</p>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              {schoolConfig.fullName} is committed to shaping confident,
              compassionate, and capable young minds through value-based,
              future-ready CBSE education.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { Icon: Facebook, href: schoolConfig.socialLinks.facebook, label: "Facebook" },
                { Icon: Instagram, href: schoolConfig.socialLinks.instagram, label: "Instagram" },
                { Icon: Youtube, href: schoolConfig.socialLinks.youtube, label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="h-9 w-9 rounded-full bg-white/10 hover:bg-saffron-orange flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-lg font-bold mb-5 relative pb-2"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Quick Links
              <span className="absolute left-0 bottom-0 h-[2px] w-10 bg-saffron-orange" />
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <LinkItem label={l.label} to={l.to} />
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3
              className="text-lg font-bold mb-5 relative pb-2"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Important Links
              <span className="absolute left-0 bottom-0 h-[2px] w-10 bg-saffron-orange" />
            </h3>
            <ul className="space-y-2.5 text-sm">
              {importantLinks.map((l) => (
                <li key={l.label}>
                  <LinkItem label={l.label} to={l.to} external={l.external} />
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-lg font-bold mb-5 relative pb-2"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Contact
              <span className="absolute left-0 bottom-0 h-[2px] w-10 bg-saffron-orange" />
            </h3>
            <ul className="space-y-3 text-sm text-white/85">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-saffron-orange flex-shrink-0" />
                <a
                  href={schoolConfig.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-golden-yellow transition-colors leading-relaxed"
                  title="Open SJR Public School on Google Maps"
                >
                  {schoolConfig.address.fullAddress}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-saffron-orange flex-shrink-0" />
                <div className="flex flex-col">
                  {schoolConfig.phones.map((phone) => (
                    <a key={phone.tel} href={`tel:${phone.tel}`} className="hover:text-golden-yellow transition-colors">
                      {phone.text}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-saffron-orange flex-shrink-0" />
                <div className="flex flex-col">
                  <a
                    href={`mailto:${schoolConfig.email}`}
                    className="hover:text-golden-yellow transition-colors break-all"
                  >
                    {schoolConfig.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="relative bg-saffron-orange text-white">
        <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm font-medium text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} {schoolConfig.fullName}. All rights reserved.
          </p>
          <p className="opacity-90">Designed for {schoolConfig.shortName}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
