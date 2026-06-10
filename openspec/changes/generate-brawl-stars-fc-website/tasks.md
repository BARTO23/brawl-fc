## 1. Setup del proyecto

- [x] 1.1 Inicializar proyecto Astro con `pnpm create astro@latest` (template basics, sin TypeScript)
- [x] 1.2 Agregar Tailwind CSS con `pnpm add @astrojs/tailwind tailwindcss`
- [x] 1.3 Configurar tailwind.config.cjs con paleta de colores Brawl Stars (bs-yellow, bs-cyan, bs-purple, bs-dark, bs-card)
- [x] 1.4 Configurar astro.config.mjs para integración con Tailwind
- [x] 1.5 Mover las 93 imágenes portrait a `public/assets/images/`
- [x] 1.6 Mover `Logo_2025.png` a `public/assets/images/logo.png`

## 2. Datos JSON

- [x] 2.1 Crear `src/data/brawlers.json` con todos los brawlers (id, name, rarity, role, position, image, stats, bio)
- [x] 2.2 Crear `src/data/matches.json` con fixtures de modos rotativos (date, mode, map, result, opponent)
- [x] 2.3 Crear `src/data/standings.json` con tabla de Club League (team, played, wins, draws, losses, pts)
- [x] 2.4 Crear `src/data/news.json` con artículos de noticias del club (title, date, category, slug, excerpt, body)

## 3. Layout base y componentes compartidos

- [x] 3.1 Crear `src/layouts/Layout.astro` con estructura HTML base, meta tags, Google Fonts
- [x] 3.2 Crear `src/components/Header.astro` con logo, navegación principal (Squad, Schedule, Standings, News, Club)
- [x] 3.3 Crear `src/components/Footer.astro` con sponsors, redes sociales, copyright
- [x] 3.4 Agregar estilos globales en Layout (fondo oscuro, tipografía bold sans-serif)

## 4. Página Squad

- [x] 4.1 Crear `src/pages/squad.astro` con grid de brawlers
- [x] 4.2 Crear `src/components/PlayerCard.astro` con portrait, nombre, rareza (color border), rol badge
- [x] 4.3 Crear `src/components/SquadGrid.astro` con grid responsive y filtros de rareza/rol (JS vanilla)
- [x] 4.4 Crear `src/pages/squad/[slug].astro` para generación de páginas dinámicas de cada brawler
- [x] 4.5 Crear `src/components/PlayerProfile.astro` con stats (speed/attack/defense), biografía, rareza

## 5. Página Home

- [x] 5.1 Crear `src/pages/index.astro`
- [x] 5.2 Crear `src/components/Hero.astro` con slider rotatorio (próximo partido, destacados)
- [x] 5.3 Agregar preview de squad con 6-8 brawlers destacados en fila horizontal

## 6. Página Schedule

- [x] 6.1 Crear `src/pages/schedule.astro`
- [x] 6.2 Crear `src/components/ScheduleTable.astro` con lista de próximos modos rotativos
- [x] 6.3 Mostrar resultados de partidos pasados (W/D/L)

## 7. Página Standings

- [x] 7.1 Crear `src/pages/standings.astro`
- [x] 7.2 Crear `src/components/StandingsTable.astro` con tabla de posiciones
- [x] 7.3 Resaltar visualmente la fila de Brawl Stars FC

## 8. Página News

- [x] 8.1 Crear `src/pages/news.astro` con listado de artículos
- [x] 8.2 Crear `src/components/NewsCard.astro` con title, date, excerpt, category badge
- [x] 8.3 Crear `src/pages/news/[slug].astro` para páginas de artículo completo

## 9. Página Club

- [x] 9.1 Crear `src/pages/club.astro` con historia de Starr Park
- [x] 9.2 Agregar sección de palmarés/trophy cabinet con trofeos por modo de juego

## 10. Estilizado y pulido

- [x] 10.1 Aplicar tema oscuro consistente en todas las páginas
- [x] 10.2 Agregar efectos glow en tarjetas de brawlers según rareza
- [x] 10.3 Verificar responsive design (mobile, tablet, desktop)
- [x] 10.4 Construir sitio con `pnpm build` y verificar que se genera correctamente
