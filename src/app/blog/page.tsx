'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BLOG_POSTS, BLOG_CATEGORIES } from '@/data/blog'

gsap.registerPlugin(ScrollTrigger)

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState('Todos')
    const headerRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)

    const filteredPosts = activeCategory === 'Todos'
        ? BLOG_POSTS
        : BLOG_POSTS.filter((p) => p.category === activeCategory)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(titleRef.current, {
                opacity: 0,
                y: 80,
                duration: 1.2,
                ease: 'power4.out',
            })
        }, headerRef)

        return () => ctx.revert()
    }, [])

    return (
        <div className="bg-secondary-900 min-h-screen pt-20">
            {/* Hero */}
            <section ref={headerRef} className="relative py-32">
                <div className="absolute inset-0">
                    <img
                        src="/images/img30-K4WwwNIy.jpg"
                        alt=""
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-secondary-900/85" />
                </div>
                <div className="container relative mx-auto px-4 text-center">
                    <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-accent-500">
                        Noticias y Consejos
                    </p>
                    <h1 ref={titleRef} className="font-heading text-6xl font-black uppercase text-cream-500 md:text-8xl">
                        BLOG
                    </h1>
                </div>
            </section>

            {/* Filter */}
            <section className="border-b border-secondary-800 py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-4">
                        {BLOG_CATEGORIES.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all ${activeCategory === category
                                    ? 'bg-accent-500 text-secondary-900'
                                    : 'bg-secondary-800 text-cream-400 hover:bg-secondary-700 hover:text-cream-500'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {filteredPosts.map((post) => (
                            <Link
                                key={post.id}
                                href={`/blog/${post.slug}`}
                                className="group relative overflow-hidden bg-secondary-800 transition-all hover:shadow-lg hover:shadow-accent-500/20"
                            >
                                {/* Cover Image */}
                                <div className="aspect-[16/9] w-full overflow-hidden">
                                    <img
                                        src={post.coverImage}
                                        alt={post.title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    {/* Category Badge */}
                                    <span className="mb-3 inline-block bg-accent-500 px-3 py-1 text-xs font-bold uppercase text-secondary-900">
                                        {post.category}
                                    </span>

                                    {/* Title */}
                                    <h3 className="mb-3 font-heading text-2xl font-black text-cream-500 transition-colors group-hover:text-accent-500">
                                        {post.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="mb-4 text-sm text-cream-400 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    {/* Meta Info */}
                                    <div className="flex items-center gap-4 text-xs text-cream-400">
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
                                            {post.readTime} min
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="bg-primary-800 p-12 text-center md:p-16">
                        <h2 className="mb-6 font-heading text-4xl font-black uppercase text-copper-100 md:text-5xl">
                            ¿NECESITAS ASESORAMIENTO?
                        </h2>
                        <p className="mx-auto mb-8 max-w-2xl text-lg text-copper-100">
                            Nuestro equipo está listo para ayudarte con tu proyecto de alicatados.
                        </p>
                        <Link
                            href="/contacto"
                            className="inline-flex items-center gap-3 bg-accent-500 px-10 py-5 text-lg font-bold uppercase tracking-wider text-secondary-900 transition-all hover:bg-copper-500"
                        >
                            Contactar
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
