const fs = require('fs');
const path = require('path');

const targetFiles = [
  'src/pages/life/Activities.tsx',
  'src/pages/life/Celebrations.tsx',
  'src/pages/life/Infrastructure.tsx',
  'src/pages/life/Magazine.tsx',
  'src/pages/life/NationalFestivals.tsx',
  'src/pages/life/Scouts.tsx',
  'src/pages/life/Taekwondo.tsx',
  'src/pages/life/Testimonials.tsx',
  'src/pages/life/Workshops.tsx',
  'src/pages/about/AboutSJRPS.tsx',
  'src/pages/about/BoardMembers.tsx',
  'src/pages/academics/PrePrimary.tsx',
  'src/pages/academics/PrimarySchool.tsx',
  'src/pages/academics/SecondaryStage.tsx',
  'src/pages/admissions/Scholarship.tsx',
  'src/pages/campus/Sports.tsx',
];

targetFiles.forEach(relPath => {
  const fullPath = path.join(__dirname, '..', relPath);
  if (!fs.existsSync(fullPath)) return;
  let content = fs.readFileSync(fullPath, 'utf8');

  // Breadcrumbs and titles
  content = content.replace(/Life @ SJRPS-HBR/g, 'Life @ SJRPS-Rajajinagar');
  content = content.replace(/SJRPS-HBR Layout/g, 'SJRPS-Rajajinagar');
  content = content.replace(/SJR Public School, HBR Layout/g, 'SJR Public School, Rajajinagar');
  content = content.replace(/SJR HBR Layout/g, 'SJRPS-Rajajinagar');
  content = content.replace(/SJRPS-HBR/g, 'SJRPS-Rajajinagar');
  content = content.replace(/HBR campus/g, 'Rajajinagar campus');

  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`Updated ${relPath}`);
});
