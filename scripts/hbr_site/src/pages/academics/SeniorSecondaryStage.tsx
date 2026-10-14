import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/academics/SeniorSecondaryStage.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import Layout from "/src/components/Layout.tsx";
import PageHero from "/src/components/PageHero.tsx";
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=5efa796b";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=5efa796b";
import snrSecondary from "/src/assets/snr-secondary-stage.jpg?import";
import { Compass, Briefcase, ClipboardList, FlaskConical, Target, Rocket, Sparkles } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};
const focusItems = [
    {
        title: "Stream Specialisation",
        icon: Compass,
        desc: "Deep focus in the chosen academic stream."
    },
    {
        title: "Career-Oriented Preparation",
        icon: Briefcase,
        desc: "Academic learning aligned with future career pathways."
    },
    {
        title: "Research-Based Learning",
        icon: FlaskConical,
        desc: "Practical exposure through research and hands-on application."
    }
];
const assessment = [
    "Theory Examinations",
    "Practical Examinations",
    "Project Work",
    "Viva Voce"
];
const classXI = [
    {
        name: "Science Stream",
        color: "from-indian-green/10 to-indian-green/5",
        abbreviations: [
            {
                code: "P",
                label: "Physics"
            },
            {
                code: "C",
                label: "Chemistry"
            },
            {
                code: "M",
                label: "Mathematics"
            },
            {
                code: "B",
                label: "Biology"
            },
            {
                code: "CS",
                label: "Computer Science"
            },
            {
                code: "Psy",
                label: "Psychology"
            },
            {
                code: "PE",
                label: "Physical Education"
            }
        ],
        combinations: [
            "PCMB",
            "PCMCS",
            "PCBPsy",
            "PCMPE"
        ]
    },
    {
        name: "Commerce Stream",
        color: "from-amber-500/10 to-amber-500/5",
        abbreviations: [
            {
                code: "A",
                label: "Accountancy"
            },
            {
                code: "B",
                label: "Business Studies"
            },
            {
                code: "E",
                label: "Economics"
            },
            {
                code: "CS",
                label: "Computer Science"
            },
            {
                code: "Psy",
                label: "Psychology"
            },
            {
                code: "PE",
                label: "Physical Education"
            }
        ],
        combinations: [
            "EBACS",
            "EBAPE",
            "EBAPsy"
        ]
    }
];
const classXII = [
    {
        name: "Science Stream",
        color: "from-indian-green/10 to-indian-green/5",
        abbreviations: [
            {
                code: "P",
                label: "Physics"
            },
            {
                code: "C",
                label: "Chemistry"
            },
            {
                code: "M",
                label: "Mathematics"
            },
            {
                code: "B",
                label: "Biology"
            },
            {
                code: "CS",
                label: "Computer Science"
            },
            {
                code: "Psy",
                label: "Psychology"
            }
        ],
        combinations: [
            "PCMB",
            "PCMCS",
            "PCBPsy",
            "PCMPsy"
        ]
    },
    {
        name: "Commerce Stream",
        color: "from-amber-500/10 to-amber-500/5",
        abbreviations: [
            {
                code: "A",
                label: "Accountancy"
            },
            {
                code: "B",
                label: "Business Studies"
            },
            {
                code: "E",
                label: "Economics"
            },
            {
                code: "CS",
                label: "Computer Science"
            },
            {
                code: "Psy",
                label: "Psychology"
            }
        ],
        combinations: [
            "EBACS",
            "EBAAM",
            "EBAPsy"
        ]
    }
];
const integratedPoints = [
    "Curriculum thoroughly mapped with the CBSE Board syllabus.",
    "Excellent faculty with extensive experience in training students for competitive examinations.",
    "Stress management through Yoga, Physical Education, Art, Music, and Counselling Sessions to ensure holistic development."
];
const SectionHeading = ({ eyebrow, title })=>/*#__PURE__*/ _jsxDEV("div", {
        "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:106:2",
        "data-lov-name": "div",
        "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
        "data-component-line": "106",
        "data-component-file": "SeniorSecondaryStage.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%22className%22%3A%22max-w-3xl%20mx-auto%20text-center%20mb-12%22%7D",
        className: "max-w-3xl mx-auto text-center mb-12",
        children: [
            eyebrow && /*#__PURE__*/ _jsxDEV("p", {
                "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:108:6",
                "data-lov-name": "p",
                "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                "data-component-line": "108",
                "data-component-file": "SeniorSecondaryStage.tsx",
                "data-component-name": "p",
                "data-component-content": "%7B%22className%22%3A%22text-xs%20font-semibold%20uppercase%20tracking-%5B0.25em%5D%20text-indian-green%20mb-3%22%7D",
                className: "text-xs font-semibold uppercase tracking-[0.25em] text-indian-green mb-3",
                children: eyebrow
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("h2", {
                "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:112:4",
                "data-lov-name": "h2",
                "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                "data-component-line": "112",
                "data-component-file": "SeniorSecondaryStage.tsx",
                "data-component-name": "h2",
                "data-component-content": "%7B%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20mb-3%22%7D",
                className: "text-3xl md:text-4xl font-bold mb-3",
                style: {
                    fontFamily: "Poppins, sans-serif",
                    color: "#000000"
                },
                children: title
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                lineNumber: 112,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:118:4",
                "data-lov-name": "div",
                "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                "data-component-line": "118",
                "data-component-file": "SeniorSecondaryStage.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22mx-auto%20h-%5B3px%5D%20w-16%20bg-indian-green%20rounded-full%22%7D",
                className: "mx-auto h-[3px] w-16 bg-indian-green rounded-full"
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                lineNumber: 118,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
        lineNumber: 106,
        columnNumber: 3
    }, this);
_c = SectionHeading;
const StreamBlock = ({ stream })=>/*#__PURE__*/ _jsxDEV(motion.div, {
        "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:123:2",
        "data-lov-name": "motion.div",
        "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
        "data-component-line": "123",
        "data-component-file": "SeniorSecondaryStage.tsx",
        "data-component-name": "motion.div",
        "data-component-content": "%7B%7D",
        initial: {
            opacity: 0,
            y: 16
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true
        },
        transition: {
            duration: 0.5
        },
        className: `rounded-2xl border border-indian-green/20 bg-gradient-to-br ${stream.color} shadow-sm p-6 md:p-8 h-full flex flex-col`,
        children: [
            /*#__PURE__*/ _jsxDEV("h4", {
                "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:130:4",
                "data-lov-name": "h4",
                "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                "data-component-line": "130",
                "data-component-file": "SeniorSecondaryStage.tsx",
                "data-component-name": "h4",
                "data-component-content": "%7B%22className%22%3A%22text-xl%20md%3Atext-2xl%20font-bold%20mb-5%22%7D",
                className: "text-xl md:text-2xl font-bold mb-5",
                style: {
                    fontFamily: "Poppins, sans-serif",
                    color: "#000000"
                },
                children: stream.name
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                lineNumber: 130,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:136:4",
                "data-lov-name": "div",
                "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                "data-component-line": "136",
                "data-component-file": "SeniorSecondaryStage.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22mb-6%22%7D",
                className: "mb-6",
                children: [
                    /*#__PURE__*/ _jsxDEV("p", {
                        "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:137:6",
                        "data-lov-name": "p",
                        "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                        "data-component-line": "137",
                        "data-component-file": "SeniorSecondaryStage.tsx",
                        "data-component-name": "p",
                        "data-component-content": "%7B%22text%22%3A%22Subject%20Abbreviations%22%2C%22className%22%3A%22text-xs%20font-semibold%20uppercase%20tracking-%5B0.2em%5D%20text-indian-green%20mb-3%22%7D",
                        className: "text-xs font-semibold uppercase tracking-[0.2em] text-indian-green mb-3",
                        children: "Subject Abbreviations"
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                        lineNumber: 137,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:140:6",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                        "data-component-line": "140",
                        "data-component-file": "SeniorSecondaryStage.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22grid%20grid-cols-2%20sm%3Agrid-cols-3%20gap-2%22%7D",
                        className: "grid grid-cols-2 sm:grid-cols-3 gap-2",
                        children: stream.abbreviations.map((a)=>/*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:142:10",
                                "data-lov-name": "div",
                                "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                "data-component-line": "142",
                                "data-component-file": "SeniorSecondaryStage.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22flex%20items-baseline%20gap-2%20rounded-lg%20bg-white%2F80%20border%20border-indian-green%2F15%20px-3%20py-2%22%7D",
                                className: "flex items-baseline gap-2 rounded-lg bg-white/80 border border-indian-green/15 px-3 py-2",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("span", {
                                        "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:146:12",
                                        "data-lov-name": "span",
                                        "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                        "data-component-line": "146",
                                        "data-component-file": "SeniorSecondaryStage.tsx",
                                        "data-component-name": "span",
                                        "data-component-content": "%7B%22className%22%3A%22font-bold%20text-indian-green%22%7D",
                                        className: "font-bold text-indian-green",
                                        children: a.code
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("span", {
                                        "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:147:12",
                                        "data-lov-name": "span",
                                        "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                        "data-component-line": "147",
                                        "data-component-file": "SeniorSecondaryStage.tsx",
                                        "data-component-name": "span",
                                        "data-component-content": "%7B%22text%22%3A%22%E2%80%93%22%2C%22className%22%3A%22text-sm%22%7D",
                                        className: "text-sm",
                                        style: {
                                            color: "#333333"
                                        },
                                        children: [
                                            "– ",
                                            a.label
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, a.code, true, {
                                fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this))
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                        lineNumber: 140,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                lineNumber: 136,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:154:4",
                "data-lov-name": "div",
                "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                "data-component-line": "154",
                "data-component-file": "SeniorSecondaryStage.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22mt-auto%22%7D",
                className: "mt-auto",
                children: [
                    /*#__PURE__*/ _jsxDEV("p", {
                        "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:155:6",
                        "data-lov-name": "p",
                        "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                        "data-component-line": "155",
                        "data-component-file": "SeniorSecondaryStage.tsx",
                        "data-component-name": "p",
                        "data-component-content": "%7B%22text%22%3A%22Combinations%20Offered%22%2C%22className%22%3A%22text-xs%20font-semibold%20uppercase%20tracking-%5B0.2em%5D%20text-indian-green%20mb-3%22%7D",
                        className: "text-xs font-semibold uppercase tracking-[0.2em] text-indian-green mb-3",
                        children: "Combinations Offered"
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                        lineNumber: 155,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:158:6",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                        "data-component-line": "158",
                        "data-component-file": "SeniorSecondaryStage.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22flex%20flex-wrap%20gap-2%22%7D",
                        className: "flex flex-wrap gap-2",
                        children: stream.combinations.map((c, i)=>/*#__PURE__*/ _jsxDEV("span", {
                                "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:160:10",
                                "data-lov-name": "span",
                                "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                "data-component-line": "160",
                                "data-component-file": "SeniorSecondaryStage.tsx",
                                "data-component-name": "span",
                                "data-component-content": "%7B%22className%22%3A%22inline-flex%20items-center%20gap-2%20rounded-full%20bg-indian-green%20text-white%20font-semibold%20px-4%20py-2%20shadow-sm%22%7D",
                                className: "inline-flex items-center gap-2 rounded-full bg-indian-green text-white font-semibold px-4 py-2 shadow-sm",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("span", {
                                        "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:164:12",
                                        "data-lov-name": "span",
                                        "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                        "data-component-line": "164",
                                        "data-component-file": "SeniorSecondaryStage.tsx",
                                        "data-component-name": "span",
                                        "data-component-content": "%7B%22text%22%3A%22.%22%2C%22className%22%3A%22text-white%2F70%20text-sm%22%7D",
                                        className: "text-white/70 text-sm",
                                        children: [
                                            i + 1,
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                        lineNumber: 164,
                                        columnNumber: 13
                                    }, this),
                                    c
                                ]
                            }, c, true, {
                                fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this))
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                        lineNumber: 158,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                lineNumber: 154,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
        lineNumber: 123,
        columnNumber: 3
    }, this);
_c1 = StreamBlock;
const ClassBlock = ({ title, streams })=>/*#__PURE__*/ _jsxDEV("div", {
        "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:174:2",
        "data-lov-name": "div",
        "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
        "data-component-line": "174",
        "data-component-file": "SeniorSecondaryStage.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%7D",
        children: [
            /*#__PURE__*/ _jsxDEV("h3", {
                "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:175:4",
                "data-lov-name": "h3",
                "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                "data-component-line": "175",
                "data-component-file": "SeniorSecondaryStage.tsx",
                "data-component-name": "h3",
                "data-component-content": "%7B%22className%22%3A%22text-2xl%20md%3Atext-3xl%20font-bold%20text-center%20mb-8%22%7D",
                className: "text-2xl md:text-3xl font-bold text-center mb-8",
                style: {
                    fontFamily: "Poppins, sans-serif",
                    color: "#000000"
                },
                children: title
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                lineNumber: 175,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:181:4",
                "data-lov-name": "div",
                "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                "data-component-line": "181",
                "data-component-file": "SeniorSecondaryStage.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22grid%20lg%3Agrid-cols-2%20gap-6%20lg%3Agap-8%22%7D",
                className: "grid lg:grid-cols-2 gap-6 lg:gap-8",
                children: streams.map((s)=>/*#__PURE__*/ _jsxDEV(StreamBlock, {
                        "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:183:8",
                        "data-lov-name": "StreamBlock",
                        "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                        "data-component-line": "183",
                        "data-component-file": "SeniorSecondaryStage.tsx",
                        "data-component-name": "StreamBlock",
                        "data-component-content": "%7B%7D",
                        stream: s
                    }, s.name, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this))
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                lineNumber: 181,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
        lineNumber: 174,
        columnNumber: 3
    }, this);
_c2 = ClassBlock;
const SeniorSecondaryStage = ()=>/*#__PURE__*/ _jsxDEV(Layout, {
        "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:190:2",
        "data-lov-name": "Layout",
        "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
        "data-component-line": "190",
        "data-component-file": "SeniorSecondaryStage.tsx",
        "data-component-name": "Layout",
        "data-component-content": "%7B%7D",
        children: [
            /*#__PURE__*/ _jsxDEV(PageHero, {
                "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:191:4",
                "data-lov-name": "PageHero",
                "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                "data-component-line": "191",
                "data-component-file": "SeniorSecondaryStage.tsx",
                "data-component-name": "PageHero",
                "data-component-content": "%7B%7D",
                title: "Senior Secondary Stage",
                breadcrumbs: [
                    {
                        label: "Academics",
                        path: "/academics"
                    },
                    {
                        label: "Senior Secondary Stage",
                        path: "/academics/senior-secondary-stage"
                    }
                ]
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                lineNumber: 191,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:200:4",
                "data-lov-name": "div",
                "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                "data-component-line": "200",
                "data-component-file": "SeniorSecondaryStage.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22bg-indian-green%2F5%20border-b%20border-indian-green%2F10%22%7D",
                className: "bg-indian-green/5 border-b border-indian-green/10",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:201:6",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                    "data-component-line": "201",
                    "data-component-file": "SeniorSecondaryStage.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20py-4%20text-center%22%7D",
                    className: "container mx-auto px-4 py-4 text-center",
                    children: /*#__PURE__*/ _jsxDEV("p", {
                        "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:202:8",
                        "data-lov-name": "p",
                        "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                        "data-component-line": "202",
                        "data-component-file": "SeniorSecondaryStage.tsx",
                        "data-component-name": "p",
                        "data-component-content": "%7B%22text%22%3A%22Level%3A%20Classes%20XI%20%E2%80%93%20XII%22%2C%22className%22%3A%22text-indian-green%20font-semibold%20tracking-wide%22%7D",
                        className: "text-indian-green font-semibold tracking-wide",
                        children: "Level: Classes XI – XII"
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                    lineNumber: 201,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                lineNumber: 200,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:207:4",
                "data-lov-name": "section",
                "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                "data-component-line": "207",
                "data-component-file": "SeniorSecondaryStage.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20lg%3Apy-20%22%7D",
                className: "py-16 lg:py-20",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:208:6",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                    "data-component-line": "208",
                    "data-component-file": "SeniorSecondaryStage.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:209:8",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                        "data-component-line": "209",
                        "data-component-file": "SeniorSecondaryStage.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22grid%20lg%3Agrid-cols-2%20gap-10%20lg%3Agap-14%20lg%3Aitems-stretch%22%7D",
                        className: "grid lg:grid-cols-2 gap-10 lg:gap-14 lg:items-stretch",
                        children: [
                            /*#__PURE__*/ _jsxDEV(motion.div, {
                                "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:210:10",
                                "data-lov-name": "motion.div",
                                "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                "data-component-line": "210",
                                "data-component-file": "SeniorSecondaryStage.tsx",
                                "data-component-name": "motion.div",
                                "data-component-content": "%7B%22className%22%3A%22rounded-2xl%20overflow-hidden%20shadow-2xl%20ring-1%20ring-black%2F5%20h-full%22%7D",
                                initial: "hidden",
                                whileInView: "visible",
                                viewport: {
                                    once: true,
                                    amount: 0.2
                                },
                                variants: fadeUp,
                                className: "rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 h-full",
                                children: /*#__PURE__*/ _jsxDEV("img", {
                                    "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:217:12",
                                    "data-lov-name": "img",
                                    "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                    "data-component-line": "217",
                                    "data-component-file": "SeniorSecondaryStage.tsx",
                                    "data-component-name": "img",
                                    "data-component-content": "%7B%22className%22%3A%22w-full%20h-full%20object-cover%20aspect-%5B4%2F3%5D%20lg%3Aaspect-auto%22%7D",
                                    src: snrSecondary,
                                    alt: "Senior Secondary students at SJRPS-HBR",
                                    className: "w-full h-full object-cover aspect-[4/3] lg:aspect-auto"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                    lineNumber: 217,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV(motion.div, {
                                "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:223:10",
                                "data-lov-name": "motion.div",
                                "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                "data-component-line": "223",
                                "data-component-file": "SeniorSecondaryStage.tsx",
                                "data-component-name": "motion.div",
                                "data-component-content": "%7B%22className%22%3A%22flex%20flex-col%20justify-center%20h-full%22%7D",
                                initial: "hidden",
                                whileInView: "visible",
                                viewport: {
                                    once: true,
                                    amount: 0.2
                                },
                                variants: fadeUp,
                                className: "flex flex-col justify-center h-full",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:230:12",
                                        "data-lov-name": "p",
                                        "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                        "data-component-line": "230",
                                        "data-component-file": "SeniorSecondaryStage.tsx",
                                        "data-component-name": "p",
                                        "data-component-content": "%7B%22text%22%3A%22Introduction%22%2C%22className%22%3A%22text-xs%20font-semibold%20uppercase%20tracking-%5B0.25em%5D%20text-indian-green%20mb-3%22%7D",
                                        className: "text-xs font-semibold uppercase tracking-[0.25em] text-indian-green mb-3",
                                        children: "Introduction"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                        lineNumber: 230,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("h2", {
                                        "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:233:12",
                                        "data-lov-name": "h2",
                                        "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                        "data-component-line": "233",
                                        "data-component-file": "SeniorSecondaryStage.tsx",
                                        "data-component-name": "h2",
                                        "data-component-content": "%7B%22text%22%3A%22Senior%20Secondary%20Stage%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20leading-tight%20mb-6%22%7D",
                                        className: "text-3xl md:text-4xl font-bold leading-tight mb-6",
                                        style: {
                                            fontFamily: "Poppins, sans-serif",
                                            color: "#000000"
                                        },
                                        children: "Senior Secondary Stage"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                        lineNumber: 233,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:239:12",
                                        "data-lov-name": "p",
                                        "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                        "data-component-line": "239",
                                        "data-component-file": "SeniorSecondaryStage.tsx",
                                        "data-component-name": "p",
                                        "data-component-content": "%7B%22text%22%3A%22The%20Senior%20Secondary%20Stage%20(Classes%20XI%E2%80%93XII)%20prepares%20students%20for%20higher%20education%20and%20future%20careers%20through%20specialised%20academic%20streams%20and%20holistic%20development.%22%2C%22className%22%3A%22text-base%20lg%3Atext-lg%20leading-relaxed%20mb-4%22%7D",
                                        className: "text-base lg:text-lg leading-relaxed mb-4",
                                        style: {
                                            color: "#333333"
                                        },
                                        children: "The Senior Secondary Stage (Classes XI–XII) prepares students for higher education and future careers through specialised academic streams and holistic development."
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                        lineNumber: 239,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:242:12",
                                        "data-lov-name": "p",
                                        "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                        "data-component-line": "242",
                                        "data-component-file": "SeniorSecondaryStage.tsx",
                                        "data-component-name": "p",
                                        "data-component-content": "%7B%22text%22%3A%22Our%20programme%20combines%20strong%20subject%20specialisation%20with%20career%20counselling%2C%20entrance-exam%20preparation%20and%20skill%20building%20%E2%80%94%20helping%20every%20student%20make%20confident%2C%20informed%20choices.%22%2C%22className%22%3A%22text-base%20lg%3Atext-lg%20leading-relaxed%20mb-4%22%7D",
                                        className: "text-base lg:text-lg leading-relaxed mb-4",
                                        style: {
                                            color: "#333333"
                                        },
                                        children: "Our programme combines strong subject specialisation with career counselling, entrance-exam preparation and skill building — helping every student make confident, informed choices."
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                        lineNumber: 242,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:245:12",
                                        "data-lov-name": "p",
                                        "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                        "data-component-line": "245",
                                        "data-component-file": "SeniorSecondaryStage.tsx",
                                        "data-component-name": "p",
                                        "data-component-content": "%7B%22text%22%3A%22Teachers%20act%20as%20mentors%2C%20guiding%20learners%20to%20think%20independently%2C%20research%20deeply%20and%20develop%20the%20leadership%20qualities%20they%20will%20carry%20into%20university%20and%20the%20workplace.%22%2C%22className%22%3A%22text-base%20lg%3Atext-lg%20leading-relaxed%20mb-4%22%7D",
                                        className: "text-base lg:text-lg leading-relaxed mb-4",
                                        style: {
                                            color: "#333333"
                                        },
                                        children: "Teachers act as mentors, guiding learners to think independently, research deeply and develop the leadership qualities they will carry into university and the workplace."
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                        lineNumber: 245,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                    lineNumber: 208,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                lineNumber: 207,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:254:4",
                "data-lov-name": "section",
                "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                "data-component-line": "254",
                "data-component-file": "SeniorSecondaryStage.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20bg-indian-green%2F5%22%7D",
                className: "py-16 bg-indian-green/5",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:255:6",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                    "data-component-line": "255",
                    "data-component-file": "SeniorSecondaryStage.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ _jsxDEV(SectionHeading, {
                            "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:256:8",
                            "data-lov-name": "SectionHeading",
                            "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                            "data-component-line": "256",
                            "data-component-file": "SeniorSecondaryStage.tsx",
                            "data-component-name": "SectionHeading",
                            "data-component-content": "%7B%7D",
                            title: "Focus"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                            lineNumber: 256,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:257:8",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                            "data-component-line": "257",
                            "data-component-file": "SeniorSecondaryStage.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22grid%20sm%3Agrid-cols-2%20lg%3Agrid-cols-3%20gap-6%22%7D",
                            className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: focusItems.map((item, i)=>/*#__PURE__*/ _jsxDEV(motion.div, {
                                    "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:259:12",
                                    "data-lov-name": "motion.div",
                                    "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                    "data-component-line": "259",
                                    "data-component-file": "SeniorSecondaryStage.tsx",
                                    "data-component-name": "motion.div",
                                    "data-component-content": "%7B%7D",
                                    initial: {
                                        opacity: 0,
                                        y: 16
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        duration: 0.45,
                                        delay: i % 3 * 0.06
                                    },
                                    children: /*#__PURE__*/ _jsxDEV(Card, {
                                        "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:266:14",
                                        "data-lov-name": "Card",
                                        "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                        "data-component-line": "266",
                                        "data-component-file": "SeniorSecondaryStage.tsx",
                                        "data-component-name": "Card",
                                        "data-component-content": "%7B%22className%22%3A%22rounded-2xl%20border%20border-indian-green%2F20%20shadow-sm%20hover%3Ashadow-xl%20hover%3A-translate-y-1%20transition-all%20h-full%20bg-white%22%7D",
                                        className: "rounded-2xl border border-indian-green/20 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all h-full bg-white",
                                        children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                            "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:267:16",
                                            "data-lov-name": "CardContent",
                                            "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                            "data-component-line": "267",
                                            "data-component-file": "SeniorSecondaryStage.tsx",
                                            "data-component-name": "CardContent",
                                            "data-component-content": "%7B%22className%22%3A%22p-6%20flex%20items-start%20gap-4%22%7D",
                                            className: "p-6 flex items-start gap-4",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:268:18",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                                    "data-component-line": "268",
                                                    "data-component-file": "SeniorSecondaryStage.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22w-12%20h-12%20rounded-xl%20bg-indian-green%20flex%20items-center%20justify-center%20shrink-0%20shadow%22%7D",
                                                    className: "w-12 h-12 rounded-xl bg-indian-green flex items-center justify-center shrink-0 shadow",
                                                    children: /*#__PURE__*/ _jsxDEV(item.icon, {
                                                        "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:269:20",
                                                        "data-lov-name": "item.icon",
                                                        "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                                        "data-component-line": "269",
                                                        "data-component-file": "SeniorSecondaryStage.tsx",
                                                        "data-component-name": "item.icon",
                                                        "data-component-content": "%7B%22className%22%3A%22h-6%20w-6%20text-white%22%7D",
                                                        className: "h-6 w-6 text-white"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                                        lineNumber: 269,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                                    lineNumber: 268,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:271:18",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                                    "data-component-line": "271",
                                                    "data-component-file": "SeniorSecondaryStage.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%7D",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("h3", {
                                                            "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:272:20",
                                                            "data-lov-name": "h3",
                                                            "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                                            "data-component-line": "272",
                                                            "data-component-file": "SeniorSecondaryStage.tsx",
                                                            "data-component-name": "h3",
                                                            "data-component-content": "%7B%22className%22%3A%22text-lg%20font-bold%20mb-1%22%7D",
                                                            className: "text-lg font-bold mb-1",
                                                            style: {
                                                                color: "#000000"
                                                            },
                                                            children: item.title
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                                            lineNumber: 272,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("p", {
                                                            "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:275:20",
                                                            "data-lov-name": "p",
                                                            "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                                            "data-component-line": "275",
                                                            "data-component-file": "SeniorSecondaryStage.tsx",
                                                            "data-component-name": "p",
                                                            "data-component-content": "%7B%22className%22%3A%22text-sm%20leading-relaxed%22%7D",
                                                            className: "text-sm leading-relaxed",
                                                            style: {
                                                                color: "#333333"
                                                            },
                                                            children: item.desc
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                                            lineNumber: 275,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                            lineNumber: 267,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                        lineNumber: 266,
                                        columnNumber: 15
                                    }, this)
                                }, item.title, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                    lineNumber: 259,
                                    columnNumber: 13
                                }, this))
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                            lineNumber: 257,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                    lineNumber: 255,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                lineNumber: 254,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:288:4",
                "data-lov-name": "section",
                "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                "data-component-line": "288",
                "data-component-file": "SeniorSecondaryStage.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20lg%3Apy-20%22%7D",
                className: "py-16 lg:py-20",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:289:6",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                    "data-component-line": "289",
                    "data-component-file": "SeniorSecondaryStage.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ _jsxDEV(SectionHeading, {
                            "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:290:8",
                            "data-lov-name": "SectionHeading",
                            "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                            "data-component-line": "290",
                            "data-component-file": "SeniorSecondaryStage.tsx",
                            "data-component-name": "SectionHeading",
                            "data-component-content": "%7B%7D",
                            eyebrow: "Academic Year 2026–27",
                            title: "Courses Offered"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                            lineNumber: 290,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:291:8",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                            "data-component-line": "291",
                            "data-component-file": "SeniorSecondaryStage.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22space-y-14%22%7D",
                            className: "space-y-14",
                            children: [
                                /*#__PURE__*/ _jsxDEV(ClassBlock, {
                                    "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:292:10",
                                    "data-lov-name": "ClassBlock",
                                    "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                    "data-component-line": "292",
                                    "data-component-file": "SeniorSecondaryStage.tsx",
                                    "data-component-name": "ClassBlock",
                                    "data-component-content": "%7B%7D",
                                    title: "Class XI",
                                    streams: classXI
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                    lineNumber: 292,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ _jsxDEV(ClassBlock, {
                                    "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:293:10",
                                    "data-lov-name": "ClassBlock",
                                    "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                    "data-component-line": "293",
                                    "data-component-file": "SeniorSecondaryStage.tsx",
                                    "data-component-name": "ClassBlock",
                                    "data-component-content": "%7B%7D",
                                    title: "Class XII",
                                    streams: classXII
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                    lineNumber: 293,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                            lineNumber: 291,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                    lineNumber: 289,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                lineNumber: 288,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:299:4",
                "data-lov-name": "section",
                "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                "data-component-line": "299",
                "data-component-file": "SeniorSecondaryStage.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20bg-indian-green%2F5%22%7D",
                className: "py-16 bg-indian-green/5",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:300:6",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                    "data-component-line": "300",
                    "data-component-file": "SeniorSecondaryStage.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ _jsxDEV(SectionHeading, {
                            "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:301:8",
                            "data-lov-name": "SectionHeading",
                            "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                            "data-component-line": "301",
                            "data-component-file": "SeniorSecondaryStage.tsx",
                            "data-component-name": "SectionHeading",
                            "data-component-content": "%7B%7D",
                            title: "Assessment"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                            lineNumber: 301,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:302:8",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                            "data-component-line": "302",
                            "data-component-file": "SeniorSecondaryStage.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22max-w-3xl%20mx-auto%20grid%20sm%3Agrid-cols-2%20gap-4%22%7D",
                            className: "max-w-3xl mx-auto grid sm:grid-cols-2 gap-4",
                            children: assessment.map((a)=>/*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:304:12",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                    "data-component-line": "304",
                                    "data-component-file": "SeniorSecondaryStage.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20gap-3%20rounded-xl%20bg-white%20border%20border-indian-green%2F20%20shadow-sm%20px-5%20py-4%22%7D",
                                    className: "flex items-center gap-3 rounded-xl bg-white border border-indian-green/20 shadow-sm px-5 py-4",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV(ClipboardList, {
                                            "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:308:14",
                                            "data-lov-name": "ClipboardList",
                                            "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                            "data-component-line": "308",
                                            "data-component-file": "SeniorSecondaryStage.tsx",
                                            "data-component-name": "ClipboardList",
                                            "data-component-content": "%7B%22className%22%3A%22h-5%20w-5%20text-indian-green%20shrink-0%22%7D",
                                            className: "h-5 w-5 text-indian-green shrink-0"
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                            lineNumber: 308,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("span", {
                                            "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:309:14",
                                            "data-lov-name": "span",
                                            "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                            "data-component-line": "309",
                                            "data-component-file": "SeniorSecondaryStage.tsx",
                                            "data-component-name": "span",
                                            "data-component-content": "%7B%22className%22%3A%22font-medium%22%7D",
                                            className: "font-medium",
                                            style: {
                                                color: "#000000"
                                            },
                                            children: a
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                            lineNumber: 309,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, a, true, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                    lineNumber: 304,
                                    columnNumber: 13
                                }, this))
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                            lineNumber: 302,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                    lineNumber: 300,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                lineNumber: 299,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:319:4",
                "data-lov-name": "section",
                "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                "data-component-line": "319",
                "data-component-file": "SeniorSecondaryStage.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20lg%3Apy-20%22%7D",
                className: "py-16 lg:py-20",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:320:6",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                    "data-component-line": "320",
                    "data-component-file": "SeniorSecondaryStage.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ _jsxDEV(SectionHeading, {
                            "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:321:8",
                            "data-lov-name": "SectionHeading",
                            "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                            "data-component-line": "321",
                            "data-component-file": "SeniorSecondaryStage.tsx",
                            "data-component-name": "SectionHeading",
                            "data-component-content": "%7B%7D",
                            title: "Objective"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                            lineNumber: 321,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:322:8",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                            "data-component-line": "322",
                            "data-component-file": "SeniorSecondaryStage.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22max-w-3xl%20mx-auto%22%7D",
                            className: "max-w-3xl mx-auto",
                            children: /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:323:10",
                                "data-lov-name": "div",
                                "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                "data-component-line": "323",
                                "data-component-file": "SeniorSecondaryStage.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22rounded-2xl%20border-l-4%20border-indian-green%20bg-white%20shadow-sm%20p-6%20md%3Ap-8%20flex%20gap-4%22%7D",
                                className: "rounded-2xl border-l-4 border-indian-green bg-white shadow-sm p-6 md:p-8 flex gap-4",
                                children: [
                                    /*#__PURE__*/ _jsxDEV(Target, {
                                        "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:324:12",
                                        "data-lov-name": "Target",
                                        "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                        "data-component-line": "324",
                                        "data-component-file": "SeniorSecondaryStage.tsx",
                                        "data-component-name": "Target",
                                        "data-component-content": "%7B%22className%22%3A%22h-8%20w-8%20text-indian-green%20shrink-0%22%7D",
                                        className: "h-8 w-8 text-indian-green shrink-0"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                        lineNumber: 324,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:325:12",
                                        "data-lov-name": "p",
                                        "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                        "data-component-line": "325",
                                        "data-component-file": "SeniorSecondaryStage.tsx",
                                        "data-component-name": "p",
                                        "data-component-content": "%7B%22text%22%3A%22Prepare%20students%20for%20higher%20education%2C%20competitive%20examinations%2C%20and%20successful%20professional%20careers%20through%20a%20balanced%20academic%20and%20practical%20learning%20approach.%22%2C%22className%22%3A%22text-base%20lg%3Atext-lg%20leading-relaxed%22%7D",
                                        className: "text-base lg:text-lg leading-relaxed",
                                        style: {
                                            color: "#333333"
                                        },
                                        children: "Prepare students for higher education, competitive examinations, and successful professional careers through a balanced academic and practical learning approach."
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                        lineNumber: 325,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                lineNumber: 323,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                            lineNumber: 322,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                    lineNumber: 320,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                lineNumber: 319,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:334:4",
                "data-lov-name": "section",
                "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                "data-component-line": "334",
                "data-component-file": "SeniorSecondaryStage.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20bg-indian-green%2F5%22%7D",
                className: "py-16 bg-indian-green/5",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:335:6",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                    "data-component-line": "335",
                    "data-component-file": "SeniorSecondaryStage.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ _jsxDEV(SectionHeading, {
                            "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:336:8",
                            "data-lov-name": "SectionHeading",
                            "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                            "data-component-line": "336",
                            "data-component-file": "SeniorSecondaryStage.tsx",
                            "data-component-name": "SectionHeading",
                            "data-component-content": "%7B%7D",
                            title: "Integrated Courses"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                            lineNumber: 336,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:337:8",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                            "data-component-line": "337",
                            "data-component-file": "SeniorSecondaryStage.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22max-w-4xl%20mx-auto%22%7D",
                            className: "max-w-4xl mx-auto",
                            children: /*#__PURE__*/ _jsxDEV(motion.div, {
                                "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:338:10",
                                "data-lov-name": "motion.div",
                                "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                "data-component-line": "338",
                                "data-component-file": "SeniorSecondaryStage.tsx",
                                "data-component-name": "motion.div",
                                "data-component-content": "%7B%22className%22%3A%22rounded-2xl%20bg-white%20border%20border-indian-green%2F20%20shadow-sm%20p-6%20md%3Ap-8%22%7D",
                                initial: {
                                    opacity: 0,
                                    y: 16
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.5
                                },
                                className: "rounded-2xl bg-white border border-indian-green/20 shadow-sm p-6 md:p-8",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:345:12",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                        "data-component-line": "345",
                                        "data-component-file": "SeniorSecondaryStage.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20gap-4%20mb-6%22%7D",
                                        className: "flex items-center gap-4 mb-6",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:346:14",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                                "data-component-line": "346",
                                                "data-component-file": "SeniorSecondaryStage.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22w-14%20h-14%20rounded-xl%20bg-indian-green%20flex%20items-center%20justify-center%20shadow%22%7D",
                                                className: "w-14 h-14 rounded-xl bg-indian-green flex items-center justify-center shadow",
                                                children: /*#__PURE__*/ _jsxDEV(Rocket, {
                                                    "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:347:16",
                                                    "data-lov-name": "Rocket",
                                                    "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                                    "data-component-line": "347",
                                                    "data-component-file": "SeniorSecondaryStage.tsx",
                                                    "data-component-name": "Rocket",
                                                    "data-component-content": "%7B%22className%22%3A%22h-7%20w-7%20text-white%22%7D",
                                                    className: "h-7 w-7 text-white"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                                    lineNumber: 347,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                                lineNumber: 346,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:349:14",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                                "data-component-line": "349",
                                                "data-component-file": "SeniorSecondaryStage.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%7D",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("p", {
                                                        "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:350:16",
                                                        "data-lov-name": "p",
                                                        "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                                        "data-component-line": "350",
                                                        "data-component-file": "SeniorSecondaryStage.tsx",
                                                        "data-component-name": "p",
                                                        "data-component-content": "%7B%22text%22%3A%22Competitive%20Edge%22%2C%22className%22%3A%22text-xs%20font-semibold%20uppercase%20tracking-%5B0.25em%5D%20text-indian-green%20mb-1%22%7D",
                                                        className: "text-xs font-semibold uppercase tracking-[0.25em] text-indian-green mb-1",
                                                        children: "Competitive Edge"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                                        lineNumber: 350,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("h3", {
                                                        "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:353:16",
                                                        "data-lov-name": "h3",
                                                        "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                                        "data-component-line": "353",
                                                        "data-component-file": "SeniorSecondaryStage.tsx",
                                                        "data-component-name": "h3",
                                                        "data-component-content": "%7B%22text%22%3A%22JEE%20%26%20NEET%22%2C%22className%22%3A%22text-2xl%20font-bold%22%7D",
                                                        className: "text-2xl font-bold",
                                                        style: {
                                                            fontFamily: "Poppins, sans-serif",
                                                            color: "#000000"
                                                        },
                                                        children: "JEE & NEET"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                                        lineNumber: 353,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                                lineNumber: 349,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                        lineNumber: 345,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("ul", {
                                        "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:361:12",
                                        "data-lov-name": "ul",
                                        "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                        "data-component-line": "361",
                                        "data-component-file": "SeniorSecondaryStage.tsx",
                                        "data-component-name": "ul",
                                        "data-component-content": "%7B%22className%22%3A%22space-y-3%22%7D",
                                        className: "space-y-3",
                                        children: integratedPoints.map((p)=>/*#__PURE__*/ _jsxDEV("li", {
                                                "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:363:16",
                                                "data-lov-name": "li",
                                                "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                                "data-component-line": "363",
                                                "data-component-file": "SeniorSecondaryStage.tsx",
                                                "data-component-name": "li",
                                                "data-component-content": "%7B%22className%22%3A%22flex%20items-start%20gap-3%22%7D",
                                                className: "flex items-start gap-3",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("span", {
                                                        "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:364:18",
                                                        "data-lov-name": "span",
                                                        "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                                        "data-component-line": "364",
                                                        "data-component-file": "SeniorSecondaryStage.tsx",
                                                        "data-component-name": "span",
                                                        "data-component-content": "%7B%22className%22%3A%22mt-2%20w-2%20h-2%20rounded-full%20bg-indian-green%20shrink-0%22%7D",
                                                        className: "mt-2 w-2 h-2 rounded-full bg-indian-green shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                                        lineNumber: 364,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("span", {
                                                        "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:365:18",
                                                        "data-lov-name": "span",
                                                        "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                                                        "data-component-line": "365",
                                                        "data-component-file": "SeniorSecondaryStage.tsx",
                                                        "data-component-name": "span",
                                                        "data-component-content": "%7B%22className%22%3A%22text-base%20leading-relaxed%22%7D",
                                                        className: "text-base leading-relaxed",
                                                        style: {
                                                            color: "#333333"
                                                        },
                                                        children: p
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                                        lineNumber: 365,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, p, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                                lineNumber: 363,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                        lineNumber: 361,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                                lineNumber: 338,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                            lineNumber: 337,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                    lineNumber: 335,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                lineNumber: 334,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:377:4",
                "data-lov-name": "section",
                "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                "data-component-line": "377",
                "data-component-file": "SeniorSecondaryStage.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-14%20bg-indian-green%20text-white%22%7D",
                className: "py-14 bg-indian-green text-white",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:378:6",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                    "data-component-line": "378",
                    "data-component-file": "SeniorSecondaryStage.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20text-center%22%7D",
                    className: "container mx-auto px-4 text-center",
                    children: [
                        /*#__PURE__*/ _jsxDEV(Sparkles, {
                            className: "h-10 w-10 mx-auto mb-4 text-golden-yellow"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                            lineNumber: 379,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ _jsxDEV("h2", {
                            "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:380:8",
                            "data-lov-name": "h2",
                            "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                            "data-component-line": "380",
                            "data-component-file": "SeniorSecondaryStage.tsx",
                            "data-component-name": "h2",
                            "data-component-content": "%7B%22text%22%3A%22Begin%20Your%20Child's%20Journey%20at%20SJRPS-HBR%22%2C%22className%22%3A%22text-2xl%20md%3Atext-3xl%20font-bold%20mb-3%22%7D",
                            className: "text-2xl md:text-3xl font-bold mb-3",
                            style: {
                                fontFamily: "Poppins, sans-serif"
                            },
                            children: "Begin Your Child's Journey at SJRPS-HBR"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                            lineNumber: 380,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ _jsxDEV("p", {
                            "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:386:8",
                            "data-lov-name": "p",
                            "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                            "data-component-line": "386",
                            "data-component-file": "SeniorSecondaryStage.tsx",
                            "data-component-name": "p",
                            "data-component-content": "%7B%22text%22%3A%22Join%20a%20school%20where%20every%20learner%20is%20nurtured%20with%20care%20and%20inspired%20to%20excel.%22%2C%22className%22%3A%22text-white%2F85%20max-w-2xl%20mx-auto%20mb-6%22%7D",
                            className: "text-white/85 max-w-2xl mx-auto mb-6",
                            children: "Join a school where every learner is nurtured with care and inspired to excel."
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                            lineNumber: 386,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ _jsxDEV(Link, {
                            "data-lov-id": "src/pages/academics/SeniorSecondaryStage.tsx:389:8",
                            "data-lov-name": "Link",
                            "data-component-path": "src/pages/academics/SeniorSecondaryStage.tsx",
                            "data-component-line": "389",
                            "data-component-file": "SeniorSecondaryStage.tsx",
                            "data-component-name": "Link",
                            "data-component-content": "%7B%22text%22%3A%22Apply%20for%20Admission%22%2C%22className%22%3A%22inline-block%20bg-white%20text-indian-green%20font-semibold%20px-7%20py-3%20rounded-full%20shadow%20hover%3Abg-golden-yellow%20hover%3Atext-white%20transition-colors%22%7D",
                            to: "/admissions/admissions-process",
                            className: "inline-block bg-white text-indian-green font-semibold px-7 py-3 rounded-full shadow hover:bg-golden-yellow hover:text-white transition-colors",
                            children: "Apply for Admission"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                            lineNumber: 389,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                    lineNumber: 378,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
                lineNumber: 377,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx",
        lineNumber: 190,
        columnNumber: 3
    }, this);
_c3 = SeniorSecondaryStage;
export default SeniorSecondaryStage;
var _c, _c1, _c2, _c3;
$RefreshReg$(_c, "SectionHeading");
$RefreshReg$(_c1, "StreamBlock");
$RefreshReg$(_c2, "ClassBlock");
$RefreshReg$(_c3, "SeniorSecondaryStage");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/pages/academics/SeniorSecondaryStage.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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OzRCQUFTZ0MsV0FBVTs7Ozs7O3NDQUNwQixRQUFDRTs0QkFBQ1QsZUFBQTs0QkFBQUMsaUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQywwQkFBQTs0QkFDQUMsV0FBVTs0QkFDVkcsT0FBTztnQ0FBRUMsWUFBWTs0QkFBc0I7c0NBQzdDOzs7Ozs7c0NBR0EsUUFBQ0g7NEJBQUFSLGVBQUE7NEJBQUFDLGlCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsMEJBQUE7NEJBQUVDLFdBQVU7c0NBQXNDOzs7Ozs7c0NBR25ELFFBQUN4Qzs0QkFBR2lDLGVBQUE7NEJBQUFDLGlCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsMEJBQUE7NEJBQ0ZtQyxJQUFHOzRCQUNIbEMsV0FBVTtzQ0FDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUEzTUZxQjtBQW1OTixlQUFlQSxxQkFBb0IiLCJuYW1lcyI6WyJMYXlvdXQiLCJQYWdlSGVybyIsIkNhcmQiLCJDYXJkQ29udGVudCIsIm1vdGlvbiIsIkxpbmsiLCJzbnJTZWNvbmRhcnkiLCJDb21wYXNzIiwiQnJpZWZjYXNlIiwiQ2xpcGJvYXJkTGlzdCIsIkZsYXNrQ29uaWNhbCIsIlRhcmdldCIsIlJvY2tldCIsIlNwYXJrbGVzIiwiZmFkZVVwIiwiaGlkZGVuIiwib3BhY2l0eSIsInkiLCJ2aXNpYmxlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZm9jdXNJdGVtcyIsInRpdGxlIiwiaWNvbiIsImRlc2MiLCJhc3Nlc3NtZW50IiwiY2xhc3NYSSIsIm5hbWUiLCJjb2xvciIsImFiYnJldmlhdGlvbnMiLCJjb2RlIiwibGFiZWwiLCJjb21iaW5hdGlvbnMiLCJjbGFzc1hJSSIsImludGVncmF0ZWRQb2ludHMiLCJTZWN0aW9uSGVhZGluZyIsImV5ZWJyb3ciLCJkaXYiLCJkYXRhLWxvdi1pZCIsImRhdGEtbG92LW5hbWUiLCJkYXRhLWNvbXBvbmVudC1wYXRoIiwiZGF0YS1jb21wb25lbnQtbGluZSIsImRhdGEtY29tcG9uZW50LWZpbGUiLCJkYXRhLWNvbXBvbmVudC1uYW1lIiwiZGF0YS1jb21wb25lbnQtY29udGVudCIsImNsYXNzTmFtZSIsInAiLCJoMiIsInN0eWxlIiwiZm9udEZhbWlseSIsIlN0cmVhbUJsb2NrIiwic3RyZWFtIiwiaW5pdGlhbCIsIndoaWxlSW5WaWV3Iiwidmlld3BvcnQiLCJvbmNlIiwiaDQiLCJtYXAiLCJhIiwic3BhbiIsImMiLCJpIiwiQ2xhc3NCbG9jayIsInN0cmVhbXMiLCJoMyIsInMiLCJTZW5pb3JTZWNvbmRhcnlTdGFnZSIsImJyZWFkY3J1bWJzIiwicGF0aCIsInNlY3Rpb24iLCJhbW91bnQiLCJ2YXJpYW50cyIsImltZyIsInNyYyIsImFsdCIsIml0ZW0iLCJkZWxheSIsInVsIiwibGkiLCJ0byJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJTZW5pb3JTZWNvbmRhcnlTdGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFBhZ2VIZXJvIGZyb20gXCJAL2NvbXBvbmVudHMvUGFnZUhlcm9cIjtcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgc25yU2Vjb25kYXJ5IGZyb20gXCJAL2Fzc2V0cy9zbnItc2Vjb25kYXJ5LXN0YWdlLmpwZ1wiO1xuaW1wb3J0IHtcbiAgQ29tcGFzcyxcbiAgR3JhZHVhdGlvbkNhcCxcbiAgQnJpZWZjYXNlLFxuICBDbGlwYm9hcmRMaXN0LFxuICBGbGFza0NvbmljYWwsXG4gIEJ1aWxkaW5nMixcbiAgVGFyZ2V0LFxuICBSb2NrZXQsXG4gIFNwYXJrbGVzLFxuICBCb29rT3BlbixcbiAgVHJvcGh5LFxufSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5cbmNvbnN0IGZhZGVVcCA9IHtcbiAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHk6IDIwIH0sXG4gIHZpc2libGU6IHsgb3BhY2l0eTogMSwgeTogMCwgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMC41IH0gfSxcbn07XG5cbmNvbnN0IGZvY3VzSXRlbXMgPSBbXG4gIHsgdGl0bGU6IFwiU3RyZWFtIFNwZWNpYWxpc2F0aW9uXCIsIGljb246IENvbXBhc3MsIGRlc2M6IFwiRGVlcCBmb2N1cyBpbiB0aGUgY2hvc2VuIGFjYWRlbWljIHN0cmVhbS5cIiB9LFxuICB7IHRpdGxlOiBcIkNhcmVlci1PcmllbnRlZCBQcmVwYXJhdGlvblwiLCBpY29uOiBCcmllZmNhc2UsIGRlc2M6IFwiQWNhZGVtaWMgbGVhcm5pbmcgYWxpZ25lZCB3aXRoIGZ1dHVyZSBjYXJlZXIgcGF0aHdheXMuXCIgfSxcbiAgeyB0aXRsZTogXCJSZXNlYXJjaC1CYXNlZCBMZWFybmluZ1wiLCBpY29uOiBGbGFza0NvbmljYWwsIGRlc2M6IFwiUHJhY3RpY2FsIGV4cG9zdXJlIHRocm91Z2ggcmVzZWFyY2ggYW5kIGhhbmRzLW9uIGFwcGxpY2F0aW9uLlwiIH0sXG5dO1xuXG5jb25zdCBhc3Nlc3NtZW50ID0gW1wiVGhlb3J5IEV4YW1pbmF0aW9uc1wiLCBcIlByYWN0aWNhbCBFeGFtaW5hdGlvbnNcIiwgXCJQcm9qZWN0IFdvcmtcIiwgXCJWaXZhIFZvY2VcIl07XG5cbnR5cGUgU3RyZWFtID0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIGFiYnJldmlhdGlvbnM6IHsgY29kZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH1bXTtcbiAgY29tYmluYXRpb25zOiBzdHJpbmdbXTtcbn07XG5cbmNvbnN0IGNsYXNzWEk6IFN0cmVhbVtdID0gW1xuICB7XG4gICAgbmFtZTogXCJTY2llbmNlIFN0cmVhbVwiLFxuICAgIGNvbG9yOiBcImZyb20taW5kaWFuLWdyZWVuLzEwIHRvLWluZGlhbi1ncmVlbi81XCIsXG4gICAgYWJicmV2aWF0aW9uczogW1xuICAgICAgeyBjb2RlOiBcIlBcIiwgbGFiZWw6IFwiUGh5c2ljc1wiIH0sXG4gICAgICB7IGNvZGU6IFwiQ1wiLCBsYWJlbDogXCJDaGVtaXN0cnlcIiB9LFxuICAgICAgeyBjb2RlOiBcIk1cIiwgbGFiZWw6IFwiTWF0aGVtYXRpY3NcIiB9LFxuICAgICAgeyBjb2RlOiBcIkJcIiwgbGFiZWw6IFwiQmlvbG9neVwiIH0sXG4gICAgICB7IGNvZGU6IFwiQ1NcIiwgbGFiZWw6IFwiQ29tcHV0ZXIgU2NpZW5jZVwiIH0sXG4gICAgICB7IGNvZGU6IFwiUHN5XCIsIGxhYmVsOiBcIlBzeWNob2xvZ3lcIiB9LFxuICAgICAgeyBjb2RlOiBcIlBFXCIsIGxhYmVsOiBcIlBoeXNpY2FsIEVkdWNhdGlvblwiIH0sXG4gICAgXSxcbiAgICBjb21iaW5hdGlvbnM6IFtcIlBDTUJcIiwgXCJQQ01DU1wiLCBcIlBDQlBzeVwiLCBcIlBDTVBFXCJdLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJDb21tZXJjZSBTdHJlYW1cIixcbiAgICBjb2xvcjogXCJmcm9tLWFtYmVyLTUwMC8xMCB0by1hbWJlci01MDAvNVwiLFxuICAgIGFiYnJldmlhdGlvbnM6IFtcbiAgICAgIHsgY29kZTogXCJBXCIsIGxhYmVsOiBcIkFjY291bnRhbmN5XCIgfSxcbiAgICAgIHsgY29kZTogXCJCXCIsIGxhYmVsOiBcIkJ1c2luZXNzIFN0dWRpZXNcIiB9LFxuICAgICAgeyBjb2RlOiBcIkVcIiwgbGFiZWw6IFwiRWNvbm9taWNzXCIgfSxcbiAgICAgIHsgY29kZTogXCJDU1wiLCBsYWJlbDogXCJDb21wdXRlciBTY2llbmNlXCIgfSxcbiAgICAgIHsgY29kZTogXCJQc3lcIiwgbGFiZWw6IFwiUHN5Y2hvbG9neVwiIH0sXG4gICAgICB7IGNvZGU6IFwiUEVcIiwgbGFiZWw6IFwiUGh5c2ljYWwgRWR1Y2F0aW9uXCIgfSxcbiAgICBdLFxuICAgIGNvbWJpbmF0aW9uczogW1wiRUJBQ1NcIiwgXCJFQkFQRVwiLCBcIkVCQVBzeVwiXSxcbiAgfSxcbl07XG5cbmNvbnN0IGNsYXNzWElJOiBTdHJlYW1bXSA9IFtcbiAge1xuICAgIG5hbWU6IFwiU2NpZW5jZSBTdHJlYW1cIixcbiAgICBjb2xvcjogXCJmcm9tLWluZGlhbi1ncmVlbi8xMCB0by1pbmRpYW4tZ3JlZW4vNVwiLFxuICAgIGFiYnJldmlhdGlvbnM6IFtcbiAgICAgIHsgY29kZTogXCJQXCIsIGxhYmVsOiBcIlBoeXNpY3NcIiB9LFxuICAgICAgeyBjb2RlOiBcIkNcIiwgbGFiZWw6IFwiQ2hlbWlzdHJ5XCIgfSxcbiAgICAgIHsgY29kZTogXCJNXCIsIGxhYmVsOiBcIk1hdGhlbWF0aWNzXCIgfSxcbiAgICAgIHsgY29kZTogXCJCXCIsIGxhYmVsOiBcIkJpb2xvZ3lcIiB9LFxuICAgICAgeyBjb2RlOiBcIkNTXCIsIGxhYmVsOiBcIkNvbXB1dGVyIFNjaWVuY2VcIiB9LFxuICAgICAgeyBjb2RlOiBcIlBzeVwiLCBsYWJlbDogXCJQc3ljaG9sb2d5XCIgfSxcbiAgICBdLFxuICAgIGNvbWJpbmF0aW9uczogW1wiUENNQlwiLCBcIlBDTUNTXCIsIFwiUENCUHN5XCIsIFwiUENNUHN5XCJdLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJDb21tZXJjZSBTdHJlYW1cIixcbiAgICBjb2xvcjogXCJmcm9tLWFtYmVyLTUwMC8xMCB0by1hbWJlci01MDAvNVwiLFxuICAgIGFiYnJldmlhdGlvbnM6IFtcbiAgICAgIHsgY29kZTogXCJBXCIsIGxhYmVsOiBcIkFjY291bnRhbmN5XCIgfSxcbiAgICAgIHsgY29kZTogXCJCXCIsIGxhYmVsOiBcIkJ1c2luZXNzIFN0dWRpZXNcIiB9LFxuICAgICAgeyBjb2RlOiBcIkVcIiwgbGFiZWw6IFwiRWNvbm9taWNzXCIgfSxcbiAgICAgIHsgY29kZTogXCJDU1wiLCBsYWJlbDogXCJDb21wdXRlciBTY2llbmNlXCIgfSxcbiAgICAgIHsgY29kZTogXCJQc3lcIiwgbGFiZWw6IFwiUHN5Y2hvbG9neVwiIH0sXG4gICAgXSxcbiAgICBjb21iaW5hdGlvbnM6IFtcIkVCQUNTXCIsIFwiRUJBQU1cIiwgXCJFQkFQc3lcIl0sXG4gIH0sXG5dO1xuXG5jb25zdCBpbnRlZ3JhdGVkUG9pbnRzID0gW1xuICBcIkN1cnJpY3VsdW0gdGhvcm91Z2hseSBtYXBwZWQgd2l0aCB0aGUgQ0JTRSBCb2FyZCBzeWxsYWJ1cy5cIixcbiAgXCJFeGNlbGxlbnQgZmFjdWx0eSB3aXRoIGV4dGVuc2l2ZSBleHBlcmllbmNlIGluIHRyYWluaW5nIHN0dWRlbnRzIGZvciBjb21wZXRpdGl2ZSBleGFtaW5hdGlvbnMuXCIsXG4gIFwiU3RyZXNzIG1hbmFnZW1lbnQgdGhyb3VnaCBZb2dhLCBQaHlzaWNhbCBFZHVjYXRpb24sIEFydCwgTXVzaWMsIGFuZCBDb3Vuc2VsbGluZyBTZXNzaW9ucyB0byBlbnN1cmUgaG9saXN0aWMgZGV2ZWxvcG1lbnQuXCIsXG5dO1xuXG5jb25zdCBTZWN0aW9uSGVhZGluZyA9ICh7IGV5ZWJyb3csIHRpdGxlIH06IHsgZXllYnJvdz86IHN0cmluZzsgdGl0bGU6IHN0cmluZyB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctM3hsIG14LWF1dG8gdGV4dC1jZW50ZXIgbWItMTJcIj5cbiAgICB7ZXllYnJvdyAmJiAoXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLVswLjI1ZW1dIHRleHQtaW5kaWFuLWdyZWVuIG1iLTNcIj5cbiAgICAgICAge2V5ZWJyb3d9XG4gICAgICA8L3A+XG4gICAgKX1cbiAgICA8aDJcbiAgICAgIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNHhsIGZvbnQtYm9sZCBtYi0zXCJcbiAgICAgIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiUG9wcGlucywgc2Fucy1zZXJpZlwiLCBjb2xvcjogXCIjMDAwMDAwXCIgfX1cbiAgICA+XG4gICAgICB7dGl0bGV9XG4gICAgPC9oMj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gaC1bM3B4XSB3LTE2IGJnLWluZGlhbi1ncmVlbiByb3VuZGVkLWZ1bGxcIiAvPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFN0cmVhbUJsb2NrID0gKHsgc3RyZWFtIH06IHsgc3RyZWFtOiBTdHJlYW0gfSkgPT4gKFxuICA8bW90aW9uLmRpdlxuICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMTYgfX1cbiAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxuICAgIGNsYXNzTmFtZT17YHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItaW5kaWFuLWdyZWVuLzIwIGJnLWdyYWRpZW50LXRvLWJyICR7c3RyZWFtLmNvbG9yfSBzaGFkb3ctc20gcC02IG1kOnAtOCBoLWZ1bGwgZmxleCBmbGV4LWNvbGB9XG4gID5cbiAgICA8aDRcbiAgICAgIGNsYXNzTmFtZT1cInRleHQteGwgbWQ6dGV4dC0yeGwgZm9udC1ib2xkIG1iLTVcIlxuICAgICAgc3R5bGU9e3sgZm9udEZhbWlseTogXCJQb3BwaW5zLCBzYW5zLXNlcmlmXCIsIGNvbG9yOiBcIiMwMDAwMDBcIiB9fVxuICAgID5cbiAgICAgIHtzdHJlYW0ubmFtZX1cbiAgICA8L2g0PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yZW1dIHRleHQtaW5kaWFuLWdyZWVuIG1iLTNcIj5cbiAgICAgICAgU3ViamVjdCBBYmJyZXZpYXRpb25zXG4gICAgICA8L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgc206Z3JpZC1jb2xzLTMgZ2FwLTJcIj5cbiAgICAgICAge3N0cmVhbS5hYmJyZXZpYXRpb25zLm1hcCgoYSkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGtleT17YS5jb2RlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1iYXNlbGluZSBnYXAtMiByb3VuZGVkLWxnIGJnLXdoaXRlLzgwIGJvcmRlciBib3JkZXItaW5kaWFuLWdyZWVuLzE1IHB4LTMgcHktMlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtaW5kaWFuLWdyZWVuXCI+e2EuY29kZX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCIgc3R5bGU9e3sgY29sb3I6IFwiIzMzMzMzM1wiIH19PlxuICAgICAgICAgICAgICDigJMge2EubGFiZWx9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC1hdXRvXCI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLVswLjJlbV0gdGV4dC1pbmRpYW4tZ3JlZW4gbWItM1wiPlxuICAgICAgICBDb21iaW5hdGlvbnMgT2ZmZXJlZFxuICAgICAgPC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMlwiPlxuICAgICAgICB7c3RyZWFtLmNvbWJpbmF0aW9ucy5tYXAoKGMsIGkpID0+IChcbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAga2V5PXtjfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHJvdW5kZWQtZnVsbCBiZy1pbmRpYW4tZ3JlZW4gdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHB4LTQgcHktMiBzaGFkb3ctc21cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGUvNzAgdGV4dC1zbVwiPntpICsgMX0uPC9zcGFuPlxuICAgICAgICAgICAge2N9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L21vdGlvbi5kaXY+XG4pO1xuXG5jb25zdCBDbGFzc0Jsb2NrID0gKHsgdGl0bGUsIHN0cmVhbXMgfTogeyB0aXRsZTogc3RyaW5nOyBzdHJlYW1zOiBTdHJlYW1bXSB9KSA9PiAoXG4gIDxkaXY+XG4gICAgPGgzXG4gICAgICBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtZDp0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1jZW50ZXIgbWItOFwiXG4gICAgICBzdHlsZT17eyBmb250RmFtaWx5OiBcIlBvcHBpbnMsIHNhbnMtc2VyaWZcIiwgY29sb3I6IFwiIzAwMDAwMFwiIH19XG4gICAgPlxuICAgICAge3RpdGxlfVxuICAgIDwvaDM+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGxnOmdyaWQtY29scy0yIGdhcC02IGxnOmdhcC04XCI+XG4gICAgICB7c3RyZWFtcy5tYXAoKHMpID0+IChcbiAgICAgICAgPFN0cmVhbUJsb2NrIGtleT17cy5uYW1lfSBzdHJlYW09e3N9IC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBTZW5pb3JTZWNvbmRhcnlTdGFnZSA9ICgpID0+IChcbiAgPExheW91dD5cbiAgICA8UGFnZUhlcm9cbiAgICAgIHRpdGxlPVwiU2VuaW9yIFNlY29uZGFyeSBTdGFnZVwiXG4gICAgICBicmVhZGNydW1icz17W1xuICAgICAgICB7IGxhYmVsOiBcIkFjYWRlbWljc1wiLCBwYXRoOiBcIi9hY2FkZW1pY3NcIiB9LFxuICAgICAgICB7IGxhYmVsOiBcIlNlbmlvciBTZWNvbmRhcnkgU3RhZ2VcIiwgcGF0aDogXCIvYWNhZGVtaWNzL3Nlbmlvci1zZWNvbmRhcnktc3RhZ2VcIiB9LFxuICAgICAgXX1cbiAgICAvPlxuXG4gICAgey8qIFN1YnRpdGxlIGJhbmQgKi99XG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1pbmRpYW4tZ3JlZW4vNSBib3JkZXItYiBib3JkZXItaW5kaWFuLWdyZWVuLzEwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgcHktNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWluZGlhbi1ncmVlbiBmb250LXNlbWlib2xkIHRyYWNraW5nLXdpZGVcIj5MZXZlbDogQ2xhc3NlcyBYSSDigJMgWElJPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICB7LyogSW50cm9kdWN0aW9uICovfVxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTE2IGxnOnB5LTIwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGxnOmdyaWQtY29scy0yIGdhcC0xMCBsZzpnYXAtMTQgbGc6aXRlbXMtc3RyZXRjaFwiPlxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICAgIHdoaWxlSW5WaWV3PVwidmlzaWJsZVwiXG4gICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlLCBhbW91bnQ6IDAuMiB9fVxuICAgICAgICAgICAgdmFyaWFudHM9e2ZhZGVVcH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctMnhsIHJpbmctMSByaW5nLWJsYWNrLzUgaC1mdWxsXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17c25yU2Vjb25kYXJ5fVxuICAgICAgICAgICAgICBhbHQ9XCJTZW5pb3IgU2Vjb25kYXJ5IHN0dWRlbnRzIGF0IFNKUlBTLUhCUlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIGFzcGVjdC1bNC8zXSBsZzphc3BlY3QtYXV0b1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICAgICAgICB3aGlsZUluVmlldz1cInZpc2libGVcIlxuICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSwgYW1vdW50OiAwLjIgfX1cbiAgICAgICAgICAgIHZhcmlhbnRzPXtmYWRlVXB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGgtZnVsbFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yNWVtXSB0ZXh0LWluZGlhbi1ncmVlbiBtYi0zXCI+XG4gICAgICAgICAgICAgIEludHJvZHVjdGlvblxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGgyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNHhsIGZvbnQtYm9sZCBsZWFkaW5nLXRpZ2h0IG1iLTZcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBmb250RmFtaWx5OiBcIlBvcHBpbnMsIHNhbnMtc2VyaWZcIiwgY29sb3I6IFwiIzAwMDAwMFwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNlbmlvciBTZWNvbmRhcnkgU3RhZ2VcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgbGc6dGV4dC1sZyBsZWFkaW5nLXJlbGF4ZWQgbWItNFwiIHN0eWxlPXt7IGNvbG9yOiBcIiMzMzMzMzNcIiB9fT5cbiAgICAgICAgICAgICAgVGhlIFNlbmlvciBTZWNvbmRhcnkgU3RhZ2UgKENsYXNzZXMgWEnigJNYSUkpIHByZXBhcmVzIHN0dWRlbnRzIGZvciBoaWdoZXIgZWR1Y2F0aW9uIGFuZCBmdXR1cmUgY2FyZWVycyB0aHJvdWdoIHNwZWNpYWxpc2VkIGFjYWRlbWljIHN0cmVhbXMgYW5kIGhvbGlzdGljIGRldmVsb3BtZW50LlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGxnOnRleHQtbGcgbGVhZGluZy1yZWxheGVkIG1iLTRcIiBzdHlsZT17eyBjb2xvcjogXCIjMzMzMzMzXCIgfX0+XG4gICAgICAgICAgICAgIE91ciBwcm9ncmFtbWUgY29tYmluZXMgc3Ryb25nIHN1YmplY3Qgc3BlY2lhbGlzYXRpb24gd2l0aCBjYXJlZXIgY291bnNlbGxpbmcsIGVudHJhbmNlLWV4YW0gcHJlcGFyYXRpb24gYW5kIHNraWxsIGJ1aWxkaW5nIOKAlCBoZWxwaW5nIGV2ZXJ5IHN0dWRlbnQgbWFrZSBjb25maWRlbnQsIGluZm9ybWVkIGNob2ljZXMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgbGc6dGV4dC1sZyBsZWFkaW5nLXJlbGF4ZWQgbWItNFwiIHN0eWxlPXt7IGNvbG9yOiBcIiMzMzMzMzNcIiB9fT5cbiAgICAgICAgICAgICAgVGVhY2hlcnMgYWN0IGFzIG1lbnRvcnMsIGd1aWRpbmcgbGVhcm5lcnMgdG8gdGhpbmsgaW5kZXBlbmRlbnRseSwgcmVzZWFyY2ggZGVlcGx5IGFuZCBkZXZlbG9wIHRoZSBsZWFkZXJzaGlwIHF1YWxpdGllcyB0aGV5IHdpbGwgY2FycnkgaW50byB1bml2ZXJzaXR5IGFuZCB0aGUgd29ya3BsYWNlLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICB7LyogRm9jdXMgKi99XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTYgYmctaW5kaWFuLWdyZWVuLzVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICA8U2VjdGlvbkhlYWRpbmcgdGl0bGU9XCJGb2N1c1wiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNlwiPlxuICAgICAgICAgIHtmb2N1c0l0ZW1zLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAga2V5PXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDE2IH19XG4gICAgICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjQ1LCBkZWxheTogKGkgJSAzKSAqIDAuMDYgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwicm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1pbmRpYW4tZ3JlZW4vMjAgc2hhZG93LXNtIGhvdmVyOnNoYWRvdy14bCBob3ZlcjotdHJhbnNsYXRlLXktMSB0cmFuc2l0aW9uLWFsbCBoLWZ1bGwgYmctd2hpdGVcIj5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC02IGZsZXggaXRlbXMtc3RhcnQgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMiBoLTEyIHJvdW5kZWQteGwgYmctaW5kaWFuLWdyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNocmluay0wIHNoYWRvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8aXRlbS5pY29uIGNsYXNzTmFtZT1cImgtNiB3LTYgdGV4dC13aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCBtYi0xXCIgc3R5bGU9e3sgY29sb3I6IFwiIzAwMDAwMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGxlYWRpbmctcmVsYXhlZFwiIHN0eWxlPXt7IGNvbG9yOiBcIiMzMzMzMzNcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5kZXNjfVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgey8qIENvdXJzZXMgT2ZmZXJlZCAqL31cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNiBsZzpweS0yMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgIDxTZWN0aW9uSGVhZGluZyBleWVicm93PVwiQWNhZGVtaWMgWWVhciAyMDI24oCTMjdcIiB0aXRsZT1cIkNvdXJzZXMgT2ZmZXJlZFwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xNFwiPlxuICAgICAgICAgIDxDbGFzc0Jsb2NrIHRpdGxlPVwiQ2xhc3MgWElcIiBzdHJlYW1zPXtjbGFzc1hJfSAvPlxuICAgICAgICAgIDxDbGFzc0Jsb2NrIHRpdGxlPVwiQ2xhc3MgWElJXCIgc3RyZWFtcz17Y2xhc3NYSUl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgey8qIEFzc2Vzc21lbnQgKi99XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTYgYmctaW5kaWFuLWdyZWVuLzVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICA8U2VjdGlvbkhlYWRpbmcgdGl0bGU9XCJBc3Nlc3NtZW50XCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy0zeGwgbXgtYXV0byBncmlkIHNtOmdyaWQtY29scy0yIGdhcC00XCI+XG4gICAgICAgICAge2Fzc2Vzc21lbnQubWFwKChhKSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17YX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgcm91bmRlZC14bCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWluZGlhbi1ncmVlbi8yMCBzaGFkb3ctc20gcHgtNSBweS00XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENsaXBib2FyZExpc3QgY2xhc3NOYW1lPVwiaC01IHctNSB0ZXh0LWluZGlhbi1ncmVlbiBzaHJpbmstMFwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCIgc3R5bGU9e3sgY29sb3I6IFwiIzAwMDAwMFwiIH19PlxuICAgICAgICAgICAgICAgIHthfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICB7LyogT2JqZWN0aXZlICovfVxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTE2IGxnOnB5LTIwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgPFNlY3Rpb25IZWFkaW5nIHRpdGxlPVwiT2JqZWN0aXZlXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy0zeGwgbXgtYXV0b1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC0yeGwgYm9yZGVyLWwtNCBib3JkZXItaW5kaWFuLWdyZWVuIGJnLXdoaXRlIHNoYWRvdy1zbSBwLTYgbWQ6cC04IGZsZXggZ2FwLTRcIj5cbiAgICAgICAgICAgIDxUYXJnZXQgY2xhc3NOYW1lPVwiaC04IHctOCB0ZXh0LWluZGlhbi1ncmVlbiBzaHJpbmstMFwiIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgbGc6dGV4dC1sZyBsZWFkaW5nLXJlbGF4ZWRcIiBzdHlsZT17eyBjb2xvcjogXCIjMzMzMzMzXCIgfX0+XG4gICAgICAgICAgICAgIFByZXBhcmUgc3R1ZGVudHMgZm9yIGhpZ2hlciBlZHVjYXRpb24sIGNvbXBldGl0aXZlIGV4YW1pbmF0aW9ucywgYW5kIHN1Y2Nlc3NmdWwgcHJvZmVzc2lvbmFsIGNhcmVlcnMgdGhyb3VnaCBhIGJhbGFuY2VkIGFjYWRlbWljIGFuZCBwcmFjdGljYWwgbGVhcm5pbmcgYXBwcm9hY2guXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgey8qIEludGVncmF0ZWQgQ291cnNlcyAqL31cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNiBiZy1pbmRpYW4tZ3JlZW4vNVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgIDxTZWN0aW9uSGVhZGluZyB0aXRsZT1cIkludGVncmF0ZWQgQ291cnNlc1wiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNHhsIG14LWF1dG9cIj5cbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAxNiB9fVxuICAgICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41IH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWluZGlhbi1ncmVlbi8yMCBzaGFkb3ctc20gcC02IG1kOnAtOFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNCBtYi02XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xNCBoLTE0IHJvdW5kZWQteGwgYmctaW5kaWFuLWdyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNoYWRvd1wiPlxuICAgICAgICAgICAgICAgIDxSb2NrZXQgY2xhc3NOYW1lPVwiaC03IHctNyB0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yNWVtXSB0ZXh0LWluZGlhbi1ncmVlbiBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICBDb21wZXRpdGl2ZSBFZGdlXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxoM1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiUG9wcGlucywgc2Fucy1zZXJpZlwiLCBjb2xvcjogXCIjMDAwMDAwXCIgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBKRUUgJmFtcDsgTkVFVFxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XG4gICAgICAgICAgICAgIHtpbnRlZ3JhdGVkUG9pbnRzLm1hcCgocCkgPT4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e3B9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm10LTIgdy0yIGgtMiByb3VuZGVkLWZ1bGwgYmctaW5kaWFuLWdyZWVuIHNocmluay0wXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmFzZSBsZWFkaW5nLXJlbGF4ZWRcIiBzdHlsZT17eyBjb2xvcjogXCIjMzMzMzMzXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIHtwfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgey8qIENUQSAqL31cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNCBiZy1pbmRpYW4tZ3JlZW4gdGV4dC13aGl0ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxTcGFya2xlcyBjbGFzc05hbWU9XCJoLTEwIHctMTAgbXgtYXV0byBtYi00IHRleHQtZ29sZGVuLXllbGxvd1wiIC8+XG4gICAgICAgIDxoMlxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtMnhsIG1kOnRleHQtM3hsIGZvbnQtYm9sZCBtYi0zXCJcbiAgICAgICAgICBzdHlsZT17eyBmb250RmFtaWx5OiBcIlBvcHBpbnMsIHNhbnMtc2VyaWZcIiB9fVxuICAgICAgICA+XG4gICAgICAgICAgQmVnaW4gWW91ciBDaGlsZCdzIEpvdXJuZXkgYXQgU0pSUFMtSEJSXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUvODUgbWF4LXctMnhsIG14LWF1dG8gbWItNlwiPlxuICAgICAgICAgIEpvaW4gYSBzY2hvb2wgd2hlcmUgZXZlcnkgbGVhcm5lciBpcyBudXJ0dXJlZCB3aXRoIGNhcmUgYW5kIGluc3BpcmVkIHRvIGV4Y2VsLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgdG89XCIvYWRtaXNzaW9ucy9hZG1pc3Npb25zLXByb2Nlc3NcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBiZy13aGl0ZSB0ZXh0LWluZGlhbi1ncmVlbiBmb250LXNlbWlib2xkIHB4LTcgcHktMyByb3VuZGVkLWZ1bGwgc2hhZG93IGhvdmVyOmJnLWdvbGRlbi15ZWxsb3cgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgID5cbiAgICAgICAgICBBcHBseSBmb3IgQWRtaXNzaW9uXG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgPC9MYXlvdXQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTZW5pb3JTZWNvbmRhcnlTdGFnZTtcbiJdLCJmaWxlIjoiL2hvbWUvc2pyc2g5MTYvcHVibGljX2h0bWwvc3JjL3BhZ2VzL2FjYWRlbWljcy9TZW5pb3JTZWNvbmRhcnlTdGFnZS50c3gifQ==