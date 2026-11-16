import React, { useState } from 'react';
import { CheckIcon, CopyIcon } from './Icons';

function UnitTable({ rows, onSelect }) {
  const [copiedId, setCopiedId] = useState('');
  const copy = async (event, row) => { event.stopPropagation(); if (!row.display) return; try { await navigator.clipboard.writeText(`${row.display} ${row.symbol}`); setCopiedId(row.id); setTimeout(() => setCopiedId(''), 1500); } catch (error) {} };
  return <div className="table-wrap"><table className="all-units-table"><thead><tr><th>Unit</th><th>Symbol</th><th className="value-header">Value</th><th aria-label="Copy" /></tr></thead><tbody>{rows.map(row => <tr key={row.id} onClick={() => onSelect(row.id)} className={row.isHighlight ? 'unit-row-highlight' : ''}><td className="unit-name">{row.name}</td><td className="unit-symbol">{row.symbol}</td><td className="unit-value">{row.display || '—'}</td><td className="row-copy"><button onClick={event => copy(event, row)} aria-label={`Copy ${row.name}`} title={copiedId === row.id ? 'Copied!' : 'Copy'}>{copiedId === row.id ? <CheckIcon /> : <CopyIcon />}</button></td></tr>)}</tbody></table></div>;
}
export default UnitTable;
