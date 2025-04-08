'use client';

import { motion } from 'framer-motion';
import { roadmapData } from '@/data/roadmap';
import RoadmapItem from './RoadmapItem';
import { useProjects } from '@/context/ProjectContext';
import { useEffect, useState, useRef } from 'react';

export default function RoadmapTimeline() {
  const { projects } = useProjects();
  const [roadmapItems, setRoadmapItems] = useState(roadmapData);
  const [activeMonth, setActiveMonth] = useState<string | null>(null);
  const monthRefs = useRef<{[key: string]: HTMLDivElement | null}>({});
  
  // Update roadmap items when projects change
  useEffect(() => {
    // Map through roadmap data and update the status based on the connected project
    const updatedRoadmap = roadmapData.map(roadmapItem => {
      const connectedProject = projects.find(p => p.id === roadmapItem.projectId);
      
      if (connectedProject) {
        return {
          ...roadmapItem,
          status: connectedProject.status
        };
      }
      
      return roadmapItem;
    });
    
    setRoadmapItems(updatedRoadmap);
  }, [projects]);
  
  // Group roadmap items by month
  const monthGroups = roadmapItems.reduce((groups, item) => {
    const month = item.month;
    if (!groups[month]) {
      groups[month] = [];
    }
    groups[month].push(item);
    return groups;
  }, {} as Record<string, typeof roadmapItems>);

  const months = Object.keys(monthGroups).sort();
  
  const handleMonthClick = (month: string) => {
    setActiveMonth(month);
    if (monthRefs.current[month]) {
      monthRefs.current[month]?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-4">
      {/* Month navigation */}
      <div className="flex justify-center gap-3 flex-wrap mb-12">
        {months.map((month) => (
          <button
            key={`nav-${month}`}
            onClick={() => handleMonthClick(month)}
            className={`px-4 py-2 rounded-full transition-all transform hover:scale-105 ${
              activeMonth === month 
                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                : 'bg-background-darker text-text-secondary hover:bg-background-dark border border-gray-800'
            }`}
          >
            <div className="flex items-center gap-2">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                activeMonth === month 
                  ? 'bg-white text-primary' 
                  : 'bg-primary/20 text-primary'
              }`}>
                {month.split(' ')[1]}
              </div>
              <span>{month}</span>
            </div>
          </button>
        ))}
      </div>
      
      <div className="relative px-2">
        {/* Month separators */}
        <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-primary via-gray-700 to-secondary transform -translate-x-px" />
        
        {/* Render items grouped by month */}
        {months.map((month, monthIndex) => (
          <div 
            key={month} 
            className="mb-16"
            ref={el => { monthRefs.current[month] = el; }}
          >
            {/* Month label */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: monthIndex * 0.2 }}
              className="relative z-10 mb-8 flex justify-center"
            >
              <button
                onClick={() => handleMonthClick(month)}
                className={`bg-background-darker px-8 py-3 rounded-full border border-gray-800 shadow-lg flex items-center gap-3 transition-all hover:bg-background-dark hover:shadow-xl ${
                  activeMonth === month ? 'ring-2 ring-primary ring-offset-2 ring-offset-background-darker' : ''
                }`}
              >
                <div className="bg-primary/20 h-8 w-8 rounded-full flex items-center justify-center text-primary font-bold">
                  {month.split(' ')[1]}
                </div>
                <span className="text-text-primary font-medium">{month}</span>
              </button>
            </motion.div>
            
            {/* Month timeline items */}
            <div className="relative">
              {monthGroups[month].map((item) => (
                <RoadmapItem 
                  key={item.id} 
                  item={item} 
                  index={roadmapItems.findIndex(i => i.id === item.id)}
                  projectId={item.projectId}
                />
              ))}
            </div>
          </div>
        ))}
        
        {/* Timeline end marker */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center"
        >
          <div className="bg-background-darker px-6 py-3 rounded-lg border border-gray-800 text-text-secondary inline-flex items-center">
            <span>Journey Continues...</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 