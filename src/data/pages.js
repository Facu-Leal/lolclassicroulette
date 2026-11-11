// Páginas informativas/legales (bilingües): Privacidad, Acerca de, Contacto.
// Content for the info/legal pages (Privacy, About, Contact).
import { site } from "./site.js";

const EMAIL = { es: site.contactEmail.es, en: site.contactEmail.en };
const UPDATED = "29 jul 2026"; // fecha de última actualización / last updated

// Slugs de ruta por idioma. / Route slugs per language.
export const pageRoutes = {
  privacy: { es: "privacidad", en: "privacy" },
  about: { es: "acerca", en: "about" },
  contact: { es: "contacto", en: "contact" },
  guide: { es: "guia", en: "guide" },
  funbuilds: { es: "builds-divertidas", en: "fun-builds" },
};

export function pageUrl(lang, key) {
  return `/${lang}/${pageRoutes[key][lang]}`;
}

// Etiquetas cortas para el footer. / Short labels for the footer.
export const pageLabels = {
  es: { about: "Acerca de", contact: "Contacto", privacy: "Privacidad", guide: "Guía", funbuilds: "Builds locas", updated: "Última actualización" },
  en: { about: "About", contact: "Contact", privacy: "Privacy", guide: "Guide", funbuilds: "Fun builds", updated: "Last updated" },
};

const ADS_SETTINGS = "https://www.google.com/settings/ads";
const ABOUT_ADS = "https://www.aboutads.info/choices/";

