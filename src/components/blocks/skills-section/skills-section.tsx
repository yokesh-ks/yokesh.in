import { Badge } from '@/components/ui/badge'
import type { SkillCategory } from '@/assets/data/skills'

const SkillsSection = ({ categories }: { categories: SkillCategory[] }) => {
  return (
    <section id='skills' className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto mb-12 flex max-w-2xl flex-col items-center justify-center space-y-4 text-center sm:mb-16 lg:mb-24'>
          <Badge variant='outline' className='font-normal text-sm'>
            Skills
          </Badge>
          <h2 className='font-semibold text-2xl md:text-3xl lg:text-4xl'>Technical Expertise</h2>
          <p className='text-muted-foreground text-xl'>
            Technologies and tools I use to build scalable, production-ready systems.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {categories.map(category => (
            <div
              key={category.title}
              className='group rounded-lg border border-border p-6 transition-colors duration-300 hover:border-primary'
            >
              <div className='mb-4 flex items-center gap-3'>
                <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary'>
                  <category.icon className='h-5 w-5' />
                </div>
                <h3 className='text-lg font-semibold'>{category.title}</h3>
              </div>
              <div className='flex flex-wrap gap-2'>
                {category.skills.map(skill => (
                  <span key={skill} className='rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground'>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
