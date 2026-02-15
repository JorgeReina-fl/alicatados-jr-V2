'use client'

import Link from 'next/link'
import { Instagram, Facebook, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-secondary-900 border-t border-secondary-800">
            {/* Main Footer */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link href="/">
                            <span className="font-heading text-4xl font-black uppercase text-cream-500">
                                ALICATADOS<span className="text-accent-500">JR</span>
                            </span>
                        </Link>
                        <p className="mt-6 max-w-md text-lg text-cream-400">
                            Más de 25 años transformando espacios en Elche con calidad,
                            profesionalidad y los mejores acabados del mercado.
                        </p>
                        <Link
                            href="/contacto"
                            className="mt-8 inline-flex items-center gap-2 bg-accent-500 px-6 py-3 font-bold uppercase tracking-wider text-secondary-900 transition-all hover:bg-copper-500"
                        >
                            Solicitar Presupuesto
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-accent-500">
                            Enlaces
                        </h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Servicios', href: '/servicios' },
                                { name: 'Reformas Baños', href: '/reformas-banos-elche' },
                                { name: 'Proyectos', href: '/proyectos' },
                                { name: 'Blog', href: '/blog' },
                                { name: 'Nosotros', href: '/nosotros' },
                                { name: 'Contacto', href: '/contacto' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-cream-400 transition-colors hover:text-cream-500"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-accent-500">
                            Contacto
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="tel:+34633238434"
                                    className="flex items-center gap-3 text-cream-400 transition-colors hover:text-cream-500"
                                >
                                    <Phone className="h-5 w-5 text-accent-500" />
                                    +34 633 23 84 34
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:jorgereina.rp@hotmail.com"
                                    className="flex items-center gap-3 text-cream-400 transition-colors hover:text-cream-500"
                                >
                                    <Mail className="h-5 w-5 text-accent-500" />
                                    jorgereina.rp@hotmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-cream-400">
                                <MapPin className="mt-1 h-5 w-5 text-accent-500" />
                                <span>Elche, Alicante<br />España</span>
                            </li>
                        </ul>

                        {/* Social */}
                        <div className="mt-8 flex gap-4">
                            <a
                                href="https://www.instagram.com/alicatadosjr/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-12 w-12 items-center justify-center bg-secondary-800 text-cream-400 transition-all hover:bg-accent-500 hover:text-secondary-900"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a
                                href="https://www.facebook.com/alicatadosjr/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-12 w-12 items-center justify-center bg-secondary-800 text-cream-400 transition-all hover:bg-accent-500 hover:text-secondary-900"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-secondary-800 py-6">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-sm text-cream-600">
                        © {currentYear} Alicatados JR. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}
