import React, { useEffect, useMemo, useState } from 'react';
import './App.css';

import CategoryTabs from './components/CategoryTabs';
import ConverterPanel from './components/ConverterPanel';
import SearchBar from './components/SearchBar';
import FormatControls from './components/FormatControls';
import FeelItPanel from './components/FeelItPanel';
import WorkingPanel from './components/WorkingPanel';
import UnitTable from './components/UnitTable';
import { MoonIcon, SunIcon, UnitOrbitArt } from './components/Icons';
import { categoryOrder, unitData } from './data/units';
import { convert, toBaseValue } from './utils/convert';
import { formatNumber } from './utils/format';
import { parseSearch } from './utils/search';

function getInitialTheme() {
  const savedTheme = localStorage.getItem('unit-theme');
  if (savedTheme) return savedTheme === 'dark';
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches || false;
}

function App() {
  const [categoryId, setCategoryId] = useState('length');
  const [value, setValue] = useState('1');
  const [fromUnitId, setFromUnitId] = useState('');
  const [toUnitId, setToUnitId] = useState('');
  const [search, setSearch] = useState('');
  const [searchMessage, setSearchMessage] = useState('');
  const [formatMode, setFormatMode] = useState(() => localStorage.getItem('unit-format') || 'decimal');
  const [precision, setPrecision] = useState(() => Number(localStorage.getItem('unit-precision')) || 6);
  const [darkMode, setDarkMode] = useState(getInitialTheme);

  const category = unitData[categoryId];
  const units = category.units;

  // Select the first two units whenever the user changes category.
  useEffect(() => {
    setFromUnitId(units[0]?.id || '');
    setToUnitId(units[1]?.id || units[0]?.id || '');
  }, [categoryId, units]);

  // Remember the user's display preferences between visits.
  useEffect(() => localStorage.setItem('unit-format', formatMode), [formatMode]);
  useEffect(() => localStorage.setItem('unit-precision', precision), [precision]);
  useEffect(() => localStorage.setItem('unit-theme', darkMode ? 'dark' : 'light'), [darkMode]);
  useEffect(() => { document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'; }, [darkMode]);

  const fromUnit = units.find(unit => unit.id === fromUnitId) || units[0];
  const toUnit = units.find(unit => unit.id === toUnitId) || units[0];
  const numericValue = value === '' ? NaN : Number(value);
  const result = convert(numericValue, fromUnit, toUnit, categoryId);
  const baseValue = toBaseValue(numericValue, fromUnit, categoryId);
  const formattedResult = Number.isFinite(result) ? formatNumber(result, formatMode, precision) : '';

  const tableRows = useMemo(() => units.map(unit => ({
    ...unit,
    display: Number.isFinite(baseValue)
      ? formatNumber(convert(numericValue, fromUnit, unit, categoryId), formatMode, precision)
      : '',
    isHighlight: unit.id === toUnitId || unit.id === fromUnitId
  })), [units, baseValue, numericValue, fromUnit, categoryId, formatMode, precision, toUnitId, fromUnitId]);

  function handleSearch(query) {
    setSearch(query);
    setSearchMessage('');
    if (!query.trim()) return;

    const parsed = parseSearch(query, categoryId);
    if (!parsed) {
      setSearchMessage('Try a format like 5 km to miles');
      return;
    }

    setCategoryId(parsed.category);
    setValue(parsed.value);
    setFromUnitId(parsed.fromId);
    setToUnitId(parsed.toId);
  }

  function handleCategorySelect(nextCategory) {
    setCategoryId(nextCategory);
    setSearchMessage('');
  }

  function handleSwap() {
    setFromUnitId(toUnitId);
    setToUnitId(fromUnitId);
  }

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <header className="app-header">
        <div className="header-copy">
          <div className="brand-line">
            <span className="brand-mark" aria-hidden="true">↗</span>
            <h1>UNIT-CONVERTER</h1>
            <span className="header-kicker">smart conversions</span>
            <button
              className="theme-toggle"
              onClick={() => setDarkMode(current => !current)}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <span className="theme-toggle-icon">{darkMode ? <SunIcon /> : <MoonIcon />}</span>
              <span>{darkMode ? 'Light' : 'Dark'}</span>
            </button>
          </div>
          <p className="subtitle">A unit converter that doesn't just give you a number, it helps you understand it.</p>
        </div>
        <UnitOrbitArt />
      </header>

      <SearchBar value={search} onChange={handleSearch} message={searchMessage} />
      <CategoryTabs categories={categoryOrder} activeCategory={categoryId} onSelect={handleCategorySelect} />
      <ConverterPanel
        value={value}
        onValueChange={setValue}
        units={units}
        fromUnitId={fromUnit.id}
        onFromUnitChange={setFromUnitId}
        toUnitId={toUnit.id}
        onToUnitChange={setToUnitId}
        result={formattedResult}
        toSymbol={toUnit.symbol}
        onSwap={handleSwap}
      />
      <FormatControls
        mode={formatMode}
        precision={precision}
        onModeChange={setFormatMode}
        onPrecisionChange={setPrecision}
      />
      <WorkingPanel
        value={value}
        fromUnit={fromUnit}
        toUnit={toUnit}
        category={categoryId}
        result={result}
        baseValue={baseValue}
        precision={precision}
      />
      <FeelItPanel
        category={categoryId}
        baseValue={baseValue}
        inputValue={value}
        inputSymbol={fromUnit.symbol}
      />
      <UnitTable rows={tableRows} onSelect={setToUnitId} />

      <footer className="app-footer">
        <span>⚡ all units · instant conversion</span>
      </footer>
    </div>
  );
}

export default App;
