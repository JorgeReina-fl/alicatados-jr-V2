'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Award, Users, Clock, CheckCircle2 } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function NosotrosPage() {
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
        <div className="bg-secondary-900 min-h-screen">
            {/* Hero */}
            <section ref={headerRef} className="relative py-32 pt-40">
                <div className="absolute inset-0">
                    <img
                        src="/images/img10-Dq8tYZyD.jpg"
                        alt=""
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-secondary-900/85" />
                </div>
                <div className="container relative mx-auto px-4 text-center">
                    <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-accent-500">
                        Quiénes Somos
                    </p>
                    <h1 ref={titleRef} className="font-heading text-6xl font-black uppercase text-cream-500 md:text-8xl">
                        NOSOTROS
                    </h1>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid items-center gap-16 lg:grid-cols-2">
                        <div>
                            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-accent-500">
                                Nuestra Historia
                            </p>
                            <h2 className="mb-8 font-heading text-5xl font-black uppercase text-cream-500">
                                +25 AÑOS DE EXPERIENCIA
                            </h2>
                            <div className="space-y-6 text-lg text-cream-400">
                                <p>
                                    Alicatados JR nació hace más de 25 años con una visión clara: ofrecer
                                    servicios de reformas integrales de la más alta calidad en Elche y
                                    alrededores.
                                </p>
                                <p>
                                    Lo que comenzó como un pequeño taller familiar ha crecido hasta
                                    convertirse en una de las empresas de referencia en el sector,
                                    manteniendo siempre los valores de calidad, profesionalidad y
                                    atención personalizada.
                                </p>
                                <p>
                                    Cada proyecto es único y lo abordamos con la misma dedicación,
                                    independientemente de su tamaño. Nuestra experiencia abarca todo
                                    tipo de reformas, desde cocinas y baños hasta proyectos integrales.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/5] w-full overflow-hidden">
                                <img
                                    src="/images/img15-Cjy6MhaF.jpg"
                                    alt="Equipo Alicatados JR"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-8 -left-8 bg-accent-500 p-8">
                                <div className="font-heading text-6xl font-black text-secondary-900">+25</div>
                                <div className="text-sm font-bold uppercase tracking-wider text-secondary-700">
                                    Años
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="bg-primary-900 py-24">
                <div className="container mx-auto px-4">
                    <div className="mb-16 text-center">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-accent-500">
                            Valores
                        </p>
                        <h2 className="font-heading text-5xl font-black uppercase text-secondary-800 md:text-6xl">
                            LO QUE NOS DEFINE
                        </h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            { icon: CheckCircle2, title: 'CALIDAD', desc: 'Solo los mejores materiales y acabados' },
                            { icon: Users, title: 'CONFIANZA', desc: 'Transparencia en cada proyecto' },
                            { icon: Award, title: 'EXPERIENCIA', desc: '+25 años resolviendo proyectos' },
                            { icon: Clock, title: 'PUNTUALIDAD', desc: 'Respetamos plazos acordados' },
                        ].map((value) => (
                            <div key={value.title} className="group bg-secondary-800 p-8 transition-all hover:bg-secondary-700">
                                <value.icon className="mb-6 h-12 w-12 text-accent-500" />
                                <h3 className="mb-4 font-heading text-2xl font-black text-cream-500">
                                    {value.title}
                                </h3>
                                <p className="text-cream-400">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-accent-500 py-20">
                <div className="container mx-auto px-4">
                    <div className="grid gap-8 text-center md:grid-cols-4">
                        {[
                            { number: '+25', label: 'AÑOS' },
                            { number: '+500', label: 'PROYECTOS' },
                            { number: '100%', label: 'SATISFACCIÓN' },
                            { number: '24/7', label: 'ATENCIÓN' },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <div className="font-heading text-6xl font-black text-secondary-900 md:text-7xl">
                                    {stat.number}
                                </div>
                                <div className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-secondary-700">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid items-center gap-16 lg:grid-cols-2">
                        <div className="relative order-2 lg:order-1">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="aspect-square overflow-hidden">
                                    <img
                                        src="/images/img18-D6mNq2Pj.jpg"
                                        alt=""
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="mt-8 aspect-square overflow-hidden">
                                    <img
                                        src="/images/img21-Ca1Ae5GE.jpg"
                                        alt=""
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-accent-500">
                                Por Qué Elegirnos
                            </p>
                            <h2 className="mb-8 font-heading text-5xl font-black uppercase text-cream-500">
                                COMPROMISO TOTAL
                            </h2>
                            <ul className="space-y-6">
                                {[
                                    'Presupuesto personalizado sin compromiso',
                                    'Materiales de primera calidad',
                                    'Equipo profesional cualificado',
                                    'Atención al detalle en cada proyecto',
                                    'Atención al cliente 24/7',
                                    'Cumplimiento de plazos',
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-4 text-lg text-cream-400">
                                        <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-accent-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="/contacto"
                                className="mt-10 inline-flex items-center gap-3 bg-accent-500 px-8 py-4 font-bold uppercase tracking-wider text-secondary-900 transition-all hover:bg-copper-500"
                            >
                                Contactar
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-32">
                <div className="absolute inset-0">
                    <img
                        src="/images/img25-Cou1-Vmg.jpg"
                        alt=""
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-secondary-900/85" />
                </div>
                <div className="container relative mx-auto px-4 text-center">
                    <h2 className="mb-6 font-heading text-5xl font-black uppercase text-cream-500 md:text-7xl">
                        ¿EMPEZAMOS?
                    </h2>
                    <p className="mx-auto mb-10 max-w-2xl text-xl text-cream-400">
                        Estamos listos para hacer realidad tu proyecto
                    </p>
                    <Link
                        href="/contacto"
                        className="inline-flex items-center gap-3 bg-accent-500 px-12 py-6 text-xl font-bold uppercase tracking-wider text-secondary-900 transition-all hover:bg-copper-500"
                    >
                        Solicitar Presupuesto
                        <ArrowRight className="h-6 w-6" />
                    </Link>
                </div>
            </section>
        </div>
    )
}
