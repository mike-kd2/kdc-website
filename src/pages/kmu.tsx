import { SEOHead } from '@/components/SEOHead'
import { StructuredData } from '@/components/seo/StructuredData'
import { Section, Container } from '@/components/layout'
import { LeistungsBlock } from '@/components/ui/LeistungsBlock'
import Link from 'next/link'

export default function KMU() {
  return (
    <>
      <SEOHead
        title="klauser designs | Für KMUs"
        description="Datenflüsse automatisieren, Reporting und Systemmigrationen für Schweizer KMUs."
      />
      <StructuredData
        type="service"
        pageTitle="klauser designs | Für KMUs"
        pageDescription="Datenflüsse automatisieren, Reporting und Systemmigrationen für Schweizer KMUs."
        pagePath="/kmu"
      />

      {/* Hero Section */}
      <section className="bg-primary py-16 text-white md:py-24">
        <Container size="md">
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Ihre Systeme reden nicht miteinander? Ich baue die Brücke.
          </h1>
          <p className="text-lg text-white/90 sm:text-xl">
            Ihre Daten stecken in fünf Systemen, Ihr Reporting kostet Tage, und
            bei jedem Systemwechsel hofft jemand, dass nichts verloren geht. Ich
            baue die Verbindungen und Werkzeuge, die Ihnen das manuelle Hin und
            Her abnehmen.
          </p>
        </Container>
      </section>

      {/* Leistungsblöcke Section */}
      <Section spacing="xl">
        <Container size="md">
          <LeistungsBlock
            nummer={1}
            titel="Datenflüsse automatisieren"
            text="System-zu-System-Integration: Import, Export, Synchronisation. Automatisch statt per Copy-Paste."
          />
          <LeistungsBlock
            nummer={2}
            titel="Reporting & Dashboards"
            text="Von Excel zu Power BI: Dashboards, die sich selbst aktualisieren und Entscheidungsgrundlagen liefern."
          />
          <LeistungsBlock
            nummer={3}
            titel="Systemwechsel & Datenmigrationen"
            text="ERP/CRM-Migrationen mit 100%-Validierung über die gesamte Datenbasis. Nicht Stichproben. Alles."
          />
          <LeistungsBlock
            nummer={4}
            titel="Massgeschneiderte Software"
            text="Wenn Standardlösungen nicht passen: Backend-Systeme, Middleware, Integrationen. Gebaut für Ihren konkreten Ablauf."
          />
        </Container>
      </Section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <Container size="md">
          <p className="mb-6 text-2xl font-semibold sm:text-3xl">
            Welcher Ablauf frisst bei Ihnen am meisten Zeit?
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
