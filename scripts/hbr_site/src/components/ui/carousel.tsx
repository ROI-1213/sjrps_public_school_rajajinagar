import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/carousel.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/components/ui/carousel.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$(), _s3 = $RefreshSig$(), _s4 = $RefreshSig$(), _s5 = $RefreshSig$();
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=5efa796b"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport2_react);
import useEmblaCarousel from "/node_modules/.vite/deps/embla-carousel-react.js?v=5efa796b";
import { ArrowLeft, ArrowRight } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
import { cn } from "/src/lib/utils.ts";
import { Button } from "/src/components/ui/button.tsx";
const CarouselContext = /*#__PURE__*/ React.createContext(null);
function useCarousel() {
    _s();
    const context = React.useContext(CarouselContext);
    if (!context) {
        throw new Error("useCarousel must be used within a <Carousel />");
    }
    return context;
}
_s(useCarousel, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const Carousel = /*#__PURE__*/ _s1(React.forwardRef(_c = _s1(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref)=>{
    _s1();
    const [carouselRef, api] = useEmblaCarousel({
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
    }, plugins);
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const onSelect = React.useCallback((api)=>{
        if (!api) {
            return;
        }
        setCanScrollPrev(api.canScrollPrev());
        setCanScrollNext(api.canScrollNext());
    }, []);
    const scrollPrev = React.useCallback(()=>{
        api?.scrollPrev();
    }, [
        api
    ]);
    const scrollNext = React.useCallback(()=>{
        api?.scrollNext();
    }, [
        api
    ]);
    const handleKeyDown = React.useCallback((event)=>{
        if (event.key === "ArrowLeft") {
            event.preventDefault();
            scrollPrev();
        } else if (event.key === "ArrowRight") {
            event.preventDefault();
            scrollNext();
        }
    }, [
        scrollPrev,
        scrollNext
    ]);
    React.useEffect(()=>{
        if (!api || !setApi) {
            return;
        }
        setApi(api);
    }, [
        api,
        setApi
    ]);
    React.useEffect(()=>{
        if (!api) {
            return;
        }
        onSelect(api);
        api.on("reInit", onSelect);
        api.on("select", onSelect);
        return ()=>{
            api?.off("select", onSelect);
        };
    }, [
        api,
        onSelect
    ]);
    return /*#__PURE__*/ _jsxDEV(CarouselContext.Provider, {
        "data-lov-id": "src/components/ui/carousel.tsx:122:6",
        "data-lov-name": "CarouselContext.Provider",
        "data-component-path": "src/components/ui/carousel.tsx",
        "data-component-line": "122",
        "data-component-file": "carousel.tsx",
        "data-component-name": "CarouselContext.Provider",
        "data-component-content": "%7B%7D",
        value: {
            carouselRef,
            api: api,
            opts,
            orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
            scrollPrev,
            scrollNext,
            canScrollPrev,
            canScrollNext
        },
        children: /*#__PURE__*/ _jsxDEV("div", {
            "data-lov-id": "src/components/ui/carousel.tsx:135:8",
            "data-lov-name": "div",
            "data-component-path": "src/components/ui/carousel.tsx",
            "data-component-line": "135",
            "data-component-file": "carousel.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%7D",
            ref: ref,
            onKeyDownCapture: handleKeyDown,
            className: cn("relative", className),
            role: "region",
            "aria-roledescription": "carousel",
            ...props,
            children: children
        }, void 0, false, {
            fileName: "/home/sjrsh916/public_html/src/components/ui/carousel.tsx",
            lineNumber: 135,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/components/ui/carousel.tsx",
        lineNumber: 122,
        columnNumber: 7
    }, this);
}, "72w3/pym1wz2ZcTGqySg56b8KiQ=", false, function() {
    return [
        useEmblaCarousel
    ];
})), "72w3/pym1wz2ZcTGqySg56b8KiQ=", false, function() {
    return [
        useEmblaCarousel
    ];
});
_c1 = Carousel;
Carousel.displayName = "Carousel";
const CarouselContent = /*#__PURE__*/ _s2(React.forwardRef(_c2 = _s2(({ className, ...props }, ref)=>{
    _s2();
    const { carouselRef, orientation } = useCarousel();
    return /*#__PURE__*/ _jsxDEV("div", {
        "data-lov-id": "src/components/ui/carousel.tsx:158:4",
        "data-lov-name": "div",
        "data-component-path": "src/components/ui/carousel.tsx",
        "data-component-line": "158",
        "data-component-file": "carousel.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%22className%22%3A%22overflow-hidden%22%7D",
        ref: carouselRef,
        className: "overflow-hidden",
        children: /*#__PURE__*/ _jsxDEV("div", {
            "data-lov-id": "src/components/ui/carousel.tsx:159:6",
            "data-lov-name": "div",
            "data-component-path": "src/components/ui/carousel.tsx",
            "data-component-line": "159",
            "data-component-file": "carousel.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%7D",
            ref: ref,
            className: cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className),
            ...props
        }, void 0, false, {
            fileName: "/home/sjrsh916/public_html/src/components/ui/carousel.tsx",
            lineNumber: 159,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/components/ui/carousel.tsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}, "YNqN7/p8l2NfYueiPechI4IqsYo=", false, function() {
    return [
        useCarousel
    ];
})), "YNqN7/p8l2NfYueiPechI4IqsYo=", false, function() {
    return [
        useCarousel
    ];
});
_c3 = CarouselContent;
CarouselContent.displayName = "CarouselContent";
const CarouselItem = /*#__PURE__*/ _s3(React.forwardRef(_c4 = _s3(({ className, ...props }, ref)=>{
    _s3();
    const { orientation } = useCarousel();
    return /*#__PURE__*/ _jsxDEV("div", {
        "data-lov-id": "src/components/ui/carousel.tsx:180:4",
        "data-lov-name": "div",
        "data-component-path": "src/components/ui/carousel.tsx",
        "data-component-line": "180",
        "data-component-file": "carousel.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%7D",
        ref: ref,
        role: "group",
        "aria-roledescription": "slide",
        className: cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className),
        ...props
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/components/ui/carousel.tsx",
        lineNumber: 180,
        columnNumber: 5
    }, this);
}, "bPPpMbUdjWnfcwMzP4altEp5ZJs=", false, function() {
    return [
        useCarousel
    ];
})), "bPPpMbUdjWnfcwMzP4altEp5ZJs=", false, function() {
    return [
        useCarousel
    ];
});
_c5 = CarouselItem;
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = /*#__PURE__*/ _s4(React.forwardRef(_c6 = _s4(({ className, variant = "outline", size = "icon", ...props }, ref)=>{
    _s4();
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return /*#__PURE__*/ _jsxDEV(Button, {
        "data-lov-id": "src/components/ui/carousel.tsx:202:4",
        "data-lov-name": "Button",
        "data-component-path": "src/components/ui/carousel.tsx",
        "data-component-line": "202",
        "data-component-file": "carousel.tsx",
        "data-component-name": "Button",
        "data-component-content": "%7B%7D",
        ref: ref,
        variant: variant,
        size: size,
        className: cn("absolute  h-8 w-8 rounded-full", orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
        disabled: !canScrollPrev,
        onClick: scrollPrev,
        ...props,
        children: [
            /*#__PURE__*/ _jsxDEV(ArrowLeft, {
                "data-lov-id": "src/components/ui/carousel.tsx:217:6",
                "data-lov-name": "ArrowLeft",
                "data-component-path": "src/components/ui/carousel.tsx",
                "data-component-line": "217",
                "data-component-file": "carousel.tsx",
                "data-component-name": "ArrowLeft",
                "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%22%7D",
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/ui/carousel.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("span", {
                "data-lov-id": "src/components/ui/carousel.tsx:218:6",
                "data-lov-name": "span",
                "data-component-path": "src/components/ui/carousel.tsx",
                "data-component-line": "218",
                "data-component-file": "carousel.tsx",
                "data-component-name": "span",
                "data-component-content": "%7B%22text%22%3A%22Previous%20slide%22%2C%22className%22%3A%22sr-only%22%7D",
                className: "sr-only",
                children: "Previous slide"
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/ui/carousel.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/sjrsh916/public_html/src/components/ui/carousel.tsx",
        lineNumber: 202,
        columnNumber: 5
    }, this);
}, "StVzzFT/dKvE6v0nHx014nh7DNA=", false, function() {
    return [
        useCarousel
    ];
})), "StVzzFT/dKvE6v0nHx014nh7DNA=", false, function() {
    return [
        useCarousel
    ];
});
_c7 = CarouselPrevious;
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = /*#__PURE__*/ _s5(React.forwardRef(_c8 = _s5(({ className, variant = "outline", size = "icon", ...props }, ref)=>{
    _s5();
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return /*#__PURE__*/ _jsxDEV(Button, {
        "data-lov-id": "src/components/ui/carousel.tsx:231:4",
        "data-lov-name": "Button",
        "data-component-path": "src/components/ui/carousel.tsx",
        "data-component-line": "231",
        "data-component-file": "carousel.tsx",
        "data-component-name": "Button",
        "data-component-content": "%7B%7D",
        ref: ref,
        variant: variant,
        size: size,
        className: cn("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
        disabled: !canScrollNext,
        onClick: scrollNext,
        ...props,
        children: [
            /*#__PURE__*/ _jsxDEV(ArrowRight, {
                "data-lov-id": "src/components/ui/carousel.tsx:246:6",
                "data-lov-name": "ArrowRight",
                "data-component-path": "src/components/ui/carousel.tsx",
                "data-component-line": "246",
                "data-component-file": "carousel.tsx",
                "data-component-name": "ArrowRight",
                "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%22%7D",
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/ui/carousel.tsx",
                lineNumber: 246,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("span", {
                "data-lov-id": "src/components/ui/carousel.tsx:247:6",
                "data-lov-name": "span",
                "data-component-path": "src/components/ui/carousel.tsx",
                "data-component-line": "247",
                "data-component-file": "carousel.tsx",
                "data-component-name": "span",
                "data-component-content": "%7B%22text%22%3A%22Next%20slide%22%2C%22className%22%3A%22sr-only%22%7D",
                className: "sr-only",
                children: "Next slide"
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/ui/carousel.tsx",
                lineNumber: 247,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/sjrsh916/public_html/src/components/ui/carousel.tsx",
        lineNumber: 231,
        columnNumber: 5
    }, this);
}, "VthXVrvg+0LPsG5FRGeAaBGswm4=", false, function() {
    return [
        useCarousel
    ];
})), "VthXVrvg+0LPsG5FRGeAaBGswm4=", false, function() {
    return [
        useCarousel
    ];
});
_c9 = CarouselNext;
CarouselNext.displayName = "CarouselNext";
export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext,  };
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
$RefreshReg$(_c, "Carousel$React.forwardRef");
$RefreshReg$(_c1, "Carousel");
$RefreshReg$(_c2, "CarouselContent$React.forwardRef");
$RefreshReg$(_c3, "CarouselContent");
$RefreshReg$(_c4, "CarouselItem$React.forwardRef");
$RefreshReg$(_c5, "CarouselItem");
$RefreshReg$(_c6, "CarouselPrevious$React.forwardRef");
$RefreshReg$(_c7, "CarouselPrevious");
$RefreshReg$(_c8, "CarouselNext$React.forwardRef");
$RefreshReg$(_c9, "CarouselNext");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/components/ui/carousel.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/components/ui/carousel.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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QUFFLEdBQUd2QyxPQUFPLEVBQUVDOztJQUM5RCxNQUFNLEVBQUVQLFdBQVcsRUFBRW1CLFVBQVUsRUFBRUwsYUFBYSxFQUFFLEdBQUdwQjtJQUVuRCxxQkFDRSxRQUFDSDtRQUFLcUMsZUFBQTtRQUFBQyxpQkFBQTtRQUFBQyx1QkFBQTtRQUFBQyx1QkFBQTtRQUFBQyx1QkFBQTtRQUFBQyx1QkFBQTtRQUFBQywwQkFBQTtRQUNKM0IsS0FBS0E7UUFDTHFDLFNBQVNBO1FBQ1RDLE1BQU1BO1FBQ056QyxXQUFXZCxHQUNULGlDQUNBVSxnQkFBZ0IsZUFDWix1Q0FDQSxrREFDSkk7UUFFRjBDLFVBQVUsQ0FBQ2hDO1FBQ1hpQyxTQUFTNUI7UUFDUixHQUFHYixLQUFLOzswQkFFVCxRQUFDakI7Z0JBQVN1QyxlQUFBO2dCQUFBQyxpQkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLDBCQUFBO2dCQUFFOUIsV0FBVTs7Ozs7OzBCQUN0QixRQUFDNEM7Z0JBQUdwQixlQUFBO2dCQUFBQyxpQkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLDBCQUFBO2dCQUFFOUIsV0FBVTswQkFBVTs7Ozs7Ozs7Ozs7O0FBR2hDOztRQXRCcURWOzs7O1FBQUFBOzs7O0FBdUJyRHVELGFBQWFULFdBQVcsR0FBRztBQUUzQixTQUVFMUMsUUFBUSxFQUNSMkMsZUFBZSxFQUNmQyxZQUFZLEVBQ1pDLGdCQUFnQixFQUNoQk0sWUFBWSxLQUNkIiwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFbWJsYUNhcm91c2VsIiwiQXJyb3dMZWZ0IiwiQXJyb3dSaWdodCIsImNuIiwiQnV0dG9uIiwiQ2Fyb3VzZWxDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNhcm91c2VsIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJFcnJvciIsIkNhcm91c2VsIiwiZm9yd2FyZFJlZiIsIm9yaWVudGF0aW9uIiwib3B0cyIsInNldEFwaSIsInBsdWdpbnMiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsInByb3BzIiwicmVmIiwiY2Fyb3VzZWxSZWYiLCJhcGkiLCJheGlzIiwiY2FuU2Nyb2xsUHJldiIsInNldENhblNjcm9sbFByZXYiLCJ1c2VTdGF0ZSIsImNhblNjcm9sbE5leHQiLCJzZXRDYW5TY3JvbGxOZXh0Iiwib25TZWxlY3QiLCJ1c2VDYWxsYmFjayIsInNjcm9sbFByZXYiLCJzY3JvbGxOZXh0IiwiaGFuZGxlS2V5RG93biIsImV2ZW50Iiwia2V5IiwicHJldmVudERlZmF1bHQiLCJ1c2VFZmZlY3QiLCJvbiIsIm9mZiIsIlByb3ZpZGVyIiwiZGF0YS1sb3YtaWQiLCJkYXRhLWxvdi1uYW1lIiwiZGF0YS1jb21wb25lbnQtcGF0aCIsImRhdGEtY29tcG9uZW50LWxpbmUiLCJkYXRhLWNvbXBvbmVudC1maWxlIiwiZGF0YS1jb21wb25lbnQtbmFtZSIsImRhdGEtY29tcG9uZW50LWNvbnRlbnQiLCJ2YWx1ZSIsImRpdiIsIm9uS2V5RG93bkNhcHR1cmUiLCJyb2xlIiwiYXJpYS1yb2xlZGVzY3JpcHRpb24iLCJkaXNwbGF5TmFtZSIsIkNhcm91c2VsQ29udGVudCIsIkNhcm91c2VsSXRlbSIsIkNhcm91c2VsUHJldmlvdXMiLCJ2YXJpYW50Iiwic2l6ZSIsImRpc2FibGVkIiwib25DbGljayIsInNwYW4iLCJDYXJvdXNlbE5leHQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiY2Fyb3VzZWwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgdXNlRW1ibGFDYXJvdXNlbCwge1xuICB0eXBlIFVzZUVtYmxhQ2Fyb3VzZWxUeXBlLFxufSBmcm9tIFwiZW1ibGEtY2Fyb3VzZWwtcmVhY3RcIlxuaW1wb3J0IHsgQXJyb3dMZWZ0LCBBcnJvd1JpZ2h0IH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiXG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCJcblxudHlwZSBDYXJvdXNlbEFwaSA9IFVzZUVtYmxhQ2Fyb3VzZWxUeXBlWzFdXG50eXBlIFVzZUNhcm91c2VsUGFyYW1ldGVycyA9IFBhcmFtZXRlcnM8dHlwZW9mIHVzZUVtYmxhQ2Fyb3VzZWw+XG50eXBlIENhcm91c2VsT3B0aW9ucyA9IFVzZUNhcm91c2VsUGFyYW1ldGVyc1swXVxudHlwZSBDYXJvdXNlbFBsdWdpbiA9IFVzZUNhcm91c2VsUGFyYW1ldGVyc1sxXVxuXG50eXBlIENhcm91c2VsUHJvcHMgPSB7XG4gIG9wdHM/OiBDYXJvdXNlbE9wdGlvbnNcbiAgcGx1Z2lucz86IENhcm91c2VsUGx1Z2luXG4gIG9yaWVudGF0aW9uPzogXCJob3Jpem9udGFsXCIgfCBcInZlcnRpY2FsXCJcbiAgc2V0QXBpPzogKGFwaTogQ2Fyb3VzZWxBcGkpID0+IHZvaWRcbn1cblxudHlwZSBDYXJvdXNlbENvbnRleHRQcm9wcyA9IHtcbiAgY2Fyb3VzZWxSZWY6IFJldHVyblR5cGU8dHlwZW9mIHVzZUVtYmxhQ2Fyb3VzZWw+WzBdXG4gIGFwaTogUmV0dXJuVHlwZTx0eXBlb2YgdXNlRW1ibGFDYXJvdXNlbD5bMV1cbiAgc2Nyb2xsUHJldjogKCkgPT4gdm9pZFxuICBzY3JvbGxOZXh0OiAoKSA9PiB2b2lkXG4gIGNhblNjcm9sbFByZXY6IGJvb2xlYW5cbiAgY2FuU2Nyb2xsTmV4dDogYm9vbGVhblxufSAmIENhcm91c2VsUHJvcHNcblxuY29uc3QgQ2Fyb3VzZWxDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxDYXJvdXNlbENvbnRleHRQcm9wcyB8IG51bGw+KG51bGwpXG5cbmZ1bmN0aW9uIHVzZUNhcm91c2VsKCkge1xuICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChDYXJvdXNlbENvbnRleHQpXG5cbiAgaWYgKCFjb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXNlQ2Fyb3VzZWwgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIDxDYXJvdXNlbCAvPlwiKVxuICB9XG5cbiAgcmV0dXJuIGNvbnRleHRcbn1cblxuY29uc3QgQ2Fyb3VzZWwgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBIVE1MRGl2RWxlbWVudCxcbiAgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+ICYgQ2Fyb3VzZWxQcm9wc1xuPihcbiAgKFxuICAgIHtcbiAgICAgIG9yaWVudGF0aW9uID0gXCJob3Jpem9udGFsXCIsXG4gICAgICBvcHRzLFxuICAgICAgc2V0QXBpLFxuICAgICAgcGx1Z2lucyxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgLi4ucHJvcHNcbiAgICB9LFxuICAgIHJlZlxuICApID0+IHtcbiAgICBjb25zdCBbY2Fyb3VzZWxSZWYsIGFwaV0gPSB1c2VFbWJsYUNhcm91c2VsKFxuICAgICAge1xuICAgICAgICAuLi5vcHRzLFxuICAgICAgICBheGlzOiBvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgPyBcInhcIiA6IFwieVwiLFxuICAgICAgfSxcbiAgICAgIHBsdWdpbnNcbiAgICApXG4gICAgY29uc3QgW2NhblNjcm9sbFByZXYsIHNldENhblNjcm9sbFByZXZdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2NhblNjcm9sbE5leHQsIHNldENhblNjcm9sbE5leHRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG5cbiAgICBjb25zdCBvblNlbGVjdCA9IFJlYWN0LnVzZUNhbGxiYWNrKChhcGk6IENhcm91c2VsQXBpKSA9PiB7XG4gICAgICBpZiAoIWFwaSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgc2V0Q2FuU2Nyb2xsUHJldihhcGkuY2FuU2Nyb2xsUHJldigpKVxuICAgICAgc2V0Q2FuU2Nyb2xsTmV4dChhcGkuY2FuU2Nyb2xsTmV4dCgpKVxuICAgIH0sIFtdKVxuXG4gICAgY29uc3Qgc2Nyb2xsUHJldiA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgIGFwaT8uc2Nyb2xsUHJldigpXG4gICAgfSwgW2FwaV0pXG5cbiAgICBjb25zdCBzY3JvbGxOZXh0ID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgYXBpPy5zY3JvbGxOZXh0KClcbiAgICB9LCBbYXBpXSlcblxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAgIChldmVudDogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBzY3JvbGxQcmV2KClcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHNjcm9sbE5leHQoKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW3Njcm9sbFByZXYsIHNjcm9sbE5leHRdXG4gICAgKVxuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmICghYXBpIHx8ICFzZXRBcGkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHNldEFwaShhcGkpXG4gICAgfSwgW2FwaSwgc2V0QXBpXSlcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAoIWFwaSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgb25TZWxlY3QoYXBpKVxuICAgICAgYXBpLm9uKFwicmVJbml0XCIsIG9uU2VsZWN0KVxuICAgICAgYXBpLm9uKFwic2VsZWN0XCIsIG9uU2VsZWN0KVxuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBhcGk/Lm9mZihcInNlbGVjdFwiLCBvblNlbGVjdClcbiAgICAgIH1cbiAgICB9LCBbYXBpLCBvblNlbGVjdF0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPENhcm91c2VsQ29udGV4dC5Qcm92aWRlclxuICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgIGNhcm91c2VsUmVmLFxuICAgICAgICAgIGFwaTogYXBpLFxuICAgICAgICAgIG9wdHMsXG4gICAgICAgICAgb3JpZW50YXRpb246XG4gICAgICAgICAgICBvcmllbnRhdGlvbiB8fCAob3B0cz8uYXhpcyA9PT0gXCJ5XCIgPyBcInZlcnRpY2FsXCIgOiBcImhvcml6b250YWxcIiksXG4gICAgICAgICAgc2Nyb2xsUHJldixcbiAgICAgICAgICBzY3JvbGxOZXh0LFxuICAgICAgICAgIGNhblNjcm9sbFByZXYsXG4gICAgICAgICAgY2FuU2Nyb2xsTmV4dCxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgIG9uS2V5RG93bkNhcHR1cmU9e2hhbmRsZUtleURvd259XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbihcInJlbGF0aXZlXCIsIGNsYXNzTmFtZSl9XG4gICAgICAgICAgcm9sZT1cInJlZ2lvblwiXG4gICAgICAgICAgYXJpYS1yb2xlZGVzY3JpcHRpb249XCJjYXJvdXNlbFwiXG4gICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ2Fyb3VzZWxDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbiAgfVxuKVxuQ2Fyb3VzZWwuZGlzcGxheU5hbWUgPSBcIkNhcm91c2VsXCJcblxuY29uc3QgQ2Fyb3VzZWxDb250ZW50ID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgSFRNTERpdkVsZW1lbnQsXG4gIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4ge1xuICBjb25zdCB7IGNhcm91c2VsUmVmLCBvcmllbnRhdGlvbiB9ID0gdXNlQ2Fyb3VzZWwoKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiByZWY9e2Nhcm91c2VsUmVmfSBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgXCJmbGV4XCIsXG4gICAgICAgICAgb3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiID8gXCItbWwtNFwiIDogXCItbXQtNCBmbGV4LWNvbFwiLFxuICAgICAgICAgIGNsYXNzTmFtZVxuICAgICAgICApfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59KVxuQ2Fyb3VzZWxDb250ZW50LmRpc3BsYXlOYW1lID0gXCJDYXJvdXNlbENvbnRlbnRcIlxuXG5jb25zdCBDYXJvdXNlbEl0ZW0gPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBIVE1MRGl2RWxlbWVudCxcbiAgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiB7XG4gIGNvbnN0IHsgb3JpZW50YXRpb24gfSA9IHVzZUNhcm91c2VsKClcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHJlZj17cmVmfVxuICAgICAgcm9sZT1cImdyb3VwXCJcbiAgICAgIGFyaWEtcm9sZWRlc2NyaXB0aW9uPVwic2xpZGVcIlxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJtaW4tdy0wIHNocmluay0wIGdyb3ctMCBiYXNpcy1mdWxsXCIsXG4gICAgICAgIG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiA/IFwicGwtNFwiIDogXCJwdC00XCIsXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApXG59KVxuQ2Fyb3VzZWxJdGVtLmRpc3BsYXlOYW1lID0gXCJDYXJvdXNlbEl0ZW1cIlxuXG5jb25zdCBDYXJvdXNlbFByZXZpb3VzID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgSFRNTEJ1dHRvbkVsZW1lbnQsXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBCdXR0b24+XG4+KCh7IGNsYXNzTmFtZSwgdmFyaWFudCA9IFwib3V0bGluZVwiLCBzaXplID0gXCJpY29uXCIsIC4uLnByb3BzIH0sIHJlZikgPT4ge1xuICBjb25zdCB7IG9yaWVudGF0aW9uLCBzY3JvbGxQcmV2LCBjYW5TY3JvbGxQcmV2IH0gPSB1c2VDYXJvdXNlbCgpXG5cbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uXG4gICAgICByZWY9e3JlZn1cbiAgICAgIHZhcmlhbnQ9e3ZhcmlhbnR9XG4gICAgICBzaXplPXtzaXplfVxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJhYnNvbHV0ZSAgaC04IHctOCByb3VuZGVkLWZ1bGxcIixcbiAgICAgICAgb3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgPyBcIi1sZWZ0LTEyIHRvcC0xLzIgLXRyYW5zbGF0ZS15LTEvMlwiXG4gICAgICAgICAgOiBcIi10b3AtMTIgbGVmdC0xLzIgLXRyYW5zbGF0ZS14LTEvMiByb3RhdGUtOTBcIixcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICApfVxuICAgICAgZGlzYWJsZWQ9eyFjYW5TY3JvbGxQcmV2fVxuICAgICAgb25DbGljaz17c2Nyb2xsUHJldn1cbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8QXJyb3dMZWZ0IGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlByZXZpb3VzIHNsaWRlPC9zcGFuPlxuICAgIDwvQnV0dG9uPlxuICApXG59KVxuQ2Fyb3VzZWxQcmV2aW91cy5kaXNwbGF5TmFtZSA9IFwiQ2Fyb3VzZWxQcmV2aW91c1wiXG5cbmNvbnN0IENhcm91c2VsTmV4dCA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIEhUTUxCdXR0b25FbGVtZW50LFxuICBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgQnV0dG9uPlxuPigoeyBjbGFzc05hbWUsIHZhcmlhbnQgPSBcIm91dGxpbmVcIiwgc2l6ZSA9IFwiaWNvblwiLCAuLi5wcm9wcyB9LCByZWYpID0+IHtcbiAgY29uc3QgeyBvcmllbnRhdGlvbiwgc2Nyb2xsTmV4dCwgY2FuU2Nyb2xsTmV4dCB9ID0gdXNlQ2Fyb3VzZWwoKVxuXG4gIHJldHVybiAoXG4gICAgPEJ1dHRvblxuICAgICAgcmVmPXtyZWZ9XG4gICAgICB2YXJpYW50PXt2YXJpYW50fVxuICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgIFwiYWJzb2x1dGUgaC04IHctOCByb3VuZGVkLWZ1bGxcIixcbiAgICAgICAgb3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgPyBcIi1yaWdodC0xMiB0b3AtMS8yIC10cmFuc2xhdGUteS0xLzJcIlxuICAgICAgICAgIDogXCItYm90dG9tLTEyIGxlZnQtMS8yIC10cmFuc2xhdGUteC0xLzIgcm90YXRlLTkwXCIsXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIGRpc2FibGVkPXshY2FuU2Nyb2xsTmV4dH1cbiAgICAgIG9uQ2xpY2s9e3Njcm9sbE5leHR9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPEFycm93UmlnaHQgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TmV4dCBzbGlkZTwvc3Bhbj5cbiAgICA8L0J1dHRvbj5cbiAgKVxufSlcbkNhcm91c2VsTmV4dC5kaXNwbGF5TmFtZSA9IFwiQ2Fyb3VzZWxOZXh0XCJcblxuZXhwb3J0IHtcbiAgdHlwZSBDYXJvdXNlbEFwaSxcbiAgQ2Fyb3VzZWwsXG4gIENhcm91c2VsQ29udGVudCxcbiAgQ2Fyb3VzZWxJdGVtLFxuICBDYXJvdXNlbFByZXZpb3VzLFxuICBDYXJvdXNlbE5leHQsXG59XG4iXSwiZmlsZSI6Ii9ob21lL3NqcnNoOTE2L3B1YmxpY19odG1sL3NyYy9jb21wb25lbnRzL3VpL2Nhcm91c2VsLnRzeCJ9