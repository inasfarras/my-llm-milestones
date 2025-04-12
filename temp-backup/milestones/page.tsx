import Navigation from '@/components/layout/Navigation';
import MilestonesGrid from '@/components/milestones/MilestonesGrid';

export default function MilestonesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="max-w-7xl mx-auto pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Background elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background-dark to-background-darker" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.08),transparent_60%)]" />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-text-primary mb-6">Project Milestones</h1>
            <p className="text-xl text-primary font-medium mb-4">Detailed View of All Learning Projects</p>
            <p className="text-text-secondary mb-8">
              A comprehensive collection of all projects completed throughout my LLM specialist journey. 
              While the roadmap page shows the big picture, this page displays every individual project with detailed information.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-success"></div>
                <span className="text-sm text-text-secondary">Completed</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                <span className="text-sm text-text-secondary">In Progress</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-gray-600"></div>
                <span className="text-sm text-text-secondary">Not Started</span>
              </div>
            </div>
            
            <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg inline-block">
              <p className="text-sm text-text-secondary">
                <span className="text-primary font-semibold">Pro Tip:</span> Use the filters below to view projects by status or month
              </p>
            </div>
          </div>

          <MilestonesGrid />
        </div>
      </div>
    </main>
  );
} 