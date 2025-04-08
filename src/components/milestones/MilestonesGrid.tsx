'use client';

import { useState, useEffect, useRef } from 'react';
import Card from '@/components/ui/Card';
import { Project } from '@/data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import MilestoneDetail from './MilestoneDetail';
import { Status } from '@/components/ui/Card';
import { useProjects } from '@/context/ProjectContext';

const statuses: Status[] = ['Completed', 'In Progress', 'Not Started'];
const months = [1, 2, 3, 4, 5];
const monthNames = ['Foundations', 'Transformers & Prompting', 'Fine-Tuning & Thesis Start', 'Deployment & Advanced Systems', 'Multi-Agent Systems & Thesis Finalization'];

export default function MilestonesGrid() {
  const { projects, stats } = useProjects();
  const [selectedFilter, setSelectedFilter] = useState<Status | 'All'>('All');
  const [selectedMonth, setSelectedMonth] = useState<number | 'All'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const scrollPositionRef = useRef(0);

  // Save scroll position when opening detail view and restore when closing
  useEffect(() => {
    if (selectedProject) {
      // Save current scroll position when opening detail
      scrollPositionRef.current = window.scrollY;
    } else if (scrollPositionRef.current > 0) {
      // When closing detail view (selectedProject becomes null)
      // Wait for render to complete then restore scroll
      const timeoutId = setTimeout(() => {
        window.scrollTo(0, scrollPositionRef.current);
        scrollPositionRef.current = 0;
      }, 50); // Use slightly longer timeout for reliability
      
      return () => clearTimeout(timeoutId);
    }
  }, [selectedProject]);

  let filteredProjects = projects;
  
  // Apply status filter
  if (selectedFilter !== 'All') {
    filteredProjects = filteredProjects.filter(project => project.status === selectedFilter);
  }
  
  // Apply month filter
  if (selectedMonth !== 'All') {
    filteredProjects = filteredProjects.filter(project => project.month === selectedMonth);
  }

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
  };

  const handleBack = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setSelectedProject(null);
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

  // Group projects by month if not filtering by month
  const groupedProjects = selectedMonth === 'All' 
    ? months.map(month => ({
        month,
        name: monthNames[month - 1],
        projects: filteredProjects.filter(project => project.month === month)
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
      {!selectedProject ? (
        <div>
          {/* Progress Overview */}
          <div className="mb-12 bg-background-darker p-6 rounded-xl border border-gray-800 shadow-xl">
            <h3 className="text-xl font-bold text-text-primary mb-6">Progress Overview</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="p-4 rounded-lg bg-success/10 border border-success/20 text-center">
                <div className="text-3xl font-bold text-success mb-1">{stats.completed}</div>
                <div className="text-sm text-text-secondary">Completed</div>
              </div>
              
              <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 text-center">
                <div className="text-3xl font-bold text-blue-500 mb-1">{stats.inProgress}</div>
                <div className="text-sm text-text-secondary">In Progress</div>
              </div>
              
              <div className="p-4 rounded-lg bg-gray-600/10 border border-gray-600/20 text-center">
                <div className="text-3xl font-bold text-gray-400 mb-1">{stats.notStarted}</div>
                <div className="text-sm text-text-secondary">Not Started</div>
              </div>
            </div>
            
            {/* Progress bar */}
            <div className="mb-2">
              <div className="flex justify-between text-sm text-text-secondary mb-2">
                <span>Overall Progress</span>
                <span>{stats.completedPercentage}% Completed</span>
              </div>
              <div className="h-3 bg-background-dark rounded-full overflow-hidden border border-gray-800">
                <div className="h-full bg-success" style={{ width: `${stats.completedPercentage}%` }}></div>
              </div>
            </div>
          </div>

          {/* View mode toggle */}
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-medium text-text-primary">Filter Projects</h3>
            
            <div className="bg-background-darker flex rounded-md border border-gray-800 p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1 rounded text-xs font-medium ${viewMode === 'grid' ? 'bg-background-dark text-white' : 'text-gray-400'}`}
              >
                Grid View
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-1 rounded text-xs font-medium ${viewMode === 'list' ? 'bg-background-dark text-white' : 'text-gray-400'}`}
              >
                List View
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

          {/* Projects Grid/List */}
          <AnimatePresence>
            {groupedProjects ? (
              // Grouped by month
              <div className="space-y-16">
                {groupedProjects.map(group => 
                  group.projects.length > 0 && (
                    <motion.div key={group.month} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-12">
                      <h2 className="text-2xl font-bold text-text-primary mb-8 flex items-center">
                        <div className="bg-primary/20 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-primary">
                          {group.month}
                        </div>
                        <span className="text-primary">Month {group.month}:</span>
                        <span className="ml-2">{group.name}</span>
                      </h2>
                      
                      {viewMode === 'grid' ? (
                        <motion.div
                          variants={container}
                          initial="hidden"
                          animate="show"
                          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                          {group.projects.map((project) => (
                            <motion.div key={project.id} variants={item}>
                              <Card
                                id={project.id}
                                title={project.title}
                                description={project.description}
                                status={project.status}
                                githubLink={project.githubLink}
                                tags={project.tags}
                                detailsLink="#"
                                onViewDetails={() => handleViewDetails(project)}
                                month={project.month}
                                icon={project.icon}
                              />
                            </motion.div>
                          ))}
                        </motion.div>
                      ) : (
                        <div className="space-y-4">
                          {group.projects.map((project) => (
                            <motion.div
                              key={project.id}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className={`p-4 bg-background-darker rounded-lg border border-gray-800 flex flex-col sm:flex-row items-start sm:items-center gap-4 relative overflow-hidden`}
                            >
                              <div className={`absolute left-0 top-0 w-1 h-full ${statusColors[project.status]}`}></div>
                              
                              <div className="flex-shrink-0 ml-2">
                                <span className="text-2xl">{project.icon}</span>
                              </div>
                              
                              <div className="flex-grow">
                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                  <h3 className="text-lg font-semibold text-text-primary">{project.title}</h3>
                                  <span className={`px-2 py-0.5 rounded-full text-xs ${project.status === 'Completed' ? 'bg-success/10 text-success' : project.status === 'In Progress' ? 'bg-blue-500/10 text-blue-500' : 'bg-gray-600/10 text-gray-400'}`}>
                                    {project.status}
                                  </span>
                                </div>
                                <p className="text-sm text-text-secondary mb-2">{project.description}</p>
                                <div className="flex flex-wrap gap-1">
                                  {project.tags.slice(0, 3).map(tag => (
                                    <span key={tag} className="text-xs px-2 py-0.5 bg-background-dark rounded-full">
                                      {tag}
                                    </span>
                                  ))}
                                  {project.tags.length > 3 && (
                                    <span className="text-xs px-2 py-0.5 bg-background-dark rounded-full">
                                      +{project.tags.length - 3}
                                    </span>
                                  )}
                                </div>
                              </div>
                              
                              <div className="flex gap-2 ml-auto self-end sm:self-center">
                                <button
                                  onClick={() => handleViewDetails(project)}
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
                  {filteredProjects.map((project) => (
                    <motion.div key={project.id} variants={item}>
                      <Card
                        id={project.id}
                        title={project.title}
                        description={project.description}
                        status={project.status}
                        githubLink={project.githubLink}
                        tags={project.tags}
                        detailsLink="#"
                        onViewDetails={() => handleViewDetails(project)}
                        month={project.month}
                        icon={project.icon}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <div className="space-y-4">
                  {filteredProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 bg-background-darker rounded-lg border border-gray-800 flex flex-col sm:flex-row items-start sm:items-center gap-4 relative overflow-hidden`}
                    >
                      <div className={`absolute left-0 top-0 w-1 h-full ${statusColors[project.status]}`}></div>
                      
                      <div className="flex-shrink-0 ml-2">
                        <span className="text-2xl">{project.icon}</span>
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-lg font-semibold text-text-primary">{project.title}</h3>
                          <span className={`px-2 py-0.5 rounded-full text-xs ${project.status === 'Completed' ? 'bg-success/10 text-success' : project.status === 'In Progress' ? 'bg-blue-500/10 text-blue-500' : 'bg-gray-600/10 text-gray-400'}`}>
                            {project.status}
                          </span>
                        </div>
                        <p className="text-sm text-text-secondary mb-2">{project.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {project.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-xs px-2 py-0.5 bg-background-dark rounded-full">
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 3 && (
                            <span className="text-xs px-2 py-0.5 bg-background-dark rounded-full">
                              +{project.tags.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex gap-2 ml-auto self-end sm:self-center">
                        <button
                          onClick={() => handleViewDetails(project)}
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
          </AnimatePresence>
        </div>
      ) : (
        <MilestoneDetail project={selectedProject} onBack={handleBack} />
      )}
    </div>
  );
} 