import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, MapPin, Calendar, CheckCircle2 } from 'lucide-react'
import { Metadata } from 'next'
import { PROJECTS, getProjectBySlug, getRelatedProjects } from '@/data/projects'

interface Props {
    params: { slug: string }
}

// Generate static params for all projects
export async function generateStaticParams() {
    return PROJECTS.map((project) => ({
        slug: project.slug,
    }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const project = getProjectBySlug(params.slug)

    if (!project) {
        return {
            title: 'Proyecto no encontrado',
        }
    }

    const baseUrl = 'https://alicatadosjr.com' // Update with your actual domain
    const pageUrl = `${baseUrl}/proyectos/${project.slug}`

    // Create keywords from tags, category, and features
    const keywords = [
        ...project.tags,
        project.category.toLowerCase(),
        'alicatados',
        'reformas',
        'Elche',
        'Alicante',
        ...project.features.slice(0, 3).map(f => f.toLowerCase()),
    ].join(', ')

    return {
        title: `${project.title} - ${project.category} | Alicatados JR`,
        description: project.description,
        keywords,
        authors: [{ name: 'Alicatados JR' }],
        creator: 'Alicatados JR',
        publisher: 'Alicatados JR',
        alternates: {
            canonical: pageUrl,
        },
        openGraph: {
            title: `${project.title} - ${project.category}`,
            description: project.description,
            url: pageUrl,
            siteName: 'Alicatados JR',
            images: project.coverImage ? [
                {
                    url: project.coverImage,
                    width: 1200,
                    height: 630,
                    alt: project.title,
                }
            ] : [],
            locale: 'es_ES',
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${project.title} - ${project.category}`,
            description: project.description,
            images: project.coverImage ? [project.coverImage] : [],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    }
}

export default function ProjectDetailPage({ params }: Props) {
    const project = getProjectBySlug(params.slug)

    if (!project) {
        notFound()
    }

    const relatedProjects = getRelatedProjects(project.slug, project.category, 3)

    // Structured data for SEO (JSON-LD)
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: project.title,
        description: project.description,
        image: project.coverImage,
        datePublished: project.completedAt ? new Date(project.completedAt).toISOString() : undefined,
        author: {
            '@type': 'Organization',
            name: 'Alicatados JR',
            url: 'https://alicatadosjr.com',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Alicatados JR',
            logo: {
                '@type': 'ImageObject',
                url: 'https://alicatadosjr.com/logo.png',
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://alicatadosjr.com/proyectos/${project.slug}`,
        },
        keywords: project.tags.join(', '),
    }

    return (
        <>
            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            <div className="min-h-screen bg-secondary-900 pt-20">
                {/* Back Button */}
                <div className="border-b border-secondary-800 bg-secondary-900">
                    <div className="container mx-auto px-4 py-4">
                        <Link
                            href="/proyectos"
                            className="inline-flex items-center text-sm text-cream-400 transition-colors hover:text-cream-500"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Volver a Proyectos
                        </Link>
                    </div>
                </div>

                {/* Hero Image */}
                {project.coverImage && (
                    <div className="relative aspect-[21/9] w-full">
                        <img
                            src={project.coverImage}
                            alt={project.title}
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/50 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <div className="container mx-auto">
                                <span className="mb-3 inline-block bg-accent-500 px-4 py-2 text-sm font-bold uppercase text-secondary-900">
                                    {project.category}
                                </span>
                                <h1 className="font-heading text-5xl font-black uppercase text-cream-500 md:text-7xl">
                                    {project.title}
                                </h1>
                            </div>
                        </div>
                    </div>
                )}

                {/* Project Details */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-4xl">
                            {/* Meta Info */}
                            <div className="mb-8 flex flex-wrap gap-6 border-b border-secondary-800 pb-6 text-sm text-cream-400">
                                {project.clientName && (
                                    <div>
                                        <span className="font-medium text-cream-500">Cliente:</span>{' '}
                                        {project.clientName}
                                    </div>
                                )}
                                {project.location && (
                                    <div className="flex items-center gap-1">
                                        <MapPin className="h-4 w-4" />
                                        {project.location}
                                    </div>
                                )}
                                {project.completedAt && (
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-4 w-4" />
                                        {new Date(project.completedAt).toLocaleDateString('es-ES', {
                                            year: 'numeric',
                                            month: 'long',
                                        })}
                                    </div>
                                )}
                            </div>

                            {/* Description */}
                            <div className="mb-8">
                                <p className="text-xl text-cream-400 underline">{project.description}</p>
                            </div>

                            {/* Long Description */}
                            {project.longDescription && (
                                <div
                                    className="prose prose-invert prose-lg mb-8 max-w-none text-cream-300"
                                    dangerouslySetInnerHTML={{ __html: project.longDescription }}
                                />
                            )}

                            {/* Features */}
                            {project.features.length > 0 && (
                                <div className="mb-8">
                                    <h2 className="mb-4 font-heading text-2xl font-bold uppercase text-cream-500">
                                        Características
                                    </h2>
                                    <div className="grid gap-3 md:grid-cols-2">
                                        {project.features.map((feature, index) => (
                                            <div
                                                key={index}
                                                className="flex items-start gap-3 bg-secondary-800 p-4"
                                            >
                                                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-accent-500" />
                                                <span className="text-cream-400">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Tags */}
                            {project.tags.length > 0 && (
                                <div className="mb-8">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="bg-secondary-800 px-4 py-2 text-sm text-cream-400"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* CTA */}
                            <div className="bg-primary-800 p-8 text-center">
                                <h3 className="mb-3 font-heading text-2xl font-bold uppercase text-copper-100">
                                    ¿Te gustaría un proyecto similar?
                                </h3>
                                <p className="mb-6 text-copper-100">
                                    Contáctanos y te ayudaremos a hacer realidad tu proyecto
                                </p>
                                <Link
                                    href="/contacto"
                                    className="inline-block bg-accent-500 px-10 py-4 font-bold uppercase tracking-wider text-secondary-900 transition-all hover:bg-copper-500"
                                >
                                    Solicitar Presupuesto
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Projects */}
                {relatedProjects.length > 0 && (
                    <section className="border-t border-secondary-800 py-16">
                        <div className="container mx-auto px-4">
                            <h2 className="mb-8 font-heading text-3xl font-bold uppercase text-cream-500">
                                Proyectos Relacionados
                            </h2>
                            <div className="grid gap-6 md:grid-cols-3">
                                {relatedProjects.map((related) => (
                                    <Link
                                        key={related.id}
                                        href={`/proyectos/${related.slug}`}
                                        className="group relative overflow-hidden"
                                    >
                                        {related.coverImage && (
                                            <div className="aspect-[4/3] w-full overflow-hidden">
                                                <img
                                                    src={related.coverImage}
                                                    alt={related.title}
                                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                                        <div className="absolute bottom-0 left-0 right-0 translate-y-full p-6 transition-transform group-hover:translate-y-0">
                                            <span className="mb-2 inline-block bg-accent-500 px-3 py-1 text-xs font-bold uppercase text-secondary-900">
                                                {related.category}
                                            </span>
                                            <h3 className="font-heading text-2xl font-black text-cream-500">
                                                {related.title}
                                            </h3>
                                        </div>
                                        <div className="absolute left-4 top-4 bg-secondary-900/80 px-3 py-1">
                                            <span className="text-xs font-bold uppercase text-accent-500">
                                                {related.category}
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </>
    )
}
