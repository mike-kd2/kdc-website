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
      <section className="relative bg-primary overflow-hidden py-16 text-white md:py-24">
        {/* Grid overlay */}
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
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
                Für Verbände
              </p>
              <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl max-w-2xl">
                Weniger Handarbeit in der Geschäftsstelle.
              </h1>
              <p className="text-lg text-white/75 max-w-lg">
                Prüfungen planen, Kandidaten zuordnen, Ergebnisse auswerten,
                Zertifizierungen nachverfolgen. Vieles davon läuft bei Ihnen noch
                manuell oder in Excel. Ich automatisiere diese Abläufe so, dass
                Ihre Geschäftsstelle sie eigenständig durchführen kann. Ohne
                IT-Abteilung.
              </p>
            </div>

            {/* Visual: Vorher / Nachher */}
            <div className="hidden lg:flex flex-col gap-3">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Typischer Alltag heute</p>
              {[
                'Excel-Datei wird manuell befüllt',
                'Kandidaten werden per E-Mail informiert',
                'Ergebnisse werden händisch übertragen',
                'Dokumente werden einzeln erstellt',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-md bg-white/[0.06] border border-white/10 px-4 py-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0" />
                  <span className="text-white/60 text-sm">{item}</span>
                </div>
              ))}
              <div className="mt-2 flex items-center gap-2 text-accent text-sm font-semibold">
                <span className="text-accent/60">↓</span>
                Nach der Automatisierung: keiner dieser Schritte mehr manuell.
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Leistungsblöcke Section */}
      <Section spacing="lg">
        <Container size="md">
          <h2 className="mb-8 text-3xl font-bold text-neutral-charcoal sm:text-4xl">
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
