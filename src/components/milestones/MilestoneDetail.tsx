'use client';

import { useState } from 'react';
import { Project, projects } from '@/data/projects';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeftIcon, CheckIcon, ClockIcon, BookmarkIcon, CalendarDaysIcon, CodeBracketIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { useProjects } from '@/context/ProjectContext';

interface MilestoneDetailProps {
  project: Project;
  onBack: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const statusColors = {
  'Completed': {
    bg: 'bg-success/10',
    border: 'border-success/20',
    text: 'text-success',
    icon: CheckIcon
  },
  'In Progress': {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    text: 'text-blue-500',
    icon: ClockIcon
  },
  'Not Started': {
    bg: 'bg-gray-600/10',
    border: 'border-gray-600/20',
    text: 'text-gray-400',
    icon: BookmarkIcon
  }
};

export default function MilestoneDetail({ project, onBack }: MilestoneDetailProps) {
  const { updateProjectStatus, projects: contextProjects, stats } = useProjects();
  
  // Get the current status from the context to ensure we're showing the latest state
  const projectInContext = contextProjects.find(p => p.id === project.id);
  const [currentStatus, setCurrentStatus] = useState<'Completed' | 'In Progress' | 'Not Started'>(
    projectInContext?.status || project.status
  );
  
  // Calculate where this project is in the overall journey
  const currentMonth = project.month;
  const projectsInMonth = contextProjects.filter(p => p.month === currentMonth);
  const projectsIndex = projectsInMonth.findIndex(p => p.id === project.id);
  const progress = stats.completedPercentage;
  
  const handleStatusChange = (newStatus: 'Completed' | 'In Progress' | 'Not Started') => {
    setCurrentStatus(newStatus);
    updateProjectStatus(project.id, newStatus);
  };
  
  const StatusIcon = statusColors[currentStatus].icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="bg-background-darker rounded-xl border border-gray-800 shadow-xl overflow-hidden"
    >
      {/* Project header with background pattern */}
      <div className="bg-gradient-to-r from-background-dark to-background-darker p-8 relative overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#7b60bc_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-6">
            <button 
              onClick={(e) => {
                e.preventDefault();
                onBack(e);
              }}
              className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors bg-background-dark px-3 py-1.5 rounded-md border border-gray-800"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              <span>Back</span>
            </button>
            
            <div className={`px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-2 ${statusColors[currentStatus].bg} ${statusColors[currentStatus].border} ${statusColors[currentStatus].text}`}>
              <StatusIcon className="h-4 w-4" />
              {currentStatus}
            </div>
          </div>
          
          <div className="flex items-center gap-3 mb-3">
            {project.icon && <span className="text-4xl bg-background-dark p-3 rounded-md border border-gray-800">{project.icon}</span>}
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">{project.title}</h2>
          </div>
          
          <div className="flex items-center gap-3 mt-6">
            <div className="px-3 py-1.5 bg-background-dark rounded-md text-sm text-primary border border-primary/20 flex items-center gap-2">
              <CalendarDaysIcon className="h-4 w-4" />
              Month {project.month}
            </div>
            
            {project.githubLink && (
              <Link
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-background-dark rounded-md text-sm text-blue-500 border border-blue-500/20 flex items-center gap-2 hover:bg-blue-500/10 transition-colors"
              >
                <CodeBracketIcon className="h-4 w-4" />
                View Code
              </Link>
            )}
          </div>
        </div>
      </div>
      
      {/* Project details */}
      <div className="p-8">
        {/* Status update controls */}
        <div className="mb-8 bg-background-dark p-4 rounded-lg border border-gray-800">
          <h3 className="text-md font-medium text-text-primary mb-4">Update Status</h3>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => handleStatusChange('Completed')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 
                ${currentStatus === 'Completed' 
                  ? 'bg-success text-white' 
                  : 'bg-success/10 text-success hover:bg-success/20 border border-success/20'}`}
            >
              <CheckIcon className="h-4 w-4" />
              Mark as Completed
            </button>
            
            <button
              onClick={() => handleStatusChange('In Progress')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 
                ${currentStatus === 'In Progress' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 border border-blue-500/20'}`}
            >
              <ClockIcon className="h-4 w-4" />
              Mark as In Progress
            </button>
            
            <button
              onClick={() => handleStatusChange('Not Started')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 
                ${currentStatus === 'Not Started' 
                  ? 'bg-gray-600 text-white' 
                  : 'bg-gray-600/10 text-gray-400 hover:bg-gray-600/20 border border-gray-600/20'}`}
            >
              <BookmarkIcon className="h-4 w-4" />
              Mark as Not Started
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-text-primary mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-primary rounded-full"></span>
                Description
              </h3>
              <p className="text-text-secondary leading-relaxed">{project.description}</p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-text-primary mb-3 flex items-center gap-2">
                <span className="w-1 h-6 bg-primary rounded-full"></span>
                Key Learnings
              </h3>
              <ul className="space-y-3 text-text-secondary">
                {project.keyLearnings && project.keyLearnings.map((learning, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="mt-1 bg-primary/20 text-primary rounded-full p-0.5 flex-shrink-0">
                      <CheckIcon className="h-3 w-3" />
                    </div>
                    <span>{learning}</span>
                  </li>
                ))}
                {!project.keyLearnings && (
                  <>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 bg-primary/20 text-primary rounded-full p-0.5 flex-shrink-0">
                        <CheckIcon className="h-3 w-3" />
                      </div>
                      <span>Understanding of fundamental concepts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 bg-primary/20 text-primary rounded-full p-0.5 flex-shrink-0">
                        <CheckIcon className="h-3 w-3" />
                      </div>
                      <span>Implementation of best practices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 bg-primary/20 text-primary rounded-full p-0.5 flex-shrink-0">
                        <CheckIcon className="h-3 w-3" />
                      </div>
                      <span>Performance optimization techniques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 bg-primary/20 text-primary rounded-full p-0.5 flex-shrink-0">
                        <CheckIcon className="h-3 w-3" />
                      </div>
                      <span>Real-world problem-solving</span>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-background-dark p-4 rounded-lg border border-gray-800">
              <h3 className="text-md font-medium text-text-primary mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-background-darker rounded-md text-sm text-text-secondary border border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-background-dark p-4 rounded-lg border border-gray-800">
              <h3 className="text-md font-medium text-text-primary mb-4">Journey Progress</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-text-secondary mb-2 flex justify-between">
                    <span>Overall Progress</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="h-2 bg-background-darker rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${progress}%` }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="text-sm text-text-secondary mb-2">
                    <span>This project is #{projectsIndex + 1} of {projectsInMonth.length} in Month {currentMonth}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {project.githubLink && (
              <Link
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 rounded-md bg-primary hover:bg-primary/90 transition-colors text-white font-medium flex items-center justify-center gap-2"
              >
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                View Project on GitHub
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
} 