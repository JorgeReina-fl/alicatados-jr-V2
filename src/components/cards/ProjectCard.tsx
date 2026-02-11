'use client'
import { useRef } from 'react'
import gsap from 'gsap'
import Image from 'next/image'

interface ProjectCardProps {
    title: string
    category: string
    imageSrc: string
    href?: string
}

export default function ProjectCard({ title, category, imageSrc, href = '/proyectos' }: ProjectCardProps) {
    const cardRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return

        const rect = cardRef.current.getBoundingClientRect()

        // Posición del ratón relativa al centro (-0.5 a 0.5)
        const xPct = (e.clientX - rect.left) / rect.width - 0.5
        const yPct = (e.clientY - rect.top) / rect.height - 0.5

        // Rotación 3D basada en posición del cursor
        gsap.to(cardRef.current, {
            rotateY: xPct * 20,
            rotateX: -yPct * 20,
            duration: 0.5,
            ease: 'power2.out',
            overwrite: 'auto',
            transformPerspective: 1000
        })

        // Efecto de profundidad interna (paralaje)
        if (contentRef.current) {
            gsap.to(contentRef.current, {
                x: xPct * 40,
                y: yPct * 40,
                duration: 0.5
            })
        }
    }

    const handleMouseLeave = () => {
        if (!cardRef.current) return

        gsap.to(cardRef.current, {
            rotateY: 0,
            rotateX: 0,
            duration: 0.8,
            ease: 'elastic.out(1, 0.5)'
        })

        if (contentRef.current) {
            gsap.to(contentRef.current, { x: 0, y: 0, duration: 0.8 })
        }
    }

    return (
        <div
            className="perspective-container p-4"
            style={{ perspective: '1000px' }}
        >
            <a href={href}>
                <div
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="group relative h-[400px] w-full cursor-pointer overflow-hidden shadow-2xl transition-shadow hover:shadow-accent-500/20"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {/* Imagen de Fondo */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={imageSrc}
                            alt={title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>

                    {/* Gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/20 to-transparent" />

                    {/* Contenido Flotante */}
                    <div
                        ref={contentRef}
                        className="pointer-events-none relative z-10 flex h-full flex-col justify-end p-8"
                    >
                        <span className="mb-2 inline-block bg-accent-500 px-3 py-1 text-xs font-bold uppercase tracking-widest text-secondary-900">
                            {category}
                        </span>
                        <h3 className="font-heading text-4xl font-black uppercase leading-none text-cream-500">
                            {title}
                        </h3>
                    </div>
                </div>
            </a>
        </div>
    )
}
