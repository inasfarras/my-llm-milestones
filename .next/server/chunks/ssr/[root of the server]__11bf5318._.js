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
    "milestones": (()=>milestones)
});
const milestones = [
    // Month 1: Python Mastery
    {
        id: 'calculator-app',
        title: 'Calculator App',
        description: 'Basic CLI calculator app (add, subtract, multiply, divide).',
        status: 'Completed',
        tags: [
            'Python',
            'CLI'
        ],
        githubLink: '',
        detailsLink: '/milestones/calculator-app',
        month: 1,
        icon: '➗',
        roadmapId: 'python-mastery',
        codeSnippets: [
            {
                title: 'Basic Calculator Function',
                language: 'python',
                code: `def calculate(num1, num2, operation):
    if operation == '+':
        return num1 + num2
    elif operation == '-':
        return num1 - num2
    elif operation == '*':
        return num1 * num2
    elif operation == '/':
        if num2 == 0:
            return "Error: Division by zero"
        return num1 / num2
    else:
        return "Error: Invalid operation"`
            },
            {
                title: 'Main CLI Interface',
                language: 'python',
                code: `def main():
    print("Welcome to Calculator App")
    while True:
        try:
            num1 = float(input("Enter first number: "))
            num2 = float(input("Enter second number: "))
            op = input("Enter operation (+, -, *, /): ")
            
            result = calculate(num1, num2, op)
            print(f"Result: {result}")
            
            again = input("Calculate again? (y/n): ")
            if again.lower() != 'y':
                break
        except ValueError:
            print("Error: Please enter valid numbers")
            
if __name__ == "__main__":
    main()`
            }
        ],
        githubResources: [
            {
                title: "Python Calculator Repository",
                description: "Source code for the calculator application with additional features",
                url: "https://github.com/example/python-calculator"
            },
            {
                title: "Python CLI Best Practices",
                description: "Guide for building command-line interfaces in Python",
                url: "https://github.com/example/python-cli-practices"
            }
        ]
    },
    {
        id: 'todo-app',
        title: 'To-Do List App',
        description: 'CLI app to manage tasks with add/remove/view features.',
        status: 'Completed',
        tags: [
            'Python',
            'CLI'
        ],
        githubLink: '',
        detailsLink: '/milestones/todo-app',
        month: 1,
        icon: '📝',
        roadmapId: 'python-mastery'
    },
    {
        id: 'temperature-converter',
        title: 'Temperature Converter',
        description: 'OOP-based CLI app to convert Celsius, Fahrenheit, Kelvin.',
        status: 'Completed',
        tags: [
            'Python',
            'OOP'
        ],
        githubLink: '',
        detailsLink: '/milestones/temperature-converter',
        month: 1,
        icon: '🌡️',
        roadmapId: 'python-mastery'
    },
    {
        id: 'grade-tracker',
        title: 'Student Grade Tracker',
        description: 'Track student grades and save/load data to JSON files.',
        status: 'Completed',
        tags: [
            'Python',
            'OOP',
            'JSON'
        ],
        githubLink: '',
        detailsLink: '/milestones/grade-tracker',
        month: 1,
        icon: '🎓',
        roadmapId: 'python-mastery'
    },
    {
        id: 'bakery-system',
        title: 'Bakery Management System',
        description: 'Advanced OOP project to manage customers, products, orders, and transactions.',
        status: 'Completed',
        tags: [
            'Python',
            'OOP',
            'Inventory'
        ],
        githubLink: '',
        detailsLink: '/milestones/bakery-system',
        month: 1,
        icon: '🍞',
        roadmapId: 'python-mastery'
    },
    {
        id: 'news-scraper',
        title: 'News Scraper',
        description: 'Web scraper to fetch latest news headlines using BeautifulSoup.',
        status: 'Not Started',
        tags: [
            'Python',
            'Web Scraping'
        ],
        githubLink: '',
        detailsLink: '/milestones/news-scraper',
        month: 1,
        icon: '📰',
        roadmapId: 'python-mastery'
    },
    {
        id: 'weather-api-app',
        title: 'Weather API App',
        description: 'Fetch real-time weather data using OpenWeatherMap API.',
        status: 'Not Started',
        tags: [
            'Python',
            'API'
        ],
        githubLink: '',
        detailsLink: '/milestones/weather-api-app',
        month: 1,
        icon: '🌦️',
        roadmapId: 'python-mastery'
    },
    // Month 2: ML Basics
    {
        id: 'titanic-ml',
        title: 'Titanic Survival Predictor',
        description: 'Build an ML model to predict survival on the Titanic dataset.',
        status: 'Not Started',
        tags: [
            'ML',
            'Pandas',
            'scikit-learn'
        ],
        githubLink: '',
        detailsLink: '/milestones/titanic-ml',
        month: 2,
        icon: '🚢',
        roadmapId: 'ml-basics'
    },
    {
        id: 'spam-classifier',
        title: 'Spam Classifier',
        description: 'Train a logistic regression model to classify spam emails.',
        status: 'Not Started',
        tags: [
            'ML',
            'Classification'
        ],
        githubLink: '',
        detailsLink: '/milestones/spam-classifier',
        month: 2,
        icon: '📧',
        roadmapId: 'ml-basics'
    },
    // Month 3: Deep Learning
    {
        id: 'mnist-classifier',
        title: 'MNIST Handwritten Digit Classifier',
        description: 'Train a neural network to classify handwritten digits.',
        status: 'Not Started',
        tags: [
            'PyTorch',
            'Deep Learning'
        ],
        githubLink: '',
        detailsLink: '/milestones/mnist-classifier',
        month: 3,
        icon: '✍️',
        roadmapId: 'deep-learning'
    },
    {
        id: 'cats-dogs-cnn',
        title: 'Cats vs Dogs Image Classifier',
        description: 'Build a CNN to classify images of cats and dogs.',
        status: 'Not Started',
        tags: [
            'PyTorch',
            'CNN'
        ],
        githubLink: '',
        detailsLink: '/milestones/cats-dogs-cnn',
        month: 3,
        icon: '🐶',
        roadmapId: 'deep-learning'
    },
    // Month 4: LLM Fine-tuning
    {
        id: 'gpt2-finetune',
        title: 'Fine-Tune GPT-2',
        description: 'Fine-tune a GPT-2 model on a custom text dataset.',
        status: 'Not Started',
        tags: [
            'Transformers',
            'HuggingFace'
        ],
        githubLink: '',
        detailsLink: '/milestones/gpt2-finetune',
        month: 4,
        icon: '🧠',
        roadmapId: 'llm-finetuning',
        githubResources: [
            {
                title: "Project Repository",
                description: "Main GitHub repository for the LLM Learning Journey project",
                url: "https://github.com/inasfarras/my-llm-milestones"
            },
            {
                title: "Live Demo",
                description: "Live deployment of the project on Vercel",
                url: "https://my-llm-milestones.vercel.app"
            }
        ]
    },
    // Month 4: RAG Systems
    {
        id: 'rag-bot',
        title: 'RAG QA Chatbot',
        description: 'Build a chatbot that retrieves documents using vector embeddings.',
        status: 'Not Started',
        tags: [
            'RAG',
            'FAISS',
            'LangChain'
        ],
        githubLink: '',
        detailsLink: '/milestones/rag-bot',
        month: 4,
        icon: '📄',
        roadmapId: 'rag-systems'
    },
    // Month 5: AI Agents
    {
        id: 'multi-agent-system',
        title: 'Multi-Agent Reasoning System',
        description: 'Create AI agents that reason, retrieve, and solve tasks collaboratively.',
        status: 'Not Started',
        tags: [
            'LangChain',
            'Multi-Agent'
        ],
        githubLink: '',
        detailsLink: '/milestones/multi-agent-system',
        month: 5,
        icon: '🤖',
        roadmapId: 'ai-agents'
    }
];
}}),
"[project]/src/context/MilestoneContext.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MilestoneProvider": (()=>MilestoneProvider),
    "ProjectProvider": (()=>ProjectProvider),
    "useMilestones": (()=>useMilestones),
    "useProjects": (()=>useProjects)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/projects.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const MilestoneContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const MilestoneProvider = ({ children })=>{
    const [milestones, setMilestones] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["milestones"]);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        completed: 0,
        inProgress: 0,
        notStarted: 0,
        total: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["milestones"].length,
        completedPercentage: 0
    });
    // Calculate stats whenever milestones change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const completed = milestones.filter((p)=>p.status === 'Completed').length;
        const inProgress = milestones.filter((p)=>p.status === 'In Progress').length;
        const notStarted = milestones.filter((p)=>p.status === 'Not Started').length;
        setStats({
            completed,
            inProgress,
            notStarted,
            total: milestones.length,
            completedPercentage: Math.round(completed / milestones.length * 100)
        });
    }, [
        milestones
    ]);
    const updateMilestoneStatus = (milestoneId, newStatus)=>{
        setMilestones((prevMilestones)=>prevMilestones.map((milestone)=>milestone.id === milestoneId ? {
                    ...milestone,
                    status: newStatus
                } : milestone));
        // Store updated milestones in localStorage with current state
        try {
            const updatedMilestones = milestones.map((m)=>m.id === milestoneId ? {
                    ...m,
                    status: newStatus
                } : m);
            localStorage.setItem('milestoneStatuses', JSON.stringify(updatedMilestones.map((m)=>({
                    id: m.id,
                    status: m.status
                }))));
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
    };
    // Add a new code snippet to a milestone
    const addCodeSnippet = (milestoneId, snippet)=>{
        setMilestones((prevMilestones)=>{
            // Create the updated milestones array
            const updatedMilestones = prevMilestones.map((milestone)=>{
                if (milestone.id === milestoneId) {
                    const codeSnippets = milestone.codeSnippets ? [
                        ...milestone.codeSnippets,
                        snippet
                    ] : [
                        snippet
                    ];
                    return {
                        ...milestone,
                        codeSnippets
                    };
                }
                return milestone;
            });
            // Update localStorage with the new milestones state
            try {
                localStorage.setItem('milestoneCodeSnippets', JSON.stringify(updatedMilestones.filter((m)=>m.codeSnippets && m.codeSnippets.length > 0).map((m)=>({
                        id: m.id,
                        codeSnippets: m.codeSnippets
                    }))));
            } catch (error) {
                console.error('Error saving code snippets to localStorage:', error);
            }
            // Return the updated state
            return updatedMilestones;
        });
    };
    // Edit an existing code snippet
    const editCodeSnippet = (milestoneId, snippetIndex, updatedSnippet)=>{
        setMilestones((prevMilestones)=>{
            // Create the updated milestones array
            const updatedMilestones = prevMilestones.map((milestone)=>{
                if (milestone.id === milestoneId && milestone.codeSnippets) {
                    const newSnippets = [
                        ...milestone.codeSnippets
                    ];
                    newSnippets[snippetIndex] = updatedSnippet;
                    return {
                        ...milestone,
                        codeSnippets: newSnippets
                    };
                }
                return milestone;
            });
            // Update localStorage with the new milestones state
            try {
                localStorage.setItem('milestoneCodeSnippets', JSON.stringify(updatedMilestones.filter((m)=>m.codeSnippets && m.codeSnippets.length > 0).map((m)=>({
                        id: m.id,
                        codeSnippets: m.codeSnippets
                    }))));
            } catch (error) {
                console.error('Error saving edited code snippet to localStorage:', error);
            }
            // Return the updated state
            return updatedMilestones;
        });
    };
    // Delete a code snippet
    const deleteCodeSnippet = (milestoneId, snippetIndex)=>{
        setMilestones((prevMilestones)=>{
            // Create the updated milestones array
            const updatedMilestones = prevMilestones.map((milestone)=>{
                if (milestone.id === milestoneId && milestone.codeSnippets) {
                    const newSnippets = milestone.codeSnippets.filter((_, i)=>i !== snippetIndex);
                    return {
                        ...milestone,
                        codeSnippets: newSnippets.length > 0 ? newSnippets : undefined
                    };
                }
                return milestone;
            });
            // Update localStorage with the new milestones state
            try {
                localStorage.setItem('milestoneCodeSnippets', JSON.stringify(updatedMilestones.filter((m)=>m.codeSnippets && m.codeSnippets.length > 0).map((m)=>({
                        id: m.id,
                        codeSnippets: m.codeSnippets
                    }))));
            } catch (error) {
                console.error('Error saving code snippets after deletion to localStorage:', error);
            }
            // Return the updated state
            return updatedMilestones;
        });
    };
    // Add a new GitHub resource to a milestone
    const addGithubResource = (milestoneId, resource)=>{
        setMilestones((prevMilestones)=>{
            // Create the updated milestones array
            const updatedMilestones = prevMilestones.map((milestone)=>{
                if (milestone.id === milestoneId) {
                    const githubResources = milestone.githubResources ? [
                        ...milestone.githubResources,
                        resource
                    ] : [
                        resource
                    ];
                    return {
                        ...milestone,
                        githubResources
                    };
                }
                return milestone;
            });
            // Update localStorage with the new milestones state
            try {
                localStorage.setItem('milestoneGithubResources', JSON.stringify(updatedMilestones.filter((m)=>m.githubResources && m.githubResources.length > 0).map((m)=>({
                        id: m.id,
                        githubResources: m.githubResources
                    }))));
            } catch (error) {
                console.error('Error saving GitHub resources to localStorage:', error);
            }
            // Return the updated state
            return updatedMilestones;
        });
    };
    // Load saved statuses from localStorage on initial load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            // Load status information
            const savedStatuses = localStorage.getItem('milestoneStatuses') || localStorage.getItem('projectStatuses');
            const savedCodeSnippets = localStorage.getItem('milestoneCodeSnippets');
            const savedGithubResources = localStorage.getItem('milestoneGithubResources');
            let updatedMilestones = [
                ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["milestones"]
            ];
            // Apply saved statuses
            if (savedStatuses) {
                const parsedStatuses = JSON.parse(savedStatuses);
                updatedMilestones = updatedMilestones.map((milestone)=>{
                    const savedStatus = parsedStatuses.find((s)=>s.id === milestone.id);
                    return savedStatus ? {
                        ...milestone,
                        status: savedStatus.status
                    } : milestone;
                });
            }
            // Apply saved code snippets
            if (savedCodeSnippets) {
                const parsedCodeSnippets = JSON.parse(savedCodeSnippets);
                updatedMilestones = updatedMilestones.map((milestone)=>{
                    const saved = parsedCodeSnippets.find((s)=>s.id === milestone.id);
                    return saved ? {
                        ...milestone,
                        codeSnippets: saved.codeSnippets
                    } : milestone;
                });
            }
            // Apply saved GitHub resources
            if (savedGithubResources) {
                const parsedGithubResources = JSON.parse(savedGithubResources);
                updatedMilestones = updatedMilestones.map((milestone)=>{
                    const saved = parsedGithubResources.find((s)=>s.id === milestone.id);
                    return saved ? {
                        ...milestone,
                        githubResources: saved.githubResources
                    } : milestone;
                });
            }
            setMilestones(updatedMilestones);
        } catch (error) {
            console.error('Error loading from localStorage:', error);
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MilestoneContext.Provider, {
        value: {
            milestones,
            updateMilestoneStatus,
            addCodeSnippet,
            editCodeSnippet,
            deleteCodeSnippet,
            addGithubResource,
            stats
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/MilestoneContext.tsx",
        lineNumber: 230,
        columnNumber: 5
    }, this);
};
const ProjectProvider = MilestoneProvider;
const useMilestones = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(MilestoneContext);
    if (context === undefined) {
        throw new Error('useMilestones must be used within a MilestoneProvider');
    }
    return context;
};
const useProjects = useMilestones;
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

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__11bf5318._.js.map