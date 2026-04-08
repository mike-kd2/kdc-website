export interface ReferenzCardProps {
  id?: string
  firma: string
  branche: string
  problem: string
  loesung: string
  ergebnis: string
}

export function ReferenzCard({
  id,
  firma,
  branche,
  problem,
  loesung,
  ergebnis,
}: ReferenzCardProps) {
  return (
    <div
      id={id}
      className="scroll-mt-24 rounded-xl bg-white overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
    >
      {/* Header bar */}
      <div className="bg-primary px-6 py-5 flex flex-wrap items-baseline gap-3">
        <h3 className="text-xl font-bold text-white">{firma}</h3>
        <span className="rounded-full bg-white/15 px-3 py-0.5 text-xs font-medium text-white/80">
          {branche}
        </span>
      </div>

      {/* Body */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-light-gray">
        <div className="px-6 py-5">
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-slate mb-2">
            Ausgangslage
          </p>
          <p className="text-neutral-charcoal text-sm leading-relaxed">{problem}</p>
        </div>
        <div className="px-6 py-5">
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-slate mb-2">
            Lösung
          </p>
          <p className="text-neutral-charcoal text-sm leading-relaxed">{loesung}</p>
        </div>
        <div className="px-6 py-5 bg-primary/[0.03]">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
            Ergebnis
          </p>
          <p className="text-neutral-charcoal text-sm leading-relaxed font-medium">{ergebnis}</p>
        </div>
      </div>
    </div>
  )
}
