const sharp = require('sharp');
const fs = require('fs');

async function test() {
  const tests = [
    { src: 'public/images/Banner/banner-robotics-stem.jpg', name: 'banner-stem' },
    { src: 'public/images/Homepage Photos/Home Page Photo1.jpg', name: 'home-1' },
    { src: 'public/images/Photos/classroom/DSC00683.JPG', name: 'classroom' },
    { src: 'src/assets/Ira.jpg', name: 'ira' }
  ];

  for (const t of tests) {
    if (!fs.existsSync(t.src)) continue;
    const origSize = fs.statSync(t.src).size;
    
    // Test 1: WebP 800px width, quality 70
    const bufWebp = await sharp(t.src)
      .resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 65, effort: 6 })
      .toBuffer();

    // Test 2: JPEG 800px width, quality 70, mozjpeg
    const bufJpg = await sharp(t.src)
      .resize({ width: 800, withoutEnlargement: true })
      .jpeg({ quality: 65, mozjpeg: true })
      .toBuffer();

    // Test 3: JPEG 600px width, quality 60
    const bufJpg600 = await sharp(t.src)
      .resize({ width: 640, withoutEnlargement: true })
      .jpeg({ quality: 60, mozjpeg: true })
      .toBuffer();

    console.log(`[${t.name}] Orig: ${(origSize/1024).toFixed(0)} KB | WebP 800: ${(bufWebp.length/1024).toFixed(1)} KB | JPG 800: ${(bufJpg.length/1024).toFixed(1)} KB | JPG 640: ${(bufJpg600.length/1024).toFixed(1)} KB`);
  }
}

test();
