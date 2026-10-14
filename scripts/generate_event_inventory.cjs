const fs = require('fs');
const path = require('path');

function getJpegDimensions(buffer) {
  let i = 2;
  while (i < buffer.length) {
    if (buffer[i] !== 0xFF) { i++; continue; }
    const marker = buffer[i + 1];
    if (marker === 0xC0 || marker === 0xC1 || marker === 0xC2) {
      const height = buffer.readUInt16BE(i + 5);
      const width = buffer.readUInt16BE(i + 7);
      return { width, height };
    }
    const len = buffer.readUInt16BE(i + 2);
    i += 2 + len;
  }
  return null;
}

const baseDir = path.resolve('public/images/Events');
const dirs = fs.readdirSync(baseDir);

const inventory = [];

for (const dir of dirs) {
  const dirPath = path.join(baseDir, dir);
  if (!fs.statSync(dirPath).isDirectory()) continue;

  const allFiles = fs.readdirSync(dirPath);
  const images = [];
  const docs = [];

  for (const f of allFiles) {
    const filePath = path.join(dirPath, f);
    const stat = fs.statSync(filePath);
    if (/\.(jpg|jpeg|png)$/i.test(f)) {
      const buf = fs.readFileSync(filePath);
      const dims = getJpegDimensions(buf);
      images.push({
        filename: f,
        webPath: `/images/Events/${dir}/${f}`,
        sizeBytes: stat.size,
        sizeKb: Math.round(stat.size / 1024),
        width: dims ? dims.width : 0,
        height: dims ? dims.height : 0,
        aspectRatio: dims ? (dims.width / dims.height).toFixed(2) : "unknown",
        isLandscape: dims ? dims.width > dims.height : false
      });
    } else if (/\.(docx|doc|pdf|txt)$/i.test(f)) {
      docs.push({
        filename: f,
        sizeBytes: stat.size
      });
    }
  }

  inventory.push({
    folder: dir,
    imageCount: images.length,
    docCount: docs.length,
    docs,
    images
  });
}

fs.writeFileSync('scripts/event_inventory_data.json', JSON.stringify(inventory, null, 2));
console.log('Processed', inventory.length, 'event folders, total images:', inventory.reduce((acc, e) => acc + e.imageCount, 0));
