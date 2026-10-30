import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import sjreLogo from "@/assets/sjre.png";

type SubItem = { title: string; path: string };
type MenuItem = { title: string; path: string; submenu?: SubItem[]; alignRight?: boolean };

const menuItems: MenuItem[] = [
  { title: "Home", path: "/" },
  {
    title: "About Us",
    path: "/about",
    submenu: [
      { title: "Overview", path: "/about/overview" },
      { title: "Vision & Mission", path: "/about/vision-mission" },
      { title: "Chief Patron's Message", path: "/about/chief-patron-message" },
      { title: "President's Message", path: "/about/presidents-message" },
      { title: "Secretary's Message", path: "/about/secretary-message" },
      { title: "Principal's Message", path: "/about/principal-message" },
      { title: "Office Bearers", path: "/about/office-bearers" },
      { title: "EC Members", path: "/about/ec-members" },
      { title: "Core Team", path: "/about/core-team" },
      { title: "Our Teachers", path: "/about/teachers" },
    ],
  },
  {
    title: "Admissions",
    path: "/admissions",
    submenu: [
      { title: "Admission Enquiry", path: "/admissions/enquiry" },
      { title: "Admission Process", path: "/admissions/admissions-process" },
      { title: "School Policies", path: "/admissions/school-policies" },
      { title: "Eligibility Criteria", path: "/admissions/eligibility-criteria" },
      { title: "Fees Structure", path: "/admissions/fees-structure" },
    ],
  },
  {
    title: "Academics",
    path: "/academics",
    submenu: [
      { title: "Pre-Primary", path: "/academics/pre-primary" },
      { title: "Primary Level", path: "/academics/primary-level" },
      { title: "Secondary Stage", path: "/academics/secondary-stage" },
      { title: "Curriculum", path: "/academics/curriculum" },
      { title: "Calendar of Events", path: "/academics/calendar" },
      { title: "Achievements", path: "/academics/achievements" },
      { title: "Attendance Rules", path: "/academics/attendance-rules" },
      { title: "Code of Conduct", path: "/academics/code-of-conduct" },
      { title: "Examination Guidelines", path: "/academics/examination-guidelines" },
      { title: "Promotion Criteria", path: "/academics/promotion-criteria" },
    ],
  },
  {
    title: "Infrastructure",
    path: "/facilities",
    submenu: [
      { title: "Classroom", path: "/facilities/classroom" },
      { title: "Library", path: "/facilities/library" },
      { title: "Laboratories", path: "/facilities/laboratories" },
      { title: "Auditorium", path: "/facilities/auditorium" },
      { title: "Computer Lab", path: "/facilities/computer-lab" },
      { title: "Smart Class", path: "/facilities/smart-class" },
      { title: "Sports", path: "/facilities/sports" },
      { title: "Yoga", path: "/facilities/yoga" },
      { title: "Robotics Classes", path: "/facilities/robotics" },
    ],
  },
  {
    title: "Life @ SJRPS-Rajajinagar",
    path: "/life",
    submenu: [
      { title: "Activities", path: "/life/activities" },
      { title: "Taekwondo", path: "/life/taekwondo" },
      { title: "Scouts & Guides", path: "/life/scouts-guides" },
      { title: "National Festivals", path: "/life/national-festivals" },
      { title: "Celebrations", path: "/life/celebrations" },
      { title: "Workshops", path: "/life/workshops" },
      { title: "Students/Parents Testimonials", path: "/life/testimonials" },
    ],
  },
  { title: "News & Events", path: "/news" },
  {
    title: "Gallery",
    path: "/gallery",
    alignRight: true,
    submenu: [
      { title: "Photo Gallery", path: "/gallery/photos" },
      { title: "Video Gallery", path: "/gallery/videos" },
    ],
  },
  { title: "Contact", path: "/contact" },
  { title: "Mandatory Disclosure", path: "/mandatory-disclosure" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);

  return (
    <header className="bg-indian-green text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-1 lg:py-0">
          {/* Mobile brand header (visible on < lg) */}
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="lg:hidden flex items-center gap-2.5 py-1.5 focus:outline-none"
          >
            <img
              src={sjreLogo}
              alt="SJRPS Logo"
              className="h-8 w-8 object-contain bg-white/10 rounded-full p-0.5 border border-white/20"
            />
            <div className="flex flex-col">
              <span className="font-bold text-xs sm:text-sm text-white tracking-tight leading-tight">
                SJR Public School
              </span>
              <span className="text-[10px] text-white/80 leading-tight">Rajajinagar, Bengaluru</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center justify-center w-full gap-1 xl:gap-2 py-1">
            {menuItems.map((item) => (
              <div key={item.title} className="relative group">
                {item.submenu ? (
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 text-sm font-medium text-white hover:text-golden-yellow transition-colors duration-200 px-3 py-2 rounded-md hover:bg-white/10"
                  >
                    {item.title}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className="inline-flex items-center gap-1 text-sm font-medium text-white hover:text-golden-yellow transition-colors duration-200 px-3 py-2 rounded-md hover:bg-white/10"
                  >
                    {item.title}
                  </Link>
                )}
                {item.submenu && (
                  <div
                    className={`absolute top-full ${
                      item.alignRight ? "right-0" : "left-0"
                    } mt-1 min-w-56 bg-white shadow-2xl rounded-lg py-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50 border border-gray-100`}
                  >
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.title}
                        to={sub.path}
                        className="block px-4 py-2.5 text-sm text-logo-navy hover:text-indian-green hover:bg-gray-50 transition-colors duration-150 font-medium"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 hover:text-golden-yellow transition-colors duration-200"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-white/20 pt-2 max-h-[70vh] overflow-y-auto">
            {menuItems.map((item) => {
              const open = openMobileSection === item.title;
              return (
                <div key={item.title} className="border-b border-white/10 last:border-b-0">
                  <div className="flex items-center justify-between">
                    {item.submenu ? (
                      <button
                        type="button"
                        onClick={() => setOpenMobileSection(open ? null : item.title)}
                        className="flex-1 text-left py-3 text-white hover:text-golden-yellow font-medium text-sm"
                      >
                        {item.title}
                      </button>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex-1 py-3 text-white hover:text-golden-yellow font-medium text-sm"
                      >
                        {item.title}
                      </Link>
                    )}
                    {item.submenu && (
                      <button
                        onClick={() => setOpenMobileSection(open ? null : item.title)}
                        aria-label={`Toggle ${item.title} submenu`}
                        className="p-2 text-white/80 hover:text-golden-yellow"
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                        />
                      </button>
                    )}
                  </div>
                  {item.submenu && open && (
                    <div className="pl-4 pb-2">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.title}
                          to={sub.path}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setOpenMobileSection(null);
                          }}
                          className="block py-2 text-sm text-white/85 hover:text-golden-yellow transition-colors"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
