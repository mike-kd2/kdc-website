import type { NextApiRequest, NextApiResponse } from 'next';
import { businessAuditFormSchema } from '@/lib/validations';
import { sendBusinessAuditEmail } from '@/lib/email';

type ResponseData = {
  success?: boolean;
  error?: string;
  details?: unknown;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Validate request body
    const validationResult = businessAuditFormSchema.safeParse(req.body);

    if (!validationResult.success) {
      return res.status(400).json({
        error: 'Validierungsfehler',
        details: validationResult.error.flatten().fieldErrors,
      });
    }

    const data = validationResult.data;

    // Send email
    await sendBusinessAuditEmail(data);

    // Return success
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Business audit form error:', error);

    // Return generic error to client (don't expose internal details)
    return res.status(500).json({
      error: 'Ein Fehler ist beim Senden der Anfrage aufgetreten. Bitte versuchen Sie es später erneut.',
    });
  }
}
