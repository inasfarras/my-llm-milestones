'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useProjects } from '@/context/ProjectContext'
import Link from 'next/link'
import dynamic from 'next/dynamic'

// Dynamically import ProjectCard
const ProjectCard = dynamic(
  () => import('./ProjectCard').then((mod) => mod.default),
  {
    loading: () => (
      <div className="animate-pulse bg-gray-800 rounded-lg p-4">
        <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-700 rounded w-1/2"></div>
      </div>
    )
  }
)

// ... rest of the existing code ... 