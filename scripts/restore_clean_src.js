const fs = require('fs');
const path = require('path');

function processDir(srcDir, outDir) {
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const outPath = path.join(outDir, entry.name);

    if (entry.isDirectory()) {
      fs.mkdirSync(outPath, { recursive: true });
      processDir(srcPath, outPath);
    } else if (entry.isFile()) {
      if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts') || entry.name.endsWith('.css')) {
        const content = fs.readFileSync(srcPath, 'utf8');
        const match = content.match(/\/\/# sourceMappingURL=data:application\/json;base64,([A-Za-z0-9+/=]+)/);
        if (match) {
          try {
            const json = JSON.parse(Buffer.from(match[1], 'base64').toString('utf8'));
            if (json.sourcesContent && json.sourcesContent[0]) {
              fs.mkdirSync(path.dirname(outPath), { recursive: true });
              fs.writeFileSync(outPath, json.sourcesContent[0]);
              continue;
            }
          } catch (e) {
            // fallback
          }
        }
        // If no sourcemap or fallback
        fs.mkdirSync(path.dirname(outPath), { recursive: true });
        fs.writeFileSync(outPath, content);
      } else {
        // Copy binary/other
        fs.mkdirSync(path.dirname(outPath), { recursive: true });
        fs.copyFileSync(srcPath, outPath);
      }
    }
  }
}

const inputDir = path.join(__dirname, 'hbr_site', 'src');
const outputDir = path.join(__dirname, 'hbr_clean', 'src');
fs.mkdirSync(outputDir, { recursive: true });
processDir(inputDir, outputDir);
console.log('Restoration of clean source code completed!');
