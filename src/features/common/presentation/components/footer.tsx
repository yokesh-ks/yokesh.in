import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'
import { footerData } from '@/assets/data/footer'
import { Separator } from '@/components/ui/separator'
import { TypographyMuted } from '@/components/ui/typography'
import { NAME } from '@/consts'

const Footer = () => {
  const socialLinks = {
    twitter: 'https://twitter.com/Yokesh_ks',
    github: 'https://github.com/yokesh-ks',
    linkedin: 'https://www.linkedin.com/in/yokesh-ks',
    medium: 'https://yokesh-ks.medium.com'
  }

  return (
    <footer className='bg-muted' style={{ clipPath: 'polygon(0 16px, 100% 0, 100% 100%, 0 100%)' }}>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 max-md:flex-col sm:px-6 sm:py-6 md:gap-6 md:py-8'>
        <a href='/#home'>
          <div className='flex items-center gap-3'>
            <img src='/logo.webp' alt={NAME} className='h-10 w-auto dark:hidden' />
            <img src='/logo-dark.webp' alt={NAME} className='hidden h-10 w-auto dark:block' />
            <span className='font-semibold text-primary text-xl'>{NAME}</span>
          </div>
        </a>

        <div className='flex items-center gap-5 whitespace-nowrap'>
          {footerData.map(item => (
            <a
              key={item.title}
              href={item.href}
              className='text-base! text-foreground hover:bg-transparent hover:text-primary'
            >
              {item.title}
            </a>
          ))}
        </div>

        <div className='flex items-center gap-4'>
          <a
            href={socialLinks.twitter}
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-primary'
            aria-label='Twitter'
          >
            <TwitterIcon className='size-5' />
          </a>
          <a
            href={socialLinks.github}
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-primary'
            aria-label='GitHub'
          >
            <GithubIcon className='size-5' />
          </a>
          <a
            href={socialLinks.linkedin}
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-primary'
            aria-label='LinkedIn'
          >
            <LinkedinIcon className='size-5' />
          </a>
        </div>
      </div>

      <Separator />

      <div className='mx-auto flex max-w-7xl justify-center px-4 py-8 sm:px-6'>
        <TypographyMuted className='text-balance text-center'>
          {`©${new Date().getFullYear()}`}{' '}
          <a href='/#home' className='hover:underline'>
            {NAME}
          </a>
          . All rights reserved • Made with ❤️ by {NAME}.
        </TypographyMuted>
      </div>
    </footer>
  )
}

export default Footer
