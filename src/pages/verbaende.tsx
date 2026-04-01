import { Container, Section } from '@/components/layout'
import { FadeIn, ScrollReveal, StaggerContainer } from '@/components/animations'
import { ServiceCard } from '@/components/sections/ServiceCard'
import { CTA } from '@/components/sections'
import { Badge } from '@/components/ui'
import { SEOHead } from '@/components/SEOHead'
import { StructuredData } from '@/components/seo/StructuredData'
import { motion } from 'framer-motion'
import { staggerItem } from '@/components/animations/variants'
import {
  ClipboardCheck,
  Users,
  BarChart3,
  RefreshCw,
  Heart,
  Target,
  Handshake,
  ArrowRight,
} from 'lucide-react'
import Link from 'next/link'

const tasks = [
  {
    icon: ClipboardCheck,
    title: 'Prüfungswesen automatisieren',
    description:
      'Prüfungsplanung, Zuordnung von Kandidaten und Experten, Auswertung der Ergebnisse, Erstellung von Dokumenten. Was heute Tage dauert, kann in Minuten laufen.',
  },
  {
    icon: Users,
    title: 'Mitgliederdaten und Zertifizierungen verwalten',
    description:
      'Daten aus verschiedenen Quellen zusammenführen, Zertifizierungsstatus nachverfolgen, Erinnerungen automatisieren. Kein Nachführen von Hand mehr.',
  },
  {
    icon: BarChart3,
    title: 'Reporting und Auswertungen',
    description:
      'Jahresberichte, Statistiken für den Vorstand, Kennzahlen für die Generalversammlung. Automatisch generiert statt jedes Mal neu zusammengestellt.',
  },
  {
    icon: RefreshCw,
    title: 'Daten migrieren',
    description:
      'Sie wechseln Ihre Mitgliederverwaltung oder ein anderes System? Ich sorge dafür, dass nichts verloren geht und die Datenqualität dabei sogar besser wird.',
  },
]

const strengths = [
  {
    icon: Heart,
    title: 'Ich verstehe nicht nur Technik, sondern auch Menschen.',
    description:
      'Als ausgebildeter Coach weiss ich, wie man verschiedene Stakeholder abholt, Veränderungsprozesse begleitet und Lösungen so gestaltet, dass sie von allen akzeptiert werden. Neue Tools funktionieren nur, wenn die Menschen dahinter mitgenommen werden.',
  },
  {
    icon: Target,
    title: 'Ich denke in Ihrem Massstab.',
    description:
      'Keine Enterprise-Lösung, die Sie nicht brauchen. Kein Overhead. Ich baue genau das, was Sinn macht, mit Technologien, die bezahlbar und wartbar sind.',
  },
  {
    icon: Handshake,
    title: 'Ich bleibe an Ihrer Seite.',
    description:
      'Nach der Einführung betreue ich die Lösung weiter. Kleine Anpassungen, Weiterentwicklung, Support. Wenn sich Ihre Anforderungen ändern, wächst die Lösung mit.',
  },
]

const technologies = ['Excel', 'VBA', 'C#', '.NET', 'ClosedXML']

