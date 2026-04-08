import Image from 'next/image';
import Link from 'next/link';
import { SEOHead } from '@/components/SEOHead';
import { Section, Container } from '@/components/layout';
import { ScrollReveal } from '@/components/animations';
import { Button } from '@/components/ui/Button';

export default function UeberMich() {
  return (
    <>
      <SEOHead
        title="klauser designs | Über mich"
        description="Michael Klauser – Systemtechnik-Ingenieur FH, 20 Jahre IT-Erfahrung, selbstständig seit 2013."
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/ueber-mich`}
      />

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary to-primary-light text-white pt-24 py-20">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold sm:text-5xl">Michael Klauser</h1>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Content Section */}
      <Section className="bg-white">
        <Container>
          <ScrollReveal>
            {/* Two-column: photo left, text right */}
            <div className="mx-auto max-w-5xl grid grid-cols-1 gap-12 md:grid-cols-2 md:items-start">
              {/* Photo */}
              <div>
                <Image
                  src="/images/portrait_Michael_Klauser_square.jpg"
                  alt="Michael Klauser"
                  width={400}
                  height={400}
                  className="rounded-lg object-cover w-full"
                />
              </div>

              {/* Text */}
              <div className="space-y-6 text-neutral-slate">
                <p className="text-lg font-semibold text-neutral-charcoal">
                  Systemtechnik-Ingenieur FH. Diplomierter Coach. 20 Jahre IT-Erfahrung.
                </p>
                <p>
                  Ich war CIO bei einem Medizintechnik-Unternehmen im regulierten Umfeld
                  (FDA/CE), bevor ich mich 2013 selbstständig gemacht habe. Seitdem baue
                  ich für Verbände und KMUs in der Schweiz die Werkzeuge, die ihren Alltag
                  vereinfachen.
                </p>
                <p>
                  Was mich antreibt: Ich will Dinge bauen, die funktionieren und die
                  Menschen dahinter entlasten. Nicht beraten, nicht optimieren. Bauen.
                  Wenn ich nicht der Richtige bin, sage ich das auch.
                </p>
              </div>
            </div>

            {/* Meta info */}
            <div className="mx-auto mt-12 max-w-5xl">
              <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 rounded-lg bg-neutral-50 p-6">
                <div>
                  <dt className="text-sm font-semibold text-neutral-charcoal">Standort</dt>
                  <dd className="mt-1 text-neutral-slate">St. Gallen · Remote und vor Ort in der Deutschschweiz</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-neutral-charcoal">Sprachen</dt>
                  <dd className="mt-1 text-neutral-slate">Deutsch (Muttersprache), Englisch (fliessend)</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-neutral-charcoal">Selbstständig</dt>
                  <dd className="mt-1 text-neutral-slate">Seit 2013</dd>
                </div>
              </dl>
            </div>

            {/* CTA */}
            <div className="mx-auto mt-12 max-w-5xl flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link href="/kontakt">
                <Button variant="primary" size="lg">
                  Kontakt aufnehmen
                </Button>
              </Link>
              <Link href="/referenzen">
                <Button variant="outline" size="lg">
                  Referenzprojekte ansehen →
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </Container>
      </Section>
    </>
  );
}
