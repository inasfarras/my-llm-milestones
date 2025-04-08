import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Learning Roadmap - LLM Specialist Journey',
  description: 'My 5-month roadmap to becoming an LLM specialist through hands-on projects and research.',
};

export default function RoadmapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>{children}</>
  );
} 