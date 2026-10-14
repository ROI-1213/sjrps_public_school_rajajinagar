export interface MandatoryDocument {
  id: number;
  title: string;
  category: "Affiliation & Society" | "Safety & Infrastructure" | "Academic & Compliance";
  filename: string;
  fileSize: string;
  pdfUrl: string;
  description: string;
  isAvailable: boolean;
}

export const mandatoryDocuments: MandatoryDocument[] = [
  {
    id: 1,
    title: "Affiliation Certificate",
    category: "Affiliation & Society",
    filename: "1-Affiliation Certificate.pdf",
    fileSize: "238 KB",
    pdfUrl: "/documents/1-Affiliation Certificate.pdf",
    description: "Official CBSE Affiliation Certificate confirming affiliation to Secondary Level (Affiliation No. 831136, School Code 46766).",
    isAvailable: true
  },
  {
    id: 2,
    title: "Society Registration Copy",
    category: "Affiliation & Society",
    filename: "2-Society Registration.pdf",
    fileSize: "792 KB",
    pdfUrl: "/documents/2-Society Registration.pdf",
    description: "Certificate of Registration of Sri Jagadguru Renukacharya Education Society under the Karnataka Societies Registration Act.",
    isAvailable: true
  },
  {
    id: 3,
    title: "No Objection Certificate",
    category: "Affiliation & Society",
    filename: "3-No Objection Certificate.pdf",
    fileSize: "450 KB",
    pdfUrl: "/documents/3-No Objection Certificate.pdf",
    description: "No Objection Certificate issued by the Government of Karnataka for affiliation to CBSE.",
    isAvailable: true
  },
  {
    id: 4,
    title: "Building Safety Certificate",
    category: "Safety & Infrastructure",
    filename: "4-Building certificate.pdf",
    fileSize: "236 KB",
    pdfUrl: "/documents/4-Building certificate.pdf",
    description: "Structural Soundness and Building Safety Certificate issued by competent municipal / PWD engineering authority.",
    isAvailable: true
  },
  {
    id: 5,
    title: "Fire Safety Certificate",
    category: "Safety & Infrastructure",
    filename: "5-Fire safety certificate.pdf",
    fileSize: "383 KB",
    pdfUrl: "/documents/5-Fire safety certificate.pdf",
    description: "Fire and Emergency Services compliance certificate verifying fire protection equipment and evacuation safety.",
    isAvailable: true
  },
  {
    id: 6,
    title: "Self Certificate of School",
    category: "Affiliation & Society",
    filename: "6-Self Certificate.pdf",
    fileSize: "350 KB",
    pdfUrl: "/documents/6-Self Certificate.pdf",
    description: "Formal self-certification submitted to the Central Board of Secondary Education regarding infrastructure and management norms.",
    isAvailable: true
  },
  {
    id: 7,
    title: "Water Sanitation Certificate",
    category: "Safety & Infrastructure",
    filename: "7-Water Sanitation Certificate.pdf",
    fileSize: "104 KB",
    pdfUrl: "/documents/7-Water Sanitation Certificate.pdf",
    description: "Health and sanitary inspection certificate issued by the municipal public health office.",
    isAvailable: true
  },
  {
    id: 8,
    title: "Drinking Water Testing Report",
    category: "Safety & Infrastructure",
    filename: "8-Water Testing Report.pdf",
    fileSize: "104 KB",
    pdfUrl: "/documents/8-Water Testing Report.pdf",
    description: "Comprehensive laboratory water testing report verifying chemical and microbiological purity of campus drinking water.",
    isAvailable: true
  },
  {
    id: 9,
    title: "Annual Calendar 2026–27",
    category: "Academic & Compliance",
    filename: "9-Annual Calendar 2026-27.pdf",
    fileSize: "270 KB",
    pdfUrl: "/documents/9-Annual Calendar 2026-27.pdf",
    description: "Annual academic calendar detailing working days, term examinations, vacations, and co-curricular milestones for AY 2026–27.",
    isAvailable: true
  },
  {
    id: 10,
    title: "Class X CBSE Results — Last 3 Years",
    category: "Academic & Compliance",
    filename: "10-Class X CBSE Results Last 3 years.pdf",
    fileSize: "87 KB",
    pdfUrl: "/documents/10-Class X CBSE Results Last 3 years.pdf",
    description: "Consolidated performance records and pass percentages of Class 10 CBSE Board Examinations for the preceding three academic years.",
    isAvailable: true
  },
  {
    id: 11,
    title: "Fee Structure AY 2026–27",
    category: "Academic & Compliance",
    filename: "11-Fee Structure AY 2026-27.pdf",
    fileSize: "94 KB",
    pdfUrl: "/documents/11-Fee Structure AY 2026-27.pdf",
    description: "Approved official school fee schedule for all classes for the Academic Year 2026–27.",
    isAvailable: true
  },
  {
    id: 12,
    title: "Parent Teachers Committee (PTA)",
    category: "Academic & Compliance",
    filename: "12-Parent teachers Committee.pdf",
    fileSize: "130 KB",
    pdfUrl: "/documents/12-Parent teachers Committee.pdf",
    description: "List of designated Parent-Teacher Association executive committee members representing parent and faculty interests.",
    isAvailable: true
  }
];
