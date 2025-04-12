'use client';

import { motion } from 'framer-motion';
import { roadmapData } from '@/data/roadmap';
import { useMilestones } from '@/context/MilestoneContext';

export default function RoadmapHeader() {
  const { stats } = useMilestones();
  
  const monthNames = [
    'Foundations',
    'Transformers & Prompting',
    'Fine-Tuning & Thesis Start',
    'Deployment & Advanced Systems',
    'Multi-Agent Systems & Thesis Finalization'
  ];

  // Using stats from MilestoneContext instead of calculating from roadmapData
  const completedMilestones = stats.completed;
  const inProgressMilestones = stats.inProgress;
  const notStartedMilestones = stats.notStarted;
  const totalMilestones = stats.total;
  const completedPercentage = stats.completedPercentage;
  const inProgressPercentage = Math.round((inProgressMilestones / totalMilestones) * 100);

  return (
    <div className="mb-16">
      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-text-primary mb-4">
          My LLM Specialist Journey
        </h1>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          A high-level roadmap of my 5-month intensive learning path to becoming an LLM specialist
        </p>
        <div className="mt-4 text-sm text-text-secondary">
          <span className="inline-block px-3 py-1 rounded-full bg-background-dark border border-gray-700 mr-2">
            <span className="inline-block w-2 h-2 rounded-full bg-success mr-2"></span>
            Completed
          </span>
          <span className="inline-block px-3 py-1 rounded-full bg-background-dark border border-gray-700 mr-2">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
            In Progress
          </span>
          <span className="inline-block px-3 py-1 rounded-full bg-background-dark border border-gray-700">
            <span className="inline-block w-2 h-2 rounded-full bg-gray-600 mr-2"></span>
            Not Started
          </span>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12"
      >
        <div className="bg-background-darker p-6 rounded-xl border border-gray-800 shadow-xl">
          <h2 className="text-xl font-bold text-text-primary mb-6">Journey Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-4 rounded-lg bg-success/10 border border-success/20 shadow-sm">
              <h3 className="text-sm uppercase tracking-wide text-text-secondary mb-1">Completed Milestones</h3>
              <div className="text-3xl font-bold text-success">{completedMilestones}</div>
              <div className="mt-1 text-sm text-text-secondary">
                {completedPercentage}% of journey complete
              </div>
            </div>
            
            <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 shadow-sm">
              <h3 className="text-sm uppercase tracking-wide text-text-secondary mb-1">In Progress</h3>
              <div className="text-3xl font-bold text-blue-500">{inProgressMilestones}</div>
              <div className="mt-1 text-sm text-text-secondary">
                {inProgressPercentage}% of journey in progress
              </div>
            </div>
            
            <div className="p-4 rounded-lg bg-gray-600/10 border border-gray-600/20 shadow-sm">
              <h3 className="text-sm uppercase tracking-wide text-text-secondary mb-1">Upcoming</h3>
              <div className="text-3xl font-bold text-gray-400">{notStartedMilestones}</div>
              <div className="mt-1 text-sm text-text-secondary">
                {totalMilestones} total learning milestones
              </div>
            </div>
          </div>
          
          <div className="relative pt-1">
            <div className="text-sm text-text-secondary mb-2 flex justify-between">
              <span>Overall Journey Progress</span>
              <span>{completedPercentage}% Complete</span>
            </div>
            <div className="flex h-3 overflow-hidden text-xs rounded-full bg-background-dark border border-gray-800">
              <div
                style={{ width: `${completedPercentage}%` }}
                className="flex flex-col text-center whitespace-nowrap text-white justify-center bg-success"
              ></div>
              <div
                style={{ width: `${inProgressPercentage}%` }}
                className="flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
              ></div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Month overview */}
      <h2 className="text-2xl font-bold text-text-primary mb-6">Big Picture: 5-Month Learning Roadmap</h2>
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
              <div className="relative p-4 bg-background-darker rounded-lg border border-gray-800 h-full flex flex-col">
                <div className="text-sm text-text-secondary mb-1">Month {index + 1}</div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{name}</h3>
                
                <div className="mt-auto pt-4">
                  <div className="flex justify-between text-xs text-text-secondary mb-1">
                    <span>Progress</span>
                    <span>{monthCompleted} / {monthProjects.length}</span>
                  </div>
                  <div className="h-1.5 bg-background-dark rounded-full overflow-hidden">
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
      
      <div className="text-center mb-8">
        <p className="text-text-secondary italic">
          Scroll down to see detailed milestones and progress for each month
        </p>
        <div className="mt-4 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
      
      <div className="border-t border-gray-800 pt-8">
        <h2 className="text-2xl font-bold text-text-primary mb-6">Detailed Monthly Milestones</h2>
      </div>
    </div>
  );
} 