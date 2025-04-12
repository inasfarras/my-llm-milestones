'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { roadmapData } from '@/data/roadmap';
import { useMilestones } from '@/context/MilestoneContext';
import { ArrowRightIcon, CheckCircleIcon, ClockIcon, CalendarIcon } from '@heroicons/react/24/outline';

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

const statusConfig = {
  'Completed': {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    text: 'text-emerald-400',
    icon: CheckCircleIcon,
  },
  'In Progress': {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    text: 'text-blue-400',
    icon: ClockIcon,
  },
  'Not Started': {
    bg: 'bg-gray-600/10',
    border: 'border-gray-600/30',
    text: 'text-gray-400',
    icon: CalendarIcon,
  },
};

export default function RoadmapTimeline() {
  const { milestones } = useMilestones();
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

  useEffect(() => {
    if (milestones.length > 0 && sortedMonths.length > 0 && !activeMonth) {
      setActiveMonth(sortedMonths[0]);
    }
  }, [milestones, sortedMonths, activeMonth]);

  const handleMonthClick = (month: string) => {
    setActiveMonth(month);
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
      <div className="flex flex-wrap gap-2 mb-12">
        {sortedMonths.map((month) => (
          <motion.button
            key={month}
            onClick={() => handleMonthClick(month)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeMonth === month
                ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg shadow-purple-500/20"
                : "bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10"
            }`}
          >
            {month}
          </motion.button>
        ))}
      </div>

      {/* Timeline content */}
      <div className="space-y-20">
        {sortedMonths.map((month) => (
          <motion.div
            key={month}
            ref={(el) => setMonthRef(el, month)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: activeMonth === month ? 1 : 0.5, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            {/* Month header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold">{month.split(' ')[0].charAt(0)}</span>
              </div>
              <h3 className="text-2xl font-bold text-white">{month}</h3>
            </div>

            {/* Timeline items */}
            <div className="space-y-6">
              {groupedByMonth[month].map((item: RoadmapItem, index: number) => {
                const milestone = milestones.find((m) => m.id === item.projectId);
                const status = milestone ? milestone.status : item.status;
                const StatusIcon = statusConfig[status as keyof typeof statusConfig].icon;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative pl-8 border-l-2 ${statusConfig[status as keyof typeof statusConfig].border}`}
                  >
                    {/* Status dot */}
                    <div className={`absolute left-[-9px] top-6 w-4 h-4 rounded-full ${statusConfig[status as keyof typeof statusConfig].bg} border-2 ${statusConfig[status as keyof typeof statusConfig].border}`} />

                    <div className={`p-6 rounded-xl ${statusConfig[status as keyof typeof statusConfig].bg} border ${statusConfig[status as keyof typeof statusConfig].border}`}>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <StatusIcon className={`w-5 h-5 ${statusConfig[status as keyof typeof statusConfig].text}`} />
                            <span className={`text-sm font-medium ${statusConfig[status as keyof typeof statusConfig].text}`}>
                              {status}
                            </span>
                          </div>
                          <h4 className="text-xl font-semibold text-white mb-3">
                            {item.title}
                          </h4>
                          <p className="text-slate-300 mb-4">{item.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {item.technologies.map((tech: string) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300 border border-white/10"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        {item.github && (
                          <a
                            href={item.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-slate-300 hover:text-white transition-colors border border-white/10"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            View on GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 