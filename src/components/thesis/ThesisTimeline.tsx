'use client';

import { motion } from 'framer-motion';
import { ThesisMilestone } from '@/data/thesis';
import { useThesis } from '@/context/ThesisContext';

interface ThesisTimelineProps {
  milestones: ThesisMilestone[];
}

const statusColors = {
  'Completed': 'bg-success',
  'In Progress': 'bg-blue-500',
  'Not Started': 'bg-gray-600',
};

const statusBackgrounds = {
  'Completed': 'bg-success/10 border-success/30',
  'In Progress': 'bg-blue-500/10 border-blue-500/30',
  'Not Started': 'bg-gray-600/10 border-gray-600/30',
};

export default function ThesisTimeline({ milestones }: ThesisTimelineProps) {
  const { updateMilestoneStatus, stats } = useThesis();
  
  const handleStatusChange = (milestoneId: string, newStatus: 'Completed' | 'In Progress' | 'Not Started') => {
    updateMilestoneStatus(milestoneId, newStatus);
  };
  
  return (
    <div className="relative py-8">
      {/* Container */}
      <div className="bg-background-darker p-8 rounded-xl border border-gray-800 shadow-xl">
        <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">
          Thesis Development Progress
        </h2>
        
        {/* Progress indicator */}
        <div className="max-w-md mx-auto mb-10">
          <div className="flex justify-between text-sm text-text-secondary mb-2">
            <span>Overall Progress</span>
            <span>{stats.completedPercentage}% Complete</span>
          </div>
          <div className="h-3 bg-background-dark rounded-full overflow-hidden border border-gray-800">
            <div className="flex h-full">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${stats.completedPercentage}%` }}
                transition={{ duration: 1 }}
                className="bg-success h-full"
              />
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${(stats.inProgress / stats.total) * 100}%` }}
                transition={{ duration: 1, delay: 0.2 }}
                className="bg-blue-500 h-full"
              />
            </div>
          </div>
          
          {/* Status indicators */}
          <div className="flex gap-6 mt-2 text-xs justify-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-success"></div>
              <span className="text-success">{stats.completed} Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-blue-500">{stats.inProgress} In Progress</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-600"></div>
              <span className="text-gray-400">{stats.notStarted} Not Started</span>
            </div>
          </div>
        </div>
        
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-gray-700 to-secondary transform md:translate-x-0 translate-x-4 my-36" />
        
        <div className="relative">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`mb-16 md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="md:w-1/2 relative pl-10 md:pl-0 md:pr-8">
                {/* Timeline dot */}
                <div 
                  className={`absolute left-0 md:left-auto ${index % 2 === 0 ? 'md:right-0' : 'md:left-0'} 
                  top-0 w-8 h-8 rounded-full border-4 border-background-darker ${statusColors[milestone.status]} 
                  transform md:translate-x-4 -translate-x-4 z-10 shadow-lg`}
                />
                
                {/* Content card */}
                <div className={`p-6 bg-background-dark rounded-lg shadow-lg border border-gray-800 hover:shadow-${milestone.status === 'Completed' ? 'success' : milestone.status === 'In Progress' ? 'blue-500' : 'gray-600'}/5 transition-shadow relative ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  {/* Status indicator strip */}
                  <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-2 h-full ${statusColors[milestone.status]} rounded-l-lg`}></div>
                  
                  <div className="pl-2">
                    <span className="text-sm text-gray-400 block mb-2">{milestone.date}</span>
                    <h3 className="text-xl font-semibold text-white mt-2 flex items-center gap-2">
                      <span className={`inline-block w-3 h-3 rounded-full ${statusColors[milestone.status]}`}></span>
                      {milestone.title}
                    </h3>
                    <p className="mt-4 text-gray-300 border-l-2 border-gray-700 pl-3">{milestone.description}</p>
                    
                    <div className="mt-6 flex flex-wrap gap-2">
                      <button 
                        onClick={() => handleStatusChange(milestone.id, 'Completed')}
                        className={`px-3 py-1 rounded-md text-xs transition-colors ${
                          milestone.status === 'Completed' 
                            ? 'bg-success text-white' 
                            : 'bg-success/10 text-success hover:bg-success/20 border border-success/20'
                        }`}
                      >
                        Mark Completed
                      </button>
                      
                      <button 
                        onClick={() => handleStatusChange(milestone.id, 'In Progress')}
                        className={`px-3 py-1 rounded-md text-xs transition-colors ${
                          milestone.status === 'In Progress' 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 border border-blue-500/20'
                        }`}
                      >
                        Mark In Progress
                      </button>
                      
                      <button 
                        onClick={() => handleStatusChange(milestone.id, 'Not Started')}
                        className={`px-3 py-1 rounded-md text-xs transition-colors ${
                          milestone.status === 'Not Started' 
                            ? 'bg-gray-600 text-white' 
                            : 'bg-gray-600/10 text-gray-400 hover:bg-gray-600/20 border border-gray-600/20'
                        }`}
                      >
                        Mark Not Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2" />
            </motion.div>
          ))}
          
          {/* Timeline end marker */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex justify-center"
          >
            <div className="bg-background-dark px-6 py-3 rounded-lg border border-gray-800 text-text-secondary inline-flex items-center">
              <span>Thesis Defense</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 