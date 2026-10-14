import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/life/NationalFestivals.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/pages/life/NationalFestivals.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import Layout from "/src/components/Layout.tsx";
import PageHero from "/src/components/PageHero.tsx";
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=5efa796b";
import { Flag, Landmark, Sparkles, BookOpen, Users, Baby, GraduationCap, Heart, ShieldCheck, Globe2 } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
const festivals = [
    {
        icon: Flag,
        name: "Independence Day",
        date: "15th August",
        desc: "Flag hoisting, patriotic songs, march-past, and student speeches honour the freedom fighters who shaped modern India.",
        significance: "Reminds students of the value of liberty and the responsibility of citizenship."
    },
    {
        icon: Landmark,
        name: "Republic Day",
        date: "26th January",
        desc: "Cultural programmes, parade, and reading of the Preamble celebrate the Indian Constitution.",
        significance: "Instils respect for democracy, rights, and constitutional values."
    },
    {
        icon: Sparkles,
        name: "Gandhi Jayanti",
        date: "2nd October",
        desc: "Prayer meetings, bhajans, and pledges of non-violence commemorate the Father of the Nation.",
        significance: "Encourages truth, ahimsa, and selfless service in daily life."
    },
    {
        icon: BookOpen,
        name: "Constitution Day",
        date: "26th November",
        desc: "Workshops on fundamental rights and duties along with quizzes and discussions on the Indian Constitution.",
        significance: "Builds awareness of constitutional rights and civic responsibilities."
    },
    {
        icon: Users,
        name: "National Youth Day",
        date: "12th January",
        desc: "Marked on Swami Vivekananda's birth anniversary with lectures, yoga, and motivational sessions.",
        significance: "Inspires students with the ideals of self-belief, courage, and service."
    },
    {
        icon: Baby,
        name: "Children's Day",
        date: "14th November",
        desc: "Games, cultural shows, and special meals on Pandit Nehru's birthday — a day dedicated entirely to children.",
        significance: "Celebrates childhood and reaffirms our commitment to nurturing young minds."
    },
    {
        icon: GraduationCap,
        name: "Teachers' Day",
        date: "5th September",
        desc: "Student-led tributes, performances, and gratitude messages honour Dr. S. Radhakrishnan and all educators.",
        significance: "Strengthens the bond between teachers and students and recognises the role of educators in nation-building."
    }
];
const sections = [
    {
        icon: Heart,
        title: "Importance of National Festivals",
        desc: "National festivals at SJRPS-HBR are immersive learning experiences that connect history, civic values, and contemporary identity. They give students a sense of belonging to a larger national story."
    },
    {
        icon: ShieldCheck,
        title: "Patriotism & Citizenship",
        desc: "Every observance is designed to instil pride in the tricolour, respect for the Constitution, and a clear understanding of the rights and duties of an Indian citizen."
    },
    {
        icon: Globe2,
        title: "Cultural Heritage",
        desc: "Through music, dance, drama, and storytelling, students explore India's freedom struggle, leaders, and the cultural fabric that unites a billion people."
    },
    {
        icon: Users,
        title: "Student Participation",
        desc: "From organising committees to compering, performing, and speaking, students lead every national event — turning each celebration into a personal act of citizenship."
    }
];
const NationalFestivals = ()=>/*#__PURE__*/ _jsxDEV(Layout, {
        "data-lov-id": "src/pages/life/NationalFestivals.tsx:25:2",
        "data-lov-name": "Layout",
        "data-component-path": "src/pages/life/NationalFestivals.tsx",
        "data-component-line": "25",
        "data-component-file": "NationalFestivals.tsx",
        "data-component-name": "Layout",
        "data-component-content": "%7B%7D",
        children: [
            /*#__PURE__*/ _jsxDEV(PageHero, {
                "data-lov-id": "src/pages/life/NationalFestivals.tsx:26:4",
                "data-lov-name": "PageHero",
                "data-component-path": "src/pages/life/NationalFestivals.tsx",
                "data-component-line": "26",
                "data-component-file": "NationalFestivals.tsx",
                "data-component-name": "PageHero",
                "data-component-content": "%7B%7D",
                title: "National Festivals",
                breadcrumbs: [
                    {
                        label: "Life @ SJRPS-HBR"
                    },
                    {
                        label: "National Festivals"
                    }
                ]
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/life/NationalFestivals.tsx",
                lineNumber: 26,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/life/NationalFestivals.tsx:28:4",
                "data-lov-name": "section",
                "data-component-path": "src/pages/life/NationalFestivals.tsx",
                "data-component-line": "28",
                "data-component-file": "NationalFestivals.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20bg-background%22%7D",
                className: "py-16 bg-background",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/life/NationalFestivals.tsx:29:6",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/life/NationalFestivals.tsx",
                    "data-component-line": "29",
                    "data-component-file": "NationalFestivals.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20max-w-4xl%20text-center%22%7D",
                    className: "container mx-auto px-4 max-w-4xl text-center",
                    children: [
                        /*#__PURE__*/ _jsxDEV("h2", {
                            "data-lov-id": "src/pages/life/NationalFestivals.tsx:30:8",
                            "data-lov-name": "h2",
                            "data-component-path": "src/pages/life/NationalFestivals.tsx",
                            "data-component-line": "30",
                            "data-component-file": "NationalFestivals.tsx",
                            "data-component-name": "h2",
                            "data-component-content": "%7B%22text%22%3A%22Celebrating%20the%20Spirit%20of%20India%22%2C%22className%22%3A%22text-3xl%20lg%3Atext-4xl%20font-bold%20text-foreground%20mb-4%22%7D",
                            className: "text-3xl lg:text-4xl font-bold text-foreground mb-4",
                            children: "Celebrating the Spirit of India"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/life/NationalFestivals.tsx",
                            lineNumber: 30,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/life/NationalFestivals.tsx:31:8",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/life/NationalFestivals.tsx",
                            "data-component-line": "31",
                            "data-component-file": "NationalFestivals.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22mx-auto%20h-1%20w-20%20bg-indian-green%20rounded-full%20mb-6%22%7D",
                            className: "mx-auto h-1 w-20 bg-indian-green rounded-full mb-6"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/life/NationalFestivals.tsx",
                            lineNumber: 31,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ _jsxDEV("p", {
                            "data-lov-id": "src/pages/life/NationalFestivals.tsx:32:8",
                            "data-lov-name": "p",
                            "data-component-path": "src/pages/life/NationalFestivals.tsx",
                            "data-component-line": "32",
                            "data-component-file": "NationalFestivals.tsx",
                            "data-component-name": "p",
                            "data-component-content": "%7B%22text%22%3A%22At%20SJRPS-HBR%2C%20national%20festivals%20are%20observed%20with%20reverence%2C%20joy%2C%20and%20meaningful%20student%20involvement.%20Each%5Cn%20%20%20%20%20%20%20%20%20%20celebration%20becomes%20a%20classroom%20of%20patriotism%2C%20history%2C%20and%20civic%20pride%20%E2%80%94%20connecting%20our%20students%20to%20the%5Cn%20%20%20%20%20%20%20%20%20%20values%20and%20visionaries%20that%20shaped%20modern%20India.%22%2C%22className%22%3A%22text-base%20text-foreground%2F80%20leading-relaxed%22%7D",
                            className: "text-base text-foreground/80 leading-relaxed",
                            children: "At SJRPS-HBR, national festivals are observed with reverence, joy, and meaningful student involvement. Each celebration becomes a classroom of patriotism, history, and civic pride — connecting our students to the values and visionaries that shaped modern India."
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/life/NationalFestivals.tsx",
                            lineNumber: 32,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/pages/life/NationalFestivals.tsx",
                    lineNumber: 29,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/life/NationalFestivals.tsx",
                lineNumber: 28,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/life/NationalFestivals.tsx:40:4",
                "data-lov-name": "section",
                "data-component-path": "src/pages/life/NationalFestivals.tsx",
                "data-component-line": "40",
                "data-component-file": "NationalFestivals.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20bg-muted%2F30%22%7D",
                className: "py-16 bg-muted/30",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/life/NationalFestivals.tsx:41:6",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/life/NationalFestivals.tsx",
                    "data-component-line": "41",
                    "data-component-file": "NationalFestivals.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/life/NationalFestivals.tsx:42:8",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/life/NationalFestivals.tsx",
                            "data-component-line": "42",
                            "data-component-file": "NationalFestivals.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22text-center%20mb-12%22%7D",
                            className: "text-center mb-12",
                            children: [
                                /*#__PURE__*/ _jsxDEV("h2", {
                                    "data-lov-id": "src/pages/life/NationalFestivals.tsx:43:10",
                                    "data-lov-name": "h2",
                                    "data-component-path": "src/pages/life/NationalFestivals.tsx",
                                    "data-component-line": "43",
                                    "data-component-file": "NationalFestivals.tsx",
                                    "data-component-name": "h2",
                                    "data-component-content": "%7B%22text%22%3A%22National%20Festivals%20We%20Celebrate%22%2C%22className%22%3A%22text-3xl%20lg%3Atext-4xl%20font-bold%20text-foreground%22%7D",
                                    className: "text-3xl lg:text-4xl font-bold text-foreground",
                                    children: "National Festivals We Celebrate"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/life/NationalFestivals.tsx",
                                    lineNumber: 43,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/life/NationalFestivals.tsx:44:10",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/life/NationalFestivals.tsx",
                                    "data-component-line": "44",
                                    "data-component-file": "NationalFestivals.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22mx-auto%20mt-3%20h-1%20w-20%20bg-indian-green%20rounded-full%22%7D",
                                    className: "mx-auto mt-3 h-1 w-20 bg-indian-green rounded-full"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/life/NationalFestivals.tsx",
                                    lineNumber: 44,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/pages/life/NationalFestivals.tsx",
                            lineNumber: 42,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/life/NationalFestivals.tsx:46:8",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/life/NationalFestivals.tsx",
                            "data-component-line": "46",
                            "data-component-file": "NationalFestivals.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-2%20lg%3Agrid-cols-3%20gap-6%22%7D",
                            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: festivals.map((f, i)=>/*#__PURE__*/ _jsxDEV(motion.div, {
                                    "data-lov-id": "src/pages/life/NationalFestivals.tsx:48:12",
                                    "data-lov-name": "motion.div",
                                    "data-component-path": "src/pages/life/NationalFestivals.tsx",
                                    "data-component-line": "48",
                                    "data-component-file": "NationalFestivals.tsx",
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
                                        "data-lov-id": "src/pages/life/NationalFestivals.tsx:49:14",
                                        "data-lov-name": "Card",
                                        "data-component-path": "src/pages/life/NationalFestivals.tsx",
                                        "data-component-line": "49",
                                        "data-component-file": "NationalFestivals.tsx",
                                        "data-component-name": "Card",
                                        "data-component-content": "%7B%22className%22%3A%22h-full%20hover%3Ashadow-xl%20transition-shadow%20border-t-4%20border-indian-green%22%7D",
                                        className: "h-full hover:shadow-xl transition-shadow border-t-4 border-indian-green",
                                        children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                            "data-lov-id": "src/pages/life/NationalFestivals.tsx:50:16",
                                            "data-lov-name": "CardContent",
                                            "data-component-path": "src/pages/life/NationalFestivals.tsx",
                                            "data-component-line": "50",
                                            "data-component-file": "NationalFestivals.tsx",
                                            "data-component-name": "CardContent",
                                            "data-component-content": "%7B%22className%22%3A%22p-6%22%7D",
                                            className: "p-6",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/life/NationalFestivals.tsx:51:18",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/life/NationalFestivals.tsx",
                                                    "data-component-line": "51",
                                                    "data-component-file": "NationalFestivals.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22w-14%20h-14%20rounded-xl%20bg-indian-green%20flex%20items-center%20justify-center%20mb-4%22%7D",
                                                    className: "w-14 h-14 rounded-xl bg-indian-green flex items-center justify-center mb-4",
                                                    children: /*#__PURE__*/ _jsxDEV(f.icon, {
                                                        "data-lov-id": "src/pages/life/NationalFestivals.tsx:52:20",
                                                        "data-lov-name": "f.icon",
                                                        "data-component-path": "src/pages/life/NationalFestivals.tsx",
                                                        "data-component-line": "52",
                                                        "data-component-file": "NationalFestivals.tsx",
                                                        "data-component-name": "f.icon",
                                                        "data-component-content": "%7B%22className%22%3A%22h-7%20w-7%22%7D",
                                                        className: "h-7 w-7",
                                                        color: "#ffffff"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/life/NationalFestivals.tsx",
                                                        lineNumber: 52,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/life/NationalFestivals.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("h3", {
                                                    "data-lov-id": "src/pages/life/NationalFestivals.tsx:54:18",
                                                    "data-lov-name": "h3",
                                                    "data-component-path": "src/pages/life/NationalFestivals.tsx",
                                                    "data-component-line": "54",
                                                    "data-component-file": "NationalFestivals.tsx",
                                                    "data-component-name": "h3",
                                                    "data-component-content": "%7B%22className%22%3A%22text-lg%20font-bold%20text-foreground%22%7D",
                                                    className: "text-lg font-bold text-foreground",
                                                    children: f.name
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/life/NationalFestivals.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/life/NationalFestivals.tsx:55:18",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/life/NationalFestivals.tsx",
                                                    "data-component-line": "55",
                                                    "data-component-file": "NationalFestivals.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22className%22%3A%22text-sm%20text-indian-green%20font-semibold%20mb-3%22%7D",
                                                    className: "text-sm text-indian-green font-semibold mb-3",
                                                    children: f.date
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/life/NationalFestivals.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/life/NationalFestivals.tsx:56:18",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/life/NationalFestivals.tsx",
                                                    "data-component-line": "56",
                                                    "data-component-file": "NationalFestivals.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22className%22%3A%22text-sm%20text-foreground%2F75%20leading-relaxed%20mb-3%22%7D",
                                                    className: "text-sm text-foreground/75 leading-relaxed mb-3",
                                                    children: f.desc
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/life/NationalFestivals.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/life/NationalFestivals.tsx:57:18",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/life/NationalFestivals.tsx",
                                                    "data-component-line": "57",
                                                    "data-component-file": "NationalFestivals.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22pt-3%20border-t%20border-border%22%7D",
                                                    className: "pt-3 border-t border-border",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("p", {
                                                            "data-lov-id": "src/pages/life/NationalFestivals.tsx:58:20",
                                                            "data-lov-name": "p",
                                                            "data-component-path": "src/pages/life/NationalFestivals.tsx",
                                                            "data-component-line": "58",
                                                            "data-component-file": "NationalFestivals.tsx",
                                                            "data-component-name": "p",
                                                            "data-component-content": "%7B%22text%22%3A%22Educational%20Significance%22%2C%22className%22%3A%22text-xs%20uppercase%20tracking-wide%20text-indian-green%20font-semibold%20mb-1%22%7D",
                                                            className: "text-xs uppercase tracking-wide text-indian-green font-semibold mb-1",
                                                            children: "Educational Significance"
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/life/NationalFestivals.tsx",
                                                            lineNumber: 58,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("p", {
                                                            "data-lov-id": "src/pages/life/NationalFestivals.tsx:59:20",
                                                            "data-lov-name": "p",
                                                            "data-component-path": "src/pages/life/NationalFestivals.tsx",
                                                            "data-component-line": "59",
                                                            "data-component-file": "NationalFestivals.tsx",
                                                            "data-component-name": "p",
                                                            "data-component-content": "%7B%22className%22%3A%22text-sm%20text-foreground%2F75%22%7D",
                                                            className: "text-sm text-foreground/75",
                                                            children: f.significance
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/life/NationalFestivals.tsx",
                                                            lineNumber: 59,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/life/NationalFestivals.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/life/NationalFestivals.tsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/life/NationalFestivals.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this)
                                }, f.name, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/life/NationalFestivals.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this))
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/life/NationalFestivals.tsx",
                            lineNumber: 46,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/pages/life/NationalFestivals.tsx",
                    lineNumber: 41,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/life/NationalFestivals.tsx",
                lineNumber: 40,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/life/NationalFestivals.tsx:69:4",
                "data-lov-name": "section",
                "data-component-path": "src/pages/life/NationalFestivals.tsx",
                "data-component-line": "69",
                "data-component-file": "NationalFestivals.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20bg-background%22%7D",
                className: "py-16 bg-background",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/life/NationalFestivals.tsx:70:6",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/life/NationalFestivals.tsx",
                    "data-component-line": "70",
                    "data-component-file": "NationalFestivals.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/life/NationalFestivals.tsx:71:8",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/life/NationalFestivals.tsx",
                        "data-component-line": "71",
                        "data-component-file": "NationalFestivals.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-2%20gap-6%22%7D",
                        className: "grid md:grid-cols-2 gap-6",
                        children: sections.map((s)=>/*#__PURE__*/ _jsxDEV(Card, {
                                "data-lov-id": "src/pages/life/NationalFestivals.tsx:73:12",
                                "data-lov-name": "Card",
                                "data-component-path": "src/pages/life/NationalFestivals.tsx",
                                "data-component-line": "73",
                                "data-component-file": "NationalFestivals.tsx",
                                "data-component-name": "Card",
                                "data-component-content": "%7B%22className%22%3A%22hover%3Ashadow-lg%20transition-shadow%22%7D",
                                className: "hover:shadow-lg transition-shadow",
                                children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                    "data-lov-id": "src/pages/life/NationalFestivals.tsx:74:14",
                                    "data-lov-name": "CardContent",
                                    "data-component-path": "src/pages/life/NationalFestivals.tsx",
                                    "data-component-line": "74",
                                    "data-component-file": "NationalFestivals.tsx",
                                    "data-component-name": "CardContent",
                                    "data-component-content": "%7B%22className%22%3A%22p-6%20flex%20gap-4%22%7D",
                                    className: "p-6 flex gap-4",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/pages/life/NationalFestivals.tsx:75:16",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/pages/life/NationalFestivals.tsx",
                                            "data-component-line": "75",
                                            "data-component-file": "NationalFestivals.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22w-12%20h-12%20rounded-lg%20bg-indian-green%20flex%20items-center%20justify-center%20shrink-0%22%7D",
                                            className: "w-12 h-12 rounded-lg bg-indian-green flex items-center justify-center shrink-0",
                                            children: /*#__PURE__*/ _jsxDEV(s.icon, {
                                                "data-lov-id": "src/pages/life/NationalFestivals.tsx:76:18",
                                                "data-lov-name": "s.icon",
                                                "data-component-path": "src/pages/life/NationalFestivals.tsx",
                                                "data-component-line": "76",
                                                "data-component-file": "NationalFestivals.tsx",
                                                "data-component-name": "s.icon",
                                                "data-component-content": "%7B%22className%22%3A%22h-6%20w-6%22%7D",
                                                className: "h-6 w-6",
                                                color: "#ffffff"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/life/NationalFestivals.tsx",
                                                lineNumber: 76,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/life/NationalFestivals.tsx",
                                            lineNumber: 75,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/pages/life/NationalFestivals.tsx:78:16",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/pages/life/NationalFestivals.tsx",
                                            "data-component-line": "78",
                                            "data-component-file": "NationalFestivals.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%7D",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("h3", {
                                                    "data-lov-id": "src/pages/life/NationalFestivals.tsx:79:18",
                                                    "data-lov-name": "h3",
                                                    "data-component-path": "src/pages/life/NationalFestivals.tsx",
                                                    "data-component-line": "79",
                                                    "data-component-file": "NationalFestivals.tsx",
                                                    "data-component-name": "h3",
                                                    "data-component-content": "%7B%22className%22%3A%22text-lg%20font-bold%20text-foreground%20mb-2%22%7D",
                                                    className: "text-lg font-bold text-foreground mb-2",
                                                    children: s.title
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/life/NationalFestivals.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/life/NationalFestivals.tsx:80:18",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/life/NationalFestivals.tsx",
                                                    "data-component-line": "80",
                                                    "data-component-file": "NationalFestivals.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22className%22%3A%22text-sm%20text-foreground%2F75%20leading-relaxed%22%7D",
                                                    className: "text-sm text-foreground/75 leading-relaxed",
                                                    children: s.desc
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/life/NationalFestivals.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/life/NationalFestivals.tsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/life/NationalFestivals.tsx",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, this)
                            }, s.title, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/life/NationalFestivals.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/life/NationalFestivals.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/life/NationalFestivals.tsx",
                    lineNumber: 70,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/life/NationalFestivals.tsx",
                lineNumber: 69,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/sjrsh916/public_html/src/pages/life/NationalFestivals.tsx",
        lineNumber: 25,
        columnNumber: 3
    }, this);
_c = NationalFestivals;
export default NationalFestivals;
var _c;
$RefreshReg$(_c, "NationalFestivals");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/pages/life/NationalFestivals.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/pages/life/NationalFestivals.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBT0EsWUFBWSxzQkFBcUI7QUFDeEMsT0FBT0MsY0FBYyx3QkFBdUI7QUFDNUMsU0FBU0MsSUFBSSxFQUFFQyxXQUFXLFFBQVEsdUJBQXNCO0FBQ3hELFNBQVNDLE1BQU0sUUFBUSxnQkFBZTtBQUN0QyxTQUFTQyxJQUFJLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxRQUFRLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxhQUFhLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxNQUFNLFFBQVEsZUFBYztBQUV6SCxNQUFNQyxZQUFZO0lBQ2hCO1FBQUVDLE1BQU1YO1FBQU1ZLE1BQU07UUFBb0JDLE1BQU07UUFBZUMsTUFBTTtRQUF5SEMsY0FBYztJQUFrRjtJQUM1UjtRQUFFSixNQUFNVjtRQUFVVyxNQUFNO1FBQWdCQyxNQUFNO1FBQWdCQyxNQUFNO1FBQStGQyxjQUFjO0lBQW9FO0lBQ3JQO1FBQUVKLE1BQU1UO1FBQVVVLE1BQU07UUFBa0JDLE1BQU07UUFBZUMsTUFBTTtRQUErRkMsY0FBYztJQUFnRTtJQUNsUDtRQUFFSixNQUFNUjtRQUFVUyxNQUFNO1FBQW9CQyxNQUFNO1FBQWlCQyxNQUFNO1FBQTZHQyxjQUFjO0lBQXdFO0lBQzVRO1FBQUVKLE1BQU1QO1FBQU9RLE1BQU07UUFBc0JDLE1BQU07UUFBZ0JDLE1BQU07UUFBbUdDLGNBQWM7SUFBMEU7SUFDbFE7UUFBRUosTUFBTU47UUFBTU8sTUFBTTtRQUFrQkMsTUFBTTtRQUFpQkMsTUFBTTtRQUErR0MsY0FBYztJQUE4RTtJQUM5UTtRQUFFSixNQUFNTDtRQUFlTSxNQUFNO1FBQWlCQyxNQUFNO1FBQWlCQyxNQUFNO1FBQTZHQyxjQUFjO0lBQThHO0NBQ3JUO0FBRUQsTUFBTUMsV0FBVztJQUNmO1FBQUVMLE1BQU1KO1FBQU9VLE9BQU87UUFBb0NILE1BQU07SUFBd007SUFDeFE7UUFBRUgsTUFBTUg7UUFBYVMsT0FBTztRQUE0QkgsTUFBTTtJQUF3SztJQUN0TztRQUFFSCxNQUFNRjtRQUFRUSxPQUFPO1FBQXFCSCxNQUFNO0lBQTJKO0lBQzdNO1FBQUVILE1BQU1QO1FBQU9hLE9BQU87UUFBeUJILE1BQU07SUFBdUs7Q0FDN047QUFFRCxNQUFNSSxvQkFBb0Isa0JBQ3hCLFFBQUN2QjtRQUFLd0IsZUFBQTtRQUFBQyxpQkFBQTtRQUFBQyx1QkFBQTtRQUFBQyx1QkFBQTtRQUFBQyx1QkFBQTtRQUFBQyx1QkFBQTtRQUFBQywwQkFBQTs7MEJBQ0osUUFBQzdCO2dCQUFPdUIsZUFBQTtnQkFBQUMsaUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQywwQkFBQTtnQkFBRVIsT0FBTTtnQkFBcUJTLGFBQWE7b0JBQUM7d0JBQUVDLE9BQU87b0JBQW1CO29CQUFHO3dCQUFFQSxPQUFPO29CQUFxQjtpQkFBRTs7Ozs7OzBCQUVsSCxRQUFDQztnQkFBTVQsZUFBQTtnQkFBQUMsaUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQywwQkFBQTtnQkFBRUksV0FBVTswQkFDakIsc0JBQUNDO29CQUFFWCxlQUFBO29CQUFBQyxpQkFBQTtvQkFBQUMsdUJBQUE7b0JBQUFDLHVCQUFBO29CQUFBQyx1QkFBQTtvQkFBQUMsdUJBQUE7b0JBQUFDLDBCQUFBO29CQUFFSSxXQUFVOztzQ0FDYixRQUFDRTs0QkFBQ1osZUFBQTs0QkFBQUMsaUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQywwQkFBQTs0QkFBRUksV0FBVTtzQ0FBc0Q7Ozs7OztzQ0FDcEUsUUFBQ0M7NEJBQUVYLGVBQUE7NEJBQUFDLGlCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsMEJBQUE7NEJBQUVJLFdBQVU7Ozs7OztzQ0FDZixRQUFDRzs0QkFBQWIsZUFBQTs0QkFBQUMsaUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQywwQkFBQTs0QkFBRUksV0FBVTtzQ0FBOEM7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVEvRCxRQUFDRDtnQkFBTVQsZUFBQTtnQkFBQUMsaUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQywwQkFBQTtnQkFBRUksV0FBVTswQkFDakIsc0JBQUNDO29CQUFFWCxlQUFBO29CQUFBQyxpQkFBQTtvQkFBQUMsdUJBQUE7b0JBQUFDLHVCQUFBO29CQUFBQyx1QkFBQTtvQkFBQUMsdUJBQUE7b0JBQUFDLDBCQUFBO29CQUFFSSxXQUFVOztzQ0FDYixRQUFDQzs0QkFBRVgsZUFBQTs0QkFBQUMsaUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQywwQkFBQTs0QkFBRUksV0FBVTs7OENBQ2IsUUFBQ0U7b0NBQUNaLGVBQUE7b0NBQUFDLGlCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsMEJBQUE7b0NBQUVJLFdBQVU7OENBQWlEOzs7Ozs7OENBQy9ELFFBQUNDO29DQUFFWCxlQUFBO29DQUFBQyxpQkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLDBCQUFBO29DQUFFSSxXQUFVOzs7Ozs7Ozs7Ozs7c0NBRWpCLFFBQUNDOzRCQUFFWCxlQUFBOzRCQUFBQyxpQkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLDBCQUFBOzRCQUFFSSxXQUFVO3NDQUNabkIsVUFBVXVCLEdBQUcsQ0FBQyxDQUFDQyxHQUFHQyxrQkFDakIsUUFBQ3BDLE9BQU8rQixHQUFFO29DQUFBWCxlQUFBO29DQUFBQyxpQkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLDBCQUFBO29DQUFlVyxTQUFTO3dDQUFFQyxTQUFTO3dDQUFHQyxHQUFHO29DQUFHO29DQUFHQyxhQUFhO3dDQUFFRixTQUFTO3dDQUFHQyxHQUFHO29DQUFFO29DQUFHRSxVQUFVO3dDQUFFQyxNQUFNO29DQUFLO29DQUFHQyxZQUFZO3dDQUFFQyxPQUFPUixJQUFJO29DQUFLOzhDQUNsSixzQkFBQ3RDO3dDQUFHc0IsZUFBQTt3Q0FBQUMsaUJBQUE7d0NBQUFDLHVCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLHVCQUFBO3dDQUFBQywwQkFBQTt3Q0FBRUksV0FBVTtrREFDZCxzQkFBQy9COzRDQUFVcUIsZUFBQTs0Q0FBQUMsaUJBQUE7NENBQUFDLHVCQUFBOzRDQUFBQyx1QkFBQTs0Q0FBQUMsdUJBQUE7NENBQUFDLHVCQUFBOzRDQUFBQywwQkFBQTs0Q0FBRUksV0FBVTs7OERBQ3JCLFFBQUNDO29EQUFFWCxlQUFBO29EQUFBQyxpQkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLDBCQUFBO29EQUFFSSxXQUFVOzhEQUNiLHNCQUFDSyxFQUFFdkIsSUFBRzt3REFBQVEsZUFBQTt3REFBQUMsaUJBQUE7d0RBQUFDLHVCQUFBO3dEQUFBQyx1QkFBQTt3REFBQUMsdUJBQUE7d0RBQUFDLHVCQUFBO3dEQUFBQywwQkFBQTt3REFBRUksV0FBVTt3REFBVWUsT0FBTTs7Ozs7Ozs7Ozs7OERBRXBDLFFBQUNDO29EQUFDMUIsZUFBQTtvREFBQUMsaUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQywwQkFBQTtvREFBRUksV0FBVTs4REFBcUNLLEVBQUV0QixJQUFJOzs7Ozs7OERBQ3pELFFBQUNvQjtvREFBQWIsZUFBQTtvREFBQUMsaUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQywwQkFBQTtvREFBRUksV0FBVTs4REFBZ0RLLEVBQUVyQixJQUFJOzs7Ozs7OERBQ25FLFFBQUNtQjtvREFBQWIsZUFBQTtvREFBQUMsaUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQywwQkFBQTtvREFBRUksV0FBVTs4REFBbURLLEVBQUVwQixJQUFJOzs7Ozs7OERBQ3RFLFFBQUNnQjtvREFBRVgsZUFBQTtvREFBQUMsaUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQywwQkFBQTtvREFBRUksV0FBVTs7c0VBQ2IsUUFBQ0c7NERBQUFiLGVBQUE7NERBQUFDLGlCQUFBOzREQUFBQyx1QkFBQTs0REFBQUMsdUJBQUE7NERBQUFDLHVCQUFBOzREQUFBQyx1QkFBQTs0REFBQUMsMEJBQUE7NERBQUVJLFdBQVU7c0VBQXVFOzs7Ozs7c0VBQ3BGLFFBQUNHOzREQUFBYixlQUFBOzREQUFBQyxpQkFBQTs0REFBQUMsdUJBQUE7NERBQUFDLHVCQUFBOzREQUFBQyx1QkFBQTs0REFBQUMsdUJBQUE7NERBQUFDLDBCQUFBOzREQUFFSSxXQUFVO3NFQUE4QkssRUFBRW5CLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQVhoRG1CLEVBQUV0QixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBcUIvQixRQUFDZ0I7Z0JBQU1ULGVBQUE7Z0JBQUFDLGlCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsMEJBQUE7Z0JBQUVJLFdBQVU7MEJBQ2pCLHNCQUFDQztvQkFBRVgsZUFBQTtvQkFBQUMsaUJBQUE7b0JBQUFDLHVCQUFBO29CQUFBQyx1QkFBQTtvQkFBQUMsdUJBQUE7b0JBQUFDLHVCQUFBO29CQUFBQywwQkFBQTtvQkFBRUksV0FBVTs4QkFDYixzQkFBQ0M7d0JBQUVYLGVBQUE7d0JBQUFDLGlCQUFBO3dCQUFBQyx1QkFBQTt3QkFBQUMsdUJBQUE7d0JBQUFDLHVCQUFBO3dCQUFBQyx1QkFBQTt3QkFBQUMsMEJBQUE7d0JBQUVJLFdBQVU7a0NBQ1piLFNBQVNpQixHQUFHLENBQUMsQ0FBQ2Esa0JBQ2IsUUFBQ2pEO2dDQUFHc0IsZUFBQTtnQ0FBQUMsaUJBQUE7Z0NBQUFDLHVCQUFBO2dDQUFBQyx1QkFBQTtnQ0FBQUMsdUJBQUE7Z0NBQUFDLHVCQUFBO2dDQUFBQywwQkFBQTtnQ0FBZ0JJLFdBQVU7MENBQzVCLHNCQUFDL0I7b0NBQVVxQixlQUFBO29DQUFBQyxpQkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLDBCQUFBO29DQUFFSSxXQUFVOztzREFDckIsUUFBQ0M7NENBQUVYLGVBQUE7NENBQUFDLGlCQUFBOzRDQUFBQyx1QkFBQTs0Q0FBQUMsdUJBQUE7NENBQUFDLHVCQUFBOzRDQUFBQyx1QkFBQTs0Q0FBQUMsMEJBQUE7NENBQUVJLFdBQVU7c0RBQ2Isc0JBQUNpQixFQUFFbkMsSUFBRztnREFBQVEsZUFBQTtnREFBQUMsaUJBQUE7Z0RBQUFDLHVCQUFBO2dEQUFBQyx1QkFBQTtnREFBQUMsdUJBQUE7Z0RBQUFDLHVCQUFBO2dEQUFBQywwQkFBQTtnREFBRUksV0FBVTtnREFBVWUsT0FBTTs7Ozs7Ozs7Ozs7c0RBRXBDLFFBQUNkOzRDQUFFWCxlQUFBOzRDQUFBQyxpQkFBQTs0Q0FBQUMsdUJBQUE7NENBQUFDLHVCQUFBOzRDQUFBQyx1QkFBQTs0Q0FBQUMsdUJBQUE7NENBQUFDLDBCQUFBOzs4REFDRCxRQUFDb0I7b0RBQUMxQixlQUFBO29EQUFBQyxpQkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLDBCQUFBO29EQUFFSSxXQUFVOzhEQUEwQ2lCLEVBQUU3QixLQUFLOzs7Ozs7OERBQy9ELFFBQUNlO29EQUFBYixlQUFBO29EQUFBQyxpQkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLDBCQUFBO29EQUFFSSxXQUFVOzhEQUE4Q2lCLEVBQUVoQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBUDVEZ0MsRUFBRTdCLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBakR4QkM7QUFtRU4sZUFBZUEsa0JBQWlCIiwibmFtZXMiOlsiTGF5b3V0IiwiUGFnZUhlcm8iLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJtb3Rpb24iLCJGbGFnIiwiTGFuZG1hcmsiLCJTcGFya2xlcyIsIkJvb2tPcGVuIiwiVXNlcnMiLCJCYWJ5IiwiR3JhZHVhdGlvbkNhcCIsIkhlYXJ0IiwiU2hpZWxkQ2hlY2siLCJHbG9iZTIiLCJmZXN0aXZhbHMiLCJpY29uIiwibmFtZSIsImRhdGUiLCJkZXNjIiwic2lnbmlmaWNhbmNlIiwic2VjdGlvbnMiLCJ0aXRsZSIsIk5hdGlvbmFsRmVzdGl2YWxzIiwiZGF0YS1sb3YtaWQiLCJkYXRhLWxvdi1uYW1lIiwiZGF0YS1jb21wb25lbnQtcGF0aCIsImRhdGEtY29tcG9uZW50LWxpbmUiLCJkYXRhLWNvbXBvbmVudC1maWxlIiwiZGF0YS1jb21wb25lbnQtbmFtZSIsImRhdGEtY29tcG9uZW50LWNvbnRlbnQiLCJicmVhZGNydW1icyIsImxhYmVsIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgyIiwicCIsIm1hcCIsImYiLCJpIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5Iiwid2hpbGVJblZpZXciLCJ2aWV3cG9ydCIsIm9uY2UiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJjb2xvciIsImgzIiwicyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJOYXRpb25hbEZlc3RpdmFscy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFBhZ2VIZXJvIGZyb20gXCJAL2NvbXBvbmVudHMvUGFnZUhlcm9cIjtcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgRmxhZywgTGFuZG1hcmssIFNwYXJrbGVzLCBCb29rT3BlbiwgVXNlcnMsIEJhYnksIEdyYWR1YXRpb25DYXAsIEhlYXJ0LCBTaGllbGRDaGVjaywgR2xvYmUyIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuXG5jb25zdCBmZXN0aXZhbHMgPSBbXG4gIHsgaWNvbjogRmxhZywgbmFtZTogXCJJbmRlcGVuZGVuY2UgRGF5XCIsIGRhdGU6IFwiMTV0aCBBdWd1c3RcIiwgZGVzYzogXCJGbGFnIGhvaXN0aW5nLCBwYXRyaW90aWMgc29uZ3MsIG1hcmNoLXBhc3QsIGFuZCBzdHVkZW50IHNwZWVjaGVzIGhvbm91ciB0aGUgZnJlZWRvbSBmaWdodGVycyB3aG8gc2hhcGVkIG1vZGVybiBJbmRpYS5cIiwgc2lnbmlmaWNhbmNlOiBcIlJlbWluZHMgc3R1ZGVudHMgb2YgdGhlIHZhbHVlIG9mIGxpYmVydHkgYW5kIHRoZSByZXNwb25zaWJpbGl0eSBvZiBjaXRpemVuc2hpcC5cIiB9LFxuICB7IGljb246IExhbmRtYXJrLCBuYW1lOiBcIlJlcHVibGljIERheVwiLCBkYXRlOiBcIjI2dGggSmFudWFyeVwiLCBkZXNjOiBcIkN1bHR1cmFsIHByb2dyYW1tZXMsIHBhcmFkZSwgYW5kIHJlYWRpbmcgb2YgdGhlIFByZWFtYmxlIGNlbGVicmF0ZSB0aGUgSW5kaWFuIENvbnN0aXR1dGlvbi5cIiwgc2lnbmlmaWNhbmNlOiBcIkluc3RpbHMgcmVzcGVjdCBmb3IgZGVtb2NyYWN5LCByaWdodHMsIGFuZCBjb25zdGl0dXRpb25hbCB2YWx1ZXMuXCIgfSxcbiAgeyBpY29uOiBTcGFya2xlcywgbmFtZTogXCJHYW5kaGkgSmF5YW50aVwiLCBkYXRlOiBcIjJuZCBPY3RvYmVyXCIsIGRlc2M6IFwiUHJheWVyIG1lZXRpbmdzLCBiaGFqYW5zLCBhbmQgcGxlZGdlcyBvZiBub24tdmlvbGVuY2UgY29tbWVtb3JhdGUgdGhlIEZhdGhlciBvZiB0aGUgTmF0aW9uLlwiLCBzaWduaWZpY2FuY2U6IFwiRW5jb3VyYWdlcyB0cnV0aCwgYWhpbXNhLCBhbmQgc2VsZmxlc3Mgc2VydmljZSBpbiBkYWlseSBsaWZlLlwiIH0sXG4gIHsgaWNvbjogQm9va09wZW4sIG5hbWU6IFwiQ29uc3RpdHV0aW9uIERheVwiLCBkYXRlOiBcIjI2dGggTm92ZW1iZXJcIiwgZGVzYzogXCJXb3Jrc2hvcHMgb24gZnVuZGFtZW50YWwgcmlnaHRzIGFuZCBkdXRpZXMgYWxvbmcgd2l0aCBxdWl6emVzIGFuZCBkaXNjdXNzaW9ucyBvbiB0aGUgSW5kaWFuIENvbnN0aXR1dGlvbi5cIiwgc2lnbmlmaWNhbmNlOiBcIkJ1aWxkcyBhd2FyZW5lc3Mgb2YgY29uc3RpdHV0aW9uYWwgcmlnaHRzIGFuZCBjaXZpYyByZXNwb25zaWJpbGl0aWVzLlwiIH0sXG4gIHsgaWNvbjogVXNlcnMsIG5hbWU6IFwiTmF0aW9uYWwgWW91dGggRGF5XCIsIGRhdGU6IFwiMTJ0aCBKYW51YXJ5XCIsIGRlc2M6IFwiTWFya2VkIG9uIFN3YW1pIFZpdmVrYW5hbmRhJ3MgYmlydGggYW5uaXZlcnNhcnkgd2l0aCBsZWN0dXJlcywgeW9nYSwgYW5kIG1vdGl2YXRpb25hbCBzZXNzaW9ucy5cIiwgc2lnbmlmaWNhbmNlOiBcIkluc3BpcmVzIHN0dWRlbnRzIHdpdGggdGhlIGlkZWFscyBvZiBzZWxmLWJlbGllZiwgY291cmFnZSwgYW5kIHNlcnZpY2UuXCIgfSxcbiAgeyBpY29uOiBCYWJ5LCBuYW1lOiBcIkNoaWxkcmVuJ3MgRGF5XCIsIGRhdGU6IFwiMTR0aCBOb3ZlbWJlclwiLCBkZXNjOiBcIkdhbWVzLCBjdWx0dXJhbCBzaG93cywgYW5kIHNwZWNpYWwgbWVhbHMgb24gUGFuZGl0IE5laHJ1J3MgYmlydGhkYXkg4oCUIGEgZGF5IGRlZGljYXRlZCBlbnRpcmVseSB0byBjaGlsZHJlbi5cIiwgc2lnbmlmaWNhbmNlOiBcIkNlbGVicmF0ZXMgY2hpbGRob29kIGFuZCByZWFmZmlybXMgb3VyIGNvbW1pdG1lbnQgdG8gbnVydHVyaW5nIHlvdW5nIG1pbmRzLlwiIH0sXG4gIHsgaWNvbjogR3JhZHVhdGlvbkNhcCwgbmFtZTogXCJUZWFjaGVycycgRGF5XCIsIGRhdGU6IFwiNXRoIFNlcHRlbWJlclwiLCBkZXNjOiBcIlN0dWRlbnQtbGVkIHRyaWJ1dGVzLCBwZXJmb3JtYW5jZXMsIGFuZCBncmF0aXR1ZGUgbWVzc2FnZXMgaG9ub3VyIERyLiBTLiBSYWRoYWtyaXNobmFuIGFuZCBhbGwgZWR1Y2F0b3JzLlwiLCBzaWduaWZpY2FuY2U6IFwiU3RyZW5ndGhlbnMgdGhlIGJvbmQgYmV0d2VlbiB0ZWFjaGVycyBhbmQgc3R1ZGVudHMgYW5kIHJlY29nbmlzZXMgdGhlIHJvbGUgb2YgZWR1Y2F0b3JzIGluIG5hdGlvbi1idWlsZGluZy5cIiB9LFxuXTtcblxuY29uc3Qgc2VjdGlvbnMgPSBbXG4gIHsgaWNvbjogSGVhcnQsIHRpdGxlOiBcIkltcG9ydGFuY2Ugb2YgTmF0aW9uYWwgRmVzdGl2YWxzXCIsIGRlc2M6IFwiTmF0aW9uYWwgZmVzdGl2YWxzIGF0IFNKUlBTLUhCUiBhcmUgaW1tZXJzaXZlIGxlYXJuaW5nIGV4cGVyaWVuY2VzIHRoYXQgY29ubmVjdCBoaXN0b3J5LCBjaXZpYyB2YWx1ZXMsIGFuZCBjb250ZW1wb3JhcnkgaWRlbnRpdHkuIFRoZXkgZ2l2ZSBzdHVkZW50cyBhIHNlbnNlIG9mIGJlbG9uZ2luZyB0byBhIGxhcmdlciBuYXRpb25hbCBzdG9yeS5cIiB9LFxuICB7IGljb246IFNoaWVsZENoZWNrLCB0aXRsZTogXCJQYXRyaW90aXNtICYgQ2l0aXplbnNoaXBcIiwgZGVzYzogXCJFdmVyeSBvYnNlcnZhbmNlIGlzIGRlc2lnbmVkIHRvIGluc3RpbCBwcmlkZSBpbiB0aGUgdHJpY29sb3VyLCByZXNwZWN0IGZvciB0aGUgQ29uc3RpdHV0aW9uLCBhbmQgYSBjbGVhciB1bmRlcnN0YW5kaW5nIG9mIHRoZSByaWdodHMgYW5kIGR1dGllcyBvZiBhbiBJbmRpYW4gY2l0aXplbi5cIiB9LFxuICB7IGljb246IEdsb2JlMiwgdGl0bGU6IFwiQ3VsdHVyYWwgSGVyaXRhZ2VcIiwgZGVzYzogXCJUaHJvdWdoIG11c2ljLCBkYW5jZSwgZHJhbWEsIGFuZCBzdG9yeXRlbGxpbmcsIHN0dWRlbnRzIGV4cGxvcmUgSW5kaWEncyBmcmVlZG9tIHN0cnVnZ2xlLCBsZWFkZXJzLCBhbmQgdGhlIGN1bHR1cmFsIGZhYnJpYyB0aGF0IHVuaXRlcyBhIGJpbGxpb24gcGVvcGxlLlwiIH0sXG4gIHsgaWNvbjogVXNlcnMsIHRpdGxlOiBcIlN0dWRlbnQgUGFydGljaXBhdGlvblwiLCBkZXNjOiBcIkZyb20gb3JnYW5pc2luZyBjb21taXR0ZWVzIHRvIGNvbXBlcmluZywgcGVyZm9ybWluZywgYW5kIHNwZWFraW5nLCBzdHVkZW50cyBsZWFkIGV2ZXJ5IG5hdGlvbmFsIGV2ZW50IOKAlCB0dXJuaW5nIGVhY2ggY2VsZWJyYXRpb24gaW50byBhIHBlcnNvbmFsIGFjdCBvZiBjaXRpemVuc2hpcC5cIiB9LFxuXTtcblxuY29uc3QgTmF0aW9uYWxGZXN0aXZhbHMgPSAoKSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPFBhZ2VIZXJvIHRpdGxlPVwiTmF0aW9uYWwgRmVzdGl2YWxzXCIgYnJlYWRjcnVtYnM9e1t7IGxhYmVsOiBcIkxpZmUgQCBTSlJQUy1IQlJcIiB9LCB7IGxhYmVsOiBcIk5hdGlvbmFsIEZlc3RpdmFsc1wiIH1dfSAvPlxuXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTYgYmctYmFja2dyb3VuZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IG1heC13LTR4bCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbGc6dGV4dC00eGwgZm9udC1ib2xkIHRleHQtZm9yZWdyb3VuZCBtYi00XCI+Q2VsZWJyYXRpbmcgdGhlIFNwaXJpdCBvZiBJbmRpYTwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBoLTEgdy0yMCBiZy1pbmRpYW4tZ3JlZW4gcm91bmRlZC1mdWxsIG1iLTZcIiAvPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC1mb3JlZ3JvdW5kLzgwIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgIEF0IFNKUlBTLUhCUiwgbmF0aW9uYWwgZmVzdGl2YWxzIGFyZSBvYnNlcnZlZCB3aXRoIHJldmVyZW5jZSwgam95LCBhbmQgbWVhbmluZ2Z1bCBzdHVkZW50IGludm9sdmVtZW50LiBFYWNoXG4gICAgICAgICAgY2VsZWJyYXRpb24gYmVjb21lcyBhIGNsYXNzcm9vbSBvZiBwYXRyaW90aXNtLCBoaXN0b3J5LCBhbmQgY2l2aWMgcHJpZGUg4oCUIGNvbm5lY3Rpbmcgb3VyIHN0dWRlbnRzIHRvIHRoZVxuICAgICAgICAgIHZhbHVlcyBhbmQgdmlzaW9uYXJpZXMgdGhhdCBzaGFwZWQgbW9kZXJuIEluZGlhLlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNiBiZy1tdXRlZC8zMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItMTJcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbGc6dGV4dC00eGwgZm9udC1ib2xkIHRleHQtZm9yZWdyb3VuZFwiPk5hdGlvbmFsIEZlc3RpdmFscyBXZSBDZWxlYnJhdGU8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtdC0zIGgtMSB3LTIwIGJnLWluZGlhbi1ncmVlbiByb3VuZGVkLWZ1bGxcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC02XCI+XG4gICAgICAgICAge2Zlc3RpdmFscy5tYXAoKGYsIGkpID0+IChcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IGtleT17Zi5uYW1lfSBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19IHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHk6IDAgfX0gdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fSB0cmFuc2l0aW9uPXt7IGRlbGF5OiBpICogMC4wNSB9fT5cbiAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiaC1mdWxsIGhvdmVyOnNoYWRvdy14bCB0cmFuc2l0aW9uLXNoYWRvdyBib3JkZXItdC00IGJvcmRlci1pbmRpYW4tZ3JlZW5cIj5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC02XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTQgaC0xNCByb3VuZGVkLXhsIGJnLWluZGlhbi1ncmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxmLmljb24gY2xhc3NOYW1lPVwiaC03IHctN1wiIGNvbG9yPVwiI2ZmZmZmZlwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LWZvcmVncm91bmRcIj57Zi5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtaW5kaWFuLWdyZWVuIGZvbnQtc2VtaWJvbGQgbWItM1wiPntmLmRhdGV9PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWZvcmVncm91bmQvNzUgbGVhZGluZy1yZWxheGVkIG1iLTNcIj57Zi5kZXNjfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMyBib3JkZXItdCBib3JkZXItYm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1pbmRpYW4tZ3JlZW4gZm9udC1zZW1pYm9sZCBtYi0xXCI+RWR1Y2F0aW9uYWwgU2lnbmlmaWNhbmNlPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZm9yZWdyb3VuZC83NVwiPntmLnNpZ25pZmljYW5jZX08L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTYgYmctYmFja2dyb3VuZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMiBnYXAtNlwiPlxuICAgICAgICAgIHtzZWN0aW9ucy5tYXAoKHMpID0+IChcbiAgICAgICAgICAgIDxDYXJkIGtleT17cy50aXRsZX0gY2xhc3NOYW1lPVwiaG92ZXI6c2hhZG93LWxnIHRyYW5zaXRpb24tc2hhZG93XCI+XG4gICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLTYgZmxleCBnYXAtNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMiBoLTEyIHJvdW5kZWQtbGcgYmctaW5kaWFuLWdyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNocmluay0wXCI+XG4gICAgICAgICAgICAgICAgICA8cy5pY29uIGNsYXNzTmFtZT1cImgtNiB3LTZcIiBjb2xvcj1cIiNmZmZmZmZcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdGV4dC1mb3JlZ3JvdW5kIG1iLTJcIj57cy50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWZvcmVncm91bmQvNzUgbGVhZGluZy1yZWxheGVkXCI+e3MuZGVzY308L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICA8L0xheW91dD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdGlvbmFsRmVzdGl2YWxzO1xuIl0sImZpbGUiOiIvaG9tZS9zanJzaDkxNi9wdWJsaWNfaHRtbC9zcmMvcGFnZXMvbGlmZS9OYXRpb25hbEZlc3RpdmFscy50c3gifQ==