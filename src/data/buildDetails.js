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

  "akali-burst": {
    strengths: {
      es: [
        "Burst altísimo: con la marca detonada + combo borrás a cualquier squishy en un segundo.",
        "La Cortina de Humo te vuelve invisible: peleás, esquivás skillshots y escapás desde adentro.",
        "La R (Asalto Sombrío) te da tres saltos para entrar, resetear objetivos y salir viva.",
        "La Sablepistola le da el sustain y la movilidad que le faltan a una asesina pura.",
      ],
      en: [
        "Very high burst: with the mark detonated + combo you delete any squishy in a second.",
        "The Twilight Shroud turns you invisible: you fight, dodge skillshots and escape from inside it.",
        "The R (Shadow Dance) gives three dashes to enter, reset targets and get out alive.",
        "The Gunblade gives the sustain and mobility a pure assassin lacks.",
      ],
    },
    weaknesses: {
      es: [
        "Manejo de energía: si gastás todo el combo y no matás, te quedás sin recursos y expuesta.",
        "El CC duro te frena en seco antes de completar el combo.",
        "La torreta revela y ataca dentro de la Cortina: no es escondite seguro bajo torre.",
        "Frágil: si te agarran sin la W o la R listas, caés rápido.",
      ],
      en: [
        "Energy management: if you spend the full combo and don't kill, you're out of resources and exposed.",
        "Hard CC stops you cold before you finish the combo.",
        "Turrets reveal and hit you inside the Shroud: it's not a safe hideout under tower.",
        "Fragile: if you're caught without W or R up, you fall fast.",
      ],
    },
    combos: {
      es: [
        "Burst completo: Marca del Asesino (Q) → autoataque para detonarla → Golpe Crescendo (E) → activo de la Sablepistola + DFG para rematar.",
        "Entrada segura: Asalto Sombrío (R) sobre el objetivo → combo dentro de la Cortina de Humo (W) para pelear con visión negada.",
      ],
      en: [
        "Full burst: Mark of the Assassin (Q) → autoattack to detonate → Crescent Slash (E) → Gunblade active + DFG to finish.",
        "Safe entry: Shadow Dance (R) onto the target → combo inside the Twilight Shroud (W) to fight with vision denied.",
      ],
    },
    matchups: {
      good: {
        es: ["Magos inmóviles (Veigar, Karthus) que no escapan de tu salto + burst.", "Squishies sin dashes: no sobreviven al combo con la marca detonada."],
        en: ["Immobile mages (Veigar, Karthus) who can't escape your dash + burst.", "Squishies without dashes: they don't survive the combo with the mark detonated."],
      },
      bad: {
        es: ["CC puntual (Annie, Leona) que te frena antes de completar el combo.", "Campeones con sustain o mucha vida a los que no borrás de un combo."],
        en: ["Point-and-click CC (Annie, Leona) that stops you before you finish the combo.", "High-sustain or high-HP champions you can't delete in one combo."],
      },
    },
    plan: {
      es: "En línea, usá la Marca del Asesino (Q) para pokear y mantener la energía alta, y rushea la Sablepistola para tener sustain y movilidad. A partir del 6 sos una amenaza de pick: buscá objetivos fuera de posición, entrá con la R y borralos con el combo. En teamfights, esperá a que gasten el CC, saltá al carry enemigo y usá la Cortina de Humo y las cargas de la R para reposicionarte entre saltos.",
      en: "In lane, use Mark of the Assassin (Q) to poke and keep energy high, and rush the Gunblade for sustain and mobility. From level 6 you're a pick threat: hunt out-of-position targets, enter with R and delete them with the combo. In teamfights, wait out their CC, jump the enemy carry and use the Twilight Shroud and R charges to reposition between leaps.",
    },
    tips: {
      es: ["Detoná siempre la marca de la Q con un autoataque: es la mayor parte de tu daño y te devuelve energía.", "Guardá una carga de la R para el escape, no gastes las tres para entrar."],
      en: ["Always detonate the Q's mark with an autoattack: it's most of your damage and refunds energy.", "Keep one R charge for the escape, don't spend all three to enter."],
    },
  },

  alistar: {
    strengths: {
      es: [
        "El combo Cabezazo → Aplastar encadena dos derribos garantizados: control absoluto sobre un objetivo.",
        "Con AP + DFG ese combo deja de ser solo CC y pasa a borrar magos escuálidos.",
        "Tu R (Voluntad Inquebrantable) te da una reducción de daño enorme: entrás, matás y sobrevivís al foco.",
        "Base súper resistente: aunque vayas AP, seguís siendo difícil de matar.",
      ],
      en: [
        "The Headbutt → Pulverize combo chains two guaranteed knock-ups: total lockdown on a target.",
        "With AP + DFG that combo stops being just CC and starts deleting squishy mages.",
        "Your R (Unbreakable Will) gives huge damage reduction: you dive in, kill, and survive the focus.",
        "Tanky base stats: even going AP, you're hard to kill.",
      ],
    },
    weaknesses: {
      es: [
        "Cuerpo a cuerpo: necesitás pegarte al objetivo, y el kiteo te sufre.",
        "Hambriento de maná al principio: si spameás el combo, te quedás seco.",
        "Sin el combo listo, tu daño cae mucho.",
        "Es predecible: todos saben que vas por el Cabezazo → Aplastar.",
      ],
      en: [
        "Melee: you need to stick to the target, and kiting hurts you.",
        "Mana-hungry early: if you spam the combo, you run dry.",
        "Without the combo up, your damage drops a lot.",
        "It's predictable: everyone knows the Headbutt → Pulverize is coming.",
      ],
    },
    combos: {
      es: [
        "Combo estándar: Cabezazo (W) para empujar al objetivo hacia vos → Aplastar (Q) para derribarlo → DFG + Ignite para rematar.",
        "Iniciación con Flash: Flash → Aplastar (Q) para el derribo sorpresa → Cabezazo (W) para reposicionar al enemigo hacia tu equipo.",
      ],
      en: [
        "Standard combo: Headbutt (W) to knock the target toward you → Pulverize (Q) to knock them up → DFG + Ignite to finish.",
        "Flash engage: Flash → Pulverize (Q) for the surprise knock-up → Headbutt (W) to reposition them into your team.",
      ],
    },
    matchups: {
      good: {
        es: ["Magos inmóviles (Veigar, Karthus) que no escapan de tu combo + burst.", "Objetivos sin dash a los que fijás con el doble derribo."],
        en: ["Immobile mages (Veigar, Karthus) who can't escape your combo + burst.", "Dashless targets you lock down with the double knock-up."],
      },
      bad: {
        es: ["Poke a rango que te kitea antes de que llegues al combo.", "Comps con mucho peel/CC que te frenan antes de completar la cadena."],
        en: ["Ranged poke that kites you before you land the combo.", "Comps with heavy peel/CC that stop you before you finish the chain."],
      },
    },
    plan: {
      es: "Roameá y buscá picks: un Cabezazo → Aplastar sobre alguien fuera de posición suele ser una muerte. En teamfights, activá la R antes de entrar, buscá al carry enemigo y encadená los derribos mientras tu equipo limpia. Cuidá el maná al principio y no gastes el combo si no vas a matar.",
      en: "Roam and hunt picks: a Headbutt → Pulverize on someone out of position is usually a kill. In teamfights, pop R before diving, find the enemy carry and chain the knock-ups while your team cleans up. Watch your mana early and don't waste the combo unless you're going to kill.",
    },
    tips: {
      es: ["Encolá el Aplastar (Q) apenas conecta el Cabezazo (W) para que el combo sea imparable.", "Activá la R antes de saltar: la reducción de daño te deja sobrevivir al foco de todo el equipo."],
      en: ["Buffer Pulverize (Q) the instant Headbutt (W) connects so the combo is unstoppable.", "Pop R before you jump: the damage reduction lets you survive the whole team's focus."],
    },
  },

  shaco: {
    strengths: {
      es: [
        "Burst demencial: Cajas Sorpresa + Veneno + el clon que detona con AP borran a un squishy en un instante.",
        "Engañar (Q) te da invisibilidad y un blink: aparecés, matás y desaparecés riendo.",
        "Ganks tempranos brutales: la caja aterroriza al enemigo y le da la kill a tu equipo.",
        "Presión de mapa con el clon: obligás al rival a jugar con miedo a la emboscada.",
      ],
      en: [
        "Insane burst: Jack in the Boxes + Two-Shiv Poison + the AP-detonating clone delete a squishy in an instant.",
        "Deceive (Q) gives stealth and a blink: pop in, kill, vanish laughing.",
        "Brutal early ganks: the box fears the enemy and hands your team the kill.",
        "Map pressure with the clone: you force opponents to play afraid of the ambush.",
      ],
    },
    weaknesses: {
      es: [
        "Muy frágil: si el burst no mata, quedás expuesto y morís rápido.",
        "Escala mal si vas atrás: sos un campeón de snowball temprano.",
        "Las cajas necesitan colocarse con anticipación; sin setup, tu daño baja.",
        "Los guardianes de control (pink wards) revelan cajas y sigilo: te apagan.",
      ],
      en: [
        "Very fragile: if the burst doesn't kill, you're exposed and die fast.",
        "Scales poorly if behind: you're an early-snowball champion.",
        "Boxes need to be placed in advance; without setup, your damage drops.",
        "Control wards reveal boxes and stealth: they shut you off.",
      ],
    },
    combos: {
      es: [
        "Emboscada: colocá Caja Sorpresa (W) en un arbusto → Veneno de las Dos Dagas (E) para ralentizar → Engañar (Q) por detrás para el crítico → Alucinar (R) y detoná el clon para el burst final.",
        "Pick rápido: Q (invisibilidad) para acercarte → E + auto + caja: si es squishy, ya está muerto.",
      ],
      en: [
        "Ambush: place Jack in the Box (W) in a bush → Two-Shiv Poison (E) to slow → Deceive (Q) from behind for the crit → Hallucinate (R) and detonate the clone for the final burst.",
        "Fast pick: Q (stealth) to close → E + auto + box: if they're squishy, they're already dead.",
      ],
    },
    matchups: {
      good: {
        es: ["Squishies inmóviles y con poca visión de mapa: presa fácil de la emboscada.", "Junglas de early débil a los que invadís y matás con las cajas."],
        en: ["Immobile squishies with poor map awareness: easy ambush prey.", "Weak-early junglers you invade and kill with boxes."],
      },
      bad: {
        es: ["Equipos que compran guardianes de control: revelan cajas y sigilo.", "Comps tanques que no podés reventar con un solo burst."],
        en: ["Teams that buy control wards: they reveal boxes and stealth.", "Tanky comps you can't blow up with a single burst."],
      },
    },
    plan: {
      es: "Farmeá rápido y cacheá ganks temprano con las cajas para snowballear — sos más fuerte cuanto antes. En mid game, buscá squishies aislados con el combo Q + burst. Usá el clon (R) para fingir escapes, baitear y volver a entrar, o para duplicar el burst en pelea. Cuando el enemigo empiece a comprar pinks, jugá por objetivos y picks, no por peleas frontales.",
      en: "Farm fast and cheese early ganks with boxes to snowball — you're strongest early. Mid game, hunt isolated squishies with the Q + burst combo. Use the clone (R) to fake escapes, bait and re-engage, or to double your burst in a fight. Once the enemy starts buying control wards, play for objectives and picks, not front-to-back fights.",
    },
    tips: {
      es: ["Pre-colocá cajas en Dragón y Barón: el miedo gana esas peleas antes de que empiecen.", "Usá el clon para simular que escapás y volver a caer sobre el que te persigue."],
      en: ["Pre-place boxes at Dragon and Baron: the fear wins those fights before they start.", "Use the clone to fake an escape and drop back onto whoever chases you."],
    },
  },

  lulu: {
    strengths: {
      es: [
        "Poke fuerte y seguro: Destello Reluciente (Q) con Pix castiga a rango sin exponerte.",
        "Metamorfosis (W) convierte a un asesino o diver en un bichito indefenso por un par de segundos: apaga la amenaza más grande de la pelea.",
        "Nunca sos inútil: aunque vayas AP, seguís teniendo escudo, aceleración y el ulti para salvar aliados.",
        "Fase de línea muy cómoda: difícil de matar y molesta de enfrentar.",
      ],
      en: [
        "Strong, safe poke: Glitterlance (Q) with Pix punishes at range without exposing you.",
        "Whimsy (W) turns an assassin or diver into a helpless critter for a couple of seconds: it shuts off the fight's biggest threat.",
        "You're never useless: even going AP, you still have a shield, haste and the ult to save allies.",
        "Very comfortable laning phase: hard to kill and annoying to face.",
      ],
    },
    weaknesses: {
      es: [
        "Burst bajo: sos una maga de utilidad y poke, no una one-shot; matás desgastando, no de un combo.",
        "La Q es un skillshot esquivable: si no le pegás, tu daño baja mucho.",
        "Hambrienta de maná al principio si abusás del poke.",
        "Una sola W: si hay dos divers, solo podés desactivar a uno.",
      ],
      en: [
        "Low burst: you're a utility/poke mage, not a one-shot; you kill by chipping, not with a single combo.",
        "The Q is a dodgeable skillshot: if you miss, your damage drops a lot.",
        "Mana-hungry early if you abuse the poke.",
        "Only one W: if there are two divers, you can only disable one.",
      ],
    },
    combos: {
      es: [
        "Poke máximo: Ayuda Pix (E) sobre el enemigo (lo revela y potencia tu Q) → Destello Reluciente (Q) para el doble slow y el daño.",
        "Defensivo: Metamorfosis (W) sobre el asesino que salta → Q para ralentizarlo → alejate mientras no puede hacer nada.",
      ],
      en: [
        "Max poke: Help Pix (E) on the enemy (reveals them and empowers your Q) → Glitterlance (Q) for the double slow and damage.",
        "Defensive: Whimsy (W) on the assassin who jumps → Q to slow → walk away while they can do nothing.",
      ],
    },
    matchups: {
      good: {
        es: ["Asesinos y divers melee (Akali, Master Yi) a los que anulás con Metamorfosis.", "Objetivos inmóviles que desgastás con el poke de Q + Pix."],
        en: ["Melee assassins and divers (Akali, Master Yi) you neutralize with Whimsy.", "Immobile targets you wear down with Q + Pix poke."],
      },
      bad: {
        es: ["Magos de rango largo que te superan en poke.", "Enganche duro múltiple que una sola W no alcanza a frenar."],
        en: ["Long-range mages that out-poke you.", "Multiple hard engage that a single W can't stop."],
      },
    },
    plan: {
      es: "Ganá la línea con el poke de Q + Pix y farmea cómoda. Guardá la Metamorfosis (W) para el asesino o el enganche enemigo en cada pelea — ese es tu mayor valor. En teamfights sos mitad maga, mitad soporte: pokeá desde atrás y usá W, escudo (E) y el ulti (Crecimiento Salvaje) para salvar a quien se diveen. No gastes la W por daño; guardala para desactivar la amenaza.",
      en: "Win lane with Q + Pix poke and farm comfortably. Save Whimsy (W) for the enemy assassin or engage every fight — that's your biggest value. In teamfights you're half mage, half support: poke from the back and use W, the shield (E) and the ult (Wild Growth) to save whoever gets dived. Don't spend W for damage; hold it to disable the threat.",
    },
    tips: {
      es: ["Tirá Ayuda Pix (E) sobre el enemigo antes de la Q: lo revela y tu Destello pega más.", "Reservá la Metamorfosis (W) para el asesino, no la uses para hacer daño."],
      en: ["Cast Help Pix (E) on the enemy before Q: it reveals them and your Glitterlance hits harder.", "Reserve Whimsy (W) for the assassin, don't use it for damage."],
    },
  },

  tristana: {
    strengths: {
      es: [
        "Carga Explosiva (E) con AP pega un burst enorme al detonar: sorprende a cualquiera que la subestime.",
        "El Salto Cohete (W) se resetea al participar en una kill: encadenás de un objetivo al siguiente.",
        "Poke seguro a distancia: saltás, colocás la bomba y saltás de vuelta sin quedarte.",
        "El ulti (Descarga Explosiva) sirve para el peel (empujás al diver) o para rematar.",
      ],
      en: [
        "Explosive Charge (E) with AP lands a huge burst when it detonates: it surprises anyone who underestimates it.",
        "Rocket Jump (W) resets on takedown: you chain from one target to the next.",
        "Safe ranged poke: you jump in, place the bomb and jump back out without lingering.",
        "The ult (Buster Shot) works for peel (knock the diver away) or to finish a kill.",
      ],
    },
    weaknesses: {
      es: [
        "La E necesita detonar (con autos o tiempo): el burst no es instantáneo como el de un mago puro.",
        "Frágil: si te agarran después del salto, caés rápido.",
        "Si la W está en cooldown y no resetea, te quedás sin escape ni movilidad.",
        "El enganche es predecible: todos saben que vas a saltar encima.",
      ],
      en: [
        "The E needs to detonate (via autos or time): the burst isn't instant like a pure mage's.",
        "Fragile: if you're caught after the jump, you fall fast.",
        "If W is on cooldown and doesn't reset, you're left with no escape or mobility.",
        "The engage is predictable: everyone knows you're going to jump on top.",
      ],
    },
    combos: {
      es: [
        "Combo de burst: Salto Cohete (W) sobre el objetivo → Carga Explosiva (E) → un autoataque para sumar cargas → detoná + DFG para matar. Si conseguís la kill, la W se resetea: saltá al siguiente.",
        "Peel: si te divean, Descarga Explosiva (R) para empujar al asesino lejos de vos.",
      ],
      en: [
        "Burst combo: Rocket Jump (W) onto the target → Explosive Charge (E) → an autoattack to add stacks → detonate + DFG to kill. If you get the kill, W resets: jump to the next.",
        "Peel: if you get dived, Buster Shot (R) to knock the assassin away from you.",
      ],
    },
    matchups: {
      good: {
        es: ["Mids escuálidos e inmóviles que no sobreviven al combo con la E detonada.", "Peleas donde la W encadena reseteos y snowballeás sola."],
        en: ["Squishy, immobile mids who don't survive the combo with a detonated E.", "Fights where W chains resets and you snowball on your own."],
      },
      bad: {
        es: ["CC duro que te atrapa justo después del salto.", "Magos de poke que te mantienen fuera de rango."],
        en: ["Hard CC that catches you right after the jump.", "Poke mages that keep you out of range."],
      },
    },
    plan: {
      es: "Farmea seguro y pokeá saltando con la E y volviendo atrás. Buscá un pick donde la W te dé la kill y se resetee: ahí es cuando explotás una pelea encadenando saltos. Usá el ulti para sacarte de encima a los divers o para empujar a un enemigo hacia tu equipo. Colocá la Carga Explosiva temprano en el combo para que esté lista para detonar en el momento del burst.",
      en: "Farm safe and poke by jumping in with E and back out. Look for a pick where W lands the kill and resets: that's when you blow up a fight chaining jumps. Use the ult to peel divers off you or to knock an enemy into your team. Place Explosive Charge early in the combo so it's ready to detonate at the burst moment.",
    },
    tips: {
      es: ["Colocá la E al principio del combo: tarda en detonar, así llega lista para el momento del burst.", "Guardá la W para la ventana de reseteo, no la gastes solo como escape."],
      en: ["Place E at the start of the combo: it takes time to detonate, so it's ready for the burst moment.", "Save W for the reset window, don't spend it just as an escape."],
    },
  },

  karthus: {
    strengths: {
      es: [
        "Presencia global: la definitiva (Réquiem) pega a todo el equipo enemigo desde cualquier parte del mapa. Cerrás peleas y robás kills que creían escapadas.",
        "Seguís pegando unos segundos DESPUÉS de morir (pasiva): cambiar tu vida por un wombo es una jugada ganadora.",
        "El Velo de Tormento (E) es un DPS de área enorme y sostenido en peleas agrupadas.",
        "Waveclear y farmeo brutales con Muerte Definitiva (Q).",
      ],
      en: [
        "Global presence: the ult (Requiem) hits the whole enemy team from anywhere on the map. You close fights and steal kills they thought they'd escaped.",
        "You keep casting for a few seconds AFTER dying (passive): trading your life for a wombo is a winning play.",
        "Defile (E) is huge, sustained AoE DPS in grouped fights.",
        "Brutal waveclear and farming with Lay Waste (Q).",
      ],
    },
    weaknesses: {
      es: [
        "Sin movilidad ni escape: te cazan con facilidad.",
        "Hambriento de maná hasta que llegan los ítems.",
        "Depende de acertar el AoE chico de la Q para daño y maná.",
        "Frágil: los asesinos te revientan si te alcanzan.",
      ],
      en: [
        "No mobility or escape: you get caught easily.",
        "Mana-hungry until items come online.",
        "Relies on landing the Q's small AoE for damage and mana.",
        "Fragile: assassins blow you up if they reach you.",
      ],
    },
    combos: {
      es: ["Muro de Dolor (W) para atrapar → Velo de Tormento (E) activado → spam de Muerte Definitiva (Q) → Réquiem (R) para rematar a los que quedan bajos."],
      en: ["Wall of Pain (W) to trap → Defile (E) on → spam Lay Waste (Q) → Requiem (R) to finish whoever's left low."],
    },
    matchups: {
      good: {
        es: ["Comps que pelean agrupadas: Réquiem + Velo derriten a todo el equipo.", "Enemigos sin movilidad que no escapan de tu área."],
        en: ["Comps that fight grouped: Requiem + Defile melt the whole team.", "Immobile enemies who can't escape your AoE."],
      },
      bad: {
        es: ["Dive y asesinos que te matan antes de que canalices.", "Equipos que apilan mucha resistencia mágica."],
        en: ["Dive and assassins that kill you before you cast.", "Teams that stack heavy magic resist."],
      },
    },
    plan: {
      es: "Farmeá con la Q y buscá tus picos de ítems. En peleas, activá el Velo de Tormento y ametrallá con Q mientras caminás entre ellos. Usá Réquiem para francotirar a enemigos bajos por todo el mapa o para asegurar una pelea incluso después de morir. Morir en medio del combo no es el final: seguí lanzando hechizos.",
      en: "Farm with Q and hit your item spikes. In fights, turn on Defile and machine-gun Q while walking through them. Use Requiem to snipe low enemies across the map or to secure a fight even after you die. Dying mid-combo isn't the end: keep casting.",
    },
    tips: {
      es: ["Usá Réquiem para rematar a los que 'escaparon' de una pelea del otro lado del mapa.", "Comprá ítems que arreglen el maná temprano para poder spamear la Q."],
      en: ["Use Requiem to finish those who 'escaped' a fight from across the map.", "Buy items that fix mana early so you can spam Q."],
    },
  },

  "veigar-oneshot": {
    strengths: {
      es: [
        "Poder de habilidad SIN límite: cada last-hit y kill con Golpe Baleful (Q) te suma AP permanente para siempre.",
        "Horizonte de Eventos (E) es un aturdimiento y zona garantizados: control absoluto sobre un objetivo.",
        "La definitiva escala con el AP del enemigo: borra magos de un saque.",
        "One-shot a cualquier squishy una vez que apilaste.",
      ],
      en: [
        "UNCAPPED ability power: every last-hit and kill with Baleful Strike (Q) adds permanent AP forever.",
        "Event Horizon (E) is a guaranteed stun and zone: total lockdown on a target.",
        "The ult scales with the enemy's AP: it deletes mages instantly.",
        "One-shots any squishy once you've stacked.",
      ],
    },
    weaknesses: {
      es: [
        "Inmóvil y sin escape: la jaula es tu único autopeel.",
        "Débil y lento al principio, antes de apilar AP.",
        "Depende de skillshots: la W (Materia Oscura) es lenta y la Q tiene que pegar.",
        "Muy frágil.",
      ],
      en: [
        "Immobile and escapeless: the cage is your only self-peel.",
        "Weak and slow early, before stacking AP.",
        "Skillshot-dependent: the W (Dark Matter) is slow and the Q must land.",
        "Very fragile.",
      ],
    },
    combos: {
      es: ["Horizonte de Eventos (E) para aturdir → Materia Oscura (W) sobre el objetivo fijado → Golpe Baleful (Q) + DFG + Explosión Primordial (R) para el borrado."],
      en: ["Event Horizon (E) to stun → Dark Matter (W) on the locked target → Baleful Strike (Q) + DFG + Primordial Burst (R) for the delete."],
    },
    matchups: {
      good: {
        es: ["Squishies inmóviles atrapados por la jaula.", "Magos AP: tu ulti les pega más cuanto más AP tengan."],
        en: ["Immobile squishies caught by the cage.", "AP mages: your ult hits them harder the more AP they have."],
      },
      bad: {
        es: ["Asesinos móviles que esquivan la jaula y la W.", "Dive que te mata antes de que canalices el combo."],
        en: ["Mobile assassins who dodge the cage and W.", "Dive that kills you before you cast the combo."],
      },
    },
    plan: {
      es: "Farmeá con la Q sin parar para apilar AP (cada last-hit es poder permanente). Evitá pelear temprano. Una vez apilado, one-shoteás a cualquiera que caiga en tu jaula. Zhonya para sobrevivir el dive y volver a explotar.",
      en: "Farm with Q non-stop to stack AP (every last-hit is permanent power). Avoid fighting early. Once stacked, you one-shot anyone caught in your cage. Zhonya to survive the dive and burst again.",
    },
    tips: {
      es: ["Last-hiteá con la Q siempre que puedas: es AP permanente gratis.", "Colocá la jaula del lado LEJANO para que se aturdan solos al intentar salir."],
      en: ["Last-hit with Q whenever you can: it's free permanent AP.", "Place the cage on the FAR side so they stun themselves trying to walk out."],
    },
  },

  "blitzcrank-oneshot": {
    strengths: {
      es: [
        "Un agarre = una muerte: el Agarre de Cohete (Q) trae al carry enemigo a tu equipo y al combo completo.",
        "Con Lich Bane, el Puño de Energía (E) hace que el auto siguiente pegue enorme.",
        "El Escudo de Maná (pasiva) te da una segunda vida.",
        "Los picks ganan partidas: un buen gancho decide la pelea antes de empezar.",
      ],
      en: [
        "One grab = one kill: Rocket Grab (Q) drags the enemy carry into your team and the full combo.",
        "With Lich Bane, Power Fist (E) makes your next auto hit huge.",
        "Mana Barrier (passive) gives you a second life.",
        "Picks win games: a good hook decides the fight before it starts.",
      ],
    },
    weaknesses: {
      es: [
        "Depende 100% de acertar el gancho (skillshot): si fallás la Q, no hiciste nada.",
        "Sin el gancho, sos inmóvil y predecible.",
        "Frágil una vez que se te acaba el Escudo de Maná.",
        "Los equipos que respetan el hook se esconden detrás de los minions.",
      ],
      en: [
        "100% dependent on landing the hook (skillshot): if you miss Q, you did nothing.",
        "Without the hook, you're immobile and predictable.",
        "Fragile once your Mana Barrier is gone.",
        "Teams that respect the hook hide behind minions.",
      ],
    },
    combos: {
      es: ["Agarre de Cohete (Q) → Puño de Energía (E, con Lich Bane el auto pega enorme) → Campo Estático (R) para silenciar y dañar → DFG para borrar."],
      en: ["Rocket Grab (Q) → Power Fist (E, Lich Bane makes the auto huge) → Static Field (R) to silence and damage → DFG to delete."],
    },
    matchups: {
      good: {
        es: ["Squishies sin dash parados detrás de los minions.", "Enemigos con mal posicionamiento y poca conciencia de mapa."],
        en: ["Dashless squishies standing behind minions.", "Enemies with bad positioning and low map awareness."],
      },
      bad: {
        es: ["Frontlines tanques: agarrar al tanque es un gancho desperdiciado.", "Equipos que se esconden detrás de la oleada."],
        en: ["Tanky frontlines: grabbing the tank is a wasted hook.", "Teams that hide behind the minion wave."],
      },
    },
    plan: {
      es: "Jugá alrededor de la visión y elegí los ángulos. Cuando aciertes un gancho sobre el carry enemigo, el combo completo lo borra antes de que el equipo reaccione. Nunca abras agarrando a la frontline. El Escudo de Maná te deja sobrevivir a la respuesta.",
      en: "Play around vision and pick your angles. When you land a hook on the enemy carry, the full combo deletes them before the team reacts. Never open by grabbing the frontline. Mana Barrier lets you survive the response.",
    },
    tips: {
      es: ["Apuntá el gancho cuando están distraídos (farmeando, asediando una torre).", "Nunca inicies agarrando al tanque: esperá el ángulo al carry."],
      en: ["Aim the hook when they're distracted (CSing, sieging a tower).", "Never open by grabbing the tank: wait for the angle on the carry."],
    },
  },

  "katarina-oneshot": {
    strengths: {
      es: [
        "Máquina de reseteos: cada kill o asistencia resetea el Salto Umbral y el ulti, así que un combo puede encadenar toda una pelea.",
        "Burst enorme con DFG + Sablepistola sobre un squishy.",
        "El Salto Umbral (E) te da movilidad para entrar, reposicionarte y perseguir.",
        "Una buena pelea puede ser un pentakill.",
      ],
      en: [
        "Reset machine: every kill or assist resets Shunpo and the ult, so one combo can chain a whole fight.",
        "Huge burst with DFG + Gunblade on a squishy.",
        "Shunpo (E) gives mobility to enter, reposition and chase.",
        "A good fight can be a pentakill.",
      ],
    },
    weaknesses: {
      es: [
        "El CC puntual corta la canalización del ulti (Danza de las Cuchillas).",
        "Si el primer combo no mata, no hay reseteo y quedás expuesta.",
        "Frágil.",
        "Exhaust o Zhonya del enemigo apagan tu burst.",
      ],
      en: [
        "Point-and-click CC cuts the ult channel (Death Lotus).",
        "If the first combo doesn't kill, there's no reset and you're exposed.",
        "Fragile.",
        "Enemy Exhaust or Zhonya shut off your burst.",
      ],
    },
    combos: {
      es: ["Salto Umbral (E) sobre el objetivo → Cuchilla Rebotante (Q) → DFG + Sablepistola → canalizá Danza de las Cuchillas (R). Con la kill, E y R se resetean: saltá al siguiente."],
      en: ["Shunpo (E) onto the target → Bouncing Blade (Q) → DFG + Gunblade → channel Death Lotus (R). On the kill, E and R reset: jump to the next."],
    },
    matchups: {
      good: {
        es: ["Squishies agrupados: encadenás reseteos.", "Comps con poco CC."],
        en: ["Grouped squishies: you chain resets.", "Low-CC comps."],
      },
      bad: {
        es: ["CC duro (aturdimientos, silencios) que corta el ulti.", "Exhaust o Zhonya sobre tu objetivo."],
        en: ["Hard CC (stuns, silences) that cuts the ult.", "Exhaust or Zhonya on your target."],
      },
    },
    plan: {
      es: "Farmeá y esperá un pick o una pelea donde alguien quede bajo. Entrá con el Salto Umbral, explotá y snowballeá con los reseteos. Zhonya para canalizar el ulti a salvo. Nunca te tires a un equipo completo con el CC disponible.",
      en: "Farm and wait for a pick or a fight where someone's low. Enter with Shunpo, burst, and snowball with the resets. Zhonya to channel the ult safely. Never dive a full team with their CC available.",
    },
    tips: {
      es: ["Usá Zhonya en medio del ulti para seguir canalizando la Danza a salvo.", "Guardá tu entrada hasta que gasten el CC."],
      en: ["Use Zhonya mid-ult to keep channeling Death Lotus safely.", "Hold your entrance until they spend their CC."],
    },
  },

  "annie-oneshot": {
    strengths: {
      es: [
        "El one-shot más simple del juego: el aturdimiento de la pasiva hace que el combo Tibbers sea imposible de esquivar.",
        "Todo el combo es de ÁREA y con stun garantizado.",
        "Tibbers sigue pegando después del combo.",
        "La Q (Desintegrar) es point-and-click: no hay skillshot que fallar.",
      ],
      en: [
        "The simplest one-shot in the game: the passive stun makes the Tibbers combo impossible to dodge.",
        "The whole combo is AoE and with a guaranteed stun.",
        "Tibbers keeps hitting after the combo.",
        "The Q (Disintegrate) is point-and-click: no skillshot to miss.",
      ],
    },
    weaknesses: {
      es: [
        "Sin el stun cargado sos predecible y más débil.",
        "El combo es de rango corto: hay que acercarse.",
        "Frágil.",
        "Recargar el stun lleva 4 hechizos: hay una ventana de vulnerabilidad.",
      ],
      en: [
        "Without the stun charged you're predictable and weaker.",
        "The combo is short-range: you have to get close.",
        "Fragile.",
        "Recharging the stun takes 4 spells: there's a vulnerability window.",
      ],
    },
    combos: {
      es: ["(Con el stun listo) Invocar: Tibbers (R) encima → Incinerar (W) → DFG → Desintegrar (Q). Todo aturdido, todo en área."],
      en: ["(With the stun up) Summon: Tibbers (R) on top → Incinerate (W) → DFG → Disintegrate (Q). All stunned, all AoE."],
    },
    matchups: {
      good: {
        es: ["Squishies agrupados: stun de área + Tibbers.", "Objetivos inmóviles."],
        en: ["Grouped squishies: AoE stun + Tibbers.", "Immobile targets."],
      },
      bad: {
        es: ["Poke de rango largo que te mantiene lejos.", "Dive antes de que tengas el stun listo."],
        en: ["Long-range poke that keeps you away.", "Dive before you have the stun ready."],
      },
    },
    plan: {
      es: "Llevá la cuenta del stun de la pasiva (4 hechizos; la pantalla te avisa). Pokeá y farmea con la Q (devuelve maná al matar minions). A nivel 6 y con el stun listo, acercate y borrá a un squishy con el combo Tibbers. Después retrocedé hasta recargar el stun.",
      en: "Track the passive stun (4 spells; the screen tells you). Poke and farm with Q (refunds mana on last-hits). At level 6 with the stun ready, walk up and delete a squishy with the Tibbers combo. Then back off until the stun recharges.",
    },
    tips: {
      es: ["Cargá el stun ANTES de la pelea para abrir con un aturdimiento de área garantizado.", "Flash + Tibbers para un enganche sorpresa."],
      en: ["Charge the stun BEFORE the fight to open with a guaranteed AoE stun.", "Flash + Tibbers for a surprise engage."],
    },
  },

  "lux-lichbane": {
    strengths: {
      es: [
        "La Atadura de Luz (Q) enraíza hasta dos objetivos y prepara un combo garantizado.",
        "Con Lich Bane, cada auto después de un hechizo pega un pepinazo.",
        "La definitiva (Chispa Final) es un ejecutor de rango larguísimo.",
        "Poke seguro a distancia con la Singularidad Lúcida (E).",
      ],
      en: [
        "Light Binding (Q) roots up to two targets and sets up a guaranteed combo.",
        "With Lich Bane, each auto after a spell hits like a truck.",
        "The ult (Final Spark) is a very long-range executor.",
        "Safe ranged poke with Lucent Singularity (E).",
      ],
    },
    weaknesses: {
      es: [
        "Depende del skillshot: si la Q (raíz) no pega, el combo se cae.",
        "Frágil y sin dash ni escape.",
        "Predecible si el enemigo espera la Q.",
        "Vulnerable a los asesinos que saltan a tu línea de atrás.",
      ],
      en: [
        "Skillshot-dependent: if the Q (root) misses, the combo falls apart.",
        "Fragile with no dash or escape.",
        "Predictable if the enemy waits out the Q.",
        "Vulnerable to assassins jumping your backline.",
      ],
    },
    combos: {
      es: ["Atadura de Luz (Q) para enraizar → Singularidad Lúcida (E) → auto (Lich Bane) → Chispa Final (R). Usá la duración de la raíz para encadenar todo."],
      en: ["Light Binding (Q) to root → Lucent Singularity (E) → auto (Lich Bane) → Final Spark (R). Use the root's duration to chain everything."],
    },
    matchups: {
      good: {
        es: ["Objetivos inmóviles que enraizás.", "Enemigos agrupados (E + R en área)."],
        en: ["Immobile targets you root.", "Grouped enemies (E + R AoE)."],
      },
      bad: {
        es: ["Campeones móviles que esquivan la Q.", "Asesinos que se tiran a tu línea de atrás."],
        en: ["Mobile champions who dodge the Q.", "Assassins who dive your backline."],
      },
    },
    plan: {
      es: "Pokeá con la E y buscá raíces con la Q para el burst. En peleas, quedate a rango máximo, enraizá a un objetivo clave y borralo, después tirá la Chispa Final a través de la pelea. Posicioná con cuidado: no tenés escape.",
      en: "Poke with E and look for Q roots to burst. In fights, stay at max range, root a key target and delete them, then fire Final Spark across the fight. Position carefully: you have no escape.",
    },
    tips: {
      es: ["Intercalá un auto potenciado por Lich Bane entre hechizos para un pico de daño extra.", "Guardá la raíz de la Q para el asesino que te salte."],
      en: ["Weave a Lich Bane-empowered auto between spells for a burst of extra damage.", "Save the Q root for the assassin who dives you."],
    },
  },

  ahri: {
    strengths: {
      es: [
        "Encanto (E) asegura el all-in: si conecta, tu ADC tiene la kill garantizada.",
        "Con DFG + Orbe Engañoso hacés un burst de support que borra al carry enemigo.",
        "El Asalto Espiritual (R) te da tres dashes para posicionarte, esquivar y perseguir.",
        "Zoneo constante con Orbe y Fuego Feérico sin exponerte.",
      ],
      en: [
        "Charm (E) secures the all-in: if it lands, your ADC has a guaranteed kill.",
        "With DFG + Orb of Deception you do support burst that deletes the enemy carry.",
        "Spirit Rush (R) gives three dashes to position, dodge and chase.",
        "Constant zoning with Orb and Fox-Fire without exposing yourself.",
      ],
    },
    weaknesses: {
      es: [
        "Todo depende del Encanto (E), un skillshot: si fallás, tu enganche se cae.",
        "Frágil como support de poke: si te agarran, caés.",
        "Sin la R lista, tenés poca movilidad para escapar de un dive.",
      ],
      en: [
        "Everything hinges on Charm (E), a skillshot: if you miss, your engage falls apart.",
        "Fragile as a poke support: if you're caught, you fall.",
        "Without R up, you have little mobility to escape a dive.",
      ],
    },
    combos: {
      es: ["Encanto (E) para fijar al objetivo → Orbe Engañoso (Q) → Fuego Feérico (W) → DFG para rematar; usá la R para reposicionarte y encadenar."],
      en: ["Charm (E) to lock the target → Orb of Deception (Q) → Fox-Fire (W) → DFG to finish; use R to reposition and chain."],
    },
    matchups: {
      good: {
        es: ["Bot lanes inmóviles a las que fijás con el Encanto.", "Squishies sin escape que no sobreviven a tu combo + DFG."],
        en: ["Immobile bot lanes you lock with Charm.", "Escapeless squishies who don't survive your combo + DFG."],
      },
      bad: {
        es: ["Supports de enganche que te castigan antes de que aciertes el Encanto.", "Comps con mucha visión que ven venir tu poke."],
        en: ["Engage supports who punish you before you land Charm.", "High-vision comps that see your poke coming."],
      },
    },
    plan: {
      es: "En línea, pokeá con Orbe y zoneá con Fuego Feérico. Buscá el Encanto sobre el ADC o el support enemigo para abrir el all-in con tu carry. Guardá la R para reposicionarte en la pelea, esquivar el enganche o cerrar una kill. Cuidá tu fragilidad: no tires el Encanto de más.",
      en: "In lane, poke with Orb and zone with Fox-Fire. Look for Charm on the enemy ADC or support to open the all-in with your carry. Save R to reposition in the fight, dodge engage or close a kill. Mind your fragility: don't throw Charm away.",
    },
    tips: {
      es: ["No gastes el Encanto por gastar: es tu única herramienta de enganche.", "Guardá una carga de la R para escapar del dive, no uses las tres para entrar."],
      en: ["Don't waste Charm for the sake of it: it's your only engage tool.", "Keep one R charge to escape a dive, don't use all three to enter."],
    },
  },

  amumu: {
    strengths: {
      es: [
        "Maldición de la Tumba (R) es un aturdimiento de ÁREA para todo el equipo enemigo: inicia peleas ganadas.",
        "Con Liandry + Rylai + DFG, el combo quema y borra a varios a la vez.",
        "El Lanzamiento de Vendaje (Q) es enganche y movilidad: te pegás al objetivo.",
        "Rabieta (E) hace daño de área constante mientras estás en el medio.",
      ],
      en: [
        "Curse of the Sad Mummy (R) is an AoE stun on the whole enemy team: it starts won fights.",
        "With Liandry + Rylai + DFG, the combo burns and deletes several at once.",
        "Bandage Toss (Q) is both engage and mobility: you stick to the target.",
        "Tantrum (E) deals constant AoE damage while you're in the middle.",
      ],
    },
    weaknesses: {
      es: [
        "Depende de acertar el Vendaje (Q) para iniciar: si fallás, quedás lejos.",
        "Antes del ulti, tu impacto en pelea es bajo.",
        "AP Amumu es más frágil que la versión tanque.",
        "Predecible: todo gira en torno a llegar con la R.",
      ],
      en: [
        "Relies on landing Bandage Toss (Q) to engage: if you miss, you're left out.",
        "Before the ult, your fight impact is low.",
        "AP Amumu is more fragile than the tank version.",
        "Predictable: everything revolves around landing the R.",
      ],
    },
    combos: {
      es: ["Lanzamiento de Vendaje (Q) para engancharte → Maldición de la Tumba (R) para aturdir a todos → Rabieta (E) + Liandry + DFG mientras quema."],
      en: ["Bandage Toss (Q) to engage → Curse of the Sad Mummy (R) to stun everyone → Tantrum (E) + Liandry + DFG while it burns."],
    },
    matchups: {
      good: {
        es: ["Comps agrupadas: tu R aturde a todo el equipo de una.", "Enemigos inmóviles a los que alcanzás con el Vendaje."],
        en: ["Grouped comps: your R stuns the whole team at once.", "Immobile enemies you reach with Bandage Toss."],
      },
      bad: {
        es: ["Equipos dispersos donde la R agarra a uno solo.", "Poke a rango que te baja antes de que llegues."],
        en: ["Spread-out teams where the R catches only one.", "Ranged poke that lowers you before you arrive."],
      },
    },
    plan: {
      es: "Farmeá y esperá tu pico con el ulti. En teamfights, buscá el ángulo para que el Vendaje + R agarren a la mayor cantidad posible; ahí es cuando explotás la pelea con el quemado de Liandry y el DFG. Nunca inicies con la Q si no tenés la R lista.",
      en: "Farm and wait for your ult spike. In teamfights, find the angle so Bandage Toss + R catch as many as possible; that's when you blow the fight open with Liandry burn and DFG. Never engage with Q unless R is ready.",
    },
    tips: {
      es: ["Guardá el Vendaje como iniciación, no como escape.", "Buscá que la R agarre al menos a dos: contra un solo objetivo, mejor esperá."],
      en: ["Save Bandage Toss as engage, not as escape.", "Aim for the R to catch at least two: against a single target, better to wait."],
    },
  },

  anivia: {
    strengths: {
      es: [
        "El Muro de Hielo (W) parte peleas en dos y protege a tu ADC o corta escapes.",
        "Escarcha Fugaz (Q) + Congelación (E) es un combo de aturdimiento y burst muy fiable.",
        "El Huevo (pasiva) te vuelve casi inmortal en línea: renacés si te matan.",
        "Tormenta de Escarcha (R) da zoneo y daño de área sostenido.",
      ],
      en: [
        "Glacial Storm... Ice Wall (W) splits fights in two and protects your ADC or cuts off escapes.",
        "Flash Frost (Q) + Frostbite (E) is a very reliable stun-and-burst combo.",
        "The Egg (passive) makes you nearly immortal in lane: you rebirth if killed.",
        "Glacial Storm (R) provides zoning and sustained AoE damage.",
      ],
    },
    weaknesses: {
      es: [
        "Lenta y sin movilidad: te cazan si te pillan fuera de posición.",
        "Depende de acertar la Q lenta para el stun.",
        "Muy hambrienta de maná al principio.",
        "Si te fuerzan el Huevo y no renacés a tiempo, quedás vendida.",
      ],
      en: [
        "Slow and immobile: you get caught if pulled out of position.",
        "Relies on landing the slow Q for the stun.",
        "Very mana-hungry early.",
        "If they force your Egg and you don't rebirth in time, you're done.",
      ],
    },
    combos: {
      es: ["Escarcha Fugaz (Q) para aturdir → Congelación (E) para detonar el burst → Muro de Hielo (W) para atrapar → Tormenta (R) encima para el área."],
      en: ["Flash Frost (Q) to stun → Frostbite (E) to detonate the burst → Ice Wall (W) to trap → Glacial Storm (R) on top for the AoE."],
    },
    matchups: {
      good: {
        es: ["Comps de enganche a las que frenás con el Muro.", "Objetivos inmóviles que no esquivan tu Q."],
        en: ["Engage comps you stop with the Wall.", "Immobile targets who can't dodge your Q."],
      },
      bad: {
        es: ["Campeones móviles que esquivan la Q lenta.", "Asesinos que te fuerzan el Huevo y te rematan."],
        en: ["Mobile champions who dodge the slow Q.", "Assassins who force your Egg and finish you."],
      },
    },
    plan: {
      es: "Como support, protegé al ADC con el Muro y buscá stuns con la Q. En peleas, usá el Muro para partir al equipo enemigo o encerrar a un objetivo, y la Tormenta para zonear. Posicioná con cuidado: sos lenta, pero el Huevo te da margen para errores.",
      en: "As support, protect the ADC with the Wall and look for stuns with the Q. In fights, use the Wall to split the enemy team or trap a target, and Glacial Storm to zone. Position carefully: you're slow, but the Egg gives you room for mistakes.",
    },
    tips: {
      es: ["Usá el Muro para separar al enganche del resto de su equipo.", "Detoná siempre la Congelación (E) sobre un objetivo con la Q o la Tormenta encima."],
      en: ["Use the Wall to separate the engager from the rest of their team.", "Always detonate Frostbite (E) on a target already hit by Q or the Storm."],
    },
  },

  annie: {
    strengths: {
      es: [
        "El aturdimiento de la pasiva hace que el enganche de Tibbers sea imposible de esquivar.",
        "Con DFG + Tibbers asegurás la kill del ADC enemigo en cada all-in de bot.",
        "Point-and-click: la Q y el stun no fallan.",
        "Tibbers sigue peleando y zoneando después del combo.",
      ],
      en: [
        "The passive stun makes the Tibbers engage impossible to dodge.",
        "With DFG + Tibbers you secure the enemy ADC's death on every bot all-in.",
        "Point-and-click: the Q and stun don't miss.",
        "Tibbers keeps fighting and zoning after the combo.",
      ],
    },
    weaknesses: {
      es: [
        "Rango corto: tenés que acercarte para el combo, exponiéndote.",
        "Sin el stun cargado, tu enganche es predecible y débil.",
        "Frágil como support.",
        "Recargar el stun deja una ventana de vulnerabilidad.",
      ],
      en: [
        "Short range: you have to get close for the combo, exposing yourself.",
        "Without the stun charged, your engage is predictable and weak.",
        "Fragile as a support.",
        "Recharging the stun leaves a vulnerability window.",
      ],
    },
    combos: {
      es: ["(Con el stun listo) Flash + Invocar: Tibbers (R) para aturdir al ADC → Incinerar (W) → DFG → Desintegrar (Q) para rematar."],
      en: ["(With the stun up) Flash + Summon: Tibbers (R) to stun the ADC → Incinerate (W) → DFG → Disintegrate (Q) to finish."],
    },
    matchups: {
      good: {
        es: ["Bot lanes escuálidas sin escape.", "Duos agrupados: el stun de Tibbers agarra a los dos."],
        en: ["Squishy bot lanes with no escape.", "Grouped duos: the Tibbers stun catches both."],
      },
      bad: {
        es: ["Supports de rango que te pokean antes de que llegues.", "Enemigos con dash que salen del rango del combo."],
        en: ["Ranged supports who poke you before you arrive.", "Enemies with dashes who leave the combo's range."],
      },
    },
    plan: {
      es: "Cargá el stun con 4 hechizos antes de buscar el all-in. Con el stun listo, Flash + Tibbers sobre el ADC enemigo suele ser una kill asegurada para tu carry. Entre stuns, quedate detrás y pokeá suave con la Q. No te expongas sin el aturdimiento cargado.",
      en: "Charge the stun with 4 spells before going for the all-in. With the stun up, Flash + Tibbers on the enemy ADC is usually a guaranteed kill for your carry. Between stuns, stay back and poke lightly with Q. Don't expose yourself without the stun charged.",
    },
    tips: {
      es: ["Llevá siempre la cuenta de la pasiva: abrí solo con el stun listo.", "Flash + Tibbers es tu enganche sorpresa más fuerte."],
      en: ["Always track the passive: only open with the stun ready.", "Flash + Tibbers is your strongest surprise engage."],
    },
  },

  ashe: {
    strengths: {
      es: [
        "La Flecha Encantada (R) es un aturdimiento global que abre peleas desde la niebla.",
        "Halcón (E) da visión gratis: controlás objetivos y evitás emboscadas.",
        "El slow permanente de tus autos y la Andanada frenan a todo el equipo.",
        "Poke seguro a distancia con Disparo Certero.",
      ],
      en: [
        "Enchanted Crystal Arrow (R) is a global stun that opens fights from the fog.",
        "Hawkshot (E) grants free vision: you control objectives and avoid ambushes.",
        "The permaslow on your autos and Volley slow the whole team.",
        "Safe ranged poke with Frost Shot.",
      ],
    },
    weaknesses: {
      es: [
        "Daño de support bajo: aportás utilidad, no burst.",
        "Sin movilidad: dependés del posicionamiento y la visión.",
        "La Flecha es un skillshot largo: fácil de fallar a distancia.",
        "Frágil si te alcanzan.",
      ],
      en: [
        "Low support damage: you bring utility, not burst.",
        "No mobility: you rely on positioning and vision.",
        "The Arrow is a long skillshot: easy to miss at range.",
        "Fragile if reached.",
      ],
    },
    combos: {
      es: ["Halcón (E) para revelar → Flecha Encantada (R) desde la niebla para aturdir → Andanada (W) + autos con slow para encadenar el enganche de tu equipo."],
      en: ["Hawkshot (E) to reveal → Enchanted Crystal Arrow (R) from the fog to stun → Volley (W) + slowing autos to chain your team's engage."],
    },
    matchups: {
      good: {
        es: ["Comps sin iniciación: tu Flecha abre las peleas por ellos.", "Enemigos que dependen de agruparse (los frenás a todos)."],
        en: ["Comps without engage: your Arrow opens fights for them.", "Enemies who rely on grouping (you slow them all)."],
      },
      bad: {
        es: ["Dive sobre tu posición: no tenés escape.", "Campeones móviles que esquivan la Flecha larga."],
        en: ["Dive onto your position: you have no escape.", "Mobile champions who dodge the long Arrow."],
      },
    },
    plan: {
      es: "Jugá de support utilitario: colocá visión con el Halcón, pokeá con Disparo Certero y guardá la Flecha para abrir una pelea o cazar a alguien fuera de posición desde la niebla. El slow constante hace de peel para tu ADC. Posicioná siempre detrás.",
      en: "Play as a utility support: place vision with Hawkshot, poke with Frost Shot, and save the Arrow to open a fight or catch someone out of position from the fog. The constant slow acts as peel for your ADC. Always position at the back.",
    },
    tips: {
      es: ["Tirá la Flecha desde la niebla para que no la vean venir.", "Usá el Halcón antes de objetivos (Dragón/Barón) para tener visión gratis."],
      en: ["Fire the Arrow from the fog so they don't see it coming.", "Use Hawkshot before objectives (Dragon/Baron) for free vision."],
    },
  },

  blitzcrank: {
    strengths: {
      es: [
        "El combo Agarre + Puño + Campo Estático con AP hace un burst brutal, no solo CC.",
        "El Escudo de Maná (pasiva) te vuelve un cíborg terco, difícil de rematar.",
        "El Agarre (Q) sigue siendo un pick que decide peleas.",
        "El Campo Estático (R) silencia, ideal contra combos enemigos.",
      ],
      en: [
        "The Grab + Fist + Static Field combo with AP does brutal burst, not just CC.",
        "Mana Barrier (passive) makes you a stubborn cyborg, hard to finish off.",
        "The Grab (Q) is still a pick that decides fights.",
        "Static Field (R) silences, great against enemy combos.",
      ],
    },
    weaknesses: {
      es: [
        "Depende del Agarre (Q): si fallás el skillshot, no hacés nada.",
        "Sin el gancho, sos inmóvil y predecible.",
        "Frágil una vez que cae el Escudo de Maná.",
        "AP Mid es una sorpresa, pero contra un mago de rango sufrís en línea.",
      ],
      en: [
        "Depends on the Grab (Q): if you miss the skillshot, you do nothing.",
        "Without the hook, you're immobile and predictable.",
        "Fragile once Mana Barrier drops.",
        "AP Mid is a surprise, but you struggle in lane vs a ranged mage.",
      ],
    },
    combos: {
      es: ["Agarre de Cohete (Q) → Puño de Energía (E) → Campo Estático (R) → DFG para borrar al objetivo antes de que reaccione."],
      en: ["Rocket Grab (Q) → Power Fist (E) → Static Field (R) → DFG to delete the target before they react."],
    },
    matchups: {
      good: {
        es: ["Magos inmóviles que no escapan del combo.", "Squishies fuera de posición: un agarre es una muerte."],
        en: ["Immobile mages who can't escape the combo.", "Out-of-position squishies: one grab is a kill."],
      },
      bad: {
        es: ["Magos de rango que te pokean en línea.", "Enemigos que se esconden detrás de los minions."],
        en: ["Ranged mages who poke you in lane.", "Enemies who hide behind minions."],
      },
    },
    plan: {
      es: "En línea, farmeá y buscá ángulos de agarre. En roams y peleas, un gancho sobre el carry enemigo + el combo AP lo borra. El Campo Estático silencia combos clave. El Escudo de Maná te deja aguantar la respuesta y seguir peleando.",
      en: "In lane, farm and look for grab angles. On roams and in fights, a hook on the enemy carry + the AP combo deletes them. Static Field silences key combos. Mana Barrier lets you tank the response and keep fighting.",
    },
    tips: {
      es: ["Apuntá el gancho cuando el enemigo está distraído farmeando.", "Guardá el Campo Estático para silenciar el combo del mago rival."],
      en: ["Aim the hook when the enemy is distracted farming.", "Save Static Field to silence the enemy mage's combo."],
    },
  },

  brand: {
    strengths: {
      es: [
        "La pasiva de quemadura limpia campamentos rapidísimo: farmeo de jungla veloz.",
        "Ganks mortales: Pilar de Llamas (W) sobre un objetivo aturdido pega un burst enorme.",
        "Daño de área demencial en teamfights agrupados con Piroclasmo (R) rebotando.",
        "Escala a una bomba de daño mágico sostenido y explosivo.",
      ],
      en: [
        "The burn passive clears camps super fast: quick jungle farming.",
        "Deadly ganks: Pillar of Flame (W) on a stunned target does huge burst.",
        "Insane AoE damage in grouped teamfights with Pyroclasm (R) bouncing.",
        "Scales into a sustained and explosive magic-damage bomb.",
      ],
    },
    weaknesses: {
      es: [
        "Sin escape ni movilidad: los asesinos te cazan.",
        "Depende de encadenar hechizos para aprovechar la pasiva.",
        "Frágil: si te caen encima, caés rápido.",
        "Early jungla más lento a nivel de clear seguro que otros.",
      ],
      en: [
        "No escape or mobility: assassins hunt you down.",
        "Relies on chaining spells to leverage the passive.",
        "Fragile: if they collapse on you, you fall fast.",
        "Slower safe early jungle clear than some others.",
      ],
    },
    combos: {
      es: ["Gank: Conflagración (E) o Latigazo (Q) para aplicar quemado → Pilar de Llamas (W) para el burst sobre el objetivo marcado → Piroclasmo (R) si hay varios."],
      en: ["Gank: Conflagration (E) or Sear (Q) to apply the burn → Pillar of Flame (W) for burst on the marked target → Pyroclasm (R) if there are several."],
    },
    matchups: {
      good: {
        es: ["Comps agrupadas: Piroclasmo rebota sin parar entre ellos.", "Objetivos inmóviles a los que fijás con el combo."],
        en: ["Grouped comps: Pyroclasm bounces endlessly between them.", "Immobile targets you lock down with the combo."],
      },
      bad: {
        es: ["Enemigos dispersos donde el ulti no rebota bien.", "Dive rápido que te mata antes de canalizar."],
        en: ["Spread enemies where the ult doesn't bounce well.", "Fast dive that kills you before you cast."],
      },
    },
    plan: {
      es: "Farmeá rápido abusando de la pasiva y buscá ganks tempranos: tu combo con stun castiga fuerte. En mid-late, quedate detrás y desatá tu daño de área en peleas agrupadas; el Piroclasmo entre varios enemigos es demoledor. Cuidá tu posición porque no tenés escape.",
      en: "Farm fast abusing the passive and look for early ganks: your combo with a stun punishes hard. Mid-late, stay back and unleash your AoE in grouped fights; Pyroclasm among several enemies is devastating. Watch your position since you have no escape.",
    },
    tips: {
      es: ["Aplicá el quemado antes del Pilar de Llamas: pega mucho más sobre objetivos ya prendidos.", "Guardá el Piroclasmo para cuando el equipo enemigo esté agrupado."],
      en: ["Apply the burn before Pillar of Flame: it hits much harder on already-ignited targets.", "Save Pyroclasm for when the enemy team is grouped."],
    },
  },

  chogath: {
    strengths: {
      es: [
        "Festín (R) sigue siendo una ejecución real: mata de golpe y te deja gigante con vida enorme.",
        "Ruptura (Q) + Grito Vorpal (W) con AP borran oleadas y hacen un buen burst con CC.",
        "Combinás daño mágico con una barra de vida absurda: pegás fuerte y aguantás.",
        "El knock-up y el silencio dan control fiable en pelea.",
      ],
      en: [
        "Feast (R) is still a true execute: it one-shots and leaves you giant with huge HP.",
        "Rupture (Q) + Vorpal Spikes (W) with AP clear waves and do solid burst with CC.",
        "You mix magic damage with an absurd health bar: you hit hard and tank.",
        "The knock-up and silence give reliable fight control.",
      ],
    },
    weaknesses: {
      es: [
        "Lento y sin dash: los campeones de kiteo te sufren poco.",
        "La Ruptura (Q) es lenta y telegrafiada: fácil de esquivar.",
        "Si te niegan las pilas de Festín, tu vida se estanca.",
        "Depende de acercarse para el daño AP completo.",
      ],
      en: [
        "Slow with no dash: kiting champions barely fear you.",
        "Rupture (Q) is slow and telegraphed: easy to dodge.",
        "If they deny your Feast stacks, your HP stalls.",
        "Relies on closing distance for full AP damage.",
      ],
    },
    combos: {
      es: ["Ruptura (Q) para derribar → Grito Vorpal (W) para silenciar y dañar → DFG → Festín (R) para ejecutar al objetivo bajo."],
      en: ["Rupture (Q) to knock up → Vorpal Spikes... Feral Scream (W) to silence and damage → DFG → Feast (R) to execute the low target."],
    },
    matchups: {
      good: {
        es: ["Squishies a los que ejecutás con Festín sin importar tu daño.", "Magos inmóviles que no esquivan la Q."],
        en: ["Squishies you execute with Feast regardless of your damage.", "Immobile mages who can't dodge the Q."],
      },
      bad: {
        es: ["Kiteo puro que te desgasta sin dejarte llegar.", "Comps que te niegan las pilas de vida temprano."],
        en: ["Pure kiting that wears you down without letting you close.", "Comps that deny your HP stacks early."],
      },
    },
    plan: {
      es: "Farmeá con Ruptura y Grito para apilar Festín y crecer en vida. En peleas, buscá el derribo sobre un objetivo clave, silenciá al mago rival y usá Festín para ejecutar a quien quede bajo. Sos un mago-tanque: podés iniciar y aguantar mientras hacés daño de área.",
      en: "Farm with Rupture and Feral Scream to stack Feast and grow your HP. In fights, land the knock-up on a key target, silence the enemy mage and use Feast to execute whoever's low. You're a mage-tank: you can engage and tank while dealing AoE damage.",
    },
    tips: {
      es: ["Guardá Festín para ejecutar, no lo tires por daño en un objetivo con vida alta.", "Apuntá la Ruptura donde el enemigo VA a estar, no donde está."],
      en: ["Save Feast to execute, don't throw it for damage on a high-HP target.", "Aim Rupture where the enemy WILL be, not where they are."],
    },
  },

  drmundo: {
    strengths: {
      es: [
        "El Cuchillo Infectado (Q) escala con AP y hace un poke absurdo a distancia.",
        "Rylai + Liandry te vuelven un imposible de matar que quema a todo el que se acerca.",
        "Sádico (R) te cura una barbaridad: aguantás peleas eternas.",
        "Masoquismo (E) potencia tu daño cuanto más te pegan.",
      ],
      en: [
        "Infected Cleaver (Q) scales with AP and does absurd ranged poke.",
        "Rylai + Liandry make you an unkillable menace that burns everyone nearby.",
        "Sadism (R) heals you a ton: you outlast eternal fights.",
        "Masochism (E) boosts your damage the more you get hit.",
      ],
    },
    weaknesses: {
      es: [
        "El Cuchillo es un skillshot: si fallás, perdés tu poke y algo de vida.",
        "Poca movilidad y sin dash: te kitean.",
        "El daño real depende de encadenar el quemado; no es burst instantáneo.",
        "El corte de curación (Grievous Wounds) apaga tu ulti.",
      ],
      en: [
        "The Cleaver is a skillshot: if you miss, you lose your poke and some HP.",
        "Low mobility and no dash: you get kited.",
        "Real damage relies on chaining the burn; it's not instant burst.",
        "Healing cut (Grievous Wounds) shuts off your ult.",
      ],
    },
    combos: {
      es: ["Cuchilla Infectada (Q) para el poke y el slow → Masoquismo (E) al entrar → Agonía Ardiente (W) + Rylai/Liandry para quemar → Sádico (R) para sostener la pelea."],
      en: ["Infected Cleaver (Q) for poke and slow → Masochism (E) as you enter → Burning Agony (W) + Rylai/Liandry to burn → Sadism (R) to sustain the fight."],
    },
    matchups: {
      good: {
        es: ["Comps sin corte de curación: sos imposible de matar.", "Peleas prolongadas donde tu quemado y curación deciden."],
        en: ["Comps without healing cut: you're unkillable.", "Prolonged fights where your burn and healing decide."],
      },
      bad: {
        es: ["Ítems/hechizos con Grievous Wounds que apagan el Sádico.", "Kiteo a rango que te desgasta sin acercarse."],
        en: ["Items/spells with Grievous Wounds that shut off Sadism.", "Ranged kiting that wears you down without closing."],
      },
    },
    plan: {
      es: "En línea, pokeá sin parar con el Cuchillo aunque te cueste vida — el Sádico te la devuelve. En peleas, metete en el medio con Agonía Ardiente activa: entre Rylai, Liandry y Masoquismo quemás a todos mientras sos casi inmortal. Cuidado con el corte de curación enemigo.",
      en: "In lane, poke non-stop with the Cleaver even if it costs HP — Sadism gives it back. In fights, dive into the middle with Burning Agony active: between Rylai, Liandry and Masochism you burn everyone while being nearly immortal. Watch out for enemy healing cut.",
    },
    tips: {
      es: ["No tengas miedo de gastar vida en el Cuchillo: el Sádico la recupera.", "Activá el Sádico ANTES de quedar bajo, no cuando ya estás en rojo."],
      en: ["Don't be afraid to spend HP on the Cleaver: Sadism recovers it.", "Activate Sadism BEFORE you get low, not when you're already in the red."],
    },
  },

  evelynn: {
    strengths: {
      es: [
        "Sale del sigilo (Sigilo Oscuro) con un DPS on-hit brutal gracias a Trinity + Blade: nadie la ve venir.",
        "En vez de un burst y morir, hace daño sostenido que derrite hasta tanques.",
        "El sigilo le da picks y ganks difíciles de anticipar.",
        "Embestida (E) da movilidad y un golpe potenciado para pegarse al objetivo.",
      ],
      en: [
        "Comes out of stealth (Shadow Walk) with brutal on-hit DPS thanks to Trinity + Blade: nobody sees it coming.",
        "Instead of one burst and dying, she deals sustained damage that melts even tanks.",
        "Stealth gives her hard-to-predict picks and ganks.",
        "Ravage (E) grants mobility and an empowered hit to stick to the target.",
      ],
    },
    weaknesses: {
      es: [
        "Frágil: si te fijan y frenan, tu DPS on-hit no sirve de nada.",
        "El sigilo se revela con guardianes de control: te apagan los picks.",
        "Early jungla flojo hasta tener ítems.",
        "Necesita tiempo pegando: el CC duro la arruina.",
      ],
      en: [
        "Fragile: if they lock and kite you, your on-hit DPS is useless.",
        "Stealth is revealed by control wards: they shut off your picks.",
        "Weak early jungle until items.",
        "Needs time hitting: hard CC ruins her.",
      ],
    },
    combos: {
      es: ["Acercate en sigilo → Embestida (E) potenciada para pegarte → Púa de Odio (Q) → autoataques on-hit con Trinity + Blade para el DPS sostenido."],
      en: ["Approach in stealth → empowered Ravage (E) to stick → Hate Spike (Q) → on-hit autos with Trinity + Blade for sustained DPS."],
    },
    matchups: {
      good: {
        es: ["Squishies aislados sin visión: presa fácil del sigilo.", "Comps sin control de masas para frenar tu DPS."],
        en: ["Isolated squishies without vision: easy stealth prey.", "Comps without crowd control to stop your DPS."],
      },
      bad: {
        es: ["Equipos que compran guardianes de control: revelan tu sigilo.", "CC duro que te frena mientras te pegan."],
        en: ["Teams that buy control wards: they reveal your stealth.", "Hard CC that locks you while they hit you."],
      },
    },
    plan: {
      es: "Farmeá y cacheá ganks con el sigilo para snowballear. En vez de buscar un burst y salir, pegate al objetivo con Embestida y hacé DPS sostenido on-hit hasta derretirlo. Elegí peleas donde no tengan CC ni visión de control; si compran pinks, jugá más por objetivos.",
      en: "Farm and cheese ganks with stealth to snowball. Instead of one burst and out, stick to the target with Ravage and deal sustained on-hit DPS until they melt. Pick fights where they lack CC and control vision; if they buy control wards, play more for objectives.",
    },
    tips: {
      es: ["Entrá siempre desde un ángulo sin visión para aprovechar el sigilo.", "Contra CC duro, esperá a que lo gasten antes de comprometerte."],
      en: ["Always enter from an angle without vision to leverage stealth.", "Against hard CC, wait for them to spend it before committing."],
    },
  },

  ezreal: {
    strengths: {
      es: [
        "Disparo Místico (Q) con Lich Bane e Iceborn pega como camión y aplica slow en cada tiro.",
        "Cambio Arcano (E) te da un blink para reposicionarte, esquivar y perseguir.",
        "El ulti (Ráfaga Trascendente) hace poke global y remata desde cualquier parte del mapa.",
        "Movilidad y poke seguro: molestás sin exponerte casi nada.",
      ],
      en: [
        "Mystic Shot (Q) with Lich Bane and Iceborn hits like a truck and slows on every shot.",
        "Arcane Shift (E) gives a blink to reposition, dodge and chase.",
        "The ult (Trueshot Barrage) does global poke and finishes from anywhere on the map.",
        "Mobility and safe poke: you harass with almost no exposure.",
      ],
    },
    weaknesses: {
      es: [
        "Depende de acertar la Q: es tu daño, tu slow y tu reset de Lich Bane.",
        "Frágil: si te caen encima, tenés un solo escape.",
        "Menos burst explosivo que un mago puro; ganás desgastando.",
        "Sin la Q lista, tu presión baja mucho.",
      ],
      en: [
        "Relies on landing the Q: it's your damage, your slow and your Lich Bane reset.",
        "Fragile: if they collapse on you, you have a single escape.",
        "Less explosive burst than a pure mage; you win by chipping.",
        "Without Q up, your pressure drops a lot.",
      ],
    },
    combos: {
      es: ["Cambio Arcano (E) para posicionarte → auto potenciado por Lich Bane → Disparo Místico (Q) para el burst y el slow; Ráfaga Trascendente (R) para rematar."],
      en: ["Arcane Shift (E) to position → Lich Bane-empowered auto → Mystic Shot (Q) for burst and slow; Trueshot Barrage (R) to finish."],
    },
    matchups: {
      good: {
        es: ["Magos inmóviles a los que pokeás desde rango seguro.", "Objetivos sin dash que no esquivan tu Q + slow."],
        en: ["Immobile mages you poke from safe range.", "Dashless targets who can't dodge your Q + slow."],
      },
      bad: {
        es: ["Asesinos que te alcanzan pese al blink (Zed, Kha'Zix).", "Campeones muy móviles que esquivan tus skillshots."],
        en: ["Assassins who reach you despite the blink (Zed, Kha'Zix).", "Highly mobile champions who dodge your skillshots."],
      },
    },
    plan: {
      es: "En línea, pokeá con la Q y bajá cooldowns con la pasiva; cada Q intercalada con un auto de Lich Bane pega enorme. En peleas, quedate a media distancia, reposicioná con la E y usá el ulti para rematar o pushear olas de lejos. No gastes la E de pánico: es tu única salida.",
      en: "In lane, poke with Q and cut cooldowns via the passive; each Q woven with a Lich Bane auto hits huge. In fights, stay mid-range, reposition with E and use the ult to finish or push waves from afar. Don't panic-use E: it's your only way out.",
    },
    tips: {
      es: ["Intercalá un auto (Lich Bane) entre cada Q para un pico de daño extra.", "Aprendete el rango global del ulti: cerrás kills desde otra parte del mapa."],
      en: ["Weave an auto (Lich Bane) between each Q for a burst of extra damage.", "Learn the ult's global range: you can close kills from across the map."],
    },
  },

  fiddlesticks: {
    strengths: {
      es: [
        "Terror (Q) bloquea por completo al ADC enemigo en el all-in: no puede reaccionar.",
        "Drenar (W) te cura muchísimo en línea, así que sos un support imposible de echar.",
        "El Cuervódromo (R) con Flash es un teamfight ganado: aparece encima y hace daño de área brutal.",
        "Viento Oscuro (E) silencia y rebota, cortando combos enemigos.",
      ],
      en: [
        "Terrify (Q) fully locks the enemy ADC in the all-in: they can't react.",
        "Drain (W) heals you a ton in lane, making you a support impossible to push out.",
        "Crowstorm (R) with Flash is a won teamfight: it appears on top and does brutal AoE.",
        "Dark Wind (E) silences and bounces, cutting enemy combos.",
      ],
    },
    weaknesses: {
      es: [
        "El Cuervódromo tiene canalización: si te interrumpen antes de aparecer, perdés el ulti.",
        "Sin la R lista, tu impacto en pelea baja mucho.",
        "Frágil: dependés del miedo y del posicionamiento.",
        "El Terror es de rango corto: hay que acercarse.",
      ],
      en: [
        "Crowstorm has a channel: if interrupted before you appear, you lose the ult.",
        "Without R up, your fight impact drops a lot.",
        "Fragile: you rely on fear and positioning.",
        "Terrify is short-range: you have to get close.",
      ],
    },
    combos: {
      es: ["All-in: Terror (Q) sobre el ADC enemigo → Drenar (W) mientras tu carry pega → Viento Oscuro (E) para silenciar; en teamfight, Flash + Cuervódromo (R) desde la niebla."],
      en: ["All-in: Terrify (Q) on the enemy ADC → Drain (W) while your carry hits → Dark Wind (E) to silence; in teamfight, Flash + Crowstorm (R) from the fog."],
    },
    matchups: {
      good: {
        es: ["Bot lanes inmóviles a las que fijás con el miedo.", "Comps agrupadas: el Cuervódromo pega a todo el equipo."],
        en: ["Immobile bot lanes you lock with fear.", "Grouped comps: Crowstorm hits the whole team."],
      },
      bad: {
        es: ["CC de rango que interrumpe tu ulti antes de aparecer.", "Supports de poke que te desgastan a distancia."],
        en: ["Ranged CC that interrupts your ult before you appear.", "Poke supports who wear you down at range."],
      },
    },
    plan: {
      es: "En línea, usá Drenar para sostenerte y el Terror para asegurar los all-in de tu ADC. Guardá el Cuervódromo para una entrada con Flash desde la niebla sobre el equipo agrupado — bien usado, gana la pelea solo. Cuidá que no te interrumpan la canalización.",
      en: "In lane, use Drain to sustain and Terrify to secure your ADC's all-ins. Save Crowstorm for a Flash entry from the fog onto the grouped team — used well, it wins the fight on its own. Make sure they can't interrupt the channel.",
    },
    tips: {
      es: ["Combiná Flash + Cuervódromo para que no vean venir el ulti.", "Guardá el Terror para el objetivo más peligroso del all-in, no lo malgastes."],
      en: ["Combine Flash + Crowstorm so they don't see the ult coming.", "Save Terrify for the most dangerous target in the all-in, don't waste it."],
    },
  },

  gragas: {
    strengths: {
      es: [
        "Golpe de Cuerpo (E) es un engage con aturdimiento que inicia peleas.",
        "El Toque de Barril (R) reposiciona a los enemigos: los tirás hacia tu equipo o los sacás de una pelea.",
        "El Barril Explosivo (Q) da poke, peel y control de zona.",
        "Furia Etílica (W) le suma aguante y daño para pelear en el medio.",
      ],
      en: [
        "Body Slam (E) is a stun engage that starts fights.",
        "Explosive Cask (R) repositions enemies: knock them toward your team or out of a fight.",
        "Barrel Roll (Q) provides poke, peel and zone control.",
        "Drunken Rage (W) adds durability and damage to brawl in the middle.",
      ],
    },
    weaknesses: {
      es: [
        "El Golpe de Cuerpo (E) es la única movilidad: si la usás mal, quedás atrapado.",
        "El ulti mal apuntado puede ALEJAR a los enemigos de tu equipo.",
        "Depende de acertar el timing del engage.",
        "Como support AP-tank híbrido, no hace burst puro.",
      ],
      en: [
        "Body Slam (E) is your only mobility: misuse it and you're stuck.",
        "A mis-aimed ult can push enemies AWAY from your team.",
        "Relies on landing the engage timing.",
        "As a hybrid AP-tank support, it doesn't do pure burst.",
      ],
    },
    combos: {
      es: ["Engage: Golpe de Cuerpo (E) para aturdir → Barril Explosivo (Q) → Toque de Barril (R) para empujar al objetivo hacia tu equipo."],
      en: ["Engage: Body Slam (E) to stun → Barrel Roll (Q) → Explosive Cask (R) to knock the target toward your team."],
    },
    matchups: {
      good: {
        es: ["Bot lanes que puedas fijar con el engage + peel.", "Comps donde reposicionar a un enemigo clave con la R gana la pelea."],
        en: ["Bot lanes you can lock with engage + peel.", "Comps where repositioning a key enemy with R wins the fight."],
      },
      bad: {
        es: ["Enganche enemigo más rápido que te castiga al entrar.", "Peleas caóticas donde el ulti separa mal."],
        en: ["Faster enemy engage that punishes you as you enter.", "Chaotic fights where the ult splits poorly."],
      },
    },
    plan: {
      es: "Pokeá con el Barril y buscá engages con el Golpe de Cuerpo cuando tu ADC pueda seguirte. El ulti es tu herramienta estrella: usalo para tirar al carry enemigo hacia tu equipo o para sacar a un aliado de un mal lugar. Ojo con no empujar a los enemigos lejos por error.",
      en: "Poke with the Barrel and look for engages with Body Slam when your ADC can follow. The ult is your signature tool: use it to knock the enemy carry toward your team or to pull an ally out of trouble. Careful not to push enemies away by mistake.",
    },
    tips: {
      es: ["Practicá el ulti para empujar enemigos HACIA tu equipo, no lejos.", "Guardá el Golpe de Cuerpo: es engage y escape a la vez."],
      en: ["Practice the ult to knock enemies TOWARD your team, not away.", "Save Body Slam: it's both engage and escape."],
    },
  },

  graves: {
    strengths: {
      es: [
        "Descarga (Q) a corta distancia rompe al mago rival: un burst enorme si pegás las tres balas de cerca.",
        "The Black Cleaver + Youmuu te dan burst de asesino con velocidad para pegarte.",
        "La pasiva te da armadura al pelear: ganás casi todos los intercambios en línea.",
        "Movimiento Rápido (E) da un dash y velocidad de ataque para el reposicionamiento.",
      ],
      en: [
        "Buckshot (Q) at point-blank breaks the enemy mage: huge burst if all three pellets connect up close.",
        "The Black Cleaver + Youmuu give assassin burst with the speed to stick.",
        "The passive grants armor while fighting: you win almost every lane trade.",
        "Quickdraw (E) gives a dash and attack speed for repositioning.",
      ],
    },
    weaknesses: {
      es: [
        "El burst máximo exige estar a corta distancia: te expone.",
        "Sin la Descarga lista, tu daño cae bastante.",
        "Como mid AD, sufrís contra magos de rango que te patean.",
        "Depende de acertar el ángulo de las balas.",
      ],
      en: [
        "Max burst requires point-blank range: it exposes you.",
        "Without Buckshot up, your damage drops noticeably.",
        "As an AD mid, you struggle against ranged mages who kite you.",
        "Relies on hitting the pellet angle.",
      ],
    },
    combos: {
      es: ["Movimiento Rápido (E) para pegarte → Descarga (Q) a corta distancia para el burst → Colisión (R) para rematar o iniciar; Cortina de Humo (W) para negar visión."],
      en: ["Quickdraw (E) to close → Buckshot (Q) at point-blank for the burst → Collateral Damage (R) to finish or engage; Smoke Screen (W) to deny vision."],
    },
    matchups: {
      good: {
        es: ["Magos escuálidos que revientan a tu burst de corta distancia.", "Enemigos sin escape a los que alcanzás con el dash."],
        en: ["Squishy mages who fold to your point-blank burst.", "Escapeless enemies you reach with the dash."],
      },
      bad: {
        es: ["Magos de rango largo que te pokean antes de acercarte.", "CC que te frena mientras te desgastan."],
        en: ["Long-range mages who poke you before you close.", "CC that locks you while they chip you down."],
      },
    },
    plan: {
      es: "En línea, usá la pasiva de armadura y la Descarga de cerca para ganar intercambios. Buscá flancos: entrá con el dash, pegá la Descarga a quemarropa y usá Colisión para rematar. La Cortina de Humo sirve para desengancharte o cegar al enemigo. Elegí bien cuándo comprometerte porque sos frágil al burst enemigo.",
      en: "In lane, use the armor passive and point-blank Buckshot to win trades. Look for flanks: enter with the dash, land Buckshot up close and use Collateral Damage to finish. Smoke Screen helps you disengage or blind the enemy. Pick your commits carefully since you're fragile to enemy burst.",
    },
    tips: {
      es: ["Pegá la Descarga lo más cerca posible: las tres balas juntas hacen el doble de daño.", "Usá la Cortina de Humo para cegar al enemigo o cortar una persecución."],
      en: ["Land Buckshot as close as possible: all three pellets together do double the damage.", "Use Smoke Screen to blind the enemy or cut off a chase."],
    },
  },

  heimerdinger: {
    strengths: {
      es: [
        "Las torretas (Q) zonifican todo el bot lane: hacen la línea imposible de jugar para el enemigo.",
        "La Granada CH-2 (E) aturde y ciega, un CC muy fiable para el all-in.",
        "Poke incesante entre torretas y misiles: desgastás sin parar.",
        "Con Actualización (R) potenciás una habilidad para un pico de daño o control.",
      ],
      en: [
        "The turrets (Q) zone the whole bot lane: they make the lane impossible to play for the enemy.",
        "The CH-2 Grenade (E) stuns and blinds, very reliable CC for the all-in.",
        "Relentless poke between turrets and missiles: you chip non-stop.",
        "With Upgrade (R) you empower an ability for a burst of damage or control.",
      ],
    },
    weaknesses: {
      es: [
        "Sin movilidad: los dives y flancos te castigan.",
        "Las torretas tardan en colocarse: fuera de línea, tu setup es más lento.",
        "Depende de acertar la Granada para el CC.",
        "Si te empujan fuera de tus torretas, perdés casi todo tu valor.",
      ],
      en: [
        "No mobility: dives and flanks punish you.",
        "Turrets take time to set up: away from lane, your setup is slower.",
        "Relies on landing the Grenade for the CC.",
        "If pushed off your turrets, you lose most of your value.",
      ],
    },
    combos: {
      es: ["Colocá torretas (Q) para zonear → Misiles (W) para poke → Granada CH-2 (E) para aturdir y abrir el all-in; Actualización (R) sobre la Granada para un CC más largo."],
      en: ["Place turrets (Q) to zone → Missiles (W) for poke → CH-2 Grenade (E) to stun and open the all-in; Upgrade (R) on the Grenade for longer CC."],
    },
    matchups: {
      good: {
        es: ["Bot lanes melee que no pueden acercarse a tus torretas.", "Comps que dependen de un choque frontal (tu zona los frena)."],
        en: ["Melee bot lanes that can't approach your turrets.", "Comps that rely on a frontal clash (your zone stops them)."],
      },
      bad: {
        es: ["Dive con movilidad que salta por encima de las torretas.", "Poke a rango que destruye tus torretas de lejos."],
        en: ["Mobile dives that jump over the turrets.", "Ranged poke that destroys your turrets from afar."],
      },
    },
    plan: {
      es: "Armá un nido de torretas en el bot lane y hacé la línea injugable con poke constante. Guardá la Granada para el all-in o para frenar un enganche. En objetivos (Dragón), colocá torretas alrededor para controlar la zona. Posicioná con cuidado: fuera de tus torretas sos mucho más débil.",
      en: "Build a turret nest in the bot lane and make it unplayable with constant poke. Save the Grenade for the all-in or to stop an engage. At objectives (Dragon), place turrets around to control the area. Position carefully: away from your turrets you're much weaker.",
    },
    tips: {
      es: ["Colocá torretas antes de las peleas por objetivos para dominar la zona.", "Guardá Actualización para una Granada de CC más largo en el momento clave."],
      en: ["Place turrets before objective fights to dominate the area.", "Save Upgrade for a longer-CC Grenade at the key moment."],
    },
  },

  janna: {
    strengths: {
      es: [
        "Tornado (Q) con AP pega un poke enorme y es un knock-up que abre o corta peleas.",
        "El Escudo (E) suma daño al ADC además de proteger: buff y peel a la vez.",
        "Monzón (R) es el mejor peel del juego: empuja a todos y cura a tu equipo.",
        "Céfiro (W) da slow y velocidad para reposicionar aliados.",
      ],
      en: [
        "Tornado (Q) with AP does huge poke and is a knock-up that opens or breaks fights.",
        "The Shield (E) adds damage to the ADC as well as protecting: buff and peel at once.",
        "Monsoon (R) is the best peel in the game: it knocks everyone back and heals your team.",
        "Zephyr (W) gives slow and speed to reposition allies.",
      ],
    },
    weaknesses: {
      es: [
        "El Tornado es un skillshot con carga: difícil de acertar a rango largo.",
        "Muy frágil: si te agarran, caés al instante.",
        "Es reactiva/defensiva: no inicia peleas por sí sola.",
        "Depende del buen posicionamiento del equipo para peelear.",
      ],
      en: [
        "The Tornado is a chargeable skillshot: hard to land at long range.",
        "Very fragile: if caught, you fall instantly.",
        "She's reactive/defensive: she doesn't start fights on her own.",
        "Relies on good team positioning to peel.",
      ],
    },
    combos: {
      es: ["Poke: Tornado (Q) cargado + DFG para un burst sorpresa de support. Defensivo: Escudo (E) al ADC → Monzón (R) para empujar a los divers y curar."],
      en: ["Poke: charged Tornado (Q) + DFG for a surprise support burst. Defensive: Shield (E) on the ADC → Monsoon (R) to knock divers back and heal."],
    },
    matchups: {
      good: {
        es: ["Comps de dive: tu Monzón y knock-ups los desarman.", "Enemigos inmóviles a los que pegás el Tornado cargado."],
        en: ["Dive comps: your Monsoon and knock-ups dismantle them.", "Immobile enemies you hit with the charged Tornado."],
      },
      bad: {
        es: ["Supports de enganche que te agarran antes de reaccionar.", "Poke sostenido que supera tu sustain."],
        en: ["Engage supports who grab you before you react.", "Sustained poke that outpaces your sustain."],
      },
    },
    plan: {
      es: "Protegé al ADC con el Escudo (que también le suma daño) y pokeá con Tornado cargado + DFG para sorprender. En peleas sos la reina del peel: usá Céfiro y Monzón para desarmar dives y salvar a tus carries. Posicioná siempre detrás y reactiva.",
      en: "Protect the ADC with the Shield (which also adds damage) and poke with charged Tornado + DFG to surprise. In fights you're the peel queen: use Zephyr and Monsoon to break up dives and save your carries. Always position at the back and reactively.",
    },
    tips: {
      es: ["Cargá el Tornado detrás de los minions para que no lo vean venir.", "Guardá Monzón para el momento en que dive-eén a tu ADC, no la tires de daño."],
      en: ["Charge the Tornado behind minions so they don't see it coming.", "Save Monsoon for when they dive your ADC, don't throw it for damage."],
    },
  },

  jarvan: {
    strengths: {
      es: [
        "Bandera + Estocada (E+Q) es un knock-up garantizado y un gap-closer: enganche fiable.",
        "Cataclismo (R) aísla al carry enemigo en una arena: lo separás de su equipo para tu ADC.",
        "El Escudo Dorado (W) te da aguante y un slow para pelear.",
        "Engage repetible y de bajo riesgo con la bandera para escapar también.",
      ],
      en: [
        "Flag + Drag (E+Q) is a guaranteed knock-up and gap-closer: reliable engage.",
        "Cataclysm (R) isolates the enemy carry in an arena: you split them from their team for your ADC.",
        "Golden Aegis (W) gives durability and a slow to brawl.",
        "Repeatable, low-risk engage with the flag also serving as an escape.",
      ],
    },
    weaknesses: {
      es: [
        "El combo E→Q requiere práctica de timing para el knock-up.",
        "El Cataclismo puede ENCERRAR a tu objetivo con muros y dejarlo escapar si lo usás mal.",
        "Como support, si fallás el engage quedás muy expuesto.",
        "Sin la bandera lista, perdés movilidad y escape.",
      ],
      en: [
        "The E→Q combo needs timing practice for the knock-up.",
        "Cataclysm can WALL your target in and let them escape if used poorly.",
        "As support, a missed engage leaves you very exposed.",
        "Without the flag up, you lose mobility and escape.",
      ],
    },
    combos: {
      es: ["Engage: Estandarte (E) → Estocada de Dragón (Q) hacia la bandera para el knock-up → Cataclismo (R) para aislar al carry enemigo con tu ADC encima."],
      en: ["Engage: Standard (E) → Dragon Strike (Q) to the flag for the knock-up → Cataclysm (R) to isolate the enemy carry with your ADC on top."],
    },
    matchups: {
      good: {
        es: ["Bot lanes inmóviles a las que enganchás con el combo.", "Comps donde aislar al carry con la R decide la pelea."],
        en: ["Immobile bot lanes you engage with the combo.", "Comps where isolating the carry with R decides the fight."],
      },
      bad: {
        es: ["Enemigos móviles que salen del combo E→Q.", "Peel fuerte que protege al objetivo de tu Cataclismo."],
        en: ["Mobile enemies who escape the E→Q combo.", "Strong peel that protects the target from your Cataclysm."],
      },
    },
    plan: {
      es: "Buscá engages con Bandera + Estocada cuando tu ADC pueda seguirte. Usá el Cataclismo para atrapar al carry enemigo y separarlo de su equipo — no para encerrarte con un tanque. El Escudo Dorado te deja aguantar el intercambio. La bandera también es tu escape si el engage sale mal.",
      en: "Look for engages with Flag + Drag when your ADC can follow. Use Cataclysm to trap the enemy carry and split them from their team — not to wall yourself in with a tank. Golden Aegis lets you tank the trade. The flag is also your escape if the engage goes wrong.",
    },
    tips: {
      es: ["Practicá el timing E→Q: colocá la bandera y estocá al instante para el knock-up.", "Apuntá el Cataclismo para aislar al carry, cuidando de no darle una pared para escapar."],
      en: ["Practice E→Q timing: place the flag and drag instantly for the knock-up.", "Aim Cataclysm to isolate the carry, careful not to give them a wall to escape."],
    },
  },

  kassadin: {
    strengths: {
      es: [
        "La Esfera Nula (Q) te da un escudo mágico y un silencio: anula a los tops magos.",
        "Salto del Vacío (R) post-nivel 6 te hace imparable en splitpush y para perseguir/escapar.",
        "Escala a un asesino que borra magos y aparece donde quiera.",
        "Pulso de Fuerza (E) + Espada del Vacío dan waveclear y burst mágico.",
      ],
      en: [
        "Null Sphere (Q) gives you a magic shield and a silence: it neutralizes mage tops.",
        "Riftwalk (R) after level 6 makes you unstoppable at splitpush and for chasing/escaping.",
        "Scales into an assassin that deletes mages and appears anywhere.",
        "Force Pulse (E) + Nether Blade give waveclear and magic burst.",
      ],
    },
    weaknesses: {
      es: [
        "Early game muy flojo: sos vulnerable hasta el nivel 6 y unos ítems.",
        "El Salto del Vacío cuesta más maná cada vez que lo usás seguido.",
        "Frágil si te atrapan sin el escudo de la Q.",
        "Contra AD top no tenés el escudo ideal y sufrís más.",
      ],
      en: [
        "Very weak early: you're vulnerable until level 6 and a few items.",
        "Riftwalk costs more mana each time you use it in quick succession.",
        "Fragile if caught without the Q shield.",
        "Against AD tops you don't have the ideal shield and struggle more.",
      ],
    },
    combos: {
      es: ["Salto del Vacío (R) para entrar → Esfera Nula (Q) para silenciar → Pulso de Fuerza (E) + auto de Espada del Vacío para el burst; encadená saltos para perseguir."],
      en: ["Riftwalk (R) to enter → Null Sphere (Q) to silence → Force Pulse (E) + Nether Blade auto for the burst; chain Riftwalks to chase."],
    },
    matchups: {
      good: {
        es: ["Tops magos: el escudo y silencio de la Q los anula.", "Comps sin CC donde saltás libre y borrás al carry."],
        en: ["Mage tops: the Q's shield and silence neutralize them.", "Low-CC comps where you Riftwalk freely and delete the carry."],
      },
      bad: {
        es: ["Tops AD agresivos que te revientan en el early.", "CC duro que te frena entre saltos."],
        en: ["Aggressive AD tops who blow you up early.", "Hard CC that locks you between Riftwalks."],
      },
    },
    plan: {
      es: "Sobreviví el early farmeando con la Q y el Pulso de Fuerza; evitá pelear antes del 6. Con la R subida y un par de ítems, sos una amenaza de splitpush y de asesinato: saltá sobre el mago enemigo, silencialo y borralo. Usá el Salto del Vacío para entrar y salir, cuidando el maná.",
      en: "Survive the early farming with Q and Force Pulse; avoid fighting before level 6. With R up and a couple of items, you're a splitpush and assassination threat: Riftwalk onto the enemy mage, silence and delete them. Use Riftwalk to enter and exit, watching your mana.",
    },
    tips: {
      es: ["Usá la Esfera Nula para silenciar el hechizo clave del mago rival.", "No spamees el Salto del Vacío: cada uso seguido cuesta mucho más maná."],
      en: ["Use Null Sphere to silence the enemy mage's key spell.", "Don't spam Riftwalk: each consecutive use costs much more mana."],
    },
  },

  katarina: {
    strengths: {
      es: [
        "Salto Umbral (E) entre campamentos limpia la jungla rápido y da ganks sorpresa.",
        "Los ganks resetean cooldowns si conseguís la kill: encadenás una pelea entera.",
        "Burst enorme con Sablepistola + DFG sobre un squishy.",
        "Movilidad constante para entrar, reposicionarte y perseguir.",
      ],
      en: [
        "Shunpo (E) between camps clears the jungle fast and gives surprise ganks.",
        "Ganks reset cooldowns on a kill: you chain a whole fight.",
        "Huge burst with Gunblade + DFG on a squishy.",
        "Constant mobility to enter, reposition and chase.",
      ],
    },
    weaknesses: {
      es: [
        "El CC puntual corta la canalización de la Danza de las Cuchillas (R).",
        "Early jungla frágil: peligrosa de invadir antes de ítems.",
        "Si el combo no mata, no hay reseteo y quedás expuesta.",
        "Depende de reseteos: sin kills, tu impacto cae.",
      ],
      en: [
        "Point-and-click CC cuts the Death Lotus (R) channel.",
        "Fragile early jungle: dangerous to be invaded before items.",
        "If the combo doesn't kill, there's no reset and you're exposed.",
        "Reliant on resets: without kills, your impact drops.",
      ],
    },
    combos: {
      es: ["Gank: Salto Umbral (E) sobre el objetivo → Cuchilla Rebotante (Q) → DFG + Sablepistola → Danza de las Cuchillas (R). Con la kill, E y R se resetean: saltá al siguiente."],
      en: ["Gank: Shunpo (E) onto the target → Bouncing Blade (Q) → DFG + Gunblade → Death Lotus (R). On the kill, E and R reset: jump to the next."],
    },
    matchups: {
      good: {
        es: ["Líneas con squishies sin escape a los que gankeás y reseteás.", "Comps con poco CC."],
        en: ["Lanes with escapeless squishies you gank and reset off.", "Low-CC comps."],
      },
      bad: {
        es: ["Junglas de early fuerte que te invaden.", "Equipos con aturdimientos/silencios que cortan tu ulti."],
        en: ["Strong-early junglers who invade you.", "Teams with stuns/silences that cut your ult."],
      },
    },
    plan: {
      es: "Limpiá la jungla usando el Salto Umbral entre campamentos y buscá ganks tempranos sobre líneas empujadas. Cada kill resetea tu E y tu ulti: encadená para snowballear. En teamfights, entrá cuando gasten el CC y usá Zhonya para canalizar la Danza a salvo. Evitá invadir a junglas de early fuerte.",
      en: "Clear the jungle using Shunpo between camps and look for early ganks on pushed lanes. Every kill resets your E and ult: chain them to snowball. In teamfights, enter once they spend their CC and use Zhonya to channel Death Lotus safely. Avoid invading strong-early junglers.",
    },
    tips: {
      es: ["Usá Zhonya en medio del ulti para seguir canalizando a salvo.", "Gankeá líneas empujadas hacia tu lado: el Salto Umbral te da la entrada sorpresa."],
      en: ["Use Zhonya mid-ult to keep channeling safely.", "Gank lanes pushed to your side: Shunpo gives you the surprise entry."],
    },
  },

  kayle: {
    strengths: {
      es: [
        "Intervención (R) vuelve invulnerable a un aliado: salva a tu ADC en el momento justo.",
        "Ajuste de Cuentas (Q) ralentiza y hace poke; Furia Justiciera (E) le da rango y daño mágico.",
        "Reactivación (W) cura y acelera: sustain y peel para tu carry.",
        "Escala a un híbrido que pokea a distancia y protege como pocos.",
      ],
      en: [
        "Intervention (R) makes an ally invulnerable: it saves your ADC at the perfect moment.",
        "Reckoning (Q) slows and pokes; Righteous Fury (E) gives range and magic damage.",
        "Divine Blessing (W) heals and hastes: sustain and peel for your carry.",
        "Scales into a hybrid that pokes at range and protects like few others.",
      ],
    },
    weaknesses: {
      es: [
        "Early flojo: Kayle es un campeón que crece con el tiempo.",
        "Frágil si te atrapan sin la R disponible.",
        "El timing de Intervención es clave: mal usada, se desperdicia.",
        "Depende de acertar la Q para el poke y el slow.",
      ],
      en: [
        "Weak early: Kayle is a champion that grows over time.",
        "Fragile if caught without R available.",
        "Intervention timing is key: mistimed, it's wasted.",
        "Relies on landing the Q for poke and slow.",
      ],
    },
    combos: {
      es: ["Poke: Ajuste de Cuentas (Q) para ralentizar → autos con Furia Justiciera (E) a rango. Defensivo: Reactivación (W) al ADC → Intervención (R) justo antes de que muera."],
      en: ["Poke: Reckoning (Q) to slow → autos with Righteous Fury (E) at range. Defensive: Divine Blessing (W) on the ADC → Intervention (R) right before they die."],
    },
    matchups: {
      good: {
        es: ["Comps de burst: tu Intervención anula el todo-o-nada enemigo.", "Bot lanes que puedas pokear a rango con la E."],
        en: ["Burst comps: your Intervention negates the enemy all-in.", "Bot lanes you can poke at range with E."],
      },
      bad: {
        es: ["All-in temprano agresivo antes de que Kayle escale.", "Enganche que te atrapa a vos (no podés autoprotegerte con la R)."],
        en: ["Aggressive early all-in before Kayle scales.", "Engage that catches you (R can't target yourself for peel timing)."],
      },
    },
    plan: {
      es: "Sobreviví el early pokeando con la Q y curando con la W. Tu valor explota en mid-late: pokeá a rango con la E y guardá Intervención para el momento exacto en que quieran matar a tu ADC — un buen timing anula una pelea entera. Posicioná detrás y reactiva.",
      en: "Survive the early poking with Q and healing with W. Your value spikes mid-late: poke at range with E and save Intervention for the exact moment they try to kill your ADC — good timing negates a whole fight. Position at the back and reactively.",
    },
    tips: {
      es: ["No tires Intervención de más: guardala para el burst clave sobre tu carry.", "Subí la E a tiempo para pasar a pokear a rango y ganar seguridad."],
      en: ["Don't waste Intervention: save it for the key burst on your carry.", "Level E in time to switch to ranged poke and gain safety."],
    },
  },
};

export function detailsFor(slug) {
  return buildDetails[slug] || null;
}
