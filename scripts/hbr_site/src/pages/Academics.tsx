import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Academics.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/pages/Academics.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import Layout from "/src/components/Layout.tsx";
import PageHero from "/src/components/PageHero.tsx";
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=5efa796b";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=5efa796b";
import { ArrowRight, Award, Baby, BarChart3, BookOpen, CalendarDays, CheckCircle2, ClipboardCheck, FileText, GraduationCap, Layers, PenLine, School, ShieldCheck, Sparkles, Target, Users } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
const academicStages = [
    {
        title: "Pre-Primary",
        grades: "Nursery, LKG & UKG",
        description: "Play-based, activity-oriented learning that nurtures early literacy, numeracy, motor skills and confidence.",
        link: "/academics/pre-primary",
        icon: Baby
    },
    {
        title: "Primary Level",
        grades: "Classes I to V",
        description: "Concept-based learning with strong foundations in language, mathematics, EVS, science, social science and computer education.",
        link: "/academics/primary-level",
        icon: BookOpen
    },
    {
        title: "Secondary Stage",
        grades: "Classes VI to X",
        description: "Analytical, application-based study with skill development, laboratory learning and CBSE board preparation.",
        link: "/academics/secondary-stage",
        icon: School
    },
    {
        title: "Senior Secondary Stage",
        grades: "Classes XI & XII",
        description: "Stream-focused learning, research exposure and career-oriented preparation for higher education pathways.",
        link: "/academics/senior-secondary-stage",
        icon: GraduationCap
    }
];
const academicSystems = [
    {
        title: "Curriculum Framework",
        description: "Stage-wise curricular goals, competencies, learning outcomes and learner-centric pedagogy aligned with CBSE expectations.",
        link: "/academics/curriculum",
        icon: Layers
    },
    {
        title: "Academic Calendar",
        description: "A structured year of terms, assessments, holidays, co-curricular activities and signature school events.",
        link: "/academics/calendar",
        icon: CalendarDays
    },
    {
        title: "Academic Achievements",
        description: "Board results, Olympiads, MANAK Awards, arts, sports and inter-school distinctions earned by our students.",
        link: "/academics/achievements",
        icon: Award
    }
];
const policyLinks = [
    {
        title: "Attendance Rules",
        description: "Regularity, punctuality, leave procedure and examination attendance expectations.",
        link: "/academics/attendance-rules",
        icon: Users
    },
    {
        title: "Code of Conduct",
        description: "Student behaviour, discipline, respect, responsibility and digital conduct standards.",
        link: "/academics/code-of-conduct",
        icon: ShieldCheck
    },
    {
        title: "Examination Guidelines",
        description: "Assessment framework, internal evaluation, exam-day rules and academic integrity.",
        link: "/academics/examination-guidelines",
        icon: FileText
    },
    {
        title: "Promotion Criteria",
        description: "Scholastic and co-scholastic evaluation standards for academic progress.",
        link: "/academics/promotion-criteria",
        icon: ClipboardCheck
    }
];
const highlights = [
    "CBSE curriculum with stage-wise academic progression",
    "Experiential, activity-based and inquiry-led classroom practice",
    "Balanced focus on academics, values, discipline and co-scholastic growth",
    "Assessment systems designed for clarity, consistency and student progress"
];
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 18
    },
    visible: {
        opacity: 1,
        y: 0
    }
};
const Academics = ()=>{
    return /*#__PURE__*/ _jsxDEV(Layout, {
        "data-lov-id": "src/pages/Academics.tsx:120:4",
        "data-lov-name": "Layout",
        "data-component-path": "src/pages/Academics.tsx",
        "data-component-line": "120",
        "data-component-file": "Academics.tsx",
        "data-component-name": "Layout",
        "data-component-content": "%7B%7D",
        children: [
            /*#__PURE__*/ _jsxDEV(PageHero, {
                "data-lov-id": "src/pages/Academics.tsx:121:6",
                "data-lov-name": "PageHero",
                "data-component-path": "src/pages/Academics.tsx",
                "data-component-line": "121",
                "data-component-file": "Academics.tsx",
                "data-component-name": "PageHero",
                "data-component-content": "%7B%7D",
                title: "Academics",
                breadcrumbs: [
                    {
                        label: "Academics"
                    }
                ]
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/Academics.tsx:123:6",
                "data-lov-name": "section",
                "data-component-path": "src/pages/Academics.tsx",
                "data-component-line": "123",
                "data-component-file": "Academics.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20lg%3Apy-20%20bg-background%22%7D",
                className: "py-16 lg:py-20 bg-background",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/Academics.tsx:124:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/Academics.tsx",
                    "data-component-line": "124",
                    "data-component-file": "Academics.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/Academics.tsx:125:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/Academics.tsx",
                        "data-component-line": "125",
                        "data-component-file": "Academics.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22grid%20lg%3Agrid-cols-%5B1.05fr_0.95fr%5D%20gap-10%20lg%3Agap-14%20items-center%22%7D",
                        className: "grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center",
                        children: [
                            /*#__PURE__*/ _jsxDEV(motion.div, {
                                "data-lov-id": "src/pages/Academics.tsx:126:12",
                                "data-lov-name": "motion.div",
                                "data-component-path": "src/pages/Academics.tsx",
                                "data-component-line": "126",
                                "data-component-file": "Academics.tsx",
                                "data-component-name": "motion.div",
                                "data-component-content": "%7B%7D",
                                initial: "hidden",
                                whileInView: "visible",
                                viewport: {
                                    once: true,
                                    amount: 0.25
                                },
                                variants: fadeUp,
                                transition: {
                                    duration: 0.45
                                },
                                children: [
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        "data-lov-id": "src/pages/Academics.tsx:133:14",
                                        "data-lov-name": "p",
                                        "data-component-path": "src/pages/Academics.tsx",
                                        "data-component-line": "133",
                                        "data-component-file": "Academics.tsx",
                                        "data-component-name": "p",
                                        "data-component-content": "%7B%22text%22%3A%22Academic%20Overview%22%2C%22className%22%3A%22text-xs%20font-semibold%20uppercase%20tracking-%5B0.24em%5D%20text-indian-green%20mb-3%22%7D",
                                        className: "text-xs font-semibold uppercase tracking-[0.24em] text-indian-green mb-3",
                                        children: "Academic Overview"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("h2", {
                                        "data-lov-id": "src/pages/Academics.tsx:136:14",
                                        "data-lov-name": "h2",
                                        "data-component-path": "src/pages/Academics.tsx",
                                        "data-component-line": "136",
                                        "data-component-file": "Academics.tsx",
                                        "data-component-name": "h2",
                                        "data-component-content": "%7B%22text%22%3A%22A%20Complete%20Learning%20Journey%20from%20Early%20Years%20to%20Senior%20Secondary%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20text-black%20mb-5%22%7D",
                                        className: "text-3xl md:text-4xl font-bold text-black mb-5",
                                        style: {
                                            fontFamily: "Poppins, sans-serif"
                                        },
                                        children: "A Complete Learning Journey from Early Years to Senior Secondary"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        "data-lov-id": "src/pages/Academics.tsx:139:14",
                                        "data-lov-name": "p",
                                        "data-component-path": "src/pages/Academics.tsx",
                                        "data-component-line": "139",
                                        "data-component-file": "Academics.tsx",
                                        "data-component-name": "p",
                                        "data-component-content": "%7B%22text%22%3A%22Academics%20at%20SJRPS-HBR%20are%20designed%20as%20a%20continuous%20journey%3A%20joyful%20foundations%20in%20the%20early%20years%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20strong%20concept%20development%20in%20primary%20classes%2C%20deeper%20analytical%20learning%20in%20secondary%20school%2C%20and%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20focused%20preparation%20in%20senior%20secondary.%22%2C%22className%22%3A%22text-base%20lg%3Atext-lg%20text-foreground%2F80%20leading-relaxed%20mb-4%22%7D",
                                        className: "text-base lg:text-lg text-foreground/80 leading-relaxed mb-4",
                                        children: "Academics at SJRPS-HBR are designed as a continuous journey: joyful foundations in the early years, strong concept development in primary classes, deeper analytical learning in secondary school, and focused preparation in senior secondary."
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        "data-lov-id": "src/pages/Academics.tsx:144:14",
                                        "data-lov-name": "p",
                                        "data-component-path": "src/pages/Academics.tsx",
                                        "data-component-line": "144",
                                        "data-component-file": "Academics.tsx",
                                        "data-component-name": "p",
                                        "data-component-content": "%7B%22text%22%3A%22The%20programme%20brings%20together%20CBSE-aligned%20curriculum%2C%20experiential%20learning%2C%20regular%20assessment%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20co-scholastic%20development%20and%20a%20disciplined%20school%20culture%20that%20helps%20every%20learner%20grow%20with%20confidence.%22%2C%22className%22%3A%22text-base%20lg%3Atext-lg%20text-foreground%2F80%20leading-relaxed%22%7D",
                                        className: "text-base lg:text-lg text-foreground/80 leading-relaxed",
                                        children: "The programme brings together CBSE-aligned curriculum, experiential learning, regular assessment, co-scholastic development and a disciplined school culture that helps every learner grow with confidence."
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV(motion.div, {
                                "data-lov-id": "src/pages/Academics.tsx:150:12",
                                "data-lov-name": "motion.div",
                                "data-component-path": "src/pages/Academics.tsx",
                                "data-component-line": "150",
                                "data-component-file": "Academics.tsx",
                                "data-component-name": "motion.div",
                                "data-component-content": "%7B%22className%22%3A%22rounded-2xl%20bg-indian-green%20text-white%20p-7%20md%3Ap-8%20shadow-xl%22%7D",
                                initial: "hidden",
                                whileInView: "visible",
                                viewport: {
                                    once: true,
                                    amount: 0.25
                                },
                                variants: fadeUp,
                                transition: {
                                    duration: 0.45,
                                    delay: 0.08
                                },
                                className: "rounded-2xl bg-indian-green text-white p-7 md:p-8 shadow-xl",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        "data-lov-id": "src/pages/Academics.tsx:158:14",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/pages/Academics.tsx",
                                        "data-component-line": "158",
                                        "data-component-file": "Academics.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20gap-3%20mb-6%22%7D",
                                        className: "flex items-center gap-3 mb-6",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/Academics.tsx:159:16",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/Academics.tsx",
                                                "data-component-line": "159",
                                                "data-component-file": "Academics.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22h-12%20w-12%20rounded-xl%20bg-white%2F15%20flex%20items-center%20justify-center%22%7D",
                                                className: "h-12 w-12 rounded-xl bg-white/15 flex items-center justify-center",
                                                children: /*#__PURE__*/ _jsxDEV(Sparkles, {
                                                    className: "h-6 w-6 text-golden-yellow"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                                lineNumber: 159,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/Academics.tsx:162:16",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/Academics.tsx",
                                                "data-component-line": "162",
                                                "data-component-file": "Academics.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%7D",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("h3", {
                                                        "data-lov-id": "src/pages/Academics.tsx:163:18",
                                                        "data-lov-name": "h3",
                                                        "data-component-path": "src/pages/Academics.tsx",
                                                        "data-component-line": "163",
                                                        "data-component-file": "Academics.tsx",
                                                        "data-component-name": "h3",
                                                        "data-component-content": "%7B%22text%22%3A%22Academic%20Strengths%22%2C%22className%22%3A%22text-xl%20font-bold%22%7D",
                                                        className: "text-xl font-bold",
                                                        children: "Academic Strengths"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("p", {
                                                        "data-lov-id": "src/pages/Academics.tsx:164:18",
                                                        "data-lov-name": "p",
                                                        "data-component-path": "src/pages/Academics.tsx",
                                                        "data-component-line": "164",
                                                        "data-component-file": "Academics.tsx",
                                                        "data-component-name": "p",
                                                        "data-component-content": "%7B%22text%22%3A%22Structured%2C%20student-centred%20learning%22%2C%22className%22%3A%22text-white%2F75%20text-sm%22%7D",
                                                        className: "text-white/75 text-sm",
                                                        children: "Structured, student-centred learning"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                                lineNumber: 162,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("ul", {
                                        "data-lov-id": "src/pages/Academics.tsx:167:14",
                                        "data-lov-name": "ul",
                                        "data-component-path": "src/pages/Academics.tsx",
                                        "data-component-line": "167",
                                        "data-component-file": "Academics.tsx",
                                        "data-component-name": "ul",
                                        "data-component-content": "%7B%22className%22%3A%22space-y-4%22%7D",
                                        className: "space-y-4",
                                        children: highlights.map((item)=>/*#__PURE__*/ _jsxDEV("li", {
                                                "data-lov-id": "src/pages/Academics.tsx:169:18",
                                                "data-lov-name": "li",
                                                "data-component-path": "src/pages/Academics.tsx",
                                                "data-component-line": "169",
                                                "data-component-file": "Academics.tsx",
                                                "data-component-name": "li",
                                                "data-component-content": "%7B%22className%22%3A%22flex%20items-start%20gap-3%20text-white%2F90%22%7D",
                                                className: "flex items-start gap-3 text-white/90",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(CheckCircle2, {
                                                        "data-lov-id": "src/pages/Academics.tsx:170:20",
                                                        "data-lov-name": "CheckCircle2",
                                                        "data-component-path": "src/pages/Academics.tsx",
                                                        "data-component-line": "170",
                                                        "data-component-file": "Academics.tsx",
                                                        "data-component-name": "CheckCircle2",
                                                        "data-component-content": "%7B%22className%22%3A%22h-5%20w-5%20text-golden-yellow%20shrink-0%20mt-0.5%22%7D",
                                                        className: "h-5 w-5 text-golden-yellow shrink-0 mt-0.5"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("span", {
                                                        "data-lov-id": "src/pages/Academics.tsx:171:20",
                                                        "data-lov-name": "span",
                                                        "data-component-path": "src/pages/Academics.tsx",
                                                        "data-component-line": "171",
                                                        "data-component-file": "Academics.tsx",
                                                        "data-component-name": "span",
                                                        "data-component-content": "%7B%7D",
                                                        children: item
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, item, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                                lineNumber: 169,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/Academics.tsx:180:6",
                "data-lov-name": "section",
                "data-component-path": "src/pages/Academics.tsx",
                "data-component-line": "180",
                "data-component-file": "Academics.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20bg-muted%2F30%22%7D",
                className: "py-16 bg-muted/30",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/Academics.tsx:181:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/Academics.tsx",
                    "data-component-line": "181",
                    "data-component-file": "Academics.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/Academics.tsx:182:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/Academics.tsx",
                            "data-component-line": "182",
                            "data-component-file": "Academics.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22text-center%20max-w-3xl%20mx-auto%20mb-12%22%7D",
                            className: "text-center max-w-3xl mx-auto mb-12",
                            children: [
                                /*#__PURE__*/ _jsxDEV("h2", {
                                    "data-lov-id": "src/pages/Academics.tsx:183:12",
                                    "data-lov-name": "h2",
                                    "data-component-path": "src/pages/Academics.tsx",
                                    "data-component-line": "183",
                                    "data-component-file": "Academics.tsx",
                                    "data-component-name": "h2",
                                    "data-component-content": "%7B%22text%22%3A%22Academic%20Stages%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20text-black%20mb-3%22%7D",
                                    className: "text-3xl md:text-4xl font-bold text-black mb-3",
                                    style: {
                                        fontFamily: "Poppins, sans-serif"
                                    },
                                    children: "Academic Stages"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                    lineNumber: 183,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/Academics.tsx:186:12",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/Academics.tsx",
                                    "data-component-line": "186",
                                    "data-component-file": "Academics.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22mx-auto%20h-%5B3px%5D%20w-16%20bg-indian-green%20rounded-full%22%7D",
                                    className: "mx-auto h-[3px] w-16 bg-indian-green rounded-full"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                            lineNumber: 182,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/Academics.tsx:188:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/Academics.tsx",
                            "data-component-line": "188",
                            "data-component-file": "Academics.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-2%20xl%3Agrid-cols-4%20gap-6%22%7D",
                            className: "grid md:grid-cols-2 xl:grid-cols-4 gap-6",
                            children: academicStages.map((stage, index)=>/*#__PURE__*/ _jsxDEV(motion.div, {
                                    "data-lov-id": "src/pages/Academics.tsx:190:14",
                                    "data-lov-name": "motion.div",
                                    "data-component-path": "src/pages/Academics.tsx",
                                    "data-component-line": "190",
                                    "data-component-file": "Academics.tsx",
                                    "data-component-name": "motion.div",
                                    "data-component-content": "%7B%7D",
                                    initial: {
                                        opacity: 0,
                                        y: 18
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        duration: 0.4,
                                        delay: index * 0.05
                                    },
                                    children: /*#__PURE__*/ _jsxDEV(Card, {
                                        "data-lov-id": "src/pages/Academics.tsx:197:16",
                                        "data-lov-name": "Card",
                                        "data-component-path": "src/pages/Academics.tsx",
                                        "data-component-line": "197",
                                        "data-component-file": "Academics.tsx",
                                        "data-component-name": "Card",
                                        "data-component-content": "%7B%22className%22%3A%22h-full%20border-indian-green%2F20%20hover%3Aborder-indian-green%20hover%3Ashadow-xl%20hover%3A-translate-y-1%20transition-all%22%7D",
                                        className: "h-full border-indian-green/20 hover:border-indian-green hover:shadow-xl hover:-translate-y-1 transition-all",
                                        children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                            "data-lov-id": "src/pages/Academics.tsx:198:18",
                                            "data-lov-name": "CardContent",
                                            "data-component-path": "src/pages/Academics.tsx",
                                            "data-component-line": "198",
                                            "data-component-file": "Academics.tsx",
                                            "data-component-name": "CardContent",
                                            "data-component-content": "%7B%22className%22%3A%22p-6%20flex%20flex-col%20h-full%22%7D",
                                            className: "p-6 flex flex-col h-full",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/Academics.tsx:199:20",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/Academics.tsx",
                                                    "data-component-line": "199",
                                                    "data-component-file": "Academics.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22h-14%20w-14%20rounded-2xl%20bg-indian-green%20flex%20items-center%20justify-center%20mb-5%22%7D",
                                                    className: "h-14 w-14 rounded-2xl bg-indian-green flex items-center justify-center mb-5",
                                                    children: /*#__PURE__*/ _jsxDEV(stage.icon, {
                                                        "data-lov-id": "src/pages/Academics.tsx:200:22",
                                                        "data-lov-name": "stage.icon",
                                                        "data-component-path": "src/pages/Academics.tsx",
                                                        "data-component-line": "200",
                                                        "data-component-file": "Academics.tsx",
                                                        "data-component-name": "stage.icon",
                                                        "data-component-content": "%7B%22className%22%3A%22h-7%20w-7%20text-white%22%7D",
                                                        className: "h-7 w-7 text-white"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/Academics.tsx:202:20",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/Academics.tsx",
                                                    "data-component-line": "202",
                                                    "data-component-file": "Academics.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22className%22%3A%22text-xs%20font-semibold%20uppercase%20tracking-%5B0.16em%5D%20text-indian-green%20mb-2%22%7D",
                                                    className: "text-xs font-semibold uppercase tracking-[0.16em] text-indian-green mb-2",
                                                    children: stage.grades
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("h3", {
                                                    "data-lov-id": "src/pages/Academics.tsx:205:20",
                                                    "data-lov-name": "h3",
                                                    "data-component-path": "src/pages/Academics.tsx",
                                                    "data-component-line": "205",
                                                    "data-component-file": "Academics.tsx",
                                                    "data-component-name": "h3",
                                                    "data-component-content": "%7B%22className%22%3A%22text-xl%20font-bold%20text-black%20mb-3%22%7D",
                                                    className: "text-xl font-bold text-black mb-3",
                                                    children: stage.title
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/Academics.tsx:206:20",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/Academics.tsx",
                                                    "data-component-line": "206",
                                                    "data-component-file": "Academics.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22className%22%3A%22text-sm%20text-foreground%2F75%20leading-relaxed%20mb-6%20flex-1%22%7D",
                                                    className: "text-sm text-foreground/75 leading-relaxed mb-6 flex-1",
                                                    children: stage.description
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV(Button, {
                                                    "data-lov-id": "src/pages/Academics.tsx:207:20",
                                                    "data-lov-name": "Button",
                                                    "data-component-path": "src/pages/Academics.tsx",
                                                    "data-component-line": "207",
                                                    "data-component-file": "Academics.tsx",
                                                    "data-component-name": "Button",
                                                    "data-component-content": "%7B%22className%22%3A%22bg-indian-green%20hover%3Abg-saffron-orange%20text-white%20w-full%22%7D",
                                                    asChild: true,
                                                    className: "bg-indian-green hover:bg-saffron-orange text-white w-full",
                                                    children: /*#__PURE__*/ _jsxDEV(Link, {
                                                        "data-lov-id": "src/pages/Academics.tsx:208:22",
                                                        "data-lov-name": "Link",
                                                        "data-component-path": "src/pages/Academics.tsx",
                                                        "data-component-line": "208",
                                                        "data-component-file": "Academics.tsx",
                                                        "data-component-name": "Link",
                                                        "data-component-content": "%7B%22text%22%3A%22Explore%22%7D",
                                                        to: stage.link,
                                                        children: [
                                                            "Explore",
                                                            /*#__PURE__*/ _jsxDEV(ArrowRight, {
                                                                "data-lov-id": "src/pages/Academics.tsx:210:24",
                                                                "data-lov-name": "ArrowRight",
                                                                "data-component-path": "src/pages/Academics.tsx",
                                                                "data-component-line": "210",
                                                                "data-component-file": "Academics.tsx",
                                                                "data-component-name": "ArrowRight",
                                                                "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%20ml-2%22%7D",
                                                                className: "h-4 w-4 ml-2"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                                                lineNumber: 210,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                            lineNumber: 198,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                        lineNumber: 197,
                                        columnNumber: 17
                                    }, this)
                                }, stage.title, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                    lineNumber: 190,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                    lineNumber: 181,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/Academics.tsx:221:6",
                "data-lov-name": "section",
                "data-component-path": "src/pages/Academics.tsx",
                "data-component-line": "221",
                "data-component-file": "Academics.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20lg%3Apy-20%20bg-background%22%7D",
                className: "py-16 lg:py-20 bg-background",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/Academics.tsx:222:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/Academics.tsx",
                    "data-component-line": "222",
                    "data-component-file": "Academics.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/Academics.tsx:223:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/Academics.tsx",
                        "data-component-line": "223",
                        "data-component-file": "Academics.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22grid%20lg%3Agrid-cols-%5B0.85fr_1.15fr%5D%20gap-10%20lg%3Agap-12%20items-start%22%7D",
                        className: "grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-12 items-start",
                        children: [
                            /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/pages/Academics.tsx:224:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/pages/Academics.tsx",
                                "data-component-line": "224",
                                "data-component-file": "Academics.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%7D",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        "data-lov-id": "src/pages/Academics.tsx:225:14",
                                        "data-lov-name": "p",
                                        "data-component-path": "src/pages/Academics.tsx",
                                        "data-component-line": "225",
                                        "data-component-file": "Academics.tsx",
                                        "data-component-name": "p",
                                        "data-component-content": "%7B%22text%22%3A%22Framework%22%2C%22className%22%3A%22text-xs%20font-semibold%20uppercase%20tracking-%5B0.24em%5D%20text-indian-green%20mb-3%22%7D",
                                        className: "text-xs font-semibold uppercase tracking-[0.24em] text-indian-green mb-3",
                                        children: "Framework"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("h2", {
                                        "data-lov-id": "src/pages/Academics.tsx:228:14",
                                        "data-lov-name": "h2",
                                        "data-component-path": "src/pages/Academics.tsx",
                                        "data-component-line": "228",
                                        "data-component-file": "Academics.tsx",
                                        "data-component-name": "h2",
                                        "data-component-content": "%7B%22text%22%3A%22Curriculum%2C%20Calendar%20%26%20Achievements%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20text-black%20mb-4%22%7D",
                                        className: "text-3xl md:text-4xl font-bold text-black mb-4",
                                        style: {
                                            fontFamily: "Poppins, sans-serif"
                                        },
                                        children: "Curriculum, Calendar & Achievements"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                        lineNumber: 228,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        "data-lov-id": "src/pages/Academics.tsx:231:14",
                                        "data-lov-name": "p",
                                        "data-component-path": "src/pages/Academics.tsx",
                                        "data-component-line": "231",
                                        "data-component-file": "Academics.tsx",
                                        "data-component-name": "p",
                                        "data-component-content": "%7B%22text%22%3A%22The%20academic%20programme%20is%20supported%20by%20clear%20curriculum%20planning%2C%20a%20well-structured%20yearly%20calendar%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20and%20a%20culture%20that%20recognises%20sustained%20student%20achievement%20across%20disciplines.%22%2C%22className%22%3A%22text-foreground%2F75%20leading-relaxed%20mb-6%22%7D",
                                        className: "text-foreground/75 leading-relaxed mb-6",
                                        children: "The academic programme is supported by clear curriculum planning, a well-structured yearly calendar, and a culture that recognises sustained student achievement across disciplines."
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                        lineNumber: 231,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        "data-lov-id": "src/pages/Academics.tsx:235:14",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/pages/Academics.tsx",
                                        "data-component-line": "235",
                                        "data-component-file": "Academics.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22className%22%3A%22rounded-2xl%20border%20border-indian-green%2F20%20bg-indian-green%2F5%20p-6%22%7D",
                                        className: "rounded-2xl border border-indian-green/20 bg-indian-green/5 p-6",
                                        children: /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/pages/Academics.tsx:236:16",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/pages/Academics.tsx",
                                            "data-component-line": "236",
                                            "data-component-file": "Academics.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20gap-3%22%7D",
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV(Target, {
                                                    "data-lov-id": "src/pages/Academics.tsx:237:18",
                                                    "data-lov-name": "Target",
                                                    "data-component-path": "src/pages/Academics.tsx",
                                                    "data-component-line": "237",
                                                    "data-component-file": "Academics.tsx",
                                                    "data-component-name": "Target",
                                                    "data-component-content": "%7B%22className%22%3A%22h-8%20w-8%20text-indian-green%22%7D",
                                                    className: "h-8 w-8 text-indian-green"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/Academics.tsx:238:18",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/Academics.tsx",
                                                    "data-component-line": "238",
                                                    "data-component-file": "Academics.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%7D",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("h3", {
                                                            "data-lov-id": "src/pages/Academics.tsx:239:20",
                                                            "data-lov-name": "h3",
                                                            "data-component-path": "src/pages/Academics.tsx",
                                                            "data-component-line": "239",
                                                            "data-component-file": "Academics.tsx",
                                                            "data-component-name": "h3",
                                                            "data-component-content": "%7B%22text%22%3A%22Learning%20with%20Purpose%22%2C%22className%22%3A%22font-bold%20text-black%22%7D",
                                                            className: "font-bold text-black",
                                                            children: "Learning with Purpose"
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                                            lineNumber: 239,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("p", {
                                                            "data-lov-id": "src/pages/Academics.tsx:240:20",
                                                            "data-lov-name": "p",
                                                            "data-component-path": "src/pages/Academics.tsx",
                                                            "data-component-line": "240",
                                                            "data-component-file": "Academics.tsx",
                                                            "data-component-name": "p",
                                                            "data-component-content": "%7B%22text%22%3A%22Every%20section%20links%20to%20detailed%20information%20already%20available%20on%20the%20website.%22%2C%22className%22%3A%22text-sm%20text-foreground%2F70%22%7D",
                                                            className: "text-sm text-foreground/70",
                                                            children: "Every section links to detailed information already available on the website."
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                                            lineNumber: 240,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                                    lineNumber: 238,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                            lineNumber: 236,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                        lineNumber: 235,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                lineNumber: 224,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/pages/Academics.tsx:248:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/pages/Academics.tsx",
                                "data-component-line": "248",
                                "data-component-file": "Academics.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22grid%20sm%3Agrid-cols-2%20gap-6%22%7D",
                                className: "grid sm:grid-cols-2 gap-6",
                                children: academicSystems.map((item, index)=>/*#__PURE__*/ _jsxDEV(motion.div, {
                                        "data-lov-id": "src/pages/Academics.tsx:250:16",
                                        "data-lov-name": "motion.div",
                                        "data-component-path": "src/pages/Academics.tsx",
                                        "data-component-line": "250",
                                        "data-component-file": "Academics.tsx",
                                        "data-component-name": "motion.div",
                                        "data-component-content": "%7B%7D",
                                        initial: {
                                            opacity: 0,
                                            y: 18
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        transition: {
                                            duration: 0.4,
                                            delay: index * 0.05
                                        },
                                        className: index === 2 ? "sm:col-span-2" : "",
                                        children: /*#__PURE__*/ _jsxDEV(Link, {
                                            "data-lov-id": "src/pages/Academics.tsx:258:18",
                                            "data-lov-name": "Link",
                                            "data-component-path": "src/pages/Academics.tsx",
                                            "data-component-line": "258",
                                            "data-component-file": "Academics.tsx",
                                            "data-component-name": "Link",
                                            "data-component-content": "%7B%22className%22%3A%22group%20block%20h-full%22%7D",
                                            to: item.link,
                                            className: "group block h-full",
                                            children: /*#__PURE__*/ _jsxDEV(Card, {
                                                "data-lov-id": "src/pages/Academics.tsx:259:20",
                                                "data-lov-name": "Card",
                                                "data-component-path": "src/pages/Academics.tsx",
                                                "data-component-line": "259",
                                                "data-component-file": "Academics.tsx",
                                                "data-component-name": "Card",
                                                "data-component-content": "%7B%22className%22%3A%22h-full%20border-indian-green%2F20%20hover%3Ashadow-lg%20transition-all%22%7D",
                                                className: "h-full border-indian-green/20 hover:shadow-lg transition-all",
                                                children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                                    "data-lov-id": "src/pages/Academics.tsx:260:22",
                                                    "data-lov-name": "CardContent",
                                                    "data-component-path": "src/pages/Academics.tsx",
                                                    "data-component-line": "260",
                                                    "data-component-file": "Academics.tsx",
                                                    "data-component-name": "CardContent",
                                                    "data-component-content": "%7B%22className%22%3A%22p-6%22%7D",
                                                    className: "p-6",
                                                    children: /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/pages/Academics.tsx:261:24",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/Academics.tsx",
                                                        "data-component-line": "261",
                                                        "data-component-file": "Academics.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%22className%22%3A%22flex%20items-start%20gap-4%22%7D",
                                                        className: "flex items-start gap-4",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("div", {
                                                                "data-lov-id": "src/pages/Academics.tsx:262:26",
                                                                "data-lov-name": "div",
                                                                "data-component-path": "src/pages/Academics.tsx",
                                                                "data-component-line": "262",
                                                                "data-component-file": "Academics.tsx",
                                                                "data-component-name": "div",
                                                                "data-component-content": "%7B%22className%22%3A%22h-12%20w-12%20rounded-xl%20bg-indian-green%2F10%20border%20border-indian-green%2F25%20flex%20items-center%20justify-center%20shrink-0%20group-hover%3Abg-indian-green%20transition-colors%22%7D",
                                                                className: "h-12 w-12 rounded-xl bg-indian-green/10 border border-indian-green/25 flex items-center justify-center shrink-0 group-hover:bg-indian-green transition-colors",
                                                                children: /*#__PURE__*/ _jsxDEV(item.icon, {
                                                                    "data-lov-id": "src/pages/Academics.tsx:263:28",
                                                                    "data-lov-name": "item.icon",
                                                                    "data-component-path": "src/pages/Academics.tsx",
                                                                    "data-component-line": "263",
                                                                    "data-component-file": "Academics.tsx",
                                                                    "data-component-name": "item.icon",
                                                                    "data-component-content": "%7B%22className%22%3A%22h-6%20w-6%20text-indian-green%20group-hover%3Atext-white%20transition-colors%22%7D",
                                                                    className: "h-6 w-6 text-indian-green group-hover:text-white transition-colors"
                                                                }, void 0, false, {
                                                                    fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                                                    lineNumber: 263,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                                                lineNumber: 262,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("div", {
                                                                "data-lov-id": "src/pages/Academics.tsx:265:26",
                                                                "data-lov-name": "div",
                                                                "data-component-path": "src/pages/Academics.tsx",
                                                                "data-component-line": "265",
                                                                "data-component-file": "Academics.tsx",
                                                                "data-component-name": "div",
                                                                "data-component-content": "%7B%7D",
                                                                children: [
                                                                    /*#__PURE__*/ _jsxDEV("h3", {
                                                                        "data-lov-id": "src/pages/Academics.tsx:266:28",
                                                                        "data-lov-name": "h3",
                                                                        "data-component-path": "src/pages/Academics.tsx",
                                                                        "data-component-line": "266",
                                                                        "data-component-file": "Academics.tsx",
                                                                        "data-component-name": "h3",
                                                                        "data-component-content": "%7B%22className%22%3A%22font-bold%20text-black%20mb-2%20group-hover%3Atext-indian-green%20transition-colors%22%7D",
                                                                        className: "font-bold text-black mb-2 group-hover:text-indian-green transition-colors",
                                                                        children: item.title
                                                                    }, void 0, false, {
                                                                        fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                                                        lineNumber: 266,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ _jsxDEV("p", {
                                                                        "data-lov-id": "src/pages/Academics.tsx:269:28",
                                                                        "data-lov-name": "p",
                                                                        "data-component-path": "src/pages/Academics.tsx",
                                                                        "data-component-line": "269",
                                                                        "data-component-file": "Academics.tsx",
                                                                        "data-component-name": "p",
                                                                        "data-component-content": "%7B%22className%22%3A%22text-sm%20text-foreground%2F75%20leading-relaxed%22%7D",
                                                                        className: "text-sm text-foreground/75 leading-relaxed",
                                                                        children: item.description
                                                                    }, void 0, false, {
                                                                        fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                                                        lineNumber: 269,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                                                lineNumber: 265,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                                        lineNumber: 261,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                                lineNumber: 259,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                            lineNumber: 258,
                                            columnNumber: 19
                                        }, this)
                                    }, item.title, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                        lineNumber: 250,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                lineNumber: 248,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                        lineNumber: 223,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                    lineNumber: 222,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/Academics.tsx:282:6",
                "data-lov-name": "section",
                "data-component-path": "src/pages/Academics.tsx",
                "data-component-line": "282",
                "data-component-file": "Academics.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20bg-muted%2F30%22%7D",
                className: "py-16 bg-muted/30",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/Academics.tsx:283:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/Academics.tsx",
                    "data-component-line": "283",
                    "data-component-file": "Academics.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/Academics.tsx:284:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/Academics.tsx",
                            "data-component-line": "284",
                            "data-component-file": "Academics.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22text-center%20max-w-3xl%20mx-auto%20mb-12%22%7D",
                            className: "text-center max-w-3xl mx-auto mb-12",
                            children: [
                                /*#__PURE__*/ _jsxDEV("h2", {
                                    "data-lov-id": "src/pages/Academics.tsx:285:12",
                                    "data-lov-name": "h2",
                                    "data-component-path": "src/pages/Academics.tsx",
                                    "data-component-line": "285",
                                    "data-component-file": "Academics.tsx",
                                    "data-component-name": "h2",
                                    "data-component-content": "%7B%22text%22%3A%22Academic%20Policies%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20text-black%20mb-3%22%7D",
                                    className: "text-3xl md:text-4xl font-bold text-black mb-3",
                                    style: {
                                        fontFamily: "Poppins, sans-serif"
                                    },
                                    children: "Academic Policies"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                    lineNumber: 285,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/Academics.tsx:288:12",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/Academics.tsx",
                                    "data-component-line": "288",
                                    "data-component-file": "Academics.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22mx-auto%20h-%5B3px%5D%20w-16%20bg-indian-green%20rounded-full%20mb-4%22%7D",
                                    className: "mx-auto h-[3px] w-16 bg-indian-green rounded-full mb-4"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                    lineNumber: 288,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    "data-lov-id": "src/pages/Academics.tsx:289:12",
                                    "data-lov-name": "p",
                                    "data-component-path": "src/pages/Academics.tsx",
                                    "data-component-line": "289",
                                    "data-component-file": "Academics.tsx",
                                    "data-component-name": "p",
                                    "data-component-content": "%7B%22text%22%3A%22Clear%20expectations%20help%20students%20remain%20regular%2C%20responsible%20and%20prepared%20for%20every%20assessment.%22%2C%22className%22%3A%22text-foreground%2F75%22%7D",
                                    className: "text-foreground/75",
                                    children: "Clear expectations help students remain regular, responsible and prepared for every assessment."
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                    lineNumber: 289,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                            lineNumber: 284,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/Academics.tsx:293:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/Academics.tsx",
                            "data-component-line": "293",
                            "data-component-file": "Academics.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-2%20gap-6%22%7D",
                            className: "grid md:grid-cols-2 gap-6",
                            children: policyLinks.map((item, index)=>/*#__PURE__*/ _jsxDEV(motion.div, {
                                    "data-lov-id": "src/pages/Academics.tsx:295:14",
                                    "data-lov-name": "motion.div",
                                    "data-component-path": "src/pages/Academics.tsx",
                                    "data-component-line": "295",
                                    "data-component-file": "Academics.tsx",
                                    "data-component-name": "motion.div",
                                    "data-component-content": "%7B%7D",
                                    initial: {
                                        opacity: 0,
                                        y: 18
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        duration: 0.4,
                                        delay: index * 0.05
                                    },
                                    children: /*#__PURE__*/ _jsxDEV(Link, {
                                        "data-lov-id": "src/pages/Academics.tsx:302:16",
                                        "data-lov-name": "Link",
                                        "data-component-path": "src/pages/Academics.tsx",
                                        "data-component-line": "302",
                                        "data-component-file": "Academics.tsx",
                                        "data-component-name": "Link",
                                        "data-component-content": "%7B%22className%22%3A%22group%20block%20h-full%22%7D",
                                        to: item.link,
                                        className: "group block h-full",
                                        children: /*#__PURE__*/ _jsxDEV(Card, {
                                            "data-lov-id": "src/pages/Academics.tsx:303:18",
                                            "data-lov-name": "Card",
                                            "data-component-path": "src/pages/Academics.tsx",
                                            "data-component-line": "303",
                                            "data-component-file": "Academics.tsx",
                                            "data-component-name": "Card",
                                            "data-component-content": "%7B%22className%22%3A%22h-full%20border-l-4%20border-l-indian-green%20hover%3Ashadow-lg%20transition-all%22%7D",
                                            className: "h-full border-l-4 border-l-indian-green hover:shadow-lg transition-all",
                                            children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                                "data-lov-id": "src/pages/Academics.tsx:304:20",
                                                "data-lov-name": "CardContent",
                                                "data-component-path": "src/pages/Academics.tsx",
                                                "data-component-line": "304",
                                                "data-component-file": "Academics.tsx",
                                                "data-component-name": "CardContent",
                                                "data-component-content": "%7B%22className%22%3A%22p-6%20flex%20gap-4%22%7D",
                                                className: "p-6 flex gap-4",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/pages/Academics.tsx:305:22",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/Academics.tsx",
                                                        "data-component-line": "305",
                                                        "data-component-file": "Academics.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%22className%22%3A%22h-12%20w-12%20rounded-xl%20bg-indian-green%20flex%20items-center%20justify-center%20shrink-0%22%7D",
                                                        className: "h-12 w-12 rounded-xl bg-indian-green flex items-center justify-center shrink-0",
                                                        children: /*#__PURE__*/ _jsxDEV(item.icon, {
                                                            "data-lov-id": "src/pages/Academics.tsx:306:24",
                                                            "data-lov-name": "item.icon",
                                                            "data-component-path": "src/pages/Academics.tsx",
                                                            "data-component-line": "306",
                                                            "data-component-file": "Academics.tsx",
                                                            "data-component-name": "item.icon",
                                                            "data-component-content": "%7B%22className%22%3A%22h-6%20w-6%20text-white%22%7D",
                                                            className: "h-6 w-6 text-white"
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                                            lineNumber: 306,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                                        lineNumber: 305,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/pages/Academics.tsx:308:22",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/Academics.tsx",
                                                        "data-component-line": "308",
                                                        "data-component-file": "Academics.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%7D",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("h3", {
                                                                "data-lov-id": "src/pages/Academics.tsx:309:24",
                                                                "data-lov-name": "h3",
                                                                "data-component-path": "src/pages/Academics.tsx",
                                                                "data-component-line": "309",
                                                                "data-component-file": "Academics.tsx",
                                                                "data-component-name": "h3",
                                                                "data-component-content": "%7B%22className%22%3A%22text-lg%20font-bold%20text-black%20mb-2%20group-hover%3Atext-indian-green%20transition-colors%22%7D",
                                                                className: "text-lg font-bold text-black mb-2 group-hover:text-indian-green transition-colors",
                                                                children: item.title
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                                                lineNumber: 309,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                "data-lov-id": "src/pages/Academics.tsx:312:24",
                                                                "data-lov-name": "p",
                                                                "data-component-path": "src/pages/Academics.tsx",
                                                                "data-component-line": "312",
                                                                "data-component-file": "Academics.tsx",
                                                                "data-component-name": "p",
                                                                "data-component-content": "%7B%22className%22%3A%22text-sm%20text-foreground%2F75%20leading-relaxed%22%7D",
                                                                className: "text-sm text-foreground/75 leading-relaxed",
                                                                children: item.description
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                                                lineNumber: 312,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                                        lineNumber: 308,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                                lineNumber: 304,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                            lineNumber: 303,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                        lineNumber: 302,
                                        columnNumber: 17
                                    }, this)
                                }, item.title, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                    lineNumber: 295,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                            lineNumber: 293,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                    lineNumber: 283,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                lineNumber: 282,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/Academics.tsx:323:6",
                "data-lov-name": "section",
                "data-component-path": "src/pages/Academics.tsx",
                "data-component-line": "323",
                "data-component-file": "Academics.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-14%20bg-indian-green%20text-white%22%7D",
                className: "py-14 bg-indian-green text-white",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/Academics.tsx:324:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/Academics.tsx",
                    "data-component-line": "324",
                    "data-component-file": "Academics.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20text-center%20max-w-3xl%22%7D",
                    className: "container mx-auto px-4 text-center max-w-3xl",
                    children: [
                        /*#__PURE__*/ _jsxDEV(BarChart3, {
                            "data-lov-id": "src/pages/Academics.tsx:325:10",
                            "data-lov-name": "BarChart3",
                            "data-component-path": "src/pages/Academics.tsx",
                            "data-component-line": "325",
                            "data-component-file": "Academics.tsx",
                            "data-component-name": "BarChart3",
                            "data-component-content": "%7B%22className%22%3A%22h-11%20w-11%20mx-auto%20mb-4%20text-golden-yellow%22%7D",
                            className: "h-11 w-11 mx-auto mb-4 text-golden-yellow"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                            lineNumber: 325,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("h2", {
                            "data-lov-id": "src/pages/Academics.tsx:326:10",
                            "data-lov-name": "h2",
                            "data-component-path": "src/pages/Academics.tsx",
                            "data-component-line": "326",
                            "data-component-file": "Academics.tsx",
                            "data-component-name": "h2",
                            "data-component-content": "%7B%22text%22%3A%22Explore%20the%20Admission%20Process%22%2C%22className%22%3A%22text-2xl%20md%3Atext-3xl%20font-bold%20mb-3%22%7D",
                            className: "text-2xl md:text-3xl font-bold mb-3",
                            style: {
                                fontFamily: "Poppins, sans-serif"
                            },
                            children: "Explore the Admission Process"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                            lineNumber: 326,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("p", {
                            "data-lov-id": "src/pages/Academics.tsx:329:10",
                            "data-lov-name": "p",
                            "data-component-path": "src/pages/Academics.tsx",
                            "data-component-line": "329",
                            "data-component-file": "Academics.tsx",
                            "data-component-name": "p",
                            "data-component-content": "%7B%22text%22%3A%22Learn%20how%20to%20apply%2C%20review%20eligibility%20criteria%2C%20and%20understand%20the%20next%20steps%20for%20joining%20SJRPS-HBR.%22%2C%22className%22%3A%22text-white%2F85%20mb-7%22%7D",
                            className: "text-white/85 mb-7",
                            children: "Learn how to apply, review eligibility criteria, and understand the next steps for joining SJRPS-HBR."
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                            lineNumber: 329,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV(Button, {
                            "data-lov-id": "src/pages/Academics.tsx:332:10",
                            "data-lov-name": "Button",
                            "data-component-path": "src/pages/Academics.tsx",
                            "data-component-line": "332",
                            "data-component-file": "Academics.tsx",
                            "data-component-name": "Button",
                            "data-component-content": "%7B%22className%22%3A%22bg-white%20text-indian-green%20hover%3Abg-golden-yellow%20hover%3Atext-white%20font-semibold%22%7D",
                            asChild: true,
                            size: "lg",
                            className: "bg-white text-indian-green hover:bg-golden-yellow hover:text-white font-semibold",
                            children: /*#__PURE__*/ _jsxDEV(Link, {
                                "data-lov-id": "src/pages/Academics.tsx:333:12",
                                "data-lov-name": "Link",
                                "data-component-path": "src/pages/Academics.tsx",
                                "data-component-line": "333",
                                "data-component-file": "Academics.tsx",
                                "data-component-name": "Link",
                                "data-component-content": "%7B%22text%22%3A%22Admission%20Process%22%7D",
                                to: "/admissions/admissions-process",
                                children: [
                                    "Admission Process",
                                    /*#__PURE__*/ _jsxDEV(PenLine, {
                                        "data-lov-id": "src/pages/Academics.tsx:335:14",
                                        "data-lov-name": "PenLine",
                                        "data-component-path": "src/pages/Academics.tsx",
                                        "data-component-line": "335",
                                        "data-component-file": "Academics.tsx",
                                        "data-component-name": "PenLine",
                                        "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%20ml-2%22%7D",
                                        className: "h-4 w-4 ml-2"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                        lineNumber: 335,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                                lineNumber: 333,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                            lineNumber: 332,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                    lineNumber: 324,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
                lineNumber: 323,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/sjrsh916/public_html/src/pages/Academics.tsx",
        lineNumber: 120,
        columnNumber: 5
    }, this);
};
_c = Academics;
export default Academics;
var _c;
$RefreshReg$(_c, "Academics");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/pages/Academics.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/pages/Academics.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBT0EsWUFBWSxzQkFBcUI7QUFDeEMsT0FBT0MsY0FBYyx3QkFBdUI7QUFDNUMsU0FBU0MsSUFBSSxFQUFFQyxXQUFXLFFBQVEsdUJBQXNCO0FBQ3hELFNBQVNDLE1BQU0sUUFBUSx5QkFBd0I7QUFDL0MsU0FBU0MsTUFBTSxRQUFRLGdCQUFlO0FBQ3RDLFNBQVNDLElBQUksUUFBUSxtQkFBa0I7QUFDdkMsU0FDRUMsVUFBVSxFQUNWQyxLQUFLLEVBQ0xDLElBQUksRUFDSkMsU0FBUyxFQUNUQyxRQUFRLEVBQ1JDLFlBQVksRUFDWkMsWUFBWSxFQUNaQyxjQUFjLEVBQ2RDLFFBQVEsRUFDUkMsYUFBYSxFQUNiQyxNQUFNLEVBQ05DLE9BQU8sRUFDUEMsTUFBTSxFQUNOQyxXQUFXLEVBQ1hDLFFBQVEsRUFDUkMsTUFBTSxFQUNOQyxLQUFLLFFBQ0EsZUFBYztBQUVyQixNQUFNQyxpQkFBaUI7SUFDckI7UUFDRUMsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLGFBQWE7UUFDYkMsTUFBTTtRQUNOQyxNQUFNcEI7SUFDUjtJQUNBO1FBQ0VnQixPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsYUFBYTtRQUNiQyxNQUFNO1FBQ05DLE1BQU1sQjtJQUNSO0lBQ0E7UUFDRWMsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLGFBQWE7UUFDYkMsTUFBTTtRQUNOQyxNQUFNVjtJQUNSO0lBQ0E7UUFDRU0sT0FBTztRQUNQQyxRQUFRO1FBQ1JDLGFBQWE7UUFDYkMsTUFBTTtRQUNOQyxNQUFNYjtJQUNSO0NBQ0Q7QUFFRCxNQUFNYyxrQkFBa0I7SUFDdEI7UUFDRUwsT0FBTztRQUNQRSxhQUFhO1FBQ2JDLE1BQU07UUFDTkMsTUFBTVo7SUFDUjtJQUNBO1FBQ0VRLE9BQU87UUFDUEUsYUFBYTtRQUNiQyxNQUFNO1FBQ05DLE1BQU1qQjtJQUNSO0lBQ0E7UUFDRWEsT0FBTztRQUNQRSxhQUFhO1FBQ2JDLE1BQU07UUFDTkMsTUFBTXJCO0lBQ1I7Q0FDRDtBQUVELE1BQU11QixjQUFjO0lBQ2xCO1FBQ0VOLE9BQU87UUFDUEUsYUFBYTtRQUNiQyxNQUFNO1FBQ05DLE1BQU1OO0lBQ1I7SUFDQTtRQUNFRSxPQUFPO1FBQ1BFLGFBQWE7UUFDYkMsTUFBTTtRQUNOQyxNQUFNVDtJQUNSO0lBQ0E7UUFDRUssT0FBTztRQUNQRSxhQUFhO1FBQ2JDLE1BQU07UUFDTkMsTUFBTWQ7SUFDUjtJQUNBO1FBQ0VVLE9BQU87UUFDUEUsYUFBYTtRQUNiQyxNQUFNO1FBQ05DLE1BQU1mO0lBQ1I7Q0FDRDtBQUVELE1BQU1rQixhQUFhO0lBQ2pCO0lBQ0E7SUFDQTtJQUNBO0NBQ0Q7QUFFRCxNQUFNQyxTQUFTO0lBQ2JDLFFBQVE7UUFBRUMsU0FBUztRQUFHQyxHQUFHO0lBQUc7SUFDNUJDLFNBQVM7UUFBRUYsU0FBUztRQUFHQyxHQUFHO0lBQUU7QUFDOUI7QUFFQSxNQUFNRSxZQUFZO0lBQ2hCLHFCQUNFLFFBQUN0QztRQUFLdUMsZUFBQTtRQUFBQyxpQkFBQTtRQUFBQyx1QkFBQTtRQUFBQyx1QkFBQTtRQUFBQyx1QkFBQTtRQUFBQyx1QkFBQTtRQUFBQywwQkFBQTs7MEJBQ0osUUFBQzVDO2dCQUFPc0MsZUFBQTtnQkFBQUMsaUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQywwQkFBQTtnQkFBRXBCLE9BQU07Z0JBQVlxQixhQUFhO29CQUFDO3dCQUFFQyxPQUFPO29CQUFZO2lCQUFFOzs7Ozs7MEJBRWpFLFFBQUNDO2dCQUFNVCxlQUFBO2dCQUFBQyxpQkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLDBCQUFBO2dCQUFFSSxXQUFVOzBCQUNqQixzQkFBQ0M7b0JBQUVYLGVBQUE7b0JBQUFDLGlCQUFBO29CQUFBQyx1QkFBQTtvQkFBQUMsdUJBQUE7b0JBQUFDLHVCQUFBO29CQUFBQyx1QkFBQTtvQkFBQUMsMEJBQUE7b0JBQUVJLFdBQVU7OEJBQ2Isc0JBQUNDO3dCQUFFWCxlQUFBO3dCQUFBQyxpQkFBQTt3QkFBQUMsdUJBQUE7d0JBQUFDLHVCQUFBO3dCQUFBQyx1QkFBQTt3QkFBQUMsdUJBQUE7d0JBQUFDLDBCQUFBO3dCQUFFSSxXQUFVOzswQ0FDYixRQUFDNUMsT0FBTzZDLEdBQUU7Z0NBQUFYLGVBQUE7Z0NBQUFDLGlCQUFBO2dDQUFBQyx1QkFBQTtnQ0FBQUMsdUJBQUE7Z0NBQUFDLHVCQUFBO2dDQUFBQyx1QkFBQTtnQ0FBQUMsMEJBQUE7Z0NBQ1JNLFNBQVE7Z0NBQ1JDLGFBQVk7Z0NBQ1pDLFVBQVU7b0NBQUVDLE1BQU07b0NBQU1DLFFBQVE7Z0NBQUs7Z0NBQ3JDQyxVQUFVdkI7Z0NBQ1Z3QixZQUFZO29DQUFFQyxVQUFVO2dDQUFLOztrREFFN0IsUUFBQ0M7d0NBQUFwQixlQUFBO3dDQUFBQyxpQkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLHVCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLDBCQUFBO3dDQUFFSSxXQUFVO2tEQUEwRTs7Ozs7O2tEQUd2RixRQUFDVzt3Q0FBQ3JCLGVBQUE7d0NBQUFDLGlCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLHVCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsMEJBQUE7d0NBQUVJLFdBQVU7d0NBQWlEWSxPQUFPOzRDQUFFQyxZQUFZO3dDQUFzQjtrREFBRTs7Ozs7O2tEQUc1RyxRQUFDSDt3Q0FBQXBCLGVBQUE7d0NBQUFDLGlCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLHVCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsMEJBQUE7d0NBQUVJLFdBQVU7a0RBQThEOzs7Ozs7a0RBSzNFLFFBQUNVO3dDQUFBcEIsZUFBQTt3Q0FBQUMsaUJBQUE7d0NBQUFDLHVCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLHVCQUFBO3dDQUFBQywwQkFBQTt3Q0FBRUksV0FBVTtrREFBeUQ7Ozs7Ozs7Ozs7OzswQ0FNeEUsUUFBQzVDLE9BQU82QyxHQUFFO2dDQUFBWCxlQUFBO2dDQUFBQyxpQkFBQTtnQ0FBQUMsdUJBQUE7Z0NBQUFDLHVCQUFBO2dDQUFBQyx1QkFBQTtnQ0FBQUMsdUJBQUE7Z0NBQUFDLDBCQUFBO2dDQUNSTSxTQUFRO2dDQUNSQyxhQUFZO2dDQUNaQyxVQUFVO29DQUFFQyxNQUFNO29DQUFNQyxRQUFRO2dDQUFLO2dDQUNyQ0MsVUFBVXZCO2dDQUNWd0IsWUFBWTtvQ0FBRUMsVUFBVTtvQ0FBTUssT0FBTztnQ0FBSztnQ0FDMUNkLFdBQVU7O2tEQUVWLFFBQUNDO3dDQUFFWCxlQUFBO3dDQUFBQyxpQkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLHVCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLDBCQUFBO3dDQUFFSSxXQUFVOzswREFDYixRQUFDQztnREFBRVgsZUFBQTtnREFBQUMsaUJBQUE7Z0RBQUFDLHVCQUFBO2dEQUFBQyx1QkFBQTtnREFBQUMsdUJBQUE7Z0RBQUFDLHVCQUFBO2dEQUFBQywwQkFBQTtnREFBRUksV0FBVTswREFDYixzQkFBQzVCO29EQUFTNEIsV0FBVTs7Ozs7Ozs7Ozs7MERBRXRCLFFBQUNDO2dEQUFFWCxlQUFBO2dEQUFBQyxpQkFBQTtnREFBQUMsdUJBQUE7Z0RBQUFDLHVCQUFBO2dEQUFBQyx1QkFBQTtnREFBQUMsdUJBQUE7Z0RBQUFDLDBCQUFBOztrRUFDRCxRQUFDbUI7d0RBQUN6QixlQUFBO3dEQUFBQyxpQkFBQTt3REFBQUMsdUJBQUE7d0RBQUFDLHVCQUFBO3dEQUFBQyx1QkFBQTt3REFBQUMsdUJBQUE7d0RBQUFDLDBCQUFBO3dEQUFFSSxXQUFVO2tFQUFvQjs7Ozs7O2tFQUNsQyxRQUFDVTt3REFBQXBCLGVBQUE7d0RBQUFDLGlCQUFBO3dEQUFBQyx1QkFBQTt3REFBQUMsdUJBQUE7d0RBQUFDLHVCQUFBO3dEQUFBQyx1QkFBQTt3REFBQUMsMEJBQUE7d0RBQUVJLFdBQVU7a0VBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBR3pDLFFBQUNnQjt3Q0FBQzFCLGVBQUE7d0NBQUFDLGlCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLHVCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsMEJBQUE7d0NBQUVJLFdBQVU7a0RBQ1hqQixXQUFXa0MsR0FBRyxDQUFDLENBQUNDLHFCQUNmLFFBQUNDO2dEQUFDN0IsZUFBQTtnREFBQUMsaUJBQUE7Z0RBQUFDLHVCQUFBO2dEQUFBQyx1QkFBQTtnREFBQUMsdUJBQUE7Z0RBQUFDLHVCQUFBO2dEQUFBQywwQkFBQTtnREFBYUksV0FBVTs7a0VBQ3ZCLFFBQUNwQzt3REFBVzBCLGVBQUE7d0RBQUFDLGlCQUFBO3dEQUFBQyx1QkFBQTt3REFBQUMsdUJBQUE7d0RBQUFDLHVCQUFBO3dEQUFBQyx1QkFBQTt3REFBQUMsMEJBQUE7d0RBQUVJLFdBQVU7Ozs7OztrRUFDeEIsUUFBQ29CO3dEQUFHOUIsZUFBQTt3REFBQUMsaUJBQUE7d0RBQUFDLHVCQUFBO3dEQUFBQyx1QkFBQTt3REFBQUMsdUJBQUE7d0RBQUFDLHVCQUFBO3dEQUFBQywwQkFBQTtrRUFBR3NCOzs7Ozs7OytDQUZBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBV3JCLFFBQUNuQjtnQkFBTVQsZUFBQTtnQkFBQUMsaUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQywwQkFBQTtnQkFBRUksV0FBVTswQkFDakIsc0JBQUNDO29CQUFFWCxlQUFBO29CQUFBQyxpQkFBQTtvQkFBQUMsdUJBQUE7b0JBQUFDLHVCQUFBO29CQUFBQyx1QkFBQTtvQkFBQUMsdUJBQUE7b0JBQUFDLDBCQUFBO29CQUFFSSxXQUFVOztzQ0FDYixRQUFDQzs0QkFBRVgsZUFBQTs0QkFBQUMsaUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQywwQkFBQTs0QkFBRUksV0FBVTs7OENBQ2IsUUFBQ1c7b0NBQUNyQixlQUFBO29DQUFBQyxpQkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLDBCQUFBO29DQUFFSSxXQUFVO29DQUFpRFksT0FBTzt3Q0FBRUMsWUFBWTtvQ0FBc0I7OENBQUU7Ozs7Ozs4Q0FHNUcsUUFBQ1o7b0NBQUVYLGVBQUE7b0NBQUFDLGlCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsMEJBQUE7b0NBQUVJLFdBQVU7Ozs7Ozs7Ozs7OztzQ0FFakIsUUFBQ0M7NEJBQUVYLGVBQUE7NEJBQUFDLGlCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsMEJBQUE7NEJBQUVJLFdBQVU7c0NBQ1p6QixlQUFlMEMsR0FBRyxDQUFDLENBQUNJLE9BQU9DLHNCQUMxQixRQUFDbEUsT0FBTzZDLEdBQUU7b0NBQUFYLGVBQUE7b0NBQUFDLGlCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsMEJBQUE7b0NBRVJNLFNBQVM7d0NBQUVoQixTQUFTO3dDQUFHQyxHQUFHO29DQUFHO29DQUM3QmdCLGFBQWE7d0NBQUVqQixTQUFTO3dDQUFHQyxHQUFHO29DQUFFO29DQUNoQ2lCLFVBQVU7d0NBQUVDLE1BQU07b0NBQUs7b0NBQ3ZCRyxZQUFZO3dDQUFFQyxVQUFVO3dDQUFLSyxPQUFPUSxRQUFRO29DQUFLOzhDQUVqRCxzQkFBQ3JFO3dDQUFHcUMsZUFBQTt3Q0FBQUMsaUJBQUE7d0NBQUFDLHVCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLHVCQUFBO3dDQUFBQywwQkFBQTt3Q0FBRUksV0FBVTtrREFDZCxzQkFBQzlDOzRDQUFVb0MsZUFBQTs0Q0FBQUMsaUJBQUE7NENBQUFDLHVCQUFBOzRDQUFBQyx1QkFBQTs0Q0FBQUMsdUJBQUE7NENBQUFDLHVCQUFBOzRDQUFBQywwQkFBQTs0Q0FBRUksV0FBVTs7OERBQ3JCLFFBQUNDO29EQUFFWCxlQUFBO29EQUFBQyxpQkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLDBCQUFBO29EQUFFSSxXQUFVOzhEQUNiLHNCQUFDcUIsTUFBTXpDLElBQUc7d0RBQUFVLGVBQUE7d0RBQUFDLGlCQUFBO3dEQUFBQyx1QkFBQTt3REFBQUMsdUJBQUE7d0RBQUFDLHVCQUFBO3dEQUFBQyx1QkFBQTt3REFBQUMsMEJBQUE7d0RBQUVJLFdBQVU7Ozs7Ozs7Ozs7OzhEQUV4QixRQUFDVTtvREFBQXBCLGVBQUE7b0RBQUFDLGlCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsMEJBQUE7b0RBQUVJLFdBQVU7OERBQ1ZxQixNQUFNNUMsTUFBTTs7Ozs7OzhEQUVmLFFBQUNzQztvREFBQ3pCLGVBQUE7b0RBQUFDLGlCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsMEJBQUE7b0RBQUVJLFdBQVU7OERBQXFDcUIsTUFBTTdDLEtBQUs7Ozs7Ozs4REFDOUQsUUFBQ2tDO29EQUFBcEIsZUFBQTtvREFBQUMsaUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQywwQkFBQTtvREFBRUksV0FBVTs4REFBMERxQixNQUFNM0MsV0FBVzs7Ozs7OzhEQUN4RixRQUFDdkI7b0RBQUttQyxlQUFBO29EQUFBQyxpQkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLDBCQUFBO29EQUFFMkIsT0FBTztvREFBQ3ZCLFdBQVU7OERBQ3hCLHNCQUFDM0M7d0RBQUdpQyxlQUFBO3dEQUFBQyxpQkFBQTt3REFBQUMsdUJBQUE7d0RBQUFDLHVCQUFBO3dEQUFBQyx1QkFBQTt3REFBQUMsdUJBQUE7d0RBQUFDLDBCQUFBO3dEQUFFNEIsSUFBSUgsTUFBTTFDLElBQUk7OzREQUFDOzBFQUVuQixRQUFDckI7Z0VBQVNnQyxlQUFBO2dFQUFBQyxpQkFBQTtnRUFBQUMsdUJBQUE7Z0VBQUFDLHVCQUFBO2dFQUFBQyx1QkFBQTtnRUFBQUMsdUJBQUE7Z0VBQUFDLDBCQUFBO2dFQUFFSSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQW5CekJxQixNQUFNN0MsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQThCMUIsUUFBQ3VCO2dCQUFNVCxlQUFBO2dCQUFBQyxpQkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLDBCQUFBO2dCQUFFSSxXQUFVOzBCQUNqQixzQkFBQ0M7b0JBQUVYLGVBQUE7b0JBQUFDLGlCQUFBO29CQUFBQyx1QkFBQTtvQkFBQUMsdUJBQUE7b0JBQUFDLHVCQUFBO29CQUFBQyx1QkFBQTtvQkFBQUMsMEJBQUE7b0JBQUVJLFdBQVU7OEJBQ2Isc0JBQUNDO3dCQUFFWCxlQUFBO3dCQUFBQyxpQkFBQTt3QkFBQUMsdUJBQUE7d0JBQUFDLHVCQUFBO3dCQUFBQyx1QkFBQTt3QkFBQUMsdUJBQUE7d0JBQUFDLDBCQUFBO3dCQUFFSSxXQUFVOzswQ0FDYixRQUFDQztnQ0FBRVgsZUFBQTtnQ0FBQUMsaUJBQUE7Z0NBQUFDLHVCQUFBO2dDQUFBQyx1QkFBQTtnQ0FBQUMsdUJBQUE7Z0NBQUFDLHVCQUFBO2dDQUFBQywwQkFBQTs7a0RBQ0QsUUFBQ2M7d0NBQUFwQixlQUFBO3dDQUFBQyxpQkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLHVCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLDBCQUFBO3dDQUFFSSxXQUFVO2tEQUEwRTs7Ozs7O2tEQUd2RixRQUFDVzt3Q0FBQ3JCLGVBQUE7d0NBQUFDLGlCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLHVCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsMEJBQUE7d0NBQUVJLFdBQVU7d0NBQWlEWSxPQUFPOzRDQUFFQyxZQUFZO3dDQUFzQjtrREFBRTs7Ozs7O2tEQUc1RyxRQUFDSDt3Q0FBQXBCLGVBQUE7d0NBQUFDLGlCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLHVCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsMEJBQUE7d0NBQUVJLFdBQVU7a0RBQXlDOzs7Ozs7a0RBSXRELFFBQUNDO3dDQUFFWCxlQUFBO3dDQUFBQyxpQkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLHVCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLDBCQUFBO3dDQUFFSSxXQUFVO2tEQUNiLHNCQUFDQzs0Q0FBRVgsZUFBQTs0Q0FBQUMsaUJBQUE7NENBQUFDLHVCQUFBOzRDQUFBQyx1QkFBQTs0Q0FBQUMsdUJBQUE7NENBQUFDLHVCQUFBOzRDQUFBQywwQkFBQTs0Q0FBRUksV0FBVTs7OERBQ2IsUUFBQzNCO29EQUFLaUIsZUFBQTtvREFBQUMsaUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQywwQkFBQTtvREFBRUksV0FBVTs7Ozs7OzhEQUNsQixRQUFDQztvREFBRVgsZUFBQTtvREFBQUMsaUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQywwQkFBQTs7c0VBQ0QsUUFBQ21COzREQUFDekIsZUFBQTs0REFBQUMsaUJBQUE7NERBQUFDLHVCQUFBOzREQUFBQyx1QkFBQTs0REFBQUMsdUJBQUE7NERBQUFDLHVCQUFBOzREQUFBQywwQkFBQTs0REFBRUksV0FBVTtzRUFBdUI7Ozs7OztzRUFDckMsUUFBQ1U7NERBQUFwQixlQUFBOzREQUFBQyxpQkFBQTs0REFBQUMsdUJBQUE7NERBQUFDLHVCQUFBOzREQUFBQyx1QkFBQTs0REFBQUMsdUJBQUE7NERBQUFDLDBCQUFBOzREQUFFSSxXQUFVO3NFQUE0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBUWpELFFBQUNDO2dDQUFFWCxlQUFBO2dDQUFBQyxpQkFBQTtnQ0FBQUMsdUJBQUE7Z0NBQUFDLHVCQUFBO2dDQUFBQyx1QkFBQTtnQ0FBQUMsdUJBQUE7Z0NBQUFDLDBCQUFBO2dDQUFFSSxXQUFVOzBDQUNabkIsZ0JBQWdCb0MsR0FBRyxDQUFDLENBQUNDLE1BQU1JLHNCQUMxQixRQUFDbEUsT0FBTzZDLEdBQUU7d0NBQUFYLGVBQUE7d0NBQUFDLGlCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLHVCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsMEJBQUE7d0NBRVJNLFNBQVM7NENBQUVoQixTQUFTOzRDQUFHQyxHQUFHO3dDQUFHO3dDQUM3QmdCLGFBQWE7NENBQUVqQixTQUFTOzRDQUFHQyxHQUFHO3dDQUFFO3dDQUNoQ2lCLFVBQVU7NENBQUVDLE1BQU07d0NBQUs7d0NBQ3ZCRyxZQUFZOzRDQUFFQyxVQUFVOzRDQUFLSyxPQUFPUSxRQUFRO3dDQUFLO3dDQUNqRHRCLFdBQVdzQixVQUFVLElBQUksa0JBQWtCO2tEQUUzQyxzQkFBQ2pFOzRDQUFHaUMsZUFBQTs0Q0FBQUMsaUJBQUE7NENBQUFDLHVCQUFBOzRDQUFBQyx1QkFBQTs0Q0FBQUMsdUJBQUE7NENBQUFDLHVCQUFBOzRDQUFBQywwQkFBQTs0Q0FBRTRCLElBQUlOLEtBQUt2QyxJQUFJOzRDQUFFcUIsV0FBVTtzREFDN0Isc0JBQUMvQztnREFBR3FDLGVBQUE7Z0RBQUFDLGlCQUFBO2dEQUFBQyx1QkFBQTtnREFBQUMsdUJBQUE7Z0RBQUFDLHVCQUFBO2dEQUFBQyx1QkFBQTtnREFBQUMsMEJBQUE7Z0RBQUVJLFdBQVU7MERBQ2Qsc0JBQUM5QztvREFBVW9DLGVBQUE7b0RBQUFDLGlCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsMEJBQUE7b0RBQUVJLFdBQVU7OERBQ3JCLHNCQUFDQzt3REFBRVgsZUFBQTt3REFBQUMsaUJBQUE7d0RBQUFDLHVCQUFBO3dEQUFBQyx1QkFBQTt3REFBQUMsdUJBQUE7d0RBQUFDLHVCQUFBO3dEQUFBQywwQkFBQTt3REFBRUksV0FBVTs7MEVBQ2IsUUFBQ0M7Z0VBQUVYLGVBQUE7Z0VBQUFDLGlCQUFBO2dFQUFBQyx1QkFBQTtnRUFBQUMsdUJBQUE7Z0VBQUFDLHVCQUFBO2dFQUFBQyx1QkFBQTtnRUFBQUMsMEJBQUE7Z0VBQUVJLFdBQVU7MEVBQ2Isc0JBQUNrQixLQUFLdEMsSUFBRztvRUFBQVUsZUFBQTtvRUFBQUMsaUJBQUE7b0VBQUFDLHVCQUFBO29FQUFBQyx1QkFBQTtvRUFBQUMsdUJBQUE7b0VBQUFDLHVCQUFBO29FQUFBQywwQkFBQTtvRUFBRUksV0FBVTs7Ozs7Ozs7Ozs7MEVBRXZCLFFBQUNDO2dFQUFFWCxlQUFBO2dFQUFBQyxpQkFBQTtnRUFBQUMsdUJBQUE7Z0VBQUFDLHVCQUFBO2dFQUFBQyx1QkFBQTtnRUFBQUMsdUJBQUE7Z0VBQUFDLDBCQUFBOztrRkFDRCxRQUFDbUI7d0VBQUN6QixlQUFBO3dFQUFBQyxpQkFBQTt3RUFBQUMsdUJBQUE7d0VBQUFDLHVCQUFBO3dFQUFBQyx1QkFBQTt3RUFBQUMsdUJBQUE7d0VBQUFDLDBCQUFBO3dFQUFFSSxXQUFVO2tGQUNYa0IsS0FBSzFDLEtBQUs7Ozs7OztrRkFFYixRQUFDa0M7d0VBQUFwQixlQUFBO3dFQUFBQyxpQkFBQTt3RUFBQUMsdUJBQUE7d0VBQUFDLHVCQUFBO3dFQUFBQyx1QkFBQTt3RUFBQUMsdUJBQUE7d0VBQUFDLDBCQUFBO3dFQUFFSSxXQUFVO2tGQUE4Q2tCLEtBQUt4QyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUNBbEJoRndDLEtBQUsxQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkErQjNCLFFBQUN1QjtnQkFBTVQsZUFBQTtnQkFBQUMsaUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQywwQkFBQTtnQkFBRUksV0FBVTswQkFDakIsc0JBQUNDO29CQUFFWCxlQUFBO29CQUFBQyxpQkFBQTtvQkFBQUMsdUJBQUE7b0JBQUFDLHVCQUFBO29CQUFBQyx1QkFBQTtvQkFBQUMsdUJBQUE7b0JBQUFDLDBCQUFBO29CQUFFSSxXQUFVOztzQ0FDYixRQUFDQzs0QkFBRVgsZUFBQTs0QkFBQUMsaUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQywwQkFBQTs0QkFBRUksV0FBVTs7OENBQ2IsUUFBQ1c7b0NBQUNyQixlQUFBO29DQUFBQyxpQkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLDBCQUFBO29DQUFFSSxXQUFVO29DQUFpRFksT0FBTzt3Q0FBRUMsWUFBWTtvQ0FBc0I7OENBQUU7Ozs7Ozs4Q0FHNUcsUUFBQ1o7b0NBQUVYLGVBQUE7b0NBQUFDLGlCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsMEJBQUE7b0NBQUVJLFdBQVU7Ozs7Ozs4Q0FDZixRQUFDVTtvQ0FBQXBCLGVBQUE7b0NBQUFDLGlCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsMEJBQUE7b0NBQUVJLFdBQVU7OENBQW9COzs7Ozs7Ozs7Ozs7c0NBSW5DLFFBQUNDOzRCQUFFWCxlQUFBOzRCQUFBQyxpQkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLDBCQUFBOzRCQUFFSSxXQUFVO3NDQUNabEIsWUFBWW1DLEdBQUcsQ0FBQyxDQUFDQyxNQUFNSSxzQkFDdEIsUUFBQ2xFLE9BQU82QyxHQUFFO29DQUFBWCxlQUFBO29DQUFBQyxpQkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLDBCQUFBO29DQUVSTSxTQUFTO3dDQUFFaEIsU0FBUzt3Q0FBR0MsR0FBRztvQ0FBRztvQ0FDN0JnQixhQUFhO3dDQUFFakIsU0FBUzt3Q0FBR0MsR0FBRztvQ0FBRTtvQ0FDaENpQixVQUFVO3dDQUFFQyxNQUFNO29DQUFLO29DQUN2QkcsWUFBWTt3Q0FBRUMsVUFBVTt3Q0FBS0ssT0FBT1EsUUFBUTtvQ0FBSzs4Q0FFakQsc0JBQUNqRTt3Q0FBR2lDLGVBQUE7d0NBQUFDLGlCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLHVCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsMEJBQUE7d0NBQUU0QixJQUFJTixLQUFLdkMsSUFBSTt3Q0FBRXFCLFdBQVU7a0RBQzdCLHNCQUFDL0M7NENBQUdxQyxlQUFBOzRDQUFBQyxpQkFBQTs0Q0FBQUMsdUJBQUE7NENBQUFDLHVCQUFBOzRDQUFBQyx1QkFBQTs0Q0FBQUMsdUJBQUE7NENBQUFDLDBCQUFBOzRDQUFFSSxXQUFVO3NEQUNkLHNCQUFDOUM7Z0RBQVVvQyxlQUFBO2dEQUFBQyxpQkFBQTtnREFBQUMsdUJBQUE7Z0RBQUFDLHVCQUFBO2dEQUFBQyx1QkFBQTtnREFBQUMsdUJBQUE7Z0RBQUFDLDBCQUFBO2dEQUFFSSxXQUFVOztrRUFDckIsUUFBQ0M7d0RBQUVYLGVBQUE7d0RBQUFDLGlCQUFBO3dEQUFBQyx1QkFBQTt3REFBQUMsdUJBQUE7d0RBQUFDLHVCQUFBO3dEQUFBQyx1QkFBQTt3REFBQUMsMEJBQUE7d0RBQUVJLFdBQVU7a0VBQ2Isc0JBQUNrQixLQUFLdEMsSUFBRzs0REFBQVUsZUFBQTs0REFBQUMsaUJBQUE7NERBQUFDLHVCQUFBOzREQUFBQyx1QkFBQTs0REFBQUMsdUJBQUE7NERBQUFDLHVCQUFBOzREQUFBQywwQkFBQTs0REFBRUksV0FBVTs7Ozs7Ozs7Ozs7a0VBRXZCLFFBQUNDO3dEQUFFWCxlQUFBO3dEQUFBQyxpQkFBQTt3REFBQUMsdUJBQUE7d0RBQUFDLHVCQUFBO3dEQUFBQyx1QkFBQTt3REFBQUMsdUJBQUE7d0RBQUFDLDBCQUFBOzswRUFDRCxRQUFDbUI7Z0VBQUN6QixlQUFBO2dFQUFBQyxpQkFBQTtnRUFBQUMsdUJBQUE7Z0VBQUFDLHVCQUFBO2dFQUFBQyx1QkFBQTtnRUFBQUMsdUJBQUE7Z0VBQUFDLDBCQUFBO2dFQUFFSSxXQUFVOzBFQUNYa0IsS0FBSzFDLEtBQUs7Ozs7OzswRUFFYixRQUFDa0M7Z0VBQUFwQixlQUFBO2dFQUFBQyxpQkFBQTtnRUFBQUMsdUJBQUE7Z0VBQUFDLHVCQUFBO2dFQUFBQyx1QkFBQTtnRUFBQUMsdUJBQUE7Z0VBQUFDLDBCQUFBO2dFQUFFSSxXQUFVOzBFQUE4Q2tCLEtBQUt4QyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQWhCOUV3QyxLQUFLMUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQTJCekIsUUFBQ3VCO2dCQUFNVCxlQUFBO2dCQUFBQyxpQkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLDBCQUFBO2dCQUFFSSxXQUFVOzBCQUNqQixzQkFBQ0M7b0JBQUVYLGVBQUE7b0JBQUFDLGlCQUFBO29CQUFBQyx1QkFBQTtvQkFBQUMsdUJBQUE7b0JBQUFDLHVCQUFBO29CQUFBQyx1QkFBQTtvQkFBQUMsMEJBQUE7b0JBQUVJLFdBQVU7O3NDQUNiLFFBQUN2Qzs0QkFBUTZCLGVBQUE7NEJBQUFDLGlCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsMEJBQUE7NEJBQUVJLFdBQVU7Ozs7OztzQ0FDckIsUUFBQ1c7NEJBQUNyQixlQUFBOzRCQUFBQyxpQkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLDBCQUFBOzRCQUFFSSxXQUFVOzRCQUFzQ1ksT0FBTztnQ0FBRUMsWUFBWTs0QkFBc0I7c0NBQUU7Ozs7OztzQ0FHakcsUUFBQ0g7NEJBQUFwQixlQUFBOzRCQUFBQyxpQkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLDBCQUFBOzRCQUFFSSxXQUFVO3NDQUFvQjs7Ozs7O3NDQUdqQyxRQUFDN0M7NEJBQUttQyxlQUFBOzRCQUFBQyxpQkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLDBCQUFBOzRCQUFFMkIsT0FBTzs0QkFBQ0UsTUFBSzs0QkFBS3pCLFdBQVU7c0NBQ2xDLHNCQUFDM0M7Z0NBQUdpQyxlQUFBO2dDQUFBQyxpQkFBQTtnQ0FBQUMsdUJBQUE7Z0NBQUFDLHVCQUFBO2dDQUFBQyx1QkFBQTtnQ0FBQUMsdUJBQUE7Z0NBQUFDLDBCQUFBO2dDQUFFNEIsSUFBRzs7b0NBQWdDO2tEQUV2QyxRQUFDdkQ7d0NBQU1xQixlQUFBO3dDQUFBQyxpQkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLHVCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLDBCQUFBO3dDQUFFSSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2pDO0tBaE9NWDtBQWtPTixlQUFlQSxVQUFTIiwibmFtZXMiOlsiTGF5b3V0IiwiUGFnZUhlcm8iLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJCdXR0b24iLCJtb3Rpb24iLCJMaW5rIiwiQXJyb3dSaWdodCIsIkF3YXJkIiwiQmFieSIsIkJhckNoYXJ0MyIsIkJvb2tPcGVuIiwiQ2FsZW5kYXJEYXlzIiwiQ2hlY2tDaXJjbGUyIiwiQ2xpcGJvYXJkQ2hlY2siLCJGaWxlVGV4dCIsIkdyYWR1YXRpb25DYXAiLCJMYXllcnMiLCJQZW5MaW5lIiwiU2Nob29sIiwiU2hpZWxkQ2hlY2siLCJTcGFya2xlcyIsIlRhcmdldCIsIlVzZXJzIiwiYWNhZGVtaWNTdGFnZXMiLCJ0aXRsZSIsImdyYWRlcyIsImRlc2NyaXB0aW9uIiwibGluayIsImljb24iLCJhY2FkZW1pY1N5c3RlbXMiLCJwb2xpY3lMaW5rcyIsImhpZ2hsaWdodHMiLCJmYWRlVXAiLCJoaWRkZW4iLCJvcGFjaXR5IiwieSIsInZpc2libGUiLCJBY2FkZW1pY3MiLCJkYXRhLWxvdi1pZCIsImRhdGEtbG92LW5hbWUiLCJkYXRhLWNvbXBvbmVudC1wYXRoIiwiZGF0YS1jb21wb25lbnQtbGluZSIsImRhdGEtY29tcG9uZW50LWZpbGUiLCJkYXRhLWNvbXBvbmVudC1uYW1lIiwiZGF0YS1jb21wb25lbnQtY29udGVudCIsImJyZWFkY3J1bWJzIiwibGFiZWwiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaW5pdGlhbCIsIndoaWxlSW5WaWV3Iiwidmlld3BvcnQiLCJvbmNlIiwiYW1vdW50IiwidmFyaWFudHMiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJwIiwiaDIiLCJzdHlsZSIsImZvbnRGYW1pbHkiLCJkZWxheSIsImgzIiwidWwiLCJtYXAiLCJpdGVtIiwibGkiLCJzcGFuIiwic3RhZ2UiLCJpbmRleCIsImFzQ2hpbGQiLCJ0byIsInNpemUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiQWNhZGVtaWNzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgUGFnZUhlcm8gZnJvbSBcIkAvY29tcG9uZW50cy9QYWdlSGVyb1wiO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQge1xuICBBcnJvd1JpZ2h0LFxuICBBd2FyZCxcbiAgQmFieSxcbiAgQmFyQ2hhcnQzLFxuICBCb29rT3BlbixcbiAgQ2FsZW5kYXJEYXlzLFxuICBDaGVja0NpcmNsZTIsXG4gIENsaXBib2FyZENoZWNrLFxuICBGaWxlVGV4dCxcbiAgR3JhZHVhdGlvbkNhcCxcbiAgTGF5ZXJzLFxuICBQZW5MaW5lLFxuICBTY2hvb2wsXG4gIFNoaWVsZENoZWNrLFxuICBTcGFya2xlcyxcbiAgVGFyZ2V0LFxuICBVc2Vycyxcbn0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuXG5jb25zdCBhY2FkZW1pY1N0YWdlcyA9IFtcbiAge1xuICAgIHRpdGxlOiBcIlByZS1QcmltYXJ5XCIsXG4gICAgZ3JhZGVzOiBcIk51cnNlcnksIExLRyAmIFVLR1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlBsYXktYmFzZWQsIGFjdGl2aXR5LW9yaWVudGVkIGxlYXJuaW5nIHRoYXQgbnVydHVyZXMgZWFybHkgbGl0ZXJhY3ksIG51bWVyYWN5LCBtb3RvciBza2lsbHMgYW5kIGNvbmZpZGVuY2UuXCIsXG4gICAgbGluazogXCIvYWNhZGVtaWNzL3ByZS1wcmltYXJ5XCIsXG4gICAgaWNvbjogQmFieSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlByaW1hcnkgTGV2ZWxcIixcbiAgICBncmFkZXM6IFwiQ2xhc3NlcyBJIHRvIFZcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDb25jZXB0LWJhc2VkIGxlYXJuaW5nIHdpdGggc3Ryb25nIGZvdW5kYXRpb25zIGluIGxhbmd1YWdlLCBtYXRoZW1hdGljcywgRVZTLCBzY2llbmNlLCBzb2NpYWwgc2NpZW5jZSBhbmQgY29tcHV0ZXIgZWR1Y2F0aW9uLlwiLFxuICAgIGxpbms6IFwiL2FjYWRlbWljcy9wcmltYXJ5LWxldmVsXCIsXG4gICAgaWNvbjogQm9va09wZW4sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJTZWNvbmRhcnkgU3RhZ2VcIixcbiAgICBncmFkZXM6IFwiQ2xhc3NlcyBWSSB0byBYXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQW5hbHl0aWNhbCwgYXBwbGljYXRpb24tYmFzZWQgc3R1ZHkgd2l0aCBza2lsbCBkZXZlbG9wbWVudCwgbGFib3JhdG9yeSBsZWFybmluZyBhbmQgQ0JTRSBib2FyZCBwcmVwYXJhdGlvbi5cIixcbiAgICBsaW5rOiBcIi9hY2FkZW1pY3Mvc2Vjb25kYXJ5LXN0YWdlXCIsXG4gICAgaWNvbjogU2Nob29sLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiU2VuaW9yIFNlY29uZGFyeSBTdGFnZVwiLFxuICAgIGdyYWRlczogXCJDbGFzc2VzIFhJICYgWElJXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU3RyZWFtLWZvY3VzZWQgbGVhcm5pbmcsIHJlc2VhcmNoIGV4cG9zdXJlIGFuZCBjYXJlZXItb3JpZW50ZWQgcHJlcGFyYXRpb24gZm9yIGhpZ2hlciBlZHVjYXRpb24gcGF0aHdheXMuXCIsXG4gICAgbGluazogXCIvYWNhZGVtaWNzL3Nlbmlvci1zZWNvbmRhcnktc3RhZ2VcIixcbiAgICBpY29uOiBHcmFkdWF0aW9uQ2FwLFxuICB9LFxuXTtcblxuY29uc3QgYWNhZGVtaWNTeXN0ZW1zID0gW1xuICB7XG4gICAgdGl0bGU6IFwiQ3VycmljdWx1bSBGcmFtZXdvcmtcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTdGFnZS13aXNlIGN1cnJpY3VsYXIgZ29hbHMsIGNvbXBldGVuY2llcywgbGVhcm5pbmcgb3V0Y29tZXMgYW5kIGxlYXJuZXItY2VudHJpYyBwZWRhZ29neSBhbGlnbmVkIHdpdGggQ0JTRSBleHBlY3RhdGlvbnMuXCIsXG4gICAgbGluazogXCIvYWNhZGVtaWNzL2N1cnJpY3VsdW1cIixcbiAgICBpY29uOiBMYXllcnMsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJBY2FkZW1pYyBDYWxlbmRhclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkEgc3RydWN0dXJlZCB5ZWFyIG9mIHRlcm1zLCBhc3Nlc3NtZW50cywgaG9saWRheXMsIGNvLWN1cnJpY3VsYXIgYWN0aXZpdGllcyBhbmQgc2lnbmF0dXJlIHNjaG9vbCBldmVudHMuXCIsXG4gICAgbGluazogXCIvYWNhZGVtaWNzL2NhbGVuZGFyXCIsXG4gICAgaWNvbjogQ2FsZW5kYXJEYXlzLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiQWNhZGVtaWMgQWNoaWV2ZW1lbnRzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQm9hcmQgcmVzdWx0cywgT2x5bXBpYWRzLCBNQU5BSyBBd2FyZHMsIGFydHMsIHNwb3J0cyBhbmQgaW50ZXItc2Nob29sIGRpc3RpbmN0aW9ucyBlYXJuZWQgYnkgb3VyIHN0dWRlbnRzLlwiLFxuICAgIGxpbms6IFwiL2FjYWRlbWljcy9hY2hpZXZlbWVudHNcIixcbiAgICBpY29uOiBBd2FyZCxcbiAgfSxcbl07XG5cbmNvbnN0IHBvbGljeUxpbmtzID0gW1xuICB7XG4gICAgdGl0bGU6IFwiQXR0ZW5kYW5jZSBSdWxlc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlJlZ3VsYXJpdHksIHB1bmN0dWFsaXR5LCBsZWF2ZSBwcm9jZWR1cmUgYW5kIGV4YW1pbmF0aW9uIGF0dGVuZGFuY2UgZXhwZWN0YXRpb25zLlwiLFxuICAgIGxpbms6IFwiL2FjYWRlbWljcy9hdHRlbmRhbmNlLXJ1bGVzXCIsXG4gICAgaWNvbjogVXNlcnMsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJDb2RlIG9mIENvbmR1Y3RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTdHVkZW50IGJlaGF2aW91ciwgZGlzY2lwbGluZSwgcmVzcGVjdCwgcmVzcG9uc2liaWxpdHkgYW5kIGRpZ2l0YWwgY29uZHVjdCBzdGFuZGFyZHMuXCIsXG4gICAgbGluazogXCIvYWNhZGVtaWNzL2NvZGUtb2YtY29uZHVjdFwiLFxuICAgIGljb246IFNoaWVsZENoZWNrLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiRXhhbWluYXRpb24gR3VpZGVsaW5lc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFzc2Vzc21lbnQgZnJhbWV3b3JrLCBpbnRlcm5hbCBldmFsdWF0aW9uLCBleGFtLWRheSBydWxlcyBhbmQgYWNhZGVtaWMgaW50ZWdyaXR5LlwiLFxuICAgIGxpbms6IFwiL2FjYWRlbWljcy9leGFtaW5hdGlvbi1ndWlkZWxpbmVzXCIsXG4gICAgaWNvbjogRmlsZVRleHQsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJQcm9tb3Rpb24gQ3JpdGVyaWFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTY2hvbGFzdGljIGFuZCBjby1zY2hvbGFzdGljIGV2YWx1YXRpb24gc3RhbmRhcmRzIGZvciBhY2FkZW1pYyBwcm9ncmVzcy5cIixcbiAgICBsaW5rOiBcIi9hY2FkZW1pY3MvcHJvbW90aW9uLWNyaXRlcmlhXCIsXG4gICAgaWNvbjogQ2xpcGJvYXJkQ2hlY2ssXG4gIH0sXG5dO1xuXG5jb25zdCBoaWdobGlnaHRzID0gW1xuICBcIkNCU0UgY3VycmljdWx1bSB3aXRoIHN0YWdlLXdpc2UgYWNhZGVtaWMgcHJvZ3Jlc3Npb25cIixcbiAgXCJFeHBlcmllbnRpYWwsIGFjdGl2aXR5LWJhc2VkIGFuZCBpbnF1aXJ5LWxlZCBjbGFzc3Jvb20gcHJhY3RpY2VcIixcbiAgXCJCYWxhbmNlZCBmb2N1cyBvbiBhY2FkZW1pY3MsIHZhbHVlcywgZGlzY2lwbGluZSBhbmQgY28tc2Nob2xhc3RpYyBncm93dGhcIixcbiAgXCJBc3Nlc3NtZW50IHN5c3RlbXMgZGVzaWduZWQgZm9yIGNsYXJpdHksIGNvbnNpc3RlbmN5IGFuZCBzdHVkZW50IHByb2dyZXNzXCIsXG5dO1xuXG5jb25zdCBmYWRlVXAgPSB7XG4gIGhpZGRlbjogeyBvcGFjaXR5OiAwLCB5OiAxOCB9LFxuICB2aXNpYmxlOiB7IG9wYWNpdHk6IDEsIHk6IDAgfSxcbn07XG5cbmNvbnN0IEFjYWRlbWljcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPFBhZ2VIZXJvIHRpdGxlPVwiQWNhZGVtaWNzXCIgYnJlYWRjcnVtYnM9e1t7IGxhYmVsOiBcIkFjYWRlbWljc1wiIH1dfSAvPlxuXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNiBsZzpweS0yMCBiZy1iYWNrZ3JvdW5kXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBsZzpncmlkLWNvbHMtWzEuMDVmcl8wLjk1ZnJdIGdhcC0xMCBsZzpnYXAtMTQgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgd2hpbGVJblZpZXc9XCJ2aXNpYmxlXCJcbiAgICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSwgYW1vdW50OiAwLjI1IH19XG4gICAgICAgICAgICAgIHZhcmlhbnRzPXtmYWRlVXB9XG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNDUgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yNGVtXSB0ZXh0LWluZGlhbi1ncmVlbiBtYi0zXCI+XG4gICAgICAgICAgICAgICAgQWNhZGVtaWMgT3ZlcnZpZXdcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgZm9udC1ib2xkIHRleHQtYmxhY2sgbWItNVwiIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiUG9wcGlucywgc2Fucy1zZXJpZlwiIH19PlxuICAgICAgICAgICAgICAgIEEgQ29tcGxldGUgTGVhcm5pbmcgSm91cm5leSBmcm9tIEVhcmx5IFllYXJzIHRvIFNlbmlvciBTZWNvbmRhcnlcbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGxnOnRleHQtbGcgdGV4dC1mb3JlZ3JvdW5kLzgwIGxlYWRpbmctcmVsYXhlZCBtYi00XCI+XG4gICAgICAgICAgICAgICAgQWNhZGVtaWNzIGF0IFNKUlBTLUhCUiBhcmUgZGVzaWduZWQgYXMgYSBjb250aW51b3VzIGpvdXJuZXk6IGpveWZ1bCBmb3VuZGF0aW9ucyBpbiB0aGUgZWFybHkgeWVhcnMsXG4gICAgICAgICAgICAgICAgc3Ryb25nIGNvbmNlcHQgZGV2ZWxvcG1lbnQgaW4gcHJpbWFyeSBjbGFzc2VzLCBkZWVwZXIgYW5hbHl0aWNhbCBsZWFybmluZyBpbiBzZWNvbmRhcnkgc2Nob29sLCBhbmRcbiAgICAgICAgICAgICAgICBmb2N1c2VkIHByZXBhcmF0aW9uIGluIHNlbmlvciBzZWNvbmRhcnkuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGxnOnRleHQtbGcgdGV4dC1mb3JlZ3JvdW5kLzgwIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgICAgIFRoZSBwcm9ncmFtbWUgYnJpbmdzIHRvZ2V0aGVyIENCU0UtYWxpZ25lZCBjdXJyaWN1bHVtLCBleHBlcmllbnRpYWwgbGVhcm5pbmcsIHJlZ3VsYXIgYXNzZXNzbWVudCxcbiAgICAgICAgICAgICAgICBjby1zY2hvbGFzdGljIGRldmVsb3BtZW50IGFuZCBhIGRpc2NpcGxpbmVkIHNjaG9vbCBjdWx0dXJlIHRoYXQgaGVscHMgZXZlcnkgbGVhcm5lciBncm93IHdpdGggY29uZmlkZW5jZS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgd2hpbGVJblZpZXc9XCJ2aXNpYmxlXCJcbiAgICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSwgYW1vdW50OiAwLjI1IH19XG4gICAgICAgICAgICAgIHZhcmlhbnRzPXtmYWRlVXB9XG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNDUsIGRlbGF5OiAwLjA4IH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIGJnLWluZGlhbi1ncmVlbiB0ZXh0LXdoaXRlIHAtNyBtZDpwLTggc2hhZG93LXhsXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBtYi02XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTEyIHctMTIgcm91bmRlZC14bCBiZy13aGl0ZS8xNSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPFNwYXJrbGVzIGNsYXNzTmFtZT1cImgtNiB3LTYgdGV4dC1nb2xkZW4teWVsbG93XCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+QWNhZGVtaWMgU3RyZW5ndGhzPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUvNzUgdGV4dC1zbVwiPlN0cnVjdHVyZWQsIHN0dWRlbnQtY2VudHJlZCBsZWFybmluZzwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgICB7aGlnaGxpZ2h0cy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW19IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTMgdGV4dC13aGl0ZS85MFwiPlxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tDaXJjbGUyIGNsYXNzTmFtZT1cImgtNSB3LTUgdGV4dC1nb2xkZW4teWVsbG93IHNocmluay0wIG10LTAuNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNiBiZy1tdXRlZC8zMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1heC13LTN4bCBteC1hdXRvIG1iLTEyXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgZm9udC1ib2xkIHRleHQtYmxhY2sgbWItM1wiIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiUG9wcGlucywgc2Fucy1zZXJpZlwiIH19PlxuICAgICAgICAgICAgICBBY2FkZW1pYyBTdGFnZXNcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gaC1bM3B4XSB3LTE2IGJnLWluZGlhbi1ncmVlbiByb3VuZGVkLWZ1bGxcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMiB4bDpncmlkLWNvbHMtNCBnYXAtNlwiPlxuICAgICAgICAgICAge2FjYWRlbWljU3RhZ2VzLm1hcCgoc3RhZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAga2V5PXtzdGFnZS50aXRsZX1cbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDE4IH19XG4gICAgICAgICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjQsIGRlbGF5OiBpbmRleCAqIDAuMDUgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImgtZnVsbCBib3JkZXItaW5kaWFuLWdyZWVuLzIwIGhvdmVyOmJvcmRlci1pbmRpYW4tZ3JlZW4gaG92ZXI6c2hhZG93LXhsIGhvdmVyOi10cmFuc2xhdGUteS0xIHRyYW5zaXRpb24tYWxsXCI+XG4gICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC02IGZsZXggZmxleC1jb2wgaC1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0xNCB3LTE0IHJvdW5kZWQtMnhsIGJnLWluZGlhbi1ncmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtYi01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHN0YWdlLmljb24gY2xhc3NOYW1lPVwiaC03IHctNyB0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMTZlbV0gdGV4dC1pbmRpYW4tZ3JlZW4gbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtzdGFnZS5ncmFkZXN9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtYmxhY2sgbWItM1wiPntzdGFnZS50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZm9yZWdyb3VuZC83NSBsZWFkaW5nLXJlbGF4ZWQgbWItNiBmbGV4LTFcIj57c3RhZ2UuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGFzQ2hpbGQgY2xhc3NOYW1lPVwiYmctaW5kaWFuLWdyZWVuIGhvdmVyOmJnLXNhZmZyb24tb3JhbmdlIHRleHQtd2hpdGUgdy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e3N0YWdlLmxpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgICAgRXhwbG9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93UmlnaHQgY2xhc3NOYW1lPVwiaC00IHctNCBtbC0yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTYgbGc6cHktMjAgYmctYmFja2dyb3VuZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbGc6Z3JpZC1jb2xzLVswLjg1ZnJfMS4xNWZyXSBnYXAtMTAgbGc6Z2FwLTEyIGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLVswLjI0ZW1dIHRleHQtaW5kaWFuLWdyZWVuIG1iLTNcIj5cbiAgICAgICAgICAgICAgICBGcmFtZXdvcmtcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgZm9udC1ib2xkIHRleHQtYmxhY2sgbWItNFwiIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiUG9wcGlucywgc2Fucy1zZXJpZlwiIH19PlxuICAgICAgICAgICAgICAgIEN1cnJpY3VsdW0sIENhbGVuZGFyICYgQWNoaWV2ZW1lbnRzXG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZm9yZWdyb3VuZC83NSBsZWFkaW5nLXJlbGF4ZWQgbWItNlwiPlxuICAgICAgICAgICAgICAgIFRoZSBhY2FkZW1pYyBwcm9ncmFtbWUgaXMgc3VwcG9ydGVkIGJ5IGNsZWFyIGN1cnJpY3VsdW0gcGxhbm5pbmcsIGEgd2VsbC1zdHJ1Y3R1cmVkIHllYXJseSBjYWxlbmRhcixcbiAgICAgICAgICAgICAgICBhbmQgYSBjdWx0dXJlIHRoYXQgcmVjb2duaXNlcyBzdXN0YWluZWQgc3R1ZGVudCBhY2hpZXZlbWVudCBhY3Jvc3MgZGlzY2lwbGluZXMuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLWluZGlhbi1ncmVlbi8yMCBiZy1pbmRpYW4tZ3JlZW4vNSBwLTZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICA8VGFyZ2V0IGNsYXNzTmFtZT1cImgtOCB3LTggdGV4dC1pbmRpYW4tZ3JlZW5cIiAvPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWJsYWNrXCI+TGVhcm5pbmcgd2l0aCBQdXJwb3NlPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWZvcmVncm91bmQvNzBcIj5cbiAgICAgICAgICAgICAgICAgICAgICBFdmVyeSBzZWN0aW9uIGxpbmtzIHRvIGRldGFpbGVkIGluZm9ybWF0aW9uIGFscmVhZHkgYXZhaWxhYmxlIG9uIHRoZSB3ZWJzaXRlLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHNtOmdyaWQtY29scy0yIGdhcC02XCI+XG4gICAgICAgICAgICAgIHthY2FkZW1pY1N5c3RlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDE4IH19XG4gICAgICAgICAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjQsIGRlbGF5OiBpbmRleCAqIDAuMDUgfX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aW5kZXggPT09IDIgPyBcInNtOmNvbC1zcGFuLTJcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2l0ZW0ubGlua30gY2xhc3NOYW1lPVwiZ3JvdXAgYmxvY2sgaC1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImgtZnVsbCBib3JkZXItaW5kaWFuLWdyZWVuLzIwIGhvdmVyOnNoYWRvdy1sZyB0cmFuc2l0aW9uLWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMTIgdy0xMiByb3VuZGVkLXhsIGJnLWluZGlhbi1ncmVlbi8xMCBib3JkZXIgYm9yZGVyLWluZGlhbi1ncmVlbi8yNSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzaHJpbmstMCBncm91cC1ob3ZlcjpiZy1pbmRpYW4tZ3JlZW4gdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aXRlbS5pY29uIGNsYXNzTmFtZT1cImgtNiB3LTYgdGV4dC1pbmRpYW4tZ3JlZW4gZ3JvdXAtaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9yc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1ibGFjayBtYi0yIGdyb3VwLWhvdmVyOnRleHQtaW5kaWFuLWdyZWVuIHRyYW5zaXRpb24tY29sb3JzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1mb3JlZ3JvdW5kLzc1IGxlYWRpbmctcmVsYXhlZFwiPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTYgYmctbXV0ZWQvMzBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYXgtdy0zeGwgbXgtYXV0byBtYi0xMlwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LWJsYWNrIG1iLTNcIiBzdHlsZT17eyBmb250RmFtaWx5OiBcIlBvcHBpbnMsIHNhbnMtc2VyaWZcIiB9fT5cbiAgICAgICAgICAgICAgQWNhZGVtaWMgUG9saWNpZXNcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gaC1bM3B4XSB3LTE2IGJnLWluZGlhbi1ncmVlbiByb3VuZGVkLWZ1bGwgbWItNFwiIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWZvcmVncm91bmQvNzVcIj5cbiAgICAgICAgICAgICAgQ2xlYXIgZXhwZWN0YXRpb25zIGhlbHAgc3R1ZGVudHMgcmVtYWluIHJlZ3VsYXIsIHJlc3BvbnNpYmxlIGFuZCBwcmVwYXJlZCBmb3IgZXZlcnkgYXNzZXNzbWVudC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTZcIj5cbiAgICAgICAgICAgIHtwb2xpY3lMaW5rcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMTggfX1cbiAgICAgICAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNCwgZGVsYXk6IGluZGV4ICogMC4wNSB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89e2l0ZW0ubGlua30gY2xhc3NOYW1lPVwiZ3JvdXAgYmxvY2sgaC1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJoLWZ1bGwgYm9yZGVyLWwtNCBib3JkZXItbC1pbmRpYW4tZ3JlZW4gaG92ZXI6c2hhZG93LWxnIHRyYW5zaXRpb24tYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLTYgZmxleCBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0xMiB3LTEyIHJvdW5kZWQteGwgYmctaW5kaWFuLWdyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNocmluay0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aXRlbS5pY29uIGNsYXNzTmFtZT1cImgtNiB3LTYgdGV4dC13aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LWJsYWNrIG1iLTIgZ3JvdXAtaG92ZXI6dGV4dC1pbmRpYW4tZ3JlZW4gdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWZvcmVncm91bmQvNzUgbGVhZGluZy1yZWxheGVkXCI+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNCBiZy1pbmRpYW4tZ3JlZW4gdGV4dC13aGl0ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgdGV4dC1jZW50ZXIgbWF4LXctM3hsXCI+XG4gICAgICAgICAgPEJhckNoYXJ0MyBjbGFzc05hbWU9XCJoLTExIHctMTEgbXgtYXV0byBtYi00IHRleHQtZ29sZGVuLXllbGxvd1wiIC8+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIG1kOnRleHQtM3hsIGZvbnQtYm9sZCBtYi0zXCIgc3R5bGU9e3sgZm9udEZhbWlseTogXCJQb3BwaW5zLCBzYW5zLXNlcmlmXCIgfX0+XG4gICAgICAgICAgICBFeHBsb3JlIHRoZSBBZG1pc3Npb24gUHJvY2Vzc1xuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZS84NSBtYi03XCI+XG4gICAgICAgICAgICBMZWFybiBob3cgdG8gYXBwbHksIHJldmlldyBlbGlnaWJpbGl0eSBjcml0ZXJpYSwgYW5kIHVuZGVyc3RhbmQgdGhlIG5leHQgc3RlcHMgZm9yIGpvaW5pbmcgU0pSUFMtSEJSLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8QnV0dG9uIGFzQ2hpbGQgc2l6ZT1cImxnXCIgY2xhc3NOYW1lPVwiYmctd2hpdGUgdGV4dC1pbmRpYW4tZ3JlZW4gaG92ZXI6YmctZ29sZGVuLXllbGxvdyBob3Zlcjp0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2FkbWlzc2lvbnMvYWRtaXNzaW9ucy1wcm9jZXNzXCI+XG4gICAgICAgICAgICAgIEFkbWlzc2lvbiBQcm9jZXNzXG4gICAgICAgICAgICAgIDxQZW5MaW5lIGNsYXNzTmFtZT1cImgtNCB3LTQgbWwtMlwiIC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWNhZGVtaWNzO1xuIl0sImZpbGUiOiIvaG9tZS9zanJzaDkxNi9wdWJsaWNfaHRtbC9zcmMvcGFnZXMvQWNhZGVtaWNzLnRzeCJ9