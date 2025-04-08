export interface ThesisMilestone {
  id: string;
  title: string;
  description: string;
  date: string;
  status: 'Completed' | 'In Progress' | 'Not Started';
}

export interface ThesisInfo {
  title: string;
  description: string;
  supervisor: string;
  department: string;
  pdfLink?: string;
  milestones: ThesisMilestone[];
}

export const thesisData: ThesisInfo = {
  title: "Designing a Reasoning-Augmented Retrieval System for Smarter Knowledge Retrieval in LLMs",
  description: "This thesis explores the development of a Reasoning-Augmented Retrieval (ReAR) system that enhances traditional retrieval-augmented generation (RAG) methods by incorporating planning and reasoning processes prior to document retrieval. The proposed framework aims to improve the accuracy, relevance, and reasoning ability of large language models when answering complex and knowledge-intensive queries.",
  supervisor: "黃振榮 Chenn-Jung Huang",
  department: "Department of Computer Science and Information Engineering",
  pdfLink: "#", // Replace with actual link when available
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
