import { Button } from '@/components/ui'
import { Container } from '@/components/layout'
import { FadeIn, ScrollReveal } from '@/components/animations'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-accent/5 py-16 md:py-24 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <Container size="lg">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <FadeIn direction="up" delay={0.2}>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-neutral-charcoal sm:text-5xl md:text-6xl lg:text-7xl">
              Weniger Fleissarbeit. Mehr Zeit für das, was zählt.
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="mb-8 text-lg text-neutral-slate sm:text-xl md:mb-10 md:text-2xl">
              Ich automatisiere wiederkehrende Abläufe, baue massgeschneiderte Tools und bringe Struktur in Ihre Daten. Für Verbände und KMUs in der Schweiz.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/verbaende" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  Für Verbände
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/kmu" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full"
                >
                  Für KMUs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </FadeIn>

          <ScrollReveal direction="up" delay={0.5} className="mt-12 md:mt-16">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-slate">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span>20+ Jahre IT-Erfahrung</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span>Dipl. Systemtechnik-Ingenieur FH</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span>Langfristige Partnerschaften statt Einmal-Projekte</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}
