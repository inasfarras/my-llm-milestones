'use client';

import Card from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { useProjects } from '@/context/ProjectContext';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

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

export default function ProjectGrid() {
  const { projects } = useProjects();
  
  // Group projects by status
  const completed = projects.filter(project => project.status === 'Completed');
  const inProgress = projects.filter(project => project.status === 'In Progress');
  const notStarted = projects.filter(project => project.status === 'Not Started').slice(0, 2); // Only show first two not started

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 bg-background-darker p-8 rounded-xl border border-gray-800 shadow-xl text-center"
        >
          <h2 className="text-3xl font-bold text-text-primary mb-4">Featured Projects</h2>
          <p className="text-text-secondary max-w-3xl mx-auto">
            Explore my hands-on projects as I build practical skills in LLM development, fine-tuning, and application.
          </p>
        </motion.div>
        
        {/* Completed Projects */}
        {completed.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="h-4 w-4 rounded-full bg-success mr-3"></div>
              <h3 className="text-2xl font-bold text-text-primary">Completed</h3>
            </div>
            
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {completed.map((project) => (
                <motion.div key={project.id} variants={item} className="h-full">
                  <Card
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    status={project.status}
                    githubLink={project.githubLink}
                    detailsLink={project.detailsLink}
                    tags={project.tags}
                    month={project.month}
                    icon={project.icon}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
        
        {/* In Progress Projects */}
        {inProgress.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="h-4 w-4 rounded-full bg-blue-500 mr-3"></div>
              <h3 className="text-2xl font-bold text-text-primary">In Progress</h3>
            </div>
            
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {inProgress.map((project) => (
                <motion.div key={project.id} variants={item} className="h-full">
                  <Card
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    status={project.status}
                    githubLink={project.githubLink}
                    detailsLink={project.detailsLink}
                    tags={project.tags}
                    month={project.month}
                    icon={project.icon}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
        
        {/* Upcoming Projects (Not Started) */}
        {notStarted.length > 0 && (
          <div>
            <div className="flex items-center mb-8">
              <div className="h-4 w-4 rounded-full bg-gray-600 mr-3"></div>
              <h3 className="text-2xl font-bold text-text-primary">Coming Up Next</h3>
            </div>
            
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {notStarted.map((project) => (
                <motion.div key={project.id} variants={item} className="h-full">
                  <Card
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    status={project.status}
                    githubLink={project.githubLink}
                    detailsLink={project.detailsLink}
                    tags={project.tags}
                    month={project.month}
                    icon={project.icon}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
        
        {/* View All Button */}
        <div className="mt-16 text-center">
          <Link
            href="/milestones"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors"
          >
            View All Projects
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
} 