import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, FileText, Users, Image, Calendar, Star, MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import indianStudentsAchievements from "@/assets/indian-students-achievements.jpg";

interface PageAudit {
  pageName: string;
  category: string;
  route: string;
  dummyData: string[];
  actualDataNeeded: string[];
  priority: "High" | "Medium" | "Low";
  estimatedHours: number;
}

const PageOverview = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const pageAudits: PageAudit[] = [
    {
      pageName: "Home Page",
      category: "Main",
      route: "/",
      dummyData: [
        "Hero banner images from Unsplash (campus/education stock photos)",
        "Statistics: '2000+ Students, 50+ Courses, 150+ Faculty, 100+ Awards'",
        "Generic faculty photos and names",
        "Sample testimonials with placeholder names",
        "Stock photos for facilities section",
        "Lorem ipsum descriptions in various sections",
        "Generic news and events with placeholder dates",
        "Placeholder management team photos"
      ],
      actualDataNeeded: [
        "Actual SJRPS-HBR campus photos for hero slider",
        "Real student enrollment numbers and accurate statistics",
        "Actual faculty photos, names, qualifications, and designations",
        "Genuine student/parent testimonials with permissions",
        "Real facility photos showcasing SJRPS-HBR infrastructure",
        "Authentic school descriptions and value propositions",
        "Current news articles and upcoming events",
        "Real management team photos and profiles",
        "SJRPS-HBR logo and branding elements",
        "Contact information verification"
      ],
      priority: "High",
      estimatedHours: 40
    },
    {
      pageName: "About SJRPS-HBR Overview",
      category: "About",
      route: "/about/sjrc",
      dummyData: [
        "Generic school history narrative",
        "Placeholder milestone dates",
        "Stock photos of school campus",
        "Generic achievement numbers",
        "Sample accreditation details"
      ],
      actualDataNeeded: [
        "SJRPS-HBR's actual founding history and milestones",
        "Real achievement data and statistics",
        "Actual campus photos and infrastructure images",
        "NAAC accreditation documents and details",
        "School's unique selling propositions and differentiators"
      ],
      priority: "High",
      estimatedHours: 20
    },
    {
      pageName: "Vision & Mission",
      category: "About",
      route: "/about/vision-mission",
      dummyData: [
        "Generic educational vision statements",
        "Placeholder mission content",
        "Stock imagery for vision representation"
      ],
      actualDataNeeded: [
        "SJRPS-HBR's official vision and mission statements",
        "Core values and educational philosophy",
        "Strategic goals and objectives",
        "Custom graphics representing school's vision"
      ],
      priority: "High",
      estimatedHours: 15
    },
    {
      pageName: "Secretary's Message",
      category: "About",
      route: "/about/secretary-message",
      dummyData: [
        "Placeholder secretary profile",
        "Generic message content",
        "Stock professional photo"
      ],
      actualDataNeeded: [
        "Secretary's actual photo and professional profile",
        "Authentic message from the secretary",
        "Educational background and achievements",
        "Secretary's vision for the school"
      ],
      priority: "High",
      estimatedHours: 8
    },
    {
      pageName: "Principal's Desk",
      category: "About",
      route: "/about/principal-message",
      dummyData: [
        "Placeholder principal profile",
        "Generic welcome message",
        "Stock professional photo"
      ],
      actualDataNeeded: [
        "Principal's actual photo and credentials",
        "Authentic welcome message and educational philosophy",
        "Principal's qualifications and experience",
        "Personal message to students and parents"
      ],
      priority: "High",
      estimatedHours: 8
    },
    {
      pageName: "Core Team",
      category: "About",
      route: "/about/core-team",
      dummyData: [
        "Placeholder team member profiles",
        "Generic role descriptions",
        "Stock professional photos"
      ],
      actualDataNeeded: [
        "Actual core team member photos",
        "Real names, designations, and qualifications",
        "Team member responsibilities and expertise",
        "Professional backgrounds and achievements"
      ],
      priority: "Medium",
      estimatedHours: 12
    },
    {
      pageName: "Board of Members",
      category: "About",
      route: "/about/board-members",
      dummyData: [
        "Placeholder board member profiles",
        "Generic expertise descriptions",
        "Stock professional photos"
      ],
      actualDataNeeded: [
        "Actual board member photos and profiles",
        "Real names, positions, and professional backgrounds",
        "Board member qualifications and expertise",
        "Roles and responsibilities within the board"
      ],
      priority: "Medium",
      estimatedHours: 15
    },
    {
      pageName: "Teachers",
      category: "About",
      route: "/about/teachers",
      dummyData: [
        "Generic teacher profiles",
        "Placeholder qualifications",
        "Stock teacher photos"
      ],
      actualDataNeeded: [
        "Actual teacher photos with permissions",
        "Real names, subjects, and qualifications",
        "Teaching experience and specializations",
        "Teacher achievements and certifications"
      ],
      priority: "Medium",
      estimatedHours: 25
    },
    {
      pageName: "Admission Process",
      category: "Admissions",
      route: "/admissions/admissions-process",
      dummyData: [
        "Generic admission steps",
        "Placeholder forms and documents",
        "Sample fee structures",
        "Generic eligibility criteria"
      ],
      actualDataNeeded: [
        "SJRPS-HBR's actual admission process and timeline",
        "Real application forms and required documents",
        "Current fee structure and payment methods",
        "Specific eligibility criteria for each grade",
        "Admission committee details and contact information"
      ],
      priority: "High",
      estimatedHours: 20
    },
    {
      pageName: "School Policies",
      category: "Admissions",
      route: "/admissions/school-policies",
      dummyData: [
        "Generic school policies",
        "Placeholder rules and regulations",
        "Sample disciplinary guidelines"
      ],
      actualDataNeeded: [
        "SJRPS-HBR's official school policies and handbook",
        "Discipline and conduct policies",
        "Academic policies and grading system",
        "Safety and security protocols"
      ],
      priority: "High",
      estimatedHours: 18
    },
    {
      pageName: "Fee Structure",
      category: "Admissions",
      route: "/admissions/fees-structure",
      dummyData: [
        "Sample fee amounts",
        "Generic payment plans",
        "Placeholder additional charges"
      ],
      actualDataNeeded: [
        "Current academic year fee structure",
        "Payment schedules and methods",
        "Additional charges and optional fees",
        "Fee revision policies and procedures"
      ],
      priority: "High",
      estimatedHours: 10
    },
    {
      pageName: "Scholarship Programs",
      category: "Admissions",
      route: "/admissions/scholarship",
      dummyData: [
        "Generic scholarship criteria",
        "Placeholder award amounts",
        "Sample application process"
      ],
      actualDataNeeded: [
        "Actual scholarship programs and criteria",
        "Real award amounts and benefits",
        "Application process and deadlines",
        "Success stories of scholarship recipients"
      ],
      priority: "Medium",
      estimatedHours: 12
    },
    {
      pageName: "Primary School",
      category: "Academics",
      route: "/academics/primary",
      dummyData: [
        "Generic curriculum description",
        "Sample subject listings",
        "Placeholder teaching methodologies"
      ],
      actualDataNeeded: [
        "SJRPS-HBR's primary curriculum framework",
        "Subject-wise syllabi and learning outcomes",
        "Teaching methodologies and assessment patterns",
        "Primary section faculty and facilities"
      ],
      priority: "Medium",
      estimatedHours: 15
    },
    {
      pageName: "Secondary School",
      category: "Academics",
      route: "/academics/secondary",
      dummyData: [
        "Generic curriculum overview",
        "Sample subject combinations",
        "Placeholder exam patterns"
      ],
      actualDataNeeded: [
        "Secondary curriculum and subject combinations",
        "Board examination preparation methods",
        "Subject-wise faculty expertise",
        "Academic support programs"
      ],
      priority: "Medium",
      estimatedHours: 15
    },
    {
      pageName: "Higher Secondary",
      category: "Academics",
      route: "/academics/higher-secondary",
      dummyData: [
        "Generic stream descriptions",
        "Sample career guidance",
        "Placeholder college preparation"
      ],
      actualDataNeeded: [
        "Available streams and subject combinations",
        "Career counseling and guidance programs",
        "College preparation and entrance exam coaching",
        "Alumni success stories and college placements"
      ],
      priority: "Medium",
      estimatedHours: 15
    },
    {
      pageName: "Calendar of Events",
      category: "Academics",
      route: "/academics/calendar",
      dummyData: [
        "Sample academic calendar",
        "Placeholder event dates",
        "Generic event descriptions"
      ],
      actualDataNeeded: [
        "Current academic year calendar",
        "Real event dates and descriptions",
        "Examination schedules and holiday lists",
        "Extracurricular activity calendar"
      ],
      priority: "High",
      estimatedHours: 12
    },
    {
      pageName: "Achievements",
      category: "Academics",
      route: "/academics/achievements",
      dummyData: [
        "Generic achievement listings",
        "Placeholder award details",
        "Sample competition results"
      ],
      actualDataNeeded: [
        "Actual student achievements and awards",
        "Competition results and rankings",
        "Academic toppers and merit lists",
        "Photos from award ceremonies"
      ],
      priority: "Medium",
      estimatedHours: 18
    },
    {
      pageName: "Facilities Overview",
      category: "Facilities",
      route: "/campus/facilities",
      dummyData: [
        "Stock facility photos",
        "Generic facility descriptions",
        "Placeholder capacity details"
      ],
      actualDataNeeded: [
        "Actual SJRPS-HBR facility photos",
        "Real facility specifications and capacities",
        "Equipment and resource details",
        "Facility usage schedules and booking procedures"
      ],
      priority: "Medium",
      estimatedHours: 20
    },
    {
      pageName: "Modern Classrooms",
      category: "Facilities",
      route: "/facilities/classrooms",
      dummyData: [
        "Stock classroom photos",
        "Generic technology descriptions",
        "Placeholder capacity numbers"
      ],
      actualDataNeeded: [
        "Actual SJRPS-HBR classroom photos",
        "Technology and equipment specifications",
        "Classroom capacity and arrangement details",
        "Smart board and AV equipment information"
      ],
      priority: "Medium",
      estimatedHours: 8
    },
    {
      pageName: "Library & Reading Corner",
      category: "Facilities",
      route: "/facilities/library",
      dummyData: [
        "Stock library photos",
        "Generic book collection numbers",
        "Placeholder digital resources"
      ],
      actualDataNeeded: [
        "Actual SJRPS-HBR library photos",
        "Real book collection count and categories",
        "Digital resources and e-library access",
        "Library timings and borrowing policies"
      ],
      priority: "Medium",
      estimatedHours: 10
    },
    {
      pageName: "Science & Innovation Labs",
      category: "Facilities",
      route: "/facilities/laboratories",
      dummyData: [
        "Stock laboratory photos",
        "Generic equipment listings",
        "Placeholder safety protocols"
      ],
      actualDataNeeded: [
        "Actual SJRPS-HBR laboratory photos",
        "Real equipment and apparatus details",
        "Safety protocols and procedures",
        "Lab schedules and usage guidelines"
      ],
      priority: "Medium",
      estimatedHours: 12
    },
    {
      pageName: "Transportation",
      category: "Facilities",
      route: "/facilities/transportation",
      dummyData: [
        "Generic bus route information",
        "Placeholder safety measures",
        "Sample fee structures"
      ],
      actualDataNeeded: [
        "Actual bus routes and stops",
        "Transportation fee structure",
        "Safety measures and tracking systems",
        "Driver details and contact information"
      ],
      priority: "Medium",
      estimatedHours: 10
    },
    {
      pageName: "Sports & Activities",
      category: "Campus Life",
      route: "/campus/sports",
      dummyData: [
        "Generic sports facility descriptions",
        "Placeholder coaching staff",
        "Sample achievement records"
      ],
      actualDataNeeded: [
        "Actual sports facilities and equipment",
        "Real coaching staff profiles and qualifications",
        "Sports achievement records and trophies",
        "Sports calendar and training schedules"
      ],
      priority: "Medium",
      estimatedHours: 15
    },
    {
      pageName: "Clubs & Activities",
      category: "Campus Life",
      route: "/campus/clubs",
      dummyData: [
        "Generic club descriptions",
        "Placeholder activity schedules",
        "Sample club achievements"
      ],
      actualDataNeeded: [
        "Active clubs and their activities",
        "Club coordinators and meeting schedules",
        "Club achievements and competitions",
        "Student participation and success stories"
      ],
      priority: "Low",
      estimatedHours: 12
    },
    {
      pageName: "Faculty Profiles",
      category: "Faculty",
      route: "/faculty",
      dummyData: [
        "Generic faculty photos",
        "Placeholder qualifications",
        "Sample experience details"
      ],
      actualDataNeeded: [
        "Actual faculty photos with permissions",
        "Real qualifications and certifications",
        "Teaching experience and specializations",
        "Faculty achievements and publications"
      ],
      priority: "Medium",
      estimatedHours: 30
    },
    {
      pageName: "Photo Gallery",
      category: "Gallery",
      route: "/gallery/photos",
      dummyData: [
        "Stock school photos",
        "Generic event images",
        "Placeholder activity photos"
      ],
      actualDataNeeded: [
        "Actual SJRPS-HBR event photos",
        "Student activity and achievement photos",
        "Campus life and facility images",
        "Permission forms for student photos"
      ],
      priority: "Medium",
      estimatedHours: 20
    },
    {
      pageName: "Video Gallery",
      category: "Gallery",
      route: "/gallery/videos",
      dummyData: [
        "Placeholder video thumbnails",
        "Generic video descriptions",
        "Sample promotional content"
      ],
      actualDataNeeded: [
        "Actual school promotional videos",
        "Event recordings and highlights",
        "Student testimonial videos",
        "Virtual campus tour videos"
      ],
      priority: "Low",
      estimatedHours: 25
    },
    {
      pageName: "Contact Information",
      category: "Contact",
      route: "/contact",
      dummyData: [
        "Generic contact details",
        "Placeholder office hours",
        "Sample inquiry forms"
      ],
      actualDataNeeded: [
        "Verified contact numbers and email addresses",
        "Actual office hours and availability",
        "Department-wise contact information",
        "Location maps and transportation details"
      ],
      priority: "High",
      estimatedHours: 8
    }
  ];

  const categories = ["All", "Main", "About", "Admissions", "Academics", "Facilities", "Campus Life", "Faculty", "Gallery", "Contact"];

  const filteredPages = selectedCategory === "All" 
    ? pageAudits 
    : pageAudits.filter(page => page.category === selectedCategory);

  const totalEstimatedHours = pageAudits.reduce((sum, page) => sum + page.estimatedHours, 0);
  const highPriorityPages = pageAudits.filter(page => page.priority === "High").length;

  const downloadExcelData = () => {
    const csvContent = [
      ["Page Name", "Category", "Route", "Dummy Data Used", "Actual Data to be Procured", "Priority", "Estimated Hours", "Status", "Owner"],
      ...pageAudits.map(page => [
        page.pageName,
        page.category,
        page.route,
        page.dummyData.join("; "),
        page.actualDataNeeded.join("; "),
        page.priority,
        page.estimatedHours.toString(),
        "Not Started",
        "To be Assigned"
      ])
    ].map(row => row.map(cell => `"${cell}"`).join(",")).join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "SJRPS_Website_Content_Audit.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-red-100 text-red-800 border-red-200";
      case "Medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Low": return "bg-green-100 text-green-800 border-green-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <Layout>
      <PageBanner
        title="Page Overview & Content Audit"
        subtitle="Complete Website Sitemap and Data Requirements"
        backgroundImage={indianStudentsAchievements}
      />

      <div className="container mx-auto px-4 py-12">
        {/* Summary Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="flex items-center p-6">
              <FileText className="h-8 w-8 text-blue-600 mr-4" />
              <div>
                <p className="text-2xl font-bold text-gray-900">{pageAudits.length}</p>
                <p className="text-gray-600">Total Pages</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center p-6">
              <Star className="h-8 w-8 text-red-600 mr-4" />
              <div>
                <p className="text-2xl font-bold text-gray-900">{highPriorityPages}</p>
                <p className="text-gray-600">High Priority</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center p-6">
              <Calendar className="h-8 w-8 text-green-600 mr-4" />
              <div>
                <p className="text-2xl font-bold text-gray-900">{totalEstimatedHours}</p>
                <p className="text-gray-600">Total Hours</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center p-6">
              <Image className="h-8 w-8 text-purple-600 mr-4" />
              <div>
                <p className="text-2xl font-bold text-gray-900">50+</p>
                <p className="text-gray-600">Images Needed</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Content Audit Details</h2>
            <p className="text-gray-600">Detailed breakdown of dummy content and data requirements for each page</p>
          </div>
          <Button onClick={downloadExcelData} className="bg-green-600 hover:bg-green-700 text-white">
            <Download className="h-4 w-4 mr-2" />
            Download Excel Report
          </Button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Page Cards */}
        <div className="grid gap-6">
          {filteredPages.map((page, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">{page.pageName}</CardTitle>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{page.category}</Badge>
                      <Badge className={getPriorityColor(page.priority)}>{page.priority} Priority</Badge>
                      <Badge variant="secondary">{page.estimatedHours}h estimated</Badge>
                    </div>
                    <p className="text-sm text-gray-600">Route: {page.route}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Dummy Data */}
                  <div>
                    <h4 className="font-semibold text-red-700 mb-3 flex items-center">
                      <FileText className="h-4 w-4 mr-2" />
                      Dummy Data Currently Used
                    </h4>
                    <ul className="space-y-2">
                      {page.dummyData.map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-700 pl-4 border-l-2 border-red-200">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actual Data Needed */}
                  <div>
                    <h4 className="font-semibold text-green-700 mb-3 flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      Actual Data to be Procured
                    </h4>
                    <ul className="space-y-2">
                      {page.actualDataNeeded.map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-700 pl-4 border-l-2 border-green-200">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Important Notes */}
        <Card className="mt-12 bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-800">Important Notes for Data Collection</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-blue-700">
              <div>
                <h4 className="font-semibold mb-2">Photo Requirements:</h4>
                <ul className="space-y-1 list-disc pl-5">
                  <li>All photos should be high resolution (minimum 1920x1080)</li>
                  <li>Student photos require written parental consent</li>
                  <li>Faculty photos need individual permissions</li>
                  <li>Maintain consistent lighting and style across campus photos</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Content Guidelines:</h4>
                <ul className="space-y-1 list-disc pl-5">
                  <li>All content should be factual and verifiable</li>
                  <li>Maintain consistent tone and style across pages</li>
                  <li>Ensure all contact information is current and verified</li>
                  <li>Include SEO-friendly descriptions for better visibility</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default PageOverview;