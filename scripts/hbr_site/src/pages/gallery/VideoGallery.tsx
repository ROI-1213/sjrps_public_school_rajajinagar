import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/gallery/VideoGallery.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/pages/gallery/VideoGallery.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import Layout from "/src/components/Layout.tsx";
import PageHero from "/src/components/PageHero.tsx";
import { Play, X, ChevronLeft, ChevronRight } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
import __vite__cjsImport5_react from "/node_modules/.vite/deps/react.js?v=5efa796b"; const useEffect = __vite__cjsImport5_react["useEffect"]; const useState = __vite__cjsImport5_react["useState"];
import { getPublicContent } from "/src/lib/api.ts";
export const videos = [
    {
        id: "o_C7emPRYuE",
        title: "SJR Public School Video",
        description: "A school overview video highlighting SJR Public School, HBR Layout.",
        category: "School Overview"
    },
    {
        id: "sk0PKZrHG90",
        title: "Samskruthi - Annual Day 2025-26, Day 02 Part 02",
        description: "Annual Day performance coverage from 5 December 2025 at SJR Public School, HBR Layout.",
        category: "Annual Day",
        date: "05/12/2025"
    },
    {
        id: "XPtrhKrKdkY",
        title: "Samskruthi - Annual Day 2025-26, Day 02 Part 01",
        description: "Cultural performances from the second day of Annual Day celebrations.",
        category: "Annual Day",
        date: "05/12/2025"
    },
    {
        id: "PfeEaFfGRdg",
        title: "Annual Day 2025-26, Day 01 Part 01",
        description: "Highlights from the first day of Annual Day celebrations at SJR Public School, HBR Layout.",
        category: "Annual Day",
        date: "04/12/2025"
    },
    {
        id: "x2SUBVuDnzA",
        title: "International Yoga Day Celebration",
        description: "Students celebrate Yoga Day through asanas, movement, and wellness-focused activities.",
        category: "Yoga Day"
    },
    {
        id: "TmKJMWYXRDw",
        title: "Senior Secondary CBSE Inspection 2024-25",
        description: "A video record of the senior secondary CBSE inspection at SJR Public School, HBR Layout.",
        category: "Campus & Academics"
    },
    {
        id: "jBiwAeJrlJ4",
        title: "Investiture Ceremony 2026-27",
        description: "Student leaders take oath and receive responsibilities for the 2026-27 academic year.",
        category: "Investiture Ceremony"
    },
    {
        id: "86EgaHdBOaQ",
        title: "Bird View of SJR-HBR Campus",
        description: "An aerial view of the SJR Public School HBR campus.",
        category: "Campus Tour"
    }
];
function getYoutubeId(value) {
    const text = typeof value === "string" ? value.trim() : "";
    if (!text) return "";
    const watchMatch = text.match(/[?&]v=([^&]+)/);
    const shortMatch = text.match(/youtu\.be\/([^?&]+)/);
    const embedMatch = text.match(/youtube\.com\/embed\/([^?&]+)/);
    return watchMatch?.[1] || shortMatch?.[1] || embedMatch?.[1] || text;
}
const VideoGallery = ()=>{
    _s();
    const [lightboxIndex, setLightboxIndex] = useState(null);
    const [adminVideos, setAdminVideos] = useState(null);
    const displayVideos = adminVideos?.length ? adminVideos : videos;
    const close = ()=>setLightboxIndex(null);
    const next = ()=>setLightboxIndex((i)=>i === null ? null : (i + 1) % displayVideos.length);
    const prev = ()=>setLightboxIndex((i)=>i === null ? null : (i - 1 + displayVideos.length) % displayVideos.length);
    useEffect(()=>{
        getPublicContent("video").then((result)=>setAdminVideos(result.items.map((item)=>({
                    id: getYoutubeId(item.fields?.youtubeId || item.image_url || item.title),
                    title: item.title,
                    description: item.body || item.subtitle || "SJR Public School video gallery item.",
                    category: item.category || "Video Gallery",
                    date: item.published_at || undefined
                })))).catch(()=>setAdminVideos(null));
    }, []);
    useEffect(()=>{
        if (lightboxIndex === null) return;
        const onKey = (e)=>{
            if (e.key === "Escape") close();
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
        };
        window.addEventListener("keydown", onKey);
        return ()=>window.removeEventListener("keydown", onKey);
    }, [
        lightboxIndex
    ]);
    return /*#__PURE__*/ _jsxDEV(Layout, {
        "data-lov-id": "src/pages/gallery/VideoGallery.tsx:111:4",
        "data-lov-name": "Layout",
        "data-component-path": "src/pages/gallery/VideoGallery.tsx",
        "data-component-line": "111",
        "data-component-file": "VideoGallery.tsx",
        "data-component-name": "Layout",
        "data-component-content": "%7B%7D",
        children: [
            /*#__PURE__*/ _jsxDEV(PageHero, {
                "data-lov-id": "src/pages/gallery/VideoGallery.tsx:112:6",
                "data-lov-name": "PageHero",
                "data-component-path": "src/pages/gallery/VideoGallery.tsx",
                "data-component-line": "112",
                "data-component-file": "VideoGallery.tsx",
                "data-component-name": "PageHero",
                "data-component-content": "%7B%7D",
                title: "Video Gallery",
                breadcrumbs: [
                    {
                        label: "Gallery"
                    },
                    {
                        label: "Videos"
                    }
                ]
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/gallery/VideoGallery.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/gallery/VideoGallery.tsx:117:6",
                "data-lov-name": "section",
                "data-component-path": "src/pages/gallery/VideoGallery.tsx",
                "data-component-line": "117",
                "data-component-file": "VideoGallery.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-16%20bg-white%22%7D",
                className: "py-16 bg-white",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/gallery/VideoGallery.tsx:118:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/gallery/VideoGallery.tsx",
                    "data-component-line": "118",
                    "data-component-file": "VideoGallery.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/gallery/VideoGallery.tsx:119:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/gallery/VideoGallery.tsx",
                        "data-component-line": "119",
                        "data-component-file": "VideoGallery.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-2%20lg%3Agrid-cols-4%20gap-6%22%7D",
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                        children: displayVideos.map((v, index)=>/*#__PURE__*/ _jsxDEV("button", {
                                "data-lov-id": "src/pages/gallery/VideoGallery.tsx:121:14",
                                "data-lov-name": "button",
                                "data-component-path": "src/pages/gallery/VideoGallery.tsx",
                                "data-component-line": "121",
                                "data-component-file": "VideoGallery.tsx",
                                "data-component-name": "button",
                                "data-component-content": "%7B%22className%22%3A%22group%20cursor-pointer%20overflow-hidden%20rounded-2xl%20bg-white%20text-left%20transition-all%20duration-300%22%7D",
                                onClick: ()=>setLightboxIndex(index),
                                className: "group cursor-pointer overflow-hidden rounded-2xl bg-white text-left transition-all duration-300",
                                style: {
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.15)",
                                onMouseLeave: (e)=>e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)",
                                children: /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/gallery/VideoGallery.tsx:129:16",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/gallery/VideoGallery.tsx",
                                    "data-component-line": "129",
                                    "data-component-file": "VideoGallery.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22relative%20h-%5B200px%5D%20overflow-hidden%22%7D",
                                    className: "relative h-[200px] overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("img", {
                                            "data-lov-id": "src/pages/gallery/VideoGallery.tsx:130:18",
                                            "data-lov-name": "img",
                                            "data-component-path": "src/pages/gallery/VideoGallery.tsx",
                                            "data-component-line": "130",
                                            "data-component-file": "VideoGallery.tsx",
                                            "data-component-name": "img",
                                            "data-component-content": "%7B%22className%22%3A%22w-full%20h-full%20object-cover%20transition-transform%20duration-500%20group-hover%3Ascale-110%22%7D",
                                            src: `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`,
                                            alt: v.title,
                                            className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                                            loading: "lazy"
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/gallery/VideoGallery.tsx",
                                            lineNumber: 130,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/pages/gallery/VideoGallery.tsx:136:18",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/pages/gallery/VideoGallery.tsx",
                                            "data-component-line": "136",
                                            "data-component-file": "VideoGallery.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22absolute%20inset-0%20bg-black%2F30%20flex%20items-center%20justify-center%20group-hover%3Abg-black%2F50%20transition-all%20duration-300%22%7D",
                                            className: "absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-all duration-300",
                                            children: /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/gallery/VideoGallery.tsx:137:20",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/gallery/VideoGallery.tsx",
                                                "data-component-line": "137",
                                                "data-component-file": "VideoGallery.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22rounded-full%20p-5%20transform%20group-hover%3Ascale-110%20transition-transform%20duration-300%22%7D",
                                                className: "rounded-full p-5 transform group-hover:scale-110 transition-transform duration-300",
                                                style: {
                                                    backgroundColor: "hsl(var(--indian-green))"
                                                },
                                                children: /*#__PURE__*/ _jsxDEV(Play, {
                                                    "data-lov-id": "src/pages/gallery/VideoGallery.tsx:141:22",
                                                    "data-lov-name": "Play",
                                                    "data-component-path": "src/pages/gallery/VideoGallery.tsx",
                                                    "data-component-line": "141",
                                                    "data-component-file": "VideoGallery.tsx",
                                                    "data-component-name": "Play",
                                                    "data-component-content": "%7B%22className%22%3A%22h-8%20w-8%20text-white%22%7D",
                                                    className: "h-8 w-8 text-white",
                                                    fill: "white"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/pages/gallery/VideoGallery.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/gallery/VideoGallery.tsx",
                                                lineNumber: 137,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/pages/gallery/VideoGallery.tsx",
                                            lineNumber: 136,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/gallery/VideoGallery.tsx",
                                    lineNumber: 129,
                                    columnNumber: 17
                                }, this)
                            }, `${v.id}-${index}`, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/gallery/VideoGallery.tsx",
                                lineNumber: 121,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/gallery/VideoGallery.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/gallery/VideoGallery.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/gallery/VideoGallery.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            lightboxIndex !== null && /*#__PURE__*/ _jsxDEV("div", {
                "data-lov-id": "src/pages/gallery/VideoGallery.tsx:152:8",
                "data-lov-name": "div",
                "data-component-path": "src/pages/gallery/VideoGallery.tsx",
                "data-component-line": "152",
                "data-component-file": "VideoGallery.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22fixed%20inset-0%20z-%5B100%5D%20bg-black%2F95%20flex%20items-center%20justify-center%20p-4%20animate-fade-in%22%7D",
                className: "fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-fade-in",
                onClick: close,
                children: [
                    /*#__PURE__*/ _jsxDEV("button", {
                        "data-lov-id": "src/pages/gallery/VideoGallery.tsx:156:10",
                        "data-lov-name": "button",
                        "data-component-path": "src/pages/gallery/VideoGallery.tsx",
                        "data-component-line": "156",
                        "data-component-file": "VideoGallery.tsx",
                        "data-component-name": "button",
                        "data-component-content": "%7B%22className%22%3A%22fixed%20top-4%20right-4%20z-%5B110%5D%20bg-indian-green%20text-white%20rounded-full%20p-3%20hover%3Aopacity-90%20transition%22%7D",
                        onClick: (e)=>{
                            e.stopPropagation();
                            close();
                        },
                        className: "fixed top-4 right-4 z-[110] bg-indian-green text-white rounded-full p-3 hover:opacity-90 transition",
                        "aria-label": "Close",
                        children: /*#__PURE__*/ _jsxDEV(X, {
                            "data-lov-id": "src/pages/gallery/VideoGallery.tsx:161:12",
                            "data-lov-name": "X",
                            "data-component-path": "src/pages/gallery/VideoGallery.tsx",
                            "data-component-line": "161",
                            "data-component-file": "VideoGallery.tsx",
                            "data-component-name": "X",
                            "data-component-content": "%7B%22className%22%3A%22h-6%20w-6%22%7D",
                            className: "h-6 w-6"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/gallery/VideoGallery.tsx",
                            lineNumber: 161,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/gallery/VideoGallery.tsx",
                        lineNumber: 156,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("button", {
                        "data-lov-id": "src/pages/gallery/VideoGallery.tsx:164:10",
                        "data-lov-name": "button",
                        "data-component-path": "src/pages/gallery/VideoGallery.tsx",
                        "data-component-line": "164",
                        "data-component-file": "VideoGallery.tsx",
                        "data-component-name": "button",
                        "data-component-content": "%7B%22className%22%3A%22fixed%20left-2%20sm%3Aleft-6%20top-1%2F2%20-translate-y-1%2F2%20z-%5B110%5D%20bg-indian-green%20text-white%20rounded-full%20p-3%20hover%3Aopacity-90%20transition%22%7D",
                        onClick: (e)=>{
                            e.stopPropagation();
                            prev();
                        },
                        className: "fixed left-2 sm:left-6 top-1/2 -translate-y-1/2 z-[110] bg-indian-green text-white rounded-full p-3 hover:opacity-90 transition",
                        "aria-label": "Previous",
                        children: /*#__PURE__*/ _jsxDEV(ChevronLeft, {
                            "data-lov-id": "src/pages/gallery/VideoGallery.tsx:169:12",
                            "data-lov-name": "ChevronLeft",
                            "data-component-path": "src/pages/gallery/VideoGallery.tsx",
                            "data-component-line": "169",
                            "data-component-file": "VideoGallery.tsx",
                            "data-component-name": "ChevronLeft",
                            "data-component-content": "%7B%22className%22%3A%22h-6%20w-6%22%7D",
                            className: "h-6 w-6"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/gallery/VideoGallery.tsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/gallery/VideoGallery.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("button", {
                        "data-lov-id": "src/pages/gallery/VideoGallery.tsx:172:10",
                        "data-lov-name": "button",
                        "data-component-path": "src/pages/gallery/VideoGallery.tsx",
                        "data-component-line": "172",
                        "data-component-file": "VideoGallery.tsx",
                        "data-component-name": "button",
                        "data-component-content": "%7B%22className%22%3A%22fixed%20right-2%20sm%3Aright-6%20top-1%2F2%20-translate-y-1%2F2%20z-%5B110%5D%20bg-indian-green%20text-white%20rounded-full%20p-3%20hover%3Aopacity-90%20transition%22%7D",
                        onClick: (e)=>{
                            e.stopPropagation();
                            next();
                        },
                        className: "fixed right-2 sm:right-6 top-1/2 -translate-y-1/2 z-[110] bg-indian-green text-white rounded-full p-3 hover:opacity-90 transition",
                        "aria-label": "Next",
                        children: /*#__PURE__*/ _jsxDEV(ChevronRight, {
                            "data-lov-id": "src/pages/gallery/VideoGallery.tsx:177:12",
                            "data-lov-name": "ChevronRight",
                            "data-component-path": "src/pages/gallery/VideoGallery.tsx",
                            "data-component-line": "177",
                            "data-component-file": "VideoGallery.tsx",
                            "data-component-name": "ChevronRight",
                            "data-component-content": "%7B%22className%22%3A%22h-6%20w-6%22%7D",
                            className: "h-6 w-6"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/gallery/VideoGallery.tsx",
                            lineNumber: 177,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/gallery/VideoGallery.tsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/gallery/VideoGallery.tsx:180:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/gallery/VideoGallery.tsx",
                        "data-component-line": "180",
                        "data-component-file": "VideoGallery.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22max-w-6xl%20w-full%22%7D",
                        className: "max-w-6xl w-full",
                        onClick: (e)=>e.stopPropagation(),
                        children: /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/gallery/VideoGallery.tsx:181:12",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/gallery/VideoGallery.tsx",
                            "data-component-line": "181",
                            "data-component-file": "VideoGallery.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22relative%20w-full%22%7D",
                            className: "relative w-full",
                            style: {
                                paddingBottom: "56.25%"
                            },
                            children: /*#__PURE__*/ _jsxDEV("iframe", {
                                "data-lov-id": "src/pages/gallery/VideoGallery.tsx:182:14",
                                "data-lov-name": "iframe",
                                "data-component-path": "src/pages/gallery/VideoGallery.tsx",
                                "data-component-line": "182",
                                "data-component-file": "VideoGallery.tsx",
                                "data-component-name": "iframe",
                                "data-component-content": "%7B%22className%22%3A%22absolute%20top-0%20left-0%20w-full%20h-full%20rounded-lg%22%7D",
                                className: "absolute top-0 left-0 w-full h-full rounded-lg",
                                src: `https://www.youtube.com/embed/${displayVideos[lightboxIndex].id}?autoplay=1&rel=0`,
                                title: displayVideos[lightboxIndex].title,
                                frameBorder: "0",
                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                allowFullScreen: true
                            }, displayVideos[lightboxIndex].id, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/gallery/VideoGallery.tsx",
                                lineNumber: 182,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/gallery/VideoGallery.tsx",
                            lineNumber: 181,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/gallery/VideoGallery.tsx",
                        lineNumber: 180,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/sjrsh916/public_html/src/pages/gallery/VideoGallery.tsx",
                lineNumber: 152,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/sjrsh916/public_html/src/pages/gallery/VideoGallery.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
};
_s(VideoGallery, "o79iMDvuu3iK1V7M2HH48Qsr6Pk=");
_c = VideoGallery;
export default VideoGallery;
var _c;
$RefreshReg$(_c, "VideoGallery");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/pages/gallery/VideoGallery.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/pages/gallery/VideoGallery.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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O2dDQUNaQyxPQUFNO2dDQUNOQyxlQUFjOytCQU5UMUQsYUFBYSxDQUFDSixjQUFjLENBQUNkLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNwRDtHQXZITWE7S0FBQUE7QUF5SE4sZUFBZUEsYUFBWSIsIm5hbWVzIjpbIkxheW91dCIsIlBhZ2VIZXJvIiwiUGxheSIsIlgiLCJDaGV2cm9uTGVmdCIsIkNoZXZyb25SaWdodCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0UHVibGljQ29udGVudCIsInZpZGVvcyIsImlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiZGF0ZSIsImdldFlvdXR1YmVJZCIsInZhbHVlIiwidGV4dCIsInRyaW0iLCJ3YXRjaE1hdGNoIiwibWF0Y2giLCJzaG9ydE1hdGNoIiwiZW1iZWRNYXRjaCIsIlZpZGVvR2FsbGVyeSIsImxpZ2h0Ym94SW5kZXgiLCJzZXRMaWdodGJveEluZGV4IiwiYWRtaW5WaWRlb3MiLCJzZXRBZG1pblZpZGVvcyIsImRpc3BsYXlWaWRlb3MiLCJsZW5ndGgiLCJjbG9zZSIsIm5leHQiLCJpIiwicHJldiIsInRoZW4iLCJyZXN1bHQiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJmaWVsZHMiLCJ5b3V0dWJlSWQiLCJpbWFnZV91cmwiLCJib2R5Iiwic3VidGl0bGUiLCJwdWJsaXNoZWRfYXQiLCJ1bmRlZmluZWQiLCJjYXRjaCIsIm9uS2V5IiwiZSIsImtleSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGF0YS1sb3YtaWQiLCJkYXRhLWxvdi1uYW1lIiwiZGF0YS1jb21wb25lbnQtcGF0aCIsImRhdGEtY29tcG9uZW50LWxpbmUiLCJkYXRhLWNvbXBvbmVudC1maWxlIiwiZGF0YS1jb21wb25lbnQtbmFtZSIsImRhdGEtY29tcG9uZW50LWNvbnRlbnQiLCJicmVhZGNydW1icyIsImxhYmVsIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsInYiLCJpbmRleCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzdHlsZSIsImJveFNoYWRvdyIsIm9uTW91c2VFbnRlciIsImN1cnJlbnRUYXJnZXQiLCJvbk1vdXNlTGVhdmUiLCJpbWciLCJzcmMiLCJhbHQiLCJsb2FkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiZmlsbCIsInN0b3BQcm9wYWdhdGlvbiIsImFyaWEtbGFiZWwiLCJwYWRkaW5nQm90dG9tIiwiaWZyYW1lIiwiZnJhbWVCb3JkZXIiLCJhbGxvdyIsImFsbG93RnVsbFNjcmVlbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJWaWRlb0dhbGxlcnkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBQYWdlSGVybyBmcm9tIFwiQC9jb21wb25lbnRzL1BhZ2VIZXJvXCI7XG5pbXBvcnQgeyBQbGF5LCBYLCBDaGV2cm9uTGVmdCwgQ2hldnJvblJpZ2h0IH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ2V0UHVibGljQ29udGVudCB9IGZyb20gXCJAL2xpYi9hcGlcIjtcblxuZXhwb3J0IHR5cGUgVmlkZW8gPSB7XG4gIGlkOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGNhdGVnb3J5OiBzdHJpbmc7XG4gIGRhdGU/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgdmlkZW9zOiBWaWRlb1tdID0gW1xuICB7XG4gICAgaWQ6IFwib19DN2VtUFJZdUVcIixcbiAgICB0aXRsZTogXCJTSlIgUHVibGljIFNjaG9vbCBWaWRlb1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkEgc2Nob29sIG92ZXJ2aWV3IHZpZGVvIGhpZ2hsaWdodGluZyBTSlIgUHVibGljIFNjaG9vbCwgSEJSIExheW91dC5cIixcbiAgICBjYXRlZ29yeTogXCJTY2hvb2wgT3ZlcnZpZXdcIixcbiAgfSxcbiAge1xuICAgIGlkOiBcInNrMFBLWnJIRzkwXCIsXG4gICAgdGl0bGU6IFwiU2Ftc2tydXRoaSAtIEFubnVhbCBEYXkgMjAyNS0yNiwgRGF5IDAyIFBhcnQgMDJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBbm51YWwgRGF5IHBlcmZvcm1hbmNlIGNvdmVyYWdlIGZyb20gNSBEZWNlbWJlciAyMDI1IGF0IFNKUiBQdWJsaWMgU2Nob29sLCBIQlIgTGF5b3V0LlwiLFxuICAgIGNhdGVnb3J5OiBcIkFubnVhbCBEYXlcIixcbiAgICBkYXRlOiBcIjA1LzEyLzIwMjVcIixcbiAgfSxcbiAge1xuICAgIGlkOiBcIlhQdHJoS3JLZGtZXCIsXG4gICAgdGl0bGU6IFwiU2Ftc2tydXRoaSAtIEFubnVhbCBEYXkgMjAyNS0yNiwgRGF5IDAyIFBhcnQgMDFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJDdWx0dXJhbCBwZXJmb3JtYW5jZXMgZnJvbSB0aGUgc2Vjb25kIGRheSBvZiBBbm51YWwgRGF5IGNlbGVicmF0aW9ucy5cIixcbiAgICBjYXRlZ29yeTogXCJBbm51YWwgRGF5XCIsXG4gICAgZGF0ZTogXCIwNS8xMi8yMDI1XCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJQZmVFYUZmR1JkZ1wiLFxuICAgIHRpdGxlOiBcIkFubnVhbCBEYXkgMjAyNS0yNiwgRGF5IDAxIFBhcnQgMDFcIixcbiAgICBkZXNjcmlwdGlvbjogXCJIaWdobGlnaHRzIGZyb20gdGhlIGZpcnN0IGRheSBvZiBBbm51YWwgRGF5IGNlbGVicmF0aW9ucyBhdCBTSlIgUHVibGljIFNjaG9vbCwgSEJSIExheW91dC5cIixcbiAgICBjYXRlZ29yeTogXCJBbm51YWwgRGF5XCIsXG4gICAgZGF0ZTogXCIwNC8xMi8yMDI1XCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJ4MlNVQlZ1RG56QVwiLFxuICAgIHRpdGxlOiBcIkludGVybmF0aW9uYWwgWW9nYSBEYXkgQ2VsZWJyYXRpb25cIixcbiAgICBkZXNjcmlwdGlvbjogXCJTdHVkZW50cyBjZWxlYnJhdGUgWW9nYSBEYXkgdGhyb3VnaCBhc2FuYXMsIG1vdmVtZW50LCBhbmQgd2VsbG5lc3MtZm9jdXNlZCBhY3Rpdml0aWVzLlwiLFxuICAgIGNhdGVnb3J5OiBcIllvZ2EgRGF5XCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJUbUtKTVdZWFJEd1wiLFxuICAgIHRpdGxlOiBcIlNlbmlvciBTZWNvbmRhcnkgQ0JTRSBJbnNwZWN0aW9uIDIwMjQtMjVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIHZpZGVvIHJlY29yZCBvZiB0aGUgc2VuaW9yIHNlY29uZGFyeSBDQlNFIGluc3BlY3Rpb24gYXQgU0pSIFB1YmxpYyBTY2hvb2wsIEhCUiBMYXlvdXQuXCIsXG4gICAgY2F0ZWdvcnk6IFwiQ2FtcHVzICYgQWNhZGVtaWNzXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJqQml3QWVKcmxKNFwiLFxuICAgIHRpdGxlOiBcIkludmVzdGl0dXJlIENlcmVtb255IDIwMjYtMjdcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTdHVkZW50IGxlYWRlcnMgdGFrZSBvYXRoIGFuZCByZWNlaXZlIHJlc3BvbnNpYmlsaXRpZXMgZm9yIHRoZSAyMDI2LTI3IGFjYWRlbWljIHllYXIuXCIsXG4gICAgY2F0ZWdvcnk6IFwiSW52ZXN0aXR1cmUgQ2VyZW1vbnlcIixcbiAgfSxcbiAge1xuICAgIGlkOiBcIjg2RWdhSGRCT2FRXCIsXG4gICAgdGl0bGU6IFwiQmlyZCBWaWV3IG9mIFNKUi1IQlIgQ2FtcHVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQW4gYWVyaWFsIHZpZXcgb2YgdGhlIFNKUiBQdWJsaWMgU2Nob29sIEhCUiBjYW1wdXMuXCIsXG4gICAgY2F0ZWdvcnk6IFwiQ2FtcHVzIFRvdXJcIixcbiAgfSxcbl07XG5cbmZ1bmN0aW9uIGdldFlvdXR1YmVJZCh2YWx1ZTogdW5rbm93bikge1xuICBjb25zdCB0ZXh0ID0gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiID8gdmFsdWUudHJpbSgpIDogXCJcIjtcbiAgaWYgKCF0ZXh0KSByZXR1cm4gXCJcIjtcbiAgY29uc3Qgd2F0Y2hNYXRjaCA9IHRleHQubWF0Y2goL1s/Jl12PShbXiZdKykvKTtcbiAgY29uc3Qgc2hvcnRNYXRjaCA9IHRleHQubWF0Y2goL3lvdXR1XFwuYmVcXC8oW14/Jl0rKS8pO1xuICBjb25zdCBlbWJlZE1hdGNoID0gdGV4dC5tYXRjaCgveW91dHViZVxcLmNvbVxcL2VtYmVkXFwvKFtePyZdKykvKTtcbiAgcmV0dXJuIHdhdGNoTWF0Y2g/LlsxXSB8fCBzaG9ydE1hdGNoPy5bMV0gfHwgZW1iZWRNYXRjaD8uWzFdIHx8IHRleHQ7XG59XG5cbmNvbnN0IFZpZGVvR2FsbGVyeSA9ICgpID0+IHtcbiAgY29uc3QgW2xpZ2h0Ym94SW5kZXgsIHNldExpZ2h0Ym94SW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFthZG1pblZpZGVvcywgc2V0QWRtaW5WaWRlb3NdID0gdXNlU3RhdGU8VmlkZW9bXSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBkaXNwbGF5VmlkZW9zID0gYWRtaW5WaWRlb3M/Lmxlbmd0aCA/IGFkbWluVmlkZW9zIDogdmlkZW9zO1xuXG4gIGNvbnN0IGNsb3NlID0gKCkgPT4gc2V0TGlnaHRib3hJbmRleChudWxsKTtcbiAgY29uc3QgbmV4dCA9ICgpID0+IHNldExpZ2h0Ym94SW5kZXgoKGkpID0+IChpID09PSBudWxsID8gbnVsbCA6IChpICsgMSkgJSBkaXNwbGF5VmlkZW9zLmxlbmd0aCkpO1xuICBjb25zdCBwcmV2ID0gKCkgPT4gc2V0TGlnaHRib3hJbmRleCgoaSkgPT4gKGkgPT09IG51bGwgPyBudWxsIDogKGkgLSAxICsgZGlzcGxheVZpZGVvcy5sZW5ndGgpICUgZGlzcGxheVZpZGVvcy5sZW5ndGgpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFB1YmxpY0NvbnRlbnQoXCJ2aWRlb1wiKVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4gc2V0QWRtaW5WaWRlb3MocmVzdWx0Lml0ZW1zLm1hcCgoaXRlbSkgPT4gKHtcbiAgICAgICAgaWQ6IGdldFlvdXR1YmVJZChpdGVtLmZpZWxkcz8ueW91dHViZUlkIHx8IGl0ZW0uaW1hZ2VfdXJsIHx8IGl0ZW0udGl0bGUpLFxuICAgICAgICB0aXRsZTogaXRlbS50aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGl0ZW0uYm9keSB8fCBpdGVtLnN1YnRpdGxlIHx8IFwiU0pSIFB1YmxpYyBTY2hvb2wgdmlkZW8gZ2FsbGVyeSBpdGVtLlwiLFxuICAgICAgICBjYXRlZ29yeTogaXRlbS5jYXRlZ29yeSB8fCBcIlZpZGVvIEdhbGxlcnlcIixcbiAgICAgICAgZGF0ZTogaXRlbS5wdWJsaXNoZWRfYXQgfHwgdW5kZWZpbmVkLFxuICAgICAgfSkpKSlcbiAgICAgIC5jYXRjaCgoKSA9PiBzZXRBZG1pblZpZGVvcyhudWxsKSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsaWdodGJveEluZGV4ID09PSBudWxsKSByZXR1cm47XG4gICAgY29uc3Qgb25LZXkgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSBjbG9zZSgpO1xuICAgICAgaWYgKGUua2V5ID09PSBcIkFycm93UmlnaHRcIikgbmV4dCgpO1xuICAgICAgaWYgKGUua2V5ID09PSBcIkFycm93TGVmdFwiKSBwcmV2KCk7XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgb25LZXkpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgb25LZXkpO1xuICB9LCBbbGlnaHRib3hJbmRleF0pO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxQYWdlSGVyb1xuICAgICAgICB0aXRsZT1cIlZpZGVvIEdhbGxlcnlcIlxuICAgICAgICBicmVhZGNydW1icz17W3sgbGFiZWw6IFwiR2FsbGVyeVwiIH0sIHsgbGFiZWw6IFwiVmlkZW9zXCIgfV19XG4gICAgICAvPlxuXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNiBiZy13aGl0ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTQgZ2FwLTZcIj5cbiAgICAgICAgICAgIHtkaXNwbGF5VmlkZW9zLm1hcCgodiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGtleT17YCR7di5pZH0tJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldExpZ2h0Ym94SW5kZXgoaW5kZXgpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIGN1cnNvci1wb2ludGVyIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLTJ4bCBiZy13aGl0ZSB0ZXh0LWxlZnQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBib3hTaGFkb3c6IFwiMCAxMHB4IDMwcHggcmdiYSgwLDAsMCwwLjA4KVwiIH19XG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoZSkgPT4gKGUuY3VycmVudFRhcmdldC5zdHlsZS5ib3hTaGFkb3cgPSBcIjAgMTVweCA0MHB4IHJnYmEoMCwwLDAsMC4xNSlcIil9XG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoZSkgPT4gKGUuY3VycmVudFRhcmdldC5zdHlsZS5ib3hTaGFkb3cgPSBcIjAgMTBweCAzMHB4IHJnYmEoMCwwLDAsMC4wOClcIil9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtWzIwMHB4XSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvJHt2LmlkfS9ocWRlZmF1bHQuanBnYH1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXt2LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi01MDAgZ3JvdXAtaG92ZXI6c2NhbGUtMTEwXCJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ibGFjay8zMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBncm91cC1ob3ZlcjpiZy1ibGFjay81MCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBwLTUgdHJhbnNmb3JtIGdyb3VwLWhvdmVyOnNjYWxlLTExMCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCJoc2wodmFyKC0taW5kaWFuLWdyZWVuKSlcIiB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPFBsYXkgY2xhc3NOYW1lPVwiaC04IHctOCB0ZXh0LXdoaXRlXCIgZmlsbD1cIndoaXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIHtsaWdodGJveEluZGV4ICE9PSBudWxsICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgei1bMTAwXSBiZy1ibGFjay85NSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTQgYW5pbWF0ZS1mYWRlLWluXCJcbiAgICAgICAgICBvbkNsaWNrPXtjbG9zZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7IGUuc3RvcFByb3BhZ2F0aW9uKCk7IGNsb3NlKCk7IH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCB0b3AtNCByaWdodC00IHotWzExMF0gYmctaW5kaWFuLWdyZWVuIHRleHQtd2hpdGUgcm91bmRlZC1mdWxsIHAtMyBob3ZlcjpvcGFjaXR5LTkwIHRyYW5zaXRpb25cIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8WCBjbGFzc05hbWU9XCJoLTYgdy02XCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7IGUuc3RvcFByb3BhZ2F0aW9uKCk7IHByZXYoKTsgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIGxlZnQtMiBzbTpsZWZ0LTYgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yIHotWzExMF0gYmctaW5kaWFuLWdyZWVuIHRleHQtd2hpdGUgcm91bmRlZC1mdWxsIHAtMyBob3ZlcjpvcGFjaXR5LTkwIHRyYW5zaXRpb25cIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlByZXZpb3VzXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2hldnJvbkxlZnQgY2xhc3NOYW1lPVwiaC02IHctNlwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4geyBlLnN0b3BQcm9wYWdhdGlvbigpOyBuZXh0KCk7IH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCByaWdodC0yIHNtOnJpZ2h0LTYgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yIHotWzExMF0gYmctaW5kaWFuLWdyZWVuIHRleHQtd2hpdGUgcm91bmRlZC1mdWxsIHAtMyBob3ZlcjpvcGFjaXR5LTkwIHRyYW5zaXRpb25cIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk5leHRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDaGV2cm9uUmlnaHQgY2xhc3NOYW1lPVwiaC02IHctNlwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCB3LWZ1bGxcIiBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbFwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IFwiNTYuMjUlXCIgfX0+XG4gICAgICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgICAgICBrZXk9e2Rpc3BsYXlWaWRlb3NbbGlnaHRib3hJbmRleF0uaWR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctZnVsbCBoLWZ1bGwgcm91bmRlZC1sZ1wiXG4gICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHtkaXNwbGF5VmlkZW9zW2xpZ2h0Ym94SW5kZXhdLmlkfT9hdXRvcGxheT0xJnJlbD0wYH1cbiAgICAgICAgICAgICAgICB0aXRsZT17ZGlzcGxheVZpZGVvc1tsaWdodGJveEluZGV4XS50aXRsZX1cbiAgICAgICAgICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxuICAgICAgICAgICAgICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiXG4gICAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVmlkZW9HYWxsZXJ5O1xuIl0sImZpbGUiOiIvaG9tZS9zanJzaDkxNi9wdWJsaWNfaHRtbC9zcmMvcGFnZXMvZ2FsbGVyeS9WaWRlb0dhbGxlcnkudHN4In0=