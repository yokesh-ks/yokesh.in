// Site Configuration
// Centralized configuration for site metadata, SEO, and branding

export const NAME = 'YOKESH.KS'
export const POSITION = 'Full Stack AI Engineer'

export const SITE_TITLE = `${NAME} - ${POSITION}`
export const SITE_DESCRIPTION = `${NAME} is a ${POSITION} building intelligent systems and scalable web applications.`

export const GITHUB_URL = 'https://github.com/yokesh-ks'
export const SITE_URL = 'https://www.yokesh.in/'

export const SITE_METADATA = {
  title: {
    default: SITE_TITLE
  },
  description: SITE_DESCRIPTION,
  keywords: [
  ],
  authors: [{ name: NAME, url: SITE_URL }],
  creator: NAME,
  publisher: NAME,
  robots: {
    index: true,
    follow: true
  },
  language: 'en-US',
  locale: 'en_US',
  icons: {
    icon: [
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }]
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/images/og-image.png']
  },
  verification: {
    google: '', // Add your Google verification code
    yandex: '', // Add your Yandex verification code
    bing: '' // Add your Bing verification code
  }
}
