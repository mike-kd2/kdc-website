import Link from 'next/link'
import { SEOHead } from '@/components/SEOHead'
import { StructuredData } from '@/components/seo/StructuredData'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

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
      <section className="min-h-screen bg-primary flex items-center">
        <Container size="md">
          <div className="text-center py-24">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Ich baue die Tools, die Ihren Alltag erleichtern.
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              Automatisierung, massgeschneiderte Software und Datenstrukturen
              für Verbände und KMUs in der Schweiz.
              <br />
              Kein Foliensatz. Kein Konzeptpapier. Funktionierende Lösungen.
            </p>
            <Link href="/angebot#prozess-check">
              <Button size="lg" variant="secondary">
                Kostenlosen Prozess-Check anfragen →
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Kurzblock */}
      <section className="bg-white py-20">
        <Container size="sm">
          <div className="text-center">
            <p className="text-xl text-neutral-charcoal leading-relaxed mb-6">
              Sie haben Abläufe, die zu viel Zeit fressen: manuelle
              Dateneingabe, Excel-Listen, die niemand mehr versteht, Systeme,
              die nicht miteinander reden.
            </p>
            <p className="text-xl font-semibold text-primary leading-relaxed">
              Ich baue die Lösung, die das ändert. Nicht irgendwann. In Wochen,
              nicht Monaten.
            </p>
          </div>
        </Container>
      </section>

      {/* Zielgruppen-Karten */}
      <section className="bg-neutral-50 py-20">
        <Container size="md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h2 className="text-xl font-bold text-neutral-charcoal mb-4">
                Für Verbände
              </h2>
              <p className="text-neutral-slate leading-relaxed mb-6">
                Prüfungsprozesse, Mitgliederdaten, Zertifizierungen. Ich
                automatisiere, was Ihre Geschäftsstelle heute von Hand macht.
              </p>
              <Link
                href="/verbaende"
                className="text-primary font-semibold hover:underline"
              >
                Mehr erfahren →
              </Link>
            </Card>

            <Card className="p-8">
              <h2 className="text-xl font-bold text-neutral-charcoal mb-4">
                Für KMUs
              </h2>
              <p className="text-neutral-slate leading-relaxed mb-6">
                Datenflüsse, Reporting, Systemwechsel. Ich baue die Brücken
                zwischen Ihren Systemen.
              </p>
              <Link
                href="/kmu"
                className="text-primary font-semibold hover:underline"
              >
                Mehr erfahren →
              </Link>
            </Card>
          </div>
        </Container>
      </section>

      {/* Referenz-Teaser */}
      <section className="bg-neutral-50 py-20 border-t border-neutral-200">
        <Container size="md">
          <h2 className="text-2xl font-bold text-neutral-charcoal mb-10">
            Was ich bereits gebaut habe.
          </h2>
          <div className="divide-y divide-neutral-200">
            <div className="py-8">
              <p className="font-semibold text-neutral-charcoal mb-1">
                OdA ARTECURA
              </p>
              <p className="text-neutral-slate">
                Prüfungsprozess von manueller Excel-Arbeit auf eigenständig
                durchführbare Automatisierung umgestellt.
              </p>
            </div>
            <div className="py-8">
              <p className="font-semibold text-neutral-charcoal mb-1">
                Helion Energy AG
              </p>
              <p className="text-neutral-slate">
                10 Jahre Partnerschaft: Data Warehouse, Dashboards, Middleware,
                Datenmigration.
              </p>
            </div>
            <div className="py-8">
              <p className="font-semibold text-neutral-charcoal mb-1">
                SBKH GmbH
              </p>
              <p className="text-neutral-slate">
                Tägliche Datenaktualisierung vollständig automatisiert. Null
                manueller Aufwand.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="/referenzen"
              className="text-primary font-semibold hover:underline"
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
            <p className="text-lg text-white/80 mb-10">
              Lassen Sie uns in 45 Minuten herausfinden, ob Automatisierung
              sich lohnt.
            </p>
            <Link href="/angebot#prozess-check">
              <Button size="lg" variant="secondary">
                Prozess-Check anfragen →
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
