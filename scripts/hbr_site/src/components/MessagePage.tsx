import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/MessagePage.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/components/MessagePage.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import Layout from "/src/components/Layout.tsx";
import PageHero from "/src/components/PageHero.tsx";
const MessagePage = ({ title, breadcrumbLabel, breadcrumbPath, name, designation, imageUrl, qualifications, paragraphs, hideProfileCard = false, compactImage = false, signature })=>{
    return /*#__PURE__*/ _jsxDEV(Layout, {
        "data-lov-id": "src/components/MessagePage.tsx:35:4",
        "data-lov-name": "Layout",
        "data-component-path": "src/components/MessagePage.tsx",
        "data-component-line": "35",
        "data-component-file": "MessagePage.tsx",
        "data-component-name": "Layout",
        "data-component-content": "%7B%7D",
        children: [
            /*#__PURE__*/ _jsxDEV(PageHero, {
                "data-lov-id": "src/components/MessagePage.tsx:36:6",
                "data-lov-name": "PageHero",
                "data-component-path": "src/components/MessagePage.tsx",
                "data-component-line": "36",
                "data-component-file": "MessagePage.tsx",
                "data-component-name": "PageHero",
                "data-component-content": "%7B%7D",
                title: title,
                breadcrumbs: [
                    {
                        label: "About",
                        path: "/about/overview"
                    },
                    {
                        label: breadcrumbLabel,
                        path: breadcrumbPath
                    }
                ]
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/MessagePage.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/components/MessagePage.tsx:44:6",
                "data-lov-name": "section",
                "data-component-path": "src/components/MessagePage.tsx",
                "data-component-line": "44",
                "data-component-file": "MessagePage.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%22%7D",
                className: "py-16",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/components/MessagePage.tsx:45:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/MessagePage.tsx",
                    "data-component-line": "45",
                    "data-component-file": "MessagePage.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/components/MessagePage.tsx:46:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/MessagePage.tsx",
                        "data-component-line": "46",
                        "data-component-file": "MessagePage.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22grid%20lg%3Agrid-cols-5%20gap-10%20lg%3Agap-14%20max-w-6xl%20mx-auto%20items-stretch%22%7D",
                        className: "grid lg:grid-cols-5 gap-10 lg:gap-14 max-w-6xl mx-auto items-stretch",
                        children: [
                            /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/components/MessagePage.tsx:48:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/components/MessagePage.tsx",
                                "data-component-line": "48",
                                "data-component-file": "MessagePage.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%7D",
                                className: `lg:col-span-2 flex ${compactImage ? "lg:self-start" : ""}`,
                                children: /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/components/MessagePage.tsx:49:14",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/MessagePage.tsx",
                                    "data-component-line": "49",
                                    "data-component-file": "MessagePage.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22rounded-2xl%20overflow-hidden%20shadow-xl%20border%20bg-white%20flex%20flex-col%20w-full%22%7D",
                                    className: "rounded-2xl overflow-hidden shadow-xl border bg-white flex flex-col w-full",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/components/MessagePage.tsx:50:16",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/components/MessagePage.tsx",
                                            "data-component-line": "50",
                                            "data-component-file": "MessagePage.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%7D",
                                            className: compactImage ? "bg-muted aspect-[4/5]" : "flex-1 bg-muted",
                                            children: /*#__PURE__*/ _jsxDEV("img", {
                                                "data-lov-id": "src/components/MessagePage.tsx:51:18",
                                                "data-lov-name": "img",
                                                "data-component-path": "src/components/MessagePage.tsx",
                                                "data-component-line": "51",
                                                "data-component-file": "MessagePage.tsx",
                                                "data-component-name": "img",
                                                "data-component-content": "%7B%22className%22%3A%22w-full%20h-full%20object-cover%20object-top%22%7D",
                                                src: imageUrl,
                                                alt: name,
                                                className: "w-full h-full object-cover object-top"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/components/MessagePage.tsx",
                                                lineNumber: 51,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/MessagePage.tsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, this),
                                        !hideProfileCard && /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/components/MessagePage.tsx:59:18",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/components/MessagePage.tsx",
                                            "data-component-line": "59",
                                            "data-component-file": "MessagePage.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22p-6%20text-center%20bg-gradient-to-b%20from-white%20to-muted%2F40%22%7D",
                                            className: "p-6 text-center bg-gradient-to-b from-white to-muted/40",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("h3", {
                                                    "data-lov-id": "src/components/MessagePage.tsx:60:20",
                                                    "data-lov-name": "h3",
                                                    "data-component-path": "src/components/MessagePage.tsx",
                                                    "data-component-line": "60",
                                                    "data-component-file": "MessagePage.tsx",
                                                    "data-component-name": "h3",
                                                    "data-component-content": "%7B%22className%22%3A%22text-xl%20font-bold%20text-logo-navy%22%7D",
                                                    className: "text-xl font-bold text-logo-navy",
                                                    children: name
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/MessagePage.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/components/MessagePage.tsx:61:20",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/components/MessagePage.tsx",
                                                    "data-component-line": "61",
                                                    "data-component-file": "MessagePage.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22className%22%3A%22text-saffron-orange%20font-semibold%20text-sm%20mt-1%22%7D",
                                                    className: "text-saffron-orange font-semibold text-sm mt-1",
                                                    children: designation
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/MessagePage.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 21
                                                }, this),
                                                qualifications && /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/components/MessagePage.tsx:65:22",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/components/MessagePage.tsx",
                                                    "data-component-line": "65",
                                                    "data-component-file": "MessagePage.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22className%22%3A%22text-xs%20text-muted-foreground%20mt-2%22%7D",
                                                    className: "text-xs text-muted-foreground mt-2",
                                                    children: qualifications
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/MessagePage.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/components/MessagePage.tsx",
                                            lineNumber: 59,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/components/MessagePage.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/components/MessagePage.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/components/MessagePage.tsx:75:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/components/MessagePage.tsx",
                                "data-component-line": "75",
                                "data-component-file": "MessagePage.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22lg%3Acol-span-3%20flex%22%7D",
                                className: "lg:col-span-3 flex",
                                children: /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/components/MessagePage.tsx:76:14",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/MessagePage.tsx",
                                    "data-component-line": "76",
                                    "data-component-file": "MessagePage.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22bg-white%20rounded-2xl%20border%20shadow-sm%20p-8%20w-full%20flex%20flex-col%22%7D",
                                    className: "bg-white rounded-2xl border shadow-sm p-8 w-full flex flex-col",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/components/MessagePage.tsx:77:16",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/components/MessagePage.tsx",
                                            "data-component-line": "77",
                                            "data-component-file": "MessagePage.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22space-y-5%20text-foreground%2F90%20leading-relaxed%20text-%5B15px%5D%22%7D",
                                            className: "space-y-5 text-foreground/90 leading-relaxed text-[15px]",
                                            children: paragraphs.map((p, i)=>/*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/components/MessagePage.tsx:79:20",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/components/MessagePage.tsx",
                                                    "data-component-line": "79",
                                                    "data-component-file": "MessagePage.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%7D",
                                                    children: p
                                                }, i, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/MessagePage.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/MessagePage.tsx",
                                            lineNumber: 77,
                                            columnNumber: 17
                                        }, this),
                                        signature && /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/components/MessagePage.tsx:83:18",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/components/MessagePage.tsx",
                                            "data-component-line": "83",
                                            "data-component-file": "MessagePage.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22mt-8%20pt-6%20border-t%20border-muted%22%7D",
                                            className: "mt-8 pt-6 border-t border-muted",
                                            children: signature
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/MessagePage.tsx",
                                            lineNumber: 83,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/components/MessagePage.tsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/components/MessagePage.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/sjrsh916/public_html/src/components/MessagePage.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/components/MessagePage.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/MessagePage.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/sjrsh916/public_html/src/components/MessagePage.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
};
_c = MessagePage;
export default MessagePage;
var _c;
$RefreshReg$(_c, "MessagePage");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/components/MessagePage.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/components/MessagePage.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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QWVBLFlBQVciLCJuYW1lcyI6WyJMYXlvdXQiLCJQYWdlSGVybyIsIk1lc3NhZ2VQYWdlIiwidGl0bGUiLCJicmVhZGNydW1iTGFiZWwiLCJicmVhZGNydW1iUGF0aCIsIm5hbWUiLCJkZXNpZ25hdGlvbiIsImltYWdlVXJsIiwicXVhbGlmaWNhdGlvbnMiLCJwYXJhZ3JhcGhzIiwiaGlkZVByb2ZpbGVDYXJkIiwiY29tcGFjdEltYWdlIiwic2lnbmF0dXJlIiwiZGF0YS1sb3YtaWQiLCJkYXRhLWxvdi1uYW1lIiwiZGF0YS1jb21wb25lbnQtcGF0aCIsImRhdGEtY29tcG9uZW50LWxpbmUiLCJkYXRhLWNvbXBvbmVudC1maWxlIiwiZGF0YS1jb21wb25lbnQtbmFtZSIsImRhdGEtY29tcG9uZW50LWNvbnRlbnQiLCJicmVhZGNydW1icyIsImxhYmVsIiwicGF0aCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJpbWciLCJzcmMiLCJhbHQiLCJoMyIsInAiLCJtYXAiLCJpIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIk1lc3NhZ2VQYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgUGFnZUhlcm8gZnJvbSBcIkAvY29tcG9uZW50cy9QYWdlSGVyb1wiO1xuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBNZXNzYWdlUGFnZVByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgYnJlYWRjcnVtYkxhYmVsOiBzdHJpbmc7XG4gIGJyZWFkY3J1bWJQYXRoOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZGVzaWduYXRpb246IHN0cmluZztcbiAgaW1hZ2VVcmw6IHN0cmluZztcbiAgcXVhbGlmaWNhdGlvbnM/OiBzdHJpbmc7XG4gIHBhcmFncmFwaHM6IFJlYWN0Tm9kZVtdO1xuICBoaWRlUHJvZmlsZUNhcmQ/OiBib29sZWFuO1xuICBjb21wYWN0SW1hZ2U/OiBib29sZWFuO1xuICBzaWduYXR1cmU/OiBSZWFjdE5vZGU7XG5cbn1cblxuY29uc3QgTWVzc2FnZVBhZ2UgPSAoe1xuICB0aXRsZSxcbiAgYnJlYWRjcnVtYkxhYmVsLFxuICBicmVhZGNydW1iUGF0aCxcbiAgbmFtZSxcbiAgZGVzaWduYXRpb24sXG4gIGltYWdlVXJsLFxuICBxdWFsaWZpY2F0aW9ucyxcbiAgcGFyYWdyYXBocyxcbiAgaGlkZVByb2ZpbGVDYXJkID0gZmFsc2UsXG4gIGNvbXBhY3RJbWFnZSA9IGZhbHNlLFxuICBzaWduYXR1cmUsXG5cbn06IE1lc3NhZ2VQYWdlUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPFBhZ2VIZXJvXG4gICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgYnJlYWRjcnVtYnM9e1tcbiAgICAgICAgICB7IGxhYmVsOiBcIkFib3V0XCIsIHBhdGg6IFwiL2Fib3V0L292ZXJ2aWV3XCIgfSxcbiAgICAgICAgICB7IGxhYmVsOiBicmVhZGNydW1iTGFiZWwsIHBhdGg6IGJyZWFkY3J1bWJQYXRoIH0sXG4gICAgICAgIF19XG4gICAgICAvPlxuXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbGc6Z3JpZC1jb2xzLTUgZ2FwLTEwIGxnOmdhcC0xNCBtYXgtdy02eGwgbXgtYXV0byBpdGVtcy1zdHJldGNoXCI+XG4gICAgICAgICAgICB7LyogUG9ydHJhaXQgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGxnOmNvbC1zcGFuLTIgZmxleCAke2NvbXBhY3RJbWFnZSA/IFwibGc6c2VsZi1zdGFydFwiIDogXCJcIn1gfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LXhsIGJvcmRlciBiZy13aGl0ZSBmbGV4IGZsZXgtY29sIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb21wYWN0SW1hZ2UgPyBcImJnLW11dGVkIGFzcGVjdC1bNC81XVwiIDogXCJmbGV4LTEgYmctbXV0ZWRcIn0+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VVcmx9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgb2JqZWN0LXRvcFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgeyFoaWRlUHJvZmlsZUNhcmQgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgdGV4dC1jZW50ZXIgYmctZ3JhZGllbnQtdG8tYiBmcm9tLXdoaXRlIHRvLW11dGVkLzQwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LWxvZ28tbmF2eVwiPntuYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2FmZnJvbi1vcmFuZ2UgZm9udC1zZW1pYm9sZCB0ZXh0LXNtIG10LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7ZGVzaWduYXRpb259XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAge3F1YWxpZmljYXRpb25zICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBtdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cXVhbGlmaWNhdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIENvbnRlbnQgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmNvbC1zcGFuLTMgZmxleFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtMnhsIGJvcmRlciBzaGFkb3ctc20gcC04IHctZnVsbCBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTUgdGV4dC1mb3JlZ3JvdW5kLzkwIGxlYWRpbmctcmVsYXhlZCB0ZXh0LVsxNXB4XVwiPlxuICAgICAgICAgICAgICAgICAge3BhcmFncmFwaHMubWFwKChwLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxwIGtleT17aX0+e3B9PC9wPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge3NpZ25hdHVyZSAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggcHQtNiBib3JkZXItdCBib3JkZXItbXV0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAge3NpZ25hdHVyZX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZVBhZ2U7XG4iXSwiZmlsZSI6Ii9ob21lL3NqcnNoOTE2L3B1YmxpY19odG1sL3NyYy9jb21wb25lbnRzL01lc3NhZ2VQYWdlLnRzeCJ9