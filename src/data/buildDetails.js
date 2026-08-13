// Contenido enriquecido por build (fortalezas, debilidades, combos, enfrentamientos,
// plan de partida y tips). Se muestra en la página de cada build si existe la entrada.
// Rich per-build content. Rendered on each build page when an entry exists.
//
// Clave = slug de la build (igual que en allBuilds). Se va completando por tandas.
// Key = build slug (same as in allBuilds). Filled in batches.

export const buildDetails = {
  warwick: {
    strengths: {
      es: [
        "Sustain brutal en la jungla: tu Q se cura y con AP pega y regenera más, así que casi no volvés a la base.",
        "La R es una supresión de un solo objetivo imposible de cancelar salvo con QSS o mucha tenacidad.",
        "La pasiva te da velocidad de ataque y curación al pegar: ganás casi cualquier pelea prolongada.",
      ],
      en: [
        "Brutal jungle sustain: your Q heals, and with AP it hits and restores more, so you rarely recall.",
        "Your R is a single-target suppression that can't be cancelled except by QSS or high tenacity.",
        "The passive grants attack speed and on-hit healing: you win almost any drawn-out fight.",
      ],
    },
    weaknesses: {
      es: [
        "Sin la R en cooldown quedás bastante inofensivo entre ultis.",
        "Dependés de llegar a rango cuerpo a cuerpo; los campeones de kiteo te sufren poco.",
        "En versión AP sacrificás algo de aguante: si te fokean, caés.",
      ],
      en: [
        "With your R on cooldown you're fairly harmless between ultimates.",
        "You depend on reaching melee range; kiting champions barely fear you.",
        "The AP version sacrifices some tankiness: if you get focused, you fall.",
      ],
    },
    combos: {
      es: ["Entrada con E → R para bloquear al carry enemigo → Q para curarte mientras lo matás."],
      en: ["Engage with E → R to lock down the enemy carry → Q to heal while you finish them."],
    },
    matchups: {
      good: {
        es: ["Campeones inmóviles (Karthus, Fiddlesticks) que no escapan de tu R.", "Junglas sin sustain: perdés casi ninguna pelea larga."],
        en: ["Immobile champions (Karthus, Fiddlesticks) who can't escape your R.", "Junglers without sustain: you lose almost no extended fight."],
      },
      bad: {
        es: ["Campeones con QSS o mucha tenacidad que anulan tu R.", "ADCs con dashes (Ezreal, Caitlyn) que te patean sin dejarte pegar."],
        en: ["Champions with QSS or high tenacity that negate your R.", "ADCs with dashes (Ezreal, Caitlyn) who kite you out."],
      },
    },
    plan: {
      es: "Farmeá la jungla temprano abusando del sustain de tu Q; a nivel 6 empezá a buscar ganks usando la R para bloquear al objetivo prioritario. En mid game acompañá a tu equipo y guardá la R para el carry rival en cada teamfight. Late, sos un buscador de picks: si suprimís al AD o AP enemigo, la pelea ya está ganada.",
      en: "Farm the jungle early abusing your Q sustain; at level 6 start ganking, using R to lock the priority target. Mid game, group with your team and save R for the enemy carry every fight. Late, you're a pick-hunter: suppress the enemy AD or AP and the fight is already won.",
    },
    tips: {
      es: ["Guardá la R para el carry, no la tires en el primer tanque que veas.", "Aprovechá el rastro de sangre de la pasiva para cazar enemigos con poca vida."],
      en: ["Save R for the carry, don't blow it on the first tank you see.", "Use the passive's blood trail to hunt low-health enemies."],
    },
  },

  jax: {
    strengths: {
      es: [
        "Tu W y el rayo de la R hacen daño mágico, así que con AP pegás un burst enorme que nadie espera.",
        "El E te bloquea los autoataques unos segundos y aturde al terminar: ganás casi cualquier 1v1 si lo usás bien.",
        "Escala increíble: en late, un combo tuyo borra a los carries.",
      ],
      en: [
        "Your W and R lightning deal magic damage, so with AP you land a huge burst nobody expects.",
        "Your E blocks autoattacks for a few seconds and stuns at the end: you win almost any 1v1 if timed right.",
        "Incredible scaling: late game, one combo deletes carries.",
      ],
    },
    weaknesses: {
      es: [
        "Early game flojo: hasta el 6 sos vulnerable a poke y a que te congelen la ola.",
        "Tu daño depende de acercarte; contra kiteo puro sufrís.",
        "Sin el E listo, sos mucho más fácil de matar.",
      ],
      en: [
        "Weak early: until level 6 you're vulnerable to poke and lane freezes.",
        "Your damage depends on closing distance; against pure kiting you struggle.",
        "Without E up, you're much easier to kill.",
      ],
    },
    combos: {
      es: ["Q (salto) → W (golpe cargado) → E (esquiva y aturde al terminar) → segundo golpe con la R activa para el burst mágico."],
      en: ["Q (leap) → W (empowered strike) → E (dodge, stuns at the end) → second hit with R active for the magic burst."],
    },
    matchups: {
      good: {
        es: ["Peleadores que dependen de autoataques (Tryndamere, Master Yi): tu E los apaga.", "Campeones sin escape a los que alcanzás con la Q."],
        en: ["Autoattack-reliant fighters (Tryndamere, Master Yi): your E shuts them off.", "Champions without escapes that your Q reaches."],
      },
      bad: {
        es: ["Rango y poke (Teemo, Vayne) que te desgastan antes de llegar.", "CC duro que te frena mientras te pegan."],
        en: ["Range and poke (Teemo, Vayne) who wear you down before you arrive.", "Hard CC that locks you while they hit you."],
      },
    },
    plan: {
      es: "Sobreviví la fase de línea farmeando y esquivando poke; evitá pelear en serio antes del 6. Con la R subida y un par de ítems, tu combo pasa a matar squishies de un saque. En teamfights, esperá a que gasten su CC, saltá al carry y usá el E para tankear mientras lo borrás.",
      en: "Survive laning by farming and dodging poke; avoid real fights before level 6. With R up and a couple of items, your combo starts one-shotting squishies. In teamfights, wait out their CC, jump the carry and use E to tank while you delete them.",
    },
    tips: {
      es: ["Cronometrá el E para que el aturdimiento coincida con el pico de autoataques enemigos.", "No saltes con la Q como iniciación si no tenés el E listo para el escape."],
      en: ["Time E so the stun lands at the peak of enemy autoattacks.", "Don't Q in as engage unless E is ready as your escape."],
    },
  },

  garen: {
    strengths: {
      es: [
        "Tu Q puede critear: un solo golpe pega una barbaridad y te da velocidad para pegarte al objetivo.",
        "El silencio de la Q corta hechizos y escapes clave.",
        "La R ejecuta: mata sí o sí a objetivos con poca vida, ideal para cerrar picks.",
      ],
      en: [
        "Your Q can crit: one hit lands massive damage and gives you speed to stick to the target.",
        "The Q's silence cuts key spells and escapes.",
        "The R executes: it guarantees kills on low-health targets, great for closing picks.",
      ],
    },
    weaknesses: {
      es: [
        "Sin escapes reales: si te frenan lejos, no llegás.",
        "Dependés de autoataques; el E se apaga si te ciegan o alejan.",
        "Poca presión a rango: los campeones de poke te fastidian la línea.",
      ],
      en: [
        "No real escapes: if you're kited from afar, you don't arrive.",
        "You rely on autoattacks; your E is wasted if you're blinded or peeled.",
        "Little ranged pressure: poke champions annoy your lane.",
      ],
    },
    combos: {
      es: ["Q (silencio + velocidad) para pegarte → E (molinete) para el daño sostenido → R para ejecutar cuando esté bajo de vida."],
      en: ["Q (silence + speed) to stick → E (spin) for sustained damage → R to execute once they're low."],
    },
    matchups: {
      good: {
        es: ["Squishies sin escape que no sobreviven a tu Q crit + R.", "Campeones que dependen de un hechizo clave: tu silencio los anula."],
        en: ["Escapeless squishies who don't survive your Q crit + R.", "Champions reliant on one key spell: your silence negates them."],
      },
      bad: {
        es: ["Poke a rango (Teemo, Kennen) que te baja antes de llegar.", "Tanques que aguantan tu daño mientras tu equipo pierde en otro lado."],
        en: ["Ranged poke (Teemo, Kennen) who lower you before you reach them.", "Tanks who eat your damage while your team loses elsewhere."],
      },
    },
    plan: {
      es: "En línea, usá el arbusto y la Q para intercambios cortos y letales. Buscá flancos en mid game: tu Q te da la velocidad para caer sobre el carry enemigo, silenciarlo y reventarlo. Mantené la R lista para rematar a quien quede bajo.",
      en: "In lane, use the brush and Q for short, lethal trades. Look for flanks mid game: your Q gives the speed to dive the enemy carry, silence them and blow them up. Keep R ready to finish anyone left low.",
    },
    tips: {
      es: ["Guardá la Q para pegarte al carry, no la gastes solo por el daño.", "La R hace más daño cuanta menos vida le queda al enemigo: cronometrala bien."],
      en: ["Save Q to stick to the carry, don't waste it just for damage.", "The R deals more the lower the enemy's health: time it well."],
    },
  },

  "ezreal-apnuke": {
    strengths: {
      es: [
        "Tu R con AP pega un pepinazo desde media pantalla: ideal para rematar peleas o robar objetivos.",
        "Cambio Arcano (E) te da un blink para posicionarte y esquivar.",
        "Poke seguro a distancia: molestás sin exponerte.",
      ],
      en: [
        "Your R with AP nukes from half the screen away: perfect to close fights or steal objectives.",
        "Arcane Shift (E) gives you a blink to reposition and dodge.",
        "Safe ranged poke: you harass without exposing yourself.",
      ],
    },
    weaknesses: {
      es: [
        "Sin la R tu daño baja mucho: sos muy dependiente del ulti.",
        "Frágil: si te caen encima, tenés un solo escape.",
        "Requiere apuntar bien los skillshots; si fallás, no hacés nada.",
      ],
      en: [
        "Without R your damage drops a lot: you're very ult-dependent.",
        "Fragile: if they collapse on you, you have a single escape.",
        "Requires good skillshot aim; if you miss, you do nothing.",
      ],
    },
    combos: {
      es: ["Marcá con W (Disparo Esencial) → Q (Disparo Místico) para detonarlo y bajar cooldowns → R para el nuke final."],
      en: ["Tag with W (Essence Flux) → Q (Mystic Shot) to detonate it and cut cooldowns → R for the final nuke."],
    },
    matchups: {
      good: {
        es: ["Peleas agrupadas donde tu R pega a varios.", "Objetivos de Barón/Dragón: robás con la R a rango seguro."],
        en: ["Grouped fights where your R hits several.", "Baron/Dragon objectives: steal with R from safe range."],
      },
      bad: {
        es: ["Dive y asesinos (Zed, Kha'Zix) que te alcanzan pese al blink.", "Campeones muy móviles que esquivan tus skillshots."],
        en: ["Dive and assassins (Zed, Kha'Zix) who reach you despite the blink.", "Highly mobile champions who dodge your skillshots."],
      },
    },
    plan: {
      es: "Jugá a rango pokeando con Q y bajando cooldowns con la pasiva. Guardá la R para rematar a alguien que ya esté bajo o para empujar una ola desde lejos. En teamfights, quedate atrás y tirá la R cuando se agrupen o cuando un enemigo intente escapar con poca vida.",
      en: "Play at range poking with Q and cutting cooldowns via the passive. Save R to finish someone already low or to push a wave from afar. In teamfights, stay back and fire R when they group or when an enemy tries to escape low.",
    },
    tips: {
      es: ["Aprendete el rango global de la R: podés cerrar kills desde otra parte del mapa.", "Usá el E para reposicionar, no como escape de pánico apenas te tocan."],
      en: ["Learn the R's global range: you can close kills from across the map.", "Use E to reposition, not as a panic escape the moment you're touched."],
    },
  },

  masteryi: {
    strengths: {
      es: [
        "Golpe Alfa (Q) escala con AP, te vuelve intocable durante la animación (esquivás CC y torres) y resetea su cooldown al matar.",
        "Con la R sos una licuadora: velocidad de ataque y de movimiento enormes para encadenar kills.",
        "Reseteos en cadena: una buena pelea puede terminar en pentakill.",
      ],
      en: [
        "Alpha Strike (Q) scales with AP, makes you untargetable during the animation (dodging CC and turrets) and resets on kill.",
        "With R you're a blender: huge attack and move speed to chain kills.",
        "Chained resets: a good fight can end in a pentakill.",
      ],
    },
    weaknesses: {
      es: [
        "El CC te destruye: un solo aturdimiento fuera de la Q y estás muerto.",
        "Early flojo: antes de ítems y R sos fácil de invadir.",
        "Dependés de reseteos; si no matás, quedás en cooldown y expuesto.",
      ],
      en: [
        "CC destroys you: one stun outside your Q and you're dead.",
        "Weak early: before items and R you're easy to invade.",
        "You depend on resets; if you don't kill, you're left on cooldown and exposed.",
      ],
    },
    combos: {
      es: ["Activá R → Q para entrar intocable sobre el carry → autoataques → Q de nuevo al resetear con la kill."],
      en: ["Activate R → Q to dash in untargetable onto the carry → autoattacks → Q again when it resets on the kill."],
    },
    matchups: {
      good: {
        es: ["Equipos con poco CC donde tu Q y R te dejan hacer estragos.", "Squishies agrupados: encadenás reseteos."],
        en: ["Low-CC teams where your Q and R let you run wild.", "Grouped squishies: you chain resets."],
      },
      bad: {
        es: ["Cualquier equipo con aturdimientos/anclas (Amumu, Leona) que te frenan.", "Exhaust o mucha armadura que apagan tu DPS."],
        en: ["Any team with stuns/anchors (Amumu, Leona) that lock you down.", "Exhaust or heavy armor that shut off your DPS."],
      },
    },
    plan: {
      es: "Farmeá y evitá peleas hasta tener R y un par de ítems; sos un campeón de mid-late. Elegí tus peleas: entrá con la Q sobre el objetivo más débil y, cuando la pelea se abra, encadená reseteos. Nunca inicies vos — dejá que gasten el CC primero.",
      en: "Farm and avoid fights until you have R and a couple of items; you're a mid-late champion. Pick your fights: enter with Q on the weakest target and, once it opens up, chain resets. Never engage first — let them spend their CC.",
    },
    tips: {
      es: ["Usá Golpe Alfa para esquivar hechizos clave (ultis, torretas) además de por el daño.", "Si el enemigo tiene mucho CC, esperá a que lo tiren antes de saltar."],
      en: ["Use Alpha Strike to dodge key spells (ults, turrets), not just for damage.", "If the enemy has lots of CC, wait for them to blow it before jumping in."],
    },
  },

  gangplank: {
    strengths: {
      es: [
        "Parrrley (Q) escala con AP y aplica efectos a distancia: poke seguro que te da oro extra al matar unidades.",
        "Tus barriles pegan daño mágico en área con AP: un buen encadenado revienta a varios.",
        "Ulti global: presionás todo el mapa y rematás peleas desde lejos.",
      ],
      en: [
        "Parrrley (Q) scales with AP and applies effects at range: safe poke that grants bonus gold on unit kills.",
        "Your barrels deal AoE magic damage with AP: a good chain blows up several enemies.",
        "Global ult: you pressure the whole map and finish fights from afar.",
      ],
    },
    weaknesses: {
      es: [
        "Curva de aprendizaje alta: los barriles requieren práctica para encadenarlos.",
        "Frágil si te caen encima; dependés de la distancia.",
        "Sin barriles listos, tu burst desaparece.",
      ],
      en: [
        "High skill curve: barrels take practice to chain.",
        "Fragile if they collapse on you; you depend on distance.",
        "Without barrels ready, your burst disappears.",
      ],
    },
    combos: {
      es: ["Colocá un barril → Q al barril para detonarlo en cadena → encadena un segundo barril, sumando la W (Comida en Mal Estado) para limpiar CC."],
      en: ["Place a barrel → Q the barrel to detonate the chain → chain a second barrel, adding W (Remove Scurvy) to cleanse CC."],
    },
    matchups: {
      good: {
        es: ["Líneas inmóviles a las que pokeás con Q sin represalia.", "Peleas agrupadas donde los barriles pegan a todo el equipo."],
        en: ["Immobile lanes you poke with Q without retaliation.", "Grouped fights where barrels hit the whole team."],
      },
      bad: {
        es: ["All-in temprano (Renekton, Darius) que te revientan antes de escalar.", "Campeones móviles que esquivan los barriles."],
        en: ["Early all-in (Renekton, Darius) who blow you up before you scale.", "Mobile champions who dodge the barrels."],
      },
    },
    plan: {
      es: "Usá Parrrley para farmear a rango y juntar oro extra con la pasiva de plata. Practicá el encadenado de barriles: es tu fuente principal de daño en pelea. Con la R, ayudá a otras líneas o rematá teamfights aplicando lentitud y daño en área desde cualquier parte del mapa.",
      en: "Use Parrrley to farm at range and stack bonus gold via the silver passive. Practice chaining barrels: it's your main source of fight damage. With R, help other lanes or finish teamfights, applying slow and AoE damage from anywhere on the map.",
    },
    tips: {
      es: ["Detoná barriles con la Q para no gastar autoataques y mantener el rango.", "Guardá la W (naranja) para el CC clave: te limpia aturdimientos y anclas."],
      en: ["Detonate barrels with Q to save autoattacks and keep your range.", "Save W (the orange) for key CC: it cleanses stuns and anchors."],
    },
  },
};

export function detailsFor(slug) {
  return buildDetails[slug] || null;
}
