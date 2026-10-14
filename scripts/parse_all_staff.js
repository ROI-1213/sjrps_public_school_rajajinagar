const fs = require('fs');

const raw = fs.readFileSync('src/data/raw_staff.json', 'utf8').replace(/^\uFEFF/, '');
const rows = JSON.parse(raw);

let currentSection = 'General';
const staffList = [];

rows.forEach((r, idx) => {
  const rowNum = idx + 1;
  const colA = r[`A${rowNum}`];
  const colB = r[`B${rowNum}`];
  const colC = r[`C${rowNum}`];

  if (colA && !colB && !colC) {
    currentSection = String(colA).trim();
    return;
  }

  if (colB && typeof colB === 'string' && colB.trim() && colB.trim() !== 'Employee Name') {
    let name = colB.trim().replace(/\n.*$/, '');
    let details = typeof colC === 'string' ? colC : '';
    let parts = details.split('\n').map(s => s.trim()).filter(Boolean);
    let role = parts[0] || 'Faculty';
    let qualification = parts[1] || '';
    let experience = parts[2] || '';

    // If role has coordinator or specific note
    staffList.push({
      id: staffList.length + 1,
      slNo: colA ? String(colA).replace('.0', '') : String(staffList.length + 1),
      section: currentSection,
      name,
      role,
      qualification,
      experience,
      photo: `/images/Staff photo/${staffList.length + 1}. ${name}.jpg`
    });
  }
});

console.log('Total extracted staff:', staffList.length);
console.log('Sections:', [...new Set(staffList.map(s => s.section))]);
console.log('Sample 10 items:\n', JSON.stringify(staffList.slice(0, 10), null, 2));

// Save to parsed_staff.json
fs.writeFileSync('src/data/parsed_staff.json', JSON.stringify(staffList, null, 2));
