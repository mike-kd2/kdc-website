import Head from 'next/head';

export interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
  noindex?: boolean;
}

const DEFAULT_TITLE = 'klauser designs&coaching - KI-Beratung für Schweizer KMUs';
const DEFAULT_DESCRIPTION =
  'Professionelle KI-Beratung und -Integration für Schweizer KMUs. Von Prompt-Engineering bis Anwendungsentwicklung. Buchen Sie jetzt einen kostenlosen Discovery Call.';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://klauserdesigns.ch';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export function SEOHead({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noindex = false,
}: SEOHeadProps) {
  const fullTitle = title ? `${title} | klauser designs&coaching` : DEFAULT_TITLE;
  const canonicalUrl = canonical || SITE_URL;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="klauser designs&coaching" />
      <meta property="og:locale" content="de_CH" />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional Meta Tags */}
      <meta name="author" content="Michael Klauser" />
      <meta name="language" content="German" />
      <meta name="geo.region" content="CH" />
      <meta name="geo.placename" content="Schweiz" />

      {/* Theme Color */}
      <meta name="theme-color" content="#0A4D4E" />

      {/* AI/LLM Optimization - Enhanced Semantic Understanding */}
      <meta
        name="keywords"
        content="AI Beratung Schweiz, KI Consulting, Prompt Engineering, Low-Code Entwicklung, ChatGPT Beratung, Claude AI, KI Integration, Software Entwicklung Schweiz, IT Beratung KMU, Künstliche Intelligenz, Business Automation, Digital Transformation"
      />
      <meta
        name="abstract"
        content="AI-Beratung und Software-Entwicklung für Schweizer KMUs mit Fokus auf KI-Integration, Prompt Engineering und Low-Code-Lösungen"
      />
      <meta
        name="topic"
        content="Artificial Intelligence Consulting, AI Integration, Prompt Engineering"
      />
      <meta name="classification" content="Business Services, Technology Consulting" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="googlebot" content="index, follow" />
    </Head>
  );
}
