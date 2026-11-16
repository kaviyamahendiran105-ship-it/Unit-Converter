import { categoryOrder, unitData } from '../data/units';

export function normalizeUnitText(value) {
  return value.toLowerCase().trim().replace(/[−–]/g, '-');
}

export function findUnit(term, preferredCategory) {
  const cleanTerm = normalizeUnitText(term);
  const allUnits = [];

  categoryOrder.forEach(category => {
    unitData[category].units.forEach(unit => allUnits.push({ category, unit }));
  });

  const matches = allUnits.filter(({ unit }) => {
    const searchableNames = [unit.symbol, unit.name, ...(unit.aliases || [])];
    return searchableNames.some(alias => {
      const normalizedAlias = normalizeUnitText(alias);
      return normalizedAlias === cleanTerm || normalizedAlias.replace(/°/g, '') === cleanTerm.replace(/°/g, '');
    });
  });

  return matches.find(match => match.category === preferredCategory) || matches[0];
}

export function parseSearch(query, preferredCategory) {
  const match = query.trim().match(/^([+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?)\s+(.+?)\s+(?:to|in|=|->)\s+(.+)$/i);
  if (!match) return null;

  const from = findUnit(match[2], preferredCategory);
  const to = findUnit(match[3], from?.category || preferredCategory);
  if (!from || !to || from.category !== to.category) return null;

  return { value: match[1], category: from.category, fromId: from.unit.id, toId: to.unit.id };
}
