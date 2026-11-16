import React from 'react';
import './CategoryTabs.css';
import { unitData } from '../data/units';

function CategoryTabs({ categories, activeCategory, onSelect }) {
  return (
    <div className="category-tabs">
      {categories.map(id => (
        <button
          key={id}
          className={`category-tab ${id === activeCategory ? 'active' : ''}`}
          onClick={() => onSelect(id)}
        >
          {unitData[id].name}
        </button>
      ))}
    </div>
  );
}

export default CategoryTabs;