import { GetServerSideProps } from 'next';

const SITE_URL = 'https://klauserdesigns.ch';

interface SitemapEntry {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

function generateSiteMap(): string {
  const entries: SitemapEntry[] = [
    {
      loc: `${SITE_URL}`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 1.0,
    },
    {
      loc: `${SITE_URL}/angebot`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.9,
    },
    {
      loc: `${SITE_URL}/verbaende`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: `${SITE_URL}/kmu`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: `${SITE_URL}/referenzen`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.8,
    },
    {
      loc: `${SITE_URL}/ueber-mich`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.7,
    },
    {
      loc: `${SITE_URL}/kontakt`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.7,
    },
    {
      loc: `${SITE_URL}/impressum`,
      lastmod: new Date().toISOString(),
      changefreq: 'yearly',
      priority: 0.3,
    },
    {
      loc: `${SITE_URL}/datenschutz`,
      lastmod: new Date().toISOString(),
      changefreq: 'yearly',
      priority: 0.3,
    },
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default function SiteMap() {
  return null;
}
