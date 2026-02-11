import Link from 'next/link'

const footerLinks = {
    servicios: [
        { name: 'Reformas de Cocinas', href: '/servicios#cocinas' },
        { name: 'Reformas de Baños', href: '/servicios#banos' },
        { name: 'Alicatados', href: '/servicios#alicatados' },
        { name: 'Reformas Integrales', href: '/servicios#integrales' },
    ],
    empresa: [
        { name: 'Nosotros', href: '/nosotros' },
        { name: 'Proyectos', href: '/proyectos' },
        { name: 'Actualizaciones', href: '/actualizaciones' },
        { name: 'Contacto', href: '/contacto' },
    ],
    legal: [
        { name: 'Política de Privacidad', href: '/privacidad' },
        { name: 'Aviso Legal', href: '/aviso-legal' },
        { name: 'Cookies', href: '/cookies' },
    ],
}

const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/alicatadosjr/', icon: 'instagram' },
    { name: 'Facebook', href: 'https://www.facebook.com/alicatadosjr/', icon: 'facebook' },
    { name: 'Pinterest', href: 'https://www.pinterest.es/alicatadosjr/', icon: 'pinterest' },
]

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-2xl font-bold font-heading text-white mb-4">
                            Alicatados JR
                        </h3>
                        <p className="text-sm text-gray-400">
                            Reformas integrales de cocinas y baños en Elche. Más de 25 años de experiencia.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Servicios</h4>
                        <ul className="space-y-2">
                            {footerLinks.servicios.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm hover:text-primary-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Empresa</h4>
                        <ul className="space-y-2">
                            {footerLinks.empresa.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm hover:text-primary-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Síguenos</h4>
                        <div className="flex space-x-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-primary-400 transition-colors"
                                    aria-label={link.name}
                                >
                                    <span className="sr-only">{link.name}</span>
                                    {/* Icon placeholder - will add lucide-react icons */}
                                    <div className="w-6 h-6 bg-gray-700 rounded-full" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-gray-400">
                            © {new Date().getFullYear()} Alicatados JR. Todos los derechos reservados.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            {footerLinks.legal.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
