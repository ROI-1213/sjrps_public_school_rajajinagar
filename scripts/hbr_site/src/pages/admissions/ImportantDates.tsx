import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/admissions/ImportantDates.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import Layout from "/src/components/Layout.tsx";
import PageBanner from "/src/components/PageBanner.tsx";
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { Calendar, Clock, AlertCircle, Download, Bell } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
import admissionsBanner from "/src/assets/admissions-banner.jpg?import";
const ImportantDates = ()=>{
    const admissionTimeline = [
        {
            event: "Admission Opens",
            date: "January 15, 2025",
            status: "upcoming",
            description: "Online and offline application forms become available"
        },
        {
            event: "Application Deadline",
            date: "March 10, 2025",
            status: "deadline",
            description: "Last date to submit completed application forms"
        },
        {
            event: "Assessment/Interaction Rounds",
            date: "March 15-25, 2025",
            status: "upcoming",
            description: "Student interaction sessions and aptitude assessments"
        },
        {
            event: "Admission Confirmation",
            date: "March 30, 2025",
            status: "upcoming",
            description: "Final admission list announcement and fee payment"
        },
        {
            event: "First Day of School",
            date: "June 3, 2025",
            status: "academic",
            description: "Academic session begins for all grades"
        }
    ];
    const getStatusColor = (status)=>{
        switch(status){
            case 'deadline':
                return 'bg-red-100 border-red-300 text-red-700';
            case 'upcoming':
                return 'bg-blue-100 border-blue-300 text-blue-700';
            case 'academic':
                return 'bg-green-100 border-green-300 text-green-700';
            default:
                return 'bg-gray-100 border-gray-300 text-gray-700';
        }
    };
    const getStatusIcon = (status)=>{
        switch(status){
            case 'deadline':
                return AlertCircle;
            case 'upcoming':
                return Clock;
            case 'academic':
                return Calendar;
            default:
                return Calendar;
        }
    };
    return /*#__PURE__*/ _jsxDEV(Layout, {
        "data-lov-id": "src/pages/admissions/ImportantDates.tsx:62:4",
        "data-lov-name": "Layout",
        "data-component-path": "src/pages/admissions/ImportantDates.tsx",
        "data-component-line": "62",
        "data-component-file": "ImportantDates.tsx",
        "data-component-name": "Layout",
        "data-component-content": "%7B%7D",
        children: /*#__PURE__*/ _jsxDEV("div", {
            "data-lov-id": "src/pages/admissions/ImportantDates.tsx:63:6",
            "data-lov-name": "div",
            "data-component-path": "src/pages/admissions/ImportantDates.tsx",
            "data-component-line": "63",
            "data-component-file": "ImportantDates.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22min-h-screen%20bg-background%22%7D",
            className: "min-h-screen bg-background",
            children: [
                /*#__PURE__*/ _jsxDEV(PageBanner, {
                    "data-lov-id": "src/pages/admissions/ImportantDates.tsx:64:8",
                    "data-lov-name": "PageBanner",
                    "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                    "data-component-line": "64",
                    "data-component-file": "ImportantDates.tsx",
                    "data-component-name": "PageBanner",
                    "data-component-content": "%7B%7D",
                    title: "Important Dates",
                    subtitle: "Stay updated with the academic calendar and admission milestones for the 2024-25 academic year",
                    backgroundImage: admissionsBanner
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("section", {
                    "data-lov-id": "src/pages/admissions/ImportantDates.tsx:70:8",
                    "data-lov-name": "section",
                    "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                    "data-component-line": "70",
                    "data-component-file": "ImportantDates.tsx",
                    "data-component-name": "section",
                    "data-component-content": "%7B%22className%22%3A%22py-16%22%7D",
                    className: "py-16",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/admissions/ImportantDates.tsx:71:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                        "data-component-line": "71",
                        "data-component-file": "ImportantDates.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                        className: "container mx-auto px-4",
                        children: [
                            /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/pages/admissions/ImportantDates.tsx:72:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                "data-component-line": "72",
                                "data-component-file": "ImportantDates.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22mb-12%20text-center%22%7D",
                                className: "mb-12 text-center",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("h2", {
                                        "data-lov-id": "src/pages/admissions/ImportantDates.tsx:73:14",
                                        "data-lov-name": "h2",
                                        "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                        "data-component-line": "73",
                                        "data-component-file": "ImportantDates.tsx",
                                        "data-component-name": "h2",
                                        "data-component-content": "%7B%22text%22%3A%22Admission%20Timeline%202024-25%22%2C%22className%22%3A%22text-3xl%20font-bold%20text-school-brown%20mb-4%22%7D",
                                        className: "text-3xl font-bold text-school-brown mb-4",
                                        children: "Admission Timeline 2024-25"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        "data-lov-id": "src/pages/admissions/ImportantDates.tsx:74:14",
                                        "data-lov-name": "p",
                                        "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                        "data-component-line": "74",
                                        "data-component-file": "ImportantDates.tsx",
                                        "data-component-name": "p",
                                        "data-component-content": "%7B%22text%22%3A%22Mark%20your%20calendar%20with%20these%20important%20dates.%20Late%20admissions%20may%20be%20considered%20based%20on%20seat%20availability.%22%2C%22className%22%3A%22text-elegant-light%20max-w-2xl%20mx-auto%22%7D",
                                        className: "text-elegant-light max-w-2xl mx-auto",
                                        children: "Mark your calendar with these important dates. Late admissions may be considered based on seat availability."
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/pages/admissions/ImportantDates.tsx:80:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                "data-component-line": "80",
                                "data-component-file": "ImportantDates.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22max-w-4xl%20mx-auto%22%7D",
                                className: "max-w-4xl mx-auto",
                                children: admissionTimeline.map((item, index)=>/*#__PURE__*/ _jsxDEV("div", {
                                        "data-lov-id": "src/pages/admissions/ImportantDates.tsx:82:16",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                        "data-component-line": "82",
                                        "data-component-file": "ImportantDates.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22className%22%3A%22relative%22%7D",
                                        className: "relative",
                                        children: [
                                            index < admissionTimeline.length - 1 && /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/admissions/ImportantDates.tsx:85:20",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                                "data-component-line": "85",
                                                "data-component-file": "ImportantDates.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22absolute%20left-8%20top-16%20w-0.5%20h-24%20bg-school-gold%2F30%22%7D",
                                                className: "absolute left-8 top-16 w-0.5 h-24 bg-school-gold/30"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                                lineNumber: 85,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/admissions/ImportantDates.tsx:88:18",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                                "data-component-line": "88",
                                                "data-component-file": "ImportantDates.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22flex%20items-start%20space-x-6%20mb-8%22%7D",
                                                className: "flex items-start space-x-6 mb-8",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/pages/admissions/ImportantDates.tsx:90:20",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                                        "data-component-line": "90",
                                                        "data-component-file": "ImportantDates.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%22className%22%3A%22flex-shrink-0%22%7D",
                                                        className: "flex-shrink-0",
                                                        children: /*#__PURE__*/ _jsxDEV("div", {
                                                            "data-lov-id": "src/pages/admissions/ImportantDates.tsx:91:22",
                                                            "data-lov-name": "div",
                                                            "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                                            "data-component-line": "91",
                                                            "data-component-file": "ImportantDates.tsx",
                                                            "data-component-name": "div",
                                                            "data-component-content": "%7B%22className%22%3A%22bg-school-gold%20w-16%20h-16%20rounded-full%20flex%20items-center%20justify-center%20shadow-lg%22%7D",
                                                            className: "bg-school-gold w-16 h-16 rounded-full flex items-center justify-center shadow-lg",
                                                            children: (()=>{
                                                                const IconComponent = getStatusIcon(item.status);
                                                                return /*#__PURE__*/ _jsxDEV(IconComponent, {
                                                                    "data-lov-id": "src/pages/admissions/ImportantDates.tsx:94:33",
                                                                    "data-lov-name": "IconComponent",
                                                                    "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                                                    "data-component-line": "94",
                                                                    "data-component-file": "ImportantDates.tsx",
                                                                    "data-component-name": "IconComponent",
                                                                    "data-component-content": "%7B%22className%22%3A%22h-8%20w-8%20text-white%22%7D",
                                                                    className: "h-8 w-8 text-white"
                                                                }, void 0, false, {
                                                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                                                    lineNumber: 94,
                                                                    columnNumber: 34
                                                                }, this);
                                                            })()
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                                            lineNumber: 91,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV(Card, {
                                                        "data-lov-id": "src/pages/admissions/ImportantDates.tsx:100:20",
                                                        "data-lov-name": "Card",
                                                        "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                                        "data-component-line": "100",
                                                        "data-component-file": "ImportantDates.tsx",
                                                        "data-component-name": "Card",
                                                        "data-component-content": "%7B%22className%22%3A%22flex-1%20hover%3Ashadow-xl%20transition-all%20duration-300%20hover-scale%20animate-fade-in%22%7D",
                                                        className: "flex-1 hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in",
                                                        children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                                            "data-lov-id": "src/pages/admissions/ImportantDates.tsx:101:22",
                                                            "data-lov-name": "CardContent",
                                                            "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                                            "data-component-line": "101",
                                                            "data-component-file": "ImportantDates.tsx",
                                                            "data-component-name": "CardContent",
                                                            "data-component-content": "%7B%22className%22%3A%22p-6%22%7D",
                                                            className: "p-6",
                                                            children: /*#__PURE__*/ _jsxDEV("div", {
                                                                "data-lov-id": "src/pages/admissions/ImportantDates.tsx:102:24",
                                                                "data-lov-name": "div",
                                                                "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                                                "data-component-line": "102",
                                                                "data-component-file": "ImportantDates.tsx",
                                                                "data-component-name": "div",
                                                                "data-component-content": "%7B%22className%22%3A%22flex%20flex-col%20md%3Aflex-row%20md%3Aitems-center%20md%3Ajustify-between%22%7D",
                                                                className: "flex flex-col md:flex-row md:items-center md:justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                                        "data-lov-id": "src/pages/admissions/ImportantDates.tsx:103:26",
                                                                        "data-lov-name": "div",
                                                                        "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                                                        "data-component-line": "103",
                                                                        "data-component-file": "ImportantDates.tsx",
                                                                        "data-component-name": "div",
                                                                        "data-component-content": "%7B%22className%22%3A%22mb-4%20md%3Amb-0%22%7D",
                                                                        className: "mb-4 md:mb-0",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsxDEV("div", {
                                                                                "data-lov-id": "src/pages/admissions/ImportantDates.tsx:104:28",
                                                                                "data-lov-name": "div",
                                                                                "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                                                                "data-component-line": "104",
                                                                                "data-component-file": "ImportantDates.tsx",
                                                                                "data-component-name": "div",
                                                                                "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20space-x-3%20mb-2%22%7D",
                                                                                className: "flex items-center space-x-3 mb-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsxDEV("h3", {
                                                                                        "data-lov-id": "src/pages/admissions/ImportantDates.tsx:105:30",
                                                                                        "data-lov-name": "h3",
                                                                                        "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                                                                        "data-component-line": "105",
                                                                                        "data-component-file": "ImportantDates.tsx",
                                                                                        "data-component-name": "h3",
                                                                                        "data-component-content": "%7B%22className%22%3A%22text-xl%20font-bold%20text-school-brown%22%7D",
                                                                                        className: "text-xl font-bold text-school-brown",
                                                                                        children: item.event
                                                                                    }, void 0, false, {
                                                                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                                                                        lineNumber: 105,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ _jsxDEV("span", {
                                                                                        "data-lov-id": "src/pages/admissions/ImportantDates.tsx:106:30",
                                                                                        "data-lov-name": "span",
                                                                                        "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                                                                        "data-component-line": "106",
                                                                                        "data-component-file": "ImportantDates.tsx",
                                                                                        "data-component-name": "span",
                                                                                        "data-component-content": "%7B%7D",
                                                                                        className: `px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(item.status)}`,
                                                                                        children: item.status.toUpperCase()
                                                                                    }, void 0, false, {
                                                                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                                                                        lineNumber: 106,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                                                                lineNumber: 104,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                                "data-lov-id": "src/pages/admissions/ImportantDates.tsx:110:28",
                                                                                "data-lov-name": "p",
                                                                                "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                                                                "data-component-line": "110",
                                                                                "data-component-file": "ImportantDates.tsx",
                                                                                "data-component-name": "p",
                                                                                "data-component-content": "%7B%22className%22%3A%22text-elegant-light%20mb-2%22%7D",
                                                                                className: "text-elegant-light mb-2",
                                                                                children: item.description
                                                                            }, void 0, false, {
                                                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                                                                lineNumber: 110,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                                                        lineNumber: 103,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                                        "data-lov-id": "src/pages/admissions/ImportantDates.tsx:112:26",
                                                                        "data-lov-name": "div",
                                                                        "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                                                        "data-component-line": "112",
                                                                        "data-component-file": "ImportantDates.tsx",
                                                                        "data-component-name": "div",
                                                                        "data-component-content": "%7B%22className%22%3A%22text-right%22%7D",
                                                                        className: "text-right",
                                                                        children: /*#__PURE__*/ _jsxDEV("p", {
                                                                            "data-lov-id": "src/pages/admissions/ImportantDates.tsx:113:28",
                                                                            "data-lov-name": "p",
                                                                            "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                                                            "data-component-line": "113",
                                                                            "data-component-file": "ImportantDates.tsx",
                                                                            "data-component-name": "p",
                                                                            "data-component-content": "%7B%22className%22%3A%22text-2xl%20font-bold%20text-school-gold%22%7D",
                                                                            className: "text-2xl font-bold text-school-gold",
                                                                            children: item.date
                                                                        }, void 0, false, {
                                                                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                                                            lineNumber: 113,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                                                        lineNumber: 112,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                                                lineNumber: 102,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                                            lineNumber: 101,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                                lineNumber: 88,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, item.event, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                        lineNumber: 82,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("section", {
                    "data-lov-id": "src/pages/admissions/ImportantDates.tsx:126:8",
                    "data-lov-name": "section",
                    "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                    "data-component-line": "126",
                    "data-component-file": "ImportantDates.tsx",
                    "data-component-name": "section",
                    "data-component-content": "%7B%22className%22%3A%22py-16%20bg-gradient-to-r%20from-amber-50%20to-orange-50%22%7D",
                    className: "py-16 bg-gradient-to-r from-amber-50 to-orange-50",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/admissions/ImportantDates.tsx:127:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                        "data-component-line": "127",
                        "data-component-file": "ImportantDates.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                        className: "container mx-auto px-4",
                        children: /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/admissions/ImportantDates.tsx:128:12",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                            "data-component-line": "128",
                            "data-component-file": "ImportantDates.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-2%20lg%3Agrid-cols-3%20gap-8%22%7D",
                            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                            children: [
                                /*#__PURE__*/ _jsxDEV(Card, {
                                    "data-lov-id": "src/pages/admissions/ImportantDates.tsx:129:14",
                                    "data-lov-name": "Card",
                                    "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                    "data-component-line": "129",
                                    "data-component-file": "ImportantDates.tsx",
                                    "data-component-name": "Card",
                                    "data-component-content": "%7B%22className%22%3A%22text-center%20hover%3Ashadow-xl%20transition-all%20duration-300%20hover-scale%22%7D",
                                    className: "text-center hover:shadow-xl transition-all duration-300 hover-scale",
                                    children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                        "data-lov-id": "src/pages/admissions/ImportantDates.tsx:130:16",
                                        "data-lov-name": "CardContent",
                                        "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                        "data-component-line": "130",
                                        "data-component-file": "ImportantDates.tsx",
                                        "data-component-name": "CardContent",
                                        "data-component-content": "%7B%22className%22%3A%22p-6%22%7D",
                                        className: "p-6",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV(Download, {
                                                "data-lov-id": "src/pages/admissions/ImportantDates.tsx:131:18",
                                                "data-lov-name": "Download",
                                                "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                                "data-component-line": "131",
                                                "data-component-file": "ImportantDates.tsx",
                                                "data-component-name": "Download",
                                                "data-component-content": "%7B%22className%22%3A%22h-12%20w-12%20text-school-gold%20mx-auto%20mb-4%22%7D",
                                                className: "h-12 w-12 text-school-gold mx-auto mb-4"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                                lineNumber: 131,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("h3", {
                                                "data-lov-id": "src/pages/admissions/ImportantDates.tsx:132:18",
                                                "data-lov-name": "h3",
                                                "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                                "data-component-line": "132",
                                                "data-component-file": "ImportantDates.tsx",
                                                "data-component-name": "h3",
                                                "data-component-content": "%7B%22text%22%3A%22Download%20Calendar%22%2C%22className%22%3A%22text-lg%20font-bold%20text-school-brown%20mb-3%22%7D",
                                                className: "text-lg font-bold text-school-brown mb-3",
                                                children: "Download Calendar"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                                lineNumber: 132,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("p", {
                                                "data-lov-id": "src/pages/admissions/ImportantDates.tsx:133:18",
                                                "data-lov-name": "p",
                                                "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                                "data-component-line": "133",
                                                "data-component-file": "ImportantDates.tsx",
                                                "data-component-name": "p",
                                                "data-component-content": "%7B%22text%22%3A%22Get%20the%20complete%20academic%20calendar%20on%20your%20device%22%2C%22className%22%3A%22text-elegant-light%20mb-4%22%7D",
                                                className: "text-elegant-light mb-4",
                                                children: "Get the complete academic calendar on your device"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                                lineNumber: 133,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV(Button, {
                                                "data-lov-id": "src/pages/admissions/ImportantDates.tsx:134:18",
                                                "data-lov-name": "Button",
                                                "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                                "data-component-line": "134",
                                                "data-component-file": "ImportantDates.tsx",
                                                "data-component-name": "Button",
                                                "data-component-content": "%7B%22text%22%3A%22Download%20.ics%20File%22%2C%22className%22%3A%22border-school-gold%20text-school-brown%20hover%3Abg-school-gold%20hover%3Atext-white%22%7D",
                                                variant: "outline",
                                                className: "border-school-gold text-school-brown hover:bg-school-gold hover:text-white",
                                                children: "Download .ics File"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                                lineNumber: 134,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                        lineNumber: 130,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV(Card, {
                                    "data-lov-id": "src/pages/admissions/ImportantDates.tsx:140:14",
                                    "data-lov-name": "Card",
                                    "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                    "data-component-line": "140",
                                    "data-component-file": "ImportantDates.tsx",
                                    "data-component-name": "Card",
                                    "data-component-content": "%7B%22className%22%3A%22text-center%20hover%3Ashadow-xl%20transition-all%20duration-300%20hover-scale%22%7D",
                                    className: "text-center hover:shadow-xl transition-all duration-300 hover-scale",
                                    children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                        "data-lov-id": "src/pages/admissions/ImportantDates.tsx:141:16",
                                        "data-lov-name": "CardContent",
                                        "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                        "data-component-line": "141",
                                        "data-component-file": "ImportantDates.tsx",
                                        "data-component-name": "CardContent",
                                        "data-component-content": "%7B%22className%22%3A%22p-6%22%7D",
                                        className: "p-6",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV(Bell, {
                                                "data-lov-id": "src/pages/admissions/ImportantDates.tsx:142:18",
                                                "data-lov-name": "Bell",
                                                "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                                "data-component-line": "142",
                                                "data-component-file": "ImportantDates.tsx",
                                                "data-component-name": "Bell",
                                                "data-component-content": "%7B%22className%22%3A%22h-12%20w-12%20text-school-gold%20mx-auto%20mb-4%22%7D",
                                                className: "h-12 w-12 text-school-gold mx-auto mb-4"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                                lineNumber: 142,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("h3", {
                                                "data-lov-id": "src/pages/admissions/ImportantDates.tsx:143:18",
                                                "data-lov-name": "h3",
                                                "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                                "data-component-line": "143",
                                                "data-component-file": "ImportantDates.tsx",
                                                "data-component-name": "h3",
                                                "data-component-content": "%7B%22text%22%3A%22Set%20Reminders%22%2C%22className%22%3A%22text-lg%20font-bold%20text-school-brown%20mb-3%22%7D",
                                                className: "text-lg font-bold text-school-brown mb-3",
                                                children: "Set Reminders"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                                lineNumber: 143,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("p", {
                                                "data-lov-id": "src/pages/admissions/ImportantDates.tsx:144:18",
                                                "data-lov-name": "p",
                                                "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                                "data-component-line": "144",
                                                "data-component-file": "ImportantDates.tsx",
                                                "data-component-name": "p",
                                                "data-component-content": "%7B%22text%22%3A%22Never%20miss%20an%20important%20deadline%22%2C%22className%22%3A%22text-elegant-light%20mb-4%22%7D",
                                                className: "text-elegant-light mb-4",
                                                children: "Never miss an important deadline"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                                lineNumber: 144,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV(Button, {
                                                "data-lov-id": "src/pages/admissions/ImportantDates.tsx:145:18",
                                                "data-lov-name": "Button",
                                                "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                                "data-component-line": "145",
                                                "data-component-file": "ImportantDates.tsx",
                                                "data-component-name": "Button",
                                                "data-component-content": "%7B%22text%22%3A%22Add%20to%20Google%20Calendar%22%2C%22className%22%3A%22border-school-gold%20text-school-brown%20hover%3Abg-school-gold%20hover%3Atext-white%22%7D",
                                                variant: "outline",
                                                className: "border-school-gold text-school-brown hover:bg-school-gold hover:text-white",
                                                children: "Add to Google Calendar"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                                lineNumber: 145,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                        lineNumber: 141,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV(Card, {
                                    "data-lov-id": "src/pages/admissions/ImportantDates.tsx:151:14",
                                    "data-lov-name": "Card",
                                    "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                    "data-component-line": "151",
                                    "data-component-file": "ImportantDates.tsx",
                                    "data-component-name": "Card",
                                    "data-component-content": "%7B%22className%22%3A%22text-center%20hover%3Ashadow-xl%20transition-all%20duration-300%20hover-scale%22%7D",
                                    className: "text-center hover:shadow-xl transition-all duration-300 hover-scale",
                                    children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                        "data-lov-id": "src/pages/admissions/ImportantDates.tsx:152:16",
                                        "data-lov-name": "CardContent",
                                        "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                        "data-component-line": "152",
                                        "data-component-file": "ImportantDates.tsx",
                                        "data-component-name": "CardContent",
                                        "data-component-content": "%7B%22className%22%3A%22p-6%22%7D",
                                        className: "p-6",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV(AlertCircle, {
                                                "data-lov-id": "src/pages/admissions/ImportantDates.tsx:153:18",
                                                "data-lov-name": "AlertCircle",
                                                "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                                "data-component-line": "153",
                                                "data-component-file": "ImportantDates.tsx",
                                                "data-component-name": "AlertCircle",
                                                "data-component-content": "%7B%22className%22%3A%22h-12%20w-12%20text-school-gold%20mx-auto%20mb-4%22%7D",
                                                className: "h-12 w-12 text-school-gold mx-auto mb-4"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                                lineNumber: 153,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("h3", {
                                                "data-lov-id": "src/pages/admissions/ImportantDates.tsx:154:18",
                                                "data-lov-name": "h3",
                                                "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                                "data-component-line": "154",
                                                "data-component-file": "ImportantDates.tsx",
                                                "data-component-name": "h3",
                                                "data-component-content": "%7B%22text%22%3A%22Stay%20Updated%22%2C%22className%22%3A%22text-lg%20font-bold%20text-school-brown%20mb-3%22%7D",
                                                className: "text-lg font-bold text-school-brown mb-3",
                                                children: "Stay Updated"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                                lineNumber: 154,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("p", {
                                                "data-lov-id": "src/pages/admissions/ImportantDates.tsx:155:18",
                                                "data-lov-name": "p",
                                                "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                                "data-component-line": "155",
                                                "data-component-file": "ImportantDates.tsx",
                                                "data-component-name": "p",
                                                "data-component-content": "%7B%22text%22%3A%22Get%20notifications%20for%20any%20date%20changes%22%2C%22className%22%3A%22text-elegant-light%20mb-4%22%7D",
                                                className: "text-elegant-light mb-4",
                                                children: "Get notifications for any date changes"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                                lineNumber: 155,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV(Button, {
                                                "data-lov-id": "src/pages/admissions/ImportantDates.tsx:156:18",
                                                "data-lov-name": "Button",
                                                "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                                "data-component-line": "156",
                                                "data-component-file": "ImportantDates.tsx",
                                                "data-component-name": "Button",
                                                "data-component-content": "%7B%22text%22%3A%22Subscribe%20to%20Updates%22%2C%22className%22%3A%22bg-school-gold%20hover%3Abg-school-brown%20text-white%22%7D",
                                                className: "bg-school-gold hover:bg-school-brown text-white",
                                                children: "Subscribe to Updates"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                                lineNumber: 156,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                        lineNumber: 152,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                            lineNumber: 128,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("section", {
                    "data-lov-id": "src/pages/admissions/ImportantDates.tsx:166:8",
                    "data-lov-name": "section",
                    "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                    "data-component-line": "166",
                    "data-component-file": "ImportantDates.tsx",
                    "data-component-name": "section",
                    "data-component-content": "%7B%22className%22%3A%22py-16%22%7D",
                    className: "py-16",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/admissions/ImportantDates.tsx:167:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                        "data-component-line": "167",
                        "data-component-file": "ImportantDates.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                        className: "container mx-auto px-4",
                        children: /*#__PURE__*/ _jsxDEV(Card, {
                            "data-lov-id": "src/pages/admissions/ImportantDates.tsx:168:12",
                            "data-lov-name": "Card",
                            "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                            "data-component-line": "168",
                            "data-component-file": "ImportantDates.tsx",
                            "data-component-name": "Card",
                            "data-component-content": "%7B%22className%22%3A%22max-w-4xl%20mx-auto%20bg-gradient-to-r%20from-blue-50%20to-purple-50%22%7D",
                            className: "max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50",
                            children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                "data-lov-id": "src/pages/admissions/ImportantDates.tsx:169:14",
                                "data-lov-name": "CardContent",
                                "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                "data-component-line": "169",
                                "data-component-file": "ImportantDates.tsx",
                                "data-component-name": "CardContent",
                                "data-component-content": "%7B%22className%22%3A%22p-8%22%7D",
                                className: "p-8",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("h3", {
                                        "data-lov-id": "src/pages/admissions/ImportantDates.tsx:170:16",
                                        "data-lov-name": "h3",
                                        "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                        "data-component-line": "170",
                                        "data-component-file": "ImportantDates.tsx",
                                        "data-component-name": "h3",
                                        "data-component-content": "%7B%22text%22%3A%22Important%20Notes%22%2C%22className%22%3A%22text-2xl%20font-bold%20text-school-brown%20mb-6%20text-center%22%7D",
                                        className: "text-2xl font-bold text-school-brown mb-6 text-center",
                                        children: "Important Notes"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                        lineNumber: 170,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        "data-lov-id": "src/pages/admissions/ImportantDates.tsx:171:16",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                        "data-component-line": "171",
                                        "data-component-file": "ImportantDates.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-2%20gap-6%22%7D",
                                        className: "grid md:grid-cols-2 gap-6",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/admissions/ImportantDates.tsx:172:18",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                                "data-component-line": "172",
                                                "data-component-file": "ImportantDates.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%7D",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("h4", {
                                                        "data-lov-id": "src/pages/admissions/ImportantDates.tsx:173:20",
                                                        "data-lov-name": "h4",
                                                        "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                                        "data-component-line": "173",
                                                        "data-component-file": "ImportantDates.tsx",
                                                        "data-component-name": "h4",
                                                        "data-component-content": "%7B%22text%22%3A%22Late%20Admissions%22%2C%22className%22%3A%22font-semibold%20text-school-brown%20mb-2%22%7D",
                                                        className: "font-semibold text-school-brown mb-2",
                                                        children: "Late Admissions"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("p", {
                                                        "data-lov-id": "src/pages/admissions/ImportantDates.tsx:174:20",
                                                        "data-lov-name": "p",
                                                        "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                                        "data-component-line": "174",
                                                        "data-component-file": "ImportantDates.tsx",
                                                        "data-component-name": "p",
                                                        "data-component-content": "%7B%22text%22%3A%22Late%20admissions%20may%20be%20considered%20based%20on%20seat%20availability.%20Additional%20documentation%20may%20be%20required.%22%2C%22className%22%3A%22text-elegant-light%20text-sm%22%7D",
                                                        className: "text-elegant-light text-sm",
                                                        children: "Late admissions may be considered based on seat availability. Additional documentation may be required."
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                                lineNumber: 172,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/admissions/ImportantDates.tsx:178:18",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                                "data-component-line": "178",
                                                "data-component-file": "ImportantDates.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%7D",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("h4", {
                                                        "data-lov-id": "src/pages/admissions/ImportantDates.tsx:179:20",
                                                        "data-lov-name": "h4",
                                                        "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                                        "data-component-line": "179",
                                                        "data-component-file": "ImportantDates.tsx",
                                                        "data-component-name": "h4",
                                                        "data-component-content": "%7B%22text%22%3A%22Document%20Verification%22%2C%22className%22%3A%22font-semibold%20text-school-brown%20mb-2%22%7D",
                                                        className: "font-semibold text-school-brown mb-2",
                                                        children: "Document Verification"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("p", {
                                                        "data-lov-id": "src/pages/admissions/ImportantDates.tsx:180:20",
                                                        "data-lov-name": "p",
                                                        "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                                        "data-component-line": "180",
                                                        "data-component-file": "ImportantDates.tsx",
                                                        "data-component-name": "p",
                                                        "data-component-content": "%7B%22text%22%3A%22All%20original%20documents%20must%20be%20presented%20during%20the%20admission%20confirmation%20process.%22%2C%22className%22%3A%22text-elegant-light%20text-sm%22%7D",
                                                        className: "text-elegant-light text-sm",
                                                        children: "All original documents must be presented during the admission confirmation process."
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                                lineNumber: 178,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/admissions/ImportantDates.tsx:184:18",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                                "data-component-line": "184",
                                                "data-component-file": "ImportantDates.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%7D",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("h4", {
                                                        "data-lov-id": "src/pages/admissions/ImportantDates.tsx:185:20",
                                                        "data-lov-name": "h4",
                                                        "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                                        "data-component-line": "185",
                                                        "data-component-file": "ImportantDates.tsx",
                                                        "data-component-name": "h4",
                                                        "data-component-content": "%7B%22text%22%3A%22Fee%20Payment%22%2C%22className%22%3A%22font-semibold%20text-school-brown%20mb-2%22%7D",
                                                        className: "font-semibold text-school-brown mb-2",
                                                        children: "Fee Payment"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("p", {
                                                        "data-lov-id": "src/pages/admissions/ImportantDates.tsx:186:20",
                                                        "data-lov-name": "p",
                                                        "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                                        "data-component-line": "186",
                                                        "data-component-file": "ImportantDates.tsx",
                                                        "data-component-name": "p",
                                                        "data-component-content": "%7B%22text%22%3A%22First-term%20fees%20must%20be%20paid%20within%207%20days%20of%20admission%20confirmation%20to%20secure%20the%20seat.%22%2C%22className%22%3A%22text-elegant-light%20text-sm%22%7D",
                                                        className: "text-elegant-light text-sm",
                                                        children: "First-term fees must be paid within 7 days of admission confirmation to secure the seat."
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                                lineNumber: 184,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/admissions/ImportantDates.tsx:190:18",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                                "data-component-line": "190",
                                                "data-component-file": "ImportantDates.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%7D",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("h4", {
                                                        "data-lov-id": "src/pages/admissions/ImportantDates.tsx:191:20",
                                                        "data-lov-name": "h4",
                                                        "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                                        "data-component-line": "191",
                                                        "data-component-file": "ImportantDates.tsx",
                                                        "data-component-name": "h4",
                                                        "data-component-content": "%7B%22text%22%3A%22Contact%20Support%22%2C%22className%22%3A%22font-semibold%20text-school-brown%20mb-2%22%7D",
                                                        className: "font-semibold text-school-brown mb-2",
                                                        children: "Contact Support"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("p", {
                                                        "data-lov-id": "src/pages/admissions/ImportantDates.tsx:192:20",
                                                        "data-lov-name": "p",
                                                        "data-component-path": "src/pages/admissions/ImportantDates.tsx",
                                                        "data-component-line": "192",
                                                        "data-component-file": "ImportantDates.tsx",
                                                        "data-component-name": "p",
                                                        "data-component-content": "%7B%22text%22%3A%22For%20any%20queries%20regarding%20dates%20or%20admission%20process%2C%20contact%20our%20admissions%20office.%22%2C%22className%22%3A%22text-elegant-light%20text-sm%22%7D",
                                                        className: "text-elegant-light text-sm",
                                                        children: "For any queries regarding dates or admission process, contact our admissions office."
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                                lineNumber: 190,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                        lineNumber: 171,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                                lineNumber: 169,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                            lineNumber: 168,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
                    lineNumber: 166,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
};
_c = ImportantDates;
export default ImportantDates;
var _c;
$RefreshReg$(_c, "ImportantDates");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/pages/admissions/ImportantDates.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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RDtLQW5NTWhCO0FBcU1OLGVBQWVBLGVBQWMiLCJuYW1lcyI6WyJMYXlvdXQiLCJQYWdlQmFubmVyIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQnV0dG9uIiwiQ2FsZW5kYXIiLCJDbG9jayIsIkFsZXJ0Q2lyY2xlIiwiRG93bmxvYWQiLCJCZWxsIiwiYWRtaXNzaW9uc0Jhbm5lciIsIkltcG9ydGFudERhdGVzIiwiYWRtaXNzaW9uVGltZWxpbmUiLCJldmVudCIsImRhdGUiLCJzdGF0dXMiLCJkZXNjcmlwdGlvbiIsImdldFN0YXR1c0NvbG9yIiwiZ2V0U3RhdHVzSWNvbiIsImRhdGEtbG92LWlkIiwiZGF0YS1sb3YtbmFtZSIsImRhdGEtY29tcG9uZW50LXBhdGgiLCJkYXRhLWNvbXBvbmVudC1saW5lIiwiZGF0YS1jb21wb25lbnQtZmlsZSIsImRhdGEtY29tcG9uZW50LW5hbWUiLCJkYXRhLWNvbXBvbmVudC1jb250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJzdWJ0aXRsZSIsImJhY2tncm91bmRJbWFnZSIsInNlY3Rpb24iLCJoMiIsInAiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJsZW5ndGgiLCJJY29uQ29tcG9uZW50IiwiaDMiLCJzcGFuIiwidG9VcHBlckNhc2UiLCJ2YXJpYW50IiwiaDQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiSW1wb3J0YW50RGF0ZXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFBhZ2VCYW5uZXIgZnJvbSBcIkAvY29tcG9uZW50cy9QYWdlQmFubmVyXCI7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IENhbGVuZGFyLCBDbG9jaywgQWxlcnRDaXJjbGUsIERvd25sb2FkLCBCZWxsIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IGFkbWlzc2lvbnNCYW5uZXIgZnJvbSBcIkAvYXNzZXRzL2FkbWlzc2lvbnMtYmFubmVyLmpwZ1wiO1xuXG5jb25zdCBJbXBvcnRhbnREYXRlcyA9ICgpID0+IHtcbiAgY29uc3QgYWRtaXNzaW9uVGltZWxpbmUgPSBbXG4gICAgeyBcbiAgICAgIGV2ZW50OiBcIkFkbWlzc2lvbiBPcGVuc1wiLCBcbiAgICAgIGRhdGU6IFwiSmFudWFyeSAxNSwgMjAyNVwiLFxuICAgICAgc3RhdHVzOiBcInVwY29taW5nXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJPbmxpbmUgYW5kIG9mZmxpbmUgYXBwbGljYXRpb24gZm9ybXMgYmVjb21lIGF2YWlsYWJsZVwiXG4gICAgfSxcbiAgICB7IFxuICAgICAgZXZlbnQ6IFwiQXBwbGljYXRpb24gRGVhZGxpbmVcIiwgXG4gICAgICBkYXRlOiBcIk1hcmNoIDEwLCAyMDI1XCIsXG4gICAgICBzdGF0dXM6IFwiZGVhZGxpbmVcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkxhc3QgZGF0ZSB0byBzdWJtaXQgY29tcGxldGVkIGFwcGxpY2F0aW9uIGZvcm1zXCJcbiAgICB9LFxuICAgIHsgXG4gICAgICBldmVudDogXCJBc3Nlc3NtZW50L0ludGVyYWN0aW9uIFJvdW5kc1wiLCBcbiAgICAgIGRhdGU6IFwiTWFyY2ggMTUtMjUsIDIwMjVcIixcbiAgICAgIHN0YXR1czogXCJ1cGNvbWluZ1wiLFxuICAgICAgZGVzY3JpcHRpb246IFwiU3R1ZGVudCBpbnRlcmFjdGlvbiBzZXNzaW9ucyBhbmQgYXB0aXR1ZGUgYXNzZXNzbWVudHNcIlxuICAgIH0sXG4gICAgeyBcbiAgICAgIGV2ZW50OiBcIkFkbWlzc2lvbiBDb25maXJtYXRpb25cIiwgXG4gICAgICBkYXRlOiBcIk1hcmNoIDMwLCAyMDI1XCIsXG4gICAgICBzdGF0dXM6IFwidXBjb21pbmdcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkZpbmFsIGFkbWlzc2lvbiBsaXN0IGFubm91bmNlbWVudCBhbmQgZmVlIHBheW1lbnRcIlxuICAgIH0sXG4gICAgeyBcbiAgICAgIGV2ZW50OiBcIkZpcnN0IERheSBvZiBTY2hvb2xcIiwgXG4gICAgICBkYXRlOiBcIkp1bmUgMywgMjAyNVwiLFxuICAgICAgc3RhdHVzOiBcImFjYWRlbWljXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJBY2FkZW1pYyBzZXNzaW9uIGJlZ2lucyBmb3IgYWxsIGdyYWRlc1wiXG4gICAgfVxuICBdO1xuXG4gIGNvbnN0IGdldFN0YXR1c0NvbG9yID0gKHN0YXR1czogc3RyaW5nKSA9PiB7XG4gICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgIGNhc2UgJ2RlYWRsaW5lJzogcmV0dXJuICdiZy1yZWQtMTAwIGJvcmRlci1yZWQtMzAwIHRleHQtcmVkLTcwMCc7XG4gICAgICBjYXNlICd1cGNvbWluZyc6IHJldHVybiAnYmctYmx1ZS0xMDAgYm9yZGVyLWJsdWUtMzAwIHRleHQtYmx1ZS03MDAnO1xuICAgICAgY2FzZSAnYWNhZGVtaWMnOiByZXR1cm4gJ2JnLWdyZWVuLTEwMCBib3JkZXItZ3JlZW4tMzAwIHRleHQtZ3JlZW4tNzAwJztcbiAgICAgIGRlZmF1bHQ6IHJldHVybiAnYmctZ3JheS0xMDAgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS03MDAnO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRTdGF0dXNJY29uID0gKHN0YXR1czogc3RyaW5nKSA9PiB7XG4gICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgIGNhc2UgJ2RlYWRsaW5lJzogcmV0dXJuIEFsZXJ0Q2lyY2xlO1xuICAgICAgY2FzZSAndXBjb21pbmcnOiByZXR1cm4gQ2xvY2s7XG4gICAgICBjYXNlICdhY2FkZW1pYyc6IHJldHVybiBDYWxlbmRhcjtcbiAgICAgIGRlZmF1bHQ6IHJldHVybiBDYWxlbmRhcjtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctYmFja2dyb3VuZFwiPlxuICAgICAgICA8UGFnZUJhbm5lclxuICAgICAgICAgIHRpdGxlPVwiSW1wb3J0YW50IERhdGVzXCJcbiAgICAgICAgICBzdWJ0aXRsZT1cIlN0YXkgdXBkYXRlZCB3aXRoIHRoZSBhY2FkZW1pYyBjYWxlbmRhciBhbmQgYWRtaXNzaW9uIG1pbGVzdG9uZXMgZm9yIHRoZSAyMDI0LTI1IGFjYWRlbWljIHllYXJcIlxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZT17YWRtaXNzaW9uc0Jhbm5lcn1cbiAgICAgICAgLz5cblxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtc2Nob29sLWJyb3duIG1iLTRcIj5BZG1pc3Npb24gVGltZWxpbmUgMjAyNC0yNTwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZWxlZ2FudC1saWdodCBtYXgtdy0yeGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgIE1hcmsgeW91ciBjYWxlbmRhciB3aXRoIHRoZXNlIGltcG9ydGFudCBkYXRlcy4gTGF0ZSBhZG1pc3Npb25zIG1heSBiZSBjb25zaWRlcmVkIGJhc2VkIG9uIHNlYXQgYXZhaWxhYmlsaXR5LlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIFRpbWVsaW5lIExheW91dCAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNHhsIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAge2FkbWlzc2lvblRpbWVsaW5lLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5ldmVudH0gY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgIHsvKiBUaW1lbGluZSBsaW5lICovfVxuICAgICAgICAgICAgICAgICAge2luZGV4IDwgYWRtaXNzaW9uVGltZWxpbmUubGVuZ3RoIC0gMSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC04IHRvcC0xNiB3LTAuNSBoLTI0IGJnLXNjaG9vbC1nb2xkLzMwXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgc3BhY2UteC02IG1iLThcIj5cbiAgICAgICAgICAgICAgICAgICAgey8qIFRpbWVsaW5lIGRvdCB3aXRoIGljb24gKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2Nob29sLWdvbGQgdy0xNiBoLTE2IHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzaGFkb3ctbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBJY29uQ29tcG9uZW50ID0gZ2V0U3RhdHVzSWNvbihpdGVtLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8SWNvbkNvbXBvbmVudCBjbGFzc05hbWU9XCJoLTggdy04IHRleHQtd2hpdGVcIiAvPjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKCl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgey8qIENvbnRlbnQgKi99XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImZsZXgtMSBob3ZlcjpzaGFkb3cteGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGhvdmVyLXNjYWxlIGFuaW1hdGUtZmFkZS1pblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBtZDppdGVtcy1jZW50ZXIgbWQ6anVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCBtZDptYi0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTMgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtc2Nob29sLWJyb3duXCI+e2l0ZW0uZXZlbnR9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHB4LTMgcHktMSByb3VuZGVkLWZ1bGwgdGV4dC14cyBmb250LXNlbWlib2xkIGJvcmRlciAke2dldFN0YXR1c0NvbG9yKGl0ZW0uc3RhdHVzKX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uc3RhdHVzLnRvVXBwZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1lbGVnYW50LWxpZ2h0IG1iLTJcIj57aXRlbS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1zY2hvb2wtZ29sZFwiPntpdGVtLmRhdGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgey8qIFF1aWNrIEFjdGlvbnMgKi99XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTE2IGJnLWdyYWRpZW50LXRvLXIgZnJvbS1hbWJlci01MCB0by1vcmFuZ2UtNTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtOFwiPlxuICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBob3ZlcjpzaGFkb3cteGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGhvdmVyLXNjYWxlXCI+XG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtNlwiPlxuICAgICAgICAgICAgICAgICAgPERvd25sb2FkIGNsYXNzTmFtZT1cImgtMTIgdy0xMiB0ZXh0LXNjaG9vbC1nb2xkIG14LWF1dG8gbWItNFwiIC8+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gbWItM1wiPkRvd25sb2FkIENhbGVuZGFyPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZWxlZ2FudC1saWdodCBtYi00XCI+R2V0IHRoZSBjb21wbGV0ZSBhY2FkZW1pYyBjYWxlbmRhciBvbiB5b3VyIGRldmljZTwvcD5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIiBjbGFzc05hbWU9XCJib3JkZXItc2Nob29sLWdvbGQgdGV4dC1zY2hvb2wtYnJvd24gaG92ZXI6Ymctc2Nob29sLWdvbGQgaG92ZXI6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICBEb3dubG9hZCAuaWNzIEZpbGVcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cblxuICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBob3ZlcjpzaGFkb3cteGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGhvdmVyLXNjYWxlXCI+XG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtNlwiPlxuICAgICAgICAgICAgICAgICAgPEJlbGwgY2xhc3NOYW1lPVwiaC0xMiB3LTEyIHRleHQtc2Nob29sLWdvbGQgbXgtYXV0byBtYi00XCIgLz5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LXNjaG9vbC1icm93biBtYi0zXCI+U2V0IFJlbWluZGVyczwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWVsZWdhbnQtbGlnaHQgbWItNFwiPk5ldmVyIG1pc3MgYW4gaW1wb3J0YW50IGRlYWRsaW5lPC9wPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZVwiIGNsYXNzTmFtZT1cImJvcmRlci1zY2hvb2wtZ29sZCB0ZXh0LXNjaG9vbC1icm93biBob3ZlcjpiZy1zY2hvb2wtZ29sZCBob3Zlcjp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIEFkZCB0byBHb29nbGUgQ2FsZW5kYXJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cblxuICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBob3ZlcjpzaGFkb3cteGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGhvdmVyLXNjYWxlXCI+XG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtNlwiPlxuICAgICAgICAgICAgICAgICAgPEFsZXJ0Q2lyY2xlIGNsYXNzTmFtZT1cImgtMTIgdy0xMiB0ZXh0LXNjaG9vbC1nb2xkIG14LWF1dG8gbWItNFwiIC8+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gbWItM1wiPlN0YXkgVXBkYXRlZDwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWVsZWdhbnQtbGlnaHQgbWItNFwiPkdldCBub3RpZmljYXRpb25zIGZvciBhbnkgZGF0ZSBjaGFuZ2VzPC9wPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJiZy1zY2hvb2wtZ29sZCBob3ZlcjpiZy1zY2hvb2wtYnJvd24gdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICBTdWJzY3JpYmUgdG8gVXBkYXRlc1xuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICB7LyogSW1wb3J0YW50IE5vdGVzICovfVxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwibWF4LXctNHhsIG14LWF1dG8gYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsdWUtNTAgdG8tcHVycGxlLTUwXCI+XG4gICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLThcIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtc2Nob29sLWJyb3duIG1iLTYgdGV4dC1jZW50ZXJcIj5JbXBvcnRhbnQgTm90ZXM8L2gzPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMiBnYXAtNlwiPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gbWItMlwiPkxhdGUgQWRtaXNzaW9uczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZWxlZ2FudC1saWdodCB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgTGF0ZSBhZG1pc3Npb25zIG1heSBiZSBjb25zaWRlcmVkIGJhc2VkIG9uIHNlYXQgYXZhaWxhYmlsaXR5LiBBZGRpdGlvbmFsIGRvY3VtZW50YXRpb24gbWF5IGJlIHJlcXVpcmVkLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtc2Nob29sLWJyb3duIG1iLTJcIj5Eb2N1bWVudCBWZXJpZmljYXRpb248L2g0PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWVsZWdhbnQtbGlnaHQgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIEFsbCBvcmlnaW5hbCBkb2N1bWVudHMgbXVzdCBiZSBwcmVzZW50ZWQgZHVyaW5nIHRoZSBhZG1pc3Npb24gY29uZmlybWF0aW9uIHByb2Nlc3MuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gbWItMlwiPkZlZSBQYXltZW50PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1lbGVnYW50LWxpZ2h0IHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICBGaXJzdC10ZXJtIGZlZXMgbXVzdCBiZSBwYWlkIHdpdGhpbiA3IGRheXMgb2YgYWRtaXNzaW9uIGNvbmZpcm1hdGlvbiB0byBzZWN1cmUgdGhlIHNlYXQuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gbWItMlwiPkNvbnRhY3QgU3VwcG9ydDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZWxlZ2FudC1saWdodCB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgRm9yIGFueSBxdWVyaWVzIHJlZ2FyZGluZyBkYXRlcyBvciBhZG1pc3Npb24gcHJvY2VzcywgY29udGFjdCBvdXIgYWRtaXNzaW9ucyBvZmZpY2UuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltcG9ydGFudERhdGVzO1xuIl0sImZpbGUiOiIvaG9tZS9zanJzaDkxNi9wdWJsaWNfaHRtbC9zcmMvcGFnZXMvYWRtaXNzaW9ucy9JbXBvcnRhbnREYXRlcy50c3gifQ==