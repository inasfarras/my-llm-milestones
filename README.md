# My LLM Specialist Journey

A Next.js app that tracks a five-month learning path toward becoming an LLM specialist, including a roadmap, project milestones, and thesis progress.

## Features

- **Home** (`/`) shows completed, in-progress, and not-started counts plus an overall completion bar, calculated from the milestone list. Project cards are grouped by status.
- **Roadmap** (`/roadmap`) shows the six learning stages in `src/data/roadmap.ts` on a month-by-month timeline, with each stage's description, status, and technology tags.
- **Milestones** (`/milestones`) lists every project in `src/data/projects.ts`. Filter by status or by month, and switch between grid and list. Opening a project stays on this page and shows its description, tags, code snippets, and GitHub resource links.
- **Milestone editing** lets you change a project's status, and add, edit, or delete code snippets and GitHub resource links. Snippets can be typed in a CodeMirror editor or filled by dropping a text file. Syntax highlighting uses `react-syntax-highlighter`. These edits are saved in the browser with `localStorage`.
- **Thesis** (`/thesis`) shows the thesis title, abstract, supervisor, and department from `src/data/thesis.ts`, plus a timeline of research milestones. Status changes on that timeline are also saved in `localStorage`.
- **Dark responsive UI** uses a dark page theme, a desktop and mobile navigation bar, and fade and slide-up motion on the main sections.

Seeded roadmap stages:

1. Python Mastery (Month 1)
2. Machine Learning Basics (Month 2)
3. Deep Learning Foundations (Month 3)
4. LLM Fine-tuning (Month 4)
5. Retrieval-Augmented Generation (Month 4)
6. Multi-Agent AI Systems (Month 5)

The thesis record is titled "Designing a Reasoning-Augmented Retrieval System for Smarter Knowledge Retrieval in LLMs" and tracks proposal, literature review, system design, implementation, experiments, and writing.

## Tech stack

Versions below match `package.json`.

- [Next.js](https://nextjs.org/) 15.2.4 (App Router) and [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/) 5
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Framer Motion](https://www.framer.com/motion/) for section animations
- [Heroicons](https://heroicons.com/)
- [CodeMirror](https://codemirror.net/) (`@uiw/react-codemirror`) and `react-syntax-highlighter` for milestone code
- `react-dropzone` for loading a source file into a snippet
- React Context (`MilestoneContext` and `ThesisContext`) for milestone and thesis state

## Project structure

```
src/
├── app/                 # App Router pages: /, /roadmap, /milestones, /thesis
├── components/
│   ├── home/            # Home progress summary and project cards
│   ├── layout/          # Navigation
│   ├── milestones/      # Milestone filters, list, and detail view
│   ├── roadmap/         # Roadmap header and timeline
│   ├── thesis/          # Thesis header and timeline
│   ├── projects/        # Project and editor components
│   └── ui/              # Shared card
├── context/             # Milestone and thesis state
├── data/                # Seeded roadmap, projects, and thesis content
├── types/
└── utils/               # Language detection for dropped source files
```

## Getting started

Requires Node.js 18.18 or later (the version required by Next.js 15) and npm. The app does not read environment variables.

```bash
git clone https://github.com/inasfarras/my-llm-milestones.git
cd my-llm-milestones
npm install
npm run dev
```

`npm run dev` starts Next.js with Turbopack. Open [http://localhost:3000](http://localhost:3000).

| Script | What it does |
| --- | --- |
| `npm run dev` | Development server with Turbopack |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint (`next lint`) |

To change the seeded roadmap, projects, or thesis, edit `src/data/roadmap.ts`, `src/data/projects.ts`, or `src/data/thesis.ts`. Status, snippet, and resource changes made in the browser stay in that browser's `localStorage` and are not written back to those files.

## License

This project is licensed under the MIT License. Copyright (c) 2026 Farras Inas. See [LICENSE](LICENSE).
