import Link from 'next/link'
import { Button } from '@/components/ui'
import { NAVIGATION_ITEMS, CONTACT_EMAIL, CONTACT_PHONE, TIDYCAL_URL } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-charcoal text-neutral-off-white" role="contentinfo" aria-label="Fusszeile">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-block text-xl font-bold text-white hover:text-accent transition-colors mb-4 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-charcoal"
            >
              klauser designs
            </Link>
            <p className="text-neutral-light-gray max-w-md mb-6">
              Automatisierung, massgeschneiderte Tools und Datenlösungen für Verbände und KMUs in der Schweiz.
            </p>
            <Button
              variant="secondary"
              size="md"
              onClick={() => window.open(TIDYCAL_URL, '_blank')}
            >
              Gespräch vereinbaren
            </Button>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-neutral-light-gray hover:text-white transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-charcoal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/kontakt"
                  className="text-neutral-light-gray hover:text-white transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-charcoal"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-neutral-light-gray hover:text-white transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-charcoal"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
                  className="text-neutral-light-gray hover:text-white transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-charcoal"
                >
                  {CONTACT_PHONE}
                </a>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-neutral-light-gray hover:text-white transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-charcoal"
                >
                  Kontaktformular
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-slate/30">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-neutral-light-gray">
              © {currentYear} klauser designs & coaching. Alle Rechte vorbehalten.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link
                href="/impressum"
                className="text-neutral-light-gray hover:text-white transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-charcoal"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="text-neutral-light-gray hover:text-white transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-charcoal"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
