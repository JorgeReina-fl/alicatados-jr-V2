import type { Metadata } from 'next'
import ProyectosClient from './ProyectosClient'

export const metadata: Metadata = {
    title: 'Proyectos de Reformas y Alicatados en Elche | Alicatados JR',
    description: 'Explora nuestro portfolio de proyectos de reformas integrales, cocinas y baños en Elche y Alicante. Trabajos con acabados de primera calidad.',
    alternates: { canonical: 'https://alicatadosjr.com/proyectos' },
}

export default function ProyectosPage() {
    return <ProyectosClient />
}
