import { SEOHead } from '@/components/SEOHead';
import { StructuredData } from '@/components/seo/StructuredData';
import { Section, Container } from '@/components/layout';
import { Badge, Card, CardHeader, CardTitle, CardDescription } from '@/components/ui';
import { ScrollReveal, FadeIn, StaggerContainer } from '@/components/animations';
import { CTA } from '@/components/sections';
import { Workflow, BarChart3, RefreshCw, Code2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerItem } from '@/components/animations/variants';
import Link from 'next/link';

const services = [
  {
    icon: Workflow,
    title: 'Datenflüsse automatisieren',
    description:
      'System A spricht nicht mit System B? Ich baue die Brücke. Import, Export, Synchronisation, Transformation. Automatisch, zuverlässig, ohne manuelles Eingreifen.',
  },
  {
    icon: BarChart3,
    title: 'Reporting und Dashboards',
    description:
      'Von der Excel-Auswertung zum Power BI Dashboard. Zahlen, die aktuell sind, auf einen Blick verständlich und automatisch aktualisiert. Damit Sie Entscheidungen auf Basis von Fakten treffen, nicht auf Basis von Bauchgefühl.',
  },
  {
    icon: RefreshCw,
    title: 'Systemwechsel und Datenmigrationen',
    description:
      'Sie stellen um auf ein neues ERP, CRM oder eine neue Branchenlösung? Ich plane die Migration, transformiere die Daten und validiere das Ergebnis. In einem aktuellen Projekt habe ich ein Python-Framework entwickelt, das 100% der migrierten Datensätze automatisch validiert, statt sich auf Stichproben zu verlassen.',
  },
  {
    icon: Code2,
    title: 'Massgeschneiderte Software',
    description:
      'Wenn es kein Produkt gibt, das Ihr Problem löst, baue ich eines. Backend-Systeme, Middleware, Integrationen. In C#, .NET oder Python, je nachdem, was am besten passt.',
  },
];

const caseStudies = [
  {
    title: 'Helion Energy AG — Data Warehouse & Reporting',
    subtitle: '10 Jahre Zusammenarbeit',
    ausgangslage:
      'Ein wachsendes Schweizer Energieunternehmen brauchte eine zentrale Datenplattform für Geschäfts- und Projektreporting.',
    wasIchGemachtHabe:
      'Konzeption, Aufbau und langjähriger Betrieb des firmenweiten Data Warehouse. Entwicklung von KPI-Dashboards in Power BI, automatisierte Report-Generierung, Middleware-Entwicklung für die Integration zwischen Eigenentwicklung und SAP.',
    ergebnis:
      'Single Point of Truth für alle Geschäftsbereiche. Report-Generierung von Tagen auf Stunden reduziert. 10 Jahre vertrauensvolle Zusammenarbeit.',
    technologien: ['SQL Server', 'SSIS', 'Power BI', 'DAX', 'T-SQL', 'C#', '.NET', 'REST APIs'],
  },
  {
    title: 'Helion Energy AG — Datenmigration ES2000 → Dynamics 365',
    subtitle: undefined,
    ausgangslage:
      'Migration aller CRM- und ERP-Daten aus einem Legacy-System nach Dynamics 365. Komplexe Datenstrukturen mit vielen Abhängigkeiten.',
    wasIchGemachtHabe:
      'Analyse und Transformation der Quelldaten, Bereitstellung über Views für die Migrationssoftware. Eigenständig ein Python-basiertes Validierungs-Framework entwickelt, das 100% der migrierten Datensätze über die D365 OData API prüft, statt auf Stichproben zu setzen.',
    ergebnis:
      'Validierungszyklen alle 1-2 Tage. Fehler wurden früh erkannt, Post-Migrations-Korrekturen massiv reduziert. Deutlich verbesserte Datenqualität vor Go-Live.',
    technologien: ['Python', 'Pandas', 'Azure SQL', 'OData API', 'T-SQL'],
  },
  {
    title: 'SBKH GmbH — Automatisierte ETL-Pipeline',
    subtitle: undefined,
    ausgangslage:
      'Eine Preisvergleichsplattform brauchte tägliche Datenaktualisierungen aus mehreren externen Quellen. Alles lief manuell.',
    wasIchGemachtHabe:
      'Konzeption und Umsetzung einer vollautomatisierten ETL-Pipeline: Datenabholung, Transformation, Qualitätsprüfung und Bereitstellung. Null manueller Aufwand nach der Inbetriebnahme.',
    ergebnis:
      'Tägliche Datenverarbeitung komplett automatisiert. Das Unternehmen konnte sein Sortiment erweitern, ohne zusätzlichen Personalaufwand.',
    technologien: ['SQL Server', 'MySQL', 'SSIS', 'C#', 'REST'],
  },
];

