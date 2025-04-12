import { Status } from '@/components/ui/Card';

export interface Milestone {
  id: string;
  title: string;
  description: string;
  status: Status;
  githubLink?: string;
  tags: string[];
  detailsLink?: string;
  month: number;
  icon: string;
  roadmapId: string; // NEW: connect project to big roadmap
  codeSnippets?: Array<{
    title: string;
    language: string;
    code: string;
  }>;
  githubResources?: Array<{
    title: string;
    description: string;
    url: string;
  }>;
}

export const milestones: Milestone[] = [
  // Month 1: Python Mastery
  {
    id: 'calculator-app',
    title: 'Calculator App',
    description: 'Basic CLI calculator app (add, subtract, multiply, divide).',
    status: 'Completed',
    tags: ['Python', 'CLI'],
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
    tags: ['Python', 'CLI'],
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
    tags: ['Python', 'OOP'],
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
    tags: ['Python', 'OOP', 'JSON'],
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
    tags: ['Python', 'OOP', 'Inventory'],
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
    tags: ['Python', 'Web Scraping'],
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
    tags: ['Python', 'API'],
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
    tags: ['ML', 'Pandas', 'scikit-learn'],
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
    tags: ['ML', 'Classification'],
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
    tags: ['PyTorch', 'Deep Learning'],
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
    tags: ['PyTorch', 'CNN'],
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
    tags: ['Transformers', 'HuggingFace'],
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
    tags: ['RAG', 'FAISS', 'LangChain'],
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
    tags: ['LangChain', 'Multi-Agent'],
    githubLink: '',
    detailsLink: '/milestones/multi-agent-system',
    month: 5,
    icon: '🤖',
    roadmapId: 'ai-agents'
  }
];
