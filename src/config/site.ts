import { NAME, POSITION } from '@/consts'

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
  name: `${NAME} - ${POSITION}`,
  description: `${NAME} is a ${POSITION} building intelligent systems and scalable web applications.`,
  url: 'https://www.yokesh.in',
  ogImage: 'https://www.yokesh.in/og.webp',
  links: {
    twitter: 'https://twitter.com/Yokesh_ks',
    github: 'https://github.com/yokesh-ks',
    linkedin: 'https://www.linkedin.com/in/yokesh-ks',
    medium: 'https://yokesh-ks.medium.com'
  }
}
