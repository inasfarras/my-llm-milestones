(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_15df91b0._.js", {

"[project]/src/context/MilestoneContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "MilestoneProvider": (()=>MilestoneProvider),
    "useMilestones": (()=>useMilestones)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const MilestoneContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function MilestoneProvider({ children }) {
    _s();
    const [milestones, setMilestones] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Load milestones from localStorage on initial render
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MilestoneProvider.useEffect": ()=>{
            try {
                const savedMilestones = localStorage.getItem('milestones');
                if (savedMilestones) {
                    setMilestones(JSON.parse(savedMilestones));
                }
            } catch (error) {
                console.error('Error loading milestones from localStorage:', error);
            }
        }
    }["MilestoneProvider.useEffect"], []);
    // Save milestones to localStorage whenever they change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MilestoneProvider.useEffect": ()=>{
            try {
                localStorage.setItem('milestones', JSON.stringify(milestones));
            } catch (error) {
                console.error('Error saving milestones to localStorage:', error);
            }
        }
    }["MilestoneProvider.useEffect"], [
        milestones
    ]);
    // Calculate statistics
    const stats = {
        completed: milestones.filter((m)=>m.status === 'Completed').length,
        inProgress: milestones.filter((m)=>m.status === 'In Progress').length,
        notStarted: milestones.filter((m)=>m.status === 'Not Started').length,
        total: milestones.length,
        completedPercentage: milestones.length > 0 ? Math.round(milestones.filter((m)=>m.status === 'Completed').length / milestones.length * 100) : 0
    };
    const addMilestone = (milestone)=>{
        setMilestones((prev)=>[
                ...prev,
                {
                    ...milestone,
                    id: `milestone-${Date.now()}`
                }
            ]);
    };
    const removeMilestone = (id)=>{
        setMilestones((prev)=>prev.filter((m)=>m.id !== id));
    };
    const updateMilestone = (id, updates)=>{
        setMilestones((prev)=>prev.map((m)=>m.id === id ? {
                    ...m,
                    ...updates
                } : m));
    };
    const updateMilestoneStatus = (id, status)=>{
        setMilestones((prev)=>prev.map((m)=>m.id === id ? {
                    ...m,
                    status
                } : m));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MilestoneContext.Provider, {
        value: {
            milestones,
            stats,
            addMilestone,
            removeMilestone,
            updateMilestone,
            updateMilestoneStatus
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/MilestoneContext.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_s(MilestoneProvider, "BMyhIO4BfkOCz84j+7QcFu67djk=");
_c = MilestoneProvider;
function useMilestones() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(MilestoneContext);
    if (context === undefined) {
        throw new Error('useMilestones must be used within a MilestoneProvider');
    }
    return context;
}
_s1(useMilestones, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "MilestoneProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/data/thesis.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "thesisData": (()=>thesisData)
});
const thesisData = {
    title: "Designing a Reasoning-Augmented Retrieval System for Smarter Knowledge Retrieval in LLMs",
    description: "This thesis explores the development of a Reasoning-Augmented Retrieval (ReAR) system that enhances traditional retrieval-augmented generation (RAG) methods by incorporating planning and reasoning processes prior to document retrieval. The proposed framework aims to improve the accuracy, relevance, and reasoning ability of large language models when answering complex and knowledge-intensive queries.",
    supervisor: "黃振榮 Chenn-Jung Huang",
    department: "Department of Computer Science and Information Engineering",
    pdfLink: "#",
    milestones: [
        {
            id: "proposal",
            title: "Research Proposal",
            description: "Define the research problem, motivations, and introduce Reasoning-Augmented Retrieval as the proposed solution.",
            date: "May 2025",
            status: "Completed"
        },
        {
            id: "literature",
            title: "Literature Review",
            description: "Analyze traditional RAG systems, reasoning techniques in LLMs, and emerging agent-based retrieval methods.",
            date: "June 2025",
            status: "In Progress"
        },
        {
            id: "design",
            title: "System Design",
            description: "Design the architecture for the Reasoning-Augmented Retrieval system, including agent modules and reasoning workflows.",
            date: "July 2025",
            status: "Not Started"
        },
        {
            id: "implementation",
            title: "System Implementation",
            description: "Implement the Reasoning-Augmented Retrieval framework and develop baseline models for comparison.",
            date: "August 2025",
            status: "Not Started"
        },
        {
            id: "experiments",
            title: "Experiments & Evaluation",
            description: "Conduct experiments comparing standard RAG with the proposed ReAR system across complex multi-domain queries.",
            date: "September 2025",
            status: "Not Started"
        },
        {
            id: "writing",
            title: "Thesis Writing",
            description: "Document the methodology, experimental results, and implications of Reasoning-Augmented Retrieval systems.",
            date: "October 2025",
            status: "Not Started"
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/context/ThesisContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ThesisProvider": (()=>ThesisProvider),
    "useThesis": (()=>useThesis)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$thesis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/thesis.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const ThesisContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const ThesisProvider = ({ children })=>{
    _s();
    const [thesisData, setThesisData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$thesis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["thesisData"]);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        completed: 0,
        inProgress: 0,
        notStarted: 0,
        total: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$thesis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["thesisData"].milestones.length,
        completedPercentage: 0
    });
    // Calculate stats whenever thesis milestones change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThesisProvider.useEffect": ()=>{
            const completed = thesisData.milestones.filter({
                "ThesisProvider.useEffect": (m)=>m.status === 'Completed'
            }["ThesisProvider.useEffect"]).length;
            const inProgress = thesisData.milestones.filter({
                "ThesisProvider.useEffect": (m)=>m.status === 'In Progress'
            }["ThesisProvider.useEffect"]).length;
            const notStarted = thesisData.milestones.filter({
                "ThesisProvider.useEffect": (m)=>m.status === 'Not Started'
            }["ThesisProvider.useEffect"]).length;
            setStats({
                completed,
                inProgress,
                notStarted,
                total: thesisData.milestones.length,
                completedPercentage: Math.round(completed / thesisData.milestones.length * 100)
            });
        }
    }["ThesisProvider.useEffect"], [
        thesisData
    ]);
    const updateMilestoneStatus = (milestoneId, newStatus)=>{
        setThesisData((prev)=>({
                ...prev,
                milestones: prev.milestones.map((milestone)=>milestone.id === milestoneId ? {
                        ...milestone,
                        status: newStatus
                    } : milestone)
            }));
        // Store updated thesis data in localStorage
        try {
            const updatedMilestones = thesisData.milestones.map((m)=>m.id === milestoneId ? {
                    ...m,
                    status: newStatus
                } : m);
            localStorage.setItem('thesisMilestones', JSON.stringify(updatedMilestones.map((m)=>({
                    id: m.id,
                    status: m.status
                }))));
        } catch (error) {
            console.error('Error saving thesis data to localStorage:', error);
        }
    };
    // Load saved thesis milestone statuses from localStorage on initial load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThesisProvider.useEffect": ()=>{
            try {
                const savedMilestones = localStorage.getItem('thesisMilestones');
                if (savedMilestones) {
                    const parsedMilestones = JSON.parse(savedMilestones);
                    // Apply saved statuses to thesis milestones
                    setThesisData({
                        "ThesisProvider.useEffect": (prev)=>({
                                ...prev,
                                milestones: prev.milestones.map({
                                    "ThesisProvider.useEffect": (milestone)=>{
                                        const savedMilestone = parsedMilestones.find({
                                            "ThesisProvider.useEffect.savedMilestone": (m)=>m.id === milestone.id
                                        }["ThesisProvider.useEffect.savedMilestone"]);
                                        return savedMilestone ? {
                                            ...milestone,
                                            status: savedMilestone.status
                                        } : milestone;
                                    }
                                }["ThesisProvider.useEffect"])
                            })
                    }["ThesisProvider.useEffect"]);
                }
            } catch (error) {
                console.error('Error loading thesis data from localStorage:', error);
            }
        }
    }["ThesisProvider.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThesisContext.Provider, {
        value: {
            thesisData,
            updateMilestoneStatus,
            stats
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/ThesisContext.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
};
_s(ThesisProvider, "xfXyl/igLYmayTWf6isbftKgaoU=");
_c = ThesisProvider;
const useThesis = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThesisContext);
    if (context === undefined) {
        throw new Error('useThesis must be used within a ThesisProvider');
    }
    return context;
};
_s1(useThesis, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ThesisProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    }, specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, Error("react-stack-top-frame"), createTask(getTaskName(type)));
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
}]);

//# sourceMappingURL=_15df91b0._.js.map