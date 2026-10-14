const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');

function scanDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDir(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith('.ts') || entry.name.endsWith('.tsx'))) {
      checkFile(fullPath);
    }
  }
}

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Match static imports: import ... from '@/assets/...' or from './...' or '../...'
  const regex = /import\s+(?:[\w*\s{},]+from\s+)?['"](@\/assets\/[^'"]+|\.[^'"]+)['"]/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const importPath = match[1];
    let resolvedPath;
    if (importPath.startsWith('@/assets/')) {
      resolvedPath = path.join(srcDir, 'assets', importPath.replace('@/assets/', ''));
    } else if (importPath.startsWith('.')) {
      resolvedPath = path.resolve(path.dirname(filePath), importPath);
    }

    if (resolvedPath) {
      // Check if file exists as-is, or with extensions .ts, .tsx, .js, .jsx, /index.ts, /index.tsx
      const possibleExtensions = ['', '.ts', '.tsx', '.js', '.jsx', '/index.ts', '/index.tsx'];
      let found = false;
      for (const ext of possibleExtensions) {
        if (fs.existsSync(resolvedPath + ext)) {
          found = true;
          break;
        }
      }
      if (!found) {
        const relFilePath = path.relative(path.join(__dirname, '..'), filePath);
        console.log(`[MISSING IMPORT] In ${relFilePath}: ${importPath}`);
      }
    }
  }
}

scanDir(srcDir);
console.log('Finished scanning all imports.');
