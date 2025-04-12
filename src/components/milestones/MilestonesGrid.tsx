'use client';

import { useState, useEffect, useRef } from 'react';
import Card from '@/components/ui/Card';
import { Milestone } from '@/data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import MilestoneDetail from './MilestoneDetail';
import { Status } from '@/components/ui/Card';
import { useMilestones } from '@/context/MilestoneContext';

const statuses: Status[] = ['Completed', 'In Progress', 'Not Started'];
const months = [1, 2, 3, 4, 5];
const monthNames = ['Foundations', 'Transformers & Prompting', 'Fine-Tuning & Thesis Start', 'Deployment & Advanced Systems', 'Multi-Agent Systems & Thesis Finalization'];

export default function MilestonesGrid() {
  const { milestones, stats } = useMilestones();
  const [selectedFilter, setSelectedFilter] = useState<Status | 'All'>('All');
  const [selectedMonth, setSelectedMonth] = useState<number | 'All'>('All');
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const scrollPositionRef = useRef(0);

  // Save scroll position when opening detail view and restore when closing
  useEffect(() => {
    if (selectedMilestone) {
      // Save current scroll position when opening detail
      scrollPositionRef.current = window.scrollY;
    } else if (scrollPositionRef.current > 0) {
      // When closing detail view (selectedMilestone becomes null)
      // Wait for render to complete then restore scroll
      const timeoutId = setTimeout(() => {
        window.scrollTo(0, scrollPositionRef.current);
        scrollPositionRef.current = 0;
      }, 50); // Use slightly longer timeout for reliability
      
      return () => clearTimeout(timeoutId);
    }
  }, [selectedMilestone]);

  let filteredMilestones = milestones;
  
  // Apply status filter
  if (selectedFilter !== 'All') {
    filteredMilestones = filteredMilestones.filter(milestone => milestone.status === selectedFilter);
  }
  
  // Apply month filter
  if (selectedMonth !== 'All') {
    filteredMilestones = filteredMilestones.filter(milestone => milestone.month === selectedMonth);
  }

  const handleViewDetails = (milestone: Milestone) => {
    setSelectedMilestone(milestone);
  };

  const handleBack = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setSelectedMilestone(null);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  // Group milestones by month if not filtering by month
  const groupedMilestones = selectedMonth === 'All' 
    ? months.map(month => ({
        month,
        name: monthNames[month - 1],
        milestones: filteredMilestones.filter(milestone => milestone.month === month)
      }))
    : null;

  // Status colors for better differentiation
  const statusColors = {
    'Completed': 'bg-success',
    'In Progress': 'bg-blue-500',
    'Not Started': 'bg-gray-600',
  };

  return (
    <div className="py-8">
      {!selectedMilestone ? (
        <div>
          {/* Progress Overview */}
          <div className="mb-12 bg-background-darker p-6 rounded-xl border border-gray-800 shadow-xl">
            <h3 className="text-xl font-bold text-text-primary mb-6">Milestone Statistics</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="p-4 rounded-lg bg-success/10 border border-success/20 text-center">
                <div className="text-3xl font-bold text-success mb-1">{stats.completed}</div>
                <div className="text-sm text-text-secondary">Completed Milestones</div>
              </div>
              
              <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 text-center">
                <div className="text-3xl font-bold text-blue-500 mb-1">{stats.inProgress}</div>
                <div className="text-sm text-text-secondary">In Progress</div>
              </div>
              
              <div className="p-4 rounded-lg bg-gray-600/10 border border-gray-600/20 text-center">
                <div className="text-3xl font-bold text-gray-400 mb-1">{stats.notStarted}</div>
                <div className="text-sm text-text-secondary">Planned Milestones</div>
              </div>
            </div>
            
            {/* Progress bar */}
            <div className="mb-2">
              <div className="flex justify-between text-sm text-text-secondary mb-2">
                <span>All Milestones Progress</span>
                <span>{stats.completedPercentage}% Completed</span>
              </div>
              <div className="h-3 bg-background-dark rounded-full overflow-hidden border border-gray-800">
                <div className="h-full bg-success" style={{ width: `${stats.completedPercentage}%` }}></div>
              </div>
            </div>
          </div>

          {/* View mode toggle */}
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-between mb-8 gap-4">
            <h3 className="text-xl font-bold text-text-primary">All Milestones ({filteredMilestones.length})</h3>
            
            <div className="flex items-center space-x-2 bg-background-darker rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 rounded text-sm ${
                  viewMode === 'grid'
                    ? 'bg-primary text-white'
                    : 'text-text-secondary hover:text-white hover:bg-gray-700'
                }`}
              >
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  Grid
                </span>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-1.5 rounded text-sm ${
                  viewMode === 'list'
                    ? 'bg-primary text-white'
                    : 'text-text-secondary hover:text-white hover:bg-gray-700'
                }`}
              >
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  List
                </span>
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="mb-12">
            <div className="bg-background-darker p-4 rounded-lg border border-gray-800 mb-8">
              <h3 className="text-lg font-medium text-text-primary mb-4">Filter by Status</h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedFilter('All')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedFilter === 'All'
                      ? 'bg-primary text-white'
                      : 'bg-background-dark text-text-secondary hover:text-white'
                  }`}
                >
                  All
                </button>
                {statuses.map((status) => (
                  <button
                    key={status}
                    onClick={() => setSelectedFilter(status)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                      selectedFilter === status
                        ? `${status === 'Completed' ? 'bg-success' : status === 'In Progress' ? 'bg-blue-500' : 'bg-gray-600'} text-white`
                        : 'bg-background-dark text-text-secondary hover:text-white'
                    }`}
                  >
                    <div className={`w-3 h-3 rounded-full ${statusColors[status]}`}></div>
                    {status}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-background-darker p-4 rounded-lg border border-gray-800">
              <h3 className="text-lg font-medium text-text-primary mb-4">Filter by Month</h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedMonth('All')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedMonth === 'All'
                      ? 'bg-secondary text-white'
                      : 'bg-background-dark text-text-secondary hover:text-white'
                  }`}
                >
                  All Months
                </button>
                {months.map((month, index) => (
                  <button
                    key={month}
                    onClick={() => setSelectedMonth(month)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      selectedMonth === month
                        ? 'bg-secondary text-white'
                        : 'bg-background-dark text-text-secondary hover:text-white'
                    }`}
                  >
                    Month {month}: {monthNames[index]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Milestones Grid/List */}
          <div className="mt-8">
            {groupedMilestones ? (
              <div className="space-y-16">
                {groupedMilestones.map(group => 
                  group.milestones.length > 0 && (
                    <motion.div 
                      key={group.month}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mb-16"
                    >
                      <h2 className="text-2xl font-bold text-text-primary mb-8 flex items-center">
                        <span className="bg-secondary/20 w-10 h-10 rounded-full flex items-center justify-center mr-3 text-secondary">
                          {group.month}
                        </span>
                        Month {group.month}: {group.name}
                      </h2>
                      
                      {viewMode === 'grid' ? (
                        <motion.div
                          variants={container}
                          initial="hidden"
                          animate="show"
                          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                          {group.milestones.map((milestone) => (
                            <motion.div key={milestone.id} variants={item}>
                              <Card
                                id={milestone.id}
                                title={milestone.title}
                                description={milestone.description}
                                status={milestone.status}
                                githubLink={milestone.githubLink}
                                tags={milestone.tags}
                                detailsLink="#"
                                onViewDetails={() => handleViewDetails(milestone)}
                                month={milestone.month}
                                icon={milestone.icon}
                              />
                            </motion.div>
                          ))}
                        </motion.div>
                      ) : (
                        <div className="space-y-4">
                          {group.milestones.map((milestone) => (
                            <motion.div
                              key={milestone.id}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className={`p-4 bg-background-darker rounded-lg border border-gray-800 flex flex-col sm:flex-row items-start sm:items-center gap-4 relative overflow-hidden`}
                            >
                              <div className={`absolute left-0 top-0 w-1 h-full ${statusColors[milestone.status]}`}></div>
                              
                              <div className="flex-shrink-0 ml-2">
                                <span className="text-2xl">{milestone.icon}</span>
                              </div>
                              
                              <div className="flex-grow">
                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                  <h3 className="text-lg font-semibold text-text-primary">{milestone.title}</h3>
                                  <span className={`px-2 py-0.5 rounded-full text-xs ${milestone.status === 'Completed' ? 'bg-success/10 text-success' : milestone.status === 'In Progress' ? 'bg-blue-500/10 text-blue-500' : 'bg-gray-600/10 text-gray-400'}`}>
                                    {milestone.status}
                                  </span>
                                </div>
                                <p className="text-sm text-text-secondary mb-2">{milestone.description}</p>
                                <div className="flex flex-wrap gap-1">
                                  {milestone.tags.slice(0, 3).map(tag => (
                                    <span key={tag} className="text-xs px-2 py-0.5 bg-background-dark rounded-full">
                                      {tag}
                                    </span>
                                  ))}
                                  {milestone.tags.length > 3 && (
                                    <span className="text-xs px-2 py-0.5 bg-background-dark rounded-full">
                                      +{milestone.tags.length - 3}
                                    </span>
                                  )}
                                </div>
                              </div>
                              
                              <div className="flex gap-2 ml-auto self-end sm:self-center">
                                <button
                                  onClick={() => handleViewDetails(milestone)}
                                  className="px-3 py-1.5 bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 rounded border border-blue-500/20 text-xs"
                                >
                                  View Details
                                </button>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )
                )}
              </div>
            ) : (
              // Flat list for filtered month
              viewMode === 'grid' ? (
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filteredMilestones.map((milestone) => (
                    <motion.div key={milestone.id} variants={item}>
                      <Card
                        id={milestone.id}
                        title={milestone.title}
                        description={milestone.description}
                        status={milestone.status}
                        githubLink={milestone.githubLink}
                        tags={milestone.tags}
                        detailsLink="#"
                        onViewDetails={() => handleViewDetails(milestone)}
                        month={milestone.month}
                        icon={milestone.icon}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <div className="space-y-4">
                  {filteredMilestones.map((milestone) => (
                    <motion.div
                      key={milestone.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 bg-background-darker rounded-lg border border-gray-800 flex flex-col sm:flex-row items-start sm:items-center gap-4 relative overflow-hidden`}
                    >
                      <div className={`absolute left-0 top-0 w-1 h-full ${statusColors[milestone.status]}`}></div>
                      
                      <div className="flex-shrink-0 ml-2">
                        <span className="text-2xl">{milestone.icon}</span>
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-lg font-semibold text-text-primary">{milestone.title}</h3>
                          <span className={`px-2 py-0.5 rounded-full text-xs ${milestone.status === 'Completed' ? 'bg-success/10 text-success' : milestone.status === 'In Progress' ? 'bg-blue-500/10 text-blue-500' : 'bg-gray-600/10 text-gray-400'}`}>
                            {milestone.status}
                          </span>
                        </div>
                        <p className="text-sm text-text-secondary mb-2">{milestone.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {milestone.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-xs px-2 py-0.5 bg-background-dark rounded-full">
                              {tag}
                            </span>
                          ))}
                          {milestone.tags.length > 3 && (
                            <span className="text-xs px-2 py-0.5 bg-background-dark rounded-full">
                              +{milestone.tags.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex gap-2 ml-auto self-end sm:self-center">
                        <button
                          onClick={() => handleViewDetails(milestone)}
                          className="px-3 py-1.5 bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 rounded border border-blue-500/20 text-xs"
                        >
                          View Details
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )
            )}
          </div>
        </div>
      ) : (
        <MilestoneDetail milestone={selectedMilestone} onBack={handleBack} />
      )}
    </div>
  );
} 