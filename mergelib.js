const merge = require('concat');

const files = [
  './dist/angular-weather-elements/main.js',
  './dist/angular-weather-elements/polyfills.js',
  './dist/angular-weather-elements/runtime.js'
]

merge(files, './dist/angular-weather-elements/weathercard.js');
console.info('file generated');
