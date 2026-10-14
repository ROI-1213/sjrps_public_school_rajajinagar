import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Footer.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/components/Footer.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"]; const _Fragment = __vite__cjsImport1_react_jsxDevRuntime["Fragment"];
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=5efa796b";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, ChevronRight } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
import footerLogo from "/src/assets/footerlogo.png?import";
import { SCHOOL_EMAILS, SCHOOL_LANDLINES } from "/src/lib/siteInfo.ts";
const quickLinks = [
    {
        label: "Home",
        to: "/"
    },
    {
        label: "About Us",
        to: "/about/overview"
    },
    {
        label: "Admission Process",
        to: "/admissions/admissions-process"
    },
    {
        label: "Academics",
        to: "/academics"
    },
    {
        label: "Contact",
        to: "/contact"
    }
];
const importantLinks = [
    {
        label: "Mandatory Disclosure",
        to: "/mandatory-disclosure",
        external: false
    },
    {
        label: "Parent Portal",
        to: "https://sjres.myclassboard.com/",
        external: true
    },
    {
        label: "Staff Portal",
        to: "https://sjres.myclassboard.com/",
        external: true
    },
    {
        label: "News & Events",
        to: "/news",
        external: false
    },
    {
        label: "Gallery",
        to: "/gallery/photos",
        external: false
    }
];
const LinkItem = ({ label, to, external = false })=>{
    const cls = "group inline-flex items-center gap-2 text-white/80 hover:text-golden-yellow transition-colors duration-200";
    const inner = /*#__PURE__*/ _jsxDEV(_Fragment, {
        children: [
            /*#__PURE__*/ _jsxDEV(ChevronRight, {
                "data-lov-id": "src/components/Footer.tsx:51:6",
                "data-lov-name": "ChevronRight",
                "data-component-path": "src/components/Footer.tsx",
                "data-component-line": "51",
                "data-component-file": "Footer.tsx",
                "data-component-name": "ChevronRight",
                "data-component-content": "%7B%22className%22%3A%22h-3.5%20w-3.5%20opacity-60%20transition-transform%20duration-200%20group-hover%3Atranslate-x-1%20group-hover%3Aopacity-100%22%7D",
                className: "h-3.5 w-3.5 opacity-60 transition-transform duration-200 group-hover:translate-x-1 group-hover:opacity-100"
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("span", {
                "data-lov-id": "src/components/Footer.tsx:52:6",
                "data-lov-name": "span",
                "data-component-path": "src/components/Footer.tsx",
                "data-component-line": "52",
                "data-component-file": "Footer.tsx",
                "data-component-name": "span",
                "data-component-content": "%7B%22className%22%3A%22border-b%20border-transparent%20group-hover%3Aborder-golden-yellow%2F70%20transition-colors%22%7D",
                className: "border-b border-transparent group-hover:border-golden-yellow/70 transition-colors",
                children: label
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
    return external ? /*#__PURE__*/ _jsxDEV("a", {
        "data-lov-id": "src/components/Footer.tsx:58:4",
        "data-lov-name": "a",
        "data-component-path": "src/components/Footer.tsx",
        "data-component-line": "58",
        "data-component-file": "Footer.tsx",
        "data-component-name": "a",
        "data-component-content": "%7B%7D",
        href: to,
        target: "_blank",
        rel: "noopener noreferrer",
        className: cls,
        children: inner
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this) : /*#__PURE__*/ _jsxDEV(Link, {
        "data-lov-id": "src/components/Footer.tsx:62:4",
        "data-lov-name": "Link",
        "data-component-path": "src/components/Footer.tsx",
        "data-component-line": "62",
        "data-component-file": "Footer.tsx",
        "data-component-name": "Link",
        "data-component-content": "%7B%7D",
        to: to,
        className: cls,
        children: inner
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
};
_c = LinkItem;
const Footer = ()=>{
    return /*#__PURE__*/ _jsxDEV("footer", {
        "data-lov-id": "src/components/Footer.tsx:70:4",
        "data-lov-name": "footer",
        "data-component-path": "src/components/Footer.tsx",
        "data-component-line": "70",
        "data-component-file": "Footer.tsx",
        "data-component-name": "footer",
        "data-component-content": "%7B%22className%22%3A%22relative%20text-white%20bg-indian-green%22%7D",
        className: "relative text-white bg-indian-green",
        children: [
            /*#__PURE__*/ _jsxDEV("div", {
                "data-lov-id": "src/components/Footer.tsx:72:6",
                "data-lov-name": "div",
                "data-component-path": "src/components/Footer.tsx",
                "data-component-line": "72",
                "data-component-file": "Footer.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22h-1%20bg-saffron-orange%22%7D",
                className: "h-1 bg-saffron-orange"
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                "data-lov-id": "src/components/Footer.tsx:75:6",
                "data-lov-name": "div",
                "data-component-path": "src/components/Footer.tsx",
                "data-component-line": "75",
                "data-component-file": "Footer.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22absolute%20inset-0%20opacity-%5B0.06%5D%20pointer-events-none%22%7D",
                "aria-hidden": true,
                className: "absolute inset-0 opacity-[0.06] pointer-events-none",
                style: {
                    backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
                    backgroundSize: "22px 22px"
                }
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                "data-lov-id": "src/components/Footer.tsx:85:6",
                "data-lov-name": "div",
                "data-component-path": "src/components/Footer.tsx",
                "data-component-line": "85",
                "data-component-file": "Footer.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22relative%20container%20mx-auto%20px-4%20py-14%20lg%3Apy-16%22%7D",
                className: "relative container mx-auto px-4 py-14 lg:py-16",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/components/Footer.tsx:86:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/Footer.tsx",
                    "data-component-line": "86",
                    "data-component-file": "Footer.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-2%20lg%3Agrid-cols-4%20gap-10%20lg%3Agap-12%22%7D",
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12",
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/components/Footer.tsx:88:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/Footer.tsx",
                            "data-component-line": "88",
                            "data-component-file": "Footer.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%7D",
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/components/Footer.tsx:89:12",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/Footer.tsx",
                                    "data-component-line": "89",
                                    "data-component-file": "Footer.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20gap-3%20mb-5%22%7D",
                                    className: "flex items-center gap-3 mb-5",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("img", {
                                            "data-lov-id": "src/components/Footer.tsx:90:14",
                                            "data-lov-name": "img",
                                            "data-component-path": "src/components/Footer.tsx",
                                            "data-component-line": "90",
                                            "data-component-file": "Footer.tsx",
                                            "data-component-name": "img",
                                            "data-component-content": "%7B%22className%22%3A%22h-20%20w-28%20object-contain%20bg-white%20rounded-lg%20p-1%22%7D",
                                            src: footerLogo,
                                            alt: "SJRPS-HBR Logo",
                                            className: "h-20 w-28 object-contain bg-white rounded-lg p-1",
                                            style: {
                                                boxShadow: "0 0 0 1px #ffffff, 0 10px 15px -3px rgba(0,0,0,0.1)"
                                            },
                                            onError: (e)=>{
                                                e.currentTarget.src = "/placeholder.svg";
                                            }
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/components/Footer.tsx:99:14",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/components/Footer.tsx",
                                            "data-component-line": "99",
                                            "data-component-file": "Footer.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%7D",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("h3", {
                                                    "data-lov-id": "src/components/Footer.tsx:100:16",
                                                    "data-lov-name": "h3",
                                                    "data-component-path": "src/components/Footer.tsx",
                                                    "data-component-line": "100",
                                                    "data-component-file": "Footer.tsx",
                                                    "data-component-name": "h3",
                                                    "data-component-content": "%7B%22text%22%3A%22SJRPS-HBR%22%2C%22className%22%3A%22font-bold%20text-lg%20leading-tight%22%7D",
                                                    className: "font-bold text-lg leading-tight",
                                                    style: {
                                                        fontFamily: "Poppins, sans-serif"
                                                    },
                                                    children: "SJRPS-HBR"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/components/Footer.tsx:106:16",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/components/Footer.tsx",
                                                    "data-component-line": "106",
                                                    "data-component-file": "Footer.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22text%22%3A%22HBR%20Layout%2C%20Bengaluru%22%2C%22className%22%3A%22text-xs%20text-white%2F70%22%7D",
                                                    className: "text-xs text-white/70",
                                                    children: "HBR Layout, Bengaluru"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    "data-lov-id": "src/components/Footer.tsx:109:12",
                                    "data-lov-name": "p",
                                    "data-component-path": "src/components/Footer.tsx",
                                    "data-component-line": "109",
                                    "data-component-file": "Footer.tsx",
                                    "data-component-name": "p",
                                    "data-component-content": "%7B%22text%22%3A%22SJR%20Public%20School%2C%20HBR%20Layout%20is%20committed%20to%20shaping%20confident%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20compassionate%2C%20and%20capable%20young%20minds%20through%20value-based%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20future-ready%20education.%22%2C%22className%22%3A%22text-sm%20text-white%2F80%20leading-relaxed%22%7D",
                                    className: "text-sm text-white/80 leading-relaxed",
                                    children: "SJR Public School, HBR Layout is committed to shaping confident, compassionate, and capable young minds through value-based, future-ready education."
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/components/Footer.tsx:116:12",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/Footer.tsx",
                                    "data-component-line": "116",
                                    "data-component-file": "Footer.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20gap-3%20mt-6%22%7D",
                                    className: "flex items-center gap-3 mt-6",
                                    children: [
                                        {
                                            Icon: Facebook,
                                            href: "#",
                                            label: "Facebook"
                                        },
                                        {
                                            Icon: Instagram,
                                            href: "#",
                                            label: "Instagram"
                                        },
                                        {
                                            Icon: Youtube,
                                            href: "#",
                                            label: "YouTube"
                                        }
                                    ].map(({ Icon, href, label })=>/*#__PURE__*/ _jsxDEV("a", {
                                            "data-lov-id": "src/components/Footer.tsx:122:16",
                                            "data-lov-name": "a",
                                            "data-component-path": "src/components/Footer.tsx",
                                            "data-component-line": "122",
                                            "data-component-file": "Footer.tsx",
                                            "data-component-name": "a",
                                            "data-component-content": "%7B%22className%22%3A%22h-9%20w-9%20rounded-full%20bg-white%2F10%20hover%3Abg-saffron-orange%20flex%20items-center%20justify-center%20transition-all%20duration-200%20hover%3Ascale-110%22%7D",
                                            href: href,
                                            "aria-label": label,
                                            className: "h-9 w-9 rounded-full bg-white/10 hover:bg-saffron-orange flex items-center justify-center transition-all duration-200 hover:scale-110",
                                            children: /*#__PURE__*/ _jsxDEV(Icon, {
                                                "data-lov-id": "src/components/Footer.tsx:128:18",
                                                "data-lov-name": "Icon",
                                                "data-component-path": "src/components/Footer.tsx",
                                                "data-component-line": "128",
                                                "data-component-file": "Footer.tsx",
                                                "data-component-name": "Icon",
                                                "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%22%7D",
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                                                lineNumber: 128,
                                                columnNumber: 19
                                            }, this)
                                        }, label, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/components/Footer.tsx:135:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/Footer.tsx",
                            "data-component-line": "135",
                            "data-component-file": "Footer.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%7D",
                            children: [
                                /*#__PURE__*/ _jsxDEV("h3", {
                                    "data-lov-id": "src/components/Footer.tsx:136:12",
                                    "data-lov-name": "h3",
                                    "data-component-path": "src/components/Footer.tsx",
                                    "data-component-line": "136",
                                    "data-component-file": "Footer.tsx",
                                    "data-component-name": "h3",
                                    "data-component-content": "%7B%22text%22%3A%22Quick%20Links%22%2C%22className%22%3A%22text-lg%20font-bold%20mb-5%20relative%20pb-2%22%7D",
                                    className: "text-lg font-bold mb-5 relative pb-2",
                                    style: {
                                        fontFamily: "Poppins, sans-serif"
                                    },
                                    children: [
                                        "Quick Links",
                                        /*#__PURE__*/ _jsxDEV("span", {
                                            "data-lov-id": "src/components/Footer.tsx:141:14",
                                            "data-lov-name": "span",
                                            "data-component-path": "src/components/Footer.tsx",
                                            "data-component-line": "141",
                                            "data-component-file": "Footer.tsx",
                                            "data-component-name": "span",
                                            "data-component-content": "%7B%22className%22%3A%22absolute%20left-0%20bottom-0%20h-%5B2px%5D%20w-10%20bg-saffron-orange%22%7D",
                                            className: "absolute left-0 bottom-0 h-[2px] w-10 bg-saffron-orange"
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                                            lineNumber: 141,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("ul", {
                                    "data-lov-id": "src/components/Footer.tsx:143:12",
                                    "data-lov-name": "ul",
                                    "data-component-path": "src/components/Footer.tsx",
                                    "data-component-line": "143",
                                    "data-component-file": "Footer.tsx",
                                    "data-component-name": "ul",
                                    "data-component-content": "%7B%22className%22%3A%22space-y-2.5%20text-sm%22%7D",
                                    className: "space-y-2.5 text-sm",
                                    children: quickLinks.map((l)=>/*#__PURE__*/ _jsxDEV("li", {
                                            "data-lov-id": "src/components/Footer.tsx:145:16",
                                            "data-lov-name": "li",
                                            "data-component-path": "src/components/Footer.tsx",
                                            "data-component-line": "145",
                                            "data-component-file": "Footer.tsx",
                                            "data-component-name": "li",
                                            "data-component-content": "%7B%7D",
                                            children: /*#__PURE__*/ _jsxDEV(LinkItem, {
                                                "data-lov-id": "src/components/Footer.tsx:146:18",
                                                "data-lov-name": "LinkItem",
                                                "data-component-path": "src/components/Footer.tsx",
                                                "data-component-line": "146",
                                                "data-component-file": "Footer.tsx",
                                                "data-component-name": "LinkItem",
                                                "data-component-content": "%7B%7D",
                                                label: l.label,
                                                to: l.to
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                                                lineNumber: 146,
                                                columnNumber: 19
                                            }, this)
                                        }, l.label, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                                            lineNumber: 145,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/components/Footer.tsx:153:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/Footer.tsx",
                            "data-component-line": "153",
                            "data-component-file": "Footer.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%7D",
                            children: [
                                /*#__PURE__*/ _jsxDEV("h3", {
                                    "data-lov-id": "src/components/Footer.tsx:154:12",
                                    "data-lov-name": "h3",
                                    "data-component-path": "src/components/Footer.tsx",
                                    "data-component-line": "154",
                                    "data-component-file": "Footer.tsx",
                                    "data-component-name": "h3",
                                    "data-component-content": "%7B%22text%22%3A%22Important%20Links%22%2C%22className%22%3A%22text-lg%20font-bold%20mb-5%20relative%20pb-2%22%7D",
                                    className: "text-lg font-bold mb-5 relative pb-2",
                                    style: {
                                        fontFamily: "Poppins, sans-serif"
                                    },
                                    children: [
                                        "Important Links",
                                        /*#__PURE__*/ _jsxDEV("span", {
                                            "data-lov-id": "src/components/Footer.tsx:159:14",
                                            "data-lov-name": "span",
                                            "data-component-path": "src/components/Footer.tsx",
                                            "data-component-line": "159",
                                            "data-component-file": "Footer.tsx",
                                            "data-component-name": "span",
                                            "data-component-content": "%7B%22className%22%3A%22absolute%20left-0%20bottom-0%20h-%5B2px%5D%20w-10%20bg-saffron-orange%22%7D",
                                            className: "absolute left-0 bottom-0 h-[2px] w-10 bg-saffron-orange"
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("ul", {
                                    "data-lov-id": "src/components/Footer.tsx:161:12",
                                    "data-lov-name": "ul",
                                    "data-component-path": "src/components/Footer.tsx",
                                    "data-component-line": "161",
                                    "data-component-file": "Footer.tsx",
                                    "data-component-name": "ul",
                                    "data-component-content": "%7B%22className%22%3A%22space-y-2.5%20text-sm%22%7D",
                                    className: "space-y-2.5 text-sm",
                                    children: importantLinks.map((l)=>/*#__PURE__*/ _jsxDEV("li", {
                                            "data-lov-id": "src/components/Footer.tsx:163:16",
                                            "data-lov-name": "li",
                                            "data-component-path": "src/components/Footer.tsx",
                                            "data-component-line": "163",
                                            "data-component-file": "Footer.tsx",
                                            "data-component-name": "li",
                                            "data-component-content": "%7B%7D",
                                            children: /*#__PURE__*/ _jsxDEV(LinkItem, {
                                                "data-lov-id": "src/components/Footer.tsx:164:18",
                                                "data-lov-name": "LinkItem",
                                                "data-component-path": "src/components/Footer.tsx",
                                                "data-component-line": "164",
                                                "data-component-file": "Footer.tsx",
                                                "data-component-name": "LinkItem",
                                                "data-component-content": "%7B%7D",
                                                label: l.label,
                                                to: l.to,
                                                external: l.external
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                                                lineNumber: 164,
                                                columnNumber: 19
                                            }, this)
                                        }, l.label, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                                            lineNumber: 163,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/components/Footer.tsx:171:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/Footer.tsx",
                            "data-component-line": "171",
                            "data-component-file": "Footer.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%7D",
                            children: [
                                /*#__PURE__*/ _jsxDEV("h3", {
                                    "data-lov-id": "src/components/Footer.tsx:172:12",
                                    "data-lov-name": "h3",
                                    "data-component-path": "src/components/Footer.tsx",
                                    "data-component-line": "172",
                                    "data-component-file": "Footer.tsx",
                                    "data-component-name": "h3",
                                    "data-component-content": "%7B%22text%22%3A%22Contact%22%2C%22className%22%3A%22text-lg%20font-bold%20mb-5%20relative%20pb-2%22%7D",
                                    className: "text-lg font-bold mb-5 relative pb-2",
                                    style: {
                                        fontFamily: "Poppins, sans-serif"
                                    },
                                    children: [
                                        "Contact",
                                        /*#__PURE__*/ _jsxDEV("span", {
                                            "data-lov-id": "src/components/Footer.tsx:177:14",
                                            "data-lov-name": "span",
                                            "data-component-path": "src/components/Footer.tsx",
                                            "data-component-line": "177",
                                            "data-component-file": "Footer.tsx",
                                            "data-component-name": "span",
                                            "data-component-content": "%7B%22className%22%3A%22absolute%20left-0%20bottom-0%20h-%5B2px%5D%20w-10%20bg-saffron-orange%22%7D",
                                            className: "absolute left-0 bottom-0 h-[2px] w-10 bg-saffron-orange"
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                                            lineNumber: 177,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("ul", {
                                    "data-lov-id": "src/components/Footer.tsx:179:12",
                                    "data-lov-name": "ul",
                                    "data-component-path": "src/components/Footer.tsx",
                                    "data-component-line": "179",
                                    "data-component-file": "Footer.tsx",
                                    "data-component-name": "ul",
                                    "data-component-content": "%7B%22className%22%3A%22space-y-3%20text-sm%20text-white%2F85%22%7D",
                                    className: "space-y-3 text-sm text-white/85",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("li", {
                                            "data-lov-id": "src/components/Footer.tsx:180:14",
                                            "data-lov-name": "li",
                                            "data-component-path": "src/components/Footer.tsx",
                                            "data-component-line": "180",
                                            "data-component-file": "Footer.tsx",
                                            "data-component-name": "li",
                                            "data-component-content": "%7B%22className%22%3A%22flex%20items-start%20gap-3%22%7D",
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV(MapPin, {
                                                    "data-lov-id": "src/components/Footer.tsx:181:16",
                                                    "data-lov-name": "MapPin",
                                                    "data-component-path": "src/components/Footer.tsx",
                                                    "data-component-line": "181",
                                                    "data-component-file": "Footer.tsx",
                                                    "data-component-name": "MapPin",
                                                    "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%20mt-0.5%20text-saffron-orange%20flex-shrink-0%22%7D",
                                                    className: "h-4 w-4 mt-0.5 text-saffron-orange flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("span", {
                                                    "data-lov-id": "src/components/Footer.tsx:182:16",
                                                    "data-lov-name": "span",
                                                    "data-component-path": "src/components/Footer.tsx",
                                                    "data-component-line": "182",
                                                    "data-component-file": "Footer.tsx",
                                                    "data-component-name": "span",
                                                    "data-component-content": "%7B%22text%22%3A%22No.%203%2C%205th%20Cross%2C%207th%20Main%20Road%2C%201st%20Stage%2C%203rd%20Block%2C%20Kalyan%20Nagar%2C%20Bengaluru%2C%20Karnataka%20%E2%80%93%20560043%22%7D",
                                                    children: "No. 3, 5th Cross, 7th Main Road, 1st Stage, 3rd Block, Kalyan Nagar, Bengaluru, Karnataka – 560043"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                                            lineNumber: 180,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("li", {
                                            "data-lov-id": "src/components/Footer.tsx:186:14",
                                            "data-lov-name": "li",
                                            "data-component-path": "src/components/Footer.tsx",
                                            "data-component-line": "186",
                                            "data-component-file": "Footer.tsx",
                                            "data-component-name": "li",
                                            "data-component-content": "%7B%22className%22%3A%22flex%20items-start%20gap-3%22%7D",
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV(Phone, {
                                                    "data-lov-id": "src/components/Footer.tsx:187:16",
                                                    "data-lov-name": "Phone",
                                                    "data-component-path": "src/components/Footer.tsx",
                                                    "data-component-line": "187",
                                                    "data-component-file": "Footer.tsx",
                                                    "data-component-name": "Phone",
                                                    "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%20mt-0.5%20text-saffron-orange%20flex-shrink-0%22%7D",
                                                    className: "h-4 w-4 mt-0.5 text-saffron-orange flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/components/Footer.tsx:188:16",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/components/Footer.tsx",
                                                    "data-component-line": "188",
                                                    "data-component-file": "Footer.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22flex%20flex-col%22%7D",
                                                    className: "flex flex-col",
                                                    children: SCHOOL_LANDLINES.map((phone)=>/*#__PURE__*/ _jsxDEV("a", {
                                                            "data-lov-id": "src/components/Footer.tsx:190:20",
                                                            "data-lov-name": "a",
                                                            "data-component-path": "src/components/Footer.tsx",
                                                            "data-component-line": "190",
                                                            "data-component-file": "Footer.tsx",
                                                            "data-component-name": "a",
                                                            "data-component-content": "%7B%22className%22%3A%22hover%3Atext-golden-yellow%20transition-colors%22%7D",
                                                            href: `tel:${phone.tel}`,
                                                            className: "hover:text-golden-yellow transition-colors",
                                                            children: phone.text
                                                        }, phone.tel, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                                                            lineNumber: 190,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                                            lineNumber: 186,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("li", {
                                            "data-lov-id": "src/components/Footer.tsx:196:14",
                                            "data-lov-name": "li",
                                            "data-component-path": "src/components/Footer.tsx",
                                            "data-component-line": "196",
                                            "data-component-file": "Footer.tsx",
                                            "data-component-name": "li",
                                            "data-component-content": "%7B%22className%22%3A%22flex%20items-start%20gap-3%22%7D",
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV(Mail, {
                                                    "data-lov-id": "src/components/Footer.tsx:197:16",
                                                    "data-lov-name": "Mail",
                                                    "data-component-path": "src/components/Footer.tsx",
                                                    "data-component-line": "197",
                                                    "data-component-file": "Footer.tsx",
                                                    "data-component-name": "Mail",
                                                    "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%20mt-0.5%20text-saffron-orange%20flex-shrink-0%22%7D",
                                                    className: "h-4 w-4 mt-0.5 text-saffron-orange flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/components/Footer.tsx:198:16",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/components/Footer.tsx",
                                                    "data-component-line": "198",
                                                    "data-component-file": "Footer.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22flex%20flex-col%22%7D",
                                                    className: "flex flex-col",
                                                    children: SCHOOL_EMAILS.map((email)=>/*#__PURE__*/ _jsxDEV("a", {
                                                            "data-lov-id": "src/components/Footer.tsx:200:20",
                                                            "data-lov-name": "a",
                                                            "data-component-path": "src/components/Footer.tsx",
                                                            "data-component-line": "200",
                                                            "data-component-file": "Footer.tsx",
                                                            "data-component-name": "a",
                                                            "data-component-content": "%7B%22className%22%3A%22hover%3Atext-golden-yellow%20transition-colors%20break-all%22%7D",
                                                            href: `mailto:${email}`,
                                                            className: "hover:text-golden-yellow transition-colors break-all",
                                                            children: email
                                                        }, email, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                "data-lov-id": "src/components/Footer.tsx:216:6",
                "data-lov-name": "div",
                "data-component-path": "src/components/Footer.tsx",
                "data-component-line": "216",
                "data-component-file": "Footer.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22relative%20bg-saffron-orange%20text-white%22%7D",
                className: "relative bg-saffron-orange text-white",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/components/Footer.tsx:217:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/Footer.tsx",
                    "data-component-line": "217",
                    "data-component-file": "Footer.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20py-3%20flex%20flex-col%20sm%3Aflex-row%20items-center%20justify-between%20gap-2%20text-xs%20sm%3Atext-sm%20font-medium%22%7D",
                    className: "container mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm font-medium",
                    children: [
                        /*#__PURE__*/ _jsxDEV("p", {
                            "data-lov-id": "src/components/Footer.tsx:218:10",
                            "data-lov-name": "p",
                            "data-component-path": "src/components/Footer.tsx",
                            "data-component-line": "218",
                            "data-component-file": "Footer.tsx",
                            "data-component-name": "p",
                            "data-component-content": "%7B%22text%22%3A%22%C2%A9%20SJR%20Public%20School%2C%20HBR%20Layout.%20All%20rights%20reserved.%22%7D",
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " SJR Public School, HBR Layout. All rights reserved."
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                            lineNumber: 218,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("p", {
                            "data-lov-id": "src/components/Footer.tsx:221:10",
                            "data-lov-name": "p",
                            "data-component-path": "src/components/Footer.tsx",
                            "data-component-line": "221",
                            "data-component-file": "Footer.tsx",
                            "data-component-name": "p",
                            "data-component-content": "%7B%22text%22%3A%22Designed%20for%20SJRPS-HBR%22%2C%22className%22%3A%22opacity-90%22%7D",
                            className: "opacity-90",
                            children: "Designed for SJRPS-HBR"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                            lineNumber: 221,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                    lineNumber: 217,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/sjrsh916/public_html/src/components/Footer.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
};
_c1 = Footer;
export default Footer;
var _c, _c1;
$RefreshReg$(_c, "LinkItem");
$RefreshReg$(_c1, "Footer");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/components/Footer.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/components/Footer.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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LHVCQUFBOzREQUFBQyx1QkFBQTs0REFBQUMsdUJBQUE7NERBQUFDLDBCQUFBOzREQUVDSSxNQUFNLENBQUMsT0FBTyxFQUFFNkIsT0FBTzs0REFDdkJoQyxXQUFVO3NFQUVUZ0M7MkRBSklBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBZXJCLFFBQUN4QjtnQkFBRWYsZUFBQTtnQkFBQUMsaUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQywwQkFBQTtnQkFBRUMsV0FBVTswQkFDYixzQkFBQ1E7b0JBQUVmLGVBQUE7b0JBQUFDLGlCQUFBO29CQUFBQyx1QkFBQTtvQkFBQUMsdUJBQUE7b0JBQUFDLHVCQUFBO29CQUFBQyx1QkFBQTtvQkFBQUMsMEJBQUE7b0JBQUVDLFdBQVU7O3NDQUNiLFFBQUNzQjs0QkFBQTdCLGVBQUE7NEJBQUFDLGlCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsMEJBQUE7O2dDQUFDO2dDQUNHLElBQUlrQyxPQUFPQyxXQUFXO2dDQUFHOzs7Ozs7O3NDQUU5QixRQUFDWjs0QkFBQTdCLGVBQUE7NEJBQUFDLGlCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsMEJBQUE7NEJBQUVDLFdBQVU7c0NBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BDO01BOUpNTTtBQWdLTixlQUFlQSxPQUFNIiwibmFtZXMiOlsiTGluayIsIk1hcFBpbiIsIlBob25lIiwiTWFpbCIsIkZhY2Vib29rIiwiSW5zdGFncmFtIiwiWW91dHViZSIsIkNoZXZyb25SaWdodCIsImZvb3RlckxvZ28iLCJTQ0hPT0xfRU1BSUxTIiwiU0NIT09MX0xBTkRMSU5FUyIsInF1aWNrTGlua3MiLCJsYWJlbCIsInRvIiwiaW1wb3J0YW50TGlua3MiLCJleHRlcm5hbCIsIkxpbmtJdGVtIiwiY2xzIiwiaW5uZXIiLCJkYXRhLWxvdi1pZCIsImRhdGEtbG92LW5hbWUiLCJkYXRhLWNvbXBvbmVudC1wYXRoIiwiZGF0YS1jb21wb25lbnQtbGluZSIsImRhdGEtY29tcG9uZW50LWZpbGUiLCJkYXRhLWNvbXBvbmVudC1uYW1lIiwiZGF0YS1jb21wb25lbnQtY29udGVudCIsImNsYXNzTmFtZSIsInNwYW4iLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCIsIkZvb3RlciIsImZvb3RlciIsImRpdiIsImFyaWEtaGlkZGVuIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImltZyIsInNyYyIsImFsdCIsImJveFNoYWRvdyIsIm9uRXJyb3IiLCJlIiwiY3VycmVudFRhcmdldCIsImgzIiwiZm9udEZhbWlseSIsInAiLCJJY29uIiwibWFwIiwiYXJpYS1sYWJlbCIsInVsIiwibCIsImxpIiwicGhvbmUiLCJ0ZWwiLCJ0ZXh0IiwiZW1haWwiLCJEYXRlIiwiZ2V0RnVsbFllYXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiRm9vdGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7XG4gIE1hcFBpbixcbiAgUGhvbmUsXG4gIE1haWwsXG4gIEZhY2Vib29rLFxuICBJbnN0YWdyYW0sXG4gIFlvdXR1YmUsXG4gIENoZXZyb25SaWdodCxcbn0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IGZvb3RlckxvZ28gZnJvbSBcIkAvYXNzZXRzL2Zvb3RlcmxvZ28ucG5nXCI7XG5pbXBvcnQgeyBTQ0hPT0xfRU1BSUxTLCBTQ0hPT0xfTEFORExJTkVTIH0gZnJvbSBcIkAvbGliL3NpdGVJbmZvXCI7XG5cbmNvbnN0IHF1aWNrTGlua3MgPSBbXG4gIHsgbGFiZWw6IFwiSG9tZVwiLCB0bzogXCIvXCIgfSxcbiAgeyBsYWJlbDogXCJBYm91dCBVc1wiLCB0bzogXCIvYWJvdXQvb3ZlcnZpZXdcIiB9LFxuICB7IGxhYmVsOiBcIkFkbWlzc2lvbiBQcm9jZXNzXCIsIHRvOiBcIi9hZG1pc3Npb25zL2FkbWlzc2lvbnMtcHJvY2Vzc1wiIH0sXG4gIHsgbGFiZWw6IFwiQWNhZGVtaWNzXCIsIHRvOiBcIi9hY2FkZW1pY3NcIiB9LFxuICB7IGxhYmVsOiBcIkNvbnRhY3RcIiwgdG86IFwiL2NvbnRhY3RcIiB9LFxuXTtcblxuY29uc3QgaW1wb3J0YW50TGlua3MgPSBbXG4gIHsgbGFiZWw6IFwiTWFuZGF0b3J5IERpc2Nsb3N1cmVcIiwgdG86IFwiL21hbmRhdG9yeS1kaXNjbG9zdXJlXCIsIGV4dGVybmFsOiBmYWxzZSB9LFxuICB7XG4gICAgbGFiZWw6IFwiUGFyZW50IFBvcnRhbFwiLFxuICAgIHRvOiBcImh0dHBzOi8vc2pyZXMubXljbGFzc2JvYXJkLmNvbS9cIixcbiAgICBleHRlcm5hbDogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiBcIlN0YWZmIFBvcnRhbFwiLFxuICAgIHRvOiBcImh0dHBzOi8vc2pyZXMubXljbGFzc2JvYXJkLmNvbS9cIixcbiAgICBleHRlcm5hbDogdHJ1ZSxcbiAgfSxcbiAgeyBsYWJlbDogXCJOZXdzICYgRXZlbnRzXCIsIHRvOiBcIi9uZXdzXCIsIGV4dGVybmFsOiBmYWxzZSB9LFxuICB7IGxhYmVsOiBcIkdhbGxlcnlcIiwgdG86IFwiL2dhbGxlcnkvcGhvdG9zXCIsIGV4dGVybmFsOiBmYWxzZSB9LFxuXTtcblxuY29uc3QgTGlua0l0ZW0gPSAoe1xuICBsYWJlbCxcbiAgdG8sXG4gIGV4dGVybmFsID0gZmFsc2UsXG59OiB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHRvOiBzdHJpbmc7XG4gIGV4dGVybmFsPzogYm9vbGVhbjtcbn0pID0+IHtcbiAgY29uc3QgY2xzID1cbiAgICBcImdyb3VwIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXdoaXRlLzgwIGhvdmVyOnRleHQtZ29sZGVuLXllbGxvdyB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDBcIjtcbiAgY29uc3QgaW5uZXIgPSAoXG4gICAgPD5cbiAgICAgIDxDaGV2cm9uUmlnaHQgY2xhc3NOYW1lPVwiaC0zLjUgdy0zLjUgb3BhY2l0eS02MCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0yMDAgZ3JvdXAtaG92ZXI6dHJhbnNsYXRlLXgtMSBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMFwiIC8+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItdHJhbnNwYXJlbnQgZ3JvdXAtaG92ZXI6Ym9yZGVyLWdvbGRlbi15ZWxsb3cvNzAgdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9zcGFuPlxuICAgIDwvPlxuICApO1xuICByZXR1cm4gZXh0ZXJuYWwgPyAoXG4gICAgPGEgaHJlZj17dG99IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBjbGFzc05hbWU9e2Nsc30+XG4gICAgICB7aW5uZXJ9XG4gICAgPC9hPlxuICApIDogKFxuICAgIDxMaW5rIHRvPXt0b30gY2xhc3NOYW1lPXtjbHN9PlxuICAgICAge2lubmVyfVxuICAgIDwvTGluaz5cbiAgKTtcbn07XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInJlbGF0aXZlIHRleHQtd2hpdGUgYmctaW5kaWFuLWdyZWVuXCI+XG4gICAgICB7LyogVG9wIGFjY2VudCBiYXIgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMSBiZy1zYWZmcm9uLW9yYW5nZVwiIC8+XG5cbiAgICAgIHsvKiBTdWJ0bGUgZG90IHBhdHRlcm4gb3ZlcmxheSAqL31cbiAgICAgIDxkaXZcbiAgICAgICAgYXJpYS1oaWRkZW5cbiAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBvcGFjaXR5LVswLjA2XSBwb2ludGVyLWV2ZW50cy1ub25lXCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6XG4gICAgICAgICAgICBcInJhZGlhbC1ncmFkaWVudChyZ2JhKDI1NSwyNTUsMjU1LDAuOSkgMXB4LCB0cmFuc3BhcmVudCAxcHgpXCIsXG4gICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiMjJweCAyMnB4XCIsXG4gICAgICAgIH19XG4gICAgICAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGNvbnRhaW5lciBteC1hdXRvIHB4LTQgcHktMTQgbGc6cHktMTZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy00IGdhcC0xMCBsZzpnYXAtMTJcIj5cbiAgICAgICAgICB7LyogQWJvdXQgKi99XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgbWItNVwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXtmb290ZXJMb2dvfVxuICAgICAgICAgICAgICAgIGFsdD1cIlNKUlBTLUhCUiBMb2dvXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTIwIHctMjggb2JqZWN0LWNvbnRhaW4gYmctd2hpdGUgcm91bmRlZC1sZyBwLTFcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJveFNoYWRvdzogXCIwIDAgMCAxcHggI2ZmZmZmZiwgMCAxMHB4IDE1cHggLTNweCByZ2JhKDAsMCwwLDAuMSlcIiB9fVxuICAgICAgICAgICAgICAgIG9uRXJyb3I9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAoZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbWFnZUVsZW1lbnQpLnNyYyA9IFwiL3BsYWNlaG9sZGVyLnN2Z1wiO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgzXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1sZyBsZWFkaW5nLXRpZ2h0XCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiUG9wcGlucywgc2Fucy1zZXJpZlwiIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgU0pSUFMtSEJSXG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtd2hpdGUvNzBcIj5IQlIgTGF5b3V0LCBCZW5nYWx1cnU8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUvODAgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgIFNKUiBQdWJsaWMgU2Nob29sLCBIQlIgTGF5b3V0IGlzIGNvbW1pdHRlZCB0byBzaGFwaW5nIGNvbmZpZGVudCxcbiAgICAgICAgICAgICAgY29tcGFzc2lvbmF0ZSwgYW5kIGNhcGFibGUgeW91bmcgbWluZHMgdGhyb3VnaCB2YWx1ZS1iYXNlZCxcbiAgICAgICAgICAgICAgZnV0dXJlLXJlYWR5IGVkdWNhdGlvbi5cbiAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgey8qIFNvY2lhbCAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgbXQtNlwiPlxuICAgICAgICAgICAgICB7W1xuICAgICAgICAgICAgICAgIHsgSWNvbjogRmFjZWJvb2ssIGhyZWY6IFwiI1wiLCBsYWJlbDogXCJGYWNlYm9va1wiIH0sXG4gICAgICAgICAgICAgICAgeyBJY29uOiBJbnN0YWdyYW0sIGhyZWY6IFwiI1wiLCBsYWJlbDogXCJJbnN0YWdyYW1cIiB9LFxuICAgICAgICAgICAgICAgIHsgSWNvbjogWW91dHViZSwgaHJlZjogXCIjXCIsIGxhYmVsOiBcIllvdVR1YmVcIiB9LFxuICAgICAgICAgICAgICBdLm1hcCgoeyBJY29uLCBocmVmLCBsYWJlbCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGtleT17bGFiZWx9XG4gICAgICAgICAgICAgICAgICBocmVmPXtocmVmfVxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17bGFiZWx9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTkgdy05IHJvdW5kZWQtZnVsbCBiZy13aGl0ZS8xMCBob3ZlcjpiZy1zYWZmcm9uLW9yYW5nZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgaG92ZXI6c2NhbGUtMTEwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogUXVpY2sgTGlua3MgKi99XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoM1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCBtYi01IHJlbGF0aXZlIHBiLTJcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBmb250RmFtaWx5OiBcIlBvcHBpbnMsIHNhbnMtc2VyaWZcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBRdWljayBMaW5rc1xuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgYm90dG9tLTAgaC1bMnB4XSB3LTEwIGJnLXNhZmZyb24tb3JhbmdlXCIgLz5cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3BhY2UteS0yLjUgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICB7cXVpY2tMaW5rcy5tYXAoKGwpID0+IChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtsLmxhYmVsfT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rSXRlbSBsYWJlbD17bC5sYWJlbH0gdG89e2wudG99IC8+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIEltcG9ydGFudCBMaW5rcyAqL31cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgzXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIG1iLTUgcmVsYXRpdmUgcGItMlwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiUG9wcGlucywgc2Fucy1zZXJpZlwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEltcG9ydGFudCBMaW5rc1xuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgYm90dG9tLTAgaC1bMnB4XSB3LTEwIGJnLXNhZmZyb24tb3JhbmdlXCIgLz5cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3BhY2UteS0yLjUgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICB7aW1wb3J0YW50TGlua3MubWFwKChsKSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17bC5sYWJlbH0+XG4gICAgICAgICAgICAgICAgICA8TGlua0l0ZW0gbGFiZWw9e2wubGFiZWx9IHRvPXtsLnRvfSBleHRlcm5hbD17bC5leHRlcm5hbH0gLz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogQ29udGFjdCAqL31cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgzXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIG1iLTUgcmVsYXRpdmUgcGItMlwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiUG9wcGlucywgc2Fucy1zZXJpZlwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0wIGJvdHRvbS0wIGgtWzJweF0gdy0xMCBiZy1zYWZmcm9uLW9yYW5nZVwiIC8+XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNwYWNlLXktMyB0ZXh0LXNtIHRleHQtd2hpdGUvODVcIj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICA8TWFwUGluIGNsYXNzTmFtZT1cImgtNCB3LTQgbXQtMC41IHRleHQtc2FmZnJvbi1vcmFuZ2UgZmxleC1zaHJpbmstMFwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICBOby4gMywgNXRoIENyb3NzLCA3dGggTWFpbiBSb2FkLCAxc3QgU3RhZ2UsIDNyZCBCbG9jaywgS2FseWFuIE5hZ2FyLCBCZW5nYWx1cnUsIEthcm5hdGFrYSDigJMgNTYwMDQzXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBnYXAtM1wiPlxuICAgICAgICAgICAgICAgIDxQaG9uZSBjbGFzc05hbWU9XCJoLTQgdy00IG10LTAuNSB0ZXh0LXNhZmZyb24tb3JhbmdlIGZsZXgtc2hyaW5rLTBcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICAgICAge1NDSE9PTF9MQU5ETElORVMubWFwKChwaG9uZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8YSBrZXk9e3Bob25lLnRlbH0gaHJlZj17YHRlbDoke3Bob25lLnRlbH1gfSBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWdvbGRlbi15ZWxsb3cgdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7cGhvbmUudGV4dH1cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgPE1haWwgY2xhc3NOYW1lPVwiaC00IHctNCBtdC0wLjUgdGV4dC1zYWZmcm9uLW9yYW5nZSBmbGV4LXNocmluay0wXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICAgIHtTQ0hPT0xfRU1BSUxTLm1hcCgoZW1haWwpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2VtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2BtYWlsdG86JHtlbWFpbH1gfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZ29sZGVuLXllbGxvdyB0cmFuc2l0aW9uLWNvbG9ycyBicmVhay1hbGxcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2VtYWlsfVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBCb3R0b20gc3RyaXAgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJnLXNhZmZyb24tb3JhbmdlIHRleHQtd2hpdGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IHB5LTMgZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0yIHRleHQteHMgc206dGV4dC1zbSBmb250LW1lZGl1bVwiPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgwqkge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gU0pSIFB1YmxpYyBTY2hvb2wsIEhCUiBMYXlvdXQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm9wYWNpdHktOTBcIj5EZXNpZ25lZCBmb3IgU0pSUFMtSEJSPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIl0sImZpbGUiOiIvaG9tZS9zanJzaDkxNi9wdWJsaWNfaHRtbC9zcmMvY29tcG9uZW50cy9Gb290ZXIudHN4In0=