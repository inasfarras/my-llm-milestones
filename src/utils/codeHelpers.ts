/**
 * Gets the language name from a file name/extension
 */
export const getLanguageFromFileName = (fileName: string): string => {
  const extension = fileName.split('.').pop()?.toLowerCase();
  
  const languageMap: Record<string, string> = {
    js: 'javascript',
    jsx: 'jsx',
    ts: 'typescript',
    tsx: 'tsx',
    py: 'python',
    html: 'html',
    css: 'css',
    scss: 'scss',
    md: 'markdown',
    json: 'json',
    java: 'java',
    cpp: 'cpp',
    c: 'c',
    cs: 'csharp',
    rb: 'ruby',
    php: 'php',
    go: 'go',
    rs: 'rust',
    swift: 'swift',
    kt: 'kotlin',
    sql: 'sql',
    sh: 'bash',
    bat: 'batch',
    ps1: 'powershell',
    yaml: 'yaml',
    yml: 'yaml',
    xml: 'xml',
    txt: 'text',
  };
  
  return extension ? (languageMap[extension] || 'text') : 'text';
};

/**
 * List of supported languages for code snippets
 */
export const supportedLanguages = [
  { label: 'JavaScript', value: 'javascript' },
  { label: 'TypeScript', value: 'typescript' },
  { label: 'Python', value: 'python' },
  { label: 'HTML', value: 'html' },
  { label: 'CSS', value: 'css' },
  { label: 'JSX', value: 'jsx' },
  { label: 'TSX', value: 'tsx' },
  { label: 'Java', value: 'java' },
  { label: 'C', value: 'c' },
  { label: 'C++', value: 'cpp' },
  { label: 'C#', value: 'csharp' },
  { label: 'Go', value: 'go' },
  { label: 'Ruby', value: 'ruby' },
  { label: 'Rust', value: 'rust' },
  { label: 'PHP', value: 'php' },
  { label: 'Swift', value: 'swift' },
  { label: 'Kotlin', value: 'kotlin' },
  { label: 'SQL', value: 'sql' },
  { label: 'Bash', value: 'bash' },
  { label: 'Markdown', value: 'markdown' },
  { label: 'JSON', value: 'json' },
  { label: 'YAML', value: 'yaml' },
  { label: 'Text', value: 'text' },
]; 