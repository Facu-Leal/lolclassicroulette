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
        "Poder de habilidad SIN límite: cada last-hit y kill con Golpe Maligno (Q) te suma AP permanente para siempre.",
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
      es: ["Horizonte de Eventos (E) para aturdir → Materia Oscura (W) sobre el objetivo fijado → Golpe Maligno (Q) + DFG + Explosión Primordial (R) para el borrado."],
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

  kogmaw: {
    strengths: {
      es: [
        "Artillería Viviente (R) hace poke a un rango absurdo: castigás sin que te toquen.",
        "Vómito Corrosivo (E) baja resistencias y ralentiza, potenciando todo tu daño.",
        "La pasiva castiga a quien te mate: hasta muerto sos peligroso.",
        "Con AP, cada Artillería pega un pepinazo desde el otro lado de la pantalla.",
      ],
      en: [
        "Living Artillery (R) pokes at absurd range: you punish without being touched.",
        "Void Ooze (E) shreds resistances and slows, amplifying all your damage.",
        "The passive punishes whoever kills you: even dead you're dangerous.",
        "With AP, each Artillery hits like a truck from across the screen.",
      ],
    },
    weaknesses: {
      es: [
        "Inmóvil y frágil: cualquier dash te alcanza y te borra.",
        "La Artillería cuesta cada vez más maná cuanto más la spameás.",
        "Sin rango de seguridad, no aportás nada.",
        "Depende de acertar los skillshots a larga distancia.",
      ],
      en: [
        "Immobile and fragile: any dash reaches and deletes you.",
        "Living Artillery costs more mana the more you spam it.",
        "Without safe range, you contribute nothing.",
        "Relies on landing skillshots at long distance.",
      ],
    },
    combos: {
      es: ["Vómito Corrosivo (E) para bajar resistencias y ralentizar → Artillería Viviente (R) repetida para el poke; Cañón de Vísceras (Q) si se acercan."],
      en: ["Void Ooze (E) to shred resistances and slow → repeated Living Artillery (R) for poke; Caustic Spittle (Q) if they close in."],
    },
    matchups: {
      good: {
        es: ["Comps inmóviles y agrupadas que no esquivan la Artillería.", "Asedios largos donde pokeás sin represalia."],
        en: ["Immobile, grouped comps that can't dodge Artillery.", "Long sieges where you poke without retaliation."],
      },
      bad: {
        es: ["Dive y asesinos que te alcanzan pese al rango.", "Enemigos móviles que esquivan tus skillshots."],
        en: ["Dive and assassins who reach you despite the range.", "Mobile enemies who dodge your skillshots."],
      },
    },
    plan: {
      es: "Quedate a máxima distancia y ametrallá con Artillería Viviente, bajando resistencias con el Vómito. En peleas, no te muevas del fondo: sos una torreta de poke. Cuidá el maná porque la R escala de costo, y posicioná siempre pensando en el dive enemigo.",
      en: "Stay at max distance and machine-gun with Living Artillery, shredding resistances with Void Ooze. In fights, don't leave the backline: you're a poke turret. Watch your mana since the R scales in cost, and always position with the enemy dive in mind.",
    },
    tips: {
      es: ["No spamees la Artillería sin control: cada uso seguido cuesta mucho más maná.", "Aplicá el Vómito antes de la R para maximizar el daño."],
      en: ["Don't mindlessly spam Artillery: each consecutive use costs much more mana.", "Apply Void Ooze before the R to maximize damage."],
    },
  },

  leesin: {
    strengths: {
      es: [
        "El ward-hop te da engages sorpresa desde ángulos imposibles.",
        "El insec (Furia del Dragón) manda al carry enemigo directo a tu equipo: un pick que gana la pelea.",
        "Onda Sónica + Golpe Resonante es un enganche a rango con daño y movilidad.",
        "Voluntad de Hierro y Salvaguarda te dan sustain y peel para pelear.",
      ],
      en: [
        "Ward-hopping gives you surprise engages from impossible angles.",
        "The insec (Dragon's Rage) kicks the enemy carry straight into your team: a pick that wins the fight.",
        "Sonic Wave + Resonating Strike is a ranged engage with damage and mobility.",
        "Iron Will and Safeguard give you sustain and peel to brawl.",
      ],
    },
    weaknesses: {
      es: [
        "El insec requiere práctica: mal ejecutado, malgastás el ulti.",
        "Depende de acertar la Q o de tener un ward para engancharte.",
        "Escala mal: sos un campeón de impacto temprano.",
        "Si el pick no mata, quedás en medio del equipo enemigo.",
      ],
      en: [
        "The insec needs practice: botched, you waste the ult.",
        "Relies on landing Q or having a ward to engage.",
        "Scales poorly: you're an early-impact champion.",
        "If the pick doesn't kill, you're stuck in the enemy team.",
      ],
    },
    combos: {
      es: ["Insec: ward-hop o Q detrás del carry enemigo → Furia del Dragón (R) para patearlo hacia tu equipo → Q2 (Golpe Resonante) + Tempestad/Mutilar para rematar."],
      en: ["Insec: ward-hop or Q behind the enemy carry → Dragon's Rage (R) to kick them into your team → Q2 (Resonating Strike) + Tempest/Cripple to finish."],
    },
    matchups: {
      good: {
        es: ["Comps donde separar y patear al carry decide la pelea.", "Bot lanes inmóviles a las que enganchás con la Q."],
        en: ["Comps where separating and kicking the carry decides the fight.", "Immobile bot lanes you engage with Q."],
      },
      bad: {
        es: ["Peel fuerte que protege al carry de tu insec.", "Comps de late donde tu impacto temprano se diluye."],
        en: ["Strong peel that protects the carry from your insec.", "Late-game comps where your early impact fades."],
      },
    },
    plan: {
      es: "Colocá wards para tener rutas de engage y buscá picks tempranos con tu ADC. El insec es tu jugada estrella: pateá al carry enemigo hacia tu equipo cuando puedan seguir el foco. Aprovechá el sustain para ganar intercambios en línea. Sos fuerte temprano: presioná antes de que el juego se alargue.",
      en: "Place wards for engage routes and look for early picks with your ADC. The insec is your signature play: kick the enemy carry into your team when they can follow up. Use the sustain to win lane trades. You're strong early: press before the game drags out.",
    },
    tips: {
      es: ["Practicá el insec: colocá el ward detrás del objetivo antes de saltar.", "No gastes el ulti de daño: guardalo para reposicionar al carry enemigo."],
      en: ["Practice the insec: place the ward behind the target before you hop.", "Don't use the ult for damage: save it to reposition the enemy carry."],
    },
  },

  leona: {
    strengths: {
      es: [
        "Cadena de CC infinita: Espada Cenital (E) + Espada del Amanecer (Q) + Amanecer Solar (R) bloquean al objetivo por segundos.",
        "Tanque total: con Sunfire y Randuin sos casi imposible de matar.",
        "Ganks que garantizan kills gracias al control encadenado.",
        "Iniciación fiable a distancia con la E.",
      ],
      en: [
        "Endless CC chain: Zenith Blade (E) + Shield of Daybreak (Q) + Solar Flare (R) lock the target for seconds.",
        "Full tank: with Sunfire and Randuin you're nearly unkillable.",
        "Ganks that guarantee kills thanks to the chained control.",
        "Reliable ranged engage with E.",
      ],
    },
    weaknesses: {
      es: [
        "Poco daño propio: dependés de que tu equipo capitalice el CC.",
        "Si fallás la iniciación, no tenés forma de rehacerla rápido.",
        "Lenta para desengancharte: si el dive sale mal, quedás atrapada.",
        "El ulti es un skillshot: fácil de fallar a distancia.",
      ],
      en: [
        "Little damage of her own: you rely on your team capitalizing on the CC.",
        "If you miss the engage, you can't remake it quickly.",
        "Slow to disengage: if the dive goes wrong, you're stuck.",
        "The ult is a skillshot: easy to miss at range.",
      ],
    },
    combos: {
      es: ["Gank: Espada Cenital (E) para engancharte al objetivo → Espada del Amanecer (Q) para aturdir → Amanecer Solar (R) para prolongar el CC mientras tu equipo lo mata."],
      en: ["Gank: Zenith Blade (E) to lock onto the target → Shield of Daybreak (Q) to stun → Solar Flare (R) to extend the CC while your team kills them."],
    },
    matchups: {
      good: {
        es: ["Squishies sin escape que se comen toda la cadena de CC.", "Comps donde tu equipo puede seguir el foco al instante."],
        en: ["Escapeless squishies who eat the whole CC chain.", "Comps where your team can follow up instantly."],
      },
      bad: {
        es: ["Comps con QSS/tenacidad que rompen tu control.", "Enemigos de kiteo que te patean sin dejarte llegar."],
        en: ["Comps with QSS/tenacity that break your control.", "Kiting enemies who peel you out before you arrive."],
      },
    },
    plan: {
      es: "Como jungla, gankeá líneas con la cadena de CC — es una kill casi asegurada si tu laner sigue el foco. En teamfights, elegí el objetivo prioritario, enganchá con la E y encadená todo tu control mientras aguantás con la vida de tanque. No inicies si tu equipo no puede seguirte.",
      en: "As jungle, gank lanes with the CC chain — it's a near-guaranteed kill if your laner follows up. In teamfights, pick the priority target, engage with E and chain all your control while tanking with your health. Don't engage if your team can't follow.",
    },
    tips: {
      es: ["Guardá el ulti para prolongar el CC sobre un objetivo ya enganchado, no para iniciar desde lejos.", "Enganchá al carry, no al tanque enemigo."],
      en: ["Save the ult to extend CC on an already-locked target, not to engage from afar.", "Lock onto the carry, not the enemy tank."],
    },
  },

  lux: {
    strengths: {
      es: [
        "El combo Atadura de Luz + DFG + Chispa Final (R) borra a cualquier squishy de un saque.",
        "Poke de rango larguísimo con la Singularidad Lúcida (E).",
        "La Atadura (Q) enraíza hasta dos objetivos y prepara todo el combo.",
        "La Chispa Final ejecuta a distancia y hace daño de área.",
      ],
      en: [
        "The Light Binding + DFG + Final Spark (R) combo deletes any squishy in one go.",
        "Very long-range poke with Lucent Singularity (E).",
        "Light Binding (Q) roots up to two targets and sets up the whole combo.",
        "Final Spark executes at range and deals AoE damage.",
      ],
    },
    weaknesses: {
      es: [
        "Todo depende de acertar la Q: si la raíz no pega, el combo se cae.",
        "Frágil y sin dash ni escape.",
        "Predecible si el enemigo espera la Q.",
        "Vulnerable a los asesinos que saltan a tu línea de atrás.",
      ],
      en: [
        "Everything hinges on landing the Q: if the root misses, the combo falls apart.",
        "Fragile with no dash or escape.",
        "Predictable if the enemy waits out the Q.",
        "Vulnerable to assassins jumping your backline.",
      ],
    },
    combos: {
      es: ["Atadura de Luz (Q) para enraizar → Singularidad Lúcida (E) → DFG → Chispa Final (R). Con la raíz garantizás que todo el combo conecte."],
      en: ["Light Binding (Q) to root → Lucent Singularity (E) → DFG → Final Spark (R). The root guarantees the whole combo connects."],
    },
    matchups: {
      good: {
        es: ["Squishies inmóviles que no sobreviven al combo con raíz.", "Enemigos agrupados (E + R en área)."],
        en: ["Immobile squishies who don't survive the rooted combo.", "Grouped enemies (E + R AoE)."],
      },
      bad: {
        es: ["Campeones móviles que esquivan la Q.", "Asesinos que se tiran a tu backline."],
        en: ["Mobile champions who dodge the Q.", "Assassins who dive your backline."],
      },
    },
    plan: {
      es: "Pokeá con la E a máximo rango y buscá raíces con la Q para el combo de one-shot. En peleas, quedate detrás, enraizá a un objetivo clave y borralo con DFG + Chispa Final, después tirá otra Chispa a través de la pelea. Posicioná con cuidado: no tenés escape.",
      en: "Poke with E at max range and look for Q roots for the one-shot combo. In fights, stay at the back, root a key target and delete them with DFG + Final Spark, then fire another Spark across the fight. Position carefully: you have no escape.",
    },
    tips: {
      es: ["Siempre detoná la E sobre un objetivo ya enraizado por la Q.", "Guardá la raíz para el asesino que te salte, no la malgastes de poke."],
      en: ["Always detonate E on a target already rooted by Q.", "Save the root for the assassin who dives you, don't waste it on poke."],
    },
  },

  malphite: {
    strengths: {
      es: [
        "El ulti (Fuerza Imparable) + DFG one-shotea al carry enemigo apenas entrás: un combo, una muerte.",
        "Los Fragmentos Sísmicos (Q) con AP hacen un poke sorprendente desde lejos.",
        "La R es una iniciación imposible de esquivar que aturde en área.",
        "Aun yendo AP, la pasiva de escudo te da algo de aguante.",
      ],
      en: [
        "The ult (Unstoppable Force) + DFG one-shots the enemy carry the moment you enter: one combo, one kill.",
        "Seismic Shards (Q) with AP do surprising poke from afar.",
        "The R is an undodgeable engage that stuns in an area.",
        "Even going AP, the passive shield gives you some durability.",
      ],
    },
    weaknesses: {
      es: [
        "Sin el ulti, tu enganche y tu burst desaparecen.",
        "AP Malphite es mucho más frágil que la versión tanque.",
        "Depende de un solo combo: si no matás, quedás expuesto.",
        "El poke de la Q es de rango medio: te expone algo.",
      ],
      en: [
        "Without the ult, your engage and burst disappear.",
        "AP Malphite is much more fragile than the tank version.",
        "Relies on a single combo: if you don't kill, you're exposed.",
        "The Q poke is mid-range: it exposes you somewhat.",
      ],
    },
    combos: {
      es: ["Fuerza Imparable (R) sobre el carry enemigo para aturdir → DFG → Fragmento Sísmico (Q) + Golpe de Tierra (E) para borrarlo antes de que reaccione."],
      en: ["Unstoppable Force (R) on the enemy carry to stun → DFG → Seismic Shard (Q) + Ground Slam (E) to delete them before they react."],
    },
    matchups: {
      good: {
        es: ["Squishies inmóviles que no sobreviven al combo R + DFG.", "Comps agrupadas donde el ulti aturde a varios."],
        en: ["Immobile squishies who don't survive the R + DFG combo.", "Grouped comps where the ult stuns several."],
      },
      bad: {
        es: ["Enemigos con QSS o dash que salen del ulti.", "Poke a rango que te baja antes de que puedas entrar."],
        en: ["Enemies with QSS or a dash who escape the ult.", "Ranged poke that lowers you before you can engage."],
      },
    },
    plan: {
      es: "En línea, pokeá con los Fragmentos y farmea seguro. Tu momento es el nivel 6: guardá el ulti para caer sobre el carry enemigo y borrarlo con DFG apenas aturdís. En teamfights, la R también sirve para iniciar sobre varios agrupados. Elegí bien el objetivo porque tenés un solo combo.",
      en: "In lane, poke with Shards and farm safe. Your moment is level 6: save the ult to land on the enemy carry and delete them with DFG the instant you stun. In teamfights, the R also works to engage on a grouped bunch. Pick your target well since you have a single combo.",
    },
    tips: {
      es: ["Guardá el ulti para el carry, no lo gastes en el tanque enemigo.", "Encolá DFG y el combo apenas conecta la R para el burst máximo."],
      en: ["Save the ult for the carry, don't spend it on the enemy tank.", "Queue DFG and the combo the instant the R connects for max burst."],
    },
  },

  malzahar: {
    strengths: {
      es: [
        "La supresión de Liberación del Vacío (R) bloquea por completo al carry enemigo: no puede moverse ni actuar.",
        "Zona Nula (W) empuja la línea sola: control de oleada y presión gratis.",
        "Llamado del Vacío (Q) + Visiones Maléficas dan daño sostenido y propagable.",
        "Con DFG, la supresión se vuelve una sentencia de muerte para el objetivo.",
      ],
      en: [
        "The Nether Grasp (R) suppression fully locks the enemy carry: they can't move or act.",
        "Null Zone (W) pushes the lane on its own: wave control and free pressure.",
        "Call of the Void (Q) + Malefic Visions give sustained, spreadable damage.",
        "With DFG, the suppression becomes a death sentence for the target.",
      ],
    },
    weaknesses: {
      es: [
        "La supresión te inmoviliza a vos también: quedás vulnerable mientras canalizás.",
        "Sin el ulti, tu enganche desaparece.",
        "Frágil: si te agarran, caés.",
        "El QSS/tenacidad del enemigo rompe tu supresión.",
      ],
      en: [
        "The suppression roots YOU too: you're vulnerable while channeling.",
        "Without the ult, your engage disappears.",
        "Fragile: if caught, you fall.",
        "Enemy QSS/tenacity breaks your suppression.",
      ],
    },
    combos: {
      es: ["Visiones Maléficas (E) sobre el objetivo → Zona Nula (W) debajo → Liberación del Vacío (R) para suprimir + DFG mientras se queda quieto; Llamado del Vacío (Q) para el daño extra."],
      en: ["Malefic Visions (E) on the target → Null Zone (W) underneath → Nether Grasp (R) to suppress + DFG while they stay still; Call of the Void (Q) for extra damage."],
    },
    matchups: {
      good: {
        es: ["Un solo carry peligroso al que anulás con la supresión.", "Bot lanes inmóviles que se comen la W y el combo."],
        en: ["A single dangerous carry you neutralize with the suppression.", "Immobile bot lanes that eat the W and combo."],
      },
      bad: {
        es: ["Enemigos con QSS o tenacidad que rompen la R.", "Comps que te divean mientras canalizás la supresión."],
        en: ["Enemies with QSS or tenacity who break the R.", "Comps that dive you while you channel the suppression."],
      },
    },
    plan: {
      es: "En línea, empujá con la Zona Nula y desgastá con Visiones Maléficas (se propaga al matar minions). En peleas, elegí al carry más peligroso y suprimilo con la R + DFG encima — lo sacás de la pelea por completo. Cuidá tu posición porque la supresión te deja quieto y expuesto.",
      en: "In lane, push with Null Zone and chip with Malefic Visions (it spreads on minion kills). In fights, pick the most dangerous carry and suppress them with R + DFG on top — you remove them from the fight entirely. Watch your position since the suppression leaves you still and exposed.",
    },
    tips: {
      es: ["Suprimí al carry desde un ángulo seguro: quedás inmóvil durante la R.", "Colocá la Zona Nula bajo el objetivo suprimido para daño porcentual extra."],
      en: ["Suppress the carry from a safe angle: you're immobile during the R.", "Place Null Zone under the suppressed target for extra % damage."],
    },
  },

  missfortune: {
    strengths: {
      es: [
        "Lluvia de Balas (E) + Doble Impacto hacen un poke brutal en bot lane.",
        "El ulti (Bombardeo) es una bomba de daño de área desde la línea de atrás.",
        "Andar Vanidoso te da velocidad para reposicionarte y perseguir.",
        "Presión de línea altísima: castigás cualquier error de posicionamiento.",
      ],
      en: [
        "Bullet Time... Make it Rain (E) + Double Up do brutal poke in the bot lane.",
        "The ult (Bullet Time) is an AoE damage bomb from the backline.",
        "Strut gives you speed to reposition and chase.",
        "Very high lane pressure: you punish any positioning mistake.",
      ],
    },
    weaknesses: {
      es: [
        "El ulti tiene canalización: si te interrumpen, perdés todo el daño.",
        "Frágil como support de poke.",
        "Sin escape real más allá de la velocidad de Andar Vanidoso.",
        "Depende de posicionar bien el ulti para que pegue a varios.",
      ],
      en: [
        "The ult has a channel: if interrupted, you lose all the damage.",
        "Fragile as a poke support.",
        "No real escape beyond Strut's speed.",
        "Relies on positioning the ult well to hit several.",
      ],
    },
    combos: {
      es: ["Poke: Doble Impacto (Q) sobre el objetivo con un minion detrás + Lluvia de Balas (E) para el slow y el daño. Teamfight: Bombardeo (R) desde atrás cuando estén agrupados y frenados."],
      en: ["Poke: Double Up (Q) on the target with a minion behind + Make it Rain (E) for slow and damage. Teamfight: Bullet Time (R) from the back when they're grouped and slowed."],
    },
    matchups: {
      good: {
        es: ["Bot lanes agrupadas que sufren tu poke y tu ulti.", "Comps que pelean en espacios cerrados donde el Bombardeo pega a todos."],
        en: ["Grouped bot lanes that suffer your poke and ult.", "Comps that fight in tight spaces where Bullet Time hits everyone."],
      },
      bad: {
        es: ["Enganche que te interrumpe el ulti al instante.", "Comps dispersas donde el Bombardeo apenas roza."],
        en: ["Engage that interrupts your ult instantly.", "Spread comps where Bullet Time barely grazes."],
      },
    },
    plan: {
      es: "Domina el bot lane con el poke de Doble Impacto y Lluvia de Balas. En teamfights, quedate detrás y buscá el ángulo para canalizar el Bombardeo sobre el equipo agrupado y frenado — es un daño enorme si no te interrumpen. Usá Andar Vanidoso para reposicionarte a salvo.",
      en: "Dominate the bot lane with Double Up and Make it Rain poke. In teamfights, stay back and find the angle to channel Bullet Time on the grouped, slowed team — it's huge damage if you're not interrupted. Use Strut to reposition safely.",
    },
    tips: {
      es: ["Apuntá Doble Impacto con un minion o campeón detrás del objetivo para que rebote.", "Canalizá el ulti solo con protección: cualquier CC lo corta."],
      en: ["Aim Double Up with a minion or champion behind the target so it bounces.", "Only channel the ult with protection: any CC cuts it."],
    },
  },

  morgana: {
    strengths: {
      es: [
        "Suelo Atormentado (W) limpia campamentos sin recibir daño: farmeo de jungla cómodo.",
        "La Atadura Oscura (Q) es una raíz larguísima: los ganks son letales.",
        "El Escudo Negro (E) bloquea el próximo CC: anula enganches y picks enemigos.",
        "Restricción del Alma (R) fija a los enemigos cercanos para tu equipo.",
      ],
      en: [
        "Tormented Soil (W) clears camps without taking damage: comfortable jungle farming.",
        "Dark Binding (Q) is a very long root: ganks are lethal.",
        "Black Shield (E) blocks the next CC: it negates enemy engages and picks.",
        "Soul Shackles (R) locks nearby enemies for your team.",
      ],
    },
    weaknesses: {
      es: [
        "La Atadura es un skillshot lento: si fallás, el gank se cae.",
        "Sin la raíz, tu enganche desaparece.",
        "El Suelo hace daño con el tiempo, no burst: los picks dependen del CC.",
        "Frágil si te atrapan sin el Escudo Negro para vos.",
      ],
      en: [
        "Dark Binding is a slow skillshot: if you miss, the gank falls apart.",
        "Without the root, your engage disappears.",
        "Tormented Soil does damage over time, not burst: picks rely on the CC.",
        "Fragile if caught without Black Shield up for yourself.",
      ],
    },
    combos: {
      es: ["Gank: Atadura Oscura (Q) para enraizar → Suelo Atormentado (W) debajo para el daño → Restricción del Alma (R) si hay varios cerca; Escudo Negro (E) a un aliado clave para anular el CC enemigo."],
      en: ["Gank: Dark Binding (Q) to root → Tormented Soil (W) underneath for damage → Soul Shackles (R) if several are close; Black Shield (E) on a key ally to negate enemy CC."],
    },
    matchups: {
      good: {
        es: ["Líneas inmóviles a las que enraizás con la Q larga.", "Comps de CC donde el Escudo Negro anula su enganche."],
        en: ["Immobile lanes you root with the long Q.", "CC comps where Black Shield negates their engage."],
      },
      bad: {
        es: ["Enemigos móviles que esquivan la Atadura lenta.", "Comps sin CC donde el Escudo Negro pierde valor."],
        en: ["Mobile enemies who dodge the slow Dark Binding.", "Comps without CC where Black Shield loses value."],
      },
    },
    plan: {
      es: "Farmeá cómoda con el Suelo Atormentado y buscá ganks con la raíz larga sobre líneas empujadas. Usá el Escudo Negro para anular el enganche o el pick clave del enemigo — bien usado, gana peleas. La R sirve para fijar a varios en un teamfight cerrado. Todo gira en torno a acertar la Q.",
      en: "Farm comfortably with Tormented Soil and look for ganks with the long root on pushed lanes. Use Black Shield to negate the enemy's key engage or pick — used well, it wins fights. The R locks several in a tight teamfight. Everything revolves around landing the Q.",
    },
    tips: {
      es: ["Poné el Escudo Negro sobre el aliado que van a enganchar para anular su CC.", "Colocá el Suelo Atormentado debajo del objetivo enraizado para maximizar el daño."],
      en: ["Put Black Shield on the ally they're about to engage to negate their CC.", "Place Tormented Soil under the rooted target to maximize damage."],
    },
  },

  nasus: {
    strengths: {
      es: [
        "Los campamentos apilan Golpe Siphon (Q) rápido: escalás a un pegador que ejecuta.",
        "Marchitar (W) deja al carry enemigo sin velocidad de movimiento ni de ataque: lo anula por completo.",
        "El ulti (Furia del Guardián de Arena) te vuelve un tanque enorme que hace daño de área.",
        "Escala infinito: cada minion y campamento te hace más fuerte para siempre.",
      ],
      en: [
        "Camps stack Siphoning Strike (Q) fast: you scale into a hitter that executes.",
        "Wither (W) leaves the enemy carry with no move or attack speed: it fully neutralizes them.",
        "The ult (Fury of the Sands) turns you into a huge tank that deals AoE damage.",
        "Infinite scaling: every minion and camp makes you stronger forever.",
      ],
    },
    weaknesses: {
      es: [
        "Early game muy flojo: sos vulnerable hasta apilar y llegar a ítems.",
        "Sin movilidad: los campeones de kiteo te sufren poco.",
        "Depende de apilar la Q: si te niegan el farmeo, no escalás.",
        "Un solo Marchitar: contra dos amenazas, solo frenás a una.",
      ],
      en: [
        "Very weak early: you're vulnerable until you stack and hit items.",
        "No mobility: kiting champions barely fear you.",
        "Relies on stacking Q: if they deny your farm, you don't scale.",
        "Only one Wither: against two threats, you only slow one.",
      ],
    },
    combos: {
      es: ["Gank: Marchitar (W) sobre el carry enemigo para dejarlo sin escape → Fuego Espiritual (E) para el slow y la reducción de armadura → Golpe Siphon (Q) apilado para el burst."],
      en: ["Gank: Wither (W) on the enemy carry to strip their escape → Spirit Fire (E) for slow and armor shred → stacked Siphoning Strike (Q) for the burst."],
    },
    matchups: {
      good: {
        es: ["Carries que dependen de la velocidad de ataque: Marchitar los apaga.", "Peleas prolongadas donde tu ulti y tus pilas deciden."],
        en: ["Carries that rely on attack speed: Wither shuts them off.", "Prolonged fights where your ult and stacks decide."],
      },
      bad: {
        es: ["Comps de kiteo que te desgastan sin dejarte llegar.", "Enemigos que te niegan el farmeo temprano."],
        en: ["Kiting comps that wear you down without letting you close.", "Enemies who deny your early farm."],
      },
    },
    plan: {
      es: "Apilá Golpe Siphon en los campamentos para escalar rápido y gankeá usando Marchitar para anular al carry enemigo. En mid-late, sos un tanque que ejecuta: entrá con el ulti, marchitá a la amenaza principal y pegá Q apiladas. Sos débil temprano, así que farmeá seguro hasta tu pico.",
      en: "Stack Siphoning Strike on camps to scale fast and gank using Wither to neutralize the enemy carry. Mid-late, you're a tank that executes: enter with the ult, Wither the main threat and land stacked Q's. You're weak early, so farm safe until your spike.",
    },
    tips: {
      es: ["Guardá Marchitar para el carry que más daño hace, no lo malgastes.", "Apilá la Q en campamentos y olas siempre que puedas: es poder permanente."],
      en: ["Save Wither for the biggest damage carry, don't waste it.", "Stack Q on camps and waves whenever you can: it's permanent power."],
    },
  },

  nidalee: {
    strengths: {
      es: [
        "La Lanza (Q) a máximo rango hace un poke devastador: castiga desde lejísimos.",
        "El Toque Primitivo (E) cura al ADC: sustain fuerte en línea.",
        "En forma Puma (R) tenés escape y movilidad infinitos.",
        "Las Trampas (W) dan visión y castigan a quien las pise.",
      ],
      en: [
        "The Spear (Q) at max range does devastating poke: it punishes from way out.",
        "Primal Surge (E) heals the ADC: strong lane sustain.",
        "In Cougar form (R) you have infinite escape and mobility.",
        "The Traps (W) give vision and punish whoever steps on them.",
      ],
    },
    weaknesses: {
      es: [
        "La Lanza es un skillshot largo: fácil de fallar a distancia.",
        "Su daño depende casi todo de acertar la Q.",
        "Frágil en forma humana si te alcanzan.",
        "Cambiar entre formas requiere buen manejo para no quedar sin herramientas.",
      ],
      en: [
        "The Spear is a long skillshot: easy to miss at range.",
        "Almost all her damage depends on landing the Q.",
        "Fragile in human form if reached.",
        "Swapping between forms takes good management to not run out of tools.",
      ],
    },
    combos: {
      es: ["Trampa (W) para revelar y ralentizar → Lanza (Q) a máximo rango sobre el objetivo marcado para el poke máximo; Toque Primitivo (E) para curar a tu ADC entre intercambios."],
      en: ["Trap (W) to reveal and slow → Spear (Q) at max range on the marked target for max poke; Primal Surge (E) to heal your ADC between trades."],
    },
    matchups: {
      good: {
        es: ["Bot lanes inmóviles a las que castigás con la Lanza sin represalia.", "Comps de asedio donde tu poke y sustain deciden la línea."],
        en: ["Immobile bot lanes you punish with the Spear without retaliation.", "Siege comps where your poke and sustain decide the lane."],
      },
      bad: {
        es: ["Enganche que te agarra en forma humana.", "Campeones móviles que esquivan la Lanza."],
        en: ["Engage that catches you in human form.", "Mobile champions who dodge the Spear."],
      },
    },
    plan: {
      es: "En línea, pokeá con la Lanza a máximo rango (marcá primero con la Trampa para asegurar el tiro) y curá a tu ADC con el Toque Primitivo. Desgastás a la bot lane enemiga hasta forzar el all-in de tu carry. Usá la forma Puma para reposicionarte y escapar. Todo depende de tu puntería con la Q.",
      en: "In lane, poke with the Spear at max range (mark first with the Trap to secure the shot) and heal your ADC with Primal Surge. You wear down the enemy bot lane until you force your carry's all-in. Use Cougar form to reposition and escape. It all comes down to your Q aim.",
    },
    tips: {
      es: ["Marcá con la Trampa o la Q corta antes de la Lanza a rango: pega mucho más sobre objetivos marcados.", "Guardá la forma Puma para escapar del enganche enemigo."],
      en: ["Mark with the Trap or short Q before the long-range Spear: it hits much harder on marked targets.", "Save Cougar form to escape the enemy engage."],
    },
  },

  nunu: {
    strengths: {
      es: [
        "Bola de Hielo (E) con AP hace un burst enorme en ganks: un slow que revienta.",
        "Consumir (Q) da sustain infinito y sirve para robar objetivos (Dragón/Barón).",
        "El ulti canalizado (Cero Absoluto) revienta teamfights agrupados con un daño masivo.",
        "Hervir Sangre (W) da velocidad a un aliado para eng+ganks.",
      ],
      en: [
        "Ice Blast (E) with AP does huge burst in ganks: a slow that hurts.",
        "Consume (Q) gives infinite sustain and steals objectives (Dragon/Baron).",
        "The channeled ult (Absolute Zero) blows up grouped teamfights with massive damage.",
        "Blood Boil (W) gives speed to an ally for engages+ganks.",
      ],
    },
    weaknesses: {
      es: [
        "El ulti tiene una canalización larga: cualquier CC lo interrumpe.",
        "Fuera del ulti, tu daño depende de la Bola de Hielo.",
        "Poca movilidad propia para escapar de un dive.",
        "Si te interrumpen Cero Absoluto, perdés tu mayor golpe.",
      ],
      en: [
        "The ult has a long channel: any CC interrupts it.",
        "Outside the ult, your damage relies on Ice Blast.",
        "Little self-mobility to escape a dive.",
        "If Absolute Zero is interrupted, you lose your biggest hit.",
      ],
    },
    combos: {
      es: ["Gank: Hervir Sangre (W) sobre vos o un aliado para llegar → Bola de Hielo (E) para el burst y el slow. Teamfight: Cero Absoluto (R) desde un ángulo protegido sobre el equipo agrupado."],
      en: ["Gank: Blood Boil (W) on yourself or an ally to arrive → Ice Blast (E) for burst and slow. Teamfight: Absolute Zero (R) from a protected angle on the grouped team."],
    },
    matchups: {
      good: {
        es: ["Comps agrupadas que se comen todo el Cero Absoluto.", "Peleas por objetivos: robás Dragón/Barón con Consumir."],
        en: ["Grouped comps that eat the full Absolute Zero.", "Objective fights: you steal Dragon/Baron with Consume."],
      },
      bad: {
        es: ["Comps con mucho CC que interrumpen tu ulti.", "Enemigos dispersos donde Cero Absoluto pega poco."],
        en: ["Comps with lots of CC that interrupt your ult.", "Spread enemies where Absolute Zero barely hits."],
      },
    },
    plan: {
      es: "Farmeá con Consumir (te cura) y gankeá con Bola de Hielo para el burst y el slow. En objetivos, tené Consumir listo para robar Dragón o Barón con Smite. En teamfights, canalizá Cero Absoluto desde detrás de tu frontline o después de un CC de tu equipo — protegido, es un daño demoledor.",
      en: "Farm with Consume (it heals you) and gank with Ice Blast for burst and slow. At objectives, keep Consume ready to steal Dragon or Baron with Smite. In teamfights, channel Absolute Zero from behind your frontline or after your team's CC — protected, it's devastating damage.",
    },
    tips: {
      es: ["Canalizá Cero Absoluto solo con protección o tras un CC aliado: se interrumpe con cualquier golpe de control.", "Guardá Consumir para robar objetivos con Smite."],
      en: ["Only channel Absolute Zero with protection or after allied CC: any control interrupts it.", "Save Consume to steal objectives with Smite."],
    },
  },

  olaf: {
    strengths: {
      es: [
        "Blade + Wit's End dan un DPS on-hit demencial: derretís hasta tanques.",
        "Ragnarok (R) te vuelve inmune al CC: entrás, pegás y nadie te frena.",
        "Golpes Viciosos (W) te curan mientras pegás: sustain en pelea.",
        "Contracorriente (Q) da slow y recuperás su cooldown al recoger el hacha.",
      ],
      en: [
        "Blade + Wit's End give insane on-hit DPS: you melt even tanks.",
        "Ragnarok (R) makes you immune to CC: you enter, hit and nobody stops you.",
        "Vicious Strikes (W) heal you while you hit: fight sustain.",
        "Undertow (Q) slows and you refund its cooldown by picking up the axe.",
      ],
    },
    weaknesses: {
      es: [
        "Sin el ulti, el CC te frena y tu DPS no sirve.",
        "Depende de pegarse al objetivo: contra kiteo puro sufrís.",
        "Poco burst: matás con daño sostenido, lleva tiempo.",
        "Si fallás la Q, perdés el slow para alcanzar al enemigo.",
      ],
      en: [
        "Without the ult, CC stops you and your DPS is useless.",
        "Relies on sticking to the target: against pure kiting you struggle.",
        "Little burst: you kill with sustained damage, which takes time.",
        "If you miss Q, you lose the slow to reach the enemy.",
      ],
    },
    combos: {
      es: ["Contracorriente (Q) para ralentizar → Ragnarok (R) para ignorar el CC → Golpes Viciosos (W) activado + autos on-hit con Blade + Wit's End para derretir al objetivo."],
      en: ["Undertow (Q) to slow → Ragnarok (R) to ignore CC → Vicious Strikes (W) active + on-hit autos with Blade + Wit's End to melt the target."],
    },
    matchups: {
      good: {
        es: ["Comps con mucho CC: Ragnarok las vuelve inútiles contra vos.", "Tanques y objetivos de mucha vida que tu DPS on-hit derrite."],
        en: ["Comps with lots of CC: Ragnarok makes it useless against you.", "Tanks and high-HP targets your on-hit DPS melts."],
      },
      bad: {
        es: ["Kiteo puro (Vayne, Kite ADCs) que te patean sin dejarte pegar.", "Enemigos con dashes que rompen tu persecución."],
        en: ["Pure kiting (Vayne, kite ADCs) who peel you out.", "Enemies with dashes that break your chase."],
      },
    },
    plan: {
      es: "En línea, usá la Q para pegarte y la W para sostenerte en los intercambios. En peleas, activá Ragnarok para ignorar todo el CC enemigo, saltá al carry y derretilo con tu DPS on-hit mientras te curás. Sos imparable si llegás: el desafío es alcanzar al objetivo contra el kiteo.",
      en: "In lane, use Q to stick and W to sustain in trades. In fights, activate Ragnarok to ignore all enemy CC, jump the carry and melt them with your on-hit DPS while healing. You're unstoppable if you arrive: the challenge is reaching the target against kiting.",
    },
    tips: {
      es: ["Activá Ragnarok justo antes de que te tiren el CC clave para negarlo.", "Recogé el hacha de la Q para recuperar su cooldown y mantener el slow."],
      en: ["Activate Ragnarok just before they land their key CC to negate it.", "Pick up the Q axe to refund its cooldown and keep the slow up."],
    },
  },

  pantheon: {
    strengths: {
      es: [
        "La Lanza (Q) a máximo rango hace un poke brutal, con crítico garantizado bajo 15% de vida.",
        "El Aturdimiento (W) asegura el all-in del ADC: salto + stun sobre el objetivo.",
        "Bloqueo de Corazón (E) niega todos los autoataques desde un frente: peel enorme.",
        "La Gran Estocada (R) da presencia global para unirte a peleas de todo el mapa.",
      ],
      en: [
        "The Spear (Q) at max range does brutal poke, with a guaranteed crit under 15% HP.",
        "Aegis of Zeonia (W) secures the ADC's all-in: leap + stun on the target.",
        "Heartseeker Strike... Aegis Protection (E) negates all autoattacks from one front: huge peel.",
        "Grand Skyfall (R) gives global presence to join fights across the map.",
      ],
    },
    weaknesses: {
      es: [
        "El Aturdimiento (W) te mete en el medio: si tu equipo no sigue, quedás expuesto.",
        "Frágil como support de poke.",
        "Depende de acertar la Lanza para el poke.",
        "Sin herramientas de escape más allá del ulti global.",
      ],
      en: [
        "Aegis (W) puts you in the middle: if your team doesn't follow, you're exposed.",
        "Fragile as a poke support.",
        "Relies on landing the Spear for poke.",
        "No escape tools beyond the global ult.",
      ],
    },
    combos: {
      es: ["Poke en línea: Lanza Cometa (Q) al ADC enemigo. All-in: Asalto Égida (W) para saltar y aturdir → Bloqueo de Corazón (E) + tu ADC para rematar."],
      en: ["Lane poke: Spear Shot (Q) at the enemy ADC. All-in: Aegis of Zeonia (W) to leap and stun → Aegis Protection (E) + your ADC to finish."],
    },
    matchups: {
      good: {
        es: ["Bot lanes escuálidas a las que castigás con la Lanza y el crítico de ejecución.", "Comps de autoataque a las que peeleás con el Bloqueo de Corazón."],
        en: ["Squishy bot lanes you punish with the Spear and the execute crit.", "Autoattack comps you peel with Aegis Protection."],
      },
      bad: {
        es: ["Enganche que te castiga cuando saltás con la W.", "Poke a rango que te desgasta primero."],
        en: ["Engage that punishes you when you leap with W.", "Ranged poke that wears you down first."],
      },
    },
    plan: {
      es: "En línea, pokeá sin parar con la Lanza (remata a enemigos bajos con el crítico garantizado) y buscá el aturdimiento para el all-in de tu ADC. Usá el Bloqueo de Corazón para negar el daño de autoataque enemigo. La Gran Estocada te deja aparecer en peleas de otras líneas: úsala para picks globales.",
      en: "In lane, poke non-stop with the Spear (finish low enemies with the guaranteed crit) and look for the stun for your ADC's all-in. Use Aegis Protection to negate enemy autoattack damage. Grand Skyfall lets you appear in other lanes' fights: use it for global picks.",
    },
    tips: {
      es: ["Usá la Lanza para rematar: bajo 15% de vida, el crítico es una ejecución.", "Orientá el Bloqueo de Corazón hacia la fuente de autoataques para peelear al ADC."],
      en: ["Use the Spear to finish: under 15% HP, the crit is an execute.", "Face Aegis Protection toward the autoattack source to peel your ADC."],
    },
  },
  rammus: {
    strengths: {
      es: [
        "Bola Rodante (Q) te da engage desde lejos y te mete encima del carry antes de que reaccione.",
        "Provocar (E) obliga al objetivo a pegarte a vos, justo cuando la Postura Defensiva le devuelve el daño.",
        "Con Sunfire y AP, el Temblor (R) más la quemadura hacen daño de área constante sin que dejes de ser un tanque.",
        "Thornmail + Postura Defensiva castigan a cualquier ADC que te autoataque.",
      ],
      en: [
        "Powerball (Q) gives long-range engage and puts you on the carry before they can react.",
        "Puncturing Taunt (E) forces the target to hit you, right when Defensive Ball Curl reflects the damage.",
        "With Sunfire and AP, Tremors (R) plus the burn deal constant area damage while you stay a tank.",
        "Thornmail + Defensive Ball Curl punish any ADC who autoattacks you.",
      ],
    },
    weaknesses: {
      es: [
        "El daño mágico ignora tu armadura: los magos te bajan mucho más rápido que los ADC.",
        "El AP es un extra: si no llegás a meterte en la pelea, no hacés nada.",
        "La jungla temprana es lenta hasta que tenés la Sunfire.",
        "Los slows te frenan la Bola Rodante y te cortan el engage.",
      ],
      en: [
        "Magic damage ignores your armor: mages bring you down much faster than ADCs.",
        "The AP is a bonus: if you can't get into the fight, you do nothing.",
        "Early jungle clear is slow until you have Sunfire.",
        "Slows interrupt Powerball and shut down your engage.",
      ],
    },
    combos: {
      es: ["Bola Rodante (Q) sobre el carry → Provocar (E) → Postura Defensiva (W) → Temblor (R) en el medio del equipo enemigo."],
      en: ["Powerball (Q) onto the carry → Puncturing Taunt (E) → Defensive Ball Curl (W) → Tremors (R) in the middle of the enemy team."],
    },
    matchups: {
      good: {
        es: ["Equipos con mucho daño físico y ADC de autoataques.", "Comps agrupadas que se quedan dentro del Temblor."],
        en: ["Teams heavy on physical damage and auto-attacking ADCs.", "Grouped comps that stay inside Tremors."],
      },
      bad: {
        es: ["Equipos full AP que ignoran tu armadura.", "Kiteo con slows que no te deja llegar con la Bola."],
        en: ["Full-AP teams that ignore your armor.", "Slow-heavy kiting that keeps Powerball from connecting."],
      },
    },
    plan: {
      es: "Limpiá jungla con cuidado hasta la Sunfire y después gankeá con Bola Rodante desde ángulos laterales. En peleas sos el iniciador: entrá rodando, provocá al carry y activá Postura Defensiva para que se lastime solo. El Temblor hace el resto mientras aguantás en el medio.",
      en: "Clear carefully until Sunfire, then gank with Powerball from side angles. In fights you're the engager: roll in, taunt the carry and pop Defensive Ball Curl so they hurt themselves. Tremors does the rest while you tank in the middle.",
    },
    tips: {
      es: ["Activá la Postura Defensiva antes de provocar, no después: así el daño reflejado arranca desde el primer golpe.", "Usá la Bola Rodante también para escapar: es tu única movilidad."],
      en: ["Activate Defensive Ball Curl before taunting, not after: that way reflected damage starts from the first hit.", "Use Powerball to escape too: it's your only mobility."],
    },
  },
  ryze: {
    strengths: {
      es: [
        "Rod of Ages + Warmog te dan tanta vida que podés pelear de frente con casi cualquier top.",
        "Prisión Rúnica (W) enraíza a punto y click: gana duelos y asegura ganks.",
        "Cada hechizo baja los cooldowns de los demás: spameás Sobrecarga sin parar.",
        "Poder Desesperado (R) te da vampirismo y hace que tus hechizos peguen en área.",
      ],
      en: [
        "Rod of Ages + Warmog give you so much health you can fight almost any top head-on.",
        "Rune Prison (W) is a point-and-click root: wins duels and secures ganks.",
        "Every spell lowers your other cooldowns: you spam Overload nonstop.",
        "Desperate Power (R) gives spell vamp and makes your spells hit in an area.",
      ],
    },
    weaknesses: {
      es: [
        "Temprano tenés poco rango y poca vida: los tops agresivos te castigan antes de la RoA.",
        "Sin movilidad: si te kitean, no llegás a pegar.",
        "El daño viene de la vida y el maná, no del AP: no esperes one-shotear a nadie.",
        "Las silencias y el antiheal cortan tu combo y tu sustain.",
      ],
      en: [
        "Early on you have short range and low health: aggressive tops punish you before RoA.",
        "No mobility: if you get kited, you can't reach anyone.",
        "Your damage comes from health and mana, not AP: don't expect to one-shot anyone.",
        "Silences and grievous wounds shut down your combo and sustain.",
      ],
    },
    combos: {
      es: ["Prisión Rúnica (W) → Sobrecarga (Q) → Flujo de Hechizos (E) → Sobrecarga (Q); con Poder Desesperado (R) activo, todo pega en área."],
      en: ["Rune Prison (W) → Overload (Q) → Spell Flux (E) → Overload (Q); with Desperate Power (R) active, everything hits in an area."],
    },
    matchups: {
      good: {
        es: ["Luchadores cuerpo a cuerpo que necesitan pegarte de cerca.", "Equipos sin antiheal contra los que el vampirismo te hace inmortal."],
        en: ["Melee bruisers who need to stay close to you.", "Teams without grievous wounds, where spell vamp makes you immortal."],
      },
      bad: {
        es: ["Tops de rango como Teemo o Kennen que te pokean en línea.", "Equipos con mucho daño verdadero o porcentual."],
        en: ["Ranged tops like Teemo or Kennen who poke you in lane.", "Teams with lots of true or percent-health damage."],
      },
    },
    plan: {
      es: "Farmeá tranquilo hasta la Rod of Ages y usá el Teleport para ayudar en otras líneas. Cuando tengas RoA y Frozen Heart, empujá la línea y buscá duelos: enraizás, spameás y aguantás. En las peleas de equipo enraizá al que se meta y quedate en primera línea pegando todo el tiempo.",
      en: "Farm safely until Rod of Ages and use Teleport to help other lanes. Once you have RoA and Frozen Heart, push and look for duels: root, spam and tank. In teamfights root whoever dives and stay in the frontline casting nonstop.",
    },
    tips: {
      es: ["Comprá la Rod of Ages lo antes posible: escala con el tiempo y es la base de toda la build.", "Guardá la Prisión Rúnica para el que intente escapar o meterse en tu backline."],
      en: ["Buy Rod of Ages as early as possible: it scales over time and is the base of the whole build.", "Save Rune Prison for whoever tries to escape or dive your backline."],
    },
  },
  singed: {
    strengths: {
      es: [
        "Lanzamiento (E) mueve al ADC enemigo adonde quieras: bajo tu torre o al medio de tu equipo.",
        "Mega Adhesivo (W) ralentiza en área y deja al enemigo pegado para el Lanzamiento.",
        "Rylai hace que el Rastro de Veneno ralentice todo lo que toca.",
        "Insania (R) te da velocidad, resistencias y regeneración para correr en el medio de la pelea.",
      ],
      en: [
        "Fling (E) throws the enemy ADC wherever you want: under your tower or into your team.",
        "Mega Adhesive (W) slows an area and keeps the enemy stuck for the Fling.",
        "Rylai's makes Poison Trail slow everything it touches.",
        "Insanity Potion (R) gives speed, resistances and regen to run through the fight.",
      ],
    },
    weaknesses: {
      es: [
        "Sos melee en una línea de soportes de rango: te pokean mientras te acercás.",
        "Dependés de acercarte para el Lanzamiento: el CC enemigo te frena en seco.",
        "El veneno consume maná rápido si lo dejás prendido.",
        "Poco daño de burst: no rematás solo.",
      ],
      en: [
        "You're melee in a lane of ranged supports: you get poked while closing in.",
        "You need to get close for Fling: enemy CC stops you cold.",
        "Poison Trail burns mana quickly if you leave it on.",
        "Little burst damage: you don't finish kills alone.",
      ],
    },
    combos: {
      es: ["Mega Adhesivo (W) delante del ADC → caminá hasta él → Lanzamiento (E) hacia tu ADC o tu torre → Rastro de Veneno (Q) mientras lo persiguen."],
      en: ["Mega Adhesive (W) in front of the ADC → walk up → Fling (E) toward your ADC or tower → Poison Trail (Q) while they chase."],
    },
    matchups: {
      good: {
        es: ["Duplas melee o de corto rango (Leona, Taric) que se te acercan solas.", "ADC sin escapes que no pueden salir del Adhesivo."],
        en: ["Melee or short-range duos (Leona, Taric) who come to you.", "ADCs without escapes who can't leave the Adhesive."],
      },
      bad: {
        es: ["Soportes de poke (Sona, Lulu, Janna) que te castigan de lejos.", "ADC con dash que se escapa antes del Lanzamiento."],
        en: ["Poke supports (Sona, Lulu, Janna) who punish you from afar.", "Dash ADCs who escape before the Fling."],
      },
    },
    plan: {
      es: "En línea jugá desde el arbusto y buscá el Lanzamiento cuando el ADC enemigo se acerque a farmear. Después de nivel 6, roameá con la velocidad de la Insania y meté wards con la Sightstone. En peleas, metete en el medio, lanzá al carry hacia tu equipo y dejá el veneno haciendo caos.",
      en: "In lane play from the brush and look for Fling when the enemy ADC steps up to farm. After level 6, roam with the Insanity Potion speed and ward with Sightstone. In fights, get in the middle, fling the carry into your team and let the poison cause chaos.",
    },
    tips: {
      es: ["Lanzá siempre hacia tu lado: tirar al enemigo lejos de vos solo lo salva.", "Apagá el Rastro de Veneno cuando no hay nadie cerca para no quedarte sin maná."],
      en: ["Always fling toward your side: throwing the enemy away from you just saves them.", "Turn off Poison Trail when nobody is around so you don't run out of mana."],
    },
  },
  sivir: {
    strengths: {
      es: [
        "Cuchilla Bumerán (Q) pega a la ida y a la vuelta: poke largo y fácil desde el soporte.",
        "Escudo de Hechizos (E) bloquea un engage o un CC y te devuelve maná.",
        "En la Caza (R) le da velocidad a todo el equipo: decide quién pelea y quién escapa.",
        "Black Cleaver y Statikk hacen que tus autos sigan siendo peligrosos aunque no farmees.",
      ],
      en: [
        "Boomerang Blade (Q) hits on the way out and back: long, easy poke from support.",
        "Spell Shield (E) blocks an engage or CC and refunds mana.",
        "On The Hunt (R) speeds up your whole team: it decides who fights and who escapes.",
        "Black Cleaver and Statikk keep your autos dangerous even without farm.",
      ],
    },
    weaknesses: {
      es: [
        "No tenés CC propio: dependés del ADC para asegurar kills.",
        "Sin curas ni escudos para aliados: no salvás a tu ADC de un all-in.",
        "El Escudo es un solo bloqueo: si lo gastás mal, quedás expuesta.",
        "Frágil en el early contra soportes tanque que te enganchan.",
      ],
      en: [
        "You have no CC of your own: you rely on your ADC to secure kills.",
        "No heals or shields for allies: you can't save your ADC from an all-in.",
        "Spell Shield blocks once: waste it and you're exposed.",
        "Fragile early against tank supports who catch you.",
      ],
    },
    combos: {
      es: ["Cuchilla Bumerán (Q) para poke → En la Caza (R) para entrar con todo el equipo → Escudo de Hechizos (E) cuando venga el CC enemigo."],
      en: ["Boomerang Blade (Q) to poke → On The Hunt (R) to engage with the whole team → Spell Shield (E) when the enemy CC comes."],
    },
    matchups: {
      good: {
        es: ["Soportes de enganche con una sola habilidad clave (Blitzcrank, Leona) que el Escudo anula.", "Duplas pasivas que te dejan pokear libre."],
        en: ["Engage supports with one key ability (Blitzcrank, Leona) that Spell Shield negates.", "Passive duos who let you poke freely."],
      },
      bad: {
        es: ["Soportes con mucho CC repetido (Taric, Alistar) que pasan tu único escudo.", "Asesinos que roamean y te encuentran sin wards."],
        en: ["Supports with repeated CC (Taric, Alistar) who get past your one shield.", "Roaming assassins who catch you without wards."],
      },
    },
    plan: {
      es: "Pokeá con el Bumerán cuando el enemigo vaya a farmear y guardá el Escudo para su habilidad de enganche. Con la Sightstone y la Frost Queen's Claim controlás visión y sumás algo de oro. En el medio juego usá En la Caza para forzar peleas o para sacar al equipo de una mala.",
      en: "Poke with Boomerang when the enemy goes to farm and save Spell Shield for their engage ability. With Sightstone and Frost Queen's Claim you control vision and earn some gold. In midgame use On The Hunt to force fights or pull the team out of a bad one.",
    },
    tips: {
      es: ["Tirá el Bumerán de forma que la vuelta también pase por el enemigo: duplicás el daño.", "No uses el Escudo para un poke cualquiera; reservalo para el engage."],
      en: ["Throw Boomerang so the return also passes through the enemy: double the damage.", "Don't waste Spell Shield on random poke; save it for the engage."],
    },
  },
  skarner: {
    strengths: {
      es: [
        "Golpe de Cristal (Q) con AP hace daño de área y, cargado, ralentiza: la jungla se limpia rápido.",
        "Empalar (R) suprime y arrastra: secuestrás al carry y lo llevás a tu equipo.",
        "Iceborn y Lich Bane hacen que cada auto después de un hechizo pegue fuerte y ralentice.",
        "Exoesqueleto Cristalino (W) te da escudo y velocidad para alcanzar al objetivo.",
      ],
      en: [
        "Crystal Slash (Q) on AP deals area damage and, when charged, slows: jungle clears fast.",
        "Impale (R) suppresses and drags: you kidnap the carry and take them to your team.",
        "Iceborn and Lich Bane make every auto after a spell hit hard and slow.",
        "Crystalline Exoskeleton (W) gives a shield and speed to catch your target.",
      ],
    },
    weaknesses: {
      es: [
        "Melee sin dash: si te kitean antes del Empalar, no hacés nada.",
        "Una limpieza (QSS) o un Mercurial anula tu ulti.",
        "Mezclar Golem, Iceborn y AP te deja algo débil si te atrasás.",
        "Las cámaras de visión enemigas arruinan tus ganks lentos.",
      ],
      en: [
        "Melee without a dash: if you get kited before Impale, you do nothing.",
        "A Quicksilver Sash or Mercurial negates your ult.",
        "Mixing Golem, Iceborn and AP leaves you weak if you fall behind.",
        "Enemy vision ruins your slow ganks.",
      ],
    },
    combos: {
      es: ["Exoesqueleto Cristalino (W) para acercarte → Golpe de Cristal (Q) para marcar y ralentizar → Empalar (R) → caminá hacia tu equipo → Golpe de Cristal (Q) otra vez."],
      en: ["Crystalline Exoskeleton (W) to close in → Crystal Slash (Q) to mark and slow → Impale (R) → walk to your team → Crystal Slash (Q) again."],
    },
    matchups: {
      good: {
        es: ["Carries inmóviles que no pueden escapar del Empalar.", "Equipos sin limpiezas ni QSS."],
        en: ["Immobile carries who can't escape Impale.", "Teams without cleanses or QSS."],
      },
      bad: {
        es: ["Junglas de counter-jungle que te invaden temprano.", "Comps de kiteo con mucho slow y rango."],
        en: ["Counter-junglers who invade you early.", "Kiting comps with lots of slows and range."],
      },
    },
    plan: {
      es: "Limpiá rápido con Golpe de Cristal y gankeá con el Exoesqueleto para cerrar distancia. A partir del 6 tu objetivo es uno solo: llegar al carry enemigo, suprimirlo y arrastrarlo hacia tu equipo. En peleas entrá por el flanco, nunca de frente.",
      en: "Clear fast with Crystal Slash and gank using Exoskeleton to close the gap. From level 6 your goal is one thing: reach the enemy carry, suppress them and drag them to your team. In fights enter from the flank, never head-on.",
    },
    tips: {
      es: ["Cada auto baja el cooldown de tus hechizos: pegá entre Q y Q para spamear más.", "Planeá el arrastre antes de usar el ulti: caminá hacia tu torre o tu equipo, no hacia el enemigo."],
      en: ["Each auto lowers your spell cooldowns: hit between Qs to spam more.", "Plan the drag before using your ult: walk toward your tower or team, not toward the enemy."],
    },
  },
  sona: {
    strengths: {
      es: [
        "Himno de Valor (Q) pega a los dos enemigos más cercanos sin necesidad de apuntar.",
        "Acorde de Poder suma daño extra cada tres hechizos: poke fuerte en línea.",
        "DFG + Rabadon convierten un Q + Acorde en un one-shot contra magos frágiles.",
        "Crescendo (R) aturde en línea a varios enemigos: gana cualquier pelea de equipo.",
      ],
      en: [
        "Hymn of Valor (Q) hits the two nearest enemies without needing to aim.",
        "Power Chord adds extra damage every third spell: strong lane poke.",
        "DFG + Rabadon turn a Q + Power Chord into a one-shot against squishy mages.",
        "Crescendo (R) stuns several enemies in a line: wins any teamfight.",
      ],
    },
    weaknesses: {
      es: [
        "Sos de las más frágiles del juego: un asesino te borra en un combo.",
        "Rango corto para una maga de mid: los magos de largo alcance te pokean.",
        "Sin escape propio, salvo la Canción de Celeridad.",
        "Si te atrasás, perdés todo el burst que justifica la build.",
      ],
      en: [
        "You're one of the squishiest in the game: an assassin deletes you in one combo.",
        "Short range for a mid mage: long-range mages poke you.",
        "No escape of your own besides Song of Celerity.",
        "If you fall behind, you lose all the burst that justifies the build.",
      ],
    },
    combos: {
      es: ["Himno de Valor (Q) + auto con Acorde de Poder → Deathfire Grasp → Crescendo (R) → Himno de Valor (Q) para rematar."],
      en: ["Hymn of Valor (Q) + Power Chord auto → Deathfire Grasp → Crescendo (R) → Hymn of Valor (Q) to finish."],
    },
    matchups: {
      good: {
        es: ["Magos de corto rango que tienen que acercarse para farmear.", "Comps agrupadas que caen juntas en el Crescendo."],
        en: ["Short-range mages who need to step up to farm.", "Grouped comps that all get caught by Crescendo."],
      },
      bad: {
        es: ["Asesinos con dash (Katarina, Kassadin) que te alcanzan sin problema.", "Magos de largo alcance (Xerath, Ziggs) que te pokean desde fuera de rango."],
        en: ["Dash assassins (Katarina, Kassadin) who reach you easily.", "Long-range mages (Xerath, Ziggs) who poke from outside your range."],
      },
    },
    plan: {
      es: "En línea pokeá con Himno de Valor y cargá el Acorde de Poder para castigar cada vez que el enemigo farmea. Con DFG y Athene buscá roams a las líneas laterales. En peleas quedate atrás, tirá el Crescendo sobre la mayor cantidad posible de enemigos y rematá con el combo de burst.",
      en: "In lane poke with Hymn of Valor and charge Power Chord to punish every time the enemy farms. With DFG and Athene look for roams to side lanes. In fights stay back, land Crescendo on as many enemies as possible and finish with the burst combo.",
    },
    tips: {
      es: ["Contá los hechizos: el tercero carga el Acorde, así que llegá al all-in con el Acorde listo.", "Dejá activa el aura de Celeridad para escapar si te van a buscar."],
      en: ["Count your spells: the third charges Power Chord, so go into the all-in with it ready.", "Keep the Celerity aura on to escape if they come for you."],
    },
  },
  soraka: {
    strengths: {
      es: [
        "Llamado Estelar (Q) pega en área alrededor tuyo y cada golpe baja más la resistencia mágica.",
        "Void Staff + la reducción del Q hacen que tu spam ignore casi toda la MR enemiga.",
        "Infundir (E) silencia y daña a un enemigo, o le devuelve maná a un aliado.",
        "Deseo (R) cura a todo tu equipo desde cualquier lugar del mapa.",
      ],
      en: [
        "Starcall (Q) hits an area around you and each hit lowers magic resist further.",
        "Void Staff + the Q shred make your spam ignore almost all enemy MR.",
        "Infuse (E) silences and damages an enemy, or restores mana to an ally.",
        "Wish (R) heals your whole team from anywhere on the map.",
      ],
    },
    weaknesses: {
      es: [
        "El Llamado Estelar tiene poco rango: tenés que estar cerca para pegar.",
        "Sin escape: cualquier asesino te encuentra y te mata.",
        "Sin CC fuerte más allá del silencio: no frenás un all-in.",
        "El maná se te va rápido si spameás sin Athene.",
      ],
      en: [
        "Starcall has short range: you need to be close to hit.",
        "No escape: any assassin finds and kills you.",
        "No hard CC beyond the silence: you can't stop an all-in.",
        "Mana drains fast if you spam without Athene.",
      ],
    },
    combos: {
      es: ["Llamado Estelar (Q) varias veces para apilar la reducción de MR → Infundir (E) para silenciar al mago enemigo → seguí con Llamado Estelar (Q)."],
      en: ["Starcall (Q) several times to stack MR shred → Infuse (E) to silence the enemy mage → keep casting Starcall (Q)."],
    },
    matchups: {
      good: {
        es: ["Magos de rango corto que dependen de un combo (el silencio lo corta).", "Peleas largas donde tu spam y el Deseo pesan más."],
        en: ["Short-range combo mages (the silence cuts their combo).", "Long fights where your spam and Wish matter more."],
      },
      bad: {
        es: ["Asesinos con dash que te atrapan sin escape.", "Magos de largo alcance que te pokean fuera del Llamado Estelar."],
        en: ["Dash assassins who catch you with no escape.", "Long-range mages who poke you outside Starcall range."],
      },
    },
    plan: {
      es: "En línea limpiá oleadas con Llamado Estelar y apilá la reducción de MR sobre el mago enemigo. Usá el Deseo para salvar aliados en otras líneas: es tu mayor aporte al mapa. En peleas quedate en el medio de tu equipo, spameá el Q y silenciá a quien vaya a hacer su combo.",
      en: "In lane clear waves with Starcall and stack MR shred on the enemy mage. Use Wish to save allies in other lanes: it's your biggest map contribution. In fights stay in the middle of your team, spam Q and silence whoever is about to combo.",
    },
    tips: {
      es: ["Mirá las barras de vida de todo el equipo: un Deseo a tiempo salva a alguien en otra línea.", "Guardá el silencio de Infundir para el mago o el asesino, no para el tanque."],
      en: ["Watch your whole team's health bars: a timely Wish saves someone in another lane.", "Save Infuse's silence for the mage or assassin, not the tank."],
    },
  },
  taric: {
    strengths: {
      es: [
        "Deslumbrar (E) aturde a punto y click y pega más cuanto más cerca estás: gana duelos.",
        "Destrozar (W) da armadura a vos y tus aliados, y al activarlo baja la armadura enemiga.",
        "Sheen + Atma's: cada hechizo potencia el siguiente auto, y la vida se convierte en daño.",
        "Imbuir (Q) cura a vos y a un aliado: aguantás mucho en línea.",
      ],
      en: [
        "Dazzle (E) is a point-and-click stun that deals more damage the closer you are: wins duels.",
        "Shatter (W) gives armor to you and your allies, and when cast it shreds enemy armor.",
        "Sheen + Atma's: each spell empowers your next auto, and health turns into damage.",
        "Imbue (Q) heals you and an ally: you sustain a lot in lane.",
      ],
    },
    weaknesses: {
      es: [
        "Sin movilidad: si te kitean, no llegás a pegar.",
        "Rango de Deslumbrar corto en comparación con los tops de rango.",
        "Poco daño temprano hasta tener Sheen y Atma's.",
        "El daño mágico te ignora casi toda la armadura acumulada.",
      ],
      en: [
        "No mobility: if you get kited, you can't reach anyone.",
        "Dazzle's range is short compared to ranged tops.",
        "Little early damage until you have Sheen and Atma's.",
        "Magic damage ignores most of your stacked armor.",
      ],
    },
    combos: {
      es: ["Deslumbrar (E) de cerca → auto con Sheen → Destrozar (W) para bajar armadura → auto → Resplandor (R) → auto."],
      en: ["Dazzle (E) at close range → Sheen auto → Shatter (W) to shred armor → auto → Radiance (R) → auto."],
    },
    matchups: {
      good: {
        es: ["Luchadores de daño físico que pegan contra tu armadura.", "Tops melee que se quedan a rango de Deslumbrar."],
        en: ["Physical-damage bruisers who hit into your armor.", "Melee tops who stay within Dazzle range."],
      },
      bad: {
        es: ["Tops AP (Kennen, Vladimir, Rumble) que ignoran tu armadura.", "Tops de rango que te pokean sin dejarte acercar."],
        en: ["AP tops (Kennen, Vladimir, Rumble) who ignore your armor.", "Ranged tops who poke you without letting you close in."],
      },
    },
    plan: {
      es: "Farmeá con la cura de Imbuir hasta tener Sheen; desde ahí buscá trades cortos: aturdí, pegá y retirate. Con Atma's y Frozen Heart sos un tanque que pega fuerte. En peleas de equipo entrá por el ADC enemigo, aturdilo y prendé el Resplandor para que tu equipo también pegue más.",
      en: "Farm with Imbue's heal until Sheen; from there look for short trades: stun, hit and back off. With Atma's and Frozen Heart you're a tank that hits hard. In teamfights go for the enemy ADC, stun them and pop Radiance so your team hits harder too.",
    },
    tips: {
      es: ["Usá Deslumbrar lo más cerca posible: el daño y la duración del stun suben con la cercanía.", "Intercalá autos entre hechizos para aprovechar cada proc de Sheen."],
      en: ["Use Dazzle as close as possible: damage and stun duration scale with proximity.", "Weave autos between spells to use every Sheen proc."],
    },
  },
  teemo: {
    strengths: {
      es: [
        "Trampa Nociva (R) te deja llenar la jungla de visión y daño: sabés dónde está todo el mundo.",
        "Dardo Cegador (Q) anula los autos del ADC enemigo en un gank.",
        "Liandry y Rylai hacen que los hongos ralenticen y quemen un porcentaje de la vida.",
        "Moverse Rápido (W) te da velocidad para llegar a los ganks antes que nadie.",
      ],
      en: [
        "Noxious Trap (R) fills the jungle with vision and damage: you know where everyone is.",
        "Blinding Dart (Q) shuts down the enemy ADC's autos in a gank.",
        "Liandry's and Rylai's make shrooms slow and burn a percentage of health.",
        "Move Quick (W) gives speed to reach ganks before anyone else.",
      ],
    },
    weaknesses: {
      es: [
        "Frágil para jungla: los invasores te ganan los duelos temprano.",
        "Sin CC duro: los ganks dependen de que tu línea tenga control.",
        "La limpieza de jungla es lenta antes de nivel 6.",
        "Un Elixir de Oracle te revela y limpia todos los hongos.",
      ],
      en: [
        "Fragile for a jungler: invaders win early duels against you.",
        "No hard CC: ganks depend on your laner having control.",
        "Jungle clear is slow before level 6.",
        "An Oracle's Elixir reveals and clears all your shrooms.",
      ],
    },
    combos: {
      es: ["Moverse Rápido (W) para llegar → Dardo Cegador (Q) al ADC → autos con Disparo Tóxico (E) → Trampa Nociva (R) en el camino de escape."],
      en: ["Move Quick (W) to arrive → Blinding Dart (Q) on the ADC → autos with Toxic Shot (E) → Noxious Trap (R) on the escape path."],
    },
    matchups: {
      good: {
        es: ["Junglas pasivos que farmean y no invaden.", "Equipos que dependen de ADC de autos (el Dardo los anula)."],
        en: ["Passive junglers who farm and don't invade.", "Teams that rely on auto-attack ADCs (the Dart shuts them down)."],
      },
      bad: {
        es: ["Junglas agresivos (Lee Sin, Xin Zhao) que te invaden temprano.", "Equipos con mucha visión que limpian tus hongos."],
        en: ["Aggressive junglers (Lee Sin, Xin Zhao) who invade early.", "Teams with lots of vision who clear your shrooms."],
      },
    },
    plan: {
      es: "Limpiá con cuidado hasta el Spectral Wraith y el 6. Desde ahí, plantá hongos en los caminos del jungla enemigo, en los objetivos y en las entradas de tu jungla. Gankeá cegando al ADC y usá los hongos para cortar escapes. En peleas quedate atrás y usá el campo minado para que el enemigo no pueda perseguir.",
      en: "Clear carefully until Spectral Wraith and level 6. From there, plant shrooms on the enemy jungler's paths, at objectives and at your jungle entrances. Gank by blinding the ADC and use shrooms to cut off escapes. In fights stay back and use the minefield so the enemy can't chase.",
    },
    tips: {
      es: ["Plantá hongos en Dragón y Barón antes de que aparezcan: ganás visión y daño gratis.", "Ahorrá cargas de hongos para cortar el escape después de un gank."],
      en: ["Plant shrooms at Dragon and Baron before they spawn: free vision and damage.", "Save shroom charges to cut off the escape after a gank."],
    },
  },
  tryndamere: {
    strengths: {
      es: [
        "Tajo Giratorio (E) tiene un ratio de AP enorme: entrás y salís de la pelea pegando un pepinazo.",
        "Lich Bane hace que cada auto después del Tajo sume un burst mágico.",
        "Furia Imparable (R) te deja 5 segundos sin poder morir: tiempo de sobra para borrar a alguien.",
        "Sed de Sangre (Q) cura más con AP: te recuperás después de cada pelea.",
      ],
      en: [
        "Spinning Slash (E) has a huge AP ratio: you dash in and out dealing a huge chunk.",
        "Lich Bane makes every auto after the Slash add magic burst.",
        "Undying Rage (R) keeps you alive for 5 seconds: plenty of time to delete someone.",
        "Bloodlust (Q) heals more with AP: you recover after every fight.",
      ],
    },
    weaknesses: {
      es: [
        "Melee en el mid: los magos de rango te pokean toda la línea.",
        "Si te controlan durante el ulti, morís igual cuando termina.",
        "Sin AD ni velocidad de ataque, tus autos sin Lich Bane no hacen nada.",
        "Contra Zhonya o curas grandes, el burst se queda corto.",
      ],
      en: [
        "Melee in mid: ranged mages poke you the whole lane.",
        "If you get CC'd during your ult, you still die when it ends.",
        "Without AD or attack speed, your autos without Lich Bane do nothing.",
        "Against Zhonya's or big heals, the burst falls short.",
      ],
    },
    combos: {
      es: ["Tajo Giratorio (E) sobre el objetivo → auto con Lich Bane → Deathfire Grasp → Grito Burlón (W) si se escapa → Furia Imparable (R) si te bajan."],
      en: ["Spinning Slash (E) onto the target → Lich Bane auto → Deathfire Grasp → Mocking Shout (W) if they run → Undying Rage (R) if you get low."],
    },
    matchups: {
      good: {
        es: ["Magos frágiles de corto rango que no pueden kitearte.", "Enemigos sin CC que no te frenan durante el ulti."],
        en: ["Short-range squishy mages who can't kite you.", "Enemies without CC who can't stop you during your ult."],
      },
      bad: {
        es: ["Magos de poke de largo alcance que te bajan antes del 6.", "Equipos con mucho CC encadenado."],
        en: ["Long-range poke mages who wear you down before level 6.", "Teams with lots of chained CC."],
      },
    },
    plan: {
      es: "Sobreviví la línea farmeando con cuidado y curándote con Sed de Sangre. Con Lich Bane y DFG, roameá a otras líneas: el Tajo te mete encima del objetivo y lo borrás en un combo. En peleas esperá a que el enemigo gaste su CC, entrá sobre el squishy y usá la Furia para quedarte hasta rematarlo.",
      en: "Survive lane by farming carefully and healing with Bloodlust. With Lich Bane and DFG, roam to other lanes: the Slash puts you on the target and you delete them in one combo. In fights wait for the enemy to use their CC, dive the squishy and use Undying Rage to stay until they die.",
    },
    tips: {
      es: ["Usá la Furia antes de quedar con muy poca vida: si te stunean en ese momento, no la podés activar.", "El Tajo baja su cooldown con cada crítico, pero en esta build casi no criteás: usalo con cuidado."],
      en: ["Use Undying Rage before you get too low: if you're stunned at that moment, you can't cast it.", "Spinning Slash's cooldown drops with crits, but this build barely crits: use it carefully."],
    },
  },
  twistedfate: {
    strengths: {
      es: [
        "Elige una Carta (W): la dorada stunea a punto y click y asegura cualquier duelo o gank.",
        "Destino (R) revela a todos los campeones enemigos y te teletransporta a cualquier punto: roams globales.",
        "Mazo Trucado (E) suma daño mágico cada cuatro autos además de velocidad de ataque, y combina con Statikk.",
        "Infinity Edge + Phantom Dancer convierten tus autos en el daño principal, algo que nadie espera de TF.",
      ],
      en: [
        "Pick a Card (W): the gold card is a point-and-click stun that wins any duel or gank.",
        "Destiny (R) reveals every enemy champion and teleports you anywhere: global roams.",
        "Stacked Deck (E) adds magic damage every fourth auto plus attack speed, and pairs with Statikk.",
        "Infinity Edge + Phantom Dancer make your autos the main damage, something nobody expects from TF.",
      ],
    },
    weaknesses: {
      es: [
        "Sin escape propio: si te atrapan después del Destino, morís.",
        "Rango de ataque corto para un carry de autos: los magos te pokean en línea.",
        "Necesitás los ítems de crítico para que la build funcione: temprano pegás poco.",
        "Elegir la carta toma tiempo: los rivales atentos esquivan el stun.",
      ],
      en: [
        "No escape of your own: if you get caught after Destiny, you die.",
        "Short attack range for an auto-attack carry: mages poke you in lane.",
        "You need the crit items for the build to work: early on you hit softly.",
        "Picking a card takes time: alert enemies dodge the stun.",
      ],
    },
    combos: {
      es: ["Destino (R) → caé al lado del objetivo → Carta Dorada (W) → autos con Mazo Trucado (E) → Cartas Salvajes (Q) sobre el enemigo aturdido."],
      en: ["Destiny (R) → land next to the target → Gold Card (W) → autos with Stacked Deck (E) → Wild Cards (Q) on the stunned enemy."],
    },
    matchups: {
      good: {
        es: ["Magos inmóviles que no esquivan la Carta Dorada.", "Mapas con líneas laterales sobreextendidas para tus roams."],
        en: ["Immobile mages who can't dodge the Gold Card.", "Maps with overextended side lanes for your roams."],
      },
      bad: {
        es: ["Asesinos con dash que te alcanzan antes de elegir carta.", "Magos de largo alcance que te pokean mientras farmeás."],
        en: ["Dash assassins who reach you before you pick a card.", "Long-range mages who poke you while you farm."],
      },
    },
    plan: {
      es: "Farmeá con Cartas Salvajes y la carta azul para el maná hasta tener la Statikk. Desde el 6, usá el Destino cada vez que esté disponible para matar en otras líneas con la Carta Dorada. En el late, con IE y PD, quedate detrás de tu equipo pegando autos y guardá la dorada para el que se meta.",
      en: "Farm with Wild Cards and the blue card for mana until Statikk. From level 6, use Destiny whenever it's up to kill in other lanes with the Gold Card. Late game, with IE and PD, stay behind your team auto-attacking and save the gold card for whoever dives.",
    },
    tips: {
      es: ["Cargá la carta antes de usar el Destino: así caés con la dorada lista.", "Usá la carta azul para recuperar maná en lugar de volver a base."],
      en: ["Start picking the card before Destiny: you land with the gold card ready.", "Use the blue card to restore mana instead of going back to base."],
    },
  },
  twitch: {
    strengths: {
      es: [
        "Emboscada (Q) te hace invisible: gankeás sin que nadie te vea venir.",
        "Expurgar (E) escala con AP por cada acumulación de Veneno Mortal: el burst es enorme.",
        "Barril de Veneno (W) ralentiza y aplica varias acumulaciones de golpe.",
        "Void Staff hace que el Expurgar ignore gran parte de la resistencia mágica.",
      ],
      en: [
        "Ambush (Q) makes you invisible: you gank without anyone seeing you coming.",
        "Expunge (E) scales with AP per Deadly Venom stack: the burst is huge.",
        "Venom Cask (W) slows and applies several stacks at once.",
        "Void Staff makes Expunge ignore much of the enemy's magic resist.",
      ],
    },
    weaknesses: {
      es: [
        "Muy frágil para jungla: perdés casi cualquier duelo temprano.",
        "Necesitás tiempo para apilar veneno antes de detonar.",
        "Los wards de visión y el Elixir de Oracle arruinan tus ganks.",
        "Sin CC duro: dependés del slow del Barril.",
      ],
      en: [
        "Very fragile for a jungler: you lose almost every early duel.",
        "You need time to stack venom before detonating.",
        "Vision wards and Oracle's Elixir ruin your ganks.",
        "No hard CC: you rely on Venom Cask's slow.",
      ],
    },
    combos: {
      es: ["Emboscada (Q) para acercarte invisible → Barril de Veneno (W) → autos para apilar → Expurgar (E) con 5-6 acumulaciones."],
      en: ["Ambush (Q) to approach invisibly → Venom Cask (W) → autos to stack → Expunge (E) at 5-6 stacks."],
    },
    matchups: {
      good: {
        es: ["Equipos con poca visión y sin Oracle.", "Carries frágiles que se separan de su equipo."],
        en: ["Teams with little vision and no Oracle.", "Squishy carries who split from their team."],
      },
      bad: {
        es: ["Junglas agresivos que te invaden temprano.", "Equipos con mucho CC que te frenan al salir del sigilo."],
        en: ["Aggressive junglers who invade early.", "CC-heavy teams who lock you down as you leave stealth."],
      },
    },
    plan: {
      es: "Limpiá jungla con cuidado y evitá los duelos hasta tener el Spectral Wraith. Gankeá entrando por detrás en sigilo, ralentizá con el Barril y detoná el Expurgar cuando el veneno esté cargado. En peleas de equipo esperá invisible a que el enemigo gaste su CC y entrá sobre los carries.",
      en: "Clear carefully and avoid duels until Spectral Wraith. Gank by coming in from behind in stealth, slow with Venom Cask and detonate Expunge when the venom is stacked. In teamfights wait invisible for the enemy to use their CC, then dive the carries.",
    },
    tips: {
      es: ["No detones el Expurgar con pocas acumulaciones: esperá a tener al menos cinco.", "Entrá a las peleas por el costado del equipo enemigo, no de frente."],
      en: ["Don't detonate Expunge with few stacks: wait for at least five.", "Enter fights from the enemy team's flank, not head-on."],
    },
  },
  urgot: {
    strengths: {
      es: [
        "Carga Corrosiva Noxiana (E) marca al enemigo y le baja la armadura.",
        "Con la marca puesta, Cazador Ácido (Q) se dirige solo al objetivo: poke sin apuntar.",
        "Manamune y el spam del Q te dan maná y daño de sobra.",
        "Intercambio de Posición (R) suprime e intercambia lugares: secuestrás a un carry.",
      ],
      en: [
        "Noxian Corrosive Charge (E) marks the enemy and lowers their armor.",
        "With the mark on, Acid Hunter (Q) locks onto the target: poke without aiming.",
        "Manamune and Q spam give you plenty of mana and damage.",
        "Hyper-Kinetic Position Reverser (R) suppresses and swaps places: you kidnap a carry.",
      ],
    },
    weaknesses: {
      es: [
        "Lento y sin escape: los asesinos te alcanzan fácil.",
        "El ulti tarda en completarse y te deja en el medio del equipo enemigo.",
        "Si fallás la granada, tu poke pierde casi todo el valor.",
        "Una limpieza o un QSS cortan la supresión.",
      ],
      en: [
        "Slow and without escape: assassins reach you easily.",
        "The ult takes time to complete and leaves you in the middle of the enemy team.",
        "If you miss the charge, your poke loses most of its value.",
        "A cleanse or QSS breaks the suppression.",
      ],
    },
    combos: {
      es: ["Carga Corrosiva Noxiana (E) → Capacitor de Terror (W) para el escudo y el slow → Cazador Ácido (Q) varias veces; Intercambio de Posición (R) para traer al carry a tu equipo."],
      en: ["Noxian Corrosive Charge (E) → Terror Capacitor (W) for the shield and slow → Acid Hunter (Q) several times; Reverser (R) to bring the carry to your team."],
    },
    matchups: {
      good: {
        es: ["Magos de corto rango que no pueden responder a tu poke.", "Carries frágiles que se quedan atrás de su equipo."],
        en: ["Short-range mages who can't answer your poke.", "Squishy carries who stay behind their team."],
      },
      bad: {
        es: ["Asesinos con dash que te alcanzan antes del poke.", "Equipos con limpiezas o mucho CC."],
        en: ["Dash assassins who reach you before you poke.", "Teams with cleanses or lots of CC."],
      },
    },
    plan: {
      es: "En línea marcá con la granada y pokeá con el Cazador Ácido cada vez que el enemigo farmee; apilá la Manamune con el spam. En el medio juego, pokeá antes de las peleas y buscá el intercambio con el ulti para traer al carry enemigo a tu equipo. Frozen Heart y Randuin te dejan aguantar en primera línea.",
      en: "In lane mark with the charge and poke with Acid Hunter every time the enemy farms; stack Manamune with the spam. In midgame, poke before fights and look for the ult swap to bring the enemy carry into your team. Frozen Heart and Randuin's let you hold the frontline.",
    },
    tips: {
      es: ["Usá el ulti cerca de tu torre: el intercambio deja al enemigo bajo ella.", "Prendé el escudo del Capacitor antes de usar el ulti para aguantar mientras se completa."],
      en: ["Use your ult near your tower: the swap leaves the enemy under it.", "Pop the Terror Capacitor shield before ulting to survive while it completes."],
    },
  },
  vayne: {
    strengths: {
      es: [
        "Condenar (E) contra una pared stunea: los ganks con un muro cerca son casi seguros.",
        "Virotes de Plata (W) hace daño verdadero porcentual: limpiás la jungla y derretís tanques.",
        "La Hora Final (R) te da AD extra y te vuelve invisible con cada Voltereta.",
        "El Golem y la Frozen Mallet te dan la vida que a Vayne siempre le falta.",
      ],
      en: [
        "Condemn (E) against a wall stuns: ganks with a wall nearby are nearly guaranteed.",
        "Silver Bolts (W) deals percent true damage: you clear jungle and melt tanks.",
        "Final Hour (R) gives bonus AD and makes you invisible with every Tumble.",
        "Golem and Frozen Mallet give the health Vayne always lacks.",
      ],
    },
    weaknesses: {
      es: [
        "Rango corto y poco daño temprano: tus ganks antes del 6 dependen de tener pared.",
        "La limpieza de jungla es lenta antes de la BotRK.",
        "El CC enemigo te deja sin Voltereta y te bajan rápido.",
        "Los tanques con Thornmail castigan tus autos.",
      ],
      en: [
        "Short range and little early damage: ganks before 6 depend on having a wall.",
        "Jungle clear is slow before BotRK.",
        "Enemy CC takes away your Tumble and you go down fast.",
        "Tanks with Thornmail punish your autos.",
      ],
    },
    combos: {
      es: ["Voltereta (Q) para acercarte → auto → Condenar (E) contra la pared → dos autos más para el proc de Virotes de Plata."],
      en: ["Tumble (Q) to close in → auto → Condemn (E) into a wall → two more autos for the Silver Bolts proc."],
    },
    matchups: {
      good: {
        es: ["Tanques y bruisers que derretís con daño verdadero.", "Líneas con paredes cerca para el Condenar."],
        en: ["Tanks and bruisers you melt with true damage.", "Lanes with walls nearby for Condemn."],
      },
      bad: {
        es: ["Junglas de duelo temprano (Lee Sin, Xin Zhao).", "Equipos con mucho CC encadenado."],
        en: ["Strong early duelists (Lee Sin, Xin Zhao).", "Teams with lots of chained CC."],
      },
    },
    plan: {
      es: "Farmeá hasta el Golem y buscá ganks en líneas con paredes cerca para el Condenar. A partir del 6, usá la invisibilidad de la Hora Final para entrar por sorpresa. En peleas pegale al objetivo más cercano y usá Condenar para separar al que se meta sobre tu equipo.",
      en: "Farm until Golem and look for ganks in lanes with walls nearby for Condemn. From level 6, use Final Hour's stealth to enter by surprise. In fights hit the closest target and use Condemn to peel whoever dives your team.",
    },
    tips: {
      es: ["Usá Condenar también para alejar a un enemigo de tu equipo, no solo para stunear.", "Contá tus autos: el tercero activa Virotes de Plata, así que no cambies de objetivo."],
      en: ["Use Condemn to push an enemy away from your team too, not only to stun.", "Count your autos: the third triggers Silver Bolts, so don't switch targets."],
    },
  },
  veigar: {
    strengths: {
      es: [
        "Horizonte de Eventos (E) es una jaula que stunea a todo el que toque el borde.",
        "Golpe Maligno (Q) te da AP permanente con cada kill: escalás sin límite.",
        "Explosión Primordial (R) escala con el AP del objetivo: borra magos enemigos.",
        "Con DFG, un combo completo elimina al carry antes de que pueda moverse.",
      ],
      en: [
        "Event Horizon (E) is a cage that stuns anyone who touches the edge.",
        "Baleful Strike (Q) gives permanent AP on each kill: you scale without limit.",
        "Primordial Burst (R) scales with the target's AP: it deletes enemy mages.",
        "With DFG, a full combo removes the carry before they can move.",
      ],
    },
    weaknesses: {
      es: [
        "Como soporte no farmeás: tus acumulaciones de Q crecen más lento.",
        "Muy frágil y sin escape.",
        "Rango corto: los soportes de poke te bajan antes del combo.",
        "Si fallás la jaula, no tenés cómo ganar el intercambio.",
      ],
      en: [
        "As support you don't farm: your Q stacks grow more slowly.",
        "Very fragile and without escape.",
        "Short range: poke supports wear you down before the combo.",
        "If you miss the cage, you have no way to win the trade.",
      ],
    },
    combos: {
      es: ["Horizonte de Eventos (E) sobre el enemigo → Materia Oscura (W) en el stun → Deathfire Grasp → Golpe Maligno (Q) → Explosión Primordial (R)."],
      en: ["Event Horizon (E) on the enemy → Dark Matter (W) on the stun → Deathfire Grasp → Baleful Strike (Q) → Primordial Burst (R)."],
    },
    matchups: {
      good: {
        es: ["Duplas de enganche que se meten solas en tu jaula.", "ADC sin escapes."],
        en: ["Engage duos who walk into your cage.", "ADCs without escapes."],
      },
      bad: {
        es: ["Soportes de poke de rango largo (Sona, Lulu).", "Duplas con dash que salen de la jaula antes del stun."],
        en: ["Long-range poke supports (Sona, Lulu).", "Duos with dashes who leave the cage before the stun."],
      },
    },
    plan: {
      es: "En línea robá los últimos golpes que tu ADC no pueda llegar a tomar para apilar el Q, y castigá con la jaula cada vez que el enemigo se acerque. Con la Sightstone controlá la visión. En peleas tirá la jaula sobre el grupo enemigo y guardá el combo con DFG para el carry.",
      en: "In lane take the last hits your ADC can't reach to stack Q, and punish with the cage every time the enemy steps up. Control vision with Sightstone. In fights drop the cage on the enemy group and save the DFG combo for the carry.",
    },
    tips: {
      es: ["Tirá la jaula de modo que el enemigo toque el borde, no el centro: el stun solo se activa en el borde.", "Usá el ulti sobre magos: su AP aumenta tu daño."],
      en: ["Place the cage so the enemy touches the edge, not the center: the stun only triggers on the edge.", "Use your ult on mages: their AP increases your damage."],
    },
  },
  wukong: {
    strengths: {
      es: [
        "Señuelo (W) te vuelve invisible y deja un clon: confundís en ganks y escapes.",
        "Ataque Nimbo (E) es un dash que pega a varios objetivos.",
        "Golpe Aplastante (Q) baja la armadura, y la Black Cleaver la reduce todavía más.",
        "Ciclón (R) levanta a todos los que toca: en una pelea agrupada gana la pelea.",
      ],
      en: [
        "Decoy (W) makes you invisible and leaves a clone: you confuse in ganks and escapes.",
        "Nimbus Strike (E) is a dash that hits several targets.",
        "Crushing Blow (Q) lowers armor, and Black Cleaver reduces it even more.",
        "Cyclone (R) knocks up everyone it touches: in a grouped fight it wins the fight.",
      ],
    },
    weaknesses: {
      es: [
        "La limpieza de jungla es lenta antes del Golem.",
        "Si entrás con el Ciclón y te controlan, quedás en el medio del enemigo.",
        "Los ítems de crítico tardan en hacer efecto: el midgame es tu ventana.",
        "Contra equipos dispersos, el Ciclón pierde valor.",
      ],
      en: [
        "Jungle clear is slow before Golem.",
        "If you dive with Cyclone and get CC'd, you're stuck in the middle of the enemy.",
        "Crit items take time to kick in: midgame is your window.",
        "Against spread-out teams, Cyclone loses value.",
      ],
    },
    combos: {
      es: ["Ataque Nimbo (E) sobre el objetivo → Golpe Aplastante (Q) → Ciclón (R) en el medio del equipo → Señuelo (W) para salir."],
      en: ["Nimbus Strike (E) onto the target → Crushing Blow (Q) → Cyclone (R) in the middle of the team → Decoy (W) to get out."],
    },
    matchups: {
      good: {
        es: ["Comps agrupadas que caen juntas en el Ciclón.", "Equipos con poca visión que no ven tus ganks."],
        en: ["Grouped comps that all get caught by Cyclone.", "Teams with little vision who don't see your ganks."],
      },
      bad: {
        es: ["Equipos de kiteo con mucho slow.", "Junglas que te invaden antes del Golem."],
        en: ["Kiting teams with lots of slows.", "Junglers who invade before your Golem."],
      },
    },
    plan: {
      es: "Limpiá jungla hasta el Golem y gankeá entrando con Ataque Nimbo. Usá el Señuelo para confundir al enemigo cuando intente escapar. En peleas de equipo esperá a que el enemigo se agrupe, entrá con el Nimbo y usá el Ciclón en el medio.",
      en: "Clear until Golem and gank by entering with Nimbus Strike. Use Decoy to confuse the enemy when they try to escape. In teamfights wait for the enemy to group, enter with Nimbus and use Cyclone in the middle.",
    },
    tips: {
      es: ["Usá el Señuelo para esquivar habilidades clave como un ulti o un gancho.", "Golpeá con el Q antes del Ciclón para que tu equipo pegue sobre armadura reducida."],
      en: ["Use Decoy to dodge key abilities like an ult or a hook.", "Land Q before Cyclone so your team hits through reduced armor."],
    },
  },
  zilean: {
    strengths: {
      es: [
        "Bomba de Tiempo (Q) explota en área y, con Rebobinar (W), podés poner dos seguidas.",
        "Cronoturno (R) revive a un aliado en plena pelea: cambia el resultado de cualquier teamfight.",
        "Distorsión Temporal (E) acelera a un aliado o ralentiza a un enemigo.",
        "Con DFG y Rabadon, la doble bomba elimina a cualquier squishy.",
      ],
      en: [
        "Time Bomb (Q) explodes in an area and, with Rewind (W), you can place two in a row.",
        "Chronoshift (R) revives an ally mid-fight: it changes the outcome of any teamfight.",
        "Time Warp (E) speeds up an ally or slows an enemy.",
        "With DFG and Rabadon's, the double bomb eliminates any squishy.",
      ],
    },
    weaknesses: {
      es: [
        "Las bombas tardan en explotar: los enemigos atentos se alejan de los aliados con la bomba.",
        "Sin escape más allá de la Distorsión sobre vos.",
        "El maná se te va rápido si spameás bombas sin Athene.",
        "Muy frágil contra asesinos.",
      ],
      en: [
        "Bombs take time to explode: alert enemies move away from allies with the bomb.",
        "No escape beyond casting Time Warp on yourself.",
        "Mana drains fast if you spam bombs without Athene.",
        "Very fragile against assassins.",
      ],
    },
    combos: {
      es: ["Bomba de Tiempo (Q) → Rebobinar (W) → Bomba de Tiempo (Q) otra vez → Distorsión Temporal (E) para ralentizar y que no escape de la explosión."],
      en: ["Time Bomb (Q) → Rewind (W) → Time Bomb (Q) again → Time Warp (E) to slow so they can't escape the blast."],
    },
    matchups: {
      good: {
        es: ["Magos de corto rango que tienen que acercarse a tus bombas.", "Peleas de equipo largas donde el Cronoturno pesa más."],
        en: ["Short-range mages who need to walk into your bombs.", "Long teamfights where Chronoshift matters more."],
      },
      bad: {
        es: ["Asesinos con dash que te alcanzan antes de que explote la bomba.", "Equipos de burst que matan a tu aliado antes del Cronoturno."],
        en: ["Dash assassins who reach you before the bomb explodes.", "Burst teams who kill your ally before Chronoshift."],
      },
    },
    plan: {
      es: "En línea pokeá con bombas y usá la doble bomba cuando el enemigo se acerque a farmear. Usá la Distorsión para escapar o para ayudar a tu jungla en los ganks. En peleas guardá el Cronoturno para el carry de tu equipo y tirá la doble bomba sobre el grupo enemigo.",
      en: "In lane poke with bombs and use the double bomb when the enemy steps up to farm. Use Time Warp to escape or to help your jungler gank. In fights save Chronoshift for your team's carry and drop the double bomb on the enemy group.",
    },
    tips: {
      es: ["Poné bombas sobre minions cerca del enemigo: la explosión en área también le pega.", "Usá el Cronoturno antes de que tu aliado tenga muy poca vida: el burst puede matarlo antes."],
      en: ["Place bombs on minions near the enemy: the area explosion hits them too.", "Cast Chronoshift before your ally gets too low: burst can kill them first."],
    },
  },
  "ashe-adc": {
    strengths: {
      es: [
        "Disparo Certero (Q) ralentiza con cada auto: kiteás a cualquier melee.",
        "Flecha de Cristal Encantada (R) cruza el mapa y aturde: inicia peleas o ayuda en otras líneas.",
        "La pasiva te garantiza un crítico cada tanto: con IE pegás muy fuerte.",
        "Halcón (E) te da visión gratis de arbustos y objetivos.",
      ],
      en: [
        "Frost Shot (Q) slows with every auto: you kite any melee.",
        "Enchanted Crystal Arrow (R) crosses the map and stuns: starts fights or helps other lanes.",
        "The passive guarantees a crit every so often: with IE you hit very hard.",
        "Hawkshot (E) gives free vision of brushes and objectives.",
      ],
    },
    weaknesses: {
      es: [
        "Sin escape: dependés del slow y de tu equipo para sobrevivir.",
        "El Disparo Certero consume maná con cada auto.",
        "Las duplas de all-in te castigan en la fase de línea.",
        "Necesitás varios ítems para pegar tanto como otros ADC.",
      ],
      en: [
        "No escape: you rely on the slow and your team to survive.",
        "Frost Shot drains mana with every auto.",
        "All-in duos punish you during laning.",
        "You need several items to hit as hard as other ADCs.",
      ],
    },
    combos: {
      es: ["Flecha de Cristal (R) sobre el objetivo → Andanada (W) → autos con Disparo Certero (Q) mientras está aturdido."],
      en: ["Crystal Arrow (R) on the target → Volley (W) → autos with Frost Shot (Q) while they're stunned."],
    },
    matchups: {
      good: {
        es: ["ADC de corto rango que no pueden pegarte sin acercarse.", "Equipos melee que no escapan del slow."],
        en: ["Short-range ADCs who can't hit you without stepping up.", "Melee teams who can't escape the slow."],
      },
      bad: {
        es: ["Duplas de all-in con mucho CC (Leona, Alistar).", "ADC con movilidad que esquivan la Flecha."],
        en: ["All-in duos with lots of CC (Leona, Alistar).", "Mobile ADCs who dodge the Arrow."],
      },
    },
    plan: {
      es: "Farmeá seguro en línea, pokeá con Andanada y usá el Halcón para revisar arbustos. Desde el 6, buscá Flechas a otras líneas o al ADC enemigo. En peleas iniciá con la Flecha desde atrás y kiteá con el slow sin acercarte de más.",
      en: "Farm safely in lane, poke with Volley and use Hawkshot to check brushes. From level 6, look for Arrows on other lanes or the enemy ADC. In fights start with the Arrow from the back and kite with the slow without getting too close.",
    },
    tips: {
      es: ["Apagá el Disparo Certero cuando farmeás para no gastar maná.", "Tirá la Flecha desde la niebla: cuanto más lejos viaja, más dura el stun."],
      en: ["Turn off Frost Shot when farming to save mana.", "Shoot the Arrow from the fog: the farther it travels, the longer the stun."],
    },
  },
  "twitch-adc": {
    strengths: {
      es: [
        "Rociada (R) le da más rango a tus autos y atraviesa a todos los enemigos en línea.",
        "Emboscada (Q) te vuelve invisible para reposicionarte en el ángulo perfecto.",
        "Expurgar (E) detona el veneno acumulado por un gran daño extra.",
        "BotRK y la Statikk hacen que el veneno se apile rapidísimo.",
      ],
      en: [
        "Spray and Pray (R) gives your autos extra range and pierces every enemy in a line.",
        "Ambush (Q) makes you invisible to reposition at the perfect angle.",
        "Expunge (E) detonates stacked venom for big extra damage.",
        "BotRK and Statikk make venom stack very fast.",
      ],
    },
    weaknesses: {
      es: [
        "Fase de línea débil: poco rango y poca vida.",
        "Sin escape: si te descubren, morís.",
        "Dependés de llegar al late con ítems.",
        "Los wards y el Elixir de Oracle te anulan el sigilo.",
      ],
      en: [
        "Weak laning phase: short range and low health.",
        "No escape: if you get revealed, you die.",
        "You depend on reaching late game with items.",
        "Wards and Oracle's Elixir counter your stealth.",
      ],
    },
    combos: {
      es: ["Emboscada (Q) para reposicionar → Barril de Veneno (W) → Rociada (R) atravesando al equipo → Expurgar (E) con el veneno cargado."],
      en: ["Ambush (Q) to reposition → Venom Cask (W) → Spray and Pray (R) through the team → Expunge (E) with stacked venom."],
    },
    matchups: {
      good: {
        es: ["Equipos agrupados que caen en la línea de la Rociada.", "Equipos con poca visión."],
        en: ["Grouped teams who line up for Spray and Pray.", "Teams with little vision."],
      },
      bad: {
        es: ["Duplas agresivas de línea (Draven, Graves).", "Equipos con mucho CC y wards."],
        en: ["Aggressive lane duos (Draven, Graves).", "Teams with lots of CC and wards."],
      },
    },
    plan: {
      es: "Sobreviví la línea farmeando seguro y usá el Barril para pokear. En el medio juego jugá con la invisibilidad para llegar a ángulos de flanco. En peleas esperá a que el enemigo se agrupe, salí del sigilo detrás de ellos y usá la Rociada para atravesar a todo el equipo.",
      en: "Survive lane by farming safely and poking with Venom Cask. In midgame play with stealth to reach flank angles. In fights wait for the enemy to group, leave stealth behind them and use Spray and Pray to pierce the whole team.",
    },
    tips: {
      es: ["Salí del sigilo pegando: la Emboscada te da velocidad de ataque extra al salir.", "No uses la Rociada sobre un solo objetivo: buscá alinear varios enemigos."],
      en: ["Leave stealth while attacking: Ambush gives bonus attack speed on exit.", "Don't use Spray and Pray on one target: line up several enemies."],
    },
  },
  "sivir-adc": {
    strengths: {
      es: [
        "Rebote (W) hace que tus autos reboten entre minions: el mejor waveclear de los ADC.",
        "Cuchilla Bumerán (Q) pokea a la ida y a la vuelta.",
        "Escudo de Hechizos (E) bloquea un gancho, un stun o un ulti.",
        "En la Caza (R) acelera a todo el equipo para forzar peleas o escapar.",
      ],
      en: [
        "Ricochet (W) makes your autos bounce between minions: the best waveclear among ADCs.",
        "Boomerang Blade (Q) pokes on the way out and back.",
        "Spell Shield (E) blocks a hook, a stun or an ult.",
        "On The Hunt (R) speeds up your whole team to force fights or escape.",
      ],
    },
    weaknesses: {
      es: [
        "Sin dash: si te alcanzan, dependés del Escudo.",
        "El Escudo bloquea una sola habilidad.",
        "El daño a un solo objetivo es menor que el de otros ADC.",
        "Contra el CC encadenado, un Escudo no alcanza.",
      ],
      en: [
        "No dash: if you get caught, you depend on Spell Shield.",
        "Spell Shield blocks only one ability.",
        "Single-target damage is lower than other ADCs.",
        "Against chained CC, one shield isn't enough.",
      ],
    },
    combos: {
      es: ["Cuchilla Bumerán (Q) para poke → En la Caza (R) para entrar → Rebote (W) en la pelea → Escudo de Hechizos (E) para el CC enemigo."],
      en: ["Boomerang Blade (Q) to poke → On The Hunt (R) to engage → Ricochet (W) in the fight → Spell Shield (E) for enemy CC."],
    },
    matchups: {
      good: {
        es: ["Duplas de enganche con una sola habilidad clave (Blitzcrank).", "Equipos agrupados donde el Rebote pega a varios."],
        en: ["Engage duos with one key ability (Blitzcrank).", "Grouped teams where Ricochet hits several."],
      },
      bad: {
        es: ["Duplas con mucho CC repetido.", "ADC de largo rango que te pokean."],
        en: ["Duos with lots of repeated CC.", "Long-range ADCs who poke you."],
      },
    },
    plan: {
      es: "En línea empujá con el Rebote y pokeá con el Bumerán; guardá el Escudo para el enganche enemigo. En el medio juego usá tu waveclear para empujar líneas y presionar torres. En peleas usá En la Caza para entrar con todo el equipo o para salir de una mala.",
      en: "In lane push with Ricochet and poke with Boomerang; save Spell Shield for the enemy engage. In midgame use your waveclear to push lanes and pressure towers. In fights use On The Hunt to go in with the whole team or to get out of a bad one.",
    },
    tips: {
      es: ["Bloquear un hechizo con el Escudo te devuelve maná: usalo también para sostener la línea.", "Tirá el Bumerán de forma que la vuelta pase por el enemigo."],
      en: ["Blocking a spell with Spell Shield restores mana: use it to sustain lane too.", "Throw Boomerang so the return passes through the enemy."],
    },
  },
  "kogmaw-adc": {
    strengths: {
      es: [
        "Bocado Bioarcano (W) le da más rango a tus autos y hace daño mágico porcentual.",
        "Con Guinsoo y Wit's End, cada auto derrite tanques.",
        "Cañón de Vísceras (Q) baja la armadura y la resistencia mágica.",
        "Artillería Viviente (R) pokea desde muy lejos y remata a los que escapan.",
      ],
      en: [
        "Bio-Arcane Barrage (W) gives your autos extra range and percent magic damage.",
        "With Guinsoo's and Wit's End, every auto melts tanks.",
        "Caustic Spittle (Q) lowers armor and magic resist.",
        "Living Artillery (R) pokes from very far away and finishes those who flee.",
      ],
    },
    weaknesses: {
      es: [
        "Inmóvil: sin dash ni escape.",
        "Fase de línea débil antes de tener ítems.",
        "Dependés del peel de tu equipo.",
        "La Artillería se encarece cada vez que la usás seguida.",
      ],
      en: [
        "Immobile: no dash or escape.",
        "Weak laning before having items.",
        "You depend on your team's peel.",
        "Living Artillery costs more each time you use it in a row.",
      ],
    },
    combos: {
      es: ["Vómito Corrosivo (E) para ralentizar → Bocado Bioarcano (W) → autos con Cañón de Vísceras (Q) → Artillería Viviente (R) para rematar."],
      en: ["Void Ooze (E) to slow → Bio-Arcane Barrage (W) → autos with Caustic Spittle (Q) → Living Artillery (R) to finish."],
    },
    matchups: {
      good: {
        es: ["Equipos de tanques que derretís con daño porcentual.", "Comps sin dive que te dejan pegar desde atrás."],
        en: ["Tank teams you melt with percent damage.", "Comps without dive that let you attack from the back."],
      },
      bad: {
        es: ["Asesinos y dive que te alcanzan.", "Duplas agresivas en la fase de línea."],
        en: ["Assassins and dive that reach you.", "Aggressive lane duos."],
      },
    },
    plan: {
      es: "Farmeá seguro en la línea y no busques intercambios largos. Con BotRK y Guinsoo empezás a dominar las peleas. En teamfights quedate siempre atrás de tu equipo, activá el Bocado Bioarcano y pegale al objetivo más cercano mientras tu equipo te protege.",
      en: "Farm safely in lane and avoid long trades. With BotRK and Guinsoo's you start dominating fights. In teamfights always stay behind your team, activate Barrage and hit the closest target while your team protects you.",
    },
    tips: {
      es: ["Activá el Bocado Bioarcano antes de que empiece la pelea para aprovechar todo su rango.", "Usá la Artillería para rematar, no como daño principal."],
      en: ["Activate Barrage before the fight starts to use all its range.", "Use Living Artillery to finish, not as your main damage."],
    },
  },
  "vayne-adc": {
    strengths: {
      es: [
        "Virotes de Plata (W) hace daño verdadero porcentual: no importa cuánta armadura tengan.",
        "Voltereta (Q) te reposiciona y potencia el siguiente auto.",
        "Condenar (E) stunea contra pared y aleja a los que se meten sobre vos.",
        "La Hora Final (R) te da AD y sigilo con cada Voltereta.",
      ],
      en: [
        "Silver Bolts (W) deals percent true damage: armor doesn't matter.",
        "Tumble (Q) repositions you and empowers your next auto.",
        "Condemn (E) stuns against walls and pushes away divers.",
        "Final Hour (R) gives AD and stealth with every Tumble.",
      ],
    },
    weaknesses: {
      es: [
        "Rango corto y fase de línea débil.",
        "Dependés de llegar al late game.",
        "El CC te deja sin Voltereta.",
        "Las duplas de poke te bajan en línea.",
      ],
      en: [
        "Short range and weak laning.",
        "You depend on reaching late game.",
        "CC takes away your Tumble.",
        "Poke duos wear you down in lane.",
      ],
    },
    combos: {
      es: ["Auto → Voltereta (Q) → auto potenciado (proc de Virotes de Plata) → Condenar (E) contra pared si se acercan."],
      en: ["Auto → Tumble (Q) → empowered auto (Silver Bolts proc) → Condemn (E) into a wall if they close in."],
    },
    matchups: {
      good: {
        es: ["Equipos de tanques y bruisers.", "ADC melee o de corto rango que se acercan."],
        en: ["Tank and bruiser teams.", "Melee or short-range ADCs who step up."],
      },
      bad: {
        es: ["Duplas de poke de largo rango (Caitlyn, Ezreal).", "Equipos con mucho CC."],
        en: ["Long-range poke duos (Caitlyn, Ezreal).", "Teams with lots of CC."],
      },
    },
    plan: {
      es: "Farmeá seguro en la línea y evitá el poke enemigo. Con BotRK y PD empezás a pesar en las peleas. En teamfights pegale al objetivo más cercano, usá la Voltereta para esquivar habilidades y Condenar para alejar a los que se meten sobre vos.",
      en: "Farm safely in lane and avoid enemy poke. With BotRK and PD you start mattering in fights. In teamfights hit the closest target, use Tumble to dodge abilities and Condemn to push away divers.",
    },
    tips: {
      es: ["Guardá Condenar para el que se mete sobre vos: es tu mejor defensa.", "Durante la Hora Final, cada Voltereta te da sigilo: usala para que pierdan tu posición."],
      en: ["Save Condemn for whoever dives you: it's your best defense.", "During Final Hour, each Tumble gives stealth: use it to make them lose track of you."],
    },
  },
  "ezreal-adc": {
    strengths: {
      es: [
        "Disparo Místico (Q) aplica efectos on-hit y baja el cooldown de todos tus hechizos.",
        "Cambio Arcano (E) es un blink: el ADC más seguro para reposicionar.",
        "Manamune y Trinity te dan maná infinito y daño de sobra.",
        "Ráfaga Trascendente (R) cruza el mapa y pega a todos los que atraviesa.",
      ],
      en: [
        "Mystic Shot (Q) applies on-hit effects and lowers all your spell cooldowns.",
        "Arcane Shift (E) is a blink: the safest ADC for repositioning.",
        "Manamune and Trinity give infinite mana and plenty of damage.",
        "Trueshot Barrage (R) crosses the map and hits everyone it passes.",
      ],
    },
    weaknesses: {
      es: [
        "Dependés de acertar los Disparos Místicos.",
        "Menos daño en peleas largas que otros ADC.",
        "Los ítems de maná tardan en hacer efecto.",
        "Contra minions que bloquean, tu poke pierde valor.",
      ],
      en: [
        "You depend on landing Mystic Shots.",
        "Less damage in long fights than other ADCs.",
        "Mana items take time to kick in.",
        "Minion blocks reduce your poke's value.",
      ],
    },
    combos: {
      es: ["Disparo Místico (Q) → Cambio Esencial (W) → auto con Trinity → Cambio Arcano (E) para reposicionar → Disparo Místico (Q)."],
      en: ["Mystic Shot (Q) → Essence Flux (W) → Trinity auto → Arcane Shift (E) to reposition → Mystic Shot (Q)."],
    },
    matchups: {
      good: {
        es: ["Duplas sin enganche que te dejan pokear.", "Comps inmóviles que no esquivan tus disparos."],
        en: ["Duos without engage who let you poke.", "Immobile comps who can't dodge your shots."],
      },
      bad: {
        es: ["Duplas de all-in fuerte temprano.", "Equipos con mucha movilidad que esquivan el Disparo Místico."],
        en: ["Strong early all-in duos.", "Highly mobile teams who dodge Mystic Shot."],
      },
    },
    plan: {
      es: "En línea farmeá con el Disparo Místico y pokeá al enemigo cuando tenga minions cerca de él. Con Manamune y Trinity, tu poke se vuelve constante. En peleas pokeá desde atrás antes del inicio y usá el Cambio Arcano para esquivar o reposicionar, nunca para entrar.",
      en: "In lane farm with Mystic Shot and poke the enemy when no minions block. With Manamune and Trinity your poke becomes constant. In fights poke from the back before the engage and use Arcane Shift to dodge or reposition, never to dive.",
    },
    tips: {
      es: ["Usá la Ráfaga Trascendente para limpiar oleadas lejanas o rematar en otras líneas.", "Intercalá autos entre los Disparos para aprovechar el proc de Trinity."],
      en: ["Use Trueshot Barrage to clear distant waves or finish kills in other lanes.", "Weave autos between shots to use the Trinity proc."],
    },
  },
  "missfortune-adc": {
    strengths: {
      es: [
        "Doble Impacto (Q) rebota al enemigo detrás del minion: poke fuerte en línea.",
        "Lluvia de Balas (E) ralentiza en área y revela zonas.",
        "Disparos Impuros (W) da velocidad de ataque y reduce las curaciones enemigas.",
        "Bombardeo (R) hace un daño de área enorme en peleas agrupadas.",
      ],
      en: [
        "Double Up (Q) bounces to the enemy behind the minion: strong lane poke.",
        "Make It Rain (E) slows an area and reveals zones.",
        "Impure Shots (W) gives attack speed and reduces enemy healing.",
        "Bullet Time (R) deals huge area damage in grouped fights.",
      ],
    },
    weaknesses: {
      es: [
        "Sin escape más allá de la velocidad de la pasiva.",
        "El Bombardeo se interrumpe con cualquier CC.",
        "Contra equipos dispersos, el ulti pierde valor.",
        "Frágil contra dive.",
      ],
      en: [
        "No escape beyond the passive's speed.",
        "Bullet Time is interrupted by any CC.",
        "Against spread-out teams, the ult loses value.",
        "Fragile against dive.",
      ],
    },
    combos: {
      es: ["Lluvia de Balas (E) sobre el grupo enemigo → Doble Impacto (Q) → Bombardeo (R) mientras están ralentizados."],
      en: ["Make It Rain (E) on the enemy group → Double Up (Q) → Bullet Time (R) while they're slowed."],
    },
    matchups: {
      good: {
        es: ["Equipos agrupados para el Bombardeo.", "Duplas con curaciones (Soraka, Sona) que tus Disparos Impuros anulan."],
        en: ["Grouped teams for Bullet Time.", "Healing duos (Soraka, Sona) countered by Impure Shots."],
      },
      bad: {
        es: ["Equipos con mucho CC que cortan tu ulti.", "Asesinos con dash."],
        en: ["CC-heavy teams who cancel your ult.", "Dash assassins."],
      },
    },
    plan: {
      es: "En línea pokeá con el Doble Impacto rebotando desde los minions y buscá intercambios agresivos. En el medio juego empujá con tu dupla y presioná torres. En peleas buscá el ángulo para tirar el Bombardeo sobre todo el equipo enemigo desde un lugar seguro.",
      en: "In lane poke with Double Up bouncing off minions and look for aggressive trades. In midgame push with your duo and pressure towers. In fights look for the angle to channel Bullet Time on the whole enemy team from a safe spot.",
    },
    tips: {
      es: ["Usá la Lluvia de Balas antes del ulti para que el enemigo no salga del área.", "Esperá a que el CC enemigo esté gastado antes de canalizar el Bombardeo."],
      en: ["Use Make It Rain before your ult so the enemy can't leave the area.", "Wait for enemy CC to be used before channeling Bullet Time."],
    },
  },
  "tristana-adc": {
    strengths: {
      es: [
        "La pasiva aumenta el rango de ataque con cada nivel: en el late pegás desde muy lejos.",
        "Salto de Cohete (W) se reinicia con kills y asistencias: limpiás peleas enteras.",
        "Carga Explosiva (E) reduce las curaciones enemigas y explota al matar.",
        "Disparo de Culata (R) aleja a cualquiera que se meta sobre vos.",
      ],
      en: [
        "The passive increases attack range every level: late game you hit from very far.",
        "Rocket Jump (W) resets on kills and assists: you clean up whole fights.",
        "Explosive Shot (E) reduces enemy healing and explodes on kills.",
        "Buster Shot (R) knocks back anyone who dives you.",
      ],
    },
    weaknesses: {
      es: [
        "Rango corto en los primeros niveles.",
        "Si usás el Salto para entrar, te quedás sin escape.",
        "Sin CC salvo el Disparo de Culata.",
        "Las duplas de poke te castigan antes de crecer.",
      ],
      en: [
        "Short range at early levels.",
        "If you use Rocket Jump to dive, you have no escape left.",
        "No CC besides Buster Shot.",
        "Poke duos punish you before you scale.",
      ],
    },
    combos: {
      es: ["Fuego Rápido (Q) → autos → Salto de Cohete (W) sobre el objetivo bajo → reinicio del Salto con la kill → Disparo de Culata (R) para alejar al siguiente."],
      en: ["Rapid Fire (Q) → autos → Rocket Jump (W) onto a low target → Jump reset on the kill → Buster Shot (R) to push away the next one."],
    },
    matchups: {
      good: {
        es: ["ADC de corto rango en el late game.", "Equipos con curaciones que tu E reduce."],
        en: ["Short-range ADCs in the late game.", "Healing teams countered by your E."],
      },
      bad: {
        es: ["Duplas de poke temprano.", "Equipos con mucho CC que te frenan en el aire."],
        en: ["Early poke duos.", "CC-heavy teams who stop you mid-jump."],
      },
    },
    plan: {
      es: "Farmeá seguro hasta que tu rango crezca y tengas IE. En el medio juego empujá torres con tu rango. En peleas quedate atrás pegando y guardá el Salto para escapar o para limpiar cuando haya kills; el Disparo de Culata es tu herramienta defensiva.",
      en: "Farm safely until your range grows and you have IE. In midgame push towers with your range. In fights stay back hitting and save Rocket Jump to escape or clean up when there are kills; Buster Shot is your defensive tool.",
    },
    tips: {
      es: ["Usá el Disparo de Culata para mandar al enemigo hacia tu equipo, no lejos de él.", "No uses el Salto para entrar salvo que el objetivo esté casi muerto."],
      en: ["Use Buster Shot to send the enemy toward your team, not away from it.", "Don't jump in unless the target is almost dead."],
    },
  },
  "graves-adc": {
    strengths: {
      es: [
        "Descarga (Q) a corta distancia pega un burst brutal.",
        "La pasiva te da armadura y resistencia mágica mientras peleás.",
        "Movimiento Rápido (E) es un dash que da velocidad de ataque.",
        "Colisión (R) explota en cono y remata a varios enemigos.",
      ],
      en: [
        "Buckshot (Q) at close range deals brutal burst.",
        "The passive gives armor and magic resist while fighting.",
        "Quickdraw (E) is a dash that gives attack speed.",
        "Collateral Damage (R) explodes in a cone and finishes several enemies.",
      ],
    },
    weaknesses: {
      es: [
        "Rango de ataque corto para un ADC.",
        "Necesitás estar cerca para el burst de Descarga.",
        "Cae en el late game frente a los hipercarries.",
        "Contra duplas de largo rango, te pokean antes de acercarte.",
      ],
      en: [
        "Short attack range for an ADC.",
        "You need to be close for Buckshot's burst.",
        "Falls off late game against hypercarries.",
        "Long-range duos poke you before you close in.",
      ],
    },
    combos: {
      es: ["Movimiento Rápido (E) para acercarte → Descarga (Q) a quemarropa → autos → Colisión (R) para rematar."],
      en: ["Quickdraw (E) to close in → point-blank Buckshot (Q) → autos → Collateral Damage (R) to finish."],
    },
    matchups: {
      good: {
        es: ["ADC frágiles en la fase de línea.", "Duplas pasivas que no castigan tu agresividad."],
        en: ["Squishy ADCs in lane.", "Passive duos who don't punish your aggression."],
      },
      bad: {
        es: ["Duplas de largo rango (Caitlyn).", "Hipercarries que te superan en el late."],
        en: ["Long-range duos (Caitlyn).", "Hypercarries who outscale you late."],
      },
    },
    plan: {
      es: "Sé agresivo en la línea: Descarga y autos te ganan casi todos los intercambios. Usá la ventaja temprana para tomar torres y dragones. En peleas usá la Cortina de Humo (W) para cegar al enemigo y buscá el burst sobre el carry más cercano.",
      en: "Be aggressive in lane: Buckshot and autos win almost every trade. Use your early lead to take towers and dragons. In fights use Smoke Screen (W) to blind the enemy and look for burst on the closest carry.",
    },
    tips: {
      es: ["Cada auto baja el cooldown del Movimiento Rápido: pegá para tenerlo listo.", "La Descarga pega más si todas las balas tocan al objetivo: acercate."],
      en: ["Each auto lowers Quickdraw's cooldown: keep hitting to have it ready.", "Buckshot hits harder when all pellets connect: get close."],
    },
  },
  "urgot-adc": {
    strengths: {
      es: [
        "Cazador Ácido (Q) se dirige solo al objetivo marcado: poke constante sin apuntar.",
        "Carga Corrosiva Noxiana (E) baja la armadura del enemigo.",
        "Capacitor de Terror (W) te da escudo y hace que tus golpes ralenticen.",
        "El Intercambio de Posición (R) suprime e intercambia lugares con un enemigo.",
      ],
      en: [
        "Acid Hunter (Q) locks onto the marked target: constant poke without aiming.",
        "Noxian Corrosive Charge (E) lowers the enemy's armor.",
        "Terror Capacitor (W) gives a shield and makes your hits slow.",
        "Position Reverser (R) suppresses and swaps places with an enemy.",
      ],
    },
    weaknesses: {
      es: [
        "Sin escape.",
        "Si fallás la Carga, tu poke pierde valor.",
        "El ulti te deja en el medio del equipo enemigo.",
        "Rango corto para un ADC.",
      ],
      en: [
        "No escape.",
        "If you miss the Charge, your poke loses value.",
        "The ult leaves you in the middle of the enemy team.",
        "Short range for an ADC.",
      ],
    },
    combos: {
      es: ["Carga Corrosiva Noxiana (E) → Cazador Ácido (Q) varias veces → Capacitor de Terror (W) si te alcanzan."],
      en: ["Noxian Corrosive Charge (E) → Acid Hunter (Q) several times → Terror Capacitor (W) if they reach you."],
    },
    matchups: {
      good: {
        es: ["ADC de corto rango que no esquivan tu poke.", "Duplas sin enganche fuerte."],
        en: ["Short-range ADCs who can't dodge your poke.", "Duos without strong engage."],
      },
      bad: {
        es: ["Duplas de all-in con mucho CC.", "ADC de largo rango que te pokean."],
        en: ["All-in duos with lots of CC.", "Long-range ADCs who poke you."],
      },
    },
    plan: {
      es: "En línea marcá con la Carga y pokeá con el Cazador Ácido; apilá la Manamune con el spam. En el medio juego, Frozen Heart y Randuin te vuelven un ADC difícil de matar. En peleas pokeá antes del inicio y buscá el intercambio del ulti para traer al carry enemigo a tu equipo.",
      en: "In lane mark with the Charge and poke with Acid Hunter; stack Manamune with the spam. In midgame, Frozen Heart and Randuin's make you a hard-to-kill ADC. In fights poke before the engage and look for the ult swap to bring the enemy carry into your team.",
    },
    tips: {
      es: ["Usá el ulti cerca de tu torre o de tu equipo.", "Activá el Capacitor antes de un all-in para el escudo."],
      en: ["Use your ult near your tower or team.", "Activate Terror Capacitor before an all-in for the shield."],
    },
  },
};

export function detailsFor(slug) {
  return buildDetails[slug] || null;
}
