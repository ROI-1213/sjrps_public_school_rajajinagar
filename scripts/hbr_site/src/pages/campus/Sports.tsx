import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/campus/Sports.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/pages/campus/Sports.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import Layout from "/src/components/Layout.tsx";
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { Trophy, Target, Zap, Users, Medal, Star, Clock, Calendar } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
import sportsComplex from "/src/assets/sports-complex.jpg?import";
import playgroundActivities from "/src/assets/playground-activities.jpg?import";
import indianStudentsSports from "/src/assets/indian-students-sports.jpg?import";
import clubsActivities from "/src/assets/clubs-activities.jpg?import";
const Sports = ()=>{
    const sports = [
        {
            name: "Cricket",
            icon: Target,
            description: "Full-size cricket ground with professional coaching and inter-school tournaments",
            image: sportsComplex,
            facilities: [
                "Professional Ground",
                "Expert Coaching",
                "Equipment Provided"
            ]
        },
        {
            name: "Basketball",
            icon: Trophy,
            description: "Indoor basketball court with regular practice sessions and competitive leagues",
            image: playgroundActivities,
            facilities: [
                "Indoor Court",
                "Team Training",
                "Inter-school Matches"
            ]
        },
        {
            name: "Football",
            icon: Zap,
            description: "Full-size football field for training, matches, and building teamwork skills",
            image: indianStudentsSports,
            facilities: [
                "Full-size Field",
                "Weekly Training",
                "Team Jerseys"
            ]
        },
        {
            name: "Indoor Games",
            icon: Users,
            description: "Chess, Table Tennis, Carrom, and other indoor activities for strategic thinking",
            image: clubsActivities,
            facilities: [
                "Multiple Games",
                "All Weather",
                "Strategy Development"
            ]
        }
    ];
    const stats = [
        {
            number: "20+",
            label: "Trophies Won",
            icon: Trophy
        },
        {
            number: "10+",
            label: "Sports Offered",
            icon: Medal
        },
        {
            number: "300+",
            label: "Active Athletes",
            icon: Users
        },
        {
            number: "5",
            label: "PE Instructors",
            icon: Star
        }
    ];
    const testimonials = [
        {
            name: "Arjun Kumar",
            class: "Grade 9",
            quote: "Sports at SJRPS-HBR taught me discipline and teamwork. I'm now captain of our cricket team!",
            sport: "Cricket"
        },
        {
            name: "Priya Sharma",
            class: "Grade 10",
            quote: "The basketball court is amazing! Our coach helps us improve every day.",
            sport: "Basketball"
        }
    ];
    return /*#__PURE__*/ _jsxDEV(Layout, {
        "data-lov-id": "src/pages/campus/Sports.tsx:65:4",
        "data-lov-name": "Layout",
        "data-component-path": "src/pages/campus/Sports.tsx",
        "data-component-line": "65",
        "data-component-file": "Sports.tsx",
        "data-component-name": "Layout",
        "data-component-content": "%7B%7D",
        children: /*#__PURE__*/ _jsxDEV("div", {
            "data-lov-id": "src/pages/campus/Sports.tsx:66:6",
            "data-lov-name": "div",
            "data-component-path": "src/pages/campus/Sports.tsx",
            "data-component-line": "66",
            "data-component-file": "Sports.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22min-h-screen%20bg-background%22%7D",
            className: "min-h-screen bg-background",
            children: [
                /*#__PURE__*/ _jsxDEV("section", {
                    "data-lov-id": "src/pages/campus/Sports.tsx:68:8",
                    "data-lov-name": "section",
                    "data-component-path": "src/pages/campus/Sports.tsx",
                    "data-component-line": "68",
                    "data-component-file": "Sports.tsx",
                    "data-component-name": "section",
                    "data-component-content": "%7B%22className%22%3A%22bg-gradient-school%20text-white%20py-16%22%7D",
                    className: "bg-gradient-school text-white py-16",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/campus/Sports.tsx:69:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/campus/Sports.tsx",
                        "data-component-line": "69",
                        "data-component-file": "Sports.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20text-center%22%7D",
                        className: "container mx-auto px-4 text-center",
                        children: [
                            /*#__PURE__*/ _jsxDEV("h1", {
                                "data-lov-id": "src/pages/campus/Sports.tsx:70:12",
                                "data-lov-name": "h1",
                                "data-component-path": "src/pages/campus/Sports.tsx",
                                "data-component-line": "70",
                                "data-component-file": "Sports.tsx",
                                "data-component-name": "h1",
                                "data-component-content": "%7B%22text%22%3A%22Sports%20%26%20Recreation%22%2C%22className%22%3A%22text-5xl%20font-bold%20mb-6%20animate-fade-in%22%7D",
                                className: "text-5xl font-bold mb-6 animate-fade-in",
                                children: "Sports & Recreation"
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("p", {
                                "data-lov-id": "src/pages/campus/Sports.tsx:71:12",
                                "data-lov-name": "p",
                                "data-component-path": "src/pages/campus/Sports.tsx",
                                "data-component-line": "71",
                                "data-component-file": "Sports.tsx",
                                "data-component-name": "p",
                                "data-component-content": "%7B%22text%22%3A%22At%20SJRPS-HBR%2C%20we%20believe%20that%20physical%20education%20is%20key%20to%20a%20student's%20overall%20development.%20%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20Our%20Sports%20%26%20Recreation%20program%20builds%20confidence%2C%20teamwork%2C%20and%20discipline%20while%20promoting%20a%20healthy%20lifestyle.%22%2C%22className%22%3A%22text-xl%20text-amber-200%20max-w-3xl%20mx-auto%22%7D",
                                className: "text-xl text-amber-200 max-w-3xl mx-auto",
                                children: "At SJRPS-HBR, we believe that physical education is key to a student's overall development. Our Sports & Recreation program builds confidence, teamwork, and discipline while promoting a healthy lifestyle."
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("section", {
                    "data-lov-id": "src/pages/campus/Sports.tsx:79:8",
                    "data-lov-name": "section",
                    "data-component-path": "src/pages/campus/Sports.tsx",
                    "data-component-line": "79",
                    "data-component-file": "Sports.tsx",
                    "data-component-name": "section",
                    "data-component-content": "%7B%22className%22%3A%22py-16%20bg-gradient-to-r%20from-amber-50%20to-orange-50%22%7D",
                    className: "py-16 bg-gradient-to-r from-amber-50 to-orange-50",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/campus/Sports.tsx:80:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/campus/Sports.tsx",
                        "data-component-line": "80",
                        "data-component-file": "Sports.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                        className: "container mx-auto px-4",
                        children: /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/campus/Sports.tsx:81:12",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/campus/Sports.tsx",
                            "data-component-line": "81",
                            "data-component-file": "Sports.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-4%20gap-8%22%7D",
                            className: "grid md:grid-cols-4 gap-8",
                            children: stats.map((stat, index)=>/*#__PURE__*/ _jsxDEV(Card, {
                                    "data-lov-id": "src/pages/campus/Sports.tsx:83:16",
                                    "data-lov-name": "Card",
                                    "data-component-path": "src/pages/campus/Sports.tsx",
                                    "data-component-line": "83",
                                    "data-component-file": "Sports.tsx",
                                    "data-component-name": "Card",
                                    "data-component-content": "%7B%22className%22%3A%22text-center%20hover%3Ashadow-xl%20transition-all%20duration-300%20hover-scale%20animate-fade-in%22%7D",
                                    className: "text-center hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in",
                                    children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                        "data-lov-id": "src/pages/campus/Sports.tsx:84:18",
                                        "data-lov-name": "CardContent",
                                        "data-component-path": "src/pages/campus/Sports.tsx",
                                        "data-component-line": "84",
                                        "data-component-file": "Sports.tsx",
                                        "data-component-name": "CardContent",
                                        "data-component-content": "%7B%22className%22%3A%22p-6%22%7D",
                                        className: "p-6",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/campus/Sports.tsx:85:20",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/campus/Sports.tsx",
                                                "data-component-line": "85",
                                                "data-component-file": "Sports.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22bg-school-gold%20w-16%20h-16%20rounded-full%20flex%20items-center%20justify-center%20mx-auto%20mb-4%22%7D",
                                                className: "bg-school-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
                                                children: /*#__PURE__*/ _jsxDEV(stat.icon, {
                                                    "data-lov-id": "src/pages/campus/Sports.tsx:86:22",
                                                    "data-lov-name": "stat.icon",
                                                    "data-component-path": "src/pages/campus/Sports.tsx",
                                                    "data-component-line": "86",
                                                    "data-component-file": "Sports.tsx",
                                                    "data-component-name": "stat.icon",
                                                    "data-component-content": "%7B%22className%22%3A%22h-8%20w-8%20text-white%22%7D",
                                                    className: "h-8 w-8 text-white"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                                lineNumber: 85,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/campus/Sports.tsx:88:20",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/campus/Sports.tsx",
                                                "data-component-line": "88",
                                                "data-component-file": "Sports.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22text-3xl%20font-bold%20text-school-brown%20mb-2%22%7D",
                                                className: "text-3xl font-bold text-school-brown mb-2",
                                                children: stat.number
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                                lineNumber: 88,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("p", {
                                                "data-lov-id": "src/pages/campus/Sports.tsx:89:20",
                                                "data-lov-name": "p",
                                                "data-component-path": "src/pages/campus/Sports.tsx",
                                                "data-component-line": "89",
                                                "data-component-file": "Sports.tsx",
                                                "data-component-name": "p",
                                                "data-component-content": "%7B%22className%22%3A%22text-elegant-light%20font-medium%22%7D",
                                                className: "text-elegant-light font-medium",
                                                children: stat.label
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                                lineNumber: 89,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                        lineNumber: 84,
                                        columnNumber: 19
                                    }, this)
                                }, stat.label, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                    lineNumber: 83,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("section", {
                    "data-lov-id": "src/pages/campus/Sports.tsx:98:8",
                    "data-lov-name": "section",
                    "data-component-path": "src/pages/campus/Sports.tsx",
                    "data-component-line": "98",
                    "data-component-file": "Sports.tsx",
                    "data-component-name": "section",
                    "data-component-content": "%7B%22className%22%3A%22py-16%22%7D",
                    className: "py-16",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/campus/Sports.tsx:99:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/campus/Sports.tsx",
                        "data-component-line": "99",
                        "data-component-file": "Sports.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                        className: "container mx-auto px-4",
                        children: [
                            /*#__PURE__*/ _jsxDEV("h2", {
                                "data-lov-id": "src/pages/campus/Sports.tsx:100:12",
                                "data-lov-name": "h2",
                                "data-component-path": "src/pages/campus/Sports.tsx",
                                "data-component-line": "100",
                                "data-component-file": "Sports.tsx",
                                "data-component-name": "h2",
                                "data-component-content": "%7B%22text%22%3A%22Sports%20Facilities%22%2C%22className%22%3A%22text-3xl%20font-bold%20text-school-brown%20text-center%20mb-12%22%7D",
                                className: "text-3xl font-bold text-school-brown text-center mb-12",
                                children: "Sports Facilities"
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/pages/campus/Sports.tsx:101:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/pages/campus/Sports.tsx",
                                "data-component-line": "101",
                                "data-component-file": "Sports.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-2%20gap-8%22%7D",
                                className: "grid md:grid-cols-2 gap-8",
                                children: sports.map((sport, index)=>/*#__PURE__*/ _jsxDEV(Card, {
                                        "data-lov-id": "src/pages/campus/Sports.tsx:103:16",
                                        "data-lov-name": "Card",
                                        "data-component-path": "src/pages/campus/Sports.tsx",
                                        "data-component-line": "103",
                                        "data-component-file": "Sports.tsx",
                                        "data-component-name": "Card",
                                        "data-component-content": "%7B%22className%22%3A%22group%20overflow-hidden%20hover%3Ashadow-xl%20transition-all%20duration-300%20hover-scale%22%7D",
                                        className: "group overflow-hidden hover:shadow-xl transition-all duration-300 hover-scale",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/campus/Sports.tsx:104:18",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/campus/Sports.tsx",
                                                "data-component-line": "104",
                                                "data-component-file": "Sports.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22relative%20overflow-hidden%22%7D",
                                                className: "relative overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("img", {
                                                        "data-lov-id": "src/pages/campus/Sports.tsx:105:20",
                                                        "data-lov-name": "img",
                                                        "data-component-path": "src/pages/campus/Sports.tsx",
                                                        "data-component-line": "105",
                                                        "data-component-file": "Sports.tsx",
                                                        "data-component-name": "img",
                                                        "data-component-content": "%7B%22className%22%3A%22w-full%20h-48%20object-cover%20group-hover%3Ascale-105%20transition-transform%20duration-300%22%7D",
                                                        src: sport.image,
                                                        alt: sport.name,
                                                        className: "w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/pages/campus/Sports.tsx:110:20",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/campus/Sports.tsx",
                                                        "data-component-line": "110",
                                                        "data-component-file": "Sports.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%22className%22%3A%22absolute%20inset-0%20bg-black%2F20%20group-hover%3Abg-black%2F10%20transition-colors%20duration-300%22%7D",
                                                        className: "absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/pages/campus/Sports.tsx:111:20",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/campus/Sports.tsx",
                                                        "data-component-line": "111",
                                                        "data-component-file": "Sports.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%22className%22%3A%22absolute%20top-4%20right-4%20bg-school-gold%20p-2%20rounded-full%22%7D",
                                                        className: "absolute top-4 right-4 bg-school-gold p-2 rounded-full",
                                                        children: /*#__PURE__*/ _jsxDEV(sport.icon, {
                                                            "data-lov-id": "src/pages/campus/Sports.tsx:112:22",
                                                            "data-lov-name": "sport.icon",
                                                            "data-component-path": "src/pages/campus/Sports.tsx",
                                                            "data-component-line": "112",
                                                            "data-component-file": "Sports.tsx",
                                                            "data-component-name": "sport.icon",
                                                            "data-component-content": "%7B%22className%22%3A%22h-6%20w-6%20text-white%22%7D",
                                                            className: "h-6 w-6 text-white"
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                                            lineNumber: 112,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                                lineNumber: 104,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV(CardContent, {
                                                "data-lov-id": "src/pages/campus/Sports.tsx:115:18",
                                                "data-lov-name": "CardContent",
                                                "data-component-path": "src/pages/campus/Sports.tsx",
                                                "data-component-line": "115",
                                                "data-component-file": "Sports.tsx",
                                                "data-component-name": "CardContent",
                                                "data-component-content": "%7B%22className%22%3A%22p-6%22%7D",
                                                className: "p-6",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("h3", {
                                                        "data-lov-id": "src/pages/campus/Sports.tsx:116:20",
                                                        "data-lov-name": "h3",
                                                        "data-component-path": "src/pages/campus/Sports.tsx",
                                                        "data-component-line": "116",
                                                        "data-component-file": "Sports.tsx",
                                                        "data-component-name": "h3",
                                                        "data-component-content": "%7B%22className%22%3A%22text-xl%20font-bold%20text-school-brown%20mb-3%22%7D",
                                                        className: "text-xl font-bold text-school-brown mb-3",
                                                        children: sport.name
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("p", {
                                                        "data-lov-id": "src/pages/campus/Sports.tsx:117:20",
                                                        "data-lov-name": "p",
                                                        "data-component-path": "src/pages/campus/Sports.tsx",
                                                        "data-component-line": "117",
                                                        "data-component-file": "Sports.tsx",
                                                        "data-component-name": "p",
                                                        "data-component-content": "%7B%22className%22%3A%22text-elegant-light%20mb-4%22%7D",
                                                        className: "text-elegant-light mb-4",
                                                        children: sport.description
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/pages/campus/Sports.tsx:118:20",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/campus/Sports.tsx",
                                                        "data-component-line": "118",
                                                        "data-component-file": "Sports.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%22className%22%3A%22flex%20flex-wrap%20gap-2%22%7D",
                                                        className: "flex flex-wrap gap-2",
                                                        children: sport.facilities.map((facility, i)=>/*#__PURE__*/ _jsxDEV("span", {
                                                                "data-lov-id": "src/pages/campus/Sports.tsx:120:24",
                                                                "data-lov-name": "span",
                                                                "data-component-path": "src/pages/campus/Sports.tsx",
                                                                "data-component-line": "120",
                                                                "data-component-file": "Sports.tsx",
                                                                "data-component-name": "span",
                                                                "data-component-content": "%7B%22className%22%3A%22bg-amber-100%20text-school-brown%20px-3%20py-1%20rounded-full%20text-sm%20font-medium%22%7D",
                                                                className: "bg-amber-100 text-school-brown px-3 py-1 rounded-full text-sm font-medium",
                                                                children: facility
                                                            }, i, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                                                lineNumber: 120,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                                lineNumber: 115,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, sport.name, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                        lineNumber: 103,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("section", {
                    "data-lov-id": "src/pages/campus/Sports.tsx:133:8",
                    "data-lov-name": "section",
                    "data-component-path": "src/pages/campus/Sports.tsx",
                    "data-component-line": "133",
                    "data-component-file": "Sports.tsx",
                    "data-component-name": "section",
                    "data-component-content": "%7B%22className%22%3A%22py-16%20bg-gradient-to-r%20from-blue-50%20to-indigo-50%22%7D",
                    className: "py-16 bg-gradient-to-r from-blue-50 to-indigo-50",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/campus/Sports.tsx:134:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/campus/Sports.tsx",
                        "data-component-line": "134",
                        "data-component-file": "Sports.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                        className: "container mx-auto px-4",
                        children: [
                            /*#__PURE__*/ _jsxDEV("h2", {
                                "data-lov-id": "src/pages/campus/Sports.tsx:135:12",
                                "data-lov-name": "h2",
                                "data-component-path": "src/pages/campus/Sports.tsx",
                                "data-component-line": "135",
                                "data-component-file": "Sports.tsx",
                                "data-component-name": "h2",
                                "data-component-content": "%7B%22text%22%3A%22Student%20Voices%22%2C%22className%22%3A%22text-3xl%20font-bold%20text-school-brown%20text-center%20mb-12%22%7D",
                                className: "text-3xl font-bold text-school-brown text-center mb-12",
                                children: "Student Voices"
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/pages/campus/Sports.tsx:136:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/pages/campus/Sports.tsx",
                                "data-component-line": "136",
                                "data-component-file": "Sports.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-2%20gap-8%22%7D",
                                className: "grid md:grid-cols-2 gap-8",
                                children: testimonials.map((testimonial, index)=>/*#__PURE__*/ _jsxDEV(Card, {
                                        "data-lov-id": "src/pages/campus/Sports.tsx:138:16",
                                        "data-lov-name": "Card",
                                        "data-component-path": "src/pages/campus/Sports.tsx",
                                        "data-component-line": "138",
                                        "data-component-file": "Sports.tsx",
                                        "data-component-name": "Card",
                                        "data-component-content": "%7B%22className%22%3A%22bg-white%20shadow-lg%20hover%3Ashadow-xl%20transition-all%20duration-300%22%7D",
                                        className: "bg-white shadow-lg hover:shadow-xl transition-all duration-300",
                                        children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                            "data-lov-id": "src/pages/campus/Sports.tsx:139:18",
                                            "data-lov-name": "CardContent",
                                            "data-component-path": "src/pages/campus/Sports.tsx",
                                            "data-component-line": "139",
                                            "data-component-file": "Sports.tsx",
                                            "data-component-name": "CardContent",
                                            "data-component-content": "%7B%22className%22%3A%22p-6%22%7D",
                                            className: "p-6",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/pages/campus/Sports.tsx:140:20",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/campus/Sports.tsx",
                                                    "data-component-line": "140",
                                                    "data-component-file": "Sports.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20mb-4%22%7D",
                                                    className: "flex items-center mb-4",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            "data-lov-id": "src/pages/campus/Sports.tsx:141:22",
                                                            "data-lov-name": "div",
                                                            "data-component-path": "src/pages/campus/Sports.tsx",
                                                            "data-component-line": "141",
                                                            "data-component-file": "Sports.tsx",
                                                            "data-component-name": "div",
                                                            "data-component-content": "%7B%22className%22%3A%22bg-school-gold%20w-12%20h-12%20rounded-full%20flex%20items-center%20justify-center%20mr-4%22%7D",
                                                            className: "bg-school-gold w-12 h-12 rounded-full flex items-center justify-center mr-4",
                                                            children: /*#__PURE__*/ _jsxDEV(Trophy, {
                                                                "data-lov-id": "src/pages/campus/Sports.tsx:142:24",
                                                                "data-lov-name": "Trophy",
                                                                "data-component-path": "src/pages/campus/Sports.tsx",
                                                                "data-component-line": "142",
                                                                "data-component-file": "Sports.tsx",
                                                                "data-component-name": "Trophy",
                                                                "data-component-content": "%7B%22className%22%3A%22h-6%20w-6%20text-white%22%7D",
                                                                className: "h-6 w-6 text-white"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                                                lineNumber: 142,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                                            lineNumber: 141,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            "data-lov-id": "src/pages/campus/Sports.tsx:144:22",
                                                            "data-lov-name": "div",
                                                            "data-component-path": "src/pages/campus/Sports.tsx",
                                                            "data-component-line": "144",
                                                            "data-component-file": "Sports.tsx",
                                                            "data-component-name": "div",
                                                            "data-component-content": "%7B%7D",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV("h4", {
                                                                    "data-lov-id": "src/pages/campus/Sports.tsx:145:24",
                                                                    "data-lov-name": "h4",
                                                                    "data-component-path": "src/pages/campus/Sports.tsx",
                                                                    "data-component-line": "145",
                                                                    "data-component-file": "Sports.tsx",
                                                                    "data-component-name": "h4",
                                                                    "data-component-content": "%7B%22className%22%3A%22font-bold%20text-school-brown%22%7D",
                                                                    className: "font-bold text-school-brown",
                                                                    children: testimonial.name
                                                                }, void 0, false, {
                                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                                                    lineNumber: 145,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV("p", {
                                                                    "data-lov-id": "src/pages/campus/Sports.tsx:146:24",
                                                                    "data-lov-name": "p",
                                                                    "data-component-path": "src/pages/campus/Sports.tsx",
                                                                    "data-component-line": "146",
                                                                    "data-component-file": "Sports.tsx",
                                                                    "data-component-name": "p",
                                                                    "data-component-content": "%7B%22text%22%3A%22%E2%80%A2%22%2C%22className%22%3A%22text-sm%20text-elegant-light%22%7D",
                                                                    className: "text-sm text-elegant-light",
                                                                    children: [
                                                                        testimonial.class,
                                                                        " • ",
                                                                        testimonial.sport
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                                                    lineNumber: 146,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/campus/Sports.tsx:149:20",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/campus/Sports.tsx",
                                                    "data-component-line": "149",
                                                    "data-component-file": "Sports.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22text%22%3A%22%5C%22%20%5C%22%22%2C%22className%22%3A%22text-elegant%20italic%22%7D",
                                                    className: "text-elegant italic",
                                                    children: [
                                                        '"',
                                                        testimonial.quote,
                                                        '"'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                            lineNumber: 139,
                                            columnNumber: 19
                                        }, this)
                                    }, testimonial.name, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                        lineNumber: 138,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("section", {
                    "data-lov-id": "src/pages/campus/Sports.tsx:158:8",
                    "data-lov-name": "section",
                    "data-component-path": "src/pages/campus/Sports.tsx",
                    "data-component-line": "158",
                    "data-component-file": "Sports.tsx",
                    "data-component-name": "section",
                    "data-component-content": "%7B%22className%22%3A%22py-16%22%7D",
                    className: "py-16",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/campus/Sports.tsx:159:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/campus/Sports.tsx",
                        "data-component-line": "159",
                        "data-component-file": "Sports.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                        className: "container mx-auto px-4",
                        children: [
                            /*#__PURE__*/ _jsxDEV("h2", {
                                "data-lov-id": "src/pages/campus/Sports.tsx:160:12",
                                "data-lov-name": "h2",
                                "data-component-path": "src/pages/campus/Sports.tsx",
                                "data-component-line": "160",
                                "data-component-file": "Sports.tsx",
                                "data-component-name": "h2",
                                "data-component-content": "%7B%22text%22%3A%22Upcoming%20Sports%20Events%22%2C%22className%22%3A%22text-3xl%20font-bold%20text-school-brown%20text-center%20mb-12%22%7D",
                                className: "text-3xl font-bold text-school-brown text-center mb-12",
                                children: "Upcoming Sports Events"
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                lineNumber: 160,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/pages/campus/Sports.tsx:161:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/pages/campus/Sports.tsx",
                                "data-component-line": "161",
                                "data-component-file": "Sports.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-3%20gap-6%22%7D",
                                className: "grid md:grid-cols-3 gap-6",
                                children: [
                                    /*#__PURE__*/ _jsxDEV(Card, {
                                        "data-lov-id": "src/pages/campus/Sports.tsx:162:14",
                                        "data-lov-name": "Card",
                                        "data-component-path": "src/pages/campus/Sports.tsx",
                                        "data-component-line": "162",
                                        "data-component-file": "Sports.tsx",
                                        "data-component-name": "Card",
                                        "data-component-content": "%7B%22className%22%3A%22hover%3Ashadow-xl%20transition-all%20duration-300%20hover-scale%22%7D",
                                        className: "hover:shadow-xl transition-all duration-300 hover-scale",
                                        children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                            "data-lov-id": "src/pages/campus/Sports.tsx:163:16",
                                            "data-lov-name": "CardContent",
                                            "data-component-path": "src/pages/campus/Sports.tsx",
                                            "data-component-line": "163",
                                            "data-component-file": "Sports.tsx",
                                            "data-component-name": "CardContent",
                                            "data-component-content": "%7B%22className%22%3A%22p-6%20text-center%22%7D",
                                            className: "p-6 text-center",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV(Calendar, {
                                                    "data-lov-id": "src/pages/campus/Sports.tsx:164:18",
                                                    "data-lov-name": "Calendar",
                                                    "data-component-path": "src/pages/campus/Sports.tsx",
                                                    "data-component-line": "164",
                                                    "data-component-file": "Sports.tsx",
                                                    "data-component-name": "Calendar",
                                                    "data-component-content": "%7B%22className%22%3A%22h-12%20w-12%20text-school-gold%20mx-auto%20mb-4%22%7D",
                                                    className: "h-12 w-12 text-school-gold mx-auto mb-4"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("h3", {
                                                    "data-lov-id": "src/pages/campus/Sports.tsx:165:18",
                                                    "data-lov-name": "h3",
                                                    "data-component-path": "src/pages/campus/Sports.tsx",
                                                    "data-component-line": "165",
                                                    "data-component-file": "Sports.tsx",
                                                    "data-component-name": "h3",
                                                    "data-component-content": "%7B%22text%22%3A%22Annual%20Sports%20Meet%22%2C%22className%22%3A%22text-lg%20font-bold%20text-school-brown%20mb-2%22%7D",
                                                    className: "text-lg font-bold text-school-brown mb-2",
                                                    children: "Annual Sports Meet"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/campus/Sports.tsx:166:18",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/campus/Sports.tsx",
                                                    "data-component-line": "166",
                                                    "data-component-file": "Sports.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22text%22%3A%22February%2015-16%2C%202025%22%2C%22className%22%3A%22text-elegant-light%20mb-2%22%7D",
                                                    className: "text-elegant-light mb-2",
                                                    children: "February 15-16, 2025"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/campus/Sports.tsx:167:18",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/campus/Sports.tsx",
                                                    "data-component-line": "167",
                                                    "data-component-file": "Sports.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22text%22%3A%22Two%20days%20of%20competitive%20sports%20and%20celebration%22%2C%22className%22%3A%22text-sm%20text-elegant%22%7D",
                                                    className: "text-sm text-elegant",
                                                    children: "Two days of competitive sports and celebration"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                            lineNumber: 163,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV(Card, {
                                        "data-lov-id": "src/pages/campus/Sports.tsx:170:14",
                                        "data-lov-name": "Card",
                                        "data-component-path": "src/pages/campus/Sports.tsx",
                                        "data-component-line": "170",
                                        "data-component-file": "Sports.tsx",
                                        "data-component-name": "Card",
                                        "data-component-content": "%7B%22className%22%3A%22hover%3Ashadow-xl%20transition-all%20duration-300%20hover-scale%22%7D",
                                        className: "hover:shadow-xl transition-all duration-300 hover-scale",
                                        children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                            "data-lov-id": "src/pages/campus/Sports.tsx:171:16",
                                            "data-lov-name": "CardContent",
                                            "data-component-path": "src/pages/campus/Sports.tsx",
                                            "data-component-line": "171",
                                            "data-component-file": "Sports.tsx",
                                            "data-component-name": "CardContent",
                                            "data-component-content": "%7B%22className%22%3A%22p-6%20text-center%22%7D",
                                            className: "p-6 text-center",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV(Trophy, {
                                                    "data-lov-id": "src/pages/campus/Sports.tsx:172:18",
                                                    "data-lov-name": "Trophy",
                                                    "data-component-path": "src/pages/campus/Sports.tsx",
                                                    "data-component-line": "172",
                                                    "data-component-file": "Sports.tsx",
                                                    "data-component-name": "Trophy",
                                                    "data-component-content": "%7B%22className%22%3A%22h-12%20w-12%20text-school-gold%20mx-auto%20mb-4%22%7D",
                                                    className: "h-12 w-12 text-school-gold mx-auto mb-4"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("h3", {
                                                    "data-lov-id": "src/pages/campus/Sports.tsx:173:18",
                                                    "data-lov-name": "h3",
                                                    "data-component-path": "src/pages/campus/Sports.tsx",
                                                    "data-component-line": "173",
                                                    "data-component-file": "Sports.tsx",
                                                    "data-component-name": "h3",
                                                    "data-component-content": "%7B%22text%22%3A%22Inter-School%20Cricket%22%2C%22className%22%3A%22text-lg%20font-bold%20text-school-brown%20mb-2%22%7D",
                                                    className: "text-lg font-bold text-school-brown mb-2",
                                                    children: "Inter-School Cricket"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/campus/Sports.tsx:174:18",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/campus/Sports.tsx",
                                                    "data-component-line": "174",
                                                    "data-component-file": "Sports.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22text%22%3A%22March%205%2C%202025%22%2C%22className%22%3A%22text-elegant-light%20mb-2%22%7D",
                                                    className: "text-elegant-light mb-2",
                                                    children: "March 5, 2025"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/campus/Sports.tsx:175:18",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/campus/Sports.tsx",
                                                    "data-component-line": "175",
                                                    "data-component-file": "Sports.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22text%22%3A%22Championship%20match%20against%20neighboring%20schools%22%2C%22className%22%3A%22text-sm%20text-elegant%22%7D",
                                                    className: "text-sm text-elegant",
                                                    children: "Championship match against neighboring schools"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                            lineNumber: 171,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                        lineNumber: 170,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV(Card, {
                                        "data-lov-id": "src/pages/campus/Sports.tsx:178:14",
                                        "data-lov-name": "Card",
                                        "data-component-path": "src/pages/campus/Sports.tsx",
                                        "data-component-line": "178",
                                        "data-component-file": "Sports.tsx",
                                        "data-component-name": "Card",
                                        "data-component-content": "%7B%22className%22%3A%22hover%3Ashadow-xl%20transition-all%20duration-300%20hover-scale%22%7D",
                                        className: "hover:shadow-xl transition-all duration-300 hover-scale",
                                        children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                            "data-lov-id": "src/pages/campus/Sports.tsx:179:16",
                                            "data-lov-name": "CardContent",
                                            "data-component-path": "src/pages/campus/Sports.tsx",
                                            "data-component-line": "179",
                                            "data-component-file": "Sports.tsx",
                                            "data-component-name": "CardContent",
                                            "data-component-content": "%7B%22className%22%3A%22p-6%20text-center%22%7D",
                                            className: "p-6 text-center",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV(Clock, {
                                                    "data-lov-id": "src/pages/campus/Sports.tsx:180:18",
                                                    "data-lov-name": "Clock",
                                                    "data-component-path": "src/pages/campus/Sports.tsx",
                                                    "data-component-line": "180",
                                                    "data-component-file": "Sports.tsx",
                                                    "data-component-name": "Clock",
                                                    "data-component-content": "%7B%22className%22%3A%22h-12%20w-12%20text-school-gold%20mx-auto%20mb-4%22%7D",
                                                    className: "h-12 w-12 text-school-gold mx-auto mb-4"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("h3", {
                                                    "data-lov-id": "src/pages/campus/Sports.tsx:181:18",
                                                    "data-lov-name": "h3",
                                                    "data-component-path": "src/pages/campus/Sports.tsx",
                                                    "data-component-line": "181",
                                                    "data-component-file": "Sports.tsx",
                                                    "data-component-name": "h3",
                                                    "data-component-content": "%7B%22text%22%3A%22Weekly%20PE%20Hours%22%2C%22className%22%3A%22text-lg%20font-bold%20text-school-brown%20mb-2%22%7D",
                                                    className: "text-lg font-bold text-school-brown mb-2",
                                                    children: "Weekly PE Hours"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/campus/Sports.tsx:182:18",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/campus/Sports.tsx",
                                                    "data-component-line": "182",
                                                    "data-component-file": "Sports.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22text%22%3A%22Every%20Monday%20%26%20Thursday%22%2C%22className%22%3A%22text-elegant-light%20mb-2%22%7D",
                                                    className: "text-elegant-light mb-2",
                                                    children: "Every Monday & Thursday"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/campus/Sports.tsx:183:18",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/campus/Sports.tsx",
                                                    "data-component-line": "183",
                                                    "data-component-file": "Sports.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22text%22%3A%22Regular%20physical%20education%20for%20all%20students%22%2C%22className%22%3A%22text-sm%20text-elegant%22%7D",
                                                    className: "text-sm text-elegant",
                                                    children: "Regular physical education for all students"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                            lineNumber: 179,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                                lineNumber: 161,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
                    lineNumber: 158,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/pages/campus/Sports.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
};
_c = Sports;
export default Sports;
var _c;
$RefreshReg$(_c, "Sports");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/pages/campus/Sports.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/pages/campus/Sports.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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QUMsdUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsMEJBQUE7b0RBQUVFLFdBQVU7Ozs7Ozs4REFDakIsUUFBQ1c7b0RBQUNuQixlQUFBO29EQUFBQyxpQkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLDBCQUFBO29EQUFFRSxXQUFVOzhEQUEyQzs7Ozs7OzhEQUN6RCxRQUFDRztvREFBQVgsZUFBQTtvREFBQUMsaUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQywwQkFBQTtvREFBRUUsV0FBVTs4REFBMEI7Ozs7Ozs4REFDdkMsUUFBQ0c7b0RBQUFYLGVBQUE7b0RBQUFDLGlCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsMEJBQUE7b0RBQUVFLFdBQVU7OERBQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTdEQ7S0F0TE10QjtBQXdMTixlQUFlQSxPQUFNIiwibmFtZXMiOlsiTGF5b3V0IiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiVHJvcGh5IiwiVGFyZ2V0IiwiWmFwIiwiVXNlcnMiLCJNZWRhbCIsIlN0YXIiLCJDbG9jayIsIkNhbGVuZGFyIiwic3BvcnRzQ29tcGxleCIsInBsYXlncm91bmRBY3Rpdml0aWVzIiwiaW5kaWFuU3R1ZGVudHNTcG9ydHMiLCJjbHVic0FjdGl2aXRpZXMiLCJTcG9ydHMiLCJzcG9ydHMiLCJuYW1lIiwiaWNvbiIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJmYWNpbGl0aWVzIiwic3RhdHMiLCJudW1iZXIiLCJsYWJlbCIsInRlc3RpbW9uaWFscyIsImNsYXNzIiwicXVvdGUiLCJzcG9ydCIsImRhdGEtbG92LWlkIiwiZGF0YS1sb3YtbmFtZSIsImRhdGEtY29tcG9uZW50LXBhdGgiLCJkYXRhLWNvbXBvbmVudC1saW5lIiwiZGF0YS1jb21wb25lbnQtZmlsZSIsImRhdGEtY29tcG9uZW50LW5hbWUiLCJkYXRhLWNvbXBvbmVudC1jb250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsImgxIiwicCIsIm1hcCIsInN0YXQiLCJpbmRleCIsImgyIiwiaW1nIiwic3JjIiwiYWx0IiwiaDMiLCJmYWNpbGl0eSIsImkiLCJzcGFuIiwidGVzdGltb25pYWwiLCJoNCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJTcG9ydHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcbmltcG9ydCB7IFRyb3BoeSwgVGFyZ2V0LCBaYXAsIFVzZXJzLCBNZWRhbCwgU3RhciwgQ2xvY2ssIENhbGVuZGFyIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHNwb3J0c0NvbXBsZXggZnJvbSBcIkAvYXNzZXRzL3Nwb3J0cy1jb21wbGV4LmpwZ1wiO1xuaW1wb3J0IHBsYXlncm91bmRBY3Rpdml0aWVzIGZyb20gXCJAL2Fzc2V0cy9wbGF5Z3JvdW5kLWFjdGl2aXRpZXMuanBnXCI7XG5pbXBvcnQgaW5kaWFuU3R1ZGVudHNTcG9ydHMgZnJvbSBcIkAvYXNzZXRzL2luZGlhbi1zdHVkZW50cy1zcG9ydHMuanBnXCI7XG5pbXBvcnQgY2x1YnNBY3Rpdml0aWVzIGZyb20gXCJAL2Fzc2V0cy9jbHVicy1hY3Rpdml0aWVzLmpwZ1wiO1xuXG5jb25zdCBTcG9ydHMgPSAoKSA9PiB7XG4gIGNvbnN0IHNwb3J0cyA9IFtcbiAgICB7IFxuICAgICAgbmFtZTogXCJDcmlja2V0XCIsIFxuICAgICAgaWNvbjogVGFyZ2V0LCBcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkZ1bGwtc2l6ZSBjcmlja2V0IGdyb3VuZCB3aXRoIHByb2Zlc3Npb25hbCBjb2FjaGluZyBhbmQgaW50ZXItc2Nob29sIHRvdXJuYW1lbnRzXCIsXG4gICAgICBpbWFnZTogc3BvcnRzQ29tcGxleCxcbiAgICAgIGZhY2lsaXRpZXM6IFtcIlByb2Zlc3Npb25hbCBHcm91bmRcIiwgXCJFeHBlcnQgQ29hY2hpbmdcIiwgXCJFcXVpcG1lbnQgUHJvdmlkZWRcIl1cbiAgICB9LFxuICAgIHsgXG4gICAgICBuYW1lOiBcIkJhc2tldGJhbGxcIiwgXG4gICAgICBpY29uOiBUcm9waHksIFxuICAgICAgZGVzY3JpcHRpb246IFwiSW5kb29yIGJhc2tldGJhbGwgY291cnQgd2l0aCByZWd1bGFyIHByYWN0aWNlIHNlc3Npb25zIGFuZCBjb21wZXRpdGl2ZSBsZWFndWVzXCIsXG4gICAgICBpbWFnZTogcGxheWdyb3VuZEFjdGl2aXRpZXMsXG4gICAgICBmYWNpbGl0aWVzOiBbXCJJbmRvb3IgQ291cnRcIiwgXCJUZWFtIFRyYWluaW5nXCIsIFwiSW50ZXItc2Nob29sIE1hdGNoZXNcIl1cbiAgICB9LFxuICAgIHsgXG4gICAgICBuYW1lOiBcIkZvb3RiYWxsXCIsIFxuICAgICAgaWNvbjogWmFwLCBcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkZ1bGwtc2l6ZSBmb290YmFsbCBmaWVsZCBmb3IgdHJhaW5pbmcsIG1hdGNoZXMsIGFuZCBidWlsZGluZyB0ZWFtd29yayBza2lsbHNcIixcbiAgICAgIGltYWdlOiBpbmRpYW5TdHVkZW50c1Nwb3J0cyxcbiAgICAgIGZhY2lsaXRpZXM6IFtcIkZ1bGwtc2l6ZSBGaWVsZFwiLCBcIldlZWtseSBUcmFpbmluZ1wiLCBcIlRlYW0gSmVyc2V5c1wiXVxuICAgIH0sXG4gICAgeyBcbiAgICAgIG5hbWU6IFwiSW5kb29yIEdhbWVzXCIsIFxuICAgICAgaWNvbjogVXNlcnMsIFxuICAgICAgZGVzY3JpcHRpb246IFwiQ2hlc3MsIFRhYmxlIFRlbm5pcywgQ2Fycm9tLCBhbmQgb3RoZXIgaW5kb29yIGFjdGl2aXRpZXMgZm9yIHN0cmF0ZWdpYyB0aGlua2luZ1wiLFxuICAgICAgaW1hZ2U6IGNsdWJzQWN0aXZpdGllcyxcbiAgICAgIGZhY2lsaXRpZXM6IFtcIk11bHRpcGxlIEdhbWVzXCIsIFwiQWxsIFdlYXRoZXJcIiwgXCJTdHJhdGVneSBEZXZlbG9wbWVudFwiXVxuICAgIH1cbiAgXTtcblxuICBjb25zdCBzdGF0cyA9IFtcbiAgICB7IG51bWJlcjogXCIyMCtcIiwgbGFiZWw6IFwiVHJvcGhpZXMgV29uXCIsIGljb246IFRyb3BoeSB9LFxuICAgIHsgbnVtYmVyOiBcIjEwK1wiLCBsYWJlbDogXCJTcG9ydHMgT2ZmZXJlZFwiLCBpY29uOiBNZWRhbCB9LFxuICAgIHsgbnVtYmVyOiBcIjMwMCtcIiwgbGFiZWw6IFwiQWN0aXZlIEF0aGxldGVzXCIsIGljb246IFVzZXJzIH0sXG4gICAgeyBudW1iZXI6IFwiNVwiLCBsYWJlbDogXCJQRSBJbnN0cnVjdG9yc1wiLCBpY29uOiBTdGFyIH1cbiAgXTtcblxuICBjb25zdCB0ZXN0aW1vbmlhbHMgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJBcmp1biBLdW1hclwiLFxuICAgICAgY2xhc3M6IFwiR3JhZGUgOVwiLFxuICAgICAgcXVvdGU6IFwiU3BvcnRzIGF0IFNKUlBTLUhCUiB0YXVnaHQgbWUgZGlzY2lwbGluZSBhbmQgdGVhbXdvcmsuIEknbSBub3cgY2FwdGFpbiBvZiBvdXIgY3JpY2tldCB0ZWFtIVwiLFxuICAgICAgc3BvcnQ6IFwiQ3JpY2tldFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlByaXlhIFNoYXJtYVwiLFxuICAgICAgY2xhc3M6IFwiR3JhZGUgMTBcIixcbiAgICAgIHF1b3RlOiBcIlRoZSBiYXNrZXRiYWxsIGNvdXJ0IGlzIGFtYXppbmchIE91ciBjb2FjaCBoZWxwcyB1cyBpbXByb3ZlIGV2ZXJ5IGRheS5cIixcbiAgICAgIHNwb3J0OiBcIkJhc2tldGJhbGxcIlxuICAgIH1cbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1iYWNrZ3JvdW5kXCI+XG4gICAgICAgIHsvKiBIZXJvIFNlY3Rpb24gKi99XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXNjaG9vbCB0ZXh0LXdoaXRlIHB5LTE2XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgZm9udC1ib2xkIG1iLTYgYW5pbWF0ZS1mYWRlLWluXCI+U3BvcnRzICYgUmVjcmVhdGlvbjwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtYW1iZXItMjAwIG1heC13LTN4bCBteC1hdXRvXCI+XG4gICAgICAgICAgICAgIEF0IFNKUlBTLUhCUiwgd2UgYmVsaWV2ZSB0aGF0IHBoeXNpY2FsIGVkdWNhdGlvbiBpcyBrZXkgdG8gYSBzdHVkZW50J3Mgb3ZlcmFsbCBkZXZlbG9wbWVudC4gXG4gICAgICAgICAgICAgIE91ciBTcG9ydHMgJiBSZWNyZWF0aW9uIHByb2dyYW0gYnVpbGRzIGNvbmZpZGVuY2UsIHRlYW13b3JrLCBhbmQgZGlzY2lwbGluZSB3aGlsZSBwcm9tb3RpbmcgYSBoZWFsdGh5IGxpZmVzdHlsZS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIHsvKiBBbmltYXRlZCBTdGF0cyBTZWN0aW9uICovfVxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNiBiZy1ncmFkaWVudC10by1yIGZyb20tYW1iZXItNTAgdG8tb3JhbmdlLTUwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTQgZ2FwLThcIj5cbiAgICAgICAgICAgICAge3N0YXRzLm1hcCgoc3RhdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8Q2FyZCBrZXk9e3N0YXQubGFiZWx9IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGhvdmVyOnNoYWRvdy14bCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgaG92ZXItc2NhbGUgYW5pbWF0ZS1mYWRlLWluXCI+XG4gICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2Nob29sLWdvbGQgdy0xNiBoLTE2IHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBteC1hdXRvIG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3RhdC5pY29uIGNsYXNzTmFtZT1cImgtOCB3LTggdGV4dC13aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LXNjaG9vbC1icm93biBtYi0yXCI+e3N0YXQubnVtYmVyfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWVsZWdhbnQtbGlnaHQgZm9udC1tZWRpdW1cIj57c3RhdC5sYWJlbH08L3A+XG4gICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIHsvKiBTcG9ydHMgRmFjaWxpdGllcyBHcmlkICovfVxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LXNjaG9vbC1icm93biB0ZXh0LWNlbnRlciBtYi0xMlwiPlNwb3J0cyBGYWNpbGl0aWVzPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMiBnYXAtOFwiPlxuICAgICAgICAgICAgICB7c3BvcnRzLm1hcCgoc3BvcnQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPENhcmQga2V5PXtzcG9ydC5uYW1lfSBjbGFzc05hbWU9XCJncm91cCBvdmVyZmxvdy1oaWRkZW4gaG92ZXI6c2hhZG93LXhsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBob3Zlci1zY2FsZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Nwb3J0LmltYWdlfSBcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3Nwb3J0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtNDggb2JqZWN0LWNvdmVyIGdyb3VwLWhvdmVyOnNjYWxlLTEwNSB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctYmxhY2svMjAgZ3JvdXAtaG92ZXI6YmctYmxhY2svMTAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTQgcmlnaHQtNCBiZy1zY2hvb2wtZ29sZCBwLTIgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwb3J0Lmljb24gY2xhc3NOYW1lPVwiaC02IHctNiB0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtc2Nob29sLWJyb3duIG1iLTNcIj57c3BvcnQubmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWVsZWdhbnQtbGlnaHQgbWItNFwiPntzcG9ydC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7c3BvcnQuZmFjaWxpdGllcy5tYXAoKGZhY2lsaXR5LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2l9IGNsYXNzTmFtZT1cImJnLWFtYmVyLTEwMCB0ZXh0LXNjaG9vbC1icm93biBweC0zIHB5LTEgcm91bmRlZC1mdWxsIHRleHQtc20gZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2ZhY2lsaXR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgey8qIFRlc3RpbW9uaWFscyBTZWN0aW9uICovfVxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNiBiZy1ncmFkaWVudC10by1yIGZyb20tYmx1ZS01MCB0by1pbmRpZ28tNTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gdGV4dC1jZW50ZXIgbWItMTJcIj5TdHVkZW50IFZvaWNlczwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgZ2FwLThcIj5cbiAgICAgICAgICAgICAge3Rlc3RpbW9uaWFscy5tYXAoKHRlc3RpbW9uaWFsLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxDYXJkIGtleT17dGVzdGltb25pYWwubmFtZX0gY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93LWxnIGhvdmVyOnNoYWRvdy14bCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zY2hvb2wtZ29sZCB3LTEyIGgtMTIgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1yLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcm9waHkgY2xhc3NOYW1lPVwiaC02IHctNiB0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXNjaG9vbC1icm93blwiPnt0ZXN0aW1vbmlhbC5uYW1lfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZWxlZ2FudC1saWdodFwiPnt0ZXN0aW1vbmlhbC5jbGFzc30g4oCiIHt0ZXN0aW1vbmlhbC5zcG9ydH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWVsZWdhbnQgaXRhbGljXCI+XCJ7dGVzdGltb25pYWwucXVvdGV9XCI8L3A+XG4gICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIHsvKiBVcGNvbWluZyBFdmVudHMgKi99XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTE2XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtc2Nob29sLWJyb3duIHRleHQtY2VudGVyIG1iLTEyXCI+VXBjb21pbmcgU3BvcnRzIEV2ZW50czwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTZcIj5cbiAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiaG92ZXI6c2hhZG93LXhsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBob3Zlci1zY2FsZVwiPlxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLTYgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxDYWxlbmRhciBjbGFzc05hbWU9XCJoLTEyIHctMTIgdGV4dC1zY2hvb2wtZ29sZCBteC1hdXRvIG1iLTRcIiAvPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIHRleHQtc2Nob29sLWJyb3duIG1iLTJcIj5Bbm51YWwgU3BvcnRzIE1lZXQ8L2gzPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1lbGVnYW50LWxpZ2h0IG1iLTJcIj5GZWJydWFyeSAxNS0xNiwgMjAyNTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1lbGVnYW50XCI+VHdvIGRheXMgb2YgY29tcGV0aXRpdmUgc3BvcnRzIGFuZCBjZWxlYnJhdGlvbjwvcD5cbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImhvdmVyOnNoYWRvdy14bCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgaG92ZXItc2NhbGVcIj5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC02IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8VHJvcGh5IGNsYXNzTmFtZT1cImgtMTIgdy0xMiB0ZXh0LXNjaG9vbC1nb2xkIG14LWF1dG8gbWItNFwiIC8+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gbWItMlwiPkludGVyLVNjaG9vbCBDcmlja2V0PC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZWxlZ2FudC1saWdodCBtYi0yXCI+TWFyY2ggNSwgMjAyNTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1lbGVnYW50XCI+Q2hhbXBpb25zaGlwIG1hdGNoIGFnYWluc3QgbmVpZ2hib3Jpbmcgc2Nob29sczwvcD5cbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImhvdmVyOnNoYWRvdy14bCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgaG92ZXItc2NhbGVcIj5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC02IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8Q2xvY2sgY2xhc3NOYW1lPVwiaC0xMiB3LTEyIHRleHQtc2Nob29sLWdvbGQgbXgtYXV0byBtYi00XCIgLz5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LXNjaG9vbC1icm93biBtYi0yXCI+V2Vla2x5IFBFIEhvdXJzPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZWxlZ2FudC1saWdodCBtYi0yXCI+RXZlcnkgTW9uZGF5ICYgVGh1cnNkYXk8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZWxlZ2FudFwiPlJlZ3VsYXIgcGh5c2ljYWwgZWR1Y2F0aW9uIGZvciBhbGwgc3R1ZGVudHM8L3A+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3BvcnRzO1xuIl0sImZpbGUiOiIvaG9tZS9zanJzaDkxNi9wdWJsaWNfaHRtbC9zcmMvcGFnZXMvY2FtcHVzL1Nwb3J0cy50c3gifQ==