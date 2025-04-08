(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_9c8d9b56._.js", {

"[project]/src/data/projects.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/context/ProjectContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ProjectProvider": (()=>ProjectProvider),
    "useProjects": (()=>useProjects)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/projects.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const ProjectContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const ProjectProvider = ({ children })=>{
    _s();
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"]);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        completed: 0,
        inProgress: 0,
        notStarted: 0,
        total: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].length,
        completedPercentage: 0
    });
    // Calculate stats whenever projects change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectProvider.useEffect": ()=>{
            const completed = projects.filter({
                "ProjectProvider.useEffect": (p)=>p.status === 'Completed'
            }["ProjectProvider.useEffect"]).length;
            const inProgress = projects.filter({
                "ProjectProvider.useEffect": (p)=>p.status === 'In Progress'
            }["ProjectProvider.useEffect"]).length;
            const notStarted = projects.filter({
                "ProjectProvider.useEffect": (p)=>p.status === 'Not Started'
            }["ProjectProvider.useEffect"]).length;
            setStats({
                completed,
                inProgress,
                notStarted,
                total: projects.length,
                completedPercentage: Math.round(completed / projects.length * 100)
            });
        }
    }["ProjectProvider.useEffect"], [
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectProvider.useEffect": ()=>{
            try {
                const savedStatuses = localStorage.getItem('projectStatuses');
                if (savedStatuses) {
                    const parsedStatuses = JSON.parse(savedStatuses);
                    // Apply saved statuses to projects
                    setProjects({
                        "ProjectProvider.useEffect": (prevProjects)=>prevProjects.map({
                                "ProjectProvider.useEffect": (project)=>{
                                    const savedStatus = parsedStatuses.find({
                                        "ProjectProvider.useEffect.savedStatus": (s)=>s.id === project.id
                                    }["ProjectProvider.useEffect.savedStatus"]);
                                    return savedStatus ? {
                                        ...project,
                                        status: savedStatus.status
                                    } : project;
                                }
                            }["ProjectProvider.useEffect"])
                    }["ProjectProvider.useEffect"]);
                }
            } catch (error) {
                console.error('Error loading from localStorage:', error);
            }
        }
    }["ProjectProvider.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectContext.Provider, {
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
_s(ProjectProvider, "rT3ZE2x/yQ8EjJCBfjkQuVv3g+4=");
_c = ProjectProvider;
const useProjects = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ProjectContext);
    if (context === undefined) {
        throw new Error('useProjects must be used within a ProjectProvider');
    }
    return context;
};
_s1(useProjects, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ProjectProvider");
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

//# sourceMappingURL=_9c8d9b56._.js.map