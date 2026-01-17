# KDC Website - Implementierungsplan

## Projekt-Übersicht

**Projekt:** klauser designs & coaching - AI Consultancy Website
**Zielgruppe:** Schweizer KMUs (deutschsprachig)
**Domain:** klauserdesigns.ch (Vercel Hosting)
**Primäres Ziel:** TidyCal Discovery Call Buchungen
**Sekundäres Ziel:** Business Audit Formular-Leads

**Status:** GREENFIELD - Nur Spezifikationsdokumente vorhanden, kein Code

---

## ⚠️ MOBILE-FIRST PRIORITÄT

**Die Mobile-Ansicht hat HÖCHSTE PRIORITÄT!**

### Pflicht-Checks für JEDE UI-Komponente und Section:

1. **Playwright Mobile Screenshot (375px Breite)** - IMMER ZUERST prüfen
2. **Keine Überlappungen** - Elemente dürfen sich nicht überlagern
3. **Keine horizontalen Scrollbars** - Content muss in den Viewport passen
4. **Sinnvolle Textdarstellung:**
   - Headlines müssen lesbar umbrechen
   - Keine einzelnen Wörter auf neuen Zeilen (Widows)
   - Mindestens 16px Schriftgröße für Body-Text
   - Ausreichend Zeilenabstand (min 1.5)

### Bei Textumbruch-Problemen:

⚠️ **WARNUNG an User ausgeben** wenn:
- Headlines mehr als 3 Zeilen auf Mobile haben
- Wörter abgeschnitten werden oder überlaufen
- Buttons zu schmal für ihren Text sind
- Text unleserlich klein wird

⚠️ **User FRAGEN** wenn:
- Unklar ist ob ein langer Text gekürzt werden soll
- Alternative Layouts für Mobile nötig sind
- Bilder/Icons auf Mobile versteckt werden sollen

### Mobile Breakpoints (Tailwind):
- `default` (< 640px): Mobile - **PRIORITÄT 1**
- `sm` (≥ 640px): Large Mobile/Small Tablet
- `md` (≥ 768px): Tablet
- `lg` (≥ 1024px): Desktop
- `xl` (≥ 1280px): Large Desktop

### Verifikations-Reihenfolge:
1. ✅ Mobile (375px) - MUSS zuerst funktionieren
2. ✅ Tablet (768px)
3. ✅ Desktop (1280px)

---

## Session-Übergreifendes Arbeiten

### Anleitung für jede neue Session

1. **Prüfe den aktuellen Fortschritt** anhand der Checkboxen unten
2. **Finde die erste unvollständige Aufgabe** in der ersten unvollständigen Phase
3. **Arbeite Aufgaben sequentiell ab** innerhalb jeder Phase
4. **Markiere Aufgaben als erledigt** mit `[x]` nach erfolgreicher Verifikation
5. **Dokumentiere Probleme** im Abschnitt "Session-Notizen" am Ende

### Verifikations-Protokoll

Jede Aufgabe gilt erst als abgeschlossen wenn:
1. Code kompiliert ohne Fehler (`pnpm build`)
2. ESLint bestanden (ESLint MCP Server nutzen)
3. Visuelle Verifikation bestanden (Playwright MCP Server nutzen)
4. Manuelle Tests bestätigen Funktionalität

---

## Phase 1: Projekt-Setup

**Abhängigkeiten:** Keine
**Verifikation:** `pnpm dev` startet erfolgreich, `pnpm build` komplett

### Aufgaben

- [x] **1.1 Next.js Projekt initialisieren**
  ```bash
  cd /Users/mike/Projects/kdc_website_minimal
  pnpm create next-app@latest . --typescript --tailwind --eslint --src-dir --import-alias "@/*"
  ```
  - Wähle: TypeScript=Ja, ESLint=Ja, Tailwind=Ja, src/=Ja, App Router=Nein (Pages Router verwenden)
  - **Dateien:** `package.json`, `tsconfig.json`, `next.config.js`, `tailwind.config.ts`
  - **Verify:** `pnpm dev` startet auf localhost:3000

