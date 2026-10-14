import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/gallery/PhotoGallery.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/pages/gallery/PhotoGallery.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import Layout from "/src/components/Layout.tsx";
import PageHero from "/src/components/PageHero.tsx";
import { X, ChevronLeft, ChevronRight } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
import __vite__cjsImport5_react from "/node_modules/.vite/deps/react.js?v=5efa796b"; const useCallback = __vite__cjsImport5_react["useCallback"]; const useEffect = __vite__cjsImport5_react["useEffect"]; const useMemo = __vite__cjsImport5_react["useMemo"]; const useState = __vite__cjsImport5_react["useState"];
import { getPublicContent } from "/src/lib/api.ts";
import event1 from "/src/assets/gallery/event1.jpg?import";
import event2 from "/src/assets/gallery/event2.jpg?import";
import event3 from "/src/assets/gallery/event3.jpg?import";
import event4 from "/src/assets/gallery/event4.jpg?import";
import labs1 from "/src/assets/gallery/labs1.jpg?import";
import labs2 from "/src/assets/gallery/labs2.jpg?import";
import labs3 from "/src/assets/gallery/labs3.jpg?import";
import labs4 from "/src/assets/gallery/labs4.jpg?import";
import sports1 from "/src/assets/gallery/sports1.jpg?import";
import sports2 from "/src/assets/gallery/sports2.jpg?import";
import sports3 from "/src/assets/gallery/sports3.jpg?import";
import sports4 from "/src/assets/gallery/sports4.jpg?import";
import classroom1 from "/src/assets/gallery/classroom1.jpg?import";
import classroom2 from "/src/assets/gallery/classroom2.jpg?import";
import classroom3 from "/src/assets/gallery/classroom3.jpg?import";
import classroom4 from "/src/assets/gallery/classroom4.jpg?import";
import music1 from "/src/assets/gallery/music1.jpg?import";
import music2 from "/src/assets/gallery/music2.jpg?import";
import music3 from "/src/assets/gallery/music3.jpg?import";
import music4 from "/src/assets/gallery/music4.jpg?import";
import yoga1 from "/src/assets/gallery/yoga1.jpg?import";
import yoga2 from "/src/assets/gallery/yoga2.jpg?import";
import yoga3 from "/src/assets/gallery/yoga3.jpg?import";
import yoga4 from "/src/assets/gallery/yoga4.jpg?import";
export const photos = [
    // Events
    {
        category: "events",
        title: "Events Photo 1",
        src: event1
    },
    {
        category: "events",
        title: "Events Photo 2",
        src: event2
    },
    {
        category: "events",
        title: "Events Photo 3",
        src: event3
    },
    {
        category: "events",
        title: "Events Photo 4",
        src: event4
    },
    // Labs
    {
        category: "labs",
        title: "Labs Photo 1",
        src: labs1
    },
    {
        category: "labs",
        title: "Labs Photo 2",
        src: labs2
    },
    {
        category: "labs",
        title: "Labs Photo 3",
        src: labs3
    },
    {
        category: "labs",
        title: "Labs Photo 4",
        src: labs4
    },
    // Sports
    {
        category: "sports",
        title: "Sports Photo 1",
        src: sports1
    },
    {
        category: "sports",
        title: "Sports Photo 2",
        src: sports2
    },
    {
        category: "sports",
        title: "Sports Photo 3",
        src: sports3
    },
    {
        category: "sports",
        title: "Sports Photo 4",
        src: sports4
    },
    // Classroom
    {
        category: "classroom",
        title: "Classroom Photo 1",
        src: classroom1
    },
    {
        category: "classroom",
        title: "Classroom Photo 2",
        src: classroom2
    },
    {
        category: "classroom",
        title: "Classroom Photo 3",
        src: classroom3
    },
    {
        category: "classroom",
        title: "Classroom Photo 4",
        src: classroom4
    },
    // Music
    {
        category: "music",
        title: "Music Photo 1",
        src: music1
    },
    {
        category: "music",
        title: "Music Photo 2",
        src: music2
    },
    {
        category: "music",
        title: "Music Photo 3",
        src: music3
    },
    {
        category: "music",
        title: "Music Photo 4",
        src: music4
    },
    // Yoga
    {
        category: "yoga",
        title: "Yoga Photo 1",
        src: yoga1
    },
    {
        category: "yoga",
        title: "Yoga Photo 2",
        src: yoga2
    },
    {
        category: "yoga",
        title: "Yoga Photo 3",
        src: yoga3
    },
    {
        category: "yoga",
        title: "Yoga Photo 4",
        src: yoga4
    }
];
const filters = [
    {
        id: "all",
        label: "All"
    },
    {
        id: "events",
        label: "Events"
    },
    {
        id: "labs",
        label: "Labs"
    },
    {
        id: "sports",
        label: "Sports"
    },
    {
        id: "classroom",
        label: "Classroom"
    },
    {
        id: "music",
        label: "Music"
    },
    {
        id: "yoga",
        label: "Yoga"
    }
];
const categoryOrder = filters.filter((f)=>f.id !== "all").map((f)=>f.id);
const allMixed = (()=>{
    const groups = categoryOrder.map((cat)=>photos.filter((p)=>p.category === cat));
    const maxLen = Math.max(...groups.map((g)=>g.length));
    const mixed = [];
    for(let i = 0; i < maxLen; i++){
        for (const group of groups){
            if (group[i]) mixed.push(group[i]);
        }
    }
    return mixed;
})();
const PhotoGallery = ()=>{
    _s();
    const [activeFilter, setActiveFilter] = useState("all");
    const [lightboxIndex, setLightboxIndex] = useState(null);
    const [adminPhotos, setAdminPhotos] = useState(null);
    useEffect(()=>{
        getPublicContent("gallery").then((result)=>setAdminPhotos(result.items.map((item)=>({
                    title: item.title,
                    src: item.image_url || "/placeholder.svg",
                    category: item.category || "gallery",
                    description: item.body || item.subtitle || undefined,
                    date: item.published_at || undefined,
                    eventTitle: item.subtitle || undefined
                })))).catch(()=>setAdminPhotos(null));
    }, []);
    const hasAdminPhotos = Boolean(adminPhotos?.length);
    const displayPhotos = hasAdminPhotos ? adminPhotos : photos;
    const displayFilters = useMemo(()=>{
        const categories = Array.from(new Set(displayPhotos.map((photo)=>photo.category)));
        return [
            {
                id: "all",
                label: "All"
            },
            ...categories.map((category)=>({
                    id: category,
                    label: displayPhotos.find((photo)=>photo.category === category)?.eventTitle || category.replace(/-/g, " ").replace(/\b\w/g, (char)=>char.toUpperCase())
                }))
        ];
    }, [
        displayPhotos
    ]);
    const mixed = useMemo(()=>{
        if (!hasAdminPhotos) return allMixed;
        const categories = displayFilters.filter((f)=>f.id !== "all").map((f)=>f.id);
        const groups = categories.map((cat)=>displayPhotos.filter((p)=>p.category === cat));
        const maxLen = Math.max(0, ...groups.map((g)=>g.length));
        const items = [];
        for(let i = 0; i < maxLen; i++){
            for (const group of groups)if (group[i]) items.push(group[i]);
        }
        return items;
    }, [
        hasAdminPhotos,
        displayFilters,
        displayPhotos
    ]);
    const filtered = activeFilter === "all" ? mixed : displayPhotos.filter((p)=>p.category === activeFilter);
    const close = useCallback(()=>setLightboxIndex(null), []);
    const next = useCallback(()=>{
        setLightboxIndex((i)=>i === null ? null : (i + 1) % filtered.length);
    }, [
        filtered.length
    ]);
    const prev = useCallback(()=>{
        setLightboxIndex((i)=>i === null ? null : (i - 1 + filtered.length) % filtered.length);
    }, [
        filtered.length
    ]);
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
        lightboxIndex,
        close,
        next,
        prev
    ]);
    return /*#__PURE__*/ _jsxDEV(Layout, {
        "data-lov-id": "src/pages/gallery/PhotoGallery.tsx:161:4",
        "data-lov-name": "Layout",
        "data-component-path": "src/pages/gallery/PhotoGallery.tsx",
        "data-component-line": "161",
        "data-component-file": "PhotoGallery.tsx",
        "data-component-name": "Layout",
        "data-component-content": "%7B%7D",
        children: [
            /*#__PURE__*/ _jsxDEV(PageHero, {
                "data-lov-id": "src/pages/gallery/PhotoGallery.tsx:162:6",
                "data-lov-name": "PageHero",
                "data-component-path": "src/pages/gallery/PhotoGallery.tsx",
                "data-component-line": "162",
                "data-component-file": "PhotoGallery.tsx",
                "data-component-name": "PageHero",
                "data-component-content": "%7B%7D",
                title: "Photo Gallery",
                breadcrumbs: [
                    {
                        label: "Gallery"
                    },
                    {
                        label: "Photos"
                    }
                ]
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/gallery/PhotoGallery.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/gallery/PhotoGallery.tsx:168:6",
                "data-lov-name": "section",
                "data-component-path": "src/pages/gallery/PhotoGallery.tsx",
                "data-component-line": "168",
                "data-component-file": "PhotoGallery.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-10%20bg-white%22%7D",
                className: "py-10 bg-white",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/gallery/PhotoGallery.tsx:169:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/gallery/PhotoGallery.tsx",
                    "data-component-line": "169",
                    "data-component-file": "PhotoGallery.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/gallery/PhotoGallery.tsx:170:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/gallery/PhotoGallery.tsx",
                        "data-component-line": "170",
                        "data-component-file": "PhotoGallery.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22flex%20flex-wrap%20justify-center%20gap-3%22%7D",
                        className: "flex flex-wrap justify-center gap-3",
                        children: displayFilters.map((f)=>{
                            const isActive = activeFilter === f.id;
                            return /*#__PURE__*/ _jsxDEV("button", {
                                "data-lov-id": "src/pages/gallery/PhotoGallery.tsx:174:16",
                                "data-lov-name": "button",
                                "data-component-path": "src/pages/gallery/PhotoGallery.tsx",
                                "data-component-line": "174",
                                "data-component-file": "PhotoGallery.tsx",
                                "data-component-name": "button",
                                "data-component-content": "%7B%7D",
                                onClick: ()=>setActiveFilter(f.id),
                                className: `px-6 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${isActive ? "bg-indian-green text-white border-indian-green hover:bg-indian-green hover:text-white" : "bg-white text-indian-green border-indian-green hover:bg-indian-green hover:text-white"}`,
                                children: f.label
                            }, f.id, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/gallery/PhotoGallery.tsx",
                                lineNumber: 174,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/gallery/PhotoGallery.tsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/gallery/PhotoGallery.tsx",
                    lineNumber: 169,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/gallery/PhotoGallery.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/gallery/PhotoGallery.tsx:192:6",
                "data-lov-name": "section",
                "data-component-path": "src/pages/gallery/PhotoGallery.tsx",
                "data-component-line": "192",
                "data-component-file": "PhotoGallery.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22pb-20%20bg-white%22%7D",
                className: "pb-20 bg-white",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/gallery/PhotoGallery.tsx:193:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/gallery/PhotoGallery.tsx",
                    "data-component-line": "193",
                    "data-component-file": "PhotoGallery.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/gallery/PhotoGallery.tsx:194:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/gallery/PhotoGallery.tsx",
                        "data-component-line": "194",
                        "data-component-file": "PhotoGallery.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22grid%20grid-cols-1%20sm%3Agrid-cols-2%20lg%3Agrid-cols-3%20xl%3Agrid-cols-4%20gap-6%22%7D",
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                        children: filtered.map((photo, index)=>/*#__PURE__*/ _jsxDEV("button", {
                                "data-lov-id": "src/pages/gallery/PhotoGallery.tsx:196:14",
                                "data-lov-name": "button",
                                "data-component-path": "src/pages/gallery/PhotoGallery.tsx",
                                "data-component-line": "196",
                                "data-component-file": "PhotoGallery.tsx",
                                "data-component-name": "button",
                                "data-component-content": "%7B%22className%22%3A%22group%20cursor-pointer%20overflow-hidden%20rounded-2xl%20bg-white%20text-left%20transition-all%20duration-300%22%7D",
                                onClick: ()=>setLightboxIndex(index),
                                className: "group cursor-pointer overflow-hidden rounded-2xl bg-white text-left transition-all duration-300",
                                style: {
                                    boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.15)",
                                onMouseLeave: (e)=>e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)",
                                children: /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/pages/gallery/PhotoGallery.tsx:204:16",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/pages/gallery/PhotoGallery.tsx",
                                    "data-component-line": "204",
                                    "data-component-file": "PhotoGallery.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22relative%20overflow-hidden%20h-%5B240px%5D%22%7D",
                                    className: "relative overflow-hidden h-[240px]",
                                    children: /*#__PURE__*/ _jsxDEV("img", {
                                        "data-lov-id": "src/pages/gallery/PhotoGallery.tsx:205:18",
                                        "data-lov-name": "img",
                                        "data-component-path": "src/pages/gallery/PhotoGallery.tsx",
                                        "data-component-line": "205",
                                        "data-component-file": "PhotoGallery.tsx",
                                        "data-component-name": "img",
                                        "data-component-content": "%7B%22className%22%3A%22w-full%20h-full%20object-cover%20transition-transform%20duration-500%20group-hover%3Ascale-110%22%7D",
                                        src: photo.src,
                                        alt: photo.title,
                                        className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                                        loading: "lazy",
                                        onError: (e)=>{
                                            e.currentTarget.src = "/placeholder.svg";
                                        }
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/gallery/PhotoGallery.tsx",
                                        lineNumber: 205,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/gallery/PhotoGallery.tsx",
                                    lineNumber: 204,
                                    columnNumber: 17
                                }, this)
                            }, `${photo.src}-${index}`, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/gallery/PhotoGallery.tsx",
                                lineNumber: 196,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/gallery/PhotoGallery.tsx",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/gallery/PhotoGallery.tsx",
                    lineNumber: 193,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/gallery/PhotoGallery.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this),
            lightboxIndex !== null && /*#__PURE__*/ _jsxDEV("div", {
                "data-lov-id": "src/pages/gallery/PhotoGallery.tsx:221:8",
                "data-lov-name": "div",
                "data-component-path": "src/pages/gallery/PhotoGallery.tsx",
                "data-component-line": "221",
                "data-component-file": "PhotoGallery.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22fixed%20inset-0%20z-%5B100%5D%20bg-black%2F90%20flex%20items-center%20justify-center%20p-4%20animate-fade-in%22%7D",
                className: "fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-fade-in",
                onClick: close,
                children: [
                    /*#__PURE__*/ _jsxDEV("button", {
                        "data-lov-id": "src/pages/gallery/PhotoGallery.tsx:225:10",
                        "data-lov-name": "button",
                        "data-component-path": "src/pages/gallery/PhotoGallery.tsx",
                        "data-component-line": "225",
                        "data-component-file": "PhotoGallery.tsx",
                        "data-component-name": "button",
                        "data-component-content": "%7B%22className%22%3A%22fixed%20top-4%20right-4%20z-%5B110%5D%20bg-indian-green%20text-white%20rounded-full%20p-3%20hover%3Aopacity-90%20transition%22%7D",
                        onClick: (e)=>{
                            e.stopPropagation();
                            close();
                        },
                        className: "fixed top-4 right-4 z-[110] bg-indian-green text-white rounded-full p-3 hover:opacity-90 transition",
                        "aria-label": "Close",
                        children: /*#__PURE__*/ _jsxDEV(X, {
                            "data-lov-id": "src/pages/gallery/PhotoGallery.tsx:230:12",
                            "data-lov-name": "X",
                            "data-component-path": "src/pages/gallery/PhotoGallery.tsx",
                            "data-component-line": "230",
                            "data-component-file": "PhotoGallery.tsx",
                            "data-component-name": "X",
                            "data-component-content": "%7B%22className%22%3A%22h-6%20w-6%22%7D",
                            className: "h-6 w-6"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/gallery/PhotoGallery.tsx",
                            lineNumber: 230,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/gallery/PhotoGallery.tsx",
                        lineNumber: 225,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("button", {
                        "data-lov-id": "src/pages/gallery/PhotoGallery.tsx:233:10",
                        "data-lov-name": "button",
                        "data-component-path": "src/pages/gallery/PhotoGallery.tsx",
                        "data-component-line": "233",
                        "data-component-file": "PhotoGallery.tsx",
                        "data-component-name": "button",
                        "data-component-content": "%7B%22className%22%3A%22fixed%20left-2%20sm%3Aleft-6%20top-1%2F2%20-translate-y-1%2F2%20z-%5B110%5D%20bg-indian-green%20text-white%20rounded-full%20p-3%20hover%3Aopacity-90%20transition%22%7D",
                        onClick: (e)=>{
                            e.stopPropagation();
                            prev();
                        },
                        className: "fixed left-2 sm:left-6 top-1/2 -translate-y-1/2 z-[110] bg-indian-green text-white rounded-full p-3 hover:opacity-90 transition",
                        "aria-label": "Previous",
                        children: /*#__PURE__*/ _jsxDEV(ChevronLeft, {
                            "data-lov-id": "src/pages/gallery/PhotoGallery.tsx:238:12",
                            "data-lov-name": "ChevronLeft",
                            "data-component-path": "src/pages/gallery/PhotoGallery.tsx",
                            "data-component-line": "238",
                            "data-component-file": "PhotoGallery.tsx",
                            "data-component-name": "ChevronLeft",
                            "data-component-content": "%7B%22className%22%3A%22h-6%20w-6%22%7D",
                            className: "h-6 w-6"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/gallery/PhotoGallery.tsx",
                            lineNumber: 238,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/gallery/PhotoGallery.tsx",
                        lineNumber: 233,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("button", {
                        "data-lov-id": "src/pages/gallery/PhotoGallery.tsx:241:10",
                        "data-lov-name": "button",
                        "data-component-path": "src/pages/gallery/PhotoGallery.tsx",
                        "data-component-line": "241",
                        "data-component-file": "PhotoGallery.tsx",
                        "data-component-name": "button",
                        "data-component-content": "%7B%22className%22%3A%22fixed%20right-2%20sm%3Aright-6%20top-1%2F2%20-translate-y-1%2F2%20z-%5B110%5D%20bg-indian-green%20text-white%20rounded-full%20p-3%20hover%3Aopacity-90%20transition%22%7D",
                        onClick: (e)=>{
                            e.stopPropagation();
                            next();
                        },
                        className: "fixed right-2 sm:right-6 top-1/2 -translate-y-1/2 z-[110] bg-indian-green text-white rounded-full p-3 hover:opacity-90 transition",
                        "aria-label": "Next",
                        children: /*#__PURE__*/ _jsxDEV(ChevronRight, {
                            "data-lov-id": "src/pages/gallery/PhotoGallery.tsx:246:12",
                            "data-lov-name": "ChevronRight",
                            "data-component-path": "src/pages/gallery/PhotoGallery.tsx",
                            "data-component-line": "246",
                            "data-component-file": "PhotoGallery.tsx",
                            "data-component-name": "ChevronRight",
                            "data-component-content": "%7B%22className%22%3A%22h-6%20w-6%22%7D",
                            className: "h-6 w-6"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/gallery/PhotoGallery.tsx",
                            lineNumber: 246,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/gallery/PhotoGallery.tsx",
                        lineNumber: 241,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/gallery/PhotoGallery.tsx:249:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/gallery/PhotoGallery.tsx",
                        "data-component-line": "249",
                        "data-component-file": "PhotoGallery.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22max-w-5xl%20w-full%20flex%20flex-col%20items-center%22%7D",
                        className: "max-w-5xl w-full flex flex-col items-center",
                        onClick: (e)=>e.stopPropagation(),
                        children: /*#__PURE__*/ _jsxDEV("img", {
                            "data-lov-id": "src/pages/gallery/PhotoGallery.tsx:250:12",
                            "data-lov-name": "img",
                            "data-component-path": "src/pages/gallery/PhotoGallery.tsx",
                            "data-component-line": "250",
                            "data-component-file": "PhotoGallery.tsx",
                            "data-component-name": "img",
                            "data-component-content": "%7B%22className%22%3A%22max-w-full%20max-h-%5B80vh%5D%20object-contain%20rounded-lg%22%7D",
                            src: filtered[lightboxIndex].src,
                            alt: filtered[lightboxIndex].title,
                            className: "max-w-full max-h-[80vh] object-contain rounded-lg",
                            onError: (e)=>{
                                e.currentTarget.src = "/placeholder.svg";
                            }
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/gallery/PhotoGallery.tsx",
                            lineNumber: 250,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/pages/gallery/PhotoGallery.tsx",
                        lineNumber: 249,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/sjrsh916/public_html/src/pages/gallery/PhotoGallery.tsx",
                lineNumber: 221,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/sjrsh916/public_html/src/pages/gallery/PhotoGallery.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
};
_s(PhotoGallery, "4X8OhfNeMtG8Q7+n8TNj4Z+4d44=");
_c = PhotoGallery;
export default PhotoGallery;
var _c;
$RefreshReg$(_c, "PhotoGallery");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/pages/gallery/PhotoGallery.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/pages/gallery/PhotoGallery.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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QUE7NEJBQUVHLFdBQVU7Ozs7Ozs7Ozs7O2tDQUcxQixRQUFDQzt3QkFBRVYsZUFBQTt3QkFBQUMsaUJBQUE7d0JBQUFDLHVCQUFBO3dCQUFBQyx1QkFBQTt3QkFBQUMsdUJBQUE7d0JBQUFDLHVCQUFBO3dCQUFBQywwQkFBQTt3QkFBRUcsV0FBVTt3QkFBOENJLFNBQVMsQ0FBQ2xCLElBQU1BLEVBQUU2QixlQUFlO2tDQUM1RixzQkFBQ0o7NEJBQUVwQixlQUFBOzRCQUFBQyxpQkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLDBCQUFBOzRCQUNEdEUsS0FBS3NELFFBQVEsQ0FBQzlCLGNBQWMsQ0FBQ3hCLEdBQUc7NEJBQ2hDcUYsS0FBSy9CLFFBQVEsQ0FBQzlCLGNBQWMsQ0FBQ3pCLEtBQUs7NEJBQ2xDMEUsV0FBVTs0QkFDVmMsU0FBUyxDQUFDNUI7Z0NBQVNBLEVBQUV1QixhQUFhLENBQXNCbEYsR0FBRyxHQUFHOzRCQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPaEc7R0FyS01xQjtLQUFBQTtBQXVLTixlQUFlQSxhQUFZIiwibmFtZXMiOlsiTGF5b3V0IiwiUGFnZUhlcm8iLCJYIiwiQ2hldnJvbkxlZnQiLCJDaGV2cm9uUmlnaHQiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsImdldFB1YmxpY0NvbnRlbnQiLCJldmVudDEiLCJldmVudDIiLCJldmVudDMiLCJldmVudDQiLCJsYWJzMSIsImxhYnMyIiwibGFiczMiLCJsYWJzNCIsInNwb3J0czEiLCJzcG9ydHMyIiwic3BvcnRzMyIsInNwb3J0czQiLCJjbGFzc3Jvb20xIiwiY2xhc3Nyb29tMiIsImNsYXNzcm9vbTMiLCJjbGFzc3Jvb200IiwibXVzaWMxIiwibXVzaWMyIiwibXVzaWMzIiwibXVzaWM0IiwieW9nYTEiLCJ5b2dhMiIsInlvZ2EzIiwieW9nYTQiLCJwaG90b3MiLCJjYXRlZ29yeSIsInRpdGxlIiwic3JjIiwiZmlsdGVycyIsImlkIiwibGFiZWwiLCJjYXRlZ29yeU9yZGVyIiwiZmlsdGVyIiwiZiIsIm1hcCIsImFsbE1peGVkIiwiZ3JvdXBzIiwiY2F0IiwicCIsIm1heExlbiIsIk1hdGgiLCJtYXgiLCJnIiwibGVuZ3RoIiwibWl4ZWQiLCJpIiwiZ3JvdXAiLCJwdXNoIiwiUGhvdG9HYWxsZXJ5IiwiYWN0aXZlRmlsdGVyIiwic2V0QWN0aXZlRmlsdGVyIiwibGlnaHRib3hJbmRleCIsInNldExpZ2h0Ym94SW5kZXgiLCJhZG1pblBob3RvcyIsInNldEFkbWluUGhvdG9zIiwidGhlbiIsInJlc3VsdCIsIml0ZW1zIiwiaXRlbSIsImltYWdlX3VybCIsImRlc2NyaXB0aW9uIiwiYm9keSIsInN1YnRpdGxlIiwidW5kZWZpbmVkIiwiZGF0ZSIsInB1Ymxpc2hlZF9hdCIsImV2ZW50VGl0bGUiLCJjYXRjaCIsImhhc0FkbWluUGhvdG9zIiwiQm9vbGVhbiIsImRpc3BsYXlQaG90b3MiLCJkaXNwbGF5RmlsdGVycyIsImNhdGVnb3JpZXMiLCJBcnJheSIsImZyb20iLCJTZXQiLCJwaG90byIsImZpbmQiLCJyZXBsYWNlIiwiY2hhciIsInRvVXBwZXJDYXNlIiwiZmlsdGVyZWQiLCJjbG9zZSIsIm5leHQiLCJwcmV2Iiwib25LZXkiLCJlIiwia2V5Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkYXRhLWxvdi1pZCIsImRhdGEtbG92LW5hbWUiLCJkYXRhLWNvbXBvbmVudC1wYXRoIiwiZGF0YS1jb21wb25lbnQtbGluZSIsImRhdGEtY29tcG9uZW50LWZpbGUiLCJkYXRhLWNvbXBvbmVudC1uYW1lIiwiZGF0YS1jb21wb25lbnQtY29udGVudCIsImJyZWFkY3J1bWJzIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImlzQWN0aXZlIiwiYnV0dG9uIiwib25DbGljayIsImluZGV4Iiwic3R5bGUiLCJib3hTaGFkb3ciLCJvbk1vdXNlRW50ZXIiLCJjdXJyZW50VGFyZ2V0Iiwib25Nb3VzZUxlYXZlIiwiaW1nIiwiYWx0IiwibG9hZGluZyIsIm9uRXJyb3IiLCJzdG9wUHJvcGFnYXRpb24iLCJhcmlhLWxhYmVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIlBob3RvR2FsbGVyeS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFBhZ2VIZXJvIGZyb20gXCJAL2NvbXBvbmVudHMvUGFnZUhlcm9cIjtcbmltcG9ydCB7IFgsIENoZXZyb25MZWZ0LCBDaGV2cm9uUmlnaHQgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ2V0UHVibGljQ29udGVudCB9IGZyb20gXCJAL2xpYi9hcGlcIjtcbmltcG9ydCBldmVudDEgZnJvbSBcIkAvYXNzZXRzL2dhbGxlcnkvZXZlbnQxLmpwZ1wiO1xuaW1wb3J0IGV2ZW50MiBmcm9tIFwiQC9hc3NldHMvZ2FsbGVyeS9ldmVudDIuanBnXCI7XG5pbXBvcnQgZXZlbnQzIGZyb20gXCJAL2Fzc2V0cy9nYWxsZXJ5L2V2ZW50My5qcGdcIjtcbmltcG9ydCBldmVudDQgZnJvbSBcIkAvYXNzZXRzL2dhbGxlcnkvZXZlbnQ0LmpwZ1wiO1xuaW1wb3J0IGxhYnMxIGZyb20gXCJAL2Fzc2V0cy9nYWxsZXJ5L2xhYnMxLmpwZ1wiO1xuaW1wb3J0IGxhYnMyIGZyb20gXCJAL2Fzc2V0cy9nYWxsZXJ5L2xhYnMyLmpwZ1wiO1xuaW1wb3J0IGxhYnMzIGZyb20gXCJAL2Fzc2V0cy9nYWxsZXJ5L2xhYnMzLmpwZ1wiO1xuaW1wb3J0IGxhYnM0IGZyb20gXCJAL2Fzc2V0cy9nYWxsZXJ5L2xhYnM0LmpwZ1wiO1xuaW1wb3J0IHNwb3J0czEgZnJvbSBcIkAvYXNzZXRzL2dhbGxlcnkvc3BvcnRzMS5qcGdcIjtcbmltcG9ydCBzcG9ydHMyIGZyb20gXCJAL2Fzc2V0cy9nYWxsZXJ5L3Nwb3J0czIuanBnXCI7XG5pbXBvcnQgc3BvcnRzMyBmcm9tIFwiQC9hc3NldHMvZ2FsbGVyeS9zcG9ydHMzLmpwZ1wiO1xuaW1wb3J0IHNwb3J0czQgZnJvbSBcIkAvYXNzZXRzL2dhbGxlcnkvc3BvcnRzNC5qcGdcIjtcbmltcG9ydCBjbGFzc3Jvb20xIGZyb20gXCJAL2Fzc2V0cy9nYWxsZXJ5L2NsYXNzcm9vbTEuanBnXCI7XG5pbXBvcnQgY2xhc3Nyb29tMiBmcm9tIFwiQC9hc3NldHMvZ2FsbGVyeS9jbGFzc3Jvb20yLmpwZ1wiO1xuaW1wb3J0IGNsYXNzcm9vbTMgZnJvbSBcIkAvYXNzZXRzL2dhbGxlcnkvY2xhc3Nyb29tMy5qcGdcIjtcbmltcG9ydCBjbGFzc3Jvb200IGZyb20gXCJAL2Fzc2V0cy9nYWxsZXJ5L2NsYXNzcm9vbTQuanBnXCI7XG5pbXBvcnQgbXVzaWMxIGZyb20gXCJAL2Fzc2V0cy9nYWxsZXJ5L211c2ljMS5qcGdcIjtcbmltcG9ydCBtdXNpYzIgZnJvbSBcIkAvYXNzZXRzL2dhbGxlcnkvbXVzaWMyLmpwZ1wiO1xuaW1wb3J0IG11c2ljMyBmcm9tIFwiQC9hc3NldHMvZ2FsbGVyeS9tdXNpYzMuanBnXCI7XG5pbXBvcnQgbXVzaWM0IGZyb20gXCJAL2Fzc2V0cy9nYWxsZXJ5L211c2ljNC5qcGdcIjtcbmltcG9ydCB5b2dhMSBmcm9tIFwiQC9hc3NldHMvZ2FsbGVyeS95b2dhMS5qcGdcIjtcbmltcG9ydCB5b2dhMiBmcm9tIFwiQC9hc3NldHMvZ2FsbGVyeS95b2dhMi5qcGdcIjtcbmltcG9ydCB5b2dhMyBmcm9tIFwiQC9hc3NldHMvZ2FsbGVyeS95b2dhMy5qcGdcIjtcbmltcG9ydCB5b2dhNCBmcm9tIFwiQC9hc3NldHMvZ2FsbGVyeS95b2dhNC5qcGdcIjtcblxuZXhwb3J0IHR5cGUgUGhvdG8gPSB7XG4gIHNyYzogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBjYXRlZ29yeTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgZGF0ZT86IHN0cmluZztcbiAgZXZlbnRUaXRsZT86IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBwaG90b3M6IFBob3RvW10gPSBbXG4gIC8vIEV2ZW50c1xuICB7IGNhdGVnb3J5OiBcImV2ZW50c1wiLCB0aXRsZTogXCJFdmVudHMgUGhvdG8gMVwiLCBzcmM6IGV2ZW50MSB9LFxuICB7IGNhdGVnb3J5OiBcImV2ZW50c1wiLCB0aXRsZTogXCJFdmVudHMgUGhvdG8gMlwiLCBzcmM6IGV2ZW50MiB9LFxuICB7IGNhdGVnb3J5OiBcImV2ZW50c1wiLCB0aXRsZTogXCJFdmVudHMgUGhvdG8gM1wiLCBzcmM6IGV2ZW50MyB9LFxuICB7IGNhdGVnb3J5OiBcImV2ZW50c1wiLCB0aXRsZTogXCJFdmVudHMgUGhvdG8gNFwiLCBzcmM6IGV2ZW50NCB9LFxuICAvLyBMYWJzXG4gIHsgY2F0ZWdvcnk6IFwibGFic1wiLCB0aXRsZTogXCJMYWJzIFBob3RvIDFcIiwgc3JjOiBsYWJzMSB9LFxuICB7IGNhdGVnb3J5OiBcImxhYnNcIiwgdGl0bGU6IFwiTGFicyBQaG90byAyXCIsIHNyYzogbGFiczIgfSxcbiAgeyBjYXRlZ29yeTogXCJsYWJzXCIsIHRpdGxlOiBcIkxhYnMgUGhvdG8gM1wiLCBzcmM6IGxhYnMzIH0sXG4gIHsgY2F0ZWdvcnk6IFwibGFic1wiLCB0aXRsZTogXCJMYWJzIFBob3RvIDRcIiwgc3JjOiBsYWJzNCB9LFxuICAvLyBTcG9ydHNcbiAgeyBjYXRlZ29yeTogXCJzcG9ydHNcIiwgdGl0bGU6IFwiU3BvcnRzIFBob3RvIDFcIiwgc3JjOiBzcG9ydHMxIH0sXG4gIHsgY2F0ZWdvcnk6IFwic3BvcnRzXCIsIHRpdGxlOiBcIlNwb3J0cyBQaG90byAyXCIsIHNyYzogc3BvcnRzMiB9LFxuICB7IGNhdGVnb3J5OiBcInNwb3J0c1wiLCB0aXRsZTogXCJTcG9ydHMgUGhvdG8gM1wiLCBzcmM6IHNwb3J0czMgfSxcbiAgeyBjYXRlZ29yeTogXCJzcG9ydHNcIiwgdGl0bGU6IFwiU3BvcnRzIFBob3RvIDRcIiwgc3JjOiBzcG9ydHM0IH0sXG4gIC8vIENsYXNzcm9vbVxuICB7IGNhdGVnb3J5OiBcImNsYXNzcm9vbVwiLCB0aXRsZTogXCJDbGFzc3Jvb20gUGhvdG8gMVwiLCBzcmM6IGNsYXNzcm9vbTEgfSxcbiAgeyBjYXRlZ29yeTogXCJjbGFzc3Jvb21cIiwgdGl0bGU6IFwiQ2xhc3Nyb29tIFBob3RvIDJcIiwgc3JjOiBjbGFzc3Jvb20yIH0sXG4gIHsgY2F0ZWdvcnk6IFwiY2xhc3Nyb29tXCIsIHRpdGxlOiBcIkNsYXNzcm9vbSBQaG90byAzXCIsIHNyYzogY2xhc3Nyb29tMyB9LFxuICB7IGNhdGVnb3J5OiBcImNsYXNzcm9vbVwiLCB0aXRsZTogXCJDbGFzc3Jvb20gUGhvdG8gNFwiLCBzcmM6IGNsYXNzcm9vbTQgfSxcbiAgLy8gTXVzaWNcbiAgeyBjYXRlZ29yeTogXCJtdXNpY1wiLCB0aXRsZTogXCJNdXNpYyBQaG90byAxXCIsIHNyYzogbXVzaWMxIH0sXG4gIHsgY2F0ZWdvcnk6IFwibXVzaWNcIiwgdGl0bGU6IFwiTXVzaWMgUGhvdG8gMlwiLCBzcmM6IG11c2ljMiB9LFxuICB7IGNhdGVnb3J5OiBcIm11c2ljXCIsIHRpdGxlOiBcIk11c2ljIFBob3RvIDNcIiwgc3JjOiBtdXNpYzMgfSxcbiAgeyBjYXRlZ29yeTogXCJtdXNpY1wiLCB0aXRsZTogXCJNdXNpYyBQaG90byA0XCIsIHNyYzogbXVzaWM0IH0sXG4gIC8vIFlvZ2FcbiAgeyBjYXRlZ29yeTogXCJ5b2dhXCIsIHRpdGxlOiBcIllvZ2EgUGhvdG8gMVwiLCBzcmM6IHlvZ2ExIH0sXG4gIHsgY2F0ZWdvcnk6IFwieW9nYVwiLCB0aXRsZTogXCJZb2dhIFBob3RvIDJcIiwgc3JjOiB5b2dhMiB9LFxuICB7IGNhdGVnb3J5OiBcInlvZ2FcIiwgdGl0bGU6IFwiWW9nYSBQaG90byAzXCIsIHNyYzogeW9nYTMgfSxcbiAgeyBjYXRlZ29yeTogXCJ5b2dhXCIsIHRpdGxlOiBcIllvZ2EgUGhvdG8gNFwiLCBzcmM6IHlvZ2E0IH0sXG5dO1xuXG5jb25zdCBmaWx0ZXJzID0gW1xuICB7IGlkOiBcImFsbFwiLCBsYWJlbDogXCJBbGxcIiB9LFxuICB7IGlkOiBcImV2ZW50c1wiLCBsYWJlbDogXCJFdmVudHNcIiB9LFxuICB7IGlkOiBcImxhYnNcIiwgbGFiZWw6IFwiTGFic1wiIH0sXG4gIHsgaWQ6IFwic3BvcnRzXCIsIGxhYmVsOiBcIlNwb3J0c1wiIH0sXG4gIHsgaWQ6IFwiY2xhc3Nyb29tXCIsIGxhYmVsOiBcIkNsYXNzcm9vbVwiIH0sXG4gIHsgaWQ6IFwibXVzaWNcIiwgbGFiZWw6IFwiTXVzaWNcIiB9LFxuICB7IGlkOiBcInlvZ2FcIiwgbGFiZWw6IFwiWW9nYVwiIH0sXG5dO1xuXG5jb25zdCBjYXRlZ29yeU9yZGVyID0gZmlsdGVycy5maWx0ZXIoKGYpID0+IGYuaWQgIT09IFwiYWxsXCIpLm1hcCgoZikgPT4gZi5pZCk7XG5jb25zdCBhbGxNaXhlZDogUGhvdG9bXSA9ICgoKSA9PiB7XG4gIGNvbnN0IGdyb3VwcyA9IGNhdGVnb3J5T3JkZXIubWFwKChjYXQpID0+IHBob3Rvcy5maWx0ZXIoKHApID0+IHAuY2F0ZWdvcnkgPT09IGNhdCkpO1xuICBjb25zdCBtYXhMZW4gPSBNYXRoLm1heCguLi5ncm91cHMubWFwKChnKSA9PiBnLmxlbmd0aCkpO1xuICBjb25zdCBtaXhlZDogUGhvdG9bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1heExlbjsgaSsrKSB7XG4gICAgZm9yIChjb25zdCBncm91cCBvZiBncm91cHMpIHtcbiAgICAgIGlmIChncm91cFtpXSkgbWl4ZWQucHVzaChncm91cFtpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBtaXhlZDtcbn0pKCk7XG5cbmNvbnN0IFBob3RvR2FsbGVyeSA9ICgpID0+IHtcbiAgY29uc3QgW2FjdGl2ZUZpbHRlciwgc2V0QWN0aXZlRmlsdGVyXSA9IHVzZVN0YXRlKFwiYWxsXCIpO1xuICBjb25zdCBbbGlnaHRib3hJbmRleCwgc2V0TGlnaHRib3hJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXIgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2FkbWluUGhvdG9zLCBzZXRBZG1pblBob3Rvc10gPSB1c2VTdGF0ZTxQaG90b1tdIHwgbnVsbD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRQdWJsaWNDb250ZW50KFwiZ2FsbGVyeVwiKVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4gc2V0QWRtaW5QaG90b3MocmVzdWx0Lml0ZW1zLm1hcCgoaXRlbSkgPT4gKHtcbiAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXG4gICAgICAgIHNyYzogaXRlbS5pbWFnZV91cmwgfHwgXCIvcGxhY2Vob2xkZXIuc3ZnXCIsXG4gICAgICAgIGNhdGVnb3J5OiBpdGVtLmNhdGVnb3J5IHx8IFwiZ2FsbGVyeVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogaXRlbS5ib2R5IHx8IGl0ZW0uc3VidGl0bGUgfHwgdW5kZWZpbmVkLFxuICAgICAgICBkYXRlOiBpdGVtLnB1Ymxpc2hlZF9hdCB8fCB1bmRlZmluZWQsXG4gICAgICAgIGV2ZW50VGl0bGU6IGl0ZW0uc3VidGl0bGUgfHwgdW5kZWZpbmVkLFxuICAgICAgfSkpKSlcbiAgICAgIC5jYXRjaCgoKSA9PiBzZXRBZG1pblBob3RvcyhudWxsKSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYXNBZG1pblBob3RvcyA9IEJvb2xlYW4oYWRtaW5QaG90b3M/Lmxlbmd0aCk7XG4gIGNvbnN0IGRpc3BsYXlQaG90b3MgPSBoYXNBZG1pblBob3RvcyA/IGFkbWluUGhvdG9zISA6IHBob3RvcztcbiAgY29uc3QgZGlzcGxheUZpbHRlcnMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gQXJyYXkuZnJvbShuZXcgU2V0KGRpc3BsYXlQaG90b3MubWFwKChwaG90bykgPT4gcGhvdG8uY2F0ZWdvcnkpKSk7XG4gICAgcmV0dXJuIFtcbiAgICAgIHsgaWQ6IFwiYWxsXCIsIGxhYmVsOiBcIkFsbFwiIH0sXG4gICAgICAuLi5jYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+ICh7XG4gICAgICAgIGlkOiBjYXRlZ29yeSxcbiAgICAgICAgbGFiZWw6IGRpc3BsYXlQaG90b3MuZmluZCgocGhvdG8pID0+IHBob3RvLmNhdGVnb3J5ID09PSBjYXRlZ29yeSk/LmV2ZW50VGl0bGUgfHwgY2F0ZWdvcnkucmVwbGFjZSgvLS9nLCBcIiBcIikucmVwbGFjZSgvXFxiXFx3L2csIChjaGFyKSA9PiBjaGFyLnRvVXBwZXJDYXNlKCkpLFxuICAgICAgfSkpLFxuICAgIF07XG4gIH0sIFtkaXNwbGF5UGhvdG9zXSk7XG5cbiAgY29uc3QgbWl4ZWQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIWhhc0FkbWluUGhvdG9zKSByZXR1cm4gYWxsTWl4ZWQ7XG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IGRpc3BsYXlGaWx0ZXJzLmZpbHRlcigoZikgPT4gZi5pZCAhPT0gXCJhbGxcIikubWFwKChmKSA9PiBmLmlkKTtcbiAgICBjb25zdCBncm91cHMgPSBjYXRlZ29yaWVzLm1hcCgoY2F0KSA9PiBkaXNwbGF5UGhvdG9zLmZpbHRlcigocCkgPT4gcC5jYXRlZ29yeSA9PT0gY2F0KSk7XG4gICAgY29uc3QgbWF4TGVuID0gTWF0aC5tYXgoMCwgLi4uZ3JvdXBzLm1hcCgoZykgPT4gZy5sZW5ndGgpKTtcbiAgICBjb25zdCBpdGVtczogUGhvdG9bXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4TGVuOyBpKyspIHtcbiAgICAgIGZvciAoY29uc3QgZ3JvdXAgb2YgZ3JvdXBzKSBpZiAoZ3JvdXBbaV0pIGl0ZW1zLnB1c2goZ3JvdXBbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gaXRlbXM7XG4gIH0sIFtoYXNBZG1pblBob3RvcywgZGlzcGxheUZpbHRlcnMsIGRpc3BsYXlQaG90b3NdKTtcblxuICBjb25zdCBmaWx0ZXJlZCA9IGFjdGl2ZUZpbHRlciA9PT0gXCJhbGxcIiA/IG1peGVkIDogZGlzcGxheVBob3Rvcy5maWx0ZXIoKHApID0+IHAuY2F0ZWdvcnkgPT09IGFjdGl2ZUZpbHRlcik7XG5cbiAgY29uc3QgY2xvc2UgPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRMaWdodGJveEluZGV4KG51bGwpLCBbXSk7XG4gIGNvbnN0IG5leHQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0TGlnaHRib3hJbmRleCgoaSkgPT4gKGkgPT09IG51bGwgPyBudWxsIDogKGkgKyAxKSAlIGZpbHRlcmVkLmxlbmd0aCkpO1xuICB9LCBbZmlsdGVyZWQubGVuZ3RoXSk7XG4gIGNvbnN0IHByZXYgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0TGlnaHRib3hJbmRleCgoaSkgPT4gKGkgPT09IG51bGwgPyBudWxsIDogKGkgLSAxICsgZmlsdGVyZWQubGVuZ3RoKSAlIGZpbHRlcmVkLmxlbmd0aCkpO1xuICB9LCBbZmlsdGVyZWQubGVuZ3RoXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobGlnaHRib3hJbmRleCA9PT0gbnVsbCkgcmV0dXJuO1xuICAgIGNvbnN0IG9uS2V5ID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikgY2xvc2UoKTtcbiAgICAgIGlmIChlLmtleSA9PT0gXCJBcnJvd1JpZ2h0XCIpIG5leHQoKTtcbiAgICAgIGlmIChlLmtleSA9PT0gXCJBcnJvd0xlZnRcIikgcHJldigpO1xuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG9uS2V5KTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG9uS2V5KTtcbiAgfSwgW2xpZ2h0Ym94SW5kZXgsIGNsb3NlLCBuZXh0LCBwcmV2XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPFBhZ2VIZXJvXG4gICAgICAgIHRpdGxlPVwiUGhvdG8gR2FsbGVyeVwiXG4gICAgICAgIGJyZWFkY3J1bWJzPXtbeyBsYWJlbDogXCJHYWxsZXJ5XCIgfSwgeyBsYWJlbDogXCJQaG90b3NcIiB9XX1cbiAgICAgIC8+XG5cbiAgICAgIHsvKiBGaWx0ZXJzICovfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMTAgYmctd2hpdGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAge2Rpc3BsYXlGaWx0ZXJzLm1hcCgoZikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IGFjdGl2ZUZpbHRlciA9PT0gZi5pZDtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBrZXk9e2YuaWR9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVGaWx0ZXIoZi5pZCl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweC02IHB5LTIgcm91bmRlZC1mdWxsIGJvcmRlciB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCAke1xuICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgID8gXCJiZy1pbmRpYW4tZ3JlZW4gdGV4dC13aGl0ZSBib3JkZXItaW5kaWFuLWdyZWVuIGhvdmVyOmJnLWluZGlhbi1ncmVlbiBob3Zlcjp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiYmctd2hpdGUgdGV4dC1pbmRpYW4tZ3JlZW4gYm9yZGVyLWluZGlhbi1ncmVlbiBob3ZlcjpiZy1pbmRpYW4tZ3JlZW4gaG92ZXI6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Zi5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgey8qIEdyaWQgKi99XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwYi0yMCBiZy13aGl0ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTQgZ2FwLTZcIj5cbiAgICAgICAgICAgIHtmaWx0ZXJlZC5tYXAoKHBob3RvLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAga2V5PXtgJHtwaG90by5zcmN9LSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRMaWdodGJveEluZGV4KGluZGV4KX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCBjdXJzb3ItcG9pbnRlciBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC0yeGwgYmctd2hpdGUgdGV4dC1sZWZ0IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYm94U2hhZG93OiBcIjAgOHB4IDI1cHggcmdiYSgwLDAsMCwwLjA4KVwiIH19XG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoZSkgPT4gKGUuY3VycmVudFRhcmdldC5zdHlsZS5ib3hTaGFkb3cgPSBcIjAgMTVweCA0MHB4IHJnYmEoMCwwLDAsMC4xNSlcIil9XG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoZSkgPT4gKGUuY3VycmVudFRhcmdldC5zdHlsZS5ib3hTaGFkb3cgPSBcIjAgOHB4IDI1cHggcmdiYSgwLDAsMCwwLjA4KVwiKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIGgtWzI0MHB4XVwiPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e3Bob3RvLnNyY31cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtwaG90by50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tNTAwIGdyb3VwLWhvdmVyOnNjYWxlLTExMFwiXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvcj17KGUpID0+IHsgKGUuY3VycmVudFRhcmdldCBhcyBIVE1MSW1hZ2VFbGVtZW50KS5zcmMgPSBcIi9wbGFjZWhvbGRlci5zdmdcIjsgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7LyogTGlnaHRib3ggKi99XG4gICAgICB7bGlnaHRib3hJbmRleCAhPT0gbnVsbCAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHotWzEwMF0gYmctYmxhY2svOTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC00IGFuaW1hdGUtZmFkZS1pblwiXG4gICAgICAgICAgb25DbGljaz17Y2xvc2V9XG4gICAgICAgID5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4geyBlLnN0b3BQcm9wYWdhdGlvbigpOyBjbG9zZSgpOyB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTQgcmlnaHQtNCB6LVsxMTBdIGJnLWluZGlhbi1ncmVlbiB0ZXh0LXdoaXRlIHJvdW5kZWQtZnVsbCBwLTMgaG92ZXI6b3BhY2l0eS05MCB0cmFuc2l0aW9uXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFggY2xhc3NOYW1lPVwiaC02IHctNlwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4geyBlLnN0b3BQcm9wYWdhdGlvbigpOyBwcmV2KCk7IH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCBsZWZ0LTIgc206bGVmdC02IHRvcC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB6LVsxMTBdIGJnLWluZGlhbi1ncmVlbiB0ZXh0LXdoaXRlIHJvdW5kZWQtZnVsbCBwLTMgaG92ZXI6b3BhY2l0eS05MCB0cmFuc2l0aW9uXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJQcmV2aW91c1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENoZXZyb25MZWZ0IGNsYXNzTmFtZT1cImgtNiB3LTZcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHsgZS5zdG9wUHJvcGFnYXRpb24oKTsgbmV4dCgpOyB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgcmlnaHQtMiBzbTpyaWdodC02IHRvcC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB6LVsxMTBdIGJnLWluZGlhbi1ncmVlbiB0ZXh0LXdoaXRlIHJvdW5kZWQtZnVsbCBwLTMgaG92ZXI6b3BhY2l0eS05MCB0cmFuc2l0aW9uXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJOZXh0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2hldnJvblJpZ2h0IGNsYXNzTmFtZT1cImgtNiB3LTZcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy01eGwgdy1mdWxsIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCIgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e2ZpbHRlcmVkW2xpZ2h0Ym94SW5kZXhdLnNyY31cbiAgICAgICAgICAgICAgYWx0PXtmaWx0ZXJlZFtsaWdodGJveEluZGV4XS50aXRsZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF4LXctZnVsbCBtYXgtaC1bODB2aF0gb2JqZWN0LWNvbnRhaW4gcm91bmRlZC1sZ1wiXG4gICAgICAgICAgICAgIG9uRXJyb3I9eyhlKSA9PiB7IChlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEltYWdlRWxlbWVudCkuc3JjID0gXCIvcGxhY2Vob2xkZXIuc3ZnXCI7IH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQaG90b0dhbGxlcnk7XG4iXSwiZmlsZSI6Ii9ob21lL3NqcnNoOTE2L3B1YmxpY19odG1sL3NyYy9wYWdlcy9nYWxsZXJ5L1Bob3RvR2FsbGVyeS50c3gifQ==