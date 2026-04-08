export interface LeistungsBlockProps {
  nummer: number
  titel: string
  text: string
}

export function LeistungsBlock({ nummer, titel, text }: LeistungsBlockProps) {
  return (
    <div className="group mb-6 flex items-start gap-5 rounded-lg p-5 transition-colors hover:bg-primary/[0.04]">
      <span
        className="select-none flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center tabular-nums transition-colors group-hover:bg-primary group-hover:text-white"
        aria-hidden="true"
      >
        {String(nummer).padStart(2, '0')}
      </span>
      <div className="pt-1.5">
        <h3 className="text-lg font-semibold text-neutral-charcoal">{titel}</h3>
        <p className="mt-1 text-neutral-slate">{text}</p>
      </div>
    </div>
  )
}
