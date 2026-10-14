const sharp = require('sharp');
const fs = require('fs');

async function compressImageTo30KB(inputPath, outputPath) {
  const targetBytes = 29.8 * 1024; // strictly below 30 KB
  const image = sharp(inputPath);
  const metadata = await image.metadata();

  const isPng = inputPath.toLowerCase().endsWith('.png');

  // If already below target and small, keep or optimize gently
  const originalSize = fs.statSync(inputPath).size;
  if (originalSize <= targetBytes) {
    if (inputPath !== outputPath) {
      fs.copyFileSync(inputPath, outputPath);
    }
    return { size: originalSize, passed: true, note: 'already small' };
  }

  // Iterative parameter steps to find the optimal visual balance below 30KB
  const attempts = [
    { width: 800, quality: 72 },
    { width: 750, quality: 68 },
    { width: 700, quality: 65 },
    { width: 650, quality: 62 },
    { width: 600, quality: 60 },
    { width: 550, quality: 56 },
    { width: 500, quality: 52 },
    { width: 450, quality: 48 },
  ];

  let bestBuffer = null;

  for (const step of attempts) {
    let pipeline = sharp(inputPath).rotate(); // auto-orient by EXIF
    if (metadata.width && metadata.width > step.width) {
      pipeline = pipeline.resize({ width: step.width, withoutEnlargement: true });
    }

    let buf;
    if (isPng) {
      // For PNG, try png compression or webp/jpg if transparency is not present
      buf = await pipeline.png({ compressionLevel: 9, quality: step.quality, palette: true }).toBuffer();
      // If PNG is still too big and has no alpha, save as jpg
      if (buf.length > targetBytes && !metadata.hasAlpha) {
        buf = await pipeline.jpeg({ quality: step.quality, mozjpeg: true }).toBuffer();
      }
    } else {
      buf = await pipeline.jpeg({ quality: step.quality, mozjpeg: true }).toBuffer();
    }

    if (buf.length <= targetBytes) {
      bestBuffer = buf;
      break;
    }
    bestBuffer = buf; // fallback to closest
  }

  if (bestBuffer) {
    fs.writeFileSync(outputPath, bestBuffer);
    return { size: bestBuffer.length, passed: bestBuffer.length <= targetBytes };
  }
  return { size: originalSize, passed: false };
}

async function runTest() {
  const samples = [
    'public/images/Banner/banner-robotics-stem.jpg',
    'public/images/Homepage Photos/Home Page Photo1.jpg',
    'public/images/Photos/classroom/DSC00683.JPG',
    'public/images/Photos/Kids Play Area And Activity/A7400871.JPG', // 22.9 MB!
    'src/assets/Ira.jpg'
  ];

  for (const s of samples) {
    if (!fs.existsSync(s)) continue;
    const orig = fs.statSync(s).size;
    const res = await compressImageTo30KB(s, s + '.tmp.jpg');
    console.log(`${s}: ${(orig/1024).toFixed(0)} KB -> ${(res.size/1024).toFixed(1)} KB (Passed: ${res.passed})`);
    if (fs.existsSync(s + '.tmp.jpg')) fs.unlinkSync(s + '.tmp.jpg');
  }
}

runTest();
