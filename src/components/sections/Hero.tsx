import { Button, Badge } from '@/components/ui'
import { Container } from '@/components/layout'
import { FadeIn, ScrollReveal } from '@/components/animations'
import { Sparkles, ArrowRight } from 'lucide-react'
import { TIDYCAL_URL } from '@/lib/constants'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-accent/5 py-16 md:py-24 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <Container size="lg">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <FadeIn direction="up" delay={0.1}>
            <Badge variant="primary" className="mb-6 inline-flex">
              <Sparkles className="mr-1.5 h-3.5 w-3.5" />
              KI-Beratung für Schweizer KMUs
            </Badge>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-neutral-charcoal sm:text-5xl md:text-6xl lg:text-7xl">
              Bringen Sie{' '}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                KI-Power
              </span>{' '}
              in Ihr Unternehmen
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="mb-8 text-lg text-neutral-slate sm:text-xl md:mb-10 md:text-2xl">
              Wir helfen Ihnen, künstliche Intelligenz erfolgreich zu
              integrieren – von Prompt-Engineering bis zur Anwendungsentwicklung.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                variant="primary"
                size="lg"
                onClick={() => window.open(TIDYCAL_URL, '_blank')}
                className="w-full sm:w-auto"
              >
                Discovery Call buchen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const element = document.getElementById('services')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="w-full sm:w-auto"
              >
                Services entdecken
              </Button>
            </div>
          </FadeIn>

          <ScrollReveal direction="up" delay={0.5} className="mt-12 md:mt-16">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-slate">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span>Kostenlose Erstberatung</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span>Massgeschneiderte Lösungen</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span>Praxisnahe Umsetzung</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}
