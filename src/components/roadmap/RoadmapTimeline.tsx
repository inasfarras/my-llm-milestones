'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { roadmapData } from '@/data/roadmap';
import { useProjects } from '@/context/ProjectContext';

// Define the RoadmapItem type to match the data structure
interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  status: string;
  technologies: string[];
  github?: string;
  month: string;
  projectId?: string;
}

type MonthRefs = {
  [key: string]: HTMLDivElement | null;
};

export default function RoadmapTimeline() {
  const { projects } = useProjects();
  const [activeMonth, setActiveMonth] = useState<string | null>(null);
  const monthRefs = useRef<MonthRefs>({});
  
  // Group roadmap items by month
  const groupedByMonth = roadmapData.reduce((acc: Record<string, RoadmapItem[]>, item: RoadmapItem) => {
    if (!acc[item.month]) {
      acc[item.month] = [];
    }
    acc[item.month].push(item);
    return acc;
  }, {} as Record<string, RoadmapItem[]>);

  // Sort months chronologically
  const sortedMonths = Object.keys(groupedByMonth).sort((a, b) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months.indexOf(a) - months.indexOf(b);
  });

  // Update roadmap items status based on projects status
  useEffect(() => {
    if (projects.length > 0 && sortedMonths.length > 0 && !activeMonth) {
      setActiveMonth(sortedMonths[0]);
    }
  }, [projects, sortedMonths, activeMonth]);

  const handleMonthClick = (month: string) => {
    setActiveMonth(month);
    
    // Scroll to the month section
    if (monthRefs.current[month]) {
      monthRefs.current[month]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const setMonthRef = (element: HTMLDivElement | null, month: string) => {
    if (element) {
      monthRefs.current[month] = element;
    }
  };

  return (
    <div className="w-full">
      {/* Month navigation */}
      <div className="flex space-x-2 mb-8 flex-wrap gap-2">
        {sortedMonths.map((month) => (
          <button
            key={month}
            onClick={() => handleMonthClick(month)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
              activeMonth === month
                ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg shadow-purple-500/20 scale-105"
                : "bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white"
            }`}
          >
            {month}
          </button>
        ))}
      </div>

      {/* Timeline content */}
      <div className="space-y-16">
        {sortedMonths.map((month) => (
          <div
            key={month}
            ref={(el) => setMonthRef(el, month)}
            className={`transition-all duration-500 ${
              activeMonth === month ? "opacity-100" : "opacity-70"
            }`}
          >
            <h3 className="text-xl font-semibold text-slate-200 mb-6 border-b border-white/10 pb-2">
              {month}
            </h3>
            <div className="space-y-6">
              {groupedByMonth[month].map((item: RoadmapItem, index: number) => {
                // Find related project to determine status
                const project = projects.find((p) => p.id === item.projectId);
                const status = project ? project.status : item.status;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-6 rounded-xl shadow-xl ${
                      status === "Completed"
                        ? "bg-gradient-to-br from-emerald-900/40 to-emerald-700/20 border-l-4 border-emerald-500"
                        : status === "In Progress"
                        ? "bg-gradient-to-br from-amber-900/40 to-amber-700/20 border-l-4 border-amber-500"
                        : "bg-gradient-to-br from-slate-800/60 to-slate-700/30 border-l-4 border-slate-500"
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">
                          {item.title}
                        </h4>
                        <p className="text-slate-300 mb-4">{item.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.technologies.map((tech: string) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-white/10 rounded text-xs text-slate-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        {item.github && (
                          <a
                            href={item.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-300 hover:text-white transition-colors"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-github"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                          </a>
                        )}
                        <div className="flex items-center">
                          <span
                            className={`inline-block w-3 h-3 rounded-full mr-2 ${
                              status === "Completed"
                                ? "bg-emerald-500"
                                : status === "In Progress"
                                ? "bg-amber-500"
                                : "bg-slate-500"
                            }`}
                          ></span>
                          <span className="text-sm text-slate-300">{status}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 