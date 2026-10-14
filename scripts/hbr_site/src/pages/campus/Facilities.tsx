import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/campus/Facilities.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import Layout from "/src/components/Layout.tsx";
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { Monitor, FlaskConical, Utensils, Bus, Shield, Heart, Music, Palette, Camera, Phone } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
import PageBanner from "/src/components/PageBanner.tsx";
import smartClassroomTech from "/src/assets/smart-classroom-tech.jpg?import";
import computerLabStudents from "/src/assets/computer-lab-students.jpg?import";
import auditoriumPerformance from "/src/assets/auditorium-performance.jpg?import";
import artMusicStudio from "/src/assets/art-music-studio.jpg?import";
import transportationStudents from "/src/assets/transportation-students.jpg?import";
import indianSchoolCampus from "/src/assets/indian-school-campus.jpg?import";
const Facilities = ()=>{
    const facilities = [
        {
            title: "Smart Classrooms",
            icon: Monitor,
            description: "Interactive whiteboards, projectors, and modern AV equipment for engaging lessons",
            features: [
                "Interactive Whiteboards",
                "High-Speed Internet",
                "AV Equipment",
                "Air Conditioning"
            ],
            image: smartClassroomTech,
            color: "bg-blue-50"
        },
        {
            title: "Science & Computer Labs",
            icon: FlaskConical,
            description: "Well-equipped laboratories for hands-on learning in physics, chemistry, biology, and computer science",
            features: [
                "Latest Equipment",
                "Safety Protocols",
                "Individual Workstations",
                "Expert Supervision"
            ],
            image: computerLabStudents,
            color: "bg-green-50"
        },
        {
            title: "Multipurpose Auditorium",
            icon: Music,
            description: "State-of-the-art auditorium for cultural events, assemblies, and performances",
            features: [
                "500 Seating Capacity",
                "Professional Sound System",
                "Stage Lighting",
                "AC Facility"
            ],
            image: auditoriumPerformance,
            color: "bg-purple-50"
        },
        {
            title: "Hygienic Cafeteria",
            icon: Utensils,
            description: "Clean, spacious dining area serving nutritious meals and healthy snacks",
            features: [
                "Nutritious Meals",
                "Hygienic Preparation",
                "Spacious Seating",
                "Affordable Pricing"
            ],
            image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
            color: "bg-orange-50"
        },
        {
            title: "Art & Music Rooms",
            icon: Palette,
            description: "Dedicated spaces for creative expression through art, craft, and music",
            features: [
                "Art Supplies",
                "Musical Instruments",
                "Natural Lighting",
                "Display Areas"
            ],
            image: artMusicStudio,
            color: "bg-pink-50"
        },
        {
            title: "Transportation",
            icon: Bus,
            description: "Safe and reliable school bus service covering major areas of Bengaluru",
            features: [
                "GPS Tracking",
                "Trained Drivers",
                "Route Coverage",
                "Safety Measures"
            ],
            image: transportationStudents,
            color: "bg-yellow-50"
        },
        {
            title: "Security & Safety",
            icon: Shield,
            description: "Comprehensive security system with CCTV surveillance and trained security personnel",
            features: [
                "24/7 CCTV",
                "Security Guards",
                "Visitor Management",
                "Emergency Protocols"
            ],
            image: indianSchoolCampus,
            color: "bg-red-50"
        },
        {
            title: "Health & Wellness",
            icon: Heart,
            description: "First aid facility and wellness room for student health and medical emergencies",
            features: [
                "Trained Nurse",
                "First Aid Supplies",
                "Emergency Care",
                "Health Records"
            ],
            image: indianSchoolCampus,
            color: "bg-teal-50"
        }
    ];
    const quickStats = [
        {
            number: "30+",
            label: "Smart Classrooms",
            icon: Monitor
        },
        {
            number: "5",
            label: "Science Labs",
            icon: FlaskConical
        },
        {
            number: "500",
            label: "Auditorium Seats",
            icon: Music
        },
        {
            number: "15",
            label: "Bus Routes",
            icon: Bus
        }
    ];
    return /*#__PURE__*/ _jsxDEV(Layout, {
        "data-lov-id": "src/pages/campus/Facilities.tsx:90:4",
        "data-lov-name": "Layout",
        "data-component-path": "src/pages/campus/Facilities.tsx",
        "data-component-line": "90",
        "data-component-file": "Facilities.tsx",
        "data-component-name": "Layout",
        "data-component-content": "%7B%7D",
        children: /*#__PURE__*/ _jsxDEV("div", {
            "data-lov-id": "src/pages/campus/Facilities.tsx:91:6",
            "data-lov-name": "div",
            "data-component-path": "src/pages/campus/Facilities.tsx",
            "data-component-line": "91",
            "data-component-file": "Facilities.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22min-h-screen%20bg-background%22%7D",
            className: "min-h-screen bg-background",
            children: [
                /*#__PURE__*/ _jsxDEV(PageBanner, {
                    "data-lov-id": "src/pages/campus/Facilities.tsx:92:8",
                    "data-lov-name": "PageBanner",
                    "data-component-path": "src/pages/campus/Facilities.tsx",
                    "data-component-line": "92",
                    "data-component-file": "Facilities.tsx",
                    "data-component-name": "PageBanner",
                    "data-component-content": "%7B%7D",
                    title: "Campus Facilities",
                    subtitle: "Thoughtfully designed campus promoting academic success, creativity, and comfort in a secure environment",
                    backgroundImage: indianSchoolCampus
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("section", {
                    "data-lov-id": "src/pages/campus/Facilities.tsx:99:8",
                    "data-lov-name": "section",
                    "data-component-path": "src/pages/campus/Facilities.tsx",
                    "data-component-line": "99",
                    "data-component-file": "Facilities.tsx",
                    "data-component-name": "section",
                    "data-component-content": "%7B%22className%22%3A%22py-16%20bg-gradient-to-r%20from-amber-50%20to-orange-50%22%7D",
                    className: "py-16 bg-gradient-to-r from-amber-50 to-orange-50",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/campus/Facilities.tsx:100:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/campus/Facilities.tsx",
                        "data-component-line": "100",
                        "data-component-file": "Facilities.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                        className: "container mx-auto px-4",
                        children: /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/campus/Facilities.tsx:101:12",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/campus/Facilities.tsx",
                            "data-component-line": "101",
                            "data-component-file": "Facilities.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-4%20gap-8%22%7D",
                            className: "grid md:grid-cols-4 gap-8",
                            children: quickStats.map((stat, index)=>/*#__PURE__*/ _jsxDEV(Card, {
                                    "data-lov-id": "src/pages/campus/Facilities.tsx:103:16",
                                    "data-lov-name": "Card",
                                    "data-component-path": "src/pages/campus/Facilities.tsx",
                                    "data-component-line": "103",
                                    "data-component-file": "Facilities.tsx",
                                    "data-component-name": "Card",
                                    "data-component-content": "%7B%22className%22%3A%22text-center%20hover%3Ashadow-xl%20transition-all%20duration-300%20hover-scale%20animate-fade-in%22%7D",
                                    className: "text-center hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in",
                                    children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                        "data-lov-id": "src/pages/campus/Facilities.tsx:104:18",
                                        "data-lov-name": "CardContent",
                                        "data-component-path": "src/pages/campus/Facilities.tsx",
                                        "data-component-line": "104",
                                        "data-component-file": "Facilities.tsx",
                                        "data-component-name": "CardContent",
                                        "data-component-content": "%7B%22className%22%3A%22p-6%22%7D",
                                        className: "p-6",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/campus/Facilities.tsx:105:20",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/campus/Facilities.tsx",
                                                "data-component-line": "105",
                                                "data-component-file": "Facilities.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22bg-school-gold%20w-16%20h-16%20rounded-full%20flex%20items-center%20justify-center%20mx-auto%20mb-4%22%7D",
                                                className: "bg-school-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
                                                children: /*#__PURE__*/ _jsxDEV(stat.icon, {
                                                    "data-lov-id": "src/pages/campus/Facilities.tsx:106:22",
                                                    "data-lov-name": "stat.icon",
                                                    "data-component-path": "src/pages/campus/Facilities.tsx",
                                                    "data-component-line": "106",
                                                    "data-component-file": "Facilities.tsx",
                                                    "data-component-name": "stat.icon",
                                                    "data-component-content": "%7B%22className%22%3A%22h-8%20w-8%20text-white%22%7D",
                                                    className: "h-8 w-8 text-white"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                lineNumber: 105,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/campus/Facilities.tsx:108:20",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/campus/Facilities.tsx",
                                                "data-component-line": "108",
                                                "data-component-file": "Facilities.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22text-3xl%20font-bold%20text-school-brown%20mb-2%22%7D",
                                                className: "text-3xl font-bold text-school-brown mb-2",
                                                children: stat.number
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                lineNumber: 108,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("p", {
                                                "data-lov-id": "src/pages/campus/Facilities.tsx:109:20",
                                                "data-lov-name": "p",
                                                "data-component-path": "src/pages/campus/Facilities.tsx",
                                                "data-component-line": "109",
                                                "data-component-file": "Facilities.tsx",
                                                "data-component-name": "p",
                                                "data-component-content": "%7B%22className%22%3A%22text-elegant-light%20font-medium%22%7D",
                                                className: "text-elegant-light font-medium",
                                                children: stat.label
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                lineNumber: 109,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                        lineNumber: 104,
                                        columnNumber: 19
                                    }, this)
                                }, stat.label, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                    lineNumber: 103,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                            lineNumber: 101,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("section", {
                    "data-lov-id": "src/pages/campus/Facilities.tsx:118:8",
                    "data-lov-name": "section",
                    "data-component-path": "src/pages/campus/Facilities.tsx",
                    "data-component-line": "118",
                    "data-component-file": "Facilities.tsx",
                    "data-component-name": "section",
                    "data-component-content": "%7B%22className%22%3A%22py-16%22%7D",
                    className: "py-16",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/campus/Facilities.tsx:119:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/campus/Facilities.tsx",
                        "data-component-line": "119",
                        "data-component-file": "Facilities.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                        className: "container mx-auto px-4",
                        children: [
                            /*#__PURE__*/ _jsxDEV("h2", {
                                "data-lov-id": "src/pages/campus/Facilities.tsx:120:12",
                                "data-lov-name": "h2",
                                "data-component-path": "src/pages/campus/Facilities.tsx",
                                "data-component-line": "120",
                                "data-component-file": "Facilities.tsx",
                                "data-component-name": "h2",
                                "data-component-content": "%7B%22text%22%3A%22Our%20Facilities%22%2C%22className%22%3A%22text-3xl%20font-bold%20text-school-brown%20text-center%20mb-12%22%7D",
                                className: "text-3xl font-bold text-school-brown text-center mb-12",
                                children: "Our Facilities"
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/pages/campus/Facilities.tsx:121:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/pages/campus/Facilities.tsx",
                                "data-component-line": "121",
                                "data-component-file": "Facilities.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22grid%20lg%3Agrid-cols-2%20gap-8%22%7D",
                                className: "grid lg:grid-cols-2 gap-8",
                                children: facilities.map((facility, index)=>/*#__PURE__*/ _jsxDEV(Card, {
                                        "data-lov-id": "src/pages/campus/Facilities.tsx:123:16",
                                        "data-lov-name": "Card",
                                        "data-component-path": "src/pages/campus/Facilities.tsx",
                                        "data-component-line": "123",
                                        "data-component-file": "Facilities.tsx",
                                        "data-component-name": "Card",
                                        "data-component-content": "%7B%7D",
                                        className: `${facility.color} group overflow-hidden hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in`,
                                        children: /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/pages/campus/Facilities.tsx:124:18",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/pages/campus/Facilities.tsx",
                                            "data-component-line": "124",
                                            "data-component-file": "Facilities.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22md%3Aflex%22%7D",
                                            className: "md:flex",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/campus/Facilities.tsx:125:20",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/campus/Facilities.tsx",
                                                    "data-component-line": "125",
                                                    "data-component-file": "Facilities.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22md%3Aw-1%2F3%20relative%20overflow-hidden%22%7D",
                                                    className: "md:w-1/3 relative overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("img", {
                                                            "data-lov-id": "src/pages/campus/Facilities.tsx:126:22",
                                                            "data-lov-name": "img",
                                                            "data-component-path": "src/pages/campus/Facilities.tsx",
                                                            "data-component-line": "126",
                                                            "data-component-file": "Facilities.tsx",
                                                            "data-component-name": "img",
                                                            "data-component-content": "%7B%22className%22%3A%22w-full%20h-48%20md%3Ah-full%20object-cover%20group-hover%3Ascale-105%20transition-transform%20duration-300%22%7D",
                                                            src: facility.image,
                                                            alt: facility.title,
                                                            className: "w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            "data-lov-id": "src/pages/campus/Facilities.tsx:131:22",
                                                            "data-lov-name": "div",
                                                            "data-component-path": "src/pages/campus/Facilities.tsx",
                                                            "data-component-line": "131",
                                                            "data-component-file": "Facilities.tsx",
                                                            "data-component-name": "div",
                                                            "data-component-content": "%7B%22className%22%3A%22absolute%20inset-0%20bg-black%2F20%20group-hover%3Abg-black%2F10%20transition-colors%20duration-300%22%7D",
                                                            className: "absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                            lineNumber: 131,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            "data-lov-id": "src/pages/campus/Facilities.tsx:132:22",
                                                            "data-lov-name": "div",
                                                            "data-component-path": "src/pages/campus/Facilities.tsx",
                                                            "data-component-line": "132",
                                                            "data-component-file": "Facilities.tsx",
                                                            "data-component-name": "div",
                                                            "data-component-content": "%7B%22className%22%3A%22absolute%20top-4%20right-4%20bg-school-gold%20p-2%20rounded-full%22%7D",
                                                            className: "absolute top-4 right-4 bg-school-gold p-2 rounded-full",
                                                            children: /*#__PURE__*/ _jsxDEV(facility.icon, {
                                                                "data-lov-id": "src/pages/campus/Facilities.tsx:133:24",
                                                                "data-lov-name": "facility.icon",
                                                                "data-component-path": "src/pages/campus/Facilities.tsx",
                                                                "data-component-line": "133",
                                                                "data-component-file": "Facilities.tsx",
                                                                "data-component-name": "facility.icon",
                                                                "data-component-content": "%7B%22className%22%3A%22h-6%20w-6%20text-white%22%7D",
                                                                className: "h-6 w-6 text-white"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                                lineNumber: 133,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/campus/Facilities.tsx:136:20",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/campus/Facilities.tsx",
                                                    "data-component-line": "136",
                                                    "data-component-file": "Facilities.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22md%3Aw-2%2F3%22%7D",
                                                    className: "md:w-2/3",
                                                    children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                                        "data-lov-id": "src/pages/campus/Facilities.tsx:137:22",
                                                        "data-lov-name": "CardContent",
                                                        "data-component-path": "src/pages/campus/Facilities.tsx",
                                                        "data-component-line": "137",
                                                        "data-component-file": "Facilities.tsx",
                                                        "data-component-name": "CardContent",
                                                        "data-component-content": "%7B%22className%22%3A%22p-6%22%7D",
                                                        className: "p-6",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("h3", {
                                                                "data-lov-id": "src/pages/campus/Facilities.tsx:138:24",
                                                                "data-lov-name": "h3",
                                                                "data-component-path": "src/pages/campus/Facilities.tsx",
                                                                "data-component-line": "138",
                                                                "data-component-file": "Facilities.tsx",
                                                                "data-component-name": "h3",
                                                                "data-component-content": "%7B%22className%22%3A%22text-xl%20font-bold%20text-school-brown%20mb-3%22%7D",
                                                                className: "text-xl font-bold text-school-brown mb-3",
                                                                children: facility.title
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                                lineNumber: 138,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                "data-lov-id": "src/pages/campus/Facilities.tsx:139:24",
                                                                "data-lov-name": "p",
                                                                "data-component-path": "src/pages/campus/Facilities.tsx",
                                                                "data-component-line": "139",
                                                                "data-component-file": "Facilities.tsx",
                                                                "data-component-name": "p",
                                                                "data-component-content": "%7B%22className%22%3A%22text-elegant-light%20mb-4%20leading-relaxed%22%7D",
                                                                className: "text-elegant-light mb-4 leading-relaxed",
                                                                children: facility.description
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                                lineNumber: 139,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("div", {
                                                                "data-lov-id": "src/pages/campus/Facilities.tsx:140:24",
                                                                "data-lov-name": "div",
                                                                "data-component-path": "src/pages/campus/Facilities.tsx",
                                                                "data-component-line": "140",
                                                                "data-component-file": "Facilities.tsx",
                                                                "data-component-name": "div",
                                                                "data-component-content": "%7B%22className%22%3A%22space-y-2%22%7D",
                                                                className: "space-y-2",
                                                                children: [
                                                                    /*#__PURE__*/ _jsxDEV("h4", {
                                                                        "data-lov-id": "src/pages/campus/Facilities.tsx:141:26",
                                                                        "data-lov-name": "h4",
                                                                        "data-component-path": "src/pages/campus/Facilities.tsx",
                                                                        "data-component-line": "141",
                                                                        "data-component-file": "Facilities.tsx",
                                                                        "data-component-name": "h4",
                                                                        "data-component-content": "%7B%22text%22%3A%22Key%20Features%3A%22%2C%22className%22%3A%22font-semibold%20text-school-brown%22%7D",
                                                                        className: "font-semibold text-school-brown",
                                                                        children: "Key Features:"
                                                                    }, void 0, false, {
                                                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                                        lineNumber: 141,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                                        "data-lov-id": "src/pages/campus/Facilities.tsx:142:26",
                                                                        "data-lov-name": "div",
                                                                        "data-component-path": "src/pages/campus/Facilities.tsx",
                                                                        "data-component-line": "142",
                                                                        "data-component-file": "Facilities.tsx",
                                                                        "data-component-name": "div",
                                                                        "data-component-content": "%7B%22className%22%3A%22grid%20grid-cols-2%20gap-2%22%7D",
                                                                        className: "grid grid-cols-2 gap-2",
                                                                        children: facility.features.map((feature, i)=>/*#__PURE__*/ _jsxDEV("div", {
                                                                                "data-lov-id": "src/pages/campus/Facilities.tsx:144:30",
                                                                                "data-lov-name": "div",
                                                                                "data-component-path": "src/pages/campus/Facilities.tsx",
                                                                                "data-component-line": "144",
                                                                                "data-component-file": "Facilities.tsx",
                                                                                "data-component-name": "div",
                                                                                "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20text-sm%20text-elegant-light%22%7D",
                                                                                className: "flex items-center text-sm text-elegant-light",
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                                                        "data-lov-id": "src/pages/campus/Facilities.tsx:145:32",
                                                                                        "data-lov-name": "div",
                                                                                        "data-component-path": "src/pages/campus/Facilities.tsx",
                                                                                        "data-component-line": "145",
                                                                                        "data-component-file": "Facilities.tsx",
                                                                                        "data-component-name": "div",
                                                                                        "data-component-content": "%7B%22className%22%3A%22w-2%20h-2%20bg-school-gold%20rounded-full%20mr-2%22%7D",
                                                                                        className: "w-2 h-2 bg-school-gold rounded-full mr-2"
                                                                                    }, void 0, false, {
                                                                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                                                        lineNumber: 145,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    feature
                                                                                ]
                                                                            }, i, true, {
                                                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                                                lineNumber: 144,
                                                                                columnNumber: 31
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                                        lineNumber: 142,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                                lineNumber: 140,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                            lineNumber: 124,
                                            columnNumber: 19
                                        }, this)
                                    }, facility.title, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                        lineNumber: 123,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("section", {
                    "data-lov-id": "src/pages/campus/Facilities.tsx:161:8",
                    "data-lov-name": "section",
                    "data-component-path": "src/pages/campus/Facilities.tsx",
                    "data-component-line": "161",
                    "data-component-file": "Facilities.tsx",
                    "data-component-name": "section",
                    "data-component-content": "%7B%22className%22%3A%22py-16%20bg-gradient-to-r%20from-blue-50%20to-indigo-50%22%7D",
                    className: "py-16 bg-gradient-to-r from-blue-50 to-indigo-50",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/campus/Facilities.tsx:162:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/campus/Facilities.tsx",
                        "data-component-line": "162",
                        "data-component-file": "Facilities.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                        className: "container mx-auto px-4",
                        children: /*#__PURE__*/ _jsxDEV(Card, {
                            "data-lov-id": "src/pages/campus/Facilities.tsx:163:12",
                            "data-lov-name": "Card",
                            "data-component-path": "src/pages/campus/Facilities.tsx",
                            "data-component-line": "163",
                            "data-component-file": "Facilities.tsx",
                            "data-component-name": "Card",
                            "data-component-content": "%7B%22className%22%3A%22max-w-4xl%20mx-auto%20shadow-lg%22%7D",
                            className: "max-w-4xl mx-auto shadow-lg",
                            children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                "data-lov-id": "src/pages/campus/Facilities.tsx:164:14",
                                "data-lov-name": "CardContent",
                                "data-component-path": "src/pages/campus/Facilities.tsx",
                                "data-component-line": "164",
                                "data-component-file": "Facilities.tsx",
                                "data-component-name": "CardContent",
                                "data-component-content": "%7B%22className%22%3A%22p-8%20lg%3Ap-12%20text-center%22%7D",
                                className: "p-8 lg:p-12 text-center",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        "data-lov-id": "src/pages/campus/Facilities.tsx:165:16",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/pages/campus/Facilities.tsx",
                                        "data-component-line": "165",
                                        "data-component-file": "Facilities.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22className%22%3A%22bg-school-gold%20w-20%20h-20%20rounded-full%20flex%20items-center%20justify-center%20mx-auto%20mb-6%22%7D",
                                        className: "bg-school-gold w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6",
                                        children: /*#__PURE__*/ _jsxDEV(Camera, {
                                            "data-lov-id": "src/pages/campus/Facilities.tsx:166:18",
                                            "data-lov-name": "Camera",
                                            "data-component-path": "src/pages/campus/Facilities.tsx",
                                            "data-component-line": "166",
                                            "data-component-file": "Facilities.tsx",
                                            "data-component-name": "Camera",
                                            "data-component-content": "%7B%22className%22%3A%22h-10%20w-10%20text-white%22%7D",
                                            className: "h-10 w-10 text-white"
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                            lineNumber: 166,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                        lineNumber: 165,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("h2", {
                                        "data-lov-id": "src/pages/campus/Facilities.tsx:168:16",
                                        "data-lov-name": "h2",
                                        "data-component-path": "src/pages/campus/Facilities.tsx",
                                        "data-component-line": "168",
                                        "data-component-file": "Facilities.tsx",
                                        "data-component-name": "h2",
                                        "data-component-content": "%7B%22text%22%3A%22Experience%20Our%20Campus%22%2C%22className%22%3A%22text-3xl%20font-bold%20text-school-brown%20mb-6%22%7D",
                                        className: "text-3xl font-bold text-school-brown mb-6",
                                        children: "Experience Our Campus"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                        lineNumber: 168,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        "data-lov-id": "src/pages/campus/Facilities.tsx:169:16",
                                        "data-lov-name": "p",
                                        "data-component-path": "src/pages/campus/Facilities.tsx",
                                        "data-component-line": "169",
                                        "data-component-file": "Facilities.tsx",
                                        "data-component-name": "p",
                                        "data-component-content": "%7B%22text%22%3A%22Take%20a%20virtual%20tour%20of%20our%20facilities%20or%20schedule%20a%20visit%20to%20see%20our%20campus%20in%20person.%20%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Discover%20the%20spaces%20where%20learning%20comes%20alive!%22%2C%22className%22%3A%22text-xl%20text-elegant-light%20mb-8%20max-w-2xl%20mx-auto%22%7D",
                                        className: "text-xl text-elegant-light mb-8 max-w-2xl mx-auto",
                                        children: "Take a virtual tour of our facilities or schedule a visit to see our campus in person. Discover the spaces where learning comes alive!"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                        lineNumber: 169,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        "data-lov-id": "src/pages/campus/Facilities.tsx:173:16",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/pages/campus/Facilities.tsx",
                                        "data-component-line": "173",
                                        "data-component-file": "Facilities.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22className%22%3A%22flex%20flex-col%20sm%3Aflex-row%20gap-4%20justify-center%22%7D",
                                        className: "flex flex-col sm:flex-row gap-4 justify-center",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV(Button, {
                                                "data-lov-id": "src/pages/campus/Facilities.tsx:174:18",
                                                "data-lov-name": "Button",
                                                "data-component-path": "src/pages/campus/Facilities.tsx",
                                                "data-component-line": "174",
                                                "data-component-file": "Facilities.tsx",
                                                "data-component-name": "Button",
                                                "data-component-content": "%7B%22text%22%3A%22Virtual%20Campus%20Tour%22%2C%22className%22%3A%22bg-school-gold%20hover%3Abg-school-brown%20text-white%22%7D",
                                                size: "lg",
                                                className: "bg-school-gold hover:bg-school-brown text-white",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(Camera, {
                                                        "data-lov-id": "src/pages/campus/Facilities.tsx:175:20",
                                                        "data-lov-name": "Camera",
                                                        "data-component-path": "src/pages/campus/Facilities.tsx",
                                                        "data-component-line": "175",
                                                        "data-component-file": "Facilities.tsx",
                                                        "data-component-name": "Camera",
                                                        "data-component-content": "%7B%22className%22%3A%22h-5%20w-5%20mr-2%22%7D",
                                                        className: "h-5 w-5 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Virtual Campus Tour"
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                lineNumber: 174,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV(Button, {
                                                "data-lov-id": "src/pages/campus/Facilities.tsx:178:18",
                                                "data-lov-name": "Button",
                                                "data-component-path": "src/pages/campus/Facilities.tsx",
                                                "data-component-line": "178",
                                                "data-component-file": "Facilities.tsx",
                                                "data-component-name": "Button",
                                                "data-component-content": "%7B%22text%22%3A%22Schedule%20a%20Visit%22%2C%22className%22%3A%22border-school-brown%20text-school-brown%20hover%3Abg-school-brown%20hover%3Atext-white%22%7D",
                                                size: "lg",
                                                variant: "outline",
                                                className: "border-school-brown text-school-brown hover:bg-school-brown hover:text-white",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(Phone, {
                                                        "data-lov-id": "src/pages/campus/Facilities.tsx:179:20",
                                                        "data-lov-name": "Phone",
                                                        "data-component-path": "src/pages/campus/Facilities.tsx",
                                                        "data-component-line": "179",
                                                        "data-component-file": "Facilities.tsx",
                                                        "data-component-name": "Phone",
                                                        "data-component-content": "%7B%22className%22%3A%22h-5%20w-5%20mr-2%22%7D",
                                                        className: "h-5 w-5 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Schedule a Visit"
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                lineNumber: 178,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                        lineNumber: 173,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                lineNumber: 164,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                            lineNumber: 163,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("section", {
                    "data-lov-id": "src/pages/campus/Facilities.tsx:189:8",
                    "data-lov-name": "section",
                    "data-component-path": "src/pages/campus/Facilities.tsx",
                    "data-component-line": "189",
                    "data-component-file": "Facilities.tsx",
                    "data-component-name": "section",
                    "data-component-content": "%7B%22className%22%3A%22py-16%22%7D",
                    className: "py-16",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/campus/Facilities.tsx:190:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/campus/Facilities.tsx",
                        "data-component-line": "190",
                        "data-component-file": "Facilities.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                        className: "container mx-auto px-4",
                        children: /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/campus/Facilities.tsx:191:12",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/campus/Facilities.tsx",
                            "data-component-line": "191",
                            "data-component-file": "Facilities.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22max-w-4xl%20mx-auto%22%7D",
                            className: "max-w-4xl mx-auto",
                            children: [
                                /*#__PURE__*/ _jsxDEV("h2", {
                                    "data-lov-id": "src/pages/campus/Facilities.tsx:192:14",
                                    "data-lov-name": "h2",
                                    "data-component-path": "src/pages/campus/Facilities.tsx",
                                    "data-component-line": "192",
                                    "data-component-file": "Facilities.tsx",
                                    "data-component-name": "h2",
                                    "data-component-content": "%7B%22text%22%3A%22Safety%20%26%20Security%22%2C%22className%22%3A%22text-3xl%20font-bold%20text-school-brown%20text-center%20mb-12%22%7D",
                                    className: "text-3xl font-bold text-school-brown text-center mb-12",
                                    children: "Safety & Security"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                    lineNumber: 192,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/campus/Facilities.tsx:193:14",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/campus/Facilities.tsx",
                                    "data-component-line": "193",
                                    "data-component-file": "Facilities.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-2%20gap-8%22%7D",
                                    className: "grid md:grid-cols-2 gap-8",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV(Card, {
                                            "data-lov-id": "src/pages/campus/Facilities.tsx:194:16",
                                            "data-lov-name": "Card",
                                            "data-component-path": "src/pages/campus/Facilities.tsx",
                                            "data-component-line": "194",
                                            "data-component-file": "Facilities.tsx",
                                            "data-component-name": "Card",
                                            "data-component-content": "%7B%22className%22%3A%22bg-red-50%20hover%3Ashadow-xl%20transition-all%20duration-300%22%7D",
                                            className: "bg-red-50 hover:shadow-xl transition-all duration-300",
                                            children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                                "data-lov-id": "src/pages/campus/Facilities.tsx:195:18",
                                                "data-lov-name": "CardContent",
                                                "data-component-path": "src/pages/campus/Facilities.tsx",
                                                "data-component-line": "195",
                                                "data-component-file": "Facilities.tsx",
                                                "data-component-name": "CardContent",
                                                "data-component-content": "%7B%22className%22%3A%22p-6%22%7D",
                                                className: "p-6",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/pages/campus/Facilities.tsx:196:20",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/campus/Facilities.tsx",
                                                        "data-component-line": "196",
                                                        "data-component-file": "Facilities.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20mb-4%22%7D",
                                                        className: "flex items-center mb-4",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV(Shield, {
                                                                "data-lov-id": "src/pages/campus/Facilities.tsx:197:22",
                                                                "data-lov-name": "Shield",
                                                                "data-component-path": "src/pages/campus/Facilities.tsx",
                                                                "data-component-line": "197",
                                                                "data-component-file": "Facilities.tsx",
                                                                "data-component-name": "Shield",
                                                                "data-component-content": "%7B%22className%22%3A%22h-8%20w-8%20text-school-gold%20mr-3%22%7D",
                                                                className: "h-8 w-8 text-school-gold mr-3"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                                lineNumber: 197,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("h3", {
                                                                "data-lov-id": "src/pages/campus/Facilities.tsx:198:22",
                                                                "data-lov-name": "h3",
                                                                "data-component-path": "src/pages/campus/Facilities.tsx",
                                                                "data-component-line": "198",
                                                                "data-component-file": "Facilities.tsx",
                                                                "data-component-name": "h3",
                                                                "data-component-content": "%7B%22text%22%3A%22Security%20Measures%22%2C%22className%22%3A%22text-xl%20font-bold%20text-school-brown%22%7D",
                                                                className: "text-xl font-bold text-school-brown",
                                                                children: "Security Measures"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                                lineNumber: 198,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("ul", {
                                                        "data-lov-id": "src/pages/campus/Facilities.tsx:200:20",
                                                        "data-lov-name": "ul",
                                                        "data-component-path": "src/pages/campus/Facilities.tsx",
                                                        "data-component-line": "200",
                                                        "data-component-file": "Facilities.tsx",
                                                        "data-component-name": "ul",
                                                        "data-component-content": "%7B%22className%22%3A%22space-y-2%20text-elegant-light%22%7D",
                                                        className: "space-y-2 text-elegant-light",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("li", {
                                                                "data-lov-id": "src/pages/campus/Facilities.tsx:201:22",
                                                                "data-lov-name": "li",
                                                                "data-component-path": "src/pages/campus/Facilities.tsx",
                                                                "data-component-line": "201",
                                                                "data-component-file": "Facilities.tsx",
                                                                "data-component-name": "li",
                                                                "data-component-content": "%7B%22text%22%3A%22%E2%80%A2%2024%2F7%20CCTV%20surveillance%20throughout%20campus%22%7D",
                                                                children: "• 24/7 CCTV surveillance throughout campus"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                                lineNumber: 201,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("li", {
                                                                "data-lov-id": "src/pages/campus/Facilities.tsx:202:22",
                                                                "data-lov-name": "li",
                                                                "data-component-path": "src/pages/campus/Facilities.tsx",
                                                                "data-component-line": "202",
                                                                "data-component-file": "Facilities.tsx",
                                                                "data-component-name": "li",
                                                                "data-component-content": "%7B%22text%22%3A%22%E2%80%A2%20Trained%20security%20personnel%20at%20all%20entry%20points%22%7D",
                                                                children: "• Trained security personnel at all entry points"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                                lineNumber: 202,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("li", {
                                                                "data-lov-id": "src/pages/campus/Facilities.tsx:203:22",
                                                                "data-lov-name": "li",
                                                                "data-component-path": "src/pages/campus/Facilities.tsx",
                                                                "data-component-line": "203",
                                                                "data-component-file": "Facilities.tsx",
                                                                "data-component-name": "li",
                                                                "data-component-content": "%7B%22text%22%3A%22%E2%80%A2%20Visitor%20management%20and%20ID%20verification%20system%22%7D",
                                                                children: "• Visitor management and ID verification system"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                                lineNumber: 203,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("li", {
                                                                "data-lov-id": "src/pages/campus/Facilities.tsx:204:22",
                                                                "data-lov-name": "li",
                                                                "data-component-path": "src/pages/campus/Facilities.tsx",
                                                                "data-component-line": "204",
                                                                "data-component-file": "Facilities.tsx",
                                                                "data-component-name": "li",
                                                                "data-component-content": "%7B%22text%22%3A%22%E2%80%A2%20Emergency%20evacuation%20procedures%20and%20drills%22%7D",
                                                                children: "• Emergency evacuation procedures and drills"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                                lineNumber: 204,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                lineNumber: 195,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                            lineNumber: 194,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV(Card, {
                                            "data-lov-id": "src/pages/campus/Facilities.tsx:208:16",
                                            "data-lov-name": "Card",
                                            "data-component-path": "src/pages/campus/Facilities.tsx",
                                            "data-component-line": "208",
                                            "data-component-file": "Facilities.tsx",
                                            "data-component-name": "Card",
                                            "data-component-content": "%7B%22className%22%3A%22bg-teal-50%20hover%3Ashadow-xl%20transition-all%20duration-300%22%7D",
                                            className: "bg-teal-50 hover:shadow-xl transition-all duration-300",
                                            children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                                "data-lov-id": "src/pages/campus/Facilities.tsx:209:18",
                                                "data-lov-name": "CardContent",
                                                "data-component-path": "src/pages/campus/Facilities.tsx",
                                                "data-component-line": "209",
                                                "data-component-file": "Facilities.tsx",
                                                "data-component-name": "CardContent",
                                                "data-component-content": "%7B%22className%22%3A%22p-6%22%7D",
                                                className: "p-6",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/pages/campus/Facilities.tsx:210:20",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/campus/Facilities.tsx",
                                                        "data-component-line": "210",
                                                        "data-component-file": "Facilities.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20mb-4%22%7D",
                                                        className: "flex items-center mb-4",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV(Heart, {
                                                                "data-lov-id": "src/pages/campus/Facilities.tsx:211:22",
                                                                "data-lov-name": "Heart",
                                                                "data-component-path": "src/pages/campus/Facilities.tsx",
                                                                "data-component-line": "211",
                                                                "data-component-file": "Facilities.tsx",
                                                                "data-component-name": "Heart",
                                                                "data-component-content": "%7B%22className%22%3A%22h-8%20w-8%20text-school-gold%20mr-3%22%7D",
                                                                className: "h-8 w-8 text-school-gold mr-3"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                                lineNumber: 211,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("h3", {
                                                                "data-lov-id": "src/pages/campus/Facilities.tsx:212:22",
                                                                "data-lov-name": "h3",
                                                                "data-component-path": "src/pages/campus/Facilities.tsx",
                                                                "data-component-line": "212",
                                                                "data-component-file": "Facilities.tsx",
                                                                "data-component-name": "h3",
                                                                "data-component-content": "%7B%22text%22%3A%22Health%20%26%20Wellness%22%2C%22className%22%3A%22text-xl%20font-bold%20text-school-brown%22%7D",
                                                                className: "text-xl font-bold text-school-brown",
                                                                children: "Health & Wellness"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                                lineNumber: 212,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("ul", {
                                                        "data-lov-id": "src/pages/campus/Facilities.tsx:214:20",
                                                        "data-lov-name": "ul",
                                                        "data-component-path": "src/pages/campus/Facilities.tsx",
                                                        "data-component-line": "214",
                                                        "data-component-file": "Facilities.tsx",
                                                        "data-component-name": "ul",
                                                        "data-component-content": "%7B%22className%22%3A%22space-y-2%20text-elegant-light%22%7D",
                                                        className: "space-y-2 text-elegant-light",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("li", {
                                                                "data-lov-id": "src/pages/campus/Facilities.tsx:215:22",
                                                                "data-lov-name": "li",
                                                                "data-component-path": "src/pages/campus/Facilities.tsx",
                                                                "data-component-line": "215",
                                                                "data-component-file": "Facilities.tsx",
                                                                "data-component-name": "li",
                                                                "data-component-content": "%7B%22text%22%3A%22%E2%80%A2%20Qualified%20nurse%20available%20during%20school%20hours%22%7D",
                                                                children: "• Qualified nurse available during school hours"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                                lineNumber: 215,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("li", {
                                                                "data-lov-id": "src/pages/campus/Facilities.tsx:216:22",
                                                                "data-lov-name": "li",
                                                                "data-component-path": "src/pages/campus/Facilities.tsx",
                                                                "data-component-line": "216",
                                                                "data-component-file": "Facilities.tsx",
                                                                "data-component-name": "li",
                                                                "data-component-content": "%7B%22text%22%3A%22%E2%80%A2%20Well-equipped%20first%20aid%20stations%22%7D",
                                                                children: "• Well-equipped first aid stations"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                                lineNumber: 216,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("li", {
                                                                "data-lov-id": "src/pages/campus/Facilities.tsx:217:22",
                                                                "data-lov-name": "li",
                                                                "data-component-path": "src/pages/campus/Facilities.tsx",
                                                                "data-component-line": "217",
                                                                "data-component-file": "Facilities.tsx",
                                                                "data-component-name": "li",
                                                                "data-component-content": "%7B%22text%22%3A%22%E2%80%A2%20Regular%20health%20checkups%20and%20vaccinations%22%7D",
                                                                children: "• Regular health checkups and vaccinations"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                                lineNumber: 217,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("li", {
                                                                "data-lov-id": "src/pages/campus/Facilities.tsx:218:22",
                                                                "data-lov-name": "li",
                                                                "data-component-path": "src/pages/campus/Facilities.tsx",
                                                                "data-component-line": "218",
                                                                "data-component-file": "Facilities.tsx",
                                                                "data-component-name": "li",
                                                                "data-component-content": "%7B%22text%22%3A%22%E2%80%A2%20Mental%20health%20and%20counseling%20support%22%7D",
                                                                children: "• Mental health and counseling support"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                                lineNumber: 218,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                                lineNumber: 209,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                            lineNumber: 208,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                                    lineNumber: 193,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                            lineNumber: 191,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                        lineNumber: 190,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
                    lineNumber: 189,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
            lineNumber: 91,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
};
_c = Facilities;
export default Facilities;
var _c;
$RefreshReg$(_c, "Facilities");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/pages/campus/Facilities.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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M0IsZUFBQTt3REFBQUMsaUJBQUE7d0RBQUFDLHVCQUFBO3dEQUFBQyx1QkFBQTt3REFBQUMsdUJBQUE7d0RBQUFDLHVCQUFBO3dEQUFBQywwQkFBQTt3REFBRUUsV0FBVTs7MEVBQ1osUUFBQ29CO2dFQUFDNUIsZUFBQTtnRUFBQUMsaUJBQUE7Z0VBQUFDLHVCQUFBO2dFQUFBQyx1QkFBQTtnRUFBQUMsdUJBQUE7Z0VBQUFDLHVCQUFBO2dFQUFBQywwQkFBQTswRUFBRTs7Ozs7OzBFQUNKLFFBQUNzQjtnRUFBQzVCLGVBQUE7Z0VBQUFDLGlCQUFBO2dFQUFBQyx1QkFBQTtnRUFBQUMsdUJBQUE7Z0VBQUFDLHVCQUFBO2dFQUFBQyx1QkFBQTtnRUFBQUMsMEJBQUE7MEVBQUU7Ozs7OzswRUFDSixRQUFDc0I7Z0VBQUM1QixlQUFBO2dFQUFBQyxpQkFBQTtnRUFBQUMsdUJBQUE7Z0VBQUFDLHVCQUFBO2dFQUFBQyx1QkFBQTtnRUFBQUMsdUJBQUE7Z0VBQUFDLDBCQUFBOzBFQUFFOzs7Ozs7MEVBQ0osUUFBQ3NCO2dFQUFDNUIsZUFBQTtnRUFBQUMsaUJBQUE7Z0VBQUFDLHVCQUFBO2dFQUFBQyx1QkFBQTtnRUFBQUMsdUJBQUE7Z0VBQUFDLHVCQUFBO2dFQUFBQywwQkFBQTswRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXMUI7S0F2Tk1qQjtBQXlOTixlQUFlQSxXQUFVIiwibmFtZXMiOlsiTGF5b3V0IiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQnV0dG9uIiwiTW9uaXRvciIsIkZsYXNrQ29uaWNhbCIsIlV0ZW5zaWxzIiwiQnVzIiwiU2hpZWxkIiwiSGVhcnQiLCJNdXNpYyIsIlBhbGV0dGUiLCJDYW1lcmEiLCJQaG9uZSIsIlBhZ2VCYW5uZXIiLCJzbWFydENsYXNzcm9vbVRlY2giLCJjb21wdXRlckxhYlN0dWRlbnRzIiwiYXVkaXRvcml1bVBlcmZvcm1hbmNlIiwiYXJ0TXVzaWNTdHVkaW8iLCJ0cmFuc3BvcnRhdGlvblN0dWRlbnRzIiwiaW5kaWFuU2Nob29sQ2FtcHVzIiwiRmFjaWxpdGllcyIsImZhY2lsaXRpZXMiLCJ0aXRsZSIsImljb24iLCJkZXNjcmlwdGlvbiIsImZlYXR1cmVzIiwiaW1hZ2UiLCJjb2xvciIsInF1aWNrU3RhdHMiLCJudW1iZXIiLCJsYWJlbCIsImRhdGEtbG92LWlkIiwiZGF0YS1sb3YtbmFtZSIsImRhdGEtY29tcG9uZW50LXBhdGgiLCJkYXRhLWNvbXBvbmVudC1saW5lIiwiZGF0YS1jb21wb25lbnQtZmlsZSIsImRhdGEtY29tcG9uZW50LW5hbWUiLCJkYXRhLWNvbXBvbmVudC1jb250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwic3VidGl0bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJzZWN0aW9uIiwibWFwIiwic3RhdCIsImluZGV4IiwicCIsImgyIiwiZmFjaWxpdHkiLCJpbWciLCJzcmMiLCJhbHQiLCJoMyIsImg0IiwiZmVhdHVyZSIsImkiLCJzaXplIiwidmFyaWFudCIsInVsIiwibGkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiRmFjaWxpdGllcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IE1vbml0b3IsIEZsYXNrQ29uaWNhbCwgVXRlbnNpbHMsIEJ1cywgU2hpZWxkLCBIZWFydCwgTXVzaWMsIFBhbGV0dGUsIFdpZmksIENhbWVyYSwgTWFwUGluLCBQaG9uZSB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCBQYWdlQmFubmVyIGZyb20gXCJAL2NvbXBvbmVudHMvUGFnZUJhbm5lclwiO1xuaW1wb3J0IHNtYXJ0Q2xhc3Nyb29tVGVjaCBmcm9tIFwiQC9hc3NldHMvc21hcnQtY2xhc3Nyb29tLXRlY2guanBnXCI7XG5pbXBvcnQgY29tcHV0ZXJMYWJTdHVkZW50cyBmcm9tIFwiQC9hc3NldHMvY29tcHV0ZXItbGFiLXN0dWRlbnRzLmpwZ1wiO1xuaW1wb3J0IGF1ZGl0b3JpdW1QZXJmb3JtYW5jZSBmcm9tIFwiQC9hc3NldHMvYXVkaXRvcml1bS1wZXJmb3JtYW5jZS5qcGdcIjtcbmltcG9ydCBhcnRNdXNpY1N0dWRpbyBmcm9tIFwiQC9hc3NldHMvYXJ0LW11c2ljLXN0dWRpby5qcGdcIjtcbmltcG9ydCB0cmFuc3BvcnRhdGlvblN0dWRlbnRzIGZyb20gXCJAL2Fzc2V0cy90cmFuc3BvcnRhdGlvbi1zdHVkZW50cy5qcGdcIjtcbmltcG9ydCBpbmRpYW5TY2hvb2xDYW1wdXMgZnJvbSBcIkAvYXNzZXRzL2luZGlhbi1zY2hvb2wtY2FtcHVzLmpwZ1wiO1xuXG5jb25zdCBGYWNpbGl0aWVzID0gKCkgPT4ge1xuICBjb25zdCBmYWNpbGl0aWVzID0gW1xuICAgIHsgXG4gICAgICB0aXRsZTogXCJTbWFydCBDbGFzc3Jvb21zXCIsIFxuICAgICAgaWNvbjogTW9uaXRvciwgXG4gICAgICBkZXNjcmlwdGlvbjogXCJJbnRlcmFjdGl2ZSB3aGl0ZWJvYXJkcywgcHJvamVjdG9ycywgYW5kIG1vZGVybiBBViBlcXVpcG1lbnQgZm9yIGVuZ2FnaW5nIGxlc3NvbnNcIixcbiAgICAgIGZlYXR1cmVzOiBbXCJJbnRlcmFjdGl2ZSBXaGl0ZWJvYXJkc1wiLCBcIkhpZ2gtU3BlZWQgSW50ZXJuZXRcIiwgXCJBViBFcXVpcG1lbnRcIiwgXCJBaXIgQ29uZGl0aW9uaW5nXCJdLFxuICAgICAgaW1hZ2U6IHNtYXJ0Q2xhc3Nyb29tVGVjaCxcbiAgICAgIGNvbG9yOiBcImJnLWJsdWUtNTBcIlxuICAgIH0sXG4gICAgeyBcbiAgICAgIHRpdGxlOiBcIlNjaWVuY2UgJiBDb21wdXRlciBMYWJzXCIsIFxuICAgICAgaWNvbjogRmxhc2tDb25pY2FsLCBcbiAgICAgIGRlc2NyaXB0aW9uOiBcIldlbGwtZXF1aXBwZWQgbGFib3JhdG9yaWVzIGZvciBoYW5kcy1vbiBsZWFybmluZyBpbiBwaHlzaWNzLCBjaGVtaXN0cnksIGJpb2xvZ3ksIGFuZCBjb21wdXRlciBzY2llbmNlXCIsXG4gICAgICBmZWF0dXJlczogW1wiTGF0ZXN0IEVxdWlwbWVudFwiLCBcIlNhZmV0eSBQcm90b2NvbHNcIiwgXCJJbmRpdmlkdWFsIFdvcmtzdGF0aW9uc1wiLCBcIkV4cGVydCBTdXBlcnZpc2lvblwiXSxcbiAgICAgIGltYWdlOiBjb21wdXRlckxhYlN0dWRlbnRzLFxuICAgICAgY29sb3I6IFwiYmctZ3JlZW4tNTBcIlxuICAgIH0sXG4gICAgeyBcbiAgICAgIHRpdGxlOiBcIk11bHRpcHVycG9zZSBBdWRpdG9yaXVtXCIsIFxuICAgICAgaWNvbjogTXVzaWMsIFxuICAgICAgZGVzY3JpcHRpb246IFwiU3RhdGUtb2YtdGhlLWFydCBhdWRpdG9yaXVtIGZvciBjdWx0dXJhbCBldmVudHMsIGFzc2VtYmxpZXMsIGFuZCBwZXJmb3JtYW5jZXNcIixcbiAgICAgIGZlYXR1cmVzOiBbXCI1MDAgU2VhdGluZyBDYXBhY2l0eVwiLCBcIlByb2Zlc3Npb25hbCBTb3VuZCBTeXN0ZW1cIiwgXCJTdGFnZSBMaWdodGluZ1wiLCBcIkFDIEZhY2lsaXR5XCJdLFxuICAgICAgaW1hZ2U6IGF1ZGl0b3JpdW1QZXJmb3JtYW5jZSxcbiAgICAgIGNvbG9yOiBcImJnLXB1cnBsZS01MFwiXG4gICAgfSxcbiAgICB7IFxuICAgICAgdGl0bGU6IFwiSHlnaWVuaWMgQ2FmZXRlcmlhXCIsIFxuICAgICAgaWNvbjogVXRlbnNpbHMsIFxuICAgICAgZGVzY3JpcHRpb246IFwiQ2xlYW4sIHNwYWNpb3VzIGRpbmluZyBhcmVhIHNlcnZpbmcgbnV0cml0aW91cyBtZWFscyBhbmQgaGVhbHRoeSBzbmFja3NcIixcbiAgICAgIGZlYXR1cmVzOiBbXCJOdXRyaXRpb3VzIE1lYWxzXCIsIFwiSHlnaWVuaWMgUHJlcGFyYXRpb25cIiwgXCJTcGFjaW91cyBTZWF0aW5nXCIsIFwiQWZmb3JkYWJsZSBQcmljaW5nXCJdLFxuICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NTUzOTYyNzMtMzY3ZWE0ZWI0ZGI1P3c9ODAwJmg9NjAwJmZpdD1jcm9wXCIsXG4gICAgICBjb2xvcjogXCJiZy1vcmFuZ2UtNTBcIlxuICAgIH0sXG4gICAgeyBcbiAgICAgIHRpdGxlOiBcIkFydCAmIE11c2ljIFJvb21zXCIsIFxuICAgICAgaWNvbjogUGFsZXR0ZSwgXG4gICAgICBkZXNjcmlwdGlvbjogXCJEZWRpY2F0ZWQgc3BhY2VzIGZvciBjcmVhdGl2ZSBleHByZXNzaW9uIHRocm91Z2ggYXJ0LCBjcmFmdCwgYW5kIG11c2ljXCIsXG4gICAgICBmZWF0dXJlczogW1wiQXJ0IFN1cHBsaWVzXCIsIFwiTXVzaWNhbCBJbnN0cnVtZW50c1wiLCBcIk5hdHVyYWwgTGlnaHRpbmdcIiwgXCJEaXNwbGF5IEFyZWFzXCJdLFxuICAgICAgaW1hZ2U6IGFydE11c2ljU3R1ZGlvLFxuICAgICAgY29sb3I6IFwiYmctcGluay01MFwiXG4gICAgfSxcbiAgICB7IFxuICAgICAgdGl0bGU6IFwiVHJhbnNwb3J0YXRpb25cIiwgXG4gICAgICBpY29uOiBCdXMsIFxuICAgICAgZGVzY3JpcHRpb246IFwiU2FmZSBhbmQgcmVsaWFibGUgc2Nob29sIGJ1cyBzZXJ2aWNlIGNvdmVyaW5nIG1ham9yIGFyZWFzIG9mIEJlbmdhbHVydVwiLFxuICAgICAgZmVhdHVyZXM6IFtcIkdQUyBUcmFja2luZ1wiLCBcIlRyYWluZWQgRHJpdmVyc1wiLCBcIlJvdXRlIENvdmVyYWdlXCIsIFwiU2FmZXR5IE1lYXN1cmVzXCJdLFxuICAgICAgaW1hZ2U6IHRyYW5zcG9ydGF0aW9uU3R1ZGVudHMsXG4gICAgICBjb2xvcjogXCJiZy15ZWxsb3ctNTBcIlxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiU2VjdXJpdHkgJiBTYWZldHlcIixcbiAgICAgIGljb246IFNoaWVsZCxcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkNvbXByZWhlbnNpdmUgc2VjdXJpdHkgc3lzdGVtIHdpdGggQ0NUViBzdXJ2ZWlsbGFuY2UgYW5kIHRyYWluZWQgc2VjdXJpdHkgcGVyc29ubmVsXCIsXG4gICAgICBmZWF0dXJlczogW1wiMjQvNyBDQ1RWXCIsIFwiU2VjdXJpdHkgR3VhcmRzXCIsIFwiVmlzaXRvciBNYW5hZ2VtZW50XCIsIFwiRW1lcmdlbmN5IFByb3RvY29sc1wiXSxcbiAgICAgIGltYWdlOiBpbmRpYW5TY2hvb2xDYW1wdXMsXG4gICAgICBjb2xvcjogXCJiZy1yZWQtNTBcIlxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiSGVhbHRoICYgV2VsbG5lc3NcIixcbiAgICAgIGljb246IEhlYXJ0LFxuICAgICAgZGVzY3JpcHRpb246IFwiRmlyc3QgYWlkIGZhY2lsaXR5IGFuZCB3ZWxsbmVzcyByb29tIGZvciBzdHVkZW50IGhlYWx0aCBhbmQgbWVkaWNhbCBlbWVyZ2VuY2llc1wiLFxuICAgICAgZmVhdHVyZXM6IFtcIlRyYWluZWQgTnVyc2VcIiwgXCJGaXJzdCBBaWQgU3VwcGxpZXNcIiwgXCJFbWVyZ2VuY3kgQ2FyZVwiLCBcIkhlYWx0aCBSZWNvcmRzXCJdLFxuICAgICAgaW1hZ2U6IGluZGlhblNjaG9vbENhbXB1cyxcbiAgICAgIGNvbG9yOiBcImJnLXRlYWwtNTBcIlxuICAgIH1cbiAgXTtcblxuICBjb25zdCBxdWlja1N0YXRzID0gW1xuICAgIHsgbnVtYmVyOiBcIjMwK1wiLCBsYWJlbDogXCJTbWFydCBDbGFzc3Jvb21zXCIsIGljb246IE1vbml0b3IgfSxcbiAgICB7IG51bWJlcjogXCI1XCIsIGxhYmVsOiBcIlNjaWVuY2UgTGFic1wiLCBpY29uOiBGbGFza0NvbmljYWwgfSxcbiAgICB7IG51bWJlcjogXCI1MDBcIiwgbGFiZWw6IFwiQXVkaXRvcml1bSBTZWF0c1wiLCBpY29uOiBNdXNpYyB9LFxuICAgIHsgbnVtYmVyOiBcIjE1XCIsIGxhYmVsOiBcIkJ1cyBSb3V0ZXNcIiwgaWNvbjogQnVzIH1cbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1iYWNrZ3JvdW5kXCI+XG4gICAgICAgIDxQYWdlQmFubmVyXG4gICAgICAgICAgdGl0bGU9XCJDYW1wdXMgRmFjaWxpdGllc1wiXG4gICAgICAgICAgc3VidGl0bGU9XCJUaG91Z2h0ZnVsbHkgZGVzaWduZWQgY2FtcHVzIHByb21vdGluZyBhY2FkZW1pYyBzdWNjZXNzLCBjcmVhdGl2aXR5LCBhbmQgY29tZm9ydCBpbiBhIHNlY3VyZSBlbnZpcm9ubWVudFwiXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlPXtpbmRpYW5TY2hvb2xDYW1wdXN9XG4gICAgICAgIC8+XG5cbiAgICAgICAgey8qIFF1aWNrIFN0YXRzICovfVxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNiBiZy1ncmFkaWVudC10by1yIGZyb20tYW1iZXItNTAgdG8tb3JhbmdlLTUwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTQgZ2FwLThcIj5cbiAgICAgICAgICAgICAge3F1aWNrU3RhdHMubWFwKChzdGF0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxDYXJkIGtleT17c3RhdC5sYWJlbH0gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgaG92ZXI6c2hhZG93LXhsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBob3Zlci1zY2FsZSBhbmltYXRlLWZhZGUtaW5cIj5cbiAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zY2hvb2wtZ29sZCB3LTE2IGgtMTYgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG14LWF1dG8gbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzdGF0Lmljb24gY2xhc3NOYW1lPVwiaC04IHctOCB0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtc2Nob29sLWJyb3duIG1iLTJcIj57c3RhdC5udW1iZXJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZWxlZ2FudC1saWdodCBmb250LW1lZGl1bVwiPntzdGF0LmxhYmVsfTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgey8qIEZhY2lsaXRpZXMgR3JpZCB3aXRoIEltYWdlcyBhbmQgSG92ZXIgRWZmZWN0cyAqL31cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gdGV4dC1jZW50ZXIgbWItMTJcIj5PdXIgRmFjaWxpdGllczwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbGc6Z3JpZC1jb2xzLTIgZ2FwLThcIj5cbiAgICAgICAgICAgICAge2ZhY2lsaXRpZXMubWFwKChmYWNpbGl0eSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8Q2FyZCBrZXk9e2ZhY2lsaXR5LnRpdGxlfSBjbGFzc05hbWU9e2Ake2ZhY2lsaXR5LmNvbG9yfSBncm91cCBvdmVyZmxvdy1oaWRkZW4gaG92ZXI6c2hhZG93LXhsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBob3Zlci1zY2FsZSBhbmltYXRlLWZhZGUtaW5gfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6ZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnctMS8zIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ZhY2lsaXR5LmltYWdlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17ZmFjaWxpdHkudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC00OCBtZDpoLWZ1bGwgb2JqZWN0LWNvdmVyIGdyb3VwLWhvdmVyOnNjYWxlLTEwNSB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWJsYWNrLzIwIGdyb3VwLWhvdmVyOmJnLWJsYWNrLzEwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTQgcmlnaHQtNCBiZy1zY2hvb2wtZ29sZCBwLTIgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmFjaWxpdHkuaWNvbiBjbGFzc05hbWU9XCJoLTYgdy02IHRleHQtd2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDp3LTIvM1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXNjaG9vbC1icm93biBtYi0zXCI+e2ZhY2lsaXR5LnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWVsZWdhbnQtbGlnaHQgbWItNCBsZWFkaW5nLXJlbGF4ZWRcIj57ZmFjaWxpdHkuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1zY2hvb2wtYnJvd25cIj5LZXkgRmVhdHVyZXM6PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZhY2lsaXR5LmZlYXR1cmVzLm1hcCgoZmVhdHVyZSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtc20gdGV4dC1lbGVnYW50LWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yIGgtMiBiZy1zY2hvb2wtZ29sZCByb3VuZGVkLWZ1bGwgbXItMlwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmVhdHVyZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgey8qIFZpcnR1YWwgVG91ciBDVEEgKi99XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTE2IGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibHVlLTUwIHRvLWluZGlnby01MFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwibWF4LXctNHhsIG14LWF1dG8gc2hhZG93LWxnXCI+XG4gICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLTggbGc6cC0xMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2Nob29sLWdvbGQgdy0yMCBoLTIwIHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBteC1hdXRvIG1iLTZcIj5cbiAgICAgICAgICAgICAgICAgIDxDYW1lcmEgY2xhc3NOYW1lPVwiaC0xMCB3LTEwIHRleHQtd2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gbWItNlwiPkV4cGVyaWVuY2UgT3VyIENhbXB1czwvaDI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LWVsZWdhbnQtbGlnaHQgbWItOCBtYXgtdy0yeGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgVGFrZSBhIHZpcnR1YWwgdG91ciBvZiBvdXIgZmFjaWxpdGllcyBvciBzY2hlZHVsZSBhIHZpc2l0IHRvIHNlZSBvdXIgY2FtcHVzIGluIHBlcnNvbi4gXG4gICAgICAgICAgICAgICAgICBEaXNjb3ZlciB0aGUgc3BhY2VzIHdoZXJlIGxlYXJuaW5nIGNvbWVzIGFsaXZlIVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgZ2FwLTQganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cImxnXCIgY2xhc3NOYW1lPVwiYmctc2Nob29sLWdvbGQgaG92ZXI6Ymctc2Nob29sLWJyb3duIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPENhbWVyYSBjbGFzc05hbWU9XCJoLTUgdy01IG1yLTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICBWaXJ0dWFsIENhbXB1cyBUb3VyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cImxnXCIgdmFyaWFudD1cIm91dGxpbmVcIiBjbGFzc05hbWU9XCJib3JkZXItc2Nob29sLWJyb3duIHRleHQtc2Nob29sLWJyb3duIGhvdmVyOmJnLXNjaG9vbC1icm93biBob3Zlcjp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxQaG9uZSBjbGFzc05hbWU9XCJoLTUgdy01IG1yLTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICBTY2hlZHVsZSBhIFZpc2l0XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIHsvKiBTYWZldHkgJiBTZWN1cml0eSBIaWdobGlnaHQgKi99XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTE2XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTR4bCBteC1hdXRvXCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gdGV4dC1jZW50ZXIgbWItMTJcIj5TYWZldHkgJiBTZWN1cml0eTwvaDI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMiBnYXAtOFwiPlxuICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImJnLXJlZC01MCBob3ZlcjpzaGFkb3cteGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCI+XG4gICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxTaGllbGQgY2xhc3NOYW1lPVwiaC04IHctOCB0ZXh0LXNjaG9vbC1nb2xkIG1yLTNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXNjaG9vbC1icm93blwiPlNlY3VyaXR5IE1lYXN1cmVzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS15LTIgdGV4dC1lbGVnYW50LWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPuKAoiAyNC83IENDVFYgc3VydmVpbGxhbmNlIHRocm91Z2hvdXQgY2FtcHVzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+4oCiIFRyYWluZWQgc2VjdXJpdHkgcGVyc29ubmVsIGF0IGFsbCBlbnRyeSBwb2ludHM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT7igKIgVmlzaXRvciBtYW5hZ2VtZW50IGFuZCBJRCB2ZXJpZmljYXRpb24gc3lzdGVtPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+4oCiIEVtZXJnZW5jeSBldmFjdWF0aW9uIHByb2NlZHVyZXMgYW5kIGRyaWxsczwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJiZy10ZWFsLTUwIGhvdmVyOnNoYWRvdy14bCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEhlYXJ0IGNsYXNzTmFtZT1cImgtOCB3LTggdGV4dC1zY2hvb2wtZ29sZCBtci0zXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgdGV4dC1zY2hvb2wtYnJvd25cIj5IZWFsdGggJiBXZWxsbmVzczwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3BhY2UteS0yIHRleHQtZWxlZ2FudC1saWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT7igKIgUXVhbGlmaWVkIG51cnNlIGF2YWlsYWJsZSBkdXJpbmcgc2Nob29sIGhvdXJzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+4oCiIFdlbGwtZXF1aXBwZWQgZmlyc3QgYWlkIHN0YXRpb25zPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+4oCiIFJlZ3VsYXIgaGVhbHRoIGNoZWNrdXBzIGFuZCB2YWNjaW5hdGlvbnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT7igKIgTWVudGFsIGhlYWx0aCBhbmQgY291bnNlbGluZyBzdXBwb3J0PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZhY2lsaXRpZXM7XG4iXSwiZmlsZSI6Ii9ob21lL3NqcnNoOTE2L3B1YmxpY19odG1sL3NyYy9wYWdlcy9jYW1wdXMvRmFjaWxpdGllcy50c3gifQ==