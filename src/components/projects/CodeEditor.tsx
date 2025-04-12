'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { DocumentTextIcon } from '@heroicons/react/24/outline'

// Dynamically import CodeMirror with no SSR
const CodeMirror = dynamic(
  () => import('@uiw/react-codemirror').then((mod) => mod.default),
  { ssr: false }
)

interface CodeEditorProps {
  code: string
  onCodeChange: (code: string) => void
  language?: string
  readOnly?: boolean
}

const CodeEditor = ({
  code,
  onCodeChange,
  language = 'javascript',
  readOnly = false,
}: CodeEditorProps) => {
  const [isMounted, setIsMounted] = useState(false)
  const [theme, setTheme] = useState<any>(null)
  const [lang, setLang] = useState<any>(null)

  useEffect(() => {
    const loadDependencies = async () => {
      const [cm, javascript] = await Promise.all([
        import('@uiw/react-codemirror'),
        import('@codemirror/lang-javascript')
      ])
      setTheme(cm.oneDark)
      setLang(javascript.javascript)
      setIsMounted(true)
    }
    loadDependencies()
  }, [])

  if (!isMounted || !theme || !lang) {
    return (
      <div className="flex items-center justify-center h-full">
        <DocumentTextIcon className="w-8 h-8 text-gray-400 animate-pulse" />
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative h-full"
    >
      <CodeMirror
        value={code}
        height="100%"
        theme={theme}
        extensions={[lang()]}
        onChange={(value) => onCodeChange(value)}
        readOnly={readOnly}
        className="h-full text-sm"
      />
    </motion.div>
  )
}

export default CodeEditor 