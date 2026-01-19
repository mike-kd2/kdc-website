import {
  Hero,
  DiscoveryCall,
  Services,
  Process,
  BusinessAudit,
  FeaturedProjects,
  CTA,
} from '@/components/sections'
import { SEOHead } from '@/components/SEOHead'
import { StructuredData } from '@/components/seo/StructuredData'

export default function Home() {
  return (
    <>
      <SEOHead />
      <StructuredData
        type="website"
        pageTitle="klauser designs & coaching - AI-Beratung für Schweizer KMUs"
        pageDescription="Professionelle AI-Beratung, Prompt Engineering und Low-Code-Entwicklung für Schweizer KMUs. Über 20 Jahre IT-Expertise."
        pagePath="/"
      />

      <Hero />
      <DiscoveryCall />
      <Services />
      <Process />
      <BusinessAudit />
      <FeaturedProjects />
      <CTA />
    </>
  )
}
