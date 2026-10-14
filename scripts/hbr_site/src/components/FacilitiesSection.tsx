import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/FacilitiesSection.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/components/FacilitiesSection.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=5efa796b";
import { BookOpen, Library, FlaskConical, Theater, Monitor, MonitorPlay, Heart, Cpu, ChevronRight } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
import classroomImg from "/src/assets/class-room.jpg?import";
import libraryImg from "/src/assets/library.jpg?import";
import labImg from "/src/assets/lab.jpg?import";
import auditoriumImg from "/src/assets/auditorium.jpg?import";
import computerImg from "/src/assets/computer-lab.jpg?import";
import smartClassImg from "/src/assets/smart-class.jpg?import";
import yogaImg from "/src/assets/yoga.jpg?import";
import roboticsImg from "/src/assets/robotics.jpg?import";
const facilities = [
    {
        title: "Classroom",
        description: "Spacious, well-lit classrooms designed for engaging and interactive learning experiences.",
        image: classroomImg,
        icon: BookOpen,
        link: "/facilities/classroom"
    },
    {
        title: "Library",
        description: "A vast collection of books and digital resources to nurture curiosity and study.",
        image: libraryImg,
        icon: Library,
        link: "/facilities/library"
    },
    {
        title: "Laboratories",
        description: "Modern physics, chemistry and biology labs for hands-on scientific exploration.",
        image: labImg,
        icon: FlaskConical,
        link: "/facilities/laboratories"
    },
    {
        title: "Auditorium",
        description: "A state-of-the-art auditorium for events, performances and gatherings.",
        image: auditoriumImg,
        icon: Theater,
        link: "/facilities/auditorium"
    },
    {
        title: "Computer Lab",
        description: "Advanced computer lab with high-speed internet and latest software for digital learning.",
        image: computerImg,
        icon: Monitor,
        link: "/facilities/computer-lab"
    },
    {
        title: "Smart Class",
        description: "Tech-enabled smart classrooms with interactive boards for immersive teaching.",
        image: smartClassImg,
        icon: MonitorPlay,
        link: "/facilities/smart-class"
    },
    {
        title: "Yoga",
        description: "A dedicated yoga hall promoting mindfulness, fitness and overall wellbeing.",
        image: yogaImg,
        icon: Heart,
        link: "/facilities/yoga-hall"
    },
    {
        title: "Robotics",
        description: "A futuristic robotics lab encouraging innovation, coding and problem-solving.",
        image: roboticsImg,
        icon: Cpu,
        link: "/facilities/robotics-lab"
    }
];
const FacilitiesSection = ()=>{
    return /*#__PURE__*/ _jsxDEV("section", {
        "data-lov-id": "src/components/FacilitiesSection.tsx:28:4",
        "data-lov-name": "section",
        "data-component-path": "src/components/FacilitiesSection.tsx",
        "data-component-line": "28",
        "data-component-file": "FacilitiesSection.tsx",
        "data-component-name": "section",
        "data-component-content": "%7B%22className%22%3A%22py-14%20bg-gradient-to-br%20from-indian-green%2F5%20via-white%20to-indian-green%2F5%22%7D",
        className: "py-14 bg-gradient-to-br from-indian-green/5 via-white to-indian-green/5",
        children: /*#__PURE__*/ _jsxDEV("div", {
            "data-lov-id": "src/components/FacilitiesSection.tsx:29:6",
            "data-lov-name": "div",
            "data-component-path": "src/components/FacilitiesSection.tsx",
            "data-component-line": "29",
            "data-component-file": "FacilitiesSection.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/components/FacilitiesSection.tsx:30:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/FacilitiesSection.tsx",
                    "data-component-line": "30",
                    "data-component-file": "FacilitiesSection.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22text-center%20mb-10%20max-w-3xl%20mx-auto%22%7D",
                    className: "text-center mb-10 max-w-3xl mx-auto",
                    children: [
                        /*#__PURE__*/ _jsxDEV("span", {
                            "data-lov-id": "src/components/FacilitiesSection.tsx:31:10",
                            "data-lov-name": "span",
                            "data-component-path": "src/components/FacilitiesSection.tsx",
                            "data-component-line": "31",
                            "data-component-file": "FacilitiesSection.tsx",
                            "data-component-name": "span",
                            "data-component-content": "%7B%22text%22%3A%22Infrastructure%22%2C%22className%22%3A%22text-xs%20font-semibold%20uppercase%20tracking-%5B0.2em%5D%20text-indian-green%22%7D",
                            className: "text-xs font-semibold uppercase tracking-[0.2em] text-indian-green",
                            children: "Infrastructure"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/FacilitiesSection.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("h2", {
                            "data-lov-id": "src/components/FacilitiesSection.tsx:32:10",
                            "data-lov-name": "h2",
                            "data-component-path": "src/components/FacilitiesSection.tsx",
                            "data-component-line": "32",
                            "data-component-file": "FacilitiesSection.tsx",
                            "data-component-name": "h2",
                            "data-component-content": "%7B%22text%22%3A%22World-Class%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20text-school-brown%20mt-2%20mb-3%20leading-tight%22%7D",
                            className: "text-3xl md:text-4xl font-bold text-school-brown mt-2 mb-3 leading-tight",
                            children: [
                                "World-Class ",
                                /*#__PURE__*/ _jsxDEV("span", {
                                    "data-lov-id": "src/components/FacilitiesSection.tsx:33:24",
                                    "data-lov-name": "span",
                                    "data-component-path": "src/components/FacilitiesSection.tsx",
                                    "data-component-line": "33",
                                    "data-component-file": "FacilitiesSection.tsx",
                                    "data-component-name": "span",
                                    "data-component-content": "%7B%22text%22%3A%22Facilities%22%2C%22className%22%3A%22text-indian-green%22%7D",
                                    className: "text-indian-green",
                                    children: "Facilities"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/FacilitiesSection.tsx",
                                    lineNumber: 33,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/components/FacilitiesSection.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("p", {
                            "data-lov-id": "src/components/FacilitiesSection.tsx:35:10",
                            "data-lov-name": "p",
                            "data-component-path": "src/components/FacilitiesSection.tsx",
                            "data-component-line": "35",
                            "data-component-file": "FacilitiesSection.tsx",
                            "data-component-name": "p",
                            "data-component-content": "%7B%22text%22%3A%22Modern%20infrastructure%20designed%20to%20enhance%20every%20learning%20experience.%22%2C%22className%22%3A%22text-base%20text-elegant-light%22%7D",
                            className: "text-base text-elegant-light",
                            children: "Modern infrastructure designed to enhance every learning experience."
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/FacilitiesSection.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/components/FacilitiesSection.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/components/FacilitiesSection.tsx:40:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/FacilitiesSection.tsx",
                    "data-component-line": "40",
                    "data-component-file": "FacilitiesSection.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22grid%20grid-cols-1%20sm%3Agrid-cols-2%20lg%3Agrid-cols-4%20gap-5%20max-w-7xl%20mx-auto%22%7D",
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto",
                    children: facilities.map((f, i)=>{
                        const Icon = f.icon;
                        return /*#__PURE__*/ _jsxDEV(Card, {
                            "data-lov-id": "src/components/FacilitiesSection.tsx:44:14",
                            "data-lov-name": "Card",
                            "data-component-path": "src/components/FacilitiesSection.tsx",
                            "data-component-line": "44",
                            "data-component-file": "FacilitiesSection.tsx",
                            "data-component-name": "Card",
                            "data-component-content": "%7B%22className%22%3A%22group%20flex%20flex-col%20overflow-hidden%20border%20border-indian-green%2F15%20hover%3Aborder-indian-green%2F50%20hover%3Ashadow-xl%20hover%3A-translate-y-1%20transition-all%20duration-300%20bg-white%22%7D",
                            className: "group flex flex-col overflow-hidden border border-indian-green/15 hover:border-indian-green/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white",
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/components/FacilitiesSection.tsx:48:16",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/FacilitiesSection.tsx",
                                    "data-component-line": "48",
                                    "data-component-file": "FacilitiesSection.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22relative%20h-44%20overflow-hidden%22%7D",
                                    className: "relative h-44 overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("img", {
                                            "data-lov-id": "src/components/FacilitiesSection.tsx:49:18",
                                            "data-lov-name": "img",
                                            "data-component-path": "src/components/FacilitiesSection.tsx",
                                            "data-component-line": "49",
                                            "data-component-file": "FacilitiesSection.tsx",
                                            "data-component-name": "img",
                                            "data-component-content": "%7B%22className%22%3A%22w-full%20h-full%20object-cover%20group-hover%3Ascale-110%20transition-transform%20duration-500%22%7D",
                                            src: f.image,
                                            alt: f.title,
                                            className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/FacilitiesSection.tsx",
                                            lineNumber: 49,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/components/FacilitiesSection.tsx:54:18",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/components/FacilitiesSection.tsx",
                                            "data-component-line": "54",
                                            "data-component-file": "FacilitiesSection.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22absolute%20inset-0%20bg-gradient-to-t%20from-black%2F50%20via-transparent%20to-transparent%22%7D",
                                            className: "absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/FacilitiesSection.tsx",
                                            lineNumber: 54,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/components/FacilitiesSection.tsx:55:18",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/components/FacilitiesSection.tsx",
                                            "data-component-line": "55",
                                            "data-component-file": "FacilitiesSection.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22absolute%20top-3%20right-3%20bg-indian-green%20w-10%20h-10%20rounded-full%20flex%20items-center%20justify-center%20shadow-md%22%7D",
                                            className: "absolute top-3 right-3 bg-indian-green w-10 h-10 rounded-full flex items-center justify-center shadow-md",
                                            children: /*#__PURE__*/ _jsxDEV(Icon, {
                                                "data-lov-id": "src/components/FacilitiesSection.tsx:56:20",
                                                "data-lov-name": "Icon",
                                                "data-component-path": "src/components/FacilitiesSection.tsx",
                                                "data-component-line": "56",
                                                "data-component-file": "FacilitiesSection.tsx",
                                                "data-component-name": "Icon",
                                                "data-component-content": "%7B%22className%22%3A%22h-5%20w-5%20text-white%22%7D",
                                                className: "h-5 w-5 text-white"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/components/FacilitiesSection.tsx",
                                                lineNumber: 56,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/FacilitiesSection.tsx",
                                            lineNumber: 55,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/components/FacilitiesSection.tsx",
                                    lineNumber: 48,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ _jsxDEV(CardContent, {
                                    "data-lov-id": "src/components/FacilitiesSection.tsx:59:16",
                                    "data-lov-name": "CardContent",
                                    "data-component-path": "src/components/FacilitiesSection.tsx",
                                    "data-component-line": "59",
                                    "data-component-file": "FacilitiesSection.tsx",
                                    "data-component-name": "CardContent",
                                    "data-component-content": "%7B%22className%22%3A%22p-4%20flex%20flex-col%20flex-1%22%7D",
                                    className: "p-4 flex flex-col flex-1",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("h3", {
                                            "data-lov-id": "src/components/FacilitiesSection.tsx:60:18",
                                            "data-lov-name": "h3",
                                            "data-component-path": "src/components/FacilitiesSection.tsx",
                                            "data-component-line": "60",
                                            "data-component-file": "FacilitiesSection.tsx",
                                            "data-component-name": "h3",
                                            "data-component-content": "%7B%22className%22%3A%22text-base%20font-bold%20text-school-brown%20mb-1.5%20group-hover%3Atext-indian-green%20transition-colors%22%7D",
                                            className: "text-base font-bold text-school-brown mb-1.5 group-hover:text-indian-green transition-colors",
                                            children: f.title
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/FacilitiesSection.tsx",
                                            lineNumber: 60,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("p", {
                                            "data-lov-id": "src/components/FacilitiesSection.tsx:63:18",
                                            "data-lov-name": "p",
                                            "data-component-path": "src/components/FacilitiesSection.tsx",
                                            "data-component-line": "63",
                                            "data-component-file": "FacilitiesSection.tsx",
                                            "data-component-name": "p",
                                            "data-component-content": "%7B%22className%22%3A%22text-elegant-light%20text-sm%20leading-relaxed%20line-clamp-2%20mb-4%20flex-1%22%7D",
                                            className: "text-elegant-light text-sm leading-relaxed line-clamp-2 mb-4 flex-1",
                                            children: f.description
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/FacilitiesSection.tsx",
                                            lineNumber: 63,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV(Button, {
                                            "data-lov-id": "src/components/FacilitiesSection.tsx:66:18",
                                            "data-lov-name": "Button",
                                            "data-component-path": "src/components/FacilitiesSection.tsx",
                                            "data-component-line": "66",
                                            "data-component-file": "FacilitiesSection.tsx",
                                            "data-component-name": "Button",
                                            "data-component-content": "%7B%22className%22%3A%22bg-indian-green%20hover%3Abg-indian-green%2F90%20text-white%20w-full%22%7D",
                                            asChild: true,
                                            size: "sm",
                                            className: "bg-indian-green hover:bg-indian-green/90 text-white w-full",
                                            children: /*#__PURE__*/ _jsxDEV(Link, {
                                                "data-lov-id": "src/components/FacilitiesSection.tsx:71:20",
                                                "data-lov-name": "Link",
                                                "data-component-path": "src/components/FacilitiesSection.tsx",
                                                "data-component-line": "71",
                                                "data-component-file": "FacilitiesSection.tsx",
                                                "data-component-name": "Link",
                                                "data-component-content": "%7B%22text%22%3A%22Learn%20More%22%7D",
                                                to: f.link,
                                                children: [
                                                    "Learn More",
                                                    /*#__PURE__*/ _jsxDEV(ChevronRight, {
                                                        "data-lov-id": "src/components/FacilitiesSection.tsx:73:22",
                                                        "data-lov-name": "ChevronRight",
                                                        "data-component-path": "src/components/FacilitiesSection.tsx",
                                                        "data-component-line": "73",
                                                        "data-component-file": "FacilitiesSection.tsx",
                                                        "data-component-name": "ChevronRight",
                                                        "data-component-content": "%7B%22className%22%3A%22ml-1%20h-4%20w-4%22%7D",
                                                        className: "ml-1 h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/components/FacilitiesSection.tsx",
                                                        lineNumber: 73,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/components/FacilitiesSection.tsx",
                                                lineNumber: 71,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/FacilitiesSection.tsx",
                                            lineNumber: 66,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/components/FacilitiesSection.tsx",
                                    lineNumber: 59,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "/home/sjrsh916/public_html/src/components/FacilitiesSection.tsx",
                            lineNumber: 44,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/components/FacilitiesSection.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/sjrsh916/public_html/src/components/FacilitiesSection.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/components/FacilitiesSection.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
};
_c = FacilitiesSection;
export default FacilitiesSection;
var _c;
$RefreshReg$(_c, "FacilitiesSection");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/components/FacilitiesSection.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/components/FacilitiesSection.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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d0RBQUFDLHVCQUFBO3dEQUFBQyx1QkFBQTt3REFBQUMsdUJBQUE7d0RBQUFDLDBCQUFBO3dEQUFFQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBNUJ6Qk87Ozs7O29CQWtDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLVjtLQTFETWhCO0FBNEROLGVBQWVBLGtCQUFpQiIsIm5hbWVzIjpbIkNhcmQiLCJDYXJkQ29udGVudCIsIkJ1dHRvbiIsIkxpbmsiLCJCb29rT3BlbiIsIkxpYnJhcnkiLCJGbGFza0NvbmljYWwiLCJUaGVhdGVyIiwiTW9uaXRvciIsIk1vbml0b3JQbGF5IiwiSGVhcnQiLCJDcHUiLCJDaGV2cm9uUmlnaHQiLCJjbGFzc3Jvb21JbWciLCJsaWJyYXJ5SW1nIiwibGFiSW1nIiwiYXVkaXRvcml1bUltZyIsImNvbXB1dGVySW1nIiwic21hcnRDbGFzc0ltZyIsInlvZ2FJbWciLCJyb2JvdGljc0ltZyIsImZhY2lsaXRpZXMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJpY29uIiwibGluayIsIkZhY2lsaXRpZXNTZWN0aW9uIiwic2VjdGlvbiIsImRhdGEtbG92LWlkIiwiZGF0YS1sb3YtbmFtZSIsImRhdGEtY29tcG9uZW50LXBhdGgiLCJkYXRhLWNvbXBvbmVudC1saW5lIiwiZGF0YS1jb21wb25lbnQtZmlsZSIsImRhdGEtY29tcG9uZW50LW5hbWUiLCJkYXRhLWNvbXBvbmVudC1jb250ZW50IiwiY2xhc3NOYW1lIiwiZGl2Iiwic3BhbiIsImgyIiwicCIsIm1hcCIsImYiLCJpIiwiSWNvbiIsImltZyIsInNyYyIsImFsdCIsImgzIiwiYXNDaGlsZCIsInNpemUiLCJ0byJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJGYWNpbGl0aWVzU2VjdGlvbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IEJvb2tPcGVuLCBMaWJyYXJ5LCBGbGFza0NvbmljYWwsIFRoZWF0ZXIsIE1vbml0b3IsIE1vbml0b3JQbGF5LCBIZWFydCwgQ3B1LCBDaGV2cm9uUmlnaHQgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5cbmltcG9ydCBjbGFzc3Jvb21JbWcgZnJvbSBcIkAvYXNzZXRzL2NsYXNzLXJvb20uanBnXCI7XG5pbXBvcnQgbGlicmFyeUltZyBmcm9tIFwiQC9hc3NldHMvbGlicmFyeS5qcGdcIjtcbmltcG9ydCBsYWJJbWcgZnJvbSBcIkAvYXNzZXRzL2xhYi5qcGdcIjtcbmltcG9ydCBhdWRpdG9yaXVtSW1nIGZyb20gXCJAL2Fzc2V0cy9hdWRpdG9yaXVtLmpwZ1wiO1xuaW1wb3J0IGNvbXB1dGVySW1nIGZyb20gXCJAL2Fzc2V0cy9jb21wdXRlci1sYWIuanBnXCI7XG5pbXBvcnQgc21hcnRDbGFzc0ltZyBmcm9tIFwiQC9hc3NldHMvc21hcnQtY2xhc3MuanBnXCI7XG5pbXBvcnQgeW9nYUltZyBmcm9tIFwiQC9hc3NldHMveW9nYS5qcGdcIjtcbmltcG9ydCByb2JvdGljc0ltZyBmcm9tIFwiQC9hc3NldHMvcm9ib3RpY3MuanBnXCI7XG5cbmNvbnN0IGZhY2lsaXRpZXMgPSBbXG4gIHsgdGl0bGU6IFwiQ2xhc3Nyb29tXCIsIGRlc2NyaXB0aW9uOiBcIlNwYWNpb3VzLCB3ZWxsLWxpdCBjbGFzc3Jvb21zIGRlc2lnbmVkIGZvciBlbmdhZ2luZyBhbmQgaW50ZXJhY3RpdmUgbGVhcm5pbmcgZXhwZXJpZW5jZXMuXCIsIGltYWdlOiBjbGFzc3Jvb21JbWcsIGljb246IEJvb2tPcGVuLCBsaW5rOiBcIi9mYWNpbGl0aWVzL2NsYXNzcm9vbVwiIH0sXG4gIHsgdGl0bGU6IFwiTGlicmFyeVwiLCBkZXNjcmlwdGlvbjogXCJBIHZhc3QgY29sbGVjdGlvbiBvZiBib29rcyBhbmQgZGlnaXRhbCByZXNvdXJjZXMgdG8gbnVydHVyZSBjdXJpb3NpdHkgYW5kIHN0dWR5LlwiLCBpbWFnZTogbGlicmFyeUltZywgaWNvbjogTGlicmFyeSwgbGluazogXCIvZmFjaWxpdGllcy9saWJyYXJ5XCIgfSxcbiAgeyB0aXRsZTogXCJMYWJvcmF0b3JpZXNcIiwgZGVzY3JpcHRpb246IFwiTW9kZXJuIHBoeXNpY3MsIGNoZW1pc3RyeSBhbmQgYmlvbG9neSBsYWJzIGZvciBoYW5kcy1vbiBzY2llbnRpZmljIGV4cGxvcmF0aW9uLlwiLCBpbWFnZTogbGFiSW1nLCBpY29uOiBGbGFza0NvbmljYWwsIGxpbms6IFwiL2ZhY2lsaXRpZXMvbGFib3JhdG9yaWVzXCIgfSxcbiAgeyB0aXRsZTogXCJBdWRpdG9yaXVtXCIsIGRlc2NyaXB0aW9uOiBcIkEgc3RhdGUtb2YtdGhlLWFydCBhdWRpdG9yaXVtIGZvciBldmVudHMsIHBlcmZvcm1hbmNlcyBhbmQgZ2F0aGVyaW5ncy5cIiwgaW1hZ2U6IGF1ZGl0b3JpdW1JbWcsIGljb246IFRoZWF0ZXIsIGxpbms6IFwiL2ZhY2lsaXRpZXMvYXVkaXRvcml1bVwiIH0sXG4gIHsgdGl0bGU6IFwiQ29tcHV0ZXIgTGFiXCIsIGRlc2NyaXB0aW9uOiBcIkFkdmFuY2VkIGNvbXB1dGVyIGxhYiB3aXRoIGhpZ2gtc3BlZWQgaW50ZXJuZXQgYW5kIGxhdGVzdCBzb2Z0d2FyZSBmb3IgZGlnaXRhbCBsZWFybmluZy5cIiwgaW1hZ2U6IGNvbXB1dGVySW1nLCBpY29uOiBNb25pdG9yLCBsaW5rOiBcIi9mYWNpbGl0aWVzL2NvbXB1dGVyLWxhYlwiIH0sXG4gIHsgdGl0bGU6IFwiU21hcnQgQ2xhc3NcIiwgZGVzY3JpcHRpb246IFwiVGVjaC1lbmFibGVkIHNtYXJ0IGNsYXNzcm9vbXMgd2l0aCBpbnRlcmFjdGl2ZSBib2FyZHMgZm9yIGltbWVyc2l2ZSB0ZWFjaGluZy5cIiwgaW1hZ2U6IHNtYXJ0Q2xhc3NJbWcsIGljb246IE1vbml0b3JQbGF5LCBsaW5rOiBcIi9mYWNpbGl0aWVzL3NtYXJ0LWNsYXNzXCIgfSxcbiAgeyB0aXRsZTogXCJZb2dhXCIsIGRlc2NyaXB0aW9uOiBcIkEgZGVkaWNhdGVkIHlvZ2EgaGFsbCBwcm9tb3RpbmcgbWluZGZ1bG5lc3MsIGZpdG5lc3MgYW5kIG92ZXJhbGwgd2VsbGJlaW5nLlwiLCBpbWFnZTogeW9nYUltZywgaWNvbjogSGVhcnQsIGxpbms6IFwiL2ZhY2lsaXRpZXMveW9nYS1oYWxsXCIgfSxcbiAgeyB0aXRsZTogXCJSb2JvdGljc1wiLCBkZXNjcmlwdGlvbjogXCJBIGZ1dHVyaXN0aWMgcm9ib3RpY3MgbGFiIGVuY291cmFnaW5nIGlubm92YXRpb24sIGNvZGluZyBhbmQgcHJvYmxlbS1zb2x2aW5nLlwiLCBpbWFnZTogcm9ib3RpY3NJbWcsIGljb246IENwdSwgbGluazogXCIvZmFjaWxpdGllcy9yb2JvdGljcy1sYWJcIiB9LFxuXTtcblxuY29uc3QgRmFjaWxpdGllc1NlY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTQgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1pbmRpYW4tZ3JlZW4vNSB2aWEtd2hpdGUgdG8taW5kaWFuLWdyZWVuLzVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTEwIG1heC13LTN4bCBteC1hdXRvXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yZW1dIHRleHQtaW5kaWFuLWdyZWVuXCI+SW5mcmFzdHJ1Y3R1cmU8L3NwYW4+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LXNjaG9vbC1icm93biBtdC0yIG1iLTMgbGVhZGluZy10aWdodFwiPlxuICAgICAgICAgICAgV29ybGQtQ2xhc3MgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1pbmRpYW4tZ3JlZW5cIj5GYWNpbGl0aWVzPC9zcGFuPlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHRleHQtZWxlZ2FudC1saWdodFwiPlxuICAgICAgICAgICAgTW9kZXJuIGluZnJhc3RydWN0dXJlIGRlc2lnbmVkIHRvIGVuaGFuY2UgZXZlcnkgbGVhcm5pbmcgZXhwZXJpZW5jZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNCBnYXAtNSBtYXgtdy03eGwgbXgtYXV0b1wiPlxuICAgICAgICAgIHtmYWNpbGl0aWVzLm1hcCgoZiwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgSWNvbiA9IGYuaWNvbjtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIGZsZXggZmxleC1jb2wgb3ZlcmZsb3ctaGlkZGVuIGJvcmRlciBib3JkZXItaW5kaWFuLWdyZWVuLzE1IGhvdmVyOmJvcmRlci1pbmRpYW4tZ3JlZW4vNTAgaG92ZXI6c2hhZG93LXhsIGhvdmVyOi10cmFuc2xhdGUteS0xIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBiZy13aGl0ZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtNDQgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz17Zi5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtmLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciBncm91cC1ob3ZlcjpzY2FsZS0xMTAgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tNTAwXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tdCBmcm9tLWJsYWNrLzUwIHZpYS10cmFuc3BhcmVudCB0by10cmFuc3BhcmVudFwiIC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0zIHJpZ2h0LTMgYmctaW5kaWFuLWdyZWVuIHctMTAgaC0xMCByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc2hhZG93LW1kXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImgtNSB3LTUgdGV4dC13aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC00IGZsZXggZmxleC1jb2wgZmxleC0xXCI+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtYm9sZCB0ZXh0LXNjaG9vbC1icm93biBtYi0xLjUgZ3JvdXAtaG92ZXI6dGV4dC1pbmRpYW4tZ3JlZW4gdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICAgICAgICAgICAge2YudGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1lbGVnYW50LWxpZ2h0IHRleHQtc20gbGVhZGluZy1yZWxheGVkIGxpbmUtY2xhbXAtMiBtYi00IGZsZXgtMVwiPlxuICAgICAgICAgICAgICAgICAgICB7Zi5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgYXNDaGlsZFxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1pbmRpYW4tZ3JlZW4gaG92ZXI6YmctaW5kaWFuLWdyZWVuLzkwIHRleHQtd2hpdGUgdy1mdWxsXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2YubGlua30+XG4gICAgICAgICAgICAgICAgICAgICAgTGVhcm4gTW9yZVxuICAgICAgICAgICAgICAgICAgICAgIDxDaGV2cm9uUmlnaHQgY2xhc3NOYW1lPVwibWwtMSBoLTQgdy00XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGYWNpbGl0aWVzU2VjdGlvbjtcbiJdLCJmaWxlIjoiL2hvbWUvc2pyc2g5MTYvcHVibGljX2h0bWwvc3JjL2NvbXBvbmVudHMvRmFjaWxpdGllc1NlY3Rpb24udHN4In0=