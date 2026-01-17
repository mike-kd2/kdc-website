# KI-Beratungswebsite – Vollständige Spezifikation
## Projektübersicht

### Geschäftsziel
Eine professionelle Website für eine KI-Beratung, die kleinen und mittelständischen Unternehmen (KMU) dabei hilft, KI in ihre Geschäftsprozesse zu integrieren.

### Kerndienstleistungen
- KI-Prompt-Engineering (Video & Bild)
- Low- bis Mid-Level-Anwendungsentwicklung
- KI-Integrationsberatung für KMU
- Junior-Software-Entwicklung

### Differenzierungsmerkmale
- **Nicht-generisches Design**: Abgrenzung von typischen KI-Beratungswebsites
- **Vertrauenswürdig**: Professionelle Präsentation für Schweizer KMU
- **Technisch kompetent**: Zeigt echte technische Expertise
- **Menschenzentriert**: Betont den individuellen Beratungsansatz

---

## Design-System

### Farbpalette

#### Primärfarben
```
Hauptfarbe (Vertrauen & Innovation):
- Deep Teal: #0A4D4E
- Bright Teal: #1A7A7A
- Light Teal: #2D9B9B

Akzentfarbe (Energie & Handlung):
- Amber: #F59E0B
- Warm Orange: #EA580C
```

#### Sekundärfarben
```
Neutrale Töne:
- Charcoal: #1F2937
- Slate: #475569
- Light Gray: #E2E8F0
- Off-White: #F8FAFC

Unterstützende Farben:
- Success Green: #10B981
- Warning Yellow: #F59E0B
- Info Blue: #3B82F6
```

### Typografie

#### Font Stack
```css
/* Primäre Schriftart - Überschriften */
font-family: 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;

/* Sekundäre Schriftart - Body Text */
font-family: 'Inter', 'Segoe UI', Roboto, sans-serif;

/* Monospace - Code */
font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
```

#### Typografie-Skala
```css
/* Überschriften */
h1: 3.5rem (56px) - font-weight: 700 - line-height: 1.1
h2: 2.5rem (40px) - font-weight: 700 - line-height: 1.2
h3: 2rem (32px) - font-weight: 600 - line-height: 1.3
h4: 1.5rem (24px) - font-weight: 600 - line-height: 1.4

/* Body */
Large: 1.25rem (20px) - font-weight: 400 - line-height: 1.6
Base: 1rem (16px) - font-weight: 400 - line-height: 1.5
Small: 0.875rem (14px) - font-weight: 400 - line-height: 1.5
```

### Spacing-System
```
Base Unit: 4px

Scale:
xs: 4px
sm: 8px
md: 16px
lg: 24px
xl: 32px
2xl: 48px
3xl: 64px
4xl: 96px
```

### Border Radius
```
sm: 4px
md: 8px
lg: 16px
xl: 24px
full: 9999px
```

---

## Website-Struktur

### Navigation
```
Logo [Links]
├── Leistungen
├── Über mich
├── Projekte
├── Blog (optional/Phase 2)
├── Discovery Call [Hervorgehoben]
└── Kontakt [CTA Button]
```

**Hinweis:** Der Discovery Call Link kann entweder:
1. Als prominenter Button in der Navigation (empfohlen)
2. Als Teil der Standard-Navigation mit visueller Hervorhebung
3. Als Sticky/Fixed Button am Bildschirmrand (für maximale Sichtbarkeit)

### Seitenübersicht

#### 1. Home (Landing Page)
- Hero Section
- Service-Übersicht (3-4 Hauptbereiche)
- Vertrauenselemente (Logos, Testimonials)
- Prozess-Übersicht
- CTA Section

#### 2. Leistungen
- Detaillierte Service-Beschreibungen
- Preismodelle/Pakete
- Technologie-Stack
- Fallbeispiele pro Service

#### 3. Über mich
- Persönliche Story
- Expertise & Qualifikationen
- Arbeitsweise & Philosophie
- Zertifikate/Referenzen

#### 4. Projekte/Portfolio
- Case Studies
- Erfolgsgeschichten
- Technische Details
- Ergebnisse & Metriken

#### 5. Kontakt
- Kontaktformular
- Kalender-Integration (TidyCal)
- Kontaktinformationen
- Social Links

---

## Komponenten-Bibliothek

### Hero Section
```jsx
<Hero>
  <Badge>KI-Integration für KMU</Badge>
  <Headline>
    Bringen Sie KI in Ihr Geschäft – 
    praktisch, umsetzbar, messbar
  </Headline>
  <Subheadline>
    Von Prompt-Engineering bis zur individuellen 
    Anwendungsentwicklung – ich helfe Ihnen, 
    KI-Technologie gewinnbringend einzusetzen.
  </Subheadline>
  <CTAGroup>
    <PrimaryButton>Erstgespräch vereinbaren</PrimaryButton>
    <SecondaryButton>Leistungen entdecken</SecondaryButton>
  </CTAGroup>
</Hero>
```

