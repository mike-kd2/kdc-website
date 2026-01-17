import { Card, CardContent, CardHeader, Badge, Button } from '@/components/ui'
import { Container, Section } from '@/components/layout'
import { ScrollReveal, StaggerContainer } from '@/components/animations'
import { ArrowRight, ExternalLink } from 'lucide-react'

interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  category: string
  link?: string
}

const projects: Project[] = [
  {
    id: '1',
    title: 'KI-gestütztes Content Management System',
    description:
      'Entwicklung eines intelligenten CMS mit automatischer Content-Generierung und -Optimierung für ein Schweizer Medienunternehmen.',
    tags: ['Web App', 'KI-Integration', 'TypeScript'],
    category: 'Anwendungsentwicklung',
  },
  {
    id: '2',
    title: 'Prompt Engineering Workshop',
    description:
      'Massgeschneiderte Schulung für Video- und Bildgenerierung. Teilnehmer konnten ihre Output-Qualität um durchschnittlich 60% steigern.',
    tags: ['Schulung', 'Prompt Engineering', 'Bildgenerierung'],
    category: 'Training & Beratung',
  },
  {
    id: '3',
    title: 'Prozessautomatisierung mit KI',
    description:
      'Integration von KI-gestützten Workflows in bestehende Unternehmensprozesse. Zeitersparnis von 15 Stunden pro Woche.',
    tags: ['Automatisierung', 'API Integration', 'Python'],
    category: 'KI-Integration',
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

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {project.link && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(project.link, '_blank')}
                      className="group/btn"
                    >
                      Mehr erfahren
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
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
