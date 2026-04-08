export interface ReferenzCardProps {
  firma: string
  branche: string
  problem: string
  loesung: string
  ergebnis: string
}

export function ReferenzCard({
  firma,
  branche,
  problem,
  loesung,
  ergebnis,
}: ReferenzCardProps) {
  return (
    <div className="rounded-lg border border-neutral-light-gray bg-white shadow-sm">
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

          <div className="border-t border-neutral-light-gray pt-4">
            <p className="mb-1 font-semibold text-primary">Lösung:</p>
            <p className="text-neutral-charcoal">{loesung}</p>
          </div>

          <div className="border-t border-neutral-light-gray pt-4">
            <p className="mb-1 font-semibold text-primary">Ergebnis:</p>
            <p className="text-neutral-charcoal">{ergebnis}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
