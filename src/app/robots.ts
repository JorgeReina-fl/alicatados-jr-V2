import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: [],
        },
        sitemap: 'https://alicatadosjr.com/sitemap.xml', // Update with your actual domain
    }
}
