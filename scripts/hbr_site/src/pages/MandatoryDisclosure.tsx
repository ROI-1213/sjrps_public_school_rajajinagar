import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/MandatoryDisclosure.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import Layout from "/src/components/Layout.tsx";
import PageHero from "/src/components/PageHero.tsx";
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { Building2, BadgeCheck, MapPin, Phone, Mail, Globe, Users, ClipboardList, GraduationCap, Building, Eye, ShieldCheck } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
import { AFFILIATION, SCHOOL_EMAILS, SCHOOL_LANDLINES, WEBSITE_URL } from "/src/lib/siteInfo.ts";
const schoolInfo = [
    {
        icon: Building2,
        label: "School Name",
        value: "SJR Public School, HBR Layout"
    },
    {
        icon: BadgeCheck,
        label: "Affiliation Details",
        value: AFFILIATION
    },
    {
        icon: MapPin,
        label: "School Address",
        value: "3rd Block, HBR Layout, Bengaluru, Karnataka – 560043"
    },
    {
        icon: Phone,
        label: "Contact Information",
        value: `Landline: ${SCHOOL_LANDLINES.map((l)=>l.text).join(" | ")}`
    },
    {
        icon: Mail,
        label: "Email",
        value: SCHOOL_EMAILS.map((email)=>({
                text: email,
                href: `mailto:${email}`
            }))
    },
    {
        icon: Globe,
        label: "Website",
        value: WEBSITE_URL.replace(/^https?:\/\//, ""),
        href: WEBSITE_URL,
        external: true
    }
];
const institutionalInfo = [
    {
        icon: Users,
        title: "Management Details",
        desc: "Governed by the SJR Education Society, committed to value-based education and academic excellence since inception."
    },
    {
        icon: ClipboardList,
        title: "School Committee",
        desc: "An active School Management Committee comprising educators, parents, and community members ensuring transparent governance."
    },
    {
        icon: GraduationCap,
        title: "Academic Information",
        desc: "Comprehensive CBSE curriculum delivered across Primary, Secondary, and Higher Secondary levels with qualified faculty."
    },
    {
        icon: Building,
        title: "Infrastructure Information",
        desc: "Modern campus with smart classrooms, laboratories, library, sports facilities, auditorium, and safe transport services."
    }
];
const documents = [
    {
        name: "Affiliation Certificate",
        file: "/Affiliation-Certificate.pdf"
    },
    {
        name: "Society Registration Copy",
        file: "/Society-Registration-Copy.pdf"
    },
    {
        name: "No Objection Certificate",
        file: "/NOC.pdf"
    },
    {
        name: "RTE Recognition Certificate",
        file: "/RTE.pdf"
    },
    {
        name: "Building Safety Certificate",
        file: "/bsc.pdf"
    },
    {
        name: "Fire Safety Certificate",
        file: "/FSC.pdf"
    },
    {
        name: "Self Certification",
        file: "/sc.pdf"
    },
    {
        name: "Water Sanitation Certificate",
        file: "/wsc.pdf"
    },
    {
        name: "Water Testing Report",
        file: "/wtr.pdf"
    },
    {
        name: "Annual Calendar 2026-27",
        file: "/Annual-Calendar-2026-27.pdf"
    },
    {
        name: "Class X CBSE Results Last 3 Years",
        file: "/Class-10-CBSE-result-last-3-years.pdf"
    },
    {
        name: "Fee Structure AY 2026-27",
        file: "/Fee-Structure-2026-27.pdf"
    },
    {
        name: "Parent Teachers Committee 2026-27",
        file: "/Parents-teachers-Comittee.pdf"
    }
];
const MandatoryDisclosure = ()=>{
    return /*#__PURE__*/ _jsxDEV(Layout, {
        "data-lov-id": "src/pages/MandatoryDisclosure.tsx:79:4",
        "data-lov-name": "Layout",
        "data-component-path": "src/pages/MandatoryDisclosure.tsx",
        "data-component-line": "79",
        "data-component-file": "MandatoryDisclosure.tsx",
        "data-component-name": "Layout",
        "data-component-content": "%7B%7D",
        children: [
            /*#__PURE__*/ _jsxDEV(PageHero, {
                "data-lov-id": "src/pages/MandatoryDisclosure.tsx:80:6",
                "data-lov-name": "PageHero",
                "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                "data-component-line": "80",
                "data-component-file": "MandatoryDisclosure.tsx",
                "data-component-name": "PageHero",
                "data-component-content": "%7B%7D",
                title: "Mandatory Disclosure",
                breadcrumbs: [
                    {
                        label: "Mandatory Disclosure"
                    }
                ]
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/MandatoryDisclosure.tsx:86:6",
                "data-lov-name": "section",
                "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                "data-component-line": "86",
                "data-component-file": "MandatoryDisclosure.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20bg-background%22%7D",
                className: "py-16 bg-background",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/MandatoryDisclosure.tsx:87:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                    "data-component-line": "87",
                    "data-component-file": "MandatoryDisclosure.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20max-w-4xl%20text-center%22%7D",
                    className: "container mx-auto px-4 max-w-4xl text-center",
                    children: [
                        /*#__PURE__*/ _jsxDEV("h2", {
                            "data-lov-id": "src/pages/MandatoryDisclosure.tsx:88:10",
                            "data-lov-name": "h2",
                            "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                            "data-component-line": "88",
                            "data-component-file": "MandatoryDisclosure.tsx",
                            "data-component-name": "h2",
                            "data-component-content": "%7B%22text%22%3A%22Transparency%20%26%20Compliance%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20text-black%20mb-4%22%7D",
                            className: "text-3xl md:text-4xl font-bold text-black mb-4",
                            children: "Transparency & Compliance"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/MandatoryDisclosure.tsx:89:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                            "data-component-line": "89",
                            "data-component-file": "MandatoryDisclosure.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22mx-auto%20h-1%20w-20%20bg-indian-green%20rounded-full%20mb-6%22%7D",
                            className: "mx-auto h-1 w-20 bg-indian-green rounded-full mb-6"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("p", {
                            "data-lov-id": "src/pages/MandatoryDisclosure.tsx:90:10",
                            "data-lov-name": "p",
                            "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                            "data-component-line": "90",
                            "data-component-file": "MandatoryDisclosure.tsx",
                            "data-component-name": "p",
                            "data-component-content": "%7B%22text%22%3A%22In%20accordance%20with%20regulatory%20norms%20and%20our%20commitment%20to%20institutional%20governance%2C%20we%20publish%20all%5Cn%20%20%20%20%20%20%20%20%20%20%20%20mandatory%20information%20about%20the%20school%2C%20its%20management%2C%20infrastructure%2C%20and%20academic%20framework%20for%5Cn%20%20%20%20%20%20%20%20%20%20%20%20public%20access.%20This%20page%20reflects%20our%20dedication%20to%20openness%2C%20accountability%2C%20and%20trust.%22%2C%22className%22%3A%22text-lg%20text-foreground%2F80%20leading-relaxed%22%7D",
                            className: "text-lg text-foreground/80 leading-relaxed",
                            children: "In accordance with regulatory norms and our commitment to institutional governance, we publish all mandatory information about the school, its management, infrastructure, and academic framework for public access. This page reflects our dedication to openness, accountability, and trust."
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/MandatoryDisclosure.tsx:99:6",
                "data-lov-name": "section",
                "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                "data-component-line": "99",
                "data-component-file": "MandatoryDisclosure.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20bg-muted%2F30%22%7D",
                className: "py-16 bg-muted/30",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/MandatoryDisclosure.tsx:100:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                    "data-component-line": "100",
                    "data-component-file": "MandatoryDisclosure.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20max-w-6xl%22%7D",
                    className: "container mx-auto px-4 max-w-6xl",
                    children: [
                        /*#__PURE__*/ _jsxDEV("h2", {
                            "data-lov-id": "src/pages/MandatoryDisclosure.tsx:101:10",
                            "data-lov-name": "h2",
                            "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                            "data-component-line": "101",
                            "data-component-file": "MandatoryDisclosure.tsx",
                            "data-component-name": "h2",
                            "data-component-content": "%7B%22text%22%3A%22School%20Information%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20text-black%20text-center%20mb-3%22%7D",
                            className: "text-3xl md:text-4xl font-bold text-black text-center mb-3",
                            children: "School Information"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/MandatoryDisclosure.tsx:102:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                            "data-component-line": "102",
                            "data-component-file": "MandatoryDisclosure.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22mx-auto%20h-1%20w-20%20bg-indian-green%20rounded-full%20mb-12%22%7D",
                            className: "mx-auto h-1 w-20 bg-indian-green rounded-full mb-12"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/MandatoryDisclosure.tsx:103:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                            "data-component-line": "103",
                            "data-component-file": "MandatoryDisclosure.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22grid%20sm%3Agrid-cols-2%20lg%3Agrid-cols-3%20gap-6%22%7D",
                            className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: schoolInfo.map((it, i)=>/*#__PURE__*/ _jsxDEV(Card, {
                                    "data-lov-id": "src/pages/MandatoryDisclosure.tsx:105:14",
                                    "data-lov-name": "Card",
                                    "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                                    "data-component-line": "105",
                                    "data-component-file": "MandatoryDisclosure.tsx",
                                    "data-component-name": "Card",
                                    "data-component-content": "%7B%22className%22%3A%22border-indian-green%2F20%20hover%3Ashadow-lg%20transition-all%22%7D",
                                    className: "border-indian-green/20 hover:shadow-lg transition-all",
                                    children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                        "data-lov-id": "src/pages/MandatoryDisclosure.tsx:106:16",
                                        "data-lov-name": "CardContent",
                                        "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                                        "data-component-line": "106",
                                        "data-component-file": "MandatoryDisclosure.tsx",
                                        "data-component-name": "CardContent",
                                        "data-component-content": "%7B%22className%22%3A%22p-6%22%7D",
                                        className: "p-6",
                                        children: /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/pages/MandatoryDisclosure.tsx:107:18",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                                            "data-component-line": "107",
                                            "data-component-file": "MandatoryDisclosure.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22flex%20items-start%20gap-4%22%7D",
                                            className: "flex items-start gap-4",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/MandatoryDisclosure.tsx:108:20",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                                                    "data-component-line": "108",
                                                    "data-component-file": "MandatoryDisclosure.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22w-12%20h-12%20rounded-xl%20bg-indian-green%20flex%20items-center%20justify-center%20flex-shrink-0%22%7D",
                                                    className: "w-12 h-12 rounded-xl bg-indian-green flex items-center justify-center flex-shrink-0",
                                                    children: /*#__PURE__*/ _jsxDEV(it.icon, {
                                                        "data-lov-id": "src/pages/MandatoryDisclosure.tsx:109:22",
                                                        "data-lov-name": "it.icon",
                                                        "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                                                        "data-component-line": "109",
                                                        "data-component-file": "MandatoryDisclosure.tsx",
                                                        "data-component-name": "it.icon",
                                                        "data-component-content": "%7B%22className%22%3A%22h-6%20w-6%20text-white%22%7D",
                                                        className: "h-6 w-6 text-white"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/MandatoryDisclosure.tsx:111:20",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                                                    "data-component-line": "111",
                                                    "data-component-file": "MandatoryDisclosure.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22min-w-0%22%7D",
                                                    className: "min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("p", {
                                                            "data-lov-id": "src/pages/MandatoryDisclosure.tsx:112:22",
                                                            "data-lov-name": "p",
                                                            "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                                                            "data-component-line": "112",
                                                            "data-component-file": "MandatoryDisclosure.tsx",
                                                            "data-component-name": "p",
                                                            "data-component-content": "%7B%22className%22%3A%22text-sm%20font-semibold%20text-indian-green%20uppercase%20tracking-wide%20mb-1%22%7D",
                                                            className: "text-sm font-semibold text-indian-green uppercase tracking-wide mb-1",
                                                            children: it.label
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                                                            lineNumber: 112,
                                                            columnNumber: 23
                                                        }, this),
                                                        Array.isArray(it.value) ? it.value.map((v, idx)=>/*#__PURE__*/ _jsxDEV("a", {
                                                                "data-lov-id": "src/pages/MandatoryDisclosure.tsx:115:26",
                                                                "data-lov-name": "a",
                                                                "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                                                                "data-component-line": "115",
                                                                "data-component-file": "MandatoryDisclosure.tsx",
                                                                "data-component-name": "a",
                                                                "data-component-content": "%7B%22className%22%3A%22block%20text-foreground%2F80%20hover%3Atext-indian-green%20underline-offset-2%20hover%3Aunderline%20break-words%22%7D",
                                                                href: v.href,
                                                                className: "block text-foreground/80 hover:text-indian-green underline-offset-2 hover:underline break-words",
                                                                children: v.text
                                                            }, idx, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                                                                lineNumber: 115,
                                                                columnNumber: 27
                                                            }, this)) : it.href ? /*#__PURE__*/ _jsxDEV("a", {
                                                            "data-lov-id": "src/pages/MandatoryDisclosure.tsx:124:24",
                                                            "data-lov-name": "a",
                                                            "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                                                            "data-component-line": "124",
                                                            "data-component-file": "MandatoryDisclosure.tsx",
                                                            "data-component-name": "a",
                                                            "data-component-content": "%7B%22className%22%3A%22text-foreground%2F80%20hover%3Atext-indian-green%20underline-offset-2%20hover%3Aunderline%20break-words%22%7D",
                                                            href: it.href,
                                                            ...it.external ? {
                                                                target: "_blank",
                                                                rel: "noopener noreferrer"
                                                            } : {},
                                                            className: "text-foreground/80 hover:text-indian-green underline-offset-2 hover:underline break-words",
                                                            children: it.value
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                                                            lineNumber: 124,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ _jsxDEV("p", {
                                                            "data-lov-id": "src/pages/MandatoryDisclosure.tsx:132:24",
                                                            "data-lov-name": "p",
                                                            "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                                                            "data-component-line": "132",
                                                            "data-component-file": "MandatoryDisclosure.tsx",
                                                            "data-component-name": "p",
                                                            "data-component-content": "%7B%22className%22%3A%22text-foreground%2F80%20break-words%22%7D",
                                                            className: "text-foreground/80 break-words",
                                                            children: it.value
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                                            lineNumber: 107,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                                        lineNumber: 106,
                                        columnNumber: 17
                                    }, this)
                                }, i, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/MandatoryDisclosure.tsx:144:6",
                "data-lov-name": "section",
                "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                "data-component-line": "144",
                "data-component-file": "MandatoryDisclosure.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20bg-background%22%7D",
                className: "py-16 bg-background",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/MandatoryDisclosure.tsx:145:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                    "data-component-line": "145",
                    "data-component-file": "MandatoryDisclosure.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20max-w-6xl%22%7D",
                    className: "container mx-auto px-4 max-w-6xl",
                    children: [
                        /*#__PURE__*/ _jsxDEV("h2", {
                            "data-lov-id": "src/pages/MandatoryDisclosure.tsx:146:10",
                            "data-lov-name": "h2",
                            "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                            "data-component-line": "146",
                            "data-component-file": "MandatoryDisclosure.tsx",
                            "data-component-name": "h2",
                            "data-component-content": "%7B%22text%22%3A%22Institutional%20Information%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20text-black%20text-center%20mb-3%22%7D",
                            className: "text-3xl md:text-4xl font-bold text-black text-center mb-3",
                            children: "Institutional Information"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/MandatoryDisclosure.tsx:147:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                            "data-component-line": "147",
                            "data-component-file": "MandatoryDisclosure.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22mx-auto%20h-1%20w-20%20bg-indian-green%20rounded-full%20mb-12%22%7D",
                            className: "mx-auto h-1 w-20 bg-indian-green rounded-full mb-12"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/MandatoryDisclosure.tsx:148:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                            "data-component-line": "148",
                            "data-component-file": "MandatoryDisclosure.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-2%20gap-6%22%7D",
                            className: "grid md:grid-cols-2 gap-6",
                            children: institutionalInfo.map((it, i)=>/*#__PURE__*/ _jsxDEV(Card, {
                                    "data-lov-id": "src/pages/MandatoryDisclosure.tsx:150:14",
                                    "data-lov-name": "Card",
                                    "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                                    "data-component-line": "150",
                                    "data-component-file": "MandatoryDisclosure.tsx",
                                    "data-component-name": "Card",
                                    "data-component-content": "%7B%22className%22%3A%22border-l-4%20border-l-indian-green%20hover%3Ashadow-lg%20transition-all%22%7D",
                                    className: "border-l-4 border-l-indian-green hover:shadow-lg transition-all",
                                    children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                        "data-lov-id": "src/pages/MandatoryDisclosure.tsx:151:16",
                                        "data-lov-name": "CardContent",
                                        "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                                        "data-component-line": "151",
                                        "data-component-file": "MandatoryDisclosure.tsx",
                                        "data-component-name": "CardContent",
                                        "data-component-content": "%7B%22className%22%3A%22p-6%20flex%20gap-4%22%7D",
                                        className: "p-6 flex gap-4",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/MandatoryDisclosure.tsx:152:18",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                                                "data-component-line": "152",
                                                "data-component-file": "MandatoryDisclosure.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22w-12%20h-12%20rounded-xl%20bg-indian-green%2F10%20flex%20items-center%20justify-center%20flex-shrink-0%22%7D",
                                                className: "w-12 h-12 rounded-xl bg-indian-green/10 flex items-center justify-center flex-shrink-0",
                                                children: /*#__PURE__*/ _jsxDEV(it.icon, {
                                                    "data-lov-id": "src/pages/MandatoryDisclosure.tsx:153:20",
                                                    "data-lov-name": "it.icon",
                                                    "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                                                    "data-component-line": "153",
                                                    "data-component-file": "MandatoryDisclosure.tsx",
                                                    "data-component-name": "it.icon",
                                                    "data-component-content": "%7B%22className%22%3A%22h-6%20w-6%20text-indian-green%22%7D",
                                                    className: "h-6 w-6 text-indian-green"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                                                lineNumber: 152,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/MandatoryDisclosure.tsx:155:18",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                                                "data-component-line": "155",
                                                "data-component-file": "MandatoryDisclosure.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%7D",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("h3", {
                                                        "data-lov-id": "src/pages/MandatoryDisclosure.tsx:156:20",
                                                        "data-lov-name": "h3",
                                                        "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                                                        "data-component-line": "156",
                                                        "data-component-file": "MandatoryDisclosure.tsx",
                                                        "data-component-name": "h3",
                                                        "data-component-content": "%7B%22className%22%3A%22text-xl%20font-bold%20text-black%20mb-2%22%7D",
                                                        className: "text-xl font-bold text-black mb-2",
                                                        children: it.title
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("p", {
                                                        "data-lov-id": "src/pages/MandatoryDisclosure.tsx:157:20",
                                                        "data-lov-name": "p",
                                                        "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                                                        "data-component-line": "157",
                                                        "data-component-file": "MandatoryDisclosure.tsx",
                                                        "data-component-name": "p",
                                                        "data-component-content": "%7B%22className%22%3A%22text-foreground%2F75%20leading-relaxed%22%7D",
                                                        className: "text-foreground/75 leading-relaxed",
                                                        children: it.desc
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                                                lineNumber: 155,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                                        lineNumber: 151,
                                        columnNumber: 17
                                    }, this)
                                }, i, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/MandatoryDisclosure.tsx:167:6",
                "data-lov-name": "section",
                "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                "data-component-line": "167",
                "data-component-file": "MandatoryDisclosure.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20bg-muted%2F30%22%7D",
                className: "py-16 bg-muted/30",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/MandatoryDisclosure.tsx:168:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                    "data-component-line": "168",
                    "data-component-file": "MandatoryDisclosure.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20max-w-5xl%22%7D",
                    className: "container mx-auto px-4 max-w-5xl",
                    children: [
                        /*#__PURE__*/ _jsxDEV("h2", {
                            "data-lov-id": "src/pages/MandatoryDisclosure.tsx:169:10",
                            "data-lov-name": "h2",
                            "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                            "data-component-line": "169",
                            "data-component-file": "MandatoryDisclosure.tsx",
                            "data-component-name": "h2",
                            "data-component-content": "%7B%22text%22%3A%22Mandatory%20Documents%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20text-black%20text-center%20mb-3%22%7D",
                            className: "text-3xl md:text-4xl font-bold text-black text-center mb-3",
                            children: "Mandatory Documents"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/MandatoryDisclosure.tsx:170:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                            "data-component-line": "170",
                            "data-component-file": "MandatoryDisclosure.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22mx-auto%20h-1%20w-20%20bg-indian-green%20rounded-full%20mb-12%22%7D",
                            className: "mx-auto h-1 w-20 bg-indian-green rounded-full mb-12"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV(Card, {
                            "data-lov-id": "src/pages/MandatoryDisclosure.tsx:171:10",
                            "data-lov-name": "Card",
                            "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                            "data-component-line": "171",
                            "data-component-file": "MandatoryDisclosure.tsx",
                            "data-component-name": "Card",
                            "data-component-content": "%7B%22className%22%3A%22overflow-hidden%20border-indian-green%2F20%22%7D",
                            className: "overflow-hidden border-indian-green/20",
                            children: /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/pages/MandatoryDisclosure.tsx:172:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                                "data-component-line": "172",
                                "data-component-file": "MandatoryDisclosure.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22overflow-x-auto%22%7D",
                                className: "overflow-x-auto",
                                children: /*#__PURE__*/ _jsxDEV("table", {
                                    "data-lov-id": "src/pages/MandatoryDisclosure.tsx:173:14",
                                    "data-lov-name": "table",
                                    "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                                    "data-component-line": "173",
                                    "data-component-file": "MandatoryDisclosure.tsx",
                                    "data-component-name": "table",
                                    "data-component-content": "%7B%22className%22%3A%22w-full%20text-left%22%7D",
                                    className: "w-full text-left",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("thead", {
                                            "data-lov-id": "src/pages/MandatoryDisclosure.tsx:174:16",
                                            "data-lov-name": "thead",
                                            "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                                            "data-component-line": "174",
                                            "data-component-file": "MandatoryDisclosure.tsx",
                                            "data-component-name": "thead",
                                            "data-component-content": "%7B%22className%22%3A%22bg-indian-green%20text-white%22%7D",
                                            className: "bg-indian-green text-white",
                                            children: /*#__PURE__*/ _jsxDEV("tr", {
                                                "data-lov-id": "src/pages/MandatoryDisclosure.tsx:175:18",
                                                "data-lov-name": "tr",
                                                "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                                                "data-component-line": "175",
                                                "data-component-file": "MandatoryDisclosure.tsx",
                                                "data-component-name": "tr",
                                                "data-component-content": "%7B%7D",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("th", {
                                                        "data-lov-id": "src/pages/MandatoryDisclosure.tsx:176:20",
                                                        "data-lov-name": "th",
                                                        "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                                                        "data-component-line": "176",
                                                        "data-component-file": "MandatoryDisclosure.tsx",
                                                        "data-component-name": "th",
                                                        "data-component-content": "%7B%22text%22%3A%22Sl%20No%22%2C%22className%22%3A%22px-6%20py-4%20font-semibold%20w-20%22%7D",
                                                        className: "px-6 py-4 font-semibold w-20",
                                                        children: "Sl No"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("th", {
                                                        "data-lov-id": "src/pages/MandatoryDisclosure.tsx:177:20",
                                                        "data-lov-name": "th",
                                                        "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                                                        "data-component-line": "177",
                                                        "data-component-file": "MandatoryDisclosure.tsx",
                                                        "data-component-name": "th",
                                                        "data-component-content": "%7B%22text%22%3A%22Document%20Name%22%2C%22className%22%3A%22px-6%20py-4%20font-semibold%22%7D",
                                                        className: "px-6 py-4 font-semibold",
                                                        children: "Document Name"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("th", {
                                                        "data-lov-id": "src/pages/MandatoryDisclosure.tsx:178:20",
                                                        "data-lov-name": "th",
                                                        "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                                                        "data-component-line": "178",
                                                        "data-component-file": "MandatoryDisclosure.tsx",
                                                        "data-component-name": "th",
                                                        "data-component-content": "%7B%22text%22%3A%22View%22%2C%22className%22%3A%22px-6%20py-4%20font-semibold%20text-right%22%7D",
                                                        className: "px-6 py-4 font-semibold text-right",
                                                        children: "View"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                                                lineNumber: 175,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                                            lineNumber: 174,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("tbody", {
                                            "data-lov-id": "src/pages/MandatoryDisclosure.tsx:181:16",
                                            "data-lov-name": "tbody",
                                            "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                                            "data-component-line": "181",
                                            "data-component-file": "MandatoryDisclosure.tsx",
                                            "data-component-name": "tbody",
                                            "data-component-content": "%7B%7D",
                                            children: documents.map((doc, i)=>/*#__PURE__*/ _jsxDEV("tr", {
                                                    "data-lov-id": "src/pages/MandatoryDisclosure.tsx:183:20",
                                                    "data-lov-name": "tr",
                                                    "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                                                    "data-component-line": "183",
                                                    "data-component-file": "MandatoryDisclosure.tsx",
                                                    "data-component-name": "tr",
                                                    "data-component-content": "%7B%22className%22%3A%22border-t%20border-indian-green%2F10%20hover%3Abg-indian-green%2F5%20transition-colors%22%7D",
                                                    className: "border-t border-indian-green/10 hover:bg-indian-green/5 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("td", {
                                                            "data-lov-id": "src/pages/MandatoryDisclosure.tsx:184:22",
                                                            "data-lov-name": "td",
                                                            "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                                                            "data-component-line": "184",
                                                            "data-component-file": "MandatoryDisclosure.tsx",
                                                            "data-component-name": "td",
                                                            "data-component-content": "%7B%22className%22%3A%22px-6%20py-4%20font-medium%20text-black%22%7D",
                                                            className: "px-6 py-4 font-medium text-black",
                                                            children: i + 1
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("td", {
                                                            "data-lov-id": "src/pages/MandatoryDisclosure.tsx:185:22",
                                                            "data-lov-name": "td",
                                                            "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                                                            "data-component-line": "185",
                                                            "data-component-file": "MandatoryDisclosure.tsx",
                                                            "data-component-name": "td",
                                                            "data-component-content": "%7B%22className%22%3A%22px-6%20py-4%20text-foreground%2F85%22%7D",
                                                            className: "px-6 py-4 text-foreground/85",
                                                            children: doc.name
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                                                            lineNumber: 185,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("td", {
                                                            "data-lov-id": "src/pages/MandatoryDisclosure.tsx:186:22",
                                                            "data-lov-name": "td",
                                                            "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                                                            "data-component-line": "186",
                                                            "data-component-file": "MandatoryDisclosure.tsx",
                                                            "data-component-name": "td",
                                                            "data-component-content": "%7B%22className%22%3A%22px-6%20py-4%20text-right%22%7D",
                                                            className: "px-6 py-4 text-right",
                                                            children: /*#__PURE__*/ _jsxDEV(Button, {
                                                                "data-lov-id": "src/pages/MandatoryDisclosure.tsx:187:24",
                                                                "data-lov-name": "Button",
                                                                "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                                                                "data-component-line": "187",
                                                                "data-component-file": "MandatoryDisclosure.tsx",
                                                                "data-component-name": "Button",
                                                                "data-component-content": "%7B%22className%22%3A%22bg-indian-green%20hover%3Abg-indian-green%2F90%20text-white%22%7D",
                                                                asChild: true,
                                                                size: "sm",
                                                                className: "bg-indian-green hover:bg-indian-green/90 text-white",
                                                                children: /*#__PURE__*/ _jsxDEV("a", {
                                                                    "data-lov-id": "src/pages/MandatoryDisclosure.tsx:192:26",
                                                                    "data-lov-name": "a",
                                                                    "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                                                                    "data-component-line": "192",
                                                                    "data-component-file": "MandatoryDisclosure.tsx",
                                                                    "data-component-name": "a",
                                                                    "data-component-content": "%7B%22text%22%3A%22View%22%7D",
                                                                    href: doc.file,
                                                                    target: "_blank",
                                                                    rel: "noopener noreferrer",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxDEV(Eye, {
                                                                            "data-lov-id": "src/pages/MandatoryDisclosure.tsx:193:28",
                                                                            "data-lov-name": "Eye",
                                                                            "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                                                                            "data-component-line": "193",
                                                                            "data-component-file": "MandatoryDisclosure.tsx",
                                                                            "data-component-name": "Eye",
                                                                            "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%20mr-2%22%7D",
                                                                            className: "h-4 w-4 mr-2"
                                                                        }, void 0, false, {
                                                                            fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                                                                            lineNumber: 193,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        " View"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                                                                    lineNumber: 192,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                                                                lineNumber: 187,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                                                            lineNumber: 186,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                                            lineNumber: 181,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                                    lineNumber: 173,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                    lineNumber: 168,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/MandatoryDisclosure.tsx:207:6",
                "data-lov-name": "section",
                "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                "data-component-line": "207",
                "data-component-file": "MandatoryDisclosure.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20bg-background%22%7D",
                className: "py-16 bg-background",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/MandatoryDisclosure.tsx:208:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                    "data-component-line": "208",
                    "data-component-file": "MandatoryDisclosure.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20max-w-4xl%22%7D",
                    className: "container mx-auto px-4 max-w-4xl",
                    children: /*#__PURE__*/ _jsxDEV(Card, {
                        "data-lov-id": "src/pages/MandatoryDisclosure.tsx:209:10",
                        "data-lov-name": "Card",
                        "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                        "data-component-line": "209",
                        "data-component-file": "MandatoryDisclosure.tsx",
                        "data-component-name": "Card",
                        "data-component-content": "%7B%22className%22%3A%22border-indian-green%2F20%20bg-indian-green%2F5%22%7D",
                        className: "border-indian-green/20 bg-indian-green/5",
                        children: /*#__PURE__*/ _jsxDEV(CardContent, {
                            "data-lov-id": "src/pages/MandatoryDisclosure.tsx:210:12",
                            "data-lov-name": "CardContent",
                            "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                            "data-component-line": "210",
                            "data-component-file": "MandatoryDisclosure.tsx",
                            "data-component-name": "CardContent",
                            "data-component-content": "%7B%22className%22%3A%22p-10%20text-center%22%7D",
                            className: "p-10 text-center",
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/MandatoryDisclosure.tsx:211:14",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                                    "data-component-line": "211",
                                    "data-component-file": "MandatoryDisclosure.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22w-16%20h-16%20rounded-2xl%20bg-indian-green%20flex%20items-center%20justify-center%20mx-auto%20mb-6%22%7D",
                                    className: "w-16 h-16 rounded-2xl bg-indian-green flex items-center justify-center mx-auto mb-6",
                                    children: /*#__PURE__*/ _jsxDEV(ShieldCheck, {
                                        "data-lov-id": "src/pages/MandatoryDisclosure.tsx:212:16",
                                        "data-lov-name": "ShieldCheck",
                                        "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                                        "data-component-line": "212",
                                        "data-component-file": "MandatoryDisclosure.tsx",
                                        "data-component-name": "ShieldCheck",
                                        "data-component-content": "%7B%22className%22%3A%22h-8%20w-8%20text-white%22%7D",
                                        className: "h-8 w-8 text-white"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                                        lineNumber: 212,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                                    lineNumber: 211,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("h2", {
                                    "data-lov-id": "src/pages/MandatoryDisclosure.tsx:214:14",
                                    "data-lov-name": "h2",
                                    "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                                    "data-component-line": "214",
                                    "data-component-file": "MandatoryDisclosure.tsx",
                                    "data-component-name": "h2",
                                    "data-component-content": "%7B%22text%22%3A%22Commitment%20to%20Transparency%22%2C%22className%22%3A%22text-3xl%20font-bold%20text-black%20mb-4%22%7D",
                                    className: "text-3xl font-bold text-black mb-4",
                                    children: "Commitment to Transparency"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                                    lineNumber: 214,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    "data-lov-id": "src/pages/MandatoryDisclosure.tsx:215:14",
                                    "data-lov-name": "p",
                                    "data-component-path": "src/pages/MandatoryDisclosure.tsx",
                                    "data-component-line": "215",
                                    "data-component-file": "MandatoryDisclosure.tsx",
                                    "data-component-name": "p",
                                    "data-component-content": "%7B%22text%22%3A%22We%20uphold%20the%20highest%20standards%20of%20compliance%20and%20accountability.%20All%20institutional%20information%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20academic%20data%2C%20and%20governance%20practices%20are%20documented%20and%20made%20accessible%20to%20stakeholders.%20Our%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20continued%20commitment%20is%20to%20operate%20with%20integrity%2C%20fairness%2C%20and%20openness%20in%20every%20aspect%20of%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20school%20administration.%22%2C%22className%22%3A%22text-lg%20text-foreground%2F80%20leading-relaxed%22%7D",
                                    className: "text-lg text-foreground/80 leading-relaxed",
                                    children: "We uphold the highest standards of compliance and accountability. All institutional information, academic data, and governance practices are documented and made accessible to stakeholders. Our continued commitment is to operate with integrity, fairness, and openness in every aspect of school administration."
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                                    lineNumber: 215,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                            lineNumber: 210,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                        lineNumber: 209,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                    lineNumber: 208,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
};
_c = MandatoryDisclosure;
export default MandatoryDisclosure;
var _c;
$RefreshReg$(_c, "MandatoryDisclosure");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/pages/MandatoryDisclosure.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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LDBCQUFBO29CQUFFRyxXQUFVOzhCQUNiLHNCQUFDL0M7d0JBQUdzQyxlQUFBO3dCQUFBQyxpQkFBQTt3QkFBQUMsdUJBQUE7d0JBQUFDLHVCQUFBO3dCQUFBQyx1QkFBQTt3QkFBQUMsdUJBQUE7d0JBQUFDLDBCQUFBO3dCQUFFRyxXQUFVO2tDQUNkLHNCQUFDOUM7NEJBQVVxQyxlQUFBOzRCQUFBQyxpQkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLDBCQUFBOzRCQUFFRyxXQUFVOzs4Q0FDckIsUUFBQ0M7b0NBQUVWLGVBQUE7b0NBQUFDLGlCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsMEJBQUE7b0NBQUVHLFdBQVU7OENBQ2Isc0JBQUNqQzt3Q0FBVXdCLGVBQUE7d0NBQUFDLGlCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLHVCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsMEJBQUE7d0NBQUVHLFdBQVU7Ozs7Ozs7Ozs7OzhDQUV6QixRQUFDRTtvQ0FBQ1gsZUFBQTtvQ0FBQUMsaUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQywwQkFBQTtvQ0FBRUcsV0FBVTs4Q0FBcUM7Ozs7Ozs4Q0FDbkQsUUFBQ0c7b0NBQUFaLGVBQUE7b0NBQUFDLGlCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsMEJBQUE7b0NBQUVHLFdBQVU7OENBQTRDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZdkU7S0F0Sk1WO0FBd0pOLGVBQWVBLG9CQUFtQiIsIm5hbWVzIjpbIkxheW91dCIsIlBhZ2VIZXJvIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQnV0dG9uIiwiQnVpbGRpbmcyIiwiQmFkZ2VDaGVjayIsIk1hcFBpbiIsIlBob25lIiwiTWFpbCIsIkdsb2JlIiwiVXNlcnMiLCJDbGlwYm9hcmRMaXN0IiwiR3JhZHVhdGlvbkNhcCIsIkJ1aWxkaW5nIiwiRXllIiwiU2hpZWxkQ2hlY2siLCJBRkZJTElBVElPTiIsIlNDSE9PTF9FTUFJTFMiLCJTQ0hPT0xfTEFORExJTkVTIiwiV0VCU0lURV9VUkwiLCJzY2hvb2xJbmZvIiwiaWNvbiIsImxhYmVsIiwidmFsdWUiLCJtYXAiLCJsIiwidGV4dCIsImpvaW4iLCJlbWFpbCIsImhyZWYiLCJyZXBsYWNlIiwiZXh0ZXJuYWwiLCJpbnN0aXR1dGlvbmFsSW5mbyIsInRpdGxlIiwiZGVzYyIsImRvY3VtZW50cyIsIm5hbWUiLCJmaWxlIiwiTWFuZGF0b3J5RGlzY2xvc3VyZSIsImRhdGEtbG92LWlkIiwiZGF0YS1sb3YtbmFtZSIsImRhdGEtY29tcG9uZW50LXBhdGgiLCJkYXRhLWNvbXBvbmVudC1saW5lIiwiZGF0YS1jb21wb25lbnQtZmlsZSIsImRhdGEtY29tcG9uZW50LW5hbWUiLCJkYXRhLWNvbXBvbmVudC1jb250ZW50IiwiYnJlYWRjcnVtYnMiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDIiLCJwIiwiaXQiLCJpIiwiQXJyYXkiLCJpc0FycmF5IiwidiIsImlkeCIsImEiLCJ0YXJnZXQiLCJyZWwiLCJoMyIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJkb2MiLCJ0ZCIsImFzQ2hpbGQiLCJzaXplIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIk1hbmRhdG9yeURpc2Nsb3N1cmUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBQYWdlSGVybyBmcm9tIFwiQC9jb21wb25lbnRzL1BhZ2VIZXJvXCI7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7XG4gIEJ1aWxkaW5nMixcbiAgQmFkZ2VDaGVjayxcbiAgTWFwUGluLFxuICBQaG9uZSxcbiAgTWFpbCxcbiAgR2xvYmUsXG4gIFVzZXJzLFxuICBDbGlwYm9hcmRMaXN0LFxuICBHcmFkdWF0aW9uQ2FwLFxuICBCdWlsZGluZyxcbiAgRXllLFxuICBTaGllbGRDaGVjayxcbn0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgQUZGSUxJQVRJT04sIFNDSE9PTF9FTUFJTFMsIFNDSE9PTF9MQU5ETElORVMsIFdFQlNJVEVfVVJMIH0gZnJvbSBcIkAvbGliL3NpdGVJbmZvXCI7XG5cbmNvbnN0IHNjaG9vbEluZm86IEFycmF5PHtcbiAgaWNvbjogdHlwZW9mIEJ1aWxkaW5nMjtcbiAgbGFiZWw6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZyB8IHsgdGV4dDogc3RyaW5nOyBocmVmOiBzdHJpbmcgfVtdO1xuICBocmVmPzogc3RyaW5nO1xuICBleHRlcm5hbD86IGJvb2xlYW47XG59PiA9IFtcbiAgeyBpY29uOiBCdWlsZGluZzIsIGxhYmVsOiBcIlNjaG9vbCBOYW1lXCIsIHZhbHVlOiBcIlNKUiBQdWJsaWMgU2Nob29sLCBIQlIgTGF5b3V0XCIgfSxcbiAgeyBpY29uOiBCYWRnZUNoZWNrLCBsYWJlbDogXCJBZmZpbGlhdGlvbiBEZXRhaWxzXCIsIHZhbHVlOiBBRkZJTElBVElPTiB9LFxuICB7XG4gICAgaWNvbjogTWFwUGluLFxuICAgIGxhYmVsOiBcIlNjaG9vbCBBZGRyZXNzXCIsXG4gICAgdmFsdWU6IFwiM3JkIEJsb2NrLCBIQlIgTGF5b3V0LCBCZW5nYWx1cnUsIEthcm5hdGFrYSDigJMgNTYwMDQzXCIsXG4gIH0sXG4gIHtcbiAgICBpY29uOiBQaG9uZSxcbiAgICBsYWJlbDogXCJDb250YWN0IEluZm9ybWF0aW9uXCIsXG4gICAgdmFsdWU6IGBMYW5kbGluZTogJHtTQ0hPT0xfTEFORExJTkVTLm1hcCgobCkgPT4gbC50ZXh0KS5qb2luKFwiIHwgXCIpfWAsXG4gIH0sXG4gIHtcbiAgICBpY29uOiBNYWlsLFxuICAgIGxhYmVsOiBcIkVtYWlsXCIsXG4gICAgdmFsdWU6IFNDSE9PTF9FTUFJTFMubWFwKChlbWFpbCkgPT4gKHsgdGV4dDogZW1haWwsIGhyZWY6IGBtYWlsdG86JHtlbWFpbH1gIH0pKSxcbiAgfSxcbiAge1xuICAgIGljb246IEdsb2JlLFxuICAgIGxhYmVsOiBcIldlYnNpdGVcIixcbiAgICB2YWx1ZTogV0VCU0lURV9VUkwucmVwbGFjZSgvXmh0dHBzPzpcXC9cXC8vLCBcIlwiKSxcbiAgICBocmVmOiBXRUJTSVRFX1VSTCxcbiAgICBleHRlcm5hbDogdHJ1ZSxcbiAgfSxcbl07XG5cbmNvbnN0IGluc3RpdHV0aW9uYWxJbmZvID0gW1xuICB7IGljb246IFVzZXJzLCB0aXRsZTogXCJNYW5hZ2VtZW50IERldGFpbHNcIiwgZGVzYzogXCJHb3Zlcm5lZCBieSB0aGUgU0pSIEVkdWNhdGlvbiBTb2NpZXR5LCBjb21taXR0ZWQgdG8gdmFsdWUtYmFzZWQgZWR1Y2F0aW9uIGFuZCBhY2FkZW1pYyBleGNlbGxlbmNlIHNpbmNlIGluY2VwdGlvbi5cIiB9LFxuICB7IGljb246IENsaXBib2FyZExpc3QsIHRpdGxlOiBcIlNjaG9vbCBDb21taXR0ZWVcIiwgZGVzYzogXCJBbiBhY3RpdmUgU2Nob29sIE1hbmFnZW1lbnQgQ29tbWl0dGVlIGNvbXByaXNpbmcgZWR1Y2F0b3JzLCBwYXJlbnRzLCBhbmQgY29tbXVuaXR5IG1lbWJlcnMgZW5zdXJpbmcgdHJhbnNwYXJlbnQgZ292ZXJuYW5jZS5cIiB9LFxuICB7IGljb246IEdyYWR1YXRpb25DYXAsIHRpdGxlOiBcIkFjYWRlbWljIEluZm9ybWF0aW9uXCIsIGRlc2M6IFwiQ29tcHJlaGVuc2l2ZSBDQlNFIGN1cnJpY3VsdW0gZGVsaXZlcmVkIGFjcm9zcyBQcmltYXJ5LCBTZWNvbmRhcnksIGFuZCBIaWdoZXIgU2Vjb25kYXJ5IGxldmVscyB3aXRoIHF1YWxpZmllZCBmYWN1bHR5LlwiIH0sXG4gIHsgaWNvbjogQnVpbGRpbmcsIHRpdGxlOiBcIkluZnJhc3RydWN0dXJlIEluZm9ybWF0aW9uXCIsIGRlc2M6IFwiTW9kZXJuIGNhbXB1cyB3aXRoIHNtYXJ0IGNsYXNzcm9vbXMsIGxhYm9yYXRvcmllcywgbGlicmFyeSwgc3BvcnRzIGZhY2lsaXRpZXMsIGF1ZGl0b3JpdW0sIGFuZCBzYWZlIHRyYW5zcG9ydCBzZXJ2aWNlcy5cIiB9LFxuXTtcblxuY29uc3QgZG9jdW1lbnRzID0gW1xuICB7IG5hbWU6IFwiQWZmaWxpYXRpb24gQ2VydGlmaWNhdGVcIiwgZmlsZTogXCIvQWZmaWxpYXRpb24tQ2VydGlmaWNhdGUucGRmXCIgfSxcbiAgeyBuYW1lOiBcIlNvY2lldHkgUmVnaXN0cmF0aW9uIENvcHlcIiwgZmlsZTogXCIvU29jaWV0eS1SZWdpc3RyYXRpb24tQ29weS5wZGZcIiB9LFxuICB7IG5hbWU6IFwiTm8gT2JqZWN0aW9uIENlcnRpZmljYXRlXCIsIGZpbGU6IFwiL05PQy5wZGZcIiB9LFxuICB7IG5hbWU6IFwiUlRFIFJlY29nbml0aW9uIENlcnRpZmljYXRlXCIsIGZpbGU6IFwiL1JURS5wZGZcIiB9LFxuICB7IG5hbWU6IFwiQnVpbGRpbmcgU2FmZXR5IENlcnRpZmljYXRlXCIsIGZpbGU6IFwiL2JzYy5wZGZcIiB9LFxuICB7IG5hbWU6IFwiRmlyZSBTYWZldHkgQ2VydGlmaWNhdGVcIiwgZmlsZTogXCIvRlNDLnBkZlwiIH0sXG4gIHsgbmFtZTogXCJTZWxmIENlcnRpZmljYXRpb25cIiwgZmlsZTogXCIvc2MucGRmXCIgfSxcbiAgeyBuYW1lOiBcIldhdGVyIFNhbml0YXRpb24gQ2VydGlmaWNhdGVcIiwgZmlsZTogXCIvd3NjLnBkZlwiIH0sXG4gIHsgbmFtZTogXCJXYXRlciBUZXN0aW5nIFJlcG9ydFwiLCBmaWxlOiBcIi93dHIucGRmXCIgfSxcbiAgeyBuYW1lOiBcIkFubnVhbCBDYWxlbmRhciAyMDI2LTI3XCIsIGZpbGU6IFwiL0FubnVhbC1DYWxlbmRhci0yMDI2LTI3LnBkZlwiIH0sXG4gIHsgbmFtZTogXCJDbGFzcyBYIENCU0UgUmVzdWx0cyBMYXN0IDMgWWVhcnNcIiwgZmlsZTogXCIvQ2xhc3MtMTAtQ0JTRS1yZXN1bHQtbGFzdC0zLXllYXJzLnBkZlwiIH0sXG4gIHsgbmFtZTogXCJGZWUgU3RydWN0dXJlIEFZIDIwMjYtMjdcIiwgZmlsZTogXCIvRmVlLVN0cnVjdHVyZS0yMDI2LTI3LnBkZlwiIH0sXG4gIHsgbmFtZTogXCJQYXJlbnQgVGVhY2hlcnMgQ29tbWl0dGVlIDIwMjYtMjdcIiwgZmlsZTogXCIvUGFyZW50cy10ZWFjaGVycy1Db21pdHRlZS5wZGZcIiB9LFxuXTtcblxuY29uc3QgTWFuZGF0b3J5RGlzY2xvc3VyZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPFBhZ2VIZXJvXG4gICAgICAgIHRpdGxlPVwiTWFuZGF0b3J5IERpc2Nsb3N1cmVcIlxuICAgICAgICBicmVhZGNydW1icz17W3sgbGFiZWw6IFwiTWFuZGF0b3J5IERpc2Nsb3N1cmVcIiB9XX1cbiAgICAgIC8+XG5cbiAgICAgIHsvKiBJbnRyb2R1Y3Rpb24gKi99XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNiBiZy1iYWNrZ3JvdW5kXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBtYXgtdy00eGwgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgZm9udC1ib2xkIHRleHQtYmxhY2sgbWItNFwiPlRyYW5zcGFyZW5jeSAmIENvbXBsaWFuY2U8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBoLTEgdy0yMCBiZy1pbmRpYW4tZ3JlZW4gcm91bmRlZC1mdWxsIG1iLTZcIiAvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1mb3JlZ3JvdW5kLzgwIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgSW4gYWNjb3JkYW5jZSB3aXRoIHJlZ3VsYXRvcnkgbm9ybXMgYW5kIG91ciBjb21taXRtZW50IHRvIGluc3RpdHV0aW9uYWwgZ292ZXJuYW5jZSwgd2UgcHVibGlzaCBhbGxcbiAgICAgICAgICAgIG1hbmRhdG9yeSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc2Nob29sLCBpdHMgbWFuYWdlbWVudCwgaW5mcmFzdHJ1Y3R1cmUsIGFuZCBhY2FkZW1pYyBmcmFtZXdvcmsgZm9yXG4gICAgICAgICAgICBwdWJsaWMgYWNjZXNzLiBUaGlzIHBhZ2UgcmVmbGVjdHMgb3VyIGRlZGljYXRpb24gdG8gb3Blbm5lc3MsIGFjY291bnRhYmlsaXR5LCBhbmQgdHJ1c3QuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgey8qIFNjaG9vbCBJbmZvcm1hdGlvbiAqL31cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTE2IGJnLW11dGVkLzMwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBtYXgtdy02eGxcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgZm9udC1ib2xkIHRleHQtYmxhY2sgdGV4dC1jZW50ZXIgbWItM1wiPlNjaG9vbCBJbmZvcm1hdGlvbjwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIGgtMSB3LTIwIGJnLWluZGlhbi1ncmVlbiByb3VuZGVkLWZ1bGwgbWItMTJcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNlwiPlxuICAgICAgICAgICAge3NjaG9vbEluZm8ubWFwKChpdCwgaSkgPT4gKFxuICAgICAgICAgICAgICA8Q2FyZCBrZXk9e2l9IGNsYXNzTmFtZT1cImJvcmRlci1pbmRpYW4tZ3JlZW4vMjAgaG92ZXI6c2hhZG93LWxnIHRyYW5zaXRpb24tYWxsXCI+XG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtNlwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMiBoLTEyIHJvdW5kZWQteGwgYmctaW5kaWFuLWdyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aXQuaWNvbiBjbGFzc05hbWU9XCJoLTYgdy02IHRleHQtd2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4tdy0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtaW5kaWFuLWdyZWVuIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIG1iLTFcIj57aXQubGFiZWx9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIHtBcnJheS5pc0FycmF5KGl0LnZhbHVlKSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0LnZhbHVlLm1hcCgodiwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17di5ocmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZm9yZWdyb3VuZC84MCBob3Zlcjp0ZXh0LWluZGlhbi1ncmVlbiB1bmRlcmxpbmUtb2Zmc2V0LTIgaG92ZXI6dW5kZXJsaW5lIGJyZWFrLXdvcmRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2LnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IGl0LmhyZWYgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtpdC5ocmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uKGl0LmV4dGVybmFsID8geyB0YXJnZXQ6IFwiX2JsYW5rXCIsIHJlbDogXCJub29wZW5lciBub3JlZmVycmVyXCIgfSA6IHt9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1mb3JlZ3JvdW5kLzgwIGhvdmVyOnRleHQtaW5kaWFuLWdyZWVuIHVuZGVybGluZS1vZmZzZXQtMiBob3Zlcjp1bmRlcmxpbmUgYnJlYWstd29yZHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXQudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZm9yZWdyb3VuZC84MCBicmVhay13b3Jkc1wiPntpdC52YWx1ZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIHsvKiBJbnN0aXR1dGlvbmFsIEluZm9ybWF0aW9uICovfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTYgYmctYmFja2dyb3VuZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgbWF4LXctNnhsXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LWJsYWNrIHRleHQtY2VudGVyIG1iLTNcIj5JbnN0aXR1dGlvbmFsIEluZm9ybWF0aW9uPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gaC0xIHctMjAgYmctaW5kaWFuLWdyZWVuIHJvdW5kZWQtZnVsbCBtYi0xMlwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGdhcC02XCI+XG4gICAgICAgICAgICB7aW5zdGl0dXRpb25hbEluZm8ubWFwKChpdCwgaSkgPT4gKFxuICAgICAgICAgICAgICA8Q2FyZCBrZXk9e2l9IGNsYXNzTmFtZT1cImJvcmRlci1sLTQgYm9yZGVyLWwtaW5kaWFuLWdyZWVuIGhvdmVyOnNoYWRvdy1sZyB0cmFuc2l0aW9uLWFsbFwiPlxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLTYgZmxleCBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgcm91bmRlZC14bCBiZy1pbmRpYW4tZ3JlZW4vMTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC1zaHJpbmstMFwiPlxuICAgICAgICAgICAgICAgICAgICA8aXQuaWNvbiBjbGFzc05hbWU9XCJoLTYgdy02IHRleHQtaW5kaWFuLWdyZWVuXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtYmxhY2sgbWItMlwiPntpdC50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWZvcmVncm91bmQvNzUgbGVhZGluZy1yZWxheGVkXCI+e2l0LmRlc2N9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7LyogTWFuZGF0b3J5IERvY3VtZW50cyAqL31cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTE2IGJnLW11dGVkLzMwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBtYXgtdy01eGxcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgZm9udC1ib2xkIHRleHQtYmxhY2sgdGV4dC1jZW50ZXIgbWItM1wiPk1hbmRhdG9yeSBEb2N1bWVudHM8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBoLTEgdy0yMCBiZy1pbmRpYW4tZ3JlZW4gcm91bmRlZC1mdWxsIG1iLTEyXCIgLz5cbiAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gYm9yZGVyLWluZGlhbi1ncmVlbi8yMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy14LWF1dG9cIj5cbiAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwiYmctaW5kaWFuLWdyZWVuIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTYgcHktNCBmb250LXNlbWlib2xkIHctMjBcIj5TbCBObzwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC02IHB5LTQgZm9udC1zZW1pYm9sZFwiPkRvY3VtZW50IE5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNiBweS00IGZvbnQtc2VtaWJvbGQgdGV4dC1yaWdodFwiPlZpZXc8L3RoPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgIHtkb2N1bWVudHMubWFwKChkb2MsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0gY2xhc3NOYW1lPVwiYm9yZGVyLXQgYm9yZGVyLWluZGlhbi1ncmVlbi8xMCBob3ZlcjpiZy1pbmRpYW4tZ3JlZW4vNSB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgZm9udC1tZWRpdW0gdGV4dC1ibGFja1wiPntpICsgMX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgdGV4dC1mb3JlZ3JvdW5kLzg1XCI+e2RvYy5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFzQ2hpbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctaW5kaWFuLWdyZWVuIGhvdmVyOmJnLWluZGlhbi1ncmVlbi85MCB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17ZG9jLmZpbGV9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RXllIGNsYXNzTmFtZT1cImgtNCB3LTQgbXItMlwiIC8+IFZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7LyogQ29tbWl0bWVudCAqL31cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTE2IGJnLWJhY2tncm91bmRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IG1heC13LTR4bFwiPlxuICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImJvcmRlci1pbmRpYW4tZ3JlZW4vMjAgYmctaW5kaWFuLWdyZWVuLzVcIj5cbiAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLTEwIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xNiBoLTE2IHJvdW5kZWQtMnhsIGJnLWluZGlhbi1ncmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBteC1hdXRvIG1iLTZcIj5cbiAgICAgICAgICAgICAgICA8U2hpZWxkQ2hlY2sgY2xhc3NOYW1lPVwiaC04IHctOCB0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1ibGFjayBtYi00XCI+Q29tbWl0bWVudCB0byBUcmFuc3BhcmVuY3k8L2gyPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZm9yZWdyb3VuZC84MCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICBXZSB1cGhvbGQgdGhlIGhpZ2hlc3Qgc3RhbmRhcmRzIG9mIGNvbXBsaWFuY2UgYW5kIGFjY291bnRhYmlsaXR5LiBBbGwgaW5zdGl0dXRpb25hbCBpbmZvcm1hdGlvbixcbiAgICAgICAgICAgICAgICBhY2FkZW1pYyBkYXRhLCBhbmQgZ292ZXJuYW5jZSBwcmFjdGljZXMgYXJlIGRvY3VtZW50ZWQgYW5kIG1hZGUgYWNjZXNzaWJsZSB0byBzdGFrZWhvbGRlcnMuIE91clxuICAgICAgICAgICAgICAgIGNvbnRpbnVlZCBjb21taXRtZW50IGlzIHRvIG9wZXJhdGUgd2l0aCBpbnRlZ3JpdHksIGZhaXJuZXNzLCBhbmQgb3Blbm5lc3MgaW4gZXZlcnkgYXNwZWN0IG9mXG4gICAgICAgICAgICAgICAgc2Nob29sIGFkbWluaXN0cmF0aW9uLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYW5kYXRvcnlEaXNjbG9zdXJlO1xuIl0sImZpbGUiOiIvaG9tZS9zanJzaDkxNi9wdWJsaWNfaHRtbC9zcmMvcGFnZXMvTWFuZGF0b3J5RGlzY2xvc3VyZS50c3gifQ==