import fs from 'fs';
import VARS from './vars/general.json';

const doNotEditComment = '// Generated file. DO NOT EDIT!\n\n';

// Loop through the vars and save a vars.scss file.
const varsValues = Object.entries(VARS)
  .map(([key, value]) => `$${key}: ${value};`)
  .join('\n');

fs.writeFileSync('scss/vars.scss', doNotEditComment + varsValues);

// Loop through the vars and save a general.scss file.
const generalValues = Object.entries(VARS)
  .map(([key, value]) => `.${key} {\n  color: ${value};\n}`)
  .join('\n');


fs.writeFileSync('scss/general.css', doNotEditComment + generalValues);
