import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

export interface FormFeedbackProps {
  type: 'success' | 'error' | 'warning';
  title: string;
  message?: string;
  className?: string;
}

const feedbackConfig = {
  success: {
    containerClass: 'bg-green-50 border-green-200 text-green-800',
    icon: CheckCircle2,
    iconClass: 'text-green-600',
  },
  error: {
    containerClass: 'bg-red-50 border-red-200 text-red-800',
    icon: XCircle,
    iconClass: 'text-red-600',
  },
  warning: {
    containerClass: 'bg-amber-50 border-amber-200 text-amber-800',
    icon: AlertCircle,
    iconClass: 'text-amber-600',
  },
};

export function FormFeedback({ type, title, message, className = '' }: FormFeedbackProps) {
  const config = feedbackConfig[type];
  const Icon = config.icon;

  return (
    <div
      className={`rounded-md border p-4 ${config.containerClass} ${className}`}
      role="alert"
    >
      <div className="flex items-start">
        <Icon className={`h-5 w-5 ${config.iconClass} mt-0.5 flex-shrink-0`} />
        <div className="ml-3">
          <p className="font-medium text-sm">{title}</p>
          {message && <p className="mt-1 text-sm">{message}</p>}
        </div>
      </div>
    </div>
  );
}

export interface FormSuccessProps {
  title?: string;
  message?: string;
  className?: string;
}

export function FormSuccess({
  title = 'Erfolgreich gesendet!',
  message,
  className,
}: FormSuccessProps) {
  return <FormFeedback type="success" title={title} message={message} className={className} />;
}

export interface FormErrorProps {
  title?: string;
  message?: string;
  className?: string;
}

export function FormError({
  title = 'Fehler beim Senden',
  message,
  className,
}: FormErrorProps) {
  return <FormFeedback type="error" title={title} message={message} className={className} />;
}

export interface FormWarningProps {
  title: string;
  message?: string;
  className?: string;
}

export function FormWarning({ title, message, className }: FormWarningProps) {
  return <FormFeedback type="warning" title={title} message={message} className={className} />;
}
