import { SEOHead } from '@/components/SEOHead';
import { StructuredData } from '@/components/seo/StructuredData';
import { Section, Container } from '@/components/layout';
import { Badge, Button } from '@/components/ui';
import { ScrollReveal, FadeIn } from '@/components/animations';
import { CTA } from '@/components/sections/CTA';
import {
  GraduationCap,
  Briefcase,
  MapPin,
  Globe,
  Monitor,
  Calendar,
  Code,
  Database,
  BarChart3,
  Network,
  Building2,
} from 'lucide-react';
import Image from 'next/image';

const education = [
  {
    title: 'Dipl. Systemtechnik Ingenieur FH',
    detail: 'NTB Buchs, 2002',
  },
  {
    title: 'Dipl. Persönlichkeits- und Team-Coach',
    detail: 'Mental Power Institut',
  },
];

const career = [
  {
    period: '2006 – 2013',
    company: 'IMT AG, Buchs SG',
    role: 'CIO, Mitglied der Geschäftsleitung, Dev Team Manager',
    detail: 'Medizintechnik, reguliertes Umfeld (FDA, CE).',
    borderColor: 'border-primary',
    textColor: 'text-primary',
  },
  {
    period: '2005 – 2006',
    company: 'Kyberna AG, Vaduz',
    role: 'Projektleiter, Software Engineer',
    detail: 'ITIL-Lösungen für Banken und Versicherungen.',
    borderColor: 'border-neutral-slate/30',
    textColor: 'text-neutral-slate',
  },
];

const techCategories = [
  {
    icon: Code,
    label: 'Programmierung',
    items: 'C#, .NET Framework/.NET Core, VBA, Python',
  },
  {
    icon: Database,
    label: 'Datenbanken',
    items: 'SQL Server (10+ Jahre), Azure SQL, T-SQL, SSIS',
  },
  {
    icon: BarChart3,
    label: 'Reporting',
    items: 'Power BI, DAX, Excel',
  },
  {
    icon: Network,
    label: 'Schnittstellen',
    items: 'REST APIs, OData, JSON, XML',
  },
  {
    icon: Building2,
    label: 'Business Software',
    items: 'Microsoft Dynamics 365, SAP (Anbindung)',
  },
];

