import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  }).format(date)
}

export function addUtmParams(url: string): string {
  const fullUrl = url.startsWith('http') ? url : `https://${url}`
  const separator = fullUrl.includes('?') ? '&' : '?'
  return `${fullUrl}${separator}utm_source=yokesh.in&utm_medium=website&ref=yokesh.in`
}
