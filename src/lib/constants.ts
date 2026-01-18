// Site Metadata
export const SITE_NAME = 'klauser designs & coaching'
export const SITE_DESCRIPTION = 'AI Consultancy für Schweizer KMUs - KI-Prompt-Engineering, Anwendungsentwicklung und KI-Integration'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://klauserdesigns.ch'

// Contact Information
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'michael@klauserdesigns.ch'

// External URLs
export const TIDYCAL_URL = process.env.NEXT_PUBLIC_TIDYCAL_URL || 'https://tidycal.com/klauserdesignscoaching/discovery-call'

// Analytics
export const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || 'klauserdesigns.ch'

// Social Media (Placeholder - can be added later)
export const SOCIAL_LINKS = {
  linkedin: '',
  github: '',
  twitter: '',
}

// Navigation
export const NAVIGATION_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Über uns', href: '/about' },
  { label: 'Projekte', href: '/projects' },
  { label: 'Kontakt', href: '/contact' },
]

// Services
export const SERVICES = [
  {
    id: 'ki-prompt-engineering',
    title: 'KI-Prompt-Engineering',
    description: 'Optimierung von KI-Prompts für Video- und Bildgenerierung',
    icon: 'Wand2',
    tags: ['Video', 'Bilder', 'Prompts'],
  },
  {
    id: 'anwendungsentwicklung',
    title: 'Anwendungsentwicklung',
    description: 'Low/Mid-Level Entwicklung von KI-gestützten Anwendungen',
    icon: 'Code2',
    tags: ['Web Apps', 'APIs', 'Integration'],
  },
  {
    id: 'ki-integration',
    title: 'KI-Integrationsberatung',
    description: 'Beratung zur Integration von KI-Lösungen in bestehende Systeme',
    icon: 'Network',
    tags: ['Strategie', 'Integration', 'Beratung'],
  },
  {
    id: 'software-entwicklung',
    title: 'Software-Entwicklung',
    description: 'Software-Entwicklung und technische Unterstützung',
    icon: 'Terminal',
    tags: ['JavaScript', 'TypeScript', 'Python'],
  },
]

// Process Steps
export const PROCESS_STEPS = [
  {
    id: 1,
    title: 'Analyse',
    description: 'Wir analysieren Ihre aktuellen Prozesse und identifizieren KI-Potenziale',
  },
  {
    id: 2,
    title: 'Konzeption',
    description: 'Entwicklung einer massgeschneiderten KI-Strategie für Ihr Unternehmen',
  },
  {
    id: 3,
    title: 'Umsetzung',
    description: 'Implementierung der KI-Lösung mit kontinuierlichem Feedback',
  },
  {
    id: 4,
    title: 'Optimierung',
    description: 'Laufende Verbesserung und Anpassung an Ihre Bedürfnisse',
  },
]

// Color Palette (for reference)
export const COLORS = {
  primary: {
    DEFAULT: '#0A4D4E',
    light: '#1A7A7A',
    lighter: '#2D9B9B',
  },
  accent: {
    DEFAULT: '#F59E0B',
    dark: '#EA580C',
  },
  neutral: {
    charcoal: '#1F2937',
    slate: '#475569',
    lightGray: '#E2E8F0',
    offWhite: '#F8FAFC',
  },
}
