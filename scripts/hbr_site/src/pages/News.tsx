import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/News.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/pages/News.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import Layout from "/src/components/Layout.tsx";
import PageHero from "/src/components/PageHero.tsx";
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { getPublicContent } from "/src/lib/api.ts";
import { mergeNewsItems } from "/src/lib/newsContent.ts";
import { Calendar } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
import __vite__cjsImport9_react from "/node_modules/.vite/deps/react.js?v=5efa796b"; const useEffect = __vite__cjsImport9_react["useEffect"]; const useMemo = __vite__cjsImport9_react["useMemo"]; const useState = __vite__cjsImport9_react["useState"];
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=5efa796b";
const News = ()=>{
    _s();
    const [adminNews, setAdminNews] = useState(null);
    useEffect(()=>{
        getPublicContent("news").then((result)=>setAdminNews(result.items)).catch(()=>setAdminNews(null));
    }, []);
    const items = useMemo(()=>mergeNewsItems(adminNews || []), [
        adminNews
    ]);
    return /*#__PURE__*/ _jsxDEV(Layout, {
        "data-lov-id": "src/pages/News.tsx:21:4",
        "data-lov-name": "Layout",
        "data-component-path": "src/pages/News.tsx",
        "data-component-line": "21",
        "data-component-file": "News.tsx",
        "data-component-name": "Layout",
        "data-component-content": "%7B%7D",
        children: [
            /*#__PURE__*/ _jsxDEV(PageHero, {
                "data-lov-id": "src/pages/News.tsx:22:6",
                "data-lov-name": "PageHero",
                "data-component-path": "src/pages/News.tsx",
                "data-component-line": "22",
                "data-component-file": "News.tsx",
                "data-component-name": "PageHero",
                "data-component-content": "%7B%7D",
                title: "Latest News & Updates",
                breadcrumbs: [
                    {
                        label: "News"
                    }
                ]
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/News.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/News.tsx:24:6",
                "data-lov-name": "section",
                "data-component-path": "src/pages/News.tsx",
                "data-component-line": "24",
                "data-component-file": "News.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-12%20sm%3Apy-16%20bg-background%22%7D",
                className: "py-12 sm:py-16 bg-background",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/News.tsx:25:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/News.tsx",
                    "data-component-line": "25",
                    "data-component-file": "News.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%20max-w-4xl%20text-center%22%7D",
                    className: "container mx-auto px-4 max-w-4xl text-center",
                    children: [
                        /*#__PURE__*/ _jsxDEV("h2", {
                            "data-lov-id": "src/pages/News.tsx:26:10",
                            "data-lov-name": "h2",
                            "data-component-path": "src/pages/News.tsx",
                            "data-component-line": "26",
                            "data-component-file": "News.tsx",
                            "data-component-name": "h2",
                            "data-component-content": "%7B%22text%22%3A%22Stay%20Informed%20with%20SJRPS-HBR%22%2C%22className%22%3A%22text-2xl%20sm%3Atext-3xl%20font-bold%20mb-4%22%7D",
                            className: "text-2xl sm:text-3xl font-bold mb-4",
                            style: {
                                color: "#111"
                            },
                            children: "Stay Informed with SJRPS-HBR"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/News.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("p", {
                            "data-lov-id": "src/pages/News.tsx:29:10",
                            "data-lov-name": "p",
                            "data-component-path": "src/pages/News.tsx",
                            "data-component-line": "29",
                            "data-component-file": "News.tsx",
                            "data-component-name": "p",
                            "data-component-content": "%7B%22text%22%3A%22Stay%20informed%20with%20the%20latest%20happenings%2C%20achievements%2C%20announcements%2C%20and%20important%5Cn%20%20%20%20%20%20%20%20%20%20%20%20updates%20from%20SJRPS-HBR.%20Explore%20news%20that%20highlights%20academic%20excellence%2C%20student%5Cn%20%20%20%20%20%20%20%20%20%20%20%20accomplishments%2C%20campus%20activities%2C%20and%20institutional%20milestones.%22%2C%22className%22%3A%22text-base%20sm%3Atext-lg%20leading-relaxed%22%7D",
                            className: "text-base sm:text-lg leading-relaxed",
                            style: {
                                color: "#333"
                            },
                            children: "Stay informed with the latest happenings, achievements, announcements, and important updates from SJRPS-HBR. Explore news that highlights academic excellence, student accomplishments, campus activities, and institutional milestones."
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/News.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/pages/News.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/News.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/News.tsx:37:6",
                "data-lov-name": "section",
                "data-component-path": "src/pages/News.tsx",
                "data-component-line": "37",
                "data-component-file": "News.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22pb-20%20bg-background%22%7D",
                className: "pb-20 bg-background",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/News.tsx:38:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/News.tsx",
                    "data-component-line": "38",
                    "data-component-file": "News.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/News.tsx:39:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/News.tsx",
                        "data-component-line": "39",
                        "data-component-file": "News.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22grid%20grid-cols-1%20sm%3Agrid-cols-2%20lg%3Agrid-cols-3%20gap-8%22%7D",
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",
                        children: items.map((n)=>/*#__PURE__*/ _jsxDEV(Card, {
                                "data-lov-id": "src/pages/News.tsx:41:14",
                                "data-lov-name": "Card",
                                "data-component-path": "src/pages/News.tsx",
                                "data-component-line": "41",
                                "data-component-file": "News.tsx",
                                "data-component-name": "Card",
                                "data-component-content": "%7B%22className%22%3A%22group%20flex%20flex-col%20overflow-hidden%20rounded-2xl%20border-0%20bg-white%20transition-all%20duration-300%20hover%3A-translate-y-1%22%7D",
                                className: "group flex flex-col overflow-hidden rounded-2xl border-0 bg-white transition-all duration-300 hover:-translate-y-1",
                                style: {
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.15)",
                                onMouseLeave: (e)=>e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        "data-lov-id": "src/pages/News.tsx:52:16",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/pages/News.tsx",
                                        "data-component-line": "52",
                                        "data-component-file": "News.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22className%22%3A%22overflow-hidden%22%7D",
                                        className: "overflow-hidden",
                                        children: /*#__PURE__*/ _jsxDEV("img", {
                                            "data-lov-id": "src/pages/News.tsx:53:18",
                                            "data-lov-name": "img",
                                            "data-component-path": "src/pages/News.tsx",
                                            "data-component-line": "53",
                                            "data-component-file": "News.tsx",
                                            "data-component-name": "img",
                                            "data-component-content": "%7B%22className%22%3A%22w-full%20h-%5B260px%5D%20object-cover%20transition-transform%20duration-500%20group-hover%3Ascale-105%22%7D",
                                            src: n.image,
                                            alt: n.title,
                                            loading: "lazy",
                                            className: "w-full h-[260px] object-cover transition-transform duration-500 group-hover:scale-105"
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/News.tsx",
                                            lineNumber: 53,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/News.tsx",
                                        lineNumber: 52,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV(CardContent, {
                                        "data-lov-id": "src/pages/News.tsx:60:16",
                                        "data-lov-name": "CardContent",
                                        "data-component-path": "src/pages/News.tsx",
                                        "data-component-line": "60",
                                        "data-component-file": "News.tsx",
                                        "data-component-name": "CardContent",
                                        "data-component-content": "%7B%22className%22%3A%22flex%20flex-col%20flex-1%20p-6%22%7D",
                                        className: "flex flex-col flex-1 p-6",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("h3", {
                                                "data-lov-id": "src/pages/News.tsx:61:18",
                                                "data-lov-name": "h3",
                                                "data-component-path": "src/pages/News.tsx",
                                                "data-component-line": "61",
                                                "data-component-file": "News.tsx",
                                                "data-component-name": "h3",
                                                "data-component-content": "%7B%22className%22%3A%22text-lg%20font-bold%20mb-1%20line-clamp-2%22%7D",
                                                className: "text-lg font-bold mb-1 line-clamp-2",
                                                style: {
                                                    color: "#111"
                                                },
                                                children: n.title
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/News.tsx",
                                                lineNumber: 61,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/News.tsx:64:18",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/News.tsx",
                                                "data-component-line": "64",
                                                "data-component-file": "News.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20gap-2%20mb-3%20text-sm%22%7D",
                                                className: "flex items-center gap-2 mb-3 text-sm",
                                                style: {
                                                    color: "#444"
                                                },
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(Calendar, {
                                                        "data-lov-id": "src/pages/News.tsx:65:20",
                                                        "data-lov-name": "Calendar",
                                                        "data-component-path": "src/pages/News.tsx",
                                                        "data-component-line": "65",
                                                        "data-component-file": "News.tsx",
                                                        "data-component-name": "Calendar",
                                                        "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%20text-indian-green%22%7D",
                                                        className: "h-4 w-4 text-indian-green"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/News.tsx",
                                                        lineNumber: 65,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("span", {
                                                        "data-lov-id": "src/pages/News.tsx:66:20",
                                                        "data-lov-name": "span",
                                                        "data-component-path": "src/pages/News.tsx",
                                                        "data-component-line": "66",
                                                        "data-component-file": "News.tsx",
                                                        "data-component-name": "span",
                                                        "data-component-content": "%7B%7D",
                                                        children: n.date
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/News.tsx",
                                                        lineNumber: 66,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/News.tsx",
                                                lineNumber: 64,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("p", {
                                                "data-lov-id": "src/pages/News.tsx:68:18",
                                                "data-lov-name": "p",
                                                "data-component-path": "src/pages/News.tsx",
                                                "data-component-line": "68",
                                                "data-component-file": "News.tsx",
                                                "data-component-name": "p",
                                                "data-component-content": "%7B%22className%22%3A%22text-sm%20leading-relaxed%20mb-6%20line-clamp-2%20min-h-%5B2.75rem%5D%22%7D",
                                                className: "text-sm leading-relaxed mb-6 line-clamp-2 min-h-[2.75rem]",
                                                style: {
                                                    color: "#333"
                                                },
                                                children: n.summary
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/News.tsx",
                                                lineNumber: 68,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/News.tsx:74:18",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/News.tsx",
                                                "data-component-line": "74",
                                                "data-component-file": "News.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22mt-auto%22%7D",
                                                className: "mt-auto",
                                                children: /*#__PURE__*/ _jsxDEV(Button, {
                                                    "data-lov-id": "src/pages/News.tsx:75:20",
                                                    "data-lov-name": "Button",
                                                    "data-component-path": "src/pages/News.tsx",
                                                    "data-component-line": "75",
                                                    "data-component-file": "News.tsx",
                                                    "data-component-name": "Button",
                                                    "data-component-content": "%7B%22className%22%3A%22w-full%20bg-indian-green%20hover%3Abg-indian-green%2F90%20text-white%20rounded-lg%22%7D",
                                                    asChild: true,
                                                    className: "w-full bg-indian-green hover:bg-indian-green/90 text-white rounded-lg",
                                                    children: /*#__PURE__*/ _jsxDEV(Link, {
                                                        "data-lov-id": "src/pages/News.tsx:76:22",
                                                        "data-lov-name": "Link",
                                                        "data-component-path": "src/pages/News.tsx",
                                                        "data-component-line": "76",
                                                        "data-component-file": "News.tsx",
                                                        "data-component-name": "Link",
                                                        "data-component-content": "%7B%22text%22%3A%22View%20Details%22%7D",
                                                        to: n.href,
                                                        children: "View Details"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/News.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/News.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/News.tsx",
                                                lineNumber: 74,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/News.tsx",
                                        lineNumber: 60,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, n.key, true, {
                                fileName: "/home/sjrsh916/public_html/src/pages/News.tsx",
                                lineNumber: 41,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/News.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/News.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/News.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/sjrsh916/public_html/src/pages/News.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
};
_s(News, "/gnF6c7qLQceZAkPdLWYkplN5Iw=");
_c = News;
export default News;
var _c;
$RefreshReg$(_c, "News");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/pages/News.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/pages/News.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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RWtCLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkMxQjtHQTVFTTNDO0tBQUFBO0FBOEVOLGVBQWVBLEtBQUkiLCJuYW1lcyI6WyJMYXlvdXQiLCJQYWdlSGVybyIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkJ1dHRvbiIsImdldFB1YmxpY0NvbnRlbnQiLCJtZXJnZU5ld3NJdGVtcyIsIkNhbGVuZGFyIiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVN0YXRlIiwiTGluayIsIk5ld3MiLCJhZG1pbk5ld3MiLCJzZXRBZG1pbk5ld3MiLCJ0aGVuIiwicmVzdWx0IiwiaXRlbXMiLCJjYXRjaCIsImRhdGEtbG92LWlkIiwiZGF0YS1sb3YtbmFtZSIsImRhdGEtY29tcG9uZW50LXBhdGgiLCJkYXRhLWNvbXBvbmVudC1saW5lIiwiZGF0YS1jb21wb25lbnQtZmlsZSIsImRhdGEtY29tcG9uZW50LW5hbWUiLCJkYXRhLWNvbXBvbmVudC1jb250ZW50IiwidGl0bGUiLCJicmVhZGNydW1icyIsImxhYmVsIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgyIiwic3R5bGUiLCJjb2xvciIsInAiLCJtYXAiLCJuIiwiYm94U2hhZG93Iiwib25Nb3VzZUVudGVyIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJvbk1vdXNlTGVhdmUiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsImxvYWRpbmciLCJoMyIsInNwYW4iLCJkYXRlIiwic3VtbWFyeSIsImFzQ2hpbGQiLCJ0byIsImhyZWYiLCJrZXkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiTmV3cy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFBhZ2VIZXJvIGZyb20gXCJAL2NvbXBvbmVudHMvUGFnZUhlcm9cIjtcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgQWRtaW5Db250ZW50SXRlbSwgZ2V0UHVibGljQ29udGVudCB9IGZyb20gXCJAL2xpYi9hcGlcIjtcbmltcG9ydCB7IG1lcmdlTmV3c0l0ZW1zIH0gZnJvbSBcIkAvbGliL25ld3NDb250ZW50XCI7XG5pbXBvcnQgeyBDYWxlbmRhciB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5jb25zdCBOZXdzID0gKCkgPT4ge1xuICBjb25zdCBbYWRtaW5OZXdzLCBzZXRBZG1pbk5ld3NdID0gdXNlU3RhdGU8QWRtaW5Db250ZW50SXRlbVtdIHwgbnVsbD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRQdWJsaWNDb250ZW50KFwibmV3c1wiKS50aGVuKChyZXN1bHQpID0+IHNldEFkbWluTmV3cyhyZXN1bHQuaXRlbXMpKS5jYXRjaCgoKSA9PiBzZXRBZG1pbk5ld3MobnVsbCkpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaXRlbXMgPSB1c2VNZW1vKCgpID0+IG1lcmdlTmV3c0l0ZW1zKGFkbWluTmV3cyB8fCBbXSksIFthZG1pbk5ld3NdKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8UGFnZUhlcm8gdGl0bGU9XCJMYXRlc3QgTmV3cyAmIFVwZGF0ZXNcIiBicmVhZGNydW1icz17W3sgbGFiZWw6IFwiTmV3c1wiIH1dfSAvPlxuXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xMiBzbTpweS0xNiBiZy1iYWNrZ3JvdW5kXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBtYXgtdy00eGwgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgc206dGV4dC0zeGwgZm9udC1ib2xkIG1iLTRcIiBzdHlsZT17eyBjb2xvcjogXCIjMTExXCIgfX0+XG4gICAgICAgICAgICBTdGF5IEluZm9ybWVkIHdpdGggU0pSUFMtSEJSXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2Ugc206dGV4dC1sZyBsZWFkaW5nLXJlbGF4ZWRcIiBzdHlsZT17eyBjb2xvcjogXCIjMzMzXCIgfX0+XG4gICAgICAgICAgICBTdGF5IGluZm9ybWVkIHdpdGggdGhlIGxhdGVzdCBoYXBwZW5pbmdzLCBhY2hpZXZlbWVudHMsIGFubm91bmNlbWVudHMsIGFuZCBpbXBvcnRhbnRcbiAgICAgICAgICAgIHVwZGF0ZXMgZnJvbSBTSlJQUy1IQlIuIEV4cGxvcmUgbmV3cyB0aGF0IGhpZ2hsaWdodHMgYWNhZGVtaWMgZXhjZWxsZW5jZSwgc3R1ZGVudFxuICAgICAgICAgICAgYWNjb21wbGlzaG1lbnRzLCBjYW1wdXMgYWN0aXZpdGllcywgYW5kIGluc3RpdHV0aW9uYWwgbWlsZXN0b25lcy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwYi0yMCBiZy1iYWNrZ3JvdW5kXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtOFwiPlxuICAgICAgICAgICAge2l0ZW1zLm1hcCgobikgPT4gKFxuICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgIGtleT17bi5rZXl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgZmxleCBmbGV4LWNvbCBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC0yeGwgYm9yZGVyLTAgYmctd2hpdGUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGhvdmVyOi10cmFuc2xhdGUteS0xXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBib3hTaGFkb3c6IFwiMCAxMHB4IDMwcHggcmdiYSgwLDAsMCwwLjA4KVwiIH19XG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgIChlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYm94U2hhZG93ID0gXCIwIDE1cHggNDBweCByZ2JhKDAsMCwwLDAuMTUpXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAoZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmJveFNoYWRvdyA9IFwiMCAxMHB4IDMwcHggcmdiYSgwLDAsMCwwLjA4KVwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz17bi5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtuLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLVsyNjBweF0gb2JqZWN0LWNvdmVyIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTUwMCBncm91cC1ob3ZlcjpzY2FsZS0xMDVcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBmbGV4LTEgcC02XCI+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgbWItMSBsaW5lLWNsYW1wLTJcIiBzdHlsZT17eyBjb2xvcjogXCIjMTExXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIHtuLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgbWItMyB0ZXh0LXNtXCIgc3R5bGU9e3sgY29sb3I6IFwiIzQ0NFwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kYXIgY2xhc3NOYW1lPVwiaC00IHctNCB0ZXh0LWluZGlhbi1ncmVlblwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntuLmRhdGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtIGxlYWRpbmctcmVsYXhlZCBtYi02IGxpbmUtY2xhbXAtMiBtaW4taC1bMi43NXJlbV1cIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjMzMzXCIgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge24uc3VtbWFyeX1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGFzQ2hpbGQgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWluZGlhbi1ncmVlbiBob3ZlcjpiZy1pbmRpYW4tZ3JlZW4vOTAgdGV4dC13aGl0ZSByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e24uaHJlZn0+VmlldyBEZXRhaWxzPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5ld3M7XG4iXSwiZmlsZSI6Ii9ob21lL3NqcnNoOTE2L3B1YmxpY19odG1sL3NyYy9wYWdlcy9OZXdzLnRzeCJ9