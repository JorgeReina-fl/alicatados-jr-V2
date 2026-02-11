'use server'

interface ContactFormData {
    name: string
    email: string
    phone: string
    message: string
}

export async function submitContactForm(formData: ContactFormData) {
    const FORMSPREE_URL = process.env.FORMSPREE_URL

    if (!FORMSPREE_URL) {
        return { success: false, error: 'Configuración de servidor incompleta. Falta FORMSPREE_URL.' }
    }

    try {
        const response = await fetch(FORMSPREE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                message: formData.message,
            }),
        })

        if (response.ok) {
            return { success: true }
        }

        const errorData = await response.json().catch(() => null)
        return {
            success: false,
            error: errorData?.error || 'Error al enviar el formulario. Inténtalo de nuevo.',
        }
    } catch {
        return { success: false, error: 'Error de conexión. Comprueba tu conexión a internet.' }
    }
}