export default function Verbaende() {
  return (
    <>
      <SEOHead
        title="Automatisierung für Verbände: Prüfungen, Mitglieder, Zertifizierungen | klauser designs&coaching"
        description="Ich automatisiere Prüfungsprozesse, Mitgliederverwaltung und Zertifizierungen für Schweizer Verbände. Pragmatische Lösungen statt Enterprise-Software."
      />
      <StructuredData
        type="service"
        pageTitle="Automatisierung für Verbände: Prüfungen, Mitglieder, Zertifizierungen | klauser designs&coaching"
        pageDescription="Ich automatisiere Prüfungsprozesse, Mitgliederverwaltung und Zertifizierungen für Schweizer Verbände. Pragmatische Lösungen statt Enterprise-Software."
        pagePath="/verbaende"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-accent/5 py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <Container size="lg">
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <FadeIn direction="up" delay={0.2}>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-neutral-charcoal sm:text-5xl md:text-6xl lg:text-7xl">
                Ihr Verband verdient bessere Werkzeuge.
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <p className="mb-8 text-lg text-neutral-slate sm:text-xl md:mb-10 md:text-2xl">
                Prüfungsabwicklung, Mitgliederprozesse, Zertifizierungen: Ich
                automatisiere die wiederkehrenden Abläufe, die Ihre
                ehrenamtlichen Kräfte und Geschäftsstellen Zeit und Nerven
                kosten.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* "Ich kenne Ihre Welt" Section */}
      <Section spacing="xl">
        <Container size="lg">
          <ScrollReveal direction="up">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-8 text-3xl font-bold text-neutral-charcoal sm:text-4xl md:text-5xl">
                Verbände haben besondere Herausforderungen.
              </h2>
              <p className="mb-6 text-lg text-neutral-slate md:text-xl">
                Sie arbeiten mit gewachsenen Strukturen. Vieles läuft über
                Excel, E-Mail und guten Willen. Die Prozesse funktionieren, aber
                sie kosten unverhältnismässig viel Zeit. Und wenn die eine
                Person ausfällt, die &quot;weiss, wie das Excel
                funktioniert&quot;, wird es kritisch.
              </p>
              <p className="text-lg text-neutral-slate md:text-xl">
                Gleichzeitig haben Sie selten ein internes IT-Team und weder
                Budget noch Bedarf für eine grosse Softwarelösung. Was Sie
                brauchen, ist jemand, der Ihre Abläufe versteht, pragmatisch
                denkt und eine Lösung baut, die genau passt.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* "Typische Aufgaben" Section */}
      <Section spacing="xl" background="gray">
        <Container size="lg">
          <ScrollReveal direction="up">
            <div className="mb-12 text-center md:mb-16">
              <h2 className="mb-4 text-3xl font-bold text-neutral-charcoal sm:text-4xl md:text-5xl">
                Typische Aufgaben, die ich für Verbände löse
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.15}>
            <div className="grid gap-6 sm:grid-cols-2">
              {tasks.map((task, index) => (
                <motion.div key={index} variants={staggerItem}>
                  <ServiceCard {...task} />
                </motion.div>
              ))}
            </div>
          </StaggerContainer>
        </Container>
      </Section>

      {/* "Was mich besonders macht" Section */}
      <Section spacing="xl">
        <Container size="lg">
          <ScrollReveal direction="up">
            <div className="mb-12 text-center md:mb-16">
              <h2 className="mb-4 text-3xl font-bold text-neutral-charcoal sm:text-4xl md:text-5xl">
                Was mich als Partner für Verbände besonders macht
              </h2>
            </div>
          </ScrollReveal>

          <div className="mx-auto max-w-3xl space-y-10">
            {strengths.map((strength, index) => {
              const Icon = strength.icon
              return (
                <ScrollReveal key={index} direction="up" delay={index * 0.15}>
                  <div className="flex gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-neutral-charcoal">
                        {strength.title}
                      </h3>
                      <p className="text-neutral-slate">
                        {strength.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Reference Project Section */}
      <Section spacing="xl">
        <Container size="lg">
          <ScrollReveal direction="up">
            <div className="mb-12 text-center md:mb-16">
              <h2 className="mb-2 text-3xl font-bold text-neutral-charcoal sm:text-4xl md:text-5xl">
                Referenzprojekt
              </h2>
              <p className="text-lg text-neutral-slate md:text-xl">
                OdA ARTECURA — Automatisierte Prüfungslösung
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.15}>
            <div className="mx-auto max-w-4xl rounded-2xl border border-neutral-light bg-white p-8 shadow-sm md:p-12">
              <div className="space-y-8">
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-neutral-charcoal">
                    Ausgangslage
                  </h3>
                  <p className="text-neutral-slate">
                    Ein Schweizer Berufsverband für Kunsttherapie wickelte seine
                    Qualifikationsverfahren mit einer Kombination aus
                    Excel-Dateien und manuellen Schritten ab. Die Erstellung der
                    Prüfungsunterlagen, die Zuordnung von Kandidaten und
                    Experten sowie die Auswertung der Ergebnisse waren
                    fehleranfällig und zeitaufwändig.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-semibold text-neutral-charcoal">
                    Was ich gemacht habe
                  </h3>
                  <p className="text-neutral-slate">
                    Entwicklung einer Excel- und VBA-basierten Lösung, die den
                    gesamten Prüfungsprozess automatisiert: Datenvalidierung,
                    Erstellung der Beurteilungsraster, Zuordnung und Auswertung.
                    Zusätzlich Automatisierung der vorgelagerten Schritte
                    (Masterdokument-Erstellung).
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-semibold text-neutral-charcoal">
                    Ergebnis
                  </h3>
                  <p className="text-neutral-slate">
                    Drastische Reduktion des manuellen Aufwands. Weniger Fehler.
                    Ein Prozess, der jetzt von der Geschäftsstelle eigenständig
                    durchgeführt werden kann.
                  </p>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-semibold text-neutral-charcoal">
                    Technologien
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <Badge key={tech} variant="primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/projects"
                    className="inline-flex items-center text-primary font-medium hover:text-primary-bright transition-colors"
                  >
                    Alle Projekte ansehen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* CTA Section */}
      <CTA
        title="Welcher Prozess bei Ihnen kostet zu viel Zeit?"
        text="Erzählen Sie mir davon. In einem kurzen, unverbindlichen Gespräch schauen wir gemeinsam, ob und wie ich helfen kann. Kein Verkaufsgespräch, sondern ein ehrlicher Austausch."
      />
    </>
  )
}
