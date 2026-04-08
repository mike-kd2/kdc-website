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
    <div id={id} className="rounded-lg bg-white shadow-card border-l-4 border-primary overflow-hidden scroll-mt-24">
      <div className="p-6">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <h3 className="text-xl font-bold text-neutral-charcoal">{firma}</h3>
          <span className="rounded-full bg-neutral-light-gray px-3 py-0.5 text-sm text-neutral-slate">
            {branche}
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <p className="mb-1 font-semibold text-primary">Problem:</p>
            <p className="text-neutral-charcoal">{problem}</p>
          </div>

          <div className="border-t border-primary/10 pt-4">
            <p className="mb-1 font-semibold text-primary">Lösung:</p>
            <p className="text-neutral-charcoal">{loesung}</p>
          </div>

          <div className="border-t border-primary/10 pt-4">
            <p className="mb-1 font-semibold text-primary">Ergebnis:</p>
            <p className="text-neutral-charcoal">{ergebnis}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
