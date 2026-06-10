## Context

Sitio web oficial de Brawl Stars FC, un club de fútbol ficticio del universo Brawl Stars. Se construye desde cero con Astro + Tailwind CSS. Actualmente existen 93 imágenes PNG de retratos de brawlers y un logo en el directorio raíz. No hay código previo del sitio.

## Goals / Non-Goals

**Goals:**
- Sitio web estático de 7 páginas (Home, Squad, Squad/[slug], Schedule, Standings, News, Club)
- Datos tipados en JSON para brawlers, partidos, tabla y noticias
- Diseño responsive mobile-first con temática oscura Brawl Stars
- Tiempo de build rápido con salida 100% estática

**Non-Goals:**
- Backend o base de datos (todo es static generation)
- Autenticación de usuarios o paneles de administración
- Contenido dinámico en tiempo real
- Internacionalización i18n
- Comercio electrónico real (la tienda es decorativa)

## Decisions

1. **Astro (no React/Svelte)**: Para un sitio informativo de contenido estático, Astro ofrece cero JavaScript por defecto, mejor performance y simplicidad. Los componentes son .astro con scoped CSS. Si se necesita interactividad (filtros), se añade JS vanilla minimalista.

2. **Tailwind CSS sobre CSS modules**: Por rapidez de prototipado, consistencia de diseño y la paleta de colores fácil de definir en tailwind.config. Las utility classes reducen la cantidad de archivos CSS.

3. **Datos en JSON local**: Cada brawler tiene entrada en `brawlers.json` con id, nombre, rareza, rol, stats, bio. Astro importa estos JSON en build time para generar páginas estáticas y dinámicas (`[slug].astro`).

4. **Rareza como indicador visual**: El marco/glow de cada tarjeta de brawler se colorea según rareza (Común=gris, Super=verde, Hiper=azul, Épico=morado, Mítico=rojo, Legendario=amarillo/dorado, Cromático=cyan). Esto sigue la convención visual del juego original.

5. **Adaptación football de los modos de juego**: Gem Grab → Partido regular, Bounty → Eliminatorias, Heist → Copa, Brawl Ball → Clásico, Knockout → Playoffs. Cada modo tiene un "escudo" de competición.

## Risks / Trade-offs

- [Risk] Astro output es 100% estático → si en futuro se quiere contenido dinámico, requeriría re-arquitectura con SSR. [Mitigation] Los datos JSON permiten migrar fácilmente a headless CMS.
- [Risk] Los filtros de squad requieren JS del lado cliente. [Mitigation] Usar Web Components vanilla (<100 líneas de JS) sin framework.
- [Risk] 93 imágenes PNG pueden hacer el build lento. [Mitigation] Imágenes ya están optimizadas; Astro no las procesa si están en public/.
