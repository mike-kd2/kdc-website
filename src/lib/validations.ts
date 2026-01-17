import { z } from 'zod'

// German error messages for better UX
const errorMessages = {
  required: 'Dieses Feld ist erforderlich',
  invalidEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
  invalidPhone: 'Bitte geben Sie eine gültige Telefonnummer ein',
  minLength: (min: number) => `Mindestens ${min} Zeichen erforderlich`,
  maxLength: (max: number) => `Maximal ${max} Zeichen erlaubt`,
}

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, errorMessages.required)
    .min(2, errorMessages.minLength(2))
    .max(100, errorMessages.maxLength(100)),
  email: z.string().min(1, errorMessages.required).email(errorMessages.invalidEmail),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => {
        if (!val || val.trim() === '') return true
        // Swiss phone number formats: +41 XX XXX XX XX or 0XX XXX XX XX
        const phoneRegex = /^(\+41|0041|0)[1-9]\d{1,2}\s?\d{3}\s?\d{2}\s?\d{2}$/
        return phoneRegex.test(val.replace(/\s/g, ''))
      },
      {
        message: errorMessages.invalidPhone,
      }
    ),
  message: z
    .string()
    .min(1, errorMessages.required)
    .min(10, errorMessages.minLength(10))
    .max(2000, errorMessages.maxLength(2000)),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// Business Audit Form Schema
export const businessAuditFormSchema = z.object({
  // Contact Information
  firstName: z
    .string()
    .min(1, errorMessages.required)
    .min(2, errorMessages.minLength(2))
    .max(50, errorMessages.maxLength(50)),
  lastName: z
    .string()
    .min(1, errorMessages.required)
    .min(2, errorMessages.minLength(2))
    .max(50, errorMessages.maxLength(50)),
  email: z.string().min(1, errorMessages.required).email(errorMessages.invalidEmail),
  phone: z
    .string()
    .min(1, errorMessages.required)
    .refine(
      (val) => {
        const phoneRegex = /^(\+41|0041|0)[1-9]\d{1,2}\s?\d{3}\s?\d{2}\s?\d{2}$/
        return phoneRegex.test(val.replace(/\s/g, ''))
      },
      {
        message: errorMessages.invalidPhone,
      }
    ),

  // Company Information
  companyName: z
    .string()
    .min(1, errorMessages.required)
    .min(2, errorMessages.minLength(2))
    .max(100, errorMessages.maxLength(100)),
  industry: z
    .string()
    .min(1, errorMessages.required)
    .max(100, errorMessages.maxLength(100)),
  employeeCount: z
    .enum(['1-10', '11-50', '51-200', '201-500', '500+'])
    .refine((val) => val !== undefined, {
      message: errorMessages.required,
    }),

  // AI Readiness Questions
  currentAIUsage: z
    .enum(['none', 'exploring', 'using-basic', 'advanced'])
    .refine((val) => val !== undefined, {
      message: errorMessages.required,
    }),
  aiGoals: z
    .array(z.string())
    .min(1, 'Bitte wählen Sie mindestens ein Ziel aus')
    .max(5, 'Maximal 5 Ziele'),
  challenges: z
    .string()
    .min(10, errorMessages.minLength(10))
    .max(1000, errorMessages.maxLength(1000)),
  budget: z
    .enum(['under-5k', '5k-20k', '20k-50k', '50k-100k', 'over-100k', 'not-sure'])
    .refine((val) => val !== undefined, {
      message: errorMessages.required,
    }),
  timeline: z
    .enum(['immediate', '1-3-months', '3-6-months', '6-12-months', 'exploring'])
    .refine((val) => val !== undefined, {
      message: errorMessages.required,
    }),

  // Privacy
  privacyAccepted: z
    .boolean()
    .refine((val) => val === true, {
      message: 'Bitte akzeptieren Sie die Datenschutzerklärung',
    }),
})

export type BusinessAuditFormData = z.infer<typeof businessAuditFormSchema>

// Options for dropdowns (exported for use in forms)
export const employeeCountOptions = [
  { value: '1-10', label: '1-10 Mitarbeiter' },
  { value: '11-50', label: '11-50 Mitarbeiter' },
  { value: '51-200', label: '51-200 Mitarbeiter' },
  { value: '201-500', label: '201-500 Mitarbeiter' },
  { value: '500+', label: 'Über 500 Mitarbeiter' },
] as const

export const currentAIUsageOptions = [
  { value: 'none', label: 'Noch keine KI-Nutzung' },
  { value: 'exploring', label: 'Erkunden erste Möglichkeiten' },
  { value: 'using-basic', label: 'Nutzen bereits grundlegende KI-Tools' },
  { value: 'advanced', label: 'Fortgeschrittene KI-Integration' },
] as const

export const aiGoalsOptions = [
  { value: 'efficiency', label: 'Effizienzsteigerung' },
  { value: 'automation', label: 'Prozessautomatisierung' },
  { value: 'content', label: 'Content-Generierung' },
  { value: 'customer-service', label: 'Kundenservice verbessern' },
  { value: 'data-analysis', label: 'Datenanalyse & Insights' },
  { value: 'product-development', label: 'Produktentwicklung' },
  { value: 'other', label: 'Andere' },
] as const

export const budgetOptions = [
  { value: 'under-5k', label: 'Unter CHF 5\'000' },
  { value: '5k-20k', label: 'CHF 5\'000 - 20\'000' },
  { value: '20k-50k', label: 'CHF 20\'000 - 50\'000' },
  { value: '50k-100k', label: 'CHF 50\'000 - 100\'000' },
  { value: 'over-100k', label: 'Über CHF 100\'000' },
  { value: 'not-sure', label: 'Noch unklar' },
] as const

export const timelineOptions = [
  { value: 'immediate', label: 'So schnell wie möglich' },
  { value: '1-3-months', label: '1-3 Monate' },
  { value: '3-6-months', label: '3-6 Monate' },
  { value: '6-12-months', label: '6-12 Monate' },
  { value: 'exploring', label: 'Nur Informationen sammeln' },
] as const