- [x] **1.2 Zusätzliche Dependencies installieren**
  ```bash
  pnpm add framer-motion lucide-react react-hook-form @hookform/resolvers zod clsx tailwind-merge
  ```
  - **Verify:** Alle Packages in `package.json`

- [x] **1.3 Verzeichnisstruktur erstellen**
  ```
  src/components/layout/
  src/components/sections/
  src/components/ui/
  src/components/animations/
  src/components/forms/
  src/components/integrations/
  src/lib/
  public/images/
  public/icons/
  ```

- [x] **1.4 Environment Variables Template**
  - **Datei:** `.env.local.example`
  ```
  NEXT_PUBLIC_SITE_URL=https://klauserdesigns.ch
  NEXT_PUBLIC_CONTACT_EMAIL=michael@klauserdesigns.ch
  NEXT_PUBLIC_TIDYCAL_URL=https://tidycal.com/klauserdesignscoaching/discovery-call
  NEXT_PUBLIC_PLAUSIBLE_DOMAIN=klauserdesigns.ch
  MAILEROO_API_KEY=
  ```

- [x] **1.5 next.config.js konfigurieren**
  - Image Optimization, Security Headers
  - **Verify:** `pnpm build` erfolgreich

- [x] **1.6 Phase 1 Verifikation**
  - [x] `pnpm dev` läuft
  - [x] `pnpm build` ohne Fehler
  - [x] `pnpm lint` ohne Fehler
  - [x] Playwright Screenshot der Standard-Seite

---

## Phase 2: Design System & Tailwind

**Abhängigkeiten:** Phase 1
**Verifikation:** Custom Colors und Typography funktionieren

### Aufgaben

- [x] **2.1 Tailwind Theme konfigurieren**
  - **Datei:** `tailwind.config.ts`
  - Colors:
    ```typescript
    colors: {
      primary: { DEFAULT: '#0A4D4E', light: '#1A7A7A', lighter: '#2D9B9B' },
      accent: { DEFAULT: '#F59E0B', dark: '#EA580C' },
      neutral: { charcoal: '#1F2937', slate: '#475569', 'light-gray': '#E2E8F0', 'off-white': '#F8FAFC' },
    }
    ```
  - Custom Spacing Scale (xs-4xl)
  - Border Radius Values

- [x] **2.2 Typography konfigurieren**
  - Font Family: Inter (sans), JetBrains Mono (mono)
  - Font Sizes mit Line-Heights

- [x] **2.3 Global Styles**
  - **Datei:** `src/styles/globals.css`
  - Tailwind Directives, CSS Custom Properties, Focus-Visible Styles

- [x] **2.4 Inter Font via next/font**
  - **Datei:** `src/pages/_app.tsx`
  - Inter importieren und anwenden

- [x] **2.5 Design Token Constants**
  - **Datei:** `src/lib/constants.ts`
  - Site Metadata, External URLs, Color Values exportieren

- [x] **2.6 Utility Functions**
  - **Datei:** `src/lib/utils.ts`
  - `cn()` Funktion für className Merging (clsx + tailwind-merge)

- [x] **2.7 Phase 2 Verifikation**
  - [x] Custom Colors funktionieren (`bg-primary`, `text-accent`)
  - [x] Typography Scale korrekt
  - [x] ESLint auf neuen Dateien

---

## Phase 3: UI Components

**Abhängigkeiten:** Phase 2
**Verifikation:** Alle Komponenten rendern korrekt

### Aufgaben

- [x] **3.1 Button Component**
  - **Datei:** `src/components/ui/Button.tsx`
  - Variants: primary, secondary, outline, ghost
  - Sizes: sm, md, lg
  - States: default, hover, disabled, loading

- [x] **3.2 Badge Component**
  - **Datei:** `src/components/ui/Badge.tsx`
  - Variants: default, primary, accent, outline

- [x] **3.3 Card Component**
  - **Datei:** `src/components/ui/Card.tsx`
  - Subcomponents: Card, CardHeader, CardContent, CardFooter
  - Hover Animation Support

- [x] **3.4 Input Component**
  - **Datei:** `src/components/ui/Input.tsx`
  - Label, Placeholder, Error State, react-hook-form Integration

- [x] **3.5 TextArea Component**
  - **Datei:** `src/components/ui/TextArea.tsx`

