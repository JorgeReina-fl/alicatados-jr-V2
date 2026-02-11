import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import ClientLayout from '@/components/ClientLayout'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit',
    display: 'swap',
})

export const metadata: Metadata = {
    title: {
        default: 'Alicatados JR - Expertos en Alicatados en Elche',
        template: '%s | Alicatados JR',
    },
    description:
        'Especialistas en alicatados de cocinas, baños y espacios en Elche y Alicante. Más de 25 años de experiencia en colocación de azulejos con acabados de máxima calidad.',
    keywords: [
        'alicatados',
        'alicatados Elche',
        'colocación azulejos',
        'azulejos cocina',
        'azulejos baño',
        'alicatador Elche',
        'Alicante',
        'reformas baños',
        'reformas cocinas',
    ],
    authors: [{ name: 'Alicatados JR' }],
    openGraph: {
        type: 'website',
        locale: 'es_ES',
        url: 'https://alicatadosjr.com',
        siteName: 'Alicatados JR',
        title: 'Alicatados JR - Expertos en Alicatados en Elche',
        description:
            'Más de 25 años como especialistas en alicatados en Elche. Cocinas, baños y todo tipo de espacios con la máxima calidad.',
    },
    icons: {
        icon: '/images/logo_Jr.png',
        apple: '/images/logo_Jr.png',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es" className={`${inter.variable} ${outfit.variable}`}>
            <body className="font-sans antialiased bg-secondary">
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-NVGJCTDH"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    />
                </noscript>
                {/* End Google Tag Manager (noscript) */}

                {/* CookieYes GDPR Cookie Consent Banner */}
                <Script
                    id="cookieyes"
                    src="https://cdn-cookieyes.com/client_data/44e80544a73ea57497807a68229b2e61/script.js"
                    strategy="beforeInteractive"
                />

                {/* Google Tag Manager */}
                <Script id="google-tag-manager" strategy="afterInteractive">
                    {`
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-NVGJCTDH');
                    `}
                </Script>
                {/* End Google Tag Manager */}

                {/* Google Tag (gtag.js) */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-1PEGZXZXV2"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-1PEGZXZXV2');
                    `}
                </Script>

                <Header />
                <div className="mx-auto max-w-screen-2xl">
                    <ClientLayout>
                        <main>{children}</main>
                        <Footer />
                    </ClientLayout>
                </div>
            </body>
        </html>
    )
}
