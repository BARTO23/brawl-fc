## Why

Crear el sitio web oficial de **Brawl Stars FC**, un club de fútbol ficticio inspirado en el universo de Brawl Stars. Actualmente no existe ninguna presencia web para este club. Este sitio servirá como página oficial con plantilla, calendario, tabla de posiciones, noticias e historia del club, usando los 93 retratos de brawlers ya descargados y el logo existente.

## What Changes

- Sitio web estático completo de múltiples páginas usando **Astro + Tailwind CSS**
- Página de inicio con hero slider, preview de squad y sponsors
- Página de plantilla (Squad) con grid de todos los brawlers, filtrable por rareza y rol
- Perfiles individuales para cada brawler con stats, biografía y稀有za
- Página de calendario (Schedule) con modos de juego rotativos como fixtures
- Página de tabla de posiciones (Standings) tipo Club League
- Sección de noticias (News) con artículos ficticios del club
- Página de club (Club) con historia de Starr Park y palmarés
- Datos estructurados en archivos JSON (brawlers, matches, standings, news)

## Capabilities

### New Capabilities
- `squad-page`: Grid de brawlers con filtros por rareza/rol + perfiles individuales con stats
- `schedule-page`: Calendario de modos rotativos (Gem Grab, Bounty, Heist, Brawl Ball) como partidos
- `standings-page`: Tabla de posiciones Club League con PJ, PG, PE, PP, Pts
- `news-section`: Artículos y noticias del club (balance changes, nuevos brawlers, temporadas)
- `club-page`: Historia de Starr Park, palmarés de trofeos por modo de juego
- `home-page`: Hero slider, preview de squad, sección de sponsors

### Modified Capabilities
*(none)*

## Impact

- Nuevo proyecto Astro con dependencias: `astro`, `@astrojs/tailwind`, `tailwindcss`
- Archivos JSON de datos en `src/data/`
- 93 imágenes PNG de portraits movidas a `public/assets/images/`
- Logo existente (`Logo_2025.png`) usado como escudo del club
- Diseño responsive con fondo oscuro y paleta de colores Brawl Stars (amarillo #FFD700, cyan #00E5FF)
