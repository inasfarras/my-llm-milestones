import Navigation from '@/components/layout/Navigation';
import RoadmapHeader from '@/components/roadmap/RoadmapHeader';
import RoadmapTimeline from '@/components/roadmap/RoadmapTimeline';

export default function RoadmapPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="max-w-7xl mx-auto pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Background elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background-dark to-background-darker" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(139,92,246,0.08),transparent_60%)]" />
          
          {/* Background dots/grid pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{ 
              backgroundImage: 'radial-gradient(#666 1px, transparent 1px)', 
              backgroundSize: '20px 20px' 
            }}></div>
          </div>
          
          {/* Accent glows */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary opacity-10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary opacity-10 rounded-full filter blur-3xl"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <RoadmapHeader />
          <RoadmapTimeline />
        </div>
      </div>
    </main>
  );
} 