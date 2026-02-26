import type { Metadata } from 'next'
import NosotrosClient from './NosotrosClient'

export const metadata: Metadata = {
    title: 'Sobre Nosotros - Empresa de Reformas en Elche | Alicatados JR',
    description: 'Conoce a Alicatados JR, una empresa familiar con más de 25 años de experiencia dedicada a los alicatados y reformas integrales en Elche y Alicante.',
    alternates: { canonical: 'https://alicatadosjr.com/nosotros' },
}

export default function NosotrosPage() {
    return <NosotrosClient />
}
