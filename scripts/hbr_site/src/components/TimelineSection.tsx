import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/TimelineSection.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/components/TimelineSection.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=5efa796b"; const useEffect = __vite__cjsImport2_react["useEffect"]; const useRef = __vite__cjsImport2_react["useRef"]; const useState = __vite__cjsImport2_react["useState"];
import { Card, CardContent } from "/src/components/ui/card.tsx";
const TimelineSection = ({ title, items, className = "" })=>{
    _s();
    const [visibleItems, setVisibleItems] = useState(new Array(items.length).fill(false));
    const itemRefs = useRef([]);
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                const index = itemRefs.current.indexOf(entry.target);
                if (index !== -1 && entry.isIntersecting) {
                    setVisibleItems((prev)=>{
                        const newVisible = [
                            ...prev
                        ];
                        newVisible[index] = true;
                        return newVisible;
                    });
                }
            });
        }, {
            threshold: 0.3
        });
        itemRefs.current.forEach((ref)=>{
            if (ref) observer.observe(ref);
        });
        return ()=>observer.disconnect();
    }, []);
    return /*#__PURE__*/ _jsxDEV("section", {
        "data-lov-id": "src/components/TimelineSection.tsx:46:4",
        "data-lov-name": "section",
        "data-component-path": "src/components/TimelineSection.tsx",
        "data-component-line": "46",
        "data-component-file": "TimelineSection.tsx",
        "data-component-name": "section",
        "data-component-content": "%7B%7D",
        className: `py-16 ${className}`,
        children: /*#__PURE__*/ _jsxDEV("div", {
            "data-lov-id": "src/components/TimelineSection.tsx:47:6",
            "data-lov-name": "div",
            "data-component-path": "src/components/TimelineSection.tsx",
            "data-component-line": "47",
            "data-component-file": "TimelineSection.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/components/TimelineSection.tsx:48:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/TimelineSection.tsx",
                    "data-component-line": "48",
                    "data-component-file": "TimelineSection.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22section-heading%22%7D",
                    className: "section-heading",
                    children: [
                        /*#__PURE__*/ _jsxDEV("span", {
                            "data-lov-id": "src/components/TimelineSection.tsx:49:10",
                            "data-lov-name": "span",
                            "data-component-path": "src/components/TimelineSection.tsx",
                            "data-component-line": "49",
                            "data-component-file": "TimelineSection.tsx",
                            "data-component-name": "span",
                            "data-component-content": "%7B%22text%22%3A%22%F0%9F%93%9A%22%2C%22className%22%3A%22icon%22%7D",
                            className: "icon",
                            children: "📚"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/TimelineSection.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("h2", {
                            "data-lov-id": "src/components/TimelineSection.tsx:50:10",
                            "data-lov-name": "h2",
                            "data-component-path": "src/components/TimelineSection.tsx",
                            "data-component-line": "50",
                            "data-component-file": "TimelineSection.tsx",
                            "data-component-name": "h2",
                            "data-component-content": "%7B%22className%22%3A%22title%22%7D",
                            className: "title",
                            children: title
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/TimelineSection.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/components/TimelineSection.tsx:51:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/TimelineSection.tsx",
                            "data-component-line": "51",
                            "data-component-file": "TimelineSection.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22underline%22%7D",
                            className: "underline"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/TimelineSection.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/components/TimelineSection.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/components/TimelineSection.tsx:54:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/TimelineSection.tsx",
                    "data-component-line": "54",
                    "data-component-file": "TimelineSection.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22max-w-4xl%20mx-auto%20mt-12%22%7D",
                    className: "max-w-4xl mx-auto mt-12",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/components/TimelineSection.tsx:55:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/TimelineSection.tsx",
                        "data-component-line": "55",
                        "data-component-file": "TimelineSection.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22relative%22%7D",
                        className: "relative",
                        children: [
                            /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/components/TimelineSection.tsx:57:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/components/TimelineSection.tsx",
                                "data-component-line": "57",
                                "data-component-file": "TimelineSection.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22absolute%20left-4%20md%3Aleft-1%2F2%20transform%20md%3A-translate-x-px%20top-0%20bottom-0%20w-0.5%20bg-gradient-to-b%20from-primary%20via-accent%20to-primary%22%7D",
                                className: "absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/components/TimelineSection.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this),
                            items.map((item, index)=>/*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/components/TimelineSection.tsx:60:14",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/TimelineSection.tsx",
                                    "data-component-line": "60",
                                    "data-component-file": "TimelineSection.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%7D",
                                    ref: (el)=>itemRefs.current[index] = el,
                                    className: `relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`,
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/components/TimelineSection.tsx:68:16",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/components/TimelineSection.tsx",
                                            "data-component-line": "68",
                                            "data-component-file": "TimelineSection.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22absolute%20left-0%20md%3Aleft-1%2F2%20transform%20md%3A-translate-x-1%2F2%20w-8%20h-8%20bg-accent%20rounded-full%20border-4%20border-background%20shadow-lg%20flex%20items-center%20justify-center%20z-10%22%7D",
                                            className: "absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-accent rounded-full border-4 border-background shadow-lg flex items-center justify-center z-10",
                                            children: /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/components/TimelineSection.tsx:69:18",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/components/TimelineSection.tsx",
                                                "data-component-line": "69",
                                                "data-component-file": "TimelineSection.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22w-3%20h-3%20bg-primary%20rounded-full%22%7D",
                                                className: "w-3 h-3 bg-primary rounded-full"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/components/TimelineSection.tsx",
                                                lineNumber: 69,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/TimelineSection.tsx",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/components/TimelineSection.tsx:73:16",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/components/TimelineSection.tsx",
                                            "data-component-line": "73",
                                            "data-component-file": "TimelineSection.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%7D",
                                            className: `w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`,
                                            children: /*#__PURE__*/ _jsxDEV(Card, {
                                                "data-lov-id": "src/components/TimelineSection.tsx:76:18",
                                                "data-lov-name": "Card",
                                                "data-component-path": "src/components/TimelineSection.tsx",
                                                "data-component-line": "76",
                                                "data-component-file": "TimelineSection.tsx",
                                                "data-component-name": "Card",
                                                "data-component-content": "%7B%7D",
                                                className: `transition-all duration-700 transform ${visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:shadow-xl hover:scale-105`,
                                                children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                                    "data-lov-id": "src/components/TimelineSection.tsx:81:20",
                                                    "data-lov-name": "CardContent",
                                                    "data-component-path": "src/components/TimelineSection.tsx",
                                                    "data-component-line": "81",
                                                    "data-component-file": "TimelineSection.tsx",
                                                    "data-component-name": "CardContent",
                                                    "data-component-content": "%7B%22className%22%3A%22p-6%22%7D",
                                                    className: "p-6",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            "data-lov-id": "src/components/TimelineSection.tsx:82:22",
                                                            "data-lov-name": "div",
                                                            "data-component-path": "src/components/TimelineSection.tsx",
                                                            "data-component-line": "82",
                                                            "data-component-file": "TimelineSection.tsx",
                                                            "data-component-name": "div",
                                                            "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20mb-3%22%7D",
                                                            className: "flex items-center mb-3",
                                                            children: [
                                                                item.icon && /*#__PURE__*/ _jsxDEV("div", {
                                                                    "data-lov-id": "src/components/TimelineSection.tsx:84:26",
                                                                    "data-lov-name": "div",
                                                                    "data-component-path": "src/components/TimelineSection.tsx",
                                                                    "data-component-line": "84",
                                                                    "data-component-file": "TimelineSection.tsx",
                                                                    "data-component-name": "div",
                                                                    "data-component-content": "%7B%22className%22%3A%22w-10%20h-10%20bg-accent%20rounded-full%20flex%20items-center%20justify-center%20mr-3%22%7D",
                                                                    className: "w-10 h-10 bg-accent rounded-full flex items-center justify-center mr-3",
                                                                    children: item.icon
                                                                }, void 0, false, {
                                                                    fileName: "/home/sjrsh916/public_html/src/components/TimelineSection.tsx",
                                                                    lineNumber: 84,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV("span", {
                                                                    "data-lov-id": "src/components/TimelineSection.tsx:88:24",
                                                                    "data-lov-name": "span",
                                                                    "data-component-path": "src/components/TimelineSection.tsx",
                                                                    "data-component-line": "88",
                                                                    "data-component-file": "TimelineSection.tsx",
                                                                    "data-component-name": "span",
                                                                    "data-component-content": "%7B%22className%22%3A%22text-2xl%20font-bold%20text-accent%22%7D",
                                                                    className: "text-2xl font-bold text-accent",
                                                                    children: item.year
                                                                }, void 0, false, {
                                                                    fileName: "/home/sjrsh916/public_html/src/components/TimelineSection.tsx",
                                                                    lineNumber: 88,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/home/sjrsh916/public_html/src/components/TimelineSection.tsx",
                                                            lineNumber: 82,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("h3", {
                                                            "data-lov-id": "src/components/TimelineSection.tsx:90:22",
                                                            "data-lov-name": "h3",
                                                            "data-component-path": "src/components/TimelineSection.tsx",
                                                            "data-component-line": "90",
                                                            "data-component-file": "TimelineSection.tsx",
                                                            "data-component-name": "h3",
                                                            "data-component-content": "%7B%22className%22%3A%22text-xl%20font-bold%20text-foreground%20mb-2%22%7D",
                                                            className: "text-xl font-bold text-foreground mb-2",
                                                            children: item.title
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/components/TimelineSection.tsx",
                                                            lineNumber: 90,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("p", {
                                                            "data-lov-id": "src/components/TimelineSection.tsx:91:22",
                                                            "data-lov-name": "p",
                                                            "data-component-path": "src/components/TimelineSection.tsx",
                                                            "data-component-line": "91",
                                                            "data-component-file": "TimelineSection.tsx",
                                                            "data-component-name": "p",
                                                            "data-component-content": "%7B%22className%22%3A%22text-muted-foreground%22%7D",
                                                            className: "text-muted-foreground",
                                                            children: item.description
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/components/TimelineSection.tsx",
                                                            lineNumber: 91,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/TimelineSection.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/components/TimelineSection.tsx",
                                                lineNumber: 76,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/TimelineSection.tsx",
                                            lineNumber: 73,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "/home/sjrsh916/public_html/src/components/TimelineSection.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "/home/sjrsh916/public_html/src/components/TimelineSection.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/components/TimelineSection.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/sjrsh916/public_html/src/components/TimelineSection.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/components/TimelineSection.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
};
_s(TimelineSection, "x0JaAOvJIaDEwSfMg/3zs0byuDY=");
_c = TimelineSection;
export default TimelineSection;
var _c;
$RefreshReg$(_c, "TimelineSection");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/components/TimelineSection.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/components/TimelineSection.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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ZSIsIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiVGltZWxpbmVTZWN0aW9uIiwidGl0bGUiLCJpdGVtcyIsImNsYXNzTmFtZSIsInZpc2libGVJdGVtcyIsInNldFZpc2libGVJdGVtcyIsIkFycmF5IiwibGVuZ3RoIiwiZmlsbCIsIml0ZW1SZWZzIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJpbmRleCIsImN1cnJlbnQiLCJpbmRleE9mIiwidGFyZ2V0IiwiaXNJbnRlcnNlY3RpbmciLCJwcmV2IiwibmV3VmlzaWJsZSIsInRocmVzaG9sZCIsInJlZiIsIm9ic2VydmUiLCJkaXNjb25uZWN0Iiwic2VjdGlvbiIsImRhdGEtbG92LWlkIiwiZGF0YS1sb3YtbmFtZSIsImRhdGEtY29tcG9uZW50LXBhdGgiLCJkYXRhLWNvbXBvbmVudC1saW5lIiwiZGF0YS1jb21wb25lbnQtZmlsZSIsImRhdGEtY29tcG9uZW50LW5hbWUiLCJkYXRhLWNvbXBvbmVudC1jb250ZW50IiwiZGl2Iiwic3BhbiIsImgyIiwibWFwIiwiaXRlbSIsImVsIiwiaWNvbiIsInllYXIiLCJoMyIsInAiLCJkZXNjcmlwdGlvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJUaW1lbGluZVNlY3Rpb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcblxuaW50ZXJmYWNlIFRpbWVsaW5lSXRlbSB7XG4gIHllYXI6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgaWNvbj86IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuaW50ZXJmYWNlIFRpbWVsaW5lU2VjdGlvblByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgaXRlbXM6IFRpbWVsaW5lSXRlbVtdO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59XG5cbmNvbnN0IFRpbWVsaW5lU2VjdGlvbiA9ICh7IHRpdGxlLCBpdGVtcywgY2xhc3NOYW1lID0gXCJcIiB9OiBUaW1lbGluZVNlY3Rpb25Qcm9wcykgPT4ge1xuICBjb25zdCBbdmlzaWJsZUl0ZW1zLCBzZXRWaXNpYmxlSXRlbXNdID0gdXNlU3RhdGU8Ym9vbGVhbltdPihuZXcgQXJyYXkoaXRlbXMubGVuZ3RoKS5maWxsKGZhbHNlKSk7XG4gIGNvbnN0IGl0ZW1SZWZzID0gdXNlUmVmPChIVE1MRGl2RWxlbWVudCB8IG51bGwpW10+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgICAgKGVudHJpZXMpID0+IHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gaXRlbVJlZnMuY3VycmVudC5pbmRleE9mKGVudHJ5LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudCk7XG4gICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSAmJiBlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgc2V0VmlzaWJsZUl0ZW1zKHByZXYgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBuZXdWaXNpYmxlID0gWy4uLnByZXZdO1xuICAgICAgICAgICAgICBuZXdWaXNpYmxlW2luZGV4XSA9IHRydWU7XG4gICAgICAgICAgICAgIHJldHVybiBuZXdWaXNpYmxlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICB7IHRocmVzaG9sZDogMC4zIH1cbiAgICApO1xuXG4gICAgaXRlbVJlZnMuY3VycmVudC5mb3JFYWNoKChyZWYpID0+IHtcbiAgICAgIGlmIChyZWYpIG9ic2VydmVyLm9ic2VydmUocmVmKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YHB5LTE2ICR7Y2xhc3NOYW1lfWB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkaW5nXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiPvCfk5o8L3NwYW4+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1bmRlcmxpbmVcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTR4bCBteC1hdXRvIG10LTEyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgey8qIFZlcnRpY2FsIFRpbWVsaW5lIExpbmUgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtNCBtZDpsZWZ0LTEvMiB0cmFuc2Zvcm0gbWQ6LXRyYW5zbGF0ZS14LXB4IHRvcC0wIGJvdHRvbS0wIHctMC41IGJnLWdyYWRpZW50LXRvLWIgZnJvbS1wcmltYXJ5IHZpYS1hY2NlbnQgdG8tcHJpbWFyeVwiPjwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICByZWY9eyhlbCkgPT4gaXRlbVJlZnMuY3VycmVudFtpbmRleF0gPSBlbH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBtYi0xMiAke1xuICAgICAgICAgICAgICAgICAgaW5kZXggJSAyID09PSAwID8gJ21kOmZsZXgtcm93JyA6ICdtZDpmbGV4LXJvdy1yZXZlcnNlJ1xuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgey8qIFRpbWVsaW5lIERvdCAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMCBtZDpsZWZ0LTEvMiB0cmFuc2Zvcm0gbWQ6LXRyYW5zbGF0ZS14LTEvMiB3LTggaC04IGJnLWFjY2VudCByb3VuZGVkLWZ1bGwgYm9yZGVyLTQgYm9yZGVyLWJhY2tncm91bmQgc2hhZG93LWxnIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHotMTBcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0zIGgtMyBiZy1wcmltYXJ5IHJvdW5kZWQtZnVsbFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHsvKiBDb250ZW50IENhcmQgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3LWZ1bGwgbWQ6dy01LzEyIG1sLTEyIG1kOm1sLTAgJHtcbiAgICAgICAgICAgICAgICAgIGluZGV4ICUgMiA9PT0gMCA/ICdtZDptci1hdXRvIG1kOnByLTgnIDogJ21kOm1sLWF1dG8gbWQ6cGwtOCdcbiAgICAgICAgICAgICAgICB9YH0+XG4gICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2B0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi03MDAgdHJhbnNmb3JtICR7XG4gICAgICAgICAgICAgICAgICAgIHZpc2libGVJdGVtc1tpbmRleF0gXG4gICAgICAgICAgICAgICAgICAgICAgPyAnb3BhY2l0eS0xMDAgdHJhbnNsYXRlLXktMCcgXG4gICAgICAgICAgICAgICAgICAgICAgOiAnb3BhY2l0eS0wIHRyYW5zbGF0ZS15LTgnXG4gICAgICAgICAgICAgICAgICB9IGhvdmVyOnNoYWRvdy14bCBob3ZlcjpzY2FsZS0xMDVgfT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uaWNvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBoLTEwIGJnLWFjY2VudCByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmljb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWFjY2VudFwiPntpdGVtLnllYXJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LWZvcmVncm91bmQgbWItMlwiPntpdGVtLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVsaW5lU2VjdGlvbjsiXSwiZmlsZSI6Ii9ob21lL3NqcnNoOTE2L3B1YmxpY19odG1sL3NyYy9jb21wb25lbnRzL1RpbWVsaW5lU2VjdGlvbi50c3gifQ==