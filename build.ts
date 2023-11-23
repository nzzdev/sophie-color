import fs from 'fs';
import VARS from './vars/general.json';

/* vars.scss */
const doNotEditCommentScss = '// Generated file. DO NOT EDIT!\n\n';

// Loop through the vars and save a vars.scss file.
const varsValues = Object.entries(VARS)
  .map(([key, value]) => `$${key}: ${value};`)
  .join('\n');

fs.writeFileSync('scss/vars.scss', doNotEditCommentScss + varsValues);

/* general.css */
const doNotEditCommentCSS = '/* Generated file. DO NOT EDIT! */\n\n';

// Loop through the vars and save a general.scss file.
const generalValues = Object.entries(VARS)
  .map(([key, value]) => `.${key} {\n  color: ${value};\n}`)
  .join('\n');


fs.writeFileSync('scss/general.css', doNotEditCommentCSS + generalValues);
