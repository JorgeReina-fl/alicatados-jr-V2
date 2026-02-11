export interface BlogPost {
    id: number
    slug: string
    title: string
    excerpt: string
    content: string
    coverImage: string
    author: string
    publishedAt: string
    updatedAt?: string
    category: string
    tags: string[]
    readTime: number // in minutes
}

export const BLOG_POSTS: BlogPost[] = [
    {
        id: 1,
        slug: 'tendencias-alicatados-2024',
        title: 'Tendencias en Alicatados para 2024',
        excerpt: 'Descubre las últimas tendencias en alicatados y revestimientos que están marcando la diferencia en los proyectos de reforma.',
        content: `
            <h2>Introducción</h2>
            <p>El mundo de los alicatados está en constante evolución, y 2024 trae consigo nuevas tendencias que combinan estética, funcionalidad y sostenibilidad. En este artículo, exploramos las tendencias más destacadas que están transformando baños, cocinas y espacios exteriores.</p>
            
            <h2>1. Formatos XXL</h2>
            <p>Los azulejos de gran formato continúan ganando popularidad. Estos formatos (120x120 cm o más) crean espacios visualmente más amplios con menos juntas, facilitando la limpieza y aportando un aspecto moderno y minimalista.</p>
            
            <h2>2. Acabados Naturales</h2>
            <p>Los acabados que imitan materiales naturales como piedra, mármol y madera están en auge. La tecnología actual permite recrear estas texturas con una fidelidad sorprendente, ofreciendo la belleza de lo natural con la durabilidad de la cerámica.</p>
            
            <h2>3. Colores Terrosos</h2>
            <p>Los tonos tierra, beige, terracota y arena dominan las paletas de color. Estos colores aportan calidez y crean ambientes acogedores que conectan con la naturaleza.</p>
            
            <h2>4. Diseños Geométricos</h2>
            <p>Los patrones geométricos y las formas hexagonales siguen siendo tendencia, especialmente en baños y cocinas. Estos diseños añaden personalidad y dinamismo a los espacios.</p>
            
            <h2>5. Sostenibilidad</h2>
            <p>Cada vez más fabricantes apuestan por materiales reciclados y procesos de producción sostenibles. Los azulejos ecológicos no solo son buenos para el planeta, sino que también ofrecen excelente calidad y diseño.</p>
            
            <h2>Conclusión</h2>
            <p>Estas tendencias reflejan una búsqueda de espacios más naturales, amplios y sostenibles. En Alicatados JR, estamos preparados para ayudarte a incorporar estas tendencias en tu próximo proyecto de reforma.</p>
        `,
        coverImage: '/images/img2-D-Uqho5x.jpg',
        author: 'Alicatados JR',
        publishedAt: '2024-01-15',
        category: 'Tendencias',
        tags: ['tendencias', 'diseño', '2024', 'alicatados', 'reformas'],
        readTime: 5,
    },
    {
        id: 2,
        slug: 'como-elegir-azulejos-bano',
        title: 'Cómo Elegir los Azulejos Perfectos para tu Baño',
        excerpt: 'Guía completa para seleccionar los azulejos ideales para tu baño, considerando estilo, funcionalidad y presupuesto.',
        content: `
            <h2>Introducción</h2>
            <p>Elegir los azulejos adecuados para tu baño es una decisión importante que afectará tanto la estética como la funcionalidad del espacio durante años. En esta guía, te ayudamos a tomar la mejor decisión.</p>
            
            <h2>1. Considera la Resistencia al Agua</h2>
            <p>Los baños son espacios con alta humedad. Es fundamental elegir azulejos con baja porosidad (gres porcelánico) que resistan la humedad y eviten filtraciones. Verifica que tengan una absorción de agua menor al 3%.</p>
            
            <h2>2. Elige el Tamaño Adecuado</h2>
            <p><strong>Baños pequeños:</strong> Los azulejos de gran formato (60x60 cm o más) pueden hacer que el espacio parezca más grande al tener menos juntas.</p>
            <p><strong>Baños grandes:</strong> Tienes más libertad para experimentar con diferentes tamaños y combinaciones.</p>
            
            <h2>3. Acabado Antideslizante</h2>
            <p>Para el suelo del baño, especialmente en la zona de ducha, es esencial elegir azulejos con acabado antideslizante (clasificación R10 o superior) para prevenir accidentes.</p>
            
            <h2>4. Paleta de Colores</h2>
            <p><strong>Tonos claros:</strong> Blanco, beige, gris claro - amplían visualmente el espacio y aportan luminosidad.</p>
            <p><strong>Tonos oscuros:</strong> Negro, gris oscuro, azul marino - crean ambientes sofisticados pero pueden reducir visualmente el espacio.</p>
            
            <h2>5. Presupuesto</h2>
            <p>Define tu presupuesto desde el principio. Recuerda incluir no solo el coste de los azulejos, sino también la mano de obra, materiales auxiliares (adhesivos, juntas) y posibles imprevistos.</p>
            
            <h2>6. Mantenimiento</h2>
            <p>Los azulejos con acabado mate son más fáciles de mantener que los brillantes, ya que las manchas y marcas de agua son menos visibles.</p>
            
            <h2>Conclusión</h2>
            <p>La elección de azulejos para tu baño debe equilibrar estética, funcionalidad y presupuesto. En Alicatados JR, te asesoramos personalmente para encontrar la opción perfecta para tu proyecto.</p>
        `,
        coverImage: '/images/img32-BSParlit.jpg',
        author: 'Alicatados JR',
        publishedAt: '2024-02-01',
        category: 'Guías',
        tags: ['baños', 'guía', 'azulejos', 'consejos', 'reformas'],
        readTime: 6,
    },
    {
        id: 3,
        slug: 'mantenimiento-azulejos-exteriores',
        title: 'Mantenimiento de Azulejos en Exteriores',
        excerpt: 'Consejos prácticos para mantener tus azulejos de exterior en perfecto estado durante todo el año.',
        content: `
            <h2>Introducción</h2>
            <p>Los azulejos de exterior están expuestos a condiciones climáticas adversas: sol, lluvia, cambios de temperatura y humedad. Un mantenimiento adecuado garantiza su durabilidad y aspecto impecable.</p>
            
            <h2>1. Limpieza Regular</h2>
            <p>Realiza una limpieza básica cada 2-3 semanas:</p>
            <ul>
                <li>Barre o aspira para eliminar polvo y suciedad</li>
                <li>Friega con agua y jabón neutro</li>
                <li>Aclara con agua limpia</li>
                <li>Seca con una mopa o deja secar al aire</li>
            </ul>
            
            <h2>2. Limpieza Profunda</h2>
            <p>Cada 3-6 meses, realiza una limpieza más profunda:</p>
            <ul>
                <li>Usa un limpiador específico para azulejos de exterior</li>
                <li>Para manchas difíciles, aplica una mezcla de bicarbonato y agua</li>
                <li>Evita productos ácidos que puedan dañar las juntas</li>
            </ul>
            
            <h2>3. Cuidado de las Juntas</h2>
            <p>Las juntas son el punto más vulnerable:</p>
            <ul>
                <li>Revisa regularmente su estado</li>
                <li>Limpia con un cepillo de cerdas suaves</li>
                <li>Aplica sellador de juntas cada 1-2 años</li>
                <li>Repara grietas inmediatamente para evitar filtraciones</li>
            </ul>
            
            <h2>4. Protección contra Manchas</h2>
            <p>Aplica un sellador impermeabilizante cada 1-2 años para proteger contra:</p>
            <ul>
                <li>Manchas de aceite y grasa (especialmente en zonas de barbacoa)</li>
                <li>Moho y algas</li>
                <li>Eflorescencias (manchas blancas de sales)</li>
            </ul>
            
            <h2>5. Prevención de Daños</h2>
            <ul>
                <li>Evita golpes con objetos pesados</li>
                <li>No uses limpiadores abrasivos o cepillos metálicos</li>
                <li>Retira hojas y restos vegetales regularmente</li>
                <li>Asegura un buen drenaje para evitar acumulación de agua</li>
            </ul>
            
            <h2>6. Mantenimiento Estacional</h2>
            <p><strong>Primavera:</strong> Limpieza profunda después del invierno</p>
            <p><strong>Verano:</strong> Protección contra rayos UV y altas temperaturas</p>
            <p><strong>Otoño:</strong> Eliminación frecuente de hojas</p>
            <p><strong>Invierno:</strong> Prevención de hielo y revisión de juntas</p>
            
            <h2>Conclusión</h2>
            <p>Un mantenimiento regular y adecuado prolongará significativamente la vida útil de tus azulejos de exterior. Si necesitas asesoramiento o reparaciones, en Alicatados JR estamos a tu disposición.</p>
        `,
        coverImage: '/images/img15-Cjy6MhaF.jpg',
        author: 'Alicatados JR',
        publishedAt: '2024-02-20',
        category: 'Mantenimiento',
        tags: ['exteriores', 'mantenimiento', 'cuidados', 'limpieza', 'consejos'],
        readTime: 7,
    },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
    return BLOG_POSTS.find((post) => post.slug === slug)
}

export function getRelatedPosts(currentSlug: string, category: string, limit: number = 3): BlogPost[] {
    return BLOG_POSTS.filter(
        (post) => post.slug !== currentSlug && post.category === category
    ).slice(0, limit)
}

export const BLOG_CATEGORIES = ['Todos', 'Tendencias', 'Guías', 'Mantenimiento', 'Proyectos']
