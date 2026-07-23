// League of Legends Classic (Season 3) — builds NO convencionales, una por campeón.
// NON-conventional builds, one per champion. Bilingual (es / en).
// lane codes: top | jungle | mid | adc | support
// tier: "meme" (pura joda) | "sleeper" (sorprende) | "viable" (raro pero funciona)

export const champions = [
  {
    slug: "ahri", name: "Ahri", origRole: "Mid AP",
    lane: "support", tier: "sleeper",
    title: { es: "Soporte encantador", en: "Charm Support" },
    build: {
      name: { es: "Ahri Support poke-burst", en: "Poke-Burst Support Ahri" },
      items: ["Athene's Unholy Grail", "Sightstone", "Deathfire Grasp", "Sorcerer's Shoes", "Rylai's Crystal Scepter"],
      masteries: { es: "9/0/21 — Utilidad (regen maná + movilidad)", en: "9/0/21 — Utility (mana regen + movement)" },
      runes: { es: "Penetración mágica, MR/nivel, quints de AP plano", en: "Magic pen marks, MR/level glyphs, flat AP quints" },
      summoners: ["Flash", "Exhaust"],
      playstyle: { es: "Zoneás con Orbe y Fuego Feérico; el Encanto asegura el all-in del ADC y con DFG borrás al carry enemigo.", en: "Zone with Orb and Fox-Fire; Charm locks the ADC's all-in and DFG deletes the enemy carry." }
    }
  },
  {
    slug: "alistar", name: "Alistar", origRole: "Support Tank",
    lane: "mid", tier: "meme",
    title: { es: "Toro nuclear", en: "Nuclear Bull" },
    build: {
      name: { es: "AP Alistar Mid", en: "AP Alistar Mid" },
      items: ["Deathfire Grasp", "Rabadon's Deathcap", "Rylai's Crystal Scepter", "Zhonya's Hourglass", "Sorcerer's Shoes"],
      masteries: { es: "21/0/9 — Ofensiva (Havoc + Archmage)", en: "21/0/9 — Offense (Havoc + Archmage)" },
      runes: { es: "Pen mágica, armadura, quints de AP", en: "Magic pen, armor seals, AP quints" },
      summoners: ["Flash", "Ignite"],
      playstyle: { es: "Combo Cabezazo + Aplastar con AP hace daño real; con DFG el toro one-shotea magos escuálidos.", en: "Headbutt + Pulverize combo hits like a truck on AP; DFG lets the bull one-shot squishy mages." }
    }
  },
  {
    slug: "amumu", name: "Amumu", origRole: "Jungle Tank",
    lane: "mid", tier: "sleeper",
    title: { es: "Momia mágica", en: "Magic Mummy" },
    build: {
      name: { es: "AP Amumu Mid", en: "AP Amumu Mid" },
      items: ["Deathfire Grasp", "Liandry's Torment", "Rylai's Crystal Scepter", "Void Staff", "Sorcerer's Shoes"],
      masteries: { es: "21/0/9 — Ofensiva", en: "21/0/9 — Offense" },
      runes: { es: "Pen mágica, MR/nivel, quints de AP", en: "Magic pen, MR/level, AP quints" },
      summoners: ["Flash", "Ignite"],
      playstyle: { es: "Vendaje para engage, Maldición ulti y con Liandry + DFG el combo borra a todo el equipo enemigo.", en: "Bandage Toss to engage, ult, and Liandry + DFG makes the full combo melt the whole enemy team." }
    }
  },
  {
    slug: "anivia", name: "Anivia", origRole: "Mid Control",
    lane: "support", tier: "sleeper",
    title: { es: "Muro con alas", en: "Winged Wall" },
    build: {
      name: { es: "Anivia Support muralla", en: "Wall Support Anivia" },
      items: ["Sightstone", "Athene's Unholy Grail", "Rylai's Crystal Scepter", "Sorcerer's Shoes", "Frost Queen's Claim"],
      masteries: { es: "9/0/21 — Utilidad", en: "9/0/21 — Utility" },
      runes: { es: "Pen mágica, regen maná, quints de movilidad", en: "Magic pen, mana regen, movement quints" },
      summoners: ["Flash", "Exhaust"],
      playstyle: { es: "El Muro de Hielo parte peleas y protege al ADC; Escarcha + Q stunea y el Huevo te hace inmortal en línea.", en: "Crystallize splits fights and peels the ADC; Frostbite + Q stuns and the Egg makes you unkillable in lane." }
    }
  },
  {
    slug: "annie", name: "Annie", origRole: "Mid Burst",
    lane: "support", tier: "viable",
    title: { es: "Niña con oso", en: "Girl With a Bear" },
    build: {
      name: { es: "Annie Support stun", en: "Stun Support Annie" },
      items: ["Sightstone", "Deathfire Grasp", "Rylai's Crystal Scepter", "Sorcerer's Shoes", "Rabadon's Deathcap"],
      masteries: { es: "21/0/9 — Ofensiva", en: "21/0/9 — Offense" },
      runes: { es: "Pen mágica, armadura, quints de AP", en: "Magic pen, armor, AP quints" },
      summoners: ["Flash", "Ignite"],
      playstyle: { es: "Guardás Aturdimiento con la pasiva y soltás Tibbers + DFG para asegurar cada kill en bot.", en: "Stack your stun passive, then drop Tibbers + DFG to guarantee every kill in bot lane." }
    }
  },
  {
    slug: "ashe", name: "Ashe", origRole: "ADC",
    lane: "support", tier: "sleeper",
    title: { es: "Arquera utilitaria", en: "Utility Archer" },
    build: {
      name: { es: "Ashe Support visión + slow", en: "Vision + Slow Support Ashe" },
      items: ["Sightstone", "Frost Queen's Claim", "Frozen Mallet", "Boots of Mobility", "Randuin's Omen"],
      masteries: { es: "0/9/21 — Utilidad/Defensa", en: "0/9/21 — Utility/Defense" },
      runes: { es: "AD, armadura, quints de velocidad de ataque", en: "AD marks, armor, attack speed quints" },
      summoners: ["Flash", "Exhaust"],
      playstyle: { es: "Poke con Disparo Certero, Halcón para visión gratis y la Flecha Encantada abre peleas desde fog.", en: "Poke with Frost Shot, Hawkshot for free vision, and Enchanted Crystal Arrow opens fights from fog." }
    }
  },
  {
    slug: "blitzcrank", name: "Blitzcrank", origRole: "Support",
    lane: "mid", tier: "meme",
    title: { es: "Robot cuántico", en: "Quantum Robot" },
    build: {
      name: { es: "AP Blitzcrank Mid", en: "AP Blitzcrank Mid" },
      items: ["Deathfire Grasp", "Rabadon's Deathcap", "Rylai's Crystal Scepter", "Sorcerer's Shoes", "Zhonya's Hourglass"],
      masteries: { es: "21/0/9 — Ofensiva", en: "21/0/9 — Offense" },
      runes: { es: "Pen mágica, MR/nivel, quints de AP", en: "Magic pen, MR/level, AP quints" },
      summoners: ["Flash", "Ignite"],
      playstyle: { es: "Agarre + Puño + Explosión estática con AP hace un burst brutal; el Escudo de Maná te vuelve un cíborg terco.", en: "Grab + Power Fist + Static Field on AP is a massive burst; Mana Barrier makes you a stubborn cyborg." }
    }
  },
  {
    slug: "brand", name: "Brand", origRole: "Mid/Support Mage",
    lane: "jungle", tier: "sleeper",
    title: { es: "Fuego en la selva", en: "Jungle Wildfire" },
    build: {
      name: { es: "Brand Jungla", en: "Jungle Brand" },
      items: ["Spirit of the Spectral Wraith", "Liandry's Torment", "Rylai's Crystal Scepter", "Sorcerer's Shoes", "Void Staff"],
      masteries: { es: "21/9/0 — Ofensiva/Defensa", en: "21/9/0 — Offense/Defense" },
      runes: { es: "Pen mágica, armadura, quints de AP", en: "Magic pen, armor, AP quints" },
      summoners: ["Flash", "Smite"],
      playstyle: { es: "La pasiva de quemadura limpia campamentos rápido y los ganks con Pilar de Fuego + stun son mortales.", en: "The burn passive clears camps fast and Pillar of Flame + stun ganks are lethal." }
    }
  },
  {
    slug: "chogath", name: "Cho'Gath", origRole: "Top/Mid Tank",
    lane: "mid", tier: "sleeper",
    title: { es: "Devorador arcano", en: "Arcane Devourer" },
    build: {
      name: { es: "AP Cho'Gath Mid", en: "AP Cho'Gath Mid" },
      items: ["Deathfire Grasp", "Rabadon's Deathcap", "Rylai's Crystal Scepter", "Void Staff", "Sorcerer's Shoes"],
      masteries: { es: "21/9/0 — Ofensiva", en: "21/9/0 — Offense" },
      runes: { es: "Pen mágica, salud, quints de AP", en: "Magic pen, health seals, AP quints" },
      summoners: ["Flash", "Ignite"],
      playstyle: { es: "Ruptura + Grito Vorpal con AP borran oleadas; Festín sigue siendo ejecución real y quedás gigante.", en: "Rupture + Vorpal Spikes on AP shred waves; Feast still true-damage executes and you stay a giant." }
    }
  },
  {
    slug: "drmundo", name: "Dr. Mundo", origRole: "Top/Jungle Tank",
    lane: "mid", tier: "meme",
    title: { es: "Doctor loco", en: "Mad Doctor" },
    build: {
      name: { es: "AP Mundo Mid", en: "AP Mundo Mid" },
      items: ["Liandry's Torment", "Rylai's Crystal Scepter", "Rabadon's Deathcap", "Sorcerer's Shoes", "Void Staff"],
      masteries: { es: "21/9/0 — Ofensiva", en: "21/9/0 — Offense" },
      runes: { es: "Pen mágica, salud, quints de AP", en: "Magic pen, health, AP quints" },
      summoners: ["Flash", "Teleport"],
      playstyle: { es: "El Cuchillo escala con AP y hace un poke absurdo; Rylai + Liandry vuelven a Mundo un imposible de matar que quema.", en: "The Cleaver scales with AP for absurd poke; Rylai + Liandry make Mundo an unkillable burning menace." }
    }
  },
  {
    slug: "evelynn", name: "Evelynn", origRole: "Jungle AP Assassin",
    lane: "jungle", tier: "sleeper",
    title: { es: "Viuda invisible", en: "Invisible Widow" },
    build: {
      name: { es: "AD On-hit Evelynn", en: "On-hit AD Evelynn" },
      items: ["Blade of the Ruined King", "Trinity Force", "Wit's End", "Mercury's Treads", "Frozen Mallet"],
      masteries: { es: "21/9/0 — Ofensiva", en: "21/9/0 — Offense" },
      runes: { es: "AD, armadura, quints de velocidad de ataque", en: "AD marks, armor, attack speed quints" },
      summoners: ["Flash", "Smite"],
      playstyle: { es: "Sale del stealth con Trinity + Blade pegando on-hit brutal; en vez de burst puro, DPS sostenido que nadie ve venir.", en: "Comes out of stealth with Trinity + Blade for brutal on-hit; not pure burst but sustained DPS nobody sees coming." }
    }
  },
  {
    slug: "ezreal", name: "Ezreal", origRole: "ADC",
    lane: "mid", tier: "viable",
    title: { es: "Explorador arcano", en: "Arcane Explorer" },
    build: {
      name: { es: "AP Ezreal Mid", en: "AP Ezreal Mid" },
      items: ["Iceborn Gauntlet", "Lich Bane", "Rabadon's Deathcap", "Void Staff", "Sorcerer's Shoes"],
      masteries: { es: "21/0/9 — Ofensiva", en: "21/0/9 — Offense" },
      runes: { es: "Pen mágica, MR/nivel, quints de AP", en: "Magic pen, MR/level, AP quints" },
      summoners: ["Flash", "Ignite"],
      playstyle: { es: "Disparo Místico + Lich Bane pega como camión y el ulti hace poke global; movilidad infinita con Cambio Arcano.", en: "Mystic Shot + Lich Bane hits like a truck and the ult pokes globally; infinite mobility with Arcane Shift." }
    }
  },
  {
    slug: "fiddlesticks", name: "Fiddlesticks", origRole: "Jungle/Support AP",
    lane: "support", tier: "viable",
    title: { es: "Espantapájaros aterrador", en: "Terror Scarecrow" },
    build: {
      name: { es: "Fiddle Support drena-miedo", en: "Drain-Fear Support Fiddle" },
      items: ["Sightstone", "Athene's Unholy Grail", "Rylai's Crystal Scepter", "Sorcerer's Shoes", "Zhonya's Hourglass"],
      masteries: { es: "9/0/21 — Utilidad", en: "9/0/21 — Utility" },
      runes: { es: "Pen mágica, regen maná, quints de AP", en: "Magic pen, mana regen, AP quints" },
      summoners: ["Flash", "Exhaust"],
      playstyle: { es: "Miedo bloquea al ADC enemigo, Drenar te cura en línea y el Cuervódromo con Flash da teamfights ganadas.", en: "Fear locks the enemy ADC, Drain sustains you in lane, and Flash-Crowstorm wins teamfights outright." }
    }
  },
  {
    slug: "gangplank", name: "Gangplank", origRole: "Top AD Crit",
    lane: "mid", tier: "meme",
    title: { es: "Pirata hechicero", en: "Sorcerer Pirate" },
    build: {
      name: { es: "AP Gangplank Mid (¡el clásico troll!)", en: "AP Gangplank Mid (the classic troll!)" },
      items: ["Lich Bane", "Rabadon's Deathcap", "Deathfire Grasp", "Sorcerer's Shoes", "Rylai's Crystal Scepter"],
      masteries: { es: "21/0/9 — Ofensiva", en: "21/0/9 — Offense" },
      runes: { es: "Pen mágica, armadura, quints de AP", en: "Magic pen, armor, AP quints" },
      summoners: ["Flash", "Ignite"],
      playstyle: { es: "Cañonazo + Lich Bane pega poke sorpresa, las Naranjas limpian CC y el ulti global castiga todo el mapa. Build meme legendaria.", en: "Parrrley + Lich Bane pokes hard, Oranges cleanse CC, and the global ult punishes the whole map. Legendary meme build." }
    }
  },
  {
    slug: "garen", name: "Garen", origRole: "Top Bruiser",
    lane: "top", tier: "meme",
    title: { es: "Girando para ganar", en: "Spin to Win" },
    build: {
      name: { es: "Garen Crítico", en: "Crit Garen" },
      items: ["Infinity Edge", "Phantom Dancer", "The Bloodthirster", "Atma's Impaler", "Warmog's Armor"],
      masteries: { es: "21/9/0 — Ofensiva", en: "21/9/0 — Offense" },
      runes: { es: "AD, armadura, quints de AD", en: "AD marks, armor, AD quints" },
      summoners: ["Flash", "Teleport"],
      playstyle: { es: "Warmog + Atma da salud enorme convertida en AD, y Juicio con críticos de IE + PD hace picadora de carne.", en: "Warmog + Atma turns huge health into AD, and Judgment critting with IE + PD becomes a blender." }
    }
  },
  {
    slug: "gragas", name: "Gragas", origRole: "Mid/Top AP",
    lane: "support", tier: "sleeper",
    title: { es: "Barril andante", en: "Rolling Barrel" },
    build: {
      name: { es: "Gragas Support engage", en: "Engage Support Gragas" },
      items: ["Sightstone", "Iceborn Gauntlet", "Rylai's Crystal Scepter", "Mercury's Treads", "Randuin's Omen"],
      masteries: { es: "0/9/21 — Defensa/Utilidad", en: "0/9/21 — Defense/Utility" },
      runes: { es: "Armadura, MR/nivel, quints de salud", en: "Armor, MR/level, health quints" },
      summoners: ["Flash", "Exhaust"],
      playstyle: { es: "Golpe de Cuerpo hace engage, el ulti reposiciona enemigos hacia tu equipo y el Barril da poke y peel.", en: "Body Slam engages, the ult knocks enemies into your team, and the Barrel gives poke and peel." }
    }
  },
  {
    slug: "graves", name: "Graves", origRole: "ADC (old cigar)",
    lane: "mid", tier: "sleeper",
    title: { es: "Forajido de medio", en: "Mid Outlaw" },
    build: {
      name: { es: "Graves Mid ráfaga", en: "Burst Mid Graves" },
      items: ["The Black Cleaver", "Youmuu's Ghostblade", "Infinity Edge", "The Bloodthirster", "Mercury's Treads"],
      masteries: { es: "21/9/0 — Ofensiva", en: "21/9/0 — Offense" },
      runes: { es: "AD, armadura, quints de AD", en: "AD marks, armor, AD quints" },
      summoners: ["Flash", "Ignite"],
      playstyle: { es: "Buckshot a corta distancia rompe al mago rival; Cleaver + Youmuu te dan burst de asesino con la resistencia de la pasiva.", en: "Point-blank Buckshot shreds the enemy mage; Cleaver + Youmuu give assassin burst with the passive's tankiness." }
    }
  },
  {
    slug: "heimerdinger", name: "Heimerdinger", origRole: "Mid/Top Zone",
    lane: "support", tier: "meme",
    title: { es: "Inventor molesto", en: "Annoying Inventor" },
    build: {
      name: { es: "Heimer Support torretas", en: "Turret Support Heimer" },
      items: ["Sightstone", "Athene's Unholy Grail", "Rylai's Crystal Scepter", "Sorcerer's Shoes", "Liandry's Torment"],
      masteries: { es: "9/0/21 — Utilidad", en: "9/0/21 — Utility" },
      runes: { es: "Pen mágica, regen maná, quints de AP", en: "Magic pen, mana regen, AP quints" },
      summoners: ["Flash", "Exhaust"],
      playstyle: { es: "Las torretas zonifican todo el bot lane, el Misil Aturdidor CC-ea y hacés la línea imposible de jugar.", en: "Turrets zone the whole bot lane, the Stun Grenade CCs, and you make the lane miserable to play." }
    }
  },
  {
    slug: "janna", name: "Janna", origRole: "Support",
    lane: "support", tier: "sleeper",
    title: { es: "Tormenta ofensiva", en: "Offensive Storm" },
    build: {
      name: { es: "AP Janna Support carry", en: "AP Carry Support Janna" },
      items: ["Sightstone", "Athene's Unholy Grail", "Rabadon's Deathcap", "Sorcerer's Shoes", "Deathfire Grasp"],
      masteries: { es: "21/0/9 — Ofensiva", en: "21/0/9 — Offense" },
      runes: { es: "Pen mágica, regen maná, quints de AP", en: "Magic pen, mana regen, AP quints" },
      summoners: ["Flash", "Ignite"],
      playstyle: { es: "El Tornado con AP pega un poke enorme, el escudo suma daño al ADC y seguís teniendo el mejor peel del juego.", en: "Tornado on AP pokes hard, the shield adds damage to the ADC, and you still have the best peel in the game." }
    }
  },
  {
    slug: "jarvan", name: "Jarvan IV", origRole: "Jungle/Top",
    lane: "support", tier: "viable",
    title: { es: "Príncipe de apoyo", en: "Support Prince" },
    build: {
      name: { es: "Jarvan Support engage", en: "Engage Support Jarvan" },
      items: ["Sightstone", "Iceborn Gauntlet", "Randuin's Omen", "Mercury's Treads", "Sunfire Cape"],
      masteries: { es: "0/9/21 — Defensa/Utilidad", en: "0/9/21 — Defense/Utility" },
      runes: { es: "Armadura, MR/nivel, quints de salud", en: "Armor, MR/level, health quints" },
      summoners: ["Flash", "Exhaust"],
      playstyle: { es: "Bandera + Estocada hace un knock-up garantizado y el ulti aísla al carry enemigo para tu ADC.", en: "Flag + Drag guarantees a knock-up and the ult isolates the enemy carry for your ADC." }
    }
  },
  {
    slug: "jax", name: "Jax", origRole: "Top/Jungle Bruiser",
    lane: "top", tier: "viable",
    title: { es: "Maestro de armas mágico", en: "Magic Weaponmaster" },
    build: {
      name: { es: "AP Jax Top", en: "AP Jax Top" },
      items: ["Guinsoo's Rageblade", "Lich Bane", "Nashor's Tooth", "Zhonya's Hourglass", "Sorcerer's Shoes"],
      masteries: { es: "21/9/0 — Ofensiva", en: "21/9/0 — Offense" },
      runes: { es: "Pen mágica, armadura, quints de AP", en: "Magic pen, armor, AP quints" },
      summoners: ["Flash", "Teleport"],
      playstyle: { es: "Salto + Empoderar con Lich Bane pega burst enorme; Contraataque stunea y Guinsoo + Nashor dan DPS híbrido.", en: "Leap + Empower with Lich Bane bursts hard; Counter Strike stuns and Guinsoo + Nashor give hybrid DPS." }
    }
  },
  {
    slug: "karthus", name: "Karthus", origRole: "Mid AP",
    lane: "jungle", tier: "sleeper",
    title: { es: "Segador de la selva", en: "Jungle Reaper" },
    build: {
      name: { es: "Karthus Jungla (clásico S3)", en: "Jungle Karthus (S3 classic)" },
      items: ["Spirit of the Ancient Golem", "Rod of Ages", "Rylai's Crystal Scepter", "Void Staff", "Sorcerer's Shoes"],
      masteries: { es: "21/9/0 — Ofensiva", en: "21/9/0 — Offense" },
      runes: { es: "Pen mágica, armadura, quints de AP", en: "Magic pen, armor, AP quints" },
      summoners: ["Flash", "Smite"],
      playstyle: { es: "Muro + E limpian campamentos gratis, ganks con slow y Réquiem global remata desde cualquier parte del mapa.", en: "Wall + E clear camps for free, ganks with the slow, and global Requiem finishes kills from anywhere." }
    }
  },
  {
    slug: "kassadin", name: "Kassadin", origRole: "Mid Assassin",
    lane: "top", tier: "sleeper",
    title: { es: "Caminante del vacío", en: "Void Walker" },
    build: {
      name: { es: "AP Kassadin Top", en: "AP Kassadin Top" },
      items: ["Rod of Ages", "Rylai's Crystal Scepter", "Rabadon's Deathcap", "Void Staff", "Mercury's Treads"],
      masteries: { es: "21/0/9 — Ofensiva", en: "21/0/9 — Offense" },
      runes: { es: "Pen mágica, salud, quints de AP", en: "Magic pen, health, AP quints" },
      summoners: ["Flash", "Teleport"],
      playstyle: { es: "El Escudo Nula anula a los tops magos y te vuelve un matón; Salto Errático post-nivel 6 te hace imparable en splitpush.", en: "Null Sphere shield bullies mage tops; Riftwalk after 6 makes you an unstoppable split-pusher." }
    }
  },
  {
    slug: "katarina", name: "Katarina", origRole: "Mid Assassin",
    lane: "jungle", tier: "viable",
    title: { es: "Cuchilla itinerante", en: "Roaming Blade" },
    build: {
      name: { es: "Katarina Jungla", en: "Jungle Katarina" },
      items: ["Spirit of the Spectral Wraith", "Hextech Gunblade", "Rabadon's Deathcap", "Zhonya's Hourglass", "Sorcerer's Shoes"],
      masteries: { es: "21/9/0 — Ofensiva", en: "21/9/0 — Offense" },
      runes: { es: "Pen mágica, armadura, quints de AP", en: "Magic pen, armor, AP quints" },
      summoners: ["Flash", "Smite"],
      playstyle: { es: "Shunpo entre campamentos limpia rápido y los ganks con Guillotina resetean cooldowns si consigues kills.", en: "Shunpo between camps clears fast and Death Lotus ganks reset your cooldowns on kills." }
    }
  },
  {
    slug: "kayle", name: "Kayle", origRole: "Top/Mid Hybrid",
    lane: "support", tier: "sleeper",
    title: { es: "Ángel guardián", en: "Guardian Angel" },
    build: {
      name: { es: "Kayle Support peel", en: "Peel Support Kayle" },
      items: ["Sightstone", "Athene's Unholy Grail", "Nashor's Tooth", "Sorcerer's Shoes", "Zhonya's Hourglass"],
      masteries: { es: "9/0/21 — Utilidad", en: "9/0/21 — Utility" },
      runes: { es: "Pen mágica, regen maná, quints de AP", en: "Magic pen, mana regen, AP quints" },
      summoners: ["Flash", "Exhaust"],
      playstyle: { es: "Ralentización + Reactivación dan poke y sustain en línea, y el ulti de invulnerabilidad salva al ADC en el momento justo.", en: "Slow + Reactivation give poke and sustain, and the invulnerability ult saves the ADC at the perfect moment." }
    }
  },
  {
    slug: "kogmaw", name: "Kog'Maw", origRole: "ADC",
    lane: "mid", tier: "sleeper",
    title: { es: "Artillería viviente", en: "Living Artillery" },
    build: {
      name: { es: "AP Kog'Maw Mid", en: "AP Kog'Maw Mid" },
      items: ["Rod of Ages", "Rabadon's Deathcap", "Void Staff", "Rylai's Crystal Scepter", "Sorcerer's Shoes"],
      masteries: { es: "21/0/9 — Ofensiva", en: "21/0/9 — Offense" },
      runes: { es: "Pen mágica, MR/nivel, quints de AP", en: "Magic pen, MR/level, AP quints" },
      summoners: ["Flash", "Barrier"],
      playstyle: { es: "Artillería Viviente hace poke infinito a rango absurdo; Vómito Corrosivo baja resistencias y la pasiva castiga a quien te mate.", en: "Living Artillery pokes endlessly at absurd range; Void Ooze shreds MR and the passive punishes whoever kills you." }
    }
  },
  {
    slug: "leesin", name: "Lee Sin", origRole: "Jungle",
    lane: "support", tier: "viable",
    title: { es: "Monje errante", en: "Wandering Monk" },
    build: {
      name: { es: "Lee Sin Support insec", en: "Insec Support Lee Sin" },
      items: ["Sightstone", "Iceborn Gauntlet", "Frozen Mallet", "Mercury's Treads", "Randuin's Omen"],
      masteries: { es: "0/9/21 — Defensa/Utilidad", en: "0/9/21 — Defense/Utility" },
      runes: { es: "Armadura, MR/nivel, quints de salud", en: "Armor, MR/level, health quints" },
      summoners: ["Flash", "Exhaust"],
      playstyle: { es: "Ward-hop para engage sorpresa, Q+Q para enganchar y el ulti (insec) manda al carry enemigo directo a tu equipo.", en: "Ward-hop for surprise engages, Q+Q to stick, and the insec ult kicks the enemy carry into your team." }
    }
  },
  {
    slug: "leona", name: "Leona", origRole: "Support Tank",
    lane: "jungle", tier: "viable",
    title: { es: "Amanecer en la selva", en: "Jungle Dawn" },
    build: {
      name: { es: "Leona Jungla dive", en: "Dive Jungle Leona" },
      items: ["Spirit of the Ancient Golem", "Sunfire Cape", "Randuin's Omen", "Mercury's Treads", "Iceborn Gauntlet"],
      masteries: { es: "0/21/9 — Defensa", en: "0/21/9 — Defense" },
      runes: { es: "Armadura, MR/nivel, quints de salud", en: "Armor, MR/level, health quints" },
      summoners: ["Flash", "Smite"],
      playstyle: { es: "Cadena de CC (E + Q + ulti) hace ganks que garantizan kills; tanque total que nunca muere y siempre acierta.", en: "A CC chain (E + Q + ult) makes ganks that guarantee kills; a full tank that never dies and always lands." }
    }
  },
  {
    slug: "lulu", name: "Lulu", origRole: "Support/Mid",
    lane: "mid", tier: "sleeper",
    title: { es: "Hada travesía", en: "Faerie Mid" },
    build: {
      name: { es: "AP Lulu Mid", en: "AP Lulu Mid" },
      items: ["Athene's Unholy Grail", "Rabadon's Deathcap", "Rylai's Crystal Scepter", "Void Staff", "Sorcerer's Shoes"],
      masteries: { es: "21/0/9 — Ofensiva", en: "21/0/9 — Offense" },
      runes: { es: "Pen mágica, regen maná, quints de AP", en: "Magic pen, mana regen, AP quints" },
      summoners: ["Flash", "Ignite"],
      playstyle: { es: "Destello Reluciente con Pix hace poke duro, Metamorfosis desarma peligros y seguís teniendo el escudo/ulti para pelear.", en: "Glitterlance with Pix pokes hard, Whimsy disables threats, and you keep the shield/ult for fights." }
    }
  },
  {
    slug: "lux", name: "Lux", origRole: "Mid/Support",
    lane: "mid", tier: "viable",
    title: { es: "Francotiradora de luz", en: "Light Sniper" },
    build: {
      name: { es: "Lux Mid one-shot", en: "One-shot Mid Lux" },
      items: ["Athene's Unholy Grail", "Deathfire Grasp", "Rabadon's Deathcap", "Void Staff", "Sorcerer's Shoes"],
      masteries: { es: "21/0/9 — Ofensiva", en: "21/0/9 — Offense" },
      runes: { es: "Pen mágica, MR/nivel, quints de AP", en: "Magic pen, MR/level, AP quints" },
      summoners: ["Flash", "Ignite"],
      playstyle: { es: "Enraizamiento de Luz + DFG + Chispa Final borra a cualquier squishy de un combo; poke de rango infinito.", en: "Light Binding + DFG + Final Spark deletes any squishy in one combo; infinite-range poke." }
    }
  },
  {
    slug: "malphite", name: "Malphite", origRole: "Top Tank",
    lane: "mid", tier: "meme",
    title: { es: "Roca explosiva", en: "Exploding Rock" },
    build: {
      name: { es: "AP Malphite Mid", en: "AP Malphite Mid" },
      items: ["Rabadon's Deathcap", "Deathfire Grasp", "Rylai's Crystal Scepter", "Zhonya's Hourglass", "Sorcerer's Shoes"],
      masteries: { es: "21/0/9 — Ofensiva", en: "21/0/9 — Offense" },
      runes: { es: "Pen mágica, armadura, quints de AP", en: "Magic pen, armor, AP quints" },
      summoners: ["Flash", "Ignite"],
      playstyle: { es: "Fragmentos con AP hacen poke desde lejos y el ulti + DFG one-shotea al carry apenas entrás. Meme legendario.", en: "Seismic Shard on AP pokes from range and the ult + DFG one-shots the carry on engage. Legendary meme." }
    }
  },
  {
    slug: "malzahar", name: "Malzahar", origRole: "Mid AP",
    lane: "support", tier: "sleeper",
    title: { es: "Profeta del vacío", en: "Void Prophet" },
    build: {
      name: { es: "Malzahar Support lockdown", en: "Lockdown Support Malzahar" },
      items: ["Sightstone", "Athene's Unholy Grail", "Rylai's Crystal Scepter", "Sorcerer's Shoes", "Deathfire Grasp"],
      masteries: { es: "9/0/21 — Utilidad", en: "9/0/21 — Utility" },
      runes: { es: "Pen mágica, regen maná, quints de AP", en: "Magic pen, mana regen, AP quints" },
      summoners: ["Flash", "Exhaust"],
      playstyle: { es: "Zona Nula empuja línea sola, Llamado del Vacío da vueltas de daño y la supresión bloquea al carry enemigo por completo.", en: "Null Zone pushes the wave alone, Call of the Void pokes, and the suppress fully locks the enemy carry." }
    }
  },
  {
    slug: "masteryi", name: "Master Yi", origRole: "Jungle AD",
    lane: "jungle", tier: "meme",
    title: { es: "Maestro Wuju arcano", en: "Arcane Wuju Master" },
    build: {
      name: { es: "AP Master Yi (¡el mítico!)", en: "AP Master Yi (the legendary one!)" },
      items: ["Guinsoo's Rageblade", "Nashor's Tooth", "Lich Bane", "Wit's End", "Sorcerer's Shoes"],
      masteries: { es: "21/9/0 — Ofensiva", en: "21/9/0 — Offense" },
      runes: { es: "Pen mágica, armadura, quints de AP híbrido", en: "Magic pen, armor, hybrid AP quints" },
      summoners: ["Flash", "Smite"],
      playstyle: { es: "Golpe Alfa escala con AP y resetea con kills; en su ulti sos una licuadora que teletransporta y borra. Build meme icónica de S3.", en: "Alpha Strike scales with AP and resets on kills; in Highlander you're a blinking blender. Iconic S3 meme build." }
    }
  },
  {
    slug: "missfortune", name: "Miss Fortune", origRole: "ADC",
    lane: "support", tier: "viable",
    title: { es: "Cazarrecompensas de apoyo", en: "Support Bounty Hunter" },
    build: {
      name: { es: "MF Support poke", en: "Poke Support MF" },
      items: ["Sightstone", "Frost Queen's Claim", "The Black Cleaver", "Boots of Mobility", "Youmuu's Ghostblade"],
      masteries: { es: "21/9/0 — Ofensiva", en: "21/9/0 — Offense" },
      runes: { es: "AD, armadura, quints de AD", en: "AD marks, armor, AD quints" },
      summoners: ["Flash", "Ignite"],
      playstyle: { es: "Doble Impacto y Lluvia de Balas hacen un poke brutal en bot; el ulti en teamfight es una bomba de daño desde atrás.", en: "Double Up and Make It Rain poke hard in bot; the ult in a teamfight is a damage bomb from the back." }
    }
  },
  {
    slug: "morgana", name: "Morgana", origRole: "Support/Mid",
    lane: "jungle", tier: "sleeper",
    title: { es: "Ángel caído cazador", en: "Fallen Angel Hunter" },
    build: {
      name: { es: "Morgana Jungla", en: "Jungle Morgana" },
      items: ["Spirit of the Spectral Wraith", "Liandry's Torment", "Rylai's Crystal Scepter", "Sorcerer's Shoes", "Zhonya's Hourglass"],
      masteries: { es: "21/9/0 — Ofensiva", en: "21/9/0 — Offense" },
      runes: { es: "Pen mágica, armadura, quints de AP", en: "Magic pen, armor, AP quints" },
      summoners: ["Flash", "Smite"],
      playstyle: { es: "Suelo Atormentado limpia campamentos sin recibir daño y los ganks con Cadenas Oscuras (raíz larga) son letales.", en: "Tormented Soil clears camps damage-free and Dark Binding (long root) ganks are lethal." }
    }
  },
  {
    slug: "nasus", name: "Nasus", origRole: "Top Split",
    lane: "jungle", tier: "sleeper",
    title: { es: "Guardián de la arena", en: "Sand Guardian" },
    build: {
      name: { es: "Nasus Jungla wither", en: "Wither Jungle Nasus" },
      items: ["Spirit of the Ancient Golem", "Trinity Force", "Frozen Heart", "Mercury's Treads", "Warmog's Armor"],
      masteries: { es: "9/21/0 — Defensa", en: "9/21/0 — Defense" },
      runes: { es: "AD, armadura, quints de velocidad de ataque", en: "AD marks, armor, attack speed quints" },
      summoners: ["Flash", "Smite"],
      playstyle: { es: "Los campamentos apilan Golpe Siphon rápido y Marchitar en ganks deja al carry sin escape ni velocidad de ataque.", en: "Camps stack Siphoning Strike fast and Wither ganks leave the carry with no escape or attack speed." }
    }
  },
  {
    slug: "nidalee", name: "Nidalee", origRole: "Mid/Jungle",
    lane: "support", tier: "sleeper",
    title: { es: "Cazadora salvaje", en: "Wild Huntress" },
    build: {
      name: { es: "AP Nidalee Support poke", en: "Poke Support AP Nidalee" },
      items: ["Sightstone", "Athene's Unholy Grail", "Rylai's Crystal Scepter", "Sorcerer's Shoes", "Rabadon's Deathcap"],
      masteries: { es: "21/0/9 — Ofensiva", en: "21/0/9 — Offense" },
      runes: { es: "Pen mágica, regen maná, quints de AP", en: "Magic pen, mana regen, AP quints" },
      summoners: ["Flash", "Exhaust"],
      playstyle: { es: "La Lanza a máximo rango hace un poke devastador, el Toque Primitivo cura al ADC y en Puma tenés escape infinito.", en: "The max-range Spear pokes devastatingly, Primal Surge heals the ADC, and Cougar form gives infinite escape." }
    }
  },
  {
    slug: "nunu", name: "Nunu", origRole: "Jungle/Support",
    lane: "jungle", tier: "sleeper",
    title: { es: "Bola de nieve nuclear", en: "Nuclear Snowball" },
    build: {
      name: { es: "AP Nunu Jungla", en: "AP Jungle Nunu" },
      items: ["Spirit of the Ancient Golem", "Rylai's Crystal Scepter", "Rabadon's Deathcap", "Void Staff", "Sorcerer's Shoes"],
      masteries: { es: "21/9/0 — Ofensiva", en: "21/9/0 — Offense" },
      runes: { es: "Pen mágica, armadura, quints de AP", en: "Magic pen, armor, AP quints" },
      summoners: ["Flash", "Smite"],
      playstyle: { es: "Bola de Hielo con AP hace un burst enorme en ganks, Consumir da sustain infinito y el ulti canalizado revienta teamfights.", en: "Ice Blast on AP bursts hard in ganks, Consume gives infinite sustain, and the channeled ult nukes teamfights." }
    }
  },
  {
    slug: "olaf", name: "Olaf", origRole: "Top/Jungle",
    lane: "top", tier: "viable",
    title: { es: "Vikingo imparable", en: "Unstoppable Viking" },
    build: {
      name: { es: "On-hit Olaf Top", en: "On-hit Top Olaf" },
      items: ["Blade of the Ruined King", "Wit's End", "Trinity Force", "Mercury's Treads", "Frozen Mallet"],
      masteries: { es: "21/9/0 — Ofensiva", en: "21/9/0 — Offense" },
      runes: { es: "AD, armadura, quints de velocidad de ataque", en: "AD marks, armor, attack speed quints" },
      summoners: ["Flash", "Ghost"],
      playstyle: { es: "Blade + Wit's End dan DPS on-hit demencial y el ulti te vuelve inmune a CC: entrás, pegás y nadie te frena.", en: "Blade + Wit's End give insane on-hit DPS and the ult makes you CC-immune: dive in, hit, unstoppable." }
    }
  },
  {
    slug: "pantheon", name: "Pantheon", origRole: "Top/Mid",
    lane: "support", tier: "viable",
    title: { es: "Lancero implacable", en: "Relentless Spear" },
    build: {
      name: { es: "Pantheon Support poke", en: "Poke Support Pantheon" },
      items: ["Sightstone", "The Black Cleaver", "Youmuu's Ghostblade", "Mercury's Treads", "Randuin's Omen"],
      masteries: { es: "21/9/0 — Ofensiva", en: "21/9/0 — Offense" },
      runes: { es: "AD, armadura, quints de AD", en: "AD marks, armor, AD quints" },
      summoners: ["Flash", "Ignite"],
      playstyle: { es: "Lanza a máximo rango hace un poke brutal (crítico garantizado bajo 15% HP), y el Aturdimiento asegura el all-in del ADC.", en: "Spear at max range pokes brutally (guaranteed crit under 15% HP), and the stun locks the ADC's all-in." }
    }
  },
  {
    slug: "rammus", name: "Rammus", origRole: "Jungle Tank",
    lane: "jungle", tier: "meme",
    title: { es: "Armadillo mágico", en: "Magic Armordillo" },
    build: {
      name: { es: "AP Rammus Jungla (OK)", en: "AP Rammus Jungle (OK)" },
      items: ["Sunfire Cape", "Rabadon's Deathcap", "Rylai's Crystal Scepter", "Thornmail", "Sorcerer's Shoes"],
      masteries: { es: "0/21/9 — Defensa", en: "0/21/9 — Defense" },
      runes: { es: "Armadura, MR/nivel, quints de AP", en: "Armor, MR/level, AP quints" },
      summoners: ["Flash", "Smite"],
      playstyle: { es: "Bola Rodante hace engage y con AP el ulti (Temblor) más Espinas Defensivas hacen daño real mientras sos indestructible.", en: "Powerball engages and on AP the Tremors ult plus Defensive Ball Curse deal real damage while you're indestructible." }
    }
  },
  {
    slug: "ryze", name: "Ryze", origRole: "Mid Mage",
    lane: "top", tier: "viable",
    title: { es: "Mago tanque eterno", en: "Eternal Tank Mage" },
    build: {
      name: { es: "Tank Ryze Top", en: "Tank Ryze Top" },
      items: ["Rod of Ages", "Frozen Heart", "Warmog's Armor", "Mercury's Treads", "Abyssal Scepter"],
      masteries: { es: "9/21/0 — Defensa", en: "9/21/0 — Defense" },
      runes: { es: "Pen mágica, salud, quints de maná", en: "Magic pen, health, mana quints" },
      summoners: ["Flash", "Teleport"],
      playstyle: { es: "RoA + Warmog + Frozen Heart te vuelven un muro que spamea Sobrecarga sin parar; imposible de matar y pega igual.", en: "RoA + Warmog + Frozen Heart make you a wall that spams Overload nonstop; unkillable and still deals damage." }
    }
  },
  {
    slug: "shaco", name: "Shaco", origRole: "Jungle Assassin",
    lane: "jungle", tier: "meme",
    title: { es: "Bufón demoníaco", en: "Demon Jester" },
    build: {
      name: { es: "AP Shaco Jungla", en: "AP Jungle Shaco" },
      items: ["Spirit of the Spectral Wraith", "Hextech Gunblade", "Deathfire Grasp", "Rabadon's Deathcap", "Sorcerer's Shoes"],
      masteries: { es: "21/9/0 — Ofensiva", en: "21/9/0 — Offense" },
      runes: { es: "Pen mágica, armadura, quints de AP", en: "Magic pen, armor, AP quints" },
      summoners: ["Flash", "Smite"],
      playstyle: { es: "Las Cajas Sorpresa hacen un burst enorme y el clon del ulti detona AP: aparecés, exploto a dos y desaparecés riendo.", en: "Jack in the Boxes burst hard and the ult clone detonates AP: pop in, blow up two, vanish laughing." }
    }
  },
  {
    slug: "singed", name: "Singed", origRole: "Top Tank",
    lane: "support", tier: "meme",
    title: { es: "Químico fling", en: "Fling Chemist" },
    build: {
      name: { es: "Singed Support fling", en: "Fling Support Singed" },
      items: ["Sightstone", "Rod of Ages", "Rylai's Crystal Scepter", "Mercury's Treads", "Abyssal Scepter"],
      masteries: { es: "0/9/21 — Defensa/Utilidad", en: "0/9/21 — Defense/Utility" },
      runes: { es: "Pen mágica, armadura, quints de movilidad", en: "Magic pen, armor, movement quints" },
      summoners: ["Flash", "Exhaust"],
      playstyle: { es: "Lanzamiento manda al ADC enemigo directo a tu torre y la Poción de Veneno hace poke constante. Troll pero efectivo.", en: "Fling throws the enemy ADC right into your tower and Poison Trail pokes constantly. Trolly but effective." }
    }
  },
  {
    slug: "sivir", name: "Sivir", origRole: "ADC",
    lane: "support", tier: "sleeper",
    title: { es: "Guerrera de bumerán", en: "Boomerang Warrior" },
    build: {
      name: { es: "Sivir Support engage", en: "Engage Support Sivir" },
      items: ["Sightstone", "Frost Queen's Claim", "The Black Cleaver", "Boots of Mobility", "Statikk Shiv"],
      masteries: { es: "21/9/0 — Ofensiva", en: "21/9/0 — Offense" },
      runes: { es: "AD, armadura, quints de AD", en: "AD marks, armor, AD quints" },
      summoners: ["Flash", "Exhaust"],
      playstyle: { es: "Bumerán hace poke doble, el Escudo Mágico anula engages enemigos y el ulti (velocidad de equipo) fuerza peleas ganadas.", en: "Boomerang pokes twice, Spell Shield negates enemy engages, and the ult (team speed) forces winning fights." }
    }
  },
  {
    slug: "skarner", name: "Skarner", origRole: "Jungle",
    lane: "jungle", tier: "meme",
    title: { es: "Escorpión de cristal", en: "Crystal Scorpion" },
    build: {
      name: { es: "AP Skarner Jungla", en: "AP Jungle Skarner" },
      items: ["Spirit of the Ancient Golem", "Iceborn Gauntlet", "Lich Bane", "Rylai's Crystal Scepter", "Sorcerer's Shoes"],
      masteries: { es: "21/9/0 — Ofensiva", en: "21/9/0 — Offense" },
      runes: { es: "Pen mágica, armadura, quints de AP", en: "Magic pen, armor, AP quints" },
      summoners: ["Flash", "Smite"],
      playstyle: { es: "Golpe de Cristal con AP + Iceborn hace daño y ralentiza en área; la Supresión sigue arrastrando al carry a tu equipo.", en: "Crystal Slash on AP + Iceborn deals AoE damage and slows; the suppress still drags the carry into your team." }
    }
  },
  {
    slug: "sona", name: "Sona", origRole: "Support",
    lane: "mid", tier: "sleeper",
    title: { es: "Maestra virtuosa", en: "Maven Virtuoso" },
    build: {
      name: { es: "AP Sona Mid carry", en: "AP Carry Mid Sona" },
      items: ["Deathfire Grasp", "Athene's Unholy Grail", "Rabadon's Deathcap", "Lich Bane", "Sorcerer's Shoes"],
      masteries: { es: "21/0/9 — Ofensiva", en: "21/0/9 — Offense" },
      runes: { es: "Pen mágica, regen maná, quints de AP", en: "Magic pen, mana regen, AP quints" },
      summoners: ["Flash", "Ignite"],
      playstyle: { es: "Aria de Perseverancia + Acorde de Poder hace un poke enorme; con DFG one-shoteás y el ulti (Crescendo) gana peleas.", en: "Hymn of Valor + Power Chord pokes hard; with DFG you one-shot and the Crescendo ult wins fights." }
    }
  },
  {
    slug: "soraka", name: "Soraka", origRole: "Support",
    lane: "mid", tier: "meme",
    title: { es: "Sanadora estelar ofensiva", en: "Offensive Star Healer" },
    build: {
      name: { es: "AP Soraka Mid (clásico)", en: "AP Mid Soraka (classic)" },
      items: ["Athene's Unholy Grail", "Rabadon's Deathcap", "Void Staff", "Sorcerer's Shoes", "Rylai's Crystal Scepter"],
      masteries: { es: "21/0/9 — Ofensiva", en: "21/0/9 — Offense" },
      runes: { es: "Pen mágica, regen maná, quints de AP", en: "Magic pen, mana regen, AP quints" },
      summoners: ["Flash", "Ignite"],
      playstyle: { es: "Spam de Llamado Estelar con reducción de MR hace un poke infinito e imparable; sostenés la línea con Infusión y curás al equipo global.", en: "Spamming Starcall with MR shred pokes endlessly; you sustain with Infuse and globally heal your team." }
    }
  },
  {
    slug: "taric", name: "Taric", origRole: "Support",
    lane: "top", tier: "meme",
    title: { es: "Gema bruiser", en: "Gem Bruiser" },
    build: {
      name: { es: "AD Taric Top", en: "AD Top Taric" },
      items: ["Sheen", "Atma's Impaler", "Frozen Heart", "Mercury's Treads", "Warmog's Armor"],
      masteries: { es: "9/21/0 — Defensa", en: "9/21/0 — Defense" },
      runes: { es: "Armadura, MR/nivel, quints de armadura", en: "Armor marks, MR/level, armor quints" },
      summoners: ["Flash", "Teleport"],
      playstyle: { es: "La pasiva convierte armadura en AD, así que apilás resistencias y pegás durísimo con Destrozar; Aturdir asegura los duelos.", en: "The passive turns armor into AD, so you stack resistances and hit hard with Shatter; Dazzle wins duels." }
    }
  },
  {
    slug: "teemo", name: "Teemo", origRole: "Top",
    lane: "jungle", tier: "sleeper",
    title: { es: "Explorador tóxico", en: "Toxic Scout" },
    build: {
      name: { es: "Teemo Jungla hongos", en: "Shroom Jungle Teemo" },
      items: ["Spirit of the Spectral Wraith", "Liandry's Torment", "Nashor's Tooth", "Sorcerer's Shoes", "Rylai's Crystal Scepter"],
      masteries: { es: "21/9/0 — Ofensiva", en: "21/9/0 — Offense" },
      runes: { es: "Pen mágica, armadura, quints de velocidad de ataque", en: "Magic pen, armor, attack speed quints" },
      summoners: ["Flash", "Smite"],
      playstyle: { es: "Los Hongos Nocivos cubren toda la selva de visión y trampas; Cegar arruina a los ADC enemigos en ganks.", en: "Noxious Traps blanket the jungle with vision and mines; Blind ruins enemy ADCs in ganks." }
    }
  },
  {
    slug: "tristana", name: "Tristana", origRole: "ADC (old jump reset)",
    lane: "mid", tier: "sleeper",
    title: { es: "Artillera saltarina", en: "Jumping Gunner" },
    build: {
      name: { es: "AP Tristana Mid", en: "AP Mid Tristana" },
      items: ["Rabadon's Deathcap", "Deathfire Grasp", "Rylai's Crystal Scepter", "Void Staff", "Sorcerer's Shoes"],
      masteries: { es: "21/0/9 — Ofensiva", en: "21/0/9 — Offense" },
      runes: { es: "Pen mágica, MR/nivel, quints de AP", en: "Magic pen, MR/level, AP quints" },
      summoners: ["Flash", "Ignite"],
      playstyle: { es: "Carga Explosiva con AP detona por daño enorme; el Salto resetea con kills y el ulti (Buster Shot) hace peel y burst.", en: "Explosive Charge on AP detonates for huge damage; Rocket Jump resets on kills and Buster Shot peels and bursts." }
    }
  },
  {
    slug: "tryndamere", name: "Tryndamere", origRole: "Top AD Crit",
    lane: "mid", tier: "meme",
    title: { es: "Bárbaro arcano", en: "Arcane Barbarian" },
    build: {
      name: { es: "AP Tryndamere Mid", en: "AP Mid Tryndamere" },
      items: ["Lich Bane", "Rabadon's Deathcap", "Deathfire Grasp", "Sorcerer's Shoes", "Zhonya's Hourglass"],
      masteries: { es: "21/0/9 — Ofensiva", en: "21/0/9 — Offense" },
      runes: { es: "Pen mágica, armadura, quints de AP", en: "Magic pen, armor, AP quints" },
      summoners: ["Flash", "Ignite"],
      playstyle: { es: "Giro Mortal escala con AP y con Lich Bane cada golpe pega un burst absurdo; Furia Imparable te hace inmortal 5s. Puro meme.", en: "Spinning Slash scales with AP and Lich Bane makes each hit burst absurdly; Undying Rage keeps you alive 5s. Pure meme." }
    }
  },
  {
    slug: "twistedfate", name: "Twisted Fate", origRole: "Mid Mage",
    lane: "mid", tier: "viable",
    title: { es: "Tahúr de críticos", en: "Crit Gambler" },
    build: {
      name: { es: "AD Crit Twisted Fate Mid", en: "AD Crit Mid Twisted Fate" },
      items: ["Statikk Shiv", "Infinity Edge", "Phantom Dancer", "The Bloodthirster", "Berserker's Greaves"],
      masteries: { es: "21/9/0 — Ofensiva", en: "21/9/0 — Offense" },
      runes: { es: "AD, armadura, quints de velocidad de ataque", en: "AD marks, armor, attack speed quints" },
      summoners: ["Flash", "Ignite"],
      playstyle: { es: "Mazo Trucado carga la carta roja para críticos garantizados; la Carta Dorada stunea y el ulti da roams globales.", en: "Stacked Deck loads the red card for guaranteed crits; Gold Card stuns and the ult gives global roams." }
    }
  },
  {
    slug: "twitch", name: "Twitch", origRole: "ADC/Jungle",
    lane: "jungle", tier: "sleeper",
    title: { es: "Rata pestilente", en: "Plague Rat" },
    build: {
      name: { es: "AP Twitch Jungla", en: "AP Jungle Twitch" },
      items: ["Spirit of the Spectral Wraith", "Rabadon's Deathcap", "Void Staff", "Rylai's Crystal Scepter", "Sorcerer's Shoes"],
      masteries: { es: "21/9/0 — Ofensiva", en: "21/9/0 — Offense" },
      runes: { es: "Pen mágica, armadura, quints de AP", en: "Magic pen, armor, AP quints" },
      summoners: ["Flash", "Smite"],
      playstyle: { es: "Apilás Veneno Mortal y detonás con Expurgar (escala con AP) para un burst enorme; el Sigilo hace ganks invisibles letales.", en: "Stack Deadly Venom and detonate with Expunge (AP scaling) for huge burst; Ambush makes invisible ganks lethal." }
    }
  },
  {
    slug: "urgot", name: "Urgot", origRole: "ADC (old kit)",
    lane: "mid", tier: "meme",
    title: { es: "El Urgot de medio de Meddler", en: "Meddler's Mid Urgot" },
    build: {
      name: { es: "Urgot Mid poke-swap", en: "Poke-Swap Mid Urgot" },
      items: ["Manamune", "Frozen Heart", "The Black Cleaver", "Mercury's Treads", "Randuin's Omen"],
      masteries: { es: "21/9/0 — Ofensiva", en: "21/9/0 — Offense" },
      runes: { es: "AD, armadura, quints de AD", en: "AD marks, armor, AD quints" },
      summoners: ["Flash", "Ignite"],
      playstyle: { es: "Cazador Ácido teledirigido tras marcar con la granada hace un poke imparable; el ulti intercambia posiciones para robar carries. Nadie sabe qué hace Urgot.", en: "Homing Acid Hunter after the corrosive charge pokes relentlessly; the ult swaps positions to steal carries. Nobody knows what Urgot does." }
    }
  },
  {
    slug: "vayne", name: "Vayne", origRole: "ADC",
    lane: "jungle", tier: "sleeper",
    title: { es: "Cazadora nocturna", en: "Night Hunter" },
    build: {
      name: { es: "Vayne Jungla", en: "Jungle Vayne" },
      items: ["Spirit of the Ancient Golem", "Blade of the Ruined King", "Statikk Shiv", "Berserker's Greaves", "Frozen Mallet"],
      masteries: { es: "21/9/0 — Ofensiva", en: "21/9/0 — Offense" },
      runes: { es: "AD, armadura, quints de velocidad de ataque", en: "AD marks, armor, attack speed quints" },
      summoners: ["Flash", "Smite"],
      playstyle: { es: "Voltereta + Condenar contra pared stunea en ganks; el ulti da invisibilidad para gankeos sorpresa y el Daño Real derrite tanques.", en: "Tumble + Condemn into walls stuns in ganks; the ult grants invisibility for surprise dives and True Damage melts tanks." }
    }
  },
  {
    slug: "veigar", name: "Veigar", origRole: "Mid Mage",
    lane: "support", tier: "sleeper",
    title: { es: "Maestro maligno diminuto", en: "Tiny Master of Evil" },
    build: {
      name: { es: "Veigar Support jaula", en: "Cage Support Veigar" },
      items: ["Sightstone", "Deathfire Grasp", "Rabadon's Deathcap", "Sorcerer's Shoes", "Void Staff"],
      masteries: { es: "21/0/9 — Ofensiva", en: "21/0/9 — Offense" },
      runes: { es: "Pen mágica, regen maná, quints de AP", en: "Magic pen, mana regen, AP quints" },
      summoners: ["Flash", "Ignite"],
      playstyle: { es: "El Horizonte de Eventos (jaula) es el mejor stun de zona; apilás AP infinito con Q y con DFG + ulti borrás carries.", en: "Event Horizon (cage) is the best zoning stun; you stack infinite AP with Q and DFG + ult deletes carries." }
    }
  },
  {
    slug: "warwick", name: "Warwick", origRole: "Jungle (old kit)",
    lane: "jungle", tier: "meme",
    title: { es: "Lobo sanguíneo arcano", en: "Arcane Blood Wolf" },
    build: {
      name: { es: "AP Warwick Jungla", en: "AP Jungle Warwick" },
      items: ["Spirit of the Ancient Golem", "Nashor's Tooth", "Guinsoo's Rageblade", "Wit's End", "Sorcerer's Shoes"],
      masteries: { es: "21/9/0 — Ofensiva", en: "21/9/0 — Offense" },
      runes: { es: "Pen mágica, armadura, quints de AP híbrido", en: "Magic pen, armor, hybrid AP quints" },
      summoners: ["Flash", "Smite"],
      playstyle: { es: "Golpe Voraz escala con AP y te cura muchísimo; con Nashor + Guinsoo hacés DPS híbrido y el ulti fija al carry para el combo.", en: "Hungering Strike scales with AP and heals a ton; Nashor + Guinsoo give hybrid DPS and the ult pins the carry for your combo." }
    }
  },
  {
    slug: "wukong", name: "Wukong", origRole: "Top/Jungle",
    lane: "jungle", tier: "viable",
    title: { es: "Rey mono crítico", en: "Crit Monkey King" },
    build: {
      name: { es: "Wukong Jungla crítico", en: "Crit Jungle Wukong" },
      items: ["Spirit of the Ancient Golem", "The Black Cleaver", "Infinity Edge", "Phantom Dancer", "Mercury's Treads"],
      masteries: { es: "21/9/0 — Ofensiva", en: "21/9/0 — Offense" },
      runes: { es: "AD, armadura, quints de AD", en: "AD marks, armor, AD quints" },
      summoners: ["Flash", "Smite"],
      playstyle: { es: "El clon del Señuelo confunde en ganks, y el ulti (Ciclón) con IE + PD hace críticos en área que ganan teamfights solos.", en: "Decoy's clone confuses in ganks, and Cyclone with IE + PD crits the whole team to win fights alone." }
    }
  },
  {
    slug: "zilean", name: "Zilean", origRole: "Support/Mid",
    lane: "mid", tier: "sleeper",
    title: { es: "Cronomante explosivo", en: "Explosive Chronokeeper" },
    build: {
      name: { es: "AP Zilean Mid double-bomb", en: "Double-Bomb AP Mid Zilean" },
      items: ["Deathfire Grasp", "Rabadon's Deathcap", "Rylai's Crystal Scepter", "Void Staff", "Sorcerer's Shoes"],
      masteries: { es: "21/0/9 — Ofensiva", en: "21/0/9 — Offense" },
      runes: { es: "Pen mágica, regen maná, quints de AP", en: "Magic pen, mana regen, AP quints" },
      summoners: ["Flash", "Ignite"],
      playstyle: { es: "Rebobinar deja soltar doble Bomba de Tiempo que stunea y explota por daño enorme; el ulti (Cronoturno) revive a tu carry en peleas.", en: "Rewind lets you drop a double Time Bomb that stuns and bursts hard; Chronoshift revives your carry in fights." }
    }
  }
];

export const laneMeta = {
  top:     { es: "Top",      en: "Top",     color: "#c8923a" },
  jungle:  { es: "Jungla",   en: "Jungle",  color: "#4e9a51" },
  mid:     { es: "Medio",    en: "Mid",     color: "#4a86c9" },
  adc:     { es: "ADC",      en: "ADC",     color: "#c0563e" },
  support: { es: "Soporte",  en: "Support", color: "#9a5bb8" },
};

export const tierMeta = {
  meme:    { es: "Meme puro",  en: "Pure meme" },
  sleeper: { es: "Sorpresa",   en: "Sleeper" },
  viable:  { es: "Raro pero funciona", en: "Weird but works" },
};
