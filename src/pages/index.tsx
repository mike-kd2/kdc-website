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

export default function Home() {
  return (
    <>
      <SEOHead />

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
