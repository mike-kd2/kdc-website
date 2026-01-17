import { Section, Container } from '@/components/layout';
import { Badge } from '@/components/ui';
import { ScrollReveal } from '@/components/animations';
import { BusinessAuditForm } from '@/components/forms';
import { Sparkles, Shield, Clock } from 'lucide-react';

export function BusinessAudit() {
  return (
    <Section id="business-audit" className="bg-gradient-to-br from-neutral-off-white to-white">
      <Container>
        <ScrollReveal>
          {/* Header */}
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <Badge variant="primary" className="mb-4">
              KI-Potenzialanalyse
            </Badge>
            <h2 className="mb-4 text-3xl font-bold text-neutral-charcoal sm:text-4xl lg:text-5xl">
              Entdecken Sie Ihre KI-Möglichkeiten
            </h2>
            <p className="text-lg text-neutral-slate sm:text-xl">
              In nur wenigen Minuten zeigen wir Ihnen, wie KI Ihr Geschäft
              voranbringen kann. Erhalten Sie eine kostenlose Ersteinschätzung.
            </p>
          </div>

          {/* Two-Column Layout */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Column - Benefits & Trust Signals */}
            <div className="flex flex-col justify-center space-y-8">
              {/* Trust Signals */}
              <div className="space-y-4">
                <TrustSignal
                  icon={<Clock className="h-6 w-6 text-accent" />}
                  title="Schnelle Analyse"
                  description="Ausfüllen in unter 5 Minuten"
                />
                <TrustSignal
                  icon={<Shield className="h-6 w-6 text-accent" />}
                  title="100% Vertraulich"
                  description="Ihre Daten sind bei uns sicher"
                />
                <TrustSignal
                  icon={<Sparkles className="h-6 w-6 text-accent" />}
                  title="Konkrete Empfehlungen"
                  description="Individuelle Handlungsvorschläge"
                />
              </div>

              {/* Social Proof */}
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <p className="text-sm font-medium text-neutral-slate">
                  &quot;Die Potenzialanalyse hat uns die Augen geöffnet. Wir
                  haben sofort 3 Quick Wins identifiziert.&quot;
                </p>
                <p className="mt-2 text-sm font-semibold text-neutral-charcoal">
                  — Sarah M., CEO eines Schweizer KMU
                </p>
              </div>
            </div>

            {/* Right Column - Business Audit Form */}
            <div className="rounded-2xl bg-white p-8 shadow-lg lg:p-10">
              <div className="mb-8 text-center">
                <Sparkles className="mx-auto mb-4 h-12 w-12 text-accent" />
                <h3 className="mb-2 text-2xl font-bold text-neutral-charcoal">
                  Kostenlose Potenzialanalyse
                </h3>
                <p className="text-neutral-slate">
                  Füllen Sie das Formular aus und erhalten Sie innerhalb von 24
                  Stunden eine persönliche Einschätzung
                </p>
              </div>

              {/* Business Audit Form */}
              <BusinessAuditForm />
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}

// Trust Signal Component
interface TrustSignalProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function TrustSignal({ icon, title, description }: TrustSignalProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h4 className="mb-1 font-semibold text-neutral-charcoal">{title}</h4>
        <p className="text-sm text-neutral-slate">{description}</p>
      </div>
    </div>
  );
}

