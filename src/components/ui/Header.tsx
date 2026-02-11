'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Proceso', href: '/proceso' },
    { name: 'Proyectos', href: '/proyectos' },
    { name: 'Blog', href: '/blog' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Contacto', href: '/contacto' },
]

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={cn(
                'fixed top-0 z-50 w-full transition-all duration-500',
                isScrolled
                    ? 'bg-secondary-900/95 backdrop-blur-md py-3'
                    : 'bg-transparent py-6'
            )}
        >
            <nav className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="group flex items-center gap-3">
                        <span className={cn(
                            'font-heading text-2xl font-black uppercase tracking-tight transition-colors group-hover:text-accent-500 md:text-3xl',
                            isScrolled ? 'text-cream-500' : 'text-secondary-50'
                        )}>
                            ALICATADOS<span className="text-accent-500">JR</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-8 lg:flex">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        'relative text-sm font-bold uppercase tracking-wider transition-colors',
                                        isActive
                                            ? 'text-accent-500'
                                            : isScrolled
                                                ? 'text-cream-400 hover:text-cream-500'
                                                : 'text-secondary-100 hover:text-secondary-50'
                                    )}
                                >
                                    {item.name}
                                    {isActive && (
                                        <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-accent-500" />
                                    )}
                                </Link>
                            )
                        })}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <Link
                            href="/contacto"
                            className="bg-accent-500 px-6 py-3 text-sm font-bold uppercase tracking-wider text-secondary-900 transition-all hover:bg-copper-500 hover:shadow-lg hover:shadow-accent-500/30"
                        >
                            Presupuesto
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={cn(
                            'lg:hidden p-2 transition-colors',
                            isScrolled ? 'text-cream-500' : 'text-secondary-50'
                        )}
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-7 w-7" />
                        ) : (
                            <Menu className="h-7 w-7" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 top-0 left-0 z-50 flex flex-col bg-secondary-900 lg:hidden">
                        <div className="flex items-center justify-between p-4">
                            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                                <span className="font-heading text-2xl font-black uppercase text-cream-500">
                                    ALICATADOS<span className="text-accent-500">JR</span>
                                </span>
                            </Link>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 text-cream-500"
                            >
                                <X className="h-7 w-7" />
                            </button>
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-center gap-8">
                            {navigation.map((item) => {
                                const isActive = pathname === item.href
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={cn(
                                            'font-heading text-4xl font-black uppercase transition-colors',
                                            isActive
                                                ? 'text-accent-500'
                                                : 'text-cream-500 hover:text-accent-500'
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                )
                            })}
                            <Link
                                href="/contacto"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-8 bg-accent-500 px-10 py-4 text-lg font-bold uppercase tracking-wider text-secondary-900"
                            >
                                Presupuesto
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}
