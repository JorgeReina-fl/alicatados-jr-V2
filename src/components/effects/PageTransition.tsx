'use client'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const overlayRef = useRef<HTMLDivElement>(null)
    const logoRef = useRef<HTMLDivElement>(null)
    const isFirstRender = useRef(true)
    const prevPathRef = useRef(pathname)

    useEffect(() => {
        // Skip animation on first render (initial page load)
        if (isFirstRender.current) {
            isFirstRender.current = false
            prevPathRef.current = pathname
            return
        }

        // Skip if pathname hasn't changed
        if (prevPathRef.current === pathname) return

        prevPathRef.current = pathname

        // Trigger transition animation
        const tl = gsap.timeline()

        tl.set(overlayRef.current, { yPercent: -100, display: 'flex' })
            .to(overlayRef.current, { yPercent: 0, duration: 0.4, ease: 'power3.inOut' })
            .fromTo(logoRef.current,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.25, ease: 'back.out(1.7)' },
                '-=0.15'
            )
            .to({}, { duration: 0.3 }) // Hold
            .to(logoRef.current, { scale: 1.1, opacity: 0, duration: 0.2, ease: 'power2.in' })
            .to(overlayRef.current, { yPercent: 100, duration: 0.4, ease: 'power3.inOut' }, '-=0.1')
            .set(overlayRef.current, { display: 'none' })

        return () => {
            tl.kill()
        }
    }, [pathname])

    return (
        <>
            {/* Page Transition Overlay - Hidden by default */}
            <div
                ref={overlayRef}
                className="fixed inset-0 z-[9998] items-center justify-center bg-secondary-900"
                style={{ display: 'none' }}
            >
                <div ref={logoRef} className="flex flex-col items-center gap-4 opacity-0">
                    <div className="text-accent-500 text-6xl font-heading font-black tracking-tighter">
                        JR
                    </div>
                    <div className="flex gap-1">
                        <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
                        <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
                        <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
                    </div>
                </div>
            </div>

            {/* Page Content - Always visible */}
            {children}
        </>
    )
}
