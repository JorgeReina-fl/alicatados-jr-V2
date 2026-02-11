import { z } from 'zod'

// Contact Form Validation
export const contactSchema = z.object({
    name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
    email: z.string().email('Email inválido'),
    phone: z.string().min(9, 'Teléfono inválido').optional(),
    message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
})

export type ContactFormData = z.infer<typeof contactSchema>
