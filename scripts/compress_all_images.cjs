const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const TARGET_BYTES = 29.8 * 1024; // strictly below 30 KB

async function compressImage(filePath) {
  try {
    const origBuffer = fs.readFileSync(filePath);
    const origSize = origBuffer.length;

    // If already below 30KB, skip
    if (origSize <= TARGET_BYTES) {
      return { status: 'skipped', origSize, finalSize: origSize };
    }

    const ext = path.extname(filePath).toLowerCase();
    const isPng = ext === '.png';

    const image = sharp(origBuffer);
    const metadata = await image.metadata();

    // Fast targeted attempt sequence
    const attempts = [
      { width: 750, quality: 68 },
      { width: 680, quality: 62 },
      { width: 600, quality: 58 },
      { width: 540, quality: 52 },
      { width: 480, quality: 46 },
      { width: 420, quality: 40 },
    ];

    let bestBuffer = null;

    for (const step of attempts) {
      let pipeline = sharp(origBuffer).rotate();
      if (metadata.width && metadata.width > step.width) {
        pipeline = pipeline.resize({ width: step.width, withoutEnlargement: true });
      }

      let buf;
      if (isPng) {
        if (metadata.hasAlpha) {
          buf = await pipeline.png({ compressionLevel: 9, quality: step.quality, palette: true }).toBuffer();
        } else {
          buf = await pipeline.jpeg({ quality: step.quality, mozjpeg: true }).toBuffer();
        }
      } else {
        buf = await pipeline.jpeg({ quality: step.quality, mozjpeg: true }).toBuffer();
      }

      bestBuffer = buf;
      if (buf.length <= TARGET_BYTES) {
        break;
      }
    }

    if (bestBuffer && bestBuffer.length < origSize) {
      fs.writeFileSync(filePath, bestBuffer);
      return {
        status: 'compressed',
        origSize,
        finalSize: bestBuffer.length,
        passed: bestBuffer.length <= TARGET_BYTES
      };
    }

    return { status: 'kept', origSize, finalSize: origSize };
  } catch (err) {
    return { status: 'error', error: err.message };
  }
}

function getFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (const item of list) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (item !== 'node_modules' && item !== '.git') {
        results.push(...getFiles(full));
      }
    } else if (/\.(jpe?g|png)$/i.test(item)) {
      results.push(full);
    }
  }
  return results;
}

async function main() {
  console.log('Gathering images from public/images and src/assets...');
  const files1 = getFiles('public/images');
  const files2 = getFiles('src/assets');
  const allFiles = [...files1, ...files2];

  console.log(`Found ${allFiles.length} total image files.`);

  let totalOrigBytes = 0;
  let totalFinalBytes = 0;
  let compressedCount = 0;
  let skippedCount = 0;
  let aboveTargetCount = 0;

  for (let i = 0; i < allFiles.length; i++) {
    const file = allFiles[i];
    const res = await compressImage(file);
    if (res.status === 'compressed') {
      compressedCount++;
      totalOrigBytes += res.origSize;
      totalFinalBytes += res.finalSize;
      if (!res.passed) aboveTargetCount++;
    } else if (res.status === 'skipped') {
      skippedCount++;
      totalOrigBytes += res.origSize;
      totalFinalBytes += res.finalSize;
    } else {
      console.error(`Error on ${file}:`, res.error);
    }

    if ((i + 1) % 25 === 0 || i === allFiles.length - 1) {
      console.log(`Processed ${i + 1}/${allFiles.length} images...`);
    }
  }

  const origMB = (totalOrigBytes / 1024 / 1024).toFixed(1);
  const finalMB = (totalFinalBytes / 1024 / 1024).toFixed(1);
  const savedMB = ((totalOrigBytes - totalFinalBytes) / 1024 / 1024).toFixed(1);
  const percent = (((totalOrigBytes - totalFinalBytes) / totalOrigBytes) * 100).toFixed(1);

  console.log('\n=== COMPRESSION COMPLETED ===');
  console.log(`Total images: ${allFiles.length}`);
  console.log(`Images compressed: ${compressedCount}`);
  console.log(`Images already <= 30KB: ${skippedCount}`);
  console.log(`Images remaining > 30KB: ${aboveTargetCount}`);
  console.log(`Original total size: ${origMB} MB`);
  console.log(`New total size: ${finalMB} MB`);
  console.log(`Space saved: ${savedMB} MB (${percent}% reduction)`);
}

main();
