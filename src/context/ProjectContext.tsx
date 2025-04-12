'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Milestone, milestones as initialMilestones } from '@/data/projects';

interface MilestoneContextType {
  milestones: Milestone[];
  updateMilestoneStatus: (milestoneId: string, newStatus: 'Completed' | 'In Progress' | 'Not Started') => void;
  stats: {
    completed: number;
    inProgress: number;
    notStarted: number;
    total: number;
    completedPercentage: number;
  };
}

const MilestoneContext = createContext<MilestoneContextType | undefined>(undefined);

interface MilestoneProviderProps {
  children: ReactNode;
}

export const MilestoneProvider = ({ children }: MilestoneProviderProps) => {
  const [milestones, setMilestones] = useState<Milestone[]>(initialMilestones);
  const [stats, setStats] = useState({
    completed: 0,
    inProgress: 0,
    notStarted: 0,
    total: initialMilestones.length,
    completedPercentage: 0,
  });
  
  // Calculate stats whenever milestones change
  useEffect(() => {
    const completed = milestones.filter(p => p.status === 'Completed').length;
    const inProgress = milestones.filter(p => p.status === 'In Progress').length;
    const notStarted = milestones.filter(p => p.status === 'Not Started').length;
    
    setStats({
      completed,
      inProgress,
      notStarted,
      total: milestones.length,
      completedPercentage: Math.round((completed / milestones.length) * 100)
    });
  }, [milestones]);
  
  const updateMilestoneStatus = (milestoneId: string, newStatus: 'Completed' | 'In Progress' | 'Not Started') => {
    setMilestones(prevMilestones => 
      prevMilestones.map(milestone => 
        milestone.id === milestoneId 
          ? { ...milestone, status: newStatus } 
          : milestone
      )
    );
    
    // Store updated milestones in localStorage with current state
    try {
      const updatedMilestones = milestones.map(m => m.id === milestoneId ? { ...m, status: newStatus } : m);
      localStorage.setItem('milestoneStatuses', JSON.stringify(
        updatedMilestones.map(m => ({ id: m.id, status: m.status }))
      ));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };
  
  // Load saved statuses from localStorage on initial load
  useEffect(() => {
    try {
      const savedStatuses = localStorage.getItem('milestoneStatuses') || localStorage.getItem('projectStatuses');
      
      if (savedStatuses) {
        const parsedStatuses = JSON.parse(savedStatuses) as { id: string; status: 'Completed' | 'In Progress' | 'Not Started' }[];
        
        // Apply saved statuses to milestones
        setMilestones(prevMilestones => 
          prevMilestones.map(milestone => {
            const savedStatus = parsedStatuses.find(s => s.id === milestone.id);
            return savedStatus ? { ...milestone, status: savedStatus.status } : milestone;
          })
        );
      }
    } catch (error) {
      console.error('Error loading from localStorage:', error);
    }
  }, []);
  
  return (
    <MilestoneContext.Provider value={{ milestones, updateMilestoneStatus, stats }}>
      {children}
    </MilestoneContext.Provider>
  );
};

// For backwards compatibility
export const ProjectProvider = MilestoneProvider;

export const useMilestones = () => {
  const context = useContext(MilestoneContext);
  if (context === undefined) {
    throw new Error('useMilestones must be used within a MilestoneProvider');
  }
  return context;
};

// For backwards compatibility
export const useProjects = useMilestones; 