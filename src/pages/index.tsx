import {
  Hero,
  Problem,
  Services,
  TwoWorlds,
  Process,
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
        pageTitle="Automatisierung & Datenlösungen für Verbände und KMUs | klauser designs&coaching"
        pageDescription="Ich automatisiere wiederkehrende Abläufe, baue massgeschneiderte Tools und bringe Struktur in Ihre Daten. Für Verbände und KMUs in der Schweiz."
        pagePath="/"
      />

      <Hero />
      <Problem />
      <Services />
      <TwoWorlds />
      <Process />
      <FeaturedProjects />
      <CTA />
    </>
  )
}
