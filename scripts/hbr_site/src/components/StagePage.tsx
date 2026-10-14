import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/StagePage.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/components/StagePage.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import Layout from "/src/components/Layout.tsx";
import PageHero from "/src/components/PageHero.tsx";
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=5efa796b";
import { Sparkles } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=5efa796b";
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
const StagePage = ({ title, subtitle, breadcrumbLabel, breadcrumbPath, image, intro, overview, overviewLabel = "Stage Overview", subjects, subjectGroups, features, highlights, coScholastic })=>{
    return /*#__PURE__*/ _jsxDEV(Layout, {
        "data-lov-id": "src/components/StagePage.tsx:51:4",
        "data-lov-name": "Layout",
        "data-component-path": "src/components/StagePage.tsx",
        "data-component-line": "51",
        "data-component-file": "StagePage.tsx",
        "data-component-name": "Layout",
        "data-component-content": "%7B%7D",
        children: [
            /*#__PURE__*/ _jsxDEV(PageHero, {
                "data-lov-id": "src/components/StagePage.tsx:52:6",
                "data-lov-name": "PageHero",
                "data-component-path": "src/components/StagePage.tsx",
                "data-component-line": "52",
                "data-component-file": "StagePage.tsx",
                "data-component-name": "PageHero",
                "data-component-content": "%7B%7D",
                title: title,
                breadcrumbs: [
                    {
                        label: "Academics",
                        path: "/academics"
                    },
                    {
                        label: breadcrumbLabel,
                        path: breadcrumbPath
                    }
                ]
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                "data-lov-id": "src/components/StagePage.tsx:61:6",
                "data-lov-name": "div",
                "data-component-path": "src/components/StagePage.tsx",
                "data-component-line": "61",
                "data-component-file": "StagePage.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22bg-indian-green%2F5%20border-b%20border-indian-green%2F10%22%7D",
                className: "bg-indian-green/5 border-b border-indian-green/10",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/components/StagePage.tsx:62:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/StagePage.tsx",
                    "data-component-line": "62",
                    "data-component-file": "StagePage.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20py-4%20text-center%22%7D",
                    className: "container mx-auto px-4 py-4 text-center",
                    children: /*#__PURE__*/ _jsxDEV("p", {
                        "data-lov-id": "src/components/StagePage.tsx:63:10",
                        "data-lov-name": "p",
                        "data-component-path": "src/components/StagePage.tsx",
                        "data-component-line": "63",
                        "data-component-file": "StagePage.tsx",
                        "data-component-name": "p",
                        "data-component-content": "%7B%22className%22%3A%22text-indian-green%20font-semibold%20tracking-wide%22%7D",
                        className: "text-indian-green font-semibold tracking-wide",
                        children: subtitle
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/components/StagePage.tsx:68:6",
                "data-lov-name": "section",
                "data-component-path": "src/components/StagePage.tsx",
                "data-component-line": "68",
                "data-component-file": "StagePage.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20lg%3Apy-20%22%7D",
                className: "py-16 lg:py-20",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/components/StagePage.tsx:69:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/StagePage.tsx",
                    "data-component-line": "69",
                    "data-component-file": "StagePage.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/components/StagePage.tsx:70:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/StagePage.tsx",
                        "data-component-line": "70",
                        "data-component-file": "StagePage.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22grid%20lg%3Agrid-cols-2%20gap-10%20lg%3Agap-14%20lg%3Aitems-stretch%22%7D",
                        className: "grid lg:grid-cols-2 gap-10 lg:gap-14 lg:items-stretch",
                        children: [
                            /*#__PURE__*/ _jsxDEV(motion.div, {
                                "data-lov-id": "src/components/StagePage.tsx:71:12",
                                "data-lov-name": "motion.div",
                                "data-component-path": "src/components/StagePage.tsx",
                                "data-component-line": "71",
                                "data-component-file": "StagePage.tsx",
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
                                    "data-lov-id": "src/components/StagePage.tsx:78:14",
                                    "data-lov-name": "img",
                                    "data-component-path": "src/components/StagePage.tsx",
                                    "data-component-line": "78",
                                    "data-component-file": "StagePage.tsx",
                                    "data-component-name": "img",
                                    "data-component-content": "%7B%22className%22%3A%22w-full%20h-full%20object-cover%20aspect-%5B4%2F3%5D%20lg%3Aaspect-auto%22%7D",
                                    src: image,
                                    alt: `${title} learning at SJRPS-HBR`,
                                    className: "w-full h-full object-cover aspect-[4/3] lg:aspect-auto"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV(motion.div, {
                                "data-lov-id": "src/components/StagePage.tsx:84:12",
                                "data-lov-name": "motion.div",
                                "data-component-path": "src/components/StagePage.tsx",
                                "data-component-line": "84",
                                "data-component-file": "StagePage.tsx",
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
                                        "data-lov-id": "src/components/StagePage.tsx:91:14",
                                        "data-lov-name": "p",
                                        "data-component-path": "src/components/StagePage.tsx",
                                        "data-component-line": "91",
                                        "data-component-file": "StagePage.tsx",
                                        "data-component-name": "p",
                                        "data-component-content": "%7B%22text%22%3A%22Introduction%22%2C%22className%22%3A%22text-xs%20font-semibold%20uppercase%20tracking-%5B0.25em%5D%20text-indian-green%20mb-3%22%7D",
                                        className: "text-xs font-semibold uppercase tracking-[0.25em] text-indian-green mb-3",
                                        children: "Introduction"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("h2", {
                                        "data-lov-id": "src/components/StagePage.tsx:94:14",
                                        "data-lov-name": "h2",
                                        "data-component-path": "src/components/StagePage.tsx",
                                        "data-component-line": "94",
                                        "data-component-file": "StagePage.tsx",
                                        "data-component-name": "h2",
                                        "data-component-content": "%7B%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20leading-tight%20mb-6%22%7D",
                                        className: "text-3xl md:text-4xl font-bold leading-tight mb-6",
                                        style: {
                                            fontFamily: "Poppins, sans-serif",
                                            color: "#000000"
                                        },
                                        children: title
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this),
                                    intro.map((p, i)=>/*#__PURE__*/ _jsxDEV("p", {
                                            "data-lov-id": "src/components/StagePage.tsx:101:16",
                                            "data-lov-name": "p",
                                            "data-component-path": "src/components/StagePage.tsx",
                                            "data-component-line": "101",
                                            "data-component-file": "StagePage.tsx",
                                            "data-component-name": "p",
                                            "data-component-content": "%7B%22className%22%3A%22text-base%20lg%3Atext-lg%20leading-relaxed%20mb-4%22%7D",
                                            className: "text-base lg:text-lg leading-relaxed mb-4",
                                            style: {
                                                color: "#333333"
                                            },
                                            children: p
                                        }, i, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/components/StagePage.tsx:115:6",
                "data-lov-name": "section",
                "data-component-path": "src/components/StagePage.tsx",
                "data-component-line": "115",
                "data-component-file": "StagePage.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20bg-indian-green%2F5%22%7D",
                className: "py-16 bg-indian-green/5",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/components/StagePage.tsx:116:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/StagePage.tsx",
                    "data-component-line": "116",
                    "data-component-file": "StagePage.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/components/StagePage.tsx:117:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/StagePage.tsx",
                            "data-component-line": "117",
                            "data-component-file": "StagePage.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22max-w-3xl%20mx-auto%20text-center%20mb-12%22%7D",
                            className: "max-w-3xl mx-auto text-center mb-12",
                            children: [
                                /*#__PURE__*/ _jsxDEV("h2", {
                                    "data-lov-id": "src/components/StagePage.tsx:118:12",
                                    "data-lov-name": "h2",
                                    "data-component-path": "src/components/StagePage.tsx",
                                    "data-component-line": "118",
                                    "data-component-file": "StagePage.tsx",
                                    "data-component-name": "h2",
                                    "data-component-content": "%7B%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20mb-3%22%7D",
                                    className: "text-3xl md:text-4xl font-bold mb-3",
                                    style: {
                                        fontFamily: "Poppins, sans-serif",
                                        color: "#000000"
                                    },
                                    children: overviewLabel
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/components/StagePage.tsx:124:12",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/StagePage.tsx",
                                    "data-component-line": "124",
                                    "data-component-file": "StagePage.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22mx-auto%20h-%5B3px%5D%20w-16%20bg-indian-green%20rounded-full%22%7D",
                                    className: "mx-auto h-[3px] w-16 bg-indian-green rounded-full"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/components/StagePage.tsx:126:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/StagePage.tsx",
                            "data-component-line": "126",
                            "data-component-file": "StagePage.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22grid%20sm%3Agrid-cols-2%20lg%3Agrid-cols-3%20gap-6%22%7D",
                            className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: overview.map((item, i)=>/*#__PURE__*/ _jsxDEV(motion.div, {
                                    "data-lov-id": "src/components/StagePage.tsx:128:14",
                                    "data-lov-name": "motion.div",
                                    "data-component-path": "src/components/StagePage.tsx",
                                    "data-component-line": "128",
                                    "data-component-file": "StagePage.tsx",
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
                                        "data-lov-id": "src/components/StagePage.tsx:135:16",
                                        "data-lov-name": "Card",
                                        "data-component-path": "src/components/StagePage.tsx",
                                        "data-component-line": "135",
                                        "data-component-file": "StagePage.tsx",
                                        "data-component-name": "Card",
                                        "data-component-content": "%7B%22className%22%3A%22rounded-2xl%20border%20border-indian-green%2F20%20shadow-sm%20hover%3Ashadow-xl%20hover%3A-translate-y-1%20transition-all%20h-full%20bg-white%22%7D",
                                        className: "rounded-2xl border border-indian-green/20 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all h-full bg-white",
                                        children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                            "data-lov-id": "src/components/StagePage.tsx:136:18",
                                            "data-lov-name": "CardContent",
                                            "data-component-path": "src/components/StagePage.tsx",
                                            "data-component-line": "136",
                                            "data-component-file": "StagePage.tsx",
                                            "data-component-name": "CardContent",
                                            "data-component-content": "%7B%22className%22%3A%22p-6%20flex%20items-start%20gap-4%22%7D",
                                            className: "p-6 flex items-start gap-4",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/components/StagePage.tsx:137:20",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/components/StagePage.tsx",
                                                    "data-component-line": "137",
                                                    "data-component-file": "StagePage.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22w-12%20h-12%20rounded-xl%20bg-indian-green%20flex%20items-center%20justify-center%20shrink-0%20shadow%22%7D",
                                                    className: "w-12 h-12 rounded-xl bg-indian-green flex items-center justify-center shrink-0 shadow",
                                                    children: /*#__PURE__*/ _jsxDEV(item.icon, {
                                                        "data-lov-id": "src/components/StagePage.tsx:138:22",
                                                        "data-lov-name": "item.icon",
                                                        "data-component-path": "src/components/StagePage.tsx",
                                                        "data-component-line": "138",
                                                        "data-component-file": "StagePage.tsx",
                                                        "data-component-name": "item.icon",
                                                        "data-component-content": "%7B%22className%22%3A%22h-6%20w-6%20text-white%22%7D",
                                                        className: "h-6 w-6 text-white"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/components/StagePage.tsx:140:20",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/components/StagePage.tsx",
                                                    "data-component-line": "140",
                                                    "data-component-file": "StagePage.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%7D",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("h3", {
                                                            "data-lov-id": "src/components/StagePage.tsx:141:22",
                                                            "data-lov-name": "h3",
                                                            "data-component-path": "src/components/StagePage.tsx",
                                                            "data-component-line": "141",
                                                            "data-component-file": "StagePage.tsx",
                                                            "data-component-name": "h3",
                                                            "data-component-content": "%7B%22className%22%3A%22text-lg%20font-bold%20mb-1%22%7D",
                                                            className: "text-lg font-bold mb-1",
                                                            style: {
                                                                color: "#000000"
                                                            },
                                                            children: item.title
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                                            lineNumber: 141,
                                                            columnNumber: 23
                                                        }, this),
                                                        item.desc && /*#__PURE__*/ _jsxDEV("p", {
                                                            "data-lov-id": "src/components/StagePage.tsx:145:24",
                                                            "data-lov-name": "p",
                                                            "data-component-path": "src/components/StagePage.tsx",
                                                            "data-component-line": "145",
                                                            "data-component-file": "StagePage.tsx",
                                                            "data-component-name": "p",
                                                            "data-component-content": "%7B%22className%22%3A%22text-sm%20leading-relaxed%22%7D",
                                                            className: "text-sm leading-relaxed",
                                                            style: {
                                                                color: "#333333"
                                                            },
                                                            children: item.desc
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                            lineNumber: 136,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                        lineNumber: 135,
                                        columnNumber: 17
                                    }, this)
                                }, item.title, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/components/StagePage.tsx:159:6",
                "data-lov-name": "section",
                "data-component-path": "src/components/StagePage.tsx",
                "data-component-line": "159",
                "data-component-file": "StagePage.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20lg%3Apy-20%22%7D",
                className: "py-16 lg:py-20",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/components/StagePage.tsx:160:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/StagePage.tsx",
                    "data-component-line": "160",
                    "data-component-file": "StagePage.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/components/StagePage.tsx:161:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/StagePage.tsx",
                            "data-component-line": "161",
                            "data-component-file": "StagePage.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22max-w-3xl%20mx-auto%20text-center%20mb-12%22%7D",
                            className: "max-w-3xl mx-auto text-center mb-12",
                            children: [
                                /*#__PURE__*/ _jsxDEV("h2", {
                                    "data-lov-id": "src/components/StagePage.tsx:162:12",
                                    "data-lov-name": "h2",
                                    "data-component-path": "src/components/StagePage.tsx",
                                    "data-component-line": "162",
                                    "data-component-file": "StagePage.tsx",
                                    "data-component-name": "h2",
                                    "data-component-content": "%7B%22text%22%3A%22Core%20Subjects%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20mb-3%22%7D",
                                    className: "text-3xl md:text-4xl font-bold mb-3",
                                    style: {
                                        fontFamily: "Poppins, sans-serif",
                                        color: "#000000"
                                    },
                                    children: "Core Subjects"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/components/StagePage.tsx:168:12",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/StagePage.tsx",
                                    "data-component-line": "168",
                                    "data-component-file": "StagePage.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22mx-auto%20h-%5B3px%5D%20w-16%20bg-indian-green%20rounded-full%22%7D",
                                    className: "mx-auto h-[3px] w-16 bg-indian-green rounded-full"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this),
                        subjectGroups && subjectGroups.length > 0 ? /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/components/StagePage.tsx:171:12",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/StagePage.tsx",
                            "data-component-line": "171",
                            "data-component-file": "StagePage.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22space-y-12%22%7D",
                            className: "space-y-12",
                            children: subjectGroups.map((group)=>/*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/components/StagePage.tsx:173:16",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/StagePage.tsx",
                                    "data-component-line": "173",
                                    "data-component-file": "StagePage.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%7D",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("h3", {
                                            "data-lov-id": "src/components/StagePage.tsx:174:18",
                                            "data-lov-name": "h3",
                                            "data-component-path": "src/components/StagePage.tsx",
                                            "data-component-line": "174",
                                            "data-component-file": "StagePage.tsx",
                                            "data-component-name": "h3",
                                            "data-component-content": "%7B%22className%22%3A%22text-xl%20md%3Atext-2xl%20font-bold%20text-center%20mb-6%22%7D",
                                            className: "text-xl md:text-2xl font-bold text-center mb-6",
                                            style: {
                                                fontFamily: "Poppins, sans-serif",
                                                color: "#000000"
                                            },
                                            children: group.label
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                            lineNumber: 174,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/components/StagePage.tsx:180:18",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/components/StagePage.tsx",
                                            "data-component-line": "180",
                                            "data-component-file": "StagePage.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22grid%20grid-cols-2%20sm%3Agrid-cols-3%20lg%3Agrid-cols-4%20gap-5%22%7D",
                                            className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5",
                                            children: group.items.map((s, i)=>/*#__PURE__*/ _jsxDEV(motion.div, {
                                                    "data-lov-id": "src/components/StagePage.tsx:182:22",
                                                    "data-lov-name": "motion.div",
                                                    "data-component-path": "src/components/StagePage.tsx",
                                                    "data-component-line": "182",
                                                    "data-component-file": "StagePage.tsx",
                                                    "data-component-name": "motion.div",
                                                    "data-component-content": "%7B%22className%22%3A%22rounded-2xl%20p-6%20text-center%20border%20border-indian-green%2F20%20bg-white%20shadow-sm%20hover%3Ashadow-lg%20hover%3A-translate-y-1%20transition-all%22%7D",
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
                                                        duration: 0.4,
                                                        delay: i % 4 * 0.05
                                                    },
                                                    className: "rounded-2xl p-6 text-center border border-indian-green/20 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            "data-lov-id": "src/components/StagePage.tsx:190:24",
                                                            "data-lov-name": "div",
                                                            "data-component-path": "src/components/StagePage.tsx",
                                                            "data-component-line": "190",
                                                            "data-component-file": "StagePage.tsx",
                                                            "data-component-name": "div",
                                                            "data-component-content": "%7B%22className%22%3A%22mx-auto%20w-14%20h-14%20rounded-full%20bg-indian-green%2F10%20border%20border-indian-green%2F30%20flex%20items-center%20justify-center%20mb-3%22%7D",
                                                            className: "mx-auto w-14 h-14 rounded-full bg-indian-green/10 border border-indian-green/30 flex items-center justify-center mb-3",
                                                            children: /*#__PURE__*/ _jsxDEV(s.icon, {
                                                                "data-lov-id": "src/components/StagePage.tsx:191:26",
                                                                "data-lov-name": "s.icon",
                                                                "data-component-path": "src/components/StagePage.tsx",
                                                                "data-component-line": "191",
                                                                "data-component-file": "StagePage.tsx",
                                                                "data-component-name": "s.icon",
                                                                "data-component-content": "%7B%22className%22%3A%22h-6%20w-6%20text-indian-green%22%7D",
                                                                className: "h-6 w-6 text-indian-green"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                                                lineNumber: 191,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                                            lineNumber: 190,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("h3", {
                                                            "data-lov-id": "src/components/StagePage.tsx:193:24",
                                                            "data-lov-name": "h3",
                                                            "data-component-path": "src/components/StagePage.tsx",
                                                            "data-component-line": "193",
                                                            "data-component-file": "StagePage.tsx",
                                                            "data-component-name": "h3",
                                                            "data-component-content": "%7B%22className%22%3A%22font-semibold%22%7D",
                                                            className: "font-semibold",
                                                            style: {
                                                                color: "#000000"
                                                            },
                                                            children: s.title
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                                            lineNumber: 193,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, s.title, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                            lineNumber: 180,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, group.label, true, {
                                    fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                    lineNumber: 173,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                            lineNumber: 171,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/components/StagePage.tsx:203:12",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/StagePage.tsx",
                            "data-component-line": "203",
                            "data-component-file": "StagePage.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22grid%20grid-cols-2%20sm%3Agrid-cols-3%20lg%3Agrid-cols-4%20gap-5%22%7D",
                            className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5",
                            children: subjects.map((s, i)=>/*#__PURE__*/ _jsxDEV(motion.div, {
                                    "data-lov-id": "src/components/StagePage.tsx:205:16",
                                    "data-lov-name": "motion.div",
                                    "data-component-path": "src/components/StagePage.tsx",
                                    "data-component-line": "205",
                                    "data-component-file": "StagePage.tsx",
                                    "data-component-name": "motion.div",
                                    "data-component-content": "%7B%22className%22%3A%22rounded-2xl%20p-6%20text-center%20border%20border-indian-green%2F20%20bg-white%20shadow-sm%20hover%3Ashadow-lg%20hover%3A-translate-y-1%20transition-all%22%7D",
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
                                        duration: 0.4,
                                        delay: i % 4 * 0.05
                                    },
                                    className: "rounded-2xl p-6 text-center border border-indian-green/20 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/components/StagePage.tsx:213:18",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/components/StagePage.tsx",
                                            "data-component-line": "213",
                                            "data-component-file": "StagePage.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22mx-auto%20w-14%20h-14%20rounded-full%20bg-indian-green%2F10%20border%20border-indian-green%2F30%20flex%20items-center%20justify-center%20mb-3%22%7D",
                                            className: "mx-auto w-14 h-14 rounded-full bg-indian-green/10 border border-indian-green/30 flex items-center justify-center mb-3",
                                            children: /*#__PURE__*/ _jsxDEV(s.icon, {
                                                "data-lov-id": "src/components/StagePage.tsx:214:20",
                                                "data-lov-name": "s.icon",
                                                "data-component-path": "src/components/StagePage.tsx",
                                                "data-component-line": "214",
                                                "data-component-file": "StagePage.tsx",
                                                "data-component-name": "s.icon",
                                                "data-component-content": "%7B%22className%22%3A%22h-6%20w-6%20text-indian-green%22%7D",
                                                className: "h-6 w-6 text-indian-green"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                                lineNumber: 214,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                            lineNumber: 213,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("h3", {
                                            "data-lov-id": "src/components/StagePage.tsx:216:18",
                                            "data-lov-name": "h3",
                                            "data-component-path": "src/components/StagePage.tsx",
                                            "data-component-line": "216",
                                            "data-component-file": "StagePage.tsx",
                                            "data-component-name": "h3",
                                            "data-component-content": "%7B%22className%22%3A%22font-semibold%22%7D",
                                            className: "font-semibold",
                                            style: {
                                                color: "#000000"
                                            },
                                            children: s.title
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                            lineNumber: 216,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, s.title, true, {
                                    fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                    lineNumber: 205,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                            lineNumber: 203,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/components/StagePage.tsx:227:6",
                "data-lov-name": "section",
                "data-component-path": "src/components/StagePage.tsx",
                "data-component-line": "227",
                "data-component-file": "StagePage.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20bg-indian-green%2F5%22%7D",
                className: "py-16 bg-indian-green/5",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/components/StagePage.tsx:228:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/StagePage.tsx",
                    "data-component-line": "228",
                    "data-component-file": "StagePage.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/components/StagePage.tsx:229:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/StagePage.tsx",
                            "data-component-line": "229",
                            "data-component-file": "StagePage.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22max-w-3xl%20mx-auto%20text-center%20mb-12%22%7D",
                            className: "max-w-3xl mx-auto text-center mb-12",
                            children: [
                                /*#__PURE__*/ _jsxDEV("h2", {
                                    "data-lov-id": "src/components/StagePage.tsx:230:12",
                                    "data-lov-name": "h2",
                                    "data-component-path": "src/components/StagePage.tsx",
                                    "data-component-line": "230",
                                    "data-component-file": "StagePage.tsx",
                                    "data-component-name": "h2",
                                    "data-component-content": "%7B%22text%22%3A%22Core%20Features%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20mb-3%22%7D",
                                    className: "text-3xl md:text-4xl font-bold mb-3",
                                    style: {
                                        fontFamily: "Poppins, sans-serif",
                                        color: "#000000"
                                    },
                                    children: "Core Features"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                    lineNumber: 230,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/components/StagePage.tsx:236:12",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/StagePage.tsx",
                                    "data-component-line": "236",
                                    "data-component-file": "StagePage.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22mx-auto%20h-%5B3px%5D%20w-16%20bg-indian-green%20rounded-full%22%7D",
                                    className: "mx-auto h-[3px] w-16 bg-indian-green rounded-full"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                    lineNumber: 236,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/components/StagePage.tsx:238:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/StagePage.tsx",
                            "data-component-line": "238",
                            "data-component-file": "StagePage.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22grid%20sm%3Agrid-cols-2%20lg%3Agrid-cols-3%20gap-6%22%7D",
                            className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: features.map((f, i)=>/*#__PURE__*/ _jsxDEV(motion.div, {
                                    "data-lov-id": "src/components/StagePage.tsx:240:14",
                                    "data-lov-name": "motion.div",
                                    "data-component-path": "src/components/StagePage.tsx",
                                    "data-component-line": "240",
                                    "data-component-file": "StagePage.tsx",
                                    "data-component-name": "motion.div",
                                    "data-component-content": "%7B%22className%22%3A%22rounded-2xl%20p-6%20bg-white%20border-l-4%20border-indian-green%20shadow-sm%20hover%3Ashadow-lg%20transition-all%22%7D",
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
                                    className: "rounded-2xl p-6 bg-white border-l-4 border-indian-green shadow-sm hover:shadow-lg transition-all",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/components/StagePage.tsx:248:16",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/components/StagePage.tsx",
                                            "data-component-line": "248",
                                            "data-component-file": "StagePage.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20gap-3%20mb-2%22%7D",
                                            className: "flex items-center gap-3 mb-2",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/components/StagePage.tsx:249:18",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/components/StagePage.tsx",
                                                    "data-component-line": "249",
                                                    "data-component-file": "StagePage.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22w-10%20h-10%20rounded-lg%20bg-indian-green%2F10%20flex%20items-center%20justify-center%22%7D",
                                                    className: "w-10 h-10 rounded-lg bg-indian-green/10 flex items-center justify-center",
                                                    children: /*#__PURE__*/ _jsxDEV(f.icon, {
                                                        "data-lov-id": "src/components/StagePage.tsx:250:20",
                                                        "data-lov-name": "f.icon",
                                                        "data-component-path": "src/components/StagePage.tsx",
                                                        "data-component-line": "250",
                                                        "data-component-file": "StagePage.tsx",
                                                        "data-component-name": "f.icon",
                                                        "data-component-content": "%7B%22className%22%3A%22h-5%20w-5%20text-indian-green%22%7D",
                                                        className: "h-5 w-5 text-indian-green"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                                        lineNumber: 250,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("h3", {
                                                    "data-lov-id": "src/components/StagePage.tsx:252:18",
                                                    "data-lov-name": "h3",
                                                    "data-component-path": "src/components/StagePage.tsx",
                                                    "data-component-line": "252",
                                                    "data-component-file": "StagePage.tsx",
                                                    "data-component-name": "h3",
                                                    "data-component-content": "%7B%22className%22%3A%22text-lg%20font-bold%22%7D",
                                                    className: "text-lg font-bold",
                                                    style: {
                                                        color: "#000000"
                                                    },
                                                    children: f.title
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                                    lineNumber: 252,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                            lineNumber: 248,
                                            columnNumber: 17
                                        }, this),
                                        f.desc && /*#__PURE__*/ _jsxDEV("p", {
                                            "data-lov-id": "src/components/StagePage.tsx:257:18",
                                            "data-lov-name": "p",
                                            "data-component-path": "src/components/StagePage.tsx",
                                            "data-component-line": "257",
                                            "data-component-file": "StagePage.tsx",
                                            "data-component-name": "p",
                                            "data-component-content": "%7B%22className%22%3A%22text-sm%20leading-relaxed%20pl-1%22%7D",
                                            className: "text-sm leading-relaxed pl-1",
                                            style: {
                                                color: "#333333"
                                            },
                                            children: f.desc
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                            lineNumber: 257,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, f.title, true, {
                                    fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                    lineNumber: 240,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                    lineNumber: 228,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            coScholastic && /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/components/StagePage.tsx:270:8",
                "data-lov-name": "section",
                "data-component-path": "src/components/StagePage.tsx",
                "data-component-line": "270",
                "data-component-file": "StagePage.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20lg%3Apy-20%22%7D",
                className: "py-16 lg:py-20",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/components/StagePage.tsx:271:10",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/StagePage.tsx",
                    "data-component-line": "271",
                    "data-component-file": "StagePage.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/components/StagePage.tsx:272:12",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/StagePage.tsx",
                            "data-component-line": "272",
                            "data-component-file": "StagePage.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22max-w-3xl%20mx-auto%20text-center%20mb-4%22%7D",
                            className: "max-w-3xl mx-auto text-center mb-4",
                            children: [
                                /*#__PURE__*/ _jsxDEV("p", {
                                    "data-lov-id": "src/components/StagePage.tsx:273:14",
                                    "data-lov-name": "p",
                                    "data-component-path": "src/components/StagePage.tsx",
                                    "data-component-line": "273",
                                    "data-component-file": "StagePage.tsx",
                                    "data-component-name": "p",
                                    "data-component-content": "%7B%22className%22%3A%22text-xs%20font-semibold%20uppercase%20tracking-%5B0.25em%5D%20text-indian-green%20mb-3%22%7D",
                                    className: "text-xs font-semibold uppercase tracking-[0.25em] text-indian-green mb-3",
                                    children: coScholastic.label
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                    lineNumber: 273,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("h2", {
                                    "data-lov-id": "src/components/StagePage.tsx:276:14",
                                    "data-lov-name": "h2",
                                    "data-component-path": "src/components/StagePage.tsx",
                                    "data-component-line": "276",
                                    "data-component-file": "StagePage.tsx",
                                    "data-component-name": "h2",
                                    "data-component-content": "%7B%22text%22%3A%22Co-Scholastic%20Areas%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20mb-3%22%7D",
                                    className: "text-3xl md:text-4xl font-bold mb-3",
                                    style: {
                                        fontFamily: "Poppins, sans-serif",
                                        color: "#000000"
                                    },
                                    children: "Co-Scholastic Areas"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                    lineNumber: 276,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/components/StagePage.tsx:282:14",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/StagePage.tsx",
                                    "data-component-line": "282",
                                    "data-component-file": "StagePage.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22mx-auto%20h-%5B3px%5D%20w-16%20bg-indian-green%20rounded-full%22%7D",
                                    className: "mx-auto h-[3px] w-16 bg-indian-green rounded-full"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                    lineNumber: 282,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                            lineNumber: 272,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/components/StagePage.tsx:284:12",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/StagePage.tsx",
                            "data-component-line": "284",
                            "data-component-file": "StagePage.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22max-w-2xl%20mx-auto%20mt-8%22%7D",
                            className: "max-w-2xl mx-auto mt-8",
                            children: /*#__PURE__*/ _jsxDEV("ul", {
                                "data-lov-id": "src/components/StagePage.tsx:285:14",
                                "data-lov-name": "ul",
                                "data-component-path": "src/components/StagePage.tsx",
                                "data-component-line": "285",
                                "data-component-file": "StagePage.tsx",
                                "data-component-name": "ul",
                                "data-component-content": "%7B%22className%22%3A%22grid%20sm%3Agrid-cols-2%20gap-4%22%7D",
                                className: "grid sm:grid-cols-2 gap-4",
                                children: coScholastic.items.map((item)=>/*#__PURE__*/ _jsxDEV("li", {
                                        "data-lov-id": "src/components/StagePage.tsx:287:18",
                                        "data-lov-name": "li",
                                        "data-component-path": "src/components/StagePage.tsx",
                                        "data-component-line": "287",
                                        "data-component-file": "StagePage.tsx",
                                        "data-component-name": "li",
                                        "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20gap-3%20rounded-xl%20bg-white%20border%20border-indian-green%2F20%20shadow-sm%20px-5%20py-4%22%7D",
                                        className: "flex items-center gap-3 rounded-xl bg-white border border-indian-green/20 shadow-sm px-5 py-4",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("span", {
                                                "data-lov-id": "src/components/StagePage.tsx:291:20",
                                                "data-lov-name": "span",
                                                "data-component-path": "src/components/StagePage.tsx",
                                                "data-component-line": "291",
                                                "data-component-file": "StagePage.tsx",
                                                "data-component-name": "span",
                                                "data-component-content": "%7B%22className%22%3A%22w-2.5%20h-2.5%20rounded-full%20bg-indian-green%20shrink-0%22%7D",
                                                className: "w-2.5 h-2.5 rounded-full bg-indian-green shrink-0"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                                lineNumber: 291,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("span", {
                                                "data-lov-id": "src/components/StagePage.tsx:292:20",
                                                "data-lov-name": "span",
                                                "data-component-path": "src/components/StagePage.tsx",
                                                "data-component-line": "292",
                                                "data-component-file": "StagePage.tsx",
                                                "data-component-name": "span",
                                                "data-component-content": "%7B%22className%22%3A%22font-medium%22%7D",
                                                className: "font-medium",
                                                style: {
                                                    color: "#000000"
                                                },
                                                children: item
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                                lineNumber: 292,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, item, true, {
                                        fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                        lineNumber: 287,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                lineNumber: 285,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                            lineNumber: 284,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                    lineNumber: 271,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                lineNumber: 270,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/components/StagePage.tsx:304:6",
                "data-lov-name": "section",
                "data-component-path": "src/components/StagePage.tsx",
                "data-component-line": "304",
                "data-component-file": "StagePage.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20lg%3Apy-20%22%7D",
                className: "py-16 lg:py-20",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/components/StagePage.tsx:306:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/StagePage.tsx",
                    "data-component-line": "306",
                    "data-component-file": "StagePage.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/components/StagePage.tsx:307:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/StagePage.tsx",
                            "data-component-line": "307",
                            "data-component-file": "StagePage.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22max-w-3xl%20mx-auto%20text-center%20mb-12%22%7D",
                            className: "max-w-3xl mx-auto text-center mb-12",
                            children: [
                                /*#__PURE__*/ _jsxDEV("h2", {
                                    "data-lov-id": "src/components/StagePage.tsx:308:12",
                                    "data-lov-name": "h2",
                                    "data-component-path": "src/components/StagePage.tsx",
                                    "data-component-line": "308",
                                    "data-component-file": "StagePage.tsx",
                                    "data-component-name": "h2",
                                    "data-component-content": "%7B%22text%22%3A%22Additional%20Key%20Highlights%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20mb-3%22%7D",
                                    className: "text-3xl md:text-4xl font-bold mb-3",
                                    style: {
                                        fontFamily: "Poppins, sans-serif",
                                        color: "#000000"
                                    },
                                    children: "Additional Key Highlights"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                    lineNumber: 308,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/components/StagePage.tsx:314:12",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/StagePage.tsx",
                                    "data-component-line": "314",
                                    "data-component-file": "StagePage.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22mx-auto%20h-%5B3px%5D%20w-16%20bg-indian-green%20rounded-full%22%7D",
                                    className: "mx-auto h-[3px] w-16 bg-indian-green rounded-full"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                    lineNumber: 314,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                            lineNumber: 307,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/components/StagePage.tsx:316:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/StagePage.tsx",
                            "data-component-line": "316",
                            "data-component-file": "StagePage.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22grid%20sm%3Agrid-cols-2%20lg%3Agrid-cols-4%20gap-6%22%7D",
                            className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
                            children: highlights.map((h, i)=>/*#__PURE__*/ _jsxDEV(motion.div, {
                                    "data-lov-id": "src/components/StagePage.tsx:318:14",
                                    "data-lov-name": "motion.div",
                                    "data-component-path": "src/components/StagePage.tsx",
                                    "data-component-line": "318",
                                    "data-component-file": "StagePage.tsx",
                                    "data-component-name": "motion.div",
                                    "data-component-content": "%7B%22className%22%3A%22rounded-2xl%20p-6%20text-center%20bg-indian-green%20text-white%20shadow-lg%20hover%3Ashadow-xl%20hover%3A-translate-y-1%20transition-all%22%7D",
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
                                        delay: i % 4 * 0.06
                                    },
                                    className: "rounded-2xl p-6 text-center bg-indian-green text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/components/StagePage.tsx:326:16",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/components/StagePage.tsx",
                                            "data-component-line": "326",
                                            "data-component-file": "StagePage.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22mx-auto%20w-14%20h-14%20rounded-full%20bg-white%2F15%20border%20border-white%2F30%20flex%20items-center%20justify-center%20mb-3%22%7D",
                                            className: "mx-auto w-14 h-14 rounded-full bg-white/15 border border-white/30 flex items-center justify-center mb-3",
                                            children: /*#__PURE__*/ _jsxDEV(h.icon, {
                                                "data-lov-id": "src/components/StagePage.tsx:327:18",
                                                "data-lov-name": "h.icon",
                                                "data-component-path": "src/components/StagePage.tsx",
                                                "data-component-line": "327",
                                                "data-component-file": "StagePage.tsx",
                                                "data-component-name": "h.icon",
                                                "data-component-content": "%7B%22className%22%3A%22h-6%20w-6%20text-white%22%7D",
                                                className: "h-6 w-6 text-white"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                                lineNumber: 327,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                            lineNumber: 326,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("h3", {
                                            "data-lov-id": "src/components/StagePage.tsx:329:16",
                                            "data-lov-name": "h3",
                                            "data-component-path": "src/components/StagePage.tsx",
                                            "data-component-line": "329",
                                            "data-component-file": "StagePage.tsx",
                                            "data-component-name": "h3",
                                            "data-component-content": "%7B%22className%22%3A%22font-semibold%20text-white%22%7D",
                                            className: "font-semibold text-white",
                                            children: h.title
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                            lineNumber: 329,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, h.title, true, {
                                    fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                                    lineNumber: 318,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                            lineNumber: 316,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                    lineNumber: 306,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                lineNumber: 304,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/components/StagePage.tsx:337:6",
                "data-lov-name": "section",
                "data-component-path": "src/components/StagePage.tsx",
                "data-component-line": "337",
                "data-component-file": "StagePage.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-14%20bg-indian-green%20text-white%22%7D",
                className: "py-14 bg-indian-green text-white",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/components/StagePage.tsx:338:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/StagePage.tsx",
                    "data-component-line": "338",
                    "data-component-file": "StagePage.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20text-center%22%7D",
                    className: "container mx-auto px-4 text-center",
                    children: [
                        /*#__PURE__*/ _jsxDEV(Sparkles, {
                            className: "h-10 w-10 mx-auto mb-4 text-golden-yellow"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                            lineNumber: 339,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("h2", {
                            "data-lov-id": "src/components/StagePage.tsx:340:10",
                            "data-lov-name": "h2",
                            "data-component-path": "src/components/StagePage.tsx",
                            "data-component-line": "340",
                            "data-component-file": "StagePage.tsx",
                            "data-component-name": "h2",
                            "data-component-content": "%7B%22text%22%3A%22Begin%20Your%20Child's%20Journey%20at%20SJRPS-HBR%22%2C%22className%22%3A%22text-2xl%20md%3Atext-3xl%20font-bold%20mb-3%22%7D",
                            className: "text-2xl md:text-3xl font-bold mb-3",
                            style: {
                                fontFamily: "Poppins, sans-serif"
                            },
                            children: "Begin Your Child's Journey at SJRPS-HBR"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                            lineNumber: 340,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("p", {
                            "data-lov-id": "src/components/StagePage.tsx:346:10",
                            "data-lov-name": "p",
                            "data-component-path": "src/components/StagePage.tsx",
                            "data-component-line": "346",
                            "data-component-file": "StagePage.tsx",
                            "data-component-name": "p",
                            "data-component-content": "%7B%22text%22%3A%22Join%20a%20school%20where%20every%20learner%20is%20nurtured%20with%20care%20and%20inspired%20to%20excel.%22%2C%22className%22%3A%22text-white%2F85%20max-w-2xl%20mx-auto%20mb-6%22%7D",
                            className: "text-white/85 max-w-2xl mx-auto mb-6",
                            children: "Join a school where every learner is nurtured with care and inspired to excel."
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                            lineNumber: 346,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV(Link, {
                            "data-lov-id": "src/components/StagePage.tsx:349:10",
                            "data-lov-name": "Link",
                            "data-component-path": "src/components/StagePage.tsx",
                            "data-component-line": "349",
                            "data-component-file": "StagePage.tsx",
                            "data-component-name": "Link",
                            "data-component-content": "%7B%22text%22%3A%22Apply%20for%20Admission%22%2C%22className%22%3A%22inline-block%20bg-white%20text-indian-green%20font-semibold%20px-7%20py-3%20rounded-full%20shadow%20hover%3Abg-golden-yellow%20hover%3Atext-white%20transition-colors%22%7D",
                            to: "/admissions/admissions-process",
                            className: "inline-block bg-white text-indian-green font-semibold px-7 py-3 rounded-full shadow hover:bg-golden-yellow hover:text-white transition-colors",
                            children: "Apply for Admission"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                            lineNumber: 349,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                    lineNumber: 338,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
                lineNumber: 337,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/sjrsh916/public_html/src/components/StagePage.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
};
_c = StagePage;
export default StagePage;
var _c;
$RefreshReg$(_c, "StagePage");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/components/StagePage.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/components/StagePage.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBT0EsWUFBWSxzQkFBcUI7QUFDeEMsT0FBT0MsY0FBYyx3QkFBdUI7QUFDNUMsU0FBU0MsSUFBSSxFQUFFQyxXQUFXLFFBQVEsdUJBQXNCO0FBQ3hELFNBQVNDLE1BQU0sUUFBUSxnQkFBZTtBQUN0QyxTQUFxQkMsUUFBUSxRQUFRLGVBQWM7QUFDbkQsU0FBU0MsSUFBSSxRQUFRLG1CQUFrQjtBQXdCdkMsTUFBTUMsU0FBUztJQUNiQyxRQUFRO1FBQUVDLFNBQVM7UUFBR0MsR0FBRztJQUFHO0lBQzVCQyxTQUFTO1FBQUVGLFNBQVM7UUFBR0MsR0FBRztRQUFHRSxZQUFZO1lBQUVDLFVBQVU7UUFBSTtJQUFFO0FBQzdEO0FBRUEsTUFBTUMsWUFBWSxDQUFDLEVBQ2pCQyxLQUFLLEVBQ0xDLFFBQVEsRUFDUkMsZUFBZSxFQUNmQyxjQUFjLEVBQ2RDLEtBQUssRUFDTEMsS0FBSyxFQUNMQyxRQUFRLEVBQ1JDLGdCQUFnQixnQkFBZ0IsRUFDaENDLFFBQVEsRUFDUkMsYUFBYSxFQUNiQyxRQUFRLEVBQ1JDLFVBQVUsRUFDVkMsWUFBWSxFQUNHO0lBQ2YscUJBQ0UsUUFBQzNCO1FBQUs0QixlQUFBO1FBQUFDLGlCQUFBO1FBQUFDLHVCQUFBO1FBQUFDLHVCQUFBO1FBQUFDLHVCQUFBO1FBQUFDLHVCQUFBO1FBQUFDLDBCQUFBOzswQkFDSixRQUFDakM7Z0JBQU8yQixlQUFBO2dCQUFBQyxpQkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLDBCQUFBO2dCQUNObkIsT0FBT0E7Z0JBQ1BvQixhQUFhO29CQUNYO3dCQUFFQyxPQUFPO3dCQUFhQyxNQUFNO29CQUFhO29CQUN6Qzt3QkFBRUQsT0FBT25CO3dCQUFpQm9CLE1BQU1uQjtvQkFBZTtpQkFDaEQ7Ozs7OzswQkFJSCxRQUFDb0I7Z0JBQUVWLGVBQUE7Z0JBQUFDLGlCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsMEJBQUE7Z0JBQUVLLFdBQVU7MEJBQ2Isc0JBQUNEO29CQUFFVixlQUFBO29CQUFBQyxpQkFBQTtvQkFBQUMsdUJBQUE7b0JBQUFDLHVCQUFBO29CQUFBQyx1QkFBQTtvQkFBQUMsdUJBQUE7b0JBQUFDLDBCQUFBO29CQUFFSyxXQUFVOzhCQUNiLHNCQUFDQzt3QkFBQVosZUFBQTt3QkFBQUMsaUJBQUE7d0JBQUFDLHVCQUFBO3dCQUFBQyx1QkFBQTt3QkFBQUMsdUJBQUE7d0JBQUFDLHVCQUFBO3dCQUFBQywwQkFBQTt3QkFBRUssV0FBVTtrQ0FBaUR2Qjs7Ozs7Ozs7Ozs7Ozs7OzswQkFLbEUsUUFBQ3lCO2dCQUFNYixlQUFBO2dCQUFBQyxpQkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLDBCQUFBO2dCQUFFSyxXQUFVOzBCQUNqQixzQkFBQ0Q7b0JBQUVWLGVBQUE7b0JBQUFDLGlCQUFBO29CQUFBQyx1QkFBQTtvQkFBQUMsdUJBQUE7b0JBQUFDLHVCQUFBO29CQUFBQyx1QkFBQTtvQkFBQUMsMEJBQUE7b0JBQUVLLFdBQVU7OEJBQ2Isc0JBQUNEO3dCQUFFVixlQUFBO3dCQUFBQyxpQkFBQTt3QkFBQUMsdUJBQUE7d0JBQUFDLHVCQUFBO3dCQUFBQyx1QkFBQTt3QkFBQUMsdUJBQUE7d0JBQUFDLDBCQUFBO3dCQUFFSyxXQUFVOzswQ0FDYixRQUFDbkMsT0FBT2tDLEdBQUU7Z0NBQUFWLGVBQUE7Z0NBQUFDLGlCQUFBO2dDQUFBQyx1QkFBQTtnQ0FBQUMsdUJBQUE7Z0NBQUFDLHVCQUFBO2dDQUFBQyx1QkFBQTtnQ0FBQUMsMEJBQUE7Z0NBQ1JRLFNBQVE7Z0NBQ1JDLGFBQVk7Z0NBQ1pDLFVBQVU7b0NBQUVDLE1BQU07b0NBQU1DLFFBQVE7Z0NBQUk7Z0NBQ3BDQyxVQUFVeEM7Z0NBQ1ZnQyxXQUFVOzBDQUVWLHNCQUFDUztvQ0FBRXBCLGVBQUE7b0NBQUFDLGlCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsMEJBQUE7b0NBQ0RlLEtBQUs5QjtvQ0FDTCtCLEtBQUssR0FBR25DLE1BQU0sc0JBQXNCLENBQUM7b0NBQ3JDd0IsV0FBVTs7Ozs7Ozs7Ozs7MENBR2QsUUFBQ25DLE9BQU9rQyxHQUFFO2dDQUFBVixlQUFBO2dDQUFBQyxpQkFBQTtnQ0FBQUMsdUJBQUE7Z0NBQUFDLHVCQUFBO2dDQUFBQyx1QkFBQTtnQ0FBQUMsdUJBQUE7Z0NBQUFDLDBCQUFBO2dDQUNSUSxTQUFRO2dDQUNSQyxhQUFZO2dDQUNaQyxVQUFVO29DQUFFQyxNQUFNO29DQUFNQyxRQUFRO2dDQUFJO2dDQUNwQ0MsVUFBVXhDO2dDQUNWZ0MsV0FBVTs7a0RBRVYsUUFBQ0M7d0NBQUFaLGVBQUE7d0NBQUFDLGlCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLHVCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsMEJBQUE7d0NBQUVLLFdBQVU7a0RBQTBFOzs7Ozs7a0RBR3ZGLFFBQUNZO3dDQUFDdkIsZUFBQTt3Q0FBQUMsaUJBQUE7d0NBQUFDLHVCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLHVCQUFBO3dDQUFBQywwQkFBQTt3Q0FDQUssV0FBVTt3Q0FDVmEsT0FBTzs0Q0FBRUMsWUFBWTs0Q0FBdUJDLE9BQU87d0NBQVU7a0RBRTVEdkM7Ozs7OztvQ0FFRkssTUFBTW1DLEdBQUcsQ0FBQyxDQUFDZixHQUFHZ0Isa0JBQ2IsUUFBQ2hCOzRDQUFBWixlQUFBOzRDQUFBQyxpQkFBQTs0Q0FBQUMsdUJBQUE7NENBQUFDLHVCQUFBOzRDQUFBQyx1QkFBQTs0Q0FBQUMsdUJBQUE7NENBQUFDLDBCQUFBOzRDQUVDSyxXQUFVOzRDQUNWYSxPQUFPO2dEQUFFRSxPQUFPOzRDQUFVO3NEQUV6QmQ7MkNBSklnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQWFqQixRQUFDZjtnQkFBTWIsZUFBQTtnQkFBQUMsaUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQywwQkFBQTtnQkFBRUssV0FBVTswQkFDakIsc0JBQUNEO29CQUFFVixlQUFBO29CQUFBQyxpQkFBQTtvQkFBQUMsdUJBQUE7b0JBQUFDLHVCQUFBO29CQUFBQyx1QkFBQTtvQkFBQUMsdUJBQUE7b0JBQUFDLDBCQUFBO29CQUFFSyxXQUFVOztzQ0FDYixRQUFDRDs0QkFBRVYsZUFBQTs0QkFBQUMsaUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQywwQkFBQTs0QkFBRUssV0FBVTs7OENBQ2IsUUFBQ1k7b0NBQUN2QixlQUFBO29DQUFBQyxpQkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLDBCQUFBO29DQUNBSyxXQUFVO29DQUNWYSxPQUFPO3dDQUFFQyxZQUFZO3dDQUF1QkMsT0FBTztvQ0FBVTs4Q0FFNURoQzs7Ozs7OzhDQUVILFFBQUNnQjtvQ0FBRVYsZUFBQTtvQ0FBQUMsaUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQywwQkFBQTtvQ0FBRUssV0FBVTs7Ozs7Ozs7Ozs7O3NDQUVqQixRQUFDRDs0QkFBRVYsZUFBQTs0QkFBQUMsaUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQywwQkFBQTs0QkFBRUssV0FBVTtzQ0FDWmxCLFNBQVNrQyxHQUFHLENBQUMsQ0FBQ0UsTUFBTUQsa0JBQ25CLFFBQUNwRCxPQUFPa0MsR0FBRTtvQ0FBQVYsZUFBQTtvQ0FBQUMsaUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQywwQkFBQTtvQ0FFUlEsU0FBUzt3Q0FBRWpDLFNBQVM7d0NBQUdDLEdBQUc7b0NBQUc7b0NBQzdCaUMsYUFBYTt3Q0FBRWxDLFNBQVM7d0NBQUdDLEdBQUc7b0NBQUU7b0NBQ2hDa0MsVUFBVTt3Q0FBRUMsTUFBTTtvQ0FBSztvQ0FDdkJqQyxZQUFZO3dDQUFFQyxVQUFVO3dDQUFNNkMsT0FBTyxBQUFDRixJQUFJLElBQUs7b0NBQUs7OENBRXBELHNCQUFDdEQ7d0NBQUcwQixlQUFBO3dDQUFBQyxpQkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLHVCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLDBCQUFBO3dDQUFFSyxXQUFVO2tEQUNkLHNCQUFDcEM7NENBQVV5QixlQUFBOzRDQUFBQyxpQkFBQTs0Q0FBQUMsdUJBQUE7NENBQUFDLHVCQUFBOzRDQUFBQyx1QkFBQTs0Q0FBQUMsdUJBQUE7NENBQUFDLDBCQUFBOzRDQUFFSyxXQUFVOzs4REFDckIsUUFBQ0Q7b0RBQUVWLGVBQUE7b0RBQUFDLGlCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsMEJBQUE7b0RBQUVLLFdBQVU7OERBQ2Isc0JBQUNrQixLQUFLRSxJQUFHO3dEQUFBL0IsZUFBQTt3REFBQUMsaUJBQUE7d0RBQUFDLHVCQUFBO3dEQUFBQyx1QkFBQTt3REFBQUMsdUJBQUE7d0RBQUFDLHVCQUFBO3dEQUFBQywwQkFBQTt3REFBRUssV0FBVTs7Ozs7Ozs7Ozs7OERBRXZCLFFBQUNEO29EQUFFVixlQUFBO29EQUFBQyxpQkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLDBCQUFBOztzRUFDRCxRQUFDMEI7NERBQUNoQyxlQUFBOzREQUFBQyxpQkFBQTs0REFBQUMsdUJBQUE7NERBQUFDLHVCQUFBOzREQUFBQyx1QkFBQTs0REFBQUMsdUJBQUE7NERBQUFDLDBCQUFBOzREQUFFSyxXQUFVOzREQUF5QmEsT0FBTztnRUFBRUUsT0FBTzs0REFBVTtzRUFDOURHLEtBQUsxQyxLQUFLOzs7Ozs7d0RBRVowQyxLQUFLSSxJQUFJLGtCQUNSLFFBQUNyQjs0REFBQVosZUFBQTs0REFBQUMsaUJBQUE7NERBQUFDLHVCQUFBOzREQUFBQyx1QkFBQTs0REFBQUMsdUJBQUE7NERBQUFDLHVCQUFBOzREQUFBQywwQkFBQTs0REFBRUssV0FBVTs0REFBMEJhLE9BQU87Z0VBQUVFLE9BQU87NERBQVU7c0VBQzlERyxLQUFLSSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQ0FqQmZKLEtBQUsxQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBOEJ6QixRQUFDMEI7Z0JBQU1iLGVBQUE7Z0JBQUFDLGlCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsMEJBQUE7Z0JBQUVLLFdBQVU7MEJBQ2pCLHNCQUFDRDtvQkFBRVYsZUFBQTtvQkFBQUMsaUJBQUE7b0JBQUFDLHVCQUFBO29CQUFBQyx1QkFBQTtvQkFBQUMsdUJBQUE7b0JBQUFDLHVCQUFBO29CQUFBQywwQkFBQTtvQkFBRUssV0FBVTs7c0NBQ2IsUUFBQ0Q7NEJBQUVWLGVBQUE7NEJBQUFDLGlCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsMEJBQUE7NEJBQUVLLFdBQVU7OzhDQUNiLFFBQUNZO29DQUFDdkIsZUFBQTtvQ0FBQUMsaUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQywwQkFBQTtvQ0FDQUssV0FBVTtvQ0FDVmEsT0FBTzt3Q0FBRUMsWUFBWTt3Q0FBdUJDLE9BQU87b0NBQVU7OENBQy9EOzs7Ozs7OENBR0EsUUFBQ2hCO29DQUFFVixlQUFBO29DQUFBQyxpQkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLDBCQUFBO29DQUFFSyxXQUFVOzs7Ozs7Ozs7Ozs7d0JBRWhCZixpQkFBaUJBLGNBQWNzQyxNQUFNLEdBQUcsa0JBQ3ZDLFFBQUN4Qjs0QkFBRVYsZUFBQTs0QkFBQUMsaUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQywwQkFBQTs0QkFBRUssV0FBVTtzQ0FDWmYsY0FBYytCLEdBQUcsQ0FBQyxDQUFDUSxzQkFDbEIsUUFBQ3pCO29DQUFFVixlQUFBO29DQUFBQyxpQkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLDBCQUFBOztzREFDRCxRQUFDMEI7NENBQUNoQyxlQUFBOzRDQUFBQyxpQkFBQTs0Q0FBQUMsdUJBQUE7NENBQUFDLHVCQUFBOzRDQUFBQyx1QkFBQTs0Q0FBQUMsdUJBQUE7NENBQUFDLDBCQUFBOzRDQUNBSyxXQUFVOzRDQUNWYSxPQUFPO2dEQUFFQyxZQUFZO2dEQUF1QkMsT0FBTzs0Q0FBVTtzREFFNURTLE1BQU0zQixLQUFLOzs7Ozs7c0RBRWQsUUFBQ0U7NENBQUVWLGVBQUE7NENBQUFDLGlCQUFBOzRDQUFBQyx1QkFBQTs0Q0FBQUMsdUJBQUE7NENBQUFDLHVCQUFBOzRDQUFBQyx1QkFBQTs0Q0FBQUMsMEJBQUE7NENBQUVLLFdBQVU7c0RBQ1p3QixNQUFNQyxLQUFLLENBQUNULEdBQUcsQ0FBQyxDQUFDVSxHQUFHVCxrQkFDbkIsUUFBQ3BELE9BQU9rQyxHQUFFO29EQUFBVixlQUFBO29EQUFBQyxpQkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLDBCQUFBO29EQUVSUSxTQUFTO3dEQUFFakMsU0FBUzt3REFBR0MsR0FBRztvREFBRztvREFDN0JpQyxhQUFhO3dEQUFFbEMsU0FBUzt3REFBR0MsR0FBRztvREFBRTtvREFDaENrQyxVQUFVO3dEQUFFQyxNQUFNO29EQUFLO29EQUN2QmpDLFlBQVk7d0RBQUVDLFVBQVU7d0RBQUs2QyxPQUFPLEFBQUNGLElBQUksSUFBSztvREFBSztvREFDbkRqQixXQUFVOztzRUFFVixRQUFDRDs0REFBRVYsZUFBQTs0REFBQUMsaUJBQUE7NERBQUFDLHVCQUFBOzREQUFBQyx1QkFBQTs0REFBQUMsdUJBQUE7NERBQUFDLHVCQUFBOzREQUFBQywwQkFBQTs0REFBRUssV0FBVTtzRUFDYixzQkFBQzBCLEVBQUVOLElBQUc7Z0VBQUEvQixlQUFBO2dFQUFBQyxpQkFBQTtnRUFBQUMsdUJBQUE7Z0VBQUFDLHVCQUFBO2dFQUFBQyx1QkFBQTtnRUFBQUMsdUJBQUE7Z0VBQUFDLDBCQUFBO2dFQUFFSyxXQUFVOzs7Ozs7Ozs7OztzRUFFcEIsUUFBQ3FCOzREQUFDaEMsZUFBQTs0REFBQUMsaUJBQUE7NERBQUFDLHVCQUFBOzREQUFBQyx1QkFBQTs0REFBQUMsdUJBQUE7NERBQUFDLHVCQUFBOzREQUFBQywwQkFBQTs0REFBRUssV0FBVTs0REFBZ0JhLE9BQU87Z0VBQUVFLE9BQU87NERBQVU7c0VBQ3JEVyxFQUFFbEQsS0FBSzs7Ozs7OzttREFYTGtELEVBQUVsRCxLQUFLOzs7Ozs7Ozs7OzttQ0FWVmdELE1BQU0zQixLQUFLOzs7Ozs7Ozs7aURBOEJ6QixRQUFDRTs0QkFBRVYsZUFBQTs0QkFBQUMsaUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQywwQkFBQTs0QkFBRUssV0FBVTtzQ0FDWmhCLFNBQVNnQyxHQUFHLENBQUMsQ0FBQ1UsR0FBR1Qsa0JBQ2hCLFFBQUNwRCxPQUFPa0MsR0FBRTtvQ0FBQVYsZUFBQTtvQ0FBQUMsaUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQywwQkFBQTtvQ0FFUlEsU0FBUzt3Q0FBRWpDLFNBQVM7d0NBQUdDLEdBQUc7b0NBQUc7b0NBQzdCaUMsYUFBYTt3Q0FBRWxDLFNBQVM7d0NBQUdDLEdBQUc7b0NBQUU7b0NBQ2hDa0MsVUFBVTt3Q0FBRUMsTUFBTTtvQ0FBSztvQ0FDdkJqQyxZQUFZO3dDQUFFQyxVQUFVO3dDQUFLNkMsT0FBTyxBQUFDRixJQUFJLElBQUs7b0NBQUs7b0NBQ25EakIsV0FBVTs7c0RBRVYsUUFBQ0Q7NENBQUVWLGVBQUE7NENBQUFDLGlCQUFBOzRDQUFBQyx1QkFBQTs0Q0FBQUMsdUJBQUE7NENBQUFDLHVCQUFBOzRDQUFBQyx1QkFBQTs0Q0FBQUMsMEJBQUE7NENBQUVLLFdBQVU7c0RBQ2Isc0JBQUMwQixFQUFFTixJQUFHO2dEQUFBL0IsZUFBQTtnREFBQUMsaUJBQUE7Z0RBQUFDLHVCQUFBO2dEQUFBQyx1QkFBQTtnREFBQUMsdUJBQUE7Z0RBQUFDLHVCQUFBO2dEQUFBQywwQkFBQTtnREFBRUssV0FBVTs7Ozs7Ozs7Ozs7c0RBRXBCLFFBQUNxQjs0Q0FBQ2hDLGVBQUE7NENBQUFDLGlCQUFBOzRDQUFBQyx1QkFBQTs0Q0FBQUMsdUJBQUE7NENBQUFDLHVCQUFBOzRDQUFBQyx1QkFBQTs0Q0FBQUMsMEJBQUE7NENBQUVLLFdBQVU7NENBQWdCYSxPQUFPO2dEQUFFRSxPQUFPOzRDQUFVO3NEQUNyRFcsRUFBRWxELEtBQUs7Ozs7Ozs7bUNBWExrRCxFQUFFbEQsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQXFCeEIsUUFBQzBCO2dCQUFNYixlQUFBO2dCQUFBQyxpQkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLDBCQUFBO2dCQUFFSyxXQUFVOzBCQUNqQixzQkFBQ0Q7b0JBQUVWLGVBQUE7b0JBQUFDLGlCQUFBO29CQUFBQyx1QkFBQTtvQkFBQUMsdUJBQUE7b0JBQUFDLHVCQUFBO29CQUFBQyx1QkFBQTtvQkFBQUMsMEJBQUE7b0JBQUVLLFdBQVU7O3NDQUNiLFFBQUNEOzRCQUFFVixlQUFBOzRCQUFBQyxpQkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLDBCQUFBOzRCQUFFSyxXQUFVOzs4Q0FDYixRQUFDWTtvQ0FBQ3ZCLGVBQUE7b0NBQUFDLGlCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsMEJBQUE7b0NBQ0FLLFdBQVU7b0NBQ1ZhLE9BQU87d0NBQUVDLFlBQVk7d0NBQXVCQyxPQUFPO29DQUFVOzhDQUMvRDs7Ozs7OzhDQUdBLFFBQUNoQjtvQ0FBRVYsZUFBQTtvQ0FBQUMsaUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQywwQkFBQTtvQ0FBRUssV0FBVTs7Ozs7Ozs7Ozs7O3NDQUVqQixRQUFDRDs0QkFBRVYsZUFBQTs0QkFBQUMsaUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQywwQkFBQTs0QkFBRUssV0FBVTtzQ0FDWmQsU0FBUzhCLEdBQUcsQ0FBQyxDQUFDVyxHQUFHVixrQkFDaEIsUUFBQ3BELE9BQU9rQyxHQUFFO29DQUFBVixlQUFBO29DQUFBQyxpQkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLDBCQUFBO29DQUVSUSxTQUFTO3dDQUFFakMsU0FBUzt3Q0FBR0MsR0FBRztvQ0FBRztvQ0FDN0JpQyxhQUFhO3dDQUFFbEMsU0FBUzt3Q0FBR0MsR0FBRztvQ0FBRTtvQ0FDaENrQyxVQUFVO3dDQUFFQyxNQUFNO29DQUFLO29DQUN2QmpDLFlBQVk7d0NBQUVDLFVBQVU7d0NBQU02QyxPQUFPLEFBQUNGLElBQUksSUFBSztvQ0FBSztvQ0FDcERqQixXQUFVOztzREFFVixRQUFDRDs0Q0FBRVYsZUFBQTs0Q0FBQUMsaUJBQUE7NENBQUFDLHVCQUFBOzRDQUFBQyx1QkFBQTs0Q0FBQUMsdUJBQUE7NENBQUFDLHVCQUFBOzRDQUFBQywwQkFBQTs0Q0FBRUssV0FBVTs7OERBQ2IsUUFBQ0Q7b0RBQUVWLGVBQUE7b0RBQUFDLGlCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsMEJBQUE7b0RBQUVLLFdBQVU7OERBQ2Isc0JBQUMyQixFQUFFUCxJQUFHO3dEQUFBL0IsZUFBQTt3REFBQUMsaUJBQUE7d0RBQUFDLHVCQUFBO3dEQUFBQyx1QkFBQTt3REFBQUMsdUJBQUE7d0RBQUFDLHVCQUFBO3dEQUFBQywwQkFBQTt3REFBRUssV0FBVTs7Ozs7Ozs7Ozs7OERBRXBCLFFBQUNxQjtvREFBQ2hDLGVBQUE7b0RBQUFDLGlCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsMEJBQUE7b0RBQUVLLFdBQVU7b0RBQW9CYSxPQUFPO3dEQUFFRSxPQUFPO29EQUFVOzhEQUN6RFksRUFBRW5ELEtBQUs7Ozs7Ozs7Ozs7Ozt3Q0FHWG1ELEVBQUVMLElBQUksa0JBQ0wsUUFBQ3JCOzRDQUFBWixlQUFBOzRDQUFBQyxpQkFBQTs0Q0FBQUMsdUJBQUE7NENBQUFDLHVCQUFBOzRDQUFBQyx1QkFBQTs0Q0FBQUMsdUJBQUE7NENBQUFDLDBCQUFBOzRDQUFFSyxXQUFVOzRDQUErQmEsT0FBTztnREFBRUUsT0FBTzs0Q0FBVTtzREFDbkVZLEVBQUVMLElBQUk7Ozs7Ozs7bUNBakJOSyxFQUFFbkQsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBNEJyQlksOEJBQ0MsUUFBQ2M7Z0JBQU1iLGVBQUE7Z0JBQUFDLGlCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsMEJBQUE7Z0JBQUVLLFdBQVU7MEJBQ2pCLHNCQUFDRDtvQkFBRVYsZUFBQTtvQkFBQUMsaUJBQUE7b0JBQUFDLHVCQUFBO29CQUFBQyx1QkFBQTtvQkFBQUMsdUJBQUE7b0JBQUFDLHVCQUFBO29CQUFBQywwQkFBQTtvQkFBRUssV0FBVTs7c0NBQ2IsUUFBQ0Q7NEJBQUVWLGVBQUE7NEJBQUFDLGlCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsMEJBQUE7NEJBQUVLLFdBQVU7OzhDQUNiLFFBQUNDO29DQUFBWixlQUFBO29DQUFBQyxpQkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLDBCQUFBO29DQUFFSyxXQUFVOzhDQUNWWixhQUFhUyxLQUFLOzs7Ozs7OENBRXJCLFFBQUNlO29DQUFDdkIsZUFBQTtvQ0FBQUMsaUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQywwQkFBQTtvQ0FDQUssV0FBVTtvQ0FDVmEsT0FBTzt3Q0FBRUMsWUFBWTt3Q0FBdUJDLE9BQU87b0NBQVU7OENBQy9EOzs7Ozs7OENBR0EsUUFBQ2hCO29DQUFFVixlQUFBO29DQUFBQyxpQkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLDBCQUFBO29DQUFFSyxXQUFVOzs7Ozs7Ozs7Ozs7c0NBRWpCLFFBQUNEOzRCQUFFVixlQUFBOzRCQUFBQyxpQkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLDBCQUFBOzRCQUFFSyxXQUFVO3NDQUNiLHNCQUFDNEI7Z0NBQUN2QyxlQUFBO2dDQUFBQyxpQkFBQTtnQ0FBQUMsdUJBQUE7Z0NBQUFDLHVCQUFBO2dDQUFBQyx1QkFBQTtnQ0FBQUMsdUJBQUE7Z0NBQUFDLDBCQUFBO2dDQUFFSyxXQUFVOzBDQUNYWixhQUFhcUMsS0FBSyxDQUFDVCxHQUFHLENBQUMsQ0FBQ0UscUJBQ3ZCLFFBQUNXO3dDQUFDeEMsZUFBQTt3Q0FBQUMsaUJBQUE7d0NBQUFDLHVCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLHVCQUFBO3dDQUFBQywwQkFBQTt3Q0FFQUssV0FBVTs7MERBRVYsUUFBQzhCO2dEQUFHekMsZUFBQTtnREFBQUMsaUJBQUE7Z0RBQUFDLHVCQUFBO2dEQUFBQyx1QkFBQTtnREFBQUMsdUJBQUE7Z0RBQUFDLHVCQUFBO2dEQUFBQywwQkFBQTtnREFBRUssV0FBVTs7Ozs7OzBEQUNoQixRQUFDOEI7Z0RBQUd6QyxlQUFBO2dEQUFBQyxpQkFBQTtnREFBQUMsdUJBQUE7Z0RBQUFDLHVCQUFBO2dEQUFBQyx1QkFBQTtnREFBQUMsdUJBQUE7Z0RBQUFDLDBCQUFBO2dEQUFFSyxXQUFVO2dEQUFjYSxPQUFPO29EQUFFRSxPQUFPO2dEQUFVOzBEQUNyREc7Ozs7Ozs7dUNBTEVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFnQm5CLFFBQUNoQjtnQkFBTWIsZUFBQTtnQkFBQUMsaUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQywwQkFBQTtnQkFBRUssV0FBVTswQkFFakIsc0JBQUNEO29CQUFFVixlQUFBO29CQUFBQyxpQkFBQTtvQkFBQUMsdUJBQUE7b0JBQUFDLHVCQUFBO29CQUFBQyx1QkFBQTtvQkFBQUMsdUJBQUE7b0JBQUFDLDBCQUFBO29CQUFFSyxXQUFVOztzQ0FDYixRQUFDRDs0QkFBRVYsZUFBQTs0QkFBQUMsaUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQywwQkFBQTs0QkFBRUssV0FBVTs7OENBQ2IsUUFBQ1k7b0NBQUN2QixlQUFBO29DQUFBQyxpQkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLDBCQUFBO29DQUNBSyxXQUFVO29DQUNWYSxPQUFPO3dDQUFFQyxZQUFZO3dDQUF1QkMsT0FBTztvQ0FBVTs4Q0FDL0Q7Ozs7Ozs4Q0FHQSxRQUFDaEI7b0NBQUVWLGVBQUE7b0NBQUFDLGlCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsMEJBQUE7b0NBQUVLLFdBQVU7Ozs7Ozs7Ozs7OztzQ0FFakIsUUFBQ0Q7NEJBQUVWLGVBQUE7NEJBQUFDLGlCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsMEJBQUE7NEJBQUVLLFdBQVU7c0NBQ1piLFdBQVc2QixHQUFHLENBQUMsQ0FBQ2UsR0FBR2Qsa0JBQ2xCLFFBQUNwRCxPQUFPa0MsR0FBRTtvQ0FBQVYsZUFBQTtvQ0FBQUMsaUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQywwQkFBQTtvQ0FFUlEsU0FBUzt3Q0FBRWpDLFNBQVM7d0NBQUdDLEdBQUc7b0NBQUc7b0NBQzdCaUMsYUFBYTt3Q0FBRWxDLFNBQVM7d0NBQUdDLEdBQUc7b0NBQUU7b0NBQ2hDa0MsVUFBVTt3Q0FBRUMsTUFBTTtvQ0FBSztvQ0FDdkJqQyxZQUFZO3dDQUFFQyxVQUFVO3dDQUFNNkMsT0FBTyxBQUFDRixJQUFJLElBQUs7b0NBQUs7b0NBQ3BEakIsV0FBVTs7c0RBRVYsUUFBQ0Q7NENBQUVWLGVBQUE7NENBQUFDLGlCQUFBOzRDQUFBQyx1QkFBQTs0Q0FBQUMsdUJBQUE7NENBQUFDLHVCQUFBOzRDQUFBQyx1QkFBQTs0Q0FBQUMsMEJBQUE7NENBQUVLLFdBQVU7c0RBQ2Isc0JBQUMrQixFQUFFWCxJQUFHO2dEQUFBL0IsZUFBQTtnREFBQUMsaUJBQUE7Z0RBQUFDLHVCQUFBO2dEQUFBQyx1QkFBQTtnREFBQUMsdUJBQUE7Z0RBQUFDLHVCQUFBO2dEQUFBQywwQkFBQTtnREFBRUssV0FBVTs7Ozs7Ozs7Ozs7c0RBRXBCLFFBQUNxQjs0Q0FBQ2hDLGVBQUE7NENBQUFDLGlCQUFBOzRDQUFBQyx1QkFBQTs0Q0FBQUMsdUJBQUE7NENBQUFDLHVCQUFBOzRDQUFBQyx1QkFBQTs0Q0FBQUMsMEJBQUE7NENBQUVLLFdBQVU7c0RBQTRCK0IsRUFBRXZELEtBQUs7Ozs7Ozs7bUNBVjVDdUQsRUFBRXZELEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFrQnRCLFFBQUMwQjtnQkFBTWIsZUFBQTtnQkFBQUMsaUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQywwQkFBQTtnQkFBRUssV0FBVTswQkFDakIsc0JBQUNEO29CQUFFVixlQUFBO29CQUFBQyxpQkFBQTtvQkFBQUMsdUJBQUE7b0JBQUFDLHVCQUFBO29CQUFBQyx1QkFBQTtvQkFBQUMsdUJBQUE7b0JBQUFDLDBCQUFBO29CQUFFSyxXQUFVOztzQ0FDYixRQUFDbEM7NEJBQVNrQyxXQUFVOzs7Ozs7c0NBQ3BCLFFBQUNZOzRCQUFDdkIsZUFBQTs0QkFBQUMsaUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQywwQkFBQTs0QkFDQUssV0FBVTs0QkFDVmEsT0FBTztnQ0FBRUMsWUFBWTs0QkFBc0I7c0NBQzdDOzs7Ozs7c0NBR0EsUUFBQ2I7NEJBQUFaLGVBQUE7NEJBQUFDLGlCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsMEJBQUE7NEJBQUVLLFdBQVU7c0NBQXNDOzs7Ozs7c0NBR25ELFFBQUNqQzs0QkFBR3NCLGVBQUE7NEJBQUFDLGlCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsMEJBQUE7NEJBQ0ZxQyxJQUFHOzRCQUNIaEMsV0FBVTtzQ0FDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPVjtLQXBVTXpCO0FBc1VOLGVBQWVBLFVBQVMiLCJuYW1lcyI6WyJMYXlvdXQiLCJQYWdlSGVybyIsIkNhcmQiLCJDYXJkQ29udGVudCIsIm1vdGlvbiIsIlNwYXJrbGVzIiwiTGluayIsImZhZGVVcCIsImhpZGRlbiIsIm9wYWNpdHkiLCJ5IiwidmlzaWJsZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsIlN0YWdlUGFnZSIsInRpdGxlIiwic3VidGl0bGUiLCJicmVhZGNydW1iTGFiZWwiLCJicmVhZGNydW1iUGF0aCIsImltYWdlIiwiaW50cm8iLCJvdmVydmlldyIsIm92ZXJ2aWV3TGFiZWwiLCJzdWJqZWN0cyIsInN1YmplY3RHcm91cHMiLCJmZWF0dXJlcyIsImhpZ2hsaWdodHMiLCJjb1NjaG9sYXN0aWMiLCJkYXRhLWxvdi1pZCIsImRhdGEtbG92LW5hbWUiLCJkYXRhLWNvbXBvbmVudC1wYXRoIiwiZGF0YS1jb21wb25lbnQtbGluZSIsImRhdGEtY29tcG9uZW50LWZpbGUiLCJkYXRhLWNvbXBvbmVudC1uYW1lIiwiZGF0YS1jb21wb25lbnQtY29udGVudCIsImJyZWFkY3J1bWJzIiwibGFiZWwiLCJwYXRoIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsInNlY3Rpb24iLCJpbml0aWFsIiwid2hpbGVJblZpZXciLCJ2aWV3cG9ydCIsIm9uY2UiLCJhbW91bnQiLCJ2YXJpYW50cyIsImltZyIsInNyYyIsImFsdCIsImgyIiwic3R5bGUiLCJmb250RmFtaWx5IiwiY29sb3IiLCJtYXAiLCJpIiwiaXRlbSIsImRlbGF5IiwiaWNvbiIsImgzIiwiZGVzYyIsImxlbmd0aCIsImdyb3VwIiwiaXRlbXMiLCJzIiwiZiIsInVsIiwibGkiLCJzcGFuIiwiaCIsInRvIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIlN0YWdlUGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFBhZ2VIZXJvIGZyb20gXCJAL2NvbXBvbmVudHMvUGFnZUhlcm9cIjtcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgTHVjaWRlSWNvbiwgU3BhcmtsZXMgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuZXhwb3J0IGludGVyZmFjZSBTdGFnZUl0ZW0ge1xuICB0aXRsZTogc3RyaW5nO1xuICBpY29uOiBMdWNpZGVJY29uO1xuICBkZXNjPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0YWdlUGFnZVByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgc3VidGl0bGU6IHN0cmluZztcbiAgYnJlYWRjcnVtYkxhYmVsOiBzdHJpbmc7XG4gIGJyZWFkY3J1bWJQYXRoOiBzdHJpbmc7XG4gIGltYWdlOiBzdHJpbmc7XG4gIGludHJvOiBzdHJpbmdbXTtcbiAgb3ZlcnZpZXc6IFN0YWdlSXRlbVtdO1xuICBvdmVydmlld0xhYmVsPzogc3RyaW5nO1xuICBzdWJqZWN0czogU3RhZ2VJdGVtW107XG4gIHN1YmplY3RHcm91cHM/OiB7IGxhYmVsOiBzdHJpbmc7IGl0ZW1zOiBTdGFnZUl0ZW1bXSB9W107XG4gIGZlYXR1cmVzOiBTdGFnZUl0ZW1bXTtcbiAgaGlnaGxpZ2h0czogU3RhZ2VJdGVtW107XG4gIGNvU2Nob2xhc3RpYz86IHsgbGFiZWw6IHN0cmluZzsgaXRlbXM6IHN0cmluZ1tdIH07XG59XG5cbmNvbnN0IGZhZGVVcCA9IHtcbiAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHk6IDIwIH0sXG4gIHZpc2libGU6IHsgb3BhY2l0eTogMSwgeTogMCwgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMC41IH0gfSxcbn07XG5cbmNvbnN0IFN0YWdlUGFnZSA9ICh7XG4gIHRpdGxlLFxuICBzdWJ0aXRsZSxcbiAgYnJlYWRjcnVtYkxhYmVsLFxuICBicmVhZGNydW1iUGF0aCxcbiAgaW1hZ2UsXG4gIGludHJvLFxuICBvdmVydmlldyxcbiAgb3ZlcnZpZXdMYWJlbCA9IFwiU3RhZ2UgT3ZlcnZpZXdcIixcbiAgc3ViamVjdHMsXG4gIHN1YmplY3RHcm91cHMsXG4gIGZlYXR1cmVzLFxuICBoaWdobGlnaHRzLFxuICBjb1NjaG9sYXN0aWMsXG59OiBTdGFnZVBhZ2VQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8UGFnZUhlcm9cbiAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICBicmVhZGNydW1icz17W1xuICAgICAgICAgIHsgbGFiZWw6IFwiQWNhZGVtaWNzXCIsIHBhdGg6IFwiL2FjYWRlbWljc1wiIH0sXG4gICAgICAgICAgeyBsYWJlbDogYnJlYWRjcnVtYkxhYmVsLCBwYXRoOiBicmVhZGNydW1iUGF0aCB9LFxuICAgICAgICBdfVxuICAgICAgLz5cblxuICAgICAgey8qIFN1YnRpdGxlIGJhbmQgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWluZGlhbi1ncmVlbi81IGJvcmRlci1iIGJvcmRlci1pbmRpYW4tZ3JlZW4vMTBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IHB5LTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWluZGlhbi1ncmVlbiBmb250LXNlbWlib2xkIHRyYWNraW5nLXdpZGVcIj57c3VidGl0bGV9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogU2VjdGlvbiAxIOKAlCBJbnRyb2R1Y3Rpb24gKi99XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNiBsZzpweS0yMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbGc6Z3JpZC1jb2xzLTIgZ2FwLTEwIGxnOmdhcC0xNCBsZzppdGVtcy1zdHJldGNoXCI+XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgd2hpbGVJblZpZXc9XCJ2aXNpYmxlXCJcbiAgICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSwgYW1vdW50OiAwLjIgfX1cbiAgICAgICAgICAgICAgdmFyaWFudHM9e2ZhZGVVcH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC0yeGwgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy0yeGwgcmluZy0xIHJpbmctYmxhY2svNSBoLWZ1bGxcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXtpbWFnZX1cbiAgICAgICAgICAgICAgICBhbHQ9e2Ake3RpdGxlfSBsZWFybmluZyBhdCBTSlJQUy1IQlJgfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIGFzcGVjdC1bNC8zXSBsZzphc3BlY3QtYXV0b1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgd2hpbGVJblZpZXc9XCJ2aXNpYmxlXCJcbiAgICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSwgYW1vdW50OiAwLjIgfX1cbiAgICAgICAgICAgICAgdmFyaWFudHM9e2ZhZGVVcH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBoLWZ1bGxcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLVswLjI1ZW1dIHRleHQtaW5kaWFuLWdyZWVuIG1iLTNcIj5cbiAgICAgICAgICAgICAgICBJbnRyb2R1Y3Rpb25cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8aDJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTR4bCBmb250LWJvbGQgbGVhZGluZy10aWdodCBtYi02XCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250RmFtaWx5OiBcIlBvcHBpbnMsIHNhbnMtc2VyaWZcIiwgY29sb3I6IFwiIzAwMDAwMFwiIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIHtpbnRyby5tYXAoKHAsIGkpID0+IChcbiAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGxnOnRleHQtbGcgbGVhZGluZy1yZWxheGVkIG1iLTRcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiIzMzMzMzM1wiIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3B9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIHsvKiBTZWN0aW9uIDIg4oCUIFN0YWdlIE92ZXJ2aWV3IC8gS2V5IEZhY3RvcnMgKi99XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNiBiZy1pbmRpYW4tZ3JlZW4vNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTN4bCBteC1hdXRvIHRleHQtY2VudGVyIG1iLTEyXCI+XG4gICAgICAgICAgICA8aDJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgZm9udC1ib2xkIG1iLTNcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBmb250RmFtaWx5OiBcIlBvcHBpbnMsIHNhbnMtc2VyaWZcIiwgY29sb3I6IFwiIzAwMDAwMFwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtvdmVydmlld0xhYmVsfVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBoLVszcHhdIHctMTYgYmctaW5kaWFuLWdyZWVuIHJvdW5kZWQtZnVsbFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC02XCI+XG4gICAgICAgICAgICB7b3ZlcnZpZXcubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMTYgfX1cbiAgICAgICAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNDUsIGRlbGF5OiAoaSAlIDMpICogMC4wNiB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwicm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1pbmRpYW4tZ3JlZW4vMjAgc2hhZG93LXNtIGhvdmVyOnNoYWRvdy14bCBob3ZlcjotdHJhbnNsYXRlLXktMSB0cmFuc2l0aW9uLWFsbCBoLWZ1bGwgYmctd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLTYgZmxleCBpdGVtcy1zdGFydCBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTIgaC0xMiByb3VuZGVkLXhsIGJnLWluZGlhbi1ncmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzaHJpbmstMCBzaGFkb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aXRlbS5pY29uIGNsYXNzTmFtZT1cImgtNiB3LTYgdGV4dC13aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCBtYi0xXCIgc3R5bGU9e3sgY29sb3I6IFwiIzAwMDAwMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5kZXNjICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbGVhZGluZy1yZWxheGVkXCIgc3R5bGU9e3sgY29sb3I6IFwiIzMzMzMzM1wiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5kZXNjfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgey8qIFNlY3Rpb24gMyDigJQgQ29yZSBTdWJqZWN0cyAqL31cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTE2IGxnOnB5LTIwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctM3hsIG14LWF1dG8gdGV4dC1jZW50ZXIgbWItMTJcIj5cbiAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTR4bCBmb250LWJvbGQgbWItM1wiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiUG9wcGlucywgc2Fucy1zZXJpZlwiLCBjb2xvcjogXCIjMDAwMDAwXCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ29yZSBTdWJqZWN0c1xuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBoLVszcHhdIHctMTYgYmctaW5kaWFuLWdyZWVuIHJvdW5kZWQtZnVsbFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3N1YmplY3RHcm91cHMgJiYgc3ViamVjdEdyb3Vwcy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEyXCI+XG4gICAgICAgICAgICAgIHtzdWJqZWN0R3JvdXBzLm1hcCgoZ3JvdXApID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17Z3JvdXAubGFiZWx9PlxuICAgICAgICAgICAgICAgICAgPGgzXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteGwgbWQ6dGV4dC0yeGwgZm9udC1ib2xkIHRleHQtY2VudGVyIG1iLTZcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250RmFtaWx5OiBcIlBvcHBpbnMsIHNhbnMtc2VyaWZcIiwgY29sb3I6IFwiIzAwMDAwMFwiIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtncm91cC5sYWJlbH1cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgc206Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTQgZ2FwLTVcIj5cbiAgICAgICAgICAgICAgICAgICAge2dyb3VwLml0ZW1zLm1hcCgocywgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3MudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDE2IH19XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjQsIGRlbGF5OiAoaSAlIDQpICogMC4wNSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC0yeGwgcC02IHRleHQtY2VudGVyIGJvcmRlciBib3JkZXItaW5kaWFuLWdyZWVuLzIwIGJnLXdoaXRlIHNoYWRvdy1zbSBob3ZlcjpzaGFkb3ctbGcgaG92ZXI6LXRyYW5zbGF0ZS15LTEgdHJhbnNpdGlvbi1hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byB3LTE0IGgtMTQgcm91bmRlZC1mdWxsIGJnLWluZGlhbi1ncmVlbi8xMCBib3JkZXIgYm9yZGVyLWluZGlhbi1ncmVlbi8zMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzLmljb24gY2xhc3NOYW1lPVwiaC02IHctNiB0ZXh0LWluZGlhbi1ncmVlblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCIgc3R5bGU9e3sgY29sb3I6IFwiIzAwMDAwMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cy50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgc206Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTQgZ2FwLTVcIj5cbiAgICAgICAgICAgICAge3N1YmplY3RzLm1hcCgocywgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9e3MudGl0bGV9XG4gICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDE2IH19XG4gICAgICAgICAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjQsIGRlbGF5OiAoaSAlIDQpICogMC4wNSB9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC0yeGwgcC02IHRleHQtY2VudGVyIGJvcmRlciBib3JkZXItaW5kaWFuLWdyZWVuLzIwIGJnLXdoaXRlIHNoYWRvdy1zbSBob3ZlcjpzaGFkb3ctbGcgaG92ZXI6LXRyYW5zbGF0ZS15LTEgdHJhbnNpdGlvbi1hbGxcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byB3LTE0IGgtMTQgcm91bmRlZC1mdWxsIGJnLWluZGlhbi1ncmVlbi8xMCBib3JkZXIgYm9yZGVyLWluZGlhbi1ncmVlbi8zMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzLmljb24gY2xhc3NOYW1lPVwiaC02IHctNiB0ZXh0LWluZGlhbi1ncmVlblwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCIgc3R5bGU9e3sgY29sb3I6IFwiIzAwMDAwMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICB7cy50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7LyogU2VjdGlvbiA0IOKAlCBDb3JlIEZlYXR1cmVzICovfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTYgYmctaW5kaWFuLWdyZWVuLzVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy0zeGwgbXgtYXV0byB0ZXh0LWNlbnRlciBtYi0xMlwiPlxuICAgICAgICAgICAgPGgyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNHhsIGZvbnQtYm9sZCBtYi0zXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udEZhbWlseTogXCJQb3BwaW5zLCBzYW5zLXNlcmlmXCIsIGNvbG9yOiBcIiMwMDAwMDBcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDb3JlIEZlYXR1cmVzXG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIGgtWzNweF0gdy0xNiBiZy1pbmRpYW4tZ3JlZW4gcm91bmRlZC1mdWxsXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTZcIj5cbiAgICAgICAgICAgIHtmZWF0dXJlcy5tYXAoKGYsIGkpID0+IChcbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICBrZXk9e2YudGl0bGV9XG4gICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAxNiB9fVxuICAgICAgICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC40NSwgZGVsYXk6IChpICUgMykgKiAwLjA2IH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC0yeGwgcC02IGJnLXdoaXRlIGJvcmRlci1sLTQgYm9yZGVyLWluZGlhbi1ncmVlbiBzaGFkb3ctc20gaG92ZXI6c2hhZG93LWxnIHRyYW5zaXRpb24tYWxsXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC1sZyBiZy1pbmRpYW4tZ3JlZW4vMTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGYuaWNvbiBjbGFzc05hbWU9XCJoLTUgdy01IHRleHQtaW5kaWFuLWdyZWVuXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkXCIgc3R5bGU9e3sgY29sb3I6IFwiIzAwMDAwMFwiIH19PlxuICAgICAgICAgICAgICAgICAgICB7Zi50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge2YuZGVzYyAmJiAoXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGxlYWRpbmctcmVsYXhlZCBwbC0xXCIgc3R5bGU9e3sgY29sb3I6IFwiIzMzMzMzM1wiIH19PlxuICAgICAgICAgICAgICAgICAgICB7Zi5kZXNjfVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuXG4gICAgICB7LyogU2VjdGlvbiA0YiDigJQgQ28tU2Nob2xhc3RpYyBBcmVhcyAqL31cbiAgICAgIHtjb1NjaG9sYXN0aWMgJiYgKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNiBsZzpweS0yMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy0zeGwgbXgtYXV0byB0ZXh0LWNlbnRlciBtYi00XCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMjVlbV0gdGV4dC1pbmRpYW4tZ3JlZW4gbWItM1wiPlxuICAgICAgICAgICAgICAgIHtjb1NjaG9sYXN0aWMubGFiZWx9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPGgyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgZm9udC1ib2xkIG1iLTNcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiUG9wcGlucywgc2Fucy1zZXJpZlwiLCBjb2xvcjogXCIjMDAwMDAwXCIgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENvLVNjaG9sYXN0aWMgQXJlYXNcbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIGgtWzNweF0gdy0xNiBiZy1pbmRpYW4tZ3JlZW4gcm91bmRlZC1mdWxsXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy0yeGwgbXgtYXV0byBtdC04XCI+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJncmlkIHNtOmdyaWQtY29scy0yIGdhcC00XCI+XG4gICAgICAgICAgICAgICAge2NvU2Nob2xhc3RpYy5pdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHJvdW5kZWQteGwgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1pbmRpYW4tZ3JlZW4vMjAgc2hhZG93LXNtIHB4LTUgcHktNFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInctMi41IGgtMi41IHJvdW5kZWQtZnVsbCBiZy1pbmRpYW4tZ3JlZW4gc2hyaW5rLTBcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiIHN0eWxlPXt7IGNvbG9yOiBcIiMwMDAwMDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICApfVxuXG4gICAgICB7LyogU2VjdGlvbiA1IOKAlCBBZGRpdGlvbmFsIEtleSBIaWdobGlnaHRzICovfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTYgbGc6cHktMjBcIj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTN4bCBteC1hdXRvIHRleHQtY2VudGVyIG1iLTEyXCI+XG4gICAgICAgICAgICA8aDJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgZm9udC1ib2xkIG1iLTNcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBmb250RmFtaWx5OiBcIlBvcHBpbnMsIHNhbnMtc2VyaWZcIiwgY29sb3I6IFwiIzAwMDAwMFwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEFkZGl0aW9uYWwgS2V5IEhpZ2hsaWdodHNcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gaC1bM3B4XSB3LTE2IGJnLWluZGlhbi1ncmVlbiByb3VuZGVkLWZ1bGxcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNCBnYXAtNlwiPlxuICAgICAgICAgICAge2hpZ2hsaWdodHMubWFwKChoLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAga2V5PXtoLnRpdGxlfVxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMTYgfX1cbiAgICAgICAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNDUsIGRlbGF5OiAoaSAlIDQpICogMC4wNiB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIHAtNiB0ZXh0LWNlbnRlciBiZy1pbmRpYW4tZ3JlZW4gdGV4dC13aGl0ZSBzaGFkb3ctbGcgaG92ZXI6c2hhZG93LXhsIGhvdmVyOi10cmFuc2xhdGUteS0xIHRyYW5zaXRpb24tYWxsXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byB3LTE0IGgtMTQgcm91bmRlZC1mdWxsIGJnLXdoaXRlLzE1IGJvcmRlciBib3JkZXItd2hpdGUvMzAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgPGguaWNvbiBjbGFzc05hbWU9XCJoLTYgdy02IHRleHQtd2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj57aC50aXRsZX08L2gzPlxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIHsvKiBDVEEgKi99XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNCBiZy1pbmRpYW4tZ3JlZW4gdGV4dC13aGl0ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8U3BhcmtsZXMgY2xhc3NOYW1lPVwiaC0xMCB3LTEwIG14LWF1dG8gbWItNCB0ZXh0LWdvbGRlbi15ZWxsb3dcIiAvPlxuICAgICAgICAgIDxoMlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWQ6dGV4dC0zeGwgZm9udC1ib2xkIG1iLTNcIlxuICAgICAgICAgICAgc3R5bGU9e3sgZm9udEZhbWlseTogXCJQb3BwaW5zLCBzYW5zLXNlcmlmXCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBCZWdpbiBZb3VyIENoaWxkJ3MgSm91cm5leSBhdCBTSlJQUy1IQlJcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUvODUgbWF4LXctMnhsIG14LWF1dG8gbWItNlwiPlxuICAgICAgICAgICAgSm9pbiBhIHNjaG9vbCB3aGVyZSBldmVyeSBsZWFybmVyIGlzIG51cnR1cmVkIHdpdGggY2FyZSBhbmQgaW5zcGlyZWQgdG8gZXhjZWwuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICB0bz1cIi9hZG1pc3Npb25zL2FkbWlzc2lvbnMtcHJvY2Vzc1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgYmctd2hpdGUgdGV4dC1pbmRpYW4tZ3JlZW4gZm9udC1zZW1pYm9sZCBweC03IHB5LTMgcm91bmRlZC1mdWxsIHNoYWRvdyBob3ZlcjpiZy1nb2xkZW4teWVsbG93IGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEFwcGx5IGZvciBBZG1pc3Npb25cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhZ2VQYWdlO1xuIl0sImZpbGUiOiIvaG9tZS9zanJzaDkxNi9wdWJsaWNfaHRtbC9zcmMvY29tcG9uZW50cy9TdGFnZVBhZ2UudHN4In0=