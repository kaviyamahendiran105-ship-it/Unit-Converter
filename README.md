# Unit Converter

A polished, fast React unit converter for everyday conversions. It supports length, mass, time, temperature, speed, area, volume, pressure, energy, power, force, frequency, angle, and data.

## Run locally

Requirements: Node.js 18 or newer.

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000). To create a production build:

```bash
npm run build
```

The generated `build/` folder can be deployed to any static host that supports React single-page apps.

## Features

- Instant conversions with a full all-units table.
- Search phrases such as `5 km to miles` or `100 f to c`.
- Decimal, scientific, and engineering number formats.
- Adjustable significant precision with saved preferences.
- Copy buttons for results and table rows.
- Click any table row to make it the target unit.
- Step-by-step calculation explanations.
- Real-world “Feel it” comparisons.
- Persistent dark mode with system-theme detection.
- Branded SVG logo, favicon, web manifest, robots policy, and SEO metadata.

## Project structure

```text
unitconvertor/
├── package.json              # Scripts and dependencies
├── public/
│   ├── index.html            # SEO metadata and app shell
│   ├── logo.svg              # App logo / install icon
│   ├── favicon.svg           # Browser tab icon
│   ├── manifest.json         # PWA metadata
│   ├── manus-routes.json     # Public route declaration
│   └── robots.txt            # Crawler policy
└── src/
    ├── App.js                # State and component composition
    ├── App.css               # App layout and themes
    ├── index.js              # React entrypoint
    ├── index.css             # Global reset and typography
    ├── components/           # Small UI components
    ├── data/
    │   ├── units.js          # Units, factors, aliases, temperature formulas
    │   └── references.js      # Real-world comparison references
    └── utils/
        ├── convert.js        # Base-unit conversion helpers
        ├── format.js         # Number formatting
        └── search.js         # Search phrase parsing and unit matching
```

## Adding a unit

Add a unit object to the correct category in `src/data/units.js`. Factor-based units need a `factor` relative to that category’s base unit. Add alternative names and symbols to `aliases` so the search bar can understand them. Temperature units use `toBase` and `fromBase` functions instead of a factor.
