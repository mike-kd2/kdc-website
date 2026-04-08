import { SEOHead } from '@/components/SEOHead'
import { StructuredData } from '@/components/seo/StructuredData'
import { Section, Container } from '@/components/layout'
import { LeistungsBlock } from '@/components/ui/LeistungsBlock'
import Link from 'next/link'

export default function Verbaende() {
  return (
    <>
      <SEOHead
        title="klauser designs | Für Verbände"
        description="Automatisierung von Prüfungsprozessen, Mitgliederdaten und Reporting für Schweizer Verbände."
      />
      <StructuredData
        type="service"
        pageTitle="klauser designs | Für Verbände"
        pageDescription="Automatisierung von Prüfungsprozessen, Mitgliederdaten und Reporting für Schweizer Verbände."
        pagePath="/verbaende"
      />

      {/* Hero Section */}
      <section className="bg-primary py-16 text-white md:py-24">
        <Container size="md">
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Weniger Handarbeit in der Geschäftsstelle.
          </h1>
          <p className="text-lg text-white/90 sm:text-xl">
            Prüfungen planen, Kandidaten zuordnen, Ergebnisse auswerten,
            Zertifizierungen nachverfolgen. Vieles davon läuft bei Ihnen noch
            manuell oder in Excel. Ich automatisiere diese Abläufe so, dass
            Ihre Geschäftsstelle sie eigenständig durchführen kann. Ohne
            IT-Abteilung.
          </p>
        </Container>
      </section>

      {/* Leistungsblöcke Section */}
      <Section spacing="xl">
        <Container size="md">
          <h2 className="mb-12 text-3xl font-bold text-neutral-charcoal sm:text-4xl">
            Was ich automatisiere
          </h2>
          <LeistungsBlock
            nummer={1}
            titel="Prüfungsprozesse automatisieren"
            text="Von der Planung über die Expertenzuordnung bis zur Auswertung und Dokumenterstellung. Ein durchgängiger Ablauf statt einzelner Excel-Schritte."
          />
          <LeistungsBlock
            nummer={2}
            titel="Mitgliederdaten & Zertifizierungen"
            text="Daten aus verschiedenen Quellen zusammenführen, Zertifizierungsstatus sauber nachverfolgen, Erinnerungen automatisch auslösen."
          />
          <LeistungsBlock
            nummer={3}
            titel="Reporting auf Knopfdruck"
            text="Jahresberichte, Vorstandsstatistiken, GV-Kennzahlen: automatisch generiert statt jedes Mal neu zusammengetragen."
          />
          <LeistungsBlock
            nummer={4}
            titel="Datenmigration bei Systemwechsel"
            text="Datenqualität sichern und verbessern: validiert, nicht bloss kopiert."
          />
        </Container>
      </Section>

      {/* Referenz-Hinweis */}
      <section className="bg-neutral-off-white py-12 border-t border-neutral-light-gray">
        <Container size="md">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Aus der Praxis
          </p>
          <p className="text-neutral-charcoal mb-4">
            Wie das konkret aussieht, zeigt das Beispiel{' '}
            <Link
              href="/referenzen#oda-artecura"
              className="font-semibold text-primary hover:underline"
            >
              OdA ARTECURA →
            </Link>
          </p>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <Container size="md">
          <p className="mb-6 text-2xl font-semibold sm:text-3xl">
            Klingt nach Ihrem Alltag?
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
