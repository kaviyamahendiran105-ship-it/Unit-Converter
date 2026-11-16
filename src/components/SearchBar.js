import React from 'react';
import { SearchIcon } from './Icons';

function SearchBar({ value, onChange, message }) {
  return <div className="search-wrap">
    <span className="search-icon"><SearchIcon /></span>
    <input aria-label="Quick conversion search" className="search-input" value={value} onChange={e => onChange(e.target.value)} placeholder={'Try "5 km to miles" or "100 f to c"'} />
    {message && <span className="search-message">{message}</span>}
  </div>;
}
export default SearchBar;
