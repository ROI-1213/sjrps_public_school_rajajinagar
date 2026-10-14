import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/AcademicsSection.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/components/AcademicsSection.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { ChevronRight } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=5efa796b";
import foundation from "/src/assets/Foundation-Stage.jpg?import";
import preparatory from "/src/assets/Preparatory-Stage.jpg?import";
import secondary from "/src/assets/Secondary-Stage.jpg?import";
import snrSecondary from "/src/assets/snr-secondary-stage.jpg?import";
const AcademicsSection = ()=>{
    const stages = [
        {
            title: "Pre-Primary",
            image: foundation,
            description: "Nursery, LKG & UKG — play-based learning that nurtures curiosity and core skills.",
            path: "/academics/pre-primary"
        },
        {
            title: "Primary Level",
            image: preparatory,
            description: "Grades 1 to 5 — building strong literacy, numeracy and conceptual foundations.",
            path: "/academics/primary-level"
        },
        {
            title: "Secondary Stage",
            image: secondary,
            description: "Grades 6 to 10 — preparing students for board exams and future readiness.",
            path: "/academics/secondary-stage"
        },
        {
            title: "Senior Secondary Stage",
            image: snrSecondary,
            description: "Classes XI–XII — advanced streams preparing students for higher education.",
            path: "/academics/senior-secondary-stage"
        }
    ];
    return /*#__PURE__*/ _jsxDEV("section", {
        "data-lov-id": "src/components/AcademicsSection.tsx:39:4",
        "data-lov-name": "section",
        "data-component-path": "src/components/AcademicsSection.tsx",
        "data-component-line": "39",
        "data-component-file": "AcademicsSection.tsx",
        "data-component-name": "section",
        "data-component-content": "%7B%22className%22%3A%22py-14%20bg-gradient-to-b%20from-white%20to-slate-50%22%7D",
        className: "py-14 bg-gradient-to-b from-white to-slate-50",
        children: /*#__PURE__*/ _jsxDEV("div", {
            "data-lov-id": "src/components/AcademicsSection.tsx:40:6",
            "data-lov-name": "div",
            "data-component-path": "src/components/AcademicsSection.tsx",
            "data-component-line": "40",
            "data-component-file": "AcademicsSection.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/components/AcademicsSection.tsx:41:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/AcademicsSection.tsx",
                    "data-component-line": "41",
                    "data-component-file": "AcademicsSection.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22text-center%20mb-10%20max-w-3xl%20mx-auto%22%7D",
                    className: "text-center mb-10 max-w-3xl mx-auto",
                    children: [
                        /*#__PURE__*/ _jsxDEV("span", {
                            "data-lov-id": "src/components/AcademicsSection.tsx:42:10",
                            "data-lov-name": "span",
                            "data-component-path": "src/components/AcademicsSection.tsx",
                            "data-component-line": "42",
                            "data-component-file": "AcademicsSection.tsx",
                            "data-component-name": "span",
                            "data-component-content": "%7B%22text%22%3A%22Academics%22%2C%22className%22%3A%22text-xs%20font-semibold%20uppercase%20tracking-%5B0.2em%5D%20text-indian-green%22%7D",
                            className: "text-xs font-semibold uppercase tracking-[0.2em] text-indian-green",
                            children: "Academics"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/AcademicsSection.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("h2", {
                            "data-lov-id": "src/components/AcademicsSection.tsx:43:10",
                            "data-lov-name": "h2",
                            "data-component-path": "src/components/AcademicsSection.tsx",
                            "data-component-line": "43",
                            "data-component-file": "AcademicsSection.tsx",
                            "data-component-name": "h2",
                            "data-component-content": "%7B%22text%22%3A%22Our%20Academic%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20text-school-brown%20mt-2%20mb-3%20leading-tight%22%7D",
                            className: "text-3xl md:text-4xl font-bold text-school-brown mt-2 mb-3 leading-tight",
                            children: [
                                "Our Academic ",
                                /*#__PURE__*/ _jsxDEV("span", {
                                    "data-lov-id": "src/components/AcademicsSection.tsx:44:25",
                                    "data-lov-name": "span",
                                    "data-component-path": "src/components/AcademicsSection.tsx",
                                    "data-component-line": "44",
                                    "data-component-file": "AcademicsSection.tsx",
                                    "data-component-name": "span",
                                    "data-component-content": "%7B%22text%22%3A%22Stages%22%2C%22className%22%3A%22text-indian-green%22%7D",
                                    className: "text-indian-green",
                                    children: "Stages"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/AcademicsSection.tsx",
                                    lineNumber: 44,
                                    columnNumber: 26
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/components/AcademicsSection.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("p", {
                            "data-lov-id": "src/components/AcademicsSection.tsx:46:10",
                            "data-lov-name": "p",
                            "data-component-path": "src/components/AcademicsSection.tsx",
                            "data-component-line": "46",
                            "data-component-file": "AcademicsSection.tsx",
                            "data-component-name": "p",
                            "data-component-content": "%7B%22text%22%3A%22Structured%20learning%20pathways%20aligned%20with%20NEP%2C%20designed%20for%20every%20stage%20of%20a%20child's%20growth.%22%2C%22className%22%3A%22text-base%20text-elegant-light%22%7D",
                            className: "text-base text-elegant-light",
                            children: "Structured learning pathways aligned with NEP, designed for every stage of a child's growth."
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/AcademicsSection.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/components/AcademicsSection.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/components/AcademicsSection.tsx:51:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/AcademicsSection.tsx",
                    "data-component-line": "51",
                    "data-component-file": "AcademicsSection.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22grid%20grid-cols-1%20sm%3Agrid-cols-2%20lg%3Agrid-cols-4%20gap-6%22%7D",
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
                    children: stages.map((stage)=>/*#__PURE__*/ _jsxDEV(Card, {
                            "data-lov-id": "src/components/AcademicsSection.tsx:53:12",
                            "data-lov-name": "Card",
                            "data-component-path": "src/components/AcademicsSection.tsx",
                            "data-component-line": "53",
                            "data-component-file": "AcademicsSection.tsx",
                            "data-component-name": "Card",
                            "data-component-content": "%7B%22className%22%3A%22overflow-hidden%20rounded-2xl%20border-0%20shadow-%5B0_8px_25px_rgba(0%2C0%2C0%2C0.08)%5D%20hover%3Ashadow-%5B0_15px_40px_rgba(0%2C0%2C0%2C0.15)%5D%20transition-all%20duration-300%20hover%3A-translate-y-1%20flex%20flex-col%22%7D",
                            className: "overflow-hidden rounded-2xl border-0 shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 flex flex-col",
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/components/AcademicsSection.tsx:57:14",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/AcademicsSection.tsx",
                                    "data-component-line": "57",
                                    "data-component-file": "AcademicsSection.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22h-48%20overflow-hidden%22%7D",
                                    className: "h-48 overflow-hidden",
                                    children: /*#__PURE__*/ _jsxDEV("img", {
                                        "data-lov-id": "src/components/AcademicsSection.tsx:58:16",
                                        "data-lov-name": "img",
                                        "data-component-path": "src/components/AcademicsSection.tsx",
                                        "data-component-line": "58",
                                        "data-component-file": "AcademicsSection.tsx",
                                        "data-component-name": "img",
                                        "data-component-content": "%7B%22className%22%3A%22w-full%20h-full%20object-cover%20hover%3Ascale-105%20transition-transform%20duration-500%22%7D",
                                        src: stage.image,
                                        alt: stage.title,
                                        className: "w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/components/AcademicsSection.tsx",
                                        lineNumber: 58,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/AcademicsSection.tsx",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV(CardContent, {
                                    "data-lov-id": "src/components/AcademicsSection.tsx:64:14",
                                    "data-lov-name": "CardContent",
                                    "data-component-path": "src/components/AcademicsSection.tsx",
                                    "data-component-line": "64",
                                    "data-component-file": "AcademicsSection.tsx",
                                    "data-component-name": "CardContent",
                                    "data-component-content": "%7B%22className%22%3A%22p-5%20flex%20flex-col%20flex-1%22%7D",
                                    className: "p-5 flex flex-col flex-1",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("h3", {
                                            "data-lov-id": "src/components/AcademicsSection.tsx:65:16",
                                            "data-lov-name": "h3",
                                            "data-component-path": "src/components/AcademicsSection.tsx",
                                            "data-component-line": "65",
                                            "data-component-file": "AcademicsSection.tsx",
                                            "data-component-name": "h3",
                                            "data-component-content": "%7B%22className%22%3A%22text-lg%20font-bold%20text-school-brown%20mb-2%22%7D",
                                            className: "text-lg font-bold text-school-brown mb-2",
                                            children: stage.title
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/AcademicsSection.tsx",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("p", {
                                            "data-lov-id": "src/components/AcademicsSection.tsx:66:16",
                                            "data-lov-name": "p",
                                            "data-component-path": "src/components/AcademicsSection.tsx",
                                            "data-component-line": "66",
                                            "data-component-file": "AcademicsSection.tsx",
                                            "data-component-name": "p",
                                            "data-component-content": "%7B%22className%22%3A%22text-sm%20text-elegant-light%20leading-relaxed%20line-clamp-2%20mb-5%20flex-1%22%7D",
                                            className: "text-sm text-elegant-light leading-relaxed line-clamp-2 mb-5 flex-1",
                                            children: stage.description
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/AcademicsSection.tsx",
                                            lineNumber: 66,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV(Button, {
                                            "data-lov-id": "src/components/AcademicsSection.tsx:69:16",
                                            "data-lov-name": "Button",
                                            "data-component-path": "src/components/AcademicsSection.tsx",
                                            "data-component-line": "69",
                                            "data-component-file": "AcademicsSection.tsx",
                                            "data-component-name": "Button",
                                            "data-component-content": "%7B%22className%22%3A%22w-full%20bg-indian-green%20hover%3Abg-indian-green%2F90%20text-white%22%7D",
                                            asChild: true,
                                            className: "w-full bg-indian-green hover:bg-indian-green/90 text-white",
                                            children: /*#__PURE__*/ _jsxDEV(Link, {
                                                "data-lov-id": "src/components/AcademicsSection.tsx:73:18",
                                                "data-lov-name": "Link",
                                                "data-component-path": "src/components/AcademicsSection.tsx",
                                                "data-component-line": "73",
                                                "data-component-file": "AcademicsSection.tsx",
                                                "data-component-name": "Link",
                                                "data-component-content": "%7B%22text%22%3A%22View%20Details%22%7D",
                                                to: stage.path,
                                                children: [
                                                    "View Details",
                                                    /*#__PURE__*/ _jsxDEV(ChevronRight, {
                                                        "data-lov-id": "src/components/AcademicsSection.tsx:75:20",
                                                        "data-lov-name": "ChevronRight",
                                                        "data-component-path": "src/components/AcademicsSection.tsx",
                                                        "data-component-line": "75",
                                                        "data-component-file": "AcademicsSection.tsx",
                                                        "data-component-name": "ChevronRight",
                                                        "data-component-content": "%7B%22className%22%3A%22ml-1%20h-4%20w-4%22%7D",
                                                        className: "ml-1 h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/components/AcademicsSection.tsx",
                                                        lineNumber: 75,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/components/AcademicsSection.tsx",
                                                lineNumber: 73,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/AcademicsSection.tsx",
                                            lineNumber: 69,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/components/AcademicsSection.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, stage.title, true, {
                            fileName: "/home/sjrsh916/public_html/src/components/AcademicsSection.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/components/AcademicsSection.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/sjrsh916/public_html/src/components/AcademicsSection.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/components/AcademicsSection.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
};
_c = AcademicsSection;
export default AcademicsSection;
var _c;
$RefreshReg$(_c, "AcademicsSection");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/components/AcademicsSection.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/components/AcademicsSection.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQXJCekJNLE1BQU1sQixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQjlCO0tBM0VNRjtBQTZFTixlQUFlQSxpQkFBZ0IiLCJuYW1lcyI6WyJDYXJkIiwiQ2FyZENvbnRlbnQiLCJCdXR0b24iLCJDaGV2cm9uUmlnaHQiLCJMaW5rIiwiZm91bmRhdGlvbiIsInByZXBhcmF0b3J5Iiwic2Vjb25kYXJ5Iiwic25yU2Vjb25kYXJ5IiwiQWNhZGVtaWNzU2VjdGlvbiIsInN0YWdlcyIsInRpdGxlIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsInBhdGgiLCJzZWN0aW9uIiwiZGF0YS1sb3YtaWQiLCJkYXRhLWxvdi1uYW1lIiwiZGF0YS1jb21wb25lbnQtcGF0aCIsImRhdGEtY29tcG9uZW50LWxpbmUiLCJkYXRhLWNvbXBvbmVudC1maWxlIiwiZGF0YS1jb21wb25lbnQtbmFtZSIsImRhdGEtY29tcG9uZW50LWNvbnRlbnQiLCJjbGFzc05hbWUiLCJkaXYiLCJzcGFuIiwiaDIiLCJwIiwibWFwIiwic3RhZ2UiLCJpbWciLCJzcmMiLCJhbHQiLCJoMyIsImFzQ2hpbGQiLCJ0byJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJBY2FkZW1pY3NTZWN0aW9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IENoZXZyb25SaWdodCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IGZvdW5kYXRpb24gZnJvbSBcIkAvYXNzZXRzL0ZvdW5kYXRpb24tU3RhZ2UuanBnXCI7XG5pbXBvcnQgcHJlcGFyYXRvcnkgZnJvbSBcIkAvYXNzZXRzL1ByZXBhcmF0b3J5LVN0YWdlLmpwZ1wiO1xuaW1wb3J0IHNlY29uZGFyeSBmcm9tIFwiQC9hc3NldHMvU2Vjb25kYXJ5LVN0YWdlLmpwZ1wiO1xuaW1wb3J0IHNuclNlY29uZGFyeSBmcm9tIFwiQC9hc3NldHMvc25yLXNlY29uZGFyeS1zdGFnZS5qcGdcIjtcblxuY29uc3QgQWNhZGVtaWNzU2VjdGlvbiA9ICgpID0+IHtcbiAgY29uc3Qgc3RhZ2VzID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcIlByZS1QcmltYXJ5XCIsXG4gICAgICBpbWFnZTogZm91bmRhdGlvbixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIk51cnNlcnksIExLRyAmIFVLRyDigJQgcGxheS1iYXNlZCBsZWFybmluZyB0aGF0IG51cnR1cmVzIGN1cmlvc2l0eSBhbmQgY29yZSBza2lsbHMuXCIsXG4gICAgICBwYXRoOiBcIi9hY2FkZW1pY3MvcHJlLXByaW1hcnlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlByaW1hcnkgTGV2ZWxcIixcbiAgICAgIGltYWdlOiBwcmVwYXJhdG9yeSxcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkdyYWRlcyAxIHRvIDUg4oCUIGJ1aWxkaW5nIHN0cm9uZyBsaXRlcmFjeSwgbnVtZXJhY3kgYW5kIGNvbmNlcHR1YWwgZm91bmRhdGlvbnMuXCIsXG4gICAgICBwYXRoOiBcIi9hY2FkZW1pY3MvcHJpbWFyeS1sZXZlbFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiU2Vjb25kYXJ5IFN0YWdlXCIsXG4gICAgICBpbWFnZTogc2Vjb25kYXJ5LFxuICAgICAgZGVzY3JpcHRpb246IFwiR3JhZGVzIDYgdG8gMTAg4oCUIHByZXBhcmluZyBzdHVkZW50cyBmb3IgYm9hcmQgZXhhbXMgYW5kIGZ1dHVyZSByZWFkaW5lc3MuXCIsXG4gICAgICBwYXRoOiBcIi9hY2FkZW1pY3Mvc2Vjb25kYXJ5LXN0YWdlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJTZW5pb3IgU2Vjb25kYXJ5IFN0YWdlXCIsXG4gICAgICBpbWFnZTogc25yU2Vjb25kYXJ5LFxuICAgICAgZGVzY3JpcHRpb246IFwiQ2xhc3NlcyBYSeKAk1hJSSDigJQgYWR2YW5jZWQgc3RyZWFtcyBwcmVwYXJpbmcgc3R1ZGVudHMgZm9yIGhpZ2hlciBlZHVjYXRpb24uXCIsXG4gICAgICBwYXRoOiBcIi9hY2FkZW1pY3Mvc2VuaW9yLXNlY29uZGFyeS1zdGFnZVwiLFxuICAgIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNCBiZy1ncmFkaWVudC10by1iIGZyb20td2hpdGUgdG8tc2xhdGUtNTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTEwIG1heC13LTN4bCBteC1hdXRvXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yZW1dIHRleHQtaW5kaWFuLWdyZWVuXCI+QWNhZGVtaWNzPC9zcGFuPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gbXQtMiBtYi0zIGxlYWRpbmctdGlnaHRcIj5cbiAgICAgICAgICAgIE91ciBBY2FkZW1pYyA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWluZGlhbi1ncmVlblwiPlN0YWdlczwvc3Bhbj5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSB0ZXh0LWVsZWdhbnQtbGlnaHRcIj5cbiAgICAgICAgICAgIFN0cnVjdHVyZWQgbGVhcm5pbmcgcGF0aHdheXMgYWxpZ25lZCB3aXRoIE5FUCwgZGVzaWduZWQgZm9yIGV2ZXJ5IHN0YWdlIG9mIGEgY2hpbGQncyBncm93dGguXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTQgZ2FwLTZcIj5cbiAgICAgICAgICB7c3RhZ2VzLm1hcCgoc3RhZ2UpID0+IChcbiAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgIGtleT17c3RhZ2UudGl0bGV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiByb3VuZGVkLTJ4bCBib3JkZXItMCBzaGFkb3ctWzBfOHB4XzI1cHhfcmdiYSgwLDAsMCwwLjA4KV0gaG92ZXI6c2hhZG93LVswXzE1cHhfNDBweF9yZ2JhKDAsMCwwLDAuMTUpXSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgaG92ZXI6LXRyYW5zbGF0ZS15LTEgZmxleCBmbGV4LWNvbFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC00OCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9e3N0YWdlLmltYWdlfVxuICAgICAgICAgICAgICAgICAgYWx0PXtzdGFnZS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIGhvdmVyOnNjYWxlLTEwNSB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi01MDBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC01IGZsZXggZmxleC1jb2wgZmxleC0xXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIHRleHQtc2Nob29sLWJyb3duIG1iLTJcIj57c3RhZ2UudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZWxlZ2FudC1saWdodCBsZWFkaW5nLXJlbGF4ZWQgbGluZS1jbGFtcC0yIG1iLTUgZmxleC0xXCI+XG4gICAgICAgICAgICAgICAgICB7c3RhZ2UuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGFzQ2hpbGRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1pbmRpYW4tZ3JlZW4gaG92ZXI6YmctaW5kaWFuLWdyZWVuLzkwIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtzdGFnZS5wYXRofT5cbiAgICAgICAgICAgICAgICAgICAgVmlldyBEZXRhaWxzXG4gICAgICAgICAgICAgICAgICAgIDxDaGV2cm9uUmlnaHQgY2xhc3NOYW1lPVwibWwtMSBoLTQgdy00XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBY2FkZW1pY3NTZWN0aW9uO1xuIl0sImZpbGUiOiIvaG9tZS9zanJzaDkxNi9wdWJsaWNfaHRtbC9zcmMvY29tcG9uZW50cy9BY2FkZW1pY3NTZWN0aW9uLnRzeCJ9