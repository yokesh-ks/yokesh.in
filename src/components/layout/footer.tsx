import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react'
import { footerData } from '@/assets/data/footer'

import { Separator } from '@/components/ui/separator'

const Footer = () => {
  return (
    <footer className='bg-muted' style={{ clipPath: 'polygon(0 16px, 100% 0, 100% 100%, 0 100%)' }}>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 max-md:flex-col sm:px-6 sm:py-6 md:gap-6 md:py-8'>
        <a href='/#home'>
          <div className='flex items-center gap-3'>
            <img src='/logo.png' alt='YOKESH' className='h-10 w-auto' />
            <span className='font-semibold text-[20px] text-primary'>YOKESH</span>
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
          <a href='#' className='hover:text-primary'>
            <FacebookIcon className='size-5' />
          </a>
          <a href='#' className='hover:text-primary'>
            <InstagramIcon className='size-5' />
          </a>
          <a href='#' className='hover:text-primary'>
            <TwitterIcon className='size-5' />
          </a>
          <a href='#' className='hover:text-primary'>
            <YoutubeIcon className='size-5' />
          </a>
        </div>
      </div>

      <Separator />

      <div className='mx-auto flex max-w-7xl justify-center px-4 py-8 sm:px-6'>
        <p className='text-balance text-center text-muted-foreground'>
          {`©${new Date().getFullYear()}`}{' '}
          <a href='/#home' className='hover:underline'>
            YOKESH
          </a>
          , Made with ❤️ for better web.
        </p>
      </div>
    </footer>
  )
}

export default Footer