**Visuelles Element**: Animierter Gradienten-Hintergrund mit subtilen geometrischen Formen oder ein interaktives Canvas mit Partikeln, die KI-Konnektivität symbolisieren.

### Service Cards
```jsx
<ServiceCard>
  <Icon>Custom SVG oder Lucide Icon</Icon>
  <Title>KI-Prompt-Engineering</Title>
  <Description>
    Optimierung von Text-, Bild- und Video-Prompts 
    für maximale Ergebnisqualität
  </Description>
  <TagList>
    <Tag>ChatGPT</Tag>
    <Tag>Midjourney</Tag>
    <Tag>Stable Diffusion</Tag>
  </TagList>
  <Link>Mehr erfahren →</Link>
</ServiceCard>
```

### Process Timeline
```jsx
<ProcessTimeline>
  <Step number="01">
    <Title>Analyse</Title>
    <Description>Wir identifizieren KI-Potenziale in Ihren Prozessen</Description>
  </Step>
  <Step number="02">
    <Title>Konzeption</Title>
    <Description>Entwicklung einer maßgeschneiderten KI-Strategie</Description>
  </Step>
  <Step number="03">
    <Title>Umsetzung</Title>
    <Description>Implementierung und Integration der Lösung</Description>
  </Step>
  <Step number="04">
    <Title>Optimierung</Title>
    <Description>Kontinuierliche Verbesserung und Support</Description>
  </Step>
</ProcessTimeline>
```

### Testimonial Card
```jsx
<TestimonialCard>
  <Quote>
    "Dank der KI-Integration konnten wir unsere 
    Content-Produktion um 300% steigern, ohne 
    zusätzliches Personal."
  </Quote>
  <Author>
    <Avatar src="..." />
    <Name>Max Mustermann</Name>
    <Position>CEO, MusterFirma AG</Position>
  </Author>
</TestimonialCard>
```

### KI-Discovery Call Booking Section
```jsx
<DiscoveryCallSection>
  <Badge variant="primary">Kostenlos & Unverbindlich</Badge>
  <Headline>Starten Sie mit einem KI-Discovery Call</Headline>
  <Description>
    In 30 Minuten analysieren wir Ihr KI-Potenzial und zeigen 
    Ihnen konkrete Quick Wins für Ihr Unternehmen.
  </Description>
  
  <BenefitsList>
    <Benefit>
      <Icon><CheckCircleIcon /></Icon>
      <Text>Kostenlose KI-Potenzialanalyse</Text>
    </Benefit>
    <Benefit>
      <Icon><CheckCircleIcon /></Icon>
      <Text>Konkrete Anwendungsfälle für Ihr Business</Text>
    </Benefit>
    <Benefit>
      <Icon><CheckCircleIcon /></Icon>
      <Text>Keine Verpflichtungen</Text>
    </Benefit>
  </BenefitsList>
  
  <CTAButton 
    href="https://tidycal.com/klauserdesignscoaching/discovery-call"
    target="_blank"
    rel="noopener noreferrer"
  >
    <CalendarIcon />
    Discovery Call buchen
  </CTAButton>
  
  <TrustNote>
    <ClockIcon />
    Verfügbare Termine in den nächsten 7 Tagen
  </TrustNote>
</DiscoveryCallSection>

/* Styling für prominente Platzierung */
.discovery-call-section {
  background: linear-gradient(135deg, #0A4D4E 0%, #1A7A7A 100%);
  color: white;
  padding: 4rem 2rem;
  border-radius: 1.5rem;
  position: relative;
  overflow: hidden;
}

.discovery-call-section::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  animation: pulse 15s infinite;
}

.discovery-cta-button {
  background: white;
  color: #0A4D4E;
  font-weight: 700;
  font-size: 1.25rem;
  padding: 1.25rem 3rem;
  border-radius: 0.75rem;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.discovery-cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  background: #F59E0B;
  color: white;
}
```

### CTA Section (Alternative/Additional)
```jsx
<CTASection>
  <Headline>Bereit für den nächsten Schritt?</Headline>
  <Description>
    Lassen Sie uns in einem unverbindlichen Gespräch 
    erkunden, wie KI Ihr Geschäft voranbringen kann.
  </Description>
  <Button 
    href="https://tidycal.com/klauserdesignscoaching/discovery-call"
    target="_blank"
  >
    Kostenloses Erstgespräch buchen
  </Button>
</CTASection>
```

---

## Technischer Stack

### Frontend
```
Framework: React 18+ oder Next.js 14+
Styling: Tailwind CSS 3.4+
Animationen: Framer Motion
Icons: Lucide React
Forms: React Hook Form + Zod
```

