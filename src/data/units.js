// All supported units live here. Factors convert to the category's base unit.
const aliases = (...values) => values;

export const unitData = {
  length: { name: 'Length', units: [
    { id: 'meter', name: 'Meter', symbol: 'm', factor: 1, aliases: aliases('m', 'meter', 'meters', 'metre', 'metres') },
    { id: 'kilometer', name: 'Kilometer', symbol: 'km', factor: 1000, aliases: aliases('km', 'kilometer', 'kilometers', 'kilometre', 'kilometres') },
    { id: 'centimeter', name: 'Centimeter', symbol: 'cm', factor: 0.01, aliases: aliases('cm', 'centimeter', 'centimeters', 'centimetre', 'centimetres') },
    { id: 'millimeter', name: 'Millimeter', symbol: 'mm', factor: 0.001, aliases: aliases('mm', 'millimeter', 'millimeters', 'millimetre', 'millimetres') },
    { id: 'mile', name: 'Mile', symbol: 'mi', factor: 1609.344, aliases: aliases('mi', 'mile', 'miles') },
    { id: 'yard', name: 'Yard', symbol: 'yd', factor: 0.9144, aliases: aliases('yd', 'yard', 'yards') },
    { id: 'foot', name: 'Foot', symbol: 'ft', factor: 0.3048, aliases: aliases('ft', 'foot', 'feet') },
    { id: 'inch', name: 'Inch', symbol: 'in', factor: 0.0254, aliases: aliases('in', 'inch', 'inches') }
  ]},
  mass: { name: 'Mass', units: [
    { id: 'kilogram', name: 'Kilogram', symbol: 'kg', factor: 1, aliases: aliases('kg', 'kilogram', 'kilograms', 'kilo', 'kilos') },
    { id: 'gram', name: 'Gram', symbol: 'g', factor: 0.001, aliases: aliases('g', 'gram', 'grams') },
    { id: 'milligram', name: 'Milligram', symbol: 'mg', factor: 0.000001, aliases: aliases('mg', 'milligram', 'milligrams') },
    { id: 'tonne', name: 'Tonne', symbol: 't', factor: 1000, aliases: aliases('t', 'tonne', 'tonnes', 'metric ton') },
    { id: 'pound', name: 'Pound', symbol: 'lb', factor: 0.45359237, aliases: aliases('lb', 'lbs', 'pound', 'pounds') },
    { id: 'ounce', name: 'Ounce', symbol: 'oz', factor: 0.028349523125, aliases: aliases('oz', 'ounce', 'ounces') }
  ]},
  time: { name: 'Time', units: [
    { id: 'second', name: 'Second', symbol: 's', factor: 1, aliases: aliases('s', 'sec', 'second', 'seconds') },
    { id: 'minute', name: 'Minute', symbol: 'min', factor: 60, aliases: aliases('min', 'minute', 'minutes') },
    { id: 'hour', name: 'Hour', symbol: 'h', factor: 3600, aliases: aliases('h', 'hr', 'hour', 'hours') },
    { id: 'day', name: 'Day', symbol: 'd', factor: 86400, aliases: aliases('d', 'day', 'days') },
    { id: 'week', name: 'Week', symbol: 'wk', factor: 604800, aliases: aliases('wk', 'week', 'weeks') },
    { id: 'year', name: 'Year', symbol: 'yr', factor: 31557600, aliases: aliases('yr', 'year', 'years') }
  ]},
  temperature: { name: 'Temperature', units: [
    { id: 'celsius', name: 'Celsius', symbol: '°C', aliases: aliases('c', '°c', 'celsius', 'centigrade'), toBase: v => v, fromBase: v => v },
    { id: 'fahrenheit', name: 'Fahrenheit', symbol: '°F', aliases: aliases('f', '°f', 'fahrenheit'), toBase: v => (v - 32) * 5 / 9, fromBase: v => v * 9 / 5 + 32 },
    { id: 'kelvin', name: 'Kelvin', symbol: 'K', aliases: aliases('k', 'kelvin'), toBase: v => v - 273.15, fromBase: v => v + 273.15 }
  ]},
  speed: { name: 'Speed', units: [
    { id: 'mps', name: 'Meter per second', symbol: 'm/s', factor: 1, aliases: aliases('m/s', 'mps', 'meter per second', 'metres per second') },
    { id: 'kmph', name: 'Kilometer per hour', symbol: 'km/h', factor: 0.2777777778, aliases: aliases('km/h', 'kmph', 'kph', 'kilometer per hour', 'kilometres per hour') },
    { id: 'mph', name: 'Mile per hour', symbol: 'mph', factor: 0.44704, aliases: aliases('mph', 'mile per hour', 'miles per hour') },
    { id: 'knot', name: 'Knot', symbol: 'kn', factor: 0.5144444444, aliases: aliases('kn', 'knot', 'knots') }
  ]},
  area: { name: 'Area', units: [
    { id: 'sqm', name: 'Square meter', symbol: 'm²', factor: 1, aliases: aliases('m²', 'm2', 'square meter', 'square metre', 'sqm') },
    { id: 'sqkm', name: 'Square kilometer', symbol: 'km²', factor: 1e6, aliases: aliases('km²', 'km2', 'square kilometer', 'square kilometre', 'sqkm') },
    { id: 'hectare', name: 'Hectare', symbol: 'ha', factor: 10000, aliases: aliases('ha', 'hectare', 'hectares') },
    { id: 'sqft', name: 'Square foot', symbol: 'ft²', factor: 0.09290304, aliases: aliases('ft²', 'ft2', 'square foot', 'square feet', 'sqft') },
    { id: 'acre', name: 'Acre', symbol: 'ac', factor: 4046.8564224, aliases: aliases('ac', 'acre', 'acres') }
  ]},
  volume: { name: 'Volume', units: [
    { id: 'cubicmeter', name: 'Cubic meter', symbol: 'm³', factor: 1, aliases: aliases('m³', 'm3', 'cubic meter', 'cubic metre') },
    { id: 'liter', name: 'Liter', symbol: 'L', factor: 0.001, aliases: aliases('l', 'liter', 'liters', 'litre', 'litres') },
    { id: 'milliliter', name: 'Milliliter', symbol: 'mL', factor: 0.000001, aliases: aliases('ml', 'milliliter', 'milliliters', 'millilitre', 'millilitres') },
    { id: 'gallon', name: 'Gallon (US)', symbol: 'gal', factor: 0.003785411784, aliases: aliases('gal', 'gallon', 'gallons') }
  ]},
  pressure: { name: 'Pressure', units: [
    { id: 'pascal', name: 'Pascal', symbol: 'Pa', factor: 1, aliases: aliases('pa', 'pascal', 'pascals') },
    { id: 'kpa', name: 'Kilopascal', symbol: 'kPa', factor: 1000, aliases: aliases('kpa', 'kilopascal', 'kilopascals') },
    { id: 'bar', name: 'Bar', symbol: 'bar', factor: 100000, aliases: aliases('bar', 'bars') },
    { id: 'psi', name: 'PSI', symbol: 'psi', factor: 6894.757293, aliases: aliases('psi', 'pounds per square inch') },
    { id: 'atm', name: 'Atmosphere', symbol: 'atm', factor: 101325, aliases: aliases('atm', 'atmosphere', 'atmospheres') }
  ]},
  energy: { name: 'Energy', units: [
    { id: 'joule', name: 'Joule', symbol: 'J', factor: 1, aliases: aliases('j', 'joule', 'joules') },
    { id: 'kj', name: 'Kilojoule', symbol: 'kJ', factor: 1000, aliases: aliases('kj', 'kilojoule', 'kilojoules') },
    { id: 'cal', name: 'Calorie', symbol: 'cal', factor: 4.184, aliases: aliases('cal', 'calorie', 'calories') },
    { id: 'kwh', name: 'Kilowatt-hour', symbol: 'kWh', factor: 3600000, aliases: aliases('kwh', 'kilowatt hour', 'kilowatt-hours') }
  ]},
  power: { name: 'Power', units: [
    { id: 'watt', name: 'Watt', symbol: 'W', factor: 1, aliases: aliases('w', 'watt', 'watts') },
    { id: 'kw', name: 'Kilowatt', symbol: 'kW', factor: 1000, aliases: aliases('kw', 'kilowatt', 'kilowatts') },
    { id: 'hp', name: 'Horsepower', symbol: 'hp', factor: 745.69987158, aliases: aliases('hp', 'horsepower') }
  ]},
  force: { name: 'Force', units: [
    { id: 'newton', name: 'Newton', symbol: 'N', factor: 1, aliases: aliases('n', 'newton', 'newtons') },
    { id: 'kilonewton', name: 'Kilonewton', symbol: 'kN', factor: 1000, aliases: aliases('kn', 'kilonewton', 'kilonewtons') },
    { id: 'poundforce', name: 'Pound-force', symbol: 'lbf', factor: 4.4482216153, aliases: aliases('lbf', 'pound force', 'pound-force') }
  ]},
  frequency: { name: 'Frequency', units: [
    { id: 'hertz', name: 'Hertz', symbol: 'Hz', factor: 1, aliases: aliases('hz', 'hertz') },
    { id: 'khz', name: 'Kilohertz', symbol: 'kHz', factor: 1000, aliases: aliases('khz', 'kilohertz') },
    { id: 'mhz', name: 'Megahertz', symbol: 'MHz', factor: 1e6, aliases: aliases('mhz', 'megahertz') }
  ]},
  angle: { name: 'Angle', units: [
    { id: 'radian', name: 'Radian', symbol: 'rad', factor: 1, aliases: aliases('rad', 'radian', 'radians') },
    { id: 'degree', name: 'Degree', symbol: '°', factor: Math.PI / 180, aliases: aliases('°', 'deg', 'degree', 'degrees') },
    { id: 'gradian', name: 'Gradian', symbol: 'grad', factor: Math.PI / 200, aliases: aliases('grad', 'gradian', 'gradians') }
  ]},
  data: { name: 'Data', units: [
    { id: 'byte', name: 'Byte', symbol: 'B', factor: 1, aliases: aliases('b', 'byte', 'bytes') },
    { id: 'kb', name: 'Kilobyte', symbol: 'KB', factor: 1024, aliases: aliases('kb', 'kilobyte', 'kilobytes') },
    { id: 'mb', name: 'Megabyte', symbol: 'MB', factor: 1048576, aliases: aliases('mb', 'megabyte', 'megabytes') },
    { id: 'gb', name: 'Gigabyte', symbol: 'GB', factor: 1073741824, aliases: aliases('gb', 'gigabyte', 'gigabytes') },
    { id: 'tb', name: 'Terabyte', symbol: 'TB', factor: 1099511627776, aliases: aliases('tb', 'terabyte', 'terabytes') }
  ]}
};

export const categoryOrder = Object.keys(unitData);
