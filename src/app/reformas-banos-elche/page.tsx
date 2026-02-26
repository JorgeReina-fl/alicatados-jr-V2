import type { Metadata } from 'next'
import ReformasBanosClient from './ReformasBanosClient'

export const metadata: Metadata = {
    title: 'Reformas de Baños en Elche y Alicante | Alicatados JR',
    description: 'Especialistas en reformas de baños en Elche. Cambiamos tu bañera por ducha en tiempo récord, con diseño y gestión integral.',
    alternates: { canonical: 'https://alicatadosjr.com/reformas-banos-elche' },
}

export default function ReformasBanosPage() {
    return <ReformasBanosClient />
}
