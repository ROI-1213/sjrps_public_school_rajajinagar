import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/NewsDetail.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/pages/NewsDetail.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import Layout from "/src/components/Layout.tsx";
import PageHero from "/src/components/PageHero.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { getPublicContent } from "/src/lib/api.ts";
import { findNewsItem } from "/src/lib/newsContent.ts";
import { Calendar, ChevronLeft, ChevronRight, X } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
import __vite__cjsImport8_react from "/node_modules/.vite/deps/react.js?v=5efa796b"; const useEffect = __vite__cjsImport8_react["useEffect"]; const useMemo = __vite__cjsImport8_react["useMemo"]; const useState = __vite__cjsImport8_react["useState"];
import { Link, Navigate, useParams } from "/node_modules/.vite/deps/react-router-dom.js?v=5efa796b";
const NewsDetail = ()=>{
    _s();
    const { slug } = useParams();
    const [adminNews, setAdminNews] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    useEffect(()=>{
        getPublicContent("news").then((result)=>setAdminNews(result.items)).catch(()=>setAdminNews([])).finally(()=>setLoaded(true));
    }, []);
    const event = useMemo(()=>{
        const item = findNewsItem(adminNews, slug);
        if (!item) return undefined;
        return {
            title: item.title,
            date: item.date,
            body: item.body,
            gallery: item.gallery.map((src, index)=>({
                    src,
                    alt: `${item.title} ${index + 1}`
                }))
        };
    }, [
        adminNews,
        slug
    ]);
    if (!event && !loaded) {
        return /*#__PURE__*/ _jsxDEV(Layout, {
            "data-lov-id": "src/pages/NewsDetail.tsx:35:11",
            "data-lov-name": "Layout",
            "data-component-path": "src/pages/NewsDetail.tsx",
            "data-component-line": "35",
            "data-component-file": "NewsDetail.tsx",
            "data-component-name": "Layout",
            "data-component-content": "%7B%7D",
            children: /*#__PURE__*/ _jsxDEV(PageHero, {
                "data-lov-id": "src/pages/NewsDetail.tsx:35:19",
                "data-lov-name": "PageHero",
                "data-component-path": "src/pages/NewsDetail.tsx",
                "data-component-line": "35",
                "data-component-file": "NewsDetail.tsx",
                "data-component-name": "PageHero",
                "data-component-content": "%7B%7D",
                title: "Loading News",
                breadcrumbs: [
                    {
                        label: "News",
                        path: "/news"
                    }
                ]
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/NewsDetail.tsx",
                lineNumber: 35,
                columnNumber: 259
            }, this)
        }, void 0, false, {
            fileName: "/home/sjrsh916/public_html/src/pages/NewsDetail.tsx",
            lineNumber: 35,
            columnNumber: 12
        }, this);
    }
    if (!event) {
        return /*#__PURE__*/ _jsxDEV(Navigate, {
            "data-lov-id": "src/pages/NewsDetail.tsx:39:11",
            "data-lov-name": "Navigate",
            "data-component-path": "src/pages/NewsDetail.tsx",
            "data-component-line": "39",
            "data-component-file": "NewsDetail.tsx",
            "data-component-name": "Navigate",
            "data-component-content": "%7B%7D",
            to: "/news",
            replace: true
        }, void 0, false, {
            fileName: "/home/sjrsh916/public_html/src/pages/NewsDetail.tsx",
            lineNumber: 39,
            columnNumber: 12
        }, this);
    }
    const selectedImage = selectedImageIndex !== null ? event.gallery[selectedImageIndex] : null;
    const hasMultipleImages = event.gallery.length > 1;
    const showPreviousImage = ()=>{
        if (selectedImageIndex === null || !hasMultipleImages) return;
        setSelectedImageIndex((selectedImageIndex - 1 + event.gallery.length) % event.gallery.length);
    };
    const showNextImage = ()=>{
        if (selectedImageIndex === null || !hasMultipleImages) return;
        setSelectedImageIndex((selectedImageIndex + 1) % event.gallery.length);
    };
    return /*#__PURE__*/ _jsxDEV(Layout, {
        "data-lov-id": "src/pages/NewsDetail.tsx:59:4",
        "data-lov-name": "Layout",
        "data-component-path": "src/pages/NewsDetail.tsx",
        "data-component-line": "59",
        "data-component-file": "NewsDetail.tsx",
        "data-component-name": "Layout",
        "data-component-content": "%7B%7D",
        children: [
            /*#__PURE__*/ _jsxDEV(PageHero, {
                "data-lov-id": "src/pages/NewsDetail.tsx:60:6",
                "data-lov-name": "PageHero",
                "data-component-path": "src/pages/NewsDetail.tsx",
                "data-component-line": "60",
                "data-component-file": "NewsDetail.tsx",
                "data-component-name": "PageHero",
                "data-component-content": "%7B%7D",
                title: event.title,
                breadcrumbs: [
                    {
                        label: "News",
                        path: "/news"
                    },
                    {
                        label: event.title
                    }
                ]
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/NewsDetail.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/NewsDetail.tsx:68:6",
                "data-lov-name": "section",
                "data-component-path": "src/pages/NewsDetail.tsx",
                "data-component-line": "68",
                "data-component-file": "NewsDetail.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-12%20sm%3Apy-16%20bg-background%22%7D",
                className: "py-12 sm:py-16 bg-background",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/NewsDetail.tsx:69:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/NewsDetail.tsx",
                    "data-component-line": "69",
                    "data-component-file": "NewsDetail.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ _jsxDEV("article", {
                        "data-lov-id": "src/pages/NewsDetail.tsx:70:10",
                        "data-lov-name": "article",
                        "data-component-path": "src/pages/NewsDetail.tsx",
                        "data-component-line": "70",
                        "data-component-file": "NewsDetail.tsx",
                        "data-component-name": "article",
                        "data-component-content": "%7B%22className%22%3A%22mx-auto%20w-full%20max-w-6xl%22%7D",
                        className: "mx-auto w-full max-w-6xl",
                        children: /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/NewsDetail.tsx:71:12",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/NewsDetail.tsx",
                            "data-component-line": "71",
                            "data-component-file": "NewsDetail.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22w-full%22%7D",
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/NewsDetail.tsx:72:14",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/NewsDetail.tsx",
                                    "data-component-line": "72",
                                    "data-component-file": "NewsDetail.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22inline-flex%20items-center%20gap-2%20rounded-full%20bg-indian-green%2F10%20px-4%20py-2%20text-sm%20font-semibold%20text-indian-green%20mb-5%22%7D",
                                    className: "inline-flex items-center gap-2 rounded-full bg-indian-green/10 px-4 py-2 text-sm font-semibold text-indian-green mb-5",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV(Calendar, {
                                            "data-lov-id": "src/pages/NewsDetail.tsx:73:16",
                                            "data-lov-name": "Calendar",
                                            "data-component-path": "src/pages/NewsDetail.tsx",
                                            "data-component-line": "73",
                                            "data-component-file": "NewsDetail.tsx",
                                            "data-component-name": "Calendar",
                                            "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%22%7D",
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/NewsDetail.tsx",
                                            lineNumber: 73,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("span", {
                                            "data-lov-id": "src/pages/NewsDetail.tsx:74:16",
                                            "data-lov-name": "span",
                                            "data-component-path": "src/pages/NewsDetail.tsx",
                                            "data-component-line": "74",
                                            "data-component-file": "NewsDetail.tsx",
                                            "data-component-name": "span",
                                            "data-component-content": "%7B%7D",
                                            children: event.date
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/NewsDetail.tsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/NewsDetail.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/NewsDetail.tsx:77:14",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/NewsDetail.tsx",
                                    "data-component-line": "77",
                                    "data-component-file": "NewsDetail.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22space-y-4%20text-sm%20sm%3Atext-%5B15px%5D%20leading-6%20sm%3Aleading-7%22%7D",
                                    className: "space-y-4 text-sm sm:text-[15px] leading-6 sm:leading-7",
                                    style: {
                                        color: "#333"
                                    },
                                    children: event.body.map((paragraph)=>/*#__PURE__*/ _jsxDEV("p", {
                                            "data-lov-id": "src/pages/NewsDetail.tsx:79:18",
                                            "data-lov-name": "p",
                                            "data-component-path": "src/pages/NewsDetail.tsx",
                                            "data-component-line": "79",
                                            "data-component-file": "NewsDetail.tsx",
                                            "data-component-name": "p",
                                            "data-component-content": "%7B%7D",
                                            children: paragraph
                                        }, paragraph, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/NewsDetail.tsx",
                                            lineNumber: 79,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/NewsDetail.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/pages/NewsDetail.tsx",
                            lineNumber: 71,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/NewsDetail.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/NewsDetail.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/NewsDetail.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/NewsDetail.tsx:87:6",
                "data-lov-name": "section",
                "data-component-path": "src/pages/NewsDetail.tsx",
                "data-component-line": "87",
                "data-component-file": "NewsDetail.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22pb-20%20bg-background%22%7D",
                className: "pb-20 bg-background",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/NewsDetail.tsx:88:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/NewsDetail.tsx",
                    "data-component-line": "88",
                    "data-component-file": "NewsDetail.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/NewsDetail.tsx:89:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/NewsDetail.tsx",
                        "data-component-line": "89",
                        "data-component-file": "NewsDetail.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22mx-auto%20w-full%20max-w-6xl%22%7D",
                        className: "mx-auto w-full max-w-6xl",
                        children: [
                            /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/pages/NewsDetail.tsx:90:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/pages/NewsDetail.tsx",
                                "data-component-line": "90",
                                "data-component-file": "NewsDetail.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22mb-8%20pt-2%22%7D",
                                className: "mb-8 pt-2",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("h2", {
                                        "data-lov-id": "src/pages/NewsDetail.tsx:91:14",
                                        "data-lov-name": "h2",
                                        "data-component-path": "src/pages/NewsDetail.tsx",
                                        "data-component-line": "91",
                                        "data-component-file": "NewsDetail.tsx",
                                        "data-component-name": "h2",
                                        "data-component-content": "%7B%22text%22%3A%22Event%20Gallery%22%2C%22className%22%3A%22text-2xl%20sm%3Atext-3xl%20font-bold%20mb-3%22%7D",
                                        className: "text-2xl sm:text-3xl font-bold mb-3",
                                        style: {
                                            color: "#111"
                                        },
                                        children: "Event Gallery"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/NewsDetail.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        "data-lov-id": "src/pages/NewsDetail.tsx:94:14",
                                        "data-lov-name": "p",
                                        "data-component-path": "src/pages/NewsDetail.tsx",
                                        "data-component-line": "94",
                                        "data-component-file": "NewsDetail.tsx",
                                        "data-component-name": "p",
                                        "data-component-content": "%7B%22text%22%3A%22A%20glimpse%20of%20the%20event%20moments%20from%20SJR%20Public%20School%2C%20HBR%20Layout.%22%2C%22className%22%3A%22text-sm%20sm%3Atext-%5B15px%5D%20leading-6%20max-w-3xl%22%7D",
                                        className: "text-sm sm:text-[15px] leading-6 max-w-3xl",
                                        style: {
                                            color: "#333"
                                        },
                                        children: "A glimpse of the event moments from SJR Public School, HBR Layout."
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/NewsDetail.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/pages/NewsDetail.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/pages/NewsDetail.tsx:99:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/pages/NewsDetail.tsx",
                                "data-component-line": "99",
                                "data-component-file": "NewsDetail.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22grid%20grid-cols-1%20sm%3Agrid-cols-2%20lg%3Agrid-cols-4%20gap-5%22%7D",
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",
                                children: event.gallery.map((image, index)=>/*#__PURE__*/ _jsxDEV("button", {
                                        "data-lov-id": "src/pages/NewsDetail.tsx:101:16",
                                        "data-lov-name": "button",
                                        "data-component-path": "src/pages/NewsDetail.tsx",
                                        "data-component-line": "101",
                                        "data-component-file": "NewsDetail.tsx",
                                        "data-component-name": "button",
                                        "data-component-content": "%7B%22className%22%3A%22group%20aspect-%5B4%2F3%5D%20overflow-hidden%20rounded-xl%20bg-white%20text-left%20focus%3Aoutline-none%20focus%3Aring-2%20focus%3Aring-indian-green%20focus%3Aring-offset-4%22%7D",
                                        type: "button",
                                        onClick: ()=>setSelectedImageIndex(index),
                                        className: "group aspect-[4/3] overflow-hidden rounded-xl bg-white text-left focus:outline-none focus:ring-2 focus:ring-indian-green focus:ring-offset-4",
                                        style: {
                                            boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
                                        },
                                        "aria-label": `Open ${image.alt} gallery image`,
                                        children: /*#__PURE__*/ _jsxDEV("img", {
                                            "data-lov-id": "src/pages/NewsDetail.tsx:109:18",
                                            "data-lov-name": "img",
                                            "data-component-path": "src/pages/NewsDetail.tsx",
                                            "data-component-line": "109",
                                            "data-component-file": "NewsDetail.tsx",
                                            "data-component-name": "img",
                                            "data-component-content": "%7B%22className%22%3A%22h-full%20w-full%20object-cover%20transition-transform%20duration-500%20group-hover%3Ascale-105%22%7D",
                                            src: image.src,
                                            alt: image.alt,
                                            loading: "lazy",
                                            className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/NewsDetail.tsx",
                                            lineNumber: 109,
                                            columnNumber: 19
                                        }, this)
                                    }, image.alt, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/NewsDetail.tsx",
                                        lineNumber: 101,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/NewsDetail.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/pages/NewsDetail.tsx:119:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/pages/NewsDetail.tsx",
                                "data-component-line": "119",
                                "data-component-file": "NewsDetail.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22mt-12%20flex%20justify-center%20sm%3Ajustify-start%22%7D",
                                className: "mt-12 flex justify-center sm:justify-start",
                                children: /*#__PURE__*/ _jsxDEV(Button, {
                                    "data-lov-id": "src/pages/NewsDetail.tsx:120:14",
                                    "data-lov-name": "Button",
                                    "data-component-path": "src/pages/NewsDetail.tsx",
                                    "data-component-line": "120",
                                    "data-component-file": "NewsDetail.tsx",
                                    "data-component-name": "Button",
                                    "data-component-content": "%7B%22className%22%3A%22rounded-lg%20bg-indian-green%20px-6%20text-white%20hover%3Abg-indian-green%2F90%22%7D",
                                    asChild: true,
                                    className: "rounded-lg bg-indian-green px-6 text-white hover:bg-indian-green/90",
                                    children: /*#__PURE__*/ _jsxDEV(Link, {
                                        "data-lov-id": "src/pages/NewsDetail.tsx:121:16",
                                        "data-lov-name": "Link",
                                        "data-component-path": "src/pages/NewsDetail.tsx",
                                        "data-component-line": "121",
                                        "data-component-file": "NewsDetail.tsx",
                                        "data-component-name": "Link",
                                        "data-component-content": "%7B%22text%22%3A%22Back%20to%20News%22%7D",
                                        to: "/news",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV(ChevronLeft, {
                                                "data-lov-id": "src/pages/NewsDetail.tsx:122:18",
                                                "data-lov-name": "ChevronLeft",
                                                "data-component-path": "src/pages/NewsDetail.tsx",
                                                "data-component-line": "122",
                                                "data-component-file": "NewsDetail.tsx",
                                                "data-component-name": "ChevronLeft",
                                                "data-component-content": "%7B%22className%22%3A%22mr-2%20h-4%20w-4%22%7D",
                                                className: "mr-2 h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/NewsDetail.tsx",
                                                lineNumber: 122,
                                                columnNumber: 19
                                            }, this),
                                            "Back to News"
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/NewsDetail.tsx",
                                        lineNumber: 121,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/NewsDetail.tsx",
                                    lineNumber: 120,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/NewsDetail.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/sjrsh916/public_html/src/pages/NewsDetail.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/NewsDetail.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/NewsDetail.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            selectedImage && /*#__PURE__*/ _jsxDEV("div", {
                "data-lov-id": "src/pages/NewsDetail.tsx:132:8",
                "data-lov-name": "div",
                "data-component-path": "src/pages/NewsDetail.tsx",
                "data-component-line": "132",
                "data-component-file": "NewsDetail.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22fixed%20inset-0%20z-50%20flex%20items-center%20justify-center%20bg-black%2F90%20p-4%20sm%3Ap-6%22%7D",
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6",
                role: "dialog",
                "aria-modal": "true",
                "aria-label": `${event.title} image preview`,
                onClick: ()=>setSelectedImageIndex(null),
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/NewsDetail.tsx:139:10",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/NewsDetail.tsx",
                    "data-component-line": "139",
                    "data-component-file": "NewsDetail.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22relative%20flex%20h-full%20w-full%20max-w-7xl%20items-center%20justify-center%22%7D",
                    className: "relative flex h-full w-full max-w-7xl items-center justify-center",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ _jsxDEV("button", {
                            "data-lov-id": "src/pages/NewsDetail.tsx:140:12",
                            "data-lov-name": "button",
                            "data-component-path": "src/pages/NewsDetail.tsx",
                            "data-component-line": "140",
                            "data-component-file": "NewsDetail.tsx",
                            "data-component-name": "button",
                            "data-component-content": "%7B%22className%22%3A%22absolute%20right-0%20top-0%20z-10%20inline-flex%20h-11%20w-11%20items-center%20justify-center%20rounded-full%20bg-black%2F65%20text-white%20shadow-lg%20transition-colors%20hover%3Abg-black%20focus%3Aoutline-none%20focus%3Aring-2%20focus%3Aring-white%22%7D",
                            type: "button",
                            onClick: ()=>setSelectedImageIndex(null),
                            className: "absolute right-0 top-0 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/65 text-white shadow-lg transition-colors hover:bg-black focus:outline-none focus:ring-2 focus:ring-white",
                            "aria-label": "Close image preview",
                            children: /*#__PURE__*/ _jsxDEV(X, {
                                "data-lov-id": "src/pages/NewsDetail.tsx:146:14",
                                "data-lov-name": "X",
                                "data-component-path": "src/pages/NewsDetail.tsx",
                                "data-component-line": "146",
                                "data-component-file": "NewsDetail.tsx",
                                "data-component-name": "X",
                                "data-component-content": "%7B%22className%22%3A%22h-5%20w-5%22%7D",
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/NewsDetail.tsx",
                                lineNumber: 146,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/NewsDetail.tsx",
                            lineNumber: 140,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/NewsDetail.tsx:149:12",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/NewsDetail.tsx",
                            "data-component-line": "149",
                            "data-component-file": "NewsDetail.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22relative%20flex%20h-full%20w-full%20items-center%20justify-center%22%7D",
                            className: "relative flex h-full w-full items-center justify-center",
                            children: [
                                /*#__PURE__*/ _jsxDEV("img", {
                                    "data-lov-id": "src/pages/NewsDetail.tsx:150:14",
                                    "data-lov-name": "img",
                                    "data-component-path": "src/pages/NewsDetail.tsx",
                                    "data-component-line": "150",
                                    "data-component-file": "NewsDetail.tsx",
                                    "data-component-name": "img",
                                    "data-component-content": "%7B%22className%22%3A%22max-h-%5B88vh%5D%20max-w-full%20object-contain%22%7D",
                                    src: selectedImage.src,
                                    alt: selectedImage.alt,
                                    className: "max-h-[88vh] max-w-full object-contain"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/NewsDetail.tsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("button", {
                                    "data-lov-id": "src/pages/NewsDetail.tsx:156:14",
                                    "data-lov-name": "button",
                                    "data-component-path": "src/pages/NewsDetail.tsx",
                                    "data-component-line": "156",
                                    "data-component-file": "NewsDetail.tsx",
                                    "data-component-name": "button",
                                    "data-component-content": "%7B%22className%22%3A%22absolute%20left-0%20sm%3Aleft-3%20top-1%2F2%20inline-flex%20h-11%20w-11%20-translate-y-1%2F2%20items-center%20justify-center%20rounded-full%20bg-black%2F65%20text-white%20shadow-lg%20transition-colors%20hover%3Abg-black%20disabled%3Acursor-not-allowed%20disabled%3Aopacity-40%20focus%3Aoutline-none%20focus%3Aring-2%20focus%3Aring-white%22%7D",
                                    type: "button",
                                    onClick: showPreviousImage,
                                    disabled: !hasMultipleImages,
                                    className: "absolute left-0 sm:left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/65 text-white shadow-lg transition-colors hover:bg-black disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus:ring-2 focus:ring-white",
                                    "aria-label": "Show previous image",
                                    children: /*#__PURE__*/ _jsxDEV(ChevronLeft, {
                                        "data-lov-id": "src/pages/NewsDetail.tsx:163:16",
                                        "data-lov-name": "ChevronLeft",
                                        "data-component-path": "src/pages/NewsDetail.tsx",
                                        "data-component-line": "163",
                                        "data-component-file": "NewsDetail.tsx",
                                        "data-component-name": "ChevronLeft",
                                        "data-component-content": "%7B%22className%22%3A%22h-6%20w-6%22%7D",
                                        className: "h-6 w-6"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/NewsDetail.tsx",
                                        lineNumber: 163,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/NewsDetail.tsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("button", {
                                    "data-lov-id": "src/pages/NewsDetail.tsx:166:14",
                                    "data-lov-name": "button",
                                    "data-component-path": "src/pages/NewsDetail.tsx",
                                    "data-component-line": "166",
                                    "data-component-file": "NewsDetail.tsx",
                                    "data-component-name": "button",
                                    "data-component-content": "%7B%22className%22%3A%22absolute%20right-0%20sm%3Aright-3%20top-1%2F2%20inline-flex%20h-11%20w-11%20-translate-y-1%2F2%20items-center%20justify-center%20rounded-full%20bg-black%2F65%20text-white%20shadow-lg%20transition-colors%20hover%3Abg-black%20disabled%3Acursor-not-allowed%20disabled%3Aopacity-40%20focus%3Aoutline-none%20focus%3Aring-2%20focus%3Aring-white%22%7D",
                                    type: "button",
                                    onClick: showNextImage,
                                    disabled: !hasMultipleImages,
                                    className: "absolute right-0 sm:right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/65 text-white shadow-lg transition-colors hover:bg-black disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus:ring-2 focus:ring-white",
                                    "aria-label": "Show next image",
                                    children: /*#__PURE__*/ _jsxDEV(ChevronRight, {
                                        "data-lov-id": "src/pages/NewsDetail.tsx:173:16",
                                        "data-lov-name": "ChevronRight",
                                        "data-component-path": "src/pages/NewsDetail.tsx",
                                        "data-component-line": "173",
                                        "data-component-file": "NewsDetail.tsx",
                                        "data-component-name": "ChevronRight",
                                        "data-component-content": "%7B%22className%22%3A%22h-6%20w-6%22%7D",
                                        className: "h-6 w-6"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/NewsDetail.tsx",
                                        lineNumber: 173,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/NewsDetail.tsx",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/pages/NewsDetail.tsx",
                            lineNumber: 149,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/pages/NewsDetail.tsx",
                    lineNumber: 139,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/NewsDetail.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/sjrsh916/public_html/src/pages/NewsDetail.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
};
_s(NewsDetail, "Gp9KQAfQLwhq5m5YicQwUKTTJVA=", false, function() {
    return [
        useParams
    ];
});
_c = NewsDetail;
export default NewsDetail;
var _c;
$RefreshReg$(_c, "NewsDetail");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/pages/NewsDetail.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/pages/NewsDetail.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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QUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQywwQkFBQTtvQ0FDSnVCLE1BQUs7b0NBQ0xDLFNBQVNmO29DQUNUeUIsVUFBVSxDQUFDM0I7b0NBQ1hLLFdBQVU7b0NBQ1ZjLGNBQVc7OENBRVgsc0JBQUNqRTt3Q0FBVWlDLGVBQUE7d0NBQUFDLGlCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLHVCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsMEJBQUE7d0NBQUVZLFdBQVU7Ozs7Ozs7Ozs7OzhDQUd6QixRQUFDVTtvQ0FBSzVCLGVBQUE7b0NBQUFDLGlCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsMEJBQUE7b0NBQ0p1QixNQUFLO29DQUNMQyxTQUFTZDtvQ0FDVHdCLFVBQVUsQ0FBQzNCO29DQUNYSyxXQUFVO29DQUNWYyxjQUFXOzhDQUVYLHNCQUFDaEU7d0NBQVdnQyxlQUFBO3dDQUFBQyxpQkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLHVCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLDBCQUFBO3dDQUFFWSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXhDO0dBM0tNMUM7O1FBQ2FEOzs7S0FEYkM7QUE2S04sZUFBZUEsV0FBVSIsIm5hbWVzIjpbIkxheW91dCIsIlBhZ2VIZXJvIiwiQnV0dG9uIiwiZ2V0UHVibGljQ29udGVudCIsImZpbmROZXdzSXRlbSIsIkNhbGVuZGFyIiwiQ2hldnJvbkxlZnQiLCJDaGV2cm9uUmlnaHQiLCJYIiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVN0YXRlIiwiTGluayIsIk5hdmlnYXRlIiwidXNlUGFyYW1zIiwiTmV3c0RldGFpbCIsInNsdWciLCJhZG1pbk5ld3MiLCJzZXRBZG1pbk5ld3MiLCJsb2FkZWQiLCJzZXRMb2FkZWQiLCJzZWxlY3RlZEltYWdlSW5kZXgiLCJzZXRTZWxlY3RlZEltYWdlSW5kZXgiLCJ0aGVuIiwicmVzdWx0IiwiaXRlbXMiLCJjYXRjaCIsImZpbmFsbHkiLCJldmVudCIsIml0ZW0iLCJ1bmRlZmluZWQiLCJ0aXRsZSIsImRhdGUiLCJib2R5IiwiZ2FsbGVyeSIsIm1hcCIsInNyYyIsImluZGV4IiwiYWx0IiwiZGF0YS1sb3YtaWQiLCJkYXRhLWxvdi1uYW1lIiwiZGF0YS1jb21wb25lbnQtcGF0aCIsImRhdGEtY29tcG9uZW50LWxpbmUiLCJkYXRhLWNvbXBvbmVudC1maWxlIiwiZGF0YS1jb21wb25lbnQtbmFtZSIsImRhdGEtY29tcG9uZW50LWNvbnRlbnQiLCJicmVhZGNydW1icyIsImxhYmVsIiwicGF0aCIsInRvIiwicmVwbGFjZSIsInNlbGVjdGVkSW1hZ2UiLCJoYXNNdWx0aXBsZUltYWdlcyIsImxlbmd0aCIsInNob3dQcmV2aW91c0ltYWdlIiwic2hvd05leHRJbWFnZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJhcnRpY2xlIiwic3BhbiIsInN0eWxlIiwiY29sb3IiLCJwYXJhZ3JhcGgiLCJwIiwiaDIiLCJpbWFnZSIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwiYm94U2hhZG93IiwiYXJpYS1sYWJlbCIsImltZyIsImxvYWRpbmciLCJhc0NoaWxkIiwicm9sZSIsImFyaWEtbW9kYWwiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiZGlzYWJsZWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiTmV3c0RldGFpbC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFBhZ2VIZXJvIGZyb20gXCJAL2NvbXBvbmVudHMvUGFnZUhlcm9cIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBBZG1pbkNvbnRlbnRJdGVtLCBnZXRQdWJsaWNDb250ZW50IH0gZnJvbSBcIkAvbGliL2FwaVwiO1xuaW1wb3J0IHsgZmluZE5ld3NJdGVtIH0gZnJvbSBcIkAvbGliL25ld3NDb250ZW50XCI7XG5pbXBvcnQgeyBDYWxlbmRhciwgQ2hldnJvbkxlZnQsIENoZXZyb25SaWdodCwgWCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmssIE5hdmlnYXRlLCB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5jb25zdCBOZXdzRGV0YWlsID0gKCkgPT4ge1xuICBjb25zdCB7IHNsdWcgfSA9IHVzZVBhcmFtcygpO1xuICBjb25zdCBbYWRtaW5OZXdzLCBzZXRBZG1pbk5ld3NdID0gdXNlU3RhdGU8QWRtaW5Db250ZW50SXRlbVtdPihbXSk7XG4gIGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZWxlY3RlZEltYWdlSW5kZXgsIHNldFNlbGVjdGVkSW1hZ2VJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXIgfCBudWxsPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFB1YmxpY0NvbnRlbnQoXCJuZXdzXCIpXG4gICAgICAudGhlbigocmVzdWx0KSA9PiBzZXRBZG1pbk5ld3MocmVzdWx0Lml0ZW1zKSlcbiAgICAgIC5jYXRjaCgoKSA9PiBzZXRBZG1pbk5ld3MoW10pKVxuICAgICAgLmZpbmFsbHkoKCkgPT4gc2V0TG9hZGVkKHRydWUpKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGV2ZW50ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IGZpbmROZXdzSXRlbShhZG1pbk5ld3MsIHNsdWcpO1xuICAgIGlmICghaXRlbSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXG4gICAgICBkYXRlOiBpdGVtLmRhdGUsXG4gICAgICBib2R5OiBpdGVtLmJvZHksXG4gICAgICBnYWxsZXJ5OiBpdGVtLmdhbGxlcnkubWFwKChzcmMsIGluZGV4KSA9PiAoeyBzcmMsIGFsdDogYCR7aXRlbS50aXRsZX0gJHtpbmRleCArIDF9YCB9KSksXG4gICAgfTtcbiAgfSwgW2FkbWluTmV3cywgc2x1Z10pO1xuXG4gIGlmICghZXZlbnQgJiYgIWxvYWRlZCkge1xuICAgIHJldHVybiA8TGF5b3V0PjxQYWdlSGVybyB0aXRsZT1cIkxvYWRpbmcgTmV3c1wiIGJyZWFkY3J1bWJzPXtbeyBsYWJlbDogXCJOZXdzXCIsIHBhdGg6IFwiL25ld3NcIiB9XX0gLz48L0xheW91dD47XG4gIH1cblxuICBpZiAoIWV2ZW50KSB7XG4gICAgcmV0dXJuIDxOYXZpZ2F0ZSB0bz1cIi9uZXdzXCIgcmVwbGFjZSAvPjtcbiAgfVxuXG4gIGNvbnN0IHNlbGVjdGVkSW1hZ2UgPVxuICAgIHNlbGVjdGVkSW1hZ2VJbmRleCAhPT0gbnVsbCA/IGV2ZW50LmdhbGxlcnlbc2VsZWN0ZWRJbWFnZUluZGV4XSA6IG51bGw7XG4gIGNvbnN0IGhhc011bHRpcGxlSW1hZ2VzID0gZXZlbnQuZ2FsbGVyeS5sZW5ndGggPiAxO1xuXG4gIGNvbnN0IHNob3dQcmV2aW91c0ltYWdlID0gKCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZEltYWdlSW5kZXggPT09IG51bGwgfHwgIWhhc011bHRpcGxlSW1hZ2VzKSByZXR1cm47XG4gICAgc2V0U2VsZWN0ZWRJbWFnZUluZGV4KFxuICAgICAgKHNlbGVjdGVkSW1hZ2VJbmRleCAtIDEgKyBldmVudC5nYWxsZXJ5Lmxlbmd0aCkgJSBldmVudC5nYWxsZXJ5Lmxlbmd0aFxuICAgICk7XG4gIH07XG5cbiAgY29uc3Qgc2hvd05leHRJbWFnZSA9ICgpID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRJbWFnZUluZGV4ID09PSBudWxsIHx8ICFoYXNNdWx0aXBsZUltYWdlcykgcmV0dXJuO1xuICAgIHNldFNlbGVjdGVkSW1hZ2VJbmRleCgoc2VsZWN0ZWRJbWFnZUluZGV4ICsgMSkgJSBldmVudC5nYWxsZXJ5Lmxlbmd0aCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPFBhZ2VIZXJvXG4gICAgICAgIHRpdGxlPXtldmVudC50aXRsZX1cbiAgICAgICAgYnJlYWRjcnVtYnM9e1tcbiAgICAgICAgICB7IGxhYmVsOiBcIk5ld3NcIiwgcGF0aDogXCIvbmV3c1wiIH0sXG4gICAgICAgICAgeyBsYWJlbDogZXZlbnQudGl0bGUgfSxcbiAgICAgICAgXX1cbiAgICAgIC8+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTEyIHNtOnB5LTE2IGJnLWJhY2tncm91bmRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwibXgtYXV0byB3LWZ1bGwgbWF4LXctNnhsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiByb3VuZGVkLWZ1bGwgYmctaW5kaWFuLWdyZWVuLzEwIHB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1pbmRpYW4tZ3JlZW4gbWItNVwiPlxuICAgICAgICAgICAgICAgIDxDYWxlbmRhciBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj57ZXZlbnQuZGF0ZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IHRleHQtc20gc206dGV4dC1bMTVweF0gbGVhZGluZy02IHNtOmxlYWRpbmctN1wiIHN0eWxlPXt7IGNvbG9yOiBcIiMzMzNcIiB9fT5cbiAgICAgICAgICAgICAgICB7ZXZlbnQuYm9keS5tYXAoKHBhcmFncmFwaCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPHAga2V5PXtwYXJhZ3JhcGh9PntwYXJhZ3JhcGh9PC9wPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInBiLTIwIGJnLWJhY2tncm91bmRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIHctZnVsbCBtYXgtdy02eGxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOCBwdC0yXCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBzbTp0ZXh0LTN4bCBmb250LWJvbGQgbWItM1wiIHN0eWxlPXt7IGNvbG9yOiBcIiMxMTFcIiB9fT5cbiAgICAgICAgICAgICAgICBFdmVudCBHYWxsZXJ5XG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gc206dGV4dC1bMTVweF0gbGVhZGluZy02IG1heC13LTN4bFwiIHN0eWxlPXt7IGNvbG9yOiBcIiMzMzNcIiB9fT5cbiAgICAgICAgICAgICAgICBBIGdsaW1wc2Ugb2YgdGhlIGV2ZW50IG1vbWVudHMgZnJvbSBTSlIgUHVibGljIFNjaG9vbCwgSEJSIExheW91dC5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNCBnYXAtNVwiPlxuICAgICAgICAgICAgICB7ZXZlbnQuZ2FsbGVyeS5tYXAoKGltYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGtleT17aW1hZ2UuYWx0fVxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZEltYWdlSW5kZXgoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgYXNwZWN0LVs0LzNdIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLXhsIGJnLXdoaXRlIHRleHQtbGVmdCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5kaWFuLWdyZWVuIGZvY3VzOnJpbmctb2Zmc2V0LTRcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm94U2hhZG93OiBcIjAgMTBweCAzMHB4IHJnYmEoMCwwLDAsMC4wOClcIiB9fVxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17YE9wZW4gJHtpbWFnZS5hbHR9IGdhbGxlcnkgaW1hZ2VgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZS5zcmN9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17aW1hZ2UuYWx0fVxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgb2JqZWN0LWNvdmVyIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTUwMCBncm91cC1ob3ZlcjpzY2FsZS0xMDVcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMiBmbGV4IGp1c3RpZnktY2VudGVyIHNtOmp1c3RpZnktc3RhcnRcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBhc0NoaWxkIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctaW5kaWFuLWdyZWVuIHB4LTYgdGV4dC13aGl0ZSBob3ZlcjpiZy1pbmRpYW4tZ3JlZW4vOTBcIj5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9uZXdzXCI+XG4gICAgICAgICAgICAgICAgICA8Q2hldnJvbkxlZnQgY2xhc3NOYW1lPVwibXItMiBoLTQgdy00XCIgLz5cbiAgICAgICAgICAgICAgICAgIEJhY2sgdG8gTmV3c1xuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIHtzZWxlY3RlZEltYWdlICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgei01MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ibGFjay85MCBwLTQgc206cC02XCJcbiAgICAgICAgICByb2xlPVwiZGlhbG9nXCJcbiAgICAgICAgICBhcmlhLW1vZGFsPVwidHJ1ZVwiXG4gICAgICAgICAgYXJpYS1sYWJlbD17YCR7ZXZlbnQudGl0bGV9IGltYWdlIHByZXZpZXdgfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkSW1hZ2VJbmRleChudWxsKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBoLWZ1bGwgdy1mdWxsIG1heC13LTd4bCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIiBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZEltYWdlSW5kZXgobnVsbCl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgdG9wLTAgei0xMCBpbmxpbmUtZmxleCBoLTExIHctMTEgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBiZy1ibGFjay82NSB0ZXh0LXdoaXRlIHNoYWRvdy1sZyB0cmFuc2l0aW9uLWNvbG9ycyBob3ZlcjpiZy1ibGFjayBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctd2hpdGVcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2UgaW1hZ2UgcHJldmlld1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxYIGNsYXNzTmFtZT1cImgtNSB3LTVcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBoLWZ1bGwgdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXtzZWxlY3RlZEltYWdlLnNyY31cbiAgICAgICAgICAgICAgICBhbHQ9e3NlbGVjdGVkSW1hZ2UuYWx0fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1heC1oLVs4OHZoXSBtYXgtdy1mdWxsIG9iamVjdC1jb250YWluXCJcbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17c2hvd1ByZXZpb3VzSW1hZ2V9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFoYXNNdWx0aXBsZUltYWdlc31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgc206bGVmdC0zIHRvcC0xLzIgaW5saW5lLWZsZXggaC0xMSB3LTExIC10cmFuc2xhdGUteS0xLzIgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBiZy1ibGFjay82NSB0ZXh0LXdoaXRlIHNoYWRvdy1sZyB0cmFuc2l0aW9uLWNvbG9ycyBob3ZlcjpiZy1ibGFjayBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWQgZGlzYWJsZWQ6b3BhY2l0eS00MCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctd2hpdGVcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTaG93IHByZXZpb3VzIGltYWdlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDaGV2cm9uTGVmdCBjbGFzc05hbWU9XCJoLTYgdy02XCIgLz5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dOZXh0SW1hZ2V9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFoYXNNdWx0aXBsZUltYWdlc31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0wIHNtOnJpZ2h0LTMgdG9wLTEvMiBpbmxpbmUtZmxleCBoLTExIHctMTEgLXRyYW5zbGF0ZS15LTEvMiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIGJnLWJsYWNrLzY1IHRleHQtd2hpdGUgc2hhZG93LWxnIHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOmJnLWJsYWNrIGRpc2FibGVkOmN1cnNvci1ub3QtYWxsb3dlZCBkaXNhYmxlZDpvcGFjaXR5LTQwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy13aGl0ZVwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNob3cgbmV4dCBpbWFnZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q2hldnJvblJpZ2h0IGNsYXNzTmFtZT1cImgtNiB3LTZcIiAvPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXdzRGV0YWlsO1xuIl0sImZpbGUiOiIvaG9tZS9zanJzaDkxNi9wdWJsaWNfaHRtbC9zcmMvcGFnZXMvTmV3c0RldGFpbC50c3gifQ==