import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ScrollToTopButton.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/components/ScrollToTopButton.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=5efa796b"; const useState = __vite__cjsImport2_react["useState"]; const useEffect = __vite__cjsImport2_react["useEffect"];
import { ChevronUp } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
import { Button } from "/src/components/ui/button.tsx";
const ScrollToTopButton = ()=>{
    _s();
    const [isVisible, setIsVisible] = useState(false);
    useEffect(()=>{
        const toggleVisibility = ()=>{
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return ()=>window.removeEventListener("scroll", toggleVisibility);
    }, []);
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    if (!isVisible) {
        return null;
    }
    return /*#__PURE__*/ _jsxDEV(Button, {
        "data-lov-id": "src/components/ScrollToTopButton.tsx:33:4",
        "data-lov-name": "Button",
        "data-component-path": "src/components/ScrollToTopButton.tsx",
        "data-component-line": "33",
        "data-component-file": "ScrollToTopButton.tsx",
        "data-component-name": "Button",
        "data-component-content": "%7B%22className%22%3A%22fixed%20bottom-20%20right-6%20z-50%20bg-indian-green%20hover%3Abg-indian-green%2F90%20text-white%20rounded-full%20w-12%20h-12%20p-0%20shadow-lg%20transition-all%20duration-300%20hover%3Ashadow-xl%22%7D",
        onClick: scrollToTop,
        className: "fixed bottom-20 right-6 z-50 bg-indian-green hover:bg-indian-green/90 text-white rounded-full w-12 h-12 p-0 shadow-lg transition-all duration-300 hover:shadow-xl",
        "aria-label": "Scroll to top",
        children: /*#__PURE__*/ _jsxDEV(ChevronUp, {
            "data-lov-id": "src/components/ScrollToTopButton.tsx:38:6",
            "data-lov-name": "ChevronUp",
            "data-component-path": "src/components/ScrollToTopButton.tsx",
            "data-component-line": "38",
            "data-component-file": "ScrollToTopButton.tsx",
            "data-component-name": "ChevronUp",
            "data-component-content": "%7B%22className%22%3A%22h-6%20w-6%22%7D",
            className: "h-6 w-6"
        }, void 0, false, {
            fileName: "/home/sjrsh916/public_html/src/components/ScrollToTopButton.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/components/ScrollToTopButton.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
};
_s(ScrollToTopButton, "J3yJOyGdBT4L7hs1p1XQYVGMdrY=");
_c = ScrollToTopButton;
export default ScrollToTopButton;
var _c;
$RefreshReg$(_c, "ScrollToTopButton");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/components/ScrollToTopButton.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/components/ScrollToTopButton.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLFNBQVNBLFFBQVEsRUFBRUMsU0FBUyxRQUFRLFFBQU87QUFDM0MsU0FBU0MsU0FBUyxRQUFRLGVBQWM7QUFDeEMsU0FBU0MsTUFBTSxRQUFRLHlCQUF3QjtBQUUvQyxNQUFNQyxvQkFBb0I7O0lBQ3hCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTixTQUFTO0lBRTNDQyxVQUFVO1FBQ1IsTUFBTU0sbUJBQW1CO1lBQ3ZCLElBQUlDLE9BQU9DLFdBQVcsR0FBRyxLQUFLO2dCQUM1QkgsYUFBYTtZQUNmLE9BQU87Z0JBQ0xBLGFBQWE7WUFDZjtRQUNGO1FBRUFFLE9BQU9FLGdCQUFnQixDQUFDLFVBQVVIO1FBQ2xDLE9BQU8sSUFBTUMsT0FBT0csbUJBQW1CLENBQUMsVUFBVUo7SUFDcEQsR0FBRyxFQUFFO0lBRUwsTUFBTUssY0FBYztRQUNsQkosT0FBT0ssUUFBUSxDQUFDO1lBQ2RDLEtBQUs7WUFDTEMsVUFBVTtRQUNaO0lBQ0Y7SUFFQSxJQUFJLENBQUNWLFdBQVc7UUFDZCxPQUFPO0lBQ1Q7SUFFQSxxQkFDRSxRQUFDRjtRQUFLYSxlQUFBO1FBQUFDLGlCQUFBO1FBQUFDLHVCQUFBO1FBQUFDLHVCQUFBO1FBQUFDLHVCQUFBO1FBQUFDLHVCQUFBO1FBQUFDLDBCQUFBO1FBQ0pDLFNBQVNYO1FBQ1RZLFdBQVU7UUFDVkMsY0FBVztrQkFFWCxzQkFBQ3ZCO1lBQVFjLGVBQUE7WUFBQUMsaUJBQUE7WUFBQUMsdUJBQUE7WUFBQUMsdUJBQUE7WUFBQUMsdUJBQUE7WUFBQUMsdUJBQUE7WUFBQUMsMEJBQUE7WUFBRUUsV0FBVTs7Ozs7Ozs7Ozs7QUFHM0I7R0FwQ01wQjtLQUFBQTtBQXNDTixlQUFlQSxrQkFBaUIiLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNoZXZyb25VcCIsIkJ1dHRvbiIsIlNjcm9sbFRvVG9wQnV0dG9uIiwiaXNWaXNpYmxlIiwic2V0SXNWaXNpYmxlIiwidG9nZ2xlVmlzaWJpbGl0eSIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzY3JvbGxUb1RvcCIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJkYXRhLWxvdi1pZCIsImRhdGEtbG92LW5hbWUiLCJkYXRhLWNvbXBvbmVudC1wYXRoIiwiZGF0YS1jb21wb25lbnQtbGluZSIsImRhdGEtY29tcG9uZW50LWZpbGUiLCJkYXRhLWNvbXBvbmVudC1uYW1lIiwiZGF0YS1jb21wb25lbnQtY29udGVudCIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJhcmlhLWxhYmVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIlNjcm9sbFRvVG9wQnV0dG9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDaGV2cm9uVXAgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuXG5jb25zdCBTY3JvbGxUb1RvcEJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRvZ2dsZVZpc2liaWxpdHkgPSAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMzAwKSB7XG4gICAgICAgIHNldElzVmlzaWJsZSh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldElzVmlzaWJsZShmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRvZ2dsZVZpc2liaWxpdHkpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0b2dnbGVWaXNpYmlsaXR5KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNjcm9sbFRvVG9wID0gKCkgPT4ge1xuICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICB0b3A6IDAsXG4gICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICB9KTtcbiAgfTtcblxuICBpZiAoIWlzVmlzaWJsZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uXG4gICAgICBvbkNsaWNrPXtzY3JvbGxUb1RvcH1cbiAgICAgIGNsYXNzTmFtZT1cImZpeGVkIGJvdHRvbS0yMCByaWdodC02IHotNTAgYmctaW5kaWFuLWdyZWVuIGhvdmVyOmJnLWluZGlhbi1ncmVlbi85MCB0ZXh0LXdoaXRlIHJvdW5kZWQtZnVsbCB3LTEyIGgtMTIgcC0wIHNoYWRvdy1sZyB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgaG92ZXI6c2hhZG93LXhsXCJcbiAgICAgIGFyaWEtbGFiZWw9XCJTY3JvbGwgdG8gdG9wXCJcbiAgICA+XG4gICAgICA8Q2hldnJvblVwIGNsYXNzTmFtZT1cImgtNiB3LTZcIiAvPlxuICAgIDwvQnV0dG9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsVG9Ub3BCdXR0b247Il0sImZpbGUiOiIvaG9tZS9zanJzaDkxNi9wdWJsaWNfaHRtbC9zcmMvY29tcG9uZW50cy9TY3JvbGxUb1RvcEJ1dHRvbi50c3gifQ==