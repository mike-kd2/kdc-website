import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Send } from 'lucide-react';
import {
  businessAuditFormSchema,
  type BusinessAuditFormData,
  employeeCountOptions,
  currentAIUsageOptions,
  aiGoalsOptions,
  budgetOptions,
  timelineOptions,
} from '@/lib/validations';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { TextArea } from '@/components/ui/TextArea';
import { Select } from '@/components/ui/Select';
import { Checkbox } from '@/components/ui/Checkbox';
import {
  trackAuditFormSubmit,
  trackAuditFormSuccess,
  trackAuditFormError,
} from '@/lib/analytics';

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export interface BusinessAuditFormProps {
  onSuccess?: () => void;
  className?: string;
}

export function BusinessAuditForm({ onSuccess, className = '' }: BusinessAuditFormProps) {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<BusinessAuditFormData>({
    resolver: zodResolver(businessAuditFormSchema),
    defaultValues: {
      aiGoals: [],
      privacyAccepted: false,
    },
  });

  const handleGoalToggle = (goalValue: string) => {
    const newGoals = selectedGoals.includes(goalValue)
      ? selectedGoals.filter((g) => g !== goalValue)
      : [...selectedGoals, goalValue];

    setSelectedGoals(newGoals);
    setValue('aiGoals', newGoals);
  };

  const onSubmit = async (data: BusinessAuditFormData) => {
    setSubmitStatus('loading');
    setErrorMessage('');
    trackAuditFormSubmit();

    try {
      const response = await fetch('/api/audit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Ein Fehler ist aufgetreten');
      }

      setSubmitStatus('success');
      trackAuditFormSuccess();
      reset();
      setSelectedGoals([]);
      onSuccess?.();
    } catch (error) {
      const errorMsg =
        error instanceof Error
          ? error.message
          : 'Formular konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.';
      setSubmitStatus('error');
      setErrorMessage(errorMsg);
      trackAuditFormError(errorMsg);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`space-y-xl ${className}`} aria-label="Business Audit Formular">
      {/* Contact Section */}
      <div className="space-y-md">
        <h3 className="text-xl font-semibold text-neutral-charcoal">
          Kontaktinformationen
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
          <Input
            {...register('firstName')}
            label="Vorname"
            placeholder="Max"
            error={errors.firstName?.message}
            disabled={submitStatus === 'loading'}
            required
          />
          <Input
            {...register('lastName')}
            label="Nachname"
            placeholder="Mustermann"
            error={errors.lastName?.message}
            disabled={submitStatus === 'loading'}
            required
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
          <Input
            {...register('email')}
            type="email"
            label="E-Mail"
            placeholder="max@firma.ch"
            error={errors.email?.message}
            disabled={submitStatus === 'loading'}
            required
          />
          <Input
            {...register('phone')}
            type="tel"
            label="Telefon"
            placeholder="+41 79 123 45 67"
            error={errors.phone?.message}
            disabled={submitStatus === 'loading'}
            required
          />
        </div>
      </div>

      {/* Company Section */}
      <div className="space-y-md">
        <h3 className="text-xl font-semibold text-neutral-charcoal">
          Unternehmensinformationen
        </h3>
        <Input
          {...register('companyName')}
          label="Firmenname"
          placeholder="Ihre Firma AG"
          error={errors.companyName?.message}
          disabled={submitStatus === 'loading'}
          required
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
          <Input
            {...register('industry')}
            label="Branche"
            placeholder="z.B. Beratung, E-Commerce, Gesundheit"
            error={errors.industry?.message}
            disabled={submitStatus === 'loading'}
            required
          />
          <Select
            {...register('employeeCount')}
            label="Mitarbeiterzahl"
            options={employeeCountOptions}
            error={errors.employeeCount?.message}
            disabled={submitStatus === 'loading'}
            required
          />
        </div>
      </div>

      {/* AI-Readiness Section */}
      <div className="space-y-md">
        <h3 className="text-xl font-semibold text-neutral-charcoal">
          KI-Readiness
        </h3>

        <Select
          {...register('currentAIUsage')}
          label="Aktuelle KI-Nutzung"
          options={currentAIUsageOptions}
          error={errors.currentAIUsage?.message}
          disabled={submitStatus === 'loading'}
          required
        />

        {/* AI Goals - Multiple Choice */}
        <div>
          <label className="block text-sm font-medium text-neutral-charcoal mb-2">
            KI-Ziele <span className="text-red-500">*</span>
          </label>
          <p className="text-sm text-neutral-slate mb-3">
            Wählen Sie 1-5 Ziele aus, die Sie mit KI erreichen möchten
          </p>
          <div className="space-y-2">
            {aiGoalsOptions.map((option) => (
              <label
                key={option.value}
                className="flex items-center space-x-2 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={selectedGoals.includes(option.value)}
                  onChange={() => handleGoalToggle(option.value)}
                  disabled={submitStatus === 'loading'}
                  className="h-4 w-4 text-primary border-neutral-slate rounded focus:ring-primary focus:ring-offset-0 disabled:opacity-50"
                />
                <span className="text-sm text-neutral-charcoal group-hover:text-primary transition-colors">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
          {errors.aiGoals?.message && (
            <p className="mt-1 text-sm text-red-600">{errors.aiGoals.message}</p>
          )}
        </div>

        <TextArea
          {...register('challenges')}
          label="Aktuelle Herausforderungen"
          placeholder="Beschreiben Sie die grössten Herausforderungen in Ihrem Unternehmen..."
          rows={4}
          error={errors.challenges?.message}
          disabled={submitStatus === 'loading'}
          required
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
          <Select
            {...register('budget')}
            label="Budget"
            options={budgetOptions}
            error={errors.budget?.message}
            disabled={submitStatus === 'loading'}
            required
          />
          <Select
            {...register('timeline')}
            label="Zeitrahmen"
            options={timelineOptions}
            error={errors.timeline?.message}
            disabled={submitStatus === 'loading'}
            required
          />
        </div>
      </div>

      {/* Privacy Consent */}
      <div className="pt-sm">
        <Checkbox
          {...register('privacyAccepted')}
          label={
            <span className="text-sm text-neutral-charcoal">
              Ich akzeptiere die{' '}
              <a
                href="/datenschutz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-light underline"
              >
                Datenschutzerklärung
              </a>{' '}
              und stimme der Verarbeitung meiner Daten zu. *
            </span>
          }
          error={errors.privacyAccepted?.message}
          disabled={submitStatus === 'loading'}
        />
      </div>

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="rounded-md bg-red-50 p-4 text-sm text-red-800 border border-red-200" role="alert" aria-live="assertive">
          <p className="font-medium">Fehler beim Senden</p>
          <p className="mt-1">{errorMessage}</p>
        </div>
      )}

      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="rounded-md bg-green-50 p-4 text-sm text-green-800 border border-green-200" role="status" aria-live="polite">
          <p className="font-medium">Analyse-Anfrage erfolgreich gesendet!</p>
          <p className="mt-1">
            Vielen Dank für Ihr Interesse. Wir senden Ihnen in Kürze eine detaillierte
            Business-Analyse zu.
          </p>
        </div>
      )}

      {/* Submit Button */}
      <div className="pt-sm">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={submitStatus === 'loading'}
          className="w-full sm:w-auto"
        >
          {submitStatus === 'loading' ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Wird gesendet...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Kostenlose Analyse anfordern
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
