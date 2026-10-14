const fs = require('fs');
const path = require('path');

function scan(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) {
      if (f !== 'node_modules' && f !== '.git') scan(p);
    } else if (/\.(tsx?|jsx?|css)$/.test(f)) {
      const c = fs.readFileSync(p, 'utf8');
      const regex = /['"][^'"]*assets\/[^'"]*['"]/g;
      const m = c.match(regex);
      if (m) console.log(p, m);
    }
  }
}

scan('src');
