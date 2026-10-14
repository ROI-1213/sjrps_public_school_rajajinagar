const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'pages', 'facilities');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  const importLines = content.split('\n').filter(line => line.includes('@/assets/facilities'));
  importLines.forEach(line => {
    const match = line.match(/from ["']@\/assets\/facilities\/([^"']+)["']/);
    if (match) {
      const assetPath = path.join(__dirname, '..', 'src', 'assets', 'facilities', match[1]);
      const exists = fs.existsSync(assetPath);
      if (!exists) {
        console.log(`[MISSING] ${file} -> @/assets/facilities/${match[1]}`);
      }
    }
  });
});
