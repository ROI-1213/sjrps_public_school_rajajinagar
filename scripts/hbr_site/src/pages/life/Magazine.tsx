import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/life/Magazine.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/pages/life/Magazine.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import Layout from "/src/components/Layout.tsx";
import PageBanner from "/src/components/PageBanner.tsx";
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { Book, Download, FileText, Camera, Award, Users, Pen } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
import { Button } from "/src/components/ui/button.tsx";
import schoolMagazineBanner from "/src/assets/school-magazine-banner.jpg?import";
const Magazine = ()=>{
    const sections = [
        {
            icon: Pen,
            title: "Student Articles & Poetry",
            description: "Creative writings and thoughts from our talented students"
        },
        {
            icon: Camera,
            title: "Art & Photography Showcase",
            description: "Visual expressions and artistic creations"
        },
        {
            icon: Award,
            title: "Academic Highlights & Awards",
            description: "Celebrating our students' achievements and recognitions"
        },
        {
            icon: Users,
            title: "Messages from Leadership",
            description: "Inspirational words from our management and faculty"
        },
        {
            icon: FileText,
            title: "Annual Reports of Activities",
            description: "Comprehensive overview of school events and programs"
        }
    ];
    const editions = [
        {
            year: "2023-24",
            cover: "photo-1481627834876-b7833e8f5570",
            theme: "Innovation & Growth"
        },
        {
            year: "2022-23",
            cover: "photo-1507003211169-0a1dd7228f2d",
            theme: "Unity in Diversity"
        },
        {
            year: "2021-22",
            cover: "photo-1519389950473-47ba0277781c",
            theme: "Resilience & Hope"
        }
    ];
    return /*#__PURE__*/ _jsxDEV(Layout, {
        "data-lov-id": "src/pages/life/Magazine.tsx:44:4",
        "data-lov-name": "Layout",
        "data-component-path": "src/pages/life/Magazine.tsx",
        "data-component-line": "44",
        "data-component-file": "Magazine.tsx",
        "data-component-name": "Layout",
        "data-component-content": "%7B%7D",
        children: [
            /*#__PURE__*/ _jsxDEV(PageBanner, {
                "data-lov-id": "src/pages/life/Magazine.tsx:45:6",
                "data-lov-name": "PageBanner",
                "data-component-path": "src/pages/life/Magazine.tsx",
                "data-component-line": "45",
                "data-component-file": "Magazine.tsx",
                "data-component-name": "PageBanner",
                "data-component-content": "%7B%7D",
                title: "SJRPS-HBR Magazine – Expressions",
                subtitle: '"Expressions", our annual magazine, is a vibrant collection of student creativity and school achievements that showcases the diverse talents of our community',
                backgroundImage: schoolMagazineBanner
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                "data-lov-id": "src/pages/life/Magazine.tsx:50:6",
                "data-lov-name": "div",
                "data-component-path": "src/pages/life/Magazine.tsx",
                "data-component-line": "50",
                "data-component-file": "Magazine.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22min-h-screen%20bg-background%22%7D",
                className: "min-h-screen bg-background",
                children: /*#__PURE__*/ _jsxDEV("section", {
                    "data-lov-id": "src/pages/life/Magazine.tsx:53:8",
                    "data-lov-name": "section",
                    "data-component-path": "src/pages/life/Magazine.tsx",
                    "data-component-line": "53",
                    "data-component-file": "Magazine.tsx",
                    "data-component-name": "section",
                    "data-component-content": "%7B%22className%22%3A%22py-16%22%7D",
                    className: "py-16",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/life/Magazine.tsx:54:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/life/Magazine.tsx",
                        "data-component-line": "54",
                        "data-component-file": "Magazine.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                        className: "container mx-auto px-4",
                        children: /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/life/Magazine.tsx:55:12",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/life/Magazine.tsx",
                            "data-component-line": "55",
                            "data-component-file": "Magazine.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22max-w-6xl%20mx-auto%22%7D",
                            className: "max-w-6xl mx-auto",
                            children: [
                                /*#__PURE__*/ _jsxDEV(Card, {
                                    "data-lov-id": "src/pages/life/Magazine.tsx:57:14",
                                    "data-lov-name": "Card",
                                    "data-component-path": "src/pages/life/Magazine.tsx",
                                    "data-component-line": "57",
                                    "data-component-file": "Magazine.tsx",
                                    "data-component-name": "Card",
                                    "data-component-content": "%7B%22className%22%3A%22mb-8%20shadow-lg%22%7D",
                                    className: "mb-8 shadow-lg",
                                    children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                        "data-lov-id": "src/pages/life/Magazine.tsx:58:16",
                                        "data-lov-name": "CardContent",
                                        "data-component-path": "src/pages/life/Magazine.tsx",
                                        "data-component-line": "58",
                                        "data-component-file": "Magazine.tsx",
                                        "data-component-name": "CardContent",
                                        "data-component-content": "%7B%22className%22%3A%22p-8%22%7D",
                                        className: "p-8",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/life/Magazine.tsx:59:18",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/life/Magazine.tsx",
                                                "data-component-line": "59",
                                                "data-component-file": "Magazine.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20gap-3%20mb-4%22%7D",
                                                className: "flex items-center gap-3 mb-4",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(Book, {
                                                        "data-lov-id": "src/pages/life/Magazine.tsx:60:20",
                                                        "data-lov-name": "Book",
                                                        "data-component-path": "src/pages/life/Magazine.tsx",
                                                        "data-component-line": "60",
                                                        "data-component-file": "Magazine.tsx",
                                                        "data-component-name": "Book",
                                                        "data-component-content": "%7B%22className%22%3A%22h-8%20w-8%20text-school-gold%22%7D",
                                                        className: "h-8 w-8 text-school-gold"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                                                        lineNumber: 60,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("h2", {
                                                        "data-lov-id": "src/pages/life/Magazine.tsx:61:20",
                                                        "data-lov-name": "h2",
                                                        "data-component-path": "src/pages/life/Magazine.tsx",
                                                        "data-component-line": "61",
                                                        "data-component-file": "Magazine.tsx",
                                                        "data-component-name": "h2",
                                                        "data-component-content": "%7B%22text%22%3A%22About%20Expressions%22%2C%22className%22%3A%22text-2xl%20font-bold%20text-school-brown%22%7D",
                                                        className: "text-2xl font-bold text-school-brown",
                                                        children: "About Expressions"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                                                lineNumber: 59,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("p", {
                                                "data-lov-id": "src/pages/life/Magazine.tsx:63:18",
                                                "data-lov-name": "p",
                                                "data-component-path": "src/pages/life/Magazine.tsx",
                                                "data-component-line": "63",
                                                "data-component-file": "Magazine.tsx",
                                                "data-component-name": "p",
                                                "data-component-content": "%7B%22text%22%3A%22Our%20annual%20magazine%20serves%20as%20a%20platform%20for%20students%20to%20express%20their%20creativity%2C%20%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20share%20their%20thoughts%2C%20and%20celebrate%20the%20collective%20achievements%20of%20our%20school%20community.%20%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Each%20edition%20reflects%20the%20spirit%2C%20growth%2C%20and%20aspirations%20of%20SJRPS-HBR.%22%2C%22className%22%3A%22text-lg%20text-elegant-light%20leading-relaxed%20mb-6%22%7D",
                                                className: "text-lg text-elegant-light leading-relaxed mb-6",
                                                children: "Our annual magazine serves as a platform for students to express their creativity, share their thoughts, and celebrate the collective achievements of our school community. Each edition reflects the spirit, growth, and aspirations of SJRPS-HBR."
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                                                lineNumber: 63,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/life/Magazine.tsx:69:18",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/life/Magazine.tsx",
                                                "data-component-line": "69",
                                                "data-component-file": "Magazine.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20gap-4%22%7D",
                                                className: "flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(Button, {
                                                        "data-lov-id": "src/pages/life/Magazine.tsx:70:20",
                                                        "data-lov-name": "Button",
                                                        "data-component-path": "src/pages/life/Magazine.tsx",
                                                        "data-component-line": "70",
                                                        "data-component-file": "Magazine.tsx",
                                                        "data-component-name": "Button",
                                                        "data-component-content": "%7B%22text%22%3A%22Download%20Latest%20Edition%22%2C%22className%22%3A%22bg-school-gold%20hover%3Abg-school-gold%2F90%20text-white%22%7D",
                                                        className: "bg-school-gold hover:bg-school-gold/90 text-white",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV(Download, {
                                                                "data-lov-id": "src/pages/life/Magazine.tsx:71:22",
                                                                "data-lov-name": "Download",
                                                                "data-component-path": "src/pages/life/Magazine.tsx",
                                                                "data-component-line": "71",
                                                                "data-component-file": "Magazine.tsx",
                                                                "data-component-name": "Download",
                                                                "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%20mr-2%22%7D",
                                                                className: "h-4 w-4 mr-2"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                                                                lineNumber: 71,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Download Latest Edition"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                                                        lineNumber: 70,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("span", {
                                                        "data-lov-id": "src/pages/life/Magazine.tsx:74:20",
                                                        "data-lov-name": "span",
                                                        "data-component-path": "src/pages/life/Magazine.tsx",
                                                        "data-component-line": "74",
                                                        "data-component-file": "Magazine.tsx",
                                                        "data-component-name": "span",
                                                        "data-component-content": "%7B%22text%22%3A%22%F0%9F%8C%9F%20Download%20the%20latest%20edition%20%5BPDF%5D%22%2C%22className%22%3A%22text-elegant-light%22%7D",
                                                        className: "text-elegant-light",
                                                        children: "🌟 Download the latest edition [PDF]"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                                                lineNumber: 69,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                                        lineNumber: 58,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/life/Magazine.tsx:80:14",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/life/Magazine.tsx",
                                    "data-component-line": "80",
                                    "data-component-file": "Magazine.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22mb-12%22%7D",
                                    className: "mb-12",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("h2", {
                                            "data-lov-id": "src/pages/life/Magazine.tsx:81:16",
                                            "data-lov-name": "h2",
                                            "data-component-path": "src/pages/life/Magazine.tsx",
                                            "data-component-line": "81",
                                            "data-component-file": "Magazine.tsx",
                                            "data-component-name": "h2",
                                            "data-component-content": "%7B%22text%22%3A%22Magazine%20Sections%22%2C%22className%22%3A%22text-3xl%20font-bold%20text-school-brown%20text-center%20mb-8%22%7D",
                                            className: "text-3xl font-bold text-school-brown text-center mb-8",
                                            children: "Magazine Sections"
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/pages/life/Magazine.tsx:82:16",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/pages/life/Magazine.tsx",
                                            "data-component-line": "82",
                                            "data-component-file": "Magazine.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-2%20lg%3Agrid-cols-3%20gap-6%22%7D",
                                            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                                            children: sections.map((section, index)=>/*#__PURE__*/ _jsxDEV(Card, {
                                                    "data-lov-id": "src/pages/life/Magazine.tsx:84:20",
                                                    "data-lov-name": "Card",
                                                    "data-component-path": "src/pages/life/Magazine.tsx",
                                                    "data-component-line": "84",
                                                    "data-component-file": "Magazine.tsx",
                                                    "data-component-name": "Card",
                                                    "data-component-content": "%7B%22className%22%3A%22hover%3Ashadow-lg%20transition-all%20duration-300%20group%22%7D",
                                                    className: "hover:shadow-lg transition-all duration-300 group",
                                                    children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                                        "data-lov-id": "src/pages/life/Magazine.tsx:85:22",
                                                        "data-lov-name": "CardContent",
                                                        "data-component-path": "src/pages/life/Magazine.tsx",
                                                        "data-component-line": "85",
                                                        "data-component-file": "Magazine.tsx",
                                                        "data-component-name": "CardContent",
                                                        "data-component-content": "%7B%22className%22%3A%22p-6%20text-center%22%7D",
                                                        className: "p-6 text-center",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("div", {
                                                                "data-lov-id": "src/pages/life/Magazine.tsx:86:24",
                                                                "data-lov-name": "div",
                                                                "data-component-path": "src/pages/life/Magazine.tsx",
                                                                "data-component-line": "86",
                                                                "data-component-file": "Magazine.tsx",
                                                                "data-component-name": "div",
                                                                "data-component-content": "%7B%22className%22%3A%22bg-school-gold%20w-16%20h-16%20rounded-full%20flex%20items-center%20justify-center%20mx-auto%20mb-4%20group-hover%3Ascale-110%20transition-transform%20duration-300%22%7D",
                                                                className: "bg-school-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300",
                                                                children: /*#__PURE__*/ _jsxDEV(section.icon, {
                                                                    "data-lov-id": "src/pages/life/Magazine.tsx:87:26",
                                                                    "data-lov-name": "section.icon",
                                                                    "data-component-path": "src/pages/life/Magazine.tsx",
                                                                    "data-component-line": "87",
                                                                    "data-component-file": "Magazine.tsx",
                                                                    "data-component-name": "section.icon",
                                                                    "data-component-content": "%7B%22className%22%3A%22h-8%20w-8%20text-white%22%7D",
                                                                    className: "h-8 w-8 text-white"
                                                                }, void 0, false, {
                                                                    fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                                                                    lineNumber: 87,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                                                                lineNumber: 86,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("h3", {
                                                                "data-lov-id": "src/pages/life/Magazine.tsx:89:24",
                                                                "data-lov-name": "h3",
                                                                "data-component-path": "src/pages/life/Magazine.tsx",
                                                                "data-component-line": "89",
                                                                "data-component-file": "Magazine.tsx",
                                                                "data-component-name": "h3",
                                                                "data-component-content": "%7B%22className%22%3A%22text-lg%20font-bold%20text-school-brown%20mb-2%22%7D",
                                                                className: "text-lg font-bold text-school-brown mb-2",
                                                                children: section.title
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                                                                lineNumber: 89,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                "data-lov-id": "src/pages/life/Magazine.tsx:90:24",
                                                                "data-lov-name": "p",
                                                                "data-component-path": "src/pages/life/Magazine.tsx",
                                                                "data-component-line": "90",
                                                                "data-component-file": "Magazine.tsx",
                                                                "data-component-name": "p",
                                                                "data-component-content": "%7B%22className%22%3A%22text-elegant-light%22%7D",
                                                                className: "text-elegant-light",
                                                                children: section.description
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                                                                lineNumber: 90,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 23
                                                    }, this)
                                                }, section.title, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV(Card, {
                                    "data-lov-id": "src/pages/life/Magazine.tsx:98:14",
                                    "data-lov-name": "Card",
                                    "data-component-path": "src/pages/life/Magazine.tsx",
                                    "data-component-line": "98",
                                    "data-component-file": "Magazine.tsx",
                                    "data-component-name": "Card",
                                    "data-component-content": "%7B%22className%22%3A%22shadow-lg%22%7D",
                                    className: "shadow-lg",
                                    children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                        "data-lov-id": "src/pages/life/Magazine.tsx:99:16",
                                        "data-lov-name": "CardContent",
                                        "data-component-path": "src/pages/life/Magazine.tsx",
                                        "data-component-line": "99",
                                        "data-component-file": "Magazine.tsx",
                                        "data-component-name": "CardContent",
                                        "data-component-content": "%7B%22className%22%3A%22p-8%22%7D",
                                        className: "p-8",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("h2", {
                                                "data-lov-id": "src/pages/life/Magazine.tsx:100:18",
                                                "data-lov-name": "h2",
                                                "data-component-path": "src/pages/life/Magazine.tsx",
                                                "data-component-line": "100",
                                                "data-component-file": "Magazine.tsx",
                                                "data-component-name": "h2",
                                                "data-component-content": "%7B%22text%22%3A%22Previous%20Editions%22%2C%22className%22%3A%22text-2xl%20font-bold%20text-school-brown%20text-center%20mb-8%22%7D",
                                                className: "text-2xl font-bold text-school-brown text-center mb-8",
                                                children: "Previous Editions"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                                                lineNumber: 100,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/life/Magazine.tsx:102:18",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/life/Magazine.tsx",
                                                "data-component-line": "102",
                                                "data-component-file": "Magazine.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-3%20gap-6%22%7D",
                                                className: "grid md:grid-cols-3 gap-6",
                                                children: editions.map((edition, index)=>/*#__PURE__*/ _jsxDEV(Card, {
                                                        "data-lov-id": "src/pages/life/Magazine.tsx:104:22",
                                                        "data-lov-name": "Card",
                                                        "data-component-path": "src/pages/life/Magazine.tsx",
                                                        "data-component-line": "104",
                                                        "data-component-file": "Magazine.tsx",
                                                        "data-component-name": "Card",
                                                        "data-component-content": "%7B%22className%22%3A%22overflow-hidden%20hover%3Ashadow-xl%20transition-all%20duration-300%20group%22%7D",
                                                        className: "overflow-hidden hover:shadow-xl transition-all duration-300 group",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("div", {
                                                                "data-lov-id": "src/pages/life/Magazine.tsx:105:24",
                                                                "data-lov-name": "div",
                                                                "data-component-path": "src/pages/life/Magazine.tsx",
                                                                "data-component-line": "105",
                                                                "data-component-file": "Magazine.tsx",
                                                                "data-component-name": "div",
                                                                "data-component-content": "%7B%22className%22%3A%22relative%22%7D",
                                                                className: "relative",
                                                                children: [
                                                                    /*#__PURE__*/ _jsxDEV("img", {
                                                                        "data-lov-id": "src/pages/life/Magazine.tsx:106:26",
                                                                        "data-lov-name": "img",
                                                                        "data-component-path": "src/pages/life/Magazine.tsx",
                                                                        "data-component-line": "106",
                                                                        "data-component-file": "Magazine.tsx",
                                                                        "data-component-name": "img",
                                                                        "data-component-content": "%7B%22className%22%3A%22w-full%20h-48%20object-cover%20group-hover%3Ascale-105%20transition-transform%20duration-300%22%7D",
                                                                        src: `https://images.unsplash.com/${edition.cover}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`,
                                                                        alt: `Magazine ${edition.year}`,
                                                                        className: "w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                                                    }, void 0, false, {
                                                                        fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                                                                        lineNumber: 106,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                                        "data-lov-id": "src/pages/life/Magazine.tsx:111:26",
                                                                        "data-lov-name": "div",
                                                                        "data-component-path": "src/pages/life/Magazine.tsx",
                                                                        "data-component-line": "111",
                                                                        "data-component-file": "Magazine.tsx",
                                                                        "data-component-name": "div",
                                                                        "data-component-content": "%7B%22className%22%3A%22absolute%20inset-0%20bg-black%2F40%20group-hover%3Abg-black%2F30%20transition-colors%20duration-300%22%7D",
                                                                        className: "absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"
                                                                    }, void 0, false, {
                                                                        fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                                                                        lineNumber: 111,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                                        "data-lov-id": "src/pages/life/Magazine.tsx:112:26",
                                                                        "data-lov-name": "div",
                                                                        "data-component-path": "src/pages/life/Magazine.tsx",
                                                                        "data-component-line": "112",
                                                                        "data-component-file": "Magazine.tsx",
                                                                        "data-component-name": "div",
                                                                        "data-component-content": "%7B%22className%22%3A%22absolute%20bottom-4%20left-4%20text-white%22%7D",
                                                                        className: "absolute bottom-4 left-4 text-white",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsxDEV("h3", {
                                                                                "data-lov-id": "src/pages/life/Magazine.tsx:113:28",
                                                                                "data-lov-name": "h3",
                                                                                "data-component-path": "src/pages/life/Magazine.tsx",
                                                                                "data-component-line": "113",
                                                                                "data-component-file": "Magazine.tsx",
                                                                                "data-component-name": "h3",
                                                                                "data-component-content": "%7B%22className%22%3A%22text-lg%20font-bold%22%7D",
                                                                                className: "text-lg font-bold",
                                                                                children: edition.year
                                                                            }, void 0, false, {
                                                                                fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                                                                                lineNumber: 113,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                                "data-lov-id": "src/pages/life/Magazine.tsx:114:28",
                                                                                "data-lov-name": "p",
                                                                                "data-component-path": "src/pages/life/Magazine.tsx",
                                                                                "data-component-line": "114",
                                                                                "data-component-file": "Magazine.tsx",
                                                                                "data-component-name": "p",
                                                                                "data-component-content": "%7B%22className%22%3A%22text-sm%20opacity-90%22%7D",
                                                                                className: "text-sm opacity-90",
                                                                                children: edition.theme
                                                                            }, void 0, false, {
                                                                                fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                                                                                lineNumber: 114,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                                                                        lineNumber: 112,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                                                                lineNumber: 105,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV(CardContent, {
                                                                "data-lov-id": "src/pages/life/Magazine.tsx:117:24",
                                                                "data-lov-name": "CardContent",
                                                                "data-component-path": "src/pages/life/Magazine.tsx",
                                                                "data-component-line": "117",
                                                                "data-component-file": "Magazine.tsx",
                                                                "data-component-name": "CardContent",
                                                                "data-component-content": "%7B%22className%22%3A%22p-4%22%7D",
                                                                className: "p-4",
                                                                children: /*#__PURE__*/ _jsxDEV(Button, {
                                                                    "data-lov-id": "src/pages/life/Magazine.tsx:118:26",
                                                                    "data-lov-name": "Button",
                                                                    "data-component-path": "src/pages/life/Magazine.tsx",
                                                                    "data-component-line": "118",
                                                                    "data-component-file": "Magazine.tsx",
                                                                    "data-component-name": "Button",
                                                                    "data-component-content": "%7B%22text%22%3A%22Download%20PDF%22%2C%22className%22%3A%22w-full%20group-hover%3Abg-school-gold%20group-hover%3Atext-white%20group-hover%3Aborder-school-gold%20transition-colors%20duration-300%22%7D",
                                                                    variant: "outline",
                                                                    className: "w-full group-hover:bg-school-gold group-hover:text-white group-hover:border-school-gold transition-colors duration-300",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxDEV(Download, {
                                                                            "data-lov-id": "src/pages/life/Magazine.tsx:119:28",
                                                                            "data-lov-name": "Download",
                                                                            "data-component-path": "src/pages/life/Magazine.tsx",
                                                                            "data-component-line": "119",
                                                                            "data-component-file": "Magazine.tsx",
                                                                            "data-component-name": "Download",
                                                                            "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%20mr-2%22%7D",
                                                                            className: "h-4 w-4 mr-2"
                                                                        }, void 0, false, {
                                                                            fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                                                                            lineNumber: 119,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        "Download PDF"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                                                                    lineNumber: 118,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                                                                lineNumber: 117,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, edition.year, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                                                lineNumber: 102,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/life/Magazine.tsx:127:18",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/life/Magazine.tsx",
                                                "data-component-line": "127",
                                                "data-component-file": "Magazine.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22text-center%20mt-8%22%7D",
                                                className: "text-center mt-8",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("p", {
                                                        "data-lov-id": "src/pages/life/Magazine.tsx:128:20",
                                                        "data-lov-name": "p",
                                                        "data-component-path": "src/pages/life/Magazine.tsx",
                                                        "data-component-line": "128",
                                                        "data-component-file": "Magazine.tsx",
                                                        "data-component-name": "p",
                                                        "data-component-content": "%7B%22text%22%3A%22Want%20to%20contribute%20to%20our%20next%20edition%3F%22%2C%22className%22%3A%22text-elegant-light%20mb-4%22%7D",
                                                        className: "text-elegant-light mb-4",
                                                        children: "Want to contribute to our next edition?"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV(Button, {
                                                        "data-lov-id": "src/pages/life/Magazine.tsx:131:20",
                                                        "data-lov-name": "Button",
                                                        "data-component-path": "src/pages/life/Magazine.tsx",
                                                        "data-component-line": "131",
                                                        "data-component-file": "Magazine.tsx",
                                                        "data-component-name": "Button",
                                                        "data-component-content": "%7B%22text%22%3A%22Submit%20Your%20Work%22%2C%22className%22%3A%22border-school-gold%20text-school-brown%20hover%3Abg-school-gold%20hover%3Atext-white%22%7D",
                                                        variant: "outline",
                                                        className: "border-school-gold text-school-brown hover:bg-school-gold hover:text-white",
                                                        children: "Submit Your Work"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                                                lineNumber: 127,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                                        lineNumber: 99,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/sjrsh916/public_html/src/pages/life/Magazine.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
};
_c = Magazine;
export default Magazine;
var _c;
$RefreshReg$(_c, "Magazine");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/pages/life/Magazine.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/pages/life/Magazine.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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LCJGaWxlVGV4dCIsIkNhbWVyYSIsIkF3YXJkIiwiVXNlcnMiLCJQZW4iLCJCdXR0b24iLCJzY2hvb2xNYWdhemluZUJhbm5lciIsIk1hZ2F6aW5lIiwic2VjdGlvbnMiLCJpY29uIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImVkaXRpb25zIiwieWVhciIsImNvdmVyIiwidGhlbWUiLCJkYXRhLWxvdi1pZCIsImRhdGEtbG92LW5hbWUiLCJkYXRhLWNvbXBvbmVudC1wYXRoIiwiZGF0YS1jb21wb25lbnQtbGluZSIsImRhdGEtY29tcG9uZW50LWZpbGUiLCJkYXRhLWNvbXBvbmVudC1uYW1lIiwiZGF0YS1jb21wb25lbnQtY29udGVudCIsInN1YnRpdGxlIiwiYmFja2dyb3VuZEltYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsImgyIiwicCIsInNwYW4iLCJtYXAiLCJpbmRleCIsImgzIiwiZWRpdGlvbiIsImltZyIsInNyYyIsImFsdCIsInZhcmlhbnQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiTWFnYXppbmUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBQYWdlQmFubmVyIGZyb20gXCJAL2NvbXBvbmVudHMvUGFnZUJhbm5lclwiO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcbmltcG9ydCB7IEJvb2ssIERvd25sb2FkLCBGaWxlVGV4dCwgQ2FtZXJhLCBBd2FyZCwgVXNlcnMsIFBlbiB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgc2Nob29sTWFnYXppbmVCYW5uZXIgZnJvbSBcIkAvYXNzZXRzL3NjaG9vbC1tYWdhemluZS1iYW5uZXIuanBnXCI7XG5cbmNvbnN0IE1hZ2F6aW5lID0gKCkgPT4ge1xuICBjb25zdCBzZWN0aW9ucyA9IFtcbiAgICB7XG4gICAgICBpY29uOiBQZW4sXG4gICAgICB0aXRsZTogXCJTdHVkZW50IEFydGljbGVzICYgUG9ldHJ5XCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJDcmVhdGl2ZSB3cml0aW5ncyBhbmQgdGhvdWdodHMgZnJvbSBvdXIgdGFsZW50ZWQgc3R1ZGVudHNcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogQ2FtZXJhLFxuICAgICAgdGl0bGU6IFwiQXJ0ICYgUGhvdG9ncmFwaHkgU2hvd2Nhc2VcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlZpc3VhbCBleHByZXNzaW9ucyBhbmQgYXJ0aXN0aWMgY3JlYXRpb25zXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IEF3YXJkLFxuICAgICAgdGl0bGU6IFwiQWNhZGVtaWMgSGlnaGxpZ2h0cyAmIEF3YXJkc1wiLFxuICAgICAgZGVzY3JpcHRpb246IFwiQ2VsZWJyYXRpbmcgb3VyIHN0dWRlbnRzJyBhY2hpZXZlbWVudHMgYW5kIHJlY29nbml0aW9uc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiBVc2VycyxcbiAgICAgIHRpdGxlOiBcIk1lc3NhZ2VzIGZyb20gTGVhZGVyc2hpcFwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiSW5zcGlyYXRpb25hbCB3b3JkcyBmcm9tIG91ciBtYW5hZ2VtZW50IGFuZCBmYWN1bHR5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IEZpbGVUZXh0LFxuICAgICAgdGl0bGU6IFwiQW5udWFsIFJlcG9ydHMgb2YgQWN0aXZpdGllc1wiLFxuICAgICAgZGVzY3JpcHRpb246IFwiQ29tcHJlaGVuc2l2ZSBvdmVydmlldyBvZiBzY2hvb2wgZXZlbnRzIGFuZCBwcm9ncmFtc1wiXG4gICAgfVxuICBdO1xuXG4gIGNvbnN0IGVkaXRpb25zID0gW1xuICAgIHsgeWVhcjogXCIyMDIzLTI0XCIsIGNvdmVyOiBcInBob3RvLTE0ODE2Mjc4MzQ4NzYtYjc4MzNlOGY1NTcwXCIsIHRoZW1lOiBcIklubm92YXRpb24gJiBHcm93dGhcIiB9LFxuICAgIHsgeWVhcjogXCIyMDIyLTIzXCIsIGNvdmVyOiBcInBob3RvLTE1MDcwMDMyMTExNjktMGExZGQ3MjI4ZjJkXCIsIHRoZW1lOiBcIlVuaXR5IGluIERpdmVyc2l0eVwiIH0sXG4gICAgeyB5ZWFyOiBcIjIwMjEtMjJcIiwgY292ZXI6IFwicGhvdG8tMTUxOTM4OTk1MDQ3My00N2JhMDI3Nzc4MWNcIiwgdGhlbWU6IFwiUmVzaWxpZW5jZSAmIEhvcGVcIiB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxQYWdlQmFubmVyXG4gICAgICAgIHRpdGxlPSdTSlJQUy1IQlIgTWFnYXppbmUg4oCTIEV4cHJlc3Npb25zJ1xuICAgICAgICBzdWJ0aXRsZT0nXCJFeHByZXNzaW9uc1wiLCBvdXIgYW5udWFsIG1hZ2F6aW5lLCBpcyBhIHZpYnJhbnQgY29sbGVjdGlvbiBvZiBzdHVkZW50IGNyZWF0aXZpdHkgYW5kIHNjaG9vbCBhY2hpZXZlbWVudHMgdGhhdCBzaG93Y2FzZXMgdGhlIGRpdmVyc2UgdGFsZW50cyBvZiBvdXIgY29tbXVuaXR5J1xuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U9e3NjaG9vbE1hZ2F6aW5lQmFubmVyfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWJhY2tncm91bmRcIj5cblxuICAgICAgICB7LyogTWFpbiBDb250ZW50ICovfVxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICB7LyogSW50cm9kdWN0aW9uICovfVxuICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJtYi04IHNoYWRvdy1sZ1wiPlxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLThcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICA8Qm9vayBjbGFzc05hbWU9XCJoLTggdy04IHRleHQtc2Nob29sLWdvbGRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtc2Nob29sLWJyb3duXCI+QWJvdXQgRXhwcmVzc2lvbnM8L2gyPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZWxlZ2FudC1saWdodCBsZWFkaW5nLXJlbGF4ZWQgbWItNlwiPlxuICAgICAgICAgICAgICAgICAgICBPdXIgYW5udWFsIG1hZ2F6aW5lIHNlcnZlcyBhcyBhIHBsYXRmb3JtIGZvciBzdHVkZW50cyB0byBleHByZXNzIHRoZWlyIGNyZWF0aXZpdHksIFxuICAgICAgICAgICAgICAgICAgICBzaGFyZSB0aGVpciB0aG91Z2h0cywgYW5kIGNlbGVicmF0ZSB0aGUgY29sbGVjdGl2ZSBhY2hpZXZlbWVudHMgb2Ygb3VyIHNjaG9vbCBjb21tdW5pdHkuIFxuICAgICAgICAgICAgICAgICAgICBFYWNoIGVkaXRpb24gcmVmbGVjdHMgdGhlIHNwaXJpdCwgZ3Jvd3RoLCBhbmQgYXNwaXJhdGlvbnMgb2YgU0pSUFMtSEJSLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYmctc2Nob29sLWdvbGQgaG92ZXI6Ymctc2Nob29sLWdvbGQvOTAgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxEb3dubG9hZCBjbGFzc05hbWU9XCJoLTQgdy00IG1yLTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIERvd25sb2FkIExhdGVzdCBFZGl0aW9uXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWVsZWdhbnQtbGlnaHRcIj7wn4yfIERvd25sb2FkIHRoZSBsYXRlc3QgZWRpdGlvbiBbUERGXTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cblxuICAgICAgICAgICAgICB7LyogTWFnYXppbmUgU2VjdGlvbnMgKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMTJcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtc2Nob29sLWJyb3duIHRleHQtY2VudGVyIG1iLThcIj5NYWdhemluZSBTZWN0aW9uczwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC02XCI+XG4gICAgICAgICAgICAgICAgICB7c2VjdGlvbnMubWFwKChzZWN0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBrZXk9e3NlY3Rpb24udGl0bGV9IGNsYXNzTmFtZT1cImhvdmVyOnNoYWRvdy1sZyB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC02IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNjaG9vbC1nb2xkIHctMTYgaC0xNiByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXgtYXV0byBtYi00IGdyb3VwLWhvdmVyOnNjYWxlLTExMCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24uaWNvbiBjbGFzc05hbWU9XCJoLTggdy04IHRleHQtd2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gbWItMlwiPntzZWN0aW9uLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWVsZWdhbnQtbGlnaHRcIj57c2VjdGlvbi5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIHsvKiBQcmV2aW91cyBFZGl0aW9ucyAqL31cbiAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwic2hhZG93LWxnXCI+XG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtOFwiPlxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LXNjaG9vbC1icm93biB0ZXh0LWNlbnRlciBtYi04XCI+UHJldmlvdXMgRWRpdGlvbnM8L2gyPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTZcIj5cbiAgICAgICAgICAgICAgICAgICAge2VkaXRpb25zLm1hcCgoZWRpdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBrZXk9e2VkaXRpb24ueWVhcn0gY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuIGhvdmVyOnNoYWRvdy14bCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vJHtlZGl0aW9uLmNvdmVyfT9peGxpYj1yYi00LjAuMyZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTQwMCZxPTgwYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2BNYWdhemluZSAke2VkaXRpb24ueWVhcn1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTQ4IG9iamVjdC1jb3ZlciBncm91cC1ob3ZlcjpzY2FsZS0xMDUgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWJsYWNrLzQwIGdyb3VwLWhvdmVyOmJnLWJsYWNrLzMwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTQgbGVmdC00IHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGRcIj57ZWRpdGlvbi55ZWFyfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBvcGFjaXR5LTkwXCI+e2VkaXRpb24udGhlbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lXCIgY2xhc3NOYW1lPVwidy1mdWxsIGdyb3VwLWhvdmVyOmJnLXNjaG9vbC1nb2xkIGdyb3VwLWhvdmVyOnRleHQtd2hpdGUgZ3JvdXAtaG92ZXI6Ym9yZGVyLXNjaG9vbC1nb2xkIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEb3dubG9hZCBjbGFzc05hbWU9XCJoLTQgdy00IG1yLTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvd25sb2FkIFBERlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LThcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1lbGVnYW50LWxpZ2h0IG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICBXYW50IHRvIGNvbnRyaWJ1dGUgdG8gb3VyIG5leHQgZWRpdGlvbj9cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lXCIgY2xhc3NOYW1lPVwiYm9yZGVyLXNjaG9vbC1nb2xkIHRleHQtc2Nob29sLWJyb3duIGhvdmVyOmJnLXNjaG9vbC1nb2xkIGhvdmVyOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICBTdWJtaXQgWW91ciBXb3JrXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFnYXppbmU7Il0sImZpbGUiOiIvaG9tZS9zanJzaDkxNi9wdWJsaWNfaHRtbC9zcmMvcGFnZXMvbGlmZS9NYWdhemluZS50c3gifQ==