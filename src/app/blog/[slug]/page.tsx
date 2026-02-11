import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react'
import { Metadata } from 'next'
import { BLOG_POSTS, getBlogPostBySlug, getRelatedPosts } from '@/data/blog'

interface Props {
    params: { slug: string }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = getBlogPostBySlug(params.slug)

    if (!post) {
        return {
            title: 'Artículo no encontrado',
        }
    }

    const baseUrl = 'https://alicatadosjr.com' // Update with your actual domain
    const pageUrl = `${baseUrl}/blog/${post.slug}`

    // Create keywords from tags and category
    const keywords = [
        ...post.tags,
        post.category.toLowerCase(),
        'alicatados',
        'blog',
        'Elche',
        'Alicante',
    ].join(', ')

    return {
        title: `${post.title} | Blog Alicatados JR`,
        description: post.excerpt,
        keywords,
        authors: [{ name: post.author }],
        creator: post.author,
        publisher: 'Alicatados JR',
        alternates: {
            canonical: pageUrl,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: pageUrl,
            siteName: 'Alicatados JR',
            images: post.coverImage ? [
                {
                    url: post.coverImage,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                }
            ] : [],
            locale: 'es_ES',
            type: 'article',
            publishedTime: post.publishedAt,
            modifiedTime: post.updatedAt || post.publishedAt,
            authors: [post.author],
            tags: post.tags,
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: post.coverImage ? [post.coverImage] : [],
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

export default function BlogPostPage({ params }: Props) {
    const post = getBlogPostBySlug(params.slug)

    if (!post) {
        notFound()
    }

    const relatedPosts = getRelatedPosts(post.slug, post.category, 3)

    // Structured data for SEO (JSON-LD)
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        image: post.coverImage,
        datePublished: new Date(post.publishedAt).toISOString(),
        dateModified: post.updatedAt ? new Date(post.updatedAt).toISOString() : new Date(post.publishedAt).toISOString(),
        author: {
            '@type': 'Organization',
            name: post.author,
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
            '@id': `https://alicatadosjr.com/blog/${post.slug}`,
        },
        keywords: post.tags.join(', '),
        articleSection: post.category,
        wordCount: post.content.split(' ').length,
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
                            href="/blog"
                            className="inline-flex items-center text-sm text-cream-400 transition-colors hover:text-cream-500"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Volver al Blog
                        </Link>
                    </div>
                </div>

                {/* Hero Image */}
                {post.coverImage && (
                    <div className="relative aspect-[21/9] w-full">
                        <img
                            src={post.coverImage}
                            alt={post.title}
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/50 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <div className="container mx-auto">
                                <span className="mb-3 inline-block bg-accent-500 px-4 py-2 text-sm font-bold uppercase text-secondary-900">
                                    {post.category}
                                </span>
                                <h1 className="font-heading text-5xl font-black uppercase text-cream-500 md:text-7xl">
                                    {post.title}
                                </h1>
                            </div>
                        </div>
                    </div>
                )}

                {/* Article Content */}
                <article className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-4xl">
                            {/* Meta Info */}
                            <div className="mb-8 flex flex-wrap gap-6 border-b border-secondary-800 pb-6 text-sm text-cream-400">
                                <div className="flex items-center gap-1">
                                    <User className="h-4 w-4" />
                                    {post.author}
                                </div>
                                <div className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4" />
                                    {new Date(post.publishedAt).toLocaleDateString('es-ES', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    {post.readTime} min de lectura
                                </div>
                            </div>

                            {/* Excerpt */}
                            <div className="mb-8">
                                <p className="text-xl font-medium text-cream-400">{post.excerpt}</p>
                            </div>

                            {/* Content */}
                            <div
                                className="prose prose-invert max-w-none mb-12
                                    [&_h1]:font-heading [&_h1]:text-5xl [&_h1]:font-black [&_h1]:uppercase [&_h1]:text-cream-500 [&_h1]:mb-6 [&_h1]:mt-12 [&_h1]:leading-tight
                                    [&_h2]:font-heading [&_h2]:text-4xl [&_h2]:font-bold [&_h2]:uppercase [&_h2]:text-accent-500 [&_h2]:mb-5 [&_h2]:mt-10 [&_h2]:leading-tight [&_h2]:border-b [&_h2]:border-accent-500/30 [&_h2]:pb-3
                                    [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-cream-500 [&_h3]:mb-4 [&_h3]:mt-8
                                    [&_h4]:font-heading [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:text-cream-400 [&_h4]:mb-3 [&_h4]:mt-6
                                    [&_p]:text-lg [&_p]:text-cream-300 [&_p]:leading-relaxed [&_p]:mb-6
                                    [&_strong]:text-accent-500 [&_strong]:font-bold
                                    [&_em]:text-cream-400 [&_em]:italic
                                    [&_a]:text-accent-500 [&_a]:font-medium [&_a]:underline [&_a]:decoration-accent-500/50 [&_a]:underline-offset-4 [&_a]:transition-colors hover:[&_a]:text-copper-500 hover:[&_a]:decoration-copper-500
                                    [&_ul]:text-lg [&_ul]:text-cream-300 [&_ul]:mb-6 [&_ul]:space-y-3 [&_ul]:list-disc [&_ul]:pl-6
                                    [&_ol]:text-lg [&_ol]:text-cream-300 [&_ol]:mb-6 [&_ol]:space-y-3 [&_ol]:list-decimal [&_ol]:pl-6
                                    [&_li]:leading-relaxed
                                    [&_blockquote]:border-l-4 [&_blockquote]:border-accent-500 [&_blockquote]:pl-6 [&_blockquote]:py-2 [&_blockquote]:my-8 [&_blockquote]:italic [&_blockquote]:text-cream-400 [&_blockquote]:bg-secondary-800/50
                                    [&_code]:bg-secondary-800 [&_code]:text-accent-400 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-base
                                    [&_pre]:bg-secondary-800 [&_pre]:p-6 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_pre]:my-6
                                "
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />

                            {/* Tags */}
                            {post.tags.length > 0 && (
                                <div className="mb-8">
                                    <div className="flex items-center gap-2 text-sm text-cream-400">
                                        <Tag className="h-4 w-4" />
                                        <div className="flex flex-wrap gap-2">
                                            {post.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-secondary-800 px-3 py-1 text-cream-400"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* CTA */}
                            <div className="bg-primary-800 p-8 text-center">
                                <h3 className="mb-3 font-heading text-2xl font-bold uppercase text-copper-100">
                                    ¿Te ha resultado útil este artículo?
                                </h3>
                                <p className="mb-6 text-copper-100">
                                    Contáctanos para más información o para solicitar un presupuesto
                                </p>
                                <Link
                                    href="/contacto"
                                    className="inline-block bg-accent-500 px-10 py-4 font-bold uppercase tracking-wider text-secondary-900 transition-all hover:bg-copper-500"
                                >
                                    Contactar
                                </Link>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <section className="border-t border-secondary-800 py-16">
                        <div className="container mx-auto px-4">
                            <h2 className="mb-8 font-heading text-3xl font-bold uppercase text-cream-500">
                                Artículos Relacionados
                            </h2>
                            <div className="grid gap-6 md:grid-cols-3">
                                {relatedPosts.map((related) => (
                                    <Link
                                        key={related.id}
                                        href={`/blog/${related.slug}`}
                                        className="group relative overflow-hidden bg-secondary-800"
                                    >
                                        {related.coverImage && (
                                            <div className="aspect-[16/9] w-full overflow-hidden">
                                                <img
                                                    src={related.coverImage}
                                                    alt={related.title}
                                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                            </div>
                                        )}
                                        <div className="p-6">
                                            <span className="mb-2 inline-block bg-accent-500 px-3 py-1 text-xs font-bold uppercase text-secondary-900">
                                                {related.category}
                                            </span>
                                            <h3 className="font-heading text-xl font-black text-cream-500 transition-colors group-hover:text-accent-500">
                                                {related.title}
                                            </h3>
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
