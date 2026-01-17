import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'primary' | 'accent' | 'outline'
}

export function Badge({
  className,
  variant = 'default',
  children,
  ...props
}: BadgeProps) {
  const variants = {
    default:
      'bg-neutral-slate/10 text-neutral-slate border-neutral-slate/20',
    primary:
      'bg-primary/10 text-primary border-primary/20',
    accent:
      'bg-accent/10 text-accent-dark border-accent/20',
    outline:
      'bg-transparent text-neutral-charcoal border-neutral-slate',
  }

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
