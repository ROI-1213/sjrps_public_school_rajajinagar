import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/academics/HigherSecondary.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import Layout from "/src/components/Layout.tsx";
import PageBanner from "/src/components/PageBanner.tsx";
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "/src/components/ui/tabs.tsx";
import { FlaskConical, Calculator, BookOpen, TrendingUp, Users, GraduationCap } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
import classroomTech from "/src/assets/classroom-tech.jpg?import";
const HigherSecondary = ()=>{
    const streams = [
        {
            id: "science",
            title: "Science Stream",
            icon: FlaskConical,
            subjects: [
                "Physics",
                "Chemistry",
                "Biology",
                "Mathematics"
            ],
            description: "Comprehensive science education preparing students for medical and engineering entrance exams.",
            careers: [
                "Doctor",
                "Engineer",
                "Researcher",
                "Biotechnologist",
                "Pharmacist"
            ],
            color: "bg-blue-500"
        },
        {
            id: "commerce",
            title: "Commerce Stream",
            icon: TrendingUp,
            subjects: [
                "Accountancy",
                "Business Studies",
                "Economics",
                "Mathematics/Statistics"
            ],
            description: "Business and finance focused curriculum for future entrepreneurs and commerce professionals.",
            careers: [
                "CA/CS",
                "Business Analyst",
                "Entrepreneur",
                "Banker",
                "Financial Advisor"
            ],
            color: "bg-green-500"
        },
        {
            id: "humanities",
            title: "Humanities Stream",
            icon: BookOpen,
            subjects: [
                "History",
                "Geography",
                "Political Science",
                "Psychology",
                "Sociology"
            ],
            description: "Liberal arts education fostering critical thinking and understanding of human society.",
            careers: [
                "Civil Servant",
                "Journalist",
                "Lawyer",
                "Psychologist",
                "Social Worker"
            ],
            color: "bg-purple-500"
        }
    ];
    return /*#__PURE__*/ _jsxDEV(Layout, {
        "data-lov-id": "src/pages/academics/HigherSecondary.tsx:41:4",
        "data-lov-name": "Layout",
        "data-component-path": "src/pages/academics/HigherSecondary.tsx",
        "data-component-line": "41",
        "data-component-file": "HigherSecondary.tsx",
        "data-component-name": "Layout",
        "data-component-content": "%7B%7D",
        children: /*#__PURE__*/ _jsxDEV("div", {
            "data-lov-id": "src/pages/academics/HigherSecondary.tsx:42:6",
            "data-lov-name": "div",
            "data-component-path": "src/pages/academics/HigherSecondary.tsx",
            "data-component-line": "42",
            "data-component-file": "HigherSecondary.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22min-h-screen%20bg-background%22%7D",
            className: "min-h-screen bg-background",
            children: [
                /*#__PURE__*/ _jsxDEV(PageBanner, {
                    "data-lov-id": "src/pages/academics/HigherSecondary.tsx:43:8",
                    "data-lov-name": "PageBanner",
                    "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                    "data-component-line": "43",
                    "data-component-file": "HigherSecondary.tsx",
                    "data-component-name": "PageBanner",
                    "data-component-content": "%7B%7D",
                    title: "Higher Secondary",
                    subtitle: "Grades 11-12: Specialized streams for higher education preparation and career development",
                    backgroundImage: classroomTech
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("section", {
                    "data-lov-id": "src/pages/academics/HigherSecondary.tsx:50:8",
                    "data-lov-name": "section",
                    "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                    "data-component-line": "50",
                    "data-component-file": "HigherSecondary.tsx",
                    "data-component-name": "section",
                    "data-component-content": "%7B%22className%22%3A%22py-16%22%7D",
                    className: "py-16",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/academics/HigherSecondary.tsx:51:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                        "data-component-line": "51",
                        "data-component-file": "HigherSecondary.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                        className: "container mx-auto px-4",
                        children: /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/academics/HigherSecondary.tsx:52:12",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                            "data-component-line": "52",
                            "data-component-file": "HigherSecondary.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22max-w-4xl%20mx-auto%20text-center%20mb-12%22%7D",
                            className: "max-w-4xl mx-auto text-center mb-12",
                            children: [
                                /*#__PURE__*/ _jsxDEV("h2", {
                                    "data-lov-id": "src/pages/academics/HigherSecondary.tsx:53:14",
                                    "data-lov-name": "h2",
                                    "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                    "data-component-line": "53",
                                    "data-component-file": "HigherSecondary.tsx",
                                    "data-component-name": "h2",
                                    "data-component-content": "%7B%22text%22%3A%22Academic%20Specialization%22%2C%22className%22%3A%22text-4xl%20font-bold%20text-school-brown%20mb-6%22%7D",
                                    className: "text-4xl font-bold text-school-brown mb-6",
                                    children: "Academic Specialization"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    "data-lov-id": "src/pages/academics/HigherSecondary.tsx:54:14",
                                    "data-lov-name": "p",
                                    "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                    "data-component-line": "54",
                                    "data-component-file": "HigherSecondary.tsx",
                                    "data-component-name": "p",
                                    "data-component-content": "%7B%22text%22%3A%22Our%20Higher%20Secondary%20program%20(Grades%2011%E2%80%9312)%20provides%20students%20with%20academic%20specialization%20while%20preparing%20them%20%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20for%20national-level%20entrance%20exams%20and%20future%20careers.%20Experienced%20faculty%2C%20advanced%20labs%2C%20and%20individualized%20%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20mentoring%20ensure%20that%20every%20learner%20receives%20the%20support%20needed%20to%20succeed%20in%20both%20academics%20and%20life.%22%2C%22className%22%3A%22text-lg%20text-elegant-light%20leading-relaxed%20mb-8%22%7D",
                                    className: "text-lg text-elegant-light leading-relaxed mb-8",
                                    children: "Our Higher Secondary program (Grades 11–12) provides students with academic specialization while preparing them for national-level entrance exams and future careers. Experienced faculty, advanced labs, and individualized mentoring ensure that every learner receives the support needed to succeed in both academics and life."
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/academics/HigherSecondary.tsx:59:14",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                    "data-component-line": "59",
                                    "data-component-file": "HigherSecondary.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22bg-gradient-to-r%20from-school-brown%20to-school-gold%20text-white%20p-6%20rounded-lg%22%7D",
                                    className: "bg-gradient-to-r from-school-brown to-school-gold text-white p-6 rounded-lg",
                                    children: /*#__PURE__*/ _jsxDEV("p", {
                                        "data-lov-id": "src/pages/academics/HigherSecondary.tsx:60:16",
                                        "data-lov-name": "p",
                                        "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                        "data-component-line": "60",
                                        "data-component-file": "HigherSecondary.tsx",
                                        "data-component-name": "p",
                                        "data-component-content": "%7B%22text%22%3A%22%F0%9F%8E%AF%20Career%20Counselling%20%26%20University%20Prep%20Support%20included%20in%20all%20streams%22%2C%22className%22%3A%22text-lg%20font-semibold%22%7D",
                                        className: "text-lg font-semibold",
                                        children: "🎯 Career Counselling & University Prep Support included in all streams"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                        lineNumber: 60,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("section", {
                    "data-lov-id": "src/pages/academics/HigherSecondary.tsx:69:8",
                    "data-lov-name": "section",
                    "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                    "data-component-line": "69",
                    "data-component-file": "HigherSecondary.tsx",
                    "data-component-name": "section",
                    "data-component-content": "%7B%22className%22%3A%22py-16%20bg-gray-50%22%7D",
                    className: "py-16 bg-gray-50",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/academics/HigherSecondary.tsx:70:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                        "data-component-line": "70",
                        "data-component-file": "HigherSecondary.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                        className: "container mx-auto px-4",
                        children: /*#__PURE__*/ _jsxDEV(Tabs, {
                            "data-lov-id": "src/pages/academics/HigherSecondary.tsx:71:12",
                            "data-lov-name": "Tabs",
                            "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                            "data-component-line": "71",
                            "data-component-file": "HigherSecondary.tsx",
                            "data-component-name": "Tabs",
                            "data-component-content": "%7B%22className%22%3A%22max-w-6xl%20mx-auto%22%7D",
                            defaultValue: "science",
                            className: "max-w-6xl mx-auto",
                            children: [
                                /*#__PURE__*/ _jsxDEV(TabsList, {
                                    "data-lov-id": "src/pages/academics/HigherSecondary.tsx:72:14",
                                    "data-lov-name": "TabsList",
                                    "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                    "data-component-line": "72",
                                    "data-component-file": "HigherSecondary.tsx",
                                    "data-component-name": "TabsList",
                                    "data-component-content": "%7B%22className%22%3A%22grid%20w-full%20grid-cols-3%20mb-8%22%7D",
                                    className: "grid w-full grid-cols-3 mb-8",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV(TabsTrigger, {
                                            "data-lov-id": "src/pages/academics/HigherSecondary.tsx:73:16",
                                            "data-lov-name": "TabsTrigger",
                                            "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                            "data-component-line": "73",
                                            "data-component-file": "HigherSecondary.tsx",
                                            "data-component-name": "TabsTrigger",
                                            "data-component-content": "%7B%22text%22%3A%22%F0%9F%93%98%20Science%22%2C%22className%22%3A%22text-base%22%7D",
                                            value: "science",
                                            className: "text-base",
                                            children: "📘 Science"
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                            lineNumber: 73,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV(TabsTrigger, {
                                            "data-lov-id": "src/pages/academics/HigherSecondary.tsx:74:16",
                                            "data-lov-name": "TabsTrigger",
                                            "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                            "data-component-line": "74",
                                            "data-component-file": "HigherSecondary.tsx",
                                            "data-component-name": "TabsTrigger",
                                            "data-component-content": "%7B%22text%22%3A%22%F0%9F%93%8A%20Commerce%22%2C%22className%22%3A%22text-base%22%7D",
                                            value: "commerce",
                                            className: "text-base",
                                            children: "📊 Commerce"
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV(TabsTrigger, {
                                            "data-lov-id": "src/pages/academics/HigherSecondary.tsx:75:16",
                                            "data-lov-name": "TabsTrigger",
                                            "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                            "data-component-line": "75",
                                            "data-component-file": "HigherSecondary.tsx",
                                            "data-component-name": "TabsTrigger",
                                            "data-component-content": "%7B%22text%22%3A%22%F0%9F%93%9C%20Humanities%22%2C%22className%22%3A%22text-base%22%7D",
                                            value: "humanities",
                                            className: "text-base",
                                            children: "📜 Humanities"
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                            lineNumber: 75,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this),
                                streams.map((stream)=>/*#__PURE__*/ _jsxDEV(TabsContent, {
                                        "data-lov-id": "src/pages/academics/HigherSecondary.tsx:79:16",
                                        "data-lov-name": "TabsContent",
                                        "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                        "data-component-line": "79",
                                        "data-component-file": "HigherSecondary.tsx",
                                        "data-component-name": "TabsContent",
                                        "data-component-content": "%7B%22className%22%3A%22mt-8%22%7D",
                                        value: stream.id,
                                        className: "mt-8",
                                        children: /*#__PURE__*/ _jsxDEV(Card, {
                                            "data-lov-id": "src/pages/academics/HigherSecondary.tsx:80:18",
                                            "data-lov-name": "Card",
                                            "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                            "data-component-line": "80",
                                            "data-component-file": "HigherSecondary.tsx",
                                            "data-component-name": "Card",
                                            "data-component-content": "%7B%22className%22%3A%22overflow-hidden%22%7D",
                                            className: "overflow-hidden",
                                            children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                                "data-lov-id": "src/pages/academics/HigherSecondary.tsx:81:20",
                                                "data-lov-name": "CardContent",
                                                "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                "data-component-line": "81",
                                                "data-component-file": "HigherSecondary.tsx",
                                                "data-component-name": "CardContent",
                                                "data-component-content": "%7B%22className%22%3A%22p-0%22%7D",
                                                className: "p-0",
                                                children: /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/academics/HigherSecondary.tsx:82:22",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                    "data-component-line": "82",
                                                    "data-component-file": "HigherSecondary.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22grid%20lg%3Agrid-cols-2%20gap-0%22%7D",
                                                    className: "grid lg:grid-cols-2 gap-0",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            "data-lov-id": "src/pages/academics/HigherSecondary.tsx:83:24",
                                                            "data-lov-name": "div",
                                                            "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                            "data-component-line": "83",
                                                            "data-component-file": "HigherSecondary.tsx",
                                                            "data-component-name": "div",
                                                            "data-component-content": "%7B%22className%22%3A%22p-8%20bg-white%22%7D",
                                                            className: "p-8 bg-white",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                    "data-lov-id": "src/pages/academics/HigherSecondary.tsx:84:26",
                                                                    "data-lov-name": "div",
                                                                    "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                                    "data-component-line": "84",
                                                                    "data-component-file": "HigherSecondary.tsx",
                                                                    "data-component-name": "div",
                                                                    "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20mb-6%22%7D",
                                                                    className: "flex items-center mb-6",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                            "data-lov-id": "src/pages/academics/HigherSecondary.tsx:85:28",
                                                                            "data-lov-name": "div",
                                                                            "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                                            "data-component-line": "85",
                                                                            "data-component-file": "HigherSecondary.tsx",
                                                                            "data-component-name": "div",
                                                                            "data-component-content": "%7B%7D",
                                                                            className: `w-12 h-12 rounded-full flex items-center justify-center ${stream.color} mr-4`,
                                                                            children: /*#__PURE__*/ _jsxDEV(stream.icon, {
                                                                                "data-lov-id": "src/pages/academics/HigherSecondary.tsx:86:30",
                                                                                "data-lov-name": "stream.icon",
                                                                                "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                                                "data-component-line": "86",
                                                                                "data-component-file": "HigherSecondary.tsx",
                                                                                "data-component-name": "stream.icon",
                                                                                "data-component-content": "%7B%22className%22%3A%22h-6%20w-6%20text-white%22%7D",
                                                                                className: "h-6 w-6 text-white"
                                                                            }, void 0, false, {
                                                                                fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                                                lineNumber: 86,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                                            lineNumber: 85,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ _jsxDEV("h3", {
                                                                            "data-lov-id": "src/pages/academics/HigherSecondary.tsx:88:28",
                                                                            "data-lov-name": "h3",
                                                                            "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                                            "data-component-line": "88",
                                                                            "data-component-file": "HigherSecondary.tsx",
                                                                            "data-component-name": "h3",
                                                                            "data-component-content": "%7B%22className%22%3A%22text-3xl%20font-bold%20text-school-brown%22%7D",
                                                                            className: "text-3xl font-bold text-school-brown",
                                                                            children: stream.title
                                                                        }, void 0, false, {
                                                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                                            lineNumber: 88,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                                    lineNumber: 84,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV("p", {
                                                                    "data-lov-id": "src/pages/academics/HigherSecondary.tsx:90:26",
                                                                    "data-lov-name": "p",
                                                                    "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                                    "data-component-line": "90",
                                                                    "data-component-file": "HigherSecondary.tsx",
                                                                    "data-component-name": "p",
                                                                    "data-component-content": "%7B%22className%22%3A%22text-lg%20text-elegant-light%20mb-6%20leading-relaxed%22%7D",
                                                                    className: "text-lg text-elegant-light mb-6 leading-relaxed",
                                                                    children: stream.description
                                                                }, void 0, false, {
                                                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                                    lineNumber: 90,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                    "data-lov-id": "src/pages/academics/HigherSecondary.tsx:93:26",
                                                                    "data-lov-name": "div",
                                                                    "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                                    "data-component-line": "93",
                                                                    "data-component-file": "HigherSecondary.tsx",
                                                                    "data-component-name": "div",
                                                                    "data-component-content": "%7B%22className%22%3A%22mb-6%22%7D",
                                                                    className: "mb-6",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxDEV("h4", {
                                                                            "data-lov-id": "src/pages/academics/HigherSecondary.tsx:94:28",
                                                                            "data-lov-name": "h4",
                                                                            "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                                            "data-component-line": "94",
                                                                            "data-component-file": "HigherSecondary.tsx",
                                                                            "data-component-name": "h4",
                                                                            "data-component-content": "%7B%22text%22%3A%22Core%20Subjects%3A%22%2C%22className%22%3A%22text-xl%20font-bold%20text-school-brown%20mb-3%22%7D",
                                                                            className: "text-xl font-bold text-school-brown mb-3",
                                                                            children: "Core Subjects:"
                                                                        }, void 0, false, {
                                                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                                            lineNumber: 94,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                                            "data-lov-id": "src/pages/academics/HigherSecondary.tsx:95:28",
                                                                            "data-lov-name": "div",
                                                                            "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                                            "data-component-line": "95",
                                                                            "data-component-file": "HigherSecondary.tsx",
                                                                            "data-component-name": "div",
                                                                            "data-component-content": "%7B%22className%22%3A%22grid%20grid-cols-2%20gap-2%22%7D",
                                                                            className: "grid grid-cols-2 gap-2",
                                                                            children: stream.subjects.map((subject, index)=>/*#__PURE__*/ _jsxDEV("div", {
                                                                                    "data-lov-id": "src/pages/academics/HigherSecondary.tsx:97:32",
                                                                                    "data-lov-name": "div",
                                                                                    "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                                                    "data-component-line": "97",
                                                                                    "data-component-file": "HigherSecondary.tsx",
                                                                                    "data-component-name": "div",
                                                                                    "data-component-content": "%7B%22className%22%3A%22bg-gray-100%20px-3%20py-2%20rounded-lg%20text-sm%20font-medium%20text-school-brown%22%7D",
                                                                                    className: "bg-gray-100 px-3 py-2 rounded-lg text-sm font-medium text-school-brown",
                                                                                    children: subject
                                                                                }, index, false, {
                                                                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                                                    lineNumber: 97,
                                                                                    columnNumber: 33
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                                            lineNumber: 95,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                                    lineNumber: 93,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            "data-lov-id": "src/pages/academics/HigherSecondary.tsx:104:24",
                                                            "data-lov-name": "div",
                                                            "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                            "data-component-line": "104",
                                                            "data-component-file": "HigherSecondary.tsx",
                                                            "data-component-name": "div",
                                                            "data-component-content": "%7B%7D",
                                                            className: `p-8 ${stream.color} text-white`,
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV("h4", {
                                                                    "data-lov-id": "src/pages/academics/HigherSecondary.tsx:105:26",
                                                                    "data-lov-name": "h4",
                                                                    "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                                    "data-component-line": "105",
                                                                    "data-component-file": "HigherSecondary.tsx",
                                                                    "data-component-name": "h4",
                                                                    "data-component-content": "%7B%22text%22%3A%22Career%20Opportunities%22%2C%22className%22%3A%22text-2xl%20font-bold%20mb-4%22%7D",
                                                                    className: "text-2xl font-bold mb-4",
                                                                    children: "Career Opportunities"
                                                                }, void 0, false, {
                                                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                                    lineNumber: 105,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                    "data-lov-id": "src/pages/academics/HigherSecondary.tsx:106:26",
                                                                    "data-lov-name": "div",
                                                                    "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                                    "data-component-line": "106",
                                                                    "data-component-file": "HigherSecondary.tsx",
                                                                    "data-component-name": "div",
                                                                    "data-component-content": "%7B%22className%22%3A%22space-y-3%22%7D",
                                                                    className: "space-y-3",
                                                                    children: stream.careers.map((career, index)=>/*#__PURE__*/ _jsxDEV("div", {
                                                                            "data-lov-id": "src/pages/academics/HigherSecondary.tsx:108:30",
                                                                            "data-lov-name": "div",
                                                                            "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                                            "data-component-line": "108",
                                                                            "data-component-file": "HigherSecondary.tsx",
                                                                            "data-component-name": "div",
                                                                            "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20space-x-3%22%7D",
                                                                            className: "flex items-center space-x-3",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                                    "data-lov-id": "src/pages/academics/HigherSecondary.tsx:109:32",
                                                                                    "data-lov-name": "div",
                                                                                    "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                                                    "data-component-line": "109",
                                                                                    "data-component-file": "HigherSecondary.tsx",
                                                                                    "data-component-name": "div",
                                                                                    "data-component-content": "%7B%22className%22%3A%22w-2%20h-2%20bg-white%20rounded-full%22%7D",
                                                                                    className: "w-2 h-2 bg-white rounded-full"
                                                                                }, void 0, false, {
                                                                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                                                    lineNumber: 109,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ _jsxDEV("span", {
                                                                                    "data-lov-id": "src/pages/academics/HigherSecondary.tsx:110:32",
                                                                                    "data-lov-name": "span",
                                                                                    "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                                                    "data-component-line": "110",
                                                                                    "data-component-file": "HigherSecondary.tsx",
                                                                                    "data-component-name": "span",
                                                                                    "data-component-content": "%7B%22className%22%3A%22text-lg%22%7D",
                                                                                    className: "text-lg",
                                                                                    children: career
                                                                                }, void 0, false, {
                                                                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                                                    lineNumber: 110,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, index, true, {
                                                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                                            lineNumber: 108,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                                    lineNumber: 106,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                    "data-lov-id": "src/pages/academics/HigherSecondary.tsx:114:26",
                                                                    "data-lov-name": "div",
                                                                    "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                                    "data-component-line": "114",
                                                                    "data-component-file": "HigherSecondary.tsx",
                                                                    "data-component-name": "div",
                                                                    "data-component-content": "%7B%22className%22%3A%22mt-8%20p-4%20bg-white%2F20%20rounded-lg%22%7D",
                                                                    className: "mt-8 p-4 bg-white/20 rounded-lg",
                                                                    children: /*#__PURE__*/ _jsxDEV("p", {
                                                                        "data-lov-id": "src/pages/academics/HigherSecondary.tsx:115:28",
                                                                        "data-lov-name": "p",
                                                                        "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                                        "data-component-line": "115",
                                                                        "data-component-file": "HigherSecondary.tsx",
                                                                        "data-component-name": "p",
                                                                        "data-component-content": "%7B%22text%22%3A%22Entrance%20exam%20preparation%2C%20practical%20training%2C%20%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20and%20industry%20exposure%20to%20ensure%20career%20readiness.%22%2C%22className%22%3A%22text-sm%22%7D",
                                                                        className: "text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsxDEV("strong", {
                                                                                "data-lov-id": "src/pages/academics/HigherSecondary.tsx:116:30",
                                                                                "data-lov-name": "strong",
                                                                                "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                                                "data-component-line": "116",
                                                                                "data-component-file": "HigherSecondary.tsx",
                                                                                "data-component-name": "strong",
                                                                                "data-component-content": "%7B%22text%22%3A%22Special%20Focus%3A%22%7D",
                                                                                children: "Special Focus:"
                                                                            }, void 0, false, {
                                                                                fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                                                lineNumber: 116,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            " Entrance exam preparation, practical training, and industry exposure to ensure career readiness."
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                                        lineNumber: 115,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                                    lineNumber: 114,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                            lineNumber: 104,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                lineNumber: 81,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                            lineNumber: 80,
                                            columnNumber: 19
                                        }, this)
                                    }, stream.id, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                        lineNumber: 79,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                            lineNumber: 71,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("section", {
                    "data-lov-id": "src/pages/academics/HigherSecondary.tsx:131:8",
                    "data-lov-name": "section",
                    "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                    "data-component-line": "131",
                    "data-component-file": "HigherSecondary.tsx",
                    "data-component-name": "section",
                    "data-component-content": "%7B%22className%22%3A%22py-16%22%7D",
                    className: "py-16",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/academics/HigherSecondary.tsx:132:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                        "data-component-line": "132",
                        "data-component-file": "HigherSecondary.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                        className: "container mx-auto px-4",
                        children: [
                            /*#__PURE__*/ _jsxDEV("h2", {
                                "data-lov-id": "src/pages/academics/HigherSecondary.tsx:133:12",
                                "data-lov-name": "h2",
                                "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                "data-component-line": "133",
                                "data-component-file": "HigherSecondary.tsx",
                                "data-component-name": "h2",
                                "data-component-content": "%7B%22text%22%3A%22Student%20Support%20Services%22%2C%22className%22%3A%22text-4xl%20font-bold%20text-school-brown%20text-center%20mb-12%22%7D",
                                className: "text-4xl font-bold text-school-brown text-center mb-12",
                                children: "Student Support Services"
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/pages/academics/HigherSecondary.tsx:134:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                "data-component-line": "134",
                                "data-component-file": "HigherSecondary.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-3%20gap-8%22%7D",
                                className: "grid md:grid-cols-3 gap-8",
                                children: [
                                    /*#__PURE__*/ _jsxDEV(Card, {
                                        "data-lov-id": "src/pages/academics/HigherSecondary.tsx:135:14",
                                        "data-lov-name": "Card",
                                        "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                        "data-component-line": "135",
                                        "data-component-file": "HigherSecondary.tsx",
                                        "data-component-name": "Card",
                                        "data-component-content": "%7B%22className%22%3A%22text-center%20hover%3Ashadow-xl%20transition-all%20duration-300%20hover-scale%22%7D",
                                        className: "text-center hover:shadow-xl transition-all duration-300 hover-scale",
                                        children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                            "data-lov-id": "src/pages/academics/HigherSecondary.tsx:136:16",
                                            "data-lov-name": "CardContent",
                                            "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                            "data-component-line": "136",
                                            "data-component-file": "HigherSecondary.tsx",
                                            "data-component-name": "CardContent",
                                            "data-component-content": "%7B%22className%22%3A%22p-6%22%7D",
                                            className: "p-6",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/academics/HigherSecondary.tsx:137:18",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                    "data-component-line": "137",
                                                    "data-component-file": "HigherSecondary.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22bg-school-gold%20w-16%20h-16%20rounded-full%20flex%20items-center%20justify-center%20mx-auto%20mb-4%22%7D",
                                                    className: "bg-school-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
                                                    children: /*#__PURE__*/ _jsxDEV(Users, {
                                                        "data-lov-id": "src/pages/academics/HigherSecondary.tsx:138:20",
                                                        "data-lov-name": "Users",
                                                        "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                        "data-component-line": "138",
                                                        "data-component-file": "HigherSecondary.tsx",
                                                        "data-component-name": "Users",
                                                        "data-component-content": "%7B%22className%22%3A%22h-8%20w-8%20text-white%22%7D",
                                                        className: "h-8 w-8 text-white"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("h3", {
                                                    "data-lov-id": "src/pages/academics/HigherSecondary.tsx:140:18",
                                                    "data-lov-name": "h3",
                                                    "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                    "data-component-line": "140",
                                                    "data-component-file": "HigherSecondary.tsx",
                                                    "data-component-name": "h3",
                                                    "data-component-content": "%7B%22text%22%3A%22Mentorship%20Program%22%2C%22className%22%3A%22text-xl%20font-bold%20text-school-brown%20mb-3%22%7D",
                                                    className: "text-xl font-bold text-school-brown mb-3",
                                                    children: "Mentorship Program"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/academics/HigherSecondary.tsx:141:18",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                    "data-component-line": "141",
                                                    "data-component-file": "HigherSecondary.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22text%22%3A%22Dedicated%20faculty%20mentors%20guide%20students%20through%20academic%20challenges%20and%20career%20planning%20decisions.%22%2C%22className%22%3A%22text-elegant-light%22%7D",
                                                    className: "text-elegant-light",
                                                    children: "Dedicated faculty mentors guide students through academic challenges and career planning decisions."
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                            lineNumber: 136,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV(Card, {
                                        "data-lov-id": "src/pages/academics/HigherSecondary.tsx:147:14",
                                        "data-lov-name": "Card",
                                        "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                        "data-component-line": "147",
                                        "data-component-file": "HigherSecondary.tsx",
                                        "data-component-name": "Card",
                                        "data-component-content": "%7B%22className%22%3A%22text-center%20hover%3Ashadow-xl%20transition-all%20duration-300%20hover-scale%22%7D",
                                        className: "text-center hover:shadow-xl transition-all duration-300 hover-scale",
                                        children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                            "data-lov-id": "src/pages/academics/HigherSecondary.tsx:148:16",
                                            "data-lov-name": "CardContent",
                                            "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                            "data-component-line": "148",
                                            "data-component-file": "HigherSecondary.tsx",
                                            "data-component-name": "CardContent",
                                            "data-component-content": "%7B%22className%22%3A%22p-6%22%7D",
                                            className: "p-6",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/academics/HigherSecondary.tsx:149:18",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                    "data-component-line": "149",
                                                    "data-component-file": "HigherSecondary.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22bg-school-gold%20w-16%20h-16%20rounded-full%20flex%20items-center%20justify-center%20mx-auto%20mb-4%22%7D",
                                                    className: "bg-school-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
                                                    children: /*#__PURE__*/ _jsxDEV(Calculator, {
                                                        "data-lov-id": "src/pages/academics/HigherSecondary.tsx:150:20",
                                                        "data-lov-name": "Calculator",
                                                        "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                        "data-component-line": "150",
                                                        "data-component-file": "HigherSecondary.tsx",
                                                        "data-component-name": "Calculator",
                                                        "data-component-content": "%7B%22className%22%3A%22h-8%20w-8%20text-white%22%7D",
                                                        className: "h-8 w-8 text-white"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("h3", {
                                                    "data-lov-id": "src/pages/academics/HigherSecondary.tsx:152:18",
                                                    "data-lov-name": "h3",
                                                    "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                    "data-component-line": "152",
                                                    "data-component-file": "HigherSecondary.tsx",
                                                    "data-component-name": "h3",
                                                    "data-component-content": "%7B%22text%22%3A%22Entrance%20Exam%20Prep%22%2C%22className%22%3A%22text-xl%20font-bold%20text-school-brown%20mb-3%22%7D",
                                                    className: "text-xl font-bold text-school-brown mb-3",
                                                    children: "Entrance Exam Prep"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/academics/HigherSecondary.tsx:153:18",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                    "data-component-line": "153",
                                                    "data-component-file": "HigherSecondary.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22text%22%3A%22Specialized%20coaching%20for%20JEE%2C%20NEET%2C%20CET%2C%20and%20other%20competitive%20entrance%20examinations.%22%2C%22className%22%3A%22text-elegant-light%22%7D",
                                                    className: "text-elegant-light",
                                                    children: "Specialized coaching for JEE, NEET, CET, and other competitive entrance examinations."
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                            lineNumber: 148,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV(Card, {
                                        "data-lov-id": "src/pages/academics/HigherSecondary.tsx:159:14",
                                        "data-lov-name": "Card",
                                        "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                        "data-component-line": "159",
                                        "data-component-file": "HigherSecondary.tsx",
                                        "data-component-name": "Card",
                                        "data-component-content": "%7B%22className%22%3A%22text-center%20hover%3Ashadow-xl%20transition-all%20duration-300%20hover-scale%22%7D",
                                        className: "text-center hover:shadow-xl transition-all duration-300 hover-scale",
                                        children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                            "data-lov-id": "src/pages/academics/HigherSecondary.tsx:160:16",
                                            "data-lov-name": "CardContent",
                                            "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                            "data-component-line": "160",
                                            "data-component-file": "HigherSecondary.tsx",
                                            "data-component-name": "CardContent",
                                            "data-component-content": "%7B%22className%22%3A%22p-6%22%7D",
                                            className: "p-6",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/academics/HigherSecondary.tsx:161:18",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                    "data-component-line": "161",
                                                    "data-component-file": "HigherSecondary.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22bg-school-gold%20w-16%20h-16%20rounded-full%20flex%20items-center%20justify-center%20mx-auto%20mb-4%22%7D",
                                                    className: "bg-school-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
                                                    children: /*#__PURE__*/ _jsxDEV(GraduationCap, {
                                                        "data-lov-id": "src/pages/academics/HigherSecondary.tsx:162:20",
                                                        "data-lov-name": "GraduationCap",
                                                        "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                        "data-component-line": "162",
                                                        "data-component-file": "HigherSecondary.tsx",
                                                        "data-component-name": "GraduationCap",
                                                        "data-component-content": "%7B%22className%22%3A%22h-8%20w-8%20text-white%22%7D",
                                                        className: "h-8 w-8 text-white"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("h3", {
                                                    "data-lov-id": "src/pages/academics/HigherSecondary.tsx:164:18",
                                                    "data-lov-name": "h3",
                                                    "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                    "data-component-line": "164",
                                                    "data-component-file": "HigherSecondary.tsx",
                                                    "data-component-name": "h3",
                                                    "data-component-content": "%7B%22text%22%3A%22University%20Guidance%22%2C%22className%22%3A%22text-xl%20font-bold%20text-school-brown%20mb-3%22%7D",
                                                    className: "text-xl font-bold text-school-brown mb-3",
                                                    children: "University Guidance"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/academics/HigherSecondary.tsx:165:18",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                    "data-component-line": "165",
                                                    "data-component-file": "HigherSecondary.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22text%22%3A%22Comprehensive%20counseling%20for%20college%20applications%2C%20scholarship%20opportunities%2C%20and%20career%20pathways.%22%2C%22className%22%3A%22text-elegant-light%22%7D",
                                                    className: "text-elegant-light",
                                                    children: "Comprehensive counseling for college applications, scholarship opportunities, and career pathways."
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                            lineNumber: 160,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("section", {
                    "data-lov-id": "src/pages/academics/HigherSecondary.tsx:175:8",
                    "data-lov-name": "section",
                    "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                    "data-component-line": "175",
                    "data-component-file": "HigherSecondary.tsx",
                    "data-component-name": "section",
                    "data-component-content": "%7B%22className%22%3A%22py-16%20bg-gradient-to-r%20from-amber-50%20to-orange-50%22%7D",
                    className: "py-16 bg-gradient-to-r from-amber-50 to-orange-50",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/academics/HigherSecondary.tsx:176:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                        "data-component-line": "176",
                        "data-component-file": "HigherSecondary.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                        className: "container mx-auto px-4",
                        children: /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/academics/HigherSecondary.tsx:177:12",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                            "data-component-line": "177",
                            "data-component-file": "HigherSecondary.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22grid%20lg%3Agrid-cols-2%20gap-12%20items-center%22%7D",
                            className: "grid lg:grid-cols-2 gap-12 items-center",
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/academics/HigherSecondary.tsx:178:14",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                    "data-component-line": "178",
                                    "data-component-file": "HigherSecondary.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%7D",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("h2", {
                                            "data-lov-id": "src/pages/academics/HigherSecondary.tsx:179:16",
                                            "data-lov-name": "h2",
                                            "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                            "data-component-line": "179",
                                            "data-component-file": "HigherSecondary.tsx",
                                            "data-component-name": "h2",
                                            "data-component-content": "%7B%22text%22%3A%22Advanced%20Facilities%22%2C%22className%22%3A%22text-4xl%20font-bold%20text-school-brown%20mb-6%22%7D",
                                            className: "text-4xl font-bold text-school-brown mb-6",
                                            children: "Advanced Facilities"
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                            lineNumber: 179,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/pages/academics/HigherSecondary.tsx:180:16",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                            "data-component-line": "180",
                                            "data-component-file": "HigherSecondary.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22space-y-4%22%7D",
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/academics/HigherSecondary.tsx:181:18",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                    "data-component-line": "181",
                                                    "data-component-file": "HigherSecondary.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20space-x-4%22%7D",
                                                    className: "flex items-center space-x-4",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            "data-lov-id": "src/pages/academics/HigherSecondary.tsx:182:20",
                                                            "data-lov-name": "div",
                                                            "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                            "data-component-line": "182",
                                                            "data-component-file": "HigherSecondary.tsx",
                                                            "data-component-name": "div",
                                                            "data-component-content": "%7B%22className%22%3A%22w-3%20h-3%20bg-school-gold%20rounded-full%22%7D",
                                                            className: "w-3 h-3 bg-school-gold rounded-full"
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                            lineNumber: 182,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("p", {
                                                            "data-lov-id": "src/pages/academics/HigherSecondary.tsx:183:20",
                                                            "data-lov-name": "p",
                                                            "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                            "data-component-line": "183",
                                                            "data-component-file": "HigherSecondary.tsx",
                                                            "data-component-name": "p",
                                                            "data-component-content": "%7B%22text%22%3A%22Well-equipped%20laboratories%20for%20practical%20learning%22%2C%22className%22%3A%22text-lg%20text-elegant-light%22%7D",
                                                            className: "text-lg text-elegant-light",
                                                            children: "Well-equipped laboratories for practical learning"
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                            lineNumber: 183,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/academics/HigherSecondary.tsx:185:18",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                    "data-component-line": "185",
                                                    "data-component-file": "HigherSecondary.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20space-x-4%22%7D",
                                                    className: "flex items-center space-x-4",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            "data-lov-id": "src/pages/academics/HigherSecondary.tsx:186:20",
                                                            "data-lov-name": "div",
                                                            "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                            "data-component-line": "186",
                                                            "data-component-file": "HigherSecondary.tsx",
                                                            "data-component-name": "div",
                                                            "data-component-content": "%7B%22className%22%3A%22w-3%20h-3%20bg-school-gold%20rounded-full%22%7D",
                                                            className: "w-3 h-3 bg-school-gold rounded-full"
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                            lineNumber: 186,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("p", {
                                                            "data-lov-id": "src/pages/academics/HigherSecondary.tsx:187:20",
                                                            "data-lov-name": "p",
                                                            "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                            "data-component-line": "187",
                                                            "data-component-file": "HigherSecondary.tsx",
                                                            "data-component-name": "p",
                                                            "data-component-content": "%7B%22text%22%3A%22Digital%20classrooms%20with%20smart%20boards%20and%20projectors%22%2C%22className%22%3A%22text-lg%20text-elegant-light%22%7D",
                                                            className: "text-lg text-elegant-light",
                                                            children: "Digital classrooms with smart boards and projectors"
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                            lineNumber: 187,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/academics/HigherSecondary.tsx:189:18",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                    "data-component-line": "189",
                                                    "data-component-file": "HigherSecondary.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20space-x-4%22%7D",
                                                    className: "flex items-center space-x-4",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            "data-lov-id": "src/pages/academics/HigherSecondary.tsx:190:20",
                                                            "data-lov-name": "div",
                                                            "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                            "data-component-line": "190",
                                                            "data-component-file": "HigherSecondary.tsx",
                                                            "data-component-name": "div",
                                                            "data-component-content": "%7B%22className%22%3A%22w-3%20h-3%20bg-school-gold%20rounded-full%22%7D",
                                                            className: "w-3 h-3 bg-school-gold rounded-full"
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                            lineNumber: 190,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("p", {
                                                            "data-lov-id": "src/pages/academics/HigherSecondary.tsx:191:20",
                                                            "data-lov-name": "p",
                                                            "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                            "data-component-line": "191",
                                                            "data-component-file": "HigherSecondary.tsx",
                                                            "data-component-name": "p",
                                                            "data-component-content": "%7B%22text%22%3A%22Comprehensive%20library%20with%20reference%20materials%22%2C%22className%22%3A%22text-lg%20text-elegant-light%22%7D",
                                                            className: "text-lg text-elegant-light",
                                                            children: "Comprehensive library with reference materials"
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                            lineNumber: 191,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/academics/HigherSecondary.tsx:193:18",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                    "data-component-line": "193",
                                                    "data-component-file": "HigherSecondary.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20space-x-4%22%7D",
                                                    className: "flex items-center space-x-4",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            "data-lov-id": "src/pages/academics/HigherSecondary.tsx:194:20",
                                                            "data-lov-name": "div",
                                                            "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                            "data-component-line": "194",
                                                            "data-component-file": "HigherSecondary.tsx",
                                                            "data-component-name": "div",
                                                            "data-component-content": "%7B%22className%22%3A%22w-3%20h-3%20bg-school-gold%20rounded-full%22%7D",
                                                            className: "w-3 h-3 bg-school-gold rounded-full"
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                            lineNumber: 194,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("p", {
                                                            "data-lov-id": "src/pages/academics/HigherSecondary.tsx:195:20",
                                                            "data-lov-name": "p",
                                                            "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                            "data-component-line": "195",
                                                            "data-component-file": "HigherSecondary.tsx",
                                                            "data-component-name": "p",
                                                            "data-component-content": "%7B%22text%22%3A%22Computer%20labs%20with%20internet%20connectivity%22%2C%22className%22%3A%22text-lg%20text-elegant-light%22%7D",
                                                            className: "text-lg text-elegant-light",
                                                            children: "Computer labs with internet connectivity"
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                            lineNumber: 195,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/academics/HigherSecondary.tsx:197:18",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                    "data-component-line": "197",
                                                    "data-component-file": "HigherSecondary.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20space-x-4%22%7D",
                                                    className: "flex items-center space-x-4",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            "data-lov-id": "src/pages/academics/HigherSecondary.tsx:198:20",
                                                            "data-lov-name": "div",
                                                            "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                            "data-component-line": "198",
                                                            "data-component-file": "HigherSecondary.tsx",
                                                            "data-component-name": "div",
                                                            "data-component-content": "%7B%22className%22%3A%22w-3%20h-3%20bg-school-gold%20rounded-full%22%7D",
                                                            className: "w-3 h-3 bg-school-gold rounded-full"
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                            lineNumber: 198,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("p", {
                                                            "data-lov-id": "src/pages/academics/HigherSecondary.tsx:199:20",
                                                            "data-lov-name": "p",
                                                            "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                            "data-component-line": "199",
                                                            "data-component-file": "HigherSecondary.tsx",
                                                            "data-component-name": "p",
                                                            "data-component-content": "%7B%22text%22%3A%22Dedicated%20spaces%20for%20group%20study%20and%20discussions%22%2C%22className%22%3A%22text-lg%20text-elegant-light%22%7D",
                                                            className: "text-lg text-elegant-light",
                                                            children: "Dedicated spaces for group study and discussions"
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                            lineNumber: 199,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                    lineNumber: 178,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/academics/HigherSecondary.tsx:203:14",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                    "data-component-line": "203",
                                    "data-component-file": "HigherSecondary.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22bg-white%20p-8%20rounded-lg%20shadow-lg%22%7D",
                                    className: "bg-white p-8 rounded-lg shadow-lg",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("h3", {
                                            "data-lov-id": "src/pages/academics/HigherSecondary.tsx:204:16",
                                            "data-lov-name": "h3",
                                            "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                            "data-component-line": "204",
                                            "data-component-file": "HigherSecondary.tsx",
                                            "data-component-name": "h3",
                                            "data-component-content": "%7B%22text%22%3A%22Academic%20Excellence%22%2C%22className%22%3A%22text-2xl%20font-bold%20text-school-brown%20mb-4%22%7D",
                                            className: "text-2xl font-bold text-school-brown mb-4",
                                            children: "Academic Excellence"
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                            lineNumber: 204,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/pages/academics/HigherSecondary.tsx:205:16",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                            "data-component-line": "205",
                                            "data-component-file": "HigherSecondary.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22space-y-4%22%7D",
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/academics/HigherSecondary.tsx:206:18",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                    "data-component-line": "206",
                                                    "data-component-file": "HigherSecondary.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22flex%20justify-between%20items-center%22%7D",
                                                    className: "flex justify-between items-center",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("span", {
                                                            "data-lov-id": "src/pages/academics/HigherSecondary.tsx:207:20",
                                                            "data-lov-name": "span",
                                                            "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                            "data-component-line": "207",
                                                            "data-component-file": "HigherSecondary.tsx",
                                                            "data-component-name": "span",
                                                            "data-component-content": "%7B%22text%22%3A%22Board%20Exam%20Pass%20Rate%22%2C%22className%22%3A%22text-elegant-light%22%7D",
                                                            className: "text-elegant-light",
                                                            children: "Board Exam Pass Rate"
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                            lineNumber: 207,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("span", {
                                                            "data-lov-id": "src/pages/academics/HigherSecondary.tsx:208:20",
                                                            "data-lov-name": "span",
                                                            "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                            "data-component-line": "208",
                                                            "data-component-file": "HigherSecondary.tsx",
                                                            "data-component-name": "span",
                                                            "data-component-content": "%7B%22text%22%3A%2298%25%22%2C%22className%22%3A%22font-bold%20text-school-gold%20text-xl%22%7D",
                                                            className: "font-bold text-school-gold text-xl",
                                                            children: "98%"
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                            lineNumber: 208,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/academics/HigherSecondary.tsx:210:18",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                    "data-component-line": "210",
                                                    "data-component-file": "HigherSecondary.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22flex%20justify-between%20items-center%22%7D",
                                                    className: "flex justify-between items-center",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("span", {
                                                            "data-lov-id": "src/pages/academics/HigherSecondary.tsx:211:20",
                                                            "data-lov-name": "span",
                                                            "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                            "data-component-line": "211",
                                                            "data-component-file": "HigherSecondary.tsx",
                                                            "data-component-name": "span",
                                                            "data-component-content": "%7B%22text%22%3A%22Entrance%20Exam%20Success%22%2C%22className%22%3A%22text-elegant-light%22%7D",
                                                            className: "text-elegant-light",
                                                            children: "Entrance Exam Success"
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                            lineNumber: 211,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("span", {
                                                            "data-lov-id": "src/pages/academics/HigherSecondary.tsx:212:20",
                                                            "data-lov-name": "span",
                                                            "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                            "data-component-line": "212",
                                                            "data-component-file": "HigherSecondary.tsx",
                                                            "data-component-name": "span",
                                                            "data-component-content": "%7B%22text%22%3A%2285%25%22%2C%22className%22%3A%22font-bold%20text-school-gold%20text-xl%22%7D",
                                                            className: "font-bold text-school-gold text-xl",
                                                            children: "85%"
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                            lineNumber: 212,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/academics/HigherSecondary.tsx:214:18",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                    "data-component-line": "214",
                                                    "data-component-file": "HigherSecondary.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22flex%20justify-between%20items-center%22%7D",
                                                    className: "flex justify-between items-center",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("span", {
                                                            "data-lov-id": "src/pages/academics/HigherSecondary.tsx:215:20",
                                                            "data-lov-name": "span",
                                                            "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                            "data-component-line": "215",
                                                            "data-component-file": "HigherSecondary.tsx",
                                                            "data-component-name": "span",
                                                            "data-component-content": "%7B%22text%22%3A%22University%20Placements%22%2C%22className%22%3A%22text-elegant-light%22%7D",
                                                            className: "text-elegant-light",
                                                            children: "University Placements"
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                            lineNumber: 215,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("span", {
                                                            "data-lov-id": "src/pages/academics/HigherSecondary.tsx:216:20",
                                                            "data-lov-name": "span",
                                                            "data-component-path": "src/pages/academics/HigherSecondary.tsx",
                                                            "data-component-line": "216",
                                                            "data-component-file": "HigherSecondary.tsx",
                                                            "data-component-name": "span",
                                                            "data-component-content": "%7B%22text%22%3A%2292%25%22%2C%22className%22%3A%22font-bold%20text-school-gold%20text-xl%22%7D",
                                                            className: "font-bold text-school-gold text-xl",
                                                            children: "92%"
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                            lineNumber: 216,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                            lineNumber: 205,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                                    lineNumber: 203,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                            lineNumber: 177,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                        lineNumber: 176,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
                    lineNumber: 175,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
};
_c = HigherSecondary;
export default HigherSecondary;
var _c;
$RefreshReg$(_c, "HigherSecondary");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/pages/academics/HigherSecondary.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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ZUFBQTs0REFBQUMsaUJBQUE7NERBQUFDLHVCQUFBOzREQUFBQyx1QkFBQTs0REFBQUMsdUJBQUE7NERBQUFDLHVCQUFBOzREQUFBQywwQkFBQTs0REFBRUUsV0FBVTtzRUFBcUI7Ozs7OztzRUFDckMsUUFBQ2U7NERBQUd2QixlQUFBOzREQUFBQyxpQkFBQTs0REFBQUMsdUJBQUE7NERBQUFDLHVCQUFBOzREQUFBQyx1QkFBQTs0REFBQUMsdUJBQUE7NERBQUFDLDBCQUFBOzREQUFFRSxXQUFVO3NFQUFxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVXpFO0tBek5NakI7QUEyTk4sZUFBZUEsZ0JBQWUiLCJuYW1lcyI6WyJMYXlvdXQiLCJQYWdlQmFubmVyIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiVGFicyIsIlRhYnNDb250ZW50IiwiVGFic0xpc3QiLCJUYWJzVHJpZ2dlciIsIkZsYXNrQ29uaWNhbCIsIkNhbGN1bGF0b3IiLCJCb29rT3BlbiIsIlRyZW5kaW5nVXAiLCJVc2VycyIsIkdyYWR1YXRpb25DYXAiLCJjbGFzc3Jvb21UZWNoIiwiSGlnaGVyU2Vjb25kYXJ5Iiwic3RyZWFtcyIsImlkIiwidGl0bGUiLCJpY29uIiwic3ViamVjdHMiLCJkZXNjcmlwdGlvbiIsImNhcmVlcnMiLCJjb2xvciIsImRhdGEtbG92LWlkIiwiZGF0YS1sb3YtbmFtZSIsImRhdGEtY29tcG9uZW50LXBhdGgiLCJkYXRhLWNvbXBvbmVudC1saW5lIiwiZGF0YS1jb21wb25lbnQtZmlsZSIsImRhdGEtY29tcG9uZW50LW5hbWUiLCJkYXRhLWNvbXBvbmVudC1jb250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwic3VidGl0bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJzZWN0aW9uIiwiaDIiLCJwIiwiZGVmYXVsdFZhbHVlIiwidmFsdWUiLCJtYXAiLCJzdHJlYW0iLCJoMyIsImg0Iiwic3ViamVjdCIsImluZGV4IiwiY2FyZWVyIiwic3BhbiIsInN0cm9uZyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJIaWdoZXJTZWNvbmRhcnkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFBhZ2VCYW5uZXIgZnJvbSBcIkAvY29tcG9uZW50cy9QYWdlQmFubmVyXCI7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHsgVGFicywgVGFic0NvbnRlbnQsIFRhYnNMaXN0LCBUYWJzVHJpZ2dlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdGFic1wiO1xuaW1wb3J0IHsgRmxhc2tDb25pY2FsLCBDYWxjdWxhdG9yLCBCb29rT3BlbiwgVHJlbmRpbmdVcCwgVXNlcnMsIEdyYWR1YXRpb25DYXAgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgY2xhc3Nyb29tVGVjaCBmcm9tIFwiQC9hc3NldHMvY2xhc3Nyb29tLXRlY2guanBnXCI7XG5cbmNvbnN0IEhpZ2hlclNlY29uZGFyeSA9ICgpID0+IHtcbiAgY29uc3Qgc3RyZWFtcyA9IFtcbiAgICB7XG4gICAgICBpZDogXCJzY2llbmNlXCIsXG4gICAgICB0aXRsZTogXCJTY2llbmNlIFN0cmVhbVwiLFxuICAgICAgaWNvbjogRmxhc2tDb25pY2FsLFxuICAgICAgc3ViamVjdHM6IFtcIlBoeXNpY3NcIiwgXCJDaGVtaXN0cnlcIiwgXCJCaW9sb2d5XCIsIFwiTWF0aGVtYXRpY3NcIl0sXG4gICAgICBkZXNjcmlwdGlvbjogXCJDb21wcmVoZW5zaXZlIHNjaWVuY2UgZWR1Y2F0aW9uIHByZXBhcmluZyBzdHVkZW50cyBmb3IgbWVkaWNhbCBhbmQgZW5naW5lZXJpbmcgZW50cmFuY2UgZXhhbXMuXCIsXG4gICAgICBjYXJlZXJzOiBbXCJEb2N0b3JcIiwgXCJFbmdpbmVlclwiLCBcIlJlc2VhcmNoZXJcIiwgXCJCaW90ZWNobm9sb2dpc3RcIiwgXCJQaGFybWFjaXN0XCJdLFxuICAgICAgY29sb3I6IFwiYmctYmx1ZS01MDBcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IFwiY29tbWVyY2VcIixcbiAgICAgIHRpdGxlOiBcIkNvbW1lcmNlIFN0cmVhbVwiLCBcbiAgICAgIGljb246IFRyZW5kaW5nVXAsXG4gICAgICBzdWJqZWN0czogW1wiQWNjb3VudGFuY3lcIiwgXCJCdXNpbmVzcyBTdHVkaWVzXCIsIFwiRWNvbm9taWNzXCIsIFwiTWF0aGVtYXRpY3MvU3RhdGlzdGljc1wiXSxcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkJ1c2luZXNzIGFuZCBmaW5hbmNlIGZvY3VzZWQgY3VycmljdWx1bSBmb3IgZnV0dXJlIGVudHJlcHJlbmV1cnMgYW5kIGNvbW1lcmNlIHByb2Zlc3Npb25hbHMuXCIsXG4gICAgICBjYXJlZXJzOiBbXCJDQS9DU1wiLCBcIkJ1c2luZXNzIEFuYWx5c3RcIiwgXCJFbnRyZXByZW5ldXJcIiwgXCJCYW5rZXJcIiwgXCJGaW5hbmNpYWwgQWR2aXNvclwiXSxcbiAgICAgIGNvbG9yOiBcImJnLWdyZWVuLTUwMFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogXCJodW1hbml0aWVzXCIsXG4gICAgICB0aXRsZTogXCJIdW1hbml0aWVzIFN0cmVhbVwiLFxuICAgICAgaWNvbjogQm9va09wZW4sXG4gICAgICBzdWJqZWN0czogW1wiSGlzdG9yeVwiLCBcIkdlb2dyYXBoeVwiLCBcIlBvbGl0aWNhbCBTY2llbmNlXCIsIFwiUHN5Y2hvbG9neVwiLCBcIlNvY2lvbG9neVwiXSxcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkxpYmVyYWwgYXJ0cyBlZHVjYXRpb24gZm9zdGVyaW5nIGNyaXRpY2FsIHRoaW5raW5nIGFuZCB1bmRlcnN0YW5kaW5nIG9mIGh1bWFuIHNvY2lldHkuXCIsXG4gICAgICBjYXJlZXJzOiBbXCJDaXZpbCBTZXJ2YW50XCIsIFwiSm91cm5hbGlzdFwiLCBcIkxhd3llclwiLCBcIlBzeWNob2xvZ2lzdFwiLCBcIlNvY2lhbCBXb3JrZXJcIl0sXG4gICAgICBjb2xvcjogXCJiZy1wdXJwbGUtNTAwXCJcbiAgICB9XG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctYmFja2dyb3VuZFwiPlxuICAgICAgICA8UGFnZUJhbm5lclxuICAgICAgICAgIHRpdGxlPVwiSGlnaGVyIFNlY29uZGFyeVwiXG4gICAgICAgICAgc3VidGl0bGU9XCJHcmFkZXMgMTEtMTI6IFNwZWNpYWxpemVkIHN0cmVhbXMgZm9yIGhpZ2hlciBlZHVjYXRpb24gcHJlcGFyYXRpb24gYW5kIGNhcmVlciBkZXZlbG9wbWVudFwiXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlPXtjbGFzc3Jvb21UZWNofVxuICAgICAgICAvPlxuXG4gICAgICAgIHsvKiBJbnRyb2R1Y3Rpb24gKi99XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTE2XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTR4bCBteC1hdXRvIHRleHQtY2VudGVyIG1iLTEyXCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gbWItNlwiPkFjYWRlbWljIFNwZWNpYWxpemF0aW9uPC9oMj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWVsZWdhbnQtbGlnaHQgbGVhZGluZy1yZWxheGVkIG1iLThcIj5cbiAgICAgICAgICAgICAgICBPdXIgSGlnaGVyIFNlY29uZGFyeSBwcm9ncmFtIChHcmFkZXMgMTHigJMxMikgcHJvdmlkZXMgc3R1ZGVudHMgd2l0aCBhY2FkZW1pYyBzcGVjaWFsaXphdGlvbiB3aGlsZSBwcmVwYXJpbmcgdGhlbSBcbiAgICAgICAgICAgICAgICBmb3IgbmF0aW9uYWwtbGV2ZWwgZW50cmFuY2UgZXhhbXMgYW5kIGZ1dHVyZSBjYXJlZXJzLiBFeHBlcmllbmNlZCBmYWN1bHR5LCBhZHZhbmNlZCBsYWJzLCBhbmQgaW5kaXZpZHVhbGl6ZWQgXG4gICAgICAgICAgICAgICAgbWVudG9yaW5nIGVuc3VyZSB0aGF0IGV2ZXJ5IGxlYXJuZXIgcmVjZWl2ZXMgdGhlIHN1cHBvcnQgbmVlZGVkIHRvIHN1Y2NlZWQgaW4gYm90aCBhY2FkZW1pY3MgYW5kIGxpZmUuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tc2Nob29sLWJyb3duIHRvLXNjaG9vbC1nb2xkIHRleHQtd2hpdGUgcC02IHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgIPCfjq8gQ2FyZWVyIENvdW5zZWxsaW5nICYgVW5pdmVyc2l0eSBQcmVwIFN1cHBvcnQgaW5jbHVkZWQgaW4gYWxsIHN0cmVhbXNcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICB7LyogU3RyZWFtcyBUYWJzICovfVxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNiBiZy1ncmF5LTUwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgICAgICA8VGFicyBkZWZhdWx0VmFsdWU9XCJzY2llbmNlXCIgY2xhc3NOYW1lPVwibWF4LXctNnhsIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgPFRhYnNMaXN0IGNsYXNzTmFtZT1cImdyaWQgdy1mdWxsIGdyaWQtY29scy0zIG1iLThcIj5cbiAgICAgICAgICAgICAgICA8VGFic1RyaWdnZXIgdmFsdWU9XCJzY2llbmNlXCIgY2xhc3NOYW1lPVwidGV4dC1iYXNlXCI+8J+TmCBTY2llbmNlPC9UYWJzVHJpZ2dlcj5cbiAgICAgICAgICAgICAgICA8VGFic1RyaWdnZXIgdmFsdWU9XCJjb21tZXJjZVwiIGNsYXNzTmFtZT1cInRleHQtYmFzZVwiPvCfk4ogQ29tbWVyY2U8L1RhYnNUcmlnZ2VyPlxuICAgICAgICAgICAgICAgIDxUYWJzVHJpZ2dlciB2YWx1ZT1cImh1bWFuaXRpZXNcIiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2VcIj7wn5OcIEh1bWFuaXRpZXM8L1RhYnNUcmlnZ2VyPlxuICAgICAgICAgICAgICA8L1RhYnNMaXN0PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAge3N0cmVhbXMubWFwKChzdHJlYW0pID0+IChcbiAgICAgICAgICAgICAgICA8VGFic0NvbnRlbnQga2V5PXtzdHJlYW0uaWR9IHZhbHVlPXtzdHJlYW0uaWR9IGNsYXNzTmFtZT1cIm10LThcIj5cbiAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGxnOmdyaWQtY29scy0yIGdhcC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtOCBiZy13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1iLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHctMTIgaC0xMiByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgJHtzdHJlYW0uY29sb3J9IG1yLTRgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJlYW0uaWNvbiBjbGFzc05hbWU9XCJoLTYgdy02IHRleHQtd2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1zY2hvb2wtYnJvd25cIj57c3RyZWFtLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZWxlZ2FudC1saWdodCBtYi02IGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdHJlYW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtc2Nob29sLWJyb3duIG1iLTNcIj5Db3JlIFN1YmplY3RzOjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RyZWFtLnN1YmplY3RzLm1hcCgoc3ViamVjdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCBweC0zIHB5LTIgcm91bmRlZC1sZyB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtc2Nob29sLWJyb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1YmplY3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHAtOCAke3N0cmVhbS5jb2xvcn0gdGV4dC13aGl0ZWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTRcIj5DYXJlZXIgT3Bwb3J0dW5pdGllczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0cmVhbS5jYXJlZXJzLm1hcCgoY2FyZWVyLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIgaC0yIGJnLXdoaXRlIHJvdW5kZWQtZnVsbFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+e2NhcmVlcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCBwLTQgYmctd2hpdGUvMjAgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+U3BlY2lhbCBGb2N1czo8L3N0cm9uZz4gRW50cmFuY2UgZXhhbSBwcmVwYXJhdGlvbiwgcHJhY3RpY2FsIHRyYWluaW5nLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBpbmR1c3RyeSBleHBvc3VyZSB0byBlbnN1cmUgY2FyZWVyIHJlYWRpbmVzcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgPC9UYWJzQ29udGVudD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1RhYnM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICB7LyogU3VwcG9ydCBGZWF0dXJlcyAqL31cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gdGV4dC1jZW50ZXIgbWItMTJcIj5TdHVkZW50IFN1cHBvcnQgU2VydmljZXM8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0zIGdhcC04XCI+XG4gICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGhvdmVyOnNoYWRvdy14bCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgaG92ZXItc2NhbGVcIj5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC02XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNjaG9vbC1nb2xkIHctMTYgaC0xNiByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXgtYXV0byBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxVc2VycyBjbGFzc05hbWU9XCJoLTggdy04IHRleHQtd2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gbWItM1wiPk1lbnRvcnNoaXAgUHJvZ3JhbTwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWVsZWdhbnQtbGlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgRGVkaWNhdGVkIGZhY3VsdHkgbWVudG9ycyBndWlkZSBzdHVkZW50cyB0aHJvdWdoIGFjYWRlbWljIGNoYWxsZW5nZXMgYW5kIGNhcmVlciBwbGFubmluZyBkZWNpc2lvbnMuXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgaG92ZXI6c2hhZG93LXhsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBob3Zlci1zY2FsZVwiPlxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLTZcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2Nob29sLWdvbGQgdy0xNiBoLTE2IHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBteC1hdXRvIG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPENhbGN1bGF0b3IgY2xhc3NOYW1lPVwiaC04IHctOCB0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtc2Nob29sLWJyb3duIG1iLTNcIj5FbnRyYW5jZSBFeGFtIFByZXA8L2gzPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1lbGVnYW50LWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIFNwZWNpYWxpemVkIGNvYWNoaW5nIGZvciBKRUUsIE5FRVQsIENFVCwgYW5kIG90aGVyIGNvbXBldGl0aXZlIGVudHJhbmNlIGV4YW1pbmF0aW9ucy5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBob3ZlcjpzaGFkb3cteGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGhvdmVyLXNjYWxlXCI+XG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtNlwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zY2hvb2wtZ29sZCB3LTE2IGgtMTYgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG14LWF1dG8gbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICA8R3JhZHVhdGlvbkNhcCBjbGFzc05hbWU9XCJoLTggdy04IHRleHQtd2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gbWItM1wiPlVuaXZlcnNpdHkgR3VpZGFuY2U8L2gzPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1lbGVnYW50LWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIENvbXByZWhlbnNpdmUgY291bnNlbGluZyBmb3IgY29sbGVnZSBhcHBsaWNhdGlvbnMsIHNjaG9sYXJzaGlwIG9wcG9ydHVuaXRpZXMsIGFuZCBjYXJlZXIgcGF0aHdheXMuXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICB7LyogRmFjaWxpdGllcyAqL31cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTYgYmctZ3JhZGllbnQtdG8tciBmcm9tLWFtYmVyLTUwIHRvLW9yYW5nZS01MFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGxnOmdyaWQtY29scy0yIGdhcC0xMiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtc2Nob29sLWJyb3duIG1iLTZcIj5BZHZhbmNlZCBGYWNpbGl0aWVzPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTMgaC0zIGJnLXNjaG9vbC1nb2xkIHJvdW5kZWQtZnVsbFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZWxlZ2FudC1saWdodFwiPldlbGwtZXF1aXBwZWQgbGFib3JhdG9yaWVzIGZvciBwcmFjdGljYWwgbGVhcm5pbmc8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0zIGgtMyBiZy1zY2hvb2wtZ29sZCByb3VuZGVkLWZ1bGxcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWVsZWdhbnQtbGlnaHRcIj5EaWdpdGFsIGNsYXNzcm9vbXMgd2l0aCBzbWFydCBib2FyZHMgYW5kIHByb2plY3RvcnM8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0zIGgtMyBiZy1zY2hvb2wtZ29sZCByb3VuZGVkLWZ1bGxcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWVsZWdhbnQtbGlnaHRcIj5Db21wcmVoZW5zaXZlIGxpYnJhcnkgd2l0aCByZWZlcmVuY2UgbWF0ZXJpYWxzPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMyBoLTMgYmctc2Nob29sLWdvbGQgcm91bmRlZC1mdWxsXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1lbGVnYW50LWxpZ2h0XCI+Q29tcHV0ZXIgbGFicyB3aXRoIGludGVybmV0IGNvbm5lY3Rpdml0eTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTMgaC0zIGJnLXNjaG9vbC1nb2xkIHJvdW5kZWQtZnVsbFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZWxlZ2FudC1saWdodFwiPkRlZGljYXRlZCBzcGFjZXMgZm9yIGdyb3VwIHN0dWR5IGFuZCBkaXNjdXNzaW9uczwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTggcm91bmRlZC1sZyBzaGFkb3ctbGdcIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtc2Nob29sLWJyb3duIG1iLTRcIj5BY2FkZW1pYyBFeGNlbGxlbmNlPC9oMz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1lbGVnYW50LWxpZ2h0XCI+Qm9hcmQgRXhhbSBQYXNzIFJhdGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXNjaG9vbC1nb2xkIHRleHQteGxcIj45OCU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZWxlZ2FudC1saWdodFwiPkVudHJhbmNlIEV4YW0gU3VjY2Vzczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtc2Nob29sLWdvbGQgdGV4dC14bFwiPjg1JTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1lbGVnYW50LWxpZ2h0XCI+VW5pdmVyc2l0eSBQbGFjZW1lbnRzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1zY2hvb2wtZ29sZCB0ZXh0LXhsXCI+OTIlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGlnaGVyU2Vjb25kYXJ5O1xuIl0sImZpbGUiOiIvaG9tZS9zanJzaDkxNi9wdWJsaWNfaHRtbC9zcmMvcGFnZXMvYWNhZGVtaWNzL0hpZ2hlclNlY29uZGFyeS50c3gifQ==