import { SEOHead } from '@/components/SEOHead';
import { StructuredData } from '@/components/seo/StructuredData';
import { Section, Container } from '@/components/layout';
import { ContactForm } from '@/components/forms';
import { ScrollReveal, FadeIn } from '@/components/animations';
import { Mail, Phone, MapPin, Globe, Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Kontakt — Gespräch vereinbaren | klauser designs&coaching"
        description="Ob konkretes Projekt oder erste Frage: Schreiben Sie mir oder rufen Sie an. Ich melde mich innerhalb von 24 Stunden. Michael Klauser, St. Gallen."
      />
      <StructuredData
        type="website"
        pageTitle="Kontakt — Gespräch vereinbaren | klauser designs&coaching"
        pageDescription="Ob konkretes Projekt oder erste Frage: Schreiben Sie mir oder rufen Sie an. Ich melde mich innerhalb von 24 Stunden. Michael Klauser, St. Gallen."
        pagePath="/contact"
      />

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary to-primary-light text-white pt-24 pb-16">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
                Lassen Sie uns reden.
              </h1>
              <p className="text-xl text-white/90 sm:text-2xl">
                Ob konkretes Projekt oder erste Frage: Schreiben Sie mir oder
                rufen Sie an. Ich melde mich innerhalb von 24 Stunden.
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
                <ContactForm />
              </div>
            </ScrollReveal>

            {/* Right Column - Contact Info & Gespräch vereinbaren */}
            <div className="space-y-8">
              {/* Contact Information */}
              <FadeIn delay={0.2}>
                <div className="rounded-2xl bg-gradient-to-br from-neutral-off-white to-white p-8">
                  <h3 className="mb-6 text-xl font-bold text-neutral-charcoal">
                    Kontaktinformationen
                  </h3>
                  <div className="space-y-5">
                    <div>
                      <p className="text-lg font-semibold text-neutral-charcoal">
                        Michael Klauser
                      </p>
                      <p className="text-neutral-slate">
                        klauser designs&amp;coaching
                      </p>
                    </div>

                    <a
                      href="tel:+41796915598"
                      className="flex items-start gap-4 transition-opacity hover:opacity-75"
                    >
                      <div className="rounded-lg bg-primary/10 p-3">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-neutral-slate">
                          Telefon
                        </p>
                        <p className="text-neutral-charcoal">
                          +41 79 691 55 98
                        </p>
                      </div>
                    </a>

                    <a
                      href="mailto:michael@klauserdesigns.ch"
                      className="flex items-start gap-4 transition-opacity hover:opacity-75"
                    >
                      <div className="rounded-lg bg-primary/10 p-3">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-neutral-slate">
                          E-Mail
                        </p>
                        <p className="text-neutral-charcoal">
                          michael@klauserdesigns.ch
                        </p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-primary/10 p-3">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-neutral-slate">
                          Adresse
                        </p>
                        <p className="text-neutral-charcoal">
                          Notkerstrasse 14, 9000 St. Gallen
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-primary/10 p-3">
                        <Globe className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-neutral-slate">
                          Arbeitsweise
                        </p>
                        <p className="text-neutral-charcoal">
                          Remote und vor Ort in der Deutschschweiz
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Gespräch vereinbaren CTA */}
              <FadeIn delay={0.4}>
                <div className="rounded-2xl bg-gradient-to-br from-accent to-accent-dark p-8 text-white">
                  <Calendar className="mb-4 h-10 w-10" />
                  <h3 className="mb-2 text-2xl font-bold">
                    Lieber direkt sprechen?
                  </h3>
                  <p className="mb-6 text-white/90">
                    Buchen Sie ein kostenloses, unverbindliches Gespräch und wir
                    besprechen Ihr Anliegen persönlich.
                  </p>
                  <a
                    href={
                      process.env.NEXT_PUBLIC_TIDYCAL_URL ||
                      'https://tidycal.com/klauserdesignscoaching/discovery-call'
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-neutral-charcoal transition-transform hover:scale-105"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Gespräch vereinbaren
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>

      {/* Hinweis Section */}
      <Section>
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-lg text-neutral-slate italic">
                Kein Verkaufsgespräch, kein Potenzialanalyse-Funnel. Einfach ein
                ehrliches Gespräch darüber, ob ich der Richtige für Ihr Anliegen
                bin. Falls nicht, sage ich Ihnen das auch.
              </p>
            </div>
          </ScrollReveal>
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
                    In der Regel innerhalb von 24 Stunden.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-2 font-semibold text-neutral-charcoal">
                    Was kostet ein Erstgespräch?
                  </h3>
                  <p className="text-neutral-slate">
                    Nichts. Das erste Gespräch ist unverbindlich und kostenlos.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <h3 className="mb-2 font-semibold text-neutral-charcoal">
                    Arbeiten Sie auch remote?
                  </h3>
                  <p className="text-neutral-slate">
                    Ja. Ich arbeite remote und vor Ort in der Deutschschweiz, je
                    nachdem, was für Sie am besten passt.
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
