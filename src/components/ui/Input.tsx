import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string
    label?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, error, label, ...props }, ref) => {
        return (
            <div className="w-full">
                {label && (
                    <label
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200"
                        htmlFor={props.id}
                    >
                        {label}
                    </label>
                )}
                <input
                    type={type}
                    className={cn(
                        'flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:ring-primary-400',
                        error && 'border-red-500 focus:ring-red-500',
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
            </div>
        )
    }
)

Input.displayName = 'Input'

export default Input
