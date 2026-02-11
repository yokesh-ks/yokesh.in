import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

type Project = {
  id: string
  data: {
    title: string
    description: string
    technologies: string[]
    status: 'live' | 'development' | 'prototype'
    category: 'ai' | 'web' | 'tool'
    main_image_url?: string
    logo?: string
    github?: string
    website?: string
    isFeatured: boolean
  }
}

const categoryLabels: Record<string, string> = {
  ai: 'AI / ML',
  web: 'Web App',
  tool: 'Developer Tool',
}

const PopularDishes = ({ projects }: { projects: Project[] }) => {
  return (
    <section id='projects' className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto mb-12 flex max-w-2xl flex-col items-center justify-center space-y-4 text-center sm:mb-16 lg:mb-24'>
          <Badge variant='outline' className='font-normal text-sm'>
            Projects
          </Badge>
          <h2 className='font-semibold text-2xl md:text-3xl lg:text-4xl'>Featured Projects</h2>
          <p className='text-muted-foreground text-xl'>
            A selection of projects I've built — from AI-powered platforms to developer tools and full-stack applications.
          </p>
        </div>

        <div className='grid gap-6 md:grid-cols-2 lg:gap-y-10 xl:grid-cols-4'>
          {projects.map((project) => (
            <a key={project.id} href={`/projects/${project.id}`} className='block'>
              <Card
                className='overflow-hidden rounded-none py-0 shadow-none transition-colors duration-300 hover:border-primary h-full'
              >
                <CardContent className='px-0'>
                  <div className='bg-muted'>
                    {project.data.main_image_url ? (
                      <img
                        src={project.data.main_image_url}
                        alt={project.data.title}
                        className='h-auto w-full'
                        loading='lazy'
                      />
                    ) : (
                      <div className='flex items-center justify-center p-6'>
                        <span className='text-4xl font-bold text-muted-foreground/40'>
                          {project.data.title.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className='space-y-3 px-6 py-5'>
                    <CardTitle className='text-lg'>{project.data.title}</CardTitle>
                    <Separator />
                    <div className='text-muted-foreground'>
                      <p className='mb-2 font-medium text-base'>{categoryLabels[project.data.category] ?? project.data.category}</p>
                      <p className='line-clamp-2 text-sm'>{project.data.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularDishes
