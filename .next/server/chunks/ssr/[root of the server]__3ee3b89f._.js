module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/data/roadmap.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "roadmapData": (()=>roadmapData)
});
const roadmapData = [
    {
        id: "python-mastery",
        title: "Python Mastery",
        description: "Master core Python coding, OOP, file handling, web scraping, and APIs through multiple projects.",
        status: "In Progress",
        technologies: [
            "Python",
            "OOP",
            "APIs",
            "File I/O"
        ],
        github: "",
        month: "Month 1",
        projectId: "python-mastery"
    },
    {
        id: "ml-basics",
        title: "Machine Learning Basics",
        description: "Learn machine learning fundamentals: data preprocessing, model training, evaluation.",
        status: "Not Started",
        technologies: [
            "scikit-learn",
            "Pandas",
            "ML"
        ],
        github: "",
        month: "Month 2",
        projectId: "ml-basics"
    },
    {
        id: "deep-learning",
        title: "Deep Learning Foundations",
        description: "Build and train deep learning models using PyTorch, CNNs, and RNNs.",
        status: "Not Started",
        technologies: [
            "PyTorch",
            "Neural Networks"
        ],
        github: "",
        month: "Month 3",
        projectId: "deep-learning"
    },
    {
        id: "llm-finetuning",
        title: "LLM Fine-tuning",
        description: "Load, fine-tune, and optimize transformer models like GPT-2 with HuggingFace.",
        status: "Not Started",
        technologies: [
            "Transformers",
            "HuggingFace",
            "Fine-tuning"
        ],
        github: "",
        month: "Month 4",
        projectId: "llm-finetuning"
    },
    {
        id: "rag-systems",
        title: "Retrieval-Augmented Generation (RAG)",
        description: "Implement RAG-based QA systems using vector databases and LLMs.",
        status: "Not Started",
        technologies: [
            "RAG",
            "Vector Databases",
            "LangChain"
        ],
        github: "",
        month: "Month 4",
        projectId: "rag-systems"
    },
    {
        id: "ai-agents",
        title: "Multi-Agent AI Systems",
        description: "Build AI agents that reason, retrieve, plan, and collaborate using LangChain/AutoGen.",
        status: "Not Started",
        technologies: [
            "Multi-Agent AI",
            "LangChain",
            "AutoGen"
        ],
        github: "",
        month: "Month 5",
        projectId: "ai-agents"
    }
];
}}),
"[project]/src/context/MilestoneContext.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MilestoneProvider": (()=>MilestoneProvider),
    "useMilestones": (()=>useMilestones)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$roadmap$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/roadmap.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const MilestoneContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function MilestoneProvider({ children }) {
    const [milestones, setMilestones] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        // Initialize with default sub-tasks and resources
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$roadmap$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["roadmapData"].map((item)=>({
                ...item,
                subTasks: getDefaultSubTasks(item.id),
                resources: getDefaultResources(item.id),
                achievements: [],
                totalHours: 0,
                completedHours: 0
            }));
    });
    const stats = calculateStats(milestones);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Load saved data from localStorage
        const savedMilestones = localStorage.getItem('milestones');
        if (savedMilestones) {
            try {
                const parsed = JSON.parse(savedMilestones);
                setMilestones(parsed);
            } catch (error) {
                console.error('Error loading milestones:', error);
            }
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Save to localStorage whenever milestones change
        localStorage.setItem('milestones', JSON.stringify(milestones));
    }, [
        milestones
    ]);
    const updateMilestoneStatus = (id, status)=>{
        setMilestones((prev)=>prev.map((milestone)=>milestone.id === id ? {
                    ...milestone,
                    status
                } : milestone));
    };
    const updateSubTask = (milestoneId, subTaskId, completed)=>{
        setMilestones((prev)=>prev.map((milestone)=>{
                if (milestone.id === milestoneId) {
                    const updatedSubTasks = milestone.subTasks.map((task)=>task.id === subTaskId ? {
                            ...task,
                            completed
                        } : task);
                    const allCompleted = updatedSubTasks.every((task)=>task.completed);
                    return {
                        ...milestone,
                        subTasks: updatedSubTasks,
                        status: allCompleted ? 'Completed' : milestone.status
                    };
                }
                return milestone;
            }));
    };
    const addSubTask = (milestoneId, subTask)=>{
        setMilestones((prev)=>prev.map((milestone)=>milestone.id === milestoneId ? {
                    ...milestone,
                    subTasks: [
                        ...milestone.subTasks,
                        subTask
                    ]
                } : milestone));
    };
    const addResource = (milestoneId, resource)=>{
        setMilestones((prev)=>prev.map((milestone)=>milestone.id === milestoneId ? {
                    ...milestone,
                    resources: [
                        ...milestone.resources,
                        resource
                    ]
                } : milestone));
    };
    const addAchievement = (milestoneId, achievement)=>{
        setMilestones((prev)=>prev.map((milestone)=>milestone.id === milestoneId ? {
                    ...milestone,
                    achievements: [
                        ...milestone.achievements,
                        achievement
                    ]
                } : milestone));
    };
    const updateTimeTracking = (milestoneId, hours)=>{
        setMilestones((prev)=>prev.map((milestone)=>milestone.id === milestoneId ? {
                    ...milestone,
                    completedHours: (milestone.completedHours || 0) + hours
                } : milestone));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MilestoneContext.Provider, {
        value: {
            milestones,
            stats,
            updateMilestoneStatus,
            updateSubTask,
            addSubTask,
            addResource,
            addAchievement,
            updateTimeTracking
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/MilestoneContext.tsx",
        lineNumber: 148,
        columnNumber: 5
    }, this);
}
function getDefaultSubTasks(milestoneId) {
    const defaultTasks = {
        'python-mastery': [
            {
                id: 'python-basics',
                title: 'Python Basics & Syntax',
                completed: false,
                estimatedHours: 20
            },
            {
                id: 'oop',
                title: 'Object-Oriented Programming',
                completed: false,
                estimatedHours: 15
            },
            {
                id: 'file-handling',
                title: 'File Handling & I/O',
                completed: false,
                estimatedHours: 10
            },
            {
                id: 'web-scraping',
                title: 'Web Scraping & APIs',
                completed: false,
                estimatedHours: 15
            }
        ],
        'ml-basics': [
            {
                id: 'data-preprocessing',
                title: 'Data Preprocessing',
                completed: false,
                estimatedHours: 15
            },
            {
                id: 'model-training',
                title: 'Model Training & Evaluation',
                completed: false,
                estimatedHours: 20
            },
            {
                id: 'feature-engineering',
                title: 'Feature Engineering',
                completed: false,
                estimatedHours: 15
            }
        ]
    };
    return defaultTasks[milestoneId] || [];
}
function getDefaultResources(milestoneId) {
    const defaultResources = {
        'python-mastery': [
            'Python Official Documentation',
            'Real Python Tutorials',
            'Python Crash Course Book'
        ],
        'ml-basics': [
            'Scikit-learn Documentation',
            'Hands-on Machine Learning Book',
            'Kaggle Courses'
        ]
    };
    return defaultResources[milestoneId] || [];
}
function calculateStats(milestones) {
    const completed = milestones.filter((m)=>m.status === 'Completed').length;
    const inProgress = milestones.filter((m)=>m.status === 'In Progress').length;
    const notStarted = milestones.filter((m)=>m.status === 'Not Started').length;
    const total = milestones.length;
    const completedPercentage = Math.round(completed / total * 100);
    const totalHours = milestones.reduce((sum, m)=>sum + (m.totalHours || 0), 0);
    const completedHours = milestones.reduce((sum, m)=>sum + (m.completedHours || 0), 0);
    const allAchievements = milestones.flatMap((m)=>m.achievements);
    const allResources = milestones.flatMap((m)=>m.resources);
    return {
        completed,
        inProgress,
        notStarted,
        total,
        completedPercentage,
        totalHours,
        completedHours,
        averageCompletionTime: completed > 0 ? completedHours / completed : 0,
        achievements: [
            ...new Set(allAchievements)
        ],
        resources: [
            ...new Set(allResources)
        ]
    };
}
function useMilestones() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(MilestoneContext);
    if (context === undefined) {
        throw new Error('useMilestones must be used within a MilestoneProvider');
    }
    return context;
}
}}),
"[project]/src/data/thesis.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
}}),
"[project]/src/context/ThesisContext.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ThesisProvider": (()=>ThesisProvider),
    "useThesis": (()=>useThesis)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$thesis$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/thesis.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const ThesisContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const ThesisProvider = ({ children })=>{
    const [thesisData, setThesisData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$thesis$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["thesisData"]);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        completed: 0,
        inProgress: 0,
        notStarted: 0,
        total: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$thesis$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["thesisData"].milestones.length,
        completedPercentage: 0
    });
    // Calculate stats whenever thesis milestones change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const completed = thesisData.milestones.filter((m)=>m.status === 'Completed').length;
        const inProgress = thesisData.milestones.filter((m)=>m.status === 'In Progress').length;
        const notStarted = thesisData.milestones.filter((m)=>m.status === 'Not Started').length;
        setStats({
            completed,
            inProgress,
            notStarted,
            total: thesisData.milestones.length,
            completedPercentage: Math.round(completed / thesisData.milestones.length * 100)
        });
    }, [
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const savedMilestones = localStorage.getItem('thesisMilestones');
            if (savedMilestones) {
                const parsedMilestones = JSON.parse(savedMilestones);
                // Apply saved statuses to thesis milestones
                setThesisData((prev)=>({
                        ...prev,
                        milestones: prev.milestones.map((milestone)=>{
                            const savedMilestone = parsedMilestones.find((m)=>m.id === milestone.id);
                            return savedMilestone ? {
                                ...milestone,
                                status: savedMilestone.status
                            } : milestone;
                        })
                    }));
            }
        } catch (error) {
            console.error('Error loading thesis data from localStorage:', error);
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ThesisContext.Provider, {
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
const useThesis = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ThesisContext);
    if (context === undefined) {
        throw new Error('useThesis must be used within a ThesisProvider');
    }
    return context;
};
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)");
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__3ee3b89f._.js.map