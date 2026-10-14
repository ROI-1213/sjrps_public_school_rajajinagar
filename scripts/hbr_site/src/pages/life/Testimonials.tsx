import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/life/Testimonials.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/pages/life/Testimonials.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import Layout from "/src/components/Layout.tsx";
import PageHero from "/src/components/PageHero.tsx";
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=5efa796b";
import { Quote, MessageCircle } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
import __vite__cjsImport7_react from "/node_modules/.vite/deps/react.js?v=5efa796b"; const useEffect = __vite__cjsImport7_react["useEffect"]; const useMemo = __vite__cjsImport7_react["useMemo"]; const useState = __vite__cjsImport7_react["useState"];
import { getPublicContent } from "/src/lib/api.ts";
import { mergeTestimonialItems } from "/src/lib/testimonialContent.ts";
const TestimonialCard = ({ t, i })=>/*#__PURE__*/ _jsxDEV(motion.div, {
        "data-lov-id": "src/pages/life/Testimonials.tsx:11:2",
        "data-lov-name": "motion.div",
        "data-component-path": "src/pages/life/Testimonials.tsx",
        "data-component-line": "11",
        "data-component-file": "Testimonials.tsx",
        "data-component-name": "motion.div",
        "data-component-content": "%7B%22className%22%3A%22h-full%22%7D",
        initial: {
            opacity: 0,
            y: 24
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            margin: "-50px"
        },
        transition: {
            duration: 0.5,
            delay: i * 0.08
        },
        className: "h-full",
        children: /*#__PURE__*/ _jsxDEV(Card, {
            "data-lov-id": "src/pages/life/Testimonials.tsx:18:4",
            "data-lov-name": "Card",
            "data-component-path": "src/pages/life/Testimonials.tsx",
            "data-component-line": "18",
            "data-component-file": "Testimonials.tsx",
            "data-component-name": "Card",
            "data-component-content": "%7B%22className%22%3A%22group%20h-full%20bg-white%20rounded-2xl%20border%20border-border%2F60%20shadow-sm%20hover%3Ashadow-2xl%20hover%3A-translate-y-1%20transition-all%20duration-300%20overflow-hidden%22%7D",
            className: "group h-full bg-white rounded-2xl border border-border/60 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden",
            children: [
                /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/life/Testimonials.tsx:19:6",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/life/Testimonials.tsx",
                    "data-component-line": "19",
                    "data-component-file": "Testimonials.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22h-1.5%20w-full%20bg-gradient-to-r%20from-indian-green%20via-saffron-orange%20to-indian-green%22%7D",
                    className: "h-1.5 w-full bg-gradient-to-r from-indian-green via-saffron-orange to-indian-green"
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/life/Testimonials.tsx",
                    lineNumber: 19,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ _jsxDEV(CardContent, {
                    "data-lov-id": "src/pages/life/Testimonials.tsx:20:6",
                    "data-lov-name": "CardContent",
                    "data-component-path": "src/pages/life/Testimonials.tsx",
                    "data-component-line": "20",
                    "data-component-file": "Testimonials.tsx",
                    "data-component-name": "CardContent",
                    "data-component-content": "%7B%22className%22%3A%22p-7%20md%3Ap-8%20h-full%20flex%20flex-col%22%7D",
                    className: "p-7 md:p-8 h-full flex flex-col",
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/life/Testimonials.tsx:21:8",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/life/Testimonials.tsx",
                            "data-component-line": "21",
                            "data-component-file": "Testimonials.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22w-11%20h-11%20rounded-xl%20bg-indian-green%2F10%20flex%20items-center%20justify-center%20mb-5%20group-hover%3Abg-indian-green%20transition-colors%22%7D",
                            className: "w-11 h-11 rounded-xl bg-indian-green/10 flex items-center justify-center mb-5 group-hover:bg-indian-green transition-colors",
                            children: /*#__PURE__*/ _jsxDEV(Quote, {
                                "data-lov-id": "src/pages/life/Testimonials.tsx:22:10",
                                "data-lov-name": "Quote",
                                "data-component-path": "src/pages/life/Testimonials.tsx",
                                "data-component-line": "22",
                                "data-component-file": "Testimonials.tsx",
                                "data-component-name": "Quote",
                                "data-component-content": "%7B%22className%22%3A%22h-5%20w-5%20text-indian-green%20group-hover%3Atext-white%20transition-colors%22%7D",
                                className: "h-5 w-5 text-indian-green group-hover:text-white transition-colors"
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/life/Testimonials.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/life/Testimonials.tsx",
                            lineNumber: 21,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/life/Testimonials.tsx:24:8",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/life/Testimonials.tsx",
                            "data-component-line": "24",
                            "data-component-file": "Testimonials.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22text-foreground%2F80%20leading-relaxed%20italic%20text-%5B15px%5D%20flex-1%22%7D",
                            className: "text-foreground/80 leading-relaxed italic text-[15px] flex-1",
                            children: /*#__PURE__*/ _jsxDEV("p", {
                                "data-lov-id": "src/pages/life/Testimonials.tsx:25:10",
                                "data-lov-name": "p",
                                "data-component-path": "src/pages/life/Testimonials.tsx",
                                "data-component-line": "25",
                                "data-component-file": "Testimonials.tsx",
                                "data-component-name": "p",
                                "data-component-content": "%7B%22text%22%3A%22%5C%22%20%5C%22%22%7D",
                                children: [
                                    '"',
                                    t.quote,
                                    '"'
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/pages/life/Testimonials.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/life/Testimonials.tsx",
                            lineNumber: 24,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/life/Testimonials.tsx:27:8",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/life/Testimonials.tsx",
                            "data-component-line": "27",
                            "data-component-file": "Testimonials.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22mt-6%20pt-5%20border-t%20border-border%2F70%20flex%20items-center%20gap-4%22%7D",
                            className: "mt-6 pt-5 border-t border-border/70 flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/life/Testimonials.tsx:28:10",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/life/Testimonials.tsx",
                                    "data-component-line": "28",
                                    "data-component-file": "Testimonials.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22relative%20flex-shrink-0%22%7D",
                                    className: "relative flex-shrink-0",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/pages/life/Testimonials.tsx:29:12",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/pages/life/Testimonials.tsx",
                                            "data-component-line": "29",
                                            "data-component-file": "Testimonials.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22absolute%20inset-0%20rounded-full%20bg-gradient-to-tr%20from-indian-green%20to-saffron-orange%20p-%5B2px%5D%22%7D",
                                            className: "absolute inset-0 rounded-full bg-gradient-to-tr from-indian-green to-saffron-orange p-[2px]",
                                            children: /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/life/Testimonials.tsx:30:14",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/life/Testimonials.tsx",
                                                "data-component-line": "30",
                                                "data-component-file": "Testimonials.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22w-full%20h-full%20rounded-full%20bg-white%22%7D",
                                                className: "w-full h-full rounded-full bg-white"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/life/Testimonials.tsx",
                                                lineNumber: 30,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/life/Testimonials.tsx",
                                            lineNumber: 29,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("img", {
                                            "data-lov-id": "src/pages/life/Testimonials.tsx:32:12",
                                            "data-lov-name": "img",
                                            "data-component-path": "src/pages/life/Testimonials.tsx",
                                            "data-component-line": "32",
                                            "data-component-file": "Testimonials.tsx",
                                            "data-component-name": "img",
                                            "data-component-content": "%7B%22className%22%3A%22relative%20h-14%20w-14%20rounded-full%20object-cover%22%7D",
                                            src: t.image,
                                            alt: t.name,
                                            className: "relative h-14 w-14 rounded-full object-cover"
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/life/Testimonials.tsx",
                                            lineNumber: 32,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/life/Testimonials.tsx",
                                    lineNumber: 28,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/life/Testimonials.tsx:38:10",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/life/Testimonials.tsx",
                                    "data-component-line": "38",
                                    "data-component-file": "Testimonials.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22min-w-0%22%7D",
                                    className: "min-w-0",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("h4", {
                                            "data-lov-id": "src/pages/life/Testimonials.tsx:39:12",
                                            "data-lov-name": "h4",
                                            "data-component-path": "src/pages/life/Testimonials.tsx",
                                            "data-component-line": "39",
                                            "data-component-file": "Testimonials.tsx",
                                            "data-component-name": "h4",
                                            "data-component-content": "%7B%22className%22%3A%22font-bold%20text-school-brown%20leading-tight%20truncate%22%7D",
                                            className: "font-bold text-school-brown leading-tight truncate",
                                            children: t.name
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/life/Testimonials.tsx",
                                            lineNumber: 39,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("p", {
                                            "data-lov-id": "src/pages/life/Testimonials.tsx:40:12",
                                            "data-lov-name": "p",
                                            "data-component-path": "src/pages/life/Testimonials.tsx",
                                            "data-component-line": "40",
                                            "data-component-file": "Testimonials.tsx",
                                            "data-component-name": "p",
                                            "data-component-content": "%7B%22className%22%3A%22text-sm%20text-indian-green%20font-medium%20mt-0.5%22%7D",
                                            className: "text-sm text-indian-green font-medium mt-0.5",
                                            children: t.role
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/life/Testimonials.tsx",
                                            lineNumber: 40,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/life/Testimonials.tsx",
                                    lineNumber: 38,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/pages/life/Testimonials.tsx",
                            lineNumber: 27,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/pages/life/Testimonials.tsx",
                    lineNumber: 20,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/sjrsh916/public_html/src/pages/life/Testimonials.tsx",
            lineNumber: 18,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/pages/life/Testimonials.tsx",
        lineNumber: 11,
        columnNumber: 3
    }, this);
_c = TestimonialCard;
const Testimonials = ()=>{
    _s();
    const [adminTestimonials, setAdminTestimonials] = useState([]);
    useEffect(()=>{
        getPublicContent("testimonial").then((result)=>setAdminTestimonials(result.items)).catch(()=>setAdminTestimonials([]));
    }, []);
    const testimonials = useMemo(()=>mergeTestimonialItems(adminTestimonials), [
        adminTestimonials
    ]);
    return /*#__PURE__*/ _jsxDEV(Layout, {
        "data-lov-id": "src/pages/life/Testimonials.tsx:58:4",
        "data-lov-name": "Layout",
        "data-component-path": "src/pages/life/Testimonials.tsx",
        "data-component-line": "58",
        "data-component-file": "Testimonials.tsx",
        "data-component-name": "Layout",
        "data-component-content": "%7B%7D",
        children: [
            /*#__PURE__*/ _jsxDEV(PageHero, {
                "data-lov-id": "src/pages/life/Testimonials.tsx:59:6",
                "data-lov-name": "PageHero",
                "data-component-path": "src/pages/life/Testimonials.tsx",
                "data-component-line": "59",
                "data-component-file": "Testimonials.tsx",
                "data-component-name": "PageHero",
                "data-component-content": "%7B%7D",
                title: "What Our Parents Say",
                breadcrumbs: [
                    {
                        label: "Life @ SJRPS-HBR"
                    },
                    {
                        label: "Testimonials"
                    }
                ]
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/life/Testimonials.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/life/Testimonials.tsx:65:4",
                "data-lov-name": "section",
                "data-component-path": "src/pages/life/Testimonials.tsx",
                "data-component-line": "65",
                "data-component-file": "Testimonials.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20bg-gradient-to-b%20from-white%20to-muted%2F30%22%7D",
                className: "py-16 bg-gradient-to-b from-white to-muted/30",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/life/Testimonials.tsx:66:6",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/life/Testimonials.tsx",
                    "data-component-line": "66",
                    "data-component-file": "Testimonials.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20max-w-3xl%20text-center%22%7D",
                    className: "container mx-auto px-4 max-w-3xl text-center",
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/life/Testimonials.tsx:67:8",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/life/Testimonials.tsx",
                            "data-component-line": "67",
                            "data-component-file": "Testimonials.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22w-16%20h-16%20rounded-2xl%20bg-indian-green%20flex%20items-center%20justify-center%20mx-auto%20mb-6%20shadow-lg%20shadow-indian-green%2F20%22%7D",
                            className: "w-16 h-16 rounded-2xl bg-indian-green flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indian-green/20",
                            children: /*#__PURE__*/ _jsxDEV(MessageCircle, {
                                "data-lov-id": "src/pages/life/Testimonials.tsx:68:10",
                                "data-lov-name": "MessageCircle",
                                "data-component-path": "src/pages/life/Testimonials.tsx",
                                "data-component-line": "68",
                                "data-component-file": "Testimonials.tsx",
                                "data-component-name": "MessageCircle",
                                "data-component-content": "%7B%22className%22%3A%22h-8%20w-8%20text-white%22%7D",
                                className: "h-8 w-8 text-white"
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/life/Testimonials.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/life/Testimonials.tsx",
                            lineNumber: 67,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ _jsxDEV("h2", {
                            "data-lov-id": "src/pages/life/Testimonials.tsx:70:8",
                            "data-lov-name": "h2",
                            "data-component-path": "src/pages/life/Testimonials.tsx",
                            "data-component-line": "70",
                            "data-component-file": "Testimonials.tsx",
                            "data-component-name": "h2",
                            "data-component-content": "%7B%22text%22%3A%22Voices%20of%20%26%22%2C%22className%22%3A%22text-3xl%20lg%3Atext-4xl%20font-bold%20text-school-brown%20mb-4%22%7D",
                            className: "text-3xl lg:text-4xl font-bold text-school-brown mb-4",
                            children: [
                                "Voices of ",
                                /*#__PURE__*/ _jsxDEV("span", {
                                    "data-lov-id": "src/pages/life/Testimonials.tsx:71:20",
                                    "data-lov-name": "span",
                                    "data-component-path": "src/pages/life/Testimonials.tsx",
                                    "data-component-line": "71",
                                    "data-component-file": "Testimonials.tsx",
                                    "data-component-name": "span",
                                    "data-component-content": "%7B%22text%22%3A%22Trust%22%2C%22className%22%3A%22text-indian-green%22%7D",
                                    className: "text-indian-green",
                                    children: "Trust"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/life/Testimonials.tsx",
                                    lineNumber: 71,
                                    columnNumber: 21
                                }, this),
                                " & ",
                                /*#__PURE__*/ _jsxDEV("span", {
                                    "data-lov-id": "src/pages/life/Testimonials.tsx:71:71",
                                    "data-lov-name": "span",
                                    "data-component-path": "src/pages/life/Testimonials.tsx",
                                    "data-component-line": "71",
                                    "data-component-file": "Testimonials.tsx",
                                    "data-component-name": "span",
                                    "data-component-content": "%7B%22text%22%3A%22Appreciation%22%2C%22className%22%3A%22text-saffron-orange%22%7D",
                                    className: "text-saffron-orange",
                                    children: "Appreciation"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/life/Testimonials.tsx",
                                    lineNumber: 71,
                                    columnNumber: 391
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/pages/life/Testimonials.tsx",
                            lineNumber: 70,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/life/Testimonials.tsx:73:8",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/life/Testimonials.tsx",
                            "data-component-line": "73",
                            "data-component-file": "Testimonials.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22mx-auto%20h-1%20w-20%20bg-indian-green%20rounded-full%20mb-6%22%7D",
                            className: "mx-auto h-1 w-20 bg-indian-green rounded-full mb-6"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/life/Testimonials.tsx",
                            lineNumber: 73,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ _jsxDEV("p", {
                            "data-lov-id": "src/pages/life/Testimonials.tsx:74:8",
                            "data-lov-name": "p",
                            "data-component-path": "src/pages/life/Testimonials.tsx",
                            "data-component-line": "74",
                            "data-component-file": "Testimonials.tsx",
                            "data-component-name": "p",
                            "data-component-content": "%7B%22text%22%3A%22The%20trust%20and%20appreciation%20of%20our%20parents%20inspire%20us%20to%20continually%20provide%20quality%20education%2C%5Cn%20%20%20%20%20%20%20%20%20%20holistic%20development%2C%20and%20a%20nurturing%20environment%20for%20every%20child.%20Their%20experiences%20reflect%5Cn%20%20%20%20%20%20%20%20%20%20our%20commitment%20to%20academic%20excellence%2C%20values%2C%20and%20overall%20student%20growth.%22%2C%22className%22%3A%22text-base%20md%3Atext-lg%20text-foreground%2F75%20leading-relaxed%22%7D",
                            className: "text-base md:text-lg text-foreground/75 leading-relaxed",
                            children: "The trust and appreciation of our parents inspire us to continually provide quality education, holistic development, and a nurturing environment for every child. Their experiences reflect our commitment to academic excellence, values, and overall student growth."
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/life/Testimonials.tsx",
                            lineNumber: 74,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/pages/life/Testimonials.tsx",
                    lineNumber: 66,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/life/Testimonials.tsx",
                lineNumber: 65,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/life/Testimonials.tsx:83:4",
                "data-lov-name": "section",
                "data-component-path": "src/pages/life/Testimonials.tsx",
                "data-component-line": "83",
                "data-component-file": "Testimonials.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22pb-20%20bg-gradient-to-b%20from-muted%2F30%20to-white%22%7D",
                className: "pb-20 bg-gradient-to-b from-muted/30 to-white",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/life/Testimonials.tsx:84:6",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/life/Testimonials.tsx",
                    "data-component-line": "84",
                    "data-component-file": "Testimonials.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/life/Testimonials.tsx:85:8",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/life/Testimonials.tsx",
                        "data-component-line": "85",
                        "data-component-file": "Testimonials.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-2%20lg%3Agrid-cols-3%20gap-6%20lg%3Agap-8%20items-stretch%22%7D",
                        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch",
                        children: testimonials.map((t, i)=>/*#__PURE__*/ _jsxDEV(TestimonialCard, {
                                "data-lov-id": "src/pages/life/Testimonials.tsx:87:12",
                                "data-lov-name": "TestimonialCard",
                                "data-component-path": "src/pages/life/Testimonials.tsx",
                                "data-component-line": "87",
                                "data-component-file": "Testimonials.tsx",
                                "data-component-name": "TestimonialCard",
                                "data-component-content": "%7B%7D",
                                t: t,
                                i: i
                            }, t.name, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/life/Testimonials.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/life/Testimonials.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/life/Testimonials.tsx",
                    lineNumber: 84,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/life/Testimonials.tsx",
                lineNumber: 83,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/sjrsh916/public_html/src/pages/life/Testimonials.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
};
_s(Testimonials, "8Lcx154gL9Uv6DXlpAoywWiPpJk=");
_c1 = Testimonials;
export default Testimonials;
var _c, _c1;
$RefreshReg$(_c, "TestimonialCard");
$RefreshReg$(_c1, "Testimonials");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/pages/life/Testimonials.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/pages/life/Testimonials.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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QUE7d0JBQUFDLGlCQUFBO3dCQUFBQyx1QkFBQTt3QkFBQUMsdUJBQUE7d0JBQUFDLHVCQUFBO3dCQUFBQyx1QkFBQTt3QkFBQUMsMEJBQUE7d0JBQUVXLFdBQVU7a0NBQ1ppQixhQUFhTyxHQUFHLENBQUMsQ0FBQzVDLEdBQUdDLGtCQUNwQixRQUFDRjtnQ0FBY0ksZUFBQTtnQ0FBQUMsaUJBQUE7Z0NBQUFDLHVCQUFBO2dDQUFBQyx1QkFBQTtnQ0FBQUMsdUJBQUE7Z0NBQUFDLHVCQUFBO2dDQUFBQywwQkFBQTtnQ0FBZVQsR0FBR0E7Z0NBQUdDLEdBQUdBOytCQUFqQkQsRUFBRTJCLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3hDO0dBOUNNRztNQUFBQTtBQWdETixlQUFlQSxhQUFhIiwibmFtZXMiOlsiTGF5b3V0IiwiUGFnZUhlcm8iLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJtb3Rpb24iLCJRdW90ZSIsIk1lc3NhZ2VDaXJjbGUiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJnZXRQdWJsaWNDb250ZW50IiwibWVyZ2VUZXN0aW1vbmlhbEl0ZW1zIiwiVGVzdGltb25pYWxDYXJkIiwidCIsImkiLCJkaXYiLCJkYXRhLWxvdi1pZCIsImRhdGEtbG92LW5hbWUiLCJkYXRhLWNvbXBvbmVudC1wYXRoIiwiZGF0YS1jb21wb25lbnQtbGluZSIsImRhdGEtY29tcG9uZW50LWZpbGUiLCJkYXRhLWNvbXBvbmVudC1uYW1lIiwiZGF0YS1jb21wb25lbnQtY29udGVudCIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsIndoaWxlSW5WaWV3Iiwidmlld3BvcnQiLCJvbmNlIiwibWFyZ2luIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJjbGFzc05hbWUiLCJwIiwicXVvdGUiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsIm5hbWUiLCJoNCIsInJvbGUiLCJUZXN0aW1vbmlhbHMiLCJhZG1pblRlc3RpbW9uaWFscyIsInNldEFkbWluVGVzdGltb25pYWxzIiwidGhlbiIsInJlc3VsdCIsIml0ZW1zIiwiY2F0Y2giLCJ0ZXN0aW1vbmlhbHMiLCJ0aXRsZSIsImJyZWFkY3J1bWJzIiwibGFiZWwiLCJzZWN0aW9uIiwiaDIiLCJzcGFuIiwibWFwIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIlRlc3RpbW9uaWFscy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgUGFnZUhlcm8gZnJvbSBcIkAvY29tcG9uZW50cy9QYWdlSGVyb1wiO1xyXG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgeyBRdW90ZSwgTWVzc2FnZUNpcmNsZSB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBnZXRQdWJsaWNDb250ZW50LCB0eXBlIEFkbWluQ29udGVudEl0ZW0gfSBmcm9tIFwiQC9saWIvYXBpXCI7XHJcbmltcG9ydCB7IG1lcmdlVGVzdGltb25pYWxJdGVtcywgdHlwZSBUZXN0aW1vbmlhbERpc3BsYXlJdGVtIH0gZnJvbSBcIkAvbGliL3Rlc3RpbW9uaWFsQ29udGVudFwiO1xyXG5cclxuY29uc3QgVGVzdGltb25pYWxDYXJkID0gKHsgdCwgaSB9OiB7IHQ6IFRlc3RpbW9uaWFsRGlzcGxheUl0ZW07IGk6IG51bWJlciB9KSA9PiAoXHJcbiAgPG1vdGlvbi5kaXZcclxuICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjQgfX1cclxuICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cclxuICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUsIG1hcmdpbjogXCItNTBweFwiIH19XHJcbiAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUsIGRlbGF5OiBpICogMC4wOCB9fVxyXG4gICAgY2xhc3NOYW1lPVwiaC1mdWxsXCJcclxuICA+XHJcbiAgICA8Q2FyZCBjbGFzc05hbWU9XCJncm91cCBoLWZ1bGwgYmctd2hpdGUgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1ib3JkZXIvNjAgc2hhZG93LXNtIGhvdmVyOnNoYWRvdy0yeGwgaG92ZXI6LXRyYW5zbGF0ZS15LTEgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMS41IHctZnVsbCBiZy1ncmFkaWVudC10by1yIGZyb20taW5kaWFuLWdyZWVuIHZpYS1zYWZmcm9uLW9yYW5nZSB0by1pbmRpYW4tZ3JlZW5cIiAvPlxyXG4gICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC03IG1kOnAtOCBoLWZ1bGwgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMSBoLTExIHJvdW5kZWQteGwgYmctaW5kaWFuLWdyZWVuLzEwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1iLTUgZ3JvdXAtaG92ZXI6YmctaW5kaWFuLWdyZWVuIHRyYW5zaXRpb24tY29sb3JzXCI+XHJcbiAgICAgICAgICA8UXVvdGUgY2xhc3NOYW1lPVwiaC01IHctNSB0ZXh0LWluZGlhbi1ncmVlbiBncm91cC1ob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZm9yZWdyb3VuZC84MCBsZWFkaW5nLXJlbGF4ZWQgaXRhbGljIHRleHQtWzE1cHhdIGZsZXgtMVwiPlxyXG4gICAgICAgICAgPHA+XCJ7dC5xdW90ZX1cIjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgcHQtNSBib3JkZXItdCBib3JkZXItYm9yZGVyLzcwIGZsZXggaXRlbXMtY2VudGVyIGdhcC00XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXgtc2hyaW5rLTBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIHJvdW5kZWQtZnVsbCBiZy1ncmFkaWVudC10by10ciBmcm9tLWluZGlhbi1ncmVlbiB0by1zYWZmcm9uLW9yYW5nZSBwLVsycHhdXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIHJvdW5kZWQtZnVsbCBiZy13aGl0ZVwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPXt0LmltYWdlfVxyXG4gICAgICAgICAgICAgIGFsdD17dC5uYW1lfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtMTQgdy0xNCByb3VuZGVkLWZ1bGwgb2JqZWN0LWNvdmVyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4tdy0wXCI+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gbGVhZGluZy10aWdodCB0cnVuY2F0ZVwiPnt0Lm5hbWV9PC9oND5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWluZGlhbi1ncmVlbiBmb250LW1lZGl1bSBtdC0wLjVcIj57dC5yb2xlfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgPC9DYXJkPlxyXG4gIDwvbW90aW9uLmRpdj5cclxuKTtcclxuXHJcbmNvbnN0IFRlc3RpbW9uaWFscyA9ICgpID0+IHtcclxuICBjb25zdCBbYWRtaW5UZXN0aW1vbmlhbHMsIHNldEFkbWluVGVzdGltb25pYWxzXSA9IHVzZVN0YXRlPEFkbWluQ29udGVudEl0ZW1bXT4oW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRQdWJsaWNDb250ZW50KFwidGVzdGltb25pYWxcIilcclxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4gc2V0QWRtaW5UZXN0aW1vbmlhbHMocmVzdWx0Lml0ZW1zKSlcclxuICAgICAgLmNhdGNoKCgpID0+IHNldEFkbWluVGVzdGltb25pYWxzKFtdKSk7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IHRlc3RpbW9uaWFscyA9IHVzZU1lbW8oKCkgPT4gbWVyZ2VUZXN0aW1vbmlhbEl0ZW1zKGFkbWluVGVzdGltb25pYWxzKSwgW2FkbWluVGVzdGltb25pYWxzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8UGFnZUhlcm9cclxuICAgICAgICB0aXRsZT1cIldoYXQgT3VyIFBhcmVudHMgU2F5XCJcclxuICAgICAgICBicmVhZGNydW1icz17W3sgbGFiZWw6IFwiTGlmZSBAIFNKUlBTLUhCUlwiIH0sIHsgbGFiZWw6IFwiVGVzdGltb25pYWxzXCIgfV19XHJcbiAgICAgIC8+XHJcblxyXG4gICAgey8qIEludHJvICovfVxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTYgYmctZ3JhZGllbnQtdG8tYiBmcm9tLXdoaXRlIHRvLW11dGVkLzMwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBtYXgtdy0zeGwgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTYgaC0xNiByb3VuZGVkLTJ4bCBiZy1pbmRpYW4tZ3JlZW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXgtYXV0byBtYi02IHNoYWRvdy1sZyBzaGFkb3ctaW5kaWFuLWdyZWVuLzIwXCI+XHJcbiAgICAgICAgICA8TWVzc2FnZUNpcmNsZSBjbGFzc05hbWU9XCJoLTggdy04IHRleHQtd2hpdGVcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBsZzp0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gbWItNFwiPlxyXG4gICAgICAgICAgVm9pY2VzIG9mIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtaW5kaWFuLWdyZWVuXCI+VHJ1c3Q8L3NwYW4+ICYgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zYWZmcm9uLW9yYW5nZVwiPkFwcHJlY2lhdGlvbjwvc3Bhbj5cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBoLTEgdy0yMCBiZy1pbmRpYW4tZ3JlZW4gcm91bmRlZC1mdWxsIG1iLTZcIiAvPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBtZDp0ZXh0LWxnIHRleHQtZm9yZWdyb3VuZC83NSBsZWFkaW5nLXJlbGF4ZWRcIj5cclxuICAgICAgICAgIFRoZSB0cnVzdCBhbmQgYXBwcmVjaWF0aW9uIG9mIG91ciBwYXJlbnRzIGluc3BpcmUgdXMgdG8gY29udGludWFsbHkgcHJvdmlkZSBxdWFsaXR5IGVkdWNhdGlvbixcclxuICAgICAgICAgIGhvbGlzdGljIGRldmVsb3BtZW50LCBhbmQgYSBudXJ0dXJpbmcgZW52aXJvbm1lbnQgZm9yIGV2ZXJ5IGNoaWxkLiBUaGVpciBleHBlcmllbmNlcyByZWZsZWN0XHJcbiAgICAgICAgICBvdXIgY29tbWl0bWVudCB0byBhY2FkZW1pYyBleGNlbGxlbmNlLCB2YWx1ZXMsIGFuZCBvdmVyYWxsIHN0dWRlbnQgZ3Jvd3RoLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgey8qIFRlc3RpbW9uaWFscyBHcmlkICovfVxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicGItMjAgYmctZ3JhZGllbnQtdG8tYiBmcm9tLW11dGVkLzMwIHRvLXdoaXRlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNiBsZzpnYXAtOCBpdGVtcy1zdHJldGNoXCI+XHJcbiAgICAgICAgICB7dGVzdGltb25pYWxzLm1hcCgodCwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8VGVzdGltb25pYWxDYXJkIGtleT17dC5uYW1lfSB0PXt0fSBpPXtpfSAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlc3RpbW9uaWFscztcclxuIl0sImZpbGUiOiIvaG9tZS9zanJzaDkxNi9wdWJsaWNfaHRtbC9zcmMvcGFnZXMvbGlmZS9UZXN0aW1vbmlhbHMudHN4In0=