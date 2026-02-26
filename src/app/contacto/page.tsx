import type { Metadata } from 'next'
import ContactoClient from './ContactoClient'

export const metadata: Metadata = {
    title: 'Contacto de Reformas y Alicatados en Elche | Alicatados JR',
    description: 'Pide tu presupuesto sin compromiso para alicatados y reformas en Elche. Contáctanos y transforma tu espacio con expertos en el sector.',
    alternates: { canonical: 'https://alicatadosjr.com/contacto' },
}

export default function ContactoPage() {
    return <ContactoClient />
}
