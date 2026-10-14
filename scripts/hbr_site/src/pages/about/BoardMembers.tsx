import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/about/BoardMembers.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import Layout from "/src/components/Layout.tsx";
import PageBanner from "/src/components/PageBanner.tsx";
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { Users, Award, Heart, GraduationCap, Target, Shield, Crown, Building } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
import boardMeeting from "/src/assets/board-meeting.jpg?import";
const BoardMembers = ()=>{
    const boardMembers = [
        {
            name: "Dr. S. Vishwanathan",
            position: "Chairperson",
            background: "Former Vice-Chancellor, Karnataka University",
            expertise: "Educational Administration & Policy",
            tenure: "2018 - Present",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        },
        {
            name: "Mrs. Kamala Devi",
            position: "Vice Chairperson",
            background: "Retired Principal, Government College",
            expertise: "Academic Excellence & Quality Assurance",
            tenure: "2019 - Present",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        },
        {
            name: "Mr. Vishwanath Reddy",
            position: "Secretary",
            background: "Educational Trust Management",
            expertise: "Strategic Planning & Development",
            tenure: "2015 - Present",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        },
        {
            name: "CA Rajesh Gupta",
            position: "Treasurer",
            background: "Chartered Accountant & Financial Advisor",
            expertise: "Financial Management & Audit",
            tenure: "2017 - Present",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        },
        {
            name: "Dr. Priya Menon",
            position: "Academic Advisory Member",
            background: "Professor of Education, Bengaluru University",
            expertise: "Curriculum Development & Research",
            tenure: "2020 - Present",
            image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        },
        {
            name: "Mr. Sunil Krishna",
            position: "Community Representative",
            background: "Social Worker & Education Advocate",
            expertise: "Community Engagement & Outreach",
            tenure: "2019 - Present",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
        }
    ];
    const responsibilities = [
        {
            icon: Target,
            title: "Strategic Direction",
            description: "Setting long-term vision and mission for the institution's growth and development"
        },
        {
            icon: Shield,
            title: "Policy Governance",
            description: "Establishing policies that ensure quality education and institutional integrity"
        },
        {
            icon: Award,
            title: "Quality Assurance",
            description: "Monitoring academic standards and ensuring continuous improvement in all areas"
        },
        {
            icon: Building,
            title: "Infrastructure Development",
            description: "Overseeing campus development and facility enhancement projects"
        }
    ];
    return /*#__PURE__*/ _jsxDEV(Layout, {
        "data-lov-id": "src/pages/about/BoardMembers.tsx:83:4",
        "data-lov-name": "Layout",
        "data-component-path": "src/pages/about/BoardMembers.tsx",
        "data-component-line": "83",
        "data-component-file": "BoardMembers.tsx",
        "data-component-name": "Layout",
        "data-component-content": "%7B%7D",
        children: /*#__PURE__*/ _jsxDEV("div", {
            "data-lov-id": "src/pages/about/BoardMembers.tsx:84:6",
            "data-lov-name": "div",
            "data-component-path": "src/pages/about/BoardMembers.tsx",
            "data-component-line": "84",
            "data-component-file": "BoardMembers.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22min-h-screen%20bg-background%22%7D",
            className: "min-h-screen bg-background",
            children: [
                /*#__PURE__*/ _jsxDEV(PageBanner, {
                    "data-lov-id": "src/pages/about/BoardMembers.tsx:85:8",
                    "data-lov-name": "PageBanner",
                    "data-component-path": "src/pages/about/BoardMembers.tsx",
                    "data-component-line": "85",
                    "data-component-file": "BoardMembers.tsx",
                    "data-component-name": "PageBanner",
                    "data-component-content": "%7B%7D",
                    title: "Board of Members",
                    subtitle: "Distinguished leaders who shape the strategic direction and uphold our mission",
                    backgroundImage: boardMeeting
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("section", {
                    "data-lov-id": "src/pages/about/BoardMembers.tsx:92:8",
                    "data-lov-name": "section",
                    "data-component-path": "src/pages/about/BoardMembers.tsx",
                    "data-component-line": "92",
                    "data-component-file": "BoardMembers.tsx",
                    "data-component-name": "section",
                    "data-component-content": "%7B%22className%22%3A%22py-16%22%7D",
                    className: "py-16",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/about/BoardMembers.tsx:93:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/about/BoardMembers.tsx",
                        "data-component-line": "93",
                        "data-component-file": "BoardMembers.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                        className: "container mx-auto px-4",
                        children: /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/about/BoardMembers.tsx:94:12",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/about/BoardMembers.tsx",
                            "data-component-line": "94",
                            "data-component-file": "BoardMembers.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22max-w-4xl%20mx-auto%20text-center%20mb-16%22%7D",
                            className: "max-w-4xl mx-auto text-center mb-16",
                            children: [
                                /*#__PURE__*/ _jsxDEV("h2", {
                                    "data-lov-id": "src/pages/about/BoardMembers.tsx:95:14",
                                    "data-lov-name": "h2",
                                    "data-component-path": "src/pages/about/BoardMembers.tsx",
                                    "data-component-line": "95",
                                    "data-component-file": "BoardMembers.tsx",
                                    "data-component-name": "h2",
                                    "data-component-content": "%7B%22text%22%3A%22Governance%20%26%20Leadership%22%2C%22className%22%3A%22text-4xl%20font-bold%20text-school-brown%20mb-6%22%7D",
                                    className: "text-4xl font-bold text-school-brown mb-6",
                                    children: "Governance & Leadership"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                    lineNumber: 95,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    "data-lov-id": "src/pages/about/BoardMembers.tsx:96:14",
                                    "data-lov-name": "p",
                                    "data-component-path": "src/pages/about/BoardMembers.tsx",
                                    "data-component-line": "96",
                                    "data-component-file": "BoardMembers.tsx",
                                    "data-component-name": "p",
                                    "data-component-content": "%7B%22text%22%3A%22The%20SJRPS-HBR%20Board%20consists%20of%20respected%20educationists%20and%20community%20leaders%20who%20shape%20the%20strategic%20%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20direction%20and%20uphold%20the%20mission%20of%20our%20institution.%20Their%20wisdom%20and%20oversight%20ensure%20our%20school%20%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20continuously%20grows%20with%20purpose%20and%20integrity%2C%20maintaining%20the%20highest%20standards%20of%20educational%20%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20excellence%20while%20staying%20true%20to%20our%20core%20values.%22%2C%22className%22%3A%22text-lg%20text-elegant%20leading-relaxed%22%7D",
                                    className: "text-lg text-elegant leading-relaxed",
                                    children: "The SJRPS-HBR Board consists of respected educationists and community leaders who shape the strategic direction and uphold the mission of our institution. Their wisdom and oversight ensure our school continuously grows with purpose and integrity, maintaining the highest standards of educational excellence while staying true to our core values."
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("section", {
                    "data-lov-id": "src/pages/about/BoardMembers.tsx:107:8",
                    "data-lov-name": "section",
                    "data-component-path": "src/pages/about/BoardMembers.tsx",
                    "data-component-line": "107",
                    "data-component-file": "BoardMembers.tsx",
                    "data-component-name": "section",
                    "data-component-content": "%7B%22className%22%3A%22py-16%20bg-gradient-to-b%20from-amber-50%20to-orange-50%22%7D",
                    className: "py-16 bg-gradient-to-b from-amber-50 to-orange-50",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/about/BoardMembers.tsx:108:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/about/BoardMembers.tsx",
                        "data-component-line": "108",
                        "data-component-file": "BoardMembers.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                        className: "container mx-auto px-4",
                        children: /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/about/BoardMembers.tsx:109:12",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/about/BoardMembers.tsx",
                            "data-component-line": "109",
                            "data-component-file": "BoardMembers.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-2%20lg%3Agrid-cols-3%20gap-8%22%7D",
                            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                            children: boardMembers.map((member, index)=>/*#__PURE__*/ _jsxDEV(Card, {
                                    "data-lov-id": "src/pages/about/BoardMembers.tsx:111:16",
                                    "data-lov-name": "Card",
                                    "data-component-path": "src/pages/about/BoardMembers.tsx",
                                    "data-component-line": "111",
                                    "data-component-file": "BoardMembers.tsx",
                                    "data-component-name": "Card",
                                    "data-component-content": "%7B%22className%22%3A%22hover%3Ashadow-xl%20transition-all%20duration-300%20hover-scale%20animate-fade-in%20bg-white%20group%22%7D",
                                    className: "hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in bg-white group",
                                    children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                        "data-lov-id": "src/pages/about/BoardMembers.tsx:112:18",
                                        "data-lov-name": "CardContent",
                                        "data-component-path": "src/pages/about/BoardMembers.tsx",
                                        "data-component-line": "112",
                                        "data-component-file": "BoardMembers.tsx",
                                        "data-component-name": "CardContent",
                                        "data-component-content": "%7B%22className%22%3A%22p-0%22%7D",
                                        className: "p-0",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/about/BoardMembers.tsx:113:20",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                "data-component-line": "113",
                                                "data-component-file": "BoardMembers.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22relative%20overflow-hidden%22%7D",
                                                className: "relative overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("img", {
                                                        "data-lov-id": "src/pages/about/BoardMembers.tsx:114:22",
                                                        "data-lov-name": "img",
                                                        "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                        "data-component-line": "114",
                                                        "data-component-file": "BoardMembers.tsx",
                                                        "data-component-name": "img",
                                                        "data-component-content": "%7B%22className%22%3A%22w-full%20h-64%20object-cover%20transition-transform%20duration-300%20group-hover%3Ascale-105%22%7D",
                                                        src: member.image,
                                                        alt: member.name,
                                                        className: "w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/pages/about/BoardMembers.tsx:119:22",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                        "data-component-line": "119",
                                                        "data-component-file": "BoardMembers.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%22className%22%3A%22absolute%20inset-0%20bg-gradient-to-t%20from-black%2F60%20via-transparent%20to-transparent%20opacity-0%20group-hover%3Aopacity-100%20transition-opacity%20duration-300%22%7D",
                                                        className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/pages/about/BoardMembers.tsx:120:22",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                        "data-component-line": "120",
                                                        "data-component-file": "BoardMembers.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%22className%22%3A%22absolute%20bottom-4%20left-4%20right-4%20text-white%20opacity-0%20group-hover%3Aopacity-100%20transition-opacity%20duration-300%22%7D",
                                                        className: "absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                                        children: /*#__PURE__*/ _jsxDEV("p", {
                                                            "data-lov-id": "src/pages/about/BoardMembers.tsx:121:24",
                                                            "data-lov-name": "p",
                                                            "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                            "data-component-line": "121",
                                                            "data-component-file": "BoardMembers.tsx",
                                                            "data-component-name": "p",
                                                            "data-component-content": "%7B%22className%22%3A%22text-sm%20font-medium%22%7D",
                                                            className: "text-sm font-medium",
                                                            children: member.expertise
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                            lineNumber: 121,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/pages/about/BoardMembers.tsx:124:22",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                        "data-component-line": "124",
                                                        "data-component-file": "BoardMembers.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%22className%22%3A%22absolute%20top-4%20right-4%20bg-school-gold%20text-white%20px-3%20py-1%20rounded-full%20text-xs%20font-semibold%22%7D",
                                                        className: "absolute top-4 right-4 bg-school-gold text-white px-3 py-1 rounded-full text-xs font-semibold",
                                                        children: member.position
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                lineNumber: 113,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/about/BoardMembers.tsx:128:20",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                "data-component-line": "128",
                                                "data-component-file": "BoardMembers.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22p-6%22%7D",
                                                className: "p-6",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("h3", {
                                                        "data-lov-id": "src/pages/about/BoardMembers.tsx:129:22",
                                                        "data-lov-name": "h3",
                                                        "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                        "data-component-line": "129",
                                                        "data-component-file": "BoardMembers.tsx",
                                                        "data-component-name": "h3",
                                                        "data-component-content": "%7B%22className%22%3A%22text-xl%20font-bold%20text-school-brown%20mb-2%22%7D",
                                                        className: "text-xl font-bold text-school-brown mb-2",
                                                        children: member.name
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("p", {
                                                        "data-lov-id": "src/pages/about/BoardMembers.tsx:130:22",
                                                        "data-lov-name": "p",
                                                        "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                        "data-component-line": "130",
                                                        "data-component-file": "BoardMembers.tsx",
                                                        "data-component-name": "p",
                                                        "data-component-content": "%7B%22className%22%3A%22text-school-gold%20font-semibold%20mb-2%22%7D",
                                                        className: "text-school-gold font-semibold mb-2",
                                                        children: member.position
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("p", {
                                                        "data-lov-id": "src/pages/about/BoardMembers.tsx:131:22",
                                                        "data-lov-name": "p",
                                                        "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                        "data-component-line": "131",
                                                        "data-component-file": "BoardMembers.tsx",
                                                        "data-component-name": "p",
                                                        "data-component-content": "%7B%22className%22%3A%22text-elegant-light%20text-sm%20mb-3%20leading-relaxed%22%7D",
                                                        className: "text-elegant-light text-sm mb-3 leading-relaxed",
                                                        children: member.background
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/pages/about/BoardMembers.tsx:134:22",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                        "data-component-line": "134",
                                                        "data-component-file": "BoardMembers.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%22className%22%3A%22space-y-2%20text-sm%22%7D",
                                                        className: "space-y-2 text-sm",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("div", {
                                                                "data-lov-id": "src/pages/about/BoardMembers.tsx:135:24",
                                                                "data-lov-name": "div",
                                                                "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                                "data-component-line": "135",
                                                                "data-component-file": "BoardMembers.tsx",
                                                                "data-component-name": "div",
                                                                "data-component-content": "%7B%22className%22%3A%22bg-gradient-to-r%20from-amber-50%20to-orange-50%20p-3%20rounded-lg%20border-l-4%20border-school-gold%22%7D",
                                                                className: "bg-gradient-to-r from-amber-50 to-orange-50 p-3 rounded-lg border-l-4 border-school-gold",
                                                                children: [
                                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                                        "data-lov-id": "src/pages/about/BoardMembers.tsx:136:26",
                                                                        "data-lov-name": "div",
                                                                        "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                                        "data-component-line": "136",
                                                                        "data-component-file": "BoardMembers.tsx",
                                                                        "data-component-name": "div",
                                                                        "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20gap-2%20mb-1%22%7D",
                                                                        className: "flex items-center gap-2 mb-1",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsxDEV(Target, {
                                                                                "data-lov-id": "src/pages/about/BoardMembers.tsx:137:28",
                                                                                "data-lov-name": "Target",
                                                                                "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                                                "data-component-line": "137",
                                                                                "data-component-file": "BoardMembers.tsx",
                                                                                "data-component-name": "Target",
                                                                                "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%20text-school-gold%22%7D",
                                                                                className: "h-4 w-4 text-school-gold"
                                                                            }, void 0, false, {
                                                                                fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                                                lineNumber: 137,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ _jsxDEV("span", {
                                                                                "data-lov-id": "src/pages/about/BoardMembers.tsx:138:28",
                                                                                "data-lov-name": "span",
                                                                                "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                                                "data-component-line": "138",
                                                                                "data-component-file": "BoardMembers.tsx",
                                                                                "data-component-name": "span",
                                                                                "data-component-content": "%7B%22text%22%3A%22Expertise%22%2C%22className%22%3A%22font-medium%20text-school-brown%22%7D",
                                                                                className: "font-medium text-school-brown",
                                                                                children: "Expertise"
                                                                            }, void 0, false, {
                                                                                fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                                                lineNumber: 138,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                                        lineNumber: 136,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ _jsxDEV("p", {
                                                                        "data-lov-id": "src/pages/about/BoardMembers.tsx:140:26",
                                                                        "data-lov-name": "p",
                                                                        "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                                        "data-component-line": "140",
                                                                        "data-component-file": "BoardMembers.tsx",
                                                                        "data-component-name": "p",
                                                                        "data-component-content": "%7B%22className%22%3A%22text-xs%20text-elegant-light%22%7D",
                                                                        className: "text-xs text-elegant-light",
                                                                        children: member.expertise
                                                                    }, void 0, false, {
                                                                        fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                                        lineNumber: 140,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                                lineNumber: 135,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("div", {
                                                                "data-lov-id": "src/pages/about/BoardMembers.tsx:142:24",
                                                                "data-lov-name": "div",
                                                                "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                                "data-component-line": "142",
                                                                "data-component-file": "BoardMembers.tsx",
                                                                "data-component-name": "div",
                                                                "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20gap-2%20text-elegant-light%22%7D",
                                                                className: "flex items-center gap-2 text-elegant-light",
                                                                children: [
                                                                    /*#__PURE__*/ _jsxDEV(Crown, {
                                                                        "data-lov-id": "src/pages/about/BoardMembers.tsx:143:26",
                                                                        "data-lov-name": "Crown",
                                                                        "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                                        "data-component-line": "143",
                                                                        "data-component-file": "BoardMembers.tsx",
                                                                        "data-component-name": "Crown",
                                                                        "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%20text-school-gold%22%7D",
                                                                        className: "h-4 w-4 text-school-gold"
                                                                    }, void 0, false, {
                                                                        fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                                        lineNumber: 143,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ _jsxDEV("span", {
                                                                        "data-lov-id": "src/pages/about/BoardMembers.tsx:144:26",
                                                                        "data-lov-name": "span",
                                                                        "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                                        "data-component-line": "144",
                                                                        "data-component-file": "BoardMembers.tsx",
                                                                        "data-component-name": "span",
                                                                        "data-component-content": "%7B%22text%22%3A%22Tenure%3A%22%2C%22className%22%3A%22text-xs%22%7D",
                                                                        className: "text-xs",
                                                                        children: [
                                                                            "Tenure: ",
                                                                            member.tenure
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                                        lineNumber: 144,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                                lineNumber: 142,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                lineNumber: 128,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                        lineNumber: 112,
                                        columnNumber: 19
                                    }, this)
                                }, member.name, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                    lineNumber: 111,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("section", {
                    "data-lov-id": "src/pages/about/BoardMembers.tsx:156:8",
                    "data-lov-name": "section",
                    "data-component-path": "src/pages/about/BoardMembers.tsx",
                    "data-component-line": "156",
                    "data-component-file": "BoardMembers.tsx",
                    "data-component-name": "section",
                    "data-component-content": "%7B%22className%22%3A%22py-16%22%7D",
                    className: "py-16",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/about/BoardMembers.tsx:157:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/about/BoardMembers.tsx",
                        "data-component-line": "157",
                        "data-component-file": "BoardMembers.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                        className: "container mx-auto px-4",
                        children: /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/about/BoardMembers.tsx:158:12",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/about/BoardMembers.tsx",
                            "data-component-line": "158",
                            "data-component-file": "BoardMembers.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22max-w-4xl%20mx-auto%20text-center%22%7D",
                            className: "max-w-4xl mx-auto text-center",
                            children: [
                                /*#__PURE__*/ _jsxDEV("h2", {
                                    "data-lov-id": "src/pages/about/BoardMembers.tsx:159:14",
                                    "data-lov-name": "h2",
                                    "data-component-path": "src/pages/about/BoardMembers.tsx",
                                    "data-component-line": "159",
                                    "data-component-file": "BoardMembers.tsx",
                                    "data-component-name": "h2",
                                    "data-component-content": "%7B%22text%22%3A%22Board%20Responsibilities%22%2C%22className%22%3A%22text-4xl%20font-bold%20text-school-brown%20mb-8%22%7D",
                                    className: "text-4xl font-bold text-school-brown mb-8",
                                    children: "Board Responsibilities"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                    lineNumber: 159,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    "data-lov-id": "src/pages/about/BoardMembers.tsx:160:14",
                                    "data-lov-name": "p",
                                    "data-component-path": "src/pages/about/BoardMembers.tsx",
                                    "data-component-line": "160",
                                    "data-component-file": "BoardMembers.tsx",
                                    "data-component-name": "p",
                                    "data-component-content": "%7B%22text%22%3A%22Our%20Board%20of%20Members%20shoulders%20the%20responsibility%20of%20guiding%20the%20institution%20towards%20%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20excellence%20while%20ensuring%20transparency%2C%20accountability%2C%20and%20adherence%20to%20our%20educational%20mission.%22%2C%22className%22%3A%22text-lg%20text-elegant%20mb-12%20max-w-3xl%20mx-auto%22%7D",
                                    className: "text-lg text-elegant mb-12 max-w-3xl mx-auto",
                                    children: "Our Board of Members shoulders the responsibility of guiding the institution towards excellence while ensuring transparency, accountability, and adherence to our educational mission."
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                    lineNumber: 160,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/about/BoardMembers.tsx:164:14",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/about/BoardMembers.tsx",
                                    "data-component-line": "164",
                                    "data-component-file": "BoardMembers.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-2%20lg%3Agrid-cols-4%20gap-8%20mb-12%22%7D",
                                    className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12",
                                    children: responsibilities.map((responsibility, index)=>/*#__PURE__*/ _jsxDEV(Card, {
                                            "data-lov-id": "src/pages/about/BoardMembers.tsx:166:18",
                                            "data-lov-name": "Card",
                                            "data-component-path": "src/pages/about/BoardMembers.tsx",
                                            "data-component-line": "166",
                                            "data-component-file": "BoardMembers.tsx",
                                            "data-component-name": "Card",
                                            "data-component-content": "%7B%22className%22%3A%22hover%3Ashadow-xl%20transition-all%20duration-300%20hover-scale%22%7D",
                                            className: "hover:shadow-xl transition-all duration-300 hover-scale",
                                            children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                                "data-lov-id": "src/pages/about/BoardMembers.tsx:167:20",
                                                "data-lov-name": "CardContent",
                                                "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                "data-component-line": "167",
                                                "data-component-file": "BoardMembers.tsx",
                                                "data-component-name": "CardContent",
                                                "data-component-content": "%7B%22className%22%3A%22p-6%20text-center%22%7D",
                                                className: "p-6 text-center",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(responsibility.icon, {
                                                        "data-lov-id": "src/pages/about/BoardMembers.tsx:168:22",
                                                        "data-lov-name": "responsibility.icon",
                                                        "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                        "data-component-line": "168",
                                                        "data-component-file": "BoardMembers.tsx",
                                                        "data-component-name": "responsibility.icon",
                                                        "data-component-content": "%7B%22className%22%3A%22h-12%20w-12%20text-school-gold%20mx-auto%20mb-4%22%7D",
                                                        className: "h-12 w-12 text-school-gold mx-auto mb-4"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("h3", {
                                                        "data-lov-id": "src/pages/about/BoardMembers.tsx:169:22",
                                                        "data-lov-name": "h3",
                                                        "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                        "data-component-line": "169",
                                                        "data-component-file": "BoardMembers.tsx",
                                                        "data-component-name": "h3",
                                                        "data-component-content": "%7B%22className%22%3A%22text-lg%20font-bold%20text-school-brown%20mb-3%22%7D",
                                                        className: "text-lg font-bold text-school-brown mb-3",
                                                        children: responsibility.title
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("p", {
                                                        "data-lov-id": "src/pages/about/BoardMembers.tsx:170:22",
                                                        "data-lov-name": "p",
                                                        "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                        "data-component-line": "170",
                                                        "data-component-file": "BoardMembers.tsx",
                                                        "data-component-name": "p",
                                                        "data-component-content": "%7B%22className%22%3A%22text-elegant-light%20text-sm%20leading-relaxed%22%7D",
                                                        className: "text-elegant-light text-sm leading-relaxed",
                                                        children: responsibility.description
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                lineNumber: 167,
                                                columnNumber: 21
                                            }, this)
                                        }, responsibility.title, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                            lineNumber: 166,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                    lineNumber: 164,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/about/BoardMembers.tsx:176:14",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/about/BoardMembers.tsx",
                                    "data-component-line": "176",
                                    "data-component-file": "BoardMembers.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22bg-gradient-to-r%20from-school-brown%20to-school-gold%20text-white%20p-8%20rounded-lg%22%7D",
                                    className: "bg-gradient-to-r from-school-brown to-school-gold text-white p-8 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("blockquote", {
                                            "data-lov-id": "src/pages/about/BoardMembers.tsx:177:16",
                                            "data-lov-name": "blockquote",
                                            "data-component-path": "src/pages/about/BoardMembers.tsx",
                                            "data-component-line": "177",
                                            "data-component-file": "BoardMembers.tsx",
                                            "data-component-name": "blockquote",
                                            "data-component-content": "%7B%22text%22%3A%22%5C%22Good%20governance%20is%20the%20cornerstone%20of%20educational%20excellence.%20Our%20Board%20is%20committed%20to%20%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20providing%20the%20strategic%20direction%20and%20oversight%20necessary%20for%20institutional%20growth%20and%20integrity.%5C%22%22%2C%22className%22%3A%22text-xl%20italic%20mb-4%22%7D",
                                            className: "text-xl italic mb-4",
                                            children: '"Good governance is the cornerstone of educational excellence. Our Board is committed to providing the strategic direction and oversight necessary for institutional growth and integrity."'
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                            lineNumber: 177,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("cite", {
                                            "data-lov-id": "src/pages/about/BoardMembers.tsx:181:16",
                                            "data-lov-name": "cite",
                                            "data-component-path": "src/pages/about/BoardMembers.tsx",
                                            "data-component-line": "181",
                                            "data-component-file": "BoardMembers.tsx",
                                            "data-component-name": "cite",
                                            "data-component-content": "%7B%22text%22%3A%22-%20SJRPS-HBR%20Board%20Philosophy%22%2C%22className%22%3A%22text-amber-200%22%7D",
                                            className: "text-amber-200",
                                            children: "- SJRPS-HBR Board Philosophy"
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                            lineNumber: 181,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                    lineNumber: 176,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                            lineNumber: 158,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                        lineNumber: 157,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("section", {
                    "data-lov-id": "src/pages/about/BoardMembers.tsx:188:8",
                    "data-lov-name": "section",
                    "data-component-path": "src/pages/about/BoardMembers.tsx",
                    "data-component-line": "188",
                    "data-component-file": "BoardMembers.tsx",
                    "data-component-name": "section",
                    "data-component-content": "%7B%22className%22%3A%22py-16%20bg-gradient-to-b%20from-amber-50%20to-orange-50%22%7D",
                    className: "py-16 bg-gradient-to-b from-amber-50 to-orange-50",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/about/BoardMembers.tsx:189:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/about/BoardMembers.tsx",
                        "data-component-line": "189",
                        "data-component-file": "BoardMembers.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                        className: "container mx-auto px-4",
                        children: [
                            /*#__PURE__*/ _jsxDEV("h2", {
                                "data-lov-id": "src/pages/about/BoardMembers.tsx:190:12",
                                "data-lov-name": "h2",
                                "data-component-path": "src/pages/about/BoardMembers.tsx",
                                "data-component-line": "190",
                                "data-component-file": "BoardMembers.tsx",
                                "data-component-name": "h2",
                                "data-component-content": "%7B%22text%22%3A%22Governance%20Achievements%22%2C%22className%22%3A%22text-4xl%20font-bold%20text-school-brown%20text-center%20mb-8%22%7D",
                                className: "text-4xl font-bold text-school-brown text-center mb-8",
                                children: "Governance Achievements"
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                lineNumber: 190,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("p", {
                                "data-lov-id": "src/pages/about/BoardMembers.tsx:191:12",
                                "data-lov-name": "p",
                                "data-component-path": "src/pages/about/BoardMembers.tsx",
                                "data-component-line": "191",
                                "data-component-file": "BoardMembers.tsx",
                                "data-component-name": "p",
                                "data-component-content": "%7B%22text%22%3A%22Under%20the%20guidance%20of%20our%20distinguished%20Board%2C%20SJRPS-HBR%20has%20achieved%20numerous%20milestones%20%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20in%20educational%20excellence%20and%20institutional%20development.%22%2C%22className%22%3A%22text-lg%20text-elegant%20text-center%20mb-12%20max-w-3xl%20mx-auto%22%7D",
                                className: "text-lg text-elegant text-center mb-12 max-w-3xl mx-auto",
                                children: "Under the guidance of our distinguished Board, SJRPS-HBR has achieved numerous milestones in educational excellence and institutional development."
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                lineNumber: 191,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/pages/about/BoardMembers.tsx:195:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/pages/about/BoardMembers.tsx",
                                "data-component-line": "195",
                                "data-component-file": "BoardMembers.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-4%20gap-8%20max-w-6xl%20mx-auto%22%7D",
                                className: "grid md:grid-cols-4 gap-8 max-w-6xl mx-auto",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        "data-lov-id": "src/pages/about/BoardMembers.tsx:196:14",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/pages/about/BoardMembers.tsx",
                                        "data-component-line": "196",
                                        "data-component-file": "BoardMembers.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22className%22%3A%22text-center%22%7D",
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV(GraduationCap, {
                                                "data-lov-id": "src/pages/about/BoardMembers.tsx:197:16",
                                                "data-lov-name": "GraduationCap",
                                                "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                "data-component-line": "197",
                                                "data-component-file": "BoardMembers.tsx",
                                                "data-component-name": "GraduationCap",
                                                "data-component-content": "%7B%22className%22%3A%22h-16%20w-16%20text-school-gold%20mx-auto%20mb-4%22%7D",
                                                className: "h-16 w-16 text-school-gold mx-auto mb-4"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                lineNumber: 197,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("h3", {
                                                "data-lov-id": "src/pages/about/BoardMembers.tsx:198:16",
                                                "data-lov-name": "h3",
                                                "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                "data-component-line": "198",
                                                "data-component-file": "BoardMembers.tsx",
                                                "data-component-name": "h3",
                                                "data-component-content": "%7B%22text%22%3A%22NAAC%20Grade%20'A'%22%2C%22className%22%3A%22text-2xl%20font-bold%20text-school-brown%20mb-2%22%7D",
                                                className: "text-2xl font-bold text-school-brown mb-2",
                                                children: "NAAC Grade 'A'"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                lineNumber: 198,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("p", {
                                                "data-lov-id": "src/pages/about/BoardMembers.tsx:199:16",
                                                "data-lov-name": "p",
                                                "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                "data-component-line": "199",
                                                "data-component-file": "BoardMembers.tsx",
                                                "data-component-name": "p",
                                                "data-component-content": "%7B%22text%22%3A%22Achieved%20under%20board's%20strategic%20guidance%22%2C%22className%22%3A%22text-elegant-light%22%7D",
                                                className: "text-elegant-light",
                                                children: "Achieved under board's strategic guidance"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                lineNumber: 199,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                        lineNumber: 196,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        "data-lov-id": "src/pages/about/BoardMembers.tsx:201:14",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/pages/about/BoardMembers.tsx",
                                        "data-component-line": "201",
                                        "data-component-file": "BoardMembers.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22className%22%3A%22text-center%22%7D",
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV(Building, {
                                                "data-lov-id": "src/pages/about/BoardMembers.tsx:202:16",
                                                "data-lov-name": "Building",
                                                "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                "data-component-line": "202",
                                                "data-component-file": "BoardMembers.tsx",
                                                "data-component-name": "Building",
                                                "data-component-content": "%7B%22className%22%3A%22h-16%20w-16%20text-school-gold%20mx-auto%20mb-4%22%7D",
                                                className: "h-16 w-16 text-school-gold mx-auto mb-4"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                lineNumber: 202,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("h3", {
                                                "data-lov-id": "src/pages/about/BoardMembers.tsx:203:16",
                                                "data-lov-name": "h3",
                                                "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                "data-component-line": "203",
                                                "data-component-file": "BoardMembers.tsx",
                                                "data-component-name": "h3",
                                                "data-component-content": "%7B%22text%22%3A%22Infrastructure%22%2C%22className%22%3A%22text-2xl%20font-bold%20text-school-brown%20mb-2%22%7D",
                                                className: "text-2xl font-bold text-school-brown mb-2",
                                                children: "Infrastructure"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                lineNumber: 203,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("p", {
                                                "data-lov-id": "src/pages/about/BoardMembers.tsx:204:16",
                                                "data-lov-name": "p",
                                                "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                "data-component-line": "204",
                                                "data-component-file": "BoardMembers.tsx",
                                                "data-component-name": "p",
                                                "data-component-content": "%7B%22text%22%3A%22Modern%20facilities%20and%20campus%20expansion%22%2C%22className%22%3A%22text-elegant-light%22%7D",
                                                className: "text-elegant-light",
                                                children: "Modern facilities and campus expansion"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                lineNumber: 204,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                        lineNumber: 201,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        "data-lov-id": "src/pages/about/BoardMembers.tsx:206:14",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/pages/about/BoardMembers.tsx",
                                        "data-component-line": "206",
                                        "data-component-file": "BoardMembers.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22className%22%3A%22text-center%22%7D",
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV(Award, {
                                                "data-lov-id": "src/pages/about/BoardMembers.tsx:207:16",
                                                "data-lov-name": "Award",
                                                "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                "data-component-line": "207",
                                                "data-component-file": "BoardMembers.tsx",
                                                "data-component-name": "Award",
                                                "data-component-content": "%7B%22className%22%3A%22h-16%20w-16%20text-school-gold%20mx-auto%20mb-4%22%7D",
                                                className: "h-16 w-16 text-school-gold mx-auto mb-4"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                lineNumber: 207,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("h3", {
                                                "data-lov-id": "src/pages/about/BoardMembers.tsx:208:16",
                                                "data-lov-name": "h3",
                                                "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                "data-component-line": "208",
                                                "data-component-file": "BoardMembers.tsx",
                                                "data-component-name": "h3",
                                                "data-component-content": "%7B%22text%22%3A%22Quality%20Programs%22%2C%22className%22%3A%22text-2xl%20font-bold%20text-school-brown%20mb-2%22%7D",
                                                className: "text-2xl font-bold text-school-brown mb-2",
                                                children: "Quality Programs"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                lineNumber: 208,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("p", {
                                                "data-lov-id": "src/pages/about/BoardMembers.tsx:209:16",
                                                "data-lov-name": "p",
                                                "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                "data-component-line": "209",
                                                "data-component-file": "BoardMembers.tsx",
                                                "data-component-name": "p",
                                                "data-component-content": "%7B%22text%22%3A%22Innovative%20educational%20initiatives%20launched%22%2C%22className%22%3A%22text-elegant-light%22%7D",
                                                className: "text-elegant-light",
                                                children: "Innovative educational initiatives launched"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                lineNumber: 209,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                        lineNumber: 206,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        "data-lov-id": "src/pages/about/BoardMembers.tsx:211:14",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/pages/about/BoardMembers.tsx",
                                        "data-component-line": "211",
                                        "data-component-file": "BoardMembers.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22className%22%3A%22text-center%22%7D",
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV(Users, {
                                                "data-lov-id": "src/pages/about/BoardMembers.tsx:212:16",
                                                "data-lov-name": "Users",
                                                "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                "data-component-line": "212",
                                                "data-component-file": "BoardMembers.tsx",
                                                "data-component-name": "Users",
                                                "data-component-content": "%7B%22className%22%3A%22h-16%20w-16%20text-school-gold%20mx-auto%20mb-4%22%7D",
                                                className: "h-16 w-16 text-school-gold mx-auto mb-4"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                lineNumber: 212,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("h3", {
                                                "data-lov-id": "src/pages/about/BoardMembers.tsx:213:16",
                                                "data-lov-name": "h3",
                                                "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                "data-component-line": "213",
                                                "data-component-file": "BoardMembers.tsx",
                                                "data-component-name": "h3",
                                                "data-component-content": "%7B%22text%22%3A%22Community%20Impact%22%2C%22className%22%3A%22text-2xl%20font-bold%20text-school-brown%20mb-2%22%7D",
                                                className: "text-2xl font-bold text-school-brown mb-2",
                                                children: "Community Impact"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                lineNumber: 213,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("p", {
                                                "data-lov-id": "src/pages/about/BoardMembers.tsx:214:16",
                                                "data-lov-name": "p",
                                                "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                "data-component-line": "214",
                                                "data-component-file": "BoardMembers.tsx",
                                                "data-component-name": "p",
                                                "data-component-content": "%7B%22text%22%3A%22Strong%20community%20engagement%20programs%22%2C%22className%22%3A%22text-elegant-light%22%7D",
                                                className: "text-elegant-light",
                                                children: "Strong community engagement programs"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                lineNumber: 195,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                        lineNumber: 189,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                    lineNumber: 188,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("section", {
                    "data-lov-id": "src/pages/about/BoardMembers.tsx:221:8",
                    "data-lov-name": "section",
                    "data-component-path": "src/pages/about/BoardMembers.tsx",
                    "data-component-line": "221",
                    "data-component-file": "BoardMembers.tsx",
                    "data-component-name": "section",
                    "data-component-content": "%7B%22className%22%3A%22py-16%20bg-gradient-to-r%20from-school-brown%20to-school-gold%20text-white%22%7D",
                    className: "py-16 bg-gradient-to-r from-school-brown to-school-gold text-white",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/about/BoardMembers.tsx:222:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/about/BoardMembers.tsx",
                        "data-component-line": "222",
                        "data-component-file": "BoardMembers.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20text-center%22%7D",
                        className: "container mx-auto px-4 text-center",
                        children: /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/about/BoardMembers.tsx:223:12",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/about/BoardMembers.tsx",
                            "data-component-line": "223",
                            "data-component-file": "BoardMembers.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22max-w-4xl%20mx-auto%22%7D",
                            className: "max-w-4xl mx-auto",
                            children: [
                                /*#__PURE__*/ _jsxDEV(Crown, {
                                    "data-lov-id": "src/pages/about/BoardMembers.tsx:224:14",
                                    "data-lov-name": "Crown",
                                    "data-component-path": "src/pages/about/BoardMembers.tsx",
                                    "data-component-line": "224",
                                    "data-component-file": "BoardMembers.tsx",
                                    "data-component-name": "Crown",
                                    "data-component-content": "%7B%22className%22%3A%22h-16%20w-16%20mx-auto%20mb-6%20text-amber-200%22%7D",
                                    className: "h-16 w-16 mx-auto mb-6 text-amber-200"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                    lineNumber: 224,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("h2", {
                                    "data-lov-id": "src/pages/about/BoardMembers.tsx:225:14",
                                    "data-lov-name": "h2",
                                    "data-component-path": "src/pages/about/BoardMembers.tsx",
                                    "data-component-line": "225",
                                    "data-component-file": "BoardMembers.tsx",
                                    "data-component-name": "h2",
                                    "data-component-content": "%7B%22text%22%3A%22Our%20Commitment%20to%20Excellence%22%2C%22className%22%3A%22text-3xl%20font-bold%20mb-6%22%7D",
                                    className: "text-3xl font-bold mb-6",
                                    children: "Our Commitment to Excellence"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                    lineNumber: 225,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    "data-lov-id": "src/pages/about/BoardMembers.tsx:226:14",
                                    "data-lov-name": "p",
                                    "data-component-path": "src/pages/about/BoardMembers.tsx",
                                    "data-component-line": "226",
                                    "data-component-file": "BoardMembers.tsx",
                                    "data-component-name": "p",
                                    "data-component-content": "%7B%22text%22%3A%22The%20Board%20remains%20steadfast%20in%20its%20commitment%20to%20providing%20visionary%20leadership%2C%20%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ensuring%20transparency%2C%20and%20maintaining%20the%20highest%20standards%20of%20educational%20excellence.%22%2C%22className%22%3A%22text-xl%20text-amber-200%20mb-8%20max-w-2xl%20mx-auto%22%7D",
                                    className: "text-xl text-amber-200 mb-8 max-w-2xl mx-auto",
                                    children: "The Board remains steadfast in its commitment to providing visionary leadership, ensuring transparency, and maintaining the highest standards of educational excellence."
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                    lineNumber: 226,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/about/BoardMembers.tsx:230:14",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/about/BoardMembers.tsx",
                                    "data-component-line": "230",
                                    "data-component-file": "BoardMembers.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-3%20gap-8%22%7D",
                                    className: "grid md:grid-cols-3 gap-8",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/pages/about/BoardMembers.tsx:231:16",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/pages/about/BoardMembers.tsx",
                                            "data-component-line": "231",
                                            "data-component-file": "BoardMembers.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22text-center%22%7D",
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV(Shield, {
                                                    "data-lov-id": "src/pages/about/BoardMembers.tsx:232:18",
                                                    "data-lov-name": "Shield",
                                                    "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                    "data-component-line": "232",
                                                    "data-component-file": "BoardMembers.tsx",
                                                    "data-component-name": "Shield",
                                                    "data-component-content": "%7B%22className%22%3A%22h-12%20w-12%20mx-auto%20mb-4%20text-amber-200%22%7D",
                                                    className: "h-12 w-12 mx-auto mb-4 text-amber-200"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("h3", {
                                                    "data-lov-id": "src/pages/about/BoardMembers.tsx:233:18",
                                                    "data-lov-name": "h3",
                                                    "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                    "data-component-line": "233",
                                                    "data-component-file": "BoardMembers.tsx",
                                                    "data-component-name": "h3",
                                                    "data-component-content": "%7B%22text%22%3A%22Transparency%22%2C%22className%22%3A%22text-xl%20font-bold%20mb-2%22%7D",
                                                    className: "text-xl font-bold mb-2",
                                                    children: "Transparency"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/about/BoardMembers.tsx:234:18",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                    "data-component-line": "234",
                                                    "data-component-file": "BoardMembers.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22text%22%3A%22Open%20governance%20and%20accountability%22%2C%22className%22%3A%22text-amber-200%22%7D",
                                                    className: "text-amber-200",
                                                    children: "Open governance and accountability"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                            lineNumber: 231,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/pages/about/BoardMembers.tsx:236:16",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/pages/about/BoardMembers.tsx",
                                            "data-component-line": "236",
                                            "data-component-file": "BoardMembers.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22text-center%22%7D",
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV(Target, {
                                                    "data-lov-id": "src/pages/about/BoardMembers.tsx:237:18",
                                                    "data-lov-name": "Target",
                                                    "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                    "data-component-line": "237",
                                                    "data-component-file": "BoardMembers.tsx",
                                                    "data-component-name": "Target",
                                                    "data-component-content": "%7B%22className%22%3A%22h-12%20w-12%20mx-auto%20mb-4%20text-amber-200%22%7D",
                                                    className: "h-12 w-12 mx-auto mb-4 text-amber-200"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("h3", {
                                                    "data-lov-id": "src/pages/about/BoardMembers.tsx:238:18",
                                                    "data-lov-name": "h3",
                                                    "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                    "data-component-line": "238",
                                                    "data-component-file": "BoardMembers.tsx",
                                                    "data-component-name": "h3",
                                                    "data-component-content": "%7B%22text%22%3A%22Vision%22%2C%22className%22%3A%22text-xl%20font-bold%20mb-2%22%7D",
                                                    className: "text-xl font-bold mb-2",
                                                    children: "Vision"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                    lineNumber: 238,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/about/BoardMembers.tsx:239:18",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                    "data-component-line": "239",
                                                    "data-component-file": "BoardMembers.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22text%22%3A%22Strategic%20direction%20and%20planning%22%2C%22className%22%3A%22text-amber-200%22%7D",
                                                    className: "text-amber-200",
                                                    children: "Strategic direction and planning"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                            lineNumber: 236,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/pages/about/BoardMembers.tsx:241:16",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/pages/about/BoardMembers.tsx",
                                            "data-component-line": "241",
                                            "data-component-file": "BoardMembers.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22text-center%22%7D",
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV(Heart, {
                                                    "data-lov-id": "src/pages/about/BoardMembers.tsx:242:18",
                                                    "data-lov-name": "Heart",
                                                    "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                    "data-component-line": "242",
                                                    "data-component-file": "BoardMembers.tsx",
                                                    "data-component-name": "Heart",
                                                    "data-component-content": "%7B%22className%22%3A%22h-12%20w-12%20mx-auto%20mb-4%20text-amber-200%22%7D",
                                                    className: "h-12 w-12 mx-auto mb-4 text-amber-200"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("h3", {
                                                    "data-lov-id": "src/pages/about/BoardMembers.tsx:243:18",
                                                    "data-lov-name": "h3",
                                                    "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                    "data-component-line": "243",
                                                    "data-component-file": "BoardMembers.tsx",
                                                    "data-component-name": "h3",
                                                    "data-component-content": "%7B%22text%22%3A%22Integrity%22%2C%22className%22%3A%22text-xl%20font-bold%20mb-2%22%7D",
                                                    className: "text-xl font-bold mb-2",
                                                    children: "Integrity"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/about/BoardMembers.tsx:244:18",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/about/BoardMembers.tsx",
                                                    "data-component-line": "244",
                                                    "data-component-file": "BoardMembers.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22text%22%3A%22Ethical%20leadership%20and%20values%22%2C%22className%22%3A%22text-amber-200%22%7D",
                                                    className: "text-amber-200",
                                                    children: "Ethical leadership and values"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                            lineNumber: 241,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                                    lineNumber: 230,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                            lineNumber: 223,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                        lineNumber: 222,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
                    lineNumber: 221,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
            lineNumber: 84,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
};
_c = BoardMembers;
export default BoardMembers;
var _c;
$RefreshReg$(_c, "BoardMembers");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/pages/about/BoardMembers.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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b0RBQUFDLDBCQUFBO29EQUFFRSxXQUFVOzhEQUF5Qjs7Ozs7OzhEQUN2QyxRQUFDSztvREFBQWIsZUFBQTtvREFBQUMsaUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQywwQkFBQTtvREFBRUUsV0FBVTs4REFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNoRDtLQXRQTXBCO0FBd1BOLGVBQWVBLGFBQVkiLCJuYW1lcyI6WyJMYXlvdXQiLCJQYWdlQmFubmVyIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiVXNlcnMiLCJBd2FyZCIsIkhlYXJ0IiwiR3JhZHVhdGlvbkNhcCIsIlRhcmdldCIsIlNoaWVsZCIsIkNyb3duIiwiQnVpbGRpbmciLCJib2FyZE1lZXRpbmciLCJCb2FyZE1lbWJlcnMiLCJib2FyZE1lbWJlcnMiLCJuYW1lIiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kIiwiZXhwZXJ0aXNlIiwidGVudXJlIiwiaW1hZ2UiLCJyZXNwb25zaWJpbGl0aWVzIiwiaWNvbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkYXRhLWxvdi1pZCIsImRhdGEtbG92LW5hbWUiLCJkYXRhLWNvbXBvbmVudC1wYXRoIiwiZGF0YS1jb21wb25lbnQtbGluZSIsImRhdGEtY29tcG9uZW50LWZpbGUiLCJkYXRhLWNvbXBvbmVudC1uYW1lIiwiZGF0YS1jb21wb25lbnQtY29udGVudCIsImRpdiIsImNsYXNzTmFtZSIsInN1YnRpdGxlIiwiYmFja2dyb3VuZEltYWdlIiwic2VjdGlvbiIsImgyIiwicCIsIm1hcCIsIm1lbWJlciIsImluZGV4IiwiaW1nIiwic3JjIiwiYWx0IiwiaDMiLCJzcGFuIiwicmVzcG9uc2liaWxpdHkiLCJibG9ja3F1b3RlIiwiY2l0ZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJCb2FyZE1lbWJlcnMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBQYWdlQmFubmVyIGZyb20gXCJAL2NvbXBvbmVudHMvUGFnZUJhbm5lclwiO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcbmltcG9ydCB7IFVzZXJzLCBBd2FyZCwgQm9va09wZW4sIEhlYXJ0LCBHcmFkdWF0aW9uQ2FwLCBUYXJnZXQsIFN0YXIsIFNoaWVsZCwgQ3Jvd24sIEJ1aWxkaW5nIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IGJvYXJkTWVldGluZyBmcm9tIFwiQC9hc3NldHMvYm9hcmQtbWVldGluZy5qcGdcIjtcblxuY29uc3QgQm9hcmRNZW1iZXJzID0gKCkgPT4ge1xuICBjb25zdCBib2FyZE1lbWJlcnMgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJEci4gUy4gVmlzaHdhbmF0aGFuXCIsXG4gICAgICBwb3NpdGlvbjogXCJDaGFpcnBlcnNvblwiLFxuICAgICAgYmFja2dyb3VuZDogXCJGb3JtZXIgVmljZS1DaGFuY2VsbG9yLCBLYXJuYXRha2EgVW5pdmVyc2l0eVwiLFxuICAgICAgZXhwZXJ0aXNlOiBcIkVkdWNhdGlvbmFsIEFkbWluaXN0cmF0aW9uICYgUG9saWN5XCIsXG4gICAgICB0ZW51cmU6IFwiMjAxOCAtIFByZXNlbnRcIixcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTYwMjUwMDk3LTBiOTM1MjhjMzExYT9peGxpYj1yYi00LjAuMyZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTMwMCZxPTgwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiTXJzLiBLYW1hbGEgRGV2aVwiLFxuICAgICAgcG9zaXRpb246IFwiVmljZSBDaGFpcnBlcnNvblwiLFxuICAgICAgYmFja2dyb3VuZDogXCJSZXRpcmVkIFByaW5jaXBhbCwgR292ZXJubWVudCBDb2xsZWdlXCIsXG4gICAgICBleHBlcnRpc2U6IFwiQWNhZGVtaWMgRXhjZWxsZW5jZSAmIFF1YWxpdHkgQXNzdXJhbmNlXCIsXG4gICAgICB0ZW51cmU6IFwiMjAxOSAtIFByZXNlbnRcIixcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTgwNDg5OTQ0NzYxLTE1YTE5ZDY1NDk1Nj9peGxpYj1yYi00LjAuMyZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTMwMCZxPTgwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiTXIuIFZpc2h3YW5hdGggUmVkZHlcIixcbiAgICAgIHBvc2l0aW9uOiBcIlNlY3JldGFyeVwiLFxuICAgICAgYmFja2dyb3VuZDogXCJFZHVjYXRpb25hbCBUcnVzdCBNYW5hZ2VtZW50XCIsXG4gICAgICBleHBlcnRpc2U6IFwiU3RyYXRlZ2ljIFBsYW5uaW5nICYgRGV2ZWxvcG1lbnRcIixcbiAgICAgIHRlbnVyZTogXCIyMDE1IC0gUHJlc2VudFwiLFxuICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0NzIwOTk2NDU3ODUtNTY1OGFiZjRmZjRlP2l4bGliPXJiLTQuMC4zJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MzAwJnE9ODBcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJDQSBSYWplc2ggR3VwdGFcIixcbiAgICAgIHBvc2l0aW9uOiBcIlRyZWFzdXJlclwiLFxuICAgICAgYmFja2dyb3VuZDogXCJDaGFydGVyZWQgQWNjb3VudGFudCAmIEZpbmFuY2lhbCBBZHZpc29yXCIsXG4gICAgICBleHBlcnRpc2U6IFwiRmluYW5jaWFsIE1hbmFnZW1lbnQgJiBBdWRpdFwiLFxuICAgICAgdGVudXJlOiBcIjIwMTcgLSBQcmVzZW50XCIsXG4gICAgICBpbWFnZTogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUwNzAwMzIxMTE2OS0wYTFkZDcyMjhmMmQ/aXhsaWI9cmItNC4wLjMmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0zMDAmcT04MFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkRyLiBQcml5YSBNZW5vblwiLFxuICAgICAgcG9zaXRpb246IFwiQWNhZGVtaWMgQWR2aXNvcnkgTWVtYmVyXCIsXG4gICAgICBiYWNrZ3JvdW5kOiBcIlByb2Zlc3NvciBvZiBFZHVjYXRpb24sIEJlbmdhbHVydSBVbml2ZXJzaXR5XCIsXG4gICAgICBleHBlcnRpc2U6IFwiQ3VycmljdWx1bSBEZXZlbG9wbWVudCAmIFJlc2VhcmNoXCIsXG4gICAgICB0ZW51cmU6IFwiMjAyMCAtIFByZXNlbnRcIixcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTU5ODM5NzM0LTJiNzFlYTE5N2VjMj9peGxpYj1yYi00LjAuMyZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTMwMCZxPTgwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiTXIuIFN1bmlsIEtyaXNobmFcIixcbiAgICAgIHBvc2l0aW9uOiBcIkNvbW11bml0eSBSZXByZXNlbnRhdGl2ZVwiLFxuICAgICAgYmFja2dyb3VuZDogXCJTb2NpYWwgV29ya2VyICYgRWR1Y2F0aW9uIEFkdm9jYXRlXCIsXG4gICAgICBleHBlcnRpc2U6IFwiQ29tbXVuaXR5IEVuZ2FnZW1lbnQgJiBPdXRyZWFjaFwiLFxuICAgICAgdGVudXJlOiBcIjIwMTkgLSBQcmVzZW50XCIsXG4gICAgICBpbWFnZTogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ3MjA5OTY0NTc4NS01NjU4YWJmNGZmNGU/aXhsaWI9cmItNC4wLjMmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0zMDAmcT04MFwiXG4gICAgfVxuICBdO1xuXG4gIGNvbnN0IHJlc3BvbnNpYmlsaXRpZXMgPSBbXG4gICAge1xuICAgICAgaWNvbjogVGFyZ2V0LFxuICAgICAgdGl0bGU6IFwiU3RyYXRlZ2ljIERpcmVjdGlvblwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiU2V0dGluZyBsb25nLXRlcm0gdmlzaW9uIGFuZCBtaXNzaW9uIGZvciB0aGUgaW5zdGl0dXRpb24ncyBncm93dGggYW5kIGRldmVsb3BtZW50XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IFNoaWVsZCxcbiAgICAgIHRpdGxlOiBcIlBvbGljeSBHb3Zlcm5hbmNlXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJFc3RhYmxpc2hpbmcgcG9saWNpZXMgdGhhdCBlbnN1cmUgcXVhbGl0eSBlZHVjYXRpb24gYW5kIGluc3RpdHV0aW9uYWwgaW50ZWdyaXR5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IEF3YXJkLFxuICAgICAgdGl0bGU6IFwiUXVhbGl0eSBBc3N1cmFuY2VcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIk1vbml0b3JpbmcgYWNhZGVtaWMgc3RhbmRhcmRzIGFuZCBlbnN1cmluZyBjb250aW51b3VzIGltcHJvdmVtZW50IGluIGFsbCBhcmVhc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiBCdWlsZGluZyxcbiAgICAgIHRpdGxlOiBcIkluZnJhc3RydWN0dXJlIERldmVsb3BtZW50XCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJPdmVyc2VlaW5nIGNhbXB1cyBkZXZlbG9wbWVudCBhbmQgZmFjaWxpdHkgZW5oYW5jZW1lbnQgcHJvamVjdHNcIlxuICAgIH1cbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1iYWNrZ3JvdW5kXCI+XG4gICAgICAgIDxQYWdlQmFubmVyXG4gICAgICAgICAgdGl0bGU9XCJCb2FyZCBvZiBNZW1iZXJzXCJcbiAgICAgICAgICBzdWJ0aXRsZT1cIkRpc3Rpbmd1aXNoZWQgbGVhZGVycyB3aG8gc2hhcGUgdGhlIHN0cmF0ZWdpYyBkaXJlY3Rpb24gYW5kIHVwaG9sZCBvdXIgbWlzc2lvblwiXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlPXtib2FyZE1lZXRpbmd9XG4gICAgICAgIC8+XG5cbiAgICAgICAgey8qIEJvYXJkIEludHJvZHVjdGlvbiAqL31cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNHhsIG14LWF1dG8gdGV4dC1jZW50ZXIgbWItMTZcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LXNjaG9vbC1icm93biBtYi02XCI+R292ZXJuYW5jZSAmIExlYWRlcnNoaXA8L2gyPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZWxlZ2FudCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICBUaGUgU0pSUFMtSEJSIEJvYXJkIGNvbnNpc3RzIG9mIHJlc3BlY3RlZCBlZHVjYXRpb25pc3RzIGFuZCBjb21tdW5pdHkgbGVhZGVycyB3aG8gc2hhcGUgdGhlIHN0cmF0ZWdpYyBcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gYW5kIHVwaG9sZCB0aGUgbWlzc2lvbiBvZiBvdXIgaW5zdGl0dXRpb24uIFRoZWlyIHdpc2RvbSBhbmQgb3ZlcnNpZ2h0IGVuc3VyZSBvdXIgc2Nob29sIFxuICAgICAgICAgICAgICAgIGNvbnRpbnVvdXNseSBncm93cyB3aXRoIHB1cnBvc2UgYW5kIGludGVncml0eSwgbWFpbnRhaW5pbmcgdGhlIGhpZ2hlc3Qgc3RhbmRhcmRzIG9mIGVkdWNhdGlvbmFsIFxuICAgICAgICAgICAgICAgIGV4Y2VsbGVuY2Ugd2hpbGUgc3RheWluZyB0cnVlIHRvIG91ciBjb3JlIHZhbHVlcy5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICB7LyogQm9hcmQgTWVtYmVycyBHcmlkICovfVxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNiBiZy1ncmFkaWVudC10by1iIGZyb20tYW1iZXItNTAgdG8tb3JhbmdlLTUwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLThcIj5cbiAgICAgICAgICAgICAge2JvYXJkTWVtYmVycy5tYXAoKG1lbWJlciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8Q2FyZCBrZXk9e21lbWJlci5uYW1lfSBjbGFzc05hbWU9XCJob3ZlcjpzaGFkb3cteGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGhvdmVyLXNjYWxlIGFuaW1hdGUtZmFkZS1pbiBiZy13aGl0ZSBncm91cFwiPlxuICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e21lbWJlci5pbWFnZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e21lbWJlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtNjQgb2JqZWN0LWNvdmVyIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCBncm91cC1ob3ZlcjpzY2FsZS0xMDVcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1ibGFjay82MCB2aWEtdHJhbnNwYXJlbnQgdG8tdHJhbnNwYXJlbnQgb3BhY2l0eS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0zMDBcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS00IGxlZnQtNCByaWdodC00IHRleHQtd2hpdGUgb3BhY2l0eS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW1cIj57bWVtYmVyLmV4cGVydGlzZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIFBvc2l0aW9uIEJhZGdlICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTQgcmlnaHQtNCBiZy1zY2hvb2wtZ29sZCB0ZXh0LXdoaXRlIHB4LTMgcHktMSByb3VuZGVkLWZ1bGwgdGV4dC14cyBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bWVtYmVyLnBvc2l0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gbWItMlwiPnttZW1iZXIubmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2Nob29sLWdvbGQgZm9udC1zZW1pYm9sZCBtYi0yXCI+e21lbWJlci5wb3NpdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1lbGVnYW50LWxpZ2h0IHRleHQtc20gbWItMyBsZWFkaW5nLXJlbGF4ZWRcIj57bWVtYmVyLmJhY2tncm91bmR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBEZXRhaWxzICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tciBmcm9tLWFtYmVyLTUwIHRvLW9yYW5nZS01MCBwLTMgcm91bmRlZC1sZyBib3JkZXItbC00IGJvcmRlci1zY2hvb2wtZ29sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFyZ2V0IGNsYXNzTmFtZT1cImgtNCB3LTQgdGV4dC1zY2hvb2wtZ29sZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1zY2hvb2wtYnJvd25cIj5FeHBlcnRpc2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZWxlZ2FudC1saWdodFwiPnttZW1iZXIuZXhwZXJ0aXNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LWVsZWdhbnQtbGlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENyb3duIGNsYXNzTmFtZT1cImgtNCB3LTQgdGV4dC1zY2hvb2wtZ29sZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHNcIj5UZW51cmU6IHttZW1iZXIudGVudXJlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgey8qIEJvYXJkIFJlc3BvbnNpYmlsaXRpZXMgKi99XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTE2XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTR4bCBteC1hdXRvIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gbWItOFwiPkJvYXJkIFJlc3BvbnNpYmlsaXRpZXM8L2gyPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZWxlZ2FudCBtYi0xMiBtYXgtdy0zeGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgIE91ciBCb2FyZCBvZiBNZW1iZXJzIHNob3VsZGVycyB0aGUgcmVzcG9uc2liaWxpdHkgb2YgZ3VpZGluZyB0aGUgaW5zdGl0dXRpb24gdG93YXJkcyBcbiAgICAgICAgICAgICAgICBleGNlbGxlbmNlIHdoaWxlIGVuc3VyaW5nIHRyYW5zcGFyZW5jeSwgYWNjb3VudGFiaWxpdHksIGFuZCBhZGhlcmVuY2UgdG8gb3VyIGVkdWNhdGlvbmFsIG1pc3Npb24uXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy00IGdhcC04IG1iLTEyXCI+XG4gICAgICAgICAgICAgICAge3Jlc3BvbnNpYmlsaXRpZXMubWFwKChyZXNwb25zaWJpbGl0eSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxDYXJkIGtleT17cmVzcG9uc2liaWxpdHkudGl0bGV9IGNsYXNzTmFtZT1cImhvdmVyOnNoYWRvdy14bCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgaG92ZXItc2NhbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtNiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxyZXNwb25zaWJpbGl0eS5pY29uIGNsYXNzTmFtZT1cImgtMTIgdy0xMiB0ZXh0LXNjaG9vbC1nb2xkIG14LWF1dG8gbWItNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIHRleHQtc2Nob29sLWJyb3duIG1iLTNcIj57cmVzcG9uc2liaWxpdHkudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWVsZWdhbnQtbGlnaHQgdGV4dC1zbSBsZWFkaW5nLXJlbGF4ZWRcIj57cmVzcG9uc2liaWxpdHkuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tciBmcm9tLXNjaG9vbC1icm93biB0by1zY2hvb2wtZ29sZCB0ZXh0LXdoaXRlIHAtOCByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgICAgPGJsb2NrcXVvdGUgY2xhc3NOYW1lPVwidGV4dC14bCBpdGFsaWMgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgXCJHb29kIGdvdmVybmFuY2UgaXMgdGhlIGNvcm5lcnN0b25lIG9mIGVkdWNhdGlvbmFsIGV4Y2VsbGVuY2UuIE91ciBCb2FyZCBpcyBjb21taXR0ZWQgdG8gXG4gICAgICAgICAgICAgICAgICBwcm92aWRpbmcgdGhlIHN0cmF0ZWdpYyBkaXJlY3Rpb24gYW5kIG92ZXJzaWdodCBuZWNlc3NhcnkgZm9yIGluc3RpdHV0aW9uYWwgZ3Jvd3RoIGFuZCBpbnRlZ3JpdHkuXCJcbiAgICAgICAgICAgICAgICA8L2Jsb2NrcXVvdGU+XG4gICAgICAgICAgICAgICAgPGNpdGUgY2xhc3NOYW1lPVwidGV4dC1hbWJlci0yMDBcIj4tIFNKUlBTLUhCUiBCb2FyZCBQaGlsb3NvcGh5PC9jaXRlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgey8qIEJvYXJkIEFjaGlldmVtZW50cyAqL31cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTYgYmctZ3JhZGllbnQtdG8tYiBmcm9tLWFtYmVyLTUwIHRvLW9yYW5nZS01MFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LXNjaG9vbC1icm93biB0ZXh0LWNlbnRlciBtYi04XCI+R292ZXJuYW5jZSBBY2hpZXZlbWVudHM8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWVsZWdhbnQgdGV4dC1jZW50ZXIgbWItMTIgbWF4LXctM3hsIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgVW5kZXIgdGhlIGd1aWRhbmNlIG9mIG91ciBkaXN0aW5ndWlzaGVkIEJvYXJkLCBTSlJQUy1IQlIgaGFzIGFjaGlldmVkIG51bWVyb3VzIG1pbGVzdG9uZXMgXG4gICAgICAgICAgICAgIGluIGVkdWNhdGlvbmFsIGV4Y2VsbGVuY2UgYW5kIGluc3RpdHV0aW9uYWwgZGV2ZWxvcG1lbnQuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTQgZ2FwLTggbWF4LXctNnhsIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxHcmFkdWF0aW9uQ2FwIGNsYXNzTmFtZT1cImgtMTYgdy0xNiB0ZXh0LXNjaG9vbC1nb2xkIG14LWF1dG8gbWItNFwiIC8+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LXNjaG9vbC1icm93biBtYi0yXCI+TkFBQyBHcmFkZSAnQSc8L2gzPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZWxlZ2FudC1saWdodFwiPkFjaGlldmVkIHVuZGVyIGJvYXJkJ3Mgc3RyYXRlZ2ljIGd1aWRhbmNlPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxCdWlsZGluZyBjbGFzc05hbWU9XCJoLTE2IHctMTYgdGV4dC1zY2hvb2wtZ29sZCBteC1hdXRvIG1iLTRcIiAvPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gbWItMlwiPkluZnJhc3RydWN0dXJlPC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWVsZWdhbnQtbGlnaHRcIj5Nb2Rlcm4gZmFjaWxpdGllcyBhbmQgY2FtcHVzIGV4cGFuc2lvbjwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8QXdhcmQgY2xhc3NOYW1lPVwiaC0xNiB3LTE2IHRleHQtc2Nob29sLWdvbGQgbXgtYXV0byBtYi00XCIgLz5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtc2Nob29sLWJyb3duIG1iLTJcIj5RdWFsaXR5IFByb2dyYW1zPC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWVsZWdhbnQtbGlnaHRcIj5Jbm5vdmF0aXZlIGVkdWNhdGlvbmFsIGluaXRpYXRpdmVzIGxhdW5jaGVkPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxVc2VycyBjbGFzc05hbWU9XCJoLTE2IHctMTYgdGV4dC1zY2hvb2wtZ29sZCBteC1hdXRvIG1iLTRcIiAvPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gbWItMlwiPkNvbW11bml0eSBJbXBhY3Q8L2gzPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZWxlZ2FudC1saWdodFwiPlN0cm9uZyBjb21tdW5pdHkgZW5nYWdlbWVudCBwcm9ncmFtczwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIHsvKiBCb2FyZCBWaXNpb24gKi99XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTE2IGJnLWdyYWRpZW50LXRvLXIgZnJvbS1zY2hvb2wtYnJvd24gdG8tc2Nob29sLWdvbGQgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICA8Q3Jvd24gY2xhc3NOYW1lPVwiaC0xNiB3LTE2IG14LWF1dG8gbWItNiB0ZXh0LWFtYmVyLTIwMFwiIC8+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItNlwiPk91ciBDb21taXRtZW50IHRvIEV4Y2VsbGVuY2U8L2gyPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtYW1iZXItMjAwIG1iLTggbWF4LXctMnhsIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgICBUaGUgQm9hcmQgcmVtYWlucyBzdGVhZGZhc3QgaW4gaXRzIGNvbW1pdG1lbnQgdG8gcHJvdmlkaW5nIHZpc2lvbmFyeSBsZWFkZXJzaGlwLCBcbiAgICAgICAgICAgICAgICBlbnN1cmluZyB0cmFuc3BhcmVuY3ksIGFuZCBtYWludGFpbmluZyB0aGUgaGlnaGVzdCBzdGFuZGFyZHMgb2YgZWR1Y2F0aW9uYWwgZXhjZWxsZW5jZS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTMgZ2FwLThcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8U2hpZWxkIGNsYXNzTmFtZT1cImgtMTIgdy0xMiBteC1hdXRvIG1iLTQgdGV4dC1hbWJlci0yMDBcIiAvPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1iLTJcIj5UcmFuc3BhcmVuY3k8L2gzPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1hbWJlci0yMDBcIj5PcGVuIGdvdmVybmFuY2UgYW5kIGFjY291bnRhYmlsaXR5PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxUYXJnZXQgY2xhc3NOYW1lPVwiaC0xMiB3LTEyIG14LWF1dG8gbWItNCB0ZXh0LWFtYmVyLTIwMFwiIC8+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWItMlwiPlZpc2lvbjwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWFtYmVyLTIwMFwiPlN0cmF0ZWdpYyBkaXJlY3Rpb24gYW5kIHBsYW5uaW5nPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxIZWFydCBjbGFzc05hbWU9XCJoLTEyIHctMTIgbXgtYXV0byBtYi00IHRleHQtYW1iZXItMjAwXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi0yXCI+SW50ZWdyaXR5PC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYW1iZXItMjAwXCI+RXRoaWNhbCBsZWFkZXJzaGlwIGFuZCB2YWx1ZXM8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9hcmRNZW1iZXJzOyJdLCJmaWxlIjoiL2hvbWUvc2pyc2g5MTYvcHVibGljX2h0bWwvc3JjL3BhZ2VzL2Fib3V0L0JvYXJkTWVtYmVycy50c3gifQ==