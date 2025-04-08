
import { Status } from '@/components/ui/Card';

export interface Project {
  id: string;
  title: string;
  description: string;
  status: Status;
  githubLink?: string;
  tags: string[];
  detailsLink?: string;
  month: number;
  icon: string;
  keyLearnings?: string[];
  isBonus?: boolean; // <-- NEW: to mark extra optional projects
}

export const projects: Project[] = [
  // Month 1 - Foundations
  {
    id: 'textcrunch',
    title: 'TextCrunch',
    description: 'CLI app to tokenize text and count word frequencies.',
    status: 'Completed',
    tags: ['Python', 'NLP', 'CLI'],
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
    tags: ['Python', 'Scikit-learn', 'ML', 'Classification'],
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
    tags: ['Python', 'FastAPI', 'LLM', 'API Integration'],
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
    tags: ['Prompt Engineering', 'LLM', 'Few-shot Learning'],
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
    tags: ['Python', 'PyTorch', 'HuggingFace', 'Fine-tuning'],
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
    tags: ['Research', 'Academic Writing', 'LLM'],
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
    tags: ['Python', 'FastAPI', 'Deployment', 'MLOps'],
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
    tags: ['Python', 'RAG', 'FAISS', 'Vector Database'],
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
    tags: ['Python', 'Multi-Agent', 'LangChain', 'Reasoning-Augmented Retrieval'],
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
    tags: ['Research', 'Academic Writing', 'LLM', 'Experimentation'],
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
    tags: ['Python', 'QLoRA', 'Parameter-Efficient Fine-tuning', 'Large LMs'],
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
    tags: ['Python', 'LangChain', 'Agent', 'Memory Systems'],
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
