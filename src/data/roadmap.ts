export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  status: 'Completed' | 'In Progress' | 'Not Started';
  technologies: string[];
  github: string;
  month: string;
  projectId: string; // link to the stage, not the small projects
}

export const roadmapData: RoadmapItem[] = [
  {
    id: "python-mastery",
    title: "Python Mastery",
    description: "Master core Python coding, OOP, file handling, web scraping, and APIs through multiple projects.",
    status: "In Progress",
    technologies: ["Python", "OOP", "APIs", "File I/O"],
    github: "",
    month: "Month 1",
    projectId: "python-mastery"
  },
  {
    id: "ml-basics",
    title: "Machine Learning Basics",
    description: "Learn machine learning fundamentals: data preprocessing, model training, evaluation.",
    status: "Not Started",
    technologies: ["scikit-learn", "Pandas", "ML"],
    github: "",
    month: "Month 2",
    projectId: "ml-basics"
  },
  {
    id: "deep-learning",
    title: "Deep Learning Foundations",
    description: "Build and train deep learning models using PyTorch, CNNs, and RNNs.",
    status: "Not Started",
    technologies: ["PyTorch", "Neural Networks"],
    github: "",
    month: "Month 3",
    projectId: "deep-learning"
  },
  {
    id: "llm-finetuning",
    title: "LLM Fine-tuning",
    description: "Load, fine-tune, and optimize transformer models like GPT-2 with HuggingFace.",
    status: "Not Started",
    technologies: ["Transformers", "HuggingFace", "Fine-tuning"],
    github: "",
    month: "Month 4",
    projectId: "llm-finetuning"
  },
  {
    id: "rag-systems",
    title: "Retrieval-Augmented Generation (RAG)",
    description: "Implement RAG-based QA systems using vector databases and LLMs.",
    status: "Not Started",
    technologies: ["RAG", "Vector Databases", "LangChain"],
    github: "",
    month: "Month 4",
    projectId: "rag-systems"
  },
  {
    id: "ai-agents",
    title: "Multi-Agent AI Systems",
    description: "Build AI agents that reason, retrieve, plan, and collaborate using LangChain/AutoGen.",
    status: "Not Started",
    technologies: ["Multi-Agent AI", "LangChain", "AutoGen"],
    github: "",
    month: "Month 5",
    projectId: "ai-agents"
  }
];
