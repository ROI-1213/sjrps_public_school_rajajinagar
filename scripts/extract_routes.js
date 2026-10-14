const fs = require('fs');

const content = fs.readFileSync('scripts/hbr_raw/src/App.tsx', 'utf8');
const routes = [];
const regex = /<Route\s+path=["']([^"']+)["']\s+element=\{([^}]+)\}/g;
let m;
while ((m = regex.exec(content)) !== null) {
  routes.push({ path: m[1], element: m[2].trim() });
}
console.log('Total routes found:', routes.length);
routes.forEach(r => console.log(`${r.path} -> ${r.element}`));
