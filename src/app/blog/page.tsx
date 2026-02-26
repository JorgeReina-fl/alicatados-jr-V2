import type { Metadata } from 'next'
import BlogClient from './BlogClient'

export const metadata: Metadata = {
    title: 'Blog sobre Reformas, Diseño y Alicatados en Elche | Alicatados JR',
    description: 'Lee nuestros artículos sobre tendencias, consejos y guías prácticas para tus reformas, diseño de interiores y elegir azulejos.',
    alternates: { canonical: 'https://alicatadosjr.com/blog' },
}

export default function BlogPage() {
    return <BlogClient />
}
