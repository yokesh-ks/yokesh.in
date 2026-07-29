import type { ComponentType } from 'react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { TypographyH2, TypographyH3, TypographyH4, TypographyLead, TypographyP } from '@/components/ui/typography'
import { NAME, POSITION } from '@/consts'

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
          <TypographyH2 className='border-none pb-0 text-2xl md:text-3xl lg:text-4xl'>
            Discuss Your Next AI Project
          </TypographyH2>
          <TypographyLead>
            Whether you&apos;re building an AI-powered SaaS platform, scaling backend systems, or implementing
            production-ready LLM workflows, I&apos;d love to collaborate and help architect a scalable solution.
          </TypographyLead>
        </div>

        <div className='grid items-center gap-12 lg:grid-cols-2'>
          <img
            src='/images/profile.png'
            alt={`${NAME} - ${POSITION}`}
            className='size-full object-cover max-lg:max-h-70'
            loading='lazy'
          />

          <div>
            <TypographyH3 className='mb-2 text-2xl tracking-normal'>Let&apos;s Build Something Scalable</TypographyH3>
            <TypographyP className='mb-10 text-lg text-muted-foreground [&:not(:first-child)]:mt-0'>
              Have a project in mind? Let&apos;s talk about building scalable AI systems and production-grade cloud
              solutions.
            </TypographyP>

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
                        <TypographyH4 className='text-lg tracking-normal'>{info.title}</TypographyH4>
                        <div className='font-medium text-base text-muted-foreground'>
                          {info.description.split('\n').map((line, idx) => (
                            <TypographyP key={idx} className='[&:not(:first-child)]:mt-0'>
                              {line}
                            </TypographyP>
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
