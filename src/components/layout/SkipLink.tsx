import { cn } from '@/lib/utils'

export interface SkipLinkProps {
  href?: string
  className?: string
}

export function SkipLink({ href = '#main-content', className }: SkipLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        // Visually hidden by default, visible on focus
        'sr-only focus:not-sr-only',
        // Position and styling when visible
        'focus:absolute focus:left-4 focus:top-4 focus:z-[100]',
        'focus:rounded-md focus:bg-primary focus:px-4 focus:py-2',
        'focus:text-white focus:shadow-lg',
        'focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2',
        // Transition
        'transition-all duration-200',
        className
      )}
    >
      Zum Hauptinhalt springen
    </a>
  )
}
