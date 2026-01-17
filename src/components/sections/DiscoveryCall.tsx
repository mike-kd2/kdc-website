import { Button, Card, CardContent } from '@/components/ui'
import { Container, Section } from '@/components/layout'
import { ScrollReveal } from '@/components/animations'
import { Calendar, MessageCircle, Target, CheckCircle } from 'lucide-react'
import { TIDYCAL_URL } from '@/lib/constants'
import { trackDiscoveryCallClick } from '@/lib/analytics'

const benefits = [
  {
    icon: MessageCircle,
    title: 'Kostenlose Erstberatung',
    description: '30 Minuten persönliches Gespräch über Ihre KI-Ziele',
  },
  {
    icon: Target,
    title: 'Individuelle Analyse',
    description: 'Wir analysieren Ihre spezifischen Anforderungen',
  },
  {
    icon: CheckCircle,
    title: 'Konkrete Empfehlungen',
    description: 'Erhalten Sie direkt umsetzbare nächste Schritte',
  },
]

export function DiscoveryCall() {
  return (
    <Section spacing="xl" background="gray">
      <Container size="lg">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Column: Content */}
          <ScrollReveal direction="right">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-neutral-charcoal sm:text-4xl md:text-5xl">
                Bereit für den ersten Schritt?
              </h2>
              <p className="mb-6 text-lg text-neutral-slate">
                Buchen Sie Ihren kostenlosen Discovery Call und erfahren Sie,
                wie KI Ihr Unternehmen voranbringen kann.
              </p>
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  trackDiscoveryCallClick('discovery_call_section')
                  window.open(TIDYCAL_URL, '_blank')
                }}
                className="w-full sm:w-auto"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Jetzt Termin buchen
              </Button>
            </div>
          </ScrollReveal>

          {/* Right Column: Benefits */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="space-y-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <Card key={index} className="transition-transform hover:scale-105">
                    <CardContent className="flex gap-4 p-6">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold text-neutral-charcoal">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-neutral-slate">
                          {benefit.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  )
}
