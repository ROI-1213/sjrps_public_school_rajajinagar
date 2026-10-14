const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');
const assetsDir = path.join(srcDir, 'assets');
const publicImagesDir = path.join(__dirname, '..', 'public', 'images');

// Collect available real photos
function collectImages(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(collectImages(full));
    } else if (entry.isFile() && /\.(jpg|jpeg|png|webp)$/i.test(entry.name)) {
      results.push(full);
    }
  }
  return results;
}

const realPhotos = collectImages(publicImagesDir);
console.log(`Found ${realPhotos.length} real photos in public/images/`);

// A sample 1x1 transparent/neutral JPEG buffer or simple SVG buffer
// Or better: copy a real photo from public/images/!
const defaultFallbackPhoto = realPhotos.find(p => p.includes('School Building')) || realPhotos[0];

function scanAndResolve(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanAndResolve(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith('.ts') || entry.name.endsWith('.tsx'))) {
      resolveFileImports(fullPath);
    }
  }
}

function resolveFileImports(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const regex = /import\s+(?:[\w*\s{},]+from\s+)?['"](@\/assets\/[^'"]+)['"]/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const importPath = match[1];
    const relAssetPath = importPath.replace('@/assets/', '');
    const fullAssetPath = path.join(assetsDir, relAssetPath);

    if (!fs.existsSync(fullAssetPath)) {
      const assetDir = path.dirname(fullAssetPath);
      if (!fs.existsSync(assetDir)) {
        fs.mkdirSync(assetDir, { recursive: true });
      }

      // Pick an appropriate real photo to copy
      let sourceToCopy = defaultFallbackPhoto;
      if (relAssetPath.includes('sports') || relAssetPath.includes('tkd') || relAssetPath.includes('byc')) {
        sourceToCopy = realPhotos.find(p => p.includes('Sports')) || defaultFallbackPhoto;
      } else if (relAssetPath.includes('lab') || relAssetPath.includes('cl')) {
        sourceToCopy = realPhotos.find(p => p.includes('Infrastructure')) || defaultFallbackPhoto;
      } else if (relAssetPath.includes('audi') || relAssetPath.includes('celebration')) {
        sourceToCopy = realPhotos.find(p => p.includes('Investiture') || p.includes('Ganesha')) || defaultFallbackPhoto;
      } else if (relAssetPath.includes('faculty') || relAssetPath.includes('leadership')) {
        sourceToCopy = realPhotos.find(p => p.includes('Staff photo') || p.includes('Core team')) || defaultFallbackPhoto;
      }

      fs.copyFileSync(sourceToCopy, fullAssetPath);
      console.log(`Created fallback for ${relAssetPath} from ${path.basename(sourceToCopy)}`);
    }
  }
}

scanAndResolve(srcDir);
console.log('Finished resolving all missing imported assets.');
