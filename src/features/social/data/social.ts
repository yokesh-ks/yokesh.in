export interface SocialItem {
  label: string
  link: string
  description: string
  category: string
  tags: string[]
  imageUrl?: string
}

export const socialResources: SocialItem[] = [
  {
    label: 'ResearchGate',
    link: 'www.researchgate.net/profile/Yokesh-Ks-2',
    description:
      'Professional network for scientists and researchers to share publications, collaborate, and stay updated with latest research.',
    category: 'Professional Networking',
    tags: ['Research', 'Academic', 'Networking', 'Publications']
  },
  {
    label: 'LinkedIn',
    link: 'www.linkedin.com/in/yokesh-ks/',
    description:
      'Professional networking platform for connecting with industry professionals, showcasing experience, and career opportunities.',
    category: 'Professional Networking',
    tags: ['Professional', 'Networking', 'Career', 'Industry'],
    imageUrl: 'https://static.licdn.com/aero-v1/sc/h/akt4ae504epesldzj74dzred8'
  },
  {
    label: 'GitHub',
    link: 'github.com/yokesh-ks',
    description: 'Code repository and development platform showcasing projects, contributions, and open-source work.',
    category: 'Code Repository',
    tags: ['Code', 'Open Source', 'Development', 'Projects'],
    imageUrl: 'https://github.githubassets.com/favicons/favicon.svg'
  },
  {
    label: 'Instagram',
    link: 'www.instagram.com/yokesh_k.s/',
    description:
      'Visual platform for sharing personal and professional moments, behind-the-scenes content, and creative work.',
    category: 'Social Media',
    tags: ['Visual', 'Creative', 'Personal', 'Content']
  },
  {
    label: 'YouTube',
    link: 'www.youtube.com/channel/UCmiqMJeA5IwumiE3jDKkjvw',
    description: 'Video platform for sharing tutorials, project walkthroughs, and educational content.',
    category: 'Video Content',
    tags: ['Videos', 'Tutorials', 'Education', 'Content']
  },
  {
    label: 'GrabCAD',
    link: 'grabcad.com/yokesh.ks-1',
    description:
      'Engineering community for sharing CAD models, designs, and collaborating with other engineers and designers.',
    category: 'Engineering Community',
    tags: ['CAD', 'Engineering', 'Design', 'Models'],
    imageUrl: 'https://grabcad.com/favicon.ico'
  },
  {
    label: 'Google Scholar',
    link: 'scholar.google.com/citations?hl=en&user=q583jGEAAAAJ',
    description: 'Academic search engine for accessing scholarly publications, citations, and research metrics.',
    category: 'Academic Search',
    tags: ['Research', 'Publications', 'Citations', 'Academic'],
    imageUrl: 'https://scholar.google.com/favicon.ico'
  },
  {
    label: 'Pinterest',
    link: 'in.pinterest.com/yokeshks/',
    description: 'Visual discovery platform for finding and saving creative ideas, designs, and inspiration.',
    category: 'Visual Discovery',
    tags: ['Visual', 'Inspiration', 'Design', 'Creative']
  },
  {
    label: 'Medium',
    link: 'yokesh-ks.medium.com/',
    description:
      'Writing platform for sharing technical articles, tutorials, and insights on development and technology.',
    category: 'Writing Platform',
    tags: ['Writing', 'Articles', 'Technical', 'Blogging'],
    imageUrl: 'https://miro.medium.com/v2/5d8de952517e8160e40ef9841c781cdc14a5db313057fa3c3de41c6f5b494b19'
  },
  {
    label: 'X (Twitter)',
    link: 'x.com/Yokesh_ks',
    description: 'Social media platform for sharing updates, thoughts, and engaging with the tech community.',
    category: 'Social Media',
    tags: ['Social', 'Updates', 'Tech', 'Community'],
    imageUrl: 'https://abs.twimg.com/icons/apple-touch-icon-192x192.png'
  },
  {
    label: 'Buy Me a Coffee',
    link: 'buymeacoffee.com/yokesh.ks',
    description: 'Platform for supporters to contribute and show appreciation for content and projects.',
    category: 'Support Platform',
    tags: ['Support', 'Contribution', 'Community', 'Appreciation'],
    imageUrl: 'https://buymeacoffee.com/favicon.ico'
  }
]
