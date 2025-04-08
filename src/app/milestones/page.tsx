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
            <h1 className="text-4xl font-bold text-text-primary mb-6">LLM Specialist Journey</h1>
            <p className="text-xl text-primary font-medium mb-4">5-Month Learning Roadmap</p>
            <p className="text-text-secondary mb-8">
              Tracking my progress through hands-on projects that build real skills in LLM development, 
              fine-tuning, and application. This journey spans 5 months of intensive learning milestones.
            </p>
            
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="h-3 w-3 rounded-full bg-success"></div>
              <span className="text-sm text-text-secondary">Completed</span>
              
              <div className="h-3 w-3 rounded-full bg-primary ml-6"></div>
              <span className="text-sm text-text-secondary">In Progress</span>
              
              <div className="h-3 w-3 rounded-full bg-gray-600 ml-6"></div>
              <span className="text-sm text-text-secondary">Not Started</span>
            </div>

            <div className="w-full bg-background-darker h-2 rounded-full mt-8">
              <div className="bg-primary h-full rounded-full" style={{ width: '40%' }}></div>
            </div>
            <div className="flex justify-between text-sm text-text-secondary mt-2">
              <span>Month 1</span>
              <span>Month 3</span>
              <span>Month 5</span>
            </div>
          </div>
          
          <MilestonesGrid />
        </div>
      </div>
    </main>
  );
} 