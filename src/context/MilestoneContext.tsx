'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Milestone, milestones as initialMilestones } from '@/data/projects';

interface MilestoneContextType {
  milestones: Milestone[];
  updateMilestoneStatus: (milestoneId: string, newStatus: 'Completed' | 'In Progress' | 'Not Started') => void;
  addCodeSnippet: (milestoneId: string, snippet: { title: string; language: string; code: string }) => void;
  editCodeSnippet: (milestoneId: string, snippetIndex: number, updatedSnippet: { title: string; language: string; code: string }) => void;
  deleteCodeSnippet: (milestoneId: string, snippetIndex: number) => void;
  addGithubResource: (milestoneId: string, resource: { title: string; description: string; url: string }) => void;
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
  
  // Add a new code snippet to a milestone
  const addCodeSnippet = (milestoneId: string, snippet: { title: string; language: string; code: string }) => {
    setMilestones(prevMilestones => {
      // Create the updated milestones array
      const updatedMilestones = prevMilestones.map(milestone => {
        if (milestone.id === milestoneId) {
          const codeSnippets = milestone.codeSnippets ? [...milestone.codeSnippets, snippet] : [snippet];
          return { ...milestone, codeSnippets };
        }
        return milestone;
      });
      
      // Update localStorage with the new milestones state
      try {
        localStorage.setItem('milestoneCodeSnippets', JSON.stringify(
          updatedMilestones
            .filter(m => m.codeSnippets && m.codeSnippets.length > 0)
            .map(m => ({ id: m.id, codeSnippets: m.codeSnippets }))
        ));
      } catch (error) {
        console.error('Error saving code snippets to localStorage:', error);
      }
      
      // Return the updated state
      return updatedMilestones;
    });
  };
  
  // Edit an existing code snippet
  const editCodeSnippet = (milestoneId: string, snippetIndex: number, updatedSnippet: { title: string; language: string; code: string }) => {
    setMilestones(prevMilestones => {
      // Create the updated milestones array
      const updatedMilestones = prevMilestones.map(milestone => {
        if (milestone.id === milestoneId && milestone.codeSnippets) {
          const newSnippets = [...milestone.codeSnippets];
          newSnippets[snippetIndex] = updatedSnippet;
          return { ...milestone, codeSnippets: newSnippets };
        }
        return milestone;
      });
      
      // Update localStorage with the new milestones state
      try {
        localStorage.setItem('milestoneCodeSnippets', JSON.stringify(
          updatedMilestones
            .filter(m => m.codeSnippets && m.codeSnippets.length > 0)
            .map(m => ({ id: m.id, codeSnippets: m.codeSnippets }))
        ));
      } catch (error) {
        console.error('Error saving edited code snippet to localStorage:', error);
      }
      
      // Return the updated state
      return updatedMilestones;
    });
  };
  
  // Delete a code snippet
  const deleteCodeSnippet = (milestoneId: string, snippetIndex: number) => {
    setMilestones(prevMilestones => {
      // Create the updated milestones array
      const updatedMilestones = prevMilestones.map(milestone => {
        if (milestone.id === milestoneId && milestone.codeSnippets) {
          const newSnippets = milestone.codeSnippets.filter((_, i) => i !== snippetIndex);
          return { ...milestone, codeSnippets: newSnippets.length > 0 ? newSnippets : undefined };
        }
        return milestone;
      });
      
      // Update localStorage with the new milestones state
      try {
        localStorage.setItem('milestoneCodeSnippets', JSON.stringify(
          updatedMilestones
            .filter(m => m.codeSnippets && m.codeSnippets.length > 0)
            .map(m => ({ id: m.id, codeSnippets: m.codeSnippets }))
        ));
      } catch (error) {
        console.error('Error saving code snippets after deletion to localStorage:', error);
      }
      
      // Return the updated state
      return updatedMilestones;
    });
  };
  
  // Add a new GitHub resource to a milestone
  const addGithubResource = (milestoneId: string, resource: { title: string; description: string; url: string }) => {
    setMilestones(prevMilestones => {
      // Create the updated milestones array
      const updatedMilestones = prevMilestones.map(milestone => {
        if (milestone.id === milestoneId) {
          const githubResources = milestone.githubResources ? [...milestone.githubResources, resource] : [resource];
          return { ...milestone, githubResources };
        }
        return milestone;
      });
      
      // Update localStorage with the new milestones state
      try {
        localStorage.setItem('milestoneGithubResources', JSON.stringify(
          updatedMilestones
            .filter(m => m.githubResources && m.githubResources.length > 0)
            .map(m => ({ id: m.id, githubResources: m.githubResources }))
        ));
      } catch (error) {
        console.error('Error saving GitHub resources to localStorage:', error);
      }
      
      // Return the updated state
      return updatedMilestones;
    });
  };
  
  // Load saved statuses from localStorage on initial load
  useEffect(() => {
    try {
      // Load status information
      const savedStatuses = localStorage.getItem('milestoneStatuses') || localStorage.getItem('projectStatuses');
      const savedCodeSnippets = localStorage.getItem('milestoneCodeSnippets');
      const savedGithubResources = localStorage.getItem('milestoneGithubResources');
      
      let updatedMilestones = [...initialMilestones];
      
      // Apply saved statuses
      if (savedStatuses) {
        const parsedStatuses = JSON.parse(savedStatuses) as { id: string; status: 'Completed' | 'In Progress' | 'Not Started' }[];
        updatedMilestones = updatedMilestones.map(milestone => {
          const savedStatus = parsedStatuses.find(s => s.id === milestone.id);
          return savedStatus ? { ...milestone, status: savedStatus.status } : milestone;
        });
      }
      
      // Apply saved code snippets
      if (savedCodeSnippets) {
        const parsedCodeSnippets = JSON.parse(savedCodeSnippets) as { id: string; codeSnippets: Array<{ title: string; language: string; code: string }> }[];
        updatedMilestones = updatedMilestones.map(milestone => {
          const saved = parsedCodeSnippets.find(s => s.id === milestone.id);
          return saved ? { ...milestone, codeSnippets: saved.codeSnippets } : milestone;
        });
      }
      
      // Apply saved GitHub resources
      if (savedGithubResources) {
        const parsedGithubResources = JSON.parse(savedGithubResources) as { id: string; githubResources: Array<{ title: string; description: string; url: string }> }[];
        updatedMilestones = updatedMilestones.map(milestone => {
          const saved = parsedGithubResources.find(s => s.id === milestone.id);
          return saved ? { ...milestone, githubResources: saved.githubResources } : milestone;
        });
      }
      
      setMilestones(updatedMilestones);
    } catch (error) {
      console.error('Error loading from localStorage:', error);
    }
  }, []);
  
  return (
    <MilestoneContext.Provider value={{ 
      milestones, 
      updateMilestoneStatus, 
      addCodeSnippet, 
      editCodeSnippet,
      deleteCodeSnippet,
      addGithubResource, 
      stats 
    }}>
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