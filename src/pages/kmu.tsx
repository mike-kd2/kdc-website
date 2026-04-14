import { SEOHead } from '@/components/SEOHead'
import { StructuredData } from '@/components/seo/StructuredData'
import { Section, Container } from '@/components/layout'
import { LeistungsBlock } from '@/components/ui/LeistungsBlock'
import Link from 'next/link'

export default function KMU() {
  return (
    <>
      <SEOHead
        title="klauser designs | Für KMUs"
        description="Datenflüsse automatisieren, Reporting und Systemmigrationen für Schweizer KMUs."
      />
      <StructuredData
        type="service"
        pageTitle="klauser designs | Für KMUs"
        pageDescription="Datenflüsse automatisieren, Reporting und Systemmigrationen für Schweizer KMUs."
        pagePath="/kmu"
      />

      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden py-16 text-white md:py-24">
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-primary-light opacity-40 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 left-1/3 w-48 h-48 rounded-full bg-accent opacity-15 blur-2xl pointer-events-none" />

        <Container size="md">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
                Für KMUs
              </p>
              <h1 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl max-w-2xl">
                Ihre Systeme reden nicht miteinander? Ich baue die Brücke.
              </h1>
              <p className="text-lg text-white/75 max-w-lg">
                Ihre Daten stecken in fünf Systemen, Ihr Reporting kostet Tage,
                und bei jedem Systemwechsel hofft jemand, dass nichts verloren
                geht. Ich baue die Verbindungen und Werkzeuge, die Ihnen das
                manuelle Hin und Her abnehmen.
              </p>
            </div>

            {/* Visual: Typische Probleme */}
            <div className="hidden lg:flex flex-col gap-3">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Kommt Ihnen bekannt vor?</p>
              {[
                'Reporting braucht Tage statt Minuten',
                'Daten müssen manuell zwischen Systemen kopiert werden',
                'Beim Systemwechsel hofft jemand, dass nichts verloren geht',
                'Kein einheitliches Bild über alle Daten',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-md bg-white/[0.06] border border-white/10 px-4 py-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0" />
                  <span className="text-white/60 text-sm">{item}</span>
                </div>
              ))}
              <div className="mt-2 text-accent text-sm font-semibold">
                ↓ Genau dafür bin ich da.
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Leistungsblöcke Section */}
      <Section spacing="lg">
        <Container size="md">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Leistungen
          </p>
          <h2 className="mb-8 text-3xl font-bold text-neutral-charcoal sm:text-4xl">
            Was ich baue
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <LeistungsBlock
              nummer={1}
              titel="Datenflüsse automatisieren"
              text="System-zu-System-Integration: Import, Export, Synchronisation. Automatisch statt per Copy-Paste."
            />
            <LeistungsBlock
              nummer={2}
              titel="Reporting & Dashboards"
              text="Von Excel zu Power BI: Dashboards, die sich selbst aktualisieren und Entscheidungsgrundlagen liefern."
            />
            <LeistungsBlock
              nummer={3}
              titel="Systemwechsel & Datenmigrationen"
              text="ERP/CRM-Migrationen mit 100%-Validierung über die gesamte Datenbasis. Nicht Stichproben. Alles."
            />
            <LeistungsBlock
              nummer={4}
              titel="Massgeschneiderte Software"
              text="Wenn Standardlösungen nicht passen: Backend-Systeme, Middleware, Integrationen. Gebaut für Ihren konkreten Ablauf."
            />
          </div>
        </Container>
      </Section>

      {/* Referenz-Hinweis */}
      <section className="bg-white py-16 border-t border-neutral-light-gray">
        <Container size="md">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Aus der Praxis
          </p>
          <h2 className="text-2xl font-bold text-neutral-charcoal mb-8">
            Zwei Beispiele, die das zeigen.
          </h2>
          <div className="flex flex-col gap-4">
            {/* Helion */}
            <div className="rounded-xl bg-neutral-off-white border border-neutral-light-gray overflow-hidden shadow-card">
              <div className="px-8 pt-7 pb-5 border-b border-neutral-light-gray">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="font-bold text-neutral-charcoal text-lg">Helion Energy AG</span>
                  <span className="rounded-full bg-primary/[0.08] text-primary px-3 py-0.5 text-xs font-medium">
                    Energieunternehmen
                  </span>
                  <span className="rounded-full bg-accent/10 text-accent px-3 py-0.5 text-xs font-semibold">
                    2013 – 2025
                  </span>
                </div>
                <p className="text-primary font-semibold text-lg leading-snug border-l-4 border-accent pl-4">
                  Reportingzeit von Tagen auf Minuten reduziert. Alle Geschäftsbereiche auf demselben Datenstand.
                </p>
              </div>
              <div className="px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-neutral-slate text-sm">
                  Data Warehouse, Azure-Middleware, ERP-Migration — 10 Jahre aufgebaut und betrieben.
                </p>
                <Link
                  href="/referenzen#helion-dw"
                  className="text-primary font-semibold text-sm hover:underline whitespace-nowrap flex-shrink-0"
                >
                  Zum Projekt →
                </Link>
              </div>
            </div>

            {/* SBKH */}
            <div className="rounded-xl bg-neutral-off-white border border-neutral-light-gray overflow-hidden shadow-card">
              <div className="px-8 pt-7 pb-5 border-b border-neutral-light-gray">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="font-bold text-neutral-charcoal text-lg">SBKH GmbH</span>
                  <span className="rounded-full bg-primary/[0.08] text-primary px-3 py-0.5 text-xs font-medium">
                    E-Commerce / Preisvergleich
                  </span>
                  <span className="rounded-full bg-accent/10 text-accent px-3 py-0.5 text-xs font-semibold">
                    2019 – 2020
                  </span>
                </div>
                <p className="text-primary font-semibold text-lg leading-snug border-l-4 border-accent pl-4">
                  Null manueller Aufwand. Sortiment wächst ohne zusätzliches Personal.
                </p>
              </div>
              <div className="px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-neutral-slate text-sm">
                  Vollautomatisierte Pipeline: tägliche Abholung, Transformation und Einspielung aus mehreren Quellen.
                </p>
                <Link
                  href="/referenzen#sbkh"
                  className="text-primary font-semibold text-sm hover:underline whitespace-nowrap flex-shrink-0"
                >
                  Zum Projekt →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <Container size="md">
          <p className="mb-2 text-2xl font-semibold sm:text-3xl">
            Welcher Ablauf frisst bei Ihnen am meisten Zeit?
          </p>
          <p className="text-white/60 mb-8 max-w-md">
            Im Prozess-Check schauen wir uns gemeinsam an, was sich als erstes angehen lässt.
          </p>
          <Link
            href="/angebot#prozess-check"
            className="inline-flex items-center rounded-md bg-white px-6 py-3 text-lg font-medium text-primary transition-colors hover:bg-white/90"
          >
            Prozess-Check anfragen
          </Link>
        </Container>
      </section>
    </>
  )
}
