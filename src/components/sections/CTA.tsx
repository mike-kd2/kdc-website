import { Button } from '@/components/ui'
import { Container, Section } from '@/components/layout'
import { ScrollReveal } from '@/components/animations'
import { ArrowRight } from 'lucide-react'
import { TIDYCAL_URL, CONTACT_NAME, CONTACT_PHONE, CONTACT_EMAIL } from '@/lib/constants'
import { trackDiscoveryCallClick } from '@/lib/analytics'

interface CTAProps {
  title?: string
  text?: string
  buttonText?: string
  showContactDetails?: boolean
}

export function CTA({
  title = 'Haben Sie eine Aufgabe, die Sie schon lange nervt?',
  text = 'Erzählen Sie mir davon. In einem kurzen Gespräch finden wir heraus, ob und wie ich Ihnen helfen kann. Unverbindlich, direkt und ohne Verkaufsgespräch.',
  buttonText = 'Gespräch vereinbaren',
  showContactDetails = true,
}: CTAProps) {
  return (
    <Section spacing="xl" background="primary">
      <Container size="md">
        <ScrollReveal direction="up">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              {title}
            </h2>
            <p className="mb-8 text-lg text-white/90 md:text-xl">
              {text}
            </p>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                trackDiscoveryCallClick('cta_section')
                window.open(TIDYCAL_URL, '_blank')
              }}
              className="w-full sm:w-auto"
            >
              {buttonText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            {showContactDetails && (
              <div className="mt-8 text-white/80">
                <p className="font-medium text-white">{CONTACT_NAME}</p>
                <p className="mt-1">
                  <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="hover:text-white">
                    {CONTACT_PHONE}
                  </a>
                  <span className="mx-2">·</span>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">
                    {CONTACT_EMAIL}
                  </a>
                </p>
              </div>
            )}
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  )
}
