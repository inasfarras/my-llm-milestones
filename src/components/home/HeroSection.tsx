'use client';

import { useMilestones } from '@/context/MilestoneContext';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function HeroSection() {
  const { stats } = useMilestones();

  return (
    <section className="py-20 px-4 md:px-0 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#7b60bc_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      {/* Main content */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          >
            My Journey to <br className="md:hidden" />LLM Specialist
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-text-secondary max-w-2xl mb-8"
          >
            Tracking my growth through hands-on projects and academic work in Large Language Models, 
            from fundamentals to advanced agent systems.
          </motion.p>
        </div>
        
        {/* Progress container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-background-darker border border-gray-800 rounded-xl shadow-xl p-8 mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-text-primary">Learning Progress</h2>
          
          {/* Progress visualization */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-text-secondary mb-2">
              <span>Overall progress</span>
              <span>{stats.completedPercentage}% Complete</span>
            </div>
            
            <div className="h-3 bg-background-dark rounded-full overflow-hidden border border-gray-800 mb-2">
              <div className="h-full flex">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${stats.completedPercentage}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="bg-success h-full"
                />
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${(stats.inProgress / stats.total) * 100}%` }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="bg-blue-500 h-full"
                />
              </div>
            </div>
            
            {/* Legend */}
            <div className="flex gap-6 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-success"></div>
                <span className="text-success">Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-blue-500">In Progress</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                <span className="text-gray-400">Not Started</span>
              </div>
            </div>
          </div>
          
          {/* Progress stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-success/10 border border-success/20 rounded-lg p-4 text-center">
              <span className="text-success text-3xl font-bold">{stats.completed}</span>
              <p className="text-text-secondary text-sm mt-1">Completed</p>
            </div>
            
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-center">
              <span className="text-blue-500 text-3xl font-bold">{stats.inProgress}</span>
              <p className="text-text-secondary text-sm mt-1">In Progress</p>
            </div>
            
            <div className="bg-gray-600/10 border border-gray-600/20 rounded-lg p-4 text-center">
              <span className="text-gray-400 text-3xl font-bold">{stats.notStarted}</span>
              <p className="text-text-secondary text-sm mt-1">Not Started</p>
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/roadmap"
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-md transition-colors flex items-center justify-center gap-2"
            >
              View Roadmap
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
            
            <Link 
              href="/milestones"
              className="px-6 py-3 bg-background-dark hover:bg-gray-800 text-text-primary rounded-md border border-gray-700 transition-colors flex items-center justify-center gap-2"
            >
              View All Milestones
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 