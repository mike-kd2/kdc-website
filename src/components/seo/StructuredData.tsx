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
      'AI-Beratung und Low-Code-Entwicklung für Schweizer KMUs. Spezialisiert auf KI-Integration, Prompt Engineering und massgeschneiderte Softwarelösungen.',
    email: 'michael@klauserdesigns.ch',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CH',
      addressRegion: 'Zürich',
    },
    founder: {
      '@type': 'Person',
      name: 'Michael Klauser',
      jobTitle: 'AI Consultant & Software Developer',
      description:
        'IT-Experte mit über 20 Jahren Erfahrung in Software-Entwicklung, IT-Infrastruktur und KI-Integration',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Switzerland',
    },
    knowsAbout: [
      'Artificial Intelligence',
      'AI Consulting',
      'Prompt Engineering',
      'Low-Code Development',
      'Software Development',
      'Business Process Automation',
      'IT Consulting',
    ],
    serviceType: [
      'AI-Beratung',
      'Prompt Engineering',
      'Low-Code-Entwicklung',
      'KI-Integration',
      'Software-Entwicklung',
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
      'AI-Beratung und Software-Entwicklung für Schweizer KMUs - KI-Integration, Prompt Engineering und massgeschneiderte Lösungen',
    publisher: {
      '@id': `${baseUrl}/#organization`,
    },
    inLanguage: 'de-CH',
  };

  // Service schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'AI Consulting',
    provider: {
      '@id': `${baseUrl}/#organization`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Switzerland',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI & Software Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'KI-Integration & Beratung',
            description:
              'Nahtlose Integration von KI-Tools in bestehende Geschäftsprozesse',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Prompt Engineering',
            description:
              'Optimierung von KI-Prompts für Text-, Bild- und Video-Generierung',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Low-Code-Entwicklung',
            description:
              'Schnelle Entwicklung massgeschneiderter Anwendungen mit modernen Tools',
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
      'AI-Beratung und Software-Entwicklung für Schweizer KMUs',
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
