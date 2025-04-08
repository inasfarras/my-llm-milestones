'use client';

import { motion } from 'framer-motion';
import { roadmapData } from '@/data/roadmap';
import { useProjects } from '@/context/ProjectContext';

export default function RoadmapHeader() {
  const { stats } = useProjects();
  
  const monthNames = [
    'Foundations',
    'Transformers & Prompting',
    'Fine-Tuning & Thesis Start',
    'Deployment & Advanced Systems',
    'Multi-Agent Systems & Thesis Finalization'
  ];

  // Using stats from ProjectContext instead of calculating from roadmapData
  const completedProjects = stats.completed;
  const inProgressProjects = stats.inProgress;
  const notStartedProjects = stats.notStarted;
  const totalProjects = stats.total;
  const completedPercentage = stats.completedPercentage;
  const inProgressPercentage = Math.round((inProgressProjects / totalProjects) * 100);

  return (
    <div className="max-w-5xl mx-auto text-center px-4 py-12">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-12 bg-background-darker p-8 rounded-xl border border-gray-800 shadow-xl"
      >
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-text-primary mb-6"
        >
          My Learning <span className="text-primary">Roadmap</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-secondary mb-8 max-w-2xl mx-auto"
        >
          A structured 5-month journey to becoming an LLM specialist through hands-on projects, 
          research, and practical skill-building.
        </motion.p>

        {/* Progress stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 p-4 bg-background-dark rounded-lg border border-gray-800">
          <div className="p-4 rounded-lg bg-success/10 border border-success/20">
            <div className="text-2xl font-bold text-success mb-1">{completedProjects}</div>
            <div className="text-sm text-text-secondary">Completed Projects</div>
          </div>
          
          <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
            <div className="text-2xl font-bold text-primary mb-1">{inProgressProjects}</div>
            <div className="text-sm text-text-secondary">In Progress</div>
          </div>
          
          <div className="p-4 rounded-lg bg-gray-700/10 border border-gray-700/20">
            <div className="text-2xl font-bold text-text-primary mb-1">{notStartedProjects}</div>
            <div className="text-sm text-text-secondary">Not Started</div>
          </div>
        </div>

        {/* Overall progress bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-text-secondary mb-2">
            <span>Overall Progress</span>
            <span>{completedPercentage}% Completed</span>
          </div>
          <div className="h-4 bg-background-dark rounded-full overflow-hidden border border-gray-800 shadow-inner">
            <div className="flex h-full">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${completedPercentage}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-success"
              />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${inProgressPercentage}%` }}
                transition={{ duration: 1, delay: 0.7 }}
                className="h-full bg-primary"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Month overview */}
      <h2 className="text-2xl font-bold text-text-primary mb-6">5-Month Learning Journey</h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16"
      >
        {monthNames.map((name, index) => {
          // Count projects per month
          const monthStr = `Month ${index + 1}`;
          const monthProjects = roadmapData.filter(item => item.month === monthStr);
          const monthCompleted = monthProjects.filter(item => item.status === 'Completed').length;
          
          return (
            <div key={index} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary opacity-20 rounded-lg blur-sm group-hover:opacity-50 transition duration-300"></div>
              <div className="relative p-6 bg-background-darker rounded-lg border border-gray-800 shadow-lg h-full flex flex-col justify-between">
                <div>
                  <div className="text-primary font-semibold mb-2 flex items-center">
                    <div className="bg-primary/20 w-8 h-8 rounded-full flex items-center justify-center mr-2 text-xs">
                      {index + 1}
                    </div>
                    <span>Month {index + 1}</span>
                  </div>
                  <div className="text-text-primary font-medium">{name}</div>
                </div>
                
                <div className="mt-4 pt-3 border-t border-gray-800">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Projects: {monthProjects.length}</span>
                    <span>Completed: {monthCompleted}</span>
                  </div>
                  <div className="h-1.5 bg-background-dark rounded-full mt-2 overflow-hidden">
                    <div 
                      className="h-full bg-success" 
                      style={{ width: `${monthProjects.length > 0 ? (monthCompleted / monthProjects.length) * 100 : 0}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>

      {/* Progress status legend */}
      <div className="bg-background-darker p-4 rounded-lg border border-gray-800 inline-flex items-center justify-center gap-6 mb-12">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-success border-2 border-success/30"></div>
          <span className="text-sm text-text-secondary">Completed</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-primary border-2 border-primary/30"></div>
          <span className="text-sm text-text-secondary">In Progress</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-gray-600 border-2 border-gray-600/30"></div>
          <span className="text-sm text-text-secondary">Not Started</span>
        </div>
      </div>
    </div>
  );
} 