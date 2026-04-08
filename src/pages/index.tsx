import Link from 'next/link'
import { SEOHead } from '@/components/SEOHead'
import { StructuredData } from '@/components/seo/StructuredData'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'

export default function Home() {
  return (
    <>
      <SEOHead
        description="Automatisierung, massgeschneiderte Software und Datenstrukturen für Verbände und KMUs in der Schweiz."
      />
      <StructuredData
        type="website"
        pageTitle="klauser designs"
        pageDescription="Automatisierung, massgeschneiderte Software und Datenstrukturen für Verbände und KMUs in der Schweiz."
        pagePath="/"
      />

      {/* Hero */}
      <section className="relative min-h-screen bg-primary overflow-hidden flex items-center">
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        {/* Decorative teal circle — top right */}
        <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-primary-light opacity-30 blur-3xl pointer-events-none" />
        {/* Decorative amber accent — bottom left */}
        <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-accent opacity-20 blur-2xl pointer-events-none" />

        <Container size="lg">
          <div className="relative py-24 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
                Automatisierung · Software · Daten
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Ich baue die Tools,{' '}
                <span className="text-accent">die Ihren Alltag</span>{' '}
                erleichtern.
              </h1>
              <p className="text-lg text-white/75 max-w-lg mb-10 leading-relaxed">
                Für Verbände und KMUs in der Schweiz. Kein Foliensatz.
                Kein Konzeptpapier.{' '}
                <span className="text-white/95 font-medium">
                  Funktionierende Lösungen.
                </span>
              </p>
              <Link href="/angebot#prozess-check">
                <Button size="lg" variant="secondary">
                  Kostenlosen Prozess-Check anfragen{' '}
                  <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Button>
              </Link>
            </div>

            {/* Stats / Social proof */}
            <div className="hidden lg:flex flex-col gap-4">
              {[
                { zahl: '10+', text: 'Jahre Partnerschaft mit Helion Energy' },
                { zahl: 'Null', text: 'manueller Aufwand bei SBKH nach der Automatisierung' },
                { zahl: '2013', text: 'selbstständig — Verbände und KMUs in der Deutschschweiz' },
              ].map(({ zahl, text }) => (
                <div
                  key={zahl}
                  className="rounded-lg bg-white/[0.07] border border-white/10 px-6 py-5 backdrop-blur-sm"
                >
                  <p className="text-2xl font-bold text-accent mb-1">{zahl}</p>
                  <p className="text-white/70 text-sm leading-snug">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Kurzblock — visuelles Zitat */}
      <section className="bg-white py-20">
        <Container size="sm">
          <div className="border-l-4 border-accent pl-8">
            <p className="text-xl sm:text-2xl text-neutral-charcoal leading-relaxed mb-5">
              Sie haben Abläufe, die zu viel Zeit fressen: manuelle
              Dateneingabe, Excel-Listen, die niemand mehr versteht, Systeme,
              die nicht miteinander reden.
            </p>
            <p className="text-xl sm:text-2xl font-semibold text-primary leading-relaxed">
              Ich baue die Lösung, die das ändert. Nicht irgendwann. In Wochen,
              nicht Monaten.
            </p>
            <p className="mt-5 text-base text-neutral-slate">
              Ob das ein klassischer Workflow ist, ein massgeschneidertes Tool
              oder KI an den richtigen Stellen: Ich entscheide nach dem, was
              für Ihr Problem wirklich Sinn ergibt.
            </p>
          </div>
        </Container>
      </section>

      {/* Zielgruppen-Karten */}
      <section className="bg-neutral-off-white py-20">
        <Container size="md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/verbaende"
              className="group block rounded-lg bg-white shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 border-t-4 border-primary p-8"
            >
              <h2 className="text-xl font-bold text-neutral-charcoal mb-3">
                Für Verbände
              </h2>
              <p className="text-neutral-slate leading-relaxed mb-6">
                Prüfungsprozesse, Mitgliederdaten, Zertifizierungen. Ich
                automatisiere, was Ihre Geschäftsstelle heute von Hand macht.
              </p>
              <span className="text-primary font-semibold inline-flex items-center gap-1">
                Mehr erfahren{' '}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>

            <Link
              href="/kmu"
              className="group block rounded-lg bg-white shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 border-t-4 border-accent p-8"
            >
              <h2 className="text-xl font-bold text-neutral-charcoal mb-3">
                Für KMUs
              </h2>
              <p className="text-neutral-slate leading-relaxed mb-6">
                Datenflüsse, Reporting, Systemwechsel. Ich baue die Brücken
                zwischen Ihren Systemen.
              </p>
              <span className="text-primary font-semibold inline-flex items-center gap-1">
                Mehr erfahren{' '}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </div>
        </Container>
      </section>

      {/* Referenz-Teaser */}
      <section className="bg-neutral-off-white py-20 border-t border-neutral-light-gray">
        <Container size="md">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Ausgewählte Projekte
          </p>
          <h2 className="text-2xl font-bold text-neutral-charcoal mb-10">
            Was ich bereits gebaut habe.
          </h2>
          <div className="flex flex-col gap-3">
            {[
              {
                firma: 'OdA ARTECURA',
                ergebnis:
                  'Prüfungsprozess von manueller Excel-Arbeit auf eigenständig durchführbare Automatisierung umgestellt.',
                href: '/referenzen#oda-artecura',
              },
              {
                firma: 'Helion Energy AG',
                ergebnis:
                  '10 Jahre Partnerschaft: Data Warehouse, Dashboards, Middleware, Datenmigration.',
                href: '/referenzen#helion-energy',
              },
              {
                firma: 'SBKH GmbH',
                ergebnis:
                  'Tägliche Datenaktualisierung vollständig automatisiert. Null manueller Aufwand.',
                href: '/referenzen#sbkh',
              },
            ].map(({ firma, ergebnis, href }) => (
              <Link
                key={firma}
                href={href}
                className="group flex items-center gap-4 rounded-lg bg-white border border-neutral-light-gray hover:border-primary/30 hover:shadow-card transition-all px-6 py-5"
              >
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-neutral-charcoal text-base leading-tight mb-0.5">
                    {firma}
                  </p>
                  <p className="text-neutral-slate text-sm leading-relaxed">
                    {ergebnis}
                  </p>
                </div>
                <span className="flex-shrink-0 text-primary/40 group-hover:text-primary transition-colors text-base self-center">
                  →
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/referenzen"
              className="text-white/60 hover:text-accent font-semibold transition-colors text-sm uppercase tracking-wide"
            >
              Alle Referenzen →
            </Link>
          </div>
        </Container>
      </section>

      {/* Abschluss-CTA */}
      <section className="bg-primary py-20">
        <Container size="sm">
          <div className="text-center">
            <p className="text-xl sm:text-2xl text-white mb-3 leading-relaxed">
              Sie haben einen Ablauf, der besser laufen sollte?
            </p>
            <p className="text-lg text-white/70 mb-10">
              Lassen Sie uns in 45 Minuten herausfinden, ob Automatisierung
              sich lohnt.
            </p>
            <Link href="/angebot#prozess-check">
              <Button size="lg" variant="secondary">
                Prozess-Check anfragen{' '}
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
