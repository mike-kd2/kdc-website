import { Container, Section } from '@/components/layout'
import { ScrollReveal } from '@/components/animations'

export function Problem() {
  return (
    <Section spacing="xl" background="gray">
      <Container size="md">
        <ScrollReveal direction="up">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">
              Kennen Sie das?
            </h2>
            <p className="mb-4 text-lg text-muted-foreground md:text-xl">
              Jeden Monat dieselben Excel-Listen von Hand zusammenführen. Daten
              aus einem System ins andere kopieren. Reports aufbereiten, die
              eigentlich automatisch laufen könnten. Prüfungsunterlagen
              zusammenstellen, die jedes Mal gleich aussehen und trotzdem
              Stunden dauern.
            </p>
            <p className="mb-6 text-lg text-muted-foreground md:text-xl">
              Diese Aufgaben fressen Zeit, sind fehleranfällig und halten Sie
              davon ab, sich um das zu kümmern, was wirklich zählt.
            </p>
            <p className="text-lg font-semibold text-primary md:text-xl">
              Genau da komme ich ins Spiel.
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  )
}
