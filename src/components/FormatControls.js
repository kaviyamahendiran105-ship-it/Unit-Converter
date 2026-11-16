import React from 'react';

function FormatControls({ mode, precision, onModeChange, onPrecisionChange }) {
  return <div className="format-controls" aria-label="Number formatting controls">
    <div className="format-group"><span className="format-label">Format</span>
      {['decimal', 'scientific', 'engineering'].map(option => <button key={option} className={`format-option ${mode === option ? 'selected' : ''}`} onClick={() => onModeChange(option)}>{option[0].toUpperCase() + option.slice(1)}</button>)}
    </div>
    <label className="precision-control"><span className="format-label">Precision</span><select value={precision} onChange={e => onPrecisionChange(Number(e.target.value))}>{[2, 4, 6, 9].map(value => <option key={value} value={value}>{value} significant</option>)}</select></label>
  </div>;
}
export default FormatControls;
