import type { Metadata } from 'next'
import ProcesoClient from './ProcesoClient'

export const metadata: Metadata = {
    title: 'Nuestro Proceso de Trabajo en Reformas | Alicatados JR',
    description: 'Conoce cómo trabajamos en Alicatados JR. Un proceso transparente y profesional para tu reforma en Elche, desde el diseño hasta el acabado final.',
    alternates: { canonical: 'https://alicatadosjr.com/proceso' },
}

export default function ProcesoPage() {
    return <ProcesoClient />
}
