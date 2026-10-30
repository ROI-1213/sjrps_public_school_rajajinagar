
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import AboutSJRPS from "./pages/about/AboutSJRPS";
import Overview from "./pages/about/Overview";
import OurHeritage from "./pages/about/OurHeritage";
import VisionMission from "./pages/about/VisionMission";
import ChiefPatronMessage from "./pages/about/ChiefPatronMessage";
import PresidentMessage from "./pages/about/PresidentMessage";
import SecretaryMessage from "./pages/about/SecretaryMessage";
import PrincipalMessage from "./pages/about/PrincipalMessage";
import OfficeBearers from "./pages/about/OfficeBearers";
import ECMembers from "./pages/about/ECMembers";
import CoreTeam from "./pages/about/CoreTeam";
import BoardMembers from "./pages/about/BoardMembers";
import Teachers from "./pages/about/Teachers";
import Academics from "./pages/Academics";
import PrePrimary from "./pages/academics/PrePrimary";
import PrimaryLevel from "./pages/academics/PrimaryLevel";
import SecondaryStage from "./pages/academics/SecondaryStage";
import PrimarySchool from "./pages/academics/PrimarySchool";
import SecondarySchool from "./pages/academics/SecondarySchool";
import Curriculum from "./pages/academics/Curriculum";
import CalendarEvents from "./pages/academics/CalendarEvents";
import Achievements from "./pages/academics/Achievements";
import AttendanceRules from "./pages/academics/AttendanceRules";
import CodeOfConduct from "./pages/academics/CodeOfConduct";
import MandatoryDisclosure from "./pages/MandatoryDisclosure";
import ExaminationGuidelines from "./pages/academics/ExaminationGuidelines";
import PromotionCriteria from "./pages/academics/PromotionCriteria";
import Admissions from "./pages/Admissions";
import AdmissionEnquiry from "./pages/admissions/AdmissionEnquiry";
import ApplicationProcess from "./pages/admissions/ApplicationProcess";
import SchoolPolicies from "./pages/admissions/SchoolPolicies";
import EligibilityCriteria from "./pages/admissions/EligibilityCriteria";
import FeeStructure from "./pages/admissions/FeeStructure";
import Scholarship from "./pages/admissions/Scholarship";
import ImportantDates from "./pages/admissions/ImportantDates";
import CampusLife from "./pages/CampusLife";
import Sports from "./pages/campus/Sports";
import Clubs from "./pages/campus/Clubs";
import CampusLibrary from "./pages/campus/Library";
import Facilities from "./pages/campus/Facilities";
import Faculty from "./pages/Faculty";
import Contact from "./pages/Contact";
import Classrooms from "./pages/facilities/Classrooms";
import FacilitiesLibrary from "./pages/facilities/Library";
import Laboratories from "./pages/facilities/Laboratories";
import Auditorium from "./pages/facilities/Auditorium";
import ComputerLab from "./pages/facilities/ComputerLab";
import SmartClass from "./pages/facilities/SmartClass";
import SportsRoom from "./pages/facilities/SportsRoom";
import YogaHall from "./pages/facilities/YogaHall";
import RoboticsLab from "./pages/facilities/RoboticsLab";
import Activities from "./pages/life/Activities";
import Magazine from "./pages/life/Magazine";
import Infrastructure from "./pages/life/Infrastructure";
import Taekwondo from "./pages/life/Taekwondo";
import Scouts from "./pages/life/Scouts";
import Testimonials from "./pages/life/Testimonials";
import NationalFestivals from "./pages/life/NationalFestivals";
import Celebrations from "./pages/life/Celebrations";
import Workshops from "./pages/life/Workshops";
import PhotoGallery from "./pages/gallery/PhotoGallery";
import VideoGallery from "./pages/gallery/VideoGallery";
import PageOverview from "./pages/PageOverview";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import ScrollToTop from "./components/ScrollToTop";
import AdminDashboard from "./pages/AdminDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/sjrc" element={<AboutSJRPS />} />
          <Route path="/about/vision-mission" element={<VisionMission />} />
          <Route path="/about/overview" element={<Overview />} />
          <Route path="/about/our-heritage" element={<OurHeritage />} />
          <Route path="/about/chief-patron-message" element={<ChiefPatronMessage />} />
          <Route path="/about/chief-patron" element={<Navigate to="/about/chief-patron-message" replace />} />
          <Route path="/about/presidents-message" element={<PresidentMessage />} />
          <Route path="/about/president" element={<Navigate to="/about/presidents-message" replace />} />
          <Route path="/about/secretary-message" element={<SecretaryMessage />} />
          <Route path="/about/secretary" element={<Navigate to="/about/secretary-message" replace />} />
          <Route path="/about/principal-message" element={<PrincipalMessage />} />
          <Route path="/about/principal" element={<Navigate to="/about/principal-message" replace />} />
          <Route path="/about/office-bearers" element={<OfficeBearers />} />
          <Route path="/about/ec-members" element={<ECMembers />} />
          <Route path="/about/core-team" element={<CoreTeam />} />
          <Route path="/about/board-members" element={<BoardMembers />} />
          <Route path="/about/teachers" element={<Teachers />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/academics/pre-primary" element={<PrePrimary />} />
          <Route path="/academics/foundation-stage" element={<Navigate to="/academics/pre-primary" replace />} />
          <Route path="/academics/primary-level" element={<PrimaryLevel />} />
          <Route path="/academics/preparatory-stage" element={<Navigate to="/academics/primary-level" replace />} />
          <Route path="/academics/middle-stage" element={<Navigate to="/academics/secondary-stage" replace />} />
          <Route path="/academics/secondary-stage" element={<SecondaryStage />} />
          <Route path="/academics/senior-secondary-stage" element={<Navigate to="/academics/secondary-stage" replace />} />
          <Route path="/academics/primary" element={<PrimarySchool />} />
          <Route path="/academics/secondary" element={<SecondarySchool />} />
          <Route path="/academics/higher-secondary" element={<Navigate to="/academics/secondary-stage" replace />} />
          <Route path="/academics/curriculum" element={<Curriculum />} />
          <Route path="/academics/calendar" element={<CalendarEvents />} />
          <Route path="/academics/achievements" element={<Achievements />} />
          <Route path="/academics/attendance-conduct" element={<Navigate to="/academics/attendance-rules" replace />} />
          <Route path="/academics/attendance-rules" element={<AttendanceRules />} />
          <Route path="/academics/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/mandatory-disclosure" element={<MandatoryDisclosure />} />
          <Route path="/academics/examination-guidelines" element={<ExaminationGuidelines />} />
          <Route path="/academics/promotion-criteria" element={<PromotionCriteria />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/admissions/enquiry" element={<AdmissionEnquiry />} />
          <Route path="/admissions/admission-enquiry" element={<Navigate to="/admissions/enquiry" replace />} />
          <Route path="/admissions/admissions-process" element={<ApplicationProcess />} />
          <Route path="/admissions/school-policies" element={<SchoolPolicies />} />
          <Route path="/admissions/eligibility-criteria" element={<EligibilityCriteria />} />
          <Route path="/admissions/fees-structure" element={<FeeStructure />} />
          <Route path="/admissions/process" element={<Navigate to="/admissions/admissions-process" replace />} />
          <Route path="/admissions/application" element={<Navigate to="/admissions/admissions-process" replace />} />
          <Route path="/admissions/policies" element={<Navigate to="/admissions/school-policies" replace />} />
          <Route path="/admissions/eligibility" element={<Navigate to="/admissions/eligibility-criteria" replace />} />
          <Route path="/admissions/fees" element={<Navigate to="/admissions/fees-structure" replace />} />
          <Route path="/admissions/scholarship" element={<Scholarship />} />
          <Route path="/admissions/dates" element={<ImportantDates />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/campus/sports" element={<Sports />} />
          <Route path="/campus/clubs" element={<Clubs />} />
          <Route path="/campus/library" element={<CampusLibrary />} />
          <Route path="/campus/facilities" element={<Facilities />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/facilities/classrooms" element={<Classrooms />} />
          <Route path="/facilities/library" element={<FacilitiesLibrary />} />
          <Route path="/facilities/laboratories" element={<Laboratories />} />
          <Route path="/facilities/transportation" element={<Navigate to="/campus/facilities" replace />} />
          <Route path="/facilities/auditorium" element={<Auditorium />} />
          <Route path="/facilities/computer-lab" element={<ComputerLab />} />
          <Route path="/facilities/smart-class" element={<SmartClass />} />
          <Route path="/facilities/sports-room" element={<SportsRoom />} />
          <Route path="/facilities/yoga-hall" element={<YogaHall />} />
          <Route path="/facilities/robotics-lab" element={<RoboticsLab />} />
          <Route path="/facilities/classroom" element={<Navigate to="/facilities/classrooms" replace />} />
          <Route path="/facilities/sports" element={<Navigate to="/facilities/sports-room" replace />} />
          <Route path="/facilities/yoga" element={<Navigate to="/facilities/yoga-hall" replace />} />
          <Route path="/facilities/robotics" element={<Navigate to="/facilities/robotics-lab" replace />} />
          <Route path="/life/activities" element={<Activities />} />
          <Route path="/life/magazine" element={<Magazine />} />
          <Route path="/life/infrastructure" element={<Infrastructure />} />
          <Route path="/life/taekwondo" element={<Taekwondo />} />
          <Route path="/life/ncc" element={<Navigate to="/life/taekwondo" replace />} />
          <Route path="/life/scouts" element={<Navigate to="/life/scouts-guides" replace />} />
          <Route path="/life/scouts-guides" element={<Scouts />} />
          <Route path="/life/testimonials" element={<Testimonials />} />
          <Route path="/gallery/photos" element={<PhotoGallery />} />
          <Route path="/gallery/videos" element={<VideoGallery />} />
          <Route path="/life/national-festivals" element={<NationalFestivals />} />
          <Route path="/life/celebrations" element={<Celebrations />} />
          <Route path="/life/workshops" element={<Workshops />} />
          <Route path="/page-overview" element={<PageOverview />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<NewsDetail />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