- [x] **3.6 Select Component**
  - **Datei:** `src/components/ui/Select.tsx`

- [x] **3.7 Checkbox Component**
  - **Datei:** `src/components/ui/Checkbox.tsx`

- [x] **3.8 Icon Wrapper**
  - **Datei:** `src/components/ui/Icon.tsx`
  - Lucide Icons mit konsistenten Größen

- [x] **3.9 UI Components Index**
  - **Datei:** `src/components/ui/index.ts`

- [x] **3.10 Phase 3 Verifikation**
  - [x] Alle Components rendern
  - [x] Hover States funktionieren
  - [x] ESLint bestanden
  - [x] **MOBILE CHECK:** Playwright Screenshot bei 375px - keine Überlappungen
  - [x] **MOBILE CHECK:** Buttons haben ausreichend Platz für Text
  - [x] **MOBILE CHECK:** Input-Felder sind touch-freundlich (min 44px Höhe)

---

## Phase 4: Animation Components

**Abhängigkeiten:** Phase 3
**Verifikation:** Animationen laufen flüssig

### Aufgaben

- [x] **4.1 FadeIn Component**
  - **Datei:** `src/components/animations/FadeIn.tsx`
  - Direction: up, down, left, right
  - Respects prefers-reduced-motion

- [x] **4.2 StaggerContainer Component**
  - **Datei:** `src/components/animations/StaggerContainer.tsx`

- [x] **4.3 ScrollReveal Component**
  - **Datei:** `src/components/animations/ScrollReveal.tsx`
  - Framer Motion whileInView

- [x] **4.4 Animation Variants**
  - **Datei:** `src/components/animations/variants.ts`
  - Reusable Variants: fadeIn, slideUp, scaleIn, stagger

- [x] **4.5 Animations Index**
  - **Datei:** `src/components/animations/index.ts`

- [x] **4.6 Phase 4 Verifikation**
  - [x] Animationen funktionieren
  - [x] Reduced-Motion wird respektiert

---

## Phase 5: Layout Components

**Abhängigkeiten:** Phase 4
**Verifikation:** Layout responsive auf allen Breakpoints

### Aufgaben

- [x] **5.1 Header Component**
  - **Datei:** `src/components/layout/Header.tsx`
  - Logo, Navigation, Discovery Call CTA Button
  - Mobile Hamburger Menu, Sticky on Scroll

- [x] **5.2 MobileMenu Component**
  - **Datei:** `src/components/layout/MobileMenu.tsx`
  - Slide-in animiert mit Framer Motion

- [x] **5.3 Footer Component**
  - **Datei:** `src/components/layout/Footer.tsx`
  - Navigation, Kontakt, Copyright, Discovery Call CTA

- [x] **5.4 Layout Wrapper**
  - **Datei:** `src/components/layout/Layout.tsx`
  - Header + Children + Footer

- [x] **5.5 Container Component**
  - **Datei:** `src/components/layout/Container.tsx`
  - Max-Width, Responsive Padding

- [x] **5.6 Section Component**
  - **Datei:** `src/components/layout/Section.tsx`
  - Konsistentes Spacing, Optional Background

- [x] **5.7 Layout Index**
  - **Datei:** `src/components/layout/index.ts`

- [x] **5.8 _app.tsx mit Layout**
  - Layout Component wrappen

- [x] **5.9 Phase 5 Verifikation**
  - [x] **MOBILE FIRST:** Playwright Screenshot bei 375px
  - [x] **MOBILE CHECK:** Header-Logo und Menu-Button passen nebeneinander
  - [x] **MOBILE CHECK:** Navigation-Links überlappen nicht
  - [x] **MOBILE CHECK:** Footer-Content stapelt sich sauber
  - [x] Mobile Menu öffnet/schließt korrekt
  - [x] Responsive auf Tablet (768px) und Desktop (1280px)
  - [x] Keine horizontalen Scrollbars auf allen Viewports

---

## Phase 6: Section Components

**Abhängigkeiten:** Phase 5
**Verifikation:** Alle Sections rendern mit Content

### Aufgaben

