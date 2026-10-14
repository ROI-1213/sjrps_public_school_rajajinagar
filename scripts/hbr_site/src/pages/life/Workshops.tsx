import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/life/Workshops.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/pages/life/Workshops.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import Layout from "/src/components/Layout.tsx";
import PageHero from "/src/components/PageHero.tsx";
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "/src/components/ui/table.tsx";
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=5efa796b";
import { GraduationCap, Briefcase, FlaskConical, Bot, UserCheck, Crown, Lightbulb, BookOpen, Download, Sparkles, Brain, Rocket } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
const categories = [
    {
        icon: GraduationCap,
        title: "Academic Workshops",
        desc: "Subject-deep workshops in mathematics, sciences, languages, and humanities led by visiting experts."
    },
    {
        icon: Briefcase,
        title: "Career Guidance Programs",
        desc: "Stream selection, university planning, and career counselling sessions for senior students."
    },
    {
        icon: FlaskConical,
        title: "STEM Workshops",
        desc: "Hands-on experimentation and project work that brings Science, Technology, Engineering, and Math to life."
    },
    {
        icon: Bot,
        title: "Robotics Exposure",
        desc: "Beginner to advanced robotics modules covering design, coding, and live build challenges."
    },
    {
        icon: UserCheck,
        title: "Personality Development",
        desc: "Public speaking, etiquette, grooming, and confidence-building sessions for holistic growth."
    },
    {
        icon: Crown,
        title: "Leadership Training",
        desc: "Workshops for student leaders covering decision-making, ethics, and team management."
    },
    {
        icon: Lightbulb,
        title: "Life Skills Programs",
        desc: "Financial literacy, digital safety, emotional wellbeing, and everyday-living skills."
    },
    {
        icon: BookOpen,
        title: "Teacher Development",
        desc: "In-service training for faculty on pedagogy, technology, assessment, and child psychology."
    }
];
const benefits = [
    {
        icon: Brain,
        title: "Deepen Understanding",
        desc: "Workshops complement classroom learning with focused, practical exposure."
    },
    {
        icon: Rocket,
        title: "Future-Ready Skills",
        desc: "Students gain skills the modern world demands — beyond textbooks."
    },
    {
        icon: Sparkles,
        title: "Discover Passions",
        desc: "Short, intensive formats help students identify interests and career paths."
    }
];
const workshops = [
    {
        id: 1,
        name: "Career Guidance Workshop"
    },
    {
        id: 2,
        name: "STEM Learning Workshop"
    },
    {
        id: 3,
        name: "Leadership Development Program"
    },
    {
        id: 4,
        name: "Life Skills Workshop"
    },
    {
        id: 5,
        name: "Personality Development Workshop"
    }
];
const Workshops = ()=>/*#__PURE__*/ _jsxDEV(Layout, {
        "data-lov-id": "src/pages/life/Workshops.tsx:38:2",
        "data-lov-name": "Layout",
        "data-component-path": "src/pages/life/Workshops.tsx",
        "data-component-line": "38",
        "data-component-file": "Workshops.tsx",
        "data-component-name": "Layout",
        "data-component-content": "%7B%7D",
        children: [
            /*#__PURE__*/ _jsxDEV(PageHero, {
                "data-lov-id": "src/pages/life/Workshops.tsx:39:4",
                "data-lov-name": "PageHero",
                "data-component-path": "src/pages/life/Workshops.tsx",
                "data-component-line": "39",
                "data-component-file": "Workshops.tsx",
                "data-component-name": "PageHero",
                "data-component-content": "%7B%7D",
                title: "Workshops & Enrichment Programs",
                breadcrumbs: [
                    {
                        label: "Life @ SJRPS-HBR"
                    },
                    {
                        label: "Workshops"
                    }
                ]
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                lineNumber: 39,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/life/Workshops.tsx:42:4",
                "data-lov-name": "section",
                "data-component-path": "src/pages/life/Workshops.tsx",
                "data-component-line": "42",
                "data-component-file": "Workshops.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20bg-background%22%7D",
                className: "py-16 bg-background",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/life/Workshops.tsx:43:6",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/life/Workshops.tsx",
                    "data-component-line": "43",
                    "data-component-file": "Workshops.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20max-w-4xl%20text-center%22%7D",
                    className: "container mx-auto px-4 max-w-4xl text-center",
                    children: [
                        /*#__PURE__*/ _jsxDEV("h2", {
                            "data-lov-id": "src/pages/life/Workshops.tsx:44:8",
                            "data-lov-name": "h2",
                            "data-component-path": "src/pages/life/Workshops.tsx",
                            "data-component-line": "44",
                            "data-component-file": "Workshops.tsx",
                            "data-component-name": "h2",
                            "data-component-content": "%7B%22text%22%3A%22Learning%20that%20Goes%20Beyond%20Lessons%22%2C%22className%22%3A%22text-3xl%20lg%3Atext-4xl%20font-bold%20text-foreground%20mb-4%22%7D",
                            className: "text-3xl lg:text-4xl font-bold text-foreground mb-4",
                            children: "Learning that Goes Beyond Lessons"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                            lineNumber: 44,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/life/Workshops.tsx:45:8",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/life/Workshops.tsx",
                            "data-component-line": "45",
                            "data-component-file": "Workshops.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22mx-auto%20h-1%20w-20%20bg-indian-green%20rounded-full%20mb-6%22%7D",
                            className: "mx-auto h-1 w-20 bg-indian-green rounded-full mb-6"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                            lineNumber: 45,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ _jsxDEV("p", {
                            "data-lov-id": "src/pages/life/Workshops.tsx:46:8",
                            "data-lov-name": "p",
                            "data-component-path": "src/pages/life/Workshops.tsx",
                            "data-component-line": "46",
                            "data-component-file": "Workshops.tsx",
                            "data-component-name": "p",
                            "data-component-content": "%7B%22text%22%3A%22SJRPS-HBR%20regularly%20hosts%20workshops%20and%20enrichment%20programs%20that%20broaden%20student%20horizons%2C%20build%20real-world%5Cn%20%20%20%20%20%20%20%20%20%20skills%2C%20and%20connect%20classroom%20learning%20with%20the%20wider%20world.%20From%20STEM%20and%20robotics%20to%20leadership%20and%5Cn%20%20%20%20%20%20%20%20%20%20life%20skills%2C%20our%20enrichment%20calendar%20is%20curated%20for%20every%20age%20group.%22%2C%22className%22%3A%22text-base%20text-foreground%2F80%20leading-relaxed%22%7D",
                            className: "text-base text-foreground/80 leading-relaxed",
                            children: "SJRPS-HBR regularly hosts workshops and enrichment programs that broaden student horizons, build real-world skills, and connect classroom learning with the wider world. From STEM and robotics to leadership and life skills, our enrichment calendar is curated for every age group."
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                            lineNumber: 46,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                    lineNumber: 43,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                lineNumber: 42,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/life/Workshops.tsx:55:4",
                "data-lov-name": "section",
                "data-component-path": "src/pages/life/Workshops.tsx",
                "data-component-line": "55",
                "data-component-file": "Workshops.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20bg-muted%2F30%22%7D",
                className: "py-16 bg-muted/30",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/life/Workshops.tsx:56:6",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/life/Workshops.tsx",
                    "data-component-line": "56",
                    "data-component-file": "Workshops.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/life/Workshops.tsx:57:8",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/life/Workshops.tsx",
                            "data-component-line": "57",
                            "data-component-file": "Workshops.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22text-center%20mb-12%22%7D",
                            className: "text-center mb-12",
                            children: [
                                /*#__PURE__*/ _jsxDEV("h2", {
                                    "data-lov-id": "src/pages/life/Workshops.tsx:58:10",
                                    "data-lov-name": "h2",
                                    "data-component-path": "src/pages/life/Workshops.tsx",
                                    "data-component-line": "58",
                                    "data-component-file": "Workshops.tsx",
                                    "data-component-name": "h2",
                                    "data-component-content": "%7B%22text%22%3A%22Benefits%20of%20Workshops%22%2C%22className%22%3A%22text-3xl%20lg%3Atext-4xl%20font-bold%20text-foreground%22%7D",
                                    className: "text-3xl lg:text-4xl font-bold text-foreground",
                                    children: "Benefits of Workshops"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                                    lineNumber: 58,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/life/Workshops.tsx:59:10",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/life/Workshops.tsx",
                                    "data-component-line": "59",
                                    "data-component-file": "Workshops.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22mx-auto%20mt-3%20h-1%20w-20%20bg-indian-green%20rounded-full%22%7D",
                                    className: "mx-auto mt-3 h-1 w-20 bg-indian-green rounded-full"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                                    lineNumber: 59,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                            lineNumber: 57,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/life/Workshops.tsx:61:8",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/life/Workshops.tsx",
                            "data-component-line": "61",
                            "data-component-file": "Workshops.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-3%20gap-6%22%7D",
                            className: "grid md:grid-cols-3 gap-6",
                            children: benefits.map((b)=>/*#__PURE__*/ _jsxDEV(Card, {
                                    "data-lov-id": "src/pages/life/Workshops.tsx:63:12",
                                    "data-lov-name": "Card",
                                    "data-component-path": "src/pages/life/Workshops.tsx",
                                    "data-component-line": "63",
                                    "data-component-file": "Workshops.tsx",
                                    "data-component-name": "Card",
                                    "data-component-content": "%7B%22className%22%3A%22hover%3Ashadow-lg%20transition-shadow%20text-center%22%7D",
                                    className: "hover:shadow-lg transition-shadow text-center",
                                    children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                        "data-lov-id": "src/pages/life/Workshops.tsx:64:14",
                                        "data-lov-name": "CardContent",
                                        "data-component-path": "src/pages/life/Workshops.tsx",
                                        "data-component-line": "64",
                                        "data-component-file": "Workshops.tsx",
                                        "data-component-name": "CardContent",
                                        "data-component-content": "%7B%22className%22%3A%22p-6%22%7D",
                                        className: "p-6",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/life/Workshops.tsx:65:16",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/life/Workshops.tsx",
                                                "data-component-line": "65",
                                                "data-component-file": "Workshops.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22w-14%20h-14%20rounded-xl%20bg-indian-green%20flex%20items-center%20justify-center%20mb-4%20mx-auto%22%7D",
                                                className: "w-14 h-14 rounded-xl bg-indian-green flex items-center justify-center mb-4 mx-auto",
                                                children: /*#__PURE__*/ _jsxDEV(b.icon, {
                                                    "data-lov-id": "src/pages/life/Workshops.tsx:66:18",
                                                    "data-lov-name": "b.icon",
                                                    "data-component-path": "src/pages/life/Workshops.tsx",
                                                    "data-component-line": "66",
                                                    "data-component-file": "Workshops.tsx",
                                                    "data-component-name": "b.icon",
                                                    "data-component-content": "%7B%22className%22%3A%22h-7%20w-7%22%7D",
                                                    className: "h-7 w-7",
                                                    color: "#ffffff"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                                                lineNumber: 65,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("h3", {
                                                "data-lov-id": "src/pages/life/Workshops.tsx:68:16",
                                                "data-lov-name": "h3",
                                                "data-component-path": "src/pages/life/Workshops.tsx",
                                                "data-component-line": "68",
                                                "data-component-file": "Workshops.tsx",
                                                "data-component-name": "h3",
                                                "data-component-content": "%7B%22className%22%3A%22font-bold%20text-foreground%20mb-2%22%7D",
                                                className: "font-bold text-foreground mb-2",
                                                children: b.title
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                                                lineNumber: 68,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("p", {
                                                "data-lov-id": "src/pages/life/Workshops.tsx:69:16",
                                                "data-lov-name": "p",
                                                "data-component-path": "src/pages/life/Workshops.tsx",
                                                "data-component-line": "69",
                                                "data-component-file": "Workshops.tsx",
                                                "data-component-name": "p",
                                                "data-component-content": "%7B%22className%22%3A%22text-sm%20text-foreground%2F75%20leading-relaxed%22%7D",
                                                className: "text-sm text-foreground/75 leading-relaxed",
                                                children: b.desc
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                                                lineNumber: 69,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this)
                                }, b.title, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this))
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                            lineNumber: 61,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                    lineNumber: 56,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                lineNumber: 55,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/life/Workshops.tsx:78:4",
                "data-lov-name": "section",
                "data-component-path": "src/pages/life/Workshops.tsx",
                "data-component-line": "78",
                "data-component-file": "Workshops.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20bg-background%22%7D",
                className: "py-16 bg-background",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/life/Workshops.tsx:79:6",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/life/Workshops.tsx",
                    "data-component-line": "79",
                    "data-component-file": "Workshops.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/life/Workshops.tsx:80:8",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/life/Workshops.tsx",
                            "data-component-line": "80",
                            "data-component-file": "Workshops.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22text-center%20mb-12%22%7D",
                            className: "text-center mb-12",
                            children: [
                                /*#__PURE__*/ _jsxDEV("h2", {
                                    "data-lov-id": "src/pages/life/Workshops.tsx:81:10",
                                    "data-lov-name": "h2",
                                    "data-component-path": "src/pages/life/Workshops.tsx",
                                    "data-component-line": "81",
                                    "data-component-file": "Workshops.tsx",
                                    "data-component-name": "h2",
                                    "data-component-content": "%7B%22text%22%3A%22Workshop%20Categories%22%2C%22className%22%3A%22text-3xl%20lg%3Atext-4xl%20font-bold%20text-foreground%22%7D",
                                    className: "text-3xl lg:text-4xl font-bold text-foreground",
                                    children: "Workshop Categories"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                                    lineNumber: 81,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/life/Workshops.tsx:82:10",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/life/Workshops.tsx",
                                    "data-component-line": "82",
                                    "data-component-file": "Workshops.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22mx-auto%20mt-3%20h-1%20w-20%20bg-indian-green%20rounded-full%22%7D",
                                    className: "mx-auto mt-3 h-1 w-20 bg-indian-green rounded-full"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                                    lineNumber: 82,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                            lineNumber: 80,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/life/Workshops.tsx:84:8",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/life/Workshops.tsx",
                            "data-component-line": "84",
                            "data-component-file": "Workshops.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-2%20lg%3Agrid-cols-4%20gap-6%22%7D",
                            className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
                            children: categories.map((c, i)=>/*#__PURE__*/ _jsxDEV(motion.div, {
                                    "data-lov-id": "src/pages/life/Workshops.tsx:86:12",
                                    "data-lov-name": "motion.div",
                                    "data-component-path": "src/pages/life/Workshops.tsx",
                                    "data-component-line": "86",
                                    "data-component-file": "Workshops.tsx",
                                    "data-component-name": "motion.div",
                                    "data-component-content": "%7B%7D",
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        delay: i * 0.05
                                    },
                                    children: /*#__PURE__*/ _jsxDEV(Card, {
                                        "data-lov-id": "src/pages/life/Workshops.tsx:87:14",
                                        "data-lov-name": "Card",
                                        "data-component-path": "src/pages/life/Workshops.tsx",
                                        "data-component-line": "87",
                                        "data-component-file": "Workshops.tsx",
                                        "data-component-name": "Card",
                                        "data-component-content": "%7B%22className%22%3A%22h-full%20hover%3Ashadow-xl%20transition-shadow%20border-t-4%20border-indian-green%22%7D",
                                        className: "h-full hover:shadow-xl transition-shadow border-t-4 border-indian-green",
                                        children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                            "data-lov-id": "src/pages/life/Workshops.tsx:88:16",
                                            "data-lov-name": "CardContent",
                                            "data-component-path": "src/pages/life/Workshops.tsx",
                                            "data-component-line": "88",
                                            "data-component-file": "Workshops.tsx",
                                            "data-component-name": "CardContent",
                                            "data-component-content": "%7B%22className%22%3A%22p-6%22%7D",
                                            className: "p-6",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/life/Workshops.tsx:89:18",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/life/Workshops.tsx",
                                                    "data-component-line": "89",
                                                    "data-component-file": "Workshops.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22w-14%20h-14%20rounded-xl%20bg-indian-green%20flex%20items-center%20justify-center%20mb-4%22%7D",
                                                    className: "w-14 h-14 rounded-xl bg-indian-green flex items-center justify-center mb-4",
                                                    children: /*#__PURE__*/ _jsxDEV(c.icon, {
                                                        "data-lov-id": "src/pages/life/Workshops.tsx:90:20",
                                                        "data-lov-name": "c.icon",
                                                        "data-component-path": "src/pages/life/Workshops.tsx",
                                                        "data-component-line": "90",
                                                        "data-component-file": "Workshops.tsx",
                                                        "data-component-name": "c.icon",
                                                        "data-component-content": "%7B%22className%22%3A%22h-7%20w-7%22%7D",
                                                        className: "h-7 w-7",
                                                        color: "#ffffff"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("h3", {
                                                    "data-lov-id": "src/pages/life/Workshops.tsx:92:18",
                                                    "data-lov-name": "h3",
                                                    "data-component-path": "src/pages/life/Workshops.tsx",
                                                    "data-component-line": "92",
                                                    "data-component-file": "Workshops.tsx",
                                                    "data-component-name": "h3",
                                                    "data-component-content": "%7B%22className%22%3A%22text-lg%20font-bold%20text-foreground%20mb-2%22%7D",
                                                    className: "text-lg font-bold text-foreground mb-2",
                                                    children: c.title
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/life/Workshops.tsx:93:18",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/life/Workshops.tsx",
                                                    "data-component-line": "93",
                                                    "data-component-file": "Workshops.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22className%22%3A%22text-sm%20text-foreground%2F75%20leading-relaxed%22%7D",
                                                    className: "text-sm text-foreground/75 leading-relaxed",
                                                    children: c.desc
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                                            lineNumber: 88,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this)
                                }, c.title, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this))
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                            lineNumber: 84,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                    lineNumber: 79,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                lineNumber: 78,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/life/Workshops.tsx:103:4",
                "data-lov-name": "section",
                "data-component-path": "src/pages/life/Workshops.tsx",
                "data-component-line": "103",
                "data-component-file": "Workshops.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20bg-muted%2F30%22%7D",
                className: "py-16 bg-muted/30",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/life/Workshops.tsx:104:6",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/life/Workshops.tsx",
                    "data-component-line": "104",
                    "data-component-file": "Workshops.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20max-w-5xl%22%7D",
                    className: "container mx-auto px-4 max-w-5xl",
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/life/Workshops.tsx:105:8",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/life/Workshops.tsx",
                            "data-component-line": "105",
                            "data-component-file": "Workshops.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22text-center%20mb-10%22%7D",
                            className: "text-center mb-10",
                            children: [
                                /*#__PURE__*/ _jsxDEV("h2", {
                                    "data-lov-id": "src/pages/life/Workshops.tsx:106:10",
                                    "data-lov-name": "h2",
                                    "data-component-path": "src/pages/life/Workshops.tsx",
                                    "data-component-line": "106",
                                    "data-component-file": "Workshops.tsx",
                                    "data-component-name": "h2",
                                    "data-component-content": "%7B%22text%22%3A%22Workshop%20Information%22%2C%22className%22%3A%22text-3xl%20lg%3Atext-4xl%20font-bold%20text-foreground%22%7D",
                                    className: "text-3xl lg:text-4xl font-bold text-foreground",
                                    children: "Workshop Information"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                                    lineNumber: 106,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/life/Workshops.tsx:107:10",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/life/Workshops.tsx",
                                    "data-component-line": "107",
                                    "data-component-file": "Workshops.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22mx-auto%20mt-3%20h-1%20w-20%20bg-indian-green%20rounded-full%22%7D",
                                    className: "mx-auto mt-3 h-1 w-20 bg-indian-green rounded-full"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                                    lineNumber: 107,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    "data-lov-id": "src/pages/life/Workshops.tsx:108:10",
                                    "data-lov-name": "p",
                                    "data-component-path": "src/pages/life/Workshops.tsx",
                                    "data-component-line": "108",
                                    "data-component-file": "Workshops.tsx",
                                    "data-component-name": "p",
                                    "data-component-content": "%7B%22text%22%3A%22Download%20workshop%20briefs%20and%20reports%20below.%22%2C%22className%22%3A%22mt-4%20text-foreground%2F75%22%7D",
                                    className: "mt-4 text-foreground/75",
                                    children: "Download workshop briefs and reports below."
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                                    lineNumber: 108,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                            lineNumber: 105,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ _jsxDEV(Card, {
                            "data-lov-id": "src/pages/life/Workshops.tsx:110:8",
                            "data-lov-name": "Card",
                            "data-component-path": "src/pages/life/Workshops.tsx",
                            "data-component-line": "110",
                            "data-component-file": "Workshops.tsx",
                            "data-component-name": "Card",
                            "data-component-content": "%7B%22className%22%3A%22shadow-lg%20overflow-hidden%22%7D",
                            className: "shadow-lg overflow-hidden",
                            children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                "data-lov-id": "src/pages/life/Workshops.tsx:111:10",
                                "data-lov-name": "CardContent",
                                "data-component-path": "src/pages/life/Workshops.tsx",
                                "data-component-line": "111",
                                "data-component-file": "Workshops.tsx",
                                "data-component-name": "CardContent",
                                "data-component-content": "%7B%22className%22%3A%22p-0%22%7D",
                                className: "p-0",
                                children: /*#__PURE__*/ _jsxDEV(Table, {
                                    "data-lov-id": "src/pages/life/Workshops.tsx:112:12",
                                    "data-lov-name": "Table",
                                    "data-component-path": "src/pages/life/Workshops.tsx",
                                    "data-component-line": "112",
                                    "data-component-file": "Workshops.tsx",
                                    "data-component-name": "Table",
                                    "data-component-content": "%7B%7D",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV(TableHeader, {
                                            "data-lov-id": "src/pages/life/Workshops.tsx:113:14",
                                            "data-lov-name": "TableHeader",
                                            "data-component-path": "src/pages/life/Workshops.tsx",
                                            "data-component-line": "113",
                                            "data-component-file": "Workshops.tsx",
                                            "data-component-name": "TableHeader",
                                            "data-component-content": "%7B%7D",
                                            children: /*#__PURE__*/ _jsxDEV(TableRow, {
                                                "data-lov-id": "src/pages/life/Workshops.tsx:114:16",
                                                "data-lov-name": "TableRow",
                                                "data-component-path": "src/pages/life/Workshops.tsx",
                                                "data-component-line": "114",
                                                "data-component-file": "Workshops.tsx",
                                                "data-component-name": "TableRow",
                                                "data-component-content": "%7B%22className%22%3A%22bg-indian-green%20hover%3Abg-indian-green%22%7D",
                                                className: "bg-indian-green hover:bg-indian-green",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(TableHead, {
                                                        "data-lov-id": "src/pages/life/Workshops.tsx:115:18",
                                                        "data-lov-name": "TableHead",
                                                        "data-component-path": "src/pages/life/Workshops.tsx",
                                                        "data-component-line": "115",
                                                        "data-component-file": "Workshops.tsx",
                                                        "data-component-name": "TableHead",
                                                        "data-component-content": "%7B%22text%22%3A%22Sl%20No%22%2C%22className%22%3A%22!text-white%20font-semibold%20w-20%22%7D",
                                                        className: "!text-white font-semibold w-20",
                                                        children: "Sl No"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV(TableHead, {
                                                        "data-lov-id": "src/pages/life/Workshops.tsx:116:18",
                                                        "data-lov-name": "TableHead",
                                                        "data-component-path": "src/pages/life/Workshops.tsx",
                                                        "data-component-line": "116",
                                                        "data-component-file": "Workshops.tsx",
                                                        "data-component-name": "TableHead",
                                                        "data-component-content": "%7B%22text%22%3A%22Workshop%20Details%22%2C%22className%22%3A%22!text-white%20font-semibold%22%7D",
                                                        className: "!text-white font-semibold",
                                                        children: "Workshop Details"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV(TableHead, {
                                                        "data-lov-id": "src/pages/life/Workshops.tsx:117:18",
                                                        "data-lov-name": "TableHead",
                                                        "data-component-path": "src/pages/life/Workshops.tsx",
                                                        "data-component-line": "117",
                                                        "data-component-file": "Workshops.tsx",
                                                        "data-component-name": "TableHead",
                                                        "data-component-content": "%7B%22text%22%3A%22File%20Download%22%2C%22className%22%3A%22!text-white%20font-semibold%20text-right%22%7D",
                                                        className: "!text-white font-semibold text-right",
                                                        children: "File Download"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                                                lineNumber: 114,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV(TableBody, {
                                            "data-lov-id": "src/pages/life/Workshops.tsx:120:14",
                                            "data-lov-name": "TableBody",
                                            "data-component-path": "src/pages/life/Workshops.tsx",
                                            "data-component-line": "120",
                                            "data-component-file": "Workshops.tsx",
                                            "data-component-name": "TableBody",
                                            "data-component-content": "%7B%7D",
                                            children: workshops.map((w)=>/*#__PURE__*/ _jsxDEV(TableRow, {
                                                    "data-lov-id": "src/pages/life/Workshops.tsx:122:18",
                                                    "data-lov-name": "TableRow",
                                                    "data-component-path": "src/pages/life/Workshops.tsx",
                                                    "data-component-line": "122",
                                                    "data-component-file": "Workshops.tsx",
                                                    "data-component-name": "TableRow",
                                                    "data-component-content": "%7B%7D",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV(TableCell, {
                                                            "data-lov-id": "src/pages/life/Workshops.tsx:123:20",
                                                            "data-lov-name": "TableCell",
                                                            "data-component-path": "src/pages/life/Workshops.tsx",
                                                            "data-component-line": "123",
                                                            "data-component-file": "Workshops.tsx",
                                                            "data-component-name": "TableCell",
                                                            "data-component-content": "%7B%22className%22%3A%22font-semibold%20text-foreground%22%7D",
                                                            className: "font-semibold text-foreground",
                                                            children: w.id
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                                                            lineNumber: 123,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV(TableCell, {
                                                            "data-lov-id": "src/pages/life/Workshops.tsx:124:20",
                                                            "data-lov-name": "TableCell",
                                                            "data-component-path": "src/pages/life/Workshops.tsx",
                                                            "data-component-line": "124",
                                                            "data-component-file": "Workshops.tsx",
                                                            "data-component-name": "TableCell",
                                                            "data-component-content": "%7B%22className%22%3A%22text-foreground%22%7D",
                                                            className: "text-foreground",
                                                            children: w.name
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                                                            lineNumber: 124,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV(TableCell, {
                                                            "data-lov-id": "src/pages/life/Workshops.tsx:125:20",
                                                            "data-lov-name": "TableCell",
                                                            "data-component-path": "src/pages/life/Workshops.tsx",
                                                            "data-component-line": "125",
                                                            "data-component-file": "Workshops.tsx",
                                                            "data-component-name": "TableCell",
                                                            "data-component-content": "%7B%22className%22%3A%22text-right%22%7D",
                                                            className: "text-right",
                                                            children: /*#__PURE__*/ _jsxDEV(Button, {
                                                                "data-lov-id": "src/pages/life/Workshops.tsx:126:22",
                                                                "data-lov-name": "Button",
                                                                "data-component-path": "src/pages/life/Workshops.tsx",
                                                                "data-component-line": "126",
                                                                "data-component-file": "Workshops.tsx",
                                                                "data-component-name": "Button",
                                                                "data-component-content": "%7B%22text%22%3A%22Download%22%2C%22className%22%3A%22bg-indian-green%20hover%3Abg-indian-green%2F90%20text-white%22%7D",
                                                                size: "sm",
                                                                className: "bg-indian-green hover:bg-indian-green/90 text-white",
                                                                children: [
                                                                    /*#__PURE__*/ _jsxDEV(Download, {
                                                                        "data-lov-id": "src/pages/life/Workshops.tsx:127:24",
                                                                        "data-lov-name": "Download",
                                                                        "data-component-path": "src/pages/life/Workshops.tsx",
                                                                        "data-component-line": "127",
                                                                        "data-component-file": "Workshops.tsx",
                                                                        "data-component-name": "Download",
                                                                        "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%20mr-2%22%7D",
                                                                        className: "h-4 w-4 mr-2"
                                                                    }, void 0, false, {
                                                                        fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                                                                        lineNumber: 127,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " Download"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                                                                lineNumber: 126,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                                                            lineNumber: 125,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, w.id, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                                            lineNumber: 120,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                            lineNumber: 110,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                    lineNumber: 104,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
                lineNumber: 103,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/sjrsh916/public_html/src/pages/life/Workshops.tsx",
        lineNumber: 38,
        columnNumber: 3
    }, this);
_c = Workshops;
export default Workshops;
var _c;
$RefreshReg$(_c, "Workshops");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/pages/life/Workshops.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/pages/life/Workshops.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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Ozs7Ozs7Ozs7Ozs7O21EQUw1QmtCLEVBQUUvQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBckYvQkU7QUF3R04sZUFBZUEsVUFBUyIsIm5hbWVzIjpbIkxheW91dCIsIlBhZ2VIZXJvIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQnV0dG9uIiwiVGFibGUiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUhlYWQiLCJUYWJsZUhlYWRlciIsIlRhYmxlUm93IiwibW90aW9uIiwiR3JhZHVhdGlvbkNhcCIsIkJyaWVmY2FzZSIsIkZsYXNrQ29uaWNhbCIsIkJvdCIsIlVzZXJDaGVjayIsIkNyb3duIiwiTGlnaHRidWxiIiwiQm9va09wZW4iLCJEb3dubG9hZCIsIlNwYXJrbGVzIiwiQnJhaW4iLCJSb2NrZXQiLCJjYXRlZ29yaWVzIiwiaWNvbiIsInRpdGxlIiwiZGVzYyIsImJlbmVmaXRzIiwid29ya3Nob3BzIiwiaWQiLCJuYW1lIiwiV29ya3Nob3BzIiwiZGF0YS1sb3YtaWQiLCJkYXRhLWxvdi1uYW1lIiwiZGF0YS1jb21wb25lbnQtcGF0aCIsImRhdGEtY29tcG9uZW50LWxpbmUiLCJkYXRhLWNvbXBvbmVudC1maWxlIiwiZGF0YS1jb21wb25lbnQtbmFtZSIsImRhdGEtY29tcG9uZW50LWNvbnRlbnQiLCJicmVhZGNydW1icyIsImxhYmVsIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgyIiwicCIsIm1hcCIsImIiLCJjb2xvciIsImgzIiwiYyIsImkiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJ3aGlsZUluVmlldyIsInZpZXdwb3J0Iiwib25jZSIsInRyYW5zaXRpb24iLCJkZWxheSIsInciLCJzaXplIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIldvcmtzaG9wcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFBhZ2VIZXJvIGZyb20gXCJAL2NvbXBvbmVudHMvUGFnZUhlcm9cIjtcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgVGFibGUsIFRhYmxlQm9keSwgVGFibGVDZWxsLCBUYWJsZUhlYWQsIFRhYmxlSGVhZGVyLCBUYWJsZVJvdyB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdGFibGVcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQge1xuICBHcmFkdWF0aW9uQ2FwLCBCcmllZmNhc2UsIEZsYXNrQ29uaWNhbCwgQm90LCBVc2VyQ2hlY2ssIENyb3duLCBMaWdodGJ1bGIsIEJvb2tPcGVuLFxuICBEb3dubG9hZCwgU3BhcmtsZXMsIEJyYWluLCBSb2NrZXQsXG59IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcblxuY29uc3QgY2F0ZWdvcmllcyA9IFtcbiAgeyBpY29uOiBHcmFkdWF0aW9uQ2FwLCB0aXRsZTogXCJBY2FkZW1pYyBXb3Jrc2hvcHNcIiwgZGVzYzogXCJTdWJqZWN0LWRlZXAgd29ya3Nob3BzIGluIG1hdGhlbWF0aWNzLCBzY2llbmNlcywgbGFuZ3VhZ2VzLCBhbmQgaHVtYW5pdGllcyBsZWQgYnkgdmlzaXRpbmcgZXhwZXJ0cy5cIiB9LFxuICB7IGljb246IEJyaWVmY2FzZSwgdGl0bGU6IFwiQ2FyZWVyIEd1aWRhbmNlIFByb2dyYW1zXCIsIGRlc2M6IFwiU3RyZWFtIHNlbGVjdGlvbiwgdW5pdmVyc2l0eSBwbGFubmluZywgYW5kIGNhcmVlciBjb3Vuc2VsbGluZyBzZXNzaW9ucyBmb3Igc2VuaW9yIHN0dWRlbnRzLlwiIH0sXG4gIHsgaWNvbjogRmxhc2tDb25pY2FsLCB0aXRsZTogXCJTVEVNIFdvcmtzaG9wc1wiLCBkZXNjOiBcIkhhbmRzLW9uIGV4cGVyaW1lbnRhdGlvbiBhbmQgcHJvamVjdCB3b3JrIHRoYXQgYnJpbmdzIFNjaWVuY2UsIFRlY2hub2xvZ3ksIEVuZ2luZWVyaW5nLCBhbmQgTWF0aCB0byBsaWZlLlwiIH0sXG4gIHsgaWNvbjogQm90LCB0aXRsZTogXCJSb2JvdGljcyBFeHBvc3VyZVwiLCBkZXNjOiBcIkJlZ2lubmVyIHRvIGFkdmFuY2VkIHJvYm90aWNzIG1vZHVsZXMgY292ZXJpbmcgZGVzaWduLCBjb2RpbmcsIGFuZCBsaXZlIGJ1aWxkIGNoYWxsZW5nZXMuXCIgfSxcbiAgeyBpY29uOiBVc2VyQ2hlY2ssIHRpdGxlOiBcIlBlcnNvbmFsaXR5IERldmVsb3BtZW50XCIsIGRlc2M6IFwiUHVibGljIHNwZWFraW5nLCBldGlxdWV0dGUsIGdyb29taW5nLCBhbmQgY29uZmlkZW5jZS1idWlsZGluZyBzZXNzaW9ucyBmb3IgaG9saXN0aWMgZ3Jvd3RoLlwiIH0sXG4gIHsgaWNvbjogQ3Jvd24sIHRpdGxlOiBcIkxlYWRlcnNoaXAgVHJhaW5pbmdcIiwgZGVzYzogXCJXb3Jrc2hvcHMgZm9yIHN0dWRlbnQgbGVhZGVycyBjb3ZlcmluZyBkZWNpc2lvbi1tYWtpbmcsIGV0aGljcywgYW5kIHRlYW0gbWFuYWdlbWVudC5cIiB9LFxuICB7IGljb246IExpZ2h0YnVsYiwgdGl0bGU6IFwiTGlmZSBTa2lsbHMgUHJvZ3JhbXNcIiwgZGVzYzogXCJGaW5hbmNpYWwgbGl0ZXJhY3ksIGRpZ2l0YWwgc2FmZXR5LCBlbW90aW9uYWwgd2VsbGJlaW5nLCBhbmQgZXZlcnlkYXktbGl2aW5nIHNraWxscy5cIiB9LFxuICB7IGljb246IEJvb2tPcGVuLCB0aXRsZTogXCJUZWFjaGVyIERldmVsb3BtZW50XCIsIGRlc2M6IFwiSW4tc2VydmljZSB0cmFpbmluZyBmb3IgZmFjdWx0eSBvbiBwZWRhZ29neSwgdGVjaG5vbG9neSwgYXNzZXNzbWVudCwgYW5kIGNoaWxkIHBzeWNob2xvZ3kuXCIgfSxcbl07XG5cbmNvbnN0IGJlbmVmaXRzID0gW1xuICB7IGljb246IEJyYWluLCB0aXRsZTogXCJEZWVwZW4gVW5kZXJzdGFuZGluZ1wiLCBkZXNjOiBcIldvcmtzaG9wcyBjb21wbGVtZW50IGNsYXNzcm9vbSBsZWFybmluZyB3aXRoIGZvY3VzZWQsIHByYWN0aWNhbCBleHBvc3VyZS5cIiB9LFxuICB7IGljb246IFJvY2tldCwgdGl0bGU6IFwiRnV0dXJlLVJlYWR5IFNraWxsc1wiLCBkZXNjOiBcIlN0dWRlbnRzIGdhaW4gc2tpbGxzIHRoZSBtb2Rlcm4gd29ybGQgZGVtYW5kcyDigJQgYmV5b25kIHRleHRib29rcy5cIiB9LFxuICB7IGljb246IFNwYXJrbGVzLCB0aXRsZTogXCJEaXNjb3ZlciBQYXNzaW9uc1wiLCBkZXNjOiBcIlNob3J0LCBpbnRlbnNpdmUgZm9ybWF0cyBoZWxwIHN0dWRlbnRzIGlkZW50aWZ5IGludGVyZXN0cyBhbmQgY2FyZWVyIHBhdGhzLlwiIH0sXG5dO1xuXG5jb25zdCB3b3Jrc2hvcHMgPSBbXG4gIHsgaWQ6IDEsIG5hbWU6IFwiQ2FyZWVyIEd1aWRhbmNlIFdvcmtzaG9wXCIgfSxcbiAgeyBpZDogMiwgbmFtZTogXCJTVEVNIExlYXJuaW5nIFdvcmtzaG9wXCIgfSxcbiAgeyBpZDogMywgbmFtZTogXCJMZWFkZXJzaGlwIERldmVsb3BtZW50IFByb2dyYW1cIiB9LFxuICB7IGlkOiA0LCBuYW1lOiBcIkxpZmUgU2tpbGxzIFdvcmtzaG9wXCIgfSxcbiAgeyBpZDogNSwgbmFtZTogXCJQZXJzb25hbGl0eSBEZXZlbG9wbWVudCBXb3Jrc2hvcFwiIH0sXG5dO1xuXG5jb25zdCBXb3Jrc2hvcHMgPSAoKSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPFBhZ2VIZXJvIHRpdGxlPVwiV29ya3Nob3BzICYgRW5yaWNobWVudCBQcm9ncmFtc1wiIGJyZWFkY3J1bWJzPXtbeyBsYWJlbDogXCJMaWZlIEAgU0pSUFMtSEJSXCIgfSwgeyBsYWJlbDogXCJXb3Jrc2hvcHNcIiB9XX0gLz5cblxuICAgIHsvKiBTZWN0aW9uIDE6IEludHJvZHVjdGlvbiAqL31cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNiBiZy1iYWNrZ3JvdW5kXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgbWF4LXctNHhsIHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBsZzp0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1mb3JlZ3JvdW5kIG1iLTRcIj5MZWFybmluZyB0aGF0IEdvZXMgQmV5b25kIExlc3NvbnM8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gaC0xIHctMjAgYmctaW5kaWFuLWdyZWVuIHJvdW5kZWQtZnVsbCBtYi02XCIgLz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHRleHQtZm9yZWdyb3VuZC84MCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICBTSlJQUy1IQlIgcmVndWxhcmx5IGhvc3RzIHdvcmtzaG9wcyBhbmQgZW5yaWNobWVudCBwcm9ncmFtcyB0aGF0IGJyb2FkZW4gc3R1ZGVudCBob3Jpem9ucywgYnVpbGQgcmVhbC13b3JsZFxuICAgICAgICAgIHNraWxscywgYW5kIGNvbm5lY3QgY2xhc3Nyb29tIGxlYXJuaW5nIHdpdGggdGhlIHdpZGVyIHdvcmxkLiBGcm9tIFNURU0gYW5kIHJvYm90aWNzIHRvIGxlYWRlcnNoaXAgYW5kXG4gICAgICAgICAgbGlmZSBza2lsbHMsIG91ciBlbnJpY2htZW50IGNhbGVuZGFyIGlzIGN1cmF0ZWQgZm9yIGV2ZXJ5IGFnZSBncm91cC5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgey8qIFNlY3Rpb24gMjogQmVuZWZpdHMgKi99XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTYgYmctbXV0ZWQvMzBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTEyXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGxnOnRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LWZvcmVncm91bmRcIj5CZW5lZml0cyBvZiBXb3Jrc2hvcHM8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtdC0zIGgtMSB3LTIwIGJnLWluZGlhbi1ncmVlbiByb3VuZGVkLWZ1bGxcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0zIGdhcC02XCI+XG4gICAgICAgICAge2JlbmVmaXRzLm1hcCgoYikgPT4gKFxuICAgICAgICAgICAgPENhcmQga2V5PXtiLnRpdGxlfSBjbGFzc05hbWU9XCJob3ZlcjpzaGFkb3ctbGcgdHJhbnNpdGlvbi1zaGFkb3cgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtNlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xNCBoLTE0IHJvdW5kZWQteGwgYmctaW5kaWFuLWdyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1iLTQgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgPGIuaWNvbiBjbGFzc05hbWU9XCJoLTcgdy03XCIgY29sb3I9XCIjZmZmZmZmXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtZm9yZWdyb3VuZCBtYi0yXCI+e2IudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZm9yZWdyb3VuZC83NSBsZWFkaW5nLXJlbGF4ZWRcIj57Yi5kZXNjfTwvcD5cbiAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICB7LyogU2VjdGlvbiAzOiBDYXRlZ29yaWVzICovfVxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTE2IGJnLWJhY2tncm91bmRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTEyXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGxnOnRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LWZvcmVncm91bmRcIj5Xb3Jrc2hvcCBDYXRlZ29yaWVzPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbXQtMyBoLTEgdy0yMCBiZy1pbmRpYW4tZ3JlZW4gcm91bmRlZC1mdWxsXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNCBnYXAtNlwiPlxuICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoYywgaSkgPT4gKFxuICAgICAgICAgICAgPG1vdGlvbi5kaXYga2V5PXtjLnRpdGxlfSBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19IHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHk6IDAgfX0gdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fSB0cmFuc2l0aW9uPXt7IGRlbGF5OiBpICogMC4wNSB9fT5cbiAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiaC1mdWxsIGhvdmVyOnNoYWRvdy14bCB0cmFuc2l0aW9uLXNoYWRvdyBib3JkZXItdC00IGJvcmRlci1pbmRpYW4tZ3JlZW5cIj5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC02XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTQgaC0xNCByb3VuZGVkLXhsIGJnLWluZGlhbi1ncmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxjLmljb24gY2xhc3NOYW1lPVwiaC03IHctN1wiIGNvbG9yPVwiI2ZmZmZmZlwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LWZvcmVncm91bmQgbWItMlwiPntjLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZm9yZWdyb3VuZC83NSBsZWFkaW5nLXJlbGF4ZWRcIj57Yy5kZXNjfTwvcD5cbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgey8qIFNlY3Rpb24gNDogV29ya3Nob3AgSW5mb3JtYXRpb24gVGFibGUgKi99XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTYgYmctbXV0ZWQvMzBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBtYXgtdy01eGxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0xMFwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBsZzp0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1mb3JlZ3JvdW5kXCI+V29ya3Nob3AgSW5mb3JtYXRpb248L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtdC0zIGgtMSB3LTIwIGJnLWluZGlhbi1ncmVlbiByb3VuZGVkLWZ1bGxcIiAvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTQgdGV4dC1mb3JlZ3JvdW5kLzc1XCI+RG93bmxvYWQgd29ya3Nob3AgYnJpZWZzIGFuZCByZXBvcnRzIGJlbG93LjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInNoYWRvdy1sZyBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC0wXCI+XG4gICAgICAgICAgICA8VGFibGU+XG4gICAgICAgICAgICAgIDxUYWJsZUhlYWRlcj5cbiAgICAgICAgICAgICAgICA8VGFibGVSb3cgY2xhc3NOYW1lPVwiYmctaW5kaWFuLWdyZWVuIGhvdmVyOmJnLWluZGlhbi1ncmVlblwiPlxuICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZCBjbGFzc05hbWU9XCIhdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHctMjBcIj5TbCBObzwvVGFibGVIZWFkPlxuICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZCBjbGFzc05hbWU9XCIhdGV4dC13aGl0ZSBmb250LXNlbWlib2xkXCI+V29ya3Nob3AgRGV0YWlsczwvVGFibGVIZWFkPlxuICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZCBjbGFzc05hbWU9XCIhdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHRleHQtcmlnaHRcIj5GaWxlIERvd25sb2FkPC9UYWJsZUhlYWQ+XG4gICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgPC9UYWJsZUhlYWRlcj5cbiAgICAgICAgICAgICAgPFRhYmxlQm9keT5cbiAgICAgICAgICAgICAgICB7d29ya3Nob3BzLm1hcCgodykgPT4gKFxuICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17dy5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWZvcmVncm91bmRcIj57dy5pZH08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjbGFzc05hbWU9XCJ0ZXh0LWZvcmVncm91bmRcIj57dy5uYW1lfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbVwiIGNsYXNzTmFtZT1cImJnLWluZGlhbi1ncmVlbiBob3ZlcjpiZy1pbmRpYW4tZ3JlZW4vOTAgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERvd25sb2FkIGNsYXNzTmFtZT1cImgtNCB3LTQgbXItMlwiIC8+IERvd25sb2FkXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgPC9MYXlvdXQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBXb3Jrc2hvcHM7XG4iXSwiZmlsZSI6Ii9ob21lL3NqcnNoOTE2L3B1YmxpY19odG1sL3NyYy9wYWdlcy9saWZlL1dvcmtzaG9wcy50c3gifQ==