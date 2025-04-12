'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { DocumentTextIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

interface ProjectCardProps {
  id: string
  title: string
  description: string
  language: string
  lastUpdated: string
}

const ProjectCard = ({ id, title, description, language, lastUpdated }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300"
    >
      <Link href={`/projects/${id}`} className="block p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-400 text-sm">{description}</p>
          </div>
          <div className="flex items-center space-x-2">
            <CodeBracketIcon className="w-5 h-5 text-blue-400" />
            <span className="text-sm text-gray-400">{language}</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <DocumentTextIcon className="w-4 h-4 mr-1" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProjectCard 