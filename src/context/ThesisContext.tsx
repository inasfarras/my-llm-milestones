'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThesisMilestone, thesisData as initialThesisData } from '@/data/thesis';

interface ThesisContextType {
  thesisData: {
    title: string;
    description: string;
    supervisor: string;
    department: string;
    pdfLink?: string;
    milestones: ThesisMilestone[];
  };
  updateMilestoneStatus: (milestoneId: string, newStatus: 'Completed' | 'In Progress' | 'Not Started') => void;
  stats: {
    completed: number;
    inProgress: number;
    notStarted: number;
    total: number;
    completedPercentage: number;
  };
}

const ThesisContext = createContext<ThesisContextType | undefined>(undefined);

interface ThesisProviderProps {
  children: ReactNode;
}

export const ThesisProvider = ({ children }: ThesisProviderProps) => {
  const [thesisData, setThesisData] = useState(initialThesisData);
  const [stats, setStats] = useState({
    completed: 0,
    inProgress: 0,
    notStarted: 0,
    total: initialThesisData.milestones.length,
    completedPercentage: 0,
  });
  
  // Calculate stats whenever thesis milestones change
  useEffect(() => {
    const completed = thesisData.milestones.filter(m => m.status === 'Completed').length;
    const inProgress = thesisData.milestones.filter(m => m.status === 'In Progress').length;
    const notStarted = thesisData.milestones.filter(m => m.status === 'Not Started').length;
    
    setStats({
      completed,
      inProgress,
      notStarted,
      total: thesisData.milestones.length,
      completedPercentage: Math.round((completed / thesisData.milestones.length) * 100)
    });
  }, [thesisData]);
  
  const updateMilestoneStatus = (milestoneId: string, newStatus: 'Completed' | 'In Progress' | 'Not Started') => {
    setThesisData(prev => ({
      ...prev,
      milestones: prev.milestones.map(milestone => 
        milestone.id === milestoneId 
          ? { ...milestone, status: newStatus } 
          : milestone
      )
    }));
    
    // Store updated thesis data in localStorage
    try {
      const updatedMilestones = thesisData.milestones.map(m => 
        m.id === milestoneId ? { ...m, status: newStatus } : m
      );
      
      localStorage.setItem('thesisMilestones', JSON.stringify(
        updatedMilestones.map(m => ({ id: m.id, status: m.status }))
      ));
    } catch (error) {
      console.error('Error saving thesis data to localStorage:', error);
    }
  };
  
  // Load saved thesis milestone statuses from localStorage on initial load
  useEffect(() => {
    try {
      const savedMilestones = localStorage.getItem('thesisMilestones');
      
      if (savedMilestones) {
        const parsedMilestones = JSON.parse(savedMilestones) as { id: string; status: 'Completed' | 'In Progress' | 'Not Started' }[];
        
        // Apply saved statuses to thesis milestones
        setThesisData(prev => ({
          ...prev,
          milestones: prev.milestones.map(milestone => {
            const savedMilestone = parsedMilestones.find(m => m.id === milestone.id);
            return savedMilestone ? { ...milestone, status: savedMilestone.status } : milestone;
          })
        }));
      }
    } catch (error) {
      console.error('Error loading thesis data from localStorage:', error);
    }
  }, []);
  
  return (
    <ThesisContext.Provider value={{ thesisData, updateMilestoneStatus, stats }}>
      {children}
    </ThesisContext.Provider>
  );
};

export const useThesis = () => {
  const context = useContext(ThesisContext);
  if (context === undefined) {
    throw new Error('useThesis must be used within a ThesisProvider');
  }
  return context;
}; 