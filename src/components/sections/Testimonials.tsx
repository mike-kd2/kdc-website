import { Card, CardContent } from '@/components/ui'
import { Container, Section } from '@/components/layout'
import { ScrollReveal, StaggerContainer } from '@/components/animations'
import { Quote } from 'lucide-react'

interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Dr. Anna Müller',
    role: 'CEO',
    company: 'TechStart AG',
    content:
      'Die KI-Integration hat unsere Prozesse revolutioniert. Die Beratung war präzise und praxisnah.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Thomas Weber',
    role: 'Geschäftsführer',
    company: 'Weber Consulting GmbH',
    content:
      'Professionelle Umsetzung und exzellente Kommunikation. Wir konnten unsere Produktivität um 40% steigern.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Sarah Schmidt',
    role: 'Marketing Director',
    company: 'CreativeFlow',
    content:
      'Die Prompt-Engineering Schulung hat uns geholfen, das volle Potenzial von KI-Tools auszuschöpfen.',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <Section className="bg-neutral-off-white">
      <Container size="lg">
        <div className="text-center">
          <ScrollReveal>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-neutral-charcoal sm:text-4xl md:text-5xl">
              Was unsere Kunden sagen
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-neutral-slate md:mb-16 md:text-xl">
              Erfolgsgeschichten von Schweizer KMUs, die KI erfolgreich integriert haben
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={0.1 * index}>
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <Quote className="mb-4 h-8 w-8 text-primary/20" />

                  <p className="mb-6 text-base leading-relaxed text-neutral-charcoal">
                    {testimonial.content}
                  </p>

                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 fill-accent text-accent"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <div className="border-t border-neutral-light-gray pt-4">
                    <div className="font-semibold text-neutral-charcoal">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-neutral-slate">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}
