import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export interface PaketCardProps {
  nummer: number
  titel: string
  preis: string
  beschreibung: string
  details?: string[]
  ctaText: string
  ctaHref: string
  highlight?: boolean
  badge?: string
}

export function PaketCard({
  nummer,
  titel,
  preis,
  beschreibung,
  details,
  ctaText,
  ctaHref,
  highlight = false,
  badge,
}: PaketCardProps) {
  return (
    <div
      className={cn(
        'rounded-xl bg-white border shadow-card hover:shadow-card-hover transition-shadow overflow-hidden',
        highlight
          ? 'border-accent/40'
          : 'border-neutral-light-gray'
      )}
    >
      {/* Accent bar for highlight */}
      {highlight && <div className="h-1 bg-accent w-full" />}

      <div className="p-8 flex items-start gap-6">
        {/* Step number */}
        <span className="flex-shrink-0 text-5xl font-bold text-primary/10 leading-none tabular-nums select-none mt-1">
          {String(nummer).padStart(2, '0')}
        </span>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {badge && (
            <p className="text-xs font-bold text-accent uppercase tracking-widest mb-2">
              {badge}
            </p>
          )}

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
            <div>
              <h3 className="text-xl font-bold text-neutral-charcoal">{titel}</h3>
              <p
                className={cn(
                  'text-2xl font-bold mt-1',
                  highlight ? 'text-accent' : 'text-primary'
                )}
              >
                {preis}
              </p>
            </div>
            <Link href={ctaHref} className="flex-shrink-0 self-start">
              <Button
                variant={highlight ? 'secondary' : 'outline'}
                size="md"
              >
                {ctaText}
              </Button>
            </Link>
          </div>

          <p className="text-neutral-slate leading-relaxed mb-5">{beschreibung}</p>

          {details && details.length > 0 && (
            <ul className="flex flex-col gap-2">
              {details.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-neutral-slate">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
