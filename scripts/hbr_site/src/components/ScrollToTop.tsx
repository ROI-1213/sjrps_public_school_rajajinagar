import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ScrollToTop.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/components/ScrollToTop.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

var _s = $RefreshSig$();
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=5efa796b"; const useEffect = __vite__cjsImport1_react["useEffect"];
import { useLocation } from "/node_modules/.vite/deps/react-router-dom.js?v=5efa796b";
const ScrollToTop = ()=>{
    _s();
    const { pathname } = useLocation();
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [
        pathname
    ]);
    return null;
};
_s(ScrollToTop, "+8VPq4+XDMjo/kjL3WLkbwU2Amg=", false, function() {
    return [
        useLocation
    ];
});
_c = ScrollToTop;
export default ScrollToTop;
var _c;
$RefreshReg$(_c, "ScrollToTop");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/components/ScrollToTop.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/components/ScrollToTop.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsU0FBU0EsU0FBUyxRQUFRLFFBQU87QUFDakMsU0FBU0MsV0FBVyxRQUFRLG1CQUFrQjtBQUU5QyxNQUFNQyxjQUFjOztJQUNsQixNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFHRjtJQUVyQkQsVUFBVTtRQUNSSSxPQUFPQyxRQUFRLENBQUMsR0FBRztJQUNyQixHQUFHO1FBQUNGO0tBQVM7SUFFYixPQUFPO0FBQ1Q7R0FSTUQ7O1FBQ2lCRDs7O0tBRGpCQztBQVVOLGVBQWVBLFlBQVciLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VMb2NhdGlvbiIsIlNjcm9sbFRvVG9wIiwicGF0aG5hbWUiLCJ3aW5kb3ciLCJzY3JvbGxUbyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJTY3JvbGxUb1RvcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmNvbnN0IFNjcm9sbFRvVG9wID0gKCkgPT4ge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICB9LCBbcGF0aG5hbWVdKTtcblxuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbFRvVG9wOyJdLCJmaWxlIjoiL2hvbWUvc2pyc2g5MTYvcHVibGljX2h0bWwvc3JjL2NvbXBvbmVudHMvU2Nyb2xsVG9Ub3AudHN4In0=