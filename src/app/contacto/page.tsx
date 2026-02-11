'use client'

import { useEffect, useRef, useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, Instagram, Facebook } from 'lucide-react'
import gsap from 'gsap'

export default function ContactoPage() {
    const headerRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [errorMsg, setErrorMsg] = useState<string | null>(null)

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setErrorMsg(null)

        try {
            const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_URL || 'https://formspree.io/f/mkovwdll', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(formState),
            })

            setIsSubmitting(false)

            if (response.ok) {
                setIsSubmitted(true)
                setFormState({ name: '', email: '', phone: '', message: '' })
            } else {
                setErrorMsg('Error al enviar el formulario. Inténtalo de nuevo.')
            }
        } catch {
            setIsSubmitting(false)
            setErrorMsg('Error de conexión. Comprueba tu conexión a internet.')
        }
    }

    return (
        <div className="bg-secondary-900 min-h-screen">
            {/* Hero */}
            <section ref={headerRef} className="relative py-32 pt-40">
                <div className="absolute inset-0">
                    <img
                        src="/images/img30-K4WwwNIy.jpg"
                        alt=""
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-secondary-900/85" />
                </div>
                <div className="container relative mx-auto px-4 text-center">
                    <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-accent-500">
                        Hablemos
                    </p>
                    <h1 ref={titleRef} className="font-heading text-6xl font-black uppercase text-cream-500 md:text-8xl">
                        CONTACTO
                    </h1>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid gap-16 lg:grid-cols-2">
                        {/* Form */}
                        <div>
                            <h2 className="mb-8 font-heading text-4xl font-black uppercase text-cream-500">
                                ENVÍANOS UN MENSAJE
                            </h2>

                            {isSubmitted ? (
                                <div className="bg-primary-800 p-8 text-center text-copper-100">
                                    <div className="mb-4 text-5xl">✓</div>
                                    <h3 className="mb-2 font-heading text-2xl font-bold text-copper-100">
                                        ¡MENSAJE ENVIADO!
                                    </h3>
                                    <p className="text-copper-100">
                                        Te contactaremos lo antes posible.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="mb-2 block text-sm font-bold uppercase tracking-wider text-cream-400">
                                            Nombre *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                            className="w-full border-0 bg-secondary-800 px-4 py-4 text-cream-500 placeholder-cream-600 focus:outline-none focus:ring-2 focus:ring-accent-500"
                                            placeholder="Tu nombre"
                                        />
                                    </div>
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <div>
                                            <label className="mb-2 block text-sm font-bold uppercase tracking-wider text-cream-400">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                value={formState.email}
                                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                                className="w-full border-0 bg-secondary-800 px-4 py-4 text-cream-500 placeholder-cream-600 focus:outline-none focus:ring-2 focus:ring-accent-500"
                                                placeholder="tu@email.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-sm font-bold uppercase tracking-wider text-cream-400">
                                                Teléfono
                                            </label>
                                            <input
                                                type="tel"
                                                value={formState.phone}
                                                onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                                                className="w-full border-0 bg-secondary-800 px-4 py-4 text-cream-500 placeholder-cream-600 focus:outline-none focus:ring-2 focus:ring-accent-500"
                                                placeholder="+34 600 000 000"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="mb-2 block text-sm font-bold uppercase tracking-wider text-cream-400">
                                            Mensaje *
                                        </label>
                                        <textarea
                                            required
                                            rows={6}
                                            value={formState.message}
                                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                            className="w-full resize-none border-0 bg-secondary-800 px-4 py-4 text-cream-500 placeholder-cream-600 focus:outline-none focus:ring-2 focus:ring-accent-500"
                                            placeholder="Cuéntanos tu proyecto..."
                                        />
                                    </div>
                                    {errorMsg && (
                                        <div className="bg-red-900/50 border border-red-500/50 px-4 py-3 text-red-300 text-sm">
                                            {errorMsg}
                                        </div>
                                    )}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="flex w-full items-center justify-center gap-3 bg-accent-500 px-8 py-5 font-bold uppercase tracking-wider text-secondary-900 transition-all hover:bg-copper-500 disabled:opacity-50"
                                    >
                                        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                                        <Send className="h-5 w-5" />
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="mb-8 font-heading text-4xl font-black uppercase text-cream-500">
                                    INFORMACIÓN
                                </h2>
                                <div className="space-y-6">
                                    <a
                                        href="tel:+34633238434"
                                        className="flex items-center gap-4 bg-secondary-800 p-6 transition-all hover:bg-secondary-700"
                                    >
                                        <div className="flex h-14 w-14 items-center justify-center bg-accent-500">
                                            <Phone className="h-6 w-6 text-secondary-900" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold uppercase text-cream-400">Teléfono</p>
                                            <p className="text-xl text-cream-500">+34 633 23 84 34</p>
                                        </div>
                                    </a>
                                    <a
                                        href="mailto:jorgereina.rp@hotmail.com"
                                        className="flex items-center gap-4 bg-secondary-800 p-6 transition-all hover:bg-secondary-700"
                                    >
                                        <div className="flex h-14 w-14 items-center justify-center bg-accent-500">
                                            <Mail className="h-6 w-6 text-secondary-900" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold uppercase text-cream-400">Email</p>
                                            <p className="text-xl text-cream-500">jorgereina.rp@hotmail.com</p>
                                        </div>
                                    </a>
                                    <div className="flex items-center gap-4 bg-secondary-800 p-6">
                                        <div className="flex h-14 w-14 items-center justify-center bg-accent-500">
                                            <MapPin className="h-6 w-6 text-secondary-900" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold uppercase text-cream-400">Ubicación</p>
                                            <p className="text-xl text-cream-500">Elche, Alicante</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 bg-secondary-800 p-6">
                                        <div className="flex h-14 w-14 items-center justify-center bg-accent-500">
                                            <Clock className="h-6 w-6 text-secondary-900" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold uppercase text-cream-400">Horario</p>
                                            <p className="text-xl text-cream-500">Lun - Vie: 9:00 - 19:00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social */}
                            <div>
                                <h3 className="mb-6 font-heading text-2xl font-black uppercase text-cream-500">
                                    SÍGUENOS
                                </h3>
                                <div className="flex gap-4">
                                    <a
                                        href="https://www.instagram.com/alicatadosjr/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-16 w-16 items-center justify-center bg-secondary-800 text-cream-400 transition-all hover:bg-accent-500 hover:text-secondary-900"
                                    >
                                        <Instagram className="h-7 w-7" />
                                    </a>
                                    <a
                                        href="https://www.facebook.com/alicatadosjr/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-16 w-16 items-center justify-center bg-secondary-800 text-cream-400 transition-all hover:bg-accent-500 hover:text-secondary-900"
                                    >
                                        <Facebook className="h-7 w-7" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
