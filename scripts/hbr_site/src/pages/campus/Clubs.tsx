import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/campus/Clubs.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import Layout from "/src/components/Layout.tsx";
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { Music, Palette, Camera, Mic, FlaskConical, BookOpen, Leaf, Users } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
import PageBanner from "/src/components/PageBanner.tsx";
import clubsActivities from "/src/assets/clubs-activities.jpg?import";
const Clubs = ()=>{
    const clubs = [
        {
            name: "Science Club",
            icon: FlaskConical,
            description: "Explore the wonders of science through experiments, projects, and scientific inquiry",
            motto: "Discover, Experiment, Innovate",
            activities: [
                "Weekly Experiments",
                "Science Fair",
                "Lab Tours"
            ],
            meetingDay: "Wednesdays",
            color: "bg-blue-50"
        },
        {
            name: "Literary Club",
            icon: BookOpen,
            description: "Develop writing skills, poetry, and literary appreciation through creative expression",
            motto: "Words Have Power",
            activities: [
                "Creative Writing",
                "Poetry Sessions",
                "Book Reviews"
            ],
            meetingDay: "Tuesdays",
            color: "bg-purple-50"
        },
        {
            name: "Eco Warriors",
            icon: Leaf,
            description: "Environmental consciousness and sustainability through green initiatives and awareness",
            motto: "Save Today, Secure Tomorrow",
            activities: [
                "Tree Plantation",
                "Recycling Drives",
                "Green Campaigns"
            ],
            meetingDay: "Fridays",
            color: "bg-green-50"
        },
        {
            name: "Music & Dance",
            icon: Music,
            description: "Express creativity through various musical instruments and dance forms",
            motto: "Rhythm of Life",
            activities: [
                "Instrument Training",
                "Dance Practice",
                "Cultural Shows"
            ],
            meetingDay: "Thursdays",
            color: "bg-pink-50"
        },
        {
            name: "Art & Craft",
            icon: Palette,
            description: "Visual arts, handicrafts, and creative projects to unleash artistic potential",
            motto: "Create, Inspire, Express",
            activities: [
                "Painting Workshops",
                "Craft Projects",
                "Art Exhibitions"
            ],
            meetingDay: "Mondays",
            color: "bg-orange-50"
        },
        {
            name: "Drama & Theatre",
            icon: Mic,
            description: "Theatre performances, public speaking, and dramatic arts development",
            motto: "All the World's a Stage",
            activities: [
                "Script Reading",
                "Performance Practice",
                "Stage Shows"
            ],
            meetingDay: "Saturdays",
            color: "bg-red-50"
        },
        {
            name: "Photography Club",
            icon: Camera,
            description: "Capture moments, learn photography techniques, and document school events",
            motto: "Frame the Moment",
            activities: [
                "Photo Walks",
                "Editing Sessions",
                "Exhibition Prep"
            ],
            meetingDay: "Wednesdays",
            color: "bg-yellow-50"
        },
        {
            name: "Debate Forum",
            icon: Users,
            description: "Public speaking, debates, and developing communication and critical thinking skills",
            motto: "Speak with Confidence",
            activities: [
                "Weekly Debates",
                "Speech Practice",
                "Inter-school Competitions"
            ],
            meetingDay: "Fridays",
            color: "bg-indigo-50"
        }
    ];
    const upcomingEvents = [
        {
            event: "Science Exhibition",
            date: "Jan 25",
            club: "Science Club"
        },
        {
            event: "Annual Drama Show",
            date: "Feb 10",
            club: "Drama Club"
        },
        {
            event: "Art Gallery Opening",
            date: "Feb 20",
            club: "Art Club"
        },
        {
            event: "Inter-school Debate",
            date: "Mar 5",
            club: "Debate Forum"
        }
    ];
    return /*#__PURE__*/ _jsxDEV(Layout, {
        "data-lov-id": "src/pages/campus/Clubs.tsx:93:4",
        "data-lov-name": "Layout",
        "data-component-path": "src/pages/campus/Clubs.tsx",
        "data-component-line": "93",
        "data-component-file": "Clubs.tsx",
        "data-component-name": "Layout",
        "data-component-content": "%7B%7D",
        children: /*#__PURE__*/ _jsxDEV("div", {
            "data-lov-id": "src/pages/campus/Clubs.tsx:94:6",
            "data-lov-name": "div",
            "data-component-path": "src/pages/campus/Clubs.tsx",
            "data-component-line": "94",
            "data-component-file": "Clubs.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22min-h-screen%20bg-background%22%7D",
            className: "min-h-screen bg-background",
            children: [
                /*#__PURE__*/ _jsxDEV(PageBanner, {
                    "data-lov-id": "src/pages/campus/Clubs.tsx:95:8",
                    "data-lov-name": "PageBanner",
                    "data-component-path": "src/pages/campus/Clubs.tsx",
                    "data-component-line": "95",
                    "data-component-file": "Clubs.tsx",
                    "data-component-name": "PageBanner",
                    "data-component-content": "%7B%7D",
                    title: "Clubs & Activities",
                    subtitle: "Co-curricular activities that empower students to explore interests and develop leadership skills",
                    backgroundImage: clubsActivities
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("section", {
                    "data-lov-id": "src/pages/campus/Clubs.tsx:102:8",
                    "data-lov-name": "section",
                    "data-component-path": "src/pages/campus/Clubs.tsx",
                    "data-component-line": "102",
                    "data-component-file": "Clubs.tsx",
                    "data-component-name": "section",
                    "data-component-content": "%7B%22className%22%3A%22py-16%22%7D",
                    className: "py-16",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/campus/Clubs.tsx:103:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/campus/Clubs.tsx",
                        "data-component-line": "103",
                        "data-component-file": "Clubs.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                        className: "container mx-auto px-4",
                        children: [
                            /*#__PURE__*/ _jsxDEV("h2", {
                                "data-lov-id": "src/pages/campus/Clubs.tsx:104:12",
                                "data-lov-name": "h2",
                                "data-component-path": "src/pages/campus/Clubs.tsx",
                                "data-component-line": "104",
                                "data-component-file": "Clubs.tsx",
                                "data-component-name": "h2",
                                "data-component-content": "%7B%22text%22%3A%22Active%20Student%20Clubs%22%2C%22className%22%3A%22text-3xl%20font-bold%20text-school-brown%20text-center%20mb-12%22%7D",
                                className: "text-3xl font-bold text-school-brown text-center mb-12",
                                children: "Active Student Clubs"
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/pages/campus/Clubs.tsx:105:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/pages/campus/Clubs.tsx",
                                "data-component-line": "105",
                                "data-component-file": "Clubs.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-2%20lg%3Agrid-cols-3%20gap-8%22%7D",
                                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                                children: clubs.map((club, index)=>/*#__PURE__*/ _jsxDEV(Card, {
                                        "data-lov-id": "src/pages/campus/Clubs.tsx:107:16",
                                        "data-lov-name": "Card",
                                        "data-component-path": "src/pages/campus/Clubs.tsx",
                                        "data-component-line": "107",
                                        "data-component-file": "Clubs.tsx",
                                        "data-component-name": "Card",
                                        "data-component-content": "%7B%7D",
                                        className: `${club.color} group hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in overflow-hidden`,
                                        children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                            "data-lov-id": "src/pages/campus/Clubs.tsx:108:18",
                                            "data-lov-name": "CardContent",
                                            "data-component-path": "src/pages/campus/Clubs.tsx",
                                            "data-component-line": "108",
                                            "data-component-file": "Clubs.tsx",
                                            "data-component-name": "CardContent",
                                            "data-component-content": "%7B%22className%22%3A%22p-6%20relative%22%7D",
                                            className: "p-6 relative",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/campus/Clubs.tsx:109:20",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/campus/Clubs.tsx",
                                                    "data-component-line": "109",
                                                    "data-component-file": "Clubs.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22absolute%20top-4%20right-4%20opacity-10%20group-hover%3Aopacity-20%20transition-opacity%20duration-300%22%7D",
                                                    className: "absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300",
                                                    children: /*#__PURE__*/ _jsxDEV(club.icon, {
                                                        "data-lov-id": "src/pages/campus/Clubs.tsx:110:22",
                                                        "data-lov-name": "club.icon",
                                                        "data-component-path": "src/pages/campus/Clubs.tsx",
                                                        "data-component-line": "110",
                                                        "data-component-file": "Clubs.tsx",
                                                        "data-component-name": "club.icon",
                                                        "data-component-content": "%7B%22className%22%3A%22h-16%20w-16%20text-school-brown%22%7D",
                                                        className: "h-16 w-16 text-school-brown"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/campus/Clubs.tsx:112:20",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/campus/Clubs.tsx",
                                                    "data-component-line": "112",
                                                    "data-component-file": "Clubs.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22bg-school-gold%20w-16%20h-16%20rounded-full%20flex%20items-center%20justify-center%20mb-4%20group-hover%3Ascale-110%20transition-transform%20duration-300%22%7D",
                                                    className: "bg-school-gold w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300",
                                                    children: /*#__PURE__*/ _jsxDEV(club.icon, {
                                                        "data-lov-id": "src/pages/campus/Clubs.tsx:113:22",
                                                        "data-lov-name": "club.icon",
                                                        "data-component-path": "src/pages/campus/Clubs.tsx",
                                                        "data-component-line": "113",
                                                        "data-component-file": "Clubs.tsx",
                                                        "data-component-name": "club.icon",
                                                        "data-component-content": "%7B%22className%22%3A%22h-8%20w-8%20text-white%22%7D",
                                                        className: "h-8 w-8 text-white"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("h3", {
                                                    "data-lov-id": "src/pages/campus/Clubs.tsx:115:20",
                                                    "data-lov-name": "h3",
                                                    "data-component-path": "src/pages/campus/Clubs.tsx",
                                                    "data-component-line": "115",
                                                    "data-component-file": "Clubs.tsx",
                                                    "data-component-name": "h3",
                                                    "data-component-content": "%7B%22className%22%3A%22text-xl%20font-bold%20text-school-brown%20mb-3%22%7D",
                                                    className: "text-xl font-bold text-school-brown mb-3",
                                                    children: club.name
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/campus/Clubs.tsx:116:20",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/campus/Clubs.tsx",
                                                    "data-component-line": "116",
                                                    "data-component-file": "Clubs.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22className%22%3A%22text-elegant-light%20mb-4%20leading-relaxed%22%7D",
                                                    className: "text-elegant-light mb-4 leading-relaxed",
                                                    children: club.description
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/campus/Clubs.tsx:119:20",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/campus/Clubs.tsx",
                                                    "data-component-line": "119",
                                                    "data-component-file": "Clubs.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22opacity-0%20group-hover%3Aopacity-100%20transition-opacity%20duration-300%20mb-4%22%7D",
                                                    className: "opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4",
                                                    children: /*#__PURE__*/ _jsxDEV("p", {
                                                        "data-lov-id": "src/pages/campus/Clubs.tsx:120:22",
                                                        "data-lov-name": "p",
                                                        "data-component-path": "src/pages/campus/Clubs.tsx",
                                                        "data-component-line": "120",
                                                        "data-component-file": "Clubs.tsx",
                                                        "data-component-name": "p",
                                                        "data-component-content": "%7B%22text%22%3A%22%5C%22%20%5C%22%22%2C%22className%22%3A%22text-school-gold%20font-semibold%20italic%22%7D",
                                                        className: "text-school-gold font-semibold italic",
                                                        children: [
                                                            '"',
                                                            club.motto,
                                                            '"'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/campus/Clubs.tsx:123:20",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/campus/Clubs.tsx",
                                                    "data-component-line": "123",
                                                    "data-component-file": "Clubs.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22space-y-3%22%7D",
                                                    className: "space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            "data-lov-id": "src/pages/campus/Clubs.tsx:124:22",
                                                            "data-lov-name": "div",
                                                            "data-component-path": "src/pages/campus/Clubs.tsx",
                                                            "data-component-line": "124",
                                                            "data-component-file": "Clubs.tsx",
                                                            "data-component-name": "div",
                                                            "data-component-content": "%7B%7D",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV("h4", {
                                                                    "data-lov-id": "src/pages/campus/Clubs.tsx:125:24",
                                                                    "data-lov-name": "h4",
                                                                    "data-component-path": "src/pages/campus/Clubs.tsx",
                                                                    "data-component-line": "125",
                                                                    "data-component-file": "Clubs.tsx",
                                                                    "data-component-name": "h4",
                                                                    "data-component-content": "%7B%22text%22%3A%22Activities%3A%22%2C%22className%22%3A%22font-semibold%20text-school-brown%20mb-2%22%7D",
                                                                    className: "font-semibold text-school-brown mb-2",
                                                                    children: "Activities:"
                                                                }, void 0, false, {
                                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                                                                    lineNumber: 125,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                    "data-lov-id": "src/pages/campus/Clubs.tsx:126:24",
                                                                    "data-lov-name": "div",
                                                                    "data-component-path": "src/pages/campus/Clubs.tsx",
                                                                    "data-component-line": "126",
                                                                    "data-component-file": "Clubs.tsx",
                                                                    "data-component-name": "div",
                                                                    "data-component-content": "%7B%22className%22%3A%22flex%20flex-wrap%20gap-1%22%7D",
                                                                    className: "flex flex-wrap gap-1",
                                                                    children: club.activities.map((activity, i)=>/*#__PURE__*/ _jsxDEV("span", {
                                                                            "data-lov-id": "src/pages/campus/Clubs.tsx:128:28",
                                                                            "data-lov-name": "span",
                                                                            "data-component-path": "src/pages/campus/Clubs.tsx",
                                                                            "data-component-line": "128",
                                                                            "data-component-file": "Clubs.tsx",
                                                                            "data-component-name": "span",
                                                                            "data-component-content": "%7B%22className%22%3A%22bg-white%2F70%20text-school-brown%20px-2%20py-1%20rounded%20text-xs%20font-medium%22%7D",
                                                                            className: "bg-white/70 text-school-brown px-2 py-1 rounded text-xs font-medium",
                                                                            children: activity
                                                                        }, i, false, {
                                                                            fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                                                                            lineNumber: 128,
                                                                            columnNumber: 29
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                                                                    lineNumber: 126,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                                                            lineNumber: 124,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            "data-lov-id": "src/pages/campus/Clubs.tsx:134:22",
                                                            "data-lov-name": "div",
                                                            "data-component-path": "src/pages/campus/Clubs.tsx",
                                                            "data-component-line": "134",
                                                            "data-component-file": "Clubs.tsx",
                                                            "data-component-name": "div",
                                                            "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV("span", {
                                                                    "data-lov-id": "src/pages/campus/Clubs.tsx:135:24",
                                                                    "data-lov-name": "span",
                                                                    "data-component-path": "src/pages/campus/Clubs.tsx",
                                                                    "data-component-line": "135",
                                                                    "data-component-file": "Clubs.tsx",
                                                                    "data-component-name": "span",
                                                                    "data-component-content": "%7B%22text%22%3A%22Meets%3A%22%2C%22className%22%3A%22text-sm%20text-elegant-light%22%7D",
                                                                    className: "text-sm text-elegant-light",
                                                                    children: [
                                                                        "Meets: ",
                                                                        club.meetingDay
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                                                                    lineNumber: 135,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV(Button, {
                                                                    "data-lov-id": "src/pages/campus/Clubs.tsx:136:24",
                                                                    "data-lov-name": "Button",
                                                                    "data-component-path": "src/pages/campus/Clubs.tsx",
                                                                    "data-component-line": "136",
                                                                    "data-component-file": "Clubs.tsx",
                                                                    "data-component-name": "Button",
                                                                    "data-component-content": "%7B%22text%22%3A%22Join%20Club%22%2C%22className%22%3A%22bg-school-brown%20hover%3Abg-school-gold%20text-white%22%7D",
                                                                    size: "sm",
                                                                    className: "bg-school-brown hover:bg-school-gold text-white",
                                                                    children: "Join Club"
                                                                }, void 0, false, {
                                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                                                                    lineNumber: 136,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                                            lineNumber: 108,
                                            columnNumber: 19
                                        }, this)
                                    }, club.name, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                                        lineNumber: 107,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("section", {
                    "data-lov-id": "src/pages/campus/Clubs.tsx:149:8",
                    "data-lov-name": "section",
                    "data-component-path": "src/pages/campus/Clubs.tsx",
                    "data-component-line": "149",
                    "data-component-file": "Clubs.tsx",
                    "data-component-name": "section",
                    "data-component-content": "%7B%22className%22%3A%22py-16%20bg-gradient-to-r%20from-amber-50%20to-orange-50%22%7D",
                    className: "py-16 bg-gradient-to-r from-amber-50 to-orange-50",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/campus/Clubs.tsx:150:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/campus/Clubs.tsx",
                        "data-component-line": "150",
                        "data-component-file": "Clubs.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                        className: "container mx-auto px-4",
                        children: [
                            /*#__PURE__*/ _jsxDEV("h2", {
                                "data-lov-id": "src/pages/campus/Clubs.tsx:151:12",
                                "data-lov-name": "h2",
                                "data-component-path": "src/pages/campus/Clubs.tsx",
                                "data-component-line": "151",
                                "data-component-file": "Clubs.tsx",
                                "data-component-name": "h2",
                                "data-component-content": "%7B%22text%22%3A%22Upcoming%20Club%20Events%22%2C%22className%22%3A%22text-3xl%20font-bold%20text-school-brown%20text-center%20mb-12%22%7D",
                                className: "text-3xl font-bold text-school-brown text-center mb-12",
                                children: "Upcoming Club Events"
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/pages/campus/Clubs.tsx:152:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/pages/campus/Clubs.tsx",
                                "data-component-line": "152",
                                "data-component-file": "Clubs.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-2%20lg%3Agrid-cols-4%20gap-6%22%7D",
                                className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
                                children: upcomingEvents.map((event, index)=>/*#__PURE__*/ _jsxDEV(Card, {
                                        "data-lov-id": "src/pages/campus/Clubs.tsx:154:16",
                                        "data-lov-name": "Card",
                                        "data-component-path": "src/pages/campus/Clubs.tsx",
                                        "data-component-line": "154",
                                        "data-component-file": "Clubs.tsx",
                                        "data-component-name": "Card",
                                        "data-component-content": "%7B%22className%22%3A%22hover%3Ashadow-xl%20transition-all%20duration-300%20hover-scale%22%7D",
                                        className: "hover:shadow-xl transition-all duration-300 hover-scale",
                                        children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                            "data-lov-id": "src/pages/campus/Clubs.tsx:155:18",
                                            "data-lov-name": "CardContent",
                                            "data-component-path": "src/pages/campus/Clubs.tsx",
                                            "data-component-line": "155",
                                            "data-component-file": "Clubs.tsx",
                                            "data-component-name": "CardContent",
                                            "data-component-content": "%7B%22className%22%3A%22p-6%20text-center%22%7D",
                                            className: "p-6 text-center",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/campus/Clubs.tsx:156:20",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/campus/Clubs.tsx",
                                                    "data-component-line": "156",
                                                    "data-component-file": "Clubs.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22bg-school-gold%20text-white%20rounded-lg%20p-3%20mb-4%20inline-block%22%7D",
                                                    className: "bg-school-gold text-white rounded-lg p-3 mb-4 inline-block",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            "data-lov-id": "src/pages/campus/Clubs.tsx:157:22",
                                                            "data-lov-name": "div",
                                                            "data-component-path": "src/pages/campus/Clubs.tsx",
                                                            "data-component-line": "157",
                                                            "data-component-file": "Clubs.tsx",
                                                            "data-component-name": "div",
                                                            "data-component-content": "%7B%22className%22%3A%22text-sm%20font-medium%22%7D",
                                                            className: "text-sm font-medium",
                                                            children: event.date.split(' ')[0]
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            "data-lov-id": "src/pages/campus/Clubs.tsx:158:22",
                                                            "data-lov-name": "div",
                                                            "data-component-path": "src/pages/campus/Clubs.tsx",
                                                            "data-component-line": "158",
                                                            "data-component-file": "Clubs.tsx",
                                                            "data-component-name": "div",
                                                            "data-component-content": "%7B%22className%22%3A%22text-xs%22%7D",
                                                            className: "text-xs",
                                                            children: event.date.split(' ')[1] || '2025'
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("h3", {
                                                    "data-lov-id": "src/pages/campus/Clubs.tsx:160:20",
                                                    "data-lov-name": "h3",
                                                    "data-component-path": "src/pages/campus/Clubs.tsx",
                                                    "data-component-line": "160",
                                                    "data-component-file": "Clubs.tsx",
                                                    "data-component-name": "h3",
                                                    "data-component-content": "%7B%22className%22%3A%22font-bold%20text-school-brown%20mb-2%22%7D",
                                                    className: "font-bold text-school-brown mb-2",
                                                    children: event.event
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/campus/Clubs.tsx:161:20",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/campus/Clubs.tsx",
                                                    "data-component-line": "161",
                                                    "data-component-file": "Clubs.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22className%22%3A%22text-sm%20text-elegant-light%22%7D",
                                                    className: "text-sm text-elegant-light",
                                                    children: event.club
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                                            lineNumber: 155,
                                            columnNumber: 19
                                        }, this)
                                    }, event.event, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                                        lineNumber: 154,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                        lineNumber: 150,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("section", {
                    "data-lov-id": "src/pages/campus/Clubs.tsx:170:8",
                    "data-lov-name": "section",
                    "data-component-path": "src/pages/campus/Clubs.tsx",
                    "data-component-line": "170",
                    "data-component-file": "Clubs.tsx",
                    "data-component-name": "section",
                    "data-component-content": "%7B%22className%22%3A%22py-16%22%7D",
                    className: "py-16",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/campus/Clubs.tsx:171:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/campus/Clubs.tsx",
                        "data-component-line": "171",
                        "data-component-file": "Clubs.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20text-center%22%7D",
                        className: "container mx-auto px-4 text-center",
                        children: /*#__PURE__*/ _jsxDEV(Card, {
                            "data-lov-id": "src/pages/campus/Clubs.tsx:172:12",
                            "data-lov-name": "Card",
                            "data-component-path": "src/pages/campus/Clubs.tsx",
                            "data-component-line": "172",
                            "data-component-file": "Clubs.tsx",
                            "data-component-name": "Card",
                            "data-component-content": "%7B%22className%22%3A%22bg-gradient-to-r%20from-school-brown%20to-school-gold%20text-white%20max-w-4xl%20mx-auto%22%7D",
                            className: "bg-gradient-to-r from-school-brown to-school-gold text-white max-w-4xl mx-auto",
                            children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                "data-lov-id": "src/pages/campus/Clubs.tsx:173:14",
                                "data-lov-name": "CardContent",
                                "data-component-path": "src/pages/campus/Clubs.tsx",
                                "data-component-line": "173",
                                "data-component-file": "Clubs.tsx",
                                "data-component-name": "CardContent",
                                "data-component-content": "%7B%22className%22%3A%22p-12%22%7D",
                                className: "p-12",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("h2", {
                                        "data-lov-id": "src/pages/campus/Clubs.tsx:174:16",
                                        "data-lov-name": "h2",
                                        "data-component-path": "src/pages/campus/Clubs.tsx",
                                        "data-component-line": "174",
                                        "data-component-file": "Clubs.tsx",
                                        "data-component-name": "h2",
                                        "data-component-content": "%7B%22text%22%3A%22Ready%20to%20Discover%20Your%20Passion%3F%22%2C%22className%22%3A%22text-3xl%20font-bold%20mb-6%22%7D",
                                        className: "text-3xl font-bold mb-6",
                                        children: "Ready to Discover Your Passion?"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                                        lineNumber: 174,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        "data-lov-id": "src/pages/campus/Clubs.tsx:175:16",
                                        "data-lov-name": "p",
                                        "data-component-path": "src/pages/campus/Clubs.tsx",
                                        "data-component-line": "175",
                                        "data-component-file": "Clubs.tsx",
                                        "data-component-name": "p",
                                        "data-component-content": "%7B%22text%22%3A%22Join%20one%20of%20our%20exciting%20clubs%20and%20connect%20with%20like-minded%20students%20who%20share%20your%20interests!%22%2C%22className%22%3A%22text-xl%20mb-8%20opacity-90%22%7D",
                                        className: "text-xl mb-8 opacity-90",
                                        children: "Join one of our exciting clubs and connect with like-minded students who share your interests!"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                                        lineNumber: 175,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        "data-lov-id": "src/pages/campus/Clubs.tsx:178:16",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/pages/campus/Clubs.tsx",
                                        "data-component-line": "178",
                                        "data-component-file": "Clubs.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22className%22%3A%22flex%20flex-col%20sm%3Aflex-row%20gap-4%20justify-center%22%7D",
                                        className: "flex flex-col sm:flex-row gap-4 justify-center",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV(Button, {
                                                "data-lov-id": "src/pages/campus/Clubs.tsx:179:18",
                                                "data-lov-name": "Button",
                                                "data-component-path": "src/pages/campus/Clubs.tsx",
                                                "data-component-line": "179",
                                                "data-component-file": "Clubs.tsx",
                                                "data-component-name": "Button",
                                                "data-component-content": "%7B%22text%22%3A%22Download%20Club%20Registration%20Form%22%2C%22className%22%3A%22bg-white%20text-school-brown%20hover%3Abg-amber-50%22%7D",
                                                size: "lg",
                                                className: "bg-white text-school-brown hover:bg-amber-50",
                                                children: "Download Club Registration Form"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                                                lineNumber: 179,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV(Button, {
                                                "data-lov-id": "src/pages/campus/Clubs.tsx:182:18",
                                                "data-lov-name": "Button",
                                                "data-component-path": "src/pages/campus/Clubs.tsx",
                                                "data-component-line": "182",
                                                "data-component-file": "Clubs.tsx",
                                                "data-component-name": "Button",
                                                "data-component-content": "%7B%22text%22%3A%22Contact%20Club%20Coordinator%22%2C%22className%22%3A%22border-white%20text-white%20hover%3Abg-white%20hover%3Atext-school-brown%22%7D",
                                                size: "lg",
                                                variant: "outline",
                                                className: "border-white text-white hover:bg-white hover:text-school-brown",
                                                children: "Contact Club Coordinator"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                                                lineNumber: 182,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                                        lineNumber: 178,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                                lineNumber: 173,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                            lineNumber: 172,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                        lineNumber: 171,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
                    lineNumber: 170,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
            lineNumber: 94,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
};
_c = Clubs;
export default Clubs;
var _c;
$RefreshReg$(_c, "Clubs");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/pages/campus/Clubs.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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QUE7Z0RBQUFDLHVCQUFBO2dEQUFBQyx1QkFBQTtnREFBQUMsMEJBQUE7Z0RBQUVnQixNQUFLO2dEQUFLZCxXQUFVOzBEQUE4Qzs7Ozs7OzBEQUcxRSxRQUFDaEM7Z0RBQUt3QixlQUFBO2dEQUFBQyxpQkFBQTtnREFBQUMsdUJBQUE7Z0RBQUFDLHVCQUFBO2dEQUFBQyx1QkFBQTtnREFBQUMsdUJBQUE7Z0RBQUFDLDBCQUFBO2dEQUFFZ0IsTUFBSztnREFBS0UsU0FBUTtnREFBVWhCLFdBQVU7MERBQWdFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdoSTtLQXhMTXJCO0FBMExOLGVBQWVBLE1BQUsiLCJuYW1lcyI6WyJMYXlvdXQiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJCdXR0b24iLCJNdXNpYyIsIlBhbGV0dGUiLCJDYW1lcmEiLCJNaWMiLCJGbGFza0NvbmljYWwiLCJCb29rT3BlbiIsIkxlYWYiLCJVc2VycyIsIlBhZ2VCYW5uZXIiLCJjbHVic0FjdGl2aXRpZXMiLCJDbHVicyIsImNsdWJzIiwibmFtZSIsImljb24iLCJkZXNjcmlwdGlvbiIsIm1vdHRvIiwiYWN0aXZpdGllcyIsIm1lZXRpbmdEYXkiLCJjb2xvciIsInVwY29taW5nRXZlbnRzIiwiZXZlbnQiLCJkYXRlIiwiY2x1YiIsImRhdGEtbG92LWlkIiwiZGF0YS1sb3YtbmFtZSIsImRhdGEtY29tcG9uZW50LXBhdGgiLCJkYXRhLWNvbXBvbmVudC1saW5lIiwiZGF0YS1jb21wb25lbnQtZmlsZSIsImRhdGEtY29tcG9uZW50LW5hbWUiLCJkYXRhLWNvbXBvbmVudC1jb250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJzdWJ0aXRsZSIsImJhY2tncm91bmRJbWFnZSIsInNlY3Rpb24iLCJoMiIsIm1hcCIsImluZGV4IiwiaDMiLCJwIiwiaDQiLCJhY3Rpdml0eSIsImkiLCJzcGFuIiwic2l6ZSIsInNwbGl0IiwidmFyaWFudCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJDbHVicy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IE11c2ljLCBQYWxldHRlLCBDYW1lcmEsIE1pYywgRmxhc2tDb25pY2FsLCBCb29rT3BlbiwgTGVhZiwgVXNlcnMgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgUGFnZUJhbm5lciBmcm9tIFwiQC9jb21wb25lbnRzL1BhZ2VCYW5uZXJcIjtcbmltcG9ydCBjbHVic0FjdGl2aXRpZXMgZnJvbSBcIkAvYXNzZXRzL2NsdWJzLWFjdGl2aXRpZXMuanBnXCI7XG5cbmNvbnN0IENsdWJzID0gKCkgPT4ge1xuICBjb25zdCBjbHVicyA9IFtcbiAgICB7IFxuICAgICAgbmFtZTogXCJTY2llbmNlIENsdWJcIiwgXG4gICAgICBpY29uOiBGbGFza0NvbmljYWwsIFxuICAgICAgZGVzY3JpcHRpb246IFwiRXhwbG9yZSB0aGUgd29uZGVycyBvZiBzY2llbmNlIHRocm91Z2ggZXhwZXJpbWVudHMsIHByb2plY3RzLCBhbmQgc2NpZW50aWZpYyBpbnF1aXJ5XCIsXG4gICAgICBtb3R0bzogXCJEaXNjb3ZlciwgRXhwZXJpbWVudCwgSW5ub3ZhdGVcIixcbiAgICAgIGFjdGl2aXRpZXM6IFtcIldlZWtseSBFeHBlcmltZW50c1wiLCBcIlNjaWVuY2UgRmFpclwiLCBcIkxhYiBUb3Vyc1wiXSxcbiAgICAgIG1lZXRpbmdEYXk6IFwiV2VkbmVzZGF5c1wiLFxuICAgICAgY29sb3I6IFwiYmctYmx1ZS01MFwiXG4gICAgfSxcbiAgICB7IFxuICAgICAgbmFtZTogXCJMaXRlcmFyeSBDbHViXCIsIFxuICAgICAgaWNvbjogQm9va09wZW4sIFxuICAgICAgZGVzY3JpcHRpb246IFwiRGV2ZWxvcCB3cml0aW5nIHNraWxscywgcG9ldHJ5LCBhbmQgbGl0ZXJhcnkgYXBwcmVjaWF0aW9uIHRocm91Z2ggY3JlYXRpdmUgZXhwcmVzc2lvblwiLFxuICAgICAgbW90dG86IFwiV29yZHMgSGF2ZSBQb3dlclwiLFxuICAgICAgYWN0aXZpdGllczogW1wiQ3JlYXRpdmUgV3JpdGluZ1wiLCBcIlBvZXRyeSBTZXNzaW9uc1wiLCBcIkJvb2sgUmV2aWV3c1wiXSxcbiAgICAgIG1lZXRpbmdEYXk6IFwiVHVlc2RheXNcIixcbiAgICAgIGNvbG9yOiBcImJnLXB1cnBsZS01MFwiXG4gICAgfSxcbiAgICB7IFxuICAgICAgbmFtZTogXCJFY28gV2FycmlvcnNcIiwgXG4gICAgICBpY29uOiBMZWFmLCBcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkVudmlyb25tZW50YWwgY29uc2Npb3VzbmVzcyBhbmQgc3VzdGFpbmFiaWxpdHkgdGhyb3VnaCBncmVlbiBpbml0aWF0aXZlcyBhbmQgYXdhcmVuZXNzXCIsXG4gICAgICBtb3R0bzogXCJTYXZlIFRvZGF5LCBTZWN1cmUgVG9tb3Jyb3dcIixcbiAgICAgIGFjdGl2aXRpZXM6IFtcIlRyZWUgUGxhbnRhdGlvblwiLCBcIlJlY3ljbGluZyBEcml2ZXNcIiwgXCJHcmVlbiBDYW1wYWlnbnNcIl0sXG4gICAgICBtZWV0aW5nRGF5OiBcIkZyaWRheXNcIixcbiAgICAgIGNvbG9yOiBcImJnLWdyZWVuLTUwXCJcbiAgICB9LFxuICAgIHsgXG4gICAgICBuYW1lOiBcIk11c2ljICYgRGFuY2VcIiwgXG4gICAgICBpY29uOiBNdXNpYywgXG4gICAgICBkZXNjcmlwdGlvbjogXCJFeHByZXNzIGNyZWF0aXZpdHkgdGhyb3VnaCB2YXJpb3VzIG11c2ljYWwgaW5zdHJ1bWVudHMgYW5kIGRhbmNlIGZvcm1zXCIsXG4gICAgICBtb3R0bzogXCJSaHl0aG0gb2YgTGlmZVwiLFxuICAgICAgYWN0aXZpdGllczogW1wiSW5zdHJ1bWVudCBUcmFpbmluZ1wiLCBcIkRhbmNlIFByYWN0aWNlXCIsIFwiQ3VsdHVyYWwgU2hvd3NcIl0sXG4gICAgICBtZWV0aW5nRGF5OiBcIlRodXJzZGF5c1wiLFxuICAgICAgY29sb3I6IFwiYmctcGluay01MFwiXG4gICAgfSxcbiAgICB7IFxuICAgICAgbmFtZTogXCJBcnQgJiBDcmFmdFwiLCBcbiAgICAgIGljb246IFBhbGV0dGUsIFxuICAgICAgZGVzY3JpcHRpb246IFwiVmlzdWFsIGFydHMsIGhhbmRpY3JhZnRzLCBhbmQgY3JlYXRpdmUgcHJvamVjdHMgdG8gdW5sZWFzaCBhcnRpc3RpYyBwb3RlbnRpYWxcIixcbiAgICAgIG1vdHRvOiBcIkNyZWF0ZSwgSW5zcGlyZSwgRXhwcmVzc1wiLFxuICAgICAgYWN0aXZpdGllczogW1wiUGFpbnRpbmcgV29ya3Nob3BzXCIsIFwiQ3JhZnQgUHJvamVjdHNcIiwgXCJBcnQgRXhoaWJpdGlvbnNcIl0sXG4gICAgICBtZWV0aW5nRGF5OiBcIk1vbmRheXNcIixcbiAgICAgIGNvbG9yOiBcImJnLW9yYW5nZS01MFwiXG4gICAgfSxcbiAgICB7IFxuICAgICAgbmFtZTogXCJEcmFtYSAmIFRoZWF0cmVcIiwgXG4gICAgICBpY29uOiBNaWMsIFxuICAgICAgZGVzY3JpcHRpb246IFwiVGhlYXRyZSBwZXJmb3JtYW5jZXMsIHB1YmxpYyBzcGVha2luZywgYW5kIGRyYW1hdGljIGFydHMgZGV2ZWxvcG1lbnRcIixcbiAgICAgIG1vdHRvOiBcIkFsbCB0aGUgV29ybGQncyBhIFN0YWdlXCIsXG4gICAgICBhY3Rpdml0aWVzOiBbXCJTY3JpcHQgUmVhZGluZ1wiLCBcIlBlcmZvcm1hbmNlIFByYWN0aWNlXCIsIFwiU3RhZ2UgU2hvd3NcIl0sXG4gICAgICBtZWV0aW5nRGF5OiBcIlNhdHVyZGF5c1wiLFxuICAgICAgY29sb3I6IFwiYmctcmVkLTUwXCJcbiAgICB9LFxuICAgIHsgXG4gICAgICBuYW1lOiBcIlBob3RvZ3JhcGh5IENsdWJcIiwgXG4gICAgICBpY29uOiBDYW1lcmEsIFxuICAgICAgZGVzY3JpcHRpb246IFwiQ2FwdHVyZSBtb21lbnRzLCBsZWFybiBwaG90b2dyYXBoeSB0ZWNobmlxdWVzLCBhbmQgZG9jdW1lbnQgc2Nob29sIGV2ZW50c1wiLFxuICAgICAgbW90dG86IFwiRnJhbWUgdGhlIE1vbWVudFwiLFxuICAgICAgYWN0aXZpdGllczogW1wiUGhvdG8gV2Fsa3NcIiwgXCJFZGl0aW5nIFNlc3Npb25zXCIsIFwiRXhoaWJpdGlvbiBQcmVwXCJdLFxuICAgICAgbWVldGluZ0RheTogXCJXZWRuZXNkYXlzXCIsXG4gICAgICBjb2xvcjogXCJiZy15ZWxsb3ctNTBcIlxuICAgIH0sXG4gICAgeyBcbiAgICAgIG5hbWU6IFwiRGViYXRlIEZvcnVtXCIsIFxuICAgICAgaWNvbjogVXNlcnMsIFxuICAgICAgZGVzY3JpcHRpb246IFwiUHVibGljIHNwZWFraW5nLCBkZWJhdGVzLCBhbmQgZGV2ZWxvcGluZyBjb21tdW5pY2F0aW9uIGFuZCBjcml0aWNhbCB0aGlua2luZyBza2lsbHNcIixcbiAgICAgIG1vdHRvOiBcIlNwZWFrIHdpdGggQ29uZmlkZW5jZVwiLFxuICAgICAgYWN0aXZpdGllczogW1wiV2Vla2x5IERlYmF0ZXNcIiwgXCJTcGVlY2ggUHJhY3RpY2VcIiwgXCJJbnRlci1zY2hvb2wgQ29tcGV0aXRpb25zXCJdLFxuICAgICAgbWVldGluZ0RheTogXCJGcmlkYXlzXCIsXG4gICAgICBjb2xvcjogXCJiZy1pbmRpZ28tNTBcIlxuICAgIH1cbiAgXTtcblxuICBjb25zdCB1cGNvbWluZ0V2ZW50cyA9IFtcbiAgICB7IGV2ZW50OiBcIlNjaWVuY2UgRXhoaWJpdGlvblwiLCBkYXRlOiBcIkphbiAyNVwiLCBjbHViOiBcIlNjaWVuY2UgQ2x1YlwiIH0sXG4gICAgeyBldmVudDogXCJBbm51YWwgRHJhbWEgU2hvd1wiLCBkYXRlOiBcIkZlYiAxMFwiLCBjbHViOiBcIkRyYW1hIENsdWJcIiB9LFxuICAgIHsgZXZlbnQ6IFwiQXJ0IEdhbGxlcnkgT3BlbmluZ1wiLCBkYXRlOiBcIkZlYiAyMFwiLCBjbHViOiBcIkFydCBDbHViXCIgfSxcbiAgICB7IGV2ZW50OiBcIkludGVyLXNjaG9vbCBEZWJhdGVcIiwgZGF0ZTogXCJNYXIgNVwiLCBjbHViOiBcIkRlYmF0ZSBGb3J1bVwiIH1cbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1iYWNrZ3JvdW5kXCI+XG4gICAgICAgIDxQYWdlQmFubmVyXG4gICAgICAgICAgdGl0bGU9XCJDbHVicyAmIEFjdGl2aXRpZXNcIlxuICAgICAgICAgIHN1YnRpdGxlPVwiQ28tY3VycmljdWxhciBhY3Rpdml0aWVzIHRoYXQgZW1wb3dlciBzdHVkZW50cyB0byBleHBsb3JlIGludGVyZXN0cyBhbmQgZGV2ZWxvcCBsZWFkZXJzaGlwIHNraWxsc1wiXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlPXtjbHVic0FjdGl2aXRpZXN9XG4gICAgICAgIC8+XG5cbiAgICAgICAgey8qIENsdWJzIEdyaWQgd2l0aCBIb3ZlciBFZmZlY3RzICovfVxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LXNjaG9vbC1icm93biB0ZXh0LWNlbnRlciBtYi0xMlwiPkFjdGl2ZSBTdHVkZW50IENsdWJzPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtOFwiPlxuICAgICAgICAgICAgICB7Y2x1YnMubWFwKChjbHViLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxDYXJkIGtleT17Y2x1Yi5uYW1lfSBjbGFzc05hbWU9e2Ake2NsdWIuY29sb3J9IGdyb3VwIGhvdmVyOnNoYWRvdy14bCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgaG92ZXItc2NhbGUgYW5pbWF0ZS1mYWRlLWluIG92ZXJmbG93LWhpZGRlbmB9PlxuICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtNiByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC00IHJpZ2h0LTQgb3BhY2l0eS0xMCBncm91cC1ob3ZlcjpvcGFjaXR5LTIwIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Y2x1Yi5pY29uIGNsYXNzTmFtZT1cImgtMTYgdy0xNiB0ZXh0LXNjaG9vbC1icm93blwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNjaG9vbC1nb2xkIHctMTYgaC0xNiByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWItNCBncm91cC1ob3ZlcjpzY2FsZS0xMTAgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGNsdWIuaWNvbiBjbGFzc05hbWU9XCJoLTggdy04IHRleHQtd2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtc2Nob29sLWJyb3duIG1iLTNcIj57Y2x1Yi5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZWxlZ2FudC1saWdodCBtYi00IGxlYWRpbmctcmVsYXhlZFwiPntjbHViLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHsvKiBDbHViIE1vdHRvIC0gUmV2ZWFscyBvbiBIb3ZlciAqL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcGFjaXR5LTAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTMwMCBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zY2hvb2wtZ29sZCBmb250LXNlbWlib2xkIGl0YWxpY1wiPlwie2NsdWIubW90dG99XCI8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gbWItMlwiPkFjdGl2aXRpZXM6PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NsdWIuYWN0aXZpdGllcy5tYXAoKGFjdGl2aXR5LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpfSBjbGFzc05hbWU9XCJiZy13aGl0ZS83MCB0ZXh0LXNjaG9vbC1icm93biBweC0yIHB5LTEgcm91bmRlZCB0ZXh0LXhzIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWN0aXZpdHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZWxlZ2FudC1saWdodFwiPk1lZXRzOiB7Y2x1Yi5tZWV0aW5nRGF5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtXCIgY2xhc3NOYW1lPVwiYmctc2Nob29sLWJyb3duIGhvdmVyOmJnLXNjaG9vbC1nb2xkIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgSm9pbiBDbHViXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIHsvKiBVcGNvbWluZyBFdmVudHMgQ2FsZW5kYXIgKi99XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTE2IGJnLWdyYWRpZW50LXRvLXIgZnJvbS1hbWJlci01MCB0by1vcmFuZ2UtNTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gdGV4dC1jZW50ZXIgbWItMTJcIj5VcGNvbWluZyBDbHViIEV2ZW50czwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTQgZ2FwLTZcIj5cbiAgICAgICAgICAgICAge3VwY29taW5nRXZlbnRzLm1hcCgoZXZlbnQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPENhcmQga2V5PXtldmVudC5ldmVudH0gY2xhc3NOYW1lPVwiaG92ZXI6c2hhZG93LXhsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBob3Zlci1zY2FsZVwiPlxuICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtNiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNjaG9vbC1nb2xkIHRleHQtd2hpdGUgcm91bmRlZC1sZyBwLTMgbWItNCBpbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW1cIj57ZXZlbnQuZGF0ZS5zcGxpdCgnICcpWzBdfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14c1wiPntldmVudC5kYXRlLnNwbGl0KCcgJylbMV0gfHwgJzIwMjUnfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXNjaG9vbC1icm93biBtYi0yXCI+e2V2ZW50LmV2ZW50fTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1lbGVnYW50LWxpZ2h0XCI+e2V2ZW50LmNsdWJ9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICB7LyogSm9pbiBhIENsdWIgQ1RBICovfVxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tciBmcm9tLXNjaG9vbC1icm93biB0by1zY2hvb2wtZ29sZCB0ZXh0LXdoaXRlIG1heC13LTR4bCBteC1hdXRvXCI+XG4gICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLTEyXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBtYi02XCI+UmVhZHkgdG8gRGlzY292ZXIgWW91ciBQYXNzaW9uPzwvaDI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBtYi04IG9wYWNpdHktOTBcIj5cbiAgICAgICAgICAgICAgICAgIEpvaW4gb25lIG9mIG91ciBleGNpdGluZyBjbHVicyBhbmQgY29ubmVjdCB3aXRoIGxpa2UtbWluZGVkIHN0dWRlbnRzIHdobyBzaGFyZSB5b3VyIGludGVyZXN0cyFcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGdhcC00IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJsZ1wiIGNsYXNzTmFtZT1cImJnLXdoaXRlIHRleHQtc2Nob29sLWJyb3duIGhvdmVyOmJnLWFtYmVyLTUwXCI+XG4gICAgICAgICAgICAgICAgICAgIERvd25sb2FkIENsdWIgUmVnaXN0cmF0aW9uIEZvcm1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwibGdcIiB2YXJpYW50PVwib3V0bGluZVwiIGNsYXNzTmFtZT1cImJvcmRlci13aGl0ZSB0ZXh0LXdoaXRlIGhvdmVyOmJnLXdoaXRlIGhvdmVyOnRleHQtc2Nob29sLWJyb3duXCI+XG4gICAgICAgICAgICAgICAgICAgIENvbnRhY3QgQ2x1YiBDb29yZGluYXRvclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2x1YnM7XG4iXSwiZmlsZSI6Ii9ob21lL3NqcnNoOTE2L3B1YmxpY19odG1sL3NyYy9wYWdlcy9jYW1wdXMvQ2x1YnMudHN4In0=