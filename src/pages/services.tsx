import { SEOHead } from '@/components/SEOHead';
import { StructuredData } from '@/components/seo/StructuredData';
import { Section, Container } from '@/components/layout';
import { Badge, Card, CardHeader, CardContent, Button } from '@/components/ui';
import { ScrollReveal, FadeIn } from '@/components/animations';
import {
  Sparkles,
  Code,
  Network,
  GraduationCap,
  Target,
  Zap,
  CheckCircle2,
  ArrowRight,
  Users,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Network,
    title: 'KI-Strategie & Integration',
    subtitle: 'Ihr Einstieg in die KI-Welt',
    description:
      'Wir helfen Ihnen, KI erfolgreich in Ihre Geschäftsprozesse zu integrieren. Von der Potenzialanalyse bis zur Umsetzung – pragmatisch und ROI-orientiert.',
    features: [
      'KI-Potenzialanalyse Ihrer Prozesse',
      'Tool-Evaluierung und Empfehlungen',
      'Implementierungs-Roadmap',
      'Change Management und Begleitung',
    ],
    benefits: [
      'Klarheit über KI-Chancen in Ihrem Unternehmen',
      'ROI-orientierte Entscheidungsgrundlage',
      'Risikominimierung bei der Einführung',
    ],
  },
  {
    icon: Zap,
    title: 'KI-gestützte Prozessautomatisierung',
    subtitle: 'Effizienz steigern',
    description:
      'Wir automatisieren wiederkehrende Aufgaben mit KI-Tools und schaffen messbare Effizienzgewinne. Von der Datenverarbeitung bis zur Kundenkommunikation.',
    features: [
      'Analyse und Identifikation von Automatisierungspotenzialen',
      'Integration von KI-Tools (ChatGPT, Make.com, Power Automate)',
      'Workflow-Design und Implementierung',
      'Monitoring und kontinuierliche Optimierung',
    ],
    benefits: [
      'Zeitersparnis bei Routineaufgaben',
      'Höhere Datenqualität durch Automatisierung',
      'Skalierbare Prozesse ohne Personalaufbau',
    ],
  },
  {
    icon: Code,
    title: 'Anwendungsentwicklung',
    subtitle: 'Massgeschneiderte Software',
    description:
      'Wir entwickeln moderne Webanwendungen und Tools, die genau zu Ihren Anforderungen passen. Von MVPs bis zu vollständigen Geschäftsanwendungen.',
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
    icon: GraduationCap,
    title: 'KI-Schulungen & Workshops',
    subtitle: 'Ihr Team fit für KI machen',
    description:
      'Praxisnahe Trainings für Ihr Team: Vom effektiven Prompting bis zum souveränen Umgang mit KI-Tools im Arbeitsalltag.',
    features: [
      'Prompt-Engineering für Text, Bild & Video (ChatGPT, Midjourney, Runway)',
      'Hands-on Workshops mit Ihren realen Anwendungsfällen',
      'Best Practices und Prompt-Bibliotheken zum Mitnehmen',
      'Individuelle Schulungen für Teams (2-12 Personen)',
    ],
    benefits: [
      'Sofort anwendbares Wissen für den Arbeitsalltag',
      'Höhere Qualität bei KI-generierten Inhalten',
      'Selbständigkeit Ihres Teams im Umgang mit KI-Tools',
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
      <StructuredData
        type="service"
        pageTitle="Services - AI-Beratung und Software-Entwicklung"
        pageDescription="KI-Integration, Prompt Engineering, Low-Code-Entwicklung und massgeschneiderte Software-Lösungen für Schweizer KMUs"
        pagePath="/services"
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
                Von der KI-Strategie bis zur vollständigen Anwendungsentwicklung –
                wir unterstützen Sie auf dem Weg zur digitalen Transformation.
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
                        <div className="mb-4 flex items-start gap-3">
                          <div className="flex-shrink-0 rounded-lg bg-accent/10 p-3">
                            <Icon className="h-8 w-8 text-accent" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h2 className="text-2xl font-bold text-neutral-charcoal sm:text-3xl" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>
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

      {/* Network & Scalability Section */}
      <Section className="bg-gradient-to-br from-neutral-off-white to-white">
        <Container>
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <div className="grid gap-8 md:grid-cols-2">
                <Card className="p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-accent/10 p-3">
                      <Users className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-charcoal">
                      Spezialisiertes Netzwerk
                    </h3>
                  </div>
                  <p className="text-neutral-slate">
                    Je nach Projektanforderung arbeiten wir mit spezialisierten Partnern
                    aus unserem Netzwerk zusammen – so erhalten Sie immer die passende
                    Expertise.
                  </p>
                </Card>

                <Card className="p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <TrendingUp className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-charcoal">
                      Flexible Skalierung
                    </h3>
                  </div>
                  <p className="text-neutral-slate">
                    Von der Einzelberatung bis zum Projektteam – wir passen uns Ihren
                    Anforderungen an und skalieren mit Ihrem Bedarf.
                  </p>
                </Card>
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
