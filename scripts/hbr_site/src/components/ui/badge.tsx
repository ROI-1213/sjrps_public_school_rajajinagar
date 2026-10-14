import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/badge.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/components/ui/badge.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=5efa796b"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport2_react);
import { cva } from "/node_modules/.vite/deps/class-variance-authority.js?v=5efa796b";
import { cn } from "/src/lib/utils.ts";
const badgeVariants = cva("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ _jsxDEV("div", {
        "data-lov-id": "src/components/ui/badge.tsx:32:4",
        "data-lov-name": "div",
        "data-component-path": "src/components/ui/badge.tsx",
        "data-component-line": "32",
        "data-component-file": "badge.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%7D",
        className: cn(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/components/ui/badge.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c = Badge;
export { Badge, badgeVariants };
var _c;
$RefreshReg$(_c, "Badge");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/components/ui/badge.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/components/ui/badge.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsWUFBWUEsV0FBVyxRQUFNO0FBQzdCLFNBQVNDLEdBQUcsUUFBMkIsMkJBQXlCO0FBRWhFLFNBQVNDLEVBQUUsUUFBUSxjQUFZO0FBRS9CLE1BQU1DLGdCQUFnQkYsSUFDcEIsMEtBQ0E7SUFDRUcsVUFBVTtRQUNSQyxTQUFTO1lBQ1BDLFNBQ0U7WUFDRkMsV0FDRTtZQUNGQyxhQUNFO1lBQ0ZDLFNBQVM7UUFDWDtJQUNGO0lBQ0FDLGlCQUFpQjtRQUNmTCxTQUFTO0lBQ1g7QUFDRjtBQU9GLFNBQVNNLE1BQU0sRUFBRUMsU0FBUyxFQUFFUCxPQUFPLEVBQUUsR0FBR1EsT0FBbUI7SUFDekQscUJBQ0UsUUFBQ0M7UUFBRUMsZUFBQTtRQUFBQyxpQkFBQTtRQUFBQyx1QkFBQTtRQUFBQyx1QkFBQTtRQUFBQyx1QkFBQTtRQUFBQyx1QkFBQTtRQUFBQywwQkFBQTtRQUFFVCxXQUFXVixHQUFHQyxjQUFjO1lBQUVFO1FBQVEsSUFBSU87UUFBYSxHQUFHQyxLQUFLOzs7Ozs7QUFFeEU7S0FKU0Y7QUFNVCxTQUFTQSxLQUFLLEVBQUVSLGFBQWEsR0FBQyIsIm5hbWVzIjpbIlJlYWN0IiwiY3ZhIiwiY24iLCJiYWRnZVZhcmlhbnRzIiwidmFyaWFudHMiLCJ2YXJpYW50IiwiZGVmYXVsdCIsInNlY29uZGFyeSIsImRlc3RydWN0aXZlIiwib3V0bGluZSIsImRlZmF1bHRWYXJpYW50cyIsIkJhZGdlIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJkaXYiLCJkYXRhLWxvdi1pZCIsImRhdGEtbG92LW5hbWUiLCJkYXRhLWNvbXBvbmVudC1wYXRoIiwiZGF0YS1jb21wb25lbnQtbGluZSIsImRhdGEtY29tcG9uZW50LWZpbGUiLCJkYXRhLWNvbXBvbmVudC1uYW1lIiwiZGF0YS1jb21wb25lbnQtY29udGVudCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJiYWRnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGN2YSwgdHlwZSBWYXJpYW50UHJvcHMgfSBmcm9tIFwiY2xhc3MtdmFyaWFuY2UtYXV0aG9yaXR5XCJcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIlxuXG5jb25zdCBiYWRnZVZhcmlhbnRzID0gY3ZhKFxuICBcImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkLWZ1bGwgYm9yZGVyIHB4LTIuNSBweS0wLjUgdGV4dC14cyBmb250LXNlbWlib2xkIHRyYW5zaXRpb24tY29sb3JzIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1yaW5nIGZvY3VzOnJpbmctb2Zmc2V0LTJcIixcbiAge1xuICAgIHZhcmlhbnRzOiB7XG4gICAgICB2YXJpYW50OiB7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgXCJib3JkZXItdHJhbnNwYXJlbnQgYmctcHJpbWFyeSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBob3ZlcjpiZy1wcmltYXJ5LzgwXCIsXG4gICAgICAgIHNlY29uZGFyeTpcbiAgICAgICAgICBcImJvcmRlci10cmFuc3BhcmVudCBiZy1zZWNvbmRhcnkgdGV4dC1zZWNvbmRhcnktZm9yZWdyb3VuZCBob3ZlcjpiZy1zZWNvbmRhcnkvODBcIixcbiAgICAgICAgZGVzdHJ1Y3RpdmU6XG4gICAgICAgICAgXCJib3JkZXItdHJhbnNwYXJlbnQgYmctZGVzdHJ1Y3RpdmUgdGV4dC1kZXN0cnVjdGl2ZS1mb3JlZ3JvdW5kIGhvdmVyOmJnLWRlc3RydWN0aXZlLzgwXCIsXG4gICAgICAgIG91dGxpbmU6IFwidGV4dC1mb3JlZ3JvdW5kXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZGVmYXVsdFZhcmlhbnRzOiB7XG4gICAgICB2YXJpYW50OiBcImRlZmF1bHRcIixcbiAgICB9LFxuICB9XG4pXG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFkZ2VQcm9wc1xuICBleHRlbmRzIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PixcbiAgICBWYXJpYW50UHJvcHM8dHlwZW9mIGJhZGdlVmFyaWFudHM+IHt9XG5cbmZ1bmN0aW9uIEJhZGdlKHsgY2xhc3NOYW1lLCB2YXJpYW50LCAuLi5wcm9wcyB9OiBCYWRnZVByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NuKGJhZGdlVmFyaWFudHMoeyB2YXJpYW50IH0pLCBjbGFzc05hbWUpfSB7Li4ucHJvcHN9IC8+XG4gIClcbn1cblxuZXhwb3J0IHsgQmFkZ2UsIGJhZGdlVmFyaWFudHMgfVxuIl0sImZpbGUiOiIvaG9tZS9zanJzaDkxNi9wdWJsaWNfaHRtbC9zcmMvY29tcG9uZW50cy91aS9iYWRnZS50c3gifQ==