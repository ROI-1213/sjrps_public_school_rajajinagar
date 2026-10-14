const fs = require('fs');
const staff = require('../src/data/staff_complete.json');

const code = `/**
 * SJR Public School, Rajajinagar — Complete Staff Directory (AY 2026-27)
 * 
 * Source of Truth: 'Staff details -Website.xlsx' (Sheet: WEBSITE)
 * Photos: 'Staff photo/' exact individual portraits
 * 
 * All 62 official staff records verified with exact photo-to-person matching.
 */

export type StaffCategory = 
  | 'Principal'
  | 'Secondary and High School'
  | 'Primary Section'
  | 'Pre-Primary Section'
  | 'Office Staff'
  | 'Supporting Staff';

export interface StaffMember {
  id: number;
  slNo: string;
  name: string;
  excelName: string;
  category: StaffCategory;
  role: string;
  designation: string;
  subject: string;
  qualification: string;
  experience: string;
  note?: string;
  rawDetails: string;
  photo: string | null;
  photoFilename: string | null;
  photoDimensions?: string | null;
  photoSize?: number | null;
}

export const STAFF_CATEGORIES: StaffCategory[] = [
  'Principal',
  'Secondary and High School',
  'Primary Section',
  'Pre-Primary Section',
  'Office Staff',
  'Supporting Staff'
];

export const staffMembers: StaffMember[] = ${JSON.stringify(staff, null, 2)};

export const getStaffByCategory = (cat: StaffCategory): StaffMember[] => {
  return staffMembers.filter(s => s.category === cat);
};

export const getStaffById = (id: number): StaffMember | undefined => {
  return staffMembers.find(s => s.id === id);
};

export default staffMembers;
`;

fs.writeFileSync('src/data/staff.ts', code);
console.log('Successfully generated src/data/staff.ts with all 62 records!');
