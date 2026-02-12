import {
  Code2,
  Server,
  Brain,
  Cloud,
  type LucideIcon,
} from 'lucide-react'

export type SkillCategory = {
  icon: LucideIcon
  title: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    icon: Code2,
    title: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'Astro',
      'TypeScript',
      'Tailwind CSS',
      'HTML/CSS',
    ],
  },
  {
    icon: Server,
    title: 'Backend',
    skills: [
      'Node.js',
      'Python',
      'FastAPI',
      'Express.js',
      'REST APIs',
      'GraphQL',
    ],
  },
  {
    icon: Brain,
    title: 'AI & ML',
    skills: [
      'LangChain',
      'OpenAI',
      'RAG',
      'Vector DBs',
      'Prompt Engineering',
      'LLM Fine-tuning',
    ],
  },
  {
    icon: Cloud,
    title: 'DevOps & Cloud',
    skills: [
      'Docker',
      'AWS',
      'CI/CD',
      'Git',
      'Vercel',
      'PostgreSQL',
    ],
  },
]
