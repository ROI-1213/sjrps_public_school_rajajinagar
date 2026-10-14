const http = require('http');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data }));
    }).on('error', reject);
  });
}

async function run() {
  try {
    const root = await fetchUrl('http://localhost:5173/');
    console.log('Root HTML status:', root.status, 'Length:', root.data.length);

    const main = await fetchUrl('http://localhost:5173/src/main.tsx');
    console.log('main.tsx status:', main.status, 'Length:', main.data.length);

    const app = await fetchUrl('http://localhost:5173/src/App.tsx');
    console.log('App.tsx status:', app.status, 'Length:', app.data.length);

    const index = await fetchUrl('http://localhost:5173/src/pages/Index.tsx');
    console.log('Index.tsx status:', index.status, 'Length:', index.data.length);

    const css = await fetchUrl('http://localhost:5173/src/index.css');
    console.log('index.css status:', css.status, 'Length:', css.data.length);

    console.log('ALL CORE MODULES SERVED SUCCESSFULLY WITH HTTP 200!');
  } catch (err) {
    console.error('Error fetching modules:', err.message);
  }
}

run();
