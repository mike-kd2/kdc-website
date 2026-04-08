import Image from 'next/image';
import Link from 'next/link';
import { SEOHead } from '@/components/SEOHead';
import { Container } from '@/components/layout';
import { ScrollReveal } from '@/components/animations';

const technologien = [
  { gruppe: 'Daten & Datenbanken', items: ['SQL Server & T-SQL (10+ Jahre)', 'SSIS, ETL-Pipelines', 'Data Warehouse Architektur', 'Azure SQL'] },
  { gruppe: 'Entwicklung', items: ['C#, .NET Framework / Core', 'Python (Pandas, Automatisierung)', 'VBA, ClosedXML', 'REST APIs, OData, JSON'] },
  { gruppe: 'Reporting & Integration', items: ['Power BI, DAX', 'Microsoft Dynamics 365', 'SAP-Anbindungen', 'Excel (komplex, VBA)'] },
];

export default function UeberMich() {
  return (
    <>
      <SEOHead
        title="klauser designs | Über mich"
        description="Michael Klauser, Dipl. Systemtechnik-Ingenieur FH und ausgebildeter Coach. Seit 2013 baue ich für Verbände und KMUs Lösungen, die funktionieren."
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/ueber-mich`}
      />

      {/* Intro — hell, persönlich, Portrait prominent */}
      <section className="bg-white pt-16 pb-12 md:pt-24 md:pb-16">
        <Container size="md">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_3fr] md:gap-16 md:items-center">

            {/* Portrait */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-32 h-32 rounded-full bg-accent/10 blur-2xl pointer-events-none" />
              <Image
                src="/images/portrait_Michael_Klauser_square.jpg"
                alt="Michael Klauser"
                width={480}
                height={480}
                className="relative rounded-2xl object-cover w-full shadow-xl"
                priority
              />
            </div>

            {/* Intro-Text */}
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
                Über mich
              </p>
              <h1 className="text-4xl font-bold text-neutral-charcoal sm:text-5xl mb-4">
                Hi, ich bin Michael.
              </h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Ingenieur', 'Entwickler', 'Berater'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-neutral-slate text-lg leading-relaxed mb-4">
                Ich baue Lösungen, die funktionieren, und arbeite mit Menschen,
                nicht nur mit Systemen.
              </p>
              <p className="text-neutral-slate leading-relaxed">
                Selbstständig seit 2013. Mein längster Kunde begleitet mich
                seit über 10 Jahren. Ich bin kein Agentur-Konstrukt, kein
                Unternehmensberater mit Folienschlacht. Ich sitze mit Ihnen
                am Tisch, verstehe was nervt, und baue dann das, was hilft.
              </p>

              {/* Eckdaten */}
              <dl className="mt-8 flex flex-col gap-2 text-sm border-t border-neutral-100 pt-6">
                <div className="flex gap-3">
                  <dt className="w-24 shrink-0 font-semibold text-neutral-charcoal">Standort</dt>
                  <dd className="text-neutral-slate">St. Gallen, Remote und vor Ort Deutschschweiz</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-24 shrink-0 font-semibold text-neutral-charcoal">Ausbildung</dt>
                  <dd className="text-neutral-slate">Dipl. Systemtechnik-Ingenieur FH, NTB Buchs</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-24 shrink-0 font-semibold text-neutral-charcoal">Sprachen</dt>
                  <dd className="text-neutral-slate">Deutsch (Muttersprache), Englisch (fliessend)</dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* Mein Weg */}
      <section className="bg-neutral-off-white py-16 md:py-20">
        <Container size="md">
          <ScrollReveal>
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-neutral-charcoal mb-8">Mein Weg</h2>
              <div className="space-y-5 text-neutral-slate leading-relaxed">
                <p>
                  Mein Weg begann mit einer Lehre als Fahrzeugelektroniker im Toggenburg.
                  Über ein Ingenieurstudium an der NTB Buchs landete ich in der
                  Softwareentwicklung, zuerst als Junior Engineer bei einem
                  Medizintechnik-Unternehmen, dann als Projektleiter, und schliesslich
                  als CIO und Mitglied der Geschäftsleitung.
                </p>
                <p>
                  In dieser Zeit habe ich gelernt, was es heisst, ein Entwicklungsteam
                  zu führen, IT-Infrastruktur zu verantworten und zwischen Technik und
                  Business zu übersetzen. Ich habe ERP-Systeme eingeführt, Data
                  Warehouses gebaut und gelernt, dass die beste technische Lösung
                  nichts wert ist, wenn die Menschen sie nicht nutzen.
                </p>
                <p>
                  2013 habe ich mich selbstständig gemacht. Seitdem unterstütze ich
                  Unternehmen und Verbände als externer Spezialist. Mein längster Kunde
                  begleitet mich seit über 10 Jahren.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Wie ich arbeite */}
      <section className="bg-white py-16 md:py-20">
        <Container size="md">
          <ScrollReveal>
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-neutral-charcoal mb-6">
                Wie ich arbeite.
              </h2>
              <div className="space-y-5 text-neutral-slate leading-relaxed">
                <p>
                  Ich bin ein pragmatischer Arbeiter. Ich höre zu, stelle Fragen,
                  und dann setze ich um. Kein monatelanges Konzeptieren, sondern
                  schnelle Ergebnisse, die wir gemeinsam verfeinern.
                </p>
                <p>
                  Meine Werkzeuge wähle ich nach dem, was Sinn macht, nicht nach
                  dem, was gerade trendy ist. Oft ist das SQL Server und C#, manchmal
                  Python, manchmal Power BI. Das Werkzeug ist Mittel zum Zweck,
                  nicht das Ziel.
                </p>
                <p>
                  Was mich antreibt: Wenn ein Kunde sagt, er verbringt jetzt zwei
                  Tage pro Monat weniger mit Excel. Oder wenn ein Verband seine
                  Prüfungsauswertung in einer Stunde statt in drei Tagen erledigt.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Technologien */}
      <section className="bg-neutral-off-white py-16 md:py-20">
        <Container size="md">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-neutral-charcoal mb-10">
              Werkzeuge, die ich einsetze
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {technologien.map(({ gruppe, items }) => (
                <div key={gruppe} className="rounded-xl bg-white border border-neutral-100 p-6 shadow-sm">
                  <h3 className="text-xs font-semibold text-primary uppercase tracking-wider mb-4">
                    {gruppe}
                  </h3>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-neutral-slate">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Darüber hinaus */}
      <section className="bg-white py-10">
        <Container size="md">
          <ScrollReveal>
            <div className="max-w-2xl border-l-2 border-primary/20 pl-6">
              <p className="text-sm font-semibold text-neutral-charcoal mb-1">Darüber hinaus</p>
              <p className="text-sm text-neutral-slate leading-relaxed">
                Neben KMUs und Verbänden unterstütze ich auch grössere Unternehmen
                projektbezogen als externer Spezialist — bei Datenmigrationen,
                Systemintegrationen und Business-Analyse.
                Sprechen Sie mich gerne an, wenn Sie das suchen.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-white">
        <Container size="md">
          <ScrollReveal>
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">Lassen Sie uns reden.</h2>
              <p className="text-white/70 text-lg mb-8">
                Ob Sie ein konkretes Projekt im Kopf haben oder einfach herausfinden
                wollen, ob wir zusammenpassen: Ich freue mich auf den Austausch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center rounded-md bg-white px-6 py-3 text-lg font-medium text-primary transition-colors hover:bg-white/90"
                >
                  Gespräch vereinbaren
                </Link>
                <Link
                  href="/referenzen"
                  className="inline-flex items-center text-lg font-medium text-white/70 hover:text-white transition-colors"
                >
                  Referenzprojekte ansehen →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
