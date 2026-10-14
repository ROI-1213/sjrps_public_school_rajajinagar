const fs = require('fs');
const path = require('path');

const parsed = JSON.parse(fs.readFileSync('src/data/parsed_staff.json', 'utf8'));
const photoDir = path.join(__dirname, '..', 'public', 'images', 'Staff photo');
const availablePhotos = fs.readdirSync(photoDir);

console.log('Available photos count:', availablePhotos.length);

const staffMembers = parsed.map(member => {
  const num = member.slNo;
  // Find matching photo starting with `${num}.` or `${num} `
  let matchedPhoto = availablePhotos.find(p => {
    return p.startsWith(`${num}.`) || p.startsWith(`${num} `) || p.startsWith(`${num}_`);
  });

  if (!matchedPhoto) {
    // Try matching by name
    const cleanedName = member.name.replace(/^(Mrs\.|Mr\.|Ms\.)\s*/, '').trim().toLowerCase();
    matchedPhoto = availablePhotos.find(p => p.toLowerCase().includes(cleanedName));
  }

  let finalRole = member.role;
  if (member.id === 1) {
    finalRole = 'Principal';
  } else if (finalRole.includes('Co-ordinatort')) {
    finalRole = finalRole.replace('Co-ordinatort', 'Coordinator');
  }

  let sectionLabel = member.section;
  if (sectionLabel.includes('Staff details') || member.id === 1) {
    sectionLabel = 'Leadership';
  } else if (sectionLabel.includes('High School')) {
    sectionLabel = 'Secondary & High School';
  } else if (sectionLabel.includes('Primary section')) {
    sectionLabel = 'Primary Wing';
  } else if (sectionLabel.includes('Pre-Primary')) {
    sectionLabel = 'Pre-Primary Wing';
  } else if (sectionLabel.includes('Office Saff')) {
    sectionLabel = 'Administrative & Office Staff';
  } else if (sectionLabel.includes('Supporting')) {
    sectionLabel = 'Support Staff';
  }

  return {
    id: member.id,
    slNo: member.slNo,
    name: member.name,
    role: finalRole,
    qualification: member.qualification,
    experience: member.experience,
    section: sectionLabel,
    photo: matchedPhoto ? `/images/Staff photo/${encodeURIComponent(matchedPhoto)}` : '/placeholder.svg'
  };
});

console.log('Matched staff count:', staffMembers.length);
console.log('Staff with matched photos:', staffMembers.filter(s => s.photo !== '/placeholder.svg').length);

const tsContent = `// Structured faculty and staff directory populated from official school records
// Staff details -Website.xlsx and verified portrait photographs

export interface StaffMember {
  id: number;
  slNo: string;
  name: string;
  role: string;
  qualification: string;
  experience: string;
  section: string;
  photo: string;
}

export const staffMembers: StaffMember[] = ${JSON.stringify(staffMembers, null, 2)};
`;

fs.writeFileSync('src/data/staff.ts', tsContent);
console.log('Successfully written src/data/staff.ts');
