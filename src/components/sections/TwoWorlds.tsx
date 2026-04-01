import Link from 'next/link'
import { Container, Section } from '@/components/layout'
import { ScrollReveal } from '@/components/animations'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui'
import { Users, Building2, ArrowRight } from 'lucide-react'

const worlds = [
  {
    icon: Users,
    title: 'Für Verbände',
    description:
      'Prüfungsabwicklung, Mitgliederverwaltung, Zertifizierungsprozesse: Verbände haben spezifische Abläufe, die oft seit Jahren manuell laufen. Ich kenne diese Welt und baue Lösungen, die genau dorthin passen.',
    href: '/verbaende',
  },
  {
    icon: Building2,
    title: 'Für KMUs',
    description:
      'Reporting, Systemintegration, Datenflüsse: KMUs brauchen pragmatische Lösungen, die funktionieren und bezahlbar sind. Kein Overengineering, sondern genau das Richtige.',
    href: '/kmu',
  },
]

export function TwoWorlds() {
  return (
    <Section spacing="xl" id="two-worlds">
      <Container size="lg">
        <ScrollReveal direction="up">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-neutral-charcoal sm:text-4xl md:text-5xl">
              Ob Verband oder KMU: Ich spreche Ihre Sprache.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {worlds.map((world, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.15}>
              <Card className="flex h-full flex-col">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-deep-teal/10">
                    <world.icon className="h-6 w-6 text-primary-deep-teal" />
                  </div>
                  <CardTitle>{world.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <p className="mb-6 flex-1 text-neutral-slate">
                    {world.description}
                  </p>
                  <Link
                    href={world.href}
                    className="inline-flex items-center gap-1 font-medium text-primary-bright-teal transition-colors hover:text-primary-deep-teal"
                  >
                    Mehr erfahren
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
