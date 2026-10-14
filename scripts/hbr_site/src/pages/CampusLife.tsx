import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/CampusLife.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/pages/CampusLife.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import Layout from "/src/components/Layout.tsx";
import PageBanner from "/src/components/PageBanner.tsx";
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { Trophy, Users, BookOpen, Building } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=5efa796b";
import playgroundActivities from "/src/assets/playground-activities.jpg?import";
const CampusLife = ()=>{
    const sections = [
        {
            title: "Sports & Recreation",
            description: "Wide range of sports and recreational activities",
            link: "/campus/sports",
            icon: Trophy,
            color: "bg-blue-50"
        },
        {
            title: "Clubs & Activities",
            description: "Student clubs and extracurricular activities",
            link: "/campus/clubs",
            icon: Users,
            color: "bg-green-50"
        },
        {
            title: "Library",
            description: "Modern library with extensive resources",
            link: "/campus/library",
            icon: BookOpen,
            color: "bg-purple-50"
        },
        {
            title: "Facilities",
            description: "State-of-the-art campus facilities",
            link: "/campus/facilities",
            icon: Building,
            color: "bg-amber-50"
        }
    ];
    return /*#__PURE__*/ _jsxDEV(Layout, {
        "data-lov-id": "src/pages/CampusLife.tsx:43:4",
        "data-lov-name": "Layout",
        "data-component-path": "src/pages/CampusLife.tsx",
        "data-component-line": "43",
        "data-component-file": "CampusLife.tsx",
        "data-component-name": "Layout",
        "data-component-content": "%7B%7D",
        children: /*#__PURE__*/ _jsxDEV("div", {
            "data-lov-id": "src/pages/CampusLife.tsx:44:6",
            "data-lov-name": "div",
            "data-component-path": "src/pages/CampusLife.tsx",
            "data-component-line": "44",
            "data-component-file": "CampusLife.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22min-h-screen%20bg-background%22%7D",
            className: "min-h-screen bg-background",
            children: [
                /*#__PURE__*/ _jsxDEV(PageBanner, {
                    "data-lov-id": "src/pages/CampusLife.tsx:45:8",
                    "data-lov-name": "PageBanner",
                    "data-component-path": "src/pages/CampusLife.tsx",
                    "data-component-line": "45",
                    "data-component-file": "CampusLife.tsx",
                    "data-component-name": "PageBanner",
                    "data-component-content": "%7B%7D",
                    title: "Campus Life",
                    subtitle: "Vibrant campus life with diverse opportunities for growth",
                    backgroundImage: playgroundActivities
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/CampusLife.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("section", {
                    "data-lov-id": "src/pages/CampusLife.tsx:51:8",
                    "data-lov-name": "section",
                    "data-component-path": "src/pages/CampusLife.tsx",
                    "data-component-line": "51",
                    "data-component-file": "CampusLife.tsx",
                    "data-component-name": "section",
                    "data-component-content": "%7B%22className%22%3A%22py-16%22%7D",
                    className: "py-16",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/CampusLife.tsx:52:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/CampusLife.tsx",
                        "data-component-line": "52",
                        "data-component-file": "CampusLife.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                        className: "container mx-auto px-4",
                        children: /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/CampusLife.tsx:53:12",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/CampusLife.tsx",
                            "data-component-line": "53",
                            "data-component-file": "CampusLife.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-2%20gap-8%22%7D",
                            className: "grid md:grid-cols-2 gap-8",
                            children: sections.map((section, index)=>/*#__PURE__*/ _jsxDEV(Card, {
                                    "data-lov-id": "src/pages/CampusLife.tsx:55:16",
                                    "data-lov-name": "Card",
                                    "data-component-path": "src/pages/CampusLife.tsx",
                                    "data-component-line": "55",
                                    "data-component-file": "CampusLife.tsx",
                                    "data-component-name": "Card",
                                    "data-component-content": "%7B%7D",
                                    className: `${section.color} hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in`,
                                    children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                        "data-lov-id": "src/pages/CampusLife.tsx:56:18",
                                        "data-lov-name": "CardContent",
                                        "data-component-path": "src/pages/CampusLife.tsx",
                                        "data-component-line": "56",
                                        "data-component-file": "CampusLife.tsx",
                                        "data-component-name": "CardContent",
                                        "data-component-content": "%7B%22className%22%3A%22p-8%20text-center%22%7D",
                                        className: "p-8 text-center",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/CampusLife.tsx:57:20",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/CampusLife.tsx",
                                                "data-component-line": "57",
                                                "data-component-file": "CampusLife.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22bg-school-gold%20w-16%20h-16%20rounded-full%20flex%20items-center%20justify-center%20mx-auto%20mb-6%22%7D",
                                                className: "bg-school-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6",
                                                children: /*#__PURE__*/ _jsxDEV(section.icon, {
                                                    "data-lov-id": "src/pages/CampusLife.tsx:58:22",
                                                    "data-lov-name": "section.icon",
                                                    "data-component-path": "src/pages/CampusLife.tsx",
                                                    "data-component-line": "58",
                                                    "data-component-file": "CampusLife.tsx",
                                                    "data-component-name": "section.icon",
                                                    "data-component-content": "%7B%22className%22%3A%22h-8%20w-8%20text-white%22%7D",
                                                    className: "h-8 w-8 text-white"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/CampusLife.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/CampusLife.tsx",
                                                lineNumber: 57,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("h3", {
                                                "data-lov-id": "src/pages/CampusLife.tsx:60:20",
                                                "data-lov-name": "h3",
                                                "data-component-path": "src/pages/CampusLife.tsx",
                                                "data-component-line": "60",
                                                "data-component-file": "CampusLife.tsx",
                                                "data-component-name": "h3",
                                                "data-component-content": "%7B%22className%22%3A%22text-2xl%20font-bold%20text-school-brown%20mb-4%22%7D",
                                                className: "text-2xl font-bold text-school-brown mb-4",
                                                children: section.title
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/CampusLife.tsx",
                                                lineNumber: 60,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("p", {
                                                "data-lov-id": "src/pages/CampusLife.tsx:61:20",
                                                "data-lov-name": "p",
                                                "data-component-path": "src/pages/CampusLife.tsx",
                                                "data-component-line": "61",
                                                "data-component-file": "CampusLife.tsx",
                                                "data-component-name": "p",
                                                "data-component-content": "%7B%22className%22%3A%22text-elegant-light%20mb-6%20leading-relaxed%22%7D",
                                                className: "text-elegant-light mb-6 leading-relaxed",
                                                children: section.description
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/CampusLife.tsx",
                                                lineNumber: 61,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV(Link, {
                                                "data-lov-id": "src/pages/CampusLife.tsx:62:20",
                                                "data-lov-name": "Link",
                                                "data-component-path": "src/pages/CampusLife.tsx",
                                                "data-component-line": "62",
                                                "data-component-file": "CampusLife.tsx",
                                                "data-component-name": "Link",
                                                "data-component-content": "%7B%7D",
                                                to: section.link,
                                                children: /*#__PURE__*/ _jsxDEV(Button, {
                                                    "data-lov-id": "src/pages/CampusLife.tsx:63:22",
                                                    "data-lov-name": "Button",
                                                    "data-component-path": "src/pages/CampusLife.tsx",
                                                    "data-component-line": "63",
                                                    "data-component-file": "CampusLife.tsx",
                                                    "data-component-name": "Button",
                                                    "data-component-content": "%7B%22text%22%3A%22Explore%22%2C%22className%22%3A%22bg-school-brown%20hover%3Abg-school-gold%20text-white%22%7D",
                                                    className: "bg-school-brown hover:bg-school-gold text-white",
                                                    children: "Explore"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/CampusLife.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/CampusLife.tsx",
                                                lineNumber: 62,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/CampusLife.tsx",
                                        lineNumber: 56,
                                        columnNumber: 19
                                    }, this)
                                }, section.title, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/CampusLife.tsx",
                                    lineNumber: 55,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/CampusLife.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/CampusLife.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/CampusLife.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/sjrsh916/public_html/src/pages/CampusLife.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/pages/CampusLife.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
};
_c = CampusLife;
export default CampusLife;
var _c;
$RefreshReg$(_c, "CampusLife");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/pages/CampusLife.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/pages/CampusLife.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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QUFDLDBCQUFBO29EQUFFRSxXQUFVOzs7Ozs7Ozs7OzswREFFMUIsUUFBQ007Z0RBQUNkLGVBQUE7Z0RBQUFDLGlCQUFBO2dEQUFBQyx1QkFBQTtnREFBQUMsdUJBQUE7Z0RBQUFDLHVCQUFBO2dEQUFBQyx1QkFBQTtnREFBQUMsMEJBQUE7Z0RBQUVFLFdBQVU7MERBQTZDRyxRQUFRaEIsS0FBSzs7Ozs7OzBEQUN4RSxRQUFDb0I7Z0RBQUFmLGVBQUE7Z0RBQUFDLGlCQUFBO2dEQUFBQyx1QkFBQTtnREFBQUMsdUJBQUE7Z0RBQUFDLHVCQUFBO2dEQUFBQyx1QkFBQTtnREFBQUMsMEJBQUE7Z0RBQUVFLFdBQVU7MERBQTJDRyxRQUFRZixXQUFXOzs7Ozs7MERBQzNFLFFBQUNMO2dEQUFHUyxlQUFBO2dEQUFBQyxpQkFBQTtnREFBQUMsdUJBQUE7Z0RBQUFDLHVCQUFBO2dEQUFBQyx1QkFBQTtnREFBQUMsdUJBQUE7Z0RBQUFDLDBCQUFBO2dEQUFFVSxJQUFJTCxRQUFRZCxJQUFJOzBEQUNwQixzQkFBQ1g7b0RBQUtjLGVBQUE7b0RBQUFDLGlCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsdUJBQUE7b0RBQUFDLHVCQUFBO29EQUFBQyx1QkFBQTtvREFBQUMsMEJBQUE7b0RBQUVFLFdBQVU7OERBQWlEOzs7Ozs7Ozs7Ozs7Ozs7OzttQ0FSOURHLFFBQVFoQixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJ4QztLQWxFTUY7QUFvRU4sZUFBZUEsV0FBVSIsIm5hbWVzIjpbIkxheW91dCIsIlBhZ2VCYW5uZXIiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJCdXR0b24iLCJUcm9waHkiLCJVc2VycyIsIkJvb2tPcGVuIiwiQnVpbGRpbmciLCJMaW5rIiwicGxheWdyb3VuZEFjdGl2aXRpZXMiLCJDYW1wdXNMaWZlIiwic2VjdGlvbnMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibGluayIsImljb24iLCJjb2xvciIsImRhdGEtbG92LWlkIiwiZGF0YS1sb3YtbmFtZSIsImRhdGEtY29tcG9uZW50LXBhdGgiLCJkYXRhLWNvbXBvbmVudC1saW5lIiwiZGF0YS1jb21wb25lbnQtZmlsZSIsImRhdGEtY29tcG9uZW50LW5hbWUiLCJkYXRhLWNvbXBvbmVudC1jb250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwic3VidGl0bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJzZWN0aW9uIiwibWFwIiwiaW5kZXgiLCJoMyIsInAiLCJ0byJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJDYW1wdXNMaWZlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBQYWdlQmFubmVyIGZyb20gXCJAL2NvbXBvbmVudHMvUGFnZUJhbm5lclwiO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBUcm9waHksIFVzZXJzLCBCb29rT3BlbiwgQnVpbGRpbmcgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBwbGF5Z3JvdW5kQWN0aXZpdGllcyBmcm9tIFwiQC9hc3NldHMvcGxheWdyb3VuZC1hY3Rpdml0aWVzLmpwZ1wiO1xuXG5jb25zdCBDYW1wdXNMaWZlID0gKCkgPT4ge1xuICBjb25zdCBzZWN0aW9ucyA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogXCJTcG9ydHMgJiBSZWNyZWF0aW9uXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJXaWRlIHJhbmdlIG9mIHNwb3J0cyBhbmQgcmVjcmVhdGlvbmFsIGFjdGl2aXRpZXNcIixcbiAgICAgIGxpbms6IFwiL2NhbXB1cy9zcG9ydHNcIixcbiAgICAgIGljb246IFRyb3BoeSxcbiAgICAgIGNvbG9yOiBcImJnLWJsdWUtNTBcIlxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiQ2x1YnMgJiBBY3Rpdml0aWVzXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJTdHVkZW50IGNsdWJzIGFuZCBleHRyYWN1cnJpY3VsYXIgYWN0aXZpdGllc1wiLFxuICAgICAgbGluazogXCIvY2FtcHVzL2NsdWJzXCIsXG4gICAgICBpY29uOiBVc2VycyxcbiAgICAgIGNvbG9yOiBcImJnLWdyZWVuLTUwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkxpYnJhcnlcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIk1vZGVybiBsaWJyYXJ5IHdpdGggZXh0ZW5zaXZlIHJlc291cmNlc1wiLFxuICAgICAgbGluazogXCIvY2FtcHVzL2xpYnJhcnlcIixcbiAgICAgIGljb246IEJvb2tPcGVuLFxuICAgICAgY29sb3I6IFwiYmctcHVycGxlLTUwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkZhY2lsaXRpZXNcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlN0YXRlLW9mLXRoZS1hcnQgY2FtcHVzIGZhY2lsaXRpZXNcIixcbiAgICAgIGxpbms6IFwiL2NhbXB1cy9mYWNpbGl0aWVzXCIsXG4gICAgICBpY29uOiBCdWlsZGluZyxcbiAgICAgIGNvbG9yOiBcImJnLWFtYmVyLTUwXCJcbiAgICB9XG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctYmFja2dyb3VuZFwiPlxuICAgICAgICA8UGFnZUJhbm5lclxuICAgICAgICAgIHRpdGxlPVwiQ2FtcHVzIExpZmVcIlxuICAgICAgICAgIHN1YnRpdGxlPVwiVmlicmFudCBjYW1wdXMgbGlmZSB3aXRoIGRpdmVyc2Ugb3Bwb3J0dW5pdGllcyBmb3IgZ3Jvd3RoXCJcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U9e3BsYXlncm91bmRBY3Rpdml0aWVzfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTE2XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgZ2FwLThcIj5cbiAgICAgICAgICAgICAge3NlY3Rpb25zLm1hcCgoc2VjdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8Q2FyZCBrZXk9e3NlY3Rpb24udGl0bGV9IGNsYXNzTmFtZT17YCR7c2VjdGlvbi5jb2xvcn0gaG92ZXI6c2hhZG93LXhsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBob3Zlci1zY2FsZSBhbmltYXRlLWZhZGUtaW5gfT5cbiAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLTggdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zY2hvb2wtZ29sZCB3LTE2IGgtMTYgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG14LWF1dG8gbWItNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uLmljb24gY2xhc3NOYW1lPVwiaC04IHctOCB0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gbWItNFwiPntzZWN0aW9uLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZWxlZ2FudC1saWdodCBtYi02IGxlYWRpbmctcmVsYXhlZFwiPntzZWN0aW9uLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e3NlY3Rpb24ubGlua30+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJiZy1zY2hvb2wtYnJvd24gaG92ZXI6Ymctc2Nob29sLWdvbGQgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRXhwbG9yZVxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYW1wdXNMaWZlO1xuIl0sImZpbGUiOiIvaG9tZS9zanJzaDkxNi9wdWJsaWNfaHRtbC9zcmMvcGFnZXMvQ2FtcHVzTGlmZS50c3gifQ==