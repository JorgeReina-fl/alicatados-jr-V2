import type { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
    title: 'Alicatados JR - Expertos en Alicatados y Reformas en Elche',
    description: 'Especialistas en alicatados de cocinas, baños y espacios en Elche y Alicante. Más de 25 años de experiencia en colocación de azulejos con acabados premium.',
    alternates: { canonical: 'https://alicatadosjr.com/' },
}

export default function HomePage() {
    return <HomeClient />
}
