import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/PageBanner.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/components/PageBanner.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=5efa796b"; const useEffect = __vite__cjsImport2_react["useEffect"]; const useState = __vite__cjsImport2_react["useState"];
const PageBanner = ({ title, subtitle, backgroundImage, overlay = true })=>{
    _s();
    const [scrollY, setScrollY] = useState(0);
    useEffect(()=>{
        const handleScroll = ()=>setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, []);
    return /*#__PURE__*/ _jsxDEV("section", {
        "data-lov-id": "src/components/PageBanner.tsx:20:4",
        "data-lov-name": "section",
        "data-component-path": "src/components/PageBanner.tsx",
        "data-component-line": "20",
        "data-component-file": "PageBanner.tsx",
        "data-component-name": "section",
        "data-component-content": "%7B%22className%22%3A%22relative%20h-96%20overflow-hidden%22%7D",
        className: "relative h-96 overflow-hidden",
        children: [
            /*#__PURE__*/ _jsxDEV("div", {
                "data-lov-id": "src/components/PageBanner.tsx:22:6",
                "data-lov-name": "div",
                "data-component-path": "src/components/PageBanner.tsx",
                "data-component-line": "22",
                "data-component-file": "PageBanner.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22absolute%20inset-0%20bg-cover%20bg-center%20bg-fixed%20transition-transform%20duration-300%22%7D",
                className: "absolute inset-0 bg-cover bg-center bg-fixed transition-transform duration-300",
                style: {
                    backgroundImage: `url(${backgroundImage})`,
                    transform: `translateY(${scrollY * 0.5}px)`
                }
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/PageBanner.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            overlay && /*#__PURE__*/ _jsxDEV("div", {
                "data-lov-id": "src/components/PageBanner.tsx:32:8",
                "data-lov-name": "div",
                "data-component-path": "src/components/PageBanner.tsx",
                "data-component-line": "32",
                "data-component-file": "PageBanner.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22absolute%20inset-0%20bg-gradient-to-b%20from-black%2F60%20via-black%2F40%20to-black%2F60%22%7D",
                className: "absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/PageBanner.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                "data-lov-id": "src/components/PageBanner.tsx:36:6",
                "data-lov-name": "div",
                "data-component-path": "src/components/PageBanner.tsx",
                "data-component-line": "36",
                "data-component-file": "PageBanner.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22relative%20z-10%20h-full%20flex%20items-center%20justify-center%20text-center%20text-white%22%7D",
                className: "relative z-10 h-full flex items-center justify-center text-center text-white",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/components/PageBanner.tsx:37:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/PageBanner.tsx",
                    "data-component-line": "37",
                    "data-component-file": "PageBanner.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ _jsxDEV("h1", {
                            "data-lov-id": "src/components/PageBanner.tsx:38:10",
                            "data-lov-name": "h1",
                            "data-component-path": "src/components/PageBanner.tsx",
                            "data-component-line": "38",
                            "data-component-file": "PageBanner.tsx",
                            "data-component-name": "h1",
                            "data-component-content": "%7B%22className%22%3A%22text-5xl%20lg%3Atext-6xl%20font-bold%20mb-4%20animate-fade-in%22%7D",
                            className: "text-5xl lg:text-6xl font-bold mb-4 animate-fade-in",
                            children: title
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/PageBanner.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("p", {
                            "data-lov-id": "src/components/PageBanner.tsx:41:10",
                            "data-lov-name": "p",
                            "data-component-path": "src/components/PageBanner.tsx",
                            "data-component-line": "41",
                            "data-component-file": "PageBanner.tsx",
                            "data-component-name": "p",
                            "data-component-content": "%7B%22className%22%3A%22text-xl%20lg%3Atext-2xl%20text-amber-200%20max-w-3xl%20mx-auto%20animate-slide-in-right%22%7D",
                            className: "text-xl lg:text-2xl text-amber-200 max-w-3xl mx-auto animate-slide-in-right",
                            children: subtitle
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/PageBanner.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/components/PageBanner.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/PageBanner.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                "data-lov-id": "src/components/PageBanner.tsx:48:6",
                "data-lov-name": "div",
                "data-component-path": "src/components/PageBanner.tsx",
                "data-component-line": "48",
                "data-component-file": "PageBanner.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22absolute%20bottom-0%20left-0%20right-0%20h-20%20bg-gradient-to-t%20from-background%2F90%20to-transparent%22%7D",
                className: "absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background/90 to-transparent"
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/PageBanner.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/sjrsh916/public_html/src/components/PageBanner.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
};
_s(PageBanner, "eTR5W6wH45bVtWbD0ho0jkNrbDM=");
_c = PageBanner;
export default PageBanner;
var _c;
$RefreshReg$(_c, "PageBanner");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/components/PageBanner.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/components/PageBanner.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLFNBQVNBLFNBQVMsRUFBRUMsUUFBUSxRQUFRLFFBQU87QUFTM0MsTUFBTUMsYUFBYSxDQUFDLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxlQUFlLEVBQUVDLFVBQVUsSUFBSSxFQUFtQjs7SUFDdkYsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdQLFNBQVM7SUFFdkNELFVBQVU7UUFDUixNQUFNUyxlQUFlLElBQU1ELFdBQVdFLE9BQU9ILE9BQU87UUFDcERHLE9BQU9DLGdCQUFnQixDQUFDLFVBQVVGO1FBQ2xDLE9BQU8sSUFBTUMsT0FBT0UsbUJBQW1CLENBQUMsVUFBVUg7SUFDcEQsR0FBRyxFQUFFO0lBRUwscUJBQ0UsUUFBQ0k7UUFBTUMsZUFBQTtRQUFBQyxpQkFBQTtRQUFBQyx1QkFBQTtRQUFBQyx1QkFBQTtRQUFBQyx1QkFBQTtRQUFBQyx1QkFBQTtRQUFBQywwQkFBQTtRQUFFQyxXQUFVOzswQkFFakIsUUFBQ0M7Z0JBQUVSLGVBQUE7Z0JBQUFDLGlCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsMEJBQUE7Z0JBQ0RDLFdBQVU7Z0JBQ1ZFLE9BQU87b0JBQ0xsQixpQkFBaUIsQ0FBQyxJQUFJLEVBQUVBLGdCQUFnQixDQUFDLENBQUM7b0JBQzFDbUIsV0FBVyxDQUFDLFdBQVcsRUFBRWpCLFVBQVUsSUFBSSxHQUFHO2dCQUM1Qzs7Ozs7O1lBSURELHlCQUNDLFFBQUNnQjtnQkFBRVIsZUFBQTtnQkFBQUMsaUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQywwQkFBQTtnQkFBRUMsV0FBVTs7Ozs7OzBCQUlqQixRQUFDQztnQkFBRVIsZUFBQTtnQkFBQUMsaUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQywwQkFBQTtnQkFBRUMsV0FBVTswQkFDYixzQkFBQ0M7b0JBQUVSLGVBQUE7b0JBQUFDLGlCQUFBO29CQUFBQyx1QkFBQTtvQkFBQUMsdUJBQUE7b0JBQUFDLHVCQUFBO29CQUFBQyx1QkFBQTtvQkFBQUMsMEJBQUE7b0JBQUVDLFdBQVU7O3NDQUNiLFFBQUNJOzRCQUFDWCxlQUFBOzRCQUFBQyxpQkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLDBCQUFBOzRCQUFFQyxXQUFVO3NDQUNYbEI7Ozs7OztzQ0FFSCxRQUFDdUI7NEJBQUFaLGVBQUE7NEJBQUFDLGlCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsMEJBQUE7NEJBQUVDLFdBQVU7c0NBQ1ZqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTVAsUUFBQ2tCO2dCQUFFUixlQUFBO2dCQUFBQyxpQkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLHVCQUFBO2dCQUFBQyx1QkFBQTtnQkFBQUMsdUJBQUE7Z0JBQUFDLDBCQUFBO2dCQUFFQyxXQUFVOzs7Ozs7Ozs7Ozs7QUFHckI7R0F6Q01uQjtLQUFBQTtBQTJDTixlQUFlQSxXQUFVIiwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQYWdlQmFubmVyIiwidGl0bGUiLCJzdWJ0aXRsZSIsImJhY2tncm91bmRJbWFnZSIsIm92ZXJsYXkiLCJzY3JvbGxZIiwic2V0U2Nyb2xsWSIsImhhbmRsZVNjcm9sbCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2VjdGlvbiIsImRhdGEtbG92LWlkIiwiZGF0YS1sb3YtbmFtZSIsImRhdGEtY29tcG9uZW50LXBhdGgiLCJkYXRhLWNvbXBvbmVudC1saW5lIiwiZGF0YS1jb21wb25lbnQtZmlsZSIsImRhdGEtY29tcG9uZW50LW5hbWUiLCJkYXRhLWNvbXBvbmVudC1jb250ZW50IiwiY2xhc3NOYW1lIiwiZGl2Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJoMSIsInAiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiUGFnZUJhbm5lci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgUGFnZUJhbm5lclByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgc3VidGl0bGU6IHN0cmluZztcbiAgYmFja2dyb3VuZEltYWdlOiBzdHJpbmc7XG4gIG92ZXJsYXk/OiBib29sZWFuO1xufVxuXG5jb25zdCBQYWdlQmFubmVyID0gKHsgdGl0bGUsIHN1YnRpdGxlLCBiYWNrZ3JvdW5kSW1hZ2UsIG92ZXJsYXkgPSB0cnVlIH06IFBhZ2VCYW5uZXJQcm9wcykgPT4ge1xuICBjb25zdCBbc2Nyb2xsWSwgc2V0U2Nyb2xsWV0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHNldFNjcm9sbFkod2luZG93LnNjcm9sbFkpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVsYXRpdmUgaC05NiBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgIHsvKiBQYXJhbGxheCBCYWNrZ3JvdW5kICovfVxuICAgICAgPGRpdiBcbiAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1jb3ZlciBiZy1jZW50ZXIgYmctZml4ZWQgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwXCJcbiAgICAgICAgc3R5bGU9e3sgXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YmFja2dyb3VuZEltYWdlfSlgLFxuICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoJHtzY3JvbGxZICogMC41fXB4KWBcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICBcbiAgICAgIHsvKiBPdmVybGF5ICovfVxuICAgICAge292ZXJsYXkgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tYiBmcm9tLWJsYWNrLzYwIHZpYS1ibGFjay80MCB0by1ibGFjay82MFwiIC8+XG4gICAgICApfVxuICAgICAgXG4gICAgICB7LyogQ29udGVudCAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMCBoLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgbGc6dGV4dC02eGwgZm9udC1ib2xkIG1iLTQgYW5pbWF0ZS1mYWRlLWluXCI+XG4gICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGxnOnRleHQtMnhsIHRleHQtYW1iZXItMjAwIG1heC13LTN4bCBteC1hdXRvIGFuaW1hdGUtc2xpZGUtaW4tcmlnaHRcIj5cbiAgICAgICAgICAgIHtzdWJ0aXRsZX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIHsvKiBEZWNvcmF0aXZlIEVsZW1lbnRzICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMCBsZWZ0LTAgcmlnaHQtMCBoLTIwIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1iYWNrZ3JvdW5kLzkwIHRvLXRyYW5zcGFyZW50XCIgLz5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlQmFubmVyOyJdLCJmaWxlIjoiL2hvbWUvc2pyc2g5MTYvcHVibGljX2h0bWwvc3JjL2NvbXBvbmVudHMvUGFnZUJhbm5lci50c3gifQ==