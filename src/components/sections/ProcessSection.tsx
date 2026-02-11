'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import AnimatedTitle from '@/components/effects/AnimatedTitle'

gsap.registerPlugin(ScrollTrigger)

// Fases del proceso de reforma
const phases = [
    {
        id: 0,
        title: "DISEÑO",
        description: "Creamos planos arquitectónicos detallados y renders 3D hiperrealistas para que visualices cada centímetro antes de poner el primer ladrillo.",
        img: "/images/img21-4HA_w99P.jpg"
    },
    {
        id: 1,
        title: "OBRA",
        description: "Ejecución técnica impecable. Gestión integral de gremios, control de calidades y cumplimiento estricto de los plazos pactados.",
        img: "/images/img10-Dq8tYZyD.jpg"
    },
    {
        id: 2,
        title: "ACABADOS",
        description: "La diferencia está en el detalle. Selección de materiales premium, iluminación escénica y entrega llave en mano con limpieza final.",
        img: "/images/img32-BSParlit.jpg"
    }
]

export default function ProcessSection() {
    const [activeStep, setActiveStep] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)
    const imageRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            imageRefs.current.forEach((imgContainer, index) => {
                if (!imgContainer) return

                ScrollTrigger.create({
                    trigger: imgContainer,
                    start: 'top center+=10%',
                    end: 'bottom center+=10%',
                    onEnter: () => setActiveStep(index),
                    onEnterBack: () => setActiveStep(index),
                })
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} className="relative w-full bg-secondary-900 py-20">
            <div className="mx-auto flex max-w-[1800px] flex-col md:flex-row">

                {/* COLUMNA IZQUIERDA (STICKY / TEXTO) */}
                <div className="relative flex h-[50vh] w-full flex-col justify-center px-10 md:sticky md:top-0 md:h-screen md:w-1/2 lg:px-20">

                    {/* Indicador de progreso */}
                    <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-accent-500">
                        Proceso
                    </p>

                    <div className="mb-6 flex space-x-2">
                        {phases.map((phase, i) => (
                            <div
                                key={phase.id}
                                className={`h-1 flex-1 transition-all duration-500 ${i === activeStep ? 'bg-accent-500' : 'bg-secondary-700'
                                    }`}
                            />
                        ))}
                    </div>

                    <div className="overflow-hidden min-h-[160px]">
                        <AnimatedTitle
                            text={phases[activeStep].title}
                            className="text-cream-500"
                        />
                    </div>

                    {/* Descripción con fade */}
                    <p
                        key={activeStep}
                        className="mt-6 max-w-md text-lg font-light leading-relaxed text-cream-400 transition-opacity duration-500"
                    >
                        {phases[activeStep].description}
                    </p>

                    <Link
                        href={`/proceso#fase-${activeStep + 1}`}
                        className="mt-10 w-fit border-b border-accent-500 pb-1 text-sm font-bold uppercase tracking-widest text-accent-500 hover:text-copper-500 transition-colors"
                    >
                        Ver detalles fase {activeStep + 1}
                    </Link>
                </div>

                {/* COLUMNA DERECHA (SCROLL / IMÁGENES) */}
                <div className="w-full md:w-1/2">
                    {phases.map((phase, index) => (
                        <div
                            key={phase.id}
                            ref={(el) => { if (el) imageRefs.current[index] = el }}
                            className="flex h-screen w-full items-center justify-center p-10"
                        >
                            <div className="relative h-[60vh] w-full overflow-hidden shadow-xl transition-transform duration-700 hover:scale-[1.02]">
                                <Image
                                    src={phase.img}
                                    alt={phase.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                />

                                {/* Overlay cinematográfico */}
                                <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