### Backend/Services
```
Hosting: Vercel (vercel.com)
Domain: klauserdesigns.ch
CMS (optional): Sanity.io oder Contentful
Forms: Formspree oder Netlify Forms
Analytics: Plausible oder Google Analytics
Kalender: TidyCal (https://tidycal.com/klauserdesignscoaching/discovery-call)
Email: michael@klauserdesigns.ch
```

### Development Tools
```
Package Manager: pnpm
Linting: ESLint + Prettier
Type Checking: TypeScript
Version Control: Git + GitHub
```

---

## Seitenspezifische Wireframes

### Home Page Layout
```
┌─────────────────────────────────────┐
│ Navigation Bar                       │
├─────────────────────────────────────┤
│                                      │
│         Hero Section                 │
│    [Headline + CTA Buttons]          │
│                                      │
├─────────────────────────────────────┤
│                                      │
│ ⭐ KI DISCOVERY CALL SECTION ⭐      │
│  [Prominent Booking CTA]             │
│  [mit TidyCal-Link]                  │
│                                      │
├─────────────────────────────────────┤
│                                      │
│    Vertrauensanker                   │
│  [Logos / Kurz-Testimonials]         │
│                                      │
├─────────────────────────────────────┤
│                                      │
│    Service-Übersicht                 │
│  [3-4 Service Cards in Grid]         │
│                                      │
├─────────────────────────────────────┤
│                                      │
│    Wie ich arbeite                   │
│    [Process Timeline]                │
│                                      │
├─────────────────────────────────────┤
│                                      │
│    Business Audit Formular           │
│  [Lead-Generierungs-Formular]        │
│                                      │
├─────────────────────────────────────┤
│                                      │
│    Featured Projekte                 │
│  [2-3 Case Study Previews]           │
│                                      │
├─────────────────────────────────────┤
│                                      │
│    CTA Section                       │
│  [Erneuter Discovery Call CTA]       │
│                                      │
├─────────────────────────────────────┤
│         Footer                       │
│  [Links, Kontakt, Social]            │
└─────────────────────────────────────┘
```

**Notiz zur Platzierung:** Die Discovery Call Section wird prominent direkt nach dem Hero platziert, um maximale Sichtbarkeit zu gewährleisten. Dies ist der primäre Conversion-Punkt für qualifizierte Leads.

---

## Content-Strategie

### Headline-Beispiele (Hero Section)
1. "KI-Integration, die funktioniert – für Schweizer KMU"
2. "Von der Idee zur KI-Lösung – in Wochen, nicht Monaten"
3. "Ihr Partner für praktische KI-Implementierung"
4. "KI-Beratung mit technischem Tiefgang"

### Service-Beschreibungen Template
```markdown
## [Service Name]

### Was Sie bekommen
[Konkrete Deliverables]

### Für wen ist das ideal?
[Zielgruppe definieren]

### Typische Projekte
- Beispiel 1
- Beispiel 2
- Beispiel 3

### Technologien
[Verwendete Tools/Frameworks]

### Investition
[Preisrange oder "Auf Anfrage"]
```

---

## Animations-Konzepte

### Page Transitions
```javascript
// Fade in on scroll
fadeInOnScroll: {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

// Stagger children
staggerContainer: {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}
```

### Hover States
```css
/* Card Hover */
.service-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

/* Button Hover */
.cta-button:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(245, 158, 11, 0.3);
}
```

---

## SEO & Performance

### Meta Tags Template
```html
<title>KI-Beratung für KMU | Michael Klauser | Schweiz</title>
<meta name="description" content="Professionelle KI-Integration für Schweizer KMU. Von Prompt-Engineering bis App-Entwicklung – massgeschneiderte Lösungen für Ihr Business.">
<meta name="keywords" content="KI Beratung Schweiz, KI Consulting, Prompt Engineering, KI Integration KMU">
<link rel="canonical" href="https://klauserdesigns.ch" />
```

### Performance Goals
```
- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Cumulative Layout Shift: < 0.1
```

---

## TidyCal Integration Details

### Discovery Call Booking-Optionen

#### Option 1: Inline-Einbettung (empfohlen)
```jsx
<DiscoveryCallContainer>
  {/* Direkte iframe-Einbettung für nahtlose UX */}
  <iframe
    src="https://tidycal.com/klauserdesignscoaching/discovery-call"
    width="100%"
    height="800px"
    frameBorder="0"
    title="KI-Discovery Call buchen"
  />
</DiscoveryCallContainer>
```

#### Option 2: Externer Link mit CTA
```jsx
<DiscoveryCallCTA
  href="https://tidycal.com/klauserdesignscoaching/discovery-call"
  target="_blank"
  rel="noopener noreferrer"
>
  <CalendarIcon />
  Discovery Call buchen
</DiscoveryCallCTA>
```

