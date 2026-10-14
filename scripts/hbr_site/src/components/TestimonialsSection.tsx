import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/TestimonialsSection.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/components/TestimonialsSection.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "/src/components/ui/carousel.tsx";
import { Quote } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
import Autoplay from "/node_modules/.vite/deps/embla-carousel-autoplay.js?v=5efa796b";
import __vite__cjsImport6_react from "/node_modules/.vite/deps/react.js?v=5efa796b"; const useEffect = __vite__cjsImport6_react["useEffect"]; const useMemo = __vite__cjsImport6_react["useMemo"]; const useState = __vite__cjsImport6_react["useState"];
import { getPublicContent } from "/src/lib/api.ts";
import { mergeTestimonialItems } from "/src/lib/testimonialContent.ts";
const TestimonialsSection = ()=>{
    _s();
    const [adminTestimonials, setAdminTestimonials] = useState([]);
    useEffect(()=>{
        getPublicContent("testimonial").then((result)=>setAdminTestimonials(result.items)).catch(()=>setAdminTestimonials([]));
    }, []);
    const testimonials = useMemo(()=>mergeTestimonialItems(adminTestimonials), [
        adminTestimonials
    ]);
    return /*#__PURE__*/ _jsxDEV("section", {
        "data-lov-id": "src/components/TestimonialsSection.tsx:21:4",
        "data-lov-name": "section",
        "data-component-path": "src/components/TestimonialsSection.tsx",
        "data-component-line": "21",
        "data-component-file": "TestimonialsSection.tsx",
        "data-component-name": "section",
        "data-component-content": "%7B%22className%22%3A%22py-14%20bg-gradient-to-br%20from-slate-50%20to-white%22%7D",
        className: "py-14 bg-gradient-to-br from-slate-50 to-white",
        children: /*#__PURE__*/ _jsxDEV("div", {
            "data-lov-id": "src/components/TestimonialsSection.tsx:22:6",
            "data-lov-name": "div",
            "data-component-path": "src/components/TestimonialsSection.tsx",
            "data-component-line": "22",
            "data-component-file": "TestimonialsSection.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/components/TestimonialsSection.tsx:23:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/TestimonialsSection.tsx",
                    "data-component-line": "23",
                    "data-component-file": "TestimonialsSection.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22text-center%20mb-10%20max-w-3xl%20mx-auto%22%7D",
                    className: "text-center mb-10 max-w-3xl mx-auto",
                    children: [
                        /*#__PURE__*/ _jsxDEV("span", {
                            "data-lov-id": "src/components/TestimonialsSection.tsx:24:10",
                            "data-lov-name": "span",
                            "data-component-path": "src/components/TestimonialsSection.tsx",
                            "data-component-line": "24",
                            "data-component-file": "TestimonialsSection.tsx",
                            "data-component-name": "span",
                            "data-component-content": "%7B%22text%22%3A%22Testimonials%22%2C%22className%22%3A%22text-xs%20font-semibold%20uppercase%20tracking-%5B0.2em%5D%20text-indian-green%22%7D",
                            className: "text-xs font-semibold uppercase tracking-[0.2em] text-indian-green",
                            children: "Testimonials"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/TestimonialsSection.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("h2", {
                            "data-lov-id": "src/components/TestimonialsSection.tsx:25:10",
                            "data-lov-name": "h2",
                            "data-component-path": "src/components/TestimonialsSection.tsx",
                            "data-component-line": "25",
                            "data-component-file": "TestimonialsSection.tsx",
                            "data-component-name": "h2",
                            "data-component-content": "%7B%22text%22%3A%22What%20Parents%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20text-school-brown%20mt-2%20leading-tight%22%7D",
                            className: "text-3xl md:text-4xl font-bold text-school-brown mt-2 leading-tight",
                            children: [
                                "What Parents ",
                                /*#__PURE__*/ _jsxDEV("span", {
                                    "data-lov-id": "src/components/TestimonialsSection.tsx:26:25",
                                    "data-lov-name": "span",
                                    "data-component-path": "src/components/TestimonialsSection.tsx",
                                    "data-component-line": "26",
                                    "data-component-file": "TestimonialsSection.tsx",
                                    "data-component-name": "span",
                                    "data-component-content": "%7B%22text%22%3A%22Say%22%2C%22className%22%3A%22text-indian-green%22%7D",
                                    className: "text-indian-green",
                                    children: "Say"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/TestimonialsSection.tsx",
                                    lineNumber: 26,
                                    columnNumber: 26
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/components/TestimonialsSection.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/components/TestimonialsSection.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV(Carousel, {
                    "data-lov-id": "src/components/TestimonialsSection.tsx:30:8",
                    "data-lov-name": "Carousel",
                    "data-component-path": "src/components/TestimonialsSection.tsx",
                    "data-component-line": "30",
                    "data-component-file": "TestimonialsSection.tsx",
                    "data-component-name": "Carousel",
                    "data-component-content": "%7B%22className%22%3A%22w-full%20max-w-5xl%20mx-auto%22%7D",
                    className: "w-full max-w-5xl mx-auto",
                    plugins: [
                        Autoplay({
                            delay: 4500
                        })
                    ],
                    opts: {
                        align: "start",
                        loop: true
                    },
                    children: [
                        /*#__PURE__*/ _jsxDEV(CarouselContent, {
                            "data-lov-id": "src/components/TestimonialsSection.tsx:35:10",
                            "data-lov-name": "CarouselContent",
                            "data-component-path": "src/components/TestimonialsSection.tsx",
                            "data-component-line": "35",
                            "data-component-file": "TestimonialsSection.tsx",
                            "data-component-name": "CarouselContent",
                            "data-component-content": "%7B%22className%22%3A%22-ml-4%20items-stretch%22%7D",
                            className: "-ml-4 items-stretch",
                            children: testimonials.map((t, i)=>/*#__PURE__*/ _jsxDEV(CarouselItem, {
                                    "data-lov-id": "src/components/TestimonialsSection.tsx:37:14",
                                    "data-lov-name": "CarouselItem",
                                    "data-component-path": "src/components/TestimonialsSection.tsx",
                                    "data-component-line": "37",
                                    "data-component-file": "TestimonialsSection.tsx",
                                    "data-component-name": "CarouselItem",
                                    "data-component-content": "%7B%22className%22%3A%22pl-4%20md%3Abasis-1%2F2%20h-auto%22%7D",
                                    className: "pl-4 md:basis-1/2 h-auto",
                                    children: /*#__PURE__*/ _jsxDEV(Card, {
                                        "data-lov-id": "src/components/TestimonialsSection.tsx:38:16",
                                        "data-lov-name": "Card",
                                        "data-component-path": "src/components/TestimonialsSection.tsx",
                                        "data-component-line": "38",
                                        "data-component-file": "TestimonialsSection.tsx",
                                        "data-component-name": "Card",
                                        "data-component-content": "%7B%22className%22%3A%22h-full%20bg-white%20hover%3Ashadow-xl%20transition-all%20duration-300%20border-t-4%20border-indian-green%20flex%20flex-col%22%7D",
                                        className: "h-full bg-white hover:shadow-xl transition-all duration-300 border-t-4 border-indian-green flex flex-col",
                                        children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                            "data-lov-id": "src/components/TestimonialsSection.tsx:39:18",
                                            "data-lov-name": "CardContent",
                                            "data-component-path": "src/components/TestimonialsSection.tsx",
                                            "data-component-line": "39",
                                            "data-component-file": "TestimonialsSection.tsx",
                                            "data-component-name": "CardContent",
                                            "data-component-content": "%7B%22className%22%3A%22p-7%20flex%20flex-col%20flex-1%22%7D",
                                            className: "p-7 flex flex-col flex-1",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV(Quote, {
                                                    "data-lov-id": "src/components/TestimonialsSection.tsx:40:20",
                                                    "data-lov-name": "Quote",
                                                    "data-component-path": "src/components/TestimonialsSection.tsx",
                                                    "data-component-line": "40",
                                                    "data-component-file": "TestimonialsSection.tsx",
                                                    "data-component-name": "Quote",
                                                    "data-component-content": "%7B%22className%22%3A%22h-8%20w-8%20text-indian-green%20mb-3%22%7D",
                                                    className: "h-8 w-8 text-indian-green mb-3"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/TestimonialsSection.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/components/TestimonialsSection.tsx:41:20",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/components/TestimonialsSection.tsx",
                                                    "data-component-line": "41",
                                                    "data-component-file": "TestimonialsSection.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22text%22%3A%22%5C%22%20%5C%22%22%2C%22className%22%3A%22text-elegant-light%20leading-relaxed%20italic%20text-%5B15px%5D%20mb-6%20flex-1%20overflow-hidden%20%5Bdisplay%3A-webkit-box%5D%20%5B-webkit-line-clamp%3A5%5D%20%5B-webkit-box-orient%3Avertical%5D%22%7D",
                                                    className: "text-elegant-light leading-relaxed italic text-[15px] mb-6 flex-1 overflow-hidden [display:-webkit-box] [-webkit-line-clamp:5] [-webkit-box-orient:vertical]",
                                                    children: [
                                                        '"',
                                                        t.quote,
                                                        '"'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/TestimonialsSection.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/components/TestimonialsSection.tsx:44:20",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/components/TestimonialsSection.tsx",
                                                    "data-component-line": "44",
                                                    "data-component-file": "TestimonialsSection.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22mt-auto%20pt-4%20border-t%20flex%20items-center%20gap-4%22%7D",
                                                    className: "mt-auto pt-4 border-t flex items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("img", {
                                                            "data-lov-id": "src/components/TestimonialsSection.tsx:45:22",
                                                            "data-lov-name": "img",
                                                            "data-component-path": "src/components/TestimonialsSection.tsx",
                                                            "data-component-line": "45",
                                                            "data-component-file": "TestimonialsSection.tsx",
                                                            "data-component-name": "img",
                                                            "data-component-content": "%7B%22className%22%3A%22h-14%20w-14%20rounded-full%20object-cover%20ring-2%20ring-indian-green%2F30%20flex-shrink-0%22%7D",
                                                            src: t.image,
                                                            alt: t.name,
                                                            className: "h-14 w-14 rounded-full object-cover ring-2 ring-indian-green/30 flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/components/TestimonialsSection.tsx",
                                                            lineNumber: 45,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            "data-lov-id": "src/components/TestimonialsSection.tsx:50:22",
                                                            "data-lov-name": "div",
                                                            "data-component-path": "src/components/TestimonialsSection.tsx",
                                                            "data-component-line": "50",
                                                            "data-component-file": "TestimonialsSection.tsx",
                                                            "data-component-name": "div",
                                                            "data-component-content": "%7B%7D",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV("h4", {
                                                                    "data-lov-id": "src/components/TestimonialsSection.tsx:51:24",
                                                                    "data-lov-name": "h4",
                                                                    "data-component-path": "src/components/TestimonialsSection.tsx",
                                                                    "data-component-line": "51",
                                                                    "data-component-file": "TestimonialsSection.tsx",
                                                                    "data-component-name": "h4",
                                                                    "data-component-content": "%7B%22className%22%3A%22font-bold%20text-school-brown%20leading-tight%22%7D",
                                                                    className: "font-bold text-school-brown leading-tight",
                                                                    children: t.name
                                                                }, void 0, false, {
                                                                    fileName: "/home/sjrsh916/public_html/src/components/TestimonialsSection.tsx",
                                                                    lineNumber: 51,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV("p", {
                                                                    "data-lov-id": "src/components/TestimonialsSection.tsx:52:24",
                                                                    "data-lov-name": "p",
                                                                    "data-component-path": "src/components/TestimonialsSection.tsx",
                                                                    "data-component-line": "52",
                                                                    "data-component-file": "TestimonialsSection.tsx",
                                                                    "data-component-name": "p",
                                                                    "data-component-content": "%7B%22className%22%3A%22text-elegant-light%20text-sm%20font-normal%20mt-1%22%7D",
                                                                    className: "text-elegant-light text-sm font-normal mt-1",
                                                                    children: t.role
                                                                }, void 0, false, {
                                                                    fileName: "/home/sjrsh916/public_html/src/components/TestimonialsSection.tsx",
                                                                    lineNumber: 52,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/home/sjrsh916/public_html/src/components/TestimonialsSection.tsx",
                                                            lineNumber: 50,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/TestimonialsSection.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/components/TestimonialsSection.tsx",
                                            lineNumber: 39,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/components/TestimonialsSection.tsx",
                                        lineNumber: 38,
                                        columnNumber: 17
                                    }, this)
                                }, i, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/TestimonialsSection.tsx",
                                    lineNumber: 37,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/TestimonialsSection.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV(CarouselPrevious, {
                            "data-lov-id": "src/components/TestimonialsSection.tsx:60:10",
                            "data-lov-name": "CarouselPrevious",
                            "data-component-path": "src/components/TestimonialsSection.tsx",
                            "data-component-line": "60",
                            "data-component-file": "TestimonialsSection.tsx",
                            "data-component-name": "CarouselPrevious",
                            "data-component-content": "%7B%22className%22%3A%22bg-indian-green%20hover%3Abg-indian-green%2F90%20text-white%20border-0%20-left-4%20sm%3A-left-12%22%7D",
                            className: "bg-indian-green hover:bg-indian-green/90 text-white border-0 -left-4 sm:-left-12"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/TestimonialsSection.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV(CarouselNext, {
                            "data-lov-id": "src/components/TestimonialsSection.tsx:61:10",
                            "data-lov-name": "CarouselNext",
                            "data-component-path": "src/components/TestimonialsSection.tsx",
                            "data-component-line": "61",
                            "data-component-file": "TestimonialsSection.tsx",
                            "data-component-name": "CarouselNext",
                            "data-component-content": "%7B%22className%22%3A%22bg-indian-green%20hover%3Abg-indian-green%2F90%20text-white%20border-0%20-right-4%20sm%3A-right-12%22%7D",
                            className: "bg-indian-green hover:bg-indian-green/90 text-white border-0 -right-4 sm:-right-12"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/TestimonialsSection.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/components/TestimonialsSection.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/sjrsh916/public_html/src/components/TestimonialsSection.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/components/TestimonialsSection.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
};
_s(TestimonialsSection, "8Lcx154gL9Uv6DXlpAoywWiPpJk=");
_c = TestimonialsSection;
export default TestimonialsSection;
var _c;
$RefreshReg$(_c, "TestimonialsSection");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/components/TestimonialsSection.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/components/TestimonialsSection.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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QUE7b0VBQUFDLHVCQUFBO29FQUFBQyx1QkFBQTtvRUFBQUMsdUJBQUE7b0VBQUFDLHVCQUFBO29FQUFBQywwQkFBQTtvRUFBRUMsV0FBVTs4RUFBNkNVLEVBQUVRLElBQUk7Ozs7Ozs4RUFDakUsUUFBQ047b0VBQUFuQixlQUFBO29FQUFBQyxpQkFBQTtvRUFBQUMsdUJBQUE7b0VBQUFDLHVCQUFBO29FQUFBQyx1QkFBQTtvRUFBQUMsdUJBQUE7b0VBQUFDLDBCQUFBO29FQUFFQyxXQUFVOzhFQUErQ1UsRUFBRVUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBZnpEVDs7Ozs7Ozs7OztzQ0F1QnZCLFFBQUNuQzs0QkFBZWlCLGVBQUE7NEJBQUFDLGlCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsMEJBQUE7NEJBQUVDLFdBQVU7Ozs7OztzQ0FDNUIsUUFBQ3pCOzRCQUFXa0IsZUFBQTs0QkFBQUMsaUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQywwQkFBQTs0QkFBRUMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEM7R0F6RE1oQjtLQUFBQTtBQTJETixlQUFlQSxvQkFBbUIiLCJuYW1lcyI6WyJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJvdXNlbCIsIkNhcm91c2VsQ29udGVudCIsIkNhcm91c2VsSXRlbSIsIkNhcm91c2VsTmV4dCIsIkNhcm91c2VsUHJldmlvdXMiLCJRdW90ZSIsIkF1dG9wbGF5IiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVN0YXRlIiwiZ2V0UHVibGljQ29udGVudCIsIm1lcmdlVGVzdGltb25pYWxJdGVtcyIsIlRlc3RpbW9uaWFsc1NlY3Rpb24iLCJhZG1pblRlc3RpbW9uaWFscyIsInNldEFkbWluVGVzdGltb25pYWxzIiwidGhlbiIsInJlc3VsdCIsIml0ZW1zIiwiY2F0Y2giLCJ0ZXN0aW1vbmlhbHMiLCJzZWN0aW9uIiwiZGF0YS1sb3YtaWQiLCJkYXRhLWxvdi1uYW1lIiwiZGF0YS1jb21wb25lbnQtcGF0aCIsImRhdGEtY29tcG9uZW50LWxpbmUiLCJkYXRhLWNvbXBvbmVudC1maWxlIiwiZGF0YS1jb21wb25lbnQtbmFtZSIsImRhdGEtY29tcG9uZW50LWNvbnRlbnQiLCJjbGFzc05hbWUiLCJkaXYiLCJzcGFuIiwiaDIiLCJwbHVnaW5zIiwiZGVsYXkiLCJvcHRzIiwiYWxpZ24iLCJsb29wIiwibWFwIiwidCIsImkiLCJwIiwicXVvdGUiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsIm5hbWUiLCJoNCIsInJvbGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiVGVzdGltb25pYWxzU2VjdGlvbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcbmltcG9ydCB7IENhcm91c2VsLCBDYXJvdXNlbENvbnRlbnQsIENhcm91c2VsSXRlbSwgQ2Fyb3VzZWxOZXh0LCBDYXJvdXNlbFByZXZpb3VzIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJvdXNlbFwiO1xuaW1wb3J0IHsgUXVvdGUgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgQXV0b3BsYXkgZnJvbSBcImVtYmxhLWNhcm91c2VsLWF1dG9wbGF5XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnZXRQdWJsaWNDb250ZW50LCB0eXBlIEFkbWluQ29udGVudEl0ZW0gfSBmcm9tIFwiQC9saWIvYXBpXCI7XG5pbXBvcnQgeyBtZXJnZVRlc3RpbW9uaWFsSXRlbXMgfSBmcm9tIFwiQC9saWIvdGVzdGltb25pYWxDb250ZW50XCI7XG5cbmNvbnN0IFRlc3RpbW9uaWFsc1NlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IFthZG1pblRlc3RpbW9uaWFscywgc2V0QWRtaW5UZXN0aW1vbmlhbHNdID0gdXNlU3RhdGU8QWRtaW5Db250ZW50SXRlbVtdPihbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRQdWJsaWNDb250ZW50KFwidGVzdGltb25pYWxcIilcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHNldEFkbWluVGVzdGltb25pYWxzKHJlc3VsdC5pdGVtcykpXG4gICAgICAuY2F0Y2goKCkgPT4gc2V0QWRtaW5UZXN0aW1vbmlhbHMoW10pKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHRlc3RpbW9uaWFscyA9IHVzZU1lbW8oKCkgPT4gbWVyZ2VUZXN0aW1vbmlhbEl0ZW1zKGFkbWluVGVzdGltb25pYWxzKSwgW2FkbWluVGVzdGltb25pYWxzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNCBiZy1ncmFkaWVudC10by1iciBmcm9tLXNsYXRlLTUwIHRvLXdoaXRlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0xMCBtYXgtdy0zeGwgbXgtYXV0b1wiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMmVtXSB0ZXh0LWluZGlhbi1ncmVlblwiPlRlc3RpbW9uaWFsczwvc3Bhbj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgZm9udC1ib2xkIHRleHQtc2Nob29sLWJyb3duIG10LTIgbGVhZGluZy10aWdodFwiPlxuICAgICAgICAgICAgV2hhdCBQYXJlbnRzIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtaW5kaWFuLWdyZWVuXCI+U2F5PC9zcGFuPlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxDYXJvdXNlbFxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy01eGwgbXgtYXV0b1wiXG4gICAgICAgICAgcGx1Z2lucz17W0F1dG9wbGF5KHsgZGVsYXk6IDQ1MDAgfSldfVxuICAgICAgICAgIG9wdHM9e3sgYWxpZ246IFwic3RhcnRcIiwgbG9vcDogdHJ1ZSB9fVxuICAgICAgICA+XG4gICAgICAgICAgPENhcm91c2VsQ29udGVudCBjbGFzc05hbWU9XCItbWwtNCBpdGVtcy1zdHJldGNoXCI+XG4gICAgICAgICAgICB7dGVzdGltb25pYWxzLm1hcCgodCwgaSkgPT4gKFxuICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtIGtleT17aX0gY2xhc3NOYW1lPVwicGwtNCBtZDpiYXNpcy0xLzIgaC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiaC1mdWxsIGJnLXdoaXRlIGhvdmVyOnNoYWRvdy14bCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgYm9yZGVyLXQtNCBib3JkZXItaW5kaWFuLWdyZWVuIGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLTcgZmxleCBmbGV4LWNvbCBmbGV4LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPFF1b3RlIGNsYXNzTmFtZT1cImgtOCB3LTggdGV4dC1pbmRpYW4tZ3JlZW4gbWItM1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZWxlZ2FudC1saWdodCBsZWFkaW5nLXJlbGF4ZWQgaXRhbGljIHRleHQtWzE1cHhdIG1iLTYgZmxleC0xIG92ZXJmbG93LWhpZGRlbiBbZGlzcGxheTotd2Via2l0LWJveF0gWy13ZWJraXQtbGluZS1jbGFtcDo1XSBbLXdlYmtpdC1ib3gtb3JpZW50OnZlcnRpY2FsXVwiPlxuICAgICAgICAgICAgICAgICAgICAgIFwie3QucXVvdGV9XCJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LWF1dG8gcHQtNCBib3JkZXItdCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dC5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17dC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0xNCB3LTE0IHJvdW5kZWQtZnVsbCBvYmplY3QtY292ZXIgcmluZy0yIHJpbmctaW5kaWFuLWdyZWVuLzMwIGZsZXgtc2hyaW5rLTBcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gbGVhZGluZy10aWdodFwiPnt0Lm5hbWV9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZWxlZ2FudC1saWdodCB0ZXh0LXNtIGZvbnQtbm9ybWFsIG10LTFcIj57dC5yb2xlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgPC9DYXJvdXNlbEl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0Nhcm91c2VsQ29udGVudD5cbiAgICAgICAgICA8Q2Fyb3VzZWxQcmV2aW91cyBjbGFzc05hbWU9XCJiZy1pbmRpYW4tZ3JlZW4gaG92ZXI6YmctaW5kaWFuLWdyZWVuLzkwIHRleHQtd2hpdGUgYm9yZGVyLTAgLWxlZnQtNCBzbTotbGVmdC0xMlwiIC8+XG4gICAgICAgICAgPENhcm91c2VsTmV4dCBjbGFzc05hbWU9XCJiZy1pbmRpYW4tZ3JlZW4gaG92ZXI6YmctaW5kaWFuLWdyZWVuLzkwIHRleHQtd2hpdGUgYm9yZGVyLTAgLXJpZ2h0LTQgc206LXJpZ2h0LTEyXCIgLz5cbiAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RpbW9uaWFsc1NlY3Rpb247XG4iXSwiZmlsZSI6Ii9ob21lL3NqcnNoOTE2L3B1YmxpY19odG1sL3NyYy9jb21wb25lbnRzL1Rlc3RpbW9uaWFsc1NlY3Rpb24udHN4In0=