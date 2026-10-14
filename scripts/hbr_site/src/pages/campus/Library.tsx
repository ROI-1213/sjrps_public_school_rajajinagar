import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/campus/Library.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/pages/campus/Library.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import Layout from "/src/components/Layout.tsx";
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { BookOpen, Wifi, Users, Clock, Search, Star, Globe, Calendar } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
import PageBanner from "/src/components/PageBanner.tsx";
import libraryStudentsReading from "/src/assets/library-students-reading.jpg?import";
const Library = ()=>{
    const features = [
        {
            title: "Extensive Collection",
            icon: BookOpen,
            description: "5,000+ books in English, Kannada, and Hindi covering all subjects and age groups",
            details: "Fiction, Non-fiction, Reference books, and Textbooks"
        },
        {
            title: "Digital Resources",
            icon: Wifi,
            description: "Access to online databases, e-books, and digital journals for research",
            details: "High-speed internet and computer terminals available"
        },
        {
            title: "Reading Spaces",
            icon: Users,
            description: "Dedicated areas for silent reading, group study, and research work",
            details: "Comfortable seating and proper lighting throughout"
        },
        {
            title: "Extended Hours",
            icon: Clock,
            description: "Open from 8:00 AM to 6:00 PM on all school days",
            details: "After-school access for students and staff"
        },
        {
            title: "Search System",
            icon: Search,
            description: "Digital catalog system for easy book discovery and reservation",
            details: "Advanced search by author, subject, or keyword"
        },
        {
            title: "Special Programs",
            icon: Star,
            description: "Author talks, story sessions, and reading challenges throughout the year",
            details: "Monthly book clubs and literary events"
        }
    ];
    const collections = [
        {
            type: "Fiction",
            count: "2,000+",
            icon: BookOpen,
            color: "bg-blue-50"
        },
        {
            type: "Reference",
            count: "1,500+",
            icon: Search,
            color: "bg-green-50"
        },
        {
            type: "Digital",
            count: "500+",
            icon: Wifi,
            color: "bg-purple-50"
        },
        {
            type: "Magazines",
            count: "50+",
            icon: Globe,
            color: "bg-orange-50"
        }
    ];
    const currentEvents = [
        {
            title: "Book of the Month",
            subtitle: "The Secret Garden by Frances Hodgson Burnett",
            description: "A timeless tale of friendship, healing, and the magic of nature. Perfect for students of all ages to discover the power of hope and transformation.",
            date: "January 2025"
        }
    ];
    return /*#__PURE__*/ _jsxDEV(Layout, {
        "data-lov-id": "src/pages/campus/Library.tsx:66:4",
        "data-lov-name": "Layout",
        "data-component-path": "src/pages/campus/Library.tsx",
        "data-component-line": "66",
        "data-component-file": "Library.tsx",
        "data-component-name": "Layout",
        "data-component-content": "%7B%7D",
        children: /*#__PURE__*/ _jsxDEV("div", {
            "data-lov-id": "src/pages/campus/Library.tsx:67:6",
            "data-lov-name": "div",
            "data-component-path": "src/pages/campus/Library.tsx",
            "data-component-line": "67",
            "data-component-file": "Library.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22min-h-screen%20bg-background%22%7D",
            className: "min-h-screen bg-background",
            children: [
                /*#__PURE__*/ _jsxDEV(PageBanner, {
                    "data-lov-id": "src/pages/campus/Library.tsx:68:8",
                    "data-lov-name": "PageBanner",
                    "data-component-path": "src/pages/campus/Library.tsx",
                    "data-component-line": "68",
                    "data-component-file": "Library.tsx",
                    "data-component-name": "PageBanner",
                    "data-component-content": "%7B%7D",
                    title: "Library",
                    subtitle: "The intellectual heart of our campus - inspiring students to read, research, and grow",
                    backgroundImage: libraryStudentsReading
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("section", {
                    "data-lov-id": "src/pages/campus/Library.tsx:75:8",
                    "data-lov-name": "section",
                    "data-component-path": "src/pages/campus/Library.tsx",
                    "data-component-line": "75",
                    "data-component-file": "Library.tsx",
                    "data-component-name": "section",
                    "data-component-content": "%7B%22className%22%3A%22py-16%20bg-gradient-to-r%20from-amber-50%20to-orange-50%22%7D",
                    className: "py-16 bg-gradient-to-r from-amber-50 to-orange-50",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/campus/Library.tsx:76:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/campus/Library.tsx",
                        "data-component-line": "76",
                        "data-component-file": "Library.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                        className: "container mx-auto px-4",
                        children: /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/campus/Library.tsx:77:12",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/campus/Library.tsx",
                            "data-component-line": "77",
                            "data-component-file": "Library.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-4%20gap-8%22%7D",
                            className: "grid md:grid-cols-4 gap-8",
                            children: collections.map((collection, index)=>/*#__PURE__*/ _jsxDEV(Card, {
                                    "data-lov-id": "src/pages/campus/Library.tsx:79:16",
                                    "data-lov-name": "Card",
                                    "data-component-path": "src/pages/campus/Library.tsx",
                                    "data-component-line": "79",
                                    "data-component-file": "Library.tsx",
                                    "data-component-name": "Card",
                                    "data-component-content": "%7B%7D",
                                    className: `${collection.color} text-center hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in`,
                                    children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                        "data-lov-id": "src/pages/campus/Library.tsx:80:18",
                                        "data-lov-name": "CardContent",
                                        "data-component-path": "src/pages/campus/Library.tsx",
                                        "data-component-line": "80",
                                        "data-component-file": "Library.tsx",
                                        "data-component-name": "CardContent",
                                        "data-component-content": "%7B%22className%22%3A%22p-6%22%7D",
                                        className: "p-6",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/campus/Library.tsx:81:20",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/campus/Library.tsx",
                                                "data-component-line": "81",
                                                "data-component-file": "Library.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22bg-school-gold%20w-16%20h-16%20rounded-full%20flex%20items-center%20justify-center%20mx-auto%20mb-4%22%7D",
                                                className: "bg-school-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
                                                children: /*#__PURE__*/ _jsxDEV(collection.icon, {
                                                    "data-lov-id": "src/pages/campus/Library.tsx:82:22",
                                                    "data-lov-name": "collection.icon",
                                                    "data-component-path": "src/pages/campus/Library.tsx",
                                                    "data-component-line": "82",
                                                    "data-component-file": "Library.tsx",
                                                    "data-component-name": "collection.icon",
                                                    "data-component-content": "%7B%22className%22%3A%22h-8%20w-8%20text-white%22%7D",
                                                    className: "h-8 w-8 text-white"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                lineNumber: 81,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/campus/Library.tsx:84:20",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/campus/Library.tsx",
                                                "data-component-line": "84",
                                                "data-component-file": "Library.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22text-2xl%20font-bold%20text-school-brown%20mb-2%22%7D",
                                                className: "text-2xl font-bold text-school-brown mb-2",
                                                children: collection.count
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                lineNumber: 84,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("p", {
                                                "data-lov-id": "src/pages/campus/Library.tsx:85:20",
                                                "data-lov-name": "p",
                                                "data-component-path": "src/pages/campus/Library.tsx",
                                                "data-component-line": "85",
                                                "data-component-file": "Library.tsx",
                                                "data-component-name": "p",
                                                "data-component-content": "%7B%22className%22%3A%22text-elegant-light%20font-medium%22%7D",
                                                className: "text-elegant-light font-medium",
                                                children: collection.type
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                lineNumber: 85,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                        lineNumber: 80,
                                        columnNumber: 19
                                    }, this)
                                }, collection.type, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                    lineNumber: 79,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                            lineNumber: 77,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("section", {
                    "data-lov-id": "src/pages/campus/Library.tsx:94:8",
                    "data-lov-name": "section",
                    "data-component-path": "src/pages/campus/Library.tsx",
                    "data-component-line": "94",
                    "data-component-file": "Library.tsx",
                    "data-component-name": "section",
                    "data-component-content": "%7B%22className%22%3A%22py-16%22%7D",
                    className: "py-16",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/campus/Library.tsx:95:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/campus/Library.tsx",
                        "data-component-line": "95",
                        "data-component-file": "Library.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                        className: "container mx-auto px-4",
                        children: [
                            /*#__PURE__*/ _jsxDEV("h2", {
                                "data-lov-id": "src/pages/campus/Library.tsx:96:12",
                                "data-lov-name": "h2",
                                "data-component-path": "src/pages/campus/Library.tsx",
                                "data-component-line": "96",
                                "data-component-file": "Library.tsx",
                                "data-component-name": "h2",
                                "data-component-content": "%7B%22text%22%3A%22Library%20Features%22%2C%22className%22%3A%22text-3xl%20font-bold%20text-school-brown%20text-center%20mb-12%22%7D",
                                className: "text-3xl font-bold text-school-brown text-center mb-12",
                                children: "Library Features"
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/pages/campus/Library.tsx:97:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/pages/campus/Library.tsx",
                                "data-component-line": "97",
                                "data-component-file": "Library.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22grid%20lg%3Agrid-cols-3%20gap-8%22%7D",
                                className: "grid lg:grid-cols-3 gap-8",
                                children: features.map((feature, index)=>/*#__PURE__*/ _jsxDEV(Card, {
                                        "data-lov-id": "src/pages/campus/Library.tsx:99:16",
                                        "data-lov-name": "Card",
                                        "data-component-path": "src/pages/campus/Library.tsx",
                                        "data-component-line": "99",
                                        "data-component-file": "Library.tsx",
                                        "data-component-name": "Card",
                                        "data-component-content": "%7B%22className%22%3A%22hover%3Ashadow-xl%20transition-all%20duration-300%20hover-scale%20animate-fade-in%22%7D",
                                        className: "hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in",
                                        children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                            "data-lov-id": "src/pages/campus/Library.tsx:100:18",
                                            "data-lov-name": "CardContent",
                                            "data-component-path": "src/pages/campus/Library.tsx",
                                            "data-component-line": "100",
                                            "data-component-file": "Library.tsx",
                                            "data-component-name": "CardContent",
                                            "data-component-content": "%7B%22className%22%3A%22p-6%20text-center%22%7D",
                                            className: "p-6 text-center",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/campus/Library.tsx:101:20",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/campus/Library.tsx",
                                                    "data-component-line": "101",
                                                    "data-component-file": "Library.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22bg-school-gold%20w-16%20h-16%20rounded-full%20flex%20items-center%20justify-center%20mx-auto%20mb-6%22%7D",
                                                    className: "bg-school-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6",
                                                    children: /*#__PURE__*/ _jsxDEV(feature.icon, {
                                                        "data-lov-id": "src/pages/campus/Library.tsx:102:22",
                                                        "data-lov-name": "feature.icon",
                                                        "data-component-path": "src/pages/campus/Library.tsx",
                                                        "data-component-line": "102",
                                                        "data-component-file": "Library.tsx",
                                                        "data-component-name": "feature.icon",
                                                        "data-component-content": "%7B%22className%22%3A%22h-8%20w-8%20text-white%22%7D",
                                                        className: "h-8 w-8 text-white"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                        lineNumber: 102,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("h3", {
                                                    "data-lov-id": "src/pages/campus/Library.tsx:104:20",
                                                    "data-lov-name": "h3",
                                                    "data-component-path": "src/pages/campus/Library.tsx",
                                                    "data-component-line": "104",
                                                    "data-component-file": "Library.tsx",
                                                    "data-component-name": "h3",
                                                    "data-component-content": "%7B%22className%22%3A%22text-xl%20font-bold%20text-school-brown%20mb-4%22%7D",
                                                    className: "text-xl font-bold text-school-brown mb-4",
                                                    children: feature.title
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/campus/Library.tsx:105:20",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/campus/Library.tsx",
                                                    "data-component-line": "105",
                                                    "data-component-file": "Library.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22className%22%3A%22text-elegant-light%20mb-4%20leading-relaxed%22%7D",
                                                    className: "text-elegant-light mb-4 leading-relaxed",
                                                    children: feature.description
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/campus/Library.tsx:106:20",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/campus/Library.tsx",
                                                    "data-component-line": "106",
                                                    "data-component-file": "Library.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22className%22%3A%22text-sm%20text-school-light-brown%20italic%22%7D",
                                                    className: "text-sm text-school-light-brown italic",
                                                    children: feature.details
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                            lineNumber: 100,
                                            columnNumber: 19
                                        }, this)
                                    }, feature.title, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                        lineNumber: 99,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("section", {
                    "data-lov-id": "src/pages/campus/Library.tsx:115:8",
                    "data-lov-name": "section",
                    "data-component-path": "src/pages/campus/Library.tsx",
                    "data-component-line": "115",
                    "data-component-file": "Library.tsx",
                    "data-component-name": "section",
                    "data-component-content": "%7B%22className%22%3A%22py-16%20bg-gradient-to-r%20from-blue-50%20to-indigo-50%22%7D",
                    className: "py-16 bg-gradient-to-r from-blue-50 to-indigo-50",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/campus/Library.tsx:116:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/campus/Library.tsx",
                        "data-component-line": "116",
                        "data-component-file": "Library.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                        className: "container mx-auto px-4",
                        children: currentEvents.map((event, index)=>/*#__PURE__*/ _jsxDEV(Card, {
                                "data-lov-id": "src/pages/campus/Library.tsx:118:14",
                                "data-lov-name": "Card",
                                "data-component-path": "src/pages/campus/Library.tsx",
                                "data-component-line": "118",
                                "data-component-file": "Library.tsx",
                                "data-component-name": "Card",
                                "data-component-content": "%7B%22className%22%3A%22max-w-4xl%20mx-auto%20shadow-lg%20hover%3Ashadow-xl%20transition-all%20duration-300%22%7D",
                                className: "max-w-4xl mx-auto shadow-lg hover:shadow-xl transition-all duration-300",
                                children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                    "data-lov-id": "src/pages/campus/Library.tsx:119:16",
                                    "data-lov-name": "CardContent",
                                    "data-component-path": "src/pages/campus/Library.tsx",
                                    "data-component-line": "119",
                                    "data-component-file": "Library.tsx",
                                    "data-component-name": "CardContent",
                                    "data-component-content": "%7B%22className%22%3A%22p-8%20lg%3Ap-12%22%7D",
                                    className: "p-8 lg:p-12",
                                    children: /*#__PURE__*/ _jsxDEV("div", {
                                        "data-lov-id": "src/pages/campus/Library.tsx:120:18",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/pages/campus/Library.tsx",
                                        "data-component-line": "120",
                                        "data-component-file": "Library.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22className%22%3A%22grid%20lg%3Agrid-cols-3%20gap-8%20items-center%22%7D",
                                        className: "grid lg:grid-cols-3 gap-8 items-center",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/campus/Library.tsx:121:20",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/campus/Library.tsx",
                                                "data-component-line": "121",
                                                "data-component-file": "Library.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22lg%3Acol-span-1%20text-center%22%7D",
                                                className: "lg:col-span-1 text-center",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/pages/campus/Library.tsx:122:22",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/campus/Library.tsx",
                                                        "data-component-line": "122",
                                                        "data-component-file": "Library.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%22className%22%3A%22bg-school-gold%20w-24%20h-24%20rounded-full%20flex%20items-center%20justify-center%20mx-auto%20mb-4%22%7D",
                                                        className: "bg-school-gold w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4",
                                                        children: /*#__PURE__*/ _jsxDEV(BookOpen, {
                                                            "data-lov-id": "src/pages/campus/Library.tsx:123:24",
                                                            "data-lov-name": "BookOpen",
                                                            "data-component-path": "src/pages/campus/Library.tsx",
                                                            "data-component-line": "123",
                                                            "data-component-file": "Library.tsx",
                                                            "data-component-name": "BookOpen",
                                                            "data-component-content": "%7B%22className%22%3A%22h-12%20w-12%20text-white%22%7D",
                                                            className: "h-12 w-12 text-white"
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                            lineNumber: 123,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/pages/campus/Library.tsx:125:22",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/campus/Library.tsx",
                                                        "data-component-line": "125",
                                                        "data-component-file": "Library.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%22className%22%3A%22bg-school-brown%20text-white%20px-4%20py-2%20rounded-full%20text-sm%20font-medium%22%7D",
                                                        className: "bg-school-brown text-white px-4 py-2 rounded-full text-sm font-medium",
                                                        children: event.date
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                lineNumber: 121,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/campus/Library.tsx:129:20",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/campus/Library.tsx",
                                                "data-component-line": "129",
                                                "data-component-file": "Library.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22lg%3Acol-span-2%22%7D",
                                                className: "lg:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("h3", {
                                                        "data-lov-id": "src/pages/campus/Library.tsx:130:22",
                                                        "data-lov-name": "h3",
                                                        "data-component-path": "src/pages/campus/Library.tsx",
                                                        "data-component-line": "130",
                                                        "data-component-file": "Library.tsx",
                                                        "data-component-name": "h3",
                                                        "data-component-content": "%7B%22className%22%3A%22text-2xl%20font-bold%20text-school-brown%20mb-2%22%7D",
                                                        className: "text-2xl font-bold text-school-brown mb-2",
                                                        children: event.title
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("h4", {
                                                        "data-lov-id": "src/pages/campus/Library.tsx:131:22",
                                                        "data-lov-name": "h4",
                                                        "data-component-path": "src/pages/campus/Library.tsx",
                                                        "data-component-line": "131",
                                                        "data-component-file": "Library.tsx",
                                                        "data-component-name": "h4",
                                                        "data-component-content": "%7B%22className%22%3A%22text-xl%20text-school-gold%20mb-4%20font-semibold%22%7D",
                                                        className: "text-xl text-school-gold mb-4 font-semibold",
                                                        children: event.subtitle
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("p", {
                                                        "data-lov-id": "src/pages/campus/Library.tsx:132:22",
                                                        "data-lov-name": "p",
                                                        "data-component-path": "src/pages/campus/Library.tsx",
                                                        "data-component-line": "132",
                                                        "data-component-file": "Library.tsx",
                                                        "data-component-name": "p",
                                                        "data-component-content": "%7B%22text%22%3A%22%5C%22%20%5C%22%22%2C%22className%22%3A%22text-elegant-light%20leading-relaxed%20italic%22%7D",
                                                        className: "text-elegant-light leading-relaxed italic",
                                                        children: [
                                                            '"',
                                                            event.description,
                                                            '"'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                lineNumber: 129,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                        lineNumber: 120,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                    lineNumber: 119,
                                    columnNumber: 17
                                }, this)
                            }, event.title, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                lineNumber: 118,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("section", {
                    "data-lov-id": "src/pages/campus/Library.tsx:142:8",
                    "data-lov-name": "section",
                    "data-component-path": "src/pages/campus/Library.tsx",
                    "data-component-line": "142",
                    "data-component-file": "Library.tsx",
                    "data-component-name": "section",
                    "data-component-content": "%7B%22className%22%3A%22py-16%22%7D",
                    className: "py-16",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/campus/Library.tsx:143:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/campus/Library.tsx",
                        "data-component-line": "143",
                        "data-component-file": "Library.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                        className: "container mx-auto px-4",
                        children: [
                            /*#__PURE__*/ _jsxDEV("h2", {
                                "data-lov-id": "src/pages/campus/Library.tsx:144:12",
                                "data-lov-name": "h2",
                                "data-component-path": "src/pages/campus/Library.tsx",
                                "data-component-line": "144",
                                "data-component-file": "Library.tsx",
                                "data-component-name": "h2",
                                "data-component-content": "%7B%22text%22%3A%22Special%20Programs%20%26%20Events%22%2C%22className%22%3A%22text-3xl%20font-bold%20text-school-brown%20text-center%20mb-12%22%7D",
                                className: "text-3xl font-bold text-school-brown text-center mb-12",
                                children: "Special Programs & Events"
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/pages/campus/Library.tsx:145:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/pages/campus/Library.tsx",
                                "data-component-line": "145",
                                "data-component-file": "Library.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-3%20gap-8%22%7D",
                                className: "grid md:grid-cols-3 gap-8",
                                children: [
                                    /*#__PURE__*/ _jsxDEV(Card, {
                                        "data-lov-id": "src/pages/campus/Library.tsx:146:14",
                                        "data-lov-name": "Card",
                                        "data-component-path": "src/pages/campus/Library.tsx",
                                        "data-component-line": "146",
                                        "data-component-file": "Library.tsx",
                                        "data-component-name": "Card",
                                        "data-component-content": "%7B%22className%22%3A%22hover%3Ashadow-xl%20transition-all%20duration-300%20hover-scale%22%7D",
                                        className: "hover:shadow-xl transition-all duration-300 hover-scale",
                                        children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                            "data-lov-id": "src/pages/campus/Library.tsx:147:16",
                                            "data-lov-name": "CardContent",
                                            "data-component-path": "src/pages/campus/Library.tsx",
                                            "data-component-line": "147",
                                            "data-component-file": "Library.tsx",
                                            "data-component-name": "CardContent",
                                            "data-component-content": "%7B%22className%22%3A%22p-6%20text-center%22%7D",
                                            className: "p-6 text-center",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV(Calendar, {
                                                    "data-lov-id": "src/pages/campus/Library.tsx:148:18",
                                                    "data-lov-name": "Calendar",
                                                    "data-component-path": "src/pages/campus/Library.tsx",
                                                    "data-component-line": "148",
                                                    "data-component-file": "Library.tsx",
                                                    "data-component-name": "Calendar",
                                                    "data-component-content": "%7B%22className%22%3A%22h-12%20w-12%20text-school-gold%20mx-auto%20mb-4%22%7D",
                                                    className: "h-12 w-12 text-school-gold mx-auto mb-4"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("h3", {
                                                    "data-lov-id": "src/pages/campus/Library.tsx:149:18",
                                                    "data-lov-name": "h3",
                                                    "data-component-path": "src/pages/campus/Library.tsx",
                                                    "data-component-line": "149",
                                                    "data-component-file": "Library.tsx",
                                                    "data-component-name": "h3",
                                                    "data-component-content": "%7B%22text%22%3A%22Weekly%20Reading%20Hours%22%2C%22className%22%3A%22text-lg%20font-bold%20text-school-brown%20mb-3%22%7D",
                                                    className: "text-lg font-bold text-school-brown mb-3",
                                                    children: "Weekly Reading Hours"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/campus/Library.tsx:150:18",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/campus/Library.tsx",
                                                    "data-component-line": "150",
                                                    "data-component-file": "Library.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22text%22%3A%22Dedicated%20library%20time%20for%20each%20class%20to%20develop%20reading%20habits%22%2C%22className%22%3A%22text-elegant-light%20mb-4%22%7D",
                                                    className: "text-elegant-light mb-4",
                                                    children: "Dedicated library time for each class to develop reading habits"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/campus/Library.tsx:151:18",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/campus/Library.tsx",
                                                    "data-component-line": "151",
                                                    "data-component-file": "Library.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22text%22%3A%22Every%20Tuesday%20%26%20Thursday%22%2C%22className%22%3A%22text-sm%20text-school-light-brown%22%7D",
                                                    className: "text-sm text-school-light-brown",
                                                    children: "Every Tuesday & Thursday"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                            lineNumber: 147,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV(Card, {
                                        "data-lov-id": "src/pages/campus/Library.tsx:154:14",
                                        "data-lov-name": "Card",
                                        "data-component-path": "src/pages/campus/Library.tsx",
                                        "data-component-line": "154",
                                        "data-component-file": "Library.tsx",
                                        "data-component-name": "Card",
                                        "data-component-content": "%7B%22className%22%3A%22hover%3Ashadow-xl%20transition-all%20duration-300%20hover-scale%22%7D",
                                        className: "hover:shadow-xl transition-all duration-300 hover-scale",
                                        children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                            "data-lov-id": "src/pages/campus/Library.tsx:155:16",
                                            "data-lov-name": "CardContent",
                                            "data-component-path": "src/pages/campus/Library.tsx",
                                            "data-component-line": "155",
                                            "data-component-file": "Library.tsx",
                                            "data-component-name": "CardContent",
                                            "data-component-content": "%7B%22className%22%3A%22p-6%20text-center%22%7D",
                                            className: "p-6 text-center",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV(Users, {
                                                    "data-lov-id": "src/pages/campus/Library.tsx:156:18",
                                                    "data-lov-name": "Users",
                                                    "data-component-path": "src/pages/campus/Library.tsx",
                                                    "data-component-line": "156",
                                                    "data-component-file": "Library.tsx",
                                                    "data-component-name": "Users",
                                                    "data-component-content": "%7B%22className%22%3A%22h-12%20w-12%20text-school-gold%20mx-auto%20mb-4%22%7D",
                                                    className: "h-12 w-12 text-school-gold mx-auto mb-4"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("h3", {
                                                    "data-lov-id": "src/pages/campus/Library.tsx:157:18",
                                                    "data-lov-name": "h3",
                                                    "data-component-path": "src/pages/campus/Library.tsx",
                                                    "data-component-line": "157",
                                                    "data-component-file": "Library.tsx",
                                                    "data-component-name": "h3",
                                                    "data-component-content": "%7B%22text%22%3A%22Author%20Talk%20Sessions%22%2C%22className%22%3A%22text-lg%20font-bold%20text-school-brown%20mb-3%22%7D",
                                                    className: "text-lg font-bold text-school-brown mb-3",
                                                    children: "Author Talk Sessions"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/campus/Library.tsx:158:18",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/campus/Library.tsx",
                                                    "data-component-line": "158",
                                                    "data-component-file": "Library.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22text%22%3A%22Meet%20and%20interact%20with%20renowned%20authors%20and%20storytellers%22%2C%22className%22%3A%22text-elegant-light%20mb-4%22%7D",
                                                    className: "text-elegant-light mb-4",
                                                    children: "Meet and interact with renowned authors and storytellers"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/campus/Library.tsx:159:18",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/campus/Library.tsx",
                                                    "data-component-line": "159",
                                                    "data-component-file": "Library.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22text%22%3A%22Monthly%20Events%22%2C%22className%22%3A%22text-sm%20text-school-light-brown%22%7D",
                                                    className: "text-sm text-school-light-brown",
                                                    children: "Monthly Events"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                            lineNumber: 155,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV(Card, {
                                        "data-lov-id": "src/pages/campus/Library.tsx:162:14",
                                        "data-lov-name": "Card",
                                        "data-component-path": "src/pages/campus/Library.tsx",
                                        "data-component-line": "162",
                                        "data-component-file": "Library.tsx",
                                        "data-component-name": "Card",
                                        "data-component-content": "%7B%22className%22%3A%22hover%3Ashadow-xl%20transition-all%20duration-300%20hover-scale%22%7D",
                                        className: "hover:shadow-xl transition-all duration-300 hover-scale",
                                        children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                            "data-lov-id": "src/pages/campus/Library.tsx:163:16",
                                            "data-lov-name": "CardContent",
                                            "data-component-path": "src/pages/campus/Library.tsx",
                                            "data-component-line": "163",
                                            "data-component-file": "Library.tsx",
                                            "data-component-name": "CardContent",
                                            "data-component-content": "%7B%22className%22%3A%22p-6%20text-center%22%7D",
                                            className: "p-6 text-center",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV(Star, {
                                                    "data-lov-id": "src/pages/campus/Library.tsx:164:18",
                                                    "data-lov-name": "Star",
                                                    "data-component-path": "src/pages/campus/Library.tsx",
                                                    "data-component-line": "164",
                                                    "data-component-file": "Library.tsx",
                                                    "data-component-name": "Star",
                                                    "data-component-content": "%7B%22className%22%3A%22h-12%20w-12%20text-school-gold%20mx-auto%20mb-4%22%7D",
                                                    className: "h-12 w-12 text-school-gold mx-auto mb-4"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("h3", {
                                                    "data-lov-id": "src/pages/campus/Library.tsx:165:18",
                                                    "data-lov-name": "h3",
                                                    "data-component-path": "src/pages/campus/Library.tsx",
                                                    "data-component-line": "165",
                                                    "data-component-file": "Library.tsx",
                                                    "data-component-name": "h3",
                                                    "data-component-content": "%7B%22text%22%3A%22Reading%20Challenges%22%2C%22className%22%3A%22text-lg%20font-bold%20text-school-brown%20mb-3%22%7D",
                                                    className: "text-lg font-bold text-school-brown mb-3",
                                                    children: "Reading Challenges"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/campus/Library.tsx:166:18",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/campus/Library.tsx",
                                                    "data-component-line": "166",
                                                    "data-component-file": "Library.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22text%22%3A%22Exciting%20competitions%20to%20encourage%20students%20to%20read%20more%22%2C%22className%22%3A%22text-elegant-light%20mb-4%22%7D",
                                                    className: "text-elegant-light mb-4",
                                                    children: "Exciting competitions to encourage students to read more"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/campus/Library.tsx:167:18",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/campus/Library.tsx",
                                                    "data-component-line": "167",
                                                    "data-component-file": "Library.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22text%22%3A%22Quarterly%20Challenges%22%2C%22className%22%3A%22text-sm%20text-school-light-brown%22%7D",
                                                    className: "text-sm text-school-light-brown",
                                                    children: "Quarterly Challenges"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                            lineNumber: 163,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                    lineNumber: 142,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("section", {
                    "data-lov-id": "src/pages/campus/Library.tsx:175:8",
                    "data-lov-name": "section",
                    "data-component-path": "src/pages/campus/Library.tsx",
                    "data-component-line": "175",
                    "data-component-file": "Library.tsx",
                    "data-component-name": "section",
                    "data-component-content": "%7B%22className%22%3A%22py-16%20bg-gradient-to-r%20from-amber-50%20to-orange-50%22%7D",
                    className: "py-16 bg-gradient-to-r from-amber-50 to-orange-50",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/campus/Library.tsx:176:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/campus/Library.tsx",
                        "data-component-line": "176",
                        "data-component-file": "Library.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                        className: "container mx-auto px-4",
                        children: /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/campus/Library.tsx:177:12",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/campus/Library.tsx",
                            "data-component-line": "177",
                            "data-component-file": "Library.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22max-w-4xl%20mx-auto%20text-center%22%7D",
                            className: "max-w-4xl mx-auto text-center",
                            children: [
                                /*#__PURE__*/ _jsxDEV("h2", {
                                    "data-lov-id": "src/pages/campus/Library.tsx:178:14",
                                    "data-lov-name": "h2",
                                    "data-component-path": "src/pages/campus/Library.tsx",
                                    "data-component-line": "178",
                                    "data-component-file": "Library.tsx",
                                    "data-component-name": "h2",
                                    "data-component-content": "%7B%22text%22%3A%22Library%20Guidelines%22%2C%22className%22%3A%22text-3xl%20font-bold%20text-school-brown%20mb-8%22%7D",
                                    className: "text-3xl font-bold text-school-brown mb-8",
                                    children: "Library Guidelines"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                    lineNumber: 178,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/campus/Library.tsx:179:14",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/campus/Library.tsx",
                                    "data-component-line": "179",
                                    "data-component-file": "Library.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-2%20gap-8%20text-left%22%7D",
                                    className: "grid md:grid-cols-2 gap-8 text-left",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV(Card, {
                                            "data-lov-id": "src/pages/campus/Library.tsx:180:16",
                                            "data-lov-name": "Card",
                                            "data-component-path": "src/pages/campus/Library.tsx",
                                            "data-component-line": "180",
                                            "data-component-file": "Library.tsx",
                                            "data-component-name": "Card",
                                            "data-component-content": "%7B%22className%22%3A%22bg-white%20shadow-lg%22%7D",
                                            className: "bg-white shadow-lg",
                                            children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                                "data-lov-id": "src/pages/campus/Library.tsx:181:18",
                                                "data-lov-name": "CardContent",
                                                "data-component-path": "src/pages/campus/Library.tsx",
                                                "data-component-line": "181",
                                                "data-component-file": "Library.tsx",
                                                "data-component-name": "CardContent",
                                                "data-component-content": "%7B%22className%22%3A%22p-6%22%7D",
                                                className: "p-6",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("h3", {
                                                        "data-lov-id": "src/pages/campus/Library.tsx:182:20",
                                                        "data-lov-name": "h3",
                                                        "data-component-path": "src/pages/campus/Library.tsx",
                                                        "data-component-line": "182",
                                                        "data-component-file": "Library.tsx",
                                                        "data-component-name": "h3",
                                                        "data-component-content": "%7B%22text%22%3A%22Library%20Hours%22%2C%22className%22%3A%22text-lg%20font-bold%20text-school-brown%20mb-4%22%7D",
                                                        className: "text-lg font-bold text-school-brown mb-4",
                                                        children: "Library Hours"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("ul", {
                                                        "data-lov-id": "src/pages/campus/Library.tsx:183:20",
                                                        "data-lov-name": "ul",
                                                        "data-component-path": "src/pages/campus/Library.tsx",
                                                        "data-component-line": "183",
                                                        "data-component-file": "Library.tsx",
                                                        "data-component-name": "ul",
                                                        "data-component-content": "%7B%22className%22%3A%22space-y-2%20text-elegant-light%22%7D",
                                                        className: "space-y-2 text-elegant-light",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("li", {
                                                                "data-lov-id": "src/pages/campus/Library.tsx:184:22",
                                                                "data-lov-name": "li",
                                                                "data-component-path": "src/pages/campus/Library.tsx",
                                                                "data-component-line": "184",
                                                                "data-component-file": "Library.tsx",
                                                                "data-component-name": "li",
                                                                "data-component-content": "%7B%22text%22%3A%22%E2%80%A2%20Monday%20-%20Friday%3A%208%3A00%20AM%20-%206%3A00%20PM%22%7D",
                                                                children: "• Monday - Friday: 8:00 AM - 6:00 PM"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                                lineNumber: 184,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("li", {
                                                                "data-lov-id": "src/pages/campus/Library.tsx:185:22",
                                                                "data-lov-name": "li",
                                                                "data-component-path": "src/pages/campus/Library.tsx",
                                                                "data-component-line": "185",
                                                                "data-component-file": "Library.tsx",
                                                                "data-component-name": "li",
                                                                "data-component-content": "%7B%22text%22%3A%22%E2%80%A2%20Saturday%3A%208%3A00%20AM%20-%202%3A00%20PM%22%7D",
                                                                children: "• Saturday: 8:00 AM - 2:00 PM"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                                lineNumber: 185,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("li", {
                                                                "data-lov-id": "src/pages/campus/Library.tsx:186:22",
                                                                "data-lov-name": "li",
                                                                "data-component-path": "src/pages/campus/Library.tsx",
                                                                "data-component-line": "186",
                                                                "data-component-file": "Library.tsx",
                                                                "data-component-name": "li",
                                                                "data-component-content": "%7B%22text%22%3A%22%E2%80%A2%20Closed%20on%20Sundays%20and%20holidays%22%7D",
                                                                children: "• Closed on Sundays and holidays"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                                lineNumber: 186,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                lineNumber: 181,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV(Card, {
                                            "data-lov-id": "src/pages/campus/Library.tsx:190:16",
                                            "data-lov-name": "Card",
                                            "data-component-path": "src/pages/campus/Library.tsx",
                                            "data-component-line": "190",
                                            "data-component-file": "Library.tsx",
                                            "data-component-name": "Card",
                                            "data-component-content": "%7B%22className%22%3A%22bg-white%20shadow-lg%22%7D",
                                            className: "bg-white shadow-lg",
                                            children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                                "data-lov-id": "src/pages/campus/Library.tsx:191:18",
                                                "data-lov-name": "CardContent",
                                                "data-component-path": "src/pages/campus/Library.tsx",
                                                "data-component-line": "191",
                                                "data-component-file": "Library.tsx",
                                                "data-component-name": "CardContent",
                                                "data-component-content": "%7B%22className%22%3A%22p-6%22%7D",
                                                className: "p-6",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("h3", {
                                                        "data-lov-id": "src/pages/campus/Library.tsx:192:20",
                                                        "data-lov-name": "h3",
                                                        "data-component-path": "src/pages/campus/Library.tsx",
                                                        "data-component-line": "192",
                                                        "data-component-file": "Library.tsx",
                                                        "data-component-name": "h3",
                                                        "data-component-content": "%7B%22text%22%3A%22Borrowing%20Policy%22%2C%22className%22%3A%22text-lg%20font-bold%20text-school-brown%20mb-4%22%7D",
                                                        className: "text-lg font-bold text-school-brown mb-4",
                                                        children: "Borrowing Policy"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("ul", {
                                                        "data-lov-id": "src/pages/campus/Library.tsx:193:20",
                                                        "data-lov-name": "ul",
                                                        "data-component-path": "src/pages/campus/Library.tsx",
                                                        "data-component-line": "193",
                                                        "data-component-file": "Library.tsx",
                                                        "data-component-name": "ul",
                                                        "data-component-content": "%7B%22className%22%3A%22space-y-2%20text-elegant-light%22%7D",
                                                        className: "space-y-2 text-elegant-light",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("li", {
                                                                "data-lov-id": "src/pages/campus/Library.tsx:194:22",
                                                                "data-lov-name": "li",
                                                                "data-component-path": "src/pages/campus/Library.tsx",
                                                                "data-component-line": "194",
                                                                "data-component-file": "Library.tsx",
                                                                "data-component-name": "li",
                                                                "data-component-content": "%7B%22text%22%3A%22%E2%80%A2%20Students%20can%20borrow%20up%20to%203%20books%22%7D",
                                                                children: "• Students can borrow up to 3 books"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                                lineNumber: 194,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("li", {
                                                                "data-lov-id": "src/pages/campus/Library.tsx:195:22",
                                                                "data-lov-name": "li",
                                                                "data-component-path": "src/pages/campus/Library.tsx",
                                                                "data-component-line": "195",
                                                                "data-component-file": "Library.tsx",
                                                                "data-component-name": "li",
                                                                "data-component-content": "%7B%22text%22%3A%22%E2%80%A2%20Loan%20period%3A%202%20weeks%20(renewable)%22%7D",
                                                                children: "• Loan period: 2 weeks (renewable)"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                                lineNumber: 195,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("li", {
                                                                "data-lov-id": "src/pages/campus/Library.tsx:196:22",
                                                                "data-lov-name": "li",
                                                                "data-component-path": "src/pages/campus/Library.tsx",
                                                                "data-component-line": "196",
                                                                "data-component-file": "Library.tsx",
                                                                "data-component-name": "li",
                                                                "data-component-content": "%7B%22text%22%3A%22%E2%80%A2%20Reference%20books%20for%20library%20use%20only%22%7D",
                                                                children: "• Reference books for library use only"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                                lineNumber: 196,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                                lineNumber: 191,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                            lineNumber: 190,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/campus/Library.tsx:201:14",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/campus/Library.tsx",
                                    "data-component-line": "201",
                                    "data-component-file": "Library.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22mt-8%22%7D",
                                    className: "mt-8",
                                    children: /*#__PURE__*/ _jsxDEV(Button, {
                                        "data-lov-id": "src/pages/campus/Library.tsx:202:16",
                                        "data-lov-name": "Button",
                                        "data-component-path": "src/pages/campus/Library.tsx",
                                        "data-component-line": "202",
                                        "data-component-file": "Library.tsx",
                                        "data-component-name": "Button",
                                        "data-component-content": "%7B%22text%22%3A%22Download%20Library%20Membership%20Form%22%2C%22className%22%3A%22bg-school-gold%20hover%3Abg-school-brown%20text-white%22%7D",
                                        size: "lg",
                                        className: "bg-school-gold hover:bg-school-brown text-white",
                                        children: "Download Library Membership Form"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                        lineNumber: 202,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                                    lineNumber: 201,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                            lineNumber: 177,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                        lineNumber: 176,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
                    lineNumber: 175,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/pages/campus/Library.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
};
_c = Library;
export default Library;
var _c;
$RefreshReg$(_c, "Library");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/pages/campus/Library.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/pages/campus/Library.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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QTtvQ0FBQUMsaUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQywwQkFBQTtvQ0FBRUUsV0FBVTs4Q0FDYixzQkFBQ2hDO3dDQUFLd0IsZUFBQTt3Q0FBQUMsaUJBQUE7d0NBQUFDLHVCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLHVCQUFBO3dDQUFBQywwQkFBQTt3Q0FBRWdCLE1BQUs7d0NBQUtkLFdBQVU7a0RBQWlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVU3RjtLQTNNTXJCO0FBNk1OLGVBQWVBLFFBQU8iLCJuYW1lcyI6WyJMYXlvdXQiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJCdXR0b24iLCJCb29rT3BlbiIsIldpZmkiLCJVc2VycyIsIkNsb2NrIiwiU2VhcmNoIiwiU3RhciIsIkdsb2JlIiwiQ2FsZW5kYXIiLCJQYWdlQmFubmVyIiwibGlicmFyeVN0dWRlbnRzUmVhZGluZyIsIkxpYnJhcnkiLCJmZWF0dXJlcyIsInRpdGxlIiwiaWNvbiIsImRlc2NyaXB0aW9uIiwiZGV0YWlscyIsImNvbGxlY3Rpb25zIiwidHlwZSIsImNvdW50IiwiY29sb3IiLCJjdXJyZW50RXZlbnRzIiwic3VidGl0bGUiLCJkYXRlIiwiZGF0YS1sb3YtaWQiLCJkYXRhLWxvdi1uYW1lIiwiZGF0YS1jb21wb25lbnQtcGF0aCIsImRhdGEtY29tcG9uZW50LWxpbmUiLCJkYXRhLWNvbXBvbmVudC1maWxlIiwiZGF0YS1jb21wb25lbnQtbmFtZSIsImRhdGEtY29tcG9uZW50LWNvbnRlbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJzZWN0aW9uIiwibWFwIiwiY29sbGVjdGlvbiIsImluZGV4IiwicCIsImgyIiwiZmVhdHVyZSIsImgzIiwiZXZlbnQiLCJoNCIsInVsIiwibGkiLCJzaXplIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkxpYnJhcnkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBCb29rT3BlbiwgV2lmaSwgVXNlcnMsIENsb2NrLCBTZWFyY2gsIFN0YXIsIEdsb2JlLCBDYWxlbmRhciB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCBQYWdlQmFubmVyIGZyb20gXCJAL2NvbXBvbmVudHMvUGFnZUJhbm5lclwiO1xuaW1wb3J0IGxpYnJhcnlTdHVkZW50c1JlYWRpbmcgZnJvbSBcIkAvYXNzZXRzL2xpYnJhcnktc3R1ZGVudHMtcmVhZGluZy5qcGdcIjtcblxuY29uc3QgTGlicmFyeSA9ICgpID0+IHtcbiAgY29uc3QgZmVhdHVyZXMgPSBbXG4gICAgeyBcbiAgICAgIHRpdGxlOiBcIkV4dGVuc2l2ZSBDb2xsZWN0aW9uXCIsIFxuICAgICAgaWNvbjogQm9va09wZW4sIFxuICAgICAgZGVzY3JpcHRpb246IFwiNSwwMDArIGJvb2tzIGluIEVuZ2xpc2gsIEthbm5hZGEsIGFuZCBIaW5kaSBjb3ZlcmluZyBhbGwgc3ViamVjdHMgYW5kIGFnZSBncm91cHNcIixcbiAgICAgIGRldGFpbHM6IFwiRmljdGlvbiwgTm9uLWZpY3Rpb24sIFJlZmVyZW5jZSBib29rcywgYW5kIFRleHRib29rc1wiXG4gICAgfSxcbiAgICB7IFxuICAgICAgdGl0bGU6IFwiRGlnaXRhbCBSZXNvdXJjZXNcIiwgXG4gICAgICBpY29uOiBXaWZpLCBcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkFjY2VzcyB0byBvbmxpbmUgZGF0YWJhc2VzLCBlLWJvb2tzLCBhbmQgZGlnaXRhbCBqb3VybmFscyBmb3IgcmVzZWFyY2hcIixcbiAgICAgIGRldGFpbHM6IFwiSGlnaC1zcGVlZCBpbnRlcm5ldCBhbmQgY29tcHV0ZXIgdGVybWluYWxzIGF2YWlsYWJsZVwiXG4gICAgfSxcbiAgICB7IFxuICAgICAgdGl0bGU6IFwiUmVhZGluZyBTcGFjZXNcIiwgXG4gICAgICBpY29uOiBVc2VycywgXG4gICAgICBkZXNjcmlwdGlvbjogXCJEZWRpY2F0ZWQgYXJlYXMgZm9yIHNpbGVudCByZWFkaW5nLCBncm91cCBzdHVkeSwgYW5kIHJlc2VhcmNoIHdvcmtcIixcbiAgICAgIGRldGFpbHM6IFwiQ29tZm9ydGFibGUgc2VhdGluZyBhbmQgcHJvcGVyIGxpZ2h0aW5nIHRocm91Z2hvdXRcIlxuICAgIH0sXG4gICAgeyBcbiAgICAgIHRpdGxlOiBcIkV4dGVuZGVkIEhvdXJzXCIsIFxuICAgICAgaWNvbjogQ2xvY2ssIFxuICAgICAgZGVzY3JpcHRpb246IFwiT3BlbiBmcm9tIDg6MDAgQU0gdG8gNjowMCBQTSBvbiBhbGwgc2Nob29sIGRheXNcIixcbiAgICAgIGRldGFpbHM6IFwiQWZ0ZXItc2Nob29sIGFjY2VzcyBmb3Igc3R1ZGVudHMgYW5kIHN0YWZmXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlNlYXJjaCBTeXN0ZW1cIixcbiAgICAgIGljb246IFNlYXJjaCxcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkRpZ2l0YWwgY2F0YWxvZyBzeXN0ZW0gZm9yIGVhc3kgYm9vayBkaXNjb3ZlcnkgYW5kIHJlc2VydmF0aW9uXCIsXG4gICAgICBkZXRhaWxzOiBcIkFkdmFuY2VkIHNlYXJjaCBieSBhdXRob3IsIHN1YmplY3QsIG9yIGtleXdvcmRcIlxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiU3BlY2lhbCBQcm9ncmFtc1wiLFxuICAgICAgaWNvbjogU3RhcixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkF1dGhvciB0YWxrcywgc3Rvcnkgc2Vzc2lvbnMsIGFuZCByZWFkaW5nIGNoYWxsZW5nZXMgdGhyb3VnaG91dCB0aGUgeWVhclwiLFxuICAgICAgZGV0YWlsczogXCJNb250aGx5IGJvb2sgY2x1YnMgYW5kIGxpdGVyYXJ5IGV2ZW50c1wiXG4gICAgfVxuICBdO1xuXG4gIGNvbnN0IGNvbGxlY3Rpb25zID0gW1xuICAgIHsgdHlwZTogXCJGaWN0aW9uXCIsIGNvdW50OiBcIjIsMDAwK1wiLCBpY29uOiBCb29rT3BlbiwgY29sb3I6IFwiYmctYmx1ZS01MFwiIH0sXG4gICAgeyB0eXBlOiBcIlJlZmVyZW5jZVwiLCBjb3VudDogXCIxLDUwMCtcIiwgaWNvbjogU2VhcmNoLCBjb2xvcjogXCJiZy1ncmVlbi01MFwiIH0sXG4gICAgeyB0eXBlOiBcIkRpZ2l0YWxcIiwgY291bnQ6IFwiNTAwK1wiLCBpY29uOiBXaWZpLCBjb2xvcjogXCJiZy1wdXJwbGUtNTBcIiB9LFxuICAgIHsgdHlwZTogXCJNYWdhemluZXNcIiwgY291bnQ6IFwiNTArXCIsIGljb246IEdsb2JlLCBjb2xvcjogXCJiZy1vcmFuZ2UtNTBcIiB9XG4gIF07XG5cbiAgY29uc3QgY3VycmVudEV2ZW50cyA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogXCJCb29rIG9mIHRoZSBNb250aFwiLFxuICAgICAgc3VidGl0bGU6IFwiVGhlIFNlY3JldCBHYXJkZW4gYnkgRnJhbmNlcyBIb2Rnc29uIEJ1cm5ldHRcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkEgdGltZWxlc3MgdGFsZSBvZiBmcmllbmRzaGlwLCBoZWFsaW5nLCBhbmQgdGhlIG1hZ2ljIG9mIG5hdHVyZS4gUGVyZmVjdCBmb3Igc3R1ZGVudHMgb2YgYWxsIGFnZXMgdG8gZGlzY292ZXIgdGhlIHBvd2VyIG9mIGhvcGUgYW5kIHRyYW5zZm9ybWF0aW9uLlwiLFxuICAgICAgZGF0ZTogXCJKYW51YXJ5IDIwMjVcIlxuICAgIH1cbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1iYWNrZ3JvdW5kXCI+XG4gICAgICAgIDxQYWdlQmFubmVyXG4gICAgICAgICAgdGl0bGU9XCJMaWJyYXJ5XCJcbiAgICAgICAgICBzdWJ0aXRsZT1cIlRoZSBpbnRlbGxlY3R1YWwgaGVhcnQgb2Ygb3VyIGNhbXB1cyAtIGluc3BpcmluZyBzdHVkZW50cyB0byByZWFkLCByZXNlYXJjaCwgYW5kIGdyb3dcIlxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZT17bGlicmFyeVN0dWRlbnRzUmVhZGluZ31cbiAgICAgICAgLz5cblxuICAgICAgICB7LyogQ29sbGVjdGlvbiBTdGF0cyAqL31cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTYgYmctZ3JhZGllbnQtdG8tciBmcm9tLWFtYmVyLTUwIHRvLW9yYW5nZS01MFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy00IGdhcC04XCI+XG4gICAgICAgICAgICAgIHtjb2xsZWN0aW9ucy5tYXAoKGNvbGxlY3Rpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPENhcmQga2V5PXtjb2xsZWN0aW9uLnR5cGV9IGNsYXNzTmFtZT17YCR7Y29sbGVjdGlvbi5jb2xvcn0gdGV4dC1jZW50ZXIgaG92ZXI6c2hhZG93LXhsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBob3Zlci1zY2FsZSBhbmltYXRlLWZhZGUtaW5gfT5cbiAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zY2hvb2wtZ29sZCB3LTE2IGgtMTYgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG14LWF1dG8gbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxjb2xsZWN0aW9uLmljb24gY2xhc3NOYW1lPVwiaC04IHctOCB0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtc2Nob29sLWJyb3duIG1iLTJcIj57Y29sbGVjdGlvbi5jb3VudH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1lbGVnYW50LWxpZ2h0IGZvbnQtbWVkaXVtXCI+e2NvbGxlY3Rpb24udHlwZX08L3A+XG4gICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIHsvKiBNYWluIEZlYXR1cmVzIC0gMyBDb2x1bW4gTGF5b3V0ICovfVxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LXNjaG9vbC1icm93biB0ZXh0LWNlbnRlciBtYi0xMlwiPkxpYnJhcnkgRmVhdHVyZXM8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGxnOmdyaWQtY29scy0zIGdhcC04XCI+XG4gICAgICAgICAgICAgIHtmZWF0dXJlcy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPENhcmQga2V5PXtmZWF0dXJlLnRpdGxlfSBjbGFzc05hbWU9XCJob3ZlcjpzaGFkb3cteGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGhvdmVyLXNjYWxlIGFuaW1hdGUtZmFkZS1pblwiPlxuICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtNiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNjaG9vbC1nb2xkIHctMTYgaC0xNiByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXgtYXV0byBtYi02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGZlYXR1cmUuaWNvbiBjbGFzc05hbWU9XCJoLTggdy04IHRleHQtd2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtc2Nob29sLWJyb3duIG1iLTRcIj57ZmVhdHVyZS50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWVsZWdhbnQtbGlnaHQgbWItNCBsZWFkaW5nLXJlbGF4ZWRcIj57ZmVhdHVyZS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zY2hvb2wtbGlnaHQtYnJvd24gaXRhbGljXCI+e2ZlYXR1cmUuZGV0YWlsc308L3A+XG4gICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIHsvKiBCb29rIG9mIHRoZSBNb250aCBIaWdobGlnaHQgKi99XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTE2IGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibHVlLTUwIHRvLWluZGlnby01MFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICAgICAge2N1cnJlbnRFdmVudHMubWFwKChldmVudCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPENhcmQga2V5PXtldmVudC50aXRsZX0gY2xhc3NOYW1lPVwibWF4LXctNHhsIG14LWF1dG8gc2hhZG93LWxnIGhvdmVyOnNoYWRvdy14bCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC04IGxnOnAtMTJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBsZzpncmlkLWNvbHMtMyBnYXAtOCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpjb2wtc3Bhbi0xIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zY2hvb2wtZ29sZCB3LTI0IGgtMjQgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG14LWF1dG8gbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvb2tPcGVuIGNsYXNzTmFtZT1cImgtMTIgdy0xMiB0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNjaG9vbC1icm93biB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkLWZ1bGwgdGV4dC1zbSBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2V2ZW50LmRhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmNvbC1zcGFuLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtc2Nob29sLWJyb3duIG1iLTJcIj57ZXZlbnQudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LXNjaG9vbC1nb2xkIG1iLTQgZm9udC1zZW1pYm9sZFwiPntldmVudC5zdWJ0aXRsZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZWxlZ2FudC1saWdodCBsZWFkaW5nLXJlbGF4ZWQgaXRhbGljXCI+XCJ7ZXZlbnQuZGVzY3JpcHRpb259XCI8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICB7LyogTGlicmFyeSBQcm9ncmFtcyAqL31cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gdGV4dC1jZW50ZXIgbWItMTJcIj5TcGVjaWFsIFByb2dyYW1zICYgRXZlbnRzPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMyBnYXAtOFwiPlxuICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJob3ZlcjpzaGFkb3cteGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGhvdmVyLXNjYWxlXCI+XG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtNiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPENhbGVuZGFyIGNsYXNzTmFtZT1cImgtMTIgdy0xMiB0ZXh0LXNjaG9vbC1nb2xkIG14LWF1dG8gbWItNFwiIC8+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gbWItM1wiPldlZWtseSBSZWFkaW5nIEhvdXJzPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZWxlZ2FudC1saWdodCBtYi00XCI+RGVkaWNhdGVkIGxpYnJhcnkgdGltZSBmb3IgZWFjaCBjbGFzcyB0byBkZXZlbG9wIHJlYWRpbmcgaGFiaXRzPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNjaG9vbC1saWdodC1icm93blwiPkV2ZXJ5IFR1ZXNkYXkgJiBUaHVyc2RheTwvcD5cbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImhvdmVyOnNoYWRvdy14bCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgaG92ZXItc2NhbGVcIj5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC02IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8VXNlcnMgY2xhc3NOYW1lPVwiaC0xMiB3LTEyIHRleHQtc2Nob29sLWdvbGQgbXgtYXV0byBtYi00XCIgLz5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LXNjaG9vbC1icm93biBtYi0zXCI+QXV0aG9yIFRhbGsgU2Vzc2lvbnM8L2gzPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1lbGVnYW50LWxpZ2h0IG1iLTRcIj5NZWV0IGFuZCBpbnRlcmFjdCB3aXRoIHJlbm93bmVkIGF1dGhvcnMgYW5kIHN0b3J5dGVsbGVyczwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zY2hvb2wtbGlnaHQtYnJvd25cIj5Nb250aGx5IEV2ZW50czwvcD5cbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImhvdmVyOnNoYWRvdy14bCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgaG92ZXItc2NhbGVcIj5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC02IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8U3RhciBjbGFzc05hbWU9XCJoLTEyIHctMTIgdGV4dC1zY2hvb2wtZ29sZCBteC1hdXRvIG1iLTRcIiAvPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIHRleHQtc2Nob29sLWJyb3duIG1iLTNcIj5SZWFkaW5nIENoYWxsZW5nZXM8L2gzPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1lbGVnYW50LWxpZ2h0IG1iLTRcIj5FeGNpdGluZyBjb21wZXRpdGlvbnMgdG8gZW5jb3VyYWdlIHN0dWRlbnRzIHRvIHJlYWQgbW9yZTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zY2hvb2wtbGlnaHQtYnJvd25cIj5RdWFydGVybHkgQ2hhbGxlbmdlczwvcD5cbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIHsvKiBMaWJyYXJ5IFJ1bGVzICYgR3VpZGVsaW5lcyAqL31cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTYgYmctZ3JhZGllbnQtdG8tciBmcm9tLWFtYmVyLTUwIHRvLW9yYW5nZS01MFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtc2Nob29sLWJyb3duIG1iLThcIj5MaWJyYXJ5IEd1aWRlbGluZXM8L2gyPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTggdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93LWxnXCI+XG4gICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LXNjaG9vbC1icm93biBtYi00XCI+TGlicmFyeSBIb3VyczwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS15LTIgdGV4dC1lbGVnYW50LWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPuKAoiBNb25kYXkgLSBGcmlkYXk6IDg6MDAgQU0gLSA2OjAwIFBNPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+4oCiIFNhdHVyZGF5OiA4OjAwIEFNIC0gMjowMCBQTTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPuKAoiBDbG9zZWQgb24gU3VuZGF5cyBhbmQgaG9saWRheXM8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93LWxnXCI+XG4gICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LXNjaG9vbC1icm93biBtYi00XCI+Qm9ycm93aW5nIFBvbGljeTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS15LTIgdGV4dC1lbGVnYW50LWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPuKAoiBTdHVkZW50cyBjYW4gYm9ycm93IHVwIHRvIDMgYm9va3M8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT7igKIgTG9hbiBwZXJpb2Q6IDIgd2Vla3MgKHJlbmV3YWJsZSk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT7igKIgUmVmZXJlbmNlIGJvb2tzIGZvciBsaWJyYXJ5IHVzZSBvbmx5PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04XCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwibGdcIiBjbGFzc05hbWU9XCJiZy1zY2hvb2wtZ29sZCBob3ZlcjpiZy1zY2hvb2wtYnJvd24gdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgRG93bmxvYWQgTGlicmFyeSBNZW1iZXJzaGlwIEZvcm1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaWJyYXJ5O1xuIl0sImZpbGUiOiIvaG9tZS9zanJzaDkxNi9wdWJsaWNfaHRtbC9zcmMvcGFnZXMvY2FtcHVzL0xpYnJhcnkudHN4In0=