'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, Ruler, HardHat, Sparkles } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PHASES = [
    {
        id: 1,
        title: 'DISEÑO',
        subtitle: 'Planificación y Visualización',
        icon: Ruler,
        image: '/images/img21-4HA_w99P.jpg',
        description: 'Antes de empezar cualquier obra, necesitamos entender tu visión. En esta fase trabajamos contigo para crear el proyecto perfecto.',
        steps: [
            {
                title: 'Visita Inicial',
                description: 'Acudimos a tu domicilio para tomar medidas exactas, evaluar el estado actual y escuchar todas tus ideas y necesidades.',
            },
            {
                title: 'Propuesta y Presupuesto',
                description: 'Elaboramos un presupuesto detallado y transparente, sin sorpresas. Incluye materiales, mano de obra y plazos estimados.',
            },
            {
                title: 'Selección de Materiales',
                description: 'Te asesoramos en la elección de azulejos, sanitarios, grifería y todos los materiales. Trabajamos con las mejores marcas del mercado.',
            },
            {
                title: 'Planificación Final',
                description: 'Definimos el calendario de obra, coordinamos los diferentes gremios y te explicamos cada paso del proceso.',
            },
        ],
        highlight: 'Presupuesto sin compromiso',
    },
    {
        id: 2,
        title: 'OBRA',
        subtitle: 'Ejecución Profesional',
        icon: HardHat,
        image: '/images/img10-Dq8tYZyD.jpg',
        description: 'La fase de ejecución es donde años de experiencia marcan la diferencia. Cada detalle cuenta para un resultado impecable.',
        steps: [
            {
                title: 'Preparación del Espacio',
                description: 'Protegemos las zonas de paso y mobiliario. Retiramos los materiales antiguos con cuidado y gestionamos los escombros.',
            },
            {
                title: 'Instalaciones',
                description: 'Renovamos o adaptamos las instalaciones de fontanería y electricidad según el nuevo diseño. Todo con certificación oficial.',
            },
            {
                title: 'Alicatado y Solado',
                description: 'Colocación experta de azulejos, porcelánicos y pavimentos. Utilizamos técnicas de última generación para acabados perfectos.',
            },
            {
                title: 'Montaje e Instalación',
                description: 'Instalamos sanitarios, muebles, mamparas y todos los elementos. Cada pieza se coloca con precisión milimétrica.',
            },
        ],
        highlight: 'Cumplimiento de plazos garantizado',
    },
    {
        id: 3,
        title: 'ACABADOS',
        subtitle: 'Perfección en el Detalle',
        icon: Sparkles,
        image: '/images/img32-BSParlit.jpg',
        description: 'Los acabados son nuestra firma. Es aquí donde convertimos una reforma en una obra de arte que superará tus expectativas.',
        steps: [
            {
                title: 'Remates y Juntas',
                description: 'Sellamos todas las juntas con productos premium. Aplicamos silicona sanitaria de alta calidad para una durabilidad máxima.',
            },
            {
                title: 'Ajustes Finales',
                description: 'Verificamos el funcionamiento de cada elemento: grifos, desagües, enchufes, iluminación. Todo debe funcionar perfectamente.',
            },
            {
                title: 'Limpieza Profesional',
                description: 'Realizamos una limpieza a fondo del espacio reformado. Entregamos tu nuevo baño o cocina listo para usar.',
            },
            {
                title: 'Entrega y Revisión Final',
                description: 'Te explicamos el mantenimiento recomendado y te entregamos la documentación e información sobre los trabajos realizados.',
            },
        ],
        highlight: 'Compromiso de calidad en cada detalle',
    },
]

export default function ProcesoPage() {
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
                        Cómo Trabajamos
                    </p>
                    <h1 ref={titleRef} className="font-heading text-6xl font-black uppercase text-cream-500 md:text-8xl">
                        NUESTRO PROCESO
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-cream-400">
                        Más de 25 años de experiencia nos han enseñado que el éxito de una reforma
                        está en la planificación, la ejecución profesional y la atención al detalle.
                    </p>
                </div>
            </section>

            {/* Timeline Overview */}
            <section className="py-16 border-b border-secondary-800">
                <div className="container mx-auto px-4">
                    <div className="grid gap-8 md:grid-cols-3">
                        {PHASES.map((phase) => (
                            <a
                                key={phase.id}
                                href={`#fase-${phase.id}`}
                                className="group flex items-center gap-6 bg-secondary-800 p-6 transition-all hover:bg-secondary-700"
                            >
                                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center bg-accent-500 text-secondary-900 transition-transform group-hover:scale-110">
                                    <span className="font-heading text-3xl font-black">{phase.id}</span>
                                </div>
                                <div>
                                    <h3 className="font-heading text-2xl font-black text-cream-500 group-hover:text-accent-500 transition-colors">
                                        {phase.title}
                                    </h3>
                                    <p className="text-sm text-cream-400">{phase.subtitle}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Phases */}
            {PHASES.map((phase, index) => (
                <section
                    key={phase.id}
                    id={`fase-${phase.id}`}
                    className="py-24"
                >
                    <div className="container mx-auto px-4">
                        <div className={`grid items-center gap-16 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                            {/* Image */}
                            <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                <div className="aspect-[4/3] w-full overflow-hidden">
                                    <Image
                                        src={phase.image}
                                        alt={phase.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div>
                                <div className="mb-6 flex items-center gap-4">
                                    <div className="flex h-14 w-14 items-center justify-center bg-accent-500">
                                        <phase.icon className="h-7 w-7 text-secondary-900" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold uppercase tracking-wider text-accent-500">
                                            Fase {phase.id}
                                        </p>
                                        <h2 className="font-heading text-5xl font-black uppercase text-cream-500">
                                            {phase.title}
                                        </h2>
                                    </div>
                                </div>

                                <p className="mb-8 text-lg text-cream-400">{phase.description}</p>

                                {/* Steps */}
                                <div className="space-y-6">
                                    {phase.steps.map((step, stepIndex) => (
                                        <div key={stepIndex} className="flex gap-4">
                                            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center bg-secondary-800 text-accent-500">
                                                <CheckCircle2 className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-cream-500">{step.title}</h4>
                                                <p className="text-sm text-cream-400">{step.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Highlight */}
                                <div className="mt-8 border-l-4 border-accent-500 bg-secondary-800 p-4">
                                    <p className="font-bold text-accent-500">{phase.highlight}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* CTA */}
            <section className="bg-accent-500 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="mb-6 font-heading text-4xl font-black uppercase text-secondary-900 md:text-6xl">
                        ¿EMPEZAMOS TU PROYECTO?
                    </h2>
                    <p className="mx-auto mb-8 max-w-2xl text-lg text-secondary-700">
                        Contacta con nosotros para una visita sin compromiso. Te asesoramos y preparamos
                        un presupuesto personalizado para tu reforma.
                    </p>
                    <Link
                        href="/contacto"
                        className="inline-flex items-center gap-3 bg-secondary-900 px-10 py-5 text-lg font-bold uppercase tracking-wider text-cream-500 transition-all hover:bg-secondary-800"
                    >
                        Solicitar Presupuesto
                        <ArrowRight className="h-5 w-5" />
                    </Link>
                </div>
            </section>
        </div>
    )
}
