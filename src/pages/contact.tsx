import { SEOHead } from '@/components/SEOHead';
import { Section, Container } from '@/components/layout';
import { Badge } from '@/components/ui';
import { ContactForm } from '@/components/forms';
import { ScrollReveal, FadeIn } from '@/components/animations';
import { Mail, Phone, MapPin, Clock, Calendar } from 'lucide-react';
import Link from 'next/link';

const contactInfo = [
  {
    icon: Mail,
    label: 'E-Mail',
    value: 'michael@klauserdesigns.ch',
    href: 'mailto:michael@klauserdesigns.ch',
  },
  {
    icon: MapPin,
    label: 'Standort',
    value: 'Schweiz',
    href: null,
  },
  {
    icon: Clock,
    label: 'Reaktionszeit',
    value: 'Innerhalb von 24 Stunden',
    href: null,
  },
];

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Kontakt"
        description="Kontaktieren Sie klauser designs&coaching. Buchen Sie einen Discovery Call oder senden Sie uns eine Nachricht. Wir helfen Ihnen gerne bei Ihrer KI-Integration."
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/contact`}
      />

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary to-primary-light text-white pt-24 pb-16">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <Badge variant="accent" className="mb-4">
                Kontakt
              </Badge>
              <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
                Lassen Sie uns sprechen
              </h1>
              <p className="text-xl text-white/90 sm:text-2xl">
                Haben Sie Fragen zu KI-Integration? Möchten Sie ein Projekt besprechen?
                Ich freue mich auf Ihre Nachricht.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Main Content */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column - Contact Form */}
            <ScrollReveal>
              <div>
                <h2 className="mb-4 text-2xl font-bold text-neutral-charcoal sm:text-3xl">
                  Schreiben Sie mir
                </h2>
                <p className="mb-8 text-lg text-neutral-slate">
                  Füllen Sie das Formular aus und ich melde mich innerhalb von 24
                  Stunden bei Ihnen.
                </p>
                <ContactForm />
              </div>
            </ScrollReveal>

            {/* Right Column - Contact Info & Discovery Call */}
            <div className="space-y-8">
              {/* Contact Information */}
              <FadeIn delay={0.2}>
                <div className="rounded-2xl bg-gradient-to-br from-neutral-off-white to-white p-8">
                  <h3 className="mb-6 text-xl font-bold text-neutral-charcoal">
                    Kontaktinformationen
                  </h3>
                  <div className="space-y-4">
                    {contactInfo.map((info) => {
                      const Icon = info.icon;
                      const content = (
                        <div className="flex items-start gap-4">
                          <div className="rounded-lg bg-primary/10 p-3">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-neutral-slate">
                              {info.label}
                            </p>
                            <p className="text-neutral-charcoal">{info.value}</p>
                          </div>
                        </div>
                      );

                      return info.href ? (
                        <a
                          key={info.label}
                          href={info.href}
                          className="block transition-opacity hover:opacity-75"
                        >
                          {content}
                        </a>
                      ) : (
                        <div key={info.label}>{content}</div>
                      );
                    })}
                  </div>
                </div>
              </FadeIn>

              {/* Discovery Call CTA */}
              <FadeIn delay={0.4}>
                <div className="rounded-2xl bg-gradient-to-br from-accent to-accent-dark p-8 text-white">
                  <Calendar className="mb-4 h-10 w-10" />
                  <h3 className="mb-2 text-2xl font-bold">
                    Lieber direkt sprechen?
                  </h3>
                  <p className="mb-6 text-white/90">
                    Buchen Sie einen kostenlosen 30-minütigen Discovery Call und wir
                    besprechen Ihre KI-Potenziale.
                  </p>
                  <a
                    href={process.env.NEXT_PUBLIC_TIDYCAL_URL || 'https://tidycal.com/klauserdesignscoaching/discovery-call'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-neutral-charcoal transition-transform hover:scale-105"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Discovery Call buchen
                  </a>
                </div>
              </FadeIn>

              {/* Business Audit CTA */}
              <FadeIn delay={0.6}>
                <div className="rounded-2xl border-2 border-primary bg-white p-8">
                  <h3 className="mb-2 text-xl font-bold text-neutral-charcoal">
                    Kostenlose Business-Analyse
                  </h3>
                  <p className="mb-4 text-neutral-slate">
                    Erhalten Sie eine detaillierte Einschätzung Ihrer KI-Potenziale –
                    kostenlos und unverbindlich.
                  </p>
                  <Link
                    href="/#business-audit"
                    className="inline-flex items-center font-semibold text-primary hover:text-primary-light"
                  >
                    Zur Business-Analyse
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-gradient-to-br from-neutral-off-white to-white">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-center text-3xl font-bold text-neutral-charcoal">
                Häufige Fragen
              </h2>
              <div className="space-y-6">
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-2 font-semibold text-neutral-charcoal">
                    Wie schnell erhalte ich eine Antwort?
                  </h3>
                  <p className="text-neutral-slate">
                    Ich antworte in der Regel innerhalb von 24 Stunden auf alle
                    Anfragen. Bei dringenden Anliegen können Sie mich auch direkt per
                    E-Mail kontaktieren.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-2 font-semibold text-neutral-charcoal">
                    Was kostet ein Erstgespräch?
                  </h3>
                  <p className="text-neutral-slate">
                    Das erste Discovery Call (30 Minuten) ist komplett kostenlos und
                    unverbindlich. So können wir in Ruhe besprechen, ob eine
                    Zusammenarbeit für Sie Sinn macht.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-2 font-semibold text-neutral-charcoal">
                    Arbeiten Sie auch remote?
                  </h3>
                  <p className="text-neutral-slate">
                    Ja, die meisten meiner Projekte laufen remote ab. Für Schweizer
                    Kunden bin ich auch gerne für persönliche Meetings vor Ort
                    verfügbar.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>
    </>
  );
}