#### Option 3: Sticky Floating Button
```jsx
<StickyBookingButton
  href="https://tidycal.com/klauserdesignscoaching/discovery-call"
  target="_blank"
  position="bottom-right"
>
  <CalendarIcon />
  <span className="button-text">Discovery Call</span>
</StickyBookingButton>

/* Styling */
.sticky-booking-button {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
  background: linear-gradient(135deg, #F59E0B 0%, #EA580C 100%);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 50px;
  box-shadow: 0 10px 30px rgba(245, 158, 11, 0.4);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.sticky-booking-button:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 15px 40px rgba(245, 158, 11, 0.6);
}

/* Pulsing animation for attention */
@keyframes pulse {
  0%, 100% {
    box-shadow: 0 10px 30px rgba(245, 158, 11, 0.4);
  }
  50% {
    box-shadow: 0 10px 40px rgba(245, 158, 11, 0.7);
  }
}

.sticky-booking-button {
  animation: pulse 2s infinite;
}
```

### Discovery Call Section - Detailliertes Layout

#### Full-Width Variante (prominenter)
```jsx
<DiscoverySection className="full-width">
  <Container>
    <Content>
      <LeftColumn>
        <Badge>Kostenlos & Unverbindlich</Badge>
        <Headline>Bereit, KI in Ihrem Business einzusetzen?</Headline>
        <Description>
          Buchen Sie jetzt einen 30-minütigen Discovery Call. 
          Wir analysieren Ihre individuellen Herausforderungen 
          und zeigen Ihnen konkrete KI-Anwendungsfälle.
        </Description>
        
        <BenefitsList>
          <Benefit>
            <CheckIcon />
            <div>
              <Title>Kostenlose Potenzialanalyse</Title>
              <Text>Identifizieren Sie die besten KI-Chancen</Text>
            </div>
          </Benefit>
          
          <Benefit>
            <CheckIcon />
            <div>
              <Title>Konkrete Quick Wins</Title>
              <Text>Sofort umsetzbare Maßnahmen</Text>
            </div>
          </Benefit>
          
          <Benefit>
            <CheckIcon />
            <div>
              <Title>Unverbindlich & Vertraulich</Title>
              <Text>Keine Verpflichtungen, 100% diskret</Text>
            </div>
          </Benefit>
        </BenefitsList>
        
        <SocialProof>
          <AvatarGroup>
            {/* 3-4 Testimonial-Fotos */}
          </AvatarGroup>
          <Text>
            <strong>20+ Schweizer KMU</strong> haben bereits 
            ihre KI-Strategie mit mir entwickelt
          </Text>
        </SocialProof>
      </LeftColumn>
      
      <RightColumn>
        {/* Entweder iframe ODER visuell ansprechende CTA-Card */}
        <BookingCard>
          <CardHeader>
            <CalendarIcon />
            <Title>Wählen Sie Ihren Wunschtermin</Title>
          </CardHeader>
          
          <Features>
            <Feature>
              <ClockIcon />
              30 Minuten
            </Feature>
            <Feature>
              <VideoIcon />
              Video-Call oder Telefon
            </Feature>
            <Feature>
              <CheckIcon />
              Sofort verfügbar
            </Feature>
          </Features>
          
          <CTAButton
            href="https://tidycal.com/klauserdesignscoaching/discovery-call"
            target="_blank"
          >
            Jetzt Termin buchen
            <ArrowRightIcon />
          </CTAButton>
          
          <TrustBadges>
            <Badge><LockIcon /> DSGVO-konform</Badge>
            <Badge><ShieldIcon /> Vertraulich</Badge>
          </TrustBadges>
        </BookingCard>
      </RightColumn>
    </Content>
  </Container>
</DiscoverySection>
```

### Platzierungs-Strategie

#### Haupt-Placements:
1. **Direkt nach Hero** (höchste Priorität)
   - Maximale Sichtbarkeit
   - Für warme Leads optimal

2. **Sticky Button** (immer sichtbar)
   - Floating Button rechts unten
   - Verfolgung durch gesamte Website

3. **Navigation** (immer erreichbar)
   - Als hervorgehobener Button
   - Unterscheidet sich visuell von anderen Nav-Items

4. **Footer** (letzte Chance)
   - Vor Social Links
   - Nochmaliger Call-to-Action

#### Sekundäre Placements:
- Nach Service-Übersicht
- Nach Case Studies
- In der Sidebar (bei Blog-Posts)

### Analytics & Tracking

```javascript
// Event Tracking für TidyCal-Links
const trackDiscoveryCallClick = () => {
  // Google Analytics
  gtag('event', 'click', {
    'event_category': 'Discovery Call',
    'event_label': 'TidyCal Booking',
    'value': 1
  });
  
  // Plausible Analytics (privacy-friendly)
  plausible('Discovery Call Click');
};

<BookingButton
  onClick={trackDiscoveryCallClick}
  href="https://tidycal.com/klauserdesignscoaching/discovery-call"
>
  Discovery Call buchen
</BookingButton>
```

### Mobile Optimierung

