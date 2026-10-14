import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/NewsEventsHomeSection.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=5efa796b";
import { Calendar, ChevronRight, Newspaper } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
import __vite__cjsImport6_react from "/node_modules/.vite/deps/react.js?v=5efa796b"; const useEffect = __vite__cjsImport6_react["useEffect"]; const useMemo = __vite__cjsImport6_react["useMemo"]; const useState = __vite__cjsImport6_react["useState"];
import { getPublicContent } from "/src/lib/api.ts";
import { mergeNewsItems } from "/src/lib/newsContent.ts";
import { mergeEventItems } from "/src/lib/eventContent.ts";
const NewsEventsHomeSection = ()=>{
    _s();
    const [newsItems, setNewsItems] = useState(null);
    const [eventItems, setEventItems] = useState(null);
    useEffect(()=>{
        getPublicContent("news", 2).then((result)=>setNewsItems(result.items)).catch(()=>setNewsItems(null));
        getPublicContent("event", 2).then((result)=>setEventItems(result.items)).catch(()=>setEventItems(null));
    }, []);
    const latestNews = useMemo(()=>mergeNewsItems(newsItems || []).slice(0, 2), [
        newsItems
    ]);
    const events = useMemo(()=>mergeEventItems(eventItems || []), [
        eventItems
    ]);
    return /*#__PURE__*/ _jsxDEV("section", {
        "data-lov-id": "src/components/NewsEventsHomeSection.tsx:25:4",
        "data-lov-name": "section",
        "data-component-path": "src/components/NewsEventsHomeSection.tsx",
        "data-component-line": "25",
        "data-component-file": "NewsEventsHomeSection.tsx",
        "data-component-name": "section",
        "data-component-content": "%7B%22className%22%3A%22py-14%20bg-white%22%7D",
        className: "py-14 bg-white",
        children: /*#__PURE__*/ _jsxDEV("div", {
            "data-lov-id": "src/components/NewsEventsHomeSection.tsx:26:6",
            "data-lov-name": "div",
            "data-component-path": "src/components/NewsEventsHomeSection.tsx",
            "data-component-line": "26",
            "data-component-file": "NewsEventsHomeSection.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/components/NewsEventsHomeSection.tsx:27:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/NewsEventsHomeSection.tsx",
                    "data-component-line": "27",
                    "data-component-file": "NewsEventsHomeSection.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22text-center%20mb-10%20max-w-3xl%20mx-auto%22%7D",
                    className: "text-center mb-10 max-w-3xl mx-auto",
                    children: [
                        /*#__PURE__*/ _jsxDEV("span", {
                            "data-lov-id": "src/components/NewsEventsHomeSection.tsx:28:10",
                            "data-lov-name": "span",
                            "data-component-path": "src/components/NewsEventsHomeSection.tsx",
                            "data-component-line": "28",
                            "data-component-file": "NewsEventsHomeSection.tsx",
                            "data-component-name": "span",
                            "data-component-content": "%7B%22text%22%3A%22Stay%20Updated%22%2C%22className%22%3A%22text-xs%20font-semibold%20uppercase%20tracking-%5B0.2em%5D%20text-indian-green%22%7D",
                            className: "text-xs font-semibold uppercase tracking-[0.2em] text-indian-green",
                            children: "Stay Updated"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("h2", {
                            "data-lov-id": "src/components/NewsEventsHomeSection.tsx:29:10",
                            "data-lov-name": "h2",
                            "data-component-path": "src/components/NewsEventsHomeSection.tsx",
                            "data-component-line": "29",
                            "data-component-file": "NewsEventsHomeSection.tsx",
                            "data-component-name": "h2",
                            "data-component-content": "%7B%22text%22%3A%22News%20%26%20Upcoming%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20text-school-brown%20mt-2%20leading-tight%22%7D",
                            className: "text-3xl md:text-4xl font-bold text-school-brown mt-2 leading-tight",
                            children: [
                                "News & Upcoming ",
                                /*#__PURE__*/ _jsxDEV("span", {
                                    "data-lov-id": "src/components/NewsEventsHomeSection.tsx:30:28",
                                    "data-lov-name": "span",
                                    "data-component-path": "src/components/NewsEventsHomeSection.tsx",
                                    "data-component-line": "30",
                                    "data-component-file": "NewsEventsHomeSection.tsx",
                                    "data-component-name": "span",
                                    "data-component-content": "%7B%22text%22%3A%22Events%22%2C%22className%22%3A%22text-indian-green%22%7D",
                                    className: "text-indian-green",
                                    children: "Events"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx",
                                    lineNumber: 30,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/components/NewsEventsHomeSection.tsx:34:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/NewsEventsHomeSection.tsx",
                    "data-component-line": "34",
                    "data-component-file": "NewsEventsHomeSection.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22grid%20grid-cols-1%20lg%3Agrid-cols-12%20gap-8%20max-w-7xl%20mx-auto%20lg%3Aitems-stretch%22%7D",
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto lg:items-stretch",
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/components/NewsEventsHomeSection.tsx:36:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/NewsEventsHomeSection.tsx",
                            "data-component-line": "36",
                            "data-component-file": "NewsEventsHomeSection.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22lg%3Acol-span-7%20flex%20flex-col%20lg%3Ah-%5B520px%5D%22%7D",
                            className: "lg:col-span-7 flex flex-col lg:h-[520px]",
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/components/NewsEventsHomeSection.tsx:37:12",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/NewsEventsHomeSection.tsx",
                                    "data-component-line": "37",
                                    "data-component-file": "NewsEventsHomeSection.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20gap-3%20mb-5%22%7D",
                                    className: "flex items-center gap-3 mb-5",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/components/NewsEventsHomeSection.tsx:38:14",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/components/NewsEventsHomeSection.tsx",
                                            "data-component-line": "38",
                                            "data-component-file": "NewsEventsHomeSection.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22bg-indian-green%20w-10%20h-10%20rounded-full%20flex%20items-center%20justify-center%22%7D",
                                            className: "bg-indian-green w-10 h-10 rounded-full flex items-center justify-center",
                                            children: /*#__PURE__*/ _jsxDEV(Newspaper, {
                                                "data-lov-id": "src/components/NewsEventsHomeSection.tsx:39:16",
                                                "data-lov-name": "Newspaper",
                                                "data-component-path": "src/components/NewsEventsHomeSection.tsx",
                                                "data-component-line": "39",
                                                "data-component-file": "NewsEventsHomeSection.tsx",
                                                "data-component-name": "Newspaper",
                                                "data-component-content": "%7B%22className%22%3A%22h-5%20w-5%20text-white%22%7D",
                                                className: "h-5 w-5 text-white"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx",
                                                lineNumber: 39,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx",
                                            lineNumber: 38,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("h3", {
                                            "data-lov-id": "src/components/NewsEventsHomeSection.tsx:41:14",
                                            "data-lov-name": "h3",
                                            "data-component-path": "src/components/NewsEventsHomeSection.tsx",
                                            "data-component-line": "41",
                                            "data-component-file": "NewsEventsHomeSection.tsx",
                                            "data-component-name": "h3",
                                            "data-component-content": "%7B%22text%22%3A%22Latest%20News%22%2C%22className%22%3A%22text-xl%20font-bold%20text-school-brown%22%7D",
                                            className: "text-xl font-bold text-school-brown",
                                            children: "Latest News"
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx",
                                            lineNumber: 41,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/components/NewsEventsHomeSection.tsx:43:12",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/NewsEventsHomeSection.tsx",
                                    "data-component-line": "43",
                                    "data-component-file": "NewsEventsHomeSection.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22grid%20grid-cols-1%20sm%3Agrid-cols-2%20gap-4%22%7D",
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                    children: latestNews.map((item)=>/*#__PURE__*/ _jsxDEV(Link, {
                                            "data-lov-id": "src/components/NewsEventsHomeSection.tsx:45:16",
                                            "data-lov-name": "Link",
                                            "data-component-path": "src/components/NewsEventsHomeSection.tsx",
                                            "data-component-line": "45",
                                            "data-component-file": "NewsEventsHomeSection.tsx",
                                            "data-component-name": "Link",
                                            "data-component-content": "%7B%22className%22%3A%22block%20h-full%22%7D",
                                            to: item.href,
                                            className: "block h-full",
                                            children: /*#__PURE__*/ _jsxDEV(Card, {
                                                "data-lov-id": "src/components/NewsEventsHomeSection.tsx:46:18",
                                                "data-lov-name": "Card",
                                                "data-component-path": "src/components/NewsEventsHomeSection.tsx",
                                                "data-component-line": "46",
                                                "data-component-file": "NewsEventsHomeSection.tsx",
                                                "data-component-name": "Card",
                                                "data-component-content": "%7B%22className%22%3A%22overflow-hidden%20border%20border-indian-green%2F15%20hover%3Ashadow-lg%20transition-shadow%20flex%20flex-col%20h-full%22%7D",
                                                className: "overflow-hidden border border-indian-green/15 hover:shadow-lg transition-shadow flex flex-col h-full",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/components/NewsEventsHomeSection.tsx:47:20",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/components/NewsEventsHomeSection.tsx",
                                                        "data-component-line": "47",
                                                        "data-component-file": "NewsEventsHomeSection.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%22className%22%3A%22h-44%20overflow-hidden%22%7D",
                                                        className: "h-44 overflow-hidden",
                                                        children: /*#__PURE__*/ _jsxDEV("img", {
                                                            "data-lov-id": "src/components/NewsEventsHomeSection.tsx:48:22",
                                                            "data-lov-name": "img",
                                                            "data-component-path": "src/components/NewsEventsHomeSection.tsx",
                                                            "data-component-line": "48",
                                                            "data-component-file": "NewsEventsHomeSection.tsx",
                                                            "data-component-name": "img",
                                                            "data-component-content": "%7B%22className%22%3A%22w-full%20h-full%20object-cover%22%7D",
                                                            src: item.image,
                                                            alt: item.title,
                                                            className: "w-full h-full object-cover"
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx",
                                                            lineNumber: 48,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx",
                                                        lineNumber: 47,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV(CardContent, {
                                                        "data-lov-id": "src/components/NewsEventsHomeSection.tsx:50:20",
                                                        "data-lov-name": "CardContent",
                                                        "data-component-path": "src/components/NewsEventsHomeSection.tsx",
                                                        "data-component-line": "50",
                                                        "data-component-file": "NewsEventsHomeSection.tsx",
                                                        "data-component-name": "CardContent",
                                                        "data-component-content": "%7B%22className%22%3A%22p-4%20flex%20flex-col%20flex-1%22%7D",
                                                        className: "p-4 flex flex-col flex-1",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("span", {
                                                                "data-lov-id": "src/components/NewsEventsHomeSection.tsx:51:22",
                                                                "data-lov-name": "span",
                                                                "data-component-path": "src/components/NewsEventsHomeSection.tsx",
                                                                "data-component-line": "51",
                                                                "data-component-file": "NewsEventsHomeSection.tsx",
                                                                "data-component-name": "span",
                                                                "data-component-content": "%7B%22className%22%3A%22text-%5B11px%5D%20text-indian-green%20border%20border-indian-green%2F30%20px-2%20py-0.5%20rounded%20self-start%20mb-2%22%7D",
                                                                className: "text-[11px] text-indian-green border border-indian-green/30 px-2 py-0.5 rounded self-start mb-2",
                                                                children: item.date
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx",
                                                                lineNumber: 51,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("h4", {
                                                                "data-lov-id": "src/components/NewsEventsHomeSection.tsx:54:22",
                                                                "data-lov-name": "h4",
                                                                "data-component-path": "src/components/NewsEventsHomeSection.tsx",
                                                                "data-component-line": "54",
                                                                "data-component-file": "NewsEventsHomeSection.tsx",
                                                                "data-component-name": "h4",
                                                                "data-component-content": "%7B%22className%22%3A%22font-semibold%20text-school-brown%20text-%5B15px%5D%20leading-snug%20mb-1.5%20line-clamp-2%22%7D",
                                                                className: "font-semibold text-school-brown text-[15px] leading-snug mb-1.5 line-clamp-2",
                                                                children: item.title
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx",
                                                                lineNumber: 54,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                "data-lov-id": "src/components/NewsEventsHomeSection.tsx:55:22",
                                                                "data-lov-name": "p",
                                                                "data-component-path": "src/components/NewsEventsHomeSection.tsx",
                                                                "data-component-line": "55",
                                                                "data-component-file": "NewsEventsHomeSection.tsx",
                                                                "data-component-name": "p",
                                                                "data-component-content": "%7B%22className%22%3A%22text-elegant-light%20text-sm%20leading-relaxed%20line-clamp-3%22%7D",
                                                                className: "text-elegant-light text-sm leading-relaxed line-clamp-3",
                                                                children: item.summary
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx",
                                                                lineNumber: 55,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx",
                                                        lineNumber: 50,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx",
                                                lineNumber: 46,
                                                columnNumber: 19
                                            }, this)
                                        }, item.key, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx",
                                            lineNumber: 45,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/components/NewsEventsHomeSection.tsx:61:12",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/NewsEventsHomeSection.tsx",
                                    "data-component-line": "61",
                                    "data-component-file": "NewsEventsHomeSection.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22mt-4%22%7D",
                                    className: "mt-4",
                                    children: /*#__PURE__*/ _jsxDEV(Button, {
                                        "data-lov-id": "src/components/NewsEventsHomeSection.tsx:62:14",
                                        "data-lov-name": "Button",
                                        "data-component-path": "src/components/NewsEventsHomeSection.tsx",
                                        "data-component-line": "62",
                                        "data-component-file": "NewsEventsHomeSection.tsx",
                                        "data-component-name": "Button",
                                        "data-component-content": "%7B%22className%22%3A%22bg-indian-green%20hover%3Abg-indian-green%2F90%20text-white%22%7D",
                                        asChild: true,
                                        className: "bg-indian-green hover:bg-indian-green/90 text-white",
                                        children: /*#__PURE__*/ _jsxDEV(Link, {
                                            "data-lov-id": "src/components/NewsEventsHomeSection.tsx:63:16",
                                            "data-lov-name": "Link",
                                            "data-component-path": "src/components/NewsEventsHomeSection.tsx",
                                            "data-component-line": "63",
                                            "data-component-file": "NewsEventsHomeSection.tsx",
                                            "data-component-name": "Link",
                                            "data-component-content": "%7B%22text%22%3A%22View%20All%22%7D",
                                            to: "/news",
                                            children: [
                                                "View All",
                                                /*#__PURE__*/ _jsxDEV(ChevronRight, {
                                                    "data-lov-id": "src/components/NewsEventsHomeSection.tsx:65:18",
                                                    "data-lov-name": "ChevronRight",
                                                    "data-component-path": "src/components/NewsEventsHomeSection.tsx",
                                                    "data-component-line": "65",
                                                    "data-component-file": "NewsEventsHomeSection.tsx",
                                                    "data-component-name": "ChevronRight",
                                                    "data-component-content": "%7B%22className%22%3A%22ml-1%20h-4%20w-4%22%7D",
                                                    className: "ml-1 h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx",
                                            lineNumber: 63,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/components/NewsEventsHomeSection.tsx:72:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/NewsEventsHomeSection.tsx",
                            "data-component-line": "72",
                            "data-component-file": "NewsEventsHomeSection.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22lg%3Acol-span-5%20flex%20flex-col%20lg%3Ah-%5B520px%5D%22%7D",
                            className: "lg:col-span-5 flex flex-col lg:h-[520px]",
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/components/NewsEventsHomeSection.tsx:73:12",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/NewsEventsHomeSection.tsx",
                                    "data-component-line": "73",
                                    "data-component-file": "NewsEventsHomeSection.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20gap-3%20mb-5%22%7D",
                                    className: "flex items-center gap-3 mb-5",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/components/NewsEventsHomeSection.tsx:74:14",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/components/NewsEventsHomeSection.tsx",
                                            "data-component-line": "74",
                                            "data-component-file": "NewsEventsHomeSection.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22bg-indian-green%20w-10%20h-10%20rounded-full%20flex%20items-center%20justify-center%22%7D",
                                            className: "bg-indian-green w-10 h-10 rounded-full flex items-center justify-center",
                                            children: /*#__PURE__*/ _jsxDEV(Calendar, {
                                                "data-lov-id": "src/components/NewsEventsHomeSection.tsx:75:16",
                                                "data-lov-name": "Calendar",
                                                "data-component-path": "src/components/NewsEventsHomeSection.tsx",
                                                "data-component-line": "75",
                                                "data-component-file": "NewsEventsHomeSection.tsx",
                                                "data-component-name": "Calendar",
                                                "data-component-content": "%7B%22className%22%3A%22h-5%20w-5%20text-white%22%7D",
                                                className: "h-5 w-5 text-white"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("h3", {
                                            "data-lov-id": "src/components/NewsEventsHomeSection.tsx:77:14",
                                            "data-lov-name": "h3",
                                            "data-component-path": "src/components/NewsEventsHomeSection.tsx",
                                            "data-component-line": "77",
                                            "data-component-file": "NewsEventsHomeSection.tsx",
                                            "data-component-name": "h3",
                                            "data-component-content": "%7B%22text%22%3A%22Upcoming%20Events%22%2C%22className%22%3A%22text-xl%20font-bold%20text-school-brown%22%7D",
                                            className: "text-xl font-bold text-school-brown",
                                            children: "Upcoming Events"
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/components/NewsEventsHomeSection.tsx:80:12",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/NewsEventsHomeSection.tsx",
                                    "data-component-line": "80",
                                    "data-component-file": "NewsEventsHomeSection.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22relative%20flex-1%20min-h-%5B360px%5D%20overflow-hidden%20rounded-2xl%20border%20border-indian-green%2F15%20bg-gradient-to-b%20from-indian-green%2F5%20to-white%22%7D",
                                    className: "relative flex-1 min-h-[360px] overflow-hidden rounded-2xl border border-indian-green/15 bg-gradient-to-b from-indian-green/5 to-white",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/components/NewsEventsHomeSection.tsx:81:14",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/components/NewsEventsHomeSection.tsx",
                                            "data-component-line": "81",
                                            "data-component-file": "NewsEventsHomeSection.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22absolute%20inset-x-0%20top-0%20h-8%20bg-gradient-to-b%20from-white%20to-transparent%20z-10%20pointer-events-none%22%7D",
                                            className: "absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/components/NewsEventsHomeSection.tsx:82:14",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/components/NewsEventsHomeSection.tsx",
                                            "data-component-line": "82",
                                            "data-component-file": "NewsEventsHomeSection.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22absolute%20inset-x-0%20bottom-0%20h-8%20bg-gradient-to-t%20from-white%20to-transparent%20z-10%20pointer-events-none%22%7D",
                                            className: "absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/components/NewsEventsHomeSection.tsx:84:14",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/components/NewsEventsHomeSection.tsx",
                                            "data-component-line": "84",
                                            "data-component-file": "NewsEventsHomeSection.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22animate-ticker-up%20flex%20flex-col%20gap-3%20p-4%22%7D",
                                            className: "animate-ticker-up flex flex-col gap-3 p-4",
                                            children: [
                                                ...events,
                                                ...events
                                            ].map((e, i)=>/*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/components/NewsEventsHomeSection.tsx:86:18",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/components/NewsEventsHomeSection.tsx",
                                                    "data-component-line": "86",
                                                    "data-component-file": "NewsEventsHomeSection.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22bg-white%20border-l-4%20border-indian-green%20rounded-lg%20p-4%20shadow-sm%22%7D",
                                                    className: "bg-white border-l-4 border-indian-green rounded-lg p-4 shadow-sm",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            "data-lov-id": "src/components/NewsEventsHomeSection.tsx:90:20",
                                                            "data-lov-name": "div",
                                                            "data-component-path": "src/components/NewsEventsHomeSection.tsx",
                                                            "data-component-line": "90",
                                                            "data-component-file": "NewsEventsHomeSection.tsx",
                                                            "data-component-name": "div",
                                                            "data-component-content": "%7B%22className%22%3A%22font-semibold%20text-school-brown%20text-%5B15px%5D%20leading-snug%22%7D",
                                                            className: "font-semibold text-school-brown text-[15px] leading-snug",
                                                            children: e.title
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx",
                                                            lineNumber: 90,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            "data-lov-id": "src/components/NewsEventsHomeSection.tsx:91:20",
                                                            "data-lov-name": "div",
                                                            "data-component-path": "src/components/NewsEventsHomeSection.tsx",
                                                            "data-component-line": "91",
                                                            "data-component-file": "NewsEventsHomeSection.tsx",
                                                            "data-component-name": "div",
                                                            "data-component-content": "%7B%22className%22%3A%22text-xs%20text-indian-green%20mt-1%20flex%20items-center%20gap-1.5%22%7D",
                                                            className: "text-xs text-indian-green mt-1 flex items-center gap-1.5",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV(Calendar, {
                                                                    "data-lov-id": "src/components/NewsEventsHomeSection.tsx:92:22",
                                                                    "data-lov-name": "Calendar",
                                                                    "data-component-path": "src/components/NewsEventsHomeSection.tsx",
                                                                    "data-component-line": "92",
                                                                    "data-component-file": "NewsEventsHomeSection.tsx",
                                                                    "data-component-name": "Calendar",
                                                                    "data-component-content": "%7B%22className%22%3A%22h-3%20w-3%22%7D",
                                                                    className: "h-3 w-3"
                                                                }, void 0, false, {
                                                                    fileName: "/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx",
                                                                    lineNumber: 92,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " ",
                                                                e.date
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx",
                                                            lineNumber: 91,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
};
_s(NewsEventsHomeSection, "KhOgf70odUFTThMB8FdTY4eMy8k=");
_c = NewsEventsHomeSection;
export default NewsEventsHomeSection;
var _c;
$RefreshReg$(_c, "NewsEventsHomeSection");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/components/NewsEventsHomeSection.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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RVIsZUFBQTs0REFBQUMsaUJBQUE7NERBQUFDLHVCQUFBOzREQUFBQyx1QkFBQTs0REFBQUMsdUJBQUE7NERBQUFDLHVCQUFBOzREQUFBQywwQkFBQTs0REFBRUMsV0FBVTs7OEVBQ2IsUUFBQzdCO29FQUFPc0IsZUFBQTtvRUFBQUMsaUJBQUE7b0VBQUFDLHVCQUFBO29FQUFBQyx1QkFBQTtvRUFBQUMsdUJBQUE7b0VBQUFDLHVCQUFBO29FQUFBQywwQkFBQTtvRUFBRUMsV0FBVTs7Ozs7O2dFQUFZO2dFQUFFb0IsRUFBRU4sSUFBSTs7Ozs7Ozs7bURBTHJDTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0J6QjtHQTVGTXpDO0tBQUFBO0FBOEZOLGVBQWVBLHNCQUFxQiIsIm5hbWVzIjpbIkNhcmQiLCJDYXJkQ29udGVudCIsIkJ1dHRvbiIsIkxpbmsiLCJDYWxlbmRhciIsIkNoZXZyb25SaWdodCIsIk5ld3NwYXBlciIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsImdldFB1YmxpY0NvbnRlbnQiLCJtZXJnZU5ld3NJdGVtcyIsIm1lcmdlRXZlbnRJdGVtcyIsIk5ld3NFdmVudHNIb21lU2VjdGlvbiIsIm5ld3NJdGVtcyIsInNldE5ld3NJdGVtcyIsImV2ZW50SXRlbXMiLCJzZXRFdmVudEl0ZW1zIiwidGhlbiIsInJlc3VsdCIsIml0ZW1zIiwiY2F0Y2giLCJsYXRlc3ROZXdzIiwic2xpY2UiLCJldmVudHMiLCJzZWN0aW9uIiwiZGF0YS1sb3YtaWQiLCJkYXRhLWxvdi1uYW1lIiwiZGF0YS1jb21wb25lbnQtcGF0aCIsImRhdGEtY29tcG9uZW50LWxpbmUiLCJkYXRhLWNvbXBvbmVudC1maWxlIiwiZGF0YS1jb21wb25lbnQtbmFtZSIsImRhdGEtY29tcG9uZW50LWNvbnRlbnQiLCJjbGFzc05hbWUiLCJkaXYiLCJzcGFuIiwiaDIiLCJoMyIsIm1hcCIsIml0ZW0iLCJ0byIsImhyZWYiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsInRpdGxlIiwiZGF0ZSIsImg0IiwicCIsInN1bW1hcnkiLCJrZXkiLCJhc0NoaWxkIiwiZSIsImkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiTmV3c0V2ZW50c0hvbWVTZWN0aW9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXIsIENoZXZyb25SaWdodCwgTmV3c3BhcGVyIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBBZG1pbkNvbnRlbnRJdGVtLCBnZXRQdWJsaWNDb250ZW50IH0gZnJvbSBcIkAvbGliL2FwaVwiO1xuaW1wb3J0IHsgbWVyZ2VOZXdzSXRlbXMgfSBmcm9tIFwiQC9saWIvbmV3c0NvbnRlbnRcIjtcbmltcG9ydCB7IG1lcmdlRXZlbnRJdGVtcyB9IGZyb20gXCJAL2xpYi9ldmVudENvbnRlbnRcIjtcblxuY29uc3QgTmV3c0V2ZW50c0hvbWVTZWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBbbmV3c0l0ZW1zLCBzZXROZXdzSXRlbXNdID0gdXNlU3RhdGU8QWRtaW5Db250ZW50SXRlbVtdIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtldmVudEl0ZW1zLCBzZXRFdmVudEl0ZW1zXSA9IHVzZVN0YXRlPEFkbWluQ29udGVudEl0ZW1bXSB8IG51bGw+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0UHVibGljQ29udGVudChcIm5ld3NcIiwgMikudGhlbigocmVzdWx0KSA9PiBzZXROZXdzSXRlbXMocmVzdWx0Lml0ZW1zKSkuY2F0Y2goKCkgPT4gc2V0TmV3c0l0ZW1zKG51bGwpKTtcbiAgICBnZXRQdWJsaWNDb250ZW50KFwiZXZlbnRcIiwgMikudGhlbigocmVzdWx0KSA9PiBzZXRFdmVudEl0ZW1zKHJlc3VsdC5pdGVtcykpLmNhdGNoKCgpID0+IHNldEV2ZW50SXRlbXMobnVsbCkpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgbGF0ZXN0TmV3cyA9IHVzZU1lbW8oKCkgPT4gbWVyZ2VOZXdzSXRlbXMobmV3c0l0ZW1zIHx8IFtdKS5zbGljZSgwLCAyKSwgW25ld3NJdGVtc10pO1xuXG4gIGNvbnN0IGV2ZW50cyA9IHVzZU1lbW8oKCkgPT4gbWVyZ2VFdmVudEl0ZW1zKGV2ZW50SXRlbXMgfHwgW10pLCBbZXZlbnRJdGVtc10pO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTQgYmctd2hpdGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTEwIG1heC13LTN4bCBteC1hdXRvXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yZW1dIHRleHQtaW5kaWFuLWdyZWVuXCI+U3RheSBVcGRhdGVkPC9zcGFuPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gbXQtMiBsZWFkaW5nLXRpZ2h0XCI+XG4gICAgICAgICAgICBOZXdzICYgVXBjb21pbmcgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1pbmRpYW4tZ3JlZW5cIj5FdmVudHM8L3NwYW4+XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGxnOmdyaWQtY29scy0xMiBnYXAtOCBtYXgtdy03eGwgbXgtYXV0byBsZzppdGVtcy1zdHJldGNoXCI+XG4gICAgICAgICAgey8qIExlZnQg4oCTIE5ld3MgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpjb2wtc3Bhbi03IGZsZXggZmxleC1jb2wgbGc6aC1bNTIwcHhdXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIG1iLTVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1pbmRpYW4tZ3JlZW4gdy0xMCBoLTEwIHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxOZXdzcGFwZXIgY2xhc3NOYW1lPVwiaC01IHctNSB0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXNjaG9vbC1icm93blwiPkxhdGVzdCBOZXdzPC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGdhcC00XCI+XG4gICAgICAgICAgICAgIHtsYXRlc3ROZXdzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxMaW5rIGtleT17aXRlbS5rZXl9IHRvPXtpdGVtLmhyZWZ9IGNsYXNzTmFtZT1cImJsb2NrIGgtZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuIGJvcmRlciBib3JkZXItaW5kaWFuLWdyZWVuLzE1IGhvdmVyOnNoYWRvdy1sZyB0cmFuc2l0aW9uLXNoYWRvdyBmbGV4IGZsZXgtY29sIGgtZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNDQgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1hZ2V9IGFsdD17aXRlbS50aXRsZX0gY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtNCBmbGV4IGZsZXgtY29sIGZsZXgtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtaW5kaWFuLWdyZWVuIGJvcmRlciBib3JkZXItaW5kaWFuLWdyZWVuLzMwIHB4LTIgcHktMC41IHJvdW5kZWQgc2VsZi1zdGFydCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5kYXRlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXNjaG9vbC1icm93biB0ZXh0LVsxNXB4XSBsZWFkaW5nLXNudWcgbWItMS41IGxpbmUtY2xhbXAtMlwiPntpdGVtLnRpdGxlfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1lbGVnYW50LWxpZ2h0IHRleHQtc20gbGVhZGluZy1yZWxheGVkIGxpbmUtY2xhbXAtM1wiPntpdGVtLnN1bW1hcnl9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxuICAgICAgICAgICAgICA8QnV0dG9uIGFzQ2hpbGQgY2xhc3NOYW1lPVwiYmctaW5kaWFuLWdyZWVuIGhvdmVyOmJnLWluZGlhbi1ncmVlbi85MCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvbmV3c1wiPlxuICAgICAgICAgICAgICAgICAgVmlldyBBbGxcbiAgICAgICAgICAgICAgICAgIDxDaGV2cm9uUmlnaHQgY2xhc3NOYW1lPVwibWwtMSBoLTQgdy00XCIgLz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogUmlnaHQg4oCTIEV2ZW50cyB0aWNrZXIgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpjb2wtc3Bhbi01IGZsZXggZmxleC1jb2wgbGc6aC1bNTIwcHhdXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIG1iLTVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1pbmRpYW4tZ3JlZW4gdy0xMCBoLTEwIHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxDYWxlbmRhciBjbGFzc05hbWU9XCJoLTUgdy01IHRleHQtd2hpdGVcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtc2Nob29sLWJyb3duXCI+VXBjb21pbmcgRXZlbnRzPC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXgtMSBtaW4taC1bMzYwcHhdIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLWluZGlhbi1ncmVlbi8xNSBiZy1ncmFkaWVudC10by1iIGZyb20taW5kaWFuLWdyZWVuLzUgdG8td2hpdGVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC14LTAgdG9wLTAgaC04IGJnLWdyYWRpZW50LXRvLWIgZnJvbS13aGl0ZSB0by10cmFuc3BhcmVudCB6LTEwIHBvaW50ZXItZXZlbnRzLW5vbmVcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXgtMCBib3R0b20tMCBoLTggYmctZ3JhZGllbnQtdG8tdCBmcm9tLXdoaXRlIHRvLXRyYW5zcGFyZW50IHotMTAgcG9pbnRlci1ldmVudHMtbm9uZVwiIC8+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLXRpY2tlci11cCBmbGV4IGZsZXgtY29sIGdhcC0zIHAtNFwiPlxuICAgICAgICAgICAgICAgIHtbLi4uZXZlbnRzLCAuLi5ldmVudHNdLm1hcCgoZSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIGJvcmRlci1sLTQgYm9yZGVyLWluZGlhbi1ncmVlbiByb3VuZGVkLWxnIHAtNCBzaGFkb3ctc21cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gdGV4dC1bMTVweF0gbGVhZGluZy1zbnVnXCI+e2UudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWluZGlhbi1ncmVlbiBtdC0xIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kYXIgY2xhc3NOYW1lPVwiaC0zIHctM1wiIC8+IHtlLmRhdGV9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV3c0V2ZW50c0hvbWVTZWN0aW9uO1xuIl0sImZpbGUiOiIvaG9tZS9zanJzaDkxNi9wdWJsaWNfaHRtbC9zcmMvY29tcG9uZW50cy9OZXdzRXZlbnRzSG9tZVNlY3Rpb24udHN4In0=