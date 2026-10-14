import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/NotFound.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/pages/NotFound.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import { useLocation } from "/node_modules/.vite/deps/react-router-dom.js?v=5efa796b";
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=5efa796b"; const useEffect = __vite__cjsImport3_react["useEffect"];
const NotFound = ()=>{
    _s();
    const location = useLocation();
    useEffect(()=>{
        console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }, [
        location.pathname
    ]);
    return /*#__PURE__*/ _jsxDEV("div", {
        "data-lov-id": "src/pages/NotFound.tsx:15:4",
        "data-lov-name": "div",
        "data-component-path": "src/pages/NotFound.tsx",
        "data-component-line": "15",
        "data-component-file": "NotFound.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%22className%22%3A%22min-h-screen%20flex%20items-center%20justify-center%20bg-gray-100%22%7D",
        className: "min-h-screen flex items-center justify-center bg-gray-100",
        children: /*#__PURE__*/ _jsxDEV("div", {
            "data-lov-id": "src/pages/NotFound.tsx:16:6",
            "data-lov-name": "div",
            "data-component-path": "src/pages/NotFound.tsx",
            "data-component-line": "16",
            "data-component-file": "NotFound.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22text-center%22%7D",
            className: "text-center",
            children: [
                /*#__PURE__*/ _jsxDEV("h1", {
                    "data-lov-id": "src/pages/NotFound.tsx:17:8",
                    "data-lov-name": "h1",
                    "data-component-path": "src/pages/NotFound.tsx",
                    "data-component-line": "17",
                    "data-component-file": "NotFound.tsx",
                    "data-component-name": "h1",
                    "data-component-content": "%7B%22text%22%3A%22404%22%2C%22className%22%3A%22text-4xl%20font-bold%20mb-4%22%7D",
                    className: "text-4xl font-bold mb-4",
                    children: "404"
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/NotFound.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("p", {
                    "data-lov-id": "src/pages/NotFound.tsx:18:8",
                    "data-lov-name": "p",
                    "data-component-path": "src/pages/NotFound.tsx",
                    "data-component-line": "18",
                    "data-component-file": "NotFound.tsx",
                    "data-component-name": "p",
                    "data-component-content": "%7B%22text%22%3A%22Oops!%20Page%20not%20found%22%2C%22className%22%3A%22text-xl%20text-gray-600%20mb-4%22%7D",
                    className: "text-xl text-gray-600 mb-4",
                    children: "Oops! Page not found"
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/NotFound.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("a", {
                    "data-lov-id": "src/pages/NotFound.tsx:19:8",
                    "data-lov-name": "a",
                    "data-component-path": "src/pages/NotFound.tsx",
                    "data-component-line": "19",
                    "data-component-file": "NotFound.tsx",
                    "data-component-name": "a",
                    "data-component-content": "%7B%22text%22%3A%22Return%20to%20Home%22%2C%22className%22%3A%22text-blue-500%20hover%3Atext-blue-700%20underline%22%7D",
                    href: "/",
                    className: "text-blue-500 hover:text-blue-700 underline",
                    children: "Return to Home"
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/NotFound.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/sjrsh916/public_html/src/pages/NotFound.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/pages/NotFound.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
};
_s(NotFound, "BXcZrDMM76mmm4zA8/QV5UbMNXE=", false, function() {
    return [
        useLocation
    ];
});
_c = NotFound;
export default NotFound;
var _c;
$RefreshReg$(_c, "NotFound");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/pages/NotFound.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/pages/NotFound.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLFNBQVNBLFdBQVcsUUFBUSxtQkFBa0I7QUFDOUMsU0FBU0MsU0FBUyxRQUFRLFFBQU87QUFFakMsTUFBTUMsV0FBVzs7SUFDZixNQUFNQyxXQUFXSDtJQUVqQkMsVUFBVTtRQUNSRyxRQUFRQyxLQUFLLENBQ1gsMkRBQ0FGLFNBQVNHLFFBQU87SUFFcEIsR0FBRztRQUFDSCxTQUFTRyxRQUFRO0tBQUM7SUFFdEIscUJBQ0UsUUFBQ0M7UUFBRUMsZUFBQTtRQUFBQyxpQkFBQTtRQUFBQyx1QkFBQTtRQUFBQyx1QkFBQTtRQUFBQyx1QkFBQTtRQUFBQyx1QkFBQTtRQUFBQywwQkFBQTtRQUFFQyxXQUFVO2tCQUNiLHNCQUFDUjtZQUFFQyxlQUFBO1lBQUFDLGlCQUFBO1lBQUFDLHVCQUFBO1lBQUFDLHVCQUFBO1lBQUFDLHVCQUFBO1lBQUFDLHVCQUFBO1lBQUFDLDBCQUFBO1lBQUVDLFdBQVU7OzhCQUNiLFFBQUNDO29CQUFDUixlQUFBO29CQUFBQyxpQkFBQTtvQkFBQUMsdUJBQUE7b0JBQUFDLHVCQUFBO29CQUFBQyx1QkFBQTtvQkFBQUMsdUJBQUE7b0JBQUFDLDBCQUFBO29CQUFFQyxXQUFVOzhCQUEwQjs7Ozs7OzhCQUN4QyxRQUFDRTtvQkFBQVQsZUFBQTtvQkFBQUMsaUJBQUE7b0JBQUFDLHVCQUFBO29CQUFBQyx1QkFBQTtvQkFBQUMsdUJBQUE7b0JBQUFDLHVCQUFBO29CQUFBQywwQkFBQTtvQkFBRUMsV0FBVTs4QkFBNkI7Ozs7Ozs4QkFDMUMsUUFBQ0c7b0JBQUFWLGVBQUE7b0JBQUFDLGlCQUFBO29CQUFBQyx1QkFBQTtvQkFBQUMsdUJBQUE7b0JBQUFDLHVCQUFBO29CQUFBQyx1QkFBQTtvQkFBQUMsMEJBQUE7b0JBQUVLLE1BQUs7b0JBQUlKLFdBQVU7OEJBQTZDOzs7Ozs7Ozs7Ozs7Ozs7OztBQU0zRTtHQXJCTWI7O1FBQ2FGOzs7S0FEYkU7QUF1Qk4sZUFBZUEsU0FBUSIsIm5hbWVzIjpbInVzZUxvY2F0aW9uIiwidXNlRWZmZWN0IiwiTm90Rm91bmQiLCJsb2NhdGlvbiIsImNvbnNvbGUiLCJlcnJvciIsInBhdGhuYW1lIiwiZGl2IiwiZGF0YS1sb3YtaWQiLCJkYXRhLWxvdi1uYW1lIiwiZGF0YS1jb21wb25lbnQtcGF0aCIsImRhdGEtY29tcG9uZW50LWxpbmUiLCJkYXRhLWNvbXBvbmVudC1maWxlIiwiZGF0YS1jb21wb25lbnQtbmFtZSIsImRhdGEtY29tcG9uZW50LWNvbnRlbnQiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJhIiwiaHJlZiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJOb3RGb3VuZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IE5vdEZvdW5kID0gKCkgPT4ge1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgXCI0MDQgRXJyb3I6IFVzZXIgYXR0ZW1wdGVkIHRvIGFjY2VzcyBub24tZXhpc3RlbnQgcm91dGU6XCIsXG4gICAgICBsb2NhdGlvbi5wYXRobmFtZVxuICAgICk7XG4gIH0sIFtsb2NhdGlvbi5wYXRobmFtZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctZ3JheS0xMDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBtYi00XCI+NDA0PC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LWdyYXktNjAwIG1iLTRcIj5Pb3BzISBQYWdlIG5vdCBmb3VuZDwvcD5cbiAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwIGhvdmVyOnRleHQtYmx1ZS03MDAgdW5kZXJsaW5lXCI+XG4gICAgICAgICAgUmV0dXJuIHRvIEhvbWVcbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOb3RGb3VuZDtcbiJdLCJmaWxlIjoiL2hvbWUvc2pyc2g5MTYvcHVibGljX2h0bWwvc3JjL3BhZ2VzL05vdEZvdW5kLnRzeCJ9