```jsx
{/* Mobile: Sticky Bottom Bar */}
<MobileBookingBar className="md:hidden">
  <Container>
    <Text>Bereit für KI in Ihrem Business?</Text>
    <Button
      href="https://tidycal.com/klauserdesignscoaching/discovery-call"
      size="compact"
    >
      <CalendarIcon />
      Call buchen
    </Button>
  </Container>
</MobileBookingBar>

/* Styling */
.mobile-booking-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid #E5E7EB;
  padding: 1rem;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
  z-index: 999;
}
```

---

## Implementierungs-Phasen

### Phase 1: MVP (2-3 Wochen)
- Home Page mit Hero, Services, CTA
- Leistungen-Seite
- Kontaktformular
- Responsive Design
- Basic SEO

### Phase 2: Erweiterung (1-2 Wochen)
- Über mich Seite
- Portfolio/Case Studies
- Blog-Setup (optional)
- Erweiterte Animationen
- Performance-Optimierung

### Phase 3: Optimierung (laufend)
- A/B Testing
- Analytics-Integration
- Content-Erweiterung
- SEO-Optimierung
- Conversion-Optimierung

---

## Vercel Deployment

### Deployment-Konfiguration

#### vercel.json
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["fra1"],
  "env": {
    "NEXT_PUBLIC_SITE_URL": "https://klauserdesigns.ch",
    "NEXT_PUBLIC_TIDYCAL_URL": "https://tidycal.com/klauserdesignscoaching/discovery-call"
  }
}
```

#### Domain-Konfiguration
```
Production Domain: klauserdesigns.ch
Preview Domains: *.vercel.app
SSL: Automatisch via Let's Encrypt
CDN: Vercel Edge Network
```

#### Environment Variables (Vercel Dashboard)
```
NEXT_PUBLIC_SITE_URL=https://klauserdesigns.ch
NEXT_PUBLIC_CONTACT_EMAIL=michael@klauserdesigns.ch
NEXT_PUBLIC_TIDYCAL_URL=https://tidycal.com/klauserdesignscoaching/discovery-call

# Optional für Form-Submissions
FORMSPREE_ENDPOINT=your_formspree_id
SENDGRID_API_KEY=your_sendgrid_key (wenn verwendet)

# Analytics
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=klauserdesigns.ch
```

### Deployment-Workflow
```bash
# 1. Repository auf GitHub/GitLab pushen
git push origin main

# 2. Vercel automatisches Deployment
# Jeder Push auf 'main' triggert Production Deployment
# Feature Branches erhalten Preview-URLs

