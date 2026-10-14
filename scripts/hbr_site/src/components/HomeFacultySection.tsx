import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/HomeFacultySection.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/components/HomeFacultySection.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=5efa796b";
import { BookOpen, GraduationCap, Clock, ChevronRight } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
import __vite__cjsImport6_react from "/node_modules/.vite/deps/react.js?v=5efa796b"; const useEffect = __vite__cjsImport6_react["useEffect"]; const useMemo = __vite__cjsImport6_react["useMemo"]; const useState = __vite__cjsImport6_react["useState"];
import { getPublicContent } from "/src/lib/api.ts";
import { teachers as frontendTeachers } from "/src/pages/about/Teachers.tsx";
const defaultFeaturedNames = new Set([
    "Mr Prakash H S",
    "Mrs Lily Roy",
    "Mrs Mini Jomy",
    "Mrs Menaka B"
].map((name)=>name.toLowerCase()));
const adminTeacherToDisplay = (item)=>({
        name: item.title,
        designation: item.subtitle || "",
        subject: item.category || String(item.fields?.subject || ""),
        qualification: item.body || String(item.fields?.qualification || ""),
        experience: String(item.fields?.experience || ""),
        image: item.image_url || "/placeholder.svg",
        isFeatured: item.fields?.featured === true,
        source: "database",
        adminId: item.id,
        isVisible: item.is_visible,
        displayOrder: item.display_order
    });
