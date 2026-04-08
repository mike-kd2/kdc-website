import { SEOHead } from '@/components/SEOHead'
import { Container } from '@/components/layout'
import { ReferenzCard } from '@/components/ui/ReferenzCard'
import Link from 'next/link'

export default function Referenzen() {
  return (
    <>
      <SEOHead
        title="klauser designs | Referenzen"
        description="Abgeschlossene Projekte: OdA ARTECURA, Helion Energy AG, SBKH GmbH."
      />

      {/* Header Section */}
      <section className="relative bg-primary overflow-hidden py-16 text-white md:py-24">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-primary-light opacity-40 blur-3xl pointer-events-none" />

        <Container size="md">
          <div className="relative">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              Referenzen
            </p>
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl max-w-xl mb-6">
              Was ich gebaut habe.
            </h1>
            <p className="text-white/70 text-lg max-w-lg">
              Drei abgeschlossene Projekte — mit dem Ergebnis, das zählt.
            </p>
          </div>
        </Container>
      </section>

      {/* Referenzen Section */}
      <section className="bg-neutral-off-white py-16">
        <Container size="md">
          <div className="flex flex-col gap-6">
            <ReferenzCard
              id="oda-artecura"
              nummer={1}
              firma="OdA ARTECURA"
              branche="Berufsverband für Kunsttherapie"
              problem="Das gesamte Qualifikationsverfahren lief manuell in Excel. Fehleranfällig und zeitintensiv."
              loesung="Automatisierung des Prozesses von der Datenvalidierung über die Expertenzuordnung bis zur Dokumenterstellung."
              ergebnis="Die Geschäftsstelle führt das Verfahren jetzt eigenständig durch, mit einem Bruchteil des bisherigen Aufwands."
            />
            <ReferenzCard
              id="helion-energy"
              nummer={2}
              firma="Helion Energy AG"
              branche="Energieunternehmen"
              problem="Wachsendes Unternehmen ohne zentrale Datenplattform. Reporting dauerte Tage, Systeme liefen aneinander vorbei."
              loesung="Aufbau und Betrieb des firmenweiten Data Warehouse über 10 Jahre. KPI-Dashboards in Power BI. Middleware zwischen Eigenentwicklung und SAP. Vollständige Datenmigration zu Dynamics 365 mit 100%-Validierung."
              ergebnis="Single Point of Truth. Reportingzeit von Tagen auf Stunden reduziert."
            />
            <ReferenzCard
              id="sbkh"
              nummer={3}
              firma="SBKH GmbH"
              branche="Preisvergleichsplattform"
              problem="Tägliche Datenaktualisierungen aus mehreren externen Quellen liefen manuell."
              loesung="Vollautomatisierte Pipeline: Abholung, Transformation, Qualitätsprüfung, Bereitstellung."
              ergebnis="Null manueller Aufwand. Sortiment wächst ohne zusätzliches Personal."
            />
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <Container size="md">
          <p className="mb-6 text-2xl font-semibold sm:text-3xl">
            Auch Ihr Ablauf könnte so aussehen.
          </p>
          <Link
            href="/angebot#prozess-check"
            className="inline-flex items-center rounded-md bg-white px-6 py-3 text-lg font-medium text-primary transition-colors hover:bg-white/90"
          >
            Prozess-Check anfragen
          </Link>
        </Container>
      </section>
    </>
  )
}
