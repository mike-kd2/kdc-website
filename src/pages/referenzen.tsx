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
      <section className="bg-primary py-16 text-white md:py-24">
        <Container size="md">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Was ich gebaut habe.
          </h1>
        </Container>
      </section>

      {/* Referenzen Section */}
      <section className="bg-white py-16">
        <Container size="md">
          <div className="flex flex-col gap-8">
            <ReferenzCard
              firma="OdA ARTECURA"
              branche="Berufsverband für Kunsttherapie"
              problem="Das gesamte Qualifikationsverfahren lief manuell in Excel. Fehleranfällig und zeitintensiv."
              loesung="Automatisierung des Prozesses von der Datenvalidierung über die Expertenzuordnung bis zur Dokumenterstellung."
              ergebnis="Die Geschäftsstelle führt das Verfahren jetzt eigenständig durch, mit einem Bruchteil des bisherigen Aufwands."
            />
            <ReferenzCard
              firma="Helion Energy AG"
              branche="Energieunternehmen"
              problem="Wachsendes Unternehmen ohne zentrale Datenplattform. Reporting dauerte Tage, Systeme liefen aneinander vorbei."
              loesung="Aufbau und Betrieb des firmenweiten Data Warehouse über 10 Jahre. KPI-Dashboards in Power BI. Middleware zwischen Eigenentwicklung und SAP. Vollständige Datenmigration zu Dynamics 365 mit 100%-Validierung."
              ergebnis="Single Point of Truth. Reportingzeit von Tagen auf Stunden reduziert."
            />
            <ReferenzCard
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
