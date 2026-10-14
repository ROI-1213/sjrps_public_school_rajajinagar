import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ContactSection.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/home/sjrsh916/public_html/src/components/ContactSection.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=5efa796b"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import { Card, CardContent } from "/src/components/ui/card.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { Input } from "/src/components/ui/input.tsx";
import { Textarea } from "/src/components/ui/textarea.tsx";
import { Label } from "/src/components/ui/label.tsx";
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from "/node_modules/.vite/deps/lucide-react.js?v=5efa796b";
import { SCHOOL_EMAILS, SCHOOL_LANDLINES } from "/src/lib/siteInfo.ts";
import { submitEnquiry } from "/src/lib/api.ts";
import { useToast } from "/src/hooks/use-toast.ts";
import __vite__cjsImport11_react from "/node_modules/.vite/deps/react.js?v=5efa796b"; const useState = __vite__cjsImport11_react["useState"];
const ContactSection = ()=>{
    _s();
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const fields = {
            name: String(formData.get("name") || ""),
            phone: String(formData.get("phone") || ""),
            email: String(formData.get("email") || ""),
            message: String(formData.get("message") || "")
        };
        setIsSubmitting(true);
        try {
            await submitEnquiry("home", fields);
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
    const contactInfo = [
        {
            icon: MapPin,
            title: "Visit Us",
            details: [
                "SJR Public School, HBR Layout",
                "Kalyan Nagar",
                "Bengaluru – 560043"
            ]
        },
        {
            icon: Phone,
            title: "Call Us",
            details: SCHOOL_LANDLINES.map((phone)=>phone.text)
        },
        {
            icon: Mail,
            title: "Email Us",
            details: SCHOOL_EMAILS
        },
        {
            icon: Clock,
            title: "Office Hours",
            details: [
                "Mon – Fri: 8:30 AM – 4:00 PM",
                "Saturday: 8:30 AM – 1:00 PM"
            ]
        }
    ];
    return /*#__PURE__*/ _jsxDEV("section", {
        "data-lov-id": "src/components/ContactSection.tsx:70:4",
        "data-lov-name": "section",
        "data-component-path": "src/components/ContactSection.tsx",
        "data-component-line": "70",
        "data-component-file": "ContactSection.tsx",
        "data-component-name": "section",
        "data-component-content": "%7B%22className%22%3A%22py-14%20bg-gradient-to-br%20from-slate-50%20to-white%22%7D",
        className: "py-14 bg-gradient-to-br from-slate-50 to-white",
        children: /*#__PURE__*/ _jsxDEV("div", {
            "data-lov-id": "src/components/ContactSection.tsx:71:6",
            "data-lov-name": "div",
            "data-component-path": "src/components/ContactSection.tsx",
            "data-component-line": "71",
            "data-component-file": "ContactSection.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22container%20mx-auto%20px-4%22%7D",
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/components/ContactSection.tsx:72:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/ContactSection.tsx",
                    "data-component-line": "72",
                    "data-component-file": "ContactSection.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22text-center%20mb-10%20max-w-3xl%20mx-auto%22%7D",
                    className: "text-center mb-10 max-w-3xl mx-auto",
                    children: [
                        /*#__PURE__*/ _jsxDEV("span", {
                            "data-lov-id": "src/components/ContactSection.tsx:73:10",
                            "data-lov-name": "span",
                            "data-component-path": "src/components/ContactSection.tsx",
                            "data-component-line": "73",
                            "data-component-file": "ContactSection.tsx",
                            "data-component-name": "span",
                            "data-component-content": "%7B%22text%22%3A%22Contact%22%2C%22className%22%3A%22text-xs%20font-semibold%20uppercase%20tracking-%5B0.2em%5D%20text-indian-green%22%7D",
                            className: "text-xs font-semibold uppercase tracking-[0.2em] text-indian-green",
                            children: "Contact"
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/ContactSection.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("h2", {
                            "data-lov-id": "src/components/ContactSection.tsx:74:10",
                            "data-lov-name": "h2",
                            "data-component-path": "src/components/ContactSection.tsx",
                            "data-component-line": "74",
                            "data-component-file": "ContactSection.tsx",
                            "data-component-name": "h2",
                            "data-component-content": "%7B%22text%22%3A%22Get%20in%22%2C%22className%22%3A%22text-3xl%20md%3Atext-4xl%20font-bold%20text-school-brown%20mt-2%20mb-2%20leading-tight%22%7D",
                            className: "text-3xl md:text-4xl font-bold text-school-brown mt-2 mb-2 leading-tight",
                            children: [
                                "Get in ",
                                /*#__PURE__*/ _jsxDEV("span", {
                                    "data-lov-id": "src/components/ContactSection.tsx:75:19",
                                    "data-lov-name": "span",
                                    "data-component-path": "src/components/ContactSection.tsx",
                                    "data-component-line": "75",
                                    "data-component-file": "ContactSection.tsx",
                                    "data-component-name": "span",
                                    "data-component-content": "%7B%22text%22%3A%22Touch%22%2C%22className%22%3A%22text-indian-green%22%7D",
                                    className: "text-indian-green",
                                    children: "Touch"
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/ContactSection.tsx",
                                    lineNumber: 75,
                                    columnNumber: 20
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/components/ContactSection.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("p", {
                            "data-lov-id": "src/components/ContactSection.tsx:77:10",
                            "data-lov-name": "p",
                            "data-component-path": "src/components/ContactSection.tsx",
                            "data-component-line": "77",
                            "data-component-file": "ContactSection.tsx",
                            "data-component-name": "p",
                            "data-component-content": "%7B%22text%22%3A%22We're%20here%20to%20help.%20Reach%20out%20with%20any%20questions%20or%20feedback.%22%2C%22className%22%3A%22text-base%20text-elegant-light%22%7D",
                            className: "text-base text-elegant-light",
                            children: "We're here to help. Reach out with any questions or feedback."
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/ContactSection.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/components/ContactSection.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ _jsxDEV("div", {
                    "data-lov-id": "src/components/ContactSection.tsx:80:8",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/ContactSection.tsx",
                    "data-component-line": "80",
                    "data-component-file": "ContactSection.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22grid%20lg%3Agrid-cols-2%20gap-8%20max-w-6xl%20mx-auto%22%7D",
                    className: "grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto",
                    children: [
                        /*#__PURE__*/ _jsxDEV(Card, {
                            "data-lov-id": "src/components/ContactSection.tsx:82:10",
                            "data-lov-name": "Card",
                            "data-component-path": "src/components/ContactSection.tsx",
                            "data-component-line": "82",
                            "data-component-file": "ContactSection.tsx",
                            "data-component-name": "Card",
                            "data-component-content": "%7B%22className%22%3A%22border-t-4%20border-indian-green%20shadow-xl%22%7D",
                            className: "border-t-4 border-indian-green shadow-xl",
                            children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                "data-lov-id": "src/components/ContactSection.tsx:83:12",
                                "data-lov-name": "CardContent",
                                "data-component-path": "src/components/ContactSection.tsx",
                                "data-component-line": "83",
                                "data-component-file": "ContactSection.tsx",
                                "data-component-name": "CardContent",
                                "data-component-content": "%7B%22className%22%3A%22p-7%22%7D",
                                className: "p-7",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("h3", {
                                        "data-lov-id": "src/components/ContactSection.tsx:84:14",
                                        "data-lov-name": "h3",
                                        "data-component-path": "src/components/ContactSection.tsx",
                                        "data-component-line": "84",
                                        "data-component-file": "ContactSection.tsx",
                                        "data-component-name": "h3",
                                        "data-component-content": "%7B%22text%22%3A%22Send%20us%20a%20Message%22%2C%22className%22%3A%22text-xl%20font-bold%20text-school-brown%20mb-5%20flex%20items-center%20gap-2%22%7D",
                                        className: "text-xl font-bold text-school-brown mb-5 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ _jsxDEV(MessageSquare, {
                                                "data-lov-id": "src/components/ContactSection.tsx:85:16",
                                                "data-lov-name": "MessageSquare",
                                                "data-component-path": "src/components/ContactSection.tsx",
                                                "data-component-line": "85",
                                                "data-component-file": "ContactSection.tsx",
                                                "data-component-name": "MessageSquare",
                                                "data-component-content": "%7B%22className%22%3A%22h-5%20w-5%20text-indian-green%22%7D",
                                                className: "h-5 w-5 text-indian-green"
                                            }, void 0, false, {
                                                fileName: "/home/sjrsh916/public_html/src/components/ContactSection.tsx",
                                                lineNumber: 85,
                                                columnNumber: 17
                                            }, this),
                                            "Send us a Message"
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/components/ContactSection.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("form", {
                                        "data-lov-id": "src/components/ContactSection.tsx:88:14",
                                        "data-lov-name": "form",
                                        "data-component-path": "src/components/ContactSection.tsx",
                                        "data-component-line": "88",
                                        "data-component-file": "ContactSection.tsx",
                                        "data-component-name": "form",
                                        "data-component-content": "%7B%22className%22%3A%22space-y-4%22%7D",
                                        className: "space-y-4",
                                        onSubmit: handleSubmit,
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/components/ContactSection.tsx:89:16",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/components/ContactSection.tsx",
                                                "data-component-line": "89",
                                                "data-component-file": "ContactSection.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22grid%20md%3Agrid-cols-2%20gap-4%22%7D",
                                                className: "grid md:grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/components/ContactSection.tsx:90:18",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/components/ContactSection.tsx",
                                                        "data-component-line": "90",
                                                        "data-component-file": "ContactSection.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%22className%22%3A%22space-y-1.5%22%7D",
                                                        className: "space-y-1.5",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV(Label, {
                                                                "data-lov-id": "src/components/ContactSection.tsx:91:20",
                                                                "data-lov-name": "Label",
                                                                "data-component-path": "src/components/ContactSection.tsx",
                                                                "data-component-line": "91",
                                                                "data-component-file": "ContactSection.tsx",
                                                                "data-component-name": "Label",
                                                                "data-component-content": "%7B%22text%22%3A%22Name%20*%22%2C%22className%22%3A%22text-school-brown%20text-sm%20font-medium%22%7D",
                                                                htmlFor: "name",
                                                                className: "text-school-brown text-sm font-medium",
                                                                children: "Name *"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/components/ContactSection.tsx",
                                                                lineNumber: 91,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV(Input, {
                                                                "data-lov-id": "src/components/ContactSection.tsx:92:20",
                                                                "data-lov-name": "Input",
                                                                "data-component-path": "src/components/ContactSection.tsx",
                                                                "data-component-line": "92",
                                                                "data-component-file": "ContactSection.tsx",
                                                                "data-component-name": "Input",
                                                                "data-component-content": "%7B%22placeholder%22%3A%22Your%20full%20name%22%2C%22className%22%3A%22border-indian-green%2F30%20focus%3Aborder-indian-green%22%7D",
                                                                id: "name",
                                                                name: "name",
                                                                required: true,
                                                                placeholder: "Your full name",
                                                                className: "border-indian-green/30 focus:border-indian-green"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/components/ContactSection.tsx",
                                                                lineNumber: 92,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/components/ContactSection.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV("div", {
                                                        "data-lov-id": "src/components/ContactSection.tsx:94:18",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/components/ContactSection.tsx",
                                                        "data-component-line": "94",
                                                        "data-component-file": "ContactSection.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content": "%7B%22className%22%3A%22space-y-1.5%22%7D",
                                                        className: "space-y-1.5",
                                                        children: [
                                                            /*#__PURE__*/ _jsxDEV(Label, {
                                                                "data-lov-id": "src/components/ContactSection.tsx:95:20",
                                                                "data-lov-name": "Label",
                                                                "data-component-path": "src/components/ContactSection.tsx",
                                                                "data-component-line": "95",
                                                                "data-component-file": "ContactSection.tsx",
                                                                "data-component-name": "Label",
                                                                "data-component-content": "%7B%22text%22%3A%22Phone%22%2C%22className%22%3A%22text-school-brown%20text-sm%20font-medium%22%7D",
                                                                htmlFor: "phone",
                                                                className: "text-school-brown text-sm font-medium",
                                                                children: "Phone"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/components/ContactSection.tsx",
                                                                lineNumber: 95,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ _jsxDEV(Input, {
                                                                "data-lov-id": "src/components/ContactSection.tsx:96:20",
                                                                "data-lov-name": "Input",
                                                                "data-component-path": "src/components/ContactSection.tsx",
                                                                "data-component-line": "96",
                                                                "data-component-file": "ContactSection.tsx",
                                                                "data-component-name": "Input",
                                                                "data-component-content": "%7B%22placeholder%22%3A%22Your%20phone%20number%22%2C%22className%22%3A%22border-indian-green%2F30%20focus%3Aborder-indian-green%22%7D",
                                                                id: "phone",
                                                                name: "phone",
                                                                placeholder: "Your phone number",
                                                                className: "border-indian-green/30 focus:border-indian-green"
                                                            }, void 0, false, {
                                                                fileName: "/home/sjrsh916/public_html/src/components/ContactSection.tsx",
                                                                lineNumber: 96,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/sjrsh916/public_html/src/components/ContactSection.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/components/ContactSection.tsx",
                                                lineNumber: 89,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/components/ContactSection.tsx:99:16",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/components/ContactSection.tsx",
                                                "data-component-line": "99",
                                                "data-component-file": "ContactSection.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22space-y-1.5%22%7D",
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(Label, {
                                                        "data-lov-id": "src/components/ContactSection.tsx:100:18",
                                                        "data-lov-name": "Label",
                                                        "data-component-path": "src/components/ContactSection.tsx",
                                                        "data-component-line": "100",
                                                        "data-component-file": "ContactSection.tsx",
                                                        "data-component-name": "Label",
                                                        "data-component-content": "%7B%22text%22%3A%22Email%20*%22%2C%22className%22%3A%22text-school-brown%20text-sm%20font-medium%22%7D",
                                                        htmlFor: "email",
                                                        className: "text-school-brown text-sm font-medium",
                                                        children: "Email *"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/components/ContactSection.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV(Input, {
                                                        "data-lov-id": "src/components/ContactSection.tsx:101:18",
                                                        "data-lov-name": "Input",
                                                        "data-component-path": "src/components/ContactSection.tsx",
                                                        "data-component-line": "101",
                                                        "data-component-file": "ContactSection.tsx",
                                                        "data-component-name": "Input",
                                                        "data-component-content": "%7B%22placeholder%22%3A%22you%40example.com%22%2C%22className%22%3A%22border-indian-green%2F30%20focus%3Aborder-indian-green%22%7D",
                                                        id: "email",
                                                        name: "email",
                                                        type: "email",
                                                        required: true,
                                                        placeholder: "you@example.com",
                                                        className: "border-indian-green/30 focus:border-indian-green"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/components/ContactSection.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/components/ContactSection.tsx",
                                                lineNumber: 99,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                "data-lov-id": "src/components/ContactSection.tsx:103:16",
                                                "data-lov-name": "div",
                                                "data-component-path": "src/components/ContactSection.tsx",
                                                "data-component-line": "103",
                                                "data-component-file": "ContactSection.tsx",
                                                "data-component-name": "div",
                                                "data-component-content": "%7B%22className%22%3A%22space-y-1.5%22%7D",
                                                className: "space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(Label, {
                                                        "data-lov-id": "src/components/ContactSection.tsx:104:18",
                                                        "data-lov-name": "Label",
                                                        "data-component-path": "src/components/ContactSection.tsx",
                                                        "data-component-line": "104",
                                                        "data-component-file": "ContactSection.tsx",
                                                        "data-component-name": "Label",
                                                        "data-component-content": "%7B%22text%22%3A%22Message%20*%22%2C%22className%22%3A%22text-school-brown%20text-sm%20font-medium%22%7D",
                                                        htmlFor: "message",
                                                        className: "text-school-brown text-sm font-medium",
                                                        children: "Message *"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/components/ContactSection.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ _jsxDEV(Textarea, {
                                                        "data-lov-id": "src/components/ContactSection.tsx:105:18",
                                                        "data-lov-name": "Textarea",
                                                        "data-component-path": "src/components/ContactSection.tsx",
                                                        "data-component-line": "105",
                                                        "data-component-file": "ContactSection.tsx",
                                                        "data-component-name": "Textarea",
                                                        "data-component-content": "%7B%22placeholder%22%3A%22How%20can%20we%20help%20you%3F%22%2C%22className%22%3A%22border-indian-green%2F30%20focus%3Aborder-indian-green%22%7D",
                                                        id: "message",
                                                        name: "message",
                                                        required: true,
                                                        placeholder: "How can we help you?",
                                                        rows: 4,
                                                        className: "border-indian-green/30 focus:border-indian-green"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/components/ContactSection.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/components/ContactSection.tsx",
                                                lineNumber: 103,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ _jsxDEV(Button, {
                                                "data-lov-id": "src/components/ContactSection.tsx:107:16",
                                                "data-lov-name": "Button",
                                                "data-component-path": "src/components/ContactSection.tsx",
                                                "data-component-line": "107",
                                                "data-component-file": "ContactSection.tsx",
                                                "data-component-name": "Button",
                                                "data-component-content": "%7B%22className%22%3A%22w-full%20bg-indian-green%20hover%3Abg-indian-green%2F90%20text-white%20py-3%20font-semibold%22%7D",
                                                disabled: isSubmitting,
                                                className: "w-full bg-indian-green hover:bg-indian-green/90 text-white py-3 font-semibold",
                                                children: [
                                                    /*#__PURE__*/ _jsxDEV(Send, {
                                                        "data-lov-id": "src/components/ContactSection.tsx:108:18",
                                                        "data-lov-name": "Send",
                                                        "data-component-path": "src/components/ContactSection.tsx",
                                                        "data-component-line": "108",
                                                        "data-component-file": "ContactSection.tsx",
                                                        "data-component-name": "Send",
                                                        "data-component-content": "%7B%22className%22%3A%22mr-2%20h-4%20w-4%22%7D",
                                                        className: "mr-2 h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/components/ContactSection.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 19
                                                    }, this),
                                                    isSubmitting ? "Sending..." : "Send Message"
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/sjrsh916/public_html/src/components/ContactSection.tsx",
                                                lineNumber: 107,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/sjrsh916/public_html/src/components/ContactSection.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/sjrsh916/public_html/src/components/ContactSection.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/sjrsh916/public_html/src/components/ContactSection.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("div", {
                            "data-lov-id": "src/components/ContactSection.tsx:116:10",
                            "data-lov-name": "div",
                            "data-component-path": "src/components/ContactSection.tsx",
                            "data-component-line": "116",
                            "data-component-file": "ContactSection.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22grid%20grid-cols-1%20sm%3Agrid-cols-2%20gap-4%20content-start%22%7D",
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-4 content-start",
                            children: [
                                contactInfo.map((info, i)=>/*#__PURE__*/ _jsxDEV(Card, {
                                        "data-lov-id": "src/components/ContactSection.tsx:118:14",
                                        "data-lov-name": "Card",
                                        "data-component-path": "src/components/ContactSection.tsx",
                                        "data-component-line": "118",
                                        "data-component-file": "ContactSection.tsx",
                                        "data-component-name": "Card",
                                        "data-component-content": "%7B%22className%22%3A%22border%20border-indian-green%2F15%20hover%3Aborder-indian-green%2F40%20hover%3Ashadow-lg%20transition-all%22%7D",
                                        className: "border border-indian-green/15 hover:border-indian-green/40 hover:shadow-lg transition-all",
                                        children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                            "data-lov-id": "src/components/ContactSection.tsx:119:16",
                                            "data-lov-name": "CardContent",
                                            "data-component-path": "src/components/ContactSection.tsx",
                                            "data-component-line": "119",
                                            "data-component-file": "ContactSection.tsx",
                                            "data-component-name": "CardContent",
                                            "data-component-content": "%7B%22className%22%3A%22p-5%22%7D",
                                            className: "p-5",
                                            children: [
                                                /*#__PURE__*/ _jsxDEV("div", {
                                                    "data-lov-id": "src/components/ContactSection.tsx:120:18",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/components/ContactSection.tsx",
                                                    "data-component-line": "120",
                                                    "data-component-file": "ContactSection.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%22className%22%3A%22w-11%20h-11%20bg-indian-green%2F10%20rounded-xl%20flex%20items-center%20justify-center%20mb-3%22%7D",
                                                    className: "w-11 h-11 bg-indian-green/10 rounded-xl flex items-center justify-center mb-3",
                                                    children: /*#__PURE__*/ _jsxDEV(info.icon, {
                                                        "data-lov-id": "src/components/ContactSection.tsx:121:20",
                                                        "data-lov-name": "info.icon",
                                                        "data-component-path": "src/components/ContactSection.tsx",
                                                        "data-component-line": "121",
                                                        "data-component-file": "ContactSection.tsx",
                                                        "data-component-name": "info.icon",
                                                        "data-component-content": "%7B%22className%22%3A%22h-5%20w-5%20text-indian-green%22%7D",
                                                        className: "h-5 w-5 text-indian-green"
                                                    }, void 0, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/components/ContactSection.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/ContactSection.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ _jsxDEV("h4", {
                                                    "data-lov-id": "src/components/ContactSection.tsx:123:18",
                                                    "data-lov-name": "h4",
                                                    "data-component-path": "src/components/ContactSection.tsx",
                                                    "data-component-line": "123",
                                                    "data-component-file": "ContactSection.tsx",
                                                    "data-component-name": "h4",
                                                    "data-component-content": "%7B%22className%22%3A%22font-bold%20text-school-brown%20mb-2%20text-sm%22%7D",
                                                    className: "font-bold text-school-brown mb-2 text-sm",
                                                    children: info.title
                                                }, void 0, false, {
                                                    fileName: "/home/sjrsh916/public_html/src/components/ContactSection.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 19
                                                }, this),
                                                info.details.map((d, j)=>/*#__PURE__*/ _jsxDEV("p", {
                                                        "data-lov-id": "src/components/ContactSection.tsx:125:20",
                                                        "data-lov-name": "p",
                                                        "data-component-path": "src/components/ContactSection.tsx",
                                                        "data-component-line": "125",
                                                        "data-component-file": "ContactSection.tsx",
                                                        "data-component-name": "p",
                                                        "data-component-content": "%7B%22className%22%3A%22text-elegant-light%20text-xs%20leading-relaxed%22%7D",
                                                        className: "text-elegant-light text-xs leading-relaxed",
                                                        children: d
                                                    }, j, false, {
                                                        fileName: "/home/sjrsh916/public_html/src/components/ContactSection.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/sjrsh916/public_html/src/components/ContactSection.tsx",
                                            lineNumber: 119,
                                            columnNumber: 17
                                        }, this)
                                    }, i, false, {
                                        fileName: "/home/sjrsh916/public_html/src/components/ContactSection.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ _jsxDEV(Card, {
                                    "data-lov-id": "src/components/ContactSection.tsx:130:12",
                                    "data-lov-name": "Card",
                                    "data-component-path": "src/components/ContactSection.tsx",
                                    "data-component-line": "130",
                                    "data-component-file": "ContactSection.tsx",
                                    "data-component-name": "Card",
                                    "data-component-content": "%7B%22className%22%3A%22sm%3Acol-span-2%20overflow-hidden%20border%20border-indian-green%2F15%22%7D",
                                    className: "sm:col-span-2 overflow-hidden border border-indian-green/15",
                                    children: /*#__PURE__*/ _jsxDEV(CardContent, {
                                        "data-lov-id": "src/components/ContactSection.tsx:131:14",
                                        "data-lov-name": "CardContent",
                                        "data-component-path": "src/components/ContactSection.tsx",
                                        "data-component-line": "131",
                                        "data-component-file": "ContactSection.tsx",
                                        "data-component-name": "CardContent",
                                        "data-component-content": "%7B%22className%22%3A%22p-0%22%7D",
                                        className: "p-0",
                                        children: /*#__PURE__*/ _jsxDEV("iframe", {
                                            "data-lov-id": "src/components/ContactSection.tsx:132:16",
                                            "data-lov-name": "iframe",
                                            "data-component-path": "src/components/ContactSection.tsx",
                                            "data-component-line": "132",
                                            "data-component-file": "ContactSection.tsx",
                                            "data-component-name": "iframe",
                                            "data-component-content": "%7B%7D",
                                            title: "SJRPS-HBR Location Map",
                                            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1116172168886!2d77.6273901!3d13.028563499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1716fedc9cf9%3A0x4c89a89cb646ea8a!2sSjr%20Public%20School%2C%203rd%20Block%2C%20HBR%20Layout%2C%20Bengaluru%2C%20Karnataka%20560043!5e0!3m2!1sen!2sin!4v1780932637526!5m2!1sen!2sin",
                                            width: "100%",
                                            height: "240",
                                            style: {
                                                border: 0,
                                                display: "block"
                                            },
                                            allowFullScreen: true,
                                            loading: "lazy",
                                            referrerPolicy: "no-referrer-when-downgrade"
                                        }, void 0, false, {
                                            fileName: "/home/sjrsh916/public_html/src/components/ContactSection.tsx",
                                            lineNumber: 132,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/sjrsh916/public_html/src/components/ContactSection.tsx",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/home/sjrsh916/public_html/src/components/ContactSection.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/sjrsh916/public_html/src/components/ContactSection.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/sjrsh916/public_html/src/components/ContactSection.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/sjrsh916/public_html/src/components/ContactSection.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/home/sjrsh916/public_html/src/components/ContactSection.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
};
_s(ContactSection, "lZd0hlArqSS5RHFUa4UXnIr8/GA=", false, function() {
    return [
        useToast
    ];
});
_c = ContactSection;
export default ContactSection;
var _c;
$RefreshReg$(_c, "ContactSection");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/home/sjrsh916/public_html/src/components/ContactSection.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/sjrsh916/public_html/src/components/ContactSection.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,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LHNCQUFDbUI7NENBQUsxQixlQUFBOzRDQUFBQyxpQkFBQTs0Q0FBQUMsdUJBQUE7NENBQUFDLHVCQUFBOzRDQUFBQyx1QkFBQTs0Q0FBQUMsdUJBQUE7NENBQUFDLDBCQUFBOzRDQUNKakIsT0FBTTs0Q0FDTnNDLEtBQUk7NENBQ0pDLE9BQU07NENBQ05DLFFBQU87NENBQ1BDLE9BQU87Z0RBQUVDLFFBQVE7Z0RBQUdDLFNBQVM7NENBQVE7NENBQ3JDQyxlQUFjOzRDQUNkQyxTQUFROzRDQUNSQyxnQkFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2pDO0dBeklNakU7O1FBQ2NGOzs7S0FEZEU7QUEySU4sZUFBZUEsZUFBYyIsIm5hbWVzIjpbIkNhcmQiLCJDYXJkQ29udGVudCIsIkJ1dHRvbiIsIklucHV0IiwiVGV4dGFyZWEiLCJMYWJlbCIsIk1hcFBpbiIsIlBob25lIiwiTWFpbCIsIkNsb2NrIiwiTWVzc2FnZVNxdWFyZSIsIlNlbmQiLCJTQ0hPT0xfRU1BSUxTIiwiU0NIT09MX0xBTkRMSU5FUyIsInN1Ym1pdEVucXVpcnkiLCJ1c2VUb2FzdCIsInVzZVN0YXRlIiwiQ29udGFjdFNlY3Rpb24iLCJ0b2FzdCIsImlzU3VibWl0dGluZyIsInNldElzU3VibWl0dGluZyIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwiY3VycmVudFRhcmdldCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJmaWVsZHMiLCJuYW1lIiwiU3RyaW5nIiwiZ2V0IiwicGhvbmUiLCJlbWFpbCIsIm1lc3NhZ2UiLCJyZXNldCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJlcnJvciIsIkVycm9yIiwidmFyaWFudCIsImNvbnRhY3RJbmZvIiwiaWNvbiIsImRldGFpbHMiLCJtYXAiLCJ0ZXh0Iiwic2VjdGlvbiIsImRhdGEtbG92LWlkIiwiZGF0YS1sb3YtbmFtZSIsImRhdGEtY29tcG9uZW50LXBhdGgiLCJkYXRhLWNvbXBvbmVudC1saW5lIiwiZGF0YS1jb21wb25lbnQtZmlsZSIsImRhdGEtY29tcG9uZW50LW5hbWUiLCJkYXRhLWNvbXBvbmVudC1jb250ZW50IiwiY2xhc3NOYW1lIiwiZGl2Iiwic3BhbiIsImgyIiwicCIsImgzIiwib25TdWJtaXQiLCJodG1sRm9yIiwiaWQiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwidHlwZSIsInJvd3MiLCJkaXNhYmxlZCIsImluZm8iLCJpIiwiaDQiLCJkIiwiaiIsImlmcmFtZSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0Iiwic3R5bGUiLCJib3JkZXIiLCJkaXNwbGF5IiwiYWxsb3dGdWxsU2NyZWVuIiwibG9hZGluZyIsInJlZmVycmVyUG9saWN5Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkNvbnRhY3RTZWN0aW9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiO1xuaW1wb3J0IHsgVGV4dGFyZWEgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3RleHRhcmVhXCI7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvbGFiZWxcIjtcbmltcG9ydCB7IE1hcFBpbiwgUGhvbmUsIE1haWwsIENsb2NrLCBNZXNzYWdlU3F1YXJlLCBTZW5kIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgU0NIT09MX0VNQUlMUywgU0NIT09MX0xBTkRMSU5FUyB9IGZyb20gXCJAL2xpYi9zaXRlSW5mb1wiO1xuaW1wb3J0IHsgc3VibWl0RW5xdWlyeSB9IGZyb20gXCJAL2xpYi9hcGlcIjtcbmltcG9ydCB7IHVzZVRvYXN0IH0gZnJvbSBcIkAvaG9va3MvdXNlLXRvYXN0XCI7XG5pbXBvcnQgeyBGb3JtRXZlbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IENvbnRhY3RTZWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCB7IHRvYXN0IH0gPSB1c2VUb2FzdCgpO1xuICBjb25zdCBbaXNTdWJtaXR0aW5nLCBzZXRJc1N1Ym1pdHRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudDogRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuICAgIGNvbnN0IGZpZWxkcyA9IHtcbiAgICAgIG5hbWU6IFN0cmluZyhmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIHx8IFwiXCIpLFxuICAgICAgcGhvbmU6IFN0cmluZyhmb3JtRGF0YS5nZXQoXCJwaG9uZVwiKSB8fCBcIlwiKSxcbiAgICAgIGVtYWlsOiBTdHJpbmcoZm9ybURhdGEuZ2V0KFwiZW1haWxcIikgfHwgXCJcIiksXG4gICAgICBtZXNzYWdlOiBTdHJpbmcoZm9ybURhdGEuZ2V0KFwibWVzc2FnZVwiKSB8fCBcIlwiKSxcbiAgICB9O1xuXG4gICAgc2V0SXNTdWJtaXR0aW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzdWJtaXRFbnF1aXJ5KFwiaG9tZVwiLCBmaWVsZHMpO1xuICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgdG9hc3Qoe1xuICAgICAgICB0aXRsZTogXCJNZXNzYWdlIHNlbnRcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhhbmsgeW91LiBUaGUgc2Nob29sIG9mZmljZSB3aWxsIHJldmlldyB5b3VyIGVucXVpcnkuXCIsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdG9hc3Qoe1xuICAgICAgICB0aXRsZTogXCJVbmFibGUgdG8gc2VuZCBtZXNzYWdlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICAgICAgdmFyaWFudDogXCJkZXN0cnVjdGl2ZVwiLFxuICAgICAgfSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzU3VibWl0dGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNvbnRhY3RJbmZvID0gW1xuICAgIHtcbiAgICAgIGljb246IE1hcFBpbixcbiAgICAgIHRpdGxlOiBcIlZpc2l0IFVzXCIsXG4gICAgICBkZXRhaWxzOiBbXCJTSlIgUHVibGljIFNjaG9vbCwgSEJSIExheW91dFwiLCBcIkthbHlhbiBOYWdhclwiLCBcIkJlbmdhbHVydSDigJMgNTYwMDQzXCJdLFxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogUGhvbmUsXG4gICAgICB0aXRsZTogXCJDYWxsIFVzXCIsXG4gICAgICBkZXRhaWxzOiBTQ0hPT0xfTEFORExJTkVTLm1hcCgocGhvbmUpID0+IHBob25lLnRleHQpLFxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogTWFpbCxcbiAgICAgIHRpdGxlOiBcIkVtYWlsIFVzXCIsXG4gICAgICBkZXRhaWxzOiBTQ0hPT0xfRU1BSUxTLFxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogQ2xvY2ssXG4gICAgICB0aXRsZTogXCJPZmZpY2UgSG91cnNcIixcbiAgICAgIGRldGFpbHM6IFtcIk1vbiDigJMgRnJpOiA4OjMwIEFNIOKAkyA0OjAwIFBNXCIsIFwiU2F0dXJkYXk6IDg6MzAgQU0g4oCTIDE6MDAgUE1cIl0sXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTE0IGJnLWdyYWRpZW50LXRvLWJyIGZyb20tc2xhdGUtNTAgdG8td2hpdGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTEwIG1heC13LTN4bCBteC1hdXRvXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yZW1dIHRleHQtaW5kaWFuLWdyZWVuXCI+Q29udGFjdDwvc3Bhbj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgZm9udC1ib2xkIHRleHQtc2Nob29sLWJyb3duIG10LTIgbWItMiBsZWFkaW5nLXRpZ2h0XCI+XG4gICAgICAgICAgICBHZXQgaW4gPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1pbmRpYW4tZ3JlZW5cIj5Ub3VjaDwvc3Bhbj5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSB0ZXh0LWVsZWdhbnQtbGlnaHRcIj5XZSdyZSBoZXJlIHRvIGhlbHAuIFJlYWNoIG91dCB3aXRoIGFueSBxdWVzdGlvbnMgb3IgZmVlZGJhY2suPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbGc6Z3JpZC1jb2xzLTIgZ2FwLTggbWF4LXctNnhsIG14LWF1dG9cIj5cbiAgICAgICAgICB7LyogRm9ybSAqL31cbiAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJib3JkZXItdC00IGJvcmRlci1pbmRpYW4tZ3JlZW4gc2hhZG93LXhsXCI+XG4gICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC03XCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXNjaG9vbC1icm93biBtYi01IGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgPE1lc3NhZ2VTcXVhcmUgY2xhc3NOYW1lPVwiaC01IHctNSB0ZXh0LWluZGlhbi1ncmVlblwiIC8+XG4gICAgICAgICAgICAgICAgU2VuZCB1cyBhIE1lc3NhZ2VcbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwic3BhY2UteS00XCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMS41XCI+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwibmFtZVwiIGNsYXNzTmFtZT1cInRleHQtc2Nob29sLWJyb3duIHRleHQtc20gZm9udC1tZWRpdW1cIj5OYW1lICo8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgaWQ9XCJuYW1lXCIgbmFtZT1cIm5hbWVcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIllvdXIgZnVsbCBuYW1lXCIgY2xhc3NOYW1lPVwiYm9yZGVyLWluZGlhbi1ncmVlbi8zMCBmb2N1czpib3JkZXItaW5kaWFuLWdyZWVuXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEuNVwiPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cInBob25lXCIgY2xhc3NOYW1lPVwidGV4dC1zY2hvb2wtYnJvd24gdGV4dC1zbSBmb250LW1lZGl1bVwiPlBob25lPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0IGlkPVwicGhvbmVcIiBuYW1lPVwicGhvbmVcIiBwbGFjZWhvbGRlcj1cIllvdXIgcGhvbmUgbnVtYmVyXCIgY2xhc3NOYW1lPVwiYm9yZGVyLWluZGlhbi1ncmVlbi8zMCBmb2N1czpib3JkZXItaW5kaWFuLWdyZWVuXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xLjVcIj5cbiAgICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJ0ZXh0LXNjaG9vbC1icm93biB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+RW1haWwgKjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8SW5wdXQgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwieW91QGV4YW1wbGUuY29tXCIgY2xhc3NOYW1lPVwiYm9yZGVyLWluZGlhbi1ncmVlbi8zMCBmb2N1czpib3JkZXItaW5kaWFuLWdyZWVuXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMS41XCI+XG4gICAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNjaG9vbC1icm93biB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+TWVzc2FnZSAqPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxUZXh0YXJlYSBpZD1cIm1lc3NhZ2VcIiBuYW1lPVwibWVzc2FnZVwiIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiSG93IGNhbiB3ZSBoZWxwIHlvdT9cIiByb3dzPXs0fSBjbGFzc05hbWU9XCJib3JkZXItaW5kaWFuLWdyZWVuLzMwIGZvY3VzOmJvcmRlci1pbmRpYW4tZ3JlZW5cIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30gY2xhc3NOYW1lPVwidy1mdWxsIGJnLWluZGlhbi1ncmVlbiBob3ZlcjpiZy1pbmRpYW4tZ3JlZW4vOTAgdGV4dC13aGl0ZSBweS0zIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgIDxTZW5kIGNsYXNzTmFtZT1cIm1yLTIgaC00IHctNFwiIC8+XG4gICAgICAgICAgICAgICAgICB7aXNTdWJtaXR0aW5nID8gXCJTZW5kaW5nLi4uXCIgOiBcIlNlbmQgTWVzc2FnZVwifVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgIDwvQ2FyZD5cblxuICAgICAgICAgIHsvKiBJbmZvICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBnYXAtNCBjb250ZW50LXN0YXJ0XCI+XG4gICAgICAgICAgICB7Y29udGFjdEluZm8ubWFwKChpbmZvLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxDYXJkIGtleT17aX0gY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1pbmRpYW4tZ3JlZW4vMTUgaG92ZXI6Ym9yZGVyLWluZGlhbi1ncmVlbi80MCBob3ZlcjpzaGFkb3ctbGcgdHJhbnNpdGlvbi1hbGxcIj5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC01XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTEgaC0xMSBiZy1pbmRpYW4tZ3JlZW4vMTAgcm91bmRlZC14bCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbmZvLmljb24gY2xhc3NOYW1lPVwiaC01IHctNSB0ZXh0LWluZGlhbi1ncmVlblwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1zY2hvb2wtYnJvd24gbWItMiB0ZXh0LXNtXCI+e2luZm8udGl0bGV9PC9oND5cbiAgICAgICAgICAgICAgICAgIHtpbmZvLmRldGFpbHMubWFwKChkLCBqKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxwIGtleT17an0gY2xhc3NOYW1lPVwidGV4dC1lbGVnYW50LWxpZ2h0IHRleHQteHMgbGVhZGluZy1yZWxheGVkXCI+e2R9PC9wPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJzbTpjb2wtc3Bhbi0yIG92ZXJmbG93LWhpZGRlbiBib3JkZXIgYm9yZGVyLWluZGlhbi1ncmVlbi8xNVwiPlxuICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC0wXCI+XG4gICAgICAgICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJTSlJQUy1IQlIgTG9jYXRpb24gTWFwXCJcbiAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDM4ODcuMTExNjE3MjE2ODg4NiEyZDc3LjYyNzM5MDEhM2QxMy4wMjg1NjM0OTk5OTk5OTchMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDNiYWUxNzE2ZmVkYzljZjklM0EweDRjODlhODljYjY0NmVhOGEhMnNTanIlMjBQdWJsaWMlMjBTY2hvb2wlMkMlMjAzcmQlMjBCbG9jayUyQyUyMEhCUiUyMExheW91dCUyQyUyMEJlbmdhbHVydSUyQyUyMEthcm5hdGFrYSUyMDU2MDA0MyE1ZTAhM20yITFzZW4hMnNpbiE0djE3ODA5MzI2Mzc1MjYhNW0yITFzZW4hMnNpblwiXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjQwXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogMCwgZGlzcGxheTogXCJibG9ja1wiIH19XG4gICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgICAgIHJlZmVycmVyUG9saWN5PVwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdFNlY3Rpb247XG4iXSwiZmlsZSI6Ii9ob21lL3NqcnNoOTE2L3B1YmxpY19odG1sL3NyYy9jb21wb25lbnRzL0NvbnRhY3RTZWN0aW9uLnRzeCJ9