import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { TypographyH2, TypographyLarge, TypographyLead, TypographyP } from '@/components/ui/typography'

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
  tool: 'Developer Tool'
}

const FeaturedProjects = ({ projects }: { projects: Project[] }) => {
  return (
    <section id='projects' className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto mb-12 flex max-w-2xl flex-col items-center justify-center space-y-4 text-center sm:mb-16 lg:mb-24'>
          <Badge variant='outline' className='font-normal text-sm'>
            Projects
          </Badge>
          <TypographyH2 className='border-none pb-0 text-2xl md:text-3xl lg:text-4xl'>Featured Projects</TypographyH2>
          <TypographyLead>
            A selection of projects I've built — from AI-powered platforms to developer tools and full-stack
            applications.
          </TypographyLead>
        </div>

        <div className='grid gap-6 md:grid-cols-2 lg:gap-y-10 xl:grid-cols-4'>
          {projects.map(project => (
            <a key={project.id} href={`/projects/${project.id}`} className='block'>
              <Card className='h-full overflow-hidden rounded-none py-0 shadow-none transition-colors duration-300 hover:border-primary'>
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
                        <TypographyLarge className='font-bold text-4xl text-muted-foreground/40 leading-none'>
                          {project.data.title.charAt(0)}
                        </TypographyLarge>
                      </div>
                    )}
                  </div>
                  <div className='space-y-3 px-6 py-5'>
                    <CardTitle className='text-lg'>{project.data.title}</CardTitle>
                    <Separator />
                    <div className='text-muted-foreground'>
                      <TypographyP className='mb-2 font-medium text-base [&:not(:first-child)]:mt-0'>
                        {categoryLabels[project.data.category] ?? project.data.category}
                      </TypographyP>
                      <TypographyP className='line-clamp-2 text-sm [&:not(:first-child)]:mt-0'>
                        {project.data.description}
                      </TypographyP>
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

export default FeaturedProjects
