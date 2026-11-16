const superscripts = { '-': '⁻', '+': '⁺', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
const superscript = value => String(value).split('').map(char => superscripts[char] || char).join('');
const trim = value => value.replace(/\.0+$|(?<=\.[0-9]*?)0+$/, '').replace(/\.$/, '');
const significant = (value, precision) => Number(value).toPrecision(precision);

function scientific(value, precision, engineering = false) {
  if (value === 0) return '0';
  const exponent = Math.floor(Math.log10(Math.abs(value)));
  const exp = engineering ? Math.floor(exponent / 3) * 3 : exponent;
  const mantissa = value / Math.pow(10, exp);
  return `${trim(significant(mantissa, precision))} × 10${superscript(exp)}`;
}

export function formatNumber(value, mode = 'decimal', precision = 6) {
  if (!Number.isFinite(value)) return '';
  const abs = Math.abs(value);
  if (value === 0) return '0';
  if (mode === 'scientific') return scientific(value, precision);
  if (mode === 'engineering') return scientific(value, precision, true);
  if (abs < 0.000001 || abs >= 1e12) return scientific(value, precision);
  const decimals = Math.max(0, precision - Math.floor(Math.log10(abs)) - 1);
  const fixed = Number(value).toFixed(Math.min(12, decimals));
  return Number(fixed).toLocaleString('en-US', { maximumFractionDigits: Math.min(12, decimals) });
}
