import { SEOHead } from '@/components/SEOHead';
import { Section, Container } from '@/components/layout';
import { Badge, Card, CardHeader, CardContent, Button } from '@/components/ui';
import { ScrollReveal, FadeIn } from '@/components/animations';
import { Sparkles, ExternalLink, Code, Cpu, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';

// Placeholder projects - to be replaced with real case studies
const projects = [
  {
    title: 'KI-gestützte Content-Erstellung für E-Commerce',
    category: 'Prompt-Engineering',
    icon: ImageIcon,
    description:
      'Entwicklung eines Prompt-Systems für die automatisierte Erstellung von Produktbildern und Beschreibungen für einen Schweizer Online-Shop.',
    technologies: ['Midjourney', 'ChatGPT', 'Automation'],
    results: [
      '70% Zeitersparnis bei der Content-Erstellung',
      'Konsistente Bildqualität über 500+ Produkte',
      'ROI innerhalb von 3 Monaten',
    ],
    status: 'Case Study in Vorbereitung',
  },
  {
    title: 'Prozessautomatisierung mit KI für Beratungsunternehmen',
    category: 'KI-Integration',
    icon: Cpu,
    description:
      'Implementierung von KI-Tools zur Automatisierung von Reporting, Kundenkommunikation und Dokumentenanalyse.',
    technologies: ['ChatGPT API', 'Make.com', 'Custom Workflows'],
    results: [
      '15 Stunden/Woche Zeitersparnis',
      'Höhere Kundenzufriedenheit durch schnellere Reaktionszeiten',
      'Skalierbare Prozesse für Wachstum',
    ],
    status: 'Case Study in Vorbereitung',
  },
  {
    title: 'Web-Applikation für KMU-Management',
    category: 'Anwendungsentwicklung',
    icon: Code,
    description:
      'Entwicklung einer massgeschneiderten Management-Plattform für die Verwaltung von Kundenprojekten und internen Prozessen.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Vercel'],
    results: [
      'Zentrale Plattform für alle Geschäftsprozesse',
      'Mobile-first Design für Nutzung unterwegs',
      'Integration mit bestehenden Tools',
    ],
    status: 'Case Study in Vorbereitung',
  },
];

export default function Projects() {
  return (
    <>
      <SEOHead
        title="Projekte"
        description="Entdecken Sie erfolgreiche KI-Projekte und Case Studies von klauser designs & coaching. Erfahren Sie, wie Schweizer KMUs von KI-Integration profitieren."
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/projects`}
      />

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary to-primary-light text-white pt-24 pb-16">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <Badge variant="accent" className="mb-4">
                Projekte
              </Badge>
              <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
                Erfolgreiche KI-Projekte
              </h1>
              <p className="text-xl text-white/90 sm:text-2xl">
                Von der Idee zur Implementierung – so sieht erfolgreiche KI-Integration
                in der Praxis aus
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Coming Soon Notice */}
      <Section className="bg-gradient-to-br from-accent/10 to-white">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <Sparkles className="mx-auto mb-4 h-12 w-12 text-accent" />
              <h2 className="mb-4 text-2xl font-bold text-neutral-charcoal">
                Case Studies folgen in Kürze
              </h2>
              <p className="text-lg text-neutral-slate">
                Wir arbeiten gerade an detaillierten Case Studies unserer Projekte.
                Die folgenden Beispiele geben Ihnen bereits einen Einblick in unsere
                Arbeit.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Projects Grid */}
      <Section>
        <Container>
          <div className="grid gap-8 lg:gap-10">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <ScrollReveal key={project.title}>
                  <Card className="overflow-hidden">
                    <div className="grid gap-8 lg:grid-cols-3">
                      {/* Left Column - Project Info */}
                      <div className="lg:col-span-2 p-8">
                        <div className="mb-4 flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="rounded-lg bg-accent/10 p-3">
                              <Icon className="h-6 w-6 text-accent" />
                            </div>
                            <div>
                              <Badge variant="outline" className="mb-2">
                                {project.category}
                              </Badge>
                              <h3 className="text-xl font-bold text-neutral-charcoal sm:text-2xl">
                                {project.title}
                              </h3>
                            </div>
                          </div>
                        </div>

                        <p className="mb-6 text-lg text-neutral-slate">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="mb-6">
                          <h4 className="mb-2 text-sm font-semibold text-neutral-charcoal">
                            Technologien:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full bg-neutral-light-gray px-3 py-1 text-sm text-neutral-charcoal"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Status */}
                        <div className="inline-flex items-center rounded-lg bg-amber-50 px-4 py-2 text-sm font-medium text-amber-800">
                          {project.status}
                        </div>
                      </div>

                      {/* Right Column - Results */}
                      <div className="bg-gradient-to-br from-green-50 to-white p-8">
                        <h4 className="mb-4 font-semibold text-neutral-charcoal">
                          Ergebnisse:
                        </h4>
                        <ul className="space-y-3">
                          {project.results.map((result) => (
                            <li
                              key={result}
                              className="flex items-start gap-2 text-sm text-neutral-slate"
                            >
                              <span className="mt-1 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-600" />
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
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
                Ihr Projekt könnte das nächste sein
              </h2>
              <p className="mb-8 text-xl text-white/90">
                Lassen Sie uns gemeinsam herausfinden, wie KI Ihr Unternehmen
                voranbringen kann. Buchen Sie jetzt einen kostenlosen Discovery Call.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link href="/#discovery-call">
                  <Button variant="secondary" size="lg">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Discovery Call buchen
                  </Button>
                </Link>
                <Link href="/#business-audit">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                    Kostenlose Analyse
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
