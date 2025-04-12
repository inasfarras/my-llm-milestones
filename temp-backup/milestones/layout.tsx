import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Milestones - LLM Specialist Journey',
  description: 'Tracking progress through projects and learning milestones on the journey to becoming an LLM specialist.',
};

export default function MilestonesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>{children}</>
  );
} 