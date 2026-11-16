import React from 'react';
import { references } from '../data/references';
import { formatNumber } from '../utils/format';
import { SparkIcon } from './Icons';

function FeelItPanel({ category, baseValue, inputValue, inputSymbol }) {
  const list = references[category] || [];
  if (!Number.isFinite(baseValue) || !list.length || baseValue === 0) return null;
  const ranked = list.map(item => ({ ...item, ratio: Math.abs(baseValue / item.value) })).filter(item => item.ratio >= 0.1 && item.ratio <= 1000).sort((a, b) => Math.abs(Math.log(a.ratio)) - Math.abs(Math.log(b.ratio)));
  if (!ranked.length) return null;
  const reference = ranked[0];
  let comparison = reference.ratio >= 0.85 && reference.ratio <= 1.15 ? `roughly one ${reference.name}` : reference.ratio < 1 ? `about ${formatNumber(1 / reference.ratio, 'decimal', 2)}× smaller than one ${reference.name}` : `about ${formatNumber(reference.ratio, 'decimal', 2)}× a ${reference.name}`;
  return <aside className="feel-panel"><span className="feel-icon"><SparkIcon /></span><div><strong>Feel it</strong><p>{inputValue} {inputSymbol} is {comparison}.</p></div></aside>;
}
export default FeelItPanel;
