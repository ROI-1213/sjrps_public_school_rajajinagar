const fs = require('fs');
const path = require('path');

const eventsDir = path.resolve('public/images/Events');
const subdirs = fs.readdirSync(eventsDir);

const results = {};

for (const sub of subdirs) {
  const fullSub = path.join(eventsDir, sub);
  if (!fs.statSync(fullSub).isDirectory()) continue;
  
  const files = fs.readdirSync(fullSub);
  const images = files.filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));
  const docs = files.filter(f => /\.(docx|doc|pdf|txt)$/i.test(f));
  
  results[sub] = {
    imageCount: images.length,
    images: images.map(img => `/images/Events/${sub}/${img}`),
    docs
  };
}

console.log(JSON.stringify(results, null, 2));
