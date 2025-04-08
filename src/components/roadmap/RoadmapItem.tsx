'use client';

import { motion } from 'framer-motion';
import { RoadmapItem as RoadmapItemType } from '@/data/roadmap';
import Link from 'next/link';
import { useProjects } from '@/context/ProjectContext';

interface RoadmapItemProps {
  item: RoadmapItemType;
  index: number;
  projectId: string;
}

const statusColors = {
  'Completed': 'bg-success border-success/30',
  'In Progress': 'bg-blue-500 border-blue-500/30',
  'Not Started': 'bg-gray-600 border-gray-600/30',
};

const statusBackgrounds = {
  'Completed': 'bg-success/10',
  'In Progress': 'bg-blue-500/10',
  'Not Started': 'bg-gray-600/10',
};

export default function RoadmapItem({ item, index, projectId }: RoadmapItemProps) {
  const { updateProjectStatus } = useProjects();
  const isEven = index % 2 === 0;
  
  const handleStatusUpdate = (newStatus: 'Completed' | 'In Progress' | 'Not Started') => {
    updateProjectStatus(projectId, newStatus);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`mb-16 md:flex ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Timeline dot */}
      <div className="md:w-1/2 relative md:px-8">
        <div 
          className={`absolute left-0 md:left-auto ${isEven ? 'md:right-0' : 'md:left-0'} 
          top-0 w-8 h-8 rounded-full border-4 border-background-darker ${statusColors[item.status]} 
          transform md:translate-x-4 -translate-x-4 z-10 shadow-lg shadow-${item.status === 'Completed' ? 'success' : item.status === 'In Progress' ? 'blue-500' : 'gray-600'}/20`}
        />
        
        {/* Content card */}
        <div className={`ml-10 md:ml-0 p-6 bg-background-darker rounded-xl shadow-xl 
                        hover:shadow-${item.status === 'Completed' ? 'success' : item.status === 'In Progress' ? 'blue-500' : 'gray-600'}/10 
                        transition-all duration-300 border border-gray-800
                        ${isEven ? 'md:mr-8' : 'md:ml-8'} relative`}>
          {/* Status indicator strip */}
          <div className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} w-2 h-full ${statusColors[item.status]} rounded-l-lg`}></div>
          
          <div className="pl-2">
            {/* Month badge - showing on mobile */}
            <div className="md:hidden mb-3">
              <span className="px-3 py-1 rounded-full text-xs bg-primary/20 text-primary font-medium">
                {item.month}
              </span>
            </div>
            
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-text-primary">{item.title}</h3>
              <span className={`px-3 py-1 rounded-full text-xs ${statusBackgrounds[item.status]} border border-${item.status === 'Completed' ? 'success' : item.status === 'In Progress' ? 'blue-500' : 'gray-600'}/30 text-${item.status === 'Completed' ? 'success' : item.status === 'In Progress' ? 'blue-500' : 'gray-400'}`}>
                {item.status}
              </span>
            </div>
            
            <p className="text-text-secondary mb-6 border-l-2 border-gray-700 pl-3">{item.description}</p>
            
            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-background-dark rounded-full text-xs text-text-secondary border border-gray-800"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Status update buttons */}
            <div className="flex flex-wrap gap-2 mb-6">
              <button 
                onClick={() => handleStatusUpdate('Completed')}
                className={`px-3 py-1 rounded-md text-xs transition-colors ${
                  item.status === 'Completed' 
                    ? 'bg-success text-white' 
                    : 'bg-success/10 text-success hover:bg-success/20 border border-success/20'
                }`}
              >
                Mark Completed
              </button>
              
              <button 
                onClick={() => handleStatusUpdate('In Progress')}
                className={`px-3 py-1 rounded-md text-xs transition-colors ${
                  item.status === 'In Progress' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 border border-blue-500/20'
                }`}
              >
                Mark In Progress
              </button>
              
              <button 
                onClick={() => handleStatusUpdate('Not Started')}
                className={`px-3 py-1 rounded-md text-xs transition-colors ${
                  item.status === 'Not Started' 
                    ? 'bg-gray-600 text-white' 
                    : 'bg-gray-600/10 text-gray-400 hover:bg-gray-600/20 border border-gray-600/20'
                }`}
              >
                Mark Not Started
              </button>
            </div>
            
            {/* Links */}
            <div className="flex gap-4 mt-6 pt-4 border-t border-gray-800">
              {item.github && (
                <Link
                  href={item.github}
                  className="flex items-center gap-1 px-4 py-2 bg-background-dark rounded-md text-primary hover:text-primary-hover text-sm transition-colors border border-gray-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  GitHub
                </Link>
              )}
              
              <Link
                href={`/milestones`}
                className="flex items-center gap-1 px-4 py-2 bg-background-dark rounded-md text-secondary hover:text-secondary-hover text-sm transition-colors border border-gray-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Month indicator */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center">
        <div className={`px-6 py-3 rounded-lg border ${statusBackgrounds[item.status]} border-${item.status === 'Completed' ? 'success' : item.status === 'In Progress' ? 'blue-500' : 'gray-600'}/30 shadow-lg`}>
          <span className="text-primary font-semibold">{item.month}</span>
        </div>
      </div>
    </motion.div>
  );
} 