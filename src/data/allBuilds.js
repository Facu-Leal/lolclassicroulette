// Lista unificada de builds (entradas). Un campeón puede tener varias.
// Fusiona las 60 base (champions.js + guides.js + skills.js) con las extra (extraBuilds.js).
// Cada entrada: { slug, champSlug, name, title, origRole, lane, tier, build, guide, masteryWhy, skills }
import { champions } from "./champions.js";
import { guides } from "./guides.js";
import { skills } from "./skills.js";
import { extraBuilds } from "./extraBuilds.js";

const baseEntries = champions.map((c) => ({
  slug: c.slug,
  champSlug: c.slug,
  name: c.name,
  title: c.title,
  origRole: c.origRole,
  lane: c.lane,
  tier: c.tier,
  build: c.build,
  guide: (guides[c.slug] && guides[c.slug].guide) || null,
  masteryWhy: (guides[c.slug] && guides[c.slug].masteryWhy) || null,
  skills: skills[c.slug] || null,
}));

const extraEntries = extraBuilds.map((e) => ({
  slug: e.slug,
  champSlug: e.champSlug,
  name: e.name,
  title: e.title,
  origRole: e.origRole,
  lane: e.lane,
  tier: e.tier,
  build: e.build,
  guide: e.guide || null,
  masteryWhy: e.masteryWhy || null,
  skills: e.skills || null,
}));

export const allBuilds = [...baseEntries, ...extraEntries];

// Cuántas builds tiene cada campeón (para mostrar "2 builds" en la card, etc.)
export const buildsPerChamp = allBuilds.reduce((acc, e) => {
  acc[e.champSlug] = (acc[e.champSlug] || 0) + 1;
  return acc;
}, {});
