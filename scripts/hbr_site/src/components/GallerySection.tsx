import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/GallerySection.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/components/GallerySection.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=5efa796b"; const useState = __vite__cjsImport2_react["useState"]; const useEffect = __vite__cjsImport2_react["useEffect"]; const useCallback = __vite__cjsImport2_react["useCallback"];
import { Button } from "/src/components/ui/button.tsx";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=5efa796b";
import { ChevronRight, ChevronLeft, X } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
import g1 from "/src/assets/pg1.jpg?import";
import g2 from "/src/assets/pg2.jpg?import";
import g3 from "/src/assets/pg3.jpg?import";
import g4 from "/src/assets/pg4.jpg?import";
import g5 from "/src/assets/pg5.jpg?import";
import g6 from "/src/assets/pg6.jpg?import";
import g7 from "/src/assets/pg7.jpg?import";
import g8 from "/src/assets/pg8.jpg?import";
const GallerySection = ()=>{
    _s();
    const images = [
        g1,
        g2,
        g3,
        g4,
        g5,
        g6,
        g7,
        g8
    ];
    const [openIndex, setOpenIndex] = useState(null);
    const close = useCallback(()=>setOpenIndex(null), []);
    const prev = useCallback(()=>setOpenIndex((i)=>i === null ? null : (i - 1 + images.length) % images.length), [
        images.length
    ]);
    const next = useCallback(()=>setOpenIndex((i)=>i === null ? null : (i + 1) % images.length), [
        images.length
    ]);
    useEffect(()=>{
        if (openIndex === null) return;
        const onKey = (e)=>{
            if (e.key === "Escape") close();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return ()=>{
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [
        openIndex,
        close,
        prev,
        next
    ]);
    return /*#__PURE__*/ _jsxDEV("section", {
        "data-lov-id": "src/components/GallerySection.tsx:45:4",
        "data-lov-name": "section",
        "data-component-path": "src/components/GallerySection.tsx",
        "data-component-line": "45",
        "data-component-file": "GallerySection.tsx",
        "data-component-name": "section",
        "data-component-content": "%7B%22className%22%3A%22py-14%20bg-slate-50%22%7D",
        className: "py-14 bg-slate-50",
        children: [
            /*#__PURE__*/ _jsxDEV("div", {
                "data-lov-id": "src/components/GallerySection.tsx:46:6",
                "data-lov-name": "div",
                "data-component-path": "src/components/GallerySection.tsx",
                "data-component-line": "46",
                "data-component-file": "GallerySection.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                className: "container mx-auto px-4",
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/components/GallerySection.tsx:47:8",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/GallerySection.tsx",
                        "data-component-line": "47",
                        "data-component-file": "GallerySection.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22text-center%20mb-10%20max-w-3xl%20mx-auto%22%7D",
                        className: "text-center mb-10 max-w-3xl mx-auto",
                        children: [
                            /*#__PURE__*/ _jsxDEV("span", {
                                "data-lov-id": "src/components/GallerySection.tsx:48:10",
                                "data-lov-name": "span",
                                "data-component-path": "src/components/GallerySection.tsx",
                                "data-component-line": "48",
                                "data-component-file": "GallerySection.tsx",
                                "data-component-name": "span",
                                "data-component-content": "%7B%22text%22%3A%22Gallery%22%2C%22className%22%3A%22text-xs%20font-semibold%20uppercase%20tracking-%5B0.2em%5D%20text-indian-green%22%7D",
                                className: "text-xs font-semibold uppercase tracking-[0.2em] text-indian-green",
                                children: "Gallery"
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/components/GallerySection.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV("h2", {
                                "data-lov-id": "src/components/GallerySection.tsx:49:10",
                                "data-lov-name": "h2",
                                "data-component-path": "src/components/GallerySection.tsx",
                                "data-component-line": "49",
                                "data-component-file": "GallerySection.tsx",
                                "data-component-name": "h2",
                                "data-component-content": "%7B%22text%22%3A%22Moments%20at%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20text-school-brown%20mt-2%20mb-3%20leading-tight%22%7D",
                                className: "text-3xl md:text-4xl font-bold text-school-brown mt-2 mb-3 leading-tight",
                                children: [
                                    "Moments at ",
                                    /*#__PURE__*/ _jsxDEV("span", {
                                        "data-lov-id": "src/components/GallerySection.tsx:50:23",
                                        "data-lov-name": "span",
                                        "data-component-path": "src/components/GallerySection.tsx",
                                        "data-component-line": "50",
                                        "data-component-file": "GallerySection.tsx",
                                        "data-component-name": "span",
                                        "data-component-content": "%7B%22text%22%3A%22SJRPS-HBR%22%2C%22className%22%3A%22text-indian-green%22%7D",
                                        className: "text-indian-green",
                                        children: "SJRPS-HBR"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/components/GallerySection.tsx",
                                        lineNumber: 50,
                                        columnNumber: 24
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/components/GallerySection.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV("p", {
                                "data-lov-id": "src/components/GallerySection.tsx:52:10",
                                "data-lov-name": "p",
                                "data-component-path": "src/components/GallerySection.tsx",
                                "data-component-line": "52",
                                "data-component-file": "GallerySection.tsx",
                                "data-component-name": "p",
                                "data-component-content": "%7B%22text%22%3A%22A%20glimpse%20into%20the%20vibrant%20life%20on%20our%20campus.%22%2C%22className%22%3A%22text-base%20text-elegant-light%22%7D",
                                className: "text-base text-elegant-light",
                                children: "A glimpse into the vibrant life on our campus."
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/components/GallerySection.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/sjrsh916/public_html/src/components/GallerySection.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/components/GallerySection.tsx:55:8",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/GallerySection.tsx",
                        "data-component-line": "55",
                        "data-component-file": "GallerySection.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22grid%20grid-cols-2%20md%3Agrid-cols-3%20lg%3Agrid-cols-4%20gap-4%22%7D",
                        className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
                        children: images.map((src, i)=>/*#__PURE__*/ _jsxDEV("button", {
                                "data-lov-id": "src/components/GallerySection.tsx:57:12",
                                "data-lov-name": "button",
                                "data-component-path": "src/components/GallerySection.tsx",
                                "data-component-line": "57",
                                "data-component-file": "GallerySection.tsx",
                                "data-component-name": "button",
                                "data-component-content": "%7B%22className%22%3A%22group%20relative%20aspect-%5B4%2F3%5D%20overflow-hidden%20rounded-xl%20shadow-md%20hover%3Ashadow-xl%20transition-all%20duration-300%22%7D",
                                onClick: ()=>setOpenIndex(i),
                                className: "group relative aspect-[4/3] overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("img", {
                                        "data-lov-id": "src/components/GallerySection.tsx:62:14",
                                        "data-lov-name": "img",
                                        "data-component-path": "src/components/GallerySection.tsx",
                                        "data-component-line": "62",
                                        "data-component-file": "GallerySection.tsx",
                                        "data-component-name": "img",
                                        "data-component-content": "%7B%22className%22%3A%22w-full%20h-full%20object-cover%20transition-transform%20duration-500%20group-hover%3Ascale-110%22%7D",
                                        src: src,
                                        alt: `Gallery ${i + 1}`,
                                        className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/components/GallerySection.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        "data-lov-id": "src/components/GallerySection.tsx:67:14",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/components/GallerySection.tsx",
                                        "data-component-line": "67",
                                        "data-component-file": "GallerySection.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22className%22%3A%22absolute%20inset-0%20bg-indian-green%2F0%20group-hover%3Abg-indian-green%2F30%20transition-colors%20duration-300%22%7D",
                                        className: "absolute inset-0 bg-indian-green/0 group-hover:bg-indian-green/30 transition-colors duration-300"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/components/GallerySection.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "/home/sjrsh916/public_html/src/components/GallerySection.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/components/GallerySection.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/components/GallerySection.tsx:72:8",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/GallerySection.tsx",
                        "data-component-line": "72",
                        "data-component-file": "GallerySection.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22text-center%20mt-10%22%7D",
                        className: "text-center mt-10",
                        children: /*#__PURE__*/ _jsxDEV(Button, {
                            "data-lov-id": "src/components/GallerySection.tsx:73:10",
                            "data-lov-name": "Button",
                            "data-component-path": "src/components/GallerySection.tsx",
                            "data-component-line": "73",
                            "data-component-file": "GallerySection.tsx",
                            "data-component-name": "Button",
                            "data-component-content": "%7B%22className%22%3A%22bg-indian-green%20hover%3Abg-indian-green%2F90%20text-white%20px-8%22%7D",
                            asChild: true,
                            className: "bg-indian-green hover:bg-indian-green/90 text-white px-8",
                            children: /*#__PURE__*/ _jsxDEV(Link, {
                                "data-lov-id": "src/components/GallerySection.tsx:74:12",
                                "data-lov-name": "Link",
                                "data-component-path": "src/components/GallerySection.tsx",
                                "data-component-line": "74",
                                "data-component-file": "GallerySection.tsx",
                                "data-component-name": "Link",
                                "data-component-content": "%7B%22text%22%3A%22View%20More%22%7D",
                                to: "/gallery/photos",
                                children: [
                                    "View More",
                                    /*#__PURE__*/ _jsxDEV(ChevronRight, {
                                        "data-lov-id": "src/components/GallerySection.tsx:76:14",
                                        "data-lov-name": "ChevronRight",
                                        "data-component-path": "src/components/GallerySection.tsx",
                                        "data-component-line": "76",
                                        "data-component-file": "GallerySection.tsx",
                                        "data-component-name": "ChevronRight",
                                        "data-component-content": "%7B%22className%22%3A%22ml-1%20h-4%20w-4%22%7D",
                                        className: "ml-1 h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/components/GallerySection.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/components/GallerySection.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/GallerySection.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/components/GallerySection.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/sjrsh916/public_html/src/components/GallerySection.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            openIndex !== null && /*#__PURE__*/ _jsxDEV("div", {
                "data-lov-id": "src/components/GallerySection.tsx:83:8",
                "data-lov-name": "div",
                "data-component-path": "src/components/GallerySection.tsx",
                "data-component-line": "83",
                "data-component-file": "GallerySection.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22fixed%20inset-0%20z-%5B100%5D%20bg-black%2F90%20flex%20items-center%20justify-center%20p-4%22%7D",
                className: "fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4",
                onClick: close,
                children: [
                    /*#__PURE__*/ _jsxDEV("button", {
                        "data-lov-id": "src/components/GallerySection.tsx:87:10",
                        "data-lov-name": "button",
                        "data-component-path": "src/components/GallerySection.tsx",
                        "data-component-line": "87",
                        "data-component-file": "GallerySection.tsx",
                        "data-component-name": "button",
                        "data-component-content": "%7B%22className%22%3A%22absolute%20top-4%20right-4%20bg-indian-green%20hover%3Abg-indian-green%2F90%20text-white%20w-10%20h-10%20rounded-full%20flex%20items-center%20justify-center%22%7D",
                        onClick: (e)=>{
                            e.stopPropagation();
                            close();
                        },
                        className: "absolute top-4 right-4 bg-indian-green hover:bg-indian-green/90 text-white w-10 h-10 rounded-full flex items-center justify-center",
                        "aria-label": "Close",
                        children: /*#__PURE__*/ _jsxDEV(X, {
                            "data-lov-id": "src/components/GallerySection.tsx:92:12",
                            "data-lov-name": "X",
                            "data-component-path": "src/components/GallerySection.tsx",
                            "data-component-line": "92",
                            "data-component-file": "GallerySection.tsx",
                            "data-component-name": "X",
                            "data-component-content": "%7B%22className%22%3A%22h-5%20w-5%22%7D",
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/GallerySection.tsx",
                            lineNumber: 92,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/components/GallerySection.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("button", {
                        "data-lov-id": "src/components/GallerySection.tsx:94:10",
                        "data-lov-name": "button",
                        "data-component-path": "src/components/GallerySection.tsx",
                        "data-component-line": "94",
                        "data-component-file": "GallerySection.tsx",
                        "data-component-name": "button",
                        "data-component-content": "%7B%22className%22%3A%22absolute%20left-4%20top-1%2F2%20-translate-y-1%2F2%20bg-indian-green%20hover%3Abg-indian-green%2F90%20text-white%20w-10%20h-10%20rounded-full%20flex%20items-center%20justify-center%22%7D",
                        onClick: (e)=>{
                            e.stopPropagation();
                            prev();
                        },
                        className: "absolute left-4 top-1/2 -translate-y-1/2 bg-indian-green hover:bg-indian-green/90 text-white w-10 h-10 rounded-full flex items-center justify-center",
                        "aria-label": "Previous",
                        children: /*#__PURE__*/ _jsxDEV(ChevronLeft, {
                            "data-lov-id": "src/components/GallerySection.tsx:99:12",
                            "data-lov-name": "ChevronLeft",
                            "data-component-path": "src/components/GallerySection.tsx",
                            "data-component-line": "99",
                            "data-component-file": "GallerySection.tsx",
                            "data-component-name": "ChevronLeft",
                            "data-component-content": "%7B%22className%22%3A%22h-5%20w-5%22%7D",
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/GallerySection.tsx",
                            lineNumber: 99,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/components/GallerySection.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("img", {
                        "data-lov-id": "src/components/GallerySection.tsx:101:10",
                        "data-lov-name": "img",
                        "data-component-path": "src/components/GallerySection.tsx",
                        "data-component-line": "101",
                        "data-component-file": "GallerySection.tsx",
                        "data-component-name": "img",
                        "data-component-content": "%7B%22className%22%3A%22max-w-%5B92vw%5D%20max-h-%5B85vh%5D%20object-contain%20rounded-lg%20shadow-2xl%22%7D",
                        src: images[openIndex],
                        alt: `Gallery ${openIndex + 1}`,
                        onClick: (e)=>e.stopPropagation(),
                        className: "max-w-[92vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/components/GallerySection.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("button", {
                        "data-lov-id": "src/components/GallerySection.tsx:107:10",
                        "data-lov-name": "button",
                        "data-component-path": "src/components/GallerySection.tsx",
                        "data-component-line": "107",
                        "data-component-file": "GallerySection.tsx",
                        "data-component-name": "button",
                        "data-component-content": "%7B%22className%22%3A%22absolute%20right-4%20top-1%2F2%20-translate-y-1%2F2%20bg-indian-green%20hover%3Abg-indian-green%2F90%20text-white%20w-10%20h-10%20rounded-full%20flex%20items-center%20justify-center%22%7D",
                        onClick: (e)=>{
                            e.stopPropagation();
                            next();
                        },
                        className: "absolute right-4 top-1/2 -translate-y-1/2 bg-indian-green hover:bg-indian-green/90 text-white w-10 h-10 rounded-full flex items-center justify-center",
                        "aria-label": "Next",
                        children: /*#__PURE__*/ _jsxDEV(ChevronRight, {
                            "data-lov-id": "src/components/GallerySection.tsx:112:12",
                            "data-lov-name": "ChevronRight",
                            "data-component-path": "src/components/GallerySection.tsx",
                            "data-component-line": "112",
                            "data-component-file": "GallerySection.tsx",
                            "data-component-name": "ChevronRight",
                            "data-component-content": "%7B%22className%22%3A%22h-5%20w-5%22%7D",
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/GallerySection.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/components/GallerySection.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/sjrsh916/public_html/src/components/GallerySection.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/sjrsh916/public_html/src/components/GallerySection.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
};
_s(GallerySection, "K0ClvBPJW9/ogd0NDREA7tQ57TA=");
_c = GallerySection;
export default GallerySection;
var _c;
$RefreshReg$(_c, "GallerySection");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/components/GallerySection.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/components/GallerySection.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLFNBQVNBLFFBQVEsRUFBRUMsU0FBUyxFQUFFQyxXQUFXLFFBQVEsUUFBTztBQUN4RCxTQUFTQyxNQUFNLFFBQVEseUJBQXdCO0FBQy9DLFNBQVNDLElBQUksUUFBUSxtQkFBa0I7QUFDdkMsU0FBU0MsWUFBWSxFQUFFQyxXQUFXLEVBQUVDLENBQUMsUUFBUSxlQUFjO0FBRTNELE9BQU9DLFFBQVEsbUJBQWtCO0FBQ2pDLE9BQU9DLFFBQVEsbUJBQWtCO0FBQ2pDLE9BQU9DLFFBQVEsbUJBQWtCO0FBQ2pDLE9BQU9DLFFBQVEsbUJBQWtCO0FBQ2pDLE9BQU9DLFFBQVEsbUJBQWtCO0FBQ2pDLE9BQU9DLFFBQVEsbUJBQWtCO0FBQ2pDLE9BQU9DLFFBQVEsbUJBQWtCO0FBQ2pDLE9BQU9DLFFBQVEsbUJBQWtCO0FBRWpDLE1BQU1DLGlCQUFpQjs7SUFDckIsTUFBTUMsU0FBUztRQUFDVDtRQUFJQztRQUFJQztRQUFJQztRQUFJQztRQUFJQztRQUFJQztRQUFJQztLQUFHO0lBQy9DLE1BQU0sQ0FBQ0csV0FBV0MsYUFBYSxHQUFHbkIsU0FBd0I7SUFFMUQsTUFBTW9CLFFBQVFsQixZQUFZLElBQU1pQixhQUFhLE9BQU8sRUFBRTtJQUN0RCxNQUFNRSxPQUFPbkIsWUFDWCxJQUFNaUIsYUFBYSxDQUFDRyxJQUFPQSxNQUFNLE9BQU8sT0FBTyxBQUFDQSxLQUFJLElBQUlMLE9BQU9NLE1BQU0sQUFBRCxJQUFLTixPQUFPTSxNQUFNLEdBQ3RGO1FBQUNOLE9BQU9NLE1BQU07S0FBQTtJQUVoQixNQUFNQyxPQUFPdEIsWUFDWCxJQUFNaUIsYUFBYSxDQUFDRyxJQUFPQSxNQUFNLE9BQU8sT0FBTyxBQUFDQSxLQUFJLEtBQUtMLE9BQU9NLE1BQU0sR0FDdEU7UUFBQ04sT0FBT00sTUFBTTtLQUFBO0lBR2hCdEIsVUFBVTtRQUNSLElBQUlpQixjQUFjLE1BQU07UUFDeEIsTUFBTU8sUUFBUSxDQUFDQztZQUNiLElBQUlBLEVBQUVDLEdBQUcsS0FBSyxVQUFVUDtZQUN4QixJQUFJTSxFQUFFQyxHQUFHLEtBQUssYUFBYU47WUFDM0IsSUFBSUssRUFBRUMsR0FBRyxLQUFLLGNBQWNIO1FBQzlCO1FBQ0FJLE9BQU9DLGdCQUFnQixDQUFDLFdBQVdKO1FBQ25DSyxTQUFTQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsUUFBUSxHQUFHO1FBQy9CLE9BQU87WUFDTEwsT0FBT00sbUJBQW1CLENBQUMsV0FBV1Q7WUFDdENLLFNBQVNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxRQUFRLEdBQUc7UUFDakM7SUFDRixHQUFHO1FBQUNmO1FBQVdFO1FBQU9DO1FBQU1HO0tBQUs7SUFFakMscUJBQ0UsUUFBQ1c7UUFBTUMsZUFBQTtRQUFBQyxpQkFBQTtRQUFBQyx1QkFBQTtRQUFBQyx1QkFBQTtRQUFBQyx1QkFBQTtRQUFBQyx1QkFBQTtRQUFBQywwQkFBQTtRQUFFQyxXQUFVOzswQkFDakIsUUFBQ0M7Z0JBQUVSLGVBQUE7Z0JBQUFDLGlCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsMEJBQUE7Z0JBQUVDLFdBQVU7O2tDQUNiLFFBQUNDO3dCQUFFUixlQUFBO3dCQUFBQyxpQkFBQTt3QkFBQUMsdUJBQUE7d0JBQUFDLHVCQUFBO3dCQUFBQyx1QkFBQTt3QkFBQUMsdUJBQUE7d0JBQUFDLDBCQUFBO3dCQUFFQyxXQUFVOzswQ0FDYixRQUFDRTtnQ0FBR1QsZUFBQTtnQ0FBQUMsaUJBQUE7Z0NBQUFDLHVCQUFBO2dDQUFBQyx1QkFBQTtnQ0FBQUMsdUJBQUE7Z0NBQUFDLHVCQUFBO2dDQUFBQywwQkFBQTtnQ0FBRUMsV0FBVTswQ0FBcUU7Ozs7OzswQ0FDckYsUUFBQ0c7Z0NBQUNWLGVBQUE7Z0NBQUFDLGlCQUFBO2dDQUFBQyx1QkFBQTtnQ0FBQUMsdUJBQUE7Z0NBQUFDLHVCQUFBO2dDQUFBQyx1QkFBQTtnQ0FBQUMsMEJBQUE7Z0NBQUVDLFdBQVU7O29DQUEwRTtrREFDM0UsUUFBQ0U7d0NBQUdULGVBQUE7d0NBQUFDLGlCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLHVCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsMEJBQUE7d0NBQUVDLFdBQVU7a0RBQW9COzs7Ozs7Ozs7Ozs7MENBRWpELFFBQUNJO2dDQUFBWCxlQUFBO2dDQUFBQyxpQkFBQTtnQ0FBQUMsdUJBQUE7Z0NBQUFDLHVCQUFBO2dDQUFBQyx1QkFBQTtnQ0FBQUMsdUJBQUE7Z0NBQUFDLDBCQUFBO2dDQUFFQyxXQUFVOzBDQUErQjs7Ozs7Ozs7Ozs7O2tDQUc5QyxRQUFDQzt3QkFBRVIsZUFBQTt3QkFBQUMsaUJBQUE7d0JBQUFDLHVCQUFBO3dCQUFBQyx1QkFBQTt3QkFBQUMsdUJBQUE7d0JBQUFDLHVCQUFBO3dCQUFBQywwQkFBQTt3QkFBRUMsV0FBVTtrQ0FDWjFCLE9BQU8rQixHQUFHLENBQUMsQ0FBQ0MsS0FBSzNCLGtCQUNoQixRQUFDNEI7Z0NBQUtkLGVBQUE7Z0NBQUFDLGlCQUFBO2dDQUFBQyx1QkFBQTtnQ0FBQUMsdUJBQUE7Z0NBQUFDLHVCQUFBO2dDQUFBQyx1QkFBQTtnQ0FBQUMsMEJBQUE7Z0NBRUpTLFNBQVMsSUFBTWhDLGFBQWFHO2dDQUM1QnFCLFdBQVU7O2tEQUVWLFFBQUNTO3dDQUFFaEIsZUFBQTt3Q0FBQUMsaUJBQUE7d0NBQUFDLHVCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLHVCQUFBO3dDQUFBQywwQkFBQTt3Q0FDRE8sS0FBS0E7d0NBQ0xJLEtBQUssQ0FBQyxRQUFRLEVBQUUvQixJQUFJLEdBQUc7d0NBQ3ZCcUIsV0FBVTs7Ozs7O2tEQUVaLFFBQUNDO3dDQUFFUixlQUFBO3dDQUFBQyxpQkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLHVCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLDBCQUFBO3dDQUFFQyxXQUFVOzs7Ozs7OytCQVRWckI7Ozs7Ozs7Ozs7a0NBY1gsUUFBQ3NCO3dCQUFFUixlQUFBO3dCQUFBQyxpQkFBQTt3QkFBQUMsdUJBQUE7d0JBQUFDLHVCQUFBO3dCQUFBQyx1QkFBQTt3QkFBQUMsdUJBQUE7d0JBQUFDLDBCQUFBO3dCQUFFQyxXQUFVO2tDQUNiLHNCQUFDeEM7NEJBQUtpQyxlQUFBOzRCQUFBQyxpQkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLDBCQUFBOzRCQUFFWSxPQUFPOzRCQUFDWCxXQUFVO3NDQUN4QixzQkFBQ3ZDO2dDQUFHZ0MsZUFBQTtnQ0FBQUMsaUJBQUE7Z0NBQUFDLHVCQUFBO2dDQUFBQyx1QkFBQTtnQ0FBQUMsdUJBQUE7Z0NBQUFDLHVCQUFBO2dDQUFBQywwQkFBQTtnQ0FBRWEsSUFBRzs7b0NBQWlCO2tEQUV4QixRQUFDbEQ7d0NBQVcrQixlQUFBO3dDQUFBQyxpQkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLHVCQUFBO3dDQUFBQyx1QkFBQTt3Q0FBQUMsdUJBQUE7d0NBQUFDLDBCQUFBO3dDQUFFQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTS9CekIsY0FBYyxzQkFDYixRQUFDMEI7Z0JBQUVSLGVBQUE7Z0JBQUFDLGlCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsMEJBQUE7Z0JBQ0RDLFdBQVU7Z0JBQ1ZRLFNBQVMvQjs7a0NBRVQsUUFBQzhCO3dCQUFLZCxlQUFBO3dCQUFBQyxpQkFBQTt3QkFBQUMsdUJBQUE7d0JBQUFDLHVCQUFBO3dCQUFBQyx1QkFBQTt3QkFBQUMsdUJBQUE7d0JBQUFDLDBCQUFBO3dCQUNKUyxTQUFTLENBQUN6Qjs0QkFBUUEsRUFBRThCLGVBQWU7NEJBQUlwQzt3QkFBUzt3QkFDaER1QixXQUFVO3dCQUNWYyxjQUFXO2tDQUVYLHNCQUFDbEQ7NEJBQUE2QixlQUFBOzRCQUFBQyxpQkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLDBCQUFBOzRCQUFFQyxXQUFVOzs7Ozs7Ozs7OztrQ0FFZixRQUFDTzt3QkFBS2QsZUFBQTt3QkFBQUMsaUJBQUE7d0JBQUFDLHVCQUFBO3dCQUFBQyx1QkFBQTt3QkFBQUMsdUJBQUE7d0JBQUFDLHVCQUFBO3dCQUFBQywwQkFBQTt3QkFDSlMsU0FBUyxDQUFDekI7NEJBQVFBLEVBQUU4QixlQUFlOzRCQUFJbkM7d0JBQVE7d0JBQy9Dc0IsV0FBVTt3QkFDVmMsY0FBVztrQ0FFWCxzQkFBQ25EOzRCQUFVOEIsZUFBQTs0QkFBQUMsaUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQywwQkFBQTs0QkFBRUMsV0FBVTs7Ozs7Ozs7Ozs7a0NBRXpCLFFBQUNTO3dCQUFFaEIsZUFBQTt3QkFBQUMsaUJBQUE7d0JBQUFDLHVCQUFBO3dCQUFBQyx1QkFBQTt3QkFBQUMsdUJBQUE7d0JBQUFDLHVCQUFBO3dCQUFBQywwQkFBQTt3QkFDRE8sS0FBS2hDLE1BQU0sQ0FBQ0MsVUFBVTt3QkFDdEJtQyxLQUFLLENBQUMsUUFBUSxFQUFFbkMsWUFBWSxHQUFHO3dCQUMvQmlDLFNBQVMsQ0FBQ3pCLElBQU1BLEVBQUU4QixlQUFlO3dCQUNqQ2IsV0FBVTs7Ozs7O2tDQUVaLFFBQUNPO3dCQUFLZCxlQUFBO3dCQUFBQyxpQkFBQTt3QkFBQUMsdUJBQUE7d0JBQUFDLHVCQUFBO3dCQUFBQyx1QkFBQTt3QkFBQUMsdUJBQUE7d0JBQUFDLDBCQUFBO3dCQUNKUyxTQUFTLENBQUN6Qjs0QkFBUUEsRUFBRThCLGVBQWU7NEJBQUloQzt3QkFBUTt3QkFDL0NtQixXQUFVO3dCQUNWYyxjQUFXO2tDQUVYLHNCQUFDcEQ7NEJBQVcrQixlQUFBOzRCQUFBQyxpQkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLDBCQUFBOzRCQUFFQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1wQztHQXZHTTNCO0tBQUFBO0FBeUdOLGVBQWVBLGVBQWMiLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNhbGxiYWNrIiwiQnV0dG9uIiwiTGluayIsIkNoZXZyb25SaWdodCIsIkNoZXZyb25MZWZ0IiwiWCIsImcxIiwiZzIiLCJnMyIsImc0IiwiZzUiLCJnNiIsImc3IiwiZzgiLCJHYWxsZXJ5U2VjdGlvbiIsImltYWdlcyIsIm9wZW5JbmRleCIsInNldE9wZW5JbmRleCIsImNsb3NlIiwicHJldiIsImkiLCJsZW5ndGgiLCJuZXh0Iiwib25LZXkiLCJlIiwia2V5Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2VjdGlvbiIsImRhdGEtbG92LWlkIiwiZGF0YS1sb3YtbmFtZSIsImRhdGEtY29tcG9uZW50LXBhdGgiLCJkYXRhLWNvbXBvbmVudC1saW5lIiwiZGF0YS1jb21wb25lbnQtZmlsZSIsImRhdGEtY29tcG9uZW50LW5hbWUiLCJkYXRhLWNvbXBvbmVudC1jb250ZW50IiwiY2xhc3NOYW1lIiwiZGl2Iiwic3BhbiIsImgyIiwicCIsIm1hcCIsInNyYyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpbWciLCJhbHQiLCJhc0NoaWxkIiwidG8iLCJzdG9wUHJvcGFnYXRpb24iLCJhcmlhLWxhYmVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkdhbGxlcnlTZWN0aW9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgQ2hldnJvblJpZ2h0LCBDaGV2cm9uTGVmdCwgWCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcblxuaW1wb3J0IGcxIGZyb20gXCJAL2Fzc2V0cy9wZzEuanBnXCI7XG5pbXBvcnQgZzIgZnJvbSBcIkAvYXNzZXRzL3BnMi5qcGdcIjtcbmltcG9ydCBnMyBmcm9tIFwiQC9hc3NldHMvcGczLmpwZ1wiO1xuaW1wb3J0IGc0IGZyb20gXCJAL2Fzc2V0cy9wZzQuanBnXCI7XG5pbXBvcnQgZzUgZnJvbSBcIkAvYXNzZXRzL3BnNS5qcGdcIjtcbmltcG9ydCBnNiBmcm9tIFwiQC9hc3NldHMvcGc2LmpwZ1wiO1xuaW1wb3J0IGc3IGZyb20gXCJAL2Fzc2V0cy9wZzcuanBnXCI7XG5pbXBvcnQgZzggZnJvbSBcIkAvYXNzZXRzL3BnOC5qcGdcIjtcblxuY29uc3QgR2FsbGVyeVNlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGltYWdlcyA9IFtnMSwgZzIsIGczLCBnNCwgZzUsIGc2LCBnNywgZzhdO1xuICBjb25zdCBbb3BlbkluZGV4LCBzZXRPcGVuSW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgY2xvc2UgPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRPcGVuSW5kZXgobnVsbCksIFtdKTtcbiAgY29uc3QgcHJldiA9IHVzZUNhbGxiYWNrKFxuICAgICgpID0+IHNldE9wZW5JbmRleCgoaSkgPT4gKGkgPT09IG51bGwgPyBudWxsIDogKGkgLSAxICsgaW1hZ2VzLmxlbmd0aCkgJSBpbWFnZXMubGVuZ3RoKSksXG4gICAgW2ltYWdlcy5sZW5ndGhdXG4gICk7XG4gIGNvbnN0IG5leHQgPSB1c2VDYWxsYmFjayhcbiAgICAoKSA9PiBzZXRPcGVuSW5kZXgoKGkpID0+IChpID09PSBudWxsID8gbnVsbCA6IChpICsgMSkgJSBpbWFnZXMubGVuZ3RoKSksXG4gICAgW2ltYWdlcy5sZW5ndGhdXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAob3BlbkluZGV4ID09PSBudWxsKSByZXR1cm47XG4gICAgY29uc3Qgb25LZXkgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSBjbG9zZSgpO1xuICAgICAgaWYgKGUua2V5ID09PSBcIkFycm93TGVmdFwiKSBwcmV2KCk7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dSaWdodFwiKSBuZXh0KCk7XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgb25LZXkpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgb25LZXkpO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiXCI7XG4gICAgfTtcbiAgfSwgW29wZW5JbmRleCwgY2xvc2UsIHByZXYsIG5leHRdKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTE0IGJnLXNsYXRlLTUwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0xMCBtYXgtdy0zeGwgbXgtYXV0b1wiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMmVtXSB0ZXh0LWluZGlhbi1ncmVlblwiPkdhbGxlcnk8L3NwYW4+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LXNjaG9vbC1icm93biBtdC0yIG1iLTMgbGVhZGluZy10aWdodFwiPlxuICAgICAgICAgICAgTW9tZW50cyBhdCA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWluZGlhbi1ncmVlblwiPlNKUlBTLUhCUjwvc3Bhbj5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSB0ZXh0LWVsZWdhbnQtbGlnaHRcIj5BIGdsaW1wc2UgaW50byB0aGUgdmlicmFudCBsaWZlIG9uIG91ciBjYW1wdXMuPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTQgZ2FwLTRcIj5cbiAgICAgICAgICB7aW1hZ2VzLm1hcCgoc3JjLCBpKSA9PiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3BlbkluZGV4KGkpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCByZWxhdGl2ZSBhc3BlY3QtWzQvM10gb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQteGwgc2hhZG93LW1kIGhvdmVyOnNoYWRvdy14bCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXtzcmN9XG4gICAgICAgICAgICAgICAgYWx0PXtgR2FsbGVyeSAke2kgKyAxfWB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tNTAwIGdyb3VwLWhvdmVyOnNjYWxlLTExMFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1pbmRpYW4tZ3JlZW4vMCBncm91cC1ob3ZlcjpiZy1pbmRpYW4tZ3JlZW4vMzAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwXCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTEwXCI+XG4gICAgICAgICAgPEJ1dHRvbiBhc0NoaWxkIGNsYXNzTmFtZT1cImJnLWluZGlhbi1ncmVlbiBob3ZlcjpiZy1pbmRpYW4tZ3JlZW4vOTAgdGV4dC13aGl0ZSBweC04XCI+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9nYWxsZXJ5L3Bob3Rvc1wiPlxuICAgICAgICAgICAgICBWaWV3IE1vcmVcbiAgICAgICAgICAgICAgPENoZXZyb25SaWdodCBjbGFzc05hbWU9XCJtbC0xIGgtNCB3LTRcIiAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7b3BlbkluZGV4ICE9PSBudWxsICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgei1bMTAwXSBiZy1ibGFjay85MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTRcIlxuICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlfVxuICAgICAgICA+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHsgZS5zdG9wUHJvcGFnYXRpb24oKTsgY2xvc2UoKTsgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC00IHJpZ2h0LTQgYmctaW5kaWFuLWdyZWVuIGhvdmVyOmJnLWluZGlhbi1ncmVlbi85MCB0ZXh0LXdoaXRlIHctMTAgaC0xMCByb3VuZGVkLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8WCBjbGFzc05hbWU9XCJoLTUgdy01XCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4geyBlLnN0b3BQcm9wYWdhdGlvbigpOyBwcmV2KCk7IH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTQgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yIGJnLWluZGlhbi1ncmVlbiBob3ZlcjpiZy1pbmRpYW4tZ3JlZW4vOTAgdGV4dC13aGl0ZSB3LTEwIGgtMTAgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJQcmV2aW91c1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENoZXZyb25MZWZ0IGNsYXNzTmFtZT1cImgtNSB3LTVcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17aW1hZ2VzW29wZW5JbmRleF19XG4gICAgICAgICAgICBhbHQ9e2BHYWxsZXJ5ICR7b3BlbkluZGV4ICsgMX1gfVxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYXgtdy1bOTJ2d10gbWF4LWgtWzg1dmhdIG9iamVjdC1jb250YWluIHJvdW5kZWQtbGcgc2hhZG93LTJ4bFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4geyBlLnN0b3BQcm9wYWdhdGlvbigpOyBuZXh0KCk7IH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC00IHRvcC0xLzIgLXRyYW5zbGF0ZS15LTEvMiBiZy1pbmRpYW4tZ3JlZW4gaG92ZXI6YmctaW5kaWFuLWdyZWVuLzkwIHRleHQtd2hpdGUgdy0xMCBoLTEwIHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiTmV4dFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENoZXZyb25SaWdodCBjbGFzc05hbWU9XCJoLTUgdy01XCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnlTZWN0aW9uO1xuIl0sImZpbGUiOiIvaG9tZS9zanJzaDkxNi9wdWJsaWNfaHRtbC9zcmMvY29tcG9uZW50cy9HYWxsZXJ5U2VjdGlvbi50c3gifQ==