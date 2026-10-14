import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Contact.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/pages/Contact.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import Layout from "/src/components/Layout.tsx";
import PageHero from "/src/components/PageHero.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { Input } from "/src/components/ui/input.tsx";
import { Textarea } from "/src/components/ui/textarea.tsx";
import { Label } from "/src/components/ui/label.tsx";
import { MapPin, Mail, Phone } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
import { SCHOOL_EMAILS, SCHOOL_LANDLINES } from "/src/lib/siteInfo.ts";
import { submitEnquiry } from "/src/lib/api.ts";
import { useToast } from "/src/hooks/use-toast.ts";
import __vite__cjsImport12_react from "/node_modules/.vite/deps/react.js?v=5efa796b"; const useState = __vite__cjsImport12_react["useState"];
const Contact = ()=>{
    _s();
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const fields = {
            name: String(formData.get("name") || ""),
            email: String(formData.get("email") || ""),
            mobile: String(formData.get("mobile") || ""),
            subject: String(formData.get("subject") || ""),
            message: String(formData.get("message") || "")
        };
        setIsSubmitting(true);
        try {
            await submitEnquiry("contact", fields);
            form.reset();
            toast({
                title: "Message sent",
                description: "Thank you. The school office will review your enquiry."
            });
        } catch (error) {
            toast({
                title: "Unable to send message",
                description: error instanceof Error ? error.message : "Please try again later.",
                variant: "destructive"
            });
        } finally{
            setIsSubmitting(false);
        }
    };
    const infoItems = [
        {
            icon: MapPin,
            title: "Address",
            lines: [
                "No. 3, 5th Cross, 7th Main Road,",
                "1st Stage, 3rd Block,",
                "Kalyan Nagar,",
                "Bengaluru, Karnataka – 560043"
            ]
        },
        {
            icon: Mail,
            title: "Email",
            lines: SCHOOL_EMAILS.map((email)=>({
                    text: email,
                    href: `mailto:${email}`
                }))
        },
        {
            icon: Phone,
            title: "Landline",
            lines: SCHOOL_LANDLINES.map((l)=>({
                    text: l.text,
                    href: `tel:${l.tel}`
                }))
        }
    ];
    return /*#__PURE__*/ _jsxDEV(Layout, {
        "data-lov-id": "src/pages/Contact.tsx:72:4",
        "data-lov-name": "Layout",
        "data-component-path": "src/pages/Contact.tsx",
        "data-component-line": "72",
        "data-component-file": "Contact.tsx",
        "data-component-name": "Layout",
        "data-component-content": "%7B%7D",
        children: [
            /*#__PURE__*/ _jsxDEV(PageHero, {
                "data-lov-id": "src/pages/Contact.tsx:73:6",
                "data-lov-name": "PageHero",
                "data-component-path": "src/pages/Contact.tsx",
                "data-component-line": "73",
                "data-component-file": "Contact.tsx",
                "data-component-name": "PageHero",
                "data-component-content": "%7B%7D",
                title: "Contact Us",
                breadcrumbs: [
                    {
                        label: "Contact Us"
                    }
                ]
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/Contact.tsx:79:6",
                "data-lov-name": "section",
                "data-component-path": "src/pages/Contact.tsx",
                "data-component-line": "79",
                "data-component-file": "Contact.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22py-12%20sm%3Apy-16%20bg-background%22%7D",
                className: "py-12 sm:py-16 bg-background",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/Contact.tsx:80:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/Contact.tsx",
                    "data-component-line": "80",
                    "data-component-file": "Contact.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        "data-lov-id": "src/pages/Contact.tsx:81:10",
                        "data-lov-name": "div",
                        "data-component-path": "src/pages/Contact.tsx",
                        "data-component-line": "81",
                        "data-component-file": "Contact.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%22className%22%3A%22grid%20lg%3Agrid-cols-5%20gap-6%20lg%3Agap-8%20items-stretch%22%7D",
                        className: "grid lg:grid-cols-5 gap-6 lg:gap-8 items-stretch",
                        children: [
                            /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/pages/Contact.tsx:83:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/pages/Contact.tsx",
                                "data-component-line": "83",
                                "data-component-file": "Contact.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22lg%3Acol-span-2%20bg-white%20rounded-2xl%20shadow-%5B0_10px_30px_rgba(0%2C0%2C0%2C0.08)%5D%20p-6%20sm%3Ap-8%20flex%20flex-col%22%7D",
                                className: "lg:col-span-2 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-6 sm:p-8 flex flex-col",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("h2", {
                                        "data-lov-id": "src/pages/Contact.tsx:84:14",
                                        "data-lov-name": "h2",
                                        "data-component-path": "src/pages/Contact.tsx",
                                        "data-component-line": "84",
                                        "data-component-file": "Contact.tsx",
                                        "data-component-name": "h2",
                                        "data-component-content": "%7B%22text%22%3A%22Get%20In%20Touch%22%2C%22className%22%3A%22text-2xl%20sm%3Atext-3xl%20font-bold%20text-black%20mb-3%22%7D",
                                        className: "text-2xl sm:text-3xl font-bold text-black mb-3",
                                        children: "Get In Touch"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        "data-lov-id": "src/pages/Contact.tsx:87:14",
                                        "data-lov-name": "p",
                                        "data-component-path": "src/pages/Contact.tsx",
                                        "data-component-line": "87",
                                        "data-component-file": "Contact.tsx",
                                        "data-component-name": "p",
                                        "data-component-content": "%7B%22text%22%3A%22We%20welcome%20your%20enquiries%20and%20look%20forward%20to%20assisting%20you.%20Feel%20free%20to%20contact%20us%20for%20admissions%2C%20academics%2C%20facilities%2C%20or%20any%20other%20information%20regarding%20SJRPS-HBR.%22%2C%22className%22%3A%22text-%5B%23333%5D%20text-sm%20sm%3Atext-base%20leading-relaxed%20mb-6%22%7D",
                                        className: "text-[#333] text-sm sm:text-base leading-relaxed mb-6",
                                        children: "We welcome your enquiries and look forward to assisting you. Feel free to contact us for admissions, academics, facilities, or any other information regarding SJRPS-HBR."
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        "data-lov-id": "src/pages/Contact.tsx:91:14",
                                        "data-lov-name": "div",
                                        "data-component-path": "src/pages/Contact.tsx",
                                        "data-component-line": "91",
                                        "data-component-file": "Contact.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%22className%22%3A%22space-y-4%20flex-1%22%7D",
                                        className: "space-y-4 flex-1",
                                        children: infoItems.map((item, i)=>/*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/Contact.tsx:93:18",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/Contact.tsx",
                                                "data-component-line": "93",
                                                "data-component-file": "Contact.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22flex%20items-start%20gap-4%20p-4%20rounded-xl%20border%20border-indian-green%2F15%20bg-indian-green%2F%5B0.03%5D%20hover%3Abg-indian-green%2F%5B0.06%5D%20transition-colors%22%7D",
                                                className: "flex items-start gap-4 p-4 rounded-xl border border-indian-green/15 bg-indian-green/[0.03] hover:bg-indian-green/[0.06] transition-colors",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/pages/Contact.tsx:97:20",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/Contact.tsx",
                                                        "data-component-line": "97",
                                                        "data-component-file": "Contact.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%22className%22%3A%22w-11%20h-11%20rounded-full%20bg-indian-green%20flex%20items-center%20justify-center%20flex-shrink-0%22%7D",
                                                        className: "w-11 h-11 rounded-full bg-indian-green flex items-center justify-center flex-shrink-0",
                                                        children: /*#__PURE__*/ _jsxDEV(item.icon, {
                                                            "data-lov-id": "src/pages/Contact.tsx:98:22",
                                                            "data-lov-name": "item.icon",
                                                            "data-component-path": "src/pages/Contact.tsx",
                                                            "data-component-line": "98",
                                                            "data-component-file": "Contact.tsx",
                                                            "data-component-name": "item.icon",
                                                            "data-component-content": "%7B%22className%22%3A%22h-5%20w-5%20text-white%22%7D",
                                                            className: "h-5 w-5 text-white"
                                                        }, void 0, false, {
                                                            fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                                                            lineNumber: 98,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/pages/Contact.tsx:100:20",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/Contact.tsx",
                                                        "data-component-line": "100",
                                                        "data-component-file": "Contact.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%22className%22%3A%22min-w-0%22%7D",
                                                        className: "min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV("h3", {
                                                                "data-lov-id": "src/pages/Contact.tsx:101:22",
                                                                "data-lov-name": "h3",
                                                                "data-component-path": "src/pages/Contact.tsx",
                                                                "data-component-line": "101",
                                                                "data-component-file": "Contact.tsx",
                                                                "data-component-name": "h3",
                                                                "data-component-content": "%7B%22className%22%3A%22font-semibold%20text-black%20mb-1%22%7D",
                                                                className: "font-semibold text-black mb-1",
                                                                children: item.title
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                                                                lineNumber: 101,
                                                                columnNumber: 23
                                                            }, this),
                                                            item.lines.map((l, idx)=>typeof l === "string" ? /*#__PURE__*/ _jsxDEV("p", {
                                                                    "data-lov-id": "src/pages/Contact.tsx:104:26",
                                                                    "data-lov-name": "p",
                                                                    "data-component-path": "src/pages/Contact.tsx",
                                                                    "data-component-line": "104",
                                                                    "data-component-file": "Contact.tsx",
                                                                    "data-component-name": "p",
                                                                    "data-component-content": "%7B%22className%22%3A%22text-%5B%23333%5D%20text-sm%20leading-relaxed%22%7D",
                                                                    className: "text-[#333] text-sm leading-relaxed",
                                                                    children: l
                                                                }, idx, false, {
                                                                    fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                                                                    lineNumber: 104,
                                                                    columnNumber: 27
                                                                }, this) : /*#__PURE__*/ _jsxDEV("a", {
                                                                    "data-lov-id": "src/pages/Contact.tsx:108:26",
                                                                    "data-lov-name": "a",
                                                                    "data-component-path": "src/pages/Contact.tsx",
                                                                    "data-component-line": "108",
                                                                    "data-component-file": "Contact.tsx",
                                                                    "data-component-name": "a",
                                                                    "data-component-content": "%7B%22className%22%3A%22block%20text-%5B%23333%5D%20text-sm%20leading-relaxed%20hover%3Atext-indian-green%20break-words%22%7D",
                                                                    href: l.href,
                                                                    className: "block text-[#333] text-sm leading-relaxed hover:text-indian-green break-words",
                                                                    children: l.text
                                                                }, idx, false, {
                                                                    fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                                                                    lineNumber: 108,
                                                                    columnNumber: 27
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                                                lineNumber: 93,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                "data-lov-id": "src/pages/Contact.tsx:124:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/pages/Contact.tsx",
                                "data-component-line": "124",
                                "data-component-file": "Contact.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22lg%3Acol-span-3%20bg-white%20rounded-2xl%20shadow-%5B0_10px_30px_rgba(0%2C0%2C0%2C0.08)%5D%20p-6%20sm%3Ap-8%22%7D",
                                className: "lg:col-span-3 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-6 sm:p-8",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("h2", {
                                        "data-lov-id": "src/pages/Contact.tsx:125:14",
                                        "data-lov-name": "h2",
                                        "data-component-path": "src/pages/Contact.tsx",
                                        "data-component-line": "125",
                                        "data-component-file": "Contact.tsx",
                                        "data-component-name": "h2",
                                        "data-component-content": "%7B%22text%22%3A%22Send%20Us%20a%20Message%22%2C%22className%22%3A%22text-2xl%20sm%3Atext-3xl%20font-bold%20text-black%20mb-6%22%7D",
                                        className: "text-2xl sm:text-3xl font-bold text-black mb-6",
                                        children: "Send Us a Message"
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("form", {
                                        "data-lov-id": "src/pages/Contact.tsx:128:14",
                                        "data-lov-name": "form",
                                        "data-component-path": "src/pages/Contact.tsx",
                                        "data-component-line": "128",
                                        "data-component-file": "Contact.tsx",
                                        "data-component-name": "form",
                                        "data-component-content": "%7B%22className%22%3A%22space-y-5%22%7D",
                                        className: "space-y-5",
                                        onSubmit: handleSubmit,
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/Contact.tsx:129:16",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/Contact.tsx",
                                                "data-component-line": "129",
                                                "data-component-file": "Contact.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22grid%20sm%3Agrid-cols-2%20gap-5%22%7D",
                                                className: "grid sm:grid-cols-2 gap-5",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/pages/Contact.tsx:130:18",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/Contact.tsx",
                                                        "data-component-line": "130",
                                                        "data-component-file": "Contact.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%22className%22%3A%22space-y-2%22%7D",
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV(Label, {
                                                                "data-lov-id": "src/pages/Contact.tsx:131:20",
                                                                "data-lov-name": "Label",
                                                                "data-component-path": "src/pages/Contact.tsx",
                                                                "data-component-line": "131",
                                                                "data-component-file": "Contact.tsx",
                                                                "data-component-name": "Label",
                                                                "data-component-content": "%7B%22text%22%3A%22Name%22%2C%22className%22%3A%22text-black%22%7D",
                                                                htmlFor: "name",
                                                                className: "text-black",
                                                                children: "Name"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                                                                lineNumber: 131,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV(Input, {
                                                                "data-lov-id": "src/pages/Contact.tsx:132:20",
                                                                "data-lov-name": "Input",
                                                                "data-component-path": "src/pages/Contact.tsx",
                                                                "data-component-line": "132",
                                                                "data-component-file": "Contact.tsx",
                                                                "data-component-name": "Input",
                                                                "data-component-content": "%7B%22placeholder%22%3A%22Your%20name%22%2C%22className%22%3A%22h-11%20border-indian-green%2F40%20focus-visible%3Aring-indian-green%20focus-visible%3Aborder-indian-green%22%7D",
                                                                id: "name",
                                                                name: "name",
                                                                required: true,
                                                                placeholder: "Your name",
                                                                className: "h-11 border-indian-green/40 focus-visible:ring-indian-green focus-visible:border-indian-green"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                                                                lineNumber: 132,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/pages/Contact.tsx:140:18",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/Contact.tsx",
                                                        "data-component-line": "140",
                                                        "data-component-file": "Contact.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%22className%22%3A%22space-y-2%22%7D",
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV(Label, {
                                                                "data-lov-id": "src/pages/Contact.tsx:141:20",
                                                                "data-lov-name": "Label",
                                                                "data-component-path": "src/pages/Contact.tsx",
                                                                "data-component-line": "141",
                                                                "data-component-file": "Contact.tsx",
                                                                "data-component-name": "Label",
                                                                "data-component-content": "%7B%22text%22%3A%22Email%20ID%22%2C%22className%22%3A%22text-black%22%7D",
                                                                htmlFor: "email",
                                                                className: "text-black",
                                                                children: "Email ID"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                                                                lineNumber: 141,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV(Input, {
                                                                "data-lov-id": "src/pages/Contact.tsx:142:20",
                                                                "data-lov-name": "Input",
                                                                "data-component-path": "src/pages/Contact.tsx",
                                                                "data-component-line": "142",
                                                                "data-component-file": "Contact.tsx",
                                                                "data-component-name": "Input",
                                                                "data-component-content": "%7B%22placeholder%22%3A%22you%40example.com%22%2C%22className%22%3A%22h-11%20border-indian-green%2F40%20focus-visible%3Aring-indian-green%20focus-visible%3Aborder-indian-green%22%7D",
                                                                id: "email",
                                                                name: "email",
                                                                type: "email",
                                                                required: true,
                                                                placeholder: "you@example.com",
                                                                className: "h-11 border-indian-green/40 focus-visible:ring-indian-green focus-visible:border-indian-green"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                                                                lineNumber: 142,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/Contact.tsx:153:16",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/Contact.tsx",
                                                "data-component-line": "153",
                                                "data-component-file": "Contact.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22grid%20sm%3Agrid-cols-2%20gap-5%22%7D",
                                                className: "grid sm:grid-cols-2 gap-5",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/pages/Contact.tsx:154:18",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/Contact.tsx",
                                                        "data-component-line": "154",
                                                        "data-component-file": "Contact.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%22className%22%3A%22space-y-2%22%7D",
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV(Label, {
                                                                "data-lov-id": "src/pages/Contact.tsx:155:20",
                                                                "data-lov-name": "Label",
                                                                "data-component-path": "src/pages/Contact.tsx",
                                                                "data-component-line": "155",
                                                                "data-component-file": "Contact.tsx",
                                                                "data-component-name": "Label",
                                                                "data-component-content": "%7B%22text%22%3A%22Mobile%20Number%22%2C%22className%22%3A%22text-black%22%7D",
                                                                htmlFor: "mobile",
                                                                className: "text-black",
                                                                children: "Mobile Number"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                                                                lineNumber: 155,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV(Input, {
                                                                "data-lov-id": "src/pages/Contact.tsx:156:20",
                                                                "data-lov-name": "Input",
                                                                "data-component-path": "src/pages/Contact.tsx",
                                                                "data-component-line": "156",
                                                                "data-component-file": "Contact.tsx",
                                                                "data-component-name": "Input",
                                                                "data-component-content": "%7B%22placeholder%22%3A%2210-digit%20mobile%22%2C%22className%22%3A%22h-11%20border-indian-green%2F40%20focus-visible%3Aring-indian-green%20focus-visible%3Aborder-indian-green%22%7D",
                                                                id: "mobile",
                                                                name: "mobile",
                                                                type: "tel",
                                                                placeholder: "10-digit mobile",
                                                                className: "h-11 border-indian-green/40 focus-visible:ring-indian-green focus-visible:border-indian-green"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                                                                lineNumber: 156,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/pages/Contact.tsx:164:18",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/Contact.tsx",
                                                        "data-component-line": "164",
                                                        "data-component-file": "Contact.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%22className%22%3A%22space-y-2%22%7D",
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV(Label, {
                                                                "data-lov-id": "src/pages/Contact.tsx:165:20",
                                                                "data-lov-name": "Label",
                                                                "data-component-path": "src/pages/Contact.tsx",
                                                                "data-component-line": "165",
                                                                "data-component-file": "Contact.tsx",
                                                                "data-component-name": "Label",
                                                                "data-component-content": "%7B%22text%22%3A%22Purpose%22%2C%22className%22%3A%22text-black%22%7D",
                                                                htmlFor: "subject",
                                                                className: "text-black",
                                                                children: "Purpose"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                                                                lineNumber: 165,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV(Input, {
                                                                "data-lov-id": "src/pages/Contact.tsx:166:20",
                                                                "data-lov-name": "Input",
                                                                "data-component-path": "src/pages/Contact.tsx",
                                                                "data-component-line": "166",
                                                                "data-component-file": "Contact.tsx",
                                                                "data-component-name": "Input",
                                                                "data-component-content": "%7B%22placeholder%22%3A%22Purpose%22%2C%22className%22%3A%22h-11%20border-indian-green%2F40%20focus-visible%3Aring-indian-green%20focus-visible%3Aborder-indian-green%22%7D",
                                                                id: "subject",
                                                                name: "subject",
                                                                placeholder: "Purpose",
                                                                className: "h-11 border-indian-green/40 focus-visible:ring-indian-green focus-visible:border-indian-green"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                                                                lineNumber: 166,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/pages/Contact.tsx:175:16",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/pages/Contact.tsx",
                                                "data-component-line": "175",
                                                "data-component-file": "Contact.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22space-y-2%22%7D",
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(Label, {
                                                        "data-lov-id": "src/pages/Contact.tsx:176:18",
                                                        "data-lov-name": "Label",
                                                        "data-component-path": "src/pages/Contact.tsx",
                                                        "data-component-line": "176",
                                                        "data-component-file": "Contact.tsx",
                                                        "data-component-name": "Label",
                                                        "data-component-content": "%7B%22text%22%3A%22Message%22%2C%22className%22%3A%22text-black%22%7D",
                                                        htmlFor: "message",
                                                        className: "text-black",
                                                        children: "Message"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV(Textarea, {
                                                        "data-lov-id": "src/pages/Contact.tsx:177:18",
                                                        "data-lov-name": "Textarea",
                                                        "data-component-path": "src/pages/Contact.tsx",
                                                        "data-component-line": "177",
                                                        "data-component-file": "Contact.tsx",
                                                        "data-component-name": "Textarea",
                                                        "data-component-content": "%7B%22placeholder%22%3A%22How%20can%20we%20help%20you%3F%22%2C%22className%22%3A%22border-indian-green%2F40%20focus-visible%3Aring-indian-green%20focus-visible%3Aborder-indian-green%22%7D",
                                                        id: "message",
                                                        name: "message",
                                                        required: true,
                                                        rows: 5,
                                                        placeholder: "How can we help you?",
                                                        className: "border-indian-green/40 focus-visible:ring-indian-green focus-visible:border-indian-green"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                                                lineNumber: 175,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV(Button, {
                                                "data-lov-id": "src/pages/Contact.tsx:187:16",
                                                "data-lov-name": "Button",
                                                "data-component-path": "src/pages/Contact.tsx",
                                                "data-component-line": "187",
                                                "data-component-file": "Contact.tsx",
                                                "data-component-name": "Button",
                                                "data-component-content": "%7B%22className%22%3A%22w-full%20h-12%20rounded-lg%20bg-indian-green%20hover%3Abg-indian-green%2F90%20focus-visible%3Aring-indian-green%20text-white%20text-base%20font-semibold%22%7D",
                                                type: "submit",
                                                disabled: isSubmitting,
                                                className: "w-full h-12 rounded-lg bg-indian-green hover:bg-indian-green/90 focus-visible:ring-indian-green text-white text-base font-semibold",
                                                children: isSubmitting ? "Sending..." : "Send Message"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                                                lineNumber: 187,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("section", {
                "data-lov-id": "src/pages/Contact.tsx:201:6",
                "data-lov-name": "section",
                "data-component-path": "src/pages/Contact.tsx",
                "data-component-line": "201",
                "data-component-file": "Contact.tsx",
                "data-component-name": "section",
                "data-component-content": "%7B%22className%22%3A%22pb-16%20bg-background%22%7D",
                className: "pb-16 bg-background",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/pages/Contact.tsx:202:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/Contact.tsx",
                    "data-component-line": "202",
                    "data-component-file": "Contact.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/Contact.tsx:203:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/Contact.tsx",
                            "data-component-line": "203",
                            "data-component-file": "Contact.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22text-center%20mb-8%22%7D",
                            className: "text-center mb-8",
                            children: [
                                /*#__PURE__*/ _jsxDEV("h2", {
                                    "data-lov-id": "src/pages/Contact.tsx:204:12",
                                    "data-lov-name": "h2",
                                    "data-component-path": "src/pages/Contact.tsx",
                                    "data-component-line": "204",
                                    "data-component-file": "Contact.tsx",
                                    "data-component-name": "h2",
                                    "data-component-content": "%7B%22text%22%3A%22Our%20Location%22%2C%22className%22%3A%22text-2xl%20sm%3Atext-3xl%20font-bold%20text-black%20mb-3%22%7D",
                                    className: "text-2xl sm:text-3xl font-bold text-black mb-3",
                                    children: "Our Location"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("p", {
                                    "data-lov-id": "src/pages/Contact.tsx:205:12",
                                    "data-lov-name": "p",
                                    "data-component-path": "src/pages/Contact.tsx",
                                    "data-component-line": "205",
                                    "data-component-file": "Contact.tsx",
                                    "data-component-name": "p",
                                    "data-component-content": "%7B%22text%22%3A%22Visit%20our%20campus%20and%20experience%20a%20vibrant%20learning%20environment%20designed%20to%20nurture%20academic%20excellence%20and%20holistic%20development.%22%2C%22className%22%3A%22text-%5B%23333%5D%20max-w-2xl%20mx-auto%20text-sm%20sm%3Atext-base%22%7D",
                                    className: "text-[#333] max-w-2xl mx-auto text-sm sm:text-base",
                                    children: "Visit our campus and experience a vibrant learning environment designed to nurture academic excellence and holistic development."
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                                    lineNumber: 205,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/pages/Contact.tsx:209:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/Contact.tsx",
                            "data-component-line": "209",
                            "data-component-file": "Contact.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22overflow-hidden%20bg-white%22%7D",
                            className: "overflow-hidden bg-white",
                            style: {
                                borderRadius: "20px",
                                boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
                            },
                            children: /*#__PURE__*/ _jsxDEV("iframe", {
                                "data-lov-id": "src/pages/Contact.tsx:213:12",
                                "data-lov-name": "iframe",
                                "data-component-path": "src/pages/Contact.tsx",
                                "data-component-line": "213",
                                "data-component-file": "Contact.tsx",
                                "data-component-name": "iframe",
                                "data-component-content": "%7B%7D",
                                title: "SJRPS-HBR Location Map",
                                src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1116172168886!2d77.6273901!3d13.028563499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1716fedc9cf9%3A0x4c89a89cb646ea8a!2sSjr%20Public%20School%2C%203rd%20Block%2C%20HBR%20Layout%2C%20Bengaluru%2C%20Karnataka%20560043!5e0!3m2!1sen!2sin!4v1780932637526!5m2!1sen!2sin",
                                width: "100%",
                                height: "450",
                                style: {
                                    border: 0,
                                    display: "block"
                                },
                                allowFullScreen: true,
                                loading: "lazy",
                                referrerPolicy: "no-referrer-when-downgrade"
                            }, void 0, false, {
                                fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/sjrsh916/public_html/src/pages/Contact.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
};
_s(Contact, "lZd0hlArqSS5RHFUa4UXnIr8/GA=", false, function() {
    return [
        useToast
    ];
});
_c = Contact;
export default Contact;
var _c;
$RefreshReg$(_c, "Contact");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/pages/Contact.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/pages/Contact.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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QTs0QkFBQUMsdUJBQUE7NEJBQUFDLHVCQUFBOzRCQUFBQyx1QkFBQTs0QkFBQUMsdUJBQUE7NEJBQUFDLDBCQUFBOzRCQUNESSxXQUFVOzRCQUNWaUIsT0FBTztnQ0FBRUMsY0FBYztnQ0FBUUMsV0FBVzs0QkFBK0I7c0NBRXpFLHNCQUFDQztnQ0FBSzlCLGVBQUE7Z0NBQUFDLGlCQUFBO2dDQUFBQyx1QkFBQTtnQ0FBQUMsdUJBQUE7Z0NBQUFDLHVCQUFBO2dDQUFBQyx1QkFBQTtnQ0FBQUMsMEJBQUE7Z0NBQ0puQixPQUFNO2dDQUNONEMsS0FBSTtnQ0FDSkMsT0FBTTtnQ0FDTkMsUUFBTztnQ0FDUE4sT0FBTztvQ0FBRU8sUUFBUTtvQ0FBR0MsU0FBUztnQ0FBUTtnQ0FDckNDLGVBQWM7Z0NBQ2RDLFNBQVE7Z0NBQ1JDLGdCQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzdCO0dBdk5NdkU7O1FBQ2NGOzs7S0FEZEU7QUF5Tk4sZUFBZUEsUUFBTyIsIm5hbWVzIjpbIkxheW91dCIsIlBhZ2VIZXJvIiwiQnV0dG9uIiwiSW5wdXQiLCJUZXh0YXJlYSIsIkxhYmVsIiwiTWFwUGluIiwiTWFpbCIsIlBob25lIiwiU0NIT09MX0VNQUlMUyIsIlNDSE9PTF9MQU5ETElORVMiLCJzdWJtaXRFbnF1aXJ5IiwidXNlVG9hc3QiLCJ1c2VTdGF0ZSIsIkNvbnRhY3QiLCJ0b2FzdCIsImlzU3VibWl0dGluZyIsInNldElzU3VibWl0dGluZyIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwiY3VycmVudFRhcmdldCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJmaWVsZHMiLCJuYW1lIiwiU3RyaW5nIiwiZ2V0IiwiZW1haWwiLCJtb2JpbGUiLCJzdWJqZWN0IiwibWVzc2FnZSIsInJlc2V0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImVycm9yIiwiRXJyb3IiLCJ2YXJpYW50IiwiaW5mb0l0ZW1zIiwiaWNvbiIsImxpbmVzIiwibWFwIiwidGV4dCIsImhyZWYiLCJsIiwidGVsIiwiZGF0YS1sb3YtaWQiLCJkYXRhLWxvdi1uYW1lIiwiZGF0YS1jb21wb25lbnQtcGF0aCIsImRhdGEtY29tcG9uZW50LWxpbmUiLCJkYXRhLWNvbXBvbmVudC1maWxlIiwiZGF0YS1jb21wb25lbnQtbmFtZSIsImRhdGEtY29tcG9uZW50LWNvbnRlbnQiLCJicmVhZGNydW1icyIsImxhYmVsIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgyIiwicCIsIml0ZW0iLCJpIiwiaDMiLCJpZHgiLCJhIiwib25TdWJtaXQiLCJodG1sRm9yIiwiaWQiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwidHlwZSIsInJvd3MiLCJkaXNhYmxlZCIsInN0eWxlIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiaWZyYW1lIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXIiLCJkaXNwbGF5IiwiYWxsb3dGdWxsU2NyZWVuIiwibG9hZGluZyIsInJlZmVycmVyUG9saWN5Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkNvbnRhY3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBQYWdlSGVybyBmcm9tIFwiQC9jb21wb25lbnRzL1BhZ2VIZXJvXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCI7XG5pbXBvcnQgeyBUZXh0YXJlYSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdGV4dGFyZWFcIjtcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9sYWJlbFwiO1xuaW1wb3J0IHsgTWFwUGluLCBNYWlsLCBQaG9uZSB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IFNDSE9PTF9FTUFJTFMsIFNDSE9PTF9MQU5ETElORVMgfSBmcm9tIFwiQC9saWIvc2l0ZUluZm9cIjtcbmltcG9ydCB7IHN1Ym1pdEVucXVpcnkgfSBmcm9tIFwiQC9saWIvYXBpXCI7XG5pbXBvcnQgeyB1c2VUb2FzdCB9IGZyb20gXCJAL2hvb2tzL3VzZS10b2FzdFwiO1xuaW1wb3J0IHsgRm9ybUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDb250YWN0ID0gKCkgPT4ge1xuICBjb25zdCB7IHRvYXN0IH0gPSB1c2VUb2FzdCgpO1xuICBjb25zdCBbaXNTdWJtaXR0aW5nLCBzZXRJc1N1Ym1pdHRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudDogRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuICAgIGNvbnN0IGZpZWxkcyA9IHtcbiAgICAgIG5hbWU6IFN0cmluZyhmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIHx8IFwiXCIpLFxuICAgICAgZW1haWw6IFN0cmluZyhmb3JtRGF0YS5nZXQoXCJlbWFpbFwiKSB8fCBcIlwiKSxcbiAgICAgIG1vYmlsZTogU3RyaW5nKGZvcm1EYXRhLmdldChcIm1vYmlsZVwiKSB8fCBcIlwiKSxcbiAgICAgIHN1YmplY3Q6IFN0cmluZyhmb3JtRGF0YS5nZXQoXCJzdWJqZWN0XCIpIHx8IFwiXCIpLFxuICAgICAgbWVzc2FnZTogU3RyaW5nKGZvcm1EYXRhLmdldChcIm1lc3NhZ2VcIikgfHwgXCJcIiksXG4gICAgfTtcblxuICAgIHNldElzU3VibWl0dGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgc3VibWl0RW5xdWlyeShcImNvbnRhY3RcIiwgZmllbGRzKTtcbiAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgIHRvYXN0KHtcbiAgICAgICAgdGl0bGU6IFwiTWVzc2FnZSBzZW50XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoYW5rIHlvdS4gVGhlIHNjaG9vbCBvZmZpY2Ugd2lsbCByZXZpZXcgeW91ciBlbnF1aXJ5LlwiLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRvYXN0KHtcbiAgICAgICAgdGl0bGU6IFwiVW5hYmxlIHRvIHNlbmQgbWVzc2FnZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIlBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgICAgIHZhcmlhbnQ6IFwiZGVzdHJ1Y3RpdmVcIixcbiAgICAgIH0pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRJc1N1Ym1pdHRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBpbmZvSXRlbXMgPSBbXG4gICAge1xuICAgICAgaWNvbjogTWFwUGluLFxuICAgICAgdGl0bGU6IFwiQWRkcmVzc1wiLFxuICAgICAgbGluZXM6IFtcbiAgICAgICAgXCJOby4gMywgNXRoIENyb3NzLCA3dGggTWFpbiBSb2FkLFwiLFxuICAgICAgICBcIjFzdCBTdGFnZSwgM3JkIEJsb2NrLFwiLFxuICAgICAgICBcIkthbHlhbiBOYWdhcixcIixcbiAgICAgICAgXCJCZW5nYWx1cnUsIEthcm5hdGFrYSDigJMgNTYwMDQzXCIsXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogTWFpbCxcbiAgICAgIHRpdGxlOiBcIkVtYWlsXCIsXG4gICAgICBsaW5lczogU0NIT09MX0VNQUlMUy5tYXAoKGVtYWlsKSA9PiAoeyB0ZXh0OiBlbWFpbCwgaHJlZjogYG1haWx0bzoke2VtYWlsfWAgfSkpLFxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogUGhvbmUsXG4gICAgICB0aXRsZTogXCJMYW5kbGluZVwiLFxuICAgICAgbGluZXM6IFNDSE9PTF9MQU5ETElORVMubWFwKChsKSA9PiAoeyB0ZXh0OiBsLnRleHQsIGhyZWY6IGB0ZWw6JHtsLnRlbH1gIH0pKSxcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxQYWdlSGVyb1xuICAgICAgICB0aXRsZT1cIkNvbnRhY3QgVXNcIlxuICAgICAgICBicmVhZGNydW1icz17W3sgbGFiZWw6IFwiQ29udGFjdCBVc1wiIH1dfVxuICAgICAgLz5cblxuICAgICAgey8qIFNlY3Rpb24gMTogSW5mbyArIEZvcm0gKi99XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xMiBzbTpweS0xNiBiZy1iYWNrZ3JvdW5kXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBsZzpncmlkLWNvbHMtNSBnYXAtNiBsZzpnYXAtOCBpdGVtcy1zdHJldGNoXCI+XG4gICAgICAgICAgICB7LyogTEVGVCAtIDQwJSAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Y29sLXNwYW4tMiBiZy13aGl0ZSByb3VuZGVkLTJ4bCBzaGFkb3ctWzBfMTBweF8zMHB4X3JnYmEoMCwwLDAsMC4wOCldIHAtNiBzbTpwLTggZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgc206dGV4dC0zeGwgZm9udC1ib2xkIHRleHQtYmxhY2sgbWItM1wiPlxuICAgICAgICAgICAgICAgIEdldCBJbiBUb3VjaFxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsjMzMzXSB0ZXh0LXNtIHNtOnRleHQtYmFzZSBsZWFkaW5nLXJlbGF4ZWQgbWItNlwiPlxuICAgICAgICAgICAgICAgIFdlIHdlbGNvbWUgeW91ciBlbnF1aXJpZXMgYW5kIGxvb2sgZm9yd2FyZCB0byBhc3Npc3RpbmcgeW91LiBGZWVsIGZyZWUgdG8gY29udGFjdCB1cyBmb3IgYWRtaXNzaW9ucywgYWNhZGVtaWNzLCBmYWNpbGl0aWVzLCBvciBhbnkgb3RoZXIgaW5mb3JtYXRpb24gcmVnYXJkaW5nIFNKUlBTLUhCUi5cbiAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IGZsZXgtMVwiPlxuICAgICAgICAgICAgICAgIHtpbmZvSXRlbXMubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBnYXAtNCBwLTQgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLWluZGlhbi1ncmVlbi8xNSBiZy1pbmRpYW4tZ3JlZW4vWzAuMDNdIGhvdmVyOmJnLWluZGlhbi1ncmVlbi9bMC4wNl0gdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTEgaC0xMSByb3VuZGVkLWZ1bGwgYmctaW5kaWFuLWdyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aXRlbS5pY29uIGNsYXNzTmFtZT1cImgtNSB3LTUgdGV4dC13aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi13LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWJsYWNrIG1iLTFcIj57aXRlbS50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxpbmVzLm1hcCgobCwgaWR4KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGwgPT09IFwic3RyaW5nXCIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17aWR4fSBjbGFzc05hbWU9XCJ0ZXh0LVsjMzMzXSB0ZXh0LXNtIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2wuaHJlZn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LVsjMzMzXSB0ZXh0LXNtIGxlYWRpbmctcmVsYXhlZCBob3Zlcjp0ZXh0LWluZGlhbi1ncmVlbiBicmVhay13b3Jkc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bC50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIFJJR0hUIC0gNjAlICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpjb2wtc3Bhbi0zIGJnLXdoaXRlIHJvdW5kZWQtMnhsIHNoYWRvdy1bMF8xMHB4XzMwcHhfcmdiYSgwLDAsMCwwLjA4KV0gcC02IHNtOnAtOFwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgc206dGV4dC0zeGwgZm9udC1ib2xkIHRleHQtYmxhY2sgbWItNlwiPlxuICAgICAgICAgICAgICAgIFNlbmQgVXMgYSBNZXNzYWdlXG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNwYWNlLXktNVwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBzbTpncmlkLWNvbHMtMiBnYXAtNVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJuYW1lXCIgY2xhc3NOYW1lPVwidGV4dC1ibGFja1wiPk5hbWU8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTExIGJvcmRlci1pbmRpYW4tZ3JlZW4vNDAgZm9jdXMtdmlzaWJsZTpyaW5nLWluZGlhbi1ncmVlbiBmb2N1cy12aXNpYmxlOmJvcmRlci1pbmRpYW4tZ3JlZW5cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwidGV4dC1ibGFja1wiPkVtYWlsIElEPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ5b3VAZXhhbXBsZS5jb21cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTEgYm9yZGVyLWluZGlhbi1ncmVlbi80MCBmb2N1cy12aXNpYmxlOnJpbmctaW5kaWFuLWdyZWVuIGZvY3VzLXZpc2libGU6Ym9yZGVyLWluZGlhbi1ncmVlblwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBzbTpncmlkLWNvbHMtMiBnYXAtNVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJtb2JpbGVcIiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCI+TW9iaWxlIE51bWJlcjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwibW9iaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibW9iaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGVsXCJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjEwLWRpZ2l0IG1vYmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0xMSBib3JkZXItaW5kaWFuLWdyZWVuLzQwIGZvY3VzLXZpc2libGU6cmluZy1pbmRpYW4tZ3JlZW4gZm9jdXMtdmlzaWJsZTpib3JkZXItaW5kaWFuLWdyZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJzdWJqZWN0XCIgY2xhc3NOYW1lPVwidGV4dC1ibGFja1wiPlB1cnBvc2U8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInN1YmplY3RcIlxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdWJqZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlB1cnBvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTEgYm9yZGVyLWluZGlhbi1ncmVlbi80MCBmb2N1cy12aXNpYmxlOnJpbmctaW5kaWFuLWdyZWVuIGZvY3VzLXZpc2libGU6Ym9yZGVyLWluZGlhbi1ncmVlblwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrXCI+TWVzc2FnZTwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8VGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICByb3dzPXs1fVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkhvdyBjYW4gd2UgaGVscCB5b3U/XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLWluZGlhbi1ncmVlbi80MCBmb2N1cy12aXNpYmxlOnJpbmctaW5kaWFuLWdyZWVuIGZvY3VzLXZpc2libGU6Ym9yZGVyLWluZGlhbi1ncmVlblwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtMTIgcm91bmRlZC1sZyBiZy1pbmRpYW4tZ3JlZW4gaG92ZXI6YmctaW5kaWFuLWdyZWVuLzkwIGZvY3VzLXZpc2libGU6cmluZy1pbmRpYW4tZ3JlZW4gdGV4dC13aGl0ZSB0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2lzU3VibWl0dGluZyA/IFwiU2VuZGluZy4uLlwiIDogXCJTZW5kIE1lc3NhZ2VcIn1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7LyogU2VjdGlvbiAyOiBNYXAgKi99XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwYi0xNiBiZy1iYWNrZ3JvdW5kXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItOFwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIHNtOnRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWJsYWNrIG1iLTNcIj5PdXIgTG9jYXRpb248L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bIzMzM10gbWF4LXctMnhsIG14LWF1dG8gdGV4dC1zbSBzbTp0ZXh0LWJhc2VcIj5cbiAgICAgICAgICAgICAgVmlzaXQgb3VyIGNhbXB1cyBhbmQgZXhwZXJpZW5jZSBhIHZpYnJhbnQgbGVhcm5pbmcgZW52aXJvbm1lbnQgZGVzaWduZWQgdG8gbnVydHVyZSBhY2FkZW1pYyBleGNlbGxlbmNlIGFuZCBob2xpc3RpYyBkZXZlbG9wbWVudC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gYmctd2hpdGVcIlxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjIwcHhcIiwgYm94U2hhZG93OiBcIjAgMTBweCAzMHB4IHJnYmEoMCwwLDAsMC4wOClcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgICAgdGl0bGU9XCJTSlJQUy1IQlIgTG9jYXRpb24gTWFwXCJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMzg4Ny4xMTE2MTcyMTY4ODg2ITJkNzcuNjI3MzkwMSEzZDEzLjAyODU2MzQ5OTk5OTk5NyEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4M2JhZTE3MTZmZWRjOWNmOSUzQTB4NGM4OWE4OWNiNjQ2ZWE4YSEyc1NqciUyMFB1YmxpYyUyMFNjaG9vbCUyQyUyMDNyZCUyMEJsb2NrJTJDJTIwSEJSJTIwTGF5b3V0JTJDJTIwQmVuZ2FsdXJ1JTJDJTIwS2FybmF0YWthJTIwNTYwMDQzITVlMCEzbTIhMXNlbiEyc2luITR2MTc4MDkzMjYzNzUyNiE1bTIhMXNlbiEyc2luXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiNDUwXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiAwLCBkaXNwbGF5OiBcImJsb2NrXCIgfX1cbiAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuXG4gICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgcmVmZXJyZXJQb2xpY3k9XCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XG4iXSwiZmlsZSI6Ii9ob21lL3NqcnNoOTE2L3B1YmxpY19odG1sL3NyYy9wYWdlcy9Db250YWN0LnRzeCJ9