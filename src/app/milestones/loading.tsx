import Navigation from '@/components/layout/Navigation';

export default function Loading() {
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
            
            <div className="flex justify-center items-center h-12 mt-8">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary"></div>
            </div>
            <p className="text-text-secondary mt-4">Loading projects...</p>
          </div>
        </div>
      </div>
    </main>
  );
} 