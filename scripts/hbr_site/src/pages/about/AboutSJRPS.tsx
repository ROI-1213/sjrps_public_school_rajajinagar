import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/about/AboutSJRPS.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import Layout from "/src/components/Layout.tsx";
import PageBanner from "/src/components/PageBanner.tsx";
import TimelineSection from "/src/components/TimelineSection.tsx";
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { BookOpen, Heart, Star, Globe, Users, Award, Calendar, Shield, Target, Trophy, Lightbulb, GraduationCap, Building } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
import aboutBanner from "/src/assets/about-banner.jpg?import";
const AboutSJRPS = ()=>{
    const features = [
        {
            icon: BookOpen,
            title: "Smart Classrooms",
            description: "Interactive digital learning environments with modern technology and multimedia resources"
        },
        {
            icon: Users,
            title: "Dedicated Faculty",
            description: "Experienced educators committed to student success, personal growth, and academic excellence"
        },
        {
            icon: Heart,
            title: "Value Education",
            description: "Character building through comprehensive moral and ethical education programs"
        },
        {
            icon: Shield,
            title: "Safe Campus",
            description: "24/7 security, CCTV monitoring, and trained staff ensuring complete student safety"
        },
        {
            icon: Target,
            title: "Holistic Development",
            description: "Balanced focus on academics, sports, arts, and personality development"
        },
        {
            icon: Trophy,
            title: "Proven Track Record",
            description: "Consistent academic excellence with 95% success rate and numerous awards"
        }
    ];
    const values = [
        {
            icon: BookOpen,
            title: "Knowledge",
            description: "Fostering a love for learning and intellectual curiosity through innovative teaching methods"
        },
        {
            icon: Heart,
            title: "Compassion",
            description: "Developing empathy and care for others, creating responsible global citizens"
        },
        {
            icon: Star,
            title: "Excellence",
            description: "Striving for the highest standards in academics, character, and all endeavors"
        },
        {
            icon: Globe,
            title: "Global Perspective",
            description: "Preparing students for success in an interconnected, multicultural world"
        }
    ];
    const milestones = [
        {
            year: "1998",
            title: "School Foundation",
            description: "SJR HBR Layout established with 50 students and a vision for excellence",
            icon: /*#__PURE__*/ _jsxDEV(Building, {
                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:71:12",
                "data-lov-name": "Building",
                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                "data-component-line": "71",
                "data-component-file": "AboutSJRPS.tsx",
                "data-component-name": "Building",
                "data-component-content": "%7B%22className%22%3A%22h-5%20w-5%20text-white%22%7D",
                className: "h-5 w-5 text-white"
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                lineNumber: 71,
                columnNumber: 13
            }, this)
        },
        {
            year: "2005",
            title: "NAAC Accreditation",
            description: "Achieved Grade 'A' recognition for outstanding academic standards",
            icon: /*#__PURE__*/ _jsxDEV(Award, {
                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:77:12",
                "data-lov-name": "Award",
                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                "data-component-line": "77",
                "data-component-file": "AboutSJRPS.tsx",
                "data-component-name": "Award",
                "data-component-content": "%7B%22className%22%3A%22h-5%20w-5%20text-white%22%7D",
                className: "h-5 w-5 text-white"
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                lineNumber: 77,
                columnNumber: 13
            }, this)
        },
        {
            year: "2010",
            title: "Smart Campus Initiative",
            description: "Digital transformation with smart classrooms and modern technology",
            icon: /*#__PURE__*/ _jsxDEV(Lightbulb, {
                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:83:12",
                "data-lov-name": "Lightbulb",
                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                "data-component-line": "83",
                "data-component-file": "AboutSJRPS.tsx",
                "data-component-name": "Lightbulb",
                "data-component-content": "%7B%22className%22%3A%22h-5%20w-5%20text-white%22%7D",
                className: "h-5 w-5 text-white"
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                lineNumber: 83,
                columnNumber: 13
            }, this)
        },
        {
            year: "2015",
            title: "1000+ Alumni Milestone",
            description: "Reached the milestone of 1000 successful graduates making global impact",
            icon: /*#__PURE__*/ _jsxDEV(GraduationCap, {
                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:89:12",
                "data-lov-name": "GraduationCap",
                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                "data-component-line": "89",
                "data-component-file": "AboutSJRPS.tsx",
                "data-component-name": "GraduationCap",
                "data-component-content": "%7B%22className%22%3A%22h-5%20w-5%20text-white%22%7D",
                className: "h-5 w-5 text-white"
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                lineNumber: 89,
                columnNumber: 13
            }, this)
        },
        {
            year: "2020",
            title: "Digital Education",
            description: "Seamless transition to online learning during global pandemic",
            icon: /*#__PURE__*/ _jsxDEV(Globe, {
                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:95:12",
                "data-lov-name": "Globe",
                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                "data-component-line": "95",
                "data-component-file": "AboutSJRPS.tsx",
                "data-component-name": "Globe",
                "data-component-content": "%7B%22className%22%3A%22h-5%20w-5%20text-white%22%7D",
                className: "h-5 w-5 text-white"
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                lineNumber: 95,
                columnNumber: 13
            }, this)
        },
        {
            year: "2024",
            title: "Silver Jubilee",
            description: "Celebrating 26 years of educational excellence and community impact",
            icon: /*#__PURE__*/ _jsxDEV(Trophy, {
                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:101:12",
                "data-lov-name": "Trophy",
                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                "data-component-line": "101",
                "data-component-file": "AboutSJRPS.tsx",
                "data-component-name": "Trophy",
                "data-component-content": "%7B%22className%22%3A%22h-5%20w-5%20text-white%22%7D",
                className: "h-5 w-5 text-white"
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                lineNumber: 101,
                columnNumber: 13
            }, this)
        }
    ];
    return /*#__PURE__*/ _jsxDEV(Layout, {
        "data-lov-id": "src/pages/about/AboutSJRPS.tsx:106:4",
        "data-lov-name": "Layout",
        "data-component-path": "src/pages/about/AboutSJRPS.tsx",
        "data-component-line": "106",
        "data-component-file": "AboutSJRPS.tsx",
        "data-component-name": "Layout",
        "data-component-content": "%7B%7D",
        children: /*#__PURE__*/ _jsxDEV("div", {
            "data-lov-id": "src/pages/about/AboutSJRPS.tsx:107:6",
            "data-lov-name": "div",
            "data-component-path": "src/pages/about/AboutSJRPS.tsx",
            "data-component-line": "107",
            "data-component-file": "AboutSJRPS.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22min-h-screen%20bg-background%22%7D",
            className: "min-h-screen bg-background",
            children: [
                /*#__PURE__*/ _jsxDEV(PageBanner, {
                    "data-lov-id": "src/pages/about/AboutSJRPS.tsx:109:8",
                    "data-lov-name": "PageBanner",
                    "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                    "data-component-line": "109",
                    "data-component-file": "AboutSJRPS.tsx",
                    "data-component-name": "PageBanner",
                    "data-component-content": "%7B%7D",
                    title: "About SJR HBR Layout",
                    subtitle: "A Legacy of Educational Excellence Since 1998 - Where Values Meet Vision",
                    backgroundImage: aboutBanner
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("section", {
                    "data-lov-id": "src/pages/about/AboutSJRPS.tsx:116:8",
                    "data-lov-name": "section",
                    "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                    "data-component-line": "116",
                    "data-component-file": "AboutSJRPS.tsx",
                    "data-component-name": "section",
                    "data-component-content": "%7B%22className%22%3A%22py-16%22%7D",
                    className: "py-16",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/about/AboutSJRPS.tsx:117:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                        "data-component-line": "117",
                        "data-component-file": "AboutSJRPS.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                        className: "container mx-auto px-4",
                        children: [
                            /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:118:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                "data-component-line": "118",
                                "data-component-file": "AboutSJRPS.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22grid%20lg%3Agrid-cols-2%20gap-12%20items-center%20mb-16%22%7D",
                                className: "grid lg:grid-cols-2 gap-12 items-center mb-16",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        "data-lov-id": "src/pages/about/AboutSJRPS.tsx:119:14",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                        "data-component-line": "119",
                                        "data-component-file": "AboutSJRPS.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22className%22%3A%22animate-fade-in%22%7D",
                                        className: "animate-fade-in",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("h2", {
                                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:120:16",
                                                "data-lov-name": "h2",
                                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                "data-component-line": "120",
                                                "data-component-file": "AboutSJRPS.tsx",
                                                "data-component-name": "h2",
                                                "data-component-content": "%7B%22text%22%3A%22Overview%22%2C%22className%22%3A%22text-4xl%20font-bold%20text-school-brown%20mb-6%22%7D",
                                                className: "text-4xl font-bold text-school-brown mb-6",
                                                children: "Overview"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                lineNumber: 120,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:121:16",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                "data-component-line": "121",
                                                "data-component-file": "AboutSJRPS.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22space-y-6%20text-elegant%20leading-relaxed%22%7D",
                                                className: "space-y-6 text-elegant leading-relaxed",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("p", {
                                                        "data-lov-id": "src/pages/about/AboutSJRPS.tsx:122:18",
                                                        "data-lov-name": "p",
                                                        "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                        "data-component-line": "122",
                                                        "data-component-file": "AboutSJRPS.tsx",
                                                        "data-component-name": "p",
                                                        "data-component-content": "%7B%22text%22%3A%22SJR%20School%20is%20a%20premier%20institution%20rooted%20in%20tradition%20yet%20%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20driven%20by%20innovation.%20Established%20to%20nurture%20young%20minds%20with%20strong%20values%20and%20%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20academic%20excellence%2C%20we%20provide%20a%20holistic%20learning%20experience%20that%20shapes%20confident%2C%20%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20compassionate%2C%20and%20future-ready%20citizens.%22%7D",
                                                        children: "SJR School is a premier institution rooted in tradition yet driven by innovation. Established to nurture young minds with strong values and academic excellence, we provide a holistic learning experience that shapes confident, compassionate, and future-ready citizens."
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("p", {
                                                        "data-lov-id": "src/pages/about/AboutSJRPS.tsx:128:18",
                                                        "data-lov-name": "p",
                                                        "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                        "data-component-line": "128",
                                                        "data-component-file": "AboutSJRPS.tsx",
                                                        "data-component-name": "p",
                                                        "data-component-content": "%7B%22text%22%3A%22Our%20school%20blends%20modern%20pedagogy%20with%20cultural%20richness%2C%20offering%20a%20vibrant%20environment%20%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20for%20creativity%2C%20leadership%2C%20and%20discipline.%20We%20aim%20not%20just%20to%20teach%2C%20but%20to%20inspire%20%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20every%20student%20to%20reach%20their%20fullest%20potential%20while%20staying%20grounded%20in%20ethical%20values.%22%7D",
                                                        children: "Our school blends modern pedagogy with cultural richness, offering a vibrant environment for creativity, leadership, and discipline. We aim not just to teach, but to inspire every student to reach their fullest potential while staying grounded in ethical values."
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("p", {
                                                        "data-lov-id": "src/pages/about/AboutSJRPS.tsx:133:18",
                                                        "data-lov-name": "p",
                                                        "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                        "data-component-line": "133",
                                                        "data-component-file": "AboutSJRPS.tsx",
                                                        "data-component-name": "p",
                                                        "data-component-content": "%7B%22text%22%3A%22With%20state-of-the-art%20facilities%2C%20experienced%20faculty%2C%20and%20a%20nurturing%20environment%2C%20%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20we%20prepare%20our%20students%20not%20just%20for%20examinations%2C%20but%20for%20life%20itself.%20Our%20commitment%20%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20to%20excellence%20is%20reflected%20in%20our%20continuous%20growth%20and%20the%20success%20of%20our%20alumni%20%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20who%20are%20making%20their%20mark%20across%20the%20globe.%22%7D",
                                                        children: "With state-of-the-art facilities, experienced faculty, and a nurturing environment, we prepare our students not just for examinations, but for life itself. Our commitment to excellence is reflected in our continuous growth and the success of our alumni who are making their mark across the globe."
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/pages/about/AboutSJRPS.tsx:139:18",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                        "data-component-line": "139",
                                                        "data-component-file": "AboutSJRPS.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%22className%22%3A%22bg-gradient-to-r%20from-school-brown%2F10%20to-school-gold%2F10%20p-6%20rounded-lg%20border-l-4%20border-school-gold%22%7D",
                                                        className: "bg-gradient-to-r from-school-brown/10 to-school-gold/10 p-6 rounded-lg border-l-4 border-school-gold",
                                                        children: /*#__PURE__*/ _jsxDEV("blockquote", {
                                                            "data-lov-id": "src/pages/about/AboutSJRPS.tsx:140:20",
                                                            "data-lov-name": "blockquote",
                                                            "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                            "data-component-line": "140",
                                                            "data-component-file": "AboutSJRPS.tsx",
                                                            "data-component-name": "blockquote",
                                                            "data-component-content": "%7B%22text%22%3A%22%5C%22Where%20Excellence%20Meets%20Innovation%20-%20Shaping%20Tomorrow's%20Leaders%20Today%5C%22%22%2C%22className%22%3A%22text-school-brown%20font-medium%20italic%22%7D",
                                                            className: "text-school-brown font-medium italic",
                                                            children: '"Where Excellence Meets Innovation - Shaping Tomorrow\'s Leaders Today"'
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                lineNumber: 121,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        "data-lov-id": "src/pages/about/AboutSJRPS.tsx:146:14",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                        "data-component-line": "146",
                                        "data-component-file": "AboutSJRPS.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22className%22%3A%22relative%20animate-slide-in-right%22%7D",
                                        className: "relative animate-slide-in-right",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("img", {
                                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:147:16",
                                                "data-lov-name": "img",
                                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                "data-component-line": "147",
                                                "data-component-file": "AboutSJRPS.tsx",
                                                "data-component-name": "img",
                                                "data-component-content": "%7B%22className%22%3A%22rounded-lg%20shadow-xl%20w-full%20h-96%20object-cover%22%7D",
                                                src: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                                                alt: "School Building",
                                                className: "rounded-lg shadow-xl w-full h-96 object-cover"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:152:16",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                "data-component-line": "152",
                                                "data-component-file": "AboutSJRPS.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22absolute%20inset-0%20bg-gradient-to-t%20from-black%2F20%20to-transparent%20rounded-lg%22%7D",
                                                className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                lineNumber: 152,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:153:16",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                "data-component-line": "153",
                                                "data-component-file": "AboutSJRPS.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22absolute%20bottom-4%20left-4%20right-4%20text-white%22%7D",
                                                className: "absolute bottom-4 left-4 right-4 text-white",
                                                children: /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/pages/about/AboutSJRPS.tsx:154:18",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                    "data-component-line": "154",
                                                    "data-component-file": "AboutSJRPS.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22text%22%3A%22Modern%20facilities%20designed%20for%2021st-century%20learning%22%2C%22className%22%3A%22text-sm%20font-medium%22%7D",
                                                    className: "text-sm font-medium",
                                                    children: "Modern facilities designed for 21st-century learning"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV(TimelineSection, {
                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:160:8",
                                "data-lov-name": "TimelineSection",
                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                "data-component-line": "160",
                                "data-component-file": "AboutSJRPS.tsx",
                                "data-component-name": "TimelineSection",
                                "data-component-content": "%7B%22className%22%3A%22bg-gradient-to-b%20from-background%20to-secondary%2F20%22%7D",
                                title: "Our Legacy & Milestones",
                                items: milestones,
                                className: "bg-gradient-to-b from-background to-secondary/20"
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                lineNumber: 160,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:167:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                "data-component-line": "167",
                                "data-component-file": "AboutSJRPS.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22mb-16%22%7D",
                                className: "mb-16",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("h2", {
                                        "data-lov-id": "src/pages/about/AboutSJRPS.tsx:168:14",
                                        "data-lov-name": "h2",
                                        "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                        "data-component-line": "168",
                                        "data-component-file": "AboutSJRPS.tsx",
                                        "data-component-name": "h2",
                                        "data-component-content": "%7B%22text%22%3A%22Why%20Choose%20SJRPS-HBR%3F%22%2C%22className%22%3A%22text-4xl%20font-bold%20text-school-brown%20mb-8%20text-center%22%7D",
                                        className: "text-4xl font-bold text-school-brown mb-8 text-center",
                                        children: "Why Choose SJRPS-HBR?"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                        lineNumber: 168,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        "data-lov-id": "src/pages/about/AboutSJRPS.tsx:169:14",
                                        "data-lov-name": "p",
                                        "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                        "data-component-line": "169",
                                        "data-component-file": "AboutSJRPS.tsx",
                                        "data-component-name": "p",
                                        "data-component-content": "%7B%22text%22%3A%22Discover%20what%20makes%20SJR%20HBR%20Layout%20the%20preferred%20choice%20for%20thousands%20of%20families%20seeking%20%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20quality%20education%20with%20strong%20moral%20foundations.%22%2C%22className%22%3A%22text-lg%20text-elegant%20text-center%20mb-12%20max-w-3xl%20mx-auto%22%7D",
                                        className: "text-lg text-elegant text-center mb-12 max-w-3xl mx-auto",
                                        children: "Discover what makes SJR HBR Layout the preferred choice for thousands of families seeking quality education with strong moral foundations."
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                        lineNumber: 169,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        "data-lov-id": "src/pages/about/AboutSJRPS.tsx:173:14",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                        "data-component-line": "173",
                                        "data-component-file": "AboutSJRPS.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-2%20lg%3Agrid-cols-3%20gap-8%22%7D",
                                        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                                        children: features.map((feature, index)=>/*#__PURE__*/ _jsxDEV(Card, {
                                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:175:18",
                                                "data-lov-name": "Card",
                                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                "data-component-line": "175",
                                                "data-component-file": "AboutSJRPS.tsx",
                                                "data-component-name": "Card",
                                                "data-component-content": "%7B%22className%22%3A%22text-center%20hover%3Ashadow-xl%20transition-all%20duration-300%20hover-scale%20animate-fade-in%20bg-gradient-to-br%20from-amber-50%20to-orange-50%20group%22%7D",
                                                className: "text-center hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in bg-gradient-to-br from-amber-50 to-orange-50 group",
                                                children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                                    "data-lov-id": "src/pages/about/AboutSJRPS.tsx:176:20",
                                                    "data-lov-name": "CardContent",
                                                    "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                    "data-component-line": "176",
                                                    "data-component-file": "AboutSJRPS.tsx",
                                                    "data-component-name": "CardContent",
                                                    "data-component-content": "%7B%22className%22%3A%22p-8%22%7D",
                                                    className: "p-8",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            "data-lov-id": "src/pages/about/AboutSJRPS.tsx:177:22",
                                                            "data-lov-name": "div",
                                                            "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                            "data-component-line": "177",
                                                            "data-component-file": "AboutSJRPS.tsx",
                                                            "data-component-name": "div",
                                                            "data-component-content": "%7B%22className%22%3A%22bg-school-gold%20w-16%20h-16%20rounded-full%20flex%20items-center%20justify-center%20mx-auto%20mb-6%20group-hover%3Ascale-110%20transition-transform%20duration-300%22%7D",
                                                            className: "bg-school-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300",
                                                            children: /*#__PURE__*/ _jsxDEV(feature.icon, {
                                                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:178:24",
                                                                "data-lov-name": "feature.icon",
                                                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                                "data-component-line": "178",
                                                                "data-component-file": "AboutSJRPS.tsx",
                                                                "data-component-name": "feature.icon",
                                                                "data-component-content": "%7B%22className%22%3A%22h-8%20w-8%20text-white%22%7D",
                                                                className: "h-8 w-8 text-white"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                                lineNumber: 178,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                            lineNumber: 177,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("h3", {
                                                            "data-lov-id": "src/pages/about/AboutSJRPS.tsx:180:22",
                                                            "data-lov-name": "h3",
                                                            "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                            "data-component-line": "180",
                                                            "data-component-file": "AboutSJRPS.tsx",
                                                            "data-component-name": "h3",
                                                            "data-component-content": "%7B%22className%22%3A%22text-2xl%20font-bold%20text-school-brown%20mb-4%22%7D",
                                                            className: "text-2xl font-bold text-school-brown mb-4",
                                                            children: feature.title
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                            lineNumber: 180,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("p", {
                                                            "data-lov-id": "src/pages/about/AboutSJRPS.tsx:181:22",
                                                            "data-lov-name": "p",
                                                            "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                            "data-component-line": "181",
                                                            "data-component-file": "AboutSJRPS.tsx",
                                                            "data-component-name": "p",
                                                            "data-component-content": "%7B%22className%22%3A%22text-elegant-light%20leading-relaxed%22%7D",
                                                            className: "text-elegant-light leading-relaxed",
                                                            children: feature.description
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                            lineNumber: 181,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 21
                                                }, this)
                                            }, feature.title, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                lineNumber: 175,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                lineNumber: 167,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:189:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                "data-component-line": "189",
                                "data-component-file": "AboutSJRPS.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22mb-16%20text-center%22%7D",
                                className: "mb-16 text-center",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("h2", {
                                        "data-lov-id": "src/pages/about/AboutSJRPS.tsx:190:14",
                                        "data-lov-name": "h2",
                                        "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                        "data-component-line": "190",
                                        "data-component-file": "AboutSJRPS.tsx",
                                        "data-component-name": "h2",
                                        "data-component-content": "%7B%22text%22%3A%22Our%20Educational%20Philosophy%22%2C%22className%22%3A%22text-4xl%20font-bold%20text-school-brown%20mb-8%22%7D",
                                        className: "text-4xl font-bold text-school-brown mb-8",
                                        children: "Our Educational Philosophy"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                        lineNumber: 190,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        "data-lov-id": "src/pages/about/AboutSJRPS.tsx:191:14",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                        "data-component-line": "191",
                                        "data-component-file": "AboutSJRPS.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22className%22%3A%22max-w-4xl%20mx-auto%22%7D",
                                        className: "max-w-4xl mx-auto",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("p", {
                                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:192:16",
                                                "data-lov-name": "p",
                                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                "data-component-line": "192",
                                                "data-component-file": "AboutSJRPS.tsx",
                                                "data-component-name": "p",
                                                "data-component-content": "%7B%22text%22%3A%22At%20SJR%20HBR%20Layout%2C%20education%20transcends%20textbooks%20and%20examinations.%20We%20believe%20in%20nurturing%20%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20the%20complete%20individual%20-%20intellectually%2C%20emotionally%2C%20socially%2C%20and%20spiritually.%20Our%20%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20approach%20combines%20the%20wisdom%20of%20traditional%20values%20with%20the%20innovation%20of%20modern%20pedagogy.%22%2C%22className%22%3A%22text-lg%20text-elegant%20leading-relaxed%20mb-8%22%7D",
                                                className: "text-lg text-elegant leading-relaxed mb-8",
                                                children: "At SJR HBR Layout, education transcends textbooks and examinations. We believe in nurturing the complete individual - intellectually, emotionally, socially, and spiritually. Our approach combines the wisdom of traditional values with the innovation of modern pedagogy."
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                lineNumber: 192,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:197:16",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                "data-component-line": "197",
                                                "data-component-file": "AboutSJRPS.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22bg-gradient-to-r%20from-school-brown%20to-school-gold%20text-white%20p-8%20rounded-lg%20mb-8%22%7D",
                                                className: "bg-gradient-to-r from-school-brown to-school-gold text-white p-8 rounded-lg mb-8",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("blockquote", {
                                                        "data-lov-id": "src/pages/about/AboutSJRPS.tsx:198:18",
                                                        "data-lov-name": "blockquote",
                                                        "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                        "data-component-line": "198",
                                                        "data-component-file": "AboutSJRPS.tsx",
                                                        "data-component-name": "blockquote",
                                                        "data-component-content": "%7B%22text%22%3A%22%5C%22Every%20child%20is%20a%20different%20kind%20of%20flower%2C%20and%20all%20together%2C%20they%20make%20this%20world%20a%20beautiful%20garden.%5C%22%22%2C%22className%22%3A%22text-xl%20italic%20mb-4%22%7D",
                                                        className: "text-xl italic mb-4",
                                                        children: '"Every child is a different kind of flower, and all together, they make this world a beautiful garden."'
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("cite", {
                                                        "data-lov-id": "src/pages/about/AboutSJRPS.tsx:201:18",
                                                        "data-lov-name": "cite",
                                                        "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                        "data-component-line": "201",
                                                        "data-component-file": "AboutSJRPS.tsx",
                                                        "data-component-name": "cite",
                                                        "data-component-content": "%7B%22text%22%3A%22-%20Our%20Educational%20Philosophy%22%2C%22className%22%3A%22text-amber-200%22%7D",
                                                        className: "text-amber-200",
                                                        children: "- Our Educational Philosophy"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                        lineNumber: 201,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                lineNumber: 197,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:203:16",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                "data-component-line": "203",
                                                "data-component-file": "AboutSJRPS.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-3%20gap-8%22%7D",
                                                className: "grid md:grid-cols-3 gap-8",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/pages/about/AboutSJRPS.tsx:204:18",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                        "data-component-line": "204",
                                                        "data-component-file": "AboutSJRPS.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%22className%22%3A%22text-center%22%7D",
                                                        className: "text-center",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV(Calendar, {
                                                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:205:20",
                                                                "data-lov-name": "Calendar",
                                                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                                "data-component-line": "205",
                                                                "data-component-file": "AboutSJRPS.tsx",
                                                                "data-component-name": "Calendar",
                                                                "data-component-content": "%7B%22className%22%3A%22h-12%20w-12%20text-school-gold%20mx-auto%20mb-4%22%7D",
                                                                className: "h-12 w-12 text-school-gold mx-auto mb-4"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                                lineNumber: 205,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("h4", {
                                                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:206:20",
                                                                "data-lov-name": "h4",
                                                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                                "data-component-line": "206",
                                                                "data-component-file": "AboutSJRPS.tsx",
                                                                "data-component-name": "h4",
                                                                "data-component-content": "%7B%22text%22%3A%22Daily%20Implementation%22%2C%22className%22%3A%22text-xl%20font-bold%20text-school-brown%20mb-2%22%7D",
                                                                className: "text-xl font-bold text-school-brown mb-2",
                                                                children: "Daily Implementation"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                                lineNumber: 206,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:207:20",
                                                                "data-lov-name": "p",
                                                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                                "data-component-line": "207",
                                                                "data-component-file": "AboutSJRPS.tsx",
                                                                "data-component-name": "p",
                                                                "data-component-content": "%7B%22text%22%3A%22Values%20integrated%20into%20everyday%20learning%20experiences%22%2C%22className%22%3A%22text-elegant-light%22%7D",
                                                                className: "text-elegant-light",
                                                                children: "Values integrated into everyday learning experiences"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                                lineNumber: 207,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/pages/about/AboutSJRPS.tsx:209:18",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                        "data-component-line": "209",
                                                        "data-component-file": "AboutSJRPS.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%22className%22%3A%22text-center%22%7D",
                                                        className: "text-center",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV(Users, {
                                                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:210:20",
                                                                "data-lov-name": "Users",
                                                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                                "data-component-line": "210",
                                                                "data-component-file": "AboutSJRPS.tsx",
                                                                "data-component-name": "Users",
                                                                "data-component-content": "%7B%22className%22%3A%22h-12%20w-12%20text-school-gold%20mx-auto%20mb-4%22%7D",
                                                                className: "h-12 w-12 text-school-gold mx-auto mb-4"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                                lineNumber: 210,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("h4", {
                                                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:211:20",
                                                                "data-lov-name": "h4",
                                                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                                "data-component-line": "211",
                                                                "data-component-file": "AboutSJRPS.tsx",
                                                                "data-component-name": "h4",
                                                                "data-component-content": "%7B%22text%22%3A%22Community%20Focus%22%2C%22className%22%3A%22text-xl%20font-bold%20text-school-brown%20mb-2%22%7D",
                                                                className: "text-xl font-bold text-school-brown mb-2",
                                                                children: "Community Focus"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                                lineNumber: 211,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:212:20",
                                                                "data-lov-name": "p",
                                                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                                "data-component-line": "212",
                                                                "data-component-file": "AboutSJRPS.tsx",
                                                                "data-component-name": "p",
                                                                "data-component-content": "%7B%22text%22%3A%22Building%20strong%20school-family%20partnerships%22%2C%22className%22%3A%22text-elegant-light%22%7D",
                                                                className: "text-elegant-light",
                                                                children: "Building strong school-family partnerships"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                                lineNumber: 212,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/pages/about/AboutSJRPS.tsx:214:18",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                        "data-component-line": "214",
                                                        "data-component-file": "AboutSJRPS.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%22className%22%3A%22text-center%22%7D",
                                                        className: "text-center",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV(Target, {
                                                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:215:20",
                                                                "data-lov-name": "Target",
                                                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                                "data-component-line": "215",
                                                                "data-component-file": "AboutSJRPS.tsx",
                                                                "data-component-name": "Target",
                                                                "data-component-content": "%7B%22className%22%3A%22h-12%20w-12%20text-school-gold%20mx-auto%20mb-4%22%7D",
                                                                className: "h-12 w-12 text-school-gold mx-auto mb-4"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                                lineNumber: 215,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("h4", {
                                                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:216:20",
                                                                "data-lov-name": "h4",
                                                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                                "data-component-line": "216",
                                                                "data-component-file": "AboutSJRPS.tsx",
                                                                "data-component-name": "h4",
                                                                "data-component-content": "%7B%22text%22%3A%22Future%20Ready%22%2C%22className%22%3A%22text-xl%20font-bold%20text-school-brown%20mb-2%22%7D",
                                                                className: "text-xl font-bold text-school-brown mb-2",
                                                                children: "Future Ready"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                                lineNumber: 216,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:217:20",
                                                                "data-lov-name": "p",
                                                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                                "data-component-line": "217",
                                                                "data-component-file": "AboutSJRPS.tsx",
                                                                "data-component-name": "p",
                                                                "data-component-content": "%7B%22text%22%3A%22Preparing%20students%20for%20tomorrow's%20challenges%22%2C%22className%22%3A%22text-elegant-light%22%7D",
                                                                className: "text-elegant-light",
                                                                children: "Preparing students for tomorrow's challenges"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                                lineNumber: 217,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                lineNumber: 203,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                        lineNumber: 191,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                lineNumber: 189,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:224:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                "data-component-line": "224",
                                "data-component-file": "AboutSJRPS.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%7D",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("h2", {
                                        "data-lov-id": "src/pages/about/AboutSJRPS.tsx:225:14",
                                        "data-lov-name": "h2",
                                        "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                        "data-component-line": "225",
                                        "data-component-file": "AboutSJRPS.tsx",
                                        "data-component-name": "h2",
                                        "data-component-content": "%7B%22text%22%3A%22Our%20Core%20Values%22%2C%22className%22%3A%22text-4xl%20font-bold%20text-school-brown%20mb-12%20text-center%22%7D",
                                        className: "text-4xl font-bold text-school-brown mb-12 text-center",
                                        children: "Our Core Values"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        "data-lov-id": "src/pages/about/AboutSJRPS.tsx:226:14",
                                        "data-lov-name": "p",
                                        "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                        "data-component-line": "226",
                                        "data-component-file": "AboutSJRPS.tsx",
                                        "data-component-name": "p",
                                        "data-component-content": "%7B%22text%22%3A%22These%20fundamental%20principles%20guide%20every%20decision%20we%20make%20and%20every%20program%20we%20offer%2C%20%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ensuring%20that%20our%20students%20develop%20both%20academic%20excellence%20and%20strong%20character.%22%2C%22className%22%3A%22text-lg%20text-elegant%20text-center%20mb-12%20max-w-3xl%20mx-auto%22%7D",
                                        className: "text-lg text-elegant text-center mb-12 max-w-3xl mx-auto",
                                        children: "These fundamental principles guide every decision we make and every program we offer, ensuring that our students develop both academic excellence and strong character."
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                        lineNumber: 226,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        "data-lov-id": "src/pages/about/AboutSJRPS.tsx:230:14",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                        "data-component-line": "230",
                                        "data-component-file": "AboutSJRPS.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-2%20lg%3Agrid-cols-4%20gap-8%22%7D",
                                        className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
                                        children: values.map((value, index)=>/*#__PURE__*/ _jsxDEV(Card, {
                                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:232:18",
                                                "data-lov-name": "Card",
                                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                "data-component-line": "232",
                                                "data-component-file": "AboutSJRPS.tsx",
                                                "data-component-name": "Card",
                                                "data-component-content": "%7B%22className%22%3A%22text-center%20hover%3Ashadow-xl%20transition-all%20duration-300%20hover-scale%20animate-fade-in%22%7D",
                                                className: "text-center hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in",
                                                children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                                    "data-lov-id": "src/pages/about/AboutSJRPS.tsx:233:20",
                                                    "data-lov-name": "CardContent",
                                                    "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                    "data-component-line": "233",
                                                    "data-component-file": "AboutSJRPS.tsx",
                                                    "data-component-name": "CardContent",
                                                    "data-component-content": "%7B%22className%22%3A%22p-6%22%7D",
                                                    className: "p-6",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            "data-lov-id": "src/pages/about/AboutSJRPS.tsx:234:22",
                                                            "data-lov-name": "div",
                                                            "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                            "data-component-line": "234",
                                                            "data-component-file": "AboutSJRPS.tsx",
                                                            "data-component-name": "div",
                                                            "data-component-content": "%7B%22className%22%3A%22bg-school-gold%20w-16%20h-16%20rounded-full%20flex%20items-center%20justify-center%20mx-auto%20mb-4%22%7D",
                                                            className: "bg-school-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
                                                            children: /*#__PURE__*/ _jsxDEV(value.icon, {
                                                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:235:24",
                                                                "data-lov-name": "value.icon",
                                                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                                "data-component-line": "235",
                                                                "data-component-file": "AboutSJRPS.tsx",
                                                                "data-component-name": "value.icon",
                                                                "data-component-content": "%7B%22className%22%3A%22h-8%20w-8%20text-white%22%7D",
                                                                className: "h-8 w-8 text-white"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                                lineNumber: 235,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                            lineNumber: 234,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("h3", {
                                                            "data-lov-id": "src/pages/about/AboutSJRPS.tsx:237:22",
                                                            "data-lov-name": "h3",
                                                            "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                            "data-component-line": "237",
                                                            "data-component-file": "AboutSJRPS.tsx",
                                                            "data-component-name": "h3",
                                                            "data-component-content": "%7B%22className%22%3A%22text-xl%20font-bold%20text-school-brown%20mb-3%22%7D",
                                                            className: "text-xl font-bold text-school-brown mb-3",
                                                            children: value.title
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                            lineNumber: 237,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("p", {
                                                            "data-lov-id": "src/pages/about/AboutSJRPS.tsx:238:22",
                                                            "data-lov-name": "p",
                                                            "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                            "data-component-line": "238",
                                                            "data-component-file": "AboutSJRPS.tsx",
                                                            "data-component-name": "p",
                                                            "data-component-content": "%7B%22className%22%3A%22text-elegant-light%22%7D",
                                                            className: "text-elegant-light",
                                                            children: value.description
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                            lineNumber: 238,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 21
                                                }, this)
                                            }, value.title, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                lineNumber: 232,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                        lineNumber: 230,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                lineNumber: 224,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("section", {
                    "data-lov-id": "src/pages/about/AboutSJRPS.tsx:248:8",
                    "data-lov-name": "section",
                    "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                    "data-component-line": "248",
                    "data-component-file": "AboutSJRPS.tsx",
                    "data-component-name": "section",
                    "data-component-content": "%7B%22className%22%3A%22py-16%20bg-gradient-to-b%20from-amber-50%20to-orange-50%22%7D",
                    className: "py-16 bg-gradient-to-b from-amber-50 to-orange-50",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/about/AboutSJRPS.tsx:249:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                        "data-component-line": "249",
                        "data-component-file": "AboutSJRPS.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                        className: "container mx-auto px-4",
                        children: [
                            /*#__PURE__*/ _jsxDEV("h2", {
                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:250:12",
                                "data-lov-name": "h2",
                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                "data-component-line": "250",
                                "data-component-file": "AboutSJRPS.tsx",
                                "data-component-name": "h2",
                                "data-component-content": "%7B%22text%22%3A%22Our%20Achievements%22%2C%22className%22%3A%22text-4xl%20font-bold%20text-school-brown%20text-center%20mb-8%22%7D",
                                className: "text-4xl font-bold text-school-brown text-center mb-8",
                                children: "Our Achievements"
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                lineNumber: 250,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("p", {
                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:251:12",
                                "data-lov-name": "p",
                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                "data-component-line": "251",
                                "data-component-file": "AboutSJRPS.tsx",
                                "data-component-name": "p",
                                "data-component-content": "%7B%22text%22%3A%22Recognition%20and%20accolades%20that%20reflect%20our%20commitment%20to%20excellence%20in%20education%20and%20%5Cn%20%20%20%20%20%20%20%20%20%20%20%20%20%20holistic%20development%20of%20our%20students.%22%2C%22className%22%3A%22text-lg%20text-elegant%20text-center%20mb-12%20max-w-3xl%20mx-auto%22%7D",
                                className: "text-lg text-elegant text-center mb-12 max-w-3xl mx-auto",
                                children: "Recognition and accolades that reflect our commitment to excellence in education and holistic development of our students."
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                lineNumber: 251,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:255:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                "data-component-line": "255",
                                "data-component-file": "AboutSJRPS.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-4%20gap-8%20max-w-6xl%20mx-auto%22%7D",
                                className: "grid md:grid-cols-4 gap-8 max-w-6xl mx-auto",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        "data-lov-id": "src/pages/about/AboutSJRPS.tsx:256:14",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                        "data-component-line": "256",
                                        "data-component-file": "AboutSJRPS.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22className%22%3A%22text-center%22%7D",
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV(Award, {
                                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:257:16",
                                                "data-lov-name": "Award",
                                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                "data-component-line": "257",
                                                "data-component-file": "AboutSJRPS.tsx",
                                                "data-component-name": "Award",
                                                "data-component-content": "%7B%22className%22%3A%22h-16%20w-16%20text-school-gold%20mx-auto%20mb-4%22%7D",
                                                className: "h-16 w-16 text-school-gold mx-auto mb-4"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                lineNumber: 257,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("h3", {
                                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:258:16",
                                                "data-lov-name": "h3",
                                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                "data-component-line": "258",
                                                "data-component-file": "AboutSJRPS.tsx",
                                                "data-component-name": "h3",
                                                "data-component-content": "%7B%22text%22%3A%22NAAC%20Grade%20'A'%22%2C%22className%22%3A%22text-3xl%20font-bold%20text-school-brown%20mb-2%22%7D",
                                                className: "text-3xl font-bold text-school-brown mb-2",
                                                children: "NAAC Grade 'A'"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                lineNumber: 258,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("p", {
                                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:259:16",
                                                "data-lov-name": "p",
                                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                "data-component-line": "259",
                                                "data-component-file": "AboutSJRPS.tsx",
                                                "data-component-name": "p",
                                                "data-component-content": "%7B%22text%22%3A%22Nationally%20accredited%20for%20academic%20excellence%22%2C%22className%22%3A%22text-elegant-light%22%7D",
                                                className: "text-elegant-light",
                                                children: "Nationally accredited for academic excellence"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                lineNumber: 259,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                        lineNumber: 256,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        "data-lov-id": "src/pages/about/AboutSJRPS.tsx:261:14",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                        "data-component-line": "261",
                                        "data-component-file": "AboutSJRPS.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22className%22%3A%22text-center%22%7D",
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV(Users, {
                                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:262:16",
                                                "data-lov-name": "Users",
                                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                "data-component-line": "262",
                                                "data-component-file": "AboutSJRPS.tsx",
                                                "data-component-name": "Users",
                                                "data-component-content": "%7B%22className%22%3A%22h-16%20w-16%20text-school-gold%20mx-auto%20mb-4%22%7D",
                                                className: "h-16 w-16 text-school-gold mx-auto mb-4"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                lineNumber: 262,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("h3", {
                                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:263:16",
                                                "data-lov-name": "h3",
                                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                "data-component-line": "263",
                                                "data-component-file": "AboutSJRPS.tsx",
                                                "data-component-name": "h3",
                                                "data-component-content": "%7B%22text%22%3A%221000%2B%20Alumni%22%2C%22className%22%3A%22text-3xl%20font-bold%20text-school-brown%20mb-2%22%7D",
                                                className: "text-3xl font-bold text-school-brown mb-2",
                                                children: "1000+ Alumni"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                lineNumber: 263,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("p", {
                                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:264:16",
                                                "data-lov-name": "p",
                                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                "data-component-line": "264",
                                                "data-component-file": "AboutSJRPS.tsx",
                                                "data-component-name": "p",
                                                "data-component-content": "%7B%22text%22%3A%22Successful%20graduates%20making%20global%20impact%22%2C%22className%22%3A%22text-elegant-light%22%7D",
                                                className: "text-elegant-light",
                                                children: "Successful graduates making global impact"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                lineNumber: 264,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                        lineNumber: 261,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        "data-lov-id": "src/pages/about/AboutSJRPS.tsx:266:14",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                        "data-component-line": "266",
                                        "data-component-file": "AboutSJRPS.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22className%22%3A%22text-center%22%7D",
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV(Star, {
                                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:267:16",
                                                "data-lov-name": "Star",
                                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                "data-component-line": "267",
                                                "data-component-file": "AboutSJRPS.tsx",
                                                "data-component-name": "Star",
                                                "data-component-content": "%7B%22className%22%3A%22h-16%20w-16%20text-school-gold%20mx-auto%20mb-4%22%7D",
                                                className: "h-16 w-16 text-school-gold mx-auto mb-4"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                lineNumber: 267,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("h3", {
                                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:268:16",
                                                "data-lov-name": "h3",
                                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                "data-component-line": "268",
                                                "data-component-file": "AboutSJRPS.tsx",
                                                "data-component-name": "h3",
                                                "data-component-content": "%7B%22text%22%3A%2225%2B%20Years%22%2C%22className%22%3A%22text-3xl%20font-bold%20text-school-brown%20mb-2%22%7D",
                                                className: "text-3xl font-bold text-school-brown mb-2",
                                                children: "25+ Years"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                lineNumber: 268,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("p", {
                                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:269:16",
                                                "data-lov-name": "p",
                                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                "data-component-line": "269",
                                                "data-component-file": "AboutSJRPS.tsx",
                                                "data-component-name": "p",
                                                "data-component-content": "%7B%22text%22%3A%22Silver%20jubilee%20of%20educational%20excellence%22%2C%22className%22%3A%22text-elegant-light%22%7D",
                                                className: "text-elegant-light",
                                                children: "Silver jubilee of educational excellence"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                lineNumber: 269,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                        lineNumber: 266,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        "data-lov-id": "src/pages/about/AboutSJRPS.tsx:271:14",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                        "data-component-line": "271",
                                        "data-component-file": "AboutSJRPS.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22className%22%3A%22text-center%22%7D",
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV(Trophy, {
                                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:272:16",
                                                "data-lov-name": "Trophy",
                                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                "data-component-line": "272",
                                                "data-component-file": "AboutSJRPS.tsx",
                                                "data-component-name": "Trophy",
                                                "data-component-content": "%7B%22className%22%3A%22h-16%20w-16%20text-school-gold%20mx-auto%20mb-4%22%7D",
                                                className: "h-16 w-16 text-school-gold mx-auto mb-4"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                lineNumber: 272,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("h3", {
                                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:273:16",
                                                "data-lov-name": "h3",
                                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                "data-component-line": "273",
                                                "data-component-file": "AboutSJRPS.tsx",
                                                "data-component-name": "h3",
                                                "data-component-content": "%7B%22text%22%3A%2295%25%20Success%22%2C%22className%22%3A%22text-3xl%20font-bold%20text-school-brown%20mb-2%22%7D",
                                                className: "text-3xl font-bold text-school-brown mb-2",
                                                children: "95% Success"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                lineNumber: 273,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("p", {
                                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:274:16",
                                                "data-lov-name": "p",
                                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                                "data-component-line": "274",
                                                "data-component-file": "AboutSJRPS.tsx",
                                                "data-component-name": "p",
                                                "data-component-content": "%7B%22text%22%3A%22Outstanding%20academic%20achievement%20rate%22%2C%22className%22%3A%22text-elegant-light%22%7D",
                                                className: "text-elegant-light",
                                                children: "Outstanding academic achievement rate"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                                lineNumber: 274,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                        lineNumber: 271,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                lineNumber: 255,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/pages/about/AboutSJRPS.tsx:279:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                "data-component-line": "279",
                                "data-component-file": "AboutSJRPS.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22mt-16%20max-w-4xl%20mx-auto%20text-center%22%7D",
                                className: "mt-16 max-w-4xl mx-auto text-center",
                                children: /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/about/AboutSJRPS.tsx:280:14",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                    "data-component-line": "280",
                                    "data-component-file": "AboutSJRPS.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22bg-white%20p-8%20rounded-lg%20shadow-lg%20border-l-4%20border-school-gold%22%7D",
                                    className: "bg-white p-8 rounded-lg shadow-lg border-l-4 border-school-gold",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("blockquote", {
                                            "data-lov-id": "src/pages/about/AboutSJRPS.tsx:281:16",
                                            "data-lov-name": "blockquote",
                                            "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                            "data-component-line": "281",
                                            "data-component-file": "AboutSJRPS.tsx",
                                            "data-component-name": "blockquote",
                                            "data-component-content": "%7B%22text%22%3A%22%5C%22Education%20rooted%20in%20values%20creates%20citizens%20rooted%20in%20purpose.%5C%22%22%2C%22className%22%3A%22text-2xl%20italic%20text-school-brown%20mb-4%22%7D",
                                            className: "text-2xl italic text-school-brown mb-4",
                                            children: '"Education rooted in values creates citizens rooted in purpose."'
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                            lineNumber: 281,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("cite", {
                                            "data-lov-id": "src/pages/about/AboutSJRPS.tsx:284:16",
                                            "data-lov-name": "cite",
                                            "data-component-path": "src/pages/about/AboutSJRPS.tsx",
                                            "data-component-line": "284",
                                            "data-component-file": "AboutSJRPS.tsx",
                                            "data-component-name": "cite",
                                            "data-component-content": "%7B%22text%22%3A%22-%20SJRPS-HBR%20Educational%20Philosophy%22%2C%22className%22%3A%22text-school-gold%20font-semibold%22%7D",
                                            className: "text-school-gold font-semibold",
                                            children: "- SJRPS-HBR Educational Philosophy"
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                            lineNumber: 284,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                    lineNumber: 280,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                                lineNumber: 279,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                        lineNumber: 249,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
                    lineNumber: 248,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
            lineNumber: 107,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
};
_c = AboutSJRPS;
export default AboutSJRPS;
var _c;
$RefreshReg$(_c, "AboutSJRPS");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/pages/about/AboutSJRPS.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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QVFqRTtLQTNSTWY7QUE2Uk4sZUFBZUEsV0FBVSIsIm5hbWVzIjpbIkxheW91dCIsIlBhZ2VCYW5uZXIiLCJUaW1lbGluZVNlY3Rpb24iLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJCb29rT3BlbiIsIkhlYXJ0IiwiU3RhciIsIkdsb2JlIiwiVXNlcnMiLCJBd2FyZCIsIkNhbGVuZGFyIiwiU2hpZWxkIiwiVGFyZ2V0IiwiVHJvcGh5IiwiTGlnaHRidWxiIiwiR3JhZHVhdGlvbkNhcCIsIkJ1aWxkaW5nIiwiYWJvdXRCYW5uZXIiLCJBYm91dFNKUlBTIiwiZmVhdHVyZXMiLCJpY29uIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInZhbHVlcyIsIm1pbGVzdG9uZXMiLCJ5ZWFyIiwiZGF0YS1sb3YtaWQiLCJkYXRhLWxvdi1uYW1lIiwiZGF0YS1jb21wb25lbnQtcGF0aCIsImRhdGEtY29tcG9uZW50LWxpbmUiLCJkYXRhLWNvbXBvbmVudC1maWxlIiwiZGF0YS1jb21wb25lbnQtbmFtZSIsImRhdGEtY29tcG9uZW50LWNvbnRlbnQiLCJjbGFzc05hbWUiLCJkaXYiLCJzdWJ0aXRsZSIsImJhY2tncm91bmRJbWFnZSIsInNlY3Rpb24iLCJoMiIsInAiLCJibG9ja3F1b3RlIiwiaW1nIiwic3JjIiwiYWx0IiwiaXRlbXMiLCJtYXAiLCJmZWF0dXJlIiwiaW5kZXgiLCJoMyIsImNpdGUiLCJoNCIsInZhbHVlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkFib3V0U0pSUFMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFBhZ2VCYW5uZXIgZnJvbSBcIkAvY29tcG9uZW50cy9QYWdlQmFubmVyXCI7XG5pbXBvcnQgVGltZWxpbmVTZWN0aW9uIGZyb20gXCJAL2NvbXBvbmVudHMvVGltZWxpbmVTZWN0aW9uXCI7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHsgQm9va09wZW4sIEhlYXJ0LCBTdGFyLCBHbG9iZSwgVXNlcnMsIEF3YXJkLCBDYWxlbmRhciwgU2hpZWxkLCBUYXJnZXQsIFRyb3BoeSwgTGlnaHRidWxiLCBHcmFkdWF0aW9uQ2FwLCBCdWlsZGluZyB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCBhYm91dEJhbm5lciBmcm9tIFwiQC9hc3NldHMvYWJvdXQtYmFubmVyLmpwZ1wiO1xuXG5jb25zdCBBYm91dFNKUlBTID0gKCkgPT4ge1xuICBjb25zdCBmZWF0dXJlcyA9IFtcbiAgICB7XG4gICAgICBpY29uOiBCb29rT3BlbixcbiAgICAgIHRpdGxlOiBcIlNtYXJ0IENsYXNzcm9vbXNcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkludGVyYWN0aXZlIGRpZ2l0YWwgbGVhcm5pbmcgZW52aXJvbm1lbnRzIHdpdGggbW9kZXJuIHRlY2hub2xvZ3kgYW5kIG11bHRpbWVkaWEgcmVzb3VyY2VzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IFVzZXJzLFxuICAgICAgdGl0bGU6IFwiRGVkaWNhdGVkIEZhY3VsdHlcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkV4cGVyaWVuY2VkIGVkdWNhdG9ycyBjb21taXR0ZWQgdG8gc3R1ZGVudCBzdWNjZXNzLCBwZXJzb25hbCBncm93dGgsIGFuZCBhY2FkZW1pYyBleGNlbGxlbmNlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IEhlYXJ0LFxuICAgICAgdGl0bGU6IFwiVmFsdWUgRWR1Y2F0aW9uXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJDaGFyYWN0ZXIgYnVpbGRpbmcgdGhyb3VnaCBjb21wcmVoZW5zaXZlIG1vcmFsIGFuZCBldGhpY2FsIGVkdWNhdGlvbiBwcm9ncmFtc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiBTaGllbGQsXG4gICAgICB0aXRsZTogXCJTYWZlIENhbXB1c1wiLFxuICAgICAgZGVzY3JpcHRpb246IFwiMjQvNyBzZWN1cml0eSwgQ0NUViBtb25pdG9yaW5nLCBhbmQgdHJhaW5lZCBzdGFmZiBlbnN1cmluZyBjb21wbGV0ZSBzdHVkZW50IHNhZmV0eVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiBUYXJnZXQsXG4gICAgICB0aXRsZTogXCJIb2xpc3RpYyBEZXZlbG9wbWVudFwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiQmFsYW5jZWQgZm9jdXMgb24gYWNhZGVtaWNzLCBzcG9ydHMsIGFydHMsIGFuZCBwZXJzb25hbGl0eSBkZXZlbG9wbWVudFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiBUcm9waHksXG4gICAgICB0aXRsZTogXCJQcm92ZW4gVHJhY2sgUmVjb3JkXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJDb25zaXN0ZW50IGFjYWRlbWljIGV4Y2VsbGVuY2Ugd2l0aCA5NSUgc3VjY2VzcyByYXRlIGFuZCBudW1lcm91cyBhd2FyZHNcIlxuICAgIH1cbiAgXTtcblxuICBjb25zdCB2YWx1ZXMgPSBbXG4gICAge1xuICAgICAgaWNvbjogQm9va09wZW4sXG4gICAgICB0aXRsZTogXCJLbm93bGVkZ2VcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkZvc3RlcmluZyBhIGxvdmUgZm9yIGxlYXJuaW5nIGFuZCBpbnRlbGxlY3R1YWwgY3VyaW9zaXR5IHRocm91Z2ggaW5ub3ZhdGl2ZSB0ZWFjaGluZyBtZXRob2RzXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246IEhlYXJ0LFxuICAgICAgdGl0bGU6IFwiQ29tcGFzc2lvblwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiRGV2ZWxvcGluZyBlbXBhdGh5IGFuZCBjYXJlIGZvciBvdGhlcnMsIGNyZWF0aW5nIHJlc3BvbnNpYmxlIGdsb2JhbCBjaXRpemVuc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiBTdGFyLFxuICAgICAgdGl0bGU6IFwiRXhjZWxsZW5jZVwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiU3RyaXZpbmcgZm9yIHRoZSBoaWdoZXN0IHN0YW5kYXJkcyBpbiBhY2FkZW1pY3MsIGNoYXJhY3RlciwgYW5kIGFsbCBlbmRlYXZvcnNcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogR2xvYmUsXG4gICAgICB0aXRsZTogXCJHbG9iYWwgUGVyc3BlY3RpdmVcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlByZXBhcmluZyBzdHVkZW50cyBmb3Igc3VjY2VzcyBpbiBhbiBpbnRlcmNvbm5lY3RlZCwgbXVsdGljdWx0dXJhbCB3b3JsZFwiXG4gICAgfVxuICBdO1xuXG4gIGNvbnN0IG1pbGVzdG9uZXMgPSBbXG4gICAgeyBcbiAgICAgIHllYXI6IFwiMTk5OFwiLCBcbiAgICAgIHRpdGxlOiBcIlNjaG9vbCBGb3VuZGF0aW9uXCIsIFxuICAgICAgZGVzY3JpcHRpb246IFwiU0pSIEhCUiBMYXlvdXQgZXN0YWJsaXNoZWQgd2l0aCA1MCBzdHVkZW50cyBhbmQgYSB2aXNpb24gZm9yIGV4Y2VsbGVuY2VcIixcbiAgICAgIGljb246IDxCdWlsZGluZyBjbGFzc05hbWU9XCJoLTUgdy01IHRleHQtd2hpdGVcIiAvPlxuICAgIH0sXG4gICAgeyBcbiAgICAgIHllYXI6IFwiMjAwNVwiLCBcbiAgICAgIHRpdGxlOiBcIk5BQUMgQWNjcmVkaXRhdGlvblwiLCBcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkFjaGlldmVkIEdyYWRlICdBJyByZWNvZ25pdGlvbiBmb3Igb3V0c3RhbmRpbmcgYWNhZGVtaWMgc3RhbmRhcmRzXCIsXG4gICAgICBpY29uOiA8QXdhcmQgY2xhc3NOYW1lPVwiaC01IHctNSB0ZXh0LXdoaXRlXCIgLz5cbiAgICB9LFxuICAgIHsgXG4gICAgICB5ZWFyOiBcIjIwMTBcIiwgXG4gICAgICB0aXRsZTogXCJTbWFydCBDYW1wdXMgSW5pdGlhdGl2ZVwiLCBcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkRpZ2l0YWwgdHJhbnNmb3JtYXRpb24gd2l0aCBzbWFydCBjbGFzc3Jvb21zIGFuZCBtb2Rlcm4gdGVjaG5vbG9neVwiLFxuICAgICAgaWNvbjogPExpZ2h0YnVsYiBjbGFzc05hbWU9XCJoLTUgdy01IHRleHQtd2hpdGVcIiAvPlxuICAgIH0sXG4gICAgeyBcbiAgICAgIHllYXI6IFwiMjAxNVwiLCBcbiAgICAgIHRpdGxlOiBcIjEwMDArIEFsdW1uaSBNaWxlc3RvbmVcIiwgXG4gICAgICBkZXNjcmlwdGlvbjogXCJSZWFjaGVkIHRoZSBtaWxlc3RvbmUgb2YgMTAwMCBzdWNjZXNzZnVsIGdyYWR1YXRlcyBtYWtpbmcgZ2xvYmFsIGltcGFjdFwiLFxuICAgICAgaWNvbjogPEdyYWR1YXRpb25DYXAgY2xhc3NOYW1lPVwiaC01IHctNSB0ZXh0LXdoaXRlXCIgLz5cbiAgICB9LFxuICAgIHsgXG4gICAgICB5ZWFyOiBcIjIwMjBcIiwgXG4gICAgICB0aXRsZTogXCJEaWdpdGFsIEVkdWNhdGlvblwiLCBcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlNlYW1sZXNzIHRyYW5zaXRpb24gdG8gb25saW5lIGxlYXJuaW5nIGR1cmluZyBnbG9iYWwgcGFuZGVtaWNcIixcbiAgICAgIGljb246IDxHbG9iZSBjbGFzc05hbWU9XCJoLTUgdy01IHRleHQtd2hpdGVcIiAvPlxuICAgIH0sXG4gICAgeyBcbiAgICAgIHllYXI6IFwiMjAyNFwiLCBcbiAgICAgIHRpdGxlOiBcIlNpbHZlciBKdWJpbGVlXCIsIFxuICAgICAgZGVzY3JpcHRpb246IFwiQ2VsZWJyYXRpbmcgMjYgeWVhcnMgb2YgZWR1Y2F0aW9uYWwgZXhjZWxsZW5jZSBhbmQgY29tbXVuaXR5IGltcGFjdFwiLFxuICAgICAgaWNvbjogPFRyb3BoeSBjbGFzc05hbWU9XCJoLTUgdy01IHRleHQtd2hpdGVcIiAvPlxuICAgIH1cbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1iYWNrZ3JvdW5kXCI+XG4gICAgICAgIHsvKiBNb2Rlcm4gQmFubmVyIHdpdGggUGFyYWxsYXggKi99XG4gICAgICAgIDxQYWdlQmFubmVyXG4gICAgICAgICAgdGl0bGU9XCJBYm91dCBTSlIgSEJSIExheW91dFwiXG4gICAgICAgICAgc3VidGl0bGU9XCJBIExlZ2FjeSBvZiBFZHVjYXRpb25hbCBFeGNlbGxlbmNlIFNpbmNlIDE5OTggLSBXaGVyZSBWYWx1ZXMgTWVldCBWaXNpb25cIlxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZT17YWJvdXRCYW5uZXJ9XG4gICAgICAgIC8+XG5cbiAgICAgICAgey8qIE1haW4gQ29udGVudCAqL31cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBsZzpncmlkLWNvbHMtMiBnYXAtMTIgaXRlbXMtY2VudGVyIG1iLTE2XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZS1mYWRlLWluXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LXNjaG9vbC1icm93biBtYi02XCI+T3ZlcnZpZXc8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02IHRleHQtZWxlZ2FudCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBTSlIgU2Nob29sIGlzIGEgcHJlbWllciBpbnN0aXR1dGlvbiByb290ZWQgaW4gdHJhZGl0aW9uIHlldCBcbiAgICAgICAgICAgICAgICAgICAgZHJpdmVuIGJ5IGlubm92YXRpb24uIEVzdGFibGlzaGVkIHRvIG51cnR1cmUgeW91bmcgbWluZHMgd2l0aCBzdHJvbmcgdmFsdWVzIGFuZCBcbiAgICAgICAgICAgICAgICAgICAgYWNhZGVtaWMgZXhjZWxsZW5jZSwgd2UgcHJvdmlkZSBhIGhvbGlzdGljIGxlYXJuaW5nIGV4cGVyaWVuY2UgdGhhdCBzaGFwZXMgY29uZmlkZW50LCBcbiAgICAgICAgICAgICAgICAgICAgY29tcGFzc2lvbmF0ZSwgYW5kIGZ1dHVyZS1yZWFkeSBjaXRpemVucy5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBPdXIgc2Nob29sIGJsZW5kcyBtb2Rlcm4gcGVkYWdvZ3kgd2l0aCBjdWx0dXJhbCByaWNobmVzcywgb2ZmZXJpbmcgYSB2aWJyYW50IGVudmlyb25tZW50IFxuICAgICAgICAgICAgICAgICAgICBmb3IgY3JlYXRpdml0eSwgbGVhZGVyc2hpcCwgYW5kIGRpc2NpcGxpbmUuIFdlIGFpbSBub3QganVzdCB0byB0ZWFjaCwgYnV0IHRvIGluc3BpcmUgXG4gICAgICAgICAgICAgICAgICAgIGV2ZXJ5IHN0dWRlbnQgdG8gcmVhY2ggdGhlaXIgZnVsbGVzdCBwb3RlbnRpYWwgd2hpbGUgc3RheWluZyBncm91bmRlZCBpbiBldGhpY2FsIHZhbHVlcy5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBXaXRoIHN0YXRlLW9mLXRoZS1hcnQgZmFjaWxpdGllcywgZXhwZXJpZW5jZWQgZmFjdWx0eSwgYW5kIGEgbnVydHVyaW5nIGVudmlyb25tZW50LCBcbiAgICAgICAgICAgICAgICAgICAgd2UgcHJlcGFyZSBvdXIgc3R1ZGVudHMgbm90IGp1c3QgZm9yIGV4YW1pbmF0aW9ucywgYnV0IGZvciBsaWZlIGl0c2VsZi4gT3VyIGNvbW1pdG1lbnQgXG4gICAgICAgICAgICAgICAgICAgIHRvIGV4Y2VsbGVuY2UgaXMgcmVmbGVjdGVkIGluIG91ciBjb250aW51b3VzIGdyb3d0aCBhbmQgdGhlIHN1Y2Nlc3Mgb2Ygb3VyIGFsdW1uaSBcbiAgICAgICAgICAgICAgICAgICAgd2hvIGFyZSBtYWtpbmcgdGhlaXIgbWFyayBhY3Jvc3MgdGhlIGdsb2JlLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tc2Nob29sLWJyb3duLzEwIHRvLXNjaG9vbC1nb2xkLzEwIHAtNiByb3VuZGVkLWxnIGJvcmRlci1sLTQgYm9yZGVyLXNjaG9vbC1nb2xkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxibG9ja3F1b3RlIGNsYXNzTmFtZT1cInRleHQtc2Nob29sLWJyb3duIGZvbnQtbWVkaXVtIGl0YWxpY1wiPlxuICAgICAgICAgICAgICAgICAgICAgIFwiV2hlcmUgRXhjZWxsZW5jZSBNZWV0cyBJbm5vdmF0aW9uIC0gU2hhcGluZyBUb21vcnJvdydzIExlYWRlcnMgVG9kYXlcIlxuICAgICAgICAgICAgICAgICAgICA8L2Jsb2NrcXVvdGU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYW5pbWF0ZS1zbGlkZS1pbi1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUyMzA1MDg1NDA1OC04ZGY5MDExMGM5ZDE/aXhsaWI9cmItNC4wLjMmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz04MDAmcT04MFwiXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJTY2hvb2wgQnVpbGRpbmdcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBzaGFkb3cteGwgdy1mdWxsIGgtOTYgb2JqZWN0LWNvdmVyXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmFkaWVudC10by10IGZyb20tYmxhY2svMjAgdG8tdHJhbnNwYXJlbnQgcm91bmRlZC1sZ1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTQgbGVmdC00IHJpZ2h0LTQgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bVwiPk1vZGVybiBmYWNpbGl0aWVzIGRlc2lnbmVkIGZvciAyMXN0LWNlbnR1cnkgbGVhcm5pbmc8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIFRpbWVsaW5lIFNlY3Rpb24gZm9yIFNjaG9vbCBNaWxlc3RvbmVzICovfVxuICAgICAgICA8VGltZWxpbmVTZWN0aW9uXG4gICAgICAgICAgdGl0bGU9XCJPdXIgTGVnYWN5ICYgTWlsZXN0b25lc1wiXG4gICAgICAgICAgaXRlbXM9e21pbGVzdG9uZXN9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tYiBmcm9tLWJhY2tncm91bmQgdG8tc2Vjb25kYXJ5LzIwXCJcbiAgICAgICAgLz5cblxuICAgICAgICAgICAgey8qIFdoeSBDaG9vc2UgU0pSUFMtSEJSICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xNlwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtc2Nob29sLWJyb3duIG1iLTggdGV4dC1jZW50ZXJcIj5XaHkgQ2hvb3NlIFNKUlBTLUhCUj88L2gyPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZWxlZ2FudCB0ZXh0LWNlbnRlciBtYi0xMiBtYXgtdy0zeGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgIERpc2NvdmVyIHdoYXQgbWFrZXMgU0pSIEhCUiBMYXlvdXQgdGhlIHByZWZlcnJlZCBjaG9pY2UgZm9yIHRob3VzYW5kcyBvZiBmYW1pbGllcyBzZWVraW5nIFxuICAgICAgICAgICAgICAgIHF1YWxpdHkgZWR1Y2F0aW9uIHdpdGggc3Ryb25nIG1vcmFsIGZvdW5kYXRpb25zLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtOFwiPlxuICAgICAgICAgICAgICAgIHtmZWF0dXJlcy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8Q2FyZCBrZXk9e2ZlYXR1cmUudGl0bGV9IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGhvdmVyOnNoYWRvdy14bCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgaG92ZXItc2NhbGUgYW5pbWF0ZS1mYWRlLWluIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tYW1iZXItNTAgdG8tb3JhbmdlLTUwIGdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNjaG9vbC1nb2xkIHctMTYgaC0xNiByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXgtYXV0byBtYi02IGdyb3VwLWhvdmVyOnNjYWxlLTExMCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmZWF0dXJlLmljb24gY2xhc3NOYW1lPVwiaC04IHctOCB0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtc2Nob29sLWJyb3duIG1iLTRcIj57ZmVhdHVyZS50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZWxlZ2FudC1saWdodCBsZWFkaW5nLXJlbGF4ZWRcIj57ZmVhdHVyZS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBTY2hvb2wgRXRob3MgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTE2IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gbWItOFwiPk91ciBFZHVjYXRpb25hbCBQaGlsb3NvcGh5PC9oMj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1lbGVnYW50IGxlYWRpbmctcmVsYXhlZCBtYi04XCI+XG4gICAgICAgICAgICAgICAgICBBdCBTSlIgSEJSIExheW91dCwgZWR1Y2F0aW9uIHRyYW5zY2VuZHMgdGV4dGJvb2tzIGFuZCBleGFtaW5hdGlvbnMuIFdlIGJlbGlldmUgaW4gbnVydHVyaW5nIFxuICAgICAgICAgICAgICAgICAgdGhlIGNvbXBsZXRlIGluZGl2aWR1YWwgLSBpbnRlbGxlY3R1YWxseSwgZW1vdGlvbmFsbHksIHNvY2lhbGx5LCBhbmQgc3Bpcml0dWFsbHkuIE91ciBcbiAgICAgICAgICAgICAgICAgIGFwcHJvYWNoIGNvbWJpbmVzIHRoZSB3aXNkb20gb2YgdHJhZGl0aW9uYWwgdmFsdWVzIHdpdGggdGhlIGlubm92YXRpb24gb2YgbW9kZXJuIHBlZGFnb2d5LlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLXIgZnJvbS1zY2hvb2wtYnJvd24gdG8tc2Nob29sLWdvbGQgdGV4dC13aGl0ZSBwLTggcm91bmRlZC1sZyBtYi04XCI+XG4gICAgICAgICAgICAgICAgICA8YmxvY2txdW90ZSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGl0YWxpYyBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgIFwiRXZlcnkgY2hpbGQgaXMgYSBkaWZmZXJlbnQga2luZCBvZiBmbG93ZXIsIGFuZCBhbGwgdG9nZXRoZXIsIHRoZXkgbWFrZSB0aGlzIHdvcmxkIGEgYmVhdXRpZnVsIGdhcmRlbi5cIlxuICAgICAgICAgICAgICAgICAgPC9ibG9ja3F1b3RlPlxuICAgICAgICAgICAgICAgICAgPGNpdGUgY2xhc3NOYW1lPVwidGV4dC1hbWJlci0yMDBcIj4tIE91ciBFZHVjYXRpb25hbCBQaGlsb3NvcGh5PC9jaXRlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMyBnYXAtOFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kYXIgY2xhc3NOYW1lPVwiaC0xMiB3LTEyIHRleHQtc2Nob29sLWdvbGQgbXgtYXV0byBtYi00XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtc2Nob29sLWJyb3duIG1iLTJcIj5EYWlseSBJbXBsZW1lbnRhdGlvbjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZWxlZ2FudC1saWdodFwiPlZhbHVlcyBpbnRlZ3JhdGVkIGludG8gZXZlcnlkYXkgbGVhcm5pbmcgZXhwZXJpZW5jZXM8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFVzZXJzIGNsYXNzTmFtZT1cImgtMTIgdy0xMiB0ZXh0LXNjaG9vbC1nb2xkIG14LWF1dG8gbWItNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXNjaG9vbC1icm93biBtYi0yXCI+Q29tbXVuaXR5IEZvY3VzPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1lbGVnYW50LWxpZ2h0XCI+QnVpbGRpbmcgc3Ryb25nIHNjaG9vbC1mYW1pbHkgcGFydG5lcnNoaXBzPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUYXJnZXQgY2xhc3NOYW1lPVwiaC0xMiB3LTEyIHRleHQtc2Nob29sLWdvbGQgbXgtYXV0byBtYi00XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtc2Nob29sLWJyb3duIG1iLTJcIj5GdXR1cmUgUmVhZHk8L2g0PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWVsZWdhbnQtbGlnaHRcIj5QcmVwYXJpbmcgc3R1ZGVudHMgZm9yIHRvbW9ycm93J3MgY2hhbGxlbmdlczwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogQ29yZSBWYWx1ZXMgKi99XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtc2Nob29sLWJyb3duIG1iLTEyIHRleHQtY2VudGVyXCI+T3VyIENvcmUgVmFsdWVzPC9oMj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWVsZWdhbnQgdGV4dC1jZW50ZXIgbWItMTIgbWF4LXctM3hsIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgICBUaGVzZSBmdW5kYW1lbnRhbCBwcmluY2lwbGVzIGd1aWRlIGV2ZXJ5IGRlY2lzaW9uIHdlIG1ha2UgYW5kIGV2ZXJ5IHByb2dyYW0gd2Ugb2ZmZXIsIFxuICAgICAgICAgICAgICAgIGVuc3VyaW5nIHRoYXQgb3VyIHN0dWRlbnRzIGRldmVsb3AgYm90aCBhY2FkZW1pYyBleGNlbGxlbmNlIGFuZCBzdHJvbmcgY2hhcmFjdGVyLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNCBnYXAtOFwiPlxuICAgICAgICAgICAgICAgIHt2YWx1ZXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxDYXJkIGtleT17dmFsdWUudGl0bGV9IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGhvdmVyOnNoYWRvdy14bCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgaG92ZXItc2NhbGUgYW5pbWF0ZS1mYWRlLWluXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNjaG9vbC1nb2xkIHctMTYgaC0xNiByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXgtYXV0byBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dmFsdWUuaWNvbiBjbGFzc05hbWU9XCJoLTggdy04IHRleHQtd2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXNjaG9vbC1icm93biBtYi0zXCI+e3ZhbHVlLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1lbGVnYW50LWxpZ2h0XCI+e3ZhbHVlLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIHsvKiBBY2hpZXZlbWVudHMgU2VjdGlvbiAqL31cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTYgYmctZ3JhZGllbnQtdG8tYiBmcm9tLWFtYmVyLTUwIHRvLW9yYW5nZS01MFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LXNjaG9vbC1icm93biB0ZXh0LWNlbnRlciBtYi04XCI+T3VyIEFjaGlldmVtZW50czwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZWxlZ2FudCB0ZXh0LWNlbnRlciBtYi0xMiBtYXgtdy0zeGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICBSZWNvZ25pdGlvbiBhbmQgYWNjb2xhZGVzIHRoYXQgcmVmbGVjdCBvdXIgY29tbWl0bWVudCB0byBleGNlbGxlbmNlIGluIGVkdWNhdGlvbiBhbmQgXG4gICAgICAgICAgICAgIGhvbGlzdGljIGRldmVsb3BtZW50IG9mIG91ciBzdHVkZW50cy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtNCBnYXAtOCBtYXgtdy02eGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPEF3YXJkIGNsYXNzTmFtZT1cImgtMTYgdy0xNiB0ZXh0LXNjaG9vbC1nb2xkIG14LWF1dG8gbWItNFwiIC8+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LXNjaG9vbC1icm93biBtYi0yXCI+TkFBQyBHcmFkZSAnQSc8L2gzPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZWxlZ2FudC1saWdodFwiPk5hdGlvbmFsbHkgYWNjcmVkaXRlZCBmb3IgYWNhZGVtaWMgZXhjZWxsZW5jZTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8VXNlcnMgY2xhc3NOYW1lPVwiaC0xNiB3LTE2IHRleHQtc2Nob29sLWdvbGQgbXgtYXV0byBtYi00XCIgLz5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtc2Nob29sLWJyb3duIG1iLTJcIj4xMDAwKyBBbHVtbmk8L2gzPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZWxlZ2FudC1saWdodFwiPlN1Y2Nlc3NmdWwgZ3JhZHVhdGVzIG1ha2luZyBnbG9iYWwgaW1wYWN0PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxTdGFyIGNsYXNzTmFtZT1cImgtMTYgdy0xNiB0ZXh0LXNjaG9vbC1nb2xkIG14LWF1dG8gbWItNFwiIC8+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LXNjaG9vbC1icm93biBtYi0yXCI+MjUrIFllYXJzPC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWVsZWdhbnQtbGlnaHRcIj5TaWx2ZXIganViaWxlZSBvZiBlZHVjYXRpb25hbCBleGNlbGxlbmNlPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxUcm9waHkgY2xhc3NOYW1lPVwiaC0xNiB3LTE2IHRleHQtc2Nob29sLWdvbGQgbXgtYXV0byBtYi00XCIgLz5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtc2Nob29sLWJyb3duIG1iLTJcIj45NSUgU3VjY2VzczwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1lbGVnYW50LWxpZ2h0XCI+T3V0c3RhbmRpbmcgYWNhZGVtaWMgYWNoaWV2ZW1lbnQgcmF0ZTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIEluc3BpcmF0aW9uYWwgUXVvdGUgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTE2IG1heC13LTR4bCBteC1hdXRvIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC04IHJvdW5kZWQtbGcgc2hhZG93LWxnIGJvcmRlci1sLTQgYm9yZGVyLXNjaG9vbC1nb2xkXCI+XG4gICAgICAgICAgICAgICAgPGJsb2NrcXVvdGUgY2xhc3NOYW1lPVwidGV4dC0yeGwgaXRhbGljIHRleHQtc2Nob29sLWJyb3duIG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgIFwiRWR1Y2F0aW9uIHJvb3RlZCBpbiB2YWx1ZXMgY3JlYXRlcyBjaXRpemVucyByb290ZWQgaW4gcHVycG9zZS5cIlxuICAgICAgICAgICAgICAgIDwvYmxvY2txdW90ZT5cbiAgICAgICAgICAgICAgICA8Y2l0ZSBjbGFzc05hbWU9XCJ0ZXh0LXNjaG9vbC1nb2xkIGZvbnQtc2VtaWJvbGRcIj4tIFNKUlBTLUhCUiBFZHVjYXRpb25hbCBQaGlsb3NvcGh5PC9jaXRlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0U0pSUFM7XG4iXSwiZmlsZSI6Ii9ob21lL3NqcnNoOTE2L3B1YmxpY19odG1sL3NyYy9wYWdlcy9hYm91dC9BYm91dFNKUlBTLnRzeCJ9