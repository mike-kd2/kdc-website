import { SEOHead } from '@/components/SEOHead'
import { Container } from '@/components/layout'
import { ReferenzCard } from '@/components/ui/ReferenzCard'
import Link from 'next/link'

const stats = [
  { wert: '12+', label: 'Jahre Projekterfahrung' },
  { wert: '10 J.', label: 'längste Kundenbeziehung' },
  { wert: '100%', label: 'Datensatz-Validierung' },
  { wert: '6+', label: 'Branchen' },
]

export default function Referenzen() {
  return (
    <>
      <SEOHead
        title="klauser designs | Referenzen"
        description="Projekte aus 12 Jahren: Data Warehouse, Systemmigrationen, Automatisierungen und Middleware — für Energieunternehmen, Verbände und KMUs."
      />

      {/* Hero Section */}
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
        <div className="absolute -bottom-16 left-1/3 w-48 h-48 rounded-full bg-accent opacity-15 blur-2xl pointer-events-none" />

        <Container size="md">
          <div className="relative">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              Referenzen
            </p>
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl max-w-3xl mb-6">
              12 Jahre gebaut.<br />Über 20 Projekte geliefert.
            </h1>
            <p className="text-lg text-white/70 max-w-xl">
              Kein einmaliger Auftritt — sondern langfristige Zusammenarbeit mit
              Unternehmen, die immer wieder zurückgekommen sind. Hier steht, was
              dabei entstanden ist.
            </p>
          </div>
        </Container>
      </section>

      {/* Stats Bar */}
      <section className="bg-neutral-charcoal py-8">
        <Container size="md">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-0 sm:divide-x sm:divide-white/10">
            {stats.map(({ wert, label }) => (
              <div key={label} className="text-center sm:px-6">
                <p className="text-3xl font-bold text-accent tabular-nums">{wert}</p>
                <p className="text-white/50 text-xs mt-1">{label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Referenzen Section */}
      <section className="bg-neutral-off-white py-16">
        <Container size="md">
          <div className="flex flex-col gap-6">

            <ReferenzCard
              id="helion-dw"
              nummer={1}
              firma="Helion Energy AG"
              branche="Energieunternehmen"
              zeitraum="2013 – 2023"
              problem="Kein zentrales Daten-Fundament. Berichte wurden manuell zusammengestellt — pro Report mehrere Tage Aufwand. Kein einheitliches Bild über Projekte und Geschäftszahlen."
              loesung="Aufbau und 10-jähriger Betrieb des firmenweiten Data Warehouse. KPI-Dashboards in Power BI. Automatische Aktualisierung, strukturierte Datenhaltung als Single Point of Truth."
              ergebnis="Reportingzeit von Tagen auf Stunden reduziert. Alle Geschäftsbereiche auf demselben Datenstand."
            />

            <ReferenzCard
              id="helion-middleware"
              nummer={2}
              firma="Helion Energy AG"
              branche="Energieunternehmen"
              zeitraum="2018 – 2025"
              problem="Eigenentwickelte Vertriebs- und Projektmanagementsoftware, on-premise ERP und konzernweites SAP liefen aneinander vorbei. Daten wurden manuell zwischen Systemen übertragen."
              loesung="Azure-Middleware für vollautomatischen Import und Sync von Adress-, Projekt-, Offert- und Rechnungsdaten. Anbindung externer Logistikpartner. Modular gebaut für geplante ERP-Migration."
              ergebnis="Kein manuelles Übertragen mehr. Vollautomatische Datenflüsse zwischen allen Systemen."
            />

            <ReferenzCard
              id="helion-migration"
              nummer={3}
              firma="Helion Energy AG"
              branche="Energieunternehmen"
              zeitraum="2024 – 2025"
              problem="Ablösung des Legacy-Systems ES2000 durch Microsoft Dynamics 365 CRM und BC. Bisherige Migrationsstrategie basierte auf Stichproben — zu riskant für eine vollständige Datenmigration."
              loesung="End-to-End Datenmigration mit Python und SQL. Automatisierte 100%-Validierung aller migrierten Datensätze. Tägliche Validierungszyklen zur frühzeitigen Erkennung von Inkonsistenzen."
              ergebnis="100% der migrierten Datensätze validiert — statt Stichproben. Keine Post-Migration-Korrekturen."
            />

            <ReferenzCard
              id="oda-artecura"
              nummer={4}
              firma="OdA ARTECURA"
              branche="Berufsverband Kunsttherapie"
              zeitraum="2026"
              problem="Das gesamte Qualifikationsverfahren lief manuell in Excel — über 9 Worksheets, händische Formeln, fehleranfällig und zeitintensiv für die Geschäftsstelle."
              loesung="C#-Service ersetzt Legacy-VBA: automatische Generierung individueller .xlsm-Bewertungsformulare mit Datenimport aus Prüfungsplänen und automatischer Notenberechnung."
              ergebnis="Die Geschäftsstelle führt das Verfahren eigenständig durch — mit einem Bruchteil des bisherigen Aufwands."
            />

            <ReferenzCard
              id="haustechnik-d365"
              nummer={5}
              firma="CH Haustechnik-Unternehmen"
              branche="KMU / Technische Gebäudeausrüstung"
              zeitraum="2025"
              problem="ERP-Einführung mit Microsoft Dynamics 365 CRM, SAP-Anbindung und CPQ-Lösung — ohne strukturierten Cut-Over-Plan. Go-Live-Risiko war unkontrolliert, Abhängigkeiten unklar."
              loesung="Als externer Migration Manager: Cut-Over-Plan strukturiert, Migrationsschritte definiert, Rollback-Szenarien erarbeitet, Koordination mit Fachbereichen und Softwareanbieter."
              ergebnis="Strukturierter Go-Live-Prozess mit klaren Verantwortlichkeiten und definierten Rollback-Szenarien."
            />

            <ReferenzCard
              id="sbkh"
              nummer={6}
              firma="SBKH GmbH"
              branche="E-Commerce / Preisvergleich"
              zeitraum="2019 – 2020"
              problem="Täglich neue Produktdaten aus mehreren externen Quellen — Abholung, Transformation und Einspielung liefen komplett manuell. Wachstum war dadurch personalabhängig."
              loesung="Vollautomatisierte Pipeline: Abholung aus mehreren Quellen, Transformation, Qualitätsprüfung, Bereitstellung. Täglicher Lauf ohne manuelle Eingriffe."
              ergebnis="Null manueller Aufwand. Sortiment wächst ohne zusätzliches Personal."
            />

            <ReferenzCard
              id="imt-ag"
              nummer={7}
              firma="IMT AG"
              branche="Medizintechnik (FDA/CE-reguliert)"
              zeitraum="2002 – 2013"
              problem="Wachsendes Medtech-Unternehmen ohne professionelle IT-Struktur — in einem regulierten Umfeld (FDA, CE, CSA), das höchste Anforderungen an Prozesse und Dokumentation stellt."
              loesung="Als CIO und Mitglied der Geschäftsleitung: Aufbau und Leitung der gesamten IT und des Entwicklungsteams. Software für Beatmungs- und Anästhesiegeräte. Compliance-konforme Infrastruktur."
              ergebnis="Stabile IT-Struktur und Entwicklungsteam in einem regulierten Umfeld — über 7 Jahre aufgebaut und geführt."
            />

          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <Container size="md">
          <p className="mb-2 text-2xl font-semibold sm:text-3xl">
            Auch Ihr Ablauf könnte so aussehen.
          </p>
          <p className="text-white/60 mb-8 max-w-md">
            Ein 30-minütiges Gespräch reicht, um zu sehen, ob und wie ich helfen kann.
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
