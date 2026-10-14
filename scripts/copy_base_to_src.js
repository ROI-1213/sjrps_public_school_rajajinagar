const fs = require('fs');
const path = require('path');

function copyDir(src, dest, skipFiles = []) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    const rel = path.relative(path.join(__dirname, 'hbr_clean', 'src'), srcPath).replace(/\\/g, '/');

    if (skipFiles.includes(rel)) {
      console.log(`Skipping custom file: ${rel}`);
      continue;
    }

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath, skipFiles);
    } else {
      fs.mkdirSync(path.dirname(destPath), { recursive: true });
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const skip = [
  'schoolConfig.ts',
  'lib/siteInfo.ts',
  'data/staff.ts',
  'data/events.ts',
  'data/gallery.ts',
  'data/disclosures.ts',
  'content/about.ts',
  'content/admissions.ts',
  'content/academics.ts',
  'content/infrastructure.ts'
];

copyDir(
  path.join(__dirname, 'hbr_clean', 'src'),
  path.join(__dirname, '..', 'src'),
  skip
);

console.log('Copied clean base source into src/ successfully!');
