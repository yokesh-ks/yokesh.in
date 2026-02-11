import { ArrowRightIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

type NewItem = {
  img: string
  alt: string
  title: string
  description: string
  blogLink: string
}[]

const NewItems = ({ newItems }: { newItems: NewItem }) => {
  return (
    <section id='new-items' className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mx-auto mb-12 flex max-w-2xl flex-col items-center justify-center space-y-4 text-center sm:mb-16 lg:mb-24'>
          <Badge variant='outline' className='font-normal text-sm'>
            New Items
          </Badge>
          <h2 className='font-semibold text-2xl md:text-3xl lg:text-4xl'>Fresh menu items</h2>
          <p className='text-muted-foreground text-xl'>
            Explore our most recent additions to the menu. Each dish is designed to delight your taste buds and provide
            a memorable dining experience.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {newItems.map((item, index) => (
            <Card
              className='rounded-none pt-0 shadow-none transition-colors duration-300 hover:border-primary max-lg:last:col-span-full'
              key={index}
            >
              <CardContent className='px-0'>
                <img src={item.img} alt={item.alt} className='aspect-video h-60 w-full object-cover' loading='lazy' />
              </CardContent>
              <CardHeader className='mb-2 gap-3'>
                <CardTitle className='text-xl'>
                  <a href='#'>{item.title}</a>
                </CardTitle>
                <CardDescription className='text-base'>{item.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button
                  className='group rounded-full bg-primary/10 text-primary text-sm hover:bg-primary/20 has-[>svg]:px-6'
                  size='lg'
                  asChild
                >
                  <a href={item.blogLink}>
                    Full menu
                    <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewItems
