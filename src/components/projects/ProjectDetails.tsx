'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useProjects } from '@/context/ProjectContext'
import { useParams } from 'next/navigation'
import { ArrowLeftIcon, PencilIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import dynamic from 'next/dynamic'

// Dynamically import CodeEditor
const CodeEditor = dynamic(
  () => import('./CodeEditor').then((mod) => mod.default),
  { 
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-full">
        <div className="animate-pulse">Loading editor...</div>
      </div>
    )
  }
)

// ... rest of the existing code ... 