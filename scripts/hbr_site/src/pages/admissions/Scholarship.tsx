import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/admissions/Scholarship.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import Layout from "/src/components/Layout.tsx";
import PageBanner from "/src/components/PageBanner.tsx";
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { Award, Trophy, Heart, Download, Star, Quote } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
import indianStudentsAchievements from "/src/assets/indian-students-achievements.jpg?import";
const Scholarship = ()=>{
    const scholarships = [
        {
            title: "Merit-Based Scholarship",
            icon: Award,
            description: "For students scoring above 90%",
            percentage: "Up to 50%",
            details: "Recognize academic excellence and encourage continued high performance in studies.",
            criteria: [
                "Minimum 90% in previous grade",
                "Consistent academic performance",
                "Good conduct certificate"
            ]
        },
        {
            title: "Need-Based Scholarship",
            icon: Heart,
            description: "For financially underprivileged students",
            percentage: "Up to 75%",
            details: "Support deserving students who face financial challenges in pursuing quality education.",
            criteria: [
                "Family income certificate",
                "Academic merit (min 70%)",
                "Recommendation letter"
            ]
        },
        {
            title: "Talent Scholarships",
            icon: Trophy,
            description: "For excellence in arts, sports, and public speaking",
            percentage: "Up to 40%",
            details: "Celebrate and nurture special talents in various co-curricular activities.",
            criteria: [
                "Portfolio/demonstration required",
                "Previous achievements",
                "Talent assessment test"
            ]
        }
    ];
    const testimonials = [
        {
            name: "Priya Sharma",
            grade: "Class 10",
            type: "Merit Scholar",
            quote: "The scholarship program has given me the confidence to dream big and work harder for my goals."
        },
        {
            name: "Arjun Kumar",
            grade: "Class 12",
            type: "Sports Scholar",
            quote: "SJRPS-HBR recognized my cricket talent and supported my journey. Now I'm playing at state level!"
        }
    ];
    const applicationSteps = [
        "Indicate scholarship interest in the admission form",
        "Submit supporting documents as per scholarship type",
        "Appear for scholarship interview or assessment test",
        "Await selection committee decision"
    ];
    return /*#__PURE__*/ _jsxDEV(Layout, {
        "data-lov-id": "src/pages/admissions/Scholarship.tsx:60:4",
        "data-lov-name": "Layout",
        "data-component-path": "src/pages/admissions/Scholarship.tsx",
        "data-component-line": "60",
        "data-component-file": "Scholarship.tsx",
        "data-component-name": "Layout",
        "data-component-content": "%7B%7D",
        children: /*#__PURE__*/ _jsxDEV("div", {
            "data-lov-id": "src/pages/admissions/Scholarship.tsx:61:6",
            "data-lov-name": "div",
            "data-component-path": "src/pages/admissions/Scholarship.tsx",
            "data-component-line": "61",
            "data-component-file": "Scholarship.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22min-h-screen%20bg-background%22%7D",
            className: "min-h-screen bg-background",
            children: [
                /*#__PURE__*/ _jsxDEV(PageBanner, {
                    "data-lov-id": "src/pages/admissions/Scholarship.tsx:62:8",
                    "data-lov-name": "PageBanner",
                    "data-component-path": "src/pages/admissions/Scholarship.tsx",
                    "data-component-line": "62",
                    "data-component-file": "Scholarship.tsx",
                    "data-component-name": "PageBanner",
                    "data-component-content": "%7B%7D",
                    title: "Scholarship Programs",
                    subtitle: "At SJRPS-HBR, we recognize merit and support potential. Our scholarship programs aim to encourage academic excellence, leadership, and inclusivity.",
                    backgroundImage: indianStudentsAchievements
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("section", {
                    "data-lov-id": "src/pages/admissions/Scholarship.tsx:69:8",
                    "data-lov-name": "section",
                    "data-component-path": "src/pages/admissions/Scholarship.tsx",
                    "data-component-line": "69",
                    "data-component-file": "Scholarship.tsx",
                    "data-component-name": "section",
                    "data-component-content": "%7B%22className%22%3A%22py-16%22%7D",
                    className: "py-16",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/admissions/Scholarship.tsx:70:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/admissions/Scholarship.tsx",
                        "data-component-line": "70",
                        "data-component-file": "Scholarship.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                        className: "container mx-auto px-4",
                        children: [
                            /*#__PURE__*/ _jsxDEV("h2", {
                                "data-lov-id": "src/pages/admissions/Scholarship.tsx:71:12",
                                "data-lov-name": "h2",
                                "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                "data-component-line": "71",
                                "data-component-file": "Scholarship.tsx",
                                "data-component-name": "h2",
                                "data-component-content": "%7B%22text%22%3A%22Types%20of%20Scholarships%20Offered%22%2C%22className%22%3A%22text-3xl%20font-bold%20text-school-brown%20text-center%20mb-12%22%7D",
                                className: "text-3xl font-bold text-school-brown text-center mb-12",
                                children: "Types of Scholarships Offered"
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/pages/admissions/Scholarship.tsx:72:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                "data-component-line": "72",
                                "data-component-file": "Scholarship.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-3%20gap-8%22%7D",
                                className: "grid md:grid-cols-3 gap-8",
                                children: scholarships.map((scholarship, index)=>/*#__PURE__*/ _jsxDEV("div", {
                                        "data-lov-id": "src/pages/admissions/Scholarship.tsx:74:16",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                        "data-component-line": "74",
                                        "data-component-file": "Scholarship.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22className%22%3A%22group%20perspective-1000%22%7D",
                                        className: "group perspective-1000",
                                        children: /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/pages/admissions/Scholarship.tsx:75:18",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                            "data-component-line": "75",
                                            "data-component-file": "Scholarship.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22relative%20h-80%20w-full%20transition-transform%20duration-700%20transform-style-preserve-3d%20group-hover%3Arotate-y-180%22%7D",
                                            className: "relative h-80 w-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV(Card, {
                                                    "data-lov-id": "src/pages/admissions/Scholarship.tsx:77:20",
                                                    "data-lov-name": "Card",
                                                    "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                    "data-component-line": "77",
                                                    "data-component-file": "Scholarship.tsx",
                                                    "data-component-name": "Card",
                                                    "data-component-content": "%7B%22className%22%3A%22absolute%20inset-0%20w-full%20h-full%20backface-hidden%20bg-gradient-to-br%20from-white%20to-amber-50%20hover%3Ashadow-xl%20transition-all%20duration-300%22%7D",
                                                    className: "absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-white to-amber-50 hover:shadow-xl transition-all duration-300",
                                                    children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                                        "data-lov-id": "src/pages/admissions/Scholarship.tsx:78:22",
                                                        "data-lov-name": "CardContent",
                                                        "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                        "data-component-line": "78",
                                                        "data-component-file": "Scholarship.tsx",
                                                        "data-component-name": "CardContent",
                                                        "data-component-content": "%7B%22className%22%3A%22p-6%20text-center%20h-full%20flex%20flex-col%20justify-center%22%7D",
                                                        className: "p-6 text-center h-full flex flex-col justify-center",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("div", {
                                                                "data-lov-id": "src/pages/admissions/Scholarship.tsx:79:24",
                                                                "data-lov-name": "div",
                                                                "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                                "data-component-line": "79",
                                                                "data-component-file": "Scholarship.tsx",
                                                                "data-component-name": "div",
                                                                "data-component-content": "%7B%22className%22%3A%22bg-school-gold%20w-16%20h-16%20rounded-full%20flex%20items-center%20justify-center%20mx-auto%20mb-4%22%7D",
                                                                className: "bg-school-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
                                                                children: /*#__PURE__*/ _jsxDEV(scholarship.icon, {
                                                                    "data-lov-id": "src/pages/admissions/Scholarship.tsx:80:26",
                                                                    "data-lov-name": "scholarship.icon",
                                                                    "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                                    "data-component-line": "80",
                                                                    "data-component-file": "Scholarship.tsx",
                                                                    "data-component-name": "scholarship.icon",
                                                                    "data-component-content": "%7B%22className%22%3A%22h-8%20w-8%20text-white%22%7D",
                                                                    className: "h-8 w-8 text-white"
                                                                }, void 0, false, {
                                                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                                    lineNumber: 80,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                                lineNumber: 79,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("h3", {
                                                                "data-lov-id": "src/pages/admissions/Scholarship.tsx:82:24",
                                                                "data-lov-name": "h3",
                                                                "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                                "data-component-line": "82",
                                                                "data-component-file": "Scholarship.tsx",
                                                                "data-component-name": "h3",
                                                                "data-component-content": "%7B%22className%22%3A%22text-xl%20font-bold%20text-school-brown%20mb-3%22%7D",
                                                                className: "text-xl font-bold text-school-brown mb-3",
                                                                children: scholarship.title
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                                lineNumber: 82,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                "data-lov-id": "src/pages/admissions/Scholarship.tsx:83:24",
                                                                "data-lov-name": "p",
                                                                "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                                "data-component-line": "83",
                                                                "data-component-file": "Scholarship.tsx",
                                                                "data-component-name": "p",
                                                                "data-component-content": "%7B%22className%22%3A%22text-elegant-light%20mb-4%22%7D",
                                                                className: "text-elegant-light mb-4",
                                                                children: scholarship.description
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                                lineNumber: 83,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                "data-lov-id": "src/pages/admissions/Scholarship.tsx:84:24",
                                                                "data-lov-name": "p",
                                                                "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                                "data-component-line": "84",
                                                                "data-component-file": "Scholarship.tsx",
                                                                "data-component-name": "p",
                                                                "data-component-content": "%7B%22className%22%3A%22text-school-gold%20font-bold%20text-2xl%22%7D",
                                                                className: "text-school-gold font-bold text-2xl",
                                                                children: scholarship.percentage
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                                lineNumber: 84,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                "data-lov-id": "src/pages/admissions/Scholarship.tsx:85:24",
                                                                "data-lov-name": "p",
                                                                "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                                "data-component-line": "85",
                                                                "data-component-file": "Scholarship.tsx",
                                                                "data-component-name": "p",
                                                                "data-component-content": "%7B%22text%22%3A%22Hover%20to%20learn%20more%22%2C%22className%22%3A%22text-sm%20text-school-light-brown%20mt-2%22%7D",
                                                                className: "text-sm text-school-light-brown mt-2",
                                                                children: "Hover to learn more"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                                lineNumber: 85,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV(Card, {
                                                    "data-lov-id": "src/pages/admissions/Scholarship.tsx:90:20",
                                                    "data-lov-name": "Card",
                                                    "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                    "data-component-line": "90",
                                                    "data-component-file": "Scholarship.tsx",
                                                    "data-component-name": "Card",
                                                    "data-component-content": "%7B%22className%22%3A%22absolute%20inset-0%20w-full%20h-full%20backface-hidden%20rotate-y-180%20bg-school-brown%20text-white%22%7D",
                                                    className: "absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-school-brown text-white",
                                                    children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                                        "data-lov-id": "src/pages/admissions/Scholarship.tsx:91:22",
                                                        "data-lov-name": "CardContent",
                                                        "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                        "data-component-line": "91",
                                                        "data-component-file": "Scholarship.tsx",
                                                        "data-component-name": "CardContent",
                                                        "data-component-content": "%7B%22className%22%3A%22p-6%20h-full%20flex%20flex-col%20justify-center%22%7D",
                                                        className: "p-6 h-full flex flex-col justify-center",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("h3", {
                                                                "data-lov-id": "src/pages/admissions/Scholarship.tsx:92:24",
                                                                "data-lov-name": "h3",
                                                                "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                                "data-component-line": "92",
                                                                "data-component-file": "Scholarship.tsx",
                                                                "data-component-name": "h3",
                                                                "data-component-content": "%7B%22className%22%3A%22text-lg%20font-bold%20mb-3%20text-amber-200%22%7D",
                                                                className: "text-lg font-bold mb-3 text-amber-200",
                                                                children: scholarship.title
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                                lineNumber: 92,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                "data-lov-id": "src/pages/admissions/Scholarship.tsx:93:24",
                                                                "data-lov-name": "p",
                                                                "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                                "data-component-line": "93",
                                                                "data-component-file": "Scholarship.tsx",
                                                                "data-component-name": "p",
                                                                "data-component-content": "%7B%22className%22%3A%22text-sm%20mb-4%22%7D",
                                                                className: "text-sm mb-4",
                                                                children: scholarship.details
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                                lineNumber: 93,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("div", {
                                                                "data-lov-id": "src/pages/admissions/Scholarship.tsx:94:24",
                                                                "data-lov-name": "div",
                                                                "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                                "data-component-line": "94",
                                                                "data-component-file": "Scholarship.tsx",
                                                                "data-component-name": "div",
                                                                "data-component-content": "%7B%22className%22%3A%22text-sm%22%7D",
                                                                className: "text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ _jsxDEV("p", {
                                                                        "data-lov-id": "src/pages/admissions/Scholarship.tsx:95:26",
                                                                        "data-lov-name": "p",
                                                                        "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                                        "data-component-line": "95",
                                                                        "data-component-file": "Scholarship.tsx",
                                                                        "data-component-name": "p",
                                                                        "data-component-content": "%7B%22text%22%3A%22Eligibility%3A%22%2C%22className%22%3A%22font-semibold%20mb-2%20text-amber-200%22%7D",
                                                                        className: "font-semibold mb-2 text-amber-200",
                                                                        children: "Eligibility:"
                                                                    }, void 0, false, {
                                                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                                        lineNumber: 95,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ _jsxDEV("ul", {
                                                                        "data-lov-id": "src/pages/admissions/Scholarship.tsx:96:26",
                                                                        "data-lov-name": "ul",
                                                                        "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                                        "data-component-line": "96",
                                                                        "data-component-file": "Scholarship.tsx",
                                                                        "data-component-name": "ul",
                                                                        "data-component-content": "%7B%22className%22%3A%22space-y-1%22%7D",
                                                                        className: "space-y-1",
                                                                        children: scholarship.criteria.map((criterion, idx)=>/*#__PURE__*/ _jsxDEV("li", {
                                                                                "data-lov-id": "src/pages/admissions/Scholarship.tsx:98:30",
                                                                                "data-lov-name": "li",
                                                                                "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                                                "data-component-line": "98",
                                                                                "data-component-file": "Scholarship.tsx",
                                                                                "data-component-name": "li",
                                                                                "data-component-content": "%7B%22text%22%3A%22%E2%80%A2%22%2C%22className%22%3A%22text-xs%22%7D",
                                                                                className: "text-xs",
                                                                                children: [
                                                                                    "• ",
                                                                                    criterion
                                                                                ]
                                                                            }, idx, true, {
                                                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                                                lineNumber: 98,
                                                                                columnNumber: 31
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                                        lineNumber: 96,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                                lineNumber: 94,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                            lineNumber: 75,
                                            columnNumber: 19
                                        }, this)
                                    }, scholarship.title, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                        lineNumber: 74,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("section", {
                    "data-lov-id": "src/pages/admissions/Scholarship.tsx:112:8",
                    "data-lov-name": "section",
                    "data-component-path": "src/pages/admissions/Scholarship.tsx",
                    "data-component-line": "112",
                    "data-component-file": "Scholarship.tsx",
                    "data-component-name": "section",
                    "data-component-content": "%7B%22className%22%3A%22py-16%20bg-gradient-to-r%20from-blue-50%20to-purple-50%22%7D",
                    className: "py-16 bg-gradient-to-r from-blue-50 to-purple-50",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/admissions/Scholarship.tsx:113:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/admissions/Scholarship.tsx",
                        "data-component-line": "113",
                        "data-component-file": "Scholarship.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                        className: "container mx-auto px-4",
                        children: /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/admissions/Scholarship.tsx:114:12",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/admissions/Scholarship.tsx",
                            "data-component-line": "114",
                            "data-component-file": "Scholarship.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22grid%20lg%3Agrid-cols-2%20gap-12%20items-center%22%7D",
                            className: "grid lg:grid-cols-2 gap-12 items-center",
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/admissions/Scholarship.tsx:115:14",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                    "data-component-line": "115",
                                    "data-component-file": "Scholarship.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%7D",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("h2", {
                                            "data-lov-id": "src/pages/admissions/Scholarship.tsx:116:16",
                                            "data-lov-name": "h2",
                                            "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                            "data-component-line": "116",
                                            "data-component-file": "Scholarship.tsx",
                                            "data-component-name": "h2",
                                            "data-component-content": "%7B%22text%22%3A%22How%20to%20Apply%22%2C%22className%22%3A%22text-3xl%20font-bold%20text-school-brown%20mb-6%22%7D",
                                            className: "text-3xl font-bold text-school-brown mb-6",
                                            children: "How to Apply"
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                            lineNumber: 116,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/pages/admissions/Scholarship.tsx:117:16",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                            "data-component-line": "117",
                                            "data-component-file": "Scholarship.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22space-y-4%22%7D",
                                            className: "space-y-4",
                                            children: applicationSteps.map((step, index)=>/*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/admissions/Scholarship.tsx:119:20",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                    "data-component-line": "119",
                                                    "data-component-file": "Scholarship.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22flex%20items-start%20space-x-4%22%7D",
                                                    className: "flex items-start space-x-4",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            "data-lov-id": "src/pages/admissions/Scholarship.tsx:120:22",
                                                            "data-lov-name": "div",
                                                            "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                            "data-component-line": "120",
                                                            "data-component-file": "Scholarship.tsx",
                                                            "data-component-name": "div",
                                                            "data-component-content": "%7B%22className%22%3A%22bg-school-gold%20text-white%20rounded-full%20w-8%20h-8%20flex%20items-center%20justify-center%20font-bold%20text-sm%20flex-shrink-0%22%7D",
                                                            className: "bg-school-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0",
                                                            children: index + 1
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                            lineNumber: 120,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("p", {
                                                            "data-lov-id": "src/pages/admissions/Scholarship.tsx:123:22",
                                                            "data-lov-name": "p",
                                                            "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                            "data-component-line": "123",
                                                            "data-component-file": "Scholarship.tsx",
                                                            "data-component-name": "p",
                                                            "data-component-content": "%7B%22className%22%3A%22text-elegant-light%22%7D",
                                                            className: "text-elegant-light",
                                                            children: step
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                            lineNumber: 123,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV(Button, {
                                            "data-lov-id": "src/pages/admissions/Scholarship.tsx:127:16",
                                            "data-lov-name": "Button",
                                            "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                            "data-component-line": "127",
                                            "data-component-file": "Scholarship.tsx",
                                            "data-component-name": "Button",
                                            "data-component-content": "%7B%22text%22%3A%22Download%20Scholarship%20Application%20Form%22%2C%22className%22%3A%22mt-6%20bg-school-gold%20hover%3Abg-school-brown%20text-white%22%7D",
                                            className: "mt-6 bg-school-gold hover:bg-school-brown text-white",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV(Download, {
                                                    "data-lov-id": "src/pages/admissions/Scholarship.tsx:128:18",
                                                    "data-lov-name": "Download",
                                                    "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                    "data-component-line": "128",
                                                    "data-component-file": "Scholarship.tsx",
                                                    "data-component-name": "Download",
                                                    "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%20mr-2%22%7D",
                                                    className: "h-4 w-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 19
                                                }, this),
                                                "Download Scholarship Application Form"
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                            lineNumber: 127,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                    lineNumber: 115,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV(Card, {
                                    "data-lov-id": "src/pages/admissions/Scholarship.tsx:133:14",
                                    "data-lov-name": "Card",
                                    "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                    "data-component-line": "133",
                                    "data-component-file": "Scholarship.tsx",
                                    "data-component-name": "Card",
                                    "data-component-content": "%7B%22className%22%3A%22bg-white%20shadow-lg%22%7D",
                                    className: "bg-white shadow-lg",
                                    children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                        "data-lov-id": "src/pages/admissions/Scholarship.tsx:134:16",
                                        "data-lov-name": "CardContent",
                                        "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                        "data-component-line": "134",
                                        "data-component-file": "Scholarship.tsx",
                                        "data-component-name": "CardContent",
                                        "data-component-content": "%7B%22className%22%3A%22p-6%22%7D",
                                        className: "p-6",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("h3", {
                                                "data-lov-id": "src/pages/admissions/Scholarship.tsx:135:18",
                                                "data-lov-name": "h3",
                                                "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                "data-component-line": "135",
                                                "data-component-file": "Scholarship.tsx",
                                                "data-component-name": "h3",
                                                "data-component-content": "%7B%22text%22%3A%22Important%20Deadlines%22%2C%22className%22%3A%22text-xl%20font-bold%20text-school-brown%20mb-4%22%7D",
                                                className: "text-xl font-bold text-school-brown mb-4",
                                                children: "Important Deadlines"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                lineNumber: 135,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/admissions/Scholarship.tsx:136:18",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                "data-component-line": "136",
                                                "data-component-file": "Scholarship.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22space-y-3%22%7D",
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/pages/admissions/Scholarship.tsx:137:20",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                        "data-component-line": "137",
                                                        "data-component-file": "Scholarship.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%22className%22%3A%22flex%20justify-between%22%7D",
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("span", {
                                                                "data-lov-id": "src/pages/admissions/Scholarship.tsx:138:22",
                                                                "data-lov-name": "span",
                                                                "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                                "data-component-line": "138",
                                                                "data-component-file": "Scholarship.tsx",
                                                                "data-component-name": "span",
                                                                "data-component-content": "%7B%22text%22%3A%22Application%20Opens%3A%22%2C%22className%22%3A%22text-elegant-light%22%7D",
                                                                className: "text-elegant-light",
                                                                children: "Application Opens:"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                                lineNumber: 138,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("span", {
                                                                "data-lov-id": "src/pages/admissions/Scholarship.tsx:139:22",
                                                                "data-lov-name": "span",
                                                                "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                                "data-component-line": "139",
                                                                "data-component-file": "Scholarship.tsx",
                                                                "data-component-name": "span",
                                                                "data-component-content": "%7B%22text%22%3A%22January%2015%2C%202025%22%2C%22className%22%3A%22font-semibold%20text-elegant%22%7D",
                                                                className: "font-semibold text-elegant",
                                                                children: "January 15, 2025"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                                lineNumber: 139,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/pages/admissions/Scholarship.tsx:141:20",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                        "data-component-line": "141",
                                                        "data-component-file": "Scholarship.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%22className%22%3A%22flex%20justify-between%22%7D",
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("span", {
                                                                "data-lov-id": "src/pages/admissions/Scholarship.tsx:142:22",
                                                                "data-lov-name": "span",
                                                                "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                                "data-component-line": "142",
                                                                "data-component-file": "Scholarship.tsx",
                                                                "data-component-name": "span",
                                                                "data-component-content": "%7B%22text%22%3A%22Submission%20Deadline%3A%22%2C%22className%22%3A%22text-elegant-light%22%7D",
                                                                className: "text-elegant-light",
                                                                children: "Submission Deadline:"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                                lineNumber: 142,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("span", {
                                                                "data-lov-id": "src/pages/admissions/Scholarship.tsx:143:22",
                                                                "data-lov-name": "span",
                                                                "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                                "data-component-line": "143",
                                                                "data-component-file": "Scholarship.tsx",
                                                                "data-component-name": "span",
                                                                "data-component-content": "%7B%22text%22%3A%22March%201%2C%202025%22%2C%22className%22%3A%22font-semibold%20text-elegant%22%7D",
                                                                className: "font-semibold text-elegant",
                                                                children: "March 1, 2025"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                                lineNumber: 143,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/pages/admissions/Scholarship.tsx:145:20",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                        "data-component-line": "145",
                                                        "data-component-file": "Scholarship.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%22className%22%3A%22flex%20justify-between%22%7D",
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("span", {
                                                                "data-lov-id": "src/pages/admissions/Scholarship.tsx:146:22",
                                                                "data-lov-name": "span",
                                                                "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                                "data-component-line": "146",
                                                                "data-component-file": "Scholarship.tsx",
                                                                "data-component-name": "span",
                                                                "data-component-content": "%7B%22text%22%3A%22Assessment%20Period%3A%22%2C%22className%22%3A%22text-elegant-light%22%7D",
                                                                className: "text-elegant-light",
                                                                children: "Assessment Period:"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                                lineNumber: 146,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("span", {
                                                                "data-lov-id": "src/pages/admissions/Scholarship.tsx:147:22",
                                                                "data-lov-name": "span",
                                                                "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                                "data-component-line": "147",
                                                                "data-component-file": "Scholarship.tsx",
                                                                "data-component-name": "span",
                                                                "data-component-content": "%7B%22text%22%3A%22March%205-15%2C%202025%22%2C%22className%22%3A%22font-semibold%20text-elegant%22%7D",
                                                                className: "font-semibold text-elegant",
                                                                children: "March 5-15, 2025"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                                lineNumber: 147,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/pages/admissions/Scholarship.tsx:149:20",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                        "data-component-line": "149",
                                                        "data-component-file": "Scholarship.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%22className%22%3A%22flex%20justify-between%22%7D",
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("span", {
                                                                "data-lov-id": "src/pages/admissions/Scholarship.tsx:150:22",
                                                                "data-lov-name": "span",
                                                                "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                                "data-component-line": "150",
                                                                "data-component-file": "Scholarship.tsx",
                                                                "data-component-name": "span",
                                                                "data-component-content": "%7B%22text%22%3A%22Results%20Announced%3A%22%2C%22className%22%3A%22text-elegant-light%22%7D",
                                                                className: "text-elegant-light",
                                                                children: "Results Announced:"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                                lineNumber: 150,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("span", {
                                                                "data-lov-id": "src/pages/admissions/Scholarship.tsx:151:22",
                                                                "data-lov-name": "span",
                                                                "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                                "data-component-line": "151",
                                                                "data-component-file": "Scholarship.tsx",
                                                                "data-component-name": "span",
                                                                "data-component-content": "%7B%22text%22%3A%22March%2020%2C%202025%22%2C%22className%22%3A%22font-semibold%20text-school-gold%22%7D",
                                                                className: "font-semibold text-school-gold",
                                                                children: "March 20, 2025"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                                lineNumber: 151,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                lineNumber: 136,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                        lineNumber: 134,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                            lineNumber: 114,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("section", {
                    "data-lov-id": "src/pages/admissions/Scholarship.tsx:161:8",
                    "data-lov-name": "section",
                    "data-component-path": "src/pages/admissions/Scholarship.tsx",
                    "data-component-line": "161",
                    "data-component-file": "Scholarship.tsx",
                    "data-component-name": "section",
                    "data-component-content": "%7B%22className%22%3A%22py-16%22%7D",
                    className: "py-16",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/admissions/Scholarship.tsx:162:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/admissions/Scholarship.tsx",
                        "data-component-line": "162",
                        "data-component-file": "Scholarship.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                        className: "container mx-auto px-4",
                        children: [
                            /*#__PURE__*/ _jsxDEV("h2", {
                                "data-lov-id": "src/pages/admissions/Scholarship.tsx:163:12",
                                "data-lov-name": "h2",
                                "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                "data-component-line": "163",
                                "data-component-file": "Scholarship.tsx",
                                "data-component-name": "h2",
                                "data-component-content": "%7B%22text%22%3A%22Success%20Stories%22%2C%22className%22%3A%22text-3xl%20font-bold%20text-school-brown%20text-center%20mb-12%22%7D",
                                className: "text-3xl font-bold text-school-brown text-center mb-12",
                                children: "Success Stories"
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                lineNumber: 163,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/pages/admissions/Scholarship.tsx:164:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                "data-component-line": "164",
                                "data-component-file": "Scholarship.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-2%20gap-8%22%7D",
                                className: "grid md:grid-cols-2 gap-8",
                                children: testimonials.map((testimonial, index)=>/*#__PURE__*/ _jsxDEV(Card, {
                                        "data-lov-id": "src/pages/admissions/Scholarship.tsx:166:16",
                                        "data-lov-name": "Card",
                                        "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                        "data-component-line": "166",
                                        "data-component-file": "Scholarship.tsx",
                                        "data-component-name": "Card",
                                        "data-component-content": "%7B%22className%22%3A%22bg-gradient-to-br%20from-amber-50%20to-orange-50%20hover%3Ashadow-xl%20transition-all%20duration-300%22%7D",
                                        className: "bg-gradient-to-br from-amber-50 to-orange-50 hover:shadow-xl transition-all duration-300",
                                        children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                            "data-lov-id": "src/pages/admissions/Scholarship.tsx:167:18",
                                            "data-lov-name": "CardContent",
                                            "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                            "data-component-line": "167",
                                            "data-component-file": "Scholarship.tsx",
                                            "data-component-name": "CardContent",
                                            "data-component-content": "%7B%22className%22%3A%22p-6%22%7D",
                                            className: "p-6",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV(Quote, {
                                                    "data-lov-id": "src/pages/admissions/Scholarship.tsx:168:20",
                                                    "data-lov-name": "Quote",
                                                    "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                    "data-component-line": "168",
                                                    "data-component-file": "Scholarship.tsx",
                                                    "data-component-name": "Quote",
                                                    "data-component-content": "%7B%22className%22%3A%22h-8%20w-8%20text-school-gold%20mb-4%22%7D",
                                                    className: "h-8 w-8 text-school-gold mb-4"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/admissions/Scholarship.tsx:169:20",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                    "data-component-line": "169",
                                                    "data-component-file": "Scholarship.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22text%22%3A%22%5C%22%20%5C%22%22%2C%22className%22%3A%22text-elegant-light%20italic%20mb-4%22%7D",
                                                    className: "text-elegant-light italic mb-4",
                                                    children: [
                                                        '"',
                                                        testimonial.quote,
                                                        '"'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/admissions/Scholarship.tsx:170:20",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                    "data-component-line": "170",
                                                    "data-component-file": "Scholarship.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            "data-lov-id": "src/pages/admissions/Scholarship.tsx:171:22",
                                                            "data-lov-name": "div",
                                                            "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                            "data-component-line": "171",
                                                            "data-component-file": "Scholarship.tsx",
                                                            "data-component-name": "div",
                                                            "data-component-content": "%7B%7D",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV("p", {
                                                                    "data-lov-id": "src/pages/admissions/Scholarship.tsx:172:24",
                                                                    "data-lov-name": "p",
                                                                    "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                                    "data-component-line": "172",
                                                                    "data-component-file": "Scholarship.tsx",
                                                                    "data-component-name": "p",
                                                                    "data-component-content": "%7B%22className%22%3A%22font-semibold%20text-school-brown%22%7D",
                                                                    className: "font-semibold text-school-brown",
                                                                    children: testimonial.name
                                                                }, void 0, false, {
                                                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                                    lineNumber: 172,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV("p", {
                                                                    "data-lov-id": "src/pages/admissions/Scholarship.tsx:173:24",
                                                                    "data-lov-name": "p",
                                                                    "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                                    "data-component-line": "173",
                                                                    "data-component-file": "Scholarship.tsx",
                                                                    "data-component-name": "p",
                                                                    "data-component-content": "%7B%22className%22%3A%22text-sm%20text-school-light-brown%22%7D",
                                                                    className: "text-sm text-school-light-brown",
                                                                    children: testimonial.grade
                                                                }, void 0, false, {
                                                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                                    lineNumber: 173,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                            lineNumber: 171,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            "data-lov-id": "src/pages/admissions/Scholarship.tsx:175:22",
                                                            "data-lov-name": "div",
                                                            "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                            "data-component-line": "175",
                                                            "data-component-file": "Scholarship.tsx",
                                                            "data-component-name": "div",
                                                            "data-component-content": "%7B%22className%22%3A%22flex%20items-center%22%7D",
                                                            className: "flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV(Star, {
                                                                    "data-lov-id": "src/pages/admissions/Scholarship.tsx:176:24",
                                                                    "data-lov-name": "Star",
                                                                    "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                                    "data-component-line": "176",
                                                                    "data-component-file": "Scholarship.tsx",
                                                                    "data-component-name": "Star",
                                                                    "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%20text-school-gold%20mr-1%22%7D",
                                                                    className: "h-4 w-4 text-school-gold mr-1"
                                                                }, void 0, false, {
                                                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                                    lineNumber: 176,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV("span", {
                                                                    "data-lov-id": "src/pages/admissions/Scholarship.tsx:177:24",
                                                                    "data-lov-name": "span",
                                                                    "data-component-path": "src/pages/admissions/Scholarship.tsx",
                                                                    "data-component-line": "177",
                                                                    "data-component-file": "Scholarship.tsx",
                                                                    "data-component-name": "span",
                                                                    "data-component-content": "%7B%22className%22%3A%22text-sm%20text-school-gold%20font-semibold%22%7D",
                                                                    className: "text-sm text-school-gold font-semibold",
                                                                    children: testimonial.type
                                                                }, void 0, false, {
                                                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                                    lineNumber: 177,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                            lineNumber: 175,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                            lineNumber: 167,
                                            columnNumber: 19
                                        }, this)
                                    }, testimonial.name, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                        lineNumber: 166,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
};
_c = Scholarship;
export default Scholarship;
var _c;
$RefreshReg$(_c, "Scholarship");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/pages/admissions/Scholarship.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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Ozs7Ozs7Ozs7Ozs7c0VBRW5FLFFBQUNXOzREQUFFUCxlQUFBOzREQUFBQyxpQkFBQTs0REFBQUMsdUJBQUE7NERBQUFDLHVCQUFBOzREQUFBQyx1QkFBQTs0REFBQUMsdUJBQUE7NERBQUFDLDBCQUFBOzREQUFFRSxXQUFVOzs4RUFDYixRQUFDekI7b0VBQUdpQixlQUFBO29FQUFBQyxpQkFBQTtvRUFBQUMsdUJBQUE7b0VBQUFDLHVCQUFBO29FQUFBQyx1QkFBQTtvRUFBQUMsdUJBQUE7b0VBQUFDLDBCQUFBO29FQUFFRSxXQUFVOzs7Ozs7OEVBQ2hCLFFBQUNlO29FQUFHdkIsZUFBQTtvRUFBQUMsaUJBQUE7b0VBQUFDLHVCQUFBO29FQUFBQyx1QkFBQTtvRUFBQUMsdUJBQUE7b0VBQUFDLHVCQUFBO29FQUFBQywwQkFBQTtvRUFBRUUsV0FBVTs4RUFBMENnQixZQUFZM0IsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VDQVh2RTJCLFlBQVk3QixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCM0M7S0FwTE1UO0FBc0xOLGVBQWVBLFlBQVciLCJuYW1lcyI6WyJMYXlvdXQiLCJQYWdlQmFubmVyIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQnV0dG9uIiwiQXdhcmQiLCJUcm9waHkiLCJIZWFydCIsIkRvd25sb2FkIiwiU3RhciIsIlF1b3RlIiwiaW5kaWFuU3R1ZGVudHNBY2hpZXZlbWVudHMiLCJTY2hvbGFyc2hpcCIsInNjaG9sYXJzaGlwcyIsInRpdGxlIiwiaWNvbiIsImRlc2NyaXB0aW9uIiwicGVyY2VudGFnZSIsImRldGFpbHMiLCJjcml0ZXJpYSIsInRlc3RpbW9uaWFscyIsIm5hbWUiLCJncmFkZSIsInR5cGUiLCJxdW90ZSIsImFwcGxpY2F0aW9uU3RlcHMiLCJkYXRhLWxvdi1pZCIsImRhdGEtbG92LW5hbWUiLCJkYXRhLWNvbXBvbmVudC1wYXRoIiwiZGF0YS1jb21wb25lbnQtbGluZSIsImRhdGEtY29tcG9uZW50LWZpbGUiLCJkYXRhLWNvbXBvbmVudC1uYW1lIiwiZGF0YS1jb21wb25lbnQtY29udGVudCIsImRpdiIsImNsYXNzTmFtZSIsInN1YnRpdGxlIiwiYmFja2dyb3VuZEltYWdlIiwic2VjdGlvbiIsImgyIiwibWFwIiwic2Nob2xhcnNoaXAiLCJpbmRleCIsImgzIiwicCIsInVsIiwiY3JpdGVyaW9uIiwiaWR4IiwibGkiLCJzdGVwIiwic3BhbiIsInRlc3RpbW9uaWFsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIlNjaG9sYXJzaGlwLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBQYWdlQmFubmVyIGZyb20gXCJAL2NvbXBvbmVudHMvUGFnZUJhbm5lclwiO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBBd2FyZCwgVHJvcGh5LCBIZWFydCwgRG93bmxvYWQsIFN0YXIsIFF1b3RlIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IGluZGlhblN0dWRlbnRzQWNoaWV2ZW1lbnRzIGZyb20gXCJAL2Fzc2V0cy9pbmRpYW4tc3R1ZGVudHMtYWNoaWV2ZW1lbnRzLmpwZ1wiO1xuXG5jb25zdCBTY2hvbGFyc2hpcCA9ICgpID0+IHtcbiAgY29uc3Qgc2Nob2xhcnNoaXBzID0gW1xuICAgIHsgXG4gICAgICB0aXRsZTogXCJNZXJpdC1CYXNlZCBTY2hvbGFyc2hpcFwiLCBcbiAgICAgIGljb246IEF3YXJkLCBcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkZvciBzdHVkZW50cyBzY29yaW5nIGFib3ZlIDkwJVwiLCBcbiAgICAgIHBlcmNlbnRhZ2U6IFwiVXAgdG8gNTAlXCIsXG4gICAgICBkZXRhaWxzOiBcIlJlY29nbml6ZSBhY2FkZW1pYyBleGNlbGxlbmNlIGFuZCBlbmNvdXJhZ2UgY29udGludWVkIGhpZ2ggcGVyZm9ybWFuY2UgaW4gc3R1ZGllcy5cIixcbiAgICAgIGNyaXRlcmlhOiBbXCJNaW5pbXVtIDkwJSBpbiBwcmV2aW91cyBncmFkZVwiLCBcIkNvbnNpc3RlbnQgYWNhZGVtaWMgcGVyZm9ybWFuY2VcIiwgXCJHb29kIGNvbmR1Y3QgY2VydGlmaWNhdGVcIl1cbiAgICB9LFxuICAgIHsgXG4gICAgICB0aXRsZTogXCJOZWVkLUJhc2VkIFNjaG9sYXJzaGlwXCIsIFxuICAgICAgaWNvbjogSGVhcnQsIFxuICAgICAgZGVzY3JpcHRpb246IFwiRm9yIGZpbmFuY2lhbGx5IHVuZGVycHJpdmlsZWdlZCBzdHVkZW50c1wiLCBcbiAgICAgIHBlcmNlbnRhZ2U6IFwiVXAgdG8gNzUlXCIsXG4gICAgICBkZXRhaWxzOiBcIlN1cHBvcnQgZGVzZXJ2aW5nIHN0dWRlbnRzIHdobyBmYWNlIGZpbmFuY2lhbCBjaGFsbGVuZ2VzIGluIHB1cnN1aW5nIHF1YWxpdHkgZWR1Y2F0aW9uLlwiLFxuICAgICAgY3JpdGVyaWE6IFtcIkZhbWlseSBpbmNvbWUgY2VydGlmaWNhdGVcIiwgXCJBY2FkZW1pYyBtZXJpdCAobWluIDcwJSlcIiwgXCJSZWNvbW1lbmRhdGlvbiBsZXR0ZXJcIl1cbiAgICB9LFxuICAgIHsgXG4gICAgICB0aXRsZTogXCJUYWxlbnQgU2Nob2xhcnNoaXBzXCIsIFxuICAgICAgaWNvbjogVHJvcGh5LCBcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkZvciBleGNlbGxlbmNlIGluIGFydHMsIHNwb3J0cywgYW5kIHB1YmxpYyBzcGVha2luZ1wiLCBcbiAgICAgIHBlcmNlbnRhZ2U6IFwiVXAgdG8gNDAlXCIsXG4gICAgICBkZXRhaWxzOiBcIkNlbGVicmF0ZSBhbmQgbnVydHVyZSBzcGVjaWFsIHRhbGVudHMgaW4gdmFyaW91cyBjby1jdXJyaWN1bGFyIGFjdGl2aXRpZXMuXCIsXG4gICAgICBjcml0ZXJpYTogW1wiUG9ydGZvbGlvL2RlbW9uc3RyYXRpb24gcmVxdWlyZWRcIiwgXCJQcmV2aW91cyBhY2hpZXZlbWVudHNcIiwgXCJUYWxlbnQgYXNzZXNzbWVudCB0ZXN0XCJdXG4gICAgfVxuICBdO1xuXG4gIGNvbnN0IHRlc3RpbW9uaWFscyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIlByaXlhIFNoYXJtYVwiLFxuICAgICAgZ3JhZGU6IFwiQ2xhc3MgMTBcIixcbiAgICAgIHR5cGU6IFwiTWVyaXQgU2Nob2xhclwiLFxuICAgICAgcXVvdGU6IFwiVGhlIHNjaG9sYXJzaGlwIHByb2dyYW0gaGFzIGdpdmVuIG1lIHRoZSBjb25maWRlbmNlIHRvIGRyZWFtIGJpZyBhbmQgd29yayBoYXJkZXIgZm9yIG15IGdvYWxzLlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkFyanVuIEt1bWFyXCIsXG4gICAgICBncmFkZTogXCJDbGFzcyAxMlwiLFxuICAgICAgdHlwZTogXCJTcG9ydHMgU2Nob2xhclwiLFxuICAgICAgcXVvdGU6IFwiU0pSUFMtSEJSIHJlY29nbml6ZWQgbXkgY3JpY2tldCB0YWxlbnQgYW5kIHN1cHBvcnRlZCBteSBqb3VybmV5LiBOb3cgSSdtIHBsYXlpbmcgYXQgc3RhdGUgbGV2ZWwhXCJcbiAgICB9XG4gIF07XG5cbiAgY29uc3QgYXBwbGljYXRpb25TdGVwcyA9IFtcbiAgICBcIkluZGljYXRlIHNjaG9sYXJzaGlwIGludGVyZXN0IGluIHRoZSBhZG1pc3Npb24gZm9ybVwiLFxuICAgIFwiU3VibWl0IHN1cHBvcnRpbmcgZG9jdW1lbnRzIGFzIHBlciBzY2hvbGFyc2hpcCB0eXBlXCIsXG4gICAgXCJBcHBlYXIgZm9yIHNjaG9sYXJzaGlwIGludGVydmlldyBvciBhc3Nlc3NtZW50IHRlc3RcIixcbiAgICBcIkF3YWl0IHNlbGVjdGlvbiBjb21taXR0ZWUgZGVjaXNpb25cIlxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWJhY2tncm91bmRcIj5cbiAgICAgICAgPFBhZ2VCYW5uZXJcbiAgICAgICAgICB0aXRsZT1cIlNjaG9sYXJzaGlwIFByb2dyYW1zXCJcbiAgICAgICAgICBzdWJ0aXRsZT1cIkF0IFNKUlBTLUhCUiwgd2UgcmVjb2duaXplIG1lcml0IGFuZCBzdXBwb3J0IHBvdGVudGlhbC4gT3VyIHNjaG9sYXJzaGlwIHByb2dyYW1zIGFpbSB0byBlbmNvdXJhZ2UgYWNhZGVtaWMgZXhjZWxsZW5jZSwgbGVhZGVyc2hpcCwgYW5kIGluY2x1c2l2aXR5LlwiXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlPXtpbmRpYW5TdHVkZW50c0FjaGlldmVtZW50c31cbiAgICAgICAgLz5cblxuICAgICAgICB7LyogU2Nob2xhcnNoaXAgVHlwZXMgKi99XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTE2XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtc2Nob29sLWJyb3duIHRleHQtY2VudGVyIG1iLTEyXCI+VHlwZXMgb2YgU2Nob2xhcnNoaXBzIE9mZmVyZWQ8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0zIGdhcC04XCI+XG4gICAgICAgICAgICAgIHtzY2hvbGFyc2hpcHMubWFwKChzY2hvbGFyc2hpcCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17c2Nob2xhcnNoaXAudGl0bGV9IGNsYXNzTmFtZT1cImdyb3VwIHBlcnNwZWN0aXZlLTEwMDBcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC04MCB3LWZ1bGwgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tNzAwIHRyYW5zZm9ybS1zdHlsZS1wcmVzZXJ2ZS0zZCBncm91cC1ob3Zlcjpyb3RhdGUteS0xODBcIj5cbiAgICAgICAgICAgICAgICAgICAgey8qIEZyb250IG9mIGNhcmQgKi99XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgdy1mdWxsIGgtZnVsbCBiYWNrZmFjZS1oaWRkZW4gYmctZ3JhZGllbnQtdG8tYnIgZnJvbS13aGl0ZSB0by1hbWJlci01MCBob3ZlcjpzaGFkb3cteGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtNiB0ZXh0LWNlbnRlciBoLWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zY2hvb2wtZ29sZCB3LTE2IGgtMTYgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG14LWF1dG8gbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c2Nob2xhcnNoaXAuaWNvbiBjbGFzc05hbWU9XCJoLTggdy04IHRleHQtd2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gbWItM1wiPntzY2hvbGFyc2hpcC50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1lbGVnYW50LWxpZ2h0IG1iLTRcIj57c2Nob2xhcnNoaXAuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zY2hvb2wtZ29sZCBmb250LWJvbGQgdGV4dC0yeGxcIj57c2Nob2xhcnNoaXAucGVyY2VudGFnZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2Nob29sLWxpZ2h0LWJyb3duIG10LTJcIj5Ib3ZlciB0byBsZWFybiBtb3JlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHsvKiBCYWNrIG9mIGNhcmQgKi99XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgdy1mdWxsIGgtZnVsbCBiYWNrZmFjZS1oaWRkZW4gcm90YXRlLXktMTgwIGJnLXNjaG9vbC1icm93biB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtNiBoLWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIG1iLTMgdGV4dC1hbWJlci0yMDBcIj57c2Nob2xhcnNoaXAudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbWItNFwiPntzY2hvbGFyc2hpcC5kZXRhaWxzfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIG1iLTIgdGV4dC1hbWJlci0yMDBcIj5FbGlnaWJpbGl0eTo8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS15LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2Nob2xhcnNoaXAuY3JpdGVyaWEubWFwKChjcml0ZXJpb24sIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aWR4fSBjbGFzc05hbWU9XCJ0ZXh0LXhzXCI+4oCiIHtjcml0ZXJpb259PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgey8qIEhvdyB0byBBcHBseSAqL31cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTYgYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsdWUtNTAgdG8tcHVycGxlLTUwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbGc6Z3JpZC1jb2xzLTIgZ2FwLTEyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gbWItNlwiPkhvdyB0byBBcHBseTwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgICAgIHthcHBsaWNhdGlvblN0ZXBzLm1hcCgoc3RlcCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2Nob29sLWdvbGQgdGV4dC13aGl0ZSByb3VuZGVkLWZ1bGwgdy04IGgtOCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmb250LWJvbGQgdGV4dC1zbSBmbGV4LXNocmluay0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggKyAxfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZWxlZ2FudC1saWdodFwiPntzdGVwfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm10LTYgYmctc2Nob29sLWdvbGQgaG92ZXI6Ymctc2Nob29sLWJyb3duIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgIDxEb3dubG9hZCBjbGFzc05hbWU9XCJoLTQgdy00IG1yLTJcIiAvPlxuICAgICAgICAgICAgICAgICAgRG93bmxvYWQgU2Nob2xhcnNoaXAgQXBwbGljYXRpb24gRm9ybVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImJnLXdoaXRlIHNoYWRvdy1sZ1wiPlxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLTZcIj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXNjaG9vbC1icm93biBtYi00XCI+SW1wb3J0YW50IERlYWRsaW5lczwvaDM+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktM1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1lbGVnYW50LWxpZ2h0XCI+QXBwbGljYXRpb24gT3BlbnM6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1lbGVnYW50XCI+SmFudWFyeSAxNSwgMjAyNTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWVsZWdhbnQtbGlnaHRcIj5TdWJtaXNzaW9uIERlYWRsaW5lOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtZWxlZ2FudFwiPk1hcmNoIDEsIDIwMjU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1lbGVnYW50LWxpZ2h0XCI+QXNzZXNzbWVudCBQZXJpb2Q6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1lbGVnYW50XCI+TWFyY2ggNS0xNSwgMjAyNTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWVsZWdhbnQtbGlnaHRcIj5SZXN1bHRzIEFubm91bmNlZDo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXNjaG9vbC1nb2xkXCI+TWFyY2ggMjAsIDIwMjU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICB7LyogVGVzdGltb25pYWxzICovfVxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LXNjaG9vbC1icm93biB0ZXh0LWNlbnRlciBtYi0xMlwiPlN1Y2Nlc3MgU3RvcmllczwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgZ2FwLThcIj5cbiAgICAgICAgICAgICAge3Rlc3RpbW9uaWFscy5tYXAoKHRlc3RpbW9uaWFsLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxDYXJkIGtleT17dGVzdGltb25pYWwubmFtZX0gY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1hbWJlci01MCB0by1vcmFuZ2UtNTAgaG92ZXI6c2hhZG93LXhsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8UXVvdGUgY2xhc3NOYW1lPVwiaC04IHctOCB0ZXh0LXNjaG9vbC1nb2xkIG1iLTRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWVsZWdhbnQtbGlnaHQgaXRhbGljIG1iLTRcIj5cInt0ZXN0aW1vbmlhbC5xdW90ZX1cIjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXNjaG9vbC1icm93blwiPnt0ZXN0aW1vbmlhbC5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zY2hvb2wtbGlnaHQtYnJvd25cIj57dGVzdGltb25pYWwuZ3JhZGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFyIGNsYXNzTmFtZT1cImgtNCB3LTQgdGV4dC1zY2hvb2wtZ29sZCBtci0xXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zY2hvb2wtZ29sZCBmb250LXNlbWlib2xkXCI+e3Rlc3RpbW9uaWFsLnR5cGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjaG9sYXJzaGlwO1xuIl0sImZpbGUiOiIvaG9tZS9zanJzaDkxNi9wdWJsaWNfaHRtbC9zcmMvcGFnZXMvYWRtaXNzaW9ucy9TY2hvbGFyc2hpcC50c3gifQ==