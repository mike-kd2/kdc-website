export interface ReferenzCardProps {
  id?: string
  nummer?: number
  firma: string
  branche: string
  problem: string
  loesung: string
  ergebnis: string
}

export function ReferenzCard({
  id,
  nummer,
  firma,
  branche,
  problem,
  loesung,
  ergebnis,
}: ReferenzCardProps) {
  return (
    <div
      id={id}
      className="scroll-mt-24 rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
    >
      {/* Ergebnis — prominent oben */}
      <div className="bg-neutral-charcoal px-8 py-8">
        <div className="flex items-start gap-5">
          {nummer && (
            <span className="flex-shrink-0 text-5xl font-bold text-white/10 leading-none tabular-nums select-none">
              {String(nummer).padStart(2, '0')}
            </span>
          )}
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xl font-bold text-white">{firma}</span>
              <span className="rounded-full bg-white/10 px-3 py-0.5 text-xs text-white/60">
                {branche}
              </span>
            </div>
            <p className="text-2xl font-semibold text-accent leading-snug">
              {ergebnis}
            </p>
          </div>
        </div>
      </div>

      {/* Problem → Lösung */}
      <div className="bg-white grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-light-gray">
        <div className="px-8 py-6">
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-slate mb-3">
            Ausgangslage
          </p>
          <p className="text-neutral-charcoal text-sm leading-relaxed">{problem}</p>
        </div>
        <div className="px-8 py-6">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
            Was ich gebaut habe
          </p>
          <p className="text-neutral-charcoal text-sm leading-relaxed">{loesung}</p>
        </div>
      </div>
    </div>
  )
}
