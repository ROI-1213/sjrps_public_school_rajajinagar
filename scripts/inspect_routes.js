const fs = require('fs');

const content = fs.readFileSync('scripts/hbr_raw/src/App.tsx', 'utf8');
const lines = content.split('\n');
const routeLines = lines.filter(l => l.includes('Route') || l.includes('path:'));
console.log('Lines containing Route/path (sample 40):');
console.log(routeLines.slice(0, 40).join('\n'));
