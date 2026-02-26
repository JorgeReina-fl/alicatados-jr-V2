import type { Metadata } from 'next'
import ServiciosClient from './ServiciosClient'

export const metadata: Metadata = {
    title: 'Servicios de Alicatados y Reformas en Elche | Alicatados JR',
    description: 'Descubre nuestros servicios profesionales de alicatados, reformas de cocinas y baños, y pavimentos en Elche. Más de 25 años de experiencia.',
    alternates: { canonical: 'https://alicatadosjr.com/servicios' },
}

export default function ServiciosPage() {
    return <ServiciosClient />
}
