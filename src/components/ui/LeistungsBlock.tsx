export interface LeistungsBlockProps {
  nummer: number
  titel: string
  text: string
}

export function LeistungsBlock({ nummer, titel, text }: LeistungsBlockProps) {
  return (
    <div className="group rounded-xl bg-white border border-neutral-light-gray shadow-card hover:shadow-card-hover transition-all p-6">
      <div className="flex items-start gap-5">
        <span
          className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/[0.08] text-primary font-bold text-sm flex items-center justify-center tabular-nums transition-colors group-hover:bg-primary group-hover:text-white"
          aria-hidden="true"
        >
          {String(nummer).padStart(2, '0')}
        </span>
        <div>
          <h3 className="text-lg font-semibold text-neutral-charcoal mb-1.5">{titel}</h3>
          <p className="text-neutral-slate leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  )
}
