import { SEOHead } from '@/components/SEOHead';
import { Section, Container } from '@/components/layout';
import { Button } from '@/components/ui';
import { FadeIn } from '@/components/animations';
import { Home, Search, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <SEOHead
        title="Seite nicht gefunden"
        description="Die gesuchte Seite wurde nicht gefunden."
        noindex={true}
      />

      <Section className="min-h-[60vh] flex items-center">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              {/* 404 Number */}
              <div className="mb-8">
                <h1 className="text-9xl font-bold text-primary/20">404</h1>
              </div>

              {/* Message */}
              <h2 className="mb-4 text-3xl font-bold text-neutral-charcoal sm:text-4xl">
                Seite nicht gefunden
              </h2>
              <p className="mb-8 text-lg text-neutral-slate">
                Die Seite, die Sie suchen, existiert leider nicht. Möglicherweise wurde
                sie verschoben oder der Link ist veraltet.
              </p>

              {/* Actions */}
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link href="/">
                  <Button variant="primary" size="lg">
                    <Home className="mr-2 h-5 w-5" />
                    Zur Startseite
                  </Button>
                </Link>
                <Link href="/kontakt">
                  <Button variant="outline" size="lg">
                    <Search className="mr-2 h-5 w-5" />
                    Kontakt aufnehmen
                  </Button>
                </Link>
              </div>

              {/* Helpful Links */}
              <div className="mt-12 rounded-lg bg-neutral-off-white p-6">
                <h3 className="mb-4 font-semibold text-neutral-charcoal">
                  Vielleicht suchen Sie nach:
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/angebot"
                    className="text-primary hover:text-primary-light hover:underline"
                  >
                    Angebot
                  </Link>
                  <span className="text-neutral-slate">•</span>
                  <Link
                    href="/ueber-mich"
                    className="text-primary hover:text-primary-light hover:underline"
                  >
                    Über mich
                  </Link>
                  <span className="text-neutral-slate">•</span>
                  <Link
                    href="/referenzen"
                    className="text-primary hover:text-primary-light hover:underline"
                  >
                    Referenzen
                  </Link>
                  <span className="text-neutral-slate">•</span>
                  <Link
                    href="/kontakt"
                    className="text-primary hover:text-primary-light hover:underline"
                  >
                    Kontakt
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
