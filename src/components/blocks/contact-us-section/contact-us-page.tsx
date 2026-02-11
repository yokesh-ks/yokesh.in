import type { ComponentType } from 'react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

type ContactInfo = {
  title: string
  icon: ComponentType
  description: string
  href?: string
}[]

const ContactUs = ({ contactInfo }: { contactInfo: ContactInfo }) => {
  return (
    <section
      id='contact-us'
      className='relative py-8 before:absolute before:inset-0 before:-z-10 before:skew-y-3 before:bg-muted sm:py-16 lg:py-24'
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mx-auto mb-12 flex max-w-2xl flex-col items-center justify-center space-y-4 text-center sm:mb-16 lg:mb-24'>
          <Badge variant='outline' className='font-normal text-sm'>
            Contact
          </Badge>
          <h2 className='font-semibold text-2xl md:text-3xl lg:text-4xl'>Discuss Your Next AI Project</h2>
          <p className='text-muted-foreground text-xl'>
            Whether you&apos;re building an AI-powered SaaS platform, scaling backend systems, or implementing
            production-ready LLM workflows, I&apos;d love to collaborate and help architect a scalable solution.
          </p>
        </div>

        <div className='grid items-center gap-12 lg:grid-cols-2'>
          <img
            src='/images/profile.png'
            alt='Yokesh K S - Full Stack & AI Engineer'
            className='size-full object-cover max-lg:max-h-70'
            loading='lazy'
          />

          <div>
            <h3 className='mb-2 text-2xl'>Let&apos;s Build Something Scalable</h3>
            <p className='mb-10 text-lg text-muted-foreground'>
              Have a project in mind? Let&apos;s talk about building scalable AI systems and production-grade cloud
              solutions.
            </p>

            {/* Contact Info Grid */}
            <div className='grid gap-6 sm:grid-cols-2'>
              {contactInfo.map((info, index) => {
                const content = (
                  <Card
                    className={`rounded-none bg-background shadow-none transition-colors duration-300 hover:border-primary ${info.href ? 'cursor-pointer' : ''}`}
                    key={index}
                  >
                    <CardContent className='flex flex-col items-center gap-4 text-center'>
                      <Avatar className='size-9 border'>
                        <AvatarFallback className='bg-transparent [&>svg]:size-5'>
                          <info.icon />
                        </AvatarFallback>
                      </Avatar>
                      <div className='space-y-3'>
                        <h4 className='font-semibold text-lg'>{info.title}</h4>
                        <div className='font-medium text-base text-muted-foreground'>
                          {info.description.split('\n').map((line, idx) => (
                            <p key={idx}>{line}</p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )

                if (info.href) {
                  return (
                    <a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel={info.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    >
                      {content}
                    </a>
                  )
                }

                return content
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
