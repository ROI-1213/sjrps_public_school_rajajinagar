/**
 * SJR Public School, Rajajinagar — Central Configuration & School Identity
 * 
 * Source of truth for all campus credentials, identifiers, contact information,
 * leadership profiles, and asset path configurations across the website.
 */

export const schoolConfig = {
  fullName: "SJR Public School, Rajajinagar",
  kannadaName: "ಎಸ್‌ಜೆಆರ್ ಪಬ್ಲಿಕ್ ಸ್ಕೂಲ್, ರಾಜಾಜಿನಗರ",
  shortName: "SJRPS-Rajajinagar",
  parentSociety: "Sri Jagadguru Renukacharya Education Society ®",
  parentSocietyKannada: "ಶ್ರೀ ಜಗದ್ಗುರು ರೇಣುಕಾಚಾರ್ಯ ಎಜುಕೇಷನ್ ಸೊಸೈಟಿ ®",
  
  // CBSE Credentials
  affiliationNumber: "831136",
  schoolCode: "46766",
  diseCode: "29280234402",
  affiliationLevel: "Affiliated to Secondary Level",
  affiliationLine: "Affiliation Number - 831136 | School Code - 46766 | DISE Code - 29280234402",
  
  // Campus Address & Contacts
  address: {
    line1: '#1050/A, 4th "M" Block',
    line2: "Dr. Rajkumar Road, Rajajinagar",
    city: "Bengaluru",
    state: "Karnataka",
    postalCode: "560010", // Primary canonical PIN code; subject to school sign-off
    alternativePostalCodeNote: "Note: Home doc lists 560043 (HBR code), authoritative campus address is 560010",
    fullAddress: '#1050/A, 4th "M" Block, Dr. Rajkumar Road, Rajajinagar, Bengaluru – 560010',
  },
  
  phones: [
    { text: "080-23388765", tel: "08023388765" },
    { text: "080-23102070", tel: "08023102070" },
  ],
  
  email: "principalsjrphs@gmail.com",
  
  officeHours: {
    weekdays: "Monday – Friday: 8:30 AM – 4:00 PM",
    saturday: "Saturday: 8:30 AM – 1:00 PM",
    sunday: "Closed",
  },
  
  mapUrl: "https://maps.app.goo.gl/p6TK8x1gM61onRTw6",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.892794711863!2d77.55139947598858!3d12.978703414722886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d84da459345%3A0xbce891ec22757ce4!2sSJR%20Public%20School%2C%20Rajajinagar!5e0!3m2!1sen!2sin!4v1728900000000!5m2!1sen!2sin",
  
  websiteUrl: "https://sjrpsrajajinagar.edu.in", // TBD by school
  portalUrls: {
    parentPortal: "https://sjres.myclassboard.com/",
    staffPortal: "https://sjres.myclassboard.com/",
  },
  
  principal: {
    name: "Mrs. Poornima N Kagali",
    role: "Principal, SJR Public School, Rajajinagar",
    photo: "/images/Core Team/1. Mrs. Poornima N Kagali - Principal.jpg",
    quote: "Education is not merely about preparing a child for examinations; it is about preparing a child for life.",
    vision: "To nurture confident, compassionate and responsible individuals who learn with purpose, live with integrity and grow into capable, resilient and lifelong learners.",
    mission: "We at SJR are committed to provide every child with meaningful learning, strong values and emotional well-being in a safe and supportive environment. We identify and nurture each child’s unique potential, develop character and life skills and prepare for a successful, fulfilling and responsible life.",
    tagline: "Every Child Matters, Every Journey Matters, Every Future Matters.",
  },
  
  // Hero & Academic Metrics
  stats: {
    students: "1000+",
    syllabus: "CBSE Syllabus",
    faculty: "50+",
    alumni: "600+",
    results: "100%",
    trustYears: "45+",
    foundationYear: "1981",
    campusJourneyYear: "1951",
  },
  
  socialLinks: {
    facebook: "https://facebook.com/sjrps",
    instagram: "https://instagram.com/sjrps",
    youtube: "https://youtube.com/sjrps",
  },
  
  logoFiles: {
    g1Logo: "/src/assets/g1.png",
    g2Logo: "/src/assets/g2.png",
    sjreLogo: "/src/assets/sjre.png",
    footerLogo: "/src/assets/footerlogo.png",
  },
  
  assetPaths: {
    schoolBuilding: "/images/Photos/School Building/School Building1.jpg",
    oldPhotos: "/images/Old photos/",
    staffPhotos: "/images/Staff photo/",
    coreTeamPhotos: "/images/Core Team/",
    eventsPhotos: "/images/Events/",
    mandatoryPdfs: "/documents/",
  }
};

export default schoolConfig;
