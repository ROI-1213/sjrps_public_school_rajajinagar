import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/PageOverview.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/pages/PageOverview.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import Layout from "/src/components/Layout.tsx";
import PageBanner from "/src/components/PageBanner.tsx";
import { Card, CardHeader, CardTitle, CardContent } from "/src/components/ui/card.tsx";
import { Badge } from "/src/components/ui/badge.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { Download, FileText, Users, Image, Calendar, Star } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
import __vite__cjsImport8_react from "/node_modules/.vite/deps/react.js?v=5efa796b"; const useState = __vite__cjsImport8_react["useState"];
import indianStudentsAchievements from "/src/assets/indian-students-achievements.jpg?import";
const PageOverview = ()=>{
    _s();
    const [selectedCategory, setSelectedCategory] = useState("All");
    const pageAudits = [
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
    const categories = [
        "All",
        "Main",
        "About",
        "Admissions",
        "Academics",
        "Facilities",
        "Campus Life",
        "Faculty",
        "Gallery",
        "Contact"
    ];
    const filteredPages = selectedCategory === "All" ? pageAudits : pageAudits.filter((page)=>page.category === selectedCategory);
    const totalEstimatedHours = pageAudits.reduce((sum, page)=>sum + page.estimatedHours, 0);
    const highPriorityPages = pageAudits.filter((page)=>page.priority === "High").length;
    const downloadExcelData = ()=>{
        const csvContent = [
            [
                "Page Name",
                "Category",
                "Route",
                "Dummy Data Used",
                "Actual Data to be Procured",
                "Priority",
                "Estimated Hours",
                "Status",
                "Owner"
            ],
            ...pageAudits.map((page)=>[
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
        ].map((row)=>row.map((cell)=>`"${cell}"`).join(",")).join("\n");
        const blob = new Blob([
            csvContent
        ], {
            type: "text/csv;charset=utf-8;"
        });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", "SJRPS_Website_Content_Audit.csv");
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const getPriorityColor = (priority)=>{
        switch(priority){
            case "High":
                return "bg-red-100 text-red-800 border-red-200";
            case "Medium":
                return "bg-yellow-100 text-yellow-800 border-yellow-200";
            case "Low":
                return "bg-green-100 text-green-800 border-green-200";
            default:
                return "bg-gray-100 text-gray-800 border-gray-200";
        }
    };
    return /*#__PURE__*/ _jsxDEV(Layout, {
        "data-lov-id": "src/pages/PageOverview.tsx:592:4",
        "data-lov-name": "Layout",
        "data-component-path": "src/pages/PageOverview.tsx",
        "data-component-line": "592",
        "data-component-file": "PageOverview.tsx",
        "data-component-name": "Layout",
        "data-component-content": "%7B%7D",
        children: [
            /*#__PURE__*/ _jsxDEV(PageBanner, {
                "data-lov-id": "src/pages/PageOverview.tsx:593:6",
                "data-lov-name": "PageBanner",
                "data-component-path": "src/pages/PageOverview.tsx",
                "data-component-line": "593",
                "data-component-file": "PageOverview.tsx",
                "data-component-name": "PageBanner",
                "data-component-content": "%7B%7D",
                title: "Page Overview & Content Audit",
                subtitle: "Complete Website Sitemap and Data Requirements",
                backgroundImage: indianStudentsAchievements
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                lineNumber: 593,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                "data-lov-id": "src/pages/PageOverview.tsx:599:6",
                "data-lov-name": "div",
                "data-component-path": "src/pages/PageOverview.tsx",
                "data-component-line": "599",
                "data-component-file": "PageOverview.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20py-12%22%7D",
                className: "container mx-auto px-4 py-12",
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/PageOverview.tsx:601:8",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/PageOverview.tsx",
                        "data-component-line": "601",
                        "data-component-file": "PageOverview.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-4%20gap-6%20mb-12%22%7D",
                        className: "grid md:grid-cols-4 gap-6 mb-12",
                        children: [
                            /*#__PURE__*/ _jsxDEV(Card, {
                                "data-lov-id": "src/pages/PageOverview.tsx:602:10",
                                "data-lov-name": "Card",
                                "data-component-path": "src/pages/PageOverview.tsx",
                                "data-component-line": "602",
                                "data-component-file": "PageOverview.tsx",
                                "data-component-name": "Card",
                                "data-component-content": "%7B%7D",
                                children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                    "data-lov-id": "src/pages/PageOverview.tsx:603:12",
                                    "data-lov-name": "CardContent",
                                    "data-component-path": "src/pages/PageOverview.tsx",
                                    "data-component-line": "603",
                                    "data-component-file": "PageOverview.tsx",
                                    "data-component-name": "CardContent",
                                    "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20p-6%22%7D",
                                    className: "flex items-center p-6",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV(FileText, {
                                            "data-lov-id": "src/pages/PageOverview.tsx:604:14",
                                            "data-lov-name": "FileText",
                                            "data-component-path": "src/pages/PageOverview.tsx",
                                            "data-component-line": "604",
                                            "data-component-file": "PageOverview.tsx",
                                            "data-component-name": "FileText",
                                            "data-component-content": "%7B%22className%22%3A%22h-8%20w-8%20text-blue-600%20mr-4%22%7D",
                                            className: "h-8 w-8 text-blue-600 mr-4"
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                            lineNumber: 604,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/pages/PageOverview.tsx:605:14",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/pages/PageOverview.tsx",
                                            "data-component-line": "605",
                                            "data-component-file": "PageOverview.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%7D",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/PageOverview.tsx:606:16",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/PageOverview.tsx",
                                                    "data-component-line": "606",
                                                    "data-component-file": "PageOverview.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22className%22%3A%22text-2xl%20font-bold%20text-gray-900%22%7D",
                                                    className: "text-2xl font-bold text-gray-900",
                                                    children: pageAudits.length
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                                    lineNumber: 606,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/PageOverview.tsx:607:16",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/PageOverview.tsx",
                                                    "data-component-line": "607",
                                                    "data-component-file": "PageOverview.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22text%22%3A%22Total%20Pages%22%2C%22className%22%3A%22text-gray-600%22%7D",
                                                    className: "text-gray-600",
                                                    children: "Total Pages"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                                    lineNumber: 607,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                            lineNumber: 605,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                    lineNumber: 603,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                lineNumber: 602,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV(Card, {
                                "data-lov-id": "src/pages/PageOverview.tsx:611:10",
                                "data-lov-name": "Card",
                                "data-component-path": "src/pages/PageOverview.tsx",
                                "data-component-line": "611",
                                "data-component-file": "PageOverview.tsx",
                                "data-component-name": "Card",
                                "data-component-content": "%7B%7D",
                                children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                    "data-lov-id": "src/pages/PageOverview.tsx:612:12",
                                    "data-lov-name": "CardContent",
                                    "data-component-path": "src/pages/PageOverview.tsx",
                                    "data-component-line": "612",
                                    "data-component-file": "PageOverview.tsx",
                                    "data-component-name": "CardContent",
                                    "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20p-6%22%7D",
                                    className: "flex items-center p-6",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV(Star, {
                                            "data-lov-id": "src/pages/PageOverview.tsx:613:14",
                                            "data-lov-name": "Star",
                                            "data-component-path": "src/pages/PageOverview.tsx",
                                            "data-component-line": "613",
                                            "data-component-file": "PageOverview.tsx",
                                            "data-component-name": "Star",
                                            "data-component-content": "%7B%22className%22%3A%22h-8%20w-8%20text-red-600%20mr-4%22%7D",
                                            className: "h-8 w-8 text-red-600 mr-4"
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                            lineNumber: 613,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/pages/PageOverview.tsx:614:14",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/pages/PageOverview.tsx",
                                            "data-component-line": "614",
                                            "data-component-file": "PageOverview.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%7D",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/PageOverview.tsx:615:16",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/PageOverview.tsx",
                                                    "data-component-line": "615",
                                                    "data-component-file": "PageOverview.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22className%22%3A%22text-2xl%20font-bold%20text-gray-900%22%7D",
                                                    className: "text-2xl font-bold text-gray-900",
                                                    children: highPriorityPages
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                                    lineNumber: 615,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/PageOverview.tsx:616:16",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/PageOverview.tsx",
                                                    "data-component-line": "616",
                                                    "data-component-file": "PageOverview.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22text%22%3A%22High%20Priority%22%2C%22className%22%3A%22text-gray-600%22%7D",
                                                    className: "text-gray-600",
                                                    children: "High Priority"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                                    lineNumber: 616,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                            lineNumber: 614,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                    lineNumber: 612,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                lineNumber: 611,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV(Card, {
                                "data-lov-id": "src/pages/PageOverview.tsx:620:10",
                                "data-lov-name": "Card",
                                "data-component-path": "src/pages/PageOverview.tsx",
                                "data-component-line": "620",
                                "data-component-file": "PageOverview.tsx",
                                "data-component-name": "Card",
                                "data-component-content": "%7B%7D",
                                children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                    "data-lov-id": "src/pages/PageOverview.tsx:621:12",
                                    "data-lov-name": "CardContent",
                                    "data-component-path": "src/pages/PageOverview.tsx",
                                    "data-component-line": "621",
                                    "data-component-file": "PageOverview.tsx",
                                    "data-component-name": "CardContent",
                                    "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20p-6%22%7D",
                                    className: "flex items-center p-6",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV(Calendar, {
                                            "data-lov-id": "src/pages/PageOverview.tsx:622:14",
                                            "data-lov-name": "Calendar",
                                            "data-component-path": "src/pages/PageOverview.tsx",
                                            "data-component-line": "622",
                                            "data-component-file": "PageOverview.tsx",
                                            "data-component-name": "Calendar",
                                            "data-component-content": "%7B%22className%22%3A%22h-8%20w-8%20text-green-600%20mr-4%22%7D",
                                            className: "h-8 w-8 text-green-600 mr-4"
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                            lineNumber: 622,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/pages/PageOverview.tsx:623:14",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/pages/PageOverview.tsx",
                                            "data-component-line": "623",
                                            "data-component-file": "PageOverview.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%7D",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/PageOverview.tsx:624:16",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/PageOverview.tsx",
                                                    "data-component-line": "624",
                                                    "data-component-file": "PageOverview.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22className%22%3A%22text-2xl%20font-bold%20text-gray-900%22%7D",
                                                    className: "text-2xl font-bold text-gray-900",
                                                    children: totalEstimatedHours
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                                    lineNumber: 624,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/PageOverview.tsx:625:16",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/PageOverview.tsx",
                                                    "data-component-line": "625",
                                                    "data-component-file": "PageOverview.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22text%22%3A%22Total%20Hours%22%2C%22className%22%3A%22text-gray-600%22%7D",
                                                    className: "text-gray-600",
                                                    children: "Total Hours"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                                    lineNumber: 625,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                            lineNumber: 623,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                    lineNumber: 621,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                lineNumber: 620,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV(Card, {
                                "data-lov-id": "src/pages/PageOverview.tsx:629:10",
                                "data-lov-name": "Card",
                                "data-component-path": "src/pages/PageOverview.tsx",
                                "data-component-line": "629",
                                "data-component-file": "PageOverview.tsx",
                                "data-component-name": "Card",
                                "data-component-content": "%7B%7D",
                                children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                    "data-lov-id": "src/pages/PageOverview.tsx:630:12",
                                    "data-lov-name": "CardContent",
                                    "data-component-path": "src/pages/PageOverview.tsx",
                                    "data-component-line": "630",
                                    "data-component-file": "PageOverview.tsx",
                                    "data-component-name": "CardContent",
                                    "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20p-6%22%7D",
                                    className: "flex items-center p-6",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV(Image, {
                                            className: "h-8 w-8 text-purple-600 mr-4"
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                            lineNumber: 631,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/pages/PageOverview.tsx:632:14",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/pages/PageOverview.tsx",
                                            "data-component-line": "632",
                                            "data-component-file": "PageOverview.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%7D",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/PageOverview.tsx:633:16",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/PageOverview.tsx",
                                                    "data-component-line": "633",
                                                    "data-component-file": "PageOverview.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22text%22%3A%2250%2B%22%2C%22className%22%3A%22text-2xl%20font-bold%20text-gray-900%22%7D",
                                                    className: "text-2xl font-bold text-gray-900",
                                                    children: "50+"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                                    lineNumber: 633,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/PageOverview.tsx:634:16",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/PageOverview.tsx",
                                                    "data-component-line": "634",
                                                    "data-component-file": "PageOverview.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22text%22%3A%22Images%20Needed%22%2C%22className%22%3A%22text-gray-600%22%7D",
                                                    className: "text-gray-600",
                                                    children: "Images Needed"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                                    lineNumber: 634,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                            lineNumber: 632,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                    lineNumber: 630,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                lineNumber: 629,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                        lineNumber: 601,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/PageOverview.tsx:641:8",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/PageOverview.tsx",
                        "data-component-line": "641",
                        "data-component-file": "PageOverview.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22flex%20flex-col%20sm%3Aflex-row%20justify-between%20items-start%20sm%3Aitems-center%20mb-8%20gap-4%22%7D",
                        className: "flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4",
                        children: [
                            /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/pages/PageOverview.tsx:642:10",
                                "data-lov-name": "div",
                                "data-component-path": "src/pages/PageOverview.tsx",
                                "data-component-line": "642",
                                "data-component-file": "PageOverview.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%7D",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("h2", {
                                        "data-lov-id": "src/pages/PageOverview.tsx:643:12",
                                        "data-lov-name": "h2",
                                        "data-component-path": "src/pages/PageOverview.tsx",
                                        "data-component-line": "643",
                                        "data-component-file": "PageOverview.tsx",
                                        "data-component-name": "h2",
                                        "data-component-content": "%7B%22text%22%3A%22Content%20Audit%20Details%22%2C%22className%22%3A%22text-2xl%20font-bold%20text-gray-900%20mb-2%22%7D",
                                        className: "text-2xl font-bold text-gray-900 mb-2",
                                        children: "Content Audit Details"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                        lineNumber: 643,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        "data-lov-id": "src/pages/PageOverview.tsx:644:12",
                                        "data-lov-name": "p",
                                        "data-component-path": "src/pages/PageOverview.tsx",
                                        "data-component-line": "644",
                                        "data-component-file": "PageOverview.tsx",
                                        "data-component-name": "p",
                                        "data-component-content": "%7B%22text%22%3A%22Detailed%20breakdown%20of%20dummy%20content%20and%20data%20requirements%20for%20each%20page%22%2C%22className%22%3A%22text-gray-600%22%7D",
                                        className: "text-gray-600",
                                        children: "Detailed breakdown of dummy content and data requirements for each page"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                        lineNumber: 644,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                lineNumber: 642,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV(Button, {
                                "data-lov-id": "src/pages/PageOverview.tsx:646:10",
                                "data-lov-name": "Button",
                                "data-component-path": "src/pages/PageOverview.tsx",
                                "data-component-line": "646",
                                "data-component-file": "PageOverview.tsx",
                                "data-component-name": "Button",
                                "data-component-content": "%7B%22text%22%3A%22Download%20Excel%20Report%22%2C%22className%22%3A%22bg-green-600%20hover%3Abg-green-700%20text-white%22%7D",
                                onClick: downloadExcelData,
                                className: "bg-green-600 hover:bg-green-700 text-white",
                                children: [
                                    /*#__PURE__*/ _jsxDEV(Download, {
                                        "data-lov-id": "src/pages/PageOverview.tsx:647:12",
                                        "data-lov-name": "Download",
                                        "data-component-path": "src/pages/PageOverview.tsx",
                                        "data-component-line": "647",
                                        "data-component-file": "PageOverview.tsx",
                                        "data-component-name": "Download",
                                        "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%20mr-2%22%7D",
                                        className: "h-4 w-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                        lineNumber: 647,
                                        columnNumber: 13
                                    }, this),
                                    "Download Excel Report"
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                lineNumber: 646,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                        lineNumber: 641,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/PageOverview.tsx:653:8",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/PageOverview.tsx",
                        "data-component-line": "653",
                        "data-component-file": "PageOverview.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22flex%20flex-wrap%20gap-2%20mb-8%22%7D",
                        className: "flex flex-wrap gap-2 mb-8",
                        children: categories.map((category)=>/*#__PURE__*/ _jsxDEV(Button, {
                                "data-lov-id": "src/pages/PageOverview.tsx:655:12",
                                "data-lov-name": "Button",
                                "data-component-path": "src/pages/PageOverview.tsx",
                                "data-component-line": "655",
                                "data-component-file": "PageOverview.tsx",
                                "data-component-name": "Button",
                                "data-component-content": "%7B%22className%22%3A%22mb-2%22%7D",
                                variant: selectedCategory === category ? "default" : "outline",
                                onClick: ()=>setSelectedCategory(category),
                                className: "mb-2",
                                children: category
                            }, category, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                lineNumber: 655,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                        lineNumber: 653,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/PageOverview.tsx:667:8",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/PageOverview.tsx",
                        "data-component-line": "667",
                        "data-component-file": "PageOverview.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22grid%20gap-6%22%7D",
                        className: "grid gap-6",
                        children: filteredPages.map((page, index)=>/*#__PURE__*/ _jsxDEV(Card, {
                                "data-lov-id": "src/pages/PageOverview.tsx:669:12",
                                "data-lov-name": "Card",
                                "data-component-path": "src/pages/PageOverview.tsx",
                                "data-component-line": "669",
                                "data-component-file": "PageOverview.tsx",
                                "data-component-name": "Card",
                                "data-component-content": "%7B%22className%22%3A%22hover%3Ashadow-lg%20transition-shadow%22%7D",
                                className: "hover:shadow-lg transition-shadow",
                                children: [
                                    /*#__PURE__*/ _jsxDEV(CardHeader, {
                                        "data-lov-id": "src/pages/PageOverview.tsx:670:14",
                                        "data-lov-name": "CardHeader",
                                        "data-component-path": "src/pages/PageOverview.tsx",
                                        "data-component-line": "670",
                                        "data-component-file": "PageOverview.tsx",
                                        "data-component-name": "CardHeader",
                                        "data-component-content": "%7B%7D",
                                        children: /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/pages/PageOverview.tsx:671:16",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/pages/PageOverview.tsx",
                                            "data-component-line": "671",
                                            "data-component-file": "PageOverview.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22flex%20justify-between%20items-start%22%7D",
                                            className: "flex justify-between items-start",
                                            children: /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/PageOverview.tsx:672:18",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/PageOverview.tsx",
                                                "data-component-line": "672",
                                                "data-component-file": "PageOverview.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%7D",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(CardTitle, {
                                                        "data-lov-id": "src/pages/PageOverview.tsx:673:20",
                                                        "data-lov-name": "CardTitle",
                                                        "data-component-path": "src/pages/PageOverview.tsx",
                                                        "data-component-line": "673",
                                                        "data-component-file": "PageOverview.tsx",
                                                        "data-component-name": "CardTitle",
                                                        "data-component-content": "%7B%22className%22%3A%22text-xl%20mb-2%22%7D",
                                                        className: "text-xl mb-2",
                                                        children: page.pageName
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                                        lineNumber: 673,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/pages/PageOverview.tsx:674:20",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/PageOverview.tsx",
                                                        "data-component-line": "674",
                                                        "data-component-file": "PageOverview.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20gap-2%20mb-2%22%7D",
                                                        className: "flex items-center gap-2 mb-2",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV(Badge, {
                                                                "data-lov-id": "src/pages/PageOverview.tsx:675:22",
                                                                "data-lov-name": "Badge",
                                                                "data-component-path": "src/pages/PageOverview.tsx",
                                                                "data-component-line": "675",
                                                                "data-component-file": "PageOverview.tsx",
                                                                "data-component-name": "Badge",
                                                                "data-component-content": "%7B%7D",
                                                                variant: "outline",
                                                                children: page.category
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                                                lineNumber: 675,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV(Badge, {
                                                                "data-lov-id": "src/pages/PageOverview.tsx:676:22",
                                                                "data-lov-name": "Badge",
                                                                "data-component-path": "src/pages/PageOverview.tsx",
                                                                "data-component-line": "676",
                                                                "data-component-file": "PageOverview.tsx",
                                                                "data-component-name": "Badge",
                                                                "data-component-content": "%7B%22text%22%3A%22Priority%22%7D",
                                                                className: getPriorityColor(page.priority),
                                                                children: [
                                                                    page.priority,
                                                                    " Priority"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                                                lineNumber: 676,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV(Badge, {
                                                                "data-lov-id": "src/pages/PageOverview.tsx:677:22",
                                                                "data-lov-name": "Badge",
                                                                "data-component-path": "src/pages/PageOverview.tsx",
                                                                "data-component-line": "677",
                                                                "data-component-file": "PageOverview.tsx",
                                                                "data-component-name": "Badge",
                                                                "data-component-content": "%7B%22text%22%3A%22h%20estimated%22%7D",
                                                                variant: "secondary",
                                                                children: [
                                                                    page.estimatedHours,
                                                                    "h estimated"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                                                lineNumber: 677,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                                        lineNumber: 674,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("p", {
                                                        "data-lov-id": "src/pages/PageOverview.tsx:679:20",
                                                        "data-lov-name": "p",
                                                        "data-component-path": "src/pages/PageOverview.tsx",
                                                        "data-component-line": "679",
                                                        "data-component-file": "PageOverview.tsx",
                                                        "data-component-name": "p",
                                                        "data-component-content": "%7B%22text%22%3A%22Route%3A%22%2C%22className%22%3A%22text-sm%20text-gray-600%22%7D",
                                                        className: "text-sm text-gray-600",
                                                        children: [
                                                            "Route: ",
                                                            page.route
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                                        lineNumber: 679,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                                lineNumber: 672,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                            lineNumber: 671,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                        lineNumber: 670,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV(CardContent, {
                                        "data-lov-id": "src/pages/PageOverview.tsx:683:14",
                                        "data-lov-name": "CardContent",
                                        "data-component-path": "src/pages/PageOverview.tsx",
                                        "data-component-line": "683",
                                        "data-component-file": "PageOverview.tsx",
                                        "data-component-name": "CardContent",
                                        "data-component-content": "%7B%7D",
                                        children: /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/pages/PageOverview.tsx:684:16",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/pages/PageOverview.tsx",
                                            "data-component-line": "684",
                                            "data-component-file": "PageOverview.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-2%20gap-6%22%7D",
                                            className: "grid md:grid-cols-2 gap-6",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/PageOverview.tsx:686:18",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/PageOverview.tsx",
                                                    "data-component-line": "686",
                                                    "data-component-file": "PageOverview.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%7D",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("h4", {
                                                            "data-lov-id": "src/pages/PageOverview.tsx:687:20",
                                                            "data-lov-name": "h4",
                                                            "data-component-path": "src/pages/PageOverview.tsx",
                                                            "data-component-line": "687",
                                                            "data-component-file": "PageOverview.tsx",
                                                            "data-component-name": "h4",
                                                            "data-component-content": "%7B%22text%22%3A%22Dummy%20Data%20Currently%20Used%22%2C%22className%22%3A%22font-semibold%20text-red-700%20mb-3%20flex%20items-center%22%7D",
                                                            className: "font-semibold text-red-700 mb-3 flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV(FileText, {
                                                                    "data-lov-id": "src/pages/PageOverview.tsx:688:22",
                                                                    "data-lov-name": "FileText",
                                                                    "data-component-path": "src/pages/PageOverview.tsx",
                                                                    "data-component-line": "688",
                                                                    "data-component-file": "PageOverview.tsx",
                                                                    "data-component-name": "FileText",
                                                                    "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%20mr-2%22%7D",
                                                                    className: "h-4 w-4 mr-2"
                                                                }, void 0, false, {
                                                                    fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                                                    lineNumber: 688,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "Dummy Data Currently Used"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                                            lineNumber: 687,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("ul", {
                                                            "data-lov-id": "src/pages/PageOverview.tsx:691:20",
                                                            "data-lov-name": "ul",
                                                            "data-component-path": "src/pages/PageOverview.tsx",
                                                            "data-component-line": "691",
                                                            "data-component-file": "PageOverview.tsx",
                                                            "data-component-name": "ul",
                                                            "data-component-content": "%7B%22className%22%3A%22space-y-2%22%7D",
                                                            className: "space-y-2",
                                                            children: page.dummyData.map((item, idx)=>/*#__PURE__*/ _jsxDEV("li", {
                                                                    "data-lov-id": "src/pages/PageOverview.tsx:693:24",
                                                                    "data-lov-name": "li",
                                                                    "data-component-path": "src/pages/PageOverview.tsx",
                                                                    "data-component-line": "693",
                                                                    "data-component-file": "PageOverview.tsx",
                                                                    "data-component-name": "li",
                                                                    "data-component-content": "%7B%22className%22%3A%22text-sm%20text-gray-700%20pl-4%20border-l-2%20border-red-200%22%7D",
                                                                    className: "text-sm text-gray-700 pl-4 border-l-2 border-red-200",
                                                                    children: item
                                                                }, idx, false, {
                                                                    fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                                                    lineNumber: 693,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                                            lineNumber: 691,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                                    lineNumber: 686,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/PageOverview.tsx:701:18",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/PageOverview.tsx",
                                                    "data-component-line": "701",
                                                    "data-component-file": "PageOverview.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%7D",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("h4", {
                                                            "data-lov-id": "src/pages/PageOverview.tsx:702:20",
                                                            "data-lov-name": "h4",
                                                            "data-component-path": "src/pages/PageOverview.tsx",
                                                            "data-component-line": "702",
                                                            "data-component-file": "PageOverview.tsx",
                                                            "data-component-name": "h4",
                                                            "data-component-content": "%7B%22text%22%3A%22Actual%20Data%20to%20be%20Procured%22%2C%22className%22%3A%22font-semibold%20text-green-700%20mb-3%20flex%20items-center%22%7D",
                                                            className: "font-semibold text-green-700 mb-3 flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV(Users, {
                                                                    "data-lov-id": "src/pages/PageOverview.tsx:703:22",
                                                                    "data-lov-name": "Users",
                                                                    "data-component-path": "src/pages/PageOverview.tsx",
                                                                    "data-component-line": "703",
                                                                    "data-component-file": "PageOverview.tsx",
                                                                    "data-component-name": "Users",
                                                                    "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%20mr-2%22%7D",
                                                                    className: "h-4 w-4 mr-2"
                                                                }, void 0, false, {
                                                                    fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                                                    lineNumber: 703,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "Actual Data to be Procured"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                                            lineNumber: 702,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("ul", {
                                                            "data-lov-id": "src/pages/PageOverview.tsx:706:20",
                                                            "data-lov-name": "ul",
                                                            "data-component-path": "src/pages/PageOverview.tsx",
                                                            "data-component-line": "706",
                                                            "data-component-file": "PageOverview.tsx",
                                                            "data-component-name": "ul",
                                                            "data-component-content": "%7B%22className%22%3A%22space-y-2%22%7D",
                                                            className: "space-y-2",
                                                            children: page.actualDataNeeded.map((item, idx)=>/*#__PURE__*/ _jsxDEV("li", {
                                                                    "data-lov-id": "src/pages/PageOverview.tsx:708:24",
                                                                    "data-lov-name": "li",
                                                                    "data-component-path": "src/pages/PageOverview.tsx",
                                                                    "data-component-line": "708",
                                                                    "data-component-file": "PageOverview.tsx",
                                                                    "data-component-name": "li",
                                                                    "data-component-content": "%7B%22className%22%3A%22text-sm%20text-gray-700%20pl-4%20border-l-2%20border-green-200%22%7D",
                                                                    className: "text-sm text-gray-700 pl-4 border-l-2 border-green-200",
                                                                    children: item
                                                                }, idx, false, {
                                                                    fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                                                    lineNumber: 708,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                                            lineNumber: 706,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                                    lineNumber: 701,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                            lineNumber: 684,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                        lineNumber: 683,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                lineNumber: 669,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                        lineNumber: 667,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV(Card, {
                        "data-lov-id": "src/pages/PageOverview.tsx:721:8",
                        "data-lov-name": "Card",
                        "data-component-path": "src/pages/PageOverview.tsx",
                        "data-component-line": "721",
                        "data-component-file": "PageOverview.tsx",
                        "data-component-name": "Card",
                        "data-component-content": "%7B%22className%22%3A%22mt-12%20bg-blue-50%20border-blue-200%22%7D",
                        className: "mt-12 bg-blue-50 border-blue-200",
                        children: [
                            /*#__PURE__*/ _jsxDEV(CardHeader, {
                                "data-lov-id": "src/pages/PageOverview.tsx:722:10",
                                "data-lov-name": "CardHeader",
                                "data-component-path": "src/pages/PageOverview.tsx",
                                "data-component-line": "722",
                                "data-component-file": "PageOverview.tsx",
                                "data-component-name": "CardHeader",
                                "data-component-content": "%7B%7D",
                                children: /*#__PURE__*/ _jsxDEV(CardTitle, {
                                    "data-lov-id": "src/pages/PageOverview.tsx:723:12",
                                    "data-lov-name": "CardTitle",
                                    "data-component-path": "src/pages/PageOverview.tsx",
                                    "data-component-line": "723",
                                    "data-component-file": "PageOverview.tsx",
                                    "data-component-name": "CardTitle",
                                    "data-component-content": "%7B%22text%22%3A%22Important%20Notes%20for%20Data%20Collection%22%2C%22className%22%3A%22text-blue-800%22%7D",
                                    className: "text-blue-800",
                                    children: "Important Notes for Data Collection"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                    lineNumber: 723,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                lineNumber: 722,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV(CardContent, {
                                "data-lov-id": "src/pages/PageOverview.tsx:725:10",
                                "data-lov-name": "CardContent",
                                "data-component-path": "src/pages/PageOverview.tsx",
                                "data-component-line": "725",
                                "data-component-file": "PageOverview.tsx",
                                "data-component-name": "CardContent",
                                "data-component-content": "%7B%7D",
                                children: /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/PageOverview.tsx:726:12",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/PageOverview.tsx",
                                    "data-component-line": "726",
                                    "data-component-file": "PageOverview.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-2%20gap-6%20text-sm%20text-blue-700%22%7D",
                                    className: "grid md:grid-cols-2 gap-6 text-sm text-blue-700",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/pages/PageOverview.tsx:727:14",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/pages/PageOverview.tsx",
                                            "data-component-line": "727",
                                            "data-component-file": "PageOverview.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%7D",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("h4", {
                                                    "data-lov-id": "src/pages/PageOverview.tsx:728:16",
                                                    "data-lov-name": "h4",
                                                    "data-component-path": "src/pages/PageOverview.tsx",
                                                    "data-component-line": "728",
                                                    "data-component-file": "PageOverview.tsx",
                                                    "data-component-name": "h4",
                                                    "data-component-content": "%7B%22text%22%3A%22Photo%20Requirements%3A%22%2C%22className%22%3A%22font-semibold%20mb-2%22%7D",
                                                    className: "font-semibold mb-2",
                                                    children: "Photo Requirements:"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                                    lineNumber: 728,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("ul", {
                                                    "data-lov-id": "src/pages/PageOverview.tsx:729:16",
                                                    "data-lov-name": "ul",
                                                    "data-component-path": "src/pages/PageOverview.tsx",
                                                    "data-component-line": "729",
                                                    "data-component-file": "PageOverview.tsx",
                                                    "data-component-name": "ul",
                                                    "data-component-content": "%7B%22className%22%3A%22space-y-1%20list-disc%20pl-5%22%7D",
                                                    className: "space-y-1 list-disc pl-5",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("li", {
                                                            "data-lov-id": "src/pages/PageOverview.tsx:730:18",
                                                            "data-lov-name": "li",
                                                            "data-component-path": "src/pages/PageOverview.tsx",
                                                            "data-component-line": "730",
                                                            "data-component-file": "PageOverview.tsx",
                                                            "data-component-name": "li",
                                                            "data-component-content": "%7B%22text%22%3A%22All%20photos%20should%20be%20high%20resolution%20(minimum%201920x1080)%22%7D",
                                                            children: "All photos should be high resolution (minimum 1920x1080)"
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                                            lineNumber: 730,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("li", {
                                                            "data-lov-id": "src/pages/PageOverview.tsx:731:18",
                                                            "data-lov-name": "li",
                                                            "data-component-path": "src/pages/PageOverview.tsx",
                                                            "data-component-line": "731",
                                                            "data-component-file": "PageOverview.tsx",
                                                            "data-component-name": "li",
                                                            "data-component-content": "%7B%22text%22%3A%22Student%20photos%20require%20written%20parental%20consent%22%7D",
                                                            children: "Student photos require written parental consent"
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                                            lineNumber: 731,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("li", {
                                                            "data-lov-id": "src/pages/PageOverview.tsx:732:18",
                                                            "data-lov-name": "li",
                                                            "data-component-path": "src/pages/PageOverview.tsx",
                                                            "data-component-line": "732",
                                                            "data-component-file": "PageOverview.tsx",
                                                            "data-component-name": "li",
                                                            "data-component-content": "%7B%22text%22%3A%22Faculty%20photos%20need%20individual%20permissions%22%7D",
                                                            children: "Faculty photos need individual permissions"
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                                            lineNumber: 732,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("li", {
                                                            "data-lov-id": "src/pages/PageOverview.tsx:733:18",
                                                            "data-lov-name": "li",
                                                            "data-component-path": "src/pages/PageOverview.tsx",
                                                            "data-component-line": "733",
                                                            "data-component-file": "PageOverview.tsx",
                                                            "data-component-name": "li",
                                                            "data-component-content": "%7B%22text%22%3A%22Maintain%20consistent%20lighting%20and%20style%20across%20campus%20photos%22%7D",
                                                            children: "Maintain consistent lighting and style across campus photos"
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                                            lineNumber: 733,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                                    lineNumber: 729,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                            lineNumber: 727,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/pages/PageOverview.tsx:736:14",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/pages/PageOverview.tsx",
                                            "data-component-line": "736",
                                            "data-component-file": "PageOverview.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%7D",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("h4", {
                                                    "data-lov-id": "src/pages/PageOverview.tsx:737:16",
                                                    "data-lov-name": "h4",
                                                    "data-component-path": "src/pages/PageOverview.tsx",
                                                    "data-component-line": "737",
                                                    "data-component-file": "PageOverview.tsx",
                                                    "data-component-name": "h4",
                                                    "data-component-content": "%7B%22text%22%3A%22Content%20Guidelines%3A%22%2C%22className%22%3A%22font-semibold%20mb-2%22%7D",
                                                    className: "font-semibold mb-2",
                                                    children: "Content Guidelines:"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                                    lineNumber: 737,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("ul", {
                                                    "data-lov-id": "src/pages/PageOverview.tsx:738:16",
                                                    "data-lov-name": "ul",
                                                    "data-component-path": "src/pages/PageOverview.tsx",
                                                    "data-component-line": "738",
                                                    "data-component-file": "PageOverview.tsx",
                                                    "data-component-name": "ul",
                                                    "data-component-content": "%7B%22className%22%3A%22space-y-1%20list-disc%20pl-5%22%7D",
                                                    className: "space-y-1 list-disc pl-5",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("li", {
                                                            "data-lov-id": "src/pages/PageOverview.tsx:739:18",
                                                            "data-lov-name": "li",
                                                            "data-component-path": "src/pages/PageOverview.tsx",
                                                            "data-component-line": "739",
                                                            "data-component-file": "PageOverview.tsx",
                                                            "data-component-name": "li",
                                                            "data-component-content": "%7B%22text%22%3A%22All%20content%20should%20be%20factual%20and%20verifiable%22%7D",
                                                            children: "All content should be factual and verifiable"
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                                            lineNumber: 739,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("li", {
                                                            "data-lov-id": "src/pages/PageOverview.tsx:740:18",
                                                            "data-lov-name": "li",
                                                            "data-component-path": "src/pages/PageOverview.tsx",
                                                            "data-component-line": "740",
                                                            "data-component-file": "PageOverview.tsx",
                                                            "data-component-name": "li",
                                                            "data-component-content": "%7B%22text%22%3A%22Maintain%20consistent%20tone%20and%20style%20across%20pages%22%7D",
                                                            children: "Maintain consistent tone and style across pages"
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                                            lineNumber: 740,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("li", {
                                                            "data-lov-id": "src/pages/PageOverview.tsx:741:18",
                                                            "data-lov-name": "li",
                                                            "data-component-path": "src/pages/PageOverview.tsx",
                                                            "data-component-line": "741",
                                                            "data-component-file": "PageOverview.tsx",
                                                            "data-component-name": "li",
                                                            "data-component-content": "%7B%22text%22%3A%22Ensure%20all%20contact%20information%20is%20current%20and%20verified%22%7D",
                                                            children: "Ensure all contact information is current and verified"
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                                            lineNumber: 741,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("li", {
                                                            "data-lov-id": "src/pages/PageOverview.tsx:742:18",
                                                            "data-lov-name": "li",
                                                            "data-component-path": "src/pages/PageOverview.tsx",
                                                            "data-component-line": "742",
                                                            "data-component-file": "PageOverview.tsx",
                                                            "data-component-name": "li",
                                                            "data-component-content": "%7B%22text%22%3A%22Include%20SEO-friendly%20descriptions%20for%20better%20visibility%22%7D",
                                                            children: "Include SEO-friendly descriptions for better visibility"
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                                            lineNumber: 742,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                                    lineNumber: 738,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                            lineNumber: 736,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                    lineNumber: 726,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                                lineNumber: 725,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                        lineNumber: 721,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
                lineNumber: 599,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/sjrsh916/public_html/src/pages/PageOverview.tsx",
        lineNumber: 592,
        columnNumber: 5
    }, this);
};
_s(PageOverview, "Im5wThrHhzmaALlaN3ftG1JjEyo=");
_c = PageOverview;
export default PageOverview;
var _c;
$RefreshReg$(_c, "PageOverview");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/pages/PageOverview.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/pages/PageOverview.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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O3NFQUNKLFFBQUNlOzREQUFDckIsZUFBQTs0REFBQUMsaUJBQUE7NERBQUFDLHVCQUFBOzREQUFBQyx1QkFBQTs0REFBQUMsdUJBQUE7NERBQUFDLHVCQUFBOzREQUFBQywwQkFBQTtzRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTdEI7R0EzdEJNbEQ7S0FBQUE7QUE2dEJOLGVBQWVBLGFBQVkiLCJuYW1lcyI6WyJMYXlvdXQiLCJQYWdlQmFubmVyIiwiQ2FyZCIsIkNhcmRIZWFkZXIiLCJDYXJkVGl0bGUiLCJDYXJkQ29udGVudCIsIkJhZGdlIiwiQnV0dG9uIiwiRG93bmxvYWQiLCJGaWxlVGV4dCIsIlVzZXJzIiwiSW1hZ2UiLCJDYWxlbmRhciIsIlN0YXIiLCJ1c2VTdGF0ZSIsImluZGlhblN0dWRlbnRzQWNoaWV2ZW1lbnRzIiwiUGFnZU92ZXJ2aWV3Iiwic2VsZWN0ZWRDYXRlZ29yeSIsInNldFNlbGVjdGVkQ2F0ZWdvcnkiLCJwYWdlQXVkaXRzIiwicGFnZU5hbWUiLCJjYXRlZ29yeSIsInJvdXRlIiwiZHVtbXlEYXRhIiwiYWN0dWFsRGF0YU5lZWRlZCIsInByaW9yaXR5IiwiZXN0aW1hdGVkSG91cnMiLCJjYXRlZ29yaWVzIiwiZmlsdGVyZWRQYWdlcyIsImZpbHRlciIsInBhZ2UiLCJ0b3RhbEVzdGltYXRlZEhvdXJzIiwicmVkdWNlIiwic3VtIiwiaGlnaFByaW9yaXR5UGFnZXMiLCJsZW5ndGgiLCJkb3dubG9hZEV4Y2VsRGF0YSIsImNzdkNvbnRlbnQiLCJtYXAiLCJqb2luIiwidG9TdHJpbmciLCJyb3ciLCJjZWxsIiwiYmxvYiIsIkJsb2IiLCJ0eXBlIiwibGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInNldEF0dHJpYnV0ZSIsInN0eWxlIiwidmlzaWJpbGl0eSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNsaWNrIiwicmVtb3ZlQ2hpbGQiLCJnZXRQcmlvcml0eUNvbG9yIiwiZGF0YS1sb3YtaWQiLCJkYXRhLWxvdi1uYW1lIiwiZGF0YS1jb21wb25lbnQtcGF0aCIsImRhdGEtY29tcG9uZW50LWxpbmUiLCJkYXRhLWNvbXBvbmVudC1maWxlIiwiZGF0YS1jb21wb25lbnQtbmFtZSIsImRhdGEtY29tcG9uZW50LWNvbnRlbnQiLCJ0aXRsZSIsInN1YnRpdGxlIiwiYmFja2dyb3VuZEltYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImgyIiwib25DbGljayIsInZhcmlhbnQiLCJpbmRleCIsImg0IiwidWwiLCJpdGVtIiwiaWR4IiwibGkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiUGFnZU92ZXJ2aWV3LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgUGFnZUJhbm5lciBmcm9tIFwiQC9jb21wb25lbnRzL1BhZ2VCYW5uZXJcIjtcbmltcG9ydCB7IENhcmQsIENhcmRIZWFkZXIsIENhcmRUaXRsZSwgQ2FyZENvbnRlbnQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcbmltcG9ydCB7IEJhZGdlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9iYWRnZVwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IERvd25sb2FkLCBGaWxlVGV4dCwgVXNlcnMsIEltYWdlLCBDYWxlbmRhciwgU3RhciwgTWFwUGluLCBQaG9uZSwgTWFpbCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgaW5kaWFuU3R1ZGVudHNBY2hpZXZlbWVudHMgZnJvbSBcIkAvYXNzZXRzL2luZGlhbi1zdHVkZW50cy1hY2hpZXZlbWVudHMuanBnXCI7XG5cbmludGVyZmFjZSBQYWdlQXVkaXQge1xuICBwYWdlTmFtZTogc3RyaW5nO1xuICBjYXRlZ29yeTogc3RyaW5nO1xuICByb3V0ZTogc3RyaW5nO1xuICBkdW1teURhdGE6IHN0cmluZ1tdO1xuICBhY3R1YWxEYXRhTmVlZGVkOiBzdHJpbmdbXTtcbiAgcHJpb3JpdHk6IFwiSGlnaFwiIHwgXCJNZWRpdW1cIiB8IFwiTG93XCI7XG4gIGVzdGltYXRlZEhvdXJzOiBudW1iZXI7XG59XG5cbmNvbnN0IFBhZ2VPdmVydmlldyA9ICgpID0+IHtcbiAgY29uc3QgW3NlbGVjdGVkQ2F0ZWdvcnksIHNldFNlbGVjdGVkQ2F0ZWdvcnldID0gdXNlU3RhdGU8c3RyaW5nPihcIkFsbFwiKTtcblxuICBjb25zdCBwYWdlQXVkaXRzOiBQYWdlQXVkaXRbXSA9IFtcbiAgICB7XG4gICAgICBwYWdlTmFtZTogXCJIb21lIFBhZ2VcIixcbiAgICAgIGNhdGVnb3J5OiBcIk1haW5cIixcbiAgICAgIHJvdXRlOiBcIi9cIixcbiAgICAgIGR1bW15RGF0YTogW1xuICAgICAgICBcIkhlcm8gYmFubmVyIGltYWdlcyBmcm9tIFVuc3BsYXNoIChjYW1wdXMvZWR1Y2F0aW9uIHN0b2NrIHBob3RvcylcIixcbiAgICAgICAgXCJTdGF0aXN0aWNzOiAnMjAwMCsgU3R1ZGVudHMsIDUwKyBDb3Vyc2VzLCAxNTArIEZhY3VsdHksIDEwMCsgQXdhcmRzJ1wiLFxuICAgICAgICBcIkdlbmVyaWMgZmFjdWx0eSBwaG90b3MgYW5kIG5hbWVzXCIsXG4gICAgICAgIFwiU2FtcGxlIHRlc3RpbW9uaWFscyB3aXRoIHBsYWNlaG9sZGVyIG5hbWVzXCIsXG4gICAgICAgIFwiU3RvY2sgcGhvdG9zIGZvciBmYWNpbGl0aWVzIHNlY3Rpb25cIixcbiAgICAgICAgXCJMb3JlbSBpcHN1bSBkZXNjcmlwdGlvbnMgaW4gdmFyaW91cyBzZWN0aW9uc1wiLFxuICAgICAgICBcIkdlbmVyaWMgbmV3cyBhbmQgZXZlbnRzIHdpdGggcGxhY2Vob2xkZXIgZGF0ZXNcIixcbiAgICAgICAgXCJQbGFjZWhvbGRlciBtYW5hZ2VtZW50IHRlYW0gcGhvdG9zXCJcbiAgICAgIF0sXG4gICAgICBhY3R1YWxEYXRhTmVlZGVkOiBbXG4gICAgICAgIFwiQWN0dWFsIFNKUlBTLUhCUiBjYW1wdXMgcGhvdG9zIGZvciBoZXJvIHNsaWRlclwiLFxuICAgICAgICBcIlJlYWwgc3R1ZGVudCBlbnJvbGxtZW50IG51bWJlcnMgYW5kIGFjY3VyYXRlIHN0YXRpc3RpY3NcIixcbiAgICAgICAgXCJBY3R1YWwgZmFjdWx0eSBwaG90b3MsIG5hbWVzLCBxdWFsaWZpY2F0aW9ucywgYW5kIGRlc2lnbmF0aW9uc1wiLFxuICAgICAgICBcIkdlbnVpbmUgc3R1ZGVudC9wYXJlbnQgdGVzdGltb25pYWxzIHdpdGggcGVybWlzc2lvbnNcIixcbiAgICAgICAgXCJSZWFsIGZhY2lsaXR5IHBob3RvcyBzaG93Y2FzaW5nIFNKUlBTLUhCUiBpbmZyYXN0cnVjdHVyZVwiLFxuICAgICAgICBcIkF1dGhlbnRpYyBzY2hvb2wgZGVzY3JpcHRpb25zIGFuZCB2YWx1ZSBwcm9wb3NpdGlvbnNcIixcbiAgICAgICAgXCJDdXJyZW50IG5ld3MgYXJ0aWNsZXMgYW5kIHVwY29taW5nIGV2ZW50c1wiLFxuICAgICAgICBcIlJlYWwgbWFuYWdlbWVudCB0ZWFtIHBob3RvcyBhbmQgcHJvZmlsZXNcIixcbiAgICAgICAgXCJTSlJQUy1IQlIgbG9nbyBhbmQgYnJhbmRpbmcgZWxlbWVudHNcIixcbiAgICAgICAgXCJDb250YWN0IGluZm9ybWF0aW9uIHZlcmlmaWNhdGlvblwiXG4gICAgICBdLFxuICAgICAgcHJpb3JpdHk6IFwiSGlnaFwiLFxuICAgICAgZXN0aW1hdGVkSG91cnM6IDQwXG4gICAgfSxcbiAgICB7XG4gICAgICBwYWdlTmFtZTogXCJBYm91dCBTSlJQUy1IQlIgT3ZlcnZpZXdcIixcbiAgICAgIGNhdGVnb3J5OiBcIkFib3V0XCIsXG4gICAgICByb3V0ZTogXCIvYWJvdXQvc2pyY1wiLFxuICAgICAgZHVtbXlEYXRhOiBbXG4gICAgICAgIFwiR2VuZXJpYyBzY2hvb2wgaGlzdG9yeSBuYXJyYXRpdmVcIixcbiAgICAgICAgXCJQbGFjZWhvbGRlciBtaWxlc3RvbmUgZGF0ZXNcIixcbiAgICAgICAgXCJTdG9jayBwaG90b3Mgb2Ygc2Nob29sIGNhbXB1c1wiLFxuICAgICAgICBcIkdlbmVyaWMgYWNoaWV2ZW1lbnQgbnVtYmVyc1wiLFxuICAgICAgICBcIlNhbXBsZSBhY2NyZWRpdGF0aW9uIGRldGFpbHNcIlxuICAgICAgXSxcbiAgICAgIGFjdHVhbERhdGFOZWVkZWQ6IFtcbiAgICAgICAgXCJTSlJQUy1IQlIncyBhY3R1YWwgZm91bmRpbmcgaGlzdG9yeSBhbmQgbWlsZXN0b25lc1wiLFxuICAgICAgICBcIlJlYWwgYWNoaWV2ZW1lbnQgZGF0YSBhbmQgc3RhdGlzdGljc1wiLFxuICAgICAgICBcIkFjdHVhbCBjYW1wdXMgcGhvdG9zIGFuZCBpbmZyYXN0cnVjdHVyZSBpbWFnZXNcIixcbiAgICAgICAgXCJOQUFDIGFjY3JlZGl0YXRpb24gZG9jdW1lbnRzIGFuZCBkZXRhaWxzXCIsXG4gICAgICAgIFwiU2Nob29sJ3MgdW5pcXVlIHNlbGxpbmcgcHJvcG9zaXRpb25zIGFuZCBkaWZmZXJlbnRpYXRvcnNcIlxuICAgICAgXSxcbiAgICAgIHByaW9yaXR5OiBcIkhpZ2hcIixcbiAgICAgIGVzdGltYXRlZEhvdXJzOiAyMFxuICAgIH0sXG4gICAge1xuICAgICAgcGFnZU5hbWU6IFwiVmlzaW9uICYgTWlzc2lvblwiLFxuICAgICAgY2F0ZWdvcnk6IFwiQWJvdXRcIixcbiAgICAgIHJvdXRlOiBcIi9hYm91dC92aXNpb24tbWlzc2lvblwiLFxuICAgICAgZHVtbXlEYXRhOiBbXG4gICAgICAgIFwiR2VuZXJpYyBlZHVjYXRpb25hbCB2aXNpb24gc3RhdGVtZW50c1wiLFxuICAgICAgICBcIlBsYWNlaG9sZGVyIG1pc3Npb24gY29udGVudFwiLFxuICAgICAgICBcIlN0b2NrIGltYWdlcnkgZm9yIHZpc2lvbiByZXByZXNlbnRhdGlvblwiXG4gICAgICBdLFxuICAgICAgYWN0dWFsRGF0YU5lZWRlZDogW1xuICAgICAgICBcIlNKUlBTLUhCUidzIG9mZmljaWFsIHZpc2lvbiBhbmQgbWlzc2lvbiBzdGF0ZW1lbnRzXCIsXG4gICAgICAgIFwiQ29yZSB2YWx1ZXMgYW5kIGVkdWNhdGlvbmFsIHBoaWxvc29waHlcIixcbiAgICAgICAgXCJTdHJhdGVnaWMgZ29hbHMgYW5kIG9iamVjdGl2ZXNcIixcbiAgICAgICAgXCJDdXN0b20gZ3JhcGhpY3MgcmVwcmVzZW50aW5nIHNjaG9vbCdzIHZpc2lvblwiXG4gICAgICBdLFxuICAgICAgcHJpb3JpdHk6IFwiSGlnaFwiLFxuICAgICAgZXN0aW1hdGVkSG91cnM6IDE1XG4gICAgfSxcbiAgICB7XG4gICAgICBwYWdlTmFtZTogXCJTZWNyZXRhcnkncyBNZXNzYWdlXCIsXG4gICAgICBjYXRlZ29yeTogXCJBYm91dFwiLFxuICAgICAgcm91dGU6IFwiL2Fib3V0L3NlY3JldGFyeS1tZXNzYWdlXCIsXG4gICAgICBkdW1teURhdGE6IFtcbiAgICAgICAgXCJQbGFjZWhvbGRlciBzZWNyZXRhcnkgcHJvZmlsZVwiLFxuICAgICAgICBcIkdlbmVyaWMgbWVzc2FnZSBjb250ZW50XCIsXG4gICAgICAgIFwiU3RvY2sgcHJvZmVzc2lvbmFsIHBob3RvXCJcbiAgICAgIF0sXG4gICAgICBhY3R1YWxEYXRhTmVlZGVkOiBbXG4gICAgICAgIFwiU2VjcmV0YXJ5J3MgYWN0dWFsIHBob3RvIGFuZCBwcm9mZXNzaW9uYWwgcHJvZmlsZVwiLFxuICAgICAgICBcIkF1dGhlbnRpYyBtZXNzYWdlIGZyb20gdGhlIHNlY3JldGFyeVwiLFxuICAgICAgICBcIkVkdWNhdGlvbmFsIGJhY2tncm91bmQgYW5kIGFjaGlldmVtZW50c1wiLFxuICAgICAgICBcIlNlY3JldGFyeSdzIHZpc2lvbiBmb3IgdGhlIHNjaG9vbFwiXG4gICAgICBdLFxuICAgICAgcHJpb3JpdHk6IFwiSGlnaFwiLFxuICAgICAgZXN0aW1hdGVkSG91cnM6IDhcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhZ2VOYW1lOiBcIlByaW5jaXBhbCdzIERlc2tcIixcbiAgICAgIGNhdGVnb3J5OiBcIkFib3V0XCIsXG4gICAgICByb3V0ZTogXCIvYWJvdXQvcHJpbmNpcGFsLW1lc3NhZ2VcIixcbiAgICAgIGR1bW15RGF0YTogW1xuICAgICAgICBcIlBsYWNlaG9sZGVyIHByaW5jaXBhbCBwcm9maWxlXCIsXG4gICAgICAgIFwiR2VuZXJpYyB3ZWxjb21lIG1lc3NhZ2VcIixcbiAgICAgICAgXCJTdG9jayBwcm9mZXNzaW9uYWwgcGhvdG9cIlxuICAgICAgXSxcbiAgICAgIGFjdHVhbERhdGFOZWVkZWQ6IFtcbiAgICAgICAgXCJQcmluY2lwYWwncyBhY3R1YWwgcGhvdG8gYW5kIGNyZWRlbnRpYWxzXCIsXG4gICAgICAgIFwiQXV0aGVudGljIHdlbGNvbWUgbWVzc2FnZSBhbmQgZWR1Y2F0aW9uYWwgcGhpbG9zb3BoeVwiLFxuICAgICAgICBcIlByaW5jaXBhbCdzIHF1YWxpZmljYXRpb25zIGFuZCBleHBlcmllbmNlXCIsXG4gICAgICAgIFwiUGVyc29uYWwgbWVzc2FnZSB0byBzdHVkZW50cyBhbmQgcGFyZW50c1wiXG4gICAgICBdLFxuICAgICAgcHJpb3JpdHk6IFwiSGlnaFwiLFxuICAgICAgZXN0aW1hdGVkSG91cnM6IDhcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhZ2VOYW1lOiBcIkNvcmUgVGVhbVwiLFxuICAgICAgY2F0ZWdvcnk6IFwiQWJvdXRcIixcbiAgICAgIHJvdXRlOiBcIi9hYm91dC9jb3JlLXRlYW1cIixcbiAgICAgIGR1bW15RGF0YTogW1xuICAgICAgICBcIlBsYWNlaG9sZGVyIHRlYW0gbWVtYmVyIHByb2ZpbGVzXCIsXG4gICAgICAgIFwiR2VuZXJpYyByb2xlIGRlc2NyaXB0aW9uc1wiLFxuICAgICAgICBcIlN0b2NrIHByb2Zlc3Npb25hbCBwaG90b3NcIlxuICAgICAgXSxcbiAgICAgIGFjdHVhbERhdGFOZWVkZWQ6IFtcbiAgICAgICAgXCJBY3R1YWwgY29yZSB0ZWFtIG1lbWJlciBwaG90b3NcIixcbiAgICAgICAgXCJSZWFsIG5hbWVzLCBkZXNpZ25hdGlvbnMsIGFuZCBxdWFsaWZpY2F0aW9uc1wiLFxuICAgICAgICBcIlRlYW0gbWVtYmVyIHJlc3BvbnNpYmlsaXRpZXMgYW5kIGV4cGVydGlzZVwiLFxuICAgICAgICBcIlByb2Zlc3Npb25hbCBiYWNrZ3JvdW5kcyBhbmQgYWNoaWV2ZW1lbnRzXCJcbiAgICAgIF0sXG4gICAgICBwcmlvcml0eTogXCJNZWRpdW1cIixcbiAgICAgIGVzdGltYXRlZEhvdXJzOiAxMlxuICAgIH0sXG4gICAge1xuICAgICAgcGFnZU5hbWU6IFwiQm9hcmQgb2YgTWVtYmVyc1wiLFxuICAgICAgY2F0ZWdvcnk6IFwiQWJvdXRcIixcbiAgICAgIHJvdXRlOiBcIi9hYm91dC9ib2FyZC1tZW1iZXJzXCIsXG4gICAgICBkdW1teURhdGE6IFtcbiAgICAgICAgXCJQbGFjZWhvbGRlciBib2FyZCBtZW1iZXIgcHJvZmlsZXNcIixcbiAgICAgICAgXCJHZW5lcmljIGV4cGVydGlzZSBkZXNjcmlwdGlvbnNcIixcbiAgICAgICAgXCJTdG9jayBwcm9mZXNzaW9uYWwgcGhvdG9zXCJcbiAgICAgIF0sXG4gICAgICBhY3R1YWxEYXRhTmVlZGVkOiBbXG4gICAgICAgIFwiQWN0dWFsIGJvYXJkIG1lbWJlciBwaG90b3MgYW5kIHByb2ZpbGVzXCIsXG4gICAgICAgIFwiUmVhbCBuYW1lcywgcG9zaXRpb25zLCBhbmQgcHJvZmVzc2lvbmFsIGJhY2tncm91bmRzXCIsXG4gICAgICAgIFwiQm9hcmQgbWVtYmVyIHF1YWxpZmljYXRpb25zIGFuZCBleHBlcnRpc2VcIixcbiAgICAgICAgXCJSb2xlcyBhbmQgcmVzcG9uc2liaWxpdGllcyB3aXRoaW4gdGhlIGJvYXJkXCJcbiAgICAgIF0sXG4gICAgICBwcmlvcml0eTogXCJNZWRpdW1cIixcbiAgICAgIGVzdGltYXRlZEhvdXJzOiAxNVxuICAgIH0sXG4gICAge1xuICAgICAgcGFnZU5hbWU6IFwiVGVhY2hlcnNcIixcbiAgICAgIGNhdGVnb3J5OiBcIkFib3V0XCIsXG4gICAgICByb3V0ZTogXCIvYWJvdXQvdGVhY2hlcnNcIixcbiAgICAgIGR1bW15RGF0YTogW1xuICAgICAgICBcIkdlbmVyaWMgdGVhY2hlciBwcm9maWxlc1wiLFxuICAgICAgICBcIlBsYWNlaG9sZGVyIHF1YWxpZmljYXRpb25zXCIsXG4gICAgICAgIFwiU3RvY2sgdGVhY2hlciBwaG90b3NcIlxuICAgICAgXSxcbiAgICAgIGFjdHVhbERhdGFOZWVkZWQ6IFtcbiAgICAgICAgXCJBY3R1YWwgdGVhY2hlciBwaG90b3Mgd2l0aCBwZXJtaXNzaW9uc1wiLFxuICAgICAgICBcIlJlYWwgbmFtZXMsIHN1YmplY3RzLCBhbmQgcXVhbGlmaWNhdGlvbnNcIixcbiAgICAgICAgXCJUZWFjaGluZyBleHBlcmllbmNlIGFuZCBzcGVjaWFsaXphdGlvbnNcIixcbiAgICAgICAgXCJUZWFjaGVyIGFjaGlldmVtZW50cyBhbmQgY2VydGlmaWNhdGlvbnNcIlxuICAgICAgXSxcbiAgICAgIHByaW9yaXR5OiBcIk1lZGl1bVwiLFxuICAgICAgZXN0aW1hdGVkSG91cnM6IDI1XG4gICAgfSxcbiAgICB7XG4gICAgICBwYWdlTmFtZTogXCJBZG1pc3Npb24gUHJvY2Vzc1wiLFxuICAgICAgY2F0ZWdvcnk6IFwiQWRtaXNzaW9uc1wiLFxuICAgICAgcm91dGU6IFwiL2FkbWlzc2lvbnMvYWRtaXNzaW9ucy1wcm9jZXNzXCIsXG4gICAgICBkdW1teURhdGE6IFtcbiAgICAgICAgXCJHZW5lcmljIGFkbWlzc2lvbiBzdGVwc1wiLFxuICAgICAgICBcIlBsYWNlaG9sZGVyIGZvcm1zIGFuZCBkb2N1bWVudHNcIixcbiAgICAgICAgXCJTYW1wbGUgZmVlIHN0cnVjdHVyZXNcIixcbiAgICAgICAgXCJHZW5lcmljIGVsaWdpYmlsaXR5IGNyaXRlcmlhXCJcbiAgICAgIF0sXG4gICAgICBhY3R1YWxEYXRhTmVlZGVkOiBbXG4gICAgICAgIFwiU0pSUFMtSEJSJ3MgYWN0dWFsIGFkbWlzc2lvbiBwcm9jZXNzIGFuZCB0aW1lbGluZVwiLFxuICAgICAgICBcIlJlYWwgYXBwbGljYXRpb24gZm9ybXMgYW5kIHJlcXVpcmVkIGRvY3VtZW50c1wiLFxuICAgICAgICBcIkN1cnJlbnQgZmVlIHN0cnVjdHVyZSBhbmQgcGF5bWVudCBtZXRob2RzXCIsXG4gICAgICAgIFwiU3BlY2lmaWMgZWxpZ2liaWxpdHkgY3JpdGVyaWEgZm9yIGVhY2ggZ3JhZGVcIixcbiAgICAgICAgXCJBZG1pc3Npb24gY29tbWl0dGVlIGRldGFpbHMgYW5kIGNvbnRhY3QgaW5mb3JtYXRpb25cIlxuICAgICAgXSxcbiAgICAgIHByaW9yaXR5OiBcIkhpZ2hcIixcbiAgICAgIGVzdGltYXRlZEhvdXJzOiAyMFxuICAgIH0sXG4gICAge1xuICAgICAgcGFnZU5hbWU6IFwiU2Nob29sIFBvbGljaWVzXCIsXG4gICAgICBjYXRlZ29yeTogXCJBZG1pc3Npb25zXCIsXG4gICAgICByb3V0ZTogXCIvYWRtaXNzaW9ucy9zY2hvb2wtcG9saWNpZXNcIixcbiAgICAgIGR1bW15RGF0YTogW1xuICAgICAgICBcIkdlbmVyaWMgc2Nob29sIHBvbGljaWVzXCIsXG4gICAgICAgIFwiUGxhY2Vob2xkZXIgcnVsZXMgYW5kIHJlZ3VsYXRpb25zXCIsXG4gICAgICAgIFwiU2FtcGxlIGRpc2NpcGxpbmFyeSBndWlkZWxpbmVzXCJcbiAgICAgIF0sXG4gICAgICBhY3R1YWxEYXRhTmVlZGVkOiBbXG4gICAgICAgIFwiU0pSUFMtSEJSJ3Mgb2ZmaWNpYWwgc2Nob29sIHBvbGljaWVzIGFuZCBoYW5kYm9va1wiLFxuICAgICAgICBcIkRpc2NpcGxpbmUgYW5kIGNvbmR1Y3QgcG9saWNpZXNcIixcbiAgICAgICAgXCJBY2FkZW1pYyBwb2xpY2llcyBhbmQgZ3JhZGluZyBzeXN0ZW1cIixcbiAgICAgICAgXCJTYWZldHkgYW5kIHNlY3VyaXR5IHByb3RvY29sc1wiXG4gICAgICBdLFxuICAgICAgcHJpb3JpdHk6IFwiSGlnaFwiLFxuICAgICAgZXN0aW1hdGVkSG91cnM6IDE4XG4gICAgfSxcbiAgICB7XG4gICAgICBwYWdlTmFtZTogXCJGZWUgU3RydWN0dXJlXCIsXG4gICAgICBjYXRlZ29yeTogXCJBZG1pc3Npb25zXCIsXG4gICAgICByb3V0ZTogXCIvYWRtaXNzaW9ucy9mZWVzLXN0cnVjdHVyZVwiLFxuICAgICAgZHVtbXlEYXRhOiBbXG4gICAgICAgIFwiU2FtcGxlIGZlZSBhbW91bnRzXCIsXG4gICAgICAgIFwiR2VuZXJpYyBwYXltZW50IHBsYW5zXCIsXG4gICAgICAgIFwiUGxhY2Vob2xkZXIgYWRkaXRpb25hbCBjaGFyZ2VzXCJcbiAgICAgIF0sXG4gICAgICBhY3R1YWxEYXRhTmVlZGVkOiBbXG4gICAgICAgIFwiQ3VycmVudCBhY2FkZW1pYyB5ZWFyIGZlZSBzdHJ1Y3R1cmVcIixcbiAgICAgICAgXCJQYXltZW50IHNjaGVkdWxlcyBhbmQgbWV0aG9kc1wiLFxuICAgICAgICBcIkFkZGl0aW9uYWwgY2hhcmdlcyBhbmQgb3B0aW9uYWwgZmVlc1wiLFxuICAgICAgICBcIkZlZSByZXZpc2lvbiBwb2xpY2llcyBhbmQgcHJvY2VkdXJlc1wiXG4gICAgICBdLFxuICAgICAgcHJpb3JpdHk6IFwiSGlnaFwiLFxuICAgICAgZXN0aW1hdGVkSG91cnM6IDEwXG4gICAgfSxcbiAgICB7XG4gICAgICBwYWdlTmFtZTogXCJTY2hvbGFyc2hpcCBQcm9ncmFtc1wiLFxuICAgICAgY2F0ZWdvcnk6IFwiQWRtaXNzaW9uc1wiLFxuICAgICAgcm91dGU6IFwiL2FkbWlzc2lvbnMvc2Nob2xhcnNoaXBcIixcbiAgICAgIGR1bW15RGF0YTogW1xuICAgICAgICBcIkdlbmVyaWMgc2Nob2xhcnNoaXAgY3JpdGVyaWFcIixcbiAgICAgICAgXCJQbGFjZWhvbGRlciBhd2FyZCBhbW91bnRzXCIsXG4gICAgICAgIFwiU2FtcGxlIGFwcGxpY2F0aW9uIHByb2Nlc3NcIlxuICAgICAgXSxcbiAgICAgIGFjdHVhbERhdGFOZWVkZWQ6IFtcbiAgICAgICAgXCJBY3R1YWwgc2Nob2xhcnNoaXAgcHJvZ3JhbXMgYW5kIGNyaXRlcmlhXCIsXG4gICAgICAgIFwiUmVhbCBhd2FyZCBhbW91bnRzIGFuZCBiZW5lZml0c1wiLFxuICAgICAgICBcIkFwcGxpY2F0aW9uIHByb2Nlc3MgYW5kIGRlYWRsaW5lc1wiLFxuICAgICAgICBcIlN1Y2Nlc3Mgc3RvcmllcyBvZiBzY2hvbGFyc2hpcCByZWNpcGllbnRzXCJcbiAgICAgIF0sXG4gICAgICBwcmlvcml0eTogXCJNZWRpdW1cIixcbiAgICAgIGVzdGltYXRlZEhvdXJzOiAxMlxuICAgIH0sXG4gICAge1xuICAgICAgcGFnZU5hbWU6IFwiUHJpbWFyeSBTY2hvb2xcIixcbiAgICAgIGNhdGVnb3J5OiBcIkFjYWRlbWljc1wiLFxuICAgICAgcm91dGU6IFwiL2FjYWRlbWljcy9wcmltYXJ5XCIsXG4gICAgICBkdW1teURhdGE6IFtcbiAgICAgICAgXCJHZW5lcmljIGN1cnJpY3VsdW0gZGVzY3JpcHRpb25cIixcbiAgICAgICAgXCJTYW1wbGUgc3ViamVjdCBsaXN0aW5nc1wiLFxuICAgICAgICBcIlBsYWNlaG9sZGVyIHRlYWNoaW5nIG1ldGhvZG9sb2dpZXNcIlxuICAgICAgXSxcbiAgICAgIGFjdHVhbERhdGFOZWVkZWQ6IFtcbiAgICAgICAgXCJTSlJQUy1IQlIncyBwcmltYXJ5IGN1cnJpY3VsdW0gZnJhbWV3b3JrXCIsXG4gICAgICAgIFwiU3ViamVjdC13aXNlIHN5bGxhYmkgYW5kIGxlYXJuaW5nIG91dGNvbWVzXCIsXG4gICAgICAgIFwiVGVhY2hpbmcgbWV0aG9kb2xvZ2llcyBhbmQgYXNzZXNzbWVudCBwYXR0ZXJuc1wiLFxuICAgICAgICBcIlByaW1hcnkgc2VjdGlvbiBmYWN1bHR5IGFuZCBmYWNpbGl0aWVzXCJcbiAgICAgIF0sXG4gICAgICBwcmlvcml0eTogXCJNZWRpdW1cIixcbiAgICAgIGVzdGltYXRlZEhvdXJzOiAxNVxuICAgIH0sXG4gICAge1xuICAgICAgcGFnZU5hbWU6IFwiU2Vjb25kYXJ5IFNjaG9vbFwiLFxuICAgICAgY2F0ZWdvcnk6IFwiQWNhZGVtaWNzXCIsXG4gICAgICByb3V0ZTogXCIvYWNhZGVtaWNzL3NlY29uZGFyeVwiLFxuICAgICAgZHVtbXlEYXRhOiBbXG4gICAgICAgIFwiR2VuZXJpYyBjdXJyaWN1bHVtIG92ZXJ2aWV3XCIsXG4gICAgICAgIFwiU2FtcGxlIHN1YmplY3QgY29tYmluYXRpb25zXCIsXG4gICAgICAgIFwiUGxhY2Vob2xkZXIgZXhhbSBwYXR0ZXJuc1wiXG4gICAgICBdLFxuICAgICAgYWN0dWFsRGF0YU5lZWRlZDogW1xuICAgICAgICBcIlNlY29uZGFyeSBjdXJyaWN1bHVtIGFuZCBzdWJqZWN0IGNvbWJpbmF0aW9uc1wiLFxuICAgICAgICBcIkJvYXJkIGV4YW1pbmF0aW9uIHByZXBhcmF0aW9uIG1ldGhvZHNcIixcbiAgICAgICAgXCJTdWJqZWN0LXdpc2UgZmFjdWx0eSBleHBlcnRpc2VcIixcbiAgICAgICAgXCJBY2FkZW1pYyBzdXBwb3J0IHByb2dyYW1zXCJcbiAgICAgIF0sXG4gICAgICBwcmlvcml0eTogXCJNZWRpdW1cIixcbiAgICAgIGVzdGltYXRlZEhvdXJzOiAxNVxuICAgIH0sXG4gICAge1xuICAgICAgcGFnZU5hbWU6IFwiSGlnaGVyIFNlY29uZGFyeVwiLFxuICAgICAgY2F0ZWdvcnk6IFwiQWNhZGVtaWNzXCIsXG4gICAgICByb3V0ZTogXCIvYWNhZGVtaWNzL2hpZ2hlci1zZWNvbmRhcnlcIixcbiAgICAgIGR1bW15RGF0YTogW1xuICAgICAgICBcIkdlbmVyaWMgc3RyZWFtIGRlc2NyaXB0aW9uc1wiLFxuICAgICAgICBcIlNhbXBsZSBjYXJlZXIgZ3VpZGFuY2VcIixcbiAgICAgICAgXCJQbGFjZWhvbGRlciBjb2xsZWdlIHByZXBhcmF0aW9uXCJcbiAgICAgIF0sXG4gICAgICBhY3R1YWxEYXRhTmVlZGVkOiBbXG4gICAgICAgIFwiQXZhaWxhYmxlIHN0cmVhbXMgYW5kIHN1YmplY3QgY29tYmluYXRpb25zXCIsXG4gICAgICAgIFwiQ2FyZWVyIGNvdW5zZWxpbmcgYW5kIGd1aWRhbmNlIHByb2dyYW1zXCIsXG4gICAgICAgIFwiQ29sbGVnZSBwcmVwYXJhdGlvbiBhbmQgZW50cmFuY2UgZXhhbSBjb2FjaGluZ1wiLFxuICAgICAgICBcIkFsdW1uaSBzdWNjZXNzIHN0b3JpZXMgYW5kIGNvbGxlZ2UgcGxhY2VtZW50c1wiXG4gICAgICBdLFxuICAgICAgcHJpb3JpdHk6IFwiTWVkaXVtXCIsXG4gICAgICBlc3RpbWF0ZWRIb3VyczogMTVcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhZ2VOYW1lOiBcIkNhbGVuZGFyIG9mIEV2ZW50c1wiLFxuICAgICAgY2F0ZWdvcnk6IFwiQWNhZGVtaWNzXCIsXG4gICAgICByb3V0ZTogXCIvYWNhZGVtaWNzL2NhbGVuZGFyXCIsXG4gICAgICBkdW1teURhdGE6IFtcbiAgICAgICAgXCJTYW1wbGUgYWNhZGVtaWMgY2FsZW5kYXJcIixcbiAgICAgICAgXCJQbGFjZWhvbGRlciBldmVudCBkYXRlc1wiLFxuICAgICAgICBcIkdlbmVyaWMgZXZlbnQgZGVzY3JpcHRpb25zXCJcbiAgICAgIF0sXG4gICAgICBhY3R1YWxEYXRhTmVlZGVkOiBbXG4gICAgICAgIFwiQ3VycmVudCBhY2FkZW1pYyB5ZWFyIGNhbGVuZGFyXCIsXG4gICAgICAgIFwiUmVhbCBldmVudCBkYXRlcyBhbmQgZGVzY3JpcHRpb25zXCIsXG4gICAgICAgIFwiRXhhbWluYXRpb24gc2NoZWR1bGVzIGFuZCBob2xpZGF5IGxpc3RzXCIsXG4gICAgICAgIFwiRXh0cmFjdXJyaWN1bGFyIGFjdGl2aXR5IGNhbGVuZGFyXCJcbiAgICAgIF0sXG4gICAgICBwcmlvcml0eTogXCJIaWdoXCIsXG4gICAgICBlc3RpbWF0ZWRIb3VyczogMTJcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhZ2VOYW1lOiBcIkFjaGlldmVtZW50c1wiLFxuICAgICAgY2F0ZWdvcnk6IFwiQWNhZGVtaWNzXCIsXG4gICAgICByb3V0ZTogXCIvYWNhZGVtaWNzL2FjaGlldmVtZW50c1wiLFxuICAgICAgZHVtbXlEYXRhOiBbXG4gICAgICAgIFwiR2VuZXJpYyBhY2hpZXZlbWVudCBsaXN0aW5nc1wiLFxuICAgICAgICBcIlBsYWNlaG9sZGVyIGF3YXJkIGRldGFpbHNcIixcbiAgICAgICAgXCJTYW1wbGUgY29tcGV0aXRpb24gcmVzdWx0c1wiXG4gICAgICBdLFxuICAgICAgYWN0dWFsRGF0YU5lZWRlZDogW1xuICAgICAgICBcIkFjdHVhbCBzdHVkZW50IGFjaGlldmVtZW50cyBhbmQgYXdhcmRzXCIsXG4gICAgICAgIFwiQ29tcGV0aXRpb24gcmVzdWx0cyBhbmQgcmFua2luZ3NcIixcbiAgICAgICAgXCJBY2FkZW1pYyB0b3BwZXJzIGFuZCBtZXJpdCBsaXN0c1wiLFxuICAgICAgICBcIlBob3RvcyBmcm9tIGF3YXJkIGNlcmVtb25pZXNcIlxuICAgICAgXSxcbiAgICAgIHByaW9yaXR5OiBcIk1lZGl1bVwiLFxuICAgICAgZXN0aW1hdGVkSG91cnM6IDE4XG4gICAgfSxcbiAgICB7XG4gICAgICBwYWdlTmFtZTogXCJGYWNpbGl0aWVzIE92ZXJ2aWV3XCIsXG4gICAgICBjYXRlZ29yeTogXCJGYWNpbGl0aWVzXCIsXG4gICAgICByb3V0ZTogXCIvY2FtcHVzL2ZhY2lsaXRpZXNcIixcbiAgICAgIGR1bW15RGF0YTogW1xuICAgICAgICBcIlN0b2NrIGZhY2lsaXR5IHBob3Rvc1wiLFxuICAgICAgICBcIkdlbmVyaWMgZmFjaWxpdHkgZGVzY3JpcHRpb25zXCIsXG4gICAgICAgIFwiUGxhY2Vob2xkZXIgY2FwYWNpdHkgZGV0YWlsc1wiXG4gICAgICBdLFxuICAgICAgYWN0dWFsRGF0YU5lZWRlZDogW1xuICAgICAgICBcIkFjdHVhbCBTSlJQUy1IQlIgZmFjaWxpdHkgcGhvdG9zXCIsXG4gICAgICAgIFwiUmVhbCBmYWNpbGl0eSBzcGVjaWZpY2F0aW9ucyBhbmQgY2FwYWNpdGllc1wiLFxuICAgICAgICBcIkVxdWlwbWVudCBhbmQgcmVzb3VyY2UgZGV0YWlsc1wiLFxuICAgICAgICBcIkZhY2lsaXR5IHVzYWdlIHNjaGVkdWxlcyBhbmQgYm9va2luZyBwcm9jZWR1cmVzXCJcbiAgICAgIF0sXG4gICAgICBwcmlvcml0eTogXCJNZWRpdW1cIixcbiAgICAgIGVzdGltYXRlZEhvdXJzOiAyMFxuICAgIH0sXG4gICAge1xuICAgICAgcGFnZU5hbWU6IFwiTW9kZXJuIENsYXNzcm9vbXNcIixcbiAgICAgIGNhdGVnb3J5OiBcIkZhY2lsaXRpZXNcIixcbiAgICAgIHJvdXRlOiBcIi9mYWNpbGl0aWVzL2NsYXNzcm9vbXNcIixcbiAgICAgIGR1bW15RGF0YTogW1xuICAgICAgICBcIlN0b2NrIGNsYXNzcm9vbSBwaG90b3NcIixcbiAgICAgICAgXCJHZW5lcmljIHRlY2hub2xvZ3kgZGVzY3JpcHRpb25zXCIsXG4gICAgICAgIFwiUGxhY2Vob2xkZXIgY2FwYWNpdHkgbnVtYmVyc1wiXG4gICAgICBdLFxuICAgICAgYWN0dWFsRGF0YU5lZWRlZDogW1xuICAgICAgICBcIkFjdHVhbCBTSlJQUy1IQlIgY2xhc3Nyb29tIHBob3Rvc1wiLFxuICAgICAgICBcIlRlY2hub2xvZ3kgYW5kIGVxdWlwbWVudCBzcGVjaWZpY2F0aW9uc1wiLFxuICAgICAgICBcIkNsYXNzcm9vbSBjYXBhY2l0eSBhbmQgYXJyYW5nZW1lbnQgZGV0YWlsc1wiLFxuICAgICAgICBcIlNtYXJ0IGJvYXJkIGFuZCBBViBlcXVpcG1lbnQgaW5mb3JtYXRpb25cIlxuICAgICAgXSxcbiAgICAgIHByaW9yaXR5OiBcIk1lZGl1bVwiLFxuICAgICAgZXN0aW1hdGVkSG91cnM6IDhcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhZ2VOYW1lOiBcIkxpYnJhcnkgJiBSZWFkaW5nIENvcm5lclwiLFxuICAgICAgY2F0ZWdvcnk6IFwiRmFjaWxpdGllc1wiLFxuICAgICAgcm91dGU6IFwiL2ZhY2lsaXRpZXMvbGlicmFyeVwiLFxuICAgICAgZHVtbXlEYXRhOiBbXG4gICAgICAgIFwiU3RvY2sgbGlicmFyeSBwaG90b3NcIixcbiAgICAgICAgXCJHZW5lcmljIGJvb2sgY29sbGVjdGlvbiBudW1iZXJzXCIsXG4gICAgICAgIFwiUGxhY2Vob2xkZXIgZGlnaXRhbCByZXNvdXJjZXNcIlxuICAgICAgXSxcbiAgICAgIGFjdHVhbERhdGFOZWVkZWQ6IFtcbiAgICAgICAgXCJBY3R1YWwgU0pSUFMtSEJSIGxpYnJhcnkgcGhvdG9zXCIsXG4gICAgICAgIFwiUmVhbCBib29rIGNvbGxlY3Rpb24gY291bnQgYW5kIGNhdGVnb3JpZXNcIixcbiAgICAgICAgXCJEaWdpdGFsIHJlc291cmNlcyBhbmQgZS1saWJyYXJ5IGFjY2Vzc1wiLFxuICAgICAgICBcIkxpYnJhcnkgdGltaW5ncyBhbmQgYm9ycm93aW5nIHBvbGljaWVzXCJcbiAgICAgIF0sXG4gICAgICBwcmlvcml0eTogXCJNZWRpdW1cIixcbiAgICAgIGVzdGltYXRlZEhvdXJzOiAxMFxuICAgIH0sXG4gICAge1xuICAgICAgcGFnZU5hbWU6IFwiU2NpZW5jZSAmIElubm92YXRpb24gTGFic1wiLFxuICAgICAgY2F0ZWdvcnk6IFwiRmFjaWxpdGllc1wiLFxuICAgICAgcm91dGU6IFwiL2ZhY2lsaXRpZXMvbGFib3JhdG9yaWVzXCIsXG4gICAgICBkdW1teURhdGE6IFtcbiAgICAgICAgXCJTdG9jayBsYWJvcmF0b3J5IHBob3Rvc1wiLFxuICAgICAgICBcIkdlbmVyaWMgZXF1aXBtZW50IGxpc3RpbmdzXCIsXG4gICAgICAgIFwiUGxhY2Vob2xkZXIgc2FmZXR5IHByb3RvY29sc1wiXG4gICAgICBdLFxuICAgICAgYWN0dWFsRGF0YU5lZWRlZDogW1xuICAgICAgICBcIkFjdHVhbCBTSlJQUy1IQlIgbGFib3JhdG9yeSBwaG90b3NcIixcbiAgICAgICAgXCJSZWFsIGVxdWlwbWVudCBhbmQgYXBwYXJhdHVzIGRldGFpbHNcIixcbiAgICAgICAgXCJTYWZldHkgcHJvdG9jb2xzIGFuZCBwcm9jZWR1cmVzXCIsXG4gICAgICAgIFwiTGFiIHNjaGVkdWxlcyBhbmQgdXNhZ2UgZ3VpZGVsaW5lc1wiXG4gICAgICBdLFxuICAgICAgcHJpb3JpdHk6IFwiTWVkaXVtXCIsXG4gICAgICBlc3RpbWF0ZWRIb3VyczogMTJcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhZ2VOYW1lOiBcIlRyYW5zcG9ydGF0aW9uXCIsXG4gICAgICBjYXRlZ29yeTogXCJGYWNpbGl0aWVzXCIsXG4gICAgICByb3V0ZTogXCIvZmFjaWxpdGllcy90cmFuc3BvcnRhdGlvblwiLFxuICAgICAgZHVtbXlEYXRhOiBbXG4gICAgICAgIFwiR2VuZXJpYyBidXMgcm91dGUgaW5mb3JtYXRpb25cIixcbiAgICAgICAgXCJQbGFjZWhvbGRlciBzYWZldHkgbWVhc3VyZXNcIixcbiAgICAgICAgXCJTYW1wbGUgZmVlIHN0cnVjdHVyZXNcIlxuICAgICAgXSxcbiAgICAgIGFjdHVhbERhdGFOZWVkZWQ6IFtcbiAgICAgICAgXCJBY3R1YWwgYnVzIHJvdXRlcyBhbmQgc3RvcHNcIixcbiAgICAgICAgXCJUcmFuc3BvcnRhdGlvbiBmZWUgc3RydWN0dXJlXCIsXG4gICAgICAgIFwiU2FmZXR5IG1lYXN1cmVzIGFuZCB0cmFja2luZyBzeXN0ZW1zXCIsXG4gICAgICAgIFwiRHJpdmVyIGRldGFpbHMgYW5kIGNvbnRhY3QgaW5mb3JtYXRpb25cIlxuICAgICAgXSxcbiAgICAgIHByaW9yaXR5OiBcIk1lZGl1bVwiLFxuICAgICAgZXN0aW1hdGVkSG91cnM6IDEwXG4gICAgfSxcbiAgICB7XG4gICAgICBwYWdlTmFtZTogXCJTcG9ydHMgJiBBY3Rpdml0aWVzXCIsXG4gICAgICBjYXRlZ29yeTogXCJDYW1wdXMgTGlmZVwiLFxuICAgICAgcm91dGU6IFwiL2NhbXB1cy9zcG9ydHNcIixcbiAgICAgIGR1bW15RGF0YTogW1xuICAgICAgICBcIkdlbmVyaWMgc3BvcnRzIGZhY2lsaXR5IGRlc2NyaXB0aW9uc1wiLFxuICAgICAgICBcIlBsYWNlaG9sZGVyIGNvYWNoaW5nIHN0YWZmXCIsXG4gICAgICAgIFwiU2FtcGxlIGFjaGlldmVtZW50IHJlY29yZHNcIlxuICAgICAgXSxcbiAgICAgIGFjdHVhbERhdGFOZWVkZWQ6IFtcbiAgICAgICAgXCJBY3R1YWwgc3BvcnRzIGZhY2lsaXRpZXMgYW5kIGVxdWlwbWVudFwiLFxuICAgICAgICBcIlJlYWwgY29hY2hpbmcgc3RhZmYgcHJvZmlsZXMgYW5kIHF1YWxpZmljYXRpb25zXCIsXG4gICAgICAgIFwiU3BvcnRzIGFjaGlldmVtZW50IHJlY29yZHMgYW5kIHRyb3BoaWVzXCIsXG4gICAgICAgIFwiU3BvcnRzIGNhbGVuZGFyIGFuZCB0cmFpbmluZyBzY2hlZHVsZXNcIlxuICAgICAgXSxcbiAgICAgIHByaW9yaXR5OiBcIk1lZGl1bVwiLFxuICAgICAgZXN0aW1hdGVkSG91cnM6IDE1XG4gICAgfSxcbiAgICB7XG4gICAgICBwYWdlTmFtZTogXCJDbHVicyAmIEFjdGl2aXRpZXNcIixcbiAgICAgIGNhdGVnb3J5OiBcIkNhbXB1cyBMaWZlXCIsXG4gICAgICByb3V0ZTogXCIvY2FtcHVzL2NsdWJzXCIsXG4gICAgICBkdW1teURhdGE6IFtcbiAgICAgICAgXCJHZW5lcmljIGNsdWIgZGVzY3JpcHRpb25zXCIsXG4gICAgICAgIFwiUGxhY2Vob2xkZXIgYWN0aXZpdHkgc2NoZWR1bGVzXCIsXG4gICAgICAgIFwiU2FtcGxlIGNsdWIgYWNoaWV2ZW1lbnRzXCJcbiAgICAgIF0sXG4gICAgICBhY3R1YWxEYXRhTmVlZGVkOiBbXG4gICAgICAgIFwiQWN0aXZlIGNsdWJzIGFuZCB0aGVpciBhY3Rpdml0aWVzXCIsXG4gICAgICAgIFwiQ2x1YiBjb29yZGluYXRvcnMgYW5kIG1lZXRpbmcgc2NoZWR1bGVzXCIsXG4gICAgICAgIFwiQ2x1YiBhY2hpZXZlbWVudHMgYW5kIGNvbXBldGl0aW9uc1wiLFxuICAgICAgICBcIlN0dWRlbnQgcGFydGljaXBhdGlvbiBhbmQgc3VjY2VzcyBzdG9yaWVzXCJcbiAgICAgIF0sXG4gICAgICBwcmlvcml0eTogXCJMb3dcIixcbiAgICAgIGVzdGltYXRlZEhvdXJzOiAxMlxuICAgIH0sXG4gICAge1xuICAgICAgcGFnZU5hbWU6IFwiRmFjdWx0eSBQcm9maWxlc1wiLFxuICAgICAgY2F0ZWdvcnk6IFwiRmFjdWx0eVwiLFxuICAgICAgcm91dGU6IFwiL2ZhY3VsdHlcIixcbiAgICAgIGR1bW15RGF0YTogW1xuICAgICAgICBcIkdlbmVyaWMgZmFjdWx0eSBwaG90b3NcIixcbiAgICAgICAgXCJQbGFjZWhvbGRlciBxdWFsaWZpY2F0aW9uc1wiLFxuICAgICAgICBcIlNhbXBsZSBleHBlcmllbmNlIGRldGFpbHNcIlxuICAgICAgXSxcbiAgICAgIGFjdHVhbERhdGFOZWVkZWQ6IFtcbiAgICAgICAgXCJBY3R1YWwgZmFjdWx0eSBwaG90b3Mgd2l0aCBwZXJtaXNzaW9uc1wiLFxuICAgICAgICBcIlJlYWwgcXVhbGlmaWNhdGlvbnMgYW5kIGNlcnRpZmljYXRpb25zXCIsXG4gICAgICAgIFwiVGVhY2hpbmcgZXhwZXJpZW5jZSBhbmQgc3BlY2lhbGl6YXRpb25zXCIsXG4gICAgICAgIFwiRmFjdWx0eSBhY2hpZXZlbWVudHMgYW5kIHB1YmxpY2F0aW9uc1wiXG4gICAgICBdLFxuICAgICAgcHJpb3JpdHk6IFwiTWVkaXVtXCIsXG4gICAgICBlc3RpbWF0ZWRIb3VyczogMzBcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhZ2VOYW1lOiBcIlBob3RvIEdhbGxlcnlcIixcbiAgICAgIGNhdGVnb3J5OiBcIkdhbGxlcnlcIixcbiAgICAgIHJvdXRlOiBcIi9nYWxsZXJ5L3Bob3Rvc1wiLFxuICAgICAgZHVtbXlEYXRhOiBbXG4gICAgICAgIFwiU3RvY2sgc2Nob29sIHBob3Rvc1wiLFxuICAgICAgICBcIkdlbmVyaWMgZXZlbnQgaW1hZ2VzXCIsXG4gICAgICAgIFwiUGxhY2Vob2xkZXIgYWN0aXZpdHkgcGhvdG9zXCJcbiAgICAgIF0sXG4gICAgICBhY3R1YWxEYXRhTmVlZGVkOiBbXG4gICAgICAgIFwiQWN0dWFsIFNKUlBTLUhCUiBldmVudCBwaG90b3NcIixcbiAgICAgICAgXCJTdHVkZW50IGFjdGl2aXR5IGFuZCBhY2hpZXZlbWVudCBwaG90b3NcIixcbiAgICAgICAgXCJDYW1wdXMgbGlmZSBhbmQgZmFjaWxpdHkgaW1hZ2VzXCIsXG4gICAgICAgIFwiUGVybWlzc2lvbiBmb3JtcyBmb3Igc3R1ZGVudCBwaG90b3NcIlxuICAgICAgXSxcbiAgICAgIHByaW9yaXR5OiBcIk1lZGl1bVwiLFxuICAgICAgZXN0aW1hdGVkSG91cnM6IDIwXG4gICAgfSxcbiAgICB7XG4gICAgICBwYWdlTmFtZTogXCJWaWRlbyBHYWxsZXJ5XCIsXG4gICAgICBjYXRlZ29yeTogXCJHYWxsZXJ5XCIsXG4gICAgICByb3V0ZTogXCIvZ2FsbGVyeS92aWRlb3NcIixcbiAgICAgIGR1bW15RGF0YTogW1xuICAgICAgICBcIlBsYWNlaG9sZGVyIHZpZGVvIHRodW1ibmFpbHNcIixcbiAgICAgICAgXCJHZW5lcmljIHZpZGVvIGRlc2NyaXB0aW9uc1wiLFxuICAgICAgICBcIlNhbXBsZSBwcm9tb3Rpb25hbCBjb250ZW50XCJcbiAgICAgIF0sXG4gICAgICBhY3R1YWxEYXRhTmVlZGVkOiBbXG4gICAgICAgIFwiQWN0dWFsIHNjaG9vbCBwcm9tb3Rpb25hbCB2aWRlb3NcIixcbiAgICAgICAgXCJFdmVudCByZWNvcmRpbmdzIGFuZCBoaWdobGlnaHRzXCIsXG4gICAgICAgIFwiU3R1ZGVudCB0ZXN0aW1vbmlhbCB2aWRlb3NcIixcbiAgICAgICAgXCJWaXJ0dWFsIGNhbXB1cyB0b3VyIHZpZGVvc1wiXG4gICAgICBdLFxuICAgICAgcHJpb3JpdHk6IFwiTG93XCIsXG4gICAgICBlc3RpbWF0ZWRIb3VyczogMjVcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhZ2VOYW1lOiBcIkNvbnRhY3QgSW5mb3JtYXRpb25cIixcbiAgICAgIGNhdGVnb3J5OiBcIkNvbnRhY3RcIixcbiAgICAgIHJvdXRlOiBcIi9jb250YWN0XCIsXG4gICAgICBkdW1teURhdGE6IFtcbiAgICAgICAgXCJHZW5lcmljIGNvbnRhY3QgZGV0YWlsc1wiLFxuICAgICAgICBcIlBsYWNlaG9sZGVyIG9mZmljZSBob3Vyc1wiLFxuICAgICAgICBcIlNhbXBsZSBpbnF1aXJ5IGZvcm1zXCJcbiAgICAgIF0sXG4gICAgICBhY3R1YWxEYXRhTmVlZGVkOiBbXG4gICAgICAgIFwiVmVyaWZpZWQgY29udGFjdCBudW1iZXJzIGFuZCBlbWFpbCBhZGRyZXNzZXNcIixcbiAgICAgICAgXCJBY3R1YWwgb2ZmaWNlIGhvdXJzIGFuZCBhdmFpbGFiaWxpdHlcIixcbiAgICAgICAgXCJEZXBhcnRtZW50LXdpc2UgY29udGFjdCBpbmZvcm1hdGlvblwiLFxuICAgICAgICBcIkxvY2F0aW9uIG1hcHMgYW5kIHRyYW5zcG9ydGF0aW9uIGRldGFpbHNcIlxuICAgICAgXSxcbiAgICAgIHByaW9yaXR5OiBcIkhpZ2hcIixcbiAgICAgIGVzdGltYXRlZEhvdXJzOiA4XG4gICAgfVxuICBdO1xuXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBbXCJBbGxcIiwgXCJNYWluXCIsIFwiQWJvdXRcIiwgXCJBZG1pc3Npb25zXCIsIFwiQWNhZGVtaWNzXCIsIFwiRmFjaWxpdGllc1wiLCBcIkNhbXB1cyBMaWZlXCIsIFwiRmFjdWx0eVwiLCBcIkdhbGxlcnlcIiwgXCJDb250YWN0XCJdO1xuXG4gIGNvbnN0IGZpbHRlcmVkUGFnZXMgPSBzZWxlY3RlZENhdGVnb3J5ID09PSBcIkFsbFwiIFxuICAgID8gcGFnZUF1ZGl0cyBcbiAgICA6IHBhZ2VBdWRpdHMuZmlsdGVyKHBhZ2UgPT4gcGFnZS5jYXRlZ29yeSA9PT0gc2VsZWN0ZWRDYXRlZ29yeSk7XG5cbiAgY29uc3QgdG90YWxFc3RpbWF0ZWRIb3VycyA9IHBhZ2VBdWRpdHMucmVkdWNlKChzdW0sIHBhZ2UpID0+IHN1bSArIHBhZ2UuZXN0aW1hdGVkSG91cnMsIDApO1xuICBjb25zdCBoaWdoUHJpb3JpdHlQYWdlcyA9IHBhZ2VBdWRpdHMuZmlsdGVyKHBhZ2UgPT4gcGFnZS5wcmlvcml0eSA9PT0gXCJIaWdoXCIpLmxlbmd0aDtcblxuICBjb25zdCBkb3dubG9hZEV4Y2VsRGF0YSA9ICgpID0+IHtcbiAgICBjb25zdCBjc3ZDb250ZW50ID0gW1xuICAgICAgW1wiUGFnZSBOYW1lXCIsIFwiQ2F0ZWdvcnlcIiwgXCJSb3V0ZVwiLCBcIkR1bW15IERhdGEgVXNlZFwiLCBcIkFjdHVhbCBEYXRhIHRvIGJlIFByb2N1cmVkXCIsIFwiUHJpb3JpdHlcIiwgXCJFc3RpbWF0ZWQgSG91cnNcIiwgXCJTdGF0dXNcIiwgXCJPd25lclwiXSxcbiAgICAgIC4uLnBhZ2VBdWRpdHMubWFwKHBhZ2UgPT4gW1xuICAgICAgICBwYWdlLnBhZ2VOYW1lLFxuICAgICAgICBwYWdlLmNhdGVnb3J5LFxuICAgICAgICBwYWdlLnJvdXRlLFxuICAgICAgICBwYWdlLmR1bW15RGF0YS5qb2luKFwiOyBcIiksXG4gICAgICAgIHBhZ2UuYWN0dWFsRGF0YU5lZWRlZC5qb2luKFwiOyBcIiksXG4gICAgICAgIHBhZ2UucHJpb3JpdHksXG4gICAgICAgIHBhZ2UuZXN0aW1hdGVkSG91cnMudG9TdHJpbmcoKSxcbiAgICAgICAgXCJOb3QgU3RhcnRlZFwiLFxuICAgICAgICBcIlRvIGJlIEFzc2lnbmVkXCJcbiAgICAgIF0pXG4gICAgXS5tYXAocm93ID0+IHJvdy5tYXAoY2VsbCA9PiBgXCIke2NlbGx9XCJgKS5qb2luKFwiLFwiKSkuam9pbihcIlxcblwiKTtcblxuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbY3N2Q29udGVudF0sIHsgdHlwZTogXCJ0ZXh0L2NzdjtjaGFyc2V0PXV0Zi04O1wiIH0pO1xuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCB1cmwpO1xuICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIiwgXCJTSlJQU19XZWJzaXRlX0NvbnRlbnRfQXVkaXQuY3N2XCIpO1xuICAgIGxpbmsuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICBsaW5rLmNsaWNrKCk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcbiAgfTtcblxuICBjb25zdCBnZXRQcmlvcml0eUNvbG9yID0gKHByaW9yaXR5OiBzdHJpbmcpID0+IHtcbiAgICBzd2l0Y2ggKHByaW9yaXR5KSB7XG4gICAgICBjYXNlIFwiSGlnaFwiOiByZXR1cm4gXCJiZy1yZWQtMTAwIHRleHQtcmVkLTgwMCBib3JkZXItcmVkLTIwMFwiO1xuICAgICAgY2FzZSBcIk1lZGl1bVwiOiByZXR1cm4gXCJiZy15ZWxsb3ctMTAwIHRleHQteWVsbG93LTgwMCBib3JkZXIteWVsbG93LTIwMFwiO1xuICAgICAgY2FzZSBcIkxvd1wiOiByZXR1cm4gXCJiZy1ncmVlbi0xMDAgdGV4dC1ncmVlbi04MDAgYm9yZGVyLWdyZWVuLTIwMFwiO1xuICAgICAgZGVmYXVsdDogcmV0dXJuIFwiYmctZ3JheS0xMDAgdGV4dC1ncmF5LTgwMCBib3JkZXItZ3JheS0yMDBcIjtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPFBhZ2VCYW5uZXJcbiAgICAgICAgdGl0bGU9XCJQYWdlIE92ZXJ2aWV3ICYgQ29udGVudCBBdWRpdFwiXG4gICAgICAgIHN1YnRpdGxlPVwiQ29tcGxldGUgV2Vic2l0ZSBTaXRlbWFwIGFuZCBEYXRhIFJlcXVpcmVtZW50c1wiXG4gICAgICAgIGJhY2tncm91bmRJbWFnZT17aW5kaWFuU3R1ZGVudHNBY2hpZXZlbWVudHN9XG4gICAgICAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgcHktMTJcIj5cbiAgICAgICAgey8qIFN1bW1hcnkgU3RhdGlzdGljcyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy00IGdhcC02IG1iLTEyXCI+XG4gICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcC02XCI+XG4gICAgICAgICAgICAgIDxGaWxlVGV4dCBjbGFzc05hbWU9XCJoLTggdy04IHRleHQtYmx1ZS02MDAgbXItNFwiIC8+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtZ3JheS05MDBcIj57cGFnZUF1ZGl0cy5sZW5ndGh9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj5Ub3RhbCBQYWdlczwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBwLTZcIj5cbiAgICAgICAgICAgICAgPFN0YXIgY2xhc3NOYW1lPVwiaC04IHctOCB0ZXh0LXJlZC02MDAgbXItNFwiIC8+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtZ3JheS05MDBcIj57aGlnaFByaW9yaXR5UGFnZXN9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj5IaWdoIFByaW9yaXR5PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHAtNlwiPlxuICAgICAgICAgICAgICA8Q2FsZW5kYXIgY2xhc3NOYW1lPVwiaC04IHctOCB0ZXh0LWdyZWVuLTYwMCBtci00XCIgLz5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1ncmF5LTkwMFwiPnt0b3RhbEVzdGltYXRlZEhvdXJzfTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+VG90YWwgSG91cnM8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcC02XCI+XG4gICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJoLTggdy04IHRleHQtcHVycGxlLTYwMCBtci00XCIgLz5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1ncmF5LTkwMFwiPjUwKzwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+SW1hZ2VzIE5lZWRlZDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIEFjdGlvbnMgU2VjdGlvbiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1zdGFydCBzbTppdGVtcy1jZW50ZXIgbWItOCBnYXAtNFwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtZ3JheS05MDAgbWItMlwiPkNvbnRlbnQgQXVkaXQgRGV0YWlsczwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+RGV0YWlsZWQgYnJlYWtkb3duIG9mIGR1bW15IGNvbnRlbnQgYW5kIGRhdGEgcmVxdWlyZW1lbnRzIGZvciBlYWNoIHBhZ2U8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtkb3dubG9hZEV4Y2VsRGF0YX0gY2xhc3NOYW1lPVwiYmctZ3JlZW4tNjAwIGhvdmVyOmJnLWdyZWVuLTcwMCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICA8RG93bmxvYWQgY2xhc3NOYW1lPVwiaC00IHctNCBtci0yXCIgLz5cbiAgICAgICAgICAgIERvd25sb2FkIEV4Y2VsIFJlcG9ydFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogQ2F0ZWdvcnkgRmlsdGVycyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMiBtYi04XCI+XG4gICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gKFxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBrZXk9e2NhdGVnb3J5fVxuICAgICAgICAgICAgICB2YXJpYW50PXtzZWxlY3RlZENhdGVnb3J5ID09PSBjYXRlZ29yeSA/IFwiZGVmYXVsdFwiIDogXCJvdXRsaW5lXCJ9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkQ2F0ZWdvcnkoY2F0ZWdvcnkpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0yXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2NhdGVnb3J5fVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBQYWdlIENhcmRzICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTZcIj5cbiAgICAgICAgICB7ZmlsdGVyZWRQYWdlcy5tYXAoKHBhZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8Q2FyZCBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJob3ZlcjpzaGFkb3ctbGcgdHJhbnNpdGlvbi1zaGFkb3dcIj5cbiAgICAgICAgICAgICAgPENhcmRIZWFkZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRUaXRsZSBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1iLTJcIj57cGFnZS5wYWdlTmFtZX08L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEJhZGdlIHZhcmlhbnQ9XCJvdXRsaW5lXCI+e3BhZ2UuY2F0ZWdvcnl9PC9CYWRnZT5cbiAgICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgY2xhc3NOYW1lPXtnZXRQcmlvcml0eUNvbG9yKHBhZ2UucHJpb3JpdHkpfT57cGFnZS5wcmlvcml0eX0gUHJpb3JpdHk8L0JhZGdlPlxuICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+e3BhZ2UuZXN0aW1hdGVkSG91cnN9aCBlc3RpbWF0ZWQ8L0JhZGdlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+Um91dGU6IHtwYWdlLnJvdXRlfTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTZcIj5cbiAgICAgICAgICAgICAgICAgIHsvKiBEdW1teSBEYXRhICovfVxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1yZWQtNzAwIG1iLTMgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8RmlsZVRleHQgY2xhc3NOYW1lPVwiaC00IHctNCBtci0yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICBEdW1teSBEYXRhIEN1cnJlbnRseSBVc2VkXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7cGFnZS5kdW1teURhdGEubWFwKChpdGVtLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2lkeH0gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNzAwIHBsLTQgYm9yZGVyLWwtMiBib3JkZXItcmVkLTIwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgey8qIEFjdHVhbCBEYXRhIE5lZWRlZCAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtZ3JlZW4tNzAwIG1iLTMgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8VXNlcnMgY2xhc3NOYW1lPVwiaC00IHctNCBtci0yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICBBY3R1YWwgRGF0YSB0byBiZSBQcm9jdXJlZFxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3BhZ2UuYWN0dWFsRGF0YU5lZWRlZC5tYXAoKGl0ZW0sIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aWR4fSBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS03MDAgcGwtNCBib3JkZXItbC0yIGJvcmRlci1ncmVlbi0yMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBJbXBvcnRhbnQgTm90ZXMgKi99XG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cIm10LTEyIGJnLWJsdWUtNTAgYm9yZGVyLWJsdWUtMjAwXCI+XG4gICAgICAgICAgPENhcmRIZWFkZXI+XG4gICAgICAgICAgICA8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cInRleHQtYmx1ZS04MDBcIj5JbXBvcnRhbnQgTm90ZXMgZm9yIERhdGEgQ29sbGVjdGlvbjwvQ2FyZFRpdGxlPlxuICAgICAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTYgdGV4dC1zbSB0ZXh0LWJsdWUtNzAwXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgbWItMlwiPlBob3RvIFJlcXVpcmVtZW50czo8L2g0PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS15LTEgbGlzdC1kaXNjIHBsLTVcIj5cbiAgICAgICAgICAgICAgICAgIDxsaT5BbGwgcGhvdG9zIHNob3VsZCBiZSBoaWdoIHJlc29sdXRpb24gKG1pbmltdW0gMTkyMHgxMDgwKTwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+U3R1ZGVudCBwaG90b3MgcmVxdWlyZSB3cml0dGVuIHBhcmVudGFsIGNvbnNlbnQ8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPkZhY3VsdHkgcGhvdG9zIG5lZWQgaW5kaXZpZHVhbCBwZXJtaXNzaW9uczwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+TWFpbnRhaW4gY29uc2lzdGVudCBsaWdodGluZyBhbmQgc3R5bGUgYWNyb3NzIGNhbXB1cyBwaG90b3M8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIG1iLTJcIj5Db250ZW50IEd1aWRlbGluZXM6PC9oND5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3BhY2UteS0xIGxpc3QtZGlzYyBwbC01XCI+XG4gICAgICAgICAgICAgICAgICA8bGk+QWxsIGNvbnRlbnQgc2hvdWxkIGJlIGZhY3R1YWwgYW5kIHZlcmlmaWFibGU8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPk1haW50YWluIGNvbnNpc3RlbnQgdG9uZSBhbmQgc3R5bGUgYWNyb3NzIHBhZ2VzPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5FbnN1cmUgYWxsIGNvbnRhY3QgaW5mb3JtYXRpb24gaXMgY3VycmVudCBhbmQgdmVyaWZpZWQ8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPkluY2x1ZGUgU0VPLWZyaWVuZGx5IGRlc2NyaXB0aW9ucyBmb3IgYmV0dGVyIHZpc2liaWxpdHk8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlT3ZlcnZpZXc7Il0sImZpbGUiOiIvaG9tZS9zanJzaDkxNi9wdWJsaWNfaHRtbC9zcmMvcGFnZXMvUGFnZU92ZXJ2aWV3LnRzeCJ9