export default function KMU() {
  return (
    <>
      <SEOHead
        title="Datenflüsse, Reporting & Systemintegration für KMUs"
        description="Ich automatisiere Datenflüsse, baue Schnittstellen und schaffe Reporting-Lösungen für Schweizer KMUs. Pragmatisch, bezahlbar und auf Ihre Realität zugeschnitten."
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/kmu`}
      />
      <StructuredData
        type="service"
        pageTitle="Datenflüsse, Reporting & Systemintegration für KMUs | klauser designs&coaching"
        pageDescription="Ich automatisiere Datenflüsse, baue Schnittstellen und schaffe Reporting-Lösungen für Schweizer KMUs. Pragmatisch, bezahlbar und auf Ihre Realität zugeschnitten."
        pagePath="/kmu"
      />

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary to-primary-light text-white pt-24 pb-16">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
                Ihre Daten arbeiten. Nicht Sie.
              </h1>
              <p className="text-xl text-white/90 sm:text-2xl">
                Ich automatisiere Datenflüsse, baue Schnittstellen und schaffe
                Reporting-Lösungen, die funktionieren. Pragmatisch, bezahlbar und
                auf Ihre Realität zugeschnitten.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* "Ich kenne Ihre Realität" Section */}
      <Section spacing="xl">
        <Container size="md">
          <ScrollReveal direction="up">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-3xl font-bold text-neutral-charcoal sm:text-4xl md:text-5xl">
                KMUs brauchen Lösungen, keine Konzepte.
              </h2>
              <p className="mb-4 text-lg text-neutral-slate">
                Sie haben ein ERP, vielleicht eine Branchenlösung, dazu Excel, ein paar
                Eigenentwicklungen und irgendwo eine Access-Datenbank, die niemand mehr
                anfassen will. Die Daten sind da, aber sie fliessen nicht. Reports dauern.
                Systemwechsel machen Angst.
              </p>
              <p className="text-lg text-neutral-slate">
                Was Sie brauchen, ist kein Berater, der Ihnen eine PowerPoint mit
                &quot;Digital Roadmap&quot; liefert. Sie brauchen jemanden, der sich
                hinsetzt, versteht, was nicht läuft, und es repariert oder neu baut.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* "Was ich für KMUs mache" Section */}
      <Section spacing="xl" background="gray">
        <Container size="lg">
          <ScrollReveal direction="up">
            <div className="mb-12 text-center md:mb-16">
              <h2 className="mb-4 text-3xl font-bold text-neutral-charcoal sm:text-4xl md:text-5xl">
                Was ich für KMUs mache
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.15}>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div key={index} variants={staggerItem}>
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Card className="h-full transition-shadow hover:shadow-lg">
                        <CardHeader>
                          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle className="text-xl">{service.title}</CardTitle>
                          <CardDescription className="text-base">
                            {service.description}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </StaggerContainer>
        </Container>
      </Section>

      {/* Reference Projects Section */}
      <Section spacing="xl">
        <Container size="lg">
          <ScrollReveal direction="up">
            <div className="mb-12 text-center md:mb-16">
              <h2 className="mb-4 text-3xl font-bold text-neutral-charcoal sm:text-4xl md:text-5xl">
                Referenzprojekte
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="border border-neutral-200 p-8 lg:p-10">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-neutral-charcoal">
                      {study.title}
                    </h3>
                    {study.subtitle && (
                      <p className="mt-1 text-sm font-medium text-primary">
                        {study.subtitle}
                      </p>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-1 font-semibold text-neutral-charcoal">
                        Ausgangslage
                      </h4>
                      <p className="text-neutral-slate">{study.ausgangslage}</p>
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-neutral-charcoal">
                        Was ich gemacht habe
                      </h4>
                      <p className="text-neutral-slate">{study.wasIchGemachtHabe}</p>
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-neutral-charcoal">
                        Ergebnis
                      </h4>
                      <p className="text-neutral-slate">{study.ergebnis}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {study.technologien.map((tech) => (
                      <Badge key={tech} variant="default">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-10 text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-lg font-medium text-primary hover:text-primary-light transition-colors"
              >
                Alle Projekte ansehen
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* CTA Section */}
      <CTA
        title="Welche Daten machen Ihnen Kopfschmerzen?"
        text="Erzählen Sie mir davon. In einem kurzen Gespräch schauen wir gemeinsam, wo der grösste Hebel liegt. Unverbindlich und ohne Verkaufsgespräch."
      />
    </>
  );
}