export default function About() {
  return (
    <>
      <SEOHead
        title="Michael Klauser — Ingenieur & Automatisierungs-Spezialist | klauser designs&coaching"
        description="20+ Jahre IT-Erfahrung, Dipl. Systemtechnik-Ingenieur FH und Coach. Ich baue Automatisierungslösungen und Data Tools für Verbände und KMUs in der Schweiz."
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/about`}
      />
      <StructuredData
        type="website"
        pageTitle="Michael Klauser — Ingenieur & Automatisierungs-Spezialist"
        pageDescription="20+ Jahre IT-Erfahrung, Dipl. Systemtechnik-Ingenieur FH und Coach. Ich baue Automatisierungslösungen und Data Tools für Verbände und KMUs in der Schweiz."
        pagePath="/about"
      />

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary to-primary-light text-white pt-24 pb-16">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <Badge variant="accent" className="mb-4">
                Über mich
              </Badge>
              <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
                Hi, ich bin Michael.
              </h1>
              <p className="text-xl text-white/90 sm:text-2xl">
                Ingenieur, Entwickler, Coach. Ich baue Lösungen, die funktionieren, und arbeite mit Menschen, nicht nur mit Systemen.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Mein Weg Section */}
      <Section>
        <Container>
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <div className="grid gap-8 lg:grid-cols-5 lg:gap-12 items-center">
                {/* Photo */}
                <div className="lg:col-span-2">
                  <div className="relative mx-auto max-w-xs lg:max-w-none">
                    <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl">
                      <Image
                        src="/images/portrait_Michael_Klauser_square.jpg"
                        alt="Michael Klauser - Ingenieur und Automatisierungs-Spezialist"
                        fill
                        sizes="(max-width: 1024px) 320px, 400px"
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-accent/20" />
                  </div>
                </div>

                {/* Text */}
                <div className="lg:col-span-3">
                  <h2 className="text-3xl font-bold text-neutral-charcoal mb-6">
                    Mein Weg
                  </h2>
                  <div className="space-y-4 text-neutral-slate">
                    <p>
                      Mein Weg begann mit einer Lehre als Fahrzeugelektroniker im Toggenburg. Über ein Ingenieurstudium an der NTB Buchs landete ich in der Softwareentwicklung, erst als Junior Engineer bei einem Medizintechnik-Unternehmen, dann als Projektleiter, und schliesslich als CIO und Mitglied der Geschäftsleitung.
                    </p>
                    <p>
                      In dieser Zeit habe ich gelernt, was es heisst, ein Entwicklungsteam zu führen, IT-Infrastruktur zu verantworten und zwischen Technik und Business zu übersetzen. Ich habe ERP-Systeme eingeführt, Data Warehouses gebaut und gelernt, dass die beste technische Lösung nichts wert ist, wenn die Menschen sie nicht nutzen.
                    </p>
                    <p>
                      2013 habe ich mich selbstständig gemacht. Seitdem unterstütze ich Unternehmen und Verbände als externer Spezialist. Mein längster Kunde begleitet mich seit über 10 Jahren.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* Was mich anders macht Section */}
      <Section background="gray">
        <Container>
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <h2 className="mb-6 text-3xl font-bold text-neutral-charcoal sm:text-4xl">
                Was mich anders macht
              </h2>
              <div className="space-y-4 text-neutral-slate text-lg">
                <p>
                  Neben meiner IT-Arbeit bin ich ausgebildeter Persönlichkeits- und Team-Coach. Das klingt vielleicht ungewöhnlich für einen Ingenieur. Aber genau diese Kombination macht meine Arbeit aus.
                </p>
                <p>
                  Wenn ich eine Lösung baue, denke ich immer mit: Wer nutzt das am Ende? Was braucht diese Person, damit es wirklich funktioniert? Wie nehme ich Beteiligte mit, die vielleicht skeptisch sind?
                </p>
                <p>
                  Gerade bei Verbänden, wo ehrenamtliche Strukturen und unterschiedliche Erwartungen aufeinandertreffen, macht das einen spürbaren Unterschied. Und in KMUs, wo eine neue Lösung oft bedeutet, dass sich Arbeitsweisen verändern, ist es entscheidend, dass nicht nur die Technik stimmt, sondern auch der Mensch dahinter abgeholt wird.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* Wie ich arbeite Section */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <h2 className="mb-6 text-3xl font-bold text-neutral-charcoal sm:text-4xl">
                Wie ich arbeite
              </h2>
              <div className="space-y-4 text-neutral-slate text-lg">
                <p>
                  Ich bin ein pragmatischer Arbeiter. Ich höre zu, stelle Fragen, und dann setze ich um. Kein monatelanges Konzeptieren, sondern schnelle Ergebnisse, die wir gemeinsam verfeinern.
                </p>
                <p>
                  Meine Werkzeuge wähle ich nach dem, was Sinn macht, nicht nach dem, was gerade trendy ist. Oft ist das SQL Server und C#, manchmal Python, manchmal Power BI, und ja, auch KI-Tools, wo sie echten Mehrwert bringen. Aber das Werkzeug ist Mittel zum Zweck, nicht das Ziel.
                </p>
                <p>
                  Was mich antreibt: Wenn ein Kunde mir sagt, dass er jetzt zwei Tage pro Monat weniger mit Excel verbringt. Oder wenn ein Verband seine Prüfungsauswertung plötzlich in einer Stunde statt in drei Tagen erledigt. Das sind die Momente, für die ich das mache.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* Eckdaten Section */}
      <Section background="gray">
        <Container>
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <h2 className="mb-10 text-3xl font-bold text-neutral-charcoal sm:text-4xl text-center">
                Eckdaten
              </h2>
            </ScrollReveal>

            {/* Ausbildung */}
            <ScrollReveal>
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="h-6 w-6 text-accent" />
                  <h3 className="text-xl font-bold text-neutral-charcoal">Ausbildung</h3>
                </div>
                <div className="space-y-3 pl-9">
                  {education.map((item) => (
                    <div key={item.title}>
                      <p className="font-semibold text-neutral-charcoal">{item.title}</p>
                      <p className="text-sm text-neutral-slate">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Berufserfahrung */}
            <ScrollReveal>
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="h-6 w-6 text-accent" />
                  <h3 className="text-xl font-bold text-neutral-charcoal">Berufserfahrung</h3>
                </div>
                <div className="space-y-6 pl-9">
                  {career.map((item) => (
                    <div key={item.period} className={`border-l-4 ${item.borderColor} pl-4`}>
                      <div className={`text-sm font-semibold ${item.textColor} mb-1`}>
                        {item.period}
                      </div>
                      <h4 className="font-bold text-neutral-charcoal">{item.role}</h4>
                      <p className="text-neutral-slate">{item.company}</p>
                      <p className="text-sm text-neutral-slate mt-1">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Details grid */}
            <ScrollReveal>
              <div className="mb-10 grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                  <Calendar className="h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                  <div>
                    <p className="font-semibold text-neutral-charcoal">Selbstständig seit</p>
                    <p className="text-sm text-neutral-slate">2013 (klauser designs&amp;coaching)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                  <div>
                    <p className="font-semibold text-neutral-charcoal">Standort</p>
                    <p className="text-sm text-neutral-slate">St. Gallen, Schweiz</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                  <Monitor className="h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                  <div>
                    <p className="font-semibold text-neutral-charcoal">Arbeitsweise</p>
                    <p className="text-sm text-neutral-slate">Remote und vor Ort in der Deutschschweiz</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                  <Globe className="h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                  <div>
                    <p className="font-semibold text-neutral-charcoal">Sprachen</p>
                    <p className="text-sm text-neutral-slate">Deutsch (Muttersprache), Englisch (fliessend), Französisch (Grundkenntnisse)</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Technologien */}
            <ScrollReveal>
              <div>
                <h3 className="text-xl font-bold text-neutral-charcoal mb-4 text-center">
                  Technologien
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {techCategories.map((cat, index) => {
                    const Icon = cat.icon;
                    return (
                      <FadeIn key={cat.label} delay={index * 0.08}>
                        <div className="rounded-lg bg-white p-4 shadow-sm">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon className="h-5 w-5 text-accent" />
                            <span className="font-semibold text-neutral-charcoal">{cat.label}</span>
                          </div>
                          <p className="text-sm text-neutral-slate">{cat.items}</p>
                        </div>
                      </FadeIn>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* Darüber hinaus Section */}
      <Section spacing="md">
        <Container>
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <p className="text-neutral-slate text-center">
                Neben der Zusammenarbeit mit KMUs und Verbänden unterstütze ich auch grössere Unternehmen projektbezogen als externer Spezialist. Schwerpunkte dabei sind Datenmigrationen, Systemintegrationen und Business-Analyse. Wenn Sie für ein solches Projekt Unterstützung suchen, sprechen Sie mich gerne an.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <CTA
        title="Lassen Sie uns reden."
        text="Ob Sie ein konkretes Projekt im Kopf haben oder einfach herausfinden wollen, ob wir zusammenpassen: Ich freue mich auf den Austausch."
      />
    </>
  );
}
