import React, { useState } from 'react';
import { CheckIcon, CopyIcon } from './Icons';

function ResultCard({ result, symbol }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    if (!result) return;
    try { await navigator.clipboard.writeText(`${result} ${symbol}`); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch (error) { /* Clipboard can be unavailable in insecure previews. */ }
  };
  return <div className="result-box" role="status">
    {result ? <><span className="result-value">{result}</span><span className="result-unit">{symbol}</span><button className="copy-btn" onClick={copy} aria-label="Copy result" title="Copy result">{copied ? <CheckIcon /> : <CopyIcon />}</button>{copied && <span className="copy-tooltip">Copied!</span>}</> : <span className="result-placeholder">enter a value to convert</span>}
  </div>;
}
export default ResultCard;
