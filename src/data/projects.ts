export interface Project {
    id: number
    slug: string
    title: string
    category: string
    coverImage: string
    images: string[]
    description: string
    longDescription: string
    location?: string
    completedAt?: string
    clientName?: string
    features: string[]
    tags: string[]
}

export const PROJECTS: Project[] = [
    {
        id: 1,
        slug: 'cocina-moderna',
        title: 'Cocina Moderna',
        category: 'Cocinas',
        coverImage: '/images/modern_kitchen.png',
        images: [
            '/images/modern_kitchen.png',
        ],
        description: 'Reforma integral de cocina con acabados modernos y funcionales.',
        longDescription: `
            <p>Proyecto de reforma integral de cocina con diseño moderno y funcional. Se realizó un alicatado completo con azulejos de gran formato en tonos neutros, creando un ambiente luminoso y contemporáneo.</p>
            <p>El trabajo incluyó la preparación de superficies, nivelación perfecta y colocación de azulejos con juntas mínimas para un acabado impecable. Se prestó especial atención a los detalles en las esquinas y encuentros con electrodomésticos.</p>
        `,
        location: 'Elche, Alicante',
        completedAt: '2024-01',
        clientName: 'Familia García',
        features: [
            'Azulejos de gran formato',
            'Acabado mate premium',
            'Juntas mínimas',
            'Resistente a humedad',
        ],
        tags: ['cocina', 'moderno', 'reforma'],
    },
    {
        id: 2,
        slug: 'bano-premium',
        title: 'Baño Premium',
        category: 'Baños',
        coverImage: '/images/img32-BSParlit.jpg',
        images: [
            '/images/img32-BSParlit.jpg',
        ],
        description: 'Baño completo con acabados de lujo y atención al detalle.',
        longDescription: `
            <p>Reforma completa de baño con materiales premium y diseño elegante. El proyecto incluyó alicatado de paredes y suelo con porcelánico de alta calidad en tonos claros.</p>
            <p>Se realizó un trabajo meticuloso en la zona de ducha, garantizando una impermeabilización perfecta y un acabado estético impecable. Los azulejos fueron colocados con precisión milimétrica.</p>
        `,
        location: 'Alicante',
        completedAt: '2024-02',
        features: [
            'Porcelánico premium',
            'Impermeabilización total',
            'Diseño elegante',
            'Acabados de lujo',
        ],
        tags: ['baño', 'premium', 'porcelánico'],
    },
    {
        id: 3,
        slug: 'ducha-marmol',
        title: 'Ducha Mármol',
        category: 'Alicatados',
        coverImage: '/images/img21-4HA_w99P.jpg',
        images: [
            '/images/img21-4HA_w99P.jpg',
        ],
        description: 'Ducha con efecto mármol y acabado sofisticado.',
        longDescription: `
            <p>Instalación de ducha con azulejos efecto mármol, creando un espacio elegante y atemporal. El diseño combina tonos blancos y grises para un resultado sofisticado.</p>
            <p>Se prestó especial atención a la correcta pendiente del suelo de ducha y al sellado de todas las juntas para garantizar una impermeabilización perfecta.</p>
        `,
        location: 'Elche, Alicante',
        completedAt: '2023-12',
        features: [
            'Efecto mármol natural',
            'Impermeabilización garantizada',
            'Pendiente perfecta',
            'Juntas selladas',
        ],
        tags: ['ducha', 'mármol', 'elegante'],
    },
    {
        id: 4,
        slug: 'barbacoa-exterior',
        title: 'Barbacoa Exterior',
        category: 'Exteriores',
        coverImage: '/images/img21-Ca1Ae5E.jpg',
        images: [
            '/images/img21-Ca1Ae5E.jpg',
        ],
        description: 'Barbacoa de obra con revestimiento de piedra natural.',
        longDescription: `
            <p>Construcción y revestimiento de barbacoa exterior con piedra natural. El proyecto incluyó la preparación de la estructura base y el alicatado con materiales resistentes a la intemperie.</p>
            <p>Se utilizaron materiales específicos para exteriores, garantizando durabilidad y resistencia a las condiciones climáticas. El acabado combina funcionalidad y estética.</p>
        `,
        location: 'Santa Pola, Alicante',
        completedAt: '2024-03',
        features: [
            'Piedra natural',
            'Resistente a intemperie',
            'Diseño funcional',
            'Acabado rústico',
        ],
        tags: ['barbacoa', 'exterior', 'piedra'],
    },
    {
        id: 5,
        slug: 'ducha-moderna',
        title: 'Ducha Moderna',
        category: 'Baños',
        coverImage: '/images/img24-BiBiv1DO.jpg',
        images: [
            '/images/img24-BiBiv1DO.jpg',
        ],
        description: 'Ducha contemporánea con azulejos de diseño.',
        longDescription: `
            <p>Reforma de ducha con diseño contemporáneo utilizando azulejos de gran formato y acabados modernos. El proyecto destaca por su limpieza visual y funcionalidad.</p>
            <p>Se implementó un sistema de drenaje eficiente y se cuidó cada detalle en la colocación de los azulejos para lograr un resultado impecable.</p>
        `,
        location: 'Elche, Alicante',
        completedAt: '2024-01',
        features: [
            'Gran formato',
            'Diseño minimalista',
            'Drenaje eficiente',
            'Fácil limpieza',
        ],
        tags: ['ducha', 'moderno', 'minimalista'],
    },
    {
        id: 6,
        slug: 'escalera-marmol',
        title: 'Escalera Mármol',
        category: 'Alicatados',
        coverImage: '/images/img2-D-Uqho5x.jpg',
        images: [
            '/images/img2-D-Uqho5x.jpg',
        ],
        description: 'Revestimiento de escalera con mármol de alta calidad.',
        longDescription: `
            <p>Proyecto de revestimiento de escalera con mármol natural de primera calidad. Cada peldaño fue medido y cortado con precisión para un ajuste perfecto.</p>
            <p>El trabajo requirió una planificación meticulosa y técnicas especializadas para garantizar la seguridad y durabilidad. El resultado es una escalera elegante que aporta distinción al espacio.</p>
        `,
        location: 'Alicante',
        completedAt: '2023-11',
        features: [
            'Mármol natural',
            'Corte de precisión',
            'Acabado pulido',
            'Alta durabilidad',
        ],
        tags: ['escalera', 'mármol', 'lujo'],
    },
    {
        id: 7,
        slug: 'barbacoa-horno',
        title: 'Barbacoa con Horno',
        category: 'Exteriores',
        coverImage: '/images/img15-Cjy6MhaF.jpg',
        images: [
            '/images/img15-Cjy6MhaF.jpg',
        ],
        description: 'Barbacoa exterior con horno de leña integrado.',
        longDescription: `
            <p>Construcción completa de barbacoa exterior con horno de leña integrado. El proyecto incluyó el revestimiento con ladrillo refractario y acabados en piedra.</p>
            <p>Se diseñó pensando en la funcionalidad y la estética, creando un espacio perfecto para reuniones familiares. Todos los materiales son resistentes a altas temperaturas.</p>
        `,
        location: 'Elche, Alicante',
        completedAt: '2024-02',
        features: [
            'Horno de leña',
            'Ladrillo refractario',
            'Diseño funcional',
            'Resistente a altas temperaturas',
        ],
        tags: ['barbacoa', 'horno', 'exterior'],
    },
    {
        id: 8,
        slug: 'bano-minimalista',
        title: 'Baño Minimalista',
        category: 'Baños',
        coverImage: '/images/img25-Cou1-Vmg.jpg',
        images: [
            '/images/img25-Cou1-Vmg.jpg',
        ],
        description: 'Baño de diseño minimalista con líneas limpias.',
        longDescription: `
            <p>Reforma de baño con enfoque minimalista, utilizando azulejos de gran formato en tonos neutros. El diseño se centra en la simplicidad y la funcionalidad.</p>
            <p>Se eliminaron elementos innecesarios para crear un espacio amplio y luminoso. La colocación de azulejos se realizó con juntas mínimas para potenciar el efecto visual de continuidad.</p>
        `,
        location: 'Alicante',
        completedAt: '2024-03',
        features: [
            'Diseño minimalista',
            'Gran formato',
            'Tonos neutros',
            'Juntas mínimas',
        ],
        tags: ['baño', 'minimalista', 'moderno'],
    },
    {
        id: 9,
        slug: 'ducha-decorativa',
        title: 'Ducha Decorativa',
        category: 'Alicatados',
        coverImage: '/images/img30-K4WwwNIy.jpg',
        images: [
            '/images/img30-K4WwwNIy.jpg',
        ],
        description: 'Ducha con azulejos decorativos y diseño único.',
        longDescription: `
            <p>Instalación de ducha con azulejos decorativos que crean un punto focal único en el baño. La combinación de diferentes texturas y patrones aporta personalidad al espacio.</p>
            <p>El proyecto requirió una planificación cuidadosa del diseño y una ejecución precisa para lograr el patrón deseado. El resultado es una ducha que combina funcionalidad y arte.</p>
        `,
        location: 'Elche, Alicante',
        completedAt: '2023-12',
        features: [
            'Azulejos decorativos',
            'Diseño único',
            'Combinación de texturas',
            'Punto focal',
        ],
        tags: ['ducha', 'decorativo', 'diseño'],
    },
]

export function getProjectBySlug(slug: string): Project | undefined {
    return PROJECTS.find((project) => project.slug === slug)
}

export function getRelatedProjects(currentSlug: string, category: string, limit: number = 3): Project[] {
    return PROJECTS.filter(
        (project) => project.slug !== currentSlug && project.category === category
    ).slice(0, limit)
}

export const CATEGORIES = ['Todos', 'Cocinas', 'Baños', 'Alicatados', 'Exteriores']
