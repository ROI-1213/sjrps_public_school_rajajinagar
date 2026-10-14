import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/AnimatedBanner.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import { Button } from "/src/components/ui/button.tsx";
import { ChevronRight, GraduationCap, BookOpen, Users, Trophy, Sparkles } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
import __vite__cjsImport4_react from "/node_modules/.vite/deps/react.js?v=5efa796b"; const useState = __vite__cjsImport4_react["useState"]; const useEffect = __vite__cjsImport4_react["useEffect"];
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=5efa796b";
import indianSchoolCampus from "/src/assets/b1.jpg?import";
import indianStudentsClassroom from "/src/assets/b2.jpg?import";
import indianSchoolLibraryStudents from "/src/assets/b3.jpg?import";
import indianStudentsScience from "/src/assets/b4.jpg?import";
const AnimatedBanner = ()=>{
    _s();
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            tag: "Welcome to SJR",
            title: "Excellence in Education",
            subtitle: "Shaping Tomorrow's Leaders Today",
            description: "Where tradition meets innovation in a vibrant, value-driven learning environment.",
            image: indianSchoolCampus
        },
        {
            tag: "A Legacy Since Decades",
            title: "A Legacy of Learning",
            subtitle: "Building Character & Confidence",
            description: "Committed to academic brilliance, strong values, and lifelong learning for every child.",
            image: indianStudentsClassroom
        },
        {
            tag: "Future-Ready Campus",
            title: "Modern Learning",
            subtitle: "State-of-the-Art Facilities",
            description: "Equipped with smart classrooms and technology for a future-ready learning journey.",
            image: indianSchoolLibraryStudents
        },
        {
            tag: "Beyond The Classroom",
            title: "Holistic Development",
            subtitle: "Beyond Academics, Building Citizens",
            description: "Sports, arts, values and life skills come together for complete, well-rounded growth.",
            image: indianStudentsScience
        }
    ];
    const stats = [
        {
            icon: GraduationCap,
            label: "Students",
            value: "1200+"
        },
        {
            icon: BookOpen,
            label: "Syllabus",
            value: "CBSE"
        },
        {
            icon: Users,
            label: "Faculty",
            value: "80+"
        },
        {
            icon: Trophy,
            label: "Alumni",
            value: "1400+"
        }
    ];
    useEffect(()=>{
        const timer = setInterval(()=>{
            setCurrentSlide((p)=>(p + 1) % slides.length);
        }, 6000);
        return ()=>clearInterval(timer);
    }, [
        slides.length
    ]);
    return /*#__PURE__*/ _jsxDEV("section", {
        "data-lov-id": "src/components/AnimatedBanner.tsx:59:4",
        "data-lov-name": "section",
        "data-component-path": "src/components/AnimatedBanner.tsx",
        "data-component-line": "59",
        "data-component-file": "AnimatedBanner.tsx",
        "data-component-name": "section",
        "data-component-content": "%7B%22className%22%3A%22relative%20w-full%20overflow-hidden%20min-h-%5B640px%5D%20sm%3Amin-h-%5B700px%5D%20lg%3Amin-h-0%20lg%3Aaspect-%5B1920%2F880%5D%20lg%3Amax-h-%5B90vh%5D%22%7D",
        className: "relative w-full overflow-hidden min-h-[640px] sm:min-h-[700px] lg:min-h-0 lg:aspect-[1920/880] lg:max-h-[90vh]",
        children: [
            /*#__PURE__*/ _jsxDEV("div", {
                "data-lov-id": "src/components/AnimatedBanner.tsx:61:6",
                "data-lov-name": "div",
                "data-component-path": "src/components/AnimatedBanner.tsx",
                "data-component-line": "61",
                "data-component-file": "AnimatedBanner.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22absolute%20inset-0%22%7D",
                className: "absolute inset-0",
                children: slides.map((slide, index)=>/*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/components/AnimatedBanner.tsx:63:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/AnimatedBanner.tsx",
                        "data-component-line": "63",
                        "data-component-file": "AnimatedBanner.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%7D",
                        className: `absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`,
                        children: [
                            /*#__PURE__*/ _jsxDEV("img", {
                                "data-lov-id": "src/components/AnimatedBanner.tsx:69:12",
                                "data-lov-name": "img",
                                "data-component-path": "src/components/AnimatedBanner.tsx",
                                "data-component-line": "69",
                                "data-component-file": "AnimatedBanner.tsx",
                                "data-component-name": "img",
                                "data-component-content": "%7B%7D",
                                src: slide.image,
                                alt: slide.title,
                                className: `w-full h-full object-cover ${index === currentSlide ? "scale-110" : "scale-100"} transition-transform duration-[7000ms] ease-out`
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/components/AnimatedBanner.tsx:77:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/components/AnimatedBanner.tsx",
                                "data-component-line": "77",
                                "data-component-file": "AnimatedBanner.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22absolute%20inset-0%20bg-gradient-to-r%20from-school-brown%2F85%20via-school-brown%2F55%20to-transparent%22%7D",
                                className: "absolute inset-0 bg-gradient-to-r from-school-brown/85 via-school-brown/55 to-transparent"
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/components/AnimatedBanner.tsx:78:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/components/AnimatedBanner.tsx",
                                "data-component-line": "78",
                                "data-component-file": "AnimatedBanner.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22absolute%20inset-0%20bg-gradient-to-t%20from-black%2F70%20via-black%2F10%20to-black%2F30%22%7D",
                                className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30"
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/components/AnimatedBanner.tsx:80:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/components/AnimatedBanner.tsx",
                                "data-component-line": "80",
                                "data-component-file": "AnimatedBanner.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22absolute%20inset-0%20opacity-%5B0.05%5D%20mix-blend-overlay%22%7D",
                                "aria-hidden": true,
                                className: "absolute inset-0 opacity-[0.05] mix-blend-overlay",
                                style: {
                                    backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
                                    backgroundSize: "26px 26px"
                                }
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                "data-lov-id": "src/components/AnimatedBanner.tsx:94:6",
                "data-lov-name": "div",
                "data-component-path": "src/components/AnimatedBanner.tsx",
                "data-component-line": "94",
                "data-component-file": "AnimatedBanner.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22pointer-events-none%20absolute%20-top-32%20-right-32%20w-%5B420px%5D%20h-%5B420px%5D%20rounded-full%20bg-saffron-orange%2F20%20blur-3xl%22%7D",
                className: "pointer-events-none absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-saffron-orange/20 blur-3xl"
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                "data-lov-id": "src/components/AnimatedBanner.tsx:95:6",
                "data-lov-name": "div",
                "data-component-path": "src/components/AnimatedBanner.tsx",
                "data-component-line": "95",
                "data-component-file": "AnimatedBanner.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22pointer-events-none%20absolute%20-bottom-32%20left-1%2F4%20w-%5B480px%5D%20h-%5B480px%5D%20rounded-full%20bg-indian-green%2F20%20blur-3xl%22%7D",
                className: "pointer-events-none absolute -bottom-32 left-1/4 w-[480px] h-[480px] rounded-full bg-indian-green/20 blur-3xl"
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                "data-lov-id": "src/components/AnimatedBanner.tsx:98:6",
                "data-lov-name": "div",
                "data-component-path": "src/components/AnimatedBanner.tsx",
                "data-component-line": "98",
                "data-component-file": "AnimatedBanner.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22relative%20z-10%20h-full%20flex%20items-center%20py-16%20lg%3Apy-0%22%7D",
                className: "relative z-10 h-full flex items-center py-16 lg:py-0",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/components/AnimatedBanner.tsx:99:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/AnimatedBanner.tsx",
                    "data-component-line": "99",
                    "data-component-file": "AnimatedBanner.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/components/AnimatedBanner.tsx:100:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/components/AnimatedBanner.tsx",
                        "data-component-line": "100",
                        "data-component-file": "AnimatedBanner.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22grid%20lg%3Agrid-cols-12%20gap-10%20lg%3Agap-8%20items-center%22%7D",
                        className: "grid lg:grid-cols-12 gap-10 lg:gap-8 items-center",
                        children: [
                            /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/components/AnimatedBanner.tsx:102:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/components/AnimatedBanner.tsx",
                                "data-component-line": "102",
                                "data-component-file": "AnimatedBanner.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22lg%3Acol-span-7%20text-white%22%7D",
                                className: "lg:col-span-7 text-white",
                                children: /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/components/AnimatedBanner.tsx:103:14",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/AnimatedBanner.tsx",
                                    "data-component-line": "103",
                                    "data-component-file": "AnimatedBanner.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22animate-fade-in%20space-y-6%22%7D",
                                    className: "animate-fade-in space-y-6",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/components/AnimatedBanner.tsx:107:16",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/components/AnimatedBanner.tsx",
                                            "data-component-line": "107",
                                            "data-component-file": "AnimatedBanner.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22inline-flex%20items-center%20gap-2%20bg-white%2F10%20backdrop-blur-md%20px-4%20py-2%20rounded-full%20border%20border-white%2F25%20shadow-lg%22%7D",
                                            className: "inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/25 shadow-lg",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV(Sparkles, {
                                                    className: "h-3.5 w-3.5 text-saffron-orange"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("span", {
                                                    "data-lov-id": "src/components/AnimatedBanner.tsx:109:18",
                                                    "data-lov-name": "span",
                                                    "data-component-path": "src/components/AnimatedBanner.tsx",
                                                    "data-component-line": "109",
                                                    "data-component-file": "AnimatedBanner.tsx",
                                                    "data-component-name": "span",
                                                    "data-component-content": "%7B%22className%22%3A%22font-sans%20font-semibold%20text-%5B11px%5D%20sm%3Atext-xs%20tracking-%5B0.2em%5D%20uppercase%22%7D",
                                                    className: "font-sans font-semibold text-[11px] sm:text-xs tracking-[0.2em] uppercase",
                                                    children: slides[currentSlide].tag
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/components/AnimatedBanner.tsx:114:16",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/components/AnimatedBanner.tsx",
                                            "data-component-line": "114",
                                            "data-component-file": "AnimatedBanner.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22space-y-3%22%7D",
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("p", {
                                                    "data-lov-id": "src/components/AnimatedBanner.tsx:115:18",
                                                    "data-lov-name": "p",
                                                    "data-component-path": "src/components/AnimatedBanner.tsx",
                                                    "data-component-line": "115",
                                                    "data-component-file": "AnimatedBanner.tsx",
                                                    "data-component-name": "p",
                                                    "data-component-content": "%7B%22text%22%3A%22SJR%20Public%20School%20%E2%80%A2%20HBR%20Layout%22%2C%22className%22%3A%22font-sans%20text-saffron-orange%20font-semibold%20text-sm%20sm%3Atext-base%20tracking-widest%20uppercase%22%7D",
                                                    className: "font-sans text-saffron-orange font-semibold text-sm sm:text-base tracking-widest uppercase",
                                                    children: "SJR Public School • HBR Layout"
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("h1", {
                                                    "data-lov-id": "src/components/AnimatedBanner.tsx:118:18",
                                                    "data-lov-name": "h1",
                                                    "data-component-path": "src/components/AnimatedBanner.tsx",
                                                    "data-component-line": "118",
                                                    "data-component-file": "AnimatedBanner.tsx",
                                                    "data-component-name": "h1",
                                                    "data-component-content": "%7B%22className%22%3A%22font-serif%20text-4xl%20sm%3Atext-5xl%20lg%3Atext-6xl%20xl%3Atext-7xl%20font-bold%20leading-%5B1.05%5D%20tracking-tight%20drop-shadow-2xl%22%7D",
                                                    className: "font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight drop-shadow-2xl",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("span", {
                                                            "data-lov-id": "src/components/AnimatedBanner.tsx:119:20",
                                                            "data-lov-name": "span",
                                                            "data-component-path": "src/components/AnimatedBanner.tsx",
                                                            "data-component-line": "119",
                                                            "data-component-file": "AnimatedBanner.tsx",
                                                            "data-component-name": "span",
                                                            "data-component-content": "%7B%22className%22%3A%22block%22%7D",
                                                            className: "block",
                                                            children: slides[currentSlide].title
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                                                            lineNumber: 119,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("span", {
                                                            "data-lov-id": "src/components/AnimatedBanner.tsx:120:20",
                                                            "data-lov-name": "span",
                                                            "data-component-path": "src/components/AnimatedBanner.tsx",
                                                            "data-component-line": "120",
                                                            "data-component-file": "AnimatedBanner.tsx",
                                                            "data-component-name": "span",
                                                            "data-component-content": "%7B%22className%22%3A%22block%20mt-2%20bg-gradient-to-r%20from-saffron-orange%20via-golden-yellow%20to-saffron-orange%20bg-clip-text%20text-transparent%22%7D",
                                                            className: "block mt-2 bg-gradient-to-r from-saffron-orange via-golden-yellow to-saffron-orange bg-clip-text text-transparent",
                                                            children: slides[currentSlide].subtitle
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                                                            lineNumber: 120,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("p", {
                                            "data-lov-id": "src/components/AnimatedBanner.tsx:126:16",
                                            "data-lov-name": "p",
                                            "data-component-path": "src/components/AnimatedBanner.tsx",
                                            "data-component-line": "126",
                                            "data-component-file": "AnimatedBanner.tsx",
                                            "data-component-name": "p",
                                            "data-component-content": "%7B%22className%22%3A%22font-sans%20text-base%20sm%3Atext-lg%20lg%3Atext-xl%20text-white%2F90%20leading-relaxed%20max-w-2xl%22%7D",
                                            className: "font-sans text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl",
                                            children: slides[currentSlide].description
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                                            lineNumber: 126,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/components/AnimatedBanner.tsx:130:16",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/components/AnimatedBanner.tsx",
                                            "data-component-line": "130",
                                            "data-component-file": "AnimatedBanner.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22flex%20flex-col%20sm%3Aflex-row%20gap-4%20pt-2%22%7D",
                                            className: "flex flex-col sm:flex-row gap-4 pt-2",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV(Button, {
                                                    "data-lov-id": "src/components/AnimatedBanner.tsx:131:18",
                                                    "data-lov-name": "Button",
                                                    "data-component-path": "src/components/AnimatedBanner.tsx",
                                                    "data-component-line": "131",
                                                    "data-component-file": "AnimatedBanner.tsx",
                                                    "data-component-name": "Button",
                                                    "data-component-content": "%7B%22className%22%3A%22group%20bg-gradient-to-r%20from-indian-green%20to-indian-green%2F85%20hover%3Afrom-indian-green%2F90%20hover%3Ato-indian-green%20text-white%20px-8%20h-13%20py-3%20min-w-%5B170px%5D%20text-base%20font-semibold%20shadow-2xl%20shadow-indian-green%2F40%20hover%3Ashadow-indian-green%2F60%20transition-all%20hover%3A-translate-y-0.5%22%7D",
                                                    asChild: true,
                                                    className: "group bg-gradient-to-r from-indian-green to-indian-green/85 hover:from-indian-green/90 hover:to-indian-green text-white px-8 h-13 py-3 min-w-[170px] text-base font-semibold shadow-2xl shadow-indian-green/40 hover:shadow-indian-green/60 transition-all hover:-translate-y-0.5",
                                                    children: /*#__PURE__*/ _jsxDEV(Link, {
                                                        "data-lov-id": "src/components/AnimatedBanner.tsx:135:20",
                                                        "data-lov-name": "Link",
                                                        "data-component-path": "src/components/AnimatedBanner.tsx",
                                                        "data-component-line": "135",
                                                        "data-component-file": "AnimatedBanner.tsx",
                                                        "data-component-name": "Link",
                                                        "data-component-content": "%7B%22text%22%3A%22Discover%20Our%20School%22%7D",
                                                        to: "/about/overview",
                                                        children: [
                                                            "Discover Our School",
                                                            /*#__PURE__*/ _jsxDEV(ChevronRight, {
                                                                "data-lov-id": "src/components/AnimatedBanner.tsx:137:22",
                                                                "data-lov-name": "ChevronRight",
                                                                "data-component-path": "src/components/AnimatedBanner.tsx",
                                                                "data-component-line": "137",
                                                                "data-component-file": "AnimatedBanner.tsx",
                                                                "data-component-name": "ChevronRight",
                                                                "data-component-content": "%7B%22className%22%3A%22ml-1%20h-5%20w-5%20transition-transform%20group-hover%3Atranslate-x-1%22%7D",
                                                                className: "ml-1 h-5 w-5 transition-transform group-hover:translate-x-1"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                                                                lineNumber: 137,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV(Button, {
                                                    "data-lov-id": "src/components/AnimatedBanner.tsx:140:18",
                                                    "data-lov-name": "Button",
                                                    "data-component-path": "src/components/AnimatedBanner.tsx",
                                                    "data-component-line": "140",
                                                    "data-component-file": "AnimatedBanner.tsx",
                                                    "data-component-name": "Button",
                                                    "data-component-content": "%7B%22className%22%3A%22group%20border-2%20border-white%2F40%20bg-white%2F10%20text-white%20hover%3Abg-white%20hover%3Atext-school-brown%20px-8%20h-13%20py-3%20min-w-%5B170px%5D%20text-base%20font-semibold%20backdrop-blur-md%20transition-all%20hover%3A-translate-y-0.5%22%7D",
                                                    asChild: true,
                                                    variant: "outline",
                                                    className: "group border-2 border-white/40 bg-white/10 text-white hover:bg-white hover:text-school-brown px-8 h-13 py-3 min-w-[170px] text-base font-semibold backdrop-blur-md transition-all hover:-translate-y-0.5",
                                                    children: /*#__PURE__*/ _jsxDEV(Link, {
                                                        "data-lov-id": "src/components/AnimatedBanner.tsx:145:20",
                                                        "data-lov-name": "Link",
                                                        "data-component-path": "src/components/AnimatedBanner.tsx",
                                                        "data-component-line": "145",
                                                        "data-component-file": "AnimatedBanner.tsx",
                                                        "data-component-name": "Link",
                                                        "data-component-content": "%7B%22text%22%3A%22Apply%20Now%22%7D",
                                                        to: "/admissions/application-process",
                                                        children: [
                                                            "Apply Now",
                                                            /*#__PURE__*/ _jsxDEV(ChevronRight, {
                                                                "data-lov-id": "src/components/AnimatedBanner.tsx:147:22",
                                                                "data-lov-name": "ChevronRight",
                                                                "data-component-path": "src/components/AnimatedBanner.tsx",
                                                                "data-component-line": "147",
                                                                "data-component-file": "AnimatedBanner.tsx",
                                                                "data-component-name": "ChevronRight",
                                                                "data-component-content": "%7B%22className%22%3A%22ml-1%20h-5%20w-5%20transition-transform%20group-hover%3Atranslate-x-1%22%7D",
                                                                className: "ml-1 h-5 w-5 transition-transform group-hover:translate-x-1"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                                                                lineNumber: 147,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, currentSlide, true, {
                                    fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/components/AnimatedBanner.tsx:155:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/components/AnimatedBanner.tsx",
                                "data-component-line": "155",
                                "data-component-file": "AnimatedBanner.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22lg%3Acol-span-5%22%7D",
                                className: "lg:col-span-5",
                                children: /*#__PURE__*/ _jsxDEV("div", {
                                    "data-lov-id": "src/components/AnimatedBanner.tsx:156:14",
                                    "data-lov-name": "div",
                                    "data-component-path": "src/components/AnimatedBanner.tsx",
                                    "data-component-line": "156",
                                    "data-component-file": "AnimatedBanner.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%22className%22%3A%22relative%22%7D",
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/components/AnimatedBanner.tsx:157:16",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/components/AnimatedBanner.tsx",
                                            "data-component-line": "157",
                                            "data-component-file": "AnimatedBanner.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22absolute%20-inset-1%20bg-gradient-to-br%20from-saffron-orange%2F30%20via-transparent%20to-indian-green%2F30%20rounded-3xl%20blur-xl%22%7D",
                                            className: "absolute -inset-1 bg-gradient-to-br from-saffron-orange/30 via-transparent to-indian-green/30 rounded-3xl blur-xl"
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                                            lineNumber: 157,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("div", {
                                            "data-lov-id": "src/components/AnimatedBanner.tsx:158:16",
                                            "data-lov-name": "div",
                                            "data-component-path": "src/components/AnimatedBanner.tsx",
                                            "data-component-line": "158",
                                            "data-component-file": "AnimatedBanner.tsx",
                                            "data-component-name": "div",
                                            "data-component-content": "%7B%22className%22%3A%22relative%20bg-white%2F10%20backdrop-blur-xl%20border%20border-white%2F20%20rounded-3xl%20p-6%20sm%3Ap-7%20shadow-2xl%22%7D",
                                            className: "relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-7 shadow-2xl",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/components/AnimatedBanner.tsx:159:18",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/components/AnimatedBanner.tsx",
                                                    "data-component-line": "159",
                                                    "data-component-file": "AnimatedBanner.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22flex%20items-center%20justify-between%20mb-5%22%7D",
                                                    className: "flex items-center justify-between mb-5",
                                                    children: [
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            "data-lov-id": "src/components/AnimatedBanner.tsx:160:20",
                                                            "data-lov-name": "div",
                                                            "data-component-path": "src/components/AnimatedBanner.tsx",
                                                            "data-component-line": "160",
                                                            "data-component-file": "AnimatedBanner.tsx",
                                                            "data-component-name": "div",
                                                            "data-component-content": "%7B%7D",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV("p", {
                                                                    "data-lov-id": "src/components/AnimatedBanner.tsx:161:22",
                                                                    "data-lov-name": "p",
                                                                    "data-component-path": "src/components/AnimatedBanner.tsx",
                                                                    "data-component-line": "161",
                                                                    "data-component-file": "AnimatedBanner.tsx",
                                                                    "data-component-name": "p",
                                                                    "data-component-content": "%7B%22text%22%3A%22At%20A%20Glance%22%2C%22className%22%3A%22text-white%2F60%20text-%5B11px%5D%20uppercase%20tracking-%5B0.2em%5D%20font-semibold%22%7D",
                                                                    className: "text-white/60 text-[11px] uppercase tracking-[0.2em] font-semibold",
                                                                    children: "At A Glance"
                                                                }, void 0, false, {
                                                                    fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                                                                    lineNumber: 161,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV("p", {
                                                                    "data-lov-id": "src/components/AnimatedBanner.tsx:164:22",
                                                                    "data-lov-name": "p",
                                                                    "data-component-path": "src/components/AnimatedBanner.tsx",
                                                                    "data-component-line": "164",
                                                                    "data-component-file": "AnimatedBanner.tsx",
                                                                    "data-component-name": "p",
                                                                    "data-component-content": "%7B%22text%22%3A%22Excellence%20by%20Numbers%22%2C%22className%22%3A%22text-white%20font-serif%20text-xl%20sm%3Atext-2xl%20mt-1%22%7D",
                                                                    className: "text-white font-serif text-xl sm:text-2xl mt-1",
                                                                    children: "Excellence by Numbers"
                                                                }, void 0, false, {
                                                                    fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                                                                    lineNumber: 164,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ _jsxDEV("div", {
                                                            "data-lov-id": "src/components/AnimatedBanner.tsx:168:20",
                                                            "data-lov-name": "div",
                                                            "data-component-path": "src/components/AnimatedBanner.tsx",
                                                            "data-component-line": "168",
                                                            "data-component-file": "AnimatedBanner.tsx",
                                                            "data-component-name": "div",
                                                            "data-component-content": "%7B%22className%22%3A%22h-10%20w-10%20rounded-xl%20bg-saffron-orange%2F20%20border%20border-saffron-orange%2F40%20flex%20items-center%20justify-center%22%7D",
                                                            className: "h-10 w-10 rounded-xl bg-saffron-orange/20 border border-saffron-orange/40 flex items-center justify-center",
                                                            children: /*#__PURE__*/ _jsxDEV(Sparkles, {
                                                                className: "h-5 w-5 text-saffron-orange"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                                                                lineNumber: 169,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/components/AnimatedBanner.tsx:173:18",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/components/AnimatedBanner.tsx",
                                                    "data-component-line": "173",
                                                    "data-component-file": "AnimatedBanner.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22grid%20grid-cols-2%20gap-3%20sm%3Agap-4%22%7D",
                                                    className: "grid grid-cols-2 gap-3 sm:gap-4",
                                                    children: stats.map((stat, i)=>/*#__PURE__*/ _jsxDEV("div", {
                                                            "data-lov-id": "src/components/AnimatedBanner.tsx:175:22",
                                                            "data-lov-name": "div",
                                                            "data-component-path": "src/components/AnimatedBanner.tsx",
                                                            "data-component-line": "175",
                                                            "data-component-file": "AnimatedBanner.tsx",
                                                            "data-component-name": "div",
                                                            "data-component-content": "%7B%22className%22%3A%22group%20relative%20bg-white%2F%5B0.07%5D%20hover%3Abg-white%2F%5B0.14%5D%20border%20border-white%2F15%20hover%3Aborder-white%2F30%20rounded-2xl%20p-4%20sm%3Ap-5%20transition-all%20duration-300%20hover%3A-translate-y-1%22%7D",
                                                            className: "group relative bg-white/[0.07] hover:bg-white/[0.14] border border-white/15 hover:border-white/30 rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1",
                                                            children: [
                                                                /*#__PURE__*/ _jsxDEV(stat.icon, {
                                                                    "data-lov-id": "src/components/AnimatedBanner.tsx:179:24",
                                                                    "data-lov-name": "stat.icon",
                                                                    "data-component-path": "src/components/AnimatedBanner.tsx",
                                                                    "data-component-line": "179",
                                                                    "data-component-file": "AnimatedBanner.tsx",
                                                                    "data-component-name": "stat.icon",
                                                                    "data-component-content": "%7B%22className%22%3A%22h-6%20w-6%20text-saffron-orange%20mb-2.5%20group-hover%3Ascale-110%20transition-transform%22%7D",
                                                                    className: "h-6 w-6 text-saffron-orange mb-2.5 group-hover:scale-110 transition-transform"
                                                                }, void 0, false, {
                                                                    fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                                                                    lineNumber: 179,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                    "data-lov-id": "src/components/AnimatedBanner.tsx:180:24",
                                                                    "data-lov-name": "div",
                                                                    "data-component-path": "src/components/AnimatedBanner.tsx",
                                                                    "data-component-line": "180",
                                                                    "data-component-file": "AnimatedBanner.tsx",
                                                                    "data-component-name": "div",
                                                                    "data-component-content": "%7B%22className%22%3A%22text-2xl%20sm%3Atext-3xl%20font-bold%20text-white%20leading-none%20tracking-tight%22%7D",
                                                                    className: "text-2xl sm:text-3xl font-bold text-white leading-none tracking-tight",
                                                                    children: stat.value
                                                                }, void 0, false, {
                                                                    fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                                                                    lineNumber: 180,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ _jsxDEV("div", {
                                                                    "data-lov-id": "src/components/AnimatedBanner.tsx:183:24",
                                                                    "data-lov-name": "div",
                                                                    "data-component-path": "src/components/AnimatedBanner.tsx",
                                                                    "data-component-line": "183",
                                                                    "data-component-file": "AnimatedBanner.tsx",
                                                                    "data-component-name": "div",
                                                                    "data-component-content": "%7B%22className%22%3A%22text-white%2F70%20text-%5B11px%5D%20sm%3Atext-xs%20tracking-wider%20mt-1.5%20uppercase%20font-medium%22%7D",
                                                                    className: "text-white/70 text-[11px] sm:text-xs tracking-wider mt-1.5 uppercase font-medium",
                                                                    children: stat.label
                                                                }, void 0, false, {
                                                                    fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                                                                    lineNumber: 183,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, i, true, {
                                                            fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                                                            lineNumber: 175,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                                            lineNumber: 158,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                "data-lov-id": "src/components/AnimatedBanner.tsx:197:6",
                "data-lov-name": "div",
                "data-component-path": "src/components/AnimatedBanner.tsx",
                "data-component-line": "197",
                "data-component-file": "AnimatedBanner.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%22className%22%3A%22absolute%20bottom-6%20left-1%2F2%20-translate-x-1%2F2%20flex%20items-center%20gap-2.5%20z-20%22%7D",
                className: "absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-20",
                children: slides.map((_, index)=>/*#__PURE__*/ _jsxDEV("button", {
                        "data-lov-id": "src/components/AnimatedBanner.tsx:199:10",
                        "data-lov-name": "button",
                        "data-component-path": "src/components/AnimatedBanner.tsx",
                        "data-component-line": "199",
                        "data-component-file": "AnimatedBanner.tsx",
                        "data-component-name": "button",
                        "data-component-content": "%7B%7D",
                        onClick: ()=>setCurrentSlide(index),
                        "aria-label": `Slide ${index + 1}`,
                        className: `h-1.5 rounded-full transition-all duration-500 ${index === currentSlide ? "w-10 bg-saffron-orange" : "w-4 bg-white/40 hover:bg-white/70"}`
                    }, index, false, {
                        fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                        lineNumber: 199,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
};
_s(AnimatedBanner, "/jm+XmndjAYlDCFyCnfFEXJOloU=");
_c = AnimatedBanner;
export default AnimatedBanner;
var _c;
$RefreshReg$(_c, "AnimatedBanner");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/components/AnimatedBanner.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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QUFVN0IsZUFDTiwyQkFDQSxxQ0FDSjt1QkFQRzZCOzs7Ozs7Ozs7Ozs7Ozs7O0FBYWpCO0dBM01NOUI7S0FBQUE7QUE2TU4sZUFBZUEsZUFBYyIsIm5hbWVzIjpbIkJ1dHRvbiIsIkNoZXZyb25SaWdodCIsIkdyYWR1YXRpb25DYXAiLCJCb29rT3BlbiIsIlVzZXJzIiwiVHJvcGh5IiwiU3BhcmtsZXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJpbmRpYW5TY2hvb2xDYW1wdXMiLCJpbmRpYW5TdHVkZW50c0NsYXNzcm9vbSIsImluZGlhblNjaG9vbExpYnJhcnlTdHVkZW50cyIsImluZGlhblN0dWRlbnRzU2NpZW5jZSIsIkFuaW1hdGVkQmFubmVyIiwiY3VycmVudFNsaWRlIiwic2V0Q3VycmVudFNsaWRlIiwic2xpZGVzIiwidGFnIiwidGl0bGUiLCJzdWJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJzdGF0cyIsImljb24iLCJsYWJlbCIsInZhbHVlIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsInAiLCJsZW5ndGgiLCJjbGVhckludGVydmFsIiwic2VjdGlvbiIsImRhdGEtbG92LWlkIiwiZGF0YS1sb3YtbmFtZSIsImRhdGEtY29tcG9uZW50LXBhdGgiLCJkYXRhLWNvbXBvbmVudC1saW5lIiwiZGF0YS1jb21wb25lbnQtZmlsZSIsImRhdGEtY29tcG9uZW50LW5hbWUiLCJkYXRhLWNvbXBvbmVudC1jb250ZW50IiwiY2xhc3NOYW1lIiwiZGl2IiwibWFwIiwic2xpZGUiLCJpbmRleCIsImltZyIsInNyYyIsImFsdCIsImFyaWEtaGlkZGVuIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsInNwYW4iLCJoMSIsImFzQ2hpbGQiLCJ0byIsInZhcmlhbnQiLCJzdGF0IiwiaSIsIl8iLCJidXR0b24iLCJvbkNsaWNrIiwiYXJpYS1sYWJlbCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJBbmltYXRlZEJhbm5lci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IENoZXZyb25SaWdodCwgR3JhZHVhdGlvbkNhcCwgQm9va09wZW4sIFVzZXJzLCBUcm9waHksIFNwYXJrbGVzIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgaW5kaWFuU2Nob29sQ2FtcHVzIGZyb20gXCJAL2Fzc2V0cy9iMS5qcGdcIjtcbmltcG9ydCBpbmRpYW5TdHVkZW50c0NsYXNzcm9vbSBmcm9tIFwiQC9hc3NldHMvYjIuanBnXCI7XG5pbXBvcnQgaW5kaWFuU2Nob29sTGlicmFyeVN0dWRlbnRzIGZyb20gXCJAL2Fzc2V0cy9iMy5qcGdcIjtcbmltcG9ydCBpbmRpYW5TdHVkZW50c1NjaWVuY2UgZnJvbSBcIkAvYXNzZXRzL2I0LmpwZ1wiO1xuXG5jb25zdCBBbmltYXRlZEJhbm5lciA9ICgpID0+IHtcbiAgY29uc3QgW2N1cnJlbnRTbGlkZSwgc2V0Q3VycmVudFNsaWRlXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IHNsaWRlcyA9IFtcbiAgICB7XG4gICAgICB0YWc6IFwiV2VsY29tZSB0byBTSlJcIixcbiAgICAgIHRpdGxlOiBcIkV4Y2VsbGVuY2UgaW4gRWR1Y2F0aW9uXCIsXG4gICAgICBzdWJ0aXRsZTogXCJTaGFwaW5nIFRvbW9ycm93J3MgTGVhZGVycyBUb2RheVwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiV2hlcmUgdHJhZGl0aW9uIG1lZXRzIGlubm92YXRpb24gaW4gYSB2aWJyYW50LCB2YWx1ZS1kcml2ZW4gbGVhcm5pbmcgZW52aXJvbm1lbnQuXCIsXG4gICAgICBpbWFnZTogaW5kaWFuU2Nob29sQ2FtcHVzLFxuICAgIH0sXG4gICAge1xuICAgICAgdGFnOiBcIkEgTGVnYWN5IFNpbmNlIERlY2FkZXNcIixcbiAgICAgIHRpdGxlOiBcIkEgTGVnYWN5IG9mIExlYXJuaW5nXCIsXG4gICAgICBzdWJ0aXRsZTogXCJCdWlsZGluZyBDaGFyYWN0ZXIgJiBDb25maWRlbmNlXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJDb21taXR0ZWQgdG8gYWNhZGVtaWMgYnJpbGxpYW5jZSwgc3Ryb25nIHZhbHVlcywgYW5kIGxpZmVsb25nIGxlYXJuaW5nIGZvciBldmVyeSBjaGlsZC5cIixcbiAgICAgIGltYWdlOiBpbmRpYW5TdHVkZW50c0NsYXNzcm9vbSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRhZzogXCJGdXR1cmUtUmVhZHkgQ2FtcHVzXCIsXG4gICAgICB0aXRsZTogXCJNb2Rlcm4gTGVhcm5pbmdcIixcbiAgICAgIHN1YnRpdGxlOiBcIlN0YXRlLW9mLXRoZS1BcnQgRmFjaWxpdGllc1wiLFxuICAgICAgZGVzY3JpcHRpb246IFwiRXF1aXBwZWQgd2l0aCBzbWFydCBjbGFzc3Jvb21zIGFuZCB0ZWNobm9sb2d5IGZvciBhIGZ1dHVyZS1yZWFkeSBsZWFybmluZyBqb3VybmV5LlwiLFxuICAgICAgaW1hZ2U6IGluZGlhblNjaG9vbExpYnJhcnlTdHVkZW50cyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRhZzogXCJCZXlvbmQgVGhlIENsYXNzcm9vbVwiLFxuICAgICAgdGl0bGU6IFwiSG9saXN0aWMgRGV2ZWxvcG1lbnRcIixcbiAgICAgIHN1YnRpdGxlOiBcIkJleW9uZCBBY2FkZW1pY3MsIEJ1aWxkaW5nIENpdGl6ZW5zXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJTcG9ydHMsIGFydHMsIHZhbHVlcyBhbmQgbGlmZSBza2lsbHMgY29tZSB0b2dldGhlciBmb3IgY29tcGxldGUsIHdlbGwtcm91bmRlZCBncm93dGguXCIsXG4gICAgICBpbWFnZTogaW5kaWFuU3R1ZGVudHNTY2llbmNlLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3Qgc3RhdHMgPSBbXG4gICAgeyBpY29uOiBHcmFkdWF0aW9uQ2FwLCBsYWJlbDogXCJTdHVkZW50c1wiLCB2YWx1ZTogXCIxMjAwK1wiIH0sXG4gICAgeyBpY29uOiBCb29rT3BlbiwgbGFiZWw6IFwiU3lsbGFidXNcIiwgdmFsdWU6IFwiQ0JTRVwiIH0sXG4gICAgeyBpY29uOiBVc2VycywgbGFiZWw6IFwiRmFjdWx0eVwiLCB2YWx1ZTogXCI4MCtcIiB9LFxuICAgIHsgaWNvbjogVHJvcGh5LCBsYWJlbDogXCJBbHVtbmlcIiwgdmFsdWU6IFwiMTQwMCtcIiB9LFxuICBdO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRDdXJyZW50U2xpZGUoKHApID0+IChwICsgMSkgJSBzbGlkZXMubGVuZ3RoKTtcbiAgICB9LCA2MDAwKTtcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gIH0sIFtzbGlkZXMubGVuZ3RoXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIG1pbi1oLVs2NDBweF0gc206bWluLWgtWzcwMHB4XSBsZzptaW4taC0wIGxnOmFzcGVjdC1bMTkyMC84ODBdIGxnOm1heC1oLVs5MHZoXVwiPlxuICAgICAgey8qIFNsaWRlcyB3aXRoIEtlbiBCdXJucyB6b29tICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wXCI+XG4gICAgICAgIHtzbGlkZXMubWFwKChzbGlkZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgaW5zZXQtMCB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tWzE0MDBtc10gZWFzZS1pbi1vdXQgJHtcbiAgICAgICAgICAgICAgaW5kZXggPT09IGN1cnJlbnRTbGlkZSA/IFwib3BhY2l0eS0xMDBcIiA6IFwib3BhY2l0eS0wXCJcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXtzbGlkZS5pbWFnZX1cbiAgICAgICAgICAgICAgYWx0PXtzbGlkZS50aXRsZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgJHtcbiAgICAgICAgICAgICAgICBpbmRleCA9PT0gY3VycmVudFNsaWRlID8gXCJzY2FsZS0xMTBcIiA6IFwic2NhbGUtMTAwXCJcbiAgICAgICAgICAgICAgfSB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi1bNzAwMG1zXSBlYXNlLW91dGB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgey8qIExheWVyZWQgb3ZlcmxheXMgZm9yIGRlcHRoICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1zY2hvb2wtYnJvd24vODUgdmlhLXNjaG9vbC1icm93bi81NSB0by10cmFuc3BhcmVudFwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tdCBmcm9tLWJsYWNrLzcwIHZpYS1ibGFjay8xMCB0by1ibGFjay8zMFwiIC8+XG4gICAgICAgICAgICB7LyogU3VidGxlIHBhdHRlcm4gKi99XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgb3BhY2l0eS1bMC4wNV0gbWl4LWJsZW5kLW92ZXJsYXlcIlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTpcbiAgICAgICAgICAgICAgICAgIFwicmFkaWFsLWdyYWRpZW50KHJnYmEoMjU1LDI1NSwyNTUsMC45KSAxcHgsIHRyYW5zcGFyZW50IDFweClcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCIyNnB4IDI2cHhcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBEZWNvcmF0aXZlIGJsb2JzICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIC10b3AtMzIgLXJpZ2h0LTMyIHctWzQyMHB4XSBoLVs0MjBweF0gcm91bmRlZC1mdWxsIGJnLXNhZmZyb24tb3JhbmdlLzIwIGJsdXItM3hsXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSAtYm90dG9tLTMyIGxlZnQtMS80IHctWzQ4MHB4XSBoLVs0ODBweF0gcm91bmRlZC1mdWxsIGJnLWluZGlhbi1ncmVlbi8yMCBibHVyLTN4bFwiIC8+XG5cbiAgICAgIHsvKiBDb250ZW50ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwIGgtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBweS0xNiBsZzpweS0wXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBsZzpncmlkLWNvbHMtMTIgZ2FwLTEwIGxnOmdhcC04IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgey8qIExlZnQ6IGNvcHkgaW4gZ2xhc3MgcGFuZWwgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmNvbC1zcGFuLTcgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtjdXJyZW50U2xpZGV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYW5pbWF0ZS1mYWRlLWluIHNwYWNlLXktNlwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBiZy13aGl0ZS8xMCBiYWNrZHJvcC1ibHVyLW1kIHB4LTQgcHktMiByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci13aGl0ZS8yNSBzaGFkb3ctbGdcIj5cbiAgICAgICAgICAgICAgICAgIDxTcGFya2xlcyBjbGFzc05hbWU9XCJoLTMuNSB3LTMuNSB0ZXh0LXNhZmZyb24tb3JhbmdlXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2FucyBmb250LXNlbWlib2xkIHRleHQtWzExcHhdIHNtOnRleHQteHMgdHJhY2tpbmctWzAuMmVtXSB1cHBlcmNhc2VcIj5cbiAgICAgICAgICAgICAgICAgICAge3NsaWRlc1tjdXJyZW50U2xpZGVdLnRhZ31cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNhbnMgdGV4dC1zYWZmcm9uLW9yYW5nZSBmb250LXNlbWlib2xkIHRleHQtc20gc206dGV4dC1iYXNlIHRyYWNraW5nLXdpZGVzdCB1cHBlcmNhc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgU0pSIFB1YmxpYyBTY2hvb2wg4oCiIEhCUiBMYXlvdXRcbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LXNlcmlmIHRleHQtNHhsIHNtOnRleHQtNXhsIGxnOnRleHQtNnhsIHhsOnRleHQtN3hsIGZvbnQtYm9sZCBsZWFkaW5nLVsxLjA1XSB0cmFja2luZy10aWdodCBkcm9wLXNoYWRvdy0yeGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2tcIj57c2xpZGVzW2N1cnJlbnRTbGlkZV0udGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayBtdC0yIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1zYWZmcm9uLW9yYW5nZSB2aWEtZ29sZGVuLXllbGxvdyB0by1zYWZmcm9uLW9yYW5nZSBiZy1jbGlwLXRleHQgdGV4dC10cmFuc3BhcmVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtzbGlkZXNbY3VycmVudFNsaWRlXS5zdWJ0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2FucyB0ZXh0LWJhc2Ugc206dGV4dC1sZyBsZzp0ZXh0LXhsIHRleHQtd2hpdGUvOTAgbGVhZGluZy1yZWxheGVkIG1heC13LTJ4bFwiPlxuICAgICAgICAgICAgICAgICAge3NsaWRlc1tjdXJyZW50U2xpZGVdLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBnYXAtNCBwdC0yXCI+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGFzQ2hpbGRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgYmctZ3JhZGllbnQtdG8tciBmcm9tLWluZGlhbi1ncmVlbiB0by1pbmRpYW4tZ3JlZW4vODUgaG92ZXI6ZnJvbS1pbmRpYW4tZ3JlZW4vOTAgaG92ZXI6dG8taW5kaWFuLWdyZWVuIHRleHQtd2hpdGUgcHgtOCBoLTEzIHB5LTMgbWluLXctWzE3MHB4XSB0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCBzaGFkb3ctMnhsIHNoYWRvdy1pbmRpYW4tZ3JlZW4vNDAgaG92ZXI6c2hhZG93LWluZGlhbi1ncmVlbi82MCB0cmFuc2l0aW9uLWFsbCBob3ZlcjotdHJhbnNsYXRlLXktMC41XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvYWJvdXQvb3ZlcnZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgICBEaXNjb3ZlciBPdXIgU2Nob29sXG4gICAgICAgICAgICAgICAgICAgICAgPENoZXZyb25SaWdodCBjbGFzc05hbWU9XCJtbC0xIGgtNSB3LTUgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZ3JvdXAtaG92ZXI6dHJhbnNsYXRlLXgtMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBhc0NoaWxkXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgYm9yZGVyLTIgYm9yZGVyLXdoaXRlLzQwIGJnLXdoaXRlLzEwIHRleHQtd2hpdGUgaG92ZXI6Ymctd2hpdGUgaG92ZXI6dGV4dC1zY2hvb2wtYnJvd24gcHgtOCBoLTEzIHB5LTMgbWluLXctWzE3MHB4XSB0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCBiYWNrZHJvcC1ibHVyLW1kIHRyYW5zaXRpb24tYWxsIGhvdmVyOi10cmFuc2xhdGUteS0wLjVcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9hZG1pc3Npb25zL2FwcGxpY2F0aW9uLXByb2Nlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICBBcHBseSBOb3dcbiAgICAgICAgICAgICAgICAgICAgICA8Q2hldnJvblJpZ2h0IGNsYXNzTmFtZT1cIm1sLTEgaC01IHctNSB0cmFuc2l0aW9uLXRyYW5zZm9ybSBncm91cC1ob3Zlcjp0cmFuc2xhdGUteC0xXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBSaWdodDogZ2xhc3Mgc3RhdHMgY2FyZCAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Y29sLXNwYW4tNVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtaW5zZXQtMSBiZy1ncmFkaWVudC10by1iciBmcm9tLXNhZmZyb24tb3JhbmdlLzMwIHZpYS10cmFuc3BhcmVudCB0by1pbmRpYW4tZ3JlZW4vMzAgcm91bmRlZC0zeGwgYmx1ci14bFwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy13aGl0ZS8xMCBiYWNrZHJvcC1ibHVyLXhsIGJvcmRlciBib3JkZXItd2hpdGUvMjAgcm91bmRlZC0zeGwgcC02IHNtOnAtNyBzaGFkb3ctMnhsXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZS82MCB0ZXh0LVsxMXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMmVtXSBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBBdCBBIEdsYW5jZVxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtc2VyaWYgdGV4dC14bCBzbTp0ZXh0LTJ4bCBtdC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBFeGNlbGxlbmNlIGJ5IE51bWJlcnNcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMTAgdy0xMCByb3VuZGVkLXhsIGJnLXNhZmZyb24tb3JhbmdlLzIwIGJvcmRlciBib3JkZXItc2FmZnJvbi1vcmFuZ2UvNDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8U3BhcmtsZXMgY2xhc3NOYW1lPVwiaC01IHctNSB0ZXh0LXNhZmZyb24tb3JhbmdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC0zIHNtOmdhcC00XCI+XG4gICAgICAgICAgICAgICAgICAgIHtzdGF0cy5tYXAoKHN0YXQsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCByZWxhdGl2ZSBiZy13aGl0ZS9bMC4wN10gaG92ZXI6Ymctd2hpdGUvWzAuMTRdIGJvcmRlciBib3JkZXItd2hpdGUvMTUgaG92ZXI6Ym9yZGVyLXdoaXRlLzMwIHJvdW5kZWQtMnhsIHAtNCBzbTpwLTUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGhvdmVyOi10cmFuc2xhdGUteS0xXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3RhdC5pY29uIGNsYXNzTmFtZT1cImgtNiB3LTYgdGV4dC1zYWZmcm9uLW9yYW5nZSBtYi0yLjUgZ3JvdXAtaG92ZXI6c2NhbGUtMTEwIHRyYW5zaXRpb24tdHJhbnNmb3JtXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeGwgc206dGV4dC0zeGwgZm9udC1ib2xkIHRleHQtd2hpdGUgbGVhZGluZy1ub25lIHRyYWNraW5nLXRpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0LnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUvNzAgdGV4dC1bMTFweF0gc206dGV4dC14cyB0cmFja2luZy13aWRlciBtdC0xLjUgdXBwZXJjYXNlIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0LmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBTbGlkZSBpbmRpY2F0b3JzICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tNiBsZWZ0LTEvMiAtdHJhbnNsYXRlLXgtMS8yIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yLjUgei0yMFwiPlxuICAgICAgICB7c2xpZGVzLm1hcCgoXywgaW5kZXgpID0+IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudFNsaWRlKGluZGV4KX1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e2BTbGlkZSAke2luZGV4ICsgMX1gfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgaC0xLjUgcm91bmRlZC1mdWxsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMCAke1xuICAgICAgICAgICAgICBpbmRleCA9PT0gY3VycmVudFNsaWRlXG4gICAgICAgICAgICAgICAgPyBcInctMTAgYmctc2FmZnJvbi1vcmFuZ2VcIlxuICAgICAgICAgICAgICAgIDogXCJ3LTQgYmctd2hpdGUvNDAgaG92ZXI6Ymctd2hpdGUvNzBcIlxuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbmltYXRlZEJhbm5lcjtcbiJdLCJmaWxlIjoiL2hvbWUvc2pyc2g5MTYvcHVibGljX2h0bWwvc3JjL2NvbXBvbmVudHMvQW5pbWF0ZWRCYW5uZXIudHN4In0=