import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
    size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        return (
            <button
                className={cn(
                    'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                    'disabled:pointer-events-none disabled:opacity-50',
                    {
                        'bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-500':
                            variant === 'primary',
                        'bg-secondary-600 text-white hover:bg-secondary-700 focus-visible:ring-secondary-500':
                            variant === 'secondary',
                        'bg-transparent text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-500':
                            variant === 'ghost',
                        'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500':
                            variant === 'danger',
                    },
                    {
                        'px-3 py-1.5 text-sm': size === 'sm',
                        'px-4 py-2 text-base': size === 'md',
                        'px-6 py-3 text-lg': size === 'lg',
                    },
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)

Button.displayName = 'Button'

export default Button
