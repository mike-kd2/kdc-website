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
    icon: Users,
    title: 'Transparent',
    description:
      'Offene Kommunikation und Ehrlichkeit sind die Basis unserer Zusammenarbeit. Keine versteckten Kosten, keine leeren Versprechen.',
  },
];

const expertise = [
  'KI-Integration und Prompt-Engineering',
  'Web-Entwicklung (Next.js, React, TypeScript)',
  'Prozessoptimierung mit KI-Tools',
  'Change Management und Team-Training',
  'API-Integration und Automation',
  'Agile Projektmethodik',
];

export default function About() {
  return (
    <>
      <SEOHead
        title="Über mich"
        description="Erfahren Sie mehr über Michael Klauser und klauser designs & coaching. Professionelle KI-Beratung für Schweizer KMUs mit Fokus auf praktische Lösungen."
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
                KI-Berater, Entwickler und Partner für Schweizer KMUs auf dem Weg zur
                KI-Integration
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
                  Meine Geschichte
                </h2>
                <div className="space-y-4 text-neutral-slate">
                  <p>
                    Seit Jahren beschäftige ich mich mit der Frage: <strong>Wie können wir Technologie nutzen, um echte Probleme zu lösen?</strong> Diese Frage hat mich von der Software-Entwicklung zur KI-Beratung geführt.
                  </p>
                  <p>
                    Als ich gesehen habe, wie KI-Tools wie ChatGPT, Midjourney und Co. plötzlich kreative und operative Aufgaben revolutionieren, war mir klar: <strong>Das ist die Zukunft – und viele Schweizer KMUs haben noch keinen Zugang dazu.</strong>
                  </p>
                  <p>
                    Deshalb habe ich <strong>klauser designs & coaching</strong> gegründet. Mein Ziel: KI-Technologie für kleine und mittlere Unternehmen zugänglich, verständlich und profitabel machen.
                  </p>
                  <p>
                    Ich arbeite nicht mit Buzzwords oder unrealistischen Versprechen. Ich setze auf <strong>pragmatische Lösungen, die wirklich funktionieren</strong> – von der ersten Analyse bis zur erfolgreichen Implementierung.
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

      {/* Work Philosophy Section */}
      <Section className="bg-gradient-to-br from-neutral-off-white to-white">
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
                Ich freue mich darauf, mehr über Ihre Herausforderungen zu erfahren.
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
