import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/table.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/components/ui/table.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=5efa796b"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport2_react);
import { cn } from "/src/lib/utils.ts";
const Table = /*#__PURE__*/ React.forwardRef(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV("div", {
        "data-lov-id": "src/components/ui/table.tsx:9:2",
        "data-lov-name": "div",
        "data-component-path": "src/components/ui/table.tsx",
        "data-component-line": "9",
        "data-component-file": "table.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%22className%22%3A%22relative%20w-full%20overflow-auto%22%7D",
        className: "relative w-full overflow-auto",
        children: /*#__PURE__*/ _jsxDEV("table", {
            "data-lov-id": "src/components/ui/table.tsx:10:4",
            "data-lov-name": "table",
            "data-component-path": "src/components/ui/table.tsx",
            "data-component-line": "10",
            "data-component-file": "table.tsx",
            "data-component-name": "table",
            "data-component-content": "%7B%7D",
            ref: ref,
            className: cn("w-full caption-bottom text-sm", className),
            ...props
        }, void 0, false, {
            fileName: "/home/sjrsh916/public_html/src/components/ui/table.tsx",
            lineNumber: 10,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/components/ui/table.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
_c1 = Table;
Table.displayName = "Table";
const TableHeader = /*#__PURE__*/ React.forwardRef(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV("thead", {
        "data-lov-id": "src/components/ui/table.tsx:23:2",
        "data-lov-name": "thead",
        "data-component-path": "src/components/ui/table.tsx",
        "data-component-line": "23",
        "data-component-file": "table.tsx",
        "data-component-name": "thead",
        "data-component-content": "%7B%7D",
        ref: ref,
        className: cn("[&_tr]:border-b", className),
        ...props
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/components/ui/table.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, this));
_c3 = TableHeader;
TableHeader.displayName = "TableHeader";
const TableBody = /*#__PURE__*/ React.forwardRef(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV("tbody", {
        "data-lov-id": "src/components/ui/table.tsx:31:2",
        "data-lov-name": "tbody",
        "data-component-path": "src/components/ui/table.tsx",
        "data-component-line": "31",
        "data-component-file": "table.tsx",
        "data-component-name": "tbody",
        "data-component-content": "%7B%7D",
        ref: ref,
        className: cn("[&_tr:last-child]:border-0", className),
        ...props
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/components/ui/table.tsx",
        lineNumber: 31,
        columnNumber: 3
    }, this));
_c5 = TableBody;
TableBody.displayName = "TableBody";
const TableFooter = /*#__PURE__*/ React.forwardRef(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV("tfoot", {
        "data-lov-id": "src/components/ui/table.tsx:43:2",
        "data-lov-name": "tfoot",
        "data-component-path": "src/components/ui/table.tsx",
        "data-component-line": "43",
        "data-component-file": "table.tsx",
        "data-component-name": "tfoot",
        "data-component-content": "%7B%7D",
        ref: ref,
        className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/components/ui/table.tsx",
        lineNumber: 43,
        columnNumber: 3
    }, this));
_c7 = TableFooter;
TableFooter.displayName = "TableFooter";
const TableRow = /*#__PURE__*/ React.forwardRef(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV("tr", {
        "data-lov-id": "src/components/ui/table.tsx:58:2",
        "data-lov-name": "tr",
        "data-component-path": "src/components/ui/table.tsx",
        "data-component-line": "58",
        "data-component-file": "table.tsx",
        "data-component-name": "tr",
        "data-component-content": "%7B%7D",
        ref: ref,
        className: cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/components/ui/table.tsx",
        lineNumber: 58,
        columnNumber: 3
    }, this));
_c9 = TableRow;
TableRow.displayName = "TableRow";
const TableHead = /*#__PURE__*/ React.forwardRef(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV("th", {
        "data-lov-id": "src/components/ui/table.tsx:73:2",
        "data-lov-name": "th",
        "data-component-path": "src/components/ui/table.tsx",
        "data-component-line": "73",
        "data-component-file": "table.tsx",
        "data-component-name": "th",
        "data-component-content": "%7B%7D",
        ref: ref,
        className: cn("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/components/ui/table.tsx",
        lineNumber: 73,
        columnNumber: 3
    }, this));
_c11 = TableHead;
TableHead.displayName = "TableHead";
const TableCell = /*#__PURE__*/ React.forwardRef(_c12 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV("td", {
        "data-lov-id": "src/components/ui/table.tsx:88:2",
        "data-lov-name": "td",
        "data-component-path": "src/components/ui/table.tsx",
        "data-component-line": "88",
        "data-component-file": "table.tsx",
        "data-component-name": "td",
        "data-component-content": "%7B%7D",
        ref: ref,
        className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/components/ui/table.tsx",
        lineNumber: 88,
        columnNumber: 3
    }, this));
_c13 = TableCell;
TableCell.displayName = "TableCell";
const TableCaption = /*#__PURE__*/ React.forwardRef(_c14 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV("caption", {
        "data-lov-id": "src/components/ui/table.tsx:100:2",
        "data-lov-name": "caption",
        "data-component-path": "src/components/ui/table.tsx",
        "data-component-line": "100",
        "data-component-file": "table.tsx",
        "data-component-name": "caption",
        "data-component-content": "%7B%7D",
        ref: ref,
        className: cn("mt-4 text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/components/ui/table.tsx",
        lineNumber: 100,
        columnNumber: 3
    }, this));
_c15 = TableCaption;
TableCaption.displayName = "TableCaption";
export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption,  };
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15;
$RefreshReg$(_c, "Table$React.forwardRef");
$RefreshReg$(_c1, "Table");
$RefreshReg$(_c2, "TableHeader$React.forwardRef");
$RefreshReg$(_c3, "TableHeader");
$RefreshReg$(_c4, "TableBody$React.forwardRef");
$RefreshReg$(_c5, "TableBody");
$RefreshReg$(_c6, "TableFooter$React.forwardRef");
$RefreshReg$(_c7, "TableFooter");
$RefreshReg$(_c8, "TableRow$React.forwardRef");
$RefreshReg$(_c9, "TableRow");
$RefreshReg$(_c10, "TableHead$React.forwardRef");
$RefreshReg$(_c11, "TableHead");
$RefreshReg$(_c12, "TableCell$React.forwardRef");
$RefreshReg$(_c13, "TableCell");
$RefreshReg$(_c14, "TableCaption$React.forwardRef");
$RefreshReg$(_c15, "TableCaption");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/components/ui/table.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/components/ui/table.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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QjtRQUFDcEIsZUFBQTtRQUFBQyxpQkFBQTtRQUFBQyx1QkFBQTtRQUFBQyx1QkFBQTtRQUFBQyx1QkFBQTtRQUFBQyx1QkFBQTtRQUFBQywwQkFBQTtRQUNBUixLQUFLQTtRQUNMRixXQUFXSCxHQUFHLGtEQUFrREc7UUFDL0QsR0FBR0MsS0FBSzs7Ozs7OztBQUdic0IsVUFBVVgsV0FBVyxHQUFHO0FBRXhCLE1BQU1hLDZCQUFlN0IsTUFBTUcsVUFBVSxRQUduQyxDQUFDLEVBQUVDLFNBQVMsRUFBRSxHQUFHQyxPQUFPLEVBQUVDLG9CQUMxQixRQUFDd0I7UUFBTXRCLGVBQUE7UUFBQUMsaUJBQUE7UUFBQUMsdUJBQUE7UUFBQUMsdUJBQUE7UUFBQUMsdUJBQUE7UUFBQUMsdUJBQUE7UUFBQUMsMEJBQUE7UUFDTFIsS0FBS0E7UUFDTEYsV0FBV0gsR0FBRyxzQ0FBc0NHO1FBQ25ELEdBQUdDLEtBQUs7Ozs7Ozs7QUFHYndCLGFBQWFiLFdBQVcsR0FBRztBQUUzQixTQUNFZCxLQUFLLEVBQ0xlLFdBQVcsRUFDWEUsU0FBUyxFQUNURSxXQUFXLEVBQ1hJLFNBQVMsRUFDVEYsUUFBUSxFQUNSSSxTQUFTLEVBQ1RFLFlBQVksS0FDZCIsIm5hbWVzIjpbIlJlYWN0IiwiY24iLCJUYWJsZSIsImZvcndhcmRSZWYiLCJjbGFzc05hbWUiLCJwcm9wcyIsInJlZiIsImRpdiIsImRhdGEtbG92LWlkIiwiZGF0YS1sb3YtbmFtZSIsImRhdGEtY29tcG9uZW50LXBhdGgiLCJkYXRhLWNvbXBvbmVudC1saW5lIiwiZGF0YS1jb21wb25lbnQtZmlsZSIsImRhdGEtY29tcG9uZW50LW5hbWUiLCJkYXRhLWNvbXBvbmVudC1jb250ZW50IiwidGFibGUiLCJkaXNwbGF5TmFtZSIsIlRhYmxlSGVhZGVyIiwidGhlYWQiLCJUYWJsZUJvZHkiLCJ0Ym9keSIsIlRhYmxlRm9vdGVyIiwidGZvb3QiLCJUYWJsZVJvdyIsInRyIiwiVGFibGVIZWFkIiwidGgiLCJUYWJsZUNlbGwiLCJ0ZCIsIlRhYmxlQ2FwdGlvbiIsImNhcHRpb24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsidGFibGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCJcblxuY29uc3QgVGFibGUgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBIVE1MVGFibGVFbGVtZW50LFxuICBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MVGFibGVFbGVtZW50PlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBvdmVyZmxvdy1hdXRvXCI+XG4gICAgPHRhYmxlXG4gICAgICByZWY9e3JlZn1cbiAgICAgIGNsYXNzTmFtZT17Y24oXCJ3LWZ1bGwgY2FwdGlvbi1ib3R0b20gdGV4dC1zbVwiLCBjbGFzc05hbWUpfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gIDwvZGl2PlxuKSlcblRhYmxlLmRpc3BsYXlOYW1lID0gXCJUYWJsZVwiXG5cbmNvbnN0IFRhYmxlSGVhZGVyID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgSFRNTFRhYmxlU2VjdGlvbkVsZW1lbnQsXG4gIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxUYWJsZVNlY3Rpb25FbGVtZW50PlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8dGhlYWQgcmVmPXtyZWZ9IGNsYXNzTmFtZT17Y24oXCJbJl90cl06Ym9yZGVyLWJcIiwgY2xhc3NOYW1lKX0gey4uLnByb3BzfSAvPlxuKSlcblRhYmxlSGVhZGVyLmRpc3BsYXlOYW1lID0gXCJUYWJsZUhlYWRlclwiXG5cbmNvbnN0IFRhYmxlQm9keSA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIEhUTUxUYWJsZVNlY3Rpb25FbGVtZW50LFxuICBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MVGFibGVTZWN0aW9uRWxlbWVudD5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPHRib2R5XG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcIlsmX3RyOmxhc3QtY2hpbGRdOmJvcmRlci0wXCIsIGNsYXNzTmFtZSl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSlcblRhYmxlQm9keS5kaXNwbGF5TmFtZSA9IFwiVGFibGVCb2R5XCJcblxuY29uc3QgVGFibGVGb290ZXIgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBIVE1MVGFibGVTZWN0aW9uRWxlbWVudCxcbiAgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTFRhYmxlU2VjdGlvbkVsZW1lbnQ+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDx0Zm9vdFxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcImJvcmRlci10IGJnLW11dGVkLzUwIGZvbnQtbWVkaXVtIFsmPnRyXTpsYXN0OmJvcmRlci1iLTBcIixcbiAgICAgIGNsYXNzTmFtZVxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSlcblRhYmxlRm9vdGVyLmRpc3BsYXlOYW1lID0gXCJUYWJsZUZvb3RlclwiXG5cbmNvbnN0IFRhYmxlUm93ID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgSFRNTFRhYmxlUm93RWxlbWVudCxcbiAgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTFRhYmxlUm93RWxlbWVudD5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPHRyXG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwiYm9yZGVyLWIgdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6YmctbXV0ZWQvNTAgZGF0YS1bc3RhdGU9c2VsZWN0ZWRdOmJnLW11dGVkXCIsXG4gICAgICBjbGFzc05hbWVcbiAgICApfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpXG5UYWJsZVJvdy5kaXNwbGF5TmFtZSA9IFwiVGFibGVSb3dcIlxuXG5jb25zdCBUYWJsZUhlYWQgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBIVE1MVGFibGVDZWxsRWxlbWVudCxcbiAgUmVhY3QuVGhIVE1MQXR0cmlidXRlczxIVE1MVGFibGVDZWxsRWxlbWVudD5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPHRoXG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwiaC0xMiBweC00IHRleHQtbGVmdCBhbGlnbi1taWRkbGUgZm9udC1tZWRpdW0gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIFsmOmhhcyhbcm9sZT1jaGVja2JveF0pXTpwci0wXCIsXG4gICAgICBjbGFzc05hbWVcbiAgICApfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpXG5UYWJsZUhlYWQuZGlzcGxheU5hbWUgPSBcIlRhYmxlSGVhZFwiXG5cbmNvbnN0IFRhYmxlQ2VsbCA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIEhUTUxUYWJsZUNlbGxFbGVtZW50LFxuICBSZWFjdC5UZEhUTUxBdHRyaWJ1dGVzPEhUTUxUYWJsZUNlbGxFbGVtZW50PlxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8dGRcbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFwicC00IGFsaWduLW1pZGRsZSBbJjpoYXMoW3JvbGU9Y2hlY2tib3hdKV06cHItMFwiLCBjbGFzc05hbWUpfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpXG5UYWJsZUNlbGwuZGlzcGxheU5hbWUgPSBcIlRhYmxlQ2VsbFwiXG5cbmNvbnN0IFRhYmxlQ2FwdGlvbiA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIEhUTUxUYWJsZUNhcHRpb25FbGVtZW50LFxuICBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MVGFibGVDYXB0aW9uRWxlbWVudD5cbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPGNhcHRpb25cbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFwibXQtNCB0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiLCBjbGFzc05hbWUpfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpXG5UYWJsZUNhcHRpb24uZGlzcGxheU5hbWUgPSBcIlRhYmxlQ2FwdGlvblwiXG5cbmV4cG9ydCB7XG4gIFRhYmxlLFxuICBUYWJsZUhlYWRlcixcbiAgVGFibGVCb2R5LFxuICBUYWJsZUZvb3RlcixcbiAgVGFibGVIZWFkLFxuICBUYWJsZVJvdyxcbiAgVGFibGVDZWxsLFxuICBUYWJsZUNhcHRpb24sXG59XG4iXSwiZmlsZSI6Ii9ob21lL3NqcnNoOTE2L3B1YmxpY19odG1sL3NyYy9jb21wb25lbnRzL3VpL3RhYmxlLnRzeCJ9