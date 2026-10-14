import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/academics/CalendarEvents.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import Layout from "/src/components/Layout.tsx";
import PageHero from "/src/components/PageHero.tsx";
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "/src/components/ui/accordion.tsx";
import { Calendar, CalendarDays, BookOpen, ClipboardList, Trophy, Sparkles, Download, Eye, GraduationCap, PartyPopper, Flag } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
const highlights = [
    {
        icon: CalendarDays,
        title: "Academic Year Overview",
        desc: "A clearly structured 2026–27 session with defined terms, holidays, and assessment windows."
    },
    {
        icon: BookOpen,
        title: "Term Structure",
        desc: "Balanced instructional days across periodic tests, mid-terms, pre-finals, and final examinations."
    },
    {
        icon: ClipboardList,
        title: "Examination Schedule",
        desc: "PT-1, PT-2, PT-3, mid-terms, pre-boards, and annual exams planned across the year."
    },
    {
        icon: Sparkles,
        title: "Co-Curricular Activities",
        desc: "Workshops, orientations, sports days, science exhibitions and cultural celebrations."
    },
    {
        icon: Trophy,
        title: "Signature School Events",
        desc: "Annual Day, Investiture, Sports Day, Farewell, Science Exhibition and Founder Jayanthi."
    }
];
const calendar = [
    {
        month: "February 2026",
        events: [
            {
                date: "09 Feb",
                title: "Last exam – Class 8th & 9th",
                type: "exam"
            },
            {
                date: "13–14 Feb",
                title: "Teachers Workshop",
                type: "event"
            },
            {
                date: "16 Feb",
                title: "Annual Exam PTM – Class 8th, 9th & 11th",
                type: "event"
            },
            {
                date: "18 Feb",
                title: "New Session – Class 9th, 10th & 12th",
                type: "event"
            },
            {
                date: "21 Feb",
                title: "Orientation Class 9th & 10th | UKG Graduation",
                type: "orientation"
            },
            {
                date: "28 Feb",
                title: "Science Day – Exhibition",
                type: "celebration"
            }
        ]
    },
    {
        month: "March 2026",
        events: [
            {
                date: "02 Mar",
                title: "IT Annual Exams – Class 1st to 7th",
                type: "exam"
            },
            {
                date: "07 Mar",
                title: "Annual Exam starts – Class 3rd to 7th",
                type: "exam"
            },
            {
                date: "09 Mar",
                title: "Annual Exam starts – Class 1st & 2nd",
                type: "exam"
            },
            {
                date: "12 Mar",
                title: "Sri Jagadguru Renukacharya Jayanthi",
                type: "celebration"
            },
            {
                date: "18 Mar",
                title: "Annual Exam concludes for all classes",
                type: "exam"
            },
            {
                date: "19 Mar",
                title: "Ugadi",
                type: "holiday"
            },
            {
                date: "21 Mar",
                title: "Ramzan",
                type: "holiday"
            },
            {
                date: "27 Mar",
                title: "Annual Exam PTM / Book Sale – Pre-Primary to Class 2nd",
                type: "event"
            },
            {
                date: "28 Mar",
                title: "Annual Exam PTM / Book Sale – Class 3rd to 7th",
                type: "event"
            },
            {
                date: "30 Mar",
                title: "PT-1 – Class 9th, 10th & 12th",
                type: "exam"
            },
            {
                date: "31 Mar",
                title: "Mahavir Jayanthi",
                type: "holiday"
            }
        ]
    },
    {
        month: "April 2026",
        events: [
            {
                date: "01 Apr",
                title: "School reopens – Class 1st to 8th",
                type: "event"
            },
            {
                date: "03 Apr",
                title: "Good Friday",
                type: "holiday"
            },
            {
                date: "10 Apr",
                title: "Last working day & PTM – Class 9th, 10th & 12th",
                type: "event"
            },
            {
                date: "11 Apr",
                title: "Summer Vacation begins – Pre-Primary to Class X",
                type: "holiday"
            },
            {
                date: "14 Apr",
                title: "Ambedkar Jayanthi",
                type: "holiday"
            },
            {
                date: "20 Apr",
                title: "Basava Jayanthi",
                type: "holiday"
            },
            {
                date: "24 Apr",
                title: "Closing date for Grade 12th",
                type: "event"
            }
        ]
    },
    {
        month: "May 2026",
        events: [
            {
                date: "01 May",
                title: "Labour Day",
                type: "holiday"
            },
            {
                date: "11 May",
                title: "School reopens – Class 11, 12 & Teachers",
                type: "event"
            },
            {
                date: "16 May",
                title: "Orientation – Class 8th, 9th & 10th",
                type: "orientation"
            },
            {
                date: "18 May",
                title: "School reopens – Class 8th to 10th",
                type: "event"
            },
            {
                date: "21 May",
                title: "Orientation – Class 6th & 7th",
                type: "orientation"
            },
            {
                date: "23 May",
                title: "Orientation – Class 1st to 5th",
                type: "orientation"
            },
            {
                date: "25 May",
                title: "School reopens – Class 1st to 7th",
                type: "event"
            },
            {
                date: "28 May",
                title: "Bakrid",
                type: "holiday"
            },
            {
                date: "30 May",
                title: "Orientation – Pre-Primary",
                type: "orientation"
            }
        ]
    },
    {
        month: "June 2026",
        events: [
            {
                date: "01 Jun",
                title: "School reopens – Nursery, LKG, UKG",
                type: "event"
            },
            {
                date: "03 Jun",
                title: "World Bicycle Day",
                type: "celebration"
            },
            {
                date: "05 Jun",
                title: "Environment Day Celebration",
                type: "celebration"
            },
            {
                date: "06 Jun",
                title: "Orientation – Class 11th",
                type: "orientation"
            },
            {
                date: "11 Jun",
                title: "Investiture Ceremony",
                type: "event"
            },
            {
                date: "20 Jun",
                title: "Yoga Day",
                type: "celebration"
            },
            {
                date: "26 Jun",
                title: "Moharam",
                type: "holiday"
            },
            {
                date: "27 Jun",
                title: "Fresher's Day – Class 11th",
                type: "celebration"
            },
            {
                date: "29 Jun",
                title: "PT-1 – Class 1st to 10th",
                type: "exam"
            }
        ]
    },
    {
        month: "July 2026",
        events: [
            {
                date: "11 Jul",
                title: "PTM – Class 1st to 8th",
                type: "event"
            },
            {
                date: "26 Jul",
                title: "Kargil Vijay Diwas",
                type: "celebration"
            },
            {
                date: "29 Jul",
                title: "Guru Purnima",
                type: "celebration"
            }
        ]
    },
    {
        month: "August 2026",
        events: [
            {
                date: "01 Aug",
                title: "Periodic Test-2 – Class 1st to 10th",
                type: "exam"
            },
            {
                date: "15 Aug",
                title: "Independence Day",
                type: "celebration"
            },
            {
                date: "21 Aug",
                title: "Varamahalakshmi",
                type: "holiday"
            },
            {
                date: "26 Aug",
                title: "Eid-Milad",
                type: "holiday"
            },
            {
                date: "28–29 Aug",
                title: "Sports Day",
                type: "event"
            }
        ]
    },
    {
        month: "September 2026",
        events: [
            {
                date: "04 Sep",
                title: "Teacher's Day Celebration",
                type: "celebration"
            },
            {
                date: "05 Sep",
                title: "Teacher's Trip",
                type: "event"
            },
            {
                date: "14 Sep",
                title: "Ganesha Chaturthi",
                type: "holiday"
            },
            {
                date: "28 Sep",
                title: "IT Mid-Term Exam – Class 1st to 10th",
                type: "exam"
            }
        ]
    },
    {
        month: "October 2026",
        events: [
            {
                date: "01 Oct",
                title: "Mid-Term Test / Pre-Board",
                type: "exam"
            },
            {
                date: "02 Oct",
                title: "Gandhi Jayanthi",
                type: "holiday"
            },
            {
                date: "12 Oct",
                title: "Mid-Term Last Exam",
                type: "exam"
            },
            {
                date: "13 Oct",
                title: "Dussehra Celebration for Teachers",
                type: "celebration"
            },
            {
                date: "14–15 Oct",
                title: "Workshop",
                type: "event"
            },
            {
                date: "16 Oct",
                title: "Class 9th, 10th & 11th Trip",
                type: "event"
            },
            {
                date: "20 Oct",
                title: "Ayudha Pooje",
                type: "holiday"
            },
            {
                date: "21 Oct",
                title: "Vijayadashami",
                type: "holiday"
            },
            {
                date: "26 Oct",
                title: "Valmiki Jayanthi",
                type: "holiday"
            },
            {
                date: "27 Oct",
                title: "School Re-opens",
                type: "event"
            },
            {
                date: "31 Oct",
                title: "PTM – Class Nursery to 10th",
                type: "event"
            }
        ]
    },
    {
        month: "November 2026",
        events: [
            {
                date: "01 Nov",
                title: "Kannada Rajyothsava",
                type: "celebration"
            },
            {
                date: "06 Nov",
                title: "Kannada Rajyothsava Celebration in School",
                type: "celebration"
            },
            {
                date: "09 Nov",
                title: "Amavasye",
                type: "holiday"
            },
            {
                date: "10 Nov",
                title: "Balipadyami",
                type: "holiday"
            },
            {
                date: "13 Nov",
                title: "Children's Day Celebration",
                type: "celebration"
            },
            {
                date: "25 Nov",
                title: "Annual Day – Pre-Primary & Primary",
                type: "event"
            },
            {
                date: "26 Nov",
                title: "Annual Day – Secondary & Senior Secondary",
                type: "event"
            },
            {
                date: "27 Nov",
                title: "Kanakadasa Jayanthi",
                type: "holiday"
            }
        ]
    },
    {
        month: "December 2026",
        events: [
            {
                date: "07 Dec",
                title: "Sahodaya Pre-Finals – Class 9th & 11th",
                type: "exam"
            },
            {
                date: "23 Dec",
                title: "Christmas Celebration",
                type: "celebration"
            },
            {
                date: "24 Dec",
                title: "Christmas Vacation",
                type: "holiday"
            }
        ]
    },
    {
        month: "January 2027",
        events: [
            {
                date: "01 Jan",
                title: "School reopens – Pre-Primary to Class 12",
                type: "event"
            },
            {
                date: "06 Jan",
                title: "PT-3 – Class 1st to 7th / Pre-Finals – Class 8th",
                type: "exam"
            },
            {
                date: "13 Jan",
                title: "PT-3 Concludes",
                type: "exam"
            },
            {
                date: "14 Jan",
                title: "Sankranthi",
                type: "holiday"
            },
            {
                date: "18 Jan",
                title: "Pre-Finals Conclude – Class 8th",
                type: "exam"
            },
            {
                date: "23 Jan",
                title: "Class X & XII Farewell",
                type: "celebration"
            },
            {
                date: "26 Jan",
                title: "Republic Day Celebration",
                type: "celebration"
            }
        ]
    },
    {
        month: "February 2027",
        events: [
            {
                date: "01 Feb",
                title: "Final Exam – Class 8th, 9th & 11th",
                type: "exam"
            },
            {
                date: "12 Feb",
                title: "Final Exam Concludes – Class 8th, 9th & 11th",
                type: "exam"
            },
            {
                date: "20 Feb",
                title: "PTM – Class 8th, 9th & 11th",
                type: "event"
            },
            {
                date: "22 Feb",
                title: "New Session – Class 9th, 10th & 12th",
                type: "event"
            },
            {
                date: "27 Feb",
                title: "Science Exhibition",
                type: "celebration"
            }
        ]
    },
    {
        month: "March 2027",
        events: [
            {
                date: "06 Mar",
                title: "Shivarathri",
                type: "holiday"
            },
            {
                date: "10 Mar",
                title: "Ramzan",
                type: "holiday"
            },
            {
                date: "12 Mar",
                title: "Sri Jagadguru Renukacharya Jayanthi",
                type: "celebration"
            },
            {
                date: "15 Mar",
                title: "Annual Exam – Class 3rd to 7th",
                type: "exam"
            },
            {
                date: "17 Mar",
                title: "Annual Exam – Class 1st & 2nd",
                type: "exam"
            },
            {
                date: "26 Mar",
                title: "Good Friday",
                type: "holiday"
            },
            {
                date: "30 Mar",
                title: "PTM / Book Sales – Pre-Primary to Class 2nd",
                type: "event"
            },
            {
                date: "31 Mar",
                title: "PTM / Book Sales – Class 3rd to 7th",
                type: "event"
            }
        ]
    }
];
const typeStyles = {
    exam: {
        badge: "bg-saffron-orange/15 text-saffron-orange border-saffron-orange/30",
        icon: ClipboardList,
        label: "Exam"
    },
    holiday: {
        badge: "bg-logo-maroon/10 text-logo-maroon border-logo-maroon/30",
        icon: Flag,
        label: "Holiday"
    },
    event: {
        badge: "bg-indian-green/10 text-indian-green border-indian-green/30",
        icon: Calendar,
        label: "Event"
    },
    celebration: {
        badge: "bg-golden-yellow/20 text-school-brown border-golden-yellow/40",
        icon: PartyPopper,
        label: "Celebration"
    },
    orientation: {
        badge: "bg-logo-navy/10 text-logo-navy border-logo-navy/30",
        icon: GraduationCap,
        label: "Orientation"
    }
};
const CalendarEvents = ()=>{
    return /*#__PURE__*/ _jsxDEV(Layout, {
        "data-lov-id": "src/pages/academics/CalendarEvents.tsx:228:4",
        "data-lov-name": "Layout",
        "data-component-path": "src/pages/academics/CalendarEvents.tsx",
        "data-component-line": "228",
        "data-component-file": "CalendarEvents.tsx",
        "data-component-name": "Layout",
        "data-component-content": "%7B%7D",
        children: [
            /*#__PURE__*/ _jsxDEV(PageHero, {
                "data-lov-id": "src/pages/academics/CalendarEvents.tsx:229:6",
                "data-lov-name": "PageHero",
                "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                "data-component-line": "229",
                "data-component-file": "CalendarEvents.tsx",
                "data-component-name": "PageHero",
                "data-component-content": "%7B%7D",
                title: "Academic Calendar",
                breadcrumbs: [
                    {
                        label: "Academics",
                        path: "/academics"
                    },
                    {
                        label: "Calendar"
                    }
                ]
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/academics/CalendarEvents.tsx:238:6",
                "data-lov-name": "section",
                "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                "data-component-line": "238",
                "data-component-file": "CalendarEvents.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20bg-background%22%7D",
                className: "py-16 bg-background",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/academics/CalendarEvents.tsx:239:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                    "data-component-line": "239",
                    "data-component-file": "CalendarEvents.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20max-w-4xl%20text-center%22%7D",
                    className: "container mx-auto px-4 max-w-4xl text-center",
                    children: [
                        /*#__PURE__*/ _jsxDEV("h2", {
                            "data-lov-id": "src/pages/academics/CalendarEvents.tsx:240:10",
                            "data-lov-name": "h2",
                            "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                            "data-component-line": "240",
                            "data-component-file": "CalendarEvents.tsx",
                            "data-component-name": "h2",
                            "data-component-content": "%7B%22text%22%3A%22A%20Year%20of%20Learning%20%26%20Celebration%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20text-black%20mb-4%22%7D",
                            className: "text-3xl md:text-4xl font-bold text-black mb-4",
                            children: "A Year of Learning & Celebration"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                            lineNumber: 240,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/academics/CalendarEvents.tsx:241:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                            "data-component-line": "241",
                            "data-component-file": "CalendarEvents.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22mx-auto%20h-1%20w-20%20bg-indian-green%20rounded-full%20mb-6%22%7D",
                            className: "mx-auto h-1 w-20 bg-indian-green rounded-full mb-6"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                            lineNumber: 241,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("p", {
                            "data-lov-id": "src/pages/academics/CalendarEvents.tsx:242:10",
                            "data-lov-name": "p",
                            "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                            "data-component-line": "242",
                            "data-component-file": "CalendarEvents.tsx",
                            "data-component-name": "p",
                            "data-component-content": "%7B%22text%22%3A%22Calendar%20of%20Events%20for%20the%20academic%20session%20.%5Cn%20%20%20%20%20%20%20%20%20%20%20%20A%20clear%20roadmap%20of%20teaching%20days%2C%20assessments%2C%20holidays%2C%20and%20signature%20events%20to%20help%20students%2C%5Cn%20%20%20%20%20%20%20%20%20%20%20%20parents%2C%20and%20staff%20plan%20and%20participate%20fully%20in%20school%20life.%22%2C%22className%22%3A%22text-lg%20text-foreground%2F80%20leading-relaxed%22%7D",
                            className: "text-lg text-foreground/80 leading-relaxed",
                            children: [
                                "Calendar of Events for the academic session ",
                                /*#__PURE__*/ _jsxDEV("span", {
                                    "data-lov-id": "src/pages/academics/CalendarEvents.tsx:243:56",
                                    "data-lov-name": "span",
                                    "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                    "data-component-line": "243",
                                    "data-component-file": "CalendarEvents.tsx",
                                    "data-component-name": "span",
                                    "data-component-content": "%7B%22text%22%3A%222026%E2%80%9327%22%2C%22className%22%3A%22font-semibold%20text-indian-green%22%7D",
                                    className: "font-semibold text-indian-green",
                                    children: "2026–27"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                    lineNumber: 243,
                                    columnNumber: 57
                                }, this),
                                ". A clear roadmap of teaching days, assessments, holidays, and signature events to help students, parents, and staff plan and participate fully in school life."
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                            lineNumber: 242,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                    lineNumber: 239,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/academics/CalendarEvents.tsx:251:6",
                "data-lov-name": "section",
                "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                "data-component-line": "251",
                "data-component-file": "CalendarEvents.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20bg-muted%2F30%22%7D",
                className: "py-16 bg-muted/30",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/academics/CalendarEvents.tsx:252:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                    "data-component-line": "252",
                    "data-component-file": "CalendarEvents.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20max-w-6xl%22%7D",
                    className: "container mx-auto px-4 max-w-6xl",
                    children: [
                        /*#__PURE__*/ _jsxDEV("h2", {
                            "data-lov-id": "src/pages/academics/CalendarEvents.tsx:253:10",
                            "data-lov-name": "h2",
                            "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                            "data-component-line": "253",
                            "data-component-file": "CalendarEvents.tsx",
                            "data-component-name": "h2",
                            "data-component-content": "%7B%22text%22%3A%22Calendar%20Highlights%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20text-black%20text-center%20mb-3%22%7D",
                            className: "text-3xl md:text-4xl font-bold text-black text-center mb-3",
                            children: "Calendar Highlights"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                            lineNumber: 253,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/academics/CalendarEvents.tsx:254:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                            "data-component-line": "254",
                            "data-component-file": "CalendarEvents.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22mx-auto%20h-1%20w-20%20bg-indian-green%20rounded-full%20mb-12%22%7D",
                            className: "mx-auto h-1 w-20 bg-indian-green rounded-full mb-12"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                            lineNumber: 254,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/academics/CalendarEvents.tsx:255:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                            "data-component-line": "255",
                            "data-component-file": "CalendarEvents.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22grid%20sm%3Agrid-cols-2%20lg%3Agrid-cols-3%20gap-6%22%7D",
                            className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: highlights.map((it, i)=>/*#__PURE__*/ _jsxDEV(Card, {
                                    "data-lov-id": "src/pages/academics/CalendarEvents.tsx:257:14",
                                    "data-lov-name": "Card",
                                    "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                    "data-component-line": "257",
                                    "data-component-file": "CalendarEvents.tsx",
                                    "data-component-name": "Card",
                                    "data-component-content": "%7B%22className%22%3A%22border-indian-green%2F20%20hover%3Ashadow-lg%20hover%3A-translate-y-1%20transition-all%22%7D",
                                    className: "border-indian-green/20 hover:shadow-lg hover:-translate-y-1 transition-all",
                                    children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                        "data-lov-id": "src/pages/academics/CalendarEvents.tsx:258:16",
                                        "data-lov-name": "CardContent",
                                        "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                        "data-component-line": "258",
                                        "data-component-file": "CalendarEvents.tsx",
                                        "data-component-name": "CardContent",
                                        "data-component-content": "%7B%22className%22%3A%22p-6%22%7D",
                                        className: "p-6",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/academics/CalendarEvents.tsx:259:18",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                                "data-component-line": "259",
                                                "data-component-file": "CalendarEvents.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22w-12%20h-12%20rounded-xl%20bg-indian-green%20flex%20items-center%20justify-center%20mb-4%22%7D",
                                                className: "w-12 h-12 rounded-xl bg-indian-green flex items-center justify-center mb-4",
                                                children: /*#__PURE__*/ _jsxDEV(it.icon, {
                                                    "data-lov-id": "src/pages/academics/CalendarEvents.tsx:260:20",
                                                    "data-lov-name": "it.icon",
                                                    "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                                    "data-component-line": "260",
                                                    "data-component-file": "CalendarEvents.tsx",
                                                    "data-component-name": "it.icon",
                                                    "data-component-content": "%7B%22className%22%3A%22h-6%20w-6%20text-white%22%7D",
                                                    className: "h-6 w-6 text-white"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                                lineNumber: 259,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("h3", {
                                                "data-lov-id": "src/pages/academics/CalendarEvents.tsx:262:18",
                                                "data-lov-name": "h3",
                                                "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                                "data-component-line": "262",
                                                "data-component-file": "CalendarEvents.tsx",
                                                "data-component-name": "h3",
                                                "data-component-content": "%7B%22className%22%3A%22text-lg%20font-bold%20text-black%20mb-2%22%7D",
                                                className: "text-lg font-bold text-black mb-2",
                                                children: it.title
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                                lineNumber: 262,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("p", {
                                                "data-lov-id": "src/pages/academics/CalendarEvents.tsx:263:18",
                                                "data-lov-name": "p",
                                                "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                                "data-component-line": "263",
                                                "data-component-file": "CalendarEvents.tsx",
                                                "data-component-name": "p",
                                                "data-component-content": "%7B%22className%22%3A%22text-sm%20text-foreground%2F75%20leading-relaxed%22%7D",
                                                className: "text-sm text-foreground/75 leading-relaxed",
                                                children: it.desc
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                                lineNumber: 263,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                        lineNumber: 258,
                                        columnNumber: 17
                                    }, this)
                                }, i, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                    lineNumber: 257,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                            lineNumber: 255,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                    lineNumber: 252,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                lineNumber: 251,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/academics/CalendarEvents.tsx:272:6",
                "data-lov-name": "section",
                "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                "data-component-line": "272",
                "data-component-file": "CalendarEvents.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20bg-background%22%7D",
                className: "py-16 bg-background",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/academics/CalendarEvents.tsx:273:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                    "data-component-line": "273",
                    "data-component-file": "CalendarEvents.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20max-w-5xl%22%7D",
                    className: "container mx-auto px-4 max-w-5xl",
                    children: [
                        /*#__PURE__*/ _jsxDEV("h2", {
                            "data-lov-id": "src/pages/academics/CalendarEvents.tsx:274:10",
                            "data-lov-name": "h2",
                            "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                            "data-component-line": "274",
                            "data-component-file": "CalendarEvents.tsx",
                            "data-component-name": "h2",
                            "data-component-content": "%7B%22text%22%3A%22Annual%20Highlights%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20text-black%20text-center%20mb-3%22%7D",
                            className: "text-3xl md:text-4xl font-bold text-black text-center mb-3",
                            children: "Annual Highlights"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                            lineNumber: 274,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/academics/CalendarEvents.tsx:275:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                            "data-component-line": "275",
                            "data-component-file": "CalendarEvents.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22mx-auto%20h-1%20w-20%20bg-indian-green%20rounded-full%20mb-6%22%7D",
                            className: "mx-auto h-1 w-20 bg-indian-green rounded-full mb-6"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                            lineNumber: 275,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("p", {
                            "data-lov-id": "src/pages/academics/CalendarEvents.tsx:276:10",
                            "data-lov-name": "p",
                            "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                            "data-component-line": "276",
                            "data-component-file": "CalendarEvents.tsx",
                            "data-component-name": "p",
                            "data-component-content": "%7B%22text%22%3A%22Month-wise%20breakdown%20of%20all%20important%20events%2C%20examinations%2C%20holidays%20and%20celebrations%20for%202026%E2%80%9327.%22%2C%22className%22%3A%22text-center%20text-foreground%2F70%20mb-10%20max-w-2xl%20mx-auto%22%7D",
                            className: "text-center text-foreground/70 mb-10 max-w-2xl mx-auto",
                            children: "Month-wise breakdown of all important events, examinations, holidays and celebrations for 2026–27."
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                            lineNumber: 276,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/academics/CalendarEvents.tsx:281:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                            "data-component-line": "281",
                            "data-component-file": "CalendarEvents.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22flex%20flex-wrap%20justify-center%20gap-2%20mb-10%22%7D",
                            className: "flex flex-wrap justify-center gap-2 mb-10",
                            children: Object.keys(typeStyles).map((k)=>{
                                const s = typeStyles[k];
                                const Icon = s.icon;
                                return /*#__PURE__*/ _jsxDEV("span", {
                                    "data-lov-id": "src/pages/academics/CalendarEvents.tsx:286:16",
                                    "data-lov-name": "span",
                                    "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                    "data-component-line": "286",
                                    "data-component-file": "CalendarEvents.tsx",
                                    "data-component-name": "span",
                                    "data-component-content": "%7B%7D",
                                    className: `inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border ${s.badge}`,
                                    children: [
                                        /*#__PURE__*/ _jsxDEV(Icon, {
                                            "data-lov-id": "src/pages/academics/CalendarEvents.tsx:287:18",
                                            "data-lov-name": "Icon",
                                            "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                            "data-component-line": "287",
                                            "data-component-file": "CalendarEvents.tsx",
                                            "data-component-name": "Icon",
                                            "data-component-content": "%7B%22className%22%3A%22h-3.5%20w-3.5%22%7D",
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                            lineNumber: 287,
                                            columnNumber: 19
                                        }, this),
                                        s.label
                                    ]
                                }, k, true, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                    lineNumber: 286,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                            lineNumber: 281,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV(Accordion, {
                            "data-lov-id": "src/pages/academics/CalendarEvents.tsx:294:10",
                            "data-lov-name": "Accordion",
                            "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                            "data-component-line": "294",
                            "data-component-file": "CalendarEvents.tsx",
                            "data-component-name": "Accordion",
                            "data-component-content": "%7B%22className%22%3A%22space-y-4%22%7D",
                            type: "multiple",
                            defaultValue: [
                                calendar[0].month
                            ],
                            className: "space-y-4",
                            children: calendar.map((group)=>/*#__PURE__*/ _jsxDEV(AccordionItem, {
                                    "data-lov-id": "src/pages/academics/CalendarEvents.tsx:296:14",
                                    "data-lov-name": "AccordionItem",
                                    "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                    "data-component-line": "296",
                                    "data-component-file": "CalendarEvents.tsx",
                                    "data-component-name": "AccordionItem",
                                    "data-component-content": "%7B%22className%22%3A%22border%20border-indian-green%2F20%20rounded-xl%20bg-card%20overflow-hidden%20data-%5Bstate%3Dopen%5D%3Ashadow-lg%20transition-shadow%22%7D",
                                    value: group.month,
                                    className: "border border-indian-green/20 rounded-xl bg-card overflow-hidden data-[state=open]:shadow-lg transition-shadow",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV(AccordionTrigger, {
                                            "data-lov-id": "src/pages/academics/CalendarEvents.tsx:301:16",
                                            "data-lov-name": "AccordionTrigger",
                                            "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                            "data-component-line": "301",
                                            "data-component-file": "CalendarEvents.tsx",
                                            "data-component-name": "AccordionTrigger",
                                            "data-component-content": "%7B%22className%22%3A%22px-5%20py-4%20hover%3Ano-underline%20hover%3Abg-indian-green%2F5%22%7D",
                                            className: "px-5 py-4 hover:no-underline hover:bg-indian-green/5",
                                            children: /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/academics/CalendarEvents.tsx:302:18",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                                "data-component-line": "302",
                                                "data-component-file": "CalendarEvents.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20gap-4%20text-left%22%7D",
                                                className: "flex items-center gap-4 text-left",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/pages/academics/CalendarEvents.tsx:303:20",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                                        "data-component-line": "303",
                                                        "data-component-file": "CalendarEvents.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%22className%22%3A%22w-12%20h-12%20rounded-xl%20bg-indian-green%2F10%20text-indian-green%20flex%20items-center%20justify-center%20flex-shrink-0%22%7D",
                                                        className: "w-12 h-12 rounded-xl bg-indian-green/10 text-indian-green flex items-center justify-center flex-shrink-0",
                                                        children: /*#__PURE__*/ _jsxDEV(CalendarDays, {
                                                            "data-lov-id": "src/pages/academics/CalendarEvents.tsx:304:22",
                                                            "data-lov-name": "CalendarDays",
                                                            "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                                            "data-component-line": "304",
                                                            "data-component-file": "CalendarEvents.tsx",
                                                            "data-component-name": "CalendarDays",
                                                            "data-component-content": "%7B%22className%22%3A%22h-6%20w-6%22%7D",
                                                            className: "h-6 w-6"
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                                            lineNumber: 304,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                                        lineNumber: 303,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/pages/academics/CalendarEvents.tsx:306:20",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                                        "data-component-line": "306",
                                                        "data-component-file": "CalendarEvents.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%7D",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("h3", {
                                                                "data-lov-id": "src/pages/academics/CalendarEvents.tsx:307:22",
                                                                "data-lov-name": "h3",
                                                                "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                                                "data-component-line": "307",
                                                                "data-component-file": "CalendarEvents.tsx",
                                                                "data-component-name": "h3",
                                                                "data-component-content": "%7B%22className%22%3A%22text-lg%20md%3Atext-xl%20font-bold%20text-black%22%7D",
                                                                className: "text-lg md:text-xl font-bold text-black",
                                                                children: group.month
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                                                lineNumber: 307,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("p", {
                                                                "data-lov-id": "src/pages/academics/CalendarEvents.tsx:308:22",
                                                                "data-lov-name": "p",
                                                                "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                                                "data-component-line": "308",
                                                                "data-component-file": "CalendarEvents.tsx",
                                                                "data-component-name": "p",
                                                                "data-component-content": "%7B%22text%22%3A%22event%22%2C%22className%22%3A%22text-xs%20md%3Atext-sm%20text-foreground%2F60%22%7D",
                                                                className: "text-xs md:text-sm text-foreground/60",
                                                                children: [
                                                                    group.events.length,
                                                                    " event",
                                                                    group.events.length !== 1 ? "s" : ""
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                                                lineNumber: 308,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                                        lineNumber: 306,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                                lineNumber: 302,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                            lineNumber: 301,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV(AccordionContent, {
                                            "data-lov-id": "src/pages/academics/CalendarEvents.tsx:312:16",
                                            "data-lov-name": "AccordionContent",
                                            "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                            "data-component-line": "312",
                                            "data-component-file": "CalendarEvents.tsx",
                                            "data-component-name": "AccordionContent",
                                            "data-component-content": "%7B%22className%22%3A%22px-5%20pb-5%22%7D",
                                            className: "px-5 pb-5",
                                            children: /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/academics/CalendarEvents.tsx:313:18",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                                "data-component-line": "313",
                                                "data-component-file": "CalendarEvents.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22relative%20pl-6%20md%3Apl-8%20border-l-2%20border-indian-green%2F20%20space-y-4%22%7D",
                                                className: "relative pl-6 md:pl-8 border-l-2 border-indian-green/20 space-y-4",
                                                children: group.events.map((ev, i)=>{
                                                    const style = typeStyles[ev.type];
                                                    const Icon = style.icon;
                                                    return /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/pages/academics/CalendarEvents.tsx:318:24",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                                        "data-component-line": "318",
                                                        "data-component-file": "CalendarEvents.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%22className%22%3A%22relative%22%7D",
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("span", {
                                                                "data-lov-id": "src/pages/academics/CalendarEvents.tsx:319:26",
                                                                "data-lov-name": "span",
                                                                "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                                                "data-component-line": "319",
                                                                "data-component-file": "CalendarEvents.tsx",
                                                                "data-component-name": "span",
                                                                "data-component-content": "%7B%22className%22%3A%22absolute%20-left-%5B29px%5D%20md%3A-left-%5B37px%5D%20top-1.5%20w-4%20h-4%20rounded-full%20bg-indian-green%20ring-4%20ring-background%22%7D",
                                                                className: "absolute -left-[29px] md:-left-[37px] top-1.5 w-4 h-4 rounded-full bg-indian-green ring-4 ring-background"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                                                lineNumber: 319,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV("div", {
                                                                "data-lov-id": "src/pages/academics/CalendarEvents.tsx:320:26",
                                                                "data-lov-name": "div",
                                                                "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                                                "data-component-line": "320",
                                                                "data-component-file": "CalendarEvents.tsx",
                                                                "data-component-name": "div",
                                                                "data-component-content": "%7B%22className%22%3A%22flex%20flex-col%20sm%3Aflex-row%20sm%3Aitems-center%20sm%3Ajustify-between%20gap-2%20bg-muted%2F30%20hover%3Abg-muted%2F60%20transition-colors%20rounded-lg%20px-4%20py-3%22%7D",
                                                                className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 bg-muted/30 hover:bg-muted/60 transition-colors rounded-lg px-4 py-3",
                                                                children: [
                                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                                        "data-lov-id": "src/pages/academics/CalendarEvents.tsx:321:28",
                                                                        "data-lov-name": "div",
                                                                        "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                                                        "data-component-line": "321",
                                                                        "data-component-file": "CalendarEvents.tsx",
                                                                        "data-component-name": "div",
                                                                        "data-component-content": "%7B%22className%22%3A%22flex%20items-start%20gap-3%22%7D",
                                                                        className: "flex items-start gap-3",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsxDEV("div", {
                                                                                "data-lov-id": "src/pages/academics/CalendarEvents.tsx:322:30",
                                                                                "data-lov-name": "div",
                                                                                "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                                                                "data-component-line": "322",
                                                                                "data-component-file": "CalendarEvents.tsx",
                                                                                "data-component-name": "div",
                                                                                "data-component-content": "%7B%22className%22%3A%22w-9%20h-9%20rounded-lg%20bg-background%20flex%20items-center%20justify-center%20flex-shrink-0%20border%20border-border%22%7D",
                                                                                className: "w-9 h-9 rounded-lg bg-background flex items-center justify-center flex-shrink-0 border border-border",
                                                                                children: /*#__PURE__*/ _jsxDEV(Icon, {
                                                                                    "data-lov-id": "src/pages/academics/CalendarEvents.tsx:323:32",
                                                                                    "data-lov-name": "Icon",
                                                                                    "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                                                                    "data-component-line": "323",
                                                                                    "data-component-file": "CalendarEvents.tsx",
                                                                                    "data-component-name": "Icon",
                                                                                    "data-component-content": "%7B%22className%22%3A%22h-4.5%20w-4.5%20text-indian-green%22%7D",
                                                                                    className: "h-4.5 w-4.5 text-indian-green"
                                                                                }, void 0, false, {
                                                                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                                                                    lineNumber: 323,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                                                                lineNumber: 322,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ _jsxDEV("div", {
                                                                                "data-lov-id": "src/pages/academics/CalendarEvents.tsx:325:30",
                                                                                "data-lov-name": "div",
                                                                                "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                                                                "data-component-line": "325",
                                                                                "data-component-file": "CalendarEvents.tsx",
                                                                                "data-component-name": "div",
                                                                                "data-component-content": "%7B%7D",
                                                                                children: [
                                                                                    /*#__PURE__*/ _jsxDEV("p", {
                                                                                        "data-lov-id": "src/pages/academics/CalendarEvents.tsx:326:32",
                                                                                        "data-lov-name": "p",
                                                                                        "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                                                                        "data-component-line": "326",
                                                                                        "data-component-file": "CalendarEvents.tsx",
                                                                                        "data-component-name": "p",
                                                                                        "data-component-content": "%7B%22className%22%3A%22font-semibold%20text-black%20leading-tight%22%7D",
                                                                                        className: "font-semibold text-black leading-tight",
                                                                                        children: ev.title
                                                                                    }, void 0, false, {
                                                                                        fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                                                                        lineNumber: 326,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ _jsxDEV("p", {
                                                                                        "data-lov-id": "src/pages/academics/CalendarEvents.tsx:327:32",
                                                                                        "data-lov-name": "p",
                                                                                        "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                                                                        "data-component-line": "327",
                                                                                        "data-component-file": "CalendarEvents.tsx",
                                                                                        "data-component-name": "p",
                                                                                        "data-component-content": "%7B%22className%22%3A%22text-xs%20text-foreground%2F60%20mt-0.5%22%7D",
                                                                                        className: "text-xs text-foreground/60 mt-0.5",
                                                                                        children: ev.date
                                                                                    }, void 0, false, {
                                                                                        fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                                                                        lineNumber: 327,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                                                                lineNumber: 325,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                                                        lineNumber: 321,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ _jsxDEV("span", {
                                                                        "data-lov-id": "src/pages/academics/CalendarEvents.tsx:330:28",
                                                                        "data-lov-name": "span",
                                                                        "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                                                        "data-component-line": "330",
                                                                        "data-component-file": "CalendarEvents.tsx",
                                                                        "data-component-name": "span",
                                                                        "data-component-content": "%7B%7D",
                                                                        className: `self-start sm:self-center text-xs px-2.5 py-1 rounded-full border ${style.badge} whitespace-nowrap`,
                                                                        children: style.label
                                                                    }, void 0, false, {
                                                                        fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                                                        lineNumber: 330,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                                                lineNumber: 320,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, i, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 25
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                                lineNumber: 313,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                            lineNumber: 312,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, group.month, true, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                    lineNumber: 296,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                            lineNumber: 294,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                    lineNumber: 273,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                lineNumber: 272,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/academics/CalendarEvents.tsx:346:6",
                "data-lov-name": "section",
                "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                "data-component-line": "346",
                "data-component-file": "CalendarEvents.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20bg-muted%2F30%22%7D",
                className: "py-16 bg-muted/30",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/academics/CalendarEvents.tsx:347:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                    "data-component-line": "347",
                    "data-component-file": "CalendarEvents.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20max-w-3xl%22%7D",
                    className: "container mx-auto px-4 max-w-3xl",
                    children: /*#__PURE__*/ _jsxDEV(Card, {
                        "data-lov-id": "src/pages/academics/CalendarEvents.tsx:348:10",
                        "data-lov-name": "Card",
                        "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                        "data-component-line": "348",
                        "data-component-file": "CalendarEvents.tsx",
                        "data-component-name": "Card",
                        "data-component-content": "%7B%22className%22%3A%22border-indian-green%2F20%20bg-indian-green%2F5%22%7D",
                        className: "border-indian-green/20 bg-indian-green/5",
                        children: /*#__PURE__*/ _jsxDEV(CardContent, {
                            "data-lov-id": "src/pages/academics/CalendarEvents.tsx:349:12",
                            "data-lov-name": "CardContent",
                            "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                            "data-component-line": "349",
                            "data-component-file": "CalendarEvents.tsx",
                            "data-component-name": "CardContent",
                            "data-component-content": "%7B%22className%22%3A%22p-10%20text-center%22%7D",
                            className: "p-10 text-center",
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/academics/CalendarEvents.tsx:350:14",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                    "data-component-line": "350",
                                    "data-component-file": "CalendarEvents.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22w-16%20h-16%20rounded-2xl%20bg-indian-green%20flex%20items-center%20justify-center%20mx-auto%20mb-6%22%7D",
                                    className: "w-16 h-16 rounded-2xl bg-indian-green flex items-center justify-center mx-auto mb-6",
                                    children: /*#__PURE__*/ _jsxDEV(Download, {
                                        "data-lov-id": "src/pages/academics/CalendarEvents.tsx:351:16",
                                        "data-lov-name": "Download",
                                        "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                        "data-component-line": "351",
                                        "data-component-file": "CalendarEvents.tsx",
                                        "data-component-name": "Download",
                                        "data-component-content": "%7B%22className%22%3A%22h-8%20w-8%20text-white%22%7D",
                                        className: "h-8 w-8 text-white"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                        lineNumber: 351,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                    lineNumber: 350,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("h2", {
                                    "data-lov-id": "src/pages/academics/CalendarEvents.tsx:353:14",
                                    "data-lov-name": "h2",
                                    "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                    "data-component-line": "353",
                                    "data-component-file": "CalendarEvents.tsx",
                                    "data-component-name": "h2",
                                    "data-component-content": "%7B%22text%22%3A%22Academic%20Calendar%20Download%22%2C%22className%22%3A%22text-2xl%20md%3Atext-3xl%20font-bold%20text-black%20mb-3%22%7D",
                                    className: "text-2xl md:text-3xl font-bold text-black mb-3",
                                    children: "Academic Calendar Download"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                    lineNumber: 353,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    "data-lov-id": "src/pages/academics/CalendarEvents.tsx:354:14",
                                    "data-lov-name": "p",
                                    "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                    "data-component-line": "354",
                                    "data-component-file": "CalendarEvents.tsx",
                                    "data-component-name": "p",
                                    "data-component-content": "%7B%22text%22%3A%22Access%20the%20complete%20Calendar%20of%20Events%202026%E2%80%9327%20with%20all%20important%20dates%2C%20events%20and%20assessments.%22%2C%22className%22%3A%22text-foreground%2F75%20mb-6%22%7D",
                                    className: "text-foreground/75 mb-6",
                                    children: "Access the complete Calendar of Events 2026–27 with all important dates, events and assessments."
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                    lineNumber: 354,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/academics/CalendarEvents.tsx:357:14",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                    "data-component-line": "357",
                                    "data-component-file": "CalendarEvents.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22flex%20flex-wrap%20justify-center%20gap-3%22%7D",
                                    className: "flex flex-wrap justify-center gap-3",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV(Button, {
                                            "data-lov-id": "src/pages/academics/CalendarEvents.tsx:358:16",
                                            "data-lov-name": "Button",
                                            "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                            "data-component-line": "358",
                                            "data-component-file": "CalendarEvents.tsx",
                                            "data-component-name": "Button",
                                            "data-component-content": "%7B%22className%22%3A%22bg-indian-green%20hover%3Abg-indian-green%2F90%20text-white%22%7D",
                                            asChild: true,
                                            className: "bg-indian-green hover:bg-indian-green/90 text-white",
                                            children: /*#__PURE__*/ _jsxDEV("a", {
                                                "data-lov-id": "src/pages/academics/CalendarEvents.tsx:359:18",
                                                "data-lov-name": "a",
                                                "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                                "data-component-line": "359",
                                                "data-component-file": "CalendarEvents.tsx",
                                                "data-component-name": "a",
                                                "data-component-content": "%7B%22text%22%3A%22Download%20PDF%22%7D",
                                                href: "/COE-2026.pdf",
                                                download: "COE-2026.pdf",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(Download, {
                                                        "data-lov-id": "src/pages/academics/CalendarEvents.tsx:360:20",
                                                        "data-lov-name": "Download",
                                                        "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                                        "data-component-line": "360",
                                                        "data-component-file": "CalendarEvents.tsx",
                                                        "data-component-name": "Download",
                                                        "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%20mr-2%22%7D",
                                                        className: "h-4 w-4 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                                        lineNumber: 360,
                                                        columnNumber: 21
                                                    }, this),
                                                    " Download PDF"
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                                lineNumber: 359,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                            lineNumber: 358,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV(Button, {
                                            "data-lov-id": "src/pages/academics/CalendarEvents.tsx:363:16",
                                            "data-lov-name": "Button",
                                            "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                            "data-component-line": "363",
                                            "data-component-file": "CalendarEvents.tsx",
                                            "data-component-name": "Button",
                                            "data-component-content": "%7B%22className%22%3A%22border-indian-green%20text-indian-green%20hover%3Abg-indian-green%20hover%3Atext-white%22%7D",
                                            asChild: true,
                                            variant: "outline",
                                            className: "border-indian-green text-indian-green hover:bg-indian-green hover:text-white",
                                            children: /*#__PURE__*/ _jsxDEV("a", {
                                                "data-lov-id": "src/pages/academics/CalendarEvents.tsx:364:18",
                                                "data-lov-name": "a",
                                                "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                                "data-component-line": "364",
                                                "data-component-file": "CalendarEvents.tsx",
                                                "data-component-name": "a",
                                                "data-component-content": "%7B%22text%22%3A%22View%20PDF%22%7D",
                                                href: "/COE-2026.pdf",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(Eye, {
                                                        "data-lov-id": "src/pages/academics/CalendarEvents.tsx:365:20",
                                                        "data-lov-name": "Eye",
                                                        "data-component-path": "src/pages/academics/CalendarEvents.tsx",
                                                        "data-component-line": "365",
                                                        "data-component-file": "CalendarEvents.tsx",
                                                        "data-component-name": "Eye",
                                                        "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%20mr-2%22%7D",
                                                        className: "h-4 w-4 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                                        lineNumber: 365,
                                                        columnNumber: 21
                                                    }, this),
                                                    " View PDF"
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                                lineNumber: 364,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                            lineNumber: 363,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                                    lineNumber: 357,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                            lineNumber: 349,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                        lineNumber: 348,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                    lineNumber: 347,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
                lineNumber: 346,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx",
        lineNumber: 228,
        columnNumber: 5
    }, this);
};
_c = CalendarEvents;
export default CalendarEvents;
var _c;
$RefreshReg$(_c, "CalendarEvents");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/pages/academics/CalendarEvents.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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REFBQUMsaUJBQUE7Z0RBQUFDLHVCQUFBO2dEQUFBQyx1QkFBQTtnREFBQUMsdUJBQUE7Z0RBQUFDLHVCQUFBO2dEQUFBQywwQkFBQTtnREFBRTBCLE1BQUs7Z0RBQWdCRyxRQUFPO2dEQUFTQyxLQUFJOztrRUFDMUMsUUFBQzFEO3dEQUFFc0IsZUFBQTt3REFBQUMsaUJBQUE7d0RBQUFDLHVCQUFBO3dEQUFBQyx1QkFBQTt3REFBQUMsdUJBQUE7d0RBQUFDLHVCQUFBO3dEQUFBQywwQkFBQTt3REFBRUksV0FBVTs7Ozs7O29EQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVXBEO0tBckpNWDtBQXVKTixlQUFlQSxlQUFjIiwibmFtZXMiOlsiTGF5b3V0IiwiUGFnZUhlcm8iLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJCdXR0b24iLCJBY2NvcmRpb24iLCJBY2NvcmRpb25Db250ZW50IiwiQWNjb3JkaW9uSXRlbSIsIkFjY29yZGlvblRyaWdnZXIiLCJDYWxlbmRhciIsIkNhbGVuZGFyRGF5cyIsIkJvb2tPcGVuIiwiQ2xpcGJvYXJkTGlzdCIsIlRyb3BoeSIsIlNwYXJrbGVzIiwiRG93bmxvYWQiLCJFeWUiLCJHcmFkdWF0aW9uQ2FwIiwiUGFydHlQb3BwZXIiLCJGbGFnIiwiaGlnaGxpZ2h0cyIsImljb24iLCJ0aXRsZSIsImRlc2MiLCJjYWxlbmRhciIsIm1vbnRoIiwiZXZlbnRzIiwiZGF0ZSIsInR5cGUiLCJ0eXBlU3R5bGVzIiwiZXhhbSIsImJhZGdlIiwibGFiZWwiLCJob2xpZGF5IiwiZXZlbnQiLCJjZWxlYnJhdGlvbiIsIm9yaWVudGF0aW9uIiwiQ2FsZW5kYXJFdmVudHMiLCJkYXRhLWxvdi1pZCIsImRhdGEtbG92LW5hbWUiLCJkYXRhLWNvbXBvbmVudC1wYXRoIiwiZGF0YS1jb21wb25lbnQtbGluZSIsImRhdGEtY29tcG9uZW50LWZpbGUiLCJkYXRhLWNvbXBvbmVudC1uYW1lIiwiZGF0YS1jb21wb25lbnQtY29udGVudCIsImJyZWFkY3J1bWJzIiwicGF0aCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJoMiIsInAiLCJzcGFuIiwibWFwIiwiaXQiLCJpIiwiaDMiLCJPYmplY3QiLCJrZXlzIiwiayIsInMiLCJJY29uIiwiZGVmYXVsdFZhbHVlIiwiZ3JvdXAiLCJ2YWx1ZSIsImxlbmd0aCIsImV2Iiwic3R5bGUiLCJhc0NoaWxkIiwiYSIsImhyZWYiLCJkb3dubG9hZCIsInZhcmlhbnQiLCJ0YXJnZXQiLCJyZWwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiQ2FsZW5kYXJFdmVudHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBQYWdlSGVybyBmcm9tIFwiQC9jb21wb25lbnRzL1BhZ2VIZXJvXCI7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7XG4gIEFjY29yZGlvbixcbiAgQWNjb3JkaW9uQ29udGVudCxcbiAgQWNjb3JkaW9uSXRlbSxcbiAgQWNjb3JkaW9uVHJpZ2dlcixcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9hY2NvcmRpb25cIjtcbmltcG9ydCB7XG4gIENhbGVuZGFyLFxuICBDYWxlbmRhckRheXMsXG4gIEJvb2tPcGVuLFxuICBDbGlwYm9hcmRMaXN0LFxuICBUcm9waHksXG4gIFNwYXJrbGVzLFxuICBEb3dubG9hZCxcbiAgRXllLFxuICBHcmFkdWF0aW9uQ2FwLFxuICBQYXJ0eVBvcHBlcixcbiAgRmxhZyxcbiAgVXNlcnMsXG4gIEZsYXNrQ29uaWNhbCxcbiAgR2lmdCxcbn0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuXG5jb25zdCBoaWdobGlnaHRzID0gW1xuICB7IGljb246IENhbGVuZGFyRGF5cywgdGl0bGU6IFwiQWNhZGVtaWMgWWVhciBPdmVydmlld1wiLCBkZXNjOiBcIkEgY2xlYXJseSBzdHJ1Y3R1cmVkIDIwMjbigJMyNyBzZXNzaW9uIHdpdGggZGVmaW5lZCB0ZXJtcywgaG9saWRheXMsIGFuZCBhc3Nlc3NtZW50IHdpbmRvd3MuXCIgfSxcbiAgeyBpY29uOiBCb29rT3BlbiwgdGl0bGU6IFwiVGVybSBTdHJ1Y3R1cmVcIiwgZGVzYzogXCJCYWxhbmNlZCBpbnN0cnVjdGlvbmFsIGRheXMgYWNyb3NzIHBlcmlvZGljIHRlc3RzLCBtaWQtdGVybXMsIHByZS1maW5hbHMsIGFuZCBmaW5hbCBleGFtaW5hdGlvbnMuXCIgfSxcbiAgeyBpY29uOiBDbGlwYm9hcmRMaXN0LCB0aXRsZTogXCJFeGFtaW5hdGlvbiBTY2hlZHVsZVwiLCBkZXNjOiBcIlBULTEsIFBULTIsIFBULTMsIG1pZC10ZXJtcywgcHJlLWJvYXJkcywgYW5kIGFubnVhbCBleGFtcyBwbGFubmVkIGFjcm9zcyB0aGUgeWVhci5cIiB9LFxuICB7IGljb246IFNwYXJrbGVzLCB0aXRsZTogXCJDby1DdXJyaWN1bGFyIEFjdGl2aXRpZXNcIiwgZGVzYzogXCJXb3Jrc2hvcHMsIG9yaWVudGF0aW9ucywgc3BvcnRzIGRheXMsIHNjaWVuY2UgZXhoaWJpdGlvbnMgYW5kIGN1bHR1cmFsIGNlbGVicmF0aW9ucy5cIiB9LFxuICB7IGljb246IFRyb3BoeSwgdGl0bGU6IFwiU2lnbmF0dXJlIFNjaG9vbCBFdmVudHNcIiwgZGVzYzogXCJBbm51YWwgRGF5LCBJbnZlc3RpdHVyZSwgU3BvcnRzIERheSwgRmFyZXdlbGwsIFNjaWVuY2UgRXhoaWJpdGlvbiBhbmQgRm91bmRlciBKYXlhbnRoaS5cIiB9LFxuXTtcblxudHlwZSBFdmVudFR5cGUgPSBcImV4YW1cIiB8IFwiaG9saWRheVwiIHwgXCJldmVudFwiIHwgXCJjZWxlYnJhdGlvblwiIHwgXCJvcmllbnRhdGlvblwiO1xuXG5pbnRlcmZhY2UgRXYge1xuICBkYXRlOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHR5cGU6IEV2ZW50VHlwZTtcbn1cblxuaW50ZXJmYWNlIE1vbnRoR3JvdXAge1xuICBtb250aDogc3RyaW5nO1xuICBldmVudHM6IEV2W107XG59XG5cbmNvbnN0IGNhbGVuZGFyOiBNb250aEdyb3VwW10gPSBbXG4gIHtcbiAgICBtb250aDogXCJGZWJydWFyeSAyMDI2XCIsXG4gICAgZXZlbnRzOiBbXG4gICAgICB7IGRhdGU6IFwiMDkgRmViXCIsIHRpdGxlOiBcIkxhc3QgZXhhbSDigJMgQ2xhc3MgOHRoICYgOXRoXCIsIHR5cGU6IFwiZXhhbVwiIH0sXG4gICAgICB7IGRhdGU6IFwiMTPigJMxNCBGZWJcIiwgdGl0bGU6IFwiVGVhY2hlcnMgV29ya3Nob3BcIiwgdHlwZTogXCJldmVudFwiIH0sXG4gICAgICB7IGRhdGU6IFwiMTYgRmViXCIsIHRpdGxlOiBcIkFubnVhbCBFeGFtIFBUTSDigJMgQ2xhc3MgOHRoLCA5dGggJiAxMXRoXCIsIHR5cGU6IFwiZXZlbnRcIiB9LFxuICAgICAgeyBkYXRlOiBcIjE4IEZlYlwiLCB0aXRsZTogXCJOZXcgU2Vzc2lvbiDigJMgQ2xhc3MgOXRoLCAxMHRoICYgMTJ0aFwiLCB0eXBlOiBcImV2ZW50XCIgfSxcbiAgICAgIHsgZGF0ZTogXCIyMSBGZWJcIiwgdGl0bGU6IFwiT3JpZW50YXRpb24gQ2xhc3MgOXRoICYgMTB0aCB8IFVLRyBHcmFkdWF0aW9uXCIsIHR5cGU6IFwib3JpZW50YXRpb25cIiB9LFxuICAgICAgeyBkYXRlOiBcIjI4IEZlYlwiLCB0aXRsZTogXCJTY2llbmNlIERheSDigJMgRXhoaWJpdGlvblwiLCB0eXBlOiBcImNlbGVicmF0aW9uXCIgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbW9udGg6IFwiTWFyY2ggMjAyNlwiLFxuICAgIGV2ZW50czogW1xuICAgICAgeyBkYXRlOiBcIjAyIE1hclwiLCB0aXRsZTogXCJJVCBBbm51YWwgRXhhbXMg4oCTIENsYXNzIDFzdCB0byA3dGhcIiwgdHlwZTogXCJleGFtXCIgfSxcbiAgICAgIHsgZGF0ZTogXCIwNyBNYXJcIiwgdGl0bGU6IFwiQW5udWFsIEV4YW0gc3RhcnRzIOKAkyBDbGFzcyAzcmQgdG8gN3RoXCIsIHR5cGU6IFwiZXhhbVwiIH0sXG4gICAgICB7IGRhdGU6IFwiMDkgTWFyXCIsIHRpdGxlOiBcIkFubnVhbCBFeGFtIHN0YXJ0cyDigJMgQ2xhc3MgMXN0ICYgMm5kXCIsIHR5cGU6IFwiZXhhbVwiIH0sXG4gICAgICB7IGRhdGU6IFwiMTIgTWFyXCIsIHRpdGxlOiBcIlNyaSBKYWdhZGd1cnUgUmVudWthY2hhcnlhIEpheWFudGhpXCIsIHR5cGU6IFwiY2VsZWJyYXRpb25cIiB9LFxuICAgICAgeyBkYXRlOiBcIjE4IE1hclwiLCB0aXRsZTogXCJBbm51YWwgRXhhbSBjb25jbHVkZXMgZm9yIGFsbCBjbGFzc2VzXCIsIHR5cGU6IFwiZXhhbVwiIH0sXG4gICAgICB7IGRhdGU6IFwiMTkgTWFyXCIsIHRpdGxlOiBcIlVnYWRpXCIsIHR5cGU6IFwiaG9saWRheVwiIH0sXG4gICAgICB7IGRhdGU6IFwiMjEgTWFyXCIsIHRpdGxlOiBcIlJhbXphblwiLCB0eXBlOiBcImhvbGlkYXlcIiB9LFxuICAgICAgeyBkYXRlOiBcIjI3IE1hclwiLCB0aXRsZTogXCJBbm51YWwgRXhhbSBQVE0gLyBCb29rIFNhbGUg4oCTIFByZS1QcmltYXJ5IHRvIENsYXNzIDJuZFwiLCB0eXBlOiBcImV2ZW50XCIgfSxcbiAgICAgIHsgZGF0ZTogXCIyOCBNYXJcIiwgdGl0bGU6IFwiQW5udWFsIEV4YW0gUFRNIC8gQm9vayBTYWxlIOKAkyBDbGFzcyAzcmQgdG8gN3RoXCIsIHR5cGU6IFwiZXZlbnRcIiB9LFxuICAgICAgeyBkYXRlOiBcIjMwIE1hclwiLCB0aXRsZTogXCJQVC0xIOKAkyBDbGFzcyA5dGgsIDEwdGggJiAxMnRoXCIsIHR5cGU6IFwiZXhhbVwiIH0sXG4gICAgICB7IGRhdGU6IFwiMzEgTWFyXCIsIHRpdGxlOiBcIk1haGF2aXIgSmF5YW50aGlcIiwgdHlwZTogXCJob2xpZGF5XCIgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbW9udGg6IFwiQXByaWwgMjAyNlwiLFxuICAgIGV2ZW50czogW1xuICAgICAgeyBkYXRlOiBcIjAxIEFwclwiLCB0aXRsZTogXCJTY2hvb2wgcmVvcGVucyDigJMgQ2xhc3MgMXN0IHRvIDh0aFwiLCB0eXBlOiBcImV2ZW50XCIgfSxcbiAgICAgIHsgZGF0ZTogXCIwMyBBcHJcIiwgdGl0bGU6IFwiR29vZCBGcmlkYXlcIiwgdHlwZTogXCJob2xpZGF5XCIgfSxcbiAgICAgIHsgZGF0ZTogXCIxMCBBcHJcIiwgdGl0bGU6IFwiTGFzdCB3b3JraW5nIGRheSAmIFBUTSDigJMgQ2xhc3MgOXRoLCAxMHRoICYgMTJ0aFwiLCB0eXBlOiBcImV2ZW50XCIgfSxcbiAgICAgIHsgZGF0ZTogXCIxMSBBcHJcIiwgdGl0bGU6IFwiU3VtbWVyIFZhY2F0aW9uIGJlZ2lucyDigJMgUHJlLVByaW1hcnkgdG8gQ2xhc3MgWFwiLCB0eXBlOiBcImhvbGlkYXlcIiB9LFxuICAgICAgeyBkYXRlOiBcIjE0IEFwclwiLCB0aXRsZTogXCJBbWJlZGthciBKYXlhbnRoaVwiLCB0eXBlOiBcImhvbGlkYXlcIiB9LFxuICAgICAgeyBkYXRlOiBcIjIwIEFwclwiLCB0aXRsZTogXCJCYXNhdmEgSmF5YW50aGlcIiwgdHlwZTogXCJob2xpZGF5XCIgfSxcbiAgICAgIHsgZGF0ZTogXCIyNCBBcHJcIiwgdGl0bGU6IFwiQ2xvc2luZyBkYXRlIGZvciBHcmFkZSAxMnRoXCIsIHR5cGU6IFwiZXZlbnRcIiB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBtb250aDogXCJNYXkgMjAyNlwiLFxuICAgIGV2ZW50czogW1xuICAgICAgeyBkYXRlOiBcIjAxIE1heVwiLCB0aXRsZTogXCJMYWJvdXIgRGF5XCIsIHR5cGU6IFwiaG9saWRheVwiIH0sXG4gICAgICB7IGRhdGU6IFwiMTEgTWF5XCIsIHRpdGxlOiBcIlNjaG9vbCByZW9wZW5zIOKAkyBDbGFzcyAxMSwgMTIgJiBUZWFjaGVyc1wiLCB0eXBlOiBcImV2ZW50XCIgfSxcbiAgICAgIHsgZGF0ZTogXCIxNiBNYXlcIiwgdGl0bGU6IFwiT3JpZW50YXRpb24g4oCTIENsYXNzIDh0aCwgOXRoICYgMTB0aFwiLCB0eXBlOiBcIm9yaWVudGF0aW9uXCIgfSxcbiAgICAgIHsgZGF0ZTogXCIxOCBNYXlcIiwgdGl0bGU6IFwiU2Nob29sIHJlb3BlbnMg4oCTIENsYXNzIDh0aCB0byAxMHRoXCIsIHR5cGU6IFwiZXZlbnRcIiB9LFxuICAgICAgeyBkYXRlOiBcIjIxIE1heVwiLCB0aXRsZTogXCJPcmllbnRhdGlvbiDigJMgQ2xhc3MgNnRoICYgN3RoXCIsIHR5cGU6IFwib3JpZW50YXRpb25cIiB9LFxuICAgICAgeyBkYXRlOiBcIjIzIE1heVwiLCB0aXRsZTogXCJPcmllbnRhdGlvbiDigJMgQ2xhc3MgMXN0IHRvIDV0aFwiLCB0eXBlOiBcIm9yaWVudGF0aW9uXCIgfSxcbiAgICAgIHsgZGF0ZTogXCIyNSBNYXlcIiwgdGl0bGU6IFwiU2Nob29sIHJlb3BlbnMg4oCTIENsYXNzIDFzdCB0byA3dGhcIiwgdHlwZTogXCJldmVudFwiIH0sXG4gICAgICB7IGRhdGU6IFwiMjggTWF5XCIsIHRpdGxlOiBcIkJha3JpZFwiLCB0eXBlOiBcImhvbGlkYXlcIiB9LFxuICAgICAgeyBkYXRlOiBcIjMwIE1heVwiLCB0aXRsZTogXCJPcmllbnRhdGlvbiDigJMgUHJlLVByaW1hcnlcIiwgdHlwZTogXCJvcmllbnRhdGlvblwiIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG1vbnRoOiBcIkp1bmUgMjAyNlwiLFxuICAgIGV2ZW50czogW1xuICAgICAgeyBkYXRlOiBcIjAxIEp1blwiLCB0aXRsZTogXCJTY2hvb2wgcmVvcGVucyDigJMgTnVyc2VyeSwgTEtHLCBVS0dcIiwgdHlwZTogXCJldmVudFwiIH0sXG4gICAgICB7IGRhdGU6IFwiMDMgSnVuXCIsIHRpdGxlOiBcIldvcmxkIEJpY3ljbGUgRGF5XCIsIHR5cGU6IFwiY2VsZWJyYXRpb25cIiB9LFxuICAgICAgeyBkYXRlOiBcIjA1IEp1blwiLCB0aXRsZTogXCJFbnZpcm9ubWVudCBEYXkgQ2VsZWJyYXRpb25cIiwgdHlwZTogXCJjZWxlYnJhdGlvblwiIH0sXG4gICAgICB7IGRhdGU6IFwiMDYgSnVuXCIsIHRpdGxlOiBcIk9yaWVudGF0aW9uIOKAkyBDbGFzcyAxMXRoXCIsIHR5cGU6IFwib3JpZW50YXRpb25cIiB9LFxuICAgICAgeyBkYXRlOiBcIjExIEp1blwiLCB0aXRsZTogXCJJbnZlc3RpdHVyZSBDZXJlbW9ueVwiLCB0eXBlOiBcImV2ZW50XCIgfSxcbiAgICAgIHsgZGF0ZTogXCIyMCBKdW5cIiwgdGl0bGU6IFwiWW9nYSBEYXlcIiwgdHlwZTogXCJjZWxlYnJhdGlvblwiIH0sXG4gICAgICB7IGRhdGU6IFwiMjYgSnVuXCIsIHRpdGxlOiBcIk1vaGFyYW1cIiwgdHlwZTogXCJob2xpZGF5XCIgfSxcbiAgICAgIHsgZGF0ZTogXCIyNyBKdW5cIiwgdGl0bGU6IFwiRnJlc2hlcidzIERheSDigJMgQ2xhc3MgMTF0aFwiLCB0eXBlOiBcImNlbGVicmF0aW9uXCIgfSxcbiAgICAgIHsgZGF0ZTogXCIyOSBKdW5cIiwgdGl0bGU6IFwiUFQtMSDigJMgQ2xhc3MgMXN0IHRvIDEwdGhcIiwgdHlwZTogXCJleGFtXCIgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbW9udGg6IFwiSnVseSAyMDI2XCIsXG4gICAgZXZlbnRzOiBbXG4gICAgICB7IGRhdGU6IFwiMTEgSnVsXCIsIHRpdGxlOiBcIlBUTSDigJMgQ2xhc3MgMXN0IHRvIDh0aFwiLCB0eXBlOiBcImV2ZW50XCIgfSxcbiAgICAgIHsgZGF0ZTogXCIyNiBKdWxcIiwgdGl0bGU6IFwiS2FyZ2lsIFZpamF5IERpd2FzXCIsIHR5cGU6IFwiY2VsZWJyYXRpb25cIiB9LFxuICAgICAgeyBkYXRlOiBcIjI5IEp1bFwiLCB0aXRsZTogXCJHdXJ1IFB1cm5pbWFcIiwgdHlwZTogXCJjZWxlYnJhdGlvblwiIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG1vbnRoOiBcIkF1Z3VzdCAyMDI2XCIsXG4gICAgZXZlbnRzOiBbXG4gICAgICB7IGRhdGU6IFwiMDEgQXVnXCIsIHRpdGxlOiBcIlBlcmlvZGljIFRlc3QtMiDigJMgQ2xhc3MgMXN0IHRvIDEwdGhcIiwgdHlwZTogXCJleGFtXCIgfSxcbiAgICAgIHsgZGF0ZTogXCIxNSBBdWdcIiwgdGl0bGU6IFwiSW5kZXBlbmRlbmNlIERheVwiLCB0eXBlOiBcImNlbGVicmF0aW9uXCIgfSxcbiAgICAgIHsgZGF0ZTogXCIyMSBBdWdcIiwgdGl0bGU6IFwiVmFyYW1haGFsYWtzaG1pXCIsIHR5cGU6IFwiaG9saWRheVwiIH0sXG4gICAgICB7IGRhdGU6IFwiMjYgQXVnXCIsIHRpdGxlOiBcIkVpZC1NaWxhZFwiLCB0eXBlOiBcImhvbGlkYXlcIiB9LFxuICAgICAgeyBkYXRlOiBcIjI44oCTMjkgQXVnXCIsIHRpdGxlOiBcIlNwb3J0cyBEYXlcIiwgdHlwZTogXCJldmVudFwiIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG1vbnRoOiBcIlNlcHRlbWJlciAyMDI2XCIsXG4gICAgZXZlbnRzOiBbXG4gICAgICB7IGRhdGU6IFwiMDQgU2VwXCIsIHRpdGxlOiBcIlRlYWNoZXIncyBEYXkgQ2VsZWJyYXRpb25cIiwgdHlwZTogXCJjZWxlYnJhdGlvblwiIH0sXG4gICAgICB7IGRhdGU6IFwiMDUgU2VwXCIsIHRpdGxlOiBcIlRlYWNoZXIncyBUcmlwXCIsIHR5cGU6IFwiZXZlbnRcIiB9LFxuICAgICAgeyBkYXRlOiBcIjE0IFNlcFwiLCB0aXRsZTogXCJHYW5lc2hhIENoYXR1cnRoaVwiLCB0eXBlOiBcImhvbGlkYXlcIiB9LFxuICAgICAgeyBkYXRlOiBcIjI4IFNlcFwiLCB0aXRsZTogXCJJVCBNaWQtVGVybSBFeGFtIOKAkyBDbGFzcyAxc3QgdG8gMTB0aFwiLCB0eXBlOiBcImV4YW1cIiB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBtb250aDogXCJPY3RvYmVyIDIwMjZcIixcbiAgICBldmVudHM6IFtcbiAgICAgIHsgZGF0ZTogXCIwMSBPY3RcIiwgdGl0bGU6IFwiTWlkLVRlcm0gVGVzdCAvIFByZS1Cb2FyZFwiLCB0eXBlOiBcImV4YW1cIiB9LFxuICAgICAgeyBkYXRlOiBcIjAyIE9jdFwiLCB0aXRsZTogXCJHYW5kaGkgSmF5YW50aGlcIiwgdHlwZTogXCJob2xpZGF5XCIgfSxcbiAgICAgIHsgZGF0ZTogXCIxMiBPY3RcIiwgdGl0bGU6IFwiTWlkLVRlcm0gTGFzdCBFeGFtXCIsIHR5cGU6IFwiZXhhbVwiIH0sXG4gICAgICB7IGRhdGU6IFwiMTMgT2N0XCIsIHRpdGxlOiBcIkR1c3NlaHJhIENlbGVicmF0aW9uIGZvciBUZWFjaGVyc1wiLCB0eXBlOiBcImNlbGVicmF0aW9uXCIgfSxcbiAgICAgIHsgZGF0ZTogXCIxNOKAkzE1IE9jdFwiLCB0aXRsZTogXCJXb3Jrc2hvcFwiLCB0eXBlOiBcImV2ZW50XCIgfSxcbiAgICAgIHsgZGF0ZTogXCIxNiBPY3RcIiwgdGl0bGU6IFwiQ2xhc3MgOXRoLCAxMHRoICYgMTF0aCBUcmlwXCIsIHR5cGU6IFwiZXZlbnRcIiB9LFxuICAgICAgeyBkYXRlOiBcIjIwIE9jdFwiLCB0aXRsZTogXCJBeXVkaGEgUG9vamVcIiwgdHlwZTogXCJob2xpZGF5XCIgfSxcbiAgICAgIHsgZGF0ZTogXCIyMSBPY3RcIiwgdGl0bGU6IFwiVmlqYXlhZGFzaGFtaVwiLCB0eXBlOiBcImhvbGlkYXlcIiB9LFxuICAgICAgeyBkYXRlOiBcIjI2IE9jdFwiLCB0aXRsZTogXCJWYWxtaWtpIEpheWFudGhpXCIsIHR5cGU6IFwiaG9saWRheVwiIH0sXG4gICAgICB7IGRhdGU6IFwiMjcgT2N0XCIsIHRpdGxlOiBcIlNjaG9vbCBSZS1vcGVuc1wiLCB0eXBlOiBcImV2ZW50XCIgfSxcbiAgICAgIHsgZGF0ZTogXCIzMSBPY3RcIiwgdGl0bGU6IFwiUFRNIOKAkyBDbGFzcyBOdXJzZXJ5IHRvIDEwdGhcIiwgdHlwZTogXCJldmVudFwiIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG1vbnRoOiBcIk5vdmVtYmVyIDIwMjZcIixcbiAgICBldmVudHM6IFtcbiAgICAgIHsgZGF0ZTogXCIwMSBOb3ZcIiwgdGl0bGU6IFwiS2FubmFkYSBSYWp5b3Roc2F2YVwiLCB0eXBlOiBcImNlbGVicmF0aW9uXCIgfSxcbiAgICAgIHsgZGF0ZTogXCIwNiBOb3ZcIiwgdGl0bGU6IFwiS2FubmFkYSBSYWp5b3Roc2F2YSBDZWxlYnJhdGlvbiBpbiBTY2hvb2xcIiwgdHlwZTogXCJjZWxlYnJhdGlvblwiIH0sXG4gICAgICB7IGRhdGU6IFwiMDkgTm92XCIsIHRpdGxlOiBcIkFtYXZhc3llXCIsIHR5cGU6IFwiaG9saWRheVwiIH0sXG4gICAgICB7IGRhdGU6IFwiMTAgTm92XCIsIHRpdGxlOiBcIkJhbGlwYWR5YW1pXCIsIHR5cGU6IFwiaG9saWRheVwiIH0sXG4gICAgICB7IGRhdGU6IFwiMTMgTm92XCIsIHRpdGxlOiBcIkNoaWxkcmVuJ3MgRGF5IENlbGVicmF0aW9uXCIsIHR5cGU6IFwiY2VsZWJyYXRpb25cIiB9LFxuICAgICAgeyBkYXRlOiBcIjI1IE5vdlwiLCB0aXRsZTogXCJBbm51YWwgRGF5IOKAkyBQcmUtUHJpbWFyeSAmIFByaW1hcnlcIiwgdHlwZTogXCJldmVudFwiIH0sXG4gICAgICB7IGRhdGU6IFwiMjYgTm92XCIsIHRpdGxlOiBcIkFubnVhbCBEYXkg4oCTIFNlY29uZGFyeSAmIFNlbmlvciBTZWNvbmRhcnlcIiwgdHlwZTogXCJldmVudFwiIH0sXG4gICAgICB7IGRhdGU6IFwiMjcgTm92XCIsIHRpdGxlOiBcIkthbmFrYWRhc2EgSmF5YW50aGlcIiwgdHlwZTogXCJob2xpZGF5XCIgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbW9udGg6IFwiRGVjZW1iZXIgMjAyNlwiLFxuICAgIGV2ZW50czogW1xuICAgICAgeyBkYXRlOiBcIjA3IERlY1wiLCB0aXRsZTogXCJTYWhvZGF5YSBQcmUtRmluYWxzIOKAkyBDbGFzcyA5dGggJiAxMXRoXCIsIHR5cGU6IFwiZXhhbVwiIH0sXG4gICAgICB7IGRhdGU6IFwiMjMgRGVjXCIsIHRpdGxlOiBcIkNocmlzdG1hcyBDZWxlYnJhdGlvblwiLCB0eXBlOiBcImNlbGVicmF0aW9uXCIgfSxcbiAgICAgIHsgZGF0ZTogXCIyNCBEZWNcIiwgdGl0bGU6IFwiQ2hyaXN0bWFzIFZhY2F0aW9uXCIsIHR5cGU6IFwiaG9saWRheVwiIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG1vbnRoOiBcIkphbnVhcnkgMjAyN1wiLFxuICAgIGV2ZW50czogW1xuICAgICAgeyBkYXRlOiBcIjAxIEphblwiLCB0aXRsZTogXCJTY2hvb2wgcmVvcGVucyDigJMgUHJlLVByaW1hcnkgdG8gQ2xhc3MgMTJcIiwgdHlwZTogXCJldmVudFwiIH0sXG4gICAgICB7IGRhdGU6IFwiMDYgSmFuXCIsIHRpdGxlOiBcIlBULTMg4oCTIENsYXNzIDFzdCB0byA3dGggLyBQcmUtRmluYWxzIOKAkyBDbGFzcyA4dGhcIiwgdHlwZTogXCJleGFtXCIgfSxcbiAgICAgIHsgZGF0ZTogXCIxMyBKYW5cIiwgdGl0bGU6IFwiUFQtMyBDb25jbHVkZXNcIiwgdHlwZTogXCJleGFtXCIgfSxcbiAgICAgIHsgZGF0ZTogXCIxNCBKYW5cIiwgdGl0bGU6IFwiU2Fua3JhbnRoaVwiLCB0eXBlOiBcImhvbGlkYXlcIiB9LFxuICAgICAgeyBkYXRlOiBcIjE4IEphblwiLCB0aXRsZTogXCJQcmUtRmluYWxzIENvbmNsdWRlIOKAkyBDbGFzcyA4dGhcIiwgdHlwZTogXCJleGFtXCIgfSxcbiAgICAgIHsgZGF0ZTogXCIyMyBKYW5cIiwgdGl0bGU6IFwiQ2xhc3MgWCAmIFhJSSBGYXJld2VsbFwiLCB0eXBlOiBcImNlbGVicmF0aW9uXCIgfSxcbiAgICAgIHsgZGF0ZTogXCIyNiBKYW5cIiwgdGl0bGU6IFwiUmVwdWJsaWMgRGF5IENlbGVicmF0aW9uXCIsIHR5cGU6IFwiY2VsZWJyYXRpb25cIiB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBtb250aDogXCJGZWJydWFyeSAyMDI3XCIsXG4gICAgZXZlbnRzOiBbXG4gICAgICB7IGRhdGU6IFwiMDEgRmViXCIsIHRpdGxlOiBcIkZpbmFsIEV4YW0g4oCTIENsYXNzIDh0aCwgOXRoICYgMTF0aFwiLCB0eXBlOiBcImV4YW1cIiB9LFxuICAgICAgeyBkYXRlOiBcIjEyIEZlYlwiLCB0aXRsZTogXCJGaW5hbCBFeGFtIENvbmNsdWRlcyDigJMgQ2xhc3MgOHRoLCA5dGggJiAxMXRoXCIsIHR5cGU6IFwiZXhhbVwiIH0sXG4gICAgICB7IGRhdGU6IFwiMjAgRmViXCIsIHRpdGxlOiBcIlBUTSDigJMgQ2xhc3MgOHRoLCA5dGggJiAxMXRoXCIsIHR5cGU6IFwiZXZlbnRcIiB9LFxuICAgICAgeyBkYXRlOiBcIjIyIEZlYlwiLCB0aXRsZTogXCJOZXcgU2Vzc2lvbiDigJMgQ2xhc3MgOXRoLCAxMHRoICYgMTJ0aFwiLCB0eXBlOiBcImV2ZW50XCIgfSxcbiAgICAgIHsgZGF0ZTogXCIyNyBGZWJcIiwgdGl0bGU6IFwiU2NpZW5jZSBFeGhpYml0aW9uXCIsIHR5cGU6IFwiY2VsZWJyYXRpb25cIiB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBtb250aDogXCJNYXJjaCAyMDI3XCIsXG4gICAgZXZlbnRzOiBbXG4gICAgICB7IGRhdGU6IFwiMDYgTWFyXCIsIHRpdGxlOiBcIlNoaXZhcmF0aHJpXCIsIHR5cGU6IFwiaG9saWRheVwiIH0sXG4gICAgICB7IGRhdGU6IFwiMTAgTWFyXCIsIHRpdGxlOiBcIlJhbXphblwiLCB0eXBlOiBcImhvbGlkYXlcIiB9LFxuICAgICAgeyBkYXRlOiBcIjEyIE1hclwiLCB0aXRsZTogXCJTcmkgSmFnYWRndXJ1IFJlbnVrYWNoYXJ5YSBKYXlhbnRoaVwiLCB0eXBlOiBcImNlbGVicmF0aW9uXCIgfSxcbiAgICAgIHsgZGF0ZTogXCIxNSBNYXJcIiwgdGl0bGU6IFwiQW5udWFsIEV4YW0g4oCTIENsYXNzIDNyZCB0byA3dGhcIiwgdHlwZTogXCJleGFtXCIgfSxcbiAgICAgIHsgZGF0ZTogXCIxNyBNYXJcIiwgdGl0bGU6IFwiQW5udWFsIEV4YW0g4oCTIENsYXNzIDFzdCAmIDJuZFwiLCB0eXBlOiBcImV4YW1cIiB9LFxuICAgICAgeyBkYXRlOiBcIjI2IE1hclwiLCB0aXRsZTogXCJHb29kIEZyaWRheVwiLCB0eXBlOiBcImhvbGlkYXlcIiB9LFxuICAgICAgeyBkYXRlOiBcIjMwIE1hclwiLCB0aXRsZTogXCJQVE0gLyBCb29rIFNhbGVzIOKAkyBQcmUtUHJpbWFyeSB0byBDbGFzcyAybmRcIiwgdHlwZTogXCJldmVudFwiIH0sXG4gICAgICB7IGRhdGU6IFwiMzEgTWFyXCIsIHRpdGxlOiBcIlBUTSAvIEJvb2sgU2FsZXMg4oCTIENsYXNzIDNyZCB0byA3dGhcIiwgdHlwZTogXCJldmVudFwiIH0sXG4gICAgXSxcbiAgfSxcbl07XG5cbmNvbnN0IHR5cGVTdHlsZXM6IFJlY29yZDxFdmVudFR5cGUsIHsgYmFkZ2U6IHN0cmluZzsgaWNvbjogUmVhY3QuQ29tcG9uZW50VHlwZTx7IGNsYXNzTmFtZT86IHN0cmluZyB9PjsgbGFiZWw6IHN0cmluZyB9PiA9IHtcbiAgZXhhbTogeyBiYWRnZTogXCJiZy1zYWZmcm9uLW9yYW5nZS8xNSB0ZXh0LXNhZmZyb24tb3JhbmdlIGJvcmRlci1zYWZmcm9uLW9yYW5nZS8zMFwiLCBpY29uOiBDbGlwYm9hcmRMaXN0LCBsYWJlbDogXCJFeGFtXCIgfSxcbiAgaG9saWRheTogeyBiYWRnZTogXCJiZy1sb2dvLW1hcm9vbi8xMCB0ZXh0LWxvZ28tbWFyb29uIGJvcmRlci1sb2dvLW1hcm9vbi8zMFwiLCBpY29uOiBGbGFnLCBsYWJlbDogXCJIb2xpZGF5XCIgfSxcbiAgZXZlbnQ6IHsgYmFkZ2U6IFwiYmctaW5kaWFuLWdyZWVuLzEwIHRleHQtaW5kaWFuLWdyZWVuIGJvcmRlci1pbmRpYW4tZ3JlZW4vMzBcIiwgaWNvbjogQ2FsZW5kYXIsIGxhYmVsOiBcIkV2ZW50XCIgfSxcbiAgY2VsZWJyYXRpb246IHsgYmFkZ2U6IFwiYmctZ29sZGVuLXllbGxvdy8yMCB0ZXh0LXNjaG9vbC1icm93biBib3JkZXItZ29sZGVuLXllbGxvdy80MFwiLCBpY29uOiBQYXJ0eVBvcHBlciwgbGFiZWw6IFwiQ2VsZWJyYXRpb25cIiB9LFxuICBvcmllbnRhdGlvbjogeyBiYWRnZTogXCJiZy1sb2dvLW5hdnkvMTAgdGV4dC1sb2dvLW5hdnkgYm9yZGVyLWxvZ28tbmF2eS8zMFwiLCBpY29uOiBHcmFkdWF0aW9uQ2FwLCBsYWJlbDogXCJPcmllbnRhdGlvblwiIH0sXG59O1xuXG5jb25zdCBDYWxlbmRhckV2ZW50cyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPFBhZ2VIZXJvXG4gICAgICAgIHRpdGxlPVwiQWNhZGVtaWMgQ2FsZW5kYXJcIlxuICAgICAgICBicmVhZGNydW1icz17W1xuICAgICAgICAgIHsgbGFiZWw6IFwiQWNhZGVtaWNzXCIsIHBhdGg6IFwiL2FjYWRlbWljc1wiIH0sXG4gICAgICAgICAgeyBsYWJlbDogXCJDYWxlbmRhclwiIH0sXG4gICAgICAgIF19XG4gICAgICAvPlxuXG4gICAgICB7LyogSW50cm9kdWN0aW9uICovfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTYgYmctYmFja2dyb3VuZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgbWF4LXctNHhsIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LWJsYWNrIG1iLTRcIj5BIFllYXIgb2YgTGVhcm5pbmcgJiBDZWxlYnJhdGlvbjwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIGgtMSB3LTIwIGJnLWluZGlhbi1ncmVlbiByb3VuZGVkLWZ1bGwgbWItNlwiIC8+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWZvcmVncm91bmQvODAgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICBDYWxlbmRhciBvZiBFdmVudHMgZm9yIHRoZSBhY2FkZW1pYyBzZXNzaW9uIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1pbmRpYW4tZ3JlZW5cIj4yMDI24oCTMjc8L3NwYW4+LlxuICAgICAgICAgICAgQSBjbGVhciByb2FkbWFwIG9mIHRlYWNoaW5nIGRheXMsIGFzc2Vzc21lbnRzLCBob2xpZGF5cywgYW5kIHNpZ25hdHVyZSBldmVudHMgdG8gaGVscCBzdHVkZW50cyxcbiAgICAgICAgICAgIHBhcmVudHMsIGFuZCBzdGFmZiBwbGFuIGFuZCBwYXJ0aWNpcGF0ZSBmdWxseSBpbiBzY2hvb2wgbGlmZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7LyogSGlnaGxpZ2h0cyBncmlkICovfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTYgYmctbXV0ZWQvMzBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IG1heC13LTZ4bFwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1ibGFjayB0ZXh0LWNlbnRlciBtYi0zXCI+Q2FsZW5kYXIgSGlnaGxpZ2h0czwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIGgtMSB3LTIwIGJnLWluZGlhbi1ncmVlbiByb3VuZGVkLWZ1bGwgbWItMTJcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNlwiPlxuICAgICAgICAgICAge2hpZ2hsaWdodHMubWFwKChpdCwgaSkgPT4gKFxuICAgICAgICAgICAgICA8Q2FyZCBrZXk9e2l9IGNsYXNzTmFtZT1cImJvcmRlci1pbmRpYW4tZ3JlZW4vMjAgaG92ZXI6c2hhZG93LWxnIGhvdmVyOi10cmFuc2xhdGUteS0xIHRyYW5zaXRpb24tYWxsXCI+XG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtNlwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgcm91bmRlZC14bCBiZy1pbmRpYW4tZ3JlZW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICA8aXQuaWNvbiBjbGFzc05hbWU9XCJoLTYgdy02IHRleHQtd2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdGV4dC1ibGFjayBtYi0yXCI+e2l0LnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZm9yZWdyb3VuZC83NSBsZWFkaW5nLXJlbGF4ZWRcIj57aXQuZGVzY308L3A+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7LyogQW5udWFsIEhpZ2hsaWdodHMg4oCTIE1vbnRoLXdpc2UgQWNjb3JkaW9uIFRpbWVsaW5lICovfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTYgYmctYmFja2dyb3VuZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgbWF4LXctNXhsXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LWJsYWNrIHRleHQtY2VudGVyIG1iLTNcIj5Bbm51YWwgSGlnaGxpZ2h0czwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIGgtMSB3LTIwIGJnLWluZGlhbi1ncmVlbiByb3VuZGVkLWZ1bGwgbWItNlwiIC8+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1mb3JlZ3JvdW5kLzcwIG1iLTEwIG1heC13LTJ4bCBteC1hdXRvXCI+XG4gICAgICAgICAgICBNb250aC13aXNlIGJyZWFrZG93biBvZiBhbGwgaW1wb3J0YW50IGV2ZW50cywgZXhhbWluYXRpb25zLCBob2xpZGF5cyBhbmQgY2VsZWJyYXRpb25zIGZvciAyMDI24oCTMjcuXG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgey8qIExlZ2VuZCAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIGdhcC0yIG1iLTEwXCI+XG4gICAgICAgICAgICB7KE9iamVjdC5rZXlzKHR5cGVTdHlsZXMpIGFzIEV2ZW50VHlwZVtdKS5tYXAoKGspID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcyA9IHR5cGVTdHlsZXNba107XG4gICAgICAgICAgICAgIGNvbnN0IEljb24gPSBzLmljb247XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtrfSBjbGFzc05hbWU9e2BpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSB0ZXh0LXhzIHB4LTMgcHktMSByb3VuZGVkLWZ1bGwgYm9yZGVyICR7cy5iYWRnZX1gfT5cbiAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImgtMy41IHctMy41XCIgLz5cbiAgICAgICAgICAgICAgICAgIHtzLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPEFjY29yZGlvbiB0eXBlPVwibXVsdGlwbGVcIiBkZWZhdWx0VmFsdWU9e1tjYWxlbmRhclswXS5tb250aF19IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAge2NhbGVuZGFyLm1hcCgoZ3JvdXApID0+IChcbiAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1cbiAgICAgICAgICAgICAgICBrZXk9e2dyb3VwLm1vbnRofVxuICAgICAgICAgICAgICAgIHZhbHVlPXtncm91cC5tb250aH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWluZGlhbi1ncmVlbi8yMCByb3VuZGVkLXhsIGJnLWNhcmQgb3ZlcmZsb3ctaGlkZGVuIGRhdGEtW3N0YXRlPW9wZW5dOnNoYWRvdy1sZyB0cmFuc2l0aW9uLXNoYWRvd1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8QWNjb3JkaW9uVHJpZ2dlciBjbGFzc05hbWU9XCJweC01IHB5LTQgaG92ZXI6bm8tdW5kZXJsaW5lIGhvdmVyOmJnLWluZGlhbi1ncmVlbi81XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00IHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTIgaC0xMiByb3VuZGVkLXhsIGJnLWluZGlhbi1ncmVlbi8xMCB0ZXh0LWluZGlhbi1ncmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4LXNocmluay0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPENhbGVuZGFyRGF5cyBjbGFzc05hbWU9XCJoLTYgdy02XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgbWQ6dGV4dC14bCBmb250LWJvbGQgdGV4dC1ibGFja1wiPntncm91cC5tb250aH08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgbWQ6dGV4dC1zbSB0ZXh0LWZvcmVncm91bmQvNjBcIj57Z3JvdXAuZXZlbnRzLmxlbmd0aH0gZXZlbnR7Z3JvdXAuZXZlbnRzLmxlbmd0aCAhPT0gMSA/IFwic1wiIDogXCJcIn08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9BY2NvcmRpb25UcmlnZ2VyPlxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb25Db250ZW50IGNsYXNzTmFtZT1cInB4LTUgcGItNVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBwbC02IG1kOnBsLTggYm9yZGVyLWwtMiBib3JkZXItaW5kaWFuLWdyZWVuLzIwIHNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICAgICAgICB7Z3JvdXAuZXZlbnRzLm1hcCgoZXYsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHlsZSA9IHR5cGVTdHlsZXNbZXYudHlwZV07XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgSWNvbiA9IHN0eWxlLmljb247XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtbGVmdC1bMjlweF0gbWQ6LWxlZnQtWzM3cHhdIHRvcC0xLjUgdy00IGgtNCByb3VuZGVkLWZ1bGwgYmctaW5kaWFuLWdyZWVuIHJpbmctNCByaW5nLWJhY2tncm91bmRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgc206aXRlbXMtY2VudGVyIHNtOmp1c3RpZnktYmV0d2VlbiBnYXAtMiBiZy1tdXRlZC8zMCBob3ZlcjpiZy1tdXRlZC82MCB0cmFuc2l0aW9uLWNvbG9ycyByb3VuZGVkLWxnIHB4LTQgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBnYXAtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTkgaC05IHJvdW5kZWQtbGcgYmctYmFja2dyb3VuZCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4LXNocmluay0wIGJvcmRlciBib3JkZXItYm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImgtNC41IHctNC41IHRleHQtaW5kaWFuLWdyZWVuXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWJsYWNrIGxlYWRpbmctdGlnaHRcIj57ZXYudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZm9yZWdyb3VuZC82MCBtdC0wLjVcIj57ZXYuZGF0ZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BzZWxmLXN0YXJ0IHNtOnNlbGYtY2VudGVyIHRleHQteHMgcHgtMi41IHB5LTEgcm91bmRlZC1mdWxsIGJvcmRlciAke3N0eWxlLmJhZGdlfSB3aGl0ZXNwYWNlLW5vd3JhcGB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0eWxlLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uQ29udGVudD5cbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7LyogRG93bmxvYWQgKi99XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNiBiZy1tdXRlZC8zMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgbWF4LXctM3hsXCI+XG4gICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiYm9yZGVyLWluZGlhbi1ncmVlbi8yMCBiZy1pbmRpYW4tZ3JlZW4vNVwiPlxuICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtMTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTE2IGgtMTYgcm91bmRlZC0yeGwgYmctaW5kaWFuLWdyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG14LWF1dG8gbWItNlwiPlxuICAgICAgICAgICAgICAgIDxEb3dubG9hZCBjbGFzc05hbWU9XCJoLTggdy04IHRleHQtd2hpdGVcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIG1kOnRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWJsYWNrIG1iLTNcIj5BY2FkZW1pYyBDYWxlbmRhciBEb3dubG9hZDwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZm9yZWdyb3VuZC83NSBtYi02XCI+XG4gICAgICAgICAgICAgICAgQWNjZXNzIHRoZSBjb21wbGV0ZSBDYWxlbmRhciBvZiBFdmVudHMgMjAyNuKAkzI3IHdpdGggYWxsIGltcG9ydGFudCBkYXRlcywgZXZlbnRzIGFuZCBhc3Nlc3NtZW50cy5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBhc0NoaWxkIGNsYXNzTmFtZT1cImJnLWluZGlhbi1ncmVlbiBob3ZlcjpiZy1pbmRpYW4tZ3JlZW4vOTAgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9DT0UtMjAyNi5wZGZcIiBkb3dubG9hZD1cIkNPRS0yMDI2LnBkZlwiPlxuICAgICAgICAgICAgICAgICAgICA8RG93bmxvYWQgY2xhc3NOYW1lPVwiaC00IHctNCBtci0yXCIgLz4gRG93bmxvYWQgUERGXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBhc0NoaWxkIHZhcmlhbnQ9XCJvdXRsaW5lXCIgY2xhc3NOYW1lPVwiYm9yZGVyLWluZGlhbi1ncmVlbiB0ZXh0LWluZGlhbi1ncmVlbiBob3ZlcjpiZy1pbmRpYW4tZ3JlZW4gaG92ZXI6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9DT0UtMjAyNi5wZGZcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxFeWUgY2xhc3NOYW1lPVwiaC00IHctNCBtci0yXCIgLz4gVmlldyBQREZcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYWxlbmRhckV2ZW50cztcbiJdLCJmaWxlIjoiL2hvbWUvc2pyc2g5MTYvcHVibGljX2h0bWwvc3JjL3BhZ2VzL2FjYWRlbWljcy9DYWxlbmRhckV2ZW50cy50c3gifQ==