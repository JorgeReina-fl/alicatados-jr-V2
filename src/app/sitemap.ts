import { MetadataRoute } from 'next'
import { PROJECTS } from '@/data/projects'
import { BLOG_POSTS } from '@/data/blog'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://alicatadosjr.com' // Update with your actual domain

    // Static pages
    const staticPages = [
        '',
        '/servicios',
        '/proceso',
        '/proyectos',
        '/blog',
        '/nosotros',
        '/contacto',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Project pages
    const projectPages = PROJECTS.map((project) => ({
        url: `${baseUrl}/proyectos/${project.slug}`,
        lastModified: project.completedAt ? new Date(project.completedAt) : new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // Blog posts
    const blogPages = BLOG_POSTS.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(post.publishedAt),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }))

    return [...staticPages, ...projectPages, ...blogPages]
}
