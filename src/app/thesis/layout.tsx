import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Thesis - LLM Specialist Journey',
  description: 'Information about my master thesis on fine-tuning large language models.',
};

export default function ThesisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>{children}</>
  );
} 