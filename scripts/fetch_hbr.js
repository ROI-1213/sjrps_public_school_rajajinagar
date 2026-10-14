const fs = require('fs');
const path = require('path');

const baseUrl = 'https://sjrpshbr.sjres.edu.in';

async function fetchFile(relPath) {
  try {
    const res = await fetch(`${baseUrl}${relPath}`);
    if (res.ok) {
      const text = await res.text();
      return text;
    } else {
      return null;
    }
  } catch (err) {
    return null;
  }
}

async function main() {
  const filesToCheck = [
    '/package.json',
    '/tailwind.config.ts',
    '/tailwind.config.js',
    '/vite.config.ts',
    '/tsconfig.json',
    '/src/App.tsx',
    '/src/main.tsx',
    '/src/index.css',
  ];

  for (const f of filesToCheck) {
    const content = await fetchFile(f);
    if (content) {
      console.log(`FOUND: ${f} (${content.length} bytes)`);
      const dest = path.join(__dirname, 'hbr_raw', f);
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.writeFileSync(dest, content);
    } else {
      console.log(`NOT FOUND: ${f}`);
    }
  }
}

main();
