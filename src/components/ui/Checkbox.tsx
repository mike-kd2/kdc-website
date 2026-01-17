import { InputHTMLAttributes, forwardRef, ReactNode, useId } from 'react'
import { cn } from '@/lib/utils'

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string | ReactNode
  error?: string
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const autoId = useId()
    const checkboxId =
      id || `checkbox-${typeof label === 'string' ? label.toLowerCase().replace(/\s+/g, '-') : autoId}`

    return (
      <div className="flex flex-col">
        <div className="flex items-start">
          <div className="flex h-5 items-center">
            <input
              id={checkboxId}
              type="checkbox"
              className={cn(
                'h-4 w-4 rounded border-neutral-light-gray text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2',
                error && 'border-red-500',
                className
              )}
              ref={ref}
              aria-invalid={error ? 'true' : 'false'}
              aria-describedby={error ? `${checkboxId}-error` : undefined}
              {...props}
            />
          </div>
          {label && (
            <div className="ml-3">
              <label
                htmlFor={checkboxId}
                className="text-sm font-medium text-neutral-charcoal"
              >
                {label}
                {props.required && (
                  <span className="ml-1 text-primary">*</span>
                )}
              </label>
            </div>
          )}
        </div>
        {error && (
          <p
            id={`${checkboxId}-error`}
            className="mt-1 text-sm text-red-600"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'

export { Checkbox }