const HomeFacultySection = ()=>{
    _s();
    const [adminTeachers, setAdminTeachers] = useState([]);
    useEffect(()=>{
        getPublicContent("teacher", 300).then((result)=>setAdminTeachers(result.items)).catch(()=>setAdminTeachers([]));
    }, []);
    const teachers = useMemo(()=>{
        const byName = new Map();
        frontendTeachers.forEach((teacher, index)=>byName.set(teacher.name.toLowerCase(), {
                ...teacher,
                isFeatured: defaultFeaturedNames.has(teacher.name.toLowerCase()),
                displayOrder: index + 1,
                source: "frontend"
            }));
        adminTeachers.forEach((item)=>{
            const teacher = adminTeacherToDisplay(item);
            byName.set(teacher.name.toLowerCase(), teacher);
        });
        const allTeachers = Array.from(byName.values()).sort((a, b)=>(a.displayOrder || 0) - (b.displayOrder || 0));
        const featuredTeachers = allTeachers.filter((teacher)=>teacher.isFeatured);
        return featuredTeachers.length ? featuredTeachers : allTeachers.filter((teacher)=>defaultFeaturedNames.has(teacher.name.toLowerCase()));
    }, [
        adminTeachers
    ]);
    return /*#__PURE__*/ _jsxDEV("section", {
        "data-lov-id": "src/components/HomeFacultySection.tsx:52:4",
        "data-lov-name": "section",
        "data-component-path": "src/components/HomeFacultySection.tsx",
        "data-component-line": "52",
        "data-component-file": "HomeFacultySection.tsx",
        "data-component-name": "section",
        "data-component-content": "%7B%22className%22%3A%22py-14%20bg-white%22%7D",
        className: "py-14 bg-white",
        children: /*#__PURE__*/ _jsxDEV("div", {
            "data-lov-id": "src/components/HomeFacultySection.tsx:53:6",
            "data-lov-name": "div",
            "data-component-path": "src/components/HomeFacultySection.tsx",
            "data-component-line": "53",
            "data-component-file": "HomeFacultySection.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/components/HomeFacultySection.tsx:54:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/HomeFacultySection.tsx",
                    "data-component-line": "54",
                    "data-component-file": "HomeFacultySection.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22text-center%20mb-10%20max-w-3xl%20mx-auto%22%7D",
                    className: "text-center mb-10 max-w-3xl mx-auto",
                    children: [
                        /*#__PURE__*/ _jsxDEV("span", {
                            "data-lov-id": "src/components/HomeFacultySection.tsx:55:10",
                            "data-lov-name": "span",
                            "data-component-path": "src/components/HomeFacultySection.tsx",
                            "data-component-line": "55",
                            "data-component-file": "HomeFacultySection.tsx",
                            "data-component-name": "span",
                            "data-component-content": "%7B%22text%22%3A%22Faculty%22%2C%22className%22%3A%22text-xs%20font-semibold%20uppercase%20tracking-%5B0.2em%5D%20text-indian-green%22%7D",
                            className: "text-xs font-semibold uppercase tracking-[0.2em] text-indian-green",
                            children: "Faculty"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/HomeFacultySection.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("h2", {
                            "data-lov-id": "src/components/HomeFacultySection.tsx:56:10",
                            "data-lov-name": "h2",
                            "data-component-path": "src/components/HomeFacultySection.tsx",
                            "data-component-line": "56",
                            "data-component-file": "HomeFacultySection.tsx",
                            "data-component-name": "h2",
                            "data-component-content": "%7B%22text%22%3A%22Meet%20Our%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20text-school-brown%20mt-2%20mb-3%20leading-tight%22%7D",
                            className: "text-3xl md:text-4xl font-bold text-school-brown mt-2 mb-3 leading-tight",
                            children: [
                                "Meet Our ",
                                /*#__PURE__*/ _jsxDEV("span", {
                                    "data-lov-id": "src/components/HomeFacultySection.tsx:57:21",
                                    "data-lov-name": "span",
                                    "data-component-path": "src/components/HomeFacultySection.tsx",
                                    "data-component-line": "57",
                                    "data-component-file": "HomeFacultySection.tsx",
                                    "data-component-name": "span",
                                    "data-component-content": "%7B%22text%22%3A%22Faculty%22%2C%22className%22%3A%22text-indian-green%22%7D",
                                    className: "text-indian-green",
                                    children: "Faculty"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/HomeFacultySection.tsx",
                                    lineNumber: 57,
                                    columnNumber: 22
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/components/HomeFacultySection.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("p", {
                            "data-lov-id": "src/components/HomeFacultySection.tsx:59:10",
                            "data-lov-name": "p",
                            "data-component-path": "src/components/HomeFacultySection.tsx",
                            "data-component-line": "59",
                            "data-component-file": "HomeFacultySection.tsx",
                            "data-component-name": "p",
                            "data-component-content": "%7B%22text%22%3A%22A%20team%20of%20educators%20committed%20to%20nurturing%20every%20child's%20potential.%22%2C%22className%22%3A%22text-base%20text-elegant-light%22%7D",
                            className: "text-base text-elegant-light",
                            children: "A team of educators committed to nurturing every child's potential."
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/HomeFacultySection.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/components/HomeFacultySection.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/components/HomeFacultySection.tsx:62:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/HomeFacultySection.tsx",
                    "data-component-line": "62",
                    "data-component-file": "HomeFacultySection.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22grid%20grid-cols-1%20sm%3Agrid-cols-2%20lg%3Agrid-cols-4%20gap-6%22%7D",
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
                    children: teachers.map((t)=>/*#__PURE__*/ _jsxDEV(Card, {
                            "data-lov-id": "src/components/HomeFacultySection.tsx:64:12",
                            "data-lov-name": "Card",
                            "data-component-path": "src/components/HomeFacultySection.tsx",
                            "data-component-line": "64",
                            "data-component-file": "HomeFacultySection.tsx",
                            "data-component-name": "Card",
                            "data-component-content": "%7B%22className%22%3A%22rounded-2xl%20border-none%20shadow-%5B0_8px_25px_rgba(0%2C0%2C0%2C0.10)%5D%20hover%3Ashadow-%5B0_15px_40px_rgba(0%2C0%2C0%2C0.18)%5D%20transition-all%20duration-300%20hover%3A-translate-y-1%20overflow-hidden%20flex%20flex-col%20h-full%22%7D",
                            className: "rounded-2xl border-none shadow-[0_8px_25px_rgba(0,0,0,0.10)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col h-full",
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/components/HomeFacultySection.tsx:68:14",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/HomeFacultySection.tsx",
                                    "data-component-line": "68",
                                    "data-component-file": "HomeFacultySection.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22aspect-%5B3%2F4%5D%20overflow-hidden%20bg-muted%22%7D",
                                    className: "aspect-[3/4] overflow-hidden bg-muted",
                                    children: /*#__PURE__*/ _jsxDEV("img", {
                                        "data-lov-id": "src/components/HomeFacultySection.tsx:69:16",
                                        "data-lov-name": "img",
                                        "data-component-path": "src/components/HomeFacultySection.tsx",
                                        "data-component-line": "69",
                                        "data-component-file": "HomeFacultySection.tsx",
                                        "data-component-name": "img",
                                        "data-component-content": "%7B%22className%22%3A%22w-full%20h-full%20object-cover%20hover%3Ascale-105%20transition-transform%20duration-500%22%7D",
                                        src: t.image,
                                        alt: t.name,
                                        className: "w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/components/HomeFacultySection.tsx",
                                        lineNumber: 69,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/HomeFacultySection.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ _jsxDEV(CardContent, {
                                    "data-lov-id": "src/components/HomeFacultySection.tsx:71:14",
                                    "data-lov-name": "CardContent",
                                    "data-component-path": "src/components/HomeFacultySection.tsx",
                                    "data-component-line": "71",
                                    "data-component-file": "HomeFacultySection.tsx",
                                    "data-component-name": "CardContent",
                                    "data-component-content": "%7B%22className%22%3A%22p-5%20flex%20flex-col%20flex-1%20text-center%22%7D",
                                    className: "p-5 flex flex-col flex-1 text-center",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("h3", {
                                            "data-lov-id": "src/components/HomeFacultySection.tsx:72:16",
                                            "data-lov-name": "h3",
                                            "data-component-path": "src/components/HomeFacultySection.tsx",
                                            "data-component-line": "72",
                                            "data-component-file": "HomeFacultySection.tsx",
                                            "data-component-name": "h3",
                                            "data-component-content": "%7B%22className%22%3A%22text-lg%20font-bold%20text-logo-navy%20leading-tight%22%7D",
                                            className: "text-lg font-bold text-logo-navy leading-tight",
                                            children: t.name
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/HomeFacultySection.tsx",
                                            lineNumber: 72,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("p", {
                                            "data-lov-id": "src/components/HomeFacultySection.tsx:73:16",
                                            "data-lov-name": "p",
                                            "data-component-path": "src/components/HomeFacultySection.tsx",
                                            "data-component-line": "73",
                                            "data-component-file": "HomeFacultySection.tsx",
                                            "data-component-name": "p",
                                            "data-component-content": "%7B%22className%22%3A%22text-sm%20font-bold%20text-indian-green%20mt-1%22%7D",
                                            className: "text-sm font-bold text-indian-green mt-1",
                                            children: t.designation
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/HomeFacultySection.tsx",
                                            lineNumber: 73,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/components/HomeFacultySection.tsx:74:16",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/components/HomeFacultySection.tsx",
                                            "data-component-line": "74",
                                            "data-component-file": "HomeFacultySection.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22mt-4%20pt-4%20border-t%20space-y-2%20text-sm%20text-foreground%2F80%20text-left%22%7D",
                                            className: "mt-4 pt-4 border-t space-y-2 text-sm text-foreground/80 text-left",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/components/HomeFacultySection.tsx:75:18",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/components/HomeFacultySection.tsx",
                                                    "data-component-line": "75",
                                                    "data-component-file": "HomeFacultySection.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV(BookOpen, {
                                                            "data-lov-id": "src/components/HomeFacultySection.tsx:76:20",
                                                            "data-lov-name": "BookOpen",
                                                            "data-component-path": "src/components/HomeFacultySection.tsx",
                                                            "data-component-line": "76",
                                                            "data-component-file": "HomeFacultySection.tsx",
                                                            "data-component-name": "BookOpen",
                                                            "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%20text-indian-green%20flex-shrink-0%22%7D",
                                                            className: "h-4 w-4 text-indian-green flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/components/HomeFacultySection.tsx",
                                                            lineNumber: 76,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("span", {
                                                            "data-lov-id": "src/components/HomeFacultySection.tsx:77:18",
                                                            "data-lov-name": "span",
                                                            "data-component-path": "src/components/HomeFacultySection.tsx",
                                                            "data-component-line": "77",
                                                            "data-component-file": "HomeFacultySection.tsx",
                                                            "data-component-name": "span",
                                                            "data-component-content": "%7B%7D",
                                                            children: t.subject
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/components/HomeFacultySection.tsx",
                                                            lineNumber: 77,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/HomeFacultySection.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/components/HomeFacultySection.tsx:79:18",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/components/HomeFacultySection.tsx",
                                                    "data-component-line": "79",
                                                    "data-component-file": "HomeFacultySection.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV(GraduationCap, {
                                                            "data-lov-id": "src/components/HomeFacultySection.tsx:80:20",
                                                            "data-lov-name": "GraduationCap",
                                                            "data-component-path": "src/components/HomeFacultySection.tsx",
                                                            "data-component-line": "80",
                                                            "data-component-file": "HomeFacultySection.tsx",
                                                            "data-component-name": "GraduationCap",
                                                            "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%20text-indian-green%20flex-shrink-0%22%7D",
                                                            className: "h-4 w-4 text-indian-green flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/components/HomeFacultySection.tsx",
                                                            lineNumber: 80,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("span", {
                                                            "data-lov-id": "src/components/HomeFacultySection.tsx:81:20",
                                                            "data-lov-name": "span",
                                                            "data-component-path": "src/components/HomeFacultySection.tsx",
                                                            "data-component-line": "81",
                                                            "data-component-file": "HomeFacultySection.tsx",
                                                            "data-component-name": "span",
                                                            "data-component-content": "%7B%7D",
                                                            children: t.qualification
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/components/HomeFacultySection.tsx",
                                                            lineNumber: 81,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/HomeFacultySection.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/components/HomeFacultySection.tsx:83:18",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/components/HomeFacultySection.tsx",
                                                    "data-component-line": "83",
                                                    "data-component-file": "HomeFacultySection.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV(Clock, {
                                                            "data-lov-id": "src/components/HomeFacultySection.tsx:84:20",
                                                            "data-lov-name": "Clock",
                                                            "data-component-path": "src/components/HomeFacultySection.tsx",
                                                            "data-component-line": "84",
                                                            "data-component-file": "HomeFacultySection.tsx",
                                                            "data-component-name": "Clock",
                                                            "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%20text-indian-green%20flex-shrink-0%22%7D",
                                                            className: "h-4 w-4 text-indian-green flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/components/HomeFacultySection.tsx",
                                                            lineNumber: 84,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("span", {
                                                            "data-lov-id": "src/components/HomeFacultySection.tsx:85:20",
                                                            "data-lov-name": "span",
                                                            "data-component-path": "src/components/HomeFacultySection.tsx",
                                                            "data-component-line": "85",
                                                            "data-component-file": "HomeFacultySection.tsx",
                                                            "data-component-name": "span",
                                                            "data-component-content": "%7B%7D",
                                                            children: t.experience
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/components/HomeFacultySection.tsx",
                                                            lineNumber: 85,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/HomeFacultySection.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/components/HomeFacultySection.tsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/components/HomeFacultySection.tsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, t.name, true, {
                            fileName: "/home/sjrsh916/public_html/src/components/HomeFacultySection.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/components/HomeFacultySection.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/components/HomeFacultySection.tsx:93:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/HomeFacultySection.tsx",
                    "data-component-line": "93",
                    "data-component-file": "HomeFacultySection.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22text-center%20mt-10%22%7D",
                    className: "text-center mt-10",
                    children: /*#__PURE__*/ _jsxDEV(Button, {
                        "data-lov-id": "src/components/HomeFacultySection.tsx:94:10",
                        "data-lov-name": "Button",
                        "data-component-path": "src/components/HomeFacultySection.tsx",
                        "data-component-line": "94",
                        "data-component-file": "HomeFacultySection.tsx",
                        "data-component-name": "Button",
                        "data-component-content": "%7B%22className%22%3A%22bg-indian-green%20hover%3Abg-indian-green%2F90%20text-white%20px-8%22%7D",
                        asChild: true,
                        className: "bg-indian-green hover:bg-indian-green/90 text-white px-8",
                        children: /*#__PURE__*/ _jsxDEV(Link, {
                            "data-lov-id": "src/components/HomeFacultySection.tsx:95:12",
                            "data-lov-name": "Link",
                            "data-component-path": "src/components/HomeFacultySection.tsx",
                            "data-component-line": "95",
                            "data-component-file": "HomeFacultySection.tsx",
                            "data-component-name": "Link",
                            "data-component-content": "%7B%22text%22%3A%22View%20All%22%7D",
                            to: "/about/teachers",
                            children: [
                                "View All",
                                /*#__PURE__*/ _jsxDEV(ChevronRight, {
                                    "data-lov-id": "src/components/HomeFacultySection.tsx:97:14",
                                    "data-lov-name": "ChevronRight",
                                    "data-component-path": "src/components/HomeFacultySection.tsx",
                                    "data-component-line": "97",
                                    "data-component-file": "HomeFacultySection.tsx",
                                    "data-component-name": "ChevronRight",
                                    "data-component-content": "%7B%22className%22%3A%22ml-1%20h-4%20w-4%22%7D",
                                    className: "ml-1 h-4 w-4"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/HomeFacultySection.tsx",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/components/HomeFacultySection.tsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/sjrsh916/public_html/src/components/HomeFacultySection.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/components/HomeFacultySection.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/sjrsh916/public_html/src/components/HomeFacultySection.tsx",
            lineNumber: 53,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/components/HomeFacultySection.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
};
_s(HomeFacultySection, "mr5imyR7iVzfVXgLUhdTszg2Ry4=");
_c = HomeFacultySection;
export default HomeFacultySection;
var _c;
$RefreshReg$(_c, "HomeFacultySection");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/components/HomeFacultySection.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/components/HomeFacultySection.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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dGlvbkNhcCIsIkNsb2NrIiwiQ2hldnJvblJpZ2h0IiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVN0YXRlIiwiZ2V0UHVibGljQ29udGVudCIsInRlYWNoZXJzIiwiZnJvbnRlbmRUZWFjaGVycyIsImRlZmF1bHRGZWF0dXJlZE5hbWVzIiwiU2V0IiwibWFwIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiYWRtaW5UZWFjaGVyVG9EaXNwbGF5IiwiaXRlbSIsInRpdGxlIiwiZGVzaWduYXRpb24iLCJzdWJ0aXRsZSIsInN1YmplY3QiLCJjYXRlZ29yeSIsIlN0cmluZyIsImZpZWxkcyIsInF1YWxpZmljYXRpb24iLCJib2R5IiwiZXhwZXJpZW5jZSIsImltYWdlIiwiaW1hZ2VfdXJsIiwiaXNGZWF0dXJlZCIsImZlYXR1cmVkIiwic291cmNlIiwiYWRtaW5JZCIsImlkIiwiaXNWaXNpYmxlIiwiaXNfdmlzaWJsZSIsImRpc3BsYXlPcmRlciIsImRpc3BsYXlfb3JkZXIiLCJIb21lRmFjdWx0eVNlY3Rpb24iLCJhZG1pblRlYWNoZXJzIiwic2V0QWRtaW5UZWFjaGVycyIsInRoZW4iLCJyZXN1bHQiLCJpdGVtcyIsImNhdGNoIiwiYnlOYW1lIiwiTWFwIiwiZm9yRWFjaCIsInRlYWNoZXIiLCJpbmRleCIsInNldCIsImhhcyIsImFsbFRlYWNoZXJzIiwiQXJyYXkiLCJmcm9tIiwidmFsdWVzIiwic29ydCIsImEiLCJiIiwiZmVhdHVyZWRUZWFjaGVycyIsImZpbHRlciIsImxlbmd0aCIsInNlY3Rpb24iLCJkYXRhLWxvdi1pZCIsImRhdGEtbG92LW5hbWUiLCJkYXRhLWNvbXBvbmVudC1wYXRoIiwiZGF0YS1jb21wb25lbnQtbGluZSIsImRhdGEtY29tcG9uZW50LWZpbGUiLCJkYXRhLWNvbXBvbmVudC1uYW1lIiwiZGF0YS1jb21wb25lbnQtY29udGVudCIsImNsYXNzTmFtZSIsImRpdiIsInNwYW4iLCJoMiIsInAiLCJ0IiwiaW1nIiwic3JjIiwiYWx0IiwiaDMiLCJhc0NoaWxkIiwidG8iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiSG9tZUZhY3VsdHlTZWN0aW9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgQm9va09wZW4sIEdyYWR1YXRpb25DYXAsIENsb2NrLCBDaGV2cm9uUmlnaHQgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnZXRQdWJsaWNDb250ZW50LCB0eXBlIEFkbWluQ29udGVudEl0ZW0gfSBmcm9tIFwiQC9saWIvYXBpXCI7XG5pbXBvcnQgeyB0ZWFjaGVycyBhcyBmcm9udGVuZFRlYWNoZXJzLCB0eXBlIFRlYWNoZXIgfSBmcm9tIFwiQC9wYWdlcy9hYm91dC9UZWFjaGVyc1wiO1xuXG5jb25zdCBkZWZhdWx0RmVhdHVyZWROYW1lcyA9IG5ldyBTZXQoW1wiTXIgUHJha2FzaCBIIFNcIiwgXCJNcnMgTGlseSBSb3lcIiwgXCJNcnMgTWluaSBKb215XCIsIFwiTXJzIE1lbmFrYSBCXCJdLm1hcCgobmFtZSkgPT4gbmFtZS50b0xvd2VyQ2FzZSgpKSk7XG5cbmNvbnN0IGFkbWluVGVhY2hlclRvRGlzcGxheSA9IChpdGVtOiBBZG1pbkNvbnRlbnRJdGVtKTogVGVhY2hlciA9PiAoe1xuICBuYW1lOiBpdGVtLnRpdGxlLFxuICBkZXNpZ25hdGlvbjogaXRlbS5zdWJ0aXRsZSB8fCBcIlwiLFxuICBzdWJqZWN0OiBpdGVtLmNhdGVnb3J5IHx8IFN0cmluZyhpdGVtLmZpZWxkcz8uc3ViamVjdCB8fCBcIlwiKSxcbiAgcXVhbGlmaWNhdGlvbjogaXRlbS5ib2R5IHx8IFN0cmluZyhpdGVtLmZpZWxkcz8ucXVhbGlmaWNhdGlvbiB8fCBcIlwiKSxcbiAgZXhwZXJpZW5jZTogU3RyaW5nKGl0ZW0uZmllbGRzPy5leHBlcmllbmNlIHx8IFwiXCIpLFxuICBpbWFnZTogaXRlbS5pbWFnZV91cmwgfHwgXCIvcGxhY2Vob2xkZXIuc3ZnXCIsXG4gIGlzRmVhdHVyZWQ6IGl0ZW0uZmllbGRzPy5mZWF0dXJlZCA9PT0gdHJ1ZSxcbiAgc291cmNlOiBcImRhdGFiYXNlXCIsXG4gIGFkbWluSWQ6IGl0ZW0uaWQsXG4gIGlzVmlzaWJsZTogaXRlbS5pc192aXNpYmxlLFxuICBkaXNwbGF5T3JkZXI6IGl0ZW0uZGlzcGxheV9vcmRlcixcbn0pO1xuXG5jb25zdCBIb21lRmFjdWx0eVNlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IFthZG1pblRlYWNoZXJzLCBzZXRBZG1pblRlYWNoZXJzXSA9IHVzZVN0YXRlPEFkbWluQ29udGVudEl0ZW1bXT4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0UHVibGljQ29udGVudChcInRlYWNoZXJcIiwgMzAwKVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4gc2V0QWRtaW5UZWFjaGVycyhyZXN1bHQuaXRlbXMpKVxuICAgICAgLmNhdGNoKCgpID0+IHNldEFkbWluVGVhY2hlcnMoW10pKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHRlYWNoZXJzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgYnlOYW1lID0gbmV3IE1hcDxzdHJpbmcsIFRlYWNoZXI+KCk7XG4gICAgZnJvbnRlbmRUZWFjaGVycy5mb3JFYWNoKCh0ZWFjaGVyLCBpbmRleCkgPT4gYnlOYW1lLnNldCh0ZWFjaGVyLm5hbWUudG9Mb3dlckNhc2UoKSwge1xuICAgICAgLi4udGVhY2hlcixcbiAgICAgIGlzRmVhdHVyZWQ6IGRlZmF1bHRGZWF0dXJlZE5hbWVzLmhhcyh0ZWFjaGVyLm5hbWUudG9Mb3dlckNhc2UoKSksXG4gICAgICBkaXNwbGF5T3JkZXI6IGluZGV4ICsgMSxcbiAgICAgIHNvdXJjZTogXCJmcm9udGVuZFwiLFxuICAgIH0pKTtcbiAgICBhZG1pblRlYWNoZXJzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IHRlYWNoZXIgPSBhZG1pblRlYWNoZXJUb0Rpc3BsYXkoaXRlbSk7XG4gICAgICBieU5hbWUuc2V0KHRlYWNoZXIubmFtZS50b0xvd2VyQ2FzZSgpLCB0ZWFjaGVyKTtcbiAgICB9KTtcbiAgICBjb25zdCBhbGxUZWFjaGVycyA9IEFycmF5LmZyb20oYnlOYW1lLnZhbHVlcygpKS5zb3J0KChhLCBiKSA9PiAoYS5kaXNwbGF5T3JkZXIgfHwgMCkgLSAoYi5kaXNwbGF5T3JkZXIgfHwgMCkpO1xuICAgIGNvbnN0IGZlYXR1cmVkVGVhY2hlcnMgPSBhbGxUZWFjaGVycy5maWx0ZXIoKHRlYWNoZXIpID0+IHRlYWNoZXIuaXNGZWF0dXJlZCk7XG4gICAgcmV0dXJuIGZlYXR1cmVkVGVhY2hlcnMubGVuZ3RoID8gZmVhdHVyZWRUZWFjaGVycyA6IGFsbFRlYWNoZXJzLmZpbHRlcigodGVhY2hlcikgPT4gZGVmYXVsdEZlYXR1cmVkTmFtZXMuaGFzKHRlYWNoZXIubmFtZS50b0xvd2VyQ2FzZSgpKSk7XG4gIH0sIFthZG1pblRlYWNoZXJzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xNCBiZy13aGl0ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItMTAgbWF4LXctM3hsIG14LWF1dG9cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLVswLjJlbV0gdGV4dC1pbmRpYW4tZ3JlZW5cIj5GYWN1bHR5PC9zcGFuPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gbXQtMiBtYi0zIGxlYWRpbmctdGlnaHRcIj5cbiAgICAgICAgICAgIE1lZXQgT3VyIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtaW5kaWFuLWdyZWVuXCI+RmFjdWx0eTwvc3Bhbj5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSB0ZXh0LWVsZWdhbnQtbGlnaHRcIj5BIHRlYW0gb2YgZWR1Y2F0b3JzIGNvbW1pdHRlZCB0byBudXJ0dXJpbmcgZXZlcnkgY2hpbGQncyBwb3RlbnRpYWwuPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTQgZ2FwLTZcIj5cbiAgICAgICAgICB7dGVhY2hlcnMubWFwKCh0KSA9PiAoXG4gICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICBrZXk9e3QubmFtZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC0yeGwgYm9yZGVyLW5vbmUgc2hhZG93LVswXzhweF8yNXB4X3JnYmEoMCwwLDAsMC4xMCldIGhvdmVyOnNoYWRvdy1bMF8xNXB4XzQwcHhfcmdiYSgwLDAsMCwwLjE4KV0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGhvdmVyOi10cmFuc2xhdGUteS0xIG92ZXJmbG93LWhpZGRlbiBmbGV4IGZsZXgtY29sIGgtZnVsbFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNwZWN0LVszLzRdIG92ZXJmbG93LWhpZGRlbiBiZy1tdXRlZFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0LmltYWdlfSBhbHQ9e3QubmFtZX0gY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgaG92ZXI6c2NhbGUtMTA1IHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTUwMFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC01IGZsZXggZmxleC1jb2wgZmxleC0xIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIHRleHQtbG9nby1uYXZ5IGxlYWRpbmctdGlnaHRcIj57dC5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC1pbmRpYW4tZ3JlZW4gbXQtMVwiPnt0LmRlc2lnbmF0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgcHQtNCBib3JkZXItdCBzcGFjZS15LTIgdGV4dC1zbSB0ZXh0LWZvcmVncm91bmQvODAgdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCb29rT3BlbiBjbGFzc05hbWU9XCJoLTQgdy00IHRleHQtaW5kaWFuLWdyZWVuIGZsZXgtc2hyaW5rLTBcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e3Quc3ViamVjdH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPEdyYWR1YXRpb25DYXAgY2xhc3NOYW1lPVwiaC00IHctNCB0ZXh0LWluZGlhbi1ncmVlbiBmbGV4LXNocmluay0wXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3QucXVhbGlmaWNhdGlvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPENsb2NrIGNsYXNzTmFtZT1cImgtNCB3LTQgdGV4dC1pbmRpYW4tZ3JlZW4gZmxleC1zaHJpbmstMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0LmV4cGVyaWVuY2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtMTBcIj5cbiAgICAgICAgICA8QnV0dG9uIGFzQ2hpbGQgY2xhc3NOYW1lPVwiYmctaW5kaWFuLWdyZWVuIGhvdmVyOmJnLWluZGlhbi1ncmVlbi85MCB0ZXh0LXdoaXRlIHB4LThcIj5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2Fib3V0L3RlYWNoZXJzXCI+XG4gICAgICAgICAgICAgIFZpZXcgQWxsXG4gICAgICAgICAgICAgIDxDaGV2cm9uUmlnaHQgY2xhc3NOYW1lPVwibWwtMSBoLTQgdy00XCIgLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lRmFjdWx0eVNlY3Rpb247XG4iXSwiZmlsZSI6Ii9ob21lL3NqcnNoOTE2L3B1YmxpY19odG1sL3NyYy9jb21wb25lbnRzL0hvbWVGYWN1bHR5U2VjdGlvbi50c3gifQ==