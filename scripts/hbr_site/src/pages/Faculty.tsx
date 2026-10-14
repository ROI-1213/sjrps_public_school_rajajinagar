import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Faculty.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/pages/Faculty.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import Layout from "/src/components/Layout.tsx";
import PageBanner from "/src/components/PageBanner.tsx";
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { GraduationCap, X } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
import __vite__cjsImport6_react from "/node_modules/.vite/deps/react.js?v=5efa796b"; const useState = __vite__cjsImport6_react["useState"];
import indianFacultyGroup from "/src/assets/indian-faculty-group.jpg?import";
import facultyPriyaSharma from "/src/assets/faculty-priya-sharma.jpg?import";
import facultyRajeshKumar from "/src/assets/faculty-rajesh-kumar.jpg?import";
import facultySunitaReddy from "/src/assets/faculty-sunita-reddy.jpg?import";
import facultyArjunPatel from "/src/assets/faculty-arjun-patel.jpg?import";
import facultyKavyaNair from "/src/assets/faculty-kavya-nair.jpg?import";
import facultySureshGupta from "/src/assets/faculty-suresh-gupta.jpg?import";
const Faculty = ()=>{
    _s();
    const [expandedCard, setExpandedCard] = useState(null);
    const faculty = [
        {
            id: "priya-sharma",
            name: "Dr. Priya Sharma",
            subject: "English Literature",
            designation: "Department Head - Languages",
            qualification: "Ph.D. English",
            experience: "15 years",
            image: facultyPriyaSharma,
            description: "Passionate educator with expertise in contemporary literature and creative writing."
        },
        {
            id: "rajesh-kumar",
            name: "Prof. Rajesh Kumar",
            subject: "Mathematics",
            designation: "Senior Faculty - Mathematics",
            qualification: "M.Sc. Mathematics",
            experience: "20 years",
            image: facultyRajeshKumar,
            description: "Expert in advanced mathematics with a focus on problem-solving methodologies."
        },
        {
            id: "anita-reddy",
            name: "Dr. Anita Reddy",
            subject: "Physics",
            designation: "Department Head - Sciences",
            qualification: "Ph.D. Physics",
            experience: "12 years",
            image: facultySunitaReddy,
            description: "Research-focused physicist specializing in quantum mechanics and laboratory innovation."
        },
        {
            id: "suresh-menon",
            name: "Prof. Suresh Menon",
            subject: "Chemistry",
            designation: "Senior Faculty - Chemistry",
            qualification: "M.Sc. Chemistry",
            experience: "18 years",
            image: facultyArjunPatel,
            description: "Experienced chemistry educator with expertise in organic and analytical chemistry."
        },
        {
            id: "meera-krishna",
            name: "Ms. Meera Krishna",
            subject: "Social Studies",
            designation: "Faculty - Social Sciences",
            qualification: "M.A. History",
            experience: "10 years",
            image: facultyKavyaNair,
            description: "Dynamic educator passionate about making history and geography engaging for students."
        },
        {
            id: "amit-shah",
            name: "Mr. Amit Shah",
            subject: "Computer Science",
            designation: "Faculty - Technology",
            qualification: "B.Tech Computer Science",
            experience: "8 years",
            image: facultySureshGupta,
            description: "Tech enthusiast focusing on programming fundamentals and digital literacy."
        }
    ];
    const handleCardClick = (facultyId)=>{
        if (expandedCard === facultyId) {
            setExpandedCard(null);
        } else {
            setExpandedCard(facultyId);
        }
    };
    return /*#__PURE__*/ _jsxDEV(Layout, {
        "data-lov-id": "src/pages/Faculty.tsx:90:4",
        "data-lov-name": "Layout",
        "data-component-path": "src/pages/Faculty.tsx",
        "data-component-line": "90",
        "data-component-file": "Faculty.tsx",
        "data-component-name": "Layout",
        "data-component-content": "%7B%7D",
        children: /*#__PURE__*/ _jsxDEV("div", {
            "data-lov-id": "src/pages/Faculty.tsx:91:6",
            "data-lov-name": "div",
            "data-component-path": "src/pages/Faculty.tsx",
            "data-component-line": "91",
            "data-component-file": "Faculty.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22min-h-screen%20bg-background%22%7D",
            className: "min-h-screen bg-background",
            children: [
                /*#__PURE__*/ _jsxDEV(PageBanner, {
                    "data-lov-id": "src/pages/Faculty.tsx:92:8",
                    "data-lov-name": "PageBanner",
                    "data-component-path": "src/pages/Faculty.tsx",
                    "data-component-line": "92",
                    "data-component-file": "Faculty.tsx",
                    "data-component-name": "PageBanner",
                    "data-component-content": "%7B%7D",
                    title: "Our Faculty",
                    subtitle: "Meet our dedicated educators committed to nurturing young minds",
                    backgroundImage: indianFacultyGroup
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/Faculty.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("section", {
                    "data-lov-id": "src/pages/Faculty.tsx:98:8",
                    "data-lov-name": "section",
                    "data-component-path": "src/pages/Faculty.tsx",
                    "data-component-line": "98",
                    "data-component-file": "Faculty.tsx",
                    "data-component-name": "section",
                    "data-component-content": "%7B%22className%22%3A%22py-16%22%7D",
                    className: "py-16",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/Faculty.tsx:99:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/Faculty.tsx",
                        "data-component-line": "99",
                        "data-component-file": "Faculty.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                        className: "container mx-auto px-4",
                        children: /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/Faculty.tsx:100:12",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/Faculty.tsx",
                            "data-component-line": "100",
                            "data-component-file": "Faculty.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-2%20lg%3Agrid-cols-3%20gap-8%22%7D",
                            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                            children: faculty.map((member)=>/*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/Faculty.tsx:102:16",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/Faculty.tsx",
                                    "data-component-line": "102",
                                    "data-component-file": "Faculty.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22relative%22%7D",
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV(Card, {
                                            "data-lov-id": "src/pages/Faculty.tsx:103:18",
                                            "data-lov-name": "Card",
                                            "data-component-path": "src/pages/Faculty.tsx",
                                            "data-component-line": "103",
                                            "data-component-file": "Faculty.tsx",
                                            "data-component-name": "Card",
                                            "data-component-content": "%7B%7D",
                                            className: `cursor-pointer transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-fade-in ${expandedCard === member.id ? 'ring-2 ring-school-gold shadow-2xl' : ''}`,
                                            onClick: ()=>handleCardClick(member.id),
                                            children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                                "data-lov-id": "src/pages/Faculty.tsx:109:20",
                                                "data-lov-name": "CardContent",
                                                "data-component-path": "src/pages/Faculty.tsx",
                                                "data-component-line": "109",
                                                "data-component-file": "Faculty.tsx",
                                                "data-component-name": "CardContent",
                                                "data-component-content": "%7B%22className%22%3A%22p-6%20text-center%22%7D",
                                                className: "p-6 text-center",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/pages/Faculty.tsx:110:22",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/Faculty.tsx",
                                                        "data-component-line": "110",
                                                        "data-component-file": "Faculty.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%22className%22%3A%22w-32%20h-32%20mx-auto%20mb-4%20rounded-full%20overflow-hidden%20ring-4%20ring-school-light-brown%2F20%22%7D",
                                                        className: "w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-school-light-brown/20",
                                                        children: /*#__PURE__*/ _jsxDEV("img", {
                                                            "data-lov-id": "src/pages/Faculty.tsx:111:24",
                                                            "data-lov-name": "img",
                                                            "data-component-path": "src/pages/Faculty.tsx",
                                                            "data-component-line": "111",
                                                            "data-component-file": "Faculty.tsx",
                                                            "data-component-name": "img",
                                                            "data-component-content": "%7B%22className%22%3A%22w-full%20h-full%20object-cover%20transition-transform%20duration-300%20hover%3Ascale-110%22%7D",
                                                            src: member.image,
                                                            alt: member.name,
                                                            className: "w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/Faculty.tsx",
                                                            lineNumber: 111,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/Faculty.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("h3", {
                                                        "data-lov-id": "src/pages/Faculty.tsx:117:22",
                                                        "data-lov-name": "h3",
                                                        "data-component-path": "src/pages/Faculty.tsx",
                                                        "data-component-line": "117",
                                                        "data-component-file": "Faculty.tsx",
                                                        "data-component-name": "h3",
                                                        "data-component-content": "%7B%22className%22%3A%22text-xl%20font-bold%20text-school-brown%20mb-2%22%7D",
                                                        className: "text-xl font-bold text-school-brown mb-2",
                                                        children: member.name
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/Faculty.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("p", {
                                                        "data-lov-id": "src/pages/Faculty.tsx:118:22",
                                                        "data-lov-name": "p",
                                                        "data-component-path": "src/pages/Faculty.tsx",
                                                        "data-component-line": "118",
                                                        "data-component-file": "Faculty.tsx",
                                                        "data-component-name": "p",
                                                        "data-component-content": "%7B%22className%22%3A%22text-school-gold%20font-semibold%20mb-2%22%7D",
                                                        className: "text-school-gold font-semibold mb-2",
                                                        children: member.subject
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/Faculty.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/pages/Faculty.tsx:119:22",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/Faculty.tsx",
                                                        "data-component-line": "119",
                                                        "data-component-file": "Faculty.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20justify-center%20mb-2%22%7D",
                                                        className: "flex items-center justify-center mb-2",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV(GraduationCap, {
                                                                "data-lov-id": "src/pages/Faculty.tsx:120:24",
                                                                "data-lov-name": "GraduationCap",
                                                                "data-component-path": "src/pages/Faculty.tsx",
                                                                "data-component-line": "120",
                                                                "data-component-file": "Faculty.tsx",
                                                                "data-component-name": "GraduationCap",
                                                                "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%20text-elegant-light%20mr-1%22%7D",
                                                                className: "h-4 w-4 text-elegant-light mr-1"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/Faculty.tsx",
                                                                lineNumber: 120,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                "data-lov-id": "src/pages/Faculty.tsx:121:24",
                                                                "data-lov-name": "p",
                                                                "data-component-path": "src/pages/Faculty.tsx",
                                                                "data-component-line": "121",
                                                                "data-component-file": "Faculty.tsx",
                                                                "data-component-name": "p",
                                                                "data-component-content": "%7B%22className%22%3A%22text-elegant-light%20text-sm%22%7D",
                                                                className: "text-elegant-light text-sm",
                                                                children: member.qualification
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/Faculty.tsx",
                                                                lineNumber: 121,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/Faculty.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("p", {
                                                        "data-lov-id": "src/pages/Faculty.tsx:123:22",
                                                        "data-lov-name": "p",
                                                        "data-component-path": "src/pages/Faculty.tsx",
                                                        "data-component-line": "123",
                                                        "data-component-file": "Faculty.tsx",
                                                        "data-component-name": "p",
                                                        "data-component-content": "%7B%22className%22%3A%22text-elegant-light%20text-sm%22%7D",
                                                        className: "text-elegant-light text-sm",
                                                        children: member.experience
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/Faculty.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/pages/Faculty.tsx:126:22",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/Faculty.tsx",
                                                        "data-component-line": "126",
                                                        "data-component-file": "Faculty.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%22text%22%3A%22Click%20to%22%2C%22className%22%3A%22mt-4%20text-xs%20text-school-gold%2F70%20font-medium%22%7D",
                                                        className: "mt-4 text-xs text-school-gold/70 font-medium",
                                                        children: [
                                                            "Click to ",
                                                            expandedCard === member.id ? 'collapse' : 'view details'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/Faculty.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/Faculty.tsx",
                                                lineNumber: 109,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/Faculty.tsx",
                                            lineNumber: 103,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/pages/Faculty.tsx:133:18",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/pages/Faculty.tsx",
                                            "data-component-line": "133",
                                            "data-component-file": "Faculty.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%7D",
                                            className: `absolute top-full left-0 right-0 z-10 mt-2 transition-all duration-500 ease-out transform ${expandedCard === member.id ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}`,
                                            children: /*#__PURE__*/ _jsxDEV(Card, {
                                                "data-lov-id": "src/pages/Faculty.tsx:140:20",
                                                "data-lov-name": "Card",
                                                "data-component-path": "src/pages/Faculty.tsx",
                                                "data-component-line": "140",
                                                "data-component-file": "Faculty.tsx",
                                                "data-component-name": "Card",
                                                "data-component-content": "%7B%22className%22%3A%22bg-gradient-to-br%20from-white%20to-amber-50%20border-school-gold%2F30%20shadow-xl%22%7D",
                                                className: "bg-gradient-to-br from-white to-amber-50 border-school-gold/30 shadow-xl",
                                                children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                                    "data-lov-id": "src/pages/Faculty.tsx:141:22",
                                                    "data-lov-name": "CardContent",
                                                    "data-component-path": "src/pages/Faculty.tsx",
                                                    "data-component-line": "141",
                                                    "data-component-file": "Faculty.tsx",
                                                    "data-component-name": "CardContent",
                                                    "data-component-content": "%7B%22className%22%3A%22p-6%22%7D",
                                                    className: "p-6",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            "data-lov-id": "src/pages/Faculty.tsx:142:24",
                                                            "data-lov-name": "div",
                                                            "data-component-path": "src/pages/Faculty.tsx",
                                                            "data-component-line": "142",
                                                            "data-component-file": "Faculty.tsx",
                                                            "data-component-name": "div",
                                                            "data-component-content": "%7B%22className%22%3A%22flex%20justify-between%20items-start%20mb-4%22%7D",
                                                            className: "flex justify-between items-start mb-4",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                    "data-lov-id": "src/pages/Faculty.tsx:143:26",
                                                                    "data-lov-name": "div",
                                                                    "data-component-path": "src/pages/Faculty.tsx",
                                                                    "data-component-line": "143",
                                                                    "data-component-file": "Faculty.tsx",
                                                                    "data-component-name": "div",
                                                                    "data-component-content": "%7B%7D",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxDEV("h4", {
                                                                            "data-lov-id": "src/pages/Faculty.tsx:144:28",
                                                                            "data-lov-name": "h4",
                                                                            "data-component-path": "src/pages/Faculty.tsx",
                                                                            "data-component-line": "144",
                                                                            "data-component-file": "Faculty.tsx",
                                                                            "data-component-name": "h4",
                                                                            "data-component-content": "%7B%22className%22%3A%22text-lg%20font-bold%20text-school-brown%20mb-1%22%7D",
                                                                            className: "text-lg font-bold text-school-brown mb-1",
                                                                            children: member.name
                                                                        }, void 0, false, {
                                                                            fileName: "/home/sjrsh916/public_html/src/pages/Faculty.tsx",
                                                                            lineNumber: 144,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ _jsxDEV("p", {
                                                                            "data-lov-id": "src/pages/Faculty.tsx:147:28",
                                                                            "data-lov-name": "p",
                                                                            "data-component-path": "src/pages/Faculty.tsx",
                                                                            "data-component-line": "147",
                                                                            "data-component-file": "Faculty.tsx",
                                                                            "data-component-name": "p",
                                                                            "data-component-content": "%7B%22className%22%3A%22text-school-gold%20font-semibold%20text-sm%22%7D",
                                                                            className: "text-school-gold font-semibold text-sm",
                                                                            children: member.designation
                                                                        }, void 0, false, {
                                                                            fileName: "/home/sjrsh916/public_html/src/pages/Faculty.tsx",
                                                                            lineNumber: 147,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "/home/sjrsh916/public_html/src/pages/Faculty.tsx",
                                                                    lineNumber: 143,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV("button", {
                                                                    "data-lov-id": "src/pages/Faculty.tsx:151:26",
                                                                    "data-lov-name": "button",
                                                                    "data-component-path": "src/pages/Faculty.tsx",
                                                                    "data-component-line": "151",
                                                                    "data-component-file": "Faculty.tsx",
                                                                    "data-component-name": "button",
                                                                    "data-component-content": "%7B%22className%22%3A%22text-school-brown%2F60%20hover%3Atext-school-brown%20transition-colors%20p-1%22%7D",
                                                                    onClick: (e)=>{
                                                                        e.stopPropagation();
                                                                        setExpandedCard(null);
                                                                    },
                                                                    className: "text-school-brown/60 hover:text-school-brown transition-colors p-1",
                                                                    children: /*#__PURE__*/ _jsxDEV(X, {
                                                                        "data-lov-id": "src/pages/Faculty.tsx:158:28",
                                                                        "data-lov-name": "X",
                                                                        "data-component-path": "src/pages/Faculty.tsx",
                                                                        "data-component-line": "158",
                                                                        "data-component-file": "Faculty.tsx",
                                                                        "data-component-name": "X",
                                                                        "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%22%7D",
                                                                        className: "h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "/home/sjrsh916/public_html/src/pages/Faculty.tsx",
                                                                        lineNumber: 158,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "/home/sjrsh916/public_html/src/pages/Faculty.tsx",
                                                                    lineNumber: 151,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/Faculty.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            "data-lov-id": "src/pages/Faculty.tsx:162:24",
                                                            "data-lov-name": "div",
                                                            "data-component-path": "src/pages/Faculty.tsx",
                                                            "data-component-line": "162",
                                                            "data-component-file": "Faculty.tsx",
                                                            "data-component-name": "div",
                                                            "data-component-content": "%7B%22className%22%3A%22space-y-3%22%7D",
                                                            className: "space-y-3",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                    "data-lov-id": "src/pages/Faculty.tsx:163:26",
                                                                    "data-lov-name": "div",
                                                                    "data-component-path": "src/pages/Faculty.tsx",
                                                                    "data-component-line": "163",
                                                                    "data-component-file": "Faculty.tsx",
                                                                    "data-component-name": "div",
                                                                    "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20text-sm%20text-elegant-light%22%7D",
                                                                    className: "flex items-center text-sm text-elegant-light",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxDEV("span", {
                                                                            "data-lov-id": "src/pages/Faculty.tsx:164:28",
                                                                            "data-lov-name": "span",
                                                                            "data-component-path": "src/pages/Faculty.tsx",
                                                                            "data-component-line": "164",
                                                                            "data-component-file": "Faculty.tsx",
                                                                            "data-component-name": "span",
                                                                            "data-component-content": "%7B%22text%22%3A%22Subject%3A%22%2C%22className%22%3A%22font-medium%20mr-2%22%7D",
                                                                            className: "font-medium mr-2",
                                                                            children: "Subject:"
                                                                        }, void 0, false, {
                                                                            fileName: "/home/sjrsh916/public_html/src/pages/Faculty.tsx",
                                                                            lineNumber: 164,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ _jsxDEV("span", {
                                                                            "data-lov-id": "src/pages/Faculty.tsx:165:28",
                                                                            "data-lov-name": "span",
                                                                            "data-component-path": "src/pages/Faculty.tsx",
                                                                            "data-component-line": "165",
                                                                            "data-component-file": "Faculty.tsx",
                                                                            "data-component-name": "span",
                                                                            "data-component-content": "%7B%7D",
                                                                            children: member.subject
                                                                        }, void 0, false, {
                                                                            fileName: "/home/sjrsh916/public_html/src/pages/Faculty.tsx",
                                                                            lineNumber: 165,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "/home/sjrsh916/public_html/src/pages/Faculty.tsx",
                                                                    lineNumber: 163,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                    "data-lov-id": "src/pages/Faculty.tsx:167:26",
                                                                    "data-lov-name": "div",
                                                                    "data-component-path": "src/pages/Faculty.tsx",
                                                                    "data-component-line": "167",
                                                                    "data-component-file": "Faculty.tsx",
                                                                    "data-component-name": "div",
                                                                    "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20text-sm%20text-elegant-light%22%7D",
                                                                    className: "flex items-center text-sm text-elegant-light",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxDEV("span", {
                                                                            "data-lov-id": "src/pages/Faculty.tsx:168:28",
                                                                            "data-lov-name": "span",
                                                                            "data-component-path": "src/pages/Faculty.tsx",
                                                                            "data-component-line": "168",
                                                                            "data-component-file": "Faculty.tsx",
                                                                            "data-component-name": "span",
                                                                            "data-component-content": "%7B%22text%22%3A%22Experience%3A%22%2C%22className%22%3A%22font-medium%20mr-2%22%7D",
                                                                            className: "font-medium mr-2",
                                                                            children: "Experience:"
                                                                        }, void 0, false, {
                                                                            fileName: "/home/sjrsh916/public_html/src/pages/Faculty.tsx",
                                                                            lineNumber: 168,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ _jsxDEV("span", {
                                                                            "data-lov-id": "src/pages/Faculty.tsx:169:28",
                                                                            "data-lov-name": "span",
                                                                            "data-component-path": "src/pages/Faculty.tsx",
                                                                            "data-component-line": "169",
                                                                            "data-component-file": "Faculty.tsx",
                                                                            "data-component-name": "span",
                                                                            "data-component-content": "%7B%7D",
                                                                            children: member.experience
                                                                        }, void 0, false, {
                                                                            fileName: "/home/sjrsh916/public_html/src/pages/Faculty.tsx",
                                                                            lineNumber: 169,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "/home/sjrsh916/public_html/src/pages/Faculty.tsx",
                                                                    lineNumber: 167,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                    "data-lov-id": "src/pages/Faculty.tsx:171:26",
                                                                    "data-lov-name": "div",
                                                                    "data-component-path": "src/pages/Faculty.tsx",
                                                                    "data-component-line": "171",
                                                                    "data-component-file": "Faculty.tsx",
                                                                    "data-component-name": "div",
                                                                    "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20text-sm%20text-elegant-light%22%7D",
                                                                    className: "flex items-center text-sm text-elegant-light",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxDEV("span", {
                                                                            "data-lov-id": "src/pages/Faculty.tsx:172:28",
                                                                            "data-lov-name": "span",
                                                                            "data-component-path": "src/pages/Faculty.tsx",
                                                                            "data-component-line": "172",
                                                                            "data-component-file": "Faculty.tsx",
                                                                            "data-component-name": "span",
                                                                            "data-component-content": "%7B%22text%22%3A%22Qualification%3A%22%2C%22className%22%3A%22font-medium%20mr-2%22%7D",
                                                                            className: "font-medium mr-2",
                                                                            children: "Qualification:"
                                                                        }, void 0, false, {
                                                                            fileName: "/home/sjrsh916/public_html/src/pages/Faculty.tsx",
                                                                            lineNumber: 172,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ _jsxDEV("span", {
                                                                            "data-lov-id": "src/pages/Faculty.tsx:173:28",
                                                                            "data-lov-name": "span",
                                                                            "data-component-path": "src/pages/Faculty.tsx",
                                                                            "data-component-line": "173",
                                                                            "data-component-file": "Faculty.tsx",
                                                                            "data-component-name": "span",
                                                                            "data-component-content": "%7B%7D",
                                                                            children: member.qualification
                                                                        }, void 0, false, {
                                                                            fileName: "/home/sjrsh916/public_html/src/pages/Faculty.tsx",
                                                                            lineNumber: 173,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "/home/sjrsh916/public_html/src/pages/Faculty.tsx",
                                                                    lineNumber: 171,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV("p", {
                                                                    "data-lov-id": "src/pages/Faculty.tsx:175:26",
                                                                    "data-lov-name": "p",
                                                                    "data-component-path": "src/pages/Faculty.tsx",
                                                                    "data-component-line": "175",
                                                                    "data-component-file": "Faculty.tsx",
                                                                    "data-component-name": "p",
                                                                    "data-component-content": "%7B%22text%22%3A%22%5C%22%20%5C%22%22%2C%22className%22%3A%22text-sm%20text-elegant-light%20mt-3%20italic%22%7D",
                                                                    className: "text-sm text-elegant-light mt-3 italic",
                                                                    children: [
                                                                        '"',
                                                                        member.description,
                                                                        '"'
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "/home/sjrsh916/public_html/src/pages/Faculty.tsx",
                                                                    lineNumber: 175,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/Faculty.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/Faculty.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/Faculty.tsx",
                                                lineNumber: 140,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/Faculty.tsx",
                                            lineNumber: 133,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, member.id, true, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/Faculty.tsx",
                                    lineNumber: 102,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/Faculty.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/Faculty.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/Faculty.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/sjrsh916/public_html/src/pages/Faculty.tsx",
            lineNumber: 91,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/pages/Faculty.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
};
_s(Faculty, "ou8t+V0qTjLIVELAtXpDVfsXnRA=");
_c = Faculty;
export default Faculty;
var _c;
$RefreshReg$(_c, "Faculty");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/pages/Faculty.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/pages/Faculty.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3Rm5DO0dBL0tNSjtLQUFBQTtBQWlMTixlQUFlQSxRQUFPIiwibmFtZXMiOlsiTGF5b3V0IiwiUGFnZUJhbm5lciIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkdyYWR1YXRpb25DYXAiLCJYIiwidXNlU3RhdGUiLCJpbmRpYW5GYWN1bHR5R3JvdXAiLCJmYWN1bHR5UHJpeWFTaGFybWEiLCJmYWN1bHR5UmFqZXNoS3VtYXIiLCJmYWN1bHR5U3VuaXRhUmVkZHkiLCJmYWN1bHR5QXJqdW5QYXRlbCIsImZhY3VsdHlLYXZ5YU5haXIiLCJmYWN1bHR5U3VyZXNoR3VwdGEiLCJGYWN1bHR5IiwiZXhwYW5kZWRDYXJkIiwic2V0RXhwYW5kZWRDYXJkIiwiZmFjdWx0eSIsImlkIiwibmFtZSIsInN1YmplY3QiLCJkZXNpZ25hdGlvbiIsInF1YWxpZmljYXRpb24iLCJleHBlcmllbmNlIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsImhhbmRsZUNhcmRDbGljayIsImZhY3VsdHlJZCIsImRhdGEtbG92LWlkIiwiZGF0YS1sb3YtbmFtZSIsImRhdGEtY29tcG9uZW50LXBhdGgiLCJkYXRhLWNvbXBvbmVudC1saW5lIiwiZGF0YS1jb21wb25lbnQtZmlsZSIsImRhdGEtY29tcG9uZW50LW5hbWUiLCJkYXRhLWNvbXBvbmVudC1jb250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJzdWJ0aXRsZSIsImJhY2tncm91bmRJbWFnZSIsInNlY3Rpb24iLCJtYXAiLCJtZW1iZXIiLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwiYWx0IiwiaDMiLCJwIiwiaDQiLCJidXR0b24iLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwic3BhbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJGYWN1bHR5LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBQYWdlQmFubmVyIGZyb20gXCJAL2NvbXBvbmVudHMvUGFnZUJhbm5lclwiO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcbmltcG9ydCB7IEdyYWR1YXRpb25DYXAsIFggfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGluZGlhbkZhY3VsdHlHcm91cCBmcm9tIFwiQC9hc3NldHMvaW5kaWFuLWZhY3VsdHktZ3JvdXAuanBnXCI7XG5pbXBvcnQgZmFjdWx0eVByaXlhU2hhcm1hIGZyb20gXCJAL2Fzc2V0cy9mYWN1bHR5LXByaXlhLXNoYXJtYS5qcGdcIjtcbmltcG9ydCBmYWN1bHR5UmFqZXNoS3VtYXIgZnJvbSBcIkAvYXNzZXRzL2ZhY3VsdHktcmFqZXNoLWt1bWFyLmpwZ1wiO1xuaW1wb3J0IGZhY3VsdHlTdW5pdGFSZWRkeSBmcm9tIFwiQC9hc3NldHMvZmFjdWx0eS1zdW5pdGEtcmVkZHkuanBnXCI7XG5pbXBvcnQgZmFjdWx0eUFyanVuUGF0ZWwgZnJvbSBcIkAvYXNzZXRzL2ZhY3VsdHktYXJqdW4tcGF0ZWwuanBnXCI7XG5pbXBvcnQgZmFjdWx0eUthdnlhTmFpciBmcm9tIFwiQC9hc3NldHMvZmFjdWx0eS1rYXZ5YS1uYWlyLmpwZ1wiO1xuaW1wb3J0IGZhY3VsdHlTdXJlc2hHdXB0YSBmcm9tIFwiQC9hc3NldHMvZmFjdWx0eS1zdXJlc2gtZ3VwdGEuanBnXCI7XG5cbmNvbnN0IEZhY3VsdHkgPSAoKSA9PiB7XG4gIGNvbnN0IFtleHBhbmRlZENhcmQsIHNldEV4cGFuZGVkQ2FyZF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBmYWN1bHR5ID0gW1xuICAgIHtcbiAgICAgIGlkOiBcInByaXlhLXNoYXJtYVwiLFxuICAgICAgbmFtZTogXCJEci4gUHJpeWEgU2hhcm1hXCIsXG4gICAgICBzdWJqZWN0OiBcIkVuZ2xpc2ggTGl0ZXJhdHVyZVwiLFxuICAgICAgZGVzaWduYXRpb246IFwiRGVwYXJ0bWVudCBIZWFkIC0gTGFuZ3VhZ2VzXCIsXG4gICAgICBxdWFsaWZpY2F0aW9uOiBcIlBoLkQuIEVuZ2xpc2hcIixcbiAgICAgIGV4cGVyaWVuY2U6IFwiMTUgeWVhcnNcIixcbiAgICAgIGltYWdlOiBmYWN1bHR5UHJpeWFTaGFybWEsXG4gICAgICBkZXNjcmlwdGlvbjogXCJQYXNzaW9uYXRlIGVkdWNhdG9yIHdpdGggZXhwZXJ0aXNlIGluIGNvbnRlbXBvcmFyeSBsaXRlcmF0dXJlIGFuZCBjcmVhdGl2ZSB3cml0aW5nLlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogXCJyYWplc2gta3VtYXJcIixcbiAgICAgIG5hbWU6IFwiUHJvZi4gUmFqZXNoIEt1bWFyXCIsXG4gICAgICBzdWJqZWN0OiBcIk1hdGhlbWF0aWNzXCIsXG4gICAgICBkZXNpZ25hdGlvbjogXCJTZW5pb3IgRmFjdWx0eSAtIE1hdGhlbWF0aWNzXCIsXG4gICAgICBxdWFsaWZpY2F0aW9uOiBcIk0uU2MuIE1hdGhlbWF0aWNzXCIsXG4gICAgICBleHBlcmllbmNlOiBcIjIwIHllYXJzXCIsXG4gICAgICBpbWFnZTogZmFjdWx0eVJhamVzaEt1bWFyLFxuICAgICAgZGVzY3JpcHRpb246IFwiRXhwZXJ0IGluIGFkdmFuY2VkIG1hdGhlbWF0aWNzIHdpdGggYSBmb2N1cyBvbiBwcm9ibGVtLXNvbHZpbmcgbWV0aG9kb2xvZ2llcy5cIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IFwiYW5pdGEtcmVkZHlcIixcbiAgICAgIG5hbWU6IFwiRHIuIEFuaXRhIFJlZGR5XCIsXG4gICAgICBzdWJqZWN0OiBcIlBoeXNpY3NcIixcbiAgICAgIGRlc2lnbmF0aW9uOiBcIkRlcGFydG1lbnQgSGVhZCAtIFNjaWVuY2VzXCIsXG4gICAgICBxdWFsaWZpY2F0aW9uOiBcIlBoLkQuIFBoeXNpY3NcIixcbiAgICAgIGV4cGVyaWVuY2U6IFwiMTIgeWVhcnNcIixcbiAgICAgIGltYWdlOiBmYWN1bHR5U3VuaXRhUmVkZHksXG4gICAgICBkZXNjcmlwdGlvbjogXCJSZXNlYXJjaC1mb2N1c2VkIHBoeXNpY2lzdCBzcGVjaWFsaXppbmcgaW4gcXVhbnR1bSBtZWNoYW5pY3MgYW5kIGxhYm9yYXRvcnkgaW5ub3ZhdGlvbi5cIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IFwic3VyZXNoLW1lbm9uXCIsXG4gICAgICBuYW1lOiBcIlByb2YuIFN1cmVzaCBNZW5vblwiLFxuICAgICAgc3ViamVjdDogXCJDaGVtaXN0cnlcIixcbiAgICAgIGRlc2lnbmF0aW9uOiBcIlNlbmlvciBGYWN1bHR5IC0gQ2hlbWlzdHJ5XCIsXG4gICAgICBxdWFsaWZpY2F0aW9uOiBcIk0uU2MuIENoZW1pc3RyeVwiLFxuICAgICAgZXhwZXJpZW5jZTogXCIxOCB5ZWFyc1wiLFxuICAgICAgaW1hZ2U6IGZhY3VsdHlBcmp1blBhdGVsLFxuICAgICAgZGVzY3JpcHRpb246IFwiRXhwZXJpZW5jZWQgY2hlbWlzdHJ5IGVkdWNhdG9yIHdpdGggZXhwZXJ0aXNlIGluIG9yZ2FuaWMgYW5kIGFuYWx5dGljYWwgY2hlbWlzdHJ5LlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogXCJtZWVyYS1rcmlzaG5hXCIsXG4gICAgICBuYW1lOiBcIk1zLiBNZWVyYSBLcmlzaG5hXCIsXG4gICAgICBzdWJqZWN0OiBcIlNvY2lhbCBTdHVkaWVzXCIsXG4gICAgICBkZXNpZ25hdGlvbjogXCJGYWN1bHR5IC0gU29jaWFsIFNjaWVuY2VzXCIsXG4gICAgICBxdWFsaWZpY2F0aW9uOiBcIk0uQS4gSGlzdG9yeVwiLFxuICAgICAgZXhwZXJpZW5jZTogXCIxMCB5ZWFyc1wiLFxuICAgICAgaW1hZ2U6IGZhY3VsdHlLYXZ5YU5haXIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJEeW5hbWljIGVkdWNhdG9yIHBhc3Npb25hdGUgYWJvdXQgbWFraW5nIGhpc3RvcnkgYW5kIGdlb2dyYXBoeSBlbmdhZ2luZyBmb3Igc3R1ZGVudHMuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiBcImFtaXQtc2hhaFwiLFxuICAgICAgbmFtZTogXCJNci4gQW1pdCBTaGFoXCIsXG4gICAgICBzdWJqZWN0OiBcIkNvbXB1dGVyIFNjaWVuY2VcIixcbiAgICAgIGRlc2lnbmF0aW9uOiBcIkZhY3VsdHkgLSBUZWNobm9sb2d5XCIsXG4gICAgICBxdWFsaWZpY2F0aW9uOiBcIkIuVGVjaCBDb21wdXRlciBTY2llbmNlXCIsXG4gICAgICBleHBlcmllbmNlOiBcIjggeWVhcnNcIixcbiAgICAgIGltYWdlOiBmYWN1bHR5U3VyZXNoR3VwdGEsXG4gICAgICBkZXNjcmlwdGlvbjogXCJUZWNoIGVudGh1c2lhc3QgZm9jdXNpbmcgb24gcHJvZ3JhbW1pbmcgZnVuZGFtZW50YWxzIGFuZCBkaWdpdGFsIGxpdGVyYWN5LlwiXG4gICAgfVxuICBdO1xuXG4gIGNvbnN0IGhhbmRsZUNhcmRDbGljayA9IChmYWN1bHR5SWQ6IHN0cmluZykgPT4ge1xuICAgIGlmIChleHBhbmRlZENhcmQgPT09IGZhY3VsdHlJZCkge1xuICAgICAgc2V0RXhwYW5kZWRDYXJkKG51bGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFeHBhbmRlZENhcmQoZmFjdWx0eUlkKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctYmFja2dyb3VuZFwiPlxuICAgICAgICA8UGFnZUJhbm5lclxuICAgICAgICAgIHRpdGxlPVwiT3VyIEZhY3VsdHlcIlxuICAgICAgICAgIHN1YnRpdGxlPVwiTWVldCBvdXIgZGVkaWNhdGVkIGVkdWNhdG9ycyBjb21taXR0ZWQgdG8gbnVydHVyaW5nIHlvdW5nIG1pbmRzXCJcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U9e2luZGlhbkZhY3VsdHlHcm91cH1cbiAgICAgICAgLz5cblxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC04XCI+XG4gICAgICAgICAgICAgIHtmYWN1bHR5Lm1hcCgobWVtYmVyKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e21lbWJlci5pZH0gY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgIDxDYXJkIFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgaG92ZXI6c2hhZG93LXhsIGhvdmVyOi10cmFuc2xhdGUteS0yIGFuaW1hdGUtZmFkZS1pbiAke1xuICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkQ2FyZCA9PT0gbWVtYmVyLmlkID8gJ3JpbmctMiByaW5nLXNjaG9vbC1nb2xkIHNoYWRvdy0yeGwnIDogJydcbiAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNhcmRDbGljayhtZW1iZXIuaWQpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC02IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTMyIGgtMzIgbXgtYXV0byBtYi00IHJvdW5kZWQtZnVsbCBvdmVyZmxvdy1oaWRkZW4gcmluZy00IHJpbmctc2Nob29sLWxpZ2h0LWJyb3duLzIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e21lbWJlci5pbWFnZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17bWVtYmVyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCBob3ZlcjpzY2FsZS0xMTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gbWItMlwiPnttZW1iZXIubmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2Nob29sLWdvbGQgZm9udC1zZW1pYm9sZCBtYi0yXCI+e21lbWJlci5zdWJqZWN0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmFkdWF0aW9uQ2FwIGNsYXNzTmFtZT1cImgtNCB3LTQgdGV4dC1lbGVnYW50LWxpZ2h0IG1yLTFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1lbGVnYW50LWxpZ2h0IHRleHQtc21cIj57bWVtYmVyLnF1YWxpZmljYXRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZWxlZ2FudC1saWdodCB0ZXh0LXNtXCI+e21lbWJlci5leHBlcmllbmNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICB7LyogQ2xpY2sgaW5kaWNhdG9yICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LXhzIHRleHQtc2Nob29sLWdvbGQvNzAgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIENsaWNrIHRvIHtleHBhbmRlZENhcmQgPT09IG1lbWJlci5pZCA/ICdjb2xsYXBzZScgOiAndmlldyBkZXRhaWxzJ31cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cblxuICAgICAgICAgICAgICAgICAgey8qIEV4cGFuZGVkIERldGFpbHMgUGFuZWwgKi99XG4gICAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSB0b3AtZnVsbCBsZWZ0LTAgcmlnaHQtMCB6LTEwIG10LTIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIGVhc2Utb3V0IHRyYW5zZm9ybSAke1xuICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkQ2FyZCA9PT0gbWVtYmVyLmlkIFxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnb3BhY2l0eS0xMDAgdHJhbnNsYXRlLXktMCB2aXNpYmxlJyBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ29wYWNpdHktMCAtdHJhbnNsYXRlLXktNCBpbnZpc2libGUnXG4gICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1iciBmcm9tLXdoaXRlIHRvLWFtYmVyLTUwIGJvcmRlci1zY2hvb2wtZ29sZC8zMCBzaGFkb3cteGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0YXJ0IG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gbWItMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lbWJlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zY2hvb2wtZ29sZCBmb250LXNlbWlib2xkIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZW1iZXIuZGVzaWduYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXhwYW5kZWRDYXJkKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zY2hvb2wtYnJvd24vNjAgaG92ZXI6dGV4dC1zY2hvb2wtYnJvd24gdHJhbnNpdGlvbi1jb2xvcnMgcC0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxYIGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtc20gdGV4dC1lbGVnYW50LWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gbXItMlwiPlN1YmplY3Q6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnttZW1iZXIuc3ViamVjdH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtc20gdGV4dC1lbGVnYW50LWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gbXItMlwiPkV4cGVyaWVuY2U6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnttZW1iZXIuZXhwZXJpZW5jZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtc20gdGV4dC1lbGVnYW50LWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gbXItMlwiPlF1YWxpZmljYXRpb246PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnttZW1iZXIucXVhbGlmaWNhdGlvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZWxlZ2FudC1saWdodCBtdC0zIGl0YWxpY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwie21lbWJlci5kZXNjcmlwdGlvbn1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGYWN1bHR5O1xuIl0sImZpbGUiOiIvaG9tZS9zanJzaDkxNi9wdWJsaWNfaHRtbC9zcmMvcGFnZXMvRmFjdWx0eS50c3gifQ==