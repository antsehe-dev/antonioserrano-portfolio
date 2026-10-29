# Portfolio — Antonio Serrano Herruzo

Portfolio personal de AI Engineer. Astro 7 + Tailwind 4 + Three.js + GSAP.

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Astro 7 (SSG) |
| Estilos | Tailwind CSS 4 |
| Animaciones | GSAP 3 + ScrollTrigger, Lenis |
| Hero WebGL | Three.js (partículas + red neuronal) |
| i18n | Astro i18n nativo (ES por defecto, `/en` para inglés) |
| Deploy | Vercel (SSG estático) |

---

## Ejecutar en local

```bash
# Requisito: Node >= 22.23.4
node --version

npm install
npm run dev
# → http://localhost:4321/
```

## Build de producción

```bash
npm run build    # genera /dist
npm run preview  # sirve /dist en local
```

---

## Editar contenido

Todo el contenido está en ficheros de datos separados. No toques los componentes para cambiar textos.

### Textos e i18n

| Fichero | Qué contiene |
|---|---|
| `src/i18n/es.ts` | Todos los textos en español |
| `src/i18n/en.ts` | Todos los textos en inglés |

Para cambiar el tagline del hero, la descripción del about o cualquier literal: edita `es.ts` / `en.ts`.

### Proyectos

`src/data/projects.ts` — array de objetos `Project`:

```ts
{
  id: 'mi-proyecto',
  title: 'Nombre',
  description: 'Descripción corta (ES)',
  description_en: 'Short description (EN)',
  problem: 'Problema que resuelve (ES)',
  problem_en: 'Problem it solves (EN)',
  role: 'Mi rol (ES)',
  role_en: 'My role (EN)',
  stack: ['Java', 'PostgreSQL'],
  repo: 'https://github.com/...',   // opcional
  internal: false,                   // true = etiqueta "Proyecto interno"
}
```

### Experiencia / Timeline

`src/data/experience.ts` — array de `TimelineItem`. Añade entradas con la misma estructura (campos ES + EN).

### Stack / Tecnologías

`src/data/stack.ts` — `stackCategories` (categorías con nivel visual) y `marqueeItems` (marquee animado).

---

## Deploy en Vercel

### Primera vez (desde GitHub)

1. Sube el repositorio a GitHub.
2. Entra en [vercel.com](https://vercel.com) → **Add New Project** → importa el repo.
3. Vercel detecta automáticamente la config de `vercel.json`. No necesitas cambiar nada.
4. Si pide versión de Node: Settings → Environment Variables → `NODE_VERSION` = `22`.
5. Haz clic en **Deploy**.

### Deploys posteriores

Cada `git push` a `main` lanza un deploy automático.

### Dominio personalizado

Vercel → tu proyecto → Settings → Domains → añade `antsehe.dev`.
Actualiza también `site` en `astro.config.mjs`:
```js
site: 'https://antsehe.dev',
```

---

## Estructura de carpetas

```
src/
├── i18n/          # Traducciones (es.ts, en.ts, index.ts)
├── data/          # Proyectos, experiencia, stack
├── components/
│   ├── layout/    # Header, Footer
│   ├── hero/      # Hero, neural-canvas.ts, hero-animations.ts
│   ├── sections/  # About, Projects, Stack, Contact
│   └── ui/        # CustomCursor, LoadingScreen, AITerminal
├── layouts/       # Base.astro (SEO, fonts, scroll progress)
├── pages/
│   ├── index.astro     # / (ES)
│   └── en/index.astro  # /en (EN)
└── styles/
    └── global.css
public/
├── favicon.svg
├── og-image.svg
├── robots.txt
└── manifest.webmanifest
```

---

## Animaciones

- **Loading screen** cinemática con scramble + contador 0→100%
- **Custom cursor** con lerp lag + estados hover
- **Hero**: palabras con `rotateX` 3D + blur-in, parallax al scroll, aurora blobs animados
- **Scroll horizontal** pinned para proyectos (desktop)
- **Cards 3D tilt** + glow que sigue el ratón
- **Timeline**: línea que se dibuja con el scroll
- **Char reveal**: títulos letra a letra con clip-path
- **Magnetic buttons**: sección contacto atrae el cursor
- **Easter egg**: terminal flotante `>_` con presentación IA generada

Todas las animaciones respetan `prefers-reduced-motion`.
