import { Button } from '@/components/ui'
import { Container, Section } from '@/components/layout'
import { ScrollReveal } from '@/components/animations'
import { ArrowRight } from 'lucide-react'
import { TIDYCAL_URL } from '@/lib/constants'
import { trackDiscoveryCallClick } from '@/lib/analytics'

export function CTA() {
  return (
    <Section spacing="xl" background="primary">
      <Container size="md">
        <ScrollReveal direction="up">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Bereit, KI in Ihrem Unternehmen einzusetzen?
            </h2>
            <p className="mb-8 text-lg text-white/90 md:text-xl">
              Buchen Sie jetzt Ihren kostenlosen Discovery Call und starten Sie
              Ihre KI-Reise mit uns.
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
              Discovery Call buchen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  )
}
