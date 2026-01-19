import { Container, Section } from '@/components/layout'
import { ScrollReveal, StaggerContainer } from '@/components/animations'
import { ServiceCard } from './ServiceCard'
import { Wand2, Code2, Network, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { staggerItem } from '@/components/animations/variants'

const services = [
  {
    icon: Network,
    title: 'KI-Integrationsberatung für KMUs',
    description: 'Strategische Beratung zur Integration von KI-Lösungen in bestehende Systeme und Prozesse. Wir identifizieren Quick Wins und langfristige KI-Potenziale.',
    tags: ['Strategie', 'Integration', 'Beratung'],
  },
  {
    icon: Zap,
    title: 'KI-gestützte Prozessautomatisierung',
    description: 'Automatisierung von Geschäftsprozessen mit KI-Tools. Wir bringen Effizienz in Ihre täglichen Abläufe.',
    tags: ['Automation', 'Effizienz', 'ROI'],
  },
  {
    icon: Code2,
    title: 'Anwendungsentwicklung',
    description: 'Entwicklung von massgeschneiderten Webanwendungen und Tools. Von MVPs bis zu vollständigen Geschäftsanwendungen.',
    tags: ['Web Apps', 'APIs', 'Integration'],
  },
  {
    icon: Wand2,
    title: 'KI-Strategie & Prompt-Engineering',
    description: 'Optimierung von KI-Prompts und Entwicklung von KI-Strategien. Wir maximieren die Qualität Ihrer KI-generierten Inhalte.',
    tags: ['Video', 'Bilder', 'Prompts'],
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
