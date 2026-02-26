'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import ProcessSection from '@/components/sections/ProcessSection'
import ProjectCard from '@/components/cards/ProjectCard'

// Project images for parallax section
const PROJECTS = [
    { id: 1, image: '/images/modern_kitchen.png', title: 'Cocina Moderna', category: 'Cocinas' },
    { id: 2, image: '/images/img32-BSParlit.jpg', title: 'Baño Premium', category: 'Baños' },
    { id: 3, image: '/images/img21-Ca1Ae5GE.jpg', title: 'Barbacoa Exterior', category: 'Exteriores' },
    { id: 4, image: '/images/img24-BiBiv1DO.jpg', title: 'Ducha Moderna', category: 'Baños' },
    { id: 5, image: '/images/img2-D-Uqho5x.jpg', title: 'Escalera Mármol', category: 'Suelos' },
    { id: 6, image: '/images/img21-4HA_w99P.jpg', title: 'Ducha Mármol', category: 'Baños' },
]

export default function HomePage() {
    return (
        <div className="bg-secondary-900">
            {/* HERO SECTION with Video Masking */}
            <Hero />

            {/* INTRO SECTION */}
            <section className="relative z-10 bg-secondary-900 py-32">
                <div className="container mx-auto px-4 text-center">
                    <p className="mx-auto max-w-3xl text-2xl leading-relaxed text-cream-400 md:text-3xl">
                        Más de <span className="font-bold text-accent-500">25 años</span> creando
                        espacios únicos en Elche. Cocinas, baños y reformas integrales con la
                        <span className="font-bold text-accent-500"> máxima calidad</span>.
                    </p>
                </div>
            </section>

            {/* PROJECTS SECTION - 3D Parallax Cards */}
            <section className="relative bg-secondary-900 py-32">
                <div className="container mx-auto px-4">
                    <div className="mb-20">
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-accent-500">
                            Portfolio
                        </p>
                        <h2 className="pt-[5px] overflow-hidden font-heading text-6xl font-black uppercase text-cream-500 md:text-8xl">
                            PROYECTOS
                        </h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {PROJECTS.map((project) => (
                            <ProjectCard
                                key={project.id}
                                title={project.title}
                                category={project.category}
                                imageSrc={project.image}
                                href="/proyectos"
                            />
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Link
                            href="/proyectos"
                            className="group inline-flex items-center gap-3 bg-accent-500 px-10 py-5 text-lg font-bold uppercase tracking-wider text-secondary-900 transition-all hover:bg-copper-500"
                        >
                            Ver Todos
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* PROCESS SECTION - Scroll-Driven State */}
            <ProcessSection />

            {/* STATS SECTION */}
            <section className="bg-accent-500 py-24">
                <div className="container mx-auto px-4">
                    <div className="grid gap-12 text-center md:grid-cols-4">
                        {[
                            { number: '+25', label: 'AÑOS' },
                            { number: '+500', label: 'PROYECTOS' },
                            { number: '100%', label: 'SATISFACCIÓN' },
                            { number: '24/7', label: 'ATENCIÓN' },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <div className="font-heading text-7xl font-black text-secondary-900 md:text-8xl">
                                    {stat.number}
                                </div>
                                <div className="mt-3 text-sm font-bold uppercase tracking-[0.3em] text-secondary-700">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="relative py-32">
                <div className="absolute inset-0">
                    <img
                        src="/images/img32-BSParlit.jpg"
                        alt=""
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-secondary-900/90" />
                </div>
                <div className="container relative z-10 mx-auto px-4 text-center">
                    <h2 className="pt-[5px] overflow-hidden font-heading text-6xl font-black uppercase text-cream-500 md:text-8xl">
                        ¿EMPEZAMOS?
                    </h2>
                    <p className="mx-auto mb-12 max-w-2xl text-xl text-cream-400">
                        Contacta con nosotros y transforma tu espacio
                    </p>
                    <Link
                        href="/contacto"
                        className="group inline-flex items-center gap-4 bg-accent-500 px-12 py-6 text-xl font-bold uppercase tracking-wider text-secondary-900 transition-all hover:bg-copper-500"
                    >
                        Solicitar Presupuesto
                        <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-2" />
                    </Link>
                </div>
            </section>
        </div>
    )
}
