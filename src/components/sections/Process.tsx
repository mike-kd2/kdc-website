import { Container, Section } from '@/components/layout'
import { ScrollReveal } from '@/components/animations'
import { CheckCircle } from 'lucide-react'
import { PROCESS_STEPS } from '@/lib/constants'

export function Process() {
  return (
    <Section spacing="xl" background="gray">
      <Container size="lg">
        <ScrollReveal direction="up">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-neutral-charcoal sm:text-4xl md:text-5xl">
              Unser Prozess
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-slate">
              In vier klaren Schritten zu Ihrer erfolgreichen KI-Integration
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-primary/20 md:block md:left-1/2" />

          <div className="space-y-8 md:space-y-12">
            {PROCESS_STEPS.map((step, index) => (
              <ScrollReveal
                key={step.id}
                direction={index % 2 === 0 ? 'right' : 'left'}
                delay={index * 0.1}
              >
                <div
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } items-center gap-6 md:gap-8`}
                >
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-primary shadow-lg">
                      <span className="text-2xl font-bold text-white">
                        {step.id}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 rounded-lg border border-neutral-light-gray bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:max-w-md ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    <h3 className="mb-2 flex items-center gap-2 text-xl font-semibold text-neutral-charcoal md:justify-start">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      {step.title}
                    </h3>
                    <p className="text-neutral-slate">{step.description}</p>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden flex-1 md:block md:max-w-md" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
