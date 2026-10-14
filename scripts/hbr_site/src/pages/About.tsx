import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/About.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/pages/About.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import Layout from "/src/components/Layout.tsx";
import PageBanner from "/src/components/PageBanner.tsx";
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { BookOpen, Users, Award, Shield } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=5efa796b";
import indianSchoolAssembly from "/src/assets/indian-school-assembly.jpg?import";
const About = ()=>{
    const sections = [
        {
            title: "About SJRPS-HBR",
            description: "Discover our rich history, ethos, and educational philosophy",
            link: "/about/sjrc",
            icon: BookOpen,
            color: "bg-blue-50"
        },
        {
            title: "Vision & Mission",
            description: "Our guiding principles and commitment to excellence",
            link: "/about/vision-mission",
            icon: Award,
            color: "bg-amber-50"
        },
        {
            title: "Principal's Message",
            description: "A word from our academic leader",
            link: "/about/principal-message",
            icon: Users,
            color: "bg-green-50"
        },
        {
            title: "Leadership Team",
            description: "Meet our dedicated faculty and administrators",
            link: "/about/leadership",
            icon: Shield,
            color: "bg-purple-50"
        }
    ];
    return /*#__PURE__*/ _jsxDEV(Layout, {
        "data-lov-id": "src/pages/About.tsx:43:4",
        "data-lov-name": "Layout",
        "data-component-path": "src/pages/About.tsx",
        "data-component-line": "43",
        "data-component-file": "About.tsx",
        "data-component-name": "Layout",
        "data-component-content": "%7B%7D",
        children: /*#__PURE__*/ _jsxDEV("div", {
            "data-lov-id": "src/pages/About.tsx:44:6",
            "data-lov-name": "div",
            "data-component-path": "src/pages/About.tsx",
            "data-component-line": "44",
            "data-component-file": "About.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22min-h-screen%20bg-background%22%7D",
            className: "min-h-screen bg-background",
            children: [
                /*#__PURE__*/ _jsxDEV(PageBanner, {
                    "data-lov-id": "src/pages/About.tsx:45:8",
                    "data-lov-name": "PageBanner",
                    "data-component-path": "src/pages/About.tsx",
                    "data-component-line": "45",
                    "data-component-file": "About.tsx",
                    "data-component-name": "PageBanner",
                    "data-component-content": "%7B%7D",
                    title: "About Our School",
                    subtitle: "Discover the story, values, and vision that drive SJR Public School, HBR Layout",
                    backgroundImage: indianSchoolAssembly
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/About.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("section", {
                    "data-lov-id": "src/pages/About.tsx:52:8",
                    "data-lov-name": "section",
                    "data-component-path": "src/pages/About.tsx",
                    "data-component-line": "52",
                    "data-component-file": "About.tsx",
                    "data-component-name": "section",
                    "data-component-content": "%7B%22className%22%3A%22py-16%22%7D",
                    className: "py-16",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/About.tsx:53:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/About.tsx",
                        "data-component-line": "53",
                        "data-component-file": "About.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                        className: "container mx-auto px-4",
                        children: /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/About.tsx:54:12",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/About.tsx",
                            "data-component-line": "54",
                            "data-component-file": "About.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-2%20gap-8%22%7D",
                            className: "grid md:grid-cols-2 gap-8",
                            children: sections.map((section, index)=>/*#__PURE__*/ _jsxDEV(Card, {
                                    "data-lov-id": "src/pages/About.tsx:56:16",
                                    "data-lov-name": "Card",
                                    "data-component-path": "src/pages/About.tsx",
                                    "data-component-line": "56",
                                    "data-component-file": "About.tsx",
                                    "data-component-name": "Card",
                                    "data-component-content": "%7B%7D",
                                    className: `${section.color} hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in`,
                                    children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                        "data-lov-id": "src/pages/About.tsx:57:18",
                                        "data-lov-name": "CardContent",
                                        "data-component-path": "src/pages/About.tsx",
                                        "data-component-line": "57",
                                        "data-component-file": "About.tsx",
                                        "data-component-name": "CardContent",
                                        "data-component-content": "%7B%22className%22%3A%22p-8%20text-center%22%7D",
                                        className: "p-8 text-center",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/About.tsx:58:20",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/About.tsx",
                                                "data-component-line": "58",
                                                "data-component-file": "About.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22bg-school-gold%20w-16%20h-16%20rounded-full%20flex%20items-center%20justify-center%20mx-auto%20mb-6%22%7D",
                                                className: "bg-school-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6",
                                                children: /*#__PURE__*/ _jsxDEV(section.icon, {
                                                    "data-lov-id": "src/pages/About.tsx:59:22",
                                                    "data-lov-name": "section.icon",
                                                    "data-component-path": "src/pages/About.tsx",
                                                    "data-component-line": "59",
                                                    "data-component-file": "About.tsx",
                                                    "data-component-name": "section.icon",
                                                    "data-component-content": "%7B%22className%22%3A%22h-8%20w-8%20text-white%22%7D",
                                                    className: "h-8 w-8 text-white"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/About.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/About.tsx",
                                                lineNumber: 58,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("h3", {
                                                "data-lov-id": "src/pages/About.tsx:61:20",
                                                "data-lov-name": "h3",
                                                "data-component-path": "src/pages/About.tsx",
                                                "data-component-line": "61",
                                                "data-component-file": "About.tsx",
                                                "data-component-name": "h3",
                                                "data-component-content": "%7B%22className%22%3A%22text-2xl%20font-bold%20text-school-brown%20mb-4%22%7D",
                                                className: "text-2xl font-bold text-school-brown mb-4",
                                                children: section.title
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/About.tsx",
                                                lineNumber: 61,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("p", {
                                                "data-lov-id": "src/pages/About.tsx:62:20",
                                                "data-lov-name": "p",
                                                "data-component-path": "src/pages/About.tsx",
                                                "data-component-line": "62",
                                                "data-component-file": "About.tsx",
                                                "data-component-name": "p",
                                                "data-component-content": "%7B%22className%22%3A%22text-elegant-light%20mb-6%20leading-relaxed%22%7D",
                                                className: "text-elegant-light mb-6 leading-relaxed",
                                                children: section.description
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/About.tsx",
                                                lineNumber: 62,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV(Link, {
                                                "data-lov-id": "src/pages/About.tsx:63:20",
                                                "data-lov-name": "Link",
                                                "data-component-path": "src/pages/About.tsx",
                                                "data-component-line": "63",
                                                "data-component-file": "About.tsx",
                                                "data-component-name": "Link",
                                                "data-component-content": "%7B%7D",
                                                to: section.link,
                                                children: /*#__PURE__*/ _jsxDEV(Button, {
                                                    "data-lov-id": "src/pages/About.tsx:64:22",
                                                    "data-lov-name": "Button",
                                                    "data-component-path": "src/pages/About.tsx",
                                                    "data-component-line": "64",
                                                    "data-component-file": "About.tsx",
                                                    "data-component-name": "Button",
                                                    "data-component-content": "%7B%22text%22%3A%22Learn%20More%22%2C%22className%22%3A%22bg-school-brown%20hover%3Abg-school-gold%20text-white%22%7D",
                                                    className: "bg-school-brown hover:bg-school-gold text-white",
                                                    children: "Learn More"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/About.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/About.tsx",
                                                lineNumber: 63,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/About.tsx",
                                        lineNumber: 57,
                                        columnNumber: 19
                                    }, this)
                                }, section.title, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/About.tsx",
                                    lineNumber: 56,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/About.tsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/About.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/About.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("section", {
                    "data-lov-id": "src/pages/About.tsx:76:8",
                    "data-lov-name": "section",
                    "data-component-path": "src/pages/About.tsx",
                    "data-component-line": "76",
                    "data-component-file": "About.tsx",
                    "data-component-name": "section",
                    "data-component-content": "%7B%22className%22%3A%22py-16%20bg-gradient-to-b%20from-amber-50%20to-orange-50%22%7D",
                    className: "py-16 bg-gradient-to-b from-amber-50 to-orange-50",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/About.tsx:77:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/About.tsx",
                        "data-component-line": "77",
                        "data-component-file": "About.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                        className: "container mx-auto px-4",
                        children: /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/About.tsx:78:12",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/About.tsx",
                            "data-component-line": "78",
                            "data-component-file": "About.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22max-w-4xl%20mx-auto%20text-center%22%7D",
                            className: "max-w-4xl mx-auto text-center",
                            children: [
                                /*#__PURE__*/ _jsxDEV("h2", {
                                    "data-lov-id": "src/pages/About.tsx:79:14",
                                    "data-lov-name": "h2",
                                    "data-component-path": "src/pages/About.tsx",
                                    "data-component-line": "79",
                                    "data-component-file": "About.tsx",
                                    "data-component-name": "h2",
                                    "data-component-content": "%7B%22text%22%3A%22Why%20Choose%20SJR%20HBR%20Layout%3F%22%2C%22className%22%3A%22text-4xl%20font-bold%20text-school-brown%20mb-8%22%7D",
                                    className: "text-4xl font-bold text-school-brown mb-8",
                                    children: "Why Choose SJR HBR Layout?"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/About.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/About.tsx:80:14",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/About.tsx",
                                    "data-component-line": "80",
                                    "data-component-file": "About.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-3%20gap-8%22%7D",
                                    className: "grid md:grid-cols-3 gap-8",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/pages/About.tsx:81:16",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/pages/About.tsx",
                                            "data-component-line": "81",
                                            "data-component-file": "About.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22text-center%22%7D",
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/About.tsx:82:18",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/About.tsx",
                                                    "data-component-line": "82",
                                                    "data-component-file": "About.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22text%22%3A%2225%2B%22%2C%22className%22%3A%22text-4xl%20font-bold%20text-school-gold%20mb-2%22%7D",
                                                    className: "text-4xl font-bold text-school-gold mb-2",
                                                    children: "25+"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/About.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/About.tsx:83:18",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/About.tsx",
                                                    "data-component-line": "83",
                                                    "data-component-file": "About.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22text%22%3A%22Years%20of%20Excellence%22%2C%22className%22%3A%22text-elegant%22%7D",
                                                    className: "text-elegant",
                                                    children: "Years of Excellence"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/About.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/About.tsx",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/pages/About.tsx:85:16",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/pages/About.tsx",
                                            "data-component-line": "85",
                                            "data-component-file": "About.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22text-center%22%7D",
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/About.tsx:86:18",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/About.tsx",
                                                    "data-component-line": "86",
                                                    "data-component-file": "About.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22text%22%3A%221000%2B%22%2C%22className%22%3A%22text-4xl%20font-bold%20text-school-gold%20mb-2%22%7D",
                                                    className: "text-4xl font-bold text-school-gold mb-2",
                                                    children: "1000+"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/About.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/About.tsx:87:18",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/About.tsx",
                                                    "data-component-line": "87",
                                                    "data-component-file": "About.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22text%22%3A%22Happy%20Students%22%2C%22className%22%3A%22text-elegant%22%7D",
                                                    className: "text-elegant",
                                                    children: "Happy Students"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/About.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/About.tsx",
                                            lineNumber: 85,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/pages/About.tsx:89:16",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/pages/About.tsx",
                                            "data-component-line": "89",
                                            "data-component-file": "About.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22text-center%22%7D",
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/About.tsx:90:18",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/About.tsx",
                                                    "data-component-line": "90",
                                                    "data-component-file": "About.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22text%22%3A%2295%25%22%2C%22className%22%3A%22text-4xl%20font-bold%20text-school-gold%20mb-2%22%7D",
                                                    className: "text-4xl font-bold text-school-gold mb-2",
                                                    children: "95%"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/About.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/About.tsx:91:18",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/About.tsx",
                                                    "data-component-line": "91",
                                                    "data-component-file": "About.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22text%22%3A%22Academic%20Success%20Rate%22%2C%22className%22%3A%22text-elegant%22%7D",
                                                    className: "text-elegant",
                                                    children: "Academic Success Rate"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/About.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/About.tsx",
                                            lineNumber: 89,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/About.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/pages/About.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/About.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/About.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/sjrsh916/public_html/src/pages/About.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/pages/About.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
};
_c = About;
export default About;
var _c;
$RefreshReg$(_c, "About");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/pages/About.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/pages/About.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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REFBRUUsV0FBVTs4REFBMkM7Ozs7Ozs4REFDMUQsUUFBQ087b0RBQUFmLGVBQUE7b0RBQUFDLGlCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsMEJBQUE7b0RBQUVFLFdBQVU7OERBQWU7Ozs7Ozs7Ozs7OztzREFFOUIsUUFBQ0Q7NENBQUVQLGVBQUE7NENBQUFDLGlCQUFBOzRDQUFBQyx1QkFBQTs0Q0FBQUMsdUJBQUE7NENBQUFDLHVCQUFBOzRDQUFBQyx1QkFBQTs0Q0FBQUMsMEJBQUE7NENBQUVFLFdBQVU7OzhEQUNiLFFBQUNEO29EQUFFUCxlQUFBO29EQUFBQyxpQkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLDBCQUFBO29EQUFFRSxXQUFVOzhEQUEyQzs7Ozs7OzhEQUMxRCxRQUFDTztvREFBQWYsZUFBQTtvREFBQUMsaUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQywwQkFBQTtvREFBRUUsV0FBVTs4REFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUzlDO0tBMUZNZjtBQTRGTixlQUFlQSxNQUFLIiwibmFtZXMiOlsiTGF5b3V0IiwiUGFnZUJhbm5lciIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkJ1dHRvbiIsIkJvb2tPcGVuIiwiVXNlcnMiLCJBd2FyZCIsIlNoaWVsZCIsIkxpbmsiLCJpbmRpYW5TY2hvb2xBc3NlbWJseSIsIkFib3V0Iiwic2VjdGlvbnMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibGluayIsImljb24iLCJjb2xvciIsImRhdGEtbG92LWlkIiwiZGF0YS1sb3YtbmFtZSIsImRhdGEtY29tcG9uZW50LXBhdGgiLCJkYXRhLWNvbXBvbmVudC1saW5lIiwiZGF0YS1jb21wb25lbnQtZmlsZSIsImRhdGEtY29tcG9uZW50LW5hbWUiLCJkYXRhLWNvbXBvbmVudC1jb250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwic3VidGl0bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJzZWN0aW9uIiwibWFwIiwiaW5kZXgiLCJoMyIsInAiLCJ0byIsImgyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkFib3V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBQYWdlQmFubmVyIGZyb20gXCJAL2NvbXBvbmVudHMvUGFnZUJhbm5lclwiO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBCb29rT3BlbiwgVXNlcnMsIEF3YXJkLCBTaGllbGQgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBpbmRpYW5TY2hvb2xBc3NlbWJseSBmcm9tIFwiQC9hc3NldHMvaW5kaWFuLXNjaG9vbC1hc3NlbWJseS5qcGdcIjtcblxuY29uc3QgQWJvdXQgPSAoKSA9PiB7XG4gIGNvbnN0IHNlY3Rpb25zID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcIkFib3V0IFNKUlBTLUhCUlwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiRGlzY292ZXIgb3VyIHJpY2ggaGlzdG9yeSwgZXRob3MsIGFuZCBlZHVjYXRpb25hbCBwaGlsb3NvcGh5XCIsXG4gICAgICBsaW5rOiBcIi9hYm91dC9zanJjXCIsXG4gICAgICBpY29uOiBCb29rT3BlbixcbiAgICAgIGNvbG9yOiBcImJnLWJsdWUtNTBcIlxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiVmlzaW9uICYgTWlzc2lvblwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiT3VyIGd1aWRpbmcgcHJpbmNpcGxlcyBhbmQgY29tbWl0bWVudCB0byBleGNlbGxlbmNlXCIsXG4gICAgICBsaW5rOiBcIi9hYm91dC92aXNpb24tbWlzc2lvblwiLFxuICAgICAgaWNvbjogQXdhcmQsXG4gICAgICBjb2xvcjogXCJiZy1hbWJlci01MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJQcmluY2lwYWwncyBNZXNzYWdlXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJBIHdvcmQgZnJvbSBvdXIgYWNhZGVtaWMgbGVhZGVyXCIsXG4gICAgICBsaW5rOiBcIi9hYm91dC9wcmluY2lwYWwtbWVzc2FnZVwiLFxuICAgICAgaWNvbjogVXNlcnMsXG4gICAgICBjb2xvcjogXCJiZy1ncmVlbi01MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJMZWFkZXJzaGlwIFRlYW1cIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIk1lZXQgb3VyIGRlZGljYXRlZCBmYWN1bHR5IGFuZCBhZG1pbmlzdHJhdG9yc1wiLFxuICAgICAgbGluazogXCIvYWJvdXQvbGVhZGVyc2hpcFwiLFxuICAgICAgaWNvbjogU2hpZWxkLFxuICAgICAgY29sb3I6IFwiYmctcHVycGxlLTUwXCJcbiAgICB9XG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctYmFja2dyb3VuZFwiPlxuICAgICAgICA8UGFnZUJhbm5lclxuICAgICAgICAgIHRpdGxlPVwiQWJvdXQgT3VyIFNjaG9vbFwiXG4gICAgICAgICAgc3VidGl0bGU9XCJEaXNjb3ZlciB0aGUgc3RvcnksIHZhbHVlcywgYW5kIHZpc2lvbiB0aGF0IGRyaXZlIFNKUiBQdWJsaWMgU2Nob29sLCBIQlIgTGF5b3V0XCJcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U9e2luZGlhblNjaG9vbEFzc2VtYmx5fVxuICAgICAgICAvPlxuXG4gICAgICAgIHsvKiBBYm91dCBTZWN0aW9ucyAqL31cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMiBnYXAtOFwiPlxuICAgICAgICAgICAgICB7c2VjdGlvbnMubWFwKChzZWN0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxDYXJkIGtleT17c2VjdGlvbi50aXRsZX0gY2xhc3NOYW1lPXtgJHtzZWN0aW9uLmNvbG9yfSBob3ZlcjpzaGFkb3cteGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGhvdmVyLXNjYWxlIGFuaW1hdGUtZmFkZS1pbmB9PlxuICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtOCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNjaG9vbC1nb2xkIHctMTYgaC0xNiByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXgtYXV0byBtYi02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24uaWNvbiBjbGFzc05hbWU9XCJoLTggdy04IHRleHQtd2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LXNjaG9vbC1icm93biBtYi00XCI+e3NlY3Rpb24udGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1lbGVnYW50LWxpZ2h0IG1iLTYgbGVhZGluZy1yZWxheGVkXCI+e3NlY3Rpb24uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17c2VjdGlvbi5saW5rfT5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJnLXNjaG9vbC1icm93biBob3ZlcjpiZy1zY2hvb2wtZ29sZCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBMZWFybiBNb3JlXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgey8qIFF1aWNrIE92ZXJ2aWV3ICovfVxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNiBiZy1ncmFkaWVudC10by1iIGZyb20tYW1iZXItNTAgdG8tb3JhbmdlLTUwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTR4bCBteC1hdXRvIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gbWItOFwiPldoeSBDaG9vc2UgU0pSIEhCUiBMYXlvdXQ/PC9oMj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0zIGdhcC04XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1zY2hvb2wtZ29sZCBtYi0yXCI+MjUrPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWVsZWdhbnRcIj5ZZWFycyBvZiBFeGNlbGxlbmNlPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtc2Nob29sLWdvbGQgbWItMlwiPjEwMDArPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWVsZWdhbnRcIj5IYXBweSBTdHVkZW50czwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LXNjaG9vbC1nb2xkIG1iLTJcIj45NSU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZWxlZ2FudFwiPkFjYWRlbWljIFN1Y2Nlc3MgUmF0ZTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcbiJdLCJmaWxlIjoiL2hvbWUvc2pyc2g5MTYvcHVibGljX2h0bWwvc3JjL3BhZ2VzL0Fib3V0LnRzeCJ9