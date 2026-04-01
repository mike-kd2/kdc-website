import { SEOHead } from '@/components/SEOHead';
import { StructuredData } from '@/components/seo/StructuredData';
import { Section, Container } from '@/components/layout';
import { Badge, Card, CardHeader, CardTitle, CardContent } from '@/components/ui';
import { ScrollReveal } from '@/components/animations';
import { CTA } from '@/components/sections/CTA';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  ergebnis: string;
  technologies: string[];
}

const verbaendeProjects: Project[] = [
  {
    title: 'OdA ARTECURA — Automatisierte Prüfungslösung',
    subtitle: 'Berufsverband für Kunsttherapie',
    description:
      'Ein Schweizer Berufsverband wickelte seine Qualifikationsverfahren mit einer Kombination aus Excel-Dateien und manuellen Schritten ab. Ich habe den gesamten Prüfungsprozess automatisiert: von der Datenvalidierung über die Zuordnung von Kandidaten und Experten bis zur Ergebnisaufbereitung.',
    ergebnis:
      'Drastische Reduktion des manuellen Aufwands, weniger Fehler, eigenständig durchführbar.',
    technologies: ['Excel', 'VBA', 'C#', '.NET', 'ClosedXML'],
  },
];

const kmuProjects: Project[] = [
  {
    title: 'Helion Energy AG — Data Warehouse & Reporting',
    subtitle: 'Schweizer Energieunternehmen | 10 Jahre Zusammenarbeit',
    description:
      'Konzeption, Aufbau und Betrieb des firmenweiten Data Warehouse. Zentrale Datenplattform für Geschäfts- und Projektreporting, KPI-Dashboards in Power BI, automatisierte Report-Generierung.',
    ergebnis:
      'Single Point of Truth. Report-Generierung von Tagen auf Stunden reduziert.',
    technologies: ['SQL Server', 'SSIS', 'Power BI', 'DAX', 'T-SQL', 'C#'],
  },
  {
    title: 'Helion Energy AG — KPI Datenbank & Power BI Reports',
    subtitle: 'Schweizer Energieunternehmen',
    description:
      'Konzeptionierung und Umsetzung einer Sales KPI Datenbank mit automatischer Aktualisierung. Erstellung des KPI Reportings mit Power BI.',
    ergebnis:
      'Detaillierte Auswertung des Verkaufsprozesses. Reduktion der Report-Generierungszeit von Tagen auf Stunden.',
    technologies: ['SQL Server', 'Power BI', 'T-SQL', 'DAX'],
  },
  {
    title: 'Helion Energy AG — Bedarfsmanagement-Software',
    subtitle: 'Schweizer Energieunternehmen',
    description:
      'Konzeption und Entwicklung einer Software für Bedarfsmanagement mit Anbindung externer Logistikpartner. Automatisches Demand-Forecasting und Datentransfer via REST APIs.',
    ergebnis:
      'Massive Reduktion manueller Koordination zwischen Projektleitern und Supply Chain Management.',
    technologies: ['SQL Server', 'C#', '.NET Framework', 'DevExpress', 'REST APIs'],
  },
  {
    title: 'Helion Energy AG — Import Tool und Middleware',
    subtitle: 'Schweizer Energieunternehmen',
    description:
      'Geführtes Import- und Sync-Tool für Adress-, Projekt-, Offert- und Rechnungsdaten. Middleware für automatisierten Datenfluss zwischen webbasierter Vertriebssoftware und Business-Systemen.',
    ergebnis:
      'Automatisierter End-to-End Workflow von der Offerte bis zur Rechnung. Manuelle Dateneingabe eliminiert.',
    technologies: ['SQL Server', 'C#', '.NET Framework', 'EF6', 'REST'],
  },
  {
    title: 'Helion Energy AG — Theia Bridge (Azure Middleware)',
    subtitle: 'Schweizer Energieunternehmen',
    description:
      'Konzeptionierung und Umsetzung einer Azure-basierten Middleware zwischen webbasierter Vertriebssoftware, internen ERP-Applikationen und konzernweitem SAP.',
    ergebnis:
      'Integration in konzernweite ERP-Systemlandschaft. Modularisierung für geplanten Umstieg auf neue ERP-Lösungen.',
    technologies: ['Azure SQL', 'C#', '.NET Core', 'Azure App Service', 'Hangfire', 'REST'],
  },
  {
    title: 'Helion Energy AG — Datenmigration ES2000 → Dynamics 365',
    subtitle: 'Schweizer Energieunternehmen',
    description:
      'End-to-End Datenmigration aus Legacy-System nach Dynamics 365. Entwicklung eines Python-basierten Validierungs-Frameworks, das 100% der migrierten Datensätze über die D365 OData API prüft.',
    ergebnis:
      'Validierungszyklen alle 1-2 Tage, Fehler früh erkannt, deutlich verbesserte Datenqualität vor Go-Live.',
    technologies: ['Python', 'Pandas', 'Azure SQL', 'OData API', 'T-SQL'],
  },
  {
    title: 'SBKH GmbH — Automatisierte ETL-Pipeline',
    subtitle: 'Preisvergleichsplattform',
    description:
      'Vollautomatisierte ETL-Pipeline für tägliche Datenverarbeitung aus mehreren externen Quellen. Von der Datenabholung bis zur Bereitstellung ohne manuellen Eingriff.',
    ergebnis:
      'Manuelle Datenverarbeitung auf null reduziert. Sortimentserweiterung ohne zusätzlichen Personalaufwand.',
    technologies: ['SQL Server', 'MySQL', 'SSIS', 'C#', 'REST'],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <ScrollReveal>
      <Card className="overflow-hidden">
        <CardHeader>
          <div className="mb-2">
            <Badge variant="outline">{project.subtitle}</Badge>
          </div>
          <CardTitle className="text-xl sm:text-2xl text-neutral-charcoal">
            {project.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <p className="text-neutral-slate leading-relaxed">
            {project.description}
          </p>

          {/* Ergebnis */}
          <div className="flex items-start gap-3 rounded-lg bg-green-50 p-4">
            <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <div>
              <span className="text-sm font-semibold text-green-800">Ergebnis: </span>
              <span className="text-sm text-green-800">{project.ergebnis}</span>
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-neutral-light-gray px-3 py-1 text-xs font-medium text-neutral-charcoal"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </ScrollReveal>
  );
}

export default function Projects() {
  return (
    <>
      <SEOHead
        title="Realisierte Projekte: Automatisierung & Datenlösungen | klauser designs&coaching"
        description="Von automatisierten Prüfungslösungen bis zu Data Warehouses. Einblick in Projekte für Verbände und KMUs, die heute im Einsatz sind."
      />
      <StructuredData
        type="website"
        pageTitle="Realisierte Projekte: Automatisierung & Datenlösungen"
        pageDescription="Von automatisierten Prüfungslösungen bis zu Data Warehouses. Einblick in Projekte für Verbände und KMUs, die heute im Einsatz sind."
        pagePath="/projects"
      />

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary to-primary-light text-white pt-24 pb-16">
        <Container>
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <Badge variant="accent" className="mb-4">
                Projekte
              </Badge>
              <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
                Realisierte Projekte
              </h1>
              <p className="text-xl text-white/90 sm:text-2xl">
                Von automatisierten Prüfungslösungen bis zu Data Warehouses. Ein Einblick in Projekte, die heute im Einsatz sind.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Verbände Section */}
      <Section>
        <Container>
          <ScrollReveal>
            <div className="mb-8 flex items-baseline justify-between">
              <h2 className="text-3xl font-bold text-neutral-charcoal sm:text-4xl">
                Verbände
              </h2>
              <Link
                href="/verbaende"
                className="group flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-light"
              >
                Mehr erfahren
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid gap-8">
            {verbaendeProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Container>
      </Section>

      {/* KMU Section */}
      <Section background="gray">
        <Container>
          <ScrollReveal>
            <div className="mb-8 flex items-baseline justify-between">
              <h2 className="text-3xl font-bold text-neutral-charcoal sm:text-4xl">
                KMU
              </h2>
              <Link
                href="/kmu"
                className="group flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-light"
              >
                Mehr erfahren
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid gap-8">
            {kmuProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <CTA
        title="Ihr Projekt könnte das nächste sein."
        text="Erzählen Sie mir, was bei Ihnen ansteht. In einem kurzen Gespräch finden wir heraus, ob ich der Richtige dafür bin."
      />
    </>
  );
}
