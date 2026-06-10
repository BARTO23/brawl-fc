# Brawl Stars FC — Plan del sitio web

## Stack
- **Framework:** Astro
- **Package manager:** pnpm
- **CSS:** Tailwind CSS
- **Arquitectura:** Múltiples páginas HTML (static output)

## Estructura de archivos

```
brawl-fc/
├── public/
│   └── assets/
│       ├── images/              # 93 portraits + Logo_2025.png
│       └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.astro         # Nav con logo + menú
│   │   ├── Footer.astro         # Sponsors + redes sociales
│   │   ├── Hero.astro           # Slider de "próximo partido"
│   │   ├── PlayerCard.astro     # Tarjeta individual de brawler
│   │   ├── SquadGrid.astro      # Grid de todos los brawlers
│   │   ├── PlayerProfile.astro  # Perfil detallado del brawler
│   │   ├── NewsCard.astro       # Tarjeta de noticia
│   │   ├── ScheduleTable.astro  # Tabla de modos rotativos
│   │   └── StandingsTable.astro # Tabla de Club League
│   ├── layouts/
│   │   └── Layout.astro         # Layout base (Head, Header, Footer)
│   ├── pages/
│   │   ├── index.astro          # Home
│   │   ├── squad.astro          # Plantilla completa
│   │   │   └── [slug].astro     # Ruta dinámica: /squad/shelly
│   │   ├── schedule.astro       # Próximos modos de juego
│   │   ├── standings.astro      # Tabla de posiciones
│   │   ├── news.astro           # Listado de noticias
│   │   │   └── [slug].astro     # Ruta dinámica: /news/balance-2026
│   │   └── club.astro           # Historia de Starr Park
│   └── data/
│       ├── brawlers.json        # Datos de todos los brawlers
│       ├── matches.json         # Schedule de modos de juego
│       ├── standings.json       # Tabla de Club League
│       └── news.json            # Artículos de noticias
├── astro.config.mjs
├── tailwind.config.cjs
├── package.json
└── pnpm-lock.yaml
```

## Páginas

| Página | Contenido |
|---|---|
| **`/`** | Hero con slider de "próximo partido", preview de squad, sponsors |
| **`/squad`** | Grid de brawlers con filtros por rareza/rol |
| **`/squad/:slug`** | Perfil individual con stats, biografía, rareza, rol |
| **`/schedule`** | Calendario de modos rotativos como si fueran partidos |
| **`/standings`** | Tabla Club League con equipos, PJ, PG, PE, PP, Pts |
| **`/news`** | Artículos del club (balance changes, fichajes) |
| **`/club`** | Historia de Starr Park, palmarés |

## Adaptación Brawl Stars → Fútbol

| Concepto real | Adaptación |
|---|---|
| Jugador | Brawler |
| Posición (FW/MF/DF/GK) | Rol (Tank, Assassin, Marksman, Support, etc.) |
| Liga | Club League / Trophy Ladder |
| Partido | Modo de juego (Gem Grab, Bounty, Heist, Brawl Ball) |
| Estadio | Starr Park |
| Membresía | Brawl Pass |
| Tienda | Gem Store / Skins |
| Palmarés | Trofeos por modo de juego |

## Color palette (Tailwind)

```js
colors: {
  'bs-yellow': '#FFD700',
  'bs-cyan': '#00E5FF',
  'bs-purple': '#9B59B6',
  'bs-dark': '#1a1a2e',
  'bs-card': '#16213e',
}
```

## Orden de implementación

1. Scaffold proyecto Astro + Tailwind
2. Mover portraits a `public/assets/images/`
3. Crear archivos JSON de datos (brawlers, noticias, schedule)
4. Crear Layout base + Header + Footer
5. Crear página Squad con grid de brawlers y filtros
6. Crear páginas restantes (Home, Schedule, Standings, News, Club)
7. Estilizar con Tailwind (fondo oscuro, tarjetas con glow amarillo)
