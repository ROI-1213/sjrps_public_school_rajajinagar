export const admissionsContent = {
  processSteps: [
    {
      step: 1,
      title: "Enquiry",
      description: "Reach out to our admissions office via visit, phone, or online enquiry form to learn about curriculum and offerings."
    },
    {
      step: 2,
      title: "Student Interaction / Assessment",
      description: "A friendly interaction or age-appropriate assessment with the child and parents to understand developmental milestones."
    },
    {
      step: 3,
      title: "Admission Confirmation",
      description: "On successful assessment, an official admission offer is extended to the family by the admissions committee."
    },
    {
      step: 4,
      title: "Document Verification",
      description: "Our administrative team verifies prior academic records, birth records, identity proofs, and supporting documents."
    },
    {
      step: 5,
      title: "Application Submission",
      description: "Submit the duly filled formal application form along with the prescribed registration fee at the campus office."
    },
    {
      step: 6,
      title: "Fee Payment",
      description: "Complete the prescribed fee payment within the stipulated schedule through designated banking / online portals."
    },
    {
      step: 7,
      title: "Academic Orientation",
      description: "Attend the parent-student orientation programme and take the exciting first step into the SJRPS-Rajajinagar journey."
    }
  ],

  requiredDocuments: [
    { name: "Birth Certificate", detail: "Government-issued birth certificate copy for age verification." },
    { name: "Aadhaar Card Copy", detail: "Aadhaar identity copy of the student and both parents/guardians." },
    { name: "Passport-Size Photographs", detail: "Recent colored passport photographs of the student and parents." },
    { name: "Previous Academic Records", detail: "Report cards/progress records from the previous school (Class 1 onwards)." },
    { name: "Transfer Certificate (TC)", detail: "Original Transfer Certificate counter-signed by competent educational authority (if applicable)." },
    { name: "Immunization & Medical Record", detail: "Record of standard childhood immunizations and any specific medical considerations." }
  ],

  whyChooseUs: {
    heading: "Why Choose SJRPS-Rajajinagar?",
    tagline: "Admissions at SJRPS-Rajajinagar are not just about enrolment — they are the beginning of a lifelong partnership in your child's growth and success.",
    pillars: [
      {
        title: "Academic Excellence",
        description: "Proven 100% CBSE board examination track record with NCERT-aligned curriculum, individual mentorship, and conceptual rigor.",
        icon: "BookOpen"
      },
      {
        title: "Holistic Development",
        description: "Balanced emphasis on sports, robotics, visual arts, taekwondo, music, yoga, and leadership building through student council.",
        icon: "Sparkles"
      },
      {
        title: "Experienced Faculty",
        description: "Highly seasoned educators with decades of subject expertise committed to individualized student nurturing and growth.",
        icon: "GraduationCap"
      },
      {
        title: "Value-Based Education",
        description: "Instilling timeless moral values, cultural pride, social empathy, and environmental consciousness alongside academic pursuits.",
        icon: "Heart"
      },
      {
        title: "Modern Learning Environment",
        description: "AI-enabled flat panel interactive classrooms, state-of-the-art computer and composite science laboratories, and library resources.",
        icon: "Monitor"
      }
    ]
  },

  eligibility: {
    criteriaHeading: "Grade-wise Admission Criteria",
    mainText: "Admissions are offered from Pre KG through Class 10. Eligibility for each grade is determined by age, prior schooling, and an age-appropriate assessment.",
    welcomeQuote: "SJRPS-Rajajinagar welcomes students who demonstrate a willingness to learn, participate actively, and uphold the values and standards of the institution.",
    ageGuidelines: [
      { grade: "Pre-Nursery / Nursery", minAge: "2.5 – 3 years as of June 1st" },
      { grade: "LKG", minAge: "3.5 – 4 years as of June 1st" },
      { grade: "UKG", minAge: "4.5 – 5 years as of June 1st" },
      { grade: "Grade I", minAge: "5.5 – 6 years as of June 1st" },
      { grade: "Grades II – X", minAge: "Based on previous grade promotion and TC eligibility" },
    ]
  },

  feeStructure: {
    intro: "A clear, family-friendly fee structure that reflects our commitment to quality CBSE education at SJRPS-Rajajinagar.",
    academicYear: "2025–26",
    newAdmissionFees: [
      { slNo: 1, grade: "Pre-Nursery", fee: 58000 },
      { slNo: 2, grade: "LKG", fee: 63000 },
      { slNo: 3, grade: "UKG", fee: 63000 },
      { slNo: 4, grade: "I to V Std.", fee: 73600 },
      { slNo: 5, grade: "VI to VIII Std.", fee: 79200 },
    ],
    reAdmissionFees: [
      { slNo: 1, transition: "Pre-Nursery to LKG", fee: 55000 },
      { slNo: 2, transition: "LKG to UKG", fee: 55000 },
      { slNo: 3, transition: "UKG to Grade I", fee: 59700 },
      { slNo: 4, transition: "Grade I to Grade II", fee: 59700 },
      { slNo: 5, transition: "Grade II to Grade III", fee: 59700 },
      { slNo: 6, transition: "Grade III to Grade IV", fee: 59700 },
      { slNo: 7, transition: "Grade IV to Grade V", fee: 59700 },
      { slNo: 8, transition: "Grade V to Grade VI", fee: 66900 },
      { slNo: 9, transition: "Grade VI to Grade VII", fee: 66900 },
      { slNo: 10, transition: "Grade VII to Grade VIII", fee: 66900 },
      { slNo: 11, transition: "Grade VIII to Grade IX", fee: 66900 },
      { slNo: 12, transition: "Grade IX to Grade X", fee: 70400 },
    ],
    mandatoryPdfLink: "/documents/11-Fee Structure AY 2026-27.pdf",
    notes: [
      "Fees for New Admissions for Grades IX and X are available upon enquiry at the campus admissions counter.",
      "Fee payment is collected in convenient term installments as notified at the beginning of the academic calendar.",
      "Books, uniforms, and specialized activity kits are procured separately.",
      "The official fee schedule for AY 2026–27 is published under Mandatory Disclosure."
    ]
  }
};
