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
        'flex flex-col rounded-lg bg-white p-6 shadow-sm',
        highlight
          ? 'border-2 border-accent shadow-md'
          : 'border border-neutral-light-gray'
      )}
    >
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-neutral-charcoal">{titel}</h3>
        <p className="mt-2 text-3xl font-bold text-primary">{preis}</p>
      </div>

      <p className="mb-6 text-neutral-slate">{beschreibung}</p>

      {details && details.length > 0 && (
        <ul className="mb-6 flex flex-col gap-2">
          {details.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent"
                aria-hidden="true"
              />
              <span className="text-neutral-slate">{item}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto">
        <Link href={ctaHref} className="block w-full">
          <Button variant="primary" size="md" className="w-full">
            {ctaText}
          </Button>
        </Link>
      </div>
    </div>
  )
}
