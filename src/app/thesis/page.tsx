'use client';

import Navigation from '@/components/layout/Navigation';
import ThesisHeader from '@/components/thesis/ThesisHeader';
import ThesisTimeline from '@/components/thesis/ThesisTimeline';
import { useThesis } from '@/context/ThesisContext';

export default function ThesisPage() {
  const { thesisData } = useThesis();
  
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="max-w-7xl mx-auto pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Background elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background-dark to-background-darker" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.12),transparent_60%)]" />
          
          {/* Background dots/grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ 
              backgroundImage: 'radial-gradient(#666 1px, transparent 1px)', 
              backgroundSize: '20px 20px' 
            }}></div>
          </div>
          
          {/* Accent glows */}
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-secondary opacity-10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-primary opacity-10 rounded-full filter blur-3xl"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col gap-8">
          <ThesisHeader thesisInfo={thesisData} />
          
          <div className="max-w-5xl mx-auto mt-4 w-full">
            <ThesisTimeline milestones={thesisData.milestones} />
          </div>
        </div>
      </div>
    </main>
  );
} 