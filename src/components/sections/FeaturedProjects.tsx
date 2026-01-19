import { Card, CardContent, CardHeader, Badge, Button } from '@/components/ui'
import { Container, Section } from '@/components/layout'
import { ScrollReveal, StaggerContainer } from '@/components/animations'
import { ArrowRight } from 'lucide-react'

interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  category: string
  highlight?: string
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Data Warehouse für Schweizer Energieunternehmen',
    description:
      'Konzeption, Aufbau und Betrieb eines Data Warehouse. Langfristige Partnerschaft mit zentraler Datenplattform für alle Geschäftsbereiche.',
    tags: ['SQL Server', 'ETL', 'Business Intelligence'],
    category: 'Data Warehouse & BI',
    highlight: '10 Jahre Zusammenarbeit',
  },
  {
    id: '2',
    title: 'KI-gestütztes Datenvalidierungs-Framework',
    description:
      'Entwicklung eines Validierungs-Frameworks für eine ERP-Migration. Tägliche 100%-Validierung statt Stichproben – Framework-Entwicklung mit KI massiv beschleunigt.',
    tags: ['Python', 'SQL', 'REST API', 'KI-Entwicklung'],
    category: 'Datenmigration & KI',
    highlight: 'Helion Energy AG',
  },
  {
    id: '3',
    title: 'Elgato Stream Deck Plugin',
    description:
      'Entwicklung eines produktiven Elgato-Plugins mit KI-Unterstützung. Von der Idee zum fertigen, produktiv eingesetzten Produkt in kürzester Zeit.',
    tags: ['TypeScript', 'KI-Entwicklung', 'Rapid Prototyping'],
    category: 'KI-gestützte Entwicklung',
    highlight: 'Produktiv im Einsatz',
  },
]

export function FeaturedProjects() {
  return (
    <Section>
      <Container size="lg">
        <div className="text-center">
          <ScrollReveal>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-neutral-charcoal sm:text-4xl md:text-5xl">
              Ausgewählte Projekte
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-neutral-slate md:mb-16 md:text-xl">
              Einblicke in unsere erfolgreichen KI-Implementierungen
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={0.1 * index}>
              <Card className="group h-full transition-all hover:shadow-lg">
                <CardHeader>
                  <Badge variant="primary" className="mb-3 w-fit">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-neutral-charcoal transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 text-neutral-slate">
                    {project.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {project.highlight && (
                    <div className="inline-flex items-center rounded-lg bg-amber-50 px-3 py-1.5 text-sm font-medium text-amber-800">
                      {project.highlight}
                    </div>
                  )}
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.4}>
          <div className="mt-12 text-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                } else {
                  window.location.href = '/projects'
                }
              }}
            >
              Alle Projekte ansehen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  )
}
