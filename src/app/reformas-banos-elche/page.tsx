'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, MapPin, Star } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PROJECTS } from '@/data/projects'
import type { Metadata } from 'next'

gsap.registerPlugin(ScrollTrigger)

// Metadata must be exported from a server component or layout, but since this is a client component
// we can't export metadata directly. However, for a landing page, we usually want specific metadata.
// For now, next.js allows mixing if properly handled, or we rely on layout.
// Since this is a client component (hooks), we'll skip the export metadata here 
// and assume layout handles the basics, or we'd need a separate layout.tsx for this route.
// Ideally for SEO we want server rendered metadata.
// Let's keep it simple for now as a client page for the visual part.

export default function ReformasBanosElche() {
    const headerRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)

    // Filter projects for bathrooms
    const bathroomProjects = PROJECTS.filter(p =>
        p.category === 'Baños' || p.tags.includes('baño') || p.tags.includes('ducha')
    ).slice(0, 3)

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
        <div className="bg-secondary-900 min-h-screen">
            {/* Hero Section SEO Optimized */}
            <section ref={headerRef} className="relative py-32 pt-40">
                <div className="absolute inset-0">
                    <img
                        src="/images/img32-BSParlit.jpg"
                        alt="Reforma de baño en Elche terminada"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-secondary-900/85" />
                </div>
                <div className="container relative mx-auto px-4 text-center">
                    <div className="mb-4 flex justify-center items-center gap-2 text-accent-500 font-bold uppercase tracking-widest">
                        <MapPin className="h-4 w-4" />
                        <span>Elche y Alicante</span>
                    </div>
                    <h1 ref={titleRef} className="font-heading text-5xl font-black uppercase text-cream-500 md:text-7xl lg:text-8xl">
                        Reformas de <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-copper-500">
                            Baños en Elche
                        </span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-cream-400 md:text-xl">
                        Transformamos tu antiguo baño en un espacio de diseño en tiempo récord.
                        Especialistas en cambios de bañera por ducha y alicatados premium.
                    </p>
                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            href="/contacto"
                            className="inline-flex items-center gap-3 bg-accent-500 px-8 py-4 text-lg font-bold uppercase tracking-wider text-secondary-900 transition-all hover:bg-copper-500"
                        >
                            Pedir Presupuesto Gratis
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Value Props */}
            <section className="py-20 bg-secondary-800">
                <div className="container mx-auto px-4">
                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            {
                                title: 'Rápido y Limpio',
                                desc: 'Sabemos que una obra en casa molesta. Por eso trabajamos con plazos cerrados y protección total de tu vivienda.',
                                icon: Star
                            },
                            {
                                title: 'Acabados Premium',
                                desc: 'Expertos en porcelánicos de gran formato, rectificados y microcemento. El acabado perfecto es nuestra firma.',
                                icon: CheckCircle2
                            },
                            {
                                title: 'Gestión Integral',
                                desc: 'Nos encargamos de todo: desescombro, fontanería, electricidad y alicatado. Tú solo disfruta del resultado.',
                                icon: ArrowRight
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-secondary-900 p-8 hover:shadow-xl hover:shadow-accent-500/10 transition-all border border-secondary-800 hover:border-accent-500/30">
                                <item.icon className="h-10 w-10 text-accent-500 mb-6" />
                                <h3 className="text-xl font-heading font-bold text-cream-500 mb-4">{item.title}</h3>
                                <p className="text-cream-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services SEO Content */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid gap-12 lg:grid-cols-2 items-center">
                        <div className="relative">
                            <div className="aspect-[4/3] overflow-hidden rounded-sm">
                                <img
                                    src="/images/img21-4HA_w99P.jpg"
                                    alt="Alicatado de baño moderno"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-accent-500 p-8 hidden md:block">
                                <p className="font-heading font-black text-4xl text-secondary-900">25+</p>
                                <p className="font-bold uppercase tracking-wider text-secondary-900 text-sm">Años de experiencia</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-heading text-4xl md:text-5xl font-black text-cream-500 uppercase mb-6">
                                Todo lo que necesitas para tu baño
                            </h2>
                            <ul className="space-y-4">
                                {[
                                    'Cambio de bañera por plato de ducha en 48h',
                                    'Alicatados con piezas de gran formato',
                                    'Impermeabilización garantizada de zonas húmedas',
                                    'Diseño e instalación de muebles de baño a medida',
                                    'Renovación completa de fontanería y saneamientos'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-6 w-6 text-accent-500 shrink-0" />
                                        <span className="text-lg text-cream-400">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="/contacto"
                                className="mt-8 inline-block text-accent-500 font-bold uppercase tracking-wider hover:text-copper-500 border-b border-accent-500 pb-1"
                            >
                                Consultar disponibilidad
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Local Projects */}
            <section className="py-20 bg-secondary-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-heading text-4xl md:text-5xl font-black text-cream-500 uppercase">
                            Proyectos Realizados en Elche
                        </h2>
                        <p className="text-cream-400 mt-4">Nuestros últimos trabajos de reforma de baños</p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {bathroomProjects.map((project) => (
                            <Link
                                key={project.id}
                                href={`/proyectos/${project.slug}`}
                                className="group relative overflow-hidden aspect-[3/4]"
                            >
                                <img
                                    src={project.coverImage}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-0 left-0 p-6">
                                    <span className="text-accent-500 text-xs font-bold uppercase tracking-wider mb-2 block">
                                        {project.location || 'Elche'}
                                    </span>
                                    <h3 className="font-heading text-2xl font-bold text-cream-500 group-hover:text-accent-500 transition-colors">
                                        {project.title}
                                    </h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEO Text Block (Invisible to visual hierarchy but important for bots) */}
            <section className="py-12 border-t border-secondary-800">
                <div className="container mx-auto px-4">
                    <article className="prose prose-invert prose-cream max-w-none">
                        <h3 className="text-xl font-bold text-cream-500 mb-4">¿Por qué elegirnos para reformar tu baño en Elche?</h3>
                        <p className="text-cream-400 text-sm leading-relaxed">
                            En Alicatados JR somos expertos en <strong>reformas de baños en Elche y Alicante</strong>.
                            Entendemos que el baño es una de las estancias más importantes de la casa.
                            Nuestro equipo de profesionales se especializa en la colocación de azulejos de alta calidad,
                            grifería moderna y soluciones de almacenamiento inteligentes. Ya sea una pequeña reforma o
                            un proyecto integral, garantizamos acabados de lujo y durabilidad.
                        </p>
                    </article>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-20 bg-accent-500">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-heading text-4xl font-black uppercase text-secondary-900 mb-6">
                        ¿Listo para estrenar baño?
                    </h2>
                    <p className="text-secondary-900/80 text-xl mb-8 max-w-2xl mx-auto font-medium">
                        Solicita tu presupuesto sin compromiso hoy mismo. Visitamos tu vivienda en Elche gratis.
                    </p>
                    <Link
                        href="/contacto"
                        className="inline-flex items-center gap-3 bg-secondary-900 px-10 py-5 text-xl font-bold uppercase tracking-wider text-cream-500 transition-all hover:bg-secondary-800 hover:shadow-lg"
                    >
                        Pedir Presupuesto
                        <ArrowRight className="h-6 w-6" />
                    </Link>
                </div>
            </section>
        </div>
    )
}
