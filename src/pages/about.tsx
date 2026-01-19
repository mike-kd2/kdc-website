import { SEOHead } from '@/components/SEOHead';
import { Section, Container } from '@/components/layout';
import { Badge, Button } from '@/components/ui';
import { ScrollReveal, FadeIn } from '@/components/animations';
import {
  Sparkles,
  Target,
  Heart,
  Lightbulb,
  Users,
  TrendingUp,
  CheckCircle2,
  Handshake,
} from 'lucide-react';
import Link from 'next/link';

const values = [
  {
    icon: Heart,
    title: 'Kundenorientiert',
    description:
      'Ihr Erfolg steht im Mittelpunkt. Ich höre zu, verstehe Ihre Bedürfnisse und entwickle Lösungen, die wirklich passen.',
  },
  {
    icon: Lightbulb,
    title: 'Innovativ',
    description:
      'KI entwickelt sich rasant. Ich bleibe am Puls der Zeit und bringe die neuesten Technologien in Ihr Unternehmen.',
  },
  {
    icon: Target,
    title: 'Praxisorientiert',
    description:
      'Keine Theorie ohne Praxis. Meine Lösungen sind konkret, umsetzbar und liefern messbare Ergebnisse.',
  },
  {
    icon: Handshake,
    title: 'Vermittler',
    description:
      'Ob zwischen Fachbereich und IT oder in hitzigen Projekt-Meetings – ich bringe unterschiedliche Perspektiven zusammen und sorge für konstruktive Lösungen.',
  },
];

const expertise = [
  'KI-Integration und Strategie',
  'Datenfluss und Systemintegration',
  'Data Warehouse & Business Intelligence',
  'ERP-Integration (SAP, D365, ES2000)',
  'Web-Entwicklung & Automatisierung',
  'Workshop-Moderation & Change Management',
];

