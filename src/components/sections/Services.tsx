import { Container, Section } from '@/components/layout'
import { ScrollReveal, StaggerContainer } from '@/components/animations'
import { ServiceCard } from './ServiceCard'
import { Workflow, Wrench, Database, RefreshCw } from 'lucide-react'
import { motion } from 'framer-motion'
import { staggerItem } from '@/components/animations/variants'

const services = [
  {
    icon: Workflow,
    title: 'Prozesse automatisieren',
    description: 'Wiederkehrende Abläufe, die heute manuell laufen, mache ich automatisch. Import, Export, Validierung, Benachrichtigungen. Sie definieren die Regeln, die Software erledigt den Rest.',
  },
  {
    icon: Wrench,
    title: 'Massgeschneiderte Tools entwickeln',
    description: 'Wenn Excel an seine Grenzen stösst und Standard-Software nicht passt, baue ich Ihnen genau das Werkzeug, das Sie brauchen. Keine aufgeblähte Lösung, sondern exakt das, was funktioniert.',
  },
  {
    icon: Database,
    title: 'Daten nutzbar machen',
    description: 'Sie haben Daten in verschiedenen Systemen, aber keinen Überblick? Ich bringe Struktur rein, verbinde Systeme und schaffe Dashboards, die Ihnen echte Entscheidungsgrundlagen liefern.',
  },
  {
    icon: RefreshCw,
    title: 'Systeme wechseln, Daten mitnehmen',
    description: 'Sie wechseln Ihr ERP, Ihre Mitgliederverwaltung oder ein anderes System? Ich sorge dafür, dass Ihre Daten sauber, vollständig und validiert im neuen System ankommen.',
  },
]

export function Services() {
  return (
    <Section spacing="xl" id="services">
      <Container size="lg">
        <ScrollReveal direction="up">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-neutral-charcoal sm:text-4xl md:text-5xl">
              Ich baue Lösungen, die Ihnen den Rücken freihalten.
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.15}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
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
