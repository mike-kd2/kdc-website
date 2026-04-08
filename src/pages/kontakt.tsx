import { SEOHead } from '@/components/SEOHead';
import { Section, Container } from '@/components/layout';
import { ScrollReveal } from '@/components/animations';
import { TidyCalEmbed } from '@/components/integrations/TidyCalEmbed';
import { ContactForm } from '@/components/forms/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

const PROZESS_CHECK_URL = 'https://tidycal.com/klauserdesignscoaching/prozess-check';

export default function Kontakt() {
  return (
    <>
      <SEOHead
        title="klauser designs | Kontakt"
        description="Schreiben Sie Michael Klauser oder buchen Sie direkt einen kostenlosen Prozess-Check."
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/kontakt`}
      />

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary to-primary-light text-white pt-24 py-20">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Lassen Sie uns reden.</h1>
              <p className="text-lg text-white/90">
                Schreiben Sie mir, rufen Sie an oder buchen Sie direkt einen
                kostenlosen Prozess-Check.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Contact Info + TidyCal Section */}
      <Section className="bg-white py-16">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-5xl grid grid-cols-1 gap-12 md:grid-cols-2 md:items-start">
              {/* Left: Contact details */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-neutral-charcoal">Kontaktdaten</h2>
                <ul className="space-y-4 text-neutral-slate">
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>
                      <a
                        href="mailto:michael@klauserdesigns.ch"
                        className="text-primary hover:text-primary-light hover:underline"
                      >
                        michael@klauserdesigns.ch
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>
                      <a
                        href="tel:+41796915598"
                        className="text-primary hover:text-primary-light hover:underline"
                      >
                        +41 79 691 55 98
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>Notkerstrasse 14, 9000 St. Gallen</span>
                  </li>
                </ul>
              </div>

              {/* Right: TidyCal embed */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-neutral-charcoal">Direkt buchen</h2>
                <TidyCalEmbed url={PROZESS_CHECK_URL} height={700} />
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Contact Form Section */}
      <Section className="bg-neutral-50 py-16">
        <Container size="md">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl">
              <h2 className="mb-2 text-2xl font-bold text-neutral-charcoal">Oder schreiben Sie mir</h2>
              <p className="mb-8 text-neutral-slate">
                Ich melde mich innerhalb von 24 Stunden bei Ihnen.
              </p>
              <ContactForm />
            </div>
          </ScrollReveal>
        </Container>
      </Section>
    </>
  );
}
