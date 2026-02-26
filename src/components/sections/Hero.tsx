'use client'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const textWrapperRef = useRef<HTMLDivElement>(null)
    const videoRef = useRef<HTMLVideoElement>(null)
    const imageRef = useRef<HTMLImageElement>(null)
    const scrollIndicatorRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Scroll indicator pulse
            gsap.to(scrollIndicatorRef.current, {
                y: 15,
                duration: 1.2,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut',
            })

            // Zoom Through Timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: '+=600', // Reverted to 600 as requested
                    pin: false,
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            })

            tl.to(textWrapperRef.current, {
                scale: 60,
                duration: 1,
                ease: 'power2.inOut',
            })
                .fromTo([videoRef.current, imageRef.current],
                    { opacity: 1, filter: 'brightness(1)' },
                    { opacity: 1, filter: 'brightness(1.1)', duration: 0.5 },
                    0.5)

        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-white">
            {/* BACKGROUND LAYER */}
            <div className="absolute inset-0 z-0">
                <video
                    ref={videoRef}
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/images/img13-CYC9r3W_.webp"
                >
                    {/* <source src="/videos/marble-texture.mp4" type="video/mp4" /> */}
                </video>
                <Image
                    ref={imageRef as any}
                    src="/images/img13-CYC9r3W_.webp"
                    alt="Fondo corporativo obras de alicatado Elche"
                    fill
                    sizes="100vw"
                    className="absolute inset-0 h-full w-full object-cover"
                    priority
                    unoptimized
                />
            </div>

            {/* MASK WRAPPER - mix-blend-mode trick */}
            <div
                ref={textWrapperRef}
                className="relative z-10 flex h-full w-full items-center justify-center bg-white mix-blend-screen pointer-events-none will-change-transform"
            >
                <div className="text-center px-4">
                    <h1 className="font-heading text-[6vw] font-black uppercase leading-none tracking-tighter text-black sm:text-[5vw] md:text-[4vw]">
                        <span className="block text-[2.5vw] tracking-[0.15em] mb-2 sm:text-[2vw] md:text-[1.5vw]">ALICATADOS PROFESIONALES ELCHE</span>
                        EXPERTOS EN
                        <br />
                        <span className="text-[12vw] sm:text-[11vw] md:text-[10vw]">ALICATADOS</span>
                    </h1>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                ref={scrollIndicatorRef}
                className="absolute bottom-12 left-1/2 z-20 -translate-x-1/2 mix-blend-difference"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-white">
                        Scroll para entrar
                    </span>
                    <ChevronDown className="h-8 w-8 text-white" />
                </div>
            </div>
        </div>
    )
}
