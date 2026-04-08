import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export interface PaketCardProps {
  titel: string
  preis: string
  beschreibung: string
  details?: string[]
  ctaText: string
  ctaHref: string
  highlight?: boolean
}

export function PaketCard({
  titel,
  preis,
  beschreibung,
  details,
  ctaText,
  ctaHref,
  highlight = false,
}: PaketCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col rounded-lg bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover',
        highlight
          ? 'border-t-4 border-accent'
          : 'border-t-4 border-primary/20'
      )}
    >
      {highlight && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
          Einstieg
        </p>
      )}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-neutral-charcoal">{titel}</h3>
        <p className={cn('mt-2 text-3xl font-bold', highlight ? 'text-accent' : 'text-primary')}>
          {preis}
        </p>
      </div>

      <p className="mb-6 text-neutral-slate leading-relaxed">{beschreibung}</p>

      {details && details.length > 0 && (
        <ul className="mb-6 flex flex-col gap-2">
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

      <div className="mt-auto">
        <Link href={ctaHref} className="block w-full">
          <Button
            variant={highlight ? 'secondary' : 'outline'}
            size="md"
            className="w-full"
          >
            {ctaText}
          </Button>
        </Link>
      </div>
    </div>
  )
}