export default function About() {
  return (
    <>
      <SEOHead
        title="Über mich"
        description="Erfahren Sie mehr über Michael Klauser und klauser designs&coaching. Professionelle KI-Beratung für Schweizer KMUs mit Fokus auf praktische Lösungen."
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/about`}
      />

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary to-primary-light text-white pt-24 pb-16">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <Badge variant="accent" className="mb-4">
                Über mich
              </Badge>
              <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
                Hi, ich bin Michael
              </h1>
              <p className="text-xl text-white/90 sm:text-2xl">
                Systemtechnik-Ingenieur, ehemaliger CIO und KI-Berater mit über 20 Jahren Erfahrung in der Schweizer IT-Landschaft
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Story Section */}
      <Section>
        <Container>
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <div className="prose prose-lg mx-auto">
                <h2 className="text-3xl font-bold text-neutral-charcoal mb-6">
                  Mein Weg zur KI-Beratung
                </h2>
                <div className="space-y-4 text-neutral-slate">
                  <p>
                    Ich bin kein Quereinsteiger, der auf den KI-Zug aufgesprungen ist. Mein Weg begann mit einer Lehre als Fahrzeugelektroniker, führte über ein Ingenieurstudium bis in die Geschäftsleitung eines Schweizer Technologieunternehmens.
                  </p>
                  <p>
                    Als CIO und Mitglied der Geschäftsleitung der IMT AG war ich verantwortlich für die gesamte IT-Infrastruktur und leitete ein Entwicklungsteam von 8 Ingenieuren. Ich habe ERP-Systeme eingeführt, Data Warehouses gebaut und über 10 Jahre lang ein Schweizer Energieunternehmen bei der Digitalisierung begleitet.
                  </p>
                  <p>
                    Diese Erfahrung macht den Unterschied: Ich verstehe nicht nur die Technologie, sondern auch die Realität in KMUs – mit begrenzten Budgets, gewachsenen Strukturen und dem Druck, schnell Ergebnisse zu liefern.
                  </p>
                  <p>
                    Heute bringe ich dieses Wissen in die KI-Beratung ein. Denn die beste KI nützt nichts, wenn die Daten und Prozesse dahinter nicht stimmen.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section className="bg-gradient-to-br from-neutral-off-white to-white">
        <Container>
          <ScrollReveal>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-neutral-charcoal sm:text-4xl">
                Meine Werte
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-neutral-slate">
                Was mich antreibt und wie ich arbeite
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <FadeIn key={value.title} delay={index * 0.1}>
                  <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-lg bg-accent/10 p-3">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="text-xl font-bold text-neutral-charcoal">
                        {value.title}
                      </h3>
                    </div>
                    <p className="text-neutral-slate">{value.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Expertise Section */}
      <Section>
        <Container>
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <div className="mb-8 text-center">
                <h2 className="mb-4 text-3xl font-bold text-neutral-charcoal sm:text-4xl">
                  Meine Expertise
                </h2>
                <p className="text-lg text-neutral-slate">
                  Technologien und Fähigkeiten, die ich in Ihr Unternehmen bringe
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="grid gap-4 sm:grid-cols-2">
                {expertise.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm"
                  >
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-600" />
                    <span className="text-neutral-charcoal">{skill}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* Timeline Section */}
      <Section className="bg-gradient-to-br from-neutral-off-white to-white">
        <Container>
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <div className="mb-8 text-center">
                <h2 className="mb-4 text-3xl font-bold text-neutral-charcoal sm:text-4xl">
                  Mein Werdegang
                </h2>
                <p className="text-lg text-neutral-slate">
                  Über 20 Jahre IT-Erfahrung – vom Ingenieur zum CIO zum KI-Berater
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="space-y-6">
                <div className="border-l-4 border-accent pl-6 pb-6">
                  <div className="mb-2 text-sm font-semibold text-accent">
                    2013 - heute
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-neutral-charcoal">
                    Inhaber & Geschäftsführer
                  </h3>
                  <p className="mb-2 text-neutral-slate">klauser designs&amp;coaching</p>
                  <p className="text-sm text-neutral-slate">
                    Data Warehouse, KI-Beratung, Middleware-Entwicklung
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6 pb-6">
                  <div className="mb-2 text-sm font-semibold text-primary">
                    2006 - 2013
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-neutral-charcoal">
                    CIO, Geschäftsleitung, Dev Team Manager
                  </h3>
                  <p className="mb-2 text-neutral-slate">IMT AG</p>
                  <p className="text-sm text-neutral-slate">
                    IT-Strategie, Team-Leitung (8 Personen), Infrastruktur
                  </p>
                </div>

                <div className="border-l-4 border-neutral-slate/30 pl-6 pb-6">
                  <div className="mb-2 text-sm font-semibold text-neutral-slate">
                    2005 - 2006
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-neutral-charcoal">
                    Projektleiter, Software Engineer
                  </h3>
                  <p className="mb-2 text-neutral-slate">Kyberna AG</p>
                  <p className="text-sm text-neutral-slate">
                    ITIL-Einführung bei Banken/Versicherungen
                  </p>
                </div>

                <div className="border-l-4 border-neutral-slate/30 pl-6 pb-6">
                  <div className="mb-2 text-sm font-semibold text-neutral-slate">
                    2002 - 2005
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-neutral-charcoal">
                    Junior Software Engineer
                  </h3>
                  <p className="mb-2 text-neutral-slate">IMT AG</p>
                  <p className="text-sm text-neutral-slate">
                    Medizintechnik (Beatmungs-/Anästhesiegeräte)
                  </p>
                </div>

                <div className="border-l-4 border-neutral-slate/30 pl-6">
                  <div className="mb-2 text-sm font-semibold text-neutral-slate">
                    2002
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-neutral-charcoal">
                    Dipl. Systemtechnik Ingenieur FH
                  </h3>
                  <p className="mb-2 text-neutral-slate">NTB Buchs</p>
                  <p className="text-sm text-neutral-slate">
                    Vertiefung: Ingenieurinformatik
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* Work Philosophy Section */}
      <Section>
        <Container>
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <div className="text-center">
                <TrendingUp className="mx-auto mb-4 h-12 w-12 text-accent" />
                <h2 className="mb-6 text-3xl font-bold text-neutral-charcoal sm:text-4xl">
                  Meine Arbeitsphilosophie
                </h2>
                <div className="space-y-4 text-left text-lg text-neutral-slate">
                  <p>
                    <strong>Praxis vor Theorie:</strong> Ich glaube an Learning by Doing. Gemeinsam entwickeln wir Quick Wins, die sofort Wirkung zeigen, und bauen darauf langfristige Strategien auf.
                  </p>
                  <p>
                    <strong>Mensch im Mittelpunkt:</strong> KI ist ein Werkzeug, kein Selbstzweck. Mein Fokus liegt darauf, dass Ihre Mitarbeitenden KI sinnvoll nutzen und davon profitieren.
                  </p>
                  <p>
                    <strong>Nachhaltigkeit:</strong> Ich bin kein Fan von &quot;Quick & Dirty&quot;-Lösungen. Was wir gemeinsam aufbauen, soll langfristig funktionieren und wachsen können.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-primary to-primary-light text-white">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                Lassen Sie uns zusammenarbeiten
              </h2>
              <p className="mb-8 text-xl text-white/90">
                Buchen Sie einen kostenlosen Discovery Call und lernen wir uns kennen.
                Wir freuen uns darauf, mehr über Ihre Herausforderungen zu erfahren.
              </p>
              <Link href="/#discovery-call">
                <Button variant="secondary" size="lg">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Jetzt Discovery Call buchen
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
