import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/admissions/FeeStructure.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import Layout from "/src/components/Layout.tsx";
import PageHero from "/src/components/PageHero.tsx";
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { IndianRupee, CreditCard, FileText, Info, AlertCircle } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
const fees = [
    {
        grade: "Pre-Primary",
        amount: "75,000 - 95,000"
    },
    {
        grade: "Class 1-5",
        amount: "1,15,000 - 1,30,000"
    },
    {
        grade: "Class 6-10",
        amount: "1,30,000 - 1,50,000"
    },
    {
        grade: "Class 11-12",
        amount: "1,40,000"
    }
];
const guidelines = [
    "Fees to be paid within the prescribed timelines.",
    "Payment options available through approved channels.",
    "Receipt generation after successful payment.",
    "School reserves the right to revise fees periodically."
];
const notes = [
    "Zero Admission Fee for New Admissions!",
    "Fee structure is subject to revision by management.",
    "Parents are advised to retain payment receipts.",
    "Contact the school office for clarification regarding fee-related matters."
];
const FeeStructure = ()=>{
    return /*#__PURE__*/ _jsxDEV(Layout, {
        "data-lov-id": "src/pages/admissions/FeeStructure.tsx:29:4",
        "data-lov-name": "Layout",
        "data-component-path": "src/pages/admissions/FeeStructure.tsx",
        "data-component-line": "29",
        "data-component-file": "FeeStructure.tsx",
        "data-component-name": "Layout",
        "data-component-content": "%7B%7D",
        children: [
            /*#__PURE__*/ _jsxDEV(PageHero, {
                "data-lov-id": "src/pages/admissions/FeeStructure.tsx:30:6",
                "data-lov-name": "PageHero",
                "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                "data-component-line": "30",
                "data-component-file": "FeeStructure.tsx",
                "data-component-name": "PageHero",
                "data-component-content": "%7B%7D",
                title: "Fees Structure",
                breadcrumbs: [
                    {
                        label: "Admissions",
                        path: "/admissions"
                    },
                    {
                        label: "Fees Structure"
                    }
                ]
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/admissions/FeeStructure.tsx:38:6",
                "data-lov-name": "section",
                "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                "data-component-line": "38",
                "data-component-file": "FeeStructure.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20lg%3Apy-20%22%7D",
                className: "py-16 lg:py-20",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/admissions/FeeStructure.tsx:39:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                    "data-component-line": "39",
                    "data-component-file": "FeeStructure.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20max-w-4xl%20text-center%22%7D",
                    className: "container mx-auto px-4 max-w-4xl text-center",
                    children: [
                        /*#__PURE__*/ _jsxDEV("p", {
                            "data-lov-id": "src/pages/admissions/FeeStructure.tsx:40:10",
                            "data-lov-name": "p",
                            "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                            "data-component-line": "40",
                            "data-component-file": "FeeStructure.tsx",
                            "data-component-name": "p",
                            "data-component-content": "%7B%22text%22%3A%22Transparent%20Pricing%22%2C%22className%22%3A%22text-xs%20font-semibold%20uppercase%20tracking-%5B0.25em%5D%20text-indian-green%20mb-3%22%7D",
                            className: "text-xs font-semibold uppercase tracking-[0.25em] text-indian-green mb-3",
                            children: "Transparent Pricing"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("h2", {
                            "data-lov-id": "src/pages/admissions/FeeStructure.tsx:43:10",
                            "data-lov-name": "h2",
                            "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                            "data-component-line": "43",
                            "data-component-file": "FeeStructure.tsx",
                            "data-component-name": "h2",
                            "data-component-content": "%7B%22text%22%3A%22Fee%20Structure%20Overview%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20lg%3Atext-5xl%20font-bold%20text-logo-navy%20mb-5%22%7D",
                            className: "text-3xl md:text-4xl lg:text-5xl font-bold text-logo-navy mb-5",
                            style: {
                                fontFamily: "Poppins, sans-serif"
                            },
                            children: "Fee Structure Overview"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("p", {
                            "data-lov-id": "src/pages/admissions/FeeStructure.tsx:49:10",
                            "data-lov-name": "p",
                            "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                            "data-component-line": "49",
                            "data-component-file": "FeeStructure.tsx",
                            "data-component-name": "p",
                            "data-component-content": "%7B%22text%22%3A%22A%20clear%2C%20family-friendly%20fee%20structure%20that%20reflects%20our%20commitment%20to%20quality%20CBSE%5Cn%20%20%20%20%20%20%20%20%20%20%20%20education%20at%20SJRPS-HBR.%22%2C%22className%22%3A%22text-lg%20text-muted-foreground%20leading-relaxed%22%7D",
                            className: "text-lg text-muted-foreground leading-relaxed",
                            children: "A clear, family-friendly fee structure that reflects our commitment to quality CBSE education at SJRPS-HBR."
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/admissions/FeeStructure.tsx:57:6",
                "data-lov-name": "section",
                "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                "data-component-line": "57",
                "data-component-file": "FeeStructure.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22pb-12%22%7D",
                className: "pb-12",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/admissions/FeeStructure.tsx:58:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                    "data-component-line": "58",
                    "data-component-file": "FeeStructure.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20max-w-3xl%22%7D",
                    className: "container mx-auto px-4 max-w-3xl",
                    children: /*#__PURE__*/ _jsxDEV(Card, {
                        "data-lov-id": "src/pages/admissions/FeeStructure.tsx:59:10",
                        "data-lov-name": "Card",
                        "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                        "data-component-line": "59",
                        "data-component-file": "FeeStructure.tsx",
                        "data-component-name": "Card",
                        "data-component-content": "%7B%22className%22%3A%22rounded-2xl%20border%20border-indian-green%2F10%20shadow-xl%20bg-card%22%7D",
                        className: "rounded-2xl border border-indian-green/10 shadow-xl bg-card",
                        style: {
                            backgroundColor: "hsl(0 0% 100%)"
                        },
                        children: /*#__PURE__*/ _jsxDEV(CardContent, {
                            "data-lov-id": "src/pages/admissions/FeeStructure.tsx:63:12",
                            "data-lov-name": "CardContent",
                            "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                            "data-component-line": "63",
                            "data-component-file": "FeeStructure.tsx",
                            "data-component-name": "CardContent",
                            "data-component-content": "%7B%22className%22%3A%22p-8%20lg%3Ap-10%20flex%20flex-col%20md%3Aflex-row%20items-center%20justify-between%20gap-6%20text-center%20md%3Atext-left%22%7D",
                            className: "p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left",
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/admissions/FeeStructure.tsx:64:14",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                                    "data-component-line": "64",
                                    "data-component-file": "FeeStructure.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20gap-4%22%7D",
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/pages/admissions/FeeStructure.tsx:65:16",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                                            "data-component-line": "65",
                                            "data-component-file": "FeeStructure.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22w-14%20h-14%20rounded-2xl%20bg-primary%2F10%20flex%20items-center%20justify-center%20text-primary%22%7D",
                                            className: "w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary",
                                            children: /*#__PURE__*/ _jsxDEV(IndianRupee, {
                                                "data-lov-id": "src/pages/admissions/FeeStructure.tsx:66:18",
                                                "data-lov-name": "IndianRupee",
                                                "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                                                "data-component-line": "66",
                                                "data-component-file": "FeeStructure.tsx",
                                                "data-component-name": "IndianRupee",
                                                "data-component-content": "%7B%22className%22%3A%22h-7%20w-7%20text-primary%22%7D",
                                                className: "h-7 w-7 text-primary"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                                                lineNumber: 66,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/pages/admissions/FeeStructure.tsx:68:16",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                                            "data-component-line": "68",
                                            "data-component-file": "FeeStructure.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%7D",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/admissions/FeeStructure.tsx:69:18",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                                                    "data-component-line": "69",
                                                    "data-component-file": "FeeStructure.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22text%22%3A%22New%20Admissions%22%2C%22className%22%3A%22text-xs%20font-semibold%20uppercase%20tracking-%5B0.25em%5D%22%7D",
                                                    className: "text-xs font-semibold uppercase tracking-[0.25em]",
                                                    style: {
                                                        color: "hsl(0 0% 7%)"
                                                    },
                                                    children: "New Admissions"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("h3", {
                                                    "data-lov-id": "src/pages/admissions/FeeStructure.tsx:75:18",
                                                    "data-lov-name": "h3",
                                                    "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                                                    "data-component-line": "75",
                                                    "data-component-file": "FeeStructure.tsx",
                                                    "data-component-name": "h3",
                                                    "data-component-content": "%7B%22text%22%3A%22Zero%20Admission%20Fees%22%2C%22className%22%3A%22text-2xl%20font-bold%22%7D",
                                                    className: "text-2xl font-bold",
                                                    style: {
                                                        color: "hsl(0 0% 20%)"
                                                    },
                                                    children: "Zero Admission Fees"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/admissions/FeeStructure.tsx:80:14",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                                    "data-component-line": "80",
                                    "data-component-file": "FeeStructure.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22text%22%3A%22Zero%22%2C%22className%22%3A%22text-4xl%20lg%3Atext-5xl%20font-extrabold%22%7D",
                                    className: "text-4xl lg:text-5xl font-extrabold",
                                    style: {
                                        color: "hsl(var(--primary))"
                                    },
                                    children: "Zero"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/admissions/FeeStructure.tsx:92:6",
                "data-lov-name": "section",
                "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                "data-component-line": "92",
                "data-component-file": "FeeStructure.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22pb-16%22%7D",
                className: "pb-16",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/admissions/FeeStructure.tsx:93:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                    "data-component-line": "93",
                    "data-component-file": "FeeStructure.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20max-w-4xl%22%7D",
                    className: "container mx-auto px-4 max-w-4xl",
                    children: [
                        /*#__PURE__*/ _jsxDEV("h3", {
                            "data-lov-id": "src/pages/admissions/FeeStructure.tsx:94:10",
                            "data-lov-name": "h3",
                            "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                            "data-component-line": "94",
                            "data-component-file": "FeeStructure.tsx",
                            "data-component-name": "h3",
                            "data-component-content": "%7B%22text%22%3A%22Annual%20Fee%20Structure%22%2C%22className%22%3A%22text-2xl%20md%3Atext-3xl%20font-bold%20text-logo-navy%20text-center%20mb-8%22%7D",
                            className: "text-2xl md:text-3xl font-bold text-logo-navy text-center mb-8",
                            style: {
                                fontFamily: "Poppins, sans-serif"
                            },
                            children: "Annual Fee Structure"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/admissions/FeeStructure.tsx:102:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                            "data-component-line": "102",
                            "data-component-file": "FeeStructure.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22hidden%20md%3Ablock%20bg-white%20rounded-2xl%20shadow-lg%20border%20border-indian-green%2F10%20overflow-hidden%22%7D",
                            className: "hidden md:block bg-white rounded-2xl shadow-lg border border-indian-green/10 overflow-hidden",
                            children: /*#__PURE__*/ _jsxDEV("table", {
                                "data-lov-id": "src/pages/admissions/FeeStructure.tsx:103:12",
                                "data-lov-name": "table",
                                "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                                "data-component-line": "103",
                                "data-component-file": "FeeStructure.tsx",
                                "data-component-name": "table",
                                "data-component-content": "%7B%22className%22%3A%22w-full%20text-left%22%7D",
                                className: "w-full text-left",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("thead", {
                                        "data-lov-id": "src/pages/admissions/FeeStructure.tsx:104:14",
                                        "data-lov-name": "thead",
                                        "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                                        "data-component-line": "104",
                                        "data-component-file": "FeeStructure.tsx",
                                        "data-component-name": "thead",
                                        "data-component-content": "%7B%22className%22%3A%22bg-indian-green%20text-white%22%7D",
                                        className: "bg-indian-green text-white",
                                        children: /*#__PURE__*/ _jsxDEV("tr", {
                                            "data-lov-id": "src/pages/admissions/FeeStructure.tsx:105:16",
                                            "data-lov-name": "tr",
                                            "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                                            "data-component-line": "105",
                                            "data-component-file": "FeeStructure.tsx",
                                            "data-component-name": "tr",
                                            "data-component-content": "%7B%7D",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("th", {
                                                    "data-lov-id": "src/pages/admissions/FeeStructure.tsx:106:18",
                                                    "data-lov-name": "th",
                                                    "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                                                    "data-component-line": "106",
                                                    "data-component-file": "FeeStructure.tsx",
                                                    "data-component-name": "th",
                                                    "data-component-content": "%7B%22text%22%3A%22Class%22%2C%22className%22%3A%22px-6%20py-4%20text-sm%20uppercase%20tracking-wider%22%7D",
                                                    className: "px-6 py-4 text-sm uppercase tracking-wider",
                                                    children: "Class"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("th", {
                                                    "data-lov-id": "src/pages/admissions/FeeStructure.tsx:107:18",
                                                    "data-lov-name": "th",
                                                    "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                                                    "data-component-line": "107",
                                                    "data-component-file": "FeeStructure.tsx",
                                                    "data-component-name": "th",
                                                    "data-component-content": "%7B%22text%22%3A%22Annual%20Fee%20(%E2%82%B9)%22%2C%22className%22%3A%22px-6%20py-4%20text-sm%20uppercase%20tracking-wider%20text-right%22%7D",
                                                    className: "px-6 py-4 text-sm uppercase tracking-wider text-right",
                                                    children: "Annual Fee (₹)"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                                            lineNumber: 105,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("tbody", {
                                        "data-lov-id": "src/pages/admissions/FeeStructure.tsx:112:14",
                                        "data-lov-name": "tbody",
                                        "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                                        "data-component-line": "112",
                                        "data-component-file": "FeeStructure.tsx",
                                        "data-component-name": "tbody",
                                        "data-component-content": "%7B%7D",
                                        children: fees.map((f, i)=>/*#__PURE__*/ _jsxDEV("tr", {
                                                "data-lov-id": "src/pages/admissions/FeeStructure.tsx:114:18",
                                                "data-lov-name": "tr",
                                                "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                                                "data-component-line": "114",
                                                "data-component-file": "FeeStructure.tsx",
                                                "data-component-name": "tr",
                                                "data-component-content": "%7B%7D",
                                                className: i % 2 === 0 ? "bg-white" : "bg-[hsl(38_70%_97%)]",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("td", {
                                                        "data-lov-id": "src/pages/admissions/FeeStructure.tsx:118:20",
                                                        "data-lov-name": "td",
                                                        "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                                                        "data-component-line": "118",
                                                        "data-component-file": "FeeStructure.tsx",
                                                        "data-component-name": "td",
                                                        "data-component-content": "%7B%22className%22%3A%22px-6%20py-4%20font-semibold%20text-logo-navy%22%7D",
                                                        className: "px-6 py-4 font-semibold text-logo-navy",
                                                        children: f.grade
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("td", {
                                                        "data-lov-id": "src/pages/admissions/FeeStructure.tsx:119:20",
                                                        "data-lov-name": "td",
                                                        "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                                                        "data-component-line": "119",
                                                        "data-component-file": "FeeStructure.tsx",
                                                        "data-component-name": "td",
                                                        "data-component-content": "%7B%22text%22%3A%22%E2%82%B9%22%2C%22className%22%3A%22px-6%20py-4%20text-right%20font-bold%20text-indian-green%20text-lg%22%7D",
                                                        className: "px-6 py-4 text-right font-bold text-indian-green text-lg",
                                                        children: [
                                                            "₹",
                                                            f.amount
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, f.grade, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                                                lineNumber: 114,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/admissions/FeeStructure.tsx:129:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                            "data-component-line": "129",
                            "data-component-file": "FeeStructure.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22md%3Ahidden%20grid%20gap-3%22%7D",
                            className: "md:hidden grid gap-3",
                            children: fees.map((f)=>/*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/admissions/FeeStructure.tsx:131:14",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                                    "data-component-line": "131",
                                    "data-component-file": "FeeStructure.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22bg-white%20rounded-xl%20border%20border-indian-green%2F10%20shadow-sm%20p-4%20flex%20items-center%20justify-between%22%7D",
                                    className: "bg-white rounded-xl border border-indian-green/10 shadow-sm p-4 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("span", {
                                            "data-lov-id": "src/pages/admissions/FeeStructure.tsx:135:16",
                                            "data-lov-name": "span",
                                            "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                                            "data-component-line": "135",
                                            "data-component-file": "FeeStructure.tsx",
                                            "data-component-name": "span",
                                            "data-component-content": "%7B%22className%22%3A%22font-semibold%20text-logo-navy%22%7D",
                                            className: "font-semibold text-logo-navy",
                                            children: f.grade
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                                            lineNumber: 135,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("span", {
                                            "data-lov-id": "src/pages/admissions/FeeStructure.tsx:136:16",
                                            "data-lov-name": "span",
                                            "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                                            "data-component-line": "136",
                                            "data-component-file": "FeeStructure.tsx",
                                            "data-component-name": "span",
                                            "data-component-content": "%7B%22text%22%3A%22%E2%82%B9%22%2C%22className%22%3A%22font-bold%20text-indian-green%22%7D",
                                            className: "font-bold text-indian-green",
                                            children: [
                                                "₹",
                                                f.amount
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                                            lineNumber: 136,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, f.grade, true, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/admissions/FeeStructure.tsx:144:6",
                "data-lov-name": "section",
                "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                "data-component-line": "144",
                "data-component-file": "FeeStructure.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22pb-16%20bg-%5Bhsl(38_70%25_96%25)%5D%20py-16%22%7D",
                className: "pb-16 bg-[hsl(38_70%_96%)] py-16",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/admissions/FeeStructure.tsx:145:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                    "data-component-line": "145",
                    "data-component-file": "FeeStructure.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20max-w-5xl%20grid%20md%3Agrid-cols-2%20gap-6%22%7D",
                    className: "container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-6",
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/admissions/FeeStructure.tsx:146:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                            "data-component-line": "146",
                            "data-component-file": "FeeStructure.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22bg-white%20rounded-2xl%20p-7%20shadow-sm%20border%20border-indian-green%2F10%22%7D",
                            className: "bg-white rounded-2xl p-7 shadow-sm border border-indian-green/10",
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/admissions/FeeStructure.tsx:147:12",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                                    "data-component-line": "147",
                                    "data-component-file": "FeeStructure.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20gap-3%20mb-4%22%7D",
                                    className: "flex items-center gap-3 mb-4",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/pages/admissions/FeeStructure.tsx:148:14",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                                            "data-component-line": "148",
                                            "data-component-file": "FeeStructure.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22w-11%20h-11%20rounded-xl%20bg-indian-green%20flex%20items-center%20justify-center%22%7D",
                                            className: "w-11 h-11 rounded-xl bg-indian-green flex items-center justify-center",
                                            children: /*#__PURE__*/ _jsxDEV(CreditCard, {
                                                "data-lov-id": "src/pages/admissions/FeeStructure.tsx:149:16",
                                                "data-lov-name": "CreditCard",
                                                "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                                                "data-component-line": "149",
                                                "data-component-file": "FeeStructure.tsx",
                                                "data-component-name": "CreditCard",
                                                "data-component-content": "%7B%22className%22%3A%22h-5%20w-5%20text-white%22%7D",
                                                className: "h-5 w-5 text-white"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                                                lineNumber: 149,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("h3", {
                                            "data-lov-id": "src/pages/admissions/FeeStructure.tsx:151:14",
                                            "data-lov-name": "h3",
                                            "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                                            "data-component-line": "151",
                                            "data-component-file": "FeeStructure.tsx",
                                            "data-component-name": "h3",
                                            "data-component-content": "%7B%22text%22%3A%22Fee%20Payment%20Guidelines%22%2C%22className%22%3A%22text-xl%20font-bold%20text-logo-navy%22%7D",
                                            className: "text-xl font-bold text-logo-navy",
                                            children: "Fee Payment Guidelines"
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                                            lineNumber: 151,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("ul", {
                                    "data-lov-id": "src/pages/admissions/FeeStructure.tsx:153:12",
                                    "data-lov-name": "ul",
                                    "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                                    "data-component-line": "153",
                                    "data-component-file": "FeeStructure.tsx",
                                    "data-component-name": "ul",
                                    "data-component-content": "%7B%22className%22%3A%22space-y-3%22%7D",
                                    className: "space-y-3",
                                    children: guidelines.map((g)=>/*#__PURE__*/ _jsxDEV("li", {
                                            "data-lov-id": "src/pages/admissions/FeeStructure.tsx:155:16",
                                            "data-lov-name": "li",
                                            "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                                            "data-component-line": "155",
                                            "data-component-file": "FeeStructure.tsx",
                                            "data-component-name": "li",
                                            "data-component-content": "%7B%22className%22%3A%22flex%20items-start%20gap-2%20text-muted-foreground%22%7D",
                                            className: "flex items-start gap-2 text-muted-foreground",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV(FileText, {
                                                    "data-lov-id": "src/pages/admissions/FeeStructure.tsx:156:18",
                                                    "data-lov-name": "FileText",
                                                    "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                                                    "data-component-line": "156",
                                                    "data-component-file": "FeeStructure.tsx",
                                                    "data-component-name": "FileText",
                                                    "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%20text-saffron-orange%20mt-1%20shrink-0%22%7D",
                                                    className: "h-4 w-4 text-saffron-orange mt-1 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("span", {
                                                    "data-lov-id": "src/pages/admissions/FeeStructure.tsx:157:18",
                                                    "data-lov-name": "span",
                                                    "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                                                    "data-component-line": "157",
                                                    "data-component-file": "FeeStructure.tsx",
                                                    "data-component-name": "span",
                                                    "data-component-content": "%7B%7D",
                                                    children: g
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, g, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                                            lineNumber: 155,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/admissions/FeeStructure.tsx:163:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                            "data-component-line": "163",
                            "data-component-file": "FeeStructure.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22bg-white%20rounded-2xl%20p-7%20shadow-sm%20border%20border-indian-green%2F10%22%7D",
                            className: "bg-white rounded-2xl p-7 shadow-sm border border-indian-green/10",
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/admissions/FeeStructure.tsx:164:12",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                                    "data-component-line": "164",
                                    "data-component-file": "FeeStructure.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20gap-3%20mb-4%22%7D",
                                    className: "flex items-center gap-3 mb-4",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/pages/admissions/FeeStructure.tsx:165:14",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                                            "data-component-line": "165",
                                            "data-component-file": "FeeStructure.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22w-11%20h-11%20rounded-xl%20bg-saffron-orange%20flex%20items-center%20justify-center%22%7D",
                                            className: "w-11 h-11 rounded-xl bg-saffron-orange flex items-center justify-center",
                                            children: /*#__PURE__*/ _jsxDEV(Info, {
                                                "data-lov-id": "src/pages/admissions/FeeStructure.tsx:166:16",
                                                "data-lov-name": "Info",
                                                "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                                                "data-component-line": "166",
                                                "data-component-file": "FeeStructure.tsx",
                                                "data-component-name": "Info",
                                                "data-component-content": "%7B%22className%22%3A%22h-5%20w-5%20text-white%22%7D",
                                                className: "h-5 w-5 text-white"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                                                lineNumber: 166,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("h3", {
                                            "data-lov-id": "src/pages/admissions/FeeStructure.tsx:168:14",
                                            "data-lov-name": "h3",
                                            "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                                            "data-component-line": "168",
                                            "data-component-file": "FeeStructure.tsx",
                                            "data-component-name": "h3",
                                            "data-component-content": "%7B%22text%22%3A%22Important%20Notes%22%2C%22className%22%3A%22text-xl%20font-bold%20text-logo-navy%22%7D",
                                            className: "text-xl font-bold text-logo-navy",
                                            children: "Important Notes"
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                                            lineNumber: 168,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("ul", {
                                    "data-lov-id": "src/pages/admissions/FeeStructure.tsx:170:12",
                                    "data-lov-name": "ul",
                                    "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                                    "data-component-line": "170",
                                    "data-component-file": "FeeStructure.tsx",
                                    "data-component-name": "ul",
                                    "data-component-content": "%7B%22className%22%3A%22space-y-3%22%7D",
                                    className: "space-y-3",
                                    children: notes.map((n)=>/*#__PURE__*/ _jsxDEV("li", {
                                            "data-lov-id": "src/pages/admissions/FeeStructure.tsx:172:16",
                                            "data-lov-name": "li",
                                            "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                                            "data-component-line": "172",
                                            "data-component-file": "FeeStructure.tsx",
                                            "data-component-name": "li",
                                            "data-component-content": "%7B%22className%22%3A%22flex%20items-start%20gap-2%20text-muted-foreground%22%7D",
                                            className: "flex items-start gap-2 text-muted-foreground",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV(AlertCircle, {
                                                    "data-lov-id": "src/pages/admissions/FeeStructure.tsx:173:18",
                                                    "data-lov-name": "AlertCircle",
                                                    "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                                                    "data-component-line": "173",
                                                    "data-component-file": "FeeStructure.tsx",
                                                    "data-component-name": "AlertCircle",
                                                    "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%20text-indian-green%20mt-1%20shrink-0%22%7D",
                                                    className: "h-4 w-4 text-indian-green mt-1 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("span", {
                                                    "data-lov-id": "src/pages/admissions/FeeStructure.tsx:174:18",
                                                    "data-lov-name": "span",
                                                    "data-component-path": "src/pages/admissions/FeeStructure.tsx",
                                                    "data-component-line": "174",
                                                    "data-component-file": "FeeStructure.tsx",
                                                    "data-component-name": "span",
                                                    "data-component-content": "%7B%7D",
                                                    children: n
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, n, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                                            lineNumber: 172,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
};
_c = FeeStructure;
export default FeeStructure;
var _c;
$RefreshReg$(_c, "FeeStructure");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/pages/admissions/FeeStructure.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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Q0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsMEJBQUE7b0NBQUVNLFdBQVU7OENBQ1hkLE1BQU00QixHQUFHLENBQUMsQ0FBQ1Esa0JBQ1YsUUFBQ0Q7NENBQUNqQyxlQUFBOzRDQUFBQyxpQkFBQTs0Q0FBQUMsdUJBQUE7NENBQUFDLHVCQUFBOzRDQUFBQyx1QkFBQTs0Q0FBQUMsdUJBQUE7NENBQUFDLDBCQUFBOzRDQUFVTSxXQUFVOzs4REFDcEIsUUFBQ25CO29EQUFVTyxlQUFBO29EQUFBQyxpQkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLDBCQUFBO29EQUFFTSxXQUFVOzs7Ozs7OERBQ3ZCLFFBQUNrQjtvREFBRzlCLGVBQUE7b0RBQUFDLGlCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsMEJBQUE7OERBQUc0Qjs7Ozs7OzsyQ0FGQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVd6QjtLQTVKTW5DO0FBOEpOLGVBQWVBLGFBQVkiLCJuYW1lcyI6WyJMYXlvdXQiLCJQYWdlSGVybyIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkluZGlhblJ1cGVlIiwiQ3JlZGl0Q2FyZCIsIkZpbGVUZXh0IiwiSW5mbyIsIkFsZXJ0Q2lyY2xlIiwiZmVlcyIsImdyYWRlIiwiYW1vdW50IiwiZ3VpZGVsaW5lcyIsIm5vdGVzIiwiRmVlU3RydWN0dXJlIiwiZGF0YS1sb3YtaWQiLCJkYXRhLWxvdi1uYW1lIiwiZGF0YS1jb21wb25lbnQtcGF0aCIsImRhdGEtY29tcG9uZW50LWxpbmUiLCJkYXRhLWNvbXBvbmVudC1maWxlIiwiZGF0YS1jb21wb25lbnQtbmFtZSIsImRhdGEtY29tcG9uZW50LWNvbnRlbnQiLCJ0aXRsZSIsImJyZWFkY3J1bWJzIiwibGFiZWwiLCJwYXRoIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsInAiLCJoMiIsInN0eWxlIiwiZm9udEZhbWlseSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiaDMiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwibWFwIiwiZiIsImkiLCJ0ZCIsInNwYW4iLCJ1bCIsImciLCJsaSIsIm4iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiRmVlU3RydWN0dXJlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgUGFnZUhlcm8gZnJvbSBcIkAvY29tcG9uZW50cy9QYWdlSGVyb1wiO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcbmltcG9ydCB7IEluZGlhblJ1cGVlLCBDcmVkaXRDYXJkLCBGaWxlVGV4dCwgSW5mbywgQWxlcnRDaXJjbGUgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5cbmNvbnN0IGZlZXMgPSBbXG4gIHsgZ3JhZGU6IFwiUHJlLVByaW1hcnlcIiwgYW1vdW50OiBcIjc1LDAwMCAtIDk1LDAwMFwiIH0sXG4gIHsgZ3JhZGU6IFwiQ2xhc3MgMS01XCIsIGFtb3VudDogXCIxLDE1LDAwMCAtIDEsMzAsMDAwXCIgfSxcbiAgeyBncmFkZTogXCJDbGFzcyA2LTEwXCIsIGFtb3VudDogXCIxLDMwLDAwMCAtIDEsNTAsMDAwXCIgfSxcbiAgeyBncmFkZTogXCJDbGFzcyAxMS0xMlwiLCBhbW91bnQ6IFwiMSw0MCwwMDBcIiB9LFxuXTtcblxuY29uc3QgZ3VpZGVsaW5lcyA9IFtcbiAgXCJGZWVzIHRvIGJlIHBhaWQgd2l0aGluIHRoZSBwcmVzY3JpYmVkIHRpbWVsaW5lcy5cIixcbiAgXCJQYXltZW50IG9wdGlvbnMgYXZhaWxhYmxlIHRocm91Z2ggYXBwcm92ZWQgY2hhbm5lbHMuXCIsXG4gIFwiUmVjZWlwdCBnZW5lcmF0aW9uIGFmdGVyIHN1Y2Nlc3NmdWwgcGF5bWVudC5cIixcbiAgXCJTY2hvb2wgcmVzZXJ2ZXMgdGhlIHJpZ2h0IHRvIHJldmlzZSBmZWVzIHBlcmlvZGljYWxseS5cIixcbl07XG5cbmNvbnN0IG5vdGVzID0gW1xuICBcIlplcm8gQWRtaXNzaW9uIEZlZSBmb3IgTmV3IEFkbWlzc2lvbnMhXCIsXG4gIFwiRmVlIHN0cnVjdHVyZSBpcyBzdWJqZWN0IHRvIHJldmlzaW9uIGJ5IG1hbmFnZW1lbnQuXCIsXG4gIFwiUGFyZW50cyBhcmUgYWR2aXNlZCB0byByZXRhaW4gcGF5bWVudCByZWNlaXB0cy5cIixcbiAgXCJDb250YWN0IHRoZSBzY2hvb2wgb2ZmaWNlIGZvciBjbGFyaWZpY2F0aW9uIHJlZ2FyZGluZyBmZWUtcmVsYXRlZCBtYXR0ZXJzLlwiLFxuXTtcblxuY29uc3QgRmVlU3RydWN0dXJlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8UGFnZUhlcm9cbiAgICAgICAgdGl0bGU9XCJGZWVzIFN0cnVjdHVyZVwiXG4gICAgICAgIGJyZWFkY3J1bWJzPXtbXG4gICAgICAgICAgeyBsYWJlbDogXCJBZG1pc3Npb25zXCIsIHBhdGg6IFwiL2FkbWlzc2lvbnNcIiB9LFxuICAgICAgICAgIHsgbGFiZWw6IFwiRmVlcyBTdHJ1Y3R1cmVcIiB9LFxuICAgICAgICBdfVxuICAgICAgLz5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTYgbGc6cHktMjBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IG1heC13LTR4bCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMjVlbV0gdGV4dC1pbmRpYW4tZ3JlZW4gbWItM1wiPlxuICAgICAgICAgICAgVHJhbnNwYXJlbnQgUHJpY2luZ1xuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8aDJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNHhsIGxnOnRleHQtNXhsIGZvbnQtYm9sZCB0ZXh0LWxvZ28tbmF2eSBtYi01XCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiUG9wcGlucywgc2Fucy1zZXJpZlwiIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRmVlIFN0cnVjdHVyZSBPdmVydmlld1xuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LW11dGVkLWZvcmVncm91bmQgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICBBIGNsZWFyLCBmYW1pbHktZnJpZW5kbHkgZmVlIHN0cnVjdHVyZSB0aGF0IHJlZmxlY3RzIG91ciBjb21taXRtZW50IHRvIHF1YWxpdHkgQ0JTRVxuICAgICAgICAgICAgZWR1Y2F0aW9uIGF0IFNKUlBTLUhCUi5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7LyogQWRtaXNzaW9uIEZlZSBIaWdobGlnaHQgKi99XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwYi0xMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgbWF4LXctM3hsXCI+XG4gICAgICAgICAgPENhcmRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItaW5kaWFuLWdyZWVuLzEwIHNoYWRvdy14bCBiZy1jYXJkXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCJoc2woMCAwJSAxMDAlKVwiIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtOCBsZzpwLTEwIGZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtNiB0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xNCBoLTE0IHJvdW5kZWQtMnhsIGJnLXByaW1hcnkvMTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICA8SW5kaWFuUnVwZWUgY2xhc3NOYW1lPVwiaC03IHctNyB0ZXh0LXByaW1hcnlcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMjVlbV1cIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJoc2woMCAwJSA3JSlcIiB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBOZXcgQWRtaXNzaW9uc1xuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCIgc3R5bGU9e3sgY29sb3I6IFwiaHNsKDAgMCUgMjAlKVwiIH19PlxuICAgICAgICAgICAgICAgICAgICBaZXJvIEFkbWlzc2lvbiBGZWVzXG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtNHhsIGxnOnRleHQtNXhsIGZvbnQtZXh0cmFib2xkXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJoc2wodmFyKC0tcHJpbWFyeSkpXCIgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFplcm9cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIHsvKiBBbm51YWwgRmVlIFRhYmxlICovfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicGItMTZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IG1heC13LTR4bFwiPlxuICAgICAgICAgIDxoM1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWQ6dGV4dC0zeGwgZm9udC1ib2xkIHRleHQtbG9nby1uYXZ5IHRleHQtY2VudGVyIG1iLThcIlxuICAgICAgICAgICAgc3R5bGU9e3sgZm9udEZhbWlseTogXCJQb3BwaW5zLCBzYW5zLXNlcmlmXCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBBbm51YWwgRmVlIFN0cnVjdHVyZVxuICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICB7LyogRGVza3RvcCB0YWJsZSAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9jayBiZy13aGl0ZSByb3VuZGVkLTJ4bCBzaGFkb3ctbGcgYm9yZGVyIGJvcmRlci1pbmRpYW4tZ3JlZW4vMTAgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwiYmctaW5kaWFuLWdyZWVuIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNiBweS00IHRleHQtc20gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCI+Q2xhc3M8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTYgcHktNCB0ZXh0LXNtIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIEFubnVhbCBGZWUgKOKCuSlcbiAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIHtmZWVzLm1hcCgoZiwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPHRyXG4gICAgICAgICAgICAgICAgICAgIGtleT17Zi5ncmFkZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpICUgMiA9PT0gMCA/IFwiYmctd2hpdGVcIiA6IFwiYmctW2hzbCgzOF83MCVfOTclKV1cIn1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCBmb250LXNlbWlib2xkIHRleHQtbG9nby1uYXZ5XCI+e2YuZ3JhZGV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB0ZXh0LXJpZ2h0IGZvbnQtYm9sZCB0ZXh0LWluZGlhbi1ncmVlbiB0ZXh0LWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAg4oK5e2YuYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogTW9iaWxlIGNhcmRzICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6aGlkZGVuIGdyaWQgZ2FwLTNcIj5cbiAgICAgICAgICAgIHtmZWVzLm1hcCgoZikgPT4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtmLmdyYWRlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1pbmRpYW4tZ3JlZW4vMTAgc2hhZG93LXNtIHAtNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWxvZ28tbmF2eVwiPntmLmdyYWRlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1pbmRpYW4tZ3JlZW5cIj7igrl7Zi5hbW91bnR9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgey8qIEd1aWRlbGluZXMgKi99XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwYi0xNiBiZy1baHNsKDM4XzcwJV85NiUpXSBweS0xNlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgbWF4LXctNXhsIGdyaWQgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtMnhsIHAtNyBzaGFkb3ctc20gYm9yZGVyIGJvcmRlci1pbmRpYW4tZ3JlZW4vMTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgbWItNFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTEgaC0xMSByb3VuZGVkLXhsIGJnLWluZGlhbi1ncmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxDcmVkaXRDYXJkIGNsYXNzTmFtZT1cImgtNSB3LTUgdGV4dC13aGl0ZVwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgdGV4dC1sb2dvLW5hdnlcIj5GZWUgUGF5bWVudCBHdWlkZWxpbmVzPC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNwYWNlLXktM1wiPlxuICAgICAgICAgICAgICB7Z3VpZGVsaW5lcy5tYXAoKGcpID0+IChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtnfSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0yIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlxuICAgICAgICAgICAgICAgICAgPEZpbGVUZXh0IGNsYXNzTmFtZT1cImgtNCB3LTQgdGV4dC1zYWZmcm9uLW9yYW5nZSBtdC0xIHNocmluay0wXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntnfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtMnhsIHAtNyBzaGFkb3ctc20gYm9yZGVyIGJvcmRlci1pbmRpYW4tZ3JlZW4vMTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgbWItNFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTEgaC0xMSByb3VuZGVkLXhsIGJnLXNhZmZyb24tb3JhbmdlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPEluZm8gY2xhc3NOYW1lPVwiaC01IHctNSB0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LWxvZ28tbmF2eVwiPkltcG9ydGFudCBOb3RlczwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cbiAgICAgICAgICAgICAge25vdGVzLm1hcCgobikgPT4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e259IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTIgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+XG4gICAgICAgICAgICAgICAgICA8QWxlcnRDaXJjbGUgY2xhc3NOYW1lPVwiaC00IHctNCB0ZXh0LWluZGlhbi1ncmVlbiBtdC0xIHNocmluay0wXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntufTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVlU3RydWN0dXJlO1xuIl0sImZpbGUiOiIvaG9tZS9zanJzaDkxNi9wdWJsaWNfaHRtbC9zcmMvcGFnZXMvYWRtaXNzaW9ucy9GZWVTdHJ1Y3R1cmUudHN4In0=