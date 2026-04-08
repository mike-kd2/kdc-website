import { SEOHead } from '@/components/SEOHead'
import { Container } from '@/components/layout'
import { PaketCard } from '@/components/ui/PaketCard'
import { TidyCalEmbed } from '@/components/integrations/TidyCalEmbed'

const PROZESS_CHECK_URL = 'https://tidycal.com/klauserdesigns/prozess-check'

export default function Angebot() {
  return (
    <>
      <SEOHead
        title="klauser designs | Angebot"
        description="Drei klare Einstiegspunkte: Prozess-Check (kostenlos), Erster Prototyp, Laufende Betreuung."
      />

      {/* Header Section */}
      <section className="bg-primary py-16 text-white md:py-24">
        <Container size="md">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
            Angebot
          </p>
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl max-w-2xl mb-6">
            Drei klare Einstiegspunkte. Kein Kleingedrucktes.
          </h1>
          <p className="text-white/75 text-lg max-w-xl">
            Fangen Sie klein an. Lernen Sie, ob es funktioniert. Dann entscheiden Sie, wie es weitergeht.
          </p>
        </Container>
      </section>

      {/* Pakete Section */}
      <section id="prozess-check" className="bg-neutral-off-white py-16">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <PaketCard
              titel="Prozess-Check"
              preis="Kostenlos"
              beschreibung="Ein Gespräch, ein konkreter Ablauf, eine ehrliche Einschätzung: Lohnt sich Automatisierung bei Ihnen? Was bringt es? Was kostet es ungefähr? Kein Verkaufsgespräch. Wenn es keinen Sinn macht, sage ich das."
              details={['45–60 Minuten', 'Klare Empfehlung, ob und wie es weitergeht']}
              ctaText="Prozess-Check buchen"
              ctaHref={PROZESS_CHECK_URL}
              highlight={true}
            />
            <PaketCard
              titel="Erster Prototyp"
              preis="ab CHF 3'000"
              beschreibung="Ich baue einen funktionierenden Prototyp für einen konkreten Prozess. Sie sehen innerhalb von 2–4 Wochen, ob die Lösung funktioniert, bevor Sie sich auf ein grosses Projekt einlassen."
              details={['Ein klar abgegrenzter Prozess', '2–4 Wochen Zeitrahmen', "CHF 3'000–5'000"]}
              ctaText="Prototyp besprechen"
              ctaHref="/kontakt"
            />
            <PaketCard
              titel="Laufende Betreuung"
              preis="ab CHF 1'500/Monat"
              beschreibung="Ihre Lösung läuft. Jetzt geht es um Wartung, Anpassungen und den nächsten Automatisierungsschritt. Planbar für Sie, planbar für mich."
              details={['Wartung & Fehlerbehebung', 'Weiterentwicklungen', 'Neue Automatisierungen nach Bedarf']}
              ctaText="Betreuung anfragen"
              ctaHref="/kontakt"
            />
          </div>
        </Container>
      </section>

      {/* TidyCal Embed Section */}
      <section className="bg-white py-16">
        <Container size="md">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Termin buchen
          </p>
          <h2 className="mb-8 text-3xl font-bold text-neutral-charcoal sm:text-4xl">
            Direkt einen Prozess-Check reservieren
          </h2>
          <TidyCalEmbed url={PROZESS_CHECK_URL} />
        </Container>
      </section>
    </>
  )
}
