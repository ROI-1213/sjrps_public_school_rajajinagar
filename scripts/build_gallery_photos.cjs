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

const allPhotos = [];

// 1. Process Events (public/images/Events)
const eventsBase = path.resolve('public/images/Events');
if (fs.existsSync(eventsBase)) {
  for (const eventName of fs.readdirSync(eventsBase)) {
    const eventDir = path.join(eventsBase, eventName);
    if (!fs.statSync(eventDir).isDirectory()) continue;
    
    const files = fs.readdirSync(eventDir).filter(f => /\.(jpg|jpeg|png)$/i.test(f));
    files.forEach((file, index) => {
      const fullPath = path.join(eventDir, file);
      const stat = fs.statSync(fullPath);
      const dims = getJpegDimensions(fs.readFileSync(fullPath));
      
      allPhotos.push({
        id: `event-${eventName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${index + 1}`,
        category: "events",
        subCategory: eventName,
        title: `${eventName} - Moment ${index + 1}`,
        src: `/images/Events/${eventName}/${file}`,
        sizeKb: Math.round(stat.size / 1024),
        width: dims ? dims.width : 0,
        height: dims ? dims.height : 0
      });
    });
  }
}

// 2. Process Photos (public/images/Photos) - EXCLUDING Staff photo & Core Team
const photosBase = path.resolve('public/images/Photos');
if (fs.existsSync(photosBase)) {
  for (const folder of fs.readdirSync(photosBase)) {
    if (['Staff photo', 'Core Team'].includes(folder)) continue; // EXCLUDE staff and core team
    const dir = path.join(photosBase, folder);
    if (!fs.statSync(dir).isDirectory()) continue;
    
    // Categorize logically
    let mainCategory = "campus";
    const lower = folder.toLowerCase();
    if (lower.includes('lab') || lower.includes('robotics')) {
      mainCategory = "labs";
    } else if (lower.includes('classroom')) {
      mainCategory = "classroom";
    } else if (lower.includes('sport') || lower.includes('taekwondo') || lower.includes('play') || lower.includes('cubs')) {
      mainCategory = "sports";
    } else if (lower.includes('music') || lower.includes('art') || lower.includes('yoga') || lower.includes('assembly')) {
      mainCategory = "cultural";
    } else if (lower.includes('building') || lower.includes('auditorium') || lower.includes('library') || lower.includes('ramp') || lower.includes('ro plant')) {
      mainCategory = "campus";
    }

    const files = fs.readdirSync(dir).filter(f => /\.(jpg|jpeg|png)$/i.test(f));
    files.forEach((file, index) => {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      const dims = getJpegDimensions(fs.readFileSync(fullPath));
      
      allPhotos.push({
        id: `photo-${folder.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${index + 1}`,
        category: mainCategory,
        subCategory: folder,
        title: `${folder} - Photo ${index + 1}`,
        src: `/images/Photos/${folder}/${file}`,
        sizeKb: Math.round(stat.size / 1024),
        width: dims ? dims.width : 0,
        height: dims ? dims.height : 0
      });
    });
  }
}

// 3. Process Old photos (public/images/Old photos)
const oldBase = path.resolve('public/images/Old photos');
if (fs.existsSync(oldBase)) {
  const files = fs.readdirSync(oldBase).filter(f => /\.(jpg|jpeg|png)$/i.test(f));
  files.forEach((file, index) => {
    const fullPath = path.join(oldBase, file);
    const stat = fs.statSync(fullPath);
    const dims = getJpegDimensions(fs.readFileSync(fullPath));
    
    allPhotos.push({
      id: `heritage-${index + 1}`,
      category: "heritage",
      subCategory: "Our Heritage",
      title: `Archival Heritage - Photo ${index + 1}`,
      src: `/images/Old photos/${file}`,
      sizeKb: Math.round(stat.size / 1024),
      width: dims ? dims.width : 0,
      height: dims ? dims.height : 0
    });
  });
}

console.log('Total gallery photos collected:', allPhotos.length);
const byCat = {};
for (const p of allPhotos) {
  byCat[p.category] = (byCat[p.category] || 0) + 1;
}
console.log('By category:', byCat);

fs.writeFileSync('scripts/all_gallery_photos.json', JSON.stringify(allPhotos, null, 2));
