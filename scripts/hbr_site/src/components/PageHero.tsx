import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/PageHero.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/components/PageHero.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=5efa796b";
import { ChevronRight } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
const PageHero = ({ title, breadcrumbs = [] })=>{
    const crumbs = [
        {
            label: "Home",
            path: "/"
        },
        ...breadcrumbs
    ];
    return /*#__PURE__*/ _jsxDEV("section", {
        "data-lov-id": "src/components/PageHero.tsx:17:4",
        "data-lov-name": "section",
        "data-component-path": "src/components/PageHero.tsx",
        "data-component-line": "17",
        "data-component-file": "PageHero.tsx",
        "data-component-name": "section",
        "data-component-content": "%7B%22className%22%3A%22w-full%22%7D",
        className: "w-full",
        children: [
            /*#__PURE__*/ _jsxDEV("div", {
                "data-lov-id": "src/components/PageHero.tsx:19:6",
                "data-lov-name": "div",
                "data-component-path": "src/components/PageHero.tsx",
                "data-component-line": "19",
                "data-component-file": "PageHero.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%7D",
                style: {
                    backgroundColor: "#F7D8A4"
                },
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/components/PageHero.tsx:20:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/PageHero.tsx",
                    "data-component-line": "20",
                    "data-component-file": "PageHero.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20py-1.5%20sm%3Apy-2%22%7D",
                    className: "container mx-auto px-4 py-1.5 sm:py-2",
                    children: /*#__PURE__*/ _jsxDEV("nav", {
                        "data-lov-id": "src/components/PageHero.tsx:21:10",
                        "data-lov-name": "nav",
                        "data-component-path": "src/components/PageHero.tsx",
                        "data-component-line": "21",
                        "data-component-file": "PageHero.tsx",
                        "data-component-name": "nav",
                        "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20flex-wrap%20gap-y-1%20text-xs%20sm%3Atext-sm%20text-logo-navy%2F80%22%7D",
                        "aria-label": "Breadcrumb",
                        className: "flex items-center flex-wrap gap-y-1 text-xs sm:text-sm text-logo-navy/80",
                        children: crumbs.map((c, i)=>{
                            const isLast = i === crumbs.length - 1;
                            return /*#__PURE__*/ _jsxDEV("span", {
                                "data-lov-id": "src/components/PageHero.tsx:28:16",
                                "data-lov-name": "span",
                                "data-component-path": "src/components/PageHero.tsx",
                                "data-component-line": "28",
                                "data-component-file": "PageHero.tsx",
                                "data-component-name": "span",
                                "data-component-content": "%7B%22className%22%3A%22inline-flex%20items-center%22%7D",
                                className: "inline-flex items-center",
                                children: [
                                    c.path && !isLast ? /*#__PURE__*/ _jsxDEV(Link, {
                                        "data-lov-id": "src/components/PageHero.tsx:30:20",
                                        "data-lov-name": "Link",
                                        "data-component-path": "src/components/PageHero.tsx",
                                        "data-component-line": "30",
                                        "data-component-file": "PageHero.tsx",
                                        "data-component-name": "Link",
                                        "data-component-content": "%7B%22className%22%3A%22hover%3Atext-logo-navy%20transition-colors%22%7D",
                                        to: c.path,
                                        className: "hover:text-logo-navy transition-colors",
                                        children: c.label
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/components/PageHero.tsx",
                                        lineNumber: 30,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ _jsxDEV("span", {
                                        "data-lov-id": "src/components/PageHero.tsx:37:20",
                                        "data-lov-name": "span",
                                        "data-component-path": "src/components/PageHero.tsx",
                                        "data-component-line": "37",
                                        "data-component-file": "PageHero.tsx",
                                        "data-component-name": "span",
                                        "data-component-content": "%7B%7D",
                                        className: isLast ? "text-logo-navy font-medium" : "",
                                        children: c.label
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/components/PageHero.tsx",
                                        lineNumber: 37,
                                        columnNumber: 21
                                    }, this),
                                    !isLast && /*#__PURE__*/ _jsxDEV(ChevronRight, {
                                        "data-lov-id": "src/components/PageHero.tsx:42:20",
                                        "data-lov-name": "ChevronRight",
                                        "data-component-path": "src/components/PageHero.tsx",
                                        "data-component-line": "42",
                                        "data-component-file": "PageHero.tsx",
                                        "data-component-name": "ChevronRight",
                                        "data-component-content": "%7B%22className%22%3A%22h-3.5%20w-3.5%20mx-1.5%20opacity-60%22%7D",
                                        className: "h-3.5 w-3.5 mx-1.5 opacity-60"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/components/PageHero.tsx",
                                        lineNumber: 42,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, `${c.label}-${i}`, true, {
                                fileName: "/home/sjrsh916/public_html/src/components/PageHero.tsx",
                                lineNumber: 28,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/components/PageHero.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/components/PageHero.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/PageHero.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                "data-lov-id": "src/components/PageHero.tsx:52:6",
                "data-lov-name": "div",
                "data-component-path": "src/components/PageHero.tsx",
                "data-component-line": "52",
                "data-component-file": "PageHero.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22bg-indian-green%22%7D",
                className: "bg-indian-green",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/components/PageHero.tsx:53:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/PageHero.tsx",
                    "data-component-line": "53",
                    "data-component-file": "PageHero.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20py-12%20sm%3Apy-16%20text-center%22%7D",
                    className: "container mx-auto px-4 py-12 sm:py-16 text-center",
                    children: [
                        /*#__PURE__*/ _jsxDEV("h1", {
                            "data-lov-id": "src/components/PageHero.tsx:54:10",
                            "data-lov-name": "h1",
                            "data-component-path": "src/components/PageHero.tsx",
                            "data-component-line": "54",
                            "data-component-file": "PageHero.tsx",
                            "data-component-name": "h1",
                            "data-component-content": "%7B%22className%22%3A%22text-white%20font-bold%20tracking-tight%20text-3xl%20sm%3Atext-4xl%20lg%3Atext-5xl%22%7D",
                            className: "text-white font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl",
                            style: {
                                fontFamily: "Poppins, sans-serif"
                            },
                            children: title
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/PageHero.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/components/PageHero.tsx:60:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/PageHero.tsx",
                            "data-component-line": "60",
                            "data-component-file": "PageHero.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22mx-auto%20mt-4%20h-%5B3px%5D%20w-16%20bg-white%2F60%20rounded-full%22%7D",
                            className: "mx-auto mt-4 h-[3px] w-16 bg-white/60 rounded-full"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/PageHero.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/components/PageHero.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/PageHero.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/sjrsh916/public_html/src/components/PageHero.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
};
_c = PageHero;
export default PageHero;
var _c;
$RefreshReg$(_c, "PageHero");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/components/PageHero.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/components/PageHero.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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NEJBQ1ZFLE9BQU87Z0NBQUVZLFlBQVk7NEJBQXNCO3NDQUUxQzNCOzs7Ozs7c0NBRUgsUUFBQ2M7NEJBQUVSLGVBQUE7NEJBQUFDLGlCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsMEJBQUE7NEJBQUVDLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3pCO0tBbkRNZDtBQXFETixlQUFlQSxTQUFRIiwibmFtZXMiOlsiTGluayIsIkNoZXZyb25SaWdodCIsIlBhZ2VIZXJvIiwidGl0bGUiLCJicmVhZGNydW1icyIsImNydW1icyIsImxhYmVsIiwicGF0aCIsInNlY3Rpb24iLCJkYXRhLWxvdi1pZCIsImRhdGEtbG92LW5hbWUiLCJkYXRhLWNvbXBvbmVudC1wYXRoIiwiZGF0YS1jb21wb25lbnQtbGluZSIsImRhdGEtY29tcG9uZW50LWZpbGUiLCJkYXRhLWNvbXBvbmVudC1uYW1lIiwiZGF0YS1jb21wb25lbnQtY29udGVudCIsImNsYXNzTmFtZSIsImRpdiIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwibmF2IiwiYXJpYS1sYWJlbCIsIm1hcCIsImMiLCJpIiwiaXNMYXN0IiwibGVuZ3RoIiwic3BhbiIsInRvIiwiaDEiLCJmb250RmFtaWx5Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIlBhZ2VIZXJvLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IENoZXZyb25SaWdodCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDcnVtYiB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHBhdGg/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBQYWdlSGVyb1Byb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgYnJlYWRjcnVtYnM/OiBDcnVtYltdO1xufVxuXG5jb25zdCBQYWdlSGVybyA9ICh7IHRpdGxlLCBicmVhZGNydW1icyA9IFtdIH06IFBhZ2VIZXJvUHJvcHMpID0+IHtcbiAgY29uc3QgY3J1bWJzOiBDcnVtYltdID0gW3sgbGFiZWw6IFwiSG9tZVwiLCBwYXRoOiBcIi9cIiB9LCAuLi5icmVhZGNydW1ic107XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICB7LyogQnJlYWRjcnVtYiBzdHJpcCDigJQgcGFsZSBwZWFjaCAqL31cbiAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNGN0Q4QTRcIiB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IHB5LTEuNSBzbTpweS0yXCI+XG4gICAgICAgICAgPG5hdlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkJyZWFkY3J1bWJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZmxleC13cmFwIGdhcC15LTEgdGV4dC14cyBzbTp0ZXh0LXNtIHRleHQtbG9nby1uYXZ5LzgwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y3J1bWJzLm1hcCgoYywgaSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpc0xhc3QgPSBpID09PSBjcnVtYnMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2Ake2MubGFiZWx9LSR7aX1gfSBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIHtjLnBhdGggJiYgIWlzTGFzdCA/IChcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICB0bz17Yy5wYXRofVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtbG9nby1uYXZ5IHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtjLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2lzTGFzdCA/IFwidGV4dC1sb2dvLW5hdnkgZm9udC1tZWRpdW1cIiA6IFwiXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgIHtjLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgeyFpc0xhc3QgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8Q2hldnJvblJpZ2h0IGNsYXNzTmFtZT1cImgtMy41IHctMy41IG14LTEuNSBvcGFjaXR5LTYwXCIgLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBHcmVlbiBoZXJvIGJhbmQgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWluZGlhbi1ncmVlblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgcHktMTIgc206cHktMTYgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8aDFcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtM3hsIHNtOnRleHQtNHhsIGxnOnRleHQtNXhsXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiUG9wcGlucywgc2Fucy1zZXJpZlwiIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG10LTQgaC1bM3B4XSB3LTE2IGJnLXdoaXRlLzYwIHJvdW5kZWQtZnVsbFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZUhlcm87XG4iXSwiZmlsZSI6Ii9ob21lL3NqcnNoOTE2L3B1YmxpY19odG1sL3NyYy9jb21wb25lbnRzL1BhZ2VIZXJvLnRzeCJ9