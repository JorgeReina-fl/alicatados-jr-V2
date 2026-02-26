'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SERVICES = [
    {
        title: 'COCINAS',
        description: 'Diseño y reforma integral de cocinas modernas con los mejores materiales y acabados premium.',
        image: '/images/modern_kitchen.png',
        features: ['Diseño personalizado', 'Materiales premium', 'Instalación completa'],
    },
    {
        title: 'BAÑOS',
        description: 'Transformamos tu baño en un espacio de relax, funcionalidad y diseño contemporáneo.',
        image: '/images/img32-BSParlit.jpg',
        features: ['Reformas integrales', 'Platos de ducha', 'Grifería de diseño'],
    },
    {
        title: 'ALICATADOS',
        description: 'Expertos en colocación de azulejos y revestimientos con acabados impecables.',
        image: '/images/img21-4HA_w99P.jpg',
        features: ['Porcelánico', 'Grandes formatos', 'Microcemento'],
    },
    {
        title: 'EXTERIORES',
        description: 'Barbacoas, terrazas y espacios exteriores con acabados profesionales.',
        image: '/images/img15-Cjy6MhaF.jpg',
        features: ['Barbacoas', 'Horno de leña', 'Terrazas'],
    },
]

export default function ServiciosPage() {
    const headerRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(titleRef.current, {
                opacity: 0,
                y: 80,
                duration: 1.2,
                ease: 'power4.out',
            })
        }, headerRef)

        return () => ctx.revert()
    }, [])

    return (
        <div className="bg-secondary-900">
            {/* Hero Section */}
            <section ref={headerRef} className="relative py-32 pt-40">
                <div className="absolute inset-0">
                    <img
                        src="/images/img24-BiBiv1DO.jpg"
                        alt=""
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-secondary-900/85" />
                </div>
                <div className="container relative mx-auto px-4 text-center">
                    <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-accent-500">
                        Lo que hacemos
                    </p>
                    <h1 ref={titleRef} className="font-heading text-6xl font-black uppercase text-cream-500 md:text-8xl">
                        SERVICIOS
                    </h1>
                </div>
            </section>

            {/* Services */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="space-y-24">
                        {SERVICES.map((service, index) => (
                            <div
                                key={service.title}
                                className={`grid items-center gap-12 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                                    }`}
                            >
                                {/* Image */}
                                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                    <div className="aspect-[4/3] w-full overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                                        />
                                    </div>
                                    <div className="absolute bottom-0 left-0 bg-accent-500 px-6 py-3">
                                        <span className="font-heading text-xl font-black text-secondary-900">0{index + 1}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div>
                                    <h2 className="mb-6 font-heading text-5xl font-black uppercase text-cream-500 md:text-6xl">
                                        {service.title}
                                    </h2>
                                    <p className="mb-8 text-lg text-cream-400">{service.description}</p>
                                    <ul className="mb-8 space-y-4">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-3 text-cream-400">
                                                <CheckCircle2 className="h-5 w-5 text-accent-500" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href="/contacto"
                                        className="inline-flex items-center gap-3 bg-accent-500 px-8 py-4 font-bold uppercase tracking-wider text-secondary-900 transition-all hover:bg-copper-500"
                                    >
                                        Solicitar Presupuesto
                                        <ArrowRight className="h-5 w-5" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-accent-500 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="mb-6 font-heading text-4xl font-black uppercase text-secondary-900 md:text-6xl">
                        ¿TIENES UN PROYECTO EN MENTE?
                    </h2>
                    <p className="mx-auto mb-8 max-w-2xl text-lg text-secondary-700">
                        Cuéntanos tu idea y te ayudamos a hacerla realidad. Presupuesto sin compromiso.
                    </p>
                    <Link
                        href="/contacto"
                        className="inline-flex items-center gap-3 bg-secondary-900 px-10 py-5 text-lg font-bold uppercase tracking-wider text-cream-500 transition-all hover:bg-secondary-800"
                    >
                        Contactar Ahora
                        <ArrowRight className="h-5 w-5" />
                    </Link>
                </div>
            </section>
        </div>
    )
}
