import Head from 'next/head';

interface StructuredDataProps {
  type?: 'website' | 'organization' | 'service' | 'article' | 'person';
  pageTitle?: string;
  pageDescription?: string;
  pagePath?: string;
}

export function StructuredData({
  type = 'website',
  pageTitle,
  pageDescription,
  pagePath = '',
}: StructuredDataProps) {
  const baseUrl = 'https://klauserdesigns.ch';
  const fullUrl = `${baseUrl}${pagePath}`;

  // Organization schema - appears on all pages
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'klauser designs & coaching',
    alternateName: 'KDC',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description:
      'Automatisierung, massgeschneiderte Tools und Datenlösungen für Schweizer Verbände und KMUs. Spezialisiert auf Prozessautomatisierung, individuelle Software-Entwicklung und Datenintegration.',
    email: 'michael@klauserdesigns.ch',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CH',
      addressRegion: 'Zürich',
    },
    founder: {
      '@type': 'Person',
      name: 'Michael Klauser',
      jobTitle: 'Systemtechnik-Ingenieur & Automatisierungs-Spezialist',
      description:
        'IT-Experte mit über 20 Jahren Erfahrung in Software-Entwicklung, Systemintegration und Prozessautomatisierung',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Switzerland',
    },
    knowsAbout: [
      'Prozessautomatisierung',
      'Datenintegration',
      'Massgeschneiderte Software',
      'Data Warehouse',
      'ETL',
      'Reporting',
      'Datenmigration',
      'Power BI',
      'SQL Server',
      'C#',
      '.NET',
    ],
    serviceType: [
      'Prozesse automatisieren',
      'Massgeschneiderte Tools entwickeln',
      'Daten nutzbar machen',
      'Systeme wechseln, Daten mitnehmen',
    ],
  };

  // Website schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: 'klauser designs & coaching',
    description:
      'Automatisierung, massgeschneiderte Tools und Datenlösungen für Schweizer Verbände und KMUs - Prozessautomatisierung, individuelle Software und Datenintegration',
    publisher: {
      '@id': `${baseUrl}/#organization`,
    },
    inLanguage: 'de-CH',
  };

  // Service schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Automatisierung & Datenlösungen',
    provider: {
      '@id': `${baseUrl}/#organization`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Switzerland',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Automatisierung, Tools & Datenlösungen',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Prozesse automatisieren',
            description:
              'Wiederkehrende Abläufe automatisieren und manuelle Arbeit reduzieren',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Massgeschneiderte Tools entwickeln',
            description:
              'Individuelle Software-Tools, die genau zu Ihren Anforderungen passen',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Daten nutzbar machen',
            description:
              'Datenintegration, Reporting und Data Warehouse für fundierte Entscheidungen',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Systeme wechseln, Daten mitnehmen',
            description:
              'Sichere Datenmigration und Systemwechsel ohne Datenverlust',
          },
        },
      ],
    },
  };

  // Breadcrumb schema (if not homepage)
  const breadcrumbSchema =
    pagePath && pagePath !== '/'
      ? {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: baseUrl,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: pageTitle || 'Seite',
              item: fullUrl,
            },
          ],
        }
      : null;

  // WebPage schema
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': fullUrl,
    url: fullUrl,
    name: pageTitle || 'klauser designs & coaching',
    description:
      pageDescription ||
      'Automatisierung, massgeschneiderte Tools und Datenlösungen für Schweizer Verbände und KMUs',
    isPartOf: {
      '@id': `${baseUrl}/#website`,
    },
    about: {
      '@id': `${baseUrl}/#organization`,
    },
    inLanguage: 'de-CH',
  };

  // Combine schemas based on page type
  const schemas: unknown[] = [organizationSchema, websiteSchema, webPageSchema];

  if (type === 'service') {
    schemas.push(serviceSchema);
  }

  if (breadcrumbSchema) {
    schemas.push(breadcrumbSchema);
  }

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas),
        }}
      />
    </Head>
  );
}
