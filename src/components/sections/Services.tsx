import { Container, Section } from '@/components/layout'
import { ScrollReveal, StaggerContainer } from '@/components/animations'
import { ServiceCard } from './ServiceCard'
import { GraduationCap, Code2, Network, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { staggerItem } from '@/components/animations/variants'

const services = [
  {
    icon: Network,
    title: 'KI-Strategie & Integration',
    description: 'Ihr Einstieg in die KI-Welt: Potenzialanalyse, Tool-Auswahl und Implementierungs-Roadmap für Ihr KMU.',
    tags: ['Strategie', 'Roadmap', 'Beratung'],
  },
  {
    icon: Zap,
    title: 'KI-gestützte Prozessautomatisierung',
    description: 'Wir automatisieren repetitive Aufgaben und verbinden Ihre Tools – für messbare Effizienzgewinne.',
    tags: ['Automation', 'Workflows', 'Effizienz'],
  },
  {
    icon: Code2,
    title: 'Anwendungsentwicklung',
    description: 'Massgeschneiderte Webanwendungen und Tools, wenn Standard-Lösungen nicht ausreichen.',
    tags: ['Web Apps', 'APIs', 'Integration'],
  },
  {
    icon: GraduationCap,
    title: 'KI-Schulungen & Workshops',
    description: 'Praxisnahe Trainings für Ihr Team: Prompt-Engineering, KI-Tools und Best Practices.',
    tags: ['Training', 'Prompts', 'Team'],
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
