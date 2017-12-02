#!/usr/bin/env node
const sass = require('node-sass');
const jsonImporter = require('node-sass-json-importer');

console.log(sass.renderSync({
  file: 'main.scss',
  includePaths: ['scss'],
  importer: jsonImporter
}).css.toString());
