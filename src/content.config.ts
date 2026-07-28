import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/features/blog/content' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    coverImage: z.string(),
    ogImage: z.string(),
    category: z.string(),
    keywords: z.string().optional(),
    pubDate: z
      .string()
      .or(z.date())
      .transform(val => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform(str => (str ? new Date(str) : undefined))
  })
})

const docs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string()
  })
})

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/features/snippets/content' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.boolean().default(true)
  })
})

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/features/experience/content' }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    duration: z.string(),
    period: z.string(),
    date: z
      .string()
      .or(z.date())
      .transform(val => new Date(val)),
    order: z.number()
  })
})

const memories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/features/memories/content' }),
  schema: z.object({
    title: z.string(),
    celebrity_name: z.string(),
    category: z.enum(['celebrity', 'tech-leader', 'event', 'office-milestone', 'community']),
    event_name: z.string(),
    location: z.string(),
    date: z
      .string()
      .or(z.date())
      .transform(val => new Date(val)),
    year: z.number(),
    description: z.string(),
    takeaway_note: z.string().optional(),
    images: z.array(z.string()),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).optional()
  })
})

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/features/projects/content' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    status: z.enum(['live', 'development', 'prototype']),
    category: z.enum(['ai', 'web', 'tool']),
    main_image_url: z.string().optional(),
    logo: z.string().optional(),
    github: z.string().optional(),
    website: z.string().optional(),
    isFeatured: z.boolean().default(false),
    metrics: z
      .array(
        z.object({
          label: z.string(),
          value: z.string()
        })
      )
      .optional()
  })
})

export const collections = { blog, docs, guides, experience, projects, memories }
