import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface IconProps {
  icon: LucideIcon
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const sizeMap = {
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48,
}

export function Icon({ icon: IconComponent, size = 'md', className }: IconProps) {
  return (
    <IconComponent
      size={sizeMap[size]}
      className={cn('inline-block', className)}
      aria-hidden="true"
    />
  )
}
