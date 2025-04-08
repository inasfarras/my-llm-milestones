'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Project, projects as initialProjects } from '@/data/projects';

interface ProjectContextType {
  projects: Project[];
  updateProjectStatus: (projectId: string, newStatus: 'Completed' | 'In Progress' | 'Not Started') => void;
  stats: {
    completed: number;
    inProgress: number;
    notStarted: number;
    total: number;
    completedPercentage: number;
  };
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

interface ProjectProviderProps {
  children: ReactNode;
}

export const ProjectProvider = ({ children }: ProjectProviderProps) => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [stats, setStats] = useState({
    completed: 0,
    inProgress: 0,
    notStarted: 0,
    total: initialProjects.length,
    completedPercentage: 0,
  });
  
  // Calculate stats whenever projects change
  useEffect(() => {
    const completed = projects.filter(p => p.status === 'Completed').length;
    const inProgress = projects.filter(p => p.status === 'In Progress').length;
    const notStarted = projects.filter(p => p.status === 'Not Started').length;
    
    setStats({
      completed,
      inProgress,
      notStarted,
      total: projects.length,
      completedPercentage: Math.round((completed / projects.length) * 100)
    });
  }, [projects]);
  
  const updateProjectStatus = (projectId: string, newStatus: 'Completed' | 'In Progress' | 'Not Started') => {
    setProjects(prevProjects => 
      prevProjects.map(project => 
        project.id === projectId 
          ? { ...project, status: newStatus } 
          : project
      )
    );
    
    // Store updated projects in localStorage with current state
    try {
      const updatedProjects = projects.map(p => p.id === projectId ? { ...p, status: newStatus } : p);
      localStorage.setItem('projectStatuses', JSON.stringify(
        updatedProjects.map(p => ({ id: p.id, status: p.status }))
      ));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };
  
  // Load saved statuses from localStorage on initial load
  useEffect(() => {
    try {
      const savedStatuses = localStorage.getItem('projectStatuses');
      
      if (savedStatuses) {
        const parsedStatuses = JSON.parse(savedStatuses) as { id: string; status: 'Completed' | 'In Progress' | 'Not Started' }[];
        
        // Apply saved statuses to projects
        setProjects(prevProjects => 
          prevProjects.map(project => {
            const savedStatus = parsedStatuses.find(s => s.id === project.id);
            return savedStatus ? { ...project, status: savedStatus.status } : project;
          })
        );
      }
    } catch (error) {
      console.error('Error loading from localStorage:', error);
    }
  }, []);
  
  return (
    <ProjectContext.Provider value={{ projects, updateProjectStatus, stats }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProjects must be used within a ProjectProvider');
  }
  return context;
}; 