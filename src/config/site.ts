export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
    linkedin: string
    medium: string
  }
}

export const siteConfig: SiteConfig = {
  name: 'Yokesh K.S. - Full Stack & AI Engineer',
  description:
    'Full Stack & AI Engineer building intelligent systems and scalable web applications. Specializing in AI-driven development, modern frameworks, and crafting exceptional user experiences.',
  url: 'https://www.yokesh.in',
  ogImage: 'https://www.yokesh.in/og.png',
  links: {
    twitter: 'https://twitter.com/Yokesh_ks',
    github: 'https://github.com/yokesh-ks',
    linkedin: 'https://www.linkedin.com/in/yokesh-ks',
    medium: 'https://yokesh-ks.medium.com'
  }
}
