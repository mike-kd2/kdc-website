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
    title: 'OdA ARTECURA — Automatisierte Prüfungslösung',
    description:
      'Ein Schweizer Berufsverband hatte eine aufwändige, fehleranfällige Prüfungsauswertung in Excel. Ich habe den gesamten Prozess automatisiert: von der Datenvalidierung über die Auswertung bis zur Ergebnisaufbereitung.',
    tags: ['Excel', 'VBA', 'C#', '.NET'],
    category: 'Verband',
    highlight: 'Berufsverband für Kunsttherapie',
  },
  {
    id: '2',
    title: 'Helion Energy AG — Data Warehouse & Reporting',
    description:
      'Konzeption und Betrieb eines firmenweiten Data Warehouse über 10 Jahre. Von KPI-Dashboards in Power BI bis zur automatisierten Report-Generierung.',
    tags: ['SQL Server', 'Power BI', 'T-SQL', 'SSIS'],
    category: 'KMU',
    highlight: '10 Jahre Zusammenarbeit',
  },
  {
    id: '3',
    title: 'SBKH GmbH — Automatisierte Datenverarbeitung',
    description:
      'Vollautomatisierte ETL-Pipeline für eine Preisvergleichsplattform. Tägliche Datenverarbeitung aus mehreren externen Quellen, komplett ohne manuelle Eingriffe.',
    tags: ['SQL Server', 'SSIS', 'C#', 'REST'],
    category: 'KMU',
    highlight: 'Null manueller Aufwand',
  },
]

export function FeaturedProjects() {
  return (
    <Section>
      <Container size="lg">
        <div className="text-center">
          <ScrollReveal>
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-neutral-charcoal sm:text-4xl md:mb-16 md:text-5xl">
              Einblick in realisierte Projekte
            </h2>
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
                window.location.href = '/referenzen'
              }}
            >
              Alle Referenzen ansehen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  )
}
