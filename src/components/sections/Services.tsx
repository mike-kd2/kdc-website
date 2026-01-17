import { Container, Section } from '@/components/layout'
import { ScrollReveal, StaggerContainer } from '@/components/animations'
import { ServiceCard } from './ServiceCard'
import { Wand2, Code2, Network, Terminal } from 'lucide-react'
import { motion } from 'framer-motion'
import { staggerItem } from '@/components/animations/variants'

const services = [
  {
    icon: Wand2,
    title: 'KI-Prompt-Engineering',
    description: 'Optimierung von KI-Prompts für Video- und Bildgenerierung. Maximieren Sie die Qualität Ihrer KI-generierten Inhalte.',
    tags: ['Video', 'Bilder', 'Prompts'],
  },
  {
    icon: Code2,
    title: 'Anwendungsentwicklung',
    description: 'Low/Mid-Level Entwicklung von KI-gestützten Anwendungen. Von Prototypen bis zur produktionsreifen Lösung.',
    tags: ['Web Apps', 'APIs', 'Integration'],
  },
  {
    icon: Network,
    title: 'KI-Integrationsberatung',
    description: 'Strategische Beratung zur Integration von KI-Lösungen in bestehende Systeme und Prozesse.',
    tags: ['Strategie', 'Integration', 'Beratung'],
  },
  {
    icon: Terminal,
    title: 'Software-Entwicklung',
    description: 'Junior-Level Software-Entwicklung und technische Unterstützung für Ihre Projekte.',
    tags: ['JavaScript', 'TypeScript', 'Python'],
  },
]

export function Services() {
  return (
    <Section spacing="xl" id="services">
      <Container size="lg">
        <ScrollReveal direction="up">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-neutral-charcoal sm:text-4xl md:text-5xl">
              Unsere Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-slate">
              Massgeschneiderte KI-Lösungen für Ihr Unternehmen – von der
              Beratung bis zur Umsetzung.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.15}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div key={index} variants={staggerItem}>
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </StaggerContainer>
      </Container>
    </Section>
  )
}
