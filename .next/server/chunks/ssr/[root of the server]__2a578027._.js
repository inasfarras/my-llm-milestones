module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/data/projects.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "projects": (()=>projects)
});
const projects = [
    // Month 1 - Foundations
    {
        id: 'textcrunch',
        title: 'TextCrunch',
        description: 'CLI app to tokenize text and count word frequencies.',
        status: 'Completed',
        tags: [
            'Python',
            'NLP',
            'CLI'
        ],
        githubLink: '#',
        detailsLink: '/milestones/textcrunch',
        month: 1,
        icon: '📝',
        keyLearnings: [
            'Python basics for text processing',
            'Command-line interface development',
            'Basic natural language processing techniques',
            'Word frequency analysis and tokenization'
        ]
    },
    {
        id: 'spamguard',
        title: 'SpamGuard',
        description: 'A text classifier for spam detection using scikit-learn.',
        status: 'Not Started',
        tags: [
            'Python',
            'Scikit-learn',
            'ML',
            'Classification'
        ],
        githubLink: '#',
        detailsLink: '/milestones/spamguard',
        month: 1,
        icon: '🛡️',
        keyLearnings: [
            'Machine learning basics',
            'Text classification techniques',
            'Feature extraction from text',
            'Model evaluation and performance metrics'
        ]
    },
    // Month 2 - Transformers & Prompting
    {
        id: 'quickchat',
        title: 'QuickChat',
        description: 'Build a chatbot using OpenAI API or HuggingFace Inference API.',
        status: 'In Progress',
        tags: [
            'Python',
            'FastAPI',
            'LLM',
            'API Integration'
        ],
        githubLink: '#',
        detailsLink: '/milestones/quickchat',
        month: 2,
        icon: '💬',
        keyLearnings: [
            'API integration with LLM services',
            'Basic LLM usage and limitations',
            'Simple frontend development',
            'Handling user inputs and responses'
        ]
    },
    {
        id: 'promptforge',
        title: 'PromptForge',
        description: 'Design few-shot and chain-of-thought prompt templates for smarter LLM outputs.',
        status: 'Not Started',
        tags: [
            'Prompt Engineering',
            'LLM',
            'Few-shot Learning'
        ],
        githubLink: '#',
        detailsLink: '/milestones/promptforge',
        month: 2,
        icon: '⚒️',
        keyLearnings: [
            'Prompt engineering techniques',
            'Few-shot learning patterns',
            'Chain-of-thought prompting',
            'Creative LLM usage strategies'
        ]
    },
    // Month 3 - Fine-Tuning & Thesis Proposal
    {
        id: 'finetunex',
        title: 'FineTuneX',
        description: 'Fine-tune a small model like T5 or DistilBERT for a specific task.',
        status: 'Completed',
        tags: [
            'Python',
            'PyTorch',
            'HuggingFace',
            'Fine-tuning'
        ],
        githubLink: '#',
        detailsLink: '/milestones/finetunex',
        month: 3,
        icon: '🔧',
        keyLearnings: [
            'HuggingFace Transformers library',
            'Model fine-tuning workflows',
            'Supervised learning for NLP tasks',
            'Performance optimization for transformer models'
        ]
    },
    {
        id: 'thesis-proposal',
        title: 'Thesis Proposal',
        description: 'Finalize and submit your Master Thesis Proposal related to Reasoning-Augmented Retrieval systems.',
        status: 'Not Started',
        tags: [
            'Research',
            'Academic Writing',
            'LLM'
        ],
        githubLink: '#',
        detailsLink: '/milestones/thesis-proposal',
        month: 3,
        icon: '📚',
        keyLearnings: [
            'Research writing skills',
            'Academic planning and methodology',
            'Literature review techniques',
            'Research question formulation'
        ]
    },
    // Month 4 - Model Deployment & RAG Systems
    {
        id: 'modelserve',
        title: 'ModelServe',
        description: 'Deploy your fine-tuned model using FastAPI.',
        status: 'Not Started',
        tags: [
            'Python',
            'FastAPI',
            'Deployment',
            'MLOps'
        ],
        githubLink: '#',
        detailsLink: '/milestones/modelserve',
        month: 4,
        icon: '🚀',
        keyLearnings: [
            'Model serving best practices',
            'API design and development',
            'Backend architecture fundamentals',
            'Deployment workflows'
        ]
    },
    {
        id: 'docuchat',
        title: 'DocuChat',
        description: 'Build a basic Retrieval-Augmented Generation (RAG) system using FAISS. Serve as a foundation for Reasoning-Augmented Retrieval.',
        status: 'Not Started',
        tags: [
            'Python',
            'RAG',
            'FAISS',
            'Vector Database'
        ],
        githubLink: '#',
        detailsLink: '/milestones/docuchat',
        month: 4,
        icon: '🔍',
        keyLearnings: [
            'Retrieval-Augmented Generation architecture',
            'Vector embeddings and similarity search',
            'FAISS for efficient vector storage',
            'Foundations for Reasoning-Augmented Retrieval systems'
        ]
    },
    // Month 5 - Reasoning-Augmented Retrieval & Thesis Finalization
    {
        id: 'agenthive',
        title: 'AgentHive',
        description: 'Design and build a Reasoning-Augmented Retrieval System using multi-agent architecture (Planner → Retriever → Reasoner → Synthesizer).',
        status: 'Not Started',
        tags: [
            'Python',
            'Multi-Agent',
            'LangChain',
            'Reasoning-Augmented Retrieval'
        ],
        githubLink: '#',
        detailsLink: '/milestones/agenthive',
        month: 5,
        icon: '🐝',
        keyLearnings: [
            'Reasoning before retrieval techniques',
            'Multi-agent system design for LLMs',
            'LangChain multi-agent architecture',
            'Advanced RAG system design'
        ]
    },
    {
        id: 'thesis-finalization',
        title: 'Thesis Finalization',
        description: 'Complete Master Thesis — Reasoning-Augmented Retrieval system experiments, writing, and defense preparation.',
        status: 'Not Started',
        tags: [
            'Research',
            'Academic Writing',
            'LLM',
            'Experimentation'
        ],
        githubLink: '#',
        detailsLink: '/milestones/thesis-finalization',
        month: 5,
        icon: '🎓',
        keyLearnings: [
            'Executing full research cycle',
            'Experimental design and evaluation',
            'Formal academic writing',
            'Thesis presentation skills'
        ]
    },
    // Bonus (Optional) Projects
    {
        id: 'qlora-finetuning',
        title: 'QLoRA Fine-tuning',
        description: 'Implement QLoRA fine-tuning on a bigger model (LLaMA 2 7B, Mistral).',
        status: 'Not Started',
        tags: [
            'Python',
            'QLoRA',
            'Parameter-Efficient Fine-tuning',
            'Large LMs'
        ],
        githubLink: '#',
        detailsLink: '/milestones/qlora-finetuning',
        month: 5,
        icon: '🔬',
        keyLearnings: [
            'Quantized low-rank adaptation techniques',
            'Working with larger language models',
            'Advanced fine-tuning strategies',
            'Memory optimization for LLM training'
        ],
        isBonus: true
    },
    {
        id: 'langchain-agent',
        title: 'LangChain Memory Agent',
        description: 'Build a LangChain Agent with a memory component (persistent knowledge).',
        status: 'Not Started',
        tags: [
            'Python',
            'LangChain',
            'Agent',
            'Memory Systems'
        ],
        githubLink: '#',
        detailsLink: '/milestones/langchain-agent',
        month: 5,
        icon: '🧠',
        keyLearnings: [
            'LangChain agent development',
            'Memory components for LLM applications',
            'Persistent knowledge management',
            'Advanced agent architecture'
        ],
        isBonus: true
    }
];
}}),
"[project]/src/context/ProjectContext.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ProjectProvider": (()=>ProjectProvider),
    "useProjects": (()=>useProjects)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/projects.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const ProjectContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const ProjectProvider = ({ children })=>{
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"]);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        completed: 0,
        inProgress: 0,
        notStarted: 0,
        total: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"].length,
        completedPercentage: 0
    });
    // Calculate stats whenever projects change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const completed = projects.filter((p)=>p.status === 'Completed').length;
        const inProgress = projects.filter((p)=>p.status === 'In Progress').length;
        const notStarted = projects.filter((p)=>p.status === 'Not Started').length;
        setStats({
            completed,
            inProgress,
            notStarted,
            total: projects.length,
            completedPercentage: Math.round(completed / projects.length * 100)
        });
    }, [
        projects
    ]);
    const updateProjectStatus = (projectId, newStatus)=>{
        setProjects((prevProjects)=>prevProjects.map((project)=>project.id === projectId ? {
                    ...project,
                    status: newStatus
                } : project));
        // Store updated projects in localStorage with current state
        try {
            const updatedProjects = projects.map((p)=>p.id === projectId ? {
                    ...p,
                    status: newStatus
                } : p);
            localStorage.setItem('projectStatuses', JSON.stringify(updatedProjects.map((p)=>({
                    id: p.id,
                    status: p.status
                }))));
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
    };
    // Load saved statuses from localStorage on initial load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const savedStatuses = localStorage.getItem('projectStatuses');
            if (savedStatuses) {
                const parsedStatuses = JSON.parse(savedStatuses);
                // Apply saved statuses to projects
                setProjects((prevProjects)=>prevProjects.map((project)=>{
                        const savedStatus = parsedStatuses.find((s)=>s.id === project.id);
                        return savedStatus ? {
                            ...project,
                            status: savedStatus.status
                        } : project;
                    }));
            }
        } catch (error) {
            console.error('Error loading from localStorage:', error);
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectContext.Provider, {
        value: {
            projects,
            updateProjectStatus,
            stats
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/ProjectContext.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
};
const useProjects = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ProjectContext);
    if (context === undefined) {
        throw new Error('useProjects must be used within a ProjectProvider');
    }
    return context;
};
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

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__2a578027._.js.map