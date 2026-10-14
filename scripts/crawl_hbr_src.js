const fs = require('fs');
const path = require('path');

const baseUrl = 'https://sjrpshbr.sjres.edu.in';
const visited = new Set();
const queue = ['/src/main.tsx', '/src/App.tsx', '/src/index.css'];

async function crawl() {
  while (queue.length > 0) {
    const relUrl = queue.shift();
    if (visited.has(relUrl)) continue;
    visited.add(relUrl);

    try {
      const url = `${baseUrl}${relUrl.startsWith('/') ? '' : '/'}${relUrl}`;
      const res = await fetch(url);
      if (!res.ok) {
        console.log(`Failed [${res.status}]: ${relUrl}`);
        continue;
      }
      const text = await res.text();
      const localPath = path.join(__dirname, 'hbr_site', relUrl.replace(/^\//, ''));
      fs.mkdirSync(path.dirname(localPath), { recursive: true });
      fs.writeFileSync(localPath, text);
      console.log(`Saved: ${relUrl} (${text.length} bytes)`);

      // Find imports from /src/ or relative imports
      const importMatches = text.match(/from\s+["'](\/src\/[^"']+)["']/g) || [];
      for (const m of importMatches) {
        const target = m.replace(/^from\s+["']/, '').replace(/["']$/, '');
        if (!visited.has(target)) {
          queue.push(target);
        }
      }

      // Also relative imports like './...' or '../...'
      const relMatches = text.match(/from\s+["'](\.[^"']+)["']/g) || [];
      const currentDir = path.dirname(relUrl);
      for (const m of relMatches) {
        let rel = m.replace(/^from\s+["']/, '').replace(/["']$/, '');
        if (!rel.endsWith('.tsx') && !rel.endsWith('.ts') && !rel.endsWith('.css') && !rel.endsWith('.json')) {
          // Could be .tsx or .ts
          // We can try both
          let resolved = path.posix.join(currentDir, rel);
          queue.push(resolved + '.tsx');
          queue.push(resolved + '.ts');
        } else {
          let resolved = path.posix.join(currentDir, rel);
          queue.push(resolved);
        }
      }

      // Also check image imports or references like /lovable-uploads/ or /images/
      const imgMatches = text.match(/["'](\/(?:lovable-uploads|images|icons|assets)[^"']+)["']/g) || [];
      for (const m of imgMatches) {
        const target = m.replace(/^["']/, '').replace(/["']$/, '');
        if (!visited.has(target)) {
          // enqueue image download
          visited.add(target);
          try {
            const imgRes = await fetch(`${baseUrl}${target}`);
            if (imgRes.ok) {
              const buffer = Buffer.from(await imgRes.arrayBuffer());
              const imgLocalPath = path.join(__dirname, 'hbr_site', target.replace(/^\//, ''));
              fs.mkdirSync(path.dirname(imgLocalPath), { recursive: true });
              fs.writeFileSync(imgLocalPath, buffer);
              console.log(`Saved Asset: ${target} (${buffer.length} bytes)`);
            }
          } catch (e) {
            console.error(`Asset err: ${target}`, e.message);
          }
        }
      }

    } catch (err) {
      console.error(`Error on ${relUrl}:`, err.message);
    }
  }
  console.log(`Crawl completed. Visited ${visited.size} files.`);
}

crawl();
