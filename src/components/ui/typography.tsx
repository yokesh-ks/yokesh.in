import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import type * as React from 'react'

import { cn } from '@/lib/utils'

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-balance font-extrabold text-4xl tracking-tight',
      h2: 'scroll-m-20 border-b pb-2 font-semibold text-3xl tracking-tight first:mt-0',
      h3: 'scroll-m-20 font-semibold text-2xl tracking-tight',
      h4: 'scroll-m-20 font-semibold text-xl tracking-tight',
      p: 'leading-7 [&:not(:first-child)]:mt-6',
      lead: 'text-muted-foreground text-xl',
      large: 'font-semibold text-lg',
      small: 'font-medium text-sm leading-none',
      muted: 'text-muted-foreground text-sm',
      blockquote: 'mt-6 border-l-2 pl-6 italic',
      list: 'my-6 ml-6 list-disc [&>li]:mt-2',
      inlineCode: 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono font-semibold text-sm'
    }
  },
  defaultVariants: {
    variant: 'p'
  }
})

type TypographyVariant = NonNullable<VariantProps<typeof typographyVariants>['variant']>

const variantElement: Record<TypographyVariant, React.ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  p: 'p',
  lead: 'p',
  large: 'div',
  small: 'small',
  muted: 'p',
  blockquote: 'blockquote',
  list: 'ul',
  inlineCode: 'code'
}

function Typography({
  className,
  variant = 'p',
  asChild = false,
  ...props
}: React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof typographyVariants> & {
    asChild?: boolean
  }) {
  const resolvedVariant = (variant ?? 'p') as TypographyVariant
  const Comp = asChild ? Slot : variantElement[resolvedVariant]

  return (
    <Comp
      data-slot='typography'
      data-variant={resolvedVariant}
      className={cn(typographyVariants({ variant: resolvedVariant, className }))}
      {...props}
    />
  )
}

function TypographyH1({ className, ...props }: React.ComponentProps<'h1'>) {
  return <h1 data-slot='typography-h1' className={cn(typographyVariants({ variant: 'h1' }), className)} {...props} />
}

function TypographyH2({ className, ...props }: React.ComponentProps<'h2'>) {
  return <h2 data-slot='typography-h2' className={cn(typographyVariants({ variant: 'h2' }), className)} {...props} />
}

function TypographyH3({ className, ...props }: React.ComponentProps<'h3'>) {
  return <h3 data-slot='typography-h3' className={cn(typographyVariants({ variant: 'h3' }), className)} {...props} />
}

function TypographyH4({ className, ...props }: React.ComponentProps<'h4'>) {
  return <h4 data-slot='typography-h4' className={cn(typographyVariants({ variant: 'h4' }), className)} {...props} />
}

function TypographyP({ className, ...props }: React.ComponentProps<'p'>) {
  return <p data-slot='typography-p' className={cn(typographyVariants({ variant: 'p' }), className)} {...props} />
}

function TypographyLead({ className, ...props }: React.ComponentProps<'p'>) {
  return <p data-slot='typography-lead' className={cn(typographyVariants({ variant: 'lead' }), className)} {...props} />
}

function TypographyLarge({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div data-slot='typography-large' className={cn(typographyVariants({ variant: 'large' }), className)} {...props} />
  )
}

function TypographySmall({ className, ...props }: React.ComponentProps<'small'>) {
  return (
    <small
      data-slot='typography-small'
      className={cn(typographyVariants({ variant: 'small' }), className)}
      {...props}
    />
  )
}

function TypographyMuted({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p data-slot='typography-muted' className={cn(typographyVariants({ variant: 'muted' }), className)} {...props} />
  )
}

function TypographyBlockquote({ className, ...props }: React.ComponentProps<'blockquote'>) {
  return (
    <blockquote
      data-slot='typography-blockquote'
      className={cn(typographyVariants({ variant: 'blockquote' }), className)}
      {...props}
    />
  )
}

function TypographyList({ className, ...props }: React.ComponentProps<'ul'>) {
  return (
    <ul data-slot='typography-list' className={cn(typographyVariants({ variant: 'list' }), className)} {...props} />
  )
}

function TypographyInlineCode({ className, ...props }: React.ComponentProps<'code'>) {
  return (
    <code
      data-slot='typography-inline-code'
      className={cn(typographyVariants({ variant: 'inlineCode' }), className)}
      {...props}
    />
  )
}

function TypographyTable({ className, children, ...props }: React.ComponentProps<'table'>) {
  return (
    <div data-slot='typography-table-wrapper' className='my-6 w-full overflow-y-auto'>
      <table data-slot='typography-table' className={cn('w-full', className)} {...props}>
        {children}
      </table>
    </div>
  )
}

function TypographyTableHeader({ className, ...props }: React.ComponentProps<'thead'>) {
  return <thead data-slot='typography-table-header' className={className} {...props} />
}

function TypographyTableBody({ className, ...props }: React.ComponentProps<'tbody'>) {
  return <tbody data-slot='typography-table-body' className={className} {...props} />
}

function TypographyTableRow({ className, ...props }: React.ComponentProps<'tr'>) {
  return <tr data-slot='typography-table-row' className={cn('m-0 border-t p-0 even:bg-muted', className)} {...props} />
}

function TypographyTableHead({ className, ...props }: React.ComponentProps<'th'>) {
  return (
    <th
      data-slot='typography-table-head'
      className={cn(
        'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  )
}

function TypographyTableCell({ className, ...props }: React.ComponentProps<'td'>) {
  return (
    <td
      data-slot='typography-table-cell'
      className={cn('border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right', className)}
      {...props}
    />
  )
}

export {
  Typography,
  typographyVariants,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyLead,
  TypographyLarge,
  TypographySmall,
  TypographyMuted,
  TypographyBlockquote,
  TypographyList,
  TypographyInlineCode,
  TypographyTable,
  TypographyTableHeader,
  TypographyTableBody,
  TypographyTableRow,
  TypographyTableHead,
  TypographyTableCell
}