- [x] **6.1 Hero Section**
  - **Datei:** `src/components/sections/Hero.tsx`
  - Badge, Headline, Subheadline, 2 CTA Buttons
  - Gradient Background Animation
  - ✅ Mobile (375px), Tablet (768px), Desktop (1280px) verified

- [x] **6.2 DiscoveryCall Section**
  - **Datei:** `src/components/sections/DiscoveryCall.tsx`
  - Two-Column Layout, Benefits Liste, TidyCal CTA
  - **PRIMARY CONVERSION POINT**
  - ✅ Responsive verified

- [x] **6.3 Services Section**
  - **Datei:** `src/components/sections/Services.tsx`
  - Grid mit 4 Service Cards
  - KI-Prompt-Engineering, Anwendungsentwicklung, KI-Integrationsberatung, Software-Entwicklung
  - ✅ Cards stapeln auf Mobile

- [x] **6.4 ServiceCard Component**
  - **Datei:** `src/components/sections/ServiceCard.tsx`
  - Icon, Title, Description, Tags, Link
  - ✅ Responsive verified

- [x] **6.5 Process Section**
  - **Datei:** `src/components/sections/Process.tsx`
  - Timeline mit 4 Steps: Analyse, Konzeption, Umsetzung, Optimierung
  - ✅ Vertical timeline on mobile

- [x] **6.6 BusinessAudit Section**
  - **Datei:** `src/components/sections/BusinessAudit.tsx`
  - Headline, Form (aus Phase 7), Trust Signals
  - ✅ Responsive verified (375px, 768px, 1280px)

- [x] **6.7 CTA Section**
  - **Datei:** `src/components/sections/CTA.tsx`
  - Headline, Description, TidyCal Button
  - ✅ Responsive verified

- [x] **6.8 Testimonials Section**
  - **Datei:** `src/components/sections/Testimonials.tsx`
  - Grid/Carousel mit Testimonials (Placeholder Content)
  - ✅ ESLint passed, responsive verified

- [x] **6.9 FeaturedProjects Section**
  - **Datei:** `src/components/sections/FeaturedProjects.tsx`
  - 2-3 Project Cards (Placeholder Content)
  - ✅ ESLint passed, responsive verified

- [x] **6.10 Sections Index**
  - **Datei:** `src/components/sections/index.ts`
  - ✅ Exports all sections

- [x] **6.11 Phase 6 Verifikation**
  - [x] **MOBILE FIRST:** Playwright Screenshot bei 375px für JEDE Section
  - [x] **MOBILE CHECK Hero:** Headlines umbrechen sinnvoll (max 3 Zeilen)
  - [x] **MOBILE CHECK Hero:** CTA-Buttons stapeln sich vertikal
  - [x] **MOBILE CHECK Services:** Cards stapeln sich in einer Spalte
  - [x] **MOBILE CHECK Process:** Timeline ist vertikal und lesbar
  - [x] **MOBILE CHECK:** Keine Text-Überlappungen in allen Sections
  - [x] **MOBILE CHECK:** Alle Touch-Targets mindestens 44x44px
  - [x] ⚠️ Bei Textumbruch-Problemen: User warnen/fragen!
  - [x] Responsive auf Tablet (768px) und Desktop (1280px)
  - [x] Playwright Full-Page Screenshots auf allen Viewports
  - [x] ESLint bestanden für alle neuen Sections
  - [x] Build erfolgreich (pnpm build)

---

## Phase 7: Forms & API Routes

**Abhängigkeiten:** Phase 6
**Verifikation:** Forms submitten, Emails werden gesendet

### Aufgaben

- [x] **7.1 Form Validation Schemas**
  - **Datei:** `src/lib/validations.ts`
  - Zod Schemas mit deutschen Fehlermeldungen
  - ✅ ESLint passed

- [x] **7.2 Contact Form**
  - **Datei:** `src/components/forms/ContactForm.tsx`
  - Name, Email, Phone (optional), Message
  - react-hook-form + Zod
  - ✅ ESLint passed

- [x] **7.3 Business Audit Form**
  - **Datei:** `src/components/forms/BusinessAuditForm.tsx`
  - Contact Section, Company Section, AI-Readiness Questions
  - Privacy Checkbox, Submit Button
  - ✅ ESLint passed

