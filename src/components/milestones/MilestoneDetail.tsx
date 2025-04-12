'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Milestone } from '@/data/projects';
import { motion } from 'framer-motion';
import { useMilestones } from '@/context/MilestoneContext';
import { DocumentTextIcon, VideoCameraIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useDropzone } from 'react-dropzone';
import { getLanguageFromFileName, supportedLanguages } from '@/utils/codeHelpers';
import dynamic from 'next/dynamic';

// Import CodeMirror dynamically to avoid SSR issues
const CodeEditor = dynamic(
  () => import('@uiw/react-codemirror').then((mod) => mod.default),
  { ssr: false }
);

// Add a custom GitHubIcon since it's not in HeroIcons
function GitHubIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

// Add proper types for the form states
interface GithubResource {
  title: string;
  description: string;
  url: string;
}

interface CodeSnippet {
  title: string;
  language: string;
  code: string;
}

// Update the component props interface
interface MilestoneDetailProps {
  milestone: Milestone;
  onBack: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function MilestoneDetail({ milestone, onBack }: MilestoneDetailProps) {
  const { updateMilestoneStatus, addCodeSnippet, editCodeSnippet, deleteCodeSnippet, addGithubResource, milestones } = useMilestones();
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [activeCodeSnippet, setActiveCodeSnippet] = useState<number>(0);
  const [showAddSnippetForm, setShowAddSnippetForm] = useState<boolean>(false);
  const [newSnippet, setNewSnippet] = useState<CodeSnippet>({ title: '', language: 'python', code: '' });
  const [showAddGithubForm, setShowAddGithubForm] = useState<boolean>(false);
  const [newGithubResource, setNewGithubResource] = useState<GithubResource>({ title: '', description: '', url: '' });
  const [editingSnippet, setEditingSnippet] = useState<{ index: number; snippet: CodeSnippet } | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  
  // Reset active snippet when milestone changes
  useEffect(() => {
    setActiveCodeSnippet(0);
    setEditingSnippet(null);
    setShowAddSnippetForm(false);
  }, [milestone.id]);
  
  // Memoize handlers to prevent unnecessary re-renders
  const handleStatusChange = useCallback((newStatus: 'Completed' | 'In Progress' | 'Not Started') => {
    setIsUpdating(true);
    setTimeout(() => {
      updateMilestoneStatus(milestone.id, newStatus);
      setIsUpdating(false);
    }, 600);
  }, [milestone.id, updateMilestoneStatus]);
  
  // Calculate current month and progress
  const currentMonth = milestone.month;
  
  // Find milestones in the same month
  const milestonesInMonth = useMemo(() => 
    milestones.filter(p => p.month === currentMonth),
    [milestones, currentMonth]
  );
  
  // Calculate progress
  const completedInMonth = useMemo(() => 
    milestonesInMonth.filter(p => p.status === 'Completed').length,
    [milestonesInMonth]
  );
  const progress = useMemo(() => 
    Math.round((completedInMonth / milestonesInMonth.length) * 100),
    [completedInMonth, milestonesInMonth.length]
  );
  
  // Find this milestone's index in the month
  const milestoneIndex = useMemo(() => 
    milestonesInMonth.findIndex(p => p.id === milestone.id),
    [milestonesInMonth, milestone.id]
  );
  
  // Handle edit snippet
  const handleEditSnippet = useCallback((index: number) => {
    if (milestone.codeSnippets && milestone.codeSnippets[index]) {
      const snippet = milestone.codeSnippets[index];
      setEditingSnippet({ index, snippet: { ...snippet } });
    }
  }, [milestone.codeSnippets]);
  
  // Handle save edited snippet
  const handleSaveEditedSnippet = useCallback(() => {
    if (editingSnippet && editingSnippet.snippet.title && editingSnippet.snippet.code) {
      editCodeSnippet(milestone.id, editingSnippet.index, editingSnippet.snippet);
      setEditingSnippet(null);
    }
  }, [editingSnippet, milestone.id, editCodeSnippet]);
  
  // Handle delete snippet
  const handleDeleteSnippet = useCallback((index: number) => {
    if (window.confirm('Are you sure you want to delete this code snippet?')) {
      deleteCodeSnippet(milestone.id, index);
      if (activeCodeSnippet >= index && activeCodeSnippet > 0) {
        setActiveCodeSnippet(prev => prev - 1);
      }
    }
  }, [milestone.id, activeCodeSnippet, deleteCodeSnippet]);
  
  // File dropzone for code import
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'text/plain': ['.txt', '.js', '.py', '.html', '.css', '.ts', '.jsx', '.tsx', '.md', '.json', '.yaml', '.yml'],
    },
    onDrop: useCallback((acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        const reader = new FileReader();
        
        reader.onload = () => {
          const fileText = reader.result as string;
          console.log('File loaded:', file.name, 'Content length:', fileText.length);
          
          if (editingSnippet) {
            setEditingSnippet(prev => ({
              ...prev!,
              snippet: {
                ...prev!.snippet,
                title: file.name,
                language: getLanguageFromFileName(file.name),
                code: fileText
              }
            }));
            
            // Force re-render of CodeEditor
            setTimeout(() => {
              const editorElement = document.querySelector('.cm-editor');
              if (editorElement) {
                editorElement.dispatchEvent(new Event('focus'));
              }
            }, 100);
          } else {
            setNewSnippet({
              title: file.name,
              language: getLanguageFromFileName(file.name),
              code: fileText
            });
            
            // Force re-render of CodeEditor
            setTimeout(() => {
              const editorElement = document.querySelector('.cm-editor');
              if (editorElement) {
                editorElement.dispatchEvent(new Event('focus'));
              }
            }, 100);
          }
        };
        
        reader.readAsText(file);
      }
    }, [editingSnippet])
  });
  
  // Status text explanations
  const statusExplanations = {
    'Completed': 'This milestone has been successfully completed.',
    'In Progress': 'You are currently working on this milestone.',
    'Not Started': 'This milestone is planned but not yet started.'
  };

  return (
    <div className="max-w-4xl mx-auto" role="main">
      {/* Breadcrumb navigation */}
      <div className="mb-8">
        <button 
          onClick={onBack}
          className="text-text-secondary hover:text-white flex items-center"
          aria-label="Back to all milestones"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to all milestones
        </button>
      </div>
      
      {/* Main milestone card */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
        className="bg-background-darker rounded-xl border border-gray-800 overflow-hidden mb-12"
        role="article"
      >
        {/* Status badge */}
        <div 
          className={`p-2 text-center ${
            milestone.status === 'Completed' 
              ? 'bg-success' 
              : milestone.status === 'In Progress' 
                ? 'bg-blue-500' 
                : 'bg-gray-600'
          }`}
          role="status"
          aria-label={`Current status: ${milestone.status}`}
        >
          <span className="text-white font-medium">
            Status: {milestone.status}
          </span>
        </div>
          
        <div className="p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-4">{milestone.icon}</span>
                <h1 className="text-3xl font-bold text-text-primary">{milestone.title}</h1>
            </div>
              <div className="text-text-secondary mb-2">
                Month {milestone.month} Milestone
          </div>
            </div>
            
            {/* Status controls */}
            <div className="flex flex-col space-y-2">
              <div className="bg-background-dark p-4 rounded-lg">
                <h3 className="text-sm uppercase tracking-wide text-text-secondary mb-3">Update Status</h3>
                
                <div className="flex flex-col space-y-2">
            <button
                    disabled={isUpdating || milestone.status === 'Completed'}
              onClick={() => handleStatusChange('Completed')}
                    className={`px-4 py-2 rounded text-sm font-medium flex items-center ${
                      milestone.status === 'Completed'
                        ? 'bg-success text-white cursor-default'
                        : 'bg-success/10 text-success hover:bg-success/20'
                    } ${isUpdating ? 'opacity-50 cursor-wait' : ''}`}
                  >
                    {isUpdating && milestone.status !== 'Completed' ? (
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      <span className="w-4 h-4 mr-2 flex items-center justify-center">
                        {milestone.status === 'Completed' && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </span>
                    )}
                    Completed
            </button>
            
            <button
                    disabled={isUpdating || milestone.status === 'In Progress'}
              onClick={() => handleStatusChange('In Progress')}
                    className={`px-4 py-2 rounded text-sm font-medium flex items-center ${
                      milestone.status === 'In Progress'
                        ? 'bg-blue-500 text-white cursor-default'
                        : 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20'
                    } ${isUpdating ? 'opacity-50 cursor-wait' : ''}`}
                  >
                    {isUpdating && milestone.status !== 'In Progress' ? (
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      <span className="w-4 h-4 mr-2 flex items-center justify-center">
                        {milestone.status === 'In Progress' && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        )}
                      </span>
                    )}
                    In Progress
            </button>
            
            <button
                    disabled={isUpdating || milestone.status === 'Not Started'}
              onClick={() => handleStatusChange('Not Started')}
                    className={`px-4 py-2 rounded text-sm font-medium flex items-center ${
                      milestone.status === 'Not Started'
                        ? 'bg-gray-600 text-white cursor-default'
                        : 'bg-gray-600/10 text-gray-400 hover:bg-gray-600/20'
                    } ${isUpdating ? 'opacity-50 cursor-wait' : ''}`}
                  >
                    {isUpdating && milestone.status !== 'Not Started' ? (
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      <span className="w-4 h-4 mr-2 flex items-center justify-center">
                        {milestone.status === 'Not Started' && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        )}
                      </span>
                    )}
                    Not Started
            </button>
          </div>
        </div>
        
              {/* GitHub link if available */}
              {milestone.githubLink && (
                <a
                  href={milestone.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-background-dark text-text-secondary hover:text-white rounded flex items-center justify-center"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View on GitHub
                </a>
              )}
            </div>
            </div>
            
          {/* Description and details */}
            <div className="mb-8">
            <h2 className="text-xl font-bold text-text-primary mb-4">Description</h2>
            <p className="text-text-secondary">{milestone.description}</p>
                    </div>
          
          {/* Status explanation */}
          <div className="mb-8 p-4 rounded-lg bg-background-dark border border-gray-800">
            <div className="flex items-center">
              <div className={`h-10 w-10 rounded-full flex items-center justify-center mr-4 ${
                milestone.status === 'Completed' 
                  ? 'bg-success/20 text-success' 
                  : milestone.status === 'In Progress' 
                    ? 'bg-blue-500/20 text-blue-500' 
                    : 'bg-gray-600/20 text-gray-400'
              }`}>
                {milestone.status === 'Completed' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : milestone.status === 'In Progress' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                )}
              </div>
              <div>
                <h3 className="text-lg font-medium text-text-primary">Status: {milestone.status}</h3>
                <p className="text-text-secondary">{statusExplanations[milestone.status]}</p>
              </div>
            </div>
          </div>
          
          {/* Additional info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="bg-background-dark p-4 rounded-lg border border-gray-800">
              <h3 className="text-md font-medium text-text-primary mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                  {milestone.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-background-darker rounded-md text-sm text-text-secondary border border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-background-dark p-4 rounded-lg border border-gray-800">
              <h3 className="text-md font-medium text-text-primary mb-4">Journey Progress</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-text-secondary mb-2 flex justify-between">
                    <span>Overall Progress</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="h-2 bg-background-darker rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${progress}%` }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="text-sm text-text-secondary mb-2">
                      <span>This milestone is #{milestoneIndex + 1} of {milestonesInMonth.length} in Month {currentMonth}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-background-dark p-4 rounded-lg border border-gray-800">
                <h3 className="text-md font-medium text-text-primary mb-4">Learning Outcomes</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-secondary">Practical application of concepts</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-secondary">Implementation of industry best practices</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-secondary">Problem-solving and debugging skills</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-background-dark p-4 rounded-lg border border-gray-800">
                <h3 className="text-md font-medium text-text-primary mb-4">Milestone Timeline</h3>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-primary-200 text-primary">
                        Month {milestone.month}
                      </span>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute left-0 w-full h-1 bg-background-darker rounded-lg">
                      <div className="absolute left-0 h-full bg-primary rounded-lg" style={{ width: `${progress}%` }}></div>
                    </div>
                    <div className="relative flex justify-between pt-4">
                      <div className="text-xs text-text-secondary">Start</div>
                      <div className="text-xs text-text-secondary">Mid</div>
                      <div className="text-xs text-text-secondary">End</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-background-dark p-4 rounded-lg border border-gray-800">
                <h3 className="text-md font-medium text-text-primary mb-4">GitHub Resources</h3>
                <div className="space-y-3">
                  {/* GitHub Resources */}
                  {milestone.githubResources && milestone.githubResources.length > 0 ? (
                    milestone.githubResources.map((resource, index) => (
                      <a key={index} href={resource.url} target="_blank" rel="noopener noreferrer" className="block p-3 bg-background-darker rounded-md hover:bg-primary/10 transition duration-150 border border-gray-800">
                        <div className="flex items-center">
                          <GitHubIcon className="h-5 w-5 text-primary mr-3" />
                          <div>
                            <h4 className="text-sm font-medium text-text-primary">{resource.title}</h4>
                            <p className="text-xs text-text-secondary">{resource.description}</p>
                            {resource.url.includes('vercel.app') && (
                              <span className="inline-flex items-center mt-1 px-2 py-0.5 rounded text-xs bg-blue-500/20 text-blue-400">
                                Vercel Deployment
                              </span>
                            )}
                          </div>
                        </div>
                      </a>
                    ))
                  ) : (
                    <p className="text-text-secondary text-sm mb-4">No GitHub resources added yet.</p>
                  )}
                  
                  {/* Add GitHub Resource Form */}
                  {showAddGithubForm && (
                    <div className="mt-4 p-4 border border-gray-700 rounded-md">
                      <h3 className="text-md font-medium text-text-primary mb-4">Add GitHub Resource</h3>
                      <form 
                        onSubmit={(e) => {
                          e.preventDefault();
                          if (newGithubResource.title && newGithubResource.url) {
                            addGithubResource(milestone.id, newGithubResource);
                            setNewGithubResource({ title: '', description: '', url: '' });
                            setShowAddGithubForm(false);
                          }
                        }}
                        className="space-y-4"
                      >
                        <div>
                          <label htmlFor="resource-title" className="block text-sm font-medium text-text-secondary mb-1">Title</label>
                          <input
                            id="resource-title"
                            type="text"
                            value={newGithubResource.title}
                            onChange={(e) => setNewGithubResource({...newGithubResource, title: e.target.value})}
                            className="w-full px-3 py-2 bg-background-darker border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                            placeholder="Enter resource title"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="resource-description" className="block text-sm font-medium text-text-secondary mb-1">Description</label>
                          <input
                            id="resource-description"
                            type="text"
                            value={newGithubResource.description}
                            onChange={(e) => setNewGithubResource({...newGithubResource, description: e.target.value})}
                            className="w-full px-3 py-2 bg-background-darker border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                            placeholder="Enter resource description"
                          />
                        </div>
                        <div>
                          <label htmlFor="resource-url" className="block text-sm font-medium text-text-secondary mb-1">GitHub URL</label>
                          <input
                            id="resource-url"
                            type="url"
                            value={newGithubResource.url}
                            onChange={(e) => setNewGithubResource({...newGithubResource, url: e.target.value})}
                            className="w-full px-3 py-2 bg-background-darker border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                            placeholder="https://github.com/username/repository"
                            required
                            pattern="https://.*"
                          />
                        </div>
                        <div className="flex justify-end space-x-2">
                          <button
                            type="button"
                            onClick={() => setShowAddGithubForm(false)}
                            className="px-4 py-2 border border-gray-700 rounded-md text-sm text-text-secondary hover:bg-gray-800"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="px-4 py-2 bg-primary hover:bg-primary/90 rounded-md text-sm text-white"
                            disabled={!newGithubResource.title || !newGithubResource.url}
                          >
                            Add Resource
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                  
                  {/* Update the Add GitHub Resource Button */}
                  <button 
                    onClick={() => setShowAddGithubForm(true)}
                    className="w-full mt-2 p-2 border border-dashed border-gray-700 rounded-md text-sm text-center text-gray-400 hover:text-white hover:border-gray-500 transition-colors"
                  >
                    + Add GitHub Resource
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Code Snippets Section (enhanced) */}
          {(milestone.codeSnippets && milestone.codeSnippets.length > 0) || showAddSnippetForm || editingSnippet ? (
            <div className="mt-8 p-6 bg-background-dark rounded-lg border border-gray-800">
              <h2 className="text-xl font-bold text-text-primary mb-4">Code Snippets</h2>
              
              {/* Code Snippet Tabs */}
              {milestone.codeSnippets && milestone.codeSnippets.length > 0 && !editingSnippet && !showAddSnippetForm && (
                <div className="mb-4" role="tablist">
                  <div className="flex border-b border-gray-800 overflow-x-auto space-x-2">
                    {milestone.codeSnippets.map((snippet, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveCodeSnippet(index)}
                        role="tab"
                        aria-selected={activeCodeSnippet === index}
                        aria-controls={`snippet-${index}`}
                        className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${
                          activeCodeSnippet === index
                            ? 'border-b-2 border-primary text-white'
                            : 'text-text-secondary hover:text-white'
                        }`}
                      >
                        {snippet.title}
                      </button>
                    ))}
                  </div>
                  
                  {/* Enhanced Code Display */}
                  {milestone.codeSnippets && milestone.codeSnippets[activeCodeSnippet] && (
                    <div className="mt-4">
                      <div className="relative bg-gray-900 rounded-md overflow-hidden">
                        <button
                          onClick={() => {
                            if (milestone.codeSnippets && milestone.codeSnippets[activeCodeSnippet]) {
                              navigator.clipboard.writeText(milestone.codeSnippets[activeCodeSnippet].code);
                              setCopied(true);
                              setTimeout(() => setCopied(false), 2000);
                            }
                          }}
                          className="absolute top-2 right-2 px-2 py-1 bg-gray-800 rounded text-xs text-gray-300 hover:bg-gray-700 z-10"
                        >
                          {copied ? 'Copied!' : 'Copy'}
                        </button>
                        <SyntaxHighlighter
                          language={milestone.codeSnippets[activeCodeSnippet].language}
                          style={vscDarkPlus}
                          customStyle={{ margin: 0, borderRadius: '0.375rem' }}
                          showLineNumbers
                        >
                          {milestone.codeSnippets[activeCodeSnippet].code}
                        </SyntaxHighlighter>
                      </div>
                      <div className="mt-2 flex justify-between">
                        <span className="text-xs text-gray-500">
                          Language: {milestone.codeSnippets[activeCodeSnippet].language}
                        </span>
                        <div className="space-x-2">
                          <button 
                            onClick={() => handleEditSnippet(activeCodeSnippet)}
                            className="text-xs text-blue-400 hover:text-blue-300"
                          >
                            Edit
                          </button>
                          <button 
                            onClick={() => handleDeleteSnippet(activeCodeSnippet)}
                            className="text-xs text-red-400 hover:text-red-300"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              {/* Edit Snippet Form */}
              {editingSnippet && (
                <div className="mt-4 p-4 border border-gray-700 rounded-md">
                  <h3 className="text-md font-medium text-text-primary mb-4">Edit Code Snippet</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-1">Title</label>
                      <input
                        type="text"
                        value={editingSnippet.snippet.title}
                        onChange={(e) => setEditingSnippet({
                          ...editingSnippet,
                          snippet: { ...editingSnippet.snippet, title: e.target.value }
                        })}
                        className="w-full px-3 py-2 bg-background-darker border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Enter snippet title"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-1">Language</label>
                      <select
                        value={editingSnippet.snippet.language}
                        onChange={(e) => setEditingSnippet({
                          ...editingSnippet,
                          snippet: { ...editingSnippet.snippet, language: e.target.value }
                        })}
                        className="w-full px-3 py-2 bg-background-darker border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        {supportedLanguages.map((lang) => (
                          <option key={lang.value} value={lang.value}>
                            {lang.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-1">
                        Code
                        <span className="ml-2 text-xs text-gray-500">
                          or drop a file here
                        </span>
                      </label>
                      <div 
                        {...getRootProps()} 
                        className={`border-2 ${isDragActive ? 'border-primary border-dashed' : 'border-gray-700'} rounded-md mb-2`}
                      >
                        <input {...getInputProps()} />
                        {isDragActive ? (
                          <div className="p-2 text-center text-sm text-primary">
                            Drop the file here...
                          </div>
                        ) : null}
                        {editingSnippet && (
                          <CodeEditor
                            key={`editor-${editingSnippet.snippet.title}-${Date.now()}`}
                            value={editingSnippet.snippet.code}
                            height="200px"
                            onChange={(value) => setEditingSnippet({
                              ...editingSnippet,
                              snippet: { ...editingSnippet.snippet, code: value }
                            })}
                            theme="dark"
                            className="border border-gray-800 rounded-md overflow-hidden"
                          />
                        )}
                      </div>
                    </div>
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => setEditingSnippet(null)}
                        className="px-4 py-2 border border-gray-700 rounded-md text-sm text-text-secondary hover:bg-gray-800"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleSaveEditedSnippet}
                        className="px-4 py-2 bg-primary hover:bg-primary/90 rounded-md text-sm text-white"
                        disabled={!editingSnippet.snippet.title || !editingSnippet.snippet.code}
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Add Code Snippet Form (enhanced) */}
              {showAddSnippetForm && !editingSnippet && (
                <div className="mt-4 p-4 border border-gray-700 rounded-md">
                  <h3 className="text-md font-medium text-text-primary mb-4">Add New Code Snippet</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-1">Title</label>
                      <input
                        type="text"
                        value={newSnippet.title}
                        onChange={(e) => setNewSnippet({...newSnippet, title: e.target.value})}
                        className="w-full px-3 py-2 bg-background-darker border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Enter snippet title"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-1">Language</label>
                      <select
                        value={newSnippet.language}
                        onChange={(e) => setNewSnippet({...newSnippet, language: e.target.value})}
                        className="w-full px-3 py-2 bg-background-darker border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        {supportedLanguages.map((lang) => (
                          <option key={lang.value} value={lang.value}>
                            {lang.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-1">
                        Code
                        <span className="ml-2 text-xs text-gray-500">
                          or drop a file here
                        </span>
                      </label>
                      <div 
                        {...getRootProps()} 
                        className={`border-2 ${isDragActive ? 'border-primary border-dashed' : 'border-gray-700'} rounded-md mb-2`}
                      >
                        <input {...getInputProps()} />
                        {isDragActive ? (
                          <div className="p-2 text-center text-sm text-primary">
                            Drop the file here...
                          </div>
                        ) : null}
                        <CodeEditor
                          key={`new-editor-${newSnippet.title}-${Date.now()}`}
                          value={newSnippet.code}
                          height="200px"
                          onChange={(value) => setNewSnippet({...newSnippet, code: value})}
                          theme="dark"
                          className="border border-gray-800 rounded-md overflow-hidden"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => setShowAddSnippetForm(false)}
                        className="px-4 py-2 border border-gray-700 rounded-md text-sm text-text-secondary hover:bg-gray-800"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => {
                          if (newSnippet.title && newSnippet.code) {
                            addCodeSnippet(milestone.id, newSnippet);
                            setNewSnippet({ title: '', language: 'python', code: '' });
                            setShowAddSnippetForm(false);
                          }
                        }}
                        className="px-4 py-2 bg-primary hover:bg-primary/90 rounded-md text-sm text-white"
                        disabled={!newSnippet.title || !newSnippet.code}
                      >
                        Save Snippet
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Add Snippet Button (if not showing form) */}
              {!showAddSnippetForm && !editingSnippet && (
                <button 
                  onClick={() => setShowAddSnippetForm(true)}
                  className="mt-4 w-full p-2 border border-dashed border-gray-700 rounded-md text-sm text-center text-gray-400 hover:text-white hover:border-gray-500 transition-colors"
                >
                  + Add Code Snippet
                </button>
              )}
            </div>
          ) : (
            <div className="mt-8">
              <button 
                onClick={() => setShowAddSnippetForm(true)}
                className="w-full p-4 border border-dashed border-gray-700 rounded-md text-center text-gray-400 hover:text-white hover:border-gray-500 transition-colors"
              >
                + Add Code Snippets
              </button>
            </div>
          )}
        </div>
      </motion.div>
      </div>
  );
} 