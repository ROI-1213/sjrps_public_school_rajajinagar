const fs = require('fs');

const content = fs.readFileSync('src/index.css', 'utf8');

// Find the string literal for __vite__css
const startPrefix = 'const __vite__css = "';
const startIndex = content.indexOf(startPrefix);

if (startIndex !== -1) {
  const cssStringStart = startIndex + startPrefix.length - 1; // start at the quote "
  // find the end of the JSON string
  // It ends before \n__vite__updateStyle
  const endMarker = '\n__vite__updateStyle';
  let endIndex = content.indexOf(endMarker, cssStringStart);
  if (endIndex === -1) {
    endIndex = content.lastIndexOf('"');
  } else {
    // find the quote before endMarker
    endIndex = content.lastIndexOf('"', endIndex) + 1;
  }

  const rawJsonString = content.substring(cssStringStart, endIndex);
  try {
    const css = JSON.parse(rawJsonString);
    fs.writeFileSync('src/index.css', css, 'utf8');
    console.log('Successfully wrote pure CSS to src/index.css! Length:', css.length);
  } catch (err) {
    console.error('Failed to parse JSON string:', err.message);
  }
} else {
  console.log('startPrefix not found');
}
