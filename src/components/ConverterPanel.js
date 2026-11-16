import React from 'react';
import './ConverterPanel.css';
import ResultCard from './ResultCard';
import { SwapIcon } from './Icons';

function ConverterPanel({ value, onValueChange, units, fromUnitId, onFromUnitChange, toUnitId, onToUnitChange, result, toSymbol, onSwap }) {
  return <div className="converter-panel"><div className="converter-row"><label>Value</label><input type="number" className="converter-input" value={value} onChange={e => onValueChange(e.target.value)} step="any" placeholder="0" /><select className="converter-select" value={fromUnitId} onChange={e => onFromUnitChange(e.target.value)}>{units.map(u => <option key={u.id} value={u.id}>{u.symbol} · {u.name}</option>)}</select></div><div className="converter-row"><label>To</label><select className="converter-select" value={toUnitId} onChange={e => onToUnitChange(e.target.value)}>{units.map(u => <option key={u.id} value={u.id}>{u.symbol} · {u.name}</option>)}</select><button className="swap-btn" onClick={onSwap}><SwapIcon /> Swap</button></div><ResultCard result={result} symbol={toSymbol} /></div>;
}
export default ConverterPanel;
