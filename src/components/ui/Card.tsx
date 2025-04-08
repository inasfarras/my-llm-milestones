'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { useProjects } from '@/context/ProjectContext';

export type Status = 'Completed' | 'In Progress' | 'Not Started';

interface CardProps {
  id?: string;
  title: string;
  description: string;
  status: Status;
  githubLink?: string;
  detailsLink?: string;
  tags?: string[];
  onViewDetails?: () => void;
  month?: number;
  icon?: string;
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

const statusText = {
  'Completed': 'text-success',
  'In Progress': 'text-blue-500',
  'Not Started': 'text-gray-400',
};

export default function Card({
  id,
  title,
  description,
  status,
  githubLink,
  detailsLink,
  tags = [],
  onViewDetails,
  month,
  icon,
}: CardProps) {
  const { updateProjectStatus, projects } = useProjects();
  const [currentStatus, setCurrentStatus] = useState<Status>(status);
  const [isEditing, setIsEditing] = useState(false);

  // Update local status when project status changes in context
  // This ensures the card reflects the current state from context
  const projectInContext = id ? projects.find(p => p.id === id) : null;
  if (projectInContext && projectInContext.status !== currentStatus) {
    setCurrentStatus(projectInContext.status);
  }

  const handleStatusChange = (newStatus: Status) => {
    setCurrentStatus(newStatus);
    
    // Update the global state via context if we have an ID
    if (id) {
      updateProjectStatus(id, newStatus);
    }
    
    // Auto-close the edit mode after selection
    setIsEditing(false);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`bg-background-darker rounded-lg shadow-lg border border-gray-800 hover:shadow-${currentStatus === 'Completed' ? 'success' : currentStatus === 'In Progress' ? 'blue-500' : 'gray-600'}/10 transition-all duration-300 h-full flex flex-col`}
    >
      {/* Card header with status indicator */}
      <div className="relative p-1">
        <div className={`absolute top-0 left-0 w-full h-1 ${statusColors[currentStatus].split(' ')[0]} rounded-t-lg`}></div>
        <div className="flex justify-between items-start mb-1 pt-4 px-5">
          <div className="flex items-center gap-2">
            {icon && <span className="text-2xl">{icon}</span>}
            <h3 className="text-xl font-semibold text-text-primary">{title}</h3>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs ${statusBackgrounds[currentStatus]} ${statusText[currentStatus]} border ${statusColors[currentStatus].split(' ')[1]}`}>
            {currentStatus}
          </span>
        </div>
      </div>
      
      {month && (
        <div className="px-6 mb-2">
          <span className="text-xs text-primary font-medium">Month {month}</span>
        </div>
      )}
      
      {/* Card body */}
      <div className="flex-grow px-6 pb-2">
        <p className="text-text-secondary mb-4">{description}</p>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-background-dark rounded-full text-xs text-text-secondary border border-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      
      {/* Action buttons */}
      <div className="border-t border-gray-800 mt-auto">
        <div className="px-6 py-4 flex justify-between items-center">
          <div className="flex gap-2">
            {githubLink && (
              <Link
                href={githubLink}
                className="text-primary hover:text-primary-hover text-sm transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
            )}
            
            {detailsLink && onViewDetails && (
              <button
                onClick={onViewDetails}
                className="text-secondary hover:text-secondary-hover text-sm transition-colors"
              >
                View Details
              </button>
            )}
            
            {detailsLink && !onViewDetails && (
              <Link
                href={detailsLink}
                className="text-secondary hover:text-secondary-hover text-sm transition-colors"
              >
                View Details
              </Link>
            )}
          </div>
          
          <div className="flex gap-2">
            {id && ( // Only show Edit button if we have an ID
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="p-1.5 rounded-md bg-background-dark hover:bg-gray-800 text-gray-400 hover:text-white text-xs border border-gray-700 transition-colors"
              >
                {isEditing ? 'Cancel' : 'Edit'}
              </button>
            )}
          </div>
        </div>
        
        {/* Status toggle buttons - shown when editing */}
        {isEditing && (
          <div className="px-4 pb-4 flex justify-between gap-2">
            <button
              onClick={() => handleStatusChange('Not Started')}
              className={`flex-1 py-1.5 rounded-md text-xs font-medium border ${currentStatus === 'Not Started' ? 'bg-gray-600 text-white border-gray-500' : 'bg-background-dark text-gray-400 border-gray-700 hover:bg-gray-800'} transition-colors`}
            >
              Not Started
            </button>
            <button
              onClick={() => handleStatusChange('In Progress')}
              className={`flex-1 py-1.5 rounded-md text-xs font-medium border ${currentStatus === 'In Progress' ? 'bg-blue-500 text-white border-blue-400' : 'bg-background-dark text-gray-400 border-gray-700 hover:bg-gray-800'} transition-colors`}
            >
              In Progress
            </button>
            <button
              onClick={() => handleStatusChange('Completed')}
              className={`flex-1 py-1.5 rounded-md text-xs font-medium border ${currentStatus === 'Completed' ? 'bg-success text-white border-success/70' : 'bg-background-dark text-gray-400 border-gray-700 hover:bg-gray-800'} transition-colors`}
            >
              Completed
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
} 