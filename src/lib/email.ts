import type { ContactFormData, BusinessAuditFormData } from './validations';

const MAILEROO_API_URL = 'https://smtp.maileroo.com/send';
const MAILEROO_API_KEY = process.env.MAILEROO_API_KEY;
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'michael@klauserdesigns.ch';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

/**
 * Send email via Maileroo API
 */
async function sendEmail({ to, subject, html, replyTo }: EmailOptions): Promise<void> {
  if (!MAILEROO_API_KEY) {
    throw new Error('Maileroo API key is not configured');
  }

  const response = await fetch(MAILEROO_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': MAILEROO_API_KEY,
    },
    body: JSON.stringify({
      to,
      subject,
      html,
      from: `KDC Website <noreply@klauserdesigns.ch>`,
      ...(replyTo && { reply_to: replyTo }),
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to send email: ${error}`);
  }
}

/**
 * Send contact form submission email
 */
export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Inter', 'Segoe UI', sans-serif; line-height: 1.6; color: #1F2937; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #0A4D4E 0%, #1A7A7A 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; }
          .content { background: #F8FAFC; padding: 30px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 20px; }
          .label { font-weight: 600; color: #475569; margin-bottom: 5px; }
          .value { background: white; padding: 12px; border-radius: 4px; border: 1px solid #E2E8F0; }
          .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #E2E8F0; font-size: 14px; color: #64748B; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">Neue Kontaktanfrage</h1>
            <p style="margin: 10px 0 0; opacity: 0.9;">Von der KDC Website</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${escapeHtml(data.name)}</div>
            </div>
            <div class="field">
              <div class="label">E-Mail:</div>
              <div class="value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
            </div>
            ${
              data.phone
                ? `
            <div class="field">
              <div class="label">Telefon:</div>
              <div class="value"><a href="tel:${escapeHtml(data.phone)}">${escapeHtml(data.phone)}</a></div>
            </div>
            `
                : ''
            }
            <div class="field">
              <div class="label">Nachricht:</div>
              <div class="value" style="white-space: pre-wrap;">${escapeHtml(data.message)}</div>
            </div>
            <div class="footer">
              <p>Diese Nachricht wurde über das Kontaktformular auf klauserdesigns.ch gesendet.</p>
              <p>Antworten Sie direkt auf ${escapeHtml(data.email)}</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

  await sendEmail({
    to: CONTACT_EMAIL,
    subject: `Kontaktanfrage von ${data.name}`,
    html,
    replyTo: data.email,
  });
}

/**
 * Send business audit form submission email
 */
export async function sendBusinessAuditEmail(data: BusinessAuditFormData): Promise<void> {
  const aiGoalsLabels: Record<string, string> = {
    efficiency: 'Effizienzsteigerung',
    automation: 'Prozessautomatisierung',
    content: 'Content-Generierung',
    'customer-service': 'Kundenservice verbessern',
    'data-analysis': 'Datenanalyse & Insights',
    'product-development': 'Produktentwicklung',
    other: 'Andere',
  };

  const currentAIUsageLabels: Record<string, string> = {
    none: 'Noch keine KI-Nutzung',
    exploring: 'Erkunden erste Möglichkeiten',
    'using-basic': 'Nutzen bereits grundlegende KI-Tools',
    advanced: 'Fortgeschrittene KI-Integration',
  };

  const employeeCountLabels: Record<string, string> = {
    '1-10': '1-10 Mitarbeiter',
    '11-50': '11-50 Mitarbeiter',
    '51-200': '51-200 Mitarbeiter',
    '201-500': '201-500 Mitarbeiter',
    '500+': 'Über 500 Mitarbeiter',
  };

  const budgetLabels: Record<string, string> = {
    'under-5k': 'Unter CHF 5\'000',
    '5k-20k': 'CHF 5\'000 - 20\'000',
    '20k-50k': 'CHF 20\'000 - 50\'000',
    '50k-100k': 'CHF 50\'000 - 100\'000',
    'over-100k': 'Über CHF 100\'000',
    'not-sure': 'Noch unklar',
  };

  const timelineLabels: Record<string, string> = {
    immediate: 'So schnell wie möglich',
    '1-3-months': '1-3 Monate',
    '3-6-months': '3-6 Monate',
    '6-12-months': '6-12 Monate',
    exploring: 'Nur Informationen sammeln',
  };

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Inter', 'Segoe UI', sans-serif; line-height: 1.6; color: #1F2937; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #F59E0B 0%, #EA580C 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; }
          .content { background: #F8FAFC; padding: 30px; border-radius: 0 0 8px 8px; }
          .section { margin-bottom: 30px; }
          .section-title { font-size: 18px; font-weight: 700; color: #0A4D4E; margin-bottom: 15px; padding-bottom: 8px; border-bottom: 2px solid #E2E8F0; }
          .field { margin-bottom: 15px; }
          .label { font-weight: 600; color: #475569; margin-bottom: 5px; font-size: 14px; }
          .value { background: white; padding: 12px; border-radius: 4px; border: 1px solid #E2E8F0; }
          .goals-list { list-style: none; padding: 0; }
          .goals-list li { background: white; padding: 8px 12px; margin-bottom: 5px; border-radius: 4px; border-left: 3px solid #F59E0B; }
          .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #E2E8F0; font-size: 14px; color: #64748B; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">🎯 Neue Business Audit Anfrage</h1>
            <p style="margin: 10px 0 0; opacity: 0.9;">Qualifizierter Lead von der KDC Website</p>
          </div>
          <div class="content">

            <!-- Contact Section -->
            <div class="section">
              <h2 class="section-title">Kontaktinformationen</h2>
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${escapeHtml(data.firstName)} ${escapeHtml(data.lastName)}</div>
              </div>
              <div class="field">
                <div class="label">E-Mail:</div>
                <div class="value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
              </div>
              <div class="field">
                <div class="label">Telefon:</div>
                <div class="value"><a href="tel:${escapeHtml(data.phone)}">${escapeHtml(data.phone)}</a></div>
              </div>
            </div>

            <!-- Company Section -->
            <div class="section">
              <h2 class="section-title">Unternehmen</h2>
              <div class="field">
                <div class="label">Firma:</div>
                <div class="value">${escapeHtml(data.companyName)}</div>
              </div>
              <div class="field">
                <div class="label">Branche:</div>
                <div class="value">${escapeHtml(data.industry)}</div>
              </div>
              <div class="field">
                <div class="label">Mitarbeiterzahl:</div>
                <div class="value">${employeeCountLabels[data.employeeCount]}</div>
              </div>
            </div>

            <!-- AI Readiness Section -->
            <div class="section">
              <h2 class="section-title">KI-Readiness</h2>
              <div class="field">
                <div class="label">Aktuelle KI-Nutzung:</div>
                <div class="value">${currentAIUsageLabels[data.currentAIUsage]}</div>
              </div>
              <div class="field">
                <div class="label">KI-Ziele:</div>
                <ul class="goals-list">
                  ${data.aiGoals.map((goal) => `<li>${aiGoalsLabels[goal] || goal}</li>`).join('')}
                </ul>
              </div>
              <div class="field">
                <div class="label">Herausforderungen:</div>
                <div class="value" style="white-space: pre-wrap;">${escapeHtml(data.challenges)}</div>
              </div>
              <div class="field">
                <div class="label">Budget:</div>
                <div class="value">${budgetLabels[data.budget]}</div>
              </div>
              <div class="field">
                <div class="label">Zeitrahmen:</div>
                <div class="value">${timelineLabels[data.timeline]}</div>
              </div>
            </div>

            <div class="footer">
              <p><strong>Nächste Schritte:</strong></p>
              <ol>
                <li>Lead in CRM eintragen</li>
                <li>Personalisierte Business-Analyse vorbereiten</li>
                <li>Discovery Call innerhalb von 24h anbieten</li>
              </ol>
              <p style="margin-top: 15px;">Diese Anfrage wurde über das Business Audit Formular auf klauserdesigns.ch gesendet.</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

  await sendEmail({
    to: CONTACT_EMAIL,
    subject: `🎯 Business Audit: ${data.companyName} - ${employeeCountLabels[data.employeeCount]}`,
    html,
    replyTo: data.email,
  });
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
