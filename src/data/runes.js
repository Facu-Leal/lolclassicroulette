// Runas clásicas (sistema separado de las maestrías).
// 4 ranuras: Marcas (rojas ×9), Sellos (amarillos ×9), Glifos (azules ×9), Quintaesencias (moradas ×3).
export const runeSlots = [
  { key: "marks",  es: "Marcas (rojas)",           en: "Marks (red)",            color: "#c0563e" },
  { key: "seals",  es: "Sellos (amarillos)",       en: "Seals (yellow)",         color: "#c8aa6e" },
  { key: "glyphs", es: "Glifos (azules)",          en: "Glyphs (blue)",          color: "#4a86c9" },
  { key: "quints", es: "Quintaesencias (moradas)", en: "Quintessences (purple)", color: "#9a5bb8" },
];

const presets = {
  apMid: {
    marks:  { es: "Penetración mágica ×9", en: "Magic penetration ×9" },
    seals:  { es: "Armadura ×9", en: "Armor ×9" },
    glyphs: { es: "Poder de habilidad por nivel ×9", en: "Ability power per level ×9" },
    quints: { es: "Poder de habilidad ×3", en: "Ability power ×3" },
  },
  apSupport: {
    marks:  { es: "Penetración mágica ×9", en: "Magic penetration ×9" },
    seals:  { es: "Armadura ×9", en: "Armor ×9" },
    glyphs: { es: "Resistencia mágica por nivel ×9", en: "Magic resist per level ×9" },
    quints: { es: "Oro por 10 s (GP10) ×3", en: "Gold per 10 (GP10) ×3" },
  },
  jungleAP: {
    marks:  { es: "Penetración mágica ×9", en: "Magic penetration ×9" },
    seals:  { es: "Armadura ×9", en: "Armor ×9" },
    glyphs: { es: "Resistencia mágica por nivel ×9", en: "Magic resist per level ×9" },
    quints: { es: "Poder de habilidad ×3", en: "Ability power ×3" },
  },
  adCrit: {
    marks:  { es: "Daño de ataque ×9", en: "Attack damage ×9" },
    seals:  { es: "Armadura ×9", en: "Armor ×9" },
    glyphs: { es: "Resistencia mágica por nivel ×9", en: "Magic resist per level ×9" },
    quints: { es: "Daño de ataque ×3", en: "Attack damage ×3" },
  },
  jungleAD: {
    marks:  { es: "Daño de ataque ×9", en: "Attack damage ×9" },
    seals:  { es: "Armadura ×9", en: "Armor ×9" },
    glyphs: { es: "Resistencia mágica por nivel ×9", en: "Magic resist per level ×9" },
    quints: { es: "Velocidad de ataque ×3", en: "Attack speed ×3" },
  },
  adBruiser: {
    marks:  { es: "Penetración de armadura ×9", en: "Armor penetration ×9" },
    seals:  { es: "Armadura ×9", en: "Armor ×9" },
    glyphs: { es: "Resistencia mágica por nivel ×9", en: "Magic resist per level ×9" },
    quints: { es: "Daño de ataque ×3", en: "Attack damage ×3" },
  },
  adSupport: {
    marks:  { es: "Daño de ataque ×9", en: "Attack damage ×9" },
    seals:  { es: "Armadura ×9", en: "Armor ×9" },
    glyphs: { es: "Resistencia mágica por nivel ×9", en: "Magic resist per level ×9" },
    quints: { es: "Oro por 10 s (GP10) ×3", en: "Gold per 10 (GP10) ×3" },
  },
  onhit: {
    marks:  { es: "Velocidad de ataque ×9", en: "Attack speed ×9" },
    seals:  { es: "Armadura ×9", en: "Armor ×9" },
    glyphs: { es: "Resistencia mágica por nivel ×9", en: "Magic resist per level ×9" },
    quints: { es: "Velocidad de ataque ×3", en: "Attack speed ×3" },
  },
  hybrid: {
    marks:  { es: "Penetración híbrida ×9", en: "Hybrid penetration ×9" },
    seals:  { es: "Armadura ×9", en: "Armor ×9" },
    glyphs: { es: "Resistencia mágica por nivel ×9", en: "Magic resist per level ×9" },
    quints: { es: "Velocidad de ataque ×3", en: "Attack speed ×3" },
  },
  tank: {
    marks:  { es: "Armadura ×9", en: "Armor ×9" },
    seals:  { es: "Salud por nivel ×9", en: "Health per level ×9" },
    glyphs: { es: "Resistencia mágica por nivel ×9", en: "Magic resist per level ×9" },
    quints: { es: "Salud plana ×3", en: "Flat health ×3" },
  },
};

// Clasifica una build en un preset de runas según su texto de runas + línea.
export function runePresetId(entry) {
  const r = ((entry.build && entry.build.runes && (entry.build.runes.en || entry.build.runes.es)) || "").toLowerCase();
  const lane = entry.lane;
  const ap = r.includes("magic pen") || r.includes("pen mágica") || r.includes("penetración mágica") || r.includes("ability power") || r.includes("ap quints") || r.includes("quints de ap");
  const hybrid = r.includes("hybrid") || r.includes("híbrid");
  const health = r.includes("health") || r.includes("salud") || r.includes("mana quints") || r.includes("maná");
  const asQuints = r.includes("attack speed") || r.includes("velocidad de ataque");

  if (hybrid) return "hybrid";
  if (ap) {
    if (lane === "support") return "apSupport";
    if (lane === "jungle") return "jungleAP";
    return "apMid";
  }
  if (health) return "tank";
  if (lane === "adc") return "adCrit";
  if (lane === "jungle") return "jungleAD";
  if (asQuints) return "onhit";
  if (lane === "support") return "adSupport";
  return "adBruiser";
}

export function runesForBuild(entry) {
  return presets[runePresetId(entry)] || presets.apMid;
}
