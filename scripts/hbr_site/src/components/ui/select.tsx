import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/select.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/components/ui/select.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=5efa796b"; const React = ((m) => m?.__esModule ? m : { ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {}, default: m })(__vite__cjsImport2_react);
import * as SelectPrimitive from "/node_modules/.vite/deps/@radix-ui_react-select.js?v=5efa796b";
import { Check, ChevronDown, ChevronUp } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
import { cn } from "/src/lib/utils.ts";
const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;
const SelectTrigger = /*#__PURE__*/ React.forwardRef(_c = ({ className, children, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(SelectPrimitive.Trigger, {
        "data-lov-id": "src/components/ui/select.tsx:17:2",
        "data-lov-name": "SelectPrimitive.Trigger",
        "data-component-path": "src/components/ui/select.tsx",
        "data-component-line": "17",
        "data-component-file": "select.tsx",
        "data-component-name": "SelectPrimitive.Trigger",
        "data-component-content": "%7B%7D",
        ref: ref,
        className: cn("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ _jsxDEV(SelectPrimitive.Icon, {
                "data-lov-id": "src/components/ui/select.tsx:26:4",
                "data-lov-name": "SelectPrimitive.Icon",
                "data-component-path": "src/components/ui/select.tsx",
                "data-component-line": "26",
                "data-component-file": "select.tsx",
                "data-component-name": "SelectPrimitive.Icon",
                "data-component-content": "%7B%7D",
                asChild: true,
                children: /*#__PURE__*/ _jsxDEV(ChevronDown, {
                    "data-lov-id": "src/components/ui/select.tsx:27:6",
                    "data-lov-name": "ChevronDown",
                    "data-component-path": "src/components/ui/select.tsx",
                    "data-component-line": "27",
                    "data-component-file": "select.tsx",
                    "data-component-name": "ChevronDown",
                    "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%20opacity-50%22%7D",
                    className: "h-4 w-4 opacity-50"
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/components/ui/select.tsx",
                    lineNumber: 27,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/ui/select.tsx",
                lineNumber: 26,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/sjrsh916/public_html/src/components/ui/select.tsx",
        lineNumber: 17,
        columnNumber: 3
    }, this));
_c1 = SelectTrigger;
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
const SelectScrollUpButton = /*#__PURE__*/ React.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(SelectPrimitive.ScrollUpButton, {
        "data-lov-id": "src/components/ui/select.tsx:37:2",
        "data-lov-name": "SelectPrimitive.ScrollUpButton",
        "data-component-path": "src/components/ui/select.tsx",
        "data-component-line": "37",
        "data-component-file": "select.tsx",
        "data-component-name": "SelectPrimitive.ScrollUpButton",
        "data-component-content": "%7B%7D",
        ref: ref,
        className: cn("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ _jsxDEV(ChevronUp, {
            "data-lov-id": "src/components/ui/select.tsx:45:4",
            "data-lov-name": "ChevronUp",
            "data-component-path": "src/components/ui/select.tsx",
            "data-component-line": "45",
            "data-component-file": "select.tsx",
            "data-component-name": "ChevronUp",
            "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%22%7D",
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "/home/sjrsh916/public_html/src/components/ui/select.tsx",
            lineNumber: 45,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/components/ui/select.tsx",
        lineNumber: 37,
        columnNumber: 3
    }, this));
_c2 = SelectScrollUpButton;
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
const SelectScrollDownButton = /*#__PURE__*/ React.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(SelectPrimitive.ScrollDownButton, {
        "data-lov-id": "src/components/ui/select.tsx:54:2",
        "data-lov-name": "SelectPrimitive.ScrollDownButton",
        "data-component-path": "src/components/ui/select.tsx",
        "data-component-line": "54",
        "data-component-file": "select.tsx",
        "data-component-name": "SelectPrimitive.ScrollDownButton",
        "data-component-content": "%7B%7D",
        ref: ref,
        className: cn("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ _jsxDEV(ChevronDown, {
            "data-lov-id": "src/components/ui/select.tsx:62:4",
            "data-lov-name": "ChevronDown",
            "data-component-path": "src/components/ui/select.tsx",
            "data-component-line": "62",
            "data-component-file": "select.tsx",
            "data-component-name": "ChevronDown",
            "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%22%7D",
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "/home/sjrsh916/public_html/src/components/ui/select.tsx",
            lineNumber: 62,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/components/ui/select.tsx",
        lineNumber: 54,
        columnNumber: 3
    }, this));
_c3 = SelectScrollDownButton;
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
const SelectContent = /*#__PURE__*/ React.forwardRef(_c4 = ({ className, children, position = "popper", ...props }, ref)=>/*#__PURE__*/ _jsxDEV(SelectPrimitive.Portal, {
        "data-lov-id": "src/components/ui/select.tsx:72:2",
        "data-lov-name": "SelectPrimitive.Portal",
        "data-component-path": "src/components/ui/select.tsx",
        "data-component-line": "72",
        "data-component-file": "select.tsx",
        "data-component-name": "SelectPrimitive.Portal",
        "data-component-content": "%7B%7D",
        children: /*#__PURE__*/ _jsxDEV(SelectPrimitive.Content, {
            "data-lov-id": "src/components/ui/select.tsx:73:4",
            "data-lov-name": "SelectPrimitive.Content",
            "data-component-path": "src/components/ui/select.tsx",
            "data-component-line": "73",
            "data-component-file": "select.tsx",
            "data-component-name": "SelectPrimitive.Content",
            "data-component-content": "%7B%7D",
            ref: ref,
            className: cn("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ _jsxDEV(SelectScrollUpButton, {
                    "data-lov-id": "src/components/ui/select.tsx:84:6",
                    "data-lov-name": "SelectScrollUpButton",
                    "data-component-path": "src/components/ui/select.tsx",
                    "data-component-line": "84",
                    "data-component-file": "select.tsx",
                    "data-component-name": "SelectScrollUpButton",
                    "data-component-content": "%7B%7D"
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/components/ui/select.tsx",
                    lineNumber: 84,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ _jsxDEV(SelectPrimitive.Viewport, {
                    "data-lov-id": "src/components/ui/select.tsx:85:6",
                    "data-lov-name": "SelectPrimitive.Viewport",
                    "data-component-path": "src/components/ui/select.tsx",
                    "data-component-line": "85",
                    "data-component-file": "select.tsx",
                    "data-component-name": "SelectPrimitive.Viewport",
                    "data-component-content": "%7B%7D",
                    className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                    children: children
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/components/ui/select.tsx",
                    lineNumber: 85,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ _jsxDEV(SelectScrollDownButton, {
                    "data-lov-id": "src/components/ui/select.tsx:94:6",
                    "data-lov-name": "SelectScrollDownButton",
                    "data-component-path": "src/components/ui/select.tsx",
                    "data-component-line": "94",
                    "data-component-file": "select.tsx",
                    "data-component-name": "SelectScrollDownButton",
                    "data-component-content": "%7B%7D"
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/components/ui/select.tsx",
                    lineNumber: 94,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/sjrsh916/public_html/src/components/ui/select.tsx",
            lineNumber: 73,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/components/ui/select.tsx",
        lineNumber: 72,
        columnNumber: 3
    }, this));
_c5 = SelectContent;
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectLabel = /*#__PURE__*/ React.forwardRef(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(SelectPrimitive.Label, {
        "data-lov-id": "src/components/ui/select.tsx:104:2",
        "data-lov-name": "SelectPrimitive.Label",
        "data-component-path": "src/components/ui/select.tsx",
        "data-component-line": "104",
        "data-component-file": "select.tsx",
        "data-component-name": "SelectPrimitive.Label",
        "data-component-content": "%7B%7D",
        ref: ref,
        className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/components/ui/select.tsx",
        lineNumber: 104,
        columnNumber: 3
    }, this));
_c7 = SelectLabel;
SelectLabel.displayName = SelectPrimitive.Label.displayName;
const SelectItem = /*#__PURE__*/ React.forwardRef(_c8 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(SelectPrimitive.Item, {
        "data-lov-id": "src/components/ui/select.tsx:116:2",
        "data-lov-name": "SelectPrimitive.Item",
        "data-component-path": "src/components/ui/select.tsx",
        "data-component-line": "116",
        "data-component-file": "select.tsx",
        "data-component-name": "SelectPrimitive.Item",
        "data-component-content": "%7B%7D",
        ref: ref,
        className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ _jsxDEV("span", {
                "data-lov-id": "src/components/ui/select.tsx:124:4",
                "data-lov-name": "span",
                "data-component-path": "src/components/ui/select.tsx",
                "data-component-line": "124",
                "data-component-file": "select.tsx",
                "data-component-name": "span",
                "data-component-content": "%7B%22className%22%3A%22absolute%20left-2%20flex%20h-3.5%20w-3.5%20items-center%20justify-center%22%7D",
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ _jsxDEV(SelectPrimitive.ItemIndicator, {
                    "data-lov-id": "src/components/ui/select.tsx:125:6",
                    "data-lov-name": "SelectPrimitive.ItemIndicator",
                    "data-component-path": "src/components/ui/select.tsx",
                    "data-component-line": "125",
                    "data-component-file": "select.tsx",
                    "data-component-name": "SelectPrimitive.ItemIndicator",
                    "data-component-content": "%7B%7D",
                    children: /*#__PURE__*/ _jsxDEV(Check, {
                        "data-lov-id": "src/components/ui/select.tsx:126:8",
                        "data-lov-name": "Check",
                        "data-component-path": "src/components/ui/select.tsx",
                        "data-component-line": "126",
                        "data-component-file": "select.tsx",
                        "data-component-name": "Check",
                        "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%22%7D",
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/components/ui/select.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/components/ui/select.tsx",
                    lineNumber: 125,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/ui/select.tsx",
                lineNumber: 124,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV(SelectPrimitive.ItemText, {
                "data-lov-id": "src/components/ui/select.tsx:130:4",
                "data-lov-name": "SelectPrimitive.ItemText",
                "data-component-path": "src/components/ui/select.tsx",
                "data-component-line": "130",
                "data-component-file": "select.tsx",
                "data-component-name": "SelectPrimitive.ItemText",
                "data-component-content": "%7B%7D",
                children: children
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/ui/select.tsx",
                lineNumber: 130,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/sjrsh916/public_html/src/components/ui/select.tsx",
        lineNumber: 116,
        columnNumber: 3
    }, this));
_c9 = SelectItem;
SelectItem.displayName = SelectPrimitive.Item.displayName;
const SelectSeparator = /*#__PURE__*/ React.forwardRef(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ _jsxDEV(SelectPrimitive.Separator, {
        "data-lov-id": "src/components/ui/select.tsx:139:2",
        "data-lov-name": "SelectPrimitive.Separator",
        "data-component-path": "src/components/ui/select.tsx",
        "data-component-line": "139",
        "data-component-file": "select.tsx",
        "data-component-name": "SelectPrimitive.Separator",
        "data-component-content": "%7B%7D",
        ref: ref,
        className: cn("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/components/ui/select.tsx",
        lineNumber: 139,
        columnNumber: 3
    }, this));
_c11 = SelectSeparator;
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
export { Select, SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectLabel, SelectItem, SelectSeparator, SelectScrollUpButton, SelectScrollDownButton,  };
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
$RefreshReg$(_c, "SelectTrigger$React.forwardRef");
$RefreshReg$(_c1, "SelectTrigger");
$RefreshReg$(_c2, "SelectScrollUpButton");
$RefreshReg$(_c3, "SelectScrollDownButton");
$RefreshReg$(_c4, "SelectContent$React.forwardRef");
$RefreshReg$(_c5, "SelectContent");
$RefreshReg$(_c6, "SelectLabel$React.forwardRef");
$RefreshReg$(_c7, "SelectLabel");
$RefreshReg$(_c8, "SelectItem$React.forwardRef");
$RefreshReg$(_c9, "SelectItem");
$RefreshReg$(_c10, "SelectSeparator$React.forwardRef");
$RefreshReg$(_c11, "SelectSeparator");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/components/ui/select.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/components/ui/select.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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LGdCQUFnQndDLElBQUksQ0FBQ2IsV0FBVTtBQUV4RCxNQUFNaUIsZ0NBQWtCN0MsTUFBTWEsVUFBVSxRQUd0QyxDQUFDLEVBQUVDLFNBQVMsRUFBRSxHQUFHRSxPQUFPLEVBQUVDLG9CQUMxQixRQUFDaEIsZ0JBQWdCNkMsU0FBUTtRQUFBM0IsZUFBQTtRQUFBQyxpQkFBQTtRQUFBQyx1QkFBQTtRQUFBQyx1QkFBQTtRQUFBQyx1QkFBQTtRQUFBQyx1QkFBQTtRQUFBQywwQkFBQTtRQUN2QlIsS0FBS0E7UUFDTEgsV0FBV1QsR0FBRyw0QkFBNEJTO1FBQ3pDLEdBQUdFLEtBQUs7Ozs7Ozs7QUFHYjZCLGdCQUFnQmpCLFdBQVcsR0FBRzNCLGdCQUFnQjZDLFNBQVMsQ0FBQ2xCLFdBQVU7QUFFbEUsU0FDRXRCLE1BQU0sRUFDTkUsV0FBVyxFQUNYRSxXQUFXLEVBQ1hFLGFBQWEsRUFDYnFCLGFBQWEsRUFDYkssV0FBVyxFQUNYRSxVQUFVLEVBQ1ZLLGVBQWUsRUFDZmhCLG9CQUFvQixFQUNwQkUsc0JBQXNCLEtBQ3hCIiwibmFtZXMiOlsiUmVhY3QiLCJTZWxlY3RQcmltaXRpdmUiLCJDaGVjayIsIkNoZXZyb25Eb3duIiwiQ2hldnJvblVwIiwiY24iLCJTZWxlY3QiLCJSb290IiwiU2VsZWN0R3JvdXAiLCJHcm91cCIsIlNlbGVjdFZhbHVlIiwiVmFsdWUiLCJTZWxlY3RUcmlnZ2VyIiwiZm9yd2FyZFJlZiIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwicHJvcHMiLCJyZWYiLCJUcmlnZ2VyIiwiZGF0YS1sb3YtaWQiLCJkYXRhLWxvdi1uYW1lIiwiZGF0YS1jb21wb25lbnQtcGF0aCIsImRhdGEtY29tcG9uZW50LWxpbmUiLCJkYXRhLWNvbXBvbmVudC1maWxlIiwiZGF0YS1jb21wb25lbnQtbmFtZSIsImRhdGEtY29tcG9uZW50LWNvbnRlbnQiLCJJY29uIiwiYXNDaGlsZCIsImRpc3BsYXlOYW1lIiwiU2VsZWN0U2Nyb2xsVXBCdXR0b24iLCJTY3JvbGxVcEJ1dHRvbiIsIlNlbGVjdFNjcm9sbERvd25CdXR0b24iLCJTY3JvbGxEb3duQnV0dG9uIiwiU2VsZWN0Q29udGVudCIsInBvc2l0aW9uIiwiUG9ydGFsIiwiQ29udGVudCIsIlZpZXdwb3J0IiwiU2VsZWN0TGFiZWwiLCJMYWJlbCIsIlNlbGVjdEl0ZW0iLCJJdGVtIiwic3BhbiIsIkl0ZW1JbmRpY2F0b3IiLCJJdGVtVGV4dCIsIlNlbGVjdFNlcGFyYXRvciIsIlNlcGFyYXRvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJzZWxlY3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgKiBhcyBTZWxlY3RQcmltaXRpdmUgZnJvbSBcIkByYWRpeC11aS9yZWFjdC1zZWxlY3RcIlxuaW1wb3J0IHsgQ2hlY2ssIENoZXZyb25Eb3duLCBDaGV2cm9uVXAgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCJcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIlxuXG5jb25zdCBTZWxlY3QgPSBTZWxlY3RQcmltaXRpdmUuUm9vdFxuXG5jb25zdCBTZWxlY3RHcm91cCA9IFNlbGVjdFByaW1pdGl2ZS5Hcm91cFxuXG5jb25zdCBTZWxlY3RWYWx1ZSA9IFNlbGVjdFByaW1pdGl2ZS5WYWx1ZVxuXG5jb25zdCBTZWxlY3RUcmlnZ2VyID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgU2VsZWN0UHJpbWl0aXZlLlRyaWdnZXI+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIFNlbGVjdFByaW1pdGl2ZS5UcmlnZ2VyPlxuPigoeyBjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9LCByZWYpID0+IChcbiAgPFNlbGVjdFByaW1pdGl2ZS5UcmlnZ2VyXG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcbiAgICAgIFwiZmxleCBoLTEwIHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1pbnB1dCBiZy1iYWNrZ3JvdW5kIHB4LTMgcHktMiB0ZXh0LXNtIHJpbmctb2Zmc2V0LWJhY2tncm91bmQgcGxhY2Vob2xkZXI6dGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1yaW5nIGZvY3VzOnJpbmctb2Zmc2V0LTIgZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkIGRpc2FibGVkOm9wYWNpdHktNTAgWyY+c3Bhbl06bGluZS1jbGFtcC0xXCIsXG4gICAgICBjbGFzc05hbWVcbiAgICApfVxuICAgIHsuLi5wcm9wc31cbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8U2VsZWN0UHJpbWl0aXZlLkljb24gYXNDaGlsZD5cbiAgICAgIDxDaGV2cm9uRG93biBjbGFzc05hbWU9XCJoLTQgdy00IG9wYWNpdHktNTBcIiAvPlxuICAgIDwvU2VsZWN0UHJpbWl0aXZlLkljb24+XG4gIDwvU2VsZWN0UHJpbWl0aXZlLlRyaWdnZXI+XG4pKVxuU2VsZWN0VHJpZ2dlci5kaXNwbGF5TmFtZSA9IFNlbGVjdFByaW1pdGl2ZS5UcmlnZ2VyLmRpc3BsYXlOYW1lXG5cbmNvbnN0IFNlbGVjdFNjcm9sbFVwQnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgU2VsZWN0UHJpbWl0aXZlLlNjcm9sbFVwQnV0dG9uPixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBTZWxlY3RQcmltaXRpdmUuU2Nyb2xsVXBCdXR0b24+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxTZWxlY3RQcmltaXRpdmUuU2Nyb2xsVXBCdXR0b25cbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJmbGV4IGN1cnNvci1kZWZhdWx0IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS0xXCIsXG4gICAgICBjbGFzc05hbWVcbiAgICApfVxuICAgIHsuLi5wcm9wc31cbiAgPlxuICAgIDxDaGV2cm9uVXAgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gIDwvU2VsZWN0UHJpbWl0aXZlLlNjcm9sbFVwQnV0dG9uPlxuKSlcblNlbGVjdFNjcm9sbFVwQnV0dG9uLmRpc3BsYXlOYW1lID0gU2VsZWN0UHJpbWl0aXZlLlNjcm9sbFVwQnV0dG9uLmRpc3BsYXlOYW1lXG5cbmNvbnN0IFNlbGVjdFNjcm9sbERvd25CdXR0b24gPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBTZWxlY3RQcmltaXRpdmUuU2Nyb2xsRG93bkJ1dHRvbj4sXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgU2VsZWN0UHJpbWl0aXZlLlNjcm9sbERvd25CdXR0b24+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxTZWxlY3RQcmltaXRpdmUuU2Nyb2xsRG93bkJ1dHRvblxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcImZsZXggY3Vyc29yLWRlZmF1bHQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB5LTFcIixcbiAgICAgIGNsYXNzTmFtZVxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICA+XG4gICAgPENoZXZyb25Eb3duIGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxuICA8L1NlbGVjdFByaW1pdGl2ZS5TY3JvbGxEb3duQnV0dG9uPlxuKSlcblNlbGVjdFNjcm9sbERvd25CdXR0b24uZGlzcGxheU5hbWUgPVxuICBTZWxlY3RQcmltaXRpdmUuU2Nyb2xsRG93bkJ1dHRvbi5kaXNwbGF5TmFtZVxuXG5jb25zdCBTZWxlY3RDb250ZW50ID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgU2VsZWN0UHJpbWl0aXZlLkNvbnRlbnQ+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIFNlbGVjdFByaW1pdGl2ZS5Db250ZW50PlxuPigoeyBjbGFzc05hbWUsIGNoaWxkcmVuLCBwb3NpdGlvbiA9IFwicG9wcGVyXCIsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxuICA8U2VsZWN0UHJpbWl0aXZlLlBvcnRhbD5cbiAgICA8U2VsZWN0UHJpbWl0aXZlLkNvbnRlbnRcbiAgICAgIHJlZj17cmVmfVxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJyZWxhdGl2ZSB6LTUwIG1heC1oLTk2IG1pbi13LVs4cmVtXSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1tZCBib3JkZXIgYmctcG9wb3ZlciB0ZXh0LXBvcG92ZXItZm9yZWdyb3VuZCBzaGFkb3ctbWQgZGF0YS1bc3RhdGU9b3Blbl06YW5pbWF0ZS1pbiBkYXRhLVtzdGF0ZT1jbG9zZWRdOmFuaW1hdGUtb3V0IGRhdGEtW3N0YXRlPWNsb3NlZF06ZmFkZS1vdXQtMCBkYXRhLVtzdGF0ZT1vcGVuXTpmYWRlLWluLTAgZGF0YS1bc3RhdGU9Y2xvc2VkXTp6b29tLW91dC05NSBkYXRhLVtzdGF0ZT1vcGVuXTp6b29tLWluLTk1IGRhdGEtW3NpZGU9Ym90dG9tXTpzbGlkZS1pbi1mcm9tLXRvcC0yIGRhdGEtW3NpZGU9bGVmdF06c2xpZGUtaW4tZnJvbS1yaWdodC0yIGRhdGEtW3NpZGU9cmlnaHRdOnNsaWRlLWluLWZyb20tbGVmdC0yIGRhdGEtW3NpZGU9dG9wXTpzbGlkZS1pbi1mcm9tLWJvdHRvbS0yXCIsXG4gICAgICAgIHBvc2l0aW9uID09PSBcInBvcHBlclwiICYmXG4gICAgICAgICAgXCJkYXRhLVtzaWRlPWJvdHRvbV06dHJhbnNsYXRlLXktMSBkYXRhLVtzaWRlPWxlZnRdOi10cmFuc2xhdGUteC0xIGRhdGEtW3NpZGU9cmlnaHRdOnRyYW5zbGF0ZS14LTEgZGF0YS1bc2lkZT10b3BdOi10cmFuc2xhdGUteS0xXCIsXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8U2VsZWN0U2Nyb2xsVXBCdXR0b24gLz5cbiAgICAgIDxTZWxlY3RQcmltaXRpdmUuVmlld3BvcnRcbiAgICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgICBcInAtMVwiLFxuICAgICAgICAgIHBvc2l0aW9uID09PSBcInBvcHBlclwiICYmXG4gICAgICAgICAgICBcImgtW3ZhcigtLXJhZGl4LXNlbGVjdC10cmlnZ2VyLWhlaWdodCldIHctZnVsbCBtaW4tdy1bdmFyKC0tcmFkaXgtc2VsZWN0LXRyaWdnZXItd2lkdGgpXVwiXG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvU2VsZWN0UHJpbWl0aXZlLlZpZXdwb3J0PlxuICAgICAgPFNlbGVjdFNjcm9sbERvd25CdXR0b24gLz5cbiAgICA8L1NlbGVjdFByaW1pdGl2ZS5Db250ZW50PlxuICA8L1NlbGVjdFByaW1pdGl2ZS5Qb3J0YWw+XG4pKVxuU2VsZWN0Q29udGVudC5kaXNwbGF5TmFtZSA9IFNlbGVjdFByaW1pdGl2ZS5Db250ZW50LmRpc3BsYXlOYW1lXG5cbmNvbnN0IFNlbGVjdExhYmVsID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgU2VsZWN0UHJpbWl0aXZlLkxhYmVsPixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBTZWxlY3RQcmltaXRpdmUuTGFiZWw+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxTZWxlY3RQcmltaXRpdmUuTGFiZWxcbiAgICByZWY9e3JlZn1cbiAgICBjbGFzc05hbWU9e2NuKFwicHktMS41IHBsLTggcHItMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIiwgY2xhc3NOYW1lKX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKVxuU2VsZWN0TGFiZWwuZGlzcGxheU5hbWUgPSBTZWxlY3RQcmltaXRpdmUuTGFiZWwuZGlzcGxheU5hbWVcblxuY29uc3QgU2VsZWN0SXRlbSA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIFNlbGVjdFByaW1pdGl2ZS5JdGVtPixcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBTZWxlY3RQcmltaXRpdmUuSXRlbT5cbj4oKHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxTZWxlY3RQcmltaXRpdmUuSXRlbVxuICAgIHJlZj17cmVmfVxuICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICBcInJlbGF0aXZlIGZsZXggdy1mdWxsIGN1cnNvci1kZWZhdWx0IHNlbGVjdC1ub25lIGl0ZW1zLWNlbnRlciByb3VuZGVkLXNtIHB5LTEuNSBwbC04IHByLTIgdGV4dC1zbSBvdXRsaW5lLW5vbmUgZm9jdXM6YmctYWNjZW50IGZvY3VzOnRleHQtYWNjZW50LWZvcmVncm91bmQgZGF0YS1bZGlzYWJsZWRdOnBvaW50ZXItZXZlbnRzLW5vbmUgZGF0YS1bZGlzYWJsZWRdOm9wYWNpdHktNTBcIixcbiAgICAgIGNsYXNzTmFtZVxuICAgICl9XG4gICAgey4uLnByb3BzfVxuICA+XG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0yIGZsZXggaC0zLjUgdy0zLjUgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8U2VsZWN0UHJpbWl0aXZlLkl0ZW1JbmRpY2F0b3I+XG4gICAgICAgIDxDaGVjayBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICAgIDwvU2VsZWN0UHJpbWl0aXZlLkl0ZW1JbmRpY2F0b3I+XG4gICAgPC9zcGFuPlxuXG4gICAgPFNlbGVjdFByaW1pdGl2ZS5JdGVtVGV4dD57Y2hpbGRyZW59PC9TZWxlY3RQcmltaXRpdmUuSXRlbVRleHQ+XG4gIDwvU2VsZWN0UHJpbWl0aXZlLkl0ZW0+XG4pKVxuU2VsZWN0SXRlbS5kaXNwbGF5TmFtZSA9IFNlbGVjdFByaW1pdGl2ZS5JdGVtLmRpc3BsYXlOYW1lXG5cbmNvbnN0IFNlbGVjdFNlcGFyYXRvciA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIFNlbGVjdFByaW1pdGl2ZS5TZXBhcmF0b3I+LFxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIFNlbGVjdFByaW1pdGl2ZS5TZXBhcmF0b3I+XG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXG4gIDxTZWxlY3RQcmltaXRpdmUuU2VwYXJhdG9yXG4gICAgcmVmPXtyZWZ9XG4gICAgY2xhc3NOYW1lPXtjbihcIi1teC0xIG15LTEgaC1weCBiZy1tdXRlZFwiLCBjbGFzc05hbWUpfVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpXG5TZWxlY3RTZXBhcmF0b3IuZGlzcGxheU5hbWUgPSBTZWxlY3RQcmltaXRpdmUuU2VwYXJhdG9yLmRpc3BsYXlOYW1lXG5cbmV4cG9ydCB7XG4gIFNlbGVjdCxcbiAgU2VsZWN0R3JvdXAsXG4gIFNlbGVjdFZhbHVlLFxuICBTZWxlY3RUcmlnZ2VyLFxuICBTZWxlY3RDb250ZW50LFxuICBTZWxlY3RMYWJlbCxcbiAgU2VsZWN0SXRlbSxcbiAgU2VsZWN0U2VwYXJhdG9yLFxuICBTZWxlY3RTY3JvbGxVcEJ1dHRvbixcbiAgU2VsZWN0U2Nyb2xsRG93bkJ1dHRvbixcbn1cbiJdLCJmaWxlIjoiL2hvbWUvc2pyc2g5MTYvcHVibGljX2h0bWwvc3JjL2NvbXBvbmVudHMvdWkvc2VsZWN0LnRzeCJ9