export const pages = {
  privacy: {
    es: {
      title: "Política de Privacidad",
      updated: UPDATED,
      desc: "Cómo LoL Classic Builds usa cookies, publicidad, enlaces de afiliado y analítica anónima.",
      sections: [
        { h: "Resumen", p: [
          "LoL Classic Builds es un sitio informativo gratuito. No te pedimos ni guardamos datos personales de forma directa: no hay registro, cuentas ni inicio de sesión. Esta política explica qué recopilan los servicios de terceros que usamos (publicidad y analítica) y cómo podés controlarlo.",
        ] },
        { h: "Cookies y publicidad", p: [
          "Este sitio puede mostrar anuncios a través de <strong>Google AdSense</strong>. Los proveedores externos, incluido Google, usan cookies para mostrar anuncios en función de tus visitas anteriores a este y otros sitios web.",
          "El uso de cookies de publicidad por parte de Google (incluida la cookie <em>DART</em>) le permite a él y a sus socios mostrarte anuncios según tu visita a este sitio y a otros de internet.",
          `Podés desactivar la publicidad personalizada desde la <a href="${ADS_SETTINGS}" target="_blank" rel="noopener">Configuración de anuncios de Google</a>, o rechazar las cookies de proveedores externos en <a href="${ABOUT_ADS}" target="_blank" rel="noopener">aboutads.info/choices</a>. También podés bloquear o borrar cookies desde tu navegador.`,
        ] },
        { h: "Enlaces de afiliado", p: [
          "Algunos enlaces del sitio (por ejemplo, a <strong>Eneba</strong>) son enlaces de afiliado. Si comprás a través de ellos, podemos recibir una pequeña comisión <strong>sin costo adicional para vos</strong>. Esto ayuda a mantener el sitio online.",
        ] },
        { h: "Analítica", p: [
          "Usamos <strong>Cloudflare Web Analytics</strong> para medir el tráfico de forma agregada. Es una analítica orientada a la privacidad: <strong>no usa cookies</strong> ni recopila datos personales que te identifiquen.",
        ] },
        { h: "Contenido de terceros", p: [
          "Las imágenes de campeones, objetos y hechizos se cargan desde el CDN oficial de Riot Games (Data Dragon). No alojamos esas imágenes; se sirven directamente desde los servidores de Riot.",
        ] },
        { h: "Tus derechos (RGPD / CCPA)", p: [
          "Si estás en el Espacio Económico Europeo, el Reino Unido o California, tenés derecho a consentir o rechazar la publicidad personalizada. Podés ejercerlo desde la Configuración de anuncios de Google y desde los ajustes de cookies de tu navegador. Como el sitio no almacena datos personales propios, no guardamos información que puedas solicitar eliminar de nuestra parte.",
        ] },
        { h: "Menores", p: [
          "Este sitio no está dirigido a menores de 13 años y no recopila datos de forma consciente de ellos.",
        ] },
        { h: "Cambios", p: [
          "Podemos actualizar esta política cada tanto. La fecha de arriba indica la última modificación.",
        ] },
        { h: "Contacto", p: [
          `¿Dudas sobre esta política? Escribinos a <a href="mailto:${EMAIL.es}">${EMAIL.es}</a>.`,
        ] },
      ],
    },
    en: {
      title: "Privacy Policy",
      updated: UPDATED,
      desc: "How LoL Classic Builds uses cookies, advertising, affiliate links and privacy-first analytics.",
      sections: [
        { h: "Overview", p: [
          "LoL Classic Builds is a free informational site. We do not ask for or store personal data directly: there is no registration, account or login. This policy explains what the third-party services we use (advertising and analytics) collect, and how you can control it.",
        ] },
        { h: "Cookies and advertising", p: [
          "This site may display ads through <strong>Google AdSense</strong>. Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this and other websites.",
          "Google's use of advertising cookies (including the <em>DART</em> cookie) enables it and its partners to serve ads to you based on your visit to this site and/or other sites on the internet.",
          `You may opt out of personalized advertising via <a href="${ADS_SETTINGS}" target="_blank" rel="noopener">Google Ads Settings</a>, or opt out of third-party vendor cookies at <a href="${ABOUT_ADS}" target="_blank" rel="noopener">aboutads.info/choices</a>. You can also block or delete cookies from your browser.`,
        ] },
        { h: "Affiliate links", p: [
          "Some links on this site (for example, to <strong>Eneba</strong>) are affiliate links. If you buy through them, we may earn a small commission <strong>at no extra cost to you</strong>. This helps keep the site online.",
        ] },
        { h: "Analytics", p: [
          "We use <strong>Cloudflare Web Analytics</strong> to measure traffic in aggregate. It is privacy-first analytics: it <strong>does not use cookies</strong> and does not collect personally identifying data.",
        ] },
        { h: "Third-party content", p: [
          "Champion, item and spell images are loaded from Riot Games' official CDN (Data Dragon). We do not host those images; they are served directly from Riot's servers.",
        ] },
        { h: "Your rights (GDPR / CCPA)", p: [
          "If you are in the European Economic Area, the UK or California, you have the right to consent to or decline personalized advertising. You can exercise this via Google Ads Settings and your browser's cookie settings. Because the site stores no personal data of its own, we hold no information for you to request deletion of on our side.",
        ] },
        { h: "Children", p: [
          "This site is not directed to children under 13 and does not knowingly collect data from them.",
        ] },
        { h: "Changes", p: [
          "We may update this policy from time to time. The date above shows the last change.",
        ] },
        { h: "Contact", p: [
          `Questions about this policy? Email us at <a href="mailto:${EMAIL.en}">${EMAIL.en}</a>.`,
        ] },
      ],
    },
  },

  about: {
    es: {
      title: "Acerca de",
      desc: "Qué es LoL Classic Builds: un proyecto de fans con builds off-meta, guías y ruleta para League of Legends Classic.",
      sections: [
        { h: "Qué es esto", p: [
          "LoL Classic Builds es un proyecto de fans dedicado al modo <strong>League of Legends Classic</strong> (la vuelta al LoL clásico). Reunimos builds no convencionales para los 60 campeones del modo — AP Yi, GP AP, one-shots, picks de ADC y mucho más — con guía de cómo jugar, objetos, runas, maestrías y orden de habilidades para cada una. Y una ruleta que te sortea campeón, línea y build para tu próxima partida.",
        ] },
        { h: "Por qué lo hicimos", p: [
          "Somos el equipo de LoL Classic Builds: jugadores a los que nos marcó la vieja escuela y quisimos armar un lugar simple y divertido para experimentar con lo más troll de la vieja escuela, sin la seriedad del meta. La idea es que entres, gires la ruleta y te rías probando algo distinto.",
        ] },
        { h: "Colaborá", p: [
          `¿Tenés una build que deberíamos agregar, o encontraste algo para corregir? Nos encanta recibir sugerencias. Escribinos a <a href="mailto:${EMAIL.es}">${EMAIL.es}</a>.`,
        ] },
        { h: "Aviso legal", p: [
          "Este es un sitio de fans <strong>independiente</strong>, sin afiliación, respaldo ni patrocinio de Riot Games. League of Legends y todos los recursos relacionados son propiedad de © Riot Games, Inc.",
        ] },
      ],
    },
    en: {
      title: "About",
      desc: "What LoL Classic Builds is: a fan project with off-meta builds, guides and a roulette for League of Legends Classic.",
      sections: [
        { h: "What this is", p: [
          "LoL Classic Builds is a fan project dedicated to the <strong>League of Legends Classic</strong> mode (the return of old-school LoL). We collect off-meta builds for the mode's 60 champions — AP Yi, AP GP, one-shots, ADC picks and much more — each with a how-to-play guide, items, runes, masteries and skill order. Plus a roulette that rolls you a champion, lane and build for your next game.",
        ] },
        { h: "Why we made it", p: [
          "We're the LoL Classic Builds team: players shaped by the old school who wanted a simple, fun place to experiment with the trolliest picks of old-school LoL, without the seriousness of the meta. The idea is that you drop in, spin the wheel and have a laugh trying something different.",
        ] },
        { h: "Contribute", p: [
          `Got a build we should add, or spotted something to fix? We love suggestions. Email us at <a href="mailto:${EMAIL.en}">${EMAIL.en}</a>.`,
        ] },
        { h: "Legal notice", p: [
          "This is an <strong>independent</strong> fan site, not affiliated with, endorsed or sponsored by Riot Games. League of Legends and all related assets are property of © Riot Games, Inc.",
        ] },
      ],
    },
  },

  contact: {
    es: {
      title: "Contacto",
      desc: "Contactá al equipo de LoL Classic Builds para sugerir builds, reportar errores o consultar por publicidad.",
      sections: [
        { h: "Escribinos", p: [
          `La mejor forma de contactarnos es por email: <a href="mailto:${EMAIL.es}"><strong>${EMAIL.es}</strong></a>.`,
        ] },
        { h: "¿Para qué escribir?", p: [
          "Sugerir una build nueva o mejorar una existente. Reportar un error, un dato desactualizado o una imagen que no carga. Consultas sobre publicidad o colaboraciones.",
        ] },
        { h: "Respuesta", p: [
          "Somos un proyecto chico de fans, así que respondemos cuando podemos — gracias por la paciencia. Toda sugerencia para mejorar el sitio es bienvenida.",
        ] },
      ],
    },
    en: {
      title: "Contact",
      desc: "Contact the LoL Classic Builds team to suggest builds, report errors or ask about advertising.",
      sections: [
        { h: "Get in touch", p: [
          `The best way to reach us is by email: <a href="mailto:${EMAIL.en}"><strong>${EMAIL.en}</strong></a>.`,
        ] },
        { h: "What to write about", p: [
          "Suggest a new build or improve an existing one. Report an error, outdated info or an image that won't load. Advertising or collaboration inquiries.",
        ] },
        { h: "Response", p: [
          "We're a small fan project, so we reply when we can — thanks for your patience. Any suggestion to improve the site is welcome.",
        ] },
      ],
    },
  },

  guide: {
    es: {
      title: "Guía de League of Legends Classic",
      desc: "Qué es el modo LoL Classic, en qué se diferencia del LoL actual (maestrías, runas y objetos clásicos) y cómo sacarle jugo a las builds off-meta.",
      sections: [
        { h: "¿Qué es League of Legends Classic?", p: [
          "League of Legends Classic es un modo que devuelve el juego a su forma clásica: un puñado de campeones, el sistema viejo de <strong>maestrías y runas</strong>, y objetos que hace años desaparecieron del LoL moderno. Para quienes empezaron hace poco es una máquina del tiempo; para los veteranos, pura nostalgia.",
          "La gracia del modo es que muchas cosas que hoy están \"balanceadas\" acá siguen siendo tan rotas como en su momento. Eso abre la puerta a builds que en el LoL actual serían imposibles: AP Master Yi, Gangplank AP, one-shots con objetos que ya no existen, y mucho más.",
        ] },
        { h: "Las grandes diferencias con el LoL actual", p: [
          "<strong>Maestrías:</strong> en vez del sistema de runas reforjadas de hoy, tenés hasta 30 puntos (a nivel 30) para repartir en tres árboles — Ofensiva, Defensa y Utilidad. La notación 21/0/9 significa 21 puntos en Ofensiva, 0 en Defensa y 9 en Utilidad.",
          "<strong>Runas:</strong> eran un sistema APARTE de las maestrías. Se compraban con PI (puntos de influencia) y se colocaban en 4 ranuras — Marcas, Sellos, Glifos y Quintaesencias. Daban stats planos (daño, armadura, penetración), así que definían tu poder desde el minuto uno.",
          "<strong>Objetos:</strong> vuelven íconos como Deathfire Grasp (un activo que ejecutaba por porcentaje de vida), Atma's Impaler o el Espíritu del Antiguo Golem. Muchas builds locas dependen justamente de estos ítems que el LoL moderno borró.",
        ] },
        { h: "Cómo empezar", p: [
          "Elegí un rol con el que te sientas cómodo (top, jungla, mid, ADC o support) y un campeón que te divierta. Si no sabés por dónde arrancar, tirá de nuestra <a href=\"/es/ruleta\">ruleta</a>: te sortea campeón, línea y build no convencional para que pruebes algo distinto sin pensarlo.",
          "Después entrá a la página de esa build: vas a encontrar el orden de habilidades, los objetos con su explicación, las runas y maestrías, y desde ahora también fortalezas, debilidades, combos y enfrentamientos.",
        ] },
        { h: "Por qué las builds off-meta funcionan acá", p: [
          "Dos razones. Primero, los <strong>ratios viejos</strong>: muchas habilidades escalaban con AP o AD de forma mucho más generosa que hoy, así que subir daño mágico en un campeón \"raro\" rinde de verdad. Segundo, los <strong>objetos borrados</strong>: cosas como Deathfire Grasp permitían burst por porcentaje de vida imposible en el LoL actual.",
          "Por eso una build \"troll\" en el modo clásico no es solo un chiste — muchas veces es legítimamente fuerte. La clave es entender qué hace rota a cada una, y eso es justo lo que explicamos en cada página de build.",
        ] },
        { h: "Errores comunes de los que vuelven", p: [
          "Olvidarse de comprar runas antes de la partida (sin ellas arrancás en desventaja). Copiar builds del LoL moderno que dependen de objetos que acá no existen. Y subestimar el early game: en el clásico las peleas tempranas pesan más porque hay menos herramientas para revertir una desventaja.",
          "Nuestro consejo: empezá por una build de nuestra lista, leé el plan de partida, y ajustá a partir de ahí. Si encontrás algo para corregir o querés sugerir una build, escribinos desde la página de <a href=\"/es/contacto\">contacto</a>.",
        ] },
      ],
    },
    en: {
      title: "League of Legends Classic guide",
      desc: "What the LoL Classic mode is, how it differs from modern LoL (classic masteries, runes and items) and how to make off-meta builds shine.",
      sections: [
        { h: "What is League of Legends Classic?", p: [
          "League of Legends Classic is a mode that takes the game back to its classic form: a handful of champions, the old <strong>masteries and runes</strong> system, and items that vanished from modern LoL years ago. For newer players it's a time machine; for veterans, pure nostalgia.",
          "The fun of the mode is that many things considered \"balanced\" today are still as broken here as they once were. That opens the door to builds that would be impossible in modern LoL: AP Master Yi, AP Gangplank, one-shots with items that no longer exist, and much more.",
        ] },
        { h: "The big differences from modern LoL", p: [
          "<strong>Masteries:</strong> instead of today's reforged runes, you get up to 30 points (at level 30) to split across three trees — Offense, Defense and Utility. The notation 21/0/9 means 21 points in Offense, 0 in Defense and 9 in Utility.",
          "<strong>Runes:</strong> a system SEPARATE from masteries. Bought with IP (Influence Points) and slotted into 4 tiers — Marks, Seals, Glyphs and Quintessences. They gave flat stats (damage, armor, penetration), so they shaped your power from minute one.",
          "<strong>Items:</strong> icons return like Deathfire Grasp (an active that executed by percent HP), Atma's Impaler and Spirit of the Ancient Golem. Many crazy builds depend precisely on these items modern LoL removed.",
        ] },
        { h: "How to get started", p: [
          "Pick a role you're comfortable with (top, jungle, mid, ADC or support) and a champion you enjoy. If you don't know where to start, spin our <a href=\"/en/roulette\">roulette</a>: it rolls you a champion, lane and off-meta build so you can try something different without overthinking.",
          "Then open that build's page: you'll find the skill order, items with explanations, runes and masteries, and now also strengths, weaknesses, combos and matchups.",
        ] },
        { h: "Why off-meta builds work here", p: [
          "Two reasons. First, the <strong>old ratios</strong>: many abilities scaled with AP or AD far more generously than today, so stacking magic damage on an \"odd\" champion actually pays off. Second, the <strong>removed items</strong>: things like Deathfire Grasp enabled percent-HP burst that's impossible in modern LoL.",
          "That's why a \"troll\" build in the classic mode isn't just a joke — it's often legitimately strong. The key is understanding what makes each one broken, and that's exactly what we explain on every build page.",
        ] },
        { h: "Common mistakes for returning players", p: [
          "Forgetting to buy runes before the game (without them you start at a disadvantage). Copying modern LoL builds that rely on items that don't exist here. And underestimating the early game: in classic, early fights matter more because there are fewer tools to reverse a deficit.",
          "Our advice: start with a build from our list, read the game plan, and adjust from there. If you spot something to fix or want to suggest a build, reach us from the <a href=\"/en/contact\">contact</a> page.",
        ] },
      ],
    },
  },

  funbuilds: {
    es: {
      title: "Las 10 builds más divertidas y rotas del LoL Classic",
      desc: "Ranking de las builds off-meta más divertidas y rotas del LoL Classic: AP Ezreal, Alistar nuclear, AP Shaco, AP Yi y más, con guía de cada una.",
      sections: [
        { h: "¿Qué hace \"divertida\" a una build acá?", p: [
          "En el LoL Classic vuelven objetos y ratios que el juego moderno borró, y eso deja pasar cosas que hoy serían impensables: magos que teletransportan y borran, tanques que one-shotean, asesinos que aparecen y desaparecen. Estas son las builds más caóticas del modo — todas divertidas, y muchas legítimamente fuertes. Entrá a cada una para ver objetos, runas, orden de habilidades y combos.",
        ] },
        { h: "1. AP Ezreal — la R nuclear", p: [
          "El clásico de los clásicos: full AP para que la definitiva (Descarga Trascendente) pegue un pepinazo desde media pantalla. Robás Barones, cerrás peleas desde otra parte del mapa y pokeás sin exponerte. <a href=\"/es/campeon/ezreal-apnuke\">Ver la build de AP Ezreal →</a>",
        ] },
        { h: "2. Alistar nuclear — el toro que one-shotea", p: [
          "El combo Cabezazo → Aplastar deja de ser solo control y, con Deathfire Grasp y Rabadon, pasa a borrar magos escuálidos de un saque. Encima sos casi imposible de matar con la R activa. <a href=\"/es/campeon/alistar\">Ver la build de AP Alistar →</a>",
        ] },
        { h: "3. AP Warwick — la sanguijuela mágica", p: [
          "Sustain absurdo en la jungla y una supresión imposible de cancelar sobre el carry enemigo. Con AP tu Q pega y te cura más: ganás cualquier pelea larga. <a href=\"/es/campeon/warwick\">Ver la build de AP Warwick →</a>",
        ] },
        { h: "4. AP Shaco — la emboscada demoníaca", p: [
          "Cajas Sorpresa que aterrorizan, veneno que ralentiza y un clon que detona con AP: aparecés, explotás a dos y desaparecés riendo. El rey de los picks tempranos. <a href=\"/es/campeon/shaco\">Ver la build de AP Shaco →</a>",
        ] },
        { h: "5. AP Master Yi — la licuadora", p: [
          "Golpe Alfa escala con AP, te vuelve intocable y resetea al matar. Con la R sos una licuadora de velocidad de ataque que encadena kills hasta el pentakill. <a href=\"/es/campeon/masteryi\">Ver la build de AP Master Yi →</a>",
        ] },
        { h: "6. Akali AP burst — la asesina que volvió", p: [
          "Recién devuelta al juego: Sablepistola de core para sustain y movilidad, y de ahí full AP para que el combo con la marca borre a cualquier squishy. Tres saltos con la R para entrar y salir por la Cortina de Humo. <a href=\"/es/campeon/akali-burst\">Ver la build de Akali AP →</a>",
        ] },
        { h: "7. AP Jax — el burst que nadie espera", p: [
          "Tu W y el rayo de la R hacen daño mágico, así que con AP pegás un burst enorme mientras tu E te vuelve casi inmune a los autoataques. Escala hasta borrar carries. <a href=\"/es/campeon/jax\">Ver la build de AP Jax →</a>",
        ] },
        { h: "8. AP Gangplank — Parrrley con Lich Bane", p: [
          "Parrrley a distancia que activa el Lich Bane y da oro extra al matar, Naranjas que limpian el CC y curan con AP, y un ulti global para meterte en cualquier pelea del mapa. <a href=\"/es/campeon/gangplank\">Ver la build de AP Gangplank →</a>",
        ] },
        { h: "9. Karthus jungla — la muerte que llega a todos", p: [
          "El clásico de la jungla: farmeás con Muro de la Muerte, y en el late tu definitiva (Réquiem) castiga a TODO el equipo enemigo desde cualquier parte del mapa. Muerto seguís pegando. <a href=\"/es/campeon/karthus\">Ver la build de Karthus →</a>",
        ] },
        { h: "10. Veigar one-shot — AP infinito", p: [
          "Apilás poder de habilidad sin límite y encerrás con la Jaula: Materia Oscura + Deathfire Grasp + ulti borran a cualquiera. Cuanto más AP tenga tu objetivo, más lo lastimás. <a href=\"/es/campeon/veigar-oneshot\">Ver la build de Veigar one-shot →</a>",
        ] },
        { h: "¿No sabés cuál probar?", p: [
          "Tirá de la <a href=\"/es/ruleta\">ruleta</a> y que el destino te asigne campeón, línea y build. O mirá la <a href=\"/es/guia\">guía del modo</a> si venís del LoL moderno y querés entender las diferencias. Y si tenés una build rota que deberíamos agregar, <a href=\"/es/contacto\">contanos</a>.",
        ] },
      ],
    },
    en: {
      title: "The 10 most fun and broken builds in LoL Classic",
      desc: "Ranking of the most fun, broken off-meta builds in LoL Classic: AP Ezreal, nuclear Alistar, AP Shaco, AP Yi and more, each with a full guide.",
      sections: [
        { h: "What makes a build \"fun\" here?", p: [
          "In LoL Classic, items and ratios the modern game removed come back, and that lets through things that would be unthinkable today: mages that blink and delete, tanks that one-shot, assassins that appear and vanish. These are the most chaotic builds in the mode — all fun, and many legitimately strong. Open each one for items, runes, skill order and combos.",
        ] },
        { h: "1. AP Ezreal — the nuclear ult", p: [
          "The classic of classics: full AP so your ultimate (Trueshot Barrage) nukes from half the screen away. Steal Barons, close fights from across the map, and poke without exposing yourself. <a href=\"/en/champion/ezreal-apnuke\">See the AP Ezreal build →</a>",
        ] },
        { h: "2. Nuclear Alistar — the bull that one-shots", p: [
          "The Headbutt → Pulverize combo stops being just crowd control and, with Deathfire Grasp and Rabadon, starts deleting squishy mages instantly. Plus you're nearly unkillable with R active. <a href=\"/en/champion/alistar\">See the AP Alistar build →</a>",
        ] },
        { h: "3. AP Warwick — the magic leech", p: [
          "Absurd jungle sustain and an uncancellable suppression on the enemy carry. With AP your Q hits and heals for more: you win any drawn-out fight. <a href=\"/en/champion/warwick\">See the AP Warwick build →</a>",
        ] },
        { h: "4. AP Shaco — the demonic ambush", p: [
          "Jack in the Boxes that terrify, poison that slows and a clone that detonates with AP: you pop in, blow up two, vanish laughing. The king of early picks. <a href=\"/en/champion/shaco\">See the AP Shaco build →</a>",
        ] },
        { h: "5. AP Master Yi — the blender", p: [
          "Alpha Strike scales with AP, makes you untargetable and resets on kill. With R you're an attack-speed blender chaining kills all the way to a pentakill. <a href=\"/en/champion/masteryi\">See the AP Master Yi build →</a>",
        ] },
        { h: "6. Akali AP burst — the assassin returns", p: [
          "Just back in the game: Gunblade core for sustain and mobility, then full AP so the marked combo deletes any squishy. Three dashes with R to enter and leave through the Twilight Shroud. <a href=\"/en/champion/akali-burst\">See the Akali AP build →</a>",
        ] },
        { h: "7. AP Jax — the burst nobody expects", p: [
          "Your W and R lightning deal magic damage, so with AP you land a huge burst while your E makes you nearly immune to autoattacks. Scales until it deletes carries. <a href=\"/en/champion/jax\">See the AP Jax build →</a>",
        ] },
        { h: "8. AP Gangplank — Lich Bane Parrrley", p: [
          "Ranged Parrrley that procs Lich Bane and grants bonus gold on kills, Oranges that cleanse CC and heal with AP, and a global ult to join any fight on the map. <a href=\"/en/champion/gangplank\">See the AP Gangplank build →</a>",
        ] },
        { h: "9. Jungle Karthus — the death that reaches everyone", p: [
          "The jungle classic: you farm with Wall of Pain, and late your ultimate (Requiem) punishes the WHOLE enemy team from anywhere on the map. Dead, you keep dealing damage. <a href=\"/en/champion/karthus\">See the Karthus build →</a>",
        ] },
        { h: "10. Veigar one-shot — infinite AP", p: [
          "You stack uncapped ability power and cage them in: Dark Matter + Deathfire Grasp + ult delete anyone. The more AP your target has, the more it hurts them. <a href=\"/en/champion/veigar-oneshot\">See the Veigar one-shot build →</a>",
        ] },
        { h: "Not sure which to try?", p: [
          "Spin the <a href=\"/en/roulette\">roulette</a> and let fate assign you a champion, lane and build. Or check the <a href=\"/en/guide\">mode guide</a> if you're coming from modern LoL and want to understand the differences. And if you have a broken build we should add, <a href=\"/en/contact\">let us know</a>.",
        ] },
      ],
    },
  },
};
