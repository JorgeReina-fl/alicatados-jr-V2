'use client'
import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScrollWrapper({ children }: { children: React.ReactNode }) {
    const contentRef = useRef<HTMLDivElement>(null)
    const lenisRef = useRef<Lenis | null>(null)
    const pathname = usePathname()

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 0.8,
            touchMultiplier: 1.5,
            infinite: false,
        })

        lenisRef.current = lenis

        // Ticker handler for GSAP
        const tickerHandler = (time: number) => {
            lenis.raf(time * 1000)
        }

        // Sync with GSAP
        gsap.ticker.add(tickerHandler)
        gsap.ticker.lagSmoothing(0)
        lenis.on('scroll', ScrollTrigger.update)

        // VELOCITY SKEW EFFECT
        lenis.on('scroll', ({ velocity }: { velocity: number }) => {
            // Clamp skew between -7 and 7 degrees
            const skewAmount = gsap.utils.clamp(-7, 7, velocity * 0.1)

            gsap.to(contentRef.current, {
                skewY: skewAmount,
                duration: 0.5,
                ease: 'power3.out',
                overwrite: 'auto'
            })
        })

        return () => {
            gsap.ticker.remove(tickerHandler)
            lenis.destroy()
            lenisRef.current = null
        }
    }, [])

    // Scroll to top on route change
    useEffect(() => {
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { immediate: true })
        }
    }, [pathname])

    return (
        <div ref={contentRef} className="w-full will-change-transform origin-center">
            {children}
        </div>
    )
}
