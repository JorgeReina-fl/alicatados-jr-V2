'use client'
import Link from 'next/link'
import { ComponentProps } from 'react'

type TransitionLinkProps = ComponentProps<typeof Link>

/**
 * Thin wrapper around next/link.
 * Page transitions are handled automatically by the PageTransition
 * component which detects pathname changes via usePathname().
 */
export default function TransitionLink({ children, ...props }: TransitionLinkProps) {
    return (
        <Link {...props}>
            {children}
        </Link>
    )
}
