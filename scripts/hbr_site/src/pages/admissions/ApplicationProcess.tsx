import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/admissions/ApplicationProcess.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import Layout from "/src/components/Layout.tsx";
import PageHero from "/src/components/PageHero.tsx";
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=5efa796b";
import { ClipboardList, FileText, ShieldCheck, UserCheck, CheckCircle2, CreditCard, GraduationCap, FileSignature, IdCard, Camera, BookOpen, FileBadge, Award, Users, Sparkles, Building2, Heart } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
const steps = [
    {
        icon: ClipboardList,
        title: "Enquiry",
        desc: "Reach out to our admissions office or fill the online enquiry form to begin."
    },
    {
        icon: FileSignature,
        title: "Application Submission",
        desc: "Submit the duly filled application form along with the registration fee."
    },
    {
        icon: ShieldCheck,
        title: "Document Verification",
        desc: "Our team verifies academic records and supporting documents."
    },
    {
        icon: UserCheck,
        title: "Student Interaction / Assessment",
        desc: "A friendly interaction or age-appropriate assessment with the child and parents."
    },
    {
        icon: CheckCircle2,
        title: "Admission Confirmation",
        desc: "On successful assessment, an admission offer is extended to the family."
    },
    {
        icon: CreditCard,
        title: "Fee Payment",
        desc: "Complete the prescribed fee payment within the stipulated time."
    },
    {
        icon: GraduationCap,
        title: "Academic Orientation",
        desc: "Attend the orientation programme and step into the SJRPS-HBR journey."
    }
];
const documents = [
    {
        icon: FileBadge,
        title: "Birth Certificate"
    },
    {
        icon: IdCard,
        title: "Aadhaar Copy"
    },
    {
        icon: Camera,
        title: "Passport Size Photographs"
    },
    {
        icon: BookOpen,
        title: "Previous Academic Records"
    },
    {
        icon: FileText,
        title: "Transfer Certificate (if applicable)"
    }
];
const whyChoose = [
    {
        icon: GraduationCap,
        title: "Academic Excellence",
        desc: "CBSE-aligned rigour with strong fundamentals and consistent results."
    },
    {
        icon: Sparkles,
        title: "Holistic Development",
        desc: "Academics, sports, arts, and life skills woven into every day."
    },
    {
        icon: Users,
        title: "Experienced Faculty",
        desc: "Mentors who know every child by name and guide with care."
    },
    {
        icon: Heart,
        title: "Value-Based Education",
        desc: "Character, integrity, and empathy at the core of learning."
    },
    {
        icon: Building2,
        title: "Modern Learning Environment",
        desc: "Smart classrooms, labs, library, and a safe, vibrant campus."
    }
];
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 24
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6
        }
    }
};
const ApplicationProcess = ()=>{
    return /*#__PURE__*/ _jsxDEV(Layout, {
        "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:58:4",
        "data-lov-name": "Layout",
        "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
        "data-component-line": "58",
        "data-component-file": "ApplicationProcess.tsx",
        "data-component-name": "Layout",
        "data-component-content": "%7B%7D",
        children: [
            /*#__PURE__*/ _jsxDEV(PageHero, {
                "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:59:6",
                "data-lov-name": "PageHero",
                "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                "data-component-line": "59",
                "data-component-file": "ApplicationProcess.tsx",
                "data-component-name": "PageHero",
                "data-component-content": "%7B%7D",
                title: "Admissions Process",
                breadcrumbs: [
                    {
                        label: "Admissions",
                        path: "/admissions"
                    },
                    {
                        label: "Admissions Process"
                    }
                ]
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:68:6",
                "data-lov-name": "section",
                "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                "data-component-line": "68",
                "data-component-file": "ApplicationProcess.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20lg%3Apy-20%22%7D",
                className: "py-16 lg:py-20",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:69:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                    "data-component-line": "69",
                    "data-component-file": "ApplicationProcess.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20max-w-4xl%20text-center%22%7D",
                    className: "container mx-auto px-4 max-w-4xl text-center",
                    children: [
                        /*#__PURE__*/ _jsxDEV("p", {
                            "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:70:10",
                            "data-lov-name": "p",
                            "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                            "data-component-line": "70",
                            "data-component-file": "ApplicationProcess.tsx",
                            "data-component-name": "p",
                            "data-component-content": "%7B%22text%22%3A%22Begin%20Your%20Journey%22%2C%22className%22%3A%22text-xs%20font-semibold%20uppercase%20tracking-%5B0.25em%5D%20text-indian-green%20mb-3%22%7D",
                            className: "text-xs font-semibold uppercase tracking-[0.25em] text-indian-green mb-3",
                            children: "Begin Your Journey"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("h2", {
                            "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:73:10",
                            "data-lov-name": "h2",
                            "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                            "data-component-line": "73",
                            "data-component-file": "ApplicationProcess.tsx",
                            "data-component-name": "h2",
                            "data-component-content": "%7B%22text%22%3A%22A%20Simple%2C%20Transparent%20Admission%20Process%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20lg%3Atext-5xl%20font-bold%20text-logo-navy%20mb-5%22%7D",
                            className: "text-3xl md:text-4xl lg:text-5xl font-bold text-logo-navy mb-5",
                            style: {
                                fontFamily: "Poppins, sans-serif"
                            },
                            children: "A Simple, Transparent Admission Process"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("p", {
                            "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:79:10",
                            "data-lov-name": "p",
                            "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                            "data-component-line": "79",
                            "data-component-file": "ApplicationProcess.tsx",
                            "data-component-name": "p",
                            "data-component-content": "%7B%22text%22%3A%22At%20SJRPS-HBR%2C%20we%20welcome%20families%20into%20a%20nurturing%20community%20where%20every%20child%20is%20encouraged%5Cn%20%20%20%20%20%20%20%20%20%20%20%20to%20grow%20with%20confidence%2C%20curiosity%2C%20and%20character.%20Our%20admissions%20process%20is%20designed%20to%20be%5Cn%20%20%20%20%20%20%20%20%20%20%20%20clear%2C%20supportive%2C%20and%20centred%20on%20the%20well-being%20of%20your%20child.%22%2C%22className%22%3A%22text-lg%20text-muted-foreground%20leading-relaxed%22%7D",
                            className: "text-lg text-muted-foreground leading-relaxed",
                            children: "At SJRPS-HBR, we welcome families into a nurturing community where every child is encouraged to grow with confidence, curiosity, and character. Our admissions process is designed to be clear, supportive, and centred on the well-being of your child."
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:88:6",
                "data-lov-name": "section",
                "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                "data-component-line": "88",
                "data-component-file": "ApplicationProcess.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20bg-muted%2F40%20border-y%22%7D",
                className: "py-16 bg-muted/40 border-y",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:89:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                    "data-component-line": "89",
                    "data-component-file": "ApplicationProcess.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20max-w-4xl%22%7D",
                    className: "container mx-auto px-4 max-w-4xl",
                    children: [
                        /*#__PURE__*/ _jsxDEV("h2", {
                            "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:90:10",
                            "data-lov-name": "h2",
                            "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                            "data-component-line": "90",
                            "data-component-file": "ApplicationProcess.tsx",
                            "data-component-name": "h2",
                            "data-component-content": "%7B%22text%22%3A%22Admission%20Journey%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20text-logo-navy%20text-center%20mb-12%22%7D",
                            className: "text-3xl md:text-4xl font-bold text-logo-navy text-center mb-12",
                            style: {
                                fontFamily: "Poppins, sans-serif"
                            },
                            children: "Admission Journey"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:96:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                            "data-component-line": "96",
                            "data-component-file": "ApplicationProcess.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22relative%22%7D",
                            className: "relative",
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:97:12",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                                    "data-component-line": "97",
                                    "data-component-file": "ApplicationProcess.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22absolute%20left-4%20md%3Aleft-1%2F2%20top-0%20bottom-0%20w-0.5%20bg-indian-green%2F20%20md%3A-translate-x-1%2F2%22%7D",
                                    className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-indian-green/20 md:-translate-x-1/2"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:98:12",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                                    "data-component-line": "98",
                                    "data-component-file": "ApplicationProcess.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22space-y-10%22%7D",
                                    className: "space-y-10",
                                    children: steps.map((s, i)=>/*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:100:16",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                                            "data-component-line": "100",
                                            "data-component-file": "ApplicationProcess.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%7D",
                                            className: `relative md:grid md:grid-cols-2 md:gap-8 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`,
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:106:18",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                                                    "data-component-line": "106",
                                                    "data-component-file": "ApplicationProcess.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%7D",
                                                    className: `pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-10" : "md:pl-10"}`,
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:111:20",
                                                            "data-lov-name": "div",
                                                            "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                                                            "data-component-line": "111",
                                                            "data-component-file": "ApplicationProcess.tsx",
                                                            "data-component-name": "div",
                                                            "data-component-content": "%7B%22text%22%3A%22Step%22%2C%22className%22%3A%22text-saffron-orange%20font-bold%20text-sm%22%7D",
                                                            className: "text-saffron-orange font-bold text-sm",
                                                            children: [
                                                                "Step ",
                                                                i + 1
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                                                            lineNumber: 111,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("h3", {
                                                            "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:112:20",
                                                            "data-lov-name": "h3",
                                                            "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                                                            "data-component-line": "112",
                                                            "data-component-file": "ApplicationProcess.tsx",
                                                            "data-component-name": "h3",
                                                            "data-component-content": "%7B%22className%22%3A%22text-xl%20font-bold%20text-logo-navy%20mt-1%20flex%20items-center%20gap-2%20md%3Ajustify-end%20md%3A%5B%26%3Esvg%5D%3Aorder-2%22%7D",
                                                            className: "text-xl font-bold text-logo-navy mt-1 flex items-center gap-2 md:justify-end md:[&>svg]:order-2",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV(s.icon, {
                                                                    "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:113:22",
                                                                    "data-lov-name": "s.icon",
                                                                    "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                                                                    "data-component-line": "113",
                                                                    "data-component-file": "ApplicationProcess.tsx",
                                                                    "data-component-name": "s.icon",
                                                                    "data-component-content": "%7B%22className%22%3A%22h-5%20w-5%20text-indian-green%22%7D",
                                                                    className: "h-5 w-5 text-indian-green"
                                                                }, void 0, false, {
                                                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                                                                    lineNumber: 113,
                                                                    columnNumber: 23
                                                                }, this),
                                                                s.title
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                                                            lineNumber: 112,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("p", {
                                                            "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:116:20",
                                                            "data-lov-name": "p",
                                                            "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                                                            "data-component-line": "116",
                                                            "data-component-file": "ApplicationProcess.tsx",
                                                            "data-component-name": "p",
                                                            "data-component-content": "%7B%22className%22%3A%22text-muted-foreground%20mt-1%22%7D",
                                                            className: "text-muted-foreground mt-1",
                                                            children: s.desc
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                                                            lineNumber: 116,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:118:18",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                                                    "data-component-line": "118",
                                                    "data-component-file": "ApplicationProcess.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22hidden%20md%3Ablock%22%7D",
                                                    className: "hidden md:block"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("span", {
                                                    "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:119:18",
                                                    "data-lov-name": "span",
                                                    "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                                                    "data-component-line": "119",
                                                    "data-component-file": "ApplicationProcess.tsx",
                                                    "data-component-name": "span",
                                                    "data-component-content": "%7B%22className%22%3A%22absolute%20left-4%20md%3Aleft-1%2F2%20top-1.5%20w-3%20h-3%20rounded-full%20bg-indian-green%20ring-4%20ring-indian-green%2F20%20md%3A-translate-x-1%2F2%22%7D",
                                                    className: "absolute left-4 md:left-1/2 top-1.5 w-3 h-3 rounded-full bg-indian-green ring-4 ring-indian-green/20 md:-translate-x-1/2"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, s.title, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                                            lineNumber: 100,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:128:6",
                "data-lov-name": "section",
                "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                "data-component-line": "128",
                "data-component-file": "ApplicationProcess.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20lg%3Apy-20%20bg-%5Bhsl(38_70%25_96%25)%5D%22%7D",
                className: "py-16 lg:py-20 bg-[hsl(38_70%_96%)]",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:129:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                    "data-component-line": "129",
                    "data-component-file": "ApplicationProcess.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:130:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                            "data-component-line": "130",
                            "data-component-file": "ApplicationProcess.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22max-w-3xl%20mx-auto%20text-center%20mb-12%22%7D",
                            className: "max-w-3xl mx-auto text-center mb-12",
                            children: [
                                /*#__PURE__*/ _jsxDEV("p", {
                                    "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:131:12",
                                    "data-lov-name": "p",
                                    "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                                    "data-component-line": "131",
                                    "data-component-file": "ApplicationProcess.tsx",
                                    "data-component-name": "p",
                                    "data-component-content": "%7B%22text%22%3A%22Checklist%22%2C%22className%22%3A%22text-xs%20font-semibold%20uppercase%20tracking-%5B0.25em%5D%20text-indian-green%20mb-3%22%7D",
                                    className: "text-xs font-semibold uppercase tracking-[0.25em] text-indian-green mb-3",
                                    children: "Checklist"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("h2", {
                                    "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:134:12",
                                    "data-lov-name": "h2",
                                    "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                                    "data-component-line": "134",
                                    "data-component-file": "ApplicationProcess.tsx",
                                    "data-component-name": "h2",
                                    "data-component-content": "%7B%22text%22%3A%22Required%20Documents%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20lg%3Atext-5xl%20font-bold%20text-logo-navy%20mb-4%22%7D",
                                    className: "text-3xl md:text-4xl lg:text-5xl font-bold text-logo-navy mb-4",
                                    style: {
                                        fontFamily: "Poppins, sans-serif"
                                    },
                                    children: "Required Documents"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:140:12",
                                    "data-lov-name": "p",
                                    "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                                    "data-component-line": "140",
                                    "data-component-file": "ApplicationProcess.tsx",
                                    "data-component-name": "p",
                                    "data-component-content": "%7B%22text%22%3A%22Please%20keep%20clear%20copies%20of%20the%20following%20documents%20ready%20at%20the%20time%20of%20application.%22%2C%22className%22%3A%22text-muted-foreground%20text-lg%20leading-relaxed%22%7D",
                                    className: "text-muted-foreground text-lg leading-relaxed",
                                    children: "Please keep clear copies of the following documents ready at the time of application."
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:145:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                            "data-component-line": "145",
                            "data-component-file": "ApplicationProcess.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22grid%20sm%3Agrid-cols-2%20lg%3Agrid-cols-3%20gap-6%20max-w-5xl%20mx-auto%22%7D",
                            className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto",
                            children: documents.map((d, i)=>/*#__PURE__*/ _jsxDEV(motion.div, {
                                    "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:147:14",
                                    "data-lov-name": "motion.div",
                                    "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                                    "data-component-line": "147",
                                    "data-component-file": "ApplicationProcess.tsx",
                                    "data-component-name": "motion.div",
                                    "data-component-content": "%7B%7D",
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        duration: 0.5,
                                        delay: i % 3 * 0.08
                                    },
                                    children: /*#__PURE__*/ _jsxDEV(Card, {
                                        "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:154:16",
                                        "data-lov-name": "Card",
                                        "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                                        "data-component-line": "154",
                                        "data-component-file": "ApplicationProcess.tsx",
                                        "data-component-name": "Card",
                                        "data-component-content": "%7B%22className%22%3A%22rounded-2xl%20border-none%20shadow-sm%20hover%3Ashadow-xl%20transition-all%20hover%3A-translate-y-1%20bg-white%20h-full%22%7D",
                                        className: "rounded-2xl border-none shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 bg-white h-full",
                                        children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                            "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:155:18",
                                            "data-lov-name": "CardContent",
                                            "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                                            "data-component-line": "155",
                                            "data-component-file": "ApplicationProcess.tsx",
                                            "data-component-name": "CardContent",
                                            "data-component-content": "%7B%22className%22%3A%22p-6%20flex%20items-center%20gap-4%22%7D",
                                            className: "p-6 flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:156:20",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                                                    "data-component-line": "156",
                                                    "data-component-file": "ApplicationProcess.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22w-12%20h-12%20rounded-xl%20bg-indian-green%20flex%20items-center%20justify-center%20shrink-0%20shadow-md%22%7D",
                                                    className: "w-12 h-12 rounded-xl bg-indian-green flex items-center justify-center shrink-0 shadow-md",
                                                    children: /*#__PURE__*/ _jsxDEV(d.icon, {
                                                        "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:157:22",
                                                        "data-lov-name": "d.icon",
                                                        "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                                                        "data-component-line": "157",
                                                        "data-component-file": "ApplicationProcess.tsx",
                                                        "data-component-name": "d.icon",
                                                        "data-component-content": "%7B%22className%22%3A%22h-6%20w-6%20text-white%22%7D",
                                                        className: "h-6 w-6 text-white"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("h3", {
                                                    "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:159:20",
                                                    "data-lov-name": "h3",
                                                    "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                                                    "data-component-line": "159",
                                                    "data-component-file": "ApplicationProcess.tsx",
                                                    "data-component-name": "h3",
                                                    "data-component-content": "%7B%22className%22%3A%22text-base%20font-semibold%20text-logo-navy%22%7D",
                                                    className: "text-base font-semibold text-logo-navy",
                                                    children: d.title
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                                            lineNumber: 155,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                                        lineNumber: 154,
                                        columnNumber: 17
                                    }, this)
                                }, d.title, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:169:6",
                "data-lov-name": "section",
                "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                "data-component-line": "169",
                "data-component-file": "ApplicationProcess.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20lg%3Apy-20%20bg-indian-green%2F5%22%7D",
                className: "py-16 lg:py-20 bg-indian-green/5",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:170:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                    "data-component-line": "170",
                    "data-component-file": "ApplicationProcess.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:171:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                            "data-component-line": "171",
                            "data-component-file": "ApplicationProcess.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22max-w-3xl%20mx-auto%20text-center%20mb-12%22%7D",
                            className: "max-w-3xl mx-auto text-center mb-12",
                            children: [
                                /*#__PURE__*/ _jsxDEV("p", {
                                    "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:172:12",
                                    "data-lov-name": "p",
                                    "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                                    "data-component-line": "172",
                                    "data-component-file": "ApplicationProcess.tsx",
                                    "data-component-name": "p",
                                    "data-component-content": "%7B%22text%22%3A%22Why%20SJRPS-HBR%22%2C%22className%22%3A%22text-xs%20font-semibold%20uppercase%20tracking-%5B0.25em%5D%20text-indian-green%20mb-3%22%7D",
                                    className: "text-xs font-semibold uppercase tracking-[0.25em] text-indian-green mb-3",
                                    children: "Why SJRPS-HBR"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("h2", {
                                    "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:175:12",
                                    "data-lov-name": "h2",
                                    "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                                    "data-component-line": "175",
                                    "data-component-file": "ApplicationProcess.tsx",
                                    "data-component-name": "h2",
                                    "data-component-content": "%7B%22text%22%3A%22Why%20Choose%20SJRPS-HBR%3F%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20lg%3Atext-5xl%20font-bold%20text-logo-navy%20mb-4%22%7D",
                                    className: "text-3xl md:text-4xl lg:text-5xl font-bold text-logo-navy mb-4",
                                    style: {
                                        fontFamily: "Poppins, sans-serif"
                                    },
                                    children: "Why Choose SJRPS-HBR?"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                                    lineNumber: 175,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:183:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                            "data-component-line": "183",
                            "data-component-file": "ApplicationProcess.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22grid%20sm%3Agrid-cols-2%20lg%3Agrid-cols-3%20gap-6%22%7D",
                            className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: whyChoose.map((w, i)=>/*#__PURE__*/ _jsxDEV(motion.div, {
                                    "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:185:14",
                                    "data-lov-name": "motion.div",
                                    "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                                    "data-component-line": "185",
                                    "data-component-file": "ApplicationProcess.tsx",
                                    "data-component-name": "motion.div",
                                    "data-component-content": "%7B%22className%22%3A%22bg-white%20rounded-2xl%20p-6%20shadow-sm%20hover%3Ashadow-lg%20transition-all%20border%20border-indian-green%2F10%22%7D",
                                    initial: "hidden",
                                    whileInView: "visible",
                                    viewport: {
                                        once: true
                                    },
                                    variants: fadeUp,
                                    transition: {
                                        delay: i % 3 * 0.08
                                    },
                                    className: "bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-indian-green/10",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:194:16",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                                            "data-component-line": "194",
                                            "data-component-file": "ApplicationProcess.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22w-12%20h-12%20rounded-xl%20bg-indian-green%20flex%20items-center%20justify-center%20mb-4%20shadow%22%7D",
                                            className: "w-12 h-12 rounded-xl bg-indian-green flex items-center justify-center mb-4 shadow",
                                            children: /*#__PURE__*/ _jsxDEV(w.icon, {
                                                "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:195:18",
                                                "data-lov-name": "w.icon",
                                                "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                                                "data-component-line": "195",
                                                "data-component-file": "ApplicationProcess.tsx",
                                                "data-component-name": "w.icon",
                                                "data-component-content": "%7B%22className%22%3A%22h-6%20w-6%20text-white%22%7D",
                                                className: "h-6 w-6 text-white"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                                                lineNumber: 195,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                                            lineNumber: 194,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("h3", {
                                            "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:197:16",
                                            "data-lov-name": "h3",
                                            "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                                            "data-component-line": "197",
                                            "data-component-file": "ApplicationProcess.tsx",
                                            "data-component-name": "h3",
                                            "data-component-content": "%7B%22className%22%3A%22text-lg%20font-bold%20text-logo-navy%20mb-2%22%7D",
                                            className: "text-lg font-bold text-logo-navy mb-2",
                                            children: w.title
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                                            lineNumber: 197,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("p", {
                                            "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:198:16",
                                            "data-lov-name": "p",
                                            "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                                            "data-component-line": "198",
                                            "data-component-file": "ApplicationProcess.tsx",
                                            "data-component-name": "p",
                                            "data-component-content": "%7B%22className%22%3A%22text-sm%20text-muted-foreground%20leading-relaxed%22%7D",
                                            className: "text-sm text-muted-foreground leading-relaxed",
                                            children: w.desc
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                                            lineNumber: 198,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, w.title, true, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                                    lineNumber: 185,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                            lineNumber: 183,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:203:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                            "data-component-line": "203",
                            "data-component-file": "ApplicationProcess.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22max-w-4xl%20mx-auto%20mt-14%22%7D",
                            className: "max-w-4xl mx-auto mt-14",
                            children: /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:204:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                                "data-component-line": "204",
                                "data-component-file": "ApplicationProcess.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22relative%20bg-indian-green%20text-white%20rounded-2xl%20px-8%20py-10%20lg%3Apx-14%20lg%3Apy-12%20shadow-xl%20text-center%22%7D",
                                className: "relative bg-indian-green text-white rounded-2xl px-8 py-10 lg:px-14 lg:py-12 shadow-xl text-center",
                                children: [
                                    /*#__PURE__*/ _jsxDEV(Award, {
                                        "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:205:14",
                                        "data-lov-name": "Award",
                                        "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                                        "data-component-line": "205",
                                        "data-component-file": "ApplicationProcess.tsx",
                                        "data-component-name": "Award",
                                        "data-component-content": "%7B%22className%22%3A%22h-10%20w-10%20text-golden-yellow%20mx-auto%20mb-4%22%7D",
                                        className: "h-10 w-10 text-golden-yellow mx-auto mb-4"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        "data-lov-id": "src/pages/admissions/ApplicationProcess.tsx:206:14",
                                        "data-lov-name": "p",
                                        "data-component-path": "src/pages/admissions/ApplicationProcess.tsx",
                                        "data-component-line": "206",
                                        "data-component-file": "ApplicationProcess.tsx",
                                        "data-component-name": "p",
                                        "data-component-content": "%7B%22text%22%3A%22%5C%22Admissions%20at%20SJRPS-HBR%20are%20not%20just%20about%20enrolment%20%E2%80%94%20they%20are%20the%20beginning%20of%20a%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20lifelong%20partnership%20in%20your%20child's%20growth%20and%20success.%5C%22%22%2C%22className%22%3A%22text-lg%20lg%3Atext-xl%20leading-relaxed%20italic%20font-medium%22%7D",
                                        className: "text-lg lg:text-xl leading-relaxed italic font-medium",
                                        children: '"Admissions at SJRPS-HBR are not just about enrolment — they are the beginning of a lifelong partnership in your child\'s growth and success."'
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                                        lineNumber: 206,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                    lineNumber: 170,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
};
_c = ApplicationProcess;
export default ApplicationProcess;
var _c;
$RefreshReg$(_c, "ApplicationProcess");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/pages/admissions/ApplicationProcess.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBT0EsWUFBWSxzQkFBcUI7QUFDeEMsT0FBT0MsY0FBYyx3QkFBdUI7QUFDNUMsU0FBU0MsSUFBSSxFQUFFQyxXQUFXLFFBQVEsdUJBQXNCO0FBQ3hELFNBQVNDLE1BQU0sUUFBUSxnQkFBZTtBQUN0QyxTQUNFQyxhQUFhLEVBQ2JDLFFBQVEsRUFDUkMsV0FBVyxFQUNYQyxTQUFTLEVBQ1RDLFlBQVksRUFDWkMsVUFBVSxFQUNWQyxhQUFhLEVBQ2JDLGFBQWEsRUFDYkMsTUFBTSxFQUNOQyxNQUFNLEVBQ05DLFFBQVEsRUFDUkMsU0FBUyxFQUNUQyxLQUFLLEVBQ0xDLEtBQUssRUFDTEMsUUFBUSxFQUNSQyxTQUFTLEVBQ1RDLEtBQUssUUFDQSxlQUFjO0FBRXJCLE1BQU1DLFFBQVE7SUFDWjtRQUFFQyxNQUFNbEI7UUFBZW1CLE9BQU87UUFBV0MsTUFBTTtJQUErRTtJQUM5SDtRQUFFRixNQUFNWDtRQUFlWSxPQUFPO1FBQTBCQyxNQUFNO0lBQTJFO0lBQ3pJO1FBQUVGLE1BQU1oQjtRQUFhaUIsT0FBTztRQUF5QkMsTUFBTTtJQUErRDtJQUMxSDtRQUFFRixNQUFNZjtRQUFXZ0IsT0FBTztRQUFvQ0MsTUFBTTtJQUFtRjtJQUN2SjtRQUFFRixNQUFNZDtRQUFjZSxPQUFPO1FBQTBCQyxNQUFNO0lBQTBFO0lBQ3ZJO1FBQUVGLE1BQU1iO1FBQVljLE9BQU87UUFBZUMsTUFBTTtJQUFrRTtJQUNsSDtRQUFFRixNQUFNWjtRQUFlYSxPQUFPO1FBQXdCQyxNQUFNO0lBQXdFO0NBQ3JJO0FBRUQsTUFBTUMsWUFBWTtJQUNoQjtRQUFFSCxNQUFNUDtRQUFXUSxPQUFPO0lBQW9CO0lBQzlDO1FBQUVELE1BQU1WO1FBQVFXLE9BQU87SUFBZTtJQUN0QztRQUFFRCxNQUFNVDtRQUFRVSxPQUFPO0lBQTRCO0lBQ25EO1FBQUVELE1BQU1SO1FBQVVTLE9BQU87SUFBNEI7SUFDckQ7UUFBRUQsTUFBTWpCO1FBQVVrQixPQUFPO0lBQXVDO0NBQ2pFO0FBRUQsTUFBTUcsWUFBWTtJQUNoQjtRQUFFSixNQUFNWjtRQUFlYSxPQUFPO1FBQXVCQyxNQUFNO0lBQXVFO0lBQ2xJO1FBQUVGLE1BQU1KO1FBQVVLLE9BQU87UUFBd0JDLE1BQU07SUFBaUU7SUFDeEg7UUFBRUYsTUFBTUw7UUFBT00sT0FBTztRQUF1QkMsTUFBTTtJQUE0RDtJQUMvRztRQUFFRixNQUFNRjtRQUFPRyxPQUFPO1FBQXlCQyxNQUFNO0lBQTZEO0lBQ2xIO1FBQUVGLE1BQU1IO1FBQVdJLE9BQU87UUFBK0JDLE1BQU07SUFBK0Q7Q0FDL0g7QUFFRCxNQUFNRyxTQUFTO0lBQ2JDLFFBQVE7UUFBRUMsU0FBUztRQUFHQyxHQUFHO0lBQUc7SUFDNUJDLFNBQVM7UUFBRUYsU0FBUztRQUFHQyxHQUFHO1FBQUdFLFlBQVk7WUFBRUMsVUFBVTtRQUFJO0lBQUU7QUFDN0Q7QUFFQSxNQUFNQyxxQkFBcUI7SUFDekIscUJBQ0UsUUFBQ25DO1FBQUtvQyxlQUFBO1FBQUFDLGlCQUFBO1FBQUFDLHVCQUFBO1FBQUFDLHVCQUFBO1FBQUFDLHVCQUFBO1FBQUFDLHVCQUFBO1FBQUFDLDBCQUFBOzswQkFDSixRQUFDekM7Z0JBQU9tQyxlQUFBO2dCQUFBQyxpQkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLDBCQUFBO2dCQUNObEIsT0FBTTtnQkFDTm1CLGFBQWE7b0JBQ1g7d0JBQUVDLE9BQU87d0JBQWNDLE1BQU07b0JBQWM7b0JBQzNDO3dCQUFFRCxPQUFPO29CQUFxQjtpQkFDL0I7Ozs7OzswQkFJSCxRQUFDRTtnQkFBTVYsZUFBQTtnQkFBQUMsaUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQywwQkFBQTtnQkFBRUssV0FBVTswQkFDakIsc0JBQUNDO29CQUFFWixlQUFBO29CQUFBQyxpQkFBQTtvQkFBQUMsdUJBQUE7b0JBQUFDLHVCQUFBO29CQUFBQyx1QkFBQTtvQkFBQUMsdUJBQUE7b0JBQUFDLDBCQUFBO29CQUFFSyxXQUFVOztzQ0FDYixRQUFDRTs0QkFBQWIsZUFBQTs0QkFBQUMsaUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQywwQkFBQTs0QkFBRUssV0FBVTtzQ0FBMEU7Ozs7OztzQ0FHdkYsUUFBQ0c7NEJBQUNkLGVBQUE7NEJBQUFDLGlCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsMEJBQUE7NEJBQ0FLLFdBQVU7NEJBQ1ZJLE9BQU87Z0NBQUVDLFlBQVk7NEJBQXNCO3NDQUM3Qzs7Ozs7O3NDQUdBLFFBQUNIOzRCQUFBYixlQUFBOzRCQUFBQyxpQkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLDBCQUFBOzRCQUFFSyxXQUFVO3NDQUErQzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBU2hFLFFBQUNEO2dCQUFNVixlQUFBO2dCQUFBQyxpQkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLDBCQUFBO2dCQUFFSyxXQUFVOzBCQUNqQixzQkFBQ0M7b0JBQUVaLGVBQUE7b0JBQUFDLGlCQUFBO29CQUFBQyx1QkFBQTtvQkFBQUMsdUJBQUE7b0JBQUFDLHVCQUFBO29CQUFBQyx1QkFBQTtvQkFBQUMsMEJBQUE7b0JBQUVLLFdBQVU7O3NDQUNiLFFBQUNHOzRCQUFDZCxlQUFBOzRCQUFBQyxpQkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLDBCQUFBOzRCQUNBSyxXQUFVOzRCQUNWSSxPQUFPO2dDQUFFQyxZQUFZOzRCQUFzQjtzQ0FDN0M7Ozs7OztzQ0FHQSxRQUFDSjs0QkFBRVosZUFBQTs0QkFBQUMsaUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQywwQkFBQTs0QkFBRUssV0FBVTs7OENBQ2IsUUFBQ0M7b0NBQUVaLGVBQUE7b0NBQUFDLGlCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsMEJBQUE7b0NBQUVLLFdBQVU7Ozs7Ozs4Q0FDZixRQUFDQztvQ0FBRVosZUFBQTtvQ0FBQUMsaUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQywwQkFBQTtvQ0FBRUssV0FBVTs4Q0FDWnpCLE1BQU0rQixHQUFHLENBQUMsQ0FBQ0MsR0FBR0Msa0JBQ2IsUUFBQ1A7NENBQUVaLGVBQUE7NENBQUFDLGlCQUFBOzRDQUFBQyx1QkFBQTs0Q0FBQUMsdUJBQUE7NENBQUFDLHVCQUFBOzRDQUFBQyx1QkFBQTs0Q0FBQUMsMEJBQUE7NENBRURLLFdBQVcsQ0FBQyx5Q0FBeUMsRUFDbkRRLElBQUksTUFBTSxJQUFJLEtBQUssZ0NBQ25COzs4REFFRixRQUFDUDtvREFBRVosZUFBQTtvREFBQUMsaUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQywwQkFBQTtvREFDREssV0FBVyxDQUFDLGNBQWMsRUFDeEJRLElBQUksTUFBTSxJQUFJLDJCQUEyQixZQUN6Qzs7c0VBRUYsUUFBQ1A7NERBQUVaLGVBQUE7NERBQUFDLGlCQUFBOzREQUFBQyx1QkFBQTs0REFBQUMsdUJBQUE7NERBQUFDLHVCQUFBOzREQUFBQyx1QkFBQTs0REFBQUMsMEJBQUE7NERBQUVLLFdBQVU7O2dFQUF3QztnRUFBTVEsSUFBSTs7Ozs7OztzRUFDakUsUUFBQ0M7NERBQUNwQixlQUFBOzREQUFBQyxpQkFBQTs0REFBQUMsdUJBQUE7NERBQUFDLHVCQUFBOzREQUFBQyx1QkFBQTs0REFBQUMsdUJBQUE7NERBQUFDLDBCQUFBOzREQUFFSyxXQUFVOzs4RUFDWixRQUFDTyxFQUFFL0IsSUFBRztvRUFBQWEsZUFBQTtvRUFBQUMsaUJBQUE7b0VBQUFDLHVCQUFBO29FQUFBQyx1QkFBQTtvRUFBQUMsdUJBQUE7b0VBQUFDLHVCQUFBO29FQUFBQywwQkFBQTtvRUFBRUssV0FBVTs7Ozs7O2dFQUNqQk8sRUFBRTlCLEtBQUs7Ozs7Ozs7c0VBRVYsUUFBQ3lCOzREQUFBYixlQUFBOzREQUFBQyxpQkFBQTs0REFBQUMsdUJBQUE7NERBQUFDLHVCQUFBOzREQUFBQyx1QkFBQTs0REFBQUMsdUJBQUE7NERBQUFDLDBCQUFBOzREQUFFSyxXQUFVO3NFQUE4Qk8sRUFBRTdCLElBQUk7Ozs7Ozs7Ozs7Ozs4REFFbkQsUUFBQ3VCO29EQUFFWixlQUFBO29EQUFBQyxpQkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLDBCQUFBO29EQUFFSyxXQUFVOzs7Ozs7OERBQ2YsUUFBQ1U7b0RBQUdyQixlQUFBO29EQUFBQyxpQkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLDBCQUFBO29EQUFFSyxXQUFVOzs7Ozs7OzJDQWxCWE8sRUFBRTlCLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkEyQnhCLFFBQUNzQjtnQkFBTVYsZUFBQTtnQkFBQUMsaUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQywwQkFBQTtnQkFBRUssV0FBVTswQkFDakIsc0JBQUNDO29CQUFFWixlQUFBO29CQUFBQyxpQkFBQTtvQkFBQUMsdUJBQUE7b0JBQUFDLHVCQUFBO29CQUFBQyx1QkFBQTtvQkFBQUMsdUJBQUE7b0JBQUFDLDBCQUFBO29CQUFFSyxXQUFVOztzQ0FDYixRQUFDQzs0QkFBRVosZUFBQTs0QkFBQUMsaUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQywwQkFBQTs0QkFBRUssV0FBVTs7OENBQ2IsUUFBQ0U7b0NBQUFiLGVBQUE7b0NBQUFDLGlCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsMEJBQUE7b0NBQUVLLFdBQVU7OENBQTBFOzs7Ozs7OENBR3ZGLFFBQUNHO29DQUFDZCxlQUFBO29DQUFBQyxpQkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLDBCQUFBO29DQUNBSyxXQUFVO29DQUNWSSxPQUFPO3dDQUFFQyxZQUFZO29DQUFzQjs4Q0FDN0M7Ozs7Ozs4Q0FHQSxRQUFDSDtvQ0FBQWIsZUFBQTtvQ0FBQUMsaUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQywwQkFBQTtvQ0FBRUssV0FBVTs4Q0FBK0M7Ozs7Ozs7Ozs7OztzQ0FLOUQsUUFBQ0M7NEJBQUVaLGVBQUE7NEJBQUFDLGlCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsMEJBQUE7NEJBQUVLLFdBQVU7c0NBQ1pyQixVQUFVMkIsR0FBRyxDQUFDLENBQUNLLEdBQUdILGtCQUNqQixRQUFDbkQsT0FBTzRDLEdBQUU7b0NBQUFaLGVBQUE7b0NBQUFDLGlCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsMEJBQUE7b0NBRVJpQixTQUFTO3dDQUFFN0IsU0FBUzt3Q0FBR0MsR0FBRztvQ0FBRztvQ0FDN0I2QixhQUFhO3dDQUFFOUIsU0FBUzt3Q0FBR0MsR0FBRztvQ0FBRTtvQ0FDaEM4QixVQUFVO3dDQUFFQyxNQUFNO29DQUFLO29DQUN2QjdCLFlBQVk7d0NBQUVDLFVBQVU7d0NBQUs2QixPQUFPLEFBQUNSLElBQUksSUFBSztvQ0FBSzs4Q0FFbkQsc0JBQUNyRDt3Q0FBR2tDLGVBQUE7d0NBQUFDLGlCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLHVCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsMEJBQUE7d0NBQUVLLFdBQVU7a0RBQ2Qsc0JBQUM1Qzs0Q0FBVWlDLGVBQUE7NENBQUFDLGlCQUFBOzRDQUFBQyx1QkFBQTs0Q0FBQUMsdUJBQUE7NENBQUFDLHVCQUFBOzRDQUFBQyx1QkFBQTs0Q0FBQUMsMEJBQUE7NENBQUVLLFdBQVU7OzhEQUNyQixRQUFDQztvREFBRVosZUFBQTtvREFBQUMsaUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQywwQkFBQTtvREFBRUssV0FBVTs4REFDYixzQkFBQ1csRUFBRW5DLElBQUc7d0RBQUFhLGVBQUE7d0RBQUFDLGlCQUFBO3dEQUFBQyx1QkFBQTt3REFBQUMsdUJBQUE7d0RBQUFDLHVCQUFBO3dEQUFBQyx1QkFBQTt3REFBQUMsMEJBQUE7d0RBQUVLLFdBQVU7Ozs7Ozs7Ozs7OzhEQUVwQixRQUFDUztvREFBQ3BCLGVBQUE7b0RBQUFDLGlCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsMEJBQUE7b0RBQUVLLFdBQVU7OERBQTBDVyxFQUFFbEMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBWDlEa0MsRUFBRWxDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFxQnRCLFFBQUNzQjtnQkFBTVYsZUFBQTtnQkFBQUMsaUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQywwQkFBQTtnQkFBRUssV0FBVTswQkFDakIsc0JBQUNDO29CQUFFWixlQUFBO29CQUFBQyxpQkFBQTtvQkFBQUMsdUJBQUE7b0JBQUFDLHVCQUFBO29CQUFBQyx1QkFBQTtvQkFBQUMsdUJBQUE7b0JBQUFDLDBCQUFBO29CQUFFSyxXQUFVOztzQ0FDYixRQUFDQzs0QkFBRVosZUFBQTs0QkFBQUMsaUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQywwQkFBQTs0QkFBRUssV0FBVTs7OENBQ2IsUUFBQ0U7b0NBQUFiLGVBQUE7b0NBQUFDLGlCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsMEJBQUE7b0NBQUVLLFdBQVU7OENBQTBFOzs7Ozs7OENBR3ZGLFFBQUNHO29DQUFDZCxlQUFBO29DQUFBQyxpQkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLDBCQUFBO29DQUNBSyxXQUFVO29DQUNWSSxPQUFPO3dDQUFFQyxZQUFZO29DQUFzQjs4Q0FDN0M7Ozs7Ozs7Ozs7OztzQ0FLRixRQUFDSjs0QkFBRVosZUFBQTs0QkFBQUMsaUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQywwQkFBQTs0QkFBRUssV0FBVTtzQ0FDWnBCLFVBQVUwQixHQUFHLENBQUMsQ0FBQ1csR0FBR1Qsa0JBQ2pCLFFBQUNuRCxPQUFPNEMsR0FBRTtvQ0FBQVosZUFBQTtvQ0FBQUMsaUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQywwQkFBQTtvQ0FFUmlCLFNBQVE7b0NBQ1JDLGFBQVk7b0NBQ1pDLFVBQVU7d0NBQUVDLE1BQU07b0NBQUs7b0NBQ3ZCRyxVQUFVckM7b0NBQ1ZLLFlBQVk7d0NBQUU4QixPQUFPLEFBQUNSLElBQUksSUFBSztvQ0FBSztvQ0FDcENSLFdBQVU7O3NEQUVWLFFBQUNDOzRDQUFFWixlQUFBOzRDQUFBQyxpQkFBQTs0Q0FBQUMsdUJBQUE7NENBQUFDLHVCQUFBOzRDQUFBQyx1QkFBQTs0Q0FBQUMsdUJBQUE7NENBQUFDLDBCQUFBOzRDQUFFSyxXQUFVO3NEQUNiLHNCQUFDaUIsRUFBRXpDLElBQUc7Z0RBQUFhLGVBQUE7Z0RBQUFDLGlCQUFBO2dEQUFBQyx1QkFBQTtnREFBQUMsdUJBQUE7Z0RBQUFDLHVCQUFBO2dEQUFBQyx1QkFBQTtnREFBQUMsMEJBQUE7Z0RBQUVLLFdBQVU7Ozs7Ozs7Ozs7O3NEQUVwQixRQUFDUzs0Q0FBQ3BCLGVBQUE7NENBQUFDLGlCQUFBOzRDQUFBQyx1QkFBQTs0Q0FBQUMsdUJBQUE7NENBQUFDLHVCQUFBOzRDQUFBQyx1QkFBQTs0Q0FBQUMsMEJBQUE7NENBQUVLLFdBQVU7c0RBQXlDaUIsRUFBRXhDLEtBQUs7Ozs7OztzREFDOUQsUUFBQ3lCOzRDQUFBYixlQUFBOzRDQUFBQyxpQkFBQTs0Q0FBQUMsdUJBQUE7NENBQUFDLHVCQUFBOzRDQUFBQyx1QkFBQTs0Q0FBQUMsdUJBQUE7NENBQUFDLDBCQUFBOzRDQUFFSyxXQUFVO3NEQUFpRGlCLEVBQUV2QyxJQUFJOzs7Ozs7O21DQVovRHVDLEVBQUV4QyxLQUFLOzs7Ozs7Ozs7O3NDQWlCbEIsUUFBQ3dCOzRCQUFFWixlQUFBOzRCQUFBQyxpQkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLDBCQUFBOzRCQUFFSyxXQUFVO3NDQUNiLHNCQUFDQztnQ0FBRVosZUFBQTtnQ0FBQUMsaUJBQUE7Z0NBQUFDLHVCQUFBO2dDQUFBQyx1QkFBQTtnQ0FBQUMsdUJBQUE7Z0NBQUFDLHVCQUFBO2dDQUFBQywwQkFBQTtnQ0FBRUssV0FBVTs7a0RBQ2IsUUFBQzlCO3dDQUFJbUIsZUFBQTt3Q0FBQUMsaUJBQUE7d0NBQUFDLHVCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLHVCQUFBO3dDQUFBQywwQkFBQTt3Q0FBRUssV0FBVTs7Ozs7O2tEQUNqQixRQUFDRTt3Q0FBQWIsZUFBQTt3Q0FBQUMsaUJBQUE7d0NBQUFDLHVCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLHVCQUFBO3dDQUFBQywwQkFBQTt3Q0FBRUssV0FBVTtrREFBdUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVbEY7S0FoS01aO0FBa0tOLGVBQWVBLG1CQUFrQiIsIm5hbWVzIjpbIkxheW91dCIsIlBhZ2VIZXJvIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwibW90aW9uIiwiQ2xpcGJvYXJkTGlzdCIsIkZpbGVUZXh0IiwiU2hpZWxkQ2hlY2siLCJVc2VyQ2hlY2siLCJDaGVja0NpcmNsZTIiLCJDcmVkaXRDYXJkIiwiR3JhZHVhdGlvbkNhcCIsIkZpbGVTaWduYXR1cmUiLCJJZENhcmQiLCJDYW1lcmEiLCJCb29rT3BlbiIsIkZpbGVCYWRnZSIsIkF3YXJkIiwiVXNlcnMiLCJTcGFya2xlcyIsIkJ1aWxkaW5nMiIsIkhlYXJ0Iiwic3RlcHMiLCJpY29uIiwidGl0bGUiLCJkZXNjIiwiZG9jdW1lbnRzIiwid2h5Q2hvb3NlIiwiZmFkZVVwIiwiaGlkZGVuIiwib3BhY2l0eSIsInkiLCJ2aXNpYmxlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiQXBwbGljYXRpb25Qcm9jZXNzIiwiZGF0YS1sb3YtaWQiLCJkYXRhLWxvdi1uYW1lIiwiZGF0YS1jb21wb25lbnQtcGF0aCIsImRhdGEtY29tcG9uZW50LWxpbmUiLCJkYXRhLWNvbXBvbmVudC1maWxlIiwiZGF0YS1jb21wb25lbnQtbmFtZSIsImRhdGEtY29tcG9uZW50LWNvbnRlbnQiLCJicmVhZGNydW1icyIsImxhYmVsIiwicGF0aCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJwIiwiaDIiLCJzdHlsZSIsImZvbnRGYW1pbHkiLCJtYXAiLCJzIiwiaSIsImgzIiwic3BhbiIsImQiLCJpbml0aWFsIiwid2hpbGVJblZpZXciLCJ2aWV3cG9ydCIsIm9uY2UiLCJkZWxheSIsInciLCJ2YXJpYW50cyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJBcHBsaWNhdGlvblByb2Nlc3MudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBQYWdlSGVybyBmcm9tIFwiQC9jb21wb25lbnRzL1BhZ2VIZXJvXCI7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7XG4gIENsaXBib2FyZExpc3QsXG4gIEZpbGVUZXh0LFxuICBTaGllbGRDaGVjayxcbiAgVXNlckNoZWNrLFxuICBDaGVja0NpcmNsZTIsXG4gIENyZWRpdENhcmQsXG4gIEdyYWR1YXRpb25DYXAsXG4gIEZpbGVTaWduYXR1cmUsXG4gIElkQ2FyZCxcbiAgQ2FtZXJhLFxuICBCb29rT3BlbixcbiAgRmlsZUJhZGdlLFxuICBBd2FyZCxcbiAgVXNlcnMsXG4gIFNwYXJrbGVzLFxuICBCdWlsZGluZzIsXG4gIEhlYXJ0LFxufSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5cbmNvbnN0IHN0ZXBzID0gW1xuICB7IGljb246IENsaXBib2FyZExpc3QsIHRpdGxlOiBcIkVucXVpcnlcIiwgZGVzYzogXCJSZWFjaCBvdXQgdG8gb3VyIGFkbWlzc2lvbnMgb2ZmaWNlIG9yIGZpbGwgdGhlIG9ubGluZSBlbnF1aXJ5IGZvcm0gdG8gYmVnaW4uXCIgfSxcbiAgeyBpY29uOiBGaWxlU2lnbmF0dXJlLCB0aXRsZTogXCJBcHBsaWNhdGlvbiBTdWJtaXNzaW9uXCIsIGRlc2M6IFwiU3VibWl0IHRoZSBkdWx5IGZpbGxlZCBhcHBsaWNhdGlvbiBmb3JtIGFsb25nIHdpdGggdGhlIHJlZ2lzdHJhdGlvbiBmZWUuXCIgfSxcbiAgeyBpY29uOiBTaGllbGRDaGVjaywgdGl0bGU6IFwiRG9jdW1lbnQgVmVyaWZpY2F0aW9uXCIsIGRlc2M6IFwiT3VyIHRlYW0gdmVyaWZpZXMgYWNhZGVtaWMgcmVjb3JkcyBhbmQgc3VwcG9ydGluZyBkb2N1bWVudHMuXCIgfSxcbiAgeyBpY29uOiBVc2VyQ2hlY2ssIHRpdGxlOiBcIlN0dWRlbnQgSW50ZXJhY3Rpb24gLyBBc3Nlc3NtZW50XCIsIGRlc2M6IFwiQSBmcmllbmRseSBpbnRlcmFjdGlvbiBvciBhZ2UtYXBwcm9wcmlhdGUgYXNzZXNzbWVudCB3aXRoIHRoZSBjaGlsZCBhbmQgcGFyZW50cy5cIiB9LFxuICB7IGljb246IENoZWNrQ2lyY2xlMiwgdGl0bGU6IFwiQWRtaXNzaW9uIENvbmZpcm1hdGlvblwiLCBkZXNjOiBcIk9uIHN1Y2Nlc3NmdWwgYXNzZXNzbWVudCwgYW4gYWRtaXNzaW9uIG9mZmVyIGlzIGV4dGVuZGVkIHRvIHRoZSBmYW1pbHkuXCIgfSxcbiAgeyBpY29uOiBDcmVkaXRDYXJkLCB0aXRsZTogXCJGZWUgUGF5bWVudFwiLCBkZXNjOiBcIkNvbXBsZXRlIHRoZSBwcmVzY3JpYmVkIGZlZSBwYXltZW50IHdpdGhpbiB0aGUgc3RpcHVsYXRlZCB0aW1lLlwiIH0sXG4gIHsgaWNvbjogR3JhZHVhdGlvbkNhcCwgdGl0bGU6IFwiQWNhZGVtaWMgT3JpZW50YXRpb25cIiwgZGVzYzogXCJBdHRlbmQgdGhlIG9yaWVudGF0aW9uIHByb2dyYW1tZSBhbmQgc3RlcCBpbnRvIHRoZSBTSlJQUy1IQlIgam91cm5leS5cIiB9LFxuXTtcblxuY29uc3QgZG9jdW1lbnRzID0gW1xuICB7IGljb246IEZpbGVCYWRnZSwgdGl0bGU6IFwiQmlydGggQ2VydGlmaWNhdGVcIiB9LFxuICB7IGljb246IElkQ2FyZCwgdGl0bGU6IFwiQWFkaGFhciBDb3B5XCIgfSxcbiAgeyBpY29uOiBDYW1lcmEsIHRpdGxlOiBcIlBhc3Nwb3J0IFNpemUgUGhvdG9ncmFwaHNcIiB9LFxuICB7IGljb246IEJvb2tPcGVuLCB0aXRsZTogXCJQcmV2aW91cyBBY2FkZW1pYyBSZWNvcmRzXCIgfSxcbiAgeyBpY29uOiBGaWxlVGV4dCwgdGl0bGU6IFwiVHJhbnNmZXIgQ2VydGlmaWNhdGUgKGlmIGFwcGxpY2FibGUpXCIgfSxcbl07XG5cbmNvbnN0IHdoeUNob29zZSA9IFtcbiAgeyBpY29uOiBHcmFkdWF0aW9uQ2FwLCB0aXRsZTogXCJBY2FkZW1pYyBFeGNlbGxlbmNlXCIsIGRlc2M6IFwiQ0JTRS1hbGlnbmVkIHJpZ291ciB3aXRoIHN0cm9uZyBmdW5kYW1lbnRhbHMgYW5kIGNvbnNpc3RlbnQgcmVzdWx0cy5cIiB9LFxuICB7IGljb246IFNwYXJrbGVzLCB0aXRsZTogXCJIb2xpc3RpYyBEZXZlbG9wbWVudFwiLCBkZXNjOiBcIkFjYWRlbWljcywgc3BvcnRzLCBhcnRzLCBhbmQgbGlmZSBza2lsbHMgd292ZW4gaW50byBldmVyeSBkYXkuXCIgfSxcbiAgeyBpY29uOiBVc2VycywgdGl0bGU6IFwiRXhwZXJpZW5jZWQgRmFjdWx0eVwiLCBkZXNjOiBcIk1lbnRvcnMgd2hvIGtub3cgZXZlcnkgY2hpbGQgYnkgbmFtZSBhbmQgZ3VpZGUgd2l0aCBjYXJlLlwiIH0sXG4gIHsgaWNvbjogSGVhcnQsIHRpdGxlOiBcIlZhbHVlLUJhc2VkIEVkdWNhdGlvblwiLCBkZXNjOiBcIkNoYXJhY3RlciwgaW50ZWdyaXR5LCBhbmQgZW1wYXRoeSBhdCB0aGUgY29yZSBvZiBsZWFybmluZy5cIiB9LFxuICB7IGljb246IEJ1aWxkaW5nMiwgdGl0bGU6IFwiTW9kZXJuIExlYXJuaW5nIEVudmlyb25tZW50XCIsIGRlc2M6IFwiU21hcnQgY2xhc3Nyb29tcywgbGFicywgbGlicmFyeSwgYW5kIGEgc2FmZSwgdmlicmFudCBjYW1wdXMuXCIgfSxcbl07XG5cbmNvbnN0IGZhZGVVcCA9IHtcbiAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHk6IDI0IH0sXG4gIHZpc2libGU6IHsgb3BhY2l0eTogMSwgeTogMCwgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMC42IH0gfSxcbn07XG5cbmNvbnN0IEFwcGxpY2F0aW9uUHJvY2VzcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPFBhZ2VIZXJvXG4gICAgICAgIHRpdGxlPVwiQWRtaXNzaW9ucyBQcm9jZXNzXCJcbiAgICAgICAgYnJlYWRjcnVtYnM9e1tcbiAgICAgICAgICB7IGxhYmVsOiBcIkFkbWlzc2lvbnNcIiwgcGF0aDogXCIvYWRtaXNzaW9uc1wiIH0sXG4gICAgICAgICAgeyBsYWJlbDogXCJBZG1pc3Npb25zIFByb2Nlc3NcIiB9LFxuICAgICAgICBdfVxuICAgICAgLz5cblxuICAgICAgey8qIEludHJvICovfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTYgbGc6cHktMjBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IG1heC13LTR4bCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMjVlbV0gdGV4dC1pbmRpYW4tZ3JlZW4gbWItM1wiPlxuICAgICAgICAgICAgQmVnaW4gWW91ciBKb3VybmV5XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxoMlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgbGc6dGV4dC01eGwgZm9udC1ib2xkIHRleHQtbG9nby1uYXZ5IG1iLTVcIlxuICAgICAgICAgICAgc3R5bGU9e3sgZm9udEZhbWlseTogXCJQb3BwaW5zLCBzYW5zLXNlcmlmXCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBBIFNpbXBsZSwgVHJhbnNwYXJlbnQgQWRtaXNzaW9uIFByb2Nlc3NcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgQXQgU0pSUFMtSEJSLCB3ZSB3ZWxjb21lIGZhbWlsaWVzIGludG8gYSBudXJ0dXJpbmcgY29tbXVuaXR5IHdoZXJlIGV2ZXJ5IGNoaWxkIGlzIGVuY291cmFnZWRcbiAgICAgICAgICAgIHRvIGdyb3cgd2l0aCBjb25maWRlbmNlLCBjdXJpb3NpdHksIGFuZCBjaGFyYWN0ZXIuIE91ciBhZG1pc3Npb25zIHByb2Nlc3MgaXMgZGVzaWduZWQgdG8gYmVcbiAgICAgICAgICAgIGNsZWFyLCBzdXBwb3J0aXZlLCBhbmQgY2VudHJlZCBvbiB0aGUgd2VsbC1iZWluZyBvZiB5b3VyIGNoaWxkLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIHsvKiBKb3VybmV5IFRpbWVsaW5lICovfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTYgYmctbXV0ZWQvNDAgYm9yZGVyLXlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IG1heC13LTR4bFwiPlxuICAgICAgICAgIDxoMlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgZm9udC1ib2xkIHRleHQtbG9nby1uYXZ5IHRleHQtY2VudGVyIG1iLTEyXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiUG9wcGlucywgc2Fucy1zZXJpZlwiIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQWRtaXNzaW9uIEpvdXJuZXlcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC00IG1kOmxlZnQtMS8yIHRvcC0wIGJvdHRvbS0wIHctMC41IGJnLWluZGlhbi1ncmVlbi8yMCBtZDotdHJhbnNsYXRlLXgtMS8yXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xMFwiPlxuICAgICAgICAgICAgICB7c3RlcHMubWFwKChzLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAga2V5PXtzLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmVsYXRpdmUgbWQ6Z3JpZCBtZDpncmlkLWNvbHMtMiBtZDpnYXAtOCAke1xuICAgICAgICAgICAgICAgICAgICBpICUgMiA9PT0gMCA/IFwiXCIgOiBcIm1kOlsmPio6Zmlyc3QtY2hpbGRdOm9yZGVyLTJcIlxuICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwbC0xMiBtZDpwbC0wICR7XG4gICAgICAgICAgICAgICAgICAgICAgaSAlIDIgPT09IDAgPyBcIm1kOnRleHQtcmlnaHQgbWQ6cHItMTBcIiA6IFwibWQ6cGwtMTBcIlxuICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNhZmZyb24tb3JhbmdlIGZvbnQtYm9sZCB0ZXh0LXNtXCI+U3RlcCB7aSArIDF9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LWxvZ28tbmF2eSBtdC0xIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIG1kOmp1c3RpZnktZW5kIG1kOlsmPnN2Z106b3JkZXItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzLmljb24gY2xhc3NOYW1lPVwiaC01IHctNSB0ZXh0LWluZGlhbi1ncmVlblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAge3MudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCBtdC0xXCI+e3MuZGVzY308L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtNCBtZDpsZWZ0LTEvMiB0b3AtMS41IHctMyBoLTMgcm91bmRlZC1mdWxsIGJnLWluZGlhbi1ncmVlbiByaW5nLTQgcmluZy1pbmRpYW4tZ3JlZW4vMjAgbWQ6LXRyYW5zbGF0ZS14LTEvMlwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7LyogUmVxdWlyZWQgRG9jdW1lbnRzICovfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTYgbGc6cHktMjAgYmctW2hzbCgzOF83MCVfOTYlKV1cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy0zeGwgbXgtYXV0byB0ZXh0LWNlbnRlciBtYi0xMlwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yNWVtXSB0ZXh0LWluZGlhbi1ncmVlbiBtYi0zXCI+XG4gICAgICAgICAgICAgIENoZWNrbGlzdFxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGgyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNHhsIGxnOnRleHQtNXhsIGZvbnQtYm9sZCB0ZXh0LWxvZ28tbmF2eSBtYi00XCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udEZhbWlseTogXCJQb3BwaW5zLCBzYW5zLXNlcmlmXCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUmVxdWlyZWQgRG9jdW1lbnRzXG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHRleHQtbGcgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgIFBsZWFzZSBrZWVwIGNsZWFyIGNvcGllcyBvZiB0aGUgZm9sbG93aW5nIGRvY3VtZW50cyByZWFkeSBhdCB0aGUgdGltZSBvZiBhcHBsaWNhdGlvbi5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNiBtYXgtdy01eGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAge2RvY3VtZW50cy5tYXAoKGQsIGkpID0+IChcbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICBrZXk9e2QudGl0bGV9XG4gICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAyMCB9fVxuICAgICAgICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41LCBkZWxheTogKGkgJSAzKSAqIDAuMDggfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIGJvcmRlci1ub25lIHNoYWRvdy1zbSBob3ZlcjpzaGFkb3cteGwgdHJhbnNpdGlvbi1hbGwgaG92ZXI6LXRyYW5zbGF0ZS15LTEgYmctd2hpdGUgaC1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC02IGZsZXggaXRlbXMtY2VudGVyIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMiBoLTEyIHJvdW5kZWQteGwgYmctaW5kaWFuLWdyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNocmluay0wIHNoYWRvdy1tZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkLmljb24gY2xhc3NOYW1lPVwiaC02IHctNiB0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCB0ZXh0LWxvZ28tbmF2eVwiPntkLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7LyogV2h5IENob29zZSBTSlJQUy1IQlIgKi99XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNiBsZzpweS0yMCBiZy1pbmRpYW4tZ3JlZW4vNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTN4bCBteC1hdXRvIHRleHQtY2VudGVyIG1iLTEyXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLVswLjI1ZW1dIHRleHQtaW5kaWFuLWdyZWVuIG1iLTNcIj5cbiAgICAgICAgICAgICAgV2h5IFNKUlBTLUhCUlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGgyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNHhsIGxnOnRleHQtNXhsIGZvbnQtYm9sZCB0ZXh0LWxvZ28tbmF2eSBtYi00XCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udEZhbWlseTogXCJQb3BwaW5zLCBzYW5zLXNlcmlmXCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgV2h5IENob29zZSBTSlJQUy1IQlI/XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC02XCI+XG4gICAgICAgICAgICB7d2h5Q2hvb3NlLm1hcCgodywgaSkgPT4gKFxuICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgIGtleT17dy50aXRsZX1cbiAgICAgICAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICB3aGlsZUluVmlldz1cInZpc2libGVcIlxuICAgICAgICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgICAgICAgICAgICB2YXJpYW50cz17ZmFkZVVwfVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IChpICUgMykgKiAwLjA4IH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgcC02IHNoYWRvdy1zbSBob3ZlcjpzaGFkb3ctbGcgdHJhbnNpdGlvbi1hbGwgYm9yZGVyIGJvcmRlci1pbmRpYW4tZ3JlZW4vMTBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgcm91bmRlZC14bCBiZy1pbmRpYW4tZ3JlZW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWItNCBzaGFkb3dcIj5cbiAgICAgICAgICAgICAgICAgIDx3Lmljb24gY2xhc3NOYW1lPVwiaC02IHctNiB0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdGV4dC1sb2dvLW5hdnkgbWItMlwiPnt3LnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmQgbGVhZGluZy1yZWxheGVkXCI+e3cuZGVzY308L3A+XG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byBtdC0xNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy1pbmRpYW4tZ3JlZW4gdGV4dC13aGl0ZSByb3VuZGVkLTJ4bCBweC04IHB5LTEwIGxnOnB4LTE0IGxnOnB5LTEyIHNoYWRvdy14bCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8QXdhcmQgY2xhc3NOYW1lPVwiaC0xMCB3LTEwIHRleHQtZ29sZGVuLXllbGxvdyBteC1hdXRvIG1iLTRcIiAvPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGxnOnRleHQteGwgbGVhZGluZy1yZWxheGVkIGl0YWxpYyBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgIFwiQWRtaXNzaW9ucyBhdCBTSlJQUy1IQlIgYXJlIG5vdCBqdXN0IGFib3V0IGVucm9sbWVudCDigJQgdGhleSBhcmUgdGhlIGJlZ2lubmluZyBvZiBhXG4gICAgICAgICAgICAgICAgbGlmZWxvbmcgcGFydG5lcnNoaXAgaW4geW91ciBjaGlsZCdzIGdyb3d0aCBhbmQgc3VjY2Vzcy5cIlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHBsaWNhdGlvblByb2Nlc3M7XG4iXSwiZmlsZSI6Ii9ob21lL3NqcnNoOTE2L3B1YmxpY19odG1sL3NyYy9wYWdlcy9hZG1pc3Npb25zL0FwcGxpY2F0aW9uUHJvY2Vzcy50c3gifQ==