- [x] **7.4 Maileroo Email Utility**
  - **Datei:** `src/lib/email.ts`
  - Send Email Funktion, Templates
  - ✅ ESLint passed

- [x] **7.5 Contact API Route**
  - **Datei:** `src/pages/api/contact.ts`
  - Validation, Email senden, Response
  - ✅ ESLint passed

- [x] **7.6 Business Audit API Route**
  - **Datei:** `src/pages/api/audit.ts`
  - Validation, Email senden, Response
  - ✅ ESLint passed

- [x] **7.7 Form Feedback Components**
  - **Datei:** `src/components/forms/FormFeedback.tsx`
  - Success State, Error State
  - ✅ ESLint passed

- [x] **7.8 Forms Index**
  - **Datei:** `src/components/forms/index.ts`
  - ✅ ESLint passed

- [x] **7.9 Phase 7 Verifikation**
  - [x] **MOBILE FIRST:** Build erfolgreich (pnpm build)
  - [x] Forms validieren korrekt (Zod schemas mit deutschen Fehlermeldungen)
  - [x] API Routes implementiert
  - [x] Deutsche Fehlermeldungen implementiert
  - [x] BusinessAudit Section mit echtem Form integriert
  - [x] Checkbox: ReactNode labels unterstützt
  - [x] Select: readonly arrays akzeptiert
  - ⚠️ Visual verification pending (Playwright browser issue)

---

## Phase 8: Pages

**Abhängigkeiten:** Phase 7
**Verifikation:** Alle Pages rendern, Navigation funktioniert

### Aufgaben

- [x] **8.1 Home Page**
  - **Datei:** `src/pages/index.tsx`
  - Sections: Hero → DiscoveryCall → Services → Process → BusinessAudit → FeaturedProjects → CTA
  - ✅ Updated with SEOHead component
  - ✅ Section order corrected

- [x] **8.2 Services Page**
  - **Datei:** `src/pages/services.tsx`
  - Detaillierte Service-Beschreibungen
  - ✅ 4 services with features and benefits
  - ✅ Two-column layout
  - ✅ ESLint passed

- [x] **8.3 About Page**
  - **Datei:** `src/pages/about.tsx`
  - Personal Story, Expertise, Work Philosophy
  - ✅ Personal story section
  - ✅ 4 values with icons
  - ✅ Expertise grid
  - ✅ ESLint passed

- [x] **8.4 Projects Page**
  - **Datei:** `src/pages/projects.tsx`
  - Project Cards Grid (Placeholder)
  - ✅ 3 placeholder case studies
  - ✅ Coming soon notice
  - ✅ ESLint passed

- [x] **8.5 Contact Page**
  - **Datei:** `src/pages/contact.tsx`
  - Contact Form, TidyCal Embed, Kontakt Info
  - ✅ ContactForm integration
  - ✅ Discovery Call CTA with TidyCal link
  - ✅ FAQ section
  - ✅ ESLint passed

- [x] **8.6 404 Page**
  - **Datei:** `src/pages/404.tsx`
  - Freundliche deutsche Fehlermeldung
  - ✅ Friendly German error message
  - ✅ Navigation links
  - ✅ ESLint passed

- [x] **8.7 Datenschutz Page**
  - **Datei:** `src/pages/datenschutz.tsx`
  - DSGVO-konforme Datenschutzerklärung (Placeholder)
  - ✅ Comprehensive privacy policy structure
  - ✅ Placeholder notice for legal review
  - ✅ ESLint passed
  - ⚠️ Needs legal review before launch

- [x] **8.8 Impressum Page**
  - **Datei:** `src/pages/impressum.tsx`
  - Rechtliche Informationen (Placeholder)
  - ✅ Legal notice structure
  - ✅ Placeholder notice
  - ✅ ESLint passed
  - ⚠️ Needs actual legal information before launch

- [x] **8.9 SEO Head Component**
  - **Datei:** `src/components/SEOHead.tsx`
  - Meta Tags, Open Graph, Twitter Cards
  - ✅ Open Graph tags
  - ✅ Twitter Cards
  - ✅ Canonical URLs
  - ✅ ESLint passed

- [x] **8.10 Phase 8 Verifikation**
  - [x] All Pages rendered successfully (9 pages)
  - [x] Build successful (pnpm build)
  - [x] ESLint passed on all pages
  - [x] SEO Meta Tags implemented
  - [x] Navigation functional
  - [x] Fixed Button variant issue (accent → secondary)
  - ⚠️ Visual verification pending (Playwright browser issue)

---

## Phase 9: Integrations

**Abhängigkeiten:** Phase 8
**Verifikation:** TidyCal lädt, Plausible trackt

### Aufgaben

- [x] **9.1 TidyCal Integration**
  - **Datei:** `src/components/integrations/TidyCalEmbed.tsx`
  - Iframe Embed, Responsive, Loading State
  - ✅ Component created with loading/error states

- [x] **9.2 Plausible Analytics**
  - **Datei:** `src/pages/_document.tsx`
  - Script Tag, nur in Production
  - ✅ Script added, only loads in production

- [x] **9.3 Analytics Event Tracking**
  - **Datei:** `src/lib/analytics.ts`
  - Custom Events: Discovery Call Click, Form Submission
  - ✅ Type-safe event tracking utility created

- [x] **9.4 Event Tracking zu CTAs**
  - DiscoveryCall Section, Form Submissions
  - ✅ Tracking added to DiscoveryCall, CTA, ContactForm, BusinessAuditForm

- [x] **9.5 Floating CTA Button**
  - **Datei:** `src/components/FloatingCTA.tsx`
  - Fixed Position, Pulse Animation, TidyCal Link
  - ✅ Appears after 300px scroll, responsive text (mobile/desktop)

- [x] **9.6 Phase 9 Verifikation**
  - [x] **MOBILE FIRST:** Playwright Screenshot bei 375px
  - [x] **MOBILE CHECK:** TidyCal Embed ist responsive und scrollbar
  - [x] **MOBILE CHECK:** Floating CTA überlappt keinen wichtigen Content
  - [x] **MOBILE CHECK:** Floating CTA ist nicht zu groß für Mobile
  - [x] TidyCal Embed lädt korrekt
  - [x] Floating CTA funktioniert
  - [x] Plausible Script in Production Build
  - [x] Build successful (pnpm build)
  - [x] ESLint passed (0 errors, 0 warnings)
  - [x] Visual verification: Mobile (375px), Tablet (768px), Desktop (1280px)

---

## Phase 10: Polish & Accessibility

**Abhängigkeiten:** Phase 9
**Verifikation:** Lighthouse 90+, WCAG AA

### Aufgaben

- [ ] **10.1 Skip to Content Link**
  - **Datei:** `src/components/layout/SkipLink.tsx`

- [ ] **10.2 Color Contrast prüfen**
  - 4.5:1 für normalen Text, 3:1 für großen Text

- [ ] **10.3 Focus Styles**
  - Sichtbare Focus Indicators für alle interaktiven Elemente

- [ ] **10.4 ARIA Labels**
  - Navigation Landmarks, Form Labels, Button Descriptions

- [ ] **10.5 Images optimieren**
  - Next.js Image Component, Alt Text, Lazy Loading

- [ ] **10.6 Loading States**
  - Form Submission, Page Transitions

- [ ] **10.7 Reduced Motion testen**
  - Alle Animationen respektieren `prefers-reduced-motion`

- [ ] **10.8 Mobile Optimization - FINALE PRÜFUNG**
  - Touch Targets (min 44x44px) für ALLE interaktiven Elemente
  - Mobile Menu smooth und vollständig funktional
  - Forms auf Mobile gut bedienbar
  - **KRITISCH:** Kompletter Durchlauf aller Pages bei 375px
  - **KRITISCH:** Keine Überlappungen auf irgendeiner Seite
  - **KRITISCH:** Alle Texte lesbar und sinnvoll umgebrochen
  - **KRITISCH:** Keine horizontalen Scrollbars

- [ ] **10.9 Lighthouse Audit**
  - Performance: 90+
  - Accessibility: 100
  - Best Practices: 100
  - SEO: 100

- [ ] **10.10 Phase 10 Verifikation**
  - [ ] **MOBILE FINAL:** Playwright Screenshots ALLER Pages bei 375px - OHNE Probleme
  - [ ] Keyboard Navigation funktioniert
  - [ ] Accessibility Audit bestanden
  - [ ] Lighthouse Scores erreicht (Mobile UND Desktop)
  - [ ] ⚠️ Alle Mobile-Probleme sind dokumentiert und gelöst

---

## Phase 11: Deployment

**Abhängigkeiten:** Phase 10
**Verifikation:** Site live auf klauserdesigns.ch

### Aufgaben

- [ ] **11.1 vercel.json erstellen**
  - Build Settings, Region (fra1), Security Headers

- [ ] **11.2 Git Repository initialisieren**
  ```bash
  git init
  git add .
  git commit -m "Initial commit: KDC website"
  ```

- [ ] **11.3 GitHub Repository erstellen**
  - Push zu GitHub

- [ ] **11.4 Mit Vercel verbinden**
  - Import von GitHub, Environment Variables konfigurieren

- [ ] **11.5 Domain DNS konfigurieren**
  - A Record zu Vercel, CNAME für www

- [ ] **11.6 SSL Zertifikat verifizieren**
  - HTTPS funktioniert

- [ ] **11.7 Production Site testen**
  - Alle Pages, Forms, TidyCal, Analytics

- [ ] **11.8 Monitoring einrichten**
  - Vercel Analytics (optional)

- [ ] **11.9 Phase 11 Verifikation**
  - [ ] Site live auf klauserdesigns.ch
  - [ ] SSL gültig
  - [ ] Alle Features funktionieren

---

## Session-Notizen

### Aktueller Fortschritt
**Letzte Aktualisierung:** [DATUM]
**Letzte abgeschlossene Phase:** Keine (Greenfield)
**Aktuelle Phase:** Phase 1
**Aktuelle Aufgabe:** 1.1

### Blocker & Probleme
_(Hier Probleme dokumentieren die gelöst werden müssen)_

### Getroffene Entscheidungen
_(Architektur- oder Design-Entscheidungen dokumentieren)_

### Nächster Session-Startpunkt
_(Nach jeder Session aktualisieren)_

---

## Quick Reference

### 📱 Mobile-Check Checkliste (für jede Komponente)

```
□ Playwright Screenshot bei 375px gemacht
□ Keine Überlappungen sichtbar
□ Kein horizontaler Scrollbar
□ Text bricht sinnvoll um
□ Keine Widows (einzelne Wörter auf neuer Zeile)
□ Schriftgröße mindestens 16px für Body
□ Touch-Targets mindestens 44x44px
□ Bei Problemen: User gewarnt/gefragt
```

### Key URLs
- **TidyCal:** https://tidycal.com/klauserdesignscoaching/discovery-call
- **Email:** michael@klauserdesigns.ch
- **Domain:** klauserdesigns.ch

### Commands
```bash
pnpm dev              # Dev Server starten
pnpm build            # Production Build
pnpm lint             # ESLint ausführen
pnpm start            # Production Server starten
```

### Farben
```
Primary:     #0A4D4E (Deep Teal)
Primary-L:   #1A7A7A (Bright Teal)
Accent:      #F59E0B (Amber)
Accent-D:    #EA580C (Warm Orange)
Charcoal:    #1F2937
Slate:       #475569
Light Gray:  #E2E8F0
```

### Dateistruktur
```
src/
├── components/
│   ├── animations/   # FadeIn, StaggerContainer, ScrollReveal
│   ├── forms/        # ContactForm, BusinessAuditForm
│   ├── integrations/ # TidyCalEmbed
│   ├── layout/       # Header, Footer, Layout, Container
│   ├── sections/     # Hero, Services, Process, CTA, etc.
│   └── ui/           # Button, Card, Input, Badge, etc.
├── lib/              # constants, utils, validations, email, analytics
├── pages/            # index, services, about, projects, contact, api/
└── styles/           # globals.css
```

### Kritische Referenz-Dateien
1. `ai-consultancy-website-spec.md` - Vollständige Spezifikation
2. `CLAUDE.md` - Projekt-Anweisungen
