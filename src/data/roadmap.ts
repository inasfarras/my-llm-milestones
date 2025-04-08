export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  status: 'Completed' | 'In Progress' | 'Not Started';
  technologies: string[];
  github: string;
  month: string;
  projectId: string;
}

export const roadmapData: RoadmapItem[] = [
  {
    id: "textcrunch-roadmap",
    title: "TextCrunch",
    description: "Build a CLI app to tokenize text and count word frequencies. Focus on raw Python skills without AI assistance.",
    status: "Completed",
    technologies: ["Python", "NLP Basics"],
    github: "",
    month: "Month 1",
    projectId: "textcrunch"
  },
  {
    id: "spamguard-roadmap",
    title: "SpamGuard",
    description: "Train a text classifier to detect spam using scikit-learn. Code manually first, then compare with AI suggestions.",
    status: "Not Started",
    technologies: ["Python", "Scikit-learn", "Machine Learning"],
    github: "",
    month: "Month 1",
    projectId: "spamguard"
  },
  {
    id: "quickchat-roadmap",
    title: "QuickChat",
    description: "Build a simple chatbot using OpenAI API or HuggingFace API. Focus on clean API handling and error management in Python.",
    status: "In Progress",
    technologies: ["Python", "OpenAI API", "HuggingFace API"],
    github: "",
    month: "Month 2",
    projectId: "quickchat"
  },
  {
    id: "promptforge-roadmap",
    title: "PromptForge",
    description: "Design few-shot and chain-of-thought prompt templates for smarter LLM outputs. Study prompt engineering best practices.",
    status: "Not Started",
    technologies: ["Prompt Engineering"],
    github: "",
    month: "Month 2",
    projectId: "promptforge"
  },
  {
    id: "pythonskill-rebuild-roadmap",
    title: "Python Skill Rebuild",
    description: "Daily hands-on Python practice (no AI allowed) focusing on OOP, API calling, error handling, and data pipelines.",
    status: "Not Started",
    technologies: ["Python"],
    github: "",
    month: "Month 3",
    projectId: "pythonskill-rebuild"
  },
  {
    id: "cloud-db-intro-roadmap",
    title: "Cloud Database Basics",
    description: "Learn how to create and connect AWS RDS PostgreSQL instances. Understand basic cloud database principles.",
    status: "Not Started",
    technologies: ["AWS", "PostgreSQL", "Cloud Database"],
    github: "",
    month: "Month 3",
    projectId: "cloud-db-intro"
  },
  {
    id: "finetunex-roadmap",
    title: "FineTuneX",
    description: "Fine-tune a small model like T5 or DistilBERT for a specific task. Understand the fine-tuning process deeply.",
    status: "Completed",
    technologies: ["HuggingFace", "Fine-tuning", "Transformers"],
    github: "",
    month: "Month 3",
    projectId: "finetunex"
  },
  {
    id: "thesis-proposal-roadmap",
    title: "Master Thesis Proposal",
    description: "Research and submit official Master Thesis Proposal related to LLM specialization (Multi-Agent Smart RAG System).",
    status: "Not Started",
    technologies: ["Research Writing"],
    github: "",
    month: "Month 3",
    projectId: "thesis-proposal"
  },
  {
    id: "modelserve-roadmap",
    title: "ModelServe",
    description: "Deploy your fine-tuned model using FastAPI for API serving. Focus on clean backend service design.",
    status: "Not Started",
    technologies: ["FastAPI", "Model Serving"],
    github: "",
    month: "Month 4",
    projectId: "modelserve"
  },
  {
    id: "docuchat-roadmap",
    title: "DocuChat",
    description: "Build a simple RAG-based document QA bot using FAISS and LLMs. Focus on retrieval accuracy and dynamic document updates.",
    status: "Not Started",
    technologies: ["RAG", "FAISS", "Python"],
    github: "",
    month: "Month 4",
    projectId: "docuchat"
  },
  {
    id: "agenthive-roadmap",
    title: "AgentHive",
    description: "Build a Multi-Agent Smart RAG System where agents collaborate: Planner → Retriever → Reasoner → Synthesizer.",
    status: "Not Started",
    technologies: ["LangChain", "Multi-Agent Systems", "Advanced RAG"],
    github: "",
    month: "Month 5",
    projectId: "agenthive"
  },
  {
    id: "software-engineering-mastery-roadmap",
    title: "Software Engineering Concept Mastery",
    description: "Study system design, clean code, architecture patterns, and testing strategies for solid backend and LLM projects.",
    status: "Not Started",
    technologies: ["Software Architecture", "Clean Code", "Design Patterns"],
    github: "",
    month: "Month 5",
    projectId: "software-engineering-mastery"
  },
  {
    id: "thesis-finalization-roadmap",
    title: "Master Thesis Finalization",
    description: "Complete experiments, writing, and defense preparation for Master Thesis (Multi-Agent Smart Retrieval System).",
    status: "Not Started",
    technologies: ["Research", "Experimentation", "Writing"],
    github: "",
    month: "Month 5",
    projectId: "thesis-finalization"
  }
];
