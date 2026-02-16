'use client'

import { useCallback, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'

type MemoryData = {
  id: string
  title: string
  celebrity_name: string
  category: string
  event_name: string
  location: string
  date: string
  year: number
  description: string
  takeaway_note?: string
  images: string[]
  tags?: string[]
}

type MemoryModalProps = {
  memories: MemoryData[]
}

const categoryLabels: Record<string, string> = {
  celebrity: 'Celebrity',
  'tech-leader': 'Tech Leader',
  event: 'Event',
  'office-milestone': 'Milestone',
  community: 'Community',
}

export default function MemoryModal({ memories }: MemoryModalProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const isOpen = activeIndex !== null

  const memory = activeIndex !== null ? memories[activeIndex] : null

  const close = useCallback(() => setActiveIndex(null), [])

  const goNext = useCallback(() => {
    setActiveIndex(prev => (prev !== null && prev < memories.length - 1 ? prev + 1 : prev))
  }, [memories.length])

  const goPrev = useCallback(() => {
    setActiveIndex(prev => (prev !== null && prev > 0 ? prev - 1 : prev))
  }, [])

  // Listen for card clicks
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const card = (e.target as HTMLElement).closest('[data-memory-index]')
      if (card) {
        const index = Number(card.getAttribute('data-memory-index'))
        setActiveIndex(index)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, close, goNext, goPrev])

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen || !memory) return null

  return (
    <div
      className='fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6'
      role='dialog'
      aria-modal='true'
      aria-label={`Memory: ${memory.celebrity_name}`}
    >
      {/* Backdrop */}
      <div
        className='absolute inset-0 bg-black/70 backdrop-blur-sm'
        onClick={close}
      />

      {/* Modal content */}
      <div className='relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl'>
        {/* Close button */}
        <button
          type='button'
          onClick={close}
          className='absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70'
          aria-label='Close'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M18 6 6 18' />
            <path d='m6 6 12 12' />
          </svg>
        </button>

        {/* Scrollable content */}
        <div className='overflow-y-auto'>
          {/* Hero image */}
          <div className='relative aspect-video w-full overflow-hidden bg-muted'>
            <img
              src={memory.images[0]}
              alt={`Photo with ${memory.celebrity_name}`}
              className='h-full w-full object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent' />
          </div>

          {/* Content */}
          <div className='space-y-6 p-6 sm:p-8'>
            {/* Header */}
            <div className='space-y-3'>
              <div className='flex flex-wrap items-center gap-2'>
                <span className='inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary'>
                  {categoryLabels[memory.category] || memory.category}
                </span>
                <span className='text-sm text-muted-foreground'>{memory.year}</span>
              </div>
              <h2 className='text-2xl font-bold leading-tight sm:text-3xl'>
                {memory.celebrity_name}
              </h2>
              <p className='text-base text-muted-foreground'>
                {memory.event_name}
              </p>
            </div>

            {/* Meta */}
            <div className='flex flex-wrap items-center gap-4 text-sm text-muted-foreground'>
              <div className='flex items-center gap-1.5'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='14'
                  height='14'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z' />
                  <circle cx='12' cy='10' r='3' />
                </svg>
                {memory.location}
              </div>
              <div className='flex items-center gap-1.5'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='14'
                  height='14'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <rect width='18' height='18' x='3' y='4' rx='2' ry='2' />
                  <line x1='16' x2='16' y1='2' y2='6' />
                  <line x1='8' x2='8' y1='2' y2='6' />
                  <line x1='3' x2='21' y1='10' y2='10' />
                </svg>
                {format(new Date(memory.date), 'MMMM dd, yyyy')}
              </div>
            </div>

            {/* Description */}
            <div className='space-y-2'>
              <p className='text-base leading-relaxed text-foreground'>
                {memory.description}
              </p>
            </div>

            {/* Takeaway */}
            {memory.takeaway_note && (
              <div className='rounded-xl border border-primary/20 bg-primary/5 p-4'>
                <p className='text-sm font-medium text-primary'>Key Takeaway</p>
                <p className='mt-1 text-sm leading-relaxed text-foreground/80'>
                  {memory.takeaway_note}
                </p>
              </div>
            )}

            {/* Tags */}
            {memory.tags && memory.tags.length > 0 && (
              <div className='flex flex-wrap gap-2'>
                {memory.tags.map(tag => (
                  <span
                    key={tag}
                    className='rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Navigation footer */}
        <div className='flex items-center justify-between border-t border-border px-6 py-4'>
          <button
            type='button'
            onClick={goPrev}
            disabled={activeIndex === 0}
            className={cn(
              'flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors',
              activeIndex === 0
                ? 'cursor-not-allowed text-muted-foreground/40'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            )}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='m15 18-6-6 6-6' />
            </svg>
            Previous
          </button>

          <span className='text-xs text-muted-foreground'>
            {(activeIndex ?? 0) + 1} / {memories.length}
          </span>

          <button
            type='button'
            onClick={goNext}
            disabled={activeIndex === memories.length - 1}
            className={cn(
              'flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors',
              activeIndex === memories.length - 1
                ? 'cursor-not-allowed text-muted-foreground/40'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            )}
          >
            Next
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='m9 18 6-6-6-6' />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
