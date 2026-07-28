// UI strings + rutas por idioma / UI strings + per-language routing.

export const langs = ["es", "en"];
export const defaultLang = "es";

// Prefijos de ruta para páginas de campeón y ruleta según idioma.
export const routes = {
  es: { champ: "campeon", roulette: "ruleta" },
  en: { champ: "champion", roulette: "roulette" },
};

export const ui = {
  es: {
    locale: "es-AR",
    htmlLang: "es",
    siteName: "LoL Classic Builds",
    tagline: "Builds locas y campeones no convencionales para League of Legends Classic (Season 3)",
    metaDescription: "Explorá builds NO convencionales para los 62 campeones de League of Legends Classic (Season 3): AP Master Yi, Gangplank AP, Blitzcrank one-punch y más. Ruleta aleatoria de campeón, línea y build.",
    releaseNote: "League of Legends Classic sale el 29 de julio de 2026 (Patch 26.15) — modo Season 3 con 62 campeones.",
    nav: { home: "Inicio", roulette: "Ruleta", builds: "Builds" },
    hero: {
      kicker: "Modo Season 3 · 29 jul 2026",
      title: "Builds locas para League of Legends Classic",
      sub: "Más de 70 builds NO convencionales para los 62 campeones del modo, incluyendo picks de ADC. Probá lo más troll de la vieja escuela: AP Yi, GP AP, Rammus AP y mucho más.",
      ctaRoulette: "Girar la ruleta",
      ctaBuilds: "Ver todas las builds",
    },
    filters: { all: "Todos", lane: "Línea", tier: "Tipo", search: "Buscar campeón…" },
    labels: {
      lane: "Línea", role: "Rol original", items: "Items", masteries: "Maestrías",
      runes: "Runas", summoners: "Invocador", playstyle: "Cómo se juega",
      build: "Build", champions: "campeones", backHome: "Volver al inicio",
      randomAgain: "Girar de nuevo", yourRoll: "Tu tirada",
    },
    roulette: {
      title: "Ruleta de la vieja escuela",
      sub: "Girá y el destino te asigna campeón, línea y build no convencional para tu próxima partida de Classic.",
      spin: "¡GIRAR!",
      spinning: "Girando…",
      viewBuild: "Ver build completa",
    },
    footer: "Sitio de fans, sin afiliación con Riot Games. League of Legends © Riot Games.",
  },
  en: {
    locale: "en-US",
    htmlLang: "en",
    siteName: "LoL Classic Builds",
    tagline: "Crazy builds and off-meta champions for League of Legends Classic (Season 3)",
    metaDescription: "Explore NON-conventional builds for all 62 League of Legends Classic (Season 3) champions: AP Master Yi, AP Gangplank, off-role picks and more. Random roulette of champion, lane and build.",
    releaseNote: "League of Legends Classic launches July 29, 2026 (Patch 26.15) — a Season 3 mode with 62 champions.",
    nav: { home: "Home", roulette: "Roulette", builds: "Builds" },
    hero: {
      kicker: "Season 3 mode · Jul 29, 2026",
      title: "Crazy builds for League of Legends Classic",
      sub: "70+ off-meta builds for the mode's 62 champions, including ADC picks. Try the trolliest old-school picks: AP Yi, AP GP, AP Rammus and more.",
      ctaRoulette: "Spin the wheel",
      ctaBuilds: "See all builds",
    },
    filters: { all: "All", lane: "Lane", tier: "Type", search: "Search champion…" },
    labels: {
      lane: "Lane", role: "Original role", items: "Items", masteries: "Masteries",
      runes: "Runes", summoners: "Summoners", playstyle: "How to play",
      build: "Build", champions: "champions", backHome: "Back to home",
      randomAgain: "Spin again", yourRoll: "Your roll",
    },
    roulette: {
      title: "Old-school roulette",
      sub: "Spin and fate assigns you a champion, lane and off-meta build for your next Classic game.",
      spin: "SPIN!",
      spinning: "Spinning…",
      viewBuild: "View full build",
    },
    footer: "Fan-made site, not affiliated with Riot Games. League of Legends © Riot Games.",
  },
};

// Devuelve la ruta base de un idioma. / Base path for a language.
export function langBase(lang) {
  return `/${lang}`;
}

// Ruta a la página de un campeón. / Path to a champion page.
export function champUrl(lang, slug) {
  return `/${lang}/${routes[lang].champ}/${slug}`;
}

export function rouletteUrl(lang) {
  return `/${lang}/${routes[lang].roulette}`;
}
