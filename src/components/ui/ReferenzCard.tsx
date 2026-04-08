export interface ReferenzCardProps {
  id?: string
  nummer?: number
  firma: string
  branche: string
  zeitraum?: string
  problem: string
  loesung: string
  ergebnis: string
}

export function ReferenzCard({
  id,
  nummer,
  firma,
  branche,
  zeitraum,
  problem,
  loesung,
  ergebnis,
}: ReferenzCardProps) {
  return (
    <div
      id={id}
      className="scroll-mt-24 rounded-xl bg-white overflow-hidden shadow-card hover:shadow-card-hover transition-shadow border border-neutral-light-gray"
    >
      {/* Header */}
      <div className="px-8 pt-7 pb-5 border-b border-neutral-light-gray flex items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <h3 className="text-xl font-bold text-neutral-charcoal">{firma}</h3>
            <span className="rounded-full bg-primary/[0.08] text-primary px-3 py-0.5 text-xs font-medium">
              {branche}
            </span>
            {zeitraum && (
              <span className="rounded-full bg-accent/10 text-accent px-3 py-0.5 text-xs font-semibold">
                {zeitraum}
              </span>
            )}
          </div>
          {/* Ergebnis als visuelle Aussage */}
          <p className="text-primary font-semibold text-lg leading-snug border-l-4 border-accent pl-4">
            {ergebnis}
          </p>
        </div>
        {nummer && (
          <span className="flex-shrink-0 text-4xl font-bold text-primary/10 leading-none tabular-nums select-none mt-1">
            {String(nummer).padStart(2, '0')}
          </span>
        )}
      </div>

      {/* Problem → Lösung */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-light-gray">
        <div className="px-8 py-5">
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-slate mb-2">
            Ausgangslage
          </p>
          <p className="text-neutral-slate text-sm leading-relaxed">{problem}</p>
        </div>
        <div className="px-8 py-5">
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-slate mb-2">
            Was ich gebaut habe
          </p>
          <p className="text-neutral-slate text-sm leading-relaxed">{loesung}</p>
        </div>
      </div>
    </div>
  )
}
