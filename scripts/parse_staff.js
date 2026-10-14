const fs = require('fs');

let raw = fs.readFileSync('src/data/raw_staff.json', 'utf8').replace(/^\uFEFF/, '');
const rows = JSON.parse(raw);
console.log('Total rows:', rows.length);

for (let i = 0; i < Math.min(30, rows.length); i++) {
  console.log(`Row ${i + 1}:`, rows[i]);
}
