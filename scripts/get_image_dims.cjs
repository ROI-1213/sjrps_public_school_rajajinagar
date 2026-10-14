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

const eventsDir = path.resolve('public/images/Events');
const subdirs = fs.readdirSync(eventsDir);

for (const sub of subdirs) {
  const fullSub = path.join(eventsDir, sub);
  if (!fs.statSync(fullSub).isDirectory()) continue;
  
  console.log(`\n=== EVENT: ${sub} ===`);
  const files = fs.readdirSync(fullSub).filter(f => /\.(jpg|jpeg|png)$/i.test(f));
  for (const f of files) {
    const fullFile = path.join(fullSub, f);
    const buf = fs.readFileSync(fullFile);
    const dim = getJpegDimensions(buf);
    const dimStr = dim ? `${dim.width}x${dim.height} (${(dim.width/dim.height).toFixed(2)})` : 'unknown';
    console.log(`  ${f}: ${dimStr} [${Math.round(buf.length/1024)} KB]`);
  }
}
