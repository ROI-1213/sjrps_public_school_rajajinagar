import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/FacilityPage.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/components/FacilityPage.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import Layout from "/src/components/Layout.tsx";
import PageHero from "/src/components/PageHero.tsx";
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=5efa796b";
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=5efa796b";
import { Sparkles, ArrowRight } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 24
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        }
    }
};
const FacilityPage = ({ title, breadcrumbLabel, introHeading, introParagraphs, introImage, introImageAlt, features, featuresHeading = "Key Features", benefits, benefitsHeading = "Benefits for Students", gallery, whyItMattersHeading = "Why It Matters", whyItMattersBody, whyItMattersPoints, closingMessage, ctaText = "Explore Admissions", ctaHref = "/admissions/admissions-process" })=>{
    return /*#__PURE__*/ _jsxDEV(Layout, {
        "data-lov-id": "src/components/FacilityPage.tsx:61:4",
        "data-lov-name": "Layout",
        "data-component-path": "src/components/FacilityPage.tsx",
        "data-component-line": "61",
        "data-component-file": "FacilityPage.tsx",
        "data-component-name": "Layout",
        "data-component-content": "%7B%7D",
        children: [
            /*#__PURE__*/ _jsxDEV(PageHero, {
                "data-lov-id": "src/components/FacilityPage.tsx:62:6",
                "data-lov-name": "PageHero",
                "data-component-path": "src/components/FacilityPage.tsx",
                "data-component-line": "62",
                "data-component-file": "FacilityPage.tsx",
                "data-component-name": "PageHero",
                "data-component-content": "%7B%7D",
                title: title,
                breadcrumbs: [
                    {
                        label: "Facilities"
                    },
                    {
                        label: breadcrumbLabel
                    }
                ]
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/components/FacilityPage.tsx:71:6",
                "data-lov-name": "section",
                "data-component-path": "src/components/FacilityPage.tsx",
                "data-component-line": "71",
                "data-component-file": "FacilityPage.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20lg%3Apy-20%20bg-background%22%7D",
                className: "py-16 lg:py-20 bg-background",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/components/FacilityPage.tsx:72:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/FacilityPage.tsx",
                    "data-component-line": "72",
                    "data-component-file": "FacilityPage.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/components/FacilityPage.tsx:73:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/FacilityPage.tsx",
                        "data-component-line": "73",
                        "data-component-file": "FacilityPage.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22grid%20lg%3Agrid-cols-2%20gap-10%20lg%3Agap-16%20items-center%20max-w-6xl%20mx-auto%22%7D",
                        className: "grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto",
                        children: [
                            /*#__PURE__*/ _jsxDEV(motion.div, {
                                "data-lov-id": "src/components/FacilityPage.tsx:74:12",
                                "data-lov-name": "motion.div",
                                "data-component-path": "src/components/FacilityPage.tsx",
                                "data-component-line": "74",
                                "data-component-file": "FacilityPage.tsx",
                                "data-component-name": "motion.div",
                                "data-component-content": "%7B%22className%22%3A%22relative%22%7D",
                                initial: "hidden",
                                whileInView: "show",
                                viewport: {
                                    once: true,
                                    amount: 0.3
                                },
                                variants: fadeUp,
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        "data-lov-id": "src/components/FacilityPage.tsx:81:14",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/components/FacilityPage.tsx",
                                        "data-component-line": "81",
                                        "data-component-file": "FacilityPage.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22className%22%3A%22absolute%20-inset-4%20bg-gradient-to-tr%20from-indian-green%2F20%20to-indian-green%2F10%20rounded-3xl%20blur-2xl%22%7D",
                                        className: "absolute -inset-4 bg-gradient-to-tr from-indian-green/20 to-indian-green/10 rounded-3xl blur-2xl"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        "data-lov-id": "src/components/FacilityPage.tsx:82:14",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/components/FacilityPage.tsx",
                                        "data-component-line": "82",
                                        "data-component-file": "FacilityPage.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22className%22%3A%22relative%20overflow-hidden%20rounded-2xl%20shadow-2xl%22%7D",
                                        className: "relative overflow-hidden rounded-2xl shadow-2xl",
                                        children: /*#__PURE__*/ _jsxDEV("img", {
                                            "data-lov-id": "src/components/FacilityPage.tsx:83:16",
                                            "data-lov-name": "img",
                                            "data-component-path": "src/components/FacilityPage.tsx",
                                            "data-component-line": "83",
                                            "data-component-file": "FacilityPage.tsx",
                                            "data-component-name": "img",
                                            "data-component-content": "%7B%22className%22%3A%22w-full%20h-80%20lg%3Ah-%5B480px%5D%20object-cover%20transition-transform%20duration-700%20hover%3Ascale-105%22%7D",
                                            src: introImage,
                                            alt: introImageAlt,
                                            className: "w-full h-80 lg:h-[480px] object-cover transition-transform duration-700 hover:scale-105",
                                            loading: "lazy"
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV(motion.div, {
                                "data-lov-id": "src/components/FacilityPage.tsx:92:12",
                                "data-lov-name": "motion.div",
                                "data-component-path": "src/components/FacilityPage.tsx",
                                "data-component-line": "92",
                                "data-component-file": "FacilityPage.tsx",
                                "data-component-name": "motion.div",
                                "data-component-content": "%7B%7D",
                                initial: "hidden",
                                whileInView: "show",
                                viewport: {
                                    once: true,
                                    amount: 0.3
                                },
                                variants: fadeUp,
                                children: [
                                    /*#__PURE__*/ _jsxDEV("span", {
                                        "data-lov-id": "src/components/FacilityPage.tsx:98:14",
                                        "data-lov-name": "span",
                                        "data-component-path": "src/components/FacilityPage.tsx",
                                        "data-component-line": "98",
                                        "data-component-file": "FacilityPage.tsx",
                                        "data-component-name": "span",
                                        "data-component-content": "%7B%22text%22%3A%22Our%20Facility%22%2C%22className%22%3A%22inline-block%20text-xs%20font-semibold%20tracking-%5B0.25em%5D%20uppercase%20text-indian-green%20mb-3%22%7D",
                                        className: "inline-block text-xs font-semibold tracking-[0.25em] uppercase text-indian-green mb-3",
                                        children: "Our Facility"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("h2", {
                                        "data-lov-id": "src/components/FacilityPage.tsx:101:14",
                                        "data-lov-name": "h2",
                                        "data-component-path": "src/components/FacilityPage.tsx",
                                        "data-component-line": "101",
                                        "data-component-file": "FacilityPage.tsx",
                                        "data-component-name": "h2",
                                        "data-component-content": "%7B%22className%22%3A%22text-3xl%20lg%3Atext-4xl%20font-bold%20text-school-brown%20mb-4%20leading-tight%22%7D",
                                        className: "text-3xl lg:text-4xl font-bold text-school-brown mb-4 leading-tight",
                                        children: introHeading
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        "data-lov-id": "src/components/FacilityPage.tsx:104:14",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/components/FacilityPage.tsx",
                                        "data-component-line": "104",
                                        "data-component-file": "FacilityPage.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22className%22%3A%22h-1%20w-16%20bg-indian-green%20rounded-full%20mb-6%22%7D",
                                        className: "h-1 w-16 bg-indian-green rounded-full mb-6"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        "data-lov-id": "src/components/FacilityPage.tsx:105:14",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/components/FacilityPage.tsx",
                                        "data-component-line": "105",
                                        "data-component-file": "FacilityPage.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22className%22%3A%22space-y-4%20text-elegant-light%20text-base%20lg%3Atext-lg%20leading-relaxed%22%7D",
                                        className: "space-y-4 text-elegant-light text-base lg:text-lg leading-relaxed",
                                        children: introParagraphs.map((p, i)=>/*#__PURE__*/ _jsxDEV("p", {
                                                "data-lov-id": "src/components/FacilityPage.tsx:107:18",
                                                "data-lov-name": "p",
                                                "data-component-path": "src/components/FacilityPage.tsx",
                                                "data-component-line": "107",
                                                "data-component-file": "FacilityPage.tsx",
                                                "data-component-name": "p",
                                                "data-component-content": "%7B%7D",
                                                children: p
                                            }, i, false, {
                                                fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                                lineNumber: 107,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/components/FacilityPage.tsx:116:6",
                "data-lov-name": "section",
                "data-component-path": "src/components/FacilityPage.tsx",
                "data-component-line": "116",
                "data-component-file": "FacilityPage.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20lg%3Apy-20%20bg-muted%2F30%22%7D",
                className: "py-16 lg:py-20 bg-muted/30",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/components/FacilityPage.tsx:117:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/FacilityPage.tsx",
                    "data-component-line": "117",
                    "data-component-file": "FacilityPage.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/components/FacilityPage.tsx:118:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/FacilityPage.tsx",
                            "data-component-line": "118",
                            "data-component-file": "FacilityPage.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22text-center%20max-w-2xl%20mx-auto%20mb-12%22%7D",
                            className: "text-center max-w-2xl mx-auto mb-12",
                            children: [
                                /*#__PURE__*/ _jsxDEV("span", {
                                    "data-lov-id": "src/components/FacilityPage.tsx:119:12",
                                    "data-lov-name": "span",
                                    "data-component-path": "src/components/FacilityPage.tsx",
                                    "data-component-line": "119",
                                    "data-component-file": "FacilityPage.tsx",
                                    "data-component-name": "span",
                                    "data-component-content": "%7B%22text%22%3A%22What%20We%20Offer%22%2C%22className%22%3A%22inline-block%20text-xs%20font-semibold%20tracking-%5B0.25em%5D%20uppercase%20text-indian-green%20mb-3%22%7D",
                                    className: "inline-block text-xs font-semibold tracking-[0.25em] uppercase text-indian-green mb-3",
                                    children: "What We Offer"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("h2", {
                                    "data-lov-id": "src/components/FacilityPage.tsx:122:12",
                                    "data-lov-name": "h2",
                                    "data-component-path": "src/components/FacilityPage.tsx",
                                    "data-component-line": "122",
                                    "data-component-file": "FacilityPage.tsx",
                                    "data-component-name": "h2",
                                    "data-component-content": "%7B%22className%22%3A%22text-3xl%20lg%3Atext-4xl%20font-bold%20text-school-brown%20mb-4%22%7D",
                                    className: "text-3xl lg:text-4xl font-bold text-school-brown mb-4",
                                    children: featuresHeading
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/components/FacilityPage.tsx:125:12",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/FacilityPage.tsx",
                                    "data-component-line": "125",
                                    "data-component-file": "FacilityPage.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22h-1%20w-16%20bg-indian-green%20rounded-full%20mx-auto%22%7D",
                                    className: "h-1 w-16 bg-indian-green rounded-full mx-auto"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/components/FacilityPage.tsx:128:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/FacilityPage.tsx",
                            "data-component-line": "128",
                            "data-component-file": "FacilityPage.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22grid%20sm%3Agrid-cols-2%20lg%3Agrid-cols-3%20gap-6%20max-w-6xl%20mx-auto%22%7D",
                            className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto",
                            children: features.map((f, i)=>/*#__PURE__*/ _jsxDEV(motion.div, {
                                    "data-lov-id": "src/components/FacilityPage.tsx:130:14",
                                    "data-lov-name": "motion.div",
                                    "data-component-path": "src/components/FacilityPage.tsx",
                                    "data-component-line": "130",
                                    "data-component-file": "FacilityPage.tsx",
                                    "data-component-name": "motion.div",
                                    "data-component-content": "%7B%7D",
                                    initial: "hidden",
                                    whileInView: "show",
                                    viewport: {
                                        once: true,
                                        amount: 0.2
                                    },
                                    variants: fadeUp,
                                    transition: {
                                        delay: i * 0.05
                                    },
                                    children: /*#__PURE__*/ _jsxDEV(Card, {
                                        "data-lov-id": "src/components/FacilityPage.tsx:138:16",
                                        "data-lov-name": "Card",
                                        "data-component-path": "src/components/FacilityPage.tsx",
                                        "data-component-line": "138",
                                        "data-component-file": "FacilityPage.tsx",
                                        "data-component-name": "Card",
                                        "data-component-content": "%7B%22className%22%3A%22group%20h-full%20border%20border-border%2F60%20hover%3Aborder-indian-green%2F60%20hover%3Ashadow-xl%20transition-all%20duration-300%20hover%3A-translate-y-1%20bg-card%22%7D",
                                        className: "group h-full border border-border/60 hover:border-indian-green/60 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card",
                                        children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                            "data-lov-id": "src/components/FacilityPage.tsx:139:18",
                                            "data-lov-name": "CardContent",
                                            "data-component-path": "src/components/FacilityPage.tsx",
                                            "data-component-line": "139",
                                            "data-component-file": "FacilityPage.tsx",
                                            "data-component-name": "CardContent",
                                            "data-component-content": "%7B%22className%22%3A%22p-6%22%7D",
                                            className: "p-6",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/components/FacilityPage.tsx:140:20",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/components/FacilityPage.tsx",
                                                    "data-component-line": "140",
                                                    "data-component-file": "FacilityPage.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22w-14%20h-14%20rounded-xl%20flex%20items-center%20justify-center%20mb-4%20shadow-md%20group-hover%3Ascale-110%20transition-transform%20bg-indian-green%22%7D",
                                                    className: "w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform bg-indian-green",
                                                    children: /*#__PURE__*/ _jsxDEV(f.icon, {
                                                        "data-lov-id": "src/components/FacilityPage.tsx:141:22",
                                                        "data-lov-name": "f.icon",
                                                        "data-component-path": "src/components/FacilityPage.tsx",
                                                        "data-component-line": "141",
                                                        "data-component-file": "FacilityPage.tsx",
                                                        "data-component-name": "f.icon",
                                                        "data-component-content": "%7B%7D",
                                                        size: 28,
                                                        strokeWidth: 2.25,
                                                        color: "#ffffff"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("h3", {
                                                    "data-lov-id": "src/components/FacilityPage.tsx:143:20",
                                                    "data-lov-name": "h3",
                                                    "data-component-path": "src/components/FacilityPage.tsx",
                                                    "data-component-line": "143",
                                                    "data-component-file": "FacilityPage.tsx",
                                                    "data-component-name": "h3",
                                                    "data-component-content": "%7B%22className%22%3A%22text-lg%20font-bold%20text-school-brown%20mb-2%22%7D",
                                                    className: "text-lg font-bold text-school-brown mb-2",
                                                    children: f.title
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/components/FacilityPage.tsx:144:20",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/components/FacilityPage.tsx",
                                                    "data-component-line": "144",
                                                    "data-component-file": "FacilityPage.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22className%22%3A%22text-elegant-light%20text-sm%20leading-relaxed%22%7D",
                                                    className: "text-elegant-light text-sm leading-relaxed",
                                                    children: f.description
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                            lineNumber: 139,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                        lineNumber: 138,
                                        columnNumber: 17
                                    }, this)
                                }, f.title, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                    lineNumber: 130,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/components/FacilityPage.tsx:154:6",
                "data-lov-name": "section",
                "data-component-path": "src/components/FacilityPage.tsx",
                "data-component-line": "154",
                "data-component-file": "FacilityPage.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20lg%3Apy-20%20bg-background%22%7D",
                className: "py-16 lg:py-20 bg-background",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/components/FacilityPage.tsx:155:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/FacilityPage.tsx",
                    "data-component-line": "155",
                    "data-component-file": "FacilityPage.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/components/FacilityPage.tsx:156:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/FacilityPage.tsx",
                            "data-component-line": "156",
                            "data-component-file": "FacilityPage.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22text-center%20max-w-2xl%20mx-auto%20mb-12%22%7D",
                            className: "text-center max-w-2xl mx-auto mb-12",
                            children: [
                                /*#__PURE__*/ _jsxDEV("span", {
                                    "data-lov-id": "src/components/FacilityPage.tsx:157:12",
                                    "data-lov-name": "span",
                                    "data-component-path": "src/components/FacilityPage.tsx",
                                    "data-component-line": "157",
                                    "data-component-file": "FacilityPage.tsx",
                                    "data-component-name": "span",
                                    "data-component-content": "%7B%22text%22%3A%22Student%20Outcomes%22%2C%22className%22%3A%22inline-block%20text-xs%20font-semibold%20tracking-%5B0.25em%5D%20uppercase%20text-indian-green%20mb-3%22%7D",
                                    className: "inline-block text-xs font-semibold tracking-[0.25em] uppercase text-indian-green mb-3",
                                    children: "Student Outcomes"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("h2", {
                                    "data-lov-id": "src/components/FacilityPage.tsx:160:12",
                                    "data-lov-name": "h2",
                                    "data-component-path": "src/components/FacilityPage.tsx",
                                    "data-component-line": "160",
                                    "data-component-file": "FacilityPage.tsx",
                                    "data-component-name": "h2",
                                    "data-component-content": "%7B%22className%22%3A%22text-3xl%20lg%3Atext-4xl%20font-bold%20text-school-brown%20mb-4%22%7D",
                                    className: "text-3xl lg:text-4xl font-bold text-school-brown mb-4",
                                    children: benefitsHeading
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/components/FacilityPage.tsx:163:12",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/FacilityPage.tsx",
                                    "data-component-line": "163",
                                    "data-component-file": "FacilityPage.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22h-1%20w-16%20bg-indian-green%20rounded-full%20mx-auto%22%7D",
                                    className: "h-1 w-16 bg-indian-green rounded-full mx-auto"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/components/FacilityPage.tsx:166:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/FacilityPage.tsx",
                            "data-component-line": "166",
                            "data-component-file": "FacilityPage.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22grid%20sm%3Agrid-cols-2%20lg%3Agrid-cols-4%20gap-5%20max-w-6xl%20mx-auto%22%7D",
                            className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto",
                            children: benefits.map((b, i)=>/*#__PURE__*/ _jsxDEV(motion.div, {
                                    "data-lov-id": "src/components/FacilityPage.tsx:168:14",
                                    "data-lov-name": "motion.div",
                                    "data-component-path": "src/components/FacilityPage.tsx",
                                    "data-component-line": "168",
                                    "data-component-file": "FacilityPage.tsx",
                                    "data-component-name": "motion.div",
                                    "data-component-content": "%7B%22className%22%3A%22text-center%20p-6%20rounded-2xl%20bg-gradient-to-b%20from-indian-green%2F5%20to-transparent%20hover%3Afrom-indian-green%2F10%20transition-colors%22%7D",
                                    initial: "hidden",
                                    whileInView: "show",
                                    viewport: {
                                        once: true,
                                        amount: 0.2
                                    },
                                    variants: fadeUp,
                                    transition: {
                                        delay: i * 0.05
                                    },
                                    className: "text-center p-6 rounded-2xl bg-gradient-to-b from-indian-green/5 to-transparent hover:from-indian-green/10 transition-colors",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/components/FacilityPage.tsx:177:16",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/components/FacilityPage.tsx",
                                            "data-component-line": "177",
                                            "data-component-file": "FacilityPage.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22w-12%20h-12%20rounded-full%20flex%20items-center%20justify-center%20mx-auto%20mb-3%20bg-indian-green%2F10%22%7D",
                                            className: "w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 bg-indian-green/10",
                                            children: /*#__PURE__*/ _jsxDEV(b.icon, {
                                                "data-lov-id": "src/components/FacilityPage.tsx:178:18",
                                                "data-lov-name": "b.icon",
                                                "data-component-path": "src/components/FacilityPage.tsx",
                                                "data-component-line": "178",
                                                "data-component-file": "FacilityPage.tsx",
                                                "data-component-name": "b.icon",
                                                "data-component-content": "%7B%22className%22%3A%22text-indian-green%22%7D",
                                                size: 24,
                                                strokeWidth: 2.25,
                                                className: "text-indian-green"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                                lineNumber: 178,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                            lineNumber: 177,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("h3", {
                                            "data-lov-id": "src/components/FacilityPage.tsx:180:16",
                                            "data-lov-name": "h3",
                                            "data-component-path": "src/components/FacilityPage.tsx",
                                            "data-component-line": "180",
                                            "data-component-file": "FacilityPage.tsx",
                                            "data-component-name": "h3",
                                            "data-component-content": "%7B%22className%22%3A%22text-base%20font-bold%20text-school-brown%20mb-1%22%7D",
                                            className: "text-base font-bold text-school-brown mb-1",
                                            children: b.title
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("p", {
                                            "data-lov-id": "src/components/FacilityPage.tsx:181:16",
                                            "data-lov-name": "p",
                                            "data-component-path": "src/components/FacilityPage.tsx",
                                            "data-component-line": "181",
                                            "data-component-file": "FacilityPage.tsx",
                                            "data-component-name": "p",
                                            "data-component-content": "%7B%22className%22%3A%22text-elegant-light%20text-sm%20leading-relaxed%22%7D",
                                            className: "text-elegant-light text-sm leading-relaxed",
                                            children: b.description
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                            lineNumber: 181,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, b.title, true, {
                                    fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                    lineNumber: 168,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            gallery.length > 0 && /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/components/FacilityPage.tsx:190:8",
                "data-lov-name": "section",
                "data-component-path": "src/components/FacilityPage.tsx",
                "data-component-line": "190",
                "data-component-file": "FacilityPage.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20lg%3Apy-20%20bg-muted%2F30%22%7D",
                className: "py-16 lg:py-20 bg-muted/30",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/components/FacilityPage.tsx:191:10",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/FacilityPage.tsx",
                    "data-component-line": "191",
                    "data-component-file": "FacilityPage.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/components/FacilityPage.tsx:192:12",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/FacilityPage.tsx",
                            "data-component-line": "192",
                            "data-component-file": "FacilityPage.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22text-center%20max-w-2xl%20mx-auto%20mb-12%22%7D",
                            className: "text-center max-w-2xl mx-auto mb-12",
                            children: [
                                /*#__PURE__*/ _jsxDEV("span", {
                                    "data-lov-id": "src/components/FacilityPage.tsx:193:14",
                                    "data-lov-name": "span",
                                    "data-component-path": "src/components/FacilityPage.tsx",
                                    "data-component-line": "193",
                                    "data-component-file": "FacilityPage.tsx",
                                    "data-component-name": "span",
                                    "data-component-content": "%7B%22text%22%3A%22Gallery%22%2C%22className%22%3A%22inline-block%20text-xs%20font-semibold%20tracking-%5B0.25em%5D%20uppercase%20text-indian-green%20mb-3%22%7D",
                                    className: "inline-block text-xs font-semibold tracking-[0.25em] uppercase text-indian-green mb-3",
                                    children: "Gallery"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                    lineNumber: 193,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("h2", {
                                    "data-lov-id": "src/components/FacilityPage.tsx:196:14",
                                    "data-lov-name": "h2",
                                    "data-component-path": "src/components/FacilityPage.tsx",
                                    "data-component-line": "196",
                                    "data-component-file": "FacilityPage.tsx",
                                    "data-component-name": "h2",
                                    "data-component-content": "%7B%22text%22%3A%22A%20Glimpse%20Inside%22%2C%22className%22%3A%22text-3xl%20lg%3Atext-4xl%20font-bold%20text-school-brown%20mb-4%22%7D",
                                    className: "text-3xl lg:text-4xl font-bold text-school-brown mb-4",
                                    children: "A Glimpse Inside"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                    lineNumber: 196,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/components/FacilityPage.tsx:199:14",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/FacilityPage.tsx",
                                    "data-component-line": "199",
                                    "data-component-file": "FacilityPage.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22h-1%20w-16%20bg-indian-green%20rounded-full%20mx-auto%22%7D",
                                    className: "h-1 w-16 bg-indian-green rounded-full mx-auto"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                    lineNumber: 199,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                            lineNumber: 192,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/components/FacilityPage.tsx:202:12",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/FacilityPage.tsx",
                            "data-component-line": "202",
                            "data-component-file": "FacilityPage.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22grid%20grid-cols-1%20sm%3Agrid-cols-2%20lg%3Agrid-cols-3%20gap-6%20max-w-6xl%20mx-auto%22%7D",
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto",
                            children: gallery.slice(0, 3).map((g, i)=>/*#__PURE__*/ _jsxDEV(motion.div, {
                                    "data-lov-id": "src/components/FacilityPage.tsx:204:16",
                                    "data-lov-name": "motion.div",
                                    "data-component-path": "src/components/FacilityPage.tsx",
                                    "data-component-line": "204",
                                    "data-component-file": "FacilityPage.tsx",
                                    "data-component-name": "motion.div",
                                    "data-component-content": "%7B%22className%22%3A%22overflow-hidden%20rounded-xl%20shadow-lg%20bg-card%22%7D",
                                    initial: {
                                        opacity: 0,
                                        scale: 0.95
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    viewport: {
                                        once: true,
                                        amount: 0.2
                                    },
                                    transition: {
                                        duration: 0.4,
                                        delay: i * 0.05
                                    },
                                    className: "overflow-hidden rounded-xl shadow-lg bg-card",
                                    children: /*#__PURE__*/ _jsxDEV("img", {
                                        "data-lov-id": "src/components/FacilityPage.tsx:212:18",
                                        "data-lov-name": "img",
                                        "data-component-path": "src/components/FacilityPage.tsx",
                                        "data-component-line": "212",
                                        "data-component-file": "FacilityPage.tsx",
                                        "data-component-name": "img",
                                        "data-component-content": "%7B%22className%22%3A%22w-full%20h-%5B280px%5D%20object-cover%22%7D",
                                        src: g.src,
                                        alt: g.alt,
                                        loading: "lazy",
                                        className: "w-full h-[280px] object-cover"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                        lineNumber: 212,
                                        columnNumber: 19
                                    }, this)
                                }, i, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                    lineNumber: 204,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                            lineNumber: 202,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                    lineNumber: 191,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                lineNumber: 190,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/components/FacilityPage.tsx:226:6",
                "data-lov-name": "section",
                "data-component-path": "src/components/FacilityPage.tsx",
                "data-component-line": "226",
                "data-component-file": "FacilityPage.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20lg%3Apy-20%20bg-background%22%7D",
                className: "py-16 lg:py-20 bg-background",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/components/FacilityPage.tsx:227:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/FacilityPage.tsx",
                    "data-component-line": "227",
                    "data-component-file": "FacilityPage.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/components/FacilityPage.tsx:228:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/FacilityPage.tsx",
                        "data-component-line": "228",
                        "data-component-file": "FacilityPage.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22max-w-5xl%20mx-auto%22%7D",
                        className: "max-w-5xl mx-auto",
                        children: /*#__PURE__*/ _jsxDEV(Card, {
                            "data-lov-id": "src/components/FacilityPage.tsx:229:12",
                            "data-lov-name": "Card",
                            "data-component-path": "src/components/FacilityPage.tsx",
                            "data-component-line": "229",
                            "data-component-file": "FacilityPage.tsx",
                            "data-component-name": "Card",
                            "data-component-content": "%7B%22className%22%3A%22border-0%20shadow-xl%20overflow-hidden%20bg-indian-green%22%7D",
                            className: "border-0 shadow-xl overflow-hidden bg-indian-green",
                            children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                "data-lov-id": "src/components/FacilityPage.tsx:230:14",
                                "data-lov-name": "CardContent",
                                "data-component-path": "src/components/FacilityPage.tsx",
                                "data-component-line": "230",
                                "data-component-file": "FacilityPage.tsx",
                                "data-component-name": "CardContent",
                                "data-component-content": "%7B%22className%22%3A%22p-8%20lg%3Ap-12%20!text-white%22%7D",
                                className: "p-8 lg:p-12 !text-white",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        "data-lov-id": "src/components/FacilityPage.tsx:231:16",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/components/FacilityPage.tsx",
                                        "data-component-line": "231",
                                        "data-component-file": "FacilityPage.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20gap-3%20mb-4%22%7D",
                                        className: "flex items-center gap-3 mb-4",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV(Sparkles, {
                                                size: 24,
                                                color: "#ffffff"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                                lineNumber: 232,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("span", {
                                                "data-lov-id": "src/components/FacilityPage.tsx:233:18",
                                                "data-lov-name": "span",
                                                "data-component-path": "src/components/FacilityPage.tsx",
                                                "data-component-line": "233",
                                                "data-component-file": "FacilityPage.tsx",
                                                "data-component-name": "span",
                                                "data-component-content": "%7B%22text%22%3A%22Holistic%20Impact%22%2C%22className%22%3A%22text-xs%20font-semibold%20tracking-%5B0.25em%5D%20uppercase%20text-white%22%7D",
                                                className: "text-xs font-semibold tracking-[0.25em] uppercase text-white",
                                                children: "Holistic Impact"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                                lineNumber: 233,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                        lineNumber: 231,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("h2", {
                                        "data-lov-id": "src/components/FacilityPage.tsx:237:16",
                                        "data-lov-name": "h2",
                                        "data-component-path": "src/components/FacilityPage.tsx",
                                        "data-component-line": "237",
                                        "data-component-file": "FacilityPage.tsx",
                                        "data-component-name": "h2",
                                        "data-component-content": "%7B%22className%22%3A%22text-3xl%20lg%3Atext-4xl%20font-bold%20mb-5%20text-white%22%7D",
                                        className: "text-3xl lg:text-4xl font-bold mb-5 text-white",
                                        children: whyItMattersHeading
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                        lineNumber: 237,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        "data-lov-id": "src/components/FacilityPage.tsx:238:16",
                                        "data-lov-name": "p",
                                        "data-component-path": "src/components/FacilityPage.tsx",
                                        "data-component-line": "238",
                                        "data-component-file": "FacilityPage.tsx",
                                        "data-component-name": "p",
                                        "data-component-content": "%7B%22className%22%3A%22text-white%20text-base%20lg%3Atext-lg%20leading-relaxed%20mb-6%22%7D",
                                        className: "text-white text-base lg:text-lg leading-relaxed mb-6",
                                        children: whyItMattersBody
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                        lineNumber: 238,
                                        columnNumber: 17
                                    }, this),
                                    whyItMattersPoints && whyItMattersPoints.length > 0 && /*#__PURE__*/ _jsxDEV("ul", {
                                        "data-lov-id": "src/components/FacilityPage.tsx:242:18",
                                        "data-lov-name": "ul",
                                        "data-component-path": "src/components/FacilityPage.tsx",
                                        "data-component-line": "242",
                                        "data-component-file": "FacilityPage.tsx",
                                        "data-component-name": "ul",
                                        "data-component-content": "%7B%22className%22%3A%22grid%20sm%3Agrid-cols-2%20gap-3%20mt-6%22%7D",
                                        className: "grid sm:grid-cols-2 gap-3 mt-6",
                                        children: whyItMattersPoints.map((pt, i)=>/*#__PURE__*/ _jsxDEV("li", {
                                                "data-lov-id": "src/components/FacilityPage.tsx:244:22",
                                                "data-lov-name": "li",
                                                "data-component-path": "src/components/FacilityPage.tsx",
                                                "data-component-line": "244",
                                                "data-component-file": "FacilityPage.tsx",
                                                "data-component-name": "li",
                                                "data-component-content": "%7B%22className%22%3A%22flex%20items-start%20gap-3%20text-white%22%7D",
                                                className: "flex items-start gap-3 text-white",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("span", {
                                                        "data-lov-id": "src/components/FacilityPage.tsx:245:24",
                                                        "data-lov-name": "span",
                                                        "data-component-path": "src/components/FacilityPage.tsx",
                                                        "data-component-line": "245",
                                                        "data-component-file": "FacilityPage.tsx",
                                                        "data-component-name": "span",
                                                        "data-component-content": "%7B%22className%22%3A%22mt-1%20inline-block%20w-2%20h-2%20rounded-full%20bg-white%20shrink-0%22%7D",
                                                        className: "mt-1 inline-block w-2 h-2 rounded-full bg-white shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("span", {
                                                        "data-lov-id": "src/components/FacilityPage.tsx:246:24",
                                                        "data-lov-name": "span",
                                                        "data-component-path": "src/components/FacilityPage.tsx",
                                                        "data-component-line": "246",
                                                        "data-component-file": "FacilityPage.tsx",
                                                        "data-component-name": "span",
                                                        "data-component-content": "%7B%22className%22%3A%22text-sm%20lg%3Atext-base%22%7D",
                                                        className: "text-sm lg:text-base",
                                                        children: pt
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                                        lineNumber: 246,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                                lineNumber: 244,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                        lineNumber: 242,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                lineNumber: 230,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                            lineNumber: 229,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                        lineNumber: 228,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                    lineNumber: 227,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/components/FacilityPage.tsx:258:6",
                "data-lov-name": "section",
                "data-component-path": "src/components/FacilityPage.tsx",
                "data-component-line": "258",
                "data-component-file": "FacilityPage.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20lg%3Apy-20%20bg-gradient-to-br%20from-indian-green%2F10%20via-background%20to-indian-green%2F10%22%7D",
                className: "py-16 lg:py-20 bg-gradient-to-br from-indian-green/10 via-background to-indian-green/10",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/components/FacilityPage.tsx:259:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/FacilityPage.tsx",
                    "data-component-line": "259",
                    "data-component-file": "FacilityPage.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/components/FacilityPage.tsx:260:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/FacilityPage.tsx",
                        "data-component-line": "260",
                        "data-component-file": "FacilityPage.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22max-w-3xl%20mx-auto%20text-center%22%7D",
                        className: "max-w-3xl mx-auto text-center",
                        children: [
                            /*#__PURE__*/ _jsxDEV("p", {
                                "data-lov-id": "src/components/FacilityPage.tsx:261:12",
                                "data-lov-name": "p",
                                "data-component-path": "src/components/FacilityPage.tsx",
                                "data-component-line": "261",
                                "data-component-file": "FacilityPage.tsx",
                                "data-component-name": "p",
                                "data-component-content": "%7B%22text%22%3A%22%5C%22%20%5C%22%22%2C%22className%22%3A%22text-xl%20lg%3Atext-2xl%20font-semibold%20text-school-brown%20leading-relaxed%20italic%20mb-8%22%7D",
                                className: "text-xl lg:text-2xl font-semibold text-school-brown leading-relaxed italic mb-8",
                                children: [
                                    '"',
                                    closingMessage,
                                    '"'
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                lineNumber: 261,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/components/FacilityPage.tsx:264:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/components/FacilityPage.tsx",
                                "data-component-line": "264",
                                "data-component-file": "FacilityPage.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22flex%20flex-wrap%20gap-4%20justify-center%22%7D",
                                className: "flex flex-wrap gap-4 justify-center",
                                children: [
                                    /*#__PURE__*/ _jsxDEV(Button, {
                                        "data-lov-id": "src/components/FacilityPage.tsx:265:14",
                                        "data-lov-name": "Button",
                                        "data-component-path": "src/components/FacilityPage.tsx",
                                        "data-component-line": "265",
                                        "data-component-file": "FacilityPage.tsx",
                                        "data-component-name": "Button",
                                        "data-component-content": "%7B%22className%22%3A%22bg-indian-green%20hover%3Abg-indian-green%2F90%20text-white%22%7D",
                                        asChild: true,
                                        size: "lg",
                                        className: "bg-indian-green hover:bg-indian-green/90 text-white",
                                        children: /*#__PURE__*/ _jsxDEV(Link, {
                                            "data-lov-id": "src/components/FacilityPage.tsx:266:16",
                                            "data-lov-name": "Link",
                                            "data-component-path": "src/components/FacilityPage.tsx",
                                            "data-component-line": "266",
                                            "data-component-file": "FacilityPage.tsx",
                                            "data-component-name": "Link",
                                            "data-component-content": "%7B%7D",
                                            to: ctaHref,
                                            children: [
                                                ctaText,
                                                " ",
                                                /*#__PURE__*/ _jsxDEV(ArrowRight, {
                                                    "data-lov-id": "src/components/FacilityPage.tsx:267:28",
                                                    "data-lov-name": "ArrowRight",
                                                    "data-component-path": "src/components/FacilityPage.tsx",
                                                    "data-component-line": "267",
                                                    "data-component-file": "FacilityPage.tsx",
                                                    "data-component-name": "ArrowRight",
                                                    "data-component-content": "%7B%22className%22%3A%22ml-2%20h-4%20w-4%22%7D",
                                                    className: "ml-2 h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                            lineNumber: 266,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                        lineNumber: 265,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV(Button, {
                                        "data-lov-id": "src/components/FacilityPage.tsx:270:14",
                                        "data-lov-name": "Button",
                                        "data-component-path": "src/components/FacilityPage.tsx",
                                        "data-component-line": "270",
                                        "data-component-file": "FacilityPage.tsx",
                                        "data-component-name": "Button",
                                        "data-component-content": "%7B%7D",
                                        asChild: true,
                                        variant: "outline",
                                        size: "lg",
                                        children: /*#__PURE__*/ _jsxDEV(Link, {
                                            "data-lov-id": "src/components/FacilityPage.tsx:271:16",
                                            "data-lov-name": "Link",
                                            "data-component-path": "src/components/FacilityPage.tsx",
                                            "data-component-line": "271",
                                            "data-component-file": "FacilityPage.tsx",
                                            "data-component-name": "Link",
                                            "data-component-content": "%7B%22text%22%3A%22Visit%20Our%20Campus%22%7D",
                                            to: "/contact",
                                            children: "Visit Our Campus"
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                            lineNumber: 271,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                        lineNumber: 270,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                                lineNumber: 264,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                        lineNumber: 260,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                    lineNumber: 259,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
                lineNumber: 258,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/sjrsh916/public_html/src/components/FacilityPage.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
};
_c = FacilityPage;
export default FacilityPage;
var _c;
$RefreshReg$(_c, "FacilityPage");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/components/FacilityPage.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/components/FacilityPage.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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Qyx1QkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLDBCQUFBO3dDQUFFcUMsT0FBTzt3Q0FBQ0UsU0FBUTt3Q0FBVWYsTUFBSztrREFDckMsc0JBQUM1RDs0Q0FBRzhCLGVBQUE7NENBQUFDLGlCQUFBOzRDQUFBQyx1QkFBQTs0Q0FBQUMsdUJBQUE7NENBQUFDLHVCQUFBOzRDQUFBQyx1QkFBQTs0Q0FBQUMsMEJBQUE7NENBQUVzQyxJQUFHO3NEQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRcEM7S0E5T005RDtBQWdQTixlQUFlQSxhQUFZIiwibmFtZXMiOlsiTGF5b3V0IiwiUGFnZUhlcm8iLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJCdXR0b24iLCJMaW5rIiwibW90aW9uIiwiU3BhcmtsZXMiLCJBcnJvd1JpZ2h0IiwiZmFkZVVwIiwiaGlkZGVuIiwib3BhY2l0eSIsInkiLCJzaG93IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsIkZhY2lsaXR5UGFnZSIsInRpdGxlIiwiYnJlYWRjcnVtYkxhYmVsIiwiaW50cm9IZWFkaW5nIiwiaW50cm9QYXJhZ3JhcGhzIiwiaW50cm9JbWFnZSIsImludHJvSW1hZ2VBbHQiLCJmZWF0dXJlcyIsImZlYXR1cmVzSGVhZGluZyIsImJlbmVmaXRzIiwiYmVuZWZpdHNIZWFkaW5nIiwiZ2FsbGVyeSIsIndoeUl0TWF0dGVyc0hlYWRpbmciLCJ3aHlJdE1hdHRlcnNCb2R5Iiwid2h5SXRNYXR0ZXJzUG9pbnRzIiwiY2xvc2luZ01lc3NhZ2UiLCJjdGFUZXh0IiwiY3RhSHJlZiIsImRhdGEtbG92LWlkIiwiZGF0YS1sb3YtbmFtZSIsImRhdGEtY29tcG9uZW50LXBhdGgiLCJkYXRhLWNvbXBvbmVudC1saW5lIiwiZGF0YS1jb21wb25lbnQtZmlsZSIsImRhdGEtY29tcG9uZW50LW5hbWUiLCJkYXRhLWNvbXBvbmVudC1jb250ZW50IiwiYnJlYWRjcnVtYnMiLCJsYWJlbCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJpbml0aWFsIiwid2hpbGVJblZpZXciLCJ2aWV3cG9ydCIsIm9uY2UiLCJhbW91bnQiLCJ2YXJpYW50cyIsImltZyIsInNyYyIsImFsdCIsImxvYWRpbmciLCJzcGFuIiwiaDIiLCJtYXAiLCJwIiwiaSIsImYiLCJkZWxheSIsImljb24iLCJzaXplIiwic3Ryb2tlV2lkdGgiLCJjb2xvciIsImgzIiwiZGVzY3JpcHRpb24iLCJiIiwibGVuZ3RoIiwic2xpY2UiLCJnIiwic2NhbGUiLCJ1bCIsInB0IiwibGkiLCJhc0NoaWxkIiwidG8iLCJ2YXJpYW50Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkZhY2lsaXR5UGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFBhZ2VIZXJvIGZyb20gXCJAL2NvbXBvbmVudHMvUGFnZUhlcm9cIjtcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHR5cGUgeyBWYXJpYW50cyB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBTcGFya2xlcywgQXJyb3dSaWdodCwgdHlwZSBMdWNpZGVJY29uIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZhY2lsaXR5RmVhdHVyZSB7XG4gIGljb246IEx1Y2lkZUljb247XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmFjaWxpdHlQYWdlUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xuICBicmVhZGNydW1iTGFiZWw6IHN0cmluZztcbiAgaW50cm9IZWFkaW5nOiBzdHJpbmc7XG4gIGludHJvUGFyYWdyYXBoczogc3RyaW5nW107XG4gIGludHJvSW1hZ2U6IHN0cmluZztcbiAgaW50cm9JbWFnZUFsdDogc3RyaW5nO1xuICBmZWF0dXJlczogRmFjaWxpdHlGZWF0dXJlW107XG4gIGZlYXR1cmVzSGVhZGluZz86IHN0cmluZztcbiAgYmVuZWZpdHM6IEZhY2lsaXR5RmVhdHVyZVtdO1xuICBiZW5lZml0c0hlYWRpbmc/OiBzdHJpbmc7XG4gIGdhbGxlcnk6IHsgc3JjOiBzdHJpbmc7IGFsdDogc3RyaW5nIH1bXTtcbiAgd2h5SXRNYXR0ZXJzSGVhZGluZz86IHN0cmluZztcbiAgd2h5SXRNYXR0ZXJzQm9keTogc3RyaW5nO1xuICB3aHlJdE1hdHRlcnNQb2ludHM/OiBzdHJpbmdbXTtcbiAgY2xvc2luZ01lc3NhZ2U6IHN0cmluZztcbiAgY3RhVGV4dD86IHN0cmluZztcbiAgY3RhSHJlZj86IHN0cmluZztcbn1cblxuY29uc3QgZmFkZVVwOiBWYXJpYW50cyA9IHtcbiAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHk6IDI0IH0sXG4gIHNob3c6IHsgb3BhY2l0eTogMSwgeTogMCwgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMC41LCBlYXNlOiBbMC4yMiwgMSwgMC4zNiwgMV0gfSB9LFxufTtcblxuY29uc3QgRmFjaWxpdHlQYWdlID0gKHtcbiAgdGl0bGUsXG4gIGJyZWFkY3J1bWJMYWJlbCxcbiAgaW50cm9IZWFkaW5nLFxuICBpbnRyb1BhcmFncmFwaHMsXG4gIGludHJvSW1hZ2UsXG4gIGludHJvSW1hZ2VBbHQsXG4gIGZlYXR1cmVzLFxuICBmZWF0dXJlc0hlYWRpbmcgPSBcIktleSBGZWF0dXJlc1wiLFxuICBiZW5lZml0cyxcbiAgYmVuZWZpdHNIZWFkaW5nID0gXCJCZW5lZml0cyBmb3IgU3R1ZGVudHNcIixcbiAgZ2FsbGVyeSxcbiAgd2h5SXRNYXR0ZXJzSGVhZGluZyA9IFwiV2h5IEl0IE1hdHRlcnNcIixcbiAgd2h5SXRNYXR0ZXJzQm9keSxcbiAgd2h5SXRNYXR0ZXJzUG9pbnRzLFxuICBjbG9zaW5nTWVzc2FnZSxcbiAgY3RhVGV4dCA9IFwiRXhwbG9yZSBBZG1pc3Npb25zXCIsXG4gIGN0YUhyZWYgPSBcIi9hZG1pc3Npb25zL2FkbWlzc2lvbnMtcHJvY2Vzc1wiLFxufTogRmFjaWxpdHlQYWdlUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPFBhZ2VIZXJvXG4gICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgYnJlYWRjcnVtYnM9e1tcbiAgICAgICAgICB7IGxhYmVsOiBcIkZhY2lsaXRpZXNcIiB9LFxuICAgICAgICAgIHsgbGFiZWw6IGJyZWFkY3J1bWJMYWJlbCB9LFxuICAgICAgICBdfVxuICAgICAgLz5cblxuICAgICAgey8qIEludHJvZHVjdGlvbiAqL31cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTE2IGxnOnB5LTIwIGJnLWJhY2tncm91bmRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGxnOmdyaWQtY29scy0yIGdhcC0xMCBsZzpnYXAtMTYgaXRlbXMtY2VudGVyIG1heC13LTZ4bCBteC1hdXRvXCI+XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgd2hpbGVJblZpZXc9XCJzaG93XCJcbiAgICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSwgYW1vdW50OiAwLjMgfX1cbiAgICAgICAgICAgICAgdmFyaWFudHM9e2ZhZGVVcH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIC1pbnNldC00IGJnLWdyYWRpZW50LXRvLXRyIGZyb20taW5kaWFuLWdyZWVuLzIwIHRvLWluZGlhbi1ncmVlbi8xMCByb3VuZGVkLTN4bCBibHVyLTJ4bFwiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtMnhsIHNoYWRvdy0yeGxcIj5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9e2ludHJvSW1hZ2V9XG4gICAgICAgICAgICAgICAgICBhbHQ9e2ludHJvSW1hZ2VBbHR9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC04MCBsZzpoLVs0ODBweF0gb2JqZWN0LWNvdmVyIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTcwMCBob3ZlcjpzY2FsZS0xMDVcIlxuICAgICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgd2hpbGVJblZpZXc9XCJzaG93XCJcbiAgICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSwgYW1vdW50OiAwLjMgfX1cbiAgICAgICAgICAgICAgdmFyaWFudHM9e2ZhZGVVcH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHRleHQteHMgZm9udC1zZW1pYm9sZCB0cmFja2luZy1bMC4yNWVtXSB1cHBlcmNhc2UgdGV4dC1pbmRpYW4tZ3JlZW4gbWItM1wiPlxuICAgICAgICAgICAgICAgIE91ciBGYWNpbGl0eVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBsZzp0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gbWItNCBsZWFkaW5nLXRpZ2h0XCI+XG4gICAgICAgICAgICAgICAge2ludHJvSGVhZGluZ31cbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTEgdy0xNiBiZy1pbmRpYW4tZ3JlZW4gcm91bmRlZC1mdWxsIG1iLTZcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNCB0ZXh0LWVsZWdhbnQtbGlnaHQgdGV4dC1iYXNlIGxnOnRleHQtbGcgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgICAge2ludHJvUGFyYWdyYXBocy5tYXAoKHAsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxwIGtleT17aX0+e3B9PC9wPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIHsvKiBLZXkgRmVhdHVyZXMgKi99XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNiBsZzpweS0yMCBiZy1tdXRlZC8zMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1heC13LTJ4bCBteC1hdXRvIG1iLTEyXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdGV4dC14cyBmb250LXNlbWlib2xkIHRyYWNraW5nLVswLjI1ZW1dIHVwcGVyY2FzZSB0ZXh0LWluZGlhbi1ncmVlbiBtYi0zXCI+XG4gICAgICAgICAgICAgIFdoYXQgV2UgT2ZmZXJcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBsZzp0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gbWItNFwiPlxuICAgICAgICAgICAgICB7ZmVhdHVyZXNIZWFkaW5nfVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0xIHctMTYgYmctaW5kaWFuLWdyZWVuIHJvdW5kZWQtZnVsbCBteC1hdXRvXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNiBtYXgtdy02eGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAge2ZlYXR1cmVzLm1hcCgoZiwgaSkgPT4gKFxuICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgIGtleT17Zi50aXRsZX1cbiAgICAgICAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICB3aGlsZUluVmlldz1cInNob3dcIlxuICAgICAgICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUsIGFtb3VudDogMC4yIH19XG4gICAgICAgICAgICAgICAgdmFyaWFudHM9e2ZhZGVVcH1cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiBpICogMC4wNSB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiZ3JvdXAgaC1mdWxsIGJvcmRlciBib3JkZXItYm9yZGVyLzYwIGhvdmVyOmJvcmRlci1pbmRpYW4tZ3JlZW4vNjAgaG92ZXI6c2hhZG93LXhsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBob3ZlcjotdHJhbnNsYXRlLXktMSBiZy1jYXJkXCI+XG4gICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xNCBoLTE0IHJvdW5kZWQteGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWItNCBzaGFkb3ctbWQgZ3JvdXAtaG92ZXI6c2NhbGUtMTEwIHRyYW5zaXRpb24tdHJhbnNmb3JtIGJnLWluZGlhbi1ncmVlblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxmLmljb24gc2l6ZT17Mjh9IHN0cm9rZVdpZHRoPXsyLjI1fSBjb2xvcj1cIiNmZmZmZmZcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIHRleHQtc2Nob29sLWJyb3duIG1iLTJcIj57Zi50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWVsZWdhbnQtbGlnaHQgdGV4dC1zbSBsZWFkaW5nLXJlbGF4ZWRcIj57Zi5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7LyogQmVuZWZpdHMgKi99XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNiBsZzpweS0yMCBiZy1iYWNrZ3JvdW5kXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWF4LXctMnhsIG14LWF1dG8gbWItMTJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdHJhY2tpbmctWzAuMjVlbV0gdXBwZXJjYXNlIHRleHQtaW5kaWFuLWdyZWVuIG1iLTNcIj5cbiAgICAgICAgICAgICAgU3R1ZGVudCBPdXRjb21lc1xuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGxnOnRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LXNjaG9vbC1icm93biBtYi00XCI+XG4gICAgICAgICAgICAgIHtiZW5lZml0c0hlYWRpbmd9XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTEgdy0xNiBiZy1pbmRpYW4tZ3JlZW4gcm91bmRlZC1mdWxsIG14LWF1dG9cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy00IGdhcC01IG1heC13LTZ4bCBteC1hdXRvXCI+XG4gICAgICAgICAgICB7YmVuZWZpdHMubWFwKChiLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAga2V5PXtiLnRpdGxlfVxuICAgICAgICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgIHdoaWxlSW5WaWV3PVwic2hvd1wiXG4gICAgICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSwgYW1vdW50OiAwLjIgfX1cbiAgICAgICAgICAgICAgICB2YXJpYW50cz17ZmFkZVVwfVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IGkgKiAwLjA1IH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcC02IHJvdW5kZWQtMnhsIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1pbmRpYW4tZ3JlZW4vNSB0by10cmFuc3BhcmVudCBob3Zlcjpmcm9tLWluZGlhbi1ncmVlbi8xMCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTIgaC0xMiByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXgtYXV0byBtYi0zIGJnLWluZGlhbi1ncmVlbi8xMFwiPlxuICAgICAgICAgICAgICAgICAgPGIuaWNvbiBzaXplPXsyNH0gc3Ryb2tlV2lkdGg9ezIuMjV9IGNsYXNzTmFtZT1cInRleHQtaW5kaWFuLWdyZWVuXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtYm9sZCB0ZXh0LXNjaG9vbC1icm93biBtYi0xXCI+e2IudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWVsZWdhbnQtbGlnaHQgdGV4dC1zbSBsZWFkaW5nLXJlbGF4ZWRcIj57Yi5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgey8qIEdhbGxlcnkgKi99XG4gICAgICB7Z2FsbGVyeS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTYgbGc6cHktMjAgYmctbXV0ZWQvMzBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWF4LXctMnhsIG14LWF1dG8gbWItMTJcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHRleHQteHMgZm9udC1zZW1pYm9sZCB0cmFja2luZy1bMC4yNWVtXSB1cHBlcmNhc2UgdGV4dC1pbmRpYW4tZ3JlZW4gbWItM1wiPlxuICAgICAgICAgICAgICAgIEdhbGxlcnlcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbGc6dGV4dC00eGwgZm9udC1ib2xkIHRleHQtc2Nob29sLWJyb3duIG1iLTRcIj5cbiAgICAgICAgICAgICAgICBBIEdsaW1wc2UgSW5zaWRlXG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0xIHctMTYgYmctaW5kaWFuLWdyZWVuIHJvdW5kZWQtZnVsbCBteC1hdXRvXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTYgbWF4LXctNnhsIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAge2dhbGxlcnkuc2xpY2UoMCwgMykubWFwKChnLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgc2NhbGU6IDAuOTUgfX1cbiAgICAgICAgICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHNjYWxlOiAxIH19XG4gICAgICAgICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlLCBhbW91bnQ6IDAuMiB9fVxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC40LCBkZWxheTogaSAqIDAuMDUgfX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiByb3VuZGVkLXhsIHNoYWRvdy1sZyBiZy1jYXJkXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz17Zy5zcmN9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17Zy5hbHR9XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtWzI4MHB4XSBvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBXaHkgSXQgTWF0dGVycyAqL31cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTE2IGxnOnB5LTIwIGJnLWJhY2tncm91bmRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy01eGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiYm9yZGVyLTAgc2hhZG93LXhsIG92ZXJmbG93LWhpZGRlbiBiZy1pbmRpYW4tZ3JlZW5cIj5cbiAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtOCBsZzpwLTEyICF0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBtYi00XCI+XG4gICAgICAgICAgICAgICAgICA8U3BhcmtsZXMgc2l6ZT17MjR9IGNvbG9yPVwiI2ZmZmZmZlwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdHJhY2tpbmctWzAuMjVlbV0gdXBwZXJjYXNlIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgSG9saXN0aWMgSW1wYWN0XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGxnOnRleHQtNHhsIGZvbnQtYm9sZCBtYi01IHRleHQtd2hpdGVcIj57d2h5SXRNYXR0ZXJzSGVhZGluZ308L2gyPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1iYXNlIGxnOnRleHQtbGcgbGVhZGluZy1yZWxheGVkIG1iLTZcIj5cbiAgICAgICAgICAgICAgICAgIHt3aHlJdE1hdHRlcnNCb2R5fVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICB7d2h5SXRNYXR0ZXJzUG9pbnRzICYmIHdoeUl0TWF0dGVyc1BvaW50cy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJncmlkIHNtOmdyaWQtY29scy0yIGdhcC0zIG10LTZcIj5cbiAgICAgICAgICAgICAgICAgICAge3doeUl0TWF0dGVyc1BvaW50cy5tYXAoKHB0LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBnYXAtMyB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtdC0xIGlubGluZS1ibG9jayB3LTIgaC0yIHJvdW5kZWQtZnVsbCBiZy13aGl0ZSBzaHJpbmstMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGxnOnRleHQtYmFzZVwiPntwdH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7LyogQ1RBICovfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTYgbGc6cHktMjAgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1pbmRpYW4tZ3JlZW4vMTAgdmlhLWJhY2tncm91bmQgdG8taW5kaWFuLWdyZWVuLzEwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctM3hsIG14LWF1dG8gdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgbGc6dGV4dC0yeGwgZm9udC1zZW1pYm9sZCB0ZXh0LXNjaG9vbC1icm93biBsZWFkaW5nLXJlbGF4ZWQgaXRhbGljIG1iLThcIj5cbiAgICAgICAgICAgICAgXCJ7Y2xvc2luZ01lc3NhZ2V9XCJcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTQganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBhc0NoaWxkIHNpemU9XCJsZ1wiIGNsYXNzTmFtZT1cImJnLWluZGlhbi1ncmVlbiBob3ZlcjpiZy1pbmRpYW4tZ3JlZW4vOTAgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtjdGFIcmVmfT5cbiAgICAgICAgICAgICAgICAgIHtjdGFUZXh0fSA8QXJyb3dSaWdodCBjbGFzc05hbWU9XCJtbC0yIGgtNCB3LTRcIiAvPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gYXNDaGlsZCB2YXJpYW50PVwib3V0bGluZVwiIHNpemU9XCJsZ1wiPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NvbnRhY3RcIj5WaXNpdCBPdXIgQ2FtcHVzPC9MaW5rPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZhY2lsaXR5UGFnZTtcbiJdLCJmaWxlIjoiL2hvbWUvc2pyc2g5MTYvcHVibGljX2h0bWwvc3JjL2NvbXBvbmVudHMvRmFjaWxpdHlQYWdlLnRzeCJ9