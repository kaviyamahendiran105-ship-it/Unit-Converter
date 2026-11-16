import React, { useState } from 'react';
import { formatNumber } from '../utils/format';
import { ChevronIcon } from './Icons';

function WorkingPanel({ value, fromUnit, toUnit, category, result, baseValue, precision }) {
  const [open, setOpen] = useState(false);
  if (!fromUnit || !toUnit || result === '') return null;
  const input = formatNumber(Number(value), 'decimal', precision);
  const output = formatNumber(result, 'decimal', precision);
  const base = formatNumber(baseValue, 'decimal', precision);
  let formula;
  if (category === 'temperature') {
    const pair = `${fromUnit.id}-${toUnit.id}`;
    const templates = {
      'celsius-fahrenheit': `°F = (°C × 9/5) + 32 → (${input} × 9/5) + 32 = ${output} °F`,
      'fahrenheit-celsius': `°C = (°F − 32) × 5/9 → (${input} − 32) × 5/9 = ${output} °C`,
      'celsius-kelvin': `K = °C + 273.15 → ${input} + 273.15 = ${output} K`,
      'kelvin-celsius': `°C = K − 273.15 → ${input} − 273.15 = ${output} °C`,
      'fahrenheit-kelvin': `K = (°F − 32) × 5/9 + 273.15 → (${input} − 32) × 5/9 + 273.15 = ${output} K`,
      'kelvin-fahrenheit': `°F = (K − 273.15) × 9/5 + 32 → (${input} − 273.15) × 9/5 + 32 = ${output} °F`
    };
    formula = pair === 'celsius-celsius' || pair === 'fahrenheit-fahrenheit' || pair === 'kelvin-kelvin' ? `${input} ${fromUnit.symbol} = ${output} ${toUnit.symbol}` : templates[pair];
  } else if (fromUnit.id === toUnit.id) formula = `${input} ${fromUnit.symbol} = ${output} ${toUnit.symbol}`;
  else formula = `${input} ${fromUnit.symbol} × ${fromUnit.factor} = ${base} ${unitBaseLabel(category)} → ${base} ${unitBaseLabel(category)} ÷ ${toUnit.factor} = ${output} ${toUnit.symbol}`;
  return <section className={`working-panel ${open ? 'open' : ''}`}><button className="working-toggle" onClick={() => setOpen(!open)} aria-expanded={open}><span>How is this calculated?</span><span className="chevron"><ChevronIcon open={open} /></span></button><div className="working-content"><p>{formula}</p><small>Using the same conversion path as the result above.</small></div></section>;
}
function unitBaseLabel(category) { return category === 'temperature' ? '°C' : ({ length: 'm', mass: 'kg', time: 's', speed: 'm/s', area: 'm²', volume: 'm³', pressure: 'Pa', energy: 'J', power: 'W', force: 'N', frequency: 'Hz', angle: 'rad', data: 'B' }[category] || 'base units'); }
export default WorkingPanel;
