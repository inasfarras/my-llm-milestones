'use client';

import { motion } from 'framer-motion';
import { ThesisInfo } from '@/data/thesis';
import Link from 'next/link';
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';

interface ThesisHeaderProps {
  thesisInfo: ThesisInfo;
}

export default function ThesisHeader({ thesisInfo }: ThesisHeaderProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto text-center px-4 py-12"
    >
      <div className="bg-background-darker p-10 rounded-xl border border-gray-800 shadow-xl">
        <div className="relative inline-block mb-6">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary opacity-75 rounded-lg blur"></div>
          <h1 className="relative text-3xl md:text-4xl font-bold text-text-primary bg-background-darker px-6 py-3 rounded-lg">
            {thesisInfo.title}
          </h1>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
          <div className="px-5 py-3 bg-background-dark rounded-lg border border-gray-800 shadow-md">
            <span className="text-gray-400 text-sm block mb-1">Supervisor</span>
            <p className="text-text-primary font-medium">{thesisInfo.supervisor}</p>
          </div>

          <div className="px-5 py-3 bg-background-dark rounded-lg border border-gray-800 shadow-md">
            <span className="text-gray-400 text-sm block mb-1">Department</span>
            <p className="text-text-primary font-medium">{thesisInfo.department}</p>
          </div>
        </div>

        <div className="mt-8 mb-10 p-6 bg-background-dark rounded-lg border border-gray-800 text-left">
          <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center">
            <span className="bg-primary/20 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            Abstract
          </h2>
          <p className="text-text-secondary leading-relaxed border-l-2 border-gray-700 pl-4">
            {thesisInfo.description}
          </p>
        </div>

        {thesisInfo.pdfLink && (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href={thesisInfo.pdfLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover rounded-lg shadow-lg shadow-primary/20 transition-colors text-white"
            >
              <DocumentArrowDownIcon className="h-5 w-5" />
              Download Thesis PDF
            </Link>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
} 