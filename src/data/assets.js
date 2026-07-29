// Assets de imágenes vía Data Dragon (CDN oficial gratuito de Riot).
// Image assets via Data Dragon (Riot's free official CDN).
// Campeones y hechizos: versión actual. Ítems: versión clásica (3.15.5) para
// que salgan los íconos originales de objetos que ya no existen.

export const DDRAGON_VER = "16.14.1";
export const ITEM_VER = "3.15.5";

const CDN = "https://ddragon.leagueoflegends.com/cdn";

// slug interno -> id de Data Dragon
export const champId = {
  ahri:"Ahri", alistar:"Alistar", amumu:"Amumu", anivia:"Anivia", annie:"Annie",
  ashe:"Ashe", blitzcrank:"Blitzcrank", brand:"Brand", chogath:"Chogath",
  drmundo:"DrMundo", evelynn:"Evelynn", ezreal:"Ezreal", fiddlesticks:"Fiddlesticks",
  gangplank:"Gangplank", garen:"Garen", gragas:"Gragas", graves:"Graves",
  heimerdinger:"Heimerdinger", janna:"Janna", jarvan:"JarvanIV", jax:"Jax",
  karthus:"Karthus", kassadin:"Kassadin", katarina:"Katarina", kayle:"Kayle",
  kogmaw:"KogMaw", leesin:"LeeSin", leona:"Leona", lulu:"Lulu", lux:"Lux",
  malphite:"Malphite", malzahar:"Malzahar", masteryi:"MasterYi", missfortune:"MissFortune",
  morgana:"Morgana", nasus:"Nasus", nidalee:"Nidalee", nunu:"Nunu", olaf:"Olaf",
  pantheon:"Pantheon", rammus:"Rammus", ryze:"Ryze", shaco:"Shaco", singed:"Singed",
  sivir:"Sivir", skarner:"Skarner", sona:"Sona", soraka:"Soraka", taric:"Taric",
  teemo:"Teemo", tristana:"Tristana", tryndamere:"Tryndamere", twistedfate:"TwistedFate",
  twitch:"Twitch", urgot:"Urgot", vayne:"Vayne", veigar:"Veigar", warwick:"Warwick",
  wukong:"MonkeyKing", zilean:"Zilean",
};

// nombre de hechizo -> archivo en Data Dragon
export const spellFile = {
  "Flash":"SummonerFlash", "Ignite":"SummonerDot", "Smite":"SummonerSmite",
  "Teleport":"SummonerTeleport", "Exhaust":"SummonerExhaust", "Barrier":"SummonerBarrier",
  "Ghost":"SummonerHaste", "Heal":"SummonerHeal",
};

// nombre de ítem -> id de Data Dragon (versión clásica 3.15.5)
export const itemId = {"Abyssal Scepter":"3001","Athene's Unholy Grail":"3174","Atma's Impaler":"3005","Berserker's Greaves":"3006","Blade of the Ruined King":"3153","Boots of Mobility":"3117","Deathfire Grasp":"3128","Frost Queen's Claim":"3092","Frozen Heart":"3110","Frozen Mallet":"3022","Guinsoo's Rageblade":"3124","Hextech Gunblade":"3146","Iceborn Gauntlet":"3025","Infinity Edge":"3031","Liandry's Torment":"3151","Lich Bane":"3100","Manamune":"3004","Mercury's Treads":"3111","Nashor's Tooth":"3115","Phantom Dancer":"3046","Rabadon's Deathcap":"3089","Randuin's Omen":"3143","Rod of Ages":"3027","Rylai's Crystal Scepter":"3116","Sheen":"3057","Sightstone":"2049","Sorcerer's Shoes":"3020","Spirit of the Ancient Golem":"3207","Spirit of the Spectral Wraith":"3209","Statikk Shiv":"3087","Sunfire Cape":"3068","The Black Cleaver":"3071","The Bloodthirster":"3072","Thornmail":"3075","Trinity Force":"3078","Void Staff":"3135","Warmog's Armor":"3083","Wit's End":"3091","Youmuu's Ghostblade":"3142","Zhonya's Hourglass":"3157"};

export function champImg(slug) {
  const id = champId[slug];
  return id ? `${CDN}/${DDRAGON_VER}/img/champion/${id}.png` : null;
}
export function spellImg(name) {
  const f = spellFile[name];
  return f ? `${CDN}/${DDRAGON_VER}/img/spell/${f}.png` : null;
}
export function itemImg(name) {
  const id = itemId[name];
  return id ? `${CDN}/${ITEM_VER}/img/item/${id}.png` : null;
}
