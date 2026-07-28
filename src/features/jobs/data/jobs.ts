export interface JobPlatformItem {
  label: string
  link: string
  description: string
  category: string
  tags: string[]
  imageUrl?: string
}

export const jobPlatforms: JobPlatformItem[] = [
  {
    label: 'LinkedIn Jobs',
    link: 'www.linkedin.com/jobs',
    description:
      'Professional networking platform with millions of job opportunities across industries. Connect with recruiters and showcase your professional profile.',
    category: 'Professional Networking',
    tags: ['Jobs', 'Networking', 'Career', 'Professional'],
    imageUrl: 'https://static.licdn.com/aero-v1/sc/h/akt4ae504epesldzj74dzred8'
  },
  {
    label: 'Naukri',
    link: 'www.naukri.com',
    description:
      "India's leading job portal with extensive listings across various industries. Find opportunities in IT, management, sales, and more.",
    category: 'Job Portal',
    tags: ['Jobs', 'India', 'Career', 'Employment']
  },
  {
    label: 'Instahyre',
    link: 'www.instahyre.com',
    description:
      'Tech-focused job platform connecting skilled professionals with innovative companies. Specialized in engineering and tech roles.',
    category: 'Tech Jobs',
    tags: ['Tech', 'Engineering', 'Jobs', 'Startups']
  },
  {
    label: 'Indeed',
    link: 'www.indeed.com',
    description:
      'Global job search engine aggregating listings from company websites and job boards. Comprehensive search and filtering options.',
    category: 'Job Search',
    tags: ['Jobs', 'Search', 'Global', 'Employment'],
    imageUrl: 'https://www.indeed.com/favicon.ico'
  },
  {
    label: 'Angel List',
    link: 'angel.co/jobs',
    description:
      'Platform for startups to find talent and professionals to find startup opportunities. Focus on early-stage companies.',
    category: 'Startup Jobs',
    tags: ['Startups', 'Jobs', 'Tech', 'Innovation'],
    imageUrl: 'https://angel.co/favicon.ico'
  },
  {
    label: 'Wellfound',
    link: 'wellfound.com',
    description:
      'Global talent platform connecting skilled professionals with high-growth startups. Focus on tech, product, and business roles.',
    category: 'Startup Jobs',
    tags: ['Startups', 'Tech', 'Jobs', 'Growth'],
    imageUrl: 'https://wellfound.com/favicon.ico'
  }
]

export const resumeBuilders: JobPlatformItem[] = [
  {
    label: 'Reactive Resume',
    link: 'https://rxresu.me/',
    description:
      'Open-source resume builder with modern templates and export options. Create beautiful, professional resumes with ease.',
    category: 'Resume Builder',
    tags: ['Resume', 'CV', 'Templates', 'Open Source'],
    imageUrl: 'https://rxresu.me/favicon.ico'
  },
  {
    label: 'Overleaf',
    link: 'https://www.overleaf.com',
    description:
      'Online LaTeX editor for creating professional documents. Perfect for academic resumes, CVs, and technical documentation.',
    category: 'Document Editor',
    tags: ['LaTeX', 'CV', 'Academic', 'Professional'],
    imageUrl: 'https://www.overleaf.com/favicon.ico'
  }
]
