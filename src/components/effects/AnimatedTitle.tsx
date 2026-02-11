'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function AnimatedTitle({ text, className = '' }: { text: string; className?: string }) {
    const containerRef = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        if (!containerRef.current) return

        const ctx = gsap.context(() => {
            gsap.fromTo('.char',
                {
                    y: 100,
                    opacity: 0,
                    rotateX: -90
                },
                {
                    y: 0,
                    opacity: 1,
                    rotateX: 0,
                    stagger: 0.05,
                    duration: 0.8,
                    ease: 'back.out(1.7)'
                }
            )
        }, containerRef)

        return () => ctx.revert()
    }, [text])

    return (
        <h2
            ref={containerRef}
            className={`pt-[5px] overflow-hidden font-heading text-6xl font-black uppercase ${className}`}
            aria-label={text}
        >
            {text.split('').map((char, i) => (
                <span
                    key={i}
                    className="char inline-block origin-bottom transform will-change-transform"
                    style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                >
                    {char}
                </span>
            ))}
        </h2>
    )
}
