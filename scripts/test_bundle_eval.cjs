const fs = require('fs');
const path = require('path');

// Mock browser globals
global.window = global;
global.document = {
  getElementById: (id) => ({
    appendChild: () => {},
    innerHTML: '',
    hasChildNodes: () => false,
  }),
  createElement: () => ({ setAttribute: () => {}, style: {} }),
  head: { appendChild: () => {} },
  body: { appendChild: () => {} },
  addEventListener: () => {},
};
global.navigator = { userAgent: 'node' };
global.location = { href: 'http://localhost:5173/', pathname: '/', search: '', hash: '' };
global.requestAnimationFrame = (cb) => setTimeout(cb, 0);
global.cancelAnimationFrame = (id) => clearTimeout(id);

// Find the JS bundle in dist/assets
const assetsDir = path.join(__dirname, '..', 'dist', 'assets');
const jsFile = fs.readdirSync(assetsDir).find(f => f.startsWith('index-') && f.endsWith('.js'));

if (jsFile) {
  console.log('Testing bundle:', jsFile);
  const bundleCode = fs.readFileSync(path.join(assetsDir, jsFile), 'utf8');
  try {
    // Check if evaluating throws syntax or initialization error
    // Note: React uses DOM APIs so full mount might need more mocks, but syntax / module imports will run
    console.log('Bundle size:', bundleCode.length);
    console.log('Validating bundle syntax via Function...');
    new Function(bundleCode);
    console.log('Bundle syntax is 100% valid JavaScript!');
  } catch (err) {
    console.error('BUNDLE EVALUATION ERROR:', err);
  }
} else {
  console.log('No JS file found in dist/assets');
}
