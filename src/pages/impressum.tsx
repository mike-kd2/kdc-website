import { SEOHead } from '@/components/SEOHead';
import { Section, Container } from '@/components/layout';
import { Badge } from '@/components/ui';
import { ScrollReveal } from '@/components/animations';
import { FileText, Mail, MapPin } from 'lucide-react';

export default function Impressum() {
  return (
    <>
      <SEOHead
        title="Impressum"
        description="Impressum und rechtliche Informationen von klauser designs&coaching."
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/impressum`}
        noindex={true}
      />

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary to-primary-light text-white pt-24 pb-16">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <FileText className="mx-auto mb-4 h-12 w-12" />
              <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Impressum</h1>
              <p className="text-lg text-white/90">Rechtliche Informationen</p>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Content Section */}
      <Section>
        <Container>
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <div className="space-y-8">
                {/* Angaben gemäss Art. 10 UWG */}
                <div className="rounded-lg bg-white p-8 shadow-sm">
                  <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-neutral-charcoal">
                    <FileText className="h-6 w-6 text-primary" />
                    Angaben gemäss Art. 10 UWG
                  </h2>
                  <div className="space-y-3 text-neutral-slate">
                    <p>
                      <strong className="text-neutral-charcoal">Firma:</strong>
                      <br />
                      klauser designs&coaching
                    </p>
                    <p>
                      <strong className="text-neutral-charcoal">
                        Inhaber:
                      </strong>
                      <br />
                      Michael Klauser
                    </p>
                    <p>
                      <strong className="text-neutral-charcoal">Adresse:</strong>
                      <br />
                      Notkerstrasse 14
                      <br />
                      9000 St. Gallen
                      <br />
                      Schweiz
                    </p>
                    <p>
                      <strong className="text-neutral-charcoal">UID:</strong>
                      <br />
                      CHE-351.216.842
                    </p>
                    <p>
                      <strong className="text-neutral-charcoal">MwSt-Nr:</strong>
                      <br />
                      CHE-351.216.842 MWST
                    </p>
                  </div>
                </div>

                {/* Kontakt */}
                <div className="rounded-lg bg-white p-8 shadow-sm">
                  <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-neutral-charcoal">
                    <Mail className="h-6 w-6 text-primary" />
                    Kontakt
                  </h2>
                  <div className="space-y-2 text-neutral-slate">
                    <p>
                      <strong className="text-neutral-charcoal">E-Mail:</strong>{' '}
                      <a
                        href="mailto:michael@klauserdesigns.ch"
                        className="text-primary hover:text-primary-light hover:underline"
                      >
                        michael@klauserdesigns.ch
                      </a>
                    </p>
                    <p>
                      <strong className="text-neutral-charcoal">Website:</strong>{' '}
                      <a
                        href="https://klauserdesigns.ch"
                        className="text-primary hover:text-primary-light hover:underline"
                      >
                        klauserdesigns.ch
                      </a>
                    </p>
                  </div>
                </div>

                {/* Haftungsausschluss */}
                <div className="rounded-lg bg-white p-8 shadow-sm">
                  <h2 className="mb-4 text-2xl font-bold text-neutral-charcoal">
                    Haftungsausschluss
                  </h2>
                  <div className="space-y-4 text-neutral-slate">
                    <div>
                      <h3 className="mb-2 font-semibold text-neutral-charcoal">
                        Haftung für Inhalte
                      </h3>
                      <p>
                        Die Inhalte unserer Seiten wurden mit grösster Sorgfalt
                        erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität
                        der Inhalte können wir jedoch keine Gewähr übernehmen.
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-neutral-charcoal">
                        Haftung für Links
                      </h3>
                      <p>
                        Unser Angebot enthält Links zu externen Webseiten Dritter, auf
                        deren Inhalte wir keinen Einfluss haben. Für die Inhalte der
                        verlinkten Seiten ist stets der jeweilige Anbieter oder
                        Betreiber der Seiten verantwortlich.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Urheberrecht */}
                <div className="rounded-lg bg-white p-8 shadow-sm">
                  <h2 className="mb-4 text-2xl font-bold text-neutral-charcoal">
                    Urheberrecht
                  </h2>
                  <p className="text-neutral-slate">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                    diesen Seiten unterliegen dem schweizerischen Urheberrecht. Die
                    Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                    Verwertung ausserhalb der Grenzen des Urheberrechtes bedürfen der
                    schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                </div>

                {/* Bildnachweis */}
                <div className="rounded-lg bg-white p-8 shadow-sm">
                  <h2 className="mb-4 text-2xl font-bold text-neutral-charcoal">
                    Bildnachweis
                  </h2>
                  <p className="text-neutral-slate">
                    Auf dieser Website verwendete Bilder und Grafiken sind
                    urheberrechtlich geschützt und stammen aus folgenden Quellen:
                  </p>
                  <ul className="mt-2 space-y-1 text-neutral-slate">
                    <li>• Icons: Lucide Icons (MIT Lizenz)</li>
                  </ul>
                </div>
              </div>

              <p className="mt-8 text-center text-sm text-neutral-slate">
                <strong>Stand:</strong> Januar 2026
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
