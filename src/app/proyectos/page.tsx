'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PROJECTS, CATEGORIES } from '@/data/projects'

gsap.registerPlugin(ScrollTrigger)

export default function ProyectosPage() {
    const [activeCategory, setActiveCategory] = useState('Todos')
    const headerRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)

    const filteredProjects = activeCategory === 'Todos'
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === activeCategory)

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
                        src="/images/img2-D-Uqho5x.jpg"
                        alt=""
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-secondary-900/85" />
                </div>
                <div className="container relative mx-auto px-4 text-center">
                    <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-accent-500">
                        Portfolio
                    </p>
                    <h1 ref={titleRef} className="font-heading text-6xl font-black uppercase text-cream-500 md:text-8xl">
                        PROYECTOS
                    </h1>
                </div>
            </section>

            {/* Filter */}
            <section className="border-b border-secondary-800 py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-4">
                        {CATEGORIES.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all ${activeCategory === category
                                    ? 'bg-accent-500 text-secondary-900'
                                    : 'bg-secondary-800 text-cream-400 hover:bg-secondary-700 hover:text-cream-500'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {filteredProjects.map((project) => (
                            <Link
                                key={project.id}
                                href={`/proyectos/${project.slug}`}
                                className="group relative overflow-hidden"
                            >
                                <div className="aspect-[4/3] w-full overflow-hidden">
                                    <img
                                        src={project.coverImage}
                                        alt={project.title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                                <div className="absolute bottom-0 left-0 right-0 translate-y-full p-6 transition-transform group-hover:translate-y-0">
                                    <span className="mb-2 inline-block bg-accent-500 px-3 py-1 text-xs font-bold uppercase text-secondary-900">
                                        {project.category}
                                    </span>
                                    <h3 className="font-heading text-2xl font-black text-cream-500">
                                        {project.title}
                                    </h3>
                                </div>
                                {/* Always visible category badge */}
                                <div className="absolute top-4 left-4 bg-secondary-900/80 px-3 py-1">
                                    <span className="text-xs font-bold uppercase text-accent-500">
                                        {project.category}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="bg-primary-800 p-12 text-center md:p-16">
                        <h2 className="mb-6 font-heading text-4xl font-black uppercase text-copper-100 md:text-5xl">
                            ¿TE GUSTA LO QUE VES?
                        </h2>
                        <p className="mx-auto mb-8 max-w-2xl text-lg text-copper-100">
                            Podemos hacer lo mismo por ti. Contacta con nosotros y cuéntanos tu proyecto.
                        </p>
                        <Link
                            href="/contacto"
                            className="inline-flex items-center gap-3 bg-accent-500 px-10 py-5 text-lg font-bold uppercase tracking-wider text-secondary-900 transition-all hover:bg-copper-500"
                        >
                            Iniciar Proyecto
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
