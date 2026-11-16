export function toBaseValue(value, unit, category) {
  if (!unit || !Number.isFinite(value)) return NaN;
  return category === 'temperature' && unit.toBase ? unit.toBase(value) : value * (unit.factor || 1);
}

export function fromBaseValue(baseValue, unit, category) {
  if (!unit || !Number.isFinite(baseValue)) return NaN;
  return category === 'temperature' && unit.fromBase ? unit.fromBase(baseValue) : baseValue / (unit.factor || 1);
}

export function convert(value, fromUnit, toUnit, category) {
  const numericValue = typeof value === 'number' ? value : parseFloat(value);
  if (!Number.isFinite(numericValue) || !fromUnit || !toUnit) return NaN;
  return fromBaseValue(toBaseValue(numericValue, fromUnit, category), toUnit, category);
}
