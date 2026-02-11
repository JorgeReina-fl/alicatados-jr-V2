# Alicatados JR - Sitio Web Estático

Sitio web estático para **Alicatados JR** — Expertos en Alicatados y Reformas Integrales en Elche, Alicante.

## 🚀 Stack Tecnológico

- **Framework**: Next.js 14 (App Router, Static Site Generation)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Animaciones**: GSAP + Framer Motion
- **Formulario**: Formspree (servicio externo)
- **Validación**: Zod
- **Iconos**: Lucide React

## 📋 Requisitos Previos

- Node.js 18+
- npm o yarn

## 🛠️ Instalación

1. **Clonar el repositorio** o navegar al directorio:
```bash
cd Alicatadosjr_New_Version
```

2. **Instalar dependencias**:
```bash
npm install
```

3. **Configurar variables de entorno**:
```bash
cp .env.example .env
```

Edita `.env`:
```env
# Cloudinary - Optimización de imágenes (solo cloud name público)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="tu_cloud_name"

# Formspree - Formulario de contacto
FORMSPREE_URL="https://formspree.io/f/tu_form_id"
```

4. **Iniciar servidor de desarrollo**:
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
Alicatadosjr_New_Version/
├── docs/                      # Documentación del proyecto
├── public/                    # Archivos estáticos (imágenes)
├── src/
│   ├── app/                   # App Router de Next.js
│   │   ├── layout.tsx         # Layout raíz
│   │   ├── page.tsx           # Página de inicio
│   │   ├── globals.css        # Estilos globales
│   │   ├── servicios/         # Página de servicios
│   │   ├── proceso/           # Página de proceso de trabajo
│   │   ├── proyectos/         # Listado y detalle de proyectos
│   │   ├── blog/              # Listado y detalle de blog
│   │   ├── nosotros/          # Página sobre nosotros
│   │   ├── contacto/          # Página de contacto (Formspree)
│   │   ├── sitemap.ts         # Sitemap dinámico
│   │   └── robots.ts          # Robots.txt
│   ├── components/
│   │   ├── ui/                # Header, Footer, componentes UI
│   │   ├── sections/          # Secciones de página
│   │   ├── animations/        # Componentes de animación
│   │   ├── cards/             # Tarjetas de proyectos
│   │   └── effects/           # Efectos visuales
│   ├── data/
│   │   ├── projects.ts        # Datos de proyectos (9 proyectos)
│   │   └── blog.ts            # Datos del blog (3 artículos)
│   └── lib/
│       ├── validations.ts     # Validación del formulario (Zod)
│       └── utils.ts           # Utilidades generales
├── .env.example               # Template de variables de entorno
├── next.config.js             # Configuración de Next.js
├── tailwind.config.ts         # Configuración de Tailwind
├── tsconfig.json              # Configuración de TypeScript
└── package.json
```

## 🎨 Características

- ✅ Página de inicio con hero animado (GSAP)
- ✅ Servicios con descripciones detalladas
- ✅ Proceso de trabajo en 3 fases
- ✅ Portfolio de 9 proyectos con filtros por categoría
- ✅ Blog con 3 artículos y filtros por categoría
- ✅ Formulario de contacto funcional (Formspree)
- ✅ SEO completo (metadata, Open Graph, Twitter Cards, JSON-LD)
- ✅ Sitemap.xml y robots.txt automáticos
- ✅ Responsive design
- ✅ Animaciones con GSAP y Framer Motion
- ✅ 24 páginas estáticas generadas (SSG)

## 📝 Gestión de Contenido

El contenido se gestiona directamente en código:

### Añadir Nuevo Proyecto
Editar `src/data/projects.ts` y añadir un objeto al array `PROJECTS`.

### Añadir Nuevo Post de Blog
Editar `src/data/blog.ts` y añadir un objeto al array `BLOG_POSTS`.

### Añadir Imágenes
1. Optimizar imagen (https://squoosh.app)
2. Subir a `public/images/`
3. Referenciar en código: `/images/nombre.jpg`

## 📝 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción (genera 24 páginas estáticas)
npm run start        # Servidor de producción
npm run lint         # Ejecutar ESLint
npm run type-check   # Verificar tipos de TypeScript
```

## 🚢 Deployment

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno
3. Deploy automático en cada push

### Alternativas
- **Netlify**: Similar a Vercel, excelente para sitios estáticos
- **Cloudflare Pages**: Gratuito, CDN de Cloudflare

## 📚 Documentación

- `docs/revision-produccion.txt` — Checklist de producción
- `docs/plataformas-externas.txt` — Plataformas externas recomendadas
- `docs/animaciones-sitio-web.txt` — Guía de animaciones
- `docs/animation-guide.md` — Guía técnica de animaciones

## 📄 Licencia

© 2026 Alicatados JR. Todos los derechos reservados.
