export interface LeistungsBlockProps {
  nummer: number
  titel: string
  text: string
}

export function LeistungsBlock({ nummer, titel, text }: LeistungsBlockProps) {
  return (
    <div className="mb-8 flex items-start gap-6">
      <span
        className="select-none text-4xl font-bold leading-none text-accent/30 tabular-nums"
        aria-hidden="true"
      >
        {String(nummer).padStart(2, '0')}
      </span>
      <div>
        <h3 className="text-lg font-semibold text-neutral-charcoal">{titel}</h3>
        <p className="mt-1 text-neutral-slate">{text}</p>
      </div>
    </div>
  )
}
