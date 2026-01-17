import { SEOHead } from '@/components/SEOHead';
import { Section, Container } from '@/components/layout';
import { Badge, Card, CardHeader, CardContent, Button } from '@/components/ui';
import { ScrollReveal, FadeIn } from '@/components/animations';
import {
  Sparkles,
  Code,
  Cpu,
  Wrench,
  Target,
  Zap,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Sparkles,
    title: 'KI-Prompt-Engineering',
    subtitle: 'Video & Bild',
    description:
      'Professionelle Entwicklung von KI-Prompts für Video- und Bildgenerierung. Optimieren Sie Ihre kreativen Workflows mit massgeschneiderten Prompt-Strategien.',
    features: [
      'Prompt-Optimierung für Midjourney, DALL-E, Stable Diffusion',
      'Video-Prompts für Runway, Pika Labs',
      'Best Practices und Prompt-Bibliotheken',
      'Training Ihres Teams im Prompt-Engineering',
    ],
    benefits: [
      'Konsistente, hochwertige Ergebnisse',
      'Zeitersparnis durch optimierte Prompts',
      'Kreative Kontrolle über KI-generierte Inhalte',
    ],
  },
  {
    icon: Code,
    title: 'Anwendungsentwicklung',
    subtitle: 'Low/Mid-Level',
    description:
      'Entwicklung von massgeschneiderten Webanwendungen und Tools. Von MVPs bis zu vollständigen Geschäftsanwendungen mit modernen Technologien.',
    features: [
      'Next.js, React, TypeScript',
      'API-Integration und Backend-Entwicklung',
      'Responsive Design und Mobile-First',
      'Deployment und Hosting-Setup',
    ],
    benefits: [
      'Schnelle Umsetzung Ihrer Ideen',
      'Moderne, wartbare Codebasis',
      'Skalierbare Architektur',
    ],
  },
  {
    icon: Cpu,
    title: 'KI-Integrationsberatung',
    subtitle: 'Für KMUs',
    description:
      'Strategische Beratung für die Integration von KI in Ihre bestehenden Geschäftsprozesse. Identifizieren Sie Quick Wins und langfristige KI-Potenziale.',
    features: [
      'KI-Potenzialanalyse Ihrer Prozesse',
      'Tool-Evaluierung und Empfehlungen',
      'Implementierungs-Roadmap',
      'Change Management und Mitarbeiter-Schulung',
    ],
    benefits: [
      'Konkrete Handlungsempfehlungen',
      'ROI-orientierte KI-Strategie',
      'Risikominimierung bei der Einführung',
    ],
  },
  {
    icon: Wrench,
    title: 'Junior Software-Entwicklung',
    subtitle: 'Praktische Unterstützung',
    description:
      'Unterstützung bei der Umsetzung von Softwareprojekten. Ideal für Teams, die zusätzliche Entwicklungskapazität benötigen.',
    features: [
      'Frontend- und Backend-Entwicklung',
      'Code Reviews und Qualitätssicherung',
      'Bug-Fixing und Maintenance',
      'Feature-Entwicklung nach Spezifikation',
    ],
    benefits: [
      'Flexible Kapazitätserweiterung',
      'Qualitätsbewusste Umsetzung',
      'Agile Arbeitsweise',
    ],
  },
];

export default function Services() {
  return (
    <>
      <SEOHead
        title="Services"
        description="Professionelle KI-Beratung, Prompt-Engineering, Anwendungsentwicklung und Software-Entwicklung für Schweizer KMUs. Entdecken Sie unser Leistungsangebot."
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/services`}
      />

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary to-primary-light text-white pt-24 pb-16">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <Badge variant="accent" className="mb-4">
                Leistungen
              </Badge>
              <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
                Massgeschneiderte KI-Lösungen für Ihr Business
              </h1>
              <p className="text-xl text-white/90 sm:text-2xl">
                Von Prompt-Engineering bis zur vollständigen Anwendungsentwicklung –
                wir bringen KI in Ihr Unternehmen.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Services Detail Section */}
      <Section>
        <Container>
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <ScrollReveal key={service.title}>
                  <Card className="overflow-hidden">
                    <div className="grid gap-8 lg:grid-cols-2">
                      {/* Left Column - Info */}
                      <div className="p-8 lg:p-10">
                        <div className="mb-4 flex items-center gap-3">
                          <div className="rounded-lg bg-accent/10 p-3">
                            <Icon className="h-8 w-8 text-accent" />
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-neutral-charcoal sm:text-3xl">
                              {service.title}
                            </h2>
                            <p className="text-sm text-neutral-slate">
                              {service.subtitle}
                            </p>
                          </div>
                        </div>

                        <p className="mb-6 text-lg text-neutral-slate">
                          {service.description}
                        </p>

                        {/* Features */}
                        <div className="mb-6">
                          <h3 className="mb-3 font-semibold text-neutral-charcoal">
                            Was Sie bekommen:
                          </h3>
                          <ul className="space-y-2">
                            {service.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-start gap-2 text-sm text-neutral-slate"
                              >
                                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right Column - Benefits & CTA */}
                      <div className="bg-gradient-to-br from-neutral-off-white to-white p-8 lg:p-10">
                        <div className="mb-6">
                          <h3 className="mb-4 flex items-center gap-2 font-semibold text-neutral-charcoal">
                            <Target className="h-5 w-5 text-accent" />
                            Ihre Vorteile:
                          </h3>
                          <ul className="space-y-3">
                            {service.benefits.map((benefit) => (
                              <li
                                key={benefit}
                                className="flex items-start gap-2 text-sm text-neutral-slate"
                              >
                                <Zap className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-8 flex flex-col gap-4">
                          <Link href="/#discovery-call" className="w-full">
                            <Button variant="primary" size="lg" className="w-full">
                              <Sparkles className="mr-2 h-5 w-5" />
                              Discovery Call buchen
                            </Button>
                          </Link>
                          <Link href="/#business-audit" className="w-full">
                            <Button variant="outline" size="lg" className="w-full">
                              Kostenlose Analyse anfordern
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-primary to-primary-light text-white">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                Bereit, KI in Ihr Unternehmen zu bringen?
              </h2>
              <p className="mb-8 text-xl text-white/90">
                Buchen Sie jetzt einen kostenlosen Discovery Call und lassen Sie uns
                gemeinsam Ihre KI-Potenziale entdecken.
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
