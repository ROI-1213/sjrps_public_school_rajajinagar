import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/about/Overview.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/pages/about/Overview.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import Layout from "/src/components/Layout.tsx";
import PageHero from "/src/components/PageHero.tsx";
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=5efa796b";
import { GraduationCap, Users, Trophy, BookOpen, Sparkles, Building2, Heart, ShieldCheck, Target, UserCheck, Medal, Rocket, Handshake, Lightbulb, Brain, Globe2, Crown, Award, Quote } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
import overviewImage from "/src/assets/Overview.jpg?import";
import bhoomiPoojaImage from "/src/assets/about-history/Bhoomi-Pooja.jpg?import";
import openingCeremonyImage from "/src/assets/about-history/Opening-ceremony.jpg?import";
import thenCampusImage from "/src/assets/about-history/then.jpg?import";
const milestones = [
    {
        year: "2004",
        title: "Founded",
        desc: "SJR Public School, HBR Layout established."
    },
    {
        year: "2017",
        title: "Smart Classes",
        desc: "Introduced smart classrooms across the campus."
    },
    {
        year: "2022",
        title: "AI-Enabled LMS",
        desc: "Adopted Embibe AI-enabled Learning Management System."
    },
    {
        year: "2023",
        title: "New Programs",
        desc: "Introduced Robotics, Abacus, Vedic Maths & Taekwondo."
    },
    {
        year: "2024",
        title: "Senior Secondary",
        desc: "Upgraded to Senior Secondary (Grades XI & XII)."
    },
    {
        year: "2024",
        title: "AI Flat Panel Boards",
        desc: "Introduced AI-enabled flat panel boards for smart classrooms."
    }
];
const whyChoose = [
    {
        icon: BookOpen,
        title: "Smart Classrooms",
        desc: "Interactive digital learning environments with modern technology and multimedia resources."
    },
    {
        icon: Users,
        title: "Dedicated Faculty",
        desc: "Experienced educators committed to student success, personal growth, and academic excellence."
    },
    {
        icon: Heart,
        title: "Value Education",
        desc: "Character building through comprehensive moral and ethical education programs."
    },
    {
        icon: ShieldCheck,
        title: "Safe Campus",
        desc: "24/7 security, CCTV monitoring, and trained staff ensuring complete student safety."
    },
    {
        icon: Target,
        title: "Holistic Development",
        desc: "Balanced focus on academics, sports, arts, and personality development."
    },
    {
        icon: Trophy,
        title: "Proven Track Record",
        desc: "Consistent academic excellence with 95% success rate and numerous awards."
    },
    {
        icon: GraduationCap,
        title: "Academic Excellence",
        desc: "Rigorous CBSE curriculum delivered with clarity, depth, and personalized attention."
    },
    {
        icon: UserCheck,
        title: "Student-Centric Learning",
        desc: "Personalized pathways that recognize each learner's strengths, pace, and aspirations."
    },
    {
        icon: Medal,
        title: "Sports & Co-Curricular",
        desc: "A vibrant calendar of sports, clubs, arts, and competitions that build all-round confidence."
    },
    {
        icon: Rocket,
        title: "Future-Ready Learning",
        desc: "Robotics, coding, AI, and 21st-century skills woven into everyday classrooms."
    },
    {
        icon: Handshake,
        title: "Parent Engagement",
        desc: "Open communication, regular updates, and a true partnership between home and school."
    }
];
const philosophy = [
    {
        icon: UserCheck,
        title: "Child-Centric Learning",
        desc: "Every classroom is designed around the curiosity, pace, and potential of each learner."
    },
    {
        icon: GraduationCap,
        title: "Academic Excellence",
        desc: "Rigorous standards, strong fundamentals, and a deep love for lifelong learning."
    },
    {
        icon: Heart,
        title: "Character Development",
        desc: "Values, empathy, and integrity built into everyday school life."
    },
    {
        icon: Lightbulb,
        title: "Innovation & Creativity",
        desc: "Project-based learning, design thinking, and freedom to explore new ideas."
    },
    {
        icon: Crown,
        title: "Leadership Skills",
        desc: "Opportunities to lead, collaborate, and take responsibility from an early age."
    },
    {
        icon: Brain,
        title: "Critical Thinking",
        desc: "Questioning, reasoning, and problem-solving across every subject."
    },
    {
        icon: Globe2,
        title: "Social Responsibility",
        desc: "A strong sense of community, citizenship, and care for the world around us."
    },
    {
        icon: Sparkles,
        title: "Lifelong Learning",
        desc: "Curiosity nurtured today becomes the wisdom of tomorrow."
    }
];
const historyImages = [
    {
        src: bhoomiPoojaImage,
        alt: "Bhoomi Puja ceremony at SJRPS-HBR campus"
    },
    {
        src: openingCeremonyImage,
        alt: "Opening ceremony of SJR Public School building"
    },
    {
        src: thenCampusImage,
        alt: "SJRPS-HBR campus during its early years"
    }
];
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 24
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6
        }
    }
};
const Overview = ()=>{
    return /*#__PURE__*/ _jsxDEV(Layout, {
        "data-lov-id": "src/pages/about/Overview.tsx:78:4",
        "data-lov-name": "Layout",
        "data-component-path": "src/pages/about/Overview.tsx",
        "data-component-line": "78",
        "data-component-file": "Overview.tsx",
        "data-component-name": "Layout",
        "data-component-content": "%7B%7D",
        children: [
            /*#__PURE__*/ _jsxDEV(PageHero, {
                "data-lov-id": "src/pages/about/Overview.tsx:79:6",
                "data-lov-name": "PageHero",
                "data-component-path": "src/pages/about/Overview.tsx",
                "data-component-line": "79",
                "data-component-file": "Overview.tsx",
                "data-component-name": "PageHero",
                "data-component-content": "%7B%7D",
                title: "Overview",
                breadcrumbs: [
                    {
                        label: "About",
                        path: "/about/overview"
                    },
                    {
                        label: "Overview"
                    }
                ]
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/about/Overview.tsx:85:6",
                "data-lov-name": "section",
                "data-component-path": "src/pages/about/Overview.tsx",
                "data-component-line": "85",
                "data-component-file": "Overview.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20lg%3Apy-20%22%7D",
                className: "py-16 lg:py-20",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/about/Overview.tsx:86:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/about/Overview.tsx",
                    "data-component-line": "86",
                    "data-component-file": "Overview.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/about/Overview.tsx:87:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/about/Overview.tsx",
                        "data-component-line": "87",
                        "data-component-file": "Overview.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22grid%20lg%3Agrid-cols-12%20gap-10%20lg%3Agap-14%20items-center%22%7D",
                        className: "grid lg:grid-cols-12 gap-10 lg:gap-14 items-center",
                        children: [
                            /*#__PURE__*/ _jsxDEV(motion.div, {
                                "data-lov-id": "src/pages/about/Overview.tsx:88:12",
                                "data-lov-name": "motion.div",
                                "data-component-path": "src/pages/about/Overview.tsx",
                                "data-component-line": "88",
                                "data-component-file": "Overview.tsx",
                                "data-component-name": "motion.div",
                                "data-component-content": "%7B%22className%22%3A%22lg%3Acol-span-5%22%7D",
                                initial: "hidden",
                                whileInView: "visible",
                                viewport: {
                                    once: true,
                                    amount: 0.2
                                },
                                variants: fadeUp,
                                className: "lg:col-span-5",
                                children: /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/about/Overview.tsx:95:14",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/about/Overview.tsx",
                                    "data-component-line": "95",
                                    "data-component-file": "Overview.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22relative%20rounded-2xl%20overflow-hidden%20shadow-2xl%20ring-1%20ring-black%2F5%22%7D",
                                    className: "relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("img", {
                                            "data-lov-id": "src/pages/about/Overview.tsx:96:16",
                                            "data-lov-name": "img",
                                            "data-component-path": "src/pages/about/Overview.tsx",
                                            "data-component-line": "96",
                                            "data-component-file": "Overview.tsx",
                                            "data-component-name": "img",
                                            "data-component-content": "%7B%22className%22%3A%22w-full%20aspect-%5B4%2F5%5D%20object-cover%22%7D",
                                            src: overviewImage,
                                            alt: "SJRPS-HBR campus",
                                            className: "w-full aspect-[4/5] object-cover"
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                            lineNumber: 96,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/pages/about/Overview.tsx:101:16",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/pages/about/Overview.tsx",
                                            "data-component-line": "101",
                                            "data-component-file": "Overview.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22absolute%20-bottom-1%20-right-1%20bg-saffron-orange%20text-white%20px-5%20py-3%20rounded-tl-2xl%20shadow-xl%22%7D",
                                            className: "absolute -bottom-1 -right-1 bg-saffron-orange text-white px-5 py-3 rounded-tl-2xl shadow-xl",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/about/Overview.tsx:102:18",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/about/Overview.tsx",
                                                    "data-component-line": "102",
                                                    "data-component-file": "Overview.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22text%22%3A%2222%2B%22%2C%22className%22%3A%22text-3xl%20font-extrabold%20leading-none%22%7D",
                                                    className: "text-3xl font-extrabold leading-none",
                                                    children: "22+"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/about/Overview.tsx:103:18",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/about/Overview.tsx",
                                                    "data-component-line": "103",
                                                    "data-component-file": "Overview.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22text%22%3A%22Years%20of%20Legacy%22%2C%22className%22%3A%22text-xs%20uppercase%20tracking-wider%22%7D",
                                                    className: "text-xs uppercase tracking-wider",
                                                    children: "Years of Legacy"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                    lineNumber: 95,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV(motion.div, {
                                "data-lov-id": "src/pages/about/Overview.tsx:108:12",
                                "data-lov-name": "motion.div",
                                "data-component-path": "src/pages/about/Overview.tsx",
                                "data-component-line": "108",
                                "data-component-file": "Overview.tsx",
                                "data-component-name": "motion.div",
                                "data-component-content": "%7B%22className%22%3A%22lg%3Acol-span-7%22%7D",
                                initial: "hidden",
                                whileInView: "visible",
                                viewport: {
                                    once: true,
                                    amount: 0.2
                                },
                                variants: fadeUp,
                                className: "lg:col-span-7",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        "data-lov-id": "src/pages/about/Overview.tsx:115:14",
                                        "data-lov-name": "p",
                                        "data-component-path": "src/pages/about/Overview.tsx",
                                        "data-component-line": "115",
                                        "data-component-file": "Overview.tsx",
                                        "data-component-name": "p",
                                        "data-component-content": "%7B%22text%22%3A%22About%20Our%20School%22%2C%22className%22%3A%22text-xs%20font-semibold%20uppercase%20tracking-%5B0.25em%5D%20text-indian-green%20mb-3%22%7D",
                                        className: "text-xs font-semibold uppercase tracking-[0.25em] text-indian-green mb-3",
                                        children: "About Our School"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("h2", {
                                        "data-lov-id": "src/pages/about/Overview.tsx:118:14",
                                        "data-lov-name": "h2",
                                        "data-component-path": "src/pages/about/Overview.tsx",
                                        "data-component-line": "118",
                                        "data-component-file": "Overview.tsx",
                                        "data-component-name": "h2",
                                        "data-component-content": "%7B%22text%22%3A%22Where%20Tradition%20Meets%20Tomorrow%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20lg%3Atext-5xl%20font-bold%20text-logo-navy%20leading-tight%20mb-6%22%7D",
                                        className: "text-3xl md:text-4xl lg:text-5xl font-bold text-logo-navy leading-tight mb-6",
                                        style: {
                                            fontFamily: "Poppins, sans-serif"
                                        },
                                        children: "Where Tradition Meets Tomorrow"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        "data-lov-id": "src/pages/about/Overview.tsx:124:14",
                                        "data-lov-name": "p",
                                        "data-component-path": "src/pages/about/Overview.tsx",
                                        "data-component-line": "124",
                                        "data-component-file": "Overview.tsx",
                                        "data-component-name": "p",
                                        "data-component-content": "%7B%22text%22%3A%22SJR%20Public%20School%2C%20HBR%20Layout%20(SJRPS-HBR)%20is%20more%20than%20a%20school%20%E2%80%94%20it%20is%20a%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20community%20of%20educators%2C%20parents%2C%20and%20students%20united%20by%20a%20shared%20belief%20that%20great%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20education%20shapes%20great%20human%20beings.%22%2C%22className%22%3A%22text-lg%20text-foreground%2F80%20leading-relaxed%20mb-5%22%7D",
                                        className: "text-lg text-foreground/80 leading-relaxed mb-5",
                                        children: "SJR Public School, HBR Layout (SJRPS-HBR) is more than a school — it is a community of educators, parents, and students united by a shared belief that great education shapes great human beings."
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        "data-lov-id": "src/pages/about/Overview.tsx:129:14",
                                        "data-lov-name": "p",
                                        "data-component-path": "src/pages/about/Overview.tsx",
                                        "data-component-line": "129",
                                        "data-component-file": "Overview.tsx",
                                        "data-component-name": "p",
                                        "data-component-content": "%7B%22text%22%3A%22Founded%20on%20the%20timeless%20ideals%20of%20the%20SJR%20Education%20Society%2C%20our%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20school%20blends%20a%20rich%20heritage%20of%20value-based%20learning%20with%20a%20modern%2C%20future-ready%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20curriculum.%20From%20the%20early%20years%20through%20senior%20school%2C%20every%20learner%20is%20nurtured%20with%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20care%2C%20challenged%20with%20rigor%2C%20and%20inspired%20to%20discover%20their%20unique%20purpose.%22%2C%22className%22%3A%22text-base%20text-muted-foreground%20leading-relaxed%20mb-5%22%7D",
                                        className: "text-base text-muted-foreground leading-relaxed mb-5",
                                        children: "Founded on the timeless ideals of the SJR Education Society, our school blends a rich heritage of value-based learning with a modern, future-ready curriculum. From the early years through senior school, every learner is nurtured with care, challenged with rigor, and inspired to discover their unique purpose."
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        "data-lov-id": "src/pages/about/Overview.tsx:135:14",
                                        "data-lov-name": "p",
                                        "data-component-path": "src/pages/about/Overview.tsx",
                                        "data-component-line": "135",
                                        "data-component-file": "Overview.tsx",
                                        "data-component-name": "p",
                                        "data-component-content": "%7B%22text%22%3A%22We%20are%20proud%20of%20our%20consistent%20academic%20results%2C%20our%20dedicated%20faculty%2C%20our%20vibrant%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20co-curricular%20programs%2C%20and%20a%20safe%2C%20modern%20campus%20that%20supports%20holistic%20growth%20%E2%80%94%20academic%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20physical%2C%20emotional%2C%20and%20ethical.%22%2C%22className%22%3A%22text-base%20text-muted-foreground%20leading-relaxed%20mb-8%22%7D",
                                        className: "text-base text-muted-foreground leading-relaxed mb-8",
                                        children: "We are proud of our consistent academic results, our dedicated faculty, our vibrant co-curricular programs, and a safe, modern campus that supports holistic growth — academic, physical, emotional, and ethical."
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        "data-lov-id": "src/pages/about/Overview.tsx:141:14",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/pages/about/Overview.tsx",
                                        "data-component-line": "141",
                                        "data-component-file": "Overview.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22className%22%3A%22grid%20grid-cols-3%20gap-3%20mb-8%22%7D",
                                        className: "grid grid-cols-3 gap-3 mb-8",
                                        children: [
                                            {
                                                value: "1200+",
                                                label: "Students"
                                            },
                                            {
                                                value: "80+",
                                                label: "Faculty"
                                            },
                                            {
                                                value: "100%",
                                                label: "Results"
                                            }
                                        ].map((s)=>/*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/about/Overview.tsx:147:18",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/about/Overview.tsx",
                                                "data-component-line": "147",
                                                "data-component-file": "Overview.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22rounded-xl%20bg-indian-green%2F5%20border%20border-indian-green%2F10%20px-4%20py-3%20text-center%22%7D",
                                                className: "rounded-xl bg-indian-green/5 border border-indian-green/10 px-4 py-3 text-center",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/pages/about/Overview.tsx:151:20",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/about/Overview.tsx",
                                                        "data-component-line": "151",
                                                        "data-component-file": "Overview.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%22className%22%3A%22text-2xl%20font-bold%20text-indian-green%22%7D",
                                                        className: "text-2xl font-bold text-indian-green",
                                                        children: s.value
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/pages/about/Overview.tsx:152:20",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/about/Overview.tsx",
                                                        "data-component-line": "152",
                                                        "data-component-file": "Overview.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%22className%22%3A%22text-xs%20text-muted-foreground%20uppercase%20tracking-wider%20mt-0.5%22%7D",
                                                        className: "text-xs text-muted-foreground uppercase tracking-wider mt-0.5",
                                                        children: s.label
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, s.label, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                                lineNumber: 147,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        "data-lov-id": "src/pages/about/Overview.tsx:159:14",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/pages/about/Overview.tsx",
                                        "data-component-line": "159",
                                        "data-component-file": "Overview.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22className%22%3A%22bg-gradient-to-r%20from-saffron-orange%2F10%20to-transparent%20border-l-4%20border-saffron-orange%20rounded-r-xl%20p-5%22%7D",
                                        className: "bg-gradient-to-r from-saffron-orange/10 to-transparent border-l-4 border-saffron-orange rounded-r-xl p-5",
                                        children: /*#__PURE__*/ _jsxDEV("p", {
                                            "data-lov-id": "src/pages/about/Overview.tsx:160:16",
                                            "data-lov-name": "p",
                                            "data-component-path": "src/pages/about/Overview.tsx",
                                            "data-component-line": "160",
                                            "data-component-file": "Overview.tsx",
                                            "data-component-name": "p",
                                            "data-component-content": "%7B%22text%22%3A%22%5C%22Empowering%20Young%20Minds%2C%20Inspiring%20Future%20Leaders%2C%20and%20Building%20a%20Legacy%20of%20Excellence%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Through%20Quality%20Education.%5C%22%22%2C%22className%22%3A%22text-logo-navy%20font-semibold%20italic%20leading-relaxed%22%7D",
                                            className: "text-logo-navy font-semibold italic leading-relaxed",
                                            children: '"Empowering Young Minds, Inspiring Future Leaders, and Building a Legacy of Excellence Through Quality Education."'
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                            lineNumber: 160,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/about/Overview.tsx:171:6",
                "data-lov-name": "section",
                "data-component-path": "src/pages/about/Overview.tsx",
                "data-component-line": "171",
                "data-component-file": "Overview.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20lg%3Apy-20%20bg-white%20border-t%20border-slate-100%22%7D",
                className: "py-16 lg:py-20 bg-white border-t border-slate-100",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/about/Overview.tsx:172:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/about/Overview.tsx",
                    "data-component-line": "172",
                    "data-component-file": "Overview.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ _jsxDEV(motion.div, {
                        "data-lov-id": "src/pages/about/Overview.tsx:173:10",
                        "data-lov-name": "motion.div",
                        "data-component-path": "src/pages/about/Overview.tsx",
                        "data-component-line": "173",
                        "data-component-file": "Overview.tsx",
                        "data-component-name": "motion.div",
                        "data-component-content": "%7B%22className%22%3A%22max-w-6xl%20mx-auto%22%7D",
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: {
                            once: true,
                            amount: 0.2
                        },
                        variants: fadeUp,
                        className: "max-w-6xl mx-auto",
                        children: [
                            /*#__PURE__*/ _jsxDEV("p", {
                                "data-lov-id": "src/pages/about/Overview.tsx:180:12",
                                "data-lov-name": "p",
                                "data-component-path": "src/pages/about/Overview.tsx",
                                "data-component-line": "180",
                                "data-component-file": "Overview.tsx",
                                "data-component-name": "p",
                                "data-component-content": "%7B%22text%22%3A%22School%20History%22%2C%22className%22%3A%22text-xs%20font-semibold%20uppercase%20tracking-%5B0.25em%5D%20text-indian-green%20mb-3%22%7D",
                                className: "text-xs font-semibold uppercase tracking-[0.25em] text-indian-green mb-3",
                                children: "School History"
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("h2", {
                                "data-lov-id": "src/pages/about/Overview.tsx:183:12",
                                "data-lov-name": "h2",
                                "data-component-path": "src/pages/about/Overview.tsx",
                                "data-component-line": "183",
                                "data-component-file": "Overview.tsx",
                                "data-component-name": "h2",
                                "data-component-content": "%7B%22text%22%3A%22The%20Beginning%20of%20Our%20HBR%20Campus%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20lg%3Atext-5xl%20font-bold%20text-logo-navy%20leading-tight%20mb-6%22%7D",
                                className: "text-3xl md:text-4xl lg:text-5xl font-bold text-logo-navy leading-tight mb-6",
                                style: {
                                    fontFamily: "Poppins, sans-serif"
                                },
                                children: "The Beginning of Our HBR Campus"
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/pages/about/Overview.tsx:189:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/pages/about/Overview.tsx",
                                "data-component-line": "189",
                                "data-component-file": "Overview.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22space-y-5%20text-base%20md%3Atext-lg%20text-muted-foreground%20leading-relaxed%22%7D",
                                className: "space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        "data-lov-id": "src/pages/about/Overview.tsx:190:14",
                                        "data-lov-name": "p",
                                        "data-component-path": "src/pages/about/Overview.tsx",
                                        "data-component-line": "190",
                                        "data-component-file": "Overview.tsx",
                                        "data-component-name": "p",
                                        "data-component-content": "%7B%22text%22%3A%22The%20construction%20of%20the%20present%20campus%20began%20with%20a%20Bhoomi%20Puja%20ceremony%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20performed%20in%20the%20divine%20presence%20and%20blessings%20of%20Jagadguru%20Mahaswamiji%2C%20along%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20with%20trustees%20and%20members%20of%20the%20education%20society.%20The%20sacred%20ritual%20marked%20the%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20spiritual%20foundation%20of%20the%20institution%20and%20the%20beginning%20of%20a%20new%20educational%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20endeavour.%22%7D",
                                        children: "The construction of the present campus began with a Bhoomi Puja ceremony, performed in the divine presence and blessings of Jagadguru Mahaswamiji, along with trustees and members of the education society. The sacred ritual marked the spiritual foundation of the institution and the beginning of a new educational endeavour."
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                        lineNumber: 190,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        "data-lov-id": "src/pages/about/Overview.tsx:197:14",
                                        "data-lov-name": "p",
                                        "data-component-path": "src/pages/about/Overview.tsx",
                                        "data-component-line": "197",
                                        "data-component-file": "Overview.tsx",
                                        "data-component-name": "p",
                                        "data-component-content": "%7B%22text%22%3A%22HBR%20Campus%20was%20formally%20inaugurated%20on%206%20November%202004%2C%20marking%20the%20start%20of%20its%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20academic%20journey.%20Since%20its%20inception%2C%20the%20institution%20has%20been%20committed%20to%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20providing%20quality%20education%20through%20the%20CBSE%20curriculum%2C%20with%20a%20strong%20focus%20on%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20experiential%20and%20activity-based%20learning.%22%7D",
                                        children: "HBR Campus was formally inaugurated on 6 November 2004, marking the start of its academic journey. Since its inception, the institution has been committed to providing quality education through the CBSE curriculum, with a strong focus on experiential and activity-based learning."
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        "data-lov-id": "src/pages/about/Overview.tsx:203:14",
                                        "data-lov-name": "p",
                                        "data-component-path": "src/pages/about/Overview.tsx",
                                        "data-component-line": "203",
                                        "data-component-file": "Overview.tsx",
                                        "data-component-name": "p",
                                        "data-component-content": "%7B%22text%22%3A%22With%20dedicated%20teachers%20and%20a%20supportive%20learning%20environment%2C%20the%20school%20has%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20consistently%20achieved%20100%25%20results%20in%20board%20examinations%2C%20reflecting%20its%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20commitment%20to%20academic%20excellence%20and%20holistic%20student%20development.%22%7D",
                                        children: "With dedicated teachers and a supportive learning environment, the school has consistently achieved 100% results in board examinations, reflecting its commitment to academic excellence and holistic student development."
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                        lineNumber: 203,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                lineNumber: 189,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/pages/about/Overview.tsx:210:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/pages/about/Overview.tsx",
                                "data-component-line": "210",
                                "data-component-file": "Overview.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-3%20gap-5%20lg%3Agap-6%20mt-10%22%7D",
                                className: "grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mt-10",
                                children: historyImages.map((image)=>/*#__PURE__*/ _jsxDEV("div", {
                                        "data-lov-id": "src/pages/about/Overview.tsx:212:16",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/pages/about/Overview.tsx",
                                        "data-component-line": "212",
                                        "data-component-file": "Overview.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22className%22%3A%22group%20overflow-hidden%20rounded-2xl%20bg-slate-100%20shadow-sm%20ring-1%20ring-slate-200%20transition-all%20duration-300%20hover%3A-translate-y-1%20hover%3Ashadow-xl%22%7D",
                                        className: "group overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                                        children: /*#__PURE__*/ _jsxDEV("img", {
                                            "data-lov-id": "src/pages/about/Overview.tsx:216:18",
                                            "data-lov-name": "img",
                                            "data-component-path": "src/pages/about/Overview.tsx",
                                            "data-component-line": "216",
                                            "data-component-file": "Overview.tsx",
                                            "data-component-name": "img",
                                            "data-component-content": "%7B%22className%22%3A%22h-64%20w-full%20object-cover%20transition-transform%20duration-500%20group-hover%3Ascale-105%22%7D",
                                            src: image.src,
                                            alt: image.alt,
                                            className: "h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105",
                                            loading: "lazy"
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                            lineNumber: 216,
                                            columnNumber: 19
                                        }, this)
                                    }, image.alt, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                        lineNumber: 212,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                lineNumber: 210,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                    lineNumber: 172,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/about/Overview.tsx:230:6",
                "data-lov-name": "section",
                "data-component-path": "src/pages/about/Overview.tsx",
                "data-component-line": "230",
                "data-component-file": "Overview.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20bg-muted%2F40%20border-y%22%7D",
                className: "py-16 bg-muted/40 border-y",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/about/Overview.tsx:231:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/about/Overview.tsx",
                    "data-component-line": "231",
                    "data-component-file": "Overview.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20max-w-4xl%22%7D",
                    className: "container mx-auto px-4 max-w-4xl",
                    children: [
                        /*#__PURE__*/ _jsxDEV("h2", {
                            "data-lov-id": "src/pages/about/Overview.tsx:232:10",
                            "data-lov-name": "h2",
                            "data-component-path": "src/pages/about/Overview.tsx",
                            "data-component-line": "232",
                            "data-component-file": "Overview.tsx",
                            "data-component-name": "h2",
                            "data-component-content": "%7B%22text%22%3A%22Our%20Journey%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20text-indian-green%20text-center%20mb-12%22%7D",
                            className: "text-3xl md:text-4xl font-bold text-indian-green text-center mb-12",
                            style: {
                                fontFamily: "Poppins, sans-serif"
                            },
                            children: "Our Journey"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/about/Overview.tsx:238:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/about/Overview.tsx",
                            "data-component-line": "238",
                            "data-component-file": "Overview.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22relative%22%7D",
                            className: "relative",
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/about/Overview.tsx:239:12",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/about/Overview.tsx",
                                    "data-component-line": "239",
                                    "data-component-file": "Overview.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22absolute%20left-4%20md%3Aleft-1%2F2%20top-0%20bottom-0%20w-0.5%20bg-indian-green%2F20%20md%3A-translate-x-1%2F2%22%7D",
                                    className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-indian-green/20 md:-translate-x-1/2"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                    lineNumber: 239,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/about/Overview.tsx:240:12",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/about/Overview.tsx",
                                    "data-component-line": "240",
                                    "data-component-file": "Overview.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22space-y-10%22%7D",
                                    className: "space-y-10",
                                    children: milestones.map((m, i)=>/*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/pages/about/Overview.tsx:242:16",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/pages/about/Overview.tsx",
                                            "data-component-line": "242",
                                            "data-component-file": "Overview.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%7D",
                                            className: `relative md:grid md:grid-cols-2 md:gap-8 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`,
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/about/Overview.tsx:248:18",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/about/Overview.tsx",
                                                    "data-component-line": "248",
                                                    "data-component-file": "Overview.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%7D",
                                                    className: `pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-10" : "md:pl-10"}`,
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            "data-lov-id": "src/pages/about/Overview.tsx:253:20",
                                                            "data-lov-name": "div",
                                                            "data-component-path": "src/pages/about/Overview.tsx",
                                                            "data-component-line": "253",
                                                            "data-component-file": "Overview.tsx",
                                                            "data-component-name": "div",
                                                            "data-component-content": "%7B%22className%22%3A%22text-saffron-orange%20font-bold%20text-sm%22%7D",
                                                            className: "text-saffron-orange font-bold text-sm",
                                                            children: m.year
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                                            lineNumber: 253,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("h3", {
                                                            "data-lov-id": "src/pages/about/Overview.tsx:254:20",
                                                            "data-lov-name": "h3",
                                                            "data-component-path": "src/pages/about/Overview.tsx",
                                                            "data-component-line": "254",
                                                            "data-component-file": "Overview.tsx",
                                                            "data-component-name": "h3",
                                                            "data-component-content": "%7B%22className%22%3A%22text-xl%20font-bold%20text-logo-navy%20mt-1%22%7D",
                                                            className: "text-xl font-bold text-logo-navy mt-1",
                                                            children: m.title
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                                            lineNumber: 254,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("p", {
                                                            "data-lov-id": "src/pages/about/Overview.tsx:255:20",
                                                            "data-lov-name": "p",
                                                            "data-component-path": "src/pages/about/Overview.tsx",
                                                            "data-component-line": "255",
                                                            "data-component-file": "Overview.tsx",
                                                            "data-component-name": "p",
                                                            "data-component-content": "%7B%22className%22%3A%22text-muted-foreground%20mt-1%22%7D",
                                                            className: "text-muted-foreground mt-1",
                                                            children: m.desc
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                                            lineNumber: 255,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/about/Overview.tsx:257:18",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/about/Overview.tsx",
                                                    "data-component-line": "257",
                                                    "data-component-file": "Overview.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22hidden%20md%3Ablock%22%7D",
                                                    className: "hidden md:block"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("span", {
                                                    "data-lov-id": "src/pages/about/Overview.tsx:258:18",
                                                    "data-lov-name": "span",
                                                    "data-component-path": "src/pages/about/Overview.tsx",
                                                    "data-component-line": "258",
                                                    "data-component-file": "Overview.tsx",
                                                    "data-component-name": "span",
                                                    "data-component-content": "%7B%22className%22%3A%22absolute%20left-4%20md%3Aleft-1%2F2%20top-1.5%20w-3%20h-3%20rounded-full%20bg-indian-green%20ring-4%20ring-indian-green%2F20%20md%3A-translate-x-1%2F2%22%7D",
                                                    className: "absolute left-4 md:left-1/2 top-1.5 w-3 h-3 rounded-full bg-indian-green ring-4 ring-indian-green/20 md:-translate-x-1/2"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, m.year, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                            lineNumber: 242,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                    lineNumber: 240,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                    lineNumber: 231,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/about/Overview.tsx:267:6",
                "data-lov-name": "section",
                "data-component-path": "src/pages/about/Overview.tsx",
                "data-component-line": "267",
                "data-component-file": "Overview.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20lg%3Apy-20%20bg-%5Bhsl(38_70%25_96%25)%5D%22%7D",
                className: "py-16 lg:py-20 bg-[hsl(38_70%_96%)]",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/about/Overview.tsx:268:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/about/Overview.tsx",
                    "data-component-line": "268",
                    "data-component-file": "Overview.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/about/Overview.tsx:269:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/about/Overview.tsx",
                            "data-component-line": "269",
                            "data-component-file": "Overview.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22max-w-3xl%20mx-auto%20text-center%20mb-12%22%7D",
                            className: "max-w-3xl mx-auto text-center mb-12",
                            children: [
                                /*#__PURE__*/ _jsxDEV("p", {
                                    "data-lov-id": "src/pages/about/Overview.tsx:270:12",
                                    "data-lov-name": "p",
                                    "data-component-path": "src/pages/about/Overview.tsx",
                                    "data-component-line": "270",
                                    "data-component-file": "Overview.tsx",
                                    "data-component-name": "p",
                                    "data-component-content": "%7B%22text%22%3A%22Why%20Us%22%2C%22className%22%3A%22text-xs%20font-semibold%20uppercase%20tracking-%5B0.25em%5D%20text-indian-green%20mb-3%22%7D",
                                    className: "text-xs font-semibold uppercase tracking-[0.25em] text-indian-green mb-3",
                                    children: "Why Us"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                    lineNumber: 270,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("h2", {
                                    "data-lov-id": "src/pages/about/Overview.tsx:273:12",
                                    "data-lov-name": "h2",
                                    "data-component-path": "src/pages/about/Overview.tsx",
                                    "data-component-line": "273",
                                    "data-component-file": "Overview.tsx",
                                    "data-component-name": "h2",
                                    "data-component-content": "%7B%22text%22%3A%22Why%20Choose%20SJRPS-HBR%3F%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20lg%3Atext-5xl%20font-bold%20text-logo-navy%20mb-4%22%7D",
                                    className: "text-3xl md:text-4xl lg:text-5xl font-bold text-logo-navy mb-4",
                                    style: {
                                        fontFamily: "Poppins, sans-serif"
                                    },
                                    children: "Why Choose SJRPS-HBR?"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                    lineNumber: 273,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    "data-lov-id": "src/pages/about/Overview.tsx:279:12",
                                    "data-lov-name": "p",
                                    "data-component-path": "src/pages/about/Overview.tsx",
                                    "data-component-line": "279",
                                    "data-component-file": "Overview.tsx",
                                    "data-component-name": "p",
                                    "data-component-content": "%7B%22text%22%3A%22Discover%20what%20makes%20SJRPS-HBR%20the%20preferred%20choice%20for%20thousands%20of%20families%20seeking%20quality%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20education%20with%20strong%20moral%20foundations.%22%2C%22className%22%3A%22text-muted-foreground%20text-lg%20leading-relaxed%22%7D",
                                    className: "text-muted-foreground text-lg leading-relaxed",
                                    children: "Discover what makes SJRPS-HBR the preferred choice for thousands of families seeking quality education with strong moral foundations."
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                    lineNumber: 279,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                            lineNumber: 269,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/about/Overview.tsx:285:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/about/Overview.tsx",
                            "data-component-line": "285",
                            "data-component-file": "Overview.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22grid%20sm%3Agrid-cols-2%20lg%3Agrid-cols-3%20gap-6%22%7D",
                            className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: whyChoose.map((item, i)=>/*#__PURE__*/ _jsxDEV(motion.div, {
                                    "data-lov-id": "src/pages/about/Overview.tsx:287:14",
                                    "data-lov-name": "motion.div",
                                    "data-component-path": "src/pages/about/Overview.tsx",
                                    "data-component-line": "287",
                                    "data-component-file": "Overview.tsx",
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
                                        duration: 0.5,
                                        delay: i % 3 * 0.08
                                    },
                                    children: /*#__PURE__*/ _jsxDEV(Card, {
                                        "data-lov-id": "src/pages/about/Overview.tsx:294:16",
                                        "data-lov-name": "Card",
                                        "data-component-path": "src/pages/about/Overview.tsx",
                                        "data-component-line": "294",
                                        "data-component-file": "Overview.tsx",
                                        "data-component-name": "Card",
                                        "data-component-content": "%7B%22className%22%3A%22rounded-2xl%20border-none%20shadow-sm%20hover%3Ashadow-xl%20transition-all%20hover%3A-translate-y-1%20bg-%5Bhsl(40_80%25_97%25)%5D%20h-full%22%7D",
                                        className: "rounded-2xl border-none shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 bg-[hsl(40_80%_97%)] h-full",
                                        children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                            "data-lov-id": "src/pages/about/Overview.tsx:295:18",
                                            "data-lov-name": "CardContent",
                                            "data-component-path": "src/pages/about/Overview.tsx",
                                            "data-component-line": "295",
                                            "data-component-file": "Overview.tsx",
                                            "data-component-name": "CardContent",
                                            "data-component-content": "%7B%22className%22%3A%22p-7%20text-center%22%7D",
                                            className: "p-7 text-center",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/about/Overview.tsx:296:20",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/about/Overview.tsx",
                                                    "data-component-line": "296",
                                                    "data-component-file": "Overview.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22mx-auto%20w-16%20h-16%20rounded-full%20bg-indian-green%20flex%20items-center%20justify-center%20mb-5%20shadow-md%22%7D",
                                                    className: "mx-auto w-16 h-16 rounded-full bg-indian-green flex items-center justify-center mb-5 shadow-md",
                                                    children: /*#__PURE__*/ _jsxDEV(item.icon, {
                                                        "data-lov-id": "src/pages/about/Overview.tsx:297:22",
                                                        "data-lov-name": "item.icon",
                                                        "data-component-path": "src/pages/about/Overview.tsx",
                                                        "data-component-line": "297",
                                                        "data-component-file": "Overview.tsx",
                                                        "data-component-name": "item.icon",
                                                        "data-component-content": "%7B%22className%22%3A%22h-7%20w-7%20text-white%22%7D",
                                                        className: "h-7 w-7 text-white"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                                        lineNumber: 297,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("h3", {
                                                    "data-lov-id": "src/pages/about/Overview.tsx:299:20",
                                                    "data-lov-name": "h3",
                                                    "data-component-path": "src/pages/about/Overview.tsx",
                                                    "data-component-line": "299",
                                                    "data-component-file": "Overview.tsx",
                                                    "data-component-name": "h3",
                                                    "data-component-content": "%7B%22className%22%3A%22text-xl%20font-bold%20text-%5Bhsl(25_55%25_25%25)%5D%20mb-3%22%7D",
                                                    className: "text-xl font-bold text-[hsl(25_55%_25%)] mb-3",
                                                    children: item.title
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/about/Overview.tsx:300:20",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/about/Overview.tsx",
                                                    "data-component-line": "300",
                                                    "data-component-file": "Overview.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22className%22%3A%22text-%5Bhsl(25_30%25_35%25)%5D%20text-sm%20leading-relaxed%22%7D",
                                                    className: "text-[hsl(25_30%_35%)] text-sm leading-relaxed",
                                                    children: item.desc
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                            lineNumber: 295,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                        lineNumber: 294,
                                        columnNumber: 17
                                    }, this)
                                }, item.title, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                    lineNumber: 287,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                            lineNumber: 285,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                    lineNumber: 268,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                lineNumber: 267,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/about/Overview.tsx:310:6",
                "data-lov-name": "section",
                "data-component-path": "src/pages/about/Overview.tsx",
                "data-component-line": "310",
                "data-component-file": "Overview.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20lg%3Apy-20%20bg-indian-green%2F5%22%7D",
                className: "py-16 lg:py-20 bg-indian-green/5",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/about/Overview.tsx:311:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/about/Overview.tsx",
                    "data-component-line": "311",
                    "data-component-file": "Overview.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/about/Overview.tsx:312:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/about/Overview.tsx",
                            "data-component-line": "312",
                            "data-component-file": "Overview.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22max-w-3xl%20mx-auto%20text-center%20mb-12%22%7D",
                            className: "max-w-3xl mx-auto text-center mb-12",
                            children: [
                                /*#__PURE__*/ _jsxDEV("p", {
                                    "data-lov-id": "src/pages/about/Overview.tsx:313:12",
                                    "data-lov-name": "p",
                                    "data-component-path": "src/pages/about/Overview.tsx",
                                    "data-component-line": "313",
                                    "data-component-file": "Overview.tsx",
                                    "data-component-name": "p",
                                    "data-component-content": "%7B%22text%22%3A%22Our%20Approach%22%2C%22className%22%3A%22text-xs%20font-semibold%20uppercase%20tracking-%5B0.25em%5D%20text-indian-green%20mb-3%22%7D",
                                    className: "text-xs font-semibold uppercase tracking-[0.25em] text-indian-green mb-3",
                                    children: "Our Approach"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                    lineNumber: 313,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("h2", {
                                    "data-lov-id": "src/pages/about/Overview.tsx:316:12",
                                    "data-lov-name": "h2",
                                    "data-component-path": "src/pages/about/Overview.tsx",
                                    "data-component-line": "316",
                                    "data-component-file": "Overview.tsx",
                                    "data-component-name": "h2",
                                    "data-component-content": "%7B%22text%22%3A%22Our%20Educational%20Philosophy%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20lg%3Atext-5xl%20font-bold%20text-logo-navy%20mb-4%22%7D",
                                    className: "text-3xl md:text-4xl lg:text-5xl font-bold text-logo-navy mb-4",
                                    style: {
                                        fontFamily: "Poppins, sans-serif"
                                    },
                                    children: "Our Educational Philosophy"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                    lineNumber: 316,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    "data-lov-id": "src/pages/about/Overview.tsx:322:12",
                                    "data-lov-name": "p",
                                    "data-component-path": "src/pages/about/Overview.tsx",
                                    "data-component-line": "322",
                                    "data-component-file": "Overview.tsx",
                                    "data-component-name": "p",
                                    "data-component-content": "%7B%22text%22%3A%22Eight%20guiding%20principles%20that%20shape%20every%20classroom%2C%20every%20conversation%2C%20and%20every%20child's%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20journey%20at%20SJRPS-HBR.%22%2C%22className%22%3A%22text-muted-foreground%20text-lg%20leading-relaxed%22%7D",
                                    className: "text-muted-foreground text-lg leading-relaxed",
                                    children: "Eight guiding principles that shape every classroom, every conversation, and every child's journey at SJRPS-HBR."
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                    lineNumber: 322,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                            lineNumber: 312,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/about/Overview.tsx:328:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/about/Overview.tsx",
                            "data-component-line": "328",
                            "data-component-file": "Overview.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22grid%20grid-cols-1%20sm%3Agrid-cols-2%20lg%3Agrid-cols-4%20gap-6%20mb-14%22%7D",
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14",
                            children: philosophy.map((p, i)=>/*#__PURE__*/ _jsxDEV(motion.div, {
                                    "data-lov-id": "src/pages/about/Overview.tsx:330:14",
                                    "data-lov-name": "motion.div",
                                    "data-component-path": "src/pages/about/Overview.tsx",
                                    "data-component-line": "330",
                                    "data-component-file": "Overview.tsx",
                                    "data-component-name": "motion.div",
                                    "data-component-content": "%7B%22className%22%3A%22bg-white%20rounded-2xl%20p-6%20shadow-sm%20hover%3Ashadow-lg%20transition-all%20border%20border-indian-green%2F10%22%7D",
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
                                        duration: 0.5,
                                        delay: i % 4 * 0.06
                                    },
                                    className: "bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-indian-green/10",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/pages/about/Overview.tsx:338:16",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/pages/about/Overview.tsx",
                                            "data-component-line": "338",
                                            "data-component-file": "Overview.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22w-12%20h-12%20rounded-xl%20bg-indian-green%20flex%20items-center%20justify-center%20mb-4%20shadow%22%7D",
                                            className: "w-12 h-12 rounded-xl bg-indian-green flex items-center justify-center mb-4 shadow",
                                            children: /*#__PURE__*/ _jsxDEV(p.icon, {
                                                "data-lov-id": "src/pages/about/Overview.tsx:339:18",
                                                "data-lov-name": "p.icon",
                                                "data-component-path": "src/pages/about/Overview.tsx",
                                                "data-component-line": "339",
                                                "data-component-file": "Overview.tsx",
                                                "data-component-name": "p.icon",
                                                "data-component-content": "%7B%22className%22%3A%22h-6%20w-6%20text-white%22%7D",
                                                className: "h-6 w-6 text-white"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                                lineNumber: 339,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                            lineNumber: 338,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("h3", {
                                            "data-lov-id": "src/pages/about/Overview.tsx:341:16",
                                            "data-lov-name": "h3",
                                            "data-component-path": "src/pages/about/Overview.tsx",
                                            "data-component-line": "341",
                                            "data-component-file": "Overview.tsx",
                                            "data-component-name": "h3",
                                            "data-component-content": "%7B%22className%22%3A%22text-lg%20font-bold%20text-logo-navy%20mb-2%22%7D",
                                            className: "text-lg font-bold text-logo-navy mb-2",
                                            children: p.title
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                            lineNumber: 341,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("p", {
                                            "data-lov-id": "src/pages/about/Overview.tsx:342:16",
                                            "data-lov-name": "p",
                                            "data-component-path": "src/pages/about/Overview.tsx",
                                            "data-component-line": "342",
                                            "data-component-file": "Overview.tsx",
                                            "data-component-name": "p",
                                            "data-component-content": "%7B%22className%22%3A%22text-sm%20text-muted-foreground%20leading-relaxed%22%7D",
                                            className: "text-sm text-muted-foreground leading-relaxed",
                                            children: p.desc
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                            lineNumber: 342,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, p.title, true, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                    lineNumber: 330,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                            lineNumber: 328,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/about/Overview.tsx:347:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/about/Overview.tsx",
                            "data-component-line": "347",
                            "data-component-file": "Overview.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22max-w-4xl%20mx-auto%22%7D",
                            className: "max-w-4xl mx-auto",
                            children: /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/pages/about/Overview.tsx:348:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/pages/about/Overview.tsx",
                                "data-component-line": "348",
                                "data-component-file": "Overview.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22relative%20bg-indian-green%20text-white%20rounded-2xl%20px-8%20py-10%20lg%3Apx-14%20lg%3Apy-12%20shadow-xl%20overflow-hidden%22%7D",
                                className: "relative bg-indian-green text-white rounded-2xl px-8 py-10 lg:px-14 lg:py-12 shadow-xl overflow-hidden",
                                children: [
                                    /*#__PURE__*/ _jsxDEV(Quote, {
                                        "data-lov-id": "src/pages/about/Overview.tsx:349:14",
                                        "data-lov-name": "Quote",
                                        "data-component-path": "src/pages/about/Overview.tsx",
                                        "data-component-line": "349",
                                        "data-component-file": "Overview.tsx",
                                        "data-component-name": "Quote",
                                        "data-component-content": "%7B%22className%22%3A%22absolute%20-top-2%20-left-2%20h-24%20w-24%20text-white%2F10%22%7D",
                                        className: "absolute -top-2 -left-2 h-24 w-24 text-white/10"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                        lineNumber: 349,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        "data-lov-id": "src/pages/about/Overview.tsx:350:14",
                                        "data-lov-name": "p",
                                        "data-component-path": "src/pages/about/Overview.tsx",
                                        "data-component-line": "350",
                                        "data-component-file": "Overview.tsx",
                                        "data-component-name": "p",
                                        "data-component-content": "%7B%22text%22%3A%22%5C%22We%20believe%20education%20is%20not%20merely%20the%20acquisition%20of%20knowledge%2C%20but%20the%20development%20of%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20character%2C%20confidence%2C%20creativity%2C%20and%20compassion%20that%20prepares%20students%20for%20life.%5C%22%22%2C%22className%22%3A%22relative%20text-lg%20lg%3Atext-xl%20leading-relaxed%20text-center%20italic%20font-medium%22%7D",
                                        className: "relative text-lg lg:text-xl leading-relaxed text-center italic font-medium",
                                        children: '"We believe education is not merely the acquisition of knowledge, but the development of character, confidence, creativity, and compassion that prepares students for life."'
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                        lineNumber: 350,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        "data-lov-id": "src/pages/about/Overview.tsx:354:14",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/pages/about/Overview.tsx",
                                        "data-component-line": "354",
                                        "data-component-file": "Overview.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22className%22%3A%22relative%20mt-6%20flex%20items-center%20justify-center%20gap-2%20text-golden-yellow%20text-sm%20font-semibold%20tracking-wider%20uppercase%22%7D",
                                        className: "relative mt-6 flex items-center justify-center gap-2 text-golden-yellow text-sm font-semibold tracking-wider uppercase",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV(Award, {
                                                "data-lov-id": "src/pages/about/Overview.tsx:355:16",
                                                "data-lov-name": "Award",
                                                "data-component-path": "src/pages/about/Overview.tsx",
                                                "data-component-line": "355",
                                                "data-component-file": "Overview.tsx",
                                                "data-component-name": "Award",
                                                "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%22%7D",
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                                lineNumber: 355,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("span", {
                                                "data-lov-id": "src/pages/about/Overview.tsx:356:16",
                                                "data-lov-name": "span",
                                                "data-component-path": "src/pages/about/Overview.tsx",
                                                "data-component-line": "356",
                                                "data-component-file": "Overview.tsx",
                                                "data-component-name": "span",
                                                "data-component-content": "%7B%22text%22%3A%22SJRPS-HBR%20Philosophy%22%7D",
                                                children: "SJRPS-HBR Philosophy"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                                lineNumber: 356,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                        lineNumber: 354,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                lineNumber: 348,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                            lineNumber: 347,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                    lineNumber: 311,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                lineNumber: 310,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/about/Overview.tsx:364:6",
                "data-lov-name": "section",
                "data-component-path": "src/pages/about/Overview.tsx",
                "data-component-line": "364",
                "data-component-file": "Overview.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-14%20bg-indian-green%20text-white%22%7D",
                className: "py-14 bg-indian-green text-white",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/about/Overview.tsx:365:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/about/Overview.tsx",
                    "data-component-line": "365",
                    "data-component-file": "Overview.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20grid%20md%3Agrid-cols-3%20gap-6%22%7D",
                    className: "container mx-auto px-4 grid md:grid-cols-3 gap-6",
                    children: [
                        {
                            icon: Sparkles,
                            title: "Holistic Learning",
                            desc: "Academics, arts, sports and life-skills woven together."
                        },
                        {
                            icon: Building2,
                            title: "Modern Campus",
                            desc: "Smart classrooms, labs, library and safe transport."
                        },
                        {
                            icon: Users,
                            title: "Caring Faculty",
                            desc: "Experienced mentors who know every child by name."
                        }
                    ].map((c)=>/*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/about/Overview.tsx:371:12",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/about/Overview.tsx",
                            "data-component-line": "371",
                            "data-component-file": "Overview.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22bg-white%2F10%20backdrop-blur%20rounded-2xl%20p-6%20border%20border-white%2F15%22%7D",
                            className: "bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/15",
                            children: [
                                /*#__PURE__*/ _jsxDEV(c.icon, {
                                    "data-lov-id": "src/pages/about/Overview.tsx:375:14",
                                    "data-lov-name": "c.icon",
                                    "data-component-path": "src/pages/about/Overview.tsx",
                                    "data-component-line": "375",
                                    "data-component-file": "Overview.tsx",
                                    "data-component-name": "c.icon",
                                    "data-component-content": "%7B%22className%22%3A%22h-8%20w-8%20text-golden-yellow%20mb-3%22%7D",
                                    className: "h-8 w-8 text-golden-yellow mb-3"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                    lineNumber: 375,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("h3", {
                                    "data-lov-id": "src/pages/about/Overview.tsx:376:14",
                                    "data-lov-name": "h3",
                                    "data-component-path": "src/pages/about/Overview.tsx",
                                    "data-component-line": "376",
                                    "data-component-file": "Overview.tsx",
                                    "data-component-name": "h3",
                                    "data-component-content": "%7B%22className%22%3A%22text-xl%20font-bold%20mb-2%22%7D",
                                    className: "text-xl font-bold mb-2",
                                    children: c.title
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                    lineNumber: 376,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    "data-lov-id": "src/pages/about/Overview.tsx:377:14",
                                    "data-lov-name": "p",
                                    "data-component-path": "src/pages/about/Overview.tsx",
                                    "data-component-line": "377",
                                    "data-component-file": "Overview.tsx",
                                    "data-component-name": "p",
                                    "data-component-content": "%7B%22className%22%3A%22text-white%2F85%20text-sm%20leading-relaxed%22%7D",
                                    className: "text-white/85 text-sm leading-relaxed",
                                    children: c.desc
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                                    lineNumber: 377,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, c.title, true, {
                            fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                            lineNumber: 371,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                    lineNumber: 365,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
                lineNumber: 364,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/sjrsh916/public_html/src/pages/about/Overview.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
};
_c = Overview;
export default Overview;
var _c;
$RefreshReg$(_c, "Overview");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/pages/about/Overview.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/pages/about/Overview.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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UUFBQ29DO29DQUFBcEIsZUFBQTtvQ0FBQUMsaUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQywwQkFBQTtvQ0FBRUssV0FBVTs4Q0FBeUN3QixFQUFFbEQsSUFBSTs7Ozs7OzsyQkFMdkRrRCxFQUFFbkQsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWTFCO0tBcFRNZTtBQXNUTixlQUFlQSxTQUFRIiwibmFtZXMiOlsiTGF5b3V0IiwiUGFnZUhlcm8iLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJtb3Rpb24iLCJHcmFkdWF0aW9uQ2FwIiwiVXNlcnMiLCJUcm9waHkiLCJCb29rT3BlbiIsIlNwYXJrbGVzIiwiQnVpbGRpbmcyIiwiSGVhcnQiLCJTaGllbGRDaGVjayIsIlRhcmdldCIsIlVzZXJDaGVjayIsIk1lZGFsIiwiUm9ja2V0IiwiSGFuZHNoYWtlIiwiTGlnaHRidWxiIiwiQnJhaW4iLCJHbG9iZTIiLCJDcm93biIsIkF3YXJkIiwiUXVvdGUiLCJvdmVydmlld0ltYWdlIiwiYmhvb21pUG9vamFJbWFnZSIsIm9wZW5pbmdDZXJlbW9ueUltYWdlIiwidGhlbkNhbXB1c0ltYWdlIiwibWlsZXN0b25lcyIsInllYXIiLCJ0aXRsZSIsImRlc2MiLCJ3aHlDaG9vc2UiLCJpY29uIiwicGhpbG9zb3BoeSIsImhpc3RvcnlJbWFnZXMiLCJzcmMiLCJhbHQiLCJmYWRlVXAiLCJoaWRkZW4iLCJvcGFjaXR5IiwieSIsInZpc2libGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJPdmVydmlldyIsImRhdGEtbG92LWlkIiwiZGF0YS1sb3YtbmFtZSIsImRhdGEtY29tcG9uZW50LXBhdGgiLCJkYXRhLWNvbXBvbmVudC1saW5lIiwiZGF0YS1jb21wb25lbnQtZmlsZSIsImRhdGEtY29tcG9uZW50LW5hbWUiLCJkYXRhLWNvbXBvbmVudC1jb250ZW50IiwiYnJlYWRjcnVtYnMiLCJsYWJlbCIsInBhdGgiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaW5pdGlhbCIsIndoaWxlSW5WaWV3Iiwidmlld3BvcnQiLCJvbmNlIiwiYW1vdW50IiwidmFyaWFudHMiLCJpbWciLCJwIiwiaDIiLCJzdHlsZSIsImZvbnRGYW1pbHkiLCJ2YWx1ZSIsIm1hcCIsInMiLCJpbWFnZSIsImxvYWRpbmciLCJtIiwiaSIsImgzIiwic3BhbiIsIml0ZW0iLCJkZWxheSIsImMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiT3ZlcnZpZXcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBQYWdlSGVybyBmcm9tIFwiQC9jb21wb25lbnRzL1BhZ2VIZXJvXCI7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7XG4gIEdyYWR1YXRpb25DYXAsXG4gIFVzZXJzLFxuICBUcm9waHksXG4gIEJvb2tPcGVuLFxuICBTcGFya2xlcyxcbiAgQnVpbGRpbmcyLFxuICBIZWFydCxcbiAgU2hpZWxkQ2hlY2ssXG4gIFRhcmdldCxcbiAgVXNlckNoZWNrLFxuICBNZWRhbCxcbiAgUm9ja2V0LFxuICBIYW5kc2hha2UsXG4gIExpZ2h0YnVsYixcbiAgQnJhaW4sXG4gIEdsb2JlMixcbiAgQ3Jvd24sXG4gIEF3YXJkLFxuICBRdW90ZSxcbn0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IG92ZXJ2aWV3SW1hZ2UgZnJvbSBcIkAvYXNzZXRzL092ZXJ2aWV3LmpwZ1wiO1xuaW1wb3J0IGJob29taVBvb2phSW1hZ2UgZnJvbSBcIkAvYXNzZXRzL2Fib3V0LWhpc3RvcnkvQmhvb21pLVBvb2phLmpwZ1wiO1xuaW1wb3J0IG9wZW5pbmdDZXJlbW9ueUltYWdlIGZyb20gXCJAL2Fzc2V0cy9hYm91dC1oaXN0b3J5L09wZW5pbmctY2VyZW1vbnkuanBnXCI7XG5pbXBvcnQgdGhlbkNhbXB1c0ltYWdlIGZyb20gXCJAL2Fzc2V0cy9hYm91dC1oaXN0b3J5L3RoZW4uanBnXCI7XG5cbmNvbnN0IG1pbGVzdG9uZXMgPSBbXG4gIHsgeWVhcjogXCIyMDA0XCIsIHRpdGxlOiBcIkZvdW5kZWRcIiwgZGVzYzogXCJTSlIgUHVibGljIFNjaG9vbCwgSEJSIExheW91dCBlc3RhYmxpc2hlZC5cIiB9LFxuICB7IHllYXI6IFwiMjAxN1wiLCB0aXRsZTogXCJTbWFydCBDbGFzc2VzXCIsIGRlc2M6IFwiSW50cm9kdWNlZCBzbWFydCBjbGFzc3Jvb21zIGFjcm9zcyB0aGUgY2FtcHVzLlwiIH0sXG4gIHsgeWVhcjogXCIyMDIyXCIsIHRpdGxlOiBcIkFJLUVuYWJsZWQgTE1TXCIsIGRlc2M6IFwiQWRvcHRlZCBFbWJpYmUgQUktZW5hYmxlZCBMZWFybmluZyBNYW5hZ2VtZW50IFN5c3RlbS5cIiB9LFxuICB7IHllYXI6IFwiMjAyM1wiLCB0aXRsZTogXCJOZXcgUHJvZ3JhbXNcIiwgZGVzYzogXCJJbnRyb2R1Y2VkIFJvYm90aWNzLCBBYmFjdXMsIFZlZGljIE1hdGhzICYgVGFla3dvbmRvLlwiIH0sXG4gIHsgeWVhcjogXCIyMDI0XCIsIHRpdGxlOiBcIlNlbmlvciBTZWNvbmRhcnlcIiwgZGVzYzogXCJVcGdyYWRlZCB0byBTZW5pb3IgU2Vjb25kYXJ5IChHcmFkZXMgWEkgJiBYSUkpLlwiIH0sXG4gIHsgeWVhcjogXCIyMDI0XCIsIHRpdGxlOiBcIkFJIEZsYXQgUGFuZWwgQm9hcmRzXCIsIGRlc2M6IFwiSW50cm9kdWNlZCBBSS1lbmFibGVkIGZsYXQgcGFuZWwgYm9hcmRzIGZvciBzbWFydCBjbGFzc3Jvb21zLlwiIH0sXG5dO1xuXG5jb25zdCB3aHlDaG9vc2UgPSBbXG4gIHsgaWNvbjogQm9va09wZW4sIHRpdGxlOiBcIlNtYXJ0IENsYXNzcm9vbXNcIiwgZGVzYzogXCJJbnRlcmFjdGl2ZSBkaWdpdGFsIGxlYXJuaW5nIGVudmlyb25tZW50cyB3aXRoIG1vZGVybiB0ZWNobm9sb2d5IGFuZCBtdWx0aW1lZGlhIHJlc291cmNlcy5cIiB9LFxuICB7IGljb246IFVzZXJzLCB0aXRsZTogXCJEZWRpY2F0ZWQgRmFjdWx0eVwiLCBkZXNjOiBcIkV4cGVyaWVuY2VkIGVkdWNhdG9ycyBjb21taXR0ZWQgdG8gc3R1ZGVudCBzdWNjZXNzLCBwZXJzb25hbCBncm93dGgsIGFuZCBhY2FkZW1pYyBleGNlbGxlbmNlLlwiIH0sXG4gIHsgaWNvbjogSGVhcnQsIHRpdGxlOiBcIlZhbHVlIEVkdWNhdGlvblwiLCBkZXNjOiBcIkNoYXJhY3RlciBidWlsZGluZyB0aHJvdWdoIGNvbXByZWhlbnNpdmUgbW9yYWwgYW5kIGV0aGljYWwgZWR1Y2F0aW9uIHByb2dyYW1zLlwiIH0sXG4gIHsgaWNvbjogU2hpZWxkQ2hlY2ssIHRpdGxlOiBcIlNhZmUgQ2FtcHVzXCIsIGRlc2M6IFwiMjQvNyBzZWN1cml0eSwgQ0NUViBtb25pdG9yaW5nLCBhbmQgdHJhaW5lZCBzdGFmZiBlbnN1cmluZyBjb21wbGV0ZSBzdHVkZW50IHNhZmV0eS5cIiB9LFxuICB7IGljb246IFRhcmdldCwgdGl0bGU6IFwiSG9saXN0aWMgRGV2ZWxvcG1lbnRcIiwgZGVzYzogXCJCYWxhbmNlZCBmb2N1cyBvbiBhY2FkZW1pY3MsIHNwb3J0cywgYXJ0cywgYW5kIHBlcnNvbmFsaXR5IGRldmVsb3BtZW50LlwiIH0sXG4gIHsgaWNvbjogVHJvcGh5LCB0aXRsZTogXCJQcm92ZW4gVHJhY2sgUmVjb3JkXCIsIGRlc2M6IFwiQ29uc2lzdGVudCBhY2FkZW1pYyBleGNlbGxlbmNlIHdpdGggOTUlIHN1Y2Nlc3MgcmF0ZSBhbmQgbnVtZXJvdXMgYXdhcmRzLlwiIH0sXG4gIHsgaWNvbjogR3JhZHVhdGlvbkNhcCwgdGl0bGU6IFwiQWNhZGVtaWMgRXhjZWxsZW5jZVwiLCBkZXNjOiBcIlJpZ29yb3VzIENCU0UgY3VycmljdWx1bSBkZWxpdmVyZWQgd2l0aCBjbGFyaXR5LCBkZXB0aCwgYW5kIHBlcnNvbmFsaXplZCBhdHRlbnRpb24uXCIgfSxcbiAgeyBpY29uOiBVc2VyQ2hlY2ssIHRpdGxlOiBcIlN0dWRlbnQtQ2VudHJpYyBMZWFybmluZ1wiLCBkZXNjOiBcIlBlcnNvbmFsaXplZCBwYXRod2F5cyB0aGF0IHJlY29nbml6ZSBlYWNoIGxlYXJuZXIncyBzdHJlbmd0aHMsIHBhY2UsIGFuZCBhc3BpcmF0aW9ucy5cIiB9LFxuICB7IGljb246IE1lZGFsLCB0aXRsZTogXCJTcG9ydHMgJiBDby1DdXJyaWN1bGFyXCIsIGRlc2M6IFwiQSB2aWJyYW50IGNhbGVuZGFyIG9mIHNwb3J0cywgY2x1YnMsIGFydHMsIGFuZCBjb21wZXRpdGlvbnMgdGhhdCBidWlsZCBhbGwtcm91bmQgY29uZmlkZW5jZS5cIiB9LFxuICB7IGljb246IFJvY2tldCwgdGl0bGU6IFwiRnV0dXJlLVJlYWR5IExlYXJuaW5nXCIsIGRlc2M6IFwiUm9ib3RpY3MsIGNvZGluZywgQUksIGFuZCAyMXN0LWNlbnR1cnkgc2tpbGxzIHdvdmVuIGludG8gZXZlcnlkYXkgY2xhc3Nyb29tcy5cIiB9LFxuICB7IGljb246IEhhbmRzaGFrZSwgdGl0bGU6IFwiUGFyZW50IEVuZ2FnZW1lbnRcIiwgZGVzYzogXCJPcGVuIGNvbW11bmljYXRpb24sIHJlZ3VsYXIgdXBkYXRlcywgYW5kIGEgdHJ1ZSBwYXJ0bmVyc2hpcCBiZXR3ZWVuIGhvbWUgYW5kIHNjaG9vbC5cIiB9LFxuXTtcblxuY29uc3QgcGhpbG9zb3BoeSA9IFtcbiAgeyBpY29uOiBVc2VyQ2hlY2ssIHRpdGxlOiBcIkNoaWxkLUNlbnRyaWMgTGVhcm5pbmdcIiwgZGVzYzogXCJFdmVyeSBjbGFzc3Jvb20gaXMgZGVzaWduZWQgYXJvdW5kIHRoZSBjdXJpb3NpdHksIHBhY2UsIGFuZCBwb3RlbnRpYWwgb2YgZWFjaCBsZWFybmVyLlwiIH0sXG4gIHsgaWNvbjogR3JhZHVhdGlvbkNhcCwgdGl0bGU6IFwiQWNhZGVtaWMgRXhjZWxsZW5jZVwiLCBkZXNjOiBcIlJpZ29yb3VzIHN0YW5kYXJkcywgc3Ryb25nIGZ1bmRhbWVudGFscywgYW5kIGEgZGVlcCBsb3ZlIGZvciBsaWZlbG9uZyBsZWFybmluZy5cIiB9LFxuICB7IGljb246IEhlYXJ0LCB0aXRsZTogXCJDaGFyYWN0ZXIgRGV2ZWxvcG1lbnRcIiwgZGVzYzogXCJWYWx1ZXMsIGVtcGF0aHksIGFuZCBpbnRlZ3JpdHkgYnVpbHQgaW50byBldmVyeWRheSBzY2hvb2wgbGlmZS5cIiB9LFxuICB7IGljb246IExpZ2h0YnVsYiwgdGl0bGU6IFwiSW5ub3ZhdGlvbiAmIENyZWF0aXZpdHlcIiwgZGVzYzogXCJQcm9qZWN0LWJhc2VkIGxlYXJuaW5nLCBkZXNpZ24gdGhpbmtpbmcsIGFuZCBmcmVlZG9tIHRvIGV4cGxvcmUgbmV3IGlkZWFzLlwiIH0sXG4gIHsgaWNvbjogQ3Jvd24sIHRpdGxlOiBcIkxlYWRlcnNoaXAgU2tpbGxzXCIsIGRlc2M6IFwiT3Bwb3J0dW5pdGllcyB0byBsZWFkLCBjb2xsYWJvcmF0ZSwgYW5kIHRha2UgcmVzcG9uc2liaWxpdHkgZnJvbSBhbiBlYXJseSBhZ2UuXCIgfSxcbiAgeyBpY29uOiBCcmFpbiwgdGl0bGU6IFwiQ3JpdGljYWwgVGhpbmtpbmdcIiwgZGVzYzogXCJRdWVzdGlvbmluZywgcmVhc29uaW5nLCBhbmQgcHJvYmxlbS1zb2x2aW5nIGFjcm9zcyBldmVyeSBzdWJqZWN0LlwiIH0sXG4gIHsgaWNvbjogR2xvYmUyLCB0aXRsZTogXCJTb2NpYWwgUmVzcG9uc2liaWxpdHlcIiwgZGVzYzogXCJBIHN0cm9uZyBzZW5zZSBvZiBjb21tdW5pdHksIGNpdGl6ZW5zaGlwLCBhbmQgY2FyZSBmb3IgdGhlIHdvcmxkIGFyb3VuZCB1cy5cIiB9LFxuICB7IGljb246IFNwYXJrbGVzLCB0aXRsZTogXCJMaWZlbG9uZyBMZWFybmluZ1wiLCBkZXNjOiBcIkN1cmlvc2l0eSBudXJ0dXJlZCB0b2RheSBiZWNvbWVzIHRoZSB3aXNkb20gb2YgdG9tb3Jyb3cuXCIgfSxcbl07XG5cbmNvbnN0IGhpc3RvcnlJbWFnZXMgPSBbXG4gIHsgc3JjOiBiaG9vbWlQb29qYUltYWdlLCBhbHQ6IFwiQmhvb21pIFB1amEgY2VyZW1vbnkgYXQgU0pSUFMtSEJSIGNhbXB1c1wiIH0sXG4gIHsgc3JjOiBvcGVuaW5nQ2VyZW1vbnlJbWFnZSwgYWx0OiBcIk9wZW5pbmcgY2VyZW1vbnkgb2YgU0pSIFB1YmxpYyBTY2hvb2wgYnVpbGRpbmdcIiB9LFxuICB7IHNyYzogdGhlbkNhbXB1c0ltYWdlLCBhbHQ6IFwiU0pSUFMtSEJSIGNhbXB1cyBkdXJpbmcgaXRzIGVhcmx5IHllYXJzXCIgfSxcbl07XG5cbmNvbnN0IGZhZGVVcCA9IHtcbiAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHk6IDI0IH0sXG4gIHZpc2libGU6IHsgb3BhY2l0eTogMSwgeTogMCwgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMC42IH0gfSxcbn07XG5cbmNvbnN0IE92ZXJ2aWV3ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8UGFnZUhlcm9cbiAgICAgICAgdGl0bGU9XCJPdmVydmlld1wiXG4gICAgICAgIGJyZWFkY3J1bWJzPXtbeyBsYWJlbDogXCJBYm91dFwiLCBwYXRoOiBcIi9hYm91dC9vdmVydmlld1wiIH0sIHsgbGFiZWw6IFwiT3ZlcnZpZXdcIiB9XX1cbiAgICAgIC8+XG5cbiAgICAgIHsvKiBBYm91dCBPdXIgU2Nob29sIOKAlCBUd28gQ29sdW1uICovfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTYgbGc6cHktMjBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGxnOmdyaWQtY29scy0xMiBnYXAtMTAgbGc6Z2FwLTE0IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICAgICAgICAgIHdoaWxlSW5WaWV3PVwidmlzaWJsZVwiXG4gICAgICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUsIGFtb3VudDogMC4yIH19XG4gICAgICAgICAgICAgIHZhcmlhbnRzPXtmYWRlVXB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxnOmNvbC1zcGFuLTVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHJvdW5kZWQtMnhsIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctMnhsIHJpbmctMSByaW5nLWJsYWNrLzVcIj5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9e292ZXJ2aWV3SW1hZ2V9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJTSlJQUy1IQlIgY2FtcHVzXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBhc3BlY3QtWzQvNV0gb2JqZWN0LWNvdmVyXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLWJvdHRvbS0xIC1yaWdodC0xIGJnLXNhZmZyb24tb3JhbmdlIHRleHQtd2hpdGUgcHgtNSBweS0zIHJvdW5kZWQtdGwtMnhsIHNoYWRvdy14bFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWV4dHJhYm9sZCBsZWFkaW5nLW5vbmVcIj4yMis8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIj5ZZWFycyBvZiBMZWdhY3k8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICB3aGlsZUluVmlldz1cInZpc2libGVcIlxuICAgICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlLCBhbW91bnQ6IDAuMiB9fVxuICAgICAgICAgICAgICB2YXJpYW50cz17ZmFkZVVwfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZzpjb2wtc3Bhbi03XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yNWVtXSB0ZXh0LWluZGlhbi1ncmVlbiBtYi0zXCI+XG4gICAgICAgICAgICAgICAgQWJvdXQgT3VyIFNjaG9vbFxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNHhsIGxnOnRleHQtNXhsIGZvbnQtYm9sZCB0ZXh0LWxvZ28tbmF2eSBsZWFkaW5nLXRpZ2h0IG1iLTZcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiUG9wcGlucywgc2Fucy1zZXJpZlwiIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBXaGVyZSBUcmFkaXRpb24gTWVldHMgVG9tb3Jyb3dcbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWZvcmVncm91bmQvODAgbGVhZGluZy1yZWxheGVkIG1iLTVcIj5cbiAgICAgICAgICAgICAgICBTSlIgUHVibGljIFNjaG9vbCwgSEJSIExheW91dCAoU0pSUFMtSEJSKSBpcyBtb3JlIHRoYW4gYSBzY2hvb2wg4oCUIGl0IGlzIGFcbiAgICAgICAgICAgICAgICBjb21tdW5pdHkgb2YgZWR1Y2F0b3JzLCBwYXJlbnRzLCBhbmQgc3R1ZGVudHMgdW5pdGVkIGJ5IGEgc2hhcmVkIGJlbGllZiB0aGF0IGdyZWF0XG4gICAgICAgICAgICAgICAgZWR1Y2F0aW9uIHNoYXBlcyBncmVhdCBodW1hbiBiZWluZ3MuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBsZWFkaW5nLXJlbGF4ZWQgbWItNVwiPlxuICAgICAgICAgICAgICAgIEZvdW5kZWQgb24gdGhlIHRpbWVsZXNzIGlkZWFscyBvZiB0aGUgU0pSIEVkdWNhdGlvbiBTb2NpZXR5LCBvdXJcbiAgICAgICAgICAgICAgICBzY2hvb2wgYmxlbmRzIGEgcmljaCBoZXJpdGFnZSBvZiB2YWx1ZS1iYXNlZCBsZWFybmluZyB3aXRoIGEgbW9kZXJuLCBmdXR1cmUtcmVhZHlcbiAgICAgICAgICAgICAgICBjdXJyaWN1bHVtLiBGcm9tIHRoZSBlYXJseSB5ZWFycyB0aHJvdWdoIHNlbmlvciBzY2hvb2wsIGV2ZXJ5IGxlYXJuZXIgaXMgbnVydHVyZWQgd2l0aFxuICAgICAgICAgICAgICAgIGNhcmUsIGNoYWxsZW5nZWQgd2l0aCByaWdvciwgYW5kIGluc3BpcmVkIHRvIGRpc2NvdmVyIHRoZWlyIHVuaXF1ZSBwdXJwb3NlLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSB0ZXh0LW11dGVkLWZvcmVncm91bmQgbGVhZGluZy1yZWxheGVkIG1iLThcIj5cbiAgICAgICAgICAgICAgICBXZSBhcmUgcHJvdWQgb2Ygb3VyIGNvbnNpc3RlbnQgYWNhZGVtaWMgcmVzdWx0cywgb3VyIGRlZGljYXRlZCBmYWN1bHR5LCBvdXIgdmlicmFudFxuICAgICAgICAgICAgICAgIGNvLWN1cnJpY3VsYXIgcHJvZ3JhbXMsIGFuZCBhIHNhZmUsIG1vZGVybiBjYW1wdXMgdGhhdCBzdXBwb3J0cyBob2xpc3RpYyBncm93dGgg4oCUIGFjYWRlbWljLFxuICAgICAgICAgICAgICAgIHBoeXNpY2FsLCBlbW90aW9uYWwsIGFuZCBldGhpY2FsLlxuICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zIGdhcC0zIG1iLThcIj5cbiAgICAgICAgICAgICAgICB7W1xuICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogXCIxMjAwK1wiLCBsYWJlbDogXCJTdHVkZW50c1wiIH0sXG4gICAgICAgICAgICAgICAgICB7IHZhbHVlOiBcIjgwK1wiLCBsYWJlbDogXCJGYWN1bHR5XCIgfSxcbiAgICAgICAgICAgICAgICAgIHsgdmFsdWU6IFwiMTAwJVwiLCBsYWJlbDogXCJSZXN1bHRzXCIgfSxcbiAgICAgICAgICAgICAgICBdLm1hcCgocykgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBrZXk9e3MubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQteGwgYmctaW5kaWFuLWdyZWVuLzUgYm9yZGVyIGJvcmRlci1pbmRpYW4tZ3JlZW4vMTAgcHgtNCBweS0zIHRleHQtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1pbmRpYW4tZ3JlZW5cIj57cy52YWx1ZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgbXQtMC41XCI+XG4gICAgICAgICAgICAgICAgICAgICAge3MubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tciBmcm9tLXNhZmZyb24tb3JhbmdlLzEwIHRvLXRyYW5zcGFyZW50IGJvcmRlci1sLTQgYm9yZGVyLXNhZmZyb24tb3JhbmdlIHJvdW5kZWQtci14bCBwLTVcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxvZ28tbmF2eSBmb250LXNlbWlib2xkIGl0YWxpYyBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICAgIFwiRW1wb3dlcmluZyBZb3VuZyBNaW5kcywgSW5zcGlyaW5nIEZ1dHVyZSBMZWFkZXJzLCBhbmQgQnVpbGRpbmcgYSBMZWdhY3kgb2YgRXhjZWxsZW5jZVxuICAgICAgICAgICAgICAgICAgVGhyb3VnaCBRdWFsaXR5IEVkdWNhdGlvbi5cIlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7LyogU2Nob29sIEhpc3RvcnkgKi99XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNiBsZzpweS0yMCBiZy13aGl0ZSBib3JkZXItdCBib3JkZXItc2xhdGUtMTAwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICAgIHdoaWxlSW5WaWV3PVwidmlzaWJsZVwiXG4gICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlLCBhbW91bnQ6IDAuMiB9fVxuICAgICAgICAgICAgdmFyaWFudHM9e2ZhZGVVcH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1heC13LTZ4bCBteC1hdXRvXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLVswLjI1ZW1dIHRleHQtaW5kaWFuLWdyZWVuIG1iLTNcIj5cbiAgICAgICAgICAgICAgU2Nob29sIEhpc3RvcnlcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTR4bCBsZzp0ZXh0LTV4bCBmb250LWJvbGQgdGV4dC1sb2dvLW5hdnkgbGVhZGluZy10aWdodCBtYi02XCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udEZhbWlseTogXCJQb3BwaW5zLCBzYW5zLXNlcmlmXCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVGhlIEJlZ2lubmluZyBvZiBPdXIgSEJSIENhbXB1c1xuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS01IHRleHQtYmFzZSBtZDp0ZXh0LWxnIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgVGhlIGNvbnN0cnVjdGlvbiBvZiB0aGUgcHJlc2VudCBjYW1wdXMgYmVnYW4gd2l0aCBhIEJob29taSBQdWphIGNlcmVtb255LFxuICAgICAgICAgICAgICAgIHBlcmZvcm1lZCBpbiB0aGUgZGl2aW5lIHByZXNlbmNlIGFuZCBibGVzc2luZ3Mgb2YgSmFnYWRndXJ1IE1haGFzd2FtaWppLCBhbG9uZ1xuICAgICAgICAgICAgICAgIHdpdGggdHJ1c3RlZXMgYW5kIG1lbWJlcnMgb2YgdGhlIGVkdWNhdGlvbiBzb2NpZXR5LiBUaGUgc2FjcmVkIHJpdHVhbCBtYXJrZWQgdGhlXG4gICAgICAgICAgICAgICAgc3Bpcml0dWFsIGZvdW5kYXRpb24gb2YgdGhlIGluc3RpdHV0aW9uIGFuZCB0aGUgYmVnaW5uaW5nIG9mIGEgbmV3IGVkdWNhdGlvbmFsXG4gICAgICAgICAgICAgICAgZW5kZWF2b3VyLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIEhCUiBDYW1wdXMgd2FzIGZvcm1hbGx5IGluYXVndXJhdGVkIG9uIDYgTm92ZW1iZXIgMjAwNCwgbWFya2luZyB0aGUgc3RhcnQgb2YgaXRzXG4gICAgICAgICAgICAgICAgYWNhZGVtaWMgam91cm5leS4gU2luY2UgaXRzIGluY2VwdGlvbiwgdGhlIGluc3RpdHV0aW9uIGhhcyBiZWVuIGNvbW1pdHRlZCB0b1xuICAgICAgICAgICAgICAgIHByb3ZpZGluZyBxdWFsaXR5IGVkdWNhdGlvbiB0aHJvdWdoIHRoZSBDQlNFIGN1cnJpY3VsdW0sIHdpdGggYSBzdHJvbmcgZm9jdXMgb25cbiAgICAgICAgICAgICAgICBleHBlcmllbnRpYWwgYW5kIGFjdGl2aXR5LWJhc2VkIGxlYXJuaW5nLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFdpdGggZGVkaWNhdGVkIHRlYWNoZXJzIGFuZCBhIHN1cHBvcnRpdmUgbGVhcm5pbmcgZW52aXJvbm1lbnQsIHRoZSBzY2hvb2wgaGFzXG4gICAgICAgICAgICAgICAgY29uc2lzdGVudGx5IGFjaGlldmVkIDEwMCUgcmVzdWx0cyBpbiBib2FyZCBleGFtaW5hdGlvbnMsIHJlZmxlY3RpbmcgaXRzXG4gICAgICAgICAgICAgICAgY29tbWl0bWVudCB0byBhY2FkZW1pYyBleGNlbGxlbmNlIGFuZCBob2xpc3RpYyBzdHVkZW50IGRldmVsb3BtZW50LlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0zIGdhcC01IGxnOmdhcC02IG10LTEwXCI+XG4gICAgICAgICAgICAgIHtoaXN0b3J5SW1hZ2VzLm1hcCgoaW1hZ2UpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9e2ltYWdlLmFsdH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLTJ4bCBiZy1zbGF0ZS0xMDAgc2hhZG93LXNtIHJpbmctMSByaW5nLXNsYXRlLTIwMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgaG92ZXI6LXRyYW5zbGF0ZS15LTEgaG92ZXI6c2hhZG93LXhsXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2Uuc3JjfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2ltYWdlLmFsdH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02NCB3LWZ1bGwgb2JqZWN0LWNvdmVyIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTUwMCBncm91cC1ob3ZlcjpzY2FsZS0xMDVcIlxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIHsvKiBPdXIgSm91cm5leSBUaW1lbGluZSAqL31cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTE2IGJnLW11dGVkLzQwIGJvcmRlci15XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBtYXgtdy00eGxcIj5cbiAgICAgICAgICA8aDJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LWluZGlhbi1ncmVlbiB0ZXh0LWNlbnRlciBtYi0xMlwiXG4gICAgICAgICAgICBzdHlsZT17eyBmb250RmFtaWx5OiBcIlBvcHBpbnMsIHNhbnMtc2VyaWZcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIE91ciBKb3VybmV5XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtNCBtZDpsZWZ0LTEvMiB0b3AtMCBib3R0b20tMCB3LTAuNSBiZy1pbmRpYW4tZ3JlZW4vMjAgbWQ6LXRyYW5zbGF0ZS14LTEvMlwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMTBcIj5cbiAgICAgICAgICAgICAge21pbGVzdG9uZXMubWFwKChtLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAga2V5PXttLnllYXJ9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByZWxhdGl2ZSBtZDpncmlkIG1kOmdyaWQtY29scy0yIG1kOmdhcC04ICR7XG4gICAgICAgICAgICAgICAgICAgIGkgJSAyID09PSAwID8gXCJcIiA6IFwibWQ6WyY+KjpmaXJzdC1jaGlsZF06b3JkZXItMlwiXG4gICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHBsLTEyIG1kOnBsLTAgJHtcbiAgICAgICAgICAgICAgICAgICAgICBpICUgMiA9PT0gMCA/IFwibWQ6dGV4dC1yaWdodCBtZDpwci0xMFwiIDogXCJtZDpwbC0xMFwiXG4gICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc2FmZnJvbi1vcmFuZ2UgZm9udC1ib2xkIHRleHQtc21cIj57bS55ZWFyfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgdGV4dC1sb2dvLW5hdnkgbXQtMVwiPnttLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCBtdC0xXCI+e20uZGVzY308L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtNCBtZDpsZWZ0LTEvMiB0b3AtMS41IHctMyBoLTMgcm91bmRlZC1mdWxsIGJnLWluZGlhbi1ncmVlbiByaW5nLTQgcmluZy1pbmRpYW4tZ3JlZW4vMjAgbWQ6LXRyYW5zbGF0ZS14LTEvMlwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7LyogV2h5IENob29zZSBTSlJQUy1IQlIgKi99XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNiBsZzpweS0yMCBiZy1baHNsKDM4XzcwJV85NiUpXVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTN4bCBteC1hdXRvIHRleHQtY2VudGVyIG1iLTEyXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLVswLjI1ZW1dIHRleHQtaW5kaWFuLWdyZWVuIG1iLTNcIj5cbiAgICAgICAgICAgICAgV2h5IFVzXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8aDJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgbGc6dGV4dC01eGwgZm9udC1ib2xkIHRleHQtbG9nby1uYXZ5IG1iLTRcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBmb250RmFtaWx5OiBcIlBvcHBpbnMsIHNhbnMtc2VyaWZcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBXaHkgQ2hvb3NlIFNKUlBTLUhCUj9cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgdGV4dC1sZyBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgRGlzY292ZXIgd2hhdCBtYWtlcyBTSlJQUy1IQlIgdGhlIHByZWZlcnJlZCBjaG9pY2UgZm9yIHRob3VzYW5kcyBvZiBmYW1pbGllcyBzZWVraW5nIHF1YWxpdHlcbiAgICAgICAgICAgICAgZWR1Y2F0aW9uIHdpdGggc3Ryb25nIG1vcmFsIGZvdW5kYXRpb25zLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC02XCI+XG4gICAgICAgICAgICB7d2h5Q2hvb3NlLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgIGtleT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19XG4gICAgICAgICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUsIGRlbGF5OiAoaSAlIDMpICogMC4wOCB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwicm91bmRlZC0yeGwgYm9yZGVyLW5vbmUgc2hhZG93LXNtIGhvdmVyOnNoYWRvdy14bCB0cmFuc2l0aW9uLWFsbCBob3ZlcjotdHJhbnNsYXRlLXktMSBiZy1baHNsKDQwXzgwJV85NyUpXSBoLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLTcgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIHctMTYgaC0xNiByb3VuZGVkLWZ1bGwgYmctaW5kaWFuLWdyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1iLTUgc2hhZG93LW1kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGl0ZW0uaWNvbiBjbGFzc05hbWU9XCJoLTcgdy03IHRleHQtd2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtW2hzbCgyNV81NSVfMjUlKV0gbWItM1wiPntpdGVtLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtW2hzbCgyNV8zMCVfMzUlKV0gdGV4dC1zbSBsZWFkaW5nLXJlbGF4ZWRcIj57aXRlbS5kZXNjfTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIHsvKiBPdXIgRWR1Y2F0aW9uYWwgUGhpbG9zb3BoeSAqL31cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTE2IGxnOnB5LTIwIGJnLWluZGlhbi1ncmVlbi81XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctM3hsIG14LWF1dG8gdGV4dC1jZW50ZXIgbWItMTJcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMjVlbV0gdGV4dC1pbmRpYW4tZ3JlZW4gbWItM1wiPlxuICAgICAgICAgICAgICBPdXIgQXBwcm9hY2hcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTR4bCBsZzp0ZXh0LTV4bCBmb250LWJvbGQgdGV4dC1sb2dvLW5hdnkgbWItNFwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiUG9wcGlucywgc2Fucy1zZXJpZlwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE91ciBFZHVjYXRpb25hbCBQaGlsb3NvcGh5XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHRleHQtbGcgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgIEVpZ2h0IGd1aWRpbmcgcHJpbmNpcGxlcyB0aGF0IHNoYXBlIGV2ZXJ5IGNsYXNzcm9vbSwgZXZlcnkgY29udmVyc2F0aW9uLCBhbmQgZXZlcnkgY2hpbGQnc1xuICAgICAgICAgICAgICBqb3VybmV5IGF0IFNKUlBTLUhCUi5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNCBnYXAtNiBtYi0xNFwiPlxuICAgICAgICAgICAge3BoaWxvc29waHkubWFwKChwLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAga2V5PXtwLnRpdGxlfVxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cbiAgICAgICAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSwgZGVsYXk6IChpICUgNCkgKiAwLjA2IH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgcC02IHNoYWRvdy1zbSBob3ZlcjpzaGFkb3ctbGcgdHJhbnNpdGlvbi1hbGwgYm9yZGVyIGJvcmRlci1pbmRpYW4tZ3JlZW4vMTBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgcm91bmRlZC14bCBiZy1pbmRpYW4tZ3JlZW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWItNCBzaGFkb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxwLmljb24gY2xhc3NOYW1lPVwiaC02IHctNiB0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdGV4dC1sb2dvLW5hdnkgbWItMlwiPntwLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmQgbGVhZGluZy1yZWxheGVkXCI+e3AuZGVzY308L3A+XG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy1pbmRpYW4tZ3JlZW4gdGV4dC13aGl0ZSByb3VuZGVkLTJ4bCBweC04IHB5LTEwIGxnOnB4LTE0IGxnOnB5LTEyIHNoYWRvdy14bCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgPFF1b3RlIGNsYXNzTmFtZT1cImFic29sdXRlIC10b3AtMiAtbGVmdC0yIGgtMjQgdy0yNCB0ZXh0LXdoaXRlLzEwXCIgLz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmVsYXRpdmUgdGV4dC1sZyBsZzp0ZXh0LXhsIGxlYWRpbmctcmVsYXhlZCB0ZXh0LWNlbnRlciBpdGFsaWMgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICBcIldlIGJlbGlldmUgZWR1Y2F0aW9uIGlzIG5vdCBtZXJlbHkgdGhlIGFjcXVpc2l0aW9uIG9mIGtub3dsZWRnZSwgYnV0IHRoZSBkZXZlbG9wbWVudCBvZlxuICAgICAgICAgICAgICAgIGNoYXJhY3RlciwgY29uZmlkZW5jZSwgY3JlYXRpdml0eSwgYW5kIGNvbXBhc3Npb24gdGhhdCBwcmVwYXJlcyBzdHVkZW50cyBmb3IgbGlmZS5cIlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXQtNiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiB0ZXh0LWdvbGRlbi15ZWxsb3cgdGV4dC1zbSBmb250LXNlbWlib2xkIHRyYWNraW5nLXdpZGVyIHVwcGVyY2FzZVwiPlxuICAgICAgICAgICAgICAgIDxBd2FyZCBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj5TSlJQUy1IQlIgUGhpbG9zb3BoeTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIHsvKiBNaXNzaW9uIENUQSBzdHJpcCAqL31cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTE0IGJnLWluZGlhbi1ncmVlbiB0ZXh0LXdoaXRlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBncmlkIG1kOmdyaWQtY29scy0zIGdhcC02XCI+XG4gICAgICAgICAge1tcbiAgICAgICAgICAgIHsgaWNvbjogU3BhcmtsZXMsIHRpdGxlOiBcIkhvbGlzdGljIExlYXJuaW5nXCIsIGRlc2M6IFwiQWNhZGVtaWNzLCBhcnRzLCBzcG9ydHMgYW5kIGxpZmUtc2tpbGxzIHdvdmVuIHRvZ2V0aGVyLlwiIH0sXG4gICAgICAgICAgICB7IGljb246IEJ1aWxkaW5nMiwgdGl0bGU6IFwiTW9kZXJuIENhbXB1c1wiLCBkZXNjOiBcIlNtYXJ0IGNsYXNzcm9vbXMsIGxhYnMsIGxpYnJhcnkgYW5kIHNhZmUgdHJhbnNwb3J0LlwiIH0sXG4gICAgICAgICAgICB7IGljb246IFVzZXJzLCB0aXRsZTogXCJDYXJpbmcgRmFjdWx0eVwiLCBkZXNjOiBcIkV4cGVyaWVuY2VkIG1lbnRvcnMgd2hvIGtub3cgZXZlcnkgY2hpbGQgYnkgbmFtZS5cIiB9LFxuICAgICAgICAgIF0ubWFwKChjKSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17Yy50aXRsZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUvMTAgYmFja2Ryb3AtYmx1ciByb3VuZGVkLTJ4bCBwLTYgYm9yZGVyIGJvcmRlci13aGl0ZS8xNVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxjLmljb24gY2xhc3NOYW1lPVwiaC04IHctOCB0ZXh0LWdvbGRlbi15ZWxsb3cgbWItM1wiIC8+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi0yXCI+e2MudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZS84NSB0ZXh0LXNtIGxlYWRpbmctcmVsYXhlZFwiPntjLmRlc2N9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT3ZlcnZpZXc7XG4iXSwiZmlsZSI6Ii9ob21lL3NqcnNoOTE2L3B1YmxpY19odG1sL3NyYy9wYWdlcy9hYm91dC9PdmVydmlldy50c3gifQ==