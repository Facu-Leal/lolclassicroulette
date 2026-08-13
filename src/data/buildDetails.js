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
};

export function detailsFor(slug) {
  return buildDetails[slug] || null;
}
