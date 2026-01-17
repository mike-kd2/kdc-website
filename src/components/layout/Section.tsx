import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: 'sm' | 'md' | 'lg' | 'xl' | 'none'
  background?: 'white' | 'gray' | 'primary' | 'none'
}

const spacingClasses = {
  none: '',
  sm: 'py-8 md:py-12',
  md: 'py-12 md:py-16',
  lg: 'py-16 md:py-24',
  xl: 'py-24 md:py-32',
}

const backgroundClasses = {
  none: '',
  white: 'bg-white',
  gray: 'bg-neutral-off-white',
  primary: 'bg-primary text-white',
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing = 'lg', background = 'none', ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          spacingClasses[spacing],
          backgroundClasses[background],
          className
        )}
        {...props}
      />
    )
  }
)

Section.displayName = 'Section'

export { Section }
