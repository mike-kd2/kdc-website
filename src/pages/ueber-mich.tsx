import Image from 'next/image';
import Link from 'next/link';
import { SEOHead } from '@/components/SEOHead';
import { Container } from '@/components/layout';
import { ScrollReveal } from '@/components/animations';

const stats = [
  { wert: '20+', label: 'Jahre IT-Erfahrung' },
  { wert: '2013', label: 'Selbstständig seit' },
  { wert: '10 J.', label: 'Längste Kundenbeziehung' },
  { wert: '100%', label: 'Direkte Projektumsetzung' },
];

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

      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden py-16 text-white md:py-24">
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
          <div className="relative">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              Über mich
            </p>
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl max-w-3xl mb-6">
              Hi, ich bin Michael.
            </h1>
            <p className="text-lg text-white/70 max-w-xl">
              Ingenieur, Entwickler, Coach. Ich baue Lösungen, die funktionieren,
              und arbeite mit Menschen, nicht nur mit Systemen.
            </p>
          </div>
        </Container>
      </section>

      {/* Stats Bar */}
      <section className="bg-neutral-charcoal py-8">
        <Container size="md">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-0 sm:divide-x sm:divide-white/10">
            {stats.map(({ wert, label }) => (
              <div key={label} className="text-center sm:px-6">
                <p className="text-3xl font-bold text-accent tabular-nums">{wert}</p>
                <p className="text-white/50 text-xs mt-1">{label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Portrait + Weg */}
      <section className="bg-white py-16 md:py-20">
        <Container size="md">
          <ScrollReveal>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-start">
              {/* Photo */}
              <div>
                <Image
                  src="/images/portrait_Michael_Klauser_square.jpg"
                  alt="Michael Klauser"
                  width={480}
                  height={480}
                  className="rounded-xl object-cover w-full shadow-lg"
                />
              </div>

              {/* Mein Weg */}
              <div className="space-y-5">
                <h2 className="text-2xl font-bold text-neutral-charcoal">Mein Weg</h2>
                <p className="text-neutral-slate leading-relaxed">
                  Mein Weg begann mit einer Lehre als Fahrzeugelektroniker im Toggenburg.
                  Über ein Ingenieurstudium an der NTB Buchs landete ich in der
                  Softwareentwicklung, erst als Junior Engineer bei einem
                  Medizintechnik-Unternehmen, dann als Projektleiter, und schliesslich
                  als CIO und Mitglied der Geschäftsleitung.
                </p>
                <p className="text-neutral-slate leading-relaxed">
                  In dieser Zeit habe ich gelernt, was es heisst, ein Entwicklungsteam
                  zu führen, IT-Infrastruktur zu verantworten und zwischen Technik und
                  Business zu übersetzen. Ich habe ERP-Systeme eingeführt, Data
                  Warehouses gebaut und gelernt, dass die beste technische Lösung nichts
                  wert ist, wenn die Menschen sie nicht nutzen.
                </p>
                <p className="text-neutral-slate leading-relaxed">
                  2013 habe ich mich selbstständig gemacht. Seitdem unterstütze ich
                  Unternehmen und Verbände als externer Spezialist. Mein längster Kunde
                  begleitet mich seit über 10 Jahren.
                </p>

                {/* Eckdaten */}
                <dl className="mt-6 grid grid-cols-1 gap-3 rounded-lg bg-neutral-50 p-5 text-sm">
                  <div className="flex gap-3">
                    <dt className="font-semibold text-neutral-charcoal w-28 shrink-0">Ausbildung</dt>
                    <dd className="text-neutral-slate">Dipl. Systemtechnik-Ingenieur FH, NTB Buchs (2002)</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="font-semibold text-neutral-charcoal w-28 shrink-0">Coaching</dt>
                    <dd className="text-neutral-slate">Dipl. Persönlichkeits- und Team-Coach, MPI</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="font-semibold text-neutral-charcoal w-28 shrink-0">Standort</dt>
                    <dd className="text-neutral-slate">St. Gallen, Remote und vor Ort in der Deutschschweiz</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="font-semibold text-neutral-charcoal w-28 shrink-0">Sprachen</dt>
                    <dd className="text-neutral-slate">Deutsch (Muttersprache), Englisch (fliessend)</dd>
                  </div>
                </dl>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Was mich anders macht */}
      <section className="bg-neutral-off-white py-16 md:py-20">
        <Container size="md">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-neutral-charcoal mb-6">
                Was mich anders macht
              </h2>
              <div className="space-y-5 text-neutral-slate leading-relaxed">
                <p>
                  Neben meiner IT-Arbeit bin ich ausgebildeter Persönlichkeits- und
                  Team-Coach. Das klingt vielleicht ungewöhnlich für einen Ingenieur.
                  Aber genau diese Kombination macht meine Arbeit aus.
                </p>
                <p>
                  Wenn ich eine Lösung baue, denke ich immer mit: Wer nutzt das am Ende?
                  Was braucht diese Person, damit es wirklich funktioniert? Wie nehme ich
                  Beteiligte mit, die vielleicht skeptisch sind?
                </p>
                <p>
                  Gerade bei Verbänden, wo ehrenamtliche Strukturen und unterschiedliche
                  Erwartungen aufeinandertreffen, macht das einen spürbaren Unterschied.
                  Und in KMUs, wo eine neue Lösung oft bedeutet, dass sich Arbeitsweisen
                  verändern, ist es entscheidend, dass nicht nur die Technik stimmt,
                  sondern auch der Mensch dahinter abgeholt wird.
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
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-neutral-charcoal mb-6">
                Wie ich arbeite
              </h2>
              <div className="space-y-5 text-neutral-slate leading-relaxed">
                <p>
                  Ich bin ein pragmatischer Arbeiter. Ich höre zu, stelle Fragen, und
                  dann setze ich um. Kein monatelanges Konzeptieren, sondern schnelle
                  Ergebnisse, die wir gemeinsam verfeinern.
                </p>
                <p>
                  Meine Werkzeuge wähle ich nach dem, was Sinn macht, nicht nach dem,
                  was gerade trendy ist. Oft ist das SQL Server und C#, manchmal Python,
                  manchmal Power BI, und ja, auch KI-Tools, wo sie echten Mehrwert
                  bringen. Aber das Werkzeug ist Mittel zum Zweck, nicht das Ziel.
                </p>
                <p>
                  Was mich antreibt: Wenn ein Kunde mir sagt, dass er jetzt zwei Tage
                  pro Monat weniger mit Excel verbringt. Oder wenn ein Verband seine
                  Prüfungsauswertung plötzlich in einer Stunde statt in drei Tagen
                  erledigt. Das sind die Momente, für die ich das mache.
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
              Technologien
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {technologien.map(({ gruppe, items }) => (
                <div key={gruppe} className="rounded-xl bg-white border border-neutral-100 p-6 shadow-sm">
                  <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">
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
      <section className="bg-white py-12">
        <Container size="md">
          <ScrollReveal>
            <div className="rounded-xl border border-neutral-100 bg-neutral-50 p-6 max-w-2xl">
              <h3 className="text-base font-semibold text-neutral-charcoal mb-2">
                Darüber hinaus
              </h3>
              <p className="text-sm text-neutral-slate leading-relaxed">
                Neben der Zusammenarbeit mit KMUs und Verbänden unterstütze ich auch
                grössere Unternehmen projektbezogen als externer Spezialist.
                Schwerpunkte dabei sind Datenmigrationen, Systemintegrationen und
                Business-Analyse. Wenn Sie für ein solches Projekt Unterstützung
                suchen, sprechen Sie mich gerne an.
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