# 3. Custom Domain verbinden
# Im Vercel Dashboard: Settings > Domains
# DNS bei Domain-Provider konfigurieren:
# A Record: 76.76.21.21
# CNAME: cname.vercel-dns.com
```

### Performance-Optimierung für Vercel
```javascript
// next.config.js
module.exports = {
  images: {
    domains: ['klauserdesigns.ch'],
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  // ISR (Incremental Static Regeneration)
  experimental: {
    optimizeCss: true,
  },
}
```

---

## Code-Struktur

### Verzeichnisstruktur
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Process.tsx
│   │   └── CTA.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   └── Input.tsx
│   └── animations/
│       └── FadeIn.tsx
├── pages/
│   ├── index.tsx
│   ├── services.tsx
│   ├── about.tsx
│   ├── projects.tsx
│   └── contact.tsx
├── styles/
│   ├── globals.css
│   └── tailwind.config.js
├── lib/
│   ├── constants.ts
│   └── utils.ts
└── public/
    ├── images/
    └── icons/
```

---

## Design-Prinzipien

### 1. Klarheit vor Komplexität
- Klare Hierarchie
- Fokus auf Kernbotschaft
- Minimaler kognitiver Aufwand

### 2. Vertrauen durch Professionalität
- Hochwertige Visualisierungen
- Konsistentes Design
- Fehlerfreie Umsetzung

### 3. Technische Kompetenz zeigen
- Code-Snippets wo sinnvoll
- Technologie-Badges
- Detaillierte Case Studies

### 4. Menschlich & zugänglich
- Persönliche Story
- Verständliche Sprache
- Empathie für KMU-Herausforderungen

---

## Business Audit Formular

### Konzept
Ein zentrales Lead-Generierungs-Tool, das potenzielle Kunden durch einen strukturierten Fragebogen führt, um ihr KI-Potenzial zu bewerten. Das Formular positioniert Sie als Experten und sammelt qualifizierte Leads.

### Formular-Felder

#### Kontaktinformationen
```jsx
<FormSection title="Ihre Kontaktdaten">
  <InputField 
    name="firstName" 
    label="Vorname" 
    type="text" 
    required 
    placeholder="Max"
  />
  
  <InputField 
    name="lastName" 
    label="Nachname" 
    type="text" 
    required 
    placeholder="Mustermann"
  />
  
  <InputField 
    name="email" 
    label="E-Mail-Adresse" 
    type="email" 
    required 
    placeholder="max.mustermann@firma.ch"
  />
  
  <InputField 
    name="phone" 
    label="Telefonnummer" 
    type="tel" 
    optional 
    placeholder="+41 79 123 45 67"
  />
</FormSection>
```

#### Unternehmensinformationen
```jsx
<FormSection title="Über Ihr Unternehmen">
  <InputField 
    name="companyName" 
    label="Firmenname" 
    type="text" 
    required 
    placeholder="Musterfirma AG"
  />
  
  <TextAreaField 
    name="companyDescription" 
    label="Was macht Ihr Unternehmen?" 
    required 
    rows={4}
    placeholder="Beschreiben Sie kurz Ihre Geschäftstätigkeit, Produkte oder Dienstleistungen..."
    maxLength={500}
  />
  
  <SelectField 
    name="companySize" 
    label="Unternehmensgröße" 
    options={[
      "1-5 Mitarbeiter",
      "6-20 Mitarbeiter",
      "21-50 Mitarbeiter",
      "51-200 Mitarbeiter",
      "200+ Mitarbeiter"
    ]}
  />
  
  <SelectField 
    name="industry" 
    label="Branche" 
    options={[
      "IT & Software",
      "E-Commerce",
      "Beratung",
      "Marketing & Werbung",
      "Produktion",
      "Gesundheitswesen",
      "Bildung",
      "Andere"
    ]}
  />
</FormSection>
```

#### KI-Readiness-Fragen (optional, aber empfohlen)
```jsx
<FormSection title="Ihr KI-Potenzial" subtitle="Optional - hilft uns, Sie besser zu beraten">
  <CheckboxGroup 
    name="currentChallenges" 
    label="Welche Herausforderungen haben Sie aktuell?"
    options={[
      "Zeitaufwändige manuelle Prozesse",
      "Content-Erstellung dauert zu lange",
      "Datenanalyse ist kompliziert",
      "Kundenservice skaliert nicht",
      "Fehlende technische Expertise",
      "Unklarer ROI von KI-Investitionen"
    ]}
  />
  
  <SelectField 
    name="aiExperience" 
    label="Wie viel Erfahrung haben Sie mit KI?"
    options={[
      "Keine Erfahrung",
      "Erste Experimente",
      "Einzelne Tools im Einsatz",
      "Mehrere KI-Lösungen aktiv",
      "KI ist zentral in unserer Strategie"
    ]}
  />
  
  <TextAreaField 
    name="specificNeeds" 
    label="Was möchten Sie mit KI erreichen?" 
    rows={4}
    placeholder="Beschreiben Sie Ihre Vision oder konkrete Anwendungsfälle..."
    maxLength={1000}
  />
</FormSection>
```

### CTA Button Design
```jsx
<SubmitButton variant="audit">
  <ButtonContent>
    <Icon>
      <SparklesIcon /> {/* Lucide React Icon */}
    </Icon>
    <ButtonText>
      AUDIT MY BUSINESS
    </ButtonText>
  </ButtonContent>
</SubmitButton>

/* Styling */
.audit-button {
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  color: white;
  font-weight: 700;
  font-size: 1.125rem;
  letter-spacing: 0.05em;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
  transition: all 0.3s ease;
  text-transform: uppercase;
}

.audit-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 40px rgba(16, 185, 129, 0.4);
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
}

.audit-button:active {
  transform: translateY(0);
}
```

### Formular-Layout-Varianten

#### Variante A: Einseitig (Empfohlen für MVP)
```
┌─────────────────────────────────────┐
│   KI-Potenzial-Check für Ihr        │
│         Unternehmen                  │
│                                      │
│   [Kurze Beschreibung: 2-3 Sätze]   │
├─────────────────────────────────────┤
│                                      │
│   Ihre Kontaktdaten                  │
│   ┌──────────────┐ ┌──────────────┐ │
│   │ Vorname      │ │ Nachname     │ │
│   └──────────────┘ └──────────────┘ │
│   ┌────────────────────────────────┐ │
│   │ E-Mail                         │ │
│   └────────────────────────────────┘ │
│   ┌────────────────────────────────┐ │
│   │ Telefon (optional)             │ │
│   └────────────────────────────────┘ │
│                                      │
├─────────────────────────────────────┤
│                                      │
│   Über Ihr Unternehmen               │
│   ┌────────────────────────────────┐ │
│   │ Firmenname                     │ │
│   └────────────────────────────────┘ │
│   ┌────────────────────────────────┐ │
│   │ Was macht Ihr Unternehmen?     │ │
│   │                                │ │
│   │                                │ │
│   └────────────────────────────────┘ │
│                                      │
├─────────────────────────────────────┤
│                                      │
│     ┌──────────────────────────┐    │
│     │ ✨ AUDIT MY BUSINESS    │    │
│     └──────────────────────────┘    │
│                                      │
│   🔒 Ihre Daten sind sicher          │
│                                      │
└─────────────────────────────────────┘
```

#### Variante B: Multi-Step (Phase 2)
```javascript
// Step Indicator Component
<StepIndicator>
  <Step active>1. Kontakt</Step>
  <Step>2. Unternehmen</Step>
  <Step>3. KI-Potenzial</Step>
</StepIndicator>

// Progressive Disclosure
- Schritt 1: Kontaktdaten
- Schritt 2: Firmendaten
- Schritt 3: KI-Readiness-Fragen
- Schritt 4: Zusammenfassung & Submit
```

### Formular-Platzierung auf der Website

#### Option 1: Dedizierte Landing Page
```
URL: /ki-potenzial-check oder /business-audit
- Vollständiger Fokus auf das Formular
- Ideal für Werbekampagnen
- Weniger Ablenkung = höhere Conversion
```

#### Option 2: Sektion auf Homepage
```
Platzierung: Nach "Services" oder "Process"
- Teil des natürlichen Flows
- Immer sichtbar für alle Besucher
- Geringere Schwelle zur Kontaktaufnahme
```

#### Option 3: Popup/Modal (nicht empfohlen für MVP)
```
- Exit-Intent-Popup
- Nach X Sekunden auf der Seite
- Kann als aufdringlich empfunden werden
```

### Backend-Integration (für spätere Implementierung)

#### Email-Benachrichtigung
```javascript
// Formspree / Netlify Forms / SendGrid
{
  to: "michael@klauserdesigns.ch",
  subject: "Neues Business Audit: [Firmenname]",
  template: "audit-notification",
  data: {
    firstName,
    lastName,
    company,
    email,
    phone,
    // ... weitere Felder
  }
}
```

#### Auto-Response für Benutzer
```
Betreff: Vielen Dank für Ihr Interesse – Nächste Schritte

Liebe/r [Vorname],

vielen Dank für Ihr Interesse an einer KI-Potenzialanalyse 
für [Firmenname].

Ich habe Ihre Anfrage erhalten und werde mich innerhalb 
von 24 Stunden bei Ihnen melden, um die nächsten Schritte 
zu besprechen.

In der Zwischenzeit können Sie sich gerne auf meiner 
Website umschauen: [Link zu Case Studies]

Beste Grüsse,
Michael Klauser

---
klauser designs & coaching
KI-Integration für KMU
```

#### CRM-Integration (optional)
```
- HubSpot
- Pipedrive
- Notion Database
- Airtable
- Google Sheets
```

### Validation Rules

```javascript
const auditFormSchema = z.object({
  // Required fields
  firstName: z.string()
    .min(2, "Vorname muss mindestens 2 Zeichen haben")
    .max(50, "Vorname zu lang"),
  
  lastName: z.string()
    .min(2, "Nachname muss mindestens 2 Zeichen haben")
    .max(50, "Nachname zu lang"),
  
  email: z.string()
    .email("Bitte geben Sie eine gültige E-Mail-Adresse ein")
    .regex(/@/, "E-Mail muss ein @ enthalten"),
  
  companyName: z.string()
    .min(2, "Firmenname muss mindestens 2 Zeichen haben")
    .max(100, "Firmenname zu lang"),
  
  companyDescription: z.string()
    .min(20, "Bitte beschreiben Sie Ihr Unternehmen etwas ausführlicher")
    .max(500, "Beschreibung zu lang (max. 500 Zeichen)"),
  
  // Optional fields
  phone: z.string().optional()
    .refine(
      (val) => !val || /^[\+]?[(]?[0-9]{1,3}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/.test(val),
      "Bitte geben Sie eine gültige Telefonnummer ein"
    ),
  
  companySize: z.enum([...companySizeOptions]).optional(),
  industry: z.enum([...industryOptions]).optional(),
});
```

### Success State

```jsx
<SuccessMessage>
  <CheckIcon className="success-icon" />
  <Headline>Vielen Dank!</Headline>
  <Message>
    Ihre Anfrage wurde erfolgreich übermittelt. 
    Ich melde mich innerhalb von 24 Stunden bei Ihnen.
  </Message>
  <CTAGroup>
    <SecondaryButton onClick={resetForm}>
      Weitere Anfrage senden
    </SecondaryButton>
    <PrimaryButton href="/">
      Zur Startseite
    </PrimaryButton>
  </CTAGroup>
</SuccessMessage>
```

### Error Handling

```jsx
<ErrorMessage>
  <AlertIcon />
  <Message>
    Beim Absenden ist ein Fehler aufgetreten. 
    Bitte versuchen Sie es erneut oder kontaktieren 
    Sie mich direkt unter: michael@klauserdesigns.ch
  </Message>
  <RetryButton onClick={submitForm}>
    Erneut versuchen
  </RetryButton>
</ErrorMessage>
```

### Privacy & DSGVO-Compliance

```jsx
<FormFooter>
  <Checkbox 
    name="privacy" 
    required
    label={
      <>
        Ich habe die <Link href="/datenschutz">Datenschutzerklärung</Link>
        {' '}gelesen und akzeptiere die Verarbeitung meiner Daten.
      </>
    }
  />
  
  <Checkbox 
    name="newsletter" 
    optional
    label="Ich möchte den Newsletter mit KI-Tipps erhalten (optional)"
  />
  
  <PrivacyNote>
    <LockIcon />
    Ihre Daten werden verschlüsselt übertragen und nicht 
    an Dritte weitergegeben.
  </PrivacyNote>
</FormFooter>
```

### Conversion-Optimierung für Formular

#### Trust-Elemente
```jsx
<TrustSignals>
  <Signal>
    <Icon><ClockIcon /></Icon>
    <Text>Antwort in 24h</Text>
  </Signal>
  
  <Signal>
    <Icon><ShieldIcon /></Icon>
    <Text>100% vertraulich</Text>
  </Signal>
  
  <Signal>
    <Icon><CheckIcon /></Icon>
    <Text>Unverbindlich</Text>
  </Signal>
</TrustSignals>
```

#### Micro-Copy Optimierung
```
Statt: "Submit"
Besser: "AUDIT MY BUSINESS" ✅

Statt: "E-Mail-Adresse"
Besser: "Ihre geschäftliche E-Mail" ✅

Statt: "Telefonnummer"
Besser: "Telefon (für Rückfragen, optional)" ✅
```

---

## Conversion-Optimierung

### Primäre CTAs (Hierarchie)
1. **"Discovery Call buchen"** (Hero + Dedizierte Section) ⭐ HAUPT-CONVERSION-PUNKT
   - Link: https://tidycal.com/klauserdesignscoaching/discovery-call
   - Platzierung: Prominent nach Hero, in Navigation, am Seitenende
   
2. **"AUDIT MY BUSINESS"** (Business-Audit-Formular) ⭐ Lead-Generator
   - Für detaillierte Qualifizierung
   - Mittlere Conversion-Stufe

3. **"Jetzt Kontakt aufnehmen"** (Footer)
   - Alternative für direkten Kontakt
   - Niedrigschwellig

4. **"Projekt besprechen"** (Service-Seiten)
   - Service-spezifische CTAs
   - Nach Content-Konsum

### Trust-Builder
- Kundenbewertungen/Testimonials
- Case Studies mit Metriken
- Zertifikate/Qualifikationen
- "Bekannt aus" / Partner-Logos (falls vorhanden)
- Transparente Preisgestaltung

### Lead-Magnets (optional)
- Kostenloser KI-Readiness-Check
- Whitepaper "KI für KMU"
- Checkliste "10 KI-Quick-Wins"

---

## Responsiveness

### Breakpoints
```css
/* Mobile First */
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet portrait */
lg: 1024px  /* Tablet landscape / Small desktop */
xl: 1280px  /* Desktop */
2xl: 1536px /* Large desktop */
```

### Mobile Prioritäten
- Touch-optimierte Buttons (min. 44x44px)
- Vereinfachte Navigation (Hamburger Menu)
- Reduzierte Animationen für Performance
- Thumb-friendly CTA-Platzierung

---

## Accessibility (WCAG 2.1 Level AA)

### Checkliste
- [ ] Farbkontrast min. 4.5:1 (Text)
- [ ] Farbkontrast min. 3:1 (UI-Elemente)
- [ ] Keyboard-Navigation vollständig
- [ ] ARIA-Labels für interaktive Elemente
- [ ] Alt-Texte für alle Bilder
- [ ] Focus-States sichtbar
- [ ] Kein Text in Bildern
- [ ] Responsive Text-Skalierung

---

## Next Steps

### Sofort starten
1. ✅ Design-System & Spezifikation erstellt
2. ⬜ Development-Environment aufsetzen
3. ⬜ Content vorbereiten (Texte, Bilder)
4. ⬜ Komponenten-Bibliothek bauen
5. ⬜ Seiten zusammenstellen

### Benötigte Assets
- Logo (SVG)
- Profilbild/Foto
- Service-Icons (können von Lucide React verwendet werden)
- Optional: Projekt-Screenshots
- Optional: Kunden-Logos (mit Erlaubnis)

### Offene Fragen zu klären
1. Bevorzugte Technologie: React oder Next.js? (Empfehlung: Next.js für Vercel)
2. Domain klauserdesigns.ch bereits bei Vercel verbunden?
3. SSL-Zertifikat automatisch über Vercel?
4. Brauchen Sie ein CMS für Blog/Content?
5. Budget für Premium-Services (z.B. TidyCal Pro)?

---

**Autor**: Claude Sonnet 4.5  
**Projekt**: klauserdesigns.ch (Vercel Hosting)  
**Erstellt**: Januar 2025  
**Version**: 1.1  
**Status**: Produktionsbereit für Implementierung  
**Kontakt**: michael@klauserdesigns.ch
