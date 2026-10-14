import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Header.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/components/Header.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import { Menu, X, ChevronDown } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=5efa796b";
import __vite__cjsImport4_react from "/node_modules/.vite/deps/react.js?v=5efa796b"; const useState = __vite__cjsImport4_react["useState"];
const menuItems = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "About Us",
        path: "/about",
        submenu: [
            {
                title: "Overview",
                path: "/about/overview"
            },
            {
                title: "Vision & Mission",
                path: "/about/vision-mission"
            },
            {
                title: "Chief Patron's Message",
                path: "/about/chief-patron-message"
            },
            {
                title: "President's Message",
                path: "/about/presidents-message"
            },
            {
                title: "Secretary's Message",
                path: "/about/secretary-message"
            },
            {
                title: "Principal's Message",
                path: "/about/principal-message"
            },
            {
                title: "Office Bearers",
                path: "/about/office-bearers"
            },
            {
                title: "EC Members",
                path: "/about/ec-members"
            },
            {
                title: "Core Team",
                path: "/about/core-team"
            },
            {
                title: "Our Teachers",
                path: "/about/teachers"
            }
        ]
    },
    {
        title: "Admissions",
        path: "/admissions",
        submenu: [
            {
                title: "Admission Process",
                path: "/admissions/admissions-process"
            },
            {
                title: "School Policies",
                path: "/admissions/school-policies"
            },
            {
                title: "Eligibility Criteria",
                path: "/admissions/eligibility-criteria"
            },
            {
                title: "Fees Structure",
                path: "/admissions/fees-structure"
            }
        ]
    },
    {
        title: "Academics",
        path: "/academics",
        submenu: [
            {
                title: "Pre-Primary",
                path: "/academics/pre-primary"
            },
            {
                title: "Primary Level",
                path: "/academics/primary-level"
            },
            {
                title: "Secondary Stage",
                path: "/academics/secondary-stage"
            },
            {
                title: "Senior Secondary Stage",
                path: "/academics/senior-secondary-stage"
            },
            {
                title: "Curriculum",
                path: "/academics/curriculum"
            },
            {
                title: "Calendar of Events",
                path: "/academics/calendar"
            },
            {
                title: "Achievements",
                path: "/academics/achievements"
            },
            {
                title: "Attendance Rules",
                path: "/academics/attendance-rules"
            },
            {
                title: "Code of Conduct",
                path: "/academics/code-of-conduct"
            },
            {
                title: "Examination Guidelines",
                path: "/academics/examination-guidelines"
            },
            {
                title: "Promotion Criteria",
                path: "/academics/promotion-criteria"
            }
        ]
    },
    {
        title: "Infrastructure",
        path: "/facilities",
        submenu: [
            {
                title: "Classroom",
                path: "/facilities/classroom"
            },
            {
                title: "Library",
                path: "/facilities/library"
            },
            {
                title: "Laboratories",
                path: "/facilities/laboratories"
            },
            {
                title: "Transportation",
                path: "/facilities/transportation"
            },
            {
                title: "Auditorium",
                path: "/facilities/auditorium"
            },
            {
                title: "Computer Lab",
                path: "/facilities/computer-lab"
            },
            {
                title: "Smart Class",
                path: "/facilities/smart-class"
            },
            {
                title: "Sports",
                path: "/facilities/sports"
            },
            {
                title: "Yoga",
                path: "/facilities/yoga"
            },
            {
                title: "Robotics Classes",
                path: "/facilities/robotics"
            }
        ]
    },
    {
        title: "Life @ SJRPS-HBR",
        path: "/life",
        submenu: [
            {
                title: "Activities",
                path: "/life/activities"
            },
            {
                title: "Taekwondo",
                path: "/life/taekwondo"
            },
            {
                title: "Scouts & Guides",
                path: "/life/scouts-guides"
            },
            {
                title: "National Festivals",
                path: "/life/national-festivals"
            },
            {
                title: "Celebrations",
                path: "/life/celebrations"
            },
            {
                title: "Workshops",
                path: "/life/workshops"
            },
            {
                title: "Students/Parents Testimonials",
                path: "/life/testimonials"
            }
        ]
    },
    {
        title: "News & Events",
        path: "/news"
    },
    {
        title: "Gallery",
        path: "/gallery",
        alignRight: true,
        submenu: [
            {
                title: "Photo Gallery",
                path: "/gallery/photos"
            },
            {
                title: "Video Gallery",
                path: "/gallery/videos"
            }
        ]
    },
    {
        title: "Contact",
        path: "/contact"
    },
    {
        title: "Mandatory Disclosure",
        path: "/mandatory-disclosure"
    }
];
const Header = ()=>{
    _s();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openMobileSection, setOpenMobileSection] = useState(null);
    return /*#__PURE__*/ _jsxDEV("header", {
        "data-lov-id": "src/components/Header.tsx:101:4",
        "data-lov-name": "header",
        "data-component-path": "src/components/Header.tsx",
        "data-component-line": "101",
        "data-component-file": "Header.tsx",
        "data-component-name": "header",
        "data-component-content": "%7B%22className%22%3A%22bg-indian-green%20text-white%20shadow-lg%20sticky%20top-0%20z-50%22%7D",
        className: "bg-indian-green text-white shadow-lg sticky top-0 z-50",
        children: /*#__PURE__*/ _jsxDEV("div", {
            "data-lov-id": "src/components/Header.tsx:102:6",
            "data-lov-name": "div",
            "data-component-path": "src/components/Header.tsx",
            "data-component-line": "102",
            "data-component-file": "Header.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/components/Header.tsx:103:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/Header.tsx",
                    "data-component-line": "103",
                    "data-component-file": "Header.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ _jsxDEV("nav", {
                            "data-lov-id": "src/components/Header.tsx:105:10",
                            "data-lov-name": "nav",
                            "data-component-path": "src/components/Header.tsx",
                            "data-component-line": "105",
                            "data-component-file": "Header.tsx",
                            "data-component-name": "nav",
                            "data-component-content": "%7B%22className%22%3A%22hidden%20lg%3Aflex%20items-center%20justify-center%20w-full%20gap-1%20xl%3Agap-2%20py-1%22%7D",
                            className: "hidden lg:flex items-center justify-center w-full gap-1 xl:gap-2 py-1",
                            children: menuItems.map((item)=>/*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/components/Header.tsx:107:14",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/Header.tsx",
                                    "data-component-line": "107",
                                    "data-component-file": "Header.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22relative%20group%22%7D",
                                    className: "relative group",
                                    children: [
                                        item.submenu ? /*#__PURE__*/ _jsxDEV("button", {
                                            "data-lov-id": "src/components/Header.tsx:109:18",
                                            "data-lov-name": "button",
                                            "data-component-path": "src/components/Header.tsx",
                                            "data-component-line": "109",
                                            "data-component-file": "Header.tsx",
                                            "data-component-name": "button",
                                            "data-component-content": "%7B%22className%22%3A%22inline-flex%20items-center%20gap-1%20text-sm%20font-medium%20text-white%20hover%3Atext-golden-yellow%20transition-colors%20duration-200%20px-3%20py-2%20rounded-md%20hover%3Abg-white%2F10%22%7D",
                                            type: "button",
                                            className: "inline-flex items-center gap-1 text-sm font-medium text-white hover:text-golden-yellow transition-colors duration-200 px-3 py-2 rounded-md hover:bg-white/10",
                                            children: [
                                                item.title,
                                                /*#__PURE__*/ _jsxDEV(ChevronDown, {
                                                    "data-lov-id": "src/components/Header.tsx:114:20",
                                                    "data-lov-name": "ChevronDown",
                                                    "data-component-path": "src/components/Header.tsx",
                                                    "data-component-line": "114",
                                                    "data-component-file": "Header.tsx",
                                                    "data-component-name": "ChevronDown",
                                                    "data-component-content": "%7B%22className%22%3A%22h-3.5%20w-3.5%20transition-transform%20duration-200%20group-hover%3Arotate-180%22%7D",
                                                    className: "h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/Header.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/components/Header.tsx",
                                            lineNumber: 109,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ _jsxDEV(Link, {
                                            "data-lov-id": "src/components/Header.tsx:117:18",
                                            "data-lov-name": "Link",
                                            "data-component-path": "src/components/Header.tsx",
                                            "data-component-line": "117",
                                            "data-component-file": "Header.tsx",
                                            "data-component-name": "Link",
                                            "data-component-content": "%7B%22className%22%3A%22inline-flex%20items-center%20gap-1%20text-sm%20font-medium%20text-white%20hover%3Atext-golden-yellow%20transition-colors%20duration-200%20px-3%20py-2%20rounded-md%20hover%3Abg-white%2F10%22%7D",
                                            to: item.path,
                                            className: "inline-flex items-center gap-1 text-sm font-medium text-white hover:text-golden-yellow transition-colors duration-200 px-3 py-2 rounded-md hover:bg-white/10",
                                            children: item.title
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/Header.tsx",
                                            lineNumber: 117,
                                            columnNumber: 19
                                        }, this),
                                        item.submenu && /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/components/Header.tsx:125:18",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/components/Header.tsx",
                                            "data-component-line": "125",
                                            "data-component-file": "Header.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%7D",
                                            className: `absolute top-full ${item.alignRight ? "right-0" : "left-0"} mt-1 min-w-56 bg-white shadow-2xl rounded-lg py-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50 border border-gray-100`,
                                            children: item.submenu.map((sub)=>/*#__PURE__*/ _jsxDEV(Link, {
                                                    "data-lov-id": "src/components/Header.tsx:131:22",
                                                    "data-lov-name": "Link",
                                                    "data-component-path": "src/components/Header.tsx",
                                                    "data-component-line": "131",
                                                    "data-component-file": "Header.tsx",
                                                    "data-component-name": "Link",
                                                    "data-component-content": "%7B%22className%22%3A%22block%20px-4%20py-2.5%20text-sm%20text-logo-navy%20hover%3Atext-indian-green%20hover%3Abg-gray-50%20transition-colors%20duration-150%20font-medium%22%7D",
                                                    to: sub.path,
                                                    className: "block px-4 py-2.5 text-sm text-logo-navy hover:text-indian-green hover:bg-gray-50 transition-colors duration-150 font-medium",
                                                    children: sub.title
                                                }, sub.title, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/Header.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/Header.tsx",
                                            lineNumber: 125,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.title, true, {
                                    fileName: "/home/sjrsh916/public_html/src/components/Header.tsx",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/Header.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("button", {
                            "data-lov-id": "src/components/Header.tsx:146:10",
                            "data-lov-name": "button",
                            "data-component-path": "src/components/Header.tsx",
                            "data-component-line": "146",
                            "data-component-file": "Header.tsx",
                            "data-component-name": "button",
                            "data-component-content": "%7B%22className%22%3A%22lg%3Ahidden%20text-white%20ml-auto%20py-2%20hover%3Atext-golden-yellow%20transition-colors%20duration-200%22%7D",
                            className: "lg:hidden text-white ml-auto py-2 hover:text-golden-yellow transition-colors duration-200",
                            "aria-label": "Toggle menu",
                            onClick: ()=>setIsMenuOpen(!isMenuOpen),
                            children: isMenuOpen ? /*#__PURE__*/ _jsxDEV(X, {
                                "data-lov-id": "src/components/Header.tsx:151:26",
                                "data-lov-name": "X",
                                "data-component-path": "src/components/Header.tsx",
                                "data-component-line": "151",
                                "data-component-file": "Header.tsx",
                                "data-component-name": "X",
                                "data-component-content": "%7B%22className%22%3A%22h-6%20w-6%22%7D",
                                className: "h-6 w-6"
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/components/Header.tsx",
                                lineNumber: 151,
                                columnNumber: 27
                            }, this) : /*#__PURE__*/ _jsxDEV(Menu, {
                                "data-lov-id": "src/components/Header.tsx:151:54",
                                "data-lov-name": "Menu",
                                "data-component-path": "src/components/Header.tsx",
                                "data-component-line": "151",
                                "data-component-file": "Header.tsx",
                                "data-component-name": "Menu",
                                "data-component-content": "%7B%22className%22%3A%22h-6%20w-6%22%7D",
                                className: "h-6 w-6"
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/components/Header.tsx",
                                lineNumber: 151,
                                columnNumber: 317
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/Header.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/components/Header.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this),
                isMenuOpen && /*#__PURE__*/ _jsxDEV("nav", {
                    "data-lov-id": "src/components/Header.tsx:157:10",
                    "data-lov-name": "nav",
                    "data-component-path": "src/components/Header.tsx",
                    "data-component-line": "157",
                    "data-component-file": "Header.tsx",
                    "data-component-name": "nav",
                    "data-component-content": "%7B%22className%22%3A%22lg%3Ahidden%20pb-4%20border-t%20border-white%2F20%20pt-2%20max-h-%5B70vh%5D%20overflow-y-auto%22%7D",
                    className: "lg:hidden pb-4 border-t border-white/20 pt-2 max-h-[70vh] overflow-y-auto",
                    children: menuItems.map((item)=>{
                        const open = openMobileSection === item.title;
                        return /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/components/Header.tsx:161:16",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/Header.tsx",
                            "data-component-line": "161",
                            "data-component-file": "Header.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22border-b%20border-white%2F10%20last%3Aborder-b-0%22%7D",
                            className: "border-b border-white/10 last:border-b-0",
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/components/Header.tsx:162:18",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/Header.tsx",
                                    "data-component-line": "162",
                                    "data-component-file": "Header.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
                                    className: "flex items-center justify-between",
                                    children: [
                                        item.submenu ? /*#__PURE__*/ _jsxDEV("button", {
                                            "data-lov-id": "src/components/Header.tsx:164:22",
                                            "data-lov-name": "button",
                                            "data-component-path": "src/components/Header.tsx",
                                            "data-component-line": "164",
                                            "data-component-file": "Header.tsx",
                                            "data-component-name": "button",
                                            "data-component-content": "%7B%22className%22%3A%22flex-1%20text-left%20py-3%20text-white%20hover%3Atext-golden-yellow%20font-medium%20text-sm%22%7D",
                                            type: "button",
                                            onClick: ()=>setOpenMobileSection(open ? null : item.title),
                                            className: "flex-1 text-left py-3 text-white hover:text-golden-yellow font-medium text-sm",
                                            children: item.title
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/Header.tsx",
                                            lineNumber: 164,
                                            columnNumber: 23
                                        }, this) : /*#__PURE__*/ _jsxDEV(Link, {
                                            "data-lov-id": "src/components/Header.tsx:172:22",
                                            "data-lov-name": "Link",
                                            "data-component-path": "src/components/Header.tsx",
                                            "data-component-line": "172",
                                            "data-component-file": "Header.tsx",
                                            "data-component-name": "Link",
                                            "data-component-content": "%7B%22className%22%3A%22flex-1%20py-3%20text-white%20hover%3Atext-golden-yellow%20font-medium%20text-sm%22%7D",
                                            to: item.path,
                                            onClick: ()=>setIsMenuOpen(false),
                                            className: "flex-1 py-3 text-white hover:text-golden-yellow font-medium text-sm",
                                            children: item.title
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/Header.tsx",
                                            lineNumber: 172,
                                            columnNumber: 23
                                        }, this),
                                        item.submenu && /*#__PURE__*/ _jsxDEV("button", {
                                            "data-lov-id": "src/components/Header.tsx:181:22",
                                            "data-lov-name": "button",
                                            "data-component-path": "src/components/Header.tsx",
                                            "data-component-line": "181",
                                            "data-component-file": "Header.tsx",
                                            "data-component-name": "button",
                                            "data-component-content": "%7B%22className%22%3A%22p-2%20text-white%2F80%20hover%3Atext-golden-yellow%22%7D",
                                            onClick: ()=>setOpenMobileSection(open ? null : item.title),
                                            "aria-label": `Toggle ${item.title} submenu`,
                                            className: "p-2 text-white/80 hover:text-golden-yellow",
                                            children: /*#__PURE__*/ _jsxDEV(ChevronDown, {
                                                "data-lov-id": "src/components/Header.tsx:186:24",
                                                "data-lov-name": "ChevronDown",
                                                "data-component-path": "src/components/Header.tsx",
                                                "data-component-line": "186",
                                                "data-component-file": "Header.tsx",
                                                "data-component-name": "ChevronDown",
                                                "data-component-content": "%7B%7D",
                                                className: `h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/components/Header.tsx",
                                                lineNumber: 186,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/Header.tsx",
                                            lineNumber: 181,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/components/Header.tsx",
                                    lineNumber: 162,
                                    columnNumber: 19
                                }, this),
                                item.submenu && open && /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/components/Header.tsx:193:20",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/Header.tsx",
                                    "data-component-line": "193",
                                    "data-component-file": "Header.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22pl-4%20pb-2%22%7D",
                                    className: "pl-4 pb-2",
                                    children: item.submenu.map((sub)=>/*#__PURE__*/ _jsxDEV(Link, {
                                            "data-lov-id": "src/components/Header.tsx:195:24",
                                            "data-lov-name": "Link",
                                            "data-component-path": "src/components/Header.tsx",
                                            "data-component-line": "195",
                                            "data-component-file": "Header.tsx",
                                            "data-component-name": "Link",
                                            "data-component-content": "%7B%22className%22%3A%22block%20py-2%20text-sm%20text-white%2F85%20hover%3Atext-golden-yellow%20transition-colors%22%7D",
                                            to: sub.path,
                                            onClick: ()=>{
                                                setIsMenuOpen(false);
                                                setOpenMobileSection(null);
                                            },
                                            className: "block py-2 text-sm text-white/85 hover:text-golden-yellow transition-colors",
                                            children: sub.title
                                        }, sub.title, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/Header.tsx",
                                            lineNumber: 195,
                                            columnNumber: 25
                                        }, this))
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/Header.tsx",
                                    lineNumber: 193,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, item.title, true, {
                            fileName: "/home/sjrsh916/public_html/src/components/Header.tsx",
                            lineNumber: 161,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/components/Header.tsx",
                    lineNumber: 157,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/sjrsh916/public_html/src/components/Header.tsx",
            lineNumber: 102,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/components/Header.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
};
_s(Header, "/VV0ZG7szDH68g2kWU5TwBdw/LE=");
_c = Header;
export default Header;
var _c;
$RefreshReg$(_c, "Header");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/components/Header.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/components/Header.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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dUJBQUE7Z0RBQUFDLHVCQUFBO2dEQUFBQywwQkFBQTtnREFDVEMsV0FBVyxDQUFDLDBDQUEwQyxFQUFFVyxPQUFPLGVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBS3pGUCxLQUFLbkIsT0FBTyxJQUFJMEIsc0JBQ2YsUUFBQ1Y7b0NBQUVSLGVBQUE7b0NBQUFDLGlCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsdUJBQUE7b0NBQUFDLHVCQUFBO29DQUFBQyx1QkFBQTtvQ0FBQUMsMEJBQUE7b0NBQUVDLFdBQVU7OENBQ1pJLEtBQUtuQixPQUFPLENBQUNrQixHQUFHLENBQUMsQ0FBQ0ssb0JBQ2pCLFFBQUM1Qjs0Q0FBR2EsZUFBQTs0Q0FBQUMsaUJBQUE7NENBQUFDLHVCQUFBOzRDQUFBQyx1QkFBQTs0Q0FBQUMsdUJBQUE7NENBQUFDLHVCQUFBOzRDQUFBQywwQkFBQTs0Q0FFRlEsSUFBSUMsSUFBSXhCLElBQUk7NENBQ1owQixTQUFTO2dEQUNQckIsY0FBYztnREFDZEUscUJBQXFCOzRDQUN2Qjs0Q0FDQVMsV0FBVTtzREFFVFEsSUFBSXpCLEtBQUs7MkNBUkx5QixJQUFJekIsS0FBSzs7Ozs7Ozs7Ozs7MkJBbkNkcUIsS0FBS3JCLEtBQUs7Ozs7O29CQWtEeEI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVo7R0F6SE1JO0tBQUFBO0FBMkhOLGVBQWVBLE9BQU0iLCJuYW1lcyI6WyJNZW51IiwiWCIsIkNoZXZyb25Eb3duIiwiTGluayIsInVzZVN0YXRlIiwibWVudUl0ZW1zIiwidGl0bGUiLCJwYXRoIiwic3VibWVudSIsImFsaWduUmlnaHQiLCJIZWFkZXIiLCJpc01lbnVPcGVuIiwic2V0SXNNZW51T3BlbiIsIm9wZW5Nb2JpbGVTZWN0aW9uIiwic2V0T3Blbk1vYmlsZVNlY3Rpb24iLCJoZWFkZXIiLCJkYXRhLWxvdi1pZCIsImRhdGEtbG92LW5hbWUiLCJkYXRhLWNvbXBvbmVudC1wYXRoIiwiZGF0YS1jb21wb25lbnQtbGluZSIsImRhdGEtY29tcG9uZW50LWZpbGUiLCJkYXRhLWNvbXBvbmVudC1uYW1lIiwiZGF0YS1jb21wb25lbnQtY29udGVudCIsImNsYXNzTmFtZSIsImRpdiIsIm5hdiIsIm1hcCIsIml0ZW0iLCJidXR0b24iLCJ0eXBlIiwidG8iLCJzdWIiLCJhcmlhLWxhYmVsIiwib25DbGljayIsIm9wZW4iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiSGVhZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZW51LCBYLCBDaGV2cm9uRG93biB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBTdWJJdGVtID0geyB0aXRsZTogc3RyaW5nOyBwYXRoOiBzdHJpbmcgfTtcbnR5cGUgTWVudUl0ZW0gPSB7IHRpdGxlOiBzdHJpbmc7IHBhdGg6IHN0cmluZzsgc3VibWVudT86IFN1Ykl0ZW1bXTsgYWxpZ25SaWdodD86IGJvb2xlYW4gfTtcblxuY29uc3QgbWVudUl0ZW1zOiBNZW51SXRlbVtdID0gW1xuICB7IHRpdGxlOiBcIkhvbWVcIiwgcGF0aDogXCIvXCIgfSxcbiAge1xuICAgIHRpdGxlOiBcIkFib3V0IFVzXCIsXG4gICAgcGF0aDogXCIvYWJvdXRcIixcbiAgICBzdWJtZW51OiBbXG4gICAgICB7IHRpdGxlOiBcIk92ZXJ2aWV3XCIsIHBhdGg6IFwiL2Fib3V0L292ZXJ2aWV3XCIgfSxcbiAgICAgIHsgdGl0bGU6IFwiVmlzaW9uICYgTWlzc2lvblwiLCBwYXRoOiBcIi9hYm91dC92aXNpb24tbWlzc2lvblwiIH0sXG4gICAgICB7IHRpdGxlOiBcIkNoaWVmIFBhdHJvbidzIE1lc3NhZ2VcIiwgcGF0aDogXCIvYWJvdXQvY2hpZWYtcGF0cm9uLW1lc3NhZ2VcIiB9LFxuICAgICAgeyB0aXRsZTogXCJQcmVzaWRlbnQncyBNZXNzYWdlXCIsIHBhdGg6IFwiL2Fib3V0L3ByZXNpZGVudHMtbWVzc2FnZVwiIH0sXG4gICAgICB7IHRpdGxlOiBcIlNlY3JldGFyeSdzIE1lc3NhZ2VcIiwgcGF0aDogXCIvYWJvdXQvc2VjcmV0YXJ5LW1lc3NhZ2VcIiB9LFxuICAgICAgeyB0aXRsZTogXCJQcmluY2lwYWwncyBNZXNzYWdlXCIsIHBhdGg6IFwiL2Fib3V0L3ByaW5jaXBhbC1tZXNzYWdlXCIgfSxcbiAgICAgIHsgdGl0bGU6IFwiT2ZmaWNlIEJlYXJlcnNcIiwgcGF0aDogXCIvYWJvdXQvb2ZmaWNlLWJlYXJlcnNcIiB9LFxuICAgICAgeyB0aXRsZTogXCJFQyBNZW1iZXJzXCIsIHBhdGg6IFwiL2Fib3V0L2VjLW1lbWJlcnNcIiB9LFxuICAgICAgeyB0aXRsZTogXCJDb3JlIFRlYW1cIiwgcGF0aDogXCIvYWJvdXQvY29yZS10ZWFtXCIgfSxcbiAgICAgIHsgdGl0bGU6IFwiT3VyIFRlYWNoZXJzXCIsIHBhdGg6IFwiL2Fib3V0L3RlYWNoZXJzXCIgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiQWRtaXNzaW9uc1wiLFxuICAgIHBhdGg6IFwiL2FkbWlzc2lvbnNcIixcbiAgICBzdWJtZW51OiBbXG4gICAgICB7IHRpdGxlOiBcIkFkbWlzc2lvbiBQcm9jZXNzXCIsIHBhdGg6IFwiL2FkbWlzc2lvbnMvYWRtaXNzaW9ucy1wcm9jZXNzXCIgfSxcbiAgICAgIHsgdGl0bGU6IFwiU2Nob29sIFBvbGljaWVzXCIsIHBhdGg6IFwiL2FkbWlzc2lvbnMvc2Nob29sLXBvbGljaWVzXCIgfSxcbiAgICAgIHsgdGl0bGU6IFwiRWxpZ2liaWxpdHkgQ3JpdGVyaWFcIiwgcGF0aDogXCIvYWRtaXNzaW9ucy9lbGlnaWJpbGl0eS1jcml0ZXJpYVwiIH0sXG4gICAgICB7IHRpdGxlOiBcIkZlZXMgU3RydWN0dXJlXCIsIHBhdGg6IFwiL2FkbWlzc2lvbnMvZmVlcy1zdHJ1Y3R1cmVcIiB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJBY2FkZW1pY3NcIixcbiAgICBwYXRoOiBcIi9hY2FkZW1pY3NcIixcbiAgICBzdWJtZW51OiBbXG4gICAgICB7IHRpdGxlOiBcIlByZS1QcmltYXJ5XCIsIHBhdGg6IFwiL2FjYWRlbWljcy9wcmUtcHJpbWFyeVwiIH0sXG4gICAgICB7IHRpdGxlOiBcIlByaW1hcnkgTGV2ZWxcIiwgcGF0aDogXCIvYWNhZGVtaWNzL3ByaW1hcnktbGV2ZWxcIiB9LFxuICAgICAgeyB0aXRsZTogXCJTZWNvbmRhcnkgU3RhZ2VcIiwgcGF0aDogXCIvYWNhZGVtaWNzL3NlY29uZGFyeS1zdGFnZVwiIH0sXG4gICAgICB7IHRpdGxlOiBcIlNlbmlvciBTZWNvbmRhcnkgU3RhZ2VcIiwgcGF0aDogXCIvYWNhZGVtaWNzL3Nlbmlvci1zZWNvbmRhcnktc3RhZ2VcIiB9LFxuICAgICAgeyB0aXRsZTogXCJDdXJyaWN1bHVtXCIsIHBhdGg6IFwiL2FjYWRlbWljcy9jdXJyaWN1bHVtXCIgfSxcbiAgICAgIHsgdGl0bGU6IFwiQ2FsZW5kYXIgb2YgRXZlbnRzXCIsIHBhdGg6IFwiL2FjYWRlbWljcy9jYWxlbmRhclwiIH0sXG4gICAgICB7IHRpdGxlOiBcIkFjaGlldmVtZW50c1wiLCBwYXRoOiBcIi9hY2FkZW1pY3MvYWNoaWV2ZW1lbnRzXCIgfSxcbiAgICAgIHsgdGl0bGU6IFwiQXR0ZW5kYW5jZSBSdWxlc1wiLCBwYXRoOiBcIi9hY2FkZW1pY3MvYXR0ZW5kYW5jZS1ydWxlc1wiIH0sXG4gICAgICB7IHRpdGxlOiBcIkNvZGUgb2YgQ29uZHVjdFwiLCBwYXRoOiBcIi9hY2FkZW1pY3MvY29kZS1vZi1jb25kdWN0XCIgfSxcbiAgICAgIHsgdGl0bGU6IFwiRXhhbWluYXRpb24gR3VpZGVsaW5lc1wiLCBwYXRoOiBcIi9hY2FkZW1pY3MvZXhhbWluYXRpb24tZ3VpZGVsaW5lc1wiIH0sXG4gICAgICB7IHRpdGxlOiBcIlByb21vdGlvbiBDcml0ZXJpYVwiLCBwYXRoOiBcIi9hY2FkZW1pY3MvcHJvbW90aW9uLWNyaXRlcmlhXCIgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiSW5mcmFzdHJ1Y3R1cmVcIixcbiAgICBwYXRoOiBcIi9mYWNpbGl0aWVzXCIsXG4gICAgc3VibWVudTogW1xuICAgICAgeyB0aXRsZTogXCJDbGFzc3Jvb21cIiwgcGF0aDogXCIvZmFjaWxpdGllcy9jbGFzc3Jvb21cIiB9LFxuICAgICAgeyB0aXRsZTogXCJMaWJyYXJ5XCIsIHBhdGg6IFwiL2ZhY2lsaXRpZXMvbGlicmFyeVwiIH0sXG4gICAgICB7IHRpdGxlOiBcIkxhYm9yYXRvcmllc1wiLCBwYXRoOiBcIi9mYWNpbGl0aWVzL2xhYm9yYXRvcmllc1wiIH0sXG4gICAgICB7IHRpdGxlOiBcIlRyYW5zcG9ydGF0aW9uXCIsIHBhdGg6IFwiL2ZhY2lsaXRpZXMvdHJhbnNwb3J0YXRpb25cIiB9LFxuICAgICAgeyB0aXRsZTogXCJBdWRpdG9yaXVtXCIsIHBhdGg6IFwiL2ZhY2lsaXRpZXMvYXVkaXRvcml1bVwiIH0sXG4gICAgICB7IHRpdGxlOiBcIkNvbXB1dGVyIExhYlwiLCBwYXRoOiBcIi9mYWNpbGl0aWVzL2NvbXB1dGVyLWxhYlwiIH0sXG4gICAgICB7IHRpdGxlOiBcIlNtYXJ0IENsYXNzXCIsIHBhdGg6IFwiL2ZhY2lsaXRpZXMvc21hcnQtY2xhc3NcIiB9LFxuICAgICAgeyB0aXRsZTogXCJTcG9ydHNcIiwgcGF0aDogXCIvZmFjaWxpdGllcy9zcG9ydHNcIiB9LFxuICAgICAgeyB0aXRsZTogXCJZb2dhXCIsIHBhdGg6IFwiL2ZhY2lsaXRpZXMveW9nYVwiIH0sXG4gICAgICB7IHRpdGxlOiBcIlJvYm90aWNzIENsYXNzZXNcIiwgcGF0aDogXCIvZmFjaWxpdGllcy9yb2JvdGljc1wiIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkxpZmUgQCBTSlJQUy1IQlJcIixcbiAgICBwYXRoOiBcIi9saWZlXCIsXG4gICAgc3VibWVudTogW1xuICAgICAgeyB0aXRsZTogXCJBY3Rpdml0aWVzXCIsIHBhdGg6IFwiL2xpZmUvYWN0aXZpdGllc1wiIH0sXG4gICAgICB7IHRpdGxlOiBcIlRhZWt3b25kb1wiLCBwYXRoOiBcIi9saWZlL3RhZWt3b25kb1wiIH0sXG4gICAgICB7IHRpdGxlOiBcIlNjb3V0cyAmIEd1aWRlc1wiLCBwYXRoOiBcIi9saWZlL3Njb3V0cy1ndWlkZXNcIiB9LFxuICAgICAgeyB0aXRsZTogXCJOYXRpb25hbCBGZXN0aXZhbHNcIiwgcGF0aDogXCIvbGlmZS9uYXRpb25hbC1mZXN0aXZhbHNcIiB9LFxuICAgICAgeyB0aXRsZTogXCJDZWxlYnJhdGlvbnNcIiwgcGF0aDogXCIvbGlmZS9jZWxlYnJhdGlvbnNcIiB9LFxuICAgICAgeyB0aXRsZTogXCJXb3Jrc2hvcHNcIiwgcGF0aDogXCIvbGlmZS93b3Jrc2hvcHNcIiB9LFxuICAgICAgeyB0aXRsZTogXCJTdHVkZW50cy9QYXJlbnRzIFRlc3RpbW9uaWFsc1wiLCBwYXRoOiBcIi9saWZlL3Rlc3RpbW9uaWFsc1wiIH0sXG4gICAgXSxcbiAgfSxcbiAgeyB0aXRsZTogXCJOZXdzICYgRXZlbnRzXCIsIHBhdGg6IFwiL25ld3NcIiB9LFxuICB7XG4gICAgdGl0bGU6IFwiR2FsbGVyeVwiLFxuICAgIHBhdGg6IFwiL2dhbGxlcnlcIixcbiAgICBhbGlnblJpZ2h0OiB0cnVlLFxuICAgIHN1Ym1lbnU6IFtcbiAgICAgIHsgdGl0bGU6IFwiUGhvdG8gR2FsbGVyeVwiLCBwYXRoOiBcIi9nYWxsZXJ5L3Bob3Rvc1wiIH0sXG4gICAgICB7IHRpdGxlOiBcIlZpZGVvIEdhbGxlcnlcIiwgcGF0aDogXCIvZ2FsbGVyeS92aWRlb3NcIiB9LFxuICAgIF0sXG4gIH0sXG4gIHsgdGl0bGU6IFwiQ29udGFjdFwiLCBwYXRoOiBcIi9jb250YWN0XCIgfSxcbiAgeyB0aXRsZTogXCJNYW5kYXRvcnkgRGlzY2xvc3VyZVwiLCBwYXRoOiBcIi9tYW5kYXRvcnktZGlzY2xvc3VyZVwiIH0sXG5dO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc01lbnVPcGVuLCBzZXRJc01lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW29wZW5Nb2JpbGVTZWN0aW9uLCBzZXRPcGVuTW9iaWxlU2VjdGlvbl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYmctaW5kaWFuLWdyZWVuIHRleHQtd2hpdGUgc2hhZG93LWxnIHN0aWNreSB0b3AtMCB6LTUwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICB7LyogRGVza3RvcCBOYXYgKi99XG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6ZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIGdhcC0xIHhsOmdhcC0yIHB5LTFcIj5cbiAgICAgICAgICAgIHttZW51SXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLnRpdGxlfSBjbGFzc05hbWU9XCJyZWxhdGl2ZSBncm91cFwiPlxuICAgICAgICAgICAgICAgIHtpdGVtLnN1Ym1lbnUgPyAoXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtZ29sZGVuLXllbGxvdyB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgcHgtMyBweS0yIHJvdW5kZWQtbWQgaG92ZXI6Ymctd2hpdGUvMTBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPENoZXZyb25Eb3duIGNsYXNzTmFtZT1cImgtMy41IHctMy41IHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTIwMCBncm91cC1ob3Zlcjpyb3RhdGUtMTgwXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICB0bz17aXRlbS5wYXRofVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtZ29sZGVuLXllbGxvdyB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgcHgtMyBweS0yIHJvdW5kZWQtbWQgaG92ZXI6Ymctd2hpdGUvMTBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtpdGVtLnN1Ym1lbnUgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSB0b3AtZnVsbCAke1xuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uYWxpZ25SaWdodCA/IFwicmlnaHQtMFwiIDogXCJsZWZ0LTBcIlxuICAgICAgICAgICAgICAgICAgICB9IG10LTEgbWluLXctNTYgYmctd2hpdGUgc2hhZG93LTJ4bCByb3VuZGVkLWxnIHB5LTIgb3BhY2l0eS0wIGludmlzaWJsZSB0cmFuc2xhdGUteS0xIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIGdyb3VwLWhvdmVyOnZpc2libGUgZ3JvdXAtaG92ZXI6dHJhbnNsYXRlLXktMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgei01MCBib3JkZXIgYm9yZGVyLWdyYXktMTAwYH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uc3VibWVudS5tYXAoKHN1YikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3N1Yi50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtzdWIucGF0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHB4LTQgcHktMi41IHRleHQtc20gdGV4dC1sb2dvLW5hdnkgaG92ZXI6dGV4dC1pbmRpYW4tZ3JlZW4gaG92ZXI6YmctZ3JheS01MCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0xNTAgZm9udC1tZWRpdW1cIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdWIudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgICB7LyogTW9iaWxlIHRvZ2dsZSAqL31cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsZzpoaWRkZW4gdGV4dC13aGl0ZSBtbC1hdXRvIHB5LTIgaG92ZXI6dGV4dC1nb2xkZW4teWVsbG93IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG1lbnVcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNNZW51T3BlbighaXNNZW51T3Blbil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2lzTWVudU9wZW4gPyA8WCBjbGFzc05hbWU9XCJoLTYgdy02XCIgLz4gOiA8TWVudSBjbGFzc05hbWU9XCJoLTYgdy02XCIgLz59XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBNb2JpbGUgTmF2ICovfVxuICAgICAgICB7aXNNZW51T3BlbiAmJiAoXG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJsZzpoaWRkZW4gcGItNCBib3JkZXItdCBib3JkZXItd2hpdGUvMjAgcHQtMiBtYXgtaC1bNzB2aF0gb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBvcGVuID0gb3Blbk1vYmlsZVNlY3Rpb24gPT09IGl0ZW0udGl0bGU7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0udGl0bGV9IGNsYXNzTmFtZT1cImJvcmRlci1iIGJvcmRlci13aGl0ZS8xMCBsYXN0OmJvcmRlci1iLTBcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLnN1Ym1lbnUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuTW9iaWxlU2VjdGlvbihvcGVuID8gbnVsbCA6IGl0ZW0udGl0bGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIHRleHQtbGVmdCBweS0zIHRleHQtd2hpdGUgaG92ZXI6dGV4dC1nb2xkZW4teWVsbG93IGZvbnQtbWVkaXVtIHRleHQtc21cIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICB0bz17aXRlbS5wYXRofVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNNZW51T3BlbihmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgcHktMyB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtZ29sZGVuLXllbGxvdyBmb250LW1lZGl1bSB0ZXh0LXNtXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLnN1Ym1lbnUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW5Nb2JpbGVTZWN0aW9uKG9wZW4gPyBudWxsIDogaXRlbS50aXRsZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtgVG9nZ2xlICR7aXRlbS50aXRsZX0gc3VibWVudWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgdGV4dC13aGl0ZS84MCBob3Zlcjp0ZXh0LWdvbGRlbi15ZWxsb3dcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGV2cm9uRG93blxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoLTQgdy00IHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTIwMCAke29wZW4gPyBcInJvdGF0ZS0xODBcIiA6IFwiXCJ9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLnN1Ym1lbnUgJiYgb3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtNCBwYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0uc3VibWVudS5tYXAoKHN1YikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzdWIudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtzdWIucGF0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzTWVudU9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE9wZW5Nb2JpbGVTZWN0aW9uKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBweS0yIHRleHQtc20gdGV4dC13aGl0ZS84NSBob3Zlcjp0ZXh0LWdvbGRlbi15ZWxsb3cgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sImZpbGUiOiIvaG9tZS9zanJzaDkxNi9wdWJsaWNfaHRtbC9zcmMvY29tcG9uZW50cy9IZWFkZXIudHN